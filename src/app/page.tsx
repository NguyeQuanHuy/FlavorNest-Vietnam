// ─────────────────────────────────────────────────────────────────────────────
//  app/page.tsx  —  FlavorNest Vietnam · Homepage
//
//  Architecture
//  ├── page.tsx            Server Component (SEO, structured data, data fetch)
//  ├── _sections/
//  │   ├── HeroSection.tsx         'use client' – Framer Motion parallax
//  │   ├── FeaturedRecipes.tsx     'use client' – hover + scroll reveal
//  │   ├── CategoriesSection.tsx   'use client' – scroll reveal
//  │   ├── KitchenStories.tsx      'use client' – scroll reveal
//  │   ├── WhyFlavorNest.tsx       'use client' – counter animation
//  │   └── NewsletterSection.tsx   'use client' – form state
//  └── components/
//      └── SectionHeader.tsx       Server (pure presentational)
//
//  All animation-heavy sections are split into Client Components to keep
//  the root Server Component lean and crawlable by search engines.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Script from 'next/script'
import fs from 'fs'
import path from 'path'

function countRecipePages(): number {
  const recipesDir = path.join(process.cwd(), 'src/app/recipes')
  const excludes = new Set(['[slug]', '_components', 'breakfast', 'desserts', 'drinks', 'main-dishes', 'north', 'central', 'south', 'street-food'])
  try {
    return fs.readdirSync(recipesDir)
      .filter(f => {
        const fullPath = path.join(recipesDir, f)
        return fs.statSync(fullPath).isDirectory() && !excludes.has(f)
      }).length
  } catch { return 100 }
}



// Section components (each in its own file for maintainability)
import IngredientFinderHero from './_sections/IngredientFinderHero'
import dynamic from 'next/dynamic'

const FeaturedRecipes = dynamic(() => import('./_sections/FeaturedRecipes'))
const BentoGrid = dynamic(() => import('./_sections/BentoGrid'))
const CategoriesSection = dynamic(() => import('./_sections/CategoriesSection'))
const WhyFlavorNest = dynamic(() => import('./_sections/WhyFlavorNest'))
const NewsletterSection = dynamic(() => import('./_sections/NewsletterSection'))
import { recipes } from "@/data/recipes";
import { STORIES as ALL_STORIES } from "@/data/stories-data";
import Image from "next/image";
import TrendingSection, { type TrendingItem } from './_sections/TrendingSection'
import { getAllRecipes } from '@/data/index'

// ── Trending this week: best-rated + most-reviewed recipes, rotated weekly ──
function isoWeek(d = new Date()): number {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  const day = t.getUTCDay() || 7
  t.setUTCDate(t.getUTCDate() + 4 - day)
  const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1))
  return Math.ceil(((t.getTime() - y0.getTime()) / 86400000 + 1) / 7)
}

function getTrending(count = 8): TrendingItem[] {
  const pub = path.join(process.cwd(), 'public')
  const recipesDir = path.join(process.cwd(), 'src/app/recipes')
  const pool = getAllRecipes()
    .filter(r => r.image?.startsWith('/') && fs.existsSync(path.join(pub, r.image)))
    .filter(r => fs.existsSync(path.join(recipesDir, r.slug)))
    .map(r => ({ r, score: parseFloat(r.rating || '0') * Math.log10((r.reviews || 0) + 10) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 40)
  // deterministic weekly shuffle → list changes every week, stable within a week
  let seed = isoWeek() * 9301 + new Date().getFullYear()
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280)
  const picked = [...pool].sort(() => rnd() - 0.5).slice(0, count)
  return picked
    .sort((a, b) => b.score - a.score)
    .map(({ r }) => ({
      slug: r.slug, title: r.title, subtitle: r.subtitle, image: r.image,
      rating: r.rating, reviews: r.reviews, time: r.time, region: r.region,
    }))
}

function countDirs(rel: string, skip: string[] = []): number {
  try {
    const dir = path.join(process.cwd(), rel)
    return fs.readdirSync(dir).filter(f => !f.startsWith('_') && !f.startsWith('[') && !skip.includes(f) && fs.statSync(path.join(dir, f)).isDirectory()).length
  } catch { return 0 }
}

// ── Map recipes → BentoGrid format ──
const TAG_COLORS = ['#D97706', '#166534', '#7C3AED', '#059669', '#EA580C', '#BE185D', '#DC2626', '#0284C7']
const featuredRecipes = recipes.slice(0, 8).map((r: any, i: number) => ({
  slug: r.slug,
  title: r.title,
  subtitle: r.subtitle ?? '',
  image: r.image,
  tag: r.tags?.[0] ?? r.category ?? 'Featured',
  tagColor: TAG_COLORS[i % TAG_COLORS.length],
  time: r.totalTime ?? r.time ?? '30 min',
  difficulty: (r.difficulty ?? 'Medium') as 'Easy' | 'Medium' | 'Hard',
}))

// ── Map stories → BentoGrid format ──
const COLOR_MAP: Record<string, string> = { amber: '#D97706', forest: '#166534', brown: '#4B2E1A' }
const featuredStories = ALL_STORIES.slice(0, 3).map(s => ({
  slug: s.slug,
  category: s.category,
  categoryColor: COLOR_MAP[s.categoryColor] ?? '#D97706',
  title: s.title,
  excerpt: s.excerpt,
  image: s.image,
  readTime: s.readTime,
}))


// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'FlavorNest Vietnam – Authentic Vietnamese Recipes Made Simple at Home',
  description:
    "Your nest of authentic Vietnamese flavors. 100+ tested recipes — from Hanoi's dawn pho to Saigon's vibrant street food — made simple for every home kitchen.",
  keywords: [
    'Vietnamese recipes', 'Pho recipe', 'Banh Mi', 'Bun Cha',
    'authentic Vietnamese cooking', 'Vietnamese food blog',
  ],
  openGraph: {
    type: 'website',
    url: 'https://flavor-nest-vietnam.vercel.app',
    title: 'FlavorNest Vietnam – Authentic Vietnamese Recipes',
    description: "Your nest of authentic Vietnamese flavors. 100+ tested recipes made simple at home.",
    siteName: 'FlavorNest Vietnam',
    images: [{
      url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=1200&q=80',
      width: 1200,
      height: 630,
      alt: 'FlavorNest Vietnam – Authentic Vietnamese Recipes',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlavorNest Vietnam',
    description: "Authentic Vietnamese recipes made simple at home.",
    images: ['https://images.unsplash.com/photo-1585032226651-759b368d7246?w=1200&q=80'],
  },
  alternates: { canonical: 'https://flavor-nest-vietnam.vercel.app' },
}

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FlavorNest Vietnam',
  url: 'https://flavor-nest-vietnam.vercel.app',
  logo: 'https://flavor-nest-vietnam.vercel.app/logo.png',
  description: "Authentic Vietnamese recipes made simple for every home kitchen.",
  sameAs: [
    'https://instagram.com/flavornest_vietnam',
    'https://youtube.com/@flavornest_vietnam',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FlavorNest Vietnam',
  url: 'https://flavor-nest-vietnam.vercel.app',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://flavor-nest-vietnam.vercel.app/recipes?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

// ── Page (Server Component) ───────────────────────────────────────────────────
export default function HomePage() {
  const recipeCount = countRecipePages()
  const trending = getTrending(8)
  const stats = [
    { value: recipeCount, label: 'Tested recipes', suffix: '+' },
    { value: countDirs('src/app/stories', ['culture', 'travel', 'about']), label: 'Food stories' },
    { value: countDirs('src/app/how-to'), label: 'Technique guides' },
    { value: 3, label: 'Regions, north to south' },
  ]
  const week = `Week ${isoWeek()}`
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema]),
        }}
      />

      <main className="overflow-x-hidden">
        <IngredientFinderHero />
        <BentoGrid recipes={featuredRecipes} stories={featuredStories} />
        <TrendingSection items={trending} stats={stats} week={week} />
        <CategoriesSection />
        <WhyFlavorNest />
        <NewsletterSection />
      </main>
    </>
  )
}
