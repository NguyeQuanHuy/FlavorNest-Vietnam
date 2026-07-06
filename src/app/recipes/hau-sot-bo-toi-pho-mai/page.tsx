'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'hau-sot-bo-toi-pho-mai',
    title: 'Hàu Nướng Bơ Tỏi Phô Mai (Baked Oysters with Garlic Butter and Cheese)',
    subtitle: 'Fresh oysters on the half shell topped with a garlic butter sauce, grated parmesan, and spring onion then baked until the butter bubbles and the cheese turns golden — the Vietnamese-Western fusion oyster preparation that appears at seafood restaurants from Đà Nẵng to Vũng Tàu and that is one of the most immediately crowd-pleasing ways to eat a Vietnamese oyster.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/hau-sot-bo-toi-pho-mai.jpg',
    intro: `Hàu nướng bơ tỏi phô mai is the Vietnamese fusion oyster — a preparation that combines the abundant, deeply briny oysters of the central and southern Vietnamese coast with the butter-garlic-cheese combination of French-influenced Vietnamese cooking, producing a dish that is simultaneously a product of its coastal origin and of the French culinary presence that shaped Vietnamese cooking through the colonial period and beyond. The oysters used throughout Vietnam's coastal restaurants are typically Pacific oysters (Crassostrea gigas) or the native Vietnamese cupped oysters farmed in the estuaries and bays of Phú Yên, Khánh Hòa, Bình Định, and Quảng Nam — regions where the combination of clean coastal water, appropriate salinity, and tidal action produces oysters with a specific deep briny sweetness that is the quality this preparation requires. The garlic butter sauce applied before baking is the element that most directly acknowledges the French culinary inheritance: a reduction of butter, garlic, shallots, and white wine that is essentially the beginning of a classic French beurre blanc, simplified and concentrated to work on the high heat of an oven or charcoal grill. The parmesan — or whatever hard melting cheese is available, as Vietnamese restaurants substitute readily based on what is most accessible — melts and browns in the heat, providing the specific salty, slightly nutty character that amplifies the oyster brine in the way that no Vietnamese-traditional condiment quite achieves. The result is a dish that is not quite French, not quite Vietnamese, and entirely the product of the specific culinary moment when both traditions were present in the same kitchen with the same excellent raw material.`,
    ingredientSections: [
        {
            title: 'Oysters',
            items: [
                { amount: 24, name: 'fresh oysters on the half shell (hàu tươi)', note: 'shucked, bottom shell retained, top shell discarded. Vietnamese oysters, Pacific oysters, or any fresh oyster available. The liquor inside each shell should be retained — it is the natural sauce.' },
            ],
        },
        {
            title: 'Garlic butter sauce',
            items: [
                { amount: 80, unit: 'g', name: 'unsalted butter', note: 'softened to room temperature' },
                { amount: 6, name: 'garlic cloves', note: 'minced very finely — or microplane-grated for the smoothest sauce' },
                { amount: 2, name: 'shallots', note: 'minced very finely' },
                { amount: 2, unit: 'tbsp', name: 'white wine or Shaoxing wine', note: 'adds depth and prevents the butter from tasting flat' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'the Vietnamese addition — adds umami that Western oyster butter sauces lack' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 1, unit: 'tsp', name: 'fresh lemon juice' },
            ],
        },
        {
            title: 'Topping',
            items: [
                { amount: 60, unit: 'g', name: 'parmesan cheese', note: 'finely grated — or Gruyère, or any hard melting cheese available' },
                { amount: 4, name: 'spring onions', note: 'green parts only, thinly sliced — scattered over before baking and again fresh after' },
                { amount: 2, name: 'fresh red chilies', note: 'thinly sliced — for color and optional heat' },
                { amount: 2, unit: 'tbsp', name: 'crispy fried shallots', note: 'scattered over after baking' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, name: 'lemons or limes, cut in wedges' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 2, unit: 'tbsp', name: 'sriracha or chili sauce', note: 'optional alongside' },
                { amount: 1, name: 'baguette or crusty bread', note: 'for mopping the butter from the shells' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the garlic butter sauce',
            description: 'Combine softened butter with finely minced garlic, minced shallots, white wine, fish sauce, sugar, white pepper, and lemon juice. Beat together until fully combined — the butter should be smooth and all the aromatics evenly distributed. Taste: it should be rich, garlicky, slightly salty from the fish sauce, and bright from the lemon. The fish sauce in this sauce is the specifically Vietnamese modification — it adds the umami depth that Western oyster butter sauce achieves with Worcestershire or anchovy.',
            tip: 'Making the garlic butter in advance and refrigerating it produces a better result than making it immediately before use — refrigerated overnight, the garlic and shallot flavors meld completely into the butter and the sauce is more integrated. The butter can be rolled in plastic wrap into a log and sliced into rounds for individual oysters.',
        },
        {
            title: 'Prepare the oyster shells',
            description: 'Place the shucked oysters on the half shell on a baking tray. The shells must sit stably without tipping — nestle them in a bed of coarse salt or crumpled foil to keep them level. The natural oyster liquor should remain in each shell — this liquid will mix with the melting butter during baking and produce the sauce that is sipped from the shell after the oyster is eaten.',
            tip: 'The coarse salt bed for stabilizing oyster shells during baking serves a second function — the salt retains heat and ensures the shells stay hot for longer after coming out of the oven, keeping the butter bubbling for the few minutes between oven and table. The Vietnamese restaurant method: a metal tray filled with coarse salt that is pre-heated in the oven before the oysters are placed.',
        },
        {
            title: 'Top and bake',
            description: 'Place a generous teaspoon of garlic butter on each oyster — enough to cover the oyster surface. Scatter spring onion slices and sliced red chili over each. Scatter the grated parmesan generously. Bake in a preheated oven at 220°C for 6-8 minutes, or under a broiler/grill for 4-5 minutes, until the butter is visibly bubbling around the oyster, the cheese is golden, and the edges of the oyster have curled slightly. The oyster should be just cooked through — warm throughout but not shrunken or tough.',
            tip: 'The 6-8 minute baking time at 220°C produces an oyster that is cooked but retains its specific briny succulence. Beyond 10 minutes, the oyster begins to tighten and shrink, losing the tender texture that makes this preparation worth the effort. The visual cue: the cheese is golden and the butter is bubbling actively around the oyster edges.',
        },
        {
            title: 'Finish and serve immediately',
            description: 'Remove from the oven. Scatter fresh spring onion greens and crispy fried shallots over each oyster immediately. The fresh spring onion on the hot just-baked oyster wilts slightly from the heat and releases its onion fragrance directly over the oyster. Arrange on a serving plate with lemon wedges, cilantro, and optional chili sauce. Serve with baguette. The butter that has pooled in the shell around and beneath the oyster should be sipped directly from the shell after the oyster is eaten — it is the most concentrated flavored element of the preparation.',
            tip: 'Hàu nướng bơ tỏi phô mai eaten immediately from the oven — when the butter is still bubbling and the cheese still molten — is a completely different experience from the same oyster 5 minutes later when the butter has congealed and the cheese has hardened. Organize the serving so each person eats their first oyster within 30 seconds of it leaving the oven.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
