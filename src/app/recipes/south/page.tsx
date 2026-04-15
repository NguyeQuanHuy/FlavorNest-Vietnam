'use client'

/**
 * FlavorNest Vietnam — Southern Cuisine Page
 * src/app/recipes/south/page.tsx
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
        slug: 'thit-kho-tau',
        title: 'Caramelised Pork & Eggs',
        subtitle: 'Thịt Kho Tàu',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80',
        difficulty: 'Easy', time: '1.5 hrs',
        rating: '4.9', reviews: 387, cal: 480, tag: 'Southern Soul', tagColor: '#D97706',
        description: "The dish that defines comfort food in Southern Vietnam — pork belly and eggs slow-braised in coconut water until the sauce turns deep amber and glossy. Every family has their version. This is ours.",
        tags: ['Pork', 'Eggs', 'Coconut', 'Slow Cook'],
    },
    {
        slug: 'com-tam-saigon',
        title: 'Saigon Broken Rice Plate',
        subtitle: 'Cơm Tấm Sài Gòn',
        image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=80',
        difficulty: 'Easy', time: '35 min',
        rating: '4.9', reviews: 412, cal: 510, tag: 'Saigon Icon', tagColor: '#EA580C',
        description: "The broken rice that was once considered a poor man's meal is now the city's most beloved dish. A char-grilled pork chop, fried egg, steamed pork cake, scallion oil and a river of nuoc cham. The taste of Saigon at 7am.",
        tags: ['Pork', 'Rice', 'Breakfast', 'Classic'],
    },
    {
        slug: 'bun-thit-nuong',
        title: 'Grilled Pork Vermicelli Bowl',
        subtitle: 'Bún Thịt Nướng',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
        difficulty: 'Easy', time: '35 min',
        rating: '4.8', reviews: 298, cal: 390, tag: 'Lunch Classic', tagColor: '#059669',
        description: "Cold vermicelli, chargrilled pork, crispy spring roll, crushed peanuts, bean sprouts, fresh mint and a flood of nuoc cham. Room temperature, no soup, pure Saigon energy. The definitive weekday lunch.",
        tags: ['Pork', 'Noodles', 'Cold', 'Peanuts'],
    },
    {
        slug: 'banh-xeo-mien-tay',
        title: 'Mekong Sizzling Crepe',
        subtitle: 'Bánh Xèo Miền Tây',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=80',
        difficulty: 'Medium', time: '45 min',
        rating: '4.9', reviews: 263, cal: 380, tag: 'Mekong Special', tagColor: '#D97706',
        description: "The Southern version is enormous — a giant turmeric crêpe filled with shrimp, pork belly and bean sprouts. The name means 'sizzling cake' after the sound it makes hitting the hot pan. Broken by hand, wrapped in mustard leaf, dipped in nuoc cham.",
        tags: ['Shrimp', 'Pork', 'Crispy', 'Mekong'],
    },
    {
        slug: 'hu-tieu-nam-vang',
        title: 'Phnom Penh Noodle Soup',
        subtitle: 'Hủ Tiếu Nam Vang',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=900&q=80',
        difficulty: 'Medium', time: '2 hrs',
        rating: '4.8', reviews: 187, cal: 420, tag: 'Saigon Favourite', tagColor: '#7C3AED',
        description: "A Saigon institution with Cambodian roots — clear, slightly sweet pork broth with rice noodles, minced pork, sliced pork, prawns and a poached egg. Can be served as a soup or dry (with broth on the side). Both versions are perfect.",
        tags: ['Pork', 'Shrimp', 'Noodles', 'Clear Broth'],
    },
    {
        slug: 'ca-kho-to',
        title: 'Clay Pot Caramelised Fish',
        subtitle: 'Cá Kho Tộ',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80',
        difficulty: 'Easy', time: '45 min',
        rating: '4.8', reviews: 221, cal: 320, tag: 'River Delta Classic', tagColor: '#166534',
        description: "Catfish braised in a dark, intensely savoury caramel with chilli and ginger in a clay pot. The clay keeps it sizzling at the table, the caramel lacquers every surface of the fish. Eaten with plain steamed rice, it is perfect.",
        tags: ['Fish', 'Caramel', 'Clay Pot', 'Spicy'],
    },
    {
        slug: 'lau-thai',
        title: 'Thai-Style Hot Pot',
        subtitle: 'Lẩu Thái',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
        difficulty: 'Easy', time: '40 min',
        rating: '4.7', reviews: 198, cal: 350, tag: 'Social Feast', tagColor: '#BE185D',
        description: "The Southern Vietnamese love of Thai flavours expressed in a communal hot pot — sour, spicy, lemongrass-scented broth filled with seafood, mushrooms and fresh vegetables. A weekend feast dish eaten slowly with friends.",
        tags: ['Seafood', 'Spicy', 'Communal', 'Hot Pot'],
    },
    {
        slug: 'bo-luc-lac',
        title: 'Shaking Beef',
        subtitle: 'Bò Lúc Lắc',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
        difficulty: 'Easy', time: '25 min',
        rating: '4.9', reviews: 312, cal: 420, tag: 'Restaurant Star', tagColor: '#D97706',
        description: "Tender beef cubes wok-tossed in butter, garlic and oyster sauce — the 'shaking' technique builds a beautiful crust while keeping the centre pink. Served on watercress with a lime and black pepper dipping salt. Fast, brilliant, unforgettable.",
        tags: ['Beef', 'Wok', 'Quick', 'French-Inspired'],
    },
]

const FILTERS = ['All', 'Easy', 'Medium', 'Hard']
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
                arr.push({ slug: recipe.slug, title: recipe.title, subtitle: recipe.subtitle, image: recipe.image, time: recipe.time, difficulty: recipe.difficulty, category: 'Southern Cuisine', savedAt: new Date().toISOString().split('T')[0] })
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

export default function SouthernCuisinePage() {
    const [diff, setDiff] = useState('All')
    const filtered = useMemo(() => RECIPES.filter(r => diff === 'All' || r.difficulty === diff), [diff])

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

            {/* HERO — Warm tropical green for Southern Vietnam */}
            <section style={{ background: 'linear-gradient(135deg, #064E3B 0%, #065F46 50%, #047857 100%)', paddingTop: 120, paddingBottom: 80, padding: '120px 24px 80px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 60% 40%, rgba(16,185,129,0.12) 0%, transparent 55%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
                    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 28 }}>
                        {[['Home', '/'], ['Recipes', '/recipes'], ['Southern Cuisine', '']].map(([label, href], i) => (
                            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {i > 0 && <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>}
                                {href ? <Link href={href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                    : <span style={{ color: '#6EE7B7', fontWeight: 600 }}>{label}</span>}
                            </span>
                        ))}
                    </nav>

                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 100, padding: '7px 18px', marginBottom: 24 }}>
                        <span style={{ fontSize: 14 }}>🌴</span>
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6EE7B7' }}>Ẩm Thực Miền Nam</span>
                    </div>

                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(44px, 7vw, 88px)', fontWeight: 800, color: 'white', margin: '0 0 20px', lineHeight: 0.95 }}>
                        Southern<br /><span style={{ color: '#6EE7B7', fontStyle: 'italic' }}>Vietnamese</span><br />Cuisine
                    </h1>

                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, maxWidth: 520, lineHeight: 1.78, margin: '0 0 44px' }}>
                        The most abundant, most generous, most cosmopolitan food in Vietnam. Shaped by the Mekong Delta's incredible produce, Saigon's energy, and a history of cultural exchange that made Southern cooking the most eclectic in the country.
                    </p>

                    <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: '16px 20px', maxWidth: 520, marginBottom: 36 }}>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.7, fontStyle: 'italic' }}>
                            "Southern Vietnamese food is sweeter, more tropical, more generous than the north. It is the food of abundance — coconut milk, fresh herbs, river fish, and a warmth that matches the climate."
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
                        {[['🌴', `${RECIPES.length}`, 'Recipes'], ['🌆', 'Saigon', 'Food Capital'], ['⭐', '4.8', 'Avg Rating'], ['🌿', 'Fresh', 'Flavour Profile']].map((s, i) => (
                            <div key={s[2]} style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingLeft: i > 0 ? 24 : 0, paddingRight: 24, marginBottom: 10 }}>
                                <span style={{ fontSize: 13 }}>{s[0]}</span>
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: 'white', lineHeight: 1 }}>{s[1]}</div>
                                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', marginTop: 4 }}>{s[2]}</div>
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
                    <span style={{ marginLeft: 'auto', fontSize: 13, color: 'rgba(75,46,26,0.38)', flexShrink: 0, fontWeight: 500 }}>{filtered.length} recipes</span>
                </div>
            </div>

            {/* GRID */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 96px' }}>
                <AnimatePresence mode="wait">
                    <motion.div key={diff} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: 24 }}>
                        {filtered.map((recipe, i) => (
                            <motion.div key={recipe.slug} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
                                <Link href={`/recipes/${recipe.slug}`} className="r-card">
                                    <div style={{ position: 'relative', height: 230, overflow: 'hidden', background: '#0a1a10' }}>
                                        <Image src={recipe.image} alt={`${recipe.title} — ${recipe.subtitle}`} fill className="r-img" style={{ objectFit: 'cover', opacity: 0.9 }} sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" quality={80} />
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,78,59,0.6) 0%, transparent 55%)' }} />
                                        <div style={{ position: 'absolute', top: 14, left: 14, background: recipe.tagColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '5px 13px', borderRadius: 100 }}>{recipe.tag}</div>
                                        <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)', color: 'white', fontSize: 11, fontWeight: 500, padding: '5px 11px', borderRadius: 100 }}>⏱ {recipe.time}</div>
                                        <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 5 }}>
                                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: DIFF_COLOR[recipe.difficulty] }} />
                                            <span style={{ color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>{recipe.difficulty}</span>
                                        </div>
                                        <HeartBtn recipe={recipe} />
                                    </div>
                                    <div style={{ padding: '18px 20px 22px' }}>
                                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#059669', textTransform: 'uppercase', marginBottom: 6 }}>Southern Vietnam</div>
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
            </section>

            {/* OTHER REGIONS */}
            <section style={{ background: '#2D1A0E', padding: '64px 24px 80px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Explore Vietnam</span>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: 'white', margin: '0 0 32px' }}>Other Regions & Categories</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
                        {[
                            { label: 'Northern Cuisine', emoji: '🏯', href: '/recipes/north' },
                            { label: 'Central Cuisine', emoji: '🌶️', href: '/recipes/central' },
                            { label: 'Street Food', emoji: '🥢', href: '/recipes/street-food' },
                            { label: 'Main Dishes', emoji: '🍖', href: '/recipes/main-dishes' },
                            { label: 'Desserts', emoji: '🍮', href: '/recipes/desserts' },
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
