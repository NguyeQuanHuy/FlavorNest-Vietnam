'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'mam-thai-an-giang',
    title: `Châu Đốc Shredded Fish Pickle`,
    subtitle: `Mắm Thái An Giang — Fermented snakehead fish shredded and marinated with green papaya, garlic, chili, and palm sugar — Châu Đốc's most exported condiment.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '96 hrs',
    rating: 4.9,
    baseServings: 8,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Mắm thái is the refined face of Châu Đốc's mắm culture — a preparation in which fully fermented cá lóc (snakehead fish) is carefully pulled apart into long shreds, then marinated for 3-4 days with shredded green papaya, julienned carrot, thinly sliced garlic, fresh chili, and palm sugar syrup until the fish shreds have absorbed the sweetness and the papaya has absorbed the deep savoury umami of the mắm. The result is a condiment that is simultaneously pungent and sweet, firm and soft, with a complexity that rewards slow eating and cannot be rushed.\n\nThe word thái in the name refers to the julienning technique — thái sợi, to cut into fine strips — applied to both the fish and the papaya. This textural preparation distinguishes mắm thái from the whole-fish mắm cá lóc and from the paste-form mắm ruốc, placing it in a category of its own: a ready-to-eat table condiment that requires no further cooking, eaten directly from the jar with plain white rice, or used as a topping for bún, cháo, and bánh mì.\n\nCháu Đốc produces mắm thái in quantities large enough to supply the entire Mekong Delta and export to Vietnamese communities in the United States, Australia, and Europe. The best-known producers — Bà Giáo Khỏe, Tư Lùn — have been making mắm thái from the same recipes for three and four generations. The commercial product is excellent; the home version, made with freshly fermented cá lóc and ripe palm sugar from the local thốt nốt palms, is better.`,
    ingredientSections: [
        {
            title: `Fermented fish base`,
            items: [
                { amount: 300, unit: 'g', name: `mam ca loc (fermented snakehead fish)`, note: `whole fish from the jar, not paste — pull flesh from bones into long shreds; substitute: any whole-fish Vietnamese mắm` },
            ],
        },
        {
            title: `Marinating mixture`,
            items: [
                { amount: 200, unit: 'g', name: `green papaya (du du xanh)`, note: `peeled and julienned into 5cm thin strips — tossed with 1 tsp salt, rested 10 min, squeezed dry` },
                { amount: 1, name: `carrot, julienned thin` },
                { amount: 8, name: `garlic cloves, sliced paper-thin`, note: `Ly Son garlic if available — not minced, always sliced` },
                { amount: 4, name: `fresh red chili (ot suong), sliced thin` },
                { amount: 3, name: `bird's eye chili (ot hiem), sliced` },
            ],
        },
        {
            title: `Palm sugar marinade (nuoc mam thai)`,
            items: [
                { amount: 100, unit: 'g', name: `palm sugar (duong thot not)`, note: `grated — the An Giang essential; substitute: dark brown sugar` },
                { amount: 3, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 2, unit: 'tbsp', name: `rice vinegar` },
                { amount: 50, unit: 'ml', name: `warm water`, note: `to dissolve the palm sugar` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 2, name: `limes, wedged` },
                { amount: 10, name: `sheets sesame rice cracker (banh trang me)`, note: `for scooping` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the fermented fish`,
            description: `Remove whole fermented cá lóc from its jar — if using commercially fermented mắm, the fish will be intact, firm, and amber-coloured throughout. Rinse briefly under cold water to remove excess salt from the surface. Remove the backbone and any large bones — run your finger along the spine and pull cleanly. Using two forks or your fingers, shred the flesh into long, thin strips following the natural grain of the fish muscle. The shreds should be 5-8cm long and as thin as possible. Discard any remaining bones or skin if preferred, though skin is traditionally included in mắm thái. Set shredded fish aside in a clean bowl.`,
            tip: `The quality of the mắm cá lóc determines everything. Well-fermented fish (6-12 months) will shred cleanly into long, intact fibres — the proteins have broken down enough to be pliable but not so far that the flesh crumbles. Under-fermented mắm (below 3 months) is still too dense and the flavour is harsh. Over-fermented mắm (beyond 18 months) crumbles rather than shreds and has an ammonia note. The correct mắm for thái should smell of deep, complex fermented fish with no off notes — no ammonia, no rancidity.`,
        },
        {
            title: `Prepare the green papaya`,
            description: `Peel green papaya and julienne on a mandoline or by hand into thin strips 5cm long and 2mm wide. Toss with 1 tsp salt in a bowl, rest 10 minutes — the salt draws out the bitter-starchy moisture from the raw papaya. Squeeze firmly in a clean cloth to remove the liquid. The papaya strips should be slightly wilted but still firm. This squeezing step is critical — wet papaya dilutes the palm sugar marinade and prevents the mắm flavour from penetrating the papaya during the marinating period. Julienne the carrot to the same dimensions.`,
        },
        {
            title: `Make the palm sugar marinade`,
            description: `Dissolve grated palm sugar in warm water, stirring until completely smooth. Add fish sauce and rice vinegar. Stir to combine. Taste — the marinade should be sweet-leading, then savoury, then faintly sharp from the vinegar. The palm sugar's caramel-floral flavour should be clearly identifiable. If using dark brown sugar as a substitute, add ½ tsp vanilla extract to approximate the palm sugar's floral note. The marinade will be used to coat and infuse the entire mắm thái mixture over the 3-4 day marinating period.`,
        },
        {
            title: `Combine and massage`,
            description: `In a large bowl, combine shredded mắm fish, squeezed-dry papaya, julienned carrot, sliced garlic, red chili, and bird's eye chili. Pour the palm sugar marinade over everything. Using clean hands, massage the mixture firmly for 3-4 minutes — the massage distributes the marinade evenly and begins the flavour exchange between the sweet marinade, the savoury mắm fish, and the neutral papaya. Every strip of fish and papaya should be coated. The mixture will smell intensely of fermented fish and palm sugar simultaneously.`,
            tip: `The massage technique is what initiates the flavour exchange that makes mắm thái complex rather than just mixed. Without massaging, the marinade sits on the surface; with massaging, it penetrates the papaya fibres and the fish shreds begin releasing their fermented juices into the surrounding liquid. After 5 minutes of massaging, the bowl liquid will be deeper in colour and more complex in aroma than the marinade started.`,
        },
        {
            title: `Marinate 3 to 4 days in the refrigerator`,
            description: `Transfer the mixture to a clean glass jar, pressing down firmly to eliminate air pockets. Seal tightly and refrigerate. Turn the jar upside down and back once a day to redistribute the marinade — the palm sugar settles to the bottom as it dissolves into the mắm juices. After 3 days, open and taste a shred of fish: it should taste sweet-savoury, with the raw garlic now mellowed and integrated, the papaya now flavoured throughout with mắm umami, and the fish shreds soft but still intact. At day 4, the flavours are at peak integration.`,
            tip: `Unlike the mắm cá lóc broth transformation which takes 30 minutes of heat, mắm thái's flavour development is entirely cold and slow. The papaya's own enzymes (papain and chymopapain) continue breaking down the fish proteins slightly during the 3-4 day refrigerator marinate, adding enzymatic complexity to the already-fermented fish. This dual fermentation — microbial (the original mắm) plus enzymatic (the papaya enzymes) — is the chemical foundation of mắm thái's distinctive flavour depth.`,
        },
        {
            title: `Serve the Châu Đốc way`,
            description: `Remove mắm thái from the refrigerator 20 minutes before serving — it is eaten at room temperature, never cold. Spoon onto a plate alongside plain white rice. Place a few leaves of rau răm alongside and a lime wedge. Each person spoons a small amount of mắm thái over hot rice and eats with the herb. The correct ratio in Châu Đốc: a large mound of plain rice, a small spoonful of mắm thái. The mắm thái is intensely flavoured and a little goes far. Alternatively, scoop with sesame rice crackers as a standalone snack. The garlic slices are eaten whole — by day 4 they have mellowed from sharp to sweet-pungent and are one of the most prized elements of the jar.`,
            tip: `Mắm thái keeps refrigerated for 2-3 weeks after the initial 4-day marinate. The flavour continues deepening over the first 2 weeks — the Châu Đốc producers who sell mắm thái commercially actually recommend eating it between day 7 and day 14 after mixing, considering days 3-4 as "young mắm thái" and the first week as full maturity. After 3 weeks the papaya begins to soften past the correct texture and the garlic becomes too pungent.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}