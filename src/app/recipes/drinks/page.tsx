'use client'

/**
 * FlavorNest Vietnam — Specialty Drinks Page
 * src/app/recipes/drinks/page.tsx
 */

import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Recipe {
    slug: string
    title: string
    subtitle: string
    image: string
    type: 'Coffee' | 'Tea' | 'Smoothie' | 'Traditional'
    difficulty: 'Easy' | 'Medium' | 'Hard'
    time: string
    rating: string
    reviews: number
    cal: number
    tag: string
    tagColor: string
    description: string
    tags: string[]
    cold: boolean
}

const RECIPES: Recipe[] = [
    {
        slug: 'ca-phe-trung',
        title: 'Vietnamese Egg Coffee',
        subtitle: 'Ca phe trung',
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80',
        type: 'Coffee', difficulty: 'Medium', time: '15 min',
        rating: '4.9', reviews: 387, cal: 180, tag: 'Hanoi Icon', tagColor: '#D97706', cold: false,
        description: "Invented in 1946 when fresh milk was scarce, a Hanoi bartender whipped egg yolks with condensed milk into a silky, custard-like foam and spooned it over strong robusta coffee. The result is extraordinary — part drink, part dessert.",
        tags: ['Coffee', 'Egg', 'Hanoi', 'Hot'],
    },
    {
        slug: 'ca-phe-sua-da',
        title: 'Vietnamese Iced Coffee',
        subtitle: 'Ca phe sua da',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
        type: 'Coffee', difficulty: 'Easy', time: '10 min',
        rating: '4.9', reviews: 512, cal: 160, tag: 'National Drink', tagColor: '#059669', cold: true,
        description: "Strong drip-filtered robusta coffee over sweetened condensed milk, poured over a glass of ice. Simple. Iconic. The drink that powers an entire nation from 6am. You will drink three before you realise it.",
        tags: ['Coffee', 'Condensed Milk', 'Iced', 'Classic'],
    },
    {
        slug: 'tra-da',
        title: 'Vietnamese Iced Green Tea',
        subtitle: 'Tra da',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80',
        type: 'Tea', difficulty: 'Easy', time: '5 min',
        rating: '4.7', reviews: 198, cal: 5, tag: 'Free Everywhere', tagColor: '#166534', cold: true,
        description: "The unofficial national beverage — a large glass of unsweetened green tea over ice, given free at almost every restaurant in the country. Refreshing, clean, and exactly what you need after a bowl of phở in the midday heat.",
        tags: ['Tea', 'Unsweetened', 'Vegan', 'Free'],
    },
    {
        slug: 'sinh-to-bo',
        title: 'Avocado Smoothie',
        subtitle: 'Sinh to bo',
        image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=900&q=80',
        type: 'Smoothie', difficulty: 'Easy', time: '10 min',
        rating: '4.8', reviews: 276, cal: 290, tag: 'Saigon Favourite', tagColor: '#7C3AED', cold: true,
        description: "In Vietnam, avocado is a dessert fruit, not a savoury one. Blended with condensed milk, fresh milk and crushed ice into a thick, ultra-creamy smoothie — this is what they serve at every juice stall in Saigon from 2pm onwards.",
        tags: ['Avocado', 'Condensed Milk', 'Creamy', 'Cold'],
    },
    {
        slug: 'nuoc-mia',
        title: 'Fresh Sugarcane Juice',
        subtitle: 'Nuoc mia',
        image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80',
        type: 'Traditional', difficulty: 'Easy', time: '5 min',
        rating: '4.8', reviews: 241, cal: 120, tag: 'Street Cart Classic', tagColor: '#EA580C', cold: true,
        description: "The freshest drink in Vietnam — sugarcane stalks pressed through steel rollers right in front of you, the pale green juice catching in a plastic cup over ice, sometimes with a squeeze of kumquat. Costs almost nothing. Tastes like pure happiness.",
        tags: ['Sugarcane', 'Fresh-Pressed', 'Vegan', 'Street'],
    },
    {
        slug: 'ca-phe-muoi',
        title: 'Salted Coffee',
        subtitle: 'Ca phe muoi',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
        type: 'Coffee', difficulty: 'Easy', time: '10 min',
        rating: '4.8', reviews: 203, cal: 170, tag: 'Hue Specialty', tagColor: '#BE185D', cold: false,
        description: "A specialty of Huế — strong coffee topped with a salted cream foam made from whipped cream and a pinch of sea salt. The contrast between the bitter coffee, sweet milk and savoury salt creates something genuinely addictive.",
        tags: ['Coffee', 'Salted Cream', 'Hue', 'Trending'],
    },
    {
        slug: 'tra-thai',
        title: 'Thai-Style Milk Tea',
        subtitle: 'Tra sua Thai',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
        type: 'Tea', difficulty: 'Easy', time: '10 min',
        rating: '4.7', reviews: 167, cal: 240, tag: 'Boba Generation', tagColor: '#D97706', cold: true,
        description: "Bright orange Thai tea steeped strong, sweetened and topped with condensed milk over ice — a staple of every Vietnamese milk tea shop. Rich, creamy, slightly floral. Add tapioca pearls if you want the full experience.",
        tags: ['Tea', 'Condensed Milk', 'Iced', 'Sweet'],
    },
    {
        slug: 'nuoc-sam',
        title: 'Herbal Cooling Drink',
        subtitle: 'Nuoc sam',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80',
        type: 'Traditional', difficulty: 'Medium', time: '30 min',
        rating: '4.6', reviews: 112, cal: 80, tag: 'Traditional Medicine', tagColor: '#166534', cold: true,
        description: "A centuries-old Vietnamese herbal drink made from a blend of roots, bark and dried flowers — chrysanthemum, cogon grass root, pandan and water chestnuts. Sweetened lightly and served cold. Vietnamese families make this to 'cool the body' in summer.",
        tags: ['Herbal', 'Traditional', 'Cooling', 'Healthy'],
    },
]

const TYPE_FILTERS = ['All', 'Coffee', 'Tea', 'Smoothie', 'Traditional']
const TEMP_FILTERS = ['All Drinks', 'Hot ☕', 'Cold 🧊']
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
                arr.push({ slug: recipe.slug, title: recipe.title, subtitle: recipe.subtitle, image: recipe.image, time: recipe.time, difficulty: recipe.difficulty, category: 'Drinks', savedAt: new Date().toISOString().split('T')[0] })
            }
        } else {
            arr = arr.filter((x: object) => (x as { slug: string }).slug !== recipe.slug)
        }
        localStorage.setItem(LS_KEY, JSON.stringify(arr))
    } catch {}
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

export default function DrinksPage() {
    const [type, setType] = useState('All')
    const [temp, setTemp] = useState('All Drinks')

    const filtered = useMemo(() => RECIPES.filter(r => {
        const tMatch = type === 'All' || r.type === type
        const tempMatch = temp === 'All Drinks' || (temp === 'Hot ☕' && !r.cold) || (temp === 'Cold 🧊' && r.cold)
        return tMatch && tempMatch
    }), [type, temp])

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

            {/* HERO */}
            <section style={{ background: 'linear-gradient(135deg, #FEF3E2 0%, #FDE8C5 50%, #E8F5E9 100%)', paddingTop: 120, paddingBottom: 72, padding: '120px 24px 72px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 60, right: '10%', width: 240, height: 240, borderRadius: '50%', background: 'rgba(22,101,52,0.06)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: 20, left: '5%', width: 160, height: 160, borderRadius: '50%', background: 'rgba(217,119,6,0.07)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
                    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 24 }}>
                        {[['Home', '/'], ['Recipes', '/recipes'], ['Specialty Drinks', '']].map(([label, href], i) => (
                            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {i > 0 && <span style={{ color: 'rgba(75,46,26,0.3)' }}>›</span>}
                                {href ? <Link href={href} style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                    : <span style={{ color: '#D97706', fontWeight: 600 }}>{label}</span>}
                            </span>
                        ))}
                    </nav>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                        <div style={{ width: 32, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>From Coffee Carts to Herbal Stalls</span>
                    </div>

                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(42px, 6vw, 76px)', fontWeight: 800, color: '#2D1A0E', margin: '0 0 18px', lineHeight: 1.0 }}>
                        Vietnamese<br /><span style={{ color: '#D97706', fontStyle: 'italic' }}>Specialty Drinks</span>
                    </h1>

                    <p style={{ color: 'rgba(75,46,26,0.62)', fontSize: 17, maxWidth: 520, lineHeight: 1.75, margin: '0 0 36px' }}>
                        Vietnam's drink culture is as deep as its food culture. From the egg coffee of a Hanoi shophouse to a glass of fresh sugarcane juice pressed on a Saigon corner — every sip tells a story.
                    </p>

                    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                        {[['🧋', `${RECIPES.length}`, 'Recipes'], ['⏱', '5 min', 'Quickest'], ['☕', '4', 'Categories'], ['⭐', '4.8', 'Avg Rating']].map(([icon, val, lbl]) => (
                            <div key={lbl}>
                                <span style={{ fontSize: 14 }}>{icon}</span>
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
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(75,46,26,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>Type</span>
                    {TYPE_FILTERS.map(f => <button key={f} onClick={() => setType(f)} className={`pill ${type === f ? 'on' : ''}`}>{f}</button>)}
                    <div style={{ width: 1, height: 22, background: 'rgba(75,46,26,0.1)', margin: '0 6px', flexShrink: 0 }} />
                    {TEMP_FILTERS.map(f => <button key={f} onClick={() => setTemp(f)} className={`pill ${temp === f ? 'on' : ''}`}>{f}</button>)}
                    <span style={{ marginLeft: 'auto', fontSize: 13, color: 'rgba(75,46,26,0.38)', flexShrink: 0, fontWeight: 500 }}>{filtered.length} drinks</span>
                </div>
            </div>

            {/* GRID */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 96px' }}>
                <AnimatePresence mode="wait">
                    <motion.div key={`${type}-${temp}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
                        {filtered.map((recipe, i) => (
                            <motion.div key={recipe.slug} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
                                <Link href={`/recipes/${recipe.slug}`} className="r-card">
                                    <div style={{ position: 'relative', height: 220, overflow: 'hidden', background: '#f0ebe4' }}>
                                        <Image src={recipe.image} alt={`${recipe.title} — ${recipe.subtitle}`} fill className="r-img" style={{ objectFit: 'cover' }} sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" quality={80} />
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)' }} />
                                        <div style={{ position: 'absolute', top: 14, left: 14, background: recipe.tagColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '5px 13px', borderRadius: 100 }}>{recipe.tag}</div>
                                        <div style={{ position: 'absolute', top: 14, right: 14, background: recipe.cold ? 'rgba(2,132,199,0.85)' : 'rgba(180,83,9,0.85)', backdropFilter: 'blur(6px)', color: 'white', fontSize: 11, fontWeight: 600, padding: '5px 11px', borderRadius: 100 }}>
                                            {recipe.cold ? '🧊 Cold' : '☕ Hot'}
                                        </div>
                                        <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 5 }}>
                                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: DIFF_COLOR[recipe.difficulty] }} />
                                            <span style={{ color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>{recipe.difficulty}</span>
                                        </div>
                                        <div style={{ position: 'absolute', bottom: 14, right: 54, color: 'rgba(255,255,255,0.55)', fontSize: 10, fontWeight: 600 }}>{recipe.time}</div>
                                        <HeartBtn recipe={recipe} />
                                    </div>
                                    <div style={{ padding: '18px 20px 22px' }}>
                                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#D97706', textTransform: 'uppercase', marginBottom: 6 }}>{recipe.type}</div>
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
                        <div style={{ fontSize: 44, marginBottom: 12 }}>🧋</div>
                        <p style={{ fontSize: 16, fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>No drinks match this filter.</p>
                    </div>
                )}
            </section>

            {/* OTHER CATEGORIES */}
            <section style={{ background: '#2D1A0E', padding: '64px 24px 80px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Keep Exploring</span>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: 'white', margin: '0 0 32px' }}>More to Discover</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
                        {[
                            { label: 'Breakfast', emoji: '🌅', href: '/recipes/breakfast' },
                            { label: 'Main Dishes', emoji: '🍖', href: '/recipes/main-dishes' },
                            { label: 'Desserts', emoji: '🍮', href: '/recipes/desserts' },
                            { label: 'Street Food', emoji: '🥢', href: '/recipes/street-food' },
                            { label: 'Northern Cuisine', emoji: '🏯', href: '/recipes/north' },
                            { label: 'Travel Guide', emoji: '🗺️', href: '/stories/travel' },
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
