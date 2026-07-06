'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'mien-luon',
    title: 'Glass Noodles with Crispy Eel',
    subtitle: 'Mien luon — translucent glass noodles in a faintly smoky eel broth, topped with strips of fried eel and a generous shower of fresh dill.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/mien-luon.jpg',
    intro: 'Mien luon is one of those Hanoi dishes that takes patience to do properly and effort to find. The eel must be live or fresh — never frozen — boned by hand, then cut into strips and twice-fried until each piece is shatter-crisp on the outside, tender within. The broth is built on the eel bones with charred ginger and dried shrimp; the noodles are translucent mung bean glass noodles. Served as soup or dry, what defines mien luon is the contrast: the silk of the noodles, the crackle of the eel, and a violent shower of fresh dill at the end.',
    ingredientSections: [
        {
            title: 'Eel preparation',
            items: [
                { amount: 600, unit: 'g', name: 'fresh river eel', note: 'cleaned, deboned, fillets reserved' },
                { amount: 1, unit: 'tsp', name: 'sea salt', note: 'for cleaning' },
                { amount: 2, unit: 'tbsp', name: 'rice vinegar', note: 'for cleaning the slime' },
                { amount: 1, unit: 'tbsp', name: 'turmeric powder' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Eel broth',
            items: [
                { amount: 1, name: 'reserved eel bones and head' },
                { amount: 1.8, unit: 'L', name: 'water' },
                { amount: 30, unit: 'g', name: 'ginger', note: 'charred' },
                { amount: 1, name: 'large yellow onion', note: 'charred' },
                { amount: 30, unit: 'g', name: 'dried shrimp', note: 'rinsed' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'rock sugar' },
            ],
        },
        {
            title: 'Toppings and finish',
            items: [
                { amount: 200, unit: 'g', name: 'glass noodles (mien)', note: 'mung bean starch, soaked' },
                { amount: 30, unit: 'g', name: 'dried wood ear mushrooms', note: 'soaked, sliced' },
                { amount: 1, name: 'large bunch fresh dill', note: 'cut in 4cm lengths' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'for frying eel' },
                { amount: 1, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean the eel properly',
            description: 'Rub eel with salt and rice vinegar, then rinse aggressively under cold water until the slime is fully gone. Pat completely dry. Cut the deboned fillets into strips 5cm long and 1cm wide. Marinate with turmeric, fish sauce and pepper for 20 minutes.',
            tip: 'Improperly cleaned eel tastes muddy. The salt-vinegar rub is non-negotiable.',
        },
        {
            title: 'Build the eel broth',
            description: 'Char ginger and onion over an open flame. In a pot, combine eel bones and head with 1.8L cold water, charred aromatics and dried shrimp. Bring to a gentle simmer and cook 60 minutes, skimming foam aggressively for the first 15. Strain into a clean pot and discard solids. Season with fish sauce and rock sugar.',
            tip: 'Never boil hard. Eel broth turns muddy in seconds at high heat.',
        },
        {
            title: 'Twice-fry the eel',
            description: 'Heat oil to 160C. Fry eel strips in batches for 4 minutes until pale gold. Drain on paper and let rest 5 minutes. Raise oil to 190C and fry again for 90 seconds until deep gold and shatter-crisp. The double-fry is what creates the signature crackle.',
            tip: 'Crowding the oil drops the temperature and steams the eel. Fry in small batches.',
        },
        {
            title: 'Saute the wood ear',
            description: 'Drain soaked wood ear mushrooms and slice into thin strips. Saute in 1 tbsp oil with a pinch of salt for 90 seconds until fragrant. Set aside.',
        },
        {
            title: 'Cook the noodles separately',
            description: 'Soak glass noodles in cold water for 10 minutes until pliable. Bring water to a boil and cook noodles for 60 seconds only. Drain and rinse under cold water. The noodles should be translucent and springy.',
            tip: 'Cooked too long, glass noodles turn into glue. Pull them the moment they go clear.',
        },
        {
            title: 'Assemble and serve',
            description: 'Divide noodles among 4 bowls. Top with wood ear mushrooms and crispy eel strips. Ladle hot broth over. Finish with a generous handful of dill, spring onion, fried shallots and a violent crack of black pepper. Serve immediately while the eel is still crackling.',
            tip: 'For mien luon kho (dry version), toss noodles with 2 tbsp soy sauce and a spoonful of fried shallot oil before topping; serve broth in a small bowl on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
