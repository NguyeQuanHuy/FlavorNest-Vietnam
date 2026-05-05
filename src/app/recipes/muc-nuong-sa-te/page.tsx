'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-nuong-sa-te',
    title: 'Spicy Satay Grilled Squid (Muc Nuong Sa Te)',
    subtitle: 'Smoky, spicy, and slightly charred — grilled squid coated in bold satay marinade.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 3,
    heroImage: '/images/recipes/muc-nuong-sa-te.jpg',

    intro: `Mực nướng sa tế is a popular Vietnamese street barbecue dish known for its smoky aroma and fiery spice.

Fresh squid is marinated with satay sauce, garlic, chili, and lemongrass, then grilled over high heat until slightly charred on the edges. The result is tender, juicy squid with a bold spicy kick and a smoky finish.

It is commonly served at night markets and seaside stalls, often paired with lime salt or chili dipping sauce.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 500, unit: 'g', name: 'fresh squid', note: 'cleaned, scored lightly' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'lemongrass stalks', note: 'finely chopped' },
                { amount: 2, name: 'red chilies', note: 'adjust to taste' },
                { amount: 2, unit: 'tbsp', name: 'satay sauce' },
            ],
        },
        {
            title: 'Marinade',
            items: [
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'oil' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare the squid',
            description: 'Clean squid thoroughly and lightly score the surface to help absorb marinade and cook evenly.',
        },
        {
            title: 'Make marinade',
            description: 'Mix satay sauce, garlic, lemongrass, chili, fish sauce, soy sauce, sugar, oil, and black pepper.',
            tip: 'Satay sauce is the key flavor base — it gives depth and spice.',
        },
        {
            title: 'Marinate',
            description: 'Coat squid evenly with marinade. Let rest for 15–20 minutes only to avoid over-tenderizing.',
        },
        {
            title: 'Grill',
            description: 'Grill over high heat for 2–3 minutes per side until slightly charred and just cooked through.',
            tip: 'Do not overcook squid — it becomes rubbery quickly.',
        },
        {
            title: 'Finish and serve',
            description: 'Remove from grill and serve hot with lime salt, chili sauce, or fresh herbs.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
