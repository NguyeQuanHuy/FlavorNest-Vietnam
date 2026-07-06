'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-com-chien-gion',
    title: 'Cá Com Chiên Giòn Mu?i ?t (Crispy Fried Anchovies with Chili Salt)',
    subtitle: 'Fresh whole anchovies dried, coated in seasoned rice flour, and deep-fried at 185°C until every bone is crispy enough to eat — the entire fish consumed head, tail, and spine — then tossed in a salt-chili mixture with fried garlic. The Vietnamese fried anchovy where nothing is left on the plate.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-com-chien-gion.jpg',
    intro: `Cá com chiên giòn mu?i ?t is the crispy fried anchovy preparation of Vietnamese coastal cooking — a dish that applies the bone-crisping deep-fry technique (the same principle as cá trê chiên s? ?t and chim cút chiên giòn) to the smallest fish in the Vietnamese repertoire, producing a result where the entire anchovy — head, tail, spine, and all bones — becomes genuinely crunchy and edible, and where the combined effect of thirty anchovies eaten bones-and-all in one sitting provides a mineral, intensely savory experience that no other preparation achieves. The bone-eating quality of correctly fried whole anchovies is the preparation's defining pleasure: at 185°C for 3-4 minutes, the small bones of the anchovy (already thin and calcium-rich) dry and crisp completely, producing a crunch that is simultaneously the crunch of the rice flour coating, the crunch of the fried skin, and the crunch of the minerally-flavored bone beneath — three crunches occurring simultaneously in each bite. The salt-chili finish applied after frying follows the same fry-then-toss logic as cá trê chiên s? ?t: the fish is fried first for maximum crispiness, then tossed briefly in caramelized garlic and a mu?i ?t mixture that adheres to the oily fried surface without softening it. Cá com chiên giòn is typically eaten as a nh?u dish — a snack alongside cold beer — or as a side at family meals where its intense flavor and crispy texture provide the specific contrast to the plainer elements of a Vietnamese dinner spread. The kumquat (t?c) dipping option — squeezing a whole small kumquat over a handful of the fried anchovies and eating them together — is the specifically central Vietnamese serving tradition that provides the citrus brightness that balances the intense savory-salty character of the fried fish.`,
    ingredientSections: [
        {
            title: 'Anchovies',
            items: [
                { amount: 400, unit: 'g', name: 'fresh whole anchovies (cá com tuoi)', note: 'cleaned — guts removed, heads optionally kept (the head is edible when fried). Rinsed and completely dried.' },
                { amount: 600, unit: 'ml', name: 'neutral oil', note: 'for deep frying at 185°C' },
            ],
        },
        {
            title: 'Rice flour coating',
            items: [
                { amount: 80, unit: 'g', name: 'rice flour (b?t g?o)', note: 'produces the shatteringly crispy result' },
                { amount: 20, unit: 'g', name: 'cornstarch (b?t b?p)', note: 'extra crispiness' },
                { amount: 0.5, unit: 'tsp', name: 'baking powder' },
                { amount: 1, unit: 'tsp', name: 'coarse salt' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'golden color' },
            ],
        },
        {
            title: 'Salt-chili wok toss',
            items: [
                { amount: 5, name: 'garlic cloves', note: 'thinly sliced — fried until golden before the anchovies return' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for the wok toss' },
            ],
        },
        {
            title: 'Mu?i ?t finishing mixture',
            items: [
                { amount: 1, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'coarsely ground' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'five-spice powder', note: 'small amount — adds background warmth' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 8, name: 'kumquats (t?c)', note: 'halved — the traditional central Vietnamese accompaniment for fried anchovies. Squeeze directly over the fish.' },
                { amount: 2, name: 'limes, extra', note: 'if kumquats unavailable' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice', note: 'or eat without rice as pure nh?u' },
            ],
        },
    ],
    steps: [
        {
            title: 'Dry the anchovies completely',
            description: 'Rinse the cleaned anchovies under cold water. Spread on paper towels and press firmly to remove all surface moisture. Leave uncovered at room temperature for 10 minutes — the surface should be completely dry and the skin slightly tacky. Completely dry anchovies produce the specific shattering crispiness of cá com chiên giòn; wet anchovies produce dangerous oil splatter and soft, pale skin that never crisps properly.',
            tip: 'The complete drying of anchovies before coating and frying is more critical than for larger fish because the surface-area-to-mass ratio of a small anchovy means that even a small amount of surface moisture has a proportionally larger effect on frying temperature. A single wet anchovy in a batch can lower the oil temperature enough to soften the coating of the surrounding fish.',
        },
        {
            title: 'Coat in seasoned rice flour',
            description: 'Combine rice flour, cornstarch, baking powder, salt, white pepper, and turmeric in a shallow bowl. Working in batches, toss the dry anchovies in the flour mixture. Press the flour firmly onto each fish — particularly into the areas around the head and tail where the bones are thickest. Tap off excess. The coating should be thin and even — thick coating on small fish produces a heavy, bready result rather than the delicate, shattering crispiness of correctly coated anchovies.',
            tip: 'A thin, even coating on anchovies requires a lighter hand than coating larger fish — the small size of each anchovy means that a single extra layer of flour creates a disproportionately thick coating relative to the fish inside. Toss and tap rather than pressing heavily.',
        },
        {
            title: 'Deep-fry at 185°C — 3-4 minutes',
            description: 'Heat oil to 185°C. Fry the coated anchovies in small batches — about 100g per batch, approximately 15-20 fish. Do not crowd. Fry for 3-4 minutes without moving until deeply golden and the spine is visible as a slightly darker line through the golden coating — the indicator that the bone itself has crisped. Remove and drain on a rack. Test one anchovy: bite through the middle of the body. The spine should crack cleanly with audible crunch. If it bends rather than cracks, fry for 1 more minute.',
            tip: 'The spine visibility test — the central bone visible as a slightly darker line through the golden coating — is the visual indicator that the bone is beginning to crisp. At this point, 30 more seconds of frying completes the bone-crisping process. The test bite confirms what the visual indicates: a clean crack at the spine means complete bone-crisping; any flexibility means incomplete.',
        },
        {
            title: 'Toss in garlic-chili — 45 seconds maximum',
            description: 'Heat oil in a wok. Fry sliced garlic until golden. Add all chilies and fry 15 seconds. Add the fried anchovies. Scatter the mu?i ?t mixture over the fish while tossing — it adheres to the oily fried surface immediately. Toss for 30-45 seconds total. Remove from heat. The toss must be brief enough that the wok heat and the steam from the garlic do not soften the crispy coating.',
            tip: 'The 45-second maximum toss for fried anchovies is shorter than for larger fried fish because the smaller mass of each anchovy cools faster and softens faster from steam contact. The thin, delicate coating of correctly fried anchovies has less thermal mass than the thicker coating of cá trê chiên — it absorbs moisture and softens more quickly. Work fast.',
        },
        {
            title: 'Serve with kumquat — the central Vietnamese way',
            description: 'Transfer to a serving plate in a loose pile — not compacted, which traps steam and softens the coating. Scatter rau ram. Serve with halved kumquats alongside. The eating: pick up 4-5 anchovies at once, squeeze half a kumquat directly over them, eat in one motion — the entire fish, bones included, in two or three bites. The kumquat\'s specific tart-sweet flavor against the intensely salty, crunchy, garlicky anchovy is the combination that makes this preparation specifically central Vietnamese rather than generically fried fish.',
            tip: 'The kumquat rather than lime for cá com chiên giòn is the specifically central Vietnamese serving choice that most clearly marks the preparation\'s regional identity. Kumquat\'s higher sugar-to-acid ratio than lime and its specific bitter-sweet skin character produce a different interaction with the salty fried fish than lime\'s sharper, cleaner acidity. If kumquats are unavailable, use calamansi as the closest substitute — not lime, which changes the flavor pairing significantly.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
