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
    heroImage: '/images/recipes/cha-ca-la-vong.jpg',
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
            description: 'Cut firm white fish (like catfish or tilapia) into thick chunks. Combine with a marinade of galangal, turmeric, fermented rice (mẻ), shrimp paste, and oil. Massage the mixture thoroughly into the flesh and let it rest in the refrigerator for 4 hours.',
            tip: 'Under 2 hours, the turmeric and galangal will not penetrate the density of the fish. Do not shortcut this, as the deep yellow hue and earthy aroma require time to develop.',
        },
        {
            title: 'Grill over charcoal',
            description: 'Thread the marinated fish chunks onto skewers or place them in a grilling basket. Grill over medium-hot charcoal for about 3 minutes per side until the exterior is firm, golden-orange, and the edges begin to char slightly.',
            tip: 'A cast-iron grill pan indoors works well to achieve the necessary sear; however, a broiler does not—you lose the essential smoky "breath" that defines this dish.',
        },
        {
            title: 'Heat the tableside pan',
            description: 'To serve traditionally, bring a small cast-iron skillet filled with about 2-3 tablespoons of oil to the dining table. Place it over a portable gas burner or charcoal stove until the oil is hot and shimmering.',
        },
        {
            title: 'Add fish and the green bouquet',
            description: 'Once the oil shimmers, slide the grilled fish chunks into the pan. Immediately dump in a large "bouquet" of fresh dill and sliced spring onions. The cold herbs hitting the hot oil should cause the pan to erupt in fragrant smoke.',
        },
        {
            title: 'Toss until herbs wilt',
            description: 'Use your chopsticks to gently toss the fish with the herbs for 60 seconds—no more. The dill and onions should be bright green and just barely collapsed from the heat.',
            tip: 'Overcooked dill turns stringy and loses its citrusy sweetness, becoming bitter. Watch the color closely; as soon as it wilts, it is ready to eat.',
        },
        {
            title: 'Build the bowl',
            description: 'Place cold rice vermicelli (bún) into a bowl, then top with a generous portion of the hot fish and wilted herbs. Scatter roasted peanuts on top and serve with a bowl of Mắm Tôm (fermented shrimp paste) whisked with lime juice and chili.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
