'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-phong-tom-sot-bo-toi',
    title: 'Bánh Phồng Tôm Sốt Bơ Tỏi Parmesan (Shrimp Crackers with Garlic Butter and Parmesan)',
    subtitle: 'Freshly fried shrimp crackers tossed immediately in browned garlic butter and dusted with finely grated parmesan, dried chili flakes, and spring onion — the Vietnamese street snack upgraded with French-Italian ingredients that arrived via the same culinary route as the butter-garlic oysters and the bánh mì beurre.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/banh-phong-tom-sot-bo-toi.jpg',
    intro: `Bánh phồng tôm sốt bơ tỏi parmesan is the upgraded shrimp cracker — a preparation that takes the most familiar Vietnamese snack and transforms it with the garlic butter and parmesan combination that has become one of the defining flavors of Vietnamese street food fusion in the last decade. The preparation appears at food stalls in the night markets of Ho Chi Minh City, at beach snack vendors along the Vũng Tàu coast, and at the newer street food concepts that have adopted the butter-garlic-parmesan combination (borrowed initially from the French-Vietnamese kitchen and since applied to everything from bánh mì to corn to shellfish) as the default flavor upgrade for fried or grilled snacks. The technique is simple but timing-dependent: the shrimp crackers must be fried first to their maximum expansion and crispiness, then tossed immediately in the browned garlic butter while still hot — the heat of the crackers melts the butter on contact and allows the garlic, chili, and parmesan to adhere to the airy, slightly oily surface. The parmesan must be very finely grated — almost powdered — for it to coat the curved, irregular surface of the expanded cracker rather than falling off in chunks. The dried chili flakes provide the heat note that prevents the preparation from being merely rich — a critical balance point in any butter-parmesan preparation that is intended as a snack rather than a condiment. The result is a shrimp cracker that retains its crispiness for longer than a plain fried cracker (the butter coating slightly seals the surface against moisture absorption), carries the specific flavor combination of shrimp, garlic, butter, and parmesan that is immediately appealing, and that disappears from any serving plate faster than any other preparation in this collection.`,
    ingredientSections: [
        {
            title: 'Shrimp crackers',
            items: [
                { amount: 150, unit: 'g', name: 'dried unfried shrimp crackers (bánh phồng tôm khô)', note: 'commercial or homemade dried crackers. Do not use pre-fried crackers from bags — the reheated texture is different from freshly fried.' },
                { amount: 500, unit: 'ml', name: 'neutral oil', note: 'for deep frying at 190°C' },
            ],
        },
        {
            title: 'Garlic butter',
            items: [
                { amount: 60, unit: 'g', name: 'unsalted butter', note: 'browned (beurre noisette) rather than simply melted — the browning produces the nutty depth that plain melted butter lacks' },
                { amount: 6, name: 'garlic cloves', note: 'minced very finely — almost to a paste' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'the Vietnamese element — adds umami without sharpness' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 40, unit: 'g', name: 'parmesan cheese', note: 'very finely grated — microplane-grated to an almost powder consistency that coats without clumping' },
                { amount: 1, unit: 'tsp', name: 'dried chili flakes (ớt khô)', note: 'the heat note that balances the butter richness' },
                { amount: 3, name: 'spring onions', note: 'green parts, thinly sliced — for freshness' },
                { amount: 0.5, unit: 'tsp', name: 'flaky sea salt', note: 'for finishing — the salt crunch against the airy cracker' },
                { amount: 1, unit: 'tbsp', name: 'fresh lime juice', note: 'squeezed over at the very end — brightens the butter richness' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the brown butter garlic base',
            description: 'In a small saucepan, melt the butter over medium heat. Continue cooking, swirling constantly, until the butter solids turn golden-brown and the butter smells of hazelnuts — 3-4 minutes. Remove from heat immediately. Add the very finely minced garlic to the browned butter off the heat — the residual heat cooks the garlic without burning it. Add fish sauce, sugar, and white pepper. Stir to combine. The browned garlic butter can be prepared in advance and rewarmed gently when the crackers come out of the fryer.',
            tip: 'Browning the butter (beurre noisette) rather than simply melting it is the technique that makes bánh phồng tôm sốt bơ tỏi taste of something more than a fried cracker with butter. The Maillard reaction in the milk solids produces a nutty, complex depth that is the foundation of French brown butter cooking and that arrived in Vietnamese kitchens via the colonial culinary exchange. The fish sauce addition is the specifically Vietnamese domestication of this French technique.',
        },
        {
            title: 'Fry the crackers to maximum expansion',
            description: 'Heat neutral oil to 190°C in a wok or deep pot. Fry the dried shrimp crackers in small batches — they expand dramatically and need space. Fry for 3-5 seconds per batch until fully expanded and just barely beginning to color. Remove immediately and drain briefly on paper towels. Work quickly — all the crackers should be fried and ready before the garlic butter begins to cool.',
            tip: 'Frying all the crackers before adding the garlic butter — rather than frying in batches and tossing each batch — produces a more even result. The garlic butter toss should happen with all the fried crackers at once so every cracker receives the same temperature butter at the same moment.',
        },
        {
            title: 'Toss in garlic butter — immediate and vigorous',
            description: 'Transfer all the fried crackers to a large bowl. Pour the warm garlic butter over the hot crackers immediately. Toss vigorously — using a large spoon or tongs, lifting and folding the crackers through the butter repeatedly for 20-30 seconds until every surface is coated. The crackers will make a specific crackling sound as they are tossed against each other in the butter. Dust the grated parmesan over the tossed crackers while still in motion — it will adhere to the butter-coated surfaces.',
            tip: 'The vigorous tossing motion for the garlic butter crackers is the technique that produces even coating. Gentle stirring leaves some crackers heavily buttered and some uncoated. The 20-30 second window is the time before the crackers begin to cool and the butter begins to set — work quickly and confidently.',
        },
        {
            title: 'Finish and serve immediately',
            description: 'Transfer to a serving plate. Scatter dried chili flakes, sliced spring onion, and flaky sea salt over the finished crackers. Squeeze fresh lime juice over the entire plate. Serve immediately. The lime juice brightens the entire preparation and prevents the butter richness from feeling heavy — it is added last to preserve its freshness. Eat while the crackers are still warm and the parmesan slightly softened from the butter heat.',
            tip: 'The lime juice squeezed at the very end of bánh phồng tôm sốt bơ tỏi is the element that prevents the butter-parmesan combination from tasting heavy or one-dimensional. The same logic applies here as in the butter-garlic oyster preparation: the acid brightens the richness and makes the snack feel complete rather than merely indulgent.',
        },
        {
            title: 'The timing that makes this work',
            description: 'The entire preparation from frying to serving should take under 5 minutes. The sequence: oil to temperature → fry all crackers (2 minutes) → pour garlic butter and toss (30 seconds) → add parmesan and finish (30 seconds) → serve immediately. Any delay between frying and serving produces crackers that have begun to absorb moisture and lost their maximum crispiness. The garlic butter coating extends the crispiness window slightly — buttered crackers remain crispy for approximately 15 minutes versus 5-10 minutes for plain fried crackers — but the window for optimal eating is still small. Make this last, eat it first.',
            tip: 'Bánh phồng tôm sốt bơ tỏi parmesan made and eaten in the same 5-minute window is the version the preparation was designed for. The same crackers an hour later are a different and diminished experience. At Vietnamese food stalls where this is sold, the vendor fries the crackers, tosses them in butter, and hands them to the customer in one continuous motion. The street food immediacy is part of the preparation.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
