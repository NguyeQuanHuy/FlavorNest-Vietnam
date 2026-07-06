'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nhum-bien-nuong-mo-hanh',
    title: `Grilled Sea Urchin with Spring Onion Oil`,
    subtitle: `Nhum Bi?n Nu?ng M? Hành — Live sea urchin grilled in the shell, finished with sizzling spring onion oil and eaten with rice crackers.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Nhum bi?n (sea urchin, Diadema setosum and Tripneustes gratilla) is the most prized shellfish of the south-central Vietnamese coast — harvested by free divers in the rocky reef zones around Phú Qu?c, Côn Ð?o, Bình Ð?nh, and most abundantly around the Lý Son island group off Qu?ng Ngãi, where the urchin harvest defines the island economy from March to August each year.\n\nNu?ng m? hành — grilled with spring onion oil — is the preparation that lets the urchin speak most directly. The urchin is opened at the table or at the grill, the interior rinsed briefly of any dark matter, and placed spine-side down on the charcoal grate. As the shell heats, the natural brine inside the urchin begins to simmer, gently poaching the orange roe (gonads) in their own liquor. At the moment the brine is visibly bubbling, hot m? hành is poured directly into the shell — the sizzle is immediate, the spring onion oil infuses the roe and the brine, and the entire shell becomes a self-contained cooking vessel delivering one of the most concentrated ocean flavours in Vietnamese cuisine.\n\nThe roe is eaten directly from the shell with a small spoon, or scooped onto a piece of grilled rice cracker. Nothing else is needed. On Lý Son island, nhum bi?n is eaten at the water's edge by the fishermen who dive for it, still wet from the sea.`,
    ingredientSections: [
        {
            title: `Sea urchin`,
            items: [
                { amount: 8, name: `live sea urchins (nhum bien)`, note: `spines moving when touched — dead urchins have limp spines and must be discarded; substitute: fresh uni trays if live urchin unavailable` },
                { amount: 1, unit: 'tbsp', name: `coarse salt`, note: `for rinsing the interior` },
            ],
        },
        {
            title: `Mo hanh (spring onion oil)`,
            items: [
                { amount: 6, name: `spring onions, sliced thin` },
                { amount: 5, unit: 'tbsp', name: `neutral oil`, note: `peanut oil preferred for fragrance` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `fish sauce`, note: `optional — deepens the savouriness of the oil` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 8, name: `sheets grilled sesame rice cracker (banh trang nuong me)` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, name: `bunch rau ram (Vietnamese coriander)` },
                { amount: 2, name: `bird's eye chili, sliced thin` },
            ],
        },
    ],
    steps: [
        {
            title: `Select and open the urchins`,
            description: `Live urchin spines move slowly but continuously — this is the only freshness test that matters. Press a spine gently: it should resist and reorient. Limp, unresponsive spines mean the urchin is dead. Discard any dead urchin without opening it. To open: hold the urchin flat-side up (the mouth side faces down — the flat side with the small opening at the top is the aboral surface). Using kitchen scissors, insert one blade into the small hole at the top and cut around the circumference in a circle about 4 cm wide. Lift off the top cap. You will see 5 tongues of orange roe arranged like a star, surrounded by dark viscera and brine. Remove the dark viscera with a small spoon, leaving the roe intact. Pour the natural brine into a small bowl — reserve it. Rinse the interior very gently with a small amount of salted cold water, pour off. The roe should remain attached to the shell walls.`,
            tip: `The roe of Tripneustes gratilla (the white-spined urchin, nhum trang) is sweeter and less briny than Diadema setosum (the black-spined urchin, nhum den). Both are used in this preparation; the black-spined urchin has a more intense ocean flavour that some prefer. On Ly Son island, fishermen distinguish the two by taste before deciding which to grill and which to eat raw.`,
        },
        {
            title: `Make the mo hanh`,
            description: `Place sliced spring onions in a heatproof bowl with salt and fish sauce if using. Heat neutral oil in a small saucepan over medium-high heat until it just begins to shimmer — test by dropping one piece of spring onion in: it should sizzle immediately. Pour the entire hot oil over the spring onions in one motion. It will sizzle and spit violently for 3-4 seconds. Stir once. The onions will turn bright green and slightly translucent. The oil will turn fragrant and pale green. Use within 30 minutes — mo hanh loses its fragrance quickly as it cools.`,
            tip: `The temperature of the oil when poured is critical. Too cool and the spring onions stew rather than flash-cook — the result is flat and oily. Too hot and the onions burn and turn bitter. The correct temperature is 180-190C. In practice: the oil shimmers visibly but has not yet begun to smoke. A wooden chopstick dipped in should produce an immediate ring of small bubbles.`,
        },
        {
            title: `Grill the urchin shells`,
            description: `Place opened urchin shells spine-side down on a charcoal grill over medium coals, or on a gas grill set to medium. Add 1 teaspoon of the reserved natural brine back into each shell — this liquid will simmer and baste the roe from below as the shell heats. Grill 4-5 minutes without touching. The roe should remain orange and just set — not brown or shrunken. The brine inside will begin to visibly simmer at the edges of the shell. This is the signal to add the mo hanh.`,
        },
        {
            title: `Pour the mo hanh and finish`,
            description: `When the brine is simmering in the shell, spoon 1-2 teaspoons of hot mo hanh directly into each urchin. The oil will sizzle immediately on contact with the hot shell and brine. The spring onion pieces will settle over the roe. Leave on the grill for 30 more seconds — no longer. Remove from heat. The roe should be warm through, just barely cooked, still creamy in the centre. The mo hanh oil will have combined with the brine to form a small pool of intensely flavoured liquid in the base of the shell.`,
            tip: `The roe of nhum bien must not overcook. Fully cooked sea urchin roe loses its creamy texture and becomes grainy and slightly bitter — the complexity that makes it prized disappears. The correct texture after grilling is warm and just set at the surface with a creamy, almost liquid centre. Remove from heat the moment the mo hanh sizzles in — the residual heat of the shell does the final work.`,
        },
        {
            title: `Eat directly from the shell`,
            description: `Serve the shells immediately on a plate or on a piece of folded newspaper in the style of Ly Son island vendors. Eat the roe directly with a small spoon, scooping from the shell. Alternatively, scoop a tongue of roe onto a piece of grilled sesame rice cracker, add a leaf of rau ram, squeeze a drop of lime, and eat in one bite. The liquid in the base of the shell — brine, mo hanh oil, and roe residue — is drunk directly from the shell after the roe is finished. On Ly Son this drinking of the shell liquid is not optional; it is considered the best part.`,
            tip: `Do not squeeze lime into the shell before eating the roe — the acid begins to denature the protein and changes the texture within 60 seconds, turning the creamy roe granular. Add lime only to individual bites on the cracker, never directly to the shell. The shell liquid is drunk plain.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
