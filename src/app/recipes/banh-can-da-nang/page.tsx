'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-can-da-nang',
    title: `Đà Nẵng Mini Rice Cake`,
    subtitle: `Bánh Căn Đà Nẵng — Tiny rice batter cakes cooked in clay moulds with shrimp, squid, and egg — the central coast's most communal street food experience.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh căn is the mini rice cake of the central Vietnamese coast — small, thick, crispy-edged, steaming rice batter cakes cooked in individual clay or cast-iron mould plates over charcoal, each mould about 6-7cm in diameter and 2cm deep, filled with rice batter and a single piece of fresh seafood or an egg cracked directly into the batter as it sets. The dish originated in Phan Rang and Phan Thiết (Ninh Thuận and Bình Thuận provinces) but has become deeply rooted in Đà Nẵng's street food culture, where it is eaten as afternoon snack, late-night supper, or casual lunch at stalls that cook continuously throughout the day.\n\nThe clay mould is the dish's essential vessel — not just a cooking tool but the element that determines the bánh căn's specific texture. Clay conducts heat differently from metal: it heats more slowly but retains heat more evenly and for longer, producing a cake that is cooked by stored thermal energy from the clay itself rather than by direct flame heat. The outer surface of the cake in contact with the clay develops a thin, slightly caramelised crust through the clay's sustained heat, while the interior remains soft and slightly custardy from the egg and the rice batter's steam cooking. This two-texture result — caramelised exterior, soft interior — is specific to clay-cooked bánh căn and cannot be replicated in metal pans.\n\nThe communal element of bánh căn eating is inseparable from the experience: the clay mould plate is shared at the table, everyone waiting for the vendor to flip the moulds and scoop out the cakes in batches, each person taking the cakes directly from the mould as they are ready. The eating is ongoing and interactive rather than the presentation of a finished dish — bánh căn is process as much as product.`,
    ingredientSections: [
        {
            title: `Rice batter`,
            items: [
                { amount: 200, unit: 'g', name: `rice flour (bot gao te)` },
                { amount: 30, unit: 'g', name: `tapioca starch (bot nang)` },
                { amount: 280, unit: 'ml', name: `water` },
                { amount: 50, unit: 'ml', name: `coconut milk (nuoc cot dua)` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 2, name: `spring onions, sliced thin`, note: `stirred into batter` },
            ],
        },
        {
            title: `Fillings (choose per mould)`,
            items: [
                { amount: 200, unit: 'g', name: `fresh small shrimp (tom nho)`, note: `peeled — 1 per mould` },
                { amount: 150, unit: 'g', name: `fresh squid (muc)`, note: `cleaned, cut into 1cm pieces — 2-3 per mould` },
                { amount: 8, name: `quail eggs or 4 small chicken eggs`, note: `cracked directly into the batter — 1 quail egg or half a chicken egg per mould` },
                { amount: 100, unit: 'g', name: `pork mince (thit heo xay)`, note: `seasoned and cooked — 1 tsp per mould` },
            ],
        },
        {
            title: `For cooking`,
            items: [
                { amount: 1, name: `banh can clay mould plate (khuon banh can)`, note: `or cast-iron mould plate with 6-8 circular depressions; substitute: a cast-iron mini muffin pan or individual cast-iron egg mould` },
                { amount: 4, unit: 'tbsp', name: `neutral oil`, note: `for oiling moulds between batches` },
            ],
        },
        {
            title: `Dipping sauce (nước chấm bánh căn)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1.5, unit: 'tbsp', name: `sugar` },
                { amount: 4, unit: 'tbsp', name: `warm water` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 2, unit: 'tbsp', name: `mam nem (fermented anchovy sauce)`, note: `the central Vietnamese addition — a small amount mixed into the nuoc cham` },
            ],
        },
        {
            title: `Accompaniments`,
            items: [
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch kinh gioi` },
                { amount: 100, unit: 'g', name: `do chua (pickled daikon and carrot)` },
                { amount: 2, name: `green onions, sliced` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the batter — rest 20 minutes`,
            description: `Whisk rice flour, tapioca starch, salt, and sugar together. Add water gradually, whisking smooth. Add coconut milk and whisk once more. Stir in sliced spring onions. Rest 20 minutes — the starch hydrates fully during resting, producing a more uniform batter that spreads evenly in the small moulds. The batter should be thin enough to pour easily but thick enough to coat the back of a spoon — thinner than pancake batter, thicker than crêpe batter. The coconut milk adds fragrance and assists browning but is present in a smaller quantity than in bánh xèo — the priority for bánh căn is the thick, custardy interior rather than maximum crispness.`,
        },
        {
            title: `Set up and preheat the mould`,
            description: `Place the clay or cast-iron mould plate over a moderate charcoal fire or gas burner. Heat for 4-5 minutes until the mould is very hot — test by dropping a few drops of water into a depression: they should evaporate immediately with a sharp hiss. Brush each depression lightly with neutral oil — use a small brush or a paper towel folded into a pad. The oil must coat the entire interior surface of each depression, including the sides, or the cake will stick when removed.`,
            tip: `The clay mould's thermal properties are the secret of bánh căn's specific texture. Clay has a lower thermal conductivity than cast iron (0.8 W/m·K vs 50 W/m·K) but a higher heat capacity — it heats slowly but stores heat efficiently and releases it evenly over time. The cast surface of a clay mould maintains a temperature within ±5°C across its cooking surface during active use, while metal moulds can vary ±30°C depending on the flame position. This thermal evenness is what produces uniformly cooked bánh căn — the same crust thickness and colour in every mould depression simultaneously, regardless of its position relative to the heat source.`,
        },
        {
            title: `Fill and cook — the bánh căn rhythm`,
            description: `Pour batter into each hot oiled depression until two-thirds full — the batter will sizzle and begin setting immediately at the edges. Add your chosen filling to each mould while the batter is still liquid: press one shrimp gently into the centre, or add squid pieces, or crack one quail egg directly onto the batter surface. The egg white will flow over the surface; the yolk will settle into the batter. Cover the mould plate with a dome lid or inverted pot. Cook covered for 3-4 minutes until the batter is set throughout and the bottom crust is golden. Remove the lid and cook 1 more minute uncovered to crisp the bottom further.`,
            tip: `The covered cooking is the technique that produces the bánh căn's characteristic two-texture result: the dome lid traps steam from the batter itself, creating a microsteam environment that cooks the top of each cake by steam while the bottom is cooked by direct clay-contact heat. The bottom is caramelised and crispy from the clay's sustained heat; the top is soft and slightly custardy from the trapped steam. Without the lid, both surfaces would develop the same dry, crispy texture and the interior would be dense rather than custardy.`,
        },
        {
            title: `Remove and serve in batches`,
            description: `Use a small offset spatula or bamboo skewer to loosen each cake from its mould — run the spatula around the edge, then slide under the cake and lift. The cake should release cleanly if the mould was properly oiled and the clay at correct temperature. If it sticks, the mould was not hot enough or the oil insufficient. Place each batch of 6-8 cakes on a serving plate. Scatter spring onion and fried shallots over the hot cakes. Serve with nuoc cham-mắm nêm dipping sauce, rau răm, kinh giới, and pickled vegetables on the communal table. Cook in continuous batches — bánh căn is eaten as it comes off the mould, hot and steam-rising, not accumulated and served all at once.`,
        },
        {
            title: `The dipping sauce — nuoc cham with mắm nêm`,
            description: `Combine fish sauce, lime juice, sugar, warm water, minced garlic, and chili into a standard nuoc cham. Add a small amount of mắm nêm — this central Vietnamese addition gives the dipping sauce a deeper, more funky character than plain nuoc cham while remaining balanced enough for the mild rice cake. Stir until sugar dissolves. Taste: the sauce should be sweet-sour-salty with a subtle fermented depth from the mắm nêm. The mắm nêm quantity is small (2 tablespoons in the total sauce) — enough to add dimension without making the sauce pungently fermented.`,
        },
        {
            title: `The communal eating ritual`,
            description: `Bánh căn is eaten the moment it leaves the mould — the bottom crust maintains its crispness for only 3-4 minutes before the steam from the interior softens it. Each person at the table takes cakes directly from the serving plate as they arrive, dipping in the nuoc cham-mắm nêm and eating with fresh rau răm and pickled vegetables. The vendor cooks continuously and the table eats continuously — the interaction between vendor and diners, the sound of the batter hitting the hot clay, the rising steam, and the small cakes appearing one batch at a time is the complete bánh căn experience. In Đà Nẵng\'s night markets, bánh căn stalls attract tables of 6-8 people who order and eat for 45-60 minutes, the conversation flowing around the mould plate that anchors the table.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}