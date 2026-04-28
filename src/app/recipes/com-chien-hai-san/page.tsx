const recipe: RecipeData = {
    slug: 'com-chien-hai-san',
    title: 'Seafood Fried Rice',
    subtitle: 'Cơm Chiên Hải Sản — a coastal treasure featuring fresh shrimp, squid, and vibrant vegetables.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '25 min',
    rating: 4.8,
    baseServings: 2,
    heroImage: 'https://images.unsplash.com/photo-1512058560366-cd242d5930df?w=1600&q=80',
    intro: 'This dish brings the flavor of the Vietnamese seaside to your table. Unlike the simple egg version, seafood fried rice is a medley of textures—the snap of the shrimp, the chew of the squid, and the crunch of the rice.',
    ingredientSections: [
        {
            title: 'Seafood and Rice',
            items: [
                { amount: 2, unit: 'bowls', name: 'cold rice' },
                { amount: 100, unit: 'g', name: 'shrimp', note: 'peeled and diced' },
                { amount: 100, unit: 'g', name: 'squid', note: 'cut into small rings' },
                { amount: 50, unit: 'g', name: 'frozen peas and carrots' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'minced garlic' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prep the seafood',
            description: 'Quickly blanch or sear the shrimp and squid in a hot pan for 1 minute. Remove and set aside to prevent overcooking.',
        },
        {
            title: 'Fry the base',
            description: 'Fry garlic until golden. Add the vegetables and cold rice, tossing on high heat.',
        },
        {
            title: 'Combine',
            description: 'Return the seafood to the pan. Season with oyster sauce and soy sauce. Toss until everything is piping hot and evenly glazed.',
        },
    ],
};
