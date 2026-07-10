'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'keo-guong-quang-ngai',
    title: `Quảng Ngãi Mirror Candy`,
    subtitle: `Kẹo Gương Quảng Ngãi — Translucent malt sugar candy pulled and stretched until it shines like a mirror, a three-hundred-year confection from Thu Xà village.`,
    category: 'DESSERT',
    difficulty: 'Hard',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 20,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Kẹo gương (mirror candy) is the confection that has been made in Thu Xà village, Tư Nghĩa district, Quảng Ngãi for at least three hundred years — a hard, translucent malt sugar candy whose surface is pulled and worked until it develops a glass-like reflective sheen that gives it its name. Held up to light, a correctly made piece of kẹo gương is genuinely transparent, the same pale amber colour throughout, with a surface smooth enough to reflect a dim image. This optical quality is the mark of quality that Thu Xà candy makers have used to assess their product for generations.\n\nThe candy is made from mạch nha — a traditional Vietnamese malt syrup produced by fermenting glutinous rice with germinated barley or wheat, then cooking the liquid down to a thick, dark amber paste. Mạch nha is the oldest sweetener in Vietnamese confectionery, predating refined cane sugar by centuries in the central Vietnamese culinary tradition, and it has a flavour that no refined sugar preparation can replicate: sweet but complex, with notes of toasted grain, faint bitterness, and a caramel depth that comes from the Maillard reactions during the long cooking of the fermented grain liquid.\n\nThe making of kẹo gương requires three skills: the correct cooking of the mạch nha to the precise hard crack stage (150-155°C), the pulling technique that aerates and aligns the sugar crystals into the mirror structure, and the cutting technique that produces the characteristic thin rectangular pieces without shattering. All three are learned through repetition. This recipe documents the Thu Xà method as practiced by the village's remaining candy-making families.`,
    ingredientSections: [
        {
            title: `Sugar base`,
            items: [
                { amount: 400, unit: 'g', name: `mach nha (Vietnamese malt syrup)`, note: `traditional glutinous rice malt — available at Vietnamese grocers; substitute: light corn syrup + 1 tsp barley malt extract` },
                { amount: 200, unit: 'g', name: `white sugar (duong cat trang)` },
                { amount: 60, unit: 'ml', name: `water` },
                { amount: 1, unit: 'tbsp', name: `rice vinegar`, note: `prevents crystallisation during cooking` },
                { amount: 0.25, unit: 'tsp', name: `salt`, note: `amplifies the malt flavour` },
            ],
        },
        {
            title: `Optional flavourings`,
            items: [
                { amount: 1, unit: 'tsp', name: `vanilla extract`, note: `added off heat — some Thu Xà families include it` },
                { amount: 0.5, unit: 'tsp', name: `ground ginger (bot gung)`, note: `traditional addition — adds warmth` },
            ],
        },
        {
            title: `Equipment`,
            items: [
                { amount: 1, name: `candy thermometer`, note: `non-negotiable — visual tests are unreliable at the hard crack stage` },
                { amount: 1, name: `heavy-bottomed saucepan (not non-stick)` },
                { amount: 1, name: `silicone mat or marble slab`, note: `lightly oiled — for pulling the candy` },
                { amount: 1, name: `pair of heat-resistant silicone gloves`, note: `the candy reaches 150°C — burns are severe` },
                { amount: 1, name: `oiled scissors or sharp knife`, note: `for cutting the finished candy` },
            ],
        },
    ],
    steps: [
        {
            title: `Understand mạch nha — the irreplaceable base`,
            description: `Mạch nha is not malt extract, not corn syrup, not glucose syrup — it is a specifically Vietnamese preparation made by allowing germinated grain (barley or wheat) to convert the starches of cooked glutinous rice into maltose through enzymatic action, then cooking the resulting liquid down to a thick, amber syrup. The maltose content (approximately 60-70% of total sugars) is what produces kẹo gương's specific texture: harder than glucose-based candy at room temperature, but with a slower, more gradual hardening after pulling that gives the candy maker more working time. Mạch nha is available at Vietnamese grocery stores in Germany — look for it labelled as "mạch nha" or "đường mạch nha" in brown glass jars or sealed packets from Vietnamese food suppliers online.`,
            tip: `If mạch nha is genuinely unavailable: substitute 300g light corn syrup combined with 1 tsp barley malt extract (available at homebrew supply stores in Germany — Braumarkt, Hopfen und Malz). This combination approximates the maltose ratio and the grain flavour note. The mirror quality of the finished candy will be slightly less perfect than the authentic version because corn syrup's glucose-fructose ratio pulls differently from mạch nha's maltose-dominant profile, but the result is a recognisable kẹo gương.`,
        },
        {
            title: `Cook to hard crack — 150-155°C`,
            description: `Combine mạch nha, white sugar, water, rice vinegar, and salt in a heavy-bottomed saucepan. Stir over low heat until sugar dissolves completely — do not allow to boil yet. Once dissolved, increase heat to medium-high and stop stirring entirely. Clip the candy thermometer to the side of the pan. Cook without stirring — any agitation at this stage causes premature crystallisation that cannot be corrected. Watch the thermometer: at 130°C the syrup will be pulling threads; at 145°C it will be very stiff; at 150-155°C it is at the hard crack stage. Remove from heat immediately at 150°C.`,
            tip: `The rice vinegar is the anti-crystallisation agent — its acetic acid partially inverts the sucrose into glucose and fructose, which inhibit each other's crystallisation. Without it, the candy may grain (turn opaque and granular) during pulling. Do not substitute lemon juice, which contains citric acid and behaves differently at high temperatures. Do not omit the acid entirely — unprotected sucrose candy at hard crack stage will grain within minutes of removal from heat.`,
        },
        {
            title: `Pour and cool partially`,
            description: `Pour the hot syrup immediately onto a lightly oiled silicone mat or marble slab. Do not scrape the saucepan — any sugar on the sides that has crystallised will introduce nucleation points into the candy mass. Allow the syrup to cool on the mat until the edges are firm and the centre is still pliable — approximately 5-7 minutes depending on ambient temperature. The mass should be warm enough to handle but not so hot that it flows freely. Test by pressing the edge with an oiled finger: it should hold a fingerprint without running.`,
            tip: `The cooling time on the mat is the variable most affected by Đức's cooler climate. In Thu Xà village at 28-32°C, the candy takes 5 minutes to reach the pulling temperature. In a German kitchen at 20°C, it may take only 3 minutes. Watch the surface rather than the clock — the candy develops a matte, slightly wrinkled appearance on the surface when it is ready to pull. If you begin pulling too early (still too hot), it flows rather than stretches; too late (too cool), it shatters rather than stretches.`,
        },
        {
            title: `Pull the candy — the mirror technique`,
            description: `Put on heat-resistant silicone gloves. Gather the partially cooled candy mass from the mat and begin pulling: stretch the mass between your hands to about 40cm, fold it back on itself, twist, and stretch again. Repeat this pull-fold-twist cycle continuously for 8-10 minutes. As you pull, the candy will change: it begins amber and slightly translucent, becomes progressively paler and more opaque as air is incorporated, then — at the critical moment around 6-7 minutes — begins to develop a satin sheen as the sugar crystals align. Continue pulling for 2-3 more minutes past this point until the surface is genuinely reflective — hold it up to a light source and you should see a dim reflection of yourself in the surface.`,
            tip: `The mirror quality develops when the pulling has aligned the amorphous sugar mass into a regular crystalline structure with a flat, optically smooth surface. This is the same principle as silk — disordered fibres produce a matte surface; aligned fibres produce a sheen. The candy must be pulled in consistent, directional strokes rather than random folding to achieve this alignment. Thu Xà candy makers pull in one direction, fold, and pull in the same direction again — not alternating directions, which disrupts the alignment.`,
        },
        {
            title: `Shape into a log`,
            description: `When the mirror surface is achieved, work quickly — the candy continues cooling and will become brittle within minutes. Roll the pulled candy mass into a long cylinder about 2cm in diameter on the oiled mat. Work from the centre outward, rolling with your palms, maintaining even pressure to produce a uniform diameter throughout. The cylinder should be about 40-50cm long. If the candy begins hardening before the shaping is complete, place it briefly under a heat lamp or in a warm (50°C) oven for 60 seconds to restore pliability — do not use higher heat, which will melt the mirror structure you have developed.`,
        },
        {
            title: `Cut into pieces`,
            description: `Using oiled scissors or a sharp oiled knife, cut the candy cylinder into pieces approximately 3cm long with a single, firm, decisive motion — do not saw, which shatters the candy. Each piece should show the mirror surface on the pulled exterior and a matte, slightly crystalline interior at the cut face. Allow pieces to cool completely on parchment paper — do not stack until fully hardened, which takes 15-20 minutes at room temperature. Store in an airtight tin with parchment between layers. Kẹo gương keeps at room temperature for 2-3 weeks.`,
            tip: `The cutting technique is the final skill. The scissor or knife must be oiled — dry metal sticks to the candy and tears rather than cuts cleanly. Cut at a 90-degree angle to the cylinder axis. The cut face will be rougher than the mirror exterior — this contrast between the reflective pulled surface and the matte cut interior is the visual signature of authentic kẹo gương. A candy with a matte exterior has not been pulled sufficiently; a candy with a mirror cut face has been cut before fully cooling.`,
        },
        {
            title: `Serve and store`,
            description: `Kẹo gương is eaten at room temperature, one or two pieces at a time, with hot green tea — the bitterness of the tea cuts through the sweetness of the malt candy and the contrast between the two is considered the correct way to experience the confection. In Thu Xà, kẹo gương is given as gifts during Tết wrapped in coloured paper, stacked in small tins, and presented as a symbol of the village's identity. The candy should be hard but not tooth-breaking — it will slowly soften in the mouth over 3-4 minutes of gentle sucking, releasing the malt flavour gradually. Do not chew immediately — the mirror surface is the experience, and it is lost in the first crunch.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}