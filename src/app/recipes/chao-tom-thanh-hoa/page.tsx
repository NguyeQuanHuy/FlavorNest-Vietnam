'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Chạo Tôm Thanh Hóa — Thanh Hóa Shrimp Paste Grilled on Lemongrass
//  Thanh Hóa #9
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. LEMONGRASS STALK VASCULAR BUNDLE ARCHITECTURE —
//     monocot concentric vascular bundles (xylem + phloem
//     + sclerenchyma fiber caps) embedded in parenchyma,
//     tensile strength 100-300 MPa fiber caps vs 0.5-2 MPa
//     parenchyma → anisotropic fracture: fibrous along
//     length, brittle across, natural "skewer" that
//     doesn't splinter longitudinally
//  2. CITRAL STEAM DISTILLATION IN SITU —
//     lemongrass essential oil 1-2% (citral 65-85%:
//     geranial + neral), bp 229°C but significant
//     vapor pressure at 100°C via Clausius-Clapeyron,
//     steam from grilling carries citral INTO the paste
//     via counter-current mass transfer
//  3. SHRIMP PASTE SALT-SOLUBLE PROTEIN
//     EXTRACTION + HEAT-SET GELATION —
//     NaCl 2-3% extracts actomyosin from myofibrils
//     into continuous sol, pounding aligns protein
//     molecules, heating denatures → intermolecular
//     disulfide bonds → elastic gel, DIFFERENT from
//     suwari/TGase mechanism in chả tôm (#2)
//  4. PORK BACK FAT EMULSIFIED DISPERSION —
//     fat ground to 2-5 mm particles, partially
//     emulsified by salt-soluble proteins acting as
//     surface-active agents at the fat-water interface,
//     fat globules melt during grilling releasing
//     tricaprylin/laurin short-chain FA → basting
//     from within
//  5. EGG WHITE PROTEIN FOAM INCORPORATION —
//     whipped egg white NLF (native liquid foam)
//     folded into paste, air cells 0.1-0.5 mm
//     stabilized by ovalbumin, expand during grilling
//     → lighter texture, thermal set locks foam
//     structure permanently
//  6. CHARCOAL RADIANT HEAT SPECTRUM —
//     charcoal emissivity ε 0.85-0.95 (near-blackbody),
//     peak radiation at 800°C is λ_max ≈ 2.7 µm (Wien's
//     law), absorbed by water O-H stretch + protein
//     amide I band → surface-selective heating,
//     DIFFERENT from convective oven heating
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'chao-tom-thanh-hoa',
  title: 'Chạo Tôm Thanh Hóa (Thanh Hóa Shrimp Paste Grilled on Lemongrass Stalks)',
  subtitle: 'Lemongrass monocot vascular bundles provide anisotropic tensile strength 100-300 MPa preventing longitudinal splintering while citral steam-distills in situ via Clausius-Clapeyron into the paste, salt-extracted actomyosin forms disulfide-crosslinked gel distinct from TGase suwari, and charcoal near-blackbody ε 0.85-0.95 radiation at λ_max 2.7 µm selectively heats water O-H and protein amide I bands.',
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '50 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/chao-tom-thanh-hoa.jpg',

  intro: `Chạo tôm Thanh Hóa is the province's GRILLED counterpart to its famous chả tôm (steamed shrimp paste on sugarcane, dish #2) — but the shift from STEAMING to GRILLING and from SUGARCANE to LEMONGRASS fundamentally changes every aspect of the food science. Where chả tôm relies on TGase-mediated suwari gelation and sugarcane sucrose caramelization, chạo tôm Thanh Hóa operates through SALT-EXTRACTED ACTOMYOSIN HEAT-SET GELATION and LEMONGRASS CITRAL STEAM DISTILLATION — a completely different set of molecular mechanisms producing a distinctly different product.

The CENTRAL MECHANISM is LEMONGRASS STALK VASCULAR BUNDLE ARCHITECTURE. Lemongrass (Cymbopogon citratus) is a MONOCOT — its stem cross-section reveals SCATTERED VASCULAR BUNDLES embedded in a parenchyma ground tissue, each bundle consisting of xylem vessels, phloem sieve tubes, and a cap of SCLERENCHYMA FIBERS. These sclerenchyma fibers are the key structural element: composed of CELLULOSE MICROFIBRILS (40-60%) embedded in a LIGNIN MATRIX (20-30%), they have a tensile strength of 100-300 MPa along their length — comparable to aluminum alloy. The fibers run PARALLEL to the stalk's long axis, creating extreme ANISOTROPY: the stalk is incredibly strong in TENSION along its length (you can pull it without breaking) but relatively weak in COMPRESSION across its width (you can crush it between your fingers). This anisotropy is what makes lemongrass an ideal natural SKEWER — when shrimp paste is molded around the stalk and grilled, the high longitudinal tensile strength prevents the stalk from SPLINTERING (which would embed sharp fiber fragments in the food, a dangerous failure mode for wooden skewers). The stalk bends and flexes but the fibers remain intact, held together by the continuous lignin matrix. The parenchyma tissue between the bundles, meanwhile, is SOFT (0.5-2 MPa compressive strength) and filled with ESSENTIAL OIL GLANDS — specialized cells containing 1-2% essential oil that is 65-85% CITRAL (a mixture of the geometric isomers geranial and neral).

CITRAL STEAM DISTILLATION IN SITU is what makes the lemongrass skewer more than a structural support — it is a FLAVOR-DELIVERY ENGINE. Citral (3,7-dimethyl-2,6-octadienal) has a boiling point of 229°C, but it has significant VAPOR PRESSURE at temperatures well below its boiling point — at 100°C, the vapor pressure is approximately 0.5-1.0 kPa, sufficient to produce meaningful volatilization. According to the CLAUSIUS-CLAPEYRON equation (ln(P₂/P₁) = ΔH_vap/R × (1/T₁ - 1/T₂)), the vapor pressure increases exponentially with temperature. During grilling, the interior of the lemongrass stalk reaches 100-150°C — not hot enough to boil the citral, but hot enough for the STEAM generated from the stalk's cellular water (60-70% moisture) to act as a CARRIER GAS. The steam and citral vapor travel OUTWARD from the stalk center through the parenchyma tissue and INTO the surrounding shrimp paste via COUNTER-CURRENT MASS TRANSFER — the citral vapor moves from high concentration (stalk interior) to low concentration (paste). The shrimp paste, being a water-rich gel (70-75% moisture), readily ABSORBS the citral vapor — the citral dissolves in the aqueous phase and partitions between the water and the protein/fat phases according to its partition coefficients (log P_octanol/water ≈ 2.8 — moderately lipophilic, favoring the fat phase but with significant aqueous solubility). The result is that the finished chạo tôm is PERFUMED FROM THE INSIDE OUT — the lemongrass aroma is distributed throughout the paste cross-section, not just on the surface, producing a flavor integration that cannot be achieved by simply adding chopped lemongrass to the paste.

The SHRIMP PASTE GELATION mechanism in chạo tôm is fundamentally different from the TGase-mediated suwari gelation used in chả tôm (dish #2). In chạo tôm, the gelation is a SALT-SOLUBLE PROTEIN EXTRACTION + HEAT-SET process. When raw shrimp meat is ground with 2-3% NaCl (salt), the high ionic strength solubilizes the ACTOMYOSIN complex — the major contractile protein of muscle — from the organized myofibrillar structure into a viscous SOL (solution of dissolved protein). This sol is the functional matrix: the actomyosin molecules, freed from their fibrillar constraints, can be ALIGNED by mechanical action (pounding, stirring in one direction) into a roughly parallel arrangement. When this aligned sol is HEATED (during grilling, the paste reaches 70-85°C internally), the proteins DENATURE — the native helical structures unfold, exposing reactive cysteine residues that form INTERMOLECULAR DISULFIDE BONDS (S-S crosslinks). These covalent crosslinks create a permanent, ELASTIC GEL NETWORK that gives the finished product its characteristic bouncy, springy texture ("giòn dai"). This is DIFFERENT from the TGase suwari mechanism in chả tôm, which uses enzymatic ε-(γ-glutamyl)lysine crosslinks at 40°C BEFORE heat application — the suwari gel forms a fine-stranded network at low temperature, while the heat-set gel in chạo tôm forms a coarser, more elastic network at high temperature. The textural difference is perceptible: chả tôm has a FINE, SMOOTH texture from the fine-stranded suwari gel; chạo tôm has a COARSER, BOUNCIER texture from the heat-set disulfide gel.

PORK BACK FAT is dispersed through the shrimp paste as an EMULSIFIED DISPERSION — fat particles (2-5 mm initial size) that are partially coated by the salt-soluble proteins acting as SURFACE-ACTIVE AGENTS at the fat-water interface. The actomyosin molecules, being amphiphilic (having both hydrophobic and hydrophilic regions), adsorb at the fat globule surface with their hydrophobic regions facing the fat and their hydrophilic regions facing the aqueous paste — reducing the interfacial tension and stabilizing the dispersion against coalescence. During grilling, these fat globules MELT (pork fat mp 36-40°C) and the liquid fat migrates through the gel matrix, BASTING THE PASTE FROM WITHIN. This internal basting prevents the common problem of lean fish/shrimp pastes — DRYING OUT during grilling as surface moisture evaporates. The fat also carries lipid-soluble flavor compounds (from the Maillard reaction at the charred surface) into the interior through lipid-phase diffusion.

WHIPPED EGG WHITE incorporated into the paste introduces a FOAM STRUCTURE — air cells (0.1-0.5 mm diameter) stabilized by OVALBUMIN (the major protein of egg white, which unfolds at air-water interfaces to create a viscoelastic film around each bubble). During grilling, these trapped air cells EXPAND as the air inside them heats up (ideal gas law: at constant pressure, volume increases proportionally with absolute temperature — from 25°C/298K to 80°C/353K, the volume increases by 18%). The expanding air cells make the paste LIGHTER and less dense — airy rather than compact. When the paste temperature exceeds 70°C, the ovalbumin surrounding each air cell DENATURES and forms a rigid, heat-set gel — permanently locking the expanded foam structure in place. The result is a grilled shrimp paste that is LIGHTER and more DELICATE than one made without egg white, with a tender, almost SOUFFLÉ-like interior.

CHARCOAL RADIANT HEAT provides a fundamentally different cooking mechanism than the steam heating used for chả tôm. Burning charcoal at 600-900°C behaves as a NEAR-BLACKBODY radiator with emissivity ε = 0.85-0.95. According to WIEN'S DISPLACEMENT LAW (λ_max = b/T, where b = 2898 µm·K), the peak radiation wavelength at 800°C (1073K) is λ_max ≈ 2.7 µm. This wavelength falls in the INFRARED spectrum and is specifically absorbed by two molecular vibrations in the food: the WATER O-H STRETCHING vibration (absorption peak at 2.9 µm) and the PROTEIN AMIDE I band (C=O stretch at 6.0 µm, with overtones absorbing in the 2.5-3.0 µm range). The result is that charcoal radiation is preferentially absorbed by the WATER and PROTEIN in the outer 1-3 mm of the food surface, creating intense SURFACE HEATING while the interior heats more slowly by conduction. This surface-selective heating produces the characteristic charcoal-grilled surface — a CHARRED, MAILLARD-RICH CRUST over a TENDER, MOIST INTERIOR — that convective oven heating (which heats the surface by hot air contact, a less efficient process) cannot replicate.`,

  ingredientSections: [
    {
      title: 'Shrimp Paste — Salt-Extracted Actomyosin Sol',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'fresh shrimp, peeled and deveined',
          note: 'Use the freshest possible — actomyosin extraction efficiency drops rapidly post-mortem as the protein undergoes rigor mortis crosslinking.',
        },
        {
          amount: 50,
          unit: 'g',
          name: 'pork back fat, diced into 2-5 mm cubes',
          note: 'EMULSIFIED DISPERSION — fat particles coated by actomyosin acting as surface-active agent, melts during grilling for internal basting.',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'egg white, whipped to soft peaks',
          note: 'FOAM INCORPORATION — ovalbumin-stabilized air cells 0.1-0.5 mm expand 18% during grilling then heat-set permanently.',
        },
        {
          amount: 2,
          unit: 'tsp',
          name: 'salt (≈2-3% of paste weight)',
          note: 'CRITICAL: extracts actomyosin from myofibrils into sol. Too little → poor extraction → crumbly texture. Too much → overly salty.',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'sugar',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'fish sauce',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'tapioca starch',
          note: 'Supplementary binder — gelatinizes during grilling to reinforce the protein gel network.',
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'black pepper',
        },
      ],
    },
    {
      title: 'Lemongrass Skewers — Citral Delivery Engine',
      items: [
        {
          amount: 8,
          unit: 'unit',
          name: 'lemongrass stalks, trimmed to 15 cm, outer layers removed',
          note: 'Use the LOWER HALF of the stalk (higher essential oil concentration). The vascular bundle architecture prevents longitudinal splintering — lemongrass will NOT produce dangerous splinters like bamboo or wood skewers.',
        },
      ],
    },
    {
      title: 'Serving',
      items: [
        {
          amount: 1,
          unit: 'pack',
          name: 'rice paper (bánh tráng), softened',
        },
        {
          amount: 1,
          unit: 'bunch',
          name: 'lettuce, fresh herbs (mint, perilla, cilantro)',
        },
        {
          amount: 1,
          unit: 'cup',
          name: 'pickled vegetables (đồ chua): julienned carrot + daikon in rice vinegar',
        },
        {
          amount: 100,
          unit: 'ml',
          name: 'nước chấm (dipping sauce)',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Process the shrimp paste — actomyosin extraction, 15 minutes',
      description: `PAT the shrimp very dry with paper towels — excess surface moisture dilutes the salt concentration below the threshold for effective actomyosin extraction.

PROCESS the shrimp in a food processor with SALT, sugar, fish sauce, pepper, and tapioca starch. Pulse initially to break down the muscle fibers, then process CONTINUOUSLY for 2-3 minutes until the paste becomes STICKY, COHESIVE, and slightly GLOSSY. This glossy, tacky appearance indicates that the actomyosin has been successfully EXTRACTED from the myofibrils into solution — the salt ions (Na⁺, Cl⁻) at 2-3% concentration screen the electrostatic interactions that hold the myosin filaments in the organized myofibrillar structure, allowing the protein molecules to dissolve into the surrounding water as a viscous SOL.

ADD the diced pork back fat and pulse briefly (3-4 pulses) — you want the fat particles to be DISTRIBUTED throughout the paste but not fully homogenized. The actomyosin sol will partially coat the fat particle surfaces, acting as an EMULSIFIER.

TRANSFER the paste to a bowl. FOLD in the whipped egg white gently using a spatula — incorporate the foam without deflating it. The air cells trapped by the ovalbumin film should be visible as a slight LIGHTENING of the paste color and a reduction in its apparent density.

THROW the paste against the side of the bowl 15-20 times (a traditional technique called "quết") — this mechanical action further aligns the dissolved actomyosin molecules and expels large, irregular air pockets while retaining the fine foam structure from the egg white.

REFRIGERATE the paste for 15-30 minutes — chilling firms the sol and makes it easier to mold onto the lemongrass stalks.`,
      tip: `SALT-EXTRACTED ACTOMYOSIN vs. TGase SUWARI — TWO DIFFERENT GEL ARCHITECTURES: Chạo tôm (#9) and chả tôm (#2, this series) both make shrimp paste gels, but through FUNDAMENTALLY DIFFERENT molecular mechanisms. In CHẠO TÔM: NaCl extracts actomyosin → dissolved sol → pounding aligns molecules → HEAT denatures at 70-85°C → exposed cysteine -SH groups form DISULFIDE BONDS (S-S covalent crosslinks) → elastic, bouncy gel with a COARSE network (mesh size 50-200 nm). In CHẢ TÔM: endogenous TRANSGLUTAMINASE (TGase) catalyzes ε-(γ-glutamyl)lysine isopeptide bonds at 40°C during SUWARI setting → FINE-STRANDED network (mesh size 5-20 nm) → followed by rapid heating through the 50-60°C modori danger zone → dual-network gel (TGase crosslinks + heat-set disulfide crosslinks). The chạo tôm gel is COARSER, BOUNCIER, and more ELASTIC (like a rubber ball); the chả tôm gel is FINER, SMOOTHER, and more RIGID (like gelatin). Both are "springy" but in perceptibly different ways — and a trained palate can distinguish them.`,
    },
    {
      title: 'Mold onto lemongrass — structural engineering, 10 minutes',
      description: `LIGHTLY OIL your hands and the lemongrass stalks to prevent sticking.

TAKE approximately 50 g of paste per stalk. MOLD the paste around the LOWER 2/3 of each lemongrass stalk, forming an elongated oval shape approximately 8-10 cm long and 2.5-3 cm in diameter. Press FIRMLY to ensure good adhesion between the paste and the stalk — the rough, fibrous surface of the peeled lemongrass provides MECHANICAL ANCHORAGE (the paste fills the surface irregularities and locks in place when it gels).

ENSURE even thickness — uneven spots will cook unevenly, with thin areas drying out while thick areas remain undercooked. The optimal paste thickness of 1-1.5 cm around the stalk ensures that the internal temperature reaches 75°C (for safe cooking and gel formation) within 8-10 minutes of grilling without the exterior charring excessively.

Leave the upper 1/3 of the stalk exposed as a HANDLE for grilling and eating.

LIGHTLY brush each molded chạo tôm with cooking oil to prevent sticking to the grill grate.`,
      tip: `LEMONGRASS AS NATURAL SKEWER — ANISOTROPIC MECHANICAL ENGINEERING: The lemongrass stalk's suitability as a skewer comes from its MONOCOT VASCULAR ANATOMY. In dicot wood (like bamboo skewers or wooden chopsticks), the xylem cells are arranged in radial rays — when the wood is stressed, cracks can propagate ALONG these rays, producing dangerous SPLINTERS that break off and embed in food. In monocot lemongrass, the vascular bundles are SCATTERED in the ground tissue with their SCLERENCHYMA FIBER CAPS running parallel to the stalk axis. These fibers (cellulose + lignin composite, tensile strength 100-300 MPa) are like REBAR in concrete — they resist crack propagation across the stalk, preventing splintering. The stalk can bend, flex, and even partially crush without producing sharp fragments — it fails by DELAMINATION (fibers separating along their length) rather than by SPLINTERING (sharp fragments breaking off across the grain).`,
    },
    {
      title: 'Grill — charcoal radiant heat + citral infusion, 10 minutes',
      description: `PREHEAT a charcoal grill to medium-high heat (the coals should be glowing red-orange with a thin layer of white ash — surface temperature approximately 600-800°C). Alternatively, use a gas grill or oven broiler, though the radiant heat spectrum will differ.

PLACE the chạo tôm on the grill grate, rotating every 2-3 minutes for even cooking. GRILL for 8-10 minutes total, until the surface is GOLDEN-BROWN with attractive char marks and the paste feels FIRM and SPRINGY when pressed (indicating that the actomyosin gel has set via disulfide crosslinking).

DURING GRILLING, observe the THREE SIMULTANEOUS PROCESSES occurring:

(1) SURFACE: Charcoal infrared radiation (λ_max ≈ 2.7 µm) is absorbed by the water O-H stretch and protein amide I bands in the outer 1-3 mm, producing intense surface heating → Maillard reaction → golden-brown crust with savory, roasty volatiles.

(2) INTERIOR: The egg white foam cells expand (18% volume increase from 25°C to 80°C) → lighter, airier texture. The actomyosin sol denatures at 70-85°C → disulfide bonds form → elastic gel locks in the expanded foam structure permanently.

(3) CORE: The lemongrass stalk heats to 100-150°C → cellular water converts to steam → steam carries CITRAL vapor outward through the parenchyma tissue → citral enters the paste via counter-current mass transfer → the paste is PERFUMED FROM THE INSIDE OUT.

REMOVE when the exterior is well-charred but not burned, and the paste has no raw, translucent areas remaining.`,
      tip: `CHARCOAL NEAR-BLACKBODY RADIATION — WHY CHARCOAL GRILLING IS IRREPLACEABLE: Burning charcoal at 600-900°C has an emissivity of ε = 0.85-0.95 — close to a perfect blackbody (ε = 1.0). By Wien's law, the peak radiation wavelength at 800°C is λ_max = 2898/1073 ≈ 2.7 µm, which falls in the NEAR-INFRARED. This wavelength is specifically absorbed by WATER (O-H stretching vibration at 2.9 µm) and PROTEIN (amide I C=O stretch overtones in the 2.5-3.0 µm range). The IR photons penetrate 1-3 mm into the food surface before being absorbed — this is DEEPER than the ~0.1 mm penetration of visible light but SHALLOWER than the several-centimeter penetration of microwave radiation. The result is that charcoal radiation delivers intense thermal energy to a thin SURFACE LAYER (1-3 mm) — exactly the zone where Maillard browning and crust formation should occur — while the interior heats more gently by conduction from this hot surface layer. This surface-selective heating is what produces the hallmark charcoal-grilled texture: a deeply browned, flavor-rich CRUST over a JUICY, TENDER interior. A convective oven, by contrast, heats the surface through hot AIR contact — air has a much lower heat transfer coefficient (h = 10-50 W/m²·K) than radiation at these temperatures (equivalent h = 50-200 W/m²·K), so the surface browns more slowly and the interior overcooks before the crust fully develops.`,
    },
    {
      title: 'Serve — the wrap-and-roll assembly',
      description: `ARRANGE the grilled chạo tôm on a serving platter with the lemongrass handles pointing outward for easy pickup.

SET UP a wrapping station: softened rice paper, lettuce leaves, fresh herbs (mint, perilla, cilantro), pickled vegetables, and nước chấm dipping sauce.

TO EAT: Take a rice paper sheet. Place a lettuce leaf and herbs on top. SLIDE the grilled paste off the lemongrass stalk (or bite it directly off the stalk — the paste should release cleanly from the fibrous surface). Add pickled vegetables. Roll into a tight cylinder and dip in nước chấm.

The EATING EXPERIENCE progresses through four phases: (1) the CRISPY, MAILLARD-RICH exterior crust (charcoal radiation browning); (2) the BOUNCY, ELASTIC gel interior (disulfide-crosslinked actomyosin network with expanded egg-white foam); (3) the LEMONGRASS CITRAL AROMA that pervades every bite (steam-distilled from the inside out); (4) the FRESH, HERBACEOUS wrap components that cut through the richness with acidity and raw aromatics.`,
      tip: `IN-SITU STEAM DISTILLATION — FLAVOR FROM THE INSIDE OUT: The citral delivery mechanism in chạo tôm is unique in Vietnamese cuisine. Most aromatic infusions work FROM THE OUTSIDE IN — marinades, sauces, and spice rubs deliver flavor to the food's surface, which then slowly diffuses inward (following Fick's law, with a diffusion coefficient of ~10⁻¹⁰ m²/s for small molecules in gel matrices — meaning significant penetration takes hours). Chạo tôm reverses this: the lemongrass stalk is at the CENTER, and the citral vapor travels OUTWARD driven by the steam pressure gradient. The steam acts as a CARRIER GAS (like in industrial steam distillation of essential oils), dramatically increasing the mass transfer rate compared to simple diffusion. The radial geometry helps: the citral concentration is highest at the center (stalk surface) and lowest at the outside (paste surface exposed to air), creating a consistent OUTWARD concentration gradient that drives diffusion. By the time the paste is fully cooked, the citral has reached the outermost layer — every bite from crust to center carries the lemongrass aroma.`,
    },
  ],
};

export default function ChaoTomThanhHoaPage() {
  return <RecipeLayout recipe={recipe} />;
}
