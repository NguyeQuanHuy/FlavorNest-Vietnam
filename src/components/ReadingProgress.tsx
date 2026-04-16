'use client'

/**
 * FlavorNest Vietnam — Reading Progress Bar
 * src/components/ReadingProgress.tsx
 *
 * Hiển thị thanh tiến trình đọc trang ở dưới Navbar
 * Màu gradient amber đồng bộ với FlavorNest brand
 */

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(false)

    const smoothProgress = useSpring(progress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001,
    })

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight

            if (docHeight <= 0) return

            const pct = Math.min((scrollTop / docHeight) * 100, 100)
            setProgress(pct)
            setVisible(scrollTop > 80)
        }

        window.addEventListener('scroll', updateProgress, { passive: true })
        updateProgress()
        return () => window.removeEventListener('scroll', updateProgress)
    }, [])

    return (
        <>
            {/* ── Progress bar — sits right below navbar ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'fixed',
                    top: 68,
                    left: 0,
                    right: 0,
                    height: 3,
                    zIndex: 49,
                    background: 'rgba(75,46,26,0.06)',
                }}
            >
                <motion.div
                    style={{
                        height: '100%',
                        width: smoothProgress.get() + '%',
                        background: 'linear-gradient(90deg, #D97706 0%, #F59E0B 60%, #FCD34D 100%)',
                        borderRadius: '0 100px 100px 0',
                        boxShadow: '0 0 10px rgba(217,119,6,0.5)',
                        transformOrigin: 'left',
                    }}
                    animate={{ width: progress + '%' }}
                    transition={{ duration: 0.1, ease: 'linear' }}
                />
            </motion.div>

            {/* ── Circular progress indicator — bottom right ── */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: visible ? 1 : 0,
                    scale: visible ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'fixed',
                    bottom: 32,
                    right: 24,
                    zIndex: 49,
                    width: 44,
                    height: 44,
                    cursor: 'pointer',
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                title="Back to top"
            >
                {/* Background circle */}
                <svg width="44" height="44" viewBox="0 0 44 44" style={{ transform: 'rotate(-90deg)' }}>
                    {/* Track */}
                    <circle
                        cx="22" cy="22" r="18"
                        fill="rgba(255,255,255,0.92)"
                        stroke="rgba(75,46,26,0.08)"
                        strokeWidth="2"
                    />
                    {/* Progress arc */}
                    <circle
                        cx="22" cy="22" r="18"
                        fill="none"
                        stroke="url(#progressGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 18}`}
                        strokeDashoffset={`${2 * Math.PI * 18 * (1 - progress / 100)}`}
                        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                    />
                    <defs>
                        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#D97706" />
                            <stop offset="100%" stopColor="#F59E0B" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Arrow up icon */}
                <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15" />
                    </svg>
                </div>

                {/* Percentage text — shows at >10% */}
                {progress > 10 && (
                    <div style={{
                        position: 'absolute',
                        bottom: -18,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: 9,
                        fontWeight: 700,
                        color: 'rgba(75,46,26,0.45)',
                        whiteSpace: 'nowrap',
                        fontFamily: 'system-ui',
                    }}>
                        {Math.round(progress)}%
                    </div>
                )}
            </motion.div>
        </>
    )
}
