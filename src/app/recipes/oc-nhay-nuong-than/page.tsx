'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'oc-nhay-nuong-than',
    title: 'Ốc Nhảy Nướng Than Phú Yên (Phú Yên Grilled Jumping Snails)',
    subtitle: 'The jumping snails of Phú Yên\'s rocky coast — named for the way they leap using their sharp operculum when disturbed — grilled directly on hardwood charcoal until the shells char and the flesh inside cooks in its own briny liquid, served with muối lá é and the sesame crackers that accompany every Phú Yên grilled seafood.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/oc-nhay-nuong-than.jpg',
    intro: `Ốc nhảy — jumping snails, Strombus canarium and related species — are the snail that is most identified with the rocky coastline of Phú Yên and Bình Định, the two central provinces where the combination of clean, oxygenated reef water, rocky substrate, and specific water temperature produces jumping snails of exceptional quality. The name comes from their defense mechanism: unlike most snails that rely on their shell for protection, the jumping snail uses its sharp, claw-shaped operculum as a lever, pushing it against the surface and vaulting the shell away from danger in a movement that is startlingly rapid for an animal that otherwise moves at snail pace. Market vendors handling large quantities of live jumping snails keep them in shallow trays where this jumping behavior is dramatically visible — and where keeping them contained is a continuous effort. The flavor of ốc nhảy is among the finest of any Vietnamese snail species: cleaner than the mud-dwelling freshwater snails, more complex than the estuarine periwinkles, with a specific sweetness that comes from the reef water they inhabit and a firm, slightly chewy texture that holds up to charcoal grilling without toughening. The nướng than preparation — direct charcoal grilling with nothing added — is the specific Phú Yên approach to ốc nhảy. The shells are placed directly on the glowing coals and the snail cooks in the small amount of seawater retained in the shell from its live state, which concentrates during the grilling into an intensely briny, slightly caramelized liquid that is the most flavorful element of the entire preparation. Muối lá é — appearing here in its ninth and most natural application — is the condiment that exists for exactly this kind of preparation: pure fire-cooked seafood that needs aromatic complexity without sweetness or pungency.`,
    ingredientSections: [
        {
            title: 'Jumping snails',
            items: [
                { amount: 1.2, unit: 'kg', name: 'live ốc nhảy (jumping snails / Strombus canarium)', note: 'alive and active — the jumping behavior is the proof of freshness. Available at Phú Yên and Bình Định coastal markets, and some Vietnamese specialty seafood suppliers. Substitute: any live Strombus species, or large whelks.' },
            ],
        },
        {
            title: 'Charcoal fire',
            items: [
                { amount: 0.5, unit: 'kg', name: 'hardwood charcoal', note: 'built to medium-hot — the same temperature as for other direct coal preparations in the Phú Yên series' },
            ],
        },
        {
            title: 'Muối lá é Phú Yên — ninth application',
            items: [
                { amount: 25, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'pounded with the leaves' },
                { amount: 3, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)', note: 'the Phú Yên accompaniment that appears with every grilled seafood in the province' },
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'for eating raw alongside' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 4, name: 'curved snail picks', note: 'for extracting the meat from the shell' },
                { amount: 1, name: 'bowl warm water with lime', note: 'finger bowl' },
            ],
        },
    ],
    steps: [
        {
            title: 'Handle and rinse the jumping snails',
            description: 'Handle ốc nhảy with care — their operculum is sharp enough to puncture skin when the snail jumps against your hand. Rinse under cold running water, scrubbing the exterior shells briefly. Do not purge in salt water — jumping snails from clean reef water need only rinsing. The seawater naturally retained inside each live shell is part of the preparation: it will concentrate during grilling into the intensely briny cooking liquid that is the most flavorful element of ốc nhảy nướng.',
            tip: 'The seawater inside the live jumping snail is the "sauce" for this dish — it is not added, it is retained. This is why ốc nhảy nướng uses no marinade, no seasoning, and no added liquid. The snail cooks in the concentrated seawater of its own shell. This is the Phú Yên mọi philosophy applied to shellfish: fire and the ingredient itself, nothing between them.',
        },
        {
            title: 'Build the charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over. For ốc nhảy specifically, the fire should be medium-hot — more intense than for ốc giác hấp but slightly less than for the most aggressive preparations. The shells of jumping snails are thinner than turban snails and conduct heat more rapidly. Hold your hand 15cm above the coals — 3-4 seconds before the heat is too intense is the correct temperature.',
            tip: 'Jumping snail shells crack and open when the fire is too hot, releasing the concentrated seawater cooking liquid onto the coals before the snail meat has fully cooked. The medium-hot fire produces enough heat to char the shell and cook the snail in 6-8 minutes without cracking the shell before it is done.',
        },
        {
            title: 'Grill shell-opening-up directly on coals',
            description: 'Place the jumping snails shell-opening-up directly on the glowing charcoal — the opposite orientation from turban snails. The opening faces up specifically to retain the seawater inside the shell during grilling. As the shell heats, the seawater inside will begin to bubble visibly at the shell opening — this is the signal the snail is cooking. Grill for 6-8 minutes, moving slightly if any individual shells are charring too aggressively.',
            tip: 'The bubbling seawater at the shell opening is the visual cooking indicator specific to ốc nhảy nướng. At 3-4 minutes: the bubbling begins. At 6-7 minutes: the bubbling slows as the liquid reduces and concentrates. At 8 minutes: the bubbling has almost stopped — the concentrated liquid has caramelized slightly and the snail is done. Pull immediately.',
        },
        {
            title: 'Pound the muối lá é',
            description: 'Pound lá é leaves with salt, pepper, sugar, and chili in a mortar for 2-3 minutes until completely broken down and the salt is intensely fragrant green. For ốc nhảy the muối lá é should be slightly saltier than for other preparations — the concentrated seawater cooking liquid inside the shell provides some seasoning, but the snail meat itself is neutral and needs assertive salt contact from the dipping preparation.',
            tip: 'This is the ninth application of muối lá é in the Phú Yên series — across seafood, meat, poultry, and now shellfish. The consistency of the condiment across all proteins is the province\'s most defining culinary characteristic. The same pounded salt that completes a flower crab or a goat salad completes a jumping snail.',
        },
        {
            title: 'Extract and eat — the Phú Yên coastal rhythm',
            description: 'Remove the snails from the coals. The shells are extremely hot — use tongs and allow 2 minutes to cool slightly. The operculum will have detached during cooking — remove it first with a pick. Inside, the small amount of concentrated seawater cooking liquid should be visible — a dark, intensely briny caramelized drop. Tilt the shell to let this liquid touch the lips before extracting the meat with the curved pick. Dip the extracted meat in the lime-squeezed muối lá é. Place on a sesame cracker with a raw lá é leaf. Eat in one bite.',
            tip: 'The concentrated cooking liquid inside the grilled shell — the few drops of caramelized seawater — should be tasted before the meat is extracted. It is the most intensely flavored element of the entire preparation: the sea reduced to its essence by fire. In Phú Yên, coastal diners tip each shell to their lips for this liquid before the pick goes in. This sequence is the correct way to eat ốc nhảy nướng.',
        },
        {
            title: 'The complete Phú Yên coastal experience',
            description: 'Ốc nhảy nướng than Phú Yên is eaten at rocky-shore restaurants on the coast between Tuy Hòa and Sông Cầu — open-sided structures built above the water line where the smell of the sea and the smell of the charcoal are indistinguishable, and where the jumping snails arrive at the table still smoking from the coals. The sesame crackers from Tuy An, the raw lá é leaves, the muối lá é, and the cold beer are the complete context. At home: the charcoal fire on a balcony or garden, the same condiments, the same sequence. The experience travels if the ingredients do.',
            tip: 'Ốc nhảy nướng eaten immediately from the coals — when the shells are still too hot to hold comfortably — is fundamentally different from ốc nhảy that has cooled on a plate. The concentrated cooking liquid inside the shell is at its most intensely flavored when the shell is still hot. The heat is part of the experience, not an obstacle to it.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
