'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-chien-cua',
    title: 'Crab Fried Rice (Com Chien Cua)',
    subtitle: 'Fragrant fried rice with sweet crab meat, eggs, and aromatics — simple, rich, and restaurant-style.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/com-chien-cua.jpg',

    intro: `Cơm chiên cua is a flavorful Vietnamese fried rice dish made with fresh crab meat, eggs, and aromatic seasoning.

The dish is light yet rich in umami, with sweet crab meat blending perfectly into fluffy fried rice. It is often served in restaurants but can be easily made at home.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 2, unit: 'cups', name: 'cooked rice', note: 'preferably overnight rice' },
                { amount: 150, unit: 'g', name: 'crab meat' },
                { amount: 2, name: 'eggs' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'spring onion', note: 'chopped' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'white pepper' },
                { amount: 1, unit: 'tbsp', name: 'oil' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare rice',
            description: 'Use cold, overnight rice to prevent sticking and achieve fluffy texture.',
        },
        {
            title: 'Cook eggs',
            description: 'Scramble eggs lightly in hot oil and set aside.',
        },
        {
            title: 'Sauté garlic',
            description: 'Heat oil and sauté garlic until fragrant.',
        },
        {
            title: 'Add rice',
            description: 'Add rice and stir-fry on high heat until grains are separated.',
            tip: 'High heat is key for “wok aroma”.',
        },
        {
            title: 'Add crab meat',
            description: 'Gently fold crab meat into rice to avoid breaking it too much.',
        },
        {
            title: 'Season',
            description: 'Add fish sauce, soy sauce, sugar, and white pepper. Mix well.',
        },
        {
            title: 'Finish',
            description: 'Add eggs and spring onion, stir quickly and serve hot.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
