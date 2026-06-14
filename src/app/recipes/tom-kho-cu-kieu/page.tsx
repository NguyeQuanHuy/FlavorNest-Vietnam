'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-kho-cu-kieu',
    title: 'Tôm Khô Củ Kiệu (Dried Shrimp with Pickled Shallots)',
    subtitle: 'Dried shrimp and pickled Chinese shallots (củ kiệu) cured together in a sweet-sour-savory brine until the shrimp soften and the kiệu turns translucent — the inseparable Tết pairing of southern Vietnam eaten with bánh tét and thịt kho tàu at every Tết table.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '5 days',
    rating: 4.9,
    baseServings: 8,
    heroImage: '/images/recipes/tom-kho-cu-kieu.jpg',
    intro: `Tôm khô củ kiệu is not a dish to be made on the day it is needed — it is a dish to be made five days before Tết and left to become itself in a jar on the kitchen counter. The two components — tôm khô (dried shrimp) and củ kiệu (pickled Chinese shallots, also called Japanese bunching onion bulbs) — are each separately well-loved in Vietnamese cooking, but their combination, brined together in a sweet-sour-savory liquid for days, produces something more interesting than either one alone. The dried shrimp rehydrate slowly in the brine, softening from their original hard, dried form to something pliable and intensely flavored, while releasing their concentrated shrimp umami into the liquid that surrounds them. The củ kiệu, already pickled in its own brine, takes on the shrimp character from the liquid while contributing its own specific allium sweetness and slight pungency. By day three or four, the two ingredients have become mutually flavored — the shrimp tasting of the pickled shallot and the shallot tasting of dried shrimp — in a way that weeks of separate aging could not produce. Tôm khô củ kiệu appears on the Tết table throughout southern Vietnam in a specific role: it is the condiment eaten between the rich dishes — alongside thịt kho tàu and bánh tét and the other heavy Tết foods — whose acidity and brightness cuts through the fat of the pork belly and the starch of the sticky rice. Without it the Tết table in the south feels incomplete. Vietnamese families who have migrated abroad recreate it from the memory of its specific flavor combination and consider it, alongside chả lụa and bánh tét, one of the three Tết foods that cannot be replaced.`,
    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 200, unit: 'g', name: 'dried shrimp (tôm khô)', note: 'medium quality — not the cheapest (too salty, poor flavor) and not the premium (too expensive to brine). Orange-pink, with a concentrated shrimp fragrance. Available at all Vietnamese and Asian grocery stores.' },
                { amount: 500, unit: 'g', name: 'củ kiệu (Chinese shallots / Allium chinense)', note: 'fresh bulbs, white-cream colored, each 2-3cm diameter. Available at Vietnamese markets in the weeks before Tết and increasingly year-round at specialty stores. If using pre-pickled củ kiệu from a jar: drain completely and reduce the brine sugar by half.' },
            ],
        },
        {
            title: 'Củ kiệu pickling brine (made first)',
            items: [
                { amount: 500, unit: 'ml', name: 'rice vinegar' },
                { amount: 150, unit: 'g', name: 'sugar' },
                { amount: 1.5, unit: 'tsp', name: 'salt' },
                { amount: 200, unit: 'ml', name: 'water' },
            ],
        },
        {
            title: 'Combined brine (added after day 2)',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce', note: 'brings the savory element that makes tôm khô củ kiệu specifically Vietnamese rather than merely pickled' },
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'additional — the shrimp absorb sweetness' },
                { amount: 1, unit: 'tbsp', name: 'rice vinegar', note: 'additional acidity to compensate for the shrimp absorbing the original brine' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'fresh red chili', note: 'thinly sliced — placed on top before serving' },
                { amount: 1, name: 'sprig cilantro', note: 'for garnish' },
                { amount: 1, name: 'bánh tét or bánh chưng', note: 'the Tết rice cake — the essential pairing' },
                { amount: 1, unit: 'portion', name: 'thịt kho tàu', note: 'pork belly and egg kho — the other essential Tết pairing' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare and salt the củ kiệu — Day 1',
            description: 'Peel the fresh củ kiệu bulbs, removing the roots and the papery outer layers. Rinse thoroughly. Place in a large bowl and toss with 1 tablespoon of salt. Leave for 2-3 hours — the salt draws significant moisture from the bulbs, which shrinks them slightly and concentrates their flavor. Rinse well and squeeze gently. The kiệu should have reduced in volume by about 20% and feel firmer than before salting.',
            tip: 'The salting and rinsing step is what prevents watery, bland pickled củ kiệu. The drawn moisture contains the compounds responsible for the sharp, harsh pungency of raw shallots — removing it produces a milder, cleaner-tasting pickle. Never skip this step.',
        },
        {
            title: 'Make the pickling brine and pickle the củ kiệu — Days 1-2',
            description: 'Combine rice vinegar, sugar, salt, and water in a pot. Heat gently until the sugar and salt dissolve completely. Cool to room temperature. Pack the salted and rinsed củ kiệu into a clean glass jar. Pour the cooled brine over, ensuring all bulbs are submerged. Leave at room temperature for 2 days. The kiệu will turn from opaque white to translucent and the brine will take on a slight yellowish tint. Taste on day 2: the kiệu should be pleasantly sour with retained crunch.',
            tip: 'Room temperature pickling for the first 2 days is essential — refrigerating immediately slows the fermentation and flavor development that makes củ kiệu distinctive. The slight lactic fermentation that occurs at room temperature is part of what gives good củ kiệu its depth.',
        },
        {
            title: 'Prepare the dried shrimp — Day 2',
            description: `Rinse the dried shrimp briefly under cold water to remove surface salt. Taste one — the shrimp should be intensely savory and firm, with a concentrated marine sweetness. If very salty, rinse twice. Leave to air-dry on paper towels for 30 minutes after rinsing. The shrimp go into the jar on day 2, after the củ kiệu has had 2 days to begin developing its pickled character.',
            tip: 'Adding the shrimp on day 2 rather than day 1 is the technique that produces the correct balance — the kieu needs a head start in the brine before the shrimp's concentrated umami joins the liquid.Adding both on day 1 produces a shrimp- dominated flavor rather than the integrated balance the dish requires.',
        },
    {
        title: 'Combine shrimp and củ kiệu — Day 2',
        description: 'Add the dried shrimp to the jar with the partially pickled củ kiệu. Add the additional fish sauce, sugar, and rice vinegar to the existing brine. Stir gently to incorporate. The brine will immediately take on a deeper, more complex character from the shrimp. Ensure everything is submerged — the shrimp float initially and should be pushed below the brine level. Seal the jar and leave at room temperature for 1 more day, then refrigerate for 2-3 more days.',
        tip: 'Check the jar after 12 hours — the dried shrimp will have absorbed some of the brine and the level may have dropped. Top up with a small amount of rice vinegar diluted with water if needed to keep the shrimp submerged.`,
        },
        {
            title: 'Taste and adjust on Day 4-5',
            description: 'By day 4-5, the tôm khô củ kiệu is ready. The dried shrimp should be rehydrated, pliable, and intensely flavored with the combined brine and kiệu character. The củ kiệu should be fully translucent, pleasantly sour, and carrying the shrimp umami in its flesh. Taste and adjust: more fish sauce if it needs savory depth, a pinch of sugar if too sharp, a splash of vinegar if the sourness has mellowed too much. The balance should be sweet-sour-savory-umami simultaneously.',
            tip: 'The correct tôm khô củ kiệu on day 5: the shrimp flesh is pliable enough to compress between the fingers without crumbling. The kiệu is fully translucent with a gentle crunch. The brine smells of pickled shallot and concentrated shrimp together — neither dominating.',
        },
        {
            title: 'Serve at the Tết table',
            description: `Transfer to a serving dish and top with sliced fresh chili and cilantro. Tôm khô củ kiệu is eaten cold or at room temperature — never warmed. It is placed at the center of the Tết table alongside bánh tét, thịt kho tàu, and the other Tết dishes. Each diner takes a small amount — 3-4 củ kiệu bulbs and a few shrimp — to eat between mouthfuls of the richer dishes. It keeps refrigerated for 2 weeks after completion and improves slightly each day through the first week.',
        tip: 'Tôm khô củ kiệu at the Tết table is eaten in small quantities — it is a condiment and palate cleanser, not a main dish. A tablespoon per person per meal is the correct amount. Its role is to refresh the palate between bites of the rich, fatty Tết foods rather than to be a primary flavor experience.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}