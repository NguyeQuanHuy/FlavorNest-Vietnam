'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-ca-linh',
    title: 'G?i Cá Linh (Mekong Anchovy Salad)',
    subtitle: 'The seasonal salad that the Mekong Delta makes only when the cá linh run — tiny silver fish caught in the flood season, eaten raw in a salad of fresh herbs, roasted peanuts, green mango, and a lime-fish sauce dressing that makes the bones invisible.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/goi-ca-linh.jpg',
    intro: `G?i cá linh is one of the most seasonal and place-specific dishes in Vietnamese cooking. Cá linh — a small freshwater fish related to the anchovy family — appears in the Mekong Delta only during the flood season (roughly August to November) when the Mekong overflows its banks and the fish ride the floodwaters upstream. For a few weeks, cá linh is everywhere in the delta — piled high in markets, cooked every way imaginable, eaten at every meal. G?i cá linh is the raw preparation: the tiny fish marinated in lime juice until the acid partially cooks the flesh, then tossed with a combination of fresh herbs, green mango, roasted peanuts, fried shallots, and a dressing of fish sauce and chili. The lime acid softens the bones of the small fish to the point where they are barely perceptible — eaten whole, bones and all. Outside the Mekong Delta, cá linh is difficult to find. This recipe uses fresh small anchovies or whitebait as a substitute — fish of similar size and fat content that behave the same way in the acid marinade.`,
    ingredientSections: [
        {
            title: 'Fish and marinade',
            items: [
                { amount: 400, unit: 'g', name: 'fresh cá linh or small anchovies / whitebait', note: 'extremely fresh — this is a raw preparation. If fresh cá linh unavailable, use very fresh small anchovies or whitebait (same size).' },
                { amount: 120, unit: 'ml', name: 'fresh lime juice', note: 'about 6-8 limes — must be fresh, not bottled' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Salad',
            items: [
                { amount: 1, name: 'small green mango (xoài xanh)', note: 'peeled and finely julienned — must be unripe, sour, and firm. About 150g julienned.' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed — not powder' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)', note: 'leaves only — the essential herb for this salad' },
                { amount: 1, name: 'bunch mint (húng l?i)', note: 'leaves only' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'thinly sliced' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Dressing',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 2, name: 'garlic cloves, minced' },
                { amount: 1, name: 'bird\'s eye chili, minced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 8, name: 'bánh tráng (rice crackers)', note: 'for scooping — lightly toasted or plain' },
                { amount: 1, name: 'head butter lettuce', note: 'for wrapping' },
            ],
        },
    ],
    steps: [
        {
            title: 'Source and inspect the fish',
            description: 'This is a raw fish preparation — freshness is the only non-negotiable. The fish must smell of the sea, not of fish. The eyes should be clear and bright. The flesh should be firm. If there is any doubt about freshness, do not make this dish. Buy from a trusted fishmonger and tell them explicitly that you are eating the fish raw.',
            tip: 'If fresh cá linh is unavailable, fresh small anchovies (3-5cm) are the closest substitute. Whitebait works but has a slightly different texture. Frozen fish is not suitable for this preparation.',
        },
        {
            title: 'Clean and marinate in lime',
            description: 'Rinse the fish under cold water. Remove heads if desired (traditionalists leave them on for small cá linh). Place in a non-reactive bowl (glass or ceramic — not metal). Pour lime juice over the fish, add salt, and toss to coat. The lime juice should just cover the fish. Leave to marinate at room temperature for 20-30 minutes. The flesh will turn from translucent to white-opaque as the acid denatures the proteins — this is the lime "cooking" the fish.',
            tip: 'The marinating time determines the texture. 20 minutes: slightly translucent center, very soft texture. 30 minutes: fully opaque, firmer texture. Do not over-marinate — beyond 45 minutes the texture becomes grainy.',
        },
        {
            title: 'Make the dressing',
            description: 'Whisk together fish sauce, lime juice, sugar, minced garlic, and chili until the sugar dissolves completely. Taste: it should be a balanced sweet-sour-salty combination with a clean chili heat. Adjust any element — more lime if it needs brightness, more sugar if too sharp, more fish sauce if too flat.',
            tip: 'Make the dressing before assembling the salad so it is ready to add immediately after draining the fish.',
        },
        {
            title: 'Julienne the green mango',
            description: 'Peel the unripe mango and cut into very fine julienne strips — 2mm thick, 5-6cm long. The mango must be genuinely unripe: hard, pale green-white inside, and sour when tasted. Ripe mango is too sweet and soft and changes the character of the salad completely.',
            tip: 'A mandoline or julienne peeler produces the most even strips. Uniform thin strips dress more evenly and have better texture than uneven chunks.',
        },
        {
            title: 'Drain the fish and assemble',
            description: 'Drain the marinated fish through a fine strainer, discarding the lime juice. The fish has taken on all the acid flavor it needs. In a large bowl, combine drained fish, julienned green mango, Vietnamese coriander leaves, mint leaves, sliced spring onion, and half the fried shallots. Pour the dressing over and toss gently. Taste and adjust seasoning.',
            tip: 'Toss gently — the marinated fish is delicate and aggressive tossing breaks it apart. Fold rather than stir.',
        },
        {
            title: 'Plate and serve immediately',
            description: 'Arrange the salad on a serving plate. Top with remaining fried shallots, crushed peanuts, and sliced chili. Serve with rice crackers for scooping and lettuce leaves for wrapping. G?i cá linh must be eaten immediately after assembling — it softens quickly as the dressing continues working on the fish.',
            tip: 'The rice cracker scoop is the traditional serving method — place a spoonful of salad on a cracker and eat in one bite. The crunch of the cracker against the soft fish is essential to the dish.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
