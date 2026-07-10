'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-xeo-tom-nhay-mo-duc',
    title: `Mộ Đức Sizzling Shrimp Pancake`,
    subtitle: `Bánh Xèo Tôm Nhảy Mộ Đức — Quảng Ngãi's crispy rice pancake with live jumping shrimp, cooked the moment they arrive from the river.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh xèo tôm nhảy is the signature dish of Mộ Đức district in Quảng Ngãi province — a sizzling rice pancake whose defining ingredient is tôm nhảy (jumping shrimp), small freshwater shrimp from the Vệ River that are used live, still moving, dropped directly into the hot batter in the pan. The name is literal: the shrimp jump (nhảy) when they hit the hot oil and batter, curling and turning pink in seconds. In Mộ Đức, the freshness of the shrimp is verified by this jumping action — a shrimp that does not jump is not fresh enough for the dish.\n\nBánh xèo itself is found throughout central and southern Vietnam, but the Mộ Đức version is distinct in three ways. First, the batter uses a higher proportion of rice flour to coconut milk than the southern version, producing a thinner, crispier shell that shatters rather than bends. Second, the shrimp are added raw and live rather than pre-cooked. Third, the accompaniment is not the southern herb plate with lettuce wrapping but a central Vietnamese combination of raw vegetables, mustard leaf (cải xanh), and mắm nêm dipping sauce with fresh pineapple — the same sauce that appears throughout Quảng Ngãi's seafood preparations.\n\nThe sizzle (xèo) that gives the dish its name comes from the moment the batter hits the extremely hot oil in the pan — the water in the batter vaporises instantly, creating the characteristic sound and the bubbling, lacy edge structure that is the visual hallmark of a correctly made bánh xèo. A pan that is not hot enough produces a pale, soft pancake with no sizzle and no lacy edge. The temperature of the pan is the single most important variable in the dish.`,
    ingredientSections: [
        {
            title: `Crispy bánh xèo batter`,
            items: [
                { amount: 200, unit: 'g', name: `rice flour (bot gao te)`, note: `fine-milled` },
                { amount: 30, unit: 'g', name: `tapioca starch (bot nang)`, note: `adds extra crispness` },
                { amount: 200, unit: 'ml', name: `coconut milk (nuoc cot dua)`, note: `full-fat` },
                { amount: 150, unit: 'ml', name: `cold sparkling water`, note: `the Mộ Đức addition — carbonation creates extra lacy edge bubbles` },
                { amount: 1, unit: 'tsp', name: `ground turmeric (bot nghe)`, note: `gives the pancake its golden colour` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 2, name: `spring onions, sliced thin`, note: `stirred into batter` },
            ],
        },
        {
            title: `Tôm nhảy (jumping shrimp)`,
            items: [
                { amount: 300, unit: 'g', name: `very fresh small shrimp (tom tuoi)`, note: `live if possible — must jump when touched; substitute: the freshest raw peeled shrimp available, kept on ice until the moment of cooking` },
                { amount: 0.5, unit: 'tsp', name: `salt`, note: `tossed with shrimp just before adding to pan` },
            ],
        },
        {
            title: `Additional fillings`,
            items: [
                { amount: 150, unit: 'g', name: `bean sprouts (gia do)`, note: `raw — added in the final 30 seconds` },
                { amount: 100, unit: 'g', name: `pork belly (ba chi heo)`, note: `sliced thin — optional; some Mộ Đức versions are shrimp-only` },
                { amount: 4, unit: 'tbsp', name: `neutral oil`, note: `minimum 1 tbsp per pancake — the generous oil is what creates crispness` },
            ],
        },
        {
            title: `Mắm nêm dipping sauce (Mộ Đức style)`,
            items: [
                { amount: 4, unit: 'tbsp', name: `mam nem (fermented anchovy paste)` },
                { amount: 3, unit: 'tbsp', name: `fresh pineapple juice`, note: `strained from blended fresh pineapple` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 2, name: `lemongrass stalks, inner white only, minced fine` },
                { amount: 3, name: `bird's eye chili, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 3, unit: 'tbsp', name: `warm water` },
            ],
        },
        {
            title: `Central Vietnamese wrap plate`,
            items: [
                { amount: 1, name: `head mustard greens (cai xanh)`, note: `young leaves — the Quảng Ngãi wrap leaf` },
                { amount: 1, name: `head butter lettuce` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 1, name: `bunch perilla (tia to)` },
                { amount: 1, name: `cucumber, cut into thin batons` },
                { amount: 200, unit: 'g', name: `green banana, sliced thin`, note: `optional — astringency balances the mắm nêm` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the batter — rest 20 minutes`,
            description: `Combine rice flour, tapioca starch, turmeric, salt, and sugar in a bowl. Add coconut milk and whisk until completely smooth. Just before cooking, add cold sparkling water and stir gently — do not whisk vigorously, which destroys the carbonation bubbles. Stir in sliced spring onions. The batter should be thin and pourable, thinner than crepe batter. Rest 20 minutes — then add the sparkling water at the last moment before cooking begins. The carbonation creates additional steam bubbles when the batter hits the hot oil, producing the lacy, irregular edge structure specific to Mộ Đức bánh xèo.`,
            tip: `The sparkling water must be added immediately before cooking — within 5 minutes of the first pancake. After 10 minutes the carbonation dissipates and the batter behaves like still-water batter. If making for a large group, add the sparkling water in two batches — half at the start, half halfway through cooking. Cold sparkling water (straight from the refrigerator) retains its carbonation longer than room-temperature sparkling water.`,
        },
        {
            title: `Make the mắm nêm sauce`,
            description: `Blend ¼ fresh pineapple smooth and strain through a fine sieve. Combine mắm nêm paste with warm water and stir until smooth. Add pineapple juice, lime juice, and sugar — stir until dissolved. Add minced lemongrass, garlic, and chili. Rest 10 minutes before serving to allow the lemongrass to infuse and the pineapple enzyme to mellow the anchovy paste. The sauce should be pungent, sweet-sour, and intensely aromatic. In Mộ Đức, the mắm nêm is served in a deep bowl rather than a flat saucer — the depth allows the wrap to be dipped fully without dripping.`,
        },
        {
            title: `Heat the pan to the correct temperature`,
            description: `Use a small non-stick or well-seasoned cast iron pan 20-22cm diameter. Heat over high heat for 2-3 minutes until the pan is extremely hot — test by flicking a drop of water onto the surface: it should evaporate instantly with a sharp crack, not sizzle and linger. Add 1 tbsp neutral oil and swirl to coat the entire surface including the sides. The oil should shimmer and move freely. This extreme heat is the single most important variable in bánh xèo — a pan that is merely warm produces a soft, pale, unsatisfying pancake with no crunch and no lacy edge.`,
            tip: `In Mộ Đức market stalls, the bánh xèo pan is kept on high heat continuously throughout service — it never cools between pancakes. The vendor adds oil for each new pancake while the pan remains at maximum temperature. At home, the pan will cool slightly between pancakes. Reheat to maximum temperature before each new one — 60-90 seconds on high is sufficient if you start from an already-warm pan. Never reduce heat during cooking.`,
        },
        {
            title: `Cook the pancake — the tôm nhảy moment`,
            description: `With the pan at maximum heat and oil shimmering: add the shrimp first — 5-6 shrimp per pancake, dropped directly into the hot oil. They will sizzle violently and curl immediately. After 10 seconds, pour approximately 80ml of batter in a thin, even layer over and around the shrimp in a single smooth circular motion — tilt the pan as you pour to spread the batter to the edges. The batter will sizzle explosively (this is the xèo sound) and begin forming bubbles and a lacy edge immediately. Add a small amount of pork belly if using. Cover with a lid for 2 minutes.`,
            tip: `The shrimp-before-batter sequence is critical. Adding batter first and then shrimp produces a pancake where the shrimp sit on top of the batter surface — they cook unevenly and do not integrate into the pancake structure. Shrimp added to hot oil first begin cooking immediately and become slightly embedded in the surface of the batter as it is poured over, producing shrimp that are cooked through and structurally part of the pancake.`,
        },
        {
            title: `Add bean sprouts and finish`,
            description: `After 2 minutes covered, remove the lid. The top surface of the batter should be set and dry-looking; the edges should be beginning to pull away from the pan and turn golden. Add a small handful of raw bean sprouts across one half of the pancake. Drizzle a small amount of additional oil around the edge of the pancake — this oil runs under the pancake and creates the final crispening of the base. Cook uncovered for 90 more seconds until the base is deep golden and the edge is visibly crispy and lacy. Fold the empty half of the pancake over the bean-sprout half using a thin spatula. Slide onto a plate.`,
            tip: `The fold should happen when the base is correctly crispy — press gently on the centre of the pancake with a spatula before folding. You should feel and hear a slight crunch. If the pancake feels soft when pressed, cook 30 more seconds before folding. A correctly cooked bánh xèo Mộ Đức holds its folded shape on the plate without collapsing — the crispy shell is structural, not just textural.`,
        },
        {
            title: `Wrap and eat the central Vietnamese way`,
            description: `Tear pieces of the folded pancake directly from the plate — do not slice. Place a torn piece on a mustard leaf or lettuce leaf. Add a few sprigs of rau răm, mint, and perilla. Add a baton of cucumber and a slice of green banana if using. Fold the leaves around the filling loosely and dip the entire wrap into the mắm nêm sauce. Eat in one large bite. The sequence of flavours: first the sharp mắm nêm and pineapple, then the crispy pancake and sweet shrimp, then the green herb freshness and mustard leaf bitterness at the finish. The mustard leaf bitterness is the central Vietnamese element that distinguishes this from southern bánh xèo wrapping with plain lettuce.`,
            tip: `Bánh xèo Mộ Đức is eaten the moment it comes off the pan — never let it sit for more than 3 minutes before serving. The pancake's crispness is its defining quality and begins to soften from the steam trapped inside the fold within 5 minutes. In Mộ Đức market stalls, the vendor cooks one or two pancakes at a time and serves them directly to the waiting customer. Cook to order at home — never in advance.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}