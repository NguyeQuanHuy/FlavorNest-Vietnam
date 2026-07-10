'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-cong-can-tho',
    title: `Cần Thơ Fried Shrimp and Mung Bean Cake`,
    subtitle: `Bánh Cống Cần Thơ — Crispy deep-fried rice cakes filled with whole shrimp, seasoned pork, and mung bean — the Mekong Delta's most satisfying street snack.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh cống is the deep-fried street snack that defines Cần Thơ's sidewalk food culture — a thick, crispy rice flour cake fried in a small cylindrical metal mould (cái cống — literally "the pipe" or "the culvert," referring to the shape of the mould) until the exterior is shatteringly crisp and deeply golden while the interior remains soft, savoury, and loaded with whole shrimp, seasoned pork mince, and cooked mung beans. The name is completely literal: the cake is named after the pipe-shaped mould it is fried in.\n\nBánh cống originated in Lai Vung district of Đồng Tháp province but has become so thoroughly associated with Cần Thơ — where the dish appears at virtually every street corner market and morning stall — that it is now considered synonymous with the city's street food identity. The Cần Thơ version is slightly larger than the Lai Vung original, uses a higher proportion of mung bean in the filling, and is always served with the specific combination of fresh herbs, pickled daikon and carrot, and a nuoc cham that is slightly more diluted than the central Vietnamese version — reflecting the Mekong Delta preference for sweeter, gentler dipping sauces.\n\nThe technical challenge of bánh cống is the batter — a mixture of rice flour, tapioca starch, and a small amount of coconut milk that must be thin enough to produce a crispy exterior but thick enough to bind the filling during the initial frying. The filling ingredients (shrimp, pork, mung bean) are not pre-mixed into the batter but layered inside the mould — the shrimp sits at the bottom (which becomes the top when the cake is inverted), the pork and mung bean fill the middle, and the batter surrounds everything. This layering ensures that the shrimp is visible and intact in the finished cake rather than embedded in a homogeneous mass.`,
    ingredientSections: [
        {
            title: `Rice batter`,
            items: [
                { amount: 200, unit: 'g', name: `rice flour (bot gao te)` },
                { amount: 50, unit: 'g', name: `tapioca starch (bot nang)` },
                { amount: 300, unit: 'ml', name: `water` },
                { amount: 50, unit: 'ml', name: `full-fat coconut milk`, note: `adds fragrance and accelerates browning` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `ground turmeric`, note: `the golden colour` },
                { amount: 2, name: `spring onions, sliced thin`, note: `stirred into batter` },
            ],
        },
        {
            title: `Filling`,
            items: [
                { amount: 200, unit: 'g', name: `fresh medium shrimp (tom)`, note: `peeled and deveined — 1 whole shrimp per cake` },
                { amount: 150, unit: 'g', name: `pork mince (thit heo xay)`, note: `seasoned with 1 tbsp fish sauce, 0.5 tsp pepper, 0.5 tsp sugar` },
                { amount: 100, unit: 'g', name: `split mung beans (dau xanh co vo)`, note: `soaked 2 hours, steamed 15 min until soft — the Cần Thơ generous portion` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `For frying`,
            items: [
                { amount: 800, unit: 'ml', name: `neutral oil`, note: `for deep frying — enough for 8cm depth` },
                { amount: 4, name: `banh cong moulds (cylindrical metal cups 6cm diameter)`, note: `or substitute: deep metal ladles or small metal cups` },
            ],
        },
        {
            title: `Nuoc cham Mekong style`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 3, unit: 'tbsp', name: `lime juice` },
                { amount: 2, unit: 'tbsp', name: `sugar` },
                { amount: 4, unit: 'tbsp', name: `warm water`, note: `more diluted than central version — Mekong sweetness` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `Herb plate and pickles`,
            items: [
                { amount: 1, name: `head butter lettuce` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 150, unit: 'g', name: `bean sprouts, raw` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 100, unit: 'g', name: `do chua (pickled daikon and carrot)`, note: `julienned daikon + carrot, soaked in rice vinegar + sugar + salt 30 min` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the batter — rest 20 minutes`,
            description: `Whisk rice flour, tapioca starch, turmeric, salt, and sugar together. Add water gradually, whisking smooth. Add coconut milk and whisk once more. Stir in sliced spring onions. Strain through a fine sieve. Rest 20 minutes — the starch hydrates fully and the coconut fat disperses evenly. The batter should be thin and pourable with a pale golden colour from the turmeric. The coconut milk is not a dominant flavour but a functional ingredient — its fat content raises the browning temperature of the batter surface, producing deeper colour and better crunch than plain-water batter at the same frying temperature.`,
        },
        {
            title: `Prepare the filling`,
            description: `Heat oil in a pan over medium-high heat. Sauté shallots and garlic until golden. Add seasoned pork mince and cook, breaking up, until just cooked through — 3-4 minutes. Add steamed mung beans and toss together. Season to taste. Cool completely. The filling must be cool before going into the mould — hot filling heats the batter before frying begins and produces a soft rather than crispy result. Keep shrimp separate and raw — they are added to the mould last and cook in the oil.`,
        },
        {
            title: `Heat the moulds in oil — the critical step`,
            description: `Pour oil into a deep pot to 8cm depth. Heat to 180°C. Place the bánh cống moulds directly into the hot oil and heat for 2-3 minutes until the moulds are extremely hot — this preheating is the technique that produces the characteristic crispy bond between batter and mould interior. A cold or warm mould produces a batter that sits in it limply; a very hot mould immediately sets the batter on contact, creating the structural crust that holds the cake together during the remaining frying time.`,
            tip: `The mould-preheating technique is what makes bánh cống technically distinct from other fried snacks. The batter literally sets on the hot metal surface within 1-2 seconds of contact — before the mould is even submerged in oil — creating a thin, pre-set shell that traps the filling and maintains the cake's shape. Without preheating: the batter flows out of the mould when submerged, the filling separates, and the cake loses its defined shape. A sufficiently preheated mould is the single most important variable in bánh cống preparation.`,
        },
        {
            title: `Fill the mould and fry`,
            description: `Working quickly with oven mitts — the mould is extremely hot: pour a thin layer of batter into the base of the mould (about 1 tbsp). Place one whole raw shrimp in the centre, pressing lightly. Add 2 tbsp of the pork-mung bean filling. Pour batter over to fill the mould to the rim, covering the filling completely. Lower the filled mould back into the 180°C oil. Fry 4-5 minutes until the cake is deeply golden and has pulled away slightly from the mould edges. Use tongs to slide the cake out of the mould — it should release cleanly. Continue frying free-floating in the oil for 1-2 more minutes until uniformly deep golden.`,
        },
        {
            title: `Drain and serve immediately`,
            description: `Remove with a spider strainer and drain on a wire rack — not paper towels, which trap steam. The finished bánh cống should be uniformly deep golden, audibly crispy when tapped with a chopstick, and reveal a whole pink shrimp on the top surface when viewed from above. Serve immediately — bánh cống loses its crispness within 8-10 minutes as steam from the filling migrates outward. In Cần Thơ, vendors fry to order continuously, handing each cake to the customer the moment it leaves the oil. Wrap in lettuce with rau răm, bean sprouts, pickled vegetables, and cucumber. Dip in Mekong nuoc cham.`,
            tip: `The correct eating technique for bánh cống: place the whole cake on a large lettuce leaf, add a pinch of bean sprouts, a few leaves of rau răm, and a small amount of pickled daikon-carrot. Fold the lettuce around the cake and dip the entire bundle in nuoc cham. Eat in one large bite — the crunch of the cake, the herbal freshness, and the sweet-sour dipping sauce must arrive simultaneously. Breaking the cake before wrapping destroys the structural experience.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}