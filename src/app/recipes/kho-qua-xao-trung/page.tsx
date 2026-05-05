'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'kho-qua-xao-trung',
    title: 'Stir-fried Bitter Melon with Eggs (Kho Qua Xao Trung)',
    subtitle: 'Simple Vietnamese stir-fry balancing bitterness of bitter melon with soft scrambled eggs.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.7,
    baseServings: 2,
    heroImage: '/images/recipes/kho-qua-xao-trung.jpg',

    intro: `Khổ qua xào trứng is a classic Vietnamese home dish made from bitter melon (bitter gourd) and eggs stir-fried together.

The dish balances the natural bitterness of the melon with the softness and richness of eggs. It is often considered both a simple comfort food and a “healthy everyday dish” in Vietnamese meals.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 2, name: 'bitter melons', note: 'thinly sliced' },
                { amount: 3, name: 'eggs' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'pinch', name: 'black pepper' },
                { amount: 1, unit: 'tbsp', name: 'oil' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare bitter melon',
            description: 'Slice bitter melon thinly and soak in salted water for 10–15 minutes to reduce bitterness.',
            tip: 'The thinner the slices, the less bitter the taste.',
        },
        {
            title: 'Prepare eggs',
            description: 'Beat eggs lightly with a pinch of salt and pepper.',
        },
        {
            title: 'Sauté garlic',
            description: 'Heat oil in a pan and sauté garlic until fragrant.',
        },
        {
            title: 'Cook bitter melon',
            description: 'Add bitter melon and stir-fry for 3–5 minutes until slightly softened.',
        },
        {
            title: 'Add eggs',
            description: 'Pour eggs into the pan and stir gently until just set.',
            tip: 'Do not overcook eggs to keep them soft and fluffy.',
        },
        {
            title: 'Season & finish',
            description: 'Add fish sauce, sugar, and adjust seasoning. Stir well and serve hot.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
