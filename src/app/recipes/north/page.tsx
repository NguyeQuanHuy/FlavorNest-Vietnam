'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Utensils, Clock, Globe, Star } from 'lucide-react'
import { Utensils, Clock, Globe, Star, Flame, Palmtree, Soup, BookOpen } from 'lucide-react'

const RECIPES = [
    {
        slug: 'hanoi-beef-pho',
        title: 'Hanoi Beef Pho',
        subtitle: 'Pho bo Ha Noi',
        image: '/images/recipes/pho-bo-ha-noi.webp',
        time: '3 hrs', difficulty: 'Medium', rating: '4.9', reviews: 248, cal: 420,
        tag: 'Iconic', tagColor: '#D97706',
        description: 'The national soul food — slow-charred bones, aromatic spice bundle, silky noodles.',
    },
    {
        slug: 'bun-cha-hanoi',
        title: 'Hanoi Grilled Pork Vermicelli',
        subtitle: 'Bun cha Ha Noi',
        image: '/images/recipes/bunchahanoi.jpg',
        time: '45 min', difficulty: 'Easy', rating: '4.7', reviews: 142, cal: 380,
        tag: 'Street Classic', tagColor: '#059669',
        description: 'Chargrilled pork patties in sweet-savory dipping broth with rice vermicelli.',
    },
    {
        slug: 'banh-cuon',
        title: 'Steamed Rice Rolls',
        subtitle: 'Banh cuon Ha Noi',
        image: '/images/recipes/banh-cuon.jpg',
        time: '45 min', difficulty: 'Medium', rating: '4.8', reviews: 167, cal: 290,
        tag: 'Morning Ritual', tagColor: '#7C3AED',
        description: 'Silky steamed rice sheets rolled with seasoned pork and wood ear mushrooms.',
    },
    {
        slug: 'xoi-xeo',
        title: 'Xoi xeo',
        subtitle: 'Xoi xeo',
        image: '/images/recipes/xoi-xeo.jpg',
        time: '1 hr', difficulty: 'Easy', rating: '4.8', reviews: 134, cal: 380,
        tag: 'Breakfast', tagColor: '#EA580C',
        description: 'Golden sticky rice with split mung bean and crispy fried shallots.',
    },
    {
        slug: 'cha-ca-la-vong',
        title: 'Turmeric Fish with Dill',
        subtitle: 'Cha ca La Vong',
        image: '/images/recipes/cha-ca-la-vong.jpg',
        time: '40 min', difficulty: 'Medium', rating: '4.9', reviews: 89, cal: 340,
        tag: 'Heritage', tagColor: '#D97706',
        description: 'Hanoi\'s most celebrated dish — turmeric-marinated fish sizzled with fresh dill.',
    },
    {
        slug: 'bun-thang',
        title: 'Hanoi Vermicelli Soup',
        subtitle: 'Bun Thang',
        image: '/images/recipes/bun-thang.jpg',
        time: '2 hrs', difficulty: 'Hard', rating: '4.8', reviews: 76, cal: 310,
        tag: 'Royal Kitchen', tagColor: '#BE185D',
        description: 'Delicate chicken broth with egg ribbons, shredded chicken, and crab cake.',
    },
]

const DIFF_DOT: Record<string, string> = { Easy: '#10b981', Medium: '#f59e0b', Hard: '#ef4444' }
const FILTERS = ['All', 'Easy', 'Medium', 'Hard']

const CULTURAL_NOTES = [
    { icon: '🏯', title: 'Royal Roots', body: 'Northern cuisine was shaped by centuries of imperial courts in Thăng Long (Hanoi), emphasizing balance, subtlety, and presentation.' },
    { icon: '🌿', title: 'Restrained Seasoning', body: 'Unlike the sweet south, Northern cooking is less sweet, more savory — letting quality ingredients speak through clean, refined flavors.' },
    { icon: '❄️', title: 'Four Seasons', body: 'Hanoi\'s distinct seasons influence the cuisine deeply — hearty warm soups in winter, lighter herb-forward dishes in summer.' },
]

export default function NorthernCuisinePage() {
    const [filter, setFilter] = useState('All')
    const [scrolled, setScrolled] = useState(false)
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const filtered = RECIPES.filter(r => filter === 'All' || r.difficulty === filter)

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif", color: '#2D1A0E' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,700;0,800;1,600;1,700&display=swap');

                * { box-sizing: border-box; }

                .hero-parallax {
                    position: relative;
                    height: 100vh;
                    min-height: 600px;
                    max-height: 900px;
                    overflow: hidden;
                    display: flex;
                    align-items: flex-end;
                }
                .hero-img {
                    position: absolute; inset: 0;
                    transition: transform 0.1s linear;
                }
                .hero-gradient {
                    position: absolute; inset: 0;
                    background: linear-gradient(
                        to bottom,
                        rgba(13,10,7,0.2) 0%,
                        rgba(13,10,7,0.1) 30%,
                        rgba(13,10,7,0.5) 65%,
                        rgba(13,10,7,0.96) 100%
                    );
                }
                .pill-f {
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 100px;
                    padding: 8px 20px;
                    font-size: 13px;
                    font-weight: 500;
                    color: rgba(255,255,255,0.5);
                    background: transparent;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                    font-family: inherit;
                }
                .pill-f:hover { color: white; border-color: rgba(255,255,255,0.4); }
                .pill-f.on { background: #D97706; color: white; border-color: #D97706; }

                .r-card {
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 24px;
                    overflow: hidden;
                    text-decoration: none;
                    display: block;
                    transition: transform 0.32s cubic-bezier(0.34,1.4,0.64,1), border-color 0.25s, background 0.25s;
                }
                .r-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(217,119,6,0.3);
                    background: rgba(255,255,255,0.07);
                }
                .r-card:hover .r-img { transform: scale(1.07); }
                .r-img { transition: transform 0.55s ease; }

                .culture-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 20px;
                    padding: 28px;
                    transition: background 0.2s, border-color 0.2s;
                }
                .culture-card:hover {
                    background: rgba(255,255,255,0.06);
                    border-color: rgba(217,119,6,0.2);
                }

                .breadcrumb a { color: rgba(255,255,255,0.4); text-decoration: none; font-weight: 500; transition: color 0.15s; }
                .breadcrumb a:hover { color: #D97706; }

                .stat-block { border-left: 1px solid rgba(255,255,255,0.1); padding-left: 24px; }
                .stat-block:first-child { border-left: none; padding-left: 0; }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .fade-up { animation: fadeUp 0.7s ease forwards; }
                .fade-up-2 { animation: fadeUp 0.7s 0.15s ease both; }
                .fade-up-3 { animation: fadeUp 0.7s 0.28s ease both; }
            `}</style>

{/* ── HERO ── */}
            <section style={{ background: 'linear-gradient(135deg, #FEF3E2 0%, #FDEAC8 55%, #F5EDE3 100%)', padding: '88px 24px 48px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 40, right: '6%', width: 280, height: 280, borderRadius: '50%', background: 'rgba(217,119,6,0.07)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    {/* Breadcrumb */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 24 }}>
                        {[['Home', '/'], ['Recipes', '/recipes'], ['Northern', '']].map(([label, href], i) => (
                            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {i > 0 && <span style={{ color: 'rgba(75,46,26,0.3)' }}>›</span>}
                                {href ?
                                    <Link href={href} style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                    : <span style={{ color: '#D97706', fontWeight: 600 }}>{label}</span>}
                            </span>
                        ))}
                    </nav>

                    {/* Eyebrow */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                        <div style={{ width: 32, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Hanoi & The North</span>
                    </div>

                    {/* Title */}
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: '#2D1A0E', margin: '0 0 18px', lineHeight: 1.0 }}>
                        Northern<br /><span style={{ color: '#D97706', fontStyle: 'italic' }}>Cuisine</span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{ color: 'rgba(75,46,26,0.62)', fontSize: 17, maxWidth: 500, lineHeight: 1.75, margin: '0 0 36px' }}>
                        From the dawn pho stalls of Hanoi to the smoky bún chả of Le Van Huu street — Northern Vietnamese cuisine is defined by restraint, clarity, and the quiet confidence of a thousand-year capital.
                    </p>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                        {[
                            { Icon: Utensils, val: `${RECIPES.length}`, lbl: 'Recipes' },
                            { Icon: Clock, val: '40 min', lbl: 'Quickest' },
                            { Icon: Globe, val: '1', lbl: 'Region' },
                            { Icon: Star, val: '4.8', lbl: 'Avg Rating' },
                        ].map(({ Icon, val, lbl }) => (
                            <div key={lbl}>
                                <Icon size={16} strokeWidth={1.8} color="#D97706" style={{ marginBottom: 4 }} />
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#2D1A0E', lineHeight: 1 }}>{val}</div>
                                <div style={{ fontSize: 11, color: 'rgba(75,46,26,0.45)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{lbl}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FILTER + GRID ── */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 96px' }}>
                {/* Section header */}
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 32 }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                            <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>The Collection</span>
                        </div>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>
                            All Northern Recipes
                        </h2>
                    </div>

                    {/* Filter */}
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {FILTERS.map(f => (
                            <button key={f} onClick={() => setFilter(f)} className={`pill-f ${filter === f ? 'on' : ''}`}>{f}</button>
                        ))}
                    </div>
                </div>

                <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.5)', marginBottom: 32, fontWeight: 500 }}>
                    {filtered.length} recipes
                </p>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
                    {filtered.map(recipe => (
                        <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} className="r-card">
                            {/* Image */}
                            <div style={{ position: 'relative', height: 220, overflow: 'hidden', background: '#1a1410' }}>
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    fill
                                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                                    className="r-img"
                                    style={{ objectFit: 'cover', opacity: 0.9 }}
                                    quality={80}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,10,7,0.8) 0%, transparent 55%)' }} />

                                {/* Tag */}
                                <div style={{ position: 'absolute', top: 14, left: 14, background: recipe.tagColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 13px', borderRadius: 100 }}>
                                    {recipe.tag}
                                </div>
                                <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)', color: 'rgba(255,255,255,0.85)', fontSize: 11, padding: '5px 11px', borderRadius: 100, fontWeight: 500 }}>
                                    ⏱ {recipe.time}
                                </div>
                                <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 5 }}>
                                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: DIFF_DOT[recipe.difficulty] }} />
                                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11, fontWeight: 600 }}>{recipe.difficulty}</span>
                                </div>
                                <div style={{ position: 'absolute', bottom: 14, right: 14, color: 'rgba(255,255,255,0.5)', fontSize: 10, fontWeight: 600 }}>
                                    {recipe.cal} kcal
                                </div>
                            </div>

                            {/* Body */}
                            <div style={{ padding: '18px 20px 20px' }}>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: 'white', margin: '0 0 2px', lineHeight: 1.2 }}>
                                    {recipe.title}
                                </h3>
                                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', margin: '0 0 10px' }}>{recipe.subtitle}</p>
                                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: '0 0 16px' }}>{recipe.description}</p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 13, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                        <span style={{ color: '#D97706', fontSize: 13, fontWeight: 700 }}>★ {recipe.rating}</span>
                                        <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>({recipe.reviews})</span>
                                    </div>
                                    <span style={{ fontSize: 12, fontWeight: 600, color: '#D97706' }}>View Recipe →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(255,255,255,0.25)' }}>
                        <div style={{ fontSize: 44, marginBottom: 12 }}>🍜</div>
                        <p>No recipes found for this filter.</p>
                    </div>
                )}
            </section>

            {/* ── EXPLORE MORE ── */}
            <section style={{ borderTop: '1px solid rgba(75,46,26,0.08)', padding: '64px 32px 88px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Vietnam Has More</span>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, color: '#2D1A0E', margin: '0 0 36px' }}>
                        Explore Other Regions
                    </h2>
                    <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                        {[
                            { label: 'Central Cuisine', sub: 'Thanh Hoa to Binh Thuan', Icon: Flame, href: '/recipes/central' },
                            { label: 'Southern Cuisine', sub: 'Ninh Thuan to Ca Mau', Icon: Palmtree, href: '/recipes/south' },
                            { label: 'Street Food', sub: 'on streets everywhere', Icon: Soup, href: '/recipes/street-food' },
                            { label: 'All Recipes', sub: 'Browse everything', Icon: BookOpen, href: '/recipes' },
                        ].map(({ label, sub, Icon, href }) => (
                            <Link key={href} href={href} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '24px 32px', borderRadius: 20, border: '1px solid rgba(75,46,26,0.1)', background: 'white', textDecoration: 'none', transition: 'all 0.22s', minWidth: 170 }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(217,119,6,0.4)'; el.style.background = '#FEF3E2'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 12px 32px rgba(217,119,6,0.12)'; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(75,46,26,0.1)'; el.style.background = 'white'; el.style.transform = 'none'; el.style.boxShadow = 'none'; }}
                            >
                                <Icon size={26} strokeWidth={1.6} color="#D97706" />
                                <span style={{ fontSize: 14, fontWeight: 700, color: '#2D1A0E' }}>{label}</span>
                                <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.5)', fontStyle: 'italic' }}>{sub}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
