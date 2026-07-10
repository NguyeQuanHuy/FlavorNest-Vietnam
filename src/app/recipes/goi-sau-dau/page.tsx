'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-sau-dau',
    title: `Chinaberry Leaf Salad`,
    subtitle: `Gỏi Sầu Đâu — An Giang's bitter Melia azedarach leaf salad with shrimp, pork, and a sweet-sour dressing that turns bitterness into pleasure.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Gỏi sầu đâu is one of the most unusual salads in Vietnamese cuisine — a dish built around the young leaves of the sầu đâu tree (Melia azedarach, the chinaberry or Persian lilac), a fast-growing tree that lines the roads and waterways of An Giang and the Cambodian border region and produces clusters of young leaves with a pronounced, clean bitterness that has no equivalent in mainstream Vietnamese cooking. The name sầu đâu comes from the Khmer word for this tree (sadao), reflecting the Khmer cultural origin of this preparation in the tri-cultural Mekong Delta borderland.\n\nThe young leaves of Melia azedarach are mildly bitter — not the harsh, medicinal bitterness of mature leaves (which are toxic in large quantities) but a clean, vegetable bitterness similar to radicchio or Belgian endive, with a faint floral note underneath. The timing of harvest is critical: leaves picked in the first 3-5 days of growth are pleasantly bitter; leaves older than 10 days become progressively more intense until they cross into unpleasant harshness. In An Giang markets, the young leaf clusters are sold in small bunches at this precise window.\n\nThe salad dresses these bitter leaves with poached shrimp, sliced boiled pork, fried shallots, roasted peanuts, and a dressing of fish sauce, lime juice, and palm sugar — the sweetness of the palm sugar and the acid of the lime do not mask the bitterness of the sầu đâu but instead transform it, turning what would be harsh on its own into a complex, layered flavour experience where each element is amplified by the others. This is An Giang's most philosophically interesting dish: a salad that requires bitterness to work.`,
    ingredientSections: [
        {
            title: `Sầu đâu leaves`,
            items: [
                { amount: 150, unit: 'g', name: `young sau dau leaves (Melia azedarach)`, note: `3-5 day growth only — young clusters with pale green leaves; substitute: 100g radicchio + 50g Belgian endive, torn into small pieces — approximates the bitter structure` },
            ],
        },
        {
            title: `Protein`,
            items: [
                { amount: 200, unit: 'g', name: `fresh medium shrimp (tom)`, note: `poached in salted water 2 min, peeled` },
                { amount: 150, unit: 'g', name: `pork shoulder (thit heo nac)`, note: `simmered whole 20 min, cooled and sliced thin` },
            ],
        },
        {
            title: `Palm sugar dressing (nuoc cham dua sau dau)`,
            items: [
                { amount: 2, unit: 'tbsp', name: `palm sugar (duong thot not)`, note: `dissolved in 1 tbsp warm water — the An Giang essential` },
                { amount: 2.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `rice vinegar` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, minced` },
                { amount: 1, unit: 'tsp', name: `neutral oil` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, unit: 'tbsp', name: `roasted peanuts, crushed coarsely` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `fresh red chili, sliced thin` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 10, name: `sheets sesame rice cracker (banh trang me)` },
                { amount: 4, name: `portions steamed white rice` },
            ],
        },
    ],
    steps: [
        {
            title: `Source and prepare the sầu đâu leaves`,
            description: `Young sầu đâu leaves grow in tight clusters at the tips of new branches — pale yellow-green, soft, and slightly translucent. They should be picked before the 5th day of growth, while the bitterness is still clean and pleasant. Older leaves (darker green, fully formed) are significantly more bitter and should be avoided. Wash gently in cold water and pat dry. Do not blanch — blanching removes the bitterness that is the entire point of the dish. If substituting with radicchio and Belgian endive: tear into small pieces similar in size to the sầu đâu leaf clusters. The bitterness level will be similar to 5-day sầu đâu.`,
            tip: `Melia azedarach (sầu đâu, chinaberry, Persian lilac) grows as an ornamental tree throughout southern Europe and is planted in parks and gardens in Germany — it is recognisable by its large compound leaves and clusters of pale purple flowers in spring. The young leaves of ornamental German chinaberry trees are edible at the same growth stage as the Vietnamese variety. If you have access to a chinaberry tree, harvest the new growth in spring when the leaves are just emerging. Confirm the identification before harvesting — Melia azedarach is distinctly identified by its compound leaves (multiple small leaflets), purple flowers, and the small yellow berries that follow.`,
        },
        {
            title: `Poach the shrimp and pork`,
            description: `Bring a small pot of lightly salted water to a boil. Add shrimp and cook exactly 2 minutes — until just pink through. Remove immediately and peel. In a separate pot, simmer whole pork shoulder in salted water for 20-25 minutes until just cooked through. Remove and cool completely before slicing — warm pork tears rather than slicing cleanly. Slice pork thin across the grain, 3mm pieces. Both proteins should be at room temperature when added to the salad — cold protein dulls the flavour exchange with the dressing.`,
        },
        {
            title: `Make the palm sugar dressing`,
            description: `Dissolve palm sugar in 1 tbsp warm water, stirring until smooth. Combine with fish sauce, lime juice, rice vinegar, minced garlic, minced chili, and neutral oil. Whisk briefly to emulsify the oil. Taste: the dressing should be sweet-leading from the palm sugar, then sour from lime and vinegar, then savoury from fish sauce. It should taste noticeably sweeter than a standard Vietnamese dressing — this extra sweetness is the counterbalance to the sầu đâu bitterness. The palm sugar's caramel-floral note is what makes this work; cane sugar produces a one-dimensional sweetness that does not have the same softening effect on bitter leaves.`,
            tip: `The sweet-bitter balance of gỏi sầu đâu is the most delicate calibration in this recipe. Too little sugar in the dressing and the bitterness of the leaves is harsh; too much and the salad becomes cloying and the bitterness loses its role. The correct balance is when the first bite is simultaneously bitter and sweet, with neither dominating — the two sensations arrive together and enhance each other rather than competing. In An Giang, experienced cooks taste a raw sầu đâu leaf before making the dressing and increase the palm sugar proportionally if the leaves are more bitter than usual.`,
        },
        {
            title: `Assemble the salad`,
            description: `Place sầu đâu leaves (or radicchio-endive substitute) in a wide bowl. Add sliced pork and poached shrimp. Pour dressing over and toss gently — use two spoons in a lifting motion rather than stirring, which bruises the tender bitter leaves. The leaves should be lightly coated but not wet. Add half the rau răm and toss once more. Transfer to a serving plate. The salad should look vibrant — the pale green bitter leaves, the pink shrimp, the white pork, and the green herbs forming a natural colour composition.`,
        },
        {
            title: `Garnish and serve`,
            description: `Scatter crushed peanuts, fried shallots, and remaining rau răm over the top. Add sliced red chili for colour. Serve immediately — sầu đâu leaves wilt within 10 minutes of dressing, after which the bitterness intensifies past the pleasant range as the cell walls break down and release more bitter compounds into the dressing. Serve with sesame rice crackers for scooping and white rice alongside. In An Giang, gỏi sầu đâu is served as the opening dish of a meal specifically because the bitterness stimulates appetite and prepares the palate for the richer dishes that follow.`,
            tip: `Gỏi sầu đâu is considered a cooling food (đồ ăn mát) in An Giang traditional medicine — eaten in summer specifically to reduce body heat, aid digestion, and support liver function. The bitter compounds in young Melia azedarach leaves (primarily limonoids) are well-documented as having hepatoprotective properties in pharmacological research. The folk medicine use in An Giang predates the pharmacological evidence by centuries. Whether one eats it for the flavour or for the health benefit, the result is the same: a salad of remarkable complexity that teaches bitterness can be beautiful.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}