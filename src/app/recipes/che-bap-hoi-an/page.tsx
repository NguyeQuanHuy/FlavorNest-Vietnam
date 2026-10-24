'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'che-bap-hoi-an',
  title: `Chè Bắp Hội An — Hội An Sweet Corn Pudding`,
  subtitle: 'A dessert that reveals the HIDDEN STARCH ECONOMY of corn: every kernel is a sealed pressure vessel containing 70-75% starch granules packed at 1.4 g/cm³ density — when simmered in coconut milk, these granules GELATINIZE IN SITU (inside the intact kernel), absorbing the coconut milk\'s fat-soluble aromatics DURING the swelling process, effectively INFUSING FLAVOR INTO THE STARCH MATRIX at the molecular level rather than coating it on the surface — a mechanism no amount of stirring or marinating can replicate.',
  category: 'DESSERT',
  difficulty: 'Easy',
  totalTime: '35 mins',
  rating: 4.6,
  baseServings: 4,
  heroImage: '/images/recipes/che-bap-hoi-an.jpg',
  intro: `Chè bắp — sweet corn pudding with coconut milk — is Vietnam\\\'s most UNDERESTIMATED dessert. It appears simple: corn kernels simmered in sweetened coconut milk with a pinch of tapioca starch. No caramelization, no fermentation, no multi-day preparation. Yet this simplicity conceals a STARCH PHYSICS phenomenon that makes chè bắp one of the most texturally sophisticated desserts in Southeast Asian cuisine.

The key is understanding what happens INSIDE THE CORN KERNEL during cooking. A fresh sweet corn kernel is not a homogeneous mass — it is a CELLULAR ARCHITECTURE with distinct functional zones:

1. PERICARP (outer skin): A thin, tough layer of cellulose and hemicellulose fibers (2-5% of kernel weight). The pericarp is the kernel\\\'s pressure vessel wall — it is SEMI-PERMEABLE, allowing water molecules to pass through slowly (by osmosis through the cell walls\\\'s plasmodesmata channels) while retaining the kernel\\\'s internal solutes (sugars, amino acids, starch granules). This selective permeability is what allows the kernel to ABSORB cooking liquid without dissolving into it.

2. ALEURONE LAYER: A single layer of cells just beneath the pericarp, rich in LIPIDS (8-12% fat by weight of this layer) and PROTEINS (enzymes, storage proteins). The aleurone\\\'s lipids are critical: during cooking, these lipids MELT (melting point approximately 30-40°C for corn lipids) and migrate inward, coating the interior starch granules with a thin fat film. This fat film MODULATES the starch\\\'s gelatinization behavior — fat-coated granules gelatinize more slowly and swell less than uncoated granules (the fat layer acts as a hydrophobic barrier, slowing water absorption). The result: kernels that are CREAMY-THICK inside rather than burst-and-dissolved, because the fat-mediated slow gelatinization preserves some intact granule structure even after prolonged cooking.

3. ENDOSPERM: The kernel\\\'s main body, composed of 70-75% STARCH GRANULES (each 5-25μm in diameter) embedded in a PROTEIN MATRIX (zein, the corn\\\'s main storage protein, which forms a continuous network around the granules like mortar around bricks). Sweet corn\\\'s endosperm is special because of the su1 (sugary-1) MUTATION — this mutation partially disables the enzyme that converts sucrose into starch during kernel development, resulting in kernels that are 6-8% sugar by weight (vs. 3-4% for field corn) and have SMALLER, LESS DENSE starch granules than field corn. The su1 mutation\\\'s granules have a lower gelatinization temperature (62-68°C vs field corn\\\'s 67-75°C) and produce a SOFTER, CREAMIER gel — they\\\'re optimized for eating, not for industrial starch production.

When sweet corn kernels are simmered in COCONUT MILK, a unique three-phase process occurs:

PHASE 1 — OSMOTIC INFILTRATION (0-10 minutes, 50-65°C): Coconut milk\\\'s water phase permeates through the pericarp by osmosis. The coconut milk\\\'s dissolved sugars (sucrose, glucose, fructose — approximately 2-3% in full-fat coconut milk) and its FAT MICELLES (droplets of coconut oil stabilized by coconut protein, each 1-10μm in diameter) begin to enter the kernel\\\'s intercellular spaces. The fat micelles are small enough to pass through the pericarp\\\'s plasmodesmata channels (which have diameters of 20-50nm — large enough for 1-10μm micelles to squeeze through via deformation). This means COCONUT FAT IS BEING TRANSPORTED INTO THE KERNEL\\\'s interior before the starch even begins to gelatinize.

PHASE 2 — IN-SITU GELATINIZATION (10-20 minutes, 65-85°C): The starch granules inside the kernel reach their gelatinization temperature and begin to swell, absorbing the water that has infiltrated during Phase 1. But this water is not PLAIN WATER — it is coconut-milk water, carrying dissolved coconut sugars, coconut amino acids, and nano-scale coconut fat droplets. As the granules swell and their crystalline structure melts, the coconut flavor compounds are INCORPORATED INTO THE GEL MATRIX — they become part of the starch\\\'s hydrogen-bonded network, not just surface contaminants. The flavor is literally BUILT INTO THE STARCH at the molecular level.

PHASE 3 — PARTIAL BURST AND THICKENING (20-35 minutes, 85-100°C): Some of the most swollen granules rupture, releasing their gelatinized starch into the cooking liquid. This released starch acts as a THICKENER — it increases the viscosity of the coconut milk base, transforming it from a thin liquid into a thick, PUDDING-LIKE consistency. The intact kernels, whose pericarp has softened but not ruptured, sit in this thickened base as discrete, chewable elements — each one a SELF-CONTAINED PACKET of coconut-infused starch gel.

The result is a dessert with TWO SIMULTANEOUS TEXTURES: the THICK, SMOOTH coconut-starch base (from the ruptured granules) and the TENDER, CHEWY whole kernels (from the intact ones). This dual-texture is chè bắp\\\'s defining sensory signature — it\\\'s simultaneously a pudding and a porridge, smooth and chunky, creamy and chewable.

Hội An\\\'s version of chè bắp is distinguished from other regional variants by its RESTRAINT. Northern Vietnamese chè bắp tends to be SWEETER and THICKER (more sugar, more tapioca starch). Southern Vietnamese chè bắp tends to be richer with MORE COCONUT CREAM and often includes pandan leaves for aroma. Hội An\\\'s version uses LESS sugar (letting the corn\\\'s natural su1-mutation sweetness speak), LESS thickener (relying on the corn\\\'s own released starch for viscosity), and serves the coconut milk as a DRIZZLE ON TOP rather than fully mixed in — creating a visual and textural LAYERING (white coconut cream floating on yellow corn pudding) that the diner can mix to their own preference. This layered presentation is consistent with Hội An\\\'s broader culinary philosophy: give the diner COMPONENTS and let them compose.`,
  ingredientSections: [
    {
      title: 'Corn Pudding Base',
      items: [
        { amount: 4, name: 'ears of fresh sweet corn (bắp ngọt)', note: 'Fresh corn is STRONGLY preferred over canned or frozen. Fresh kernels\\\'s intact pericarp enables the in-situ gelatinization mechanism described above — canned corn\\\'s kernels have already been heat-processed (the canning retort reaches 116-121°C), meaning their starch is ALREADY GELATINIZED and cannot undergo the coconut-milk-infusion process. If fresh corn is unavailable (outside summer/autumn in Germany), use frozen sweet corn (which is blanched at 85-95°C for 2-4 minutes before freezing — this partially gelatinizes the surface starch but leaves the interior granules largely intact, preserving some of the in-situ mechanism).' },
        { amount: 500, unit: 'ml', name: 'water' },
        { amount: 100, unit: 'g', name: 'sugar', note: 'Adjust to corn\\\'s sweetness — fresh summer corn may need less. The sugar serves a COLLIGATIVE function beyond sweetness: dissolved sugar raises the cooking liquid\\\'s boiling point (by approximately 0.5°C per 50g sugar per liter — a minor but measurable effect) and, more importantly, INCREASES the liquid\\\'s viscosity, which slows convective heat transfer to the kernels. This means the kernels heat MORE SLOWLY in sugared liquid than in plain water — a further extension of the gentle-cooking principle that preserves kernel integrity.' },
        { amount: 2, unit: 'tbsp', name: 'tapioca starch, dissolved in 3 tbsp cold water', note: 'The tapioca starch slurry is added near the end of cooking as a VISCOSITY BOOSTER. Tapioca\\\'s gelatinized gel is uniquely CLEAR and GLOSSY (its high amylopectin content produces a gel with minimal amylose retrogradation, maintaining transparency) — it thickens the chè without clouding it, preserving the golden-yellow color of the corn-infused liquid.' },
        { amount: 0.25, unit: 'tsp', name: 'salt', note: 'Salt in a dessert: sodium ions SUPPRESS BITTERNESS perception (by blocking the bitter taste receptor\\\'s ion channel) while ENHANCING SWEETNESS perception (by a mechanism not fully understood, possibly through contrast enhancement at the neural level). A quarter-teaspoon of salt in 500ml of sweetened liquid is below the conscious detection threshold for saltiness — the diner won\\\'t taste "salty" but will perceive the corn as SWEETER and the coconut as MORE FLAVORFUL than if the salt were absent.' },
      ]
    },
    {
      title: 'Coconut Cream Topping',
      items: [
        { amount: 200, unit: 'ml', name: 'full-fat coconut cream (nước cốt dừa)', note: 'Use the thick cream that sits at the top of a can of full-fat coconut milk — or buy coconut cream specifically (labeled "Kokosnusscreme" in Germany). The fat content should be 20-24%. This is served as a SEPARATE LAYER on top, not stirred in — the fat-rich cream floats on the denser corn pudding base, creating the characteristic white-on-yellow visual layering.' },
        { amount: 1, unit: 'pinch', name: 'salt (for coconut cream)' },
        { amount: 1, unit: 'tsp', name: 'sugar (for coconut cream)' },
      ]
    }
  ],
  steps: [
    {
      title: 'Extract the kernels and their milk — capturing the whole kernel economy',
      description: `Shuck the corn and remove the silk. Stand each ear upright on a cutting board and slice the kernels off with a sharp knife, cutting CLOSE TO THE COB — aim to take the ENTIRE KERNEL including the germ (the small, pale yellow nub at the kernel\\\'s base). The germ contains the kernel\\\'s lipid reserves (corn oil — approximately 30-35% fat by weight of the germ) and its SUGAR RESERVES (the germ\\\'s cells have the highest free sugar concentration of any part of the kernel). Leaving the germ behind on the cob wastes the kernel\\\'s richest flavor zone.

After cutting the kernels, take the BACK OF THE KNIFE (the dull spine) and SCRAPE DOWN the cob firmly. This scraping extracts the CORN MILK — a thick, starchy, sweet liquid that remains in the cells at the kernel\\\'s base after the tops are sliced off. Corn milk is essentially a NATURAL STARCH SLURRY: it contains ruptured endosperm cells whose starch granules are suspended in the kernel\\\'s cytoplasmic fluid (a solution of sugars, amino acids, and dissolved proteins). This corn milk will serve as an ADDITIONAL THICKENER and FLAVOR INTENSIFIER — it contributes corn starch and corn sugar without adding any external ingredient.

You should have approximately 400-500g of kernels and 50-80ml of corn milk from 4 ears.

Set aside approximately ONE-QUARTER of the kernels (100-125g). These will be added later, uncooked, for TEXTURAL CONTRAST — their intact, crunchy cell structure will contrast with the soft, simmered kernels in the finished chè.`,
      tip: `The corn cob itself is a flavor resource. After scraping, simmer the bare cobs in 500ml of water for 15-20 minutes to extract a CORN COB STOCK — the cob\\\'s vascular tissue (the channels that transported nutrients to the developing kernels) contains dissolved sugars, amino acids (particularly asparagine, which is sweet-savory), and aroma compounds (dimethyl sulfide, which is the "cooked corn" smell at low concentrations). Use this corn cob stock as the cooking liquid instead of plain water for a MORE INTENSELY CORN-FLAVORED chè. This technique — extracting flavor from the cob — is the Vietnamese equivalent of making parmesan-rind broth: using a waste product as a flavor amplifier.`
    },
    {
      title: 'Simmer the corn in the three-phase starch-infusion process',
      description: `In a medium pot, combine the THREE-QUARTERS portion of corn kernels, the scraped corn milk, and 500ml of water (or corn cob stock). Add the sugar and salt. Stir to dissolve.

Place over MEDIUM heat and bring to a gentle simmer (85-90°C — small bubbles rising slowly, not a rolling boil). A gentle simmer is essential because VIGOROUS BOILING creates convective turbulence that mechanically damages the kernels\\\'s pericarp prematurely, causing the starch to release too early and producing a gluey, over-thickened base. A gentle simmer allows the three-phase process to proceed at its natural pace:

Phase 1 (0-10 min): The kernels are heating up. Observe them — they begin to SWELL slightly as water permeates their pericarp. The cooking liquid is still thin and watery. Stir occasionally to prevent sticking.

Phase 2 (10-20 min): The kernels have swollen noticeably — approximately 20-30% larger than their original volume. The cooking liquid is beginning to THICKEN as the first starch granules rupture and release their gelatinized contents. The liquid\\\'s color shifts from clear to PALE GOLDEN (the corn\\\'s carotenoid pigments — zeaxanthin and lutein — are dissolving into the liquid from ruptured cells). The aroma intensifies — you\\\'ll smell the characteristic SWEET, STARCHY, SLIGHTLY SULFUROUS note of cooking corn (the sulfur comes from dimethyl sulfide, produced by the thermal decomposition of S-methylmethionine, an amino acid derivative present in corn at 10-30 ppm).

Phase 3 (20-30 min): The liquid is now NOTICEABLY THICK — a spoon drawn across the bottom of the pot leaves a trail that fills in slowly (approximately 5-10 seconds to close). The kernels are soft and YIELDING when pressed between fingers — the starch inside has fully gelatinized, and the kernels\\\'s texture is CREAMY (the in-situ gelatinized starch forms a smooth gel inside the intact pericarp, like a tiny custard wrapped in a thin skin).

At the 25-minute mark, add the tapioca starch slurry (tapioca starch dissolved in cold water). Stir continuously for 2 minutes as the tapioca gelatinizes (it thickens almost instantly at 60-70°C — faster than corn starch, which is one reason tapioca is preferred as a booster thickener). The chè should now have a PUDDING CONSISTENCY — thick enough to coat the back of a spoon but still pourable.

Add the reserved RAW CORN KERNELS. Stir to distribute. The raw kernels will warm in the hot chè but will NOT fully cook — they\\\'ll retain their CRUNCH (the pericarp is still intact and the starch inside is still partially crystalline). This intentional inclusion of raw kernels alongside fully cooked ones creates a BIMODAL TEXTURE: each spoonful contains both SOFT, CREAMY kernels (Phase 3 — fully gelatinized) and FIRM, CRUNCHY kernels (raw — still crystalline). The contrast between the two — encountered randomly and unpredictably in each bite — prevents textural monotony and keeps the palate engaged.

Remove from heat.`,
      tip: `Sweet corn\\\'s su1 mutation — the same genetic variant that makes it sweet enough to eat fresh — creates a specific problem for chè bắp: su1 corn\\\'s sugar-to-starch ratio is HIGH (6-8% sugar vs 70-75% starch), meaning there\\\'s LESS STARCH AVAILABLE to thicken the cooking liquid than in field corn. This is why the tapioca starch booster is necessary — without it, su1 corn\\\'s chè would be THINNER than traditional chè bắp made with the starchier corn varieties that Vietnamese grandmothers used before sweet corn became commercially dominant. The tapioca compensates for the su1 mutation\\\'s starch deficit while preserving the mutation\\\'s sweetness advantage — it\\\'s a modern ingredient solving a modern varietal problem.`
    },
    {
      title: 'Prepare the coconut cream and assemble the layered dessert',
      description: `COCONUT CREAM PREPARATION: In a small saucepan, gently warm the coconut cream with a pinch of salt and 1 teaspoon of sugar over LOW heat (do NOT BOIL — boiling breaks the coconut cream\\\'s fat emulsion, causing the coconut oil to separate from the water phase and float as a visible oil slick. The emulsion\\\'s integrity is maintained by coconut PROTEINS — globulins and albumins that sit at the oil-water interface, preventing the oil droplets from coalescing. These proteins denature at 70-80°C, so keeping the cream below 65-70°C preserves the emulsion and the cream\\\'s smooth, homogeneous texture).

The salt in the coconut cream serves the same bitterness-suppression function as in the corn base, but here it has an additional role: sodium ions STABILIZE the protein emulsifiers at the oil-water interface (the positive sodium ions attract the proteins\\\'ss negatively charged carboxyl groups, tightening the protein film around each oil droplet). Salted coconut cream is more EMULSION-STABLE than unsalted — it\\\'s less likely to "break" (separate into oil and water phases) during warming and serving.

ASSEMBLY — THE LAYERED PRESENTATION:

Ladle the corn pudding into serving bowls (approximately 200ml per bowl). The pudding should be warm — approximately 65-70°C — hot enough to be comforting but not so hot that it scalds the mouth or disrupts the coconut cream layer.

Pour 2-3 tablespoons of the warmed coconut cream ON TOP of the corn pudding. Do NOT stir. The coconut cream is LESS DENSE than the corn pudding (coconut cream\\\'s density is approximately 0.95-1.0 g/ml due to its high fat content, while the starch-thickened corn base is approximately 1.05-1.1 g/ml). This density differential causes the cream to FLOAT on the pudding\\\'s surface, forming a distinct white layer on the golden corn base.

The diner is presented with a VISUAL GRADIENT: WHITE (coconut cream surface) → GOLDEN YELLOW (corn pudding beneath) with pale yellow CORN KERNELS visible through the cream layer. The eating experience is designed for PROGRESSIVE MIXING: the first spoonful captures mostly cream (rich, fatty, mildly sweet); subsequent spoonfuls mix increasing amounts of corn pudding with the cream, producing a continuously shifting fat-to-starch ratio that keeps each bite different from the last. The final spoonfuls are predominantly corn pudding (starchy, intensely corn-sweet, with the textural surprise of the raw kernel crunch).

This progressive-mixing design is the essence of Hội An\\\'s chè bắp — it transforms a simple two-ingredient dessert into a DYNAMIC EATING EXPERIENCE where the flavor and texture shift from first spoonful to last.`,
      tip: `Chè bắp is traditionally a WARM dessert in Hội An — served at approximately 60-70°C, consumed slowly on the ancient town\\\'s covered sidewalks during the afternoon heat. The warmth is not arbitrary: at 60-70°C, the coconut cream\\\'s fat is FULLY LIQUID (coconut oil\\\'s melting point is 23-26°C), maximizing the cream\\\'s volatile aroma release (warm fat is a better solvent for aroma compounds than cool fat, releasing more lactones, δ-octalactone and δ-decalactone — the compounds responsible for coconut\\\'s characteristic sweet, tropical aroma). If served cold (as is common outside Vietnam), the coconut fat partially solidifies, trapping these aroma compounds in the fat matrix and reducing the dessert\\\'s aromatic impact by approximately 30-40%. Warm chè bắp is a more AROMATIC experience than cold chè bắp — the warmth is a flavor delivery mechanism, not just a temperature preference.`
    }
  ],
  tags: ['Dessert', 'Sweet Corn', 'Coconut Milk', 'Hội An', 'Chè'],
  description: `In-situ starch gelatinization: corn kernel's intact pericarp allows coconut milk infiltration DURING granule swelling → flavor built into starch matrix at molecular level. su1 mutation: 6-8% sugar, lower gelatinization temperature (62-68°C), softer creamier gel. Three-phase process: osmotic infiltration → in-situ gelatinization → partial burst thickening. Bimodal texture: raw crunchy + fully gelatinized creamy kernels in same spoon. Density-differential layering: coconut cream (0.95 g/ml) floats on corn base (1.05 g/ml) → progressive mixing design.`
};

export default function CheBapHoiAnPage() {
  return <RecipeLayout recipe={recipe} />;
}
