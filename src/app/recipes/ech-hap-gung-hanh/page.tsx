'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ech-hap-gung-hanh',
    title: 'Ếch Hấp Gừng Hành (Steamed Frog with Ginger and Spring Onion)',
    subtitle: 'Whole frog or frog sections steamed over ginger and Shaoxing wine until the flesh is silky and barely set — finished at the table with smoking-hot oil poured over ginger julienne and spring onion that sizzles and blooms on contact, then dressed in a light soy-sesame sauce. The Cantonese steaming technique applied to Vietnam\'s freshwater frog.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ech-hap-gung-hanh.jpg',
    intro: `Ếch hấp gừng hành is the steamed frog preparation that comes directly from Cantonese cooking — the hấp gừng hành (steamed with ginger and spring onion) technique that is one of the fundamental preparations of southern Chinese cuisine, applied equally to fish, chicken, crab, and frog with results that are consistently among the most delicate and most revealing of the ingredient's quality. The technique is simple in principle and precise in execution: the frog is steamed over ginger and Shaoxing wine for the minimum time needed to cook the flesh through without drying it, then the sizzling-hot oil is poured over ginger julienne and spring onion placed on top of the cooked frog — the oil blooms the aromatics in seconds and produces the specific fragrance combination of hot oil, raw ginger, and spring onion that is the aromatic signature of this preparation across all proteins. The light soy and sesame sauce is drizzled over at the end to season without obscuring the delicate steamed character. Ếch hấp gừng hành is the quietest preparation in the Vietnamese frog repertoire — not the assertive caramelized crust of xào lăn, not the aggressive black pepper of cháo ếch Singapore, not the shatteringly crispy exterior of chiên bơ tỏi. It is the preparation that answers the question "what does frog actually taste like?" with the most complete and unmediated answer. The flesh at correct steaming doneness is white, silky, and slightly sweet in a way that is specific to this protein and that the Chinese-Vietnamese families of Chợ Lớn have understood for generations. The sizzling oil poured over the ginger and spring onion at the table is the theatrical moment that produces the aromatic frame — the frog flesh provides the content.`,
    ingredientSections: [
        {
            title: 'Frog',
            items: [
                { amount: 700, unit: 'g', name: 'frog sections (ếch làm sạch chặt miếng)', note: 'cleaned, skin removed, chopped into pieces — legs separated, body section halved. Or use frog legs only for a more refined presentation.' },
                { amount: 1, unit: 'tsp', name: 'Shaoxing wine', note: 'rubbed over the frog sections before steaming' },
                { amount: 0.5, unit: 'tsp', name: 'salt', note: 'light seasoning before steaming' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Steaming aromatics',
            items: [
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed — placed under the frog in the steamer plate' },
                { amount: 3, name: 'spring onions', note: 'cut into 5cm pieces — placed under the frog' },
                { amount: 2, unit: 'tbsp', name: 'Shaoxing wine', note: 'drizzled over the frog before steaming' },
            ],
        },
        {
            title: 'Finishing oil — the defining moment',
            items: [
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'heated to smoking — poured over the ginger and spring onion at the table' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'finely julienned into the thinnest possible strips — placed on top of the cooked frog immediately before the hot oil' },
                { amount: 6, name: 'spring onions', note: 'green parts only, cut into 5cm pieces — placed alongside the ginger on the cooked frog' },
                { amount: 2, name: 'fresh red chilies', note: 'finely julienned — placed with the ginger and spring onion' },
            ],
        },
        {
            title: 'Dressing sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'light soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'warm water', note: 'to thin slightly' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'added at the end of the sauce' },
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
            title: 'Prepare and season the frog',
            description: 'Clean and chop the frog into serving sections. Rub lightly with Shaoxing wine, salt, and white pepper. Leave for 10 minutes. The pre-seasoning for steamed frog is deliberately lighter than for fried or braised preparations — the steaming retains more flavor in the flesh than other cooking methods, and heavy pre-seasoning combined with the finishing sauce would over-season the delicate protein.',
            tip: 'The light touch in pre-seasoning is the philosophical basis of hấp gừng hành preparations across all proteins. The Chinese-Cantonese approach: season lightly before cooking, dress assertively after cooking. The dressing sauce applied after steaming seasons the surface; the light pre-seasoning conditions the flesh interior. Together they produce complete seasoning without over-salting.',
        },
        {
            title: 'Build the steaming setup',
            description: 'Place the smashed ginger slices and spring onion pieces on a heatproof plate that fits inside the steamer. Arrange the seasoned frog pieces on top of the aromatics. Drizzle the Shaoxing wine over the frog. Place the plate in the steamer over boiling water. The aromatics under the frog perfume the flesh from below as the steam perfumes it from above — the frog is surrounded by aromatic steam on all sides.',
            tip: 'The smashed ginger and spring onion under the frog (not alongside it) is the positioning that makes the aromatics perfume the flesh from the contact surface below while the steam carries the same aromatic from above. This positioning ensures the specific ginger-Shaoxing character penetrates the frog from all directions simultaneously.',
        },
        {
            title: 'Steam for exactly 8-10 minutes',
            description: 'Cover and steam over maximum heat for 8 minutes for smaller frog sections, 10 minutes for larger. The frog is done when the flesh is completely white and opaque throughout — no translucency at the thickest point. Test by pressing the thickest piece: it should feel firm but slightly yielding, not hard. Over-steamed frog is dry and slightly rubbery; correctly steamed frog is silky and just set. Remove from the steamer immediately.',
            tip: 'The steaming window for frog is narrower than for chicken — 8-10 minutes versus 30-35 minutes for chicken of equivalent weight. Frog flesh is more delicate and sets faster. Check at 8 minutes without fail. The difference between perfectly cooked and overcooked steamed frog is 2 minutes.',
        },
        {
            title: 'Prepare the finishing aromatics',
            description: 'While the frog steams, julienne the ginger into the finest possible strips. Prepare the spring onion pieces. Julienne the red chili. Combine the dressing sauce ingredients in a small bowl — light soy, oyster sauce, sugar, water, and sesame oil. Heat the neutral oil in a small pan until genuinely smoking — 210°C. Have everything ready before the frog finishes steaming.',
            tip: 'The smoking oil is the temperature that produces the sizzle-and-bloom of the aromatics in the signature moment of this preparation. Oil that is merely hot produces a muted, flat response from the ginger and spring onion. Oil at 210°C produces the dramatic sizzle and the immediate release of volatile oils that fills the room with the specific hấp gừng hành fragrance.',
        },
        {
            title: 'The sizzling oil moment — at the table',
            description: 'Bring the steamed frog plate directly to the table. Pour the chicken broth or steaming liquid from the plate. Place the julienned ginger, spring onion pieces, and red chili strips directly on top of the hot steamed frog. Drizzle the dressing sauce over. Then: pour the smoking-hot oil over the ginger and spring onion in one steady stream. The sizzle is loud and immediate — the aromatics bloom in seconds. Scatter cilantro. The eating begins immediately.',
            tip: 'The pouring of the hot oil at the table is the theatrical and aromatic centerpiece of ếch hấp gừng hành. The sizzle, the steam, the immediate fragrance of bloomed ginger and spring onion — this is the moment the dish announces itself. Prepare the oil in a small pan with a handle that can be brought to the table safely. Pour from a height of about 20cm for maximum visual and aromatic effect.',
        },
        {
            title: 'Eat immediately',
            description: 'Serve from the plate at the table — each diner taking frog pieces with chopsticks, pulling the silky flesh from the bone, eating with a spoonful of the dressing sauce and a mouthful of the hot oil-bloomed ginger. Serve with steamed rice — the steaming liquid and dressing sauce pooled in the plate is ladled over the rice between each piece of frog. The complete bowl: plain rice, the complex sauce from the plate, a piece of silky steamed frog.',
            tip: 'The sauce pooled in the steaming plate — a combination of the Shaoxing wine, the frog juices, the dressing sauce, and the hot oil that has collected — is the most complex liquid in the preparation. Spoon it over rice between every piece of frog. At the end, use rice to clean the plate of this sauce. Nothing from ếch hấp gừng hành should be wasted.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
