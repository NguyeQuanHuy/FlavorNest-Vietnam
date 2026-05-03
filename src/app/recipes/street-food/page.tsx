'use client'

/**
 * FlavorNest Vietnam — Street Food Page
 * src/app/recipes/street-food/page.tsx
 */

import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
                arr.push({ slug: recipe.slug, title: recipe.title, subtitle: recipe.subtitle, image: recipe.image, time: recipe.time, difficulty: recipe.difficulty, category: 'Street Food', savedAt: new Date().toISOString().split('T')[0] })
            }
        } else {
            arr = arr.filter((x: object) => (x as { slug: string }).slug !== recipe.slug)
        }
        localStorage.setItem(LS_KEY, JSON.stringify(arr))
    } catch { }
}

function HeartBtn({ recipe }: { recipe: Recipe }) {
    const [liked, setLiked] = useState(false)
    const [burst, setBurst] = useState(false)
    const [toast, setToast] = useState<'added' | 'removed' | null>(null)
    useEffect(() => { setLiked(loadFavSlugs().has(recipe.slug)) }, [recipe.slug])
    const toggle = useCallback((e: React.MouseEvent) => {
        e.preventDefault(); e.stopPropagation()
        const next = !liked; setLiked(next); saveFav(recipe, next)
        if (next) setBurst(true)
        setToast(next ? 'added' : 'removed')
        setTimeout(() => setBurst(false), 600)
        setTimeout(() => setToast(null), 2000)
    }, [liked, recipe])
    return (
        <div style={{ position: 'absolute', bottom: 14, right: 14 }}>
            <AnimatePresence>
                {toast && (
                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        style={{ position: 'absolute', bottom: 44, right: 0, background: liked ? '#4B2E1A' : 'rgba(75,46,26,0.75)', color: 'white', fontSize: 11, fontWeight: 600, padding: '5px 12px', borderRadius: 100, whiteSpace: 'nowrap', pointerEvents: 'none' }}>
                        {toast === 'added' ? '♥ Saved' : '✕ Removed'}
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button onClick={toggle} whileTap={{ scale: 0.82 }} aria-label={liked ? 'Remove from favorites' : 'Save recipe'}
                style={{ width: 36, height: 36, borderRadius: '50%', background: liked ? 'rgba(220,38,38,0.92)' : 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', border: liked ? 'none' : '1px solid rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: liked ? '0 4px 16px rgba(220,38,38,0.35)' : '0 2px 8px rgba(0,0,0,0.15)', transition: 'background 0.25s', position: 'relative', overflow: 'hidden' }}>
                {burst && <motion.span initial={{ scale: 0.6, opacity: 0.8 }} animate={{ scale: 2.2, opacity: 0 }} transition={{ duration: 0.5 }} style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(220,38,38,0.3)', pointerEvents: 'none' }} />}
                <motion.svg width="16" height="16" viewBox="0 0 24 24" animate={burst ? { scale: [1, 1.35, 1] } : { scale: 1 }} transition={{ duration: 0.35 }}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={liked ? 'white' : 'none'} stroke={liked ? 'none' : 'rgba(75,46,26,0.5)'} strokeWidth="1.8" strokeLinecap="round" />
                </motion.svg>
            </motion.button>
        </div>
    )
}

export default function StreetFoodPage() {
    const [diff, setDiff] = useState('All')
    const [region, setRegion] = useState('All Regions')
    const filtered = useMemo(() => RECIPES.filter(r => (diff === 'All' || r.difficulty === diff) && (region === 'All Regions' || r.region === region)), [diff, region])

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,700;0,800;1,600;1,700&display=swap');
                * { box-sizing: border-box; }
                .r-card { background: white; border-radius: 24px; overflow: hidden; border: 1px solid rgba(75,46,26,0.07); text-decoration: none; display: block; transition: transform 0.33s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s, border-color 0.2s; }
                .r-card:hover { transform: translateY(-7px); box-shadow: 0 28px 60px rgba(75,46,26,0.13); border-color: rgba(217,119,6,0.22); }
                .r-card:hover .r-img { transform: scale(1.07); }
                .r-img { transition: transform 0.55s ease; }
                .pill { border: 1.5px solid rgba(75,46,26,0.12); border-radius: 100px; padding: 7px 18px; font-size: 13px; font-weight: 500; color: rgba(75,46,26,0.55); background: transparent; cursor: pointer; transition: all 0.18s; white-space: nowrap; font-family: inherit; }
                .pill:hover { color: #D97706; border-color: rgba(217,119,6,0.38); }
                .pill.on { background: #4B2E1A; color: white; border-color: #4B2E1A; }
                .tag { font-size: 10px; font-weight: 600; color: rgba(75,46,26,0.45); background: rgba(75,46,26,0.05); padding: 3px 9px; border-radius: 6px; }
            `}</style>

            {/* ── HERO ── */}
            <section style={{ background: 'linear-gradient(135deg, #FEF3E2 0%, #FDEAC8 55%, #F5EDE3 100%)', padding: '88px 24px 48px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 40, right: '6%', width: 280, height: 280, borderRadius: '50%', background: 'rgba(217,119,6,0.07)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    {/* Breadcrumb */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 24 }}>
                        {[['Home', '/'], ['Recipes', '/recipes'], ['Street Food', '']].map(([label, href], i) => (
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
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Sidewalk Classics</span>
                    </div>

                    {/* Title */}
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: '#2D1A0E', margin: '0 0 18px', lineHeight: 1.0 }}>
                        Vietnamese<br /><span style={{ color: '#D97706', fontStyle: 'italic' }}>Street Food</span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{ color: 'rgba(75,46,26,0.62)', fontSize: 17, maxWidth: 500, lineHeight: 1.75, margin: '0 0 36px' }}>
                        The best food in Vietnam has never been served in restaurants. It lives on plastic stools, steaming carts, and narrow laneways where the recipes are older than the buildings around them.
                    </p>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                        {[
                            { Icon: Utensils, val: `${RECIPES.length}`, lbl: 'Recipes' },
                            { Icon: Clock, val: '20 min', lbl: 'Quickest' },
                            { Icon: Globe, val: '3', lbl: 'Regions' },
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

            {/* FILTER BAR */}
            <div style={{ position: 'sticky', top: 72, zIndex: 40, background: 'rgba(250,250,247,0.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(75,46,26,0.07)', padding: '12px 24px' }}>
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
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: 24 }}>
                        {filtered.map((recipe, i) => (
                            <motion.div key={recipe.slug} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
                                <Link href={`/recipes/${recipe.slug}`} className="r-card">
                                    <div style={{ position: 'relative', height: 230, overflow: 'hidden', background: '#1a1410' }}>
                                        <Image src={recipe.image} alt={`${recipe.title} — ${recipe.subtitle}`} fill className="r-img" style={{ objectFit: 'cover', opacity: 0.92 }} sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" quality={80} />
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)' }} />
                                        <div style={{ position: 'absolute', top: 14, left: 14, background: recipe.tagColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '5px 13px', borderRadius: 100 }}>{recipe.tag}</div>
                                        <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)', color: 'white', fontSize: 11, fontWeight: 500, padding: '5px 11px', borderRadius: 100 }}>⏱ {recipe.time}</div>
                                        <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 5 }}>
                                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: DIFF_COLOR[recipe.difficulty] }} />
                                            <span style={{ color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>{recipe.difficulty}</span>
                                        </div>
                                        <div style={{ position: 'absolute', bottom: 14, right: 54, color: 'rgba(255,255,255,0.55)', fontSize: 10, fontWeight: 600 }}>{recipe.cal} kcal</div>
                                        <HeartBtn recipe={recipe} />
                                    </div>
                                    <div style={{ padding: '18px 20px 22px' }}>
                                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#D97706', textTransform: 'uppercase', marginBottom: 6 }}>{recipe.region} Vietnam</div>
                                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#2D1A0E', margin: '0 0 3px', lineHeight: 1.2 }}>{recipe.title}</h2>
                                        <p style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)', fontStyle: 'italic', margin: '0 0 10px' }}>{recipe.subtitle}</p>
                                        <p style={{ fontSize: 13.5, color: 'rgba(75,46,26,0.62)', lineHeight: 1.68, margin: '0 0 14px' }}>{recipe.description}</p>
                                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                                            {recipe.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 13, borderTop: '1px solid rgba(75,46,26,0.07)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                                <span style={{ color: '#D97706', fontSize: 13, fontWeight: 700 }}>★ {recipe.rating}</span>
                                                <span style={{ color: 'rgba(75,46,26,0.32)', fontSize: 12 }}>({recipe.reviews})</span>
                                            </div>
                                            <span style={{ fontSize: 12, fontWeight: 600, color: '#D97706' }}>View Recipe →</span>
                                        </div>
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
