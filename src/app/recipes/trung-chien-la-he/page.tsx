'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trung-chien-la-he',
    title: 'Trứng Chiên Lá Hẹ (Fried Egg with Garlic Chives)',
    subtitle: 'Eggs beaten with fresh garlic chives and a small amount of fish sauce, fried in a generous amount of oil over high heat until the edges blister and crisp while the center stays soft — the southern Vietnamese everyday egg dish that is ready in four minutes and tastes of nothing but egg, chive, and the specific character of good hot oil.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.8,
    baseServings: 2,
    heroImage: '/images/recipes/trung-chien-la-he.jpg',
    intro: `Trứng chiên lá hẹ is the garlic chive omelette of southern Vietnamese everyday cooking — a dish so simple that it barely qualifies as a recipe and yet so specifically satisfying that it appears on dinner tables across the south several times a week, whenever the question "what should we make?" is answered by whatever is in the refrigerator and the time available is less than ten minutes. Lá hẹ — garlic chives, Allium tuberosum — are the flat-leafed, garlicky-oniony herb that appears throughout Vietnamese and Chinese cooking, with a flavor that is simultaneously more pungent than spring onion and less sharp than raw garlic, providing a specific aromatic character that neither substitute produces. The southern Vietnamese version of this dish is fried in more oil than most Western omelette recipes use — enough oil that the egg batter floats slightly in the pan rather than lying flat against it, which produces the specific texture that defines trứng chiên lá hẹ: edges that blister into a lacework of crispy, oily bubbles while the center remains soft and barely set. This contrast between the blistered crispy edge and the soft center is not accidental — it is the specific result that the generous oil quantity produces and that less oil cannot achieve. The fish sauce beaten into the eggs before frying is the seasoning that makes this Vietnamese rather than Chinese or generic: a small amount, just enough to season without making the egg taste of fish sauce, producing the specific savory depth that Vietnamese fried eggs carry and that salt alone does not provide. Trứng chiên lá hẹ is eaten with plain steamed rice and whatever else is on the table — it is a supporting dish, never the centerpiece, and yet it is the dish that many Vietnamese people would choose as their last meal if pressed.`,
    ingredientSections: [
        {
            title: 'Omelette',
            items: [
                { amount: 4, name: 'large eggs' },
                { amount: 80, unit: 'g', name: 'fresh garlic chives (lá hẹ)', note: 'cut into 3cm pieces — stems and leaves included. Garlic chives are flat-leafed with a garlicky-onion character. Substitute: spring onion greens if unavailable, though the character is different.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'the Vietnamese seasoning that distinguishes this from plain chive omelette' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'small amount — balances the fish sauce' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'generous — the blistered edge requires more oil than a standard omelette. Do not reduce.' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, unit: 'portions', name: 'steamed jasmine rice', note: 'hot — the omelette is eaten over rice' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'additional — for drizzling over the finished omelette' },
                { amount: 1, name: 'fresh red chili, sliced' },
                { amount: 1, name: 'lime wedge' },
            ],
        },
    ],
    steps: [
        {
            title: 'Beat the eggs with fish sauce',
            description: 'Crack the eggs into a bowl. Add fish sauce, black pepper, and sugar. Beat with a fork or chopsticks until completely combined — the yolks and whites fully incorporated and the mixture uniform in color. Add the garlic chive pieces and stir to distribute evenly throughout the egg mixture. The batter should be well-seasoned — taste a small amount from the spoon. It should taste noticeably of egg, clearly of the chive, and have a savory fish sauce background without tasting specifically of fish sauce.',
            tip: 'Tasting the raw egg mixture before frying is the only quality check available before the omelette is committed to the pan. The seasoning cannot be adjusted after frying. The fish sauce proportion — 1 tablespoon per 4 eggs — is the starting point; adjust based on the saltiness of your specific fish sauce.',
        },
        {
            title: 'Heat the oil until genuinely hot',
            description: 'Heat 4 tablespoons of neutral oil in a medium wok or non-stick pan over high heat until the oil shimmers and a small drop of egg mixture dropped in sizzles immediately and puffs. The oil must be genuinely hot before the egg goes in — this is the condition that produces the blistered edge. Cold oil produces a flat, slightly rubbery omelette that absorbs oil without crisping.',
            tip: 'The test for correct oil temperature for trứng chiên lá hẹ: dip a chopstick into the egg batter and touch it to the oil surface. If it sizzles immediately and a small bubble of egg puffs and crisps within 3 seconds, the oil is at the correct temperature. If it sizzles weakly or slowly, wait 30 more seconds.',
        },
        {
            title: 'Pour and fry — do not touch for 90 seconds',
            description: 'Pour the egg-chive batter into the hot oil in one motion. It will sizzle loudly and immediately begin to puff at the edges. Do not touch, stir, or move the omelette for 90 seconds. During this time the edges will blister into a lacework of crispy, golden-oil bubbles and the underside will set and brown. After 90 seconds, the edges should be visibly crispy and lacy and the center still slightly liquid.',
            tip: 'The 90-second undisturbed frying is the technique that produces the blistered lacy edge. Touching or moving the omelette during this period pops the oil bubbles before they can set into the crispy lacework. The sound during the first 90 seconds — aggressive sizzling that gradually quiets as the egg sets — is the audio indicator of correct progress.',
        },
        {
            title: 'Fold or flip',
            description: 'After 90 seconds, the omelette has two options: fold it in half with a spatula for a half-moon presentation, or flip it whole for 30 seconds to set the top surface. The southern Vietnamese style is typically folded — one half folded over the other, with the soft, barely-set center now enclosed by the two crispy bottom surfaces. Slide immediately onto the serving plate.',
            tip: 'The folded omelette holds the soft center enclosed between two crispy surfaces — this is the texture the dish is built for. A flipped whole omelette produces crispy on both sides with a firmer center. Both are correct; the folded version produces the more dramatic contrast between the crispy exterior and the soft interior.',
        },
        {
            title: 'Serve immediately over rice',
            description: 'Slide the omelette onto a plate. Drizzle a small amount of additional fish sauce over the surface. Scatter sliced red chili. Serve immediately alongside hot steamed rice. The eating: cut or break pieces from the omelette with chopsticks, place over rice, eat together. The crispy blistered edge, the soft chive-egg center, and the plain rice are the complete experience. The fish sauce drizzled over at the end adds a final aromatic note.',
            tip: 'Trứng chiên lá hẹ must be eaten immediately — within 3 minutes of leaving the pan. The crispy blistered edge softens quickly from the retained steam of the soft center. The experience of eating it at its peak — the shattering crispy edge against the soft inside — is a completely different dish from the same omelette eaten 10 minutes later. Cook it last, eat it first.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
