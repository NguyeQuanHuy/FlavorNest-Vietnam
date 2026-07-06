'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-hap-nuoc-dua',
    title: 'Tôm H?p Nu?c D?a (Coconut Water-Steamed Shrimp)',
    subtitle: 'Fresh shrimp steamed over fresh coconut water with lemongrass and pandan until the shell turns coral and the flesh is sweet — the southern Vietnamese method that makes the shrimp taste of both the sea and the tropics simultaneously.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/tom-hap-nuoc-dua.jpg',
    intro: `Tôm h?p nu?c d?a is the southern variation of Vietnam's steamed shrimp canon — the version from B?n Tre, Ti?n Giang, and the coconut provinces of the Mekong Delta where fresh coconut water is as available as tap water. The technique is identical to tôm h?p bia (beer-steamed shrimp) but the character of the steam is entirely different: coconut water produces a slightly sweet, tropical-scented steam that imparts a subtle sweetness to the shrimp that beer cannot. The pandan leaf added to the steaming bath adds a floral, vanilla-adjacent note that is quintessentially southern Vietnamese. The resulting shrimp taste of both the ocean they came from and the land they were cooked in — the brininess of fresh shrimp and the sweetness of coconut water in the same bite. Served with a ginger-lime dipping salt, the combination is one of the cleanest expressions of southern Vietnamese coastal cooking.`,
    ingredientSections: [
        {
            title: 'Shrimp',
            items: [
                { amount: 800, unit: 'g', name: 'fresh shrimp, whole (tôm tuoi)', note: 'heads on, shells on. Medium to large. Must be fresh — this dish has nowhere to hide poor-quality shrimp.' },
            ],
        },
        {
            title: 'Steaming bath',
            items: [
                { amount: 500, unit: 'ml', name: 'fresh young coconut water (nu?c d?a tuoi)', note: 'from a young green coconut, or packaged fresh (not flavored). The sweetness is essential — old coconut water or canned is inferior.' },
                { amount: 3, name: 'lemongrass stalks', note: 'bruised and cut into 5cm pieces' },
                { amount: 4, name: 'pandan leaves (lá d?a)', note: 'knotted — the southern Vietnamese aromatic. Fresh or frozen.' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Ginger-lime dipping salt',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'sea salt' },
                { amount: 1, unit: 'tsp', name: 'freshly ground black pepper' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'finely grated or minced — adds a sharp heat that complements the sweet shrimp' },
                { amount: 2, name: 'limes', note: 'juiced fresh at table' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 1, name: 'fresh red chili, sliced' },
                { amount: 2, name: 'extra limes' },
                { amount: 1, name: 'small bunch rau ram (Vietnamese coriander)', note: 'or mint' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the shrimp',
            description: 'Rinse the shrimp under cold running water. Leave the shells and heads on — they protect the flesh during steaming and absorb the coconut water steam from the outside. Use scissors to trim the sharp rostrum (the pointed spike on the head) if very long. That is the only preparation needed.',
            tip: 'Fresh shrimp should smell of the sea — clean and briny, not fishy. Any ammonia smell means they are not fresh enough for this preparation.',
        },
        {
            title: 'Build the coconut steaming bath',
            description: 'Pour the fresh coconut water into the steamer base. Add lemongrass pieces, knotted pandan leaves, ginger slices, and salt. Bring to a full boil. The steam rising should smell sweet and tropical before the shrimp go in — the pandan and coconut water should be clearly detectable.',
            tip: 'If using packaged coconut water, choose one without added sugar or flavoring. The natural sweetness of fresh coconut water is the ideal — too much added sugar produces an artificially sweet result.',
        },
        {
            title: 'Steam in single layer',
            description: 'Arrange the shrimp in a single layer on the steaming rack. Cover tightly. Steam over high heat for 4-5 minutes for medium shrimp, 5-6 minutes for large. The shrimp are done when the shells are uniformly coral-orange and the flesh is opaque white when checked at the thickest point. The curl should be a loose C, not a tight O.',
            tip: 'The coconut water bath reduces and concentrates as you steam. After cooking, taste the remaining liquid in the steamer base — it is a remarkable sweet-salty broth worth drinking in small amounts or using as a soup base.',
        },
        {
            title: 'Prepare the ginger-lime dipping salt',
            description: 'Combine salt, black pepper, and grated ginger on individual small plates. The ginger in this version (unlike the plain mu?i tiêu chanh) is specific to the coconut version — its sharpness creates contrast with the sweet coconut-perfumed shrimp. Squeeze lime juice over just before eating.',
            tip: 'The ginger here is different from the beer-steamed version — it is added to the dipping salt rather than the steaming bath, providing a fresh pungency at the point of eating rather than a cooked ginger note in the flesh.',
        },
        {
            title: 'Serve and eat whole',
            description: 'Transfer the steamed shrimp to a serving plate. Scatter spring onion and chili. Serve the ginger-lime salt and extra lime wedges alongside, with fresh rau ram. How to eat: pick up a shrimp, bite through shell and all — the thin shell of a fresh shrimp is edible and adds texture. Suck the head first if present. Dip in the ginger-lime salt between each shrimp.',
            tip: 'The coconut water-steamed shrimp are slightly sweeter than beer-steamed — this sweetness is the defining character. If the sweetness is not detectable, the coconut water was too old or the shrimp were not fresh enough.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
