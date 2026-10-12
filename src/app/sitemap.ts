import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { CATEGORY_MAP } from './categories/_data/categoryMap'

const BASE_URL = 'https://flavor-nest-vietnam.vercel.app'

// Every folder directly under src/app/<section> that has its own page.tsx becomes a URL.
// New recipes, how-to guides and stories are picked up automatically - no list to maintain.
function pagesIn(section: string): string[] {
    const dir = path.join(process.cwd(), 'src/app', section)
    try {
        return fs.readdirSync(dir).filter(name =>
            !name.startsWith('_') &&
            !name.startsWith('[') &&
            fs.existsSync(path.join(dir, name, 'page.tsx'))
        )
    } catch {
        return []
    }
}

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()
    const entry = (url: string, priority: number, changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly') => ({
        url: `${BASE_URL}${url}`,
        lastModified: now,
        changeFrequency,
        priority,
    })

    const listingPages = ['desserts', 'drinks', 'north', 'central', 'south', 'street-food', 'breakfast', 'main-dishes']
    const recipeFolders = pagesIn('recipes')

    return [
        // Main pages
        entry('', 1, 'weekly'),
        entry('/recipes', 0.9, 'weekly'),
        entry('/how-to', 0.8, 'weekly'),
        entry('/stories', 0.8, 'weekly'),
        entry('/ingredients', 0.8),
        entry('/travel', 0.7),
        entry('/about', 0.5, 'yearly'),

        // Recipe listing pages (north, desserts, ...)
        ...recipeFolders.filter(s => listingPages.includes(s)).map(s => entry(`/recipes/${s}`, 0.8, 'weekly')),

        // Category pages (pho, bun, banhmi, ...)
        ...Object.keys(CATEGORY_MAP).map(s => entry(`/categories/${s}`, 0.7, 'weekly')),

        // Individual recipes, how-to guides and stories
        ...recipeFolders.filter(s => !listingPages.includes(s)).map(s => entry(`/recipes/${s}`, 0.8)),
        ...pagesIn('how-to').map(s => entry(`/how-to/${s}`, 0.7)),
        ...pagesIn('stories').map(s => entry(`/stories/${s}`, 0.6)),
    ]
}
