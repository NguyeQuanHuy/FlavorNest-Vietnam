'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X, Loader2, Search, Check } from 'lucide-react';

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

// -- Hinh minh hoa khi hover (thieu hinh -> hien emoji cua nhom) --
const INGREDIENT_IMAGES: Record<string, string> = {
  // Proteins
  'Pork': 'https://images.unsplash.com/photo-1752555535777-0aed7bc93f98?auto=format&fit=crop&w=400&h=400&q=80',
  'Chicken': 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=400&h=400&q=80',
  'Beef': 'https://images.unsplash.com/photo-1690983330536-3b0089d07cf9?auto=format&fit=crop&w=400&h=400&q=80',
  'Shrimp': 'https://images.unsplash.com/photo-1756364084889-9a8d9ece6112?auto=format&fit=crop&w=400&h=400&q=80',
  'Fish': 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=400&h=400&q=80',
  'Tofu': 'https://images.unsplash.com/photo-1722635940350-d1b2e5129379?auto=format&fit=crop&w=400&h=400&q=80',
  'Eggs': 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=400&h=400&q=80',
  'Crab': 'https://images.unsplash.com/photo-1536266740131-2aadb9f77705?auto=format&fit=crop&w=400&h=400&q=80',
  // Noodles & Rice
  'Rice': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&h=400&q=80',
  'Rice Noodles': '/images/ingredients/rice-noodles.jpg',
  'Egg Noodles': 'https://images.unsplash.com/photo-1633352615955-f0c99e8b7e5a?auto=format&fit=crop&w=400&h=400&q=80',
  'Vermicelli': 'https://images.unsplash.com/photo-1620641856311-a64e917104ef?auto=format&fit=crop&w=400&h=400&q=80',
  'Oyster Sauce': 'https://images.unsplash.com/photo-1737199391604-f0098d42ba7a?auto=format&fit=crop&w=400&h=400&q=80',
  'Morning Glory': 'https://images.unsplash.com/photo-1766375884263-016cd780fa1e?auto=format&fit=crop&w=400&h=400&q=80',
  'Galangal': '/images/ingredients/galangal.jpg',
  'Glass Noodles': 'https://images.unsplash.com/photo-1774717530911-2ceb99449f7a?auto=format&fit=crop&w=400&h=400&q=80',
  'Bread': 'https://images.unsplash.com/photo-1568471173242-461f0a730452?auto=format&fit=crop&w=400&h=400&q=80',
  // Vegetables
  'Bean Sprouts': '/images/ingredients/bean-sprouts.jpg',
  'Cabbage': 'https://images.unsplash.com/photo-1697346327617-c333613a349a?auto=format&fit=crop&w=400&h=400&q=80',
  'Eggplant': 'https://images.unsplash.com/photo-1683543122945-513029986574?auto=format&fit=crop&w=400&h=400&q=80',
  'Tomato': 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&w=400&h=400&q=80',
  'Green Onion': 'https://images.unsplash.com/photo-1654722346666-fc814e4457a5?auto=format&fit=crop&w=400&h=400&q=80',
  'Mushroom': 'https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=400&h=400&q=80',
  // Aromatics
  'Garlic': 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=400&h=400&q=80',
  'Shallots': 'https://images.unsplash.com/photo-1600807644626-fb3c8c8ba40d?auto=format&fit=crop&w=400&h=400&q=80',
  'Lemongrass': '/images/ingredients/lemongrass.jpg',
  'Ginger': '/images/ingredients/ginger.jpg',
  'Chilli': 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=400&h=400&q=80',
  // Pantry
  'Fish Sauce': '/images/ingredients/fish-sauce.jpg',
  'Soy Sauce': 'https://images.unsplash.com/photo-1499126167718-c87f5c1387e8?auto=format&fit=crop&w=400&h=400&q=80',
  'Coconut Milk': '/images/ingredients/coconut-milk.jpg',
  'Palm Sugar': 'https://images.unsplash.com/photo-1788238025855-55581a2ed354?auto=format&fit=crop&w=400&h=400&q=80',
};

interface RecipeSuggestion {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  reason: string;
  matchScore: number;
}


const POPULAR = [
  { label: 'Phở', q: 'pho' },
  { label: 'Bánh mì', q: 'banh mi' },
  { label: 'Bún chả', q: 'bun cha' },
  { label: 'Cơm tấm', q: 'com tam' },
];
const serif = { fontFamily: "'Playfair Display', Georgia, serif" };
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function IngredientFinderHero() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [results, setResults] = useState<RecipeSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [preload, setPreload] = useState(false);
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    const t = setTimeout(() => setPreload(true), 1200);
    return () => clearTimeout(t);
  }, []);

  function toggleIngredient(item: string) {
    setSelected(prev => (prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]));
    setShowResults(false);
  }

  function search(q: string) {
    const v = q.trim();
    router.push(v ? `/recipes?search=${encodeURIComponent(v)}` : '/recipes');
  }

  async function findRecipes() {
    if (selected.length === 0) return;
    setLoading(true);
    setShowResults(false);
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

  const group = INGREDIENT_GROUPS[tab];
  const countIn = (g: (typeof INGREDIENT_GROUPS)[number]) => g.items.filter(i => selected.includes(i)).length;

  return (
    <section className="relative overflow-hidden" aria-label="Find a Vietnamese recipe" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/hero-bg.jpg" alt="" fill priority fetchPriority="high" quality={80} sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(28,16,9,0.78) 0%, rgba(28,16,9,0.88) 45%, rgba(28,16,9,0.97) 100%)' }} />

      <div className="relative mx-auto w-full max-w-3xl px-5 pb-14 pt-[92px] sm:px-6 sm:pb-20 sm:pt-36">

        {/* ── Headline ── */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="text-center">
          <p className="mb-3 text-[11px] font-bold uppercase sm:mb-4" style={{ color: '#F59E0B', letterSpacing: '0.2em' }}>
            Authentic Vietnamese recipes
          </p>
          <h1 className="font-bold leading-[1.05] text-white" style={{ ...serif, fontSize: 'clamp(2.1rem, 6.4vw, 4rem)' }}>
            What will you <em style={{ color: '#F59E0B' }}>cook today?</em>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed sm:mt-4 sm:text-[17px]" style={{ color: 'rgba(245,237,227,0.72)' }}>
            Search a dish — or tell us what is in your fridge.
          </p>
        </motion.div>

        {/* ── Search ── */}
        <motion.form
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          onSubmit={e => { e.preventDefault(); search(query); }}
          role="search"
          className="relative mx-auto mt-7 max-w-xl"
        >
          <label htmlFor="home-search" className="sr-only">Search recipes</label>
          <Search size={19} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2" style={{ color: '#B8A08A' }} aria-hidden />
          <input
            id="home-search"
            type="search"
            enterKeyHint="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Phở, bánh mì, chicken…"
            className="h-14 w-full rounded-full border-0 bg-white pl-[52px] pr-[120px] text-[16px] text-[#2D1A0E] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] outline-none placeholder:text-[#B8A08A] focus:ring-4 focus:ring-[#D97706]/40 [&::-webkit-search-cancel-button]:hidden"
          />
          <button type="submit" className="absolute right-1.5 top-1/2 h-11 -translate-y-1/2 rounded-full px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B45309]" style={{ background: '#D97706' }}>
            Search
          </button>
        </motion.form>

        {/* Popular */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="-mx-5 mt-4 flex items-center gap-2 overflow-x-auto px-5 text-[13px] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0 [&::-webkit-scrollbar]:hidden">
          <span className="flex-shrink-0" style={{ color: 'rgba(245,237,227,0.5)' }}>Popular:</span>
          {POPULAR.map(p => (
            <button
              key={p.q}
              onClick={() => search(p.q)}
              className="flex-shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 font-medium transition-colors hover:bg-white/15"
              style={{ color: '#F5EDE3', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              {p.label}
            </button>
          ))}
        </motion.div>

        {/* ── Ingredient finder card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mt-10 rounded-[28px] p-4 sm:mt-12 sm:p-6"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)' }}
        >
          <div className="mb-4 flex items-baseline justify-between gap-3 px-1">
            <h2 className="text-[19px] font-bold text-white sm:text-[21px]" style={serif}>
              Cook with what you have
            </h2>
            <span className="hidden flex-shrink-0 text-[12px] sm:inline" style={{ color: 'rgba(245,237,227,0.5)' }}>Pick 1 or more</span>
          </div>

          {/* Category tabs */}
          <div role="tablist" aria-label="Ingredient groups" className="-mx-4 mb-4 flex gap-1.5 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
            {INGREDIENT_GROUPS.map((g, i) => {
              const on = i === tab;
              const n = countIn(g);
              return (
                <button
                  key={g.label}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setTab(i)}
                  className="relative flex flex-shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                  style={{ color: on ? '#2D1A0E' : 'rgba(245,237,227,0.75)' }}
                >
                  {on && <motion.span layoutId="finder-tab" className="absolute inset-0 rounded-full bg-[#F5EDE3]" transition={{ type: 'spring', stiffness: 420, damping: 36 }} />}
                  <span className="relative" aria-hidden>{g.emoji}</span>
                  <span className="relative">{g.label}</span>
                  {n > 0 && (
                    <span className="relative flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-bold text-white" style={{ background: '#D97706' }}>{n}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Chips of the active group */}
          <AnimatePresence mode="wait">
            <motion.div
              key={group.label}
              role="tabpanel"
              initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.18 }}
              className="flex min-h-[92px] flex-wrap content-start gap-2"
            >
              {group.items.map(item => {
                const active = selected.includes(item);
                return (
                  <span
                    key={item}
                    onPointerEnter={e => { if (e.pointerType === 'mouse') setHovered(item); }}
                    onPointerLeave={() => setHovered(h => (h === item ? null : h))}
                    className="relative inline-flex"
                    style={{ zIndex: hovered === item ? 30 : 'auto' }}
                  >
                    <motion.button
                      whileTap={{ scale: 0.94 }}
                      onClick={() => toggleIngredient(item)}
                      aria-pressed={active}
                      className="flex h-10 items-center gap-1.5 rounded-full px-4 text-[14px] font-medium transition-colors"
                      style={active
                        ? { background: '#D97706', color: '#fff', border: '1px solid #D97706' }
                        : { background: 'rgba(255,255,255,0.08)', color: 'rgba(245,237,227,0.88)', border: '1px solid rgba(255,255,255,0.14)' }}
                    >
                      {active && <Check size={14} strokeWidth={3} />}
                      {item}
                    </motion.button>
                    {/* desktop hover preview */}
                    <AnimatePresence>
                      {hovered === item && (
                        <motion.span
                          aria-hidden
                          initial={{ opacity: 0, y: 8, x: '-50%', scale: 0.92 }}
                          animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
                          exit={{ opacity: 0, y: 6, x: '-50%', scale: 0.95 }}
                          transition={{ duration: 0.18, ease: EASE }}
                          className="pointer-events-none absolute left-1/2 block w-[132px] rounded-[18px] p-1.5"
                          style={{ bottom: 'calc(100% + 10px)', background: '#2D1A0E', border: '1px solid rgba(217,119,6,0.45)', boxShadow: '0 16px 40px rgba(0,0,0,0.5)' }}
                        >
                          <span className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl text-[40px]" style={{ background: 'rgba(245,237,227,0.06)' }}>
                            {(!INGREDIENT_IMAGES[item] || failed[item]) && group.emoji}
                            {INGREDIENT_IMAGES[item] && !failed[item] && (
                              <Image src={INGREDIENT_IMAGES[item]} alt={item} fill sizes="128px" className="object-cover" onError={() => setFailed(f => ({ ...f, [item]: true }))} />
                            )}
                          </span>
                          <span className="block px-0.5 pb-0.5 pt-1.5 text-center text-[12px] font-semibold" style={{ color: '#F5EDE3' }}>{item}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Selected tray + CTA */}
          <div className="mt-5 border-t pt-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <AnimatePresence initial={false}>
              {selected.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                  className="mb-3 flex flex-wrap items-center gap-1.5 overflow-hidden"
                >
                  {selected.map(s => (
                    <button
                      key={s}
                      onClick={() => toggleIngredient(s)}
                      aria-label={`Remove ${s}`}
                      className="flex items-center gap-1 rounded-full py-1 pl-3 pr-2 text-[12.5px] font-medium"
                      style={{ background: 'rgba(217,119,6,0.18)', color: '#FCD9A5', border: '1px solid rgba(217,119,6,0.35)' }}
                    >
                      {s} <X size={13} />
                    </button>
                  ))}
                  <button onClick={() => { setSelected([]); setShowResults(false); }} className="ml-1 text-[12.5px] underline" style={{ color: 'rgba(245,237,227,0.55)' }}>
                    Clear
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileTap={selected.length ? { scale: 0.98 } : undefined}
              onClick={findRecipes}
              disabled={selected.length === 0 || loading}
              className="flex h-[52px] w-full items-center justify-center gap-2 rounded-full text-[15px] font-semibold transition-colors"
              style={selected.length === 0
                ? { background: 'rgba(255,255,255,0.08)', color: 'rgba(245,237,227,0.45)', cursor: 'not-allowed' }
                : { background: '#D97706', color: '#fff', boxShadow: '0 12px 28px -12px rgba(217,119,6,0.8)' }}
            >
              {loading ? <Loader2 size={17} className="animate-spin" /> : <Sparkles size={17} />}
              {loading
                ? 'Finding dishes…'
                : selected.length === 0
                  ? 'Select ingredients to start'
                  : `Find dishes with ${selected.length} ingredient${selected.length > 1 ? 's' : ''}`}
            </motion.button>
          </div>
        </motion.div>

        {/* ── Results ── */}
        <div ref={resultsRef} className="scroll-mt-24">
          <AnimatePresence>
            {showResults && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.45 }} className="mt-8">
                {results.length === 0 ? (
                  <p className="py-8 text-center text-[15px]" style={{ color: 'rgba(245,237,227,0.6)' }}>No matches yet — try adding another ingredient.</p>
                ) : (
                  <>
                    <p className="mb-4 flex items-center justify-center gap-1.5 text-[12px] font-semibold uppercase" style={{ color: 'rgba(245,237,227,0.55)', letterSpacing: '0.1em' }}>
                      <Sparkles size={13} color="#F59E0B" /> {results.length} dishes for you
                    </p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {results.map((r, i) => (
                        <motion.div key={r.slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                          <Link
                            href={`/recipes/${r.slug}`}
                            className="group flex gap-3 overflow-hidden rounded-2xl p-2.5 transition-colors hover:bg-white/10"
                            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none' }}
                          >
                            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl">
                              <Image src={r.image} alt={r.title} fill sizes="96px" className="object-cover" />
                              <span className="absolute left-1.5 top-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold text-white" style={{ background: '#D97706' }}>{r.matchScore}%</span>
                            </div>
                            <div className="flex min-w-0 flex-col justify-center pr-1">
                              <p className="truncate text-[12px] italic" style={{ ...serif, color: '#F59E0B' }}>{r.subtitle}</p>
                              <p className="line-clamp-1 text-[16px] font-bold text-white" style={serif}>{r.title}</p>
                              <p className="mt-0.5 line-clamp-2 text-[12.5px] leading-snug" style={{ color: 'rgba(245,237,227,0.6)' }}>{r.reason}</p>
                              <span className="mt-1.5 flex items-center gap-1 text-[12px] font-semibold" style={{ color: '#F59E0B' }}>
                                Cook this <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                              </span>
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
      </div>

      {preload && (
        <div aria-hidden style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}>
          {Object.entries(INGREDIENT_IMAGES).map(([name, src]) => (
            <span key={name} style={{ position: 'relative', display: 'block', width: 128, height: 128 }}>
              <Image src={src} alt="" fill sizes="128px" loading="eager" onError={() => setFailed(f => ({ ...f, [name]: true }))} />
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
