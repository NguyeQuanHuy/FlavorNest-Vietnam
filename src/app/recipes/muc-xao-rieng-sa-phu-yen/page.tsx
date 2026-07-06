'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-xao-rieng-sa-phu-yen',
    title: 'M?c Xào Ri?ng S? Phú Yên (Phú Yên Squid Stir-Fried with Galangal and Lemongrass)',
    subtitle: 'Fresh squid stir-fried at maximum wok heat with the galangal-forward aromatic combination that defines Phú Yên\'s inland and highland cooking — more galangal than lemongrass, more galangal than the southern xào s? ?t uses — producing a squid stir-fry that is warmer, more complex, and more specifically of the central coast than the standard version.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/muc-xao-rieng-sa-phu-yen.jpg',
    intro: `M?c xào ri?ng s? Phú Yên is the Phú Yên version of the squid stir-fry — the preparation that takes the m?c xào s? ?t technique already documented in the general collection and makes it specifically provincial by replacing the lemongrass-dominant aromatic base with the galangal-dominant combination that characterizes Phú Yên's central and highland cooking. The difference is the same difference that separates cá kho ri?ng from cá kho g?ng, cá tr?m kho c?n from the southern versions, and the Phú Yên ?ch kho from the Mekong versions: galangal (ri?ng) as the leading aromatic rather than ginger or lemongrass. In Phú Yên's cooking, galangal appears more prominently than in any other Vietnamese regional cuisine — a reflection of the abundant fresh galangal that grows in the province's highland interior and that the coastal communities have incorporated into their cooking across the full range of proteins and preparation methods. Applied to squid stir-fry, the galangal-forward aromatic base produces a different result from the lemongrass-forward standard version: where m?c xào s? ?t has a citrus-grass character that is bright and immediately aromatic, m?c xào ri?ng s? Phú Yên has a warmer, more complex, slightly piney character that arrives more slowly and lingers longer. The lemongrass remains present — this is a galangal-dominant combination, not galangal-only — and the two together produce the specific aromatic character of central Vietnamese highland cooking that neither ingredient achieves alone. The m?m nhi used in the Phú Yên version rather than standard fish sauce is the third differentiating element: the premium first-press fish sauce carries the galangal and lemongrass aromatics into the squid flesh more completely than standard fish sauce, because its higher amino acid concentration interacts with the volatile oils of the aromatics and produces a more integrated flavour in the finished dish. The 90-second cooking time from m?c xào s? ?t is retained — this is non-negotiable for squid regardless of which aromatic combination is used.`,
    ingredientSections: [
        {
            title: 'Squid',
            items: [
                { amount: 600, unit: 'g', name: 'fresh squid (m?c tuoi)', note: 'body tubes cut into rings 1.5cm wide, tentacles in clusters. Pat completely dry — the 90-second rule applies here as in every squid stir-fry.' },
                { amount: 1, unit: 'tbsp', name: 'm?m nhi', note: 'for pre-marinating — the Phú Yên version uses m?m nhi even in the marinade' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Phú Yên galangal-forward aromatic base',
            items: [
                { amount: 50, unit: 'g', name: 'fresh galangal (ri?ng tuoi)', note: 'minced to paste — more galangal than lemongrass, the Phú Yên proportion' },
                { amount: 2, name: 'lemongrass stalks', note: 'inner stalk, minced — secondary, supporting role' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced diagonally' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 2, unit: 'tbsp', name: 'm?m nhi (Phú Yên first-press fish sauce)', note: 'added during the wok toss — more complex than standard fish sauce in the finished dish' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'added at the very end' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces — added off-heat' },
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground' },
            ],
        },
        {
            title: 'To serve — Phú Yên style',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch rau ram' },
                { amount: 1, name: 'bunch fresh lá é leaves' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate and dry the squid',
            description: 'Combine squid rings and tentacles with m?m nhi, turmeric, and white pepper. Toss and leave 10 minutes. Then pat completely and firmly dry with paper towels. The m?m nhi in the marinade begins the flavoring process before the wok, and the drying removes the surface moisture that the marinade has drawn out. Dry squid sears; wet squid steams. The 90-second rule applies regardless of the aromatic base used.',
            tip: 'Using m?m nhi rather than standard fish sauce in the squid marinade for the Phú Yên version produces a subtly different surface on the dried squid before it enters the wok — the higher amino acid concentration of m?m nhi interacts with the turmeric and produces a slightly more golden, slightly more complex marinated surface that caramelizes marginally better in the hot wok.',
        },
        {
            title: 'Build the galangal-forward aromatic base',
            description: 'Heat the wok over maximum heat until smoking. Add oil. Add the galangal paste and lemongrass together — fry for 90 seconds until the galangal edges caramelize and the piney-citrus aroma begins to fill the room. The galangal requires slightly longer than lemongrass to develop its best character. Add garlic, shallots, and minced chili. Fry 30 more seconds. The aromatic base for m?c xào ri?ng s? Phú Yên should smell warmer, more complex, and more specifically central Vietnamese than the standard lemongrass-only base.',
            tip: 'The galangal-to-lemongrass proportion — more galangal than lemongrass — is the single element that makes this Phú Yên rather than generic Vietnamese squid stir-fry. The cooking time for the galangal-forward base is slightly longer (90 seconds vs 60-70 seconds for lemongrass-only) because galangal is denser and takes slightly more time to release its volatile oils completely.',
        },
        {
            title: 'Add squid — 90 seconds, set the timer',
            description: 'Add all the dried squid at once. Toss continuously at maximum heat. Add m?m nhi, sugar, and black pepper at 30 seconds. Continue tossing. At 60 seconds the squid should be white throughout. At 90 seconds, remove from heat. The galangal-lemongrass caramelized base should be visibly coating the squid surface — the warm, slightly piney colour of caramelized galangal paste is slightly darker and more amber than the golden colour of caramelized lemongrass paste.',
            tip: 'The visual difference between m?c xào ri?ng s? Phú Yên and m?c xào s? ?t at the 90-second mark: the galangal-forward version has a slightly darker, more amber caramelized coating; the lemongrass-forward version has a brighter, more golden coating. Both are correctly caramelized — the colour difference is from the galangal\'s slightly higher natural sugar concentration.',
        },
        {
            title: 'Finish off-heat and serve',
            description: 'Remove from heat at 90 seconds. Add spring onion, shredded kaffir lime leaves, and sesame oil. Toss once off the heat. Transfer immediately to a serving plate. Scatter sliced red chili. Serve with sesame crackers, fresh lá é leaves, rau ram, lime, and rice. The Phú Yên eating: squid piece on sesame cracker, raw lá é leaf placed alongside, dipped in a squeeze of lime. The galangal warmth of the squid against the citrus-camphor of the lá é leaf is the specific flavour pairing that makes m?c xào ri?ng s? a specifically Phú Yên preparation.',
            tip: 'The comparison between m?c xào s? ?t (lemongrass-forward, bright) and m?c xào ri?ng s? Phú Yên (galangal-forward, warm) eaten alongside each other from the same batch of squid is the clearest possible demonstration of what aromatic proportion does to a stir-fry. The squid is identical. The technique is identical. The aromatic balance is the only variable — and it produces two dishes that taste specifically of different parts of Vietnam.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
