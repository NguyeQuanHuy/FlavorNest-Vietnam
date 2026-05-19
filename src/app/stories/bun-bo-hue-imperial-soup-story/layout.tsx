import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Bún Bò Huế: The Spicy Imperial Noodle Soup of Vietnam | FlavorNest',
    description:
        'The full history, technique, and cultural depth of Bún Bò Huế — Vietnam\'s royal-court spicy beef noodle soup. From the kitchens of the Nguyễn emperors to the global food spotlight. Why most chefs think it\'s better than phở.',
    keywords: [
        'bun bo hue',
        'bún bò huế',
        'bun bo hue history',
        'vietnamese spicy noodle soup',
        'hue cuisine',
        'vietnamese royal cuisine',
        'nguyen dynasty food',
        'central vietnam food',
        'hue beef noodle soup',
        'spicy vietnamese soup',
        'bun bo hue recipe',
        'imperial vietnamese cooking',
        'mam ruoc hue',
        'where to eat bun bo hue',
    ],
    openGraph: {
        title: 'Bún Bò Huế: The Spicy Imperial Noodle Soup of Vietnam',
        description:
            'The royal-court spicy beef noodle soup that Vietnam quietly thinks is better than phở.',
        type: 'article',
        publishedTime: '2026-05-19T00:00:00.000Z',
        authors: ['Quan Huy Nguyen'],
        tags: ['bun bo hue', 'vietnamese cuisine', 'hue', 'food history', 'imperial cuisine'],
        images: [
            {
                url: 'https://flavor-nest-vietnam.vercel.app/images/stories/bun-bo-hue-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'A bowl of authentic bún bò Huế',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bún Bò Huế: The Spicy Imperial Soup',
        description: 'The bowl from a royal court that Vietnam quietly thinks is better than phở.',
    },
    alternates: {
        canonical: 'https://flavor-nest-vietnam.vercel.app/stories/bun-bo-hue-imperial-soup-story',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
