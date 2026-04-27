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
            description: 'Drop the water spinach into a large pot of salted boiling water for exactly 30 seconds. Immediately remove and plunge the greens into a bowl of ice water to stop the cooking process, then drain thoroughly and squeeze out any excess moisture.',
            tip: 'The ice bath is non-negotiable. It "shocks" the chlorophyll to keep the stems emerald-green and crunchy even after they hit the high heat of the wok.',
        },
        {
            title: 'Heat the wok until it smokes',
            description: 'Place a dry wok or large skillet over the highest possible heat. Wait until the metal begins to shimmer and a drop of water flicked onto the surface evaporates instantly with a loud hiss.',
        },
        {
            title: 'Bloom the garlic',
            description: 'Swirl in 2 tablespoons of oil, then immediately add a generous amount of crushed garlic. Stir-fry for only 15 seconds until the garlic is fragrant and the edges just begin to turn a pale golden hue.',
            tip: 'Burnt garlic becomes bitter and ruins the delicate flavor of the greens. Pull the garlic or add the vegetables just before it fully colors to account for carry-over cooking.',
        },
        {
            title: 'Toss the greens in',
            description: 'Add the blanched water spinach into the wok all at once. Using a spatula or tongs, toss the greens continuously for about 60 seconds to ensure every stem is coated in the hot, garlic-infused oil.',
        },
        {
            title: 'Season at the end',
            description: 'Push the spinach up the sides of the wok to create a clear space in the center. Pour in a splash of fish sauce and a pinch of sugar; let the sauce bubble for a second to caramelize slightly, then toss everything together one final time.',
        },
        {
            title: 'Plate immediately',
            description: 'Pile the glistening greens onto a warm plate. Serve immediately while the stems are still crisp, accompanied by a wedge of lime and a small saucer of chili-infused fish sauce for dipping.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
