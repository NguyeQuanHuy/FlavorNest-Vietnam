'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-trung-ca-chua',
    title: 'Tomato Egg Soup (Canh Trung Ca Chua)',
    subtitle: 'Light, comforting Vietnamese tomato soup with silky egg ribbons — simple, fast, and nourishing.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.8,
    baseServings: 2,
    heroImage: '/images/recipes/canh-trung-ca-chua.jpg',

    intro: `Canh trứng cà chua is a simple Vietnamese home-style soup made with tomatoes and eggs.

The dish is known for its light, tangy broth and soft egg ribbons that float gently in the soup. It is quick to cook, budget-friendly, and commonly served with steamed rice in everyday meals.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 3, name: 'eggs' },
                { amount: 3, name: 'tomatoes', note: 'quartered' },
                { amount: 1, name: 'spring onion', note: 'chopped' },
            ],
        },
        {
            title: 'Broth',
            items: [
                { amount: 500, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'oil' },
            ],
        },
    ],

    steps: [
        {
            title: 'Cook tomatoes',
            description: 'Heat oil in a pot and sauté tomatoes until they soften and release color.',
        },
        {
            title: 'Make broth',
            description: 'Add water and bring to a gentle boil. Season with fish sauce, salt, and sugar.',
            tip: 'Balanced seasoning is key — slightly sour-sweet is ideal.',
        },
        {
            title: 'Create egg ribbons',
            description: 'Beat eggs and slowly pour into boiling soup while stirring gently.',
            tip: 'Pour in a thin stream to form silky egg strands.',
        },
        {
            title: 'Finish',
            description: 'Add spring onions and adjust seasoning if needed.',
        },
        {
            title: 'Serve',
            description: 'Serve hot with steamed rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
