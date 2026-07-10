'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-ca-nhech',
    title: `Raw Ribbon Eel Salad`,
    subtitle: `Gỏi Cá Nhệch — Thanh Hóa's raw sea eel sliced paper-thin, cured briefly in lime, and eaten with lá sung, mắm tôm, and roasted peanuts.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cá nhệch (Muraenesox cinereus — the silver conger pike eel) is a large, predatory sea eel that inhabits the muddy estuaries and shallow coastal waters of the north-central Vietnamese coast, particularly around the Mã River estuary and the Lạch Trường fishing grounds of Hậu Lộc district, Thanh Hóa province. It grows to over a metre in length, has dense, firm white flesh with very few bones, and a flavour that is richer and more complex than freshwater eel — faintly sweet, with a clean brininess that reflects its coastal diet.\n\nGỏi cá nhệch is the most technically demanding and culturally significant dish in Thanh Hóa's coastal repertoire — a raw eel salad in which the fish is sliced paper-thin, briefly cured in lime juice, dressed with toasted sesame, roasted peanuts, fried shallots, and a specific set of raw herbs that includes lá sung (fig leaves), and eaten with mắm tôm as the primary dipping condiment. The dish appears at festival tables, wedding feasts, and important family meals throughout coastal Thanh Hóa and is considered the province's answer to the Central Highlands' raw venison and the southern coast's gỏi cá mai — a preparation that demonstrates mastery of the knife, the freshness of the ingredients, and the cook's understanding of acid.\n\nThe fig leaf (lá sung) is the element that makes gỏi cá nhệch irreplaceable and irreplicable outside Thanh Hóa. The tannic bitterness of fresh fig leaves cuts through the richness of the eel fat and provides an astringency that resets the palate between bites. In Thanh Hóa coastal villages, fig trees grow in every household garden specifically for this dish. Outside Vietnam, fresh fig leaves are available at Turkish and Middle Eastern grocers in Germany during summer.`,
    ingredientSections: [
        {
            title: `The eel`,
            items: [
                { amount: 600, unit: 'g', name: `fresh cá nhệch fillet (Muraenesox cinereus — silver conger pike eel)`, note: `skin removed, pin bones removed — substitute: fresh conger eel or large sea eel fillet, sashimi-grade` },
                { amount: 150, unit: 'ml', name: `fresh lime juice`, note: `from 8-10 limes — must be fresh, not bottled` },
                { amount: 0.5, unit: 'tsp', name: `salt`, note: `added to lime juice` },
                { amount: 0.5, unit: 'tsp', name: `sugar`, note: `softens the lime sharpness` },
            ],
        },
        {
            title: `Dressing`,
            items: [
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `lime juice`, note: `additional — for dressing separate from cure` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, minced` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Garnish and texture`,
            items: [
                { amount: 3, unit: 'tbsp', name: `roasted peanuts (dau phong rang)`, note: `crushed coarsely` },
                { amount: 2, unit: 'tbsp', name: `toasted white sesame seeds (me rang)` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 50, unit: 'g', name: `green mango, shredded fine`, note: `tossed with pinch of salt` },
            ],
        },
        {
            title: `The Thanh Hóa herb set`,
            items: [
                { amount: 12, name: `fresh fig leaves (la sung)`, note: `young leaves only — torn into pieces; available at Turkish/Middle Eastern grocers in Germany in summer` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)`, note: `leaves only` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 1, name: `bunch perilla (tia to)` },
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, name: `fresh red chili, sliced thin`, note: `for colour` },
            ],
        },
        {
            title: `Mắm tôm dipping (mandatory)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `shrimp paste (mam tom dac)`, note: `thick northern-style` },
                { amount: 1.5, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `warm water` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `heated and poured over sauce to bloom aroma` },
                { amount: 2, name: `bird's eye chili, minced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 12, name: `sheets sesame rice cracker (banh trang me)` },
                { amount: 1, name: `head butter lettuce` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare and skin the eel`,
            description: `Cá nhệch has a thick, tough skin that must be removed before slicing — it does not eat pleasantly raw. If purchasing a whole eel: make a shallow incision around the neck just behind the head. Grip the skin with a cloth for traction and pull firmly downward toward the tail — the skin peels away in one piece if the fish is very fresh. If it tears, use a thin sharp knife to assist. Remove the skin completely. Lay the skinned eel flat and fillet by running a thin flexible knife along the spine on both sides. Remove pin bones by running a finger along the centre of each fillet and extracting bones with tweezers. Pat fillets completely dry and refrigerate until the moment of slicing.`,
            tip: `The skin-removal technique — gripping and pulling rather than cutting — is the traditional method for cá nhệch in Hậu Lộc fishing villages. Fresh eel skin separates cleanly from the muscle; eel that has been stored more than a day has skin that adheres firmly and tears. The ease of skin removal is therefore a freshness test as reliable as smell. If the skin will not pull cleanly, use a knife and accept that the fish is not at its freshest.`,
        },
        {
            title: `Slice paper-thin — the knife technique`,
            description: `Keep the fillets very cold — return to the freezer for 10 minutes if they have warmed. Using the sharpest knife available, slice the eel fillet at a 30-degree angle (more horizontal than vertical) into pieces 2mm thick and 6-7 cm long. The angle produces wider, thinner slices than a vertical cut. The slices should be thin enough to be faintly translucent when held up to light. Arrange in a single layer on a chilled plate as you work. Any slice thicker than 3mm will not cure evenly in the lime and will have a raw texture at the centre.`,
            tip: `Gỏi cá nhệch slices at 2mm are thinner than gỏi cá mai (3-4mm) because eel flesh is denser and fattier than sea fish — thicker slices feel heavy and oily rather than delicate. The 30-degree cutting angle is the technique that makes thin slices possible without tearing the flesh. A sharp knife is not optional: a dull knife compresses the flesh and produces ragged, uneven slices that cure at different rates.`,
        },
        {
            title: `Lime cure — 12 minutes exactly`,
            description: `Combine lime juice, salt, and sugar in a non-reactive bowl. Add eel slices and turn gently to coat every piece. Leave at room temperature for exactly 12 minutes — eel flesh is denser than sea fish and the fat content slows acid penetration, but the thinner slice compensates. At 12 minutes the exterior will be opaque and firm while the interior retains a faint translucency. The fat in the eel flesh will have partially emulsified with the lime juice, giving the surface a slight sheen. Beyond 15 minutes the flesh becomes firm throughout and loses its delicate character.`,
            tip: `The 12-minute cure for cá nhệch vs 15-20 minutes for sea fish reflects the difference in protein density and fat content. Eel fat is partially water-soluble and reacts with lime acid differently than lean fish protein — the surface firms quickly while the interior remains protected by fat. This is why the slice thickness (2mm) and the cure time (12 min) must be treated as a paired specification, not adjusted independently.`,
        },
        {
            title: `Drain, press, and dress`,
            description: `After 12 minutes, drain through a fine sieve. Discard the lime liquid which has absorbed eel fat and lost its structure. Gently press the eel slices with the back of a spoon to remove surface moisture — eel retains more liquid than sea fish after acid cure and must be pressed more firmly. Transfer to a clean dry bowl. Combine all dressing ingredients and whisk to emulsify. Pour over drained eel and toss gently. Add half the rau răm, mint, perilla, spring onion, and shredded green mango. Toss once more.`,
        },
        {
            title: `Make the mắm tôm dipping sauce`,
            description: `Combine thick shrimp paste, lime juice, sugar, warm water, and minced chili in a bowl. Stir until sugar dissolves. Heat 1 tbsp neutral oil until shimmering — just below smoking. Pour over the sauce in one motion. The hot oil blooms the shrimp paste aroma and integrates the fat into the sauce. Stir once. Taste — it should be intensely pungent, salty, sharp from lime, and fragrant. The hot oil step is essential: cold mắm tôm sauce for gỏi cá nhệch is considered incorrect in Thanh Hóa.`,
        },
        {
            title: `Assemble with fig leaves`,
            description: `Transfer dressed eel to a wide serving plate. Scatter crushed peanuts, toasted sesame, and fried shallots over the top in that order. Lay remaining herb leaves on the surface without tossing. Scatter red chili slices for colour. Arrange torn fig leaves around and over the salad — they are not a garnish but an eating component. Each person tears a piece of fig leaf and places it under a piece of eel before wrapping in rice paper or lettuce.`,
            tip: `The fig leaf must be young and fresh — older fig leaves are too fibrous and intensely bitter to eat raw. Young fig leaves (the first 3-4 leaves from a new branch) have a mild, grassy tannin note that is pleasant raw. In Germany, fig trees grown as ornamentals in gardens shed young leaves from April to September. Turkish grocers in German cities stock fresh fig leaves (incir yaprağı) seasonally. Dried fig leaves are not a substitute — the tannin compounds that make them work in gỏi are only present in fresh leaves.`,
        },
        {
            title: `Eat the Thanh Hóa way`,
            description: `Place a piece of rice cracker or lettuce leaf flat. Add a slice of cured eel, a torn piece of fig leaf, a leaf of rau răm and mint, a pinch of shredded mango. Fold and dip the entire bundle in mắm tôm sauce. Eat in one bite. The flavour sequence: first the mắm tôm funk and lime sharpness, then the delicate sweet eel with sesame and peanut crunch, then the fig leaf tannin at the finish that clears the palate for the next bite. In Hậu Lộc, this sequence is eaten in silence — the dish is considered serious food that deserves full attention.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}