'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function WhatToEatInVietnamPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const { scrollYProgress } = useScroll({
        target: mounted ? scrollRef : undefined,
        offset: ['start start', 'end end'],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    return (
        <article ref={scrollRef} style={{ backgroundColor: '#FAFAF7' }}>

            {/* Hero */}
            <motion.section style={{ position: 'relative', height: '100vh', minHeight: '600px', overflow: 'hidden', opacity: heroOpacity }}>
                <motion.div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/recipes/street-foods.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.3) 0%, rgba(45,26,14,0.2) 35%, rgba(45,26,14,0.93) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    FOOD GUIDE · VIETNAM · 2026
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px', maxWidth: '900px' }}>
                                What to Eat in Vietnam: The Only Food Guide You Need
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '720px', lineHeight: 1.5, marginBottom: '32px' }}>
                                From a 6am bowl of phở in Hanoi to a midnight bánh mì in Saigon — this is every dish you cannot leave Vietnam without eating.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 19, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>10 min read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ delay: 1.5, duration: 2.5, repeat: Infinity }}
                    style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '2px', fontFamily: 'DM Sans, sans-serif', textAlign: 'center' }}>
                    SCROLL TO READ ↓
                </motion.div>
            </motion.section>

            {/* Body */}
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px 40px', fontFamily: 'Georgia, "Iowan Old Style", "Palatino Linotype", serif', color: '#2D1A0E' }}>

                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.45rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    There are countries where you eat well. Then there is Vietnam, where you eat constantly — breakfast at 6am, street snack at 10, lunch at noon, afternoon coffee at 3, dinner at 6, late-night bánh mì at 11 — and somehow never feel heavy. This guide covers every meal you should not miss.
                </motion.p>

                <Section>
                    <DropCap>V</DropCap>ietnam is one of the great food destinations on earth. Not in the way that France or Japan are great food destinations — structured, codified, reverent toward tradition — but in the way that makes you eat standing up on a sidewalk at 7am and feel, genuinely, that this is one of the best things you have ever tasted. The food is cheap, abundant, regional, obsessively specific, and deeply tied to time of day, season, and geography. A dish eaten in Hanoi tastes different from the same dish eaten in Saigon. A bowl of phở eaten at dawn tastes different from one eaten at noon. These are not small differences. They are the point.
                </Section>

                <SectionDivider />

                {/* Section: Breakfast */}
                <SectionHeader>Breakfast: 5am – 9am</SectionHeader>

                <Section>
                    The Vietnamese breakfast is not toast and coffee. It is a hot, broth-based meal eaten on a plastic stool on the sidewalk while the city wakes up around you. In Hanoi, this means phở — the clear beef broth that has been simmering since before you went to sleep, with silky rice noodles and thin slices of beef that cook in the bowl from the heat of the broth poured over them. In Saigon, it might be cơm tấm — broken rice with a lacquered grilled pork chop, a fried egg, and a side of pickled vegetables. In the central coast, it is bánh canh — thick, chewy noodles in an anchovy broth blanketed with raw garlic chives.
                </Section>

                <DishCallout
                    dishes={[
                        { name: 'Phở Bò', region: 'Hanoi', description: 'Beef broth, rice noodles, raw beef. The national breakfast.' },
                        { name: 'Cơm Tấm', region: 'Saigon', description: 'Broken rice with grilled pork chop, egg, scallion oil.' },
                        { name: 'Bánh Cuốn', region: 'Hanoi', description: 'Steamed rice rolls with pork and wood ear mushroom.' },
                        { name: 'Xôi Xéo', region: 'Hanoi', description: 'Golden sticky rice with mung bean and crispy shallots.' },
                        { name: 'Hủ Tiếu', region: 'Mekong Delta', description: 'Pork and squid broth with springy rice noodles.' },
                    ]}
                    label="Essential Breakfasts"
                />

                <SectionDivider />

                {/* Section: Street Food */}
                <SectionHeader>Street Food: All Day</SectionHeader>

                <Section>
                    Vietnamese street food operates outside the concept of meal times. You eat it whenever you encounter it, standing up, in transit, between meals, instead of meals. The bánh mì vendor on the corner of Lê Lợi street in Ho Chi Minh City has been selling the same sandwich since 1958. The woman who makes bánh tráng trộn — shredded rice paper tossed with green mango, dried shrimp, quail eggs, and a fiery tamarind dressing — sets up at 3pm and sells out by 7. You do not plan to eat these things. You smell them, or you turn a corner and they are there, and you stop.
                </Section>

                <Section>
                    The bánh mì deserves its own paragraph. Vietnam took the French baguette — brought by colonial administrators who wanted their morning bread — and made it something the French never imagined. The Vietnamese baguette is lighter and crispier than its European cousin, with a thin shatter-glass crust and a soft, almost hollow interior. It is split and filled with pâté, cold cuts or grilled pork, pickled daikon and carrot, cucumber, cilantro, fresh chili, and a slick of Maggi seasoning sauce. The result is one of the great sandwiches of the world, costing approximately $1 and available twenty-four hours a day in any city in the country.
                </Section>

                <PullQuote>
                    "You do not plan to eat street food. You smell it, or you turn a corner and it is there."
                </PullQuote>

                <DishCallout
                    dishes={[
                        { name: 'Bánh Mì', region: 'Nationwide', description: 'The world\'s best sandwich. Crusty baguette, pâté, pickled veg, fresh herbs.' },
                        { name: 'Gỏi Cuốn', region: 'Southern', description: 'Fresh spring rolls with shrimp, pork, herbs. Dipped in peanut sauce.' },
                        { name: 'Bánh Xèo', region: 'Central & South', description: 'Crispy turmeric crêpe with shrimp, pork, bean sprouts.' },
                        { name: 'Bánh Tráng Trộn', region: 'Saigon', description: 'Rice paper salad — tangy, spicy, addictive street snack.' },
                        { name: 'Chả Giò', region: 'Southern', description: 'Crispy fried spring rolls. Eat immediately.' },
                    ]}
                    label="Essential Street Foods"
                />

                <SectionDivider />

                {/* Section: Noodle Soups */}
                <SectionHeader>Noodle Soups: The Real Curriculum</SectionHeader>

                <Section>
                    Vietnam has more distinct noodle soups than most countries have dishes. Each has its own noodle type, its own broth philosophy, its own herb plate, its own regional identity. To eat only phở during a trip to Vietnam is like visiting Italy and only eating spaghetti bolognese. It is not wrong, exactly, but it misses the point entirely.
                </Section>

                <Section>
                    Bún bò Huế is the soup that the people who know Vietnamese food best tend to cite as their favorite. It comes from the imperial city of Huế, in central Vietnam, and it is everything phở is not: bold, spicy, funky from fermented shrimp paste, perfumed with lemongrass, deep red-orange from annatto oil. The noodles are round and thick. The toppings — beef shank, pork knuckle, pig blood, Huế sausage — arrive in generous quantity. Anthony Bourdain called it the greatest soup in the world. He was not exaggerating.
                </Section>

                <Section>
                    Bún riêu is built from fresh paddy crab and tomatoes, producing a crimson, slightly sour broth with floating crab-and-egg dumplings. Cao lầu is from Hội An and is made with noodles that, according to local legend, can only be made with water from a specific well in the ancient town — the recipe, like the well, is fiercely protected. Mì Quảng uses barely any broth at all: wide turmeric-yellow noodles with just enough liquid to coat them, piled with shrimp, pork, quail eggs, peanuts, and sesame crackers.
                </Section>

                <DishCallout
                    dishes={[
                        { name: 'Phở Bò', region: 'Hanoi', description: 'Clear beef broth, rice noodles, raw beef. The classic.' },
                        { name: 'Bún Bò Huế', region: 'Huế', description: 'Spicy lemongrass broth, round noodles, beef shank, pork hock.' },
                        { name: 'Bún Riêu', region: 'Hanoi', description: 'Crab and tomato broth, floating crab dumplings.' },
                        { name: 'Cao Lầu', region: 'Hội An', description: 'Thick chewy noodles, char siu pork, minimal broth.' },
                        { name: 'Mì Quảng', region: 'Quảng Nam', description: 'Turmeric noodles with shrimp, pork, peanuts and crackers.' },
                        { name: 'Bún Thang', region: 'Hanoi', description: 'Delicate vermicelli with egg ribbons, chicken, cha lua.' },
                    ]}
                    label="Essential Noodle Soups"
                />

                <SectionDivider />

                {/* Section: Coffee */}
                <SectionHeader>Vietnamese Coffee: A Culture, Not a Beverage</SectionHeader>

                <Section>
                    Vietnam is the second largest coffee producer in the world, and it has developed a coffee culture that is entirely its own. The foundational drink is cà phê sữa đá — iced coffee with condensed milk, brewed through a small aluminum phin filter that sits on top of the glass and drips slowly, making you wait, making the anticipation part of the experience. The result is intensely strong — Vietnamese robusta is twice the caffeine of arabica — with the condensed milk rounding the bitterness into something sweet and slightly caramel.
                </Section>

                <Section>
                    Egg coffee — cà phê trứng — was invented in Hanoi in the 1940s by a bartender named Nguyễn Văn Giảng, who substituted whipped egg yolk for scarce milk. The result is a warm drink topped with a thick, custardy foam that you eat with a spoon before stirring it in. It sounds odd. It is extraordinary. Cà phê muối — salt coffee from Huế — adds a layer of salted cream over strong dark coffee, playing the sweet-salt contrast in a way that should not work but absolutely does. These are not tourist novelties. They are genuine expressions of Vietnamese ingenuity with limited ingredients.
                </Section>

                <DishCallout
                    dishes={[
                        { name: 'Cà Phê Sữa Đá', region: 'Nationwide', description: 'Iced coffee with condensed milk through a phin filter.' },
                        { name: 'Cà Phê Trứng', region: 'Hanoi', description: 'Hot coffee topped with whipped egg yolk custard foam.' },
                        { name: 'Cà Phê Muối', region: 'Huế', description: 'Strong coffee with salted cream. Surprisingly addictive.' },
                        { name: 'Bạc Xỉu', region: 'Saigon', description: 'Milk-forward iced coffee — sweeter, lighter than sữa đá.' },
                    ]}
                    label="Essential Vietnamese Coffees"
                />

                <SectionDivider />

                {/* Section: Regional */}
                <SectionHeader>Eat Regionally: The North, Central, and South Are Different Countries</SectionHeader>

                <Section>
                    The single most important thing to understand about eating in Vietnam is that the country has three distinct food cultures, and they are genuinely different. Not variations on a theme — different. Northern food is restrained, subtle, less sweet, focused on technique and broth clarity. Central food is fiery, intense, complex, carrying the legacy of the imperial Nguyễn court and the spice-loving palate of a coast that has been trading with the world for centuries. Southern food is sweet, generous, coconut-inflected, built for abundance and heat.
                </Section>

                <Section>
                    A first-time visitor to Vietnam who spends all their time in Ho Chi Minh City and eats only southern food has not eaten Vietnamese food — they have eaten one third of it. The same is true for someone who stays in Hanoi. The country rewards movement. A bowl of phở in Nam Định, where many believe the dish was born, tastes different from phở in Hanoi, which tastes different from phở in Saigon. A bánh mì in Hội An is different from a bánh mì in Da Nang. The differences are not subtle. They are the reason to keep eating.
                </Section>

                <PullQuote>
                    A visitor who stays in one city has eaten one third of Vietnamese food.
                </PullQuote>

                <SectionDivider />

                {/* Practical tips */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '32px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>
                        HOW TO EAT IN VIETNAM: 6 RULES
                    </p>
                    {[
                        { num: '01', rule: 'Eat where locals eat.', note: 'The best stalls have no English menu and a queue of motorbikes outside.' },
                        { num: '02', rule: 'Eat breakfast.', note: 'The best meals in Vietnam happen before 9am. Set an alarm.' },
                        { num: '03', rule: 'Use the herb plate.', note: 'It is not a garnish. It is structural. Add everything.' },
                        { num: '04', rule: 'Drink the broth.', note: 'It was simmered for 8+ hours. Drinking it is required.' },
                        { num: '05', rule: 'Move between cities.', note: 'Hanoi food ≠ Saigon food. Both are essential.' },
                        { num: '06', rule: 'Say yes to the unfamiliar.', note: 'The dish you cannot identify is almost always the best one.' },
                    ].map((item) => (
                        <div key={item.num} style={{ display: 'flex', gap: '16px', paddingBottom: '12px', marginBottom: '12px', borderBottom: '1px solid rgba(75,46,26,0.1)' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#D97706', flexShrink: 0, minWidth: '28px' }}>{item.num}</span>
                            <div>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#2D1A0E' }}>{item.rule}</span>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', marginLeft: '8px', fontStyle: 'italic' }}>{item.note}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <Section>
                    One final note. The best Vietnamese food is not in restaurants. It is not in hotel dining rooms. It is in the places that have been making the same dish, in the same spot, for the same customers, for twenty years or more. It is in the market stall where the cook starts at 4am and stops when the pot is empty. It is in the home kitchen where the recipe has never been written down because writing it down would miss the point. Go early. Eat standing up. Bring cash. Come back tomorrow.
                </Section>

                <SectionDivider />

                <div style={{ textAlign: 'center', marginTop: '48px' }}>
                    <Link href="/recipes" style={{ display: 'inline-block', background: '#D97706', color: 'white', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '13px', letterSpacing: '0.05em', padding: '12px 28px', textDecoration: 'none', borderRadius: '4px', marginBottom: '24px' }}>
                        Browse All Vietnamese Recipes →
                    </Link>
                    <br />
                    <Link href="/stories" style={{ color: '#D97706', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
                        ← Back to all stories
                    </Link>
                </div>
            </div>
        </article>
    );
}

// ── Sub-components ──────────────────────────────────────────────────────────

function Section({ children }: { children: React.ReactNode }) {
    return (
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }}
            style={{ fontSize: '1.15rem', lineHeight: 1.85, marginBottom: '28px', color: '#2D1A0E' }}>
            {children}
        </motion.p>
    );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '48px 0 24px' }}>
            <div style={{ width: '28px', height: '2px', background: '#D97706', flexShrink: 0 }} />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>
                {children}
            </h2>
        </motion.div>
    );
}

function DishCallout({ dishes, label }: { dishes: { name: string; region: string; description: string }[]; label: string }) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ margin: '40px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ background: '#2D1A0E', padding: '12px 20px' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>
                    {label}
                </span>
            </div>
            {dishes.map((dish, i) => (
                <div key={dish.name} style={{ display: 'flex', gap: '16px', padding: '14px 20px', borderBottom: i < dishes.length - 1 ? '1px solid rgba(75,46,26,0.07)' : 'none', alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, minWidth: '120px' }}>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '14px', fontWeight: 600, color: '#2D1A0E' }}>{dish.name}</div>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#D97706', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '2px' }}>{dish.region}</div>
                    </div>
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', lineHeight: 1.5, margin: 0 }}>{dish.description}</p>
                </div>
            ))}
        </motion.div>
    );
}

function PullQuote({ children }: { children: React.ReactNode }) {
    return (
        <motion.blockquote initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ margin: '48px 0', padding: '24px 0', borderTop: '2px solid #D97706', borderBottom: '2px solid #D97706', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', lineHeight: 1.4, color: '#4B2E1A', textAlign: 'center', fontWeight: 400 }}>
            {children}
        </motion.blockquote>
    );
}

function DropCap({ children }: { children: React.ReactNode }) {
    return (
        <span style={{ float: 'left', fontFamily: 'Playfair Display, serif', fontSize: '5rem', fontWeight: 700, lineHeight: 0.85, color: '#D97706', paddingRight: '12px', paddingTop: '6px' }}>
            {children}
        </span>
    );
}

function SectionDivider() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '48px 0', gap: '12px' }}>
            {[0, 1, 2].map(i => <span key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#D97706', opacity: 0.6 }} />)}
        </div>
    );
}