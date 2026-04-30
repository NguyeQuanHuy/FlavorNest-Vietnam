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
        'If phở is the quiet poetry of Hanoi, bún bò Huế is the defiant opera of central Vietnam. Born in the imperial city that once served the Nguyễn dynasty, this soup refuses to be polite. The broth is deep red-orange from annatto oil, perfumed with lemongrass, and funked with mắm ruốc — a fermented shrimp paste that divides first-time tasters and converts them for life. Anthony Bourdain called it "the greatest soup in the world." He wasn\'t wrong. Most of the 3 hours is passive simmering; the result tastes even better on day two.',
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
                'Return the rinsed meats and bones to the cleaned pot. Cover with 4 litres of fresh water. Add the charred onion, ginger and the bundles of bruised lemongrass. Bring to a gentle simmer, ski
