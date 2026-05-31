'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nam-xao',
    title: 'Nấm Xào (Vietnamese Stir-Fried Mushrooms)',
    subtitle: 'A mix of fresh mushrooms stir-fried over high heat with garlic, oyster sauce, and butter until golden and caramelized — the Vietnamese vegetable dish that converts mushroom skeptics and satisfies meat eaters equally.',
    category: 'VEGETARIAN',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/nam-xao.jpg',
    intro: `Nấm xào is the Vietnamese stir-fried mushroom dish that works because of one principle: mushrooms contain more natural umami than almost any other vegetable, and stir-frying at high heat concentrates that umami by evaporating the water they release. A mushroom dropped into a cold pan releases liquid and steams — it becomes pale, waterlogged, and flavorless. The same mushroom dropped into a smoking hot wok without crowding hits the hot metal surface, the moisture evaporates immediately, and the natural sugars and glutamates caramelize into a golden crust. The Vietnamese version adds oyster sauce (itself intensely umami), garlic, a touch of butter for richness, and spring onion at the end for freshness. The result tastes more savory and satisfying than the ingredients would suggest. Vietnamese cooks use whatever mushrooms are available and in season — king oyster (nấm đùi gà), oyster (nấm sò), shiitake (nấm hương), enoki (nấm kim châm), and wood ear (mộc nhĩ) are all common. The technique is the same regardless of the mushroom; only the timing changes slightly.`,
    ingredientSections: [
        {
            title: 'Mushrooms',
            items: [
                { amount: 500, unit: 'g', name: 'mixed fresh mushrooms', note: 'any combination: king oyster (nấm đùi gà), oyster (nấm sò), shiitake (nấm hương), button. Tear large mushrooms by hand rather than cutting — the torn surface caramelizes better.' },
                { amount: 100, unit: 'g', name: 'enoki mushrooms (nấm kim châm)', note: 'added at the end — they cook in 30 seconds' },
            ],
        },
        {
            title: 'Sauce and aromatics',
            items: [
                { amount: 5, name: 'garlic cloves', note: 'thinly sliced — not minced' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'high smoke point' },
                { amount: 20, unit: 'g', name: 'unsalted butter', note: 'added at the end — for richness and gloss' },
                { amount: 2, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce', note: 'or fish sauce for the non-vegetarian version' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground' },
                { amount: 2, unit: 'tbsp', name: 'water', note: 'if needed to loosen the sauce' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced — added at the very end' },
                { amount: 1, name: 'fresh red chili', note: 'sliced — optional' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'a few drops only — finishing fragrance' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the mushrooms — do not wash',
            description: 'Clean mushrooms by wiping with a damp cloth or dry paper towel — never rinse under water. Water-logged mushrooms release liquid in the wok and steam instead of searing. For king oyster mushrooms: slice lengthwise into 5mm planks or tear by hand. For oyster and shiitake: tear into pieces by hand. For button mushrooms: quarter. Leave enoki in small clusters. The torn surfaces on king oyster and oyster mushrooms caramelize more effectively than cut surfaces.',
            tip: 'Tearing rather than cutting is a genuine technique, not affectation. The irregular torn surface has more contact points with the wok and a larger caramelization area than a smooth cut surface.',
        },
        {
            title: 'Heat the wok until smoking',
            description: 'Place wok over maximum heat for 3 minutes until smoking. Add oil. The oil should shimmer and begin to smoke within 10 seconds. This temperature is essential — mushrooms added to a moderately hot wok release water and stew. Mushrooms added to a smoking wok sear immediately on contact.',
            tip: 'The most common mistake in stir-frying mushrooms is insufficient heat. If the mushrooms release visible steam and liquid pools in the wok, the heat is too low. Remove half the mushrooms and continue with less quantity at higher heat.',
        },
        {
            title: 'Add garlic, then mushrooms in batches',
            description: 'Add sliced garlic to the smoking oil. Toss 15 seconds until fragrant. Add the mushrooms in a single layer — do not pile them up. For 500g mushrooms, cook in 2 batches if the wok is crowded. Leave undisturbed for 90 seconds. The mushrooms will hiss and spit as their moisture evaporates. After 90 seconds, toss once. They should be golden on the bottom.',
            tip: 'Crowding the wok is the most common failure. 500g of mushrooms releases a significant amount of moisture. In a crowded wok, this moisture cannot evaporate fast enough and the mushrooms stew. Two batches, or a very large wok.',
        },
        {
            title: 'Season and add sauce',
            description: 'Once the mushrooms are golden and have reduced to roughly half their original volume, add oyster sauce and soy sauce around the edge of the wok. Add sugar and black pepper. Toss to coat. If the sauce is too thick, add 2 tablespoons of water around the edge. Add the enoki mushrooms at this stage — they need only 30-45 seconds in the hot wok.',
            tip: 'Oyster sauce added too early burns. Add only after the mushrooms have developed their golden color and released most of their moisture.',
        },
        {
            title: 'Finish with butter and spring onion',
            description: 'Remove from heat. Add the butter directly to the wok — it melts from the residual heat and emulsifies with the sauce to produce a glossy, rich coating on the mushrooms. Toss to distribute. Add sliced spring onion and toss once more.',
            tip: 'Adding butter off the heat (not on the heat) prevents it from burning and separating. The butter enriches the sauce without dominating — a few drops of sesame oil added at the same time amplifies this effect.',
        },
        {
            title: 'Plate and serve',
            description: 'Transfer to a plate immediately. Drizzle a few drops of sesame oil over the top. Scatter fresh chili. Serve with steamed rice. Nấm xào is best eaten within 5 minutes of cooking — mushrooms release moisture as they sit and the caramelized crust softens. This is a dish that waits for nobody.',
            tip: 'For a richer version used at Vietnamese family meals: add 100g of sliced pork belly or thinly sliced beef at the start, sear before the garlic, then proceed with the recipe. The mushroom technique remains the same.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}