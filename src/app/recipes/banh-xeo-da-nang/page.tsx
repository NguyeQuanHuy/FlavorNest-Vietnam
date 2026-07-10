'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-xeo-da-nang',
    title: `Đà Nẵng Mini Sizzling Pancake`,
    subtitle: `Bánh Xèo Đà Nẵng — Central Vietnam's small, intensely crispy rice pancake with shrimp and bean sprouts — wrapped whole in mustard leaf and rice paper with mắm nêm.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh xèo Đà Nẵng is the central Vietnamese sizzling rice pancake — and it is immediately, visually, distinctly different from its southern Mekong Delta counterpart. Where the Cần Thơ bánh xèo is 30-35cm in diameter, made in a large pan, filled generously with whole shrimp, pork, and mung bean, and folded once to serve a single large portion — the Đà Nẵng version is 10-12cm in diameter, made in a small pan or on a special cast-iron griddle plate (khuôn bánh xèo miền Trung), filled with just 2-3 small shrimp and a pinch of bean sprouts, and served whole rather than folded. The small size is not an economy measure but a technical decision: the smaller diameter maximises the ratio of crispy edge to soft centre, producing a pancake that is more uniformly crispy across its entire surface than the large southern version can achieve.\n\nThe batter is also different. The central Vietnamese bánh xèo batter uses a higher proportion of rice flour to tapioca starch than the southern version, and adds a small amount of mung bean flour — producing a crispier, more brittle pancake that shatters dramatically when bitten rather than the slightly chewy-crispy texture of the Mekong Delta version. The trade-off: the more brittle central batter is less forgiving and requires higher oil temperature and more precise timing than the southern batter. An underdone central bánh xèo is pale, soft, and disappointing; a correctly made one is deep golden, audibly crunchy, and holds its crispness for longer than the southern version.\n\nThe wrapping is the eating ritual that most distinguishes the central from the southern version. The whole small pancake — not broken, not folded — is placed on a large mustard green leaf (lá cải xanh or lá mù tạt), wrapped with rau răm, kinh giới, green banana, starfruit, cucumber, and then the entire bundle is enclosed in a thin rice paper before dipping in mắm nêm. The whole pancake provides a structural crunch within the soft rice paper wrap that the broken southern version cannot — each bite delivers the full texture contrast simultaneously.`,
    ingredientSections: [
        {
            title: `Central Vietnamese bánh xèo batter`,
            items: [
                { amount: 150, unit: 'g', name: `rice flour (bot gao te)` },
                { amount: 30, unit: 'g', name: `tapioca starch (bot nang)` },
                { amount: 20, unit: 'g', name: `mung bean flour (bot dau xanh)`, note: `the central addition — extra crispness and slight nuttiness; substitute: additional rice flour` },
                { amount: 250, unit: 'ml', name: `cold water` },
                { amount: 50, unit: 'ml', name: `coconut milk`, note: `less than southern version — crispness priority over richness` },
                { amount: 1, unit: 'tsp', name: `ground turmeric` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 2, name: `spring onions, sliced thin`, note: `stirred into batter` },
            ],
        },
        {
            title: `Filling (minimal — central style)`,
            items: [
                { amount: 200, unit: 'g', name: `fresh small shrimp (tom nho)`, note: `peeled — 2-3 per pancake` },
                { amount: 100, unit: 'g', name: `bean sprouts (gia do)`, note: `a small handful per pancake — less than southern version` },
                { amount: 4, unit: 'tbsp', name: `neutral oil`, note: `1 tbsp per pancake — generous for uniform crispness` },
            ],
        },
        {
            title: `Nam Ô mắm nêm`,
            items: [
                { amount: 4, unit: 'tbsp', name: `mam nem` },
                { amount: 3, unit: 'tbsp', name: `fresh pineapple juice` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 2, unit: 'tbsp', name: `roasted peanuts, crushed` },
            ],
        },
        {
            title: `Wrapping components`,
            items: [
                { amount: 20, name: `sheets banh trang mong (thin rice paper)` },
                { amount: 8, name: `large mustard green leaves (la cai xanh)`, note: `the central wrapping leaf — provides peppery bitterness` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch kinh gioi` },
                { amount: 1, name: `bunch mint` },
                { amount: 2, name: `green bananas, sliced very thin` },
                { amount: 1, name: `starfruit (khe), sliced thin` },
                { amount: 1, name: `cucumber, julienned` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the central batter — rest 20 minutes`,
            description: `Whisk rice flour, tapioca starch, and mung bean flour together. Add cold water gradually, whisking smooth. Add coconut milk and whisk once more. Add turmeric, salt, and spring onion. Strain through a fine sieve. Rest 20 minutes. The mung bean flour's starch granules are smaller and more uniform than rice flour granules — they produce a denser, more uniform starch matrix in the batter that crisps more completely during frying. The lower coconut milk proportion (50ml vs 150ml in the southern version) means less fat in the batter — the central version relies on pan oil for crisping rather than batter fat, producing a more brittle, glass-like exterior.`,
            tip: `The mung bean flour addition is the central Vietnamese bánh xèo secret that most recipes outside the region omit. In isolation, mung bean flour produces a very crispy but slightly flat batter — its starches gelatinise at a lower temperature than rice flour, setting the exterior crust faster. Combined with rice flour in the 3:1 ratio used here, the mung bean flour accelerates surface setting while the rice flour provides the structural body. The result is a pancake that crisps faster and more completely than pure rice flour batter — requiring slightly higher attention to timing but producing the superior crispness that central Vietnamese bánh xèo is known for.`,
        },
        {
            title: `Use the correct small pan`,
            description: `The authentic khuôn bánh xèo miền Trung is a cast-iron plate with multiple small circular depressions (6-8cm diameter each) that allow multiple small pancakes to be cooked simultaneously over a single flame. At home, use a small (10-12cm) non-stick or cast-iron pan — one pancake at a time. The pan must be genuinely small: a standard 20-22cm pan used for the southern version cannot produce the uniform crispness of the central version at the correct size. The smaller diameter means the batter reaches the pan edge faster, the edge crisps before the centre fully sets, and the higher edge-to-centre ratio produces the characteristic extremely crispy ring around each small central pancake.`,
        },
        {
            title: `The small-pan frying technique`,
            description: `Heat the small pan over high heat until very hot — 3 minutes. Add 1 tbsp oil and swirl to coat completely. Add 2-3 shrimp to the hot oil — they will sizzle immediately. Cook 30 seconds. Pour 50-60ml of batter over and around the shrimp in a single pour — tilt the pan immediately to spread to the edges. The batter should sizzle explosively (the xèo sound) on contact. Cover with a small dome lid for 90 seconds. Remove lid — add a pinch of bean sprouts. Re-cover for 30 more seconds. Remove lid and cook uncovered 1-2 minutes until the edges are deeply golden and the surface looks completely dry and matte. The pancake is done when it slides freely in the pan and the entire visible surface is golden.`,
            tip: `The 50-60ml batter for a 10-12cm pan produces a pancake approximately 3-4mm thick — significantly thicker proportionally than the large southern version at the same batter depth. This thickness-to-diameter ratio is what produces the central bánh xèo's characteristic texture: a genuinely crispy exterior that is thicker and more substantial than the thin, delicate southern version, providing structural integrity when the whole pancake is wrapped in rice paper without breaking. The southern version must be broken before wrapping because its large diameter and thin edge cannot survive the rolling intact; the central version goes in whole precisely because its smaller diameter and thicker edge hold together.`,
        },
        {
            title: `Do not fold — serve whole`,
            description: `When the pancake is done, slide it whole onto a plate — do not fold. The no-fold rule is the central Vietnamese technical standard. Folding a small, more-brittle central bánh xèo shatters it — the higher mung bean flour content makes the crust less pliable than the southern version. More importantly, the whole pancake is designed to go into the rice paper wrap intact — its circular shape fits naturally into a rice paper circle, and the intact pancake provides structural crunch throughout the bite rather than at scattered edges. Fold at the table only if requested by the diner.`,
        },
        {
            title: `Prepare the wrapping station`,
            description: `Arrange all wrapping components on a communal plate: mustard green leaves, rau răm, kinh giới, mint, green banana slices, starfruit slices, cucumber, and rice paper sheets. Prepare mắm nêm in individual dipping bowls. The wrapping station is set up before the first pancake comes off the heat — bánh xèo Đà Nẵng must be eaten the moment it leaves the pan, and the wrap must be assembled in under 60 seconds before the pancake cools and loses its crispness.`,
        },
        {
            title: `Wrap and eat — the central Vietnamese technique`,
            description: `Briefly dampen a thin rice paper sheet (2 seconds in warm water). Lay flat. Place a mustard green leaf on the lower third. Place the whole hot bánh xèo on the mustard leaf. Add rau răm, kinh giới, and mint alongside the pancake. Add a thin slice of green banana, a slice of starfruit, a few cucumber sticks. Fold the rice paper sides in and roll forward firmly — the whole pancake creates a bulge in the centre of the roll, which is correct. Dip the entire roll in mắm nêm and eat in 2-3 bites. The mustard leaf's peppery bitterness against the pancake's fatty crispness, the green banana's astringency, the starfruit's sourness, and the mắm nêm's deep fermented funk is the specific central Vietnamese flavour sequence that no other regional version of bánh xèo produces.`,
            tip: `The mustard green leaf is the central Vietnamese wrapping element that most clearly differentiates this preparation from the Mekong Delta version, which uses butter lettuce. Mustard greens (Brassica juncea) contain glucosinolates that produce a peppery, slightly bitter note — this bitterness is specifically calibrated to cut through the bánh xèo's richness and provide the contrast that the neutral butter lettuce cannot. In Đà Nẵng, the mustard leaf's bitterness and the mắm nêm's funk are the two elements that give the wrap its adult, complex character — the sweet-rich pancake alone would be one-dimensional without them.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}