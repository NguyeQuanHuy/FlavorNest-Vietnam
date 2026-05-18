"use client"
import Image from 'next/image'
import Link from 'next/link'
import { recipes } from "@/data/recipes";

const PILLARS = [
    {
        icon: '🏡',
        title: 'Truly Authentic',
        body: 'Every recipe sourced directly from Vietnamese home cooks and street vendors — not fusion restaurant menus.',
        accent: '#D97706',
        bg: 'bg-[#D97706]/10',
    },
    {
        icon: '🌿',
        title: 'Fresh & Healthy',
        body: 'Vietnamese cuisine is naturally nutritious — vibrant herbs, lean proteins and crisp vegetables in every dish.',
        accent: '#166534',
        bg: 'bg-[#166534]/10',
    },
    {
        icon: '👨‍🍳',
        title: 'Beginner-Friendly',
        body: 'Clear step-by-step instructions with Western ingredient substitutions so anyone, anywhere can cook Vietnamese.',
        accent: '#4B2E1A',
        bg: 'bg-[#4B2E1A]/8',
    },
    {
        icon: '🔬',
        title: 'Kitchen-Tested',
        body: 'Every recipe is tested in a real home kitchen — no specialist equipment, no commercial wok burners. Just your stove.',
        accent: '#D97706',
        bg: 'bg-[#D97706]/10',
    },
]

const recipeCount = recipes.length;
const avgRating = (recipes.reduce((sum, r) => sum + (r.rating ?? 4.8), 0) / recipes.length).toFixed(1);

const TRUST_STATS = [
    { value: `${recipeCount}+`, label: 'Recipes' },
    { value: avgRating, label: 'Avg. Star Rating' },
    { value: '15K+', label: 'Home Cooks' },
    { value: '3', label: 'Cities Explored' },
]

export default function WhyFlavorNest() {
    return (
        <section className="py-24 px-5 lg:px-8 bg-[#F5EDE3] dark:bg-[#1C1009]" aria-labelledby="why-heading">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: image stack */}
                    <div
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden h-80 md:h-[460px] shadow-[0_20px_60px_rgba(75,46,26,.18)]">
                            <Image
                                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
                                alt="Authentic Vietnamese cooking at FlavorNest — herbs, fresh ingredients and traditional techniques"
                                fill
                                sizes="(max-width:1024px) 100vw, 50vw"
                                className="object-cover"
                                quality={80}
                            />
                        </div>
                        {/* Overlapping stat card */}
                        <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white dark:bg-[#2a150a] rounded-2xl p-4 shadow-[0_12px_40px_rgba(75,46,26,.15)] border border-[#D97706]/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#D97706]/12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">⭐</div>
                                <div>
                                    <div className="font-display font-extrabold text-2xl text-[#D97706]">4.9/5</div>
                                    <div className="text-[10px] text-[#4B2E1A]/50 dark:text-[#F5EDE3]/40 mt-0.5">from 2,400+ cooks</div>
                                </div>
                            </div>
                        </div>
                        {/* Overlapping amber pill */}
                        <div className="absolute -top-5 -right-4 bg-[#D97706] rounded-2xl px-5 py-3.5 shadow-[0_8px_32px_rgba(217,119,6,.28)] text-white text-center">
                            <div className="font-display font-extrabold text-2xl">100+</div>
                            <div className="text-[11px] opacity-80 mt-0.5">Free Recipes</div>
                        </div>
                        {/* Small image overlap */}
                        <div className="hidden sm:block absolute -bottom-3 left-6">
                            <Image
                                src="https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=180&q=80"
                                alt="Fresh Vietnamese spring rolls"
                                width={96}
                                height={96}
                                className="w-24 h-24 rounded-2xl object-cover shadow-[0_8px_32px_rgba(75,46,26,.14)] border-4 border-[#F5EDE3] dark:border-[#1C1009]"
                            />
                        </div>
                    </div>

                    {/* Right: content */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-px bg-[#D97706]" />
                            <span className="text-[#D97706] text-[11px] font-bold uppercase tracking-[.18em]">Why FlavorNest?</span>
                        </div>
                        <h2 id="why-heading" className="font-display font-extrabold text-[#4B2E1A] dark:text-[#F5EDE3] mb-6" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
                            Your Home.<br />
                            <em className="text-[#D97706] inline-block" style={{ fontStyle: 'italic', position: 'relative' }}>
                                Our Nest.
                                <span aria-hidden style={{ position: 'absolute', left: 0, right: 0, bottom: '-6px', height: 3, background: 'linear-gradient(90deg, #D97706 0%, transparent 100%)', borderRadius: 2 }} />
                            </em>
                        </h2>
                        <p className="text-[#4B2E1A]/60 dark:text-[#F5EDE3]/55 text-sm leading-relaxed mb-8 max-w-sm">
                            We spent two years eating across Vietnam — from Hanoi's dawn pho stalls to Hue's royal kitchens and Saigon's electric street corners — so you can cook the real thing tonight.
                        </p>

                        {/* Pillars */}
                        <div className="space-y-4 mb-8">
                            {PILLARS.map((p, i) => (
                                <div
                                    key={p.title}
                                    className="flex gap-4 items-start group"
                                >
                                    <div className={`w-11 h-11 ${p.bg} rounded-2xl flex items-center justify-center text-xl flex-shrink-0 mt-0.5`}>
                                        {p.icon}
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-[#4B2E1A] dark:text-[#F5EDE3] mb-0.5">{p.title}</div>
                                        <p className="text-xs text-[#4B2E1A]/58 dark:text-[#F5EDE3]/50 leading-relaxed">{p.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center gap-1.5 text-[#D97706] font-bold text-sm hover:gap-3 transition-all duration-250"
                        >
                            Our full story →
                        </Link>
                    </div>
                </div>

                {/* Trust stats bar */}
                <div className="mt-20 rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #4B2E1A 0%, #2D1A0E 100%)', boxShadow: '0 20px 50px rgba(75,46,26,0.2)' }}>
                    <div className="grid grid-cols-2 sm:grid-cols-4">
                        {TRUST_STATS.map((stat, i) => (
                            <div
                                key={stat.label}
                                className="text-center py-10 px-4 relative"
                                style={{
                                    borderRight: i < TRUST_STATS.length - 1 ? '1px solid rgba(217,119,6,0.15)' : 'none',
                                    borderBottom: i < 2 ? '1px solid rgba(217,119,6,0.15)' : 'none',
                                }}
                            >
                                <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#D97706] mb-2 leading-none">{stat.value}</div>
                                <div className="text-[11px] uppercase tracking-[0.15em] font-bold text-white/55">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                    ))}
            </div>
        </div>
        </section >
    )
}
