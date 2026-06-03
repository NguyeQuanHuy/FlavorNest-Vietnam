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
        <CategoriesSection />
        <WhyFlavorNest />
        <NewsletterSection />
      </main>
    </>
  )
}
