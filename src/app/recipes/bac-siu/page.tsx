'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bac-siu',
    title: 'Saigon Milk Coffee',
    subtitle: 'Bac siu — gentler than ca phe sua da, beloved by office workers and grandmothers alike.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '10 min',
    rating: 4.8,
    baseServings: 1,
    heroImage: '/images/recipes/bac-siu.jpg',
    intro: 'Bac siu literally means "a little white" in Cantonese — and that is exactly what it is. A small shot of strong robusta over a generous lake of sweetened condensed milk and fresh milk, served over ice. The Saigonese drink it when they want coffee but mostly want milk; the elderly drink it because it is gentle; office workers drink it at 3pm when a full ca phe sua da would keep them awake until midnight. The proportions are inverted from the morning coffee — milk first, coffee second.',
    ingredientSections: [
        {
            title: 'Per serving',
            items: [
                { amount: 1, unit: 'tbsp', name: 'Vietnamese robusta coffee grounds' },
                { amount: 80, unit: 'ml', name: 'hot water', note: 'just off the boil' },
                { amount: 2, unit: 'tbsp', name: 'sweetened condensed milk' },
                { amount: 100, unit: 'ml', name: 'fresh whole milk' },
                { amount: 1, unit: 'cup', name: 'ice cubes' },
            ],
        },
    ],
    steps: [
        {
            title: 'Layer the milk',
            description: 'Spoon condensed milk into the bottom of a tall glass. Pour fresh milk on top. Do not stir.',
            tip: 'Whole milk only. Skim or low-fat versions taste thin and watery in this drink.',
        },
        {
            title: 'Brew the coffee',
            description: 'Place the phin filter on top of the glass. Add coffee grounds, press the filter plate down lightly, and bloom with a splash of hot water for 30 seconds. Fill the phin to the top and let drip completely — about 4 minutes for a half-shot.',
            tip: 'Bac siu uses less coffee than ca phe sua da. The point is for the milk to dominate.',
        },
        {
            title: 'Stir and pour over ice',
            description: 'Once the coffee finishes dripping, stir everything in the glass until the condensed milk fully dissolves. Fill a separate glass with ice and pour the milky coffee over. Serve immediately while still cold.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
