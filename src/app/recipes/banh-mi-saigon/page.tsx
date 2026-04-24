'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-mi-saigon',
    title: 'Saigon Banh Mi',
    subtitle: 'The greatest sandwich in the world — a French baguette that became entirely Vietnamese.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85',
    intro: `The French brought the baguette to Vietnam in the 19th century. Vietnam took it, made the crust thinner and shatteringly crisp, the crumb lighter and more airy, and then filled it with things no French baker ever imagined: pate, cha lua, pickled daikon and carrot, fresh cucumber, coriander, sliced chilli, and maggi seasoning sauce. The result is one of the greatest street foods on earth — a five-minute assembly that somehow contains every flavour and texture simultaneously. This recipe covers the classic Saigon version: thit nguoi (cold cuts), but the format works with grilled pork, fried egg, or sardines.`,
    ingredientSections: [
        {
            title: 'The bread',
            items: [
                { amount: 4, name: 'Vietnamese baguettes (banh mi)', note: 'light, airy, shatteringly crisp crust; substitute small French baguettes if unavailable' },
            ],
        },
        {
            title: 'Spreads',
            items: [
                { amount: 4, unit: 'tbsp', name: 'pork liver pate', note: 'canned or homemade' },
                { amount: 4, unit: 'tbsp', name: 'mayonnaise', note: 'Kewpie preferred' },
                { amount: 1, unit: 'tsp', name: 'Maggi seasoning sauce', note: 'drizzled inside' },
            ],
        },
        {
            title: 'Fillings',
            items: [
                { amount: 150, unit: 'g', name: 'cha lua (Vietnamese pork sausage)', note: 'thinly sliced' },
                { amount: 100, unit: 'g', name: 'cold roast pork or char siu', note: 'thinly sliced' },
                { amount: 50, unit: 'g', name: 'head cheese (gio thu)', note: 'optional' },
            ],
        },
        {
            title: 'Pickles and fresh',
            items: [
                { amount: 1, name: 'small cucumber', note: 'cut into thin spears' },
                { amount: 80, unit: 'g', name: 'pickled daikon and carrot (do chua)', note: 'see tip' },
                { amount: 1, name: 'bunch fresh coriander', note: 'whole sprigs' },
                { amount: 2, name: 'red or green chillies', note: 'thinly sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make quick pickles',
            description: `Julienne daikon and carrot into thin matchsticks. Toss with 1 tsp salt and leave 10 minutes. Rinse, then soak in a mixture of 3 tbsp rice vinegar, 2 tbsp sugar, and 4 tbsp warm water for at least 20 minutes. The pickles should be tangy, lightly sweet, and still crunchy.`,
            tip: `Make pickles the night before — they improve significantly after a few hours. They keep in the fridge for 2 weeks.`,
        },
        {
            title: 'Toast the bread',
            description: `Split baguettes lengthwise without cutting all the way through. Toast cut-side down in a dry pan over medium heat for 1 to 2 minutes until golden and crisp, or place whole in a 200C oven for 5 minutes. The crust should shatter when you bite it.`,
            tip: `Do not skip toasting. A cold, soft banh mi is a disappointing banh mi. The contrast between the shattering crust and the soft fillings is the entire point.`,
        },
        {
            title: 'Spread the base',
            description: `Spread pate on one inner side and mayonnaise on the other. Drizzle a few drops of Maggi seasoning inside. These three layers form the flavour foundation of every great banh mi.`,
        },
        {
            title: 'Layer the fillings',
            description: `Layer cha lua, roast pork, and head cheese if using. Add cucumber spears, a generous pinch of pickled daikon and carrot, whole coriander sprigs, and sliced chilli.`,
            tip: `Do not compress the fillings. Banh mi should be overfull and slightly chaotic — ingredients falling out is a sign of generosity, not poor assembly.`,
        },
        {
            title: 'Serve immediately',
            description: `Wrap in paper and eat within 5 minutes. Banh mi does not wait — the steam from the fillings softens the crust quickly. The first bite, taken standing up, is always the best one.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
