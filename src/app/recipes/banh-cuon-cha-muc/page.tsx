'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Bánh Cuốn Chả Mực — Quảng Ninh Steamed Rice Rolls with Squid Cake
//  Quảng Ninh #2
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. RICE BATTER THIN-FILM RETROGRADATION KINETICS —
//     unlike bulk rice products where retrogradation takes
//     hours-days, the 50-200 µm bánh cuốn film has an
//     extremely high SURFACE-AREA-TO-VOLUME ratio that
//     accelerates amylose chain realignment from hours
//     to SECONDS — the short diffusion distance (Fick's
//     law, L² scaling) allows amylose chains to find
//     each other and form double-helix junction zones
//     almost immediately upon cooling below Tg, creating
//     the characteristic translucent-but-firm texture
//     within 10-30 seconds of peeling from the cloth
//  2. COMPOSITE LAMINATE MECHANICS — the filled bánh
//     cuốn is a SANDWICH STRUCTURE: two rice-sheet
//     "skins" (thin, flexible, high tensile strength
//     from amylose network) encasing a squid paste
//     "core" (thick, rigid, high compressive strength
//     from paramyosin gel) — this is a classical
//     COMPOSITE BEAM where flexural rigidity EI =
//     E_skin·t_skin·d² + E_core·t_core³/12, giving
//     a structure that is simultaneously FLEXIBLE
//     (bends without breaking) and SUBSTANTIAL (resists
//     compression when bitten)
//  3. STEAMING CLOTH CAPILLARY WICKING + HEAT TRANSFER
//     PARTITION — the traditional muslin cloth stretched
//     over boiling water creates a DUAL heat transfer
//     system: CONDUCTION through the wet cloth (k_water
//     = 0.6 W/m·K) heats the batter from below while
//     CONDENSING STEAM (h = 5,000-25,000 W/m²·K) heats
//     from above, creating BILATERAL GELATINIZATION
//     that proceeds from BOTH surfaces simultaneously
//     toward the center, eliminating any raw center
//     layer even in a single-second cook
//  4. SCALLION OIL ALLYL METHYL SULFIDE (AMS)
//     PERSISTENCE — when scallions are fried in oil at
//     120-140°C, alliin→allicin→DAS→DADS→AMS cascade
//     produces AMS, which has an unusually LOW vapor
//     pressure (bp 92°C at atmospheric but extremely
//     HIGH oil/air partition coefficient K_o/a > 1000)
//     → AMS remains trapped in the lipid phase during
//     cooling and is released SLOWLY during eating as
//     the oil warms in the mouth → extended aromatic
//     persistence (minutes vs seconds for water-soluble
//     volatiles)
//  5. NƯỚC CHẤM TERNARY ACID-SUGAR-CAPSAICIN BALANCE —
//     fish sauce (glutamate 800-1200 mg/100mL + NaCl
//     20-25%) + lime (citric acid pH 2.2) + sugar
//     (sucrose 15-20%) + chili creates a FOUR-CHANNEL
//     sensory system: umami (T1R1/T1R3), salt (ENaC),
//     sweet (T1R2/T1R3), sour (OTOP1), with capsaicin
//     (TRPV1) as a neuromodulator that LOWERS detection
//     thresholds for all four basic tastes
//  6. QUẢNG NINH BÁNH CUỐN REGIONAL IDENTITY —
//     the Quảng Ninh variant uses SQUID FILLING instead
//     of the standard Hà Nội pork filling, creating a
//     fundamentally different mechanical composite:
//     paramyosin gel (G' 10-50 kPa) vs pork mince
//     (G' 0.5-2 kPa) → the Quảng Ninh version has
//     3-10× higher BITE RESISTANCE
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'banh-cuon-cha-muc',
  title: 'Bánh Cuốn Chả Mực (Quảng Ninh Steamed Rice Rolls with Squid Cake)',
  subtitle: 'Thin-film retrogradation kinetics accelerate amylose double-helix formation from hours to seconds in the 50-200 µm rice sheet, creating a sandwich-structure composite laminate with paramyosin gel core G\' 10-50 kPa delivering 3-10× higher bite resistance than standard pork-filled bánh cuốn.',
  category: 'APPETIZER',
  difficulty: 'Hard',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-cuon-cha-muc.jpg',

  intro: `Bánh Cuốn Chả Mực is Quảng Ninh's regional reinvention of Vietnam's beloved steamed rice rolls — replacing the classic Hà Nội pork-and-wood-ear filling with Hạ Long Bay's signature hand-pounded SQUID CAKE, creating a dish that is texturally, mechanically, and sensorially a COMPLETELY DIFFERENT eating experience. The combination of silky rice sheet and bouncy squid paste creates a composite structure that engineers would immediately recognize as a SANDWICH PANEL — one of the most efficient structural designs in materials science.

The CENTRAL MECHANISM is RICE BATTER THIN-FILM RETROGRADATION KINETICS. When rice batter (a suspension of gelatinized and partially gelatinized starch granules in water) is spread as a 50-200 µm film on the steaming cloth, it undergoes rapid gelatinization (starch granules absorb water, swell, and lose crystallinity) at 70-95°C. But the critical step happens AFTER the sheet is peeled from the cloth and begins to cool. Retrogradation — the process by which gelatinized starch chains re-associate into ordered double-helix junction zones — is dramatically accelerated in thin films compared to bulk systems. In a bowl of rice porridge (centimeters thick), retrogradation takes HOURS to DAYS because amylose chains must diffuse long distances through the viscous matrix to find partners for double-helix formation. Fick's second law tells us that the time for diffusion scales as t ∝ L²/D — where L is the diffusion distance and D is the diffusion coefficient. In a 100 µm film, L is 1,000× smaller than in a 10 cm bowl, so the diffusion time is 1,000,000× shorter. This means the amylose chains realign from a random-coil configuration into ordered double-helix junction zones within 10-30 SECONDS of peeling, giving the sheet its characteristic combination of TRANSLUCENCY (the ordered crystallites are too small to scatter visible light, unlike the larger spherulites in retrograded rice that appear opaque white) and FIRMNESS (the junction zones create a load-bearing network that resists deformation).

The COMPOSITE LAMINATE MECHANICS of filled bánh cuốn follows classical SANDWICH PANEL THEORY from aerospace and structural engineering. The rice sheet "skins" (50-200 µm thick, elastic modulus E_skin ≈ 0.1-1 MPa, high tensile strain-to-failure ε_f > 50%) provide flexibility and tensile strength — the sheet can be rolled, folded, and stretched without tearing. The squid paste "core" (5-10 mm thick, elastic modulus E_core ≈ 10-50 kPa from paramyosin gel, high compressive resistance) provides body and bite — it resists compression when teeth press down. The FLEXURAL RIGIDITY of the composite EI = E_skin · t_skin · d² + E_core · t_core³/12 (where d is the distance between skin centroids) means the filled roll is MUCH stiffer in bending than either component alone — the widely separated skins carry bending loads efficiently while the core carries shear. This is why a filled bánh cuốn holds its cylindrical shape while an empty one collapses flat.

The critical comparison with standard Hà Nội bánh cuốn (pork-and-wood-ear filling) reveals the Quảng Ninh variant's mechanical uniqueness. Pork mince filling has a gel modulus of G' = 0.5-2 kPa — it's soft, yielding, and deforms easily under bite force. Squid paramyosin filling has G' = 10-50 kPa — it's firm, elastic, and springs back. The 3-10× difference in core stiffness means the Quảng Ninh version requires SIGNIFICANTLY MORE BITE FORCE to compress, creating a satisfying resistance that the teeth "work through" rather than the instant collapse of the pork version. This is not better or worse — it's FUNDAMENTALLY DIFFERENT as an eating experience, like the difference between biting into a marshmallow versus a gummy candy.

The STEAMING CLOTH creates a remarkable BILATERAL HEAT TRANSFER system. The traditional approach stretches a fine muslin cloth over a pot of boiling water, creating a fabric-water interface below and a steam-saturated atmosphere above. When the thin batter is spread on the cloth, it receives heat from TWO DIRECTIONS simultaneously: CONDUCTION through the wet cloth from below (effective thermal conductivity k ≈ 0.4-0.6 W/m·K, limited by the cloth fiber-water composite) and CONDENSATION of steam from above (heat transfer coefficient h = 5,000-25,000 W/m²·K — condensation delivers the latent heat of vaporization 2,260 kJ/kg directly to the surface). The bilateral heating means the gelatinization front advances from BOTH surfaces toward the center, meeting in the middle within 30-60 seconds. For a 100 µm film, the thermal diffusion time t = L²/4α (where α = k/ρc_p ≈ 1.5 × 10⁻⁷ m²/s for starch batter) is approximately 0.02 seconds — the sheet reaches thermal equilibrium almost INSTANTANEOUSLY, ensuring perfectly uniform gelatinization with no raw center layer.

SCALLION OIL represents a sophisticated VOLATILE DELIVERY SYSTEM based on lipid-phase partitioning. When scallions (Allium fistulosum) are fried in oil at 120-140°C, the alliin→allicin→diallyl sulfide (DAS)→diallyl disulfide (DADS)→allyl methyl sulfide (AMS) cascade produces a suite of organosulfur compounds with varying lipophilicity. AMS is the KEY compound for bánh cuốn — it has a boiling point of 92°C but an extremely high OIL/AIR PARTITION COEFFICIENT (K_o/a > 1,000), meaning it overwhelmingly prefers to stay dissolved in the oil phase rather than evaporating into the air. This trapping effect means AMS is released VERY SLOWLY during eating: as the scallion oil warms from room temperature to mouth temperature (36-37°C), the partition coefficient decreases slightly and a small fraction of AMS escapes into the gas phase above the oral cavity, where it is swept retronasally to the olfactory epithelium. The result is PERSISTENT aromatic delivery — the scallion aroma lingers for MINUTES after each bite, compared to seconds for water-soluble volatiles that evaporate quickly from the aqueous saliva phase.

The NƯỚC CHẤM dipping sauce for bánh cuốn operates as a FOUR-CHANNEL SENSORY SYSTEM with capsaicin as a neuromodulatory amplifier. Fish sauce provides GLUTAMATE (800-1,200 mg/100mL) that activates T1R1/T1R3 umami receptors AND NaCl (20-25%) that activates ENaC sodium channels. Lime juice provides CITRIC ACID (pH 2.2) that activates OTOP1 proton channels (sour perception). Sugar provides SUCROSE (15-20%) that activates T1R2/T1R3 sweet receptors. These four channels are perceived simultaneously, creating a complex, balanced sensory experience. Capsaicin from chili binds TRPV1 receptors — which are not taste receptors but NOCICEPTORS (pain sensors) — and triggers the release of Substance P, a neuropeptide that has been shown to LOWER detection thresholds for all four basic tastes by 20-40%. In practical terms, capsaicin makes the fish sauce taste MORE umami, the lime MORE sour, the sugar MORE sweet, and the salt MORE salty — it amplifies the entire sensory spectrum without adding any taste of its own.`,

  ingredientSections: [
    {
      title: 'Rice Batter — Thin-Film Retrogradation System',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'rice flour (bột gạo tẻ)',
          note: 'Indica rice flour with 25-30% amylose — the long, linear amylose chains form double-helix junction zones during thin-film retrogradation, creating the firm-yet-translucent texture.',
        },
        {
          amount: 50,
          unit: 'g',
          name: 'tapioca starch (bột năng)',
          note: 'Amylopectin-dominant (>95%) — provides elasticity and prevents the rice sheet from becoming brittle. 15-20% of total flour weight.',
        },
        {
          amount: 600,
          unit: 'ml',
          name: 'water',
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'salt',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'cooking oil',
          note: 'Added to batter — reduces inter-sheet adhesion by creating a thin lipid film on the surface.',
        },
      ],
    },
    {
      title: 'Squid Cake Filling — Paramyosin Composite Core',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'fresh squid mantles, cleaned',
          note: 'See Chả Mực Hạ Long recipe for squid cleaning technique. Remove ink sac carefully.',
        },
        {
          amount: 50,
          unit: 'g',
          name: 'pork back fat, diced 3 mm',
        },
        {
          amount: 1.5,
          unit: 'tsp',
          name: 'salt',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'fish sauce',
        },
        {
          amount: 0.5,
          unit: 'tsp',
          name: 'white pepper',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'dill fronds, minced',
        },
      ],
    },
    {
      title: 'Scallion Oil — AMS Volatile Delivery System',
      items: [
        {
          amount: 4,
          unit: 'tbsp',
          name: 'cooking oil',
        },
        {
          amount: 4,
          unit: 'unit',
          name: 'scallions, thinly sliced',
          note: 'Fry at 120-140°C to drive the alliin→AMS cascade. AMS has K_o/a > 1,000 — it stays trapped in oil and releases slowly at mouth temperature.',
        },
      ],
    },
    {
      title: 'Nước Chấm — Four-Channel Sensory Amplifier',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'fish sauce',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'lime juice',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'sugar',
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'water',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'red chili, sliced',
          note: 'Capsaicin activates TRPV1 nociceptors → Substance P release → lowers detection thresholds for umami, salt, sweet, sour by 20-40%.',
        },
        {
          amount: 1,
          unit: 'clove',
          name: 'garlic, minced',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Prepare the squid filling — paramyosin extraction, 30 minutes',
      description: `CLEAN the squid mantles thoroughly — remove ink sacs, outer skin, and cartilage. PAT COMPLETELY DRY.

HAND-POUND the squid in a stone mortar with salt, fish sauce, and pepper for 20-25 minutes, following the same shear-rate-controlled technique as Chả Mực Hạ Long (γ̇ = 10-100 s⁻¹). The paste should be GLOSSY, STICKY, and HIGHLY ELASTIC — springing back immediately when pressed.

FOLD in the diced pork back fat and minced dill. Set aside.

SHAPE the filling into small, flat portions approximately 3 cm × 5 cm × 0.5 cm thick — thin enough to be enclosed by the rice sheet but thick enough to provide meaningful core resistance in the sandwich composite.`,
      tip: `FILLING THICKNESS MATTERS FOR COMPOSITE MECHANICS: The flexural rigidity of a sandwich panel scales with the SQUARE of the distance between the skins (d²). A filling that's 5 mm thick positions the rice sheet skins 5 mm apart, while a filling that's 10 mm thick positions them 10 mm apart — the latter has 4× the flexural rigidity. But there's a TRADE-OFF: too thick and the filling dominates the eating experience (you're just eating chả mực), too thin and there's no mechanical benefit (the roll collapses flat). The sweet spot is 5-8 mm — enough to create meaningful stiffness while maintaining the bánh cuốn identity where the RICE SHEET is the protagonist.`,
    },
    {
      title: 'Make the rice batter — starch suspension, 10 minutes + 30 minutes rest',
      description: `COMBINE rice flour, tapioca starch, salt, and oil in a mixing bowl. GRADUALLY add water while whisking to create a SMOOTH, LUMP-FREE batter with the consistency of thin cream.

REST the batter for 30 minutes — this allows the starch granules to fully HYDRATE, absorbing water into their amorphous regions. Fully hydrated granules gelatinize faster and more uniformly on the steaming cloth.

STIR the batter before each use — the denser starch granules settle over time, and an unmixed batter produces sheets with uneven thickness and texture.`,
      tip: `TAPIOCA-TO-RICE RATIO controls the RETROGRADATION-ELASTICITY BALANCE. Rice flour's amylose (25-30%) drives retrogradation — the firm, set texture. Tapioca's amylopectin (>95%) resists retrogradation — the stretchy, elastic quality. At 15-20% tapioca (the classic ratio), the sheet retrogrades enough to hold its shape but retains enough elasticity to roll without cracking. Below 10% tapioca → the sheet is firm but BRITTLE (cracks when rolled). Above 30% tapioca → the sheet is elastic but FLOPPY (won't hold its rolled shape). The 15-20% ratio is a MATERIALS ENGINEERING OPTIMIZATION, not a culinary tradition — though generations of cooks arrived at it empirically.`,
    },
    {
      title: 'Steam the rice sheets — bilateral gelatinization, 1-2 minutes per sheet',
      description: `STRETCH a fine muslin cloth tightly over a pot of rapidly boiling water. The cloth must be TAUT — any sagging creates pools where the batter accumulates unevenly.

LADLE a thin layer of batter (approximately 2 tablespoons) onto the cloth and QUICKLY spread it into a thin, even circle using the back of the ladle or a specialized spreader. The film should be 50-200 µm thick — thin enough to see the cloth texture through the batter.

COVER with a lid and steam for 30-60 seconds. The bilateral heat transfer — conduction from the wet cloth below + steam condensation from above — gelatinizes the film almost instantly.

CAREFULLY PEEL the sheet from the cloth using a thin bamboo stick or plastic scraper. The sheet should be TRANSLUCENT (indicating small crystallite retrogradation, not large spherulite opaque retrogradation) and FLEXIBLE (indicating adequate tapioca-derived elasticity).

IMMEDIATELY place a portion of squid filling on the sheet and ROLL into a cylinder. The sheet should be used within 10-30 seconds of peeling — this is the window where it's cool enough to handle but warm enough for the retrogradation to still be in progress, making it maximally pliable.`,
      tip: `THE 10-30 SECOND ROLLING WINDOW — RETROGRADATION IN REAL TIME: When you peel the sheet from the cloth, you are watching RETROGRADATION HAPPEN IN REAL TIME. The sheet starts HOT (>80°C), fully gelatinized, and maximally PLIABLE — the starch chains are in a random-coil, disordered state with no junction zones. As it cools through 60-40°C, the amylose chains begin finding each other and forming double-helix junction zones — you can FEEL the sheet becoming progressively FIRMER under your fingers. By 10-30 seconds (depending on ambient temperature), enough junction zones have formed that the sheet is FIRM but still FLEXIBLE. This is the ideal moment to roll — the sheet holds its cylindrical shape once rolled because the junction zones "remember" the rolled configuration. If you wait too long (>60 seconds), the retrogradation progresses too far and the sheet becomes STIFF — it cracks rather than bending.`,
    },
    {
      title: 'Prepare scallion oil and nước chấm — volatile architecture, 10 minutes',
      description: `SCALLION OIL: Heat oil in a small pan to 120-140°C (a scallion slice should sizzle gently, not violently). ADD sliced scallions and fry for 2-3 minutes until CRISPY and GOLDEN. The alliin→allicin→DAS→DADS→AMS cascade requires sustained heat — the allicin breakdown into diallyl sulfides needs temperatures above 100°C, and the subsequent methylation to AMS proceeds over 1-2 minutes.

NƯỚC CHẤM: Dissolve sugar in warm water. Add fish sauce, lime juice, minced garlic, and sliced chili. Stir to combine. Taste and adjust — the sauce should be balanced across all four channels: UMAMI (fish sauce), SOUR (lime), SWEET (sugar), SALT (fish sauce NaCl), with the chili providing TRPV1-mediated amplification.

DRIZZLE scallion oil over the rolled bánh cuốn. SERVE immediately with nước chấm on the side.`,
      tip: `CAPSAICIN AS A TASTE AMPLIFIER, NOT A FLAVOR: Capsaicin binds TRPV1 receptors, which are not taste receptors at all — they are NOCICEPTORS originally evolved to detect dangerous heat (>43°C). The burning sensation from chili is literally a pain signal, not a taste. But capsaicin has a remarkable secondary effect: the TRPV1 activation triggers release of Substance P and CGRP (calcitonin gene-related peptide) from trigeminal nerve endings in the oral cavity, and these neuropeptides SENSITIZE neighboring taste receptor cells. Studies have shown that sub-threshold concentrations of capsaicin LOWER the detection thresholds for all four basic tastes by 20-40% — meaning you can detect smaller amounts of salt, sugar, acid, and umami in the presence of chili. This is why nước chấm with chili tastes MORE COMPLEX than the same formula without — the capsaicin isn't adding a fifth taste, it's turning up the volume on the existing four.`,
    },
  ],
};

export default function BanhCuonChaMucPage() {
  return <RecipeLayout recipe={recipe} />;
}
