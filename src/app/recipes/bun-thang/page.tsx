'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-thang',
    title: 'Hanoi Vermicelli Soup',
    subtitle: 'The most refined bowl in Vietnamese cuisine — 20 toppings, a crystal-clear broth, and a hundred years of patience.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '2 hrs',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1600&q=85',
    intro: 'Bun thang is the aristocrat of Hanoi noodle soups. Born from the tradition of cooking lavish post-Tet meals with leftover chicken and cha lua, it evolved into one of the most technically demanding dishes in the Northern canon. The broth must be completely clear and deeply complex — built on chicken, dried shrimp, and dried squid. The toppings are sliced with the precision of a surgeon: egg ribbons cut to the width of the noodles, shredded chicken teased into individual strands, paper-thin cha lua. To eat bun thang properly requires the same patience it takes to make it.',
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 1, name: 'whole chicken', note: 'about 1.5kg' },
                { amount: 20, unit: 'g', name: 'dried shrimp (tom kho)' },
                { amount: 10, unit: 'g', name: 'dried squid', note: 'optional, adds depth' },
                { amount: 1, name: 'onion', note: 'charred' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'charred' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'rock sugar' },
                { amount: 2, unit: 'l', name: 'water' },
            ],
        },
        {
            title: 'Egg ribbons (cha trung)',
            items: [
                { amount: 3, name: 'eggs' },
                { amount: 1, name: 'pinch of salt' },
                { amount: 1, unit: 'tsp', name: 'vegetable oil' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 200, unit: 'g', name: 'cha lua (Vietnamese pork sausage)', note: 'thinly sliced then julienned' },
                { amount: 3, name: 'dried shrimp', note: 'rehydrated and kept whole for garnish' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 2, unit: 'tbsp', name: 'crispy fried shallots' },
            ],
        },
        {
            title: 'Per bowl',
            items: [
                { amount: 80, unit: 'g', name: 'dried bun noodles (rice vermicelli)', note: 'cooked and drained' },
                { amount: 1, unit: 'tsp', name: 'mam tom (shrimp paste)', note: 'optional, added at table' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the broth',
            description: 'Place whole chicken, dried shrimp, dried squid, charred onion, and charred ginger in a large pot. Cover with cold water and bring to a boil. Skim all foam carefully. Reduce to a very gentle simmer and cook for 1 hour until chicken is cooked through. Remove chicken and set aside to cool. Continue simmering broth for 30 more minutes.',
            tip: 'The broth must never boil vigorously. A rolling boil emulsifies the fat and turns the stock cloudy. Bun thang demands crystal clarity.',
        },
        {
            title: 'Shred the chicken',
            description: 'When cool enough to handle, remove all meat from the chicken. Tear breast meat into individual strands by hand — not sliced, not chopped. The individual fibres give the topping its distinctive delicate texture.',
        },
        {
            title: 'Make egg ribbons',
            description: 'Whisk eggs with salt. Heat a non-stick pan with a tiny amount of oil over the lowest possible heat. Pour in just enough egg to coat the pan in a paper-thin layer. Cook without touching until set but not coloured — about 60 seconds. Slide out, cool, and roll tightly. Slice crosswise into thin ribbons the same width as the bun noodles.',
            tip: 'The egg sheets should be pale yellow, not golden. Any browning is a sign the heat was too high.',
        },
        {
            title: 'Season the broth',
            description: 'Strain broth through fine mesh cheesecloth. Season with fish sauce, rock sugar, and salt. The flavour should be delicate but complex — savoury from the shrimp and squid, clean from the chicken, with no single element dominating.',
        },
        {
            title: 'Assemble each bowl',
            description: 'Place cooked bun noodles in bowls. Arrange shredded chicken, julienned cha lua, and egg ribbons in separate neat sections over the noodles. Top with spring onions and fried shallots. Ladle hot broth over everything at the table. Serve with a small side of mam tom for those who want it.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
