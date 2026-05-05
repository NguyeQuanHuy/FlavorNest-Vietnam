'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'rau-ma-dau-xanh-nuoc-dua',
    title: 'Pennywort Mung Bean Coconut Drink',
    subtitle: 'Refreshing Vietnamese herbal drink made with pennywort, mung beans, and coconut milk.',
    category: 'DRINK',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 3,
    heroImage: '/images/recipes/rau-ma-dau-xanh-nuoc-dua.jpg',

    intro: `Rau má đậu xanh nước dừa is a popular Vietnamese refreshing drink combining pennywort juice, mung beans, and coconut milk.

It is known for its cooling properties, nutty flavor from mung beans, and creamy coconut aroma — a perfect drink for hot weather.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 200, unit: 'g', name: 'pennywort (rau má)' },
                { amount: 100, unit: 'g', name: 'mung beans', note: 'soaked and steamed' },
                { amount: 200, unit: 'ml', name: 'coconut milk' },
                { amount: 100, unit: 'g', name: 'sugar' },
                { amount: 500, unit: 'ml', name: 'water' },
            ],
        },
        {
            title: 'Optional',
            items: [
                { amount: 1, name: 'ice cubes' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare mung beans',
            description: 'Soak mung beans for 2–3 hours, then steam until soft.',
        },
        {
            title: 'Blend pennywort',
            description: 'Wash pennywort and blend with water, then strain to get juice.',
        },
        {
            title: 'Cook mung bean base',
            description: 'Blend or lightly mash steamed mung beans for a creamy texture.',
        },
        {
            title: 'Mix drink',
            description: 'Combine pennywort juice, mung beans, sugar, and coconut milk.',
        },
        {
            title: 'Adjust taste',
            description: 'Add sugar or a pinch of salt depending on preference.',
        },
        {
            title: 'Serve',
            description: 'Serve cold with ice for maximum refreshment.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
