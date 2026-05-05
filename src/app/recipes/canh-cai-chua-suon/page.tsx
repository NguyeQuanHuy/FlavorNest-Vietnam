'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-cai-chua-suon',
    title: 'Sour Mustard Greens Soup with Pork Ribs (Canh Cai Chua Suon)',
    subtitle: 'Tangy fermented mustard greens soup with tender pork ribs — a classic Vietnamese comfort dish.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '75 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/canh-cai-chua-suon.jpg',

    intro: `Canh cải chua sườn is a traditional Vietnamese sour soup made with fermented mustard greens and pork ribs.

The broth has a natural tanginess from the pickled vegetables, balanced with the sweetness of slow-cooked pork ribs. It is a very popular everyday family dish in Vietnam.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 500, unit: 'g', name: 'pork ribs', note: 'cut into pieces' },
                { amount: 300, unit: 'g', name: 'fermented mustard greens (cải chua)' },
                { amount: 2, name: 'tomatoes', note: 'quartered' },
                { amount: 2, name: 'shallots', note: 'sliced' },
            ],
        },
        {
            title: 'Broth seasoning',
            items: [
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'pinch', name: 'pepper' },
                { amount: 1, unit: 'tbsp', name: 'oil' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare ribs',
            description: 'Blanch pork ribs in boiling water to remove impurities, then rinse clean.',
        },
        {
            title: 'Sauté aromatics',
            description: 'Heat oil and sauté shallots until fragrant.',
        },
        {
            title: 'Cook ribs',
            description: 'Add pork ribs and stir briefly until slightly browned.',
        },
        {
            title: 'Simmer broth',
            description: 'Add water and simmer ribs for 45–60 minutes until tender.',
            tip: 'Low heat makes the broth clear and sweet.',
        },
        {
            title: 'Add sour greens',
            description: 'Add fermented mustard greens and tomatoes into the pot.',
        },
        {
            title: 'Season',
            description: 'Add fish sauce, salt, sugar, and pepper. Adjust to balance sour and savory.',
        },
        {
            title: 'Finish',
            description: 'Simmer 5–10 more minutes and serve hot.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
