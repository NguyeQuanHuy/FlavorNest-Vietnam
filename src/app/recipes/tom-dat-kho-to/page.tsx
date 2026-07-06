'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-dat-kho-to',
    title: 'Tôm Ð?t Kho T? (Mekong Field Shrimp Braised in Clay Pot)',
    subtitle: 'Small freshwater field shrimp braised in a clay pot with young coconut water, palm sugar, fish sauce, and garlic until the sauce reduces to a dark, fragrant caramel that coats every shrimp — the Mekong Delta kho that uses the sweetest water and the smallest shrimp to produce the most concentrated result.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/tom-dat-kho-to.jpg',
    intro: `Tôm d?t kho t? is the clay pot braised shrimp of the Mekong Delta — a kho preparation that takes the same technique used for th?t kho tàu (pork belly kho) and cá kho t? (fish kho) and applies it to tôm d?t, the small field shrimp of the delta's rice paddies and waterways. The name tôm d?t — earth shrimp or ground shrimp — distinguishes them from sea shrimp (tôm bi?n) and freshwater prawns (tôm càng): they are the shrimp of the land itself, of the flooded fields and irrigation canals that crisscross the delta, harvested by women with hand nets at dusk when the shrimp come out to feed. They are small, never longer than 5cm, and their smallness is their virtue: when braised in a clay pot with young coconut water and palm sugar, every individual shrimp absorbs the kho sauce completely — not just on the surface but throughout the flesh and shell — producing a result where the shell itself has become part of the seasoning rather than a barrier to it. The clay pot (t?) is essential: its porous walls allow slight evaporation that concentrates the coconut-palm sugar sauce more efficiently than a metal pot, and the even, gentle heat prevents the caramel from scorching at the edges before the center has reduced. Tôm d?t kho t? is the dish eaten with white rice at the noon meal throughout the delta — the small shrimp placed over the rice, the dark sauce soaking downward, the sweetness of the coconut water and palm sugar and the savory depth of the fish sauce in perfect equilibrium.`,
    ingredientSections: [
        {
            title: 'Shrimp',
            items: [
                { amount: 500, unit: 'g', name: 'tôm d?t (freshwater field shrimp)', note: 'small, whole, shell-on. Fresh from Vietnamese markets during season. Substitute: small marine shrimp (50+ count per 500g) — the flavor differs but the kho technique is the same.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for brief pre-seasoning' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Kho braising liquid',
            items: [
                { amount: 250, unit: 'ml', name: 'young coconut water (nu?c d?a tuoi)', note: 'from a young green coconut, or fresh-packaged without additives. The natural sweetness is what makes Mekong kho different from northern kho.' },
                { amount: 2, unit: 'tbsp', name: 'palm sugar (du?ng th?t n?t)', note: 'the Mekong Delta sweetener — darker, more complex, slightly caramel-adjacent. Substitute: brown sugar. Never white sugar.' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar', note: 'in addition to palm sugar — for the caramel (nu?c màu)' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'whole — placed in the pot without cutting, releasing heat gradually' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground over the finished dish' },
                { amount: 1, name: 'fresh red chili', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the caramel (nu?c màu)',
            description: 'In the clay pot over medium heat, add oil and 1 tablespoon of regular sugar. Leave undisturbed until the sugar begins to melt at the edges. Swirl gently — never stir — until the caramel reaches deep amber, the color of dark tea. Add 2 tablespoons of water to stop the cooking. It will spit aggressively — stand back. Swirl until the caramel dissolves into the water. This dark caramel is the color and background sweetness of the kho.',
            tip: 'Deep amber caramel is the target — not pale gold, not black. Pale caramel produces a thin, flat kho. Burnt caramel is irreversibly bitter. The 10-second window between perfect and burnt is real — pull the pot from the heat the moment the caramel reaches dark amber.',
        },
        {
            title: 'Fry the aromatics in the caramel',
            description: 'Add the minced garlic and shallots directly to the hot caramel in the clay pot. They will sizzle and caramelize in the residual heat and sugar. Stir for 1-2 minutes until golden and fragrant. The caramelized garlic-shallot base in a kho is what produces the layered depth that a simple braising liquid cannot approach.',
            tip: 'The garlic and shallots frying in the hot caramel is the moment the Mekong kho base is built. This combination — caramelized sugar and caramelized aromatics — is the flavor foundation that everything else is added to. Do not rush or skip.',
        },
        {
            title: 'Add shrimp and braise',
            description: 'Add the briefly marinated shrimp to the pot. Pour the young coconut water around the shrimp — not over, which would wash away the caramel coating. Add the palm sugar, fish sauce, and whole chilies. Bring to a boil, reduce to a steady simmer. The liquid should come about three-quarters up the shrimp. Braise uncovered for 15-20 minutes, turning the shrimp gently once at the halfway point.',
            tip: 'The coconut water must be young (fresh) coconut water — aged coconut water loses the delicate sweetness that is the defining character of Mekong kho. If young coconut water is unavailable, substitute with 200ml water and increase the palm sugar by 1 tablespoon.',
        },
        {
            title: 'Reduce to a glaze — the kho endpoint',
            description: 'After 15-20 minutes of simmering, the liquid will have reduced significantly. Continue reducing, watching carefully, until the sauce becomes thick and glossy — it should move slowly like warm honey when the pot is tilted, coating the shrimp in a dark, fragrant glaze. The shrimp shells will have absorbed the caramel-palm sugar-coconut water sauce. Total braising and reducing time: 25-30 minutes.',
            tip: 'The correct endpoint: tilt the pot — the sauce moves in one slow mass, coating the shrimp and leaving a thin, glossy film on the clay pot sides. Watery sauce means reduce more. Dry and sticky means add 2 tablespoons of water and toss to loosen.',
        },
        {
            title: 'Finish and serve from the clay pot',
            description: 'Remove from heat. Scatter sliced spring onion and freshly ground black pepper directly into the clay pot. Bring the pot to the table — the retained heat keeps the kho warm throughout the meal. Serve with generous steamed jasmine rice. The correct way to eat tôm d?t kho t?: spoon the shrimp and the dark sauce over the rice. The sauce soaking into the rice beneath the small shrimp is the complete Mekong Delta meal.',
            tip: 'Tôm d?t kho t? improves significantly on the second day — the shrimp absorb more of the sauce during refrigeration and the flavor deepens. Reheat gently over low heat with a tablespoon of water. Day-two kho is what Mekong Delta families consider the better version.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
