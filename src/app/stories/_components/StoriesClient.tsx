'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  app/stories/_components/StoriesClient.tsx
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import type { Story } from '../page'

// ── CategoryColor defined here (single source of truth) ───────────────────
export type CategoryColor = 'amber' | 'forest' | 'brown'

// ── Category filter config ─────────────────────────────────────────────────
const CATEGORIES = ['All', 'Heritage', 'Traditional', 'Street Food', 'Fusion'] as const
type Category = (typeof CATEGORIES)[number]

// ── Color maps (Tailwind JIT-safe: full class strings only) ───────────────
const TAG_COLOR: Record<CategoryColor, { bg: string; text: string; dot: string }> = {
    amber: {
        bg: 'bg-[#D97706]/12',
        text: 'text-[#D97706]',
        dot: 'bg-[#D97706]',
    },
    forest: {
        bg: 'bg-[#166534]/10',
        text: 'text-[#166534]',
        dot: 'bg-[#166534]',
    },
    brown: {
        bg: 'bg-[#4B2E1A]/10',
        text: 'text-[#4B2E1A] dark:text-[#F5EDE3]',
        dot: 'bg-[#4B2E1A]',
    },
}

// ── Animation variants ─────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
    }),
}

const filterVariant = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
}

// ── Props ──────────────────────────────────────────────────────────────────
interface Props {
    stories: Story[]
}

// ─────────────────────────────────────────────────────────────────────────────
export default function StoriesClient({ stories }: Props) {
    const [activeCategory, setActiveCategory] = useState<Category>('All')

    const filtered = useMemo(
        () =>
            activeCategory === 'All'
                ? stories
                : stories.filter(s => s.category === activeCategory),
        [stories, activeCategory],
    )

    const featured = filtered.find(s => s.featured) ?? filtered[0]
    const rest = filtered.filter(s => s.slug !== featured?.slug)

    return (
        <>
            {/* ═══ HERO / PAGE HEADER ═══════════════════════════════════════ */}
            <section className="relative pt-32 pb-16 px-5 overflow-hidden">
                <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-[#D97706]/8 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-0 -left-24 w-80 h-80 bg-[#166534]/6 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 mb-4"
                    >
                        <div className="w-8 h-px bg-[#D97706]" />
                        <span className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.2em]">
                            FlavorNest Vietnam
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold text-[#4B2E1A] dark:text-[#F5EDE3] leading-[1.02] mb-5"
                    >
                        Kitchen{' '}
                        <em className="text-[#D97706] not-italic">Stories</em>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[#4B2E1A]/60 dark:text-[#F5EDE3]/55 text-lg sm:text-xl max-w-xl leading-relaxed"
                    >
                        Every great dish carries a story. Discover the history, culture and
                        people behind authentic Vietnamese cuisine.
                    </motion.p>
                </div>
            </section>

            {/* ═══ CATEGORY FILTER BAR ══════════════════════════════════════ */}
            <section className="sticky top-[72px] z-40 bg-[#F5EDE3]/94 dark:bg-[#1C1009]/94 backdrop-blur-xl border-b border-[#D97706]/12 py-3">
                <div className="max-w-5xl mx-auto px-5 overflow-x-auto">
                    <div className="flex gap-2 w-max">
                        {CATEGORIES.map(cat => {
                            const active = cat === activeCategory
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`
                    relative text-[13px] font-semibold px-5 py-2 rounded-full
                    transition-all duration-250
                    ${active
                                            ? 'bg-[#D97706] text-white shadow-[0_4px_16px_rgba(217,119,6,.3)]'
                                            : 'bg-white dark:bg-[#2a150a] text-[#4B2E1A]/65 dark:text-[#F5EDE3]/55 hover:text-[#D97706] border border-[#D97706]/18 hover:border-[#D97706]/45'
                                        }
                  `}
                                >
                                    {cat}
                                    {active && (
                                        <motion.span
                                            layoutId="active-filter"
                                            className="absolute inset-0 rounded-full bg-[#D97706] -z-10"
                                        />
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ MAIN CONTENT ═════════════════════════════════════════════ */}
            <div className="max-w-5xl mx-auto px-5 py-16 space-y-24">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        variants={filterVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Featured story */}
                        {featured && (
                            <motion.article
                                custom={0}
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-20"
                            >
                                <div className="relative">
                                    <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] shadow-[0_24px_64px_rgba(75,46,26,.18)] group-hover:shadow-[0_32px_80px_rgba(75,46,26,.24)] transition-shadow duration-500">
                                        <Image
                                            src={featured.image}
                                            alt={featured.imageAlt}
                                            fill
                                            priority
                                            sizes="(max-width:1024px) 100vw, 50vw"
                                            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                            quality={85}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1009]/30 via-transparent to-transparent" />
                                    </div>
                                    <div className="absolute -bottom-4 right-6 lg:right-4">
                                        <span className="inline-flex items-center gap-1.5 bg-[#D97706] text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-[0_6px_24px_rgba(217,119,6,.4)]">
                                            {featured.tag}
                                        </span>
                                    </div>
                                </div>

                                <div className="pt-4 lg:pt-0">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className={`w-1.5 h-1.5 rounded-full ${TAG_COLOR[featured.categoryColor].dot}`} />
                                        <span className={`text-xs font-bold uppercase tracking-[.18em] ${TAG_COLOR[featured.categoryColor].text}`}>
                                            {featured.subtitle}
                                        </span>
                                    </div>
                                    <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#4B2E1A] dark:text-[#F5EDE3] leading-tight mb-5 group-hover:text-[#D97706] transition-colors duration-300">
                                        {featured.title}
                                    </h2>
                                    <blockquote className="border-l-[3px] border-[#D97706] pl-4 mb-7">
                                        <p className="text-[#4B2E1A]/65 dark:text-[#F5EDE3]/58 text-[15px] leading-relaxed italic">
                                            {featured.excerpt}
                                        </p>
                                    </blockquote>
                                    <div className="flex items-center gap-4 text-xs text-[#4B2E1A]/45 dark:text-[#F5EDE3]/38 mb-7">
                                        <span>{featured.publishedAt}</span>
                                        <span className="w-1 h-1 rounded-full bg-[#D97706]/40" />
                                        <span>{featured.readTime}</span>
                                    </div>
                                    <Link
                                        href={`/stories/${featured.slug}`}
                                        className="group/link inline-flex items-center gap-2 text-[#4B2E1A] dark:text-[#F5EDE3] font-semibold text-sm border-b-2 border-[#4B2E1A]/25 dark:border-[#F5EDE3]/25 pb-0.5 hover:text-[#D97706] hover:border-[#D97706] transition-all duration-250"
                                    >
                                        Read full story
                                        <span className="group-hover/link:translate-x-1.5 transition-transform duration-250">→</span>
                                    </Link>
                                </div>
                            </motion.article>
                        )}

                        {rest.length > 0 && (
                            <div className="flex items-center gap-4 mb-16">
                                <div className="flex-1 h-px bg-[#D97706]/15" />
                                <span className="text-[10px] text-[#D97706] font-bold uppercase tracking-[.2em]">
                                    More Stories
                                </span>
                                <div className="flex-1 h-px bg-[#D97706]/15" />
                            </div>
                        )}

                        <div className="space-y-14">
                            {rest.map((story, i) => (
                                <StoryCard key={story.slug} story={story} index={i + 1} flip={i % 2 !== 0} />
                            ))}
                        </div>

                        {filtered.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-32 text-center">
                                <div className="text-5xl mb-4">🍜</div>
                                <h3 className="font-display text-2xl text-[#4B2E1A] dark:text-[#F5EDE3] mb-2">
                                    No stories yet
                                </h3>
                                <p className="text-[#4B2E1A]/50 text-sm">
                                    Stories in this category are coming soon.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <NewsletterBanner />
        </>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
//  StoryCard
// ─────────────────────────────────────────────────────────────────────────────
function StoryCard({
    story,
    index,
    flip,
}: {
    story: Story
    index: number
    flip: boolean
}) {
    const colors = TAG_COLOR[story.tagColor]

    return (
        <motion.article
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className={`
        group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center
        ${flip ? 'lg:[&>:first-child]:order-2 lg:[&>:last-child]:order-1' : ''}
      `}
        >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0_12px_40px_rgba(75,46,26,.12)] group-hover:shadow-[0_20px_56px_rgba(75,46,26,.2)] transition-shadow duration-500">
                <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1009]/25 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4">
                    <span className={`inline-flex items-center gap-1.5 ${colors.bg} ${colors.text} text-[10px] font-bold px-3 py-1.5 rounded-full backdrop-blur-sm`}>
                        {story.tag}
                    </span>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-2 mb-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                    <span className={`text-[11px] font-bold uppercase tracking-[.18em] ${colors.text}`}>
                        {story.subtitle}
                    </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#4B2E1A] dark:text-[#F5EDE3] leading-tight mb-4 group-hover:text-[#D97706] transition-colors duration-300">
                    {story.title}
                </h2>
                <blockquote className="border-l-[3px] border-[#D97706]/40 pl-4 mb-5">
                    <p className="text-[#4B2E1A]/62 dark:text-[#F5EDE3]/55 text-sm leading-relaxed italic line-clamp-3">
                        {story.excerpt}
                    </p>
                </blockquote>
                <div className="flex items-center gap-3 text-xs text-[#4B2E1A]/40 dark:text-[#F5EDE3]/35 mb-5">
                    <span>{story.publishedAt}</span>
                    <span className="w-1 h-1 rounded-full bg-[#D97706]/35" />
                    <span>{story.readTime}</span>
                </div>
                <Link
                    href={`/stories/${story.slug}`}
                    className="group/link inline-flex items-center gap-2 text-[#4B2E1A] dark:text-[#F5EDE3] font-semibold text-sm border-b-2 border-[#4B2E1A]/20 dark:border-[#F5EDE3]/20 pb-0.5 hover:text-[#D97706] hover:border-[#D97706] transition-all duration-250"
                >
                    Read full story
                    <span className="group-hover/link:translate-x-1.5 transition-transform duration-250">→</span>
                </Link>
            </div>
        </motion.article>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
//  NewsletterBanner
// ─────────────────────────────────────────────────────────────────────────────
function NewsletterBanner() {
    return (
        <section className="relative py-24 px-5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4B2E1A] via-[#3a2010] to-[#166534]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/4 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] border border-white/6 rounded-full pointer-events-none" />
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#D97706]/18 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                <div className="text-4xl mb-4">🪺</div>
                <h2 className="font-display text-4xl sm:text-5xl text-white font-bold mb-3">
                    New stories, every week.
                </h2>
                <p className="text-white/55 text-lg mb-8 max-w-sm mx-auto">
                    Join 15,000 food lovers who read FlavorNest Kitchen Stories every Tuesday.
                </p>
                <form
                    onSubmit={e => e.preventDefault()}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-1 bg-white/12 backdrop-blur-sm border border-white/20 text-white placeholder-white/42 px-5 py-4 rounded-2xl text-sm focus:outline-none focus:border-[#D97706] focus:bg-white/18 transition-all"
                    />
                    <button
                        type="submit"
                        className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold px-7 py-4 rounded-2xl text-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(217,119,6,.4)] whitespace-nowrap"
                    >
                        Subscribe Free →
                    </button>
                </form>
                <p className="text-white/28 text-xs mt-4">
                    ✓ New stories every Tuesday &nbsp;·&nbsp; ✓ No spam &nbsp;·&nbsp; ✓ Unsubscribe anytime
                </p>
            </div>
        </section>
    )
}