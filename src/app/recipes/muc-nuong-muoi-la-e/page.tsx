'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-nuong-muoi-la-e',
    title: 'Mực Nướng Muối Lá É Phú Yên (Phú Yên Charcoal Squid with Litsea Leaf Salt)',
    subtitle: 'Fresh whole squid rubbed with coarse salt and grilled directly over hardwood charcoal until the skin chars and blisters — the mọi philosophy applied to squid, where the fire does what marinades attempt, and the muối lá é provides everything the unseasoned exterior lacks.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/muc-nuong-muoi-la-e.jpg',
    intro: `Mực nướng muối lá é Phú Yên is the charcoal squid preparation that applies the nướng mọi philosophy — fire and salt only, no marinade — to mực tươi, the fresh squid of the Phú Yên coast. The mọi technique has appeared throughout the Phú Yên series across multiple proteins: gà nướng mọi for chicken, cua đá nướng for rock crab, dê thui Ninh Bình for goat, ếch nướng mọi for frog. Applied to squid, it produces the most transparently honest expression of fresh squid that Vietnamese charcoal cooking achieves — the fire caramelizes the natural sugars in the squid skin, the charcoal smoke perfumes the flesh from without, and the muối lá é provides the aromatic dimension that the deliberately minimal preparation excludes from the cooking itself. Fresh squid from the Phú Yên coast — particularly the squid from the waters around Mũi Điện and the offshore fishing grounds that the province's boat fleet works — is considered by coastal Vietnamese to be among the finest available on the central coast, with a specific sweetness attributed to the particular plankton and food sources of the upwelling cold water that flows along this coastline. This sweetness is most clearly perceptible when the squid is cooked with minimum intervention — salt, fire, and nothing else — which is precisely what mọi philosophy requires and what muối lá é, rather than a complex marinade, allows to remain at the centre of the eating experience. The muối lá é with fresh grilled squid is a pairing of particular harmony: the wild citrus-pepper-camphor character of litsea cubeba and the clean marine sweetness of charcoal-grilled fresh squid are two flavors that amplify each other more than most condiment-protein combinations in the collection.`,
    ingredientSections: [
        {
            title: 'Squid',
            items: [
                { amount: 600, unit: 'g', name: 'fresh whole squid (mực tươi), medium size', note: '12-15cm body length — cleaned but left whole. The whole squid on the grill is the mọi presentation.' },
                { amount: 1, unit: 'tsp', name: 'coarse sea salt', note: 'the only seasoning — rubbed over every surface' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'rubbed inside the body cavity' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil', note: 'brushed over the salted squid — prevents sticking and helps the salt caramelize' },
            ],
        },
        {
            title: 'Hardwood charcoal',
            items: [
                { amount: 0.5, unit: 'kg', name: 'hardwood charcoal', note: 'built to medium-hot — slightly less intense than for chicken mọi because squid cooks faster' },
            ],
        },
        {
            title: 'Muối lá é Phú Yên',
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
                { amount: 1, name: 'bunch fresh lá é leaves' },
                { amount: 1, name: 'bunch rau răm' },
                { amount: 1, name: 'green mango', note: 'julienned' },
                { amount: 2, name: 'extra limes' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Salt the squid — 20 minutes',
            description: 'Pat the cleaned whole squid completely dry. Rub coarse salt firmly over the exterior of the body tube, around the tentacle base, and over the fins. Rub white pepper inside the body cavity. Brush lightly with oil over the salted exterior. Leave at room temperature for 20 minutes. The salt draws surface moisture then reabsorbs — seasoning the squid flesh from the surface inward rather than simply coating the exterior. The oil helps the salt caramelize against the charcoal heat.',
            tip: 'The 20-minute salt rest for mực nướng muối lá é is shorter than for the chicken or goat versions of mọi because squid\'s thinner flesh requires less time for the salt to penetrate effectively. At 20 minutes the salt has seasoned the outermost layer of the flesh — sufficient for squid, where the flesh depth is measured in millimetres rather than centimetres.',
        },
        {
            title: 'Build the medium-hot charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over. For mực nướng mọi, the fire should be medium-hot — not the very moderate fire used for gà ri nướng mọi (bantam chicken), but slightly cooler than the aggressive heat used for cua đá. Squid cooks through in 3-4 minutes per side at medium-hot charcoal and the fire calibration must match this cooking time to the charring time. Hold your hand 15cm above the coals: 3-4 seconds before the heat is too intense is the correct temperature.',
            tip: 'Medium-hot charcoal for squid produces the best result because the surface chars and caramelizes in the same time as the interior cooks through. Very high heat chars the exterior while the interior is still raw; very moderate heat cooks the interior while the exterior fails to develop the char that makes mọi cooking what it is.',
        },
        {
            title: 'Grill whole squid directly on charcoal — 3-4 minutes per side',
            description: 'Place the salted whole squid directly on the grill grate over the medium-hot charcoal. Grill without moving for 3-4 minutes — the skin will immediately begin to blister and char, and the body tube will begin to firm from the heat. The fat inside the mantle will render slightly, dripping onto the coals and producing brief flare-ups that add the specific smoke character of mọi cooking. Flip carefully and grill the other side 3-4 minutes. Total: 6-8 minutes.',
            tip: 'The brief flare-ups from the rendering squid fat during mọi grilling are the smoke source that perfumes the exterior. Move the squid briefly to a cooler area of the grill if flare-ups become sustained, then return to the direct heat zone. Brief flame contact on the skin is the goal — it adds the specific char note that makes mực nướng mọi different from mực nướng over gas.',
        },
        {
            title: 'Test doneness and rest',
            description: 'At 6-8 minutes total, press the thickest part of the body tube — it should feel firm throughout with no soft or yielding center. The skin should be visibly charred in patches with golden areas between, and the squid should have curled slightly from the heat contraction. Rest on a rack for 2 minutes — the carry-over heat finishes the last fraction of cooking without additional charcoal heat.',
            tip: 'The firmness test for grilled whole squid is more reliable than a timer because squid size varies significantly and the cooking time adjusts accordingly. A 12cm squid may be done at 5 minutes; a 15cm squid may need 8 minutes. Press at 5 minutes: if firm throughout, rest and serve. If yielding at the center, grill 2 more minutes and test again.',
        },
        {
            title: 'Pound muối lá é and serve the Phú Yên way',
            description: 'Pound lá é leaves with salt, pepper, sugar, and chili until intensely green and fragrant. Transfer to individual plates. Squeeze lime at the table. Slice the grilled squid into 2cm pieces on the diagonal. Arrange on a plate with tentacle clusters alongside. Serve with muối lá é, sesame crackers, fresh lá é leaves, green mango julienne, and rau răm. The Phú Yên ritual: squid piece on cracker, raw lá é leaf under the squid, edge-dipped in lime-squeezed muối lá é, eaten in one bite. The same assembly that has appeared throughout the Phú Yên series reaches its fullest expression here — the wild lá é character against the clean marine sweetness of charcoal-grilled fresh squid is the pairing that most clearly demonstrates why this condiment exists.',
            tip: 'The raw lá é leaf placed under the squid piece on the cracker — not over it — is the detail from the Phú Yên serving tradition that appears throughout the series. The squid\'s heat wilts the leaf slightly and releases its aromatic oils upward into the squid. On top, the leaf remains separate and cool. Under the squid, it becomes part of the bite. This positioning matters.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
