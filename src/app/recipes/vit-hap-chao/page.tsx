'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'vit-hap-chao',
    title: `Duck Steamed with Fermented Tofu`,
    subtitle: `Vịt Hấp Chao — Southern Vietnamese duck steamed with red fermented tofu, galangal, and lemongrass — the richest and most complex steamed dish in the Mekong kitchen.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Vịt hấp chao is the southern Vietnamese duck preparation that belongs to the Hoa (ethnic Chinese) culinary heritage of the Mekong Delta — a whole duck marinated in chao đỏ (red fermented tofu, 紅腐乳 hóng fǔrǔ), galangal, lemongrass, and five-spice, then steamed for 90 minutes until the duck's fat has rendered into the surrounding liquid and the fermented tofu's complex umami has penetrated every layer of the flesh. The result is a duck that is simultaneously more tender and more intensely flavoured than any roasted or braised version — the steam cooking at 100°C preserves the moisture that high-temperature methods drive off, while the chao's proteolytic enzymes continue working on the duck's proteins throughout the long steaming time, tenderising the flesh beyond what heat alone could achieve.\n\nChao đỏ (red fermented tofu) is the ingredient that most distinctly marks vịt hấp chao as a southern Chinese-Vietnamese preparation. It is made by fermenting firm tofu with red yeast rice (Monascus purpureus), salt, and rice wine for 3-6 months — the red yeast produces both the characteristic deep crimson colour and a specific set of flavour compounds (monacolin, sterols, and various esters) that give red fermented tofu its unique profile: simultaneously funky, slightly sweet, intensely savoury, and with a wine-like depth that plain salt or soy sauce cannot replicate. When rubbed onto duck and steamed, the chao's enzymes and flavour compounds penetrate the fat layer and skin, producing a colour and flavour in the finished duck that is the visual and gustatory signature of the dish.\n\nIn the Mekong Delta communities — particularly in Cần Thơ, Vĩnh Long, and Sóc Trăng where the Teochew and Cantonese communities have been settled for generations — vịt hấp chao is the celebration dish prepared for important guests and family gatherings. The dish requires no drama at the table: the steam-cooked duck is simply presented whole, its crimson-tinged skin glistening, and carved without ceremony.`,
    ingredientSections: [
        {
            title: `Duck`,
            items: [
                { amount: 1.8, unit: 'kg', name: `whole duck (vit)`, note: `cleaned, excess cavity fat removed` },
                { amount: 1, unit: 'tbsp', name: `rice wine (ruou gao)`, note: `rubbed inside cavity` },
            ],
        },
        {
            title: `Chao marinade (the defining element)`,
            items: [
                { amount: 4, unit: 'tbsp', name: `chao do (red fermented tofu)`, note: `mashed smooth — 紅腐乳; available at Chinese and Vietnamese grocers in Germany` },
                { amount: 2, unit: 'tbsp', name: `chao do brine (the liquid from the chao jar)`, note: `intensely flavoured — do not discard` },
                { amount: 3, name: `lemongrass stalks, inner white only, minced to paste` },
                { amount: 30, unit: 'g', name: `fresh galangal (rieng tuoi), minced fine` },
                { amount: 4, name: `garlic cloves, minced to paste` },
                { amount: 3, name: `shallots, minced` },
                { amount: 1, unit: 'tbsp', name: `soy sauce` },
                { amount: 1, unit: 'tbsp', name: `oyster sauce` },
                { amount: 1, unit: 'tsp', name: `five-spice powder (ngu vi huong)` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
            ],
        },
        {
            title: `Cavity stuffing`,
            items: [
                { amount: 3, name: `lemongrass stalks, bruised` },
                { amount: 4, name: `slices fresh galangal` },
                { amount: 3, name: `garlic cloves, smashed` },
                { amount: 2, name: `star anise (hoi huong)` },
            ],
        },
        {
            title: `Steaming liquid`,
            items: [
                { amount: 200, unit: 'ml', name: `fresh coconut water (nuoc dua tuoi)`, note: `adds sweetness to the accumulated steaming liquid` },
                { amount: 100, unit: 'ml', name: `rice wine` },
                { amount: 1, unit: 'tbsp', name: `soy sauce` },
            ],
        },
        {
            title: `Ginger dipping sauce`,
            items: [
                { amount: 40, unit: 'g', name: `fresh ginger, grated` },
                { amount: 1.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1.5, unit: 'tbsp', name: `lime juice` },
                { amount: 3, unit: 'tbsp', name: `neutral oil`, note: `heated smoking and poured over ginger` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Understand the chao — the fermented tofu`,
            description: `Chao đỏ (red fermented tofu) is sold in glass jars at Chinese and Vietnamese grocery stores throughout Germany — look for it labelled as 紅腐乳 (hóng fǔrǔ), "red fermented bean curd," or simply "chao" at Vietnamese grocers. The blocks are deep crimson-orange, soft enough to mash with a fork, and smell intensely of fermented soybean and rice wine. The brine in the jar is as flavourful as the solid blocks — use both. Do not substitute white fermented tofu (chao trắng) — the red yeast rice in chao đỏ produces the specific colour and flavour compounds that define this dish. Beancurd cheese from European health food stores is not a substitute.`,
            tip: `The Monascus purpureus (red yeast rice) used to make chao đỏ produces monacolin K — the same compound found in lovastatin (a cholesterol medication). The quantities consumed through chao in cooking are far below pharmacological doses, but people taking statin medications should be aware of the botanical overlap. This is not a contraindication to eating vịt hấp chao — it is food science context that connects this ancient fermented ingredient to modern pharmaceutical chemistry, a connection that reveals how long humans have been using Monascus fermentation products.`,
        },
        {
            title: `Make and apply the chao marinade`,
            description: `Mash chao đỏ blocks in a bowl until smooth. Add chao brine, lemongrass paste, minced galangal, garlic paste, shallots, soy sauce, oyster sauce, five-spice, sugar, and black pepper. Mix thoroughly into a deeply fragrant, crimson-orange paste. Rub rice wine inside the cavity. Rub the chao marinade over the entire duck exterior — under the skin wherever possible by separating the skin from the breast and thigh meat with your fingers and rubbing directly onto the flesh. Stuff the cavity with bruised lemongrass, galangal, garlic, and star anise. Marinate minimum 4 hours, ideally overnight refrigerated.`,
            tip: `The under-skin marinade application for vịt hấp chao is essential for the same reason as in the mắc mật roast duck: duck skin is thick and relatively impermeable to marinades applied only to the exterior. The chao's colour and flavour compounds penetrate the skin slowly — after overnight marination, the skin will be deeply red-orange on the exterior, but without under-skin application the flesh beneath remains pale. Under-skin rubbing ensures that the chao's proteolytic enzymes begin working on the breast and thigh flesh during the marination period, pre-tenderising the meat before the steam cooking begins.`,
        },
        {
            title: `Set up the steaming vessel`,
            description: `Use a large wok with a domed lid or a stockpot large enough to hold the whole duck on a rack. Place a steaming rack or upturned bowl in the bottom. Pour in the coconut water, rice wine, and soy sauce — this forms the steaming liquid base. The duck will be placed above this liquid on the rack. The coconut water's sugars will caramelise slightly from the heat of prolonged steaming, adding a faint sweetness to the accumulated cooking liquid. Bring the steaming liquid to a vigorous boil before adding the duck.`,
        },
        {
            title: `Steam — 90 minutes`,
            description: `Place the marinated duck breast-side up on the steaming rack. Cover with the lid. Steam over vigorous boiling at full heat for 30 minutes — this initial high-heat phase renders the duck's subcutaneous fat rapidly, which then bastes the meat from within as it liquefies. Reduce to medium heat and steam for the remaining 60 minutes. Check the water level every 30 minutes — replenish with boiling water as needed to maintain vigorous steam. The duck is done when the thigh joint moves freely and the juices from the thigh run clear when pierced.`,
            tip: `The 90-minute steam at sustained temperature is what allows the chao's proteolytic enzymes (proteases naturally present in the fermented tofu) to work on the duck flesh simultaneously with the heat cooking. These enzymes are most active at 40-60°C — they begin working as the duck heats up to these temperatures in the first 20-30 minutes and continue breaking down proteins until the temperature exceeds their denaturation point at approximately 70°C. This enzymatic pre-tenderisation produces a measurably more tender result than steaming an unmarinated duck for the same time.`,
        },
        {
            title: `Collect the steaming liquid`,
            description: `When the duck is done, carefully collect all the liquid that has accumulated in the steaming vessel — this liquid is a concentrated extract of the duck fat, chao, coconut water, and all the aromatics. It is the most flavourful element produced by the cooking process. Skim the excess fat from the surface. Pour the remaining liquid into a small saucepan and reduce by half over high heat to produce a concentrated sauce. This reduction — deep crimson, intensely savoury, slightly sweet from the coconut water — is served alongside the duck as its natural sauce over rice.`,
        },
        {
            title: `Rest, carve, and serve`,
            description: `Rest the cooked duck 10 minutes before carving. The skin will be deep crimson-orange from the chao, glistening with rendered fat, and slightly sticky to the touch. Carve at the table: separate the legs at the hip joint, the wings at the shoulder, and slice the breast into thick pieces. Each piece should show the crimson-tinged exterior and the moist, well-seasoned flesh beneath. Serve with the reduced steaming liquid poured over the carved pieces, ginger dipping sauce, steamed rice, rau răm, cucumber, and lime.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}