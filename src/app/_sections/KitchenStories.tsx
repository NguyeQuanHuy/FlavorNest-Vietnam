'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  app/_sections/KitchenStories.tsx
// ─────────────────────────────────────────────────────────────────────────────

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeader from '../_components/SectionHeader'

const STORIES = [
    {
        slug: 'symphony-of-hanois-dawn',
        category: 'Heritage',
        title: "The Symphony of Hanoi's Dawn",
        excerpt: 'Pho is not a dish for the impatient. To achieve its mirror-clear broth, the cook must simmer beef bones for ten patient hours — while Hanoi still sleeps.',
        image: '/recipes/doanhanoi.jpg',
        imageAlt: 'Steaming bowl of traditional Hanoi beef pho',
        tag: 'Hanoi Heritage',
        readTime: '6 min',
        accent: '#D97706',
    },
    {
        slug: 'from-street-to-table-bun-cha',
        category: 'Street Food',
        title: 'From Street to Table: Bun cha',
        excerpt: 'In 2016, a US president sat on a plastic stool in Hanoi and ordered bún chả. But for Hanoians, this smoky, chargrilled dish has been their quiet lunch secret for a century.',
        image: '/recipes/bunchaobama.jpg',
        imageAlt: 'Bun Cha grilled pork vermicelli Hanoi',
        tag: 'Hanoi Classic',
        readTime: '7 min',
        accent: '#166534',
    },
    {
        slug: 'a-taste-of-hue-imperial-cuisine',
        category: 'Heritage',
        title: 'A Taste of Hue Imperial Cuisine',
        excerpt: "The Nguyen emperors demanded every meal be a ceremony. Hue's royal kitchens prepared fifty dishes per sitting — each a meditation on colour, balance and meaning.",
        image: '/recipes/bunbohue.jpg',
        imageAlt: 'Beautiful Hue imperial Vietnamese dishes',
        tag: 'Imperial Heritage',
        readTime: '8 min',
        accent: '#D97706',
    },
]

export default function KitchenStories() {
    return (
        <section className="py-24 px-5 lg:px-8 bg-[#EAD9C8]/35 dark:bg-[#2a150a]/45" aria-labelledby="stories-heading">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    id="stories-heading"
                    eyebrow="Culture & History"
                    heading="Kitchen"
                    headingHighlight="Stories"
                    subheading="Every great dish carries a story. Discover the history behind the flavors."
                    cta={{ label: 'Read All Stories', href: '/stories' }}
                />

                <div className="mt-14 space-y-12">
                    {STORIES.map((story, i) => (
                        <motion.article
                            key={story.slug}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -28 : 28 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${i % 2 !== 0 ? 'lg:[&>:first-child]:order-2 lg:[&>:last-child]:order-1' : ''}`}
                        >
                            {/* Image */}
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0_12px_40px_rgba(75,46,26,.12)] group-hover:shadow-[0_20px_56px_rgba(75,46,26,.20)] transition-shadow duration-500">
                                <Image
                                    src={story.image}
                                    alt={story.imageAlt}
                                    fill
                                    sizes="(max-width:1024px) 100vw, 50vw"
                                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                                    quality={80}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1009]/28 via-transparent to-transparent" />
                                {/* Floating tag */}
                                <div className="absolute bottom-4 left-4">
                                    <span
                                        className="inline-flex items-center gap-1.5 text-white text-[10px] font-bold px-3.5 py-1.5 rounded-full shadow-lg"
                                        style={{ background: story.accent }}
                                    >
                                        {story.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: story.accent }} />
                                    <span className="text-[11px] font-bold uppercase tracking-[.18em]" style={{ color: story.accent }}>
                                        {story.category}
                                    </span>
                                </div>
                                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#4B2E1A] dark:text-[#F5EDE3] leading-tight mb-4 group-hover:text-[#D97706] transition-colors duration-300">
                                    {story.title}
                                </h3>
                                <blockquote className="border-l-[3px] border-[#D97706]/40 pl-4 mb-5">
                                    <p className="text-[#4B2E1A]/62 dark:text-[#F5EDE3]/55 text-[15px] leading-relaxed italic">
                                        {story.excerpt}
                                    </p>
                                </blockquote>
                                <div className="flex items-center gap-2 text-xs text-[#4B2E1A]/40 dark:text-[#F5EDE3]/35 mb-5">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 6v6l4 2" /></svg>
                                    {story.readTime} read
                                </div>
                                <Link
                                    href={`/stories/${story.slug}`}
                                    className="group/link inline-flex items-center gap-2 text-[#4B2E1A] dark:text-[#F5EDE3] font-semibold text-sm border-b-2 border-[#4B2E1A]/22 dark:border-[#F5EDE3]/22 pb-0.5 hover:text-[#D97706] hover:border-[#D97706] transition-all duration-250"
                                >
                                    Read full story
                                    <span className="group-hover/link:translate-x-1.5 transition-transform duration-250">→</span>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
