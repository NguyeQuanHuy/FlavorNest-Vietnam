'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  app/_sections/TrendingSection.tsx
//  Social proof: real site numbers (count-up) + "Trending this week" ranking
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView, animate } from 'framer-motion'
import { Clock, Flame, ArrowRight } from 'lucide-react'
import ShareButtons from '@/components/ShareButtons'

export type TrendingItem = {
    slug: string
    title: string
    subtitle: string
    image: string
    rating: string
    reviews: number
    time: string
    region: string
}

type Stat = { value: number; label: string; suffix?: string }

function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })
    const [n, setN] = useState(0)
    useEffect(() => {
        if (!inView) return
        const c = animate(0, value, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: v => setN(Math.round(v)) })
        return () => c.stop()
    }, [inView, value])
    return <span ref={ref} className="tabular-nums">{n.toLocaleString('en-US')}{suffix}</span>
}


export default function TrendingSection({ items, stats, week }: { items: TrendingItem[]; stats: Stat[]; week: string }) {
    return (
        <section aria-labelledby="trending-heading" className="px-5 py-20 sm:px-6 lg:py-24" style={{ background: '#FBF8F4' }}>
            <div className="mx-auto max-w-[1200px]">

                {/* ── Stats strip ── */}
                <div className="mb-16 grid grid-cols-2 overflow-hidden rounded-3xl border border-[rgba(75,46,26,0.08)] bg-white md:grid-cols-4">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            className={`px-6 py-7 text-center ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''} ${i === 2 ? 'md:border-l' : ''} border-[rgba(75,46,26,0.08)]`}
                        >
                            <div className="text-[34px] font-bold leading-none sm:text-[40px]" style={{ fontFamily: "'Playfair Display', serif", color: '#2D1A0E' }}>
                                <CountUp value={s.value} suffix={s.suffix} />
                            </div>
                            <div className="mt-2 text-[13px] font-medium" style={{ color: 'rgba(75,46,26,0.55)' }}>{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* ── Heading ── */}
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase" style={{ background: '#FEF3C7', color: '#B45309', letterSpacing: '0.12em' }}>
                            <Flame size={13} /> This week’s picks · {week}
                        </div>
                        <h2 id="trending-heading" className="font-bold leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4.5vw, 3rem)', color: '#2D1A0E' }}>
                            Worth <em style={{ color: '#D97706' }}>cooking</em> this week
                        </h2>
                    </div>
                    <Link href="/recipes" className="group flex items-center gap-1.5 text-[14px] font-semibold transition-colors hover:text-[#D97706]" style={{ color: '#4B2E1A' }}>
                        All recipes <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* ── Cards: snap-scroll on mobile, grid on desktop ── */}
                <ol className="-mx-5 flex snap-x snap-mandatory scroll-pl-5 gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
                    {items.map((r, i) => (
                        <motion.li
                            key={r.slug}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ delay: (i % 4) * 0.07, duration: 0.45 }}
                            className="w-[72%] flex-shrink-0 snap-start sm:w-auto"
                        >
                            <Link href={`/recipes/${r.slug}`} className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] focus-visible:ring-offset-4" style={{ textDecoration: 'none' }}>
                                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl" style={{ background: '#EFE7DC' }}>
                                    <Image
                                        src={r.image}
                                        alt={r.title}
                                        fill
                                        sizes="(max-width: 640px) 72vw, (max-width: 1024px) 50vw, 300px"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                                    />
                                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,11,5,0.85) 0%, rgba(20,11,5,0.15) 45%, transparent 70%)' }} />

                                    <div className="absolute right-3 top-3">
                                        <ShareButtons variant="icon" path={`/recipes/${r.slug}`} title={r.title} image={r.image} />
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 flex items-end gap-3 p-4">
                                        <span className="font-bold leading-[0.8]" style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, color: 'rgba(255,255,255,0.92)' }}>
                                            {i + 1}
                                        </span>
                                        <div className="min-w-0 pb-0.5">
                                            <h3 className="line-clamp-2 text-[17px] font-bold leading-snug text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{r.title}</h3>
                                            <p className="truncate text-[12px]" style={{ color: 'rgba(245,237,227,0.75)' }}>{r.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center gap-3 px-1 text-[12.5px]" style={{ color: 'rgba(75,46,26,0.6)' }}>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {r.time}</span>
                                    {r.region && r.region !== 'All' && <span className="ml-auto">{r.region}</span>}
                                </div>
                            </Link>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
