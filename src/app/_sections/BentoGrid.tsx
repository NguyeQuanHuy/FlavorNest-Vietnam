'use client'
// ─────────────────────────────────────────────────────────────────────────────
//  app/_sections/BentoGrid.tsx
//  Replaces FeaturedRecipes + KitchenStories on homepage
//  Layout: 5 recipe cards + 3 story cards in a bento grid
// ─────────────────────────────────────────────────────────────────────────────

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Recipe data ───────────────────────────────────────────────────────────────
interface RecipeItem {
  slug: string
  title: string
  subtitle: string
  image: string
  tag: string
  tagColor: string
  time: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
}

const DIFF_COLOR = { Easy: '#10b981', Medium: '#D97706', Hard: '#ef4444' }

const FALLBACK_RECIPES: RecipeItem[] = [
  {
    slug: 'pho-bo-ha-noi',
    title: 'Hanoi Beef Pho',
    subtitle: 'Phở bò Hà Nội',
    image: '/images/recipes/pho-bo-ha-noi.jpg',
    tag: 'Hanoi Icon',
    tagColor: '#D97706',
    time: '6 hrs',
    difficulty: 'Hard',
  },
  {
    slug: 'banh-mi',
    title: 'Vietnamese Baguette',
    subtitle: 'Bánh mì',
    image: '/images/recipes/banh-mi.png',
    tag: 'Street Food',
    tagColor: '#166534',
    time: '10 min',
    difficulty: 'Easy',
  },
  {
    slug: 'bun-bo-hue',
    title: 'Hue Spicy Noodle Soup',
    subtitle: 'Bún bò Huế',
    image: '/images/recipes/bun-bo-hue.webp',
    tag: 'Hue Classic',
    tagColor: '#7C3AED',
    time: '45 min',
    difficulty: 'Medium',
  },
  {
    slug: 'ca-phe-trung',
    title: 'Vietnamese Egg Coffee',
    subtitle: 'Cà phê trứng',
    image: '/images/recipes/ca-phe-trung.jpg',
    tag: 'New',
    tagColor: '#D97706',
    time: '15 min',
    difficulty: 'Medium',
  },
  {
    slug: 'bun-thit-nuong',
    title: 'Grilled Pork Vermicelli',
    subtitle: 'Bún thịt nướng',
    image: '/images/recipes/bun-thit-nuong.jpg',
    tag: 'Popular',
    tagColor: '#059669',
    time: '35 min',
    difficulty: 'Easy',
  },
  {
    slug: 'banh-xeo',
    title: 'Sizzling Crepe',
    subtitle: 'Bánh xèo',
    image: '/images/recipes/banh-xeo-mien-nam.jpg',
    tag: 'Saigon',
    tagColor: '#EA580C',
    time: '40 min',
    difficulty: 'Medium',
  },
  {
    slug: 'goi-cuon',
    title: 'Fresh Spring Rolls',
    subtitle: 'Gỏi cuốn',
    image: '/images/recipes/goi-cuon.jpg',
    tag: 'Healthy',
    tagColor: '#059669',
    time: '20 min',
    difficulty: 'Easy',
  },
  {
    slug: 'che-buoi',
    title: 'Pomelo Sweet Soup',
    subtitle: 'Chè bưởi',
    image: '/images/recipes/che-buoi-mien-nam.jpg',
    tag: 'Dessert',
    tagColor: '#BE185D',
    time: '50 min',
    difficulty: 'Medium',
  },
]

// ── Story data ─────────────────────────────────────────────────────────────────
interface StoryItem {
  slug: string
  category: string
  categoryColor: string
  title: string
  excerpt: string
  image: string
  readTime: string
}

const FALLBACK_STORIES: StoryItem[] = [
  {
    slug: 'symphony-of-hanois-dawn',
    category: 'Heritage',
    categoryColor: '#D97706',
    title: "The Symphony of Hanoi's Dawn",
    excerpt: "A broth ten hours in the making, poured in thirty seconds. The story behind Vietnam's most iconic bowl.",
    image: '/images/recipes/pho-bo-ha-noi.jpg',
    readTime: '6 min read',
  },
  {
    slug: 'secrets-of-the-south-banh-xeo',
    category: 'Street Food',
    categoryColor: '#166534',
    title: 'Secrets of the South: Bánh Xèo',
    excerpt: `"Xèo" — that violent, joyful sizzle as rice batter meets a white-hot pan. The South's crispiest secret.`,
    image: '/images/recipes/banh-xeo-mien-nam.jpg',
    readTime: '5 min read',
  },
  {
    slug: 'the-art-of-banh-mi',
    category: 'Fusion',
    categoryColor: '#7C3AED',
    title: 'The Art of Bánh Mì',
    excerpt: 'Vietnamese hands transformed the baguette into something unrecognisable and entirely their own.',
    image: '/images/recipes/banh-mi.png',
    readTime: '4 min read',
  },
]

// ── Animation variants ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

// ── Sub-components ─────────────────────────────────────────────────────────────

/** Large recipe hero card — top-left, spans 2 rows */
function RecipeHero({ r }: { r: RecipeItem }) {
  return (
    <motion.div {...fadeUp(0)} style={{ gridColumn: 'span 5', gridRow: 'span 2' }}>
      <Link href={`/recipes/${r.slug}`}
        style={{ display: 'block', position: 'relative', height: '100%', minHeight: 360, borderRadius: 20, overflow: 'hidden', textDecoration: 'none' }}
        className="bento-card">
        <Image src={r.image} alt={r.title} fill sizes="(max-width:768px) 100vw, 42vw"
          style={{ objectFit: 'cover' }} quality={85} className="bento-img" />
        {/* gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,6,2,0.88) 0%, rgba(0,0,0,0.15) 60%)' }} />
        {/* tag */}
        <div style={{ position: 'absolute', top: 16, left: 16, background: r.tagColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '5px 13px', borderRadius: 100 }}>{r.tag}</div>
        {/* difficulty */}
        <div style={{ position: 'absolute', top: 16, right: 16, background: DIFF_COLOR[r.difficulty], color: 'white', fontSize: 10, fontWeight: 700, padding: '5px 11px', borderRadius: 100 }}>{r.difficulty}</div>
        {/* bottom info */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 20px 22px' }}>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, fontWeight: 500, margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "'Manrope', 'DM Sans', sans-serif" }}>{r.subtitle}</p>
          <h3 style={{ color: 'white', fontSize: 26, fontWeight: 700, margin: '0 0 8px', lineHeight: 1.15, fontFamily: "'Manrope', sans-serif" }}>{r.title}</h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, margin: 0, fontFamily: "'Manrope', 'DM Sans', sans-serif" }}>{r.time}</p>
        </div>
      </Link>
    </motion.div>
  )
}

/** Small recipe card */
function RecipeSmall({ r, delay, style }: { r: RecipeItem; delay: number; style?: React.CSSProperties }) {
  return (
    <motion.div {...fadeUp(delay)} style={style}>
      <Link href={`/recipes/${r.slug}`}
        style={{ display: 'block', position: 'relative', height: '100%', minHeight: 168, borderRadius: 16, overflow: 'hidden', textDecoration: 'none' }}
        className="bento-card">
        <Image src={r.image} alt={r.title} fill sizes="(max-width:768px) 50vw, 20vw"
          style={{ objectFit: 'cover' }} quality={80} className="bento-img" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,6,2,0.82) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', top: 10, left: 10, background: r.tagColor, color: 'white', fontSize: 9, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: 100 }}>{r.tag}</div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px 14px' }}>
          <h3 style={{ color: 'white', fontSize: 14, fontWeight: 700, margin: '0 0 3px', lineHeight: 1.2, fontFamily: "'Manrope', sans-serif" }}>{r.title}</h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, margin: 0, fontFamily: "'Manrope', 'DM Sans', sans-serif" }}>{r.time} · {r.difficulty}</p>
        </div>
      </Link>
    </motion.div>
  )
}

/** Story card — wide horizontal */
function StoryWide({ s, delay, style }: { s: StoryItem; delay: number; style?: React.CSSProperties }) {
  return (
    <motion.div {...fadeUp(delay)} style={style}>
      <Link href={`/stories/${s.slug}`}
        style={{ display: 'flex', gap: 0, height: '100%', borderRadius: 16, overflow: 'hidden', textDecoration: 'none', background: '#2D1A0E' }}
        className="bento-card story-card">
        {/* image strip */}
        <div style={{ position: 'relative', width: 120, flexShrink: 0 }}>
          <Image src={s.image} alt={s.title} fill sizes="120px"
            style={{ objectFit: 'cover' }} quality={75} className="bento-img" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, #2D1A0E 100%)' }} />
        </div>
        {/* text */}
        <div style={{ flex: 1, padding: '18px 20px 18px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
          <span style={{ fontSize: 10, fontWeight: 800, color: s.categoryColor, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Manrope', 'DM Sans', sans-serif" }}>{s.category}</span>
          <h3 style={{ color: '#F5EDE3', fontSize: 15, fontWeight: 700, margin: 0, lineHeight: 1.3, fontFamily: "'Manrope', sans-serif" }}>{s.title}</h3>
          <p style={{ color: 'rgba(245,237,227,0.45)', fontSize: 12, margin: 0, lineHeight: 1.5, fontFamily: "'Manrope', 'DM Sans', sans-serif", display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{s.excerpt}</p>
          <p style={{ color: s.categoryColor, fontSize: 11, fontWeight: 700, margin: 0, fontFamily: "'Manrope', 'DM Sans', sans-serif" }}>{s.readTime} →</p>
        </div>
      </Link>
    </motion.div>
  )
}

// ── Main export ────────────────────────────────────────────────────────────────
export default function BentoGrid({
  recipes: recipesProp,
  stories: storiesProp,
}: {
  recipes?: RecipeItem[]
  stories?: StoryItem[]
}) {
  const RECIPES = recipesProp && recipesProp.length >= 8 ? recipesProp.slice(0, 8) : FALLBACK_RECIPES
  const STORIES = storiesProp && storiesProp.length >= 3 ? storiesProp.slice(0, 3) : FALLBACK_STORIES

  const [activeTab, setActiveTab] = useState<'recipes' | 'stories' | 'trending'>('recipes')

  const TABS = [
    { id: 'recipes' as const, label: 'Recipes', count: 8 },
    { id: 'stories' as const, label: 'Stories', count: 3 },
    { id: 'trending' as const, label: 'Trending', count: 6 },
  ]

  return (
    <section style={{ background: '#FAFAF7', padding: '80px 24px 96px', fontFamily: "'DM Sans', system-ui, sans-serif" }}
      aria-label="Featured recipes and stories">

      <style>{`
        .bento-card { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease; }
        .bento-card:hover { transform: translateY(-4px); box-shadow: 0 20px 56px rgba(45,26,14,0.22); }
        .bento-card:hover .bento-img { transform: scale(1.05) !important; }
        .bento-img { transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94) !important; }

        /* Story card — float lift + deeper shadow */
        .story-card {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s ease,
                      background 0.3s ease !important;
        }
        .story-card:hover {
          transform: translateY(-6px) scale(1.015) !important;
          box-shadow: 0 24px 60px rgba(13,6,2,0.45),
                      0 0 0 1px rgba(217,119,6,0.15) !important;
          background: #34200F !important;
        }
        .story-card:hover .bento-img { transform: scale(1.08) !important; }
        @media (max-width: 768px) {
          .bento-grid > div,
          .bento-grid > [class*="motion"] {
            grid-column: span 12 !important;
            grid-row: span 1 !important;
          }
          .bento-grid .bento-hero {
            grid-column: span 12 !important;
            grid-row: span 1 !important;
            min-height: 280px !important;
          }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .bento-grid > div:not(.bento-hero) {
            grid-column: span 6 !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* ── Section header ── */}
        <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{ width: 28, height: 1.5, background: '#D97706' }} />
              <span style={{ color: '#D97706', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Editor's Picks</span>
            </div>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#2D1A0E', margin: 0, lineHeight: 1.05 }}>
              Featured <em style={{ color: '#D97706', fontStyle: 'italic' }}>Recipes</em> &amp; Stories
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Link href="/recipes" style={{ fontSize: 13, fontWeight: 600, color: '#4B2E1A', border: '1.5px solid rgba(75,46,26,0.18)', borderRadius: 100, padding: '9px 20px', textDecoration: 'none', transition: 'all 0.2s' }}>All Recipes →</Link>
            <Link href="/stories" style={{ fontSize: 13, fontWeight: 600, color: 'white', background: '#D97706', border: '1.5px solid #D97706', borderRadius: 100, padding: '9px 20px', textDecoration: 'none', transition: 'all 0.2s' }}>All Stories →</Link>
          </div>
        </motion.div>

        {/* ── Tab bar ── */}
        <div role="tablist" style={{ display: 'flex', gap: 8, marginBottom: 32, overflowX: 'auto', scrollbarWidth: 'none' }}>
          {TABS.map(tab => {
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  position: 'relative',
                  padding: '10px 20px',
                  fontSize: 13,
                  fontWeight: 700,
                  borderRadius: 100,
                  border: 'none',
                  background: isActive ? 'transparent' : 'white',
                  color: isActive ? 'white' : '#4B2E1A',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  fontFamily: 'inherit',
                  boxShadow: isActive ? 'none' : '0 1px 3px rgba(75,46,26,0.08)',
                  transition: 'color 0.25s',
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="bento-tab-pill"
                    style={{ position: 'absolute', inset: 0, borderRadius: 100, background: 'linear-gradient(135deg, #D97706, #B45309)', boxShadow: '0 4px 16px rgba(217,119,6,0.35)', zIndex: 0 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {tab.label}
                  <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 7px', borderRadius: 100, background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(217,119,6,0.1)', color: isActive ? 'white' : '#D97706' }}>
                    {tab.count}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        {/* ── Bento grid (animated by tab) ── */}
        <AnimatePresence mode="wait">
          {activeTab === 'recipes' && (
            <motion.div
              key="recipes"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bento-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'auto', gap: 14 }}
            >
              <div className="bento-hero" style={{ gridColumn: 'span 6', gridRow: 'span 2' }}>
                <RecipeHero r={RECIPES[0]} />
              </div>
              <RecipeSmall r={RECIPES[1]} delay={0.06} style={{ gridColumn: 'span 3', gridRow: 'span 1' }} />
              <RecipeSmall r={RECIPES[2]} delay={0.09} style={{ gridColumn: 'span 3', gridRow: 'span 1' }} />
              <RecipeSmall r={RECIPES[3]} delay={0.12} style={{ gridColumn: 'span 3', gridRow: 'span 1' }} />
              <RecipeSmall r={RECIPES[4]} delay={0.15} style={{ gridColumn: 'span 3', gridRow: 'span 1' }} />
              <RecipeSmall r={RECIPES[5]} delay={0.18} style={{ gridColumn: 'span 4', gridRow: 'span 1' }} />
              <RecipeSmall r={RECIPES[6]} delay={0.21} style={{ gridColumn: 'span 4', gridRow: 'span 1' }} />
              <RecipeSmall r={RECIPES[7]} delay={0.24} style={{ gridColumn: 'span 4', gridRow: 'span 1' }} />
            </motion.div>
          )}

          {activeTab === 'stories' && (
            <motion.div
              key="stories"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bento-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'auto', gap: 14 }}
            >
              {/* Hero story (8 cols × 2 rows) */}
              <motion.div {...fadeUp(0)} className="bento-hero" style={{ gridColumn: 'span 8', gridRow: 'span 2' }}>
                <Link href={`/stories/${STORIES[0].slug}`}
                  style={{ display: 'block', position: 'relative', height: '100%', minHeight: 420, borderRadius: 20, overflow: 'hidden', textDecoration: 'none' }}
                  className="bento-card">
                  <Image src={STORIES[0].image} alt={STORIES[0].title} fill sizes="(max-width:768px) 100vw, 65vw"
                    style={{ objectFit: 'cover' }} quality={88} className="bento-img" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,6,2,0.92) 0%, rgba(0,0,0,0.2) 55%)' }} />
                  <div style={{ position: 'absolute', top: 20, left: 20, background: STORIES[0].categoryColor, color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100 }}>{STORIES[0].category}</div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 28px 28px' }}>
                    <h3 style={{ color: 'white', fontSize: 32, fontWeight: 700, margin: '0 0 12px', lineHeight: 1.1, fontFamily: "'Manrope', sans-serif", maxWidth: 600 }}>{STORIES[0].title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, margin: '0 0 14px', lineHeight: 1.55, maxWidth: 560, fontFamily: "'Manrope', 'DM Sans', sans-serif" }}>{STORIES[0].excerpt}</p>
                    <p style={{ color: STORIES[0].categoryColor, fontSize: 12, fontWeight: 700, margin: 0, fontFamily: "'Manrope', 'DM Sans', sans-serif", letterSpacing: '0.05em' }}>{STORIES[0].readTime} →</p>
                  </div>
                </Link>
              </motion.div>

              {/* 2 stories side-by-side, stacked vertically */}
              <StoryWide s={STORIES[1]} delay={0.1} style={{ gridColumn: 'span 4', gridRow: 'span 1' }} />
              <StoryWide s={STORIES[2]} delay={0.15} style={{ gridColumn: 'span 4', gridRow: 'span 1' }} />
            </motion.div>
          )}

          {activeTab === 'trending' && (
            <motion.div
              key="trending"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bento-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 14 }}
            >
              {RECIPES.slice(0, 6).map((r, i) => (
                <div key={r.slug} className="bento-small" style={{ gridColumn: 'span 4', gridRow: 'span 1' }}>
                  <motion.div {...fadeUp(i * 0.06)} style={{ position: 'relative', height: '100%' }}>
                    <Link href={`/recipes/${r.slug}`}
                      style={{ display: 'block', position: 'relative', height: '100%', minHeight: 220, borderRadius: 18, overflow: 'hidden', textDecoration: 'none' }}
                      className="bento-card">
                      <Image src={r.image} alt={r.title} fill sizes="(max-width:768px) 50vw, 30vw"
                        style={{ objectFit: 'cover' }} quality={82} className="bento-img" />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,6,2,0.85) 0%, transparent 55%)' }} />

                      {/* Trending rank badge */}
                      <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(255,255,255,0.95)', color: '#D97706', fontSize: 11, fontWeight: 800, padding: '5px 11px', borderRadius: 100, display: 'flex', alignItems: 'center', gap: 5 }}>
                        <span style={{ fontSize: 13 }}>🔥</span> #{i + 1}
                      </div>

                      <div style={{ position: 'absolute', top: 12, right: 12, background: r.tagColor, color: 'white', fontSize: 9, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 100 }}>{r.tag}</div>

                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 16px' }}>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "'Manrope', 'DM Sans', sans-serif" }}>{r.subtitle}</p>
                        <h3 style={{ color: 'white', fontSize: 17, fontWeight: 700, margin: '0 0 4px', lineHeight: 1.2, fontFamily: "'Manrope', sans-serif" }}>{r.title}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, margin: 0, fontFamily: "'Manrope', 'DM Sans', sans-serif" }}>{r.time} · {r.difficulty}</p>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
