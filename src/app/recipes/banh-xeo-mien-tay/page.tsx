'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-xeo-mien-tay',
    title: 'Mekong Sizzling Crepe',
    subtitle: 'The Southern version is enormous — a giant turmeric crepe that shatters when you fold it.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1600&q=85',
    intro: `Banh xeo mien Tay — the Mekong Delta version of the sizzling crepe — is a different beast from its Central Vietnamese cousin. Where the Central version is small and refined, this one is enormous, filling an entire 30cm pan, the batter thick enough with coconut milk to puff and blister into a crispy, golden shell. The filling is generous: fat prawns, sliced pork belly, bean sprouts, and spring onions. You eat it by tearing off pieces with your hands, wrapping them in mustard leaf with fresh herbs, and dipping in nuoc cham.`,
    ingredientSections: [
        {
            title: 'Crepe batter',
            items: [
                { amount: 250, unit: 'g', name: 'rice flour' },
                { amount: 30, unit: 'g', name: 'tapioca starch' },
                { amount: 400, unit: 'ml', name: 'coconut milk', note: 'full-fat' },
                { amount: 150, unit: 'ml', name: 'cold water' },
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
                { amount: 3, name: 'shallots', note: 'thinly sliced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'head mustard leaf', note: 'or large lettuce leaves' },
                { amount: 1, name: 'bunch Vietnamese mint, perilla, and bean sprouts' },
                { amount: 120, unit: 'ml', name: 'nuoc cham' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the batter',
            description: 'Whisk rice flour, tapioca starch, coconut milk, water, turmeric, and salt until completely smooth. Rest 30 minutes. Stir in spring onions just before cooking.',
            tip: 'Resting allows the starch to hydrate fully, producing a more even, crisper crepe.',
        },
        {
            title: 'Season the filling',
            description: 'Toss prawns and pork with fish sauce. Have bean sprouts and shallots ready in separate bowls for quick assembly.',
        },
        {
            title: 'Cook the crepe',
            description: 'Heat a 30cm non-stick pan over high heat. Add 2 tablespoons of oil. Add 3 to 4 pork slices and 4 to 5 prawns. Cook 1 minute. Add a handful of shallots and bean sprouts. Pour in enough batter to thinly coat the pan — swirl immediately. Cover with a lid for 3 minutes.',
            tip: 'The pan must be very hot and well-oiled. Insufficient heat produces a soft, pale crepe. You want immediate sizzle the moment the batter hits the pan.',
        },
        {
            title: 'Crisp uncovered',
            description: 'Remove lid. Cook uncovered for 3 to 4 more minutes until the edges are deep golden and curl away from the pan. The underside should be uniformly crispy and release cleanly.',
        },
        {
            title: 'Fold and serve',
            description: 'Fold the crepe in half and slide onto a large plate. Serve immediately with mustard leaves, fresh herbs, and nuoc cham. Tear pieces off the crepe at the table, wrap in a leaf with herbs, and dip. Eat fast — the crunch does not last.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
