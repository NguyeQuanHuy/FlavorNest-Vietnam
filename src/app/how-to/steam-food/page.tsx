'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function HowToSteamVietnamesePage() {
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
            <motion.section style={{ position: 'relative', height: '80vh', minHeight: '480px', overflow: 'hidden', opacity: heroOpacity }}>
                <motion.div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(/images/recipes/ca-hap.jpg)',
                    backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.35) 0%, rgba(45,26,14,0.15) 40%, rgba(45,26,14,0.94) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 72px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    HOW TO · HẤP · VIETNAMESE STEAMING TECHNIQUE
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2rem, 5.5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px', maxWidth: '860px' }}>
                                How to Steam Food Vietnamese Style: The Complete Guide to Hấp
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', maxWidth: '640px', lineHeight: 1.5, marginBottom: '28px' }}>
                                Steaming is one of the oldest and most precise cooking methods in Vietnamese cuisine. No oil, no direct heat, no browning — just steam and timing. It preserves flavor, texture, and nutrition better than any other method. And it is the only correct technique for at least a dozen essential Vietnamese dishes.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 30, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>7 min read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Body */}
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '72px 24px 40px', fontFamily: 'Georgia, "Iowan Old Style", serif', color: '#2D1A0E' }}>

                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.35rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    The Vietnamese word for steaming — hấp — appears constantly on menus. Cá hấp (steamed fish). Gà hấp (steamed chicken). Bánh bao hấp (steamed buns). Bánh cuốn hấp (steamed rice rolls). Each dish has a specific steaming technique — different timing, different setup, different aromatics in the water. This guide covers all of them.
                </motion.p>

                <Section>
                    <DropCap>S</DropCap>teaming is the gentlest cooking method in Vietnamese cuisine and arguably the most demanding technically. Because there is no browning, no caramelization, and no fat to carry flavor, everything depends on the quality of the ingredient, the precision of the timing, and the aromatics added to the steaming water. A steamed dish done correctly tastes cleaner and purer than any other preparation of the same ingredient. Done incorrectly — overcooked by even two minutes — it turns rubbery, watery, and flavorless.
                </Section>

                <SectionDivider />
                <SectionHeader>Equipment: What You Actually Need</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0' }}>
                    {[
                        {
                            name: 'Bamboo Steamer (Xửng Hấp Tre)',
                            color: '#166534',
                            verdict: 'Traditional — best for most dishes',
                            desc: 'The classic Vietnamese steaming tool. Bamboo absorbs excess moisture, preventing condensation from dripping onto the food. Multiple tiers allow steaming several dishes simultaneously. Used over a wok with a few centimeters of boiling water.',
                            bestFor: 'Bánh bao, dim sum-style dishes, vegetables, fish, reheating rice. Any dish where condensation dripping onto the food would be a problem.',
                            note: 'Soak bamboo steamers in cold water for 20 minutes before using — this prevents them from scorching over the heat.',
                        },
                        {
                            name: 'Metal Steamer Insert',
                            color: '#0369A1',
                            verdict: 'Practical — works for everything',
                            desc: 'A perforated metal basket that sits inside a pot above boiling water. Less romantic than bamboo but equally effective. Easier to clean and more durable. Most home cooks outside Vietnam use this.',
                            bestFor: 'Chicken, whole fish, eggs, vegetables, anything that produces liquid during cooking (the liquid drains rather than pools).',
                            note: 'Line with parchment paper or cabbage leaves when steaming delicate items like bánh bao to prevent sticking.',
                        },
                        {
                            name: 'Improvised Steamer',
                            color: '#D97706',
                            verdict: 'No equipment required',
                            desc: 'A plate rested on an inverted bowl or a metal rack inside a wide pot with a tight-fitting lid. Place the food on the plate. Add 3-4cm of water to the pot below. Cover and steam. This works for all dishes that require steaming a single item on a plate.',
                            bestFor: 'Steamed fish (cá hấp), steamed chicken pieces, steaming a single large item.',
                            note: 'The lid must fit tightly to trap steam. A loose lid produces uneven cooking. Wrap the lid in a cloth to absorb condensation if needed.',
                        },
                        {
                            name: 'Wok with Lid',
                            color: '#7C3AED',
                            verdict: 'Most versatile Vietnamese option',
                            desc: 'A wide wok with a domed lid is the traditional Vietnamese steaming vessel — the dome allows steam to circulate evenly around tall items. Set a steaming rack or inverted bowl inside, add water below the rack level, place the dish on the rack.',
                            bestFor: 'Whole chicken (gà hấp), large whole fish, multiple small dishes on a rack, anything requiring the dome shape for even circulation.',
                            note: 'The wok\'s wide base means water evaporates faster — check water level every 10-15 minutes for long steaming times.',
                        },
                    ].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.45 }}
                            style={{ margin: '16px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden', borderLeft: `4px solid ${item.color}` }}>
                            <div style={{ padding: '12px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{item.name}</h3>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: item.color, background: `${item.color}12`, padding: '3px 10px', borderRadius: '100px' }}>{item.verdict}</span>
                            </div>
                            <div style={{ padding: '14px 20px' }}>
                                <p style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', lineHeight: 1.7, color: '#4B2E1A', marginBottom: '10px' }}>{item.desc}</p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                    <div style={{ background: '#FDFAF7', padding: '10px 12px', borderRadius: '4px' }}>
                                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: item.color, letterSpacing: '1px', marginBottom: '4px' }}>BEST FOR</div>
                                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', margin: 0, lineHeight: 1.5 }}>{item.bestFor}</p>
                                    </div>
                                    <div style={{ background: '#FFFBF0', padding: '10px 12px', borderRadius: '4px', borderLeft: `3px solid ${item.color}` }}>
                                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: item.color, letterSpacing: '1px', marginBottom: '4px' }}>NOTE</div>
                                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', margin: 0, lineHeight: 1.5, fontStyle: 'italic' }}>{item.note}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>The 3 Rules of Vietnamese Steaming</SectionHeader>

                {[
                    {
                        rule: 'Rule 1: Always steam over a full boil — never a simmer',
                        color: '#DC2626',
                        detail: 'Vietnamese steaming requires vigorous, sustained steam — not gentle wisps from a barely simmering pot. A full boil produces the consistent, high-temperature steam that cooks food evenly and quickly. Simmering water produces intermittent, low-temperature steam that leads to uneven cooking, longer times, and food that steams in its own moisture rather than in hot vapor. Bring the water to a full rolling boil before placing the food in the steamer, and maintain that boil throughout.',
                        icon: '🔥',
                    },
                    {
                        rule: 'Rule 2: Never lift the lid during the first half of cooking',
                        color: '#D97706',
                        detail: 'Every time you lift the lid, you release the accumulated steam and drop the temperature inside the steamer by 15-20°C. The steamer takes 2-3 minutes to return to full temperature. For a 10-minute steaming time, lifting the lid at the 5-minute mark effectively extends cooking time by 5 minutes — producing an overcooked, waterlogged result. Set a timer. Trust the process. Lift only at the very end to check for doneness.',
                        icon: '🚫',
                    },
                    {
                        rule: 'Rule 3: Water level and replenishment',
                        color: '#0369A1',
                        detail: 'The water level should be 3-5cm below the steaming rack — high enough to generate sustained steam, low enough that it never touches the food. For cooking times under 20 minutes, water level is rarely a problem. For longer steaming (bánh bao, whole chicken), check every 15-20 minutes and add boiling water — never cold water, which would stop the boil and shock the temperature.',
                        icon: '💧',
                    },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5 }}
                        style={{ margin: '20px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', padding: '20px', borderLeft: `4px solid ${item.color}` }}>
                        <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{item.icon}</span>
                            <div>
                                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#2D1A0E', marginBottom: '8px' }}>{item.rule}</h3>
                                <p style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', lineHeight: 1.7, color: '#4B2E1A', margin: 0 }}>{item.detail}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>Steaming Times by Ingredient — Complete Reference</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 20px', background: '#2D1A0E' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>STEAMING TIMES — VIETNAMESE DISHES</span>
                    </div>
                    {[
                        { food: 'Bánh Bao (Steamed buns)', time: '15-18 min', temp: 'Full boil', test: 'Dough springs back when pressed. Surface shiny and smooth.', color: '#D97706' },
                        { food: 'Whole fish (500-700g)', time: '10-12 min', temp: 'Full boil', test: 'Flesh flakes easily near the spine. Eyes turn white and opaque.', color: '#0369A1' },
                        { food: 'Fish fillet (2cm thick)', time: '6-8 min', temp: 'Full boil', test: 'Flesh turns opaque throughout. Flakes with light pressure.', color: '#0369A1' },
                        { food: 'Shrimp (medium, peeled)', time: '3-4 min', temp: 'Full boil', test: 'Pink throughout, tightly curled. Do not overcook — 1 extra minute makes them rubbery.', color: '#DC2626' },
                        { food: 'Whole chicken (1.2-1.5kg)', time: '35-45 min', temp: 'Full boil', test: 'Juices run clear when thigh is pierced. Internal temp 75°C.', color: '#166534' },
                        { food: 'Chicken thigh (bone-in)', time: '18-22 min', temp: 'Full boil', test: 'Flesh pulls away from bone easily. Juices clear.', color: '#166534' },
                        { food: 'Eggs (hard-steamed)', time: '12-14 min', temp: 'Full boil', test: 'Same as hard-boiled but more even cooking. Cool immediately in ice water.', color: '#92400E' },
                        { food: 'Bánh Cuốn (rice roll batter)', time: '30-40 sec per sheet', temp: 'Full boil', test: 'Surface turns matte, no wet patches. Peels cleanly from cloth.', color: '#7C3AED' },
                        { food: 'Vegetables (leafy)', time: '2-3 min', temp: 'Full boil', test: 'Bright green, tender but not limp. Do not over-steam.', color: '#166534' },
                        { food: 'Broccoli / cauliflower', time: '5-7 min', temp: 'Full boil', test: 'Fork-tender with slight resistance. Still holding shape.', color: '#166534' },
                        { food: 'Sweet potato / taro', time: '15-20 min', temp: 'Full boil', test: 'Skewer passes through without resistance.', color: '#D97706' },
                        { food: 'Sticky rice (xôi)', time: '25-30 min', temp: 'Full boil', test: 'Grains are tender and glossy. Stir halfway through for even cooking.', color: '#92400E' },
                    ].map((row, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 80px 90px 1fr', borderBottom: i < 11 ? '1px solid rgba(75,46,26,0.06)' : 'none', background: i % 2 === 0 ? '#FDFAF7' : '#fff' }}>
                            <div style={{ padding: '11px 16px', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center', borderLeft: `3px solid ${row.color}` }}>
                                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '12.5px', fontWeight: 700, color: '#2D1A0E' }}>{row.food}</span>
                            </div>
                            <div style={{ padding: '11px 12px', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: row.color }}>{row.time}</span>
                            </div>
                            <div style={{ padding: '11px 12px', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#8B6F5A' }}>{row.temp}</span>
                            </div>
                            <div style={{ padding: '11px 14px', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', lineHeight: 1.5 }}>{row.test}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>Aromatics in the Steaming Water — The Secret Layer of Flavor</SectionHeader>

                <Section>
                    Vietnamese steaming does not use plain water. The water contains aromatics that perfume the steam, which in turn perfumes the food from the outside. This is a technique that most Western recipes never mention — and it makes a measurable difference to the final dish.
                </Section>

                {[
                    {
                        ingredient: 'Ginger + Spring Onion',
                        color: '#D97706',
                        usedFor: 'Steamed fish (cá hấp), steamed chicken (gà hấp)',
                        howToUse: 'Add 3-4 thick slices of ginger and 2 bruised spring onion stalks directly to the steaming water. These are the two aromatics that neutralize the raw fishy or gamey notes in protein steaming. The steam carries the ginger and onion flavor into the surface of the fish or chicken.',
                        amount: '4 ginger slices + 2 spring onion stalks per pot',
                    },
                    {
                        ingredient: 'Lemongrass',
                        color: '#166534',
                        usedFor: 'Steamed shellfish (clams, mussels, crab), some chicken dishes',
                        howToUse: 'Bruise 2 stalks and add to the steaming water. Lemongrass steam is particularly effective with shellfish — it adds a citrus-floral note that complements the brininess. Also used in lẩu (hotpot) bases.',
                        amount: '2 bruised stalks per pot',
                    },
                    {
                        ingredient: 'Fresh Turmeric',
                        color: '#92400E',
                        usedFor: 'Sticky rice (xôi), some bánh dishes',
                        howToUse: 'Add 2-3 slices of fresh turmeric to the steaming water. It tints the steam slightly yellow and adds a faint earthy warmth. Used specifically when the golden color and turmeric note are desired in the finished dish.',
                        amount: '2-3 slices per pot',
                    },
                    {
                        ingredient: 'Pandan Leaves',
                        color: '#7C3AED',
                        usedFor: 'Sticky rice, sweet dessert dishes, bánh',
                        howToUse: 'Knot 2-3 pandan leaves and add to the steaming water. Pandan produces a distinctly floral, vanilla-like aroma in the steam that transfers to sticky rice and sweet dishes. The defining aromatic of Southeast Asian dessert steaming.',
                        amount: '2-3 knotted leaves per pot',
                    },
                    {
                        ingredient: 'Plain Water',
                        color: '#0369A1',
                        usedFor: 'Bánh bao, bánh cuốn, vegetables',
                        howToUse: 'For delicate items where you want a clean, neutral flavor — bánh bao especially — use plain water. Aromatics can overpower the subtle filling flavors in delicate steamed dough.',
                        amount: '—',
                    },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.45 }}
                        style={{ margin: '16px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden', borderLeft: `4px solid ${item.color}` }}>
                        <div style={{ padding: '12px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{item.ingredient}</h3>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: item.color, fontWeight: 600 }}>{item.amount}</span>
                        </div>
                        <div style={{ padding: '14px 20px' }}>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: item.color, marginBottom: '6px', letterSpacing: '0.3px' }}>Used for: {item.usedFor}</p>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', lineHeight: 1.7, color: '#4B2E1A', margin: 0 }}>{item.howToUse}</p>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>3 Classic Vietnamese Steamed Dishes — Technique Notes</SectionHeader>

                {[
                    {
                        dish: 'Cá Hấp (Steamed Whole Fish)',
                        color: '#0369A1',
                        steps: [
                            'Score the fish 3-4 times on each side — this allows aromatics and steam to penetrate to the spine.',
                            'Stuff the cavity with ginger slices and spring onion. Place more ginger and spring onion on top of the fish.',
                            'Add ginger and spring onion to the steaming water as well.',
                            'Steam over a full boil for 10-12 minutes for a 500-700g fish. Do not open the lid.',
                            'While the fish steams: heat 3 tbsp neutral oil in a small pan until smoking. Prepare the topping sauce: soy sauce, a pinch of sugar, optional oyster sauce.',
                            'Remove the fish, discard the wilted aromatics, arrange fresh spring onion and ginger on top.',
                            'Pour the boiling oil over the fish — the sizzle blooms the aromatics. Drizzle sauce over immediately.',
                        ],
                        keyTechnique: 'The hot oil pour is not optional — it is the finishing technique that transforms a steamed fish into cá hấp. The sizzle toasts the spring onion and creates the aromatic top layer.',
                    },
                    {
                        dish: 'Gà Hấp (Steamed Chicken)',
                        color: '#166534',
                        steps: [
                            'Use a whole chicken or bone-in pieces. Rub the skin with salt, white pepper, and ginger juice.',
                            'Let rest 15 minutes. The salt draws surface moisture out, which helps the skin firm up during steaming.',
                            'Steam over full boil with ginger and spring onion in the water: 35-45 minutes for whole chicken, 18-22 for bone-in pieces.',
                            'At the end: plunge into ice water for 5 minutes — this stops the cooking, tightens the skin, and produces the smooth, silky texture characteristic of Vietnamese steamed chicken.',
                            'Chop Vietnamese-style (through the bone with a cleaver) or carve. Serve with gừng muối (ginger salt dipping sauce) and the cooking juices.',
                        ],
                        keyTechnique: 'The ice water plunge is what produces the smooth, silky skin. Without it, the skin is soft and slightly loose. This technique is borrowed from Hainanese chicken rice and is now standard in Vietnamese gà hấp.',
                    },
                    {
                        dish: 'Bánh Bao Hấp (Steamed Filled Buns)',
                        color: '#D97706',
                        steps: [
                            'Use plain water in the steamer — no aromatics. The bun dough is delicate and picks up flavor from the steam.',
                            'Line the bamboo steamer with parchment paper circles or cabbage leaves to prevent sticking.',
                            'Place buns with at least 3cm of space between them — they expand significantly during steaming.',
                            'Steam on full boil for 15-18 minutes without lifting the lid.',
                            'Turn off heat, wait 2 minutes with the lid slightly ajar before removing — sudden temperature change can cause the dough to collapse.',
                        ],
                        keyTechnique: 'The 2-minute rest with the lid slightly open prevents collapse. Opening the lid suddenly while the buns are still at full temperature causes the dough to deflate from the pressure change.',
                    },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5 }}
                        style={{ margin: '20px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden', borderLeft: `4px solid ${item.color}` }}>
                        <div style={{ padding: '12px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)' }}>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{item.dish}</h3>
                        </div>
                        <div style={{ padding: '16px 20px' }}>
                            <ol style={{ margin: '0 0 14px', paddingLeft: '20px' }}>
                                {item.steps.map((step, j) => (
                                    <li key={j} style={{ fontFamily: 'Georgia, serif', fontSize: '13px', lineHeight: 1.7, color: '#4B2E1A', marginBottom: '6px' }}>{step}</li>
                                ))}
                            </ol>
                            <div style={{ padding: '10px 14px', background: `${item.color}10`, borderRadius: '4px', borderLeft: `3px solid ${item.color}` }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: item.color, letterSpacing: '1px' }}>KEY TECHNIQUE: </span>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', fontStyle: 'italic' }}>{item.keyTechnique}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>Troubleshooting</SectionHeader>

                {[
                    { problem: 'Food is watery and bland', cause: 'Water is dripping from the lid onto the food', fix: 'Wrap the lid in a clean kitchen towel to absorb condensation. Or use a bamboo steamer (bamboo absorbs moisture). Tilt the lid slightly to direct drips away.' },
                    { problem: 'Uneven cooking — done on outside, raw inside', cause: 'Steam not hot enough, or food too thick / not scored', fix: 'Ensure full boil before starting. Score thick proteins (fish, chicken thigh) so steam penetrates to the center.' },
                    { problem: 'Bánh bao collapsed after steaming', cause: 'Lid opened suddenly or food removed too quickly', fix: 'Turn heat off, wait 2 minutes with lid slightly ajar. Never open suddenly while steam is at full pressure.' },
                    { problem: 'Fish or chicken skin is loose and slippery', cause: 'Skipped the ice water plunge', fix: 'Immediately after steaming, plunge into ice water for 5 minutes. This tightens the skin and produces the silky texture.' },
                    { problem: 'Overcooked — rubbery texture', cause: 'Too long in the steamer, or water was already boiling before timing started', fix: 'Start timing when steam is fully established, not when you turn on the heat. Reduce time by 2 minutes and test earlier.' },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                        style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: i < 4 ? '1px solid rgba(75,46,26,0.07)' : 'none' }}>
                        <span style={{ fontSize: '1.2rem', flexShrink: 0, lineHeight: 1.3 }}>⚠️</span>
                        <div>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#DC2626', marginBottom: '4px' }}>{item.problem}</p>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#8B6F5A', marginBottom: '5px' }}>Cause: {item.cause}</p>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A', lineHeight: 1.65, margin: 0 }}>
                                <strong style={{ fontFamily: 'DM Sans, sans-serif', color: '#166534', fontSize: '10px', fontWeight: 700 }}>FIX: </strong>{item.fix}
                            </p>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />

                <Section>
                    Steaming rewards patience and punishes inattention. The technique itself is simple — water boils, steam rises, food cooks. The skill is in the details: water temperature before you start, lid discipline during cooking, aromatics in the water, timing based on the specific ingredient and size. Master these details and Vietnamese steaming becomes one of the most reliable cooking methods you know. Every steamed fish comes out the same. Every whole chicken reaches the table at exactly the same texture. The consistency is the point.
                </Section>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>RECIPES USING THESE TECHNIQUES</p>
                    {[
                        { title: 'Bánh Ướt Dầu Hẹ — Cloth-Steamed Rice Sheets', slug: '/recipes/banh-uot-dau-he' },
                        { title: 'How to Make Vietnamese Rice Paper', slug: '/how-to/rice-paper' },
                        { title: 'Gỏi Cuốn — Fresh Spring Rolls', slug: '/recipes/fresh-spring-rolls' },
                    ].map((r) => (
                        <Link key={r.slug} href={r.slug}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.1)', textDecoration: 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2D1A0E', fontWeight: 600 }}>{r.title}</span>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600, flexShrink: 0, marginLeft: '12px' }}>Go →</span>
                        </Link>
                    ))}
                </motion.div>

                <div style={{ marginTop: '48px', textAlign: 'center' }}>
                    <Link href="/how-to" style={{ color: '#D97706', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
                        ← Back to How To guides
                    </Link>
                </div>
            </div>
        </article>
    );
}

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
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{children}</h2>
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