'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-su-nuong-muoi-ot-song-cau',
    title: 'Tôm Sú Nướng Muối Ớt Sông Cầu (Sông Cầu Black Tiger Prawns Grilled with Chili Salt)',
    subtitle: 'Large black tiger prawns from the Sông Cầu lagoon coated in a chili-salt paste and grilled over hardwood charcoal until the shells char and the paste caramelizes — served with the muối lá é dipping salt that is specific to Phú Yên and available nowhere else.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/tom-su-nuong-muoi-ot-song-cau.jpg',
    intro: `Tôm sú nướng muối ớt Sông Cầu is the grilled prawn preparation that defines the seafood eating of Sông Cầu town — the fishing port at the northern end of Phú Yên province where the tôm sú (black tiger prawn, Penaeus monodon) are farmed in the protected waters of Cù Mông lagoon and the Xuân Đài bay, producing prawns of exceptional size and sweetness. Sông Cầu tôm sú are a specific product: the combination of the lagoon's water conditions — warm, with specific mineral content from the surrounding hills — and the traditional farming practices of the Sông Cầu fisher families produces prawns that are notably sweeter and have a firmer texture than tiger prawns from other growing regions. They are sold at the morning market in Sông Cầu from 5am, when the boats come in, and the restaurants along the waterfront cook them in the preparation that shows them most clearly: the charcoal grill with the chili-salt paste that caramelizes onto the shell and, through the shell, perfumes the flesh. The muối lá é that accompanies this dish is the distinguishing element that places it specifically in Phú Yên: the pounded salt of litsea cubeba leaves that appears throughout the province's cooking, from gà hấp lá é to gà nướng mọi to this prawn preparation. Its specific citrus-pepper-wild fragrance against the sweet caramelized prawn and the saltiness of the sea is the combination that Sông Cầu seafood is eaten with, and that no other dipping preparation replicates.`,
    ingredientSections: [
        {
            title: 'Prawns',
            items: [
                { amount: 800, unit: 'g', name: 'large black tiger prawns (tôm sú cỡ lớn)', note: 'heads on, shells on. 8-12 count per 500g — large enough that the flesh inside has substance after the shell chars. Sông Cầu prawns if available; any large fresh tiger prawns otherwise.' },
            ],
        },
        {
            title: 'Muối ớt chili-salt paste',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 4, name: 'bird\'s eye chilies', note: 'minced — Sông Cầu preparation is spicier than most coastal versions' },
                { amount: 2, name: 'fresh red chilies', note: 'minced — larger, milder, for volume and color' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, minced to paste' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Muối lá é (Phú Yên litsea leaf salt)',
            items: [
                { amount: 20, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)', note: 'the defining dipping salt of Phú Yên. Substitute if unavailable: 6 kaffir lime leaves + 6 rau răm leaves pounded with the salt.' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'freshly ground black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 3, name: 'limes', note: 'squeezed at the table' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'optional addition to the salt' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch rau răm', note: 'leaves only — eaten between prawns' },
                { amount: 1, name: 'bunch fresh lá é leaves, extra', note: 'served raw alongside for eating with the prawns' },
                { amount: 2, name: 'extra limes' },
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 16, name: 'sesame rice crackers (bánh tráng mè Tuy An)', note: 'optional but traditional — for wrapping and dipping' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the prawns',
            description: 'Rinse the tiger prawns under cold water. Use sharp scissors to cut through the shell along the back of each prawn — this allows the chili-salt paste to penetrate through the shell and flavors the flesh directly, and makes the prawn easier to eat after grilling. Devein through this cut. Leave the shell and head intact. Pat completely dry. The cut along the back should go through the shell and just into the flesh — not all the way through.',
            tip: 'The scissors cut along the back is the preparation technique specific to nướng muối ớt — it allows the paste to season the flesh through the opening while the shell remains intact to protect and concentrate heat during grilling. Prawns prepared this way are more evenly seasoned than whole uncut prawns.',
        },
        {
            title: 'Make and apply the chili-salt paste',
            description: 'Combine salt, minced bird\'s eye chili, minced red chili, lemongrass paste, garlic, sugar, turmeric, and oil into a thick paste. Work the paste into the cut along the back of each prawn, pressing firmly so it enters the flesh directly. Coat the external shell surface generously. Leave for 15 minutes while the charcoal heats — the salt begins drawing moisture from the flesh surface and the paste adheres more completely.',
            tip: 'The paste applied inside the back cut is the key difference from simply coating the exterior. When the prawn is grilled, the paste inside the cut caramelizes directly onto the flesh surface, producing a more intensely seasoned result than surface-only application.',
        },
        {
            title: 'Make the muối lá é',
            description: 'Pound the lá é leaves and coarse salt together in a mortar until the leaves break down and the salt turns green and intensely fragrant — the specific citrus-pepper-wild aroma of litsea cubeba should be clearly detectable. Add black pepper, sugar, and the minced chili if using. Transfer to individual small dipping plates. Leave the lime uncut until the moment of eating — squeeze directly over the salt at the table.',
            tip: 'The muối lá é for tôm sú is pounded slightly coarser than for chicken — the texture contrast of slightly grainy salt against the smooth prawn flesh is part of the eating experience. Do not pound to a completely uniform paste.',
        },
        {
            title: 'Build and heat the charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over — 25-30 minutes. The fire for tôm sú should be medium-hot: intense enough to char the shell and caramelize the paste in 4-5 minutes per side, not so hot that the paste burns before the flesh cooks. The Sông Cầu method: grill the prawns close to the coals — 10-12cm — for fast charring with good heat penetration into the thick flesh.',
            tip: 'Large tiger prawns have significantly more flesh than regular shrimp and need more time and heat to cook through. The closeness to the coals (10-12cm) compensates for the larger size — the intense direct radiant heat penetrates the shell faster than a higher position would.',
        },
        {
            title: 'Grill shell-side down first',
            description: 'Place the prawns shell-side (back) down over the coals — the cut with the paste faces down toward the heat. Grill without moving for 4-5 minutes until the shell chars and the paste in the cut begins to caramelize visibly at the edges. The head should turn orange-red. Flip to flesh-side down for 2-3 minutes until the exposed flesh is lightly charred. The prawn is done when the flesh is completely white and pulls away from the shell slightly.',
            tip: 'The shell-side-down position puts the paste-filled cut directly over the heat — the paste caramelizes into the flesh from below while the shell above reflects heat back down. This dual heating produces the most evenly cooked and seasoned prawn.',
        },
        {
            title: 'Serve and eat the Sông Cầu way',
            description: 'Transfer immediately to a plate. Scatter spring onion and extra lá é leaves. Serve with the muối lá é in individual plates, lime wedges for squeezing, rau răm, and sesame crackers. The Sông Cầu eating method: squeeze lime over the muối lá é. Pick up a prawn, peel the shell (it comes away easily after grilling), eat the flesh dipped in the muối lá é with a leaf of rau răm. The charred paste clinging to the inside of the shell is sucked off before discarding. Eat quickly while hot.',
            tip: 'The charred paste on the inside of the shell after peeling — the caramelized chili-lemongrass that was inside the cut — should be licked or sucked off the shell before discarding. It has concentrated to an intensity that is the most flavored element of the entire preparation. Coastal Phú Yên diners do this automatically.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}