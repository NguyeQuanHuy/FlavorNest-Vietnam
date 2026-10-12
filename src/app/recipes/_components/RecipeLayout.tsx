'use client';

import { motion } from 'framer-motion'
import Link from 'next/link';
import { useMemo, useState } from 'react';

export type IngredientSection = {
    title: string;
    items: { amount: number; unit?: string; name: string; note?: string }[];
};

export type Step = {
    title: string;
    description: string;
    tip?: string;
};

export type RecipeData = {
    slug: string;
    title: string;
    subtitle: string;
    category: 'DESSERT' | 'VEGETARIAN' | 'MAIN COURSE' | 'APPETIZER';
    difficulty: 'Easy' | 'Medium' | 'Hard';
    totalTime: string;
    rating: number;
    baseServings: number;
    heroImage: string;
    intro: string;
    ingredientSections: IngredientSection[];
    steps: Step[];
};

export default function RecipeLayout({ recipe }: { recipe: RecipeData }) {
    const [servings, setServings] = useState(recipe.baseServings);
    const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set());
    const [doneSteps, setDoneSteps] = useState<Set<number>>(new Set());
    const [introOpen, setIntroOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'ingredients'|'instructions'>('ingredients');

    const scaleFactor = servings / recipe.baseServings;

    const toggleIngredient = (key: string) => {
        const next = new Set(checkedIngredients);
        if (next.has(key)) next.delete(key);
        else next.add(key);
        setCheckedIngredients(next);
    };

    const toggleStep = (idx: number) => {
        const next = new Set(doneSteps);
        if (next.has(idx)) next.delete(idx);
        else next.add(idx);
        setDoneSteps(next);
    };

    const difficultyColor = useMemo(() => {
        if (recipe.difficulty === 'Easy') return '#5A7A3F';
        if (recipe.difficulty === 'Medium') return '#D97706';
        return '#B54708';
    }, [recipe.difficulty]);

    const formatAmount = (amount: number) => {
        const scaled = amount * scaleFactor;
        if (scaled < 1) return scaled.toFixed(2).replace(/\.?0+$/, '');
        if (Number.isInteger(scaled)) return scaled.toString();
        return scaled.toFixed(1).replace(/\.0$/, '');
    };

const schema = {
        '@context': 'https://schema.org',
        '@type': 'Recipe',
        name: recipe.title,
        alternateName: recipe.subtitle,
        description: recipe.intro,
        image: [recipe.heroImage],
        recipeCuisine: 'Vietnamese',
        recipeCategory: recipe.category,
        recipeYield: `${recipe.baseServings} servings`,
        author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
        recipeIngredient: recipe.ingredientSections.flatMap(s =>
            s.items.map(i => `${i.amount} ${i.unit ?? ''} ${i.name}`.trim())
        ),
        recipeInstructions: recipe.steps.map((step, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: step.title,
            text: step.description,
        })),
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div style={{ backgroundColor: '#F5EDE3', minHeight: '100vh', paddingTop: '88px' }}>
                {/* Sticky Top Bar */}
            <div style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(245,237,227,0.97)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(75,46,26,0.1)' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 10, minWidth: 0, fontFamily: 'DM Sans, sans-serif', fontSize: 13 }}>
                    <Link href="/recipes" className="text-[rgba(75,46,26,0.55)] transition-colors duration-200 hover:text-[#D97706]" style={{ fontWeight: 500, textDecoration: 'none', flexShrink: 0 }}>
                        ← Recipes
                    </Link>
                    <span style={{ color: 'rgba(75,46,26,0.25)' }}>/</span>
                    <span style={{ fontWeight: 500, color: '#2D1A0E', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {recipe.title}
                    </span>
                </div>
            </div>

            {/* Hero */}
            <motion.div
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="recipe-hero grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14"
                style={{ maxWidth: '1280px', margin: '32px auto 0', padding: '0 24px', alignItems: 'center' }}
            >
                {/* Text */}
                <div className="order-2 lg:order-1">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'rgba(75,46,26,0.75)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D97706', flexShrink: 0 }} />
                        {recipe.category}
                    </div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)', fontWeight: 700, color: '#2D1A0E', lineHeight: 1.08, margin: '0 0 18px', letterSpacing: '-0.01em' }}>{recipe.title}</h1>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(1rem, 1.25vw, 1.125rem)', color: 'rgba(75,46,26,0.65)', lineHeight: 1.7, margin: '0 0 30px', maxWidth: 560 }}>{recipe.subtitle}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px 44px', paddingTop: 22, borderTop: '1px solid rgba(75,46,26,0.12)' }}>
                        {[
                            { lbl: 'Total time', val: recipe.totalTime, dot: '' },
                            { lbl: 'Serves', val: recipe.baseServings + ' servings', dot: '' },
                            { lbl: 'Difficulty', val: recipe.difficulty, dot: difficultyColor },
                        ].map(s => (
                            <div key={s.lbl}>
                                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10.5, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'rgba(75,46,26,0.45)', marginBottom: 5 }}>{s.lbl}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 600, color: '#2D1A0E' }}>
                                    {s.dot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: s.dot, flexShrink: 0 }} />}
                                    {s.val}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2" style={{ position: 'relative', height: 'clamp(240px, 35vw, 460px)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 48px rgba(45,26,14,0.12)' }}>
                    <img src={recipe.heroImage} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
            </motion.div>

            {/* Intro paragraph */}
            <div style={{ maxWidth: '860px', margin: '44px auto 40px', padding: '0 24px' }}>
                <div className="border border-[rgba(75,46,26,0.09)]" style={{ background: '#fff', borderRadius: 14, padding: '26px 30px 20px' }}>
                    <div style={{ overflow: 'hidden', maxHeight: introOpen ? 2000 : 90, transition: 'max-height 0.4s ease' }}>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(75,46,26,0.8)', fontSize: 16.5, lineHeight: '30px', margin: 0 }}>
                            {recipe.intro}
                        </p>
                    </div>
                    <button
                        onClick={() => setIntroOpen(o => !o)}
                        className="text-[#2D1A0E] transition-colors duration-200 hover:text-[#D97706]"
                        style={{ display: 'block', marginTop: 12, padding: 0, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        {introOpen ? 'Show less' : 'Read more'}
                    </button>
                </div>
            </div>
            {/* Mobile Tab Switcher */}
            <div className='flex min-[769px]:hidden' style={{ borderBottom: '2px solid rgba(217,119,6,0.2)', margin: '0 16px 0', position: 'sticky', top: 56, zIndex: 30, background: '#F5EDE3' }}>
                <button onClick={() => setActiveTab('ingredients')} style={{ flex: 1, padding: '12px 0', fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", border: 'none', background: 'none', cursor: 'pointer', color: activeTab === 'ingredients' ? '#D97706' : 'rgba(75,46,26,0.45)', borderBottom: activeTab === 'ingredients' ? '2px solid #D97706' : '2px solid transparent', marginBottom: -2 }}>🥘 Ingredients</button>
                <button onClick={() => setActiveTab('instructions')} style={{ flex: 1, padding: '12px 0', fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", border: 'none', background: 'none', cursor: 'pointer', color: activeTab === 'instructions' ? '#D97706' : 'rgba(75,46,26,0.45)', borderBottom: activeTab === 'instructions' ? '2px solid #D97706' : '2px solid transparent', marginBottom: -2 }}>📋 Instructions</button>
            </div>

            {/* Main 2-column grid */}
            <div
                className="max-w-7xl mx-auto px-6 pb-20"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(280px, 380px) 1fr',
                    gap: '32px',
                    alignItems: 'start',
                }}
            >
                {/* LEFT: Ingredients */}
                <aside className={activeTab === 'ingredients' ? '' : 'hide-on-mobile'}
                    style={{
                        position: 'sticky',
                        top: '90px',
                        backgroundColor: '#FFFBF5',
                        borderRadius: '12px',
                        padding: '28px',
                        backgroundImage: 'linear-gradient(rgba(217,119,6,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(217,119,6,0.04) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                        boxShadow: '0 4px 24px rgba(45,26,14,0.06)',
                    }}
                >
                    <h2
                        style={{
                            fontFamily: 'Playfair Display, serif',
                            color: '#2D1A0E',
                            fontSize: '1.75rem',
                            fontWeight: 700,
                            marginBottom: '20px',
                        }}
                    >
                        🥘 Ingredients
                    </h2>

                    {/* Servings scaler */}
                    <div
                        style={{
                            backgroundColor: '#FAF5EE',
                            borderRadius: '12px',
                            padding: '14px 18px',
                            marginBottom: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                color: '#6B5544',
                                fontSize: '14px',
                            }}
                        >
                            Servings
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <button
                                onClick={() => setServings(Math.max(1, servings - 1))}
                                aria-label="Decrease servings"
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    border: '1px solid #E5D6C5',
                                    backgroundColor: '#FFF',
                                    color: '#4B2E1A',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                }}
                            >
                                −
                            </button>
                            <span
                                style={{
                                    fontFamily: 'Playfair Display, serif',
                                    color: '#2D1A0E',
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    minWidth: '24px',
                                    textAlign: 'center',
                                }}
                            >
                                {servings}
                            </span>
                            <button
                                onClick={() => setServings(Math.min(20, servings + 1))}
                                aria-label="Increase servings"
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    border: '1px solid #E5D6C5',
                                    backgroundColor: '#FFF',
                                    color: '#4B2E1A',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Ingredient sections */}
                    {recipe.ingredientSections.map((section, si) => (
                        <div key={si} style={{ marginBottom: '20px' }}>
                            <h3
                                style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    color: '#D97706',
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    letterSpacing: '1.5px',
                                    marginBottom: '12px',
                                }}
                            >
                                {section.title.toUpperCase()}
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {section.items.map((ing, ii) => {
                                    const key = `${si}-${ii}`;
                                    const isChecked = checkedIngredients.has(key);
                                    return (
                                        <li
                                            key={key}
                                            onClick={() => toggleIngredient(key)}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '10px',
                                                padding: '10px 0',
                                                cursor: 'pointer',
                                                borderBottom: '1px solid #F5EDE3',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    flexShrink: 0,
                                                    width: '18px',
                                                    height: '18px',
                                                    borderRadius: '4px',
                                                    border: `2px solid ${isChecked ? '#D97706' : '#D4C3B0'}`,
                                                    backgroundColor: isChecked ? '#D97706' : 'transparent',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginTop: '2px',
                                                    transition: 'all 0.2s',
                                                }}
                                            >
                                                {isChecked && (
                                                    <span style={{ color: '#FFF', fontSize: '11px', fontWeight: 700 }}>
                                                        ✓
                                                    </span>
                                                )}
                                            </div>
                                            <span
                                                style={{
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '14.5px',
                                                    color: isChecked ? '#A89684' : '#2D1A0E',
                                                    textDecoration: isChecked ? 'line-through' : 'none',
                                                    lineHeight: 1.5,
                                                    transition: 'all 0.2s',
                                                }}
                                            >
                                                <strong>
                                                    {formatAmount(ing.amount)}
                                                    {ing.unit ? ing.unit : ''}
                                                </strong>{' '}
                                                {ing.name}
                                                {ing.note && (
                                                    <span style={{ color: '#8B6F5A' }}> ({ing.note})</span>
                                                )}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </aside>

                {/* RIGHT: Instructions */}
                <main className={activeTab === 'instructions' ? '' : 'hide-on-mobile'}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            marginBottom: '12px',
                        }}
                    >
                        <h2
                            style={{
                                fontFamily: 'Playfair Display, serif',
                                color: '#2D1A0E',
                                fontSize: '1.75rem',
                                fontWeight: 700,
                            }}
                        >
                            Instructions
                        </h2>
                        <span
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                color: '#8B6F5A',
                                fontSize: '14px',
                            }}
                        >
                            {doneSteps.size}/{recipe.steps.length} done
                        </span>
                    </div>
                    <div
                        style={{
                            height: '2px',
                            backgroundColor: '#EDE0D0',
                            borderRadius: '2px',
                            marginBottom: '28px',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <motion.div
                            animate={{
                                width: `${(doneSteps.size / recipe.steps.length) * 100}%`,
                            }}
                            transition={{ duration: 0.4 }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: '#D97706',
                                borderRadius: '2px',
                            }}
                        />
                    </div>

                    <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {recipe.steps.map((step, i) => {
                            const isDone = doneSteps.has(i);
                            return (
                                <motion.li
                                    key={i}
                                    initial={false}


                                    transition={{ delay: i * 0.05 }}
                                    style={{
                                        display: 'flex',
                                        gap: '20px',
                                        padding: '24px 0',
                                        borderBottom:
                                            i < recipe.steps.length - 1 ? '1px solid #EDE0D0' : 'none',
                                    }}
                                >
                                    <button
                                        onClick={() => toggleStep(i)}
                                        aria-label={`Mark step ${i + 1} as done`}
                                        style={{
                                            flexShrink: 0,
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            border: `2px solid ${isDone ? '#D97706' : '#E5D6C5'}`,
                                            backgroundColor: isDone ? '#D97706' : 'transparent',
                                            color: isDone ? '#FFF' : '#D97706',
                                            fontFamily: 'Playfair Display, serif',
                                            fontSize: '0.9rem',
                                            fontWeight: 700,
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                        }}
                                    >
                                        {isDone ? '✓' : i + 1}
                                    </button>
                                    <div style={{ flex: 1 }}>
                                        <h3
                                            style={{
                                                fontFamily: 'Playfair Display, serif',
                                                color: '#2D1A0E',
                                                fontSize: '1.2rem',
                                                fontWeight: 700,
                                                marginBottom: '8px',
                                                textDecoration: isDone ? 'line-through' : 'none',
                                                opacity: isDone ? 0.5 : 1,
                                                transition: 'all 0.2s',
                                            }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontFamily: 'DM Sans, sans-serif',
                                                color: '#4B2E1A',
                                                fontSize: '1rem',
                                                lineHeight: 1.75,
                                                opacity: isDone ? 0.5 : 1,
                                            }}
                                        >
                                            {step.description}
                                        </p>
                                        {step.tip && (
                                            <div
                                                style={{
                                                    marginTop: '14px',
                                                    padding: '14px 16px',
                                                    backgroundColor: '#FAF0DC',
                                                    borderLeft: '4px solid #D97706',
                                                    borderRadius: '8px',
                                                    fontFamily: 'DM Sans, sans-serif',
                                                    fontSize: '14.5px',
                                                    color: '#6B4A1F',
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                <strong style={{ color: '#B54708' }}>💡 Tip:</strong> {step.tip}
                                            </div>
                                        )}
                                    </div>
                                </motion.li>
                            );
                        })}
                    </ol>
                </main>
            </div>

            {/* Mobile responsive override */}
            <style jsx>{`
        @media (max-width: 768px) {
          .hide-on-mobile { display: none !important; }
          div[style*='grid-template-columns: minmax(280px, 380px) 1fr'] {
            grid-template-columns: 1fr !important;
          }
          aside {
            position: static !important;
            max-height: none !important;
          }
        }
      `}</style>
            {/* Comments Section */}
            <div style={{ maxWidth: 900, margin: '0 auto 60px', padding: '0 24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#2D1A0E', marginBottom: 24, paddingBottom: 12, borderBottom: '2px solid #D97706' }}>Comments</h3>
                <div style={{ marginBottom: 24 }}>
                    <textarea placeholder='Share your thoughts or tips about this recipe...' rows={4} style={{ width: '100%', padding: '14px 16px', fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#2D1A0E', background: '#fff', border: '1.5px solid rgba(75,46,26,0.15)', borderRadius: 12, resize: 'vertical', outline: 'none', boxSizing: 'border-box' }} />
                    <button style={{ marginTop: 10, padding: '10px 28px', background: '#D97706', color: 'white', border: 'none', borderRadius: 100, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, cursor: 'pointer', letterSpacing: '0.04em' }}>Post Comment</button>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(75,46,26,0.4)', fontStyle: 'italic', marginTop: 8 }}>No comments yet. Be the first to share your experience!</p>
            </div>
        </div>
        </>
    );
}
