'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'pho-bo-ha-noi',
    title: 'Hanoi Beef Pho',
    subtitle: 'The soul of Vietnamese cuisine — a broth so clear it feels like liquid amber.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '3 hrs 20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1600&q=85',
    intro: `There is a particular kind of silence in Hanoi at five in the morning. The Old Quarter has not woken yet, the motorbikes have not started, and the only sound drifting through the alleyways is the low, steady bubble of a pho pot that has been simmering since midnight. This is where pho begins — not with the recipe, but with the ritual. A crystal-clear bone broth perfumed with charred ginger, star anise and cinnamon. Silky flat noodles. Paper-thin beef added raw and cooked only by the boiling broth poured over at the table. Nothing more. Nothing less.`,
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 1.5, unit: 'kg', name: 'beef bones', note: 'knuckle and marrow bones mixed' },
                { amount: 500, unit: 'g', name: 'beef brisket', note: 'whole piece' },
                { amount: 3, unit: 'l', name: 'cold water' },
                { amount: 1, name: 'large onion', note: 'halved, charred directly over flame' },
                { amount: 60, unit: 'g', name: 'fresh ginger', note: 'halved, charred' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'rock sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Spice bundle',
            items: [
                { amount: 4, name: 'star anise' },
                { amount: 1, name: 'cinnamon stick', note: '8cm' },
                { amount: 4, name: 'cloves' },
                { amount: 1, name: 'black cardamom pod', note: 'lightly crushed' },
                { amount: 1, unit: 'tsp', name: 'coriander seeds', note: 'toasted' },
            ],
        },
        {
            title: 'Per bowl',
            items: [
                { amount: 80, unit: 'g', name: 'dried pho noodles', note: 'or 150g fresh' },
                { amount: 80, unit: 'g', name: 'beef sirloin or eye of round', note: 'sliced paper-thin, raw' },
                { amount: 2, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, unit: 'tbsp', name: 'crispy fried shallots' },
            ],
        },
        {
            title: 'Table garnish',
            items: [
                { amount: 1, name: 'bunch Thai basil' },
                { amount: 1, name: 'bunch bean sprouts' },
                { amount: 2, name: 'fresh red chillies', note: 'sliced' },
                { amount: 2, name: 'limes', note: 'cut into wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Parboil the bones',
            description: 'Place bones in a large pot, cover with cold water, bring to a boil and cook for 10 minutes. Drain and rinse bones thoroughly under cold water. This removes impurities and ensures a clear, golden broth.',
            tip: 'Do not skip the parboil. It is the difference between a murky grey broth and a crystal-clear one.',
        },
        {
            title: 'Char the aromatics',
            description: 'Halve the onion and ginger. Place directly over a gas flame or under a broiler until blackened in patches — about 5 minutes per side. The charring caramelises the sugars and adds the distinctive smoky sweetness of Hanoi pho.',
        },
        {
            title: 'Toast the spices',
            description: 'Toast star anise, cinnamon, cloves, cardamom, and coriander seeds in a dry pan over medium heat for 2 minutes until fragrant. Tie in muslin cloth or place in a spice bag.',
        },
        {
            title: 'Build and simmer the broth',
            description: 'Return bones and brisket to the cleaned pot. Add 3 litres of cold water, charred aromatics, and spice bag. Bring to a boil, skim all foam carefully, then reduce to the gentlest possible simmer. Cook for 3 hours uncovered, skimming occasionally. Remove brisket after 90 minutes when tender.',
            tip: 'A rolling boil clouds the broth. The stock should barely move — just an occasional bubble breaking the surface. Patience produces clarity.',
        },
        {
            title: 'Season the broth',
            description: 'Strain broth through a fine mesh sieve lined with cheesecloth. Season with fish sauce, rock sugar, and salt. Taste carefully — the broth should be deeply savoury, slightly sweet, and perfectly clean on the finish. Keep hot at a gentle simmer.',
        },
        {
            title: 'Assemble each bowl',
            description: 'Cook pho noodles according to packet instructions. Divide into deep bowls. Slice raw sirloin paper-thin and lay over noodles. Slice the cooked brisket and add to each bowl. Top with spring onions and fried shallots. Pour boiling hot broth over everything at the table — the heat cooks the raw beef instantly.',
            tip: 'The broth must be at a full boil when poured. Warm broth does not cook the raw beef safely or properly.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
