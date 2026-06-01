'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChefHat, ArrowRight, X, Loader2 } from 'lucide-react';
import { getAllRecipes } from '@/data/index';

// ── Danh sach nguyen lieu pho bien ──
const INGREDIENT_GROUPS = [
  {
    label: 'Proteins',
    emoji: '🥩',
    items: ['Pork', 'Chicken', 'Beef', 'Shrimp', 'Fish', 'Tofu', 'Eggs', 'Crab'],
  },
  {
    label: 'Noodles & Rice',
    emoji: '🍜',
    items: ['Rice', 'Rice Noodles', 'Egg Noodles', 'Vermicelli', 'Glass Noodles', 'Bread'],
  },
  {
    label: 'Vegetables',
    emoji: '🥬',
    items: ['Bean Sprouts', 'Cabbage', 'Morning Glory', 'Eggplant', 'Tomato', 'Green Onion', 'Mushroom'],
  },
  {
    label: 'Aromatics',
    emoji: '🧄',
    items: ['Garlic', 'Shallots', 'Lemongrass', 'Ginger', 'Chilli', 'Galangal'],
  },
  {
    label: 'Pantry',
    emoji: '🫙',
    items: ['Fish Sauce', 'Soy Sauce', 'Oyster Sauce', 'Coconut Milk', 'Palm Sugar', 'Shrimp Paste'],
  },
];

interface RecipeSuggestion {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  reason: string;
  matchScore: number;
}

const ALL_RECIPES = getAllRecipes();

export default function IngredientFinderHero() {
  const [selected, setSelected] = useState<string[]>([]);
  const [results, setResults] = useState<RecipeSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  function toggleIngredient(item: string) {
    setSelected(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
    setShowResults(false);
  }

  async function findRecipes() {
    if (selected.length === 0) return;
    setLoading(true);
    setShowResults(false);

    const recipeList = ALL_RECIPES.slice(0, 60).map(r => ({
      slug: r.slug,
      title: r.title,
      subtitle: r.subtitle,
      image: r.image,
      tags: r.tags,
      description: r.description,
    }));

    try {
      const res = await fetch('/api/ingredient-finder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients: selected }),
      });

      const parsed = await res.json();
      setResults(parsed.suggestions ?? []);
      setShowResults(true);
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    } catch {
      setResults([]);
      setShowResults(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" aria-label="Ingredient Finder">
      {/* Background */}
      <div className="absolute inset-0 scale-110">
        <Image
          src="/hero-bg.jpg"
          alt="Vietnamese food background"
          fill priority fetchPriority="high" quality={82} sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AL+AAAAAA//Z"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1009]/90 via-[#2D1A0E]/85 to-[#1C1009]/95" />

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center px-4 pt-24 pb-4 max-w-5xl mx-auto w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 20 }}>
            <ChefHat size={14} color="#D97706" />
            <span style={{ fontSize: 12, fontWeight: 600, color: '#D97706', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              What is in your kitchen?
            </span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 4px' }}>
            Pick your ingredients,<br />
            <span style={{ color: '#D97706', fontStyle: 'italic' }}>we find your dish.</span>
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(245,237,227,0.65)', maxWidth: 480, margin: '0 auto' }}>
            Select what you have at home and our AI will suggest the perfect Vietnamese recipe to cook tonight.
          </p>
        </motion.div>

        {/* Ingredient Picker */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: '16px 20px' }}
        >
          {INGREDIENT_GROUPS.map((group, gi) => (
            <div key={group.label} style={{ marginBottom: gi < INGREDIENT_GROUPS.length - 1 ? 12 : 0 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(245,237,227,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>
                {group.emoji} {group.label}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.items.map(item => {
                  const active = selected.includes(item);
                  return (
                    <motion.button
                      key={item}
                      whileTap={{ scale: 0.92 }}
                      onClick={() => toggleIngredient(item)}
                      style={{
                        padding: '7px 16px',
                        borderRadius: 100,
                        fontSize: 13,
                        fontWeight: active ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.18s',
                        background: active ? '#D97706' : 'rgba(255,255,255,0.08)',
                        color: active ? '#fff' : 'rgba(245,237,227,0.75)',
                        border: active ? '1.5px solid #D97706' : '1.5px solid rgba(255,255,255,0.12)',
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {active && <span style={{ marginRight: 4 }}>✓</span>}
                      {item}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Selected count + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14, flexWrap: 'wrap', gap: 12 }}>
            <div style={{ fontSize: 13, color: 'rgba(245,237,227,0.45)' }}>
              {selected.length === 0
                ? 'Select at least 1 ingredient'
                : `${selected.length} ingredient${selected.length > 1 ? 's' : ''} selected`}
              {selected.length > 0 && (
                <button
                  onClick={() => { setSelected([]); setShowResults(false); }}
                  style={{ marginLeft: 12, color: '#D97706', background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, textDecoration: 'underline', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Clear all
                </button>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={findRecipes}
              disabled={selected.length === 0 || loading}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '12px 28px', borderRadius: 100,
                background: selected.length === 0 ? 'rgba(217,119,6,0.3)' : '#D97706',
                color: 'white', fontWeight: 700, fontSize: 15,
                border: 'none', cursor: selected.length === 0 ? 'not-allowed' : 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                transition: 'all 0.2s',
              }}
            >
              {loading ? <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> : <Sparkles size={16} />}
              {loading ? 'Finding recipes...' : 'Find My Recipe'}
            </motion.button>
          </div>
        </motion.div>

        {/* Results */}
        <div ref={resultsRef}>
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.5 }}
                style={{ marginTop: 32 }}
              >
                {results.length === 0 ? (
                  <div style={{ textAlign: 'center', color: 'rgba(245,237,227,0.5)', fontSize: 15, padding: '32px 0' }}>
                    No matches found. Try adding more ingredients.
                  </div>
                ) : (
                  <>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(245,237,227,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16, textAlign: 'center' }}>
                      <Sparkles size={12} style={{ display: 'inline', marginRight: 6, color: '#D97706' }} />
                      AI found {results.length} dishes for you
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                      {results.map((r, i) => (
                        <motion.div
                          key={r.slug}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Link href={`/recipes/${r.slug}`} style={{ textDecoration: 'none' }}>
                            <div style={{
                              background: 'rgba(255,255,255,0.07)',
                              backdropFilter: 'blur(12px)',
                              border: '1px solid rgba(255,255,255,0.12)',
                              borderRadius: 20,
                              overflow: 'hidden',
                              transition: 'all 0.2s',
                              cursor: 'pointer',
                            }}
                              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(217,119,6,0.5)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255,255,255,0.12)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                            >
                              <div style={{ position: 'relative', height: 160 }}>
                                <Image src={r.image} alt={r.title} fill style={{ objectFit: 'cover' }} sizes="320px" />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,8,4,0.7) 0%, transparent 60%)' }} />
                                <div style={{ position: 'absolute', top: 10, right: 10, background: '#D97706', borderRadius: 100, padding: '3px 10px', fontSize: 11, fontWeight: 700, color: '#fff' }}>
                                  {r.matchScore}% match
                                </div>
                              </div>
                              <div style={{ padding: '14px 16px 16px' }}>
                                <div style={{ fontSize: 11, color: 'rgba(217,119,6,0.8)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{r.subtitle}</div>
                                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 6, fontFamily: "'Playfair Display', serif" }}>{r.title}</div>
                                <div style={{ fontSize: 12, color: 'rgba(245,237,227,0.55)', lineHeight: 1.5 }}>{r.reason}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 10, color: '#D97706', fontSize: 12, fontWeight: 600 }}>
                                  Cook this recipe <ArrowRight size={12} />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Skip link */}
        <div style={{ textAlign: 'center', marginTop: 14 }}>
          <Link href="/recipes" style={{ fontSize: 13, color: 'rgba(245,237,227,0.35)', textDecoration: 'none' }}>
            Browse all recipes instead →
          </Link>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}