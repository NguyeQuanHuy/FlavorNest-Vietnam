'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-cua',
    title: 'Gỏi Cua (Vietnamese Crab Salad)',
    subtitle: 'Fresh crab meat dressed in a lime-fish sauce vinaigrette with green mango, cucumber, Vietnamese herbs, and roasted peanuts — the coastal Vietnamese salad where crab is the centerpiece rather than a component.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/goi-cua.jpg',
    intro: `Gỏi cua is the Vietnamese crab salad — a dish that requires the best crab you can find and does almost nothing to obscure it. The crab meat is lightly dressed in a lime-fish sauce vinaigrette with just enough acidity to brighten its natural sweetness without overwhelming it. The shredded green mango or young coconut adds crunch and tartness. The fresh herbs — rau răm, mint, and culantro if available — add the herbal depth that turns dressed crab meat into a complete dish. Gỏi cua is associated particularly with the coastal provinces of central and southern Vietnam — Nha Trang, Phú Quốc, Vũng Tàu — where fresh crab is harvested daily and the morning market has piles of mud crabs and blue swimmer crabs still moving. The version from Nha Trang uses crab from the Khánh Hòa coast specifically, with young coconut as the crunchy element instead of mango. The version from the Mekong Delta uses river crab with more herbs and less mango. This recipe covers the central coast version — mud crab or blue swimmer, green mango, and a bright, herb-forward dressing.`,
    ingredientSections: [
        {
            title: 'Crab',
            items: [
                { amount: 500, unit: 'g', name: 'fresh cooked crab meat (thịt cua)', note: 'from 2 medium mud crabs or blue swimmer crabs, steamed and picked. Or 500g good-quality fresh crab meat from a fishmonger — never canned.' },
                { amount: 2, name: 'medium mud crabs or blue swimmer crabs', note: 'if cooking yourself: steam for 12-15 minutes, cool, pick the meat. Reserve any crab roe (gạch cua) — mix into the dressing.' },
            ],
        },
        {
            title: 'Salad',
            items: [
                { amount: 150, unit: 'g', name: 'green unripe mango', note: 'finely julienned — for crunch and tartness' },
                { amount: 1, name: 'cucumber', note: 'seeds removed, julienned' },
                { amount: 1, name: 'small carrot', note: 'finely julienned' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots' },
            ],
        },
        {
            title: 'Herbs',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)', note: 'leaves only — essential' },
                { amount: 0.5, name: 'bunch mint', note: 'leaves only' },
                { amount: 1, name: 'stalk culantro (ngò gai / saw-tooth herb)', note: 'thinly sliced — optional but adds depth' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Dressing',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2.5, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves, minced' },
                { amount: 1, name: 'bird\'s eye chili, minced' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 1, unit: 'tbsp', name: 'crab roe (gạch cua)', note: 'if available — stirred into the dressing for extra depth' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 8, name: 'prawn crackers or bánh phồng tôm', note: 'for scooping' },
                { amount: 2, name: 'limes, extra wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Cook and pick the crab',
            description: 'If cooking live crabs: place in freezer 15 minutes to sedate. Steam over boiling water with lemongrass and ginger in the steaming liquid — 12 minutes for medium crabs (800g each), 15 minutes for large. Cool under cold water. Remove the top shell, gills, and mustard (reserve the roe). Pick all the meat from the body and claws — use a skewer for the thin leg passages. The meat should come out in recognizable pieces, not shredded — pieces are better for a salad than fine shreds.',
            tip: 'Pick crab while still slightly warm — the meat separates more cleanly from the cartilage when warm. Cold picked crab from the refrigerator has more cartilage fragments mixed in.',
        },
        {
            title: 'Make the dressing with roe',
            description: 'Combine fish sauce, lime juice, sugar, and water. Stir until sugar dissolves. Add garlic, chili, and sesame oil. If you have crab roe, stir it into the dressing — it emulsifies and adds a rich, oceanic depth that elevates the entire salad. Taste: the dressing should be balanced and bright. For crab specifically, the dressing should be slightly less acidic than for mango or papaya salads — the crab sweetness is delicate.',
            tip: 'Crab roe in the dressing is the technique that distinguishes gỏi cua from other Vietnamese seafood salads. The roe carries the concentrated crab flavor into every element of the dish.',
        },
        {
            title: 'Prepare the vegetables',
            description: 'Julienne the green mango very finely — 2mm wide strips. Julienne the cucumber after removing the seeds. Julienne the carrot. Keep all three vegetables in separate small piles — they go into the bowl together but are easier to portion if kept separate until assembly.',
            tip: 'The vegetables should be julienned finer than the crab pieces — this prevents the vegetables from dominating the texture. The crab is the main event; the vegetables are the supporting crunch.',
        },
        {
            title: 'Assemble gently',
            description: 'In a wide bowl, combine the crab meat, green mango, cucumber, carrot, and all the herbs. Pour the dressing over. Toss very gently — crab meat breaks apart easily and the goal is to maintain identifiable pieces rather than shredded strings. Every element should be lightly coated with dressing. Taste and adjust.',
            tip: 'Toss gently with two large spoons using a folding motion rather than mixing. Aggressive tossing breaks the crab into fibers. The visual appeal of gỏi cua depends on visible crab pieces.',
        },
        {
            title: 'Plate and finish',
            description: 'Arrange on a serving plate. Top generously with crushed peanuts and fried shallots. Serve immediately with prawn crackers and lime wedges. Gỏi cua must be eaten within 15-20 minutes of dressing — the crab and mango both release moisture quickly and the salad becomes watery if left.',
            tip: 'For a restaurant-style presentation: mound the salad in the center of the plate, arrange the crackers around the edge as scoops, scatter the peanuts and shallots over the top at the last moment. The visual contrast of the white crab, green mango, orange carrot, and dark green herbs is the complete gỏi cua image.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}