// ─────────────────────────────────────────────────────────────────────────────
//  app/favorites/page.tsx — server wrapper: noindex + 4 starter suggestions
//  (UI lives in _components/FavoritesClient.tsx)
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import FavoritesClient, { type Suggestion } from './_components/FavoritesClient'
import { getAllRecipes } from '@/data'
import { isSharp } from '@/lib/image-quality'

export const metadata: Metadata = {
    title: 'My Saved Recipes',
    description: 'Your personal Vietnamese cookbook on FlavorNest.',
    robots: { index: false, follow: true }, // personal page — keep it out of search results
}

const STARTERS = ['pho-bo-ha-noi', 'banh-mi', 'bun-cha-hanoi', 'com-tam', 'banh-xeo', 'goi-cuon', 'bun-bo-hue', 'ca-phe-sua-da']

function suggestions(count = 4): Suggestion[] {
    const all = getAllRecipes()
    const pub = path.join(process.cwd(), 'public')
    const out: Suggestion[] = []
    for (const slug of STARTERS) {
        if (out.length === count) break
        const r = all.find(x => x.slug === slug)
        if (!r?.image?.startsWith('/') || !fs.existsSync(path.join(pub, r.image)) || !isSharp(r.image)) continue
        out.push({ slug: r.slug, title: r.title, image: r.image, category: r.category, cookTime: r.time, difficulty: r.difficulty, subtitle: r.subtitle })
    }
    return out
}

export default function FavoritesPage() {
    return <FavoritesClient suggestions={suggestions()} />
}
