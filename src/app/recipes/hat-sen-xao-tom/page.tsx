'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'hat-sen-xao-tom',
    title: 'Hạt Sen Xào Tôm (Stir-Fried Lotus Seeds with Shrimp)',
    subtitle: 'Fresh lotus seeds stir-fried with shrimp, garlic, and oyster sauce until the seeds are just tender with a faint crunch — a gentle, clean-flavored Vietnamese dish where the natural sweetness of lotus and the brininess of shrimp balance each other without competition.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/hat-sen-xao-tom.jpg',
    intro: `Hạt sen xào tôm is one of the quieter dishes in Vietnamese cooking — not loud with chili, not deep with fermentation, not complex with competing aromatics. It is a dish built on the natural sweetness of fresh lotus seeds and the clean brininess of shrimp, brought together with garlic, oyster sauce, and spring onion in a hot wok. Lotus seeds (hạt sen) occupy a specific place in Vietnamese culinary thinking: they are simultaneously an ingredient and a tonic, eaten for their purported calming properties and their association with purity — the lotus grows in muddy water and produces something immaculate, which is why it appears throughout Vietnamese culture from Buddhist temples to royal cuisine to grandmother's cooking. The seeds themselves have a texture that changes significantly with cooking time: briefly stir-fried, they are slightly firm with a faint starchy crunch; cooked a little longer, they become tender and yielding with a clean, mildly sweet flavor that absorbs whatever it is cooked with. Paired with shrimp, the combination is one of the most delicate in Vietnamese home cooking — delicate enough that the seasoning must be restrained, the heat must be controlled, and the timing must be precise. Hạt sen xào tôm appears at family meals alongside richer dishes as a palate-cleansing contrast, at vegetarian temple meals with the shrimp replaced by firm tofu or mushrooms, and in the cuisine of Huế specifically, where lotus is not merely an ingredient but an emblem of the imperial city's identity.`,
    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 300, unit: 'g', name: 'fresh lotus seeds (hạt sen tươi)', note: 'shelled and with the bitter green embryo (tâm sen) removed — press each seed and the embryo pops out. Available fresh in summer at Vietnamese markets. Dried lotus seeds (soaked 4 hours) or vacuum-packed cooked lotus seeds both work with adjusted timing.' },
                { amount: 300, unit: 'g', name: 'fresh shrimp, medium', note: 'peeled and deveined, tails on or off. Pat completely dry before cooking.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for briefly marinating the shrimp' },
                { amount: 0.25, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Aromatics and sauce',
            items: [
                { amount: 4, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 2, name: 'shallots', note: 'thinly sliced' },
                { amount: 2, unit: 'tbsp', name: 'oyster sauce', note: 'the primary seasoning — adds umami depth without overpowering the delicate lotus seeds' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'water', note: 'for a brief steam to finish cooking the lotus seeds through' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'freshly ground — finishing seasoning' },
            ],
        },
        {
            title: 'Optional additions',
            items: [
                { amount: 100, unit: 'g', name: 'snow peas (đậu hà lan)', note: 'adds color and crunch — a modern addition common in restaurant versions' },
                { amount: 1, name: 'small carrot', note: 'thinly sliced on the diagonal — for color' },
                { amount: 20, unit: 'g', name: 'dried wood ear mushrooms', note: 'soaked and sliced — adds texture contrast in the vegetarian version' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced — white and green parts' },
                { amount: 1, name: 'fresh red chili', note: 'thinly sliced — optional, for color' },
                { amount: 0.5, unit: 'tsp', name: 'sesame oil', note: 'a few drops only — finishing fragrance' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the lotus seeds',
            description: 'If using fresh lotus seeds: press each seed firmly between two fingers — the bitter green embryo (tâm sen) pops out from one end. Remove it completely; the embryo is intensely bitter and will make the dish unpleasant. Rinse the seeds. For dried lotus seeds: soak in cold water for 4 hours until fully rehydrated and pliable, then simmer gently for 10 minutes until just tender before stir-frying. For vacuum-packed cooked lotus seeds: drain and proceed directly to the wok.',
            tip: 'Removing the embryo is the most important prep step. Even one or two left in will spread bitterness through the entire dish. Taste a lotus seed after removing the embryo — it should taste mildly sweet and starchy, with no bitterness at all.',
        },
        {
            title: 'Marinate the shrimp briefly',
            description: 'Toss the dried shrimp with fish sauce and white pepper. Leave for 10 minutes. The brief marinade seasons the shrimp surface — longer marination starts to denature the protein and changes the texture. Pat lightly dry before adding to the wok — surface moisture causes steaming rather than searing.',
            tip: 'Dry shrimp sear and caramelize; wet shrimp steam and turn grey. The patting dry after marinating is the step between a shrimp that is pale and soft and one that has a golden blush and slight caramelization at the edges.',
        },
        {
            title: 'Blanch the lotus seeds briefly',
            description: 'Bring a small pot of water to a boil. Add the prepared fresh lotus seeds and blanch for 3-4 minutes until just barely tender — they should yield when pressed between fingers but retain a faint firmness at the center. Drain and run under cold water to stop cooking. The blanching pre-cooks the seeds so the stir-fry finishing time is short and the shrimp does not overcook while waiting for the seeds.',
            tip: 'Under-blanched lotus seeds remain starchy and chalky in the center after stir-frying. Over-blanched seeds turn mushy in the wok. The correct texture after blanching: barely tender, like al dente pasta — there should be slight resistance but no raw starchiness.',
        },
        {
            title: 'Stir-fry the shrimp first',
            description: 'Heat a wok over high heat until smoking. Add 2 tablespoons of oil and swirl to coat. Add the shrimp in a single layer — do not crowd. Sear without moving for 60 seconds until the bottom turns pink and slightly golden. Flip and sear 30 more seconds. The shrimp should be 80% cooked — pink outside, slightly translucent at the center. Remove and set aside. The residual cooking in the hot wok will finish them when they return.',
            tip: 'Removing the shrimp before fully cooked and returning them at the end is the technique that prevents rubbery overcooked shrimp. In the time it takes to stir-fry the lotus seeds, the shrimp sitting off-heat continue cooking from residual heat.',
        },
        {
            title: 'Stir-fry lotus seeds and combine',
            description: 'In the same wok, add remaining oil. Fry sliced garlic and shallots for 30 seconds until fragrant. Add the blanched lotus seeds and optional vegetables (snow peas, carrot). Stir-fry over high heat for 2 minutes. Add oyster sauce, fish sauce, and sugar — toss to coat. Add water around the edge and toss for 1 more minute until the liquid evaporates and the lotus seeds are glossy. Return the shrimp to the wok. Toss everything together for 30 seconds.',
            tip: 'The lotus seeds need to be in the wok long enough to absorb the oyster sauce and garlic oil — about 3 minutes total. Rushed stir-frying produces seeds that taste of sauce on the outside only; properly stir-fried seeds carry the flavor throughout.',
        },
        {
            title: 'Finish and plate',
            description: 'Remove from heat. Add a few drops of sesame oil and the sliced spring onion. Toss once. Grind white pepper over the top. Transfer to a plate — the lotus seeds should be glossy and golden from the oyster sauce, the shrimp pink and just cooked. Scatter sliced chili for color. Serve immediately with steamed jasmine rice. Hạt sen xào tôm is a dish that wants to be eaten the moment it leaves the wok — the lotus seeds continue absorbing moisture and change texture after 10 minutes.',
            tip: 'White pepper rather than black pepper is the finishing spice for this dish — its clean, high heat suits the delicate lotus-shrimp combination where black pepper\'s earthiness would compete. This is one of the few Vietnamese stir-fries where the pepper choice genuinely matters.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}