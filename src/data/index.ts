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
import { getDetailedAsLegacy, RECIPES_DETAILED } from './recipes-detailed'
import { RECIPES as CATALOGUE } from './recipes'

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

  // Master catalogue (recipes.ts): add every recipe not already listed above,
  // so all recipe pages are discoverable on /recipes
  const known = new Set([...detailed.map(r => r.slug), ...uniqueCategory.map(r => r.slug)])
  const fromCatalogue: UnifiedRecipe[] = CATALOGUE
    .filter(r => !known.has(r.slug) && (known.add(r.slug), true))
    .map(r => ({
      slug: r.slug,
      title: r.title,
      subtitle: r.subtitle,
      image: r.image,
      region: inferRegion(`${r.slug} ${r.title} ${r.subtitle} ${r.tags.join(' ')}`),
      difficulty: r.difficulty,
      time: r.totalTime,
      rating: r.rating.toFixed(1),
      reviews: r.ratingCount,
      cal: r.calories,
      description: r.shortDescription,
      tags: r.tags.slice(0, 4),
      category: r.category,
    }))

  return [...detailed, ...uniqueCategory, ...fromCatalogue]
}

// ── Ingredients preview map (slug → top 4 tên nguyên liệu chính) ──
// Dùng cho tag chips trên /recipes page
export function getIngredientPreviewMap(): Record<string, string[]> {
  const map: Record<string, string[]> = {}
  for (const r of RECIPES_DETAILED) {
    const firstGroup = r.ingredients?.[0]
    if (firstGroup) {
      map[r.slug] = firstGroup.items.slice(0, 4).map(i => i.name)
    }
  }
  return map
}
// ── Region from place names in slug/title/tags (catalogue entries have no region field) ──
const REGION_HINTS: [string, RegExp][] = [
  ['Northern', /ha[- ]?noi|hanoi|hà nội|hai[- ]?phong|hải phòng|nam[- ]?dinh|ninh[- ]?binh|bac[- ]?ninh|ha[- ]?giang|cao[- ]?bang|lang[- ]?son|son[- ]?la|sapa|lao[- ]?cai|thai[- ]?binh|hung[- ]?yen|vinh[- ]?phuc|tam[- ]?dao|ha[- ]?long|quang[- ]?ninh|tu[- ]?lam|dien[- ]?bien|yen[- ]?bai|northern|north/i],
  ['Central', /hue|huế|da[- ]?nang|đà nẵng|hoi[- ]?an|quang[- ]?nam|quang[- ]?ngai|quang[- ]?binh|quang[- ]?tri|binh[- ]?dinh|quy[- ]?nhon|phu[- ]?yen|tuy[- ]?hoa|nha[- ]?trang|khanh[- ]?hoa|phan[- ]?rang|phan[- ]?thiet|nghe[- ]?an|ha[- ]?tinh|thanh[- ]?hoa|kon[- ]?tum|gia[- ]?lai|dak[- ]?lak|buon[- ]?ma|da[- ]?lat|đà lạt|tay[- ]?nguyen|central/i],
  ['Southern', /sai[- ]?gon|saigon|sài gòn|mekong|mien[- ]?tay|can[- ]?tho|ben[- ]?tre|an[- ]?giang|chau[- ]?doc|soc[- ]?trang|tra[- ]?vinh|bac[- ]?lieu|ca[- ]?mau|dong[- ]?thap|vinh[- ]?long|tay[- ]?ninh|phu[- ]?quoc|kien[- ]?giang|long[- ]?xuyen|southern|south/i],
]
function inferRegion(text: string): string {
  for (const [region, re] of REGION_HINTS) if (re.test(text)) return region
  return 'All'
}
