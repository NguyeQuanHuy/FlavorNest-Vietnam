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
import { useState, useRef, useMemo, useEffect } from 'react'
import { Utensils, Clock, Globe, Star } from 'lucide-react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

// --- Types --------------------------------------------------------------------
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

// --- Dessert Data --------------------------------------------------------------
const DESSERTS: Dessert[] = [
    {
        slug: 'che-ba-mau',
        name: 'Three-Colour Dessert',
        viet: 'Chè ba màu',
        type: 'Chè',
        image: '/images/recipes/che-ba-mau.jpg',
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
        viet: 'bánh Flan',
        type: 'Fusion',
        image: '/images/recipes/banh-flan.jpg',
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
        image: '/images/recipes/che-thai.jpg',
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
        image: '/images/recipes/banh-chuoi-nuong.jpg',
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
        image: '/images/recipes/sua-chua-nep-cam.jpg',
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
        image: '/images/recipes/kem-chuoi.jpg',
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
        viet: 'Chè bưởi Miền Nam',
        type: 'Chè',
        image: '/images/recipes/che-buoi.jpg',
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
        viet: 'bánh Cam',
        type: 'Bánh',
        image: '/images/recipes/banh-cam.jpg',
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
        viet: 'Chè Đậu Xanh',
        type: 'Traditional',
        image: '/images/recipes/che-dau-xanh.jpg',
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
        viet: 'Bánh Trôi Nước',
        type: 'Traditional',
        image: '/images/recipes/banh-troi-nuoc.jpg',
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
        slug: 'che-buoi-mien-nam',
        name: 'Pomelo Peel Dessert',
        viet: 'Chè bưởi Miền Nam',
        type: 'Traditional',
        image: '/images/recipes/che-buoi-mien-nam.jpg',
        description: 'Crunchy, glass-like pomelo pith paired with soft mung beans in a thick, fragrant sweet soup.',
        story: 'A masterpiece of patience, turning the bitter white rind of a pomelo into a sweet, crunchy delight.',
        prepTime: '45 min',
        cookTime: '45 min',
        totalTime: '1.5 hrs',
        servings: 4,
        difficulty: 'Hard',
        cal: 290,
        tags: ['Crunchy', 'Southern', 'Unique'],
        isSignature: true,
    },
    {
        slug: 'che-khoai-mon',
        name: 'Taro & Sticky Rice Soup',
        viet: 'Chè Khoai Môn',
        type: 'Chè',
        image: '/images/recipes/che-khoai-mon.jpg',
        description: 'Creamy taro chunks cooked with fragrant sticky rice and pandan leaves, served with thick coconut cream.',
        story: 'A comforting Southern staple where the earthiness of taro meets the velvety richness of coconut.',
        prepTime: '20 min',
        cookTime: '40 min',
        totalTime: '1 hr',
        servings: 4,
        difficulty: 'Medium',
        cal: 410,
        tags: ['Creamy', 'Taro', 'Comfort'],
        isSignature: false,
    },
    {
        slug: 'che-dau-xanh',
        name: 'Mung Bean Sweet Soup',
        viet: 'Chè Đậu Xanh',
        type: 'Chè',
        image: '/images/recipes/che-dau-xanh.jpg',
        description: 'A light and cooling dessert made from peeled mung beans, prized for its refreshing and detoxifying properties.',
        story: 'The most honest dessert in any Vietnamese home, often prepared by grandmothers to beat the summer heat.',
        prepTime: '15 min',
        cookTime: '30 min',
        totalTime: '45 min',
        servings: 4,
        difficulty: 'Easy',
        cal: 210,
        tags: ['Healthy', 'Cooling', 'Simple'],
        isSignature: false,
    },
    {
        slug: 'che-do-den',
        name: 'Black Bean Dessert',
        viet: 'Chè Đỗ Đen',
        type: 'Chè',
        image: '/images/recipes/che-do-den.jpg',
        description: 'Soft black beans in a dark, sweet syrup scented with jasmine, often topped with crunchy coconut shreds.',
        story: 'The quintessential summer treat of Northern Vietnam, simple yet deeply rooted in every childhood memory.',
        prepTime: '20 min',
        cookTime: '40 min',
        totalTime: '1 hr',
        servings: 4,
        difficulty: 'Easy',
        cal: 230,
        tags: ['Traditional', 'Northern', 'Iced'],
        isSignature: false,
    },
    {
        slug: 'che-chuoi',
        name: 'Banana with Sago Pearls',
        viet: 'Chè Chuối',
        type: 'Chè',
        image: '/images/recipes/che-chuoi.jpg',
        description: 'Sliced bananas simmered in rich coconut milk with chewy sago pearls and crushed peanuts.',
        story: 'A rustic dessert that celebrates the humble banana, turning it into a creamy, tropical delight.',
        prepTime: '15 min',
        cookTime: '20 min',
        totalTime: '35 min',
        servings: 3,
        difficulty: 'Easy',
        cal: 350,
        tags: ['Banana', 'Tropical', 'Coconut'],
        isSignature: false,
    },
    {
        slug: 'che-long-nhan',
        name: 'Longan & Lotus Seed Soup',
        viet: 'Chè Long Nhãn',
        type: 'Chè',
        image: '/images/recipes/che-long-nhan.jpg',
        description: 'Delicate longan fruits stuffed with powdery lotus seeds in a clear, refined rock-sugar syrup.',
        story: 'Once a tribute to kings, this elegant dessert symbolizes grace and is believed to bring peaceful sleep.',
        prepTime: '20 min',
        cookTime: '30 min',
        totalTime: '50 min',
        servings: 4,
        difficulty: 'Medium',
        cal: 180,
        tags: ['Elegant', 'Royal', 'Healthy'],
        isSignature: true,
    },
    {
        slug: 'che-sen',
        name: 'Lotus Seed Sweet Soup',
        viet: 'Chè Sen',
        type: 'Chè',
        image: '/images/recipes/che-sen.jpg',
        description: 'Pure, steamed lotus seeds in a crystal clear syrup, highlighting the natural earthy flavor of the seed.',
        story: 'A zen-like experience in a bowl, capturing the essence of the lotus — Vietnams national flower.',
        prepTime: '20 min',
        cookTime: '40 min',
        totalTime: '1 hr',
        servings: 2,
        difficulty: 'Medium',
        cal: 160,
        tags: ['Pure', 'Central', 'Light'],
        isSignature: false,
    },
    {
        slug: 'banh-da-lon',
        name: 'Steamed Layer Cake',
        viet: 'Bánh Da Lợn',
        type: 'Traditional',
        image: '/images/recipes/banh-da-lon.jpg',
        description: 'Chewy, pandan-scented layers alternating with sweet mung bean paste in a glossy, steamed cake.',
        story: 'Named "pig skin cake" for its elastic texture, it is a playful dessert designed to be peeled and savored.',
        prepTime: '30 min',
        cookTime: '45 min',
        totalTime: '1 hr 15 min',
        servings: 8,
        difficulty: 'Hard',
        cal: 310,
        tags: ['Pandan', 'Chewy', 'Southern'],
        isSignature: false,
    },
    {
        slug: 'kem-bo-sai-gon',
        name: 'Saigon Avocado Ice Cream',
        viet: 'Kem Bơ Sài Gòn',
        type: 'Frozen',
        image: '/images/recipes/kem-bo-sai-gon.jpg',
        description: 'Buttery avocado mash topped with a scoop of coconut ice cream and crunchy dried coconut flakes.',
        story: 'A viral sensation from the streets of Saigon, proving that avocado is the perfect partner for sweetness.',
        prepTime: '15 min',
        cookTime: '0 min',
        totalTime: '15 min',
        servings: 1,
        difficulty: 'Easy',
        cal: 450,
        tags: ['Avocado', 'Modern', 'Street-Style'],
        isSignature: true,
    },
    {
        slug: 'sua-chua',
        name: 'Vietnamese Yogurt',
        viet: 'Sữa Chua',
        type: 'Fusion',
        image: '/images/recipes/sua-chua.jpg',
        description: 'Sweet, tangy yogurt made with condensed milk, often enjoyed frozen in small plastic bags.',
        story: 'Every Vietnamese child remembers the "frozen yogurt bag" bought from a neighborhood auntie on a hot day.',
        prepTime: '15 min',
        cookTime: '10 min',
        totalTime: '8 hrs',
        servings: 10,
        difficulty: 'Medium',
        cal: 150,
        tags: ['Healthy', 'Nostalgic', 'Dairy'],
        isSignature: false,
    },
    {
        slug: 'xoai-lac-dua-nuoc',
        name: 'Shaken Mango with Nipa Palm',
        viet: 'Xoài Lắc Dừa Nước',
        type: 'Frozen',
        image: '/images/recipes/xoai-lac-dua-nuoc.jpg',
        description: 'Tart mango cubes and chewy nipa palm fruit shaken with chili salt and sweet coconut nectar.',
        story: 'The ultimate modern street snack that hits every taste bud: sour, spicy, salty, and sweet.',
        prepTime: '15 min',
        cookTime: '5 min',
        totalTime: '20 min',
        servings: 2,
        difficulty: 'Easy',
        cal: 280,
        tags: ['Mango', 'Spicy', 'Street-Snack'],
        isSignature: false,
    },
    {
        slug: 'banh-troi-nuoc-nhan-dau-xanh',
        name: 'Sticky Rice Balls in Ginger',
        viet: 'Bánh Trôi Nước Nhân Đậu Xanh',
        type: 'Traditional',
        image: '/images/recipes/banh-troi-nuoc-nhan-dau-xanh.jpg',
        description: 'Glutinous rice balls filled with mung bean floating in a warm, spicy ginger and rock sugar syrup.',
        story: 'Symbolizing family reunion, these "floating" balls are a warm embrace during the winter months.',
        prepTime: '30 min',
        cookTime: '20 min',
        totalTime: '50 min',
        servings: 4,
        difficulty: 'Medium',
        cal: 340,
        tags: ['Ginger', 'Warm', 'Traditional'],
        isSignature: false,
    },
    {
        slug:'banh-khoai-mi-nuong',
        name:'Baked Cassava Cake',
        viet:'Bánh Khoai Mì Nướng',
        type:'Traditional',
        image:'/images/recipes/banh-khoai-mi-nuong.jpg',
        description:'A chewy baked cassava cake infused with coconut milk, creating a golden crust outside and a soft, slightly elastic center inside.',
        story:'A rustic Vietnamese dessert often shared in family gatherings, bringing the nostalgic taste of coconut and cassava from simple countryside kitchens.',
        prepTime:'15 min',
        cookTime:'45 min',
        totalTime:'1 hr',
        servings:6,
        difficulty:'Easy',
        cal:380,
        tags:['Cassava','Coconut','Baked','Dessert'],
        isSignature:false,
    },
    {
        slug:'chuoi-chien',
        name:'Deep Fried Banana',
        viet:'Chuối Chiên',
        type:'Bánh',
        image:'/images/recipes/chuoi-chien.jpg',
        description:'Ripe bananas coated in a light rice batter and deep-fried until golden and crisp outside, soft and sweet inside.',
        story:'A familiar street snack where the sound of sizzling oil signals childhood afternoons and simple joys.',
        prepTime:'10 min',
        cookTime:'15 min',
        totalTime:'25 min',
        servings:4,
        difficulty:'Easy',
        cal:320,
        tags:['Banana','Fried','Street Food','Sweet'],
        isSignature:false,
    },
    {
        slug:'che-troi-nuoc',
        name:'Ginger Sweet Rice Dumplings',
        viet:'Chè Trôi Nước',
        type:'Chè',
        image:'/images/recipes/che-troi-nuoc.jpg',
        description:'Glutinous rice balls filled with mung bean, floating in warm ginger syrup with a gentle sweetness.',
        story:'A symbolic dessert of reunion and completeness, often enjoyed during festivals and family gatherings.',
        prepTime:'30 min',
        cookTime:'20 min',
        totalTime:'50 min',
        servings:4,
        difficulty:'Medium',
        cal:350,
        tags:['Ginger','Rice','Traditional','Dessert'],
        isSignature:false,
    },
    {
        slug:'che-bap',
        name:'Sweet Corn Pudding',
        viet:'Chè Bắp',
        type:'Chè',
        image:'/images/recipes/che-bap.jpg',
        description:'Soft sweet corn simmered with sugar and tapioca, finished with creamy coconut milk on top.',
        story:'A humble countryside dessert that captures the natural sweetness of fresh corn in every spoonful.',
        prepTime:'10 min',
        cookTime:'25 min',
        totalTime:'35 min',
        servings:4,
        difficulty:'Easy',
        cal:280,
        tags:['Corn','Coconut','Dessert','Sweet'],
        isSignature:false,
    },
    {
        slug:'rau-ma-dau-xanh-nuoc-dua',
        name:'Pennywort Mung Bean Coconut Drink',
        viet:'Rau Má Đậu Xanh Nước Dừa',
        type:'Frozen',
        image:'/images/recipes/rau-ma-dau-xanh-nuoc-dua.jpg',
        description:'A blended chilled drink of pennywort and mung bean mixed with coconut water, smooth, green, and refreshing.',
        story:'A tropical cooling drink often enjoyed on hot days, balancing herbal freshness with creamy coconut sweetness.',
        prepTime:'15 min',
        cookTime:'30 min',
        totalTime:'45 min',
        servings:2,
        difficulty:'Easy',
        cal:210,
        tags:['Herbal','Coconut','Drink','Cooling'],
        isSignature:false,
    },
]

const FILTERS = ['All', 'Easy', 'Medium', 'Hard']
const REGIONS = ['All Regions', 'Northern', 'Central', 'Southern']

const TYPES: DessertType[] = ['All', 'Traditional', 'Chè', 'Bánh', 'Frozen', 'Fusion']

const DIFF_COLOR: Record<string, string> = {
    Easy: '#059669',
    Medium: '#D97706',
    Hard: '#DC2626',
}

const TYPE_COLOR: Record<string, string> = {
    Traditional: '#7C3AED',
    'Chè': '#0284C7',
    'Bánh': '#D97706',
    Frozen: '#0891B2',
    Fusion: '#BE185D',
}


// --- Animation variants -------------------------------------------------------
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

// --- Dessert Card -------------------------------------------------------------
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
                {/* -- Image -- */}
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
                            — Signature
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

                {/* -- Body -- */}
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
                            }}>?</span>
                        </span>
                        <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.3)', fontWeight: 500 }}>? {item.totalTime}</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

// --- Page ---------------------------------------------------------------------
export default function DessertsPage() {
    const [activeType, setActiveType] = useState<DessertType>('All')
    const [diff, setDiff] = useState('All')
    const [region, setRegion] = useState('All Regions')
    const [query, setQuery] = useState('')

    const heroRef = useRef<HTMLElement>(null)

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
          padding: 7px 16px; font-size: 13px; font-weight: 500;
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

            {/* -- HERO -- */}
            <section ref={heroRef} style={{ background: 'linear-gradient(135deg, #FEF3E2 0%, #FDEAC8 55%, #F5EDE3 100%)', padding: '88px 24px 48px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 40, right: '6%', width: 280, height: 280, borderRadius: '50%', background: 'rgba(217,119,6,0.07)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    {/* Breadcrumb */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 24 }}>
                        {[['Home', '/'], ['Recipes', '/recipes'], ['Desserts', '']].map(([label, href], i) => (
                            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {i > 0 && <span style={{ color: 'rgba(75,46,26,0.3)' }}>?</span>}
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
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: '#2D1A0E', margin: '0 0 18px', lineHeight: 1.0 }}>
                        Vietnamese<br /><span style={{ color: '#D97706', fontStyle: 'italic' }}>Desserts</span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{ color: 'rgba(75,46,26,0.62)', fontSize: 17, maxWidth: 500, lineHeight: 1.75, margin: '0 0 36px' }}>
                        From silky chè to caramel-kissed bánh flan — Vietnamese sweets are quiet, balanced, and quietly addictive. Less sugar, more soul.
                    </p>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                        {[
                            { Icon: Utensils, val: `${DESSERTS.length}`, lbl: 'Recipes' },
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

            {/* -- FILTER BAR -- */}
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

            {/* -- DESSERT GRID ---------------------------------------------------- */}
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
                        <div style={{ fontSize: 48, marginBottom: 14 }}>??</div>
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

            {/* -- EXPLORE MORE CATEGORIES ----------------------------------------- */}
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
                            { label: 'Breakfast', emoji: '??', href: '/recipes/breakfast', sub: 'Start the day right' },
                            { label: 'Main Dishes', emoji: '??', href: '/recipes/main-dishes', sub: 'The heart of the table' },
                            { label: 'Street Food', emoji: '??', href: '/recipes/street-food', sub: 'Sidewalk classics' },
                            { label: 'Northern Cuisine', emoji: '??', href: '/recipes/north', sub: "Hanoi's finest" },

                            { label: 'Travel Guide', emoji: '???', href: '/stories/travel', sub: 'Where to eat in Vietnam' },
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

// --- SEO Metadata (use in layout or as generateMetadata) ---------------------
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
        description: '10+ authentic Vietnamese dessert recipes — Chè, Bánh, frozen treats and fusion sweets.',
        images: [{
            url: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&h=630&q=85',
            width: 1200, height: 630,
            alt: 'Vietnamese desserts — colourful chè and sweet treats',
        }],
    },
}
