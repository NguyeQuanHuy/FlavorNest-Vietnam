'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-cuon-thit-rung',
    title: `Đắk Lắk Wild Boar Rice Roll`,
    subtitle: `Bánh Cuốn Nhân Thịt Rừng — Steamed rice sheets filled with wild boar and highland forest mushrooms, dipped in mắc khén fish sauce.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '2 hrs 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh cuốn nhân thịt rừng is the Central Highlands adaptation of the classic steamed rice roll — a dish that exists throughout Vietnam but takes on a distinctly Đắk Lắk character when the filling is wild boar (lợn rừng, Sus scrofa) from the forest edge, combined with highland forest mushrooms (nấm rừng) harvested from the deciduous forests of the Krông Bông and Ea Kar districts. The rice sheet is identical in technique to the Hà Nội or Quảng Ngãi version; it is the filling that transforms this into something specific to the highlands.\n\nWild boar in Đắk Lắk is both hunted and increasingly farmed by Ê Đê and M'Nông communities who raise semi-wild pigs in forest enclosures. The meat is darker, leaner, and more intensely flavoured than commercial pork — denser muscle fibre from constant movement, and a diet of forest roots, tubers, and insects that produces a gamey depth that domestic pork entirely lacks. In the filling, wild boar is combined with whatever highland mushrooms are in season: nấm mối (termite mushrooms, Termitomyces), nấm tràm (Lactarius forest mushrooms), or dried nấm hương (shiitake) when fresh forest mushrooms are unavailable.\n\nThe dipping sauce departs from the standard nước chấm of lowland bánh cuốn — it is built on mắc khén and fish sauce, with a small amount of me rừng souring liquid that gives it the forest character connecting the dip to the filling inside the roll. This three-layer continuity — mắc khén in the dip, forest mushrooms in the filling, wild boar as the protein — makes bánh cuốn nhân thịt rừng a dish that could only come from Đắk Lắk.`,
    ingredientSections: [
        {
            title: `Rice sheet batter`,
            items: [
                { amount: 200, unit: 'g', name: `rice flour (bot gao te)` },
                { amount: 50, unit: 'g', name: `tapioca starch (bot nang)` },
                { amount: 500, unit: 'ml', name: `water` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Wild boar and forest mushroom filling`,
            items: [
                { amount: 300, unit: 'g', name: `wild boar mince (lon rung)`, note: `substitute: 250g pork shoulder + 50g pork liver, combined — approximates the gamey depth` },
                { amount: 80, unit: 'g', name: `dried shiitake mushrooms (nam huong)`, note: `soaked 20 min, drained, stems removed, minced fine` },
                { amount: 50, unit: 'g', name: `dried wood ear mushroom (nam meo)`, note: `soaked 20 min, drained, minced` },
                { amount: 3, name: `shallots, minced` },
                { amount: 4, name: `garlic cloves, minced` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `mac khen berries, toasted and crushed`, note: `in the filling — connects filling to dipping sauce` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Mắc khén dipping sauce (nuoc cham mac khen)`,
            items: [
                { amount: 1, unit: 'tbsp', name: `mac khen berries, toasted and crushed` },
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `warm water` },
                { amount: 1, unit: 'tbsp', name: `me rung souring liquid`, note: `or substitute: 1 tbsp lime juice + 0.5 tsp rice vinegar` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, minced` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, name: `bunch rau ram (Vietnamese coriander)` },
                { amount: 1, name: `bunch mint` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `drizzled over finished rolls` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the batter — rest 30 minutes`,
            description: `Whisk rice flour, tapioca starch, and salt together. Add water gradually, whisking until completely smooth. Add neutral oil and whisk once more. Strain through a fine sieve into a clean bowl. Rest 30 minutes — the starch hydrates fully and produces a more translucent, even sheet. The batter should be thin enough to pour easily and spread on the steaming cloth in a very thin layer — thinner than crepe batter. If it looks too thick, add 2-3 tbsp water and strain again.`,
        },
        {
            title: `Cook the wild boar filling`,
            description: `Heat neutral oil in a wok over high heat. Sauté minced shallots and garlic until golden, 2 minutes. Add wild boar mince and cook, breaking up constantly, until no pink remains and the meat has developed some colour — 5-6 minutes. Add minced shiitake and wood ear mushrooms. Stir 3 minutes until mushrooms are fragrant and any released moisture has evaporated. Add crushed mắc khén, fish sauce, sugar, black pepper, and sesame oil. Toss to combine. The filling should be fragrant, moist but not wet, and smell of forest mushroom depth with the mắc khén's numbing citrus on top. Spread on a plate to cool completely before filling the sheets.`,
            tip: `Wild boar mince is available from German game butchers (Wildfleisch) during hunting season — typically October to January. Outside hunting season, some butchers stock frozen wild boar year-round. The pork-liver substitute (250g pork shoulder + 50g liver) works because pork liver adds the gamey iron note that wild boar has and domestic pork lacks. Mince together rather than separately for even distribution.`,
        },
        {
            title: `Make the mắc khén dipping sauce`,
            description: `Combine mắc khén, fish sauce, warm water, me rừng souring liquid (or lime-vinegar substitute), sugar, minced garlic, and minced chili. Stir until sugar dissolves. The sauce should tingle the tongue within seconds. Rest 10 minutes — the mắc khén compounds infuse the liquid and the garlic flavour develops. Taste: sour-forward, savoury, with the forest-floor note of me rừng or lime acidity, and the numbing tingle arriving after each sip. This sauce contains three elements that connect it to the filling: mắc khén (in both), mushroom depth (echoed in the sauce's earthiness from me rừng), and garlic.`,
        },
        {
            title: `Set up the steaming cloth`,
            description: `Stretch thin muslin cloth tightly over a wide pot of vigorously boiling water — taut like a drum, secured with rubber bands. Brush the cloth surface lightly with neutral oil. Keep the water at a full rolling boil throughout. The steam must be vigorous — any reduction in boiling reduces the heat at the cloth surface and produces a sheet that is unevenly cooked, thick in some places and thin in others.`,
        },
        {
            title: `Steam the rice sheets — 60 seconds each`,
            description: `Pour 60ml of batter onto the centre of the cloth in one smooth circular motion, tilting the ladle as you pour to spread into a thin round about 20cm wide. Cover with a dome lid for exactly 60 seconds. The sheet is done when the surface appears set, slightly opaque, and no wet spots remain. Slide a thin flat wooden stick under the edges to loosen, then lift the entire sheet off the cloth in one smooth motion onto a lightly oiled surface.`,
            tip: `The wild boar filling is chunkier than standard pork-mushroom filling due to the coarser mince and the mushroom pieces. Use slightly more filling per roll (3 tbsp vs standard 2 tbsp) and roll more loosely — a too-tight roll will bulge and tear the rice sheet. The sheet is stronger than it looks but has directional tension — roll parallel to the direction the sheet was laid on the cloth.`,
        },
        {
            title: `Fill and roll`,
            description: `Working quickly while the sheet is still warm and pliable: place 3 tablespoons of cooled wild boar filling in a line across the lower third of the sheet. Fold the bottom edge up over the filling. Fold the left and right sides toward the centre. Roll forward firmly into a cylinder about 10cm long. The finished roll should feel solid when pressed gently — filling should be evenly distributed with no empty sections. Arrange on a serving plate immediately.`,
        },
        {
            title: `Finish and serve`,
            description: `Drizzle a small amount of neutral oil over the finished rolls — prevents them from sticking together and gives a slight sheen. Scatter fried shallots generously over all rolls. Arrange rau răm and mint leaves on the side. Serve with mắc khén dipping sauce in individual small bowls. Each roll is eaten whole in two bites, dipped fully in the sauce before each bite. The mắc khén tingle from the sauce meets the mắc khén inside the filling — the same spice arriving from outside and inside simultaneously is the flavour design of this dish. Eat within 10 minutes of rolling.`,
            tip: `Bánh cuốn nhân thịt rừng is best served at a highland temperature — the cool Đắk Lắk evening air (18-22°C) slows the cooling of the rice sheet and extends the eating window slightly compared to sea-level temperatures. In a warm kitchen, the 10-minute window is strict. In a cool room, 15 minutes is acceptable before the sheet hardens noticeably.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}