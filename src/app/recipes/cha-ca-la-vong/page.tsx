'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cha-ca-la-vong',
    title: 'Hanoi Turmeric Fish with Dill',
    subtitle:
        'Chả Cá Lã Vọng — snakehead fillets marinated in turmeric and galangal shrimp paste, finished sizzling tableside in a green bouquet of dill and spring onion.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '40 min + 4h marinade',
    rating: 4.9,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80',
    intro:
        'Chả cá is the one dish that Hanoi has never let go of. Invented on Chả Cá Street during the French colonial period and jealously guarded by the same family for over 150 years, it is cooked twice: first grilled over charcoal, then finished tableside in a pan of dill and spring onion so abundant it looks like a floral arrangement. Eaten with vermicelli, roasted peanuts and a small dish of mắm tôm.',
    ingredientSections: [
        {
            title: 'Fish and marinade',
            items: [
                { amount: 700, unit: 'g', name: 'snakehead or catfish fillets', note: 'cut in 4cm chunks' },
                { amount: 2, unit: 'tbsp', name: 'galangal paste', note: 'or fresh grated galangal' },
                { amount: 1, unit: 'tbsp', name: 'turmeric powder' },
                { amount: 2, unit: 'tbsp', name: 'mẻ (fermented rice)', note: 'or 1 tbsp rice vinegar' },
                { amount: 1, unit: 'tbsp', name: 'mắm tôm (shrimp paste)' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'The green finish',
            items: [
                { amount: 1, name: 'large bunch of dill', note: 'cut in 5cm lengths' },
                { amount: 6, name: 'spring onions', note: 'cut in 5cm batons' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'for the tableside pan' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 400, unit: 'g', name: 'rice vermicelli (bún)', note: 'cooked and cooled' },
                { amount: 80, unit: 'g', name: 'roasted peanuts', note: 'crushed' },
                { amount: 1, name: 'bunch of fresh herbs', note: 'perilla, Vietnamese coriander' },
                { amount: 1, name: 'small bowl of mắm tôm dip', note: 'mixed with lime, sugar, chilli' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the fish for 4 hours',
            description: 'TODO — combine fish with all marinade ingredients; massage in; rest 4 hours refrigerated.',
            tip: 'TODO — under 2 hours, the turmeric will not penetrate. Do not shortcut this.',
        },
        {
            title: 'Grill over charcoal',
            description: 'TODO — thread fish on skewers; grill over medium coals 3 minutes per side until edges char.',
            tip: 'TODO — a cast-iron grill pan indoors works; a broiler does not — you lose the smoke.',
        },
        {
            title: 'Heat the tableside pan',
            description: 'TODO — bring a small cast-iron pan with oil to the table over a portable burner.',
        },
        {
            title: 'Add fish and the green bouquet',
            description: 'TODO — when oil shimmers, add grilled fish, then dump in dill and spring onion. It should erupt in smoke.',
        },
        {
            title: 'Toss until herbs wilt',
            description: 'TODO — 60 seconds, no more. Herbs should be bright green, just collapsed.',
            tip: 'TODO — overcooked dill turns bitter. Watch the colour.',
        },
        {
            title: 'Build the bowl',
            description: 'TODO — noodles in a bowl, fish and herbs over, peanuts on top, spoon mắm tôm dip alongside.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
