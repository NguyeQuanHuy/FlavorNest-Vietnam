'use client'

// ─────────────────────────────────────────────────────────────────────────────
//  app/menu-decoder/_components/MenuScanner.tsx
//  "Scan a menu": photo → on-device OCR (Tesseract.js, Vietnamese + English)
//  → every line is matched against the dish list → explained dish cards.
//  Privacy: the photo never leaves the device. Only the OCR engine and its
//  language files are downloaded (once, then cached by the browser).
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, RotateCcw, ShieldCheck, ChevronRight, Flame, Lightbulb, ImageUp } from 'lucide-react'
import { ALLERGEN_INFO, decodeWords, type Dish } from '@/data/menu-decoder'
import type { DishLinks } from './MenuDecoderClient'
import { explainLine, composeDish, type ComposedDish } from '@/data/menu-compose'
import ComposedDishCard from './ComposedDishCard'

type Phase = 'idle' | 'loading' | 'reading' | 'done' | 'error'
interface Found { dish: Dish; line: string; note?: string }
interface Partial { line: string; words: { text: string; en: string }[] }

const serif = { fontFamily: "'Playfair Display', Georgia, serif" }
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

// Minimal shape of the Tesseract worker we use (keeps the heavy lib out of the main bundle)
interface OcrWorker { recognize: (img: HTMLCanvasElement) => Promise<{ data: { text: string } }>; terminate: () => Promise<unknown> }

/** Downscale big phone photos + grayscale — faster and usually more accurate OCR. */
async function prepare(file: File): Promise<{ canvas: HTMLCanvasElement; preview: string }> {
    const url = URL.createObjectURL(file)
    try {
        const img = await new Promise<HTMLImageElement>((res, rej) => {
            const i = new window.Image()
            i.onload = () => res(i); i.onerror = () => rej(new Error('Could not open this image'))
            i.src = url
        })
        const max = 2200
        const s = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight))
        const canvas = document.createElement('canvas')
        canvas.width = Math.round(img.naturalWidth * s)
        canvas.height = Math.round(img.naturalHeight * s)
        const ctx = canvas.getContext('2d')!
        ctx.filter = 'grayscale(1) contrast(1.25)'
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        // small preview for the UI (colour)
        const pv = document.createElement('canvas')
        const ps = Math.min(1, 480 / Math.max(img.naturalWidth, img.naturalHeight))
        pv.width = Math.round(img.naturalWidth * ps); pv.height = Math.round(img.naturalHeight * ps)
        pv.getContext('2d')!.drawImage(img, 0, 0, pv.width, pv.height)
        return { canvas, preview: pv.toDataURL('image/jpeg', 0.8) }
    } finally {
        URL.revokeObjectURL(url)
    }
}

/** Turn OCR text into: dishes from our guide, dishes explained from their words, and lines we could only partly read. */
function analyse(text: string): { found: Found[]; composed: ComposedDish[]; partial: Partial[] } {
    const lines = text.split(/\n+/)
        .map(l => l.replace(/[|_~*•·]+/g, ' ').replace(/\s+/g, ' ').trim())
        .filter(l => l.replace(/[^\p{L}]/gu, '').length >= 3)
    const found: Found[] = []
    const seen = new Set<string>()
    const partial: Partial[] = []
    const composed: ComposedDish[] = []
    const seenTitles = new Set<string>()
    // Menus abroad often print a translation under each dish ("M2. Cơm gà xối mỡ 12,90 €" / "Knuspriges Hähnchen mit Reis").
    // A line without number or price right after a numbered / priced line is treated as that dish's description.
    const isHead = (l: string) => /^\s*[A-Za-z]?\d{1,3}[.)]?\s/.test(l) || /\d+[.,]\d{2}/.test(l)
    const numbered = lines.filter(isHead).length >= 2
    let last: { kind: 'found'; i: number } | { kind: 'composed'; i: number } | null = null
    for (const line of lines) {
        if (numbered && last && !isHead(line)) {
            const extra = composeDish(line)
            if (last.kind === 'found') found[last.i].note ??= line
            else {
                const prev = composed[last.i]
                prev.note ??= line
                if (extra) {
                    prev.allergens = [...new Set([...prev.allergens, ...extra.allergens])]
                    prev.spice = Math.max(prev.spice, extra.spice) as 0 | 1 | 2 | 3
                    prev.madeWith = [...new Set([...prev.madeWith, ...extra.madeWith])]
                    if (!prev.desc && extra.desc) prev.desc = extra.desc
                }
            }
            continue
        }
        last = null
        const { dish, composed: c } = explainLine(line)
        if (dish) {
            if (!seen.has(dish.id)) { seen.add(dish.id); found.push({ dish, line }); last = { kind: 'found', i: found.length - 1 } }
            continue
        }
        if (c) {
            if (!seenTitles.has(c.title) && composed.length < 25) { seenTitles.add(c.title); composed.push(c); last = { kind: 'composed', i: composed.length - 1 } }
            continue
        }
        const words = decodeWords(line).filter(w => w.word).map(w => ({ text: w.text, en: w.word!.en }))
        if (words.length >= 2 && partial.length < 10) partial.push({ line, words })
    }
    return { found, composed, partial }
}

export default function MenuScanner({ open, onClose, onOpenDish, links }: {
    open: boolean
    onClose: () => void
    onOpenDish: (d: Dish) => void
    links: DishLinks
}) {
    const [phase, setPhase] = useState<Phase>('idle')
    const [progress, setProgress] = useState(0)
    const [preview, setPreview] = useState<string | null>(null)
    const [found, setFound] = useState<Found[]>([])
    const [partial, setPartial] = useState<Partial[]>([])
    const [composed, setComposed] = useState<ComposedDish[]>([])
    const [rawText, setRawText] = useState('')
    const [error, setError] = useState('')
    const fileRef = useRef<HTMLInputElement>(null)
    const workerRef = useRef<OcrWorker | null>(null)

    // free the OCR worker when leaving the page
    useEffect(() => () => { void workerRef.current?.terminate() }, [])

    useEffect(() => {
        if (!open) return
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        // Esc closes the dish sheet first (it sits on top), then the scanner
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && !document.querySelector('[data-dish-sheet]')) onClose() }
        window.addEventListener('keydown', onKey)
        return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
    }, [open, onClose])

    const reset = () => { setPhase('idle'); setPreview(null); setFound([]); setPartial([]); setComposed([]); setRawText(''); setProgress(0); setError('') }

    const run = async (file: File) => {
        setError(''); setFound([]); setPartial([]); setComposed([]); setRawText(''); setProgress(0)
        try {
            const { canvas, preview } = await prepare(file)
            setPreview(preview)
            if (!workerRef.current) {
                setPhase('loading')
                const { createWorker } = await import('tesseract.js')
                workerRef.current = (await createWorker(['vie', 'eng'], 1, {
                    logger: (m: { status: string; progress: number }) => {
                        if (m.status === 'recognizing text') { setPhase('reading'); setProgress(m.progress) }
                    },
                })) as unknown as OcrWorker
            }
            setPhase('reading')
            const { data } = await workerRef.current.recognize(canvas)
            const res = analyse(data.text)
            setFound(res.found); setPartial(res.partial); setComposed(res.composed); setRawText(data.text.trim())
            setPhase('done')
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Something went wrong')
            setPhase('error')
        }
    }

    const pick = () => fileRef.current?.click()
    const total = found.length + composed.length

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div className="fixed inset-0 z-[120]" style={{ background: 'rgba(20,11,5,0.55)', backdropFilter: 'blur(3px)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
                    <motion.div
                        role="dialog" aria-modal="true" aria-label="Scan a menu"
                        className="fixed inset-x-0 bottom-0 z-[121] flex max-h-[94vh] flex-col overflow-hidden rounded-t-[28px] bg-[#FBF8F4] sm:inset-auto sm:left-1/2 sm:top-1/2 sm:max-h-[88vh] sm:w-[620px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[28px]"
                        initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        {/* header */}
                        <div className="flex items-center gap-3 border-b px-5 py-4" style={{ borderColor: 'rgba(75,46,26,0.08)' }}>
                            <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: '#FEF3C7' }}><Camera size={19} color="#B45309" /></span>
                            <div className="min-w-0 flex-1">
                                <h2 className="text-[19px] font-bold leading-tight" style={{ ...serif, color: '#2D1A0E' }}>Scan a menu</h2>
                                <p className="text-[12.5px]" style={{ color: 'rgba(75,46,26,0.55)' }}>Photo in — dishes explained out.</p>
                            </div>
                            <button onClick={onClose} aria-label="Close" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#F5EDE3]" style={{ color: '#4B2E1A' }}><X size={19} /></button>
                        </div>

                        <input
                            ref={fileRef} type="file" accept="image/*" className="hidden"
                            onChange={e => { const f = e.target.files?.[0]; e.target.value = ''; if (f) void run(f) }}
                        />

                        <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-6 pt-5">
                            {/* ── idle ── */}
                            {phase === 'idle' && (
                                <div className="text-center">
                                    <button
                                        onClick={pick}
                                        className="group flex w-full flex-col items-center gap-3 rounded-3xl border-2 border-dashed px-6 py-10 transition-colors hover:border-[#D97706] hover:bg-white"
                                        style={{ borderColor: 'rgba(217,119,6,0.35)' }}
                                    >
                                        <span className="flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-105" style={{ background: '#D97706', boxShadow: '0 12px 28px -10px rgba(217,119,6,0.7)' }}>
                                            <Camera size={28} color="#fff" />
                                        </span>
                                        <span className="text-[17px] font-bold" style={{ color: '#2D1A0E' }}>Take a photo of the menu</span>
                                        <span className="flex items-center gap-1.5 text-[13.5px]" style={{ color: 'rgba(75,46,26,0.6)' }}><ImageUp size={15} /> or choose one from your gallery</span>
                                    </button>
                                    <ul className="mx-auto mt-5 max-w-[420px] space-y-2 text-left text-[13.5px]" style={{ color: 'rgba(75,46,26,0.7)' }}>
                                        <li className="flex gap-2"><Lightbulb size={16} className="mt-0.5 flex-shrink-0" color="#D97706" /> Good light, phone held flat, dish names sharp — one page at a time works best.</li>
                                        <li className="flex gap-2"><ShieldCheck size={16} className="mt-0.5 flex-shrink-0" color="#15803D" /> Your photo stays on your phone — it is read right here, never uploaded.</li>
                                    </ul>
                                </div>
                            )}

                            {/* ── working ── */}
                            {(phase === 'loading' || phase === 'reading') && (
                                <div className="flex flex-col items-center text-center">
                                    {preview && (
                                        <div className="relative w-full max-w-[300px] overflow-hidden rounded-2xl">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={preview} alt="Your menu photo" className="block w-full" />
                                            <motion.span
                                                aria-hidden className="absolute inset-x-0 h-16"
                                                style={{ background: 'linear-gradient(to bottom, transparent, rgba(245,158,11,0.45), transparent)' }}
                                                initial={{ top: '-15%' }} animate={{ top: ['-15%', '100%'] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                                            />
                                        </div>
                                    )}
                                    <p className="mt-5 text-[15px] font-semibold" style={{ color: '#2D1A0E' }}>
                                        {phase === 'loading' ? 'Getting the menu reader ready…' : 'Reading your menu…'}
                                    </p>
                                    <p className="mt-1 text-[12.5px]" style={{ color: 'rgba(75,46,26,0.55)' }}>
                                        {phase === 'loading' ? 'First time only — a few MB, then it works much faster.' : `${Math.round(progress * 100)}%`}
                                    </p>
                                    <div className="mt-3 h-1.5 w-full max-w-[300px] overflow-hidden rounded-full" style={{ background: '#EFE3D5' }}>
                                        <motion.div className="h-full rounded-full" style={{ background: '#D97706' }}
                                            animate={{ width: phase === 'loading' ? ['5%', '45%', '5%'] : `${Math.max(4, progress * 100)}%` }}
                                            transition={phase === 'loading' ? { duration: 1.8, repeat: Infinity } : { duration: 0.3 }} />
                                    </div>
                                </div>
                            )}

                            {/* ── error ── */}
                            {phase === 'error' && (
                                <div className="text-center">
                                    <p className="text-[16px] font-semibold" style={{ color: '#991B1B' }}>We couldn’t read that photo.</p>
                                    <p className="mt-1 text-[13.5px]" style={{ color: 'rgba(75,46,26,0.6)' }}>{error}. Check your connection the first time you scan, then try again.</p>
                                    <button onClick={pick} className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold text-white" style={{ background: '#2D1A0E' }}><RotateCcw size={16} /> Try again</button>
                                </div>
                            )}

                            {/* ── results ── */}
                            {phase === 'done' && (
                                <div>
                                    <div className="mb-4 flex items-center gap-3">
                                        {preview && (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={preview} alt="" className="h-14 w-14 flex-shrink-0 rounded-xl object-cover" />
                                        )}
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[18px] font-bold leading-tight" style={{ ...serif, color: '#2D1A0E' }}>
                                                {total ? `${total} ${total === 1 ? 'dish' : 'dishes'} explained` : 'We couldn’t recognise any dishes'}
                                            </p>
                                            <p className="text-[12.5px]" style={{ color: 'rgba(75,46,26,0.55)' }}>
                                                {total
                                                    ? [found.length && `${found.length} from our guide`, composed.length && `${composed.length} explained from the menu words`].filter(Boolean).join(' · ')
                                                    : 'See below what we could read from your photo.'}
                                            </p>
                                        </div>
                                    </div>

                                    {found.length > 0 && (
                                        <ul className="space-y-2.5">
                                            {found.map(({ dish, line, note }, i) => {
                                                const link = links[dish.id]
                                                return (
                                                    <motion.li key={dish.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(i, 8) * 0.05, ease: EASE }}>
                                                        <button onClick={() => onOpenDish(dish)} className="group flex w-full gap-3.5 rounded-2xl bg-white p-3 text-left transition-shadow hover:shadow-[0_10px_28px_-14px_rgba(45,26,14,0.4)]" style={{ border: '1px solid rgba(75,46,26,0.08)' }}>
                                                            <span className="relative flex h-[84px] w-[84px] flex-shrink-0 items-center justify-center overflow-hidden rounded-xl" style={{ background: 'linear-gradient(135deg,#FDF4E7,#F5E1C8)' }}>
                                                                {link?.image
                                                                    ? <Image src={link.image} alt={dish.vi} fill sizes="168px" className="object-cover" />
                                                                    : <span className="text-[34px]" aria-hidden>{dish.emoji}</span>}
                                                            </span>
                                                            <span className="min-w-0 flex-1">
                                                                <span className="block truncate text-[11px]" style={{ color: 'rgba(75,46,26,0.45)' }}>On your menu: “{line.length > 46 ? line.slice(0, 46) + '…' : line}”{note ? ` · ${note}` : ''}</span>
                                                                <span className="block text-[17px] font-bold leading-tight" style={{ ...serif, color: '#2D1A0E' }}>{dish.vi}</span>
                                                                <span className="block text-[13px] font-semibold" style={{ color: '#4B2E1A' }}>{dish.en}</span>
                                                                <span className="mt-1 line-clamp-2 text-[12.5px] leading-snug" style={{ color: 'rgba(75,46,26,0.65)' }}>{dish.what}</span>
                                                                <span className="mt-1.5 flex flex-wrap items-center gap-1.5">
                                                                    {dish.spice > 0
                                                                        ? <span className="flex items-center gap-0.5" aria-label={`Spice ${dish.spice} of 3`}>{[1, 2, 3].map(n => <Flame key={n} size={12} fill={n <= dish.spice ? '#DC2626' : 'none'} color={n <= dish.spice ? '#DC2626' : 'rgba(75,46,26,0.25)'} />)}</span>
                                                                        : <span className="text-[11px] font-semibold" style={{ color: '#15803D' }}>Mild</span>}
                                                                    {dish.allergens.slice(0, 4).map(a => (
                                                                        <span key={a} className="rounded-full px-1.5 py-px text-[10.5px] font-semibold" style={{ background: '#FEF3C7', color: '#92400E' }} title={ALLERGEN_INFO[a].label}>
                                                                            {ALLERGEN_INFO[a].emoji} {ALLERGEN_INFO[a].label.split(' ')[0]}
                                                                        </span>
                                                                    ))}
                                                                </span>
                                                            </span>
                                                            <ChevronRight size={18} className="mt-8 flex-shrink-0 transition-transform group-hover:translate-x-0.5" style={{ color: 'rgba(75,46,26,0.35)' }} />
                                                        </button>
                                                    </motion.li>
                                                )
                                            })}
                                        </ul>
                                    )}

                                    {composed.length > 0 && (
                                        <div className="mt-6">
                                            <p className="mb-2 text-[11px] font-bold uppercase" style={{ color: 'rgba(75,46,26,0.5)', letterSpacing: '0.1em' }}>
                                                {found.length ? 'More dishes on your menu' : 'Dishes on your menu'}
                                            </p>
                                            <ul className="space-y-2.5">
                                                {composed.map((c, i) => (
                                                    <motion.li key={c.title + i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(i, 8) * 0.04, ease: EASE }}>
                                                        <ComposedDishCard dish={c} links={links} onOpenDish={onOpenDish} />
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {partial.length > 0 && (
                                        <div className="mt-6">
                                            <p className="mb-2 text-[11px] font-bold uppercase" style={{ color: 'rgba(75,46,26,0.5)', letterSpacing: '0.1em' }}>Other lines — word by word</p>
                                            <ul className="space-y-2">
                                                {partial.map((p, i) => (
                                                    <li key={i} className="rounded-2xl bg-white px-3.5 py-3" style={{ border: '1px solid rgba(75,46,26,0.08)' }}>
                                                        <p className="mb-1.5 text-[13px] font-semibold" style={{ color: '#2D1A0E' }}>{p.line}</p>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {p.words.map((w, j) => (
                                                                <span key={j} className="rounded-lg px-2 py-1 text-[11.5px]" style={{ background: '#F5EDE3', color: '#4B2E1A' }}><strong>{w.text}</strong> · {w.en}</span>
                                                            ))}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {rawText && (
                                        <details className="mt-6 rounded-2xl bg-white px-4 py-3" style={{ border: '1px solid rgba(75,46,26,0.08)' }} open={total === 0}>
                                            <summary className="cursor-pointer text-[12.5px] font-semibold" style={{ color: '#4B2E1A' }}>What we read from your photo</summary>
                                            <pre className="mt-2 max-h-60 overflow-auto whitespace-pre-wrap text-[12px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.7)', fontFamily: 'inherit' }}>{rawText}</pre>
                                        </details>
                                    )}

                                    {total === 0 && (
                                        <div className="mt-4 rounded-2xl px-4 py-3.5 text-[13.5px] leading-relaxed" style={{ background: '#FEF3C7', color: '#78350F' }}>
                                            Try again with good light and the phone held flat over the dish names — or type a dish name into the search box instead.
                                        </div>
                                    )}

                                    <button onClick={() => { reset(); pick() }} className="mt-6 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[14.5px] font-semibold text-white" style={{ background: '#2D1A0E' }}>
                                        <Camera size={17} /> Scan another page
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
