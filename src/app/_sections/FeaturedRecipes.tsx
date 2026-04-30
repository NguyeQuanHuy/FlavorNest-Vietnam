'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  app/_sections/FeaturedRecipes.tsx
// ─────────────────────────────────────────────────────────────────────────────

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import SectionHeader from '../_components/SectionHeader'

// 1. GIỮ NGUYÊN INTERFACE VÀ STYLES CỦA BẠN
interface Recipe {
    slug: string
    title: string
    subtitle: string
    category: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    time: string
    rating: string
    image: string
    tag?: { label: string; style: 'amber' | 'forest' | 'brown' }
}

const TAG_STYLES = {
    amber: 'bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-white',
    forest: 'bg-[#166534] text-white',
    brown: 'bg-[#4B2E1A] text-white',
}

const DIFF_STYLES = {
    Easy: 'bg-[#166534]/10 text-[#166534]',
    Medium: 'bg-[#D97706]/12 text-[#D97706]',
    Hard: 'bg-red-50 text-red-600',
}

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any as any, delay: i * 0.07 },
    }),
}

// 2. NHẬN DỮ LIỆU TỪ PAGE.TS
export default function FeaturedRecipes({ recipes }: { recipes: any[] }) {

    // ƯU TIÊN DỮ LIỆU TRUYỀN VÀO (recipes)
    const displayRecipes = recipes && recipes.length > 0 ? recipes : [];
    const displayRecipes = recipes && recipes.length > 0 ? recipes : [];

    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    
    const scroll = (dir: 'left' | 'right') => {
        const el = scrollRef.current
        if (!el) return
        el.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' })
        setTimeout(() => {
            setCanScrollLeft(el.scrollLeft > 0)
            setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10)
        }, 350)
    }
    return (
        <section className="py-24 px-5 lg:px-8 bg-[#F5EDE3] dark:bg-[#1C1009]" aria-labelledby="featured-heading">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    id="featured-heading"
                    eyebrow="Editor's Picks"
                    heading="Featured"
                    headingHighlight="Recipes"
                    subheading="Handpicked classics and exciting new dishes from our nest."
                    cta={{ label: 'View All 100+ Recipes', href: '/recipes' }}
                />

                        <div className="relative mt-14">
            {/* Mũi tên trái */}
            {canScrollLeft && (
                <button onClick={() => scroll('left')}
                    style={{
                        position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)',
                        zIndex: 10, width: 44, height: 44, borderRadius: '50%',
                        background: '#fff', border: '1.5px solid rgba(75,46,26,0.12)',
                        boxShadow: '0 4px 16px rgba(75,46,26,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer',
                    }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18l-6-6 6-6" stroke="#4B2E1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            )}
        
            {/* Cards */}
            <div ref={scrollRef}
                style={{
                    display: 'flex', gap: 24, overflowX: 'auto', scrollSnapType: 'x mandatory',
                    scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 8,
                }}
                className="[&::-webkit-scrollbar]:hidden"
            >
                {displayRecipes.map((recipe, i) => (
                    <motion.article
                        key={recipe.slug}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        style={{ minWidth: 300, maxWidth: 360, flex: '0 0 auto', scrollSnapAlign: 'start' }}
                    >
                        <Link href={`/recipes/${recipe.slug}`}
                            className="group block bg-white dark:bg-[#2a150a] rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(75,46,26,.10)] border border-[#D97706]/8 hover:shadow-[0_20px_60px_rgba(75,46,26,.18)] hover:-translate-y-2.5 transition-all duration-400 ease-out"
                            aria-label={`${recipe.title} – ${recipe.subtitle}`}
                        >
                            {/* ... giữ nguyên nội dung card ... */}
                            <div className="relative h-52 overflow-hidden">
                                <Image src={recipe.image} alt={recipe.title} fill
                                    sizes="300px"
                                    className="object-cover group-hover:scale-[1.07] transition-transform duration-600 ease-out"
                                    quality={80}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1009]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                                    <span className="text-white font-semibold text-sm">View Recipe →</span>
                                </div>
                                {recipe.tag && (
                                    <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm ${TAG_STYLES[recipe.tag.style as keyof typeof TAG_STYLES] || TAG_STYLES.amber}`}>
                                        {recipe.tag.label}
                                    </span>
                                )}
                                <span className="absolute top-3 right-3 bg-black/35 backdrop-blur-sm text-white text-[9px] font-medium px-2 py-1 rounded-full">
                                    {recipe.cookTime || recipe.time}
                                </span>
                            </div>
                            <div className="p-5">
                                <div className="flex gap-2 flex-wrap mb-2.5">
                                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${DIFF_STYLES[recipe.difficulty as keyof typeof DIFF_STYLES] || DIFF_STYLES.Easy}`}>
                                        {recipe.category}
                                    </span>
                                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${DIFF_STYLES[recipe.difficulty as keyof typeof DIFF_STYLES] || DIFF_STYLES.Easy}`}>
                                        {recipe.difficulty}
                                    </span>
                                </div>
                                <h3 className="font-display font-bold text-lg text-[#4B2E1A] dark:text-[#F5EDE3] group-hover:text-[#D97706] transition-colors leading-snug mb-1">
                                    {recipe.title}
                                </h3>
                                <p className="text-xs text-[#4B2E1A]/50 dark:text-[#F5EDE3]/40 mb-4 italic">{recipe.subtitle || recipe.description}</p>
                                <div className="flex items-center justify-between pt-3.5 border-t border-[#D97706]/8">
                                    <span className="text-[#F59E0B] text-xs font-medium">
                                        {'★'.repeat(Math.floor(parseFloat(recipe.rating || "5")))}
                                        <span className="text-[#4B2E1A]/40 dark:text-[#F5EDE3]/35 ml-1">{recipe.rating || "5.0"}</span>
                                    </span>
                                    <span className="text-[#D97706] text-xs font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-250">
                                        Cook it
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                            <path strokeLinecap="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </motion.article>
                ))}
            </div>
        
            {/* Mũi tên phải */}
            {canScrollRight && (
                <button onClick={() => scroll('right')}
                    style={{
                        position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
                        zIndex: 10, width: 44, height: 44, borderRadius: '50%',
                        background: '#fff', border: '1.5px solid rgba(75,46,26,0.12)',
                        boxShadow: '0 4px 16px rgba(75,46,26,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer',
                    }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18l6-6-6-6" stroke="#4B2E1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            )}
        </div>

                {/* --- PHẦN SỬA LỖI: THÊM CÁC THẺ ĐÓNG THIẾU --- */}
                <div className="text-center mt-10 lg:hidden">
                    <Link
                        href="/recipes"
                        className="inline-flex items-center gap-2 border-2 border-[#D97706] text-[#D97706] hover:bg-[#D97706] hover:text-white font-bold px-8 py-3.5 rounded-2xl transition-all duration-300 text-sm"
                    >
                        View All Recipes →
                    </Link>
                </div>
            </div>
        </section>
    );
}
