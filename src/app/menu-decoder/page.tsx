// ─────────────────────────────────────────────────────────────────────────────
//  app/menu-decoder/page.tsx — server wrapper: SEO, JSON-LD, recipe links/photos
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import MenuDecoderClient, { type DishLinks } from './_components/MenuDecoderClient'
import { DISHES } from '@/data/menu-decoder'
import { getAllRecipes } from '@/data'
import { imageWidth } from '@/lib/image-quality'

const URL = 'https://flavor-nest-vietnam.vercel.app/menu-decoder'

export const metadata: Metadata = {
    title: 'Vietnamese Menu Decoder — What Every Dish Means (Phở, Bún, Cơm…)',
    description:
        'Sitting in a Vietnamese restaurant? Type any dish name — Vietnamese, English or German — and see what it is, how it tastes, how to eat it, its usual allergens and how to order it.',
    alternates: { canonical: '/menu-decoder' },
    openGraph: {
        title: 'Vietnamese Menu Decoder',
        description: 'Decode any Vietnamese menu: 30 classic dishes and nearly 100 menu words explained for foreigners.',
        url: URL,
        type: 'website',
    },
}

function buildLinks(): DishLinks {
    const recipes = new Map(getAllRecipes().map(r => [r.slug, r]))
    const out: DishLinks = {}
    for (const d of DISHES) {
        const r = d.recipes.map(s => recipes.get(s)).find(Boolean)
        if (!r) continue
        const w = imageWidth(r.image)
        out[d.id] = {
            href: `/recipes/${r.slug}`,
            image: w >= 160 ? r.image : undefined, // thumbnails
            sharp: w >= 600,                       // sheet header
        }
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
