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
import { ArrowRight, Clock } from 'lucide-react'

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

// ── Shared ─────────────────────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay: i * 0.05, ease: EASE },
})
const serif = { fontFamily: "'Playfair Display', Georgia, serif" }
const cardBase =
  'group relative block h-full overflow-hidden rounded-2xl outline-none transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_22px_48px_-20px_rgba(45,26,14,0.45)] focus-visible:ring-2 focus-visible:ring-[#D97706] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5EDE3]'
const imgZoom = 'object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]'
const Shade = ({ strong = false }: { strong?: boolean }) => (
  <div
    aria-hidden
    className="absolute inset-0"
    style={{ background: `linear-gradient(to top, rgba(20,11,5,${strong ? 0.88 : 0.8}) 0%, rgba(20,11,5,0.25) ${strong ? 50 : 45}%, transparent 75%)` }}
  />
)
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span
    className="absolute left-3.5 top-3.5 rounded-full px-3 py-1 text-[10.5px] font-semibold uppercase text-white backdrop-blur-md"
    style={{ background: 'rgba(20,11,5,0.38)', letterSpacing: '0.08em', border: '1px solid rgba(255,255,255,0.18)' }}
  >
    {children}
  </span>
)

// ── Recipe cards ───────────────────────────────────────────────────────────────
function RecipeCard({ r, big = false, i }: { r: RecipeItem; big?: boolean; i: number }) {
  return (
    <motion.div {...reveal(i)} className={big ? 'col-span-2 lg:col-span-6 lg:row-span-2' : 'col-span-1 lg:col-span-3'}>
      <Link href={`/recipes/${r.slug}`} className={cardBase} style={{ textDecoration: 'none', background: '#EFE7DC' }}>
        <div className={big ? 'relative h-full min-h-[340px] lg:min-h-[460px]' : 'relative aspect-[4/5] h-full sm:aspect-auto sm:min-h-[220px]'}>
          <Image src={r.image} alt={r.title} fill sizes={big ? '(max-width:1024px) 100vw, 600px' : '(max-width:1024px) 50vw, 300px'} quality={82} className={imgZoom} />
          <Shade strong={big} />
          <Pill>{r.tag}</Pill>
          <div className={`absolute inset-x-0 bottom-0 ${big ? 'p-6 sm:p-8' : 'p-4'}`}>
            <p className="mb-1 truncate text-[12px] italic" style={{ ...serif, color: 'rgba(245,237,227,0.75)' }}>{r.subtitle}</p>
            <h3 className={`font-bold leading-tight text-white ${big ? 'text-[28px] sm:text-[34px]' : 'line-clamp-2 text-[17px]'}`} style={serif}>
              {r.title}
            </h3>
            <p className={`flex items-center gap-1.5 whitespace-nowrap ${big ? 'mt-3 text-[13px]' : 'mt-1.5 text-[12px]'}`} style={{ color: 'rgba(245,237,227,0.7)' }}>
              <Clock size={big ? 14 : 12} aria-hidden /> {r.time}
              <span aria-hidden>·</span> {r.difficulty}
            </p>
            {big && (
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold transition-colors group-hover:bg-[#D97706] group-hover:text-white" style={{ color: '#2D1A0E' }}>
                Cook this <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ── Story cards ────────────────────────────────────────────────────────────────
function StoryHero({ s }: { s: StoryItem }) {
  return (
    <motion.div {...reveal(0)} className="lg:col-span-7 lg:row-span-2">
      <Link href={`/stories/${s.slug}`} className={cardBase} style={{ textDecoration: 'none', background: '#EFE7DC' }}>
        <div className="relative h-full min-h-[380px] lg:min-h-[520px]">
          <Image src={s.image} alt={s.title} fill sizes="(max-width:1024px) 100vw, 700px" quality={85} className={imgZoom} />
          <Shade strong />
          <Pill>{s.category}</Pill>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
            <h3 className="max-w-xl text-[28px] font-bold leading-[1.1] text-white sm:text-[38px]" style={serif}>{s.title}</h3>
            <p className="mt-3 line-clamp-2 max-w-lg text-[15px] leading-relaxed" style={{ color: 'rgba(245,237,227,0.78)' }}>{s.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-white">
              Read the story · {s.readTime}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function StorySide({ s, i }: { s: StoryItem; i: number }) {
  return (
    <motion.div {...reveal(i)} className="lg:col-span-5">
      <Link
        href={`/stories/${s.slug}`}
        className="group flex h-full gap-5 rounded-2xl border border-[rgba(75,46,26,0.08)] bg-white p-3 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_40px_-20px_rgba(45,26,14,0.4)] focus-visible:ring-2 focus-visible:ring-[#D97706]"
        style={{ textDecoration: 'none' }}
      >
        <div className="relative min-h-[140px] w-[38%] min-w-[120px] flex-shrink-0 overflow-hidden rounded-xl" style={{ background: '#EFE7DC' }}>
          <Image src={s.image} alt={s.title} fill sizes="200px" quality={75} className={imgZoom} />
        </div>
        <div className="flex min-w-0 flex-col justify-center py-3 pr-3">
          <span className="text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.1em' }}>{s.category}</span>
          <h3 className="mt-1.5 line-clamp-2 text-[19px] font-bold leading-snug transition-colors group-hover:text-[#B45309]" style={{ ...serif, color: '#2D1A0E' }}>{s.title}</h3>
          <p className="mt-1.5 line-clamp-2 text-[13.5px] leading-relaxed" style={{ color: 'rgba(75,46,26,0.6)' }}>{s.excerpt}</p>
          <span className="mt-3 text-[12px] font-medium" style={{ color: 'rgba(75,46,26,0.5)' }}>{s.readTime}</span>
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

  const [tab, setTab] = useState<'recipes' | 'stories'>('recipes')
  const TABS = [
    { id: 'recipes' as const, label: 'Recipes' },
    { id: 'stories' as const, label: 'Stories' },
  ]

  return (
    <section aria-labelledby="featured-heading" className="px-5 py-20 sm:px-6 lg:py-28" style={{ background: '#F5EDE3', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <div className="mx-auto max-w-[1200px]">

        {/* ── Header ── */}
        <motion.div {...reveal(0)} className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-8" style={{ background: '#D97706' }} />
              <span className="text-[11px] font-bold uppercase" style={{ color: '#D97706', letterSpacing: '0.18em' }}>Editor&apos;s picks</span>
            </div>
            <h2 id="featured-heading" className="font-bold leading-[1.04]" style={{ ...serif, fontSize: 'clamp(2.1rem, 4.6vw, 3.4rem)', color: '#2D1A0E' }}>
              Cooked, tested &amp; <em style={{ color: '#D97706' }}>loved</em>
            </h2>
          </div>

          {/* Segmented control */}
          <div role="tablist" aria-label="Show" className="flex rounded-full bg-white p-1 shadow-[0_2px_10px_-4px_rgba(75,46,26,0.2)]">
            {TABS.map(t => {
              const on = t.id === tab
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setTab(t.id)}
                  className="relative rounded-full px-6 py-2.5 text-[14px] font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#D97706]"
                  style={{ color: on ? '#fff' : '#4B2E1A' }}
                >
                  {on && (
                    <motion.span layoutId="bento-seg" className="absolute inset-0 rounded-full" style={{ background: '#2D1A0E' }} transition={{ type: 'spring', stiffness: 420, damping: 34 }} />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* ── Content ── */}
        <AnimatePresence mode="wait">
          {tab === 'recipes' ? (
            <motion.div
              key="recipes"
              role="tabpanel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {/* Mobile & tablet: clean swipeable cards, text below the photo */}
              <div className="-mx-5 flex snap-x snap-mandatory scroll-pl-5 gap-3 overflow-x-auto px-5 pb-3 sm:scroll-pl-6 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:hidden [&::-webkit-scrollbar]:hidden">
                {RECIPES.map((r, i) => (
                  <Link
                    key={r.slug}
                    href={`/recipes/${r.slug}`}
                    className="group w-[68%] flex-shrink-0 snap-start sm:w-[42%]"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]" style={{ background: '#EFE7DC' }}>
                      <Image src={r.image} alt={r.title} fill sizes="(max-width:640px) 70vw, 45vw" quality={80} className="object-cover" priority={i < 2} />
                      <span
                        className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase text-white backdrop-blur-md"
                        style={{ background: 'rgba(20,11,5,0.38)', letterSpacing: '0.08em', border: '1px solid rgba(255,255,255,0.18)' }}
                      >
                        {r.tag}
                      </span>
                    </div>
                    <p className="mt-3 truncate text-[12.5px] italic" style={{ ...serif, color: '#B45309' }}>{r.subtitle}</p>
                    <h3 className="mt-0.5 line-clamp-2 text-[18px] font-bold leading-snug" style={{ ...serif, color: '#2D1A0E' }}>{r.title}</h3>
                    <p className="mt-1.5 flex items-center gap-1.5 whitespace-nowrap text-[12.5px]" style={{ color: 'rgba(75,46,26,0.6)' }}>
                      <Clock size={12.5} aria-hidden /> {r.time}
                      <span aria-hidden>·</span> {r.difficulty}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Desktop: editorial bento */}
              <div className="hidden gap-4 lg:grid lg:grid-cols-12">
                {RECIPES.slice(0, 5).map((r, i) => (
                  <RecipeCard key={r.slug} r={r} big={i === 0} i={i} />
                ))}
                {RECIPES.slice(5, 8).map((r, i) => (
                  <motion.div key={r.slug} {...reveal(i + 5)} className="lg:col-span-4">
                    <Link href={`/recipes/${r.slug}`} className={cardBase} style={{ textDecoration: 'none', background: '#EFE7DC' }}>
                      <div className="relative aspect-[16/10]">
                        <Image src={r.image} alt={r.title} fill sizes="400px" quality={80} className={imgZoom} />
                        <Shade />
                        <Pill>{r.tag}</Pill>
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <h3 className="line-clamp-2 text-[17px] font-bold leading-tight text-white" style={serif}>{r.title}</h3>
                          <p className="mt-1.5 flex items-center gap-1.5 whitespace-nowrap text-[12px]" style={{ color: 'rgba(245,237,227,0.7)' }}>
                            <Clock size={12} aria-hidden /> {r.time} <span aria-hidden>·</span> {r.difficulty}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="stories"
              role="tabpanel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-2"
            >
              <StoryHero s={STORIES[0]} />
              <StorySide s={STORIES[1]} i={1} />
              <StorySide s={STORIES[2]} i={2} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Footer link ── */}
        <div className="mt-10 flex justify-center">
          <Link
            href={tab === 'recipes' ? '/recipes' : '/stories'}
            className="group inline-flex items-center gap-2 rounded-full border border-[rgba(75,46,26,0.18)] bg-white px-7 py-3.5 text-[14px] font-semibold transition-all hover:border-[#2D1A0E] hover:bg-[#2D1A0E] hover:text-white"
            style={{ color: '#2D1A0E', textDecoration: 'none' }}
          >
            {tab === 'recipes' ? 'Browse all recipes' : 'Read all stories'}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
