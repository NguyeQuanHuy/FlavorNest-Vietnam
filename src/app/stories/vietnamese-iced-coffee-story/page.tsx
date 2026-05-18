import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cà Phê Sữa Đá: The Slow Genius of Vietnamese Iced Coffee | FlavorNest',
    description:
        'How Vietnam took French colonial coffee culture, paired it with Robusta beans and condensed milk, and created one of the world\'s most beloved cold drinks. A long-form essay on Vietnamese coffee history, the phin filter, and why patience is the secret ingredient.',
    keywords: [
        'Vietnamese coffee',
        'cà phê sữa đá',
        'ca phe sua da',
        'Vietnamese iced coffee',
        'phin filter',
        'Vietnamese coffee history',
        'Robusta coffee',
        'Vietnamese coffee culture',
        'how to make Vietnamese coffee',
        'condensed milk coffee',
        'Vietnam coffee export',
        'Buon Ma Thuot coffee',
        'best Vietnamese coffee',
    ],
    openGraph: {
        title: 'Cà Phê Sữa Đá: The Slow Genius of Vietnamese Iced Coffee',
        description:
            'How Vietnam created one of the world\'s most beloved cold drinks from a French filter, a Swiss tin of milk, and the strongest beans on Earth.',
        type: 'article',
        publishedTime: '2026-05-18T00:00:00.000Z',
        authors: ['Quan Huy Nguyen'],
        tags: ['Vietnamese coffee', 'coffee culture', 'food history', 'Robusta', 'phin filter'],
        images: [
            {
                url: 'https://flavor-nest-vietnam.vercel.app/images/stories/vietnamese-iced-coffee-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'A glass of cà phê sữa đá with a phin filter',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cà Phê Sữa Đá: The Slow Genius of Vietnamese Iced Coffee',
        description:
            'How Vietnam created one of the world\'s most beloved cold drinks. A long-form essay on Vietnamese coffee.',
        images: [
            'https://flavor-nest-vietnam.vercel.app/images/stories/vietnamese-iced-coffee-hero.jpg',
        ],
    },
    alternates: {
        canonical: 'https://flavor-nest-vietnam.vercel.app/stories/vietnamese-iced-coffee-story',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
