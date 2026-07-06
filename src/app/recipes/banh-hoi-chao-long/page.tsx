'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-hoi-chao-long',
    title: 'Banh Hoi & Pork Offal Porridge (Banh Hoi Chao Long)',
    subtitle: 'Soft rice vermicelli paired with rich pork offal porridge — a classic Vietnamese breakfast duo.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '60 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-hoi-chao-long.jpg',

    intro: `Bánh hỏi cháo lòng is a traditional Vietnamese breakfast set combining two contrasting textures: delicate woven rice vermicelli (bánh hỏi) and a warm, rich pork offal porridge (cháo lòng).

The bánh hỏi is soft, airy, and lightly brushed with scallion oil, while the cháo lòng is hearty, aromatic, and made from pork organs simmered until tender. Together, they create a balanced meal — light yet deeply satisfying.

Often served in central and southern Vietnam, this dish is commonly enjoyed in the morning with fresh herbs, fried shallots, and dipping fish sauce.`,

    ingredientSections: [
        {
            title: 'Bánh hỏi',
            items: [
                { amount: 400, unit: 'g', name: 'rice vermicelli sheets (bánh hỏi)' },
                { amount: 3, unit: 'tbsp', name: 'scallion oil' },
                { amount: 1, unit: 'pinch', name: 'salt' },
            ],
        },
        {
            title: 'Pork offal porridge',
            items: [
                { amount: 200, unit: 'g', name: 'pork liver' },
                { amount: 200, unit: 'g', name: 'pork intestines', note: 'cleaned thoroughly' },
                { amount: 100, unit: 'g', name: 'pork heart' },
                { amount: 150, unit: 'g', name: 'jasmine rice' },
                { amount: 1, name: 'ginger knob', note: 'sliced' },
                { amount: 1, name: 'shallot', note: 'sliced' },
            ],
        },
        {
            title: 'Seasoning & garnish',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 1, name: 'fried shallots' },
                { amount: 1, name: 'fresh herbs', note: 'mint, cilantro' },
            ],
        },
    ],

    steps: [
        {
            title: 'Cook the porridge base',
            description: 'Rinse rice and simmer with water until it breaks down into a soft porridge base.',
            tip: 'Slow cooking creates a silky texture for the cháo.',
        },
        {
            title: 'Prepare pork offal',
            description: 'Clean pork organs thoroughly. Boil separately with ginger to remove odor, then slice into bite-size pieces.',
        },
        {
            title: 'Finish the porridge',
            description: 'Add pork organs into the porridge and simmer gently. Season with fish sauce, salt, and pepper.',
        },
        {
            title: 'Prepare bánh hỏi',
            description: 'Steam or warm the rice vermicelli sheets. Brush lightly with scallion oil and a pinch of salt.',
        },
        {
            title: 'Assemble and serve',
            description: 'Serve bánh hỏi on one plate and hot cháo lòng in a bowl. Add fried shallots, herbs, and dipping fish sauce on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
