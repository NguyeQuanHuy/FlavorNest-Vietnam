'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronRight, Flame, Soup, ScrollText, Coffee, Wheat, Wrench, UtensilsCrossed } from 'lucide-react';

const GUIDES = [
    {
        category: 'Broths & Soups',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 48 Q36 58 54 48"/><line x1="18" y1="48" x2="20" y2="36"/><line x1="54" y1="48" x2="52" y2="36"/><path d="M20 36 Q36 32 52 36"/><path d="M28 34 Q26 28 28 22 Q30 16 28 10"/><path d="M36 33 Q34 27 36 21 Q38 15 36 9"/><path d="M44 34 Q42 28 44 22 Q46 16 44 10"/></svg>',
        color: '#D97706',
        bg: '#FEF3C7',
        items: [
            { title: 'How to Make a Crystal-Clear Pho Broth', slug: 'pho-bo-ha-noi', desc: 'Blanching bones, charring aromatics, the correct simmer. Everything that separates great pho from average.', time: '8 hrs', level: 'Advanced' },
            { title: 'How to Build Bun Bo Hue Broth', slug: 'hue-spicy-beef-noodle-soup', desc: 'Lemongrass oil, annatto color, mam ruoc — the three elements that make this broth unmistakable.', time: '3 hrs', level: 'Intermediate' },
            { title: 'How to Make Canh Chua (Vietnamese Sour Soup)', slug: 'canh-chua', desc: 'Tamarind souring, pineapple sweetness, fresh herbs. The soup of the Mekong Delta.', time: '40 min', level: 'Easy' },
        ],
    },
    {
        category: 'Rolling & Wrapping',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="36" cy="36" rx="20" ry="10"/><line x1="16" y1="36" x2="56" y2="36"/><path d="M20 30 Q36 24 52 30"/><path d="M20 42 Q36 48 52 42"/></svg>',
        color: '#059669',
        bg: '#D1FAE5',
        items: [
            { title: 'How to Roll Perfect Goi Cuon (Fresh Spring Rolls)', slug: 'fresh-spring-rolls', desc: 'Wet the rice paper correctly, layer the filling strategically, roll tight. The technique takes 3 tries to master.', time: '30 min', level: 'Easy' },
            { title: 'How to Wrap Banh Cuon (Steamed Rice Rolls)', slug: 'banh-uot-dau-he', desc: 'Spreading the batter thin, peeling the sheet without tearing, rolling with filling inside.', time: '45 min', level: 'Intermediate' },
            { title: 'How to Make Banh Mi at Home', slug: 'banh-mi', desc: 'The bread, the pate, the pickles — assembled in the right order. Why each layer matters.', time: '30 min', level: 'Easy' },
        ],
    },
    {
        category: 'Sauces & Condiments',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M24 20 L22 52 Q22 58 36 58 Q50 58 50 52 L48 20 Z"/><rect x="26" y="14" width="20" height="8" rx="3"/><path d="M24 38 Q36 42 48 38" strokeDasharray="3 2"/></svg>',
        color: '#7C3AED',
        bg: '#EDE9FE',
        items: [
            { title: 'How to Balance Nuoc Cham (Vietnamese Dipping Sauce)', slug: 'nuoc-cham-guide', desc: 'The 3:2:4 ratio of fish sauce, sugar, water. How to adjust for each dish. Why fresh lime matters.', time: '5 min', level: 'Easy' },
            { title: 'How to Make Scallion Oil (Dau Hanh)', slug: 'banh-uot-dau-he', desc: 'Hot oil poured over sliced scallions until they sizzle. The technique that makes com tam taste like Saigon.', time: '10 min', level: 'Easy' },
            { title: 'How to Make Vietnamese Pickled Vegetables (Do Chua)', slug: 'banh-mi', desc: 'Julienne the daikon and carrot, salt to draw moisture, pickle in rice vinegar.', time: '40 min', level: 'Easy' },
        ],
    },
    {
        category: 'Coffee',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 52 Q22 60 36 60 Q50 60 50 52 L46 38 L26 38 Z"/><rect x="24" y="28" width="24" height="12" rx="2"/><rect x="26" y="22" width="20" height="6" rx="2"/><line x1="33" y1="38" x2="33" y2="44"/><line x1="36" y1="38" x2="36" y2="46"/><line x1="39" y1="38" x2="39" y2="44"/><path d="M50 44 Q56 44 56 50 Q56 56 50 56"/></svg>',
        color: '#92400E',
        bg: '#FEF3C7',
        items: [
            { title: 'How to Use a Vietnamese Phin Filter', slug: 'ca-phe-sua-da', desc: 'Water temperature, bloom time, why you wait. The phin is designed to make patience mandatory.', time: '8 min', level: 'Easy' },
            { title: 'How to Make Ca Phe Trung (Egg Coffee)', slug: 'ca-phe-trung', desc: 'Whipping the egg yolk to ribbon stage, spooning it over hot coffee, eating the foam with a spoon first.', time: '10 min', level: 'Easy' },
            { title: 'How to Make Ca Phe Muoi (Salt Coffee)', slug: 'ca-phe-muoi', desc: 'Salted cream over dark coffee. Why the layers must stay separate. The Hue technique.', time: '8 min', level: 'Easy' },
        ],
    },
    {
        category: 'Rice & Noodles',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="26" y1="10" x2="32" y2="62"/><line x1="46" y1="10" x2="40" y2="62"/><path d="M30 40 Q36 34 42 40 Q36 46 30 40"/><path d="M31 48 Q36 43 41 48"/></svg>',
        color: '#0369A1',
        bg: '#DBEAFE',
        items: [
            { title: 'How to Cook Perfect Vietnamese Jasmine Rice', slug: 'com-tam', desc: 'The wash, the ratio, the rest. Why rice cooker results differ from stovetop.', time: '25 min', level: 'Easy' },
            { title: 'How to Cook Pho Noodles (Banh Pho)', slug: 'pho-bo-ha-noi', desc: 'Fresh vs dried, correct blanching time, why you never cook them in the broth.', time: '5 min', level: 'Easy' },
            { title: 'How to Make Mi Quang at Home', slug: 'mi-quang', desc: 'Annatto oil, the concentrated broth, the sesame cracker. Why this dish is not a soup.', time: '75 min', level: 'Intermediate' },
        ],
    },
    {
        category: 'Essential Techniques',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 54 Q36 64 54 54"/><line x1="18" y1="54" x2="22" y2="46"/><line x1="54" y1="54" x2="50" y2="46"/><path d="M22 46 Q36 42 50 46"/><path d="M30 42 Q28 34 32 28 Q34 24 36 28 Q36 20 40 16 Q42 24 40 28 Q44 24 46 28 Q44 36 42 42"/></svg>',
        color: '#DC2626',
        bg: '#FEE2E2',
        items: [
            { title: 'How to Char Vietnamese Aromatics', slug: 'pho-bo-ha-noi', desc: 'Direct flame or broiler, the correct level of blackening, why char adds sweetness not bitterness.', time: '10 min', level: 'Easy' },
            { title: 'How to Make Crispy Fried Shallots', slug: 'fried-shallots', desc: 'Cold-start in oil, pull when pale gold not golden-brown. The most reusable Vietnamese technique.', time: '15 min', level: 'Easy', isHowTo: true },
            { title: 'How to Balance Vietnamese Flavors', slug: 'balance-flavors', desc: 'Sweet, sour, salty, bitter, spicy — the 5-element framework. How to fix any dish that tastes wrong.', time: '7 min read', level: 'Essential', isHowTo: true },
            { title: 'Nem Nem: How to Season Vietnamese Food', slug: 'season-vietnamese-food', desc: 'Fish sauce, sugar, lime, MSG — what each one does and when to add it. The 4-stage tasting sequence.', time: '8 min read', level: 'Essential', isHowTo: true },
        ],
    },
    {
        category: 'Kitchen & Equipment',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M24 18 L50 44 Q52 48 48 50 L22 24 Z"/><line x1="16" y1="58" x2="56" y2="58"/></svg>',
        color: '#4B2E1A',
        bg: '#F5EDE3',
        items: [
            { title: 'How to Set Up a Vietnamese Kitchen', slug: 'vietnamese-kitchen-setup', desc: 'Carbon steel wok vs non-stick, what you actually need vs what you dont.', time: '8 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Season and Care for a Carbon Steel Wok', slug: 'season-wok', desc: 'Strip the factory coating, build seasoning in 4 layers, daily 60-second care routine.', time: '7 min read', level: 'Essential', isHowTo: true },
            { title: 'Vietnamese Knife Skills', slug: 'knife-skills', desc: 'How to bruise lemongrass, slice paper-thin beef for pho, julienne daikon for do chua.', time: '8 min read', level: 'Essential', isHowTo: true },
        ],
    },
];

const LEVEL_COLOR: Record<string, string> = {
    Easy: '#059669',
    Intermediate: '#D97706',
    Advanced: '#DC2626',
    Essential: '#7C3AED',
};

const ALL = 'All';

export default function HowToPage() {
    const [active, setActive] = useState(ALL);

    const categories = [ALL, ...GUIDES.map(g => g.category)];
    const filtered = active === ALL ? GUIDES : GUIDES.filter(g => g.category === active);

    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 40px', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                    <div style={{ width: 32, height: 2, background: '#D97706' }} />
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#D97706', textTransform: 'uppercase' }}>Technique Guides</span>
                    <div style={{ width: 32, height: 2, background: '#D97706' }} />
                </div>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#2D1A0E', lineHeight: 1.1, marginBottom: 16 }}>
                    How To Cook Vietnamese Food
                </h1>
                <p style={{ fontSize: 16, color: 'rgba(75,46,26,0.6)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
                    The techniques behind the recipes. Learn the building blocks of Vietnamese cooking and every recipe becomes easier.
                </p>
            </div>

            {/* Category filter tabs */}
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 40px', overflowX: 'auto' }}>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'nowrap', justifyContent: 'center' }}>
                    {categories.map(cat => {
                        const guide = GUIDES.find(g => g.category === cat);
                        const isActive = active === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 6,
                                    padding: '8px 16px', borderRadius: 100,
                                    fontSize: 13, fontWeight: isActive ? 700 : 500,
                                    cursor: 'pointer', whiteSpace: 'nowrap',
                                    border: isActive ? 'none' : '1.5px solid rgba(75,46,26,0.12)',
                                    background: isActive ? (guide?.color ?? '#D97706') : '#fff',
                                    color: isActive ? '#fff' : 'rgba(75,46,26,0.7)',
                                    transition: 'all 0.18s',
                                    fontFamily: "'DM Sans', sans-serif",
                                }}
                            >
                                {guide?.icon && <span style={{ display: 'flex', color: guide.color ?? '#D97706' }} dangerouslySetInnerHTML={{ __html: guide.icon }} />}
                                {cat}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Guides */}
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 80px' }}>
                <AnimatePresence mode="wait">
                    {filtered.map((group) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            style={{ marginBottom: 52 }}
                        >
                            {/* Category header */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                                <div style={{ width: 44, height: 44, borderRadius: 14, background: group.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
                                    <span style={{ display: 'flex', color: group.color }} dangerouslySetInnerHTML={{ __html: group.icon }} />
                                </div>
                                <div>
                                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{group.category}</h2>
                                    <div style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)', marginTop: 2 }}>{group.items.length} guides</div>
                                </div>
                            </div>

                            {/* Cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14 }}>
                                {group.items.map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.06 }}
                                    >
                                        <Link
                                            href={item.isHowTo ? `/how-to/${item.slug}` : `/recipes/${item.slug}`}
                                            style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                                        >
                                            <div
                                                style={{
                                                    background: '#fff',
                                                    border: '1px solid rgba(75,46,26,0.07)',
                                                    borderRadius: 16,
                                                    padding: '20px',
                                                    height: '100%',
                                                    display: 'flex', flexDirection: 'column',
                                                    transition: 'all 0.2s',
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                }}
                                                onMouseEnter={e => {
                                                    const el = e.currentTarget as HTMLDivElement;
                                                    el.style.boxShadow = '0 8px 32px rgba(75,46,26,0.12)';
                                                    el.style.transform = 'translateY(-3px)';
                                                    el.style.borderColor = group.color + '40';
                                                }}
                                                onMouseLeave={e => {
                                                    const el = e.currentTarget as HTMLDivElement;
                                                    el.style.boxShadow = 'none';
                                                    el.style.transform = 'translateY(0)';
                                                    el.style.borderColor = 'rgba(75,46,26,0.07)';
                                                }}
                                            >
                                                {/* Color accent top bar */}
                                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: group.color, borderRadius: '16px 16px 0 0' }} />

                                                {/* Level badge */}
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, marginTop: 4 }}>
                                                    <span style={{
                                                        fontSize: 10, fontWeight: 700,
                                                        color: LEVEL_COLOR[item.level],
                                                        background: LEVEL_COLOR[item.level] + '15',
                                                        padding: '3px 10px', borderRadius: 100,
                                                        textTransform: 'uppercase', letterSpacing: '0.08em'
                                                    }}>
                                                        {item.level}
                                                    </span>
                                                    <span style={{ fontSize: 11, color: 'rgba(75,46,26,0.4)', display: 'flex', alignItems: 'center', gap: 4 }}>
                                                        ⏱ {item.time}
                                                    </span>
                                                </div>

                                                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: '#2D1A0E', margin: '0 0 10px', lineHeight: 1.35, flex: 1, letterSpacing: '-0.01em' }}>
                                                    {item.title}
                                                </h3>
                                                <p style={{ fontSize: 12, color: 'rgba(75,46,26,0.55)', lineHeight: 1.6, margin: '0 0 14px' }}>
                                                    {item.desc}
                                                </p>

                                                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: group.color, marginTop: 'auto' }}>
                                                    Read guide <ChevronRight size={13} />
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Bottom CTA */}
            <div style={{ background: '#2D1A0E', padding: '56px 24px', textAlign: 'center' }}>
                <div style={{ marginBottom: 16 }}><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="26" cy="26" r="26" fill="#D97706" opacity="0.15"/><path d="M14 30 Q26 38 38 30" stroke="#F5EDE3" strokeWidth="2.5" strokeLinecap="round"/><line x1="14" y1="30" x2="15" y2="22" stroke="#F5EDE3" strokeWidth="2" strokeLinecap="round"/><line x1="38" y1="30" x2="37" y2="22" stroke="#F5EDE3" strokeWidth="2" strokeLinecap="round"/><path d="M15 22 Q26 18 37 22" stroke="#F5EDE3" strokeWidth="2" strokeLinecap="round"/><path d="M20 22 Q23 16 26 19 Q29 16 32 22" stroke="#D97706" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M22 19 Q22 14 24 12" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/><path d="M26 18 Q26 13 28 11" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/><path d="M30 19 Q30 14 32 12" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/></svg></div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>Ready to cook?</h3>
                <p style={{ fontSize: 15, color: 'rgba(245,237,227,0.5)', marginBottom: 24 }}>Browse the full recipe collection.</p>
                <Link href="/recipes" style={{ display: 'inline-block', background: '#D97706', color: 'white', fontWeight: 600, fontSize: 14, padding: '14px 32px', borderRadius: 100, textDecoration: 'none' }}>
                    Browse All Recipes →
                </Link>
            </div>
        </div>
    );
}