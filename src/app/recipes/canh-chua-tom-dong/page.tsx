'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-chua-tom-dong',
    title: 'Canh Chua Tôm Ð?ng (Mekong Sour Soup with Freshwater Shrimp)',
    subtitle: 'The Mekong Delta version of canh chua — a clear tamarind broth with small freshwater field shrimp, water lily stems, bean sprouts, tomato, pineapple, and the fresh herbs of the delta — lighter than the snakehead fish version and more intensely flavored from the tiny, sweet tôm d?ng.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/canh-chua-tom-dong.jpg',
    intro: `Canh chua tôm d?ng is the Mekong Delta sour soup made with tôm d?ng — the small freshwater shrimp that live in the rice paddies, irrigation canals, and seasonal floodplains of the delta, harvested in enormous quantities during the rice-growing season and eaten fresh or dried throughout the year. Tôm d?ng are tiny compared to marine shrimp — rarely longer than 4-5cm, translucent when raw, with a sweetness that is more concentrated than their size suggests because freshwater shrimp have a higher ratio of naturally occurring amino acids that produce the sweet taste. When added to a simmering tamarind broth they cook in under 2 minutes and contribute their sweetness and a natural thickening to the soup liquid. The distinctive element of the Mekong Delta version of canh chua — what distinguishes it from the Phú Yên cá lóc version or the Saigon version — is the presence of bông súng, the stems of the water lily that grows wild in every flooded field and waterway of the delta. Water lily stems have a texture that is simultaneously crunchy and slightly spongy, absorbing the sour broth while maintaining their structure, and a delicate green flavor that grounds the soup in the specific landscape of the delta. The rice paddy herb (ngò ôm) added at the end is grown in the same flooded fields as the tôm d?ng — the combination of field shrimp and field herb is the delta in a bowl.`,
    ingredientSections: [
        {
            title: 'Shrimp and broth',
            items: [
                { amount: 400, unit: 'g', name: 'fresh tôm d?ng (freshwater field shrimp)', note: 'small, whole, shell-on. Available at Vietnamese markets during season. Substitute: very small marine shrimp (50-60 count per 500g) or dried field shrimp rehydrated.' },
                { amount: 1.5, unit: 'L', name: 'water' },
                { amount: 2, name: 'shallots', note: 'thinly sliced — fried in oil before adding water' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Souring agents',
            items: [
                { amount: 40, unit: 'g', name: 'tamarind paste (me chua)', note: 'dissolved in 150ml hot water, strained — the primary sourness' },
                { amount: 200, unit: 'g', name: 'fresh pineapple', note: 'cut into chunks — tropical sourness and sweetness' },
                { amount: 3, name: 'medium tomatoes', note: 'cut into wedges' },
            ],
        },
        {
            title: 'Mekong Delta vegetables',
            items: [
                { amount: 200, unit: 'g', name: 'bông súng (water lily stems)', note: 'peeled and cut into 5cm pieces. Available at Vietnamese markets specializing in southern produce. Substitute: celery cut diagonally into 3cm pieces — different texture but similar role.' },
                { amount: 100, unit: 'g', name: 'bean sprouts (giá)', note: 'added raw at the very end' },
                { amount: 6, name: 'okra (d?u b?p)', note: 'trimmed and halved — adds natural thickening' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Essential Mekong finishing herbs',
            items: [
                { amount: 1, name: 'large bunch ngò ôm (rice paddy herb)', note: 'the defining herb of southern canh chua — sharp, lemony, slightly bitter. Cannot be substituted. Available at Vietnamese grocers.' },
                { amount: 1, name: 'bunch cilantro', note: 'roughly torn' },
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the tamarind broth base',
            description: 'Break the tamarind paste into pieces and work into 150ml hot water until fully dissolved. Strain through a fine sieve — discard the fibrous solids. The strained liquid should be dark, thick, and intensely sour. In a large pot, heat oil over medium heat and fry sliced shallots until golden — 3 minutes. Add 1.5L water and the strained tamarind liquid. Add pineapple chunks and tomato wedges. Bring to a boil.',
            tip: 'Frying the shallots in oil before adding the water is the technique that adds a sweet, roasted depth to the broth that raw shallots cannot provide. This step is often skipped in quick versions and its absence is detectable in the flatness of the finished soup.',
        },
        {
            title: 'Add bông súng and okra',
            description: 'Add the water lily stem pieces to the simmering broth — they need 5-7 minutes to cook through while maintaining their characteristic slight crunch. Add the okra halves — they release their natural mucilage into the broth over 3-4 minutes, giving it a barely perceptible viscosity that is characteristic of Mekong Delta canh chua. Taste the broth and season with fish sauce, sugar, and salt.',
            tip: 'The bông súng needs to be added before the shrimp because it takes longer to cook. It should be tender-crisp when the shrimp goes in — not raw, not soft. Test a piece: it should bend without snapping but retain clear resistance when bitten.',
        },
        {
            title: 'Add the tôm d?ng',
            description: 'Add the fresh field shrimp to the simmering broth. They cook very fast — 90 seconds to 2 minutes for small tôm d?ng. The shrimp turn from translucent grey to pink-orange throughout when done. Their small size means they cook almost simultaneously — watch carefully and remove from heat the moment they are uniformly pink. Over-cooked tôm d?ng tighten and lose their characteristic sweetness.',
            tip: 'Tôm d?ng are the fastest-cooking element in the soup. Everything else should be timed so the shrimp go in last, at the final 2 minutes. Adding them too early produces tough, over-cooked shrimp in a soup that still needs more time to develop.',
        },
        {
            title: 'Add bean sprouts and adjust seasoning',
            description: 'Add the bean sprouts in the last 30 seconds of cooking — they should be barely warmed rather than cooked, maintaining their crunch against the soft vegetables and tender shrimp. Taste the broth one final time: the sour-sweet-savory balance of Mekong canh chua should have the tamarind and pineapple acidity clearly present, the sweetness from the pineapple and sugar balancing it, and the fish sauce providing savory depth without being identifiable.',
            tip: 'The Mekong Delta canh chua is slightly sweeter than the central Vietnamese version — the Mekong palette runs sweeter overall, and the delta sugar cane available locally influences the seasoning tradition. If the soup tastes balanced but flat, a pinch more sugar is often the correct adjustment.',
        },
        {
            title: 'Finish with ngò ôm and serve',
            description: 'Turn off the heat. Add a large handful of ngò ôm directly to the pot — the residual heat wilts it slightly while preserving its sharp lemony character. Add cilantro and spring onion. Ladle into deep bowls ensuring each bowl gets shrimp, bông súng, tomato, pineapple, and okra. Top with sliced red chili and extra ngò ôm. Serve immediately with steamed jasmine rice.',
            tip: 'Ngò ôm added off-heat is the technique that preserves the herb\'s defining quality — the volatile compounds that give it its sharp, citrusy character dissipate within 30 seconds of being added to simmering liquid. The difference between cooked ngò ôm (flat, slightly bitter) and off-heat ngò ôm (bright, sharp, lemony) is the difference between a good canh chua and the correct one.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
