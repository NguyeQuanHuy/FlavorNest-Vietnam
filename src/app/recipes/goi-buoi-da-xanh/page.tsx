'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-buoi-da-xanh',
    title: `Châu Thành Green-Skin Pomelo Salad`,
    subtitle: `Gỏi Bưởi Da Xanh — Bến Tre's premium pomelo salad with shrimp, pork, fried shallots, and a palm sugar dressing that transforms bitter pith into pleasure.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bưởi da xanh (green-skin pomelo, Citrus maxima) is Bến Tre's most celebrated agricultural product — a large pomelo variety grown in the Châu Thành and Chợ Lách districts whose skin remains deep green even when fully ripe, whose flesh is pale pink-gold and intensely sweet with minimal bitterness, and whose aroma is floral and complex in ways that the yellow-skinned pomelos of other provinces cannot match. The variety has been cultivated in Bến Tre for over a century, and the combination of the province's alluvial Mekong island soil, the brackish-fresh water mixing in the irrigation channels, and the specific microclimate of the coconut-shaded orchards produces a fruit that commands premium prices throughout Vietnam and is exported to Asian markets internationally.\n\nGỏi bưởi da xanh is the salad that showcases this pomelo at its most direct — the segments are separated and the membrane removed, leaving clean, juicy flesh that is tossed with poached shrimp, sliced boiled pork, Vietnamese coriander, mint, crushed roasted peanuts, fried shallots, and a palm sugar and fish sauce dressing that amplifies the fruit's natural sweetness without masking it. The preparation is deliberately minimal: the pomelo does not need elaboration, only the right companions.\n\nWhat makes gỏi bưởi da xanh technically interesting is the treatment of the pith. Standard pomelo preparation removes as much white pith as possible because it is bitter. Bến Tre cooks, working with bưởi da xanh specifically, leave a small amount of inner pith attached to each segment — not enough to be unpleasantly bitter, but enough to provide a textural and flavour contrast to the pure sweetness of the flesh. This deliberate retention of mild bitterness is the same philosophy as gỏi sầu đâu: bitterness as a flavour component, not a defect.`,
    ingredientSections: [
        {
            title: `The pomelo`,
            items: [
                { amount: 1, name: `large buoi da xanh pomelo (green-skin, fully ripe)`, note: `approximately 1.5-2kg — yielding about 400g of usable flesh; substitute: the best, sweetest pomelo available — Ruby Red grapefruit segments as emergency substitute` },
            ],
        },
        {
            title: `Protein`,
            items: [
                { amount: 200, unit: 'g', name: `fresh medium shrimp (tom)`, note: `poached in salted water 2 min, peeled and halved lengthwise` },
                { amount: 150, unit: 'g', name: `pork shoulder (thit heo nac)`, note: `simmered whole 20 min, cooled, sliced thin` },
            ],
        },
        {
            title: `Palm sugar dressing`,
            items: [
                { amount: 2, unit: 'tbsp', name: `palm sugar (duong thot not)`, note: `dissolved in 1 tbsp warm water` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1.5, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tsp', name: `rice vinegar` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, minced` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, unit: 'tbsp', name: `roasted peanuts, crushed coarsely` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)`, note: `leaves only` },
                { amount: 1, name: `bunch mint (hung lui)`, note: `leaves only` },
                { amount: 1, name: `fresh red chili, sliced thin` },
                { amount: 2, unit: 'tbsp', name: `toasted dried shrimp (tom kho rang)`, note: `scattered over top — the Bến Tre addition` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 10, name: `sheets sesame rice cracker (banh trang me)` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the bưởi da xanh`,
            description: `Cut off the top and bottom of the pomelo to expose the flesh. Score the green skin vertically in 6-8 sections from top to bottom — cut only through the skin and pith, not into the flesh. Peel each section of skin away with your fingers. The thick white pith beneath will remain partially attached to the flesh segments. Using a sharp knife, cut between the membrane walls of each segment to release the flesh — work over a bowl to catch the juice. For gỏi bưởi da xanh specifically: leave a thin layer of inner pith (2-3mm) attached to each segment rather than removing it completely. This retained pith provides mild bitterness and a slightly different texture from the pure sweet flesh.`,
            tip: `The pith retention technique is the most counterintuitive aspect of this recipe for non-Bến Tre cooks. The inner pith of bưởi da xanh is significantly less bitter than the pith of standard pomelo or grapefruit — the variety has been selectively cultivated for reduced pith bitterness over generations. With standard pomelo or grapefruit substitutes, remove all pith or the bitterness will be too aggressive for the dressing to balance. Only with bưởi da xanh (or a similarly sweet, low-bitterness pomelo) should any pith be retained.`,
        },
        {
            title: `Drain the pomelo flesh`,
            description: `Place pomelo segments in a colander and allow to drain for 10 minutes — pomelo releases significant juice that would dilute the dressing if not removed. Press gently with the back of a spoon to encourage drainage. The juice that drains out is excellent drunk as-is or added to the dressing in place of some of the lime juice. After draining, the segments should be moist but not wet. If they still seem very juicy, gently squeeze each segment with your fingers and discard the excess liquid.`,
            tip: `The draining step is what most home gỏi bưởi recipes skip and what produces a watery salad rather than a properly dressed one. Pomelo has a higher water content than most salad vegetables, and an un-drained pomelo segment releases 20-30% of its weight as liquid when dressed. This liquid dilutes the palm sugar and fish sauce dressing to the point where the salad tastes underseasoned even when the dressing is correctly calibrated.`,
        },
        {
            title: `Make the palm sugar dressing`,
            description: `Dissolve palm sugar in warm water. Combine with fish sauce, lime juice, rice vinegar, minced garlic, minced chili, and neutral oil. Whisk until the oil partially emulsifies. Taste: the dressing should be sweet-leading — the palm sugar's caramel note clearly present — then savoury from fish sauce, then bright from lime. It should be sweeter than a standard Vietnamese dressing because the pomelo flesh, despite being sweet, will dilute the dressing significantly when tossed. Make the dressing 10 minutes before using — the garlic and chili develop further flavour with brief resting.`,
        },
        {
            title: `Toast the dried shrimp`,
            description: `Place dried shrimp in a dry pan over medium heat. Stir constantly for 2-3 minutes until they turn slightly darker and smell of toasted seafood. Cool completely. The toasting concentrates the shrimp's umami and removes any residual fishiness — toasted dried shrimp scattered over gỏi bưởi da xanh adds a crunchy, intensely savoury counterpoint to the sweet pomelo that raw or rehydrated dried shrimp does not provide.`,
        },
        {
            title: `Assemble the salad`,
            description: `Place drained pomelo segments in a wide bowl. Add poached shrimp halves and sliced pork. Pour dressing over and toss gently using a lifting motion — pomelo segments break easily under aggressive tossing. Add half the rau răm and mint. Toss once more. Transfer to a wide serving plate — arrange the segments so the pink flesh is visible rather than piled randomly. Scatter crushed peanuts, fried shallots, and toasted dried shrimp over the top. Lay remaining herb leaves on the surface. Add red chili slices for colour.`,
        },
        {
            title: `Serve immediately`,
            description: `Gỏi bưởi da xanh must be eaten within 15 minutes of dressing — the pomelo continues releasing juice and the fried shallots and peanuts soften quickly. In Bến Tre, the salad is dressed and brought to the table immediately — there is no resting period. Serve with sesame rice crackers for scooping and lime wedges alongside. The eating sequence: scoop a segment of pomelo with shrimp and peanuts on a cracker, eat in one bite. The pomelo sweetness, shrimp brininess, peanut nuttiness, and rau răm peppery note arrive simultaneously.`,
            tip: `Gỏi bưởi da xanh is the dish Bến Tre people bring to prove the quality of their province's pomelo to visitors. A local will always say "ăn gỏi bưởi Bến Tre mới biết bưởi da xanh ngon như thế nào" — you only understand how good bưởi da xanh is when you eat it in this salad. The salad format exposes the pomelo's flavour more completely than eating the fruit plain because the dressing's contrast amplifies every quality of the fruit. This is the most concentrated expression of Bến Tre's most celebrated agricultural product.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}