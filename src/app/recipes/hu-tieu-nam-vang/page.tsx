'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'hu-tieu-nam-vang',
    title: 'Phnom Penh Noodle Soup',
    subtitle: 'A Saigon institution with Cambodian roots — clear, slightly sweet pork broth with rice noodles and prawns.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1600&q=85',
    intro: `Hu tieu Nam Vang arrived in Saigon with the Teochew Chinese community from Phnom Penh in the mid-20th century and never left. The broth is lighter and sweeter than pho — built on pork bones and dried squid, seasoned with fish sauce and rock sugar into something clean and slightly marine. The noodles can be flat rice noodles or thin egg noodles. The toppings are generous: minced pork, sliced pork, whole prawns, and a poached egg. The dish can be served as a soup or "kho" — dry, with the broth on the side for dipping.`,
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 1, unit: 'kg', name: 'pork bones', note: 'knuckle and neck bones' },
                { amount: 20, unit: 'g', name: 'dried squid', note: 'rinsed' },
                { amount: 20, unit: 'g', name: 'dried shrimp' },
                { amount: 1, name: 'onion', note: 'charred' },
                { amount: 2, unit: 'l', name: 'water' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'rock sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 200, unit: 'g', name: 'minced pork', note: 'seasoned with fish sauce and pepper, formed into small balls' },
                { amount: 150, unit: 'g', name: 'pork tenderloin', note: 'thinly sliced' },
                { amount: 200, unit: 'g', name: 'large prawns', note: 'peeled, deveined' },
                { amount: 4, name: 'eggs', note: 'poached or soft-boiled' },
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 2, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 80, unit: 'g', name: 'bean sprouts' },
            ],
        },
        {
            title: 'Noodles',
            items: [
                { amount: 400, unit: 'g', name: 'fresh hu tieu noodles', note: 'or dried thin rice noodles' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the broth',
            description: 'Parboil pork bones in cold water for 10 minutes, drain and rinse. Return to a clean pot with 2 litres of water, dried squid, dried shrimp, and charred onion. Bring to a boil, skim foam, then reduce to a gentle simmer for 1.5 hours.',
            tip: 'Dried squid is the secret ingredient that gives hu tieu its distinctive lightly marine sweetness. Do not substitute.',
        },
        {
            title: 'Season the broth',
            description: 'Strain broth through a fine sieve. Season with fish sauce, rock sugar, and salt. Taste carefully — the broth should be lighter and sweeter than pho, with a clean finish.',
        },
        {
            title: 'Cook the toppings',
            description: 'Drop minced pork balls into the simmering broth and cook 3 minutes until cooked through. Blanch sliced pork and prawns separately in the broth for 1 to 2 minutes. Poach eggs in gently simmering water for 3 minutes.',
        },
        {
            title: 'Cook the noodles',
            description: 'Blanch noodles in boiling water for 1 to 2 minutes. Drain and divide into bowls.',
        },
        {
            title: 'Assemble',
            description: 'Arrange toppings over noodles. Ladle hot broth over everything. Top with spring onions, fried shallots, and bean sprouts. Serve with sliced chilli and hoisin sauce on the side. For the dry version, hold the broth and serve it in a separate bowl.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
