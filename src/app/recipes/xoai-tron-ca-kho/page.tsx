'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'xoai-tron-ca-kho',
    title: 'Green Mango Salad with Dried Fish',
    subtitle: 'Xoài trộn cá khô — chua giòn, mặn bùi, cay nồng, ăn là ghiền.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=85',
    intro: `Xoai tron ca kho is Southern Vietnam in a bowl — loud, unsubtle, and completely addictive. Shredded green mango, still firm and aggressively sour, tossed with crispy pan-fried dried fish, roasted peanuts, fresh herbs, and a dressing that hits every note at once: fish sauce salt, lime acid, chilli heat, sugar sweetness. Nothing is muted. Everything is turned up.

This is the kind of dish sold from carts outside school gates and market entrances across the Mekong Delta and Saigon — a snack that blurs the line between salad and street food, between a side dish and a reason to stay at the table. The dried fish — ca kho, ca duoi, or ca chi — brings a concentrated umami and a textural contrast that fresh protein cannot replicate. Fried until it shatters, it crumbles into the mango in irregular shards that catch the dressing and carry it. With cold beer or sweet iced tea alongside, this salad is one of the defining tastes of a Southern Vietnamese afternoon.`,
    ingredientSections: [
        {
            title: 'Xoài & cá khô',
            items: [
                { amount: 400, unit: 'g', name: 'green mango (xoài xanh)', note: 'firm and sour — not ripe; peeled and shredded into thin matchsticks or julienned' },
                { amount: 150, unit: 'g', name: 'dried fish (cá khô)', note: 'cá đuối, cá chỉ vàng, or cá thác lác khô — shredded or left in small pieces' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for frying the dried fish' },
            ],
        },
        {
            title: 'Dressing',
            items: [
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice', note: 'about 1.5 limes' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced fine' },
                { amount: 2, name: 'red bird\'s eye chillies', note: 'minced — adjust to heat preference' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed — not blended' },
                { amount: 20, unit: 'g', name: 'Vietnamese coriander (rau răm)', note: 'leaves only; substitute with Thai basil or mint' },
                { amount: 10, unit: 'g', name: 'fresh mint leaves' },
                { amount: 3, name: 'shallots', note: 'sliced thin and fried until golden — or use store-bought fried shallots' },
                { amount: 2, name: 'fresh red chillies', note: 'sliced thin, for garnish' },
                { amount: 1, unit: 'tbsp', name: 'toasted sesame seeds', note: 'optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Shred the mango',
            description: 'Peel the green mango and shred using a mandoline, a julienne peeler, or a sharp knife into thin matchsticks roughly 4–5cm long and 2–3mm thick. Place in a bowl and toss with a pinch of salt. Leave for 5 minutes to draw out a little moisture, then squeeze gently and discard the liquid. This concentrates the mango flavour and prevents the salad from becoming watery.',
            tip: 'The mango must be genuinely unripe — firm, white-fleshed, and mouth-puckeringly sour. A mango that has begun to ripen will be too sweet and too soft, and the salad will lose its defining character.',
        },
        {
            title: 'Fry the dried fish',
            description: 'If using a whole dried fish, tear or cut into small bite-sized pieces or shreds. Heat oil in a pan over medium heat. Add the dried fish and fry for 3–4 minutes, turning occasionally, until golden, fragrant, and crisp. Remove and drain on paper towels. The fish will crisp further as it cools. Season lightly with a pinch of sugar while still hot to balance the saltiness.',
            tip: 'Watch the heat carefully — dried fish goes from perfectly crisp to acrid and bitter in under a minute. Medium heat and constant attention is safer than high heat and speed.',
        },
        {
            title: 'Make the dressing',
            description: 'Combine fish sauce, lime juice, sugar, and water in a small bowl. Stir until the sugar dissolves completely. Add minced garlic and chilli. Taste — the dressing should be assertively sour-salty with clear sweetness and heat at the back. It will seem strong on its own; it needs to season a large volume of mango.',
        },
        {
            title: 'Fry the shallots',
            description: 'If making fresh fried shallots: slice shallots paper-thin and separate into rings. Fry in 2 tbsp oil over medium-low heat, stirring frequently, for 8–10 minutes until deep golden and crisp. Drain on paper towels — they will crisp further as they cool. Season with a pinch of salt immediately.',
        },
        {
            title: 'Assemble',
            description: 'Place the salted and squeezed mango in a large mixing bowl. Pour two-thirds of the dressing over and toss well with clean hands or tongs. Add rau ram and mint leaves and toss again. Taste and add more dressing as needed — the salad should be well-seasoned and punchy, not shy.',
            tip: 'Dress the salad just before serving. Green mango releases water quickly once dressed and the salad will go limp within 20 minutes.',
        },
        {
            title: 'Plate and finish',
            description: 'Mound the dressed mango salad onto a wide plate or shallow bowl. Scatter the fried dried fish generously over the top — some pieces will sink in, which is correct. Add crushed peanuts, fried shallots, fresh chilli slices, and sesame seeds. Serve immediately with extra dressing on the side and cold beer or iced tea alongside.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}