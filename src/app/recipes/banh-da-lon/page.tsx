'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-da-lon',
    title: 'Vietnamese Layered Pandan Cake (Banh Da Lon)',
    subtitle: 'Soft, chewy layers of pandan and mung bean — a traditional Vietnamese steamed dessert.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '60 min',
    rating: 4.9,
    baseServings: 6,
    heroImage: '/images/recipes/banh-da-lon.jpg',

    intro: `Bánh da lợn is a traditional Vietnamese steamed dessert famous for its beautiful green and yellow layers.

Made from tapioca starch, mung beans, pandan juice, and coconut milk, the cake has a chewy, slightly bouncy texture. Each layer is steamed separately, creating a soft, elastic dessert that is both visually stunning and delicious.`,

    ingredientSections: [
        {
            title: 'Green pandan layer',
            items: [
                { amount: 200, unit: 'g', name: 'tapioca starch' },
                { amount: 50, unit: 'g', name: 'rice flour' },
                { amount: 150, unit: 'ml', name: 'pandan juice' },
                { amount: 200, unit: 'ml', name: 'coconut milk' },
                { amount: 120, unit: 'g', name: 'sugar' },
            ],
        },
        {
            title: 'Yellow mung bean layer',
            items: [
                { amount: 150, unit: 'g', name: 'split mung beans', note: 'soaked' },
                { amount: 200, unit: 'ml', name: 'coconut milk' },
                { amount: 150, unit: 'ml', name: 'water' },
                { amount: 120, unit: 'g', name: 'sugar' },
                { amount: 50, unit: 'g', name: 'tapioca starch' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare mung beans',
            description: 'Soak mung beans for 2–3 hours, then steam until soft. Blend with coconut milk, sugar, and water.',
            tip: 'Blend until smooth for a silky yellow layer.',
        },
        {
            title: 'Make pandan juice',
            description: 'Blend pandan leaves with water and strain to get fragrant green juice.',
        },
        {
            title: 'Mix green batter',
            description: 'Combine pandan juice, coconut milk, sugar, tapioca starch, and rice flour. Stir until smooth.',
        },
        {
            title: 'Prepare yellow batter',
            description: 'Mix blended mung bean paste with tapioca starch and sugar until smooth.',
        },
        {
            title: 'Steam layers',
            description: 'Steam alternating layers (green then yellow) for 5–7 minutes each until set.',
            tip: 'Each layer must be fully set before adding the next.',
        },
        {
            title: 'Cool and slice',
            description: 'Let cake cool completely before slicing into layers.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
