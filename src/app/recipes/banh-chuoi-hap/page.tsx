'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-chuoi-hap',
    title: 'Steamed Banana Cake (Banh Chuoi Hap)',
    subtitle: 'Soft and chewy Vietnamese steamed banana cake with coconut milk — sweet, fragrant, and comforting.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-chuoi-hap.jpg',

    intro: `Bánh chuối hấp is a traditional Vietnamese dessert made from ripe bananas, tapioca flour, and coconut milk, then steamed until soft and glossy.

The cake has a chewy texture, natural banana sweetness, and a creamy coconut topping that makes it both simple and addictive.`,

    ingredientSections: [
        {
            title: 'Cake mixture',
            items: [
                { amount: 6, name: 'ripe bananas', note: 'sliced' },
                { amount: 200, unit: 'g', name: 'tapioca starch' },
                { amount: 100, unit: 'g', name: 'rice flour' },
                { amount: 150, unit: 'g', name: 'sugar' },
                { amount: 300, unit: 'ml', name: 'coconut milk' },
                { amount: 1, unit: 'pinch', name: 'salt' },
            ],
        },
        {
            title: 'Coconut topping',
            items: [
                { amount: 200, unit: 'ml', name: 'coconut milk' },
                { amount: 1, unit: 'tbsp', name: 'cornstarch' },
                { amount: 1, unit: 'pinch', name: 'salt' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare bananas',
            description: 'Slice ripe bananas and mix gently with sugar.',
        },
        {
            title: 'Make batter',
            description: 'Combine tapioca starch, rice flour, coconut milk, and salt until smooth.',
        },
        {
            title: 'Combine',
            description: 'Mix bananas into the batter carefully to avoid breaking them.',
        },
        {
            title: 'Steam',
            description: 'Pour mixture into a mold and steam for 25–30 minutes.',
            tip: 'Check if center is firm and translucent before removing.',
        },
        {
            title: 'Make topping',
            description: 'Heat coconut milk with cornstarch and salt until slightly thickened.',
        },
        {
            title: 'Serve',
            description: 'Pour coconut sauce over cake and serve warm or chilled.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
