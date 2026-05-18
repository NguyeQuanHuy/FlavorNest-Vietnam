'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function IsVietnameseFoodHealthyPage() {
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
            <motion.section
                style={{
                    position: 'relative',
                    height: '100vh',
                    minHeight: '600px',
                    overflow: 'hidden',
                    opacity: heroOpacity,
                }}
            >
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url(/images/recipes/goi-cuon-tom-thit.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        scale: heroScale,
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(45,26,14,0.3) 0%, rgba(45,26,14,0.2) 35%, rgba(45,26,14,0.93) 100%)',
                    }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    HEALTH · NUTRITION · VIETNAMESE CUISINE
                                </span>
                            </div>
                            <h1 style={{
                                fontFamily: 'Playfair Display, serif',
                                color: '#FFF',
                                fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                                fontWeight: 700,
                                lineHeight: 1.05,
                                letterSpacing: '-0.02em',
                                marginBottom: '24px',
                                maxWidth: '900px',
                            }}>
                                Is Vietnamese Food Actually Healthy? A Nutritionist's Honest Answer
                            </h1>
                            <p style={{
                                fontFamily: 'Playfair Display, serif',
                                fontStyle: 'italic',
                                color: 'rgba(255,255,255,0.85)',
                                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                                maxWidth: '720px',
                                lineHeight: 1.5,
                                marginBottom: '32px',
                            }}>
                                Vietnam has one of the lowest obesity rates in the world. The food is the reason. Here's the science behind why.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 19, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>6 min read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ delay: 1.5, duration: 2.5, repeat: Infinity }}
                    style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '2px', fontFamily: 'DM Sans, sans-serif', textAlign: 'center' }}
                >
                    SCROLL TO READ ↓
                </motion.div>
            </motion.section>

            {/* Article Body */}
            <div style={{
                maxWidth: '720px',
                margin: '0 auto',
                padding: '80px 24px 40px',
                fontFamily: 'Georgia, "Iowan Old Style", "Palatino Linotype", serif',
                color: '#2D1A0E',
            }}>
                {/* Lead */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: '1.45rem',
                        lineHeight: 1.65,
                        fontStyle: 'italic',
                        color: '#4B2E1A',
                        marginBottom: '48px',
                        paddingLeft: '24px',
                        borderLeft: '3px solid #D97706',
                    }}
                >
                    Vietnam's obesity rate sits at around 2.1% — one of the lowest in the world. The United States is at 36%. The United Kingdom at 28%. Australia at 31%. The Vietnamese diet has been studied, analyzed, and praised by nutritionists on six continents. The short answer to the question in the headline is: yes, emphatically. The longer answer is more interesting.
                </motion.p>

                <Section>
                    <DropCap>T</DropCap>he first thing to understand about Vietnamese food is what it is not. It is not deep-fried. It is not smothered in cream or butter. It does not rely on cheese, refined sugar, or the kind of processed carbohydrates that define fast food in most of the developed world. A traditional Vietnamese meal is built from fresh vegetables, lean proteins, rice or noodles, fish sauce, and an abundance of fresh herbs. The fats used in cooking are light — a splash of oil in a hot wok, a thin layer of rendered pork fat in a congee — and the meals are structured around broth, which is low in calories and high in nutrients.
                </Section>

                <Section>
                    This is not coincidence. It is the product of a food culture that developed under conditions of scarcity, where a cook's skill was measured not by how much fat and sugar they could add, but by how much flavor they could extract from humble ingredients. The result, across centuries of refinement, is a cuisine that is naturally aligned with what modern nutritionists recommend: high in vegetables and fresh herbs, moderate in lean protein, low in saturated fat, built around complex carbohydrates, and flavored with fermented condiments rather than processed sauces.
                </Section>

                <PullQuote>
                    Vietnam has one of the lowest obesity rates in the world. The food is not a coincidence.
                </PullQuote>

                {/* Stats callout */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '16px',
                        margin: '48px 0',
                    }}
                >
                    {[
                        { num: '~420', unit: 'kcal', label: 'A bowl of phở — a complete meal' },
                        { num: '~290', unit: 'kcal', label: 'Fresh spring rolls (gỏi cuốn) × 2' },
                        { num: '70%+', unit: '', label: 'Of a Vietnamese meal is vegetables & herbs' },
                    ].map((stat) => (
                        <div key={stat.label} style={{
                            background: '#FEF3E2',
                            padding: '20px',
                            borderTop: '3px solid #D97706',
                            textAlign: 'center',
                        }}>
                            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#D97706', lineHeight: 1 }}>
                                {stat.num}<span style={{ fontSize: '1rem' }}>{stat.unit}</span>
                            </div>
                            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#6B5544', marginTop: '8px', lineHeight: 1.4 }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                <Section>
                    Take phở, the dish most people think of first when they think of Vietnamese food. A standard bowl of Hanoi beef phở contains roughly 350–450 calories, depending on the portion and the cut of beef. It includes 25–35 grams of protein from the beef. The broth — simmered for hours from bones — is rich in collagen, glycine, and minerals including calcium, magnesium, and phosphorus. The rice noodles provide slow-release carbohydrates. The fresh herbs on top — cilantro, scallion, sometimes Thai basil and bean sprouts — add fiber, vitamins, and antioxidants. For a complete, hot, deeply satisfying meal, those numbers are extraordinary. A fast-food burger with fries delivers 900–1,200 calories with a fraction of the nutritional density.
                </Section>

                <Section>
                    Gỏi cuốn — the fresh spring roll — is even more striking. Two rolls contain approximately 150–200 calories. Inside: poached shrimp, lean pork, rice vermicelli, shredded lettuce, and fresh mint, all wrapped in rice paper. The caloric density is low, the protein content high, the fiber and micronutrient profile impressive. It is one of those rare dishes that nutritionists, personal trainers, and dietitians all recommend freely, without caveats. It is also, objectively, delicious — which is why it appears on menus from London to Los Angeles to Sydney, usually at a significant markup from what it costs in Saigon.
                </Section>

                <SectionDivider />

                <Section>
                    The herb culture deserves special attention. No cuisine on earth uses fresh herbs in the quantities and variety that Vietnamese cooking does, and this is one of the primary reasons the diet is so nutritionally exceptional. Vietnamese basil, perilla, rice paddy herb, cilantro, mint, fish mint, sawtooth herb — these are not garnishes. They are structural components of every meal. And they are, nutritionally speaking, extraordinarily dense. Fresh herbs are among the most nutrient-rich foods by weight of any food group: high in vitamins A, C, and K, rich in antioxidants, anti-inflammatory compounds, and essential minerals. A handful of fresh Vietnamese herbs added to a bowl of soup or noodles adds almost zero calories while delivering a measurable nutritional boost.
                </Section>

                <Section>
                    Fish sauce — <em>nước mắm</em> — is another underappreciated element of the diet's health profile. Vietnamese cooking uses fish sauce the way European cooking uses salt: as a foundational seasoning that adds depth and umami without adding bulk. High-quality fish sauce is fermented, which means it contains probiotics and beneficial bacteria that support gut health. It is also a source of iodine, selenium, and essential amino acids. The sodium content is real and worth monitoring, but the fermentation process produces compounds that appear, in emerging research, to have prebiotic effects — feeding the beneficial bacteria in the gut in ways that processed salt cannot.
                </Section>

                <PullQuote>
                    A handful of fresh Vietnamese herbs adds almost zero calories and a measurable nutritional boost.
                </PullQuote>

                <Section>
                    The cooking methods matter too. Vietnamese cuisine favors steaming, boiling, quick stir-frying in a very hot wok, and fresh preparation over frying and slow-cooking in fat. Bánh cuốn — the silky steamed rice rolls of Hanoi — is cooked entirely by steam. Gỏi cuốn is assembled raw. Phở and bún bò Huế are broth-based. The hot wok dishes — rau muống xào tỏi, the stir-fried water spinach — use high heat and minimal oil to cook vegetables in seconds, preserving their nutrients in a way that long boiling does not. Even the fried dishes — bánh xèo, chả giò — tend to be eaten wrapped in lettuce with fresh herbs, which adds fiber and dilutes the caloric density of the fried element.
                </Section>

                <Section>
                    There are caveats, as there are with any cuisine. Vietnamese street food, particularly in the south, includes dishes high in saturated fat and sugar: thịt kho tàu, the slow-braised pork in coconut water, is rich and calorie-dense. Cơm tấm with its full complement of grilled pork chop, steamed egg meatloaf, and scallion oil is a substantial meal. The banh mi, for all its virtues, contains a baguette. Vietnamese iced coffee — cà phê sữa đá — is made with condensed milk and is high in sugar. These are not health foods. They are pleasure foods, and the Vietnamese approach to them is instructive: they are eaten in specific contexts, at specific times of day, in culturally understood portions, rather than consumed without thought as a daily baseline.
                </Section>

                <SectionDivider />

                <Section>
                    The broader point is that Vietnamese cuisine is a complete dietary system, not a collection of individual dishes. The meal structure — soup or broth, a protein dish, a vegetable dish, rice, and a herb plate — is designed to deliver nutritional balance across a single sitting. The herb plate is not optional. The broth is not a starter. The fresh vegetables are not a side. They are essential, structural elements of how the Vietnamese think about eating. Remove them and you do not have Vietnamese food — you have something else.
                </Section>

                <Section>
                    This is why the diet resists simple export. The Vietnamese restaurants that perform best internationally — the ones that nutritionists actually recommend — are the ones that maintain the full system: fresh herbs, broth, balance of textures and flavors, vegetables as structural components rather than afterthoughts. The ones that simplify the system for easier service — thicker sauces, heavier portions, fewer herbs, more sugar in the marinades — produce food that is less healthy and, usually, less delicious. The two qualities are not unrelated.
                </Section>

                <Section>
                    Vietnam's low obesity rate is not just about what people eat. It is also about how they eat: multiple small meals, broth-based breakfasts, fresh ingredients purchased daily from wet markets rather than processed food from supermarkets, and a cultural expectation that food should be fresh, balanced, and taken seriously. These habits are under pressure from urbanization, fast food, and changing work patterns. But the underlying diet — the one built from fish sauce, fresh herbs, rice noodles, and long-simmered broth — remains one of the most nutritionally sound in the world.
                </Section>

                <PullQuote>
                    The herb plate is not optional. The broth is not a starter. They are essential.
                </PullQuote>

                <Section>
                    So: is Vietnamese food healthy? Yes. It is built from whole ingredients, prepared with methods that preserve nutrients, structured around balance rather than excess, and seasoned with fermented condiments that support gut health. It is high in vegetables, moderate in lean protein, and flavored with fresh herbs that most cuisines barely use. It is also, when made properly, extraordinarily delicious — which is the most important reason to eat it, and the reason that nutritional arguments, however accurate, are never really the point.
                </Section>

                <Section>
                    The point is the bowl of phở at 6am. The point is the gỏi cuốn dipped into peanut sauce on a hot afternoon. The point is the herb plate that arrives with the bún bò Huế, piled high enough that you have to negotiate with it before the first spoonful. The health is a consequence of the culture. It was never the goal. It was just what happened when people cooked honestly, with what the land provided, for a very long time.
                </Section>

                <SectionDivider />

                {/* Healthiest dishes callout */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '32px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}
                >
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '12px' }}>
                        THE HEALTHIEST VIETNAMESE DISHES
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {[
                            { dish: 'Gỏi Cuốn (Fresh Spring Rolls)', cal: '~150 kcal / 2 rolls', note: 'High protein, low fat, raw vegetables' },
                            { dish: 'Phở Gà (Chicken Pho)', cal: '~350 kcal / bowl', note: 'Collagen-rich broth, lean protein, fresh herbs' },
                            { dish: 'Rau Muống Xào Tỏi (Stir-fried Water Spinach)', cal: '~120 kcal', note: 'Iron, fiber, vitamins A & C' },
                            { dish: 'Canh Rau Ngót (Sweet Leaf Soup)', cal: '~140 kcal', note: 'Light, high in folate and vitamin C' },
                            { dish: 'Bún Thang (Hanoi Vermicelli Soup)', cal: '~310 kcal', note: 'Lean chicken, egg, multiple herbs' },
                        ].map((item) => (
                            <div key={item.dish} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: '10px', borderBottom: '1px solid rgba(75,46,26,0.1)', gap: '16px' }}>
                                <div>
                                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 600, color: '#2D1A0E' }}>{item.dish}</div>
                                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#8B6F5A', marginTop: '2px' }}>{item.note}</div>
                                </div>
                                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#D97706', whiteSpace: 'nowrap' }}>{item.cal}</div>
                            </div>
                        ))}
                    </div>
                    <Link
                        href="/recipes"
                        style={{ display: 'inline-block', marginTop: '20px', background: '#D97706', color: 'white', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '13px', letterSpacing: '0.05em', padding: '10px 24px', textDecoration: 'none', borderRadius: '4px' }}
                    >
                        Browse All Healthy Vietnamese Recipes →
                    </Link>
                </motion.div>

                {/* Back link */}
                <div style={{ marginTop: '48px', textAlign: 'center' }}>
                    <Link href="/stories" style={{ color: '#D97706', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
                        ← Back to all stories
                    </Link>
                </div>
            </div>
        </article>
    );
}

function Section({ children }: { children: React.ReactNode }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '1.15rem', lineHeight: 1.85, marginBottom: '28px', color: '#2D1A0E' }}
        >
            {children}
        </motion.p>
    );
}

function PullQuote({ children }: { children: React.ReactNode }) {
    return (
        <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
                margin: '48px 0',
                padding: '24px 0',
                borderTop: '2px solid #D97706',
                borderBottom: '2px solid #D97706',
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                lineHeight: 1.4,
                color: '#4B2E1A',
                textAlign: 'center',
                fontWeight: 400,
            }}
        >
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
            {[0, 1, 2].map(i => (
                <span key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#D97706', opacity: 0.6 }} />
            ))}
        </div>
    );
}