'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-xao-sa-ot',
    title: 'Lemongrass Chili Chicken (Ga Xao Sa Ot)',
    subtitle: 'Spicy, fragrant, and aromatic — tender chicken stir-fried with lemongrass and chili.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 3,
    heroImage: '/images/recipes/ga-xao-sa-ot.jpg',

    intro: `Gà xào sả ớt is a classic Vietnamese home-style dish known for its bold aroma and spicy kick.

Tender chicken is marinated, then stir-fried with crushed lemongrass, chili, and garlic until fragrant and slightly caramelized. The result is a dish that is spicy, savory, and deeply aromatic — perfect with steamed rice.

The magic lies in the lemongrass: it releases a citrusy fragrance that defines the entire dish.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 500, unit: 'g', name: 'chicken thigh', note: 'boneless, cut into bite-size pieces' },
                { amount: 3, name: 'lemongrass stalks', note: 'finely chopped' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'red chilies', note: 'sliced' },
                { amount: 2, name: 'shallots', note: 'sliced' },
            ],
        },
        {
            title: 'Marinade',
            items: [
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tbsp', name: 'oil' },
            ],
        },
    ],

    steps: [
        {
            title: 'Marinate the chicken',
            description: 'Mix chicken with fish sauce, soy sauce, sugar, pepper, and oil. Let it sit for 15–20 minutes.',
            tip: 'Marinating helps the chicken absorb flavor and stay juicy during stir-frying.',
        },
        {
            title: 'Prepare aromatics',
            description: 'Chop lemongrass finely and mince garlic. Slice chilies and shallots.',
        },
        {
            title: 'Stir-fry aromatics',
            description: 'Heat oil in a pan over high heat. Add garlic, shallots, lemongrass, and chili. Stir until fragrant.',
            tip: 'Lemongrass must be cooked until aromatic but not burnt.',
        },
        {
            title: 'Cook the chicken',
            description: 'Add marinated chicken and stir-fry over high heat until fully cooked and slightly caramelized.',
        },
        {
            title: 'Finish',
            description: 'Taste and adjust seasoning if needed. Serve hot with steamed rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
