'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-bap',
    title: 'Sweet Corn Dessert Soup (Che Bap)',
    subtitle: 'Fragrant Vietnamese sweet corn dessert with sticky rice and creamy coconut milk.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/che-bap.jpg',

    intro: `Chè bắp is a traditional Vietnamese dessert made from sweet corn, glutinous rice, and coconut milk.

It has a natural sweetness from fresh corn, a slightly thick texture, and a creamy coconut topping that makes it both refreshing and comforting.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 2, name: 'fresh corn (bắp)', note: 'kernels removed' },
                { amount: 50, unit: 'g', name: 'glutinous rice' },
                { amount: 100, unit: 'g', name: 'sugar' },
                { amount: 800, unit: 'ml', name: 'water' },
            ],
        },
        {
            title: 'Coconut sauce',
            items: [
                { amount: 200, unit: 'ml', name: 'coconut milk' },
                { amount: 1, unit: 'tbsp', name: 'cornstarch' },
                { amount: 1, unit: 'pinch', name: 'salt' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare corn',
            description: 'Remove kernels from fresh corn and rinse lightly.',
        },
        {
            title: 'Cook base',
            description: 'Boil corn with water and glutinous rice until soft and slightly thick.',
        },
        {
            title: 'Add sugar',
            description: 'Add sugar and stir until dissolved.',
        },
        {
            title: 'Make coconut sauce',
            description: 'Heat coconut milk with a pinch of salt and cornstarch until slightly thickened.',
        },
        {
            title: 'Combine',
            description: 'Pour coconut sauce over warm corn dessert.',
        },
        {
            title: 'Serve',
            description: 'Serve warm or chilled depending on preference.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
