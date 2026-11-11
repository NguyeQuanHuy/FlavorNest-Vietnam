import type { Metadata } from 'next';
import SEO from '@/data/recipe-seo.generated.json';

type Entry = { title: string; description: string; image?: string };

/** Per-recipe <title>, description, canonical and social image. Data: scripts/gen-recipe-seo.mjs */
export function recipeMetadata(slug: string): Metadata {
    const r = (SEO as Record<string, Entry>)[slug];
    const url = `/recipes/${slug}`;
    if (!r) return { alternates: { canonical: url } };

    const images = r.image ? [{ url: r.image, alt: r.title }] : undefined;
    return {
        // long titles skip the " | FlavorNest Vietnam" suffix so the dish name isn't cut off in Google
        title: r.title.length > 48 ? { absolute: r.title } : r.title,
        description: r.description,
        alternates: { canonical: url },
        openGraph: { type: 'article', url, title: r.title, description: r.description, siteName: 'FlavorNest Vietnam', images },
        twitter: { card: 'summary_large_image', title: r.title, description: r.description, images: r.image ? [r.image] : undefined },
    };
}
