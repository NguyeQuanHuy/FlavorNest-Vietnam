'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cha-ram-tom-dat',
    title: 'Chả Ram Tôm Đất (Central Vietnamese Fried Shrimp Rolls)',
    subtitle: 'Seasoned shrimp paste wrapped in thin rice paper and deep-fried until the wrapper blisters and crackles — the Bình Định and Phú Yên street food that looks like a spring roll and tastes like nothing else.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/cha-ram-tom-dat.jpg',
    intro: `Chả ram tôm đất is the fried shrimp roll of the south-central coast — specifically the provinces of Bình Định, Phú Yên, and Quảng Ngãi — where tôm đất (river or estuary shrimp, small and intensely sweet) are pounded into a paste with pork fat, lemongrass, and aromatics, wrapped in thin rice paper, and deep-fried until the wrapper blisters into hundreds of small golden bubbles. The result is a roll with two distinct textures: a shatteringly crisp, bubbly exterior and a dense, springy shrimp filling that is simultaneously sweet from the shrimp and savory from the fish sauce and garlic. Chả ram is eaten as a street food snack, as an appetizer at family meals, and as the protein component in bún chả ram — a noodle bowl unique to the central coast. The name distinguishes it from other fried rolls: ram means the blistered, bubble-covered exterior specific to this frying technique, where the rice paper is moistened slightly before wrapping so that bubbles form during frying rather than a flat crisp surface.`,
    ingredientSections: [
        {
            title: 'Shrimp filling',
            items: [
                { amount: 400, unit: 'g', name: 'fresh shrimp (tôm đất / small estuary shrimp)', note: 'peeled and deveined. Small shrimp (50-60 per 500g) preferred — sweeter and more aromatic than large shrimp. Frozen small shrimp work.' },
                { amount: 100, unit: 'g', name: 'pork fat or fatty pork belly', note: 'finely minced — adds richness and prevents the filling from becoming dry. Can substitute with 2 tbsp lard.' },
                { amount: 2, name: 'lemongrass stalks', note: 'inner stalk only, very finely minced' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the golden color to the filling' },
                { amount: 1, unit: 'tsp', name: 'cornstarch', note: 'binder — helps the filling hold together' },
            ],
        },
        {
            title: 'Rolling and frying',
            items: [
                { amount: 12, name: 'sheets dried rice paper (bánh tráng)', note: '22cm diameter, thin variety — not thick spring roll wrappers. The thin paper is what creates the blistered surface.' },
                { amount: 500, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
                { amount: 3, unit: 'tbsp', name: 'water', note: 'for briefly moistening the rice paper before rolling' },
            ],
        },
        {
            title: 'Dipping sauce (nước chấm chả ram)',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves, minced' },
                { amount: 1, name: 'bird\'s eye chili, minced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'head butter lettuce', note: 'for wrapping' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the shrimp paste filling',
            description: 'Pat the peeled shrimp completely dry. Place in a food processor and pulse 8-10 times until roughly chopped — not a smooth paste, leave some texture. Or chop by hand with a cleaver until a coarse paste forms. Combine with minced pork fat, lemongrass, garlic, shallots, fish sauce, sugar, pepper, turmeric, and cornstarch. Mix until completely combined. Fry a small teaspoon of the mixture in a pan to taste and adjust seasoning before rolling.',
            tip: 'A rough paste with some texture produces a more satisfying filling than a smooth one. Overprocessing makes the filling dense and bouncy like a rubber ball. Pulse, do not blend continuously.',
        },
        {
            title: 'The moistening technique for blistered skin',
            description: 'This is the step that distinguishes chả ram from plain fried spring rolls. Dip one rice paper sheet very briefly in water — 1-2 seconds only, just enough to make it pliable without making it wet. The paper should feel flexible but not soggy. Lay on a flat surface. If the paper tears easily, it was too wet. If it cracks when you try to roll, it was too dry. The moisture level determines the blistering.',
            tip: 'The brief moisture creates steam pockets trapped between the paper layers during frying. These pockets expand into the characteristic bubbles of chả ram. Over-moistened paper produces a flat crust; correct moisture produces hundreds of small bubbles.',
        },
        {
            title: 'Roll tightly',
            description: 'Place 2 tablespoons of shrimp filling in a horizontal line across the lower third of the moistened rice paper, leaving 3cm clear on each side. Fold the sides in over the filling. Roll forward tightly from the bottom, keeping even pressure throughout. The roll should be compact and firm — about 12cm long and 3cm diameter. Place seam-side down. Let the rolls rest for 5 minutes before frying — the rice paper rehydrates from the filling moisture and seals.',
            tip: 'Rolling tightly is critical. Loose rolls fall apart in the oil or have air pockets that burst violently. The seam must be sealed firmly — press the end down and let the moisture from the filling hold it.',
        },
        {
            title: 'Deep-fry at 170°C — the two-stage method',
            description: 'Heat oil to 170°C. Fry the rolls seam-side down first for 3-4 minutes at medium heat until pale golden and the blistering has begun. Do not move them for the first 2 minutes. Increase heat to 185°C and fry for another 2-3 minutes until deeply golden with well-developed blisters across the entire surface. The two temperatures produce both the blistered texture and the golden color.',
            tip: 'Starting at lower heat and increasing is the technique for maximum blistering. High heat from the start produces a flat golden crust. The initial lower heat allows moisture to expand into bubbles; the final high heat caramelizes and sets them.',
        },
        {
            title: 'Drain and serve immediately',
            description: 'Remove with a slotted spoon and drain on paper towels in a single layer. The rolls continue cooking from residual heat — serve within 5 minutes. Make the dipping sauce: combine fish sauce, lime juice, sugar, water, garlic, and chili. Serve chả ram with the dipping sauce, lettuce leaves, and fresh herbs. The eating method: wrap a hot roll in a lettuce leaf with rau răm, dip completely in nước chấm, eat in one or two bites.',
            tip: 'Chả ram must be eaten immediately. The blistered crust loses its shatter within 10 minutes as it absorbs moisture from the filling. This is beach food, street food — eat it hot or not at all.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
