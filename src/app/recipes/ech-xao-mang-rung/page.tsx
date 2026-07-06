'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ech-xao-mang-rung',
    title: 'Ếch Xào Măng Rừng Phú Yên (Phú Yên Frog Stir-Fried with Forest Bamboo Shoots)',
    subtitle: 'Paddy frogs from Phú Yên\'s highland rice fields stir-fried with fresh forest bamboo shoots from the Sơn Hòa mountain forests — the sweet, delicate frog and the earthy, slightly bitter bamboo producing the flavor equilibrium that the highland communities of the province have understood for generations.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ech-xao-mang-rung.jpg',
    intro: `Ếch xào măng rừng is the highland Phú Yên stir-fry that combines the two most abundant and most complementary ingredients of the inland communities: ếch, the paddy frogs caught in the rice fields and streams of the highland valleys, and măng rừng, the wild forest bamboo shoots that grow along every hillside in the wet season, harvested at dawn when the tips are still tight and the flesh is at maximum tenderness. The combination of frog and bamboo is not accidental — it reflects both geographic reality (they grow in the same highland ecosystem) and flavor logic (the bamboo's earthy, slightly bitter character and its moisture-releasing stir-fry behavior provide the contrast and the cooking liquid that the lean, sweet frog needs to stay juicy during the high-heat wok process). Unlike ếch xào lăn where the sauce dries completely onto the protein, ếch xào măng rừng retains a small amount of sauce — the moisture released by the bamboo during stir-frying, combined with the fish sauce and a small amount of water, produces a light, naturally thickened liquid that pools slightly in the wok and coats both the frog and bamboo pieces. The lemongrass-galangal aromatic base is present but less dominant than in the kho preparation — here the bamboo's own character is meant to be tasted alongside the aromatic, not obscured by it. The garnishing herbs — rau răm in the Phú Yên generous quantity, plus perilla and spring onion — are added off-heat to preserve their freshness, providing the bright herbal counterpoint that the earthy bamboo-frog combination needs to taste complete rather than heavy.`,
    ingredientSections: [
        {
            title: 'Frog',
            items: [
                { amount: 500, unit: 'g', name: 'frog sections (ếch chặt miếng)', note: 'cleaned, skin removed, chopped into 4-5cm bone-in sections' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for pre-marinating' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Forest bamboo shoots',
            items: [
                { amount: 350, unit: 'g', name: 'fresh forest bamboo shoots (măng rừng)', note: 'peeled to the tender inner layers, sliced 5mm thick. Must be blanched — see step 2. Substitute: canned bamboo shoots drained and rinsed (milder flavor but same technique).' },
            ],
        },
        {
            title: 'Stir-fry aromatics',
            items: [
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, finely minced' },
                { amount: 30, unit: 'g', name: 'fresh galangal', note: 'minced — the highland aromatic' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'thinly sliced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced diagonally' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
                { amount: 3, unit: 'tbsp', name: 'water', note: 'added mid-wok to create steam' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'added at the end' },
            ],
        },
        {
            title: 'Herbs — added off-heat',
            items: [
                { amount: 1, name: 'large bunch Vietnamese coriander (rau răm)', note: 'generous Phú Yên quantity' },
                { amount: 0.5, name: 'bunch perilla (tía tô)', note: 'leaves torn' },
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, extra sliced' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the frog',
            description: 'Combine frog sections with fish sauce, turmeric, black pepper, and sugar. Toss gently. Marinate 20 minutes. The longer marination for ếch xào măng rừng compared to other preparations reflects the presence of the bamboo: the bamboo will release moisture into the wok during cooking, which dilutes the seasoning on the frog surface. Starting with a more fully seasoned frog compensates for this dilution.',
            tip: 'The turmeric in the frog marinade serves double duty in this dish: it removes any gamey freshwater notes AND provides the golden color that visually distinguishes the frog pieces from the bamboo shoots in the finished dish. The color differentiation makes the plate look complete rather than monochromatic.',
        },
        {
            title: 'Blanch the bamboo shoots — mandatory',
            description: 'Peel the fresh bamboo shoots down to the white, tender inner layers. Slice 5mm thick. Place in a large pot of cold water, bring to a full boil, blanch for 15-20 minutes. Drain and rinse. Taste a piece — it should be tender-crunchy with a mild pleasant bitterness. If strongly bitter, blanch again for 10 more minutes. Fresh bamboo must always be blanched to remove natural cyanogenic glycosides and to bring the bitterness to an enjoyable level.',
            tip: 'Forest bamboo (măng rừng) from Phú Yên\'s Sơn Hòa mountains is typically more bitter than lowland bamboo because it grows in less-cultivated conditions. A second blanching may be necessary. The bitterness of correctly blanched forest bamboo is an asset — the mild pleasant bitterness that remains after correct blanching is precisely what makes it complement the sweet frog flesh in the way that tamer bamboo cannot.',
        },
        {
            title: 'Sear the frog separately first',
            description: 'Heat 2 tablespoons of oil in a wok over maximum heat until smoking. Add the marinated frog sections in a single layer. Sear without moving for 2-3 minutes until golden. Flip and sear 1 minute. The frog should be 65-70% cooked at this stage with a caramelized exterior. Remove and set aside. This separate searing is the technique that prevents the frog from steaming in the bamboo moisture when both are cooked together.',
            tip: 'Searing the frog before the bamboo is the technique that distinguishes a properly structured ếch xào măng rừng from a version where everything is cooked together from raw. Together from raw: the bamboo moisture steams the frog gray and flat. Seared frog added to the bamboo: the caramelized exterior holds against the moisture and produces a stir-fry with distinct textures.',
        },
        {
            title: 'Stir-fry the aromatics and bamboo',
            description: 'Add remaining oil to the wok. Fry lemongrass, galangal, garlic, and shallots over high heat for 90 seconds until golden and fragrant. Add minced chili. Add the blanched bamboo shoots — stir-fry over maximum heat for 3-4 minutes. The bamboo will begin releasing moisture — this is the natural cooking liquid that gives ếch xào măng rừng its slightly saucy character. Add the water around the wok edge for additional steam.',
            tip: 'The moisture released by the bamboo during stir-frying is the cooking liquid specific to this preparation — it carries the lemongrass-galangal flavor from the oil into every piece of bamboo and will subsequently carry it into the returned frog. This natural liquid is why ếch xào măng rừng has a slightly different character from ếch xào without bamboo.',
        },
        {
            title: 'Return frog and season',
            description: 'Return the seared frog sections to the wok with the bamboo. Add fish sauce, sugar, and black pepper. Toss everything together over high heat for 3-4 minutes until the frog is completely cooked through, the sauce has reduced to coat both frog and bamboo, and the wok smells of lemongrass and galangal throughout. Add sesame oil and toss once more.',
            tip: 'The final 3-4 minutes of combined cooking produces the integration that makes ếch xào măng rừng a unified dish rather than frog alongside bamboo. The bamboo takes on the frog-fish sauce character; the frog takes on the bamboo-lemongrass character. Each element tastes of the other by the end.',
        },
        {
            title: 'Add herbs off-heat and serve',
            description: 'Remove from heat. Add rau răm, perilla, and spring onion pieces immediately — the residual heat wilts them gently without cooking them flat. The herbs should be clearly green and fragrant, not wilted and dark. Transfer to a serving plate. Scatter sliced red chili. Serve with steamed rice and lime wedges. The eating: a piece of frog and a piece of bamboo together in each bite — this combination is the dish.',
            tip: 'Eating ếch xào măng rừng requires deliberately combining the frog and bamboo in each bite — not eating them separately. The sweet frog flesh and the earthy bamboo need each other to produce the highland Phú Yên flavor equilibrium that makes this dish what it is. Each element alone is good; together they are the specific thing the highland communities have been eating for generations.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
