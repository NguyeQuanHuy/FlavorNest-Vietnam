'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-ca',
    title: 'Vietnamese Fish Noodle Soup',
    subtitle: 'Bun ca — a bright, dill-perfumed broth with crispy pan-fried fish, fish cakes and rice vermicelli. Hai Phong style.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/bun-ca.jpg',
    intro: 'Bun ca is the coastal Northern answer to pho — lighter, brighter, with the sharp clean flavour of the sea. Hai Phong, the port city east of Hanoi, makes the most celebrated version: a clear fish-bone broth perfumed with dill and tomato, topped with chunks of fish that have been pan-fried until shattering-crisp. The contrast of the crackling skin against the gentle broth is the whole point. A favourite breakfast for people who want fish, not beef, before noon.',
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 500, unit: 'g', name: 'fish bones and heads', note: 'snapper, perch or barramundi' },
                { amount: 2, unit: 'L', name: 'water' },
                { amount: 1, name: 'large yellow onion', note: 'charred whole' },
                { amount: 30, unit: 'g', name: 'ginger', note: 'charred' },
                { amount: 4, name: 'ripe tomatoes', note: 'cut in wedges' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'rock sugar' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
            ],
        },
        {
            title: 'Fish and toppings',
            items: [
                { amount: 500, unit: 'g', name: 'firm white fish fillets', note: 'cut in 4cm chunks' },
                { amount: 200, unit: 'g', name: 'fish cake (cha ca)', note: 'sliced' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'sea salt' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for frying' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 400, unit: 'g', name: 'rice vermicelli (bun)', note: 'cooked' },
                { amount: 1, name: 'large bunch dill', note: 'cut in 5cm lengths' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'bunch perilla and Vietnamese coriander' },
                { amount: 200, unit: 'g', name: 'bean sprouts' },
                { amount: 2, name: 'limes', note: 'cut in wedges' },
                { amount: 3, name: 'birds eye chillies', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Char the aromatics',
            description: 'Char the onion and ginger over an open flame until blackened. Set aside.',
        },
        {
            title: 'Build the fish broth',
            description: 'Rinse the fish bones thoroughly to remove any blood. Place in a pot with 2L cold water, charred onion and ginger. Bring to a gentle simmer. Skim foam aggressively for the first 10 minutes — fish broth foams more than meat broth and skimming is everything for clarity.',
            tip: 'Never let fish broth boil hard. It turns muddy and bitter in seconds.',
        },
        {
            title: 'Add tomatoes and simmer',
            description: 'After 15 minutes of skimming, add tomato wedges and continue simmering for 25 minutes. The tomatoes will collapse and stain the broth a soft pink-orange.',
        },
        {
            title: 'Prep the fish',
            description: 'Pat the fish chunks completely dry with paper towel. Toss with turmeric and salt — let sit 10 minutes. Heat oil in a non-stick pan until shimmering. Fry fish in a single layer 3 minutes per side until shattering-crisp and deep gold. Drain on paper.',
            tip: 'Wet fish will not crisp. Dry it twice. The pan must be hot enough that the fish sizzles immediately.',
        },
        {
            title: 'Strain and finish the broth',
            description: 'Strain broth through a fine sieve into a clean pot. Discard solids. Season with fish sauce, rock sugar and salt. Taste — it should be light, clean, faintly sweet from tomato and deeply savoury from the fish bones. Add sliced fish cake and warm through for 2 minutes.',
        },
        {
            title: 'Assemble and serve',
            description: 'Divide rice vermicelli among 4 bowls. Ladle hot broth with fish cake over. Top with crispy fried fish chunks, a generous handful of dill, spring onion and fresh herbs. Serve immediately with bean sprouts, lime and chilli on the side. The crispy fish should still crackle when it hits the broth.',
            tip: 'Add the dill at the very end. Cook it and you lose the perfume that makes this soup what it is.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
