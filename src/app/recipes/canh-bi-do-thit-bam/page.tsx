'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-bi-do-thit-bam',
    title: 'Pumpkin Soup with Minced Pork (Canh Bi Do Thit Bam)',
    subtitle: 'Soft pumpkin simmered with minced pork in a light, naturally sweet Vietnamese soup.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 3,
    heroImage: '/images/recipes/canh-bi-do-thit-bam.jpg',

    intro: `Canh bí đỏ thịt bằm is a classic Vietnamese home-style soup made with pumpkin and minced pork.

The soup is naturally sweet, soft in texture, and very easy to eat with rice. It is often cooked in daily family meals because it is simple, nutritious, and comforting.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 400, unit: 'g', name: 'pumpkin (bí đỏ)', note: 'peeled and cut into chunks' },
                { amount: 200, unit: 'g', name: 'minced pork' },
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
            title: 'Prepare pumpkin',
            description: 'Peel pumpkin and cut into bite-sized chunks.',
        },
        {
            title: 'Sauté garlic',
            description: 'Heat a little oil and sauté garlic until fragrant.',
        },
        {
            title: 'Cook minced pork',
            description: 'Add minced pork and stir until it separates and is lightly cooked.',
        },
        {
            title: 'Add water',
            description: 'Pour in water and bring to a boil.',
        },
        {
            title: 'Add pumpkin',
            description: 'Add pumpkin and simmer until soft and slightly creamy.',
            tip: 'Do not overcook too early to keep some texture.',
        },
        {
            title: 'Season',
            description: 'Add fish sauce, salt, sugar, and pepper. Adjust to taste.',
        },
        {
            title: 'Finish',
            description: 'Add spring onion and serve hot with rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
