'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-mi-thit-nuong',
    title: 'Grilled Pork Banh Mi',
    subtitle: 'The sandwich that conquered the world from a Saigon sidewalk.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-mi-thit-nuong.jpg',
    intro: `Banh mi thit nuong is the grilled pork version of Vietnam's most famous sandwich — smoky lemongrass pork against shatteringly crisp baguette, pate, pickled daikon, fresh coriander and sliced chilli. It costs almost nothing to make and tastes extraordinary. The French gave Vietnam the baguette in the 19th century. Vietnam improved it — a thinner, airier crust, a lighter crumb — and then filled it with things no French baker ever imagined.`,
    ingredientSections: [
        {
            title: 'Grilled pork (thit nuong)',
            items: [
                { amount: 400, unit: 'g', name: 'pork shoulder', note: 'thinly sliced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'honey' },
                { amount: 2, name: 'lemongrass stalks', note: 'white part, minced' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Sandwich assembly',
            items: [
                { amount: 4, name: 'Vietnamese baguettes', note: 'or small French baguettes' },
                { amount: 4, unit: 'tbsp', name: 'pork liver pate' },
                { amount: 4, unit: 'tbsp', name: 'mayonnaise', note: 'Kewpie preferred' },
                { amount: 80, unit: 'g', name: 'pickled daikon and carrot (do chua)' },
                { amount: 1, name: 'cucumber', note: 'cut into thin spears' },
                { amount: 1, name: 'bunch fresh coriander' },
                { amount: 2, name: 'red chillies', note: 'thinly sliced' },
                { amount: 1, unit: 'tsp', name: 'Maggi seasoning sauce' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the pork',
            description: `Combine fish sauce, sugar, honey, lemongrass, garlic, oyster sauce, and sesame oil. Toss thinly sliced pork to coat evenly. Marinate at least 30 minutes, up to overnight in the fridge.`,
        },
        {
            title: 'Make quick pickles',
            description: `Julienne daikon and carrot. Toss with 1 tsp salt, rest 10 minutes, rinse. Soak in 3 tbsp rice vinegar, 2 tbsp sugar, and 4 tbsp warm water for 20 minutes minimum.`,
            tip: `Make pickles the night before. They improve dramatically after a few hours and keep for 2 weeks in the fridge.`,
        },
        {
            title: 'Grill the pork',
            description: `Grill pork slices over high heat or in a very hot cast iron pan for 2 minutes per side until caramelised and slightly charred. The sugar in the marinade creates a sticky, smoky crust.`,
            tip: `Do not crowd the pan. Cook in batches if needed — crowding steams the pork instead of grilling it.`,
        },
        {
            title: 'Toast the bread',
            description: `Split baguettes lengthwise without cutting all the way through. Toast cut-side down in a dry pan for 1 to 2 minutes until golden and crisp. The crust should shatter when you bite it.`,
        },
        {
            title: 'Assemble and serve',
            description: `Spread pate on one inner side, mayonnaise on the other. Drizzle Maggi inside. Layer grilled pork, pickled vegetables, cucumber spears, coriander, and sliced chilli. Do not compress. Wrap in paper and eat immediately.`,
            tip: `Banh mi does not wait. The steam from the fillings softens the crust within minutes. The first bite is always the best.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
