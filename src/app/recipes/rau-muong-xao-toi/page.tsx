'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'rau-muong-xao-toi',
    title: 'Stir-Fried Water Spinach with Garlic',
    subtitle:
        'Rau Muống Xào Tỏi — water spinach flashed in a screaming wok with smashed garlic and a splash of fish sauce. Three ingredients, ten minutes, national icon.',
    category: 'VEGETARIAN',
    difficulty: 'Easy',
    totalTime: '10 min',
    rating: 4.8,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1600&q=80',
    intro:
        'If Vietnam had a national vegetable, it would be rau muống. The trick with this stir-fry is not the ingredient list — it is the heat. A cold wok gives you soggy, grey-green stems; a screaming wok gives you what you want: stems that still snap, leaves that are just wilted, and the unmistakable smell of garlic meeting fish sauce over fire.',
    ingredientSections: [
        {
            title: 'Water spinach',
            items: [
                { amount: 600, unit: 'g', name: 'water spinach (rau muống)', note: 'tough ends trimmed, cut in 8cm lengths' },
                { amount: 1, unit: 'tbsp', name: 'sea salt', note: 'for blanching water' },
            ],
        },
        {
            title: 'Stir-fry',
            items: [
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
                { amount: 8, name: 'garlic cloves', note: 'smashed and roughly chopped' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'or soy sauce for vegan' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.25, unit: 'tsp', name: 'MSG', note: 'optional, traditional' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'lime', note: 'cut in wedges' },
                { amount: 1, name: 'small dish of fish sauce with chilli and lime', note: 'for dipping stems' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch to lock the colour',
            description: 'TODO — drop water spinach into salted boiling water for 30 seconds; plunge into ice water; drain hard.',
            tip: 'TODO — the ice bath is non-negotiable. It keeps the stems emerald-green through the wok.',
        },
        {
            title: 'Heat the wok until it smokes',
            description: 'TODO — dry wok over highest heat until a water drop evaporates instantly.',
        },
        {
            title: 'Bloom the garlic',
            description: 'TODO — add oil, then garlic; fry 15 seconds only until edges turn pale gold.',
            tip: 'TODO — burnt garlic ruins the dish. Pull it just before it colours.',
        },
        {
            title: 'Toss the greens in',
            description: 'TODO — add water spinach in one go, toss continuously for 60 seconds.',
        },
        {
            title: 'Season at the end',
            description: 'TODO — push spinach up the sides, pour fish sauce and sugar into the bottom of the wok, toss once more.',
        },
        {
            title: 'Plate immediately',
            description: 'TODO — pile onto a warm plate; serve with lime and the dipping fish sauce on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
