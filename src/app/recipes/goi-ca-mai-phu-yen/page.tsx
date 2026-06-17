'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-ca-mai-phu-yen',
    title: 'Gỏi Cá Mai Phú Yên (Phú Yên Silverfish Salad)',
    subtitle: 'Tiny silverfish from the Sông Cầu bay cured for minutes in lime juice and mắm nhĩ until they turn from translucent silver to opaque white — tossed with green mango, rau răm, roasted peanuts, and toasted sesame in the raw fish salad that Phú Yên fishermen eat immediately after the morning net comes in.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/goi-ca-mai-phu-yen.jpg',
    intro: `Gỏi cá mai is the raw silverfish salad of the Phú Yên coast — a preparation built around cá mai, the tiny translucent silver fish (likely Anchoviella or Stolephorus species) caught in vast quantities in the protected waters of Sông Cầu bay and the coastal lagoons between Tuy Hòa and Đại Lãnh. Cá mai are small — rarely longer than 5-6cm — nearly transparent when alive, and so delicate that they begin to deteriorate within hours of leaving the water. This fragility is the quality that makes gỏi cá mai what it is: the fish must be so fresh that it can be eaten raw, cured only by the lime juice and mắm nhĩ that the fishermen mix them with immediately after the morning catch. The curing takes 5-7 minutes — longer than for the larger shrimp tái preparations because the small fish need more time for the lime acid to penetrate the flesh — and produces a fish that has gone from transparent silver to opaque white throughout, with a texture that is simultaneously firm (from the protein denaturation) and delicate (from the small size). The salad components in gỏi cá mai are the classic Phú Yên raw seafood formula: green mango for sourness and crunch, rau răm in the generous Phú Yên quantity, roasted peanuts for fat and texture, toasted sesame for warmth, shallots soaked in ice water for mild allium bite. The mắm nhĩ in the curing and dressing makes this specifically Phú Yên — the first-press fish sauce adds a depth to the raw fish preparation that the fish alone does not possess. Gỏi cá mai is eaten at Sông Cầu harbor restaurants in the late morning, at the tables closest to where the boats come in, where the fish arrive in the bowl having been in the water less than two hours earlier.`,
    ingredientSections: [
        {
            title: 'Silverfish',
            items: [
                { amount: 300, unit: 'g', name: 'fresh cá mai (silverfish / small anchovies)', note: 'must be same-day fresh — near-transparent, silver-white, smelling only of clean sea. Available at Phú Yên and coastal Vietnamese markets. If unavailable: very fresh small sardines, whitebait, or small anchovies cleaned and filleted.' },
                { amount: 1, unit: 'tsp', name: 'salt', note: 'for the initial brief rinse' },
            ],
        },
        {
            title: 'Curing liquid',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fresh lime juice', note: 'from 3 limes — the primary curing acid' },
                { amount: 2, unit: 'tbsp', name: 'mắm nhĩ (Phú Yên first-press fish sauce)', note: 'the Phú Yên specific addition that adds depth to the cured fish' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Salad components',
            items: [
                { amount: 150, unit: 'g', name: 'green unripe mango (xoài xanh)', note: 'finely julienned — rock hard and assertively sour' },
                { amount: 3, name: 'shallots', note: 'thinly sliced, soaked in ice water 10 minutes, drained' },
                { amount: 2, name: 'fresh red chilies', note: 'thinly sliced' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
                { amount: 2, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
            ],
        },
        {
            title: 'Herbs — Phú Yên generous quantities',
            items: [
                { amount: 1, name: 'very large bunch Vietnamese coriander (rau răm)', note: 'leaves only — the defining herb' },
                { amount: 0.5, name: 'bunch mint' },
                { amount: 0.5, name: 'bunch perilla (tía tô)' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Final dressing',
            items: [
                { amount: 1, unit: 'tbsp', name: 'mắm nhĩ', note: 'additional — for the assembled salad' },
                { amount: 0.5, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'optional — for eating alongside' },
                { amount: 2, name: 'extra limes' },
                { amount: 1, name: 'extra fresh chili, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Freshness assessment — the most critical step',
            description: 'Examine the cá mai carefully before proceeding. They should: smell of clean sea and nothing else; be nearly transparent when held to light; have bright, clear eyes (if visible at this small size); feel firm when pressed. The flesh should feel slightly resistant, not soft or yielding. If any batch of fish smells of anything other than clean sea — even a faint ammonia note — do not proceed with a raw preparation. Cook them instead. Freshness is not a preference here; it is the requirement that makes the dish safe and delicious.',
            tip: 'Cá mai are more perishable than almost any other fish because of their tiny size and thin skin. The window between optimal raw eating quality and no longer suitable for raw preparation is very short — 2-3 hours at room temperature, 4-6 hours refrigerated. If the fish were not live or near-live when purchased, they should not be eaten raw.',
        },
        {
            title: 'Clean and prepare the silverfish',
            description: 'Rinse the cá mai very gently in cold salted water. Because they are so small and delicate, they need only rinsing — no scaling, no gutting for fish this size (the internal organs are minimal and become part of the cured fish). Drain carefully. Place in a glass or ceramic bowl — not metal, which reacts with the lime juice.',
            tip: 'Handle cá mai with extreme gentleness — their flesh is so delicate that rough handling breaks the fish apart before the curing begins. Use the gentlest possible motion when rinsing and a light touch when tossing during the curing period.',
        },
        {
            title: 'Cure in lime and mắm nhĩ — 5-7 minutes exactly',
            description: 'Combine lime juice, mắm nhĩ, and sugar. Pour over the cá mai and toss very gently to coat. Set a timer for 5 minutes. At 5 minutes, check one fish: hold it to the light — the flesh should have turned from transparent silver to completely opaque white throughout. At 7 minutes the cure is complete. The fish will have gone from translucent to white, from raw-smelling to bright-lime-sea fragrance, and the texture will have firmed to something between raw and cooked. Drain, reserving 2 tablespoons of the curing liquid.',
            tip: 'The visual transformation of cá mai during curing is one of the most dramatic in Vietnamese raw preparation: the fish go in nearly transparent and come out completely white in 5-7 minutes. Watching this transformation is watching the lime acid denature the fish proteins in real time. The color change is the doneness indicator.',
        },
        {
            title: 'Assemble immediately',
            description: 'Combine the cured cá mai with julienned green mango, soaked shallots, rau răm, mint, perilla, spring onion, and sliced chili. Add the final dressing: mắm nhĩ, lime juice, sugar, sesame oil, and the reserved curing liquid. Toss very gently — the small cured fish break apart if handled roughly. The salad should show individual fish, not a fish paste.',
            tip: 'The gentle tossing technique for gỏi cá mai is more critical than for gỏi with larger proteins. Each fish needs to remain intact in the finished salad for both texture and presentation. Use a folding motion rather than tossing, working from the bottom of the bowl upward.',
        },
        {
            title: 'Plate and serve within 5 minutes',
            description: 'Transfer to a serving plate. Top with crushed peanuts, toasted sesame, and crispy fried shallots at the last moment. Gỏi cá mai must be eaten within 5-8 minutes of assembly — the cured fish continues to firm from the lime acid and the salad quickly loses its fresh character. Serve with sesame crackers, extra rau răm, and lime. To eat: spoon onto a cracker, dip edge in the remaining dressing on the plate, eat in one bite.',
            tip: 'The speed of service for gỏi cá mai — prepare, assemble, serve, eat in one continuous motion — is part of the dish\'s identity. It is the food of fishermen eating immediately after the morning catch, not a dish that waits. At Sông Cầu restaurants, the fish arrive at the table within minutes of the boat docking. That immediacy is what the dish is.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
