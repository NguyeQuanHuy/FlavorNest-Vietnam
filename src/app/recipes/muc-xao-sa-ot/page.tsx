'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-xao-sa-ot',
    title: 'M?c Xào S? ?t (Squid Stir-Fried with Lemongrass and Chili)',
    subtitle: 'Fresh squid rings and tentacles stir-fried at maximum wok heat with lemongrass, garlic, and fresh chili for exactly 90 seconds — the time window between perfectly tender and permanently rubbery, where the lemongrass aromatics caramelize onto the surface and the squid retains its specific sweet marine character.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/muc-xao-sa-ot.jpg',
    intro: `M?c xào s? ?t is the lemongrass squid stir-fry of southern and central Vietnamese cooking — a dish where everything that makes it good or bad is determined in 90 seconds of wok contact. Squid is the protein that least tolerates cooking beyond its optimal window: at the correct internal temperature (just set, white throughout, slightly firm but yielding when bitten) it is one of the sweetest and most texturally satisfying seafood proteins in the Vietnamese kitchen. Two minutes beyond this window and it has contracted, toughened, and expelled its natural moisture, becoming the rubbery, chewy experience that has given overcooked squid its deserved poor reputation. The lemongrass-chili xào technique is specifically designed for squid because the maximum wok heat required to caramelize the aromatics onto the squid surface in the available time is the same temperature that cooks the squid through in 90 seconds. The two requirements — maximum heat for aromatic caramelization, minimum time for squid tenderness — are not in tension but in alignment: the hottest possible wok for the shortest possible time produces both goals simultaneously. The squid must be completely dry before it enters the wok — surface moisture drops the wok temperature instantly and produces steaming rather than searing, extending the cooking time beyond the 90-second window and producing the rubbery result that the technique is designed to prevent. The lemongrass in m?c xào s? ?t is more prominent than in most southern Vietnamese seafood stir-fries — three to four stalks for 600g of squid — reflecting the specific compatibility of lemongrass's citrus-grass character with the marine sweetness of fresh squid. This combination produces a dish where the squid's flavor is amplified rather than masked, the lemongrass providing the aromatic frame that makes the squid taste more completely of itself.`,
    ingredientSections: [
        {
            title: 'Squid',
            items: [
                { amount: 600, unit: 'g', name: 'fresh squid (m?c tuoi)', note: 'cleaned — body tubes cut into rings 1-2cm wide, tentacles kept in clusters. Pat completely dry before cooking — this is non-negotiable.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for brief marinating' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'reduces any fishiness and gives golden color' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Stir-fry aromatics',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, minced to paste — four stalks for 600g squid' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'thinly sliced' },
                { amount: 4, name: 'bird\'s eye chilies', note: 'minced — m?c xào s? ?t should be genuinely spicy' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced diagonally — for color' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'added at the very end' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces — added off-heat' },
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded — added off-heat' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, extra sliced' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean, cut, and dry the squid — completely',
            description: 'Clean the squid: pull the tentacles from the body tube, remove the transparent quill, peel the purple skin if desired (optional — the skin is edible), rinse inside and out. Cut the body tube into rings 1-2cm wide. Separate the tentacles into clusters. Combine with fish sauce, turmeric, and white pepper. Toss and leave 10 minutes. Then: press the squid pieces firmly between paper towels until the surface is completely dry. This is the most important preparation step. Dry squid in a hot wok sears and caramelizes. Wet squid in a hot wok steams and toughens.',
            tip: 'The paper towel drying of squid before stir-frying is more critical than for any other protein in the Vietnamese wok cooking collection. Squid contains more water than most seafood and releases it aggressively when heat is applied. Every drop of surface moisture removed before wok contact extends the searing window and reduces the cooking time needed — which is the key to tender rather than rubbery squid.',
        },
        {
            title: 'Build the aromatic base at maximum heat',
            description: 'Heat the wok over maximum heat until smoking — genuinely smoking, not merely hot. Add oil. Add the lemongrass paste, garlic, and shallots simultaneously. Fry for 60-90 seconds until deeply golden — the lemongrass should be caramelized at the edges and the wok should smell explosively aromatic. Add all the minced and sliced chili. The aromatic base must be fully cooked before the squid goes in — under-cooked lemongrass in a squid stir-fry tastes harsh and raw regardless of how good the squid is.',
            tip: 'The 60-90 second aromatic base for m?c xào s? ?t is longer than for most wok preparations because the squid will be in the wok for such a short time that the aromatics must be fully developed before the protein arrives. In a preparation where the protein has 5-10 minutes in the wok, underdone aromatics can catch up; in a 90-second squid stir-fry, they cannot.',
        },
        {
            title: 'Add squid — the 90-second window',
            description: 'Add all the dried squid rings and tentacles to the wok at once. Toss continuously and vigorously over maximum heat. The squid will immediately sizzle — the wok temperature drops from the cold squid but should recover within 15-20 seconds if the wok was sufficiently pre-heated. Add fish sauce, sugar, and black pepper at 30 seconds. Continue tossing. At 60 seconds the squid rings will have curled slightly and turned white throughout. At 90 seconds they should be white, slightly firm when pressed, and the surface showing the beginning of light caramelization from the lemongrass paste. Remove from heat at 90 seconds.',
            tip: 'Set a timer for 90 seconds when the squid enters the wok. The timer is not a guideline — it is the moment to remove the squid from the heat regardless of how the process appears. At 90 seconds at maximum wok heat, fresh squid of the size specified is cooked through. Any additional time produces toughening that cannot be reversed.',
        },
        {
            title: 'Finish off-heat and serve immediately',
            description: 'Remove the wok from heat immediately at 90 seconds. Add spring onion pieces, shredded kaffir lime leaves, and sesame oil. Toss once — the residual heat of the wok will wilt the spring onion without cooking the squid further. Transfer immediately to a serving plate. The finished m?c xào s? ?t: slightly curled white squid rings coated in golden lemongrass paste, the kaffir lime shreds and spring onion visible throughout, steam rising. Serve with rau ram, lime, and rice. Eat while hot.',
            tip: 'The off-heat finishing of m?c xào s? ?t — adding the spring onion and herbs after removing from the flame — is the technique that prevents additional cooking of the squid during the finishing stage. On the flame, even 30 extra seconds of tossing with spring onion would push the squid beyond the optimal window. Off the flame, the residual wok heat does the finishing work without overcooking.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
