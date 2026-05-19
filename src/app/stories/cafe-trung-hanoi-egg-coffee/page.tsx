import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vietnamese Egg Coffee (Cà Phê Trứng): The Hanoi Story | FlavorNest',
    description:
        'The full story of Vietnamese egg coffee — how a bartender at the Hanoi Metropole invented it in 1946 during a milk shortage, and how to make the real thing at home. Includes Café Giảng history and recipe.',
    keywords: [
        'egg coffee',
        'vietnamese egg coffee',
        'ca phe trung',
        'cà phê trứng',
        'hanoi egg coffee',
        'cafe giang',
        'café giảng',
        'nguyen van giang',
        'egg coffee recipe',
        'egg coffee history',
        'vietnamese coffee culture',
        'best egg coffee hanoi',
        'how to make egg coffee',
        'metropole hotel hanoi',
    ],
    openGraph: {
        title: 'Cà Phê Trứng: The Story of Hanoi\'s Wartime Egg Coffee',
        description:
            'How a bartender at the Hanoi Metropole, working through a 1946 milk shortage, invented one of the most beloved coffee drinks in Asia.',
        type: 'article',
        publishedTime: '2026-05-19T00:00:00.000Z',
        authors: ['Quan Huy Nguyen'],
        tags: ['egg coffee', 'vietnamese coffee', 'hanoi', 'food history'],
        images: [
            {
                url: 'https://flavor-nest-vietnam.vercel.app/images/stories/egg-coffee-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Vietnamese egg coffee with thick custard foam',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cà Phê Trứng: Hanoi\'s Wartime Egg Coffee',
        description: 'The 1946 invention that became one of Vietnam\'s most beloved coffee drinks.',
    },
    alternates: {
        canonical: 'https://flavor-nest-vietnam.vercel.app/stories/cafe-trung-hanoi-egg-coffee',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
