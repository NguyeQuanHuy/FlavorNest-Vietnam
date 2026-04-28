const recipe: RecipeData = {
    slug: 'trung-chien-thit',
    title: 'Minced Pork Omelette',
    subtitle: 'Trứng Chiên Thịt — a savory, protein-packed omelette with lacy, golden-brown edges.',
    category: 'SIDE DISH',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.7,
    baseServings: 3,
    heroImage: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=1600&q=80',
    intro: 'The ultimate "rice killer" (món đưa cơm). This isn’t a fluffy French omelette; it’s a rustic, thin pancake of eggs and pork that is savory, slightly salty, and incredibly aromatic thanks to the fried shallots.',
    ingredientSections: [
        {
            title: 'The Mixture',
            items: [
                { amount: 4, name: 'eggs' },
                { amount: 150, unit: 'g', name: 'minced pork', note: 'with a bit of fat' },
                { amount: 2, name: 'shallots', note: 'thinly sliced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Whisk and mix',
            description: 'Beat the eggs thoroughly. Add the minced pork, shallots, fish sauce, and pepper. Use a fork to break up the pork so it disperses evenly.',
            tip: 'Adding a teaspoon of water or oil to the mix makes the omelette extra tender.',
        },
        {
            title: 'Fry until lacy',
            description: 'Heat a generous amount of oil in a flat pan. Once hot, pour the egg mixture in, tilting the pan to spread it thin.',
        },
        {
            title: 'Flip and finish',
            description: 'Cook for 3 minutes until the bottom is golden. Flip and cook for another 2 minutes until the pork inside is fully done.',
        },
    ],
};
