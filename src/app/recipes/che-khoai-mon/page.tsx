'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-khoai-mon',
    title: 'Taro Sweet Soup (Che Khoai Mon)',
    subtitle: 'Creamy taro dessert with coconut milk and soft tapioca pearls — rich, fragrant, and comforting.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/che-khoai-mon.jpg',

    intro: `Chè khoai môn is a popular Vietnamese dessert made from taro, coconut milk, and tapioca pearls.

It has a naturally creamy texture from the taro, combined with the richness of coconut milk and the chewiness of pearls. This dessert can be served warm or cold, making it perfect for any season.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 300, unit: 'g', name: 'taro root', note: 'cut into cubes' },
                { amount: 150, unit: 'g', name: 'tapioca pearls' },
                { amount: 500, unit: 'ml', name: 'coconut milk' },
                { amount: 120, unit: 'g', name: 'sugar' },
                { amount: 1, unit: 'pinch', name: 'salt' },
                { amount: 800, unit: 'ml', name: 'water' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare taro',
            description: 'Peel and cut taro into bite-size cubes. Steam until soft but still holding shape.',
            tip: 'Do not overcook or taro will become mushy and lose texture.',
        },
        {
            title: 'Cook tapioca pearls',
            description: 'Boil tapioca pearls until translucent, then rinse under cold water.',
        },
        {
            title: 'Cook coconut base',
            description: 'Heat coconut milk with sugar and a pinch of salt until warm and fragrant.',
        },
        {
            title: 'Combine ingredients',
            description: 'Add steamed taro and tapioca pearls into the coconut mixture. Stir gently.',
        },
        {
            title: 'Simmer lightly',
            description: 'Let everything simmer for 5–10 minutes so flavors blend together.',
        },
        {
            title: 'Serve',
            description: 'Serve warm or chilled with ice depending on preference.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
