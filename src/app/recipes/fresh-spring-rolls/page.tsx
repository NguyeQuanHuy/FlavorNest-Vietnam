'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'fresh-spring-rolls',
    title: 'Fresh Spring Rolls with Shrimp and Pork',
    subtitle: `Vietnam's most elegant finger food — cool, fresh, and impossibly beautiful.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=1600&q=85',
    intro: `Goi cuon is the anti-spring-roll — no frying, no heat, no grease. Translucent rice paper wrapped around plump prawns, pork, rice vermicelli, lettuce, and Vietnamese herbs. Dipped in hoisin-peanut sauce, each roll is cool, clean, and refreshing. You can see every layer through the translucent wrapper before you bite.`,
    ingredientSections: [
        {
            title: 'Fillings',
            items: [
                { amount: 300, unit: 'g', name: 'medium prawns', note: 'boiled, peeled, halved lengthwise' },
                { amount: 200, unit: 'g', name: 'pork belly', note: 'boiled and thinly sliced' },
                { amount: 100, unit: 'g', name: 'rice vermicelli', note: 'cooked and cooled' },
                { amount: 1, name: 'head butter lettuce' },
                { amount: 1, name: 'bunch Vietnamese mint and perilla' },
                { amount: 16, name: 'round rice paper sheets', note: '22cm diameter' },
            ],
        },
        {
            title: 'Peanut dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'hoisin sauce' },
                { amount: 2, unit: 'tbsp', name: 'peanut butter' },
                { amount: 2, unit: 'tbsp', name: 'warm water' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'crushed roasted peanuts' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare fillings',
            description: 'Boil pork belly 20 minutes until cooked through, cool and slice thinly. Boil prawns 2 to 3 minutes, peel and halve lengthwise. Arrange all fillings on plates at the table.',
        },
        {
            title: 'Make dipping sauce',
            description: 'Mix hoisin, peanut butter, warm water, and sugar until smooth. Top with crushed peanuts.',
        },
        {
            title: 'Soften rice paper',
            description: 'Dip one rice paper sheet in warm water for exactly 5 seconds. Lay on a clean board — it will continue softening.',
            tip: 'Over-soaked rice paper tears when rolling. 5 seconds only.',
        },
        {
            title: 'Roll',
            description: 'Place lettuce and herbs in the centre lower third. Add vermicelli, pork, and prawns (cut-side up for presentation). Fold bottom edge up, fold in sides, roll firmly upward.',
        },
        {
            title: 'Serve immediately',
            description: 'Goi cuon is best eaten within 15 minutes of rolling. Serve with peanut dipping sauce.',
        },
    ],
};
export default function Page() { return <RecipeLayout recipe={recipe} />; } 
