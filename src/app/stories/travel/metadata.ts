// app/stories/travel/metadata.ts
// Import this in layout.tsx or use Next.js generateMetadata in the page

import type { Metadata } from 'next'

export const travelGuideMetadata: Metadata = {
    title: 'Where to Eat in Vietnam — Food Travel Guide | FlavorNest Vietnam',
    description:
        "From Hanoi's legendary Phở Bò to Hội An's Cao Lầu and Saigon's Bánh Mì — your complete guide to eating your way through Vietnam.",
    keywords: [
        'where to eat vietnam',
        'vietnam food travel guide',
        'best vietnamese food',
        'hanoi pho restaurants',
        'hoi an cao lau',
        'saigon banh mi',
        'hue bun bo',
        'mekong delta food',
        'vietnam street food guide',
        'da lat coffee',
        'vung tau seafood',
        'vietnamese cuisine regions',
        'am thuc viet nam',
    ],
    authors: [{ name: 'FlavorNest Vietnam' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://flavor-nest-vietnam.vercel.app/stories/travel',
        siteName: 'FlavorNest Vietnam',
        title: 'Where to Eat in Vietnam — The FlavorNest Food Travel Guide',
        description:
            'Discover Vietnam\'s greatest tables — 8 destination food guides from Hanoi to the Mekong Delta, written by people who have eaten their way around the country for a decade.',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&h=630&q=85',
                width: 1200,
                height: 630,
                alt: 'Street food stalls in Vietnam at golden hour — FlavorNest Vietnam Travel Guide',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Where to Eat in Vietnam | FlavorNest Vietnam',
        description: '8 destination food guides — from Hanoi street bowls to Saigon sidewalk crêpes.',
        images: ['https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=85'],
    },
    alternates: {
        canonical: 'https://flavor-nest-vietnam.vercel.app/stories/travel',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
}