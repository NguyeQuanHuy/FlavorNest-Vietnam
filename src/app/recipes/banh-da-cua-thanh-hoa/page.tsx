'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-da-cua-thanh-hoa',
    title: `Thanh Hóa Red Rice Cracker Crab Soup`,
    subtitle: `Bánh Đa Cua Thanh Hóa — Thick red rice crackers simmered in field crab broth with pork ribs, water spinach, and toasted sesame.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh đa cua is one of the most distinctive noodle dishes of northern and north-central Vietnam — a soup in which the "noodle" is not extruded or rolled but is instead a thick, wide rice cracker (bánh đa) that has been dried, toasted, and then reconstituted in hot broth, swelling into a chewy, slightly smoky sheet with a texture found nowhere else in Vietnamese cooking. The Thanh Hóa version uses red-tinged bánh đa — coloured with annatto or red rice during production — which distinguishes it visually from the pale Hải Phòng version that most food writers document when covering this dish.\n\nThe broth is built on cua đồng — field crab (Somanniathelphusa sinensis), the small, dark, mud-dwelling freshwater crab of the rice paddies and irrigation channels of the northern plains. Field crabs are pounded shell and all in a stone mortar, mixed with water, and the resulting milky liquid is strained and simmered until the crab proteins coagulate into floating orange-red masses on the surface — riêu cua, the crab roe-like protein clumps that are the defining element of the broth. This technique of extracting crab essence through pounding and simmering rather than cooking the whole crab is unique to northern Vietnamese cooking and produces a broth of extraordinary depth from an animal that weighs less than 30 grams.\n\nIn Thanh Hóa, pork ribs are added to the crab broth for additional body — this is a local addition not found in the Hải Phòng version. Mắm tôm, water spinach (rau muống), and fresh tomato complete the bowl. The red bánh đa cracker, once softened in the broth, has a faint toasted-smoky flavour from its production that no other noodle type carries.`,
    ingredientSections: [
        {
            title: `Red bánh đa crackers`,
            items: [
                { amount: 300, unit: 'g', name: `dried red banh da rice crackers (banh da do Thanh Hoa)`, note: `thick, wide, red-tinged — soak in cold water 20 min before use; substitute: dried wide rice noodles if unavailable` },
            ],
        },
        {
            title: `Field crab broth (nuoc cua dong)`,
            items: [
                { amount: 500, unit: 'g', name: `fresh field crabs (cua dong)`, note: `Somanniathelphusa sinensis — whole, live; substitute: 200g crab paste (mam cua) from Vietnamese grocer, thinned with 1L water` },
                { amount: 1.5, unit: 'L', name: `cold water`, note: `for pounding and extracting the crab liquid` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `added to crab liquid before simmering` },
            ],
        },
        {
            title: `Pork rib broth (Thanh Hoa addition)`,
            items: [
                { amount: 400, unit: 'g', name: `pork spare ribs (suon heo)`, note: `blanched and rinsed; simmered separately 45 min, broth combined with crab broth` },
                { amount: 1, unit: 'L', name: `water` },
                { amount: 1, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Aromatics and vegetables`,
            items: [
                { amount: 3, name: `medium tomatoes, cut into wedges` },
                { amount: 200, unit: 'g', name: `water spinach (rau muong)`, note: `cut into 5cm lengths, blanched 30 seconds` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, unit: 'tbsp', name: `neutral oil`, note: `for sauteing tomatoes and shallots` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
            ],
        },
        {
            title: `Garnish and condiments`,
            items: [
                { amount: 4, unit: 'tsp', name: `shrimp paste (mam tom dac)`, note: `1 tsp per bowl — the mandatory condiment` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 2, name: `spring onions, sliced thin` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `fresh chili, sliced` },
                { amount: 2, unit: 'tbsp', name: `toasted white sesame seeds (me rang)`, note: `the Thanh Hoa finish — scattered over each bowl` },
            ],
        },
    ],
    steps: [
        {
            title: `Soak the bánh đa crackers`,
            description: `Place dried red bánh đa crackers in a large bowl of cold water. Soak 20 minutes until pliable and flexible but not soft — they should bend without cracking. Do not use warm or hot water, which softens them too quickly and unevenly. After 20 minutes, drain and cut or tear into pieces 10-12 cm wide if the crackers are very large. They will continue softening in the hot broth during assembly. Under-soaked crackers are brittle and break unevenly in the bowl; over-soaked crackers dissolve into the broth.`,
            tip: `Red bánh đa from Thanh Hóa is thicker than the pale Hải Phòng version — it requires a longer soak (20 min vs 10 min) and maintains more structural integrity in the broth. The red colour comes from gấc fruit pigment or red rice used during production, not artificial colouring. If sourcing from Vietnamese grocers in Germany, look for the label "bánh đa đỏ" or "bánh đa Thanh Hóa" — Dong Xuan Center in Berlin occasionally stocks it; otherwise order online from Vietnamese food suppliers.`,
        },
        {
            title: `Pound and extract the field crab`,
            description: `Rinse live field crabs under cold water. Remove the top shell (carapace) from each crab and discard the grey gills but keep the orange roe if present. Working in batches, pound crabs — shell and all — in a stone mortar until completely broken down into a paste. Transfer to a bowl and add 1.5 L cold water. Mix vigorously with your hands, then strain through a fine mesh sieve, pressing the solids to extract as much liquid as possible. Discard the shell solids. The strained liquid will be milky-orange and smell intensely of raw crab. Add 1 tsp salt and stir.`,
            tip: `The pounding-and-straining method is the defining technique of northern Vietnamese crab cookery. It extracts the crab's proteins, fats, and flavour compounds into the water far more efficiently than boiling a whole crab — a field crab is too small to yield useful meat by conventional methods, but its flavour contribution through this technique is enormous. The milky crab liquid should be used immediately after extraction; it begins to separate and lose quality within 30 minutes.`,
        },
        {
            title: `Simmer the crab broth — make the riêu cua`,
            description: `Pour strained crab liquid into a clean pot. Heat over medium flame, stirring gently in one direction only as the liquid warms. As the temperature rises to around 70-80°C, the crab proteins will begin to coagulate and rise to the surface as orange-red floating masses — these are riêu cua, the protein clumps that are the most prized element of bánh đa cua. Stop stirring as soon as the masses begin to form — agitation breaks them up. Allow the riêu to set on the surface for 2-3 minutes, then gently skim them off with a ladle into a separate bowl. Reserve. The remaining liquid is the clear crab broth.`,
            tip: `The riêu cua formation is temperature-sensitive. Below 65°C the proteins do not coagulate; above 90°C the masses break up into the broth rather than floating cleanly. The correct temperature window is 70-80°C — just below a simmer, when the liquid is steaming but not yet bubbling. This is why stirring in one direction during heating is traditional: it creates a gentle vortex that encourages the proteins to cluster rather than dispersing. Stirring in multiple directions breaks the forming masses.`,
        },
        {
            title: `Build the combined broth`,
            description: `Blanch pork ribs in boiling water 5 minutes, drain and rinse. Simmer in 1 L fresh water for 45 minutes until tender. Combine pork rib broth with the clear crab broth in a large pot. Heat neutral oil in a small pan, saute minced shallots until golden, add tomato wedges and cook 3 minutes until softened and beginning to break down. Add to the combined broth. Season with fish sauce, sugar, and black pepper. Taste — the broth should be savoury, faintly sweet from the crab and tomato, with the distinctive earthy depth of field crab underneath. Return the reserved riêu cua masses to the broth gently.`,
        },
        {
            title: `Blanch the water spinach`,
            description: `Bring a separate pot of salted water to a boil. Add water spinach pieces and blanch exactly 30 seconds — the stems should be just tender and the leaves vivid green. Drain immediately and spread on a plate to stop cooking. Do not rinse with cold water; the slight residual heat continues cooking the spinach gently to the correct texture. Water spinach overcooked beyond 45 seconds turns khaki and loses its clean, slightly bitter flavour.`,
        },
        {
            title: `Assemble the bowl`,
            description: `Place soaked bánh đa pieces in the bottom of each bowl. Ladle hot combined broth over the crackers — they will soften and swell in the hot liquid over 60-90 seconds. Add blanched water spinach and a few riêu cua masses. Place a pork rib section alongside if desired. Scatter spring onion and fried shallots over the top. Place 1 tsp mắm tôm to one side of the bowl — not mixed in, to be stirred by each diner. Scatter toasted sesame seeds over the entire bowl as the final step. Serve with lime and fresh chili alongside.`,
            tip: `The toasted sesame over bánh đa cua is specific to the Thanh Hóa version and appears in no other regional preparation of this dish. It adds a nutty counterpoint to the earthy crab broth and the smoky bánh đa cracker. Scatter generously — a pinch is insufficient. The sesame should be visible across the entire surface of the bowl.`,
        },
        {
            title: `Eat immediately`,
            description: `Stir the mắm tôm partially into the broth — not completely. The bánh đa continues softening in the broth and should be eaten within 5 minutes of assembly; beyond that it dissolves into the liquid. The correct texture is chewy-soft with slight resistance, not mushy. The riêu cua masses are eaten whole — scoop directly with a spoon, they are the reward for the pounding technique. Squeeze lime into the bowl halfway through eating when the first brightness has faded.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}