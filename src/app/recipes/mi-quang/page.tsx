'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'mi-quang',
    title: 'Quang-Style Turmeric Noodles',
    subtitle: 'Wide turmeric noodles with just enough broth to coat — the pride of Quang Nam province.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/mi-quang.jpg',
    intro: 'Mi Quang defies easy categorisation. It is not a soup — there is barely enough broth to wet the noodles. It is not a dry noodle dish — the broth is essential, rich with pork and shrimp fat. The wide turmeric-yellow noodles sit in a shallow pool of intensely savoury broth, topped with shrimp, pork belly, quail eggs, toasted peanuts, and sesame rice crackers that shatter when you mix everything together. It is loud, textural, and deeply satisfying.',
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 300, unit: 'g', name: 'pork ribs or neck bones' },
                { amount: 200, unit: 'g', name: 'raw shrimp', note: 'shells on, heads preferred' },
                { amount: 800, unit: 'ml', name: 'water' },
                { amount: 2, unit: 'tbsp', name: 'annatto oil', note: 'or 1 tsp turmeric in vegetable oil' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 200, unit: 'g', name: 'pork belly', note: 'sliced and stir-fried' },
                { amount: 200, unit: 'g', name: 'shrimp', note: 'peeled, stir-fried with garlic' },
                { amount: 4, name: 'quail eggs', note: 'boiled and halved' },
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 2, name: 'sesame rice crackers (banh trang me)', note: 'broken into shards' },
            ],
        },
        {
            title: 'Noodles and herbs',
            items: [
                { amount: 400, unit: 'g', name: 'fresh mi Quang noodles', note: 'or wide rice noodles, turmeric-tinted' },
                { amount: 1, name: 'bunch Vietnamese mint and perilla' },
                { amount: 1, name: 'bunch banana blossom', note: 'shredded, optional' },
                { amount: 2, name: 'spring onions', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the broth',
            description: 'Simmer pork bones in water for 30 minutes, skimming foam. Add shrimp shells and heads, annatto oil, fish sauce, and sugar. Simmer 15 more minutes. Strain — the broth should be a rich orange-gold. Keep hot.',
        },
        {
            title: 'Cook the toppings',
            description: 'Stir-fry sliced pork belly over high heat until lightly caramelised. In the same pan, stir-fry shrimp with garlic until pink and just cooked. Set each aside separately.',
        },
        {
            title: 'Boil the noodles',
            description: 'Cook mi Quang noodles in boiling water for 2 to 3 minutes until just tender. Drain and divide into deep bowls.',
        },
        {
            title: 'Assemble',
            description: 'Ladle 4 to 5 tablespoons of hot broth over each bowl of noodles — the broth should pool at the bottom but not submerge the noodles. Arrange pork belly, shrimp, and quail egg halves on top. Add fresh herbs and banana blossom.',
            tip: 'The broth ratio is the defining characteristic of mi Quang. Too much broth and it becomes a soup. Too little and it is dry. The noodles should glisten, not swim.',
        },
        {
            title: 'Finish and serve',
            description: 'Top with crushed peanuts and shards of sesame rice cracker. Mix everything at the table. The crackers soften gradually in the broth — eat quickly for maximum texture contrast.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
