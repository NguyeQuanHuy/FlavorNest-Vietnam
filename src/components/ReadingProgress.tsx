'use client'

/**
 * FlavorNest Vietnam — Reading Progress
 * src/components/ReadingProgress.tsx
 *
 * - A 2px hairline that sits exactly on the navbar's bottom border, so the
 *   border itself appears to "fill" as you read. Driven by transform: scaleX.
 * - A quiet "back to top" button with a thin progress ring.
 */

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const R = 19
const C = 2 * Math.PI * R

export default function ReadingProgress() {
    const { scrollYProgress, scrollY } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 260, damping: 40, restDelta: 0.001 })
    const [visible, setVisible] = useState(false)
    const [scrollable, setScrollable] = useState(false)
    const [pct, setPct] = useState(0)
    const [navBottom, setNavBottom] = useState<number | null>(null)
    const [reading, setReading] = useState(false)

    useMotionValueEvent(scrollY, 'change', y => { setVisible(y > 320); setReading(y > 40) })

    // follow the navbar's bottom edge (its height changes between breakpoints and on scroll)
    useEffect(() => {
        const nav = document.querySelector<HTMLElement>('.fixed.top-0.z-\\[100\\]')
        if (!nav) return
        const sync = () => setNavBottom(nav.getBoundingClientRect().bottom)
        sync()
        const ro = new ResizeObserver(sync)
        ro.observe(nav)
        window.addEventListener('scroll', sync, { passive: true })
        window.addEventListener('resize', sync)
        return () => { ro.disconnect(); window.removeEventListener('scroll', sync); window.removeEventListener('resize', sync) }
    }, [])
    useMotionValueEvent(scrollYProgress, 'change', v => setPct(v))

    // only show the bar on pages that are actually long enough to read through
    useEffect(() => {
        const check = () => setScrollable(document.documentElement.scrollHeight - window.innerHeight > 600)
        check()
        const ro = new ResizeObserver(check)
        ro.observe(document.body)
        return () => ro.disconnect()
    }, [])

    return (
        <>
            {/* ── Hairline progress on the navbar's bottom border ── */}
            {scrollable && navBottom !== null && (
                <motion.div
                    aria-hidden
                    animate={{ opacity: reading ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'fixed',
                        top: navBottom - 2,
                        left: 0,
                        right: 0,
                        height: 2,
                        zIndex: 110, // above the navbar (z 100)
                        transformOrigin: '0% 50%',
                        scaleX,
                        background: 'linear-gradient(90deg, rgba(217,119,6,0.55), #D97706 40%, #F59E0B)',
                        borderRadius: '0 2px 2px 0',
                        pointerEvents: 'none',
                    }}
                />
            )}

            {/* ── Back to top ── */}
            <AnimatePresence>
                {visible && scrollable && (
                    <motion.button
                        type="button"
                        aria-label="Back to top"
                        title="Back to top"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        initial={{ opacity: 0, y: 12, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.9 }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="group outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] focus-visible:ring-offset-2"
                        style={{
                            position: 'fixed',
                            right: 'max(16px, env(safe-area-inset-right))',
                            bottom: 'calc(20px + env(safe-area-inset-bottom))',
                            zIndex: 49,
                            width: 46,
                            height: 46,
                            borderRadius: '50%',
                            border: 'none',
                            padding: 0,
                            cursor: 'pointer',
                            background: 'rgba(255,255,255,0.9)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            boxShadow: '0 8px 24px -8px rgba(45,26,14,0.35), 0 0 0 1px rgba(75,46,26,0.06)',
                        }}
                    >
                        <svg width="46" height="46" viewBox="0 0 46 46" style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }} aria-hidden>
                            <circle cx="23" cy="23" r={R} fill="none" stroke="rgba(75,46,26,0.08)" strokeWidth="1.5" />
                            <circle
                                cx="23" cy="23" r={R}
                                fill="none"
                                stroke="#D97706"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeDasharray={C}
                                strokeDashoffset={C * (1 - pct)}
                            />
                        </svg>
                        <span className="relative flex h-full w-full items-center justify-center transition-colors group-hover:text-[#D97706]" style={{ color: '#2D1A0E' }}>
                            <ArrowUp size={17} strokeWidth={2.2} />
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    )
}
