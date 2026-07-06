'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-tom-buoi',
    title: 'Gỏi Tôm Bưởi (Vietnamese Pomelo and Shrimp Salad)',
    subtitle: 'Pomelo segments torn into pieces and tossed with poached shrimp, pork belly, rau răm, crispy shallots, roasted peanuts, and a lime-fish sauce dressing that brightens the pomelo\'s natural bitterness into something extraordinary. The southern Vietnamese salad built around the fruit that is simultaneously the most subtle and the most complex in the Vietnamese orchard.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/goi-tom-buoi.jpg',
    intro: `Gỏi tôm bưởi is the pomelo salad of southern Vietnam — a preparation that uses bưởi (pomelo, the large citrus fruit that is the ancestor of the grapefruit) in the specific way that reveals what makes pomelo different from every other citrus fruit in Vietnamese cooking: it is simultaneously sweet, sour, and bitter, with a dry texture in the flesh that absorbs dressings rather than releasing liquid into them, and a fragrance that is more floral and complex than grapefruit. In gỏi tôm bưởi, the pomelo segments are torn apart by hand into irregular pieces rather than cut — the tearing separates the individual juice sacs and produces a texture that is fluffy and absorbent rather than wet and slick. Poached shrimp and boiled pork belly provide the protein. Rau răm provides the sharp peppery herb note that is its defining character. Crispy fried shallots add crunch and sweetness. The dressing is the standard Vietnamese gỏi dressing — lime juice, fish sauce, sugar, garlic, chili — but calibrated specifically for pomelo: less lime than for mango or papaya salad, because the pomelo already contributes significant citrus character, and a slightly larger amount of sugar to balance the fruit's natural bitterness. Gỏi tôm bưởi is a southern Vietnamese dish, associated particularly with the Mekong Delta and the coastal provinces where pomelo orchards are extensive — Bến Tre, Tiền Giang, Vĩnh Long — and where the fruit is available in abundance from October through January. It is eaten as an appetizer at family gatherings, as a party dish, and as the salad that appears at Vietnamese Tết celebrations in the south alongside the richer meat dishes as a refreshing contrast.`,
    ingredientSections: [
        {
            title: 'Pomelo',
            items: [
                { amount: 1, name: 'large pomelo (bưởi)', note: 'about 1.2-1.5kg whole fruit. Choose a pomelo that feels heavy for its size with a fragrant skin. Pink-fleshed pomelo (bưởi da xanh) produces a more visually dramatic salad; white-fleshed pomelo has a cleaner, more subtle flavor.' },
            ],
        },
        {
            title: 'Proteins',
            items: [
                { amount: 250, unit: 'g', name: 'fresh shrimp, medium', note: 'peeled and deveined — poached 3 minutes in salted water with a squeeze of lime, cooled and halved lengthwise' },
                { amount: 150, unit: 'g', name: 'pork belly', note: 'boiled 15 minutes with lemongrass and ginger, cooled and sliced 3mm thin' },
            ],
        },
        {
            title: 'Salad components',
            items: [
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 2, unit: 'tbsp', name: 'shallot-infused oil', note: 'drizzled over at the end' },
                { amount: 2, name: 'shallots', note: 'thinly sliced, soaked in ice water 10 minutes, drained' },
            ],
        },
        {
            title: 'Herbs',
            items: [
                { amount: 1, name: 'large bunch Vietnamese coriander (rau răm)', note: 'leaves only — essential and used generously' },
                { amount: 0.5, name: 'bunch mint (húng lủi)', note: 'leaves only' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Dressing (calibrated for pomelo)',
            items: [
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'fresh lime juice', note: 'less than other gỏi — the pomelo provides its own citrus acidity' },
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'slightly more than other gỏi — balances the pomelo\'s natural bitterness' },
                { amount: 2, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
                { amount: 0.5, unit: 'tsp', name: 'sesame oil', note: 'adds warm fragrance that complements the pomelo' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 8, name: 'prawn crackers (bánh phồng tôm)', note: 'for scooping' },
                { amount: 2, name: 'limes, extra wedges' },
                { amount: 1, name: 'fresh red chili, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the pomelo — tearing, not cutting',
            description: 'Cut off the top of the pomelo. Score the thick skin from top to bottom in 6-8 sections. Peel the skin away in sections — the white pith is very thick and peels in large pieces. Separate the fruit into segments. Remove the tough membrane from each segment: tear it open gently and pull the juice sacs away from the membrane with your fingers. Tear the juice sac clusters into pieces 2-3cm across — do not cut with a knife. The torn edges are irregular and fluffy, absorbing the dressing more completely than smooth cut surfaces.',
            tip: 'The thick white pith of the pomelo between the outer skin and the fruit segments is edible but very bitter — remove as much as possible when peeling. A small amount left on the segments is correct and contributes to the characteristic pomelo bitterness; significant pith makes the salad unpleasantly bitter.',
        },
        {
            title: 'Drain the pomelo — critical step',
            description: 'After tearing, place the pomelo pieces in a colander and leave to drain for 10-15 minutes. The pomelo will release a small amount of juice. This draining prevents the juice from diluting the dressing when the salad is assembled. Gently squeeze the pieces as you handle them — they should feel relatively dry rather than wet and heavy.',
            tip: 'Un-drained pomelo produces a salad where the dressing is immediately diluted by the fruit juice. Drained pomelo absorbs the dressing rather than releasing into it. The textural and flavor difference is significant. 10 minutes of draining is worth doing.',
        },
        {
            title: 'Cook the proteins — cool completely',
            description: 'Poach shrimp in salted water with a squeeze of lime for exactly 3 minutes. Transfer to ice water immediately, peel, devein, and halve lengthwise. Boil pork belly in salted water with a lemongrass stalk and 2 ginger slices for 15 minutes until just cooked. Cool in the cooking liquid, then slice 3mm thin against the grain. Both proteins must be completely cool before assembling — warm proteins wilt the pomelo and rau răm.',
            tip: 'The lime in the shrimp poaching water keeps them pink and bright — without it they grey slightly. This detail matters in a salad where visual appeal is part of the dish.',
        },
        {
            title: 'Make the dressing — calibrate for pomelo',
            description: 'Combine fish sauce, lime juice, sugar, water, garlic, chili, and sesame oil. Stir until sugar dissolves. Taste alongside a piece of pomelo: the dressing should add savory depth and sweetness to the pomelo without competing with its natural citrus flavor. The less lime and extra sugar compared to standard gỏi dressing is specifically for pomelo — adjust further based on the sweetness and bitterness of your specific fruit.',
            tip: 'Every pomelo is different — some are very sweet, some quite bitter, some with pronounced citrus acidity. Taste the pomelo first and calibrate the dressing to its specific character. This is the most important decision in gỏi tôm bưởi and cannot be standardized.',
        },
        {
            title: 'Assemble gently — pomelo last',
            description: 'In a large wide bowl, combine the shrimp, pork slices, soaked shallots, rau răm, mint, and spring onion. Pour the dressing over and toss gently. Add the drained pomelo pieces last — fold them in with a lifting motion rather than tossing, to keep the fragile juice sac clusters intact. Every element should be lightly coated with dressing without the pomelo breaking down.',
            tip: 'Adding the pomelo last and folding rather than tossing is the technique that keeps the salad looking abundant and textured rather than compressed and wet. The pomelo pieces should be visible and distinct throughout the finished salad.',
        },
        {
            title: 'Plate and finish',
            description: 'Transfer to a serving plate. Drizzle shallot oil over the surface. Top with crushed peanuts, crispy fried shallots, and sliced fresh chili — all added at the last moment to preserve crunch and color. Serve immediately with prawn crackers and lime wedges. Gỏi tôm bưởi should be served and eaten within 15-20 minutes of dressing — the pomelo continues to release moisture and the peanuts and shallots soften over time. This is a make-and-serve salad, not a make-ahead one.',
            tip: 'The visual of gỏi tôm bưởi on the plate — the pale pomelo pieces, the pink shrimp, the golden peanuts and shallots, the dark green rau răm — is one of the most colorful in Vietnamese cooking. Present generously on a wide, flat plate where every element is visible.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}