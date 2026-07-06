'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'sup-lo-xao',
    title: 'Súp Lơ Xào (Vietnamese Stir-Fried Cauliflower)',
    subtitle: 'Cauliflower florets stir-fried over high heat with garlic, oyster sauce, and a splash of fish sauce until the edges are golden and the center is just tender — the everyday Vietnamese vegetable technique applied to cauliflower.',
    category: 'VEGETARIAN',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/sup-lo-xao.jpg',
    intro: `Súp lơ xào is the Vietnamese stir-fried cauliflower that the family eats alongside rice several times a week without thinking about it as a recipe. It is one of the most common vegetable dishes in the Vietnamese home — inexpensive, fast, and versatile enough to sit beside almost any protein on the family table. The technique is the same as rau muống xào tỏi (stir-fried water spinach) and bí đỏ xào tỏi (stir-fried pumpkin): maximum wok heat, sliced garlic, the vegetable added in a single layer, left undisturbed long enough to develop color, then tossed with oyster sauce and fish sauce. Cauliflower responds well to this treatment because it has natural sugar that caramelizes at high temperature, producing golden-edged florets with a slightly sweet, nutty interior. The dish is most commonly made with both white cauliflower and broccoli (súp lơ xanh), or with the addition of sliced carrot for color. This recipe covers the pure cauliflower version, with a note on the mixed version that most Vietnamese families prefer.`,
    ingredientSections: [
        {
            title: 'Main',
            items: [
                { amount: 600, unit: 'g', name: 'cauliflower (súp lơ trắng)', note: 'cut into medium florets — not too small (burns before cooking through) and not too large (doesn\'t cook evenly). About 4-5cm across.' },
                { amount: 5, name: 'garlic cloves', note: 'thinly sliced — not minced' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
                { amount: 2, unit: 'tbsp', name: 'oyster sauce', note: 'the primary seasoning for súp lơ xào — richer than fish sauce alone' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'water', note: 'added to create steam to cook the cauliflower center — more water needed than for leafy vegetables' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground' },
            ],
        },
        {
            title: 'Optional additions',
            items: [
                { amount: 1, name: 'small carrot', note: 'sliced diagonally 4mm thin — adds color and sweetness' },
                { amount: 100, unit: 'g', name: 'broccoli florets', note: 'for the mixed súp lơ xanh version' },
                { amount: 50, unit: 'g', name: 'wood ear mushrooms', note: 'soaked and sliced — adds texture contrast' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 2, name: 'spring onions, sliced' },
                { amount: 1, name: 'fresh red chili, sliced', note: 'optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the cauliflower briefly',
            description: 'Blanch the cauliflower florets in boiling salted water for exactly 2 minutes. Drain and immediately rinse under cold water to stop the cooking. The florets should be partially cooked — no longer raw in the center but with significant firmness remaining. This pre-blanching step solves the main challenge of stir-frying cauliflower: the center takes much longer to cook than the surface, so without pre-cooking, the outside burns before the inside is done.',
            tip: 'The 2-minute blanch is the key step that separates properly cooked stir-fried cauliflower from either raw-centered or mushy florets. Rinse with cold water immediately after draining to prevent carryover cooking.',
        },
        {
            title: 'Dry the blanched florets',
            description: 'After rinsing, shake the florets vigorously in the colander and spread on a kitchen towel or paper towels for 5 minutes to dry. Excess water on the cauliflower causes violent oil splatter when added to the hot wok and produces steam rather than the caramelization that gives the dish its flavor.',
            tip: 'Dry florets caramelize; wet florets steam. This single variable determines whether the dish has the golden edges and nutty flavor that distinguishes Vietnamese stir-fried cauliflower from plain boiled cauliflower.',
        },
        {
            title: 'Heat the wok to maximum',
            description: 'Heat a wok over maximum flame for 2-3 minutes until smoking. Add oil and swirl to coat. Add sliced garlic — toss for 20 seconds until fragrant and just beginning to color. The wok must maintain high heat throughout; cauliflower releases moisture as it cooks, and high heat evaporates it before it can pool.',
            tip: 'If using an electric stove, preheat the wok for 4-5 minutes on the highest setting before adding oil. Electric burners cannot maintain the heat recovery that gas provides, so starting hotter compensates.',
        },
        {
            title: 'Add cauliflower and let it color',
            description: 'Add the dried, blanched cauliflower florets in a single layer across the wok. Leave completely undisturbed for 90 seconds — this contact time is what develops the golden color on the flat cut surfaces of the florets. After 90 seconds, toss once to expose the other sides.',
            tip: 'Resist the urge to stir immediately. The caramelization requires uninterrupted contact with the hot wok surface. A wok that is constantly stirred produces pale, uniformly cooked — but not caramelized — cauliflower.',
        },
        {
            title: 'Season and finish with steam',
            description: 'Add oyster sauce and fish sauce around the edge of the wok. Add sugar. Toss to coat. Pour the water around the edge of the wok — it creates a brief burst of steam that finishes cooking the florets through without additional direct heat. Toss for another 60 seconds until all the water has evaporated and the florets are coated in a glossy sauce. Total time from adding cauliflower to plating: 4-5 minutes.',
            tip: 'The water addition must be around the edge, not over the cauliflower — over the cauliflower produces steaming; around the edge produces steam from the hot metal that rises and cooks the vegetables from all sides.',
        },
        {
            title: 'Plate and serve',
            description: 'Transfer to a plate immediately — never leave in the wok. Scatter spring onion, fresh chili, and freshly ground black pepper. Serve with steamed rice. Súp lơ xào is at its best immediately after cooking — cauliflower softens quickly from residual heat and the golden color fades within minutes.',
            tip: 'If adding carrot or broccoli: add the carrot with the cauliflower (similar cooking time); add the broccoli 1 minute after the cauliflower (it cooks faster). For wood ear mushrooms: add at the same time as the seasoning.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
