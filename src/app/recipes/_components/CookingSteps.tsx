'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  app/recipes/_components/CookingSteps.tsx
//  Hands-busy friendly instructions:
//   • tap anywhere on a step to tick it off (progress saved per recipe)
//   • times in the text ("simmer 20 minutes") become one-tap timers
//   • Cook mode: full-screen, huge text, thumb-zone buttons, swipe, screen stays on
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChefHat, ChevronLeft, ChevronRight, Lightbulb, ListChecks, Pause, Play, RotateCcw, Timer, X } from 'lucide-react'

type Step = { title: string; description: string; tip?: string }
export type CookIngredientGroup = { title: string; items: { qty: string; name: string }[] }

const serif = { fontFamily: "'Playfair Display', Georgia, serif" }
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

// ── time detection ──────────────────────────────────────────────────────────
type Found = { secs: number; label: string }
const TIME_RE = /(\d+(?:[.,]\d+)?)(?:\s*(?:-|–|to)\s*\d+(?:[.,]\d+)?)?\s*(seconds?|secs?|minutes?|mins?|hours?|hrs?|hr)\b/gi
function findTimes(text: string): Found[] {
    const out: Found[] = []
    for (const m of text.matchAll(TIME_RE)) {
        const n = parseFloat(m[1].replace(',', '.'))
        const u = m[2].toLowerCase()
        const secs = Math.round(u.startsWith('h') ? n * 3600 : u.startsWith('m') ? n * 60 : n)
        if (secs < 10 || secs > 24 * 3600) continue
        if (out.some(o => o.secs === secs)) continue
        out.push({ secs, label: u.startsWith('h') ? `${n} hr` : u.startsWith('m') ? `${n} min` : `${n} sec` })
        if (out.length === 2) break
    }
    return out
}
const fmt = (s: number) => {
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60
    return h ? `${h}:${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}` : `${m}:${String(r).padStart(2, '0')}`
}

// ── timers ──────────────────────────────────────────────────────────────────
type T = { id: number; step: number; label: string; total: number; endsAt: number | null; left: number; done: boolean }

function beep() {
    try {
        const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
        const ctx = new Ctx()
        ;[0, 0.35, 0.7].forEach(t => {
            const o = ctx.createOscillator(), g = ctx.createGain()
            o.frequency.value = 880; o.connect(g); g.connect(ctx.destination)
            g.gain.setValueAtTime(0.0001, ctx.currentTime + t)
            g.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + t + 0.02)
            g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t + 0.25)
            o.start(ctx.currentTime + t); o.stop(ctx.currentTime + t + 0.3)
        })
    } catch { /* audio blocked */ }
    try { navigator.vibrate?.([300, 150, 300, 150, 300]) } catch { /* not supported */ }
}

function useTimers() {
    const [timers, setTimers] = useState<T[]>([])
    useEffect(() => {
        if (!timers.some(t => t.endsAt && !t.done)) return
        const iv = setInterval(() => {
            setTimers(ts => ts.map(t => {
                if (!t.endsAt || t.done) return t
                const left = Math.max(0, Math.round((t.endsAt - Date.now()) / 1000))
                if (left === 0) { beep(); return { ...t, left: 0, endsAt: null, done: true } }
                return { ...t, left }
            }))
        }, 500)
        return () => clearInterval(iv)
    }, [timers])
    const start = (step: number, f: Found) =>
        setTimers(ts => [...ts.filter(t => !(t.step === step && t.total === f.secs)), { id: Date.now(), step, label: f.label, total: f.secs, endsAt: Date.now() + f.secs * 1000, left: f.secs, done: false }])
    const toggle = (id: number) => setTimers(ts => ts.map(t => (t.id !== id || t.done ? t : t.endsAt ? { ...t, endsAt: null } : { ...t, endsAt: Date.now() + t.left * 1000 })))
    const remove = (id: number) => setTimers(ts => ts.filter(t => t.id !== id))
    return { timers, start, toggle, remove }
}

// ── keep the screen on while cooking ────────────────────────────────────────
function useWakeLock(active: boolean) {
    useEffect(() => {
        if (!active || !('wakeLock' in navigator)) return
        let lock: WakeLockSentinel | null = null
        const req = async () => { try { lock = await navigator.wakeLock.request('screen') } catch { /* denied */ } }
        req()
        const onVis = () => { if (document.visibilityState === 'visible') req() }
        document.addEventListener('visibilitychange', onVis)
        return () => { document.removeEventListener('visibilitychange', onVis); lock?.release().catch(() => {}) }
    }, [active])
}

function TimerChip({ f, onStart, dark = false }: { f: Found; onStart: () => void; dark?: boolean }) {
    return (
        <button
            type="button"
            onClick={e => { e.stopPropagation(); onStart() }}
            className="inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-semibold transition-colors"
            style={dark ? { background: 'rgba(245,158,11,0.18)', color: '#FCD34D' } : { background: '#FEF3C7', color: '#92400E' }}
        >
            <Timer size={15} /> Start {f.label}
        </button>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
export default function CookingSteps({ slug, steps, ingredients }: { slug: string; steps: Step[]; ingredients: CookIngredientGroup[] }) {
    const KEY = `fn_cook_${slug}`
    const [done, setDone] = useState<Set<number>>(new Set())
    const [open, setOpen] = useState<Set<number>>(new Set())       // done steps the user re-opened
    const [cook, setCook] = useState(false)
    const [idx, setIdx] = useState(0)
    const [showIng, setShowIng] = useState(false)
    const { timers, start, toggle, remove } = useTimers()
    const times = useMemo(() => steps.map(s => findTimes(`${s.description} ${s.tip ?? ''}`)), [steps])
    const dir = useRef(1)
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    // restore + save progress
    useEffect(() => {
        try { const v = JSON.parse(localStorage.getItem(KEY) || '[]'); if (Array.isArray(v)) setDone(new Set(v)) } catch { /* ignore */ }
    }, [KEY])
    useEffect(() => {
        try { done.size ? localStorage.setItem(KEY, JSON.stringify([...done])) : localStorage.removeItem(KEY) } catch { /* ignore */ }
    }, [done, KEY])

    const current = steps.findIndex((_, i) => !done.has(i))
    const toggleStep = useCallback((i: number) => {
        setDone(d => { const n = new Set(d); if (n.has(i)) n.delete(i); else n.add(i); return n })
        setOpen(o => { const n = new Set(o); n.delete(i); return n })
    }, [])
    const reset = () => { setDone(new Set()); setOpen(new Set()) }

    // cook mode
    useWakeLock(cook)
    useEffect(() => {
        if (!cook) return
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') go(1)
            else if (e.key === 'ArrowLeft') go(-1)
            else if (e.key === 'Escape') setCook(false)
        }
        window.addEventListener('keydown', onKey)
        return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cook, idx])
    const openCook = () => { setIdx(current === -1 ? 0 : current); setCook(true) }
    const go = (d: number) => { dir.current = d; setIdx(i => Math.min(steps.length - 1, Math.max(0, i + d))) }
    const doneAndNext = () => {
        setDone(s => new Set(s).add(idx))
        if (idx < steps.length - 1) go(1)
    }

    const pct = steps.length ? (done.size / steps.length) * 100 : 0
    const allDone = steps.length > 0 && done.size === steps.length

    return (
        <section style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {/* header */}
            <div className="flex items-end justify-between gap-4">
                <h2 className="text-[28px] font-bold leading-none" style={{ ...serif, color: '#2D1A0E' }}>Instructions</h2>
                <span className="text-[14px] font-medium tabular-nums" style={{ color: '#8B6F5A' }}>{done.size}/{steps.length} done</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full" style={{ background: '#EDE0D0' }}>
                <motion.div className="h-full rounded-full" style={{ background: '#D97706' }} animate={{ width: `${pct}%` }} transition={{ duration: 0.4, ease: EASE }} />
            </div>

            {/* cook mode CTA */}
            <button
                onClick={openCook}
                className="mt-5 flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left text-white transition-transform active:scale-[0.99]"
                style={{ background: 'linear-gradient(135deg,#2D1A0E,#4B2E1A)', boxShadow: '0 14px 30px -18px rgba(45,26,14,0.8)' }}
            >
                <span className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: 'rgba(245,158,11,0.18)', color: '#FCD34D' }}><ChefHat size={21} /></span>
                    <span>
                        <span className="block text-[16px] font-semibold">{done.size ? 'Continue cooking' : 'Start cook mode'}</span>
                        <span className="block text-[12.5px]" style={{ color: 'rgba(245,237,227,0.65)' }}>Big text, one step at a time · screen stays on</span>
                    </span>
                </span>
                <ChevronRight size={20} style={{ color: '#FCD34D' }} />
            </button>

            {/* steps */}
            <ol className="mt-6 space-y-3">
                {steps.map((step, i) => {
                    const isDone = done.has(i)
                    const isNow = i === current
                    const collapsed = isDone && !open.has(i)
                    return (
                        <motion.li key={i} layout transition={{ duration: 0.25, ease: EASE }}>
                            <div
                                role="button"
                                tabIndex={0}
                                aria-pressed={isDone}
                                aria-label={`Step ${i + 1}: ${step.title}${isDone ? ' (done)' : ''}`}
                                onClick={() => (collapsed ? setOpen(o => new Set(o).add(i)) : toggleStep(i))}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleStep(i) } }}
                                className="flex cursor-pointer select-none gap-4 rounded-2xl p-4 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#D97706] sm:p-5"
                                style={{
                                    background: isDone ? 'rgba(255,255,255,0.55)' : '#fff',
                                    border: isNow ? '2px solid #D97706' : '1px solid rgba(75,46,26,0.09)',
                                    boxShadow: isNow ? '0 14px 30px -20px rgba(217,119,6,0.7)' : 'none',
                                }}
                            >
                                <span
                                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[15px] font-bold transition-colors"
                                    style={isDone
                                        ? { background: '#5A7A3F', color: '#fff' }
                                        : isNow
                                            ? { background: '#D97706', color: '#fff' }
                                            : { background: '#FBF3E8', color: '#B45309', border: '1px solid #EED9BF' }}
                                    aria-hidden
                                >
                                    {isDone ? <Check size={18} strokeWidth={3} /> : i + 1}
                                </span>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-start justify-between gap-3">
                                        <h3 className="text-[18px] font-bold leading-snug" style={{ ...serif, color: isDone ? 'rgba(45,26,14,0.45)' : '#2D1A0E', textDecoration: isDone ? 'line-through' : 'none' }}>
                                            {step.title}
                                        </h3>
                                        {isNow && <span className="flex-shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-bold uppercase text-white" style={{ background: '#D97706', letterSpacing: '0.08em' }}>Now</span>}
                                    </div>
                                    {!collapsed && (
                                        <>
                                            <p className="mt-2 text-[16px] leading-[1.75]" style={{ color: isDone ? 'rgba(75,46,26,0.45)' : '#4B2E1A' }}>{step.description}</p>
                                            {step.tip && (
                                                <p className="mt-3 flex gap-2 rounded-xl px-3.5 py-3 text-[14px] leading-relaxed" style={{ background: '#FAF0DC', color: '#6B4A1F' }}>
                                                    <Lightbulb size={16} className="mt-0.5 flex-shrink-0" color="#B45309" /> <span>{step.tip}</span>
                                                </p>
                                            )}
                                            {!isDone && times[i].length > 0 && (
                                                <div className="mt-3 flex flex-wrap gap-2">
                                                    {times[i].map(f => <TimerChip key={f.secs} f={f} onStart={() => start(i, f)} />)}
                                                </div>
                                            )}
                                            {!isDone && (
                                                <p className="mt-3 text-[12px] font-medium" style={{ color: 'rgba(75,46,26,0.4)' }}>Tap anywhere to mark as done</p>
                                            )}
                                        </>
                                    )}
                                    {collapsed && <p className="mt-0.5 text-[12.5px]" style={{ color: 'rgba(75,46,26,0.45)' }}>Done · tap to show</p>}
                                </div>
                            </div>
                        </motion.li>
                    )
                })}
            </ol>

            {allDone && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 flex items-center justify-between gap-3 rounded-2xl px-5 py-4" style={{ background: '#ECF3E4', color: '#3F5A2A' }}>
                    <span className="text-[15px] font-semibold">🎉 All done — enjoy your meal!</span>
                    <button onClick={reset} className="flex items-center gap-1.5 text-[13px] font-semibold underline"><RotateCcw size={14} /> Reset</button>
                </motion.div>
            )}
            {!allDone && done.size > 0 && (
                <button onClick={reset} className="mt-4 flex items-center gap-1.5 text-[13px] font-medium" style={{ color: 'rgba(75,46,26,0.5)' }}>
                    <RotateCcw size={14} /> Reset progress
                </button>
            )}

            {/* overlays live in <body> so no parent stacking context (or the navbar) can cover them */}
            {mounted && createPortal(
                <>
            {/* floating timers */}
            <div className="pointer-events-none fixed inset-x-0 z-[135] flex flex-col items-center gap-2 px-4" style={{ bottom: cook ? 'calc(108px + env(safe-area-inset-bottom))' : 'calc(84px + env(safe-area-inset-bottom))' }}>
                <AnimatePresence>
                    {timers.map(t => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 16, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16 }}
                            className="pointer-events-auto flex items-center gap-3 rounded-full py-2 pl-4 pr-2 shadow-[0_14px_34px_-12px_rgba(20,11,5,0.6)]"
                            style={{ background: t.done ? '#5A7A3F' : '#2D1A0E', color: '#fff', fontFamily: "'DM Sans', sans-serif" }}
                        >
                            <Timer size={17} color={t.done ? '#fff' : '#FCD34D'} />
                            <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.7)' }}>Step {t.step + 1}</span>
                            <span className="min-w-[56px] text-[18px] font-bold tabular-nums">{t.done ? "Time's up!" : fmt(t.left)}</span>
                            {!t.done && (
                                <button onClick={() => toggle(t.id)} aria-label={t.endsAt ? 'Pause timer' : 'Resume timer'} className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }}>
                                    {t.endsAt ? <Pause size={16} /> : <Play size={16} />}
                                </button>
                            )}
                            <button onClick={() => remove(t.id)} aria-label="Dismiss timer" className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }}>
                                <X size={16} />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* ═══ COOK MODE ═══ */}
            <AnimatePresence>
                {cook && steps[idx] && (
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Cook mode"
                        className="fixed inset-0 z-[130] flex flex-col"
                        style={{ background: '#1C1009', color: '#F5EDE3', fontFamily: "'DM Sans', sans-serif" }}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
                    >
                        {/* top bar */}
                        <div className="flex items-center gap-3 px-4 pb-3 pt-[calc(12px+env(safe-area-inset-top))]">
                            <button onClick={() => setCook(false)} aria-label="Exit cook mode" className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: 'rgba(245,237,227,0.08)' }}><X size={20} /></button>
                            <div className="flex flex-1 gap-1" aria-hidden>
                                {steps.map((_, i) => (
                                    <span key={i} className="h-1.5 flex-1 rounded-full transition-colors" style={{ background: done.has(i) ? '#5A7A3F' : i === idx ? '#F59E0B' : 'rgba(245,237,227,0.15)' }} />
                                ))}
                            </div>
                            <button onClick={() => setShowIng(true)} aria-label="Show ingredients" className="flex h-11 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-semibold" style={{ background: 'rgba(245,237,227,0.08)' }}>
                                <ListChecks size={17} /> <span className="hidden sm:inline">Ingredients</span>
                            </button>
                        </div>

                        {/* step content — swipe left/right */}
                        <div className="relative flex-1 overflow-hidden">
                            <AnimatePresence mode="popLayout" initial={false} custom={dir.current}>
                                <motion.div
                                    key={idx}
                                    custom={dir.current}
                                    initial={{ x: dir.current * 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: dir.current * -60, opacity: 0 }}
                                    transition={{ duration: 0.28, ease: EASE }}
                                    drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.25}
                                    onDragEnd={(_, info) => { if (info.offset.x < -70) go(1); else if (info.offset.x > 70) go(-1) }}
                                    className="absolute inset-0 overflow-y-auto px-6 pb-6 pt-4 sm:px-10"
                                >
                                    <div className="mx-auto max-w-2xl">
                                        <p className="text-[13px] font-bold uppercase" style={{ color: '#F59E0B', letterSpacing: '0.14em' }}>Step {idx + 1} of {steps.length}{done.has(idx) && ' · done ✓'}</p>
                                        <h2 className="mt-2 text-[clamp(26px,6vw,40px)] font-bold leading-[1.15]" style={serif}>{steps[idx].title}</h2>
                                        <p className="mt-5 text-[clamp(20px,4.6vw,26px)] leading-[1.6]" style={{ color: 'rgba(245,237,227,0.92)' }}>{steps[idx].description}</p>
                                        {times[idx].length > 0 && (
                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {times[idx].map(f => <TimerChip key={f.secs} f={f} dark onStart={() => start(idx, f)} />)}
                                            </div>
                                        )}
                                        {steps[idx].tip && (
                                            <p className="mt-6 flex gap-2.5 rounded-2xl px-4 py-3.5 text-[16px] leading-relaxed" style={{ background: 'rgba(245,158,11,0.1)', color: '#FCD9A5' }}>
                                                <Lightbulb size={19} className="mt-0.5 flex-shrink-0" /> <span>{steps[idx].tip}</span>
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* thumb-zone controls */}
                        <div className="flex items-center gap-3 px-4 pb-[calc(16px+env(safe-area-inset-bottom))] pt-3" style={{ borderTop: '1px solid rgba(245,237,227,0.08)' }}>
                            <button onClick={() => go(-1)} disabled={idx === 0} aria-label="Previous step" className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl disabled:opacity-30" style={{ background: 'rgba(245,237,227,0.08)' }}>
                                <ChevronLeft size={28} />
                            </button>
                            {idx === steps.length - 1 && done.has(idx) ? (
                                <button onClick={() => setCook(false)} className="flex h-16 flex-1 items-center justify-center gap-2 rounded-2xl text-[18px] font-bold" style={{ background: '#5A7A3F', color: '#fff' }}>
                                    🎉 Finish
                                </button>
                            ) : (
                                <button onClick={doneAndNext} className="flex h-16 flex-1 items-center justify-center gap-2 rounded-2xl text-[18px] font-bold" style={{ background: '#D97706', color: '#fff' }}>
                                    <Check size={22} strokeWidth={3} /> {idx === steps.length - 1 ? 'Mark done' : 'Done · next'}
                                </button>
                            )}
                            <button onClick={() => go(1)} disabled={idx === steps.length - 1} aria-label="Next step" className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl disabled:opacity-30" style={{ background: 'rgba(245,237,227,0.08)' }}>
                                <ChevronRight size={28} />
                            </button>
                        </div>

                        {/* ingredients sheet inside cook mode */}
                        <AnimatePresence>
                            {showIng && (
                                <>
                                    <motion.div className="absolute inset-0 z-10" style={{ background: 'rgba(0,0,0,0.5)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowIng(false)} />
                                    <motion.div
                                        className="absolute inset-x-0 bottom-0 z-20 max-h-[75%] overflow-y-auto rounded-t-[28px] px-5 pb-[calc(20px+env(safe-area-inset-bottom))] pt-4"
                                        style={{ background: '#FBF8F4', color: '#2D1A0E' }}
                                        initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', stiffness: 380, damping: 38 }}
                                    >
                                        <div className="mb-3 flex items-center justify-between">
                                            <h3 className="text-[20px] font-bold" style={serif}>Ingredients</h3>
                                            <button onClick={() => setShowIng(false)} aria-label="Close" className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: 'rgba(75,46,26,0.07)' }}><X size={18} /></button>
                                        </div>
                                        {ingredients.map((g, gi) => (
                                            <div key={gi} className="mb-4">
                                                {g.title && <p className="mb-1 text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.12em' }}>{g.title}</p>}
                                                <ul>
                                                    {g.items.map((it, ii) => (
                                                        <li key={ii} className="flex justify-between gap-4 py-2 text-[16px]" style={{ borderTop: ii ? '1px solid rgba(75,46,26,0.07)' : 'none' }}>
                                                            <span>{it.name}</span><span className="flex-shrink-0 font-semibold tabular-nums" style={{ color: 'rgba(75,46,26,0.65)' }}>{it.qty}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
                </>,
                document.body,
            )}
        </section>
    )
}
