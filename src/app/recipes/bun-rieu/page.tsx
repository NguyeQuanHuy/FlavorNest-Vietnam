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
    heroImage: '/images/recipes/bun-rieu.jpg',
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
            description: 'Clean the paddy crabs and remove the shells. Place the crab bodies in a mortar with a pinch of salt and pound vigorously into a fine paste. Add water, stir well, and strain the mixture twice through a muslin cloth or fine sieve to collect the "crab milk," discarding the gritty shell fragments.',
            tip: 'The traditional pounding action releases the specific proteins needed to form thick, fluffy "rieu" rafts. A blender blades chop the fibers too finely, which often results in a weak, sandy texture instead of solid clouds.',
        },
        {
            title: 'Bring to the raft stage',
            description: 'Pour the crab liquid into a pot and heat it very slowly over medium-low heat, stirring once at the beginning to prevent sticking. As the temperature reaches approximately 80°C, the protein will coagulate and rise to the surface in large, soft clouds; carefully skim these rafts onto a separate plate.',
            tip: 'Boiling is the enemy of a good raft. If the liquid boils aggressively, the turbulence will break the delicate protein clouds apart into tiny grains. Keep the heat strictly below a simmer.',
        },
        {
            title: 'Build the tomato base',
            description: 'In a separate pan, sauté minced shallots and garlic in annatto oil until fragrant and vibrant red. Add the tomato wedges and a sprinkle of sugar, cooking them over medium heat until they soften and collapse into a rich, colorful base.',
        },
        {
            title: 'Combine and season',
            description: 'Pour the sautéed tomato base into the main pot containing the crab stock. Season the broth with fermented shrimp paste (mắm tôm), fermented rice (mẻ) for a subtle sourness, and salt. Let the broth simmer gently for 10 minutes to develop depth.',
        },
        {
            title: 'Return the rafts',
            description: 'Gently slide the reserved crab "rieu" rafts back onto the surface of the simmering broth so they stay intact. Add the deep-fried tofu puffs, allowing them to bob on the surface and soak up the savory, tangy soup.',
        },
        {
            title: 'Assemble the bowls',
            description: 'Place fresh rice vermicelli in bowls and carefully ladle the hot broth over the noodles, ensuring everyone gets a generous portion of the crab raft and tofu. Serve with a platter of split water spinach, shredded banana blossom, and fresh herbs, with lime wedges and extra mắm tôm on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
