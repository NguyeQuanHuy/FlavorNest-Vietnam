'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-ga',
    title: 'Vietnamese Chicken Congee',
    subtitle: 'Chao ga — silky rice porridge built on a whole chicken simmered with charred ginger and onion, then shredded back into the pot.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 30 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/chao-ga.jpg',
    intro: 'Chao ga is the soup every Vietnamese mother makes when someone has a cold — and the soup that proves she was right. The rice is toasted briefly to deepen the flavour, then simmered low and slow with a whole chicken until the grains break down into something between a porridge and a soup. The chicken is pulled, shredded, and returned at the end. Finished with fried shallots, spring onion, a handful of fresh herbs and a violent crack of black pepper. Served with a small saucer of fish sauce mixed with fresh chilli for dipping the chicken pieces.',
    ingredientSections: [
        {
            title: 'Chicken and broth',
            items: [
                { amount: 1, name: 'whole free-range chicken', note: 'about 1.4kg, cleaned' },
                { amount: 100, unit: 'g', name: 'jasmine rice' },
                { amount: 30, unit: 'g', name: 'glutinous rice', note: 'for silky texture' },
                { amount: 2.5, unit: 'L', name: 'water' },
                { amount: 50, unit: 'g', name: 'ginger', note: 'charred whole' },
                { amount: 1, name: 'large yellow onion', note: 'charred whole' },
                { amount: 1, unit: 'tbsp', name: 'sea salt' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, name: 'small bunch cilantro', note: 'chopped' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)', note: 'optional' },
                { amount: 1, unit: 'tsp', name: 'freshly cracked black pepper' },
                { amount: 2, name: 'limes', note: 'cut in wedges' },
            ],
        },
        {
            title: 'Dipping sauce',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'lime juice' },
                { amount: 2, name: 'birds eye chillies', note: 'sliced' },
                { amount: 1, name: 'pinch of sugar' },
            ],
        },
    ],
    steps: [
        {
            title: 'Toast the rice',
            description: 'In a dry heavy pot, toast both rice varieties together over medium heat for 5 minutes, stirring constantly, until pale gold and nutty-smelling. This is the secret to deeply flavoured chao — untoasted rice gives a flat porridge.',
            tip: 'Aim for the colour of straw, not toast. Burnt rice turns the whole pot bitter.',
        },
        {
            title: 'Char the aromatics',
            description: 'Place ginger and onion directly over an open flame until the skins blacken and the kitchen smells smoky, about 4 minutes. Do not rinse off the char.',
        },
        {
            title: 'Simmer the chicken',
            description: 'Add the toasted rice, whole chicken, charred ginger and onion, and 2.5L of water to the pot. Bring to a gentle simmer. Skim foam aggressively for the first 10 minutes. Reduce heat to low and simmer uncovered for 45 minutes.',
            tip: 'Never let it boil hard. The chicken should poach gently to stay tender.',
        },
        {
            title: 'Pull and shred',
            description: 'Lift the chicken out and plunge into a bowl of ice water for 5 minutes — this firms the skin and keeps the meat moist. Once cool, pull the meat from the bones in long shreds. Return the bones to the pot and continue simmering for another 30 minutes so the rice fully breaks down.',
        },
        {
            title: 'Finish the chao',
            description: 'Strain bones from the porridge. The texture should be silky — somewhere between thick soup and loose porridge. If too thick, splash in hot water; if too thin, simmer uncovered a few more minutes. Season with fish sauce and salt. Taste and adjust.',
        },
        {
            title: 'Assemble and serve',
            description: 'Mix dipping sauce ingredients in a small bowl. Ladle hot chao into 4 bowls. Top each generously with shredded chicken, fried shallots, spring onion and herbs. Crack black pepper over the top with conviction. Serve with the dipping sauce on the side for the chicken pieces.',
            tip: 'The pepper is not optional. A heavy hand of fresh-cracked black pepper is what defines a proper bowl of Vietnamese chao.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
