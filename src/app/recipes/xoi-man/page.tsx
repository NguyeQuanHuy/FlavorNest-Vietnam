'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'xoi-man',
    title: 'Savoury Sticky Rice',
    subtitle: 'Xoi man — steamed glutinous rice piled high with Chinese sausage, shredded chicken, dried shrimp and a drizzle of soy. Saigon street breakfast.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '50 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1579856896394-07dfa10d7c5b?auto=format&fit=crop&w=1600&q=85',
    intro: 'In Saigon, xoi man is the breakfast you grab from a bicycle vendor on the way to work — sticky rice mounded into a cone of banana leaf, weighed down with a small mountain of toppings, and eaten with a plastic spoon while waiting for the traffic light. The rice is steamed long enough to be glossy and chewy but not gummy. The toppings vary by stall but always include lap xuong (Chinese sausage), and always more than you think one person could eat. They are wrong. You will finish it.',
    ingredientSections: [
        {
            title: 'Sticky rice',
            items: [
                { amount: 400, unit: 'g', name: 'glutinous rice', note: 'soaked overnight' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
                { amount: 2, unit: 'tbsp', name: 'rendered chicken fat or neutral oil' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 200, unit: 'g', name: 'lap xuong (Chinese sausage)', note: 'sliced' },
                { amount: 250, unit: 'g', name: 'cooked shredded chicken', note: 'or rotisserie chicken' },
                { amount: 30, unit: 'g', name: 'dried shrimp', note: 'soaked 10 minutes' },
                { amount: 100, unit: 'g', name: 'cha lua (Vietnamese pork sausage)', note: 'diced' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots' },
            ],
        },
        {
            title: 'Sauce and finish',
            items: [
                { amount: 2, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 3, name: 'spring onions', note: 'finely sliced' },
                { amount: 0.5, unit: 'tsp', name: 'freshly cracked black pepper' },
                { amount: 2, unit: 'tbsp', name: 'pickled chilli', note: 'optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Soak the rice overnight',
            description: 'Rinse the glutinous rice 3 times until the water runs clear. Cover with cold water by 5cm and soak overnight. Under-soaked rice will have hard centres no matter how long you steam it.',
            tip: 'Minimum 6 hours. Overnight is better. Do not skip.',
        },
        {
            title: 'Steam the rice',
            description: 'Drain the rice, toss with salt. Spread evenly in a steamer basket lined with cheesecloth or banana leaf. Steam over medium heat for 30 minutes, fluffing once at the halfway mark so the grains cook evenly. The rice is ready when it is glossy and stretches when pinched.',
        },
        {
            title: 'Pan-fry the lap xuong',
            description: 'In a dry pan over medium heat, fry the sliced Chinese sausage for 2 minutes until the edges curl and the fat renders. The rendered fat is liquid gold — reserve every drop.',
        },
        {
            title: 'Saute the dried shrimp',
            description: 'Drain the soaked dried shrimp. Saute in the lap xuong fat for 2 minutes until fragrant and slightly crispy. Set aside.',
        },
        {
            title: 'Make the sauce',
            description: 'In a small bowl, whisk together soy sauce, oyster sauce and sugar. The sauce should taste sweet, savoury and slightly umami.',
        },
        {
            title: 'Finish and serve',
            description: 'Toss the steamed rice with rendered chicken fat or oil while still hot — this gives the signature glossy chewy texture. Mound rice onto plates. Top with shredded chicken, lap xuong, cha lua, dried shrimp, fried shallots and spring onion. Drizzle generously with the soy sauce. Crack pepper over the top.',
            tip: 'Eaten properly: mash everything together with a spoon before the first bite. Saigon street vendors do this for you with a flick of the wrist.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
