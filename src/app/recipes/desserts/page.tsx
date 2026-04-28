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
        viet: 'Che ba mau',
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
        viet: 'Banh Flan',
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
        viet: 'Che Thai',
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
        viet: 'Banh chuoi nuong',
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
        viet: 'Sua chua nep cam',
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
        viet: 'Kem chuoi',
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
        viet: 'Chè buoi',
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
        viet: 'Banh Cam',
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
        slug: 'che-dau',
        name: 'Sweet Mung Bean Soup',
        viet: 'Che Dau Xanh',
        type: 'Traditional',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',
        description: 'Split mung beans simmered until soft, sweetened with rock sugar, perfumed with pandan, and finished with salted coconut cream.',
        story: 'The dessert Vietnamese grandmothers make when someone is unwell, tired, or simply needs feeding.',
        prepTime: '5 min',
        cookTime: '45 min',
        totalTime: '1 hr',
        servings: 4,
        difficulty: 'Easy',
        cal: 210,
        tags: ['Vegan', 'Pandan', 'No-Bake'],
    },
    {
        slug: 'banh-troi-nuoc',
        name: 'Floating Rice Dumplings',
        viet: 'Banh troi nuoc',
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
    {
        slug: 'che-thap-cam',
        title: 'Mixed Sweet Soup',
        subtitle: 'Chè Thập Cẩm',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Medium', time: '60 min',
        rating: '4.7', reviews: 312, cal: 380, tag: 'Variety Pack', tagColor: '#7C3AED',
        description: "The 'everything' dessert. A harmonious mix of various beans, pearls, jellies, and sometimes dried longan or lotus seeds. Each spoonful offers a different texture, making it a beloved classic in Hanoi's old quarter.",
        tags: ['Dessert', 'Mixed', 'Traditional', 'Beans'],
    },
    {
        slug: 'che-khoai-mon',
        title: 'Taro Sweet Soup with Sticky Rice',
        subtitle: 'Chè Khoai Môn',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '50 min',
        rating: '4.6', reviews: 156, cal: 410, tag: 'Creamy Delight', tagColor: '#7C3AED',
        description: "Rich, purple taro chunks simmered with pandan-infused sticky rice until thick and creamy. This Southern dessert is warm, comforting, and deeply satisfying when drizzled with salted coconut milk.",
        tags: ['Taro', 'Sticky Rice', 'Creamy', 'Southern'],
    },
    {
        slug: 'che-dau-xanh',
        title: 'Mung Bean Sweet Soup',
        subtitle: 'Chè Đậu Xanh',
        image: 'https://images.unsplash.com/photo-1596797038530-2c396b57ea41?auto=format&fit=crop&w=900&q=80',
        region: 'National', difficulty: 'Easy', time: '30 min',
        rating: '4.5', reviews: 189, cal: 210, tag: 'Detox Sweet', tagColor: '#059669',
        description: "A simple, cooling dessert prized for its detoxifying properties. Peeled or whole mung beans are cooked until soft and flowery. It can be served warm in winter or cold with ice to beat the summer heat.",
        tags: ['Mung Bean', 'Healthy', 'Simple', 'Cooling'],
    },
    {
        slug: 'che-do-den',
        title: 'Black Bean Dessert',
        subtitle: 'Chè Đỗ Đen',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Easy', time: '40 min',
        rating: '4.7', reviews: 267, cal: 230, tag: 'Summer Basic', tagColor: '#0284C7',
        description: "The most iconic summer treat in Northern Vietnam. Soft black beans in a dark, sweet syrup scented with jasmine or vanilla. Simple, humble, and perfectly refreshing when topped with coconut shreds.",
        tags: ['Black Bean', 'Northern', 'Classic', 'Cooling'],
    },
    {
        slug: 'che-chuoi',
        title: 'Banana with Sago Pearls',
        subtitle: 'Chè Chuối',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '30 min',
        rating: '4.8', reviews: 212, cal: 350, tag: 'Tropical Comfort', tagColor: '#D97706',
        description: "Sweet bananas (chuoi xiem) cooked in coconut milk with translucent sago pearls. The starch from the pearls and bananas creates a naturally thick sauce that is both fragrant and filling.",
        tags: ['Banana', 'Coconut Milk', 'Sago', 'Southern'],
    },
    {
        slug: 'che-long-nhan',
        title: 'Longan with Lotus Seed Soup',
        subtitle: 'Chè Long Nhãn',
        image: 'https://images.unsplash.com/photo-1544070078-a212eda27b49?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Medium', time: '45 min',
        rating: '4.9', reviews: 184, cal: 180, tag: 'Royal Elegance', tagColor: '#0284C7',
        description: "An elegant dessert originating from the royal courts of Hue. Each juicy longan fruit is stuffed with a tender, powdery lotus seed, then simmered in a light, clear rock-sugar syrup.",
        tags: ['Longan', 'Lotus Seed', 'Northern', 'Royal'],
    },
    {
        slug: 'che-sen',
        title: 'Lotus Seed Sweet Soup',
        subtitle: 'Chè Sen',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
        region: 'Central', difficulty: 'Medium', time: '40 min',
        rating: '4.8', reviews: 124, cal: 160, tag: 'Pure Calm', tagColor: '#059669',
        description: "The essence of tranquility. Fresh lotus seeds are steamed until soft then briefly simmered in a clear syrup. It is valued not just for its taste, but for its ability to soothe the mind and improve sleep.",
        tags: ['Lotus Seed', 'Healthy', 'Central', 'Light'],
    },
    {
        slug: 'banh-flan',
        title: 'Vietnamese Caramel Custard',
        subtitle: 'Bánh Flan',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Medium', time: '60 min',
        rating: '4.9', reviews: 532, cal: 280, tag: 'Coffee Pairing', tagColor: '#B91C1C',
        description: "A French legacy perfected in Vietnam. This silky smooth egg custard is topped with a bitter-sweet dark caramel and often served with a splash of black coffee and crushed ice for a unique local twist.",
        tags: ['Custard', 'Caramel', 'Egg', 'French-Influence'],
    },
    {
        slug: 'banh-da-lon',
        title: 'Steamed Layer Cake',
        subtitle: 'Bánh Da Lợn',
        image: 'https://images.unsplash.com/photo-1505976378723-9726b54e9bb9?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Hard', time: '75 min',
        rating: '4.7', reviews: 142, cal: 320, tag: 'Chewy Layers', tagColor: '#059669',
        description: "Translated as 'Pig Skin Cake' due to its glossy, chewy layers. Made from mung bean, pandan, and tapioca starch, this steamed cake features alternating green and yellow layers that peel apart beautifully.",
        tags: ['Pandan', 'Mung Bean', 'Southern', 'Chewy'],
    },
    {
        slug: 'kem-bo-sai-gon',
        title: 'Saigon Avocado Ice Cream',
        subtitle: 'Kem Bơ Sài Gòn',
        image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '15 min',
        rating: '4.9', reviews: 389, cal: 450, tag: 'Viral Treat', tagColor: '#0284C7',
        description: "A trendy street dessert where creamy mashed avocado is paired with a scoop of coconut ice cream. Topped with crunchy dried coconut and durian (optional), it’s a buttery, cold delight.",
        tags: ['Avocado', 'Ice Cream', 'Southern', 'Street Food'],
    },
    {
        slug: 'sua-chua',
        title: 'Vietnamese Yogurt',
        subtitle: 'Sữa Chua',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
        region: 'Northern', difficulty: 'Medium', time: '8 hour',
        rating: '4.8', reviews: 621, cal: 150, tag: 'Home Basic', tagColor: '#059669',
        description: "Creamier and sweeter than Western yogurt thanks to the addition of condensed milk. Often frozen in small plastic bags (sua chua tui) or fermented in small glass jars for a nostalgic childhood snack.",
        tags: ['Dairy', 'Healthy', 'National', 'Snack'],
    },
    {
        slug: 'xoai-lac-dua-nuoc-cot-dua',
        title: 'Shaken Mango with Nipa Palm & Coconut',
        subtitle: 'Xoài Lắc Dừa Nước',
        image: 'https://images.unsplash.com/photo-1559813634-19276d338f0d?auto=format&fit=crop&w=900&q=80',
        region: 'Southern', difficulty: 'Easy', time: '15 min',
        rating: '4.7', reviews: 134, cal: 280, tag: 'Modern Street', tagColor: '#EA580C',
        description: "A modern twist on street fruit. Fresh mango and jelly-like nipa palm (dua nuoc) are shaken with chili salt and drenched in a rich coconut milk sauce, creating a complex salty-sweet-spicy experience.",
        tags: ['Mango', 'Nipa Palm', 'Coconut', 'Southern'],
    },
    {
        slug: 'banh-troi-nuoc',
        title: 'Sticky Rice Balls in Ginger Syrup',
        subtitle: 'Bánh Trôi Nước',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
        region: 'National', difficulty: 'Medium', time: '50 min',
        rating: '4.8', reviews: 245, cal: 340, tag: 'Heritage Sweet', tagColor: '#B91C1C',
        description: "Soft, chewy glutinous rice balls filled with mung bean paste, floating in a warm, spicy ginger syrup. Also known as 'Che Troi Nuoc', this dish symbolizes reunion and is a must-have for the Lantern Festival.",
        tags: ['Glutinous Rice', 'Ginger', 'Traditional', 'National'],
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
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.07 },
    }),
}


const heroLine = (delay: number) => ({
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay } },
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

        {/* ── HERO ── */}
            <section style={{ background: 'linear-gradient(135deg, #FEF3E2 0%, #FDEAC8 55%, #F5EDE3 100%)', padding: '120px 24px 72px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 40, right: '6%', width: 280, height: 280, borderRadius: '50%', background: 'rgba(217,119,6,0.07)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    {/* Breadcrumb */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 24 }}>
                        {[['Home', '/'], ['Recipes', '/recipes'], ['Desserts', '']].map(([label, href], i) => (
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
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>The Sweet Finale</span>
                    </div>

                    {/* Title */}
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(42px, 6vw, 76px)', fontWeight: 800, color: '#2D1A0E', margin: '0 0 18px', lineHeight: 1.0 }}>
                        Vietnamese<br /><span style={{ color: '#D97706', fontStyle: 'italic' }}>Desserts</span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{ color: 'rgba(75,46,26,0.62)', fontSize: 17, maxWidth: 500, lineHeight: 1.75, margin: '0 0 36px' }}>
                        From silky chè to caramel-kissed bánh flan — Vietnamese sweets are quiet, balanced, and quietly addictive. Less sugar, more soul.
                    </p>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                        {[['🍮', `${DESSERTS.length}`, 'Recipes'], ['⏱', '20 min', 'Quickest'], ['🌏', '3', 'Regions'], ['⭐', '4.8', 'Avg Rating']].map(([icon, val, lbl]) => (
                            <div key={lbl}>
                                <span style={{ fontSize: 14 }}>{icon}</span>
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#2D1A0E', lineHeight: 1 }}>{val}</div>
                                <div style={{ fontSize: 11, color: 'rgba(75,46,26,0.45)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{lbl}</div>
                            </div>
                        ))}
                    </div>
                </div>
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
        'Discover 10+ authentic Vietnamese dessert recipes — from silky Bánh Flan and colourful Che ba mau to baked banana cake and sesame dough balls. Sweet traditions worth making at home.',
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
