'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ba-khia-muoi',
    title: `Salt-Cured Mekong Field Crab`,
    subtitle: `Ba Khía Muối — Cà Mau's three-striped field crab cured raw in salt brine, eaten with lime, garlic, and chili over broken rice.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '72 hrs',
    rating: 4.8,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Ba khía (Episesarma mederi) is a small, three-striped mangrove field crab that lives at the edge of the Cà Mau and Bạc Liêu coastline, climbing in and out of tidal mud and mangrove roots. It is not a seafood delicacy in the international sense — it is peasant food, the protein source of Mekong Delta farmers who could not afford anything else. That history is inseparable from the flavour.\n\nBa khía muối is the simplest possible preparation: live crabs packed in concentrated salt brine for 48 to 72 hours. No heat, no cooking. The salt denatures the proteins and cures the raw crab flesh into something firm, intensely savoury, and faintly sweet — the roe (if female) turns bright orange and becomes the most prized part of the bowl. It is eaten cold, cracked open at the table, dipped in a lime-garlic-chili sauce, and served over broken rice or plain steamed rice.\n\nEvery September during the ba khía season, Rạch Gốc in Cà Mau holds a festival where the crabs are caught, salted, and eaten within the same 72 hours. The brine ratio is memorised, not written down. This recipe documents the standard Cà Mau household method — coarse sea salt, no additives, no refrigeration during curing (traditional), though refrigerator curing is safer and equally effective.`,
    ingredientSections: [
        {
            title: `For the salt cure`,
            items: [
                { amount: 1, unit: 'kg', name: `live ba khía crabs`, note: `or substitute small mud crabs / mangrove crabs if unavailable — must be live at time of salting` },
                { amount: 300, unit: 'g', name: `coarse sea salt (muối hạt)`, note: `non-iodised — iodised salt discolours the roe and affects flavour` },
                { amount: 1, unit: 'L', name: `water`, note: `for brine — ratio 300g salt per litre is the Cà Mau standard` },
                { amount: 3, name: `kaffir lime leaves (lá chanh)`, note: `optional — some households add for fragrance` },
            ],
        },
        {
            title: `Dipping sauce (nước chấm ba khía)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `lime juice (nước cốt chanh)`, note: `fresh only — bottled lime juice flattens the sauce` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 4, name: `garlic cloves, minced to paste` },
                { amount: 4, name: `bird's eye chili (ớt hiểm), minced` },
                { amount: 1, unit: 'tsp', name: `fish sauce`, note: `small amount only — ba khía is already very salty` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 400, unit: 'g', name: `steamed broken rice or plain white rice` },
                { amount: 1, name: `bunch Vietnamese coriander (rau răm)`, note: `essential — cuts the richness of the roe` },
                { amount: 2, name: `limes, halved` },
                { amount: 1, name: `cucumber, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Select and prepare the crabs`,
            description: `Ba khía must be live when salted — this is not optional. Dead crabs will rot rather than cure, and the result is toxic, not edible. Select crabs that are active and heavy for their size (weight indicates roe in females, or full meat in males). Rinse live crabs under cold running water, scrubbing the shells with a brush to remove mud. Do not remove any parts. The crab is salted whole.`,
            tip: `Female ba khía with roe (con cái) are prized — the orange roe becomes the most intensely flavoured element after curing. Ask the fishmonger to identify females. They have a wider, rounded abdomen flap on the underside.`,
        },
        {
            title: `Make the brine`,
            description: `Dissolve 300 g coarse sea salt in 1 L water at room temperature. Stir until completely dissolved — this takes 3–4 minutes. Taste the brine: it should be aggressively salty, far beyond what is pleasant to drink. This concentration is correct and necessary. If using kaffir lime leaves, tear them and add to the brine now.`,
        },
        {
            title: `Pack and cure — 48 to 72 hours`,
            description: `Place live crabs in a clean glass jar or ceramic pot with a tight-fitting lid. Pour brine over crabs until fully submerged. Press down with a clean weight (a small plate, a zip-lock bag filled with water) to keep crabs below the brine surface. Close the lid tightly. Cure in the refrigerator for 48 hours minimum, 72 hours for deeper flavour. Do not open during curing.`,
            tip: `Traditional Cà Mau curing is done at room temperature (25–30°C) for 48 hours — the heat accelerates the cure. For safety outside Vietnam's climate, refrigerator curing at 4°C for 72 hours produces an identical result with zero food safety risk. Do not compromise on this.`,
        },
        {
            title: `Check the cure`,
            description: `After 48–72 hours, open the jar. The crabs should have changed colour — the shell from dark green-brown to a deeper, slightly reddish hue. The flesh visible through the shell should be firm and opaque, not translucent. The roe (if present) will be bright orange and visibly set. The brine will smell intensely savoury and fermented — this is correct. If anything smells of rot or ammonia, discard the batch.`,
        },
        {
            title: `Make the dipping sauce`,
            description: `Combine lime juice, sugar, minced garlic, and minced chili. Stir until sugar dissolves. Add fish sauce last, in tiny increments — taste after each addition. Ba khía is extremely salty; the dipping sauce should be sharp and aromatic, not salty. It should contrast the crab, not add to its salt load. Adjust lime and sugar until the balance is bright and cutting.`,
        },
        {
            title: `Serve and crack at the table`,
            description: `Remove crabs from brine and rinse briefly under cold water to remove excess surface salt. Do not soak — this dilutes the cure. Arrange on a plate whole. Provide crab crackers, small forks, or chopsticks. Each person cracks their own crab at the table — pull back the top shell first, exposing the roe and innards. Scoop roe with a small spoon, dip in the lime-garlic sauce, eat with rice. The claw meat is extracted last.`,
            tip: `The correct bite sequence at a Cà Mau table: roe first (eaten neat, or barely touched to the sauce), then body meat with sauce and a leaf of rau răm, then claws last with rice. The roe is the best part — do not dip it heavily or you lose the flavour.`,
        },
        {
            title: `Storage after curing`,
            description: `Cured ba khía keeps in the brine in the refrigerator for up to 2 weeks. The flavour continues to deepen after day 3. Many households make large batches at the start of ba khía season and eat from the jar over 10–14 days. Do not freeze — freezing collapses the texture of the cured flesh.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
