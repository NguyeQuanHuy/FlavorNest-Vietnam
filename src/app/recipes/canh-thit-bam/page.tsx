'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-thit-bam',
    title: 'Clear Soup with Minced Pork',
    subtitle:
        'Canh Thịt Băm — a gentle clear broth with minced pork poached into tender flecks, often brightened with winter melon or young mustard greens.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.5,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1600&q=80',
    intro:
        'Canh thịt băm is the soup Vietnamese mothers make when they want something easy, comforting, and respectful of a small budget. It rarely makes it into cookbooks, and yet it probably appears on more Vietnamese dinner tables than any celebrated pho or bún. Unshowy, deeply home-cooking, and proof that the quietest dishes are often the ones that define a cuisine.',
    ingredientSections: [
        {
            title: 'Broth and pork',
            items: [
                { amount: 1.2, unit: 'L', name: 'water or light pork stock' },
                { amount: 200, unit: 'g', name: 'minced pork', note: '20% fat' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sea salt' },
                { amount: 0.25, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Vegetable (pick one)',
            items: [
                { amount: 400, unit: 'g', name: 'winter melon', note: 'peeled, cut in 2cm cubes' },
                { amount: 300, unit: 'g', name: 'young mustard greens', note: 'chopped — alternative' },
                { amount: 300, unit: 'g', name: 'bottle gourd', note: 'peeled, sliced — alternative' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 2, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro', note: 'chopped' },
                { amount: 0.25, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the pork',
            description: 'TODO — mix pork with shallots, fish sauce, salt and white pepper; rest 10 minutes.',
        },
        {
            title: 'Prep the vegetable',
            description: 'TODO — peel and cube winter melon (or slice your chosen vegetable) while pork marinates.',
        },
        {
            title: 'Poach the pork into flecks',
            description: 'TODO — bring water to a simmer, drop pork in small pinches while stirring so it cooks into tender flecks.',
            tip: 'TODO — dumping the pork in one clump gives you a meatball, not a flecked broth.',
        },
        {
            title: 'Skim carefully',
            description: 'TODO — skim foam for 2 minutes until broth runs clear.',
        },
        {
            title: 'Simmer with the vegetable',
            description: 'TODO — add winter melon (or your chosen veg), simmer 8 minutes until tender but not collapsed.',
        },
        {
            title: 'Season and serve',
            description: 'TODO — adjust fish sauce; scatter spring onion, cilantro and pepper; serve alongside rice and a salty main.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
