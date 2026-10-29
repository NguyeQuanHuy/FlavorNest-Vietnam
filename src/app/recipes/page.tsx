// ─────────────────────────────────────────────────────────────────────────────
//  app/recipes/page.tsx — server wrapper
//  - SEO metadata for /recipes
//  - checks at build time which recipes really have a photo in /public,
//    so the client can show those first and a clean placeholder for the rest
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import { Suspense } from 'react'
import fs from 'fs'
import path from 'path'
import RecipesClient from './_components/RecipesClient'
import { getAllRecipes } from '@/data/index'
import { STORIES } from '@/data/stories-data'

export const metadata: Metadata = {
    title: 'Vietnamese Recipes — Phở, Bánh Mì, Bún & More',
    description:
        'Browse hundreds of authentic Vietnamese recipes by dish type and region — northern phở, central bún bò Huế, southern street food — tested in a home kitchen.',
    alternates: { canonical: '/recipes' },
}

function slugsWithImage(): string[] {
    const pub = path.join(process.cwd(), 'public')
    const ok = (img?: string) => !!img && (img.startsWith('http') || fs.existsSync(path.join(pub, img)))
    return [
        ...getAllRecipes().filter(r => ok(r.image)).map(r => r.slug),
        ...STORIES.filter(s => ok(s.image)).map(s => `stories/${s.slug}`),
    ]
}

export default function RecipesPage() {
    const withImage = slugsWithImage()
    return (
        <Suspense fallback={<div className="min-h-screen" style={{ background: '#FBF8F4' }} />}>
            <RecipesClient withImage={withImage} />
        </Suspense>
    )
}
