'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-mi-cha-ca',
    title: 'Fried Fish Cake Baguette (Bánh Mì Chả Cá)',
    subtitle:
        'Bánh Mì Chả Cá — a crispy Vietnamese baguette filled with savory fried fish cakes, aromatic cilantro, spicy chilies, and a signature garlic-soy glaze.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '40 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/banh-mi-cha-ca.jpg',
    intro:
        'While the world knows the classic cold-cut Bánh Mì, the Chả Cá version is a beloved specialty often found at morning street carts. The soul of this sandwich is the fish cake—traditionally made from bronze featherback fish, seasoned with an abundance of black pepper and dill, then fried until golden. What sets it apart is the heat; unlike other Bánh Mì, this one is served with a generous amount of Vietnamese coriander (rau răm) and a warm, savory sauce that seeps into the airy crumb of the bread.',
    ingredientSections: [
        {
            title: 'Fish Cakes (Chả Cá)',
            items: [
                { amount: 500, unit: 'g', name: 'fish paste', note: 'featherback or white fish, well-kneaded' },
                { amount: 1, unit: 'tbsp', name: 'minced purple shallots' },
                { amount: 1, unit: 'tsp', name: 'cracked black pepper', note: 'essential for aroma' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'cup', name: 'neutral oil', note: 'for frying' },
            ],
        },
        {
            title: 'The Bread and Fillings',
            items: [
                { amount: 4, unit: 'individual', name: 'Vietnamese baguettes', note: 'short, airy, and crispy' },
                { amount: 1, unit: 'bunch', name: 'Vietnamese coriander (rau răm)', note: 'the signature herb for fish' },
                { amount: 1, unit: 'large', name: 'cucumber', note: 'sliced into long strips' },
                { amount: 2, unit: 'large', name: 'fresh chilies', note: 'sliced' },
                { amount: 1, unit: 'cup', name: 'pickled daikon and carrots' },
            ],
        },
        {
            title: 'Garlic Soy Sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'chili sauce', note: 'Vietnamese style' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'minced garlic' },
            ],
        },
    ],
    steps: [
        {
            title: 'Season and fry the fish cakes',
            description: 'Mix the fish paste with shallots, fish sauce, and plenty of black pepper. Shape into small patties or long strips. Deep-fry until golden brown and bouncy.',
            tip: 'Knead the fish paste firmly with a spoon for 5-10 minutes before frying to achieve the signature springy "chew" (độ dai).',
        },
        {
            title: 'Simmer the sauce',
            description: 'In a small pan, sauté minced garlic until fragrant. Add soy sauce, chili sauce, and sugar. Simmer over low heat until the sauce thickens slightly.',
        },
        {
            title: 'Prepare the baguette',
            description: 'Toast the baguettes in the oven for 2-3 minutes at 180°C until the crust is shatteringly crisp. Slice open lengthwise.',
        },
        {
            title: 'Assemble the sandwich',
            description: 'Spread a little sauce inside the bread. Layer in the hot fried fish cakes, followed by cucumber strips, pickled vegetables, and a generous handful of Vietnamese coriander.',
            tip: 'Do not swap the Vietnamese coriander (rau răm) for regular cilantro; its peppery, citrusy bite is what neutralizes the "fishy" scent and defines this specific Bánh Mì.',
        },
        {
            title: 'Final touch',
            description: 'Drizzle more garlic soy sauce over the fillings, add fresh chilies if you like it spicy, and serve immediately while the fish cakes are still hot.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
