'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-nien-nuong-dak-bla',
    title: `Đăk Bla River Stone Fish`,
    subtitle: `Cá Niên Nướng Sông Đăk Bla — Kon Tum's rock-clinging river fish grilled whole over forest wood, eaten with lá lốt and muối kiến vàng.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cá niên (Crossocheilus siamensis — the Siamese algae eater, or in the Central Highlands context, the specific highland rock fish of the genus Garinae) is the most prized river fish of the Đăk Bla River — the river that flows through the heart of Kon Tum city from the Ngọc Linh massif westward to the Sê San. The Đăk Bla is a fast, cold, clear mountain river running over granite and basalt bedrock at 500-700 metres elevation, and the fish that inhabit its rocky rapids develop a specific character from this environment: firm, white, sweet flesh with absolutely no muddy undertone — the characteristic flaw of slow-water fish raised in still ponds.\n\nCá niên lives by clinging to submerged rocks in fast-flowing sections of the river, feeding on algae and biofilm with a specialised sucker mouth. Its lifestyle produces extraordinarily lean, dense muscle — the flesh is firmer than any pond-raised fish of comparable size and has a mineral sweetness that reflects the clean granite riverbed it inhabits. In Kon Tum, catching cá niên requires wading into the fast-flowing sections of the Đăk Bla with hand nets at specific rocky points — it is not a commercially farmed species and is only available from wild-catch fishermen at the Kon Tum market.\n\nThe preparation is deliberately simple: whole fish, cleaned but not scaled (the scales protect the flesh during grilling), rubbed with salt, lemongrass, and a small amount of forest chili, then grilled directly on wood coals until the exterior is charred and the flesh inside is just cooked — sweet, firm, and infused with the smoke of the highland hardwood. The dipping condiment is muối kiến vàng — the weaver ant salt found throughout the Central Highlands — or plain muối ớt rừng (forest chili salt).`,
    ingredientSections: [
        {
            title: `Fish`,
            items: [
                { amount: 800, unit: 'g', name: `fresh ca nien (highland rock fish)`, note: `whole, uncleaned — 8-15cm each; substitute: fresh gudgeon (Gründling), stone loach (Schmerle), or small whole trout from German rivers — all clean, fast-water fish with similar flesh character` },
                { amount: 1, unit: 'tbsp', name: `coarse salt`, note: `for cleaning` },
            ],
        },
        {
            title: `Grilling rub`,
            items: [
                { amount: 1.5, unit: 'tsp', name: `coarse salt` },
                { amount: 2, name: `lemongrass stalks, inner white only, minced to paste` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 3, name: `dried forest chili (ot rung), crushed`, note: `small, intensely hot highland variety; substitute: bird's eye chili` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Stuffing (inside cavity)`,
            items: [
                { amount: 4, name: `lemongrass stalks, bruised` },
                { amount: 4, name: `la lot leaves (Piper sarmentosum)`, note: `stuffed inside each fish — perfumes from within` },
                { amount: 2, name: `slices fresh galangal` },
            ],
        },
        {
            title: `Muối kiến vàng dipping (or muối ớt rừng)`,
            items: [
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 1, unit: 'tsp', name: `roasted weaver ant powder (kien vang rang xay)`, note: `if available; substitute: 0.5 tsp Sichuan pepper + pinch of citric acid powder` },
                { amount: 1, unit: 'tsp', name: `dried chili, toasted and crushed` },
                { amount: 0.5, unit: 'tsp', name: `toasted sesame seeds` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
            ],
        },
        {
            title: `Wrapping and accompaniments`,
            items: [
                { amount: 1, name: `bunch la lot leaves (Piper sarmentosum)`, note: `for wrapping pieces of fish` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 10, name: `sheets rice paper (banh trang)`, note: `optional` },
                { amount: 2, name: `limes, wedged` },
                { amount: 4, name: `portions cơm lam or steamed sticky rice` },
            ],
        },
    ],
    steps: [
        {
            title: `Clean the fish — scales stay on`,
            description: `Gut the fish by making a small incision along the belly from the vent to just below the gills. Remove innards and discard. Rinse the cavity under cold running water. Do not scale — the scales of cá niên protect the flesh during direct-coal grilling, acting as a natural barrier that prevents the delicate flesh from drying out or charring before the interior is cooked. After grilling, the scales peel away in one piece with the charred skin beneath, revealing perfectly cooked white flesh. Rub the exterior of each fish with coarse salt, leave 3 minutes, rinse and pat dry.`,
            tip: `The no-scaling approach is used throughout the Central Highlands for small whole fish grilled over open fire — it is not laziness but technique. Fish scaled before grilling lose their moisture barrier and dry out on the exterior within 2 minutes of coal contact; the interior is still raw when the exterior is overdone. With scales on, the exterior chars at the scale level while the flesh inside steams in its own moisture. The charred scale-and-skin layer peels away at the table, revealing perfectly cooked flesh.`,
        },
        {
            title: `Make the lemongrass rub`,
            description: `Combine minced lemongrass paste, minced garlic, crushed forest chili, coarse salt, and neutral oil into a paste. Rub over the exterior of each gutted fish — work the paste into the gill openings and along the belly incision. Stuff each cavity loosely with a bruised lemongrass stalk, 1-2 lá lốt leaves, and a slice of galangal. The lá lốt inside the cavity perfumes the flesh from the inside during grilling — its volatile peppery-anise oils infuse the steam trapped within the fish as it heats.`,
        },
        {
            title: `Build the wood fire`,
            description: `Prepare a hardwood fire — in Kon Tum, the Bahnar and Jrai communities use wood from the surrounding highland forest (typically forest oak or Dipterocarp species). Allow the fire to establish into a bed of glowing coals with some active flame. The wood species matters: hardwood coals burn hotter and longer than charcoal briquettes, and the aromatic compounds in the wood smoke — which differ by species — contribute to the flavour of the fish in ways that commercial charcoal cannot replicate. At home: use oak or hickory wood chunks on a charcoal base, or all-hardwood charcoal.`,
        },
        {
            title: `Grill directly on coals — 8 to 12 minutes`,
            description: `Place whole fish directly on the grill grate over hot coals — close to the heat. The scales will begin to char within 2 minutes. Do not move for 4-5 minutes — the fish must develop a charred crust before it will release cleanly from the grate. Flip once using two spatulas or long tongs. Grill 4-5 minutes on the second side. The fish is done when the scales are deeply charred and blistered, the eyes have turned white and slightly sunken, and the flesh at the belly incision is visibly opaque white. Press the belly — firm flesh that springs back indicates doneness.`,
            tip: `Cá niên's leanness means it cooks faster than fatty river fish — 8-10 minutes total for 80-100g fish. Larger fish (150-200g) need 12 minutes. The leanness also means it dries out more quickly after the ideal doneness point — remove from heat at the first sign of flaking and rest 2 minutes off the heat. Resting allows the internal temperature to equalise and the moisture to redistribute through the flesh.`,
        },
        {
            title: `Make the dipping salt`,
            description: `If using muối kiến vàng: combine roasted ant powder with coarse salt, crushed chili, sesame seeds, and lime juice. The formic acid of the ants provides sourness; the salt provides the body; the chili provides heat. If making plain muối ớt rừng: combine coarse salt, toasted crushed forest chili, sesame seeds, and lime juice — the standard Bahnar dipping salt that accompanies grilled fish throughout the Kon Tum highlands.`,
        },
        {
            title: `Eat the river way`,
            description: `Bring the grilled fish to the table whole. At the table, peel the charred scale-and-skin layer from one side — it comes away in a single sheet, revealing the white flesh beneath. Use chopsticks to lift pieces of flesh from the bone. Place on a lá lốt leaf with a small amount of rau răm and mint. Dip the entire wrap in the muối kiến vàng or muối ớt rừng salt. Eat in one large bite. Along the Đăk Bla River, Bahnar and Jrai fishermen eat cá niên nướng at the riverbank the same morning it is caught — the fish moves from river to fire to mouth within two hours, which produces a sweetness and freshness that no market fish can replicate. The cơm lam is eaten alongside — alternating bites of fish and rice, with the dipping salt bridging both.`,
            tip: `The head of cá niên is considered the most flavourful part by Kon Tum highland communities — the small cheek muscles and the gelatinous flesh around the jaw have a concentrated sweetness from the fish's algae-eating diet. Crack the skull gently with a chopstick and extract the cheek meat with a skewer. The sucker mouth, now charred, is discarded; the flesh around it is not.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}