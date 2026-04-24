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
            description: 'TODO — toss chicken with fish sauce, palm sugar, half the ginger, pepper; rest 20 minutes.',
        },
        {
            title: 'Build a light caramel',
            description: 'TODO — melt a tablespoon of palm sugar until amber; do not let it burn.',
            tip: 'TODO',
        },
        {
            title: 'Bloom the aromatics',
            description: 'TODO — oil, shallots, garlic, remaining ginger; fry until golden and fragrant.',
        },
        {
            title: 'Sear the chicken skin',
            description: 'TODO — add marinated chicken skin-down; let it catch colour before stirring.',
            tip: 'TODO — resist stirring for the first 3 minutes.',
        },
        {
            title: 'Reduce to a sticky glaze',
            description: 'TODO — add coconut water if using; simmer uncovered 20 minutes until sauce clings.',
        },
        {
            title: 'Finish with pepper and spring onion',
            description: 'TODO — crack fresh pepper, scatter spring onion, serve over hot rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
