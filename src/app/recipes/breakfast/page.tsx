'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const BREAKFAST_RECIPES = [
    {
        slug: 'pho-bo',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80',
        time: '3 hrs',
        difficulty: 'Medium',
        rating: '4.9',
        reviews: 248,
        region: 'Northern',
        cal: 420,
        description: 'Slow-simmered bone broth, silky noodles, paper-thin beef — the iconic Hanoi morning ritual.',
        isPopular: true,
    },
    {
        slug: 'banh-mi-trung',
        title: 'Egg Bánh Mì',
        subtitle: 'Bánh Mì Trứng Ốp La',
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
        time: '15 min',
        difficulty: 'Easy',
        rating: '4.7',
        reviews: 189,
        region: 'Southern',
        cal: 310,
        description: 'Crispy baguette with sunny-side-up egg, pâté, fresh herbs and a drizzle of Maggi — Saigon\'s 10-minute breakfast.',
        isPopular: false,
    },
    {
        slug: 'xoi-xeo',
        title: 'Mung Bean Sticky Rice',
        subtitle: 'Xôi Xéo',
        image: 'https://images.unsplash.com/photo-1536304993881-ff86e0c9e6a0?auto=format&fit=crop&w=800&q=80',
        time: '1 hr',
        difficulty: 'Easy',
        rating: '4.8',
        reviews: 134,
        region: 'Northern',
        cal: 380,
        description: 'Golden sticky rice topped with fried shallots and split mung bean — a beloved Hanoi street breakfast.',
        isPopular: true,
    },
    {
        slug: 'banh-cuon',
        title: 'Steamed Rice Rolls',
        subtitle: 'Bánh Cuốn',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
        time: '45 min',
        difficulty: 'Medium',
        rating: '4.8',
        reviews: 167,
        region: 'Northern',
        cal: 290,
        description: 'Silky steamed rice sheets filled with seasoned pork and wood ear mushrooms, served with nem chua and nuoc cham.',
        isPopular: true,
    },
    {
        slug: 'chao-long',
        title: 'Pork Congee',
        subtitle: 'Cháo Lòng',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
        time: '1.5 hrs',
        difficulty: 'Easy',
        rating: '4.6',
        reviews: 98,
        region: 'Southern',
        cal: 340,
        description: 'Silky rice porridge with pork offal, ginger, and fresh herbs — Saigon\'s ultimate comfort breakfast.',
        isPopular: false,
    },
    {
        slug: 'banh-trang-tron',
        title: 'Rice Paper Salad',
        subtitle: 'Bánh Tráng Trộn',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
        time: '20 min',
        difficulty: 'Easy',
        rating: '4.7',
        reviews: 212,
        region: 'Southern',
        cal: 220,
        description: 'Shredded rice paper tossed with quail eggs, dried shrimp, mango and a tangy-spicy dressing.',
        isPopular: false,
    },
]

const FILTERS = ['All', 'Easy', 'Medium', 'Hard']
const REGIONS_F = ['All Regions', 'Northern', 'Central', 'Southern']

const DIFF_COLOR: Record<string, string> = {
    Easy: '#10b981',
    Medium: '#f59e0b',
    Hard: '#ef4444',
}

export default function BreakfastPage() {
    const [diff, setDiff] = useState('All')
    const [region, setRegion] = useState('All Regions')

    const filtered = BREAKFAST_RECIPES.filter(r => {
        const dMatch = diff === 'All' || r.difficulty === diff
        const rMatch = region === 'All Regions' || r.region === region
        return dMatch && rMatch
    })

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,700;1,600;1,700&display=swap');

                .r-card {
                    background: white;
                    border-radius: 22px;
                    overflow: hidden;
                    border: 1px solid rgba(75,46,26,0.07);
                    text-decoration: none;
                    display: block;
                    transition: transform 0.32s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.2s;
                }
                .r-card:hover {
                    transform: translateY(-7px);
                    box-shadow: 0 28px 60px rgba(75,46,26,0.12);
                    border-color: rgba(217,119,6,0.22);
                }
                .r-card:hover .r-img { transform: scale(1.08); }
                .r-img { transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94); }
                .pill-btn {
                    border: 1.5px solid rgba(75,46,26,0.12);
                    border-radius: 100px;
                    padding: 7px 18px;
                    font-size: 13px;
                    font-weight: 500;
                    color: rgba(75,46,26,0.55);
                    background: transparent;
                    cursor: pointer;
                    transition: all 0.18s;
                    white-space: nowrap;
                    font-family: inherit;
                }
                .pill-btn:hover { color: #D97706; border-color: rgba(217,119,6,0.35); }
                .pill-btn.on { background: #4B2E1A; color: white; border-color: #4B2E1A; }
                .hero-wave {
                    position: absolute; bottom: -1px; left: 0; right: 0;
                }
            `}</style>

            {/* ── HERO ── */}
            <section style={{ position: 'relative', background: 'linear-gradient(135deg, #FEF3E2 0%, #FDEAC8 60%, #FBD99A 100%)', paddingTop: 120, paddingBottom: 80, overflow: 'hidden' }}>
                {/* Decorative blobs */}
                <div style={{ position: 'absolute', top: 60, right: '8%', width: 260, height: 260, borderRadius: '50%', background: 'rgba(217,119,6,0.08)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: 40, left: '3%', width: 160, height: 160, borderRadius: '50%', background: 'rgba(217,119,6,0.06)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
                    {/* Breadcrumb */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontSize: 13, color: 'rgba(75,46,26,0.5)' }}>
                        <Link href="/" style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
                        <span>›</span>
                        <Link href="/recipes" style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none', fontWeight: 500 }}>Recipes</Link>
                        <span>›</span>
                        <span style={{ color: '#D97706', fontWeight: 600 }}>Breakfast</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(217,119,6,0.12)', borderRadius: 100, padding: '6px 16px', marginBottom: 18 }}>
                                <span style={{ fontSize: 16 }}>🌅</span>
                                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#92580A' }}>Morning Recipes</span>
                            </div>
                            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 700, color: '#2D1A0E', margin: 0, lineHeight: 1.05 }}>
                                Vietnamese<br />
                                <span style={{ color: '#D97706', fontStyle: 'italic' }}>Breakfast</span>
                            </h1>
                            <p style={{ color: 'rgba(75,46,26,0.6)', fontSize: 17, maxWidth: 460, lineHeight: 1.7, margin: '16px 0 32px' }}>
                                Start your day the Vietnamese way — from steaming bowls of phở to crispy bánh mì, these are the morning meals that fuel a nation.
                            </p>

                            {/* Stats */}
                            <div style={{ display: 'flex', gap: 28 }}>
                                {[['🍜', `${BREAKFAST_RECIPES.length}`, 'Recipes'], ['⏱', '15 min', 'Quickest'], ['⭐', '4.8', 'Avg Rating']].map(([icon, val, lbl]) => (
                                    <div key={lbl} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <span style={{ fontSize: 13 }}>{icon}</span>
                                        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#2D1A0E', lineHeight: 1 }}>{val}</span>
                                        <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.45)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{lbl}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hero image collage */}
                        <div style={{ display: 'grid', gridTemplateColumns: '120px 120px', gridTemplateRows: '120px 120px', gap: 10, flexShrink: 0 }} className="hidden sm:grid">
                            {BREAKFAST_RECIPES.slice(0, 4).map((r, i) => (
                                <div key={r.slug} style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', gridRow: i === 0 ? '1 / span 2' : 'auto', gridColumn: i === 0 ? '1' : '2' }}>
                                    <Image src={r.image} alt={r.title} fill style={{ objectFit: 'cover' }} sizes="130px" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Wave */}
                <svg className="hero-wave" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40Z" fill="#FAFAF7" />
                </svg>
            </section>

            {/* ── FILTER BAR ── */}
            <div style={{ position: 'sticky', top: 72, zIndex: 40, background: 'rgba(250,250,247,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(75,46,26,0.07)', padding: '12px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 8, overflowX: 'auto', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(75,46,26,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0, marginRight: 4 }}>Difficulty</span>
                    {FILTERS.map(f => (
                        <button key={f} onClick={() => setDiff(f)} className={`pill-btn ${diff === f ? 'on' : ''}`}>{f}</button>
                    ))}
                    <div style={{ width: 1, height: 22, background: 'rgba(75,46,26,0.1)', margin: '0 6px', flexShrink: 0 }} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(75,46,26,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0, marginRight: 4 }}>Region</span>
                    {REGIONS_F.map(r => (
                        <button key={r} onClick={() => setRegion(r)} className={`pill-btn ${region === r ? 'on' : ''}`}>{r}</button>
                    ))}
                </div>
            </div>

            {/* ── GRID ── */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '44px 24px 88px' }}>
                <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.38)', marginBottom: 28, fontWeight: 500 }}>
                    Showing {filtered.length} breakfast recipes
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
                    {filtered.map(recipe => (
                        <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} className="r-card">
                            {/* Image */}
                            <div style={{ position: 'relative', height: 210, overflow: 'hidden', background: '#f0ebe4' }}>
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    fill
                                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                                    className="r-img"
                                    style={{ objectFit: 'cover' }}
                                    quality={80}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)' }} />

                                {/* Popular badge */}
                                {recipe.isPopular && (
                                    <div style={{ position: 'absolute', top: 14, left: 14, background: '#D97706', color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100 }}>
                                        Popular
                                    </div>
                                )}

                                <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.38)', backdropFilter: 'blur(6px)', color: 'white', fontSize: 11, fontWeight: 500, padding: '5px 11px', borderRadius: 100 }}>
                                    ⏱ {recipe.time}
                                </div>

                                {/* Difficulty */}
                                <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 5 }}>
                                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: DIFF_COLOR[recipe.difficulty] }} />
                                    <span style={{ color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>{recipe.difficulty}</span>
                                </div>

                                {/* Cal */}
                                <div style={{ position: 'absolute', bottom: 14, right: 14, background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(6px)', color: 'rgba(255,255,255,0.85)', fontSize: 10, fontWeight: 600, padding: '4px 10px', borderRadius: 100 }}>
                                    {recipe.cal} kcal
                                </div>
                            </div>

                            {/* Card body */}
                            <div style={{ padding: '18px 20px 20px' }}>
                                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#D97706', textTransform: 'uppercase', marginBottom: 6 }}>
                                    {recipe.region} Vietnam
                                </div>
                                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#2D1A0E', margin: 0, marginBottom: 2, lineHeight: 1.2 }}>
                                    {recipe.title}
                                </h2>
                                <p style={{ fontSize: 12, color: 'rgba(75,46,26,0.38)', fontStyle: 'italic', margin: '0 0 10px' }}>
                                    {recipe.subtitle}
                                </p>
                                <p style={{ fontSize: 13.5, color: 'rgba(75,46,26,0.6)', lineHeight: 1.65, margin: '0 0 16px' }}>
                                    {recipe.description}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 13, borderTop: '1px solid rgba(75,46,26,0.06)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                        <span style={{ color: '#D97706', fontSize: 13, fontWeight: 700 }}>★ {recipe.rating}</span>
                                        <span style={{ color: 'rgba(75,46,26,0.32)', fontSize: 12 }}>({recipe.reviews})</span>
                                    </div>
                                    <span style={{ fontSize: 12, fontWeight: 600, color: '#D97706' }}>
                                        View Recipe →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(75,46,26,0.38)' }}>
                        <div style={{ fontSize: 44, marginBottom: 12 }}>🌅</div>
                        <p style={{ fontSize: 16 }}>No recipes found for this filter.</p>
                    </div>
                )}

                {/* More categories */}
                <div style={{ marginTop: 72, padding: '40px', background: 'white', borderRadius: 24, border: '1px solid rgba(75,46,26,0.07)', textAlign: 'center' }}>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(75,46,26,0.38)', textTransform: 'uppercase', marginBottom: 10 }}>Explore More</p>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#2D1A0E', margin: '0 0 24px' }}>
                        Other Categories
                    </h3>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                        {[
                            { label: 'Main Dishes', emoji: '🍖', href: '/recipes/main-dishes' },
                            { label: 'Street Food', emoji: '🥢', href: '/recipes/street-food' },
                            { label: 'Desserts', emoji: '🍮', href: '/recipes/desserts' },
                            { label: 'Drinks', emoji: '🧋', href: '/recipes/drinks' },
                        ].map(cat => (
                            <Link key={cat.href} href={cat.href} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 22px', borderRadius: 100, border: '1.5px solid rgba(75,46,26,0.1)', color: 'rgba(75,46,26,0.65)', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'all 0.18s' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#D97706'; (e.currentTarget as HTMLAnchorElement).style.color = '#D97706'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(75,46,26,0.1)'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(75,46,26,0.65)'; }}
                            >
                                <span style={{ fontSize: 18 }}>{cat.emoji}</span>
                                {cat.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}