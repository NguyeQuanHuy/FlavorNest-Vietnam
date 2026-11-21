'use client';

import { motion } from 'framer-motion'
import Link from 'next/link';
import { useMemo, useState } from 'react';
import RelatedRecipes from './RelatedRecipes';
import ShareButtons from '@/components/ShareButtons';
import CookingSteps from './CookingSteps';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeRecipe(raw: any): RecipeData {
  if (raw.ingredientSections) return raw as RecipeData;
  return {
    slug: raw.slug || '',
    title: raw.title || '',
    subtitle: raw.subtitle || '',
    category: raw.category || 'MAIN COURSE',
    difficulty: raw.difficulty || 'Medium',
    totalTime: raw.totalTime || '',
    rating: raw.rating || 0,
    baseServings: raw.baseServings ?? raw.servings ?? 4,
    heroImage: raw.heroImage || '',
    intro: raw.intro || (raw.introduction?.paragraphs ? raw.introduction.paragraphs.join('\n\n') : ''),
    ingredientSections: raw.ingredients ? raw.ingredients.map((g) => ({
      title: g.group || g.title || '',
      items: (g.items || []).map((item) => ({
        amount: typeof item.amount === 'number' ? item.amount : parseFloat(item.amount) || 1,
        unit: item.unit,
        name: item.name || '',
        note: item.note,
      })),
    })) : [],
    steps: raw.steps || (raw.instructions ? raw.instructions.map((inst) => ({
      title: inst.title || '',
      description: inst.description || inst.details || '',
      tip: inst.tip,
    })) : []),
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RecipeLayout({ recipe: rawRecipe }: { recipe: any }) {
    const recipe = normalizeRecipe(rawRecipe);
    const [servings, setServings] = useState(recipe.baseServings);
    const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set());
    const [doneSteps, setDoneSteps] = useState<Set<number>>(new Set());
    const [introOpen, setIntroOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'ingredients'|'instructions'>('ingredients');
    // Mobile tabs: remember direction for the slide-in, and bring the tab bar back to the top
    // (instead of leaving the reader mid-way down the new panel)
    const switchTab = (t: 'ingredients' | 'instructions') => {
        if (t === activeTab) return;
        setActiveTab(t);
        const anchor = document.getElementById('recipe');
        if (!anchor) return;
        const top = anchor.getBoundingClientRect().top;
        if (top < 61) window.scrollTo({ top: window.scrollY + top - 61, behavior: 'smooth' });
    };

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

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flavor-nest-vietnam.vercel.app/' },
            { '@type': 'ListItem', position: 2, name: 'Recipes', item: 'https://flavor-nest-vietnam.vercel.app/recipes' },
            { '@type': 'ListItem', position: 3, name: recipe.category, item: `https://flavor-nest-vietnam.vercel.app/recipes?category=${encodeURIComponent(recipe.category)}` },
            { '@type': 'ListItem', position: 4, name: recipe.title },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div style={{ backgroundColor: '#F5EDE3', minHeight: '100vh', paddingTop: '88px' }}>
            <style>{`
                .fn-print-card { display: none; }
                @media print {
                    @page { margin: 14mm; }
                    body *:not(:has(.fn-print-card)):not(.fn-print-card):not(.fn-print-card *) { display: none !important; }
                    *:has(.fn-print-card) { padding: 0 !important; margin: 0 !important; background: none !important; min-height: 0 !important; box-shadow: none !important; border: 0 !important; }
                    .fn-print-card { display: block !important; width: 100%; background: #fff; color: #000; font-family: 'DM Sans', Arial, sans-serif; }
                    .fn-print-card h1 { font-family: 'Playfair Display', Georgia, serif; font-size: 24pt; margin: 0 0 4pt; }
                    .fn-print-card h2 { font-family: 'Playfair Display', Georgia, serif; font-size: 14pt; margin: 14pt 0 6pt; border-bottom: 1px solid #999; padding-bottom: 3pt; }
                    .fn-print-card h3 { font-size: 10.5pt; margin: 8pt 0 3pt; text-transform: uppercase; letter-spacing: .06em; }
                    .fn-print-card p, .fn-print-card li { font-size: 10.5pt; line-height: 1.5; }
                    .fn-print-card ul, .fn-print-card ol { margin: 0; padding-left: 16pt; }
                    .fn-print-card li { margin-bottom: 3pt; break-inside: avoid; }
                }
            `}</style>
            <article className="fn-print-card" aria-hidden>
                <div style={{ display: 'flex', gap: '14pt', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                        <h1>{recipe.title}</h1>
                        <p style={{ margin: '0 0 8pt', color: '#444' }}>{recipe.subtitle}</p>
                        <p style={{ margin: 0 }}>
                            <strong>Total time:</strong> {recipe.totalTime} &nbsp;·&nbsp; <strong>Serves:</strong> {servings} &nbsp;·&nbsp; <strong>Difficulty:</strong> {recipe.difficulty}
                        </p>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={recipe.heroImage} alt="" style={{ width: '42mm', height: '32mm', objectFit: 'cover', borderRadius: 4 }} />
                </div>
                <h2>Ingredients</h2>
                {recipe.ingredientSections.map((section, si) => (
                    <div key={si}>
                        {section.title && <h3>{section.title}</h3>}
                        <ul>
                            {section.items.map((ing, ii) => (
                                <li key={ii}>
                                    <strong>{formatAmount(ing.amount)}{ing.unit ? ' ' + ing.unit : ''}</strong> {ing.name}{ing.note ? ` (${ing.note})` : ''}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <h2>Instructions</h2>
                <ol>
                    {recipe.steps.map((step, i) => (
                        <li key={i}>
                            {step.title && <strong>{step.title}. </strong>}{step.description}
                            {step.tip && <em style={{ display: 'block', color: '#555' }}>Tip: {step.tip}</em>}
                        </li>
                    ))}
                </ol>
                <p style={{ marginTop: '16pt', paddingTop: '6pt', borderTop: '1px solid #999', fontSize: '9pt', color: '#555' }}>
                    FlavorNest Vietnam · flavor-nest-vietnam.vercel.app/recipes/{recipe.slug}
                </p>
            </article>
                {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(245,237,227,0.97)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(75,46,26,0.1)' }}>
                <ol style={{ maxWidth: '1280px', margin: '0 auto', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 8, minWidth: 0, fontFamily: 'DM Sans, sans-serif', fontSize: 13, listStyle: 'none' }}>
                    <li style={{ flexShrink: 0 }}>
                        <Link href="/" className="text-[rgba(75,46,26,0.55)] transition-colors duration-200 hover:text-[#D97706]" style={{ fontWeight: 500, textDecoration: 'none' }}>
                            Home
                        </Link>
                    </li>
                    <li style={{ color: 'rgba(75,46,26,0.25)', flexShrink: 0 }} aria-hidden="true">/</li>
                    <li style={{ flexShrink: 0 }}>
                        <Link href="/recipes" className="text-[rgba(75,46,26,0.55)] transition-colors duration-200 hover:text-[#D97706]" style={{ fontWeight: 500, textDecoration: 'none' }}>
                            Recipes
                        </Link>
                    </li>
                    <li style={{ color: 'rgba(75,46,26,0.25)', flexShrink: 0 }} aria-hidden="true">/</li>
                    <li style={{ fontWeight: 500, color: '#2D1A0E', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} aria-current="page">
                        {recipe.title}
                    </li>
                </ol>
            </nav>

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
                    <div style={{ marginTop: 26 }}>
                        <ShareButtons path={`/recipes/${recipe.slug}`} title={recipe.title} image={recipe.heroImage} />
                    </div>
                    <div className="fn-no-print" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 16 }}>
                        <a
                            href="#recipe"
                            onClick={e => { e.preventDefault(); setActiveTab('ingredients'); document.getElementById('recipe')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                            className="transition-colors duration-200 hover:bg-[#B45309]"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 20px', borderRadius: 999, background: '#D97706', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                            Jump to Recipe
                        </a>
                        <button
                            type="button"
                            onClick={() => window.print()}
                            className="transition-colors duration-200 hover:bg-[#2D1A0E] hover:text-white"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 999, background: 'transparent', color: '#2D1A0E', border: '1.5px solid #2D1A0E', fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                            Print
                        </button>
                    </div>
                </div>

                {/* Image with Pin It */}
                <div className="order-1 lg:order-2 group" style={{ position: 'relative', height: 'clamp(240px, 35vw, 460px)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 48px rgba(45,26,14,0.12)' }}>
                    <img src={recipe.heroImage} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <a
                        href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(`https://flavor-nest-vietnam.vercel.app/recipes/${recipe.slug}`)}&media=${encodeURIComponent(`https://flavor-nest-vietnam.vercel.app${recipe.heroImage}`)}&description=${encodeURIComponent(`${recipe.title} — ${recipe.subtitle} | FlavorNest Vietnam`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                            position: 'absolute',
                            top: 14,
                            right: 14,
                            backgroundColor: '#E60023',
                            color: '#fff',
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 13,
                            fontWeight: 700,
                            padding: '8px 16px',
                            borderRadius: 24,
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                            zIndex: 10,
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                        Save
                    </a>
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
            <div id="recipe" aria-hidden style={{ scrollMarginTop: 120 }} />
            {/* Mobile Tab Switcher — segmented control with a sliding pill */}
            <div className='flex min-[769px]:hidden' style={{ position: 'sticky', top: 61, zIndex: 30, background: 'rgba(245,237,227,0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', padding: '10px 16px' }}>
                <div role="tablist" aria-label="Recipe sections" style={{ display: 'flex', flex: 1, padding: 4, borderRadius: 999, background: 'rgba(75,46,26,0.07)' }}>
                    {([['ingredients', 'Ingredients'], ['instructions', 'Instructions']] as const).map(([key, label]) => {
                        const on = activeTab === key;
                        return (
                            <button
                                key={key}
                                role="tab"
                                aria-selected={on}
                                onClick={() => switchTab(key)}
                                style={{ position: 'relative', flex: 1, padding: '10px 0', border: 'none', background: 'none', cursor: 'pointer', borderRadius: 999, fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, fontWeight: 600, letterSpacing: '0.01em', color: on ? '#2D1A0E' : 'rgba(75,46,26,0.5)', transition: 'color 0.3s ease', WebkitTapHighlightColor: 'transparent' }}
                            >
                                {on && (
                                    <motion.span
                                        layoutId="fn-recipe-tab"
                                        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                                        style={{ position: 'absolute', inset: 0, borderRadius: 999, background: '#fff', boxShadow: '0 1px 2px rgba(45,26,14,0.08), 0 4px 14px -6px rgba(45,26,14,0.25)' }}
                                    />
                                )}
                                <span style={{ position: 'relative' }}>{label}</span>
                            </button>
                        );
                    })}
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
                <aside className={activeTab === 'ingredients' ? 'fn-tab-panel' : 'hide-on-mobile'} data-dir="left"
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
                <main className={activeTab === 'instructions' ? 'fn-tab-panel' : 'hide-on-mobile'} data-dir="right">
                    <CookingSteps
                        slug={recipe.slug}
                        steps={recipe.steps}
                        ingredients={recipe.ingredientSections.map(sec => ({
                            title: sec.title,
                            items: sec.items.map(it => ({ qty: `${formatAmount(it.amount)}${it.unit ? ' ' + it.unit : ''}`, name: it.name })),
                        }))}
                    />
                </main>
            </div>

            {/* Mobile responsive override */}
            <style jsx>{`
        @media (max-width: 768px) {
          .hide-on-mobile { display: none !important; }
          .fn-tab-panel { animation: fnTabInRight 0.42s cubic-bezier(0.22, 1, 0.36, 1) backwards; }
          .fn-tab-panel[data-dir='left'] { animation-name: fnTabInLeft; }
          @keyframes fnTabInRight { from { opacity: 0; transform: translateX(18px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fnTabInLeft { from { opacity: 0; transform: translateX(-18px); } to { opacity: 1; transform: translateX(0); } }
          @media (prefers-reduced-motion: reduce) { .fn-tab-panel { animation: none; } }
          div[style*='grid-template-columns: minmax(280px, 380px) 1fr'] {
            grid-template-columns: 1fr !important;
          }
          aside {
            position: static !important;
            max-height: none !important;
          }
        }
      `}</style>
            {/* Related Recipes */}
            <RelatedRecipes currentSlug={recipe.slug} category={recipe.category} />

            {/* Comments Section */}
            <div style={{ maxWidth: 900, margin: '0 auto 60px', padding: '0 24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#2D1A0E', marginBottom: 24, paddingBottom: 12, borderBottom: '2px solid #D97706' }}>Comments</h3>
                                <p style={{ fontSize: 14, color: 'rgba(75,46,26,0.55)', margin: 0, lineHeight: 1.6 }}>
                    Comments are coming soon. Cooked this recipe? We would love to hear how it went once they open.
                </p>
            </div>
        </div>
        </>
    );
}
