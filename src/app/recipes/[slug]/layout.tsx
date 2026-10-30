import type { Metadata } from 'next';
import { recipes } from '@/data/recipes';

type Props = {
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const recipe = recipes.find(r => r.slug === slug);

    if (!recipe) {
        return {
            title: 'Recipe Not Found | FlavorNest Vietnam',
            description: 'Explore 880+ authentic Vietnamese recipes on FlavorNest Vietnam.',
        };
    }

    const title = `${recipe.title} — Authentic Vietnamese Recipe | FlavorNest Vietnam`;
    const description = recipe.shortDescription
        ? `${recipe.shortDescription.slice(0, 150)}. ${recipe.totalTime} · ${recipe.difficulty}`
        : `Learn how to make ${recipe.title}. ${recipe.totalTime} · ${recipe.difficulty} | FlavorNest Vietnam`;

    return {
        title,
        description,
        keywords: [
            recipe.title,
            'Vietnamese recipe',
            'Vietnamese food',
            'authentic Vietnamese cooking',
            recipe.category.toLowerCase(),
            'FlavorNest Vietnam',
        ],
        openGraph: {
            title: recipe.title,
            description: recipe.shortDescription || `Authentic Vietnamese ${recipe.title} recipe`,
            url: `https://flavor-nest-vietnam.vercel.app/recipes/${recipe.slug}`,
            siteName: 'FlavorNest Vietnam',
            locale: 'en_US',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: recipe.title,
            description: recipe.shortDescription || `Authentic Vietnamese ${recipe.title} recipe`,
        },
        alternates: {
            canonical: `https://flavor-nest-vietnam.vercel.app/recipes/${recipe.slug}`,
        },
    };
}

export default function RecipeSlugLayout({ children }: Props) {
    return <>{children}</>;
}
