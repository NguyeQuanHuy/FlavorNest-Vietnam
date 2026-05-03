'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-xeo',
    title: 'Sizzling Savoury Crepe',
    subtitle: `Named for the sound it makes when batter hits a hot wok.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-xeo.jpg',
    intro: `Banh xeo — the name is onomatopoeia for the sound the batter makes hitting the hot pan. A giant turmeric-yellow crepe, crispy at the edges and stuffed with shrimp, pork belly, and bean sprouts. You do not eat it with a fork. You break it apart with your hands, wrap each piece in a mustard leaf with fresh herbs, and dip into nuoc cham. The eating is as important as the cooking.`,
    ingredientSections: [
        {
            title: 'Crepe batter',
            items: [
                { amount: 200, unit: 'g', name: 'rice flour' },
                { amount: 30, unit: 'g', name: 'tapioca starch' },
                { amount: 350, unit: 'ml', name: 'coconut milk', note: 'full-fat' },
                { amount: 150, unit: 'ml', name: 'cold water' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Filling',
            items: [
                { amount: 250, unit: 'g', name: 'medium prawns', note: 'peeled and deveined' },
                { amount: 200, unit: 'g', name: 'pork belly', note: 'thinly sliced' },
                { amount: 150, unit: 'g', name: 'bean sprouts' },
                { amount: 3, name: 'shallots', note: 'thinly sliced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'head mustard leaf or large lettuce leaves' },
                { amount: 1, name: 'bunch Vietnamese mint and perilla' },
                { amount: 120, unit: 'ml', name: 'nuoc cham' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the batter',
            description: `Whisk rice flour, tapioca starch, coconut milk, water, turmeric, and salt until smooth. Rest 20 minutes. Stir in spring onions just before cooking.`,
            tip: `Resting allows the starch to hydrate fully, producing a more even and crisper crepe.`,
        },
        {
            title: 'Season the filling',
            description: `Toss prawns and pork with fish sauce. Have bean sprouts and shallots in separate bowls ready for quick assembly.`,
        },
        {
            title: 'Cook the crepe',
            description: `Heat a 30cm non-stick pan over high heat until smoking. Add 2 tablespoons oil. Add 3 to 4 pork slices and 4 to 5 prawns. Cook 1 minute. Add bean sprouts and shallots. Pour in enough batter to coat the pan thinly — swirl immediately. Cover with lid for 3 minutes.`,
            tip: `The pan must be very hot and the batter poured in one confident swirl. Hesitation produces uneven thickness and soft spots.`,
        },
        {
            title: 'Crisp uncovered',
            description: `Remove lid. Cook 3 to 4 more minutes uncovered until the edges are deep golden and curl away from the pan. The underside should be uniformly crispy and release cleanly when you slide a spatula underneath.`,
        },
        {
            title: 'Fold and serve',
            description: `Fold crepe in half and slide onto a plate. Serve immediately with mustard leaves, fresh herbs, and nuoc cham. Tear pieces at the table, wrap in a leaf with herbs, and dip.`,
            tip: `Banh xeo loses its crunch within 5 minutes. Cook and eat each crepe immediately rather than making a batch.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
