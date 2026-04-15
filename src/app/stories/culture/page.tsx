'use client'

/**
 * FlavorNest Vietnam — Culinary Culture Page
 * src/app/stories/culture/page.tsx
 *
 * Don Norman UX principles applied:
 * - Visibility: Clear hierarchy, scannable sections
 * - Feedback: Hover states, smooth transitions
 * - Affordance: Cards look clickable, CTAs are obvious
 * - Mapping: Breadcrumb, progress, logical flow
 * - Consistency: Same tokens as all other pages
 */

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Article {
    slug: string
    title: string
    subtitle: string
    image: string
    readTime: string
    tag: string
    tagColor: string
    excerpt: string
    date: string
    featured?: boolean
}

const ARTICLES: Article[] = [
    {
        slug: 'pho-history',
        title: 'The 100-Year History of Phở',
        subtitle: 'How a humble noodle soup became a national identity',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1200&q=85',
        readTime: '8 min read',
        tag: 'Deep Dive',
        tagColor: '#D97706',
        date: 'March 2025',
        featured: true,
        excerpt: "Nobody agrees on where phở came from. Some say it evolved from the French pot-au-feu. Others trace it to the Chinese noodle soups that arrived with Cantonese labourers in the late 19th century. What everyone agrees on is that by the 1920s, Hanoi's street corners smelled of star anise and charred ginger at 5am — and that smell has never really left.",
    },
    {
        slug: 'five-flavours',
        title: 'The Five Flavours of Vietnamese Cooking',
        subtitle: 'Why balance is the most important ingredient',
        image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=80',
        readTime: '6 min read',
        tag: 'Philosophy',
        tagColor: '#7C3AED',
        date: 'February 2025',
        excerpt: "Vietnamese cooking is governed by ngũ vị — the five flavours: sour, bitter, sweet, spicy and salty. Every great dish holds them in tension, never letting one dominate. This is not just culinary preference. It is philosophy. It is how the Vietnamese understand the world.",
    },
    {
        slug: 'fermentation-culture',
        title: 'Vietnam's Secret Ingredient: Fermentation',
        subtitle: 'Mắm, nước chấm, and the alchemy of time',
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=900&q=80',
        readTime: '7 min read',
        tag: 'Traditions',
        tagColor: '#059669',
        date: 'January 2025',
        excerpt: "The smell hits you before you see it — a deep, oceanic, almost aggressive fermented funk that Vietnamese cooks consider essential and first-time visitors find alarming. Fish sauce. Shrimp paste. Fermented tofu. These are not flavourings. They are the soul of Vietnamese cooking.",
    },
    {
        slug: 'street-food-culture',
        title: 'Why the Best Meals Are Eaten on the Street',
        subtitle: 'The philosophy behind Vietnam's sidewalk food culture',
        image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=900&q=80',
        readTime: '5 min read',
        tag: 'Culture',
        tagColor: '#EA580C',
        date: 'December 2024',
        excerpt: "In Vietnam, the street is not where you eat because you have no other option. The street is where you eat because it is the best option. The vendor who has made nothing but bánh mì for thirty years knows more about that sandwich than any chef.",
    },
    {
        slug: 'rice-civilization',
        title: 'Rice: The Architecture of Vietnamese Civilisation',
        subtitle: 'How a grain shaped a people, a landscape, and a cuisine',
        image: 'https://images.unsplash.com/photo-1536304993881-ff86e0c9e6a0?auto=format&fit=crop&w=900&q=80',
        readTime: '9 min read',
        tag: 'History',
        tagColor: '#166534',
        date: 'November 2024',
        excerpt: "The Vietnamese word for 'to eat' is ăn cơm — literally, 'to eat rice.' Not to eat food. To eat rice. For two thousand years, rice has not just fed Vietnam — it has organised it. The rice paddy determined where villages were built, how communities cooperated, what festivals were held.",
    },
    {
        slug: 'hue-royal-cuisine',
        title: "The Lost Art of Huế's Royal Cuisine",
        subtitle: 'How the imperial kitchen shaped Central Vietnamese cooking',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=80',
        readTime: '7 min read',
        tag: 'Heritage',
        tagColor: '#BE185D',
        date: 'October 2024',
        excerpt: "When the Nguyễn emperors moved the capital to Huế in 1802, they brought their chefs with them — and demanded that every meal be both beautiful and extraordinary. The result was a royal cuisine of unparalleled refinement, where fifty small dishes replaced one large one, and every bite was a considered act of aesthetics.",
    },
]

const TAGS = ['All', 'Deep Dive', 'Philosophy', 'Traditions', 'Culture', 'History', 'Heritage']

export default function CulinaryculturePage() {
    const [activeTag, setActiveTag] = useState('All')
    const [expandedSlug, setExpandedSlug] = useState<string | null>(null)

    const featured = ARTICLES[0]
    const rest = ARTICLES.slice(1)
    const filtered = activeTag === 'All' ? rest : rest.filter(a => a.tag === activeTag)

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');
                * { box-sizing: border-box; }
                .story-card { background: white; border-radius: 24px; overflow: hidden; border: 1px solid rgba(75,46,26,0.07); text-decoration: none; display: block; transition: transform 0.33s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s, border-color 0.2s; }
                .story-card:hover { transform: translateY(-6px); box-shadow: 0 24px 56px rgba(75,46,26,0.12); border-color: rgba(217,119,6,0.2); }
                .story-card:hover .s-img { transform: scale(1.05); }
                .s-img { transition: transform 0.55s ease; }
                .pill { border: 1.5px solid rgba(75,46,26,0.12); border-radius: 100px; padding: 7px 18px; font-size: 13px; font-weight: 500; color: rgba(75,46,26,0.55); background: transparent; cursor: pointer; transition: all 0.18s; white-space: nowrap; font-family: inherit; }
                .pill:hover { color: #D97706; border-color: rgba(217,119,6,0.38); }
                .pill.on { background: #4B2E1A; color: white; border-color: #4B2E1A; }
                .featured-card { border-radius: 28px; overflow: hidden; text-decoration: none; display: block; position: relative; transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .featured-card:hover { transform: translateY(-4px); box-shadow: 0 32px 80px rgba(0,0,0,0.25); }
                .featured-card:hover .f-img { transform: scale(1.04); }
                .f-img { transition: transform 0.7s ease; }
            `}</style>

            {/* HERO */}
            <section style={{ background: 'linear-gradient(135deg, #1A0E07 0%, #2D1A0E 100%)', padding: '120px 24px 80px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(217,119,6,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
                    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 28 }}>
                        {[['Home', '/'], ['Stories', '/stories'], ['Culinary Culture', '']].map(([label, href], i) => (
                            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {i > 0 && <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>}
                                {href ? <Link href={href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                    : <span style={{ color: '#D97706', fontWeight: 600 }}>{label}</span>}
                            </span>
                        ))}
                    </nav>

                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.25)', borderRadius: 100, padding: '7px 18px', marginBottom: 22 }}>
                        <span style={{ fontSize: 14 }}>📖</span>
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FBB040' }}>Stories & Culture</span>
                    </div>

                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(44px, 7vw, 90px)', fontWeight: 800, color: 'white', margin: '0 0 20px', lineHeight: 0.95 }}>
                        Culinary<br /><span style={{ color: '#D97706', fontStyle: 'italic' }}>Culture</span>
                    </h1>

                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 18, maxWidth: 520, lineHeight: 1.78, margin: 0 }}>
                        Vietnamese food is never just food. Behind every bowl, every bite, every technique — there is a history worth knowing and a story worth telling.
                    </p>
                </div>
            </section>

            {/* FEATURED ARTICLE */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                    <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Featured Story</span>
                </div>

                <Link href={`/stories/culture/${featured.slug}`} className="featured-card">
                    <div style={{ position: 'relative', height: 'clamp(320px, 45vw, 520px)', background: '#1a1410' }}>
                        <Image src={featured.image} alt={featured.title} fill className="f-img" style={{ objectFit: 'cover', opacity: 0.75 }} quality={90} priority sizes="100vw" />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,8,4,0.95) 0%, rgba(13,8,4,0.3) 60%, transparent 100%)' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(24px,4vw,48px)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                                <span style={{ background: featured.tagColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100 }}>{featured.tag}</span>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{featured.readTime}</span>
                                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>·</span>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{featured.date}</span>
                            </div>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,4vw,48px)', fontWeight: 700, color: 'white', margin: '0 0 10px', lineHeight: 1.1, maxWidth: 700 }}>
                                {featured.title}
                            </h2>
                            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', margin: '0 0 20px', maxWidth: 620, lineHeight: 1.7 }}>
                                {featured.subtitle}
                            </p>
                            <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: 600, margin: '0 0 24px', fontStyle: 'italic' }}>
                                "{featured.excerpt.slice(0, 180)}..."
                            </p>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#D97706', color: 'white', fontSize: 13, fontWeight: 700, padding: '12px 24px', borderRadius: 100 }}>
                                Read the full story →
                            </span>
                        </div>
                    </div>
                </Link>
            </section>

            {/* FILTER + GRID */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 96px' }}>
                {/* Filter bar */}
                <div style={{ display: 'flex', gap: 8, overflowX: 'auto', marginBottom: 40, paddingBottom: 4 }}>
                    {TAGS.map(t => (
                        <button key={t} onClick={() => setActiveTag(t)} className={`pill ${activeTag === t ? 'on' : ''}`}>{t}</button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div key={activeTag} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
                        {filtered.map((article, i) => (
                            <motion.div key={article.slug} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
                                <Link href={`/stories/culture/${article.slug}`} className="story-card">
                                    <div style={{ position: 'relative', height: 220, overflow: 'hidden', background: '#1a1410' }}>
                                        <Image src={article.image} alt={article.title} fill className="s-img" style={{ objectFit: 'cover', opacity: 0.88 }} sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" quality={80} />
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,8,4,0.7) 0%, transparent 55%)' }} />
                                        <div style={{ position: 'absolute', top: 14, left: 14, background: article.tagColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '5px 13px', borderRadius: 100 }}>{article.tag}</div>
                                        <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)', color: 'rgba(255,255,255,0.8)', fontSize: 11, padding: '5px 11px', borderRadius: 100, fontWeight: 500 }}>{article.readTime}</div>
                                    </div>
                                    <div style={{ padding: '20px 22px 22px' }}>
                                        <p style={{ fontSize: 11, color: 'rgba(75,46,26,0.4)', margin: '0 0 8px', fontWeight: 600 }}>{article.date}</p>
                                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#2D1A0E', margin: '0 0 6px', lineHeight: 1.2 }}>{article.title}</h3>
                                        <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.5)', fontStyle: 'italic', margin: '0 0 12px' }}>{article.subtitle}</p>

                                        {/* Expandable excerpt */}
                                        <p style={{ fontSize: 13.5, color: 'rgba(75,46,26,0.6)', lineHeight: 1.7, margin: '0 0 16px', display: '-webkit-box', WebkitLineClamp: expandedSlug === article.slug ? 'unset' : 3, WebkitBoxOrient: 'vertical', overflow: expandedSlug === article.slug ? 'visible' : 'hidden' }}>
                                            {article.excerpt}
                                        </p>

                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid rgba(75,46,26,0.06)' }}>
                                            <span style={{ fontSize: 12, fontWeight: 700, color: '#D97706' }}>Read story →</span>
                                            <button
                                                onClick={e => { e.preventDefault(); setExpandedSlug(expandedSlug === article.slug ? null : article.slug) }}
                                                style={{ fontSize: 11, color: 'rgba(75,46,26,0.38)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}
                                            >
                                                {expandedSlug === article.slug ? 'Show less ↑' : 'Preview ↓'}
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(75,46,26,0.38)' }}>
                        <div style={{ fontSize: 44, marginBottom: 12 }}>📖</div>
                        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontStyle: 'italic' }}>No stories in this category yet.</p>
                    </div>
                )}
            </section>

            {/* MORE STORIES */}
            <section style={{ background: '#2D1A0E', padding: '64px 24px 80px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>More from Stories</span>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: 'white', margin: '0 0 32px' }}>Keep Reading</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                        {[
                            { label: "Chef's Secrets", emoji: '👨‍🍳', href: '/stories/chef-secrets' },
                            { label: 'Travel Guide', emoji: '🗺️', href: '/stories/travel' },
                            { label: 'Behind the Scenes', emoji: '🎬', href: '/stories/about' },
                            { label: 'All Recipes', emoji: '🍜', href: '/recipes' },
                            { label: 'Northern Cuisine', emoji: '🏯', href: '/recipes/north' },
                        ].map(item => (
                            <Link key={item.href} href={item.href}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '18px 16px', borderRadius: 18, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none', transition: 'all 0.2s' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(217,119,6,0.38)'; el.style.background = 'rgba(217,119,6,0.07)'; el.style.transform = 'translateY(-4px)'; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.background = 'rgba(255,255,255,0.03)'; el.style.transform = 'none'; }}
                            >
                                <span style={{ fontSize: 26 }}>{item.emoji}</span>
                                <span style={{ fontSize: 13, fontWeight: 600, color: 'white', textAlign: 'center' }}>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
