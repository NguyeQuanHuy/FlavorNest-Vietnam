'use client'

/**
 * FlavorNest Vietnam — Main Dishes Page
 * src/app/recipes/main-dishes/page.tsx
 */

import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Types ────────────────────────────────────────────────────────────────────
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const RECIPES: Recipe[] = [
    {
        slug: 'thit-kho-tau',
        title: 'Caramelised Pork & Eggs',
        subtitle: 'Thịt Kho Tàu',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '1.5 hrs',
        rating: '4.9', reviews: 312, cal: 480, tag: 'Comfort Classic', tagColor: '#D97706',
        description: "Pork belly glistens amber under a caramel lacquer that catches the light like dark honey. Slow-braised for hours in coconut water with whole boiled eggs and deep palm-sugar caramel, the fat turns silky while the yolks drink up the sauce. Spooned over hot rice on a rainy afternoon, it tastes like every Vietnamese grandmother's kitchen.",
        tags: ['Pork', 'Eggs', 'Slow Cook', 'Coconut'],
    },
    {
        slug: 'ca-kho-to',
        title: 'Clay Pot Caramelised Fish',
        subtitle: 'Cá Kho Tộ',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '45 min',
        rating: '4.8', reviews: 198, cal: 320, tag: 'Southern Icon', tagColor: '#059669',
        description: "Thick catfish fillets arrive still bubbling, coated in a near-black caramel that smells of burnt sugar, ginger and chilli. Layered with fish sauce, pork fat and cracked pepper, then braised slowly in an earthenware pot until the sauce clings like varnish. The pot keeps sizzling at the table — one sniff and no one waits politely for rice.",
        tags: ['Fish', 'Caramel', 'Clay Pot', 'Spicy'],
    },
    {
        slug: 'bo-luc-lac',
        title: 'Shaking Beef',
        subtitle: 'Bò Lúc Lắc',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '25 min',
        rating: '4.9', reviews: 276, cal: 420, tag: 'Restaurant Favourite', tagColor: '#7C3AED',
        description: "Cubes of tender beef hit a screaming-hot wok with butter, garlic and oyster sauce, caramelising in seconds while the cook 'shakes' the pan to toss them. The crust is deep and glossy; the centre stays blushing pink. Served on peppery watercress with a lime-salt-pepper dip — the Saigon steakhouse classic French colonists left behind.",
        tags: ['Beef', 'Wok', 'Quick', 'French-Inspired'],
    },
    {
        slug: 'ga-kho-gung',
        title: 'Ginger Braised Chicken',
        subtitle: 'Gà Kho Gừng',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c7?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Easy', time: '40 min',
        rating: '4.7', reviews: 143, cal: 360, tag: 'Weeknight Hero', tagColor: '#EA580C',
        description: "Bone-in chicken thighs simmer in fish sauce, palm sugar and a generous fistful of julienned young ginger until the sauce reduces to a sticky, fragrant glaze. The ginger turns sweet and mellow, the skin burnished mahogany. A weeknight staple in every Northern household — cheap, fast, and the kind of dish that makes plain rice feel like home.",
        tags: ['Chicken', 'Ginger', 'Quick', 'Family'],
    },
    {
        slug: 'suon-nuong-xa',
        title: 'Lemongrass Pork Ribs',
        subtitle: 'Sườn Nướng Xả',
        image: 'https://images.unsplash.com/photo-1558030137-a56c1b004fa3?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '2 hrs',
        rating: '4.8', reviews: 167, cal: 510, tag: 'Grill Night', tagColor: '#D97706',
        description: "Ribs marinate overnight in crushed lemongrass, garlic, fish sauce and a whisper of honey, then meet glowing charcoal until the edges char and the fat renders into smoke. Each bite is sweet, smoky and citrus-bright, with that unmistakable Saigon street-corner perfume. Serve with broken rice, pickled carrots and a fried egg — cơm tấm, the city's favourite dinner.",
        tags: ['Pork', 'Grilled', 'Lemongrass', 'BBQ'],
    },
    {
        slug: 'ca-chien-sot-ca',
        title: 'Crispy Fish in Tomato Sauce',
        subtitle: 'Cá Chiên Sốt Cà',
        image: 'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Easy', time: '30 min',
        rating: '4.6', reviews: 112, cal: 340, tag: 'Northern Home Cook', tagColor: '#0284C7',
        description: "A whole pan-fried fish, skin shattering-crisp, bathes in a vibrant tomato sauce loud with scallions and dill. The crunch of the crust against the tangy sauce is pure Hanoi home cooking — unfussy, balanced, endlessly comforting. It's the dish every Northern mother makes when she wants to show love without saying anything at all.",
        tags: ['Fish', 'Tomato', 'Crispy', 'Quick'],
    },
    {
        slug: 'dau-hu-sot-ca',
        title: 'Tofu in Tomato Sauce',
        subtitle: 'Đậu Hũ Sốt Cà',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Easy', time: '20 min',
        rating: '4.7', reviews: 189, cal: 220, tag: 'Vegan Favourite', tagColor: '#059669',
        description: "Golden squares of fried tofu, crisp at the edges and custardy inside, simmer in a bright tomato-scallion sauce until they soak up every drop. Humble, vegan, and on the table of nearly every Vietnamese family at least once a week. Proof that the best comfort food needs nothing more than three ingredients and a little patience.",
        tags: ['Tofu', 'Vegan', 'Tomato', 'Quick'],
    },
    {
        slug: 'bo-nuong-la-lot',
        title: 'Beef in Betel Leaf',
        subtitle: 'Bò Nướng Lá Lốt',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '45 min',
        rating: '4.8', reviews: 134, cal: 380, tag: 'Party Dish', tagColor: '#BE185D',
        description: "Seasoned ground beef — perfumed with lemongrass, garlic and a hint of five-spice — wrapped snugly in glossy betel leaves, then grilled until the leaves blister and release their peppery, smoky aroma. One of Vietnam's great party dishes, eaten in rice paper rolls with herbs, pickles and nước chấm, fingers sticky, beer cold, everyone talking at once.",
        tags: ['Beef', 'Grilled', 'Herbs', 'Wraps'],
    },
    {
        slug: 'cha-ca-la-vong',
        title: "Hanoi Turmeric Fish with Dill",
        subtitle: 'Chả Cá Lã Vọng',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Medium', time: '40 min',
        rating: '4.9', reviews: 221, cal: 350, tag: "Hanoi's Best", tagColor: '#D97706',
        description: "Arguably Hanoi's greatest dish. Snakehead fillets marinate in turmeric and galangal-fermented shrimp paste, then finish sizzling tableside in a pan of dill and spring onion so abundant it looks like a green bouquet. Eaten with rice vermicelli, roasted peanuts, fresh herbs and mắm tôm — a ritual invented on Chả Cá Street and jealously guarded for 150 years.",
        tags: ['Fish', 'Turmeric', 'Dill', 'Heritage'],
    },
]
const FILTERS = ['All', 'Easy', 'Medium', 'Hard']
const REGIONS = ['All Regions', 'Northern', 'Central', 'Southern']
const DIFF_COLOR: Record<string, string> = { Easy: '#10b981', Medium: '#f59e0b', Hard: '#ef4444' }
const LS_KEY = 'fn_favorites'

// ─── Helpers ──────────────────────────────────────────────────────────────────
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
                arr.push({ slug: recipe.slug, title: recipe.title, subtitle: recipe.subtitle, image: recipe.image, time: recipe.time, difficulty: recipe.difficulty, category: 'Main Dish', savedAt: new Date().toISOString().split('T')[0] })
            }
        } else {
            arr = arr.filter((x: object) => (x as { slug: string }).slug !== recipe.slug)
        }
        localStorage.setItem(LS_KEY, JSON.stringify(arr))
    } catch {}
}

// ─── Heart Button ─────────────────────────────────────────────────────────────
function HeartBtn({ recipe }: { recipe: Recipe }) {
    const [liked, setLiked] = useState(false)
    const [burst, setBurst] = useState(false)
    const [toast, setToast] = useState<'added' | 'removed' | null>(null)

    useEffect(() => { setLiked(loadFavSlugs().has(recipe.slug)) }, [recipe.slug])

    const toggle = useCallback((e: React.MouseEvent) => {
        e.preventDefault(); e.stopPropagation()
        const next = !liked
        setLiked(next); saveFav(recipe, next)
        if (next) setBurst(true)
        setToast(next ? 'added' : 'removed')
        setTimeout(() => setBurst(false), 600)
        setTimeout(() => setToast(null), 2000)
    }, [liked, recipe])

    return (
        <div style={{ position: 'absolute', bottom: 14, right: 14 }}>
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }}
                        style={{ position: 'absolute', bottom: 44, right: 0, background: liked ? '#4B2E1A' : 'rgba(75,46,26,0.75)', color: 'white', fontSize: 11, fontWeight: 600, padding: '5px 12px', borderRadius: 100, whiteSpace: 'nowrap', pointerEvents: 'none' }}
                    >
                        {toast === 'added' ? '♥ Saved' : '✕ Removed'}
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button onClick={toggle} whileTap={{ scale: 0.82 }} aria-label={liked ? 'Remove from favorites' : 'Save recipe'}
                style={{ width: 36, height: 36, borderRadius: '50%', background: liked ? 'rgba(220,38,38,0.92)' : 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', border: liked ? 'none' : '1px solid rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: liked ? '0 4px 16px rgba(220,38,38,0.35)' : '0 2px 8px rgba(0,0,0,0.15)', transition: 'background 0.25s, box-shadow 0.25s', position: 'relative', overflow: 'hidden' }}
            >
                {burst && <motion.span initial={{ scale: 0.6, opacity: 0.8 }} animate={{ scale: 2.2, opacity: 0 }} transition={{ duration: 0.5 }} style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(220,38,38,0.3)', pointerEvents: 'none' }} />}
                <motion.svg width="16" height="16" viewBox="0 0 24 24" animate={burst ? { scale: [1, 1.35, 1] } : { scale: 1 }} transition={{ duration: 0.35 }}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={liked ? 'white' : 'none'} stroke={liked ? 'none' : 'rgba(75,46,26,0.5)'} strokeWidth="1.8" strokeLinecap="round" />
                </motion.svg>
            </motion.button>
        </div>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MainDishesPage() {
    const [diff, setDiff] = useState('All')
    const [region, setRegion] = useState('All Regions')

    const filtered = useMemo(() =>
        RECIPES.filter(r => (diff === 'All' || r.difficulty === diff) && (region === 'All Regions' || r.region === region))
        , [diff, region])

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
                .tag { font-size: 10px; font-weight: 600; color: rgba(75,46,26,0.45); background: rgba(75,46,26,0.05); padding: 3px 9px; border-radius: 6px; letter-spacing: 0.03em; }
            `}</style>

            {/* ── HERO ── */}
            <section style={{ background: 'linear-gradient(135deg, #FEF3E2 0%, #FDEAC8 55%, #F5EDE3 100%)', paddingTop: 120, paddingBottom: 72, padding: '120px 24px 72px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 40, right: '6%', width: 280, height: 280, borderRadius: '50%', background: 'rgba(217,119,6,0.07)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    {/* Breadcrumb */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 24 }}>
                        {[['Home', '/'], ['Recipes', '/recipes'], ['Main Dishes', '']].map(([label, href], i) => (
                            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {i > 0 && <span style={{ color: 'rgba(75,46,26,0.3)' }}>›</span>}
                                {href ? <Link href={href} style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                    : <span style={{ color: '#D97706', fontWeight: 600 }}>{label}</span>}
                            </span>
                        ))}
                    </nav>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                        <div style={{ width: 32, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>The Heart of the Table</span>
                    </div>

                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(42px, 6vw, 76px)', fontWeight: 800, color: '#2D1A0E', margin: '0 0 18px', lineHeight: 1.0 }}>
                        Vietnamese<br /><span style={{ color: '#D97706', fontStyle: 'italic' }}>Main Dishes</span>
                    </h1>

                    <p style={{ color: 'rgba(75,46,26,0.62)', fontSize: 17, maxWidth: 500, lineHeight: 1.75, margin: '0 0 36px' }}>
                        From slow-braised clay pots to fiery wok dishes — these are the recipes that define the Vietnamese dining table. Passed down through generations, perfected by time.
                    </p>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                        {[['🍖', `${RECIPES.length}`, 'Recipes'], ['⏱', '20 min', 'Quickest'], ['🌏', '3', 'Regions'], ['⭐', '4.8', 'Avg Rating']].map(([icon, val, lbl]) => (
                            <div key={lbl}>
                                <span style={{ fontSize: 14 }}>{icon}</span>
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#2D1A0E', lineHeight: 1 }}>{val}</div>
                                <div style={{ fontSize: 11, color: 'rgba(75,46,26,0.45)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{lbl}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FILTER BAR ── */}
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

            {/* ── GRID ── */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 96px' }}>
                <AnimatePresence mode="wait">
                    <motion.div key={`${diff}-${region}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: 24 }}>
                        {filtered.map((recipe, i) => (
                            <motion.div key={recipe.slug} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
                                <Link href={`/recipes/${recipe.slug}`} className="r-card">
                                    {/* Image */}
                                    <div style={{ position: 'relative', height: 230, overflow: 'hidden', background: '#f0ebe4' }}>
                                        <Image src={recipe.image} alt={`${recipe.title} — ${recipe.subtitle} Vietnamese recipe`} fill className="r-img" style={{ objectFit: 'cover' }} sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" quality={80} />
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)' }} />

                                        {/* Tag */}
                                        <div style={{ position: 'absolute', top: 14, left: 14, background: recipe.tagColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '5px 13px', borderRadius: 100 }}>{recipe.tag}</div>

                                        {/* Time */}
                                        <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.38)', backdropFilter: 'blur(6px)', color: 'white', fontSize: 11, fontWeight: 500, padding: '5px 11px', borderRadius: 100 }}>⏱ {recipe.time}</div>

                                        {/* Difficulty */}
                                        <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 5 }}>
                                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: DIFF_COLOR[recipe.difficulty] }} />
                                            <span style={{ color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>{recipe.difficulty}</span>
                                        </div>

                                        {/* Calories */}
                                        <div style={{ position: 'absolute', bottom: 14, right: 54, color: 'rgba(255,255,255,0.65)', fontSize: 10, fontWeight: 600 }}>{recipe.cal} kcal</div>

                                        <HeartBtn recipe={recipe} />
                                    </div>

                                    {/* Body */}
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
                        <div style={{ fontSize: 44, marginBottom: 12 }}>🍖</div>
                        <p style={{ fontSize: 16, fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>No recipes match this filter.</p>
                    </div>
                )}
            </section>

            {/* ── OTHER CATEGORIES ── */}
            <section style={{ background: '#2D1A0E', padding: '64px 24px 80px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Keep Exploring</span>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: 'white', margin: '0 0 32px' }}>More to Discover</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
                        {[
                            { label: 'Breakfast', emoji: '🌅', href: '/recipes/breakfast' },
                            { label: 'Desserts', emoji: '🍮', href: '/recipes/desserts' },
                            { label: 'Street Food', emoji: '🥢', href: '/recipes/street-food' },
                            { label: 'Specialty Drinks', emoji: '🧋', href: '/recipes/drinks' },
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
