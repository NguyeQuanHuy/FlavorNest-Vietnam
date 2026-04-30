'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'hue-spicy-beef-noodle-soup',
    title: 'Hue Spicy Beef Noodle Soup',
    subtitle:
        'Bún Bò Huế — the fiery, lemongrass-scented noodle soup from the imperial city of Huế, with tender beef shank, pork knuckle, and a broth stained red from annatto and shrimp paste.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 6,
    heroImage:
        'https://images.unsplash.com/photo-1583337426008-2fef51aa841b?w=1600&q=85',
    intro:
        `If phở is the quiet poetry of Hanoi, bún bò Huế is the defiant opera of central Vietnam. Born in the imperial city that once served the Nguyễn dynasty, this soup refuses to be polite. The broth is deep red-orange from annatto oil, perfumed with lemongrass, and funked with mắm ruốc — a fermented shrimp paste that divides first-time tasters and converts them for life. Anthony Bourdain called it "the greatest soup in the world." He wasn\'t wrong. Most of the 3 hours is passive simmering; the result tastes even better on day two.`,
    ingredientSections: [
        {
            title: 'Broth and meats',
            items: [
                { amount: 1.5, unit: 'kg', name: 'beef shank', note: 'whole, with connective tissue' },
                { amount: 1, unit: 'kg', name: 'pork knuckle', note: 'cut in 2 pieces' },
                { amount: 500, unit: 'g', name: 'beef bones', note: 'split, for marrow' },
                { amount: 4, unit: 'L', name: 'water' },
                { amount: 1, name: 'large yellow onion', note: 'charred whole' },
                { amount: 50, unit: 'g', name: 'ginger', note: 'charred whole' },
                { amount: 2, unit: 'tbsp', name: 'rock sugar' },
                { amount: 2, unit: 'tbsp', name: 'sea salt' },
            ],
        },
        {
            title: 'Lemongrass-shrimp paste base',
            items: [
                { amount: 8, name: 'lemongrass stalks', note: 'bruised, tied in bundles' },
                { amount: 3, unit: 'tbsp', name: 'mắm ruốc Huế', note: 'fermented shrimp paste' },
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sa tế', note: 'Vietnamese chilli oil, optional' },
            ],
        },
        {
            title: 'Annatto red oil',
            items: [
                { amount: 4, unit: 'tbsp', name: 'neutral oil' },
                { amount: 2, unit: 'tbsp', name: 'annatto seeds (hạt điều màu)' },
                { amount: 5, name: 'shallots', note: 'minced' },
                { amount: 6, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'crushed dried chilli flakes' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 600, unit: 'g', name: 'thick round bún bò noodles' },
                { amount: 200, unit: 'g', name: 'chả Huế', note: 'Huế-style pork sausage, sliced — optional' },
                { amount: 200, unit: 'g', name: 'pig blood cubes', note: 'optional, traditional' },
                { amount: 1, name: 'plate of bean sprouts, banana blossom, Thai basil, rice paddy herb' },
                { amount: 3, name: 'limes', note: 'cut in wedges' },
                { amount: 4, name: 'bird\'s eye chillies', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the meats',
            description:
                'In a large pot, cover the beef shank, pork knuckle and beef bones with cold water. Add a tablespoon of salt. Bring to a rolling boil for 5 minutes — the surface will turn grey with foam. Drain everything, rinse the meats and bones thoroughly under cold water, and scrub the pot. This step removes the off-smell and is what keeps the final broth clear.',
            tip: 'Skip this and your broth will be cloudy and taste muddy. Non-negotiable.',
        },
        {
            title: 'Char the aromatics',
            description:
                'Place the whole onion and ginger directly over an open flame (or in a dry cast-iron pan) until the skins blacken and the kitchen smells smoky, about 5 minutes. Don\'t rinse off the char — it carries deep colour and flavour into the broth.',
        },
        {
            title: 'Build and simmer the broth',
            description:
                'Return the rinsed meats and bones to the cleaned pot. Cover with 4 litres of fresh water. Add the charred onion, ginger and the bundles of bruised lemongrass. Bring to a gentle simmer, skim aggressively for the first 15 minutes, then reduce heat to low. Simmer uncovered for 90 minutes.',
            tip: 'Never let it boil hard. A lazy simmer keeps the broth crystal-clear and the meats tender.',
        },
        {
            title: 'Pull the meats',
            description:
                'After 90 minutes, the beef shank should be fork-tender and the pork knuckle should be falling off the bone. Remove both, plunge them into a bowl of ice water for 5 minutes (this firms the texture for slicing), then set aside. Continue simmering the bones for another 30 minutes.',
        },
        {
            title: 'Make the annatto red oil',
            description:
                'In a small saucepan, warm the oil with the annatto seeds over low heat for 2 minutes until the oil turns deep red. Strain out the seeds and discard. Return the red oil to the pan, add minced shallots, garlic and chilli flakes; fry 90 seconds until fragrant. This oil is what gives bún bò Huế its signature crimson sheen.',
            tip: 'Don\'t overheat the annatto — it turns bitter above 80°C. Keep the heat gentle.',
        },
        {
            title: 'Finish the broth',
            description:
                'Strain the simmered broth through a fine-mesh sieve into a clean pot. Discard the solids. Dissolve the mắm ruốc in a cup of hot broth, then strain it back into the pot through a fine sieve (this catches any sand). Add fish sauce, rock sugar and sa tế. Stir in half of the red oil. Taste and adjust — it should be deeply savoury, slightly sweet, pleasantly spicy, and unmistakably funky from the shrimp paste.',
        },
        {
            title: 'Slice the meats',
            description:
                'Slice the cooled beef shank against the grain into 3mm slices. Cut the pork knuckle into smaller serving pieces. Slice the chả Huế if using.',
        },
        {
            title: 'Cook the noodles',
            description:
                'Bring a separate pot of water to a boil. Cook the bún bò noodles according to package instructions — usually 5–7 minutes for dried, 2 minutes for fresh. Drain and divide among 6 large bowls.',
        },
        {
            title: 'Assemble and serve',
            description:
                'Top each bowl with slices of beef shank, a piece of pork knuckle, chả Huế and pig blood if using. Ladle the hot broth over everything, then drizzle an extra spoonful of red oil on top for colour. Serve immediately with the herb plate, lime wedges and sliced chillies on the side. Each person adds herbs and squeezes lime to their own bowl. Eat it hot — this soup is meant to make you sweat.',
            tip: 'First-time eaters: start with a small spoonful of broth to adjust to the shrimp paste. By bowl end, you\'ll be a convert.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
