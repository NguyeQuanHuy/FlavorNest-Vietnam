'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-khoai-mo',
    title: 'Purple Yam Soup (Canh Khoai Mo)',
    subtitle: 'Creamy Vietnamese purple yam soup with minced meat — soft, velvety, and naturally sweet.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.8,
    baseServings: 3,
    heroImage: '/images/recipes/canh-khoai-mo.jpg',

    intro: `Canh khoai mỡ is a traditional Vietnamese soup made from purple yam (khoai mỡ), often combined with minced pork or shrimp.

The soup has a naturally creamy and slightly sticky texture, with a gentle sweetness that makes it very comforting and easy to eat with rice.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 300, unit: 'g', name: 'purple yam (khoai mỡ)', note: 'peeled and grated' },
                { amount: 150, unit: 'g', name: 'minced pork or shrimp' },
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
                { amount: 600, unit: 'ml', name: 'water' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare protein',
            description: 'Marinate minced pork or shrimp with a pinch of salt and pepper.',
        },
        {
            title: 'Sauté garlic',
            description: 'Heat oil and sauté garlic until fragrant.',
        },
        {
            title: 'Cook protein',
            description: 'Add minced meat or shrimp and stir-fry until just cooked.',
        },
        {
            title: 'Add water',
            description: 'Pour in water and bring to a boil.',
        },
        {
            title: 'Add yam',
            description: 'Add grated purple yam and stir well to avoid lumps.',
            tip: 'Stir continuously to create a smooth, slightly thick texture.',
        },
        {
            title: 'Season',
            description: 'Add fish sauce, salt, sugar, and pepper. Adjust taste.',
        },
        {
            title: 'Finish',
            description: 'Simmer until soup becomes creamy and slightly sticky. Add spring onion before serving.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
