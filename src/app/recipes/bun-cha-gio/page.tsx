'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-cha-gio',
    title: 'Crispy Spring Roll Vermicelli (Bún Chả Giò)',
    subtitle:
        'Bún Chả Giò — a satisfying bowl of crispy, golden-fried spring rolls layered over cool rice vermicelli, fresh herbs, and a classic sweet and tangy dipping sauce.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/bun-cha-gio.jpg',
    intro:
        'Bún Chả Giò is the perfect harmony of temperatures and textures. It brings together the hot, shattering crunch of deep-fried spring rolls with the refreshing coolness of rice noodles and raw vegetables. Unlike many noodle soups, this is a "dry" noodle dish, where the soul lies in the Nước Chấm—the iconic Vietnamese dressing that ties the savory pork filling and the garden-fresh herbs into one vibrant, addictive meal.',
    ingredientSections: [
        {
            title: 'Crispy Spring Rolls (Chả Giò)',
            items: [
                { amount: 300, unit: 'g', name: 'ground pork', note: 'or minced shrimp' },
                { amount: 50, unit: 'g', name: 'wood ear mushrooms', note: 'soaked and minced' },
                { amount: 50, unit: 'g', name: 'glass noodles', note: 'soaked and chopped short' },
                { amount: 100, unit: 'g', name: 'taro or jicama', note: 'shredded' },
                { amount: 20, unit: 'sheets', name: 'rice paper or spring roll pastry' },
                { amount: 1, unit: 'large', name: 'egg', note: 'to bind the filling' },
                { amount: 500, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
        {
            title: 'Noodle Bowl Base',
            items: [
                { amount: 500, unit: 'g', name: 'dried rice vermicelli', note: 'boiled and cooled' },
                { amount: 2, unit: 'cups', name: 'mixed greens', note: 'lettuce, mint, perilla, and coriander' },
                { amount: 1, unit: 'cup', name: 'bean sprouts', note: 'fresh' },
                { amount: 1, unit: 'large', name: 'cucumber', note: 'julienned' },
                { amount: 0.5, unit: 'cup', name: 'crushed roasted peanuts', note: 'for topping' },
            ],
        },
        {
            title: 'Dressing (Nước Chấm)',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 4, unit: 'tbsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'lime juice' },
                { amount: 0.5, unit: 'cup', name: 'warm water' },
                { amount: 1, unit: 'tbsp', name: 'minced garlic and chili' },
            ],
        },
    ],
    steps: [
        {
            title: 'Mix the filling',
            description: 'In a large bowl, combine ground pork, mushrooms, glass noodles, shredded taro, egg, and a teaspoon each of salt and pepper. Mix thoroughly.',
            tip: 'If using jicama instead of taro, squeeze out the excess water to prevent the spring rolls from becoming soggy.',
        },
        {
            title: 'Roll the spring rolls',
            description: 'Soften rice paper slightly with a damp cloth. Place a tablespoon of filling at the bottom, fold in the sides, and roll tightly to the top.',
        },
        {
            title: 'Fry until golden',
            description: 'Heat oil over medium-high heat. Fry the rolls in batches for 8–10 minutes until the skin is blistered and golden brown.',
            tip: 'For maximum crunch, double-fry the rolls: fry once at a lower heat to cook through, and a second time at high heat to crisp the skin.',
        },
        {
            title: 'Prepare the sauce',
            description: 'Whisk together warm water and sugar until dissolved. Add fish sauce and lime juice, then stir in the minced garlic and chili.',
        },
        {
            title: 'Assemble the bowl',
            description: 'Divide the vermicelli into bowls. Arrange the fresh herbs, bean sprouts, and cucumber around the noodles. Use scissors to cut the hot spring rolls into bite-sized pieces on top.',
        },
        {
            title: 'Finish and garnish',
            description: 'Sprinkle with crushed peanuts and fried shallots. Pour the dressing over the bowl just before eating and toss well.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
