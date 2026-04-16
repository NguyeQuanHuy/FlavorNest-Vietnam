'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'mushroom-tofu-vegetarian-pho',
    title: 'Mushroom & Tofu Vegetarian Pho',
    subtitle:
        'A meatless bowl with all the depth — three mushrooms build the umami, the broth stays true to its cinnamon-and-star-anise soul.',
    category: 'VEGETARIAN',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.7,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1585103228236-9b6fdce30f21?w=1600&q=80',
    intro:
        'Phở chay is not pho with the meat removed — it is its own tradition, refined over centuries in the Buddhist kitchens of Huế and Đà Lạt. Three mushrooms stand in for bones and brisket: shiitake for depth, king oyster for texture, straw mushrooms for softness. The spice profile stays pure pho.',
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 3, unit: ' L', name: 'water' },
                { amount: 300, unit: 'g', name: 'daikon radish', note: 'cut in chunks' },
                { amount: 1, name: 'large carrot', note: 'cut in chunks' },
                { amount: 1, name: 'large yellow onion', note: 'charred whole' },
                { amount: 50, unit: 'g', name: 'ginger', note: 'charred whole' },
                { amount: 30, unit: 'g', name: 'dried shiitake mushrooms' },
            ],
        },
        {
            title: 'Spice bundle',
            items: [
                { amount: 2, name: 'cinnamon sticks' },
                { amount: 4, name: 'star anise pods' },
                { amount: 2, name: 'black cardamom pods', note: 'thảo quả, lightly crushed' },
                { amount: 2, unit: ' tbsp', name: 'soy sauce' },
                { amount: 1, unit: ' tbsp', name: 'rock sugar', note: 'or yellow rock candy' },
                { amount: 0.5, unit: ' tsp', name: 'sea salt', note: 'adjust to taste' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 400, unit: 'g', name: 'fresh pho rice noodles' },
                { amount: 200, unit: 'g', name: 'fried tofu puffs', note: 'halved' },
                { amount: 200, unit: 'g', name: 'king oyster mushrooms', note: 'torn into strips' },
                { amount: 150, unit: 'g', name: 'straw or oyster mushrooms' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, name: 'bunch Thai basil, sawtooth herb, bean sprouts, lime' },
            ],
        },
    ],
    steps: [
        {
            title: 'Char the aromatics',
            description:
                'Place the whole onion and ginger directly over an open flame (or in a dry cast-iron pan) and char the skins until blackened and fragrant, about 5 minutes. Rinse off the burnt skin but keep the smoky flesh. This step is what gives pho its signature aroma — skipping it leaves the broth flat.',
            tip: 'Use tongs and open a window. The caramelization matters more than looking clean at the end.',
        },
        {
            title: 'Toast the spices',
            description:
                'In a dry pan over low heat, toast the cinnamon, star anise, and cardamom for 2–3 minutes until fragrant. Tie them in a muslin bag or tea infuser — you will want to fish them out later so they do not turn the broth bitter.',
        },
        {
            title: 'Simmer the broth',
            description:
                'Add the water to a large pot with the daikon, carrot, charred aromatics, dried shiitake, and spice bundle. Bring to a boil, then lower to the gentlest simmer. Cook uncovered for 60 minutes — no stirring. Let the liquid reduce slightly to concentrate the vegetable sweetness.',
            tip: 'Remove the spice bundle after 40 minutes. Any longer and tannins leach out, turning the broth harsh.',
        },
        {
            title: 'Sear the fresh mushrooms',
            description:
                'While the broth simmers, heat a splash of oil in a pan over high heat. Add the king oyster and straw mushrooms and sear without moving them for 2 minutes, then toss. Add 1 tbsp soy sauce and let it reduce — the mushrooms should caramelize on the edges. This is where deep, savory umami comes from.',
        },
        {
            title: 'Season and combine',
            description:
                'Strain the broth through a fine sieve into a clean pot for a crystal-clear result. Season with soy sauce, rock sugar, and salt — taste as you go. Add the seared mushrooms and tofu puffs, simmer 5 more minutes so they soak up the broth.',
        },
        {
            title: 'Assemble the bowls',
            description:
                'Blanch the rice noodles in boiling water for 10 seconds, drain, and divide among four bowls. Top with mushrooms and tofu, then ladle the hot broth over everything until the noodles are submerged. Finish with spring onion, black pepper, and serve with the herb plate, bean sprouts, lime, and chili on the side — let each person dress their own bowl.',
            tip: 'Thai basil and sawtooth herb (ngò gai) are non-negotiable. Skip them and the bowl feels incomplete, no matter how good the broth is.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}