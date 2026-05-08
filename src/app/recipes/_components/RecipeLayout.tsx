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
        <div style={{ backgroundColor: '#F5EDE3', minHeight: '100vh', paddingTop: '88px' }}>
            {/* Sticky Top Bar */}
            <div style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                background: 'rgba(245,237,227,0.97)',
                backdropFilter: 'blur(16px)',
                borderBottom: '2px solid #D97706',
            }}>
                <div style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '12px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                }}>
                    {/* Left: breadcrumb */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                        <Link href="/recipes" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: 13,
                            fontWeight: 500,
                            color: '#D97706',
                            textDecoration: 'none',
                            flexShrink: 0,
                        }}>
                            ← Recipes
                        </Link>
                        <span style={{ color: '#D97706', opacity: 0.4 }}>›</span>
                        <span style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: 13,
                            fontWeight: 600,
                            color: '#2D1A0E',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}>
                            {recipe.title}
                        </span>
                    </div>
            
                    {/* Right: meta */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                        <span style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: 12,
                            color: 'rgba(75,46,26,0.6)',
                            background: 'rgba(75,46,26,0.06)',
                            padding: '4px 12px',
                            borderRadius: 100,
                        }}>
                            ⏱ {recipe.totalTime}
                        </span>
                        <span style={{
                            backgroundColor: difficultyColor,
                            color: '#FFF',
                            padding: '4px 14px',
                            borderRadius: 100,
                            fontSize: 11,
                            fontWeight: 700,
                            fontFamily: 'DM Sans, sans-serif',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                        }}>
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
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '48px',
                    alignItems: 'center',
                }}
            >
                {/* Text bên trái */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                        <div style={{ width: '32px', height: '2px', background: '#D97706' }} />
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', color: '#D97706', textTransform: 'uppercase' }}>
                            {recipe.category}
                        </span>
                    </div>
                    <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#2D1A0E', lineHeight: 1.1, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {recipe.title}
                    </h2>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: '#D97706', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.6, marginBottom: '28px' }}>
                        {recipe.subtitle}
                    </p>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        {[
                            { icon: '◷', val: recipe.totalTime, lbl: 'Total Time' },
                            { icon: '◈', val: recipe.difficulty, lbl: 'Difficulty' },
                            { icon: '◎', val: `${recipe.baseServings} bowls`, lbl: 'Serves' },
                        ].map(s => (
                            <div key={s.lbl}>
                                <div style={{ fontSize: '20px', marginBottom: '4px' }}>{s.icon}</div>
                                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: '#2D1A0E' }}>{s.val}</div>
                                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(75,46,26,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.lbl}</div>
                            </div>
                        ))}
                    </div>
                </div>
            
                {/* Ảnh bên phải */}
                <div style={{ position: 'relative', height: 'clamp(240px, 30vw, 380px)', borderRadius: '0 16px 0 16px', overflow: 'hidden' }}>
                    <img src={recipe.heroImage} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> 
                </div>
            </motion.div>

            {/* Intro paragraph */}
            <div style={{ maxWidth: '720px', margin: '40px auto', padding: '0 24px' }}>
                <div style={{
                    position: 'relative',
                    padding: '36px 44px',
                    background: '#fff',
                    border: '2px solid #D97706',
                    borderRadius: '4px 20px 4px 20px',
                }}>
                    {/* Góc trang trí */}
                    <div style={{ position: 'absolute', top: -10, left: -10, width: 20, height: 20, background: '#D97706', borderRadius: '50%' }} />
                    <div style={{ position: 'absolute', bottom: -10, right: -10, width: 20, height: 20, background: '#D97706', borderRadius: '50%' }} />
                    <div style={{ position: 'absolute', top: -6, left: -6, width: 12, height: 12, background: '#fff', borderRadius: '50%', border: '2px solid #D97706' }} />
                    <div style={{ position: 'absolute', bottom: -6, right: -6, width: 12, height: 12, background: '#fff', borderRadius: '50%', border: '2px solid #D97706' }} />
            
                    {/* Quote mark */}
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 72, color: '#D97706', lineHeight: 0.5, marginBottom: 20, opacity: 0.3 }}>"</div>
            
                    <p style={{
                        fontFamily: 'Playfair Display, serif',
                        fontStyle: 'italic',
                        color: '#4B2E1A',
                        fontSize: '1.15rem',
                        lineHeight: 1.85,
                        textAlign: 'center',
                        margin: 0,
                    }}>
                        {recipe.intro}
                    </p>
            
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 72, color: '#D97706', lineHeight: 0.5, marginTop: 16, textAlign: 'right', opacity: 0.3 }}>"</div>
                </div>
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
                        borderRadius: '8px 8px 0 0',
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
