'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'de-nau-mit-non',
    title: 'Dê Nấu Mít Non (Goat Braised with Young Jackfruit)',
    subtitle: 'Bone-in goat pieces braised with unripe green jackfruit in a lemongrass-galangal broth until both become tender — the jackfruit absorbing the goat fat and broth while contributing its own starchy, slightly astringent character that grounds the richness of the meat. The mountain dish of Sơn Hòa district, Phú Yên.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/de-nau-mit-non.jpg',
    intro: `Dê nấu mít non is the dish of Phú Yên's mountainous interior — the highland communities of Sơn Hòa, Sơn Tây, and the Sông Hinh valley where both goat herds and jackfruit trees are abundant, and where the combination of the two in a single pot has been the standard preparation for as long as the communities themselves have existed. Mít non — young, unripe green jackfruit — is entirely different from the ripe jackfruit sold at tropical fruit stalls. It has a firm, almost meat-like texture when raw, a neutral, slightly astringent flavor that absorbs cooking liquid completely, and a starchiness that thickens the braising broth gradually during the long cooking time. When braised alongside goat in lemongrass and galangal broth, the young jackfruit undergoes a transformation: it absorbs the goat fat as it renders, takes in the lemongrass-galangal character of the broth, and develops a dense, slightly chewy texture that is simultaneously a vegetable, a starch, and a fat-carrier in the one piece. Vietnamese home cooks have known for centuries what the current plant-based food movement has recently discovered: that young jackfruit can substitute for or complement meat in a way that other vegetables cannot, because its texture and absorbency are more similar to braised meat than to any other plant food. In dê nấu mít non, the jackfruit does not pretend to be meat — it is itself alongside meat, providing a contrasting density and the specific slightly-astringent note that prevents the goat braise from becoming too rich. It is the dish that highland Phú Yên families make when the jackfruit is young and the goat is freshly slaughtered, the pot going on the fire in the morning and coming to the table at noon.`,
    ingredientSections: [
        {
            title: 'Goat and jackfruit',
            items: [
                { amount: 700, unit: 'g', name: 'bone-in goat pieces (dê chặt miếng)', note: 'shoulder and rib — 5cm pieces, blanched and rinsed' },
                { amount: 600, unit: 'g', name: 'young green jackfruit (mít non)', note: 'unripe — flesh firm and white, no sweetness. Available canned in brine at Asian grocery stores (drain and rinse). Fresh: cut wearing gloves, the latex stains. Quarter each section and remove the core.' },
            ],
        },
        {
            title: 'Aromatic paste',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, minced' },
                { amount: 40, unit: 'g', name: 'fresh galangal', note: 'minced — prominent for mountain cooking' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'dried chilies', note: 'soaked and minced' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 500, unit: 'ml', name: 'water or light pork stock' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'mắm nhĩ', note: 'the Phú Yên addition — adds depth to the braising liquid' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'star anise' },
                { amount: 1, name: 'cinnamon stick, 3cm' },
            ],
        },
        {
            title: 'Vegetables added later',
            items: [
                { amount: 2, name: 'medium tomatoes', note: 'cut into wedges — added in the last 20 minutes for acidity' },
                { amount: 3, name: 'spring onions', note: 'cut into 5cm pieces — added at the end' },
            ],
        },
        {
            title: 'Garnish and to serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch Vietnamese balm (rau kinh giới)' },
                { amount: 4, name: 'spring onions, sliced' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground over each bowl' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 4, unit: 'portions', name: 'fresh baguette', note: 'excellent for mopping the jackfruit-thickened broth' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the young jackfruit',
            description: 'If using fresh young jackfruit: oil your hands and knife before cutting — the latex from raw jackfruit stains skin and clothing permanently. Cut the jackfruit into quarters, remove the central core, and cut each quarter into 4-5cm chunks. The flesh should be completely white and firm with no yellow coloring — any yellow indicates ripening and sweetness that is wrong for this dish. Blanch in salted boiling water for 10 minutes to remove the astringency. If using canned: drain, rinse thoroughly under cold water, and quarter each piece.',
            tip: 'The blanching of fresh young jackfruit is essential — it removes the excessive raw astringency while preserving the firm texture and neutral flavor that makes it ideal for braising. Unblanched raw jackfruit is too astringent in a braise and makes the dish unpleasant rather than pleasantly astringent.',
        },
        {
            title: 'Blanch the goat and build the base',
            description: 'Blanch the goat pieces in boiling water for 10 minutes, drain and rinse. Heat oil in a clay pot or heavy casserole over medium-high heat. Fry the lemongrass-galangal-garlic-shallot paste for 4-5 minutes until golden and deeply fragrant — the galangal must cook through completely or it tastes raw and harsh. Add the dried chili and turmeric. Add the blanched goat pieces and sear for 3 minutes, turning to coat in the aromatic paste.',
            tip: 'The galangal paste in dê nấu mít non needs the full 4-5 minutes of frying to develop its best character. Raw galangal has a sharp, almost medicinal harshness that disappears when properly cooked. At 4-5 minutes it becomes warm, complex, and specifically harmonious with goat and jackfruit.',
        },
        {
            title: 'Add jackfruit and braising liquid',
            description: 'Add the blanched jackfruit pieces directly to the pot with the seared goat. Pour water or stock around the sides. Add fish sauce, mắm nhĩ, sugar, star anise, and cinnamon. The liquid should come about two-thirds up the combined goat and jackfruit — not fully submerged, as both will release moisture during cooking. Bring to a boil.',
            tip: 'The young jackfruit placed directly with the goat from the beginning (not added later as a vegetable) is the correct technique — the jackfruit needs the full braising time to absorb the goat fat and lemongrass-galangal broth. Added in the last 30 minutes it remains separate and under-flavored.',
        },
        {
            title: 'Braise together — 1 hour 15 minutes',
            description: 'Reduce heat to the lowest simmer. Cover tightly. Braise for 1 hour 15 minutes without opening. The jackfruit will slowly absorb the braising liquid and the goat fat that renders during cooking — by the end it will be significantly darker than it went in, slightly translucent, and dense with the broth character. The goat should be just falling from the bone at this point. Open the lid: the broth should have thickened slightly from the jackfruit starch.',
            tip: 'The thickening of the broth from the jackfruit starch is the visual indicator that the braise is developing correctly. At 45 minutes the broth is still quite liquid; at 1 hour 15 minutes it should have a slightly silky, thicker consistency from the dissolved jackfruit starch. This natural thickening is the jackfruit\'s contribution to the broth.',
        },
        {
            title: 'Add tomatoes and finish',
            description: 'Add the tomato wedges in the last 20 minutes — they provide acidity that cuts through the jackfruit starch and brightens the rich goat broth. Add spring onion pieces in the last 5 minutes. Taste the broth: it should be complex and layered — the goat bone richness, the lemongrass fragrance, the galangal warmth, the jackfruit starchiness, and the tomato brightness all present but none dominating. Adjust with fish sauce or a squeeze of lime.',
            tip: 'The tomato acidity in the last 20 minutes is the element that prevents dê nấu mít non from tasting heavy and starchy. The jackfruit thickens the broth significantly during cooking and the tomato provides the balancing note that keeps the dish light enough to eat a full bowl of.',
        },
        {
            title: 'Serve from the pot — highland style',
            description: 'Bring the pot directly to the table. Scatter rau răm, Vietnamese balm, and sliced spring onion over the surface. Grind black pepper generously. Serve with steamed rice and baguette alongside, lime wedges, and sliced chili. To eat: serve a piece of goat and two or three pieces of jackfruit in each bowl, ladle the thickened broth generously. The jackfruit and goat eaten together — one bite of each — is the combination the dish is built for. The baguette for mopping the jackfruit-thickened broth is the finest way to end each bowl.',
            tip: 'Eating the goat and jackfruit together in the same bite is essential — this is not a dish with a primary protein and an accompaniment, but two equal components that need each other. The jackfruit\'s density and mild starchiness grounds the goat\'s richness; the goat\'s fat and flavor elevates the neutral jackfruit. Neither alone produces what they produce together.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
