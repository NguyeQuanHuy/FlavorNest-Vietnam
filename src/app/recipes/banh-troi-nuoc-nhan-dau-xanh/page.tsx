'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-troi-nuoc-nhan-dau-xanh',
    title: 'Sweet Glutinous Rice Dumplings (Banh Troi Nuoc) with Mung Bean Filling',
    subtitle: 'Soft glutinous rice balls filled with mung bean, served in warm ginger syrup — a traditional Vietnamese dessert.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '60 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-troi-nuoc.jpg',

    intro: `Bánh trôi nước nhân đậu xanh is a traditional Vietnamese dessert made from glutinous rice balls filled with sweet mung bean paste, served in a warm ginger syrup.

The dessert is soft, chewy, and slightly sticky, with a fragrant ginger broth that warms the body. It is often associated with Vietnamese cultural traditions and is commonly enjoyed during special occasions.`,

    ingredientSections: [
        {
            title: 'Glutinous rice dough',
            items: [
                { amount: 300, unit: 'g', name: 'glutinous rice flour' },
                { amount: 180, unit: 'ml', name: 'warm water' },
                { amount: 1, unit: 'pinch', name: 'salt' },
            ],
        },
        {
            title: 'Mung bean filling',
            items: [
                { amount: 150, unit: 'g', name: 'split mung beans', note: 'soaked' },
                { amount: 80, unit: 'g', name: 'sugar' },
                { amount: 50, unit: 'g', name: 'coconut milk' },
            ],
        },
        {
            title: 'Ginger syrup',
            items: [
                { amount: 1, unit: 'l', name: 'water' },
                { amount: 120, unit: 'g', name: 'sugar' },
                { amount: 1, name: 'ginger knob', note: 'sliced or crushed' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare mung bean filling',
            description: 'Soak mung beans for 2–3 hours, steam until soft, then mash and mix with sugar and coconut milk.',
            tip: 'Filling should be smooth and moldable into small balls.',
        },
        {
            title: 'Make dough',
            description: 'Mix glutinous rice flour with warm water and salt until a soft, pliable dough forms.',
        },
        {
            title: 'Shape dumplings',
            description: 'Wrap mung bean filling with dough and roll into small smooth balls.',
        },
        {
            title: 'Cook dumplings',
            description: 'Boil dumplings in water until they float to the surface, then continue cooking for 1–2 more minutes.',
        },
        {
            title: 'Prepare ginger syrup',
            description: 'Boil water with ginger and sugar until fragrant and slightly spicy.',
        },
        {
            title: 'Serve',
            description: 'Place dumplings in warm ginger syrup and serve immediately.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
