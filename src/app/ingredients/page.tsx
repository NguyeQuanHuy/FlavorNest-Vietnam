// ─────────────────────────────────────────────────────────────────────────────
//  app/ingredients/page.tsx — server wrapper: SEO + which ingredient photos exist
//  Drop a photo at public/images/ingredients/<name>.jpg and it appears automatically
//  (e.g. star-anise.jpg, thai-basil.jpg, tamarind.webp).
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import IngredientsClient from './_components/IngredientsClient'
import { getSiteStats } from '@/lib/site-stats'

export const metadata: Metadata = {
    title: 'Vietnamese Ingredients Guide — Fish Sauce, Herbs, Noodles & More',
    description:
        'A visual guide to the Vietnamese pantry: what each ingredient tastes like, how it is used, where to buy it and how to store it.',
    alternates: { canonical: '/ingredients' },
}

function photoFiles(): string[] {
    try {
        return fs.readdirSync(path.join(process.cwd(), 'public/images/ingredients')).filter(f => /\.(jpe?g|png|webp)$/i.test(f))
    } catch { return [] }
}

export default function IngredientsPage() {
    return <IngredientsClient photoFiles={photoFiles()} recipeCount={getSiteStats().recipes} />
}
