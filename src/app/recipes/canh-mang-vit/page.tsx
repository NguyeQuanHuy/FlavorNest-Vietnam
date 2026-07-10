'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-mang-vit',
    title: `Duck and Bamboo Shoot Soup`,
    subtitle: `Canh Măng Vịt — Northern Vietnam's Tết duck soup with dried bamboo shoots and lemongrass — a three-day preparation that produces the most complex broth in the Vietnamese new year table.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '4 hrs',
    rating: 4.9,
    baseServings: 6,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Canh măng vịt is the soup that anchors the northern Vietnamese Tết table with the same authority that bánh chưng anchors the rice dish tradition — a preparation so associated with the lunar new year celebration that its smell, rising from pots across northern Vietnamese households in the days before Tết, is one of the most powerfully evocative sensory memories of the celebration. Duck simmered with dried bamboo shoots (măng khô), lemongrass, shallots, and ginger for two to three hours until the duck is falling-tender and the bamboo has absorbed the duck's fat and the broth's depth — this is the dish.\n\nThe dried bamboo shoots (măng khô) used in canh măng vịt are the ingredient that most distinguishes this preparation from other Vietnamese duck soups. Fresh bamboo shoots are crisp and mildly flavoured; dried bamboo shoots, which have been boiled, split, and sun-dried over several days, develop a concentrated, complex flavour during the drying process — simultaneously earthy, slightly funky, and deeply savoury, with a chewy, dense texture that requires extended soaking and boiling to soften but that retains more character than fresh shoots ever could. The interaction between the duck fat that renders during the long simmer and the dried bamboo's concentrated umami produces a broth of extraordinary depth that a shorter preparation cannot achieve.\n\nThe duck used for canh măng vịt is specifically vịt cỏ (grass-fed duck) — smaller, leaner, and more intensely flavoured than commercial Peking-style ducks. The leanness means less fat in the finished broth but more flavour in the flesh; the smaller size means the bones provide more collagen per gram of duck than larger breeds, producing a broth with natural body from gelatin dissolution. This recipe documents the full traditional preparation.`,
    ingredientSections: [
        {
            title: `Duck`,
            items: [
                { amount: 1.5, unit: 'kg', name: `whole duck (vit co or vit ta)`, note: `cut into large pieces — thighs, drumsticks, wings, breast sections; free-range preferred` },
                { amount: 2, unit: 'tbsp', name: `rice wine (ruou gao)` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `ground turmeric`, note: `rubbed on duck pieces — removes gaminess, adds colour` },
            ],
        },
        {
            title: `Dried bamboo shoots (the defining ingredient)`,
            items: [
                { amount: 150, unit: 'g', name: `mang kho (dried bamboo shoots)`, note: `soaked 24-48 hours in cold water, boiled 30 min — see step 1; available at Vietnamese and Chinese grocers in Germany` },
            ],
        },
        {
            title: `Broth aromatics`,
            items: [
                { amount: 4, name: `lemongrass stalks, bruised and knotted` },
                { amount: 5, name: `shallots, halved and charred` },
                { amount: 4, name: `slices fresh ginger, charred` },
                { amount: 3, name: `garlic cloves, smashed` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 20, unit: 'g', name: `rock sugar (duong phen)` },
                { amount: 1.8, unit: 'L', name: `cold water` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 4, name: `spring onions, sliced thin` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)`, note: `the northern duck herb` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice or bun tuoi` },
                { amount: 1, unit: 'tbsp', name: `mam tom (fermented shrimp paste)`, note: `dissolved in lime juice — on the side` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the dried bamboo shoots — 24 to 48 hours ahead`,
            description: `Place dried bamboo shoots in a large bowl. Cover completely with cold water. Soak for minimum 24 hours — 48 hours produces better results. Change the water every 8-12 hours. The soaking water will turn progressively darker yellow as the bamboo releases its concentrated compounds — this colour change is normal. After soaking, boil the bamboo in fresh water for 30 minutes. Drain, rinse, and squeeze firmly to remove excess moisture. Tear or cut into strips approximately 5-6cm long along the grain. Taste — the bamboo should be slightly chewy, earthy, and mildly savoury with a residual mineral quality that will deepen further during the long simmer with the duck.`,
            tip: `The 24-48 hour soaking of dried bamboo shoots is the step that most home cooks shorten with poor results. Dried bamboo shoots contain concentrated bitter compounds and a distinctive "dried bamboo" smell that must be extracted through extended soaking before cooking — inadequately soaked bamboo produces a soup with a harsh, unpleasant bitterness and an overpowering dried-bamboo aroma that masks the duck's flavour. The water-changing during soaking accelerates the extraction. At 24 hours the bamboo is usable; at 48 hours it is at its best, with the concentrated compounds sufficiently diluted to allow the bamboo's natural sweetness and earthiness to be the primary notes.`,
        },
        {
            title: `Prepare and pre-cook the duck`,
            description: `Rub duck pieces with salt, rice wine, and ground turmeric. Rest 15 minutes. Rinse briefly and pat dry. The turmeric both removes gamey off-notes from the duck (the curcumin compounds bind to certain aldehydes responsible for the characteristic duck smell) and provides a golden colour to the finished broth. Blanch duck pieces in boiling water for 5 minutes. Drain and rinse each piece under cold water — this blanching removes blood and surface impurities that would cloud the broth during the long simmer.`,
            tip: `Duck has a more pronounced gamey character than chicken due to its higher myoglobin content in the muscle tissue — myoglobin is the oxygen-storing protein that gives dark poultry meat its characteristic flavour and colour. The two-step deodorising treatment (turmeric rub + blanching) is the traditional northern Vietnamese technique for managing duck's gaminess: the turmeric's curcumin reduces the perception of the myoglobin-derived off-notes, and the blanching removes the blood that would oxidise during slow cooking and intensify the gaminess. Skipping either step produces a noticeably more gamey finished soup.`,
        },
        {
            title: `Build the broth`,
            description: `In a large pot, combine blanched duck pieces, prepared bamboo shoot strips, charred shallots, charred ginger, smashed garlic, bruised lemongrass, and 1.8L cold water. Bring to a boil over medium-high heat. Skim foam thoroughly for the first 10 minutes — the turmeric-blanched duck produces relatively little foam compared to unblanched duck, but thorough skimming is still essential for broth clarity. Reduce to the lowest possible simmer. Cook uncovered for 90 minutes minimum — 2 hours produces deeper flavour.`,
        },
        {
            title: `The long simmer — duck fat and bamboo interaction`,
            description: `During the 90-120 minute simmer, two important processes occur simultaneously. First: the duck's subcutaneous and intramuscular fat renders slowly into the broth, providing richness and carrying fat-soluble aromatic compounds from the lemongrass and ginger throughout the liquid. Second: the bamboo shoot strips absorb this rendered duck fat, their porous structure acting as a flavour sponge — by the end of the simmer, the bamboo has absorbed duck fat, broth depth, and lemongrass fragrance, becoming the most complexly flavoured element of the dish despite being the most neutral ingredient at the start. Season with fish sauce, rock sugar, and salt after 90 minutes.`,
            tip: `The bamboo's porous structure — created during the drying and rehydration process — is what allows it to absorb the duck fat and broth compounds during the long simmer. Fresh bamboo shoots lack this porosity and absorb far less. This is the fundamental reason dried bamboo is used in canh măng vịt rather than fresh: the drying-rehydration cycle creates a physical structure that acts as a flavour concentrator during the long cooking. The bamboo pieces eaten from a correctly made canh măng vịt should taste more intensely of duck fat and broth than the broth itself — the bamboo has concentrated the flavour compounds rather than just absorbing liquid.`,
        },
        {
            title: `Finish and adjust seasoning`,
            description: `After 90-120 minutes, the duck meat should be completely tender — falling from the bone when pressed. The bamboo should be deeply flavoured, slightly chewy, and darker in colour than at the start. The broth should be golden-amber, slightly rich from the duck fat, and smell of lemongrass, ginger, and duck. Remove lemongrass stalks. Taste and adjust: the correct seasoning for canh măng vịt is noticeably less aggressive than most Vietnamese soups — this is a rich broth that should be savoured, not seasoned to the point where the salt and fish sauce dominate the duck and bamboo's natural depth.`,
        },
        {
            title: `Serve the Tết soup`,
            description: `Ladle generous portions of broth into deep bowls — include duck pieces, bamboo strips, and plenty of broth. Scatter sliced spring onion, fried shallots, rau răm, and coarse black pepper. Serve with steamed rice or bún alongside, lime wedges, and mắm tôm-lime juice on the side. In northern Vietnamese households, canh măng vịt is served at the Tết meal from a large communal pot at the table centre — the pot is placed over a portable burner and everyone helps themselves throughout the meal. The soup improves significantly the following day as the duck fat and bamboo continue exchanging flavour overnight in the refrigerator — reheating the next day's canh măng vịt is considered the best eating.`,
            tip: `The "next day is better" quality of canh măng vịt is the most consistent observation among northern Vietnamese cooks about this dish. The overnight refrigeration allows the rendered duck fat to solidify on the broth surface — it can be skimmed if desired or left to remelt during reheating. More importantly, the bamboo continues absorbing the surrounding broth compounds overnight, and the duck meat's collagen continues converting to gelatin, producing a richer, more unctuous broth on day two. This is why experienced Hà Nội cooks make canh măng vịt two days before Tết rather than the day before.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}