'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo, useCallback } from 'react'
import { Utensils, Clock, Globe, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useFavorites } from '@/hooks/useFavorites'

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
        slug: 'pho-bo',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        image: '/images/recipes/phohanoi.jpg',
        region: 'Northern', difficulty: 'Medium', time: '3 hrs',
        rating: '4.9', reviews: 248, cal: 420, tag: 'Popular', tagColor: '#D97706',
        description: "Slow-simmered bone broth, silky rice noodles, paper-thin slices of beef — the dish that defines Hanoi mornings. The secret is in the charred ginger and onion, the star anise and cinnamon that perfume the broth for hours. Served with a plate of fresh herbs, bean sprouts and lime, it is Vietnam's most beloved bowl.",
        tags: ['Beef', 'Noodles', 'Slow Cook', 'Heritage'],
    },
    {
        slug: 'banh-mi-trung',
        title: 'Egg Banh Mi',
        subtitle: 'Bánh Mì Ốp La',
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
        region: 'Southern', difficulty: 'Easy', time: '15 min',
        rating: '4.7', reviews: 189, cal: 310, tag: 'Quick & Easy', tagColor: '#059669',
        description: "A crusty French baguette split open and loaded with a sunny-side-up egg, chicken pâté, pickled daikon and carrots, fresh cucumber, cilantro and a generous drizzle of Maggi seasoning sauce. Saigon's answer to the breakfast sandwich — done in ten minutes, eaten on the go, impossible to improve.",
        tags: ['Bread', 'Eggs', 'Quick', 'Street Food'],
    },
    {
        slug: 'xoi-xeo',
        title: 'Mung Bean Sticky Rice',
        subtitle: 'Xôi Xéo',
        image: 'https://images.unsplash.com/photo-1579856896394-07dfa10d7c5b?auto=format&fit=crop&w=800&q=80',
        region: 'Northern', difficulty: 'Easy', time: '1 hr',
        rating: '4.8', reviews: 134, cal: 380, tag: 'Popular', tagColor: '#D97706',
        description: "Golden glutinous rice steamed over a bed of split mung bean until it turns soft and fragrant, then topped with crispy fried shallots and a drizzle of turmeric-infused scallion oil. A beloved Hanoi street breakfast sold from bamboo baskets since before dawn, wrapped in banana leaf and eaten standing up.",
        tags: ['Rice', 'Vegan', 'Mung Bean', 'Northern'],
    },
    {
        slug: 'banh-cuon',
        title: 'Steamed Rice Rolls',
        subtitle: 'Bánh Cuốn',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
        region: 'Northern', difficulty: 'Medium', time: '45 min',
        rating: '4.8', reviews: 167, cal: 290, tag: 'Popular', tagColor: '#D97706',
        description: "Translucent sheets of steamed rice batter, almost impossibly thin, rolled around a filling of seasoned minced pork and wood ear mushrooms. Finished with crispy fried shallots, a scattering of fresh herbs and a bowl of nem chua dipping sauce. Each sheet is made to order on a cloth stretched over boiling water — breakfast as performance.",
        tags: ['Rice Flour', 'Pork', 'Steamed', 'Heritage'],
    },
    {
        slug: 'chao-long',
        title: 'Pork Congee',
        subtitle: 'Cháo Lòng',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
        region: 'Southern', difficulty: 'Easy', time: '1.5 hrs',
        rating: '4.6', reviews: 98, cal: 340, tag: 'Comfort Food', tagColor: '#7C3AED',
        description: "Silky, slow-cooked rice porridge enriched with pork offal — intestines, liver and heart — gently simmered in a ginger-scented broth until the grains dissolve into pure comfort. Finished with fried garlic, fresh ginger, a drizzle of sesame oil and a crack of white pepper. Saigon's ultimate restorative breakfast.",
        tags: ['Rice', 'Pork', 'Slow Cook', 'Comfort'],
    },
    {
        slug: 'banh-trang-tron',
        title: 'Rice Paper Salad',
        subtitle: 'Bánh Tráng Trộn',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
        region: 'Southern', difficulty: 'Easy', time: '20 min',
        rating: '4.7', reviews: 212, cal: 220, tag: 'Street Snack', tagColor: '#BE185D',
        description: "Strips of dried rice paper tossed with quail eggs, dried shrimp, green mango, taro shreds and a fiery-tangy dressing of tamarind, chilli and satay. Topped with roasted peanuts and Vietnamese coriander. Born on the streets of Saigon, this technicolour tangle is technically a snack but tastes like an event.",
        tags: ['Rice Paper', 'Vegetarian', 'Tangy', 'Quick'],
    },
    {
        slug: 'banh-hoi-chao-long',
        title: 'Woven Rice Vermicelli with Pork Congee',
        subtitle: 'Banh hoi chao long',
        image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80',
        time: '2.5 hrs',
        difficulty: 'Hard',
        rating: '4.9',
        reviews: 94,
        region: 'Central',
        cal: 460,
        description: "Feather-light woven mats of rice vermicelli served with silky pork congee, offal and fresh herbs — the dawn breakfast of Phú Yên.",
        tag: 'Breakfast',
        tagColor: '#EA580C',
        tags: ['Hearty', 'Pork', 'Comforting'],
    },
    {
        slug: 'hu-tieu',
        title: 'Southern Pork Noodle Soup',
        subtitle: 'Hủ Tiếu',
        image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=800&q=80',
        region: 'Southern', difficulty: 'Medium', time: '2 hrs',
        rating: '4.8', reviews: 234, cal: 480, tag: 'Saigon Morning', tagColor: '#D97706',
        description: "Clear pork-and-dried-squid broth crowned with shrimp, sliced pork, quail eggs and a tangle of springy rice noodles, finished with crispy garlic and chives. The Southern answer to phở — eaten 'khô' (dry, broth on the side) or 'nước' (in soup), the choice defines you. Each Mekong town has its own version: Mỹ Tho with crab, Sa Đéc with offal, Sài Gòn richest of all.",
        tags: ['Pork', 'Noodles', 'Saigon', 'Mekong'],
    },
    {
        slug: 'chao-ga',
        title: 'Vietnamese Chicken Congee',
        subtitle: 'Cháo Gà',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
        region: 'Northern', difficulty: 'Easy', time: '1 hr 30 min',
        rating: '4.7', reviews: 178, cal: 320, tag: 'Sick Day Cure', tagColor: '#0284C7',
        description: "Silky rice porridge built on a whole chicken simmered with charred ginger and onion, then shredded back into the pot at the end. Finished with fried shallots, spring onion and a violent crack of black pepper, alongside a saucer of fish sauce with fresh chilli. The soup every Vietnamese mother makes when someone has a cold — and the soup that proves she was right.",
        tags: ['Chicken', 'Congee', 'Comfort', 'Healing'],
    },
    {
        slug: 'mien-ga',
        title: 'Glass Noodle Chicken Soup',
        subtitle: 'Mien ga',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
        time: '1 hr 30 min',
        difficulty: 'Easy',
        rating: '4.7',
        reviews: 156,
        region: 'Northern',
        cal: 310,
        description: 'Translucent mung bean noodles in a fragrant chicken broth, topped with shredded poached chicken, wood ear mushrooms and a violent crack of black pepper.',
        tag: 'Breakfast',
        tagColor: '#EA580C',
        tags: ['Chicken', 'Glass Noodle', 'Light'],
    },
    {
        slug: 'xoi-man',
        title: 'Savoury Sticky Rice',
        subtitle: 'Xoi man',
        image: 'https://images.unsplash.com/photo-1579856896394-07dfa10d7c5b?auto=format&fit=crop&w=800&q=80',
        time: '50 min',
        difficulty: 'Easy',
        rating: '4.8',
        reviews: 142,
        region: 'Southern',
        cal: 460,
        description: 'Steamed glutinous rice piled high with Chinese sausage, shredded chicken, dried shrimp, fried shallots and a drizzle of soy — Saigon street breakfast in a banana leaf.',
        tag: 'Breakfast',
        tagColor: '#EA580C',
        tags: ['Sticky Rice', 'Hearty', 'Saigon'],
    },
    {
        slug: 'bun-ca',
        title: 'Vietnamese Fish Noodle Soup',
        subtitle: 'Bun ca',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
        time: '1 hr 30 min',
        difficulty: 'Medium',
        rating: '4.7',
        reviews: 124,
        region: 'Northern',
        cal: 380,
        description: 'A bright, dill-perfumed broth with crispy pan-fried fish, fish cakes and rice vermicelli — Hai Phong style. Lighter than pho, and the favourite of those who want fish, not beef, before noon.',
        tag: 'Breakfast',
        tagColor: '#EA580C',
        tags: ['Fish', 'Noodle Soup', 'Northern'],
    },
    {
        slug: 'hu-tieu-kho',
        title: 'Dry Hu Tieu',
        subtitle: 'Hu tieu kho',
        image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=800&q=80',
        time: '1 hr 30 min',
        difficulty: 'Medium',
        rating: '4.8',
        reviews: 189,
        region: 'Southern',
        cal: 520,
        description: 'Springy rice noodles tossed with sweet soy, fried garlic oil and a small mountain of toppings — shrimp, pork, ground pork, quail eggs — with a steaming bowl of pork broth on the side. Saigon mornings prefer this format.',

    },
    {
        slug: 'bo-kho',
        title: 'Vietnamese Beef Stew',
        subtitle: 'Bo kho',
        image: 'https://images.unsplash.com/photo-1604908554027-1a23a96d6b28?auto=format&fit=crop&w=800&q=80',
        time: '2 hrs 30 min',
        difficulty: 'Medium',
        rating: '4.9',
        reviews: 267,
        region: 'Southern',
        cal: 540,
        description: 'Tender chunks of beef shank slow-braised in a fragrant lemongrass-and-star-anise broth stained red with annatto — eaten with a crusty banh mi for dipping or over rice noodles. Saigon family Sunday in a pot.',

    },
]

const FILTERS = ['All', 'Easy', 'Medium', 'Hard']
const REGIONS = ['All Regions', 'Northern', 'Central', 'Southern']
const DIFF_COLOR: Record<string, string> = { Easy: '#10b981', Medium: '#f59e0b', Hard: '#ef4444' }

function HeartBtn({ recipe }: { recipe: Recipe }) {
    const { toggle, isFavorite, mounted } = useFavorites()
    const liked = mounted && isFavorite(recipe.slug)
    const [burst, setBurst] = useState(false)
    const [toast, setToast] = useState<'added' | 'removed' | null>(null)

    const handleToggle = useCallback((e: React.MouseEvent) => {
        e.preventDefault(); e.stopPropagation()
        const next = !liked
        toggle({ id: recipe.slug, slug: recipe.slug, title: recipe.title, image: recipe.image, category: 'Breakfast', cookTime: recipe.time })
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

export default function BreakfastPage() {
    const [diff, setDiff] = useState('All')
    const [region, setRegion] = useState('All Regions')

    const filtered = useMemo(() =>
        RECIPES.filter(r => (diff === 'All' || r.difficulty === diff) && (region === 'All Regions' || r.region === region))
        , [diff, region])

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
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
            <section style={{ background: 'linear-gradient(135deg, #FEF3E2 0%, #FDEAC8 55%, #F5EDE3 100%)', padding: '88px 24px 48px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 40, right: '6%', width: 280, height: 280, borderRadius: '50%', background: 'rgba(217,119,6,0.07)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 24 }}>
                        {[['Home', '/'], ['Recipes', '/recipes'], ['Breakfast', '']].map(([label, href], i) => (
                            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {i > 0 && <span style={{ color: 'rgba(75,46,26,0.3)' }}>›</span>}
                                {href ? <Link href={href} style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                    : <span style={{ color: '#D97706', fontWeight: 600 }}>{label}</span>}
                            </span>
                        ))}
                    </nav>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                        <div style={{ width: 32, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>The Morning Ritual</span>
                    </div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: '#2D1A0E', margin: '0 0 18px', lineHeight: 1.0 }}>
                        Vietnamese<br /><span style={{ color: '#D97706', fontStyle: 'italic' }}>Breakfast</span>
                    </h1>
                    <p style={{ color: 'rgba(75,46,26,0.62)', fontSize: 17, maxWidth: 500, lineHeight: 1.75, margin: '0 0 36px' }}>
                        Start your day the Vietnamese way — from steaming bowls of phở to crispy bánh mì, these are the morning meals that fuel a nation.
                    </p>
                    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                        {[
                            { Icon: Utensils, val: `${RECIPES.length}`, lbl: 'Recipes' },
                            { Icon: Clock, val: '15 min', lbl: 'Quickest' },
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
                                    <div style={{ position: 'relative', height: 230, overflow: 'hidden', background: '#f0ebe4' }}>
                                        <Image src={recipe.image} alt={`${recipe.title} Vietnamese breakfast recipe`} fill className="r-img" style={{ objectFit: 'cover' }} sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" quality={80} />
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
                        <div style={{ fontSize: 44, marginBottom: 12 }}>🌅</div>
                        <p style={{ fontSize: 16, fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>No recipes match this filter.</p>
                    </div>
                )}
            </section>

            {/* ── OTHER CATEGORIES ── */}
            {/* ── OTHER CATEGORIES ── */}
            <section style={{ borderTop: '1px solid rgba(75,46,26,0.08)', padding: '64px 32px 88px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Keep Exploring</span>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, color: '#2D1A0E', margin: '0 0 36px' }}>More to Discover</h2>
                    <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                        {[
                            { label: 'Main Dishes', sub: 'The heart of the table', Icon: Utensils, href: '/recipes/main-dishes' },
                            { label: 'Street Food', sub: 'On streets everywhere', Icon: Clock, href: '/recipes/street-food' },
                            { label: 'Desserts', sub: 'Sweet endings', Icon: Star, href: '/recipes/desserts' },
                            { label: 'All Recipes', sub: 'Browse everything', Icon: Globe, href: '/recipes' },
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
