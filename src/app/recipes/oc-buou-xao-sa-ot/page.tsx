'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'oc-buou-xao-sa-ot',
    title: '?c Buou Xào S? ?t (Golden Apple Snails Stir-Fried with Lemongrass and Chili)',
    subtitle: 'Large freshwater golden apple snails from the rice paddies and canals of the Mekong Delta and central Vietnam stir-fried in a smoking wok with lemongrass, garlic, and fresh chili until fragrant — the nh?u dish that requires both a toothpick and technique, and rewards both generously.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/oc-buou-xao-sa-ot.jpg',
    intro: `?c buou xào s? ?t is the stir-fried golden apple snail — one of the most consumed freshwater mollusks in Vietnam and one of the most important nh?u dishes in the country's beer-food repertoire. ?c buou (Pomacea canaliculata, the golden apple snail) arrived in Vietnam in the 1980s as a potential aquaculture species and escaped into the rice paddies, where it became simultaneously an agricultural pest and a beloved street food ingredient — a reversal of fortunes unique in Vietnamese culinary history. The snail is large by freshwater mollusk standards, with a shell 4-6cm across, a sweet, firm, slightly chewy flesh, and enough volume in each snail to constitute a satisfying bite rather than the delicate single mouthful of smaller species. Xào s? ?t — stir-fried with lemongrass and chili — is the preparation that dominates the Vietnamese ?c buou menu because the combination of the lemongrass-chili heat with the sweet, slightly muddy character of freshwater snail produces an equilibrium that neither element achieves alone. The lemongrass's citrus-grass volatiles cut through the freshwater character of the snail; the chili provides the heat that the neutral snail flesh absorbs and carries through each bite; the garlic provides the savory foundation. The technique is fast — maximum wok heat, continuous motion, 5-6 minutes total from aromatics to plate — because ?c buou flesh that overcooks becomes rubbery and the lemongrass aromatics cook off quickly at wok temperatures. The eating is communal and slightly competitive, with diners using toothpicks to extract the snail meat from its shell in the way that only practice produces.`,
    ingredientSections: [
        {
            title: 'Snails',
            items: [
                { amount: 1.2, unit: 'kg', name: 'fresh ?c buou (golden apple snails)', note: 'alive — available at Vietnamese and Asian markets. Purge in salted water for 2-3 hours before cooking. Scrub shells under running water.' },
                { amount: 2, unit: 'tbsp', name: 'salt', note: 'for the purging water' },
                { amount: 1, unit: 'tbsp', name: 'rice vinegar', note: 'added to the purging water — helps purge more efficiently' },
            ],
        },
        {
            title: 'Stir-fry aromatics',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, finely minced to paste' },
                { amount: 6, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 4, name: 'bird\'s eye chilies', note: 'minced — ?c buou xào s? ?t should be genuinely spicy' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced — for color in the finished dish' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'minced' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 3, unit: 'tbsp', name: 'water', note: 'added to create steam and help the seasoning penetrate the shells' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces' },
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Dipping salt',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'coarse salt' },
                { amount: 1.5, unit: 'tsp', name: 'black pepper', note: 'coarsely ground' },
                { amount: 3, name: 'limes', note: 'squeezed at the table' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, name: 'fresh red chilies, extra sliced' },
                { amount: 8, name: 'toothpicks', note: 'one per diner plus spares — essential tool for ?c buou' },
                { amount: 1, name: 'bowl warm water with lime', note: 'finger bowl' },
            ],
        },
    ],
    steps: [
        {
            title: 'Purge the snails — 2-3 hours',
            description: 'Place live ?c buou in a large basin of water with salt and rice vinegar. Leave for 2-3 hours, changing the water once when it becomes murky. The snails will expel sediment and organic matter from their digestive tracts. After purging, drain and scrub each shell firmly under running water with a stiff brush — remove algae, mud, and debris from the shell surface. Tap each snail — a live snail will retract when disturbed. Discard any that do not retract and smell strongly.',
            tip: 'The rice vinegar in the purging water is more effective than salt alone for ?c buou — the mild acidity encourages the snails to extend further from their shells and expel content more completely. The 2-3 hour purging time for golden apple snails is longer than for marine snails because their freshwater habitat produces different types of organic matter that take longer to expel.',
        },
        {
            title: 'Break the shell tip — the extraction technique',
            description: 'Before cooking, use a heavy knife or the back of a cleaver to lightly tap off the very tip (apex) of each snail shell — just the pointed tip, not the whole top. This small opening allows the aromatic stir-fry sauce to enter the shell from above while the snail meat is being sucked from below. It also makes extraction with a toothpick much easier after cooking. Do this for every snail before heating the wok.',
            tip: 'Breaking the shell tip is the specific preparation technique that experienced ?c buou cooks always perform and that recipes rarely mention. Without it, the shell is sealed from above and the toothpick must work against the natural vacuum inside the shell. With the tip removed, a gentle suction from the opening combined with toothpick guidance extracts the snail cleanly.',
        },
        {
            title: 'Stir-fry the aromatics at maximum heat',
            description: 'Heat a wok over maximum heat until smoking. Add oil. Add lemongrass paste, garlic, shallots, ginger, and minced chili simultaneously. Fry for 60-90 seconds until deeply golden and the wok smells aggressively of lemongrass — this is the most aromatic moment of the preparation. The aromatics must be cooked to this degree before the snails go in; underdone aromatics produce a harsh result.',
            tip: 'The aromatics for ?c buou xào need more time in the oil than for most wok preparations — 90 full seconds at maximum heat — because the large, heavy snail shells will drop the wok temperature significantly when added. Well-cooked aromatics in hot oil maintain their fragrance through the temperature drop; under-cooked aromatics will taste raw when the snails have cooled the wok.',
        },
        {
            title: 'Add snails and toss vigorously',
            description: 'Add all the purged and prepared snails to the wok at once. The temperature will drop immediately — increase to maximum heat. Toss vigorously, using a wok spatula to lift and turn all the snails so every shell contacts the hot wok surface. Add fish sauce, oyster sauce, sugar, and pepper. Add the water around the edge of the wok — it creates a burst of steam that helps the seasoning penetrate the shells through the broken tip. Toss for 4-5 minutes total.',
            tip: 'The water added around the wok edge for ?c buou creates steam that carries the seasoning into the shells from above (through the broken tip) and from below (through the shell opening) simultaneously. This steam penetration is what produces seasoned snail meat rather than seasoning that stays on the shell exterior.',
        },
        {
            title: 'Cover briefly — 2 minutes',
            description: 'After 3 minutes of open tossing, cover the wok tightly for 2 minutes over high heat. The trapped steam cooks the snails completely through and drives the lemongrass-chili flavors deep into the shells. After 2 minutes, remove the lid — the wok should be fragrant with lemongrass and the snails should be fully cooked. Add spring onion, shredded kaffir lime leaves, and sesame oil. Toss once more.',
            tip: 'The 2-minute covered steam phase for ?c buou is the step that guarantees the snail meat is fully cooked without drying out from extended open wok time. Golden apple snails that are under-cooked have a slimy texture; correctly cooked snails are firm but yielding. The steam guarantees the correct result.',
        },
        {
            title: 'Plate and demonstrate the toothpick technique',
            description: 'Transfer to a serving plate. Make the dipping salt and squeeze lime over individual plates at the table. To eat: hold the shell opening to the lips, attempt to suck the snail out — it should come with moderate suction. If it does not come, insert a toothpick through the broken tip, hook the meat and gently guide it toward the opening while sucking simultaneously. The snail comes out in one spiral piece. Dip in the mu?i tiêu chanh. Eat with rau ram between bites.',
            tip: 'The combined suction-and-toothpick technique is the skill that separates experienced ?c buou eaters from those who abandon the shells in frustration. The toothpick does not pull the snail out — it guides it. The suction does not extract the snail alone — it creates the pressure differential. Together, they work. Separately, they do not.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
