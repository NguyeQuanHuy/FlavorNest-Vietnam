"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Category {
    href: string
    emoji: string
    label: string
    count: string
    accent: string   // Tailwind hover bg class
}

const CATEGORIES: Category[] = [
    { href: '/categories#pho', emoji: '🍜', label: 'Pho', count: '12 recipes', accent: 'hover:bg-[#D97706]/18' },
    { href: '/categories#bun', emoji: '🥢', label: 'Rice noodles', count: '9 recipes', accent: 'hover:bg-[#D97706]/18' },
    { href: '/categories#banhmi', emoji: '🥖', label: 'Banh Mi', count: '7 recipes', accent: 'hover:bg-[#166534]/12' },
    { href: '/categories#rolls', emoji: '🌯', label: 'Fresh Rolls', count: '6 recipes', accent: 'hover:bg-[#166534]/12' },
    { href: '/categories#com', emoji: '🍚', label: 'Broken rice', count: '8 recipes', accent: 'hover:bg-[#D97706]/18' },
    { href: '/categories#street', emoji: '🏮', label: 'Street Food', count: '14 recipes', accent: 'hover:bg-[#4B2E1A]/8' },
    { href: '/categories#dessert', emoji: '🍮', label: 'Sweet soup', count: '10 recipes', accent: 'hover:bg-[#D97706]/18' },
    { href: '/categories#grilled', emoji: '🔥', label: 'Grilled', count: '5 recipes', accent: 'hover:bg-red-50' },
]

export default function CategoriesSection() {
    return (
        <section className="py-24 bg-[#2A1508] relative overflow-hidden" aria-labelledby="categories-heading">
            {/* Texture dots */}
            <div
                className="absolute inset-0 opacity-[.035] pointer-events-none"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg,#F5EDE3 0,#F5EDE3 1px,transparent 0,transparent 50%)', backgroundSize: '18px 18px' }}
            />
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#D97706]/12 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#166534]/8  rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-14"
                >
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-7 h-px bg-[#D97706]" />
                        <span className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.18em]">Browse By Type</span>
                        <div className="w-7 h-px bg-[#D97706]" />
                    </div>
                    <h2 id="categories-heading" className="font-display text-4xl sm:text-5xl text-white font-bold">
                        Popular <em className="text-[#D97706]">Categories</em>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                    {CATEGORIES.map((cat, i) => (
                        <motion.div
                            key={cat.href}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.06 }}
                        >
                            <Link
                                href={cat.href}
                                className={`group flex flex-col items-center text-center bg-white/6 border border-white/8 hover:border-[#D97706]/42 ${cat.accent} rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5`}
                            >
                                <span className="text-4xl mb-3 group-hover:scale-115 transition-transform duration-350 block">
                                    {cat.emoji}
                                </span>
                                <div className="text-white font-bold text-sm leading-tight mb-1">{cat.label}</div>
                                <div className="text-white/38 text-[10px]">{cat.count}</div>
                                <div className="mt-2.5 h-0.5 w-0 group-hover:w-8 bg-[#D97706]/55 rounded-full transition-all duration-350 mx-auto" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10">
                    <Link
                        href="/categories"
                        className="inline-flex items-center gap-2 border border-white/20 hover:border-[#D97706] text-white/65 hover:text-[#D97706] text-sm font-semibold px-7 py-3 rounded-2xl transition-all duration-300"
                    >
                        Browse All Categories →
                    </Link>
                </div>
            </div>
        </section>
    )
}
