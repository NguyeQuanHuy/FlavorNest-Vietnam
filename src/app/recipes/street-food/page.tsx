'use client'

/**
 * FlavorNest Vietnam — Street Food Page
 * src/app/recipes/street-food/page.tsx
 */

import Image from 'next/image'
import Link from 'next/link'
import CategoryHero from '@/components/CategoryHero'
import { useState, useMemo, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FavoriteButton from '@/components/FavoriteButton'
import { Utensils, Clock, Globe, Star, Castle, Palmtree, Soup, IceCream, Map, BookOpen } from 'lucide-react'

interface Recipe {
    slug: string
    title: string
    subtitle: string
    image: string
    region: 'Northern' | 'Central' | 'Southern'
    difficulty: 'Easy' | 'Medium' | 'Hard'
    time: string
    rating: string
    reviews: number
    cal: number
    tag: string
    tagColor: string
    description: string
    tags: string[]
    isNew?: boolean
}

const RECIPES: Recipe[] = [
    {
        slug: 'banh-mi-thit-nuong',
        title: 'Grilled Pork Bánh Mì',
        subtitle: 'Banh mi thit nuong',
        image: '/images/recipes/banh-mi-thit-nuong.jpg',
        region: 'Southern', difficulty: 'Easy', time: '40 min',
        rating: '4.9', reviews: 341, cal: 420, tag: 'World Famous', tagColor: '#D97706',
        description: "The sandwich that conquered the world from a Saigon sidewalk. Shatteringly crisp baguette, smoky lemongrass pork, silky pâté, pickled daikon, fresh cucumber and coriander. Twenty thousand đồng. Extraordinary.",
        tags: ['Pork', 'Baguette', 'Street Icon', 'Quick'],
    },
    {
        slug: 'bun-thit-nuong',
        title: 'Grilled Pork Vermicelli Bowl',
        subtitle: 'Bun thit nuong',
        image: '/images/recipes/bun-thit-nuong.jpg',
        region: 'Southern', difficulty: 'Easy', time: '35 min',
        rating: '4.8', reviews: 224, cal: 390, tag: "Saigon Lunch", tagColor: '#059669',
        description: "Cold vermicelli noodles piled with chargrilled pork skewers, a crispy spring roll, crushed peanuts, fresh mint and a flood of nuoc cham. Room temperature, casual, brilliant — the definitive Saigon lunch.",
        tags: ['Pork', 'Noodles', 'No-Heat', 'Peanuts'],
    },
    {
        slug: 'banh-trang-nuong',
        title: 'Grilled Rice Paper Pizza',
        subtitle: 'Banh trang nuong',
        image: '/images/recipes/banh-trang-nuong.jpg',
        region: 'Central', difficulty: 'Easy', time: '20 min',
        rating: '4.7', reviews: 187, cal: 280, tag: 'Da Lat Classic', tagColor: '#7C3AED',
        description: "Born in the misty highlands of Đà Lạt — a crispy rice paper base grilled over charcoal, topped with egg, spring onion, dried shrimp and chilli sauce. Vietnam's answer to pizza, and arguably better.",
        tags: ['Rice Paper', 'Egg', 'Vegetarian-Friendly', 'Snack'],
    },
    {
        slug: 'goi-cuon',
        title: 'Fresh Rice Paper Rolls',
        subtitle: 'Goi cuon tom thit',
        image: '/images/recipes/goi-cuon-tom-thit.jpg',
        region: 'Southern', difficulty: 'Easy', time: '30 min',
        rating: '4.8', reviews: 298, cal: 220, tag: 'Light & Fresh', tagColor: '#0284C7',
        description: "Translucent rice paper wrapped around plump prawns, pork, rice vermicelli, lettuce and a tangle of fresh herbs. Dipped in hoisin-peanut sauce — clean, light and refreshing in the Saigon heat.",
        tags: ['Shrimp', 'No-Cook', 'Healthy', 'Herbs'],
    },
    {
        slug: 'banh-xeo',
        title: 'Sizzling Savoury Crêpe',
        subtitle: 'Banh xeo',
        image: '/images/recipes/banh-xeo-1.jpg',
        region: 'Southern', difficulty: 'Medium', time: '45 min',
        rating: '4.9', reviews: 263, cal: 380, tag: 'Must Try', tagColor: '#D97706',
        description: "Named for the sound it makes when batter hits a hot wok — a giant turmeric-yellow crêpe, crispy-edged and stuffed with shrimp, pork and bean sprouts. Broken apart by hand, wrapped in mustard leaf and dunked into nuoc cham.",
        tags: ['Shrimp', 'Pork', 'Crispy', 'Herbs'],
    },
    {
        slug: 'com-tam',
        title: 'Saigon Broken Rice Plate',
        subtitle: 'Com tam Sai Gon',
        image: '/images/recipes/com-tam.jpg',
        region: 'Southern', difficulty: 'Easy', time: '35 min',
        rating: '4.9', reviews: 312, cal: 510, tag: "Saigon Staple", tagColor: '#EA580C',
        description: "Saigon's most beloved breakfast — a plate of broken rice (the imperfect grains that were once considered a poor man's food) topped with a char-grilled pork chop, fried egg, steamed pork cake, and scallion oil.",
        tags: ['Pork', 'Rice', 'Breakfast', 'Classic'],
    },
    {
        slug: 'banh-cuon',
        title: 'Steamed Rice Rolls',
        subtitle: 'Banh cuon',
        image: '/images/recipes/banh-cuon.jpg',
        region: 'Northern', difficulty: 'Medium', time: '50 min',
        rating: '4.8', reviews: 176, cal: 290, tag: 'Hanoi Morning', tagColor: '#BE185D',
        description: "Paper-thin sheets of steamed rice batter rolled around a filling of seasoned minced pork and wood ear mushrooms. Served with fried shallots, sliced Vietnamese ham, bean sprouts and a light dipping broth.",
        tags: ['Pork', 'Steamed', 'Delicate', 'Morning'],
    },
    {
        slug: 'bun-dau-mam-tom',
        title: 'Rice Vermicelli with Shrimp Paste',
        subtitle: 'Bun dau mam tom',
        isNew: true,
        image: '/images/recipes/bun-dau-mam-tom.jpg',
        region: 'Northern', difficulty: 'Easy', time: '25 min',
        rating: '4.6', reviews: 143, cal: 410, tag: 'Adventurous Eat', tagColor: '#166534',
        description: "Hanoi's most polarising dish — and one of its greatest. Fried tofu, boiled pork, crispy rice cakes and vermicelli, all brought together by a bold fermented shrimp paste dip spiked with lime and chilli. Deeply addictive.",
        tags: ['Tofu', 'Pork', 'Fermented', 'Bold'],
    },
]

const FILTERS = ['All', 'Easy', 'Medium', 'Hard']
const REGIONS = ['All Regions', 'Northern', 'Central', 'Southern']
const DIFF_COLOR: Record<string, string> = { Easy: '#10b981', Medium: '#f59e0b', Hard: '#ef4444' }
const LS_KEY = 'fn_favorites'

function loadFavSlugs(): Set<string> {
    try {
        const raw = localStorage.getItem(LS_KEY)
        if (!raw) return new Set()
        const arr = JSON.parse(raw)
        return new Set(arr.map((x: string | { slug: string }) => typeof x === 'string' ? x : x.slug))
    } catch { return new Set() }
}

function saveFav(recipe: Recipe, add: boolean) {
    try {
        const raw = localStorage.getItem(LS_KEY)
        let arr: object[] = raw ? JSON.parse(raw) : []
        if (add) {
            if (!arr.some((x: object) => (x as { slug: string }).slug === recipe.slug)) {
                arr.push({ slug: recipe.slug, title: recipe.title, subtitle: recipe.subtitle, image: recipe.image, cookcookTime: recipe.time, difficulty: recipe.difficulty, category: 'MAIN COURSE', savedAt: new Date().toISOString().split('T')[0] })
        }
    } else {
        arr = arr.filter((x: object) => (x as { slug: string }).slug !== recipe.slug)
    }
    localStorage.setItem(LS_KEY, JSON.stringify(arr))
} catch { }
}


export default function StreetFoodPage() {
    const [diff, setDiff] = useState('All')
    const [region, setRegion] = useState('All Regions')
    const filtered = useMemo(() => RECIPES.filter(r => (diff === 'All' || r.difficulty === diff) && (region === 'All Regions' || r.region === region)), [diff, region])

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                * { box-sizing: border-box; }
                .r-card { background: white; border-radius: 4px; overflow: hidden; border: 1px solid rgba(75,46,26,0.07); text-decoration: none; display: block; transition: box-shadow 0.2s, border-color 0.2s; }
                .r-card:hover { box-shadow: 0 8px 24px rgba(75,46,26,0.10); border-color: rgba(217,119,6,0.2); }
                .r-card:hover .r-img { transform: scale(1.07); }
                .r-img { transition: transform 0.55s ease; }
                .pill { border: 1.5px solid rgba(75,46,26,0.12); border-radius: 100px; padding: 7px 18px; font-size: 13px; font-weight: 500; color: rgba(75,46,26,0.55); background: transparent; cursor: pointer; transition: all 0.18s; white-space: nowrap; font-family: inherit; }
                .pill:hover { color: #D97706; border-color: rgba(217,119,6,0.38); }
                .pill.on { background: #4B2E1A; color: white; border-color: #4B2E1A; }
                .tag { font-size: 10px; font-weight: 600; color: rgba(75,46,26,0.45); background: rgba(75,46,26,0.05); padding: 3px 9px; border-radius: 6px; }
            `}</style>

            <CategoryHero crumb="Street Food" accent="Street Food"
                intro="Sizzling bánh xèo, grilled skewers and sidewalk snacks — the food Vietnam eats on tiny plastic stools."
                stats={[{ value: RECIPES.length, label: 'recipes' }, { prefix: 'from', value: '20 min', label: '' }, { value: 3, label: 'regions' }]} />

            {/* FILTER BAR */}
            <div className="cat-filter" style={{ position: 'sticky', zIndex: 40, background: 'rgba(250,250,247,0.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(75,46,26,0.07)', padding: '12px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 8, overflowX: 'auto', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(75,46,26,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>Difficulty</span>
                    {FILTERS.map(f => <button key={f} onClick={() => setDiff(f)} className={`pill ${diff === f ? 'on' : ''}`}>{f}</button>)}
                    <div style={{ width: 1, height: 22, background: 'rgba(75,46,26,0.1)', margin: '0 6px', flexShrink: 0 }} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(75,46,26,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>Region</span>
                    {REGIONS.map(r => <button key={r} onClick={() => setRegion(r)} className={`pill ${region === r ? 'on' : ''}`}>{r}</button>)}
                    <span style={{ marginLeft: 'auto', fontSize: 13, color: 'rgba(75,46,26,0.38)', flexShrink: 0, fontWeight: 500 }}>{filtered.length} recipes</span>
                </div>
            </div>

            {/* GRID */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 96px' }}>
                <AnimatePresence mode="wait">
                    <motion.div key={`${diff}-${region}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                        className="cat-grid">
                        {filtered.map((recipe, i) => (
                            <motion.div key={recipe.slug} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
                                <Link href={`/recipes/${recipe.slug}`} className="ed-card">
                                    <div className="ed-photo">
                                        <Image src={recipe.image} alt={`${recipe.title} — ${recipe.subtitle}`} fill style={{ objectFit: 'cover' }} sizes="(max-width:640px) 50vw,(max-width:1024px) 50vw,33vw" quality={80} />
                                        <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}>
                                        <FavoriteButton recipe={{
                                        id: recipe.slug,
                                        slug: recipe.slug,
                                        title: recipe.title,
                                        subtitle: recipe.subtitle,
                                        image: recipe.image,
                                        cookTime: recipe.time,
                                        difficulty: recipe.difficulty,
                                        category: 'MAIN COURSE',
                                        }} />
                                        </div>
                                    </div>
                                    <div className="ed-kicker">{recipe.isNew ? <>New · {recipe.tag}</> : recipe.tag}</div>
                                    <h2 className="ed-title">{recipe.title}</h2>
                                    <p className="ed-vi">{recipe.subtitle}</p>
                                    <div className="ed-meta">
                                        <span className="ed-hide-sm">{recipe.region}</span>
                                        <span className="ed-dot ed-hide-sm" aria-hidden />
                                        <span>{recipe.difficulty}</span>
                                        <span className="ed-dot" aria-hidden />
                                        <span>{recipe.time}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(75,46,26,0.38)' }}>
                        <div style={{ fontSize: 44, marginBottom: 12 }}>🥢</div>
                        <p style={{ fontSize: 16, fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>No recipes match this filter.</p>
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
                            { label: 'Northern Cuisine', sub: 'Hanoi & The North', Icon: Castle, href: '/recipes/north' },
                            { label: 'Southern Cuisine', sub: 'Saigon & The Mekong', Icon: Palmtree, href: '/recipes/south' },
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
