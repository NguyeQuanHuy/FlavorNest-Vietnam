'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-tom-ho-tay',
    title: 'Bánh Tôm H? Tây (West Lake Shrimp Fritters)',
    subtitle: 'Whole shrimp pressed into a seasoned sweet potato and rice flour batter and deep-fried until the sweet potato shreds turn golden and crackling around the shrimp — the Hanoi specialty of West Lake that has been eaten at the same few restaurants for sixty years, with cold beer and the specific nu?c ch?m of the north.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-tom-ho-tay.jpg',
    intro: `Bánh tôm H? Tây is the shrimp fritter that belongs specifically to the western shore of West Lake in Hanoi — to the stretch of road along Thanh Niên where a handful of restaurants have been serving this specific preparation for longer than most of their current customers have been alive. The dish is deceptively simple in description: shrimp in a batter, deep-fried. The reality is more specific. The batter contains shredded sweet potato (khoai lang) that surrounds the whole shrimp, with the shrimp tail and body protruding from the sweet potato in a way that is both functional and visually distinctive. When fried, the sweet potato shreds become thin, golden, slightly sweet, and crackling — a texture that is completely different from either a smooth batter coating or a thick breading. The shrimp inside steams in its own moisture, protected by the sweet potato exterior, and remains juicy and sweet while the outside shatters. The specific character of H? Tây bánh tôm comes from the freshness of the lake shrimp historically used — small, intensely sweet shrimp from West Lake itself, a variety that is now rarely available and has been replaced by farmed shrimp without most diners noticing the change — and from the nu?c ch?m served alongside, which is the northern version: lighter, less sweet, with rice vinegar rather than lime, and sliced green papaya in the bowl for crunch. Bánh tôm H? Tây is eaten standing up at the lakeside restaurants, looking at the water, with cold Hà N?i beer, in a combination that is one of the specific pleasures of being in Hanoi.`,
    ingredientSections: [
        {
            title: 'Shrimp',
            items: [
                { amount: 400, unit: 'g', name: 'fresh shrimp, small to medium', note: 'peeled but tails left on — the tail is the handle when eating. Devein. Pat completely dry.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for brief marinating' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Sweet potato batter',
            items: [
                { amount: 300, unit: 'g', name: 'orange sweet potato (khoai lang)', note: 'peeled and shredded into fine julienne strips 2-3mm wide. Squeeze out excess moisture after shredding.' },
                { amount: 80, unit: 'g', name: 'rice flour (b?t g?o)', note: 'binds the sweet potato shreds together and adds crispiness' },
                { amount: 20, unit: 'g', name: 'cornstarch (b?t b?p)', note: 'extra crispiness' },
                { amount: 1, unit: 'tsp', name: 'baking powder', note: 'creates lightness in the batter' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the characteristic golden color' },
                { amount: 80, unit: 'ml', name: 'cold water', note: 'just enough to bring the batter together — it should be very thick, not pourable' },
                { amount: 500, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
        {
            title: 'Northern-style nu?c ch?m H? Tây',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'rice vinegar', note: 'the northern Vietnamese souring agent — not lime' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 200, unit: 'ml', name: 'warm water' },
                { amount: 2, name: 'garlic cloves', note: 'thinly sliced — left whole in northern style, not minced' },
                { amount: 1, name: 'fresh red chili', note: 'thinly sliced' },
                { amount: 100, unit: 'g', name: 'green papaya', note: 'finely shredded and added to the dipping bowl — the H? Tây specific addition' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'head butter lettuce', note: 'leaves for wrapping' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 1, name: 'cucumber', note: 'sliced into batons' },
                { amount: 200, unit: 'g', name: 'dried rice vermicelli', note: 'cooked and cooled — served alongside in the H? Tây restaurant style' },
                { amount: 2, name: 'limes, cut in wedges', note: 'optional — the northern version uses vinegar not lime, but both are served' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the shrimp briefly',
            description: 'Toss the peeled, tailed shrimp with fish sauce, white pepper, and sugar. Leave 10 minutes. Pat dry again — the marinade draws moisture from the shrimp and the surface must be dry for the sweet potato batter to adhere properly.',
            tip: 'The tail left on serves as a handle when eating bánh tôm — the diner picks up the fritter by the tail, wraps it in lettuce, and dips it in the nu?c ch?m. Do not remove the tail.',
        },
        {
            title: 'Prepare and squeeze the sweet potato',
            description: 'Peel and shred the sweet potato into fine julienne strips 2-3mm wide using a box grater or julienne peeler. Place in a clean cloth and squeeze firmly over the sink — significant moisture will come out. The squeezed sweet potato should feel quite dry. This step is what produces crispy sweet potato shreds rather than soft, waterlogged ones.',
            tip: 'Squeezing the sweet potato is the most important prep step. Un-squeezed sweet potato releases its moisture into the hot oil, producing violent splatter and soggy fritters. Properly squeezed sweet potato fries to a crisp, delicate exterior.',
        },
        {
            title: 'Make the batter and combine',
            description: 'Combine rice flour, cornstarch, baking powder, salt, and turmeric in a bowl. Add cold water gradually, stirring, until a thick paste forms — about the consistency of wet sand, not a pourable batter. Add the squeezed sweet potato shreds and toss to coat in the flour mixture. Each sweet potato shred should be lightly coated. The mixture should hold together when pressed but not flow.',
            tip: 'The batter for bánh tôm is much thicker and drier than Western fritter batters. It is almost a dry coating with a small amount of wet binder rather than a liquid batter. This produces the distinctive loose, shredded exterior rather than a smooth coating.',
        },
        {
            title: 'Shape the fritters',
            description: 'Take a generous tablespoon of the sweet potato batter and press it into a loose oval in the palm of your hand. Press one marinated shrimp into the center, tail protruding from one end. Press more batter over the shrimp body to encase it, leaving the tail exposed. Squeeze gently to compact the batter around the shrimp — it should hold its shape when placed on a surface. Make all fritters before heating the oil.',
            tip: 'The shrimp tail protruding from the end of the fritter is the visual signature of bánh tôm H? Tây. It is both practical (the handle for eating) and aesthetic. Make sure the tail is clearly visible and not buried in batter.',
        },
        {
            title: 'Deep-fry at 170°C',
            description: 'Heat oil to 170°C — slightly lower than most frying temperatures to allow the sweet potato to cook through and crisp without the exterior burning before the inside is done. Slide the fritters gently into the oil — do not drop, which disturbs the loose batter structure. Fry for 3-4 minutes without moving until the bottom is deep golden. Turn carefully and fry the other side 2-3 minutes. The fritters are done when the sweet potato shreds are uniformly golden and the whole fritter feels light and rigid when lifted.',
            tip: 'The 170°C temperature is specifically lower than most frying because the sweet potato needs time to cook through and develop its sweetness before the exterior over-browns. At 180°C the exterior colors before the sweet potato interior caramelizes properly.',
        },
        {
            title: 'Make the H? Tây nu?c ch?m and serve',
            description: 'Combine fish sauce, rice vinegar, sugar, and warm water. Stir until dissolved. Add sliced garlic and chili. Divide into individual bowls and add a small amount of shredded green papaya to each bowl — it softens slightly in the dipping sauce and adds a fresh crunch when eaten. Drain the fritters on paper towels. Serve immediately with lettuce, herbs, cucumber, and rice vermicelli alongside. To eat: wrap a fritter in a lettuce leaf with herbs and rice vermicelli, dip in the H? Tây nu?c ch?m, eat in one or two bites.',
            tip: 'The rice vinegar rather than lime juice in the nu?c ch?m is the specific northern Vietnamese character of this dish. The vinegar sourness is cleaner and less aromatic than lime, which allows the sweet potato and shrimp flavors to remain primary in the dipping experience. Substitute lime and the dish still works, but it tastes like a southern version.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
