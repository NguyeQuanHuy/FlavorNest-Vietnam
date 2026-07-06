'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-kho-cu-kieu',
    title: 'Tôm Khô C? Ki?u (Dried Shrimp with Pickled Shallots)',
    subtitle: 'Dried shrimp and pickled Chinese shallots (c? ki?u) cured together in a sweet-sour-savory brine until the shrimp soften and the ki?u turns translucent — the inseparable T?t pairing of southern Vietnam eaten with bánh tét and th?t kho tàu at every T?t table.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '5 days',
    rating: 4.9,
    baseServings: 8,
    heroImage: '/images/recipes/tom-kho-cu-kieu.jpg',
    intro: `Tôm khô c? ki?u is not a dish to be made on the day it is needed — it is a dish to be made five days before T?t and left to become itself in a jar on the kitchen counter. The two components — tôm khô (dried shrimp) and c? ki?u (pickled Chinese shallots, also called Japanese bunching onion bulbs) — are each separately well-loved in Vietnamese cooking, but their combination, brined together in a sweet-sour-savory liquid for days, produces something more interesting than either one alone. The dried shrimp rehydrate slowly in the brine, softening from their original hard, dried form to something pliable and intensely flavored, while releasing their concentrated shrimp umami into the liquid that surrounds them. The c? ki?u, already pickled in its own brine, takes on the shrimp character from the liquid while contributing its own specific allium sweetness and slight pungency. By day three or four, the two ingredients have become mutually flavored — the shrimp tasting of the pickled shallot and the shallot tasting of dried shrimp — in a way that weeks of separate aging could not produce. Tôm khô c? ki?u appears on the T?t table throughout southern Vietnam in a specific role: it is the condiment eaten between the rich dishes — alongside th?t kho tàu and bánh tét and the other heavy T?t foods — whose acidity and brightness cuts through the fat of the pork belly and the starch of the sticky rice. Without it the T?t table in the south feels incomplete. Vietnamese families who have migrated abroad recreate it from the memory of its specific flavor combination and consider it, alongside ch? l?a and bánh tét, one of the three T?t foods that cannot be replaced.`,
    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 200, unit: 'g', name: 'dried shrimp (tôm khô)', note: 'medium quality — not the cheapest (too salty, poor flavor) and not the premium (too expensive to brine). Orange-pink, with a concentrated shrimp fragrance. Available at all Vietnamese and Asian grocery stores.' },
                { amount: 500, unit: 'g', name: 'c? ki?u (Chinese shallots / Allium chinense)', note: 'fresh bulbs, white-cream colored, each 2-3cm diameter. Available at Vietnamese markets in the weeks before T?t and increasingly year-round at specialty stores. If using pre-pickled c? ki?u from a jar: drain completely and reduce the brine sugar by half.' },
            ],
        },
        {
            title: 'C? ki?u pickling brine (made first)',
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
                { amount: 3, unit: 'tbsp', name: 'fish sauce', note: 'brings the savory element that makes tôm khô c? ki?u specifically Vietnamese rather than merely pickled' },
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'additional — the shrimp absorb sweetness' },
                { amount: 1, unit: 'tbsp', name: 'rice vinegar', note: 'additional acidity to compensate for the shrimp absorbing the original brine' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'fresh red chili', note: 'thinly sliced — placed on top before serving' },
                { amount: 1, name: 'sprig cilantro', note: 'for garnish' },
                { amount: 1, name: 'bánh tét or bánh chung', note: 'the T?t rice cake — the essential pairing' },
                { amount: 1, unit: 'portion', name: 'th?t kho tàu', note: 'pork belly and egg kho — the other essential T?t pairing' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare and salt the c? ki?u — Day 1',
            description: 'Peel the fresh c? ki?u bulbs, removing the roots and the papery outer layers. Rinse thoroughly. Place in a large bowl and toss with 1 tablespoon of salt. Leave for 2-3 hours — the salt draws significant moisture from the bulbs, which shrinks them slightly and concentrates their flavor. Rinse well and squeeze gently. The ki?u should have reduced in volume by about 20% and feel firmer than before salting.',
            tip: 'The salting and rinsing step is what prevents watery, bland pickled c? ki?u. The drawn moisture contains the compounds responsible for the sharp, harsh pungency of raw shallots — removing it produces a milder, cleaner-tasting pickle. Never skip this step.',
        },
        {
            title: 'Make the pickling brine and pickle the c? ki?u — Days 1-2',
            description: 'Combine rice vinegar, sugar, salt, and water in a pot. Heat gently until the sugar and salt dissolve completely. Cool to room temperature. Pack the salted and rinsed c? ki?u into a clean glass jar. Pour the cooled brine over, ensuring all bulbs are submerged. Leave at room temperature for 2 days. The ki?u will turn from opaque white to translucent and the brine will take on a slight yellowish tint. Taste on day 2: the ki?u should be pleasantly sour with retained crunch.',
            tip: 'Room temperature pickling for the first 2 days is essential — refrigerating immediately slows the fermentation and flavor development that makes c? ki?u distinctive. The slight lactic fermentation that occurs at room temperature is part of what gives good c? ki?u its depth.',
        },
        {
            title: 'Prepare the dried shrimp — Day 2',
            description: `Rinse the dried shrimp briefly under cold water to remove surface salt. Taste one — the shrimp should be intensely savory and firm, with a concentrated marine sweetness. If very salty, rinse twice. Leave to air-dry on paper towels for 30 minutes after rinsing. The shrimp go into the jar on day 2, after the c? ki?u has had 2 days to begin developing its pickled character.',
            tip: 'Adding the shrimp on day 2 rather than day 1 is the technique that produces the correct balance — the kieu needs a head start in the brine before the shrimp's concentrated umami joins the liquid.Adding both on day 1 produces a shrimp- dominated flavor rather than the integrated balance the dish requires.',
        },
    {
        title: 'Combine shrimp and c? ki?u — Day 2',
        description: 'Add the dried shrimp to the jar with the partially pickled c? ki?u. Add the additional fish sauce, sugar, and rice vinegar to the existing brine. Stir gently to incorporate. The brine will immediately take on a deeper, more complex character from the shrimp. Ensure everything is submerged — the shrimp float initially and should be pushed below the brine level. Seal the jar and leave at room temperature for 1 more day, then refrigerate for 2-3 more days.',
        tip: 'Check the jar after 12 hours — the dried shrimp will have absorbed some of the brine and the level may have dropped. Top up with a small amount of rice vinegar diluted with water if needed to keep the shrimp submerged.`,
        },
        {
            title: 'Taste and adjust on Day 4-5',
            description: 'By day 4-5, the tôm khô c? ki?u is ready. The dried shrimp should be rehydrated, pliable, and intensely flavored with the combined brine and ki?u character. The c? ki?u should be fully translucent, pleasantly sour, and carrying the shrimp umami in its flesh. Taste and adjust: more fish sauce if it needs savory depth, a pinch of sugar if too sharp, a splash of vinegar if the sourness has mellowed too much. The balance should be sweet-sour-savory-umami simultaneously.',
            tip: 'The correct tôm khô c? ki?u on day 5: the shrimp flesh is pliable enough to compress between the fingers without crumbling. The ki?u is fully translucent with a gentle crunch. The brine smells of pickled shallot and concentrated shrimp together — neither dominating.',
        },
        {
            title: 'Serve at the T?t table',
            description: `Transfer to a serving dish and top with sliced fresh chili and cilantro. Tôm khô c? ki?u is eaten cold or at room temperature — never warmed. It is placed at the center of the T?t table alongside bánh tét, th?t kho tàu, and the other T?t dishes. Each diner takes a small amount — 3-4 c? ki?u bulbs and a few shrimp — to eat between mouthfuls of the richer dishes. It keeps refrigerated for 2 weeks after completion and improves slightly each day through the first week.',
        tip: 'Tôm khô c? ki?u at the T?t table is eaten in small quantities — it is a condiment and palate cleanser, not a main dish. A tablespoon per person per meal is the correct amount. Its role is to refresh the palate between bites of the rich, fatty T?t foods rather than to be a primary flavor experience.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
