'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-do-buon-ma-thuot',
  title: `Bún Đỏ Buôn Ma Thuột (Red Noodle Soup — Buôn Ma Thuột's Own Bowl)`,
  subtitle: `Bún in a crimson broth — red from annatto, red from tomato, red from the chili oil that floats on the surface — with crab riêu floating as a golden raft, pork ribs simmered to bone-fall tenderness, shrimp curled pink at the edges, and fried tofu puffs bobbing like golden pillows. The bowl that Buôn Ma Thuột assembled from fragments of four lowland soups (bún riêu, bún bò, bún chả, hủ tiếu) and made into something the lowlands do not recognise.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '2 hr',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/bun-do-buon-ma-thuot.jpg',
  intro: `Bún đỏ — literally "red noodle" — is Buôn Ma Thuột's own noodle soup, and it exists only here: not in Saigon (which has bún riêu, bún bò, hủ tiếu — each a single-tradition bowl), not in Hanoi (which has phở, bún chả, bún ốc — each a purist's bowl), and not in any other highland city (Đà Lạt, Pleiku, Kon Tum — each has noodle soups but not THIS noodle soup). The bún đỏ is Buôn Ma Thuột's invention, and its invention is an ACT OF SYNTHESIS: it takes elements from FOUR lowland soups, combines them in a single bowl, and colours the result red with an annatto-and-tomato base that no lowland bowl uses in this proportion.

THE FOUR SOURCES:

FROM BÚN RIÊU: the crab raft — the same whole-crab-pounded, strained, heat-coagulated, golden-floating protein mass the canh cua rau đay documented. The raft provides: umami (the crab's free glutamate), colour (the roe's astaxanthin gold), and texture (the spongy, dissolving protein the tongue presses and releases).

FROM BÚN BÒ HUẾ: the pork ribs — simmered in the broth for 1.5 hours until the collagen converts to gelatin and the meat falls from the bone. The ribs provide: body (the gelatin-enriched broth), fat (the pork's rendered intramuscular fat, distributing flavour compounds), and the sustenance-factor (the slow-cooked protein that makes the bowl a MEAL, not a snack).

FROM HỦ TIẾU (or bún chả cá): the shrimp — whole, peeled, poached pink in the broth at the last minute. The shrimp provide: sweetness (the glycine's crustacean sweetness the Châu Trúc bún tôm documented), colour (the astaxanthin pink), and a marine note that the pork-and-crab base alone does not carry.

FROM EVERY BÚN STALL'S TOPPING BAR: the fried tofu puffs (đậu hũ chiên, cut in half, their spongy interior absorbing broth on contact), the herbs, the lime, the chili.

THE RED: the broth is RED — not the brownish-red of bún bò Huế (which uses mắm ruốc and chili oil), not the orange-red of bún riêu (which uses tomato and crab roe), but a VIVID CRIMSON that is darker, deeper and more saturated than either, produced by THREE red sources working simultaneously:

ANNATTO OIL (dầu điều): the annatto seed's bixin pigment, extracted into hot oil, providing a deep, stable, fat-soluble orange-red base. Annatto is the PRIMARY red — it dyes the oil, and the oil dyes the broth.

TOMATO: 3-4 tomatoes, quartered and simmered in the broth, releasing their lycopene (the same red carotenoid the gấc's beta-carotene was paired with in the xôi gấc — lycopene is a linear carotenoid, red, fat-soluble, and it partitions into the annatto oil's fat phase, DEEPENING the red from orange-red to crimson).

CHILI OIL: a finishing drizzle of chili-infused oil on the surface — providing a thin, red, capsaicin-hot, visually stunning oil-slick that catches the light and says: this bowl is RED, and the red is not shy.

The three reds together produce a broth colour that no single source achieves: annatto alone is orange; tomato alone is pale red; chili oil alone is bright-but-thin. Together they produce CRIMSON — the deepest, most saturated, most photogenic red in the collection's noodle-soup file.

Buôn Ma Thuột is a migration city — its population is a mix of indigenous Ê Đê, Kinh settlers from the lowlands (principally from Huế, Quảng Nam and Bình Định, who migrated to the highlands in the 1950s-1970s), and Chinese-Vietnamese merchants who brought their own food traditions. The bún đỏ is the SYNTHESIS of those migrations: the crab raft is northern-central (Thanh Hóa, Nghệ An — the bún riêu belt), the pork ribs are Huế (the bún bò Huế's bone-simmering tradition), the shrimp are coastal (from any of the migrants' home provinces), and the annatto-red colouring is southern (the Mekong Delta's fondness for annatto in bún nước). The bowl is Buôn Ma Thuột because Buôn Ma Thuột is where these migrants met, and the bowl they assembled is the bowl their combined memories produced.`,
  ingredientSections: [
    {
      title: 'The broth base — pork ribs + crab',
      items: [
        { amount: 500, unit: 'g', name: 'pork ribs, cut 5 cm segments', note: `The body-builder — 1.5 hours of simmering converts the collagen to gelatin. Blanch first (3 min in boiling water, drain, rinse) to remove blood-scum.` },
        { amount: 300, unit: 'g', name: 'small freshwater crabs (cua đồng), cleaned, OR 150 g crab paste (riêu cua)', note: `Same whole-crab-pounding protocol the canh cua rau đay used: pound whole, strain, the liquid provides the raft; or use pre-made paste.` },
        { amount: 2, unit: 'L', name: 'water' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
      ],
    },
    {
      title: 'The triple-red system',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'annatto oil (dầu điều)',
          note: `The PRIMARY red. Make: heat 3 tbsp oil with 1 tbsp annatto seeds over low heat 3-4 min until the oil is deep orange-red. Strain out seeds. Or use pre-made annatto oil.`,
        },
        { amount: 4, name: 'tomatoes, quartered', note: `The SECONDARY red — lycopene reinforces the annatto's bixin, deepening orange to crimson.` },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'chili oil (ớt sa tế or chili-infused oil)',
          note: `The SURFACE red — drizzled on top at serving for visual impact and capsaicin heat. Make: fry 2 tbsp chili flakes in 3 tbsp hot oil for 30 sec. Or use sa tế (satay chili paste).`,
        },
      ],
    },
    {
      title: 'The aromatics',
      items: [
        { amount: 2, name: 'stalks lemongrass, bruised' },
        { amount: 4, name: 'cloves garlic, smashed' },
        { amount: 2, name: 'shallots, halved' },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
        { amount: 1, unit: 'tsp', name: 'ground turmeric' },
      ],
    },
    {
      title: 'The toppings',
      items: [
        { amount: 200, unit: 'g', name: 'shrimp, peeled, deveined', note: `Poached in the broth at the last minute — the marine sweetness.` },
        { amount: 150, unit: 'g', name: 'fried tofu puffs (đậu hũ chiên phồng), halved', note: `The sponge — absorbs broth on contact, releases it with each bite. Same broth-absorption mechanism the fried chả cá documented.` },
        { amount: 500, unit: 'g', name: 'bún (round rice vermicelli), blanched' },
        { amount: 100, unit: 'g', name: 'bean sprouts, blanched' },
        { amount: 4, name: 'scallions, sliced' },
        { amount: 30, unit: 'g', name: 'hành phi (fried shallots)' },
        { amount: 30, unit: 'g', name: 'rau răm, torn' },
        { amount: 30, unit: 'g', name: 'húng quế, torn' },
        { amount: 2, name: 'limes, in wedges' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 2, unit: 'tbsp', name: 'mắm tôm (optional — the Huế migrants\' addition)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the broth — ribs first, then the annatto-tomato red, then the crab raft',
      description: `SAUTÉ: heat the annatto oil in a large pot. Add garlic, shallot, ginger, lemongrass and turmeric — 2 minutes, fragrant, the oil turning a deep, vivid, orange-red from the annatto's bixin dissolving into the heated fat. The kitchen smells of annatto (warm, slightly peppery, faintly earthy) and lemongrass.

Add the blanched pork ribs. Toss in the red oil 2 minutes — each rib segment coats in the annatto-turmeric oil, the surface lightly searing. Add the water. Bring to a boil. Skim.

Add the quartered tomatoes. Season with fish sauce, salt, sugar. Reduce to a gentle simmer. Cover. Simmer 1-1.5 hours — the ribs soften (the collagen→gelatin conversion requires 1+ hour at 90-95°C), the tomatoes dissolve (their pectin breaks down, their lycopene releases into the annatto oil's fat phase, the red deepens from annatto-orange to tomato-crimson), and the broth develops: pork-bone body (gelatin), tomato acid (the tartness that lifts the broth's heavy pork-richness), and the annatto's warm-earthy-red background.

At hour 1: the ribs are tender (the meat pulls from the bone with a chopstick). The broth is RED — the triple-red now integrated into a single, deep, crimson, slightly cloudy (the tomato's pulp), richly aromatic liquid.

ADD THE CRAB: if using whole crabs, prepare the strained crab liquid as per canh cua rau đay. Pour the strained crab liquid into the SIMMERING (not boiling) broth. WAIT — do not stir. Within 3-5 minutes, the dissolved crab protein coagulates and rises to the surface as a golden RAFT — the same raft-formation the canh cua documented (protein denatures → aggregates → floats), now floating on a RED broth rather than a clear one. The golden raft on the crimson broth is the bún đỏ's visual signature: gold-on-red, warm colours, the most visually warm noodle soup in the collection.

If using crab paste: dissolve the paste in 200 ml of the hot broth, stir gently, and pour back into the pot. The raft forms the same way.

POACH the shrimp: add the peeled shrimp to the broth — 2-3 minutes until pink and curled. Lift out and set aside (the shrimp go on top of the assembled bowl, not simmered in the broth, to preserve their snap).`,
      tip: `The triple-red system's colour is more stable than any single red source because the three pigments occupy different CHEMICAL ENVIRONMENTS: bixin (from annatto) is FAT-SOLUBLE (dissolved in the oil phase, stable against water-phase dilution), lycopene (from tomato) is also FAT-SOLUBLE (partitioned into the same oil phase, reinforcing the bixin), and capsanthin (from chili oil) is FAT-SOLUBLE as well (the third red pigment in the same oil phase). All three reds concentrate in the FAT PHASE of the broth — the oil droplets that float on the surface — which is why the bún đỏ's surface is INTENSELY red (the fat concentrates all three pigments) while the broth below is a more moderate red (the aqueous phase holds only the water-soluble tomato acids, not the pigments). The red is engineered to be most vivid WHERE THE EYE LOOKS FIRST: the surface.`,
    },
    {
      title: 'Assemble — bún, ribs, raft, shrimp, tofu, the crimson pour',
      description: `BLANCH the bún in boiling water 10 seconds. Drain. Divide into 6 bowls. Add blanched bean sprouts.

ARRANGE the toppings: 2 pork rib segments per bowl (the ribs placed at one side, the meat falling from the bone, the rendered fat glistening), 3-4 shrimp (curled, pink, placed at the opposite side), 3-4 fried tofu puff halves (scattered, their cut-sides facing up so the spongy interior is exposed to the broth).

BREAK a piece of the crab raft — the golden, spongy mass, ladled carefully from the pot's surface — and set it on top of the noodles. The raft-piece is: golden (the crab roe's astaxanthin), spongy (the air-trapped protein), and fragrant (the crab's concentrated glycine-sweet aroma).

LADLE THE RED BROTH — pour generously, ensuring the surface oil comes with the broth (the red is IN the oil, and a fat-skimmed ladle produces a pale, un-red, un-photogenic bowl). The crimson broth floods the bowl, submerging the bún, half-submerging the toppings, and the fried tofu puffs immediately begin absorbing — swelling, darkening from golden to crimson as the red broth enters their spongy pores.

DRIZZLE chili oil on the surface — the final red, a thin, bright, oil-slick that catches the light and adds a capsaicin-heat layer the broth's moderate spice does not provide.

Top: scallion, hành phi, rau răm, húng quế. Set lime, sliced chili and mắm tôm on the side.

THE BOWL: crimson broth, golden raft, pink shrimp, brown ribs, golden tofu, white bún, green herbs — the warmest-coloured noodle soup in the collection. Phở is brown-on-white. Bún bò Huế is brick-red-on-white. Bún riêu is orange-on-white. Bún đỏ is CRIMSON-on-everything — the red touches every component, dyes every surface, and the bowl glows.

THE FIRST SPOONFUL: the crimson broth — pork-gelatin-rich (the lip-coating body the 1.5-hour simmer built), tomato-tart (the acid that keeps the richness from cloying), annatto-warm (the earthy, peppery, faintly sweet background the bixin provides), and crab-sweet (the glutamate and glycine from the dissolved raft). The broth is FOUR FLAVOURS from four traditions, unified by the triple-red into a single, crimson, integrated liquid.

The rib: fall-from-bone, gelatin-sticky, pork-savoury — the Huế migrants' contribution to the bowl.

The raft: spongy, dissolving, crab-sweet — the northern-central migrants' contribution.

The shrimp: snappy, pink, glycine-sweet — the coastal migrants' contribution.

The tofu puff: compressed by the teeth, RELEASING a flood of absorbed crimson broth in a warm, red, flavour-dense burst — the same broth-release the fried chả cá and the miến gà's noodle demonstrated, here from a soy-protein sponge.

Bún đỏ Buôn Ma Thuột is the Đắk Lắk collection's most COMPOSITE bowl — more components than the cơm hến (which had 9 toppings but one broth), more traditions than the ragu (which synthesised 4 cultures in one sauce) — and its synthesis is the synthesis of Buôn Ma Thuột itself: a highland city built by migrants from every lowland province, each migrant carrying a soup in memory, and the city assembling those memories into a bowl the lowlands did not imagine. The bún đỏ is the city's autobiography, written in crimson broth, and every ingredient is a chapter: the ribs are Huế, the crab is Thanh Hóa, the shrimp are the coast, the annatto is the Delta, and the red — the colour that names the soup — is Buôn Ma Thuột's own contribution, the colour the city chose to paint over the borrowed parts and claim the bowl as its own.`,
      tip: `The bún đỏ's fried tofu puffs (đậu hũ chiên phồng) undergo the same BROTH-ABSORPTION phenomenon the fried chả cá Quy Nhơn demonstrated: the tofu's deep-frying creates an aerated, oil-sealed, spongy protein matrix (the soy protein network, expanded by the frying oil's steam, set into a rigid, porous scaffold). When the fried puff contacts the hot broth, the broth enters the pores by CAPILLARY ACTION (the same physics as the lotus stem's dressing-absorption and the fried chả cá's broth-absorption), displacing the air and filling the scaffold with crimson, flavoured liquid. A halved tofu puff absorbs roughly 3x its weight in broth within 60 seconds. Each bite compresses the sponge and RELEASES the absorbed broth in a warm, red, flavour-dense flood — the same broth-release mechanism, the same physics, the third ingredient in the collection to exploit it. The tofu puff is a BROTH BATTERY — charged by absorption, discharged by the bite.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
