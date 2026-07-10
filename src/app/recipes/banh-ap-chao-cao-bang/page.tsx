'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-ap-chao-cao-bang',
    title: `Cao Bằng Crispy Duck Pancake`,
    subtitle: `Bánh Áp Chao — Cao Bằng's pressed and fried rice pancake filled with roast duck — the street food version of vịt quay mắc mật, eaten with fermented chili sauce.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh áp chao is Cao Bằng's most beloved street food — a thick rice flour pancake that is pressed (áp) against a hot pan surface (chao = wok/pan) until one side is deeply crispy and golden while the other remains soft, then filled with shredded vịt quay mắc mật (mắc mật roast duck), wood ear mushroom, spring onion, and a spoonful of the vendor's own fermented chili-garlic sauce. The pancake is folded around the filling and eaten hot, immediately, at the stall counter.\n\nThe name is onomatopoeic of function rather than ingredient — áp chao describes the pressing action: the thick batter is poured into the hot oiled pan and immediately pressed flat with a heavy lid or spatula, creating maximum contact between the batter and the hot pan surface and producing a crust that is uniformly crispy rather than having the soft-centred texture of a pancake cooked only by convective heat. This pressing technique is specific to Cao Bằng and distinguishes bánh áp chao from bánh xèo (which relies on sizzle and steam) and bánh rán (which is deep-fried).\n\nThe fermented chili sauce (tương ớt lên men) served alongside is another Cao Bằng specificity — not the commercial Cholimex or Chin-su sauce of the lowlands, but a locally made fermented sauce of fresh red chili, garlic, salt, and a small amount of rice wine, left to ferment at room temperature for 3-7 days until slightly sour and deeply fragrant. This sauce is what differentiates bánh áp chao from any other Vietnamese filled pancake — its sourness and depth against the crispy pancake and the aromatic duck filling produces a combination specific to the Tày-Nùng highland kitchen.`,
    ingredientSections: [
        {
            title: `Bánh áp chao batter`,
            items: [
                { amount: 200, unit: 'g', name: `rice flour (bot gao te)` },
                { amount: 50, unit: 'g', name: `tapioca starch (bot nang)` },
                { amount: 30, unit: 'g', name: `glutinous rice flour (bot nep)`, note: `adds chewiness to the pressed crust — the áp chao distinction` },
                { amount: 380, unit: 'ml', name: `water` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
                { amount: 2, name: `spring onions, sliced thin`, note: `stirred into batter` },
            ],
        },
        {
            title: `Duck filling`,
            items: [
                { amount: 250, unit: 'g', name: `vit quay mac mat, shredded (roast duck)`, note: `from the mắc mật roast duck recipe; substitute: Chinese roast duck from restaurant` },
                { amount: 30, unit: 'g', name: `dried wood ear mushroom (nam meo)`, note: `soaked 20 min, julienned` },
                { amount: 3, name: `spring onions, sliced` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Fermented chili sauce (tuong ot len men — the Cao Bằng signature)`,
            items: [
                { amount: 150, unit: 'g', name: `fresh red chili (ot do tuoi)`, note: `blended to coarse paste — seeds included` },
                { amount: 6, name: `garlic cloves, minced` },
                { amount: 1.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `rice wine (ruou gao)` },
                { amount: 3, unit: 'days', name: `fermentation time`, note: `room temperature 24-28°C — covered loosely` },
            ],
        },
        {
            title: `For frying`,
            items: [
                { amount: 4, unit: 'tbsp', name: `neutral oil`, note: `1 tbsp per pancake — generous oil is the crispy crust` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 2, name: `limes, wedged` },
                { amount: 2, unit: 'tbsp', name: `fried shallots` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the fermented chili sauce — 3 to 7 days ahead`,
            description: `Blend fresh red chilies with minced garlic, salt, sugar, and rice wine to a coarse paste — some texture should remain, not a smooth purée. Transfer to a clean glass jar. Cover the jar opening with cheesecloth secured with a rubber band — allows CO₂ from fermentation to escape while keeping insects out. Leave at room temperature (24-28°C) for 3-7 days. After 3 days the sauce will be slightly sour, deeply fragrant, and have a complex fermented character. After 7 days it is more sour and intensely flavoured. Once at the desired sourness, seal tightly and refrigerate — keeps 2-3 weeks.`,
            tip: `The fermented chili sauce is the condiment that most clearly identifies bánh áp chao as Cao Bằng food rather than generic Vietnamese fried pancake. At 3 days, the lactic acid fermentation has just begun and the sauce has a fresh-sour quality; at 7 days it is more complex and funky. Cao Bằng vendors typically use 5-day sauce — sour enough to cut through the duck fat, fresh enough to retain the chili's fruitiness. The rice wine contributes ethanol that creates a partial sterile environment, preventing mould while allowing bacterial fermentation to proceed.`,
        },
        {
            title: `Prepare the duck filling`,
            description: `Heat oil in a pan over medium-high heat. Add julienned wood ear mushroom, stir 2 minutes. Add shredded roast duck and spring onion. Season with fish sauce and black pepper. Toss together 2 minutes until warm and fragrant — the mắc mật aroma from the duck skin should be released by the heat. The filling should be slightly sticky from the duck's rendered fat. Keep warm.`,
        },
        {
            title: `Make the batter`,
            description: `Whisk rice flour, tapioca starch, glutinous rice flour, salt, and sugar. Add water gradually, whisking smooth. Add oil and spring onion. Rest 15 minutes. The three-flour combination is the áp chao batter's specific structure: rice flour provides the neutral base and crispness; tapioca provides elasticity and translucence; glutinous rice flour provides chewiness in the crust that pure rice flour lacks. This three-flour blend produces a pressed crust that is simultaneously crispy on the outer surface and slightly chewy in the layer immediately beneath — the textural signature of the dish.`,
        },
        {
            title: `The áp chao pressing technique`,
            description: `Heat a 20-22cm pan over medium-high heat. Add 1 tbsp oil and swirl to coat. Pour 80ml batter into the centre of the pan. Immediately press a heavy lid or a flat spatula firmly down on the batter — hold it in place for 15-20 seconds. The pressing forces the batter into complete contact with the hot oiled surface, eliminating the air pockets that would otherwise produce a softer, less uniformly crispy result. Maintain the press and cook 3-4 minutes until the pressed side is deeply golden and releases cleanly from the pan when shaken. Do not flip — the top surface remains soft.`,
            tip: `The pressing is what makes áp chao textually distinct from every other Vietnamese rice pancake. The mechanical pressure during the initial set phase produces a fundamentally different starch alignment in the crust — the starch granules are forced flat against the hot metal surface, gelatinising in a dense, compressed layer that produces more crunch per millimetre than an unpressed pancake. This is the same principle as a smash burger vs a regular burger: pressure during initial cooking changes the texture irreversibly.`,
        },
        {
            title: `Fill and fold`,
            description: `With the pancake still in the pan (soft side up), place 3-4 tablespoons of warm duck filling across one half of the pancake. Add a spoonful of fermented chili sauce directly onto the filling. Scatter fried shallots. Slide a spatula under the unfilled half and fold it over the filled half — the soft top surface now wraps around the filling while the crispy bottom surface forms the exterior of the folded pancake. Slide immediately onto a plate.`,
        },
        {
            title: `Eat immediately`,
            description: `Bánh áp chao must be eaten within 3-4 minutes of leaving the pan — the pressed crust loses its crispness as it cools and steam from the warm filling softens it from the inside. In Cao Bằng, vendors press and fill continuously to order at the stall and hand each pancake over the counter immediately. The eating is fast and standing — one hand holds the folded pancake, the other holds a small cup of additional fermented chili sauce for dipping the bites. Add rau răm and cucumber from the herb plate at the counter. The crispy crust shattering against the aromatic duck filling and the sour fermented chili sauce is the eating experience — all three elements must be present in every bite.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}