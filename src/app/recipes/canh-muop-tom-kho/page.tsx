'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-muop-tom-kho',
    title: 'Loofah Soup with Dried Shrimp (Canh Muop Tom Kho)',
    subtitle: 'Light Vietnamese soup with tender loofah and sweet dried shrimp — simple, refreshing, and aromatic.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.8,
    baseServings: 3,
    heroImage: '/images/recipes/canh-muop-tom-kho.jpg',

    intro: `Canh mướp tôm khô is a traditional Vietnamese home soup made with loofah (mướp) and dried shrimp (tôm khô).

The dish is light, naturally sweet, and fragrant. The dried shrimp gives a deep umami flavor while the loofah becomes soft and silky when cooked.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 2, name: 'loofah (mướp)', note: 'peeled and sliced' },
                { amount: 30, unit: 'g', name: 'dried shrimp (tôm khô)', note: 'soaked in warm water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'spring onion', note: 'chopped' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'pinch', name: 'pepper' },
                { amount: 700, unit: 'ml', name: 'water' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare dried shrimp',
            description: 'Soak dried shrimp in warm water for 10–15 minutes until soft.',
        },
        {
            title: 'Sauté garlic',
            description: 'Heat a little oil and sauté garlic until fragrant.',
        },
        {
            title: 'Cook dried shrimp',
            description: 'Add soaked dried shrimp and stir briefly to release aroma.',
        },
        {
            title: 'Add water',
            description: 'Pour in water and bring to a boil.',
        },
        {
            title: 'Add loofah',
            description: 'Add sliced loofah and simmer until just soft.',
            tip: 'Do not overcook — loofah should stay slightly firm and green.',
        },
        {
            title: 'Season',
            description: 'Add fish sauce, salt, sugar, and pepper. Adjust to taste.',
        },
        {
            title: 'Finish',
            description: 'Add spring onion and serve hot.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
