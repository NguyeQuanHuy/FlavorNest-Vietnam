'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-hap-muoi-hoi-an',
    title: `Hội An Salt-Steamed Chicken`,
    subtitle: `Gà Hấp Muối Hội An — Whole free-range chicken steamed on a bed of coarse salt and kaffir lime leaves — no water, no liquid, pure aromatic steam from the heated salt.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Gà hấp muối is the salt-steamed chicken of Hội An and central Vietnam — a preparation technique in which a whole free-range chicken is placed on a thick bed of coarse salt mixed with aromatic leaves inside a sealed clay pot or heavy-lidded vessel, and cooked over low-to-medium heat with no added liquid whatsoever. The salt absorbs moisture from the chicken's surface as it heats, releasing that moisture back as steam that circulates within the sealed vessel and cooks the chicken from all sides simultaneously — a self-contained steaming environment created entirely by the chicken's own moisture and the salt's hygroscopic properties.\n\nThe technique is ancient — salt-cooking of poultry appears in Fujian and Cantonese Chinese culinary traditions as 鹽焗雞 (yán jú jī), and the Hội An version reflects the city's centuries-long Chinese merchant community influence, filtered through central Vietnamese ingredients and preferences. The aromatic leaves added to the salt bed — lá chanh (kaffir lime leaves), lá nguyệt quế (bay leaves), sả (lemongrass), and occasionally lá mắc mật if available — perfume the steam environment and infuse the chicken skin with their volatile oils during the long cooking time.\n\nThe result is fundamentally different from any other cooking method: the chicken skin is not crispy (it has not been fried or roasted) but is instead incredibly tender, slightly golden from the salt's mineral transfer, and infused throughout with the aromatic steam that has surrounded it for 60-75 minutes. The flesh is the most succulent achievable from a chicken — cooked in its own moisture with no added water to dilute its natural juices — and the salt seasoning is even and penetrating rather than surface-only.`,
    ingredientSections: [
        {
            title: `Chicken`,
            items: [
                { amount: 1.3, unit: 'kg', name: `whole free-range chicken (ga ta)`, note: `gà ta essential — commercial broiler has insufficient flavour for this minimal preparation` },
                { amount: 1, unit: 'tbsp', name: `Shaoxing rice wine or rice wine (ruou gao)`, note: `rubbed inside cavity` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `rubbed inside cavity` },
            ],
        },
        {
            title: `Aromatic salt bed`,
            items: [
                { amount: 800, unit: 'g', name: `coarse sea salt (muoi hat lon)`, note: `non-iodised — the base that absorbs and releases moisture as steam` },
                { amount: 8, name: `kaffir lime leaves (la chanh)`, note: `torn — primary aromatic` },
                { amount: 3, name: `lemongrass stalks, bruised and roughly chopped` },
                { amount: 4, name: `bay leaves (la nguyet que)` },
                { amount: 5, name: `slices fresh ginger` },
                { amount: 1, unit: 'tsp', name: `black pepper, whole` },
                { amount: 3, name: `dried star anise (hoi huong)`, note: `optional — adds warmth` },
            ],
        },
        {
            title: `Cavity stuffing`,
            items: [
                { amount: 4, name: `kaffir lime leaves, torn` },
                { amount: 2, name: `lemongrass stalks, bruised` },
                { amount: 3, name: `slices fresh ginger` },
                { amount: 3, name: `garlic cloves, smashed` },
            ],
        },
        {
            title: `Gừng muối dipping sauce (ginger salt — the Hội An standard)`,
            items: [
                { amount: 40, unit: 'g', name: `fresh ginger, grated fine` },
                { amount: 1.5, unit: 'tsp', name: `coarse salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1.5, unit: 'tbsp', name: `lime juice` },
                { amount: 2, unit: 'tbsp', name: `neutral oil`, note: `heated until smoking and poured over ginger` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, name: `cucumber, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the chicken`,
            description: `Pat the chicken completely dry inside and out — surface moisture inhibits the initial salt absorption that begins the self-steaming process. Rub rice wine inside the cavity and over the skin. Rub salt inside the cavity. Stuff the cavity loosely with kaffir lime leaves, lemongrass, ginger, and garlic — stuffed aromatics perfume the flesh from the inside during cooking. Truss the legs together with kitchen twine to maintain the chicken's shape and ensure even heat distribution. Rest 15 minutes at room temperature — a cold chicken placed on the hot salt will produce uneven cooking.`,
            tip: `The gà ta (free-range chicken) requirement is not optional for gà hấp muối. Free-range chickens have firm, flavourful flesh with a higher proportion of dark muscle throughout the body — this denser muscle provides the structure to withstand 60-75 minutes of gentle steam cooking without falling apart, and its natural flavour complexity is what makes the minimal seasoning of this preparation sufficient. A commercial broiler cooked this way produces soft, flavourless results because its water-injected flesh lacks the density and natural flavour compounds of a free-range bird.`,
        },
        {
            title: `Prepare the aromatic salt bed`,
            description: `Combine coarse salt, torn kaffir lime leaves, bruised lemongrass pieces, bay leaves, ginger slices, whole peppercorns, and star anise in a large, heavy-bottomed pot or clay vessel with a tight-fitting lid. Mix thoroughly so the aromatics are distributed throughout the salt. Heat the salt bed over medium heat for 8-10 minutes, stirring occasionally, until the salt is very hot and the aromatics are beginning to release their fragrances — the kaffir lime leaves will darken slightly and the lemongrass will become fragrant. This pre-heating is the step that ensures the salt bed immediately begins generating steam when the cold chicken is placed on it.`,
            tip: `Pre-heating the aromatic salt bed before adding the chicken serves two functions. First: the hot salt immediately begins drawing surface moisture from the chicken when it is placed on the bed, initiating the steam generation faster than cold salt would. Second: the hot salt accelerates the volatilisation of the aromatic compounds from the kaffir lime leaves and lemongrass, producing a more aromatic steam environment from the first minutes of cooking. Cold salt takes 15-20 minutes to reach sufficient temperature; pre-heated salt begins working immediately.`,
        },
        {
            title: `Nestle the chicken into the salt bed`,
            description: `Create a slight depression in the centre of the hot salt bed. Place the trussed chicken breast-side up in the depression. Pack the remaining hot salt around and over the chicken — it should be partially buried in the salt, with the breast facing up and the salt covering the sides and coming up to the mid-point of the bird. The salt surrounding the chicken is both the heat conductor and the moisture regulator — it absorbs moisture released from the chicken's surface and redistributes it as steam throughout the sealed vessel. Cover the pot with its lid, sealing as tightly as possible.`,
        },
        {
            title: `Cook on low-medium heat — 60 to 75 minutes`,
            description: `Cook over medium-low heat for 60-75 minutes depending on the chicken's size — 60 minutes for a 1.2kg bird, 75 minutes for a 1.4kg bird. Do not lift the lid during cooking — the sealed environment is critical for the self-steaming mechanism. The salt bed should maintain a temperature of approximately 180-200°C, which translates to an internal steam temperature of approximately 95-100°C within the sealed vessel. Check doneness by inserting a skewer into the thickest part of the thigh — the juices should run clear with no pink. If pink, reseal and continue for 10 more minutes.`,
            tip: `The sealed vessel is the entire cooking mechanism of gà hấp muối — the steam generated within it has nowhere to escape and accumulates to a pressure slightly above atmospheric, raising the effective steaming temperature above 100°C. This slightly elevated steam temperature cooks the chicken faster and more thoroughly than atmospheric-pressure steaming while the salt bed's steady heat prevents the temperature spikes that would dry out the flesh in an oven. The tighter the lid seal, the better the result.`,
        },
        {
            title: `Make the gừng muối dipping sauce`,
            description: `Place grated fresh ginger in a small bowl with salt and sugar. Heat neutral oil until smoking in a small pan. Pour immediately over the ginger — it will sizzle and the ginger's volatile oils will be flash-released. Add lime juice and stir. The sauce should be pungent, sharp, and intensely ginger-forward. This gừng muối is the canonical dipping sauce for gà hấp muối throughout central Vietnam — the ginger's heat complements the chicken's gentle aromatic sweetness in the same way that mắm tôm complements northern preparations.`,
        },
        {
            title: `Remove, rest, and serve`,
            description: `Remove the chicken from the salt bed carefully — brush off any salt clinging to the skin with a clean brush. The skin will be pale golden, slightly translucent, and feel tender rather than crispy. Rest 10 minutes before carving — the resting allows the juices to redistribute from the interior to the surface of the flesh. Carve at the table: separate legs, wings, and slice the breast into thick pieces. The flesh should be uniformly cooked, glistening with its own juices, and smell of kaffir lime and lemongrass throughout. Serve with gừng muối, steamed rice, rau răm, and cucumber. The cooking salt — now infused with chicken fat and aromatic compounds — can be spread in a thin layer and re-dried in the oven for a second use as a seasoning salt.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}