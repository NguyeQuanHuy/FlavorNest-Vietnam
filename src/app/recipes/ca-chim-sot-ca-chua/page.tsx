'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-chim-sot-ca-chua',
    title: 'Cá Chim Sốt Cà Chua (Pomfret in Tomato Sauce)',
    subtitle: 'Whole pomfret fried until crisp then braised in a vibrant Vietnamese tomato sauce with garlic, spring onion, and dill — the northern Vietnamese fish dish where French tomato sauce technique meets Vietnamese fish cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-chim-sot-ca-chua.jpg',
    intro: `Cá chim sốt cà chua is the pomfret dish that northern Vietnamese home cooks have been making since French tomato sauce technique entered Vietnamese cooking in the colonial era and was immediately adopted, adapted, and made entirely Vietnamese. The French element is the concept of braising fish in a tomato sauce. The Vietnamese elements are everything else: the fish sauce seasoning, the spring onion and dill (the northern Vietnamese herbs that appear specifically with fish), the fish fried first for a crispy exterior before the sauce is added, and the balance of the tomato sauce — brighter, fresher, and more acidic than any French tomato preparation. Cá chim — pomfret — is the fish most associated with this preparation in Vietnam. Its firm, sweet white flesh holds up to both the initial frying and the subsequent braising without falling apart. The sauce clings to the crispy exterior of the fried fish, softening it slightly to a texture that is neither fried nor braised but specifically Vietnamese. Served over broken rice or plain jasmine rice, with the bright tomato sauce soaking into the grains.`,
    ingredientSections: [
        {
            title: 'Fish',
            items: [
                { amount: 1, name: 'whole pomfret (cá chim), 600-800g', note: 'cleaned and scaled. Ask the fishmonger to score the fish 3-4 times on each side. Substitute: seabream, snapper, or any firm white-fleshed whole fish.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for marinating' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the golden color to the fried fish' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'for frying' },
            ],
        },
        {
            title: 'Tomato sauce',
            items: [
                { amount: 4, name: 'medium tomatoes', note: 'roughly chopped. Or 1 x 400g can whole tomatoes, drained and roughly crushed.' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 100, unit: 'ml', name: 'water or light fish stock' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Herbs and garnish',
            items: [
                { amount: 1, name: 'large bunch fresh dill (thì là)', note: 'the essential herb — cut into 3cm pieces' },
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces' },
                { amount: 1, name: 'fresh red chili, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the fish',
            description: 'Rub the scored fish inside and out with fish sauce, turmeric, and black pepper. Leave for 15 minutes. Pat the outside of the fish completely dry with paper towels before frying — any moisture on the surface will cause the oil to spit violently and prevent the skin from crisping.',
            tip: 'Drying the fish after marinating is the step most people skip. Wet fish skin steam-fries rather than crisping, and the skin tears and sticks to the pan.',
        },
        {
            title: 'Fry the fish until crispy',
            description: 'Heat oil in a wide pan over medium-high heat until shimmering. Carefully place the fish in the pan — lay it away from you to prevent splashing. Fry without moving for 4-5 minutes until the underside is deeply golden and the skin is crisp. The fish will release from the pan naturally when the crust has formed — if it sticks, it is not ready to turn. Flip carefully using two spatulas and fry the other side for 4 minutes.',
            tip: 'Do not move the fish during frying. The crust releases naturally when it is ready. Trying to force it earlier tears the skin. Two spatulas for flipping a whole fish prevents it from breaking.',
        },
        {
            title: 'Build the tomato sauce',
            description: 'Remove the fish to a plate. In the same pan, add oil and fry the minced shallots and garlic over medium heat for 2 minutes until softened. Add the chopped tomatoes. Cook for 5-6 minutes, pressing down on the tomatoes with a spatula, until they break down into a rough sauce. Season with fish sauce, sugar, and black pepper. Add water or stock. The sauce should be bright, slightly chunky, and taste acidic-savory with a clean sweetness.',
            tip: 'Cooking the tomatoes down properly — not just warming them — is what produces a sauce rather than soup. Press the tomatoes actively with the spatula to break them down.',
        },
        {
            title: 'Return fish to the sauce',
            description: 'Gently place the fried fish back into the tomato sauce. Spoon the sauce over the top of the fish. Cover with a lid and simmer over medium-low heat for 8-10 minutes, basting the fish with the sauce 2-3 times. The fish is cooked through when the flesh at the thickest point (behind the head) flakes easily when pressed with a chopstick.',
            tip: 'The braising time is short because the fish was already largely cooked during frying. Over-braising produces dry, flaky fish that falls apart. 8-10 minutes is the maximum.',
        },
        {
            title: 'Add dill and spring onion',
            description: 'In the last 2 minutes of cooking, scatter the spring onion pieces and two-thirds of the dill directly over the fish. Cover for 90 seconds — the herbs wilt into the sauce and release their fragrance. Remove the lid and taste the sauce — adjust with a few drops more fish sauce or a pinch of sugar if needed.',
            tip: 'Dill must be added at the very end. Dill cooked for more than 2 minutes loses almost all its fragrance. The combination of wilted dill (which has flavored the sauce) and fresh dill (scattered raw at serving) produces the full range of the herb.',
        },
        {
            title: 'Serve from the pan',
            description: 'Bring the pan to the table. Scatter the remaining fresh dill, sliced chili, and spring onion over the fish. Serve with lime wedges and steamed rice. The sauce should be spooned generously over the rice. Cá chim sốt cà chua is a shared dish — the whole fish is placed at the center of the table and each diner serves themselves.',
            tip: 'Serving directly from the cooking pan keeps the dish hot longest and is the traditional presentation. The bright red tomato sauce against the golden fish skin is one of the most visually appealing dishes in Vietnamese home cooking.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
