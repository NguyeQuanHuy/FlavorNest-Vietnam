'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useMemo, Suspense, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Data ─────────────────────────────────────────────────────────────────────
const RECIPES = [
    {
        slug: 'hanoi-beef-pho',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80',
        category: 'Soup', region: 'Northern', difficulty: 'Medium',
        time: '3 hrs', rating: '4.9', reviews: 248,
        description: 'The soul of Hanoi in a bowl — slow-simmered bone broth, silky rice noodles, and paper-thin beef.',
        tags: ['Beef', 'Noodles', 'Slow Cook'],
    },
    {
        slug: 'banh-mi',
        title: 'Lemongrass Pork Bánh Mì',
        subtitle: 'Bánh Mì Thịt Nướng',
        image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80',
        category: 'Street Food', region: 'Southern', difficulty: 'Easy',
        time: '40 min', rating: '4.8', reviews: 183,
        description: 'Crusty baguette loaded with smoky lemongrass pork, pickled daikon, and fresh herbs.',
        tags: ['Pork', 'Sandwich', 'Quick'],
    },
    {
        slug: 'bun-cha-hanoi',
        title: 'Hanoi Grilled Pork Vermicelli',
        subtitle: 'Bún Chả Hà Nội',
        image: 'https://images.unsplash.com/photo-1623682785702-f0c9fcfe2fc0?auto=format&fit=crop&w=800&q=80',
        category: 'Noodles', region: 'Northern', difficulty: 'Easy',
        time: '45 min', rating: '4.7', reviews: 142,
        description: 'Chargrilled pork patties in a sweet-savory dipping broth with fresh vermicelli and herbs.',
        tags: ['Pork', 'Grilled', 'Noodles'],
    },
    {
        slug: 'fresh-spring-rolls',
        title: 'Fresh Spring Rolls',
        subtitle: 'Gỏi Cuốn Tôm Thịt',
        image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=800&q=80',
        category: 'Rolls', region: 'Southern', difficulty: 'Easy',
        time: '30 min', rating: '4.8', reviews: 196,
        description: 'Light, fresh, and vibrant — shrimp and pork wrapped in rice paper with peanut dipping sauce.',
        tags: ['Shrimp', 'No Cook', 'Healthy'],
    },
    {
        slug: 'com-tam',
        title: 'Saigon Broken Rice Plate',
        subtitle: 'Cơm Tấm Sài Gòn',
        image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80',
        category: 'Rice', region: 'Southern', difficulty: 'Easy',
        time: '35 min', rating: '4.9', reviews: 271,
        description: "Saigon's iconic street breakfast — grilled pork chop over broken rice with scallion oil.",
        tags: ['Pork', 'Rice', 'Classic'],
    },
    {
        slug: 'bun-bo-hue',
        title: 'Hue Spicy Beef Noodle',
        subtitle: 'Bún Bò Huế',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
        category: 'Soup', region: 'Central', difficulty: 'Hard',
        time: '2.5 hrs', rating: '4.9', reviews: 164,
        description: 'Bold, spicy, deeply aromatic — the royal noodle soup of Hue with lemongrass-infused broth.',
        tags: ['Beef', 'Spicy', 'Slow Cook'],
    },
]

const CATEGORIES = ['All', 'Soup', 'Noodles', 'Rice', 'Street Food', 'Rolls']
const REGIONS = ['All Regions', 'Northern', 'Central', 'Southern']
const DIFF_COLOR: Record<string, string> = { Easy: '#10b981', Medium: '#f59e0b', Hard: '#ef4444' }

const LS_KEY = 'fn_favorites'

// ─── localStorage helpers ─────────────────────────────────────────────────────
function loadFavSlugs(): Set<string> {
    try {
        const raw = localStorage.getItem(LS_KEY)
        if (!raw) return new Set()
        const arr = JSON.parse(raw)
        // Support both slug-only array and full object array
        return new Set(arr.map((x: string | { slug: string }) => typeof x === 'string' ? x : x.slug))
    } catch { return new Set() }
}

function saveFav(slug: string, recipe: typeof RECIPES[0], add: boolean) {
    try {
        const raw = localStorage.getItem(LS_KEY)
        let arr: object[] = raw ? JSON.parse(raw) : []
        if (add) {
            const alreadyIn = arr.some((x: object) => (x as { slug: string }).slug === slug)
            if (!alreadyIn) {
                arr.push({
                    slug,
                    title: recipe.title,
                    subtitle: recipe.subtitle,
                    image: recipe.image,
                    time: recipe.time,
                    difficulty: recipe.difficulty,
                    category: recipe.category,
                    savedAt: new Date().toISOString().split('T')[0],
                })
            }
        } else {
            arr = arr.filter((x: object) => (x as { slug: string }).slug !== slug)
        }
        localStorage.setItem(LS_KEY, JSON.stringify(arr))
    } catch { }
}

// ─── Heart Button ─────────────────────────────────────────────────────────────
function HeartButton({ slug, recipe }: { slug: string; recipe: typeof RECIPES[0] }) {
    const [liked, setLiked] = useState(false)
    const [burst, setBurst] = useState(false)
    const [toast, setToast] = useState<'added' | 'removed' | null>(null)

    useEffect(() => {
        setLiked(loadFavSlugs().has(slug))
    }, [slug])

    const toggle = useCallback((e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        const next = !liked
        setLiked(next)
        saveFav(slug, recipe, next)
        if (next) setBurst(true)
        setToast(next ? 'added' : 'removed')
        setTimeout(() => setBurst(false), 600)
        setTimeout(() => setToast(null), 2000)
    }, [liked, slug, recipe])

    return (
        <div style={{ position: 'absolute', bottom: 14, right: 14 }}>
            {/* Toast */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.9 }}
                        transition={{ duration: 0.22 }}
                        style={{
                            position: 'absolute', bottom: 44, right: 0,
                            background: liked ? '#4B2E1A' : 'rgba(75,46,26,0.75)',
                            color: 'white', fontSize: 11, fontWeight: 600,
                            padding: '5px 12px', borderRadius: 100,
                            whiteSpace: 'nowrap', pointerEvents: 'none',
                            backdropFilter: 'blur(8px)',
                        }}
                    >
                        {toast === 'added' ? '♥ Đã lưu' : '✕ Đã xóa'}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Heart button */}
            <motion.button
                onClick={toggle}
                whileTap={{ scale: 0.82 }}
                aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
                style={{
                    width: 36, height: 36,
                    borderRadius: '50%',
                    background: liked
                        ? 'rgba(220,38,38,0.92)'
                        : 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(10px)',
                    border: liked ? 'none' : '1px solid rgba(255,255,255,0.6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: liked
                        ? '0 4px 16px rgba(220,38,38,0.35)'
                        : '0 2px 8px rgba(0,0,0,0.15)',
                    transition: 'background 0.25s, box-shadow 0.25s',
                    position: 'relative', overflow: 'hidden',
                }}
            >
                {/* Burst ring */}
                {burst && (
                    <motion.span
                        initial={{ scale: 0.6, opacity: 0.8 }}
                        animate={{ scale: 2.2, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        style={{
                            position: 'absolute', inset: 0,
                            borderRadius: '50%',
                            background: 'rgba(220,38,38,0.3)',
                            pointerEvents: 'none',
                        }}
                    />
                )}

                {/* SVG heart */}
                <motion.svg
                    width="16" height="16" viewBox="0 0 24 24"
                    animate={burst ? { scale: [1, 1.35, 1] } : { scale: 1 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill={liked ? 'white' : 'none'}
                        stroke={liked ? 'none' : 'rgba(75,46,26,0.5)'}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                </motion.svg>
            </motion.button>
        </div>
    )
}

// ─── Highlight matching text ──────────────────────────────────────────────────
function Highlight({ text, query }: { text: string; query: string }) {
    if (!query.trim()) return <>{text}</>
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)
    return (
        <>
            {parts.map((part, i) =>
                regex.test(part)
                    ? <mark key={i} style={{ background: 'rgba(217,119,6,0.2)', color: '#92580A', borderRadius: 3, padding: '0 2px' }}>{part}</mark>
                    : <span key={i}>{part}</span>
            )}
        </>
    )
}

// ─── Inner component ──────────────────────────────────────────────────────────
function RecipesInner() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const urlSearch = searchParams.get('search') ?? ''
    const [activeCategory, setActiveCategory] = useState('All')
    const [activeRegion, setActiveRegion] = useState('All Regions')
    const [localQuery, setLocalQuery] = useState(urlSearch)
    const [hovered, setHovered] = useState<string | null>(null)

    useEffect(() => { setLocalQuery(urlSearch) }, [urlSearch])

    const filtered = useMemo(() => {
        const q = localQuery.toLowerCase().trim()
        return RECIPES.filter(r => {
            const catMatch = activeCategory === 'All' || r.category === activeCategory
            const regionMatch = activeRegion === 'All Regions' || r.region === activeRegion
            const searchMatch = !q || (
                r.title.toLowerCase().includes(q) ||
                r.subtitle.toLowerCase().includes(q) ||
                r.description.toLowerCase().includes(q) ||
                r.tags.some(t => t.toLowerCase().includes(q)) ||
                r.category.toLowerCase().includes(q) ||
                r.region.toLowerCase().includes(q)
            )
            return catMatch && regionMatch && searchMatch
        })
    }, [activeCategory, activeRegion, localQuery])

    const clearSearch = () => { setLocalQuery(''); router.replace('/recipes') }

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');
                * { box-sizing: border-box; }
                .recipe-card { background:white; border-radius:20px; overflow:hidden; border:1px solid rgba(75,46,26,0.07); transition:all 0.35s cubic-bezier(0.34,1.56,0.64,1); cursor:pointer; text-decoration:none; display:block; }
                .recipe-card:hover { transform:translateY(-6px); box-shadow:0 24px 60px rgba(75,46,26,0.13); border-color:rgba(217,119,6,0.2); }
                .recipe-card:hover .r-img { transform:scale(1.07); }
                .r-img { transition:transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
                .filter-pill { border:1.5px solid rgba(75,46,26,0.12); border-radius:100px; padding:7px 18px; font-size:13px; font-weight:500; color:rgba(75,46,26,0.55); background:transparent; cursor:pointer; transition:all 0.18s; white-space:nowrap; font-family:inherit; }
                .filter-pill:hover { color:#D97706; border-color:rgba(217,119,6,0.4); }
                .filter-pill.active { background:#4B2E1A; color:white; border-color:#4B2E1A; }
                .search-bar { background:white; border:1.5px solid rgba(75,46,26,0.1); border-radius:100px; padding:10px 18px 10px 44px; font-size:14px; font-family:inherit; color:#4B2E1A; outline:none; transition:border-color 0.2s,box-shadow 0.2s; width:100%; max-width:320px; }
                .search-bar:focus { border-color:#D97706; box-shadow:0 0 0 3px rgba(217,119,6,0.1); }
                .search-bar::placeholder { color:rgba(75,46,26,0.35); }
                .tag-chip { font-size:10px; font-weight:600; letter-spacing:0.04em; color:rgba(75,46,26,0.45); background:rgba(75,46,26,0.05); padding:3px 9px; border-radius:6px; }
            `}</style>

            {/* HERO */}
            <section style={{ background: 'linear-gradient(135deg,#FEF3E2 0%,#FDE8C5 60%,#FBD99A 100%)', paddingTop: 120, paddingBottom: 64, paddingLeft: 20, paddingRight: 20 }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                        <div style={{ width: 32, height: 1.5, background: '#D97706' }} />
                        <span style={{ color: '#D97706', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>FlavorNest Vietnam</span>
                    </div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px,6vw,72px)', fontWeight: 700, color: '#2D1A0E', lineHeight: 1.05, margin: '0 0 16px' }}>
                        {localQuery
                            ? <>Search: <span style={{ color: '#D97706', fontStyle: 'italic' }}>"{localQuery}"</span></>
                            : <>Explore All <span style={{ color: '#D97706', fontStyle: 'italic' }}>Recipes</span></>
                        }
                    </h1>
                    <p style={{ color: 'rgba(75,46,26,0.6)', fontSize: 17, maxWidth: 480, lineHeight: 1.65, margin: '0 0 28px' }}>
                        100+ authentic Vietnamese recipes — from Hanoi's misty mornings to Saigon's vibrant street corners.
                    </p>
                    <div style={{ display: 'flex', gap: 28 }}>
                        {[['100+', 'Recipes'], ['3', 'Regions'], ['4.8★', 'Avg Rating']].map(([num, label]) => (
                            <div key={label}>
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#2D1A0E' }}>{num}</div>
                                <div style={{ fontSize: 12, color: 'rgba(75,46,26,0.5)', fontWeight: 500, letterSpacing: '0.05em' }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FILTER BAR */}
            <div style={{ position: 'sticky', top: 72, zIndex: 40, background: 'rgba(250,250,247,0.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(75,46,26,0.07)', padding: '12px 20px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 8, overflowX: 'auto', alignItems: 'center', flexWrap: 'nowrap' }}>
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                        <span style={{ position: 'absolute', left: 15, top: '50%', transform: 'translateY(-50%)', color: '#D97706', fontSize: 15 }}>🔍</span>
                        <input className="search-bar" type="text" placeholder="Tìm công thức..." value={localQuery} onChange={e => setLocalQuery(e.target.value)} aria-label="Search recipes" />
                        {localQuery && (
                            <button onClick={clearSearch} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(75,46,26,0.4)', fontSize: 16 }}>✕</button>
                        )}
                    </div>
                    <div style={{ width: 1, height: 22, background: 'rgba(75,46,26,0.1)', margin: '0 4px', flexShrink: 0 }} />
                    {CATEGORIES.map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)} className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}>{cat}</button>
                    ))}
                    <div style={{ width: 1, height: 22, background: 'rgba(75,46,26,0.1)', margin: '0 2px', flexShrink: 0 }} />
                    {REGIONS.map(r => (
                        <button key={r} onClick={() => setActiveRegion(r)} className={`filter-pill ${activeRegion === r ? 'active' : ''}`}>{r}</button>
                    ))}
                </div>
            </div>

            {/* SEARCH BANNER */}
            <AnimatePresence>
                {localQuery && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        style={{ background: 'rgba(217,119,6,0.07)', borderBottom: '1px solid rgba(217,119,6,0.15)' }}
                    >
                        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                            <p style={{ fontSize: 14, color: '#92580A', margin: 0, fontWeight: 500 }}>
                                Tìm thấy <strong>{filtered.length}</strong> công thức cho <strong>"{localQuery}"</strong>
                            </p>
                            <button onClick={clearSearch} style={{ fontSize: 12, color: '#D97706', fontWeight: 600, background: 'none', border: '1px solid rgba(217,119,6,0.3)', borderRadius: 100, padding: '4px 14px', cursor: 'pointer', fontFamily: 'inherit' }}>
                                Xóa tìm kiếm ✕
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* GRID */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 20px 80px' }}>
                {!localQuery && (
                    <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.4)', marginBottom: 28, fontWeight: 500 }}>
                        {filtered.length} recipes found
                    </p>
                )}

                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeCategory}-${activeRegion}-${localQuery}`}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 24 }}
                    >
                        {filtered.map((recipe, i) => (
                            <motion.div
                                key={recipe.slug}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                            >
                                <Link
                                    href={`/recipes/${recipe.slug}`}
                                    className="recipe-card"
                                    onMouseEnter={() => setHovered(recipe.slug)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    {/* Image */}
                                    <div style={{ position: 'relative', height: 220, overflow: 'hidden', background: '#f0ebe4' }}>
                                        <Image
                                            src={recipe.image} alt={recipe.title} fill
                                            sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                                            className="r-img" style={{ objectFit: 'cover' }} quality={80}
                                        />
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.4) 0%,transparent 55%)', opacity: hovered === recipe.slug ? 1 : 0, transition: 'opacity 0.3s' }} />

                                        {/* Category badge */}
                                        <span style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', color: '#4B2E1A', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100 }}>
                                            {recipe.category}
                                        </span>

                                        {/* Time badge */}
                                        <span style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)', color: 'white', fontSize: 11, fontWeight: 500, padding: '5px 11px', borderRadius: 100 }}>
                                            ⏱ {recipe.time}
                                        </span>

                                        {/* Difficulty */}
                                        <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                                            <div style={{ width: 7, height: 7, borderRadius: '50%', background: DIFF_COLOR[recipe.difficulty] }} />
                                            <span style={{ color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{recipe.difficulty}</span>
                                        </div>

                                        {/* ♥ Heart button */}
                                        <HeartButton slug={recipe.slug} recipe={recipe} />
                                    </div>

                                    {/* Card body */}
                                    <div style={{ padding: '18px 20px 20px' }}>
                                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#D97706', textTransform: 'uppercase', marginBottom: 6 }}>
                                            {recipe.region} Vietnam
                                        </div>
                                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#2D1A0E', margin: '0 0 2px', lineHeight: 1.2 }}>
                                            <Highlight text={recipe.title} query={localQuery} />
                                        </h2>
                                        <p style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)', fontStyle: 'italic', margin: '0 0 10px' }}>
                                            <Highlight text={recipe.subtitle} query={localQuery} />
                                        </p>
                                        <p style={{ fontSize: 13.5, color: 'rgba(75,46,26,0.62)', lineHeight: 1.6, margin: '0 0 14px' }}>
                                            <Highlight text={recipe.description} query={localQuery} />
                                        </p>
                                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                                            {recipe.tags.map(tag => <span key={tag} className="tag-chip">{tag}</span>)}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 13, borderTop: '1px solid rgba(75,46,26,0.07)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                                <span style={{ color: '#D97706', fontSize: 13, fontWeight: 700 }}>★ {recipe.rating}</span>
                                                <span style={{ color: 'rgba(75,46,26,0.35)', fontSize: 12 }}>({recipe.reviews})</span>
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
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '80px 20px' }}>
                        <div style={{ fontSize: 48, marginBottom: 14 }}>🔍</div>
                        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontStyle: 'italic', color: 'rgba(75,46,26,0.5)' }}>
                            Không tìm thấy công thức cho "{localQuery}"
                        </p>
                        <button onClick={clearSearch} style={{ marginTop: 16, padding: '10px 24px', borderRadius: 100, border: '1.5px solid rgba(75,46,26,0.15)', background: 'transparent', color: '#D97706', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                            Xóa tìm kiếm
                        </button>
                    </motion.div>
                )}
            </section>
        </main>
    )
}

export default function RecipesPage() {
    return (
        <Suspense fallback={
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAFAF7' }}>
                <div style={{ textAlign: 'center', color: 'rgba(75,46,26,0.4)' }}>
                    <div style={{ fontSize: 36, marginBottom: 12 }}>🍜</div>
                    <p style={{ fontFamily: 'system-ui' }}>Loading recipes...</p>
                </div>
            </div>
        }>
            <RecipesInner />
        </Suspense>
    )
}