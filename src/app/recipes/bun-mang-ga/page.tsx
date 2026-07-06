'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-mang-ga',
    title: 'Chicken Bamboo Shoot Noodle Soup (Bun Mang Ga)',
    subtitle: 'Light, aromatic chicken broth with tender bamboo shoots and rice noodles — a comforting Vietnamese soup.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '90 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/bun-mang-ga.jpg',

    intro: `Bún măng  is a traditional Vietnamese noodle soup made with chicken, bamboo shoots, and clear aromatic broth.

The dish balances the sweetness of chicken bones with the earthy crunch of bamboo shoots. It is often enjoyed as a light but nourishing meal, especially in family gatherings or casual lunches.`,

    ingredientSections: [
        {
            title: 'Broth base',
            items: [
                { amount: 1.2, unit: 'kg', name: 'whole chicken', note: 'cut into pieces' },
                { amount: 2, name: 'ginger knobs', note: 'smashed' },
                { amount: 3, name: 'shallots', note: 'charred' },
                { amount: 2, name: 'spring onions', note: 'tied knot' },
            ],
        },
        {
            title: 'Bamboo shoots',
            items: [
                { amount: 300, unit: 'g', name: 'bamboo shoots', note: 'boiled and sliced' },
                { amount: 1, unit: 'tbsp', name: 'salt', note: 'for boiling bamboo shoots' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 400, unit: 'g', name: 'rice noodles (bún)' },
                { amount: 1, name: 'fresh herbs', note: 'mint, cilantro, banana blossom' },
                { amount: 2, name: 'lime' },
                { amount: 2, name: 'chilies', note: 'sliced' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare chicken',
            description: 'Clean chicken pieces and blanch briefly to remove impurities.',
        },
        {
            title: 'Simmer broth',
            description: 'Simmer chicken with ginger, charred shallots, and spring onion knots for 60–75 minutes.',
            tip: 'Slow simmering keeps the broth clear and naturally sweet.',
        },
        {
            title: 'Prepare bamboo shoots',
            description: 'Boil bamboo shoots multiple times to remove bitterness, then slice thinly.',
            tip: 'Proper boiling removes the natural bitterness completely.',
        },
        {
            title: 'Season broth',
            description: 'Add fish sauce, salt, sugar, and pepper. Adjust to taste.',
        },
        {
            title: 'Cook noodles',
            description: 'Blanch rice noodles in hot water until soft, then drain.',
        },
        {
            title: 'Assemble bowl',
            description: 'Place noodles in bowl, add chicken and bamboo shoots, then pour hot broth over.',
        },
        {
            title: 'Serve',
            description: 'Top with herbs, lime, and chili. Serve immediately while hot.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
