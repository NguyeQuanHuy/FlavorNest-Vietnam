import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authentic Hanoi Beef Pho Recipe (Phở Bò) | FlavorNest Vietnam',
    description:
        'The complete traditional Hanoi-style beef pho recipe. 10-hour clear bone broth scented with star anise, charred ginger, and cinnamon. Tested in a real home kitchen. Step-by-step with pro tips and FAQ.',
    keywords: [
        'vietnamese pho recipe',
        'authentic pho recipe',
        'hanoi pho',
        'pho bo recipe',
        'beef pho recipe',
        'how to make pho',
        'vietnamese beef noodle soup',
        'traditional pho recipe',
        'pho broth recipe',
        'best pho recipe',
        'pho ingredients',
        'vietnamese soup',
    ],
    openGraph: {
        title: 'Authentic Hanoi Beef Pho Recipe (Phở Bò)',
        description:
            'A real Hanoi-style pho takes ten hours and rewards every minute of it. Step-by-step recipe with pro tips and FAQ.',
        type: 'article',
        images: [
            {
                url: 'https://flavor-nest-vietnam.vercel.app/images/recipes/pho-bo.jpg',
                width: 1200,
                height: 630,
                alt: 'A bowl of authentic Hanoi-style beef pho',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Authentic Hanoi Beef Pho Recipe',
        description: 'The complete traditional Hanoi-style beef pho — 10 hours, clear broth, paper-thin beef.',
        images: ['https://flavor-nest-vietnam.vercel.app/images/recipes/pho-bo.jpg'],
    },
    alternates: {
        canonical: 'https://flavor-nest-vietnam.vercel.app/recipes/pho-bo',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
