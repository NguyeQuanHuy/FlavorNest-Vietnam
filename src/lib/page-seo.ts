import type { Metadata } from 'next';
import SEO from '@/data/page-seo.json';

type Entry = { title: string; description?: string; noindex?: boolean };

/** <title>, description and canonical for content pages (stories, how-to, listings). Data: src/data/page-seo.json */
export function pageMetadata(route: string): Metadata {
    const r = (SEO as Record<string, Entry>)[route];
    if (!r) return { alternates: { canonical: route } };
    if (r.noindex) return { title: r.title, robots: { index: false, follow: false } };

    // long titles skip the " | FlavorNest Vietnam" suffix so they aren't cut off in Google
    const title = r.title.length > 48 ? { absolute: r.title } : r.title;
    return {
        title,
        description: r.description,
        alternates: { canonical: route },
        openGraph: { type: 'article', url: route, title: r.title, description: r.description, siteName: 'FlavorNest Vietnam' },
        twitter: { card: 'summary_large_image', title: r.title, description: r.description },
    };
}
