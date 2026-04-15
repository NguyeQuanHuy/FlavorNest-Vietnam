import type { Metadata } from 'next'
import RecipesClient from './RecipesClient'

export const metadata: Metadata = {
    title: 'All Recipes',
    description: '100+ authentic Vietnamese recipes from Northern, Central, and Southern Vietnam — from Hanoi beef pho to Saigon broken rice. Filter by category, region, and difficulty.',
    keywords: [
        'Vietnamese recipes', 'pho recipe', 'banh mi', 'bun cha', 'com tam',
        'Vietnamese street food', 'Vietnamese cooking', 'Asian recipes',
    ],
    openGraph: {
        type: 'website',
        title: 'All Vietnamese Recipes – FlavorNest Vietnam',
        description: '100+ authentic Vietnamese recipes made simple at home.',
        images: [{
            url: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1200&q=80',
            width: 1200,
            height: 630,
            alt: 'Vietnamese recipes collection',
        }],
    },
    alternates: { canonical: '/recipes' },
}

export default function RecipesPage() {
    return <RecipesClient />
}
