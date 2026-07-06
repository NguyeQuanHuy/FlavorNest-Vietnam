'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'lau-thai',
    title: 'Thai-Style Hot Pot',
    subtitle: 'Sour, spicy, lemongrass-scented broth filled with seafood — a weekend feast eaten slowly with friends.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/lau-thai.jpg',
    intro: `Lau Thai is Vietnam's adopted version of Thai hot pot — a communal pot of intensely aromatic broth set in the centre of the table, kept at a rolling simmer, into which everyone dunks raw seafood, vegetables, mushrooms, and noodles at their own pace. The broth is built on lemongrass, galangal, kaffir lime leaves, tomato, and pineapple — sour, spicy, and deeply fragrant. It is not a weeknight dish. It is a reason to call friends over.`,
    ingredientSections: [
        {
            title: 'Hot pot broth',
            items: [
                { amount: 1.5, unit: 'l', name: 'chicken or seafood stock' },
                { amount: 3, name: 'lemongrass stalks', note: 'bruised and cut into 5cm pieces' },
                { amount: 30, unit: 'g', name: 'galangal', note: 'sliced' },
                { amount: 4, name: 'kaffir lime leaves', note: 'torn' },
                { amount: 3, name: 'tomatoes', note: 'cut into wedges' },
                { amount: 150, unit: 'g', name: 'fresh pineapple', note: 'cut into chunks' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'tamarind paste', note: 'or lime juice' },
                { amount: 2, unit: 'tbsp', name: 'chilli paste (tuong ot)' },
            ],
        },
        {
            title: 'Dipping ingredients',
            items: [
                { amount: 300, unit: 'g', name: 'large prawns', note: 'shells on' },
                { amount: 200, unit: 'g', name: 'squid', note: 'cleaned, scored and cut into pieces' },
                { amount: 200, unit: 'g', name: 'firm white fish fillets', note: 'cut into chunks' },
                { amount: 200, unit: 'g', name: 'clams or mussels' },
                { amount: 200, unit: 'g', name: 'enoki and shiitake mushrooms' },
                { amount: 200, unit: 'g', name: 'morning glory or watercress' },
                { amount: 200, unit: 'g', name: 'tofu', note: 'firm, cubed' },
                { amount: 200, unit: 'g', name: 'rice noodles or udon', note: 'for the end of the meal' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the broth',
            description: 'Combine stock, lemongrass, galangal, and kaffir lime leaves in a pot. Bring to a boil and simmer 15 minutes to infuse. Add tomatoes, pineapple, fish sauce, sugar, tamarind, and chilli paste. Taste and adjust — the broth should be aggressively sour, spicy, and fragrant.',
            tip: 'The broth should taste too strong at this point. Once the raw seafood cooks in it, the flavours will mellow and balance.',
        },
        {
            title: 'Prepare the dipping ingredients',
            description: 'Arrange all raw ingredients on plates around the table. Have a wire skimmer or slotted spoon for each person.',
        },
        {
            title: 'Set up the table',
            description: 'Transfer broth to a portable burner at the centre of the table. Keep at a rolling simmer throughout the meal. Each person cooks their own ingredients directly in the broth.',
            tip: 'Prawns take 2 minutes, fish 2 to 3 minutes, squid 1 minute. Clams are done when they open. Vegetables take 1 to 2 minutes. Do not overcook seafood.',
        },
        {
            title: 'Finish with noodles',
            description: 'At the end of the meal, add noodles to the enriched broth and cook until tender. By this point the broth will have absorbed all the seafood flavour and become the best part of the meal.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
