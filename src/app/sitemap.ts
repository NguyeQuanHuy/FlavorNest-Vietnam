import type { MetadataRoute } from 'next'
import { RECIPES } from '@/data/recipes'

const SITE_URL = 'https://flavornest-vietnam.com'

export default function sitemap(): MetadataRoute.Sitemap {
    const recipeUrls: MetadataRoute.Sitemap = RECIPES.map(recipe => ({
        url: `${SITE_URL}/recipes/${recipe.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }))

    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${SITE_URL}/recipes`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/stories`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        ...recipeUrls,
    ]
}
