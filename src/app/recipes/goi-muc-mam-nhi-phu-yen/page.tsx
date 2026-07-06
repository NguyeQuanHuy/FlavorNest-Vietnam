'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-muc-mam-nhi-phu-yen',
    title: 'Gỏi Mực Mắm Nhĩ Phú Yên (Phú Yên Squid Salad with Premium Fish Sauce)',
    subtitle: 'Squid blanched 30 seconds and tossed warm with the mắm nhĩ-lime dressing that Phú Yên uses for its finest seafood — the same sauce as for steamed crab, lobster, and oysters, now applied to a squid salad where the premium fish sauce elevates the dressing from seasoning to defining character.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/goi-muc-mam-nhi-phu-yen.jpg',
    intro: `Gỏi mực mắm nhĩ Phú Yên is the squid salad that applies the province's defining condiment — mắm nhĩ, the first-press premium fish sauce — to the gỏi format that is already documented in the general collection as gỏi mực tươi. The difference between the two preparations is the dressing: where gỏi mực tươi uses the standard Vietnamese gỏi dressing of lime juice, fish sauce, sugar, garlic, and chili, the Phú Yên version replaces the standard fish sauce with mắm nhĩ — and this single substitution produces a dressing that is measurably richer, more complex, and more specifically connected to the marine character of the squid than the standard version achieves. Mắm nhĩ's first-press character — its higher concentration of free amino acids, its natural sweetness from the first extraction of the fermentation, its specific depth that secondary-press fish sauce cannot replicate — produces a dressing in which the fish sauce element is not simply a seasoning agent but a flavor partner to the squid: the two marine elements reinforcing and amplifying each other rather than the fish sauce simply providing salt and umami to the protein. The additional Phú Yên-specific elements in this salad version are the fresh galangal finely grated into the dressing — a small amount, less than in tái chanh preparations, providing the warm piney note that the province associates with its finest raw and lightly cooked seafood — and the sesame crackers from Tuy An that serve as both accompaniment and partial wrapper in the eating, providing the toasty sesame dimension that makes every Phú Yên seafood presentation specifically of this place. The green mango julienne that appears in gỏi mực tươi is retained here — the sourness of Phú Yên's local green mangoes, picked from the hillside orchards of the inland districts, has a specific character that the province's cooks consider essential to any cold seafood salad, and the mắm nhĩ dressing does not diminish the need for this sour counterpoint but rather provides a richer background against which the mango sourness stands more clearly.`,
    ingredientSections: [
        {
            title: 'Squid',
            items: [
                { amount: 500, unit: 'g', name: 'fresh squid (mực tươi)', note: 'body tubes scored in crosshatch at 5mm, cut into 4cm pieces. Tentacles in clusters. Pat dry before blanching.' },
                { amount: 2, unit: 'L', name: 'water', note: 'vigorously boiling for the 30-second blanch' },
                { amount: 1, unit: 'tbsp', name: 'salt', note: 'added to the blanching water' },
            ],
        },
        {
            title: 'Phú Yên mắm nhĩ dressing',
            items: [
                { amount: 3, unit: 'tbsp', name: 'mắm nhĩ (Phú Yên first-press fish sauce)', note: 'the defining ingredient — not substitutable for this Phú Yên version' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice', note: 'generous — the sourness needs to balance the depth of mắm nhĩ' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 10, unit: 'g', name: 'fresh galangal', note: 'microplane-grated to near-liquid — small amount, the Phú Yên aromatic addition' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Salad components',
            items: [
                { amount: 150, unit: 'g', name: 'green unripe mango (xoài xanh)', note: 'finely julienned' },
                { amount: 3, name: 'shallots', note: 'thinly sliced, soaked in ice water 10 minutes, drained' },
                { amount: 2, name: 'fresh red chilies', note: 'thinly sliced' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
            ],
        },
        {
            title: 'Phú Yên herbs',
            items: [
                { amount: 1, name: 'large bunch Vietnamese coriander (rau răm)', note: 'generous — the primary herb' },
                { amount: 0.5, name: 'bunch mint' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'for eating raw alongside each cracker — the Phú Yên herb that connects this salad to the province' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 2, name: 'extra limes' },
                { amount: 1, name: 'fresh red chili, extra sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the mắm nhĩ dressing first',
            description: 'Combine mắm nhĩ, lime juice, sugar, microplane-grated galangal, minced garlic, minced chili, and sesame oil. Stir until sugar dissolves. Taste: the mắm nhĩ dressing should arrive in sequence — the fish sauce depth first, then the lime brightness, then the galangal warmth building slightly, then the chili heat. This sequence is specific to mắm nhĩ dressing — standard fish sauce dressing arrives as salt-lime simultaneously. The sequential arrival is the premium character of the first-press sauce.',
            tip: 'The microplane-grated galangal in the Phú Yên gỏi mực dressing is the province-specific addition that does not appear in gỏi mực tươi. Just 10g — barely a teaspoon of grated galangal paste — adds a warm, piney dimension to the dressing that is specifically Phú Yên and specifically compatible with the marine character of mắm nhĩ and squid together.',
        },
        {
            title: 'Blanch the squid — 30 seconds in rolling boil',
            description: 'Bring 2 litres of salted water to a vigorous rolling boil. Add all the squid at once. Set a timer for 30 seconds. Remove everything at 30 seconds with a slotted spoon. The squid should be white, slightly curled, and firm. Transfer immediately to a large bowl — do not rinse with cold water, which stops the cooking correctly but also removes the surface temperature needed for warm-dressing absorption.',
            tip: 'Not rinsing the blanched squid with cold water before dressing is the specific technique that allows warm-dressing absorption. The standard food-safe technique of cold-water shocking after blanching stops cooking and is correct for most preparations — but for gỏi, the warm-dressing technique requires the squid to retain its blanching heat for the 2-3 minutes of warm-tossing absorption.',
        },
        {
            title: 'Dress warm and let absorb',
            description: 'Pour half the mắm nhĩ dressing over the warm squid immediately. Toss gently. Leave for 3 minutes, tossing occasionally. The warm squid absorbs the mắm nhĩ through its crosshatch score lines — the galangal and fish sauce penetrating the flesh from multiple entry points simultaneously. After 3 minutes, the squid will have cooled slightly and the surface will have a visible sheen from the absorbed dressing.',
            tip: 'The mắm nhĩ dressing absorbed into warm squid produces a result where every bite tastes of the dressing from within the flesh rather than from the surface coating. This is the technique that makes gỏi mực mắm nhĩ Phú Yên different from the same salad dressed cold: the internal flavoring versus the external coating produces a fundamentally different eating experience from identical ingredients.',
        },
        {
            title: 'Assemble and finish',
            description: 'Add green mango julienne, soaked shallots, sliced red chili, rau răm, mint, and spring onion to the dressed squid. Add the remaining dressing. Toss gently. Taste and adjust. Transfer to a serving plate. Scatter crushed peanuts, crispy shallots, and sesame seeds at the last moment. Arrange a pile of fresh lá é leaves alongside the sesame crackers.',
            tip: 'Gỏi mực mắm nhĩ Phú Yên tastes of three distinct things in sequence when eaten on a sesame cracker with a raw lá é leaf: first the cracker\'s toasted sesame, then the squid-mắm nhĩ-galangal combination, then the lá é leaf\'s wild citrus-pepper character arriving last as the eating motion completes. This sequence is the three-note tasting experience that makes the Phú Yên cracker assembly specifically worth learning.',
        },
        {
            title: 'Serve and eat immediately',
            description: 'Serve within 10 minutes of assembly — the mắm nhĩ dressing is more assertive than standard fish sauce dressing and continues to season and slightly firm the squid as the salad sits. A gỏi mực mắm nhĩ eaten at 5 minutes is at peak; at 15 minutes it is still good; at 30 minutes the squid has absorbed so much of the assertive dressing that it tastes predominantly of mắm nhĩ rather than of squid-and-mắm-nhĩ together. Eat promptly.',
            tip: 'The comparison between gỏi mực tươi (standard fish sauce) and gỏi mực mắm nhĩ Phú Yên (premium first-press) made from the same squid batch is the clearest demonstration in the collection of what condiment quality does to a preparation. The squid is identical; the technique is identical; the dressing is the only variable. The mắm nhĩ version tastes more specifically of the sea, more complex, and more of Phú Yên.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
