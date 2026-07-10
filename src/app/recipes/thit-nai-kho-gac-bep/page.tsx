'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'thit-nai-kho-gac-bep',
    title: `Đắk Lắk Smoke-Dried Venison`,
    subtitle: `Thịt Nai Khô Gác Bếp — Wild deer meat cured in mắc khén and lemongrass, slow-dried above the woodfire hearth for weeks until deeply smoky and firm.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '336 hrs',
    rating: 4.9,
    baseServings: 8,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Thịt nai khô gác bếp is the Central Highlands' most ancient preserved meat — venison from wild deer (nai, Cervus unicolor — the sambar deer) or wild boar, rubbed with mắc khén berries, salt, lemongrass, and galangal, then suspended on bamboo racks above the woodfire hearth (bếp củi) of the Ê Đê or M'Nông longhouse and left to slowly dry and smoke-cure over weeks in the constant warm, smoky air that circulates above the cooking fire.\n\nThe gác bếp (above the stove) method is one of the oldest food preservation techniques in Southeast Asia — using the hearth's continuous warmth (40-60°C) and the chemical compounds in wood smoke (phenols, carbonyls, organic acids) to simultaneously dry, acidify the surface, and antimicrobially protect the meat over an extended period. The result is a product that is simultaneously jerky, charcuterie, and something with no Western equivalent: firm but not brittle, deeply smoky but not overpowering, with the mắc khén's numbing citrus present throughout every bite and the lemongrass fragrance locked into the dried fibres of the meat.\n\nIn Đắk Lắk, thịt nai gác bếp is the preserved food that highland families bring when they travel — it keeps without refrigeration for months and provides complete protein in a dense, portable form. It appears at every market in Buôn Ma Thuột and is the snack food that accompanies rượu cần at evening ceremonies. Outside the Central Highlands it is almost unknown. Outside Vietnam it is entirely undocumented.`,
    ingredientSections: [
        {
            title: `Meat`,
            items: [
                { amount: 1, unit: 'kg', name: `venison leg or shoulder (thit nai)`, note: `trimmed of all fat and sinew — fat turns rancid during long drying; substitute: beef topside, lean pork leg, or wild boar if available` },
            ],
        },
        {
            title: `Dry cure and spice rub`,
            items: [
                { amount: 2, unit: 'tbsp', name: `coarse salt (muoi hat)`, note: `non-iodised` },
                { amount: 1.5, unit: 'tbsp', name: `mac khen berries, toasted and crushed`, note: `the defining spice; substitute: 1 tbsp Sichuan pepper` },
                { amount: 3, name: `lemongrass stalks, inner white only, minced to paste` },
                { amount: 25, unit: 'g', name: `fresh galangal, minced fine` },
                { amount: 4, name: `garlic cloves, minced to paste` },
                { amount: 1, unit: 'tsp', name: `ground turmeric` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 1, unit: 'tbsp', name: `fish sauce (nuoc mam)`, note: `adds umami and accelerates surface drying` },
            ],
        },
        {
            title: `For the smoke-drying setup`,
            items: [
                { amount: 1, name: `bamboo rack or wire rack`, note: `suspended 50-80cm above the heat source` },
                { amount: 1, name: `wood chips for smoking (hickory, oak, or coffee wood)`, note: `coffee wood from pruned Robusta trees is the Đắk Lắk traditional fuel` },
                { amount: 1, name: `kitchen twine`, note: `for hanging meat strips` },
            ],
        },
        {
            title: `Dipping sauce (nuoc cham mac khen)`,
            items: [
                { amount: 1, unit: 'tbsp', name: `mac khen berries, toasted and crushed` },
                { amount: 2, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 2, name: `bird's eye chili, minced` },
                { amount: 1, name: `garlic clove, minced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 1, name: `bunch rau ram` },
                { amount: 2, name: `limes, wedged` },
                { amount: 4, name: `portions sticky rice or com lam` },
            ],
        },
    ],
    steps: [
        {
            title: `Trim and slice the venison`,
            description: `Remove every trace of fat, silver skin, and connective tissue from the venison — fat is the enemy of gác bếp preservation. Fat does not dry; it oxidises and turns rancid during the weeks of smoking, contaminating the lean meat around it. With a sharp boning knife, follow the muscle grain and remove fat in clean strokes. Slice the trimmed meat along the grain into strips 1.5-2cm thick and 15-20cm long — cutting along the grain produces strips that dry evenly and, when eaten, pull apart in long fibres rather than crumbling. Against-the-grain cuts produce shorter, more tender pieces but dry unevenly and break rather than pull.`,
            tip: `Sambar deer (nai) has exceptionally lean, dark red meat with a strong gamey note that the mắc khén and lemongrass marinade is specifically calibrated to balance. For the substitute meats available in Germany: beef topside (Oberschale) is the closest in leanness and fibre structure. Wild boar (Wildschwein) from German hunters is the most culturally appropriate substitute and is available at German game butchers (Wildfleisch) in autumn. Pork leg (Schweinekeule) works but is fattier and requires more careful trimming.`,
        },
        {
            title: `Apply the cure and spice rub`,
            description: `Combine coarse salt, crushed mắc khén, lemongrass paste, minced galangal, garlic paste, turmeric, sugar, black pepper, and fish sauce in a bowl. Mix thoroughly to a fragrant paste. Rub onto every surface of each meat strip — press the paste firmly into the grain of the meat so it penetrates beyond the surface. Arrange rubbed strips in a single layer in a non-reactive container (glass or ceramic). Cover and refrigerate for 24 hours. The salt draws moisture from the meat by osmosis; the fish sauce accelerates surface drying in the early smoke stage; the mắc khén compounds penetrate the meat fibres during the cure.`,
            tip: `The 24-hour refrigerator cure before smoking is a home adaptation of the traditional method — in Ê Đê longhouses, the meat is rubbed and hung directly above the hearth without a cold cure, relying on the continuous smoke and heat to achieve both curing and drying simultaneously. The cold cure produces a more deeply seasoned product because the salt has time to penetrate the full thickness of the strip before the heat sets the surface.`,
        },
        {
            title: `Set up the smoking environment`,
            description: `The traditional gác bếp environment — a woodfire hearth with meat suspended 50-80cm above it, operating 24 hours a day at 40-60°C — is approximated at home by a cold smoker, a charcoal smoker with a thermometer, or an oven at its lowest setting (50-60°C) with wood chips on a foil tray. The target temperature is 50-60°C — warm enough to dry and smoke but not hot enough to cook the meat. Above 70°C the proteins set before sufficient moisture has been removed and the product is smoked cooked meat rather than dried preserved meat. Check with a thermometer at the rack level before hanging.`,
            tip: `Coffee wood chips are the Đắk Lắk signature smoking fuel — pruned Robusta coffee branches produce a smoke with phenolic compounds different from oak or hickory, giving the dried meat a faint mocha-resinous note. At German hardware stores (OBI, Bauhaus), coffee wood chips are not available but can be ordered from specialty BBQ suppliers online. Oak chips (Eichenholz-Chips) are the closest available German substitute for flavour depth. Avoid fruitwood chips (apple, cherry) which produce too sweet a smoke for this preparation.`,
        },
        {
            title: `Smoke-dry — 72 to 168 hours`,
            description: `Remove cured strips from the refrigerator and pat completely dry with paper towels — surface moisture prevents smoke from adhering properly in the first hours. Hang strips on the rack above the heat source, ensuring they do not touch each other. Maintain temperature at 50-60°C and continuous smoke for the first 24 hours. After 24 hours, the surface will be dry and deeply coloured. Continue drying with intermittent smoke (add wood chips every 2-3 hours) for 48-168 total hours depending on desired dryness. At 72 hours: firm exterior, slightly yielding interior — closest to fresh gác bếp. At 168 hours (7 days): fully dried, shelf-stable at room temperature.`,
            tip: `The gác bếp drying timeline in traditional Ê Đê longhouses is months rather than days — the hearth fire is never extinguished, and meat added to the rack above it dries continuously over 2-4 weeks until it reaches the rock-hard, fully shelf-stable state that can be stored for 6 months without refrigeration. The 72-168 hour home version produces a semi-dried product that keeps refrigerated for 3-4 weeks or frozen for 3 months. For full shelf stability without refrigeration, extend the drying to 10-14 days at 50°C.`,
        },
        {
            title: `Check doneness and cool`,
            description: `Test dryness by pressing the thickest strip firmly between two fingers. At the semi-dried stage: the exterior is firm and the interior yields slightly but does not feel raw or wet. At the fully dried stage: the strip resists pressure throughout and bends without breaking (flexibility indicates proper drying rather than over-drying which would cause brittleness). Remove from heat and hang at room temperature for 2 hours to cool and equilibrate moisture throughout the strip. The colour should be deep mahogany-brown, the surface slightly shiny from the smoke resin.`,
        },
        {
            title: `Serve and eat`,
            description: `Tear or slice the dried venison into small pieces across the grain — the fibres should pull apart with some resistance, revealing the dark smoky interior. Arrange on a plate with rau răm, lime wedges, and the mắc khén dipping sauce. In Đắk Lắk, thịt nai gác bếp is eaten by tearing small pieces and dipping in the numbing mắc khén sauce before eating with sticky rice or cơm lam. The chewy, smoky venison, the tingling mắc khén sauce, and the sticky rice form the classic Ê Đê flavour triangle. Leftovers keep wrapped at room temperature (if fully dried) or refrigerated (if semi-dried). Re-warming briefly over a flame or in a dry pan at medium heat restores the mắc khén aroma.`,
            tip: `Thịt nai gác bếp is the preserved meat that improves with age in the same way that aged charcuterie does — the mắc khén volatile compounds continue to redistribute through the dried fibres for days after smoking is complete, and a piece eaten 3 days after smoking is measurably more integrated in flavour than one eaten immediately. The Ê Đê tradition of hanging the finished dried meat above the hearth for weeks before eating (after it is already dried) is a flavour-maturation practice, not just storage.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}