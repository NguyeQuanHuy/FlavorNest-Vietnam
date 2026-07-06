'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-ri-nuong-moi-phu-yen',
    title: 'Gà Ri Nướng Mọi Phú Yên (Phú Yên Bantam Chicken Whole-Fire Grilled)',
    subtitle: 'The small free-range bantam chickens of Phú Yên grilled whole over hardwood charcoal with nothing but coarse salt — the fire doing what marinades attempt and rarely achieve, the muối lá é providing everything the unseasoned exterior lacks.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 15 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/ga-ri-nuong-moi-phu-yen.jpg',
    intro: `Gà ri nướng mọi Phú Yên is the bantam chicken version of gà nướng mọi — the fire-only preparation that is the oldest and most honest way to cook a bird on the central Vietnamese coast. Gà ri is a specific breed: the small, lean, free-ranging bantam chicken of the central Vietnamese countryside, raised in backyards and on hillsides rather than in intensive farms, with yellow skin from the carotenoids in their varied diet, firm muscle from their constant movement, and a concentrated flavor that commercial chicken at three or four times the weight cannot approach. They weigh between 600-900g whole — small enough that a single bird is the correct portion for one person, large enough to sustain a full grilling over real charcoal. The nướng mọi technique applied to gà ri produces results that are specifically different from what the same technique produces with a standard 1.5kg commercial chicken: the smaller bird cooks through faster, the skin-to-meat ratio is higher so the fire-crisped skin constitutes a larger proportion of each bite, and the flavor of the flesh — already more concentrated than commercial chicken — is further intensified by the charcoal heat without any masking marinade. The salt rubbed into the skin before grilling is slightly more generous per gram of bird than for larger chickens, because gà ri's higher skin-to-meat ratio means the salt does more work seasoning the meat through the skin. The muối lá é is the condiment that was created for preparations exactly like this: a protein cooked with nothing but fire and salt, needing a dipping preparation that provides all the aromatic complexity the cooking has deliberately excluded.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 2, name: 'whole gà ri (bantam chickens), 600-800g each', note: 'free-range small chickens — yellow-skinned, firm-fleshed. Substitute: the smallest available free-range chicken or Cornish hen. The smaller the bird, the closer to the original.' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt', note: 'the only exterior seasoning — slightly more per gram than for larger birds' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'inside the cavity only' },
                { amount: 1, name: 'small knob fresh ginger', note: 'placed inside the cavity — no external aromatics' },
            ],
        },
        {
            title: 'Hardwood charcoal fire',
            items: [
                { amount: 1, unit: 'kg', name: 'hardwood charcoal', note: 'lychee or longan wood preferred for the Phú Yên character — or any dense hardwood charcoal' },
            ],
        },
        {
            title: 'Muối lá é Phú Yên',
            items: [
                { amount: 25, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)', note: 'the dipping condiment specific to Phú Yên — more generous than usual because gà ri is smaller and each piece needs more salt per bite' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'coarsely ground' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'bird\'s eye chili', note: 'pounded with the leaves' },
                { amount: 3, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'for eating raw alongside each bite' },
                { amount: 1, name: 'bunch rau răm' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
            ],
        },
    ],
    steps: [
        {
            title: 'Salt the gà ri — minimum 1 hour',
            description: 'Pat each bantam chicken completely dry inside and out. Rub coarse salt firmly over every external surface — under the wings, around the neck, between the thighs and body. Place white pepper and the ginger knob inside the cavity. Leave on a rack at room temperature for 1 hour, or uncovered in the refrigerator for up to 6 hours. The small size of gà ri means the salt penetrates to the meat surface faster than with larger birds — 1 hour is sufficient for full flavor development.',
            tip: 'Gà ri\'s high skin-to-meat ratio means the salt on the skin seasons the meat beneath more effectively than with a large chicken. The salt also partially dries the skin surface, which produces a more crackling result when the fire hits it. The 1-hour rest is the minimum — 6 hours produces a noticeably better bird.',
        },
        {
            title: 'Build the correct charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over — 25-30 minutes. For gà ri specifically, the fire should be medium rather than medium-hot: the smaller bird cooks through faster than a large chicken and needs slightly less intense heat to avoid the exterior charring before the interior is done. Hold your hand 15cm above the grill — 4-5 seconds comfortable is the correct temperature for gà ri nướng mọi.',
            tip: 'Gà ri grilled over an overly hot fire chars the thin skin before the small breast has cooked through. The slightly cooler fire compensates — the bird needs 35-40 minutes, and at the correct temperature the skin chars gradually and evenly rather than immediately.',
        },
        {
            title: 'Grill whole — both sides',
            description: 'Place the salted gà ri breast-side up on the grill. Grill without moving for 12-15 minutes. The skin on the bottom will begin to char and the fat will render and drip onto the coals, creating brief flare-ups that add the specific hardwood-smoke char of mọi cooking. Flip breast-side down for 10-12 minutes. Then rotate 90 degrees for 5 minutes on each flank to char the sides. Total grilling time: 35-40 minutes.',
            tip: 'The flare-ups from the rendering gà ri fat are an essential part of the mọi technique — they add a specific charred note to the skin that direct heat alone does not produce. Move the birds to the cooler zone when the flare-ups are too aggressive, but brief flame contact on the skin is the goal, not something to prevent.',
        },
        {
            title: 'Test and rest',
            description: 'Pierce the thigh joint — juices must run completely clear. The skin should be deeply charred in patches with golden areas between. Because gà ri is smaller, it is more prone to drying out if overcooked — pull immediately when the juices run clear and rest on a rack for 8 minutes. The small size means the carry-over cooking during resting finishes any slight underdone areas without risk of drying the breast.',
            tip: 'Gà ri rested on a rack rather than a plate is especially important — the small bird\'s steam volume is proportionally large and softens the charred skin significantly if trapped under the bird on a flat plate. The rack allows steam to escape from all surfaces simultaneously.',
        },
        {
            title: 'Pound the muối lá é',
            description: 'Pound lá é leaves with coarse salt, black pepper, sugar, and the chili bird\'s eye in a mortar until the leaves are completely broken down and the salt has turned intensely green and fragrant. For gà ri specifically, the muối lá é should be pounded to a finer consistency than for larger seafood preparations — gà ri pieces are small and the salt should coat each piece more completely. Transfer to individual small plates. Squeeze lime at the table.',
            tip: 'The quantity of muối lá é for gà ri nướng mọi is more generous per bird than for larger chickens — because the pieces are smaller, each bite needs more salt contact to be seasoned correctly. Serve a larger plate of muối lá é than might seem necessary.',
        },
        {
            title: 'Chop and serve — the Phú Yên way',
            description: 'Chop each gà ri through the bone with a cleaver into small pieces — the small bird should produce 10-12 pieces per bird. Arrange on a plate. Scatter fresh lá é leaves and rau răm. Serve with the muối lá é, sesame crackers, and lime. To eat the Phú Yên way: place a piece of gà ri on a sesame cracker, add a raw lá é leaf, dip the assembled cracker in the lime-squeezed muối lá é. The cracker, the crispy-charred chicken skin, and the lá é leaf eaten together in one bite is the Phú Yên mọi experience at its most complete.',
            tip: 'The sesame cracker assembly for gà ri nướng mọi is specific to Phú Yên — the province eats its fire-grilled proteins on bánh tráng mè rather than with plain rice. The cracker adds the crunch dimension that the small gà ri pieces, already crispy from the fire, do not need from a heavier starch.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
