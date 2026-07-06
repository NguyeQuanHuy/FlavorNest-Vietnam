'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-tieu',
    title: 'Vietnamese Hollow Sesame Doughnut (Banh Tieu)',
    subtitle: 'Crispy golden hollow fried bread coated with sesame seeds — light, airy, and slightly sweet.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '90 min',
    rating: 4.9,
    baseServings: 6,
    heroImage: '/images/recipes/banh-tieu.jpg',

    intro: `Bánh tiêu is a popular Vietnamese street snack made from leavened dough that puffs up into a hollow golden shell when fried.

It is crispy on the outside, airy inside, and lightly sweet with sesame seeds adding a nutty aroma.`,

    ingredientSections: [
        {
            title: 'Dough',
            items: [
                { amount: 300, unit: 'g', name: 'all-purpose flour' },
                { amount: 50, unit: 'g', name: 'sugar' },
                { amount: 5, unit: 'g', name: 'instant yeast' },
                { amount: 180, unit: 'ml', name: 'warm water' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'For coating & frying',
            items: [
                { amount: 50, unit: 'g', name: 'sesame seeds' },
                { amount: 500, unit: 'ml', name: 'cooking oil' },
            ],
        },
    ],

    steps: [
        {
            title: 'Activate yeast',
            description: 'Mix yeast with warm water and sugar. Let it sit until foamy.',
        },
        {
            title: 'Make dough',
            description: 'Combine flour, salt, and yeast mixture. Knead until smooth and elastic.',
        },
        {
            title: 'Proof dough',
            description: 'Cover and let dough rise for 1 hour until doubled in size.',
        },
        {
            title: 'Shape dough',
            description: 'Divide dough into small balls, flatten slightly, and coat with sesame seeds.',
        },
        {
            title: 'Heat oil',
            description: 'Heat oil to medium-high temperature.',
        },
        {
            title: 'Fry',
            description: 'Fry dough until it puffs up and turns golden brown.',
            tip: 'Press gently in oil to help it inflate into hollow shape.',
        },
        {
            title: 'Drain',
            description: 'Remove and drain excess oil on paper towels.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
