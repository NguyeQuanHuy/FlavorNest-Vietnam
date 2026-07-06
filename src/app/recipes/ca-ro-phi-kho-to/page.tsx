'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-ro-phi-kho-to',
    title: 'Cá Rô Phi Kho Tộ (Tilapia Braised in Clay Pot)',
    subtitle: 'Tilapia sections caramelized in dark sugar then braised in a clay pot with old ginger, fresh turmeric, and fish sauce until the sauce reduces to a thick, dark glaze — the everyday Vietnamese kho that is simpler than catfish kho tộ and more forgiving, producing a deeply flavored result in 25-30 minutes with ingredients always in the pantry.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-ro-phi-kho-to.jpg',
    intro: `Cá rô phi kho tộ is the tilapia clay pot braise — the weeknight version of kho tộ that uses tilapia's affordability, availability, and forgiving lean flesh to produce the specific dark, concentrated sauce of the kho technique in less time and with less technique than the catfish or pork versions require. Kho tộ — braising in a clay pot (tộ) until the sauce reduces to a glaze — is one of the most fundamental techniques in Vietnamese home cooking, and cá rô phi is the fish that Vietnamese families return to most reliably for the weeknight kho because the firm white flesh holds together during the braising period without breaking apart, absorbs the caramel and fish sauce seasoning through the scored surface during cooking, and provides a neutral backdrop for the ginger and black pepper that are the aromatics which most specifically define this preparation. The ginger in cá rô phi kho tộ is old ginger — gừng già — and it is used in a quantity that seems generous but is calibrated specifically for the mild, clean flavor of tilapia: where catfish kho tộ uses 60g of ginger per 700g of fish, tilapia kho tộ uses a similar proportion because the ginger is doing more of the aromatic work against a milder fish. The fresh turmeric that appears in the marinade and the braise is the element that gives cá rô phi kho tộ its specific golden color — the deep mahogany of the caramel shot through with the gold of the turmeric produces the visual character that makes the dish recognizable at a glance. Black pepper, added both during braising and freshly ground over the finished dish, is the spice that most clearly defines Vietnamese fish kho as distinct from pork or egg kho — its heat against the sweet caramel-fish sauce combination and the warm ginger is the specific character of this preparation at its most Vietnamese.`,
    ingredientSections: [
        {
            title: 'Tilapia',
            items: [
                { amount: 700, unit: 'g', name: 'tilapia sections (cá rô phi chặt khúc)', note: 'bone-in, 5-6cm sections. Score each section once on each exposed side — allows sauce penetration during braising.' },
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce', note: 'for pre-marinating' },
                { amount: 1, unit: 'tsp', name: 'fresh turmeric, grated', note: 'or 0.5 tsp dried turmeric' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Kho base',
            items: [
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'for the dark caramel' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 60, unit: 'g', name: 'old ginger (gừng già)', note: 'peeled, cut into thick matchsticks' },
                { amount: 4, name: 'garlic cloves', note: 'smashed' },
                { amount: 3, name: 'shallots', note: 'halved' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'whole' },
                { amount: 20, unit: 'g', name: 'fresh turmeric', note: 'sliced — additional for the braise' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'dark soy sauce', note: 'for color depth' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'additional balance' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'coarsely ground — generous for fish kho' },
                { amount: 150, unit: 'ml', name: 'water' },
                { amount: 100, unit: 'ml', name: 'young coconut water', note: 'optional — adds the Mekong sweetness. Substitute with additional water.' },
            ],
        },
        {
            title: 'Garnish and to serve',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced — added at the end' },
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'freshly ground — finishing seasoning' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice', note: 'plain and hot' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the tilapia',
            description: 'Score each tilapia section once on each exposed side — not as deeply as for frying, just through the skin into the upper flesh layer. Combine with fish sauce, grated turmeric, black pepper, and sugar. Toss gently. Leave 15 minutes. The turmeric transforms the tilapia surface from white to golden-orange, addresses any mild fishiness, and provides the color base that the caramel and braising liquid will deepen further.',
            tip: 'The scoring for kho is shallower than for frying — a single cut per side rather than the deep scores used in chiên. The kho sauce penetrates through the cut during the 25-30 minute braise; the frying oil needs deeper cuts to reach the bone in the shorter frying time. Different techniques require different scoring depths.',
        },
        {
            title: 'Build the dark caramel',
            description: 'In a clay pot over medium heat, combine oil and sugar. Leave until the edges melt. Swirl to an even deep amber — close to the darkest possible without burning. Add 2 tablespoons of water carefully. Swirl until dissolved. The dark caramel for tilapia kho should be as dark as for catfish kho — the mild tilapia needs the caramel to do significant color and flavor work that a paler caramel cannot achieve.',
            tip: 'The same very dark caramel for both tilapia and catfish kho tộ is the approach that produces visually similar and similarly complex results from two different proteins. A lighter caramel produces flat-tasting, pale kho regardless of the fish used.',
        },
        {
            title: 'Fry aromatics and sear tilapia',
            description: 'Add ginger matchsticks, smashed garlic, halved shallots, sliced turmeric, and whole chilies to the caramel. Fry 2 minutes until ginger edges caramelize. Add the marinated tilapia sections skin-side down. Sear for 90 seconds without moving — the skin will caramelize against the caramel and the pot surface. Flip gently and sear the other side 60 seconds. The tilapia sections should be coated in dark caramel and beginning to caramelize on the surface.',
            tip: 'Tilapia sections require a gentler sear than catfish in kho — 90 seconds rather than 2 minutes — because the lean flesh firms and sets faster and does not need extended high-heat contact to caramelize effectively. The goal is a caramelized surface, not a deep sear.',
        },
        {
            title: 'Braise — 20-25 minutes maximum',
            description: 'Add fish sauce, dark soy, sugar, black pepper, water, and coconut water around the tilapia sections. Bring to a boil, reduce to the lowest possible simmer. Braise uncovered for 20-25 minutes — turning the fish very gently once at 12 minutes. The tilapia is done when the sauce has reduced to a thick glaze and the fish sections hold their shape but the flesh flakes easily from the bone when pressed with a chopstick.',
            tip: 'The 20-25 minute maximum for tilapia kho is shorter than for catfish (30-35 minutes) because tilapia is leaner and cooks through faster, and because the sections are more prone to breaking apart if braised beyond this time. At 20 minutes the tilapia sections should be perfectly cooked with a thick, dark sauce; at 30 minutes they will be dry and starting to fall apart.',
        },
        {
            title: 'Finish and serve from the clay pot',
            description: 'Add shredded kaffir lime leaves and sliced spring onion. Grind black pepper generously over the surface — fish kho needs more finishing pepper than meat kho because the pepper heat is the primary spice note in the finished dish. Bring the clay pot directly to the table. The kho sauce — dark, glossy, infused with ginger warmth, caramel depth, and fresh turmeric gold — spooned over plain hot rice is the most satisfying element of the meal.',
            tip: 'The finishing black pepper on cá rô phi kho tộ should be genuinely generous — a full teaspoon freshly ground over the surface of the pot before it goes to the table. Vietnamese fish kho is specifically a pepper-forward preparation where the heat of black pepper against the sweet caramel-fish sauce provides the tension that makes the dish interesting rather than merely sweet and savory.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
