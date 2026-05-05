'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-xao',
    title: 'Stir-fried Squid (Muc Xao)',
    subtitle: 'Tender squid stir-fried with garlic, vegetables, and savory sauce — quick, fresh, and aromatic.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.8,
    baseServings: 2,
    heroImage: '/images/recipes/muc-xao.jpg',

    intro: `Mực xào is a quick and flavorful Vietnamese seafood dish made with fresh squid stir-fried with garlic, vegetables, and savory seasonings.

The key to this dish is high heat and short cooking time to keep the squid tender and slightly crispy, not rubbery.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 300, unit: 'g', name: 'fresh squid', note: 'cleaned and sliced' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'onion', note: 'sliced' },
                { amount: 1, name: 'bell pepper', note: 'optional' },
                { amount: 1, name: 'spring onion' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'oil' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare squid',
            description: 'Clean squid thoroughly, score lightly, and cut into bite-sized pieces.',
            tip: 'Dry squid well to avoid excess water when stir-frying.',
        },
        {
            title: 'Heat pan',
            description: 'Heat oil in a wok or pan until very hot.',
        },
        {
            title: 'Sauté aromatics',
            description: 'Add garlic and onion, stir until fragrant.',
        },
        {
            title: 'Stir-fry squid',
            description: 'Add squid and stir-fry quickly over high heat for 2–3 minutes.',
            tip: 'Do not overcook — squid becomes rubbery if cooked too long.',
        },
        {
            title: 'Add vegetables',
            description: 'Add bell peppers and spring onions, stir quickly.',
        },
        {
            title: 'Season',
            description: 'Add fish sauce, oyster sauce, soy sauce, and sugar. Toss well.',
        },
        {
            title: 'Serve',
            description: 'Serve immediately while hot with steamed rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
