'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'grilled-lemongrass-pork',
    title: 'Grilled Lemongrass Pork Chops',
    subtitle: 'Pork chops marinated overnight in lemongrass and fish sauce — grilled until deeply caramelised.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/grilled-lemongrass-pork.jpg',
    intro: `Suon nuong xa is the pork chop of Saigon's com tam stalls — marinated overnight in lemongrass, fish sauce, garlic, and five-spice, then grilled over charcoal until the exterior is deeply caramelised and the edges char. The lemongrass perfumes the meat throughout rather than just coating the surface. Served over broken rice with a fried egg and nuoc cham, it is one of the definitive tastes of the city.`,
    ingredientSections: [
        {
            title: 'Marinade',
            items: [
                { amount: 4, name: 'pork loin chops or bone-in pork chops', note: 'about 2cm thick' },
                { amount: 3, name: 'lemongrass stalks', note: 'white part only, finely minced' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'honey' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'five-spice powder' },
                { amount: 1, unit: 'tbsp', name: 'vegetable oil' },
                { amount: 1, name: 'pinch of pepper' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 400, unit: 'g', name: 'broken rice or jasmine rice', note: 'cooked' },
                { amount: 4, name: 'eggs', note: 'fried sunny side up' },
                { amount: 120, unit: 'ml', name: 'nuoc cham' },
                { amount: 4, name: 'spring onions', note: 'for scallion oil' },
                { amount: 1, name: 'cucumber', note: 'sliced' },
                { amount: 60, unit: 'g', name: 'pickled daikon and carrot' },
            ],
        },
    ],
    steps: [
        {
            title: 'Score and marinate',
            description: 'Score the pork chops lightly on both sides with a knife to help the marinade penetrate. Combine all marinade ingredients and coat the chops thoroughly. Marinate at least 2 hours — overnight in the fridge produces noticeably deeper flavour.',
            tip: 'The overnight marinade is not optional if you want the lemongrass flavour to penetrate the meat rather than just coat the surface.',
        },
        {
            title: 'Make scallion oil',
            description: 'Heat oil in a small pan until shimmering. Remove from heat, add thinly sliced spring onions and a pinch of salt. The residual heat wilts the onions without frying them.',
        },
        {
            title: 'Grill the pork',
            description: 'Grill over high heat or in a screaming-hot cast iron pan for 3 to 4 minutes per side until deeply caramelised with charred edges. Rest 2 minutes before serving.',
            tip: 'The sugar in the marinade burns quickly. Watch the heat and do not walk away. The slight char at the edges is correct and desirable — it adds bitterness that balances the sweetness.',
        },
        {
            title: 'Assemble the plate',
            description: `Plate broken rice. Top with grilled pork chop and fried egg. Drizzle scallion oil over the rice. Add cucumber and pickled vegetables on the side. Serve nuoc cham generously alongside — pour it over everything at the table.`,
        },
    ],
};

export default function Page() { return <RecipeLayout recipe={recipe} />; }
