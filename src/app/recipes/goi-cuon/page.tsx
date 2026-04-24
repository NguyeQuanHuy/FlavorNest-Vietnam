'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-cuon',
    title: 'Fresh Rice Paper Rolls',
    subtitle: 'Translucent, light, and beautiful — the most elegant Vietnamese street food.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=1600&q=85',
    intro: `Goi cuon is the anti-spring-roll — no frying, no heat, no grease. Fresh prawns, sliced pork, rice vermicelli, lettuce, and Vietnamese herbs wrapped tightly in a translucent rice paper sheet until you can see every layer inside. Dipped in hoisin-peanut sauce, each roll is cool, clean, and refreshing in a way that feels almost medicinal in the Saigon heat. They are assembled at the table, eaten immediately, and impossible to eat just one of.`,
    ingredientSections: [
        {
            title: 'Fillings',
            items: [
                { amount: 300, unit: 'g', name: 'medium prawns', note: 'boiled, peeled, halved lengthwise' },
                { amount: 200, unit: 'g', name: 'pork belly', note: 'boiled until just cooked, thinly sliced' },
                { amount: 100, unit: 'g', name: 'dried rice vermicelli', note: 'cooked and cooled' },
                { amount: 1, name: 'head butter lettuce', note: 'leaves separated' },
                { amount: 1, name: 'bunch Vietnamese mint (rau hung lui)' },
                { amount: 1, name: 'bunch perilla (rau tia to)' },
                { amount: 1, name: 'bunch garlic chives', note: 'optional, for sticking out the end' },
            ],
        },
        {
            title: 'Rice paper',
            items: [
                { amount: 16, name: 'round rice paper sheets (banh trang)', note: '22cm diameter' },
            ],
        },
        {
            title: 'Hoisin peanut dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'hoisin sauce' },
                { amount: 2, unit: 'tbsp', name: 'peanut butter', note: 'smooth' },
                { amount: 2, unit: 'tbsp', name: 'warm water', note: 'to thin' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'garlic clove', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'crushed roasted peanuts', note: 'for topping' },
                { amount: 1, name: 'red chilli', note: 'sliced, optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare all fillings',
            description: `Boil pork belly in salted water for 20 minutes until just cooked through. Cool and slice thinly. Boil prawns 2 to 3 minutes until pink, peel and halve lengthwise. Cook vermicelli according to packet, drain and cool. Arrange everything on plates at the table.`,
        },
        {
            title: 'Make the dipping sauce',
            description: `Combine hoisin sauce, peanut butter, warm water, sugar, and garlic. Stir until smooth and combined. Adjust consistency with more water if needed — it should coat a spoon but still flow. Top with crushed peanuts and chilli.`,
        },
        {
            title: 'Soften rice paper',
            description: `Fill a wide, shallow dish with warm water. Dip one rice paper sheet for exactly 5 seconds — no longer. It will still feel stiff when you lay it on your board. It continues softening as you fill it.`,
            tip: `Over-soaked rice paper tears when you roll it. 5 seconds in warm water is the rule. The paper will be perfectly pliable by the time you finish adding fillings.`,
        },
        {
            title: 'Roll each goi cuon',
            description: `Lay softened rice paper on a clean board. Place lettuce and herbs in the centre lower third. Add a small bundle of vermicelli. Lay 2 to 3 prawn halves (cut-side up for presentation) and 2 slices of pork below the herbs. Fold the bottom edge up over the filling, fold in the sides, then roll firmly upward to close.`,
            tip: `Roll firmly but not aggressively. The goal is a tight, compact cylinder where all the layers are visible through the translucent paper.`,
        },
        {
            title: 'Serve immediately',
            description: `Goi cuon is best eaten within 15 minutes of rolling. After that the rice paper dries out and becomes chewy. Serve with the peanut dipping sauce and extra chilli on the side.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
