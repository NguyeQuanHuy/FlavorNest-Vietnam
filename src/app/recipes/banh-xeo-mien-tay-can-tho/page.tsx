'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-xeo-mien-tay-can-tho',
    title: `Cần Thơ Sizzling Rice Pancake`,
    subtitle: `Bánh Xèo Miền Tây — The Mekong Delta's giant crispy rice pancake with shrimp, pork, and bean sprouts — bigger, crispier, and richer than any other regional version.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh xèo miền Tây is the southern Vietnamese sizzling rice pancake at its most generous and most technically demanding — a large, thin, coconut milk-enriched rice crepe fried in abundant oil until the entire surface is shatteringly crispy and lacy-edged, filled with whole fresh shrimp, pork belly slices, bean sprouts, and mung bean, then folded and served with the most abundant herb plate in Vietnamese cooking. The Cần Thơ version is the benchmark against which all other bánh xèo are measured in the south.\n\nThe word xèo is onomatopoeic — the sound the batter makes when it hits the extremely hot oiled pan. This sound is the cook's first quality indicator: a loud, dramatic xèo means the pan is at the correct temperature and the batter will crisp immediately on contact; a quiet or absent sound means the pan is too cool and the pancake will be soft and pale. In Cần Thơ's bánh xèo restaurants, the sound of dozens of pans sizzling simultaneously is audible from the street — it is the restaurant's advertisement.\n\nWhat makes the Mekong Delta version distinct from the central Vietnamese versions (Đà Nẵng, Mộ Đức) is scale and fat. The pan used is 30-35cm — significantly larger than the 20-22cm central versions — producing a pancake that serves two people and requires a specific technique to fold without shattering. The oil quantity is twice that of central versions, producing a pancake that is more uniformly crispy across its entire surface rather than just at the edges. And the coconut milk ratio in the batter is higher than anywhere else, producing a fragrance and a browning acceleration that is the Mekong Delta's signature.`,
    ingredientSections: [
        {
            title: `Mekong Delta bánh xèo batter`,
            items: [
                { amount: 300, unit: 'g', name: `rice flour (bot gao te)` },
                { amount: 50, unit: 'g', name: `tapioca starch (bot nang)` },
                { amount: 300, unit: 'ml', name: `full-fat coconut milk (nuoc cot dua)`, note: `the Mekong high ratio — fragrance + browning acceleration` },
                { amount: 150, unit: 'ml', name: `cold sparkling water`, note: `carbonation = lacy edge bubbles` },
                { amount: 1.5, unit: 'tsp', name: `ground turmeric (bot nghe)` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 3, name: `spring onions, sliced thin`, note: `stirred into batter` },
            ],
        },
        {
            title: `Filling — the Cần Thơ generous portions`,
            items: [
                { amount: 300, unit: 'g', name: `fresh large shrimp (tom)`, note: `peeled, deveined — 3-4 per pancake` },
                { amount: 200, unit: 'g', name: `pork belly (ba chi heo)`, note: `sliced thin 3mm` },
                { amount: 200, unit: 'g', name: `bean sprouts (gia do)`, note: `raw — added in final 30 seconds` },
                { amount: 80, unit: 'g', name: `cooked mung beans (dau xanh)`, note: `steamed soft — scattered over filling` },
                { amount: 6, unit: 'tbsp', name: `neutral oil`, note: `minimum 1.5 tbsp per pancake — the Mekong generous oil` },
            ],
        },
        {
            title: `Mekong nuoc cham (sweeter, more diluted)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 3, unit: 'tbsp', name: `lime juice` },
                { amount: 3, unit: 'tbsp', name: `sugar`, note: `more than central version` },
                { amount: 5, unit: 'tbsp', name: `warm water`, note: `more diluted — Mekong Delta preference` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 1, unit: 'tbsp', name: `fresh pineapple juice`, note: `the Cần Thơ addition — tropical sweetness` },
            ],
        },
        {
            title: `The abundant Mekong herb plate`,
            items: [
                { amount: 1, name: `head butter lettuce` },
                { amount: 1, name: `head mustard greens (cai xanh)`, note: `young leaves` },
                { amount: 1, name: `bunch rau ram (Vietnamese coriander)` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 1, name: `bunch perilla (tia to)` },
                { amount: 1, name: `bunch ngo gai (sawtooth coriander)` },
                { amount: 1, name: `bunch la lot (Piper sarmentosum)`, note: `for wrapping — the Mekong Delta addition` },
                { amount: 100, unit: 'g', name: `chuoi chát (green banana)`, note: `sliced thin — astringency reset` },
                { amount: 1, name: `cucumber, sliced into batons` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the batter — rest 20 minutes`,
            description: `Whisk rice flour, tapioca starch, turmeric, salt, and sugar. Add coconut milk gradually, whisking smooth. Add cold sparkling water last — stir gently to preserve carbonation. Fold in spring onions. Rest 15 minutes, then add sparkling water just before cooking begins. The batter should be thin — thinner than crepe batter — with a deep golden colour from the turmeric. The high coconut milk ratio (300ml per 300g flour) means this batter browns faster than central Vietnamese versions. Watch the heat closely — reduce slightly if edges brown before the centre sets.`,
            tip: `The sparkling water must be added in the last 5 minutes before cooking — the carbonation dissipates quickly at room temperature. In Cần Thơ bánh xèo restaurants, the sparkling water is added to the batter jug in small batches throughout the cooking session rather than all at once. The carbonation in the batter produces the characteristic lacy, irregular edge structure that makes the Mekong Delta bánh xèo visually distinctive — a smooth, straight edge indicates no carbonation was used.`,
        },
        {
            title: `Heat the 30-35cm pan correctly`,
            description: `Use the largest non-stick or well-seasoned pan available — 30-35cm for the authentic Mekong scale. Heat over high heat for 3 minutes until extremely hot. Test: a drop of water should evaporate instantly with a sharp crack. Add 1.5 tbsp oil and swirl to coat the entire surface including sides. The oil should shimmer and flow freely. This is the minimum oil for the Mekong version — the generous oil ensures the entire base crisps uniformly, not just the centre. The pan temperature at this point is the single most important variable in the dish.`,
        },
        {
            title: `Cook the filling first — pork then shrimp`,
            description: `Add pork belly slices to the hot oiled pan — spread across one half of the pan surface. Sear 60 seconds without moving. Add shrimp to the same half, scatter a spoonful of mung beans. Cook 30 seconds. Now pour approximately 120-140ml of batter in a rapid circular motion over and around the filling — tilt the pan as you pour to spread to the edges. The batter should sizzle explosively (the xèo sound) on contact with the hot oil. Cover immediately with a dome lid.`,
            tip: `The filling-before-batter sequence is the Mekong Delta method — protein hits the hot oil first, begins cooking immediately, then the batter is poured around it. This produces protein that is slightly caramelised on the bottom surface and structurally embedded in the batter rather than sitting on top. The alternative (batter first, protein on top) produces a softer, less integrated result where the protein steams on the batter surface rather than searing in the oil.`,
        },
        {
            title: `Steam 2 minutes then crisp`,
            description: `Leave covered for 2 minutes — the batter sets and the filling cooks through in the trapped steam. Remove lid. Scatter bean sprouts across the filled half. Drizzle 0.5 tbsp additional oil around the perimeter of the pancake — it runs underneath and crisps the base further. Cook uncovered 2 minutes until the base is audibly crispy when tapped with a spatula and the lacy edges are deep golden. The surface should look completely dry — no wet patches.`,
        },
        {
            title: `Fold the large Mekong pancake`,
            description: `The 30-35cm Mekong pancake requires a different folding technique than the smaller central versions. Use two wide spatulas simultaneously: slide one under the unfilled half from the left, one from the right. Lift together and fold over the filled half in one smooth motion. The crispy shell will crack slightly at the fold — this is normal and correct. The cracking creates the characteristic texture contrast: the fold line is slightly softer where it bent, the outer surfaces remain shatteringly crisp. Slide onto a large plate immediately.`,
            tip: `The two-spatula fold is the technique that prevents the large Mekong pancake from shattering during folding. A single spatula applied from one side creates uneven pressure and the pancake breaks along stress lines. Two spatulas create even upward pressure across the entire unfilled half, allowing the fold to happen at the thin centre rather than at a random crack point. Cần Thơ bánh xèo vendors practice this motion hundreds of times — at home, practice the motion dry (with the cold pan) before the first pancake.`,
        },
        {
            title: `Wrap and eat the Mekong way`,
            description: `Serve the folded pancake on a large plate with the full herb plate alongside. To eat: tear a piece of pancake from the fold. Place on a lettuce or mustard leaf with lá lốt. Add rau răm, mint, a sliver of green banana. Fold the leaves loosely around the pancake piece. Dip the entire wrap in the Mekong nuoc cham. Eat in one large bite — the simultaneous shatter of the crispy pancake, the herb freshness, the pineapple-sweetened nuoc cham, and the yielding shrimp is the complete Cần Thơ experience. The green banana's astringency after the bite resets the palate for the next wrap.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}