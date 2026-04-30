'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'hu-tieu-kho',
    title: 'Dry Hu Tieu',
    subtitle: 'Hu tieu kho — springy rice noodles tossed with sweet soy and fried garlic oil, with shrimp, pork and a small bowl of broth on the side.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=1600&q=85',
    intro: 'Hu tieu kho is the format Saigon mornings prefer — same toppings as the soup version, but the noodles arrive tossed with sweet soy and fried garlic oil, with the broth in a small bowl on the side. The sauce-coated noodles are slurped first while still hot and glossy; the broth is sipped between bites like tea. Choose this over hu tieu nuoc and locals will quietly nod at you. Order it with the broth poured over and they will not.',
    ingredientSections: [
        {
            title: 'Pork broth',
            items: [
                { amount: 800, unit: 'g', name: 'pork bones', note: 'split, blanched' },
                { amount: 200, unit: 'g', name: 'pork loin', note: 'whole piece' },
                { amount: 30, unit: 'g', name: 'dried squid', note: 'or 30g dried shrimp' },
                { amount: 2.5, unit: 'L', name: 'water' },
                { amount: 1, name: 'large yellow onion', note: 'charred whole' },
                { amount: 50, unit: 'g', name: 'rock sugar' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 12, name: 'large shrimp', note: 'peeled, deveined' },
                { amount: 200, unit: 'g', name: 'ground pork' },
                { amount: 12, name: 'quail eggs', note: 'hard-boiled and peeled' },
                { amount: 100, unit: 'g', name: 'cha lua (Vietnamese pork sausage)', note: 'sliced' },
            ],
        },
        {
            title: 'Noodle dressing',
            items: [
                { amount: 400, unit: 'g', name: 'fresh hu tieu noodles' },
                { amount: 4, unit: 'tbsp', name: 'soy sauce' },
                { amount: 2, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 2, unit: 'tsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'fried garlic oil', note: 'see step 4' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 4, unit: 'tbsp', name: 'crispy fried garlic' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'bunch garlic chives (he)', note: 'cut in 3cm lengths' },
                { amount: 200, unit: 'g', name: 'bean sprouts' },
                { amount: 2, name: 'limes', note: 'cut in wedges' },
                { amount: 0.5, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the broth',
            description: 'Blanch pork bones 5 minutes, drain and rinse. Return to a clean pot with pork loin, charred onion, dried squid and 2.5L fresh water. Simmer gently for 90 minutes, skimming for the first 10. Pull the pork loin after 30 minutes, slice thin. Strain and season with rock sugar and fish sauce.',
            tip: 'A clear sweet broth is what makes the dry version sing — it cuts through the rich noodles.',
        },
        {
            title: 'Cook the toppings',
            description: 'Poach shrimp in salted water for 90 seconds. Saute ground pork in 1 tbsp oil with salt and pepper for 5 minutes until lightly browned. Set both aside.',
        },
        {
            title: 'Make the fried garlic oil',
            description: 'Heat 6 tbsp neutral oil in a small pan over medium heat. Add 6 tbsp minced garlic and fry, stirring constantly, until pale gold — 2 minutes only. Strain immediately. Reserve 4 tbsp of the fragrant oil for tossing the noodles; reserve 4 tbsp of crispy fried garlic for garnish.',
            tip: 'Burnt garlic ruins the dish. Pull it the moment it turns gold, not brown.',
        },
        {
            title: 'Mix the noodle dressing',
            description: 'In a large bowl, whisk together soy sauce, oyster sauce, sugar and the reserved fried garlic oil. The dressing should taste sweet, salty and deeply garlicky.',
        },
        {
            title: 'Cook the noodles',
            description: 'Bring water to a boil. Cook fresh hu tieu noodles for 90 seconds until springy and translucent. Drain and add immediately to the dressing bowl while still hot — toss thoroughly until every strand is glossy.',
        },
        {
            title: 'Plate and serve',
            description: 'Divide dressed noodles among 4 plates. Top with sliced pork loin, shrimp, ground pork, quail eggs and cha lua. Scatter fried garlic, spring onion and chives generously. Crack pepper over the top. Serve with the hot broth in a separate small bowl on the side, alongside bean sprouts and lime.',
            tip: 'Eat the noodles fast while still glossy. Sip the broth between bites. This is the Saigon way.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
