// ─────────────────────────────────────────────────────────────
//  src/data/index.ts
//  FlavorNest Vietnam — Master recipe index
//  Merges all category data files into one unified list
//  Used by: /recipes page (shows all recipes)
// ─────────────────────────────────────────────────────────────

import { MAIN_DISHES_RECIPES } from './recipes-main-dishes'
import { BREAKFAST_RECIPES } from './recipes-breakfast'
import { NORTHERN_RECIPES } from './recipes-northern'
import { SOUTHERN_RECIPES } from './recipes-southern'
import { CENTRAL_RECIPES } from './recipes-central'
import { DRINKS_RECIPES } from './recipes-drinks'
import { getDetailedAsLegacy } from './recipes-detailed'

export interface UnifiedRecipe {
  slug: string
  title: string
  subtitle: string
  image: string
  region: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  time: string
  rating: string
  reviews: number
  cal?: number
  tag?: string
  tagColor?: string
  description: string
  tags: string[]
  category: string
}

export function getAllRecipes(): UnifiedRecipe[] {
  // Detailed recipes có priority cao nhất (full schema)
  const detailed = getDetailedAsLegacy().map(r => ({
    slug: r.slug,
    title: r.title,
    subtitle: r.subtitle,
    image: r.image,
    region: 'Northern', // default, detailed recipes có inferRegion riêng
    difficulty: r.difficulty,
    time: r.totalTime,
    rating: r.rating.toFixed(1),
    reviews: r.ratingCount,
    cal: r.calories,
    description: r.shortDescription,
    tags: r.tags.slice(0, 4),
    category: r.category,
  }))

  const detailedSlugs = new Set(detailed.map(r => r.slug))

  // Gom tất cả category recipes, lọc trùng với detailed
  const allCategory: UnifiedRecipe[] = [
    ...MAIN_DISHES_RECIPES,
    ...BREAKFAST_RECIPES,
    ...NORTHERN_RECIPES,
    ...SOUTHERN_RECIPES,
    ...CENTRAL_RECIPES,
    ...DRINKS_RECIPES,
  ].filter(r => !detailedSlugs.has(r.slug)) as UnifiedRecipe[]

  // Dedup trong category recipes (same slug khác file)
  const seen = new Set<string>()
  const uniqueCategory = allCategory.filter(r => {
    if (seen.has(r.slug)) return false
    seen.add(r.slug)
    return true
  })

  return [...detailed, ...uniqueCategory]
}
