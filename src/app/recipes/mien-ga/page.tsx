'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'mien-ga',
    title: 'Glass Noodle Chicken Soup',
    subtitle: 'Mien ga — translucent mung bean noodles in a fragrant chicken broth, topped with shredded poached chicken, wood ear mushrooms and black pepper.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 30 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/mien-ga.jpg',
    intro: 'Mien ga is what Hanoi quietly considers its best breakfast — light enough that you can keep working, deep enough that you remember it at lunch. The broth is built on a whole chicken simmered with charred ginger, then strained until crystal clear. The miến (glass noodles, made from mung bean starch) turn translucent in seconds. Topped with poached shredded chicken, wood ear mushrooms, fried shallots and a violent crack of black pepper. The Lunar New Year favourite when the whole family is tired of feast food.',
    ingredientSections: [
        {
            title: 'Chicken broth',
            items: [
                { amount: 1, name: 'whole free-range chicken', note: 'about 1.4kg' },
                { amount: 2.5, unit: 'L', name: 'water' },
                { amount: 50, unit: 'g', name: 'ginger', note: 'charred whole' },
                { amount: 1, name: 'large yellow onion', note: 'charred whole' },
                { amount: 1, unit: 'tbsp', name: 'rock sugar' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
            ],
        },
        {
            title: 'Noodles and toppings',
            items: [
                { amount: 200, unit: 'g', name: 'glass noodles (mien)', note: 'mung bean starch noodles' },
                { amount: 30, unit: 'g', name: 'dried wood ear mushrooms', note: 'soaked, sliced' },
                { amount: 20, unit: 'g', name: 'dried lily flowers', note: 'optional, soaked' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots' },
            ],
        },
        {
            title: 'To finish',
            items: [
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, name: 'small bunch cilantro', note: 'chopped' },
                { amount: 1, unit: 'tsp', name: 'freshly cracked black pepper' },
                { amount: 2, name: 'limes', note: 'cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Char the aromatics',
            description: 'Place ginger and onion directly over an open flame until the skins blacken and the kitchen smells smoky, about 4 minutes. Do not rinse off the char.',
            tip: 'A gas burner is ideal. A dry cast-iron pan over high heat works as a substitute.',
        },
        {
            title: 'Poach the chicken',
            description: 'Place the whole chicken in a large pot, cover with 2.5L cold water, add charred ginger and onion. Bring to a gentle simmer. Skim foam aggressively for the first 10 minutes, then reduce heat to very low and poach for 35 minutes.',
            tip: 'Never let it boil hard. The chicken should be poached, not boiled, to stay tender.',
        },
        {
            title: 'Cool and shred',
            description: 'Lift the chicken out and plunge into a bowl of ice water for 5 minutes — this firms the skin and locks in moisture. Pull the meat from the bones in long shreds. Return the bones to the pot and continue simmering for another 30 minutes for depth.',
        },
        {
            title: 'Prepare the toppings',
            description: 'Soak wood ear mushrooms and lily flowers in warm water for 15 minutes until soft. Drain and slice the wood ear into thin strips. Saute briefly in 1 tbsp oil with a pinch of salt for 2 minutes; set aside.',
        },
        {
            title: 'Strain and season',
            description: 'Strain the broth through a fine sieve into a clean pot. Discard solids. Season with rock sugar, fish sauce and salt. Taste — it should be clean, gently sweet from the chicken, savoury from fish sauce. Keep at a low simmer.',
        },
        {
            title: 'Cook the noodles separately',
            description: 'Soak glass noodles in cold water for 10 minutes until pliable. Bring a separate pot of water to a boil and cook the noodles for 60 seconds only. Drain immediately and rinse under cold water to stop cooking.',
            tip: 'Glass noodles overcook in seconds. Pull them the moment they turn translucent.',
        },
        {
            title: 'Assemble and serve',
            description: 'Divide noodles among 4 bowls. Top with shredded chicken, wood ear mushrooms and lily flowers. Ladle hot broth over. Finish with fried shallots, spring onion, cilantro and a generous crack of black pepper. Serve with lime wedges on the side.',
            tip: 'The pepper is what makes it. Crack it freshly over each bowl with conviction.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
