'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nuoc-sam',
    title: 'Herbal Cooling Drink',
    subtitle: 'A centuries-old Vietnamese remedy — sweet, earthy, and genuinely cooling.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '30 min',
    rating: 4.6,
    baseServings: 4,
    heroImage: '/images/recipes/nuoc-sam.jpg',
    intro: 'Nuoc sam is Vietnamese traditional medicine you actually want to drink. A blend of cooling herbs and roots — cogon grass root, chrysanthemum, dried longan, pandan, and water chestnuts — simmered together and sweetened lightly with rock sugar. Vietnamese families make this throughout summer to "giai nhiet" — cool the internal body heat. Whether or not you believe in the medicine, the drink itself is extraordinary: complex, faintly floral, earthy, and deeply refreshing cold.',
    ingredientSections: [
        {
            title: 'Herbs and roots',
            items: [
                { amount: 30, unit: 'g', name: 'cogon grass root (re tranh)', note: 'dried, available at Vietnamese herbal shops' },
                { amount: 20, unit: 'g', name: 'dried chrysanthemum flowers' },
                { amount: 20, unit: 'g', name: 'dried longan (long nhan)', note: 'or 5 fresh longan' },
                { amount: 3, name: 'pandan leaves', note: 'tied in a knot' },
                { amount: 100, unit: 'g', name: 'water chestnuts', note: 'peeled, halved' },
            ],
        },
        {
            title: 'Broth',
            items: [
                { amount: 1.5, unit: 'l', name: 'water' },
                { amount: 60, unit: 'g', name: 'rock sugar', note: 'adjust to taste' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
    ],
    steps: [
        {
            title: 'Rinse the dried herbs',
            description: 'Rinse cogon grass root, chrysanthemum, and dried longan under cold water to remove dust. No need to soak.',
        },
        {
            title: 'Simmer the broth',
            description: 'Combine all herbs, roots, pandan leaves, water chestnuts, and water in a large saucepan. Bring to a boil, then reduce to a gentle simmer for 20 minutes. The liquid will turn a pale golden colour and smell faintly floral and earthy.',
            tip: 'Do not boil aggressively. A gentle simmer extracts the flavour without making the broth bitter.',
        },
        {
            title: 'Sweeten and strain',
            description: 'Add rock sugar and salt. Stir until dissolved. Taste and adjust — nuoc sam should be lightly sweet, not syrupy. Strain through a fine mesh sieve into a pitcher. Discard the spent herbs but keep the water chestnuts if desired — they are pleasant to eat.',
        },
        {
            title: 'Chill and serve',
            description: 'Cool to room temperature then refrigerate until cold. Serve over ice in tall glasses. Nuoc sam keeps in the fridge for up to 3 days and the flavour deepens overnight.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
