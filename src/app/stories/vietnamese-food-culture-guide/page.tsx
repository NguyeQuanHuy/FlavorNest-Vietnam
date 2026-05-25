'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function ForeignersGuideVietnameseFoodPage() {
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
                <motion.div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(/images/recipes/hoi-an.jpg)',
                    backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.4) 0%, rgba(45,26,14,0.2) 35%, rgba(45,26,14,0.93) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    BEGINNER'S GUIDE · VIETNAMESE FOOD CULTURE · FOR FOREIGNERS
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px', maxWidth: '900px' }}>
                                Vietnamese Food Culture for Beginners: The Unwritten Rules Nobody Tells You
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '720px', lineHeight: 1.5, marginBottom: '32px' }}>
                                You can read a hundred "top 10 Vietnamese dishes" lists and still miss what makes Vietnamese food culture genuinely different. This is the guide that fills the gaps.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 26, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>9 min read</span>
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

                {/* Lead */}
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.45rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    Most guides to Vietnamese food tell you what to eat. This one tells you how to think about it. The difference matters, because Vietnamese food is not a collection of dishes — it is a system, a philosophy, and a set of cultural assumptions that most visitors never encounter because nobody explains them.
                </motion.p>

                <Section>
                    <DropCap>V</DropCap>ietnam receives more food-motivated tourists every year than almost any other country in Southeast Asia. They come for the phở, the bánh mì, the street food, the coffee. Many of them eat well. Fewer of them understand what they are eating and why it tastes the way it does. This guide is for the ones who want to understand — who suspect that Vietnamese food is more than a collection of great dishes and want to know what holds it together.
                </Section>

                <Section>
                    The answer, in one sentence: Vietnamese food is built on balance, freshness, and the radical idea that the diner — not the cook — finishes the dish. These three principles explain almost everything that seems strange or surprising about Vietnamese food culture to a first-time visitor. They explain why the herb plate is not optional. Why the broth must be boiling when it hits the bowl. Why the dipping sauce is adjusted differently for every dish. And why the meal you eat sitting on a plastic stool at 6am from a cart with no sign is almost always better than the meal you eat in a restaurant with a laminated menu.
                </Section>

                <SectionDivider />
                <SectionHeader>Principle 1: The Diner Finishes the Dish</SectionHeader>

                <Section>
                    In French cuisine, the chef controls everything. The dish arrives at the table complete — seasoned, plated, ready. The diner's job is to eat it. In Vietnamese cuisine, the opposite is often true. Many of Vietnam's greatest dishes arrive unfinished, by design. The diner adds the herbs, squeezes the lime, adjusts the chili, decides how much nước chấm to add and when. The cook provides the foundation. The diner completes it.
                </Section>

                <Section>
                    This is why the herb plate that comes with phở, bún bò Huế, and bánh xèo is not a garnish. It is half the dish. A bowl of phở without fresh herbs and lime is technically edible but culinarily incomplete — like a sentence without a verb. Vietnamese diners add the herbs strategically, in sequence, tasting between additions, adjusting the balance bite by bite. A first-time visitor who ignores the herb plate is missing the most important interactive element of the meal.
                </Section>

                <RuleCard
                    number="01"
                    rule="Use the herb plate. All of it."
                    explanation="Fresh herbs in Vietnamese cooking are not decoration. They are structural. Tear them, add them in stages, and taste the difference each one makes. Vietnamese basil adds anise sweetness. Perilla adds a slight bitterness. Rice paddy herb adds a citrus note. Mint adds coolness. Each one changes the dish. Adding them together at the end is not wrong — it is just less interesting than adding them one by one."
                    misconception="Many Western visitors treat the herb plate as optional garnish and push it aside. This is the food equivalent of skipping the second half of a film."
                />

                <RuleCard
                    number="02"
                    rule="Dipping sauce is not one sauce."
                    explanation="Nước chấm — the fish sauce-based dipping sauce — appears at almost every Vietnamese meal, but it is not the same sauce each time. It is adjusted for each dish: lighter and more acidic for spring rolls, warmer and richer for bún chả, sweeter for cơm tấm, replaced entirely by a ginger version for duck. Asking for 'the dipping sauce' in Vietnam is like asking a French cook for 'the sauce' — the answer depends entirely on what you are eating."
                    misconception="Visitors often assume the small bowl of brown liquid on the table is interchangeable with any sauce from any cuisine. It is not. It is specifically calibrated for the dish in front of you."
                />

                <SectionDivider />
                <SectionHeader>Principle 2: Time and Place Are Ingredients</SectionHeader>

                <Section>
                    Vietnamese food is more time-specific than almost any other cuisine in the world. Phở is a morning dish — eaten at breakfast, before 9am, from stalls that have been simmering the broth since midnight and close when the pot is empty. Bún chả is a lunch dish — the charcoal grills fire up in the morning and close by 2pm. Ốc (snail and shellfish dishes) are an evening ritual, eaten at outdoor tables after 7pm with ice-cold beer. Eating these dishes at the wrong time of day is not impossible — most restaurants will serve them whenever you ask — but it is subtly wrong, like eating Christmas dinner in July. The food tastes different because the context is different.
                </Section>

                <RuleCard
                    number="03"
                    rule="Eat breakfast before 9am."
                    explanation="The best Vietnamese breakfast food is sold by people who start at 4am and stop when they run out. The famous phở stalls, the best bánh cuốn, the finest xôi — all of them operate on this schedule. A visitor who sleeps until 9am and then tries to find breakfast will find the second tier of options. The first tier is gone."
                    misconception="Hotel buffets are open until 10am. Vietnamese street breakfast is not. These are different systems and should not be confused."
                />

                <RuleCard
                    number="04"
                    rule="Geography changes everything."
                    explanation="The same dish tastes different in Hanoi, Huế, and Ho Chi Minh City — and these are not small differences. Northern phở is restrained, clear-brothed, minimal herb plate. Southern phở is sweeter, richer, loaded with bean sprouts and Thai basil. A visitor who eats only in one city has eaten one third of Vietnamese food. The cuisine rewards movement. Plan meals around geography, not just around dish names."
                    misconception="'Vietnamese food' is not one cuisine. It is three distinct regional cuisines — Northern, Central, and Southern — that share some vocabulary but operate on different principles."
                />

                <SectionDivider />
                <SectionHeader>Principle 3: Freshness Is Non-Negotiable</SectionHeader>

                <Section>
                    Vietnamese cuisine is built on fresh ingredients to a degree that most other cuisines are not. The herbs arrive at the table alive — still bright green, still smelling of the garden. The broth is made from bones simmered that morning. The noodles for a bowl of phở were made recently; the beef for the tái (raw beef) was sliced today. The vegetables in a bánh mì were pickled within the last 24 hours. The spring rolls were rolled ten minutes ago.
                </Section>

                <Section>
                    This has a practical consequence for visitors: Vietnamese street food is best when the stall is busy. A high-turnover stall means fresh ingredients, recently made product, just-cooked food. A quiet stall, or a stall serving tourists who will not notice the difference, may have food that has been sitting. The Vietnamese rule of thumb — eat where the locals are eating — is not snobbery. It is a freshness heuristic. Locals know which stalls are fresh.
                </Section>

                <RuleCard
                    number="05"
                    rule="The queue is the review."
                    explanation="A cart with twenty motorbikes and no English sign is serving the best food on the street. The Vietnamese restaurant with a laminated photograph menu and a host beckoning tourists is serving the second-best food at twice the price. This is not universal — there are excellent restaurants with professional service — but as a starting heuristic for street food, it holds."
                    misconception="Tourist-facing menus with photographs are designed for easy ordering, not exceptional quality. The absence of an English menu is not a warning sign. It is often the opposite."
                />

                <RuleCard
                    number="06"
                    rule="Slurping is correct."
                    explanation="In Vietnamese eating culture, slurping noodles and broth is not rude. It is efficient — the suction cools the noodles as they enter the mouth and blends the broth flavor evenly. Eating a bowl of phở silently and carefully, as one might eat soup at a European dinner table, is technically possible but culturally strange. The sound of a busy phở stall is largely composed of slurping. Join it."
                    misconception="Many Western visitors suppress the instinct to slurp out of politeness. In this context, polite suppression misses the point."
                />

                <SectionDivider />
                <SectionHeader>10 Things That Surprise First-Time Visitors</SectionHeader>

                {[
                    { thing: 'Soup for breakfast is normal.', detail: 'Phở, bún bò Huế, hủ tiếu — hot noodle soups are standard Vietnamese breakfast. A bowl of pho at 6am is not unusual; it is the default.' },
                    { thing: 'The small stool is the right stool.', detail: 'The lower and less comfortable the seating, the better the food is likely to be. Street stalls with tiny plastic stools are not cutting corners on comfort — they are maximizing turnover and freshness.' },
                    { thing: 'Rice is not always present.', detail: 'Many Vietnamese meals — noodle dishes, bánh mì, bánh xèo — contain no rice. The assumption that "Vietnamese food = rice" is incorrect. Vietnam has as many noodle dishes as rice dishes.' },
                    { thing: 'Fish sauce does not smell like fish in the dish.', detail: 'Raw fish sauce has a pungent, fermented smell. Used correctly in cooking and dipping sauces, it dissolves into a deep umami background note with no identifiable fish smell. If the dish smells strongly of fish sauce, it has been used incorrectly.' },
                    { thing: 'The cheapest food is often the best.', detail: 'A bowl of phở from a street cart (40,000 VND / €1.50) is often better than a bowl from a restaurant charging ten times as much. Price in Vietnamese street food is a function of location and overhead, not quality.' },
                    { thing: 'Vegetarian Vietnamese food is genuinely vegetarian.', detail: 'Vietnam has a strong Buddhist vegetarian tradition. "Đồ chay" (vegetarian food) restaurants serve full meals with no animal products — including no fish sauce, replaced with soy-based alternatives. These are not compromise versions; they are a distinct culinary tradition.' },
                    { thing: 'Coffee is always strong.', detail: 'Vietnamese robusta coffee is roughly double the caffeine of standard arabica. Ordering a cà phê sữa đá (iced coffee with condensed milk) and expecting a mild drink will result in surprise. Start with one.' },
                    { thing: 'Eating alone is normal.', detail: 'Vietnamese food culture accommodates solo eating in a way that some cultures do not. A single person eating a bowl of phở at a street stall is not lonely — they are eating efficiently. This is the default mode for breakfast and lunch.' },
                    { thing: 'The herb names matter.', detail: 'Vietnamese herbs look similar but taste dramatically different. Thai basil, perilla, rice paddy herb, fish mint, Vietnamese coriander — each one is used for specific dishes for specific reasons. Treating them as interchangeable produces a flat dish.' },
                    { thing: 'Dinner is earlier than you expect.', detail: 'Vietnamese dinner typically happens between 6 and 8pm. Arriving at a popular local restaurant at 9pm often means they have run out of several items. Eat early.' },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.4, delay: i * 0.04 }}
                        style={{ display: 'flex', gap: '16px', padding: '14px 0', borderBottom: '1px solid rgba(75,46,26,0.07)' }}>
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#D97706', flexShrink: 0, minWidth: '28px' }}>{String(i + 1).padStart(2, '0')}</span>
                        <div>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#2D1A0E', marginBottom: '4px' }}>{item.thing}</p>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>Where to Start: A Learning Path</SectionHeader>

                <Section>
                    The best way to learn Vietnamese food culture is to eat through it in a specific order — starting with the dishes that are most accessible and moving toward the ones that require more context to appreciate fully.
                </Section>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '32px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    {[
                        { stage: 'Start here', dishes: 'Phở, Bánh Mì, Gỏi Cuốn (Fresh Spring Rolls)', why: 'Globally familiar, low barrier to entry, excellent introduction to the flavor balance of sweet-sour-salty-umami.' },
                        { stage: 'Then try', dishes: 'Cơm Tấm, Bún Chả, Bánh Xèo', why: 'More specifically Vietnamese, require the herb plate to be understood properly. Each one teaches a different lesson about how the cuisine works.' },
                        { stage: 'Go deeper', dishes: 'Bún Bò Huế, Bún Thang, Cao Lầu', why: 'Regional specificity becomes important here. Each dish represents a particular province\'s culinary philosophy. Bún bò Huế is the most confrontational; bún thang is the most refined.' },
                        { stage: 'The advanced class', dishes: 'Bún Đậu Mắm Tôm, Chả Cá Lã Vọng, Mì Quảng', why: 'These dishes require some context and cultural literacy to fully appreciate. They also represent three of the greatest dishes in the entire cuisine.' },
                    ].map((level, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr', gap: '0', borderBottom: i < 3 ? '1px solid rgba(75,46,26,0.07)' : 'none' }}>
                            <div style={{ padding: '14px 16px', background: i % 2 === 0 ? '#FDFAF7' : '#fff', borderRight: '1px solid rgba(75,46,26,0.07)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#D97706', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{level.stage}</span>
                            </div>
                            <div style={{ padding: '14px 16px', borderRight: '1px solid rgba(75,46,26,0.07)' }}>
                                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '13px', fontWeight: 600, color: '#2D1A0E', margin: 0, lineHeight: 1.5 }}>{level.dishes}</p>
                            </div>
                            <div style={{ padding: '14px 16px' }}>
                                <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', margin: 0, lineHeight: 1.55, fontStyle: 'italic' }}>{level.why}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />

                {/* Recipe CTA */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '32px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '8px' }}>
                        START COOKING VIETNAMESE FOOD AT HOME
                    </p>
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: '#6B5544', fontStyle: 'italic', marginBottom: '20px', lineHeight: 1.6 }}>
                        The fastest way to understand Vietnamese food culture is to cook it. These recipes are written for beginners — detailed, honest about difficulty, and clear about which steps cannot be skipped.
                    </p>
                    {[
                        { title: 'Phở Bò Hà Nội — Start Here', slug: 'pho-bo-ha-noi' },
                        { title: 'Gỏi Cuốn — Fresh Spring Rolls (Easy, 30 min)', slug: 'fresh-spring-rolls' },
                        { title: 'Bún Chả Hà Nội — The Dish Obama Ate', slug: 'bun-cha-hanoi' },
                        { title: 'Bánh Mì — The World\'s Greatest Sandwich', slug: 'banh-mi' },
                        { title: 'Nước Chấm — Master the Dipping Sauce First', slug: 'nuoc-cham-guide' },
                    ].map((item) => (
                        <Link key={item.slug}
                            href={item.slug.startsWith('nuoc') ? `/stories/${item.slug}` : `/recipes/${item.slug}`}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.1)', textDecoration: 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2D1A0E', fontWeight: 600 }}>{item.title}</span>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600, flexShrink: 0, marginLeft: '12px' }}>Go →</span>
                        </Link>
                    ))}
                </motion.div>

                <div style={{ marginTop: '48px', textAlign: 'center' }}>
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

function RuleCard({ number, rule, explanation, misconception }: {
    number: string; rule: string; explanation: string; misconception: string;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5 }}
            style={{ margin: '28px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(75,46,26,0.07)', background: '#FDFAF7', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: '#D97706', flexShrink: 0 }}>{number}</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{rule}</h3>
            </div>
            <div style={{ padding: '16px 20px' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', lineHeight: 1.75, color: '#4B2E1A', marginBottom: '12px' }}>{explanation}</p>
                <div style={{ background: '#FFF5F5', padding: '10px 14px', borderRadius: '4px', borderLeft: '3px solid #dc2626', display: 'flex', gap: '8px' }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#dc2626', letterSpacing: '1px', flexShrink: 0, paddingTop: '2px' }}>COMMON MISTAKE:</span>
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', margin: 0, lineHeight: 1.6, fontStyle: 'italic' }}>{misconception}</p>
                </div>
            </div>
        </motion.div>
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