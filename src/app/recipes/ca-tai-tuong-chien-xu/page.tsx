'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-tai-tuong-chien-xu',
    title: `Cần Thơ Elephant Ear Fish`,
    subtitle: `Cá Tai Tượng Chiên Xù — Whole giant gourami deep-fried standing upright until the fins spread like elephant ears — Cần Thơ's most theatrical river fish dish.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cá tai tượng chiên xù is the showpiece dish of Cần Thơ's riverside restaurants — a whole giant gourami (cá tai tượng, Osphronemus goramy) deep-fried standing upright in a wok of hot oil so that the large pectoral and dorsal fins spread outward and upward as they fry, creating the dramatic shape that gives the dish its name: tai tượng means "elephant ear," and the finished fish, with its fins splayed wide and crispy, does indeed resemble the profile of an elephant's ear against the serving plate.\n\nOsphronemus goramy — the giant gourami — is a large, deep-bodied freshwater fish native to the Mekong Delta and surrounding Southeast Asian river systems. It can grow to 70cm and 10kg but is most commonly eaten at 600-900g, when the flesh is at its sweetest and most tender. The fish is prized for its white, firm flesh and the thick, gelatinous skin that crisps dramatically during deep-frying while the interior remains moist — the skin-to-flesh ratio in a cá tai tượng is higher than most river fish, producing more of the crispy-skin eating experience per serving.\n\nThe upright frying technique requires a specific approach: the fish is scored deeply, seasoned, then held vertically in extremely hot oil while the initial structure sets — after 2-3 minutes the fish holds its upright position independently and the fins have spread to their maximum extent. The frying continues at a slightly lower temperature for the remaining time, cooking the thick flesh through without burning the now-crispy fins. The theatrical arrival of the fish at the table — upright, fins spread, golden and crackling — is as much part of the dish as the eating.`,
    ingredientSections: [
        {
            title: `Fish`,
            items: [
                { amount: 1, name: `whole giant gourami (ca tai tuong, 700-900g)`, note: `scaled, gutted, head on — ask fishmonger to leave fins intact; substitute: whole sea bream or snapper of similar size` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `rice wine` },
            ],
        },
        {
            title: `Seasoning rub`,
            items: [
                { amount: 1, unit: 'tsp', name: `ground turmeric` },
                { amount: 1, unit: 'tsp', name: `garlic powder` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Coating`,
            items: [
                { amount: 80, unit: 'g', name: `rice flour (bot gao)`, note: `for dusting — creates the xù (crispy) surface` },
                { amount: 30, unit: 'g', name: `tapioca starch (bot nang)`, note: `mixed with rice flour — extra crunch` },
                { amount: 1, unit: 'L', name: `neutral oil`, note: `for deep frying — enough to submerge at least half the fish` },
            ],
        },
        {
            title: `Sweet and sour dipping sauce (nuoc cham chua ngot)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 3, unit: 'tbsp', name: `rice vinegar` },
                { amount: 3, unit: 'tbsp', name: `sugar` },
                { amount: 3, unit: 'tbsp', name: `warm water` },
                { amount: 1, unit: 'tbsp', name: `fresh pineapple juice` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 1, name: `small carrot, julienned` },
                { amount: 50, unit: 'g', name: `green papaya, julienned`, note: `the Mekong Delta dipping sauce addition` },
            ],
        },
        {
            title: `Table accompaniments`,
            items: [
                { amount: 20, name: `sheets rice paper (banh trang)`, note: `for wrapping` },
                { amount: 1, name: `head butter lettuce` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 1, name: `bunch ngo gai` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 100, unit: 'g', name: `green banana, sliced` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Score the fish for the upright fry`,
            description: `Scale and gut the fish, leaving fins completely intact — the fins are the visual centrepiece and must not be trimmed. Rub with salt, rest 5 minutes, rinse. Toss with rice wine, rest 5 more minutes, rinse and pat completely dry. Score each side with 5-6 deep diagonal cuts to the bone — the thick gourami flesh requires cuts that penetrate 10-12mm to allow heat to reach the interior before the exterior overcooks. Fan the score cuts slightly apart with your fingers — this helps them open during frying, producing the characteristic scale-fanned appearance of properly fried cá tai tượng.`,
            tip: `The score cuts in cá tai tượng must be significantly deeper than for most fish because the gourami's body is unusually thick and dense for a freshwater fish of its size. A 800g gourami has a body depth of 15-18cm — without deep scoring, the exterior would be crispy and the interior still raw at the correct frying temperature. Each score cut should reach the central spine. Fanning the cuts apart before coating helps them stay open during frying rather than closing up, producing a more dramatic visual result and more even cooking.`,
        },
        {
            title: `Season and coat`,
            description: `Combine turmeric, garlic powder, black pepper, salt, sugar, fish sauce, and oil into a paste. Rub over the entire fish — into the score cuts, inside the cavity, over the fin surfaces. Rest 15 minutes. Mix rice flour and tapioca starch. Dust the entire fish lightly and evenly with the flour mixture — pat gently to ensure it adheres in the score cuts and on the fin membranes. The fin membranes are very thin — they will crisp to a translucent, crackling texture during frying if coated evenly; left uncoated, they burn before the body is done.`,
        },
        {
            title: `Heat the oil — the upright fry setup`,
            description: `Use a wok or wide, deep pot. Pour oil to a depth of at least 12-15cm — the fish must be at least half-submerged when placed upright. Heat to 190°C — test with a bamboo chopstick: vigorous bubbles should form immediately around the tip. The high initial temperature is critical: 190°C sets the fish structure in the first 2-3 minutes, allowing it to hold the upright position independently. At lower temperatures, the fish falls sideways before setting.`,
            tip: `The wok is the correct vessel for cá tai tượng chiên xù because its sloped sides allow the fish to lean slightly while being supported — a straight-sided pot requires the fish to stand perfectly vertical, which is difficult to maintain. Place the fish in the wok at a 70-80 degree angle to the bottom — the sloped sides support it while the submerged portion fries. The fins should be above the oil level for the first few minutes, then the fish is tilted to fry the fin sides as well.`,
        },
        {
            title: `Fry upright — 12 to 15 minutes total`,
            description: `Lower the scored, coated fish into the hot oil tail-first, holding it upright with long tongs. Hold in position for 60-90 seconds until the submerged portion has set and the fish can support itself. Release and maintain the position by leaning the fish against the wok side. Fry at 190°C for 5 minutes — the fins will spread and begin to crisp. Reduce heat to 170°C. Continue frying, occasionally basting the unsubmerged upper portion with hot oil using a large spoon. Total frying time: 12-15 minutes until the entire fish is deep golden, the fins are fully crispy and spread, and the flesh at the deepest score cut is opaque white.`,
        },
        {
            title: `Make the sweet and sour dipping sauce`,
            description: `Combine fish sauce, rice vinegar, sugar, warm water, and pineapple juice. Stir until sugar dissolves. Add minced garlic and chili. Add julienned carrot and green papaya — they will soften slightly in the acidic sauce and provide crunch and freshness. The Mekong Delta sweet-sour dipping sauce is more vinegar-forward than the lime-based nuoc cham used elsewhere — the vinegar's clean acidity cuts through the rich deep-fried fish fat more effectively than lime in this specific application.`,
        },
        {
            title: `Present and eat at the table`,
            description: `Remove the fish from the oil with two spatulas supporting the body. Stand it upright on the serving plate — the fins should remain spread in their fried position, the body golden and crackling. Bring to the table upright. The arrival of the standing fish at the table is the theatrical moment — allow 10 seconds for the table to acknowledge it before carving. Using chopsticks, flake pieces of the crispy-skinned flesh from the body directly at the table. Wrap each piece in rice paper with lettuce, rau răm, mint, green banana, and cucumber. Dip in the sweet-sour sauce. The crispy skin, yielding flesh, and fresh herbs in rice paper with the vinegar-bright dipping sauce is the complete Cần Thơ experience.`,
            tip: `The fish is eaten from the outside in — the outer flesh closest to the crispy skin first, moving toward the spine as the meal progresses. The score cuts that fanned open during frying provide natural portioning lines — each cut section is a self-contained piece with crispy exterior and moist interior that peels cleanly from the spine. The head, offered to the eldest, contains the cheek meat — dense, gelatinous, and the most intensely flavoured part of the fish.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}