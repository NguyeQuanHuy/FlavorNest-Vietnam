'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-kho-gung',
    title: 'Ginger Braised Chicken',
    subtitle:
        'Gà Kho Gừng — bone-in chicken simmered in fish sauce, palm sugar and a generous fistful of young ginger until the sauce reduces to a sticky, fragrant glaze.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.7,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=1600&q=80',
    intro:
        'Every Vietnamese mother has a ginger chicken in her repertoire — cheap, fast, and built entirely from ingredients already in the cupboard. In the North the ginger is more assertive; in the South a splash of coconut water rounds it out. Either way, it is the dish that turns a plain bowl of rice into dinner.',
    ingredientSections: [
        {
            title: 'Chicken and marinade',
            items: [
                { amount: 800, unit: 'g', name: 'bone-in chicken thighs', note: 'cut in 4cm pieces' },
                { amount: 40, unit: 'g', name: 'young ginger', note: 'julienned' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'palm sugar' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Braise',
            items: [
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 150, unit: 'ml', name: 'coconut water', note: 'optional, for Southern style' },
                { amount: 2, name: 'bird\'s eye chillies', note: 'optional' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 600, unit: 'g', name: 'steamed jasmine rice' },
                { amount: 2, name: 'spring onions', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the chicken',
            description: 'Combine the chicken pieces in a bowl with fish sauce, palm sugar, half of your julienned ginger, and a pinch of black pepper. Mix thoroughly to ensure every piece is coated, then let it rest for 20 minutes to allow the flavors to penetrate the meat.',
            tip: 'Using chicken thighs or drumsticks with the bone in will result in much juicier meat and a more flavorful sauce than using breast meat.',
        },
        {
            title: 'Build a light caramel',
            description: 'Heat a tablespoon of oil and a tablespoon of palm sugar in a pot over medium heat. Stir continuously until the sugar melts and transforms into a deep amber color, being careful to remove it from the heat if it starts to smoke to avoid a bitter taste.',
            tip: 'If you are new to making Vietnamese caramel (nước màu), keep a small cup of warm water nearby. If the sugar darkens too fast, add a teaspoon of water to stop the cooking process instantly.',
        },
        {
            title: 'Bloom the aromatics',
            description: 'Once the caramel is ready, toss in the minced shallots, garlic, and the remaining half of the ginger. Sauté them quickly until they turn golden and the kitchen is filled with a spicy, fragrant aroma.',
        },
        {
            title: 'Sear the chicken skin',
            description: 'Place the marinated chicken into the pot, ideally skin-side down, and increase the heat slightly. Resist stirring for the first 3 minutes to allow the skin to sear properly and develop a rich, caramelized color.',
            tip: 'Resist the urge to stir for the first 3 minutes. This allows the skin to firm up and brown beautifully, preventing it from sticking to the pot or tearing.',
        },
        {
            title: 'Reduce to a sticky glaze',
            description: 'Pour in coconut water (or plain water) until the chicken is halfway submerged, then simmer uncovered for about 20 minutes. As the liquid evaporates, it will thicken into a savory, sticky glaze that clings beautifully to the chicken.',
        },
        {
            title: 'Finish with pepper and spring onion',
            description: 'Once the sauce has reduced to your liking, turn off the heat. Top the dish with a generous amount of freshly cracked black pepper and a handful of chopped spring onions, then serve immediately over hot jasmine rice.',
            tip: 'Always use freshly cracked pepper at the very end rather than pre-ground pepper. The heat of the dish will release the pepper\'s oils, providing a sharp aromatic contrast to the sweet and salty sauce..',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
