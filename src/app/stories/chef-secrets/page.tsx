'use client'

/**
 * FlavorNest Vietnam — Chef's Secrets Page
 * src/app/stories/chef-secrets/page.tsx
 */

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Tip {
    id: string
    title: string
    subtitle: string
    image: string
    category: string
    categoryColor: string
    level: 'Beginner' | 'Intermediate' | 'Advanced'
    time: string
    excerpt: string
    tips: string[]
    featured?: boolean
}

const TIPS: Tip[] = [
    {
        id: 'perfect-broth',
        title: 'The Secret to a Perfect Vietnamese Broth',
        subtitle: 'Why charring, not boiling, is the key to depth',
        image: '/images/recipes/nuoc-dung-pho.webp',
        category: 'Soups & Broths',
        categoryColor: '#D97706',
        level: 'Intermediate',
        time: '6 min read',
        featured: true,
        excerpt: "Every Vietnamese home cook knows: a great phở starts the night before. The secret is not in the spices — it is in the charring. Onion and ginger placed directly over an open flame until blackened. That char, that smokiness, is what separates a good broth from an unforgettable one.",
        tips: [
            'Char onion and ginger directly over flame until blackened in spots — this adds smokiness and depth that cannot be replicated',
            'Blanch bones in cold water first, drain and rinse completely — this removes impurities and keeps your broth clear',
            'Simmer, never boil — a rolling boil emulsifies fat and makes broth cloudy and heavy',
            'Toast whole spices (star anise, cinnamon, cloves) in a dry pan before adding — this unlocks essential oils',
            'Add fish sauce at the end, not the beginning — heat destroys its delicate umami complexity',
        ],
    },
    {
        id: 'nuoc-cham',
        title: 'Nước Chấm: The Dipping Sauce That Does Everything',
        subtitle: 'The ratio that makes every Vietnamese sauce work',
        image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=900&q=80',
        category: 'Sauces & Condiments',
        categoryColor: '#059669',
        level: 'Beginner',
        time: '4 min read',
        excerpt: "There is one ratio every Vietnamese cook carries in their memory: 1 part fish sauce, 1 part sugar, 5 parts water, 2 parts lime. This is your base. From here, garlic, chilli, and proportion are everything — and they vary by region, by family, by mood.",
        tips: [
            'The golden ratio: 1 fish sauce : 1 sugar : 5 water : 2 lime — memorise this',
            'Use fresh lime juice, never bottled — the difference is immediate and enormous',
            'Dissolve sugar in warm water first before adding other ingredients',
            'Add garlic after mixing — raw garlic in acid softens and mellows over 10 minutes',
            'Northern style is less sweet and more savoury; Southern style is sweeter — adjust to your preference',
        ],
    },
    {
        id: 'caramel-technique',
        title: 'Vietnamese Caramel: The Dark Art of Kho',
        subtitle: 'How to build the sauce that powers half of Vietnamese cooking',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80',
        category: 'Technique',
        categoryColor: '#7C3AED',
        level: 'Intermediate',
        time: '5 min read',
        excerpt: "Kho — to braise in caramel — is one of Vietnamese cooking's most important techniques. From thịt kho tàu to cá kho tộ, the dark, glossy caramel sauce that coats everything is built the same way: sugar cooked in a dry pan until amber, then deglazed with patience and liquid.",
        tips: [
            'Cook sugar dry in a heavy pan over medium heat — do not stir, just swirl occasionally',
            'Wait for it to turn deep amber (not pale gold) before adding liquid — this is where the flavour lives',
            'Stand back when adding liquid — the caramel will spit violently before calming down',
            'Use coconut water (not coconut milk) for authentic Southern Vietnamese kho — it adds sweetness and depth',
            'Low and slow is the law — a vigorous simmer destroys the texture you are building',
        ],
    },
    {
        id: 'herb-selection',
        title: 'Reading a Vietnamese Herb Plate',
        subtitle: 'What each herb does and when to use it',
        image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=80',
        category: 'Ingredients',
        categoryColor: '#166534',
        level: 'Beginner',
        time: '5 min read',
        excerpt: "The herb plate at a Vietnamese restaurant is not decoration. It is a second course, a cooling counterpoint, a textural relief. Learning to read it — understanding what each herb contributes — will transform how you eat and cook Vietnamese food.",
        tips: [
            'Fresh mint cools and brightens — add at the last second, never cook it',
            'Thai basil has anise notes — perfect with phở and any rich broth',
            'Rau răm (Vietnamese coriander) is stronger and more peppery than regular coriander — use sparingly',
            'Perilla (tía tô) has a slightly bitter, minty-anise flavour — essential for bún bò Huế',
            'Tear herbs with your hands, never chop — cutting oxidises and bruises the leaves',
        ],
    },
    {
        id: 'wok-technique',
        title: 'Wok Hei: Chasing the Breath of the Wok',
        subtitle: "The technique behind Vietnam's greatest stir-fries",
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
        category: 'Technique',
        categoryColor: '#EA580C',
        level: 'Advanced',
        time: '7 min read',
        excerpt: "Wok hei — the smoky, slightly charred flavour that comes from cooking at extreme heat — is the most difficult thing to replicate at home. Restaurant burners produce 150,000 BTU. A home burner produces 10,000. But there are ways to compensate.",
        tips: [
            'Heat the wok until it smokes before adding oil — a cold wok means food steams instead of sears',
            'Never crowd the pan — cook in small batches to maintain temperature',
            'For bò lúc lắc, add a knob of butter at the end and toss off the heat — butter browns quickly and adds colour',
            'Use a carbon steel wok, not non-stick — carbon steel holds heat and develops a natural patina over time',
            'If your home burner is weak, heat a cast iron skillet in the oven at maximum temperature, then sear on the hob',
        ],
    },
    {
        id: 'rice-cooking',
        title: 'Perfect Vietnamese Steamed Rice, Every Time',
        subtitle: 'The method that needs no measurements',
        image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=80',
        category: 'Basics',
        categoryColor: '#D97706',
        level: 'Beginner',
        time: '4 min read',
        excerpt: "Vietnamese grandmothers do not measure water for rice. They use their knuckle. Place your finger on top of the rice, add water until it reaches the first knuckle joint. Works every time, regardless of pan size or rice quantity.",
        tips: [
            'Rinse rice 2-3 times until water runs clear — removes excess starch for fluffy, separate grains',
            'The knuckle method: finger touching rice, water to first knuckle joint — never fails',
            'After water is absorbed, turn heat to absolute minimum and steam for 10 minutes with lid on',
            'Never lift the lid during cooking — steam is what finishes the rice',
            'Rest for 5 minutes off heat before serving — this allows grains to firm up and separate cleanly',
        ],
    },
]

const CATEGORIES = ['All', 'Soups & Broths', 'Sauces & Condiments', 'Technique', 'Ingredients', 'Basics']
const LEVELS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']
const LEVEL_COLOR: Record<string, string> = { Beginner: '#10b981', Intermediate: '#f59e0b', Advanced: '#ef4444' }

export default function ChefSecretsPage() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [activeLevel, setActiveLevel] = useState('All Levels')
    const [expandedId, setExpandedId] = useState<string | null>(null)

    const featured = TIPS[0]
    const rest = TIPS.slice(1)
    const filtered = rest.filter(t => {
        const catMatch = activeCategory === 'All' || t.category === activeCategory
        const lvlMatch = activeLevel === 'All Levels' || t.level === activeLevel
        return catMatch && lvlMatch
    })

    return (
        <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');
                * { box-sizing: border-box; }
                .tip-card { background: white; border-radius: 24px; overflow: hidden; border: 1px solid rgba(75,46,26,0.07); transition: transform 0.33s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s, border-color 0.2s; }
                .tip-card:hover { transform: translateY(-5px); box-shadow: 0 24px 56px rgba(75,46,26,0.12); border-color: rgba(217,119,6,0.2); }
                .tip-card:hover .t-img { transform: scale(1.05); }
                .t-img { transition: transform 0.55s ease; }
                .pill { border: 1.5px solid rgba(75,46,26,0.12); border-radius: 100px; padding: 7px 18px; font-size: 13px; font-weight: 500; color: rgba(75,46,26,0.55); background: transparent; cursor: pointer; transition: all 0.18s; white-space: nowrap; font-family: inherit; }
                .pill:hover { color: #D97706; border-color: rgba(217,119,6,0.38); }
                .pill.on { background: #4B2E1A; color: white; border-color: #4B2E1A; }
                .tip-bullet { display: flex; align-items: flex-start; gap: 10; padding: 10px 0; border-bottom: 1px solid rgba(75,46,26,0.05); }
                .tip-bullet:last-child { border-bottom: none; }
            `}</style>

            {/* ── HERO ── */}
            <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                {/* Background image */}
                <div style={{ position: 'absolute', inset: 0 }}>
                    <Image
                        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1800&q=85"
                        alt="Vietnamese chef preparing food in a kitchen"
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                {/* Dark overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,8,4,0.85) 0%, rgba(26,18,8,0.75) 60%, rgba(35,22,8,0.7) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 65% 50%, rgba(217,119,6,0.18) 0%, transparent 55%)', pointerEvents: 'none' }} />

                {/* Content with animation */}
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', position: 'relative', width: '100%' }}>
                    <motion.nav
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 28 }}
                    >
                        {[['Home', '/'], ['Stories', '/stories'], ["Chef's Secrets", '']].map(([label, href], i) => (
                            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                {i > 0 && <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>}
                                {href ? <Link href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 500 }}>{label}</Link>
                                    : <span style={{ color: '#D97706', fontWeight: 600 }}>{label}</span>}
                            </span>
                        ))}
                    </motion.nav>

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}
                    >
                        <div style={{ width: 32, height: 2, background: '#D97706' }} />
                        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: '#D97706', textTransform: 'uppercase' }}>Pro Tips & Techniques</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 8vw, 104px)', fontWeight: 700, color: 'white', margin: '0 0 32px', lineHeight: 0.95, letterSpacing: '-0.02em' }}
                    >
                        The small things<br /><span style={{ color: '#D97706', fontStyle: 'italic', fontWeight: 400 }}>that make all the difference.</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(17px, 2vw, 20px)', maxWidth: 640, lineHeight: 1.7, margin: 0 }}
                    >
                        The techniques Vietnamese home cooks learn from their mothers and grandmothers — the quiet wisdom that separates a good dish from an extraordinary one.
                    </motion.p>
                </div>
            </section>

            {/* FEATURED TIP */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                    <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Essential Technique</span>
                </div>

                <div style={{ background: 'white', borderRadius: 28, overflow: 'hidden', border: '1px solid rgba(75,46,26,0.07)', boxShadow: '0 4px 32px rgba(75,46,26,0.08)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 0 }}>
                        {/* Image */}
                        <div style={{ position: 'relative', minHeight: 360, overflow: 'hidden', background: '#1a1410' }}>
                            <Image src={featured.image} alt={featured.title} fill style={{ objectFit: 'cover', opacity: 0.85 }} quality={90} sizes="50vw" />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, white 100%)' }} />
                        </div>
                        {/* Content */}
                        <div style={{ padding: '40px 40px 40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                                <span style={{ background: featured.categoryColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100 }}>{featured.category}</span>
                                <span style={{ fontSize: 11, color: LEVEL_COLOR[featured.level], fontWeight: 600, background: `${LEVEL_COLOR[featured.level]}15`, padding: '4px 10px', borderRadius: 100 }}>{featured.level}</span>
                            </div>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#2D1A0E', margin: '0 0 10px', lineHeight: 1.2 }}>{featured.title}</h2>
                            <p style={{ fontSize: 14, color: 'rgba(75,46,26,0.5)', fontStyle: 'italic', margin: '0 0 16px' }}>{featured.subtitle}</p>
                            <p style={{ fontSize: 14.5, color: 'rgba(75,46,26,0.65)', lineHeight: 1.72, margin: '0 0 24px' }}>{featured.excerpt}</p>
                            <div style={{ background: '#FAFAF7', borderRadius: 16, padding: '16px 18px' }}>
                                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#D97706', textTransform: 'uppercase', margin: '0 0 12px' }}>5 Key Techniques</p>
                                {featured.tips.map((tip, i) => (
                                    <div key={i} className="tip-bullet" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '9px 0', borderBottom: i < featured.tips.length - 1 ? '1px solid rgba(75,46,26,0.05)' : 'none' }}>
                                        <span style={{ color: '#D97706', fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 1 }}>{i + 1}.</span>
                                        <span style={{ fontSize: 13, color: 'rgba(75,46,26,0.68)', lineHeight: 1.6 }}>{tip}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FILTER + GRID */}
            <section style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 96px' }}>
                <div style={{ display: 'flex', gap: 8, overflowX: 'auto', marginBottom: 12, paddingBottom: 4, flexWrap: 'nowrap' }}>
                    {CATEGORIES.map(c => <button key={c} onClick={() => setActiveCategory(c)} className={`pill ${activeCategory === c ? 'on' : ''}`}>{c}</button>)}
                    <div style={{ width: 1, height: 22, background: 'rgba(75,46,26,0.1)', margin: '8px 4px', flexShrink: 0 }} />
                    {LEVELS.map(l => <button key={l} onClick={() => setActiveLevel(l)} className={`pill ${activeLevel === l ? 'on' : ''}`}>{l}</button>)}
                </div>
                <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.38)', margin: '0 0 32px', fontWeight: 500 }}>{filtered.length} techniques</p>

                <AnimatePresence mode="wait">
                    <motion.div key={`${activeCategory}-${activeLevel}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
                        {filtered.map((tip, i) => (
                            <motion.div key={tip.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                                className="tip-card">
                                {/* Image */}
                                <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: '#1a1410' }}>
                                    <Image src={tip.image} alt={tip.title} fill className="t-img" style={{ objectFit: 'cover', opacity: 0.85 }} sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" quality={75} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,8,4,0.65) 0%, transparent 55%)' }} />
                                    <div style={{ position: 'absolute', top: 14, left: 14, background: tip.categoryColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '5px 13px', borderRadius: 100 }}>{tip.category}</div>
                                    <div style={{ position: 'absolute', top: 14, right: 14, background: `${LEVEL_COLOR[tip.level]}cc`, color: 'white', fontSize: 10, fontWeight: 700, padding: '5px 11px', borderRadius: 100 }}>{tip.level}</div>
                                    <div style={{ position: 'absolute', bottom: 14, right: 14, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)', color: 'rgba(255,255,255,0.8)', fontSize: 11, padding: '4px 10px', borderRadius: 100 }}>{tip.time}</div>
                                </div>

                                {/* Body */}
                                <div style={{ padding: '20px 22px 22px' }}>
                                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: '#2D1A0E', margin: '0 0 6px', lineHeight: 1.2 }}>{tip.title}</h3>
                                    <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.45)', fontStyle: 'italic', margin: '0 0 12px' }}>{tip.subtitle}</p>
                                    <p style={{ fontSize: 13.5, color: 'rgba(75,46,26,0.6)', lineHeight: 1.7, margin: '0 0 16px' }}>{tip.excerpt.slice(0, 140)}...</p>

                                    {/* Expandable tips */}
                                    <AnimatePresence>
                                        {expandedId === tip.id && (
                                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                                style={{ background: '#FAFAF7', borderRadius: 14, padding: '14px 16px', marginBottom: 14, overflow: 'hidden' }}>
                                                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#D97706', textTransform: 'uppercase', margin: '0 0 10px' }}>Key Techniques</p>
                                                {tip.tips.map((t, i) => (
                                                    <div key={i} style={{ display: 'flex', gap: 8, padding: '7px 0', borderBottom: i < tip.tips.length - 1 ? '1px solid rgba(75,46,26,0.05)' : 'none' }}>
                                                        <span style={{ color: '#D97706', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>{i + 1}.</span>
                                                        <span style={{ fontSize: 12.5, color: 'rgba(75,46,26,0.65)', lineHeight: 1.6 }}>{t}</span>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid rgba(75,46,26,0.06)' }}>
                                        <button
                                            onClick={() => setExpandedId(expandedId === tip.id ? null : tip.id)}
                                            style={{ fontSize: 12, fontWeight: 700, color: '#D97706', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: 0, display: 'flex', alignItems: 'center', gap: 5 }}
                                        >
                                            {expandedId === tip.id ? 'Hide techniques ↑' : 'Show techniques ↓'}
                                        </button>
                                        <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.3)', fontWeight: 500 }}>{tip.tips.length} tips</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* MORE STORIES */}
            <section style={{ background: '#2D1A0E', padding: '64px 24px 80px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Keep Exploring</span>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: 'white', margin: '0 0 32px' }}>More from FlavorNest</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
                        {[
                            { label: 'Culinary Culture', emoji: '📖', href: '/stories/culture' },
                            { label: 'Travel Guide', emoji: '🗺️', href: '/stories/travel' },
                            { label: 'All Recipes', emoji: '🍜', href: '/recipes' },
                            { label: 'Street Food', emoji: '🥢', href: '/recipes/street-food' },
                            { label: 'Main Dishes', emoji: '🍖', href: '/recipes/main-dishes' },
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
