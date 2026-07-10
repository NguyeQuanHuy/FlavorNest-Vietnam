'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-hen-song-son',
    title: `Sông Son Freshwater Clam Noodle Soup`,
    subtitle: `Bún Hến Sông Son — Quảng Bình's freshwater clam noodle soup with lemongrass broth — sweeter and cleaner than Huế's briny coastal version.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bún hến Sông Son is built around the freshwater clams (hến, Corbicula fluminea) of the Sông Son — the river that flows from the Phong Nha-Kẻ Bàng karst massif through Bố Trạch district before joining the Gianh River. The Sông Son runs cold and clear over limestone bedrock, and the hến that inhabit its sandy substrate develop a specific character from this environment: smaller than sea clams, with a sweeter, cleaner flavour and none of the brininess of coastal varieties.\n\nThe distinction from Huế's celebrated bún hến is fundamental. Huế's version uses coastal estuary hến with a briny, slightly muddy flavour intensity that is balanced by shrimp paste and fermented condiments. Quảng Bình's Sông Son version uses freshwater karst-river hến whose natural sweetness requires no fermented condiment balance — the broth is built on the clams' own liquor, lemongrass, and a small amount of pork bones, producing a soup that is clear, delicately sweet, and aromatic without the pungency of the Huế preparation.\n\nThis is central Vietnamese minimalism applied to noodle soup: the ingredient does the work, the technique stays back.`,
    ingredientSections: [
        {
            title: `Freshwater clams`,
            items: [
                { amount: 800, unit: 'g', name: `fresh freshwater clams (hen song)`, note: `Corbicula fluminea — purged in salted water 2 hours; substitute: fresh small surf clams or cockles` },
                { amount: 2, unit: 'L', name: `cold water`, note: `for purging` },
                { amount: 2, unit: 'tbsp', name: `salt`, note: `for purging water` },
            ],
        },
        {
            title: `Broth`,
            items: [
                { amount: 300, unit: 'g', name: `pork bones (xuong heo)`, note: `blanched and rinsed — light body only` },
                { amount: 3, name: `lemongrass stalks, bruised` },
                { amount: 2, name: `shallots, charred` },
                { amount: 20, unit: 'g', name: `rock sugar` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 1.5, unit: 'L', name: `water` },
            ],
        },
        {
            title: `Clam stir-fry topping`,
            items: [
                { amount: 3, name: `shallots, minced` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 1, name: `lemongrass stalk, inner white only, minced` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Noodles and garnish`,
            items: [
                { amount: 400, unit: 'g', name: `fresh rice vermicelli (bun tuoi)` },
                { amount: 3, name: `spring onions, sliced` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch ngo gai` },
                { amount: 150, unit: 'g', name: `bean sprouts, raw` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
                { amount: 1, unit: 'tbsp', name: `pork lard or neutral oil` },
            ],
        },
    ],
    steps: [
        {
            title: `Purge the clams`,
            description: `Dissolve salt in cold water in a wide bowl. Add clams and soak 2 hours — they will expel sand and grit. Lift out (do not pour — sand resettles). Rinse each clam under cold water. Tap any open clams — discard those that do not close. The Sông Son hến are smaller than sea clams; allow extra time to purge the fine limestone sand from their shells.`,
        },
        {
            title: `Steam and remove clam meat`,
            description: `Steam purged clams in a covered wok with 200ml water over high heat 3-4 minutes until all shells open. Discard any that do not open. Strain the steaming liquid through cheesecloth — reserve this clam liquor, it is the most flavourful element of the dish. Remove clam meat from shells. The clam meat is small — each Sông Son hến yields one tiny morsel. Combine clam meat in a bowl, set aside.`,
            tip: `The clam steaming liquor is the broth's most important flavouring addition. The Sông Son limestone water gives the clams' liquor a mineral sweetness specific to karst-river freshwater clams — it is measurably different from coastal clam liquor. Add all of it to the finished broth. Do not discard even a spoonful.`,
        },
        {
            title: `Build the light broth`,
            description: `Blanch pork bones, rinse clean. Combine with charred shallots, lemongrass, and 1.5L water. Bring to boil, skim 10 minutes, reduce to low simmer. Cook 45 minutes. Add the reserved clam steaming liquor to the broth. Season with rock sugar, fish sauce, and salt. The broth should be pale gold, lightly sweet, and have the clean mineral note of the Sông Son clams underneath the lemongrass fragrance.`,
        },
        {
            title: `Stir-fry the clam meat`,
            description: `Heat oil in a wok over high heat. Sauté shallots, garlic, and lemongrass 90 seconds. Add clam meat, toss quickly 60 seconds — just to coat in the aromatics and warm through. Season with fish sauce and black pepper. Do not overcook — the small freshwater clams toughen within 90 seconds of high heat. Remove immediately.`,
        },
        {
            title: `Assemble and serve`,
            description: `Place lard or oil in bowl bottom. Add blanched bún vermicelli. Spoon stir-fried clam meat over. Ladle hot broth. Add spring onion, fried shallots. Serve with full herb plate. In Bố Trạch district along the Sông Son, this soup is eaten at breakfast at riverside stalls where the hến are collected from the riverbed before dawn. The clarity of the broth and the sweetness of the freshwater clam are its identifying qualities — add condiments sparingly so neither is masked.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}