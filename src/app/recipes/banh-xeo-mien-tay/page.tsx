'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-xeo-mien-tay',
    title: 'Crispy Mekong Delta Banh Xeo',
    subtitle: 'A giant, crackling turmeric crepe — lacy, golden, and meant to be torn, wrapped, and devoured.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-xeo-mien-tay.jpg',

    intro: `:contentReference[oaicite:0]{index=0} is the bold, oversized version of Vietnam’s famous sizzling crepe. Unlike the smaller Central style, this southern classic stretches across a wide pan, forming a thin, lacy crust infused with turmeric and coconut milk.

The batter hits the hot oil with a sharp “xèo” — a sound that gives the dish its name — before setting into a golden, crispy shell. Inside, it’s generously filled with shrimp, pork belly, bean sprouts, and soft mung beans.

It’s not eaten politely. You tear it apart with your hands, wrap it in mustard greens and a wild mix of herbs, then dip it into tangy nuoc cham. Crunch, freshness, richness — all colliding in a single bite.`,

    ingredientSections: [
        {
            title: 'Crepe batter',
            items: [
                { amount: 250, unit: 'g', name: 'rice flour' },
                { amount: 30, unit: 'g', name: 'tapioca starch' },
                { amount: 250, unit: 'ml', name: 'coconut milk', note: 'full-fat' },
                { amount: 300, unit: 'ml', name: 'cold water' },
                { amount: 50, unit: 'ml', name: 'beer', note: 'for extra crispiness' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Filling',
            items: [
                { amount: 300, unit: 'g', name: 'large prawns', note: 'peeled, deveined' },
                { amount: 200, unit: 'g', name: 'pork belly', note: 'thinly sliced' },
                { amount: 150, unit: 'g', name: 'bean sprouts' },
                { amount: 50, unit: 'g', name: 'mung beans', note: 'cooked until soft' },
                { amount: 3, name: 'shallots', note: 'thinly sliced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'head mustard greens', note: 'or large lettuce leaves' },
                { amount: 1, name: 'bunch Vietnamese herbs', note: 'mint, perilla, fish mint' },
                { amount: 120, unit: 'ml', name: 'nuoc cham' },
            ],
        },
    ],

    steps: [
        {
            title: 'Make the batter',
            description: 'Whisk rice flour, tapioca starch, coconut milk, water, beer, turmeric, and salt until completely smooth. Let it rest for 30 minutes. Stir in spring onions just before cooking.',
            tip: 'Resting hydrates the starch and helps create a thinner, crispier crepe with an even texture.',
        },
        {
            title: 'Prepare the filling',
            description: 'Toss prawns and pork with fish sauce. Keep bean sprouts, mung beans, and shallots ready in separate bowls for quick cooking.',
        },
        {
            title: 'Cook the crepe',
            description: 'Heat a 30cm pan over high heat. Add 2 tablespoons of oil. Add pork and prawns, cook briefly. Add shallots, bean sprouts, and mung beans. Pour in a thin layer of batter and immediately swirl to coat the pan.',
            tip: 'The pan must be very hot — you should hear a sharp sizzle the moment the batter hits. That sound defines the dish.',
        },
        {
            title: 'Crisp uncovered',
            description: 'Cover briefly for 1–2 minutes, then remove the lid. Continue cooking uncovered for 3–4 minutes until the edges turn deep golden and lift from the pan. The bottom should be evenly crisp.',
        },
        {
            title: 'Fold and serve',
            description: 'Fold the crepe in half and slide onto a plate. Serve immediately. Tear pieces by hand, wrap in mustard greens with herbs, and dip into nuoc cham. Eat fast — the crunch fades quickly.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
