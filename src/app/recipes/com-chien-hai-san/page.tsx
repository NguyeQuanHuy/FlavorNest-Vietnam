'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-chien-hai-san',
    title: 'Lemongrass Pork Banh Mi',
    subtitle: 'A shatteringly crisp baguette — the greatest sandwich in the world.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1600&q=85',
    intro: `The French brought the baguette to Vietnam in the 19th century. Vietnam took it, made the crust thinner and more shattering, the crumb lighter, and then filled it with things no French baker ever imagined: pate, cha lua, pickled daikon, fresh coriander, sliced chilli, and Maggi seasoning sauce. The result is one of the greatest street foods on earth.`,
    ingredientSections: [
        {
            title: 'Lemongrass pork',
            items: [
                { amount: 400, unit: 'g', name: 'pork shoulder', note: 'thinly sliced' },
                { amount: 2, name: 'lemongrass stalks', note: 'white part, minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
            ],
        },
        {
            title: 'Assembly',
            items: [
                { amount: 4, name: 'Vietnamese baguettes' },
                { amount: 4, unit: 'tbsp', name: 'pork liver pate' },
                { amount: 4, unit: 'tbsp', name: 'mayonnaise', note: 'Kewpie preferred' },
                { amount: 80, unit: 'g', name: 'pickled daikon and carrot' },
                { amount: 1, name: 'cucumber', note: 'cut into spears' },
                { amount: 1, name: 'bunch fresh coriander' },
                { amount: 2, name: 'red chillies', note: 'sliced' },
                { amount: 1, unit: 'tsp', name: 'Maggi seasoning sauce' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the pork',
            description: 'Combine lemongrass, fish sauce, sugar, oyster sauce, and garlic. Toss sliced pork to coat. Marinate at least 30 minutes.',
        },
        {
            title: 'Grill the pork',
            description: 'Grill over high heat or in a very hot cast iron pan for 2 minutes per side until caramelised and slightly charred.',
            tip: 'The caramel char on the pork is everything. Do not crowd the pan — cook in batches.',
        },
        {
            title: 'Toast the bread',
            description: 'Split baguettes lengthwise. Toast cut-side down in a dry pan for 1 to 2 minutes until golden and crisp.',
        },
        {
            title: 'Assemble',
            description: 'Spread pate on one side, mayonnaise on the other. Drizzle Maggi inside. Layer grilled pork, pickled vegetables, cucumber, coriander, and chilli. Eat within 5 minutes.',
        },
    ],
};
export default function Page() { return <RecipeLayout recipe={recipe} />; } 
