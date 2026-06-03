// src/components/seo/RecipeSchema.tsx
import type { UnifiedRecipe } from '@/data/index'

export function RecipeSchema({ recipe }: { recipe: UnifiedRecipe }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description,
    image: [recipe.image],
    author: {
      '@type': 'Person',
      name: 'Huy Nguyễn',
      url: 'https://flavor-nest-vietnam.vercel.app/about',
    },
    datePublished: '2025-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    prepTime: 'PT20M',
    cookTime: 'PT40M',
    totalTime: `PT${recipe.time.replace(' min','').replace(' hrs','')}`,
    recipeYield: '4 servings',
    recipeCategory: recipe.category,
    recipeCuisine: 'Vietnamese',
    keywords: recipe.tags.join(', '),
    recipeIngredient: [], // thêm khi có data
    recipeInstructions: [],
    nutrition: recipe.cal ? {
      '@type': 'NutritionInformation',
      calories: `${recipe.cal} calories`,
    } : undefined,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: recipe.rating,
      ratingCount: recipe.reviews,
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
