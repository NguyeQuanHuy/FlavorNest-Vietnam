'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-coc',
    title: 'Gỏi Cóc (Vietnamese Hog Plum Salad)',
    subtitle: 'Thinly sliced cóc — the sour green hog plum — tossed with dried shrimp, roasted peanuts, chili, and a sweet-sour fish sauce dressing. The most aggressively sour salad in Vietnamese street food, and the one with the most devoted following.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/goi-coc.jpg',
    intro: `Gỏi cóc is the Vietnamese street snack built around cóc — Spondias mombin, the hog plum, a small green tropical fruit with an extraordinarily assertive sourness that functions more like a seasoning than a fruit. In southern Vietnam, particularly in Saigon and the Mekong Delta, cóc is sold at every market and by street vendors who carry baskets of the small green fruits and slice them to order. The preparation is immediate: the cóc is sliced, shaken in a bag with chili salt, dried shrimp, crushed peanuts, and a few drops of fish sauce, and handed over in the bag. The diner eats from the bag with a small fork, standing at the market, squinting slightly from the sourness. Gỏi cóc is the Vietnamese snack that most reliably produces an immediate physical response — the saliva gland activation from the sourness is almost instantaneous. It is not subtle food. It is the food of hot afternoons and school gates and markets and exactly the kind of direct, uncomplicated pleasure that Vietnamese street food delivers most reliably. Outside Vietnam, cóc can sometimes be found at Vietnamese or Southeast Asian grocers. If unavailable, green mango is the closest substitute — different flavor but similar sour-crunchy character.`,
    ingredientSections: [
        {
            title: 'Main',
            items: [
                { amount: 500, unit: 'g', name: 'fresh cóc (hog plum / Spondias mombin)', note: 'firm, unripe, bright green. Available at Vietnamese grocers. If unavailable: substitute with very sour green mango or green apple — the flavor differs but the technique is the same.' },
                { amount: 40, unit: 'g', name: 'dried shrimp (tôm khô)', note: 'small, soaked 10 minutes in warm water, drained and squeezed dry' },
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'thinly sliced — gỏi cóc should be spicy' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots' },
            ],
        },
        {
            title: 'Dressing',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar', note: 'less sugar than other gỏi — the cóc sourness should remain dominant' },
                { amount: 1, unit: 'tbsp', name: 'fresh lime juice', note: 'adjust — cóc is already very sour, may need less lime than usual' },
                { amount: 1, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves, minced' },
            ],
        },
        {
            title: 'Chili salt (muối ớt)',
            items: [
                { amount: 1, unit: 'tsp', name: 'sea salt' },
                { amount: 2, name: 'bird\'s eye chilies, minced' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'lime, juiced', note: 'for the final drizzle at serving' },
            ],
        },
        {
            title: 'Herbs and garnish',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)', note: 'leaves only' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
                { amount: 2, name: 'extra limes for serving' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the cóc',
            description: 'Wash the cóc. Using a sharp knife or mandoline, slice each fruit into thin rounds or wedges — about 3-4mm thick. The seed inside is large relative to the fruit; slice around it. Some cóc can be sliced pole-to-pole into thin wedges that include the flesh on both sides of the seed, discarding the seed. The flesh should be pale green-white and firm. Taste a piece — the sourness should be immediate and strong. If it is mild, the cóc is slightly overripe; it will still work but the salad will be less assertive.',
            tip: 'The skin of cóc is slightly waxy and edible — do not peel. The texture contrast between the slightly resistant skin and the firm interior is part of the eating experience.',
        },
        {
            title: 'Make the chili salt',
            description: 'Pound salt and minced chili together in a mortar until combined into a rough paste. Add sugar and a squeeze of lime juice. The chili salt is the traditional seasoning for cóc eaten as a street snack — applied directly to the sliced fruit or used as a dipping element. It concentrates the chili heat and salt into a paste that sticks to the fruit surface.',
            tip: 'Chili salt applied directly to cóc draws out moisture from the fruit through osmosis — leave for 2 minutes and tiny droplets will appear on the cut surface. This is correct and adds to the juiciness.',
        },
        {
            title: 'Make the dressing',
            description: 'Combine fish sauce, sugar, lime juice, and water. Stir until sugar dissolves. Add minced garlic. Taste alongside a slice of cóc — the dressing should add savory depth and sweetness to balance the cóc sourness without eliminating it. If the cóc is extremely sour (which is correct), reduce the lime juice to a few drops only — the fruit provides all the acidity needed.',
            tip: 'Gỏi cóc dressing is the least acidic of all Vietnamese salad dressings because the ingredient provides all the acid. Calibrate the dressing against the actual sourness of your specific cóc.',
        },
        {
            title: 'Combine everything',
            description: 'In a large bowl, combine sliced cóc, soaked-and-dried shrimp, sliced chili, rau răm leaves, and spring onion. Pour the dressing over. Add a small amount of the chili salt paste. Toss to coat. Taste and adjust — it should be bracingly sour, savory from the fish sauce, sweet from the sugar, hot from the chili, and fragrant from the rau răm.',
            tip: 'The street food version is assembled in a plastic bag and shaken. At home in a bowl, toss gently and let the dressing coat the fruit for 2-3 minutes before serving — the cóc does not soften as fast as mango.',
        },
        {
            title: 'Plate and serve',
            description: 'Transfer to a plate. Top with crushed peanuts and fried shallots. Serve immediately. Gỏi cóc is eaten as it is — no crackers needed, no elaborate presentation. It is direct food: pick up a piece of cóc with the dried shrimp and peanuts, eat, repeat. The sourness is the point. Serve with extra lime wedges and chili salt on the side for those who want more of either.',
            tip: 'The experience of eating gỏi cóc for the first time — the immediate, almost aggressive sourness that makes the salivary glands respond before the food is even chewed — is one of the most distinctive sensory experiences in Vietnamese street food. Warn first-timers and watch their expression.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
