'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'long-ca-mam-tom',
    title: `Fish Offal with Shrimp Paste`,
    subtitle: `Lòng Cá Mắm Tôm — Sầm Sơn's fisherman dish of fresh fish offal blanched and dressed with mắm tôm, lime, dill, and toasted sesame.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Lòng cá mắm tôm is the dish that Sầm Sơn fishing families eat before anyone else in Vietnam has access to the same ingredient — because the ingredient is the offal of the catch, available only at the moment of landing and worthless by the following morning. Lòng cá (fish offal: liver, roe, milt, stomach, swim bladder) is removed from the fish within minutes of arrival at the pier, blanched briefly in salted water, dressed while still warm with mắm tôm, fresh lime juice, dill, toasted sesame, fried shallots, and sliced chili, and eaten immediately. The entire preparation takes under 30 minutes from pier to plate.\n\nThe dish exists because nothing is wasted in a fishing community. The fish itself goes to the market; the offal goes to the family. What began as subsistence food has become, over generations, a dish that Sầm Sơn locals actively seek out and that visiting Vietnamese from other provinces specifically request when they come to the coast. The offal of fresh mackerel, snapper, and scad — cooked within the hour of catching — has a sweetness and delicacy completely absent from the same ingredients purchased at an inland market the next day.\n\nThe mắm tôm dressing is the axis of the dish. Unlike lòng heo (pork offal) or lòng gà (chicken offal), which are rich enough to carry simple seasonings, fish offal is delicate and benefits from the concentrated pungency of shrimp paste to anchor it. The dill — used with characteristic frequency in Thanh Hóa coastal cooking — adds a herbaceous brightness. The toasted sesame provides the nutty counterpoint. Together they produce a dish that is simultaneously humble in origin and complex in execution.`,
    ingredientSections: [
        {
            title: `Fish offal (long ca)`,
            items: [
                { amount: 400, unit: 'g', name: `fresh mixed fish offal`, note: `liver (gan ca), roe (trung ca), milt (bong ca), swim bladder (bong bong ca), stomach (da day ca) — from mackerel, snapper, or scad; must be same-day fresh` },
                { amount: 2, unit: 'tbsp', name: `coarse salt`, note: `for cleaning` },
                { amount: 1, unit: 'tbsp', name: `rice vinegar`, note: `added to blanching water — removes fishiness` },
                { amount: 1, unit: 'L', name: `water`, note: `for blanching` },
                { amount: 3, name: `slices fresh ginger`, note: `added to blanching water` },
            ],
        },
        {
            title: `Mắm tôm dressing (nuoc cham mam tom)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `shrimp paste (mam tom dac)`, note: `thick northern-style — Thanh Hoa or Nghe An preferred` },
                { amount: 2, unit: 'tbsp', name: `fresh lime juice` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `warm water` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 3, name: `bird's eye chili, minced` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `heated until shimmering and poured over sauce to bloom` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 1, name: `large bunch fresh dill (thi la)`, note: `roughly chopped — the Thanh Hoa coastal herb` },
                { amount: 2, unit: 'tbsp', name: `toasted white sesame seeds (me rang)` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, name: `fresh red chili, sliced thin`, note: `for colour` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 10, name: `sheets grilled sesame rice cracker (banh trang me nuong)` },
                { amount: 1, name: `head butter lettuce` },
                { amount: 4, name: `portions steamed white rice`, note: `optional — some eat with rice, some with crackers only` },
            ],
        },
    ],
    steps: [
        {
            title: `Clean the fish offal`,
            description: `Rinse each piece of offal under cold running water. The stomach (dạ dày cá) must be opened and turned inside out — make a small cut and rinse the interior thoroughly under running water until completely clean. The swim bladder (bong bóng cá) is rinsed whole. Roe sacs are handled gently to avoid breaking — a broken roe sac releases eggs into the blanching water and is difficult to retrieve cleanly. Liver pieces should be checked for any green bile duct tissue — a small greenish streak — which must be cut away as it is intensely bitter. Toss all cleaned offal with 2 tbsp coarse salt, let stand 5 minutes, then rinse thoroughly under cold water.`,
            tip: `The bile duct removal from fish liver is the most critical cleaning step. A tiny amount of bile contaminating the other offal pieces makes the entire dish bitter and is not correctable by any seasoning. Run your finger along each liver piece and feel for the firmer, slightly greenish bile duct tissue — it is easily identified by its colour and texture difference from the soft, dark red liver. Cut generously around it, taking some liver with it rather than risking leaving any bile.`,
        },
        {
            title: `Blanch the offal`,
            description: `Bring 1 L water to a rolling boil with ginger slices and rice vinegar. Add fish offal in this order: stomach first (needs most cooking — 3 minutes), then liver and swim bladder (2 minutes), then roe and milt last (90 seconds only — overcooking makes roe grainy and milt rubbery). Each component is added separately and removed with a slotted spoon to a colander when done. The vinegar in the blanching water neutralises residual fishiness. The ginger performs the same function. Do not overcook any component — fish offal loses its delicate texture within seconds of the correct endpoint.`,
            tip: `The separate blanching times for each offal component is the technique that separates a properly executed lòng cá from a rushed version. Blanching everything together produces a mix where some components are overcooked by the time others are done. The stomach takes longest because of its muscle structure; the milt (fish sperm sac) takes shortest because it is almost entirely protein and sets almost instantly in hot water. Set separate plates for each component as you remove them.`,
        },
        {
            title: `Make the mắm tôm dressing`,
            description: `Combine shrimp paste, lime juice, sugar, warm water, minced garlic, and minced chili in a bowl. Stir until sugar dissolves — the mixture will foam from the lime-paste reaction. Heat neutral oil in a small pan until just shimmering. Pour hot oil over the sauce in one motion — it will sizzle and bloom the shrimp paste aroma immediately. Stir once. The finished sauce should be intensely pungent, sharp with lime, and fragrant with the characteristic Thanh Hóa shrimp paste note that is earthier and less fishy than southern mắm tôm varieties.`,
        },
        {
            title: `Dress while warm`,
            description: `This step must happen while the offal is still warm — not hot, but above room temperature. Cold offal absorbs the mắm tôm dressing poorly and tastes flat. Arrange blanched offal pieces on a wide plate. Pour half the mắm tôm dressing over the top and toss gently — fish offal is fragile, particularly the roe sacs which will break if handled roughly. Add roughly chopped dill, spring onion slices, and toss once more. Taste and add more dressing if needed. The offal should be evenly coated but not swimming in sauce.`,
            tip: `The warm-dressing technique is the key to lòng cá mắm tôm at Sầm Sơn fisherman level. The warmth of the offal slightly activates the volatile compounds in the dill and the shrimp paste, releasing their aromatics into the immediate vicinity of the food rather than letting them evaporate into the air. This is why the dish smells stronger than it tastes — the aromatic concentration at nose level is higher than the actual seasoning level at tongue level.`,
        },
        {
            title: `Garnish and serve immediately`,
            description: `Transfer dressed offal to a serving plate. Scatter toasted sesame seeds, fried shallots, and sliced red chili over the top. Add a final small amount of dill on top without tossing — it should remain vivid green against the darker offal. Serve with remaining mắm tôm dressing alongside, rice crackers, and butter lettuce for wrapping. The dish must be eaten within 15 minutes of dressing — fish offal cools quickly and the dill loses its fragrance within 20 minutes of being cut.`,
            tip: `In Sầm Sơn, lòng cá mắm tôm is placed on the table before any other dish and eaten while the rest of the meal is being prepared — it is the opening course by necessity, not by convention, because it cannot wait. The fisherman's family eats it standing in the kitchen, directly from the preparation plate, with crackers torn by hand. The formal plating described here is the restaurant version; the kitchen version is faster and arguably better.`,
        },
        {
            title: `Eat with crackers and lettuce`,
            description: `Break a sesame rice cracker and use it to scoop offal pieces with dill and sesame. Alternatively, wrap in lettuce with a few leaves of dill and dip in additional mắm tôm. The roe sac, if present, is considered the prize — eat it whole in one bite, it will burst with a clean oceanic flavour entirely different from any other part of the fish. The milt is the second most prized element, with a creamy texture and a sweetness that surprises diners who expect fish offal to be harsh. Squeeze lime over the plate halfway through eating.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}