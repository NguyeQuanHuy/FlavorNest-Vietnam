'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nuoc-rau-ma',
    title: 'Vietnamese Pennywort Juice (Nuoc Rau Ma)',
    subtitle: 'Earthy, refreshing, and naturally cooling — a green herbal drink from Vietnamese street culture.',
    category: 'DRINK',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/nuoc-rau-ma.jpg',

    intro: `:contentReference[oaicite:1]{index=1} is one of Vietnam’s most iconic herbal drinks. Made from fresh pennywort leaves, it has a naturally earthy, slightly grassy flavor with a clean, cooling finish.

Often sold on street corners and markets, this bright green drink is believed to help cool the body and support hydration in hot weather. Blended fresh and lightly sweetened, it is both a traditional remedy and a daily refreshment.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 200, unit: 'g', name: 'fresh pennywort leaves (rau má)' },
                { amount: 500, unit: 'ml', name: 'cold water' },
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'adjust to taste' },
                { amount: 1, name: 'pinch salt', note: 'optional, enhances flavor' },
            ],
        },
        {
            title: 'Optional variations',
            items: [
                { amount: 100, unit: 'ml', name: 'coconut water', note: 'for smoother taste' },
                { amount: 2, unit: 'tbsp', name: 'condensed milk', note: 'for creamy version' },
            ],
        },
    ],

    steps: [
        {
            title: 'Clean the herbs',
            description: 'Wash pennywort leaves thoroughly to remove dirt and impurities. Drain well.',
            tip: 'Clean herbs are essential to avoid bitterness and preserve fresh flavor.',
        },
        {
            title: 'Blend',
            description: 'Add pennywort and water into a blender. Blend until fully smooth and green.',
        },
        {
            title: 'Strain',
            description: 'Pour the mixture through a fine mesh cloth or sieve. Squeeze well to extract all liquid and discard pulp.',
            tip: 'Straining creates a smooth, easy-to-drink texture without fiber.',
        },
        {
            title: 'Sweeten',
            description: 'Stir in sugar while the juice is still fresh. Adjust sweetness to taste.',
        },
        {
            title: 'Serve chilled',
            description: 'Pour over ice and serve immediately. Optionally add coconut water or condensed milk for variation.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
