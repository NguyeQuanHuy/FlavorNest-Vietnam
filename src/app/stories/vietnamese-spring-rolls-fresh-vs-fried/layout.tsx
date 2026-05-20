import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vietnamese Spring Rolls: Fresh (Gỏi Cuốn) vs Fried (Chả Giò) | FlavorNest',
    description:
        'Everything you need to know about Vietnamese spring rolls — the difference between gỏi cuốn and chả giò, the regional names (nem cuốn, nem rán), the history from China to Vietnam, and how to make both at home including the rice paper rolling technique.',
    keywords: [
        'vietnamese spring rolls',
        'goi cuon',
        'gỏi cuốn',
        'cha gio',
        'chả giò',
        'nem ran',
        'nem cuon',
        'summer rolls',
        'fresh spring rolls',
        'fried spring rolls',
        'vietnamese rice paper rolls',
        'rice paper rolls',
        'how to make spring rolls',
        'spring rolls vs summer rolls',
        'goi cuon vs cha gio',
        'peanut sauce vietnamese',
        'vietnamese appetizer',
    ],
    openGraph: {
        title: 'Vietnamese Spring Rolls: Fresh vs Fried — The Complete Guide',
        description:
            'The complete story of Vietnamese spring rolls — gỏi cuốn, chả giò, nem cuốn, nem rán. History, technique, sauces, and how to roll them.',
        type: 'article',
        publishedTime: '2026-05-19T00:00:00.000Z',
        authors: ['Quan Huy Nguyen'],
        tags: ['vietnamese cuisine', 'spring rolls', 'food guide', 'goi cuon', 'cha gio'],
        images: [
            {
                url: 'https://flavor-nest-vietnam.vercel.app/images/stories/vietnamese-spring-rolls-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Vietnamese fresh spring rolls with peanut sauce',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vietnamese Spring Rolls: Fresh vs Fried',
        description: 'The complete guide to gỏi cuốn and chả giò — two dishes, one English name.',
    },
    alternates: {
        canonical: 'https://flavor-nest-vietnam.vercel.app/stories/vietnamese-spring-rolls-fresh-vs-fried',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}