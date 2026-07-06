'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-xao-mang-tuoi',
    title: 'Gà Xào Mang Tuoi (Chicken Stir-Fry with Fresh Bamboo Shoots)',
    subtitle: 'Free-range chicken stir-fried with fresh bamboo shoots harvested in the rainy season — the shoots tender-crunchy and slightly bitter, the chicken caramelized in fish sauce and lemongrass, the whole dish finished with a generous amount of fresh herbs. The mountain dish of Phú Yên\'s inland communities.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/ga-xao-mang-tuoi.jpg',
    intro: `Gà xào mang tuoi is the dish of Phú Yên's inland — the mountainous western half of the province where Son Hòa, Sông Hinh, and Son Tây districts border the Central Highlands, and where bamboo grows in dense stands along every hillside stream. Fresh bamboo shoots (mang tuoi) appear in the markets of these districts from the beginning of the rainy season in May through August, harvested at dawn when the tips are still tightly closed and the flesh is at its most tender and juicy. The shoots have a flavor that is simultaneously earthy and slightly bitter, with a moisture content that releases into the wok during stir-frying and creates a natural braising liquid that no added stock can replicate. Paired with free-range mountain chicken — gà th? vu?n, leaner and more intensely flavored than commercial chicken from the coast — the bamboo's bitterness and the chicken's richness reach an equilibrium that makes each ingredient taste more completely itself. The lemongrass in the stir-fry carries the aromatic thread that connects both. The fish sauce caramelization provides depth. The fresh herbs — specifically rau ram and the wild herb variants available in the highland markets — provide the bright finish that lifts the earthy bamboo. Gà xào mang tuoi is practical highland cooking: a dish made from what grows on the hillside and what runs in the yard, cooked in a wok over wood fire in the way mountain communities have cooked for generations, without the refinements of the coast.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 700, unit: 'g', name: 'chicken pieces, bone-in (thighs and drumsticks)', note: 'free-range preferred — leaner, firmer, more flavor. Chopped through the bone into 4cm pieces.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for marinating' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 2, name: 'garlic cloves', note: 'minced — for the marinade' },
            ],
        },
        {
            title: 'Fresh bamboo shoots',
            items: [
                { amount: 400, unit: 'g', name: 'fresh bamboo shoots (mang tuoi)', note: 'peeled to the tender white inner layers, sliced 5mm thick. Must be blanched before stir-frying — see step 2. Substitute: canned bamboo shoots (drained and rinsed) — the flavor is significantly milder but the technique is the same.' },
            ],
        },
        {
            title: 'Stir-fry aromatics and sauce',
            items: [
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, finely minced' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'thinly sliced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced — one minced for the wok, one sliced for garnish' },
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
                { amount: 3, unit: 'tbsp', name: 'water', note: 'added mid-wok to create steam for the bamboo' },
            ],
        },
        {
            title: 'Fresh herbs — generous amount',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)', note: 'leaves only — essential, used in quantity' },
                { amount: 1, name: 'bunch perilla (tía tô)', note: 'or Vietnamese mint — adds another herb dimension' },
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces' },
                { amount: 1, name: 'small bunch cilantro' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'fresh red chili, extra sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the chicken',
            description: 'Combine chicken pieces with fish sauce, sugar, turmeric, black pepper, and minced garlic. Mix thoroughly and marinate for 20 minutes at room temperature. The turmeric gives the characteristic golden color to the finished dish and prevents the chicken from sticking to the wok during the initial sear.',
            tip: 'Bone-in pieces cut into 4cm sections cook more evenly in a stir-fry than larger pieces — the smaller size means the center reaches temperature before the outside overcooks. Ask the butcher to chop through the bone, or use a heavy cleaver at home.',
        },
        {
            title: 'Prepare and blanch the fresh bamboo',
            description: 'Peel the fresh bamboo shoots down to the tender, pale inner layers — discard the tough outer sheaths until the flesh feels smooth and slightly moist. Slice into pieces 5mm thick. Place in a large pot of cold water, bring to a full boil, and blanch for 15-20 minutes. Drain and rinse under cold water. Taste a piece — it should be tender-crunchy with a mild pleasant bitterness. If strongly bitter, blanch again for 10 more minutes in fresh water. Fresh bamboo must always be blanched before eating to remove the natural cyanogenic glycosides.',
            tip: 'The blanching of fresh bamboo is not optional — it is a food safety step that removes the bitter and mildly toxic compounds present in all raw bamboo shoots. Multiple blanching also mellows the bitterness to the pleasant level that makes bamboo delicious rather than unpleasant. Never skip this step with fresh bamboo.',
        },
        {
            title: 'Sear the chicken first',
            description: 'Heat a wok over high heat until smoking. Add 2 tablespoons of oil. Add the marinated chicken pieces in a single layer — do not crowd. Sear without moving for 3-4 minutes until the underside is golden. Flip and sear another 2-3 minutes. The chicken should be 70% cooked at this stage — golden on the outside with some pink at the center. Remove and set aside. The golden seared surface adds depth to the final stir-fry.',
            tip: 'Searing the chicken separately before the bamboo is what prevents the chicken from steaming in the moisture released by the bamboo shoots. Chicken and bamboo cooked together from raw produce a wet, pale result. Seared chicken added to the bamboo stir-fry produces the caramelized result the dish requires.',
        },
        {
            title: 'Stir-fry the aromatics and bamboo',
            description: 'In the same wok, add remaining oil. Fry minced lemongrass, garlic, and shallots over medium-high heat for 2 minutes until golden and fragrant. Add minced chili and fry 30 seconds. Add the blanched bamboo shoots. Increase to maximum heat. Stir-fry for 3-4 minutes until the bamboo absorbs the aromatic oil and develops slight color at the edges. Add water around the wok edge — it creates a burst of steam that finishes the bamboo through.',
            tip: 'The bamboo needs high heat and movement to develop its best texture — constant stirring keeps it moving against the hot wok surface and produces the slight caramelization at the edges that makes fresh bamboo in a stir-fry taste better than bamboo in a braise.',
        },
        {
            title: 'Return chicken and season',
            description: 'Return the seared chicken to the wok with the bamboo. Add fish sauce, sugar, and black pepper. Toss everything together over high heat for 3-4 minutes until the chicken is completely cooked through, the sauce has reduced and coats both chicken and bamboo, and the wok is nearly dry. Taste and adjust seasoning.',
            tip: 'The wok should be nearly dry when the dish is done — not wet and saucy. The fish sauce caramelizes onto the surfaces of both the chicken and bamboo during these final minutes of high-heat cooking. Remaining liquid means cook longer or increase heat.',
        },
        {
            title: 'Add herbs and serve',
            description: 'Remove from heat. Add the spring onion pieces, rau ram leaves, and perilla. Toss briefly — the residual heat wilts the herbs slightly while preserving their freshness. Transfer to a serving plate. Scatter cilantro and sliced chili. Serve immediately with steamed rice and lime wedges. The herbs in gà xào mang tuoi are structural — they should be present throughout the dish in quantity, not decoratively scattered on top.',
            tip: 'The herbs are added off-heat to preserve both their color and their aromatic oils. Herbs stir-fried in the wok at high heat lose their brightness within 30 seconds. Off-heat addition preserves the green color and the volatile compounds that make rau ram taste of itself.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
