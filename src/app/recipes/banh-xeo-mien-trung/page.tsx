'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-xeo-mien-trung',
    title: 'Central-Style Sizzling Crepe',
    subtitle: 'Smaller, crispier, and more intense than its Southern cousin — the Central Vietnamese banh xeo.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '40 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1600&q=85',
    intro: 'The name means sizzling cake — named after the violent hiss the batter makes when it hits the hot pan. Central Vietnamese banh xeo is different from the giant Southern version: smaller, thinner, crispier, and more intensely flavoured. Less batter, more heat, a shorter cook time. The filling is simple — shrimp, pork belly, and bean sprouts — but the technique is everything. You eat it broken into pieces, wrapped in mustard leaf with fresh herbs, then dipped in a nuoc cham that cuts through the richness.',
    ingredientSections: [
        {
            title: 'Crepe batter',
            items: [
                { amount: 200, unit: 'g', name: 'rice flour' },
                { amount: 30, unit: 'g', name: 'tapioca starch' },
                { amount: 350, unit: 'ml', name: 'coconut milk' },
                { amount: 100, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 2, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Filling',
            items: [
                { amount: 200, unit: 'g', name: 'shrimp', note: 'peeled and deveined' },
                { amount: 150, unit: 'g', name: 'pork belly', note: 'thinly sliced' },
                { amount: 100, unit: 'g', name: 'bean sprouts' },
                { amount: 2, name: 'shallots', note: 'thinly sliced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'head mustard leaf (rau cai xanh)', note: 'or lettuce and perilla' },
                { amount: 1, name: 'bunch Vietnamese mint' },
                { amount: 120, unit: 'ml', name: 'nuoc cham dipping sauce' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the batter',
            description: 'Whisk rice flour, tapioca starch, coconut milk, water, turmeric, and salt until smooth. Rest for 20 minutes. Stir in sliced spring onions just before cooking. The batter should be thin and pourable.',
        },
        {
            title: 'Prepare the filling',
            description: 'Season shrimp and pork with fish sauce. Have bean sprouts and shallots ready separately.',
        },
        {
            title: 'Cook each crepe',
            description: 'Heat a 20cm non-stick or cast iron pan over high heat until very hot. Add a thin film of oil. Add 2 to 3 slices of pork and 3 to 4 shrimp and cook 1 minute. Add a handful of bean sprouts and shallots. Pour in enough batter to thinly coat the pan — swirl immediately to spread. Cover with a lid for 2 minutes.',
            tip: 'The pan must be very hot before adding batter. A cool pan produces a soft, pale crepe. A smoking-hot pan produces a blistered, golden, shattering crust.',
        },
        {
            title: 'Crisp and fold',
            description: 'Remove lid and cook uncovered for 2 to 3 more minutes until the edges curl up and the bottom is deep golden and crispy. Fold in half and slide onto a plate.',
        },
        {
            title: 'Serve and wrap',
            description: 'Break pieces of the crepe and place on mustard leaves with fresh herbs. Roll tightly and dip in nuoc cham. Eat immediately — banh xeo loses its crunch within minutes of leaving the pan.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
