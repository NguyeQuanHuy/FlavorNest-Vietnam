'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-tan-thuoc-bac',
    title: 'Gà T?n Thu?c B?c (Vietnamese Herbal Chicken Braise)',
    subtitle: 'A whole small chicken slow-braised in a clay pot with Chinese medicinal herbs — astragalus, goji berries, red dates, longan, lotus seeds, and ginger — until the broth becomes dark, fragrant, and deeply restorative. The Vietnamese dish eaten as medicine and remembered as comfort.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr 30 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/ga-tan-thuoc-bac.jpg',
    intro: `Gà t?n thu?c b?c is the Vietnamese herbal chicken that sits at the intersection of food and medicine — a small whole chicken slowly braised in a clay pot with a selection of Chinese medicinal herbs and dried fruits that have been used in Vietnamese cooking for centuries. T?n means to braise slowly in a covered vessel with minimal liquid; thu?c b?c means northern medicine, referring to the traditional Chinese medicinal herb tradition that has deeply influenced Vietnamese cooking, particularly in Hu? and among the ethnic Chinese communities of Vietnam. The herbs in gà t?n thu?c b?c are not decorative: astragalus root (hoàng k?) is a tonic herb associated with energy and immune function. Red dates (táo d?) add sweetness and are used throughout Vietnamese medicine as a blood tonic. Goji berries (k? t?) add color and their specific nutritional character. Longan flesh (long nhãn) contributes sweetness and calm. Lotus seeds (h?t sen) appear for their association with clarity and rest. Together, simmered in the chicken's own juices with ginger and the minimum of water, they produce a broth that is dark amber, slightly sweet, aromatic in a way that is neither herb nor medicine but specifically itself. Gà t?n thu?c b?c is made for a sick family member, for a mother who has just given birth, for a father who has been working too hard, for anyone who needs to eat something that will repair rather than merely sustain. It is also simply very delicious, which is perhaps the most important thing about it.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 1, name: 'small whole chicken (800g-1kg)', note: 'ideally a young hen (gà mái to) or bantam chicken — the smaller size cooks more evenly in the clay pot and the flavor is more concentrated. A Cornish hen is an excellent substitute.' },
                { amount: 1, unit: 'tsp', name: 'salt', note: 'for rubbing the cavity' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Medicinal herbs and dried fruits',
            items: [
                { amount: 20, unit: 'g', name: 'astragalus root slices (hoàng k?)', note: 'dried, available at Vietnamese or Chinese herbal shops and some Asian grocers' },
                { amount: 8, name: 'red dates (táo d? / jujubes)', note: 'dried — pitted or whole. Adds sweetness and color.' },
                { amount: 2, unit: 'tbsp', name: 'goji berries (k? t? / wolfberries)', note: 'dried — soaked 10 minutes and drained before adding' },
                { amount: 30, unit: 'g', name: 'dried longan flesh (long nhãn)', note: 'or 8 fresh longan, peeled and pitted' },
                { amount: 50, unit: 'g', name: 'fresh lotus seeds (h?t sen)', note: 'embryo removed. Or dried, soaked 2 hours.' },
                { amount: 3, name: 'slices dong quai root (duong quy)', note: 'optional — a warming tonic herb with a distinctive anise-adjacent aroma. Use sparingly.' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '4-5 thick slices, smashed' },
                { amount: 2, name: 'spring onions', note: 'tied in a bundle' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 400, unit: 'ml', name: 'water', note: 'just enough to come halfway up the chicken — gà t?n is a semi-dry braise, not a soup' },
                { amount: 2, unit: 'tbsp', name: 'Shaoxing wine or dry rice wine', note: 'adds depth and helps extract the herb flavors' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for seasoning — added at the end' },
                { amount: 1, unit: 'tsp', name: 'salt', note: 'adjust to taste at the end' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced — scattered over before serving' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'ground fresh over the bowl' },
                { amount: 2, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Rinse the herbs and soak',
            description: 'Rinse all dried herbs briefly under cold water — they are often dusty from storage. Soak the goji berries separately in cold water for 10 minutes until slightly plumped. Soak the lotus seeds if using dried ones for 2 hours until fully rehydrated. The other herbs (astragalus, red dates, longan, dong quai) do not need soaking — they release their character during the long braise. If using dong quai, use only 2-3 small slices; its flavor is powerful and one piece too many makes the broth medicinal rather than pleasant.',
            tip: 'Taste a red date and a piece of longan before adding — they should be sweet and mildly flavored. Herbs that smell musty or have no aroma have lost their potency during poor storage and should be replaced.',
        },
        {
            title: 'Prepare the chicken',
            description: 'Remove any giblets from the cavity. Rub the cavity with salt and white pepper. Stuff the cavity loosely with some of the ginger slices, the spring onion bundle, and a few red dates and longan pieces — the aromatics inside perfume the meat from within during the long braise. Truss the legs together with kitchen twine to keep the bird compact in the pot.',
            tip: 'Stuffing some aromatics inside the cavity is what gives gà t?n its characteristic fragrance that penetrates the meat fully rather than existing only in the broth. The herbs outside the chicken flavor the liquid; the herbs inside flavor the flesh.',
        },
        {
            title: 'Layer the clay pot',
            description: 'In a clay pot or heavy Dutch oven just large enough to hold the chicken, place the astragalus slices on the bottom — they form a natural rack that prevents the chicken from sitting directly on the hot clay. Place the whole chicken breast-side up on the astragalus. Arrange the remaining red dates, goji berries, longan flesh, lotus seeds, ginger slices, and dong quai (if using) around and over the chicken. Pour the water and Shaoxing wine around the sides — not over the chicken.',
            tip: 'The clay pot is ideal because it distributes heat gently and evenly, maintains temperature well with minimal energy, and the porous walls allow slight moisture exchange that concentrates the broth naturally. A heavy Dutch oven is the best substitute.',
        },
        {
            title: 'Braise slowly — do not rush',
            description: 'Bring to a gentle boil over medium heat with the lid on. Reduce to the lowest possible simmer immediately — the liquid should barely move. Braise for 1.5-2 hours. The chicken is done when the leg joint moves freely with no resistance and the broth has turned deep amber. Check the liquid level at the 1-hour mark and add 2-3 tablespoons of water if it has reduced too much — the broth should remain at a level that bastes the lower half of the chicken.',
            tip: 'The lowest possible heat for the longest possible time is the principle of t?n cooking. High heat produces a cloudy broth and stringy, overcooked chicken. Barely simmering produces a clear, dark amber broth and chicken that is falling-off-the-bone tender.',
        },
        {
            title: 'Season and finish',
            description: 'When the chicken is done, taste the broth — it will be intensely flavored, slightly sweet from the dates and longan, with the specific depth of the astragalus and ginger. Season with fish sauce and salt to bring the savory element into balance. The broth should taste complete — sweet, savory, aromatic, and deeply warming. Remove the spring onion bundle and ginger slices before serving.',
            tip: 'Season only at the end — the herbs and dried fruits release sugar during the long braise and the broth becomes sweeter as it concentrates. Seasoning at the start produces an over-salted result by the time the braise finishes.',
        },
        {
            title: 'Serve from the clay pot',
            description: 'Bring the clay pot directly to the table — the retained heat keeps the chicken and broth warm throughout the meal. Scatter sliced spring onion over the top. Grind white pepper over the broth. To serve: ladle broth into small bowls first, then pull the chicken apart at the table — it should be so tender the joints separate without a knife. Each person gets chicken pieces, the soft herbs and fruits from the broth, and a bowl of the medicinal broth to drink alongside rice.',
            tip: 'The dried fruits that have braised with the chicken — red dates, goji berries, longan — are eaten as part of the dish, not discarded. They have absorbed the chicken broth and given their flavor to the liquid in return, and at this point are both delicious and, in Vietnamese food thinking, part of the restorative function of the meal.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
