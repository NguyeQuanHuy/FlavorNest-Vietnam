import { NextRequest, NextResponse } from 'next/server';
import { getAllRecipes } from '@/data/index';

const INGREDIENT_MAP: Record<string, string[]> = {
  'Pork': ['pork', 'nem', 'bun cha', 'thit heo', 'char siu', 'pork belly', 'pork bone', 'suon', 'cha lua'],
  'Chicken': ['chicken', 'pho ga', 'com ga', 'ga'],
  'Beef': ['beef', 'pho bo', 'bun bo', 'bo luc lac', 'steak'],
  'Shrimp': ['shrimp', 'prawn', 'tom rim', 'tom', 'caramelised savory shrimp', 'seafood'],
  'Fish': ['fish', 'cha ca', 'fish cake', 'banh mi cha ca', 'ca kho', 'fish sauce caramel', 'grilled fish', 'fish fillet', 'seafood', 'tuna', 'salmon', 'cod', 'tilapia'],
  'Tofu': ['tofu', 'dau hu', 'bun dau', 'fried tofu'],
  'Eggs': ['egg', 'trung', 'omelette', 'caramelised pork', 'thit kho'],
  'Crab': ['crab', 'cua', 'seafood', 'bun rieu'],
  'Rice': ['fried rice', 'com tam', 'com chien', 'steamed rice', 'rice bowl', 'yangzhou'],
  'Rice Noodles': ['pho', 'bun bo', 'bun cha', 'banh canh', 'rice noodle', 'noodle soup'],
  'Egg Noodles': ['mi quang', 'egg noodle', 'wonton noodle'],
  'Vermicelli': ['bun dau', 'bun thit nuong', 'vermicelli', 'bun'],
  'Glass Noodles': ['mien ga', 'glass noodle', 'mien'],
  'Bread': ['banh mi', 'baguette', 'sandwich'],
  'Bean Sprouts': ['pho', 'bun bo', 'fresh herb', 'bean sprout'],
  'Cabbage': ['cabbage', 'bap cai', 'stir fry', 'salad'],
  'Morning Glory': ['morning glory', 'rau muong', 'stir fry'],
  'Eggplant': ['eggplant', 'ca tim'],
  'Tomato': ['tomato', 'canh chua', 'sour soup', 'ribs'],
  'Green Onion': ['green onion', 'scallion', 'pho', 'garnish'],
  'Mushroom': ['mushroom', 'nam', 'stir fry', 'vegetarian'],
  'Garlic': ['garlic', 'stir fry', 'caramel', 'savory'],
  'Shallots': ['shallot', 'pho', 'caramel', 'dipping'],
  'Lemongrass': ['lemongrass', 'bun bo hue', 'grilled', 'nem nuong', 'la vong'],
  'Ginger': ['ginger', 'pho', 'pho bo', 'pho ga', 'braised'],
  'Chilli': ['spicy', 'bun bo hue', 'dipping', 'chilli'],
  'Galangal': ['galangal', 'la vong', 'grilled fish'],
  'Fish Sauce': ['caramel', 'dipping sauce', 'nuoc cham', 'braised', 'rim'],
  'Soy Sauce': ['stir fry', 'soy', 'braised'],
  'Oyster Sauce': ['stir fry', 'oyster', 'morning glory'],
  'Coconut Milk': ['coconut', 'banh flan', 'dessert', 'southern curry', 'che'],
  'Palm Sugar': ['caramel', 'tom rim', 'thit kho', 'sweet', 'dessert'],
  'Shrimp Paste': ['bun dau', 'mam tom', 'bun bo hue', 'shrimp paste'],
};

function scoreRecipe(
  recipe: { title: string; description: string; tags: string[]; subtitle: string },
  ingredients: string[]
): number {
  const haystack = [recipe.title, recipe.subtitle, recipe.description, ...recipe.tags]
    .join(' ')
    .toLowerCase();

  let score = 0;
  for (const ing of ingredients) {
    const keywords = INGREDIENT_MAP[ing] ?? [ing.toLowerCase()];
    // Exact title/subtitle match = cao diem nhat
    const titleHaystack = (recipe.title + ' ' + recipe.subtitle).toLowerCase();
    let matched = false;
    for (const kw of keywords) {
      if (titleHaystack.includes(kw.toLowerCase())) {
        score += 40;
        matched = true;
        break;
      }
    }
    if (!matched) {
      for (const kw of keywords) {
        if (haystack.includes(kw.toLowerCase())) {
          score += 20;
          break;
        }
      }
    }
  }
  return Math.min(score, 99);
}

function getReason(recipe: { title: string; subtitle: string }, ingredients: string[]): string {
  const matched = ingredients.filter(ing => {
    const keywords = INGREDIENT_MAP[ing] ?? [ing.toLowerCase()];
    const haystack = (recipe.title + ' ' + recipe.subtitle).toLowerCase();
    return keywords.some(kw => haystack.includes(kw.toLowerCase()));
  });
  if (matched.length > 0) return `This dish uses ${matched.join(', ')} as a key ingredient.`;
  return `Contains ${ingredients.slice(0, 2).join(' and ')} among its ingredients.`;
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
      reason: getReason(r, ingredients),
    }))
    .filter(r => r.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);

  return NextResponse.json({ suggestions: scored });
}