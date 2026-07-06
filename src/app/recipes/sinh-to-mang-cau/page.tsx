'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'sinh-to-mang-cau',
    title: 'Soursop Smoothie (Sinh tố mãng cầu)',
    subtitle: 'Creamy, tropical, and naturally sweet — a Vietnamese fruit smoothie with a tangy custard-like flavor.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '10 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/sinh-to-mang-cau.jpg',

    intro: `Sinh tố mãng cầu is one of Vietnam’s most beloved tropical smoothies. Made from ripe soursop (mãng cầu), it has a unique flavor that blends banana-like sweetness with a light citrus tang and creamy custard texture.

Blended with condensed milk and ice, this drink becomes rich, smooth, and naturally refreshing — a perfect balance between dessert and beverage. It is commonly sold in Vietnamese fruit juice shops and street cafés.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 300, unit: 'g', name: 'ripe soursop (mãng cầu)', note: 'seed removed' },
                { amount: 150, unit: 'ml', name: 'milk', note: 'or fresh milk' },
                { amount: 2, unit: 'tbsp', name: 'condensed milk' },
                { amount: 1, unit: 'cup', name: 'ice cubes' },
            ],
        },
        {
            title: 'Optional',
            items: [
                { amount: 1, unit: 'tsp', name: 'honey', note: 'for extra sweetness' },
                { amount: 50, unit: 'ml', name: 'coconut milk', note: 'for tropical richness' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare the fruit',
            description: 'Peel the soursop and remove all black seeds. Keep only the soft white flesh.',
            tip: 'Make sure all seeds are removed — they are not edible.',
        },
        {
            title: 'Blend',
            description: 'Add soursop flesh, milk, condensed milk, and ice into a blender. Blend until smooth and creamy.',
        },
        {
            title: 'Adjust texture',
            description: 'If too thick, add a little more milk. If too thin, add more fruit or ice.',
        },
        {
            title: 'Taste and balance',
            description: 'Add honey or sugar if needed depending on ripeness of fruit.',
        },
        {
            title: 'Serve immediately',
            description: 'Pour into a glass and serve cold. Best consumed fresh for full aroma and creamy texture.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
