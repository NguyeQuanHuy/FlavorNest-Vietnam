'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cha-tom-thanh-hoa',
    title: `Thanh Hóa Sugarcane Shrimp Cake`,
    subtitle: `Chả Tôm Thanh Hóa — Hand-pounded shrimp paste grilled on sugarcane skewers over charcoal, eaten with rice paper, green mango, and mắm tôm.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Chả tôm Thanh Hóa is one of the most technically demanding street foods of the north-central coast — a preparation in which fresh shrimp are pounded by hand into a smooth, elastic paste, seasoned with pork fat, fish sauce, and white pepper, then moulded by wet hands around a length of fresh sugarcane and grilled over charcoal until the outer surface is deeply golden and faintly caramelised while the interior remains springy and just cooked through. As the skewer heats, the sugarcane releases its juice into the shrimp paste from the inside — a slow, invisible basting that adds a faint sweetness to every bite that no marinade could replicate.\n\nThe dish is associated specifically with Sầm Sơn beach in Thanh Hóa province, where it has been sold at beachside stalls since at least the French colonial era, when Sầm Sơn was the premier resort destination for the northern Vietnamese elite and French administrators. The shrimp used are cá tôm he — small, sweet, firm-fleshed shrimp from the shallow waters of the Mã River estuary and the Gulf of Tonkin coast. Their natural sweetness is the foundation of the dish.\n\nWhat distinguishes chả tôm Thanh Hóa from the Huế version (chả tôm Huế, which uses a banana leaf wrapping and steaming method) and the southern sugarcane shrimp (chạo tôm) is the sugarcane skewer technique combined with direct charcoal grilling — no wrapping, no steaming, the paste exposed directly to flame on all sides. The charcoal char on the exterior is not incidental; it is the flavour contrast that makes the dish work.`,
    ingredientSections: [
        {
            title: `Shrimp paste (cha tom)`,
            items: [
                { amount: 500, unit: 'g', name: `fresh shrimp (tom tuoi)`, note: `peeled and deveined — medium size; very fresh, not frozen` },
                { amount: 80, unit: 'g', name: `pork fatback (mo luong heo)`, note: `minced fine — the fat binds the paste and prevents drying on the grill` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `white pepper, finely ground`, note: `white pepper not black — black pepper darkens the paste` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 3, name: `garlic cloves, minced to paste` },
                { amount: 1, unit: 'tsp', name: `tapioca starch (bot nang)`, note: `improves elasticity and holds moisture during grilling` },
                { amount: 1, unit: 'tsp', name: `sesame oil`, note: `added last — fragrance only` },
            ],
        },
        {
            title: `Sugarcane skewers`,
            items: [
                { amount: 8, name: `fresh sugarcane sections (mia tuoi)`, note: `15 cm long, 2 cm diameter — peeled; available at Vietnamese/Asian grocers in Germany; substitute: lemongrass stalks, thick end` },
            ],
        },
        {
            title: `Mắm tôm dipping sauce (Thanh Hóa style)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `shrimp paste (mam tom dac)`, note: `northern-style thick paste, not liquid` },
                { amount: 1.5, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `warm water` },
                { amount: 3, name: `bird's eye chili, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `heated until shimmering then poured over the mixed sauce — blooms the aroma` },
            ],
        },
        {
            title: `Accompaniments`,
            items: [
                { amount: 12, name: `sheets rice paper (banh trang)`, note: `softened briefly in warm water` },
                { amount: 200, unit: 'g', name: `green mango, shredded`, note: `tossed with pinch of salt — the Thanh Hoa addition absent in southern versions` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 1, name: `bunch perilla (tia to)` },
                { amount: 1, name: `cucumber, cut into batons` },
                { amount: 150, unit: 'g', name: `bean sprouts (gia do)`, note: `raw` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Pound the shrimp by hand`,
            description: `Pat shrimp completely dry with paper towels — surface moisture is the enemy of a smooth, elastic paste. Chill shrimp in the freezer for 15 minutes until very cold but not frozen. Working in small batches in a stone mortar, pound shrimp with firm, rhythmic strokes for 5-6 minutes per batch. The paste should transition through three stages: first broken pieces, then a coarse mince, then a smooth, sticky paste that pulls away from the mortar walls cleanly. Combine all batches in a bowl. Add minced pork fatback and pound or mix vigorously for 2 more minutes — the fat must be fully incorporated, not visible as separate pieces.`,
            tip: `The hand-pounding step is what gives chả tôm Thanh Hóa its signature springy, bouncy texture. A food processor produces a paste that is too aerated and too uniform — it cooks through correctly but lacks the dense, chewy bite. If using a food processor, pulse maximum 8 times and stop before the paste becomes smooth. The paste should still show faint texture.`,
        },
        {
            title: `Season and develop elasticity`,
            description: `Add fish sauce, sugar, white pepper, salt, minced garlic, and tapioca starch to the pounded paste. Mix by throwing the paste against the inside of the bowl repeatedly — lift a handful, throw it down firmly, repeat for 3-4 minutes. This technique (danh cho dai) develops the myosin protein network and makes the paste elastic rather than crumbly. The finished paste should stretch slightly when pulled rather than tearing. Add sesame oil last and fold in gently — just two or three folds. Refrigerate 30 minutes before moulding.`,
            tip: `The paste must be cold when moulded onto the sugarcane — warm paste slides rather than adheres. If the paste has warmed during mixing, return to the refrigerator for 15 minutes before the next step. Cold paste grips the sugarcane and holds its shape during grilling.`,
        },
        {
            title: `Prepare the sugarcane skewers`,
            description: `Cut fresh sugarcane into sections 15 cm long. Peel the outer fibrous skin with a sharp knife or vegetable peeler — the inner cane should be pale yellow-white and slightly moist. Taper one end of each section to a rough point to make initial insertion into the paste easier. Soak peeled skewers in cold water for 10 minutes — this slows the caramelisation of the cane surface during grilling and prevents the sugarcane from burning before the shrimp paste is cooked through.`,
        },
        {
            title: `Mould the paste onto skewers`,
            description: `Wet your hands thoroughly with cold water — the paste sticks severely to dry hands. Take approximately 60g of chilled paste and press it around the middle section of a sugarcane skewer, leaving 3-4 cm of bare cane exposed at each end as handles. Mould the paste into a smooth, even cylinder about 8 cm long and 3 cm diameter, pressing firmly to eliminate any air pockets — air pockets cause blowouts during grilling. The paste should grip the cane firmly. Smooth the surface with wet fingers. Refrigerate completed skewers while you work on the remaining batch.`,
            tip: `The paste layer thickness is important — too thin (under 2 cm) and it dries out before the centre cooks; too thick (over 4 cm) and the outside chars before the centre sets. 3 cm diameter is the Sầm Sơn standard. Check by pressing gently — the paste should feel firm and slightly resistant, not soft.`,
        },
        {
            title: `Make the mắm tôm dipping sauce`,
            description: `Combine thick shrimp paste, lime juice, sugar, warm water, minced chili, and minced garlic in a bowl. Stir until sugar dissolves — the mixture will foam slightly from the lime-paste reaction. Heat 1 tbsp neutral oil in a small pan until just beginning to shimmer. Pour the hot oil over the sauce in one motion — it will sizzle and bloom the shrimp paste aroma dramatically. Stir once to incorporate. Taste: it should be pungent, salty, sharp with lime, and fragrant. The hot oil step is the Thanh Hóa detail that elevates this beyond a standard mắm tôm preparation.`,
        },
        {
            title: `Grill over charcoal`,
            description: `Prepare charcoal grill with medium-hot coals. Brush grill grate with oil. Place skewers directly on the grate, turning every 2 minutes to cook all sides evenly. Total grill time: 10-12 minutes. The outer surface should develop a golden-orange char in places — this is correct and desired. Press the paste gently with a finger at 10 minutes: it should feel firm and spring back immediately. If still soft in the centre, grill 2 more minutes. The sugarcane will have darkened and may be slightly caramelised at the ends — this caramelised cane juice that has seeped into the paste is the invisible flavour agent of the dish.`,
            tip: `If grilling on a gas grill or cast iron grill pan, achieve the highest heat possible before placing skewers. The char marks are not purely cosmetic — the Maillard reaction on the shrimp paste surface creates aromatic compounds that are the counterpoint to the sweetness of the sugarcane juice inside. A steamed or oven-baked chả tôm is a different and lesser dish.`,
        },
        {
            title: `Serve and eat`,
            description: `Serve skewers immediately on a plate or wooden board. To eat: use a fork or chopstick to slide the paste off the sugarcane skewer — it should come away cleanly in one piece. After removing the paste, chew the end of the sugarcane skewer to extract the sweet juice — this is not optional in Thanh Hóa; the cane juice after grilling has absorbed shrimp flavour and become something entirely its own. Wrap pieces of shrimp paste in softened rice paper with shredded green mango, rau răm, mint, and cucumber. Dip the entire roll in mắm tôm sauce. The eating sequence — shrimp paste sweetness, green mango sourness, herb fragrance, mắm tôm funk — is the complete flavour arc of the dish.`,
            tip: `Chewing the grilled sugarcane skewer at the end is the element of chả tôm that confuses non-Vietnamese diners and delights Vietnamese ones. The cane at this point is warm, faintly smoky, sweet, and carries a ghost of shrimp flavour from the grilling. In Sầm Sơn, children wait for the adults to finish the paste specifically so they can have the remaining skewer to chew. Do not throw the skewer away.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}