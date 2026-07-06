'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nem-nuong',
    title: 'Vietnamese Grilled Pork Skewers (Nem nướng)',
    subtitle: 'Smoky, juicy, and lightly caramelized — grilled pork skewers wrapped in herbs and dipped in rich sauce.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/nem-nuong.jpg',

    intro: `Nem nướng is one of Vietnam’s most addictive street foods — smoky, juicy pork grilled over charcoal until lightly charred and caramelized at the edges.

The meat is finely ground and seasoned with garlic, fish sauce, sugar, and a touch of starch for bounce, then shaped onto skewers and grilled until fragrant. But the real magic happens at the table: the pork is wrapped in rice paper with fresh herbs, pickled vegetables, and crisp lettuce, then dipped into a thick, savory peanut sauce.

It’s not just a dish — it’s a hands-on experience. Sweet, smoky, fresh, and rich all in one bite.`,

    ingredientSections: [
        {
            title: 'Pork mixture',
            items: [
                { amount: 500, unit: 'g', name: 'ground pork', note: 'slightly fatty for juiciness' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tbsp', name: 'tapioca starch' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 12, name: 'rice paper sheets' },
                { amount: 1, name: 'head lettuce' },
                { amount: 1, name: 'bunch Vietnamese herbs', note: 'mint, perilla, cilantro' },
                { amount: 1, name: 'cucumber', note: 'julienned' },
                { amount: 1, name: 'carrot', note: 'pickled or fresh' },
            ],
        },
        {
            title: 'Peanut dipping sauce',
            items: [
                { amount: 2, unit: 'tbsp', name: 'oil' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 200, unit: 'ml', name: 'water' },
                { amount: 2, unit: 'tbsp', name: 'peanut butter' },
                { amount: 1, unit: 'tbsp', name: 'hoisin sauce' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare the pork',
            description: 'In a bowl, combine ground pork, garlic, fish sauce, sugar, oyster sauce, tapioca starch, oil, and black pepper. Mix thoroughly until the texture becomes slightly sticky and cohesive. Chill for 20 minutes.',
            tip: 'Mixing well develops a springy texture. Slight chilling helps the meat hold its shape when grilling.',
        },
        {
            title: 'Shape onto skewers',
            description: 'Take a handful of pork mixture and press it firmly around skewers into elongated sausage shapes. Keep the thickness even for consistent cooking.',
        },
        {
            title: 'Grill the skewers',
            description: 'Grill over medium-hot charcoal for 8–10 minutes, turning occasionally, until fully cooked with light charring on the edges.',
            tip: 'Charcoal grilling gives the signature smoky aroma. A grill pan works, but you’ll miss that deep street-food flavor.',
        },
        {
            title: 'Make the peanut sauce',
            description: 'Heat oil in a small pan. Add garlic and sauté until fragrant. Add water, peanut butter, hoisin sauce, fish sauce, and sugar. Stir until smooth and slightly thickened.',
        },
        {
            title: 'Assemble and serve',
            description: 'Serve the grilled pork with rice paper, lettuce, herbs, and vegetables. To eat, place pork and fillings onto rice paper, roll tightly, and dip into the peanut sauce.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
