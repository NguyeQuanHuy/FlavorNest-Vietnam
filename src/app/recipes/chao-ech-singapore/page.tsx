'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-ech-singapore',
    title: 'Cháo ?ch Singapore (Singapore-Style Frog Congee)',
    subtitle: 'A thick, silky rice congee made with frog bone stock and fresh ginger, topped with braised frog legs, crispy fried shallots, spring onion oil, and an aggressive amount of freshly ground black pepper — the Singaporean-Hainanese preparation that Saigon adopted completely and made its own.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/chao-ech-singapore.jpg',
    intro: `Cháo ?ch Singapore is the Singapore-style frog congee that Saigon has adopted so thoroughly that most people who eat it in Ho Chi Minh City's Chinese-Vietnamese restaurants consider it a local dish. The preparation originated in Singapore's Teochew and Hainanese food culture — specifically from the frog porridge shops that line Geylang Road in Singapore, where the dish is a late-night institution — and arrived in Saigon with the Chinese-Vietnamese diaspora that moved between the two cities throughout the twentieth century. The Saigon version has adapted in specific ways: the rice porridge base is cooked slightly thicker than the Singaporean original; the ginger is more prominent; and the black pepper applied at the table is applied with the southern Vietnamese generosity that transforms any dish it touches. The fundamental character of the dish remains unchanged: a stock made from the frog carcasses and bones (the parts removed when separating the legs for service) produces a clean, slightly sweet broth that becomes the cooking liquid for the rice porridge, concentrating its frog character into every grain. The legs are braised separately in a light ginger-oyster sauce until just cooked, then placed over the finished porridge where they warm through from the heat of the bowl. The finishing elements — the crispy fried shallots, the spring onion oil, and especially the black pepper ground directly over each bowl in an amount that seems excessive until the first spoonful confirms it is exactly right — are what produce the specific eating experience that makes cháo ?ch Singapore a dish worth seeking out and reproducing.`,
    ingredientSections: [
        {
            title: 'Frog and stock',
            items: [
                { amount: 800, unit: 'g', name: 'whole cleaned frogs or frog legs (?ch)', note: 'if using whole frogs: separate the legs and use the bodies and bones for stock. If using legs only: add 200g chicken bones for the stock base.' },
                { amount: 1.2, unit: 'L', name: 'water', note: 'for the stock' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed — for the stock' },
                { amount: 3, name: 'spring onions', note: 'tied — for the stock' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Rice porridge',
            items: [
                { amount: 150, unit: 'g', name: 'jasmine rice', note: 'rinsed once' },
                { amount: 800, unit: 'ml', name: 'strained frog stock', note: 'from above' },
                { amount: 200, unit: 'ml', name: 'water', note: 'additional if needed' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for toasting the rice' },
                { amount: 3, name: 'shallots', note: 'thinly sliced — fried in the oil before adding rice' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'finely julienned — cooked into the porridge' },
            ],
        },
        {
            title: 'Braised frog legs',
            items: [
                { amount: 600, unit: 'g', name: 'frog legs', note: 'from the frogs above — separated from the body' },
                { amount: 2, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tbsp', name: 'light soy sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'finely julienned — key component of the braised legs' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 100, unit: 'ml', name: 'frog stock', note: 'from above — for the braising liquid' },
                { amount: 1, unit: 'tsp', name: 'cornstarch', note: 'mixed with 1 tbsp water — to thicken the braising sauce' },
            ],
        },
        {
            title: 'Essential toppings — the character of the dish',
            items: [
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots (hành phi)', note: 'generous — this is the texture element' },
                { amount: 3, unit: 'tbsp', name: 'shallot-infused oil' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 2, unit: 'tsp', name: 'freshly ground black pepper', note: 'coarsely ground — applied per bowl at the table. This is the defining element of cháo ?ch Singapore. The quantity seems too much until you taste it.' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'finely julienned — scattered over each bowl as a raw finishing element' },
                { amount: 1, name: 'small bunch cilantro' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the frog stock',
            description: 'Separate frog legs from the bodies. Place the frog bodies, bones, and any trimmings in a pot with cold water, smashed ginger, spring onion bundle, and salt. Bring to a boil, reduce to a gentle simmer. Skim for 10 minutes. Simmer for 30 minutes total. The stock should be clear and smell cleanly of frog and ginger. Strain through a fine sieve. The resulting stock is the base that makes cháo ?ch Singapore specifically a frog dish rather than simply congee with frog on top.',
            tip: 'The frog stock step is what separates authentic cháo ?ch Singapore from a simplified version where plain water or chicken stock cooks the rice. The frog carcass stock gives the porridge a specific delicate sweetness that is detectable in every spoonful even after the stock is diluted into the porridge cooking liquid.',
        },
        {
            title: 'Cook the porridge in frog stock',
            description: 'Heat oil in a medium pot. Fry sliced shallots until golden — 3 minutes. Add julienned ginger and fry 30 seconds. Add the rinsed rice and stir for 2 minutes until coated in the shallot-ginger oil. Pour in 800ml of the frog stock. Bring to a boil, reduce to a medium simmer. Cook for 25-30 minutes, stirring every 5 minutes, until the rice has bloomed and partially dissolved into a silky, thick porridge. Season with salt.',
            tip: 'The porridge for cháo ?ch Singapore should be slightly thicker than standard Vietnamese cháo — the Saigon version sits closer to the original Singapore preparation where the congee is dense and creamy rather than thin and liquid. The consistency should coat a spoon thickly when lifted.',
        },
        {
            title: 'Braise the frog legs',
            description: 'Heat oil in a pan over medium-high heat. Add garlic and julienned ginger — fry 30 seconds until fragrant. Add frog legs and sear briefly — 1 minute per side until golden. Add oyster sauce, soy sauce, sugar, and frog stock. Cover and braise for 5-6 minutes until the frog legs are just cooked through. Add cornstarch slurry and stir until the sauce thickens to a glossy glaze that coats the legs. Do not overcook — frog legs that are braised too long become dry and tough.',
            tip: 'The braised frog legs for cháo ?ch Singapore are cooked separately from the porridge and placed over the bowl just before serving. This is the Singapore technique — the frog is never cooked directly in the porridge, which would make the congee cloudy and the frog overcooked by service time.',
        },
        {
            title: 'Assemble the bowl — the Singapore way',
            description: 'Ladle the hot porridge into deep bowls — generously, filling to about two-thirds. Place the braised frog legs on top of the porridge with a spoonful of their braising sauce. Drizzle shallot oil over the surface. Scatter crispy fried shallots, sliced spring onion, cilantro, and raw julienned ginger. Then: grind black pepper directly over the bowl — more than seems reasonable. In Singapore and at Saigon\'s cháo ?ch shops, the pepper is applied in a quantity that produces a visible dark dusting over the entire surface of the bowl.',
            tip: 'The black pepper quantity for cháo ?ch Singapore is not a seasoning addition — it is a primary flavor element. The pepper should be visible on the surface of the bowl. The combination of the delicate, slightly sweet frog porridge and the aggressive black pepper is the specific tension that makes this dish memorable.',
        },
        {
            title: 'The correct eating sequence',
            description: 'Stir the bowl before eating — the braising sauce from the frog legs will mix into the porridge below, and the black pepper will distribute through the bowl. The first spoonful should contain porridge, a small amount of the frog braising sauce, and the pepper — this combination establishes the bowl\'s character. Then eat the frog leg pieces between spoonfuls of porridge. The raw julienned ginger scattered over the bowl should be eaten throughout — it provides a fresh heat that contrasts with the warm pepper and the gentle sweetness of the frog porridge.',
            tip: 'The raw ginger julienne on cháo ?ch Singapore is not a garnish — it is the fresh element that the preparation needs to prevent the richness of the braised legs and the warmth of the black pepper from becoming too heavy. Eat a piece of ginger with every two or three spoonfuls of porridge.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
