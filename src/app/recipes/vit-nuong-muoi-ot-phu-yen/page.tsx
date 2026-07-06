'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'vit-nuong-muoi-ot-phu-yen',
    title: 'V?t Nu?ng Mu?i ?t Phú Yên (Phú Yên Duck Grilled with Chili Salt)',
    subtitle: 'Duck Marylands coated in a four-stalk lemongrass and chili-salt paste then grilled over charcoal until the skin renders crispy and the paste caramelizes to a fragrant, slightly charred crust — served with mu?i lá é and the sesame crackers of Tuy An. The Phú Yên treatment of duck that uses the same aromatic logic as its seafood.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/vit-nuong-muoi-ot-phu-yen.jpg',
    intro: `V?t nu?ng mu?i ?t Phú Yên is the charcoal-grilled duck of the province — a preparation that takes the mu?i ?t technique used throughout Phú Yên seafood cooking (the four-stalk lemongrass paste, the specific chili-salt proportions, the charcoal approach) and applies it to duck, producing a result that is simultaneously familiar in method and specific in character. Duck is a more challenging bird to grill than chicken or quail because of its high fat content: the fat must render slowly over moderate heat before the skin can crisp, and if the heat is too high the fat catches fire before it has fully rendered, producing charred exterior and undercooked interior. The Phú Yên approach to this challenge is the same as the province's approach to its most demanding seafood preparations — patience with the fire, a specific aromatic paste that caramelizes gradually rather than burning, and a condiment that does the aromatic work the cooking deliberately avoids. The mu?i ?t paste for Phú Yên duck uses the four-stalk lemongrass proportion that appears throughout the province's cooking, with enough chili for genuine heat and enough salt to begin rendering the fat from within during the marination period. The overnight marination is not optional: duck fat needs more time to absorb aromatics than the lean muscle of chicken or quail, and the lemongrass paste pressed into the scored skin begins softening the fat layer and driving the aromatics toward the meat. After grilling, the condiment is mu?i lá é — the litsea leaf salt that has now appeared alongside almost every significant Phú Yên meat and seafood preparation in this series. Its seventh appearance here is not repetition but confirmation: mu?i lá é is the province's signature, and it appears with duck because it works with duck, as it works with every other protein the province produces.`,
    ingredientSections: [
        {
            title: 'Duck',
            items: [
                { amount: 4, name: 'duck Marylands (thigh and leg portions)', note: 'bone-in, skin-on. Marylands are the ideal cut for charcoal grilling — enough fat to self-baste through the long grilling time, bone to protect the meat from drying.' },
                { amount: 1, unit: 'tsp', name: 'coarse salt', note: 'rubbed over the scored skin 30 minutes before the paste — pre-seasons and begins drawing surface moisture' },
            ],
        },
        {
            title: 'Phú Yên mu?i ?t paste',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, minced to paste — the four-stalk Phú Yên proportion' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'minced' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tbsp', name: 'm?m nhi', note: 'Phú Yên first-press fish sauce — adds umami depth to the paste' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Mu?i lá é — seventh appearance in the Phú Yên series',
            items: [
                { amount: 25, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'bird\'s eye chilies' },
                { amount: 3, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'for eating raw alongside' },
                { amount: 1, name: 'bunch rau ram' },
                { amount: 1, name: 'cucumber', note: 'sliced' },
                { amount: 2, name: 'extra limes' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice', note: 'optional — duck is rich enough to eat without rice alongside crackers' },
            ],
        },
    ],
    steps: [
        {
            title: 'Score the duck skin and pre-salt — overnight',
            description: 'Score the duck skin in a crosshatch pattern — shallow cuts 1cm apart through the skin and into the fat beneath, not into the meat. This scoring allows the fat to render through the incisions during grilling rather than pooling under the skin. Rub coarse salt over the scored skin first. Leave 30 minutes. Then apply the mu?i ?t paste over the salted skin, pressing it into the score lines so the paste enters the fat layer directly. Wrap and refrigerate overnight — minimum 8 hours.',
            tip: 'The crosshatch scoring of duck skin before applying the paste is the technique that makes Phú Yên charcoal duck different from simply coating unscored duck skin. The paste enters the fat through the score lines during overnight marination and the fat renders through these channels during grilling, self-basting the skin from within.',
        },
        {
            title: 'Air-dry before grilling — 1 hour',
            description: 'Remove the duck from the refrigerator 1 hour before grilling. Place on a rack, unwrapped, at room temperature. The surface should feel slightly tacky and the paste slightly dried. This air-drying step is essential for duck specifically — the high fat content means the paste sits in a moist environment during marination and needs to dry slightly before hitting the charcoal. Wet paste on duck skin produces steam rather than char in the first minutes over the fire.',
            tip: 'Duck requires the longest air-drying time of any protein in this series — 1 hour at room temperature after an overnight refrigerator marination. The combination of the fat layer and the paste moisture makes duck the most preparation-demanding bird for charcoal grilling.',
        },
        {
            title: 'Build a two-zone charcoal fire',
            description: 'This is critical for duck: create a two-zone fire with thick coals on one side and a cooler zone on the other. Duck fat renders and drips aggressively and will cause sustained flare-ups on a single-zone fire. The cooler zone allows you to move the duck when flare-ups become too aggressive. Duck needs low-and-slow for the first 20 minutes, then higher heat in the final 10-15 minutes to crisp the skin.',
            tip: 'Duck grilled entirely over direct high heat will have charred exterior and undercooked interior by the time the fat has rendered enough for the skin to crisp. The two-zone approach is not optional for duck — it is the technique that allows the fat to render slowly over the cooler zone before the final crisping over the hotter zone.',
        },
        {
            title: 'Grill low and slow — then blast',
            description: 'Place the duck Marylands skin-side down over the cooler zone. Grill for 20-25 minutes, moving to avoid sustained flare-ups, until the fat has visibly rendered through the score lines and the skin surface is golden rather than pale. The skin should feel slightly firm when pressed. Move to the direct heat zone. Grill skin-side down for 5-7 minutes until the skin crisps and chars. Flip and grill bone-side down for 5 minutes. Total time: 30-35 minutes.',
            tip: 'The visual marker that the fat has rendered sufficiently: when the crosshatch score lines are clearly visible on the skin surface and the skin between them has begun to blister slightly. At this point the skin is ready for the high-heat crisping phase.',
        },
        {
            title: 'Rest and pound the mu?i lá é',
            description: 'Rest the grilled duck on a rack for 8 minutes — duck rested less loses more juice when cut. While resting, pound the lá é leaves with salt, pepper, sugar, and chili until the salt turns intensely green. Transfer to plates. For duck specifically the mu?i lá é should have slightly more chili than for seafood — duck fat is the richest fat in this series and needs more heat in the salt to balance it.',
            tip: 'The additional chili in the mu?i lá é for duck is the calibration that makes the condiment work with the richness of rendered duck fat rather than against it. The same mu?i lá é proportion used for flower crab would taste insufficient against duck.',
        },
        {
            title: 'Chop and serve the Phú Yên way',
            description: 'Chop each Maryland through the bone into 4-5 pieces with a cleaver. The skin should be deeply golden with char patches from the direct coal phase, the score lines still visible and the fat fully rendered beneath. Arrange on a plate. Scatter fresh lá é leaves and rau ram. Serve with mu?i lá é, sesame crackers, cucumber, and lime. The eating: duck piece on sesame cracker, raw lá é leaf under the duck, edge-dipped in lime-squeezed mu?i lá é. The same Phú Yên assembly that works for every protein in the province works here with duck.',
            tip: 'The consistency of the Phú Yên eating ritual — sesame cracker, protein, raw lá é leaf, mu?i lá é dip — across all proteins (seafood, goat, chicken, duck) is the province\'s deepest culinary identity. It is not one condiment used with one dish. It is a complete eating philosophy applied to every significant protein the province produces.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
