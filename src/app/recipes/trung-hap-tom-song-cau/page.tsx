'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trung-hap-tom-song-cau',
    title: 'Trứng Hấp Tôm Sông Cầu Phú Yên (Phú Yên Steamed Egg Custard with Sông Cầu Shrimp)',
    subtitle: 'Eggs beaten with mắm nhĩ, light stock, and microplane-grated ginger poured over fresh Sông Cầu shrimp in a ceramic bowl and steamed at gentle heat until the custard sets silky-smooth around the barely-cooked shrimp — the Phú Yên steamed egg where the province\'s finest condiment meets its most prized shrimp.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/trung-hap-tom-song-cau.jpg',
    intro: `Trứng hấp tôm Sông Cầu is the steamed egg custard that brings together the two most emblematic ingredients of Phú Yên\'s coastal table: the eggs that are steamed throughout Vietnamese cooking as a vehicle for other flavors, and the fresh shrimp from Sông Cầu bay — the protected coastal inlet at the northern end of the province that produces the tiger prawns and black tiger shrimp considered among the finest in central Vietnam. The preparation is a direct expression of the Phú Yên approach to high-quality seafood: apply the simplest technique that preserves the ingredient\'s natural character, use mắm nhĩ as the primary seasoning, and add nothing that competes with the main ingredient\'s flavor. The steamed egg custard format — eggs beaten with stock and steamed until just set — is the ideal vehicle for fresh shrimp because the neutral, silky egg provides the contrasting texture that makes each shrimp piece more clearly itself rather than part of a sauce or marinade. The shrimp, placed at the bottom of the bowl before the egg is poured over, cook simultaneously with the egg during steaming — they are just cooked when the custard is just set, so that the shrimp remain sweet and slightly springy rather than rubbery from overcooking. The mắm nhĩ beaten into the egg is the Phú Yên element that transforms this from a standard Vietnamese steamed egg into something specific to the province: the first-press fish sauce adds a depth to the custard that carries through every spoonful, and the microplane-grated ginger mixed with the egg provides the warm, clean aromatic note that pairs with shrimp more cleanly than garlic or lemongrass at this delicate custard scale. When the bowl arrives at the table — the pale gold surface smooth and unbroken, the pink shrimp visible through the translucent custard — it is one of the most visually refined preparations in the Phú Yên recipe collection.`,
    ingredientSections: [
        {
            title: 'Custard',
            items: [
                { amount: 4, name: 'large eggs' },
                { amount: 200, unit: 'ml', name: 'light chicken or shrimp stock', note: 'warm — the ratio of stock to egg produces the specific silky texture' },
                { amount: 1.5, unit: 'tbsp', name: 'mắm nhĩ (Phú Yên first-press fish sauce)', note: 'the primary seasoning beaten into the custard' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 15, unit: 'g', name: 'fresh ginger', note: 'microplane-grated to near-liquid — stirred into the egg mixture' },
            ],
        },
        {
            title: 'Sông Cầu shrimp',
            items: [
                { amount: 200, unit: 'g', name: 'fresh Sông Cầu shrimp or tiger prawns', note: 'peeled, deveined, tails left on. Medium size — 6-8 per bowl. Very fresh.' },
                { amount: 1, unit: 'tbsp', name: 'mắm nhĩ', note: 'for brief seasoning of the shrimp before placing in the bowl' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 3, name: 'spring onions', note: 'green parts, thinly sliced — scattered over after steaming' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'drizzled over the finished custard' },
                { amount: 1, unit: 'tsp', name: 'shallot-infused oil', note: 'drizzled alongside the sesame oil' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'freshly ground — finishing seasoning' },
            ],
        },
        {
            title: 'Mắm nhĩ ginger dipping sauce',
            items: [
                { amount: 2, unit: 'tbsp', name: 'mắm nhĩ' },
                { amount: 1.5, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 10, unit: 'g', name: 'fresh ginger', note: 'microplane-grated' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'warm water' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'fresh red chili, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Season the shrimp and arrange in the bowl',
            description: 'Season the peeled shrimp lightly with mắm nhĩ and white pepper. Arrange them in a single layer at the bottom of a heatproof ceramic bowl — tails pointing up and outward, bodies flat against the bowl bottom. The shrimp at the bottom will cook from the conducted heat of the bowl and steam while the egg custard sets from the steam above. This positioning ensures the shrimp are cooked through but not overcooked by the time the custard sets.',
            tip: 'Arranging the shrimp tails-up at the bottom of the bowl is both practical and aesthetic: the tails remain visible through the translucent set custard, providing the visual marker that shows the shrimp position when serving. Each spoonful can be aimed to include shrimp.',
        },
        {
            title: 'Make and strain the egg custard',
            description: 'Beat the eggs with warm stock, mắm nhĩ, sugar, white pepper, and microplane-grated ginger until fully combined. Strain through a fine-mesh sieve — this removes the chalazae (egg white strands) that would produce an uneven texture in the custard and any undissolved ginger fiber. The strained custard should be completely smooth and uniform. Skim any foam from the surface.',
            tip: 'Straining the custard is the technique that produces the perfectly smooth, unblemished surface of a correctly steamed egg. Unstraned custard contains protein strands that produce bubbles and surface irregularities during steaming. The straining adds 2 minutes but the visual result — the glassy, flawless surface — is worth it every time.',
        },
        {
            title: 'Pour the custard over the shrimp',
            description: 'Pour the strained custard slowly over the arranged shrimp — pour along the bowl edge rather than directly onto the shrimp to avoid displacing their arrangement. The custard should cover the shrimp completely. Skim any surface bubbles with a spoon. Cover the bowl with plastic wrap or foil — this prevents water condensation from dripping onto the surface during steaming.',
            tip: 'Covering the bowl with plastic wrap or foil before steaming is the technique used for the finest steamed egg custards — it prevents water droplets from condensing on the lid and dripping onto the custard surface, which creates crater marks. The cover must be loose enough that steam can circulate but tight enough to deflect drips.',
        },
        {
            title: 'Steam at low-medium heat — 12-15 minutes',
            description: 'Place the covered bowl in the steamer. Critically: use low-medium heat — the gentlest steam that will still cook the custard. High heat produces bubbles that rise through the custard and create a pitted, spongy texture rather than a smooth, silky one. Steam for 12-15 minutes. The custard is done when the center is just set — a gentle shake shows the center trembling slightly but not liquid. The edges should be fully set and pulling slightly from the bowl sides.',
            tip: 'The trembling-center test is the most reliable doneness indicator for steamed egg custard — more reliable than time alone because steamer temperatures vary. The correct endpoint: the center trembles in a single piece when the bowl is gently shaken, like a just-set jelly. Liquid center means more time; rigid center means overcooking. The window between them is about 2 minutes.',
        },
        {
            title: 'Finish and serve',
            description: 'Remove the cover. Drizzle sesame oil and shallot-infused oil over the surface. Scatter sliced spring onion greens and freshly ground white pepper. The surface should be pale gold, smooth, and unblemished — the pink shrimp visible through the translucent custard. Serve the bowl directly at the table with the mắm nhĩ ginger dipping sauce, steamed rice, and lime wedges. To eat: spoon custard and shrimp together over rice, drizzle the mắm nhĩ sauce over each spoonful.',
            tip: 'The mắm nhĩ ginger sauce drizzled over each spoonful of custard — rather than the custard being dipped into the sauce — is the correct serving method for this preparation. The sauce amount should be enough to season each spoonful without pooling in the bowl and diluting the custard.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
