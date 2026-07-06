'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-ca-tre-gung',
    title: 'Cháo Cá Trê Gừng (Catfish and Ginger Congee)',
    subtitle: 'Rice porridge cooked in catfish bone stock with a generous amount of old ginger — topped with catfish pieces poached in the broth, crispy fried shallots, raw ginger julienne, and spring onion. The southern Vietnamese restorative congee eaten at the first sign of a cold, after surgery, and on any morning when the body needs warmth from the inside.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/chao-ca-tre-gung.jpg',
    intro: `Cháo cá trê gừng is the restorative catfish congee of southern and central Vietnam — the bowl that Vietnamese families make when someone is unwell, recovering, or simply needs the specific warmth that ginger in large quantity provides when it has been cooked into a rice porridge made from a catfish stock. The dish sits in the category of Vietnamese tonic food that Vietnamese people across the country understand instinctively: there are dishes for celebration, dishes for everyday, and dishes for recovery. Cháo gừng — ginger congee — belongs to the last category, and the version made with catfish is considered specifically appropriate for recovery from illness or surgery because catfish is believed in Vietnamese medicine to be both easily digestible and tonifying, while old ginger (gừng già) eaten in the quantities used in cháo cá trê gừng provides both the warmth that the recovering body needs and the specific anti-nausea, circulation-stimulating properties that Vietnamese traditional medicine assigns to it. The catfish stock that forms the base of the porridge is made from the bones and head of the catfish — producing a specific slightly gelatinous, deeply savory stock that is different from the lighter cá trê sections used in canh chua or kho tộ. This stock cooked with the rice produces a porridge that is silkier and more body than porridge made with water or chicken stock, because the catfish gelatin from the long-cooked bones thickens the starch slightly and gives it a specific mouthfeel. The catfish fillet pieces that top the porridge are poached directly in the finished hot porridge at service — placed on the surface and covered for 3-4 minutes until just cooked through — rather than being cooked in the stock during the full porridge cooking period, which would produce dry, overcooked flesh. The ginger — old ginger, in the quantity that might seem excessive until the first spoonful explains everything — is present in three forms: in the stock during cooking, stirred into the porridge at the end, and as raw julienne scattered over each bowl. The three-form approach produces ginger warmth that is distributed throughout the bowl rather than concentrated in any single element.`,
    ingredientSections: [
        {
            title: 'Catfish and stock',
            items: [
                { amount: 700, unit: 'g', name: 'whole catfish (cá trê)', note: 'or 2 medium catfish. Fillet the bodies — reserve the bones, heads, and trimmings for the stock. Cut the fillets into 5-6cm pieces for serving.' },
                { amount: 1.5, unit: 'L', name: 'water' },
                { amount: 50, unit: 'g', name: 'old ginger (gừng già)', note: '5 slices, smashed — for the stock' },
                { amount: 3, name: 'shallots', note: 'charred — for the stock' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'fish sauce', note: 'light seasoning in the stock' },
            ],
        },
        {
            title: 'Rice porridge',
            items: [
                { amount: 150, unit: 'g', name: 'jasmine rice', note: 'rinsed once' },
                { amount: 900, unit: 'ml', name: 'strained catfish stock', note: 'from above' },
                { amount: 200, unit: 'ml', name: 'water', note: 'additional if needed' },
                { amount: 40, unit: 'g', name: 'old ginger', note: 'finely minced — stirred into the porridge during cooking' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for toasting the rice with shallots' },
                { amount: 3, name: 'shallots', note: 'thinly sliced — fried before the rice' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'seasoning for the porridge' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Catfish topping — poached at service',
            items: [
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for seasoning the catfish fillets before poaching' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'light dusting on the catfish pieces' },
            ],
        },
        {
            title: 'Essential toppings',
            items: [
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'finely julienned — raw, scattered over each bowl. The third ginger form.' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 3, unit: 'tbsp', name: 'shallot-infused oil' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, unit: 'tsp', name: 'white pepper', note: 'freshly ground per bowl' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced', note: 'optional — for those not eating for recovery' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the catfish bone stock',
            description: 'Place all catfish bones, heads, and trimmings in a pot with cold water, smashed ginger, charred shallots, salt, and fish sauce. Bring to a boil, skim for 15 minutes, reduce to a steady simmer. Cook for 40 minutes. The stock will be slightly cloudy from the catfish gelatin — this cloudiness is desirable and produces the silkier porridge texture that distinguishes cháo cá trê from cháo made with water. Strain through a fine sieve. Reserve 900ml for the porridge.',
            tip: 'The 40-minute stock time for catfish bones is longer than for lighter fish because the catfish skeleton releases its gelatin slowly — the same quality that makes catfish kho tộ sauce thick and glossy comes from the same connective tissue. At 20 minutes the stock is a thin, clear fish broth; at 40 minutes it is slightly thickened and specifically catfish in character.',
        },
        {
            title: 'Cook the ginger porridge',
            description: 'Heat oil in a medium pot. Fry sliced shallots until golden. Add rinsed rice and stir 2 minutes until coated. Add the finely minced ginger — stir for 30 seconds until the ginger begins to release its fragrance in the hot oil. Add 900ml of catfish stock. Bring to a boil, reduce to a medium simmer. Cook for 25-30 minutes stirring regularly. Add fish sauce, white pepper, and salt. The ginger cooked into the porridge from the beginning produces a warmth that is distributed throughout every grain of rice.',
            tip: 'The minced ginger added with the rice rather than later is the technique that produces ginger-in-every-bite rather than ginger-as-topping. At 25-30 minutes of cooking, the minced ginger has essentially dissolved into the porridge and its warmth is carried by the starch rather than being a discrete textural element.',
        },
        {
            title: 'Season the catfish fillets',
            description: 'Season the catfish fillet pieces lightly with fish sauce, white pepper, and a light dusting of turmeric. Do not over-season — the catfish will absorb the well-seasoned porridge during the poaching step and the external seasoning is only to provide a light initial flavor. Leave aside until the porridge is ready for service.',
            tip: 'Light seasoning of the catfish topping pieces before poaching is specifically calibrated for recovery-food context: the porridge carries the primary seasoning and warmth; the catfish provides protein without assertive additional flavoring. Heavily seasoned catfish pieces in recovery cháo work against the gentle, warming character of the bowl.',
        },
        {
            title: 'Poach the catfish in the hot porridge at service',
            description: 'When the porridge is ready and the bowls are prepared, place the seasoned catfish fillet pieces on the surface of the pot of hot porridge. Cover and leave for 3-4 minutes — the heat of the porridge will gently poach the catfish pieces until they are just cooked through. Do not stir. The poached catfish should be white throughout with no translucency, tender rather than firm, and carrying the ginger-catfish-stock character of the porridge that has been cooking around it.',
            tip: 'The poaching of the catfish in the finished hot porridge is the technique that produces catfish at its most delicate in the cháo context. Catfish boiled from raw in the porridge cooking water becomes overcooked and slightly tough by the time the porridge is ready. Poached in the finished porridge for only 3-4 minutes, it arrives at the table just cooked, tender, and flavored by the porridge it has been resting in.',
        },
        {
            title: 'Build the bowl and serve',
            description: 'Ladle the ginger porridge into deep bowls. Place two or three poached catfish pieces on top. Drizzle shallot-infused oil. Scatter the raw ginger julienne generously — this is the third form of ginger in the bowl and the most immediately aromatic. Add crispy fried shallots, sliced spring onion, and cilantro. Grind white pepper. Serve with lime wedges and optional chili for those eating without recovery context.',
            tip: 'The three forms of ginger in cháo cá trê gừng — ginger cooked into the stock, ginger minced into the porridge, and raw ginger julienned over each bowl — produce three different ginger experiences in the same bowl: the background warmth from the stock ginger, the dispersed warmth from the cooked minced ginger, and the immediate sharp freshness from the raw julienne. Eating all three simultaneously is the bowl\'s specific character.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
