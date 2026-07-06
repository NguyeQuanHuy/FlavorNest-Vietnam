'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-cang-xanh-nuong-muoi-ot',
    title: 'Tôm Càng Xanh Nướng Muối Ớt (Mekong Giant Freshwater Prawn Grilled with Chili Salt)',
    subtitle: 'The giant freshwater prawns of the Mekong Delta — longer than a hand, with claws the size of a finger — split, coated in chili-salt paste, and grilled over charcoal until the shells turn vivid blue-red and the sweet river flesh inside caramelizes at the edges. The flagship seafood of the Cửu Long.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/tom-cang-xanh-nuong-muoi-ot.jpg',
    intro: `Tôm càng xanh — Macrobrachium rosenbergii, the giant freshwater prawn — is the flagship crustacean of the Mekong Delta, a river prawn that grows to extraordinary size in the waterways and flooded rice fields of the Cửu Long basin and has a flavor entirely its own: sweeter than saltwater shrimp, with a cleaner, lighter taste and a texture in the large claws that is closer to lobster knuckle than to shrimp tail. The largest tôm càng xanh, called tôm càng xanh king by the Mekong vendors, can reach 30cm in length and weight over 200g individually — prawns that arrive at the market table with their characteristic blue-green claws and translucent grey bodies and are sold still alive and moving. Nướng muối ớt — grilled with chili salt — is the preparation that shows tôm càng xanh at its most straightforward and most impressive. The prawn is split lengthwise through the body (the claw is left intact and grilled whole), coated in a paste of salt, chili, lemongrass, and garlic, and grilled over charcoal at medium-high heat. The freshwater body turns from grey to a specific vivid combination of blue-green and red-orange that no saltwater crustacean replicates — the color change of tôm càng xanh on charcoal is one of the most distinctive visual moments in Mekong Delta cooking. The flesh inside the body is sweet and delicate; the flesh inside the large claws is denser and richer, closer in character to crab claw meat. Both require different eating techniques and reward the patience required. Tôm càng xanh nướng muối ớt is the dish eaten at river restaurants along the Mekong's banks from Cần Thơ to Tiền Giang, at floating restaurants moored in the current, and at the markets of Vĩnh Long and Đồng Tháp where the prawns arrive still wet from the river.`,
    ingredientSections: [
        {
            title: 'Prawns',
            items: [
                { amount: 800, unit: 'g', name: 'giant freshwater prawns (tôm càng xanh)', note: 'large, live — 3-4 prawns per 800g at the size typical of Mekong Delta markets. If unavailable: large black tiger prawns are the closest saltwater substitute, though the flavor differs.' },
            ],
        },
        {
            title: 'Muối ớt paste',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'minced' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, minced to paste — lemongrass is the essential aromatic for freshwater prawn, not just for flavor but because it neutralizes any river character in the flesh' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Mekong dipping sauce (nước chấm kiểu miền Tây)',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'tamarind paste', note: 'dissolved in 1 tbsp warm water — the Mekong addition that gives the dipping sauce a deeper sourness than lime alone' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 2, name: 'limes, extra wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice or fresh baguette' },
                { amount: 1, name: 'bowl warm water with lime', note: 'finger bowl — this dish requires hands' },
            ],
        },
    ],
    steps: [
        {
            title: 'Dispatch and prepare the prawns',
            description: 'Place the live prawns in the freezer for 15 minutes to sedate. The large claws should be handled carefully — even sedated, a large tôm càng xanh can deliver a significant pinch. Using a sharp, heavy knife, split the body of each prawn lengthwise from head to tail — do not split the claw section, which is left whole for grilling. Remove the intestinal tract running through the tail. The roe (if present, orange-red eggs under the body between the swimmerets) should be left in place — it is delicious when grilled.',
            tip: 'Splitting only the body and leaving the claw intact is the correct technique for tôm càng xanh. The claw meat cooks at a different rate from the body meat and benefits from the whole-shell protection during the full grilling time. Splitting the claw would expose the delicate meat to direct charcoal heat and dry it out.',
        },
        {
            title: 'Apply the muối ớt paste',
            description: 'Make the chili-salt paste by combining all paste ingredients. Apply generously to the cut surface of the split body — pressing the paste into the flesh directly. Coat the outside of the claw shells with paste as well. Leave for 15 minutes. The lemongrass in the paste is specifically important with freshwater prawns: it neutralizes the faint river character that tôm càng xanh can carry and replaces it with the aromatic citrus-grass note that makes the finished grilled prawn taste of the delta rather than of the river.',
            tip: 'The lemongrass quantity for tôm càng xanh is higher than for saltwater prawns specifically because freshwater crustaceans have a subtly different flavor profile that lemongrass complements and harmonizes. Three stalks for 800g of prawn is the Mekong Delta proportion.',
        },
        {
            title: 'Grill body-side down over medium-hot charcoal',
            description: 'Place the split prawns body/cut-side down first over medium-hot charcoal — the exposed flesh faces the heat. Grill for 4-5 minutes until the flesh is white and set and the paste has caramelized. Place the whole claws directly on the coals or the hottest part of the grill simultaneously — they need longer. Flip the bodies shell-side down and continue 2-3 minutes. The bodies are done when the shell turns the characteristic blue-green and orange combination and the flesh pulls away from the shell.',
            tip: 'The color change of tôm càng xanh on the grill is unlike any other crustacean — the natural blue-green pigment in the shell reacts with the charcoal heat to produce a vivid combination of blue, green, and orange that is specific to this species. It is one of the most visually striking moments in Vietnamese cooking.',
        },
        {
            title: 'Cook the claws — they need more time',
            description: 'The large claws of tôm càng xanh need 8-10 minutes total on the grill — significantly more than the body. Keep them on the hottest part of the grill while the bodies cook. The claws are done when the shell is completely red-orange throughout and tapping them with tongs produces a hollow sound. The flesh inside will be dense and slightly sweet — the best part of the entire prawn.',
            tip: 'Under-cooked claw meat in tôm càng xanh is translucent and slightly gelatinous — not harmful but texturally unpleasant. Correctly cooked claw meat is white throughout, firms when pressed, and pulls away from the inner claw shell in one piece. If uncertain, give the claws 2 more minutes.',
        },
        {
            title: 'Make the Mekong dipping sauce',
            description: 'Combine fish sauce, lime juice, sugar, water, garlic, and chili. Stir until sugar dissolves. Add the tamarind dissolved in water — this is the southern Vietnamese addition that gives the sauce a warmer, deeper sourness than pure lime juice. Taste: the Mekong version should be slightly sweeter and slightly more sour than the standard nước chấm of central Vietnam, with the tamarind providing the depth note.',
            tip: 'The tamarind in the Mekong dipping sauce is a small addition that produces a noticeable difference — the sourness becomes more complex and rounded, complementing the sweetness of the freshwater prawn better than pure citric acid from lime alone. Even a small amount (1 tsp dissolved paste) changes the character of the sauce.',
        },
        {
            title: 'Serve and eat at the table',
            description: 'Transfer the grilled prawns to a large plate or newspaper-lined tray. Serve with the Mekong dipping sauce, rau răm, lime wedges, and finger bowls. To eat the body: peel the charred shell away from the flesh — it comes off easily after grilling. Dip in the sauce. To eat the claw: use a heavy spoon or the back of a cleaver to crack the claw shell — it is harder than the body shell and requires more force. The claw meat comes out in one piece if the prawn was correctly cooked. Eat immediately, with hands, with beer.',
            tip: 'Cracking the claw is the skill that separates experienced tôm càng xanh eaters from first-timers. The correct technique: hold the claw with one hand, tap firmly with the back of a spoon along the joint where the two claw segments meet — one firm tap at the right point opens the claw cleanly. Multiple light taps crush the shell into the meat.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}