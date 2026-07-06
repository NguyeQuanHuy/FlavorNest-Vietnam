'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ech-chien-bo-toi',
    title: 'Ếch Chiên Bơ Tỏi (Crispy Fried Frog with Garlic Butter)',
    subtitle: 'Frog legs coated in seasoned rice flour and deep-fried until the coating shatters and the flesh inside stays juicy — tossed immediately in a wok with caramelized garlic, chili, and butter until the crispy surface is glazed in the sauce without losing its crunch. The southern Vietnamese nhậu frog dish.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ech-chien-bo-toi.jpg',
    intro: `Ếch chiên bơ tỏi is the southern Vietnamese fried frog preparation — a dish that exists in the same culinary family as tôm chiên bơ tỏi and cua rang muối but achieves something specific to frog: a combination of the white, sweet, lean flesh that frog uniquely provides with the caramelized garlic butter sauce that brings richness and depth to the naturally delicate protein. The preparation has two phases that must succeed independently before they succeed together. The first phase is the frying: the frog legs are coated in seasoned rice flour and deep-fried at 180°C until the coating shatters between the teeth and the flesh inside is just cooked — juicy, white, and tender in the specific way that properly fried frog achieves when the temperature and timing are correct. The second phase is the butter-garlic toss: the fried legs go into a smoking wok with caramelized garlic slices, sliced chili, and unsalted butter, and are tossed for 60 seconds — long enough for the butter to foam and coat the crispy surface with its richness, not long enough for the butter to make the coating soft. This 60-second window is the technique: the butter glazes without steaming, the garlic caramelizes further against the hot crispy surface, and the chili provides the heat that makes cold beer essential. Ếch chiên bơ tỏi is specifically a nhậu dish — eaten at beer halls and seafood restaurants in southern Vietnam in the early evening, ordered by the pair of frog legs, consumed quickly while still hot and crispy, and followed by another order. The butter in the preparation is a specifically southern Vietnamese adoption — northern Vietnamese frog cooking uses no butter — reflecting the French culinary influence that entered Vietnamese cooking through the south and that butter-garlic frog preparations most directly reference.`,
    ingredientSections: [
        {
            title: 'Frog legs',
            items: [
                { amount: 600, unit: 'g', name: 'frog legs (đùi ếch)', note: 'cleaned, skin removed, separated into individual legs. Pat completely dry — surface moisture prevents the coating from crisping.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for marinating' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'garlic powder' },
            ],
        },
        {
            title: 'Crispy coating',
            items: [
                { amount: 80, unit: 'g', name: 'rice flour (bột gạo)', note: 'produces crispier coating than wheat flour' },
                { amount: 20, unit: 'g', name: 'cornstarch (bột bắp)', note: 'adds extra crispiness and helps the coating shatter' },
                { amount: 0.5, unit: 'tsp', name: 'baking powder', note: 'creates lightness in the crust' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'for the golden color of the coating' },
                { amount: 600, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
        {
            title: 'Garlic butter sauce',
            items: [
                { amount: 50, unit: 'g', name: 'unsalted butter', note: 'cold — added to the hot wok in pieces to foam and glaze' },
                { amount: 8, name: 'garlic cloves', note: 'thinly sliced — not minced, slices caramelize more evenly' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'thinly sliced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced diagonally — for color' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'adds savory depth to the butter sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for the wok step before the butter' },
            ],
        },
        {
            title: 'Finishing and to serve',
            items: [
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground — finishing seasoning' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'bunch rau răm', note: 'eaten alongside' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate and dry the frog legs',
            description: 'Combine frog legs with fish sauce, white pepper, turmeric, and garlic powder. Toss and marinate 15 minutes. Then pat the legs very firmly with paper towels — remove as much surface moisture as possible. The coating will not adhere properly to wet frog legs and the oil will splatter dangerously. The legs should feel dry and slightly sticky from the marinate before the coating goes on.',
            tip: 'The two-step process — marinate for flavor penetration, then dry for coating adhesion — is more important for frog than for chicken because frog legs release more moisture during marination due to their lean composition. The drying step should take 2 minutes per leg, pressing firmly with each paper towel change.',
        },
        {
            title: 'Coat in seasoned rice flour',
            description: 'Combine rice flour, cornstarch, baking powder, salt, white pepper, and turmeric in a shallow bowl. Dredge each marinated frog leg in the flour mixture, pressing firmly to coat every surface completely. Tap off any excess flour — thick, uneven coating produces clumpy frying rather than the light, even crust that shatters correctly. Place the coated legs on a rack for 5 minutes before frying — the coating slightly dries and adheres more firmly.',
            tip: 'Pressing the coating firmly onto the frog leg surface is the technique that produces the shatteringly crispy result. Loose, light dusting produces a coating that slides off during frying. Pressed coating produces an integrated crust that fuses with the surface proteins of the leg during frying.',
        },
        {
            title: 'Deep-fry at 180°C until coating shatters',
            description: 'Heat oil to 180°C. Fry the coated frog legs in batches of 4-5 — do not crowd. Fry for 4-5 minutes until the coating is golden and crispy and the leg feels firm when pressed. The coating should produce a clearly audible crunch when tapped with a spoon. Drain on paper towels. The frog legs should be cooked through — white throughout with no translucency — while the coating remains dry and crispy.',
            tip: 'The 4-5 minute frying time for frog legs produces the correct result at 180°C: cooked flesh and shatteringly crispy coating simultaneously. Less time: coating crispy but flesh undercooked. More time: flesh dry and coating starting to harden beyond pleasant crunchiness. Timing is exact.',
        },
        {
            title: 'Make the garlic butter glaze — 60 seconds maximum',
            description: 'Heat a wok over maximum heat until smoking. Add neutral oil. Add sliced garlic — fry for 30-45 seconds until golden at the edges. Add sliced chilies. Add fish sauce and sugar — the wok will sizzle. Immediately add all the fried frog legs at once. Toss vigorously for 30 seconds. Add the cold butter in pieces — it will foam dramatically on contact with the hot wok. Toss for 15-20 seconds more until the butter is melted, foaming, and has coated every surface. Remove from heat immediately.',
            tip: 'The total time from adding the fried legs to removing from heat is 60 seconds — this is the window that glazes without softening. The butter foam at wok temperature coats the crispy surface with its richness in seconds. Beyond 60 seconds, the butter steam begins to soften the crust from within. Set a timer.',
        },
        {
            title: 'Plate and serve immediately',
            description: 'Transfer to a serving plate in a single layer — piling traps steam and softens the crust within minutes. Scatter spring onion, cilantro, and freshly ground black pepper. Serve immediately with lime wedges and rau răm. Eat while hot — ếch chiên bơ tỏi loses its defining texture within 8-10 minutes of plating. The eating: pick up a leg by the bone, bite through the garlic-butter-glazed crispy coating to the white, juicy flesh inside. Dip in the residual butter-garlic sauce pooled on the plate.',
            tip: 'The residual butter-garlic sauce that pools on the plate after the frog legs are plated is the best element for dipping each leg into before eating. The caramelized garlic slices that have collected there, combined with the butter and fish sauce reduction, produce a dipping sauce more complex than anything separately prepared.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
