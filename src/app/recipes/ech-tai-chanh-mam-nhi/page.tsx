'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ech-tai-chanh-mam-nhi',
    title: '?ch Tái Chanh M?m Nhi Phú Yên (Phú Yên Lime-Cured Frog with Premium Fish Sauce)',
    subtitle: 'Frog legs sliced thin and cured in fresh lime juice and m?m nhi until the flesh turns from translucent to opaque white — tossed with rau ram, ginger, lemongrass, and peanuts in the raw preparation that applies the tái philosophy to the most delicate protein in Phú Yên\'s cooking.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ech-tai-chanh-mam-nhi.jpg',
    intro: `?ch tái chanh m?m nhi is the Phú Yên lime-cured frog — a preparation that applies the tái (raw-cured) philosophy to ?ch, the paddy frog, using the same m?m nhi-and-lime curing approach that the province uses for dê tái chanh, g?i tôm Sông C?u, and g?i cá mai. The tái technique — curing raw protein in lime juice and fish sauce until the acid denatures the surface proteins without heat — is one of the most demanding preparations in Vietnamese cooking because it requires the highest quality ingredient (freshness cannot be compensated for by technique), the most precise timing (the window between correctly cured and over-cured is narrow), and the most honest assessment of the result (nothing masks the ingredient's character). Applied to frog, the tái technique produces something that surprises even experienced Vietnamese diners: the cured frog flesh is white, slightly firm, and carries a clean sweetness that is more delicate than any other tái preparation in the province's repertoire. The m?m nhi in the curing liquid is the Phú Yên specific choice — where other central Vietnamese provinces use standard fish sauce or even m?m tôm (fermented shrimp paste) for their tái preparations, Phú Yên uses its premium first-press fish sauce, which adds umami depth without the pungency that would overwhelm the delicate frog. The galangal added to the curing liquid — in small amount, finely grated — is the province's specific aromatic addition for frog preparations: just enough to provide the warm, slightly piney note that makes the difference between tái ?ch that tastes flat and tái ?ch that tastes complete.`,
    ingredientSections: [
        {
            title: 'Frog',
            items: [
                { amount: 350, unit: 'g', name: 'frog legs, boneless if possible', note: 'skinned, cleaned. Slice against the grain into 3-4mm pieces — thin enough to cure through completely in 8 minutes. Must be same-day fresh from a trusted source.' },
            ],
        },
        {
            title: 'Phú Yên curing liquid',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fresh lime juice', note: 'from 3 limes — squeezed immediately before using' },
                { amount: 2, unit: 'tbsp', name: 'm?m nhi (Phú Yên first-press fish sauce)', note: 'the condiment that makes this specifically Phú Yên rather than generic tái ?ch' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 15, unit: 'g', name: 'fresh galangal', note: 'microplane-grated to paste — small amount, specific to frog tái in Phú Yên' },
            ],
        },
        {
            title: 'Salad components',
            items: [
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'finely julienned' },
                { amount: 1, name: 'lemongrass stalk', note: 'inner stalk, paper-thin rings' },
                { amount: 3, name: 'shallots', note: 'thinly sliced, soaked in ice water 10 minutes, drained' },
                { amount: 2, name: 'fresh red chilies', note: 'thinly sliced' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 2, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
            ],
        },
        {
            title: 'Herbs — Phú Yên generous',
            items: [
                { amount: 1, name: 'large bunch Vietnamese coriander (rau ram)', note: 'the essential herb — generous Phú Yên quantity' },
                { amount: 0.5, name: 'bunch perilla (tía tô)' },
                { amount: 0.5, name: 'bunch mint' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Final dressing',
            items: [
                { amount: 1, unit: 'tbsp', name: 'm?m nhi', note: 'additional — for the assembled salad' },
                { amount: 0.5, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'for eating raw alongside — the Phú Yên aromatic finish' },
                { amount: 2, name: 'extra limes' },
                { amount: 1, name: 'extra fresh chili, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Freshness assessment — non-negotiable',
            description: 'Before anything else: smell the frog legs. They should smell of nothing except the very faint clean sweetness of fresh frog — no ammonia, no sourness, no strong animal smell. Touch them: the flesh should feel firm and slightly slippery, not soft or yielding. Fresh frog legs for tái preparation should be purchased live or killed the same morning. This is the preparation that most uncompromisingly requires freshness because the lime acid cures but does not make safe what was not safe before curing.',
            tip: 'The freshness standard for ?ch tái is higher than for dê tái or even g?i tôm s?ng because frog flesh deteriorates faster than most other proteins. The safest source is a live frog that is dispatched immediately before preparation. If purchasing pre-cleaned frog legs, they must have been cleaned the same morning and kept cold continuously since.',
        },
        {
            title: 'Slice and prepare the curing liquid',
            description: 'Slice the frog legs very thin — 3-4mm across the muscle fibers. Frog legs that are boned first slice more cleanly; bone-in legs can also be sliced through the bone with a sharp knife. Place in a glass or ceramic bowl. Make the curing liquid: combine lime juice, m?m nhi, sugar, and microplane-grated galangal. The galangal should be near-liquid — only the aromatic oils matter, not the fiber texture. Stir to combine.',
            tip: 'The microplane-grated galangal in the curing liquid is the most specific and most important element that distinguishes ?ch tái chanh m?m nhi Phú Yên from all other tái ?ch versions. The galangal oils distributed through the curing liquid penetrate the frog flesh during the 8-minute cure and provide the warm, piney note that makes the finished tái taste specifically of the central Vietnamese coast rather than of generic lime-cured protein.',
        },
        {
            title: 'Cure for exactly 8 minutes',
            description: 'Pour the curing liquid over the sliced frog legs. Toss very gently to coat every piece. Set a timer for exactly 8 minutes. At 6 minutes, check one piece: the exterior should be turning from translucent to opaque white. At 8 minutes, the cure should be complete — the flesh completely white throughout, slightly firmed, and smelling of lime, m?m nhi, and the galangal\'s specific warm character. Drain immediately, reserving 2 tablespoons of the curing liquid.',
            tip: 'The 8-minute cure for ?ch is slightly longer than for larger shrimp (5-7 minutes) and shorter than for goat (10-12 minutes) — reflecting the specific density and composition of frog flesh. Frog is leaner than shrimp but less dense than mammal meat, and the lime acid works through it at a specific rate that 8 minutes has been calibrated for.',
        },
        {
            title: 'Assemble with extreme gentleness',
            description: 'Combine the drained cured frog with julienned ginger, lemongrass rings, soaked shallots, rau ram, perilla, mint, spring onion, and sliced chili. Add the final dressing and the reserved curing liquid. Fold very gently — more gently than for dê tái, more gently than for g?i tôm. Frog flesh after curing is the most fragile tái protein in the Phú Yên series. It tears easily. A folding motion from the bottom of the bowl rather than tossing keeps each piece intact.',
            tip: 'The folding technique for ?ch tái is the most careful handling in all the tái preparations in this series. Frog flesh at the correct level of cure is simultaneously perfectly textured and extremely fragile. Rough tossing produces mashed frog tái. Gentle folding produces intact pieces that show the white cured flesh clearly — visually as important as texturally.',
        },
        {
            title: 'Add toppings and serve immediately',
            description: 'Transfer to a serving plate. Top with crushed peanuts, crispy fried shallots, and toasted sesame seeds at the last moment. Arrange sesame crackers, fresh lá é leaves, and lime wedges alongside. G?i ?ch tái must be eaten within 5 minutes — the lime continues curing the frog after assembly, and the peanuts begin to soften from the moisture within 8 minutes. Serve and eat in one continuous motion.',
            tip: 'Fresh lá é leaves eaten between bites of the cured frog is the specifically Phú Yên element that elevates this beyond generic tái ?ch. The wild citrus-pepper character of the raw leaf provides the aromatic complexity that the deliberately simple curing omits. One piece of cured frog on a cracker, one raw lá é leaf placed over it, one dip in the m?m nhi pooled in the plate, one bite.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
