'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'phu-yen-chives-noodle-soup',
    title: 'Phu Yen Chives Noodle Soup',
    subtitle:
        'Bánh Canh Hẹ Phú Yên — thick chewy rice noodles in a clear pork and dried anchovy broth, finished with a generous handful of fresh garlic chives.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/phu-yen-chives-noodle-soup.jpg',
    intro:
        'Bánh canh hẹ is the breakfast of Phú Yên, a fishing province on Vietnam\'s south-central coast. Unlike the more famous bánh canh cua of Saigon or bánh canh Trảng Bàng of Tây Ninh, the Phú Yên version is defined by two humble ingredients: dried anchovies (cá cơm khô) that lend the broth a whisper of the sea, and Vietnamese garlic chives (hẹ) sliced raw on top for a bright, pungent finish. Every Sunday morning my mother would start the broth before sunrise — pork bones, a handful of dried anchovies, and patience. By the time my siblings and I woke up, the kitchen smelled of the sea. She always said: "The chives go in last. Never cook them. They should still be alive when you taste them."',
    ingredientSections: [
        {
            title: 'For the broth',
            items: [
                { amount: 500, unit: 'g', name: 'pork neck bones', note: 'ask butcher for split bones' },
                { amount: 30, unit: 'g', name: 'dried anchovies (cá cơm khô)', note: 'small ones, heads removed' },
                { amount: 1, name: 'large yellow onion', note: 'halved' },
                { amount: 1, name: 'thumb-sized piece ginger', note: 'halved lengthwise' },
                { amount: 1, unit: 'tbsp', name: 'rock sugar' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'Phú Quốc preferred' },
                { amount: 1, unit: 'tsp', name: 'sea salt', note: 'to taste' },
                { amount: 2.5, unit: 'L', name: 'water' },
            ],
        },
        {
            title: 'For the noodles',
            items: [
                { amount: 400, unit: 'g', name: 'fresh bánh canh noodles', note: 'or thick udon as substitute' },
                { amount: 200, unit: 'g', name: 'fish cake (chả cá)', note: 'sliced thin' },
                { amount: 8, name: 'quail eggs', note: 'hard-boiled and peeled, optional' },
                { amount: 2, unit: 'tbsp', name: 'dried shrimp', note: 'soaked briefly' },
            ],
        },
        {
            title: 'To finish',
            items: [
                { amount: 1, name: 'large bunch garlic chives (hẹ)', note: 'cut in 3cm lengths, raw' },
                { amount: 2, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 0.5, unit: 'tsp', name: 'freshly cracked black pepper' },
                { amount: 2, name: 'limes', note: 'cut in wedges' },
                { amount: 2, name: 'bird\'s eye chillies', note: 'sliced, optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the bones',
            description:
                'Bring a large pot of water to a rolling boil. Drop in the pork bones and blanch for 5 minutes until the surface foams grey. Drain, rinse the bones thoroughly under cold running water, and scrub the pot clean. This step is non-negotiable — without it, the broth will turn cloudy and taste muddy.',
            tip: 'The bones should look pale and clean after rinsing. Any leftover red bits will turn into scum during the simmer.',
        },
        {
            title: 'Char the aromatics',
            description:
                'Place the halved onion and ginger directly over an open flame (or in a dry cast-iron pan over high heat) until the cut sides are blackened and fragrant, about 4 minutes. Don\'t rinse off the char — it carries deep, smoky flavour into the broth.',
        },
        {
            title: 'Build and simmer the broth',
            description:
                'Return the cleaned bones to the pot with 2.5 litres of fresh water. Add the charred onion, ginger and dried anchovies. Bring to a gentle simmer over medium heat. Skim any foam that rises for the first 10 minutes, then reduce heat to low and simmer uncovered for 45 minutes. Do not let it boil hard — a lazy simmer keeps the broth crystal-clear.',
            tip: 'Resist the urge to stir. Stirring breaks the bones down and clouds the broth.',
        },
        {
            title: 'Prepare the toppings',
            description:
                'While the broth simmers, wash the garlic chives thoroughly and pat dry. Slice into 3cm lengths and pile on a plate. Slice the fish cake, hard-boil and peel the quail eggs. Soak the dried shrimp in warm water for 5 minutes, then drain. Arrange everything on a plate so assembly is fast.',
        },
        {
            title: 'Strain and season the broth',
            description:
                'After 45 minutes, strain the broth through a fine-mesh sieve into a clean pot. Discard the solids — the bones have given everything they have. Add rock sugar, fish sauce and salt. Taste and adjust: the broth should be balanced, slightly sweet from the sugar, deeply savoury from the anchovies. Return to a gentle simmer.',
            tip: 'Don\'t over-salt. The fish cake and dried shrimp will add more saltiness when you assemble.',
        },
        {
            title: 'Cook the noodles',
            description:
                'Bring a separate pot of water to a boil. Add the fresh bánh canh noodles and cook for 2–3 minutes until they float and turn translucent. Drain and divide among 4 warmed bowls.',
        },
        {
            title: 'Assemble and serve',
            description:
                'To each bowl of noodles, add 4–5 slices of fish cake, 2 quail eggs and a sprinkle of dried shrimp. Ladle hot broth over the top to warm everything. Finish with a generous handful of raw garlic chives, a pinch of crispy shallots, and a grind of black pepper. Serve immediately with lime wedges and sliced chilli on the side.',
            tip: 'Never cook the chives. They should still be bright green and pungent when they hit the hot broth — that\'s the whole point of this dish.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
