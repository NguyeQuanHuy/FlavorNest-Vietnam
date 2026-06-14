'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'de-tai-chanh-phu-yen',
    title: 'Dê Tái Chanh Phú Yên (Phú Yên Lime-Cured Goat with Lá É Salt)',
    subtitle: 'Thin-sliced young goat cured in fresh lime juice with lemongrass and galangal — served not with the fermented shrimp paste of northern versions but with muối lá é, the pounded litsea leaf salt of Phú Yên that transforms the lime-bright cured goat into something specific to the central coast.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/de-tai-chanh-phu-yen.jpg',
    intro: `Dê tái chanh Phú Yên is the central coast version of the lime-cured goat salad — related to tái dê from other central provinces but distinguished from every other version by the dipping condiment: muối lá é, the pounded salt of litsea cubeba leaves that is the province's signature flavor. Where Ninh Bình and Khánh Hòa versions of goat tái are eaten with mắm tôm (fermented shrimp paste thinned with lime), and where some southern versions use a simple fish sauce dipping sauce, Phú Yên's tái dê is served exclusively with muối lá é — the wild citrus-pepper-herbal salt that appears alongside every significant seafood and meat dish in the province. The difference is not subtle: mắm tôm provides pungency and umami depth; muối lá é provides a clean, aromatic brightness that is simultaneously more delicate and more specific. Against the mild, lime-cured goat, the muối lá é adds a dimension that the goat alone cannot produce and that no other dipping preparation replicates. Phú Yên's goats specifically — the local breed raised on the rocky hillsides of the coastal ranges and the limestone outcrops between Tuy Hòa and Sông Cầu — are leaner and slightly more mineral in flavor than the Ninh Bình goats that have been grazed on lush delta grass. This difference in the meat's character is why the clean, non-pungent muối lá é works where the assertive mắm tôm might overwhelm: the Phú Yên goat needs a condiment that illuminates rather than obscures. The curing in dê tái chanh Phú Yên also uses a specific addition not found in other provincial versions: fresh galangal (riềng) is added to the lime curing liquid alongside the standard lemongrass, and the combination of citrus acid, lemongrass oil, and galangal heat produces a cured goat that tastes more complex than any single aromatic alone would produce.`,
    ingredientSections: [
        {
            title: 'Goat',
            items: [
                { amount: 400, unit: 'g', name: 'young goat leg or loin (thịt dê non Phú Yên)', note: 'from a goat under 6 months — the local Phú Yên breed is leaner and slightly more mineral than northern goat. Must be very fresh — same day purchase.' },
            ],
        },
        {
            title: 'Phú Yên curing liquid',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fresh lime juice', note: 'about 3 limes — the primary curing acid' },
                { amount: 2, unit: 'tbsp', name: 'mắm nhĩ (Phú Yên first-press fish sauce)', note: 'the province\'s premium fish sauce — adds umami depth to the curing liquid that regular fish sauce cannot approach' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'lemongrass stalks', note: 'inner stalk, minced to paste — added to the curing liquid' },
                { amount: 20, unit: 'g', name: 'fresh galangal (riềng)', note: 'finely grated — the Phú Yên specific addition to the curing liquid. Adds a warm, piney heat that lime and lemongrass alone do not produce.' },
            ],
        },
        {
            title: 'Salad components',
            items: [
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'finely julienned' },
                { amount: 1, name: 'lemongrass stalk', note: 'inner stalk, paper-thin rings' },
                { amount: 3, name: 'shallots', note: 'thinly sliced, soaked in ice water 10 min, drained' },
                { amount: 2, name: 'fresh red chilies', note: 'thinly sliced' },
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
            ],
        },
        {
            title: 'Herbs — Phú Yên specific',
            items: [
                { amount: 1, name: 'large bunch Vietnamese coriander (rau răm)', note: 'the dominant herb — Phú Yên quantities' },
                { amount: 0.5, name: 'bunch perilla (tía tô)' },
                { amount: 0.5, name: 'bunch mint' },
                { amount: 1, name: 'bunch fresh lá é leaves, small', note: 'a few leaves torn raw into the salad — intensifies the lá é character of the dipping salt' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Muối lá é Phú Yên — the defining dipping salt',
            items: [
                { amount: 25, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)', note: 'the Phú Yên condiment that distinguishes this version from every other dê tái in Vietnam. Substitute: 8 kaffir lime leaves + 8 rau răm leaves pounded together.' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'freshly ground black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'bird\'s eye chili', note: 'optional — pounded with the leaves' },
                { amount: 3, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)', note: 'the Phú Yên crackers from Tuy An district — thinner and more sesame-heavy than other regions' },
                { amount: 1, name: 'bunch extra lá é leaves', note: 'for eating raw alongside' },
                { amount: 2, name: 'extra limes' },
                { amount: 1, name: 'cucumber', note: 'sliced into batons' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the curing liquid with galangal',
            description: 'Grate the fresh galangal on the finest available grater until it is almost a paste. Combine with lime juice, mắm nhĩ, sugar, and the lemongrass paste. Stir thoroughly — the galangal will not dissolve but will distribute through the liquid. Taste the curing liquid: it should be intensely lime-sharp with the lemongrass citrus note and the specific piney-warm character of the galangal clearly detectable. The mắm nhĩ should provide depth without being identifiable as fish sauce.',
            tip: 'Grating the galangal rather than slicing or julienning releases its volatile oils directly into the curing liquid, where they penetrate the goat during the curing period. Sliced galangal sits alongside the meat; grated galangal enters the meat. This is the difference between galangal as a flavoring and galangal as an active curing ingredient.',
        },
        {
            title: 'Slice and cure the goat — 10 minutes',
            description: 'Freeze the goat for 20 minutes. Slice paper-thin against the grain — 2mm maximum. Place in a glass or ceramic bowl. Pour the curing liquid over and toss to coat every slice. Set a timer for exactly 10 minutes — the Phú Yên version is cured slightly shorter than the standard tái dê because the mắm nhĩ accelerates the curing process. At 10 minutes, the surface of each slice should be clearly changed — slightly firmer, slightly paler — while the center remains pink.',
            tip: 'The mắm nhĩ in the curing liquid accelerates the protein denaturation compared to plain fish sauce — the higher concentration of free amino acids in first-press fish sauce interacts with the lime acid differently. The 10-minute cure for Phú Yên version versus 12 minutes for standard tái dê reflects this difference.',
        },
        {
            title: 'Pound the muối lá é',
            description: 'Pound the lá é leaves with coarse salt, black pepper, sugar, and the optional chili in a mortar for 2-3 minutes until the leaves are completely broken down and the salt has turned intensely green and fragrant — the specific citrus-pepper-wild character of litsea cubeba should be immediately clear. Transfer to individual small plates. The lime is squeezed at the table — this timing is critical, as the lime oil from the skin is the most volatile and fragrant element and dissipates within minutes.',
            tip: 'For dê tái chanh specifically, the muối lá é should be pounded slightly coarser than for seafood — the texture of the salt crystals provides a counterpoint to the smooth, lime-cured goat surface. Ultra-fine muối lá é disappears against the meat; slightly coarse muối lá é is felt and tasted distinctly.',
        },
        {
            title: 'Drain and add torn lá é leaves',
            description: 'Drain the cured goat, reserving 2 tablespoons of the galangal-lemongrass curing liquid. Tear 5-6 raw lá é leaves directly into the drained goat — these raw leaves add a fresh, sharp lá é note alongside the cured galangal-lime character of the meat. In a wide bowl, combine the goat with julienned ginger, lemongrass rings, soaked shallots, rau răm, perilla, mint, spring onion, and sliced chili. Add the reserved curing liquid as the primary dressing.',
            tip: 'Adding raw lá é leaves torn into the salad itself — not just serving them alongside — is the technique that makes dê tái chanh Phú Yên three-dimensionally lá é rather than simply served with lá é on the side. The raw leaf in the salad, the lá é in the dipping salt, and the lá é leaves eaten alongside each bite create a layered experience of the same leaf at different intensities.',
        },
        {
            title: 'Rest briefly and plate',
            description: 'Leave the assembled salad to rest for 3 minutes. Transfer to a serving plate. Top with crushed peanuts, crispy fried shallots, and toasted sesame seeds at the last moment. Arrange the sesame rice crackers, cucumber batons, and a small bundle of fresh lá é leaves alongside. The visual of the salad plate: pale cured goat, dark green rau răm, golden peanuts and shallots, the raw lá é leaves alongside.',
            tip: 'The fresh lá é leaves served separately alongside the salad — not in the salad — are for eating raw between bites of the cured goat. One bite of goat on a cracker, one leaf of raw lá é between. This alternation between the warm, spiced cured meat and the sharp raw leaf is the Phú Yên eating rhythm specific to this dish.',
        },
        {
            title: 'Serve and eat the Phú Yên way',
            description: 'Squeeze lime over the individual muối lá é plates at the table — immediately before eating, not before. The eating: pile the cured goat onto a sesame cracker, add a leaf of rau răm, fold loosely, dip the assembled cracker edge-first into the muối lá é, eat in one motion. Eat a raw lá é leaf raw between crackers. The cracker crunch, the lime-cured goat, the galangal warmth in the background, the wild litsea character from the salt and the fresh leaf simultaneously — this is the complete Phú Yên tái dê experience.',
            tip: 'The edge-dip technique — dipping only the edge of the loaded cracker into the muối lá é rather than dunking the entire assembled cracker — controls the amount of salt in each bite and prevents the cracker from softening. Coastal Phú Yên diners do this automatically. The salt should season the bite, not dominate it.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}