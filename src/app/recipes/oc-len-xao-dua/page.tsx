'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'oc-len-xao-dua',
    title: 'Ốc Len Xào Dừa (Mud Creeper Snails Stir-Fried with Coconut Milk)',
    subtitle: 'Small mud creeper snails from the mangrove waterways of Cần Giờ and Cà Mau stir-fried with lemongrass and ginger then finished with fresh coconut milk until the sauce reduces to a fragrant, slightly sweet coconut glaze that fills every shell — eaten by sucking the snail from the shell with a specific technique that coastal Vietnamese children learn before they learn to use chopsticks.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/oc-len-xao-dua.jpg',
    intro: `Ốc len xào dừa is the snail dish of Vietnam's mangrove coast — a preparation so thoroughly identified with Cần Giờ district (the mangrove forest reserve at the southern edge of Ho Chi Minh City) and with the Cà Mau peninsula (the southernmost point of Vietnam, where the land dissolves into channels and mudflats) that eating it anywhere else always feels slightly like a translation. Ốc len — Telescopium telescopium, the mud creeper or telescope snail — is a small, conical, dark-shelled snail that lives in mangrove mud, feeding on the decomposing leaf litter that falls from the trees above. The specific habitat produces the specific flavor: a marine-earthy-mineral character that is unlike open-water shellfish and unlike freshwater mollusks, specific to the brackish, organic-rich mangrove environment. The snails are small — no larger than 3-4cm — which means eating them requires the technique that defines the entire eating experience: the shell is held to the lips and the snail sucked out with a sharp intake of breath, the operculum (the hard lid the snail seals itself with) coming away separately. Children who grow up eating ốc len can do this in one smooth motion without thinking; adults who encounter it for the first time require several attempts and usually make their companions laugh. The coconut milk stir-fry is the preparation that takes the mineral mud-snail character and enriches it: the coconut milk reduces around the snails and enters each shell with the sauce, so that each suck of a snail delivers not just the snail meat but a small amount of the coconut-lemongrass sauce that has pooled inside the shell. The combination of the mud-mineral snail, the sweet-rich coconut milk, and the lemongrass-ginger fragrance is one of the most complete flavor experiences in Vietnamese street food.`,
    ingredientSections: [
        {
            title: 'Snails',
            items: [
                { amount: 1, unit: 'kg', name: 'ốc len (mud creeper snails / Telescopium telescopium)', note: 'alive — from Vietnamese or Asian specialty seafood markets. Soak in salted water for 2 hours before cooking to purge mud. If unavailable: any small marine snails of similar size (periwinkles work well).' },
                { amount: 2, unit: 'tbsp', name: 'salt', note: 'for the purging water' },
                { amount: 1, name: 'whole dried chili', note: 'added to the purging water — helps expel any remaining mud from the snails' },
            ],
        },
        {
            title: 'Stir-fry aromatics',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, finely minced — the primary aromatic' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'finely minced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced — ốc len xào dừa should have clear heat' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Coconut sauce',
            items: [
                { amount: 250, unit: 'ml', name: 'fresh coconut milk (nước cốt dừa tươi)', note: 'from a freshly grated coconut or good-quality canned. Fresh produces a noticeably more fragrant result.' },
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'cornstarch', note: 'mixed with 1 tbsp water — helps the coconut sauce cling to and enter the shells' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded — added at the end' },
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 1, name: 'bowl warm water with lime', note: 'finger bowl — ốc len is eaten with fingers' },
                { amount: 4, name: 'toothpicks', note: 'for extracting stubborn snails from the shell' },
            ],
        },
    ],
    steps: [
        {
            title: 'Purge the snails — 2 hours minimum',
            description: 'Place the live ốc len in a large bowl of heavily salted water with a whole dried chili. The salt and chili encourage the snails to expel the mud and organic matter from their digestive systems. Leave for 2 hours, changing the water once if it becomes very murky. After 2 hours, drain and scrub the shells under cold running water with a brush — remove any visible mud from the shell surfaces and the aperture. The snails should smell clean and marine, not muddy.',
            tip: 'The 2-hour purging for mud creeper snails is longer than for sea snails because they live in organic-rich mangrove mud that contains more sediment than open-water habitats. Insufficiently purged ốc len taste muddy and gritty — the most common complaint about the dish. The purging is the preparation that makes the difference between good and excellent ốc len.',
        },
        {
            title: 'Blanch briefly to partially cook',
            description: 'Bring a large pot of water to a vigorous boil. Add the purged snails and blanch for 3 minutes. Drain. The snails should have retracted slightly into their shells but still be alive. This partial cooking makes the final stir-fry faster and produces a snail that is correctly cooked through without being rubbery from too long in the wok.',
            tip: 'The blanching partially cooks the snails and kills them humanely before the stir-fry. Putting live raw snails directly into a hot wok causes them to seal themselves with their opercula from the shock of sudden heat, which prevents the sauce from entering the shell. Blanched snails are relaxed and the shells partially open, allowing the coconut sauce to penetrate.',
        },
        {
            title: 'Build the aromatic base',
            description: 'Heat oil in a wok over high heat until smoking. Add lemongrass paste, garlic, shallots, and ginger. Fry for 2 minutes until golden and intensely fragrant — the wok should smell explosively of lemongrass. Add minced chili and fry 30 seconds. The aromatic base for ốc len xào dừa is more substantial than for most wok preparations because the coconut milk added in the next step will dilute it significantly.',
            tip: 'The lemongrass for ốc len must be thoroughly cooked through in the oil before the snails and coconut milk go in. Raw lemongrass in coconut milk tastes harsh. Fully cooked lemongrass in coconut milk produces the specific mellowed-but-fragrant note that makes this dish what it is.',
        },
        {
            title: 'Add snails and stir-fry',
            description: 'Add the blanched snails to the wok. Toss vigorously for 2 minutes until every shell is coated in the aromatic oil and the snails are fully heated through. Add the fish sauce and sugar — toss 30 seconds. The snails should be sizzling and fragrant at this stage, each shell glistening with the lemongrass-garlic oil.',
            tip: 'Vigorous tossing of the snails in the aromatic oil before the coconut milk goes in is the technique that coats the exterior of each shell with the flavors that the coconut milk will then carry into the shells. The oil coating is the vehicle; the coconut milk is the delivery system.',
        },
        {
            title: 'Add coconut milk and reduce',
            description: 'Pour the fresh coconut milk over the snails. The wok will steam aggressively. Stir to combine with the aromatics. Add the cornstarch slurry. Toss continuously for 3-4 minutes over high heat until the coconut milk has reduced by half and thickened to a light sauce that coats the shells and — crucially — pools inside the open shell apertures. The sauce should be creamy-white, visibly thick, and clinging to every surface.',
            tip: 'The cornstarch in the coconut sauce is the technique that keeps the sauce inside the shells — without it the coconut milk is too thin and runs out of the shells when the snail is sucked. A slightly thickened coconut sauce pools inside the shell and is delivered with the snail meat when it is sucked out. This internal sauce delivery is the most pleasurable element of ốc len xào dừa.',
        },
        {
            title: 'Finish and serve with the sucking technique',
            description: 'Add shredded kaffir lime leaves, spring onion, sesame oil, and black pepper in the final 30 seconds. Toss once and remove from heat. Transfer to a serving plate. Serve with rau răm, lime wedges, finger bowls, and toothpicks. The sucking technique: hold the shell opening to the lips, use a quick, sharp intake of breath to suck the snail and the pooled coconut sauce out together. The snail comes out cleanly if correctly cooked. Eat with a leaf of rau răm. If the snail does not come with sucking, use a toothpick to loosen it.',
            tip: 'The sucking technique is learned in seconds by watching someone who knows how — and is almost impossible to learn from written description alone. If eating with a Vietnamese person, watch them first. The angle of the shell to the lips, the direction of the suction, and the speed of the intake all matter. The correct result: the snail and its pooled coconut sauce arrive in the mouth simultaneously in one clean movement.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
