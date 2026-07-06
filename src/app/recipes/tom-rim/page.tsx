'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-rim',
    title: 'Caramelised Savory Shrimp',
    subtitle: 'Tom Rim Man Ngot — whole shrimp simmered in a sticky, garlic-infused fish sauce caramel until the shells turn lacquered.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/tom-rim.jpg',
    intro: 'Tom rim man ngot is the dish that disappears fastest at a Vietnamese family dinner. Shrimp are cooked whole, heads and shells on, because that is where the flavour lives. A short caramel of palm sugar and fish sauce clings to every curve; garlic and a whisper of chilli round it out. Serve over plain white rice and it becomes impossible to stop eating.',
    ingredientSections: [
        {
            title: 'Shrimp',
            items: [
                { amount: 500, unit: 'g', name: 'medium whole shrimp', note: 'heads on, deveined through the shell' },
                { amount: 1, unit: 'tsp', name: 'fish sauce', note: 'for marinating' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Caramel sauce',
            items: [
                { amount: 2, unit: 'tbsp', name: 'palm sugar', note: 'or light brown sugar' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'water' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'thinly sliced' },
                { amount: 1, name: 'bird eye chilli', note: 'sliced, optional' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 2, name: 'spring onions', note: 'sliced for garnish' },
                { amount: 0.25, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the shrimp',
            description: 'Pat the shrimp dry with paper towels. Toss with 1 tsp fish sauce and white pepper. Set aside for 10 minutes.',
            tip: 'Drying the shrimp is key. Surface moisture steams instead of sears and you lose the caramelisation.',
        },
        {
            title: 'Build the caramel',
            description: 'In a small bowl, stir together palm sugar, 2 tbsp fish sauce, and water until the sugar dissolves.',
        },
        {
            title: 'Fry the aromatics',
            description: 'Heat oil in a wide wok over high heat until shimmering. Add shallots and fry 90 seconds until golden. Add garlic and chilli, toss 30 seconds until fragrant.',
            tip: 'High heat matters. If the wok is not hot enough, the aromatics stew instead of fry.',
        },
        {
            title: 'Sear the shrimp',
            description: 'Add shrimp in a single layer. Do not touch for 1 minute so the undersides colour. Flip and sear the other side for 45 seconds.',
        },
        {
            title: 'Glaze and reduce',
            description: 'Pour the caramel sauce over the shrimp. Toss continuously over high heat for 1 to 2 minutes until the sauce thickens into a sticky glaze that clings to the shells.',
            tip: 'It goes from perfectly glazed to burnt very quickly. Stay close and keep tossing.',
        },
        {
            title: 'Serve',
            description: 'Transfer immediately to a plate. Scatter spring onions on top and crack black pepper over everything. Serve alongside plain steamed rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}