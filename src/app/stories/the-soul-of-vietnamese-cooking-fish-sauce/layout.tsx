import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vietnamese Fish Sauce (Nước Mắm): A Complete Guide | FlavorNest',
    description:
        'Everything you need to know about Vietnamese fish sauce — how it\'s made, how to choose a good one, what degrees N means, the difference between Phú Quốc and Phan Thiết, and what to substitute when you can\'t find it.',
    keywords: [
        'fish sauce',
        'nước mắm',
        'vietnamese fish sauce',
        'phu quoc fish sauce',
        'best fish sauce',
        'fish sauce substitute',
        'what is fish sauce',
        'how to use fish sauce',
        'red boat fish sauce',
        'three crabs fish sauce',
        'fish sauce brands',
        'nuoc cham recipe',
        'vegetarian fish sauce',
    ],
    openGraph: {
        title: 'Vietnamese Fish Sauce (Nước Mắm): A Complete Guide',
        description:
            'A complete guide to Vietnamese fish sauce — how it\'s made, how to choose one, how to use it, and what to substitute.',
        type: 'article',
        publishedTime: '2026-05-19T00:00:00.000Z',
        authors: ['Quan Huy Nguyen'],
        tags: ['fish sauce', 'vietnamese cooking', 'food history', 'cooking guide'],
        images: [
            {
                url: 'https://flavor-nest-vietnam.vercel.app/images/stories/fish-sauce-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Phú Quốc fish sauce barrels',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vietnamese Fish Sauce: A Complete Guide',
        description: 'Everything you need to know about nước mắm — the soul of Vietnamese cooking.',
    },
    alternates: {
        canonical: 'https://flavor-nest-vietnam.vercel.app/stories/the-soul-of-vietnamese-cooking-fish-sauce',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
