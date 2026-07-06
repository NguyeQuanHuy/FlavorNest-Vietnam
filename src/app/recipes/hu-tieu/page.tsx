'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'hu-tieu',
    title: 'Southern Pork Noodle Soup',
    subtitle: 'Hu tieu — clear pork-and-dried-squid broth with shrimp, sliced pork and springy rice noodles. The Southern answer to pho.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/hu-tieu.jpg',
    intro: 'Hu tieu is the Southern Vietnamese answer to pho — and it could not be more different. Where pho is brooding and cinnamon-deep, hu tieu is bright, clean, almost translucent. The broth is built on pork bones and dried squid (or dried shrimp), giving it a faint sweetness of the sea. The noodles are slim, springy rice strands. The toppings are generous: shrimp, sliced pork loin, ground pork, quail eggs, crispy fried garlic. Eaten "nuoc" (in soup) or "kho" (dry, with the broth on the side) — the choice is a small local identity test. Each Mekong town has its own version.',
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 1, unit: 'kg', name: 'pork bones', note: 'split, blanched and rinsed' },
                { amount: 200, unit: 'g', name: 'pork loin', note: 'whole piece' },
                { amount: 30, unit: 'g', name: 'dried squid', note: 'or 30g dried shrimp as substitute' },
                { amount: 2.5, unit: 'L', name: 'water' },
                { amount: 1, name: 'large yellow onion', note: 'charred whole' },
                { amount: 50, unit: 'g', name: 'rock sugar' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 12, name: 'large shrimp', note: 'peeled, deveined' },
                { amount: 200, unit: 'g', name: 'ground pork' },
                { amount: 12, name: 'quail eggs', note: 'hard-boiled and peeled' },
                { amount: 100, unit: 'g', name: 'cha lua (Vietnamese pork sausage)', note: 'sliced' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried garlic' },
            ],
        },
        {
            title: 'Noodles and finish',
            items: [
                { amount: 400, unit: 'g', name: 'fresh hu tieu noodles', note: 'or thin rice noodles' },
                { amount: 200, unit: 'g', name: 'bean sprouts' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, name: 'bunch garlic chives (he)', note: 'cut in 3cm lengths' },
                { amount: 2, name: 'limes', note: 'cut in wedges' },
                { amount: 0.5, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch and char',
            description: 'Cover pork bones with cold water, bring to a hard boil for 5 minutes, drain and rinse thoroughly. Char the whole onion directly over a flame until the skin blackens. Both steps are non-negotiable for a clear, sweet broth.',
            tip: 'Skip the blanching and the broth will be cloudy. Skip the charring and it will lack depth.',
        },
        {
            title: 'Build and simmer the broth',
            description: 'Return rinsed bones to a clean pot with the pork loin, charred onion, dried squid and 2.5L fresh water. Bring to a gentle simmer. Skim aggressively for the first 10 minutes, then reduce heat to low and simmer 90 minutes. Pull the pork loin after 30 minutes, cool, slice thin, set aside.',
            tip: 'Never let it boil hard. A lazy simmer is the difference between transparent and muddy broth.',
        },
        {
            title: 'Cook the toppings',
            description: 'Poach the shrimp in a small pot of salted water for 90 seconds until just pink. Saute the ground pork in 1 tbsp oil with a pinch of salt and pepper until cooked and slightly browned, 5 minutes. Set both aside.',
        },
        {
            title: 'Strain and season the broth',
            description: 'Strain the broth through a fine sieve into a clean pot. Discard solids. Add rock sugar, fish sauce and salt. Taste — it should be clean, sweet, deeply savoury. Keep at a gentle simmer.',
        },
        {
            title: 'Cook the noodles',
            description: 'Bring a separate pot of water to a boil. Drop in fresh hu tieu noodles for 90 seconds until translucent and springy. Drain and divide among 4 bowls.',
            tip: 'Never cook noodles in the broth itself — they release starch and cloud everything.',
        },
        {
            title: 'Assemble and serve',
            description: 'Top each bowl with sliced pork loin, shrimp, ground pork, quail eggs and cha lua. Ladle hot broth over. Finish with crispy fried garlic, spring onion, garlic chives and a crack of black pepper. Serve immediately with bean sprouts and lime wedges on the side.',
            tip: 'For "hu tieu kho" (dry version), toss noodles with 1 tbsp soy sauce, 1 tsp sugar and a spoonful of fried garlic oil; serve broth in a separate bowl on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
