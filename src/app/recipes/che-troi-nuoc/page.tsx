'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-troi-nuoc',
    title: 'Glutinous Rice Dumplings in Ginger Syrup (Che Troi Nuoc)',
    subtitle: 'Soft sticky rice balls filled with mung bean, served in warm ginger syrup — a classic Vietnamese dessert.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/che-troi-nuoc.jpg',

    intro: `Chè trôi nước is a traditional Vietnamese dessert made of glutinous rice balls filled with mung bean, served in warm ginger syrup and topped with coconut milk.

The dish symbolizes reunion and completeness in Vietnamese culture, often enjoyed during festivals or family gatherings.`,

    ingredientSections: [
        {
            title: 'Dough',
            items: [
                { amount: 250, unit: 'g', name: 'glutinous rice flour' },
                { amount: 180, unit: 'ml', name: 'warm water' },
            ],
        },
        {
            title: 'Filling',
            items: [
                { amount: 150, unit: 'g', name: 'mung beans', note: 'soaked and steamed' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
            ],
        },
        {
            title: 'Ginger syrup',
            items: [
                { amount: 1, unit: 'liter', name: 'water' },
                { amount: 150, unit: 'g', name: 'sugar' },
                { amount: 50, unit: 'g', name: 'fresh ginger', note: 'sliced' },
            ],
        },
        {
            title: 'Topping',
            items: [
                { amount: 100, unit: 'ml', name: 'coconut milk' },
                { amount: 1, unit: 'pinch', name: 'salt' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare filling',
            description: 'Mash steamed mung beans with sugar until smooth and form small balls.',
        },
        {
            title: 'Make dough',
            description: 'Mix glutinous rice flour with warm water until smooth and elastic.',
            tip: 'Dough should be soft but not sticky.',
        },
        {
            title: 'Shape dumplings',
            description: 'Wrap dough around mung bean filling and roll into balls.',
        },
        {
            title: 'Cook dumplings',
            description: 'Boil dumplings until they float to the surface.',
        },
        {
            title: 'Make syrup',
            description: 'Simmer water, sugar, and ginger until fragrant.',
        },
        {
            title: 'Combine',
            description: 'Add cooked dumplings into ginger syrup.',
        },
        {
            title: 'Finish',
            description: 'Serve warm with coconut milk and a pinch of salt on top.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
