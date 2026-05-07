'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  app/_sections/FeaturedRecipes.tsx — Tab system (Recipes | Stories | Trending)
//  Bento layout, mobile-first, Framer Motion
// ─────────────────────────────────────────────────────────────────────────────

import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../_components/SectionHeader'

// ── Types ─────────────────────────────────────────────────────────────────
type TabId = 'recipes' | 'stories' | 'trending'

interface Tab {
    id: TabId
    label: string
    count: number
}

interface Recipe {
    slug: string
    title: string
    subtitle?: string
    image: string
    difficulty?: 'Easy' | 'Medium' | 'Hard'
    time?: string
    rating?: string | number
    category?: string
    tag?: { label: string; style: 'amber' | 'forest' | 'brown' } | string
}

interface Story {
    slug: string
    title: string
    subtitle?: string
    excerpt: string
    image: string
    category: string
    categoryColor?: 'amber' | 'forest' | 'brown'
    readTime: string
}

// ── Tab styles ────────────────────────────────────────────────────────────
const TAB_BASE =
    'relative px-5 py-2.5 text-sm font-bold rounded-full transition-colors duration-200 whitespace-nowrap'

// ── Animation variants ────────────────────────────────────────────────────
const tabContentVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as any } },
    exit: { opacity: 0, y: -16, transition: { duration: 0.25, ease: 'easeIn' } },
}

// ── Component ─────────────────────────────────────────────────────────────
export default function FeaturedRecipes({
    recipes = [],
    stories = [],
}: {
    recipes?: Recipe[]
    stories?: Story[]
}) {
    const [activeTab, setActiveTab] = useState<TabId>('recipes')

    // Slice data per tab
    const recipesData = useMemo(() => recipes.slice(0, 8), [recipes])
    const storiesData = useMemo(() => stories.slice(0, 3), [stories])
    const trendingData = useMemo(() => {
        return [...recipes]
            .sort((a, b) => parseFloat(String(b.rating ?? 0)) - parseFloat(String(a.rating ?? 0)))
            .slice(0, 6)
    }, [recipes])

    const tabs: Tab[] = [
        { id: 'recipes', label: 'Recipes', count: recipesData.length },
        { id: 'stories', label: 'Stories', count: storiesData.length },
        { id: 'trending', label: 'Trending', count: trendingData.length },
    ]

    return (
        <section
            className="py-24 px-5 lg:px-8 bg-[#F5EDE3] dark:bg-[#1C1009]"
            aria-labelledby="featured-heading"
        >
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    id="featured-heading"
                    eyebrow="Editor's Picks"
                    heading="Featured"
                    headingHighlight="Collection"
                    subheading="Handpicked classics, untold stories, and what the nest is buzzing about right now."
                    cta={{ label: 'Explore All', href: '/recipes' }}
                />

                {/* ── Tab Bar ───────────────────────────────────────────── */}
                <div
                    role="tablist"
                    aria-label="Featured collection tabs"
                    className="mt-10 flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-2 px-2"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {tabs.map(tab => {
                        const isActive = tab.id === activeTab
                        return (
                            <button
                                key={tab.id}
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`tabpanel-${tab.id}`}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${TAB_BASE} ${isActive
                                    ? 'text-white'
                                    : 'text-[#4B2E1A]/60 dark:text-[#F5EDE3]/55 hover:text-[#4B2E1A] dark:hover:text-[#F5EDE3] bg-white/60 dark:bg-[#2a150a]/60 border border-[#D97706]/15'
                                    }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="active-tab-pill"
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] shadow-[0_4px_16px_rgba(217,119,6,.35)]"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {tab.label}
                                    <span
                                        className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${isActive
                                            ? 'bg-white/25 text-white'
                                            : 'bg-[#D97706]/10 text-[#D97706]'
                                            }`}
                                    >
                                        {tab.count}
                                    </span>
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* ── Tab Panels (placeholder for now) ──────────────────── */}
                <div className="mt-10 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            id={`tabpanel-${activeTab}`}
                            role="tabpanel"
                            variants={tabContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="text-[#4B2E1A]/60 dark:text-[#F5EDE3]/45 text-sm py-20 text-center">
                                Tab "{activeTab}" — content coming in next step
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
