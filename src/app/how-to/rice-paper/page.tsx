'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function HowToRicePaperPage() {
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
                    backgroundImage: 'url(/images/recipes/banh-trang.jpg)',
                    backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.35) 0%, rgba(45,26,14,0.15) 40%, rgba(45,26,14,0.94) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 72px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    HOW TO · BÁNH TRÁNG · RICE PAPER FROM SCRATCH
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2rem, 5.5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px', maxWidth: '860px' }}>
                                How to Make Vietnamese Rice Paper (Bánh Tráng) from Scratch
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', maxWidth: '640px', lineHeight: 1.5, marginBottom: '28px' }}>
                                Store-bought rice paper works fine. Homemade rice paper — thin, pliable, slightly smoky from the bamboo steaming tray — is something else entirely. This is how it is made in the villages of Tây Ninh and Trảng Bàng where bánh tráng has been produced for centuries.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 30, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>8 min read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Body */}
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '72px 24px 40px', fontFamily: 'Georgia, "Iowan Old Style", serif', color: '#2D1A0E' }}>

                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.35rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    In Trảng Bàng, Tây Ninh province — the rice paper capital of southern Vietnam — the production starts at 3am. Batter is mixed, ladled onto cloth stretched over pots of boiling water, steamed for 30 seconds, peeled, and dried in the sun on bamboo racks. By noon, thousands of sheets are ready. The process at home is the same, scaled down to a single pot and a single roll of cloth. The result is worth the effort.
                </motion.p>

                <Section>
                    <DropCap>R</DropCap>ice paper — bánh tráng — is one of the most versatile ingredients in Vietnamese cooking. It wraps gỏi cuốn (fresh spring rolls), serves as the edible vessel for chả giò before frying, softens in warm broth, crisps over charcoal into bánh tráng nướng, and appears in regional dishes from Tây Ninh to Đà Nẵng that use it in entirely different ways. All of it starts from the same batter: rice flour, water, a pinch of salt, and a technique refined over centuries of daily production.
                </Section>

                <SectionDivider />
                <SectionHeader>The Two Types of Vietnamese Rice Paper</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {[
                        {
                            type: 'Bánh Tráng Ướt',
                            meaning: 'Wet / Fresh rice paper',
                            color: '#166534',
                            description: 'Thin, pliable, eaten immediately after steaming or briefly soaked in water. Used for gỏi cuốn, chả giò, and wrapping grilled meats. What this guide teaches.',
                            texture: 'Soft, slightly chewy, translucent',
                            thickness: '0.5-1mm',
                        },
                        {
                            type: 'Bánh Tráng Khô',
                            meaning: 'Dry rice paper',
                            color: '#D97706',
                            description: 'The same fresh paper dried until brittle. Reconstituted in water before use for spring rolls. Crisps over flame for bánh tráng nướng. The store-bought variety.',
                            texture: 'Brittle dry, pliable when soaked, crispy when grilled',
                            thickness: '0.5-1mm when dried',
                        },
                    ].map((item) => (
                        <div key={item.type} style={{ background: '#fff', border: `2px solid ${item.color}20`, borderRadius: '8px', padding: '20px', borderTop: `4px solid ${item.color}` }}>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: '#2D1A0E', margin: '0 0 4px' }}>{item.type}</h3>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: item.color, fontWeight: 600, marginBottom: '10px' }}>{item.meaning}</p>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', lineHeight: 1.6, marginBottom: '12px' }}>{item.description}</p>
                            <div style={{ fontSize: '11px', fontFamily: 'DM Sans, sans-serif', color: '#8B6F5A' }}>
                                <div>Texture: {item.texture}</div>
                                <div style={{ marginTop: '3px' }}>Thickness: {item.thickness}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>Ingredients and Equipment</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 20px', background: '#2D1A0E' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>FOR APPROXIMATELY 20 SHEETS (22CM)</span>
                    </div>
                    {[
                        { item: 'Fine rice flour (bột gạo)', amount: '200g', note: 'Not glutinous rice flour — use regular white rice flour. Erawan brand (green bag) or any fine-ground variety.' },
                        { item: 'Tapioca starch (bột năng)', amount: '30g', note: 'Adds elasticity and prevents tearing. Do not skip — pure rice flour sheets are too brittle.' },
                        { item: 'Water', amount: '600ml', note: 'Room temperature. Ratio: approximately 1 part flour mixture to 3 parts water. Adjust for consistency.' },
                        { item: 'Salt', amount: '½ tsp', note: 'Just enough to season — the paper should be barely savory, not salty.' },
                        { item: 'Neutral oil', amount: '1 tsp', note: 'Added to the batter to prevent sticking to the steaming cloth.' },
                    ].map((row, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 80px 1fr', borderBottom: i < 4 ? '1px solid rgba(75,46,26,0.06)' : 'none', background: i % 2 === 0 ? '#FDFAF7' : '#fff' }}>
                            <div style={{ padding: '12px 16px', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '13px', fontWeight: 700, color: '#2D1A0E' }}>{row.item}</span>
                            </div>
                            <div style={{ padding: '12px 16px', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, color: '#D97706' }}>{row.amount}</span>
                            </div>
                            <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', lineHeight: 1.5 }}>{row.note}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0', padding: '20px 24px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '12px' }}>EQUIPMENT NEEDED</p>
                    {[
                        { eq: 'Wide pot or wok with lid', note: 'For steaming — must be wide enough to fit a cloth stretched over the top.' },
                        { eq: 'Cloth or fine-mesh fabric', note: 'Stretched tightly over the pot opening and secured. Muslin, cheesecloth (double layer), or a purpose-built bánh tráng cloth. The cloth is the "pan" — the batter is spread on it, not inside the pot.' },
                        { eq: 'Flat wide spatula or thin wooden board', note: 'For lifting the steamed sheet off the cloth without tearing.' },
                        { eq: 'Flat bamboo or plastic boards', note: 'For cooling and drying the sheets flat. They must lie flat while still hot or they curl.' },
                        { eq: 'Ladle (about 60ml)', note: 'For consistent portioning of batter per sheet.' },
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                            <span style={{ color: '#D97706', fontWeight: 700, flexShrink: 0, fontFamily: 'DM Sans, sans-serif' }}>·</span>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A', margin: 0, lineHeight: 1.6 }}>
                                <strong style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700 }}>{item.eq}: </strong>{item.note}
                            </p>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>The Method: Step by Step</SectionHeader>

                {[
                    {
                        number: '01',
                        title: 'Mix the batter and rest it',
                        color: '#0369A1',
                        detail: 'Combine rice flour, tapioca starch, salt, and oil in a bowl. Gradually whisk in the water until completely smooth — no lumps. The batter should be very thin and pourable, about the consistency of full-fat milk. Thicker than milk means too little water; if it looks like cream, add more water. Rest the batter for at least 30 minutes — this allows the starch to fully hydrate and produces a smoother, more even sheet.',
                        tip: 'Resting is not optional. Un-rested batter produces sheets with a slightly grainy texture. 30 minutes minimum; 2 hours is better.',
                        warning: null,
                    },
                    {
                        number: '02',
                        title: 'Set up the steaming cloth',
                        color: '#0369A1',
                        detail: 'Fill the pot with water and bring to a vigorous boil. Stretch the cloth tightly over the opening and secure it — it must be absolutely taut, like a drum skin. Any sagging means the batter will pool in the center and produce uneven sheets. The cloth should be at least 2-3cm above the water level so it steams rather than boils. Keep the water at a full boil throughout — if it drops to a simmer, the sheets will stick.',
                        tip: 'Test cloth tautness by pressing the center lightly — it should spring back firmly. If it sags, tighten the securing string.',
                        warning: 'The cloth must stay taut throughout. Loose cloth = pooled batter = thick center, thin edges = tearing.',
                    },
                    {
                        number: '03',
                        title: 'Ladle and spread the batter',
                        color: '#D97706',
                        detail: 'Give the batter a quick stir (the starch settles). Pour one ladle (about 60ml) of batter onto the center of the cloth. Immediately tilt and rotate the ladle in a spiral motion to spread the batter into a thin, even circle — think of spreading crepe batter, but faster. You have about 3 seconds before the batter begins to cook and set. The sheet should be uniform in thickness with no thick spots or holes.',
                        tip: 'Practice the spreading motion a few times over a dry surface before using the hot cloth. The rotation needs to become automatic.',
                        warning: 'Speed matters. If you spread slowly, the edges cook before the center is spread — producing a thick center and thin, fragile edges.',
                    },
                    {
                        number: '04',
                        title: 'Cover and steam for 30-40 seconds',
                        color: '#D97706',
                        detail: 'Place the lid on the pot immediately after spreading. Steam for exactly 30-40 seconds. The sheet is done when the surface looks matte rather than wet — the batter has fully cooked and is no longer translucent. Undercooked sheets are sticky and tear on removal. Overcooked sheets become tough and chewy. The window is narrow but consistent once you have made 3-4 sheets.',
                        tip: 'Use a timer for the first several sheets. After you have the rhythm, you will start to recognize the visual change by sight.',
                        warning: null,
                    },
                    {
                        number: '05',
                        title: 'Remove without tearing',
                        color: '#166534',
                        detail: 'Remove the lid and slide a flat spatula or thin board under one edge of the sheet. Gently peel the sheet away from the cloth by working the spatula across the sheet from one side to the other — not by pulling from the center. The sheet will come away cleanly if it is properly cooked. If it tears, it was either undercooked or the cloth was not taut enough. Transfer to a flat bamboo board in a single motion.',
                        tip: 'A lightly oiled spatula slides under the sheet more easily. Keep a small bowl of neutral oil and a brush nearby.',
                        warning: null,
                    },
                    {
                        number: '06',
                        title: 'Cool flat — do not stack while hot',
                        color: '#166534',
                        detail: 'Lay each sheet on a flat bamboo board or clean surface to cool. Do not stack hot sheets — they will stick together and tear when separated. Leave each sheet undisturbed for 2-3 minutes before stacking, and place a piece of parchment paper between stacked sheets. For fresh use (gỏi cuốn), the sheets can be used warm. For drying (bánh tráng khô), lay on bamboo racks in direct sunlight for 3-4 hours until completely dry and brittle.',
                        tip: 'Work in batches — while one sheet cools, spread the next one. The rhythm should be continuous once established.',
                        warning: null,
                    },
                ].map((step, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5 }}
                        style={{ margin: '20px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden', borderLeft: `4px solid ${step.color}` }}>
                        <div style={{ padding: '12px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)', display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: step.color, flexShrink: 0 }}>{step.number}</span>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{step.title}</h3>
                        </div>
                        <div style={{ padding: '16px 20px' }}>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', lineHeight: 1.7, color: '#4B2E1A', marginBottom: '12px' }}>{step.detail}</p>
                            <div style={{ display: 'grid', gridTemplateColumns: step.warning ? '1fr 1fr' : '1fr', gap: '10px' }}>
                                <div style={{ background: '#FFFBF0', padding: '10px 14px', borderRadius: '4px', borderLeft: `3px solid ${step.color}` }}>
                                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: step.color, letterSpacing: '1px' }}>TIP: </span>
                                    <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', fontStyle: 'italic' }}>{step.tip}</span>
                                </div>
                                {step.warning && (
                                    <div style={{ background: '#FFF5F5', padding: '10px 14px', borderRadius: '4px', borderLeft: '3px solid #DC2626' }}>
                                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#DC2626', letterSpacing: '1px' }}>CRITICAL: </span>
                                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', fontStyle: 'italic' }}>{step.warning}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>Batter Consistency Guide</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 20px', background: '#2D1A0E' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>WHAT THE BATTER SHOULD LOOK LIKE</span>
                    </div>
                    {[
                        { consistency: 'Too thick (like cream)', result: 'Heavy, doughy sheets that are opaque and chewy', fix: 'Add water 1 tbsp at a time, stir, test', verdict: '✗', color: '#DC2626' },
                        { consistency: 'Too thin (like water)', result: 'Sheets tear immediately on removal, no body', fix: 'Add 1 tsp rice flour, whisk smooth, rest 5 min', verdict: '✗', color: '#DC2626' },
                        { consistency: 'Correct (like full-fat milk)', result: 'Thin, even, pliable sheets that peel cleanly', fix: '—', verdict: '✓', color: '#166534' },
                    ].map((row, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr 160px 50px', borderBottom: i < 2 ? '1px solid rgba(75,46,26,0.06)' : 'none', background: i % 2 === 0 ? '#FDFAF7' : '#fff' }}>
                            <div style={{ padding: '12px 16px', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#2D1A0E' }}>{row.consistency}</span>
                            </div>
                            <div style={{ padding: '12px 16px', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544' }}>{row.result}</span>
                            </div>
                            <div style={{ padding: '12px 16px', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', fontStyle: 'italic' }}>{row.fix}</span>
                            </div>
                            <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 700, color: row.color }}>{row.verdict}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>Troubleshooting</SectionHeader>

                {[
                    { problem: 'Sheets tear when removing from cloth', cause: 'Undercooked OR cloth not taut OR spreading too thick', fix: 'Steam 5 seconds longer. Re-tighten cloth. Add slightly more water to batter for thinner spread.' },
                    { problem: 'Sheets stick to the cloth', cause: 'Cloth not hot enough OR batter too thin OR oil omitted from batter', fix: 'Ensure water is at full boil before each sheet. Add 1 tsp oil to batter. Wipe cloth lightly with oil between sheets.' },
                    { problem: 'Holes in the sheet', cause: 'Batter spread too thin OR spreading motion too fast', fix: 'Use slightly more batter per sheet. Slow the spreading motion slightly and ensure even coverage.' },
                    { problem: 'Sheets curl when cooling', cause: 'Not laid flat immediately after removal', fix: 'Transfer to flat board in one smooth motion. Place a light flat weight on top for 2 minutes while cooling.' },
                    { problem: 'Sheets are tough and rubbery', cause: 'Overcooked — steamed too long', fix: 'Reduce steaming time by 5-10 seconds. The visual cue (matte surface) is more reliable than a timer.' },
                    { problem: 'Batter separates in the bowl', cause: 'Starch settling — normal', fix: 'Stir the batter before every 3-4 sheets. The tapioca starch settles quickly.' },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                        style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: i < 5 ? '1px solid rgba(75,46,26,0.07)' : 'none' }}>
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
                <SectionHeader>Regional Variations: Not All Rice Paper Is the Same</SectionHeader>

                {[
                    {
                        region: 'Tây Ninh (Southern)',
                        color: '#D97706',
                        desc: 'The most famous Vietnamese rice paper comes from Tây Ninh province. Thicker than average, slightly chewy, with a distinctive savory flavor from local well water. Eaten fresh with herbs and grilled meats as a full meal — not merely a wrapper. Bánh tráng Tây Ninh is its own dish, not just an ingredient.',
                    },
                    {
                        region: 'Trảng Bàng (Southern)',
                        color: '#166534',
                        desc: 'Bánh tráng phơi sương — rice paper dried briefly in the morning dew rather than full sun — is unique to Trảng Bàng. The dew gives the paper a slightly softer texture and a subtle flavor note. The dish served with it: thinly sliced boiled pork, fresh herbs, and a specific local dipping sauce. It cannot be replicated outside Trảng Bàng with the same result.',
                    },
                    {
                        region: 'Đà Nẵng / Central',
                        color: '#0369A1',
                        desc: 'Thinner and more delicate than southern rice paper. Used in bánh tráng cuốn thịt heo — rolled tightly around boiled pork, liver, herbs, and green mango. The thinness requires precise steaming — 10 seconds too long and the sheet tears when rolled.',
                    },
                    {
                        region: 'Sesame Rice Paper (Bánh Tráng Mè)',
                        color: '#7C3AED',
                        desc: 'Sesame seeds mixed into the batter before steaming, producing a sheet with embedded sesame throughout. Grilled over charcoal until the sesame toasts — this is bánh tráng mè nướng, the essential cracker served alongside mì Quảng and some central Vietnamese dishes.',
                    },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.45 }}
                        style={{ margin: '16px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', padding: '16px 20px', borderLeft: `4px solid ${item.color}` }}>
                        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700, color: '#2D1A0E', margin: '0 0 8px' }}>{item.region}</h3>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                    </motion.div>
                ))}

                <SectionDivider />

                <Section>
                    The first sheet you make will be imperfect. The spreading will be uneven, the thickness will vary, and it may tear on removal. This is normal. By the fifth sheet you will have found the rhythm — the correct batter consistency, the speed of spreading, the visual cue for doneness. By the twentieth, it will be automatic. Vietnamese rice paper makers in Tây Ninh produce hundreds of sheets per hour with movements that have become entirely unconscious. You are building toward the same automaticity, starting with sheet number one.
                </Section>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>USE YOUR RICE PAPER IN THESE RECIPES</p>
                    {[
                        { title: 'Gỏi Cuốn — Fresh Spring Rolls', slug: '/recipes/fresh-spring-rolls' },
                        { title: 'Mì Quảng — With Sesame Rice Cracker', slug: '/recipes/mi-quang' },
                        { title: 'Bánh Ướt Dầu Hẹ', slug: '/recipes/banh-uot-dau-he' },
                    ].map((r) => (
                        <Link key={r.slug} href={r.slug}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.1)', textDecoration: 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2D1A0E', fontWeight: 600 }}>{r.title}</span>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600, flexShrink: 0, marginLeft: '12px' }}>Recipe →</span>
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