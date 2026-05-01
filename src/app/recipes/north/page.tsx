'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo, useCallback } from 'react'
import { Utensils, Clock, Globe, Star, Flame, Soup, BookOpen } from 'lucide-react'
// BookOpen, Flame, Soup used in footer
import { motion, AnimatePresence } from 'framer-motion'
import { useFavorites } from '@/hooks/useFavorites'
import VietnamMap from '@/components/VietnamMap'

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
        slug: 'hanoi-beef-pho',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        image: '/images/recipes/pho-bo-ha-noi.webp',
        time: '3 hrs', difficulty: 'Medium', rating: '4.9', reviews: 248, cal: 420,
        tag: 'Iconic', tagColor: '#D97706',
        description: "The national soul food — slow-charred bones, star anise and cinnamon simmered for hours into a clear, fragrant broth. Silky noodles, paper-thin beef and a plate of fresh herbs. The dish that defines Hanoi mornings and Vietnam's identity on the world stage.",
        tags: ['Beef', 'Noodles', 'Slow Cook', 'Heritage'],
    },
    {
        slug: 'bun-cha-hanoi',
        title: 'Hanoi Grilled Pork Vermicelli',
        subtitle: 'Bún Chả Hà Nội',
        image: '/images/recipes/bunchahanoi.jpg',
        time: '45 min', difficulty: 'Easy', rating: '4.7', reviews: 142, cal: 380,
        tag: 'Street Classic', tagColor: '#059669',
        description: "Chargrilled pork patties and belly strips arrive sizzling in a bowl of sweet-savory dipping broth alongside a plate of cold rice vermicelli and fresh herbs. Born on the charcoal smoke of Hanoi's old quarter streets — the dish Obama and Bourdain made famous.",
        tags: ['Pork', 'Grilled', 'Noodles', 'Street Food'],
    },
    {
        slug: 'banh-cuon',
        title: 'Steamed Rice Rolls',
        subtitle: 'Bánh Cuốn Hà Nội',
        image: '/images/recipes/banh-cuon.jpg',
        time: '45 min', difficulty: 'Medium', rating: '4.8', reviews: 167, cal: 290,
        tag: 'Morning Ritual', tagColor: '#7C3AED',
        description: "Silky translucent rice sheets steamed fresh to order on a cloth drum, rolled around seasoned minced pork and wood ear mushrooms. Topped with crispy fried shallots and served with nem chua. A Hanoi breakfast ritual performed the same way for generations.",
        tags: ['Rice Flour', 'Pork', 'Steamed', 'Heritage'],
    },
    {
        slug: 'xoi-xeo',
        title: 'Mung Bean Sticky Rice',
        subtitle: 'Xôi Xéo',
        image: '/images/recipes/xoi-xeo.jpg',
        time: '1 hr', difficulty: 'Easy', rating: '4.8', reviews: 134, cal: 380,
        tag: 'Breakfast', tagColor: '#EA580C',
        description: "Golden glutinous rice steamed over split mung bean until fragrant and soft, crowned with crispy fried shallots and turmeric scallion oil. Sold from bamboo baskets before dawn in Hanoi's markets — wrapped in banana leaf, eaten standing, the fuel of the city.",
        tags: ['Rice', 'Vegan', 'Mung Bean', 'Quick'],
    },
    {
        slug: 'cha-ca-la-vong',
        title: 'Turmeric Fish with Dill',
        subtitle: 'Chả Cá Lã Vọng',
        image: '/images/recipes/cha-ca-la-vong.jpg',
        time: '40 min', difficulty: 'Medium', rating: '4.9', reviews: 89, cal: 340,
        tag: 'Heritage', tagColor: '#D97706',
        description: "Hanoi's most celebrated dish — snakehead fish marinated in turmeric and galangal, sizzled tableside in a pan overflowing with dill and spring onion. Eaten with rice vermicelli, roasted peanuts and shrimp paste. A recipe guarded jealously on Chả Cá Street for 150 years.",
        tags: ['Fish', 'Turmeric', 'Dill', 'Heritage'],
    },
    {
        slug: 'bun-thang',
        title: 'Hanoi Vermicelli Soup',
        subtitle: 'Bún Thang',
        image: '/images/recipes/bun-thang.jpg',
        time: '2 hrs', difficulty: 'Hard', rating: '4.8', reviews: 76, cal: 310,
        tag: 'Royal Kitchen', tagColor: '#BE185D',
        description: "A dish of extraordinary refinement — crystal-clear chicken broth ladled over vermicelli, topped with gossamer egg ribbons, shredded poached chicken, Vietnamese ham and dried shrimp. Finished with a whisper of shrimp paste and aromatic garnishes. The Sunday dish of Hanoi's old families.",
        tags: ['Chicken', 'Noodles', 'Refined', 'Heritage'],
    },
    {
        slug: 'bun-dau-mam-tom',
        title: 'Vermicelli with Tofu and Shrimp Paste',
        subtitle: 'Bun dau mam tom',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
        difficulty: 'Easy', time: '40 min',
        rating: '4.8', reviews: 245, cal: 410, tag: 'Hanoi Lunch', tagColor: '#7C3AED',
        description: "Hanoi at its most unapologetic — a wooden tray loaded with cold vermicelli, golden-fried tofu, sliced boiled pork belly, fresh herbs and a small dish of mam tom (purple fermented shrimp paste) whipped with lime, sugar and chilli. Funky, briny, addictive. The dish that separates the curious from the converted.",
        tags: ['Pork', 'Tofu', 'Fermented', 'Hanoi'],
    },
    {
        slug: 'mien-luon',
        title: 'Glass Noodles with Crispy Eel',
        subtitle: 'Mien luon',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
        difficulty: 'Hard', time: '2 hrs',
        rating: '4.9', reviews: 189, cal: 380, tag: 'Hanoi Heritage', tagColor: '#B91C1C',
        description: "A Hanoi specialty that takes patience to do right — translucent glass noodles in a deep, faintly smoky eel broth, topped with strips of crispy fried eel, wood ear mushrooms, fried shallots and a generous shower of fresh dill. Served as soup or dry, the crisp eel against the silky noodles is the whole point.",
        tags: ['Eel', 'Glass Noodles', 'Hanoi', 'Heritage'],
    },
    {
        slug: 'banh-com',
        title: 'Hanoi Green Sticky Rice Cake',
        subtitle: 'Banh com',
        image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?auto=format&fit=crop&w=900&q=80',
        difficulty: 'Hard', time: '2 hrs',
        rating: '4.8', reviews: 132, cal: 280, tag: 'Hanoi Wedding', tagColor: '#166534',
        description: "Pale jade-green squares of young glutinous rice (com) wrapped around a sweet mung bean filling perfumed with pomelo flower water, then bound in banana leaves the colour of a deeper green. Made in autumn when the new harvest com arrives in Hanoi from Vong village, and traditionally given as wedding gifts. Delicate, faintly fragrant, unlike any other dessert.",
        tags: ['Sticky Rice', 'Mung Bean', 'Festive', 'Heritage'],
    },
    {
        slug: 'banh-chung',
        title: 'Lunar New Year Square Rice Cake',
        subtitle: 'Banh chung',
        image: 'https://images.unsplash.com/photo-1612392062798-2e8b9b6e2cfb?auto=format&fit=crop&w=900&q=80',
        difficulty: 'Hard', time: '12 hrs',
        rating: '4.9', reviews: 412, cal: 520, tag: 'Tet Tradition', tagColor: '#D97706',
        description: "The most symbolic dish of Vietnamese Tet — a perfect square of glutinous rice, mung bean and seasoned pork belly wrapped tightly in banana and dong leaves, then boiled for 10 to 12 hours over a wood fire. The rice turns deep green from the leaves; the centre, still warm, smells of wood smoke and pork fat. A 4,000-year-old recipe attributed to Prince Lang Lieu.",
        tags: ['Pork', 'Sticky Rice', 'Tet', 'Heritage'],
    },
    {
        slug: 'banh-duc',
        title: 'Steamed Rice Pudding Cake',
        subtitle: 'Banh duc',
        image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=900&q=80',
        difficulty: 'Easy', time: '1 hr',
        rating: '4.7', reviews: 156, cal: 240, tag: 'Old Hanoi', tagColor: '#0284C7',
        description: "An unfussy Northern classic with two distinct lives — banh duc nong arrives warm with a savoury pork-and-wood-ear topping in a small bowl, eaten with a spoon; banh duc lac is the cold, firm version cut into chunks and dipped in tuong, the Northern fermented soybean sauce. Both are humble, both are beloved, both taste like 1950s Hanoi.",
        tags: ['Rice', 'Pork', 'Hanoi', 'Old-School'],
    },
]

const FILTERS = ['All', 'Easy', 'Medium', 'Hard']
const DIFF_COLOR: Record<string, string> = { Easy: '#10b981', Medium: '#f59e0b', Hard: '#ef4444' }

function HeartBtn({ recipe }: { recipe: Recipe }) {
    const { toggle, isFavorite, mounted } = useFavorites()
    const liked = mounted && isFavorite(recipe.slug)
    const [burst, setBurst] = useState(false)
    const [toast, setToast] = useState<'added' | 'removed' | null>(null)

    const handleToggle = useCallback((e: React.MouseEvent) => {
        e.preventDefault(); e.stopPropagation()
        const next = !liked
        toggle({ id: recipe.slug, slug: recipe.slug, title: recipe.title, image: recipe.image, category: 'Northern', cookTime: recipe.time })
        if (next) setBurst(true)
        setToast(next ? 'added' : 'removed')
        setTimeout(() => setBurst(false), 600)
        setTimeout(() => setToast(null), 2000)
    }, [liked, recipe, toggle])

    return (
        <div style={{ position: 'absolute', bottom: 14, right: 14 }}>
            <AnimatePresence>
                {toast && (
                    <motion.div initial={{ opacity: 0, y: 6, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }}
                        style={{ position: 'absolute', bottom: 44, right: 0, background: liked ? '#4B2E1A' : 'rgba(75,46,26,0.75)', color: 'white', fontSize: 11, fontWeight: 600, padding: '5px 12px', borderRadius: 100, whiteSpace: 'nowrap', pointerEvents: 'none' }}>
                        {toast === 'added' ? '♥ Saved' : '✕ Removed'}
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button onClick={handleToggle} whileTap={{ scale: 0.82 }} aria-label={liked ? 'Remove from favorites' : 'Save recipe'}
                style={{ width: 36, height: 36, borderRadius: '50%', background: liked ? 'rgba(217,119,6,0.92)' : 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', border: liked ? 'none' : '1px solid rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: liked ? '0 4px 16px rgba(217,119,6,0.35)' : '0 2px 8px rgba(0,0,0,0.15)', transition: 'background 0.25s, box-shadow 0.25s', position: 'relative', overflow: 'hidden' }}>
                {burst && <motion.span initial={{ scale: 0.6, opacity: 0.8 }} animate={{ scale: 2.2, opacity: 0 }} transition={{ duration: 0.5 }} style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(217,119,6,0.3)', pointerEvents: 'none' }} />}
                <motion.svg width="16" height="16" viewBox="0 0 24 24" animate={burst ? { scale: [1, 1.35, 1] } : { scale: 1 }} transition={{ duration: 0.35 }}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={liked ? 'white' : 'none'} stroke={liked ? 'none' : 'rgba(75,46,26,0.5)'} strokeWidth="1.8" strokeLinecap="round" />
                </motion.svg>
            </motion.button>
        </div>
    )
}

export default function NorthernCuisinePage() {
    const [filter, setFilter] = useState('All')
    const filtered = useMemo(() => RECIPES.filter(r => filter === 'All' || r.difficulty === filter), [filter])

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif", color: '#2D1A0E' }}>
            <style>{`
                * { box-sizing: border-box; }
                .r-card { background: white; border: 1px solid rgba(75,46,26,0.08); border-radius: 24px; overflow: hidden; text-decoration: none; display: block; transition: transform 0.33s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s, border-color 0.2s; }
                .r-card:hover { transform: translateY(-7px); box-shadow: 0 28px 60px rgba(75,46,26,0.13); border-color: rgba(217,119,6,0.22); }
                .r-card:hover .r-img { transform: scale(1.07); }
                .r-img { transition: transform 0.55s ease; }
                .pill-f { border: 1px solid rgba(75,46,26,0.15); border-radius: 100px; padding: 8px 20px; font-size: 13px; font-weight: 500; color: rgba(75,46,26,0.6); background: white; cursor: pointer; transition: all 0.2s; white-space: nowrap; font-family: inherit; }
                .pill-f:hover { color: #2D1A0E; border-color: rgba(75,46,26,0.4); }
                .pill-f.on { background: #D97706; color: white; border-color: #D97706; }
                .tag { font-size: 10px; font-weight: 600; color: rgba(75,46,26,0.45); background: rgba(75,46,26,0.05); padding: 3px 9px; border-radius: 6px; letter-spacing: 0.03em; }
            `}</style>

            {/* ── HERO ── */}
            <section style={{ background: 'linear-gradient(135deg, #FEF3E2 0%, #FDEAC8 55%, #F5EDE3 100%)', padding: '88px 24px 48px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 40, right: '6%', width: 280, height: 280, borderRadius: '50%', background: 'rgba(217,119,6,0.07)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
                    <div>
                        <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 24 }}>
                            {[['Home', '/'], ['Recipes', '/recipes'], ['Northern', '']].map(([label, href], i) => (
                                <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    {i > 0 && <span style={{ color: 'rgba(75,46,26,0.3)' }}>›</span>}
                                    {href ? <Link href={href} style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                        : <span style={{ color: '#D97706', fontWeight: 600 }}>{label}</span>}
                                </span>
                            ))}
                        </nav>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                            <div style={{ width: 32, height: 1.5, background: '#D97706' }} />
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Hanoi & The North</span>
                        </div>
                        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: '#2D1A0E', margin: '0 0 18px', lineHeight: 1.0 }}>
                            Northern<br /><span style={{ color: '#D97706', fontStyle: 'italic' }}>Cuisine</span>
                        </h1>
                        <p style={{ color: 'rgba(75,46,26,0.62)', fontSize: 17, maxWidth: 500, lineHeight: 1.75, margin: '0 0 36px' }}>
                            From the dawn pho stalls of Hanoi to the smoky bún chả of Lê Văn Hưu street — Northern Vietnamese cuisine is defined by restraint, clarity, and the quiet confidence of a thousand-year capital.
                        </p>
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <VietnamMap region="north" size={300} />
                    </div>
                </div>
            </section>

            {/* ── FILTER + GRID ── */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 96px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 32 }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                            <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>The Collection</span>
                        </div>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>All Northern Recipes</h2>
                    </div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {FILTERS.map(f => <button key={f} onClick={() => setFilter(f)} className={`pill-f ${filter === f ? 'on' : ''}`}>{f}</button>)}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: 24 }}>
                        {filtered.map((recipe, i) => (
                            <motion.div key={recipe.slug} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
                                <Link href={`/recipes/${recipe.slug}`} className="r-card">
                                    <div style={{ position: 'relative', height: 230, overflow: 'hidden', background: '#1a1410' }}>
                                        <Image src={recipe.image} alt={recipe.title} fill className="r-img" style={{ objectFit: 'cover', opacity: 0.9 }} sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" quality={80} />
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)' }} />
                                        <div style={{ position: 'absolute', top: 14, left: 14, background: recipe.tagColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '5px 13px', borderRadius: 100 }}>{recipe.tag}</div>
                                        <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.38)', backdropFilter: 'blur(6px)', color: 'white', fontSize: 11, fontWeight: 500, padding: '5px 11px', borderRadius: 100 }}>⏱ {recipe.time}</div>
                                        <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 5 }}>
                                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: DIFF_COLOR[recipe.difficulty] }} />
                                            <span style={{ color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>{recipe.difficulty}</span>
                                        </div>
                                        <div style={{ position: 'absolute', bottom: 14, right: 54, color: 'rgba(255,255,255,0.65)', fontSize: 10, fontWeight: 600 }}>{recipe.cal} kcal</div>
                                        <HeartBtn recipe={recipe} />
                                    </div>
                                    <div style={{ padding: '18px 20px 22px' }}>
                                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: '#2D1A0E', margin: '0 0 2px', lineHeight: 1.2 }}>{recipe.title}</h3>
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
                        <div style={{ fontSize: 44, marginBottom: 12 }}>🍜</div>
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
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, color: '#2D1A0E', margin: '0 0 36px' }}>Explore Other Regions</h2>
                    <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                        {[
                            { label: 'Central Cuisine', sub: 'Thanh Hoa to Binh Thuan', Icon: Flame, href: '/recipes/central' },
                            { label: 'Southern Cuisine', sub: 'Ninh Thuan to Ca Mau', Icon: Soup, href: '/recipes/southern' },
                            { label: 'Street Food', sub: 'On streets everywhere', Icon: Utensils, href: '/recipes/street-food' },
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 48 }}>
                        <VietnamMap region="north" size={140} />
                    </div>
                </div>
            </section>
        </main>
    )
}
