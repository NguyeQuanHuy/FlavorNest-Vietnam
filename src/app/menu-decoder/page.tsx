// ─────────────────────────────────────────────────────────────────────────────
//  app/menu-decoder/page.tsx — server wrapper: SEO, JSON-LD, recipe links/photos
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import PHOTO_CREDITS from '@/data/menu-photo-credits.json'
import MenuDecoderClient, { type DishLinks } from './_components/MenuDecoderClient'
import { DISHES } from '@/data/menu-decoder'
import { getAllRecipes } from '@/data'
import { imageWidth } from '@/lib/image-quality'

const URL = 'https://flavor-nest-vietnam.vercel.app/menu-decoder'

export const metadata: Metadata = {
    title: 'Vietnamese Menu Decoder — What Every Dish Means (Phở, Bún, Cơm…)',
    description:
        'Sitting in a Vietnamese restaurant? Scan the menu with your phone or type any dish name — Vietnamese, English or German — and see what it is, how it tastes, how to eat it, its usual allergens and how to order it.',
    alternates: { canonical: '/menu-decoder' },
    openGraph: {
        title: 'Vietnamese Menu Decoder',
        description: 'Decode any Vietnamese menu: 30 classic dishes and nearly 100 menu words explained for foreigners.',
        url: URL,
        type: 'website',
    },
}

const CREDITS = PHOTO_CREDITS as Record<string, { artist: string; license: string; source: string }>

function buildLinks(): DishLinks {
    const recipes = new Map(getAllRecipes().map(r => [r.slug, r]))
    const menuDir = path.join(process.cwd(), 'public/images/menu')
    const out: DishLinks = {}
    for (const d of DISHES) {
        const r = d.recipes.map(s => recipes.get(s)).find(Boolean)
        const link: DishLinks[string] = {}
        if (r) {
            const w = imageWidth(r.image)
            link.href = `/recipes/${r.slug}`
            link.image = w >= 160 ? r.image : undefined // thumbnails
            link.sharp = w >= 600                       // sheet header
        }
        // curated, sharp dish photo (scripts/fetch-menu-photos.mjs) wins over the recipe photo
        if (fs.existsSync(path.join(menuDir, `${d.id}.webp`))) {
            link.image = `/images/menu/${d.id}.webp`
            link.sharp = true
            const c = CREDITS[d.id]
            if (c) link.credit = { ...c, artist: c.artist.replace(/\s*\((thảo luận|talk)\)/i, '') }
        }
        if (link.href || link.image) out[d.id] = link
    }
    return out
}

export default function MenuDecoderPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: DISHES.map(d => ({
            '@type': 'Question',
            name: `What is ${d.vi} (${d.en})?`,
            acceptedAnswer: { '@type': 'Answer', text: `${d.what} It tastes ${d.taste.charAt(0).toLowerCase()}${d.taste.slice(1)}` },
        })),
    }
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
            <MenuDecoderClient links={buildLinks()} />
        </>
    )
}
