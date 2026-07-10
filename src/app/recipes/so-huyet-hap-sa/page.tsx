'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'so-huyet-hap-sa',
    title: `Lemongrass-Steamed Blood Cockles`,
    subtitle: `Sò Huyết Hấp Sả — Fresh blood cockles steamed just open over lemongrass and ginger — Vietnam's most celebrated shellfish eaten the moment the shells crack.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Sò huyết hấp sả is the shellfish preparation that Vietnam's coastal seafood culture has elevated to ritual — a technique so minimal that it requires nothing beyond fresh blood cockles (sò huyết, Tegillarca granosa — the blood clam), lemongrass, ginger, and heat, yet produces an eating experience of extraordinary intensity when the cockles are genuinely fresh and correctly cooked to the exact moment the shells crack open.\n\nTegillarca granosa (blood clams) earn their name from their haemoglobin-rich blood — unlike most bivalves which have colourless hemolymph, blood clams use haemoglobin (the same oxygen-carrying protein as vertebrate blood) to transport oxygen, producing a bright red fluid visible when the shells are opened. This haemoglobin gives sò huyết a distinctly richer, more iron-forward flavour than other cockles or clams — slightly metallic in the best possible sense, deeply savoury, and with a sweetness that underlies the iron note and makes the combination uniquely compelling.\n\nThe steaming technique for sò huyết requires the most precise timing of any Vietnamese steamed preparation: the cockles must be removed from the heat the instant the shells begin to crack open — at this moment the flesh inside is just set, still slightly translucent at the thickest point, and has retained maximum moisture and flavour. An additional 60 seconds produces cockles that are fully cooked through but noticeably drier and tougher. Two additional minutes produces the rubbery, flavour-diminished cockle that gives blood clams an undeserved poor reputation among first-time eaters who encountered an overcooked version.`,
    ingredientSections: [
        {
            title: `Blood cockles`,
            items: [
                { amount: 800, unit: 'g', name: `fresh blood cockles (so huyet / Tegillarca granosa)`, note: `alive — shells tightly closed or closing when tapped; available at Vietnamese and Asian fishmongers in Germany; substitute: fresh New Zealand cockles or surf clams` },
                { amount: 2, unit: 'tbsp', name: `coarse salt`, note: `for purging` },
                { amount: 1, unit: 'L', name: `cold water`, note: `for purging` },
            ],
        },
        {
            title: `Steaming aromatics`,
            items: [
                { amount: 4, name: `lemongrass stalks, bruised and cut into 5cm sections` },
                { amount: 30, unit: 'g', name: `fresh ginger, sliced thick` },
                { amount: 3, name: `bird's eye chili, halved` },
                { amount: 150, unit: 'ml', name: `water or light beer`, note: `minimal liquid — just enough to generate steam` },
            ],
        },
        {
            title: `Nuoc cham gung (ginger fish sauce — the essential dip)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `warm water` },
                { amount: 30, unit: 'g', name: `fresh ginger, minced fine` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 3, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `Table accompaniments`,
            items: [
                { amount: 1, name: `bunch rau ram (Vietnamese coriander)`, note: `the mandatory sò huyết herb throughout Vietnam` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, name: `fresh red chili, sliced thin` },
            ],
        },
    ],
    steps: [
        {
            title: `Purge the cockles — mandatory`,
            description: `Dissolve coarse salt in cold water in a wide bowl. Add blood cockles and soak 20-30 minutes — they will expel sand and grit through their siphons. Lift out carefully (do not pour — sand resettles at the bottom). Scrub each cockle shell with a stiff brush under running cold water. Discard any cockles with cracked shells or that remain open when tapped sharply — these are dead and unsafe to eat. Blood cockles that are alive will close tightly when handled; their shells should feel heavy with water. Any that feel light or rattle when shaken are empty.`,
            tip: `The haemoglobin in blood cockles is why raw consumption concerns differ from other bivalves — Tegillarca granosa can harbour pathogens (particularly Vibrio species and Hepatitis A in poorly managed aquaculture environments) that survive the very brief cooking that produces the ideal texture. In Vietnam, sò huyết are eaten at various doneness levels including nearly raw at street stalls — a practice that carries measurable risk. The steaming technique in this recipe brings the internal temperature to 65-70°C at the just-cracked stage, which is sufficient to address the primary pathogen risk while maintaining the ideal texture.`,
        },
        {
            title: `Build the minimal steaming environment`,
            description: `Place bruised lemongrass sections, thick ginger slices, halved chilies, and 150ml water (or light beer) in the base of a wide wok or wide pot. The liquid should be minimal — just enough to generate steam, not enough to poach the cockles. The goal is steam, not simmering liquid. Bring to a vigorous boil. Place a steaming rack or layer of chopsticks across the wok above the liquid level. Arrange cockles in a single layer on the rack — hinged side down, opening side up, so the juices that release during cooking pool inside the shell rather than falling into the steaming liquid.`,
            tip: `Hinge-side down positioning is the detail that most cockle recipes omit. When blood cockles crack open, they release their flavorful haemoglobin-rich internal liquid — if the cockles are positioned with the opening facing down, this liquid falls into the steaming liquid and is lost. Hinge-side down keeps the opening facing up: the liquid stays inside each shell and is consumed with the meat, providing the concentrated blood clam flavour that makes sò huyết distinctive. The liquid inside each opened shell is as prized as the meat itself.`,
        },
        {
            title: `Steam — watch for the first crack`,
            description: `Cover tightly and steam over vigorous boiling on high heat. Watch the lid carefully from the moment steam first escapes — the cockles will begin opening within 2-4 minutes depending on their size. The moment the first shells begin to crack open (not fully open — just beginning to gap), remove the lid and immediately transfer ALL cockles to a serving plate using tongs. Do not wait for all shells to open — the shells that crack first will be overcooked if left in the steam while waiting for slower ones. The last shells will continue opening from residual heat after removal.`,
        },
        {
            title: `The first-crack rule`,
            description: `The first-crack removal timing is the single most important technique in sò huyết hấp sả and the detail that separates Vietnamese coastal cockle culture from casual shellfish cooking. At the first crack: internal temperature is approximately 65-70°C, flesh is just set with slight translucency at the thickest point, all moisture retained, haemoglobin-rich liquid still pooled inside each shell. At full open (30-60 seconds later): internal temperature 75-80°C, flesh fully cooked through, some liquid evaporated, texture noticeably firmer. At 2 minutes fully open: overcooked, rubbery, liquid mostly evaporated, metallic note without the sweetness counterpoint.`,
            tip: `Vietnamese sò huyết vendors at night markets and coastal restaurants practice a specific observation technique: they watch the steam escaping from the wok lid edge rather than lifting the lid repeatedly. When the steam pattern changes — becoming more vigorous and slightly different in character — it signals that the cockles are beginning to open and the lid should be lifted for the first check. Lifting the lid repeatedly during cooking drops the temperature inside the vessel and extends the time to first-crack, producing less evenly cooked results.`,
        },
        {
            title: `Make the ginger fish sauce`,
            description: `Combine fish sauce, lime juice, sugar, warm water, minced ginger, garlic, and chili. Stir until sugar dissolves. The sauce should be bright and sharp — the ginger heat arriving clearly and the lime acidity cutting through the cockle's iron-richness. Rest 5 minutes before serving. The ginger quantity is intentionally high for sò huyết specifically — the ginger's gingerol and shogaol compounds chemically interact with the iron compounds in the cockle's haemoglobin, suppressing the metallic note and allowing the sweetness beneath it to be perceived more clearly. This is the scientific basis for the traditional pairing of ginger with blood-rich seafood throughout Asian cooking.`,
        },
        {
            title: `Eat immediately — the 5-minute window`,
            description: `Sò huyết hấp sả must be eaten within 5 minutes of leaving the steamer — the residual heat continues cooking the flesh inside the shells, and beyond 5 minutes even correctly first-crack-removed cockles become noticeably firmer. At coastal Vietnamese night markets, sò huyết is eaten standing at the vendor's cart, the cockles pried open with a small fork or chopstick, the interior liquid sipped first, then the meat dipped in ginger nuoc cham and eaten with a leaf of rau răm. The rau răm's lemony-peppery character is the herb pairing most complementary to sò huyết's iron-sweet flavour — it was matched to blood cockles by generations of coastal Vietnamese cooks for this specific flavour reason.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}