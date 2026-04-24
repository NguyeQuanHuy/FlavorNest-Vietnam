'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-rieu',
    title: 'Crab & Tomato Noodle Soup',
    subtitle:
        'Bún Riêu — a crimson paddy-crab broth with fluffy crab-and-egg rafts floating over rice vermicelli and a mountain of herbs.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1552611052-33e04de081de?w=1600&q=80',
    intro:
        'Bún riêu is the Hanoi market lunch that makes a strong argument for freshwater crab. The rieu — those cloud-like rafts on the surface — are pure crab meat bound with egg, lifted by a broth soured with fermented rice vinegar and given its crimson colour by a splash of annatto oil. Every stall claims a different ratio of crab to tomato; the best ones taste of both in equal measure.',
    ingredientSections: [
        {
            title: 'Crab broth',
            items: [
                { amount: 500, unit: 'g', name: 'fresh paddy crabs', note: 'or 200g crab meat + 1L stock' },
                { amount: 1.5, unit: 'L', name: 'water' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
                { amount: 1, unit: 'tbsp', name: 'mắm tôm (shrimp paste)' },
                { amount: 2, unit: 'tbsp', name: 'mẻ (fermented rice vinegar)', note: 'or 1 tbsp rice vinegar' },
            ],
        },
        {
            title: 'Tomato base',
            items: [
                { amount: 5, name: 'ripe tomatoes', note: 'cut in wedges' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'annatto oil', note: 'for colour' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 400, unit: 'g', name: 'rice vermicelli (bún)', note: 'cooked' },
                { amount: 200, unit: 'g', name: 'fried tofu', note: 'cubed' },
                { amount: 1, name: 'bunch water spinach', note: 'shredded' },
                { amount: 1, name: 'bunch perilla and Vietnamese coriander' },
                { amount: 1, name: 'banana blossom', note: 'thinly sliced, optional' },
                { amount: 2, name: 'limes', note: 'cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Extract the crab essence',
            description: 'TODO — clean crabs, pound in mortar with salt, strain twice through muslin to get crab milk. Reserve.',
            tip: 'TODO — the pounding releases the protein that forms the rieu rafts. A blender will not do it.',
        },
        {
            title: 'Bring to the raft stage',
            description: 'TODO — heat crab liquid slowly, stirring once only. At 80°C the protein rises as clouds; skim them onto a plate.',
            tip: 'TODO — boiling breaks the rafts apart. Keep it below a simmer.',
        },
        {
            title: 'Build the tomato base',
            description: 'TODO — fry shallots, garlic in annatto oil; add tomatoes and sugar; cook until they collapse.',
        },
        {
            title: 'Combine and season',
            description: 'TODO — pour tomato base into crab stock; add mắm tôm and mẻ. Simmer 10 minutes.',
        },
        {
            title: 'Return the rafts',
            description: 'TODO — gently slide the reserved rieu back onto the surface. Add fried tofu.',
        },
        {
            title: 'Assemble the bowls',
            description: 'TODO — vermicelli in bowls, ladle broth with rieu over, top with herbs and banana blossom; lime on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
