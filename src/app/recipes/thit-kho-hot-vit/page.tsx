'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'thit-kho-hot-vit',
    title: 'Caramelised Pork Belly with Braised Eggs',
    subtitle:
        'Thịt Kho Hột Vịt — tender, mahogany-glazed pork belly and golden eggs slow-cooked in fresh coconut water.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '90 min',
    rating: 4.9,
    baseServings: 6,
    heroImage: '/images/recipes/thit-kho-hot-vit.jpg',
    intro:
        'Thịt Kho Hột Vịt is the undisputed soul of Southern Vietnamese home cooking. More than just a stew, it is a symbol of family reunion and prosperity, traditionally prepared in large pots during the Lunar New Year (Tet). The magic lies in the slow braise with fresh coconut water, which transforms the pork fat into a buttery, translucent texture and gives the sauce a natural, delicate sweetness that no sugar can replicate.',
    ingredientSections: [
        {
            title: 'The Meat and Eggs',
            items: [
                { amount: 1, unit: 'kg', name: 'pork belly', note: 'cut into 4-5cm large cubes' },
                { amount: 6, name: 'large eggs', note: 'hard-boiled and peeled' },
                { amount: 1, unit: 'L', name: 'fresh coconut water', note: 'must be fresh for best flavour' },
            ],
        },
        {
            title: 'Aromatics and Seasoning',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce', note: 'premium quality' },
                { amount: 2, unit: 'tbsp', name: 'coconut nectar or sugar' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 4, unit: 'cloves', name: 'garlic', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'dark soy sauce', note: 'for deep golden color' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Optional Garnish',
            items: [
                { amount: 2, name: 'bird\'s eye chillies', note: 'kept whole for aroma' },
                { amount: 1, unit: 'handful', name: 'pickled bean sprouts', note: 'served on the side' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the pork',
            description: 'Mix the pork cubes with minced shallots, garlic, sugar, fish sauce, and pepper. Let it rest for at least 30 minutes, or ideally 2 hours.',
            tip: 'Marinating longer helps the fat become clearer and the meat firmer after cooking.',
        },
        {
            title: 'Sear the meat',
            description: 'In a heavy-bottomed pot, lightly sear the pork cubes over medium heat until the sides are firm and slightly golden.',
        },
        {
            title: 'The Braise',
            description: 'Pour in the fresh coconut water until the meat is fully submerged. Bring to a boil, then carefully skim off any foam to keep the sauce clear.',
            tip: 'If coconut water doesn\'t cover the meat, top it up with a little filtered water.',
        },
        {
            title: 'Slow cook',
            description: 'Reduce heat to low, add the dark soy sauce for color, and simmer for 45 minutes with a lid partially closed.',
        },
        {
            title: 'Add the eggs',
            description: 'Gently add the hard-boiled eggs and whole chillies into the pot. Continue to simmer for another 30-45 minutes until the pork is fork-tender.',
            tip: 'Avoid over-stirring at this stage to prevent the eggs from breaking.',
        },
        {
            title: 'Final reduce and serve',
            description: 'Adjust seasoning with fish sauce if needed. The sauce should be golden-brown and slightly reduced. Serve hot with steamed jasmine rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
