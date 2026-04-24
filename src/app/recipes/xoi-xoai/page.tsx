'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'xoi-xoai',
    title: 'Mango Sticky Rice',
    subtitle: 'Sweet coconut sticky rice with ripe mango — Thailand and Vietnam meet in a bowl.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1600&q=85',
    intro: `Xoi xoai is the dessert that needs no introduction — sweet glutinous rice steamed with coconut milk, served alongside ripe mango slices, finished with a drizzle of salted coconut cream. Simple, seasonal, and universally loved across Southeast Asia. The key is perfectly ripe mango and the balance of sweet rice against the salty coconut topping.`,
    ingredientSections: [
        {
            title: 'Coconut sticky rice',
            items: [
                { amount: 300, unit: 'g', name: 'glutinous rice', note: 'soaked overnight' },
                { amount: 200, unit: 'ml', name: 'coconut milk', note: 'full-fat' },
                { amount: 3, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Coconut cream topping',
            items: [
                { amount: 100, unit: 'ml', name: 'coconut cream' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, name: 'pinch of salt' },
                { amount: 1, unit: 'tsp', name: 'tapioca starch', note: 'mixed with 1 tbsp cold water' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, name: 'ripe mangoes', note: 'sliced' },
                { amount: 1, unit: 'tbsp', name: 'toasted sesame seeds' },
            ],
        },
    ],
    steps: [
        {
            title: 'Steam the rice',
            description: 'Drain soaked glutinous rice and steam in a bamboo steamer for 25 minutes until fully cooked and translucent.',
        },
        {
            title: 'Season with coconut milk',
            description: 'Warm coconut milk with sugar and salt until dissolved. Pour over hot steamed rice and fold gently to combine. Cover and rest 15 minutes to absorb.',
            tip: 'The rice absorbs the coconut milk as it rests. Do not rush — the rest time is essential.',
        },
        {
            title: 'Make the coconut topping',
            description: 'Warm coconut cream with sugar and salt. Stir in tapioca starch slurry and cook 2 minutes until slightly thickened.',
        },
        {
            title: 'Serve',
            description: 'Mound sticky rice alongside sliced mango. Drizzle coconut cream topping generously over the rice. Scatter sesame seeds on top.',
        },
    ],
};
export default function Page() { return <RecipeLayout recipe={recipe} />; } 
