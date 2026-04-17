import type { Metadata } from 'next';

// ── SEO metadata for About page ──
export const metadata: Metadata = {
    title: 'About FlavorNest Vietnam — A Love Letter to Vietnamese Home Cooking',
    description:
        'The story behind FlavorNest: one man from Phú Yên, writing down the Vietnamese recipes he grew up with — from a small kitchen in Germany. Authentic, tested, and honest.',
    keywords: [
        'FlavorNest Vietnam',
        'Vietnamese food blog',
        'authentic Vietnamese recipes',
        'Phu Yen cuisine',
        'Vietnamese cooking blog',
        'Vietnamese home recipes',
        'central Vietnamese food',
        'about FlavorNest',
        'Vietnamese diaspora food',
    ],
    openGraph: {
        title: 'About FlavorNest Vietnam — A Love Letter to Vietnamese Home Cooking',
        description:
            'One man from Phú Yên, writing down the Vietnamese recipes he grew up with — from a small kitchen in Germany.',
        type: 'website',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=85',
                width: 1200,
                height: 630,
                alt: 'FlavorNest Vietnam — authentic Vietnamese home cooking',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About FlavorNest Vietnam',
        description:
            'The story behind FlavorNest: authentic Vietnamese home cooking, written honestly.',
    },
    alternates: {
        canonical: 'https://flavor-nest-vietnam.vercel.app/stories/about',
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}