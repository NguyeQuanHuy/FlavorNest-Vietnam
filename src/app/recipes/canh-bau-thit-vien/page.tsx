'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-bau-thit-vien',
    title: 'Bottle Gourd Soup with Meatballs (Canh Bau Thit Vien)',
    subtitle: 'Light Vietnamese soup with soft pork meatballs and tender bottle gourd — refreshing, simple, and homey.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.8,
    baseServings: 3,
    heroImage: '/images/recipes/canh-bau-thit-vien.jpg',

    intro: `Canh bầu thịt viên is a traditional Vietnamese home soup made with bottle gourd (bầu) and pork meatballs.

The soup is light, refreshing, and naturally sweet from the vegetable, while the meatballs add savory depth and softness. It is commonly served with steamed rice in daily family meals.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 400, unit: 'g', name: 'bottle gourd (bầu)', note: 'peeled and sliced' },
                { amount: 200, unit: 'g', name: 'ground pork' },
                { amount: 1, name: 'egg white', note: 'optional for softness' },
                { amount: 2, name: 'spring onion', note: 'chopped' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
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
            title: 'Prepare meatballs',
            description: 'Mix ground pork with garlic, fish sauce, pepper, and egg white. Form into small balls.',
            tip: 'Egg white makes meatballs softer and smoother.',
        },
        {
            title: 'Sauté garlic',
            description: 'Heat a little oil and sauté garlic until fragrant.',
        },
        {
            title: 'Cook broth',
            description: 'Add water and bring to a gentle boil.',
        },
        {
            title: 'Add meatballs',
            description: 'Drop meatballs into boiling water and cook until they float.',
        },
        {
            title: 'Add bottle gourd',
            description: 'Add sliced bottle gourd and simmer until just tender.',
            tip: 'Do not overcook to keep natural sweetness and light crunch.',
        },
        {
            title: 'Season',
            description: 'Add fish sauce, salt, sugar, and pepper to taste.',
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
