'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Chè Thốt Nốt — Palm Sugar Sweet Soup
//  An Giang #10
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. BORASSUS FLABELLIFER SAP INVERTASE KINETICS —
//     fresh toddy palm sap: sucrase cleaves sucrose
//     at rate k = 0.02-0.05 min⁻¹ at 30°C, race
//     against wild yeast Saccharomyces→ethanol,
//     harvest window <4 hours
//  2. PALM SUGAR JAGGERY THERMOPLASTIC CONTINUUM —
//     non-centrifugal sugar: amorphous glass Tg 30-45°C
//     → rubbery → viscous liquid, no sharp melting
//     point, continuous modulus decline
//  3. TAPIOCA PEARL STARCH GRANULE CORE-SHELL
//     GELATINIZATION — boiling creates gelatinized
//     translucent shell (amylopectin gel) around
//     ungelatinized opaque core (native starch),
//     dual-texture bite
//  4. COCONUT CREAM CASEIN MICELLE-FREE EMULSION —
//     plant-based O/W emulsion stabilized by coconut
//     protein (cocosin, 7S globulin) at interface,
//     no casein → lower thermal stability → must
//     add LAST below 80°C
//  5. PANDAN LEAF 2-AP HEADSPACE PARTITION —
//     2-acetyl-1-pyrroline Henry's law Kh = 0.01-0.03
//     atm·L/mol, high volatility = rapid loss during
//     boiling, tie leaf knot to reduce surface area
//     and extend aromatic half-life
//  6. TRI TÔN/TỊNH BIÊN PALMYRA PALM TERROIR —
//     Borassus flabellifer var. domesticated by Khmer
//     communities, laterite soil mineral uptake,
//     seasonal tapping December-May, UNESCO-candidate
//     cultural landscape
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'che-thot-not',
  title: 'Chè Thốt Nốt (Palm Sugar Sweet Soup)',
  subtitle: 'Borassus flabellifer sap invertase cleaves sucrose at k = 0.02-0.05 min⁻¹ racing wild yeast within a 4-hour harvest window, palm jaggery exists on a thermoplastic glass-rubber-liquid continuum (Tg 30-45°C) with no sharp melting point, tapioca pearls develop core-shell dual texture through partial granule gelatinization, and pandan 2-AP headspace partition (Kh 0.01-0.03 atm·L/mol) demands knotted-leaf surface area reduction to extend aromatic half-life.',
  category: 'DESSERT',
  difficulty: 'Easy',
  totalTime: '40 min',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/che-thot-not.jpg',

  intro: `Chè thốt nốt is An Giang's SWEETEST GIFT — a warm dessert soup whose entire identity rests on a single ingredient: the sugar of the Palmyra palm (Borassus flabellifer), called thốt nốt in Vietnamese (from the Khmer "thnaot"). This sugar is not merely a sweetener; it is a LIVING INGREDIENT whose chemistry changes by the hour from the moment it leaves the tree, and whose flavor carries the unmistakable signature of a specific landscape — the laterite hills of Tri Tôn and Tịnh Biên in western An Giang, where thousands of Palmyra palms dot the horizon like sentinels along the Cambodian border.

The story begins 20 meters above the ground, where a TODDY TAPPER (thợ lấy nước thốt nốt) climbs a Palmyra palm at dawn to collect the sap that has dripped overnight from incisions in the inflorescence (flower cluster). This fresh sap — called "nước thốt nốt tươi" — is a SUPERSATURATED SUCROSE SOLUTION containing 12-18% sugar (primarily sucrose, with trace glucose and fructose), along with amino acids, minerals (potassium 500-2,000 mg/L, calcium 20-50 mg/L, iron 2-10 mg/L), vitamins (B₁, B₂, B₃, B₆, C), and — critically — the enzyme INVERTASE (sucrase). This enzyme, secreted by the palm's own cells into the sap, begins cleaving sucrose into its constituent GLUCOSE and FRUCTOSE monosaccharides the moment the sap exits the plant, at a first-order rate constant of approximately k = 0.02-0.05 min⁻¹ at 30°C ambient tropical temperature. Simultaneously, WILD YEASTS (Saccharomyces cerevisiae and related species) that colonize the collection pots begin fermenting the glucose into ETHANOL and CO₂.

This creates a KINETIC RACE: the tapper must collect the sap and either consume it fresh, heat it to denature the invertase and kill the yeast, or begin the sugar-making process WITHIN APPROXIMATELY 4 HOURS of collection. After 4 hours at 30°C, enough sucrose has been inverted and enough ethanol produced to shift the sap's character from sweet and floral to sour and alcoholic — at which point it becomes "toddy," a mildly alcoholic beverage rather than a sugar source. The freshest sap, collected before 7 AM and processed immediately, produces the LIGHTEST, MOST DELICATE sugar with the highest residual sucrose content. Sap that has partially fermented produces a darker, more complex sugar with detectable acidity — still delicious, but different. This TEMPORAL GRADIENT of sugar character is unique to palm sugar production and creates natural variation that is impossible to standardize.

PALM SUGAR (đường thốt nốt) is produced by boiling the collected sap in large iron woks until the water evaporates, concentrating the sugar from 12-18% to 85-95%. The resulting product is a NON-CENTRIFUGAL SUGAR (NCS) — meaning it retains ALL the non-sugar components of the original sap (minerals, amino acids, phenolic compounds, Maillard products formed during boiling). This is fundamentally different from refined white sugar, which is pure sucrose with all other compounds removed by centrifugation and chemical processing. The NCS character gives palm sugar its complex flavor: CARAMEL (from sucrose thermal decomposition and Maillard reactions during boiling), BUTTERSCOTCH (from diacetyl produced by bacterial metabolism in the sap), FLORAL (from terpene alcohols present in the fresh sap), and a distinctive MINERAL TANG (from the high potassium and iron content).

The PHYSICAL STATE of palm sugar is equally remarkable. Unlike refined sugar (which is crystalline, with a sharp melting point of 186°C), palm sugar is an AMORPHOUS GLASS — a disordered solid with no crystal structure. Its behavior is described by THERMOPLASTIC CONTINUUM mechanics rather than a melting point: it has a GLASS TRANSITION TEMPERATURE (Tg) of approximately 30-45°C (depending on moisture content), below which it is hard and brittle (glassy state), and above which it becomes progressively softer — first rubbery, then viscous, then flowing liquid. There is NO SHARP BOUNDARY between solid and liquid states; the modulus of elasticity simply decreases continuously as temperature increases. This thermoplastic behavior is why palm sugar stored at tropical room temperature (28-35°C — right at the Tg) is SOFT and PLIABLE, easily scooped with a spoon, while the same sugar refrigerated to 10°C becomes HARD and BRITTLE and must be chipped off. In chè thốt nốt, this thermoplastic behavior means the sugar dissolves GRADUALLY and CONTINUOUSLY as the soup cools from boiling to eating temperature — the sweetness is not instant but reveals itself over time, creating a temporal sweetness profile that refined sugar cannot achieve.

TAPIOCA PEARLS in chè thốt nốt undergo a fascinating CORE-SHELL GELATINIZATION during cooking. Tapioca starch granules are composed almost entirely of AMYLOPECTIN (the branched starch polymer, 83-85% — one of the highest amylopectin contents of any starch source). When tapioca pearls (formed by pressing moistened tapioca starch through a sieve and tumbling into spheres) are dropped into boiling water, heat conducts from the outside inward, creating a THERMAL GRADIENT across each pearl. The outer layer, exposed to 100°C water, reaches the gelatinization temperature (Tgel ≈ 59-70°C for tapioca) first — the amylopectin granules swell, absorb water, lose their crystalline structure, and become TRANSLUCENT, forming a soft gel. The inner core, insulated by the gelatinizing outer shell, heats more slowly and may not reach full gelatinization temperature during the cooking time — it remains partially OPAQUE and slightly FIRM. The result is a DUAL-TEXTURE pearl: a translucent, slippery, gel-like outer shell encasing a slightly chewy, opaque core. This core-shell structure is responsible for the characteristic "QQ" texture (a Chinese-Vietnamese onomatopoeia for bouncy-chewy) that defines well-cooked tapioca pearls. Overcooking dissolves the core, producing uniformly soft, mushy pearls; undercooking leaves the core hard and starchy. The sweet spot is approximately 15-20 minutes of boiling followed by 10-15 minutes of resting in the hot water (carryover heating completes the core gelatinization gradually).

COCONUT CREAM, added as the final aromatic and textural layer, behaves differently from dairy cream because it is a CASEIN MICELLE-FREE EMULSION. Dairy cream's emulsion is stabilized by casein micelle aggregates at the fat-water interface — these are extremely heat-stable (casein denatures only above 130°C), which is why you can boil dairy cream without breaking it. Coconut cream's emulsion is stabilized by COCONUT PROTEINS — primarily cocosin (an 11S globulin) and coconut 7S globulin — which denature at only 70-80°C. This means coconut cream BREAKS (fat separates from water phase as oily globules) if heated above 80°C for more than a few minutes. In chè thốt nốt, the coconut cream must therefore be added LAST, after the soup has cooled slightly below 80°C, or drizzled on top without stirring — preserving the emulsion's integrity and presenting it as a white, creamy CONTRAST LAYER floating on the amber palm sugar base.

PANDAN LEAF (lá dứa) provides the aromatic signature through its primary volatile compound: 2-ACETYL-1-PYRROLINE (2-AP) — the same molecule found in jasmine rice, popcorn, and bread crust. 2-AP has a relatively high HENRY'S LAW CONSTANT (Kh ≈ 0.01-0.03 atm·L/mol), meaning it partitions strongly into the gas phase — it evaporates quickly from hot liquids, which is why you can smell pandan from across a room but the flavor in the liquid diminishes rapidly during prolonged boiling. Traditional cooks manage this volatility by TYING THE PANDAN LEAF IN A KNOT before adding it to the pot — the knot REDUCES THE EXPOSED SURFACE AREA by approximately 60-70%, slowing the diffusion of 2-AP from the leaf cells into the liquid, which in turn slows the headspace loss. The knotted leaf acts as a SLOW-RELEASE AROMATIC DEVICE — continuously replenishing the 2-AP that evaporates from the liquid surface, maintaining a steady aromatic presence throughout the 15-20 minutes of simmering rather than delivering a burst of aroma that dissipates in minutes.

This dessert is the EDIBLE ESSENCE of An Giang's PALMYRA PALM TERROIR. The Tri Tôn and Tịnh Biên districts in western An Giang — where the Mekong Delta's flat alluvial plain gives way to a cluster of small granite hills (the Thất Sơn, or Seven Mountains) — are the heartland of Vietnam's Palmyra palm culture. The palms grow on LATERITE SOIL — an iron-rich, acidic soil formed by tropical weathering of the underlying granite — which contributes specific minerals (particularly iron and manganese) that are absorbed by the palm roots and concentrated in the sap, giving Tri Tôn/Tịnh Biên palm sugar a distinctive mineral quality that is detectably different from Cambodian palm sugar or Thai coconut sugar. The palm tapping tradition is maintained predominantly by KHMER COMMUNITIES who have cultivated these palms for centuries — the Vietnamese word "thốt nốt" is itself an adaptation of the Khmer "thnaot." The cultural landscape of palm-dotted laterite hills, Khmer pagodas, and toddy tappers silhouetted against dawn skies has been proposed as a UNESCO cultural heritage candidate — and chè thốt nốt is, in many ways, the most ACCESSIBLE entry point into this landscape, a bowl of dessert that carries an entire ecosystem, an ethnic history, and a geological substrate dissolved in sweetened water.`,

  ingredientSections: [
    {
      title: 'Sweet Soup Base',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'palm sugar (đường thốt nốt), preferably from Tri Tôn or Tịnh Biên',
          note: 'Non-centrifugal amorphous glass sugar with Tg 30-45°C. Contains minerals (K⁺ 500-2,000 mg/L, Fe²⁺ 2-10 mg/L), Maillard products, and diacetyl — the caramel-butterscotch-floral complexity impossible to replicate with refined sugar. If the sugar is soft/pliable at room temperature, it is near its Tg — correct for tropical storage.',
        },
        {
          amount: 800,
          unit: 'ml',
          name: 'water',
        },
        {
          amount: 2,
          unit: 'leaf',
          name: 'pandan leaves (lá dứa), washed and tied in a knot',
          note: 'The knot REDUCES SURFACE AREA by 60-70%, acting as a slow-release aromatic device. 2-AP (Kh 0.01-0.03 atm·L/mol) would otherwise volatilize rapidly from the boiling liquid.',
        },
        {
          amount: 1,
          unit: 'pinch',
          name: 'salt',
          note: 'Trace salt enhances sweetness perception through sodium-sugar cross-modal interaction.',
        },
      ],
    },
    {
      title: 'Tapioca Pearls — Core-Shell Gelatinization',
      items: [
        {
          amount: 100,
          unit: 'g',
          name: 'small tapioca pearls (bột báng or sa gu nhỏ)',
          note: '83-85% amylopectin. Cook to CORE-SHELL structure: translucent gelatinized outer shell (soft gel) around opaque partially-native inner core (chewy). The "QQ" texture demands precise cooking — 15-20 min boiling + 10-15 min resting.',
        },
      ],
    },
    {
      title: 'Coconut Cream Layer — Casein-Free Emulsion',
      items: [
        {
          amount: 200,
          unit: 'ml',
          name: 'coconut cream (nước cốt dừa), thick',
          note: 'Emulsion stabilized by cocosin (11S globulin) that denatures at 70-80°C — MUST be added last, below 80°C, or drizzled on top without stirring to preserve emulsion integrity.',
        },
        {
          amount: 1,
          unit: 'pinch',
          name: 'salt (for coconut cream)',
        },
      ],
    },
    {
      title: 'Optional Toppings',
      items: [
        {
          amount: 100,
          unit: 'g',
          name: 'sweet potato or taro, cubed and steamed',
        },
        {
          amount: 50,
          unit: 'g',
          name: 'young coconut flesh (cơm dừa non), shredded',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'roasted peanuts, roughly crushed',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'roasted sesame seeds',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Cook tapioca pearls — core-shell structure, 30 minutes',
      description: `BRING a large pot of water (at least 8× the volume of the pearls) to a ROLLING BOIL. The excess water is essential — tapioca starch leaches during cooking and would make a smaller volume of water too viscous, preventing even heat distribution.

ADD tapioca pearls to the boiling water. STIR IMMEDIATELY for the first 30 seconds to prevent the pearls from sticking together or to the pot bottom — the surface starch gelatinizes on contact and becomes adhesive.

BOIL for 15-20 minutes, stirring occasionally. Watch the VISUAL TRANSFORMATION: the pearls begin as opaque white spheres (native crystalline starch throughout); as they cook, a TRANSLUCENT RING appears at the outer edge and expands inward (this is the gelatinization front — the amylopectin granules swelling, absorbing water, and losing their crystallinity). The target is pearls that are approximately 70-80% translucent with a small OPAQUE CENTER remaining — this center is the partially gelatinized core that provides the "QQ" chewy bite.

TURN OFF the heat. COVER and let the pearls REST in the hot water for 10-15 minutes. Carryover heat continues the gelatinization front's inward advance, softening the core from "crunchy-starchy" to "chewy-bouncy" without fully dissolving it.

DRAIN and rinse under cold water to stop the cooking and wash off surface starch. Toss with a teaspoon of sugar to prevent sticking. Set aside.`,
      tip: `TAPIOCA CORE-SHELL PHYSICS: The dual-texture "QQ" quality of perfectly cooked tapioca pearls results from the THERMAL LAG between the pearl's surface and center. When a 5 mm diameter tapioca pearl is dropped into 100°C water, the SURFACE reaches gelatinization temperature (59-70°C) almost immediately, but the CENTER — insulated by the progressively gelatinizing outer layers — takes 12-18 minutes to reach the same temperature (calculated from the Fourier heat equation for a sphere: t = r²/(6α) where α is thermal diffusivity of gelatinizing starch ≈ 1.2 × 10⁻⁷ m²/s). During this thermal lag, the outer shell has fully gelatinized into a TRANSLUCENT AMYLOPECTIN GEL (soft, slippery, elastic), while the inner core retains partially native starch granules (firm, opaque, providing resistance to bite). The resting phase (10-15 minutes off heat) allows the center to reach approximately 55-65°C through carryover — enough to soften the native starch from "crunchy" to "chewy" but not enough to fully gelatinize it into the same soft gel as the shell. This INCOMPLETE GELATINIZATION is the entire point — a fully gelatinized pearl (overcooked) is uniformly soft and boring, while the core-shell pearl provides two distinct textures in a single bite.`,
    },
    {
      title: 'Build the palm sugar soup — thermoplastic dissolution, 10 minutes',
      description: `COMBINE water and knotted pandan leaves in a medium pot. Bring to a simmer over medium heat. The pandan leaf's 2-AP begins diffusing into the water immediately — the knot slows this diffusion by reducing exposed leaf surface area, ensuring sustained aromatic release over the full cooking time rather than a rapid initial burst followed by depletion.

ADD palm sugar to the simmering pandan water. Stir gently as the sugar dissolves. Because palm sugar is an AMORPHOUS GLASS (not crystalline), it does not dissolve like refined sugar (which requires breaking crystal lattice bonds). Instead, it undergoes a THERMOPLASTIC TRANSITION: as the warm water penetrates the glassy matrix, the Tg drops (water acts as a plasticizer), and the sugar transitions from glassy solid → rubbery → viscous liquid → dissolved solute. This continuous dissolution produces a GRADUAL SWEETNESS RELEASE rather than the instant sweetness of crystalline sugar.

SIMMER for 5-7 minutes until the sugar is fully dissolved and the liquid is a clear, deep AMBER color — the color comes from the Maillard melanoidins and caramelization products already present in the NCS sugar, not from any browning during this step.

TASTE the soup. It should be DISTINCTLY SWEET with a complex background of caramel, butterscotch, and a mineral tang — if using authentic Tri Tôn/Tịnh Biên palm sugar, you may detect a faint floral note from the residual terpene alcohols. Adjust sweetness by adding more palm sugar or water.

ADD a tiny pinch of salt — sodium enhances sweetness perception at sub-threshold salt concentrations through cross-modal sodium-sugar interaction in the taste receptor cells.

REMOVE the pandan leaves.

ADD the cooked tapioca pearls to the palm sugar soup. Stir gently to distribute.

If using sweet potato or taro, add the steamed cubes now — they should be soft but holding their shape.`,
      tip: `PALM SUGAR'S THERMOPLASTIC CONTINUUM — WHY IT MELTS DIFFERENTLY: Refined white sugar is CRYSTALLINE — its molecules are arranged in a regular, repeating lattice structure. Breaking this lattice requires a specific amount of energy, which is why crystalline sugar has a SHARP MELTING POINT (186°C — it goes from solid to liquid over a temperature range of only 1-2°C). Palm sugar is AMORPHOUS — its molecules (sucrose, glucose, fructose, proteins, polyphenols, minerals) are frozen in a disordered arrangement with no regular structure. There is no lattice to break, so there is NO SHARP MELTING POINT. Instead, palm sugar has a GLASS TRANSITION TEMPERATURE (Tg) — a range over which the molecular mobility increases continuously: at Tg - 20°C, the sugar is a hard, brittle GLASS (molecules essentially frozen); at Tg, it enters a RUBBERY zone (molecules begin to move but slowly); at Tg + 20°C, it is a VISCOUS LIQUID (molecules flow freely); well above Tg, it is a true SOLUTION in water. This continuum means palm sugar in chè thốt nốt continues to release sweetness and flavor compounds as the soup cools — the eating experience at 80°C (just served) is measurably sweeter and more aromatic than at 50°C (cooled), because temperature controls the rate of molecular release from any undissolved amorphous sugar microparticles and the headspace partition of aroma compounds.`,
    },
    {
      title: 'Finish with coconut cream and serve — emulsion preservation, 5 minutes',
      description: `LET the soup cool to below 80°C — this is CRITICAL. Coconut cream's emulsion is stabilized by cocosin (an 11S globulin) and 7S globulin, which DENATURE at 70-80°C. Adding coconut cream to soup above 80°C will break the emulsion — the coconut fat separates into oily globules floating on the surface, losing the creamy, smooth consistency.

There are TWO SERVING METHODS:

METHOD 1 — SWIRL: Gently warm the coconut cream with a pinch of salt (do NOT boil). Ladle the palm sugar soup with tapioca pearls into individual bowls. DRIZZLE 2-3 tablespoons of coconut cream on top of each bowl in a spiral pattern. Do NOT stir — the white coconut cream floating on the amber palm sugar creates a VISUAL CONTRAST (ΔL* > 40 on the CIE lightness scale) that is part of the dish's aesthetic identity. The eater swirls their spoon through both layers, mixing in variable ratios with each bite — some bites more coconutty, some more palm-sugary.

METHOD 2 — FOLD: For a more homogeneous result, fold the coconut cream gently into the slightly cooled soup (below 75°C). Stir only 3-4 times — enough to create MARBLED STREAKS but not a uniform color. The incomplete mixing produces FLAVOR HETEROGENEITY — each spoonful is slightly different, which is neurologically more engaging than a perfectly mixed, uniform soup (the brain's hedonic response is higher for VARIABLE stimuli than for constant ones).

GARNISH each bowl with optional toppings: shredded young coconut flesh (soft, slippery texture), crushed roasted peanuts (crunch), roasted sesame seeds (nutty aroma), or steamed sweet potato/taro cubes (starchy density).

SERVE WARM (65-75°C is ideal). At this temperature, the palm sugar's thermoplastic dissolution is active (continued sweetness release), the 2-AP from pandan is still partitioning into the headspace above the bowl (aromatic), and the coconut cream emulsion is stable (below the cocosin denaturation threshold). Each spoonful should deliver: the DEEP CARAMEL SWEETNESS of palm sugar, the BOUNCY CHEW of core-shell tapioca pearls, the CREAMY RICHNESS of coconut cream, and the FLORAL-POPCORN AROMA of pandan — all carried in a liquid that tastes like the terroir of An Giang's Palmyra palm landscape concentrated into a bowl.`,
      tip: `TRI TÔN/TỊNH BIÊN PALMYRA PALM TERROIR: The palm sugar in chè thốt nốt carries the GEOLOGICAL SIGNATURE of western An Giang. The Palmyra palms (Borassus flabellifer) of Tri Tôn and Tịnh Biên grow on LATERITE SOIL — a deep red, iron-rich, aluminum-rich soil formed by millions of years of tropical chemical weathering of the underlying granite of the Thất Sơn (Seven Mountains) massif. This laterite contains high concentrations of iron oxides (Fe₂O₃, 15-30%), aluminum oxides (Al₂O₃, 20-35%), and trace manganese — all of which are absorbed by the palm's root system and concentrated in the sap. Tri Tôn/Tịnh Biên palm sugar therefore contains measurably higher iron (2-10 mg/L vs. 0.5-2 mg/L in alluvial-soil palms) and a distinctive MINERAL TANG that experienced tasters can distinguish from Cambodian palm sugar (grown on different soil types). The tapping season runs from December to May — the dry season, when the palm concentrates its sap production. Each palm produces 3-5 liters of sap per day, yielding approximately 300-500 grams of sugar. Tri Tôn and Tịnh Biên together produce an estimated 3,000-5,000 tonnes of palm sugar annually, supporting several thousand Khmer-Vietnamese families. The Palmyra palm landscape — thousands of tall, fan-leaved palms silhouetted against sunset over rice paddies, with bamboo ladders lashed to their trunks and clay collection pots dangling from their crowns — is one of the most visually distinctive agricultural landscapes in Southeast Asia, and has been proposed (though not yet inscribed) as a UNESCO Intangible Cultural Heritage of Humanity. Every bowl of chè thốt nốt is a taste of this landscape: the laterite minerals in the sugar, the Khmer-Vietnamese tapping tradition in the technique, and the Borassus palm's ancient Gondwanan lineage in the sap itself.`,
    },
  ],
};

export default function CheThotNotPage() {
  return <RecipeLayout recipe={recipe} />;
}
