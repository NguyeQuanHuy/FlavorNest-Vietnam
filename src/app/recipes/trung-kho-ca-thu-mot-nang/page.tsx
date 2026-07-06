'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trung-kho-ca-thu-mot-nang',
    title: 'Trứng Kho Cá Thu Một Nắng Phú Yên (Braised Eggs with One-Sun Dried Mackerel)',
    subtitle: 'Hard-boiled eggs and pieces of one-sun dried Spanish mackerel braised together in dark caramel, mắm nhĩ, galangal, and lemongrass until both absorb the concentrated sauce — the Phú Yên kho that combines the province\'s most emblematic dried fish with the egg preparation that makes every drop of sauce worth spooning over rice.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/trung-kho-ca-thu-mot-nang.jpg',
    intro: `Trứng kho cá thu một nắng is the braised egg and dried mackerel preparation of Phú Yên — a kho dish that combines trứng kho (braised eggs in caramel and fish sauce, one of the most universally eaten kho preparations in Vietnamese home cooking) with cá thu một nắng (one-sun dried Spanish mackerel, the fish cousin of bò một nắng that is the most emblematic preserved food of the province). The combination is not arbitrary. Dried mackerel in kho sauce undergoes a transformation similar to what happens to it when grilled: the salt and oil that were concentrated during the one-day drying process caramelize further in the kho sauce, producing a fish piece that is dark, intensely flavored throughout, and carries the specific richness of the dried fish fat through the reduced sauce into the braising liquid. The eggs, placed in the kho alongside the fish, absorb this enriched sauce through their porous whites and develop the specific deep-brown exterior and savory-sweet interior that characterize kho eggs in general — but with the additional dimension of the dried mackerel fat and the mắm nhĩ that the sauce has been built from. The galangal and lemongrass in the braising liquid are the Phú Yên additions that distinguish this from a standard trứng kho — the same three-aromatic foundation used in ếch kho sả riềng and other provincial braised preparations, applied here to a combination that the rest of Vietnam typically prepares without these aromatics. The result is a kho where every element — the egg, the fish, and the sauce itself — carries the specific character of the province in every spoonful.`,
    ingredientSections: [
        {
            title: 'Main proteins',
            items: [
                { amount: 6, name: 'large eggs', note: 'hard-boiled 10 minutes, peeled, scored with 3 shallow cuts around the equator to allow sauce penetration' },
                { amount: 300, unit: 'g', name: 'cá thu một nắng (one-sun dried Spanish mackerel)', note: 'cut into 5cm sections. If unavailable: lightly salt-dried fresh mackerel, or substitute fresh mackerel with an additional tablespoon of fish sauce in the braising liquid.' },
            ],
        },
        {
            title: 'Kho base',
            items: [
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'for the dark caramel' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 2, name: 'lemongrass stalks', note: 'inner stalk, minced — Phú Yên aromatic' },
                { amount: 25, unit: 'g', name: 'fresh galangal', note: 'minced — the highland aromatic' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'whole' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 3, unit: 'tbsp', name: 'mắm nhĩ (Phú Yên first-press fish sauce)', note: 'the defining seasoning — the dried fish already carries salt, so taste before adding more' },
                { amount: 1, unit: 'tbsp', name: 'dark soy sauce', note: 'for color depth' },
                { amount: 1, unit: 'tsp', name: 'sugar', note: 'additional — separate from the caramel' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 150, unit: 'ml', name: 'coconut water', note: 'adds Mekong sweetness and helps the sauce develop' },
                { amount: 100, unit: 'ml', name: 'water' },
            ],
        },
        {
            title: 'Garnish and to serve',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice', note: 'plain and hot — the concentrated kho sauce over rice is the meal' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Hard-boil and score the eggs',
            description: 'Place eggs in cold water, bring to a boil, cook for 10 minutes exactly. Transfer to ice water immediately — the cold stops the cooking and prevents the grey ring around the yolk. Peel carefully. Using a sharp knife, make 3 shallow cuts around the equator of each peeled egg — just through the white, not into the yolk. These cuts allow the kho sauce to penetrate the egg white during braising rather than only coating the surface.',
            tip: 'The scoring of the peeled eggs before kho braising is the technique that produces eggs whose white is brown and sauce-flavored throughout rather than only on the exterior. Unscored kho eggs have a pale interior despite a dark exterior — the sauce cannot penetrate the dense cooked white. Scored eggs absorb sauce into the cuts during braising, coloring and flavoring the white from multiple entry points.',
        },
        {
            title: 'Build the dark caramel',
            description: 'Heat oil and sugar in a clay pot or heavy pot over medium heat until the sugar melts and reaches a deep amber — nearly the darkest possible caramel without burning. Add 2 tablespoons of water carefully. Swirl until dissolved. The caramel for trứng kho cá thu should be very dark — the dried mackerel and the egg white both absorb color from the caramel, and a pale caramel produces a flat-looking, flat-tasting kho.',
            tip: 'The very dark caramel is especially important in this kho because the dried mackerel already contributes significant salt and umami — the caramel needs to provide the color and the bittersweet counterpoint that balances the fish\'s intensity. Light caramel against dried mackerel produces a kho that tastes only of salt; dark caramel produces a balanced result.',
        },
        {
            title: 'Fry the aromatics and sear the fish',
            description: 'Add lemongrass, galangal, garlic, and shallots to the dark caramel. Fry 2 minutes until golden. Add the dried mackerel pieces — they will sizzle in the caramel. Sear briefly on each side — 1 minute per side. The dried fish surface will caramelize further against the hot caramel and develop a darker, more complex exterior. Add whole chilies.',
            tip: 'Searing the dried mackerel in the caramel before adding the braising liquid is the technique that layers the caramelization — the fish already has one layer from the sun-drying process; this second caramelization in the kho pot adds a second layer. Two-stage caramelization is what gives cá thu một nắng kho its specific depth versus fresh mackerel kho.',
        },
        {
            title: 'Add eggs and braising liquid — 30-35 minutes',
            description: 'Place the scored hard-boiled eggs in the pot alongside the fish. Pour mắm nhĩ, dark soy, sugar, coconut water, and water around the sides. Taste the liquid — it should be savory and slightly sweet, accounting for the salt already in the dried fish. Bring to a boil, reduce to the lowest simmer. Braise uncovered for 30-35 minutes, turning the eggs gently every 10 minutes to ensure even coloring and sauce absorption on all sides.',
            tip: 'Turning the eggs every 10 minutes in trứng kho is the technique that produces evenly colored, evenly flavored kho eggs rather than eggs that are dark on the bottom and pale on top. Each turn exposes a different surface to the concentrated sauce pooling at the bottom of the pot.',
        },
        {
            title: 'Reduce to a glaze and finish',
            description: 'At 30-35 minutes, the sauce should be thick and dark, coating the eggs and fish in a glossy glaze. The eggs should be a uniform deep brown-amber from the absorbed sauce and caramel. The dried mackerel pieces should be almost black in the darkest areas. Add shredded kaffir lime leaves and sliced spring onion. Grind black pepper generously. Serve from the clay pot with plain steamed rice, cucumber, and lime.',
            tip: 'The sauce from trứng kho cá thu một nắng is the most complex kho sauce in the Phú Yên recipe collection — it carries the dried mackerel fat, the mắm nhĩ depth, the coconut water sweetness, the caramel bitterness, and the galangal-lemongrass warmth simultaneously. Spoon it generously over rice before the first bite. It is the reason the dish exists.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
