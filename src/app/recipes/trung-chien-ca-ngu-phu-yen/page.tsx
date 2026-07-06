'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trung-chien-ca-ngu-phu-yen',
    title: 'Tr?ng Chiên Cá Ng? Phú Yên (Phú Yên Tuna and Egg Fry)',
    subtitle: 'Fresh ocean tuna from Phú Yên\'s hand-line fleet sliced thin and folded into beaten eggs with m?m nhi and spring onion — fried in generous oil until the edges blister and the tuna pieces caramelize against the egg, served with mu?i lá é and sesame crackers.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/trung-chien-ca-ngu-phu-yen.jpg',
    intro: `Tr?ng chiên cá ng? Phú Yên is the tuna omelette of the province's fishing port — a preparation born at the Tuy Hòa harbor where the hand-line fishing boats come in with their yellowfin and bigeye catch and where the fishermen and the market vendors eat the smallest, most broken pieces of the fresh tuna in the simplest possible way: beaten into eggs with m?m nhi, fried in hot oil, eaten with rice. The preparation is informal to the point of being barely a recipe, yet it achieves something specific that neither plain fried egg nor simple pan-fried tuna achieves separately. The tuna pieces — sliced thin so they cook through in the brief frying time — caramelize at their edges against the hot oil and take on a specific slightly charred quality that contrasts with the soft beaten egg surrounding them. The m?m nhi beaten into the eggs before frying does what it always does in Phú Yên cooking: adds a depth and sweetness that standard fish sauce cannot replicate, producing an egg that tastes of the sea without tasting specifically of fish sauce. The spring onion provides the aromatic freshness that the preparation needs — without it the egg-tuna combination is rich and heavy; with it the omelette carries a clean onion note that lifts every bite. The mu?i lá é served alongside is the Phú Yên condiment applied to a new format — not alongside grilled protein or steamed shellfish but alongside a fried egg, where its wild citrus-pepper character provides exactly the same aromatic dimension that it provides in every other preparation it accompanies. Tr?ng chiên cá ng? Phú Yên is the harbor breakfast and the fisherman\'s quick meal, and it is one of the most complete expressions of what the province does with its finest ingredient at its most abundant.`,
    ingredientSections: [
        {
            title: 'Omelette',
            items: [
                { amount: 4, name: 'large eggs' },
                { amount: 150, unit: 'g', name: 'fresh sashimi-grade tuna (cá ng? d?i duong)', note: 'sliced 3-4mm thin — from the belly or loin. The same quality as used for tái cá ng?. Freshness is critical.' },
                { amount: 1.5, unit: 'tbsp', name: 'm?m nhi (Phú Yên first-press fish sauce)', note: 'beaten into the eggs — the defining seasoning' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced — both white and green parts' },
                { amount: 1, name: 'shallot', note: 'thinly sliced' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'generous — for the blistered edge' },
            ],
        },
        {
            title: 'Mu?i lá é',
            items: [
                { amount: 15, unit: 'g', name: 'fresh lá é leaves' },
                { amount: 1, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'bird\'s eye chili' },
                { amount: 2, name: 'limes' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 8, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch fresh lá é leaves' },
                { amount: 1, name: 'bunch rau ram' },
                { amount: 2, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 1, name: 'cucumber, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Slice the tuna and beat the eggs',
            description: 'Slice the fresh tuna against the grain into 3-4mm pieces — thin enough to cook through in the 90-second frying time. Beat the eggs with m?m nhi, black pepper, and sugar until completely combined. Add the sliced spring onion and shallot. Fold in the tuna slices gently — each piece should remain intact and be distributed evenly through the egg mixture rather than breaking into fragments.',
            tip: 'The tuna slices must be thin enough to cook through when the egg sets — 3-4mm is the correct thickness. Thicker pieces remain raw in the center while the egg around them is already cooked. The brief frying time of this preparation means the tuna cooks entirely from the heat of the surrounding egg and oil rather than from direct heat.',
        },
        {
            title: 'Pound the mu?i lá é',
            description: 'Pound lá é leaves with salt, pepper, sugar, and chili until intensely green and fragrant. Transfer to plates. Squeeze lime at the table. Prepare before frying — the omelette must be eaten immediately.',
            tip: 'Preparing the mu?i lá é before the omelette goes into the pan ensures everything is ready for the immediate serving that tr?ng chiên requires. The condiment cannot be made after frying without losing the critical eating window of the freshly fried egg.',
        },
        {
            title: 'Heat oil to smoking and fry — 90 seconds undisturbed',
            description: 'Heat oil in a wok or pan over maximum heat until genuinely smoking. Pour the tuna-egg mixture in one motion. Do not touch for 90 seconds — the edges will blister into crispy lacework exactly as in tr?ng chiên lá h?. The tuna pieces visible through the egg will begin to caramelize at their edges during this period. After 90 seconds, the edges are crispy and the center is still soft.',
            tip: 'The tuna pieces at the edges of the omelette — where they contact the hot oil directly — will develop a slightly charred, caramelized surface in the 90-second undisturbed frying. This caramelization is specific to tuna and does not occur with lighter proteins like shrimp or chicken. It is the most flavorful moment in the preparation and the visual marker of a correctly made tr?ng chiên cá ng?.',
        },
        {
            title: 'Fold and serve immediately',
            description: 'Fold the omelette in half with a spatula. Slide onto a plate. The omelette should show: crispy blistered edges, visible tuna pieces with caramelized surface, soft egg center. Serve immediately with mu?i lá é, sesame crackers, fresh lá é leaves, rau ram, and rice. To eat the Phú Yên way: break a piece of omelette onto a sesame cracker, add a raw lá é leaf, dip in lime-squeezed mu?i lá é. The same cracker-leaf-salt ritual from the province\'s grilled and steamed preparations — applied here to a fried egg.',
            tip: 'Applying the Phú Yên sesame cracker ritual to tr?ng chiên cá ng? is the specific move that makes this preparation provincial rather than generic. The cracker adds crunch; the lá é leaf adds the wild aromatic dimension; the mu?i lá é brings everything together. A tuna omelette eaten this way is a different eating experience from the same omelette eaten with plain rice alone.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
