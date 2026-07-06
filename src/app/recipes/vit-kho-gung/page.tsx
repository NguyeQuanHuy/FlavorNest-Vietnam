'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'vit-kho-gung',
    title: 'Vịt Kho Gừng (Duck Braised with Ginger)',
    subtitle: 'Duck pieces caramelized in dark sugar then braised with a generous amount of old ginger, galangal, and fish sauce until the sauce reduces to a thick, deeply savory glaze — the rainy-day Vietnamese kho that uses more ginger than seems reasonable and is exactly right because of it.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 15 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/vit-kho-gung.jpg',
    intro: `Vịt kho gừng is the Vietnamese duck-and-ginger braise — a kho preparation that appears on rainy-season tables throughout Vietnam, from the flooded Mekong Delta where duck is the most abundantly available protein to the northern households where duck kho on a cold day is as restorative as anything the kitchen can produce. Kho is the Vietnamese braising technique where protein, caramel, and a small amount of liquid are cooked together until the liquid reduces to a thick, dark, intensely concentrated sauce that coats the protein. Gừng — ginger — is used in vịt kho gừng in a quantity that would seem excessive in any other preparation: 100 grams of old ginger for a 1.2kg duck, cut into thick matchsticks rather than minced, so that the ginger is a structural element rather than a background seasoning. Old ginger (gừng già) — the mature, slightly fibrous ginger that has been in the ground for most of the growing season — is specifically required: it has significantly more volatile oil and more pungent heat than the young ginger used in salads and fresh preparations, and it mellows over the 45-minute braise into a warmth that is present in every spoonful without being sharp. Duck and ginger are a classic Vietnamese pairing for a specific reason: duck meat is darker, fattier, and more richly flavored than chicken, with a gamey edge that raw ginger counters immediately and that braised old ginger transforms into a complementary depth. A duck kho without sufficient ginger tastes of nothing but duck fat and caramel. A duck kho with the correct quantity of old ginger tastes of the specific combination that on a grey, wet afternoon is the most satisfying thing Vietnamese home cooking produces.`,
    ingredientSections: [
        {
            title: 'Duck',
            items: [
                { amount: 1.2, unit: 'kg', name: 'duck pieces, bone-in (vịt chặt miếng)', note: 'thighs, drumsticks, and wings — or a whole duck chopped. Blanch and rinse before using.' },
            ],
        },
        {
            title: 'The kho base',
            items: [
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'for the caramel (nước màu)' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 100, unit: 'g', name: 'old ginger (gừng già)', note: 'peeled and cut into thick matchsticks 5mm wide — this is the defining quantity. Do not reduce.' },
                { amount: 5, name: 'garlic cloves', note: 'lightly smashed, left whole' },
                { amount: 3, name: 'shallots', note: 'halved' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised and cut into 5cm pieces' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'soy sauce (dark)', note: 'adds color depth — dark soy, not light' },
                { amount: 1, unit: 'tsp', name: 'sugar', note: 'additional — separate from the caramel' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 150, unit: 'ml', name: 'water', note: 'just enough to start the braise — the duck releases its own moisture' },
                { amount: 2, name: 'dried chilies', note: 'whole — optional, adds warmth without sharpness' },
            ],
        },
        {
            title: 'Garnish and to serve',
            items: [
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces — added at the end' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground — finishing seasoning' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice', note: 'hot — the kho sauce over hot rice is the point of the dish' },
                { amount: 1, name: 'cucumber, sliced', note: 'freshness contrast alongside the rich kho' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the duck',
            description: 'Place duck pieces in cold water, bring to a vigorous boil and blanch for 8 minutes. Drain and rinse every piece thoroughly. Duck releases significantly more fat and impurities during blanching than chicken — the water will turn grey-yellow. A properly blanched and rinsed duck produces a cleaner, less gamey kho. Pat dry completely after rinsing.',
            tip: 'Blanching duck specifically removes the surface fat and blood that produce the strong gamey character that people who say they dislike duck are actually reacting to. Properly blanched and rinsed duck has a milder, richer flavor that is specifically more pleasant without being less intense.',
        },
        {
            title: 'Make the dark caramel',
            description: 'In a wide, heavy pot over medium heat, add oil and sugar. Leave undisturbed until the sugar melts at the edges. Swirl gently until the caramel reaches a deep amber — darker than for seafood kho, approaching the color of dark tea. Add 2 tablespoons of water carefully — it will spit aggressively. Swirl until the caramel dissolves into a dark liquid. This is the color foundation of vịt kho gừng.',
            tip: 'The caramel for duck kho should be darker than for pork or prawn kho — duck\'s rich, fatty character needs a more robust caramel base to provide the right background depth. Pale caramel produces a duck kho that tastes flat and underdeveloped regardless of the other ingredients.',
        },
        {
            title: 'Sear the duck in the caramel',
            description: 'Add the blanched duck pieces directly to the dark caramel. They will sizzle immediately in the hot caramel. Sear without moving for 3 minutes — the caramel coats and darkens the duck surface. Turn and sear another 2 minutes on the other side. The duck pieces should be evenly coated in the dark caramel and developing their own caramelized surface.',
            tip: 'Searing the duck directly in the caramel rather than making the caramel separately and adding it later produces a more integrated result — the caramel chars slightly onto the duck surface and creates a layer of caramelization that builds flavor from the first minute of braising.',
        },
        {
            title: 'Add the ginger — all 100 grams',
            description: 'Add all the ginger matchsticks to the pot with the seared duck. Also add the smashed garlic, halved shallots, and lemongrass pieces. Stir to distribute. Fry everything together for 2 minutes — the ginger beginning to caramelize in the rendered duck fat and the residual caramel. The smell at this stage — caramelized duck fat and old ginger together — is one of the most appetite-inducing in Vietnamese home cooking.',
            tip: 'All 100g of ginger goes in at this stage — not half now and half later. The entire quantity braising from the beginning produces a deeper ginger character that diffuses through the sauce. Adding ginger late produces sharpness on top; braised ginger from the beginning produces warmth throughout.',
        },
        {
            title: 'Add the braising liquid and braise',
            description: 'Add fish sauce, dark soy sauce, sugar, black pepper, dried chilies, and water. Bring to a boil — the liquid should bubble vigorously. Reduce to a steady simmer. Braise uncovered for 40-45 minutes, stirring occasionally and turning the duck pieces every 10 minutes. The sauce will reduce progressively — at 20 minutes it is still quite liquid; at 40 minutes it should be thick and glossy, coating each duck piece.',
            tip: 'Braising uncovered is the technique that produces the reduction and concentration that makes kho what it is. A covered braise retains moisture and produces a duck in liquid; an uncovered braise evaporates that moisture and produces duck in a thick, concentrated glaze. Check the sauce level every 10 minutes — if reducing too quickly, add a splash of water.',
        },
        {
            title: 'Final reduction and serve',
            description: 'When the sauce has reduced to a thick, dark glaze that coats the duck pieces heavily, add the spring onion pieces and toss briefly. Grind black pepper generously over the pot. The finished vịt kho gừng: dark, glossy, fragrant with old ginger warmth, with the ginger matchsticks visible and soft throughout. Serve directly from the pot with steamed rice, cucumber slices, and cilantro. Ladle the thick kho sauce generously over the rice — this is the most important element of the meal.',
            tip: 'The kho sauce spooned over plain hot rice and eaten slowly is the rainy-day ritual that vịt kho gừng is made for. The concentration of fish sauce, caramel, duck fat, and old ginger in the thick sauce, absorbed into the rice beneath — this is the bowl that Vietnamese people who grew up with this dish describe when they describe home.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
