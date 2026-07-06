'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-xoai-rau-bach-tuoc',
    title: 'Green Mango & Octopus Tentacle Salad',
    subtitle: 'Gỏi xoài râu bạch tuộc — dai giòn, chua cay, tươi mát, đầy cá tính.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=1600&q=85',
    intro: `Goi xoai rau bach tuoc is the salad that belongs on a coastal terrace with the sea wind coming in and a cold Saigon beer sweating on the table. Green mango — sour, crisp, uncompromising — meets octopus tentacles cooked just long enough to be tender but still carrying that satisfying resistance when you bite through. The contrast is the whole point: the mango gives brightness and crunch; the octopus gives depth and chew; the dressing ties them together with fish sauce, lime, chilli, and a touch of roasted sesame oil that lifts everything.

This dish comes from the coastal street food culture of Southern Vietnam, where fresh seafood and tropical fruit collide without ceremony. Octopus tentacles — rau bach tuoc, literally octopus beard — are sold pre-cooked at market stalls, but cooking them fresh at home is straightforward and the result is dramatically better. The salad is assembled in minutes once the components are ready, and it needs to be eaten immediately: green mango releases water fast once dressed, and octopus loses its texture in acidity if left too long. This is a dish that rewards speed and punishes hesitation.`,
    ingredientSections: [
        {
            title: 'Bạch tuộc',
            items: [
                { amount: 400, unit: 'g', name: 'fresh octopus tentacles (râu bạch tuộc)', note: 'cleaned; or use whole small octopus cut into pieces' },
                { amount: 2, name: 'stalks lemongrass', note: 'bruised' },
                { amount: 3, name: 'slices fresh ginger' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for poaching water' },
                { amount: 1, unit: 'tsp', name: 'white vinegar', note: 'for poaching water — reduces seafood odour' },
            ],
        },
        {
            title: 'Xoài & rau',
            items: [
                { amount: 350, unit: 'g', name: 'green mango (xoài xanh)', note: 'firm and sour — peeled, julienned into thin matchsticks' },
                { amount: 1, name: 'medium carrot', note: 'peeled, julienned fine — for colour and crunch' },
                { amount: 20, unit: 'g', name: 'Vietnamese coriander (rau răm)', note: 'leaves only' },
                { amount: 10, unit: 'g', name: 'fresh mint leaves' },
                { amount: 3, name: 'shallots', note: 'sliced paper-thin' },
            ],
        },
        {
            title: 'Dressing',
            items: [
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2.5, unit: 'tbsp', name: 'fresh lime juice', note: 'about 2 limes' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'water' },
                { amount: 1, unit: 'tsp', name: 'roasted sesame oil', note: 'small amount — adds toasty depth without dominating' },
                { amount: 3, name: 'garlic cloves', note: 'minced fine' },
                { amount: 2, name: 'red bird\'s eye chillies', note: 'minced — seeds in for full heat' },
            ],
        },
        {
            title: 'To finish',
            items: [
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed in a mortar' },
                { amount: 2, unit: 'tbsp', name: 'fried shallots' },
                { amount: 1, unit: 'tbsp', name: 'toasted sesame seeds' },
                { amount: 2, name: 'fresh red chillies', note: 'sliced thin, for garnish' },
                { amount: 1, name: 'lime', note: 'cut into wedges, for serving' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean the octopus',
            description: 'Rinse the tentacles thoroughly under cold running water. If using whole octopus, remove the head and beak — cut the tentacles into individual pieces or leave in clusters of two to three. Rub with 1 tsp salt and rinse again. The surface should feel slightly tacky but not slimy.',
            tip: 'Fresh octopus should smell clean and oceanic. Any ammonia smell means it is past its best — do not use it for a raw-adjacent salad where the seafood flavour is front and centre.',
        },
        {
            title: 'Poach the octopus',
            description: 'Bring a pot of water to a boil with lemongrass, ginger, fish sauce, and white vinegar. Add the octopus tentacles and reduce to a gentle simmer immediately. Poach for 12–15 minutes for medium tentacles, 8–10 minutes for small ones. Test by pressing the thickest part — it should yield with slight resistance, not feel hard or rubbery. Remove and transfer to an ice bath for 5 minutes to stop cooking and firm the texture.',
            tip: 'Octopus texture follows a U-curve: it starts tough, becomes tender around 12–15 minutes, then toughens again if overcooked. Pull it the moment it yields to gentle pressure.',
        },
        {
            title: 'Slice the octopus',
            description: 'Drain the chilled tentacles and pat dry. Slice on a diagonal into pieces roughly 1cm thick — the diagonal cut exposes more surface area for the dressing to cling to and makes each piece look more elegant on the plate. Set aside.',
        },
        {
            title: 'Prepare the mango',
            description: 'Peel the green mango and julienne into thin matchsticks 4–5cm long. Toss with a pinch of salt, leave 5 minutes, then squeeze gently to remove excess water. Julienne the carrot to the same size. Slice the shallots paper-thin and soak in cold water for 5 minutes to take the edge off — drain and pat dry.',
        },
        {
            title: 'Make the dressing',
            description: 'Combine fish sauce, lime juice, sugar, and water in a small bowl. Stir until sugar dissolves. Add sesame oil, minced garlic, and chilli. Taste — the dressing should be bright and punchy with the sesame oil as a background note, not a foreground flavour. Adjust lime and fish sauce to balance.',
            tip: 'The sesame oil is measured in a teaspoon for a reason. Too much and it turns the dressing heavy and nutty, which fights the freshness of the mango and the clean flavour of the octopus.',
        },
        {
            title: 'Assemble and serve',
            description: 'In a large bowl, combine mango, carrot, shallots, rau ram, and mint. Pour two-thirds of the dressing over and toss well. Add the octopus pieces and toss gently — do not crush the tentacle slices. Taste and add more dressing as needed. Transfer to a wide serving plate. Scatter crushed peanuts, fried shallots, sesame seeds, and fresh chilli over the top. Add lime wedges alongside. Serve immediately.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
