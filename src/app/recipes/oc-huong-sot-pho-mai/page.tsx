'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'oc-huong-sot-pho-mai',
    title: 'Cheesy Babylon Whelks',
    subtitle: 'Ốc hương sốt phô mai — béo ngậy, dai giòn, thèm không ngừng.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 3,
    heroImage: '/images/recipes/oc-huong-sot-pho-mai.jpg',
    intro: `Oc huong is the crown jewel of Vietnamese street shellfish — small, firm, slightly sweet, with a clean oceanic brine that needs no disguising. Most people eat it steamed with lemongrass or grilled with salt and chilli. But somewhere along the Saigon street-food evolution, someone poured a cheese sauce over a bowl of freshly cooked whelks and created something that should not work as well as it does.

The sauce is not a Western bechamel dropped onto Vietnamese shellfish. It is built with butter, garlic, and cream, then sharpened with fish sauce and calamansi until it tastes unmistakably Vietnamese — rich and savoury up front, with a bright acidic finish that cuts through the fat and pulls the briny sweetness of the whelk forward. Every shell becomes a vessel. You tilt it to your lips, the sauce pools inside, and the whelk slides out with it. This is why people order second portions before finishing the first.`,
    ingredientSections: [
        {
            title: 'Ốc hương',
            items: [
                { amount: 700, unit: 'g', name: 'fresh babylon whelks (ốc hương)', note: 'scrubbed clean; soak in salted water 30 min to purge sand' },
                { amount: 2, name: 'stalks lemongrass', note: 'bruised and cut into 4cm pieces' },
                { amount: 3, name: 'slices fresh ginger' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 500, unit: 'ml', name: 'water', note: 'for steaming' },
            ],
        },
        {
            title: 'Phô mai sauce',
            items: [
                { amount: 30, unit: 'g', name: 'unsalted butter' },
                { amount: 5, name: 'garlic cloves', note: 'minced fine' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 200, unit: 'ml', name: 'heavy cream', note: '35% fat preferred' },
                { amount: 80, unit: 'g', name: 'processed cheese', note: 'Laughing Cow or similar — melts smoothly without splitting' },
                { amount: 40, unit: 'g', name: 'cheddar or gouda', note: 'grated — adds depth and slight sharpness' },
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce', note: 'the key Vietnamese modifier — do not skip' },
                { amount: 2, name: 'calamansi or half a lime', note: 'juiced — brightens and cuts the fat' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'To finish',
            items: [
                { amount: 3, name: 'stalks spring onion', note: 'sliced fine' },
                { amount: 1, name: 'red bird\'s eye chilli', note: 'sliced thin' },
                { amount: 1, unit: 'tbsp', name: 'fried shallots' },
                { amount: 4, name: 'slices baguette or bread', note: 'for mopping the sauce — non-negotiable' },
            ],
        },
    ],
    steps: [
        {
            title: 'Purge and clean the whelks',
            description: 'Place whelks in a large bowl of cold salted water — 1 tbsp salt per litre. Leave for 30 minutes to purge any sand or grit. Scrub each shell under running water with a stiff brush. Drain well.',
            tip: 'Fresh whelks should smell of clean ocean. Any ammonia or sour smell means they are past their prime — do not use them.',
        },
        {
            title: 'Steam the whelks',
            description: 'In a wide pot, combine water, lemongrass, ginger, and fish sauce. Bring to a rolling boil. Add the whelks, cover tightly, and steam over high heat for 6–8 minutes until the operculum — the hard disc that seals the shell opening — loosens or falls away. Do not overcook; the meat toughens quickly past this point. Drain and set aside.',
            tip: 'The whelk is perfectly cooked when you can extract the meat with a toothpick in one clean pull. If it tears or resists, it is overcooked.',
        },
        {
            title: 'Build the cheese sauce',
            description: 'In a saucepan over medium-low heat, melt butter until foaming. Add minced shallots and cook for 2 minutes until soft and translucent. Add garlic and stir for 1 minute — do not let it brown. Pour in heavy cream and bring to a gentle simmer, stirring constantly. Add processed cheese first, stirring until fully melted and smooth. Add grated cheddar and stir until incorporated.',
        },
        {
            title: 'Season the sauce',
            description: 'Add fish sauce, calamansi juice, white pepper, and sugar. Stir well and taste. The sauce should be rich and creamy with a clear savoury backbone and a bright acidic note at the finish. Adjust with more fish sauce for saltiness, more calamansi for brightness. Keep warm on the lowest heat, stirring occasionally — do not boil or the cream will split.',
            tip: 'The fish sauce is what makes this Vietnamese rather than European. Start with 1 tbsp and build up — it should season without tasting fishy.',
        },
        {
            title: 'Combine and serve',
            description: 'Transfer the steamed whelks into a large bowl or deep serving plate. Pour the hot cheese sauce generously over the top, ensuring it flows down into the shells. Scatter spring onion, sliced chilli, and fried shallots over everything. Serve immediately with baguette slices alongside for mopping up every drop of sauce left in the shells and on the plate.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}