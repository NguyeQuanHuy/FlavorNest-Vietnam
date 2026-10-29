// ─────────────────────────────────────────────────────────────────────────────
//  src/lib/site-stats.ts
//  ONE source of truth for the numbers shown on the site (home, about, recipes).
//  Server-only: counts real pages on disk at build time.
// ─────────────────────────────────────────────────────────────────────────────

import fs from 'fs'
import path from 'path'

function countDirs(rel: string, skip: string[] = []): number {
    try {
        const dir = path.join(process.cwd(), rel)
        return fs.readdirSync(dir).filter(f =>
            !f.startsWith('_') && !f.startsWith('[') && !skip.includes(f) &&
            fs.statSync(path.join(dir, f)).isDirectory() &&
            fs.existsSync(path.join(dir, f, 'page.tsx')),
        ).length
    } catch { return 0 }
}

// Listing / hub pages inside /recipes that are not recipes themselves
const RECIPE_HUBS = ['breakfast', 'desserts', 'drinks', 'main-dishes', 'north', 'central', 'south', 'street-food']
const STORY_HUBS = ['culture', 'travel', 'about']

export type SiteStats = { recipes: number; stories: number; guides: number; regions: number }

export function getSiteStats(): SiteStats {
    return {
        recipes: countDirs('src/app/recipes', RECIPE_HUBS),
        stories: countDirs('src/app/stories', STORY_HUBS),
        guides: countDirs('src/app/how-to'),
        regions: 3,
    }
}
