'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-tam',
    title: 'Saigon Broken Rice Plate',
    subtitle: `The broken rice that was once a poor man's meal is now Saigon's most beloved dish.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/com-tam.jpg',
    intro: `Com tam means broken rice — the fractured grains left over after milling that were sold cheaply and became Saigon's most iconic dish. The plate arrives loaded: a char-grilled pork chop, a fried egg, scallion oil, and a pool of nuoc cham. The taste of Saigon at 7am.`,
    ingredientSections: [
        {
            title: 'Grilled pork chop',
            items: [
                { amount: 4, name: 'pork loin chops', note: 'bone-in' },
                { amount: 3, unit: 'tbsp', name: 'soy sauce' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'honey' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'lemongrass stalk', note: 'minced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 400, unit: 'g', name: 'broken rice (gao tam)', note: 'or jasmine rice' },
                { amount: 4, name: 'eggs', note: 'fried sunny side up' },
                { amount: 4, name: 'spring onions', note: 'for scallion oil' },
                { amount: 60, unit: 'ml', name: 'vegetable oil' },
                { amount: 120, unit: 'ml', name: 'nuoc cham dipping sauce' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate pork chops',
            description: 'Combine soy sauce, fish sauce, sugar, honey, garlic, and lemongrass. Score chops lightly and marinate at least 1 hour, ideally overnight.',
        },
        {
            title: 'Make scallion oil',
            description: 'Heat oil until shimmering. Remove from heat, add thinly sliced spring onions and salt. The residual heat wilts the onions without frying.',
        },
        {
            title: 'Grill the pork chops',
            description: 'Grill over high heat or in a cast iron pan for 3 to 4 minutes per side until deeply caramelised with charred edges.',
            tip: 'The char is not optional. Get the pan screaming hot before adding the chops.',
        },
        {
            title: 'Assemble',
            description: 'Cook broken rice. Fry eggs sunny side up. Plate rice, top with pork chop and fried egg. Drizzle scallion oil over the rice. Serve nuoc cham generously on the side.',
        },
    ],
};
export default function Page() { return <RecipeLayout recipe={recipe} />; } 
