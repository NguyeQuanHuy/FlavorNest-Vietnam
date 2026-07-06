'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-mam-nem',
    title: 'Vermicelli with Anchovy Sauce',
    subtitle: 'Bun mam nem — cold rice vermicelli with sliced pork, fried tofu and herbs, with the funky pineapple-anchovy dipping sauce that defines Da Nang.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/bun-mam-nem.jpg',
    intro: 'Bun mam nem is the lunchtime answer in Da Nang. The components are simple — vermicelli, boiled pork belly, fried tofu, a pile of fresh herbs — but the entire dish hinges on the sauce. Mam nem is fermented anchovy at its most uncompromising, smoothed and brightened with grated pineapple, lime, garlic, sugar and chilli into something pungent and sweet and sour and spicy at the same time. Once you understand mam nem, every other dipping sauce in the world feels polite by comparison. Da Nang locals eat this 3 times a week without complaint.',
    ingredientSections: [
        {
            title: 'The bowl',
            items: [
                { amount: 400, unit: 'g', name: 'rice vermicelli (bun)', note: 'cooked, cooled, formed into mats' },
                { amount: 400, unit: 'g', name: 'pork belly', note: 'whole piece, skin on' },
                { amount: 300, unit: 'g', name: 'firm white tofu', note: 'cut in 2cm cubes' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'for frying tofu' },
                { amount: 1, unit: 'tsp', name: 'sea salt', note: 'for boiling pork' },
                { amount: 1, name: 'thumb of ginger', note: 'sliced, for boiling pork' },
            ],
        },
        {
            title: 'Mam nem sauce',
            items: [
                { amount: 5, unit: 'tbsp', name: 'mam nem (fermented anchovy sauce)' },
                { amount: 150, unit: 'g', name: 'fresh pineapple', note: 'finely grated' },
                { amount: 3, unit: 'tbsp', name: 'palm sugar' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'birds eye chillies', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Herbs and finish',
            items: [
                { amount: 1, name: 'small head lettuce', note: 'leaves separated' },
                { amount: 1, name: 'large bunch perilla' },
                { amount: 1, name: 'large bunch Vietnamese balm' },
                { amount: 1, name: 'small bunch mint' },
                { amount: 1, name: 'cucumber', note: 'sliced' },
                { amount: 200, unit: 'g', name: 'bean sprouts' },
                { amount: 1, name: 'green mango', note: 'shredded, optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Boil the pork belly',
            description: 'Place pork belly in a small pot, cover with cold water, add salt and ginger. Bring to a gentle simmer and poach 25 minutes until a chopstick slides through cleanly. Plunge into ice water for 5 minutes to firm the texture, then slice thin against the grain.',
            tip: 'A hard boil turns the belly stringy. Lazy simmer keeps it silky.',
        },
        {
            title: 'Press and fry the tofu',
            description: 'Sandwich tofu cubes between paper towels under a heavy plate for 15 minutes. Heat oil in a heavy pan until shimmering. Fry tofu in a single layer for 3 minutes per side until golden and crisp on the outside. Drain on paper.',
            tip: 'Wet tofu refuses to crisp. Press first, fry second, no exceptions.',
        },
        {
            title: 'Form the vermicelli mats',
            description: 'Cook rice vermicelli according to package instructions, drain and rinse cold until completely cool. With clean hands, gather small handfuls and press into flat mats about the size of a credit card. Set on the serving platter.',
        },
        {
            title: 'Build the mam nem sauce',
            description: 'In a saucepan, warm oil over medium heat. Add garlic and saute 30 seconds until fragrant. Add grated pineapple and palm sugar, cook 3 minutes until the pineapple softens and releases juice. Stir in mam nem and 60ml water. Simmer 5 minutes until slightly thickened. Off heat, add lime juice and minced chilli. Taste — the sauce should be funky, sweet, sour and spicy in roughly equal measure.',
            tip: 'Mam nem is intense. Start with less lime than you think and build up.',
        },
        {
            title: 'Build the platter',
            description: 'Arrange vermicelli mats, sliced pork belly, fried tofu, all the herbs, cucumber, bean sprouts and green mango on a wide platter. Place the bowl of warm mam nem sauce in the centre.',
        },
        {
            title: 'Eat the Da Nang way',
            description: 'Each guest takes a vermicelli mat, tops it with a slice of pork, a piece of tofu, a few leaves of perilla and balm, a slice of cucumber and a small handful of bean sprouts. Roll loosely with chopsticks or pick up with hands. Dip generously into the mam nem. Eat in 2 bites. Repeat. The first bite is challenging; by the third, you are converted.',
            tip: 'For a milder version, dilute the mam nem sauce 1:1 with the pineapple juice from the bottom of the bowl.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
