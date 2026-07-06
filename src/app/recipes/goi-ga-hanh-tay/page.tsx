'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-ga-hanh-tay',
    title: 'Vietnamese Chicken & Onion Salad',
    subtitle: 'Gỏi gà hành tây — giòn sần sật, chua cay, thanh mát.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/goi-ga-hanh-tay.jpgs',
    intro: `Goi ga hanh tay is Vietnam's answer to the question of what to do with a perfectly poached chicken — shred it, dress it, and turn it into something more alive than the sum of its parts. Thin ribbons of white onion, soaked just long enough to lose their aggression but keep their crunch. Shredded chicken, still warm or just cooled, pulling apart into soft fibres. A dressing that is the Vietnamese holy trinity: fish sauce, lime, sugar — sharp, savoury, bright.

What makes this salad distinct from every other shredded chicken dish is texture layering. The onion gives snap. The chicken gives tenderness. Shredded kaffir lime leaf or Vietnamese coriander — rau ram — gives a perfumed bitterness that lifts the whole bowl. Crushed peanuts and fried shallots land on top like punctuation. It is a salad that feels substantial, refreshing, and deeply Vietnamese all at once — equally at home as a starter at a family feast or a quick weeknight meal with a bowl of steamed rice.`,
    ingredientSections: [
        {
            title: 'Salad',
            items: [
                { amount: 500, unit: 'g', name: 'chicken breast or thigh', note: 'bone-in poached whole, then shredded by hand — never sliced' },
                { amount: 1, name: 'large white onion', note: 'halved, sliced paper-thin against the grain' },
                { amount: 1, unit: 'tsp', name: 'salt', note: 'for soaking the onion' },
                { amount: 1, unit: 'tsp', name: 'white vinegar', note: 'for soaking the onion' },
                { amount: 20, unit: 'g', name: 'Vietnamese coriander (rau răm)', note: 'leaves only; substitute with Thai basil if unavailable' },
                { amount: 10, unit: 'g', name: 'fresh mint leaves' },
                { amount: 3, name: 'kaffir lime leaves', note: 'centre vein removed, rolled tight and sliced extremely thin' },
            ],
        },
        {
            title: 'Nước chấm dressing',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice', note: 'about 2 limes' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced fine' },
                { amount: 1, name: 'red bird\'s eye chilli', note: 'sliced; adjust to heat preference' },
            ],
        },
        {
            title: 'To finish',
            items: [
                { amount: 40, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed in a mortar — not blended' },
                { amount: 2, unit: 'tbsp', name: 'fried shallots', note: 'store-bought or homemade' },
                { amount: 1, name: 'fresh red chilli', note: 'sliced thin, for garnish' },
                { amount: 4, name: 'prawn crackers', note: 'optional, for serving alongside' },
            ],
        },
    ],
    steps: [
        {
            title: 'Poach the chicken',
            description: 'Place chicken in a pot with enough cold water to cover by 3cm. Add 2 smashed garlic cloves, 3 slices ginger, 1 tsp salt, and 2 spring onion stalks. Bring to a gentle boil, then immediately reduce to the lowest simmer. Cook breast for 18 minutes, thigh for 22 minutes. Turn off heat and rest in the hot water for 10 minutes. Remove and cool slightly before shredding.',
            tip: 'Never boil hard — a gentle simmer keeps the meat tender and the poaching liquid clear enough to use as a light soup alongside.',
        },
        {
            title: 'Soak the onion',
            description: 'Place sliced onion in a bowl with 1 tsp salt, 1 tsp white vinegar, and enough cold water to cover. Soak for 15 minutes — this draws out the harsh sulphur compounds without killing the crunch. Drain, rinse under cold water, and squeeze gently dry in a clean cloth.',
            tip: 'Under-soaked onion overpowers everything. Over-soaked onion goes limp. 15 minutes is the exact window.',
        },
        {
            title: 'Make the dressing',
            description: 'Combine fish sauce, lime juice, sugar, and water in a small bowl. Stir until sugar fully dissolves. Add minced garlic and sliced chilli. Taste — it should be a clear balance of salty, sour, and sweet with heat at the back. Adjust with more lime or fish sauce as needed.',
        },
        {
            title: 'Shred the chicken',
            description: 'Use two forks or your fingers to pull the chicken apart along the grain into thin, long fibres. Avoid cutting — shredding gives a more natural texture that holds the dressing better. Season lightly with a pinch of salt and white pepper while still warm.',
        },
        {
            title: 'Assemble the salad',
            description: 'In a large mixing bowl, combine shredded chicken, drained onion, rau ram, mint, and kaffir lime leaf. Pour two-thirds of the dressing over and toss well with clean hands or tongs, coating everything evenly. Taste and add more dressing as needed — the salad should be well-seasoned, not drowning.',
            tip: 'Dress just before serving. Vietnamese salads dressed too early go limp and lose their freshness.',
        },
        {
            title: 'Plate and finish',
            description: 'Mound the salad onto a wide plate or shallow bowl. Scatter crushed peanuts and fried shallots generously over the top. Add fresh chilli slices. Serve immediately with prawn crackers on the side and extra dressing in a small bowl for the table.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
