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

// Section components (each in its own file for maintainability)
import HeroSection from './_sections/HeroSection'
import dynamic from 'next/dynamic'

const FeaturedRecipes = dynamic(() => import('./_sections/FeaturedRecipes'))
const CategoriesSection = dynamic(() => import('./_sections/CategoriesSection'))
const KitchenStories = dynamic(() => import('./_sections/KitchenStories'))
const WhyFlavorNest = dynamic(() => import('./_sections/WhyFlavorNest'))
const NewsletterSection = dynamic(() => import('./_sections/NewsletterSection'))
import { recipes } from "@/data/recipes";
import Image from "next/image";


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
    url: 'https://flavornest-vietnam.com',
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
  alternates: { canonical: 'https://flavornest-vietnam.com' },
}

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FlavorNest Vietnam',
  url: 'https://flavornest-vietnam.com',
  logo: 'https://flavornest-vietnam.com/logo.png',
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
  url: 'https://flavornest-vietnam.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://flavornest-vietnam.com/recipes?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

// ── Page (Server Component) ───────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* Structured data injected in <head> via next/script */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema]),
        }}
      />

      <main className="overflow-x-hidden">
        {/* 1 ─ Hero */}
        <HeroSection />

        {/* 2 ─ Featured Recipes */}
        <FeaturedRecipes recipes={recipes} />

        {/* 3 ─ Popular Categories */}
        <CategoriesSection />

        {/* 4 ─ Kitchen Stories */}
        <KitchenStories />

        {/* 5 ─ Why FlavorNest */}
        <WhyFlavorNest />

        {/* 6 ─ Newsletter */}
        <NewsletterSection />
      </main>
    </>
  )
}