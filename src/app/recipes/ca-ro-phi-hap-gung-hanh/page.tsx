'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-ro-phi-hap-gung-hanh',
    title: 'Cá Rô Phi Hấp Gừng Hành (Steamed Tilapia with Ginger and Spring Onion)',
    subtitle: 'Whole tilapia steamed over ginger and Shaoxing wine until the flesh is silky and barely set — finished at the table with smoking-hot oil poured over ginger julienne and spring onion that blooms immediately, dressed with light soy and sesame. The Cantonese steaming technique applied to the most everyday Vietnamese freshwater fish.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-ro-phi-hap-gung-hanh.jpg',
    intro: `Cá rô phi hấp gừng hành is the steamed tilapia preparation that comes from Cantonese cooking and that Vietnamese-Chinese families throughout the south have made the standard treatment for fresh whole fish of good quality. The hấp gừng hành (steamed with ginger and spring onion) technique — steaming the fish over ginger and Shaoxing wine, then pouring smoking-hot oil over julienned ginger and spring onion placed on top of the cooked fish — is arguably the most important single fish preparation in Chinese cooking, and its adoption into Vietnamese cuisine reflects the depth of Chinese influence on the southern Vietnamese kitchen. Applied to tilapia, the technique produces its most transparent result: tilapia's mild, clean white flesh absorbs the ginger-Shaoxing steam during cooking and carries the light soy and sesame sauce after the oil pour, but adds no competing character of its own — the fish is, in the best possible sense, a vehicle for the technique. This transparency is the reason hấp gừng hành is specifically appropriate for mild white-fleshed fish and less suitable for stronger-flavored fish like mackerel or catfish: the technique produces a dish that is delicate, clean, and specifically aromatic in a way that a strong-flavored fish would overwhelm. At a Vietnamese family dinner, cá rô phi hấp gừng hành appears as a light counterpart to richer dishes — alongside a kho tộ, a canh chua, or a stir-fry — where its clean, mild character provides contrast and its dramatic tableside oil pour provides the visual moment that the meal remembers. The sizzle of the smoking oil hitting the ginger and spring onion at the table is the performance that makes the simplest preparation one of the most impressive-looking at any Vietnamese dinner table.`,
    ingredientSections: [
        {
            title: 'Fish',
            items: [
                { amount: 1, name: 'whole tilapia, 600-800g', note: 'cleaned, scaled. Score 3 times on each side. Or 2 smaller tilapia 350-400g each.' },
                { amount: 1, unit: 'tsp', name: 'salt', note: 'rubbed over the surface and inside the cavity' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: '2 slices — placed inside the cavity before steaming' },
                { amount: 2, name: 'spring onions', note: 'tied and stuffed inside the cavity' },
                { amount: 1, unit: 'tbsp', name: 'Shaoxing wine', note: 'drizzled over the fish before steaming' },
            ],
        },
        {
            title: 'Steaming aromatics',
            items: [
                { amount: 400, unit: 'ml', name: 'water' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed — in the steaming water' },
                { amount: 3, name: 'spring onions', note: 'cut into pieces — in the steaming water' },
                { amount: 2, unit: 'tbsp', name: 'Shaoxing wine', note: 'added to the steaming water' },
            ],
        },
        {
            title: 'Finishing oil — the tableside moment',
            items: [
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'heated to smoking — the temperature that produces the dramatic sizzle' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'finely julienned — placed on top of the cooked fish just before the oil' },
                { amount: 5, name: 'spring onions', note: 'green parts only, cut into 5cm julienne — placed with the ginger' },
                { amount: 2, name: 'fresh red chilies', note: 'finely julienned — for color' },
            ],
        },
        {
            title: 'Dressing sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'light soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'warm water' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'added last to the sauce' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the fish and cavity aromatics',
            description: 'Score the tilapia 3 times on each side. Rub salt and white pepper over every surface and inside the scored lines. Stuff the cavity with ginger slices and spring onion bundle. Drizzle Shaoxing wine over the fish. Place on a heatproof plate that fits in the steamer with clearance on all sides — the steam must circulate completely around the fish.',
            tip: 'The aromatics inside the cavity — ginger and spring onion — perfume the flesh from within while the steaming bath perfumes it from outside. This inside-out approach produces a fish where the ginger character is present throughout the flesh rather than only on the surface. The technique is the same applied to bồ câu hấp mắm nhĩ and ếch hấp gừng hành in the recipe collection.',
        },
        {
            title: 'Steam at medium heat — 10-15 minutes',
            description: 'Bring the steaming water with ginger, spring onion, and Shaoxing wine to a vigorous boil. Reduce to medium heat — the steam must be present but not aggressive. Place the fish plate in the steamer. Cover tightly. Steam for 10-12 minutes for a 600g fish, 13-15 minutes for 800g. The fish is done when the flesh at the thickest score line is white and opaque throughout — test with a chopstick at the 10-minute mark.',
            tip: 'Medium steam rather than maximum steam is the technique that produces a silky, even texture in steamed white fish. Maximum steam produces bubbles that roughen the flesh surface and cook the outside before the center is done. Medium steam cooks evenly from the outside in over the correct time window.',
        },
        {
            title: 'Prepare the tableside elements before the fish finishes',
            description: 'While the fish steams, julienne the ginger into the finest possible strips, prepare the spring onion julienne and chili strips, and combine the dressing sauce. Heat the neutral oil in a small pan until genuinely smoking — 210°C. Have everything positioned and ready: the julienned aromatics prepared and waiting on a plate, the dressing sauce in a small bowl, the smoking oil pan ready to carry to the table. The entire tableside sequence happens in under 60 seconds.',
            tip: 'Preparation timing for the tableside oil pour: the oil should reach smoking temperature just as the fish is removed from the steamer — not 5 minutes before (the oil will cool) and not after the fish is on the table (the ginger and spring onion will wilt before the oil arrives). The sequence is: fish comes out of steamer → plate the fish → place julienned aromatics on fish → pour sauce → pour smoking oil immediately.',
        },
        {
            title: 'The tableside oil pour — the defining moment',
            description: 'Remove the fish from the steamer. Pour away any liquid that has accumulated on the plate during steaming — this liquid is slightly fishy and dilutes the dressing sauce. Place the fish on a clean serving plate or on its steaming plate with the liquid poured off. Drizzle the dressing sauce over the fish. Arrange the ginger julienne, spring onion, and chili strips on top of the fish. Carry the smoking oil pan to the table. Pour the smoking oil directly over the ginger and spring onion in one steady stream — the sizzle is immediate and loud, the aroma blooms instantly.',
            tip: 'Pouring the smoking oil from a height of approximately 20cm produces a more dramatic sizzle and a better distribution of the oil across the ginger and spring onion surface than pouring from directly above. The oil should hit the aromatics at temperature and spread immediately rather than pooling in one spot.',
        },
        {
            title: 'Eat while the sizzle is still in the room',
            description: 'The eating begins immediately after the oil pour — the ginger and spring onion are at their most aromatic in the 2-3 minutes following the oil contact. Scatter cilantro. Each diner uses chopsticks to pull flesh from the scored sections of the fish, ensuring a piece of ginger and spring onion accompanies each bite of fish. Drizzle the pooled soy-sesame sauce from the plate over each spoonful of rice. Serve with additional lime wedges.',
            tip: 'The pooled dressing sauce that collects on the plate under the fish during the meal — enriched by the fish juices, the ginger, the spring onion, and the sesame oil — is the best sauce for drizzling over plain rice at the end of the meal. As with every hấp preparation in the recipe collection: the liquid on the plate is never to be discarded.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
