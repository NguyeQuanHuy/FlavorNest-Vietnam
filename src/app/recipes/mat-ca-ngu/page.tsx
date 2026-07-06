'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'mat-ca-ngu',
    title: 'M?t Cá Ng? Kho (Braised Tuna Eye)',
    subtitle: 'The cut that contains the most concentrated tuna flavor in the entire fish — the eye socket and surrounding gelatinous tissue, braised in caramelized fish sauce with ginger and chili until the collagen melts and the broth becomes a rich, sticky glaze.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/mat-ca-ngu.jpg',
    intro: `M?t cá ng? — tuna eye — is the cut that most Western fish buyers discard without thought and Vietnamese cooks prize above almost any other part of the fish. The eye socket of a large yellowfin or bigeye tuna is surrounded by thick gelatinous tissue, a layer of rich fatty flesh, and the eye itself — which contains a surprisingly clean, firm, lobster-like texture when cooked. The collagen in the surrounding tissue, when braised in the Vietnamese kho method (caramelized fish sauce, sugar, aromatics), dissolves into the braising liquid and creates a sauce of extraordinary body and richness. The flavor is the most concentrated expression of tuna possible — more intense than any steak, more complex than any fillet. M?t cá ng? is particularly associated with the central coast of Vietnam, where the tuna fishing industry is centered: Phú Yên, Bình Ð?nh, and Khánh Hòa provinces. In these coastal provinces, the eyes are sold separately at markets — coveted, never discarded. In Vietnamese fishmongers outside Vietnam, they can sometimes be found frozen. Ask specifically — they are often available but not displayed.`,
    ingredientSections: [
        {
            title: 'Main',
            items: [
                { amount: 4, name: 'tuna eye sections (m?t cá ng?)', note: 'each section includes the eye plus surrounding tissue — about 150-200g each. Ask Vietnamese fishmonger specifically. Frozen acceptable.' },
                { amount: 4, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'peeled and cut into thin coins' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'caramel sauce (nu?c màu)', note: 'for the deep mahogany color' },
                { amount: 100, unit: 'ml', name: 'water' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'left whole or sliced — for heat' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, name: 'spring onions, sliced' },
                { amount: 1, name: 'fresh red chili, sliced' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the tuna eye sections',
            description: 'If frozen, thaw completely in the refrigerator overnight. Rinse under cold water. Pat thoroughly dry with paper towels — surface moisture prevents browning in the next step. Season with a pinch of salt and black pepper on all sides.',
            tip: 'Tuna eye sections contain the eye itself (which firms up like a hard-boiled egg white when cooked), surrounding gelatinous tissue (which becomes the sauce), and fatty flesh (which provides richness). Each component cooks differently but all benefit from the kho method.',
        },
        {
            title: 'Caramelize sugar',
            description: 'Heat oil in a wide, shallow pan or wok over medium heat. Add sugar and leave undisturbed until the edges begin to melt and turn amber. Swirl gently until the sugar is fully dissolved and deep amber — 3-4 minutes. The caramel should smell slightly bitter and nutty. Do not let it turn black.',
            tip: 'Deep amber caramel (not pale gold, not black) is the correct color. Pale caramel produces a flat sauce; burnt caramel produces bitterness.',
        },
        {
            title: 'Sear the tuna eye sections',
            description: 'Add the dried tuna eye sections to the caramel. They will spit aggressively — stand back. Sear for 2-3 minutes on each exposed side until the caramel lacquers the outside. The gelatinous tissue will begin to soften at the edges almost immediately.',
            tip: 'Do not attempt to turn the pieces too early — let the caramel crust form undisturbed before moving.',
        },
        {
            title: 'Add aromatics and braise',
            description: 'Add garlic, ginger coins, fish sauce, caramel sauce, water, and whole chilies. The liquid should come about halfway up the tuna sections. Bring to a boil, then reduce to a steady simmer. Cover loosely and braise for 20-25 minutes, turning once halfway through. The surrounding gelatinous tissue will melt into the braising liquid, thickening it significantly.',
            tip: 'The gelatinous tissue is what makes this dish. As it breaks down, it creates a sauce of extraordinary richness and body that no other part of the tuna could produce.',
        },
        {
            title: 'Reduce the sauce to a glaze',
            description: 'Remove the lid and increase heat slightly for the final 5-8 minutes, basting the fish frequently with the sauce as it reduces. The sauce is ready when it is thick enough to coat a spoon heavily and has a deep mahogany color. The fish sections should be fully lacquered with the glaze.',
            tip: 'Baste every minute during the final reduction — this builds layers of glaze on the fish surface.',
        },
        {
            title: 'Serve',
            description: 'Transfer to a serving dish. Spoon any remaining glaze over the top. Scatter sliced spring onion and fresh chili. Serve immediately with steamed rice. How to eat m?t cá ng?: the eye itself is lifted out and eaten — the white outer part has a clean, firm texture; the inner part is rich and fatty. The surrounding gelatinous tissue is the best part — soft, intensely flavored, coating. The glaze on the rice is the final pleasure.',
            tip: 'Do not be tentative with the eye itself. It tastes nothing like what hesitation imagines. Firm, clean, with an oceanic richness that is completely its own.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
