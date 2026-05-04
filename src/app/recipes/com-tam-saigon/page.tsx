'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-tam-saigon',
    title: 'Saigon Broken Rice Plate',
    subtitle: `The broken rice that was once a poor man's meal is now Saigon's most beloved dish.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/com-tam-sai-gon.jpg',
    intro: `Com tam means broken rice — the fractured grains left over after milling that were sold cheaply to those who could not afford whole rice. Saigon took this humble ingredient and built its most iconic dish around it. The broken grains have a slightly different texture to whole rice, absorbing sauces more readily and providing a softer, starchier base. The plate arrives loaded: a char-grilled pork chop, a fried egg, steamed pork cake (bi), scallion oil, and a pool of nuoc cham. The taste of Saigon at 7am.`,
    ingredientSections: [
        {
            title: 'Grilled pork chop (suon nuong)',
            items: [
                { amount: 4, name: 'pork loin chops', note: 'bone-in, about 2cm thick' },
                { amount: 3, unit: 'tbsp', name: 'soy sauce' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'honey' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'shallot', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'lemongrass', note: 'finely minced' },
            ],
        },
        {
            title: 'Scallion oil (mo hanh)',
            items: [
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 60, unit: 'ml', name: 'vegetable oil' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'Nuoc cham',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'warm water' },
                { amount: 2, unit: 'tbsp', name: 'lime juice' },
                { amount: 1, name: 'garlic clove', note: 'minced' },
                { amount: 1, name: 'red chilli', note: 'sliced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 400, unit: 'g', name: 'broken rice (gao tam)', note: 'or jasmine rice' },
                { amount: 4, name: 'eggs', note: 'fried sunny side up' },
                { amount: 1, name: 'cucumber', note: 'sliced' },
                { amount: 2, name: 'tomatoes', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the pork',
            description: 'Combine soy sauce, fish sauce, sugar, honey, garlic, shallot, and lemongrass. Score the pork chops lightly on both sides and marinate for at least 1 hour, ideally overnight.',
            tip: 'Scoring helps the marinade penetrate and creates more caramelised edges when grilling.',
        },
        {
            title: 'Make the sauce',
            description: 'Dissolve sugar in warm water. Add fish sauce, lime juice, garlic, and chilli. Taste and adjust — it should be balanced between sweet, salty, sour, and spicy. Set aside.',
        },
        {
            title: 'Make the scallion oil',
            description: 'Heat oil in a small pan until shimmering. Remove from heat, add spring onions and salt, and stir. The residual heat will wilt the onions without frying them. Set aside.',
        },
        {
            title: 'Grill the pork chops',
            description: 'Grill over high heat or in a cast iron pan for 3 to 4 minutes per side until deeply caramelised with charred edges and cooked through. Rest 2 minutes before serving.',
            tip: 'The char is not optional. Pale, steamed-looking pork chops are the most common failure of home com tam. Get the pan or grill screaming hot.',
        },
        {
            title: 'Cook the rice and assemble',
            description: 'Cook broken rice according to packet instructions. Fry eggs sunny side up. Plate rice, top with pork chop and fried egg. Drizzle scallion oil over the rice. Add cucumber and tomato slices. Serve sauce generously on the side or poured directly over.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
