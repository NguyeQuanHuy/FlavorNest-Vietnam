'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-tre-kho-to',
    title: 'Cá Trê Kho Tộ (Catfish Braised in Clay Pot)',
    subtitle: 'Catfish sections caramelized in dark palm sugar then braised in a clay pot with old ginger, fresh turmeric, and coconut water until the sauce reduces to a thick, deeply savory glaze — the Mekong Delta kho where the catfish fat renders into the caramel and the coconut water provides the sweetness that makes the sauce specific to the south.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-tre-kho-to.jpg',
    intro: `Cá trê kho tộ is the clay pot braised catfish of the Mekong Delta — one of the most essential kho dishes in the southern Vietnamese home cooking repertoire and one that demonstrates what the kho technique achieves with a fatty freshwater fish specifically. Kho tộ — kho in a clay pot (tộ) — is distinguished from kho in a metal pot by the way the clay distributes heat: more evenly, more gently, and with the specific character that the unglazed clay contributes to the braise as the sauce reduces and concentrates against its porous walls. Cá trê (walking catfish, Clarias batrachus) is the specific fish that the Mekong Delta kho tộ tradition is built around because the catfish carries more internal fat than most freshwater fish of its size — fat that renders during the long braise and enriches the caramel-fish sauce reduction into something darker, more complex, and more deeply savory than the same preparation with a leaner fish would produce. The Mekong Delta version uses palm sugar (đường thốt nốt) rather than white sugar for the caramel — the palm sugar's specific molasses-caramel character produces a darker, more complex caramel that gives cá trê kho tộ its characteristic deep mahogany color and its slight bittersweet background note. Coconut water (nước dừa) is used as part of the braising liquid rather than plain water — in the Mekong Delta where coconut palms grow in every household yard, the addition of fresh coconut water to kho preparations is as natural as using water would be elsewhere, and its specific sweetness and subtle coconut character becomes an integrated element of the finished sauce rather than an identifiable additive. Fresh turmeric grated into the braise provides the golden color and earthy fragrance that defines the dish's visual character — the mahogany of the caramel shot through with the gold of the turmeric.`,
    ingredientSections: [
        {
            title: 'Catfish',
            items: [
                { amount: 700, unit: 'g', name: 'catfish sections (cá trê chặt khúc)', note: 'bone-in, 5-6cm sections. Pre-cleaned from market. The skin of the catfish is left on — it renders its fat into the kho sauce during braising.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for pre-marinating' },
                { amount: 1, unit: 'tsp', name: 'fresh turmeric, grated', note: 'or 0.5 tsp dried turmeric' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Kho base',
            items: [
                { amount: 2, unit: 'tbsp', name: 'palm sugar (đường thốt nốt)', note: 'the Mekong Delta caramel — darker and more complex than white sugar. Substitute: dark brown sugar.' },
                { amount: 1, unit: 'tbsp', name: 'white sugar', note: 'combined with palm sugar for the caramel' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 60, unit: 'g', name: 'old ginger (gừng già)', note: 'peeled and cut into thick matchsticks — generous quantity for catfish' },
                { amount: 4, name: 'garlic cloves', note: 'smashed' },
                { amount: 3, name: 'shallots', note: 'halved' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'whole' },
                { amount: 20, unit: 'g', name: 'fresh turmeric', note: 'sliced — additional for the braise' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 200, unit: 'ml', name: 'young coconut water (nước dừa)', note: 'fresh from a young coconut, not bottled. The Mekong Delta braising liquid that replaces plain water.' },
                { amount: 100, unit: 'ml', name: 'water', note: 'additional' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'dark soy sauce', note: 'for color depth' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Garnish and to serve',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced — added at the very end' },
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice', note: 'plain and hot' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the catfish',
            description: 'Combine catfish sections with fish sauce, grated turmeric, and black pepper. Turn to coat all surfaces — press the marinade into any crevices between the skin and flesh. Leave 15 minutes. The turmeric transforms the catfish surface from its natural grey-white to golden-orange before the kho begins, and works on the specific compounds in catfish skin that can taste muddy if not addressed before cooking.',
            tip: 'Catfish skin has a specific slightly mucilaginous quality that the turmeric and fish sauce pre-marination addresses before the kho — the turmeric oils bind with the surface proteins of the skin and transform the muddy note into something warm and fragrant during the subsequent braising. Pre-marinated catfish kho tastes specifically of caramel and ginger; un-marinated catfish kho tastes of caramel, ginger, and muddy fish.',
        },
        {
            title: 'Make the palm sugar caramel',
            description: 'Combine palm sugar and white sugar in the clay pot over medium heat with the oil. The palm sugar will melt more slowly than white sugar — stir gently until both have melted and combined. Continue cooking without stirring until the caramel reaches a deep amber-brown — darker than a standard caramel because the palm sugar\'s molasses content produces a caramel that looks and tastes darker. Add 2 tablespoons of water carefully. Swirl until dissolved.',
            tip: 'Palm sugar caramel reaches its correct color at a lower temperature than white sugar caramel because of its molasses content — watch more carefully and pull at a slightly lighter color than you would for white sugar caramel, knowing that the palm sugar color will continue to develop slightly after the water is added.',
        },
        {
            title: 'Sear catfish in the caramel',
            description: 'Add the ginger matchsticks, smashed garlic, halved shallots, sliced turmeric, and whole chilies to the palm sugar caramel. Fry for 2 minutes until the ginger edges caramelize in the dark caramel. Add the marinated catfish sections skin-side down. The skin will sizzle in the hot caramel. Sear without moving for 2 minutes until the skin caramelizes deeply against the pot surface. Flip and sear the other side 1 minute.',
            tip: 'Skin-side down first for catfish kho tộ is the technique that produces the most caramelized, most complexly flavored skin surface — the skin fat renders into the caramel during the 2-minute sear and creates a layer of caramelized fat that adheres to the skin throughout the braising period.',
        },
        {
            title: 'Add coconut water and braise — 30-35 minutes',
            description: 'Pour the coconut water, additional water, fish sauce, dark soy, and black pepper around the catfish sections. Bring to a boil, reduce to the lowest simmer. Cover loosely — a lid with a small gap, or place a chopstick under the lid. Braise for 30-35 minutes, turning the fish once at 20 minutes very gently — catfish sections can break apart during the braise. The sauce will reduce progressively from liquid to the thick, dark glaze that defines kho tộ.',
            tip: 'The young coconut water in the braising liquid reduces during the 30-35 minute braise and leaves its specific sweetness and the slight mineral note of coconut in the sauce. By the end of the braise, the coconut water is unidentifiable as a discrete ingredient — it has become part of the sauce character. This is the Mekong Delta integration of coconut into everyday cooking.',
        },
        {
            title: 'Final reduction and serve from the clay pot',
            description: 'At 30-35 minutes the sauce should be thick, dark, and barely moving when the pot is tilted — coating the catfish sections heavily. The catfish skin should be deep mahogany from the palm sugar caramel and the turmeric gold visible underneath. Add spring onion and shredded kaffir lime leaves. Grind black pepper. Bring the clay pot directly to the table. Serve with plain steamed rice and cucumber. The kho sauce spooned over rice — palm sugar caramel, coconut water sweetness, catfish fat, fish sauce depth — is the reason cá trê kho tộ exists.',
            tip: 'The clay pot arriving at the table still bubbling slightly from the final minutes of braising is the specific presentation of kho tộ — the clay retains heat from the stove and continues very gently braising for the first few minutes at the table. The sauce in the pot when the last of the rice has been eaten and the last sauce spooned is the most concentrated version of the entire preparation.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
