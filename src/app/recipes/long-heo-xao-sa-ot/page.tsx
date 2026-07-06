'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'long-heo-xao-sa-ot',
    title: 'Lòng Heo Xào S? ?t (Pork Offal Stir-Fried with Lemongrass and Chili)',
    subtitle: 'Pork intestine, liver, heart, and crispy caul fat stir-fried at maximum heat with finely minced lemongrass, fresh chili, and garlic — each organ cleaned, blanched, and cooked to its own ideal texture before the final wok toss. The Phú Yên nh?u dish that tests the cook and rewards the brave.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '1 hr 30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/long-heo-xao-sa-ot.jpg',
    intro: `Lòng heo xào s? ?t is the offal stir-fry of Phú Yên — a dish that appears at every serious nh?u table in the province and that separates, very clearly, the cooks who understand offal from those who do not. Lòng in Vietnamese refers collectively to the internal organs of an animal: intestine (ru?t), liver (gan), heart (tim), and stomach (d? dày), sometimes with the addition of m? chài — the lacy caul fat that surrounds the stomach, which when deep-fried becomes one of the most crackling and delicate fats in cooking. Each organ requires different preparation: the intestine must be cleaned meticulously and blanched until the smell completely neutralizes; the liver must be soaked in milk to remove blood and bitterness, then cooked no longer than 90 seconds in the final wok or it becomes grainy and dry; the heart is the most forgiving, needing only trimming and medium heat; the caul fat must be fried separately until completely crisp before being added at the last possible moment to preserve its crunch. The lemongrass in this dish is not restrained — four stalks, minced to a paste, fried until golden before the offal goes in, so that every piece carries the aromatic intensity of the lemongrass throughout. The chili heat is significant. This is a dish that demands respect for the ingredients at each stage of preparation, and returns that respect with an intensity of flavor — the specific mineral-sweet-savory character of properly prepared pork offal combined with the heat of the lemongrass — that no other ingredient combination produces.`,
    ingredientSections: [
        {
            title: 'Offal',
            items: [
                { amount: 200, unit: 'g', name: 'pork small intestine (ru?t heo non)', note: 'cleaned and blanched — buy pre-cleaned from Vietnamese butcher if available' },
                { amount: 200, unit: 'g', name: 'pork liver (gan heo)', note: 'trimmed of connective tissue, soaked in milk 20 minutes, sliced 5mm thin' },
                { amount: 150, unit: 'g', name: 'pork heart (tim heo)', note: 'trimmed of fat and blood vessels, halved lengthwise, sliced 5mm' },
                { amount: 150, unit: 'g', name: 'pork stomach (d? dày heo)', note: 'cleaned and blanched until no smell remains, sliced into 3cm pieces — optional' },
                { amount: 100, unit: 'g', name: 'caul fat (m? chài)', note: 'the lacy fat membrane — fried separately until crackling, added at the very end' },
            ],
        },
        {
            title: 'Cleaning and blanching',
            items: [
                { amount: 2, unit: 'tbsp', name: 'salt', note: 'for scrubbing the intestine and stomach' },
                { amount: 2, unit: 'tbsp', name: 'rice vinegar', note: 'for cleaning the intestine' },
                { amount: 200, unit: 'ml', name: 'full-fat milk', note: 'for soaking the liver — draws out blood and bitterness' },
                { amount: 3, name: 'lemongrass stalks', note: 'bruised — for the blanching liquid' },
                { amount: 20, unit: 'g', name: 'ginger', note: 'smashed — for the blanching liquid' },
            ],
        },
        {
            title: 'Stir-fry',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, very finely minced to a paste — 4 stalks is the Phú Yên quantity, more than seems reasonable' },
                { amount: 6, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 4, name: 'bird\'s eye chilies', note: 'minced — this dish is intentionally spicy' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced — added at the end for color and texture' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the characteristic golden color' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch Vietnamese coriander (rau ram)' },
                { amount: 1, name: 'fresh red chili, extra sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean the intestine and stomach meticulously',
            description: 'Turn the intestine inside out. Rub vigorously with coarse salt and rice vinegar — scrub for 3 minutes. Rinse under cold running water. Repeat twice more until there is no detectable smell. Turn right-side out. Blanch in boiling water with lemongrass, ginger, and a pinch of salt for 10-12 minutes. Drain and rinse. Taste a small piece — there should be no off-smell or flavor. If any remains, blanch again for 5 more minutes. Cut into 3cm lengths. The same cleaning process applies to the stomach.',
            tip: 'The smell test is the definitive indicator of sufficient cleaning. A properly cleaned and blanched intestine smells of nothing — no pork, no barnyard, nothing. Any remaining smell means more cleaning is needed. This is the step that makes offal cooking either successful or unpleasant. There are no shortcuts.',
        },
        {
            title: 'Soak the liver in milk',
            description: 'Trim the liver of all connective tissue and any green bile-stained areas — these are bitter and cannot be salvaged. Slice 5mm thin. Submerge completely in full-fat milk for 20 minutes. The milk draws blood from the tissue and removes the compounds responsible for bitterness. Drain and rinse briefly under cold water. Pat completely dry. The liver should smell clean and mild.',
            tip: 'Liver soaked in milk and liver not soaked in milk are noticeably different in the final dish. The milk soak is 20 minutes, not 5. The bitterness compounds need time to be drawn out. This step is what makes liver something people enjoy rather than tolerate.',
        },
        {
            title: 'Prepare the heart and fry the caul fat',
            description: 'Trim the heart of external fat and visible blood vessels. Halve lengthwise and rinse out any blood. Slice 5mm thin. For the caul fat: heat oil in a pan over medium-high heat. Fry the caul fat in pieces until completely golden and crackling — 3-4 minutes. Remove and drain on paper towels. It will be fragile and delicate. Set aside — it goes in only at the very last moment before serving.',
            tip: 'The caul fat fries very fast and goes from golden to burnt in about 30 seconds past perfect. Watch it constantly. The finished caul fat should look like golden lace — crisp throughout with no soft spots.',
        },
        {
            title: 'Season all offal separately',
            description: 'Divide the marinade (fish sauce, sugar, turmeric, pepper) among the prepared offal pieces in separate small bowls — each organ marinates briefly in its own portion. The separate marinating is not precious: intestine has a different surface texture than liver and absorbs seasoning differently. 10 minutes per organ is sufficient.',
            tip: 'Keeping the organs separate until the wok is important because they are added to the wok at different times and cook for different durations. Pre-mixing them makes the staged addition impossible.',
        },
        {
            title: 'Stir-fry in stages — the critical sequence',
            description: 'Heat wok to maximum. Add oil. Fry lemongrass paste, garlic, shallots, and minced chili for 90 seconds until deep golden and the wok smells powerfully of lemongrass. Add stomach and intestine first — these need the most heat. Stir-fry 3-4 minutes. Add heart — 2 minutes. Add liver last — exactly 90 seconds, tossing constantly. Add fish sauce and sugar. Toss everything 30 seconds. Remove from heat. Add sliced red chili and spring onion.',
            tip: 'The liver stage is 90 seconds maximum — no more. Liver that is overcooked becomes grainy and dry and loses all its richness. When the outside of the liver slices changes color from pink to grey-brown throughout, the liver is done. Pull immediately.',
        },
        {
            title: 'Add caul fat and plate',
            description: 'Transfer the stir-fried offal to a serving plate. Immediately scatter the fried caul fat over the top — it goes on at the last possible moment to preserve its crunch. Add rau ram and extra chili. Serve immediately with steamed rice, lime wedges, and cold beer. The complete eating experience: the chewy intestine, the silky tender liver, the firm heart, the crackling caul fat — all perfumed with the Phú Yên lemongrass — is the textural complexity that makes lòng heo the most demanding and most rewarding Vietnamese offal dish.',
            tip: 'The caul fat on top is the final signature of this dish. It wilts within 5 minutes from the steam of the offal beneath it. Serve immediately and tell diners to eat the caul fat first, while it is still crackling.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
