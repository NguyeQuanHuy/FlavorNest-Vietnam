'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-nuong-trui',
    title: 'Straw-Grilled Fish (Ca Nuong Trui)',
    subtitle: 'Rustic, smoky, and deeply aromatic — whole fish roasted in straw fire until the skin turns charred and fragrant.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/ca-nuong-trui.jpg',

    intro: `Cá nướng trui is a traditional rural Vietnamese dish where whole fish is grilled directly in straw fire until the skin is charred and smoky.

No heavy seasoning is needed — just fresh fish and fire. The straw burns quickly, sealing in moisture while creating a smoky crust. The result is tender, juicy fish with a deep, earthy aroma.

Often eaten in the countryside, the fish is peeled open at the table and served with rice paper, herbs, and dipping sauce.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 1, name: 'whole fish', note: 'snakehead fish or tilapia, cleaned' },
                { amount: 1, name: 'bundle straw', note: 'for grilling' },
                { amount: 1, name: 'banana leaves', note: 'optional for serving' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'rice paper sheets' },
                { amount: 1, name: 'bunch fresh herbs', note: 'mint, basil, perilla' },
                { amount: 1, name: 'cucumber', note: 'sliced' },
                { amount: 120, unit: 'ml', name: 'fish sauce dipping sauce' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare the fish',
            description: 'Clean the fish thoroughly but do not cut open the belly. Keep it whole for traditional straw grilling.',
        },
        {
            title: 'Wrap and prepare straw',
            description: 'Place fish in a bundle of dry straw, fully covering it.',
            tip: 'Straw burns fast and creates intense heat, sealing moisture inside the fish.',
        },
        {
            title: 'Grill the fish',
            description: 'Set the straw on fire and let it burn completely. Turn carefully so the fish cooks evenly inside the flames.',
        },
        {
            title: 'Check doneness',
            description: 'When the straw has burned out, the fish skin should be charred and the flesh inside fully cooked and juicy.',
        },
        {
            title: 'Serve',
            description: 'Peel off the burnt skin, reveal the steaming fish, and serve with rice paper, herbs, and dipping sauce.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
