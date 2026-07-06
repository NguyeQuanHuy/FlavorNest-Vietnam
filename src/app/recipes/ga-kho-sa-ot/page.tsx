'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-kho-sa-ot',
    title: 'Lemongrass Chilli Chicken',
    subtitle:
        'Gà Kho Sả Ớt — chicken thighs braised with a small mountain of minced lemongrass and bird\'s eye chilli until the sauce clings like glaze.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/ga-kho-sa-ot.jpg',
    intro:
        'Central Vietnamese cooking has its own devoted following, and this is one of the dishes that explains why. Where the Northern gà kho gừng leans on ginger and restraint, the Central version turns up every dial: more lemongrass, more chilli, more fish sauce, cooked down until the sauce is almost a paste. The kitchen ends up smelling like a Hue market at sunrise.',
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 800, unit: 'g', name: 'bone-in chicken thighs', note: 'cut in 4cm pieces' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'palm sugar' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder', note: 'optional, for colour' },
            ],
        },
        {
            title: 'Aromatics',
            items: [
                { amount: 6, name: 'lemongrass stalks', note: 'white part, finely minced' },
                { amount: 6, name: 'bird\'s eye chillies', note: 'minced, adjust to taste' },
                { amount: 5, name: 'shallots', note: 'minced' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 2, name: 'spring onions', note: 'sliced' },
                { amount: 1, unit: 'tsp', name: 'freshly cracked black pepper' },
                { amount: 600, unit: 'g', name: 'steamed jasmine rice', note: 'to serve' },
            ],
        },
    ],
    steps: [
    {
        title: 'Marinate the chicken',
        description: 'In a mixing bowl, combine the chicken pieces with fish sauce, palm sugar, turmeric powder, ground pepper, and half of your finely minced lemongrass. Massage the seasonings into the meat and let it rest for at least 30 minutes so the earthy turmeric and citrusy lemongrass can penetrate deeply.',
    },
    {
        title: 'Bloom the aromatics',
        description: 'Heat oil in a heavy-bottomed pot over medium heat. Add the minced shallots, garlic, the remaining half of the lemongrass, and chopped chilies. Fry for about 2 minutes, stirring constantly, until the aromatics turn golden and the kitchen smells "loud" with a spicy, citrusy fragrance.',
        tip: 'This is where you decide the heat of the final dish. Taste a strand of the fried lemongrass now; if you want it spicier, add a few more slices of chili before the chicken goes in.',
    },
    {
        title: 'Sear the chicken',
        description: 'Add the marinated chicken to the pot, ideally placing the pieces skin-side down. Let them sear undisturbed for about 3 minutes to allow the skin to catch a deep, golden-yellow color from the turmeric and render out some of its fat.',
    },
    {
        title: 'Reduce slowly',
        description: 'Pour in approximately 200ml of water (or coconut water for extra richness). Cover the pot loosely and let it simmer over medium-low heat for 20 minutes, turning the chicken pieces once halfway through to ensure they cook evenly and soak up the sauce.',
    },
    {
        title: 'Reduce to glaze',
        description: 'Uncover the pot and raise the heat slightly. Simmer for another 5 minutes, allowing the liquid to evaporate until the sauce becomes thick, syrupy, and beautifully coats every single piece of chicken.',
        tip: 'Stop the cooking process the moment the sauce clings to the meat. Any longer and the sugars will over-concentrate, turning your silky glaze into a dry, sticky paste.',
    },
    {
        title: 'Finish and serve',
        description: 'Finish with a generous crack of fresh black pepper and a handful of sliced spring onions. Serve the chicken over hot jasmine rice, ideally with a simple clear vegetable soup (canh) on the side to balance the bold, spicy flavors.',
    },
],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
