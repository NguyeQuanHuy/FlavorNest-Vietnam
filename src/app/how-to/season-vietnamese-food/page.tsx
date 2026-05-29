'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function HowToSeasonVietnameseFoodPage() {
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
                    backgroundImage: 'url(/images/recipes/nuoc-mam.jpg)',
                    backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.4) 0%, rgba(45,26,14,0.2) 40%, rgba(45,26,14,0.94) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 72px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    HOW TO · NÊM NẾM · VIETNAMESE SEASONING TECHNIQUE
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2rem, 5.5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px', maxWidth: '860px' }}>
                                Nêm Nếm: How to Season Vietnamese Food So It Actually Tastes Right
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', maxWidth: '640px', lineHeight: 1.5, marginBottom: '28px' }}>
                                Every Vietnamese grandmother seasons by taste, not by measurement. She tastes, adjusts, tastes again. The dish is done when it is balanced — not when a timer goes off. This is the technique she never wrote down.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 29, 2026</span>
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
                    Nêm nếm — literally "to season and taste" — is not a step in a recipe. It is a continuous practice that runs from the first moment you add heat to the moment the dish reaches the table. Vietnamese cooking is not measured cooking. It is tasted cooking. The recipe gives you direction. Your palate gives you the destination.
                </motion.p>

                <Section>
                    <DropCap>T</DropCap>he Vietnamese verb <em>nêm</em> means to add seasoning. The verb <em>nếm</em> means to taste. Together — nêm nếm — they describe the iterative process of seasoning, tasting, adjusting, tasting again, that is the core skill of Vietnamese cooking. A cook who cannot nêm nếm cannot cook Vietnamese food, regardless of how precisely they follow recipes. A cook who can nêm nếm can cook Vietnamese food without any recipe at all.
                </Section>

                <Section>
                    This guide teaches the technique systematically — the order in which to season, the specific signs to taste for, the adjustments that fix each problem, and the Vietnamese-specific ingredients that do the work.
                </Section>

                <SectionDivider />
                <SectionHeader>The 6 Seasoning Agents — What Each One Does</SectionHeader>

                <Section>
                    Vietnamese cooking uses six primary seasoning agents. Each one has a specific role that is not interchangeable with the others. Understanding what each one does — not just that it adds flavor, but specifically what kind of flavor and at what stage — is the foundation of nêm nếm.
                </Section>

                {[
                    {
                        agent: 'Fish Sauce (Nước Mắm)',
                        role: 'Salt + Umami + Depth',
                        color: '#D97706',
                        when: 'During cooking AND at the table',
                        howItWorks: 'Fish sauce is the primary salt in Vietnamese cooking. Unlike plain salt, it carries fermented umami compounds that add depth and complexity beyond salinity alone. It also contains glutamates that make other flavors more pronounced — it acts as a flavor amplifier, not just a seasoning.',
                        tooMuch: 'Harsh, overwhelming saltiness with a raw fish note. The dish smells before it tastes. Fix: add sugar first (rounds the salt), then acid if needed.',
                        tooLittle: 'Flat, dimensionless flavor. Everything tastes muted. This is the most common problem in home cooking — people use too little fish sauce because it smells strong before cooking but mellows dramatically with heat.',
                        technique: 'Add in stages — half at the start of cooking, taste at the halfway point, adjust at the end. Fish sauce concentrates as liquid reduces, so what tasted correct at 30 minutes may taste over-salted at 60.',
                        unit: 'tbsp',
                    },
                    {
                        agent: 'Sugar (Đường)',
                        role: 'Sweetness + Roundness + Caramelization',
                        color: '#B45309',
                        when: 'During cooking, not at the table',
                        howItWorks: 'Sugar does three things: it directly counteracts harshness and acidity, it adds body and roundness to thin-tasting sauces, and it caramelizes on contact with high heat to produce color and depth. A dish without any sugar tastes sharp and one-dimensional even when the salt and acid are correct.',
                        tooMuch: 'Sweet, cloying, flat. The savory notes disappear under the sweetness. Fix: add fish sauce (salt cuts sweetness) and acid (lime cuts sweetness).',
                        tooLittle: 'Sharp, slightly harsh, lacking body. Even in savory dishes that should not taste sweet, a small amount of sugar is what makes the flavors feel "complete" rather than aggressive.',
                        technique: 'Add before fish sauce when building a sauce — sugar dissolves more easily in liquid than salt, and starting sweet allows you to calibrate the balance more precisely.',
                        unit: 'tsp',
                    },
                    {
                        agent: 'Lime Juice (Nước Chanh)',
                        role: 'Acid + Brightness + Lift',
                        color: '#166534',
                        when: 'At the END of cooking or at the table — never early',
                        howItWorks: 'Lime juice adds brightness and lifts the entire flavor profile. It is the ingredient that makes a dish taste "alive" rather than flat. The volatile aromatic compounds in fresh lime — not just the acid — are what give Vietnamese food its characteristic freshness. These compounds evaporate completely when cooked, which is why lime is always added at the end or at the table.',
                        tooMuch: 'Sharp, lip-puckering, sour. The sweetness and savory notes are overwhelmed. Fix: add sugar (directly neutralizes acid), or dilute with more liquid.',
                        tooLittle: 'Heavy, flat, slightly one-dimensional despite correct salt and sweet. Acid is what makes everything pop — without it, even a perfectly seasoned dish can taste dull.',
                        technique: 'ALWAYS add after removing from heat. Even 30 seconds of boiling destroys the aromatic compounds that make fresh lime valuable. Squeeze over the dish, taste, add more if needed.',
                        unit: 'tsp',
                    },
                    {
                        agent: 'MSG (Mì Chính / Bột Ngọt)',
                        role: 'Umami Amplification',
                        color: '#7C3AED',
                        when: 'During cooking, small amounts',
                        howItWorks: 'MSG (monosodium glutamate) is the purified form of the umami compound glutamate, found naturally in fish sauce, soy sauce, tomatoes, and mushrooms. It amplifies all other savory flavors without adding any flavor of its own in small quantities. Vietnamese home cooking uses it routinely — it is not a health concern at cooking quantities.',
                        tooMuch: 'A metallic or chemical aftertaste at very high doses. At normal cooking quantities (under 1 tsp per dish), this does not occur.',
                        tooLittle: 'Not a problem — MSG is optional, not essential. Fish sauce already provides glutamates. MSG is an amplifier, not a foundation.',
                        technique: 'Use sparingly — ¼ to ½ tsp per dish is enough. Add alongside fish sauce during cooking. Think of it as "turning up the volume" on existing savory flavors rather than adding a new one.',
                        unit: 'pinch',
                    },
                    {
                        agent: 'Soy Sauce (Nước Tương)',
                        role: 'Salt + Color + Mild Sweetness',
                        color: '#2D1A0E',
                        when: 'During cooking, especially for stir-fries and marinades',
                        howItWorks: 'Soy sauce adds salt and umami like fish sauce, but with a different flavor profile — less funky, slightly sweeter, with a roasted note from the fermentation process. It also adds color: dark soy sauce produces the deep brown of Chinese-influenced Vietnamese dishes (xá xíu, thịt kho). Light soy for flavor, dark soy for color.',
                        tooMuch: 'Overpowering soy flavor that masks other seasonings. The dish tastes "Chinese" rather than Vietnamese — both are valid, but soy should complement rather than dominate.',
                        tooLittle: 'In dishes where soy is structural (bò lúc lắc, stir-fries), it produces pale color and thin flavor.',
                        technique: 'For Vietnamese cooking: use less soy sauce than Chinese cooking calls for. 1-2 tbsp per dish maximum. Always combine with fish sauce for depth.',
                        unit: 'tbsp',
                    },
                    {
                        agent: 'Black Pepper (Tiêu Đen)',
                        role: 'Heat + Aroma + Finish',
                        color: '#DC2626',
                        when: 'At the END of cooking and at the table',
                        howItWorks: 'Freshly ground black pepper adds two things: piperine heat (gentler than chili) and terpene aromatics (the floral, piney notes that distinguish good pepper from pre-ground). Vietnamese pepper — particularly from Phú Quốc island — is among the finest in the world. It is used generously in marinades, soups, and as a final seasoning.',
                        tooMuch: 'Overwhelming heat and bitterness that suppresses other flavors.',
                        tooLittle: 'The dish lacks the warm, aromatic finish that is characteristic of Vietnamese food. Pepper is not optional in most Vietnamese dishes — it is structural.',
                        technique: 'Grind fresh immediately before use. Pre-ground pepper loses its aromatic compounds within weeks. Use a pepper mill, not a jar of pre-ground dust.',
                        unit: 'tsp',
                    },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5 }}
                        style={{ margin: '20px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden', borderLeft: `4px solid ${item.color}` }}>
                        <div style={{ padding: '12px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                            <div>
                                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#2D1A0E', margin: '0 0 4px' }}>{item.agent}</h3>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: item.color, fontWeight: 600 }}>{item.role}</span>
                            </div>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: '#fff', background: item.color, padding: '3px 10px', borderRadius: '100px', flexShrink: 0 }}>Add: {item.when}</span>
                        </div>
                        <div style={{ padding: '14px 20px' }}>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', lineHeight: 1.7, color: '#4B2E1A', marginBottom: '12px' }}>{item.howItWorks}</p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                                <div style={{ background: '#FFF5F5', padding: '10px 12px', borderRadius: '4px', borderLeft: '3px solid #DC2626' }}>
                                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#DC2626', letterSpacing: '1px', marginBottom: '4px' }}>TOO MUCH</div>
                                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', margin: 0, lineHeight: 1.5 }}>{item.tooMuch}</p>
                                </div>
                                <div style={{ background: '#F0F7FF', padding: '10px 12px', borderRadius: '4px', borderLeft: '3px solid #0369A1' }}>
                                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#0369A1', letterSpacing: '1px', marginBottom: '4px' }}>TOO LITTLE</div>
                                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', margin: 0, lineHeight: 1.5 }}>{item.tooLittle}</p>
                                </div>
                            </div>
                            <div style={{ padding: '10px 12px', background: '#FFFBF0', borderRadius: '4px', borderLeft: `3px solid ${item.color}` }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: item.color, letterSpacing: '1px' }}>TECHNIQUE: </span>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', fontStyle: 'italic' }}>{item.technique}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>The Tasting Sequence: How to Season Any Vietnamese Dish</SectionHeader>

                <Section>
                    Vietnamese seasoning is not done once at the end. It is done in layers, at specific stages of cooking, with specific agents added in a specific order. The sequence below works for soups, braises, stir-fries, and sauces.
                </Section>

                {[
                    {
                        stage: 'Stage 1: Build the Base',
                        timing: 'When you add your protein and liquid',
                        color: '#D97706',
                        actions: [
                            'Add half your estimated fish sauce. This is the foundation salt — everything else balances against it.',
                            'Add half your sugar. Dissolve it completely.',
                            'Add any whole aromatics (lemongrass, star anise, charred ginger). These need time to infuse.',
                            'Do NOT add lime juice yet — heat destroys its aromatic compounds.',
                        ],
                        taste: 'Taste now: it should be slightly under-seasoned (too mild). This is correct — flavors concentrate as liquid reduces.',
                    },
                    {
                        stage: 'Stage 2: Mid-Cook Adjustment',
                        timing: 'Halfway through cooking time',
                        color: '#166534',
                        actions: [
                            'Taste. Note what is missing: salt? sweetness? depth?',
                            'Add remaining fish sauce if needed — in small increments, ½ tsp at a time.',
                            'Add remaining sugar if the dish still tastes sharp or harsh.',
                            'Add MSG (¼ tsp) if the dish tastes flat despite correct salt and sweet.',
                            'Adjust liquid level if the broth has reduced too much.',
                        ],
                        taste: 'Taste now: it should taste almost correct but slightly concentrated. Remember — it will dilute when served with noodles or rice.',
                    },
                    {
                        stage: 'Stage 3: Final Seasoning',
                        timing: '2 minutes before the dish is done',
                        color: '#7C3AED',
                        actions: [
                            'Remove from heat or reduce to minimum.',
                            'Add lime juice NOW — not before. Squeeze and taste immediately.',
                            'Add freshly ground black pepper.',
                            'Taste the complete dish. Adjust any single element by small amounts.',
                            'The dish is done when no single flavor dominates and the aftertaste is clean and pleasant.',
                        ],
                        taste: 'Final taste check: salt ✓, sweet ✓, sour ✓, aromatic ✓. If one element is still off, make one final small adjustment and taste again.',
                    },
                    {
                        stage: 'Stage 4: At the Table',
                        timing: 'When serving',
                        color: '#DC2626',
                        actions: [
                            'Always provide fish sauce + lime + sliced chili on the table.',
                            'Vietnamese diners adjust seasoning individually — never assume your seasoning is everyone\'s preference.',
                            'Fresh herbs added at the table complete the flavor profile — they are not garnish.',
                            'Bean sprouts, extra lime, chili paste — all table condiments that change the character of the dish.',
                        ],
                        taste: 'The table condiments are part of the recipe. A dish served without them is incomplete, even if your kitchen seasoning was perfect.',
                    },
                ].map((stage, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5 }}
                        style={{ margin: '20px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden', borderLeft: `4px solid ${stage.color}` }}>
                        <div style={{ padding: '12px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{stage.stage}</h3>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: stage.color, background: `${stage.color}12`, padding: '3px 10px', borderRadius: '100px' }}>{stage.timing}</span>
                        </div>
                        <div style={{ padding: '14px 20px' }}>
                            <ol style={{ margin: '0 0 14px', paddingLeft: '20px' }}>
                                {stage.actions.map((action, j) => (
                                    <li key={j} style={{ fontFamily: 'Georgia, serif', fontSize: '13px', lineHeight: 1.7, color: '#4B2E1A', marginBottom: '6px' }}>{action}</li>
                                ))}
                            </ol>
                            <div style={{ padding: '10px 14px', background: `${stage.color}10`, borderRadius: '4px', borderLeft: `3px solid ${stage.color}` }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: stage.color, letterSpacing: '1px' }}>TASTE CHECK: </span>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', fontStyle: 'italic' }}>{stage.taste}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>Fixing Common Seasoning Problems</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 20px', background: '#2D1A0E' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>DIAGNOSIS AND FIX</span>
                    </div>
                    {[
                        { problem: '"Tastes bland and watery"', diagnosis: 'Under-salted', fix: 'Add fish sauce in ½ tsp increments. When the other flavors suddenly "pop," you\'ve found the right level.', icon: '💧' },
                        { problem: '"Tastes harsh or overpowering"', diagnosis: 'Too much fish sauce, not enough sugar', fix: 'Add ½ tsp sugar at a time. The harshness should soften within 30 seconds. If still harsh, add a small amount of acid.', icon: '⚡' },
                        { problem: '"Tastes flat despite correct salt and sweet"', diagnosis: 'Missing acid (lime)', fix: 'Squeeze fresh lime — just a little, off heat. This is the single most common missing element. Add cautiously — it\'s easier to add than remove.', icon: '🍋' },
                        { problem: '"Tastes sharp or sour"', diagnosis: 'Too much acid', fix: 'Add sugar (directly neutralizes acid). Add a pinch of salt if still sharp. As a last resort, add more liquid and re-season from scratch.', icon: '😬' },
                        { problem: '"Tastes correct but feels thin"', diagnosis: 'Lacking umami depth', fix: 'Add ¼ tsp MSG, or a splash more fish sauce, or a small amount of the characteristic liquid (coconut milk, broth). This adds body and "fullness."', icon: '🥢' },
                        { problem: '"Tastes sweet but flat"', diagnosis: 'Too much sugar, too little salt and acid', fix: 'Add fish sauce to bring the salt back (it cuts through sweetness). Then add lime. The sweetness will remain but be balanced.', icon: '🍯' },
                        { problem: '"Everything tastes the same throughout cooking"', diagnosis: 'Seasoning added all at once instead of in layers', fix: 'For the next dish: season in thirds. First third at the start, second at halfway, final adjustment off heat. Layered seasoning produces depth that single-stage seasoning never achieves.', icon: '🔄' },
                    ].map((row, i) => (
                        <div key={i} style={{ padding: '14px 20px', borderBottom: i < 6 ? '1px solid rgba(75,46,26,0.06)' : 'none', background: i % 2 === 0 ? '#FDFAF7' : '#fff' }}>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.3rem', flexShrink: 0, lineHeight: 1.3 }}>{row.icon}</span>
                                <div>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '6px' }}>
                                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#2D1A0E' }}>{row.problem}</span>
                                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: '#DC2626', background: 'rgba(220,38,38,0.08)', padding: '2px 8px', borderRadius: '100px' }}>Cause: {row.diagnosis}</span>
                                    </div>
                                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', lineHeight: 1.65, margin: 0 }}><strong style={{ fontFamily: 'DM Sans, sans-serif', color: '#166534', fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px' }}>FIX: </strong>{row.fix}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>Seasoning by Dish Type: Quick Reference</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0' }}>
                    {[
                        {
                            type: 'Broth-based soups (phở, bún bò Huế)',
                            color: '#D97706',
                            rules: [
                                'Season lightly throughout — broth concentrates over hours.',
                                'Taste cold (room temp) vs hot — sodium tastes more intense hot. Season for room temp, the hot version will be correct.',
                                'Final seasoning always off heat. Lime and herbs at the table.',
                                'The broth should taste 20% under-seasoned before adding noodles — the noodles dilute it.',
                            ],
                        },
                        {
                            type: 'Stir-fries (xào)',
                            color: '#166534',
                            rules: [
                                'Season fast — stir-fries cook in 3-5 minutes. All seasoning agents ready before heat goes on.',
                                'Add fish sauce + oyster sauce together near the end — the last 60 seconds.',
                                'Do not add lime during cooking. Add pepper off heat.',
                                'Taste the sauce before adding to the wok — adjust in the sauce bowl, not in the hot pan.',
                            ],
                        },
                        {
                            type: 'Braises and caramelized dishes (kho)',
                            color: '#7C3AED',
                            rules: [
                                'Season more aggressively at the start — long cooking mellows harshness.',
                                'The caramel sauce (nước màu) is both seasoning and color — count it in your total salt.',
                                'Taste at 30 min, 1 hour, and final. Each stage needs different adjustments.',
                                'The final dish should taste concentrated and intensely savory — it is eaten with plain rice that neutralizes the intensity.',
                            ],
                        },
                        {
                            type: 'Dipping sauces (nước chấm)',
                            color: '#DC2626',
                            rules: [
                                'Always make with warm water — sugar dissolves completely and flavors integrate better.',
                                'Taste at room temperature, not hot or cold.',
                                'The correct balance: savory, sweet, sour in roughly equal presence. No single flavor dominates.',
                                'Add garlic and chili last — their heat increases over time as they steep.',
                            ],
                        },
                    ].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                            style={{ margin: '16px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden', borderLeft: `4px solid ${item.color}` }}>
                            <div style={{ padding: '10px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)' }}>
                                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{item.type}</h3>
                            </div>
                            <div style={{ padding: '14px 20px' }}>
                                {item.rules.map((rule, j) => (
                                    <div key={j} style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                                        <span style={{ color: item.color, fontWeight: 700, flexShrink: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '13px' }}>·</span>
                                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A', margin: 0, lineHeight: 1.65 }}>{rule}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <SectionDivider />

                <Section>
                    The grandmother who seasons without measuring is not working by magic or instinct. She is applying decades of tasted feedback — thousands of adjustments that have built, over time, an accurate internal model of what correct Vietnamese seasoning tastes like. You are building the same model, starting now. Every dish you season and taste, every adjustment you make and note mentally, adds to the model. After fifty dishes, you will start tasting a soup and knowing what it needs before you have consciously analyzed it. After a hundred, the nêm nếm will feel like instinct. It is not. It is accumulated tasting.
                </Section>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>PRACTICE DISHES — START HERE</p>
                    {[
                        { title: 'Nước Chấm — 5-Minute Seasoning Practice', slug: '/stories/nuoc-cham-guide' },
                        { title: 'Phở Bò Hà Nội — Long-Cook Seasoning', slug: '/recipes/pho-bo-ha-noi' },
                        { title: 'Cá Kho Tộ — Caramelized Seasoning', slug: '/recipes/ca-kho-to' },
                        { title: 'How to Balance Vietnamese Flavors', slug: '/how-to/balance-flavors' },
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
