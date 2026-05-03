'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-beo',
    title: 'Steamed Rice Cakes with Shrimp',
    subtitle: 'Delicate Hue snack cakes — eaten one tiny bowl at a time, with scallion oil and dried shrimp.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/banh-beo.jpg',
    intro: 'Banh beo is the quintessential Hue snack — a city obsessed with small, refined, intensely flavoured bites eaten over long afternoon conversations. Each rice cake is steamed in its own tiny clay saucer until set into a thin, silky disc. The topping is minimal by design: dried shrimp powder, crispy pork cracklings, a drizzle of scallion oil, and a spoonful of sweet fish sauce. You eat a dozen without thinking. That is the point.',
    ingredientSections: [
        {
            title: 'Rice cake batter',
            items: [
                { amount: 200, unit: 'g', name: 'rice flour' },
                { amount: 30, unit: 'g', name: 'tapioca starch' },
                { amount: 500, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tbsp', name: 'vegetable oil' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 80, unit: 'g', name: 'dried shrimp', note: 'ground into a coarse powder in a blender' },
                { amount: 60, unit: 'g', name: 'pork cracklings (banh da lon)', note: 'broken into small pieces' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
                { amount: 60, unit: 'ml', name: 'vegetable oil', note: 'for scallion oil' },
            ],
        },
        {
            title: 'Dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'warm water' },
                { amount: 1, name: 'garlic clove', note: 'minced' },
                { amount: 1, name: 'red chilli', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the batter',
            description: 'Whisk rice flour, tapioca starch, water, salt, and oil until completely smooth. Rest 20 minutes. The batter is very thin — thinner than crepe batter.',
        },
        {
            title: 'Steam the rice cakes',
            description: 'Lightly oil small saucers, ramekins, or a shallow muffin tray. Fill each about halfway with batter. Steam over boiling water for 5 to 6 minutes until the cakes are set, opaque, and slightly glossy. They should pull away from the edges slightly when done.',
            tip: 'Traditional banh beo uses tiny ceramic saucers about 8cm wide. Small ramekins work perfectly. Do not use deep moulds — banh beo should be thin.',
        },
        {
            title: 'Make the scallion oil',
            description: 'Heat oil in a small pan until shimmering. Add sliced spring onions and cook for 30 seconds until just wilted and fragrant. Remove from heat immediately.',
        },
        {
            title: 'Make the dipping sauce',
            description: 'Dissolve sugar in warm water. Add fish sauce, garlic, and chilli. Taste — the sauce should be sweet, salty, and aromatic.',
        },
        {
            title: 'Top and serve',
            description: 'Top each steamed rice cake with a pinch of dried shrimp powder, a piece of cracklings, and a drizzle of scallion oil. Serve in the saucers with dipping sauce on the side. Eat directly from the saucer with a small spoon.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
