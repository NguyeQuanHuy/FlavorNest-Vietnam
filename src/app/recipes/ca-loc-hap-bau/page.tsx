'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-loc-hap-bau',
    title: `Steamed Snakehead Fish with Bottle Gourd`,
    subtitle: `Cá Lóc Hấp Bầu — Bến Tre's river snakehead steamed with young bottle gourd and coconut water, the simplest expression of Mekong Delta flavour.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cá lóc hấp bầu is the weekday family dish of Bến Tre — the preparation that appears on every household table along the Mekong Delta islands when there is fresh snakehead fish from the morning's nets and young bầu (bottle gourd, Lagenaria siceraria) growing along the garden fence. It is not a dish of technique or elaboration. It is a dish of timing and freshness: a whole snakehead fish and sliced young gourd placed together in a clay pot with coconut water, lemongrass, and ginger, covered and steamed until the fish is just cooked and the gourd has absorbed the cooking liquid and the fish's own juices.\n\nCá lóc (Channa striata — the striped snakehead) is the defining freshwater fish of the Mekong Delta — abundant, firm-fleshed, and sweet in a way that reflects its diet of small fish and aquatic insects in the clean channels between Bến Tre's coconut islands. The fish is used whole, with the head, because the cheek meat and the gelatinous flesh around the jaw are considered the most flavourful parts of the fish in Bến Tre households, and because the head's collagen dissolves into the cooking liquid during steaming, producing a broth that would be wasted if the fish were filleted.\n\nThe bottle gourd (bầu) is harvested young — when the skin is still pale green and tender, the flesh white and slightly sweet, with a moisture content that steams into softness in 10-12 minutes. Mature bầu is too dense and bland for this preparation; the young gourd's sweetness is what balances the fish's umami and the coconut water's natural sugar. Together, the three main ingredients — snakehead fish, young bottle gourd, coconut water — represent the Bến Tre triangle: river, garden, and coconut palm in a single pot.`,
    ingredientSections: [
        {
            title: `Main ingredients`,
            items: [
                { amount: 1, name: `whole fresh snakehead fish (ca loc)`, note: `500-700g — cleaned, scaled, scored 3 times on each side; substitute: whole sea bass or barramundi` },
                { amount: 400, unit: 'g', name: `young bottle gourd (bau non)`, note: `peeled and sliced 1.5cm thick rounds — skin must be pale and tender; substitute: zucchini if mature bau unavailable` },
                { amount: 300, unit: 'ml', name: `fresh coconut water (nuoc dua tuoi)`, note: `not canned — from a young coconut; the Bến Tre essential` },
            ],
        },
        {
            title: `Aromatics`,
            items: [
                { amount: 3, name: `lemongrass stalks, bruised and cut to fit pot` },
                { amount: 30, unit: 'g', name: `fresh ginger, sliced thick` },
                { amount: 3, name: `shallots, halved` },
                { amount: 2, name: `spring onions, white parts bruised, green parts reserved for garnish` },
            ],
        },
        {
            title: `Seasoning`,
            items: [
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
            ],
        },
        {
            title: `Garnish and dipping sauce`,
            items: [
                { amount: 2, name: `spring onion greens, sliced thin` },
                { amount: 2, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `heated until shimmering and drizzled over the fish at serving` },
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 1, name: `bunch rau ram` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the fish`,
            description: `Scale and gut the snakehead fish — ask the fishmonger to do this if possible. Rinse under cold running water inside and out. Make 3 diagonal cuts through the skin on each side of the fish, cutting to the bone — these score cuts allow heat and the steaming liquid to penetrate the thick flesh of the snakehead and ensure even cooking. Rub the fish inside and out with a small amount of salt, fish sauce, and ground pepper. Stuff the cavity with 2 bruised lemongrass pieces, a few slices of ginger, and the bruised spring onion whites. Rest 10 minutes at room temperature.`,
            tip: `Cá lóc has tougher skin than most freshwater fish and requires deeper scoring cuts than sea fish — cut firmly until you feel the knife reach the lateral bones. Shallow scoring on snakehead produces uneven cooking: the thick back muscle near the spine is still slightly raw when the thin belly flesh is already overcooked. The score cuts should penetrate 7-8mm into the flesh at the thickest point of the back.`,
        },
        {
            title: `Layer the clay pot`,
            description: `Use a wide clay pot or a heavy-bottomed lidded pot large enough to hold the fish flat. Place the remaining bruised lemongrass and ginger slices on the bottom of the pot as a bed — they prevent the fish from direct contact with the bottom and add aroma from below. Arrange bottle gourd slices in a single layer over the aromatics. Place the seasoned stuffed fish on top of the gourd. Pour fresh coconut water around the fish — it should come to about 1cm depth in the pot, not covering the fish. Season the coconut water with remaining fish sauce, sugar, and salt. Cover tightly.`,
            tip: `The gourd layer beneath the fish serves two functions: it elevates the fish above the liquid so the bottom of the fish steams rather than poaches, and the gourd absorbs the condensing steam and fish juices from above during cooking, becoming infused with snakehead flavour. Gourd placed on top of the fish would simply steam in the vapour without absorbing this flavour exchange. The layering order — aromatics → gourd → fish — is deliberate and produces different results from the reverse.`,
        },
        {
            title: `Steam on low heat — 20 to 25 minutes`,
            description: `Place the pot over medium-low heat. The coconut water will begin to simmer gently within 3-4 minutes — you will hear a quiet bubbling and see steam at the lid edge. Reduce to the lowest possible heat. Cook covered for 20-25 minutes depending on the size of the fish. Do not open the lid during cooking — each opening releases the accumulated steam and drops the temperature, extending the cooking time and producing uneven results. The fish is done when the flesh at the score cuts is completely white and pulls away from the bone cleanly when pressed with a chopstick.`,
        },
        {
            title: `Make the dipping sauce`,
            description: `Combine fish sauce, lime juice, sugar, minced garlic, and sliced chili. Stir until sugar dissolves. The sauce should be savoury-sweet with a sharp lime finish. In Bến Tre, nuoc cham for cá lóc hấp bầu is made slightly sweeter than standard to complement the natural sweetness of both the fish and the coconut water steaming liquid.`,
        },
        {
            title: `Finish with hot oil and garnish`,
            description: `When the fish is done, carefully remove the lid. Scatter sliced spring onion greens and fried shallots over the fish surface. Heat neutral oil in a small pan until just beginning to smoke. Pour immediately over the spring onion and shallots on the fish — it will sizzle and flash-cook the spring onion, releasing its aroma and slightly wilting the greens. This hot oil finish is the same mỡ hành technique used across southern Vietnamese cooking and is the final aromatic layer of the dish.`,
        },
        {
            title: `Serve directly from the pot`,
            description: `Bring the clay pot to the table. Serve directly from the pot — the cooking liquid at the bottom (now a coconut water and fish collagen broth) is spooned over rice as a sauce. Each person lifts portions of fish and gourd from the pot onto their rice bowl and dips in the nuoc cham. In Bến Tre households, the head of the fish is given to the eldest at the table — the cheek meat, extracted with a chopstick from just behind the eye, is the most prized bite. The cooking broth at the bottom of the pot, sweetened by the coconut water and enriched by the fish collagen, is drunk from small cups at the end of the meal.`,
            tip: `Cá lóc hấp bầu is eaten within 5 minutes of completion — the fish continues cooking from the residual heat of the clay pot and becomes dry if left. Clay pots retain heat very efficiently; at 10 minutes off the heat the liquid inside is still simmering. The eating should begin the moment the pot arrives at the table.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}