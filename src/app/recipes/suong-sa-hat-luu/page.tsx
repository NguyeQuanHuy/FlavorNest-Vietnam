'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Sương Sa Hạt Lựu — Grass Jelly & Pomegranate-Style
//  Tapioca Pearls Dessert
//  Sài Gòn #9
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  ─────────────────────────────────────────────────
//  1. MESONA CHINENSIS POLYSACCHARIDE GELATION — Grass
//     jelly (sương sa/sương sáo) is produced from
//     Mesona chinensis (Platostoma palustre), a plant
//     in the Lamiaceae family. The gelling agent is a
//     HIGH-MOLECULAR-WEIGHT POLYSACCHARIDE (MW 500-2000
//     kDa) composed of a backbone of β-1,4-linked
//     galacturonic acid with rhamnose, arabinose, and
//     xylose side chains — structurally similar to
//     pectin but with UNIQUE gelation behavior. Unlike
//     agar (which gels through double-helix aggregation)
//     or gelatin (triple-helix reformation), Mesona
//     polysaccharide gels through ALKALINE-INDUCED
//     CROSS-LINKING: potassium carbonate (K₂CO₃) or
//     sodium hydroxide at pH 8.5-10.0 ionizes the
//     galacturonic acid residues (pKa ≈ 3.5), creating
//     negatively charged COO⁻ groups that form IONIC
//     BRIDGES through divalent cations (Ca²⁺, Mg²⁺)
//     naturally present in the plant extract. The
//     resulting gel is SOFT, TREMBLING, and nearly
//     BLACK (from oxidized polyphenols — chlorogenic
//     acid and caffeic acid that auto-oxidize at
//     alkaline pH via polyphenol oxidase-independent
//     non-enzymatic quinone formation).
//
//  2. TAPIOCA STARCH GRANULE-TO-GEM TRANSFORMATION —
//     The "hạt lựu" (literally "pomegranate seeds")
//     are NOT actual pomegranate but small spheres of
//     TAPIOCA STARCH wrapped around cubes of water
//     chestnut or jicama, then boiled. The tapioca
//     starch coating undergoes a dramatic PHASE
//     TRANSITION during boiling: raw tapioca starch
//     granules (diameter 5-35 μm, among the LARGEST
//     of any food starch, with a bimodal size
//     distribution) are 17-22% crystalline (A-type
//     or C_A-type polymorph). Upon heating in excess
//     water to 62-72°C, the crystallites MELT
//     (endothermic, ΔH ≈ 14-18 J/g), the granules
//     SWELL to 30-50× their dry volume (the highest
//     swelling power of any commercial starch, due to
//     tapioca\’s very low amylose content of 17-22%
//     and minimal amylose-lipid complexes), and the
//     starch becomes a TRANSPARENT, ELASTIC GEL
//     coating around each water chestnut cube. The
//     transparency arises because gelatinized tapioca
//     has a refractive index (n ≈ 1.34-1.36) very
//     close to water (n = 1.33), minimizing light
//     scattering at the gel-liquid interface. Food
//     coloring (red from beetroot, green from pandan)
//     trapped in this transparent matrix gives the
//     pearls their JEWEL-LIKE appearance — colored
//     light passes through the gel like stained glass.
//
//  3. WATER CHESTNUT (CỦ NĂNG) FERULIC ACID CROSS-
//     LINKED CELL WALL — The crunch inside each hạt
//     lựu pearl comes from water chestnut (Eleocharis
//     dulcis), a corm whose cell walls contain an
//     unusually high concentration of FERULIC ACID
//     (3-methoxy-4-hydroxycinnamic acid) — 0.3-0.5%
//     of dry weight, 5-10× higher than most plant
//     tissues. Ferulic acid forms DIFERULATE CROSS-
//     LINKS between adjacent hemicellulose (arabinoxylan)
//     chains via OXIDATIVE COUPLING catalyzed by
//     peroxidase (EC 1.11.1.7) + H₂O₂. These diferulate
//     bridges create COVALENT cross-links (bond energy
//     ≈ 350-400 kJ/mol — 100× stronger than hydrogen
//     bonds) that make the cell wall EXCEPTIONALLY
//     RESISTANT to thermal softening. This is why water
//     chestnut remains CRUNCHY even after boiling for
//     30 minutes — a unique property among plant foods,
//     where most vegetables soften rapidly upon cooking
//     as pectin degrades and turgor is lost. The ferulic
//     acid cross-links are HEAT-STABLE (they are
//     covalent C-C and C-O bonds that require >200°C
//     to cleave), so the cell wall maintains its rigid
//     scaffold even at 100°C for extended periods.
//
//  4. COCONUT MILK × SUGAR SYRUP BINARY FLUID
//     DYNAMICS — Sương sa hạt lựu is served in a
//     BINARY LIQUID SYSTEM: sugar syrup (ρ ≈ 1.05-
//     1.15 g/cm³ at 15-25°Brix, η ≈ 1.5-3.0 mPa·s)
//     and coconut milk (ρ ≈ 0.97-1.01 g/cm³, η ≈
//     2-5 mPa·s). The density difference (Δρ ≈ 0.05-
//     0.15 g/cm³) drives BUOYANCY-DRIVEN SEPARATION:
//     when coconut milk is drizzled on top of sugar
//     syrup, it FLOATS (coconut fat at ρ = 0.92 g/cm³
//     reduces bulk density below that of the sugar
//     solution). The RAYLEIGH NUMBER Ra = gβΔρL³/(ηα)
//     determines the flow regime: at the length scales
//     and viscosities of a dessert glass (L ≈ 10 cm),
//     Ra ≈ 10³-10⁴, which is above the critical value
//     for convective instability (~1700 for a fluid
//     layer heated from below) but below the turbulent
//     regime (~10⁶). This means the coconut milk
//     descends in LAMINAR FINGERS (Rayleigh-Bénard-like
//     convection cells) rather than mixing chaotically,
//     creating the beautiful MARBLED WHITE-AND-CLEAR
//     visual when the diner stirs gently.
//
//  5. CRUSHED ICE NUCLEATION-CONTROLLED MELT RATE —
//     The crushed ice in sương sa hạt lựu is not merely
//     a cooling agent — it is a CONTROLLED DILUTION
//     SYSTEM. The melt rate of ice depends on the
//     SURFACE AREA TO VOLUME RATIO (SA/V): crushed
//     ice (particle diameter d ≈ 3-10 mm, SA/V ≈
//     600-2000 m⁻¹) melts 5-10× faster than ice cubes
//     (d ≈ 25 mm, SA/V ≈ 240 m⁻¹). In the 15-25°Brix
//     sugar syrup, the melting is further modulated by
//     FREEZING POINT DEPRESSION: sugar solutions have
//     a lower freezing point (ΔT_f ≈ -1.5 to -3.0°C
//     at 15-25°Brix via the colligative effect), which
//     REDUCES the temperature driving force for melting
//     (ΔT = T_syrup - T_f_syrup < T_syrup - 0°C),
//     slowing the melt rate compared to ice in pure
//     water. The net effect: crushed ice in sugar syrup
//     melts at approximately 60-70% the rate it would
//     in pure water, providing a 15-25 minute window
//     of cold dessert enjoyment before excessive
//     dilution — perfectly matched to the typical eating
//     time of a Vietnamese street dessert.
//
//  6. PANDAN JASMINE SYRUP OLFACTORY PRIMING — The
//     sugar syrup is infused with pandan leaf (2-acetyl-
//     1-pyrroline, 2AP) and sometimes jasmine flowers
//     (benzyl acetate, linalool, indole). These aromatic
//     compounds serve as OLFACTORY PRIMERS: detected
//     retronasally during the first sip, they activate
//     the olfactory bulb\’s pattern recognition system,
//     creating an EXPECTATION FRAME that shapes the
//     perception of all subsequent flavors. Specifically,
//     2AP (which is also the key aroma compound in
//     jasmine rice, popcorn, and bread crust) triggers
//     CROSS-MODAL ASSOCIATION with "warm, comforting,
//     grain-like" memories in the insular cortex,
//     priming the brain to perceive the dessert as
//     MORE COMFORTING and SATISFYING than its
//     caloric content alone would predict. This
//     neurological priming effect (documented in
//     sensory science as "odor-induced taste
//     enhancement") is why pandan-scented desserts
//     feel more satisfying at lower sugar levels
//     than unscented equivalents — the aroma does
//     part of the hedonic work that sugar would
//     otherwise need to do.
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'suong-sa-hat-luu',
  title: 'Sương Sa Hạt Lựu (Grass Jelly & Tapioca Pearl Dessert)',
  subtitle: 'Mesona chinensis alkaline-ionized polysaccharide gel meets tapioca starch granule-to-gem phase transition (30-50× swelling) — water chestnut cores with ferulic acid diferulate cross-links (350-400 kJ/mol covalent heat-resistance) — in a binary coconut milk/sugar syrup laminar-finger Rayleigh convection system.',
  category: 'DESSERT',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 6,
  heroImage: '/images/recipes/suong-sa-hat-luu.jpg',

  intro: `Sương sa hạt lựu — literally "dew jelly pomegranate seeds" — is the jewel box of Vietnamese dessert culture: a glass full of translucent gemstones (ruby red, emerald green, and amber gold tapioca pearls with crunchy water chestnut centers), trembling cubes of near-black grass jelly, white tendrils of coconut milk descending through crystal-clear pandan-scented sugar syrup, all over a bed of crushed ice that slowly dilutes the sweetness over a 20-minute eating window. It is a dessert engineered for VISUAL SPECTACLE, TEXTURAL COMPLEXITY, and THERMAL DYNAMICS in equal measure.

The GRASS JELLY (sương sa, also called sương sáo) is the dark, mysterious element of the composition. It is produced from Mesona chinensis (now reclassified as Platostoma palustre), a herbaceous plant in the mint family (Lamiaceae) native to Southeast and East Asia. The leaves and stems contain a unique HIGH-MOLECULAR-WEIGHT POLYSACCHARIDE (MW 500-2000 kDa) that gels through a mechanism found in no other food hydrocolloid: ALKALINE-INDUCED IONIC CROSS-LINKING. When the dried Mesona herb is boiled in water with a small amount of potassium carbonate (K₂CO₃) or sodium bicarbonate (pH 8.5-10.0), the galacturonic acid residues in the polysaccharide backbone become IONIZED (pKa of galacturonic acid ≈ 3.5, so at pH 9-10, virtually all carboxyl groups are in the COO⁻ form). These negatively charged groups then form IONIC BRIDGES through divalent cations (Ca²⁺ and Mg²⁺ naturally present in the plant extract at 50-200 mg/L), creating a three-dimensional gel network. The gel is characteristically SOFT and TREMBLING (G\’ ≈ 100-500 Pa — much softer than agar gels at G\’ ≈ 10,000-50,000 Pa) with a SMOOTH, SLIPPERY mouthfeel that has earned it the Vietnamese name "sương sa" (霜沙, "frost sand" — evoking its cool, crystalline character). The near-BLACK COLOR is produced by NON-ENZYMATIC oxidation of the plant\’s phenolic compounds: chlorogenic acid and caffeic acid auto-oxidize at alkaline pH (forming quinones, then polymerizing into dark melanin-like condensation products), a process independent of polyphenol oxidase enzyme activity — the enzyme is denatured by the boiling extraction, but the alkaline pH drives the oxidation chemistry forward without it.

The HẠT LỰU — the "pomegranate seeds" — are the jewels of this dessert, and their creation is a lesson in STARCH PHASE TRANSITION PHYSICS. Each pearl is a small cube of water chestnut (củ năng, Eleocharis dulcis) coated in a thin layer of tapioca starch, then boiled. The magic happens during boiling: raw tapioca starch exists as semi-crystalline GRANULES (diameter 5-35 μm, with a distinctive bimodal size distribution — small granules 5-10 μm and large granules 20-35 μm — that gives tapioca its unique pasting behavior). These granules are 17-22% crystalline, with the crystallites arranged in the A-type polymorph (the tightly packed crystal form found in cereal starches, as opposed to the B-type found in tuber starches — tapioca is unusual in being a ROOT starch with A-type crystals). Upon heating in excess water to the gelatinization temperature (62-72°C for tapioca), the crystallites MELT (endothermic transition, ΔH ≈ 14-18 J/g, measured by DSC), the granules absorb water and SWELL dramatically — tapioca has the HIGHEST SWELLING POWER of any commercial starch, reaching 30-50× the dry granule volume. This extreme swelling is due to tapioca\’s LOW AMYLOSE CONTENT (17-22%, compared to 25-28% for regular rice and 33-38% for mung bean): amylose molecules act as "restraining cables" that limit granule swelling, and with fewer restraining cables, tapioca granules can expand to extraordinary volumes. The fully swollen starch creates a TRANSPARENT, ELASTIC COATING around each water chestnut cube — transparent because the refractive index of gelatinized tapioca (n ≈ 1.34-1.36) nearly matches that of the surrounding water (n = 1.33), minimizing Mie scattering of visible light. Food coloring added to the starch coating is trapped in this transparent gel matrix, and because the gel does not scatter light, the color is transmitted directly through the pearl like light through a STAINED GLASS WINDOW — producing the brilliant ruby, emerald, and amber hues that give the dessert its visual drama.

Inside each translucent tapioca pearl, the WATER CHESTNUT provides a crunch that defies cooking logic. Most plant tissues soften within minutes of boiling as their pectin is depolymerized (β-eliminative degradation at elevated temperature) and their cell turgor is lost. Water chestnut is the dramatic exception: it remains CRUNCHY even after 30 minutes of boiling. The secret is FERULIC ACID CROSS-LINKING. Water chestnut cell walls contain an extraordinarily high concentration of ferulic acid (3-methoxy-4-hydroxycinnamic acid) — 0.3-0.5% of dry weight, among the highest of any edible plant tissue (most vegetables contain 0.01-0.05%). This ferulic acid is esterified to the arabinose side chains of hemicellulose (arabinoxylan), and adjacent ferulic acid molecules are coupled into DIFERULATE BRIDGES by peroxidase (EC 1.11.1.7) + H₂O₂ during the plant\’s growth. Each diferulate bridge is a COVALENT BOND (C-C or C-O-C, bond dissociation energy ≈ 350-400 kJ/mol) linking two hemicellulose chains across the cell wall. Compare this to the HYDROGEN BONDS that maintain most plant cell wall structures (bond energy ≈ 5-30 kJ/mol) or the IONIC BRIDGES (Ca²⁺-pectin "egg box," bond energy ≈ 20-80 kJ/mol): the diferulate cross-links are 10-100× STRONGER. Boiling water at 100°C provides thermal energy of only kT ≈ 3.1 kJ/mol per degree of freedom — vastly insufficient to cleave a 350 kJ/mol covalent bond. So while boiling readily disrupts the hydrogen bonds and ionic bridges of other vegetables\’ cell walls (causing softening), it CANNOT disrupt the diferulate cross-links of water chestnut. The cell wall scaffold remains rigid, the cells maintain their structural integrity, and the crunch persists — making water chestnut the ideal heat-stable crunchy center for a dessert that is assembled with boiling-hot components.

The LIQUID MEDIUM is a study in BINARY FLUID DYNAMICS. Sugar syrup (15-25°Brix, ρ ≈ 1.05-1.15 g/cm³) and coconut milk (ρ ≈ 0.97-1.01 g/cm³) have a density difference Δρ ≈ 0.05-0.15 g/cm³ that drives buoyancy-driven separation. When coconut milk is drizzled on top of the sugar syrup, it initially floats (lower density), but small perturbations — the diner inserting a spoon, thermal convection from the ice, diffusion-driven density changes at the interface — create LAMINAR DESCENDING FINGERS of white coconut milk penetrating the clear syrup. The Rayleigh number Ra ≈ 10³-10⁴ places this flow in the LAMINAR CONVECTION regime: organized, beautiful, slowly evolving patterns rather than chaotic turbulent mixing. This is the visual phenomenon that makes sương sa hạt lựu so photogenic — the white coconut tendrils descending through the jewel-colored pearls and dark jelly cubes create a scene of controlled chaos that changes with every second.

The CRUSHED ICE provides CONTROLLED DILUTION over the eating period. Ice melts at 0°C in pure water, but the sugar syrup\’s freezing point is depressed by ΔT_f ≈ -1.5 to -3.0°C (colligative effect of 15-25% dissolved sucrose). This means the temperature driving force for ice melting in syrup (ΔT = T_syrup - T_f ≈ 25-28°C for a room-temperature syrup with T_f ≈ -2°C) is LESS than in pure water (ΔT = 25°C - 0°C = 25°C), slowing the melt rate by approximately 30-40%. For the crushed ice used in this dessert (particle diameter d ≈ 3-10 mm), the melt time in syrup is approximately 15-25 minutes — perfectly calibrated to the eating time of a Vietnamese street dessert. The progressive dilution has a hedonic function: the dessert starts INTENSELY SWEET (25°Brix), then gradually becomes LIGHTER and more REFRESHING as the ice melt dilutes the syrup toward 10-15°Brix over the eating period — a built-in SWEETNESS ARC that prevents palate fatigue.

The PANDAN-SCENTED SYRUP adds a neurological dimension: OLFACTORY PRIMING. The key volatile 2-acetyl-1-pyrroline (2AP, 5-50 ppm in pandan extract) is the same compound responsible for the aroma of jasmine rice, popcorn, and bread crust. Detected retronasally during the first sip, 2AP activates olfactory receptor OR1G1 and triggers cross-modal associations in the insular cortex with "warm, grain-like, comforting" experiences. This PRIMES the brain to perceive the dessert as more satisfying than its caloric content alone would predict — a phenomenon documented in sensory science as odor-induced taste enhancement (OITE). Practically, this means pandan-scented desserts achieve equivalent hedonic ratings at 15-20% LESS SUGAR than unscented equivalents — the aroma does part of the brain\’s satisfaction work.`,

  ingredientSections: [
    {
      title: 'Grass jelly (Sương sa)',
      items: [
        {
          amount: 50,
          unit: 'g',
          name: 'dried Mesona chinensis herb (lá sương sáo khô)',
          note: 'Available at Asian grocery stores as dried dark leaves/stems. The polysaccharide content of dried Mesona is approximately 5-15% of dry weight — higher-quality grades have more polysaccharide and produce a firmer, more flavorful jelly. Alternatively, use 25g of Mesona powder (pre-extracted and powdered) or a commercial grass jelly block (thạch đen) and skip to cutting.',
        },
        {
          amount: 1,
          unit: 'L',
          name: 'water (for extraction)',
        },
        {
          amount: 0.5,
          unit: 'tsp',
          name: 'potassium carbonate (K₂CO₃) or baking soda',
          note: 'THE ALKALINE GELLING AGENT. K₂CO₃ (potash) raises the pH to 8.5-10.0, ionizing the galacturonic acid residues (pKa 3.5) of the Mesona polysaccharide to COO⁻, enabling ionic cross-linking via Ca²⁺/Mg²⁺. Baking soda (NaHCO₃) can substitute but produces a slightly softer gel (Na⁺ has lower cross-linking efficiency than K⁺ for this polysaccharide). Too much alkali → bitter taste; too little → gel won\’t set.',
        },
        {
          amount: 10,
          unit: 'g',
          name: 'tapioca starch (for grass jelly firming)',
          note: 'Dissolved in 50 mL cold water and added to the hot Mesona extract. The tapioca starch provides a SECONDARY GEL NETWORK that interpenetrates the polysaccharide gel, increasing firmness from G\’ ≈ 100 Pa to G\’ ≈ 300-500 Pa — firm enough to cut into cubes that hold their shape when scooped but still tremblingly soft on the palate.',
        },
      ],
    },
    {
      title: 'Hạt lựu (Tapioca-coated water chestnut pearls)',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'fresh water chestnuts (củ năng), peeled',
          note: 'Use FRESH water chestnuts, not canned. Fresh water chestnuts have intact cell walls with functional diferulate cross-links — their crunch is dramatically superior to canned (which have been heat-sterilized at 121°C under pressure, partially degrading even the covalent cross-links). If unavailable, jicama (củ đậu/sắn nước) is an acceptable substitute — it also retains crunch when cooked, though via a different mechanism (high inulin and cellulose content rather than ferulic acid cross-links). Cut into 1 cm cubes.',
        },
        {
          amount: 150,
          unit: 'g',
          name: 'tapioca starch (bột năng)',
          note: 'For coating the water chestnut cubes. Tapioca starch\’s extreme swelling power (30-50× dry volume) and high transparency (refractive index n ≈ 1.34-1.36, close to water\’s n = 1.33) are the keys to the "jewel" effect. Cornstarch or potato starch will NOT work — cornstarch produces an OPAQUE gel (higher amylose content causes light-scattering amylose aggregation), and potato starch, while transparent, produces a SLIMY rather than elastic coating.',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'red food coloring (or beetroot juice)',
          note: 'For one-third of the pearls (ruby). Traditional red comes from synthetic food dye; for a natural alternative, use concentrated beetroot juice (betanin pigment, λ_max = 538 nm, producing the characteristic ruby-red).',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'green pandan extract',
          note: 'For one-third of the pearls (emerald). Made by blending pandan leaves with a minimal amount of water — the chlorophyll provides green color while 2AP provides aroma.',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'yellow food coloring (or turmeric)',
          note: 'For one-third of the pearls (amber/gold). Turmeric provides curcumin (λ_max = 420 nm, producing yellow-gold), which is fat-soluble but can be dispersed in the starch matrix at the concentrations used.',
        },
      ],
    },
    {
      title: 'Pandan sugar syrup',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'granulated sugar',
        },
        {
          amount: 800,
          unit: 'mL',
          name: 'water',
        },
        {
          amount: 4,
          unit: 'unit',
          name: 'pandan leaves (lá dứa), tied in a knot',
          note: 'Knotting BRUISES the leaf tissue, rupturing cell walls and releasing 2-acetyl-1-pyrroline (2AP) and chlorophyll into the simmering syrup. The knot also prevents the leaves from dispersing and makes removal easy. Simmer for 15-20 minutes — 2AP is heat-stable below 170°C but slowly volatilizes from open simmering (Henry\’s law constant H ≈ 10⁻⁴ atm·m³/mol), so covered simmering preserves more aroma.',
        },
      ],
    },
    {
      title: 'Topping',
      items: [
        {
          amount: 300,
          unit: 'mL',
          name: 'coconut cream, chilled',
          note: 'Full-fat coconut cream (24-35% fat). The density (ρ ≈ 0.97-1.01 g/cm³) is LOWER than the sugar syrup (ρ ≈ 1.05-1.15 g/cm³), ensuring the coconut cream floats and creates the characteristic layered visual. Chilling to 4-8°C partially crystallizes the lauric acid triglycerides, thickening the cream to a pourable-drizzle consistency.',
        },
        {
          amount: 1,
          unit: 'pinch',
          name: 'salt (for coconut cream)',
        },
        {
          amount: 400,
          unit: 'g',
          name: 'crushed ice',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Make grass jelly — alkaline polysaccharide gelation, 40 minutes',
      description: `OPTION A (from dried herb): Wash the dried Mesona herb. Bring 1L of water to a boil, add the herb and K₂CO₃ (½ tsp). Reduce heat and simmer for 30 minutes, stirring occasionally. The liquid will turn DARK BROWN to near-BLACK as the polyphenols oxidize in the alkaline environment (chlorogenic acid → chlorogenoquinone → melanin-like polymers). Strain through a fine sieve, pressing the herb to extract all liquid. You should have approximately 600-700 mL of concentrated dark extract.

Return the extract to the pot. Dissolve 10g tapioca starch in 50 mL cold water and add to the hot extract while stirring vigorously. Bring to a brief boil — the tapioca will gelatinize and thicken the mixture slightly.

Pour into a shallow pan and allow to cool at room temperature for 1-2 hours. The gel sets as it cools below approximately 40-50°C (the ionic cross-links strengthen as thermal energy decreases and the Ca²⁺/Mg²⁺ bridges stabilize). Refrigerate for at least 30 minutes for a firmer set.

OPTION B (from commercial block): Cut a store-bought grass jelly block (thạch đen) into 1.5-2 cm cubes. This saves 40 minutes and produces a very consistent result.

Cut the set grass jelly into 1.5-2 cm cubes. They should be TREMBLINGLY SOFT — jiggling when the pan is shaken — but firm enough to pick up with a spoon without disintegrating.`,
      tip: `MESONA GELATION vs AGAR GELATION — TWO FUNDAMENTALLY DIFFERENT MECHANISMS: Agar gels (used in the pandan jelly of chè ba màu) form through PHYSICAL CROSS-LINKS — agarose double helices that aggregate into bundles via hydrogen bonds and hydrophobic interactions. These physical cross-links are THERMOREVERSIBLE (they melt when heated above 85°C and reform upon cooling). Mesona grass jelly gels through IONIC CROSS-LINKS — divalent cations (Ca²⁺, Mg²⁺) bridging between ionized galacturonic acid residues on adjacent polysaccharide chains. These ionic cross-links are ALSO thermoreversible (they weaken with heating and strengthen with cooling) but at MUCH LOWER temperatures than agar — grass jelly softens at 50-60°C and firms at 30-40°C. The gel modulus is also much lower: G\’ ≈ 100-500 Pa for grass jelly vs G\’ ≈ 10,000-50,000 Pa for agar. This makes grass jelly SOFTER, more TREMBLING, and more SLIPPERY in the mouth — qualities prized in Vietnamese dessert culture, where the ideal jelly should "slip off the spoon" (trơn muỗng). The dark color is a BONUS of the alkaline extraction: the same alkaline pH that enables ionic cross-linking also drives non-enzymatic phenolic oxidation, producing the near-black color that makes grass jelly the dark counterpoint to the jewel-bright hạt lựu.`,
    },
    {
      title: 'Make hạt lựu pearls — starch granule-to-gem transformation',
      description: `Divide the water chestnut cubes into three equal portions. In three separate bowls:
— Bowl 1: Toss water chestnut cubes with red food coloring (or beetroot juice)
— Bowl 2: Toss with green pandan extract
— Bowl 3: Toss with yellow food coloring (or turmeric solution)

Add tapioca starch (50g per bowl) to each bowl. Toss the colored water chestnut cubes in the starch until each cube is COMPLETELY and EVENLY coated with a layer approximately 2-3 mm thick. The colored liquid on the cube surface hydrates the innermost layer of starch, making it sticky enough to hold additional dry starch. If needed, sprinkle a few drops of water and toss again to build up the coating.

Shake off excess loose starch (unattached starch will cloud the cooking water and make the syrup gummy).

Bring a large pot of water to a ROLLING BOIL. Working in batches by color (to prevent cross-contamination of dyes), drop the coated cubes into the boiling water. Stir gently to prevent sticking.

The PHASE TRANSITION is visible: within 30-60 seconds, the opaque white starch coating becomes TRANSPARENT as the granules gelatinize (crystallites melt, granules swell 30-50×, refractive index approaches that of water). The colored dye trapped in the now-transparent gel matrix produces the STAINED-GLASS EFFECT — brilliant ruby, emerald, or amber spheres with a visible white-crunchy water chestnut core.

Cook for 3-4 minutes total. The pearls are done when the starch coating is COMPLETELY TRANSPARENT with no white opaque patches (white patches indicate un-gelatinized starch crystallites — continue cooking until they disappear).

Remove with a slotted spoon and immediately plunge into ICE WATER. This rapid cooling SETS the gelatinized starch into a firm elastic gel (rapid cooling prevents excessive amylose leaching) and stops the pearls from becoming gummy. Drain and set aside.`,
      tip: `THE STAINED GLASS EFFECT — WHY TAPIOCA IS THE ONLY STARCH THAT WORKS: The jewel-like transparency of hạt lựu depends on TWO unique properties of tapioca starch: (1) EXTREME SWELLING POWER — tapioca granules swell to 30-50× their dry volume because of their low amylose content (17-22%). Amylose acts as a "restraining cable" within the granule: its linear chains form a network that resists swelling, like rubber bands wrapped around a balloon. With fewer restraining cables, tapioca granules swell much more than cornstarch (amylose 25-28%, swelling 10-15×) or wheat starch (amylose 25-30%, swelling 8-12×). This extreme swelling produces a THIN, UNIFORM gel coating rather than a thick, lumpy one. (2) LOW REFRACTIVE INDEX — gelatinized tapioca has n ≈ 1.34-1.36, very close to water\’s n = 1.33. Light passing from water into the gel is barely refracted or scattered (Mie scattering intensity ∝ (n_gel - n_water)², which is nearly zero for tapioca). By contrast, cornstarch gel has a higher effective refractive index due to retrograded amylose aggregates that act as SCATTERING CENTERS — producing the opaque, cloudy appearance of cornstarch pudding. Tapioca\’s combination of extreme swelling + near-water refractive index makes it the ONLY common starch that can produce the transparent gem-like coating required for hạt lựu.`,
    },
    {
      title: 'Make pandan sugar syrup — olfactory primer infusion',
      description: `Combine 200g sugar, 800 mL water, and 4 knotted pandan leaves in a saucepan. Heat over medium heat, stirring until sugar dissolves completely.

Once dissolved, reduce heat to low and SIMMER (not boil — 80-90°C) with the lid partially on for 15-20 minutes. The pandan leaves release their volatile 2-acetyl-1-pyrroline (2AP) into the syrup — a covered simmer preserves more aroma than open boiling because 2AP, being volatile (Henry\’s law constant H ≈ 10⁻⁴ atm·m³/mol), escapes rapidly from the liquid surface when exposed to the atmosphere. The syrup should develop a pale green tint and a distinctly floral-grain aroma.

Remove from heat. Discard pandan leaves. The final Brix should be approximately 20-25°Brix (check by tasting: distinctly sweet but not cloying — thinner than simple syrup but sweeter than lightly sweetened tea).

Cool to room temperature, then REFRIGERATE until cold (4-8°C). Cold syrup is essential for two reasons: (1) it will chill the entire dessert to a refreshing temperature; (2) cold increases the syrup\’s viscosity (η ≈ 3 mPa·s at 5°C vs η ≈ 1.5 mPa·s at 25°C), which slows the descent of the tapioca pearls and grass jelly cubes, keeping them suspended longer in the glass for better visual layering.`,
      tip: `OLFACTORY PRIMING — THE NEUROSCIENCE OF PANDAN: When you take the first sip of pandan-scented syrup, 2-acetyl-1-pyrroline (2AP) molecules are carried from the oral cavity through the retronasal pathway to the olfactory epithelium, where they bind to olfactory receptor OR1G1. This activates a neural signal that travels to the olfactory bulb, then to the pyriform cortex (primary olfactory processing), and then to the INSULAR CORTEX and AMYGDALA (where flavor is integrated with memory, emotion, and reward). Because 2AP is the same molecule found in jasmine rice, freshly baked bread, and popcorn — all "comfort foods" across multiple cultures — the brain\’s PATTERN RECOGNITION system retrieves cross-modal associations with warmth, nourishment, and satisfaction. This PRIMES the reward circuit: subsequent spoonfuls of the dessert are processed through a "comforting food" expectation frame, enhancing the perceived pleasantness (hedonic score increases 10-15% over unscented controls in sensory panels). Practically, this means pandan-scented desserts can use 15-20% LESS SUGAR than unscented equivalents while achieving the same satisfaction rating — the olfactory system does part of the hedonic work, reducing the sugar burden. This is a natural example of what food scientists call "phantom aroma enhancement" — aroma making the brain perceive more sweetness than the taste buds alone would report.`,
    },
    {
      title: 'Assemble — binary fluid dynamics in a glass',
      description: `Use tall, clear glasses (300-400 mL). Assemble each glass in this order:

1. CRUSHED ICE: Fill the glass one-third full with crushed ice. The ice establishes the thermal baseline — everything added on top will be chilled by contact.

2. GRASS JELLY CUBES: Add 4-6 cubes of grass jelly. Their near-black color against the white ice creates the first visual contrast.

3. HẠT LỰU PEARLS: Add 2-3 tablespoons of mixed-color tapioca pearls (ruby, emerald, amber). Distribute evenly — the transparent, colored gems against the dark jelly and white ice create the "jewel box" effect.

4. PANDAN SUGAR SYRUP: Pour cold pandan syrup to fill the glass approximately three-quarters full. Pour SLOWLY down the side of the glass to minimize turbulence — you want the pearls and jelly to remain in their placed positions rather than swirling chaotically.

5. MORE CRUSHED ICE: Add a second layer of crushed ice on top, filling to near the rim.

6. COCONUT CREAM: Drizzle 3-4 tablespoons of chilled coconut cream on top of the ice. The cream (ρ ≈ 0.98 g/cm³) is LESS DENSE than the sugar syrup (ρ ≈ 1.10 g/cm³), so it floats initially. As the diner watches, small perturbations cause the coconut cream to descend in LAMINAR FINGERS through the syrup — white tendrils penetrating through the colored pearls and dark jelly cubes, creating an ever-changing visual display.

Serve immediately with a long spoon and a wide straw. The eating method: use the spoon to scoop pearls and jelly from the bottom, and the straw to sip the coconut-marbled syrup. As the ice melts over 15-25 minutes, the sweetness progressively diminishes — a built-in flavor arc from intense to refreshing.`,
      tip: `LAMINAR FINGERS — THE FLUID DYNAMICS OF BEAUTY: The visual magic of sương sa hạt lựu — the descending white coconut tendrils through clear syrup — is a manifestation of BUOYANCY-DRIVEN VISCOUS FINGERING (a form of Rayleigh-Taylor instability, but in the STABLE direction — the heavier fluid is on the bottom). When coconut cream (less dense) sits atop sugar syrup (more dense), the system is gravitationally STABLE — the heavy fluid is below. However, the interface is not perfectly flat, and any small perturbation (a bump, a convection current from the melting ice, the diner inserting a spoon) causes a local patch of coconut cream to dip slightly into the denser syrup. Because the cream is more viscous than the syrup (η_cream ≈ 3-5 mPa·s vs η_syrup ≈ 1.5-3 mPa·s at serving temperature), this perturbation doesn\’t immediately bounce back — instead, it develops into a VISCOUS FINGER: a thin tendril of cream descending slowly through the syrup, driven by the local mixing of the two fluids at the finger tip (which changes the local density). The Rayleigh number Ra ≈ 10³-10⁴ ensures these fingers remain LAMINAR (smooth, organized) rather than turbulent (chaotic). The result: a slowly evolving, visually mesmerizing pattern of white tendrils that transforms the glass into a living artwork over the 2-3 minutes between serving and the first stir. This beauty is not designed — it is an EMERGENT property of the density and viscosity differences between two edible fluids. The vendor merely provides the initial conditions; physics paints the picture.`,
    },
  ],
};

export default function SuongSaHatLuuPage() {
  return <RecipeLayout recipe={recipe} />;
}
