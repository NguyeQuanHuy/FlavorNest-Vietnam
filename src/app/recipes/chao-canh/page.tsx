'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-canh',
    title: 'Quang Binh Thick Noodle Soup',
    subtitle: 'Chao canh Quang Binh — hand-rolled flat wheat noodles in a clear pork-and-shrimp broth, the breakfast Quang Binh defends against all comers.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/chao-canh.jpg',
    intro: 'Chao canh is the breakfast of Quang Binh province — that narrow strip of Central Vietnam squeezed between the Truong Son mountains and the sea. The noodles are wheat, hand-rolled flat into rough rectangles by hand each morning, chewier and more rustic than industrial pasta. The broth is built on pork bones and dried shrimp, kept clear and gentle so the noodles can do the talking. It is the kind of regional dish that locals get protective about: every other province makes a version called chao canh, and Quang Binh will tell you politely that none of them are real.',
    ingredientSections: [
        {
            title: 'Hand-rolled wheat noodles',
            items: [
                { amount: 300, unit: 'g', name: 'wheat flour', note: 'medium-protein, all-purpose works' },
                { amount: 150, unit: 'ml', name: 'warm water' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Pork-shrimp broth',
            items: [
                { amount: 600, unit: 'g', name: 'pork bones', note: 'split, blanched and rinsed' },
                { amount: 200, unit: 'g', name: 'pork shoulder', note: 'whole piece' },
                { amount: 30, unit: 'g', name: 'dried shrimp', note: 'rinsed' },
                { amount: 2, unit: 'L', name: 'water' },
                { amount: 1, name: 'large yellow onion', note: 'charred whole' },
                { amount: 30, unit: 'g', name: 'ginger', note: 'charred' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'rock sugar' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
            ],
        },
        {
            title: 'Toppings and finish',
            items: [
                { amount: 200, unit: 'g', name: 'fresh shrimp', note: 'peeled, deveined' },
                { amount: 150, unit: 'g', name: 'fish cake (cha ca)', note: 'sliced' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro', note: 'chopped' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 1, unit: 'tsp', name: 'freshly cracked black pepper' },
                { amount: 2, name: 'limes', note: 'cut in wedges' },
                { amount: 2, name: 'birds eye chillies', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the noodle dough',
            description: 'In a bowl, combine wheat flour and salt. Slowly add warm water while mixing with chopsticks until a shaggy dough forms. Drizzle in oil and knead vigorously for 8 minutes until smooth and elastic. Cover with a damp cloth and rest 30 minutes at room temperature.',
            tip: 'A dough rested under 20 minutes will tear when rolled. Patience here is the difference between rough and tender noodles.',
        },
        {
            title: 'Build the broth',
            description: 'Place blanched bones, pork shoulder, charred onion, ginger and dried shrimp in a clean pot with 2L cold water. Bring to a gentle simmer and skim aggressively for the first 10 minutes. Reduce heat and simmer 60 minutes. Pull the pork shoulder after 35 minutes, slice thin against the grain, and reserve.',
            tip: 'The broth should be clear and faintly sweet. A hard boil will turn it muddy.',
        },
        {
            title: 'Roll the noodles by hand',
            description: 'Divide rested dough in half. On a floured surface, roll each half into a rectangle 2mm thick — almost translucent. Cut into rough strips 2cm wide and 8cm long. Dust generously with flour to prevent sticking. The shapes should be irregular — that is the rustic charm of chao canh Quang Binh.',
            tip: 'Aim for chewy and uneven, not perfect and uniform. Industrial precision is not the goal.',
        },
        {
            title: 'Strain and season',
            description: 'Strain broth through a fine sieve into a clean pot. Discard solids. Add fish sauce, rock sugar and salt. Taste — it should be clean, gently sweet from the dried shrimp. Return to a low simmer.',
        },
        {
            title: 'Cook the noodles in the broth',
            description: 'Drop the hand-rolled noodles directly into the simmering broth and cook for 4 minutes until tender and slightly thickened — the wheat will release a small amount of starch and give the broth body. In the last minute, add fresh shrimp and sliced fish cake to poach.',
            tip: 'For a clearer broth, cook the noodles separately in boiling water and combine with the broth at serving. The Quang Binh way is to cook them together for a slightly thickened soup.',
        },
        {
            title: 'Assemble and serve',
            description: 'Ladle noodles, shrimp, fish cake and broth into 4 bowls. Top each with sliced pork shoulder, spring onion, cilantro, fried shallots and a generous crack of black pepper. Serve immediately with lime and chilli on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
