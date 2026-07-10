'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-luon-quang-ngai',
    title: `Quảng Ngãi Eel Congee`,
    subtitle: `Cháo Lươn Quảng Ngãi — River eel congee with roasted peanuts, crispy fried shallots, and a turmeric-lemongrass eel topping — the southern Quảng Ngãi version distinct from Nghệ An.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cháo lươn Quảng Ngãi belongs to the central Vietnamese tradition of eel congee but diverges from the Nghệ An version in three specific ways that produce a meaningfully different bowl. Where Nghệ An uses mắm tôm as the primary condiment and heavy turmeric as the dominant colour, Quảng Ngãi's version adds roasted peanuts and a larger quantity of fried shallots as textural and flavour elements within the congee itself — not just as garnish — and seasons the eel topping with a combination of lemongrass and fresh galangal that gives the stir-fry a brighter, more aromatic quality than the Nghệ An preparation.\n\nThe eel used is lươn đồng (Monopterus albus) from the rice paddies and irrigation channels of the Quảng Ngãi plains — particularly from the lowland districts of Mộ Đức, Đức Phổ, and the banks of the Trà Khúc and Vệ rivers. Quảng Ngãi's lowland geography means the eels here feed in flooded rice paddies rather than highland streams, producing flesh that is slightly fattier and more gelatinous than the highland eel of Nghệ An or the mountain eel of Đà Lạt.\n\nThe peanuts — roasted until deeply golden and crushed to a rough powder rather than left whole — are stirred directly into the congee in the final minutes of cooking, where they absorb the eel broth and become soft on the outside while retaining a slight crunch at the centre. This peanut-in-congee technique is distinctly Quảng Ngãi and appears in no other regional cháo lươn preparation in Vietnam.`,
    ingredientSections: [
        {
            title: `Eel`,
            items: [
                { amount: 600, unit: 'g', name: `fresh freshwater eel (luon dong)`, note: `Monopterus albus — cleaned and sectioned; substitute: conger eel or river eel from Asian fishmonger` },
                { amount: 2, unit: 'tbsp', name: `coarse salt`, note: `for cleaning slime` },
                { amount: 1, unit: 'tbsp', name: `rice vinegar`, note: `second cleaning step` },
                { amount: 2, unit: 'L', name: `water`, note: `for eel broth` },
            ],
        },
        {
            title: `Congee base`,
            items: [
                { amount: 200, unit: 'g', name: `white rice (gao te)`, note: `rinsed 3 times — whole grain, not broken; Quảng Ngãi version uses whole rice not broken` },
                { amount: 1.5, unit: 'L', name: `eel broth` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Stir-fried eel topping`,
            items: [
                { amount: 1.5, unit: 'tsp', name: `ground turmeric (bot nghe)` },
                { amount: 3, name: `lemongrass stalks, inner white only, minced to paste` },
                { amount: 25, unit: 'g', name: `fresh galangal (rieng tuoi), minced fine` },
                { amount: 5, name: `garlic cloves, minced` },
                { amount: 3, name: `shallots, minced` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Quảng Ngãi additions (what makes this different)`,
            items: [
                { amount: 80, unit: 'g', name: `roasted peanuts (dau phong rang)`, note: `crushed to rough powder — stirred into congee in final 5 minutes` },
                { amount: 5, unit: 'tbsp', name: `fried shallots (hanh phi)`, note: `more generous than Nghệ An version — half stirred in, half scattered on top` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, name: `bunch sawtooth coriander (ngo gai)` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
            ],
        },
    ],
    steps: [
        {
            title: `Clean the eel`,
            description: `Rub eel sections vigorously with coarse salt to remove the mucus coating — work against the skin. Leave 2 minutes, rinse under cold water. Repeat with rice vinegar — rub, leave 2 minutes, rinse. Pat completely dry. The Quảng Ngãi cleaning method uses slightly more vinegar than the Nghệ An method because the lowland paddy eel has a thicker mucus layer from its richer feeding environment. The skin should feel slightly rough and clean rather than slippery after the two-step cleaning.`,
            tip: `Lowland Quảng Ngãi eel (from paddy fields) is fattier than highland eel and has a richer, more gelatinous flesh. This fat contributes to the congee broth significantly — the eel broth from paddy eel has a natural body and richness that highland eel broth lacks. Do not skim the fat from the surface of the eel broth before using it in the congee — it is the source of the congee's characteristic richness.`,
        },
        {
            title: `Make the eel broth`,
            description: `Place eel head, tail, and thinner sections in a pot with 2 L cold water. Add a bruised lemongrass stalk and 2 slices of galangal. Bring to a boil, skim foam thoroughly for the first 10 minutes — paddy eel produces more foam than river eel due to higher fat content. Reduce to a low simmer for 45 minutes. Strain through a fine sieve, pressing solids. The broth should be slightly golden with a light sheen from the eel fat. Season lightly with salt.`,
        },
        {
            title: `Cook the whole-grain congee`,
            description: `Combine rinsed whole rice with 1.5 L eel broth in a heavy-bottomed pot. Bring to a boil stirring occasionally, then reduce to the lowest possible simmer. Cook uncovered, stirring every 10 minutes, for 50-60 minutes. Unlike the broken rice of Nghệ An cháo lươn, Quảng Ngãi uses whole grain — the congee will be slightly more textured, with individual grains softened but not completely dissolved. The consistency should be thick and porridge-like but with visible grain structure. Add remaining broth in small amounts if it thickens too much.`,
            tip: `The whole-grain vs broken-grain distinction is the most visible difference between Quảng Ngãi and Nghệ An cháo lươn. Whole grain produces a congee where you can see and feel the rice grains — slightly firmer, less uniform than the dissolved Nghệ An version. This is a deliberate textural preference in Quảng Ngãi, not a shortcut. The peanuts stirred in later will also provide crunch against the soft whole grains in a way that would not work in a dissolved broken-rice congee.`,
        },
        {
            title: `Roast and prepare the peanuts`,
            description: `Place raw peanuts in a dry pan over medium heat. Stir constantly for 8-10 minutes until evenly golden-brown and fragrant. Cool completely, then rub between your palms to remove the skins — blow away the skin debris. Crush in a mortar to a rough powder: some fine dust, some small pieces, some half-peanuts. The variation in size is intentional — the fine powder thickens the congee slightly when stirred in, the larger pieces provide crunch. Do not use a food processor which makes the powder too uniform and fine.`,
        },
        {
            title: `Stir-fry the eel topping`,
            description: `Pat thick eel body sections dry. Heat neutral oil in a wok over high heat until smoking. Add minced lemongrass, galangal, garlic, and shallots — stir 90 seconds until fragrant and golden. Add eel pieces, sear without moving 60 seconds. Add turmeric, fish sauce, sugar, and black pepper. Toss continuously for 2-3 minutes until eel is cooked through, golden-orange, and fragrant. The lemongrass-galangal combination gives the Quảng Ngãi topping a brighter, more citrusy aroma than the single-lemongrass Nghệ An version.`,
            tip: `The galangal in the Quảng Ngãi eel stir-fry is the key aromatic distinction from Nghệ An. Galangal has a camphoric, slightly piney note that lemongrass alone does not provide. Together they produce a two-register aromatic: lemongrass provides the citrus-floral top note, galangal provides the deeper, more resinous base note. Use fresh galangal only — dried or ground galangal has lost the volatile oils that make this combination work.`,
        },
        {
            title: `Add peanuts and shallots to the congee`,
            description: `In the final 5 minutes of congee cooking: stir half the crushed peanuts and half the fried shallots directly into the congee pot. Stir thoroughly and simmer 5 more minutes — the peanuts will absorb broth and soften on the outside while retaining slight crunch inside. The fried shallots will partially dissolve into the congee, releasing their caramelised onion flavour throughout the bowl rather than sitting only on top. This internal seasoning is the Quảng Ngãi technique that makes this version different from all other cháo lươn.`,
        },
        {
            title: `Assemble and serve`,
            description: `Ladle thick congee into deep bowls. Arrange stir-fried eel pieces on top. Scatter remaining crushed peanuts, fried shallots, spring onion, ngò gai, and rau răm over the surface. Add a pinch of coarse black pepper. Serve with lime wedge and sliced chili. The bowl should show three distinct texture layers: creamy congee at the base, golden eel topping in the middle, crispy peanuts and shallots on top. Each spoonful should combine all three. Eat immediately — the peanuts lose their textural interest within 5 minutes of assembly.`,
            tip: `Unlike cháo lươn Nghệ An where mắm tôm is mandatory, Quảng Ngãi version is complete without it. The peanuts and fried shallots provide enough textural and flavour complexity that an additional condiment would overcrowd the bowl. The correct condiment here is a squeeze of lime directly into the bowl and fresh chili for heat — both of which brighten the eel and peanut flavours without adding a competing element.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}