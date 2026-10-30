'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  app/stories/_components/StoriesClient.tsx
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Story } from '../page'
import NewsletterForm from '@/components/NewsletterForm'

// ── CategoryColor defined here (single source of truth) ───────────────────
export type CategoryColor = 'amber' | 'forest' | 'brown'

const DOT: Record<CategoryColor, string> = {
    amber: '#D97706',
    forest: '#166534',
    brown: '#4B2E1A',
}

const ALL = 'All'

interface Props {
    stories: Story[]
}

// Image with a soft placeholder (title initial) when the file is missing
function Cover({ story, sizes, priority = false }: { story: Story; sizes: string; priority?: boolean }) {
    const [failed, setFailed] = useState(false)
    return (
        <>
            <span aria-hidden className="absolute inset-0 flex items-center justify-center font-display text-5xl font-bold text-[rgba(75,46,26,0.16)]">
                {story.title.charAt(0)}
            </span>
            {!failed && (
                <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    priority={priority}
                    sizes={sizes}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    onError={() => setFailed(true)}
                />
            )}
        </>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
export default function StoriesClient({ stories }: Props) {
    // Tabs: every category with at least 2 stories, most common first
    const categories = useMemo(() => {
        const count = new Map<string, number>()
        stories.forEach(s => count.set(s.category, (count.get(s.category) ?? 0) + 1))
        return [ALL, ...[...count.entries()].filter(([, n]) => n >= 2).sort((a, b) => b[1] - a[1]).map(([c]) => c)]
    }, [stories])

    const [active, setActive] = useState(ALL)

    const filtered = useMemo(
        () => (active === ALL ? stories : stories.filter(s => s.category === active)),
        [stories, active],
    )
    const featured = filtered.find(s => s.featured) ?? filtered[0]
    const rest = filtered.filter(s => s.slug !== featured?.slug)

    return (
        <>
            {/* ═══ HEADER ═══ */}
            <section className="px-5 pb-10 pt-32">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-4 flex items-center gap-2">
                        <div className="h-px w-8 bg-[#D97706]" />
                        <span className="text-[11px] font-bold uppercase tracking-[.18em] text-[#D97706]">FlavorNest Vietnam</span>
                    </div>
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <h1 className="font-display text-5xl font-bold leading-[1.02] text-[#2D1A0E] sm:text-6xl">
                            Kitchen <em className="text-[#D97706]">Stories</em>
                        </h1>
                        <p className="max-w-md text-[15px] leading-relaxed text-[rgba(75,46,26,0.65)]">
                            Every great dish carries a story. The history, culture and people behind authentic Vietnamese cuisine.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ FILTER TABS ═══ */}
            <section className="sticky top-[61px] z-40 min-[641px]:top-[85px] border-b border-[rgba(75,46,26,0.1)] bg-[#F5EDE3]/95 px-5 backdrop-blur-xl">
                <div className="mx-auto max-w-6xl overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex w-max gap-7">
                        {categories.map(cat => {
                            const isActive = cat === active
                            return (
                                <button
                                    key={cat}
                                    aria-pressed={isActive}
                                    onClick={() => setActive(cat)}
                                    className={`relative whitespace-nowrap py-4 text-[14px] font-medium transition-colors ${isActive ? 'text-[#2D1A0E]' : 'text-[rgba(75,46,26,0.5)] hover:text-[#2D1A0E]'}`}
                                >
                                    {cat}
                                    {isActive && (
                                        <motion.span
                                            layoutId="stories-tab-underline"
                                            transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                                            className="absolute inset-x-0 bottom-0 h-0.5 bg-[#D97706]"
                                        />
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ CONTENT ═══ */}
            <div className="px-5 py-10">
                <div className="mx-auto max-w-6xl">
                <AnimatePresence mode="wait">
                    <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                        {/* Featured: magazine cover */}
                        {featured && (
                            <Link href={`/stories/${featured.slug}`} className="group relative mb-14 block overflow-hidden rounded-[20px] bg-[#EFE7DC]" style={{ textDecoration: 'none' }}>
                                <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]">
                                    <Cover story={featured} sizes="(max-width: 1200px) 100vw, 1200px" priority />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,11,5,0.88)] via-[rgba(20,11,5,0.5)] to-transparent" />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:max-w-3xl">
                                    <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[rgba(245,237,227,0.85)]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />
                                        Featured · {featured.category}
                                    </div>
                                    <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                                        {featured.title}
                                    </h2>
                                    <p className="mt-3 line-clamp-2 max-w-2xl text-[15px] leading-relaxed text-[rgba(245,237,227,0.8)] sm:text-base">
                                        {featured.excerpt}
                                    </p>
                                    <div className="mt-5 flex items-center gap-4 text-[13px] font-semibold text-white">
                                        <span className="inline-flex items-center gap-2 transition-colors group-hover:text-[#F59E0B]">
                                            Read the story <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                                        </span>
                                        <span className="font-normal text-[rgba(245,237,227,0.6)]">{featured.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* Grid */}
                        {rest.length > 0 && (
                            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                                {rest.map(story => (
                                    <StoryCard key={story.slug} story={story} />
                                ))}
                            </div>
                        )}

                        {filtered.length === 0 && (
                            <p className="py-24 text-center text-[15px] text-[rgba(75,46,26,0.5)]">Stories in this category are coming soon.</p>
                        )}
                    </motion.div>
                </AnimatePresence>
                </div>
            </div>

            <NewsletterBanner />
        </>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
//  StoryCard
// ─────────────────────────────────────────────────────────────────────────────
function StoryCard({ story }: { story: Story }) {
    return (
        <Link href={`/stories/${story.slug}`} className="group block" style={{ textDecoration: 'none' }}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-[#EFE7DC]">
                <Cover story={story} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px" />
            </div>
            <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.09em] text-[rgba(75,46,26,0.5)]">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: DOT[story.categoryColor] ?? '#D97706' }} />
                <span className="text-[rgba(75,46,26,0.75)]">{story.category}</span>
                <span aria-hidden>·</span>
                <span>{story.readTime}</span>
            </div>
            <h2 className="mt-2 font-display text-[21px] font-bold leading-snug text-[#2D1A0E] transition-colors duration-200 group-hover:text-[#D97706]">
                {story.title}
            </h2>
            <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-[rgba(75,46,26,0.62)]">
                {story.excerpt}
            </p>
        </Link>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
//  NewsletterBanner (form is wired up in step 4, once Resend + a domain exist)
// ─────────────────────────────────────────────────────────────────────────────
function NewsletterBanner() {
    return (
        <section className="px-5 pb-20 pt-6">
            <div className="mx-auto grid max-w-6xl gap-6 rounded-[20px] border border-[rgba(75,46,26,0.09)] bg-white px-6 py-10 sm:px-12 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div>
                    <h2 className="font-display text-3xl font-bold text-[#2D1A0E]">New stories in your inbox</h2>
                    <p className="mt-2 text-[15px] text-[rgba(75,46,26,0.65)]">The people and places behind Vietnamese food. No spam, unsubscribe anytime.</p>
                </div>
                <NewsletterForm source="stories" />
            </div>
        </section>
    )
}
