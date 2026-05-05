'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'suon-rim-trung-cut',
    title: 'Braised Pork Ribs with Quail Eggs (Suon Rim Trung Cut)',
    subtitle: 'Tender pork ribs braised in a savory-sweet caramel sauce with soft quail eggs — rich, glossy, and comforting.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '60 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/suon-rim-trung-cut.jpg',

    intro: `Sườn rim trứng cút is a classic Vietnamese home-style dish featuring pork ribs slowly braised in a caramelized fish sauce base with quail eggs.

The ribs become tender and flavorful as they absorb the sweet-salty glaze, while the quail eggs soak up the rich sauce, creating a comforting and deeply satisfying dish often served with steamed rice.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 500, unit: 'g', name: 'pork ribs' },
                { amount: 10, name: 'quail eggs', note: 'boiled and peeled' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'sliced' },
            ],
        },
        {
            title: 'Braising sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 200, unit: 'ml', name: 'coconut water or water' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare ingredients',
            description: 'Boil quail eggs, peel them, and cut pork ribs into bite-sized pieces.',
        },
        {
            title: 'Caramel base',
            description: 'Heat sugar in a pot until it turns amber brown to create caramel sauce.',
            tip: 'Do not burn the sugar — it turns bitter quickly.',
        },
        {
            title: 'Sear ribs',
            description: 'Add pork ribs into caramel and stir until lightly coated and browned.',
        },
        {
            title: 'Add seasoning',
            description: 'Add fish sauce, soy sauce, garlic, shallots, and black pepper.',
        },
        {
            title: 'Braise',
            description: 'Pour in coconut water or water and simmer until ribs become tender.',
            tip: 'Slow cooking is key for soft, flavorful ribs.',
        },
        {
            title: 'Add quail eggs',
            description: 'Add quail eggs and continue simmering until they absorb the sauce.',
        },
        {
            title: 'Finish',
            description: 'Reduce sauce until thick and glossy. Serve hot with rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
