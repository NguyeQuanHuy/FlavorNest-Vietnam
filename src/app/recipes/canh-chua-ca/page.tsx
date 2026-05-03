'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-chua-ca',
    title: 'Southern Sour Fish Soup',
    subtitle:
        'Canh Chua Cá — a bright Mekong broth soured with tamarind, sweetened with pineapple, and finished with rice paddy herb and fried garlic.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/canh-chua-ca.jpg',
    intro:
        'Canh chua is the Mekong Delta\'s signature — a soup built on paradox. Sour and sweet at once, hot and cooling, humble ingredients made fragrant by a single herb no one outside Vietnam seems to know: rau om, rice paddy herb. It is the soup that turns an ordinary weekday dinner into a proper meal.',
    ingredientSections: [
        {
            title: 'Broth base',
            items: [
                { amount: 1.5, unit: 'L', name: 'water or light fish stock' },
                { amount: 60, unit: 'g', name: 'tamarind pulp', note: 'soaked in 200ml hot water, strained' },
                { amount: 200, unit: 'g', name: 'pineapple', note: 'cut in wedges' },
                { amount: 3, name: 'tomatoes', note: 'cut in wedges' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
            ],
        },
        {
            title: 'Fish and vegetables',
            items: [
                { amount: 500, unit: 'g', name: 'catfish or snakehead fillets', note: 'cut in 3cm chunks' },
                { amount: 150, unit: 'g', name: 'bean sprouts' },
                { amount: 6, name: 'okra pods', note: 'sliced' },
                { amount: 100, unit: 'g', name: 'elephant ear stems (bạc hà)', note: 'peeled, sliced' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 1, name: 'bunch rice paddy herb (rau om)', note: 'chopped' },
                { amount: 1, name: 'bunch sawtooth herb', note: 'chopped' },
                { amount: 4, name: 'garlic cloves', note: 'sliced and fried golden' },
                { amount: 2, name: 'bird\'s eye chillies', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the tamarind',
            description: 'Place dried tamarind pulp in a small bowl of hot water and let it soak for 10 minutes to soften. Mash the pulp with a spoon to release the juices, then strain the mixture through a fine-mesh sieve into a bowl, discarding the seeds and tough fibers.',
        },
        {
            title: 'Build the sour broth',
            description: 'Bring a pot of water to a gentle simmer and stir in the concentrated tamarind liquid, pineapple chunks, fish sauce, and sugar. Let the base simmer for 10 minutes so the pineapple can infuse the water with its natural acidity and sweetness.',
            tip: 'Taste the broth now. It should taste noticeably sharp and sour; the proteins from the fish will later mellow the acidity and round out the flavor profile.',
        },
        {
            title: 'Add the hardier vegetables',
            description: 'Add the tomato wedges and sliced elephant ear stems (bạc hà) to the pot. Simmer for about 3 minutes until the stems start to soften slightly and absorb the flavored broth like a sponge.',
        },
        {
            title: 'Poach the fish',
            description: 'Carefully slide the fish steaks or fillets into the simmering broth. Cook for about 4 to 5 minutes until the flesh is just opaque and flaky. Ensure the liquid remains at a gentle simmer rather than a rolling boil.',
            tip: 'A hard boil will agitate and break the delicate fish fillets into small pieces. Keep the broth at a "lazy bubble" to poach the fish gently and keep it intact.',
        },
        {
            title: 'Add okra and bean sprouts',
            description: 'Turn off the heat and immediately add the sliced okra and fresh bean sprouts. The residual heat of the soup is enough to cook these vegetables to a just-tender state while maintaining their signature crunch.',
        },
        {
            title: 'Finish with herbs and fried garlic',
            description: 'Shower the soup with a generous mix of chopped rice paddy herb (ngò ôm), sawtooth herb (ngò gai), crispy fried garlic, and sliced red chilies. Serve hot with a side of steamed jasmine rice and a small saucer of fish sauce for dipping.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
