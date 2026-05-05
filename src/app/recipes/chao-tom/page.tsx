'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-tom',
    title: 'Sugarcane Shrimp Skewers (Chao Tom)',
    subtitle: 'Sweet shrimp paste wrapped around sugarcane, grilled until golden and fragrant — a classic Vietnamese appetizer.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 3,
    heroImage: '/images/recipes/chao-tom.jpg',

    intro: `Chạo tôm is a traditional Vietnamese dish made from minced shrimp paste wrapped around sugarcane sticks and grilled until golden.

The sugarcane adds natural sweetness and aroma while the shrimp paste becomes bouncy, juicy, and slightly smoky from grilling. It is often served with herbs, rice paper, and dipping sauce.`,

    ingredientSections: [
        {
            title: 'Shrimp paste',
            items: [
                { amount: 400, unit: 'g', name: 'fresh shrimp', note: 'peeled and deveined' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'shallot', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'cornstarch' },
            ],
        },
        {
            title: 'Skewers & serving',
            items: [
                { amount: 6, name: 'sugarcane sticks', note: 'cut into short sections' },
                { amount: 1, name: 'rice paper' },
                { amount: 1, name: 'fresh herbs', note: 'mint, lettuce, cilantro' },
                { amount: 120, unit: 'ml', name: 'nuoc cham' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare shrimp paste',
            description: 'Blend shrimp with garlic, shallot, fish sauce, sugar, and cornstarch until sticky and smooth.',
            tip: 'Mix until paste becomes slightly elastic for better texture.',
        },
        {
            title: 'Wrap sugarcane',
            description: 'Take shrimp paste and wrap evenly around sugarcane sticks.',
        },
        {
            title: 'Shape skewers',
            description: 'Smooth the surface and press firmly so the paste sticks well.',
        },
        {
            title: 'Grill',
            description: 'Grill over medium heat until golden brown and slightly charred.',
            tip: 'Rotate frequently for even cooking and caramelization.',
        },
        {
            title: 'Serve',
            description: 'Serve with rice paper, herbs, and nuoc cham for wrapping.',
        },
        {
            title: 'Eat style',
            description: 'Wrap grilled chao tom with herbs in rice paper and dip into sauce.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
