'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  app/recipes/_components/IngredientPeek.tsx
//  Long-press a recipe card (touch) → bottom sheet with its ingredient list.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Clock, X } from 'lucide-react'

type Item = { qty: string; name: string; note?: string }
type Section = { title: string; items: Item[] }
export type PeekRecipe = { slug: string; title: string; subtitle: string; image: string; time: string; rating: string; hasPhoto: boolean }

const cache = new Map<string, Section[]>()
const serif = { fontFamily: "'Playfair Display', Georgia, serif" }

/** Long-press detector for touch only (keeps normal taps, scrolling and desktop clicks untouched) */
export function useLongPress(onLongPress: () => void, ms = 420) {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const start = useRef<{ x: number; y: number } | null>(null)
    const fired = useRef(false)
    const clear = () => { if (timer.current) clearTimeout(timer.current); timer.current = null }
    return {
        onPointerDown: (e: React.PointerEvent) => {
            if (e.pointerType !== 'touch') return
            fired.current = false
            start.current = { x: e.clientX, y: e.clientY }
            clear()
            timer.current = setTimeout(() => {
                fired.current = true
                try { navigator.vibrate?.(12) } catch { /* not supported */ }
                onLongPress()
            }, ms)
        },
        onPointerMove: (e: React.PointerEvent) => {
            if (!start.current) return
            if (Math.abs(e.clientX - start.current.x) > 10 || Math.abs(e.clientY - start.current.y) > 10) clear()
        },
        onPointerUp: clear,
        onPointerCancel: clear,
        onPointerLeave: clear,
        onContextMenu: (e: React.MouseEvent) => { if (timer.current || fired.current) e.preventDefault() },
        // swallow the click that follows a long-press so the card doesn't navigate
        onClickCapture: (e: React.MouseEvent) => { if (fired.current) { e.preventDefault(); e.stopPropagation(); fired.current = false } },
    }
}

export default function IngredientPeek({ recipe, onClose }: { recipe: PeekRecipe | null; onClose: () => void }) {
    const [sections, setSections] = useState<Section[] | null>(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!recipe) return
        setError(false)
        const hit = cache.get(recipe.slug)
        if (hit) { setSections(hit); return }
        setSections(null)
        let alive = true
        fetch(`/api/ingredients/${recipe.slug}`)
            .then(r => (r.ok ? r.json() : Promise.reject()))
            .then((d: { sections: Section[] }) => { cache.set(recipe.slug, d.sections); if (alive) setSections(d.sections) })
            .catch(() => alive && setError(true))
        return () => { alive = false }
    }, [recipe])

    // lock page scroll + close on Escape
    useEffect(() => {
        if (!recipe) return
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
        window.addEventListener('keydown', onKey)
        return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
    }, [recipe, onClose])

    const count = sections?.reduce((n, s) => n + s.items.length, 0) ?? 0

    return (
        <AnimatePresence>
            {recipe && (
                <>
                    <motion.div
                        className="fixed inset-0 z-[120]"
                        style={{ background: 'rgba(20,11,5,0.5)', backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)' }}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Ingredients for ${recipe.title}`}
                        className="fixed inset-x-0 bottom-0 z-[121] flex max-h-[82vh] flex-col overflow-hidden rounded-t-[28px] bg-[#FBF8F4] shadow-[0_-20px_60px_rgba(20,11,5,0.35)]"
                        initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 38 }}
                        drag="y" dragConstraints={{ top: 0, bottom: 0 }} dragElastic={{ top: 0, bottom: 0.6 }}
                        onDragEnd={(_, i) => { if (i.offset.y > 100 || i.velocity.y > 600) onClose() }}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        {/* grab handle */}
                        <div className="flex justify-center pb-1 pt-2.5">
                            <span className="h-1.5 w-10 rounded-full" style={{ background: 'rgba(75,46,26,0.18)' }} />
                        </div>

                        {/* header */}
                        <div className="flex items-center gap-3.5 px-5 pb-4 pt-2">
                            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl" style={{ background: '#EFE7DC' }}>
                                {recipe.hasPhoto && <Image src={recipe.image} alt="" fill sizes="64px" className="object-cover" />}
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-[12px] italic" style={{ ...serif, color: '#B45309' }}>{recipe.subtitle}</p>
                                <h2 className="line-clamp-2 text-[19px] font-bold leading-tight" style={{ ...serif, color: '#2D1A0E' }}>{recipe.title}</h2>
                                <p className="mt-1 flex items-center gap-3 text-[12px]" style={{ color: 'rgba(75,46,26,0.6)' }}>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {recipe.time}</span>
                                    {count > 0 && <span>{count} ingredients</span>}
                                </p>
                            </div>
                            <button onClick={onClose} aria-label="Close" className="flex h-9 w-9 flex-shrink-0 items-center justify-center self-start rounded-full" style={{ background: 'rgba(75,46,26,0.07)', color: '#4B2E1A' }}>
                                <X size={17} />
                            </button>
                        </div>

                        {/* list */}
                        <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-4" onPointerDownCapture={e => e.stopPropagation()}>
                            {sections === null && !error && (
                                <div className="space-y-3 py-1" aria-busy="true" aria-label="Loading ingredients">
                                    {[70, 55, 80, 45, 65, 50].map((w, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <span className="h-3.5 animate-pulse rounded-full" style={{ width: `${w}%`, background: 'rgba(75,46,26,0.08)' }} />
                                            <span className="h-3.5 w-12 animate-pulse rounded-full" style={{ background: 'rgba(75,46,26,0.06)' }} />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {(error || (sections && sections.length === 0)) && (
                                <p className="py-6 text-center text-[14px]" style={{ color: 'rgba(75,46,26,0.6)' }}>
                                    The ingredient list is inside the full recipe.
                                </p>
                            )}

                            {sections?.map((sec, si) => (
                                <motion.div
                                    key={si}
                                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: si * 0.05, duration: 0.25 }}
                                    className="mb-5 last:mb-1"
                                >
                                    {sec.title && (
                                        <p className="mb-1.5 text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.12em' }}>{sec.title}</p>
                                    )}
                                    <ul className="rounded-2xl bg-white px-4" style={{ border: '1px solid rgba(75,46,26,0.07)' }}>
                                        {sec.items.map((it, ii) => (
                                            <li
                                                key={ii}
                                                className="flex items-baseline justify-between gap-4 py-2.5"
                                                style={{ borderTop: ii ? '1px solid rgba(75,46,26,0.06)' : 'none' }}
                                            >
                                                <span className="min-w-0">
                                                    <span className="block text-[14.5px] first-letter:uppercase" style={{ color: '#2D1A0E' }}>{it.name}</span>
                                                    {it.note && <span className="block text-[12px] leading-snug" style={{ color: 'rgba(75,46,26,0.5)' }}>{it.note}</span>}
                                                </span>
                                                {it.qty && (
                                                    <span className="flex-shrink-0 text-[13px] font-semibold tabular-nums" style={{ color: 'rgba(75,46,26,0.65)' }}>{it.qty}</span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* footer CTA */}
                        <div className="border-t px-5 pb-[calc(14px+env(safe-area-inset-bottom))] pt-3" style={{ borderColor: 'rgba(75,46,26,0.08)', background: '#FBF8F4' }}>
                            <Link
                                href={`/recipes/${recipe.slug}`}
                                className="flex h-[52px] w-full items-center justify-center gap-2 rounded-full text-[15px] font-semibold text-white"
                                style={{ background: '#2D1A0E', textDecoration: 'none' }}
                            >
                                View full recipe <ArrowRight size={17} />
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

/** Wrap any card to make it long-pressable on touch screens */
export function LongPress({ onLongPress, children }: { onLongPress: () => void; children: React.ReactNode }) {
    const handlers = useLongPress(onLongPress)
    return <div {...handlers} className="[-webkit-touch-callout:none] [&_img]:[-webkit-touch-callout:none]" style={{ WebkitUserSelect: 'none', userSelect: 'none' }}>{children}</div>
}
