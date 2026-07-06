'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'thit-rim-tom',
    title: 'Caramelized Pork with Shrimp (Thit Rim Tom)',
    subtitle: 'Sweet-salty braised pork and shrimp simmered in caramel sauce — rich, glossy, and deeply comforting.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 3,
    heroImage: '/images/recipes/thit-rim-tom.jpg',

    intro: `Thịt rim tôm is a classic Vietnamese home-style dish where pork and shrimp are slowly simmered in a caramel fish sauce base.

The result is a glossy, slightly sticky sauce coating tender pork and juicy shrimp — a perfect dish for eating with steamed rice.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 300, unit: 'g', name: 'pork belly', note: 'cut into bite-sized pieces' },
                { amount: 200, unit: 'g', name: 'shrimp', note: 'peeled and deveined' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'shallot', note: 'sliced' },
            ],
        },
        {
            title: 'Caramel sauce',
            items: [
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 100, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
            ],
        },
    ],

    steps: [
        {
            title: 'Make caramel base',
            description: 'Heat sugar in a pan until it melts and turns golden brown.',
            tip: 'Do not burn the sugar — stop at deep amber color.',
        },
        {
            title: 'Add aromatics',
            description: 'Add garlic and shallots, stir quickly until fragrant.',
        },
        {
            title: 'Cook pork',
            description: 'Add pork belly and stir to coat with caramel sauce.',
        },
        {
            title: 'Simmer pork',
            description: 'Add water, fish sauce, and soy sauce. Simmer until pork becomes tender and sauce thickens.',
        },
        {
            title: 'Add shrimp',
            description: 'Add shrimp in the last 5 minutes of cooking to avoid overcooking.',
        },
        {
            title: 'Reduce sauce',
            description: 'Cook until sauce becomes glossy and slightly thick.',
        },
        {
            title: 'Finish',
            description: 'Sprinkle black pepper and serve hot with steamed rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
