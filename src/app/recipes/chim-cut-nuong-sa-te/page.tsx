'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chim-cut-nuong-sa-te',
    title: `Sa Tế Grilled Quail`,
    subtitle: `Chim Cút Nướng Sa Tế — Southern Vietnamese grilled quail marinated in lemongrass chili paste and mỡ hành — the most flavourful small bird in the Vietnamese grilling tradition.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '2 hrs 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Chim cút nướng sa tế is the grilled quail preparation that southern Vietnamese nhậu (drinking food) culture has elevated to an art form — small, intensely flavoured Coturnix japonica quail marinated in sa tế (lemongrass-chili paste), fish sauce, and honey, then grilled over charcoal until the skin is lacquered deep mahogany and the flesh inside is just cooked through, still juicy, and carrying the full aromatic complexity of the sa tế marinade.\n\nThe quail (chim cút, Coturnix japonica — the Japanese quail) is among the most flavourful birds available in the Vietnamese market — its small size (100-150g whole) means a high skin-to-flesh ratio that, when grilled, produces more caramelised surface per gram of meat than any larger bird. The quail's dark, myoglobin-rich flesh has an intensity that chicken cannot match, and its fat content is proportionally higher than chicken breast, producing a self-basting effect during grilling that keeps the small bird moist despite the high skin surface area that would otherwise dry out quickly.\n\nSa tế is the southern Vietnamese chili-lemongrass paste — a condiment and marinade base made by pounding or blending fresh lemongrass, red chili, garlic, and shallots into a fragrant paste, then frying in oil until deeply fragrant and slightly caramelised. The fried sa tế's Maillard-produced compounds, combined with the lemongrass's citral compounds and the chili's capsaicin, produce a marinade whose flavour is simultaneously bright (lemongrass), hot (chili), savoury (the fried aromatics), and sweet (the caramelised shallots). This combination is specifically calibrated for small, intensely flavoured birds — the assertiveness of the sa tế matches the quail's flavour intensity in a way that would overwhelm a milder protein.`,
    ingredientSections: [
        {
            title: `Quail`,
            items: [
                { amount: 8, name: `whole quail (chim cut / Coturnix japonica)`, note: `100-150g each — butterflied (backbone removed) or spatchcocked; fresh preferred over frozen` },
                { amount: 1, unit: 'tbsp', name: `rice wine (ruou gao)`, note: `cleaning rub` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `cleaning rub` },
            ],
        },
        {
            title: `Homemade sa tế paste`,
            items: [
                { amount: 4, name: `lemongrass stalks, inner white only, minced very fine` },
                { amount: 6, name: `red bird's eye chili, minced` },
                { amount: 2, name: `red long chili (ot do dai), minced`, note: `milder heat, more colour` },
                { amount: 5, name: `garlic cloves, minced to paste` },
                { amount: 3, name: `shallots, minced` },
                { amount: 3, unit: 'tbsp', name: `neutral oil`, note: `for frying the paste` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `sugar` },
            ],
        },
        {
            title: `Quail marinade`,
            items: [
                { amount: 4, unit: 'tbsp', name: `sa te paste (from above)`, note: `the fully fried, cooled paste` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tbsp', name: `honey` },
                { amount: 1, unit: 'tbsp', name: `soy sauce` },
                { amount: 1, unit: 'tsp', name: `five-spice powder (ngu vi huong)`, note: `small amount — southern grilling note` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
            ],
        },
        {
            title: `Mỡ hành basting sauce`,
            items: [
                { amount: 4, name: `spring onions, sliced thin` },
                { amount: 4, unit: 'tbsp', name: `neutral oil` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tbsp', name: `sa te paste`, note: `stirred in — spiced mỡ hành for basting` },
            ],
        },
        {
            title: `Muối tiêu chanh dipping`,
            items: [
                { amount: 1.5, unit: 'tsp', name: `coarse salt` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, unit: 'tbsp', name: `fresh lime juice` },
                { amount: 1, name: `bird's eye chili, minced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 1, name: `head butter lettuce` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 2, name: `limes, wedged` },
                { amount: 4, name: `portions steamed white rice or bánh mì` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the sa tế paste — the flavour foundation`,
            description: `Heat neutral oil in a pan over medium heat. Add minced lemongrass and stir-fry 3-4 minutes until softened and fragrant — the raw lemongrass's harsh, slightly astringent top notes cook away, leaving the clean citral aroma. Add minced garlic and shallots. Continue frying 2-3 more minutes until golden. Add minced chilies and stir 2 more minutes until the paste is fragrant, slightly caramelised, and the oil has turned orange-red from the chili pigments. Add salt and sugar. Cool completely. The fried sa tế should be deeply fragrant, slightly sticky, and a deep orange-red. It keeps refrigerated for 2 weeks and improves over the first 3 days as the flavour compounds integrate.`,
            tip: `Frying the sa tế paste before using it as a marinade is the technique that transforms a raw lemongrass-chili mixture into something far more complex. Raw lemongrass contains citral (the dominant aromatic compound) alongside harsher terpene compounds — the cooking process volatilises the harsh compounds while the citral remains, producing a cleaner, more concentrated lemongrass aroma. The caramelisation of the shallots and garlic during frying produces Maillard compounds that add depth missing from raw pastes. A raw sa tế marinade produces a good result; a properly fried sa tế produces an exceptional one.`,
        },
        {
            title: `Butterfly the quail`,
            description: `Using kitchen scissors, cut along both sides of each quail's backbone and remove it. Press the quail flat — butterfly/spatchcock position. Trim the wing tips. This flat position maximises the skin surface area exposed to the grill heat simultaneously, producing even browning across the entire bird rather than the uneven colouring of a whole round quail. The small quail in butterfly position is only 2-3cm thick throughout — this even thickness allows the centre to cook through in the same time the surface achieves its mahogany colour.`,
            tip: `The backbone removal and butterflying is mandatory for chim cút nướng sa tế — not optional. A whole round quail grilled over charcoal produces an uneven result: the breast skin is done while the leg joint is still raw, or the leg is correctly cooked while the breast is dry. The butterfly position's even thickness solves this problem by presenting all surfaces at the same distance from the heat simultaneously. The removed backbones can be frozen for stock.`,
        },
        {
            title: `Marinate — minimum 2 hours`,
            description: `Combine cooled fried sa tế paste, fish sauce, honey, soy sauce, five-spice, black pepper, and sesame oil. Mix thoroughly. Rub over all surfaces of the butterflied quail — under the skin wherever possible, into the joint areas, over the skin. The honey in the marinade will begin to form a sticky coating on the skin surface within 30 minutes. Marinate refrigerated for minimum 2 hours. Overnight marination produces measurably more flavourful quail — the lemongrass citral compounds continue penetrating the flesh throughout the marination period, infusing the dense dark meat.`,
        },
        {
            title: `Make the spiced mỡ hành basting sauce`,
            description: `Place sliced spring onions and salt in a bowl. Heat oil until smoking. Pour over spring onions. Stir in sa tế paste while still hot — the residual heat blooms the sa tế's aromatic compounds in the oil. This spiced mỡ hành will be brushed over the quail during the final minutes of grilling and drizzled over the finished birds on the plate. The combination of the spring onion's volatile sulfur compounds and the sa tế's citral and capsaicin in hot oil produces an intensely aromatic basting liquid that caramelises on the hot quail surface during the final grill minutes.`,
        },
        {
            title: `Grill over charcoal — 12 to 15 minutes`,
            description: `Prepare charcoal at medium-high heat. Grill butterflied quail skin-side down for 5-6 minutes until deep golden and the honey marinade has caramelised to a lacquered surface. Flip and grill 4-5 minutes on the flesh side. Flip again to skin side for the final 2-3 minutes — brush generously with spiced mỡ hành in the last 2 minutes and allow it to caramelise on the surface. The quail is done when the juices from the thigh joint run clear and the skin is deep mahogany. Total time: 12-15 minutes at medium-high heat. Rest 3 minutes — quail cooks through quickly and benefits from even a short rest.`,
            tip: `The small size of quail (100-150g) means it can go from perfectly cooked to overdone in 90 seconds at high heat. The 12-15 minute total cooking time at medium-high produces the correct result: skin fully caramelised and lacquered, flesh just cooked through and still juicy. At medium heat, add 3-4 minutes. At high heat, reduce by 2-3 minutes but watch constantly. The internal temperature target is 70°C at the thickest part of the thigh — lower than chicken because the dense dark quail flesh becomes dry above 74°C faster than chicken.`,
        },
        {
            title: `Serve the nhậu way`,
            description: `Arrange the lacquered quail on a plate with the spiced mỡ hành drizzled over each bird — the orange-red oil pools around the quail and the spring onion is scattered over the top. Serve with muối tiêu chanh in small individual dipping bowls, the herb plate of butter lettuce, rau răm, and mint, and cucumber alongside. The correct eating of chim cút nướng sa tế: pick up the whole bird with both hands, bite from the breast first — the crispy lacquered skin shatters and releases the sa tế-infused fat beneath. Work toward the legs. The small bones are edible — experienced eaters consume the entire bird except the backbone, including the wing tips and the leg bones. Each bird is eaten in 3-4 large bites with muối tiêu chanh and a wrap of rau răm between bites. In southern Vietnam, chim cút nướng is the quintessential beer companion — the intense sa tế heat, the lime brightness, and the cold beer produce the nhậu flavour experience in its purest form.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}