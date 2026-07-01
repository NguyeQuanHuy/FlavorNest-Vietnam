'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'oc-ong-nuong-tieu-xanh',
    title: `Grilled Razor Clams with Green Pepper`,
    subtitle: `Ốc Ống Nướng Tiêu Xanh — Live razor clams grilled in the shell with fresh green peppercorns, butter, and lemongrass.`,
    category: 'SEAFOOD',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Ốc ống (razor clams, Solen strictus) are long, cylindrical bivalves found in the sandy tidal flats of the southern Vietnamese coast — most abundantly around Phú Quốc, Kiên Giang, and the Cà Mau peninsula. They live buried vertically in wet sand, filter-feeding at high tide, retreating deeper as the water recedes. A skilled fisherman can spot the keyhole-shaped opening they leave in the sand and pull them out in one clean motion before they dig back down.\n\nNướng tiêu xanh — grilled with fresh green peppercorns — is the preparation that made ốc ống famous outside its home province. Fresh green peppercorns (not dried, not brined) are crushed and mixed with butter, minced lemongrass, garlic, and a splash of fish sauce, then spooned into the open shell as the clam grills over charcoal. The butter carries the pepper oil into the clam's natural brine as it heats; the shell becomes a self-contained cooking vessel. The result is simultaneously briny, aromatic, sharp, and rich — four flavours in a single bite that lasts about four seconds.\n\nThe dish is street food in Phú Quốc night market, beach restaurant food in Vũng Tàu, and the dish that converts people who claim not to enjoy shellfish. The green pepper — fresh, not dried — is what makes it. Dried black pepper produces a completely different and inferior result. This recipe is written for fresh green peppercorns; if unavailable, brined green peppercorns (drained and rinsed) are the only acceptable substitute.`,
    ingredientSections: [
        {
            title: `The clams`,
            items: [
                { amount: 1, unit: 'kg', name: `live razor clams (ốc ống)`, note: `shells closed or closing when tapped — open and unresponsive ones are dead, discard` },
                { amount: 1, unit: 'tbsp', name: `coarse salt` },
                { amount: 1, unit: 'L', name: `cold water`, note: `for purging sand — 30 min soak` },
            ],
        },
        {
            title: `Green pepper butter (tiêu xanh bơ)`,
            items: [
                { amount: 40, unit: 'g', name: `fresh green peppercorns (tiêu xanh tươi)`, note: `stripped from stem — substitute: brined green peppercorns, drained and rinsed` },
                { amount: 50, unit: 'g', name: `unsalted butter`, note: `room temperature` },
                { amount: 3, name: `lemongrass stalks, inner white part only, minced to paste` },
                { amount: 4, name: `garlic cloves, minced` },
                { amount: 2, unit: 'tsp', name: `fish sauce (nước mắm)` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `prevents butter from burning on high heat` },
            ],
        },
        {
            title: `Finishing and garnish`,
            items: [
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 2, unit: 'tbsp', name: `fried shallots (hành phi)` },
                { amount: 1, name: `lime, cut into wedges` },
                { amount: 4, name: `bird's eye chili, sliced — optional` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 1, name: `baguette (bánh mì) or steamed bread`, note: `for mopping the butter from the shell` },
            ],
        },
    ],
    steps: [
        {
            title: `Purge the clams`,
            description: `Dissolve coarse salt in 1 L cold water in a wide bowl. Place razor clams in the salted water and leave for 30 minutes — they will expel sand and grit from inside the shells. After 30 minutes, lift the clams out (do not pour — the sand has settled to the bottom and pouring puts it back). Rinse each clam briefly under cold running water. Discard any clams with cracked shells or that do not respond to a light tap.`,
            tip: `Razor clams purge more efficiently in the dark — cover the bowl with a cloth or place in a cupboard during the 30-minute soak. A small piece of iron (a nail, a small knife blade placed flat) in the water is a Vietnamese folk method said to encourage faster purging. It works, though the mechanism is disputed.`,
        },
        {
            title: `Make the green pepper butter`,
            description: `Crush fresh green peppercorns coarsely with a mortar and pestle — do not grind to a paste. You want texture: some corns cracked, some partially whole. The freshly cracked green pepper releases volatile oils that dried pepper has long since lost. Combine crushed peppercorns with room-temperature butter, minced lemongrass paste, minced garlic, fish sauce, sugar, and neutral oil. Mix thoroughly. Taste — it should be sharp, aromatic, slightly salty, and fragrant with lemongrass. Adjust fish sauce if needed.`,
            tip: `The lemongrass must be minced to a paste, not just chopped — fibrous chunks do not cook through in the short grill time and are unpleasant to bite. Use a knife or small food processor to achieve a smooth paste from the inner white stalk only.`,
        },
        {
            title: `Open the clams for grilling`,
            description: `Razor clams can be grilled closed (they open from heat) or pre-opened. For this preparation, pre-opening gives better results: slide a thin knife blade along the flat side of the shell, run it along the inside to sever the adductor muscle, and open the two halves flat like a book. The clam meat will be attached to one half. Discard the empty half-shell or use as a serving vessel. Place the half-shells with meat on a tray.`,
        },
        {
            title: `Spoon the butter into the shells`,
            description: `Place a generous ½ teaspoon of green pepper butter directly onto each clam, pressing it lightly into contact with the meat. The butter will melt and run into the natural liquid inside the shell during grilling — this liquid becomes the sauce. Do not overfill; the shells are shallow and the butter will spill over a hot grill.`,
        },
        {
            title: `Grill over charcoal`,
            description: `Place buttered shells meat-side up on a charcoal grill over medium-hot coals. Do not flip. The shell conducts heat from below while the butter melts and bastes the meat from above. Grill 4–5 minutes until the butter is completely melted and bubbling, the clam meat is just opaque (not white and shrunken — that is overcooked), and the edges of the shell are beginning to char. Remove immediately.`,
            tip: `Razor clams overcook in seconds. The exact window between perfectly cooked — opaque, just firm, still juicy — and rubbery is about 60 to 90 seconds. Watch the meat, not the clock. As soon as the translucency is gone from the centre of the meat, remove the shell from heat.`,
        },
        {
            title: `Finish and serve immediately`,
            description: `Transfer grilled shells to a serving plate. Scatter spring onion slices over the butter in each shell — the residual heat will wilt them slightly. Add fried shallots. Serve with lime wedges and sliced chili on the side. A torn baguette or steamed bread is served alongside specifically to mop the green pepper butter from the shell after the clam is eaten — this butter, now infused with clam brine and green pepper oil, is considered by many the best part of the dish.`,
            tip: `In Phú Quốc night market, ốc ống nướng tiêu xanh is eaten standing at the grill, shell in one hand, bread in the other, lime squeezed directly into the shell before the first bite. The lime juice cuts through the butter and brightens the green pepper. Do not skip the squeeze.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
