'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-lam-ba-na',
    title: `Ba Na Bamboo Tube Rice`,
    subtitle: `Cơm Lam Ba Na — Kon Tum's Bahnar people cook glutinous rice in Trường Sơn mountain bamboo over wood fire — no coconut, pure forest.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cơm lam Ba Na is the bamboo tube rice of the Bahnar (Ba Na) people — the indigenous highland community whose longhouse villages cluster along the Đăk Bla River valley and the forested slopes of the Ngọc Linh mountain range in Kon Tum province. It is the same format as the Ê Đê version from Đắk Lắk but different in every meaningful detail: no coconut milk, different bamboo species, different fire, and a different social context that makes it one of the most philosophically distinct preparations in the Central Highlands culinary tradition.\n\nThe Bahnar cơm lam uses tre lồ ô (Bambusa balcooa) — the dense, thick-walled highland bamboo of the Trường Sơn mountain range that grows at 800-1,500 metres elevation in the forests surrounding Kon Tum city. This bamboo variety has thicker walls than the lowland bamboo used in Mekong Delta preparations, a more resinous inner lining, and when heated over hardwood fire produces a distinctly smoky-earthy steam that infuses the rice with a flavour that the Ê Đê coconut version does not have. The rice absorbs the bamboo's essence directly — without coconut milk to mediate, the bamboo flavour is the dominant note.\n\nThe absence of coconut milk is not a simplification — it is a deliberate cultural statement. The Bahnar highlands have no coconut palms; the coconut is a coastal and lowland ingredient that the mountain communities never incorporated into their cooking tradition. Bahnar cơm lam is seasoned with nothing: no salt, no sugar, no coconut, no added fat. The glutinous rice, the bamboo steam, and the hardwood fire smoke are the complete ingredient list. The restraint is the philosophy.`,
    ingredientSections: [
        {
            title: `Rice`,
            items: [
                { amount: 400, unit: 'g', name: `glutinous rice (gao nep)`, note: `washed and soaked overnight 8-12 hours in plain cold water — no salt, no coconut milk` },
                { amount: 500, unit: 'ml', name: `cold water`, note: `for soaking only — the only liquid used` },
            ],
        },
        {
            title: `Bamboo tubes`,
            items: [
                { amount: 4, name: `fresh tre lo o bamboo sections (Bambusa balcooa)`, note: `30-40cm long, 5-7cm diameter, thick-walled highland variety; substitute: any fresh thick-walled green bamboo; at minimum 6mm wall thickness` },
                { amount: 4, name: `fresh banana leaf pieces`, note: `cut to plug the open top of each tube` },
            ],
        },
        {
            title: `Fire`,
            items: [
                { amount: 1, name: `hardwood fire (preferably forest oak or ironwood)`, note: `the Bahnar use wood from the surrounding Trường Sơn forest — the smoke species matters` },
            ],
        },
        {
            title: `Bahnar dipping salt (muoi ot rung)`,
            items: [
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 4, name: `dried forest chili (ot rung kho)`, note: `small, intensely hot mountain chili — dry-toasted and crushed` },
                { amount: 1, unit: 'tsp', name: `toasted sesame seeds` },
                { amount: 3, name: `fresh la e (holy basil) leaves, minced fine`, note: `the Bahnar addition absent in Ê Đê version` },
            ],
        },
        {
            title: `Traditional accompaniments`,
            items: [
                { amount: 1, name: `grilled wild pork or chicken (thit nuong rung)` },
                { amount: 1, name: `bowl rau rung (foraged forest greens)` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `The Bahnar vs Ê Đê distinction — understanding first`,
            description: `Bahnar cơm lam and Ê Đê cơm lam share the bamboo tube format but diverge at every other point. The Ê Đê preparation uses coconut milk as a soaking and cooking liquid — the rice absorbs coconut fat and sweetness during cooking, producing a rich, fragrant result. The Bahnar preparation uses only water — the rice absorbs nothing but the bamboo's own volatile compounds released as steam during heating. The result is cleaner, earthier, and more directly of the forest. Neither is superior; they are expressions of completely different landscapes and food cultures separated by 200km of mountain terrain.`,
            tip: `The tre lồ ô bamboo of the Trường Sơn is measurably different from the lowland bamboo available in Vietnamese markets or German garden centres. Its wall is thicker (6-8mm vs 4-5mm in lowland varieties), its inner surface is more resinous, and it contains higher concentrations of phenolic compounds that volatilise during heating and infuse the rice. If sourcing bamboo in Germany, the Japanese timber bamboo (Phyllostachys bambusoides) available at bamboo specialist nurseries is the closest available substitute in wall thickness and resin content.`,
        },
        {
            title: `Prepare the bamboo tubes`,
            description: `Cut fresh bamboo sections 30-40cm long, positioning each cut just above a natural node — the node forms the sealed bottom. The wall thickness should be at least 6mm. Sand the open top rim smooth with coarse sandpaper to remove splinters. Do not oil the interior — the natural resin of tre lồ ô provides sufficient non-stick surface and contributes to the flavour. Inspect each tube for cracks by filling with water and observing for 30 seconds — any crack will cause the rice to dry out unevenly during fire cooking.`,
        },
        {
            title: `Drain and pack the soaked rice`,
            description: `Drain the overnight-soaked glutinous rice — the grains will have absorbed water and swelled visibly. Do not add any seasoning. Pack the drained rice into the bamboo tubes using a spoon or funnel — fill to 75% capacity only. The rice will expand during steaming and needs headroom. Press each layer gently as you fill to eliminate air pockets between grains — air pockets prevent even steam distribution and produce unevenly cooked rice. Plug the open top firmly with a piece of banana leaf pressed into the tube opening. The plug must be snug — it keeps the steam inside the tube during fire cooking.`,
            tip: `The 75% fill level for Bahnar cơm lam is slightly less than the 80% for Ê Đê, because the water-soaked rice (without coconut fat) expands more dramatically during cooking — water-soaked grains are denser and expand more uniformly under steam pressure than coconut-milk-soaked grains which are partially saturated with fat. Overfilling causes the banana leaf plug to eject and the top rice to dry out without cooking.`,
        },
        {
            title: `Build the fire and position the tubes`,
            description: `The Bahnar fire method: build a hardwood fire in an open hearth or firepit. Allow flames to establish, then create a bed of glowing coals with active flames above. Lean the bamboo tubes at a 60-70 degree angle against a rock or wooden support over the fire — more upright than the Ê Đê method (70 degrees) because the water-only filling has no fat to prevent scorching at lower angles. The tube should be directly in the flame zone for the first 15 minutes, then moved to the coal zone for the final 30-40 minutes.`,
            tip: `The two-phase fire method — flame first, coals second — is the Bahnar technique that produces even cooking without burning. The initial flame phase rapidly heats the bamboo exterior and begins the steam generation inside the tube. The coal phase maintains the cooking temperature steadily without the flare-ups that cause the bamboo to char unevenly. In a charcoal grill at home: use direct high heat for 15 minutes, then reduce to medium coals for 30-35 minutes.`,
        },
        {
            title: `Cook — 45 to 55 minutes total`,
            description: `Rotate the tubes every 10-12 minutes to ensure even charring on all sides. The bamboo will progress from green to yellow to golden-brown to charred black in places — all of this is correct. The rice is done when the tube produces no sloshing sound when gently shaken (all water has been absorbed and evaporated) and the bamboo is uniformly golden-brown with charred sections. Test by inserting a thin skewer through the banana leaf plug — it should come out clean with no sticky rice attached.`,
        },
        {
            title: `Make the Bahnar dipping salt`,
            description: `Dry-toast dried forest chili in a pan for 60 seconds until fragrant. Cool, then crush in a mortar with coarse salt and toasted sesame to a coarse powder. Add finely minced lá é leaves and fold through. The muối ớt rừng should be rust-red, intensely hot, faintly herbal from the lá é, and smell of toasted chili and sesame. This dipping salt is the only seasoning in a traditional Bahnar cơm lam meal — the rice provides the starch, the salt provides everything else.`,
        },
        {
            title: `Split and eat`,
            description: `Remove the tubes from the fire and rest 5 minutes — the rice continues cooking from residual heat and the bamboo cools enough to handle. Using a heavy knife or cleaver, split each tube lengthwise in one firm stroke. The charred outer bamboo will split to reveal the inner membrane still attached to the rice cylinder. Peel the membrane away — in Bahnar tradition, the membrane is offered to the eldest person at the table as the most flavourful part (it has absorbed the most concentrated bamboo resin during cooking). Break pieces of the rice cylinder by hand and dip in the muối ớt rừng before eating. No other condiment is served or needed.`,
            tip: `The Bahnar eating tradition for cơm lam is communal and unhurried — the tube is split at the communal fire and the pieces shared by hand among those present. There is no individual portioning. The eldest person present takes the first piece; subsequent eating follows seniority. At a Bahnar longhouse, refusing the first piece offered is a social breach equivalent to refusing the host's hospitality. This etiquette applies even when the cơm lam is eaten outside the village context.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}