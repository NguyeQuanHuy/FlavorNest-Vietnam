'use client'

/**
 * FlavorNest Vietnam — Travel Guide Page
 * src/app/stories/travel/page.tsx
 */

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// ─── Types ────────────────────────────────────────────────────────────────────
type Region = 'All' | 'North' | 'Central' | 'South'
type FoodType = 'All' | 'Street Food' | 'Fine Dining' | 'Hidden Gem' | 'Local Market' | 'Café Culture'

interface Guide {
    id: string
    city: string
    dish: string
    subtitle: string
    region: Region
    type: FoodType
    tag: string
    tagColor: string
    image: string
    intro: string
    story: string
    mustTry: string[]
    bestTime: string
    href: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const GUIDES: Guide[] = [
    {
        id: 'pho-hanoi',
        city: 'Hanoi',
        dish: 'Hanoi Beef Pho',
        subtitle: "The bowl that haunts you long after you've left",
        region: 'North',
        type: 'Street Food',
        tag: 'Iconic',
        tagColor: '#D97706',
        image: '/images/recipes/xoixoai.jpg',
        intro: 'At 6am on a cold Hanoi morning, a plastic stool on Bát Đàn street is the best seat in the world.',
        story: 'The broth has been simmering since 3am. You smell it before you see the stall — that low, bone-deep perfume of charred ginger and star anise that only comes with hours of patience. This is not fast food. This is devotion in a bowl.',
        mustTry: ['Rare & Well-Done Beef Pho at Phở Bát Đàn', 'Pho Spring Rolls at Ngũ Xá street', 'Chicken Pho at any corner stall in Old Quarter'],
        bestTime: 'Early morning, 6–8am — before the tourist crowds arrive',
        href: '/stories/travel/pho-hanoi',
    },
    {
        id: 'banh-mi-saigon',
        city: 'Hồ Chí Minh City',
        dish: 'Saigon Banh Mi',
        subtitle: 'A baguette that conquered the world from a sidewalk cart',
        region: 'South',
        type: 'Street Food',
        tag: 'Must Try',
        tagColor: '#059669',
        image: '/images/recipes/banh-mi-thit-nuong.jpeg',
        intro: 'No culinary invention tells Vietnam\'s history better than a bánh mì. French baguette, Vietnamese soul.',
        story: 'The bread shatters when you bite — that perfect crust — and then everything inside hits at once: silky pâté, smoky thịt nướng, the sharp bite of pickled daikon, cool cucumber, and a ghost of Maggi. It costs 20,000 đồng. It is extraordinary.',
        mustTry: ['Banh Mi Huynh Hoa on Lê Thị Riêng', 'Banh Mi Phượng (the Hội An cousin)', 'Egg Banh Mi at any dawn cart'],
        bestTime: 'Breakfast or late night — 7am or 10pm, both magical',
        href: '/stories/travel/banh-mi-saigon',
    },
    {
        id: 'cao-lau-hoian',
        city: 'Hội An',
        dish: 'Hoi An Cao Lau',
        subtitle: 'A dish you can only truly eat in one town on Earth',
        region: 'Central',
        type: 'Hidden Gem',
        tag: 'Hidden Gem',
        tagColor: '#7C3AED',
        image: '/images/recipes/cao-lau-hoi-an.jpg',
        intro: 'Legend says the noodles can only be made with water from a single ancient well in Hội An\'s old town.',
        story: 'Thick, chewy noodles with a slight char — they\'re ash-treated, like Japanese ramen meets Chinese noodles, somewhere in the middle of Vietnam\'s trading-port past. Topped with crispy rice crackers, sliced pork, and a thicket of fresh herbs. Simple. Profound. Irreplaceable.',
        mustTry: ['Cao lau at Trương Minh Lượng (45 Trần Phú)', 'Cao lau bà Bé at the covered market', 'Morning bowl at Cô Ba Hội An'],
        bestTime: 'Morning, in the lantern-lit old town before the tour groups arrive',
        href: '/stories/travel/cao-lau-hoian',
    },
    {
        id: 'bun-bo-hue',
        city: 'Huế',
        dish: 'Hue Beef Noodles',
        subtitle: 'The royal city\'s fiery, forgotten masterpiece',
        region: 'Central',
        type: 'Street Food',
        tag: 'Underrated',
        tagColor: '#BE185D',
        image: '/images/recipes/bun-bo-hue.webp',
        intro: 'Ask any Vietnamese chef which noodle soup deserves more global fame, and most will say: Bún Bò Huế.',
        story: 'While phở gets the headlines, Huế\'s royal noodle soup quietly sits there being more complex, more layered, more brazenly spiced. The broth is lemongrass-forward and shrimp-paste-deep, tinted red from annatto oil. Thick round noodles. Slices of beef shank. A chunk of pork knuckle. It\'s theatrical and delicious.',
        mustTry: ['Beef Noodles Mụ Rớt on Nguyễn Công Trứ', 'Beef Noodles at Đông Ba market at dawn', 'Version with crab cake (cha cua) added'],
        bestTime: 'Rainy season (Sept–Nov) — the soup tastes better when Huế is grey and wet',
        href: '/stories/travel/bun-bo-hue',
    },
    {
        id: 'banh-xeo-mekong',
        city: 'Mekong Delta',
        dish: 'Mekong Delta Crispy Pancake',
        subtitle: 'The sizzling crêpe that sounds like a rainstorm hitting a hot pan',
        region: 'South',
        type: 'Local Market',
        tag: 'Local Favourite',
        tagColor: '#EA580C',
        image: '/images/recipes/banh-xeo-mien-tay.jpg',
        intro: 'The name means "sizzling cake" — and the sound it makes when batter hits the wok is half the experience.',
        story: 'Turmeric-yellow rice flour crêpe, enormous, crispy-edged and stuffed fat with shrimp, pork belly, bean sprouts, and mung bean. You break it apart with your hands, wrap pieces in mustard leaf and herbs, dip into nuoc cham. No cutlery. No pretension. Just an ancient, perfect pleasure in a Mekong river town.',
        mustTry: ['Crispy Pancake at Cần Thơ floating market stalls', 'Crispy Pancake 46A in Sài Gòn (Banh xeo)', 'Hand-rolled with raw vegetable plate (rau song)'],
        bestTime: 'Lunch, 11am–2pm — when the crêpe pans are firing at full heat',
        href: '/stories/travel/banh-xeo-mekong',
    },
    {
        id: 'seafood-vungtau',
        city: 'Vũng Tàu',
        dish: 'Vung Tau Fresh Seafood',
        subtitle: 'Where Saigonese escape the city to eat the ocean',
        region: 'South',
        type: 'Fine Dining',
        tag: 'Seafood Paradise',
        tagColor: '#0284C7',
        image: '/images/recipes/hai-san-vung-tau.jpg',
        intro: 'Two hours from Saigon, the ocean opens up — and so does the menu. Nothing frozen. Everything alive until this morning.',
        story: 'The fishing boats come in at 4am. By 7am, the seafood restaurants on Trần Phú boulevard have filled their tanks. By noon, those tanks are half-empty — and the city\'s visitors are sitting with cold beer, cracked crab claws, and grilled squid that tastes of nothing but the sea it came from two hours ago.',
        mustTry: ['salt-roasted blue crab (Ghe rang muoi)', 'sun-dried squid (Muc mot nang)', 'tiny coconut-rice cakes with shrimp — Banh khot vung tau'],
        bestTime: 'Weekday lunch — seafood is freshest and restaurants less crowded',
        href: '/stories/travel/seafood-vungtau',
    },
    {
        id: 'ca-phe-dalat',
        city: 'Đà Lạt',
        dish: 'Dalat Highland Coffee',
        subtitle: 'Coffee grown at 1,500 metres, drunk slowly in the mountain mist',
        region: 'South',
        type: 'Café Culture',
        tag: 'Café Culture',
        tagColor: '#166534',
        image: '/images/recipes/ca-phe-da-lat.webp',
        intro: 'Đà Lạt doesn\'t just grow coffee — it makes an entire ritual out of drinking it, in pine-scented air, in vintage cafés with condensation on the windows.',
        story: 'The coffee here is Arabica, grown on red volcanic soil at altitude. It\'s fruitier, more floral, less bitter than the Robusta of the south. Sit in one of the old French-colonial cafés on Hoàng Diệu street — wooden floors, mismatched chairs, rain on the roof — and let a phin drip its 15-minute meditation into your glass.',
        mustTry: ['Vietnamese Iced Milk Coffee (Ca phe sua da) in any hillside garden café', 'Egg coffee (ca phe trung) at Café Tùng', 'Strawberry wine + cà phê combo — very Đà Lạt'],
        bestTime: 'Late afternoon when the mist rolls in from the pine forests',
        href: '/stories/travel/ca-phe-dalat',
    },
    {
        id: 'bun-thit-nuong-hcm',
        city: 'Hồ Chí Minh City',
        dish: 'Grilled Pork Rice Noodles',
        subtitle: 'The bowl that defines Saigon\'s casual, sun-soaked soul',
        region: 'South',
        type: 'Street Food',
        tag: 'Street Classic',
        tagColor: '#D97706',
        image: '/images/recipes/bun-thit-nuong.jpg',
        intro: 'No soup. No heat. Just cold vermicelli, caramelised pork, crushed peanuts, and a flood of nuoc cham.',
        story: 'It\'s served at room temperature — a Saigon concession to the relentless heat. Springy white noodles piled with chargrilled pork skewers, a fried spring roll, fresh mint, pickled carrot, and bean sprouts. You pour the fish sauce dressing over everything yourself. It\'s casual, messy, brilliant, and costs the price of a coffee elsewhere in the world.',
        mustTry: ['Grilled Pork Rice Noodles (Bun thit nuong) at Như Lan on Hàm Nghi', 'Version with Crispy Spring Rolls (cha gio)', 'Eaten standing at a Quận 1 market stall at noon'],
        bestTime: 'Lunchtime — Saigonese eat this as a midday meal, and it shows',
        href: '/stories/travel/bun-thit-nuong',
    },
]

const REGION_LABEL: Record<Region, string> = {
    All: 'All Vietnam',
    North: '🏯 Northern Vietnam',
    Central: '🌶️ Central Vietnam',
    South: '🌴 Southern Vietnam',
}

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.08 },
    }),
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function GuideCard({ guide, index }: { guide: Guide; index: number }) {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
        >
            <Link
                href={guide.href}
                className="group block bg-white rounded-[28px] overflow-hidden border border-[#4B2E1A]/[0.07] hover:border-[#D97706]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#4B2E1A]/10"
                style={{ textDecoration: 'none', transform: hovered ? 'translateY(-6px)' : 'translateY(0)', transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.2s' }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-[#f0ebe4]">
                    <Image
                        src={guide.image}
                        alt={`${guide.dish} — ${guide.city}, Vietnam`}
                        fill
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        style={{ objectFit: 'cover', transform: hovered ? 'scale(1.07)' : 'scale(1)', transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                        quality={80}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(75,46,26,0.7) 0%, transparent 55%)', opacity: hovered ? 1 : 0.6, transition: 'opacity 0.3s' }} />

                    <div className="absolute top-4 left-4" style={{ background: guide.tagColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100 }}>
                        {guide.tag}
                    </div>

                    <div className="absolute top-4 right-4" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', color: 'white', fontSize: 11, fontWeight: 600, padding: '5px 13px', borderRadius: 100 }}>
                        📍 {guide.city}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: 'white', margin: 0, lineHeight: 1.15, textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
                            {guide.dish}
                        </h3>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6">
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D97706' }}>{guide.type}</span>

                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontStyle: 'italic', color: '#4B2E1A', lineHeight: 1.5, margin: '6px 0 12px', fontWeight: 600 }}>
                        "{guide.subtitle}"
                    </p>

                    <p style={{ fontSize: 14, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, margin: '0 0 18px' }}>
                        {guide.intro}
                    </p>

                    <div style={{ background: '#F5EDE3', borderRadius: 14, padding: '12px 14px', marginBottom: 18 }}>
                        <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D97706', margin: '0 0 8px' }}>Must Try</p>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {guide.mustTry.slice(0, 2).map((t) => (
                                <li key={t} style={{ fontSize: 12.5, color: '#4B2E1A', display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                                    <span style={{ color: '#D97706', flexShrink: 0, marginTop: 2 }}>↗</span>
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p style={{ fontSize: 12, color: 'rgba(75,46,26,0.45)', display: 'flex', alignItems: 'flex-start', gap: 6, margin: '0 0 18px' }}>
                        <span style={{ flexShrink: 0 }}>🕐</span>
                        <span><strong style={{ color: 'rgba(75,46,26,0.65)', fontWeight: 600 }}>Best time:</strong> {guide.bestTime}</span>
                    </p>

                    <div style={{ paddingTop: 16, borderTop: '1px solid rgba(75,46,26,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#D97706', display: 'flex', alignItems: 'center', gap: 6, transition: 'gap 0.2s' }}>
                            Explore this guide
                            <span style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
                        </span>
                        <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.35)', fontWeight: 500 }}>{REGION_LABEL[guide.region]}</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function TravelGuidePage() {
    const heroRef = useRef<HTMLDivElement>(null)
    const [mounted, setMounted] = useState(false)
    useEffect(() => { setMounted(true) }, [])
    const { scrollYProgress } = useScroll({ target: mounted ? heroRef : undefined, offset: ['start start', 'end start'] })

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');
                * { box-sizing: border-box; }
                a { color: inherit; }
            `}</style>

            {/* ── HERO ── */}
            <section ref={heroRef} style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <Image
                        src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1800&q=85"
                        alt="Vietnamese street food market at golden hour"
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,8,4,0.85) 0%, rgba(26,18,8,0.75) 60%, rgba(35,22,8,0.7) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 65% 50%, rgba(217,119,6,0.18) 0%, transparent 55%)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', position: 'relative', width: '100%' }}>
                    <motion.nav
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 28 }}
                    >
                        {[['Home', '/'], ['Stories', '/stories'], ['Travel', '']].map(([label, href], i) => (
                            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {i > 0 && <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>}
                                {href ? <Link href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                    : <span style={{ color: '#D97706', fontWeight: 600 }}>{label}</span>}
                            </span>
                        ))}
                    </motion.nav>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}
                    >
                        <div style={{ width: 32, height: 2, background: '#D97706' }} />
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: '#D97706', textTransform: 'uppercase' }}>Where to Eat in Vietnam</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 104px)', fontWeight: 700, color: 'white', margin: '0 0 32px', lineHeight: 0.95, letterSpacing: '-0.02em' }}
                    >
                        Eat the country<br /><span style={{ color: '#D97706', fontStyle: 'italic', fontWeight: 400 }}>one street at a time.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(17px, 2vw, 20px)', maxWidth: 640, lineHeight: 1.7, margin: 0 }}
                    >
                        From plastic stools in Hanoi alleys to seafood shacks on Vung Tau cliffs — a guide to where Vietnam actually eats.
                    </motion.p>
                </div>
            </section>

            {/* ── EDITOR'S NOTE ── */}
            <section style={{ background: '#F5EDE3', padding: '72px 40px' }}>
                <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
                            <div style={{ width: 40, height: 1.5, background: '#D97706' }} />
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#D97706', textTransform: 'uppercase' }}>Editor's Note</span>
                            <div style={{ width: 40, height: 1.5, background: '#D97706' }} />
                        </div>
                        <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 3vw, 28px)', fontStyle: 'italic', color: '#4B2E1A', lineHeight: 1.6, margin: 0 }}>
                            "Vietnamese food is not a cuisine you eat. It's one you live. You sit on the street, elbow-to-elbow with strangers, sharing a bowl of something that someone's grandmother perfected, and for a moment, the world is exactly the right size."
                        </blockquote>
                        <p style={{ marginTop: 20, fontSize: 13, fontWeight: 600, color: 'rgba(75,46,26,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                            — FlavorNest Travel Team
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── GUIDES GRID ── */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 40px 96px' }} aria-label="Destination guides">
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 12 }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                            <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>The Guides</span>
                        </div>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>
                            All Destination Guides
                        </h2>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.38)', fontWeight: 500 }}>{GUIDES.length} guides</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
                    {GUIDES.map((guide, i) => (
                        <GuideCard key={guide.id} guide={guide} index={i} />
                    ))}
                </div>
            </section>

            {/* ── FOOTER LINKS ── */}
            <section style={{ background: '#1A0E07', padding: '48px 40px 60px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
                    <div>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: 'white' }}>FlavorNest</span>
                        <span style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 2 }}>Vietnam Gourmet</span>
                    </div>
                    <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                        {[
                            { label: 'All Recipes', href: '/recipes' },
                            { label: 'Northern Cuisine', href: '/recipes/north' },
                            { label: 'Kitchen Stories', href: '/stories' },
                            { label: 'About FlavorNest', href: '/about' },
                        ].map(l => (
                            <Link key={l.href} href={l.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.15s' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#D97706')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
