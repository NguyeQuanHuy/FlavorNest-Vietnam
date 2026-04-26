// ─────────────────────────────────────────────────────────────────────────────
//  app/_sections/HeroSection.tsx
//  Fixes: contrast overlay, stat card opacity, search/heart icon size
// ─────────────────────────────────────────────────────────────────────────────
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { recipes } from '@/data/recipes'

// ─ Dynamic stats: count + avg rating from recipes data ─
const recipeCount = recipes.length
const avgRating = (
    recipes.reduce((sum, r) => sum + r.rating, 0) / recipes.length
).toFixed(1)

const STATS = [
    { value: `${recipeCount}+`, label: 'Recipes', delay: 0.8 },
    { value: `${avgRating}★`, label: 'Avg. Rating', delay: 1.0 },
    { value: '15K+', label: 'Home Cooks', delay: 1.15 },
]
const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
}
const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as any } },
}

export default function HeroSection() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])

    return (
        <section
            ref={ref}
            className="relative flex items-center min-h-screen overflow-hidden"
            aria-label="Hero – FlavorNest Vietnam"
        >
            {/* ── Background image with parallax ── */}
            <motion.div style={{ y: imgY }} className="absolute inset-0 scale-105 will-change-transform hidden md:block">
                <div className="absolute inset-0 md:hidden">
                    <Image
                        src="/hero-bg.jpg"
                        alt="A stunning spread of authentic Vietnamese dishes — pho, banh mi, spring rolls and more"
                        fill priority fetchPriority="high" quality={82} sizes="100vw"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AL+AAAAAA//Z"
                        className="object-cover"
                    />
            </motion.div>

            {/* ── FIX 1: Stronger gradient overlay for better text contrast ── */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C1009]/92 via-[#2D1A0E]/80 to-[#1C1009]/60" />
            {/* Extra darkening layer behind text area */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1009]/70 via-transparent to-transparent" />

            {/* ── Glow blobs ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#D97706]/8 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#166534]/10 rounded-full blur-3xl" />
            </div>

            {/* ── FIX 2: Stat cards — higher opacity, solid border, better contrast ── */}
            <motion.div
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute top-32 right-8 lg:right-20 hidden lg:flex flex-col gap-3"
            >
                {STATS.map(s => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: s.delay }}
                        className="rounded-2xl px-5 py-3 text-center min-w-[120px]"
                        style={{
                            background: 'rgba(28, 16, 9, 0.75)',
                            backdropFilter: 'blur(16px)',
                            border: '1.5px solid rgba(255,255,255,0.22)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
                        }}
                    >
                        <div className="text-white font-display font-extrabold text-2xl leading-none">{s.value}</div>
                        <div className="text-white/70 text-[11px] mt-1 font-medium tracking-wide">{s.label}</div>
                    </motion.div>
                ))}
            </motion.div>

            {/* ── Main content ── */}
            <motion.div
                style={{ y: textY }}
                className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-8 pt-28 pb-20"
            >
                <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">

                    {/* Live badge */}
                    <motion.div variants={item} className="mb-6">
                        <span className="inline-flex items-center gap-2.5 bg-white/12 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                            🇻🇳 &nbsp; 6 new recipes added this week
                        </span>
                    </motion.div>

                    {/* Eyebrow */}
                    <motion.p variants={item} className="font-display text-lg italic text-[#F59E0B] font-medium mb-2">
                        FlavorNest Vietnam
                    </motion.p>

                    {/* H1 */}
                    <motion.h1 variants={item} className="font-display font-extrabold leading-[1.04] mb-6">
                        <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                            Your Nest of
                        </span>
                        <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] text-[#F59E0B] italic drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                            Authentic
                        </span>
                        <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                            Vietnamese Flavors.
                        </span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p variants={item} className="text-white/80 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
                        style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                        Made Simple at Home.{' '}
                        <strong className="text-white font-semibold">100+ tested recipes</strong>{' '}
                        from Hanoi, Hue and Saigon — crafted for every home kitchen.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-14">
                        <Link
                            href="/recipes"
                            className="group inline-flex items-center justify-center gap-2.5 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm px-9 py-4 rounded-2xl shadow-[0_8px_32px_rgba(217,119,6,.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(217,119,6,.5)]"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                <path strokeLinecap="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                            </svg>
                            Explore All Recipes
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <Link
                            href="/stories"
                            className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-semibold text-sm px-9 py-4 rounded-2xl border border-white/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            Kitchen Stories
                        </Link>
                    </motion.div>

                    {/* Stats row (mobile) */}
                    <motion.div variants={item} className="flex items-center gap-6 lg:hidden">
                        {STATS.map((s, i) => (
                            <div key={s.label} className="flex items-center gap-5">
                                {i > 0 && <div className="w-px h-9 bg-white/25" />}
                                <div className="text-white">
                                    <div className="font-display font-extrabold text-2xl leading-none">{s.value}</div>
                                    <div className="text-white/60 text-[11px] mt-0.5">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* ── Scroll cue ── */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                        className="w-1 h-2 bg-white/60 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}
