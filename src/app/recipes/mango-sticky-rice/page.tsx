'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'mango-sticky-rice',
    title: 'Sweet Mango Sticky Rice',
    subtitle: 'Glutinous rice cooked in fragrant coconut milk, topped with ripe mango and salted coconut cream.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/mango-sticky-rice.jpg',
    intro: `Xoi xoai is the dessert that needs no introduction — sweet glutinous rice steamed and folded with coconut milk, served alongside ripe mango slices, finished with a drizzle of salted coconut cream. Simple, seasonal, and universally loved across Southeast Asia. The key is a perfectly ripe mango and the balance of sweet rice against the salty coconut topping.`,
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
            title: 'Salted coconut cream topping',
            items: [
                { amount: 100, unit: 'ml', name: 'coconut cream', note: 'full-fat' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, name: 'pinch of salt', note: 'do not skip — the salt is essential' },
                { amount: 1, unit: 'tsp', name: 'tapioca starch', note: 'mixed with 1 tbsp cold water' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, name: 'ripe Ataulfo or honey mangoes', note: 'sliced' },
                { amount: 1, unit: 'tbsp', name: 'toasted sesame seeds' },
            ],
        },
    ],
    steps: [
        {
            title: 'Steam the rice',
            description: 'Drain soaked glutinous rice and steam in a bamboo steamer or steamer basket over boiling water for 25 to 30 minutes until fully cooked and translucent throughout.',
            tip: 'Line the steamer with a damp muslin cloth to prevent rice from falling through.',
        },
        {
            title: 'Fold in coconut milk',
            description: 'Warm coconut milk with sugar and salt in a small saucepan until sugar dissolves. Pour over hot steamed rice and fold gently to combine. Cover and rest 15 minutes to absorb.',
            tip: 'The rice continues absorbing the coconut milk as it rests. Do not rush this step — the rest time is what makes the rice creamy and fragrant.',
        },
        {
            title: 'Make the salted coconut topping',
            description: 'Combine coconut cream, sugar, and salt in a small saucepan over low heat. Stir in tapioca starch slurry and cook 2 to 3 minutes, stirring constantly, until slightly thickened and glossy.',
        },
        {
            title: 'Serve',
            description: 'Mound sticky rice on a plate alongside sliced mango. Drizzle salted coconut cream generously over the rice. Scatter toasted sesame seeds on top. Serve at room temperature.',
            tip: 'Use the ripest mango you can find. An underripe mango produces a sharp, one-dimensional dish. A perfectly ripe one makes it extraordinary.',
        },
    ],
};
export default function Page() { return <RecipeLayout recipe={recipe} />; } 
