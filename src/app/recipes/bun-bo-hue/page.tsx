'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-bo-hue',
    title: 'Bun Bo Hue (Vietnamese Spicy Beef Noodle Soup)',
    subtitle: 'Rich, spicy, and deeply aromatic beef noodle soup from Hue — bold lemongrass broth with tender meat and pork hock.',
    category: 'SOUP',
    difficulty: 'Hard',
    totalTime: '120 min',
    rating: 5.0,
    baseServings: 6,
    heroImage: '/images/recipes/bun-bo-hue.jpg',

    intro: `Bún bò Huế is a famous Vietnamese noodle soup originating from Hue, known for its bold, spicy, and aromatic broth.

The broth is simmered for hours using beef bones, pork hocks, lemongrass, and fermented shrimp paste (mắm ruốc), creating a deep umami flavor with a signature spicy kick.

Served with thick rice noodles, slices of beef, pork, and fresh herbs, it is one of Vietnam’s most iconic and complex noodle dishes.`,

    ingredientSections: [
        {
            title: 'Broth base',
            items: [
                { amount: 1.5, unit: 'kg', name: 'beef bones' },
                { amount: 500, unit: 'g', name: 'pork hock' },
                { amount: 4, name: 'lemongrass stalks', note: 'crushed' },
                { amount: 1, name: 'onion', note: 'charred' },
                { amount: 1, name: 'ginger knob', note: 'charred' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fermented shrimp paste (mắm ruốc)' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'salt' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'chili oil' },
            ],
        },
        {
            title: 'Noodles & toppings',
            items: [
                { amount: 600, unit: 'g', name: 'thick rice noodles (bún bò)' },
                { amount: 200, unit: 'g', name: 'beef slices' },
                { amount: 200, unit: 'g', name: 'pork slices' },
                { amount: 1, name: 'Vietnamese herbs', note: 'mint, basil, banana flower' },
                { amount: 2, name: 'lime' },
                { amount: 2, name: 'chilies', note: 'sliced' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare bones',
            description: 'Blanch beef bones and pork hock to remove impurities, then rinse clean.',
        },
        {
            title: 'Simmer broth',
            description: 'Simmer bones with lemongrass, charred onion, and ginger for at least 90 minutes.',
            tip: 'Slow simmering is essential for deep, clear broth.',
        },
        {
            title: 'Season broth',
            description: 'Add mắm ruốc, fish sauce, sugar, and salt. Adjust seasoning carefully for balance.',
            tip: 'Mắm ruốc is the soul of Bún bò Huế — use carefully but don’t skip it.',
        },
        {
            title: 'Prepare toppings',
            description: 'Slice beef and pork. Blanch briefly if needed. Cook noodles separately.',
        },
        {
            title: 'Assemble bowl',
            description: 'Place noodles in bowl, add meat, then ladle hot broth over.',
        },
        {
            title: 'Finish',
            description: 'Top with herbs, chili, and lime. Serve immediately while steaming hot.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
