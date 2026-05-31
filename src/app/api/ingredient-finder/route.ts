import { NextRequest, NextResponse } from 'next/server';
import { getAllRecipes } from '@/data/index';

// Map ingredient names sang keywords de match voi recipe tags/description
const INGREDIENT_MAP: Record<string, string[]> = {
  'Pork': ['pork', 'pork belly', 'nem', 'bun cha', 'thit'],
  'Chicken': ['chicken', 'ga', 'pho ga'],
  'Beef': ['beef', 'bo', 'pho bo', 'bun bo'],
  'Shrimp': ['shrimp', 'prawn', 'tom', 'seafood'],
  'Fish': ['fish', 'ca', 'seafood', 'cha ca'],
  'Tofu': ['tofu', 'dau hu', 'bun dau'],
  'Eggs': ['egg', 'trung', 'omelette'],
  'Crab': ['crab', 'cua', 'seafood'],
  'Rice': ['rice', 'com', 'fried rice', 'com tam'],
  'Rice Noodles': ['noodle', 'pho', 'bun', 'vermicelli', 'rice noodle'],
  'Egg Noodles': ['noodle', 'mi', 'egg noodle'],
  'Vermicelli': ['vermicelli', 'bun', 'noodle'],
  'Glass Noodles': ['glass noodle', 'mien', 'noodle'],
  'Bread': ['bread', 'banh mi', 'baguette'],
  'Bean Sprouts': ['bean sprout', 'gia', 'fresh'],
  'Cabbage': ['cabbage', 'bap cai', 'vegetable'],
  'Morning Glory': ['morning glory', 'rau muong', 'vegetable'],
  'Eggplant': ['eggplant', 'ca tim', 'vegetable'],
  'Tomato': ['tomato', 'ca chua', 'soup'],
  'Green Onion': ['green onion', 'scallion', 'hanh la'],
  'Mushroom': ['mushroom', 'nam', 'vegetable'],
  'Garlic': ['garlic', 'toi', 'savory'],
  'Shallots': ['shallot', 'hanh', 'savory'],
  'Lemongrass': ['lemongrass', 'sa', 'bun bo', 'aromatic'],
  'Ginger': ['ginger', 'gung', 'pho', 'aromatic'],
  'Chilli': ['chilli', 'spicy', 'ot', 'hot'],
  'Galangal': ['galangal', 'rieng', 'aromatic'],
  'Fish Sauce': ['fish sauce', 'nuoc mam', 'savory', 'caramel'],
  'Soy Sauce': ['soy', 'savory'],
  'Oyster Sauce': ['oyster sauce', 'savory', 'stir fry'],
  'Coconut Milk': ['coconut', 'creamy', 'southern', 'dessert'],
  'Palm Sugar': ['caramel', 'sweet', 'palm sugar', 'rim'],
  'Shrimp Paste': ['shrimp paste', 'mam tom', 'fermented'],
};

function scoreRecipe(recipe: { title: string; description: string; tags: string[]; subtitle: string }, ingredients: string[]): number {
  const haystack = [
    recipe.title,
    recipe.subtitle,
    recipe.description,
    ...recipe.tags,
  ].join(' ').toLowerCase();

  let score = 0;
  for (const ing of ingredients) {
    const keywords = INGREDIENT_MAP[ing] ?? [ing.toLowerCase()];
    for (const kw of keywords) {
      if (haystack.includes(kw.toLowerCase())) {
        score += 20;
        break;
      }
    }
  }
  return Math.min(score, 99);
}

export async function POST(req: NextRequest) {
  const { ingredients } = await req.json();
  if (!ingredients?.length) return NextResponse.json({ suggestions: [] });

  const all = getAllRecipes();

  const scored = all
    .map(r => ({
      slug: r.slug,
      title: r.title,
      subtitle: r.subtitle,
      image: r.image,
      matchScore: scoreRecipe(r, ingredients),
      reason: '',
    }))
    .filter(r => r.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);

  // Gan reason don gian
  const withReason = scored.map(r => ({
    ...r,
    reason: `Matches ${Math.round(r.matchScore / 20)} of your selected ingredients.`,
  }));

  return NextResponse.json({ suggestions: withReason });
}