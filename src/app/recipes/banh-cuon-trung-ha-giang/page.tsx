'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-cuon-trung-ha-giang',
  title: `Bánh Cuốn Trứng Hà Giang (Egg-Filled Rice Rolls — Đồng Văn Market's Breakfast)`,
  subtitle: `The northern lowland's bánh cuốn — the translucent, 0.3-0.5 mm rice sheet the collection documented in Phú Đa — but here in the Hà Giang highland version: the sheet is steamed with a WHOLE CRACKED EGG inside, the egg's white spreading across the sheet's surface and setting translucent-on-translucent while the yolk sits at the centre like a golden sun behind rice-flour clouds. Rolled, cut, and dipped in a BONE-BROTH-based dipping sauce rather than the lowland's nước chấm. The highland's breakfast that takes the lowland's most delicate sheet and gives it a PROTEIN CORE the lowland version does not carry.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-cuon-trung-ha-giang.jpg',
  intro: `Bánh cuốn trứng — literally "rolled cake with egg" — is the Hà Giang highland's LOCAL VARIANT of the national bánh cuốn format. The variant's distinction from the Phú Đa/Thanh Trì lowland version is: the EGG.

In the lowland version (Phú Đa #3, Vĩnh Phúc): the sheet is steamed → a SMALL AMOUNT of pre-cooked filling (stir-fried ground pork + mushroom) is placed on the sheet → the sheet is rolled → the filling is: SECONDARY (10-15% of the roll's mass), and the roll's identity is: the SHEET (the sheet is the star, the filling is the support).

In the Hà Giang version: the sheet is steamed WITH THE EGG ALREADY ON IT — the batter is ladled onto the cloth, and IMMEDIATELY a whole egg is cracked directly onto the wet batter BEFORE the lid goes on. The lid's steam cooks the batter AND the egg simultaneously: the batter gelatinises to a translucent sheet (the same 30-second cloth-steam the Phú Đa version documented), and the egg's white SPREADS across the batter's wet surface (the raw white, being liquid, flows outward on the batter's surface, covering 60-70% of the sheet's area in a thin, translucent, egg-white layer), and the egg's yolk STAYS PUT (the yolk's viscosity keeps it in a roughly 3-4 cm circle at the centre of the sheet, rising slightly above the white's thin layer like a dome on a plain).

The steaming sets BOTH: the batter → translucent rice-starch gel (the same 0.3-0.5 mm sheet the lowland version produces), and the egg-white → translucent egg-protein gel (the ovalbumin denatures at 62-65°C, setting from liquid-clear to opaque-white at the thicker parts and remaining translucent-barely-opaque at the thinner, spread-out parts). The yolk: partially set at the edges (the yolk's lipoproteins denature at 65-70°C, and the yolk's outer 2-3 mm reaches this temperature during the 30-40 second steam), RUNNY AT THE CENTRE (the yolk's centre, insulated by the yolk's own mass and by the batter's thermal-buffer, reaches only 55-60°C — below the full-set threshold).

The ROLL: the vendor peels the sheet+egg from the cloth (the same bamboo-stick peel the Phú Đa version documented — but here MORE CAREFUL, because the egg's weight makes the sheet heavier and more tear-prone), folds or rolls it (the egg is now INSIDE the roll, the yolk at the roll's centre, the white distributed throughout the roll's cross-section), and cuts it into 3-4 segments. The cross-section reveals: the translucent rice-sheet wrapping (the outermost layer), the thin egg-white layer (fused to the sheet's inner surface, barely distinguishable from the sheet because both are translucent gels), and at the centre: the YOLK (golden, half-set, glistening, the roll's hidden treasure).

The DIP is the Hà Giang variant's SECOND DISTINCTION: instead of the lowland's nước chấm (fish sauce + water + lime + sugar + garlic + chili), the Hà Giang version uses a PIG-BONE BROTH dipping sauce — a thin, clear, collagen-rich bone broth seasoned with fish sauce, scallion and pepper, served HOT in a small bowl alongside the rolls. The rolls are DIPPED IN BROTH rather than in sauce — the broth soaks through the thin rice-sheet in 2-3 seconds (the same instant-sauce-penetration every bánh cuốn/bánh ướt documented), and the roll absorbs the broth's gelatin-body, salt-savoury, bone-mineral flavour. The broth-dip is: MORE SUBTLE than the nước chấm (the broth's flavour is: warm, savoury, rounded, mineral-clear, carrying NO sugar and NO acid — the highland's preference for SALT-AND-MINERAL over the lowland's SWEET-AND-SOUR), and MORE WARMING (the hot broth adds thermal energy to the room-temperature roll, and the warmed roll is a WINTER BREAKFAST food — the cold-highland's answer to the tropical-lowland's room-temperature nước chấm).

The Hà Giang bánh cuốn trứng is eaten at the MARKET: the Đồng Văn Sunday market, the Mèo Vạc Tuesday market, the Yên Minh Wednesday market — the same phiên-chợ (rotating market-day) system the thắng cố vendors use. The bánh cuốn trứng vendor sits beside the thắng cố cauldron, and the market-goer eats BOTH: the thắng cố for the organ-iron and the bánh cuốn trứng for the egg-protein and the rice-starch, and the two together are the COMPLETE HIGHLAND MARKET BREAKFAST — organ + egg + corn/rice + broth + spice.`,
  ingredientSections: [
    {
      title: 'The batter (same as lowland bánh cuốn)',
      items: [
        { amount: 200, unit: 'g', name: 'rice flour (bột gạo tẻ)' },
        { amount: 30, unit: 'g', name: 'tapioca starch (for elasticity)' },
        { amount: 400, unit: 'ml', name: 'water' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The eggs',
      items: [
        { amount: 8, name: 'eggs (chicken — one per sheet)', note: `One whole egg per sheet — the egg IS the filling. No ground pork, no mushroom, no pre-cooked anything. The Hà Giang version replaces the lowland's multi-ingredient filling with ONE ingredient (the egg), and the simplification is: the highland's aesthetic (fewer ingredients, more prominent, each one carrying its full weight), and PRACTICAL (eggs are available everywhere on the highland — every household keeps chickens; the ground-pork-and-mushroom filling requires a trip to the market and a stir-fry setup the roadside vendor cannot maintain).` },
      ],
    },
    {
      title: 'The bone-broth dipping sauce',
      items: [
        { amount: 500, unit: 'ml', name: 'pork or chicken bone broth, clear (simmered 2-3 hr from blanched bones)', note: `The HIGHLAND DIP — a thin, hot, collagen-rich broth that replaces the lowland's cold nước chấm. The broth should be: CLEAR (skimmed properly — no cloudiness, no fat-pools), LIGHTLY SEASONED (fish sauce + salt, no sugar, no acid — the highland's salt-mineral palette), and HOT (served at 70-80°C, steaming — the warmth IS the dip's purpose alongside the flavour).` },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 2, name: 'scallions, sliced' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
      ],
    },
    {
      title: 'Accompaniments',
      items: [
        { amount: 100, unit: 'g', name: 'giò lụa (pork sausage), sliced — the traditional companion' },
        { amount: 2, unit: 'tbsp', name: 'hành phi (fried shallots)' },
        { amount: 30, unit: 'g', name: 'cilantro' },
        { amount: 2, name: 'limes, wedges' },
        { amount: 1, name: 'chili sauce or sliced chilies' },
      ],
    },
  ],
  steps: [
    {
      title: 'Steam the sheet with egg — crack, spread, lid, 30-40 seconds, peel',
      description: `SETUP: the same cloth-over-steam apparatus the Phú Đa bánh cuốn documented — a pot of boiling water, a taut cotton cloth stretched over the pot's mouth, and a bamboo stick for peeling. Oil the cloth lightly.

MIX the batter: rice flour + tapioca + water + oil + salt → smooth, thin, pourable. Rest 30 minutes.

THE CYCLE (each roll = one sheet + one egg):

POUR: ladle 50-60 ml of batter onto the oiled, taut cloth — spread with the ladle's back into a circle roughly 20-22 cm diameter (slightly LARGER than the Phú Đa version's 18-20 cm, because the egg needs space to spread without overflowing the sheet's edges).

CRACK — IMMEDIATELY: crack one egg directly onto the WET, STILL-LIQUID batter's centre. The egg white flows outward across the batter's wet surface — the two liquids (batter and white) mingle at their boundary, the white spreading to cover 60-70% of the batter circle in a thin, even layer. The yolk stays at the centre.

LID ON: cover the pot. The steam rises through the cloth, contacts the batter+egg from below, and begins cooking both simultaneously.

STEAM 30-40 SECONDS (5-10 seconds LONGER than the plain bánh cuốn — the egg's protein requires slightly more heat-exposure than the batter alone to set the white properly; at 30 seconds the white is JUST SET — translucent-opaque, firm enough to hold its shape when peeled; at 40 seconds the white is more firmly set, and the yolk's outer edge has begun to firm):

THE SIMULTANEOUS COOKING: two proteins gelatinising/denaturing at the same time, from the same heat source, at DIFFERENT RATES:

The BATTER's starch gelatinises at 60-70°C (the rice-starch granules swell and burst, forming the translucent gel-sheet — completed in 15-20 seconds of steam contact).

The EGG WHITE's ovalbumin denatures at 62-65°C (the protein unfolds and cross-links, forming the translucent-white gel — completed in 20-25 seconds, 5-10 seconds AFTER the batter finishes, which is why the egg-version needs the extra 5-10 seconds).

The EGG YOLK's lipoproteins denature at 65-70°C — but the yolk's CENTRE is insulated by the yolk's own mass (the yolk is roughly 15-18 mm diameter and 12-15 mm thick, and the heat from the steam below must conduct through the batter, through the white, and through the yolk's outer layer before reaching the centre). At 30-40 seconds: the yolk's outer 2-3 mm has set (opaque-golden), the centre remains RUNNY (liquid-golden, still in its native lipoprotein-emulsion state). The RUNNY YOLK is the Hà Giang bánh cuốn trứng's treasure — the hidden gold at the roll's centre, the liquid that flows when the eater bites through the set-white and the rice-sheet.

PEEL: lift the lid. Slide the bamboo stick under the sheet's edge (the same peel-technique, slightly more DELICATE because the egg adds weight — the sheet with egg weighs roughly 80-90 g vs the plain sheet's 30-40 g, and the heavier sheet is more prone to tearing if the peel-angle is wrong). Lift the sheet from the cloth. The sheet: a translucent rice-gel circle with a translucent egg-white layer fused to its surface and a golden-centred yolk dome rising from the middle.

ROLL: fold the sheet in half (the yolk enclosed), then fold again or roll loosely. Cut into 3-4 segments with scissors. The cross-section: the translucent rice-sheet layers (the outermost spiral), the thin egg-white layer (barely visible, translucent-on-translucent — the two gels are so similar in appearance that the boundary between batter-gel and egg-white-gel is nearly INVISIBLE, producing a cross-section that looks like: one continuous translucent material with a golden yolk-centre, as if the rice-sheet grew a yolk).

The cut end: if the yolk was still runny, the cut reveals a GOLDEN LIQUID pooling at the cut-edge — the liquid yolk seeping from the roll's centre to its freshly-cut end, glistening, warm, rich. The yolk-seep is the Hà Giang vendor's QUALITY INDICATOR: a roll that seeps golden liquid from its cut-end = yolk still runny = perfectly timed; a roll with no seep = yolk fully set = overcooked by 10-15 seconds.`,
      tip: `The EGG-IN-BATTER simultaneous cooking is the collection's most PRECISE DUAL-PROTEIN timing challenge: the batter's starch (target: 60-70°C throughout, 15-20 seconds) and the egg's proteins (white target: 62-65°C, 20-25 seconds; yolk target: 55-60°C at centre, EXACTLY 30-40 seconds — not more) must BOTH reach their targets from the SAME heat source in the SAME timeframe. The timing works because the two targets' temperatures are CLOSE (starch at 60-70°C, white at 62-65°C, yolk-centre at 55-60°C — all within a 15°C range), and the 30-40 second steam-exposure delivers heat that reaches all three zones within 10 seconds of each other. If the batter were a THICKER material (requiring more time), or if the egg were a LARGER egg (requiring more time for centre-heating), the timing would fail — the batter would overcook before the egg set, or the egg would undercook before the batter gelled. The pairing works because: thin batter + medium egg + 30-40 seconds = the three proteins' thermal targets ALIGN.`,
    },
    {
      title: 'Dip in hot bone broth — the highland\'s warm embrace, not the lowland\'s cold sauce',
      description: `THE BONE-BROTH DIP: bring the clear pork/chicken bone broth to a simmer. Season with fish sauce, salt, and pepper. Pour into small individual dipping bowls (100 ml per bowl). Float sliced scallion on the surface. The broth should be: STEAMING (the visible steam rising from the bowl's surface is the visual cue that says "this is the highland's dip, not the lowland's"), CLEAR (the carefully-skimmed broth is translucent-gold, not cloudy — the clarity is the broth's badge of quality, the same clarity the phở broth documented), and carrying a faint LIP-COAT (the 2-3 hour bone-simmer dissolved enough collagen to produce a thin, almost-imperceptible gelatin-body that the tongue detects as: SILKY, rounded, the broth is MORE than water — the same lip-coating every collagen-broth in the collection has delivered, here at a lighter concentration because the broth is a DIP, not a soup).

SERVE the rolls: arrange 2 rolls per person (4 segments per roll = 8 segments per serving), cut-ends UP (the golden yolk visible at each cut-face). Scatter hành phi over the rolls. Lay giò lụa slices beside. Cilantro and lime on the side.

THE DIP-AND-EAT:

Pick up a segment with chopsticks. DIP the cut-end into the hot bone broth — the broth enters the roll's interior through the cut-face's exposed cross-section, soaking into the rice-sheet's porous gel in 2-3 seconds (the same instant-absorption every thin-rice-sheet documented). The broth reaches the egg-white layer, then the yolk — the hot broth contacting the still-warm yolk produces a faint SIZZLE (the broth's 70-80°C meeting the yolk's 55-60°C — the temperature-differential is small, but the contact produces a microscopic burst of steam at the yolk's surface that the ear detects as a whisper of sizzle, not a roar).

BITE: the rice-sheet tears (the soft, zero-resistance, translucent gel — the same dissolving-silk the Phú Đa version delivered, here with the ADDED weight of the egg-layer fused to it, making the sheet slightly THICKER, slightly MORE SUBSTANTIAL, than the yolk-free version — the egg-sheet is a "furnished" version of the "empty" sheet, the same room with furniture in it).

The EGG WHITE: firm, translucent, mild — the white's ovalbumin-gel is: neutral-flavoured (the egg-white's bland, protein-dense, mineral-faint taste, providing SUBSTANCE without dominating), and INVISIBLE-IN-THE-SHEET (the two translucent gels — rice-starch and egg-white — merge in the mouth into ONE CONTINUOUS SOFT MEDIUM, and the tongue cannot tell where the sheet ends and the white begins — the two are TEXTURALLY FUSED, the same dissolving-smooth, the same yielding-soft, the same zero-resistance passage).

The YOLK: the bite reaches the centre — the RUNNY YOLK flows. The golden, warm, lipid-rich, emulsified liquid floods the mouth in a 3-5 ml burst (the same yolk-burst the bánh căn's quail-egg delivered, here at CHICKEN-EGG SCALE — 5x the volume, 5x the impact). The yolk is: RICH (the yolk's 30% fat content — principally lecithin-bound phospholipids — coats the tongue in a golden, emulsified, CREAMY film), SAVOURY (the yolk's free amino acids — glutamate at 10-15 mg/yolk, contributing a mild umami), and carrying the BONE-BROTH'S WARMTH (the hot broth that soaked through the roll has warmed the yolk from 55°C to 65°C, and the warmed-yolk-burst is: warm + rich + golden + flowing, a liquid-luxury inside a solid-simple roll).

The BONE-BROTH'S contribution arrives AFTER the yolk: the broth that soaked into the roll's rice-sheet delivers its mineral-savoury-gelatin flavour 1-2 seconds after the yolk-burst, and the sequence is: sheet-soft → white-neutral → YOLK-BURST (the climax, rich, warm, flowing) → broth-savoury (the aftermath, mineral, warm, the warmth that lingers). The sequence has FOUR EVENTS in 3 seconds — the same multi-event architecture the bánh căn documented, here from LARGER components at LONGER intervals.

Bánh cuốn trứng Hà Giang is the collection's most MINIMALIST variation on the bánh cuốn format — the variant that STRIPS the lowland's multi-ingredient filling (pork + mushroom + shallot) down to ONE ingredient (the egg) and REPLACES the lowland's complex dipping sauce (fish sauce + sugar + lime + garlic + chili = 5 ingredients) with ONE component (bone broth). The minimalism is: 1 filling-ingredient + 1 dip-component, vs the lowland's 3+ filling-ingredients + 5 dip-components. The reduction is the highland's statement: fewer ingredients, each one more prominent, the egg's richness undiluted by the pork's competition, the broth's warmth undistracted by the sugar's sweetness. The highland takes the lowland's decorations off and leaves: sheet + egg + broth = three things, and the three things are enough.`,
      tip: `The Hà Giang bánh cuốn trứng's BONE-BROTH DIP represents a REGIONAL DIP-FORMAT distinction the collection can now map: the NORTH (Hà Nội, Vĩnh Phúc) uses NƯỚC CHẤM (cold, fish-sauce-based, sweet-sour-salty-garlicky — 5+ ingredients, complex, sharp). The HIGHLAND (Hà Giang) uses HOT BONE BROTH (warm, collagen-based, salt-mineral-savoury — 2-3 ingredients, simple, rounded). The CENTRAL COAST (Khánh Hòa, Bình Định) uses MẮM NÊM (room-temp, fermented-anchovy-based, funky-sweet-spicy — 5+ ingredients, pungent, bold). The SOUTH (Saigon, Mekong Delta) uses NƯỚC MẮM NGỌT (room-temp, fish-sauce-based, sweet-dominant — 4+ ingredients, sweet, mild). The four regional dip-formats correlate with CLIMATE: the coldest region (highland) uses the WARMEST dip (hot broth), the warmest region (south) uses the SWEETEST dip (sugar-heavy), and the coastal region uses the FUNKIEST dip (fermented-anchovy). The dip IS the latitude.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
