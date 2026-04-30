'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-nuong-phan-thiet',
    title: 'Phan Thiet Grilled Squid',
    subtitle: 'Muc nuong Phan Thiet — fresh squid charred over coconut husks, brushed with fish sauce caramel, served with green chilli salt.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1533630846283-6878262f489b?auto=format&fit=crop&w=1600&q=85',
    intro: 'In Phan Thiet, fishermen come back at dawn and grill the morning catch right on the beach — squid scored on a board, brushed with fish sauce caramel, and laid on a metal grate over smouldering coconut husks. The husks burn slowly and impart a faint sweet smoke that gas can never replicate. Within four minutes the tentacles curl, the body blisters, and the coastal town wakes up to that smell. There is no marinade, no preparation, almost no recipe. There is the squid, the salt, the smoke, and the sea two metres away.',
    ingredientSections: [
        {
            title: 'The squid',
            items: [
                { amount: 800, unit: 'g', name: 'whole fresh squid', note: 'cleaned, ink sac removed, body kept whole' },
                { amount: 1, unit: 'tbsp', name: 'sea salt', note: 'for cleaning' },
                { amount: 1, unit: 'tbsp', name: 'rice vinegar', note: 'for cleaning' },
            ],
        },
        {
            title: 'Fish sauce caramel glaze',
            items: [
                { amount: 3, unit: 'tbsp', name: 'palm sugar' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
        {
            title: 'Green chilli salt (muoi tieu chanh)',
            items: [
                { amount: 1, unit: 'tbsp', name: 'sea salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 4, name: 'green birds eye chillies', note: 'sliced' },
                { amount: 4, name: 'limes', note: '2 juiced for the salt, 2 in wedges for serving' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'small head lettuce' },
                { amount: 1, name: 'bunch Vietnamese coriander' },
                { amount: 1, name: 'cucumber', note: 'sliced' },
                { amount: 4, name: 'cold beers', note: 'optional but traditional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean the squid properly',
            description: 'Rub squid with salt and rice vinegar, then rinse aggressively under cold running water until all slime and dark pigment is gone. Pat completely dry with paper towel. The squid must be bone dry — wet squid steams instead of grilling.',
            tip: 'The thin purple skin can stay on. It darkens beautifully on the grill and adds flavour.',
        },
        {
            title: 'Score the squid',
            description: 'Lay each squid body flat on a cutting board. Score lightly across the top in a diagonal cross-hatch pattern, cutting only halfway through. Do not cut through. The scoring helps the body curl beautifully on the grill and lets the glaze penetrate.',
        },
        {
            title: 'Build the fish sauce caramel',
            description: 'In a small saucepan, melt palm sugar with 2 tbsp water over medium heat until it turns the colour of dark amber, about 4 minutes — do not stir, only swirl. Off heat, add fish sauce carefully (it will bubble violently), oil, garlic and pepper. Whisk until smooth. The glaze should be glossy and pourable.',
            tip: 'Past dark amber the caramel turns bitter in seconds. Pull it the moment it smells of toffee.',
        },
        {
            title: 'Mix the green chilli salt',
            description: 'In a small dish, combine salt, sugar, pepper and minced green chilli. Squeeze 2 limes over the top and stir to a coarse paste. The dip should be sharp, salty and intensely lime-bright.',
        },
        {
            title: 'Grill over hot coals',
            description: 'Get the charcoal screaming hot and lightly grey. Brush squid with caramel glaze and lay on the grate scored-side down. Grill 90 seconds per side, brushing with more glaze each time you flip. The body should curl slightly, the tentacles should plump up, the surface should turn deep mahogany with charred edges.',
            tip: 'Coconut husks are traditional but charcoal works fine. Avoid gas — the smoke is half the dish.',
        },
        {
            title: 'Slice and serve immediately',
            description: 'Transfer grilled squid to a board. Slice the bodies into 2cm rings; leave the tentacles whole. Pile onto a platter with lettuce, Vietnamese coriander and cucumber. Serve immediately with the green chilli salt for dipping. Eat with hands. The squid should still be smoking when it hits the table.',
            tip: 'Squid grilled past 4 minutes turns rubbery. Pull it the moment the body curls and the tentacles plump.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
