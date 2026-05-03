'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'suon-nuong-sa',
    title: 'Lemongrass Pork Ribs',
    subtitle:
        'Sườn Nướng Sả — ribs marinated overnight in crushed lemongrass, garlic and honey, then finished over glowing charcoal.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '30 min + overnight marinade',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/suon-nuong-sa.jpg',
    intro:
        'Walk past any cơm tấm stall in Saigon at 6pm and this is the smell that stops you — lemongrass hitting charcoal, sugar caramelising, pork fat rendering into smoke. The overnight marinade is non-negotiable; it is what carries the aromatics deep into the meat and what turns the edges that unmistakable mahogany black.',
    ingredientSections: [
        {
            title: 'Ribs and marinade',
            items: [
                { amount: 1, unit: 'kg', name: 'pork spare ribs', note: 'cut St Louis style, 1.5cm thick' },
                { amount: 6, name: 'lemongrass stalks', note: 'white part only, minced' },
                { amount: 8, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'honey' },
                { amount: 2, unit: 'tbsp', name: 'dark soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'five-spice powder' },
            ],
        },
        {
            title: 'Glaze',
            items: [
                { amount: 2, unit: 'tbsp', name: 'honey' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'To serve (cơm tấm style)',
            items: [
                { amount: 400, unit: 'g', name: 'broken rice', note: 'cơm tấm' },
                { amount: 4, name: 'fried eggs' },
                { amount: 1, name: 'small jar pickled daikon and carrot' },
                { amount: 1, name: 'bowl nước chấm' },
            ],
        },
    ],
    steps: [
        {
            title: 'Pound the lemongrass',
            description: 'TODO — bruise lemongrass in a mortar until fibrous and wet.',
            tip: 'TODO — blending makes it bitter; pounding releases oil without heat.',
        },
        {
            title: 'Marinate overnight',
            description: 'TODO — combine all marinade ingredients with ribs; bag or covered bowl, 8–24 hours.',
        },
        {
            title: 'Light the charcoal',
            description: 'TODO — wait until coals are ash-grey, not orange-flaming.',
            tip: 'TODO — direct flame burns the sugar; you want radiant heat.',
        },
        {
            title: 'Grill slow, then sear',
            description: 'TODO — indirect side 8 minutes per face, then over coals for char.',
        },
        {
            title: 'Baste with honey glaze',
            description: 'TODO — brush in the last 2 minutes only; any earlier and it burns.',
        },
        {
            title: 'Rest and serve',
            description: 'TODO — rest 5 minutes; serve over broken rice with fried egg, pickles and nước chấm.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
