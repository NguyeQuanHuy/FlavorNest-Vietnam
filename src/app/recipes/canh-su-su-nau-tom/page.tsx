'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-su-su-nau-tom',
    title: 'Chayote and Shrimp Soup (Canh Su Su Nau Tom)',
    subtitle: 'Light, sweet Vietnamese soup made with chayote and fresh shrimp — simple, refreshing, and naturally sweet.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.8,
    baseServings: 2,
    heroImage: '/images/recipes/canh-su-su-nau-tom.jpg',

    intro: `Canh su su nấu tôm is a light Vietnamese home-style soup made with chayote (su su) and fresh shrimp.

The dish is known for its naturally sweet broth from both vegetables and seafood, making it refreshing, easy to digest, and perfect for everyday family meals.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 2, name: 'chayote (su su)', note: 'peeled and sliced' },
                { amount: 150, unit: 'g', name: 'shrimp', note: 'peeled and deveined' },
                { amount: 1, name: 'spring onion', note: 'chopped' },
                { amount: 1, name: 'garlic clove', note: 'minced' },
            ],
        },
        {
            title: 'Broth seasoning',
            items: [
                { amount: 500, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'pepper' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare shrimp',
            description: 'Clean shrimp, remove shells and devein. Lightly season with salt and pepper.',
        },
        {
            title: 'Sauté garlic',
            description: 'Heat a little oil and sauté garlic until fragrant.',
        },
        {
            title: 'Cook shrimp',
            description: 'Add shrimp and stir briefly until they turn pink, then set aside.',
        },
        {
            title: 'Make broth',
            description: 'Add water to the pot and bring to a boil.',
        },
        {
            title: 'Cook chayote',
            description: 'Add sliced chayote and simmer until slightly tender.',
            tip: 'Do not overcook to keep a slight crunch.',
        },
        {
            title: 'Combine',
            description: 'Return shrimp to the pot and season with fish sauce, salt, sugar, and pepper.',
        },
        {
            title: 'Finish',
            description: 'Add spring onions and serve hot.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
