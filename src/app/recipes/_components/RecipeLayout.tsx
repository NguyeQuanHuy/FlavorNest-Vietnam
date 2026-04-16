'use client';

import { motion } from 'framer-motion';
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

    return (
        <div style={{ backgroundColor: '#F5EDE3', minHeight: '100vh' }}>
            {/* Sticky Top Bar */}
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 50,
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid #EDE0D0',
                }}
            >
                <div
                    className="max-w-7xl mx-auto px-6 py-4"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        flexWrap: 'wrap',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                        <Link
                            href="/recipes"
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                color: '#8B6F5A',
                                fontSize: '14px',
                                textDecoration: 'none',
                                fontWeight: 500,
                                flexShrink: 0,
                            }}
                        >
                            ← Recipes
                        </Link>
                        <span style={{ color: '#D4C3B0' }}>›</span>
                        <h1
                            style={{
                                fontFamily: 'Playfair Display, serif',
                                color: '#2D1A0E',
                                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                                fontWeight: 700,
                                margin: 0,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {recipe.title}
                        </h1>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
                        <span
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                color: '#4B2E1A',
                                fontSize: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                        >
                            <span style={{ color: '#D97706' }}>★</span>
                            <strong>{recipe.rating}</strong>
                        </span>
                        <span
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                color: '#6B5544',
                                fontSize: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                        >
                            <span style={{ opacity: 0.6 }}>⏱</span>
                            {recipe.totalTime}
                        </span>
                        <span
                            style={{
                                backgroundColor: difficultyColor,
                                color: '#FFF',
                                padding: '4px 14px',
                                borderRadius: '999px',
                                fontSize: '12px',
                                fontWeight: 700,
                                fontFamily: 'DM Sans, sans-serif',
                            }}
                        >
                            {recipe.difficulty}
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                    maxWidth: '1280px',
                    margin: '32px auto 0',
                    padding: '0 24px',
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        height: 'clamp(280px, 45vw, 480px)',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        backgroundImage: `url(${recipe.heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                                'linear-gradient(180deg, transparent 40%, rgba(45,26,14,0.8) 100%)',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '32px',
                            left: '32px',
                            right: '32px',
                            color: '#FFF',
                        }}
                    >
                        <span
                            style={{
                                display: 'inline-block',
                                backgroundColor: 'rgba(217,119,6,0.95)',
                                color: '#FFF',
                                padding: '6px 14px',
                                borderRadius: '999px',
                                fontSize: '11px',
                                fontWeight: 700,
                                letterSpacing: '1.5px',
                                marginBottom: '12px',
                            }}
                        >
                            {recipe.category}
                        </span>
                        <p
                            style={{
                                fontFamily: 'Playfair Display, serif',
                                fontStyle: 'italic',
                                color: '#F5EDE3',
                                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                                maxWidth: '720px',
                                lineHeight: 1.5,
                            }}
                        >
                            {recipe.subtitle}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Intro paragraph */}
            <div className="max-w-3xl mx-auto px-6 py-10">
                <p
                    style={{
                        fontFamily: 'DM Sans, sans-serif',
                        color: '#4B2E1A',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        textAlign: 'center',
                    }}
                >
                    {recipe.intro}
                </p>
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
                <aside
                    style={{
                        position: 'sticky',
                        top: '90px',
                        backgroundColor: '#FFF',
                        borderRadius: '20px',
                        padding: '28px',
                        boxShadow: '0 4px 24px rgba(45,26,14,0.06)',
                        maxHeight: 'calc(100vh - 110px)',
                        overflowY: 'auto',
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
                        Ingredients
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
                                    fontSize: '18px',
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
                                    fontSize: '18px',
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
                <main>
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
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
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
                                            fontSize: '1.1rem',
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
          div[style*='grid-template-columns: minmax(280px, 380px) 1fr'] {
            grid-template-columns: 1fr !important;
          }
          aside {
            position: static !important;
            max-height: none !important;
          }
        }
      `}</style>
        </div>
    );
}