'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-ga-hoi-an',
    title: 'Hoi An Chicken Rice',
    subtitle:
        'Cơm Gà Hội An (Hoi An Chicken Rice) — fragrant turmeric-stained rice served with hand-shredded chicken, crunchy lime-marinated onions, and fresh Vietnamese coriander.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '60 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/com-ga-hoi-an.jpg',
    intro:
        'Hoi An Chicken Rice is a delicate masterpiece from the ancient town of Central Vietnam. Unlike other chicken rice dishes, the magic here lies in the rice itself—grains are sautéed in garlic and chicken fat before being poached in a rich turmeric broth. The result is a vibrant yellow rice that is intensely aromatic, served alongside tender shredded chicken and a refreshing onion salad that cuts through the richness with every bite.',
    ingredientSections: [
        {
            title: 'The Chicken and Broth',
            items: [
                { amount: 1.2, unit: 'kg', name: 'whole free-range chicken', note: 'or 4 large chicken thighs' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder' },
                { amount: 1, unit: 'piece', name: 'ginger', note: 'smashed' },
                { amount: 2, name: 'shallots', note: 'peeled' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Turmeric Rice',
            items: [
                { amount: 400, unit: 'g', name: 'jasmine rice', note: 'washed and drained' },
                { amount: 2, unit: 'tbsp', name: 'chicken fat or oil' },
                { amount: 1, unit: 'tbsp', name: 'minced garlic' },
                { amount: 600, unit: 'ml', name: 'chicken poaching broth' },
            ],
        },
        {
            title: 'Hoi An Salad and Garnish',
            items: [
                { amount: 1, unit: 'large', name: 'onion', note: 'paper-thinly sliced' },
                { amount: 1, unit: 'bunch', name: 'Vietnamese coriander (rau răm)' },
                { amount: 1, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tbsp', name: 'chili jam (ớt chưng)', note: 'optional but recommended' },
            ],
        },
    ],
    steps: [
        {
            title: 'Poach the chicken',
            description: 'Rub chicken with turmeric and salt. Submerge in a pot of water with ginger and shallots. Bring to a boil, then simmer for 20-30 minutes until just cooked.',
            tip: 'Immediately soak the cooked chicken in ice water to keep the skin firm and the meat juicy.',
        },
        {
            title: 'Sauté the rice',
            description: 'Heat chicken fat in a pan. Sauté minced garlic until fragrant, then add the raw rice and stir-fry for 3 minutes until the grains turn opaque and are coated in fat.',
            tip: 'This "sealing" of the rice prevents it from becoming mushy and ensures each grain is infused with flavor.',
        },
        {
            title: 'Cook the rice',
            description: 'Transfer the sautéed rice to a rice cooker and use the hot chicken poaching broth as the cooking liquid.',
        },
        {
            title: 'Shred the chicken',
            description: 'Hand-shred the chicken into bite-sized pieces. Toss the meat gently with a pinch of salt, pepper, and a squeeze of lime.',
        },
        {
            title: 'Prepare the onion salad',
            description: 'Soak sliced onions in ice water for 10 minutes to remove the bite. Drain well, then toss with lime juice, sugar, and Vietnamese coriander.',
            tip: 'The salad should be crunchy, tangy, and bright to balance the savory rice.',
        },
        {
            title: 'Assemble and serve',
            description: 'Fluff the golden rice and plate it. Top with shredded chicken and the onion salad. Serve with a small bowl of broth and Hoi An-style chili jam.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
