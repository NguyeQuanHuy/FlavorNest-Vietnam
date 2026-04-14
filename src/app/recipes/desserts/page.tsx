'use client'

/**
 * FlavorNest Vietnam — Desserts Page
 * app/recipes/desserts/page.tsx
 *
 * Design: Warm cream + rose gold editorial — "sweet magazine spread"
 * Motion: Framer Motion staggered grid, hero parallax, card lifts
 * SEO: generateMetadata exported at bottom
 */

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useMemo } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

// ─── Types ────────────────────────────────────────────────────────────────────
type DessertType = 'All' | 'Traditional' | 'Chè' | 'Bánh' | 'Frozen' | 'Fusion'

interface Dessert {
    slug: string
    name: string          // English
    viet: string          // Vietnamese
    type: DessertType
    image: string
    description: string   // Emotional hook
    story: string         // One evocative line
    prepTime: string
    cookTime: string
    totalTime: string
    servings: number
    difficulty: 'Easy' | 'Medium' | 'Hard'
    cal: number
    tags: string[]
    isSignature?: boolean
}

// ─── Dessert Data ──────────────────────────────────────────────────────────────
const DESSERTS: Dessert[] = [
    {
        slug: 'che-ba-mau',
        name: 'Three-Colour Dessert',
        viet: 'Chè Ba Màu',
        type: 'Chè',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85',
        description: 'Saigon\'s most photogenic glass — layers of mung bean, red jelly, and pandan jelly over crushed ice, crowned with coconut cream.',
        story: 'Order one at any Chợ Bến Thành stall and the world slows down to the pace of slowly melting ice.',
        prepTime: '30 min',
        cookTime: '20 min',
        totalTime: '50 min',
        servings: 4,
        difficulty: 'Easy',
        cal: 280,
        tags: ['Coconut', 'Vegan', 'No-Bake'],
        isSignature: true,
    },
    {
        slug: 'banh-flan',
        name: 'Vietnamese Caramel Flan',
        viet: 'Bánh Flan',
        type: 'Fusion',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85',
        description: 'Silky, trembling custard with a pool of dark caramel — a French inheritance that Vietnam made its own, often served over crushed ice.',
        story: 'The French left behind their language and their flan. Vietnam kept the flan and improved it.',
        prepTime: '15 min',
        cookTime: '40 min',
        totalTime: '3 hrs',
        servings: 6,
        difficulty: 'Medium',
        cal: 220,
        tags: ['Egg', 'Classic', 'French-Inspired'],
        isSignature: true,
    },
    {
        slug: 'che-thai',
        name: 'Thai-Style Fruit Dessert',
        viet: 'Chè Thái',
        type: 'Chè',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85',
        description: 'A tropical abundance — jackfruit, lychee, toddy palm seeds, grass jelly, and water chestnuts swimming in sweetened coconut milk over ice.',
        story: 'It tastes like a Saigon summer afternoon feels — sweet, abundant, a little chaotic, completely wonderful.',
        prepTime: '20 min',
        cookTime: '10 min',
        totalTime: '30 min',
        servings: 4,
        difficulty: 'Easy',
        cal: 310,
        tags: ['Tropical', 'Vegan', 'No-Cook'],
    },
    {
        slug: 'banh-chuoi-nuong',
        name: 'Baked Banana Cake',
        viet: 'Bánh Chuối Nướng',
        type: 'Bánh',
        image: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?auto=format&fit=crop&w=900&q=85',
        description: 'Ripe bananas baked into a dense, aromatic coconut-milk custard until the top caramelises to a deep amber — the smell alone is worth making it.',
        story: 'Every Vietnamese grandmother has a version. None of them ever wrote it down. This is our best attempt to preserve it.',
        prepTime: '15 min',
        cookTime: '45 min',
        totalTime: '1 hr',
        servings: 8,
        difficulty: 'Easy',
        cal: 260,
        tags: ['Banana', 'Coconut', 'Baked'],
        isSignature: true,
    },
    {
        slug: 'sua-chua-nep-cam',
        name: 'Black Glutinous Rice Yoghurt',
        viet: 'Sữa Chua Nếp Cẩm',
        type: 'Traditional',
        image: 'https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?auto=format&fit=crop&w=900&q=85',
        description: 'Tangy Vietnamese yoghurt layered with sweetened purple sticky rice — a textural contrast of creamy and chewy that has no equal.',
        story: 'The purple of the rice bleeds into the white yoghurt in slow, beautiful swirls. It\'s almost too pretty to eat. Almost.',
        prepTime: '20 min',
        cookTime: '30 min',
        totalTime: '4 hrs',
        servings: 4,
        difficulty: 'Medium',
        cal: 195,
        tags: ['Probiotic', 'Purple Rice', 'Healthy'],
    },
    {
        slug: 'kem-chuoi',
        name: 'Frozen Banana Coconut Bar',
        viet: 'Kem Chuối',
        type: 'Frozen',
        image: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?auto=format&fit=crop&w=900&q=85',
        description: 'A Vietnamese street-corner classic — banana and sticky rice wrapped in coconut cream, frozen on a stick, rolled in toasted peanuts.',
        story: 'In Hội An\'s Nguyễn Thị Minh Khai street, a single cart has sold these since 1978. The recipe has not changed once.',
        prepTime: '20 min',
        cookTime: '10 min',
        totalTime: '3 hrs',
        servings: 8,
        difficulty: 'Easy',
        cal: 180,
        tags: ['Frozen', 'Street Food', 'Vegan'],
    },
    {
        slug: 'che-buoi',
        name: 'Pomelo Dessert Soup',
        viet: 'Chè Bưởi',
        type: 'Chè',
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=85',
        description: 'Translucent pomelo pith pearls, soft mung bean, and tapioca in warm pandan-scented coconut broth — delicate and profoundly comforting.',
        story: 'The pomelo pith takes patience to prepare. It rewards that patience with a texture unlike anything else in dessert.',
        prepTime: '40 min',
        cookTime: '30 min',
        totalTime: '1 hr 10 min',
        servings: 6,
        difficulty: 'Hard',
        cal: 240,
        tags: ['Pandan', 'Coconut', 'Traditional'],
        isSignature: true,
    },
    {
        slug: 'banh-cam',
        name: 'Sesame Fried Dough Balls',
        viet: 'Bánh Cam',
        type: 'Bánh',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=85',
        description: 'Crispy golden spheres of glutinous rice, hollow inside with a heart of sweetened mung bean paste, rolled in sesame seeds and fried to order.',
        story: 'Bite through the sesame crust, through the crisp shell, and the mung bean filling releases like a warm secret.',
        prepTime: '30 min',
        cookTime: '25 min',
        totalTime: '1 hr',
        servings: 12,
        difficulty: 'Medium',
        cal: 145,
        tags: ['Fried', 'Glutinous Rice', 'Street Food'],
    },
    {
        slug: 'che-dau-do',
        name: 'Sweet Red Bean Soup',
        viet: 'Chè Đậu Đỏ',
        type: 'Chè',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85',
        description: 'Slow-simmered red beans in a lightly sweet, pandan-perfumed broth with chewy tapioca pearls — simple, ancient, deeply satisfying.',
        story: 'Vietnamese mothers make this when you\'re sick, when you\'re sad, and when they just want to feed you love.',
        prepTime: '10 min',
        cookTime: '1 hr',
        totalTime: '1 hr 10 min',
        servings: 4,
        difficulty: 'Easy',
        cal: 210,
        tags: ['Red Bean', 'Pandan', 'Comfort Food'],
    },
    {
        slug: 'banh-troi-nuoc',
        name: 'Floating Rice Dumplings',
        viet: 'Bánh Trôi Nước',
        type: 'Traditional',
        image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85',
        description: 'Soft white glutinous rice balls with a core of brown sugar and ginger — served in warm ginger syrup. They float when they\'re ready.',
        story: 'On the 3rd day of the 3rd lunar month, Vietnamese families make these together. The act of making them is as meaningful as eating them.',
        prepTime: '30 min',
        cookTime: '20 min',
        totalTime: '50 min',
        servings: 4,
        difficulty: 'Medium',
        cal: 190,
        tags: ['Glutinous Rice', 'Festive', 'Ginger'],
        isSignature: true,
    },
]

const TYPES: DessertType[] = ['All', 'Traditional', 'Chè', 'Bánh', 'Frozen', 'Fusion']

const DIFF_COLOR: Record<string, string> = {
    Easy: '#059669',
    Medium: '#D97706',
    Hard: '#DC2626',
}

const TYPE_COLOR: Record<string, string> = {
    Traditional: '#7C3AED',
    Chè: '#0284C7',
    Bánh: '#D97706',
    Frozen: '#0891B2',
    Fusion: '#BE185D',
}

// ─── Animation variants ───────────────────────────────────────────────────────
const cardVariant = {
    hidden: { opacity: 0, y: 36 },
    show: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
    }),
}

const heroLine = (delay: number) => ({
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay } },
})

// ─── Dessert Card ─────────────────────────────────────────────────────────────
function DessertCard({ item, index }: { item: Dessert; index: number }) {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
        >
            <Link
                href={`/recipes/${item.slug}`}
                style={{
                    display: 'block',
                    textDecoration: 'none',
                    background: 'white',
                    borderRadius: 26,
                    overflow: 'hidden',
                    border: hovered ? '1px solid rgba(217,119,6,0.28)' : '1px solid rgba(75,46,26,0.07)',
                    transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: hovered ? '0 28px 64px rgba(75,46,26,0.13)' : '0 2px 12px rgba(75,46,26,0.05)',
                    transition: 'transform 0.36s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s, border-color 0.22s',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                aria-label={`View recipe for ${item.name}`}
            >
                {/* ── Image ── */}
                <div style={{ position: 'relative', height: 230, overflow: 'hidden', background: '#f5ede3' }}>
                    <Image
                        src={item.image}
                        alt={`${item.name} (${item.viet}) — Vietnamese dessert recipe`}
                        fill
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        style={{
                            objectFit: 'cover',
                            transform: hovered ? 'scale(1.08)' : 'scale(1)',
                            transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)',
                        }}
                        quality={80}
                    />
                    {/* Gradient */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(75,46,26,0.62) 0%, transparent 55%)',
                        opacity: hovered ? 1 : 0.55,
                        transition: 'opacity 0.3s',
                    }} />

                    {/* Signature badge */}
                    {item.isSignature && (
                        <div style={{ position: 'absolute', top: 14, left: 14, background: '#D97706', color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100 }}>
                            ✦ Signature
                        </div>
                    )}

                    {/* Type badge */}
                    <div style={{ position: 'absolute', top: 14, right: 14, background: TYPE_COLOR[item.type] ?? '#4B2E1A', color: 'white', fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', padding: '5px 13px', borderRadius: 100 }}>
                        {item.type}
                    </div>

                    {/* Bottom overlay */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px' }}>
                        <h3 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 21, fontWeight: 700, color: 'white',
                            margin: 0, lineHeight: 1.15,
                            textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                        }}>
                            {item.name}
                        </h3>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', margin: '3px 0 0' }}>
                            {item.viet}
                        </p>
                    </div>
                </div>

                {/* ── Body ── */}
                <div style={{ padding: '18px 20px 22px' }}>
                    {/* Story quote */}
                    <p style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 13.5, fontStyle: 'italic', fontWeight: 600,
                        color: '#D97706', lineHeight: 1.5,
                        margin: '0 0 10px',
                        borderLeft: '2.5px solid #D97706',
                        paddingLeft: 11,
                    }}>
                        "{item.story}"
                    </p>

                    {/* Description */}
                    <p style={{ fontSize: 13.5, color: 'rgba(75,46,26,0.62)', lineHeight: 1.72, margin: '0 0 16px' }}>
                        {item.description}
                    </p>

                    {/* Meta row */}
                    <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
                        gap: 8, marginBottom: 16,
                        background: '#FAFAF7', borderRadius: 14, padding: '10px 4px',
                    }}>
                        {[
                            { label: 'Total', value: item.totalTime },
                            { label: 'Serves', value: `${item.servings}` },
                            { label: 'Calories', value: `${item.cal}` },
                        ].map(m => (
                            <div key={m.label} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: 14, fontWeight: 700, color: '#2D1A0E' }}>{m.value}</div>
                                <div style={{ fontSize: 10, color: 'rgba(75,46,26,0.42)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{m.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Tags */}
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 700, color: DIFF_COLOR[item.difficulty], background: `${DIFF_COLOR[item.difficulty]}18`, padding: '4px 10px', borderRadius: 8 }}>
                            <span style={{ width: 5, height: 5, borderRadius: '50%', background: DIFF_COLOR[item.difficulty], display: 'inline-block' }} />
                            {item.difficulty}
                        </span>
                        {item.tags.map(t => (
                            <span key={t} style={{ fontSize: 10, fontWeight: 600, color: 'rgba(75,46,26,0.45)', background: 'rgba(75,46,26,0.06)', padding: '4px 9px', borderRadius: 8 }}>
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div style={{
                        paddingTop: 14, borderTop: '1px solid rgba(75,46,26,0.07)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                        <span style={{
                            fontSize: 13, fontWeight: 700, color: '#D97706',
                            display: 'flex', alignItems: 'center', gap: 5,
                        }}>
                            View Recipe
                            <span style={{
                                display: 'inline-block',
                                transform: hovered ? 'translateX(5px)' : 'translateX(0)',
                                transition: 'transform 0.22s ease',
                            }}>→</span>
                        </span>
                        <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.3)', fontWeight: 500 }}>⏱ {item.totalTime}</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DessertsPage() {
    const [activeType, setActiveType] = useState<DessertType>('All')
    const [query, setQuery] = useState('')

    const heroRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
    const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
    const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

    const filtered = useMemo(() => {
        return DESSERTS.filter(d => {
            const typeMatch = activeType === 'All' || d.type === activeType
            const q = query.toLowerCase()
            const textMatch = !q || d.name.toLowerCase().includes(q) || d.viet.toLowerCase().includes(q) || d.tags.some(t => t.toLowerCase().includes(q))
            return typeMatch && textMatch
        })
    }, [activeType, query])

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');
        * { box-sizing: border-box; }
        .pill {
          border: 1.5px solid rgba(75,46,26,0.12); border-radius:100px;
          padding: 8px 20px; font-size: 13px; font-weight: 500;
          color: rgba(75,46,26,0.55); background: transparent;
          cursor: pointer; transition: all 0.18s; white-space: nowrap;
          font-family: inherit;
        }
        .pill:hover { color: #D97706; border-color: rgba(217,119,6,0.38); background: rgba(217,119,6,0.04); }
        .pill.on { background: #4B2E1A; color: white; border-color: #4B2E1A; }
        .search-input {
          background: white; border: 1.5px solid rgba(75,46,26,0.1);
          border-radius: 100px; padding: 10px 20px 10px 44px;
          font-size: 14px; font-family: inherit; color: #4B2E1A;
          outline: none; transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%; max-width: 280px;
        }
        .search-input:focus { border-color: #D97706; box-shadow: 0 0 0 3px rgba(217,119,6,0.1); }
        .search-input::placeholder { color: rgba(75,46,26,0.35); }
      `}</style>

            {/* ── HERO ───────────────────────────────────────────────────────────── */}
            <section
                ref={heroRef}
                aria-label="Vietnamese Desserts hero"
                style={{
                    position: 'relative', height: '100vh',
                    minHeight: 600, maxHeight: 900,
                    overflow: 'hidden', display: 'flex', alignItems: 'flex-end',
                }}
            >
                {/* Parallax image */}
                <motion.div style={{ position: 'absolute', inset: '-8% 0', y: imgY }}>
                    <Image
                        src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1800&q=90"
                        alt="Vietnamese desserts and chè — colourful bowls of sweet treats"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
                        priority
                        quality={92}
                    />
                </motion.div>

                {/* Dual gradient — depth + warmth */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(245,237,227,0.15) 0%, rgba(75,46,26,0.08) 40%, rgba(45,26,14,0.92) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(45,26,14,0.5) 0%, transparent 55%)' }} />

                {/* Breadcrumb */}
                <div style={{ position: 'absolute', top: 104, left: 0, right: 0, padding: '0 40px' }}>
                    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                        <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }} aria-label="Breadcrumb">
                            {[['Home', '/'], ['Recipes', '/recipes'], ['Desserts', '']].map(([label, href], i) => (
                                <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    {i > 0 && <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>}
                                    {href
                                        ? <Link href={href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                        : <span style={{ color: '#D97706', fontWeight: 600 }}>{label}</span>
                                    }
                                </span>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Hero text */}
                <motion.div
                    style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', width: '100%', padding: '0 40px 80px', opacity: textOpacity }}
                >
                    {/* Label chip */}
                    <motion.div
                        variants={heroLine(0)}
                        initial="hidden" animate="show"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(217,119,6,0.16)', border: '1px solid rgba(217,119,6,0.38)', backdropFilter: 'blur(14px)', borderRadius: 100, padding: '8px 20px', marginBottom: 26 }}
                    >
                        <span style={{ fontSize: 16 }}>🍮</span>
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FBB040' }}>Vietnamese Desserts</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={heroLine(0.1)}
                        initial="hidden" animate="show"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(52px, 8.5vw, 106px)',
                            fontWeight: 800, color: 'white',
                            margin: 0, lineHeight: 0.9,
                            marginBottom: 24, letterSpacing: '-0.025em',
                        }}
                    >
                        Sweet<br />
                        <span style={{ color: '#D97706', fontStyle: 'italic' }}>Traditions</span><br />
                        of Vietnam
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        variants={heroLine(0.22)}
                        initial="hidden" animate="show"
                        style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.6)', maxWidth: 500, lineHeight: 1.8, margin: '0 0 44px' }}
                    >
                        From trembling caramel flans to jewel-coloured chè — Vietnamese desserts are not an afterthought. They are an entire language of care.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        variants={heroLine(0.32)}
                        initial="hidden" animate="show"
                        style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}
                    >
                        {[
                            { val: `${DESSERTS.length}`, lbl: 'Recipes' },
                            { val: '5', lbl: 'Categories' },
                            { val: '15 min', lbl: 'Quickest Recipe' },
                            { val: '4.8★', lbl: 'Avg Rating' },
                        ].map((s, i) => (
                            <div key={s.lbl} style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none', paddingLeft: i > 0 ? 26 : 0, paddingRight: 26, marginBottom: 10 }}>
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 27, fontWeight: 700, color: 'white', lineHeight: 1 }}>{s.val}</div>
                                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.36)', fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', marginTop: 5 }}>{s.lbl}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
                    style={{ position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}
                >
                    <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>Scroll</span>
                    <motion.div
                        animate={{ y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}
                        style={{ width: 1, height: 34, background: 'linear-gradient(to bottom, rgba(255,255,255,0.45), transparent)' }}
                    />
                </motion.div>
            </section>

            {/* ── EDITOR'S INTRO ─────────────────────────────────────────────────── */}
            <section style={{ background: 'linear-gradient(to bottom, #F5EDE3, #FAFAF7)', padding: '72px 40px 56px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7 }}
                    style={{ maxWidth: 780, margin: '0 auto' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                        <div style={{ width: 36, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#D97706', textTransform: 'uppercase' }}>A Note on Sweetness</span>
                        <div style={{ width: 36, height: 1.5, background: '#D97706' }} />
                    </div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px, 2.5vw, 24px)', fontStyle: 'italic', color: '#4B2E1A', lineHeight: 1.7, margin: '0 0 16px' }}>
                        In Vietnam, desserts are rarely reserved for the end of a meal. They exist on their own terms — sold from street carts at midday, shared between friends on a hot afternoon, spooned into bowls at dawn markets.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(75,46,26,0.6)', lineHeight: 1.8, margin: 0 }}>
                        They are less sweet than their Western counterparts, more textural, more herbal — pandan and coconut and ginger weaving through everything. These are not desserts that shout. They are the ones you remember.
                    </p>
                </motion.div>
            </section>

            {/* ── SIGNATURE HIGHLIGHTS ──────────────────────────────────────────── */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 40px 48px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Signature Picks</span>
                    </div>
                    <div style={{ display: 'flex', gap: 14, overflowX: 'auto', paddingBottom: 8 }}>
                        {DESSERTS.filter(d => d.isSignature).map((d, i) => (
                            <Link key={d.slug} href={`/recipes/${d.slug}`}
                                style={{ position: 'relative', flexShrink: 0, width: 180, height: 110, borderRadius: 18, overflow: 'hidden', textDecoration: 'none' }}
                            >
                                <Image src={d.image} alt={d.name} fill style={{ objectFit: 'cover' }} sizes="190px" quality={70} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(45,26,14,0.85) 0%, transparent 55%)' }} />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 13px' }}>
                                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontWeight: 700, color: 'white', margin: 0, lineHeight: 1.2 }}>{d.name}</p>
                                    <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', margin: '2px 0 0', fontStyle: 'italic' }}>{d.viet}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── FILTER + SEARCH BAR ───────────────────────────────────────────── */}
            <div style={{ position: 'sticky', top: 72, zIndex: 40, background: 'rgba(250,250,247,0.96)', backdropFilter: 'blur(18px)', borderBottom: '1px solid rgba(75,46,26,0.07)', padding: '12px 40px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 10, overflowX: 'auto', alignItems: 'center', flexWrap: 'nowrap' }}>
                    {/* Search */}
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                        <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', fontSize: 15, color: 'rgba(75,46,26,0.38)' }}>🔍</span>
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search desserts…"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            aria-label="Search desserts"
                        />
                    </div>

                    <div style={{ width: 1, height: 24, background: 'rgba(75,46,26,0.1)', margin: '0 4px', flexShrink: 0 }} />

                    {/* Type filters */}
                    {TYPES.map(t => (
                        <button key={t} onClick={() => setActiveType(t)} className={`pill ${activeType === t ? 'on' : ''}`}>
                            {t}
                        </button>
                    ))}

                    {/* Result count */}
                    <span style={{ marginLeft: 'auto', fontSize: 13, color: 'rgba(75,46,26,0.38)', fontWeight: 500, flexShrink: 0 }}>
                        {filtered.length} recipes
                    </span>
                </div>
            </div>

            {/* ── DESSERT GRID ──────────────────────────────────────────────────── */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 40px 96px' }} aria-label="Dessert recipes grid">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeType}-${query}`}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}
                    >
                        {filtered.map((item, i) => (
                            <DessertCard key={item.slug} item={item} index={i} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(75,46,26,0.38)' }}
                    >
                        <div style={{ fontSize: 48, marginBottom: 14 }}>🍮</div>
                        <p style={{ fontSize: 17, fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
                            No desserts match your search — yet.
                        </p>
                        <button
                            onClick={() => { setQuery(''); setActiveType('All') }}
                            style={{ marginTop: 16, padding: '10px 24px', borderRadius: 100, border: '1.5px solid rgba(75,46,26,0.15)', background: 'transparent', color: '#D97706', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}
                        >
                            Clear filters
                        </button>
                    </motion.div>
                )}
            </section>

            {/* ── EXPLORE MORE CATEGORIES ───────────────────────────────────────── */}
            <section style={{ background: '#2D1A0E', padding: '72px 40px 80px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.65 }}
                    style={{ maxWidth: 1200, margin: '0 auto' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Keep Exploring</span>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: 'white', margin: '0 0 36px' }}>
                        More from FlavorNest
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
                        {[
                            { label: 'Breakfast', emoji: '🌅', href: '/recipes/breakfast', sub: 'Start the day right' },
                            { label: 'Main Dishes', emoji: '🍖', href: '/recipes/main-dishes', sub: 'The heart of the table' },
                            { label: 'Street Food', emoji: '🥢', href: '/recipes/street-food', sub: 'Sidewalk classics' },
                            { label: 'Northern Cuisine', emoji: '🏯', href: '/recipes/north', sub: "Hanoi's finest" },

                            { label: 'Travel Guide', emoji: '🗺️', href: '/stories/travel', sub: 'Where to eat in Vietnam' },
                        ].map(item => (
                            <Link
                                key={item.href} href={item.href}
                                style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: '20px 22px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none', transition: 'all 0.22s' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(217,119,6,0.35)'; el.style.background = 'rgba(217,119,6,0.06)'; el.style.transform = 'translateY(-4px)'; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.background = 'rgba(255,255,255,0.03)'; el.style.transform = 'none'; }}
                            >
                                <span style={{ fontSize: 26 }}>{item.emoji}</span>
                                <span style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>{item.label}</span>
                                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>{item.sub}</span>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </section>
        </main>
    )
}

// ─── SEO Metadata (use in layout or as generateMetadata) ─────────────────────
export const dessertPageMetadata = {
    title: 'Vietnamese Desserts — Chè, Bánh & Sweet Traditions | FlavorNest Vietnam',
    description:
        'Discover 10+ authentic Vietnamese dessert recipes — from silky Bánh Flan and colourful Chè Ba Màu to baked banana cake and sesame dough balls. Sweet traditions worth making at home.',
    keywords: [
        'vietnamese desserts', 'che ba mau', 'banh flan recipe', 'che thai', 'banh chuoi nuong',
        'sua chua nep cam', 'kem chuoi', 'che buoi', 'banh cam', 'vietnamese sweets',
        'trang mieng viet nam', 'vietnamese sweet soup',
    ],
    openGraph: {
        title: 'Vietnamese Desserts | FlavorNest Vietnam',
        description: '10+ authentic Vietnamese dessert recipes — chè, bánh, frozen treats and fusion sweets.',
        images: [{
            url: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&h=630&q=85',
            width: 1200, height: 630,
            alt: 'Vietnamese desserts — colourful chè and sweet treats',
        }],
    },
}