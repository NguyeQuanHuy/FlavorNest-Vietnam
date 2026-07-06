'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-com-kho-tieu',
    title: 'Cá Cơm Kho Tiêu (Anchovies Braised with Black Pepper)',
    subtitle: 'Fresh anchovies braised in dark caramel with old ginger, lemongrass, and a very generous amount of coarsely ground black pepper until the sauce reduces to a thick, intensely savory glaze — the kho preparation that concentrates the natural umami of fresh anchovies into the most flavor-dense bowl in the Vietnamese everyday fish repertoire.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-com-kho-tieu.jpg',
    intro: `Cá cơm kho tiêu is the black pepper anchovy braise — a preparation that applies the kho technique to cá cơm (fresh anchovies, Engraulis japonicus or similar species) and produces one of the most intensely flavored and most immediately addictive fish kho preparations in the Vietnamese repertoire. Cá cơm in Vietnam refers to the small, silver anchovies caught in enormous quantities along the central and southern coasts — the same fish that, dried and fermented with salt, produces the fish sauce (nước mắm) and shrimp paste (mắm ruốc) that underpin Vietnamese cooking. Eaten fresh, the anchovy carries a naturally concentrated flavor that exceeds most other fish of its size: a specific deep marine savory character from its high oil content, a slight metallic note from the same iodine-rich blood that makes it so suitable for fermentation, and a sweetness when fresh that disappears entirely in the preserved versions. When these naturally umami-rich fresh anchovies are braised in dark sugar caramel with fish sauce, black pepper, and ginger, the concentration of flavors that results is extraordinary — the natural glutamates and inosinates in the anchovy flesh interact with the fish sauce's similar compounds during the reduction, producing a kho sauce that is more deeply savory per spoonful than almost any other preparation of equivalent ingredients. The black pepper in cá cơm kho tiêu is used in the same deliberately generous quantity as in mực kho tiêu — the boldest spice in Vietnamese kho cooking applied to the boldest-flavored small fish. Together they produce the specific combination of deep marine savory and assertive pepper warmth that makes cá cơm kho tiêu the fish kho that Vietnamese people describe as ăn cơm nhất — the one that most compellingly demands rice, the one that most clearly demonstrates why the kho technique exists.`,
    ingredientSections: [
        {
            title: 'Anchovies',
            items: [
                { amount: 400, unit: 'g', name: 'fresh anchovies (cá cơm tươi)', note: 'cleaned — heads removed, gutted. Rinse and pat dry. Fresh anchovies from Asian fish markets. If unavailable, use fresh sardines or small smelts.' },
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce', note: 'for pre-marinating' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'addresses any gaminess and gives golden color' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'coarsely ground — first of three pepper applications' },
            ],
        },
        {
            title: 'Kho base',
            items: [
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'for the dark caramel' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 40, unit: 'g', name: 'old ginger (gừng già)', note: 'cut into fine matchsticks' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised, cut into 4cm pieces — removed before serving' },
                { amount: 4, name: 'garlic cloves', note: 'smashed' },
                { amount: 3, name: 'shallots', note: 'halved' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'whole' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'dark soy sauce', note: 'for color depth' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, unit: 'tsp', name: 'black pepper', note: 'coarsely ground — the dominant seasoning' },
                { amount: 120, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tbsp', name: 'rice wine', note: 'optional — reduces the gamey edge of the anchovies' },
                { amount: 1, unit: 'tsp', name: 'coconut water', note: 'optional — adds Mekong sweetness' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground — the third pepper application' },
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice', note: 'plain and hot — the only thing cá cơm kho tiêu needs alongside' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean and marinate the anchovies',
            description: 'Rinse the cleaned anchovies under cold water. Pat completely dry. Combine with fish sauce, turmeric, and 1 teaspoon coarsely ground black pepper. Toss gently — anchovies are fragile and break easily. Leave 15 minutes. The turmeric addresses the slight metallic note that fresh anchovies can carry and provides the golden base that the dark caramel will deepen. Handle the marinated anchovies carefully throughout the preparation — they are significantly more fragile than catfish or squid sections.',
            tip: 'The fragility of fresh anchovies is the primary handling challenge in cá cơm kho tiêu. Unlike catfish or squid that can be tossed and turned during cooking, anchovies must be moved as little as possible. Once they enter the caramel for the kho braise, they should ideally not be turned at all — the sauce should be spooned over them rather than the fish being flipped, to preserve the whole-fish presentation in the finished kho.',
        },
        {
            title: 'Build an assertive dark caramel',
            description: 'In a clay pot or wide, flat-bottomed pot, heat oil and sugar to a very dark amber caramel. Add 2 tablespoons of water carefully. Swirl to dissolve. The caramel for cá cơm kho must be at the darkest end of the usable range — the naturally assertive flavor of anchovies requires an equally assertive caramel base to balance it. A light caramel produces a sweet, slightly flat result; a dark caramel produces the bitter-sweet complexity that makes the kho match the fish.',
            tip: 'Cá cơm kho tiêu needs the darkest caramel of all the fish kho preparations in the collection — darker than tilapia kho, darker than catfish kho. The anchovy\'s naturally bold, savory character requires a caramel with enough bitterness to provide counterpoint. If the caramel seems too dark to use alone, it is probably correct for this preparation.',
        },
        {
            title: 'Fry aromatics and add anchovies gently',
            description: 'Add ginger matchsticks, lemongrass pieces, smashed garlic, shallots, and whole chilies to the dark caramel. Fry 2 minutes until the ginger caramelizes. Lower the heat slightly. Add the marinated anchovies in a single layer — as carefully as possible, laying each fish in the pot rather than dropping them. Do not stir. The single-layer presentation and the no-stir technique preserve the fish whole through the braising period.',
            tip: 'The single-layer arrangement of anchovies in the kho pot is the technique that allows the sauce to reach every fish equally without the need for stirring. A double layer produces anchovies that are differently cooked at the top and bottom. If the pot is too small for a single layer, use a wider pan rather than stacking.',
        },
        {
            title: 'Braise uncovered — 15-18 minutes',
            description: 'Add fish sauce, dark soy, sugar, 2 teaspoons black pepper, water, rice wine, and coconut water around the anchovies — not over them. Bring to a gentle simmer. Braise uncovered for 15-18 minutes. Spoon the sauce over the anchovies once at 10 minutes rather than turning them. The sauce should reduce to a thick, dark, intensely savory glaze by 18 minutes. The anchovies will be cooked through long before the sauce is done — the extended braising deepens the sauce absorption into the fish.',
            tip: 'The 15-18 minute braising time for cá cơm kho is shorter than for catfish or tilapia kho because anchovies are much smaller and cook through within the first few minutes. The remaining time is for sauce reduction and flavor development. The risk is the sauce over-reducing and burning — watch carefully from the 12-minute mark and add 2 tablespoons of water if the sauce becomes too thick before the 15-minute mark.',
        },
        {
            title: 'Finish and serve — the most umami-dense rice companion',
            description: 'Remove the lemongrass pieces. Add shredded kaffir lime leaves, sliced spring onion, and sesame oil. Grind the final half-teaspoon of fresh black pepper directly over the surface. The finished cá cơm kho tiêu: dark mahogany sauce coating the whole anchovies, the ginger matchsticks and kaffir lime shreds visible throughout, the pepper fragrance rising with the sesame oil. Bring the pot to the table. Serve with plain hot rice. One anchovy and a spoonful of the concentrated sauce per mouthful of rice is the correct ratio — the sauce is so intensely flavored that the rice is not an accompaniment but a necessary dilution.',
            tip: 'The instruction to eat one anchovy and a spoonful of sauce per mouthful of rice — rather than multiple anchovies at once — reflects the specific intensity of cá cơm kho tiêu sauce. This is the most concentrated fish kho in the collection: the natural umami of anchovies multiplied by fish sauce, dark caramel, and 18 minutes of reduction produces a sauce where a teaspoon contains more flavour than a tablespoon of any other kho sauce. Rice is not optional — it is the structural necessity that makes the bowl eatable.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
