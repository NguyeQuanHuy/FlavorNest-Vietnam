'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ech-kho-sa-rieng-phu-yen',
    title: 'Ếch Kho Sả Riềng Phú Yên (Phú Yên Frog Braised with Lemongrass and Galangal)',
    subtitle: 'Frog sections caramelized in dark sugar then braised in a clay pot with lemongrass, galangal, mắm nhĩ, and fresh chili until the sauce reduces to a dark, sticky glaze that clings — the Phú Yên kho that uses the three-aromatic combination specific to the province\'s inland frog cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ech-kho-sa-rieng-phu-yen.jpg',
    intro: `Ếch kho sả riềng Phú Yên is the braised frog preparation of the province's inland communities — the kho dish that the families of Sơn Hòa and Đồng Xuân make with the paddy frogs and mountain stream frogs that share the rice field and waterway ecosystem of the highland valleys. Unlike the Mekong Delta kho preparations that use only ginger or only galangal with the caramel and fish sauce, the Phú Yên version uses the three-aromatic combination that defines the province's inland cooking: lemongrass, galangal, and ginger together, each present in an amount that produces its own character while the three combine into something more complex than any single one achieves alone. The mắm nhĩ in the braising liquid is the condiment that turns this from a generic central Vietnamese frog kho into a specifically Phú Yên preparation — the first-press fish sauce's natural sweetness and complexity caramelizes with the dark caramel into a glaze of unusual depth for such a simple preparation. Frog kho requires slightly different handling than pork or duck kho because the flesh is so lean and so delicate: the braising time is shorter (25-30 minutes rather than 40-45), the heat lower, and the turning of the pieces more careful. A frog kho that is braised for too long produces dry, stringy flesh in a sauce that has concentrated beyond what the lean protein can support. Correctly made ếch kho sả riềng is dark and glossy, intensely savory, warm from the galangal, fragrant from the lemongrass, and carrying the specific sweetness of frog that the concentrated mắm nhĩ caramel amplifies rather than obscures. It is eaten with plain white rice — one piece of kho frog per two spoons of rice — in the measured, appreciative way that the most concentrated Vietnamese kho dishes are always eaten.`,
    ingredientSections: [
        {
            title: 'Frog',
            items: [
                { amount: 600, unit: 'g', name: 'frog sections (ếch chặt miếng)', note: 'cleaned, skin removed, chopped into 5-6cm sections with bone. The bone in kho frog is important — it contributes gelatin to the braising sauce and holds the delicate flesh together during the braising period.' },
                { amount: 1.5, unit: 'tbsp', name: 'mắm nhĩ', note: 'for pre-marinating' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Kho base',
            items: [
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'for the caramel' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, minced to paste' },
                { amount: 30, unit: 'g', name: 'fresh galangal (riềng)', note: 'minced to paste — the defining aromatic for Phú Yên ếch kho' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'minced — smaller proportion than galangal in this preparation' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'whole — placed in without cutting' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 3, unit: 'tbsp', name: 'mắm nhĩ (Phú Yên first-press fish sauce)', note: 'the defining seasoning of Phú Yên ếch kho — more complex and sweeter than standard fish sauce' },
                { amount: 1, unit: 'tsp', name: 'dark soy sauce', note: 'for color depth' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'additional balance' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 100, unit: 'ml', name: 'water', note: 'just enough to start the braise' },
            ],
        },
        {
            title: 'Garnish and to serve',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced — added at the very end' },
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded — added at the end for fragrance' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice', note: 'plain and hot — the only accompaniment needed' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'fresh red chili, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the frog briefly',
            description: 'Combine frog sections with mắm nhĩ, turmeric, and black pepper. Toss gently to coat. Leave 15 minutes at room temperature. The turmeric eliminates any gamey freshwater character before the frog meets the caramel — this is especially important for kho preparations where the long braising concentrates all flavors, including any off-notes from poorly prepared frog.',
            tip: 'The 15-minute pre-marination for ếch kho is shorter than for other proteins because frog flesh is lean and absorbs quickly. The fish sauce in the marinade begins the seasoning process; the braising sauce continues it. Both stages together produce complete seasoning throughout the flesh rather than only at the surface.',
        },
        {
            title: 'Make the dark caramel',
            description: 'In a clay pot over medium heat, add oil and sugar. Leave until the edges begin to melt. Swirl to a deep amber — very close to dark for frog kho, because the delicate flesh color benefits from a darker caramel base and the shorter braising time means the caramel needs to be doing more color work from the start. Add water carefully — it will spit. Swirl until dissolved.',
            tip: 'The darker caramel for ếch kho versus the slightly less dark caramel used for cá bống kho is a calibration: frog braised for 25-30 minutes needs more caramel color work than fish braised for 40 minutes. The caramel is doing the color work that time cannot do for the shorter-braised frog.',
        },
        {
            title: 'Fry the three-aromatic paste in the caramel',
            description: 'Add the lemongrass paste, galangal paste, ginger, garlic, and shallots to the hot caramel. Fry for 2 minutes until deeply golden and the three aromatics have cooked together into an integrated paste — not individually fragrant but collectively complex. The galangal should dominate slightly, then the lemongrass, then the ginger as a warm background. Add the whole bird\'s eye chilies.',
            tip: 'The proportion of galangal to lemongrass to ginger in Phú Yên ếch kho (slightly more galangal than lemongrass, less ginger than either) reflects the specific compatibility of galangal with frog that appears throughout the province\'s frog cooking. Galangal is the aromatic that most specifically complements freshwater frog — warmer and more complex than ginger alone would be against the sweet lean flesh.',
        },
        {
            title: 'Add frog and braise — 25-30 minutes maximum',
            description: 'Add the marinated frog pieces to the aromatic caramel. Toss gently to coat. Add mắm nhĩ, dark soy, sugar, pepper, and water. Bring to a boil, reduce to a very gentle simmer. Braise uncovered for 25-30 minutes — significantly shorter than other proteins. Turn the frog pieces once at 15 minutes, handling very carefully to avoid breaking. The sauce should reduce progressively to a thick, dark glaze at 25-30 minutes.',
            tip: 'The 25-30 minute maximum for ếch kho is non-negotiable. Frog braised longer becomes dry and the flesh separates from the bone ungracefully. At 25-30 minutes the frog should be: fully cooked, slightly firm but yielding when pressed, dark from the caramel, and the sauce thick enough to coat a spoon heavily. Pull at the first sign of correct sauce consistency.',
        },
        {
            title: 'Finish and serve from the clay pot',
            description: 'When the sauce has reduced to a dark, sticky glaze, add shredded kaffir lime leaves and sliced spring onion. Toss gently one final time. Grind black pepper over the surface. The finished ếch kho sả riềng should be: pieces dark from caramel, the three-aromatic paste visible as darker patches on the surface, the sauce thick and glossy, fragrant with lemongrass and galangal. Bring the clay pot to the table. Serve with plain hot rice, lime wedges, and sliced chili. Spoon the concentrated sauce generously over rice.',
            tip: 'The three-aromatic paste visible as darker patches on the finished frog is the visual signature of Phú Yên ếch kho — the paste has caramelized onto the flesh surface in the same way it would in dê xào lăn, but through braising rather than wok-rolling. The taste of these paste patches directly is the most concentrated moment of the entire preparation.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
