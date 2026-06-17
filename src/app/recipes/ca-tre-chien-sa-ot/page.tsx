'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-tre-chien-sa-ot',
    title: 'Cá Trê Chiên Sả Ớt (Crispy Fried Catfish with Lemongrass and Chili)',
    subtitle: 'Whole catfish scored, turmeric-marinated, and deep-fried until the skin is shatteringly crispy and the bones are soft enough to eat — then tossed in a hot wok with lemongrass, garlic, and fresh chili that caramelizes onto the crispy surface in 60 seconds without softening it. The southern Vietnamese catfish preparation eaten with cold beer and no utensils.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-tre-chien-sa-ot.jpg',
    intro: `Cá trê chiên sả ớt is the southern Vietnamese catfish preparation — a dish built around cá trê (catfish, primarily Clarias batrachus, the walking catfish found in rice paddies, canals, and ponds throughout the Mekong Delta and southern Vietnam) that applies the two-phase technique of deep-frying followed by wok-tossing in aromatics that appears throughout southern Vietnamese nhậu cooking: the fish is fried until the skin is shatteringly crispy and the small bones of the head and fin have crisped to the point of edibility, then the crispy whole fish is tossed briefly in a hot wok with lemongrass, garlic, and chili that caramelizes onto the crispy surface without softening it — 60 seconds of wok contact, not more. Cá trê is the catfish that the Mekong Delta has always eaten — inexpensive, abundant, tolerant of shallow and oxygen-poor water (the walking catfish can survive out of water for hours using its modified gill chambers), and carrying a specific flavor that is denser and more intensely savory than tilapia or the lighter freshwater fish. The scoring of the whole fish before frying is the technique that allows the hot oil to penetrate to the bone and produce the specific crispiness that makes cá trê chiên a dish where the entire fish — bone, skin, flesh, and head — can be eaten. At the correct frying temperature and time, the small catfish ribs and the fin rays become genuinely crunchy rather than sharp or hard, producing the specific satisfaction of eating an entire fish with nothing left behind except the largest vertebrae of larger specimens. The lemongrass-chili toss applied to the already-crispy fish in the final minute is what transforms plain fried catfish into cá trê chiên sả ớt — the same aromatic philosophy as applied to chim cút chiên giòn and tôm rang muối: fry first for texture, toss second for flavor.`,
    ingredientSections: [
        {
            title: 'Catfish',
            items: [
                { amount: 4, name: 'whole catfish (cá trê), 200-300g each', note: 'cleaned, heads left on. Score each side 3-4 times diagonally to the bone — allows oil penetration and bones to crisp. Pat completely dry.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for pre-marinating' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder', note: 'eliminates muddy character and gives golden color' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 700, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
        {
            title: 'Lemongrass-chili wok toss',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, finely minced' },
                { amount: 6, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 4, name: 'shallots', note: 'thinly sliced' },
                { amount: 4, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced diagonally — for color' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for the wok step' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded' },
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, extra sliced' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 1, name: 'cucumber, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Score, marinate, and dry the catfish',
            description: 'Make 3-4 deep diagonal scores on each side of each catfish — cutting through the skin and into the flesh to the bone. These scores allow the frying oil to penetrate and crisp the bones and flesh from the interior as well as the exterior. Combine fish sauce, turmeric, black pepper, and sugar. Rub firmly into every surface, inside the scores, and inside the body cavity. Marinate 20 minutes. Then pat completely dry with paper towels — press firmly into the scores to remove all moisture. Surface moisture produces dangerous oil splatter and prevents the skin from crisping.',
            tip: 'The deep scoring for cá trê chiên is more aggressive than for most fried fish — the scores must reach the bone to allow the oil to crisp the interior bone structure. Shallow scores produce a crispy skin over a still-soft interior. The test: insert a chopstick into each score — it should touch the central bone easily.',
        },
        {
            title: 'Deep-fry at 180°C — 12-15 minutes',
            description: 'Heat oil to 180°C in a wok or deep pot. Fry the catfish two at a time — do not crowd. Fry for 12-15 minutes, turning once at the halfway point, until the skin is deeply golden and shattering when tapped with a spoon, and the fin rays and smaller rib bones have crisped to a golden, crunchy consistency. The catfish is done when the thickest part feels completely firm when pressed and the fin rays snap rather than bend.',
            tip: 'The 12-15 minute frying time for catfish is significantly longer than for most fried fish because the specific goal is crisping the interior bones as well as the exterior skin. At 8-10 minutes the skin is crispy; at 12-15 minutes the bones have begun to crisp. The fin rays are the indicator — they should snap cleanly when the frying is complete.',
        },
        {
            title: 'Make the lemongrass-chili wok sauce',
            description: 'While the fish finishes frying, heat oil in a separate wok over high heat. Fry lemongrass, sliced garlic, and shallots for 60-90 seconds until golden. Add all the chili. Add fish sauce and sugar — the wok will sizzle. Cook until the sauce is thick and fragrant — 30 seconds. Have this ready before the fish comes out of the fryer.',
            tip: 'Making the wok sauce in a separate pan while the fish is still frying ensures the two elements meet at exactly the right moment — the crispy fish coming directly from the fryer into the hot sauce for the 60-second toss. Fish that cools before the sauce toss loses its optimal crispiness.',
        },
        {
            title: 'Toss the fried fish in the sauce — 60 seconds maximum',
            description: 'Drain the fried catfish briefly on paper towels. Transfer immediately to the wok with the hot lemongrass sauce. Toss vigorously for 60 seconds — the sauce should coat every surface of the crispy fish without softening it. Add kaffir lime leaves, spring onion, sesame oil, and black pepper in the final 10 seconds. Remove from heat immediately. The fish must spend no more than 60 seconds in the wok — beyond this the skin begins to soften from the sauce moisture.',
            tip: 'The 60-second wok toss for crispy fried fish is the same timing used for chim cút chiên giòn and other fried-then-tossed preparations. The sauce coats the crispy surface in a thin, adherent glaze without generating enough steam to soften it. Beyond 60 seconds, the steam from the sauce begins to penetrate the crispy skin and reverses the frying work.',
        },
        {
            title: 'Plate and eat with hands',
            description: 'Transfer to a serving plate immediately. The fish should be: deeply golden, visibly coated in the lemongrass-garlic paste, the kaffir lime shreds and spring onion scattered throughout, steam still rising. Serve with rau răm, mint, lime, and steamed rice alongside. The correct way to eat cá trê chiên sả ớt: pick up the whole fish by the tail, bite through the crispy lemongrass-coated skin, pull the flesh from the bone with the teeth. Work from the tail toward the head. The fin rays, head, and smaller bones are eaten — only the largest vertebrae of larger fish are set aside.',
            tip: 'The eating of cá trê chiên without utensils — holding the fish by the tail and eating systematically toward the head — is the preparation that the dish was designed for and produces the best contact between the crispy lemongrass skin and the palate. Eaten with chopsticks and broken into pieces, the specific texture of the skin is disrupted. Held by the tail and bitten, it shatters correctly.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
