'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import type { Metadata } from 'next'

const RECIPES = [
    {
        slug: 'hanoi-beef-pho',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80',
        category: 'Soup',
        region: 'Northern',
        difficulty: 'Medium',
        time: '3 hrs',
        rating: '4.9',
        reviews: 248,
        description: 'The soul of Hanoi in a bowl — slow-simmered bone broth, silky rice noodles, and paper-thin beef.',
        tags: ['Beef', 'Noodles', 'Slow Cook'],
    },
    {
        slug: 'banh-mi',
        title: 'Lemongrass Pork Bánh Mì',
        subtitle: 'Bánh Mì Thịt Nướng',
        image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80',
        category: 'Street Food',
        region: 'Southern',
        difficulty: 'Easy',
        time: '40 min',
        rating: '4.8',
        reviews: 183,
        description: 'Crusty baguette loaded with smoky lemongrass pork, pickled daikon, and fresh herbs.',
        tags: ['Pork', 'Sandwich', 'Quick'],
    },
    {
        slug: 'bun-cha-hanoi',
        title: 'Hanoi Grilled Pork Vermicelli',
        subtitle: 'Bún Chả Hà Nội',
        image: 'https://images.unsplash.com/photo-1623682785702-f0c9fcfe2fc0?auto=format&fit=crop&w=800&q=80',
        category: 'Noodles',
        region: 'Northern',
        difficulty: 'Easy',
        time: '45 min',
        rating: '4.7',
        reviews: 142,
        description: 'Chargrilled pork patties in a sweet-savory dipping broth with fresh vermicelli and herbs.',
        tags: ['Pork', 'Grilled', 'Noodles'],
    },
    {
        slug: 'fresh-spring-rolls',
        title: 'Fresh Spring Rolls',
        subtitle: 'Gỏi Cuốn Tôm Thịt',
        image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=800&q=80',
        category: 'Rolls',
        region: 'Southern',
        difficulty: 'Easy',
        time: '30 min',
        rating: '4.8',
        reviews: 196,
        description: 'Light, fresh, and vibrant — shrimp and pork wrapped in rice paper with peanut dipping sauce.',
        tags: ['Shrimp', 'No Cook', 'Healthy'],
    },
    {
        slug: 'com-tam',
        title: 'Saigon Broken Rice Plate',
        subtitle: 'Cơm Tấm Sài Gòn',
        image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80',
        category: 'Rice',
        region: 'Southern',
        difficulty: 'Easy',
        time: '35 min',
        rating: '4.9',
        reviews: 271,
        description: 'Saigon\'s iconic street breakfast — grilled pork chop over broken rice with scallion oil and nước chấm.',
        tags: ['Pork', 'Rice', 'Classic'],
    },
    {
        slug: 'bun-bo-hue',
        title: 'Hue Spicy Beef Noodle',
        subtitle: 'Bún Bò Huế',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
        category: 'Soup',
        region: 'Central',
        difficulty: 'Hard',
        time: '2.5 hrs',
        rating: '4.9',
        reviews: 164,
        description: 'Bold, spicy, and deeply aromatic — the royal noodle soup of Hue with lemongrass-infused broth.',
        tags: ['Beef', 'Spicy', 'Slow Cook'],
    },
]

const CATEGORIES = ['All', 'Soup', 'Noodles', 'Rice', 'Street Food', 'Rolls']
const REGIONS = ['All Regions', 'Northern', 'Central', 'Southern']

const DIFF_COLOR: Record<string, string> = {
    Easy: '#10b981',
    Medium: '#f59e0b',
    Hard: '#ef4444',
}

export default function RecipesPage() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [activeRegion, setActiveRegion] = useState('All Regions')
    const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)

    const filtered = RECIPES.filter(r => {
        const catMatch = activeCategory === 'All' || r.category === activeCategory
        const regionMatch = activeRegion === 'All Regions' || r.region === activeRegion
        return catMatch && regionMatch
    })

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');

                .recipe-card {
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    border: 1px solid rgba(75,46,26,0.07);
                    transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
                    cursor: pointer;
                    text-decoration: none;
                    display: block;
                }
                .recipe-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 24px 60px rgba(75,46,26,0.13);
                    border-color: rgba(217,119,6,0.2);
                }
                .recipe-img {
                    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                .recipe-card:hover .recipe-img {
                    transform: scale(1.07);
                }
                .filter-pill {
                    border: 1.5px solid rgba(75,46,26,0.12);
                    border-radius: 100px;
                    padding: 7px 18px;
                    font-size: 13px;
                    font-weight: 500;
                    color: rgba(75,46,26,0.55);
                    background: transparent;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                    font-family: inherit;
                }
                .filter-pill:hover {
                    color: #D97706;
                    border-color: rgba(217,119,6,0.4);
                    background: rgba(217,119,6,0.04);
                }
                .filter-pill.active {
                    background: #4B2E1A;
                    color: white;
                    border-color: #4B2E1A;
                }
                .tag-chip {
                    font-size: 10px;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    color: rgba(75,46,26,0.45);
                    background: rgba(75,46,26,0.05);
                    padding: 3px 9px;
                    border-radius: 6px;
                }
                .hero-accent {
                    background: linear-gradient(135deg, #FEF3E2 0%, #FDE8C5 100%);
                }
            `}</style>

            {/* Hero */}
            <section className="hero-accent" style={{ paddingTop: 120, paddingBottom: 64, paddingLeft: 20, paddingRight: 20 }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                        <div style={{ width: 32, height: 1.5, background: '#D97706' }} />
                        <span style={{ color: '#D97706', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                            FlavorNest Vietnam
                        </span>
                    </div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 700, color: '#2D1A0E', lineHeight: 1.05, margin: 0, marginBottom: 16 }}>
                        Explore All<br />
                        <span style={{ color: '#D97706', fontStyle: 'italic' }}>Recipes</span>
                    </h1>
                    <p style={{ color: 'rgba(75,46,26,0.6)', fontSize: 17, maxWidth: 480, lineHeight: 1.65, margin: 0 }}>
                        100+ authentic Vietnamese recipes — from Hanoi's misty mornings to Saigon's vibrant street corners.
                    </p>

                    {/* Stats row */}
                    <div style={{ display: 'flex', gap: 32, marginTop: 36 }}>
                        {[['100+', 'Recipes'], ['3', 'Regions'], ['4.8★', 'Avg Rating']].map(([num, label]) => (
                            <div key={label}>
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#2D1A0E' }}>{num}</div>
                                <div style={{ fontSize: 12, color: 'rgba(75,46,26,0.5)', fontWeight: 500, letterSpacing: '0.05em' }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filter bar */}
            <div style={{ position: 'sticky', top: 72, zIndex: 40, background: 'rgba(250,250,247,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(75,46,26,0.07)', padding: '12px 20px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 2, alignItems: 'center', flexWrap: 'nowrap' }}>
                    {CATEGORIES.map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)} className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}>
                            {cat}
                        </button>
                    ))}
                    <div style={{ width: 1, height: 24, background: 'rgba(75,46,26,0.12)', margin: '0 4px', flexShrink: 0 }} />
                    {REGIONS.map(r => (
                        <button key={r} onClick={() => setActiveRegion(r)} className={`filter-pill ${activeRegion === r ? 'active' : ''}`}>
                            {r}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 20px 80px' }}>
                <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.4)', marginBottom: 28, fontWeight: 500 }}>
                    {filtered.length} recipes found
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
                    {filtered.map((recipe, i) => (
                        <Link
                            key={recipe.slug}
                            href={`/recipes/${recipe.slug}`}
                            className="recipe-card"
                            onMouseEnter={() => setHoveredSlug(recipe.slug)}
                            onMouseLeave={() => setHoveredSlug(null)}
                        >
                            {/* Image */}
                            <div style={{ position: 'relative', height: 220, overflow: 'hidden', background: '#f0ebe4' }}>
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    fill
                                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                                    className="recipe-img"
                                    style={{ objectFit: 'cover' }}
                                    quality={80}
                                />
                                {/* Overlay */}
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)', opacity: hoveredSlug === recipe.slug ? 1 : 0, transition: 'opacity 0.3s ease' }} />

                                {/* Top badges */}
                                <div style={{ position: 'absolute', top: 14, left: 14, right: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <span style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', color: '#4B2E1A', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100 }}>
                                        {recipe.category}
                                    </span>
                                    <span style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', color: 'white', fontSize: 11, fontWeight: 500, padding: '5px 11px', borderRadius: 100 }}>
                                        ⏱ {recipe.time}
                                    </span>
                                </div>

                                {/* Difficulty dot */}
                                <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: DIFF_COLOR[recipe.difficulty] }} />
                                    <span style={{ color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{recipe.difficulty}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '18px 20px 20px' }}>
                                {/* Region label */}
                                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#D97706', textTransform: 'uppercase', marginBottom: 6 }}>
                                    {recipe.region} Vietnam
                                </div>

                                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#2D1A0E', margin: 0, marginBottom: 2, lineHeight: 1.2 }}>
                                    {recipe.title}
                                </h2>
                                <p style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)', fontStyle: 'italic', margin: 0, marginBottom: 10 }}>
                                    {recipe.subtitle}
                                </p>
                                <p style={{ fontSize: 13.5, color: 'rgba(75,46,26,0.62)', lineHeight: 1.6, margin: 0, marginBottom: 16 }}>
                                    {recipe.description}
                                </p>

                                {/* Tags */}
                                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
                                    {recipe.tags.map(tag => (
                                        <span key={tag} className="tag-chip">{tag}</span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid rgba(75,46,26,0.07)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                        <span style={{ color: '#D97706', fontSize: 13, fontWeight: 700 }}>★ {recipe.rating}</span>
                                        <span style={{ color: 'rgba(75,46,26,0.35)', fontSize: 12 }}>({recipe.reviews})</span>
                                    </div>
                                    <span style={{ fontSize: 12, fontWeight: 600, color: '#D97706', display: 'flex', alignItems: 'center', gap: 4 }}>
                                        View Recipe →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '80px 20px', color: 'rgba(75,46,26,0.4)' }}>
                        <div style={{ fontSize: 40, marginBottom: 12 }}>🍜</div>
                        <p style={{ fontSize: 16 }}>No recipes found for this filter.</p>
                    </div>
                )}
            </section>
        </main>
    )
}