'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-mot-nang-phu-yen',
    title: 'Mực Một Nắng Phú Yên (Phú Yên One-Sun Dried Squid)',
    subtitle: 'Fresh squid salted and sun-dried for one full day until the surface firms and sweetens — grilled over charcoal until the exterior chars and caramelizes while the interior stays chewy and concentrated. The third member of the Phú Yên one-sun drying family alongside bò một nắng and cá thu một nắng.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 day + 15 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/muc-mot-nang-phu-yen.jpg',
    intro: `Mực một nắng Phú Yên is the one-sun dried squid of the central Vietnamese coast — the third preparation in the province's signature one-sun drying series that includes bò một nắng (one-sun beef) and cá thu một nắng (one-sun mackerel). The philosophy is the same across all three: take a high-quality fresh protein, salt it lightly, expose it to one full day of the specific Phú Yên coastal sun — strong, salt-laden, with the particular drying character of the sea wind that blows across the province from the east — and produce a half-dried product that has lost surface moisture while retaining internal moisture, developing a concentrated flavour and a slightly firm exterior that caramelizes dramatically when exposed to charcoal heat. Applied to squid, the one-sun drying produces a specific transformation that differs from both fresh squid and fully dried squid: the exterior becomes slightly papery and concentrated, the natural sugars in the squid flesh concentrate at the surface, and the interior retains its moisture and chewiness. When grilled over hardwood charcoal after the one-sun drying, these surface sugars caramelize rapidly and deeply — producing a char that is darker and more complex than what fresh squid achieves in the same grilling time, because the surface is drier and more ready to caramelize at the first contact with heat. The interior, still moist from the retained moisture, stays chewy and sweet. The specific flavour of mực một nắng Phú Yên — sweet from the concentrated natural squid sugars, charred from the caramelization, slightly smoky from the hardwood coals, and carrying the specific character of the Phú Yên sea wind in the drying — is one of the most specific and most unreproducible flavours in the province's cooking, in the same way that bò một nắng and cá thu một nắng produce results that cannot be approximated by simply cooking fresh versions of the same proteins.`,
    ingredientSections: [
        {
            title: 'Squid',
            items: [
                { amount: 600, unit: 'g', name: 'fresh whole squid (mực tươi), medium size', note: '12-15cm body length — cleaned, scored lightly on the body tube in a crosshatch pattern. The medium size dries most evenly in one sun day.' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt', note: 'the only seasoning — rubbed over every surface' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'small amount — accelerates the surface caramelization during drying and grilling' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil', note: 'brushed lightly over the salted squid — helps the salt penetrate and prevents the surface from drying too fast' },
            ],
        },
        {
            title: 'Charcoal fire',
            items: [
                { amount: 0.5, unit: 'kg', name: 'hardwood charcoal', note: 'built to medium-hot — the concentrated surface sugars of dried squid caramelize faster than fresh squid and need slightly less intense heat' },
            ],
        },
        {
            title: 'Muối lá é Phú Yên',
            items: [
                { amount: 20, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'bird\'s eye chilies' },
                { amount: 2, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch fresh lá é leaves' },
                { amount: 1, name: 'bunch rau răm' },
                { amount: 1, name: 'green mango', note: 'julienned — the sourness that balances the concentrated sweet dried squid' },
                { amount: 2, name: 'extra limes' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice', note: 'or sesame crackers exclusively — both work' },
            ],
        },
    ],
    steps: [
        {
            title: 'Salt and prepare the squid for drying',
            description: 'Clean each squid but leave the body tube whole — do not cut into rings. Score the body tube lightly in a crosshatch at 1cm intervals through the skin only, not into the flesh deeply. This light scoring allows the salt to penetrate the surface and the sun heat to reach slightly into the flesh during drying. Combine salt and sugar and rub firmly over every surface — the body tube exterior and interior, the tentacles, around the fin edges. Brush lightly with oil. Leave at room temperature for 30 minutes before placing in the sun.',
            tip: 'The light scoring for mực một nắng is shallower than the deep scoring used for mực xào sả ớt or gỏi mực — just through the outer skin rather than into the flesh. The purpose is surface area increase for salt penetration and light drying acceleration, not the dramatic curling that deep scoring produces in hot cooking.',
        },
        {
            title: 'Sun-dry for one full day',
            description: 'Place the salted squid on a bamboo rack or wire rack in direct sunlight. The Phú Yên coastal sun is strong — in summer, one full day (6-8 hours of direct sun) produces the correct one-sun character. In temperate climates: sun-dry for 8-10 hours, or oven-dry at 50-60°C with door slightly ajar for 4-5 hours. The correctly dried squid: the exterior feels firm and slightly tacky, the body tube no longer flexible but not rigid, the colour deepened from translucent to a slightly golden-white opacity. The interior should still feel slightly moist when pressed firmly.',
            tip: 'The one-sun drying for mực produces a different result from the one-sun drying of beef or mackerel because squid loses moisture more rapidly than either. Check at 6 hours rather than the full day — in strong sun, squid can over-dry in a single day and become too rigid for the subsequent grilling to produce the correct interior texture. The squid is ready when firm but still slightly yielding under firm pressure.',
        },
        {
            title: 'Build the charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over. For mực một nắng, the fire should be medium rather than medium-hot — the concentrated surface sugars of the dried squid caramelize significantly faster than the sugars in fresh squid, and too hot a fire produces charring before the interior has warmed through. Hold your hand 15cm above the coals: 5-6 seconds comfortable is the correct temperature.',
            tip: 'The temperature calibration for dried squid versus fresh squid on the charcoal is the same logic as the calibration difference between gà ri nướng mọi (bantam, medium fire) and gà nướng mọi (standard chicken, medium-hot fire). The concentrated surface of the dried protein caramelizes faster and needs a slightly cooler fire to allow the interior to warm simultaneously.',
        },
        {
            title: 'Grill the one-sun squid — 4-5 minutes per side',
            description: 'Place the dried whole squid directly on the grill grate. Grill without moving for 4-5 minutes — the dried surface will caramelize immediately and the body tube will begin to curl slightly as the heat penetrates. Flip carefully and grill the other side 3-4 minutes. The mực một nắng is done when: the exterior is deeply charred in patches with caramelized golden areas between, the body tube has curled slightly, and the flesh feels firm when pressed but yields slightly at the thickest point.',
            tip: 'The caramelization of dried squid on charcoal is darker and more dramatic than fresh squid in the same time because the surface sugars are more concentrated and more ready to caramelize. The char patches on mực một nắng are deeper than on mực nướng from fresh squid — this is correct and desirable, not a sign of burning.',
        },
        {
            title: 'Pound muối lá é and serve',
            description: 'Pound lá é leaves with salt, pepper, sugar, and chili until intensely green. Squeeze lime at the table. Slice the grilled one-sun squid diagonally into 2cm pieces — the cross-section reveals the slightly caramelized exterior and the moist, chewy interior. Arrange on a plate. Serve with muối lá é, sesame crackers, fresh lá é leaves, green mango julienne, and rau răm. The eating: a piece of mực một nắng on a sesame cracker with a raw lá é leaf and green mango, dipped in lime-squeezed muối lá é. The Phú Yên ritual applied to the third member of the one-sun family.',
            tip: 'Mực một nắng sliced diagonally rather than straight across produces a larger cross-sectional surface that shows more of the caramelized-exterior and moist-interior contrast. The diagonal cut is both more visually attractive and produces a more satisfying individual piece size for the sesame cracker assembly.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
