'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'sup-mang-ga',
    title: 'Chicken Bamboo Shoot Soup (Sup Mang Ga)',
    subtitle: 'Clear, aromatic chicken soup with bamboo shoots — light, comforting, and deeply Vietnamese.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '90 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/sup-mang-ga.jpg',

    intro: `Súp măng cua is a traditional Vietnamese soup made with tender chicken, bamboo shoots, and a clear, naturally sweet broth.

This dish is often served during family meals or special occasions. The key is a clean broth, fragrant aromatics, and properly prepared bamboo shoots that are soft but still slightly crunchy.`,

    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 1.2, unit: 'kg', name: 'whole chicken', note: 'cut into pieces' },
                { amount: 2, name: 'ginger knobs', note: 'smashed' },
                { amount: 3, name: 'shallots', note: 'charred' },
                { amount: 2, name: 'spring onions' },
            ],
        },
        {
            title: 'Bamboo shoots',
            items: [
                { amount: 300, unit: 'g', name: 'bamboo shoots', note: 'boiled & sliced' },
                { amount: 1, unit: 'tbsp', name: 'salt', note: 'for boiling bamboo shoots' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'fresh herbs', note: 'cilantro, scallions' },
                { amount: 2, name: 'lime' },
                { amount: 2, name: 'chilies' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare chicken',
            description: 'Clean chicken and blanch briefly to remove impurities for a clear broth.',
        },
        {
            title: 'Simmer broth',
            description: 'Simmer chicken with ginger, charred shallots, and spring onions for 60–75 minutes.',
            tip: 'Keep heat low to maintain a clear, sweet broth.',
        },
        {
            title: 'Prepare bamboo shoots',
            description: 'Boil bamboo shoots several times to remove bitterness, then slice thinly.',
            tip: 'This step is essential to avoid sour or bitter taste.',
        },
        {
            title: 'Season broth',
            description: 'Add fish sauce, salt, sugar, and white pepper. Adjust to balance savory and light sweetness.',
        },
        {
            title: 'Combine',
            description: 'Add bamboo shoots into the broth and simmer for another 10–15 minutes.',
        },
        {
            title: 'Serve',
            description: 'Serve hot with herbs, lime, and chili on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
