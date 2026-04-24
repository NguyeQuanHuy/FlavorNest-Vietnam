'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-cha-hanoi',
    title: 'Hanoi Grilled Pork Vermicelli',
    subtitle: 'Smoke, caramel and tangy broth — the lunch that stopped a president.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1623682785702-f0c9fcfe2fc0?auto=format&fit=crop&w=1600&q=85',
    intro: `In May 2016, Barack Obama and Anthony Bourdain sat down at a plastic-stool eatery on Le Van Huu street in Hanoi and ordered bun cha. The photograph went viral within hours. But for Hanoians, bun cha had been their quiet lunchtime secret long before any president discovered it. Charcoal-grilled pork patties and sliced belly in a warm, tangy broth — cold vermicelli on the side, a mountain of fresh herbs, and a pot of warm dipping broth in which you submerge everything at once.`,
    ingredientSections: [
        {
            title: 'Grilled pork',
            items: [
                { amount: 300, unit: 'g', name: 'pork belly', note: 'thinly sliced' },
                { amount: 200, unit: 'g', name: 'ground pork', note: 'shaped into small patties' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'pinch of pepper' },
            ],
        },
        {
            title: 'Dipping broth',
            items: [
                { amount: 200, unit: 'ml', name: 'warm water' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'rice vinegar' },
                { amount: 1, name: 'garlic clove', note: 'minced' },
                { amount: 1, name: 'red chilli', note: 'sliced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 300, unit: 'g', name: 'dried rice vermicelli', note: 'cooked' },
                { amount: 1, name: 'bunch Vietnamese mint and perilla' },
                { amount: 1, name: 'bunch bean sprouts' },
                { amount: 60, unit: 'g', name: 'pickled green papaya or carrot', note: 'optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the pork',
            description: 'Combine fish sauce, sugar, shallots, garlic, and pepper. Toss pork belly slices to coat. Shape ground pork into small flat patties. Marinate both for at least 30 minutes.',
            tip: 'The longer the marinade, the deeper the flavour. Overnight in the fridge is ideal.',
        },
        {
            title: 'Make the dipping broth',
            description: 'Dissolve sugar in warm water. Add fish sauce, vinegar, garlic, and chilli. Taste and adjust. The broth should be lightly sweet, sour, and savoury. Keep warm.',
        },
        {
            title: 'Grill the pork',
            description: 'Grill over charcoal or in a very hot cast iron pan. Cook patties 3 minutes per side until caramelised and charred at the edges. Cook belly slices 2 minutes per side. The char is not optional.',
            tip: 'Charcoal produces the authentic smoky flavour. A gas grill works but misses the smokiness that defines the dish.',
        },
        {
            title: 'Assemble and serve',
            description: 'Place grilled pork directly into the warm dipping broth. Serve with cold vermicelli, fresh herbs, and bean sprouts on the side. Each person dips noodles and herbs into the pork broth bowl and eats everything together.',
        },
    ],
};
export default function Page() { return <RecipeLayout recipe={recipe} />; } 
