'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-rim-man-ngot',
    title: 'Sweet & Savory Caramelized Shrimp (Tom Rim Man Ngot)',
    subtitle: 'Glossy, sticky, and deeply flavorful shrimp coated in a sweet-savory caramel sauce.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 3,
    heroImage: '/images/recipes/tom-rim-man-ngot.jpg',

    intro: `Tôm rim mặn ngọt is a classic Vietnamese home-cooked dish where shrimp are simmered in a glossy caramel sauce made from fish sauce, sugar, and aromatics.

The result is a perfect balance of salty, sweet, and umami flavors. The shrimp become shiny, slightly chewy, and deeply coated in a rich glaze that clings beautifully to steamed rice.

Simple ingredients, fast cooking, but maximum comfort food energy.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 400, unit: 'g', name: 'shrimp', note: 'peeled and deveined' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'finely chopped' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2.5, unit: 'tbsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'water' },
                { amount: 1, unit: 'tbsp', name: 'oil' },
                { amount: 1, unit: 'pinch', name: 'black pepper' },
            ],
        },
    ],

    steps: [
        {
            title: 'Make caramel base',
            description: 'Heat oil in a pan over medium heat. Add sugar and cook until it melts and turns light amber.',
            tip: 'Do not burn the caramel — it should be golden, not dark brown.',
        },
        {
            title: 'Aromatics',
            description: 'Add garlic and shallots, stir quickly until fragrant.',
        },
        {
            title: 'Cook shrimp',
            description: 'Add shrimp and stir-fry until they start to turn pink.',
        },
        {
            title: 'Add seasoning',
            description: 'Pour in fish sauce and water. Stir well so shrimp are coated evenly in the caramel sauce.',
        },
        {
            title: 'Reduce sauce',
            description: 'Simmer until sauce thickens and becomes glossy, coating the shrimp.',
            tip: 'The sauce should cling to the shrimp like a glaze, not remain watery.',
        },
        {
            title: 'Finish',
            description: 'Add black pepper, toss once more, and serve hot with steamed rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
