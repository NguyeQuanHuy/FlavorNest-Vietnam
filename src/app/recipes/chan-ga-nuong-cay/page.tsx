'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chan-ga-nuong-cay',
    title: 'Spicy Grilled Chicken Feet',
    subtitle: 'Chân gà nướng cay — da giòn, thấm gia vị, cay nồng đã miệng.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '55 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/chan-ga-nuong-cay.jpg',
    intro: `Chan ga nuong cay is Vietnamese street food at its most tactile and social — a pile of grilled chicken feet, lacquered dark with a spicy-sweet marinade, charred at the edges, served on a sheet of paper at a plastic table with cold beer and good company. Nobody eats chicken feet alone. They are a shared dish, eaten slowly, each foot worked with the teeth and fingers to pull off the thin skin and the tender cartilage-soft meat clinging to every joint.

The marinade is the heart of this dish. Lemongrass, garlic, chilli, fish sauce, and a touch of honey build a glaze that does three things during grilling: it caramelises on the surface into a dark, crackling lacquer; it seasons the skin all the way through; and it perfumes the smoke that rises off the coals back into the meat. Finished with a dipping sauce of salt, lime, and chilli — muoi ot chanh — each bite is hot, sticky, salty, sour, and impossible to stop at one. This is the dish that keeps the table together long after dinner is technically over.`,
    ingredientSections: [
        {
            title: 'Chân gà',
            items: [
                { amount: 800, unit: 'g', name: 'chicken feet (chân gà)', note: 'nails trimmed, yellow skin rubbed off — blanched and patted dry' },
                { amount: 1, unit: 'tbsp', name: 'white vinegar', note: 'for blanching water — removes odour' },
                { amount: 1, unit: 'tsp', name: 'salt', note: 'for blanching water' },
            ],
        },
        {
            title: 'Spicy marinade',
            items: [
                { amount: 3, name: 'stalks lemongrass', note: 'white parts only, minced very fine' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'red bird\'s eye chillies', note: 'minced — adjust to heat tolerance' },
                { amount: 1, unit: 'tbsp', name: 'gochugaru or chilli flakes', note: 'Korean chilli flakes add colour and mild heat depth' },
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tbsp', name: 'honey', note: 'helps caramelisation and balances chilli heat' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder', note: 'gives the deep golden colour' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Muối ớt chanh (dipping salt)',
            items: [
                { amount: 1, unit: 'tsp', name: 'sea salt or flaky salt' },
                { amount: 0.5, unit: 'tsp', name: 'chilli powder or minced fresh chilli' },
                { amount: 1, name: 'lime', note: 'cut into wedges — squeezed fresh at the table' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'To finish',
            items: [
                { amount: 3, name: 'stalks spring onion', note: 'sliced fine' },
                { amount: 1, name: 'fresh red chilli', note: 'sliced thin, for garnish' },
                { amount: 1, unit: 'tbsp', name: 'toasted sesame seeds' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the chicken feet',
            description: 'Trim the nails off each foot with kitchen scissors or a heavy knife. Rub the feet with salt and white vinegar, then rinse under cold water. Bring a pot of water to a boil with 1 tbsp white vinegar and 1 tsp salt. Blanch the feet for 5 minutes. Drain and rinse immediately under cold running water. Pat completely dry with paper towels — moisture on the surface will prevent the marinade from adhering and will cause flare-ups on the grill.',
            tip: 'The blanching step is essential — it removes the raw smell, tightens the skin, and partially cooks the feet so the grill only needs to finish and caramelise rather than cook through from raw.',
        },
        {
            title: 'Marinate',
            description: 'Combine all marinade ingredients in a large bowl and mix well. Add the blanched, dried chicken feet and toss to coat every surface thoroughly. Push the marinade into the joints and folds where it tends to slip off. Cover and refrigerate for a minimum of 2 hours — overnight produces significantly deeper flavour penetration.',
            tip: 'The longer the marinade, the more the lemongrass and chilli permeate the skin. Two hours is the minimum for surface flavour; overnight is the difference between a good dish and a great one.',
        },
        {
            title: 'Prepare the grill',
            description: 'If using charcoal: light and allow coals to reach a steady medium-high heat with white ash forming — no raw flame. If using a gas grill or oven grill: preheat to 220°C. Brush the grill grate with oil to prevent sticking. Remove feet from the marinade, shaking off excess but leaving a visible coating. Reserve the leftover marinade for basting.',
        },
        {
            title: 'Grill the feet',
            description: 'Place the feet on the grill over medium-high heat. Grill for 6–7 minutes on the first side without moving — allow the marinade to caramelise and char slightly at the edges. Turn and grill the second side for 5–6 minutes. Baste with reserved marinade during the last 2 minutes of cooking on each side, brushing generously. The feet are done when the skin is deep amber, blistered in spots, and sticky to the touch.',
            tip: 'Some char is correct and desirable — it adds bitterness that balances the sweet marinade. Black and acrid is too far. Aim for dark mahogany with occasional char marks, not an even golden brown.',
        },
        {
            title: 'Make the dipping salt',
            description: 'Combine sea salt, chilli powder, and sugar in a small bowl. Mix well. Cut lime into wedges. To serve, each person squeezes lime over their portion of the dipping salt and mixes it into a sharp, salty-sour-spicy condiment directly on their plate or in a small bowl.',
        },
        {
            title: 'Plate and serve',
            description: 'Pile the grilled feet onto a plate or serve directly on paper. Scatter spring onion, sesame seeds, and fresh chilli over the top. Place the dipping salt and lime wedges alongside. Serve immediately while the skin is still crackling from the grill. Cold beer is the correct pairing — this is non-negotiable.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
