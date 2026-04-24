
'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-luc-lac',
    title: 'Shaking Beef',
    subtitle: `Tender beef cubes wok-tossed in butter and garlic until caramelised outside, pink inside.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85',
    intro: `Bo luc lac — shaking beef — gets its name from the tossing motion used to cook it: the wok is shaken vigorously over high heat to tumble the beef cubes, building a crust on all sides without overcooking the centre. The technique is Chinese; the flavours are Vietnamese with a French accent. Butter, oyster sauce, and garlic. The beef is served on a bed of watercress dressed with lime juice and thinly sliced onion, with a small dish of lime and black pepper salt for dipping. It is one of the fastest impressive meals in Vietnamese cooking.`,
    ingredientSections: [
        {
            title: 'Beef and marinade',
            items: [
                { amount: 600, unit: 'g', name: 'beef sirloin or tenderloin', note: 'cut into 3cm cubes' },
                { amount: 2, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 1, name: 'pinch of pepper' },
            ],
        },
        {
            title: 'For the wok',
            items: [
                { amount: 2, unit: 'tbsp', name: 'vegetable oil' },
                { amount: 30, unit: 'g', name: 'unsalted butter' },
                { amount: 4, name: 'garlic cloves', note: 'roughly minced' },
                { amount: 3, name: 'spring onions', note: 'cut into 3cm lengths' },
            ],
        },
        {
            title: 'Watercress salad',
            items: [
                { amount: 150, unit: 'g', name: 'watercress or mixed salad leaves' },
                { amount: 1, name: 'small red onion', note: 'very thinly sliced, soaked in cold water 10 min' },
                { amount: 1, unit: 'tbsp', name: 'lime juice' },
                { amount: 1, unit: 'tbsp', name: 'olive oil' },
                { amount: 1, name: 'pinch of salt and sugar' },
            ],
        },
        {
            title: 'Dipping salt',
            items: [
                { amount: 1, unit: 'tsp', name: 'fine sea salt' },
                { amount: 1, unit: 'tsp', name: 'coarsely ground black pepper' },
                { amount: 1, name: 'lime', note: 'juice only' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the beef',
            description: 'Combine oyster sauce, soy sauce, fish sauce, sugar, sesame oil, and pepper. Toss beef cubes to coat evenly. Marinate 15 minutes at room temperature. Pat dry before cooking — moisture is the enemy of crust.',
            tip: 'Dry the beef cubes with paper towel before they go into the wok. Any surface moisture causes steaming instead of searing.',
        },
        {
            title: 'Dress the watercress',
            description: 'Toss watercress with drained red onion, lime juice, olive oil, salt, and a pinch of sugar. Spread on a large serving plate. Set aside.',
        },
        {
            title: 'Mix the dipping salt',
            description: 'Combine salt, black pepper, and lime juice in a small bowl. It should be intensely seasoned — a dipping salt, not a sauce.',
        },
        {
            title: 'Shake the beef',
            description: 'Heat wok over the highest possible heat until smoking. Add vegetable oil and swirl to coat. Add beef cubes in a single layer without crowding — cook in batches if needed. Leave untouched for 60 seconds to build a crust. Then shake the wok vigorously to tumble the beef, or toss with tongs. Cook 2 to 3 minutes total for medium-rare.',
            tip: 'Wok temperature is everything. A crowded or insufficiently hot wok steams the beef grey instead of searing it brown. Work in batches if your wok is smaller than 32cm.',
        },
        {
            title: 'Add butter and garlic',
            description: 'In the final 30 seconds, add butter, garlic, and spring onions. Toss everything together until the butter foams and the garlic is fragrant. Remove from heat immediately.',
        },
        {
            title: 'Serve',
            description: 'Spoon the beef and all the buttery pan juices over the watercress salad. The warm juices will slightly wilt the watercress. Serve immediately with the dipping salt alongside.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}