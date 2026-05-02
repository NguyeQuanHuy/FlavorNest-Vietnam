'use client'

/**
 * FlavorNest Vietnam — Central Cuisine Page
 * src/app/recipes/central/page.tsx
 */

import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Utensils, Clock, Globe, Star, Castle, Palmtree, Soup, IceCream, Map, BookOpen } from 'lucide-react'
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
        slug: 'bun-bo-hue',
        title: 'Hue Spicy Beef Noodle Soup',
        subtitle: 'Bun bo Hue',
        image: '/images/recipes/bun-bo-hue.jpg',
        difficulty: 'Hard', time: '2.5 hrs',
        rating: '4.9', reviews: 312, cal: 480, tag: "Hue's Finest", tagColor: '#DC2626',
        description: "The dish that deserves more global fame than it gets. Lemongrass-perfumed beef broth, thick round noodles, sliced beef shank, pork knuckle and crab paste — bold, spicy, deeply aromatic. The royal city's greatest contribution to Vietnamese cuisine.",
        tags: ['Beef', 'Spicy', 'Lemongrass', 'Slow Cook'],
    },
    {
        slug: 'cao-lau',
        title: 'Hoi An Cao Lau Noodles',
        subtitle: 'Cao lau Hoi An',
        image: '/images/recipes/cao-lau.jpg',
        difficulty: 'Medium', time: '1 hr',
        rating: '4.9', reviews: 287, cal: 420, tag: 'Hoi An Only', tagColor: '#7C3AED',
        description: "A dish so unique it can only truly be made in Hoi An — legend says the noodles require water from a single ancient well in the old town. Thick ash-treated noodles with roasted pork, crispy rice crackers and fresh herbs. Quietly extraordinary.",
        tags: ['Pork', 'Noodles', 'Heritage', 'Unique'],
    },
    {
        slug: 'mi-quang',
        title: 'Quang-Style Turmeric Noodles',
        subtitle: 'Mi Quang',
        image: '/images/recipes/mi-quang.jpg',
        difficulty: 'Medium', time: '1.5 hrs',
        rating: '4.8', reviews: 198, cal: 440, tag: 'Da Nang Staple', tagColor: '#D97706',
        description: "Wide turmeric-yellow noodles with just enough broth to coat — not a soup, not a dry dish. Topped with shrimp, pork, quail eggs, peanuts and sesame rice crackers. The pride of Quảng Nam province.",
        tags: ['Shrimp', 'Pork', 'Turmeric', 'Noodles'],
    },
    {
        slug: 'banh-beo',
        title: 'Steamed Rice Cakes with Shrimp',
        subtitle: 'Banh beo',
        image: '/images/recipes/banh-beo.jpg',
        difficulty: 'Medium', time: '45 min',
        rating: '4.7', reviews: 143, cal: 280, tag: 'Royal Snack', tagColor: '#BE185D',
        description: "Delicate steamed rice flour discs the size of a saucer, served in small clay bowls, topped with dried shrimp, scallion oil and a drizzle of fish sauce. A traditional Hue snack eaten one tiny bowl at a time.",
        tags: ['Rice', 'Shrimp', 'Steamed', 'Hue'],
    },
    {
        slug: 'com-hen',
        title: 'Baby Clam Rice',
        subtitle: 'Com hen',
        image: '/images/recipes/com-hen.jpg',
        difficulty: 'Medium', time: '1 hr',
        rating: '4.8', reviews: 167, cal: 380, tag: 'Hue Hidden Gem', tagColor: '#059669',
        description: "One of Hue's most beloved and least-known dishes — tiny river clams stir-fried with lemongrass and chilli, served over cold rice with a complex array of toppings: herbs, peanuts, sesame, cracklings and fermented shrimp paste.",
        tags: ['Clams', 'Rice', 'Fermented', 'Spicy'],
    },
    {
        slug: 'banh-xeo-mien-trung',
        title: 'Central-Style Sizzling Crepe',
        subtitle: 'Banh xeo mien Trung',
        image: '/images/recipes/banh-xeo-mien-trung.jpg',
        difficulty: 'Medium', time: '40 min',
        rating: '4.7', reviews: 134, cal: 350, tag: 'Street Favourite', tagColor: '#EA580C',
        description: "Smaller and crispier than the southern version — Central Vietnamese bánh xèo uses less batter and more heat, creating a thinner, crunchier shell filled with shrimp, pork and bean sprouts. Eaten wrapped in mustard leaf with nuoc cham.",
        tags: ['Shrimp', 'Pork', 'Crispy', 'Central'],
    },
    {
        slug: 'banh-nam',
        title: 'Flat Steamed Rice Dumplings',
        subtitle: 'Banh nam',
        image: '/images/recipes/banh-nam.jpg',
        difficulty: 'Hard', time: '1.5 hrs',
        rating: '4.6', reviews: 98, cal: 240, tag: 'Hue Heritage', tagColor: '#166534',
        description: "Paper-thin parcels of rice flour, steamed in banana leaf with a filling of seasoned ground pork and wood ear mushroom. One of the most delicate dumplings in Vietnamese cuisine — the banana leaf imparts a subtle fragrance you cannot replicate.",
        tags: ['Pork', 'Banana Leaf', 'Steamed', 'Delicate'],
    },
    {
        slug: 'chao-long-hue',
        title: 'Hue Pork Congee',
        subtitle: 'Chao long Hue',
        image: '/images/recipes/chao-long-hue.jpg',
        difficulty: 'Easy', time: '1.5 hrs',
        rating: '4.7', reviews: 112, cal: 320, tag: 'Morning Comfort', tagColor: '#D97706',
        description: "Silky rice porridge enriched with pork offal, fresh herbs, ginger and a scattering of fried shallots. Hue's version is more deeply flavoured than other regions — a warming, restorative bowl eaten at dawn in narrow shophouse restaurants.",
        tags: ['Pork', 'Congee', 'Comfort', 'Breakfast'],
    },
    {
        slug: 'phu-yen-chives-noodle-soup',
        title: 'Phu Yen Chives Noodle Soup',
        subtitle: 'Banh canh he Phu Yen',
        image: '/images/recipes/phu-yen-chives-noodle-soup.jpg',
        difficulty: 'Medium', time: '1 hr 30 min',
        rating: '4.9', reviews: 87, cal: 385, tag: 'Phu Yen Special', tagColor: '#0284C7',
        description: 'Thick chewy noodles in a clear pork and dried anchovy broth, finished with a generous handful of fresh garlic chives. The breakfast of Phu Yen province.',
        tags: ['Coastal', 'Pork', 'Noodles', 'Hometown'],
    },
    {
        slug: 'ga-la-e-phu-yen',
        title: 'Phu Yen Litsea Leaf Chicken',
        subtitle: 'Ga la e Phu Yen',
        image: '/images/recipes/ga-la-e-phu-yen.jpg',
        difficulty: 'Medium', time: '45 min',
        rating: '4.8', reviews: 64, cal: 340, tag: 'Phu Yen Hidden Gem', tagColor: '#166534',
        description: 'Free-range chicken stir-fried with fresh litsea leaves (la e) — a wild herb unique to the central highlands. Intensely aromatic, slightly citrusy, and completely unlike anything else in Vietnamese cuisine.',
        tags: ['Chicken', 'Herbs', 'Phu Yen', 'Unique'],
    },
    {
        slug: 'nem-lui',
        title: 'Hue Lemongrass Pork Skewers',
        subtitle: 'Nem lui Hue',
        image: '/images/recipes/nem-lui.jpg',
        difficulty: 'Medium', time: '50 min',
        rating: '4.9', reviews: 234, cal: 380, tag: 'Imperial Hue', tagColor: '#B91C1C',
        description: "Lemongrass stalks wrapped with seasoned ground pork, then grilled over charcoal until the meat caramelises and the lemongrass perfumes every bite. A Hue royal court speciality eaten DIY-style: each guest wraps the hot skewer in rice paper with herbs, green banana, star fruit and pickles, then dunks it in a thick golden peanut-liver sauce that is unique to the city.",
        tags: ['Pork', 'Lemongrass', 'Grilled', 'Hue'],
    },
    {
        slug: 'chao-canh',
        title: 'Quang Binh Thick Noodle Soup',
        subtitle: 'Chao canh Quang Binh',
        image: '/images/recipes/chao-canh.jpg',
        difficulty: 'Medium', time: '1 hr 30 min',
        rating: '4.7', reviews: 142, cal: 410, tag: 'Quang Binh Pride', tagColor: '#0284C7',
        description: "A Central coastal speciality from Quang Binh province — hand-rolled flat wheat noodles, rougher and chewier than industrial pasta, served in a clear pork broth with shrimp, sliced fish cake and a fistful of fresh herbs. The broth is gentle, the noodles are the point. A breakfast dish that locals defend fiercely against any other province claiming it.",
        tags: ['Pork', 'Wheat Noodles', 'Coastal', 'Quang Binh'],
    },
    {
        slug: 'goi-ca-nam-o',
        title: 'Da Nang Raw Fish Salad',
        subtitle: 'Goi ca Nam O',
        image: '/images/recipes/goi-ca-nam-o.jpg',
        difficulty: 'Hard', time: '45 min',
        rating: '4.8', reviews: 167, cal: 320, tag: 'Da Nang Coastal', tagColor: '#059669',
        description: "From the fishing village of Nam O on the outskirts of Da Nang — paper-thin slices of raw herring or anchovy 'cooked' in lime juice and rolled with green banana, star fruit, fresh herbs and roasted rice powder in soft rice paper, then dunked in a thick mam nem peanut sauce. Briny, bright, intensely fresh. Vietnam's answer to ceviche.",
        tags: ['Raw Fish', 'Herbs', 'Coastal', 'Da Nang'],
    },
    {
        slug: 'muc-nuong-phan-thiet',
        title: 'Phan Thiet Grilled Squid',
        subtitle: 'Muc nuong Phan Thiet',
        image: '/images/recipes/muc-nuong-phan-thiet.jpg',
        difficulty: 'Easy', time: '25 min',
        rating: '4.8', reviews: 198, cal: 280, tag: 'Beach Town', tagColor: '#DC2626',
        description: "On the beach in Phan Thiet, fishermen grill the morning's catch right on the sand — fresh squid scored, brushed with fish sauce caramel, and charred over coconut husks until the tentacles curl and blister. Served with green salt (muoi tieu chanh) and a cold bottle of beer. The simplest possible cooking, the most unforgettable result.",
        tags: ['Squid', 'Grilled', 'Coastal', 'Beach'],
    },
    {
        slug: 'bun-mam-nem',
        title: 'Vermicelli with Anchovy Sauce',
        subtitle: 'Bun mam nem',
        image: '/images/recipes/bun-mam-nem.jpg',
        difficulty: 'Easy', time: '40 min',
        rating: '4.7', reviews: 156, cal: 380, tag: 'Da Nang Lunch', tagColor: '#7C3AED',
        description: "Da Nang at lunchtime — cold rice vermicelli piled high with sliced boiled pork, fried tofu, fresh herbs and a thick reddish dipping sauce of fermented anchovies, pineapple, lime, garlic and chilli. The sauce is the entire dish: pungent, sweet, sour and spicy at once. Once you understand mam nem, every other dipping sauce feels polite.",
        tags: ['Pork', 'Vermicelli', 'Fermented', 'Da Nang'],
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
        toggle({ id: recipe.slug, slug: recipe.slug, title: recipe.title, image: recipe.image, category: 'Southern', cookTime: recipe.time })
        if (next) setBurst(true)
        setToast(next ? 'added' : 'removed')
        setTimeout(() => setBurst(false), 600)
        setTimeout(() => setToast(null), 2000)
    }, [liked, recipe, toggle])

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
            <motion.button onClick={handleToggle} whileTap={{ scale: 0.82 }} aria-label={liked ? 'Remove from favorites' : 'Save recipe'}
                style={{ width: 36, height: 36, borderRadius: '50%', background: liked ? 'rgba(217,119,6,0.92)' : 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', border: liked ? 'none' : '1px solid rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: liked ? '0 4px 16px rgba(217,119,6,0.35)' : '0 2px 8px rgba(0,0,0,0.15)', transition: 'background 0.25s', position: 'relative', overflow: 'hidden' }}>
                {burst && <motion.span initial={{ scale: 0.6, opacity: 0.8 }} animate={{ scale: 2.2, opacity: 0 }} transition={{ duration: 0.5 }} style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(217,119,6,0.3)', pointerEvents: 'none' }} />}
                <motion.svg width="16" height="16" viewBox="0 0 24 24" animate={burst ? { scale: [1, 1.35, 1] } : { scale: 1 }} transition={{ duration: 0.35 }}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={liked ? 'white' : 'none'} stroke={liked ? 'none' : 'rgba(75,46,26,0.5)'} strokeWidth="1.8" strokeLinecap="round" />
                </motion.svg>
            </motion.button>
        </div>
    )
}

export default function CentralCuisinePage() {
    const [diff, setDiff] = useState('All')
    const filtered = useMemo(() => RECIPES.filter(r => diff === 'All' || r.difficulty === diff), [diff])

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif", color: '#2D1A0E' }}>
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
            <section style={{ background: 'linear-gradient(135deg, #FEF3E2 0%, #FDEAC8 55%, #F5EDE3 100%)', padding: '88px 24px 24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 40, right: '6%', width: 280, height: 280, borderRadius: '50%', background: 'rgba(217,119,6,0.07)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
                    <div>
                        {/* Breadcrumb */}
                        <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 24 }}>
                            {[['Home', '/'], ['Recipes', '/recipes'], ['Central', '']].map(([label, href], i) => (
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
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Huế, Hội An & The Coast</span>
                        </div>

                        {/* Title */}
                        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: '#2D1A0E', margin: '0 0 18px', lineHeight: 1.0 }}>
                            Central<br /><span style={{ color: '#D97706', fontStyle: 'italic' }}>Cuisine</span>
                        </h1>

                        {/* Subtitle */}
                        <p style={{ color: 'rgba(75,46,26,0.62)', fontSize: 17, maxWidth: 500, lineHeight: 1.75, margin: '0 0 36px' }}>
                            Imperial courts in Huế, lantern-lit alleys in Hội An, fishing villages along the South China Sea — Central Vietnamese cuisine is bold, spicy, and unapologetically complex.
                        </p>

                        {/* Stats */}
                        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                            {[
                                { Icon: Utensils, val: `${RECIPES.length}`, lbl: 'Recipes' },
                                { Icon: Clock, val: '30 min', lbl: 'Quickest' },
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
                    <div style={{ position: 'relative', width: 240, alignSelf: 'stretch', minHeight: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <VietnamMap region="central" size={280} />
                    </div>
                </div>
            </section>

            {/* GRID */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 96px' }}>
                <AnimatePresence mode="wait">
                    <motion.div key={diff} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: 24 }}>
                        {filtered.map((recipe, i) => (
                            <motion.div key={recipe.slug} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
                                <Link href={`/recipes/${recipe.slug}`} className="r-card">
                                    <div style={{ position: 'relative', height: 230, overflow: 'hidden', background: '#1a0a0a' }}>
                                        <Image src={recipe.image} alt={`${recipe.title} — ${recipe.subtitle}`} fill className="r-img" style={{ objectFit: 'cover', opacity: 0.9 }} sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" quality={80} />
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(45,10,10,0.7) 0%, transparent 55%)' }} />
                                        <div style={{ position: 'absolute', top: 14, left: 14, background: recipe.tagColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '5px 13px', borderRadius: 100 }}>{recipe.tag}</div>
                                        <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)', color: 'white', fontSize: 11, fontWeight: 500, padding: '5px 11px', borderRadius: 100 }}>⏱ {recipe.time}</div>
                                        <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 5 }}>
                                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: DIFF_COLOR[recipe.difficulty] }} />
                                            <span style={{ color: 'white', fontSize: 11, fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>{recipe.difficulty}</span>
                                        </div>
                                        <HeartBtn recipe={recipe} />
                                    </div>
                                    <div style={{ padding: '18px 20px 22px' }}>
                                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#DC2626', textTransform: 'uppercase', marginBottom: 6 }}>Central Vietnam</div>
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
