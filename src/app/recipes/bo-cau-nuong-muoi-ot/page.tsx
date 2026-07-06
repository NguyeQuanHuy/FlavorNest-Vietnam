'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-cau-nuong-muoi-ot',
    title: 'Bồ Câu Nướng Muối Ớt (Charcoal-Grilled Pigeon with Chili Salt)',
    subtitle: 'Pigeon marinated in lemongrass, chili, and fish sauce then grilled over hardwood charcoal for 25-30 minutes until the skin renders and chars — the rich, dark pigeon flesh taking the charcoal smoke differently from chicken or duck, producing a smokiness that is more concentrated and more specific to this bird.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '3 hr + 30 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/bo-cau-nuong-muoi-ot.jpg',
    intro: `Bồ câu nướng muối ớt is the charcoal-grilled pigeon of central and southern Vietnamese cooking — a preparation that applies the direct fire philosophy to the richest and darkest-fleshed of the commonly eaten Vietnamese birds, with results that are specifically different from grilled chicken or quail. Pigeon's high myoglobin content — the iron-rich protein responsible for its deep purple-brown raw color — produces a flesh that responds to charcoal heat in a specific way: the exterior caramelizes and chars more dramatically than chicken, the fat renders more slowly and more completely, and the smoke from the dripping fat produces a perfuming effect that is more concentrated than with leaner birds. The muối ớt marinade — lemongrass, chili, garlic, fish sauce, and the classic Vietnamese chili-salt paste — is the preparation that provides the aromatic complexity that grilled pigeon's own character supports rather than requiring. The pigeon's specific mineral depth and its fat richness carry the lemongrass-chili character in a more integrated way than chicken would — the aromatics do not sit on the surface but become part of the flesh character during the 3-hour marination and the subsequent charcoal cooking. The grilling time for pigeon — 25-30 minutes over moderate charcoal — is significantly longer than for quail and proportionally longer than for chicken of similar weight, reflecting the specific density of pigeon muscle fiber and the need for the fat to render completely before the skin can crisp. A pigeon pulled from the grill before the fat has fully rendered has soft, slightly greasy skin and a slightly raw taste at the thigh joint; a pigeon grilled the full time has rendered, crackling skin and a specific depth of flavor that the shorter cooking cannot produce. Muối tiêu chanh is the dipping condiment — coarse salt, black pepper, and fresh lime — that most clearly serves the charcoal pigeon because it provides the mineral brightness that the dark, fatty flesh needs without competing with the specific character of the bird.`,
    ingredientSections: [
        {
            title: 'Pigeon',
            items: [
                { amount: 2, name: 'whole pigeons, 400-500g each', note: 'cleaned — spatchcocked (backbone removed, pressed flat) for more even charcoal cooking. Or left whole and turned frequently.' },
            ],
        },
        {
            title: 'Muối ớt marinade',
            items: [
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, minced' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'minced' },
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Muối tiêu chanh',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1.5, unit: 'tsp', name: 'black pepper', note: 'coarsely ground' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 3, name: 'limes', note: 'cut in wedges — squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch Vietnamese balm (rau kinh giới)', note: 'essential alongside grilled pigeon' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 2, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 2, name: 'extra limes' },
            ],
        },
    ],
    steps: [
        {
            title: 'Spatchcock and marinate — 3 hours minimum',
            description: 'Spatchcock each pigeon: place breast-side down, cut along both sides of the backbone with kitchen scissors, remove the backbone. Flip and press firmly on the breastbone to flatten completely. The spatchcocked pigeon grills more evenly than a whole bird — every surface is at equal distance from the heat. Combine all marinade ingredients and rub firmly over every surface of the flattened pigeon, under the skin of the breast, and inside the leg joints. Marinate 3 hours at room temperature or overnight refrigerated.',
            tip: 'Spatchcocking pigeon for charcoal grilling is the technique that solves the uneven cooking problem specific to whole grilled pigeon — the breast cooks faster than the thigh, and a whole round pigeon has surfaces at different distances from the charcoal. Flattened, every surface is equidistant. The backbone removed from each pigeon can be saved and used to enrich a stock or braise.',
        },
        {
            title: 'Build a two-zone charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over. Create a two-zone fire: a thick coal bed on one side for direct heat, a thinner zone on the other for indirect cooking. Pigeon fat renders aggressively and produces sustained flare-ups — the indirect zone allows you to move the birds when flares become too aggressive. The ideal temperature: hold your hand 15cm above the direct zone for 3-4 seconds before the heat is too intense.',
            tip: 'The two-zone fire for bồ câu nướng is essential — not a suggestion. Pigeon fat at a high rendering rate produces flare-ups that can char the exterior completely in seconds while the interior remains undercooked. The indirect zone is the management tool that allows the long, slow rendering the dish requires.',
        },
        {
            title: 'Grill skin-side down first — 12-15 minutes',
            description: 'Place the spatchcocked pigeons skin-side down over the moderate direct heat. Grill for 12-15 minutes without moving — the skin needs sustained contact with the heat to begin rendering the fat and developing the charred surface. The fat will drip onto the coals producing flare-ups — move to the indirect zone briefly when flare-ups become aggressive, return to direct heat when they subside. At 12-15 minutes the skin should be deeply charred in patches and golden between.',
            tip: 'The long initial skin-side down phase without moving is the technique that produces the char pattern specific to charcoal pigeon — some areas deeply charred, some golden, all rendered. This uneven char is not a mistake; it is the visual and flavor signature of correctly grilled pigeon over hardwood charcoal.',
        },
        {
            title: 'Flip and finish — 12-15 minutes',
            description: 'Flip the pigeon flesh-side down. Grill for 12-15 minutes on the flesh side, moving between zones as needed. The pigeon is done when: the thigh joint shows clear juices when pierced; the breastbone feels rigid when pressed; and the overall skin is a combination of deep char and golden-rendered fat. Total time: 25-30 minutes. Rest on a rack for 5 minutes.',
            tip: 'The clear juices at the thigh joint test for pigeon is more reliable than the clear juices test for chicken because pigeon flesh is so dark that the meat color never changes to the pale white of cooked chicken. Always test at the thigh joint — the last part of the spatchcocked pigeon to cook through — rather than the breast.',
        },
        {
            title: 'Chop and serve with Vietnamese balm',
            description: 'Chop the grilled pigeon through the bone into serving pieces with a heavy cleaver. The Vietnamese balm (rau kinh giới) alongside charcoal pigeon is the herb pairing that most specifically complements the dark, smoky, slightly mineral character of the bird — its menthol-lemon note is more compatible with pigeon than the milder rau răm or mint. Arrange the chopped pieces on a plate. Serve with muối tiêu chanh, all the herbs, cucumber, lime, and rice.',
            tip: 'Vietnamese balm as the primary herb for grilled pigeon is the specific knowledge that separates Vietnamese cooks who grew up eating bồ câu nướng from those who did not. Every grilled bird in the Vietnamese repertoire has a specific herb pairing: quail with rau răm, chicken with rau răm and mint, duck with perilla, pigeon with rau kinh giới. The herb pairing is not interchangeable.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
