'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { useState } from 'react';

// ── Recipe data ──
const SERVINGS_BASE = 4;

const INGREDIENTS = {
    broth: [
        { name: 'beef bones (marrow & knuckle)', amount: 2, unit: 'kg', note: 'best from a real butcher' },
        { name: 'beef brisket', amount: 500, unit: 'g', note: 'for slicing later' },
        { name: 'yellow onions', amount: 2, unit: 'large', note: 'unpeeled, halved' },
        { name: 'ginger', amount: 100, unit: 'g', note: 'unpeeled, halved lengthwise' },
        { name: 'star anise', amount: 6, unit: 'whole', note: '' },
        { name: 'cinnamon stick', amount: 1, unit: 'stick', note: 'about 8cm long' },
        { name: 'cloves', amount: 5, unit: 'whole', note: '' },
        { name: 'black cardamom (thảo quả)', amount: 1, unit: 'pod', note: 'optional but ideal' },
        { name: 'coriander seeds', amount: 1, unit: 'tsp', note: '' },
        { name: 'fennel seeds', amount: 1, unit: 'tsp', note: '' },
        { name: 'rock sugar', amount: 30, unit: 'g', note: 'or palm sugar' },
        { name: 'fish sauce', amount: 4, unit: 'tbsp', note: 'good quality, like Red Boat' },
        { name: 'salt', amount: 2, unit: 'tsp', note: 'plus more to taste' },
        { name: 'water', amount: 5, unit: 'liters', note: 'cold, filtered' },
    ],
    assembly: [
        { name: 'fresh pho rice noodles', amount: 600, unit: 'g', note: 'or 400g dried' },
        { name: 'eye of round beef', amount: 300, unit: 'g', note: 'partially frozen for slicing' },
        { name: 'yellow onion', amount: 0.5, unit: 'small', note: 'thinly sliced, soaked in vinegar' },
        { name: 'scallions', amount: 4, unit: 'stalks', note: 'thinly sliced' },
        { name: 'fresh cilantro', amount: 1, unit: 'small bunch', note: 'chopped' },
    ],
    garnish: [
        { name: 'Thai basil', amount: 1, unit: 'bunch', note: '' },
        { name: 'cilantro / coriander', amount: 1, unit: 'bunch', note: '' },
        { name: 'bean sprouts', amount: 200, unit: 'g', note: 'optional — southern style' },
        { name: 'lime wedges', amount: 2, unit: 'limes', note: 'cut into wedges' },
        { name: 'bird\'s eye chilies', amount: 3, unit: 'whole', note: 'sliced' },
        { name: 'hoisin sauce', amount: 1, unit: 'small bowl', note: 'optional' },
        { name: 'sriracha', amount: 1, unit: 'small bowl', note: 'optional' },
    ],
};

const STEPS = [
    {
        title: 'Blanch the bones',
        time: 15,
        body: 'Place beef bones in a large pot and cover with cold water. Bring to a rolling boil and cook hard for 10 minutes. The water will turn dark with foam and impurities. Drain the bones in a colander and rinse each one thoroughly under cold running water, scrubbing off any clinging grey scum. This is the single most important step for a clear broth. Skip it and the broth will be cloudy forever.',
        tip: 'Many Vietnamese cooks blanch twice for extra clarity. If your bones look very bloody, do a second 5-minute boil.',
    },
    {
        title: 'Char the aromatics',
        time: 10,
        body: 'Place the onion halves and ginger directly on an open gas flame, under a hot broiler, or on a dry cast-iron pan. Turn occasionally until the cut sides are blackened and charred, about 8 minutes. The char is the broth\'s smokiness — do not skip it.',
        tip: 'Hold the ginger and onion in tongs over a gas flame for the closest thing to authentic charcoal-roasting at home.',
    },
    {
        title: 'Toast the spices',
        time: 3,
        body: 'In a dry skillet over medium heat, toast the star anise, cinnamon, cloves, black cardamom, coriander seeds, and fennel seeds for about 2-3 minutes until fragrant. Tip them into a small piece of cheesecloth or a spice bag and tie shut. Toasting wakes up the essential oils — without it, the spices taste flat.',
        tip: 'Smell the spices. When they switch from dusty to fragrant, they\'re done. Burning happens fast.',
    },
    {
        title: 'Build the broth',
        time: 5,
        body: 'Return the cleaned bones to a stockpot. Add the brisket, charred onion, charred ginger, and 5 liters of cold water. Bring slowly to a bare simmer — never a rolling boil. A hard boil emulsifies the fat and turns the broth permanently cloudy. You want the surface to barely tremble.',
        tip: 'Cold water start = clearer broth. Hot water start = cloudy broth. This rule never breaks.',
    },
    {
        title: 'Simmer and skim',
        time: 600,
        body: 'Simmer the broth uncovered for 8-10 hours, skimming the surface every 30 minutes for the first 3 hours, then every hour. After 90 minutes, remove the brisket and set aside to cool — overcooked brisket becomes stringy. After 4 hours, drop in the spice bag and rock sugar. After 8 hours, add the fish sauce and salt. Taste. Adjust.',
        tip: 'Real Hanoi cooks simmer 10-12 hours. Home cooks can get away with 6 hours if pressed for time, but the depth will not be the same.',
    },
    {
        title: 'Strain the broth',
        time: 10,
        body: 'When the broth tastes deep and round, strain it through a fine-mesh sieve lined with cheesecloth into a clean pot. Discard the solids. Skim any remaining fat from the surface with a ladle, or chill the broth and lift off the solidified fat layer. You should have around 3 liters of clear, mahogany-colored broth.',
        tip: 'If the broth tastes weak, simmer it down further. If too salty, dilute with hot water and adjust seasoning again.',
    },
    {
        title: 'Slice the beef',
        time: 8,
        body: 'Slice the eye of round beef as thinly as possible against the grain — partial freezing makes this much easier. The slices should be almost translucent. Slice the cooled brisket into thin pieces. Set aside.',
        tip: 'A sharp knife and 30 minutes in the freezer turn the eye of round paper-thin. This is the cut that gets cooked by the hot broth at the table.',
    },
    {
        title: 'Prepare noodles & garnish',
        time: 5,
        body: 'Bring a second pot of water to a boil. Drop in the fresh pho noodles for 30 seconds to heat through (or cook dried noodles per package, usually 5-7 minutes). Drain immediately and divide into 4 deep bowls. Soak the sliced onion in a small bowl of rice vinegar for 5 minutes to take the edge off.',
        tip: 'Do not overcook the noodles — they will continue to soften in the hot broth.',
    },
    {
        title: 'Assemble & serve',
        time: 3,
        body: 'On top of the noodles in each bowl, arrange a layer of raw eye of round slices and the cooked brisket. Scatter with vinegar-soaked onion, scallions, and chopped cilantro. Bring the broth back to a hard boil — it must be boiling hot to cook the raw beef. Ladle the boiling broth over the meat. The slices will turn pale grey within seconds. Serve immediately with garnish platter on the side.',
        tip: 'The eater finishes the dish: adding herbs, lime, chili to taste. Trust them to season their own bowl.',
    },
];

// ── Recipe Schema for Google Rich Snippets ──
const recipeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Authentic Hanoi Beef Pho (Phở Bò)',
    image: ['https://flavor-nest-vietnam.vercel.app/images/recipes/pho-bo.jpg'],
    author: {
        '@type': 'Person',
        name: 'Quan Huy Nguyen',
    },
    datePublished: '2026-05-19',
    description:
        'The complete traditional Hanoi-style beef pho recipe — a 10-hour clear bone broth scented with star anise, cinnamon, charred ginger, served over rice noodles with thinly sliced beef. Tested in a real home kitchen.',
    recipeCuisine: 'Vietnamese',
    recipeCategory: 'Soup',
    keywords: 'pho recipe, vietnamese pho, beef pho, hanoi pho, pho bo, authentic pho',
    recipeYield: '4 servings',
    prepTime: 'PT30M',
    cookTime: 'PT10H',
    totalTime: 'PT10H30M',
    nutrition: {
        '@type': 'NutritionInformation',
        calories: '420 kcal',
        proteinContent: '35g',
        carbohydrateContent: '48g',
        fatContent: '12g',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '248',
    },
    recipeIngredient: [
        '2 kg beef bones (marrow & knuckle)',
        '500 g beef brisket',
        '2 large yellow onions, halved',
        '100 g ginger, halved lengthwise',
        '6 whole star anise',
        '1 cinnamon stick (8cm)',
        '5 whole cloves',
        '1 black cardamom pod (thảo quả)',
        '1 tsp coriander seeds',
        '1 tsp fennel seeds',
        '30 g rock sugar',
        '4 tbsp fish sauce',
        '2 tsp salt',
        '5 liters cold water',
        '600 g fresh pho rice noodles',
        '300 g eye of round beef, thinly sliced',
        'Thai basil, cilantro, lime, chilies for garnish',
    ],
    recipeInstructions: STEPS.map((step, idx) => ({
        '@type': 'HowToStep',
        position: idx + 1,
        name: step.title,
        text: step.body,
    })),
};

export default function PhoBoRecipePage() {
    const [servings, setServings] = useState(SERVINGS_BASE);
    const [checked, setChecked] = useState<Set<string>>(new Set());
    const [doneSteps, setDoneSteps] = useState<Set<number>>(new Set());

    const scale = servings / SERVINGS_BASE;

    const toggleIngredient = (key: string) => {
        const next = new Set(checked);
        if (next.has(key)) next.delete(key);
        else next.add(key);
        setChecked(next);
    };

    const toggleStep = (idx: number) => {
        const next = new Set(doneSteps);
        if (next.has(idx)) next.delete(idx);
        else next.add(idx);
        setDoneSteps(next);
    };

    return (
        <>
            <Script
                id="pho-bo-recipe-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
            />

            <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: "'DM Sans', system-ui, sans-serif", paddingTop: 88 }}>
                {/* ── HERO ── */}
                <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 48px' }}>
                    {/* Breadcrumb */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, fontSize: 13, color: 'rgba(75,46,26,0.5)' }}>
                        <Link href="/" style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none' }}>Home</Link>
                        <span>›</span>
                        <Link href="/recipes" style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none' }}>Recipes</Link>
                        <span>›</span>
                        <Link href="/recipes/breakfast" style={{ color: 'rgba(75,46,26,0.45)', textDecoration: 'none' }}>Breakfast</Link>
                        <span>›</span>
                        <span style={{ color: '#D97706', fontWeight: 600 }}>Hanoi Beef Pho</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 48, alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ position: 'relative', height: 520, borderRadius: 24, overflow: 'hidden' }}
                        >
                            <Image
                                src="/images/recipes/pho-bo.jpg"
                                alt="A bowl of authentic Hanoi-style beef pho with sliced beef, scallions, and herbs"
                                fill
                                priority
                                quality={90}
                                sizes="(max-width:768px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#D97706', textTransform: 'uppercase', marginBottom: 12 }}>
                                Northern Vietnam · Iconic
                            </div>
                            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 700, color: '#2D1A0E', margin: 0, lineHeight: 1.05 }}>
                                Authentic Hanoi Beef Pho
                            </h1>
                            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 22, color: '#D97706', margin: '8px 0 20px' }}>
                                Phở Bò Hà Nội
                            </p>
                            <p style={{ fontSize: 16, color: 'rgba(75,46,26,0.72)', lineHeight: 1.75, marginBottom: 28 }}>
                                A real Hanoi-style pho takes ten hours and rewards every minute of it.
                                Clear bone broth scented with charred ginger and star anise, ladled
                                boiling-hot over rice noodles, paper-thin raw beef, and a snowfall of
                                fresh herbs. This is the version that locals eat at five in the morning
                                — not the simplified Western adaptation.
                            </p>

                            {/* Stats grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, padding: 22, background: 'white', borderRadius: 16, border: '1px solid rgba(75,46,26,0.07)' }}>
                                {[
                                    ['⏱', '10 hr', 'Total time'],
                                    ['📊', 'Medium', 'Difficulty'],
                                    ['⭐', '4.9', '248 reviews'],
                                    ['🔥', '420', 'kcal'],
                                ].map(([icon, val, lbl]) => (
                                    <div key={String(lbl)} style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
                                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: '#2D1A0E' }}>{val}</div>
                                        <div style={{ fontSize: 11, color: 'rgba(75,46,26,0.5)', fontWeight: 500 }}>{lbl}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── INTRO STORY — links to longform ── */}
                <section style={{ background: '#F5EDE3', padding: '48px 24px' }}>
                    <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 18, color: '#4B2E1A', lineHeight: 1.7, margin: '0 0 16px' }}>
                            "Pho is not for the hurried. To achieve a broth as clear as a mirror, the cook must patiently simmer beef bones for ten full hours."
                        </p>
                        <p style={{ fontSize: 13, color: '#8B6F5A', fontWeight: 600, letterSpacing: '0.06em', marginBottom: 20 }}>
                            — Thạch Lam, Vietnamese writer
                        </p>
                        <Link
                            href="/stories/symphony-of-hanois-dawn"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                color: '#D97706',
                                fontSize: 14,
                                fontWeight: 700,
                                textDecoration: 'none',
                                paddingBottom: 2,
                                borderBottom: '1.5px solid #D97706',
                            }}
                        >
                            Read the full story: The Symphony of Hanoi's Dawn →
                        </Link>
                    </div>
                </section>

                {/* ── RECIPE MAIN ── */}
                <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 80px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 400px) minmax(0, 1fr)', gap: 56, alignItems: 'start' }}>
                        {/* ── INGREDIENTS SIDEBAR (sticky) ── */}
                        <aside style={{ position: 'sticky', top: 100 }}>
                            <div style={{ background: 'white', borderRadius: 24, padding: '28px 28px 24px', border: '1px solid rgba(75,46,26,0.07)', boxShadow: '0 4px 24px rgba(75,46,26,0.06)' }}>
                                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase', marginBottom: 8 }}>
                                    Ingredients
                                </div>

                                {/* Servings scaler */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, paddingBottom: 18, borderBottom: '1px solid rgba(75,46,26,0.08)' }}>
                                    <span style={{ fontSize: 14, fontWeight: 600, color: '#4B2E1A' }}>Servings</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#F5EDE3', borderRadius: 100, padding: '4px' }}>
                                        <button
                                            onClick={() => setServings(Math.max(1, servings - 1))}
                                            style={{ width: 28, height: 28, borderRadius: '50%', background: 'white', border: 'none', fontSize: 16, color: '#D97706', cursor: 'pointer', fontWeight: 700 }}
                                        >
                                            −
                                        </button>
                                        <span style={{ minWidth: 28, textAlign: 'center', fontWeight: 700, color: '#2D1A0E' }}>{servings}</span>
                                        <button
                                            onClick={() => setServings(Math.min(20, servings + 1))}
                                            style={{ width: 28, height: 28, borderRadius: '50%', background: 'white', border: 'none', fontSize: 16, color: '#D97706', cursor: 'pointer', fontWeight: 700 }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Ingredient groups */}
                                {(['broth', 'assembly', 'garnish'] as const).map(group => (
                                    <div key={group} style={{ marginBottom: 24 }}>
                                        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', color: '#8B6F5A', textTransform: 'uppercase', marginBottom: 12 }}>
                                            For the {group}
                                        </div>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                                            {INGREDIENTS[group].map((ing, idx) => {
                                                const key = `${group}-${idx}`;
                                                const isChecked = checked.has(key);
                                                const scaled = (ing.amount * scale).toFixed(ing.amount < 10 ? 1 : 0).replace(/\.0$/, '');
                                                return (
                                                    <li key={key}>
                                                        <button
                                                            onClick={() => toggleIngredient(key)}
                                                            style={{
                                                                width: '100%',
                                                                display: 'flex',
                                                                alignItems: 'flex-start',
                                                                gap: 10,
                                                                background: 'none',
                                                                border: 'none',
                                                                padding: 0,
                                                                cursor: 'pointer',
                                                                textAlign: 'left',
                                                                opacity: isChecked ? 0.4 : 1,
                                                                transition: 'opacity 0.2s',
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    flexShrink: 0,
                                                                    width: 18,
                                                                    height: 18,
                                                                    borderRadius: 5,
                                                                    border: `2px solid ${isChecked ? '#D97706' : 'rgba(75,46,26,0.25)'}`,
                                                                    background: isChecked ? '#D97706' : 'transparent',
                                                                    marginTop: 2,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    fontSize: 11,
                                                                    color: 'white',
                                                                    fontWeight: 800,
                                                                }}
                                                            >
                                                                {isChecked ? '✓' : ''}
                                                            </span>
                                                            <span style={{ fontSize: 14, color: '#2D1A0E', lineHeight: 1.5, textDecoration: isChecked ? 'line-through' : 'none' }}>
                                                                <strong style={{ color: '#D97706', fontWeight: 700 }}>{scaled} {ing.unit}</strong>{' '}
                                                                {ing.name}
                                                                {ing.note && (
                                                                    <span style={{ display: 'block', fontSize: 12, color: 'rgba(75,46,26,0.5)', fontStyle: 'italic', marginTop: 2 }}>
                                                                        {ing.note}
                                                                    </span>
                                                                )}
                                                            </span>
                                                        </button>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                ))}

                                <div style={{ background: '#F5EDE3', borderRadius: 12, padding: '12px 14px', fontSize: 12, color: '#8B6F5A', lineHeight: 1.6, marginTop: 8 }}>
                                    💡 Click each ingredient as you check it off. Your progress saves while you cook.
                                </div>
                            </div>
                        </aside>

                        {/* ── INSTRUCTIONS ── */}
                        <div>
                            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase', marginBottom: 12 }}>
                                Method
                            </div>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#2D1A0E', margin: '0 0 8px' }}>
                                The 9 Steps to Perfect Pho
                            </h2>
                            <p style={{ fontSize: 14, color: 'rgba(75,46,26,0.6)', marginBottom: 36 }}>
                                {doneSteps.size} of {STEPS.length} completed · {doneSteps.size === STEPS.length ? '🎉 You did it!' : `${STEPS.length - doneSteps.size} steps remaining`}
                            </p>

                            {/* Progress bar */}
                            <div style={{ height: 4, background: 'rgba(217,119,6,0.15)', borderRadius: 100, marginBottom: 40, overflow: 'hidden' }}>
                                <div
                                    style={{
                                        height: '100%',
                                        background: '#D97706',
                                        width: `${(doneSteps.size / STEPS.length) * 100}%`,
                                        transition: 'width 0.3s ease',
                                    }}
                                />
                            </div>

                            {/* Steps */}
                            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {STEPS.map((step, idx) => {
                                    const isDone = doneSteps.has(idx);
                                    return (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, y: 16 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: '-50px' }}
                                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                                            style={{
                                                display: 'flex',
                                                gap: 24,
                                                marginBottom: 36,
                                                opacity: isDone ? 0.5 : 1,
                                                transition: 'opacity 0.3s',
                                            }}
                                        >
                                            {/* Step number / done button */}
                                            <button
                                                onClick={() => toggleStep(idx)}
                                                style={{
                                                    flexShrink: 0,
                                                    width: 52,
                                                    height: 52,
                                                    borderRadius: '50%',
                                                    background: isDone ? '#166534' : '#D97706',
                                                    color: 'white',
                                                    border: 'none',
                                                    fontSize: isDone ? 22 : 20,
                                                    fontWeight: 800,
                                                    fontFamily: "'Playfair Display', serif",
                                                    cursor: 'pointer',
                                                    boxShadow: '0 4px 12px rgba(217,119,6,0.25)',
                                                    transition: 'all 0.2s',
                                                }}
                                                aria-label={`Mark step ${idx + 1} as ${isDone ? 'undone' : 'done'}`}
                                            >
                                                {isDone ? '✓' : idx + 1}
                                            </button>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
                                                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#2D1A0E', margin: 0, lineHeight: 1.2, textDecoration: isDone ? 'line-through' : 'none' }}>
                                                        {step.title}
                                                    </h3>
                                                    <span style={{ fontSize: 12, color: '#D97706', fontWeight: 600, background: 'rgba(217,119,6,0.1)', padding: '3px 10px', borderRadius: 100 }}>
                                                        ⏱ {step.time < 60 ? `${step.time} min` : `${Math.floor(step.time / 60)} hr`}
                                                    </span>
                                                </div>
                                                <p style={{ fontSize: 15, color: 'rgba(75,46,26,0.78)', lineHeight: 1.8, margin: '0 0 14px' }}>
                                                    {step.body}
                                                </p>
                                                {step.tip && (
                                                    <div style={{ background: '#FDF8F0', borderLeft: '3px solid #D97706', padding: '12px 16px', borderRadius: '0 12px 12px 0' }}>
                                                        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', color: '#D97706', textTransform: 'uppercase', marginBottom: 4 }}>
                                                            💡 Chef's Tip
                                                        </div>
                                                        <p style={{ fontSize: 14, color: '#4B2E1A', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
                                                            {step.tip}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.li>
                                    );
                                })}
                            </ol>
                        </div>
                    </div>
                </section>

                {/* ── PRO TIPS SECTION ── */}
                <section style={{ background: '#2D1A0E', padding: '72px 24px' }}>
                    <div style={{ maxWidth: 900, margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: 48 }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                <div style={{ width: 32, height: 1.5, background: '#D97706' }} />
                                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', color: '#D97706', textTransform: 'uppercase' }}>Master Class</span>
                                <div style={{ width: 32, height: 1.5, background: '#D97706' }} />
                            </div>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: 'white', margin: 0 }}>
                                What Separates Good Pho from Great Pho
                            </h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
                            {[
                                { icon: '🦴', title: 'Quality of bones', body: 'Get marrow bones and knuckle bones from a real butcher. Supermarket bones are too clean — the broth needs collagen and fat.' },
                                { icon: '🔥', title: 'Char, do not roast', body: 'The onion and ginger must be blackened over an open flame. Oven-roasting gives sweetness but no smoke. The smoke is the soul.' },
                                { icon: '💧', title: 'Cold water start', body: 'Always start the broth in cold water. Hot water seals the bones and prevents the deep flavor extraction.' },
                                { icon: '🌡️', title: 'Bare simmer only', body: 'If the surface is bubbling actively, the heat is too high. You want a barely-trembling surface for 10 hours straight.' },
                                { icon: '🥄', title: 'Skim, skim, skim', body: 'Every 30 minutes for the first 3 hours. The clarity of the broth depends almost entirely on this single act of patience.' },
                                { icon: '🧂', title: 'Season at the end', body: 'Salt and fish sauce go in the last hour, not at the start. Early salting toughens the brisket and concentrates as the broth reduces.' },
                            ].map(tip => (
                                <div key={tip.title} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: '24px 22px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <div style={{ fontSize: 28, marginBottom: 12 }}>{tip.icon}</div>
                                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: 'white', margin: '0 0 8px' }}>{tip.title}</h3>
                                    <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>{tip.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ — SEO gold for "how to / can I" queries ── */}
                <section style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px' }}>
                    <div style={{ marginBottom: 40 }}>
                        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase', marginBottom: 12 }}>
                            Questions & Substitutions
                        </div>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>
                            Common Pho Questions
                        </h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {[
                            {
                                q: 'Can I make pho in a slow cooker or Instant Pot?',
                                a: 'Yes — and the Instant Pot is genuinely excellent for this. Pressure cook the bones at high pressure for 2-3 hours after blanching. The broth will be slightly less aromatic than a 10-hour simmer, but the depth is remarkable for the time. A slow cooker on low for 10-12 hours also works beautifully.',
                            },
                            {
                                q: 'Is it OK to skip the black cardamom?',
                                a: 'Yes, but the broth will lack one specific note — a smoky, faintly camphor quality that black cardamom (thảo quả) brings. If you can find it at an Asian grocer, get a small bag. Half a pod per pot is enough. Without it, increase the cinnamon slightly.',
                            },
                            {
                                q: 'What is the best beef cut for the raw slices on top?',
                                a: 'Eye of round is traditional — lean, easy to slice paper-thin when partially frozen. Beef tenderloin works if budget allows. Avoid fatty cuts here; the fat doesn\'t render in the brief broth contact and will taste raw.',
                            },
                            {
                                q: 'Can I freeze the broth?',
                                a: 'Absolutely. Freeze in 1-liter portions. The broth keeps for 3 months frozen and reheats beautifully — just bring to a hard boil before serving. This is how many Vietnamese families pho on a weeknight: weekend cook, weeknight reheat.',
                            },
                            {
                                q: 'Why does my pho broth look cloudy?',
                                a: 'Three likely reasons: 1) You did not blanch the bones, or did not rinse them thoroughly afterward. 2) The broth came to a hard boil during simmering. 3) You stirred or disturbed the pot during cooking. Strain through cheesecloth and chill overnight — most of the cloudy fat will rise and solidify, and you can lift it off.',
                            },
                            {
                                q: 'Is Hanoi pho different from Saigon pho?',
                                a: 'Yes, significantly. Hanoi pho is clearer, more subtle, served without bean sprouts, hoisin, or sriracha — just the broth, noodles, beef, and a few herbs. Saigon pho is sweeter, with a larger herb plate, bean sprouts, hoisin, and chili sauce. This recipe is the Hanoi version. For Saigon-style, add 50% more rock sugar and serve with the full southern garnish platter.',
                            },
                        ].map((faq, i) => (
                            <details
                                key={i}
                                style={{
                                    background: 'white',
                                    borderRadius: 14,
                                    padding: '18px 22px',
                                    border: '1px solid rgba(75,46,26,0.08)',
                                    cursor: 'pointer',
                                }}
                            >
                                <summary style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: '#2D1A0E', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                                    {faq.q}
                                    <span style={{ color: '#D97706', fontSize: 18 }}>+</span>
                                </summary>
                                <p style={{ fontSize: 15, color: 'rgba(75,46,26,0.72)', lineHeight: 1.8, margin: '14px 0 0' }}>
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ── RELATED — SEO interlinking ── */}
                <section style={{ background: '#F5EDE3', padding: '72px 24px' }}>
                    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: 40 }}>
                            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>Keep Cooking</span>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 700, color: '#2D1A0E', margin: '12px 0 0' }}>
                                More Vietnamese Classics
                            </h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
                            {[
                                { href: '/recipes/banh-mi-trung', title: 'Egg Bánh Mì', subtitle: 'Saigon\'s 10-minute breakfast', time: '15 min' },
                                { href: '/recipes/xoi-xeo', title: 'Mung Bean Sticky Rice', subtitle: 'Hanoi\'s morning classic', time: '1 hr' },
                                { href: '/recipes/banh-cuon', title: 'Steamed Rice Rolls', subtitle: 'Silky Northern delicacy', time: '45 min' },
                                { href: '/stories/symphony-of-hanois-dawn', title: '📖 Story: Hanoi\'s Dawn', subtitle: 'The cultural history of pho', time: '5 min read' },
                            ].map(item => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    style={{
                                        display: 'block',
                                        background: 'white',
                                        borderRadius: 16,
                                        padding: '20px 22px',
                                        textDecoration: 'none',
                                        border: '1px solid rgba(75,46,26,0.06)',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
                                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 24px rgba(75,46,26,0.08)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
                                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{ fontSize: 11, color: '#D97706', fontWeight: 700, marginBottom: 6 }}>⏱ {item.time}</div>
                                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#2D1A0E', margin: '0 0 4px' }}>{item.title}</h3>
                                    <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.6)', margin: 0 }}>{item.subtitle}</p>
                                </Link>
                            ))}
                        </div>

                        <div style={{ marginTop: 32, textAlign: 'center' }}>
                            <Link href="/recipes/breakfast" style={{ color: '#D97706', fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>
                                ← Back to all breakfast recipes
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
