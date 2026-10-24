'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Chè Kho',
  subtitle: 'Dried Mung Bean Pudding — Starch Retrogradation-Controlled Amylose Gel Architecture in a Low-Moisture Matrix',
  heroImage: '/images/recipes/che-kho.jpg',
  region: 'Northern' as const,
  difficulty: 'Medium',
  prepTime: '30 min + overnight soak',
  cookTime: '1.5 hr',
  totalTime: '2 hr + setting',
  servings: 20,
  rating: 4.5,
  reviewCount: 176,
  calories: 85,
  tags: ['Tết', 'Northern', 'Dessert', 'Mung Bean', 'Traditional', 'Ancestral Offering'],

  introduction: {
    paragraphs: [
      "Chè kho is a STARCH RETROGRADATION ENGINE — the deliberate exploitation of mung bean (Vigna radiata) amylose's tendency to RE-CRYSTALLIZE after gelatinization, creating a firm, sliceable pudding from what begins as a fluid paste. Unlike most desserts where retrogradation is an undesired staling process (bread going hard, rice becoming chalky), chè kho INVERTS the paradigm: retrogradation IS the cooking method. The process begins with GELATINIZATION — heating the soaked, skinned mung bean paste in water above the gelatinization temperature Tg ≈ 63-68°C for mung bean starch (lower than rice starch Tg ≈ 68-75°C or wheat starch Tg ≈ 58-64°C because mung bean starch granules have a LOWER DEGREE OF CRYSTALLINITY — their A-type crystal polymorph occupies only 25-30% of the granule volume, compared to 35-40% for cereal starches). During gelatinization, the starch granules absorb water (swelling 10-30× their dry volume), the crystalline regions melt, and the AMYLOSE MOLECULES (linear α-1,4-glucan chains, degree of polymerization DP 500-2,000, MW 80-320 kDa) LEACH out of the swollen granule into the surrounding aqueous phase, forming a VISCOUS SOL (a colloidal dispersion of dissolved amylose in water, concentration 5-15% w/v at typical chè kho consistency). The critical transformation occurs during COOLING and DEHYDRATION: the dissolved amylose chains, now free in solution, begin to RE-ASSOCIATE through HYDROGEN BONDING between the C-2, C-3, and C-6 hydroxyl groups on adjacent glucose residues. Unlike amylopectin's slow retrogradation (weeks to months, because its branched architecture impedes chain alignment), amylose retrogradation is RAPID — 60-80% of the crystallinity develops within the first 24 hours at room temperature because the LINEAR chains can align parallel to each other with minimal steric hindrance, forming DOUBLE HELICES (two amylose chains wind around each other in a left-handed helix with 6 glucose residues per turn, pitch 2.1nm) that then pack into B-type crystal lattices (hexagonal unit cell, a = b = 1.85nm, c = 1.04nm, with 36 water molecules per unit cell occupying the central channel).",
      "The SUGAR plays a dual role in chè kho that distinguishes it from plain mung bean starch gels: (1) PLASTICIZER — sucrose molecules (MW 342 Da) insert themselves between the amylose chains, occupying the inter-chain spaces that would otherwise be filled by water. At the sugar concentrations used in chè kho (30-40% w/w of the final product), sucrose reduces the GLASS TRANSITION TEMPERATURE Tg of the amylose-sugar-water matrix from ~200°C (pure dry amylose) to ~40-60°C (depending on residual moisture content). This Tg depression is governed by the Gordon-Taylor equation: Tg_mix = (w₁·Tg₁ + k·w₂·Tg₂)/(w₁ + k·w₂), where w₁ and w₂ are weight fractions of amylose and sucrose+water respectively, and k ≈ 4.7 is the Gordon-Taylor constant for the starch-sucrose system. At the final moisture content of chè kho (~15-20% w/w), the Tg_mix falls to approximately 45-55°C — ABOVE room temperature but BELOW mouth temperature (37°C is below Tg_mix, meaning the product is in the GLASSY STATE at room temperature — rigid, sliceable — but approaches the glass transition during prolonged oral exposure, softening slightly as mastication warms it). (2) RETROGRADATION MODULATOR — sucrose at >20% concentration SLOWS amylose retrogradation by 2-3× because the sucrose molecules compete with amylose's hydroxyl groups for hydrogen bonding with water (sucrose has 8 hydroxyl groups per molecule, each capable of forming 2-3 hydrogen bonds with water), reducing the effective concentration of 'free water' available to hydrate the inter-chain spaces in the B-type crystal. This slowing is BENEFICIAL — it prevents the RAPID, UNCONTROLLED retrogradation that would produce a GRAINY, CRUMBLY texture (too many small crystallites forming too quickly, with insufficient amorphous matrix between them to provide cohesion) and instead promotes SLOW, ORGANIZED retrogradation that produces a SMOOTH, DENSE gel with large crystalline domains embedded in a continuous amorphous amylose-sucrose glass.",
      "Chè kho occupies a unique position among Vietnamese Tết desserts: it is the ANCESTRAL OFFERING SWEET (cúng ông bà), placed on the family altar alongside fruit and incense during the Tết period. Its GOLDEN COLOR (from the natural xanthophyll pigments in mung bean — lutein and zeaxanthin, carotenoid pigments at 5-15 μg/g dry weight that survive cooking because they are heat-stable up to ~170°C) symbolizes GOLD and PROSPERITY in Vietnamese-Chinese cosmological tradition. Its DENSITY and WEIGHT (specific gravity ~1.3-1.4 g/cm³, notably heavier than water) symbolize SUBSTANCE and GROUNDEDNESS — the wish for a year of material stability. And its KEEPING QUALITY — the low water activity (aw ≈ 0.75-0.80, below the growth threshold of most spoilage organisms) combined with the high sugar content provides 1-2 weeks of room-temperature stability without refrigeration — makes it practical as an offering that remains on the altar for the 3-day Tết period without spoiling. The act of making chè kho is itself ritualistic: the LONG, CONTINUOUS STIRRING (khuấy liên tục, 45-60 minutes without stopping) is traditionally performed by the eldest daughter or daughter-in-law as a meditation on PATIENCE and DEVOTION — the physical labor of stirring against the progressively thickening paste (viscosity increases from ~100 mPa·s to ~50,000 mPa·s over the cooking period) is understood as a form of filial offering, the cook's effort literally embodied in the food."
    ]
  },

  ingredients: [
    {
      group: 'Mung Bean Base',
      items: [
        { name: 'Dried hulled split mung beans (đậu xanh đã xát vỏ)', amount: '400g', note: 'Hulled — no green skin — pure yellow cotyledon for clean color and smooth texture' },
        { name: 'Water for soaking', amount: '1 liter', note: 'Room temperature — 6-8 hours or overnight' },
        { name: 'Water for steaming/cooking', amount: 'As needed', note: 'Steam rather than boil to minimize amylose leaching into cooking water' },
      ]
    },
    {
      group: 'Sweetening & Aromatics',
      items: [
        { name: 'Granulated white sugar', amount: '250g', note: '~0.6:1 sugar-to-bean ratio — less than confections, more than savory' },
        { name: 'Coconut cream (nước cốt dừa)', amount: '200ml', note: 'Full-fat first press — MCT lauric acid provides richness and plasticization' },
        { name: 'Vanilla extract or vanilla bean', amount: '1 tsp or ½ pod', note: 'Vanillin aromatic bridge between mung bean pyrazines and coconut lactones' },
        { name: 'Toasted sesame seeds', amount: '2 tbsp', note: 'Garnish — 2-methylfuran and furfurylthiol Maillard aromatics' },
        { name: 'Vegetable oil or coconut oil', amount: '1 tbsp', note: 'For greasing the mold — release agent' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Soaking & Hydration — Starch Granule Pre-Swelling',
      details: 'Rinse the hulled split mung beans (đậu xanh cà/đậu xanh đã xát vỏ) in several changes of water until the water runs clear — the rinse removes surface starch dust, saponins (triterpene glycosides that produce foam and a bitter taste), and the water-soluble trypsin inhibitors (Bowman-Birk type, MW ~8 kDa, composed of two homologous domains each containing 7 disulfide bonds) that raw legumes contain as anti-herbivory defenses. Soak in 1 liter of room-temperature water for 6-8 hours or overnight. During soaking, the mung bean cotyledons absorb water by CAPILLARY IMBIBITION through the porous starch-protein matrix (initial moisture content ~10-12%, equilibrium hydrated moisture ~55-60%). The water absorption follows a TWO-PHASE KINETIC MODEL: Phase 1 (0-2 hours) — rapid absorption governed by capillary pressure in the inter-granular pores (pore diameter 1-10μm between the packed starch granules), following Washburn\'s equation L² = γr·cos θ·t/2η, where L is the penetration depth, γ the surface tension, r the pore radius, θ the contact angle, and η the viscosity. Phase 2 (2-8 hours) — slow diffusion-controlled absorption into the starch granules themselves (Fickian diffusion with D ≈ 1-5 × 10⁻¹² m²/s through the semi-crystalline granule structure). The cotyledons swell 1.5-2× their dry volume and become soft enough to crush between fingers — the ENDPOINT TEST for adequate soaking. Under-soaked beans (hard center remaining) will produce GRITTY chè kho because the unhydrated starch granules in the core resist gelatinization, surviving as unswollen inclusions in the otherwise smooth paste.',
      time: '6-8 hours',
      tip: 'The choice of HULLED SPLIT mung beans (đậu xanh cà) versus WHOLE mung beans (đậu xanh nguyên hạt) is critical for chè kho. The green hull (seed coat, testa) contains 3-5% TANNINS (condensed proanthocyanidins, polymers of flavan-3-ol units with DP 4-12) that produce ASTRINGENCY (the dry, puckering mouthfeel caused by tannin-protein cross-linking with salivary proline-rich proteins, precipitating the mucin lubricant film from the oral mucosa). In savory preparations like mung bean soup (chè đậu xanh nước), the tannins contribute desirable complexity. But in chè kho — where the goal is PURE, CLEAN SWEETNESS without any astringent interference — the hull tannins would create a discordant bitter-astringent background that fights the sugar. Additionally, the hull\'s GREEN CHLOROPHYLL pigments would muddy the desired GOLDEN COLOR: chlorophyll a (blue-green, λmax 430/663nm) and b (yellow-green, λmax 453/642nm) mixed with the cotyledon\'s yellow xanthophylls would produce an unappealing olive-drab rather than the pure gold. The hulling process removes these problems: the mechanical abrasion strips the testa (and with it, the tannins + chlorophyll), revealing the yellow cotyledon containing only xanthophyll pigments (lutein at 5-10 μg/g + zeaxanthin at 2-5 μg/g) that produce the characteristic golden hue of quality chè kho.'
    },
    {
      step: 2,
      title: 'Steaming & Gelatinization — Controlled Granule Disruption',
      details: 'Drain the soaked beans thoroughly and transfer to a steamer lined with cheesecloth or a perforated steamer basket. Steam over vigorously boiling water for 25-30 minutes until the beans are COMPLETELY SOFT — a bean pressed between thumb and forefinger should disintegrate into a smooth paste with NO GRITTY CORE. Steaming is preferred over BOILING for chè kho because of a crucial starch-science distinction: when mung beans are BOILED in excess water, the gelatinized starch granules release their amylose into the surrounding cooking water (amylose leaching — up to 30-40% of the total amylose can leach into the cooking water at a water:bean ratio of 5:1). This amylose is DISCARDED with the cooking water, reducing the amylose available for retrogradation and producing a weaker, softer final product. When STEAMED, the water contact is limited to steam condensate on the bean surface — the amylose has nowhere to leach TO and remains TRAPPED within the bean mass. The result: steamed mung beans retain 90-95% of their native amylose content (mung bean starch contains 30-35% amylose, higher than most cereal starches at 20-28%, which is WHY mung bean produces a firmer gel than rice). The gelatinization process during steaming proceeds from the OUTSIDE IN: the outer beans in contact with steam gelatinize first (reaching Tg ≈ 63-68°C within 5-10 minutes), while the interior beans gelatinize more slowly through conductive heat transfer from the outer layers. The 25-30 minute steaming time ensures complete gelatinization even at the center of the bean mass, where temperature rises most slowly (thermal diffusivity of packed mung beans α ≈ 1.2 × 10⁻⁷ m²/s — for a 5cm-thick layer, the center reaches 68°C in approximately t = L²/4α ≈ 25 minutes, confirming the traditional cooking time).',
      time: '25-30 min',
      tip: 'After steaming, the mung beans must be MASHED while still HOT (>80°C). Hot mashing is critical because the gelatinized starch is in its most DEFORMABLE STATE at elevated temperatures — the amylose-amylopectin gel network has not yet begun to retrograde (retrogradation onset requires cooling below ~60°C), so the swollen granule ghosts and the dissolved amylose can be sheared and blended into a HOMOGENEOUS PASTE. If allowed to cool before mashing, early retrogradation creates RIGID AMYLOSE JUNCTION ZONES (double-helix crystallites that act as physical cross-links) that resist mechanical disruption — the result is a LUMPY paste with intact retrograded regions that appear as white, hard inclusions in the final product. Mash using a potato masher, fork, or — for commercial smoothness — pass through a fine-mesh sieve (200-400μm aperture) while hot. The sieving step is the traditional artisanal method (rây đậu) and produces the smoothest texture: any ungelatinized granules, fiber fragments, or protein aggregates that would create grittiness are removed. The paste at this stage should be uniformly GOLDEN YELLOW, smooth as custard, with a consistency of thick mashed potatoes (~viscosity 1,000-5,000 mPa·s at 80°C).'
    },
    {
      step: 3,
      title: 'Sugar Integration & Coconut Cream Emulsification — Ternary Matrix Assembly',
      details: 'Transfer the hot mashed mung bean paste to a large, heavy-bottomed pan (wide and shallow — larger surface area accelerates water evaporation). Add 250g sugar and stir until COMPLETELY DISSOLVED — the sugar dissolves readily in the hot paste (sucrose solubility at 80°C is ~78% w/w, far above the ~25% w/w concentration in the paste, so dissolution is thermodynamically spontaneous and kinetically fast at this temperature). Add 200ml coconut cream and stir to incorporate. This step creates a TERNARY SYSTEM: starch (amylose + amylopectin, ~40% of dry solids) + sugar (sucrose, ~30% of dry solids) + fat (coconut MCTs, ~10% of dry solids) in a water matrix (~20%). The coconut cream\'s fat droplets (diameter 2-10μm, stabilized by coconut proteins and phospholipids at the oil-water interface) distribute throughout the starch paste, creating a FAT-IN-STARCH EMULSION. During subsequent cooking and cooling, these fat droplets become TRAPPED in the retrograding amylose network, producing the composite structure of chè kho: a CONTINUOUS AMYLOSE-SUCROSE GLASS PHASE (the rigid matrix) with DISPERSED FAT DROPLETS (the plasticizing inclusions, 2-10μm diameter, accounting for ~8-12% of total volume). This fat-in-glass composite has UNIQUE MECHANICAL PROPERTIES: the fat droplets act as STRESS CONCENTRATORS that initiate controlled fracture planes during cutting (producing the clean, smooth cut surface characteristic of quality chè kho), while simultaneously providing LUBRICITY during mastication (the fat melts at oral temperature, releasing liquid MCTs that coat the tongue). Without the coconut cream, the product would be a BRITTLE, DRY amylose glass that shatters irregularly when cut and produces a chalky, astringent mouthfeel — the fat is essential for transforming the starch glass from a structural material into a food.',
      time: '10 min',
      tip: 'The COCONUT CREAM must be full-fat first-press (nước cốt dừa, not nước dừa which is coconut water, and not "light" coconut milk). First-press coconut cream has 24-35% fat content (vs 10-15% for second-press coconut milk), providing the critical MINIMUM FAT LOADING of ~8% in the final product needed for the lubrication and fracture-control functions described above. The protein content of coconut cream (2-4% w/w, primarily coconut globulins — cocosin MW ~52 kDa and α-globulin MW ~22 kDa) also contributes: these proteins are heat-denatured during cooking (Td ≈ 85-90°C) and co-aggregate with the amylose during retrogradation, creating AMYLOSE-PROTEIN HYBRID JUNCTION ZONES that are 20-30% stronger than pure amylose junctions (the globulin subunits insert between the amylose double helices, acting as inter-helical cross-bridges). This protein reinforcement is why coconut cream chè kho sets FIRMER than versions made with plain vegetable oil at the same fat percentage — the oil provides the lubrication but not the structural reinforcement.'
    },
    {
      step: 4,
      title: 'The Long Stir — Dehydration, Concentration & Pre-Retrogradation Ordering',
      details: 'Place the pan over LOW-MEDIUM HEAT. Now begins the defining step of chè kho: CONTINUOUS STIRRING (khuấy liên tục) for 45-60 minutes. This extended cooking simultaneously accomplishes four transformations: (1) DEHYDRATION — water evaporates from the paste\'s surface, driven by the temperature differential between the paste (~95-100°C) and the surrounding air. The evaporation rate follows the psychrometric equation: ṁ = h_m × A × (ωs - ωa)/1000, where h_m is the mass transfer coefficient (~0.01-0.03 kg/m²·s for natural convection over a pan), A is the surface area, ωs is the humidity ratio at the paste surface (saturated), and ωa is the ambient humidity ratio. Over 60 minutes with a 30cm pan (A ≈ 0.07 m²), approximately 150-200mL of water evaporates, reducing moisture from ~50% to ~15-20% w/w. (2) CARAMELIZATION — at the pan-paste interface, local temperatures reach 115-130°C (above the boiling point because the concentrated sugar solution has an elevated boiling point — ΔTb ≈ 5-15°C at 50-70% sucrose concentration). These HOTSPOT TEMPERATURES drive SUCROSE CARAMELIZATION at the pan surface: sucrose → glucose + fructose (hydrolysis) → 1,6-anhydro-β-D-glucofuranose + HMF (dehydration) → caramelans (MW ~600) → caramelens (MW ~1,000) → caramelins (MW >2,000). The continuous STIRRING scrapes these caramelized molecules from the pan surface and distributes them throughout the paste, contributing the DEEP AMBER-GOLD color and the complex CARAMEL-BUTTERSCOTCH flavor (diacetyl 2,3-butanedione at 5-20 ppm + 4-hydroxy-2,5-dimethyl-3(2H)-furanone HDMF "furaneol" at 1-5 ppm + maltol at 2-10 ppm). (3) MAILLARD REACTION — the reducing sugars (glucose, fructose from sucrose inversion) react with the mung bean\'s FREE AMINO ACIDS (particularly lysine, leucine, and glutamic acid at 0.5-1.5% of total protein) through the Amadori rearrangement → Strecker degradation → melanoidin formation pathway. The Maillard products contribute additional color deepening (melanoidins are brown polymers) and flavor complexity (pyrazines from Strecker degradation of amino acids — 2-acetylpyrazine "roasted/nutty" at 0.1-1 ppm, 2-ethyl-3,5-dimethylpyrazine "potato/earthy" at 0.05-0.5 ppm). (4) AMYLOSE PRE-ALIGNMENT — the shear stress imparted by stirring (τ = η × γ̇, where η increases from ~5,000 to ~50,000 mPa·s and γ̇ ≈ 1-10 s⁻¹, giving τ ≈ 5-500 Pa) ORIENTS the dissolved amylose chains in the flow direction. This shear-induced orientation is a form of PRE-ORDERING that accelerates subsequent retrogradation: pre-aligned amylose chains need less thermal energy to find and pair with neighbors into double helices, reducing the nucleation barrier for B-type crystal formation by 30-50% compared to unstirred, randomly oriented amylose solutions. This is why chè kho sets FASTER and FIRMER than it would if simply left unstirred — the traditional "continuous stirring" instruction is not mere habit but an empirically discovered CRYSTALLIZATION ACCELERATOR.',
      time: '45-60 min',
      tip: 'The ENDPOINT TEST for stirring is THE TRAIL TEST (kéo vạch): draw a spatula across the bottom of the pan — the TRAIL should remain visible for 5-10 seconds before the paste flows back to fill it. This indicates a viscosity of approximately 30,000-50,000 mPa·s, corresponding to a moisture content of ~18-22% w/w and a sucrose concentration of ~35-40% w/w in the aqueous phase. Too EARLY (trail disappears in <2 seconds): moisture is still too high (>25%), the product will not set firmly — retrogradation in a high-moisture system produces a SOFT GEL (like a mung bean pudding/chè) rather than the dense, sliceable block of chè kho. Continue stirring and evaporating. Too LATE (paste no longer flows back at all): moisture is too low (<12%), the paste has entered the GLASSY STATE while still in the pan — it will be BRITTLE and CRUMBLY rather than smooth and firm, because the vitrified amylose glass has no remaining mobility for the organized retrogradation that produces the cohesive crystalline network. The product will crack and fragment rather than slice cleanly. The window is narrow (~5 minutes of cooking separate too-wet from too-dry), which is why continuous monitoring in the final 10 minutes is essential.'
    },
    {
      step: 5,
      title: 'Molding, Setting & Retrogradation — The Overnight Transformation',
      details: 'Lightly grease a rectangular mold (a loaf pan, small baking dish, or traditional wooden mold — khuôn chè kho) with vegetable or coconut oil. The oil layer serves as a RELEASE AGENT: it prevents the amylose from hydrogen-bonding directly to the container surface (the hydroxyl groups on the amylose chains would form hydrogen bonds with the hydroxyl groups on a glass or ceramic surface, creating adhesion forces of ~50-100 mN/m that would tear the surface when unmolding; the oil film\'s hydrophobic hydrocarbon chains block this interaction, reducing adhesion to <5 mN/m). Pour the hot paste into the mold and press firmly with an oiled spatula to eliminate AIR POCKETS (trapped air creates voids that interrupt the continuous amylose network, producing weak planes where the block fractures irregularly during cutting). Smooth the top surface and sprinkle with toasted sesame seeds while the surface is still tacky (the seeds embed into the soft surface and are locked in place when the surface retrogrades, creating a permanent garnish). Allow to cool to room temperature (2-3 hours), then optionally refrigerate at 4°C. The RETROGRADATION KINETICS follow the Avrami equation: θ(t) = 1 - exp(-k·tⁿ), where θ is the fractional crystallinity, k is the rate constant (~0.05-0.15 hr⁻¹ for mung bean amylose at 25°C, or ~0.2-0.5 hr⁻¹ at 4°C), n is the Avrami exponent (~1.0-1.5, indicating one-dimensional crystal growth with sporadic nucleation), and t is time. At room temperature (25°C), the paste reaches ~50% of maximum retrogradation in 8-12 hours and ~80% in 24 hours. Refrigeration at 4°C ACCELERATES retrogradation by 3-5× (k increases because the driving force for crystallization — the supercooling below the melting point of amylose double helices, Tm ≈ 150-160°C for B-type crystals — far exceeds the kinetic barrier at 4°C, which is well above the glass transition temperature Tg ≈ -5°C of the hydrated amylose, so molecular mobility is maintained). After 8-12 hours at 4°C (or 24 hours at room temperature), the chè kho block can be unmolded and sliced into diamond shapes (hình thoi) or rectangles for serving.',
      time: '8-24 hours setting',
      tip: 'The DIAMOND SHAPE (hình thoi) of traditional chè kho slices is not merely decorative but has CULTURAL SIGNIFICANCE: the diamond/rhombus shape in Vietnamese Tết symbolism represents the EARTH element (Thổ) of the Five Elements system — the central, stabilizing element that mediates between the other four (Kim/Metal, Mộc/Wood, Thủy/Water, Hỏa/Fire). Placing diamond-shaped chè kho on the ancestral altar represents a wish for STABILITY and GROUNDEDNESS in the coming year — the dense, golden, earth-toned sweet embodies the Earth element both symbolically (shape) and materially (heavy, solid, gold-colored). The cutting technique itself tests the quality of retrogradation: properly retrograded chè kho produces CLEAN, SMOOTH cut surfaces when sliced with a thin, sharp knife dipped in hot water (the hot water melts the surface amylose crystals at the cut line, acting as a lubricant — the water\'s thermal energy breaks the hydrogen bonds in the B-type crystal at the interface, allowing the knife to pass through the crystalline matrix without cracking). Under-retrograded chè kho (insufficient setting time, too much moisture) produces STICKY cut surfaces that adhere to the knife. Over-dried chè kho (too much evaporation during cooking) produces CRUMBLY cut surfaces where the block fractures ahead of the knife blade along pre-existing micro-cracks in the brittle amylose glass.'
    }
  ],

  proTips: [
    {
      title: 'Amylose vs Amylopectin — Why Mung Bean is the Perfect Starch for Chè Kho',
      description: 'Mung bean starch has an unusually HIGH AMYLOSE CONTENT of 30-35% (compared to 20-28% for most cereal starches and 0-5% for waxy varieties). This high amylose fraction is what makes chè kho possible — and why attempts to substitute rice flour, tapioca starch, or corn starch produce inferior results. The key is RETROGRADATION RATE and GEL STRENGTH. Amylose (linear chains, DP 500-2,000) retrogrades 100-1,000× FASTER than amylopectin (branched chains, DP 10,000-100,000 with branch points every 20-25 glucose units) because linear chains can align parallel to each other and zip together into double helices with minimal steric hindrance — it is like zipping a straight zipper versus trying to zip a branched, tangled zipper. The STRENGTH of the resulting gel is also proportional to amylose content: gel modulus G\' scales approximately as G\' ∝ [amylose]² — doubling the amylose concentration from 15% to 30% quadruples the gel stiffness. Mung bean starch\'s 30-35% amylose produces gels with G\' ≈ 5,000-15,000 Pa (firm enough to slice into blocks and pick up with fingers without deformation), while rice starch\'s 20-25% amylose produces gels with G\' ≈ 1,000-3,000 Pa (soft, spoonable) and waxy starches with <5% amylose produce gels with G\' < 100 Pa (flowing pastes that cannot hold shape). The amylose content is genetically determined — it is controlled by the WAXY gene (encoding granule-bound starch synthase I, GBSSI, the enzyme that synthesizes amylose by adding glucose units one at a time from ADP-glucose onto the growing linear chain). Wild-type mung bean has a fully functional GBSSI that produces 30-35% amylose; waxy mutants (loss-of-function GBSSI) would produce near-zero amylose and could never make chè kho.'
    },
    {
      title: 'The Avrami Equation — Predicting Setting Time from Temperature',
      description: 'Chè kho\'s setting is a nucleation-and-growth PHASE TRANSITION from amorphous sol to semi-crystalline gel, quantified by the Avrami equation θ(t) = 1 - exp(-k·tⁿ). For practical chè kho making, the Avrami parameters predict exactly when the product will be ready to unmold: at 25°C (Vietnamese room temperature during Tết — January-February in the North can be 15-20°C, which is even faster), k ≈ 0.10 hr⁻¹ and n ≈ 1.2, giving θ(8hr) ≈ 0.55 (55% crystallinity — barely sliceable), θ(12hr) ≈ 0.72 (good firmness), θ(24hr) ≈ 0.90 (optimal — firm, clean-cutting, maximum chewiness). At 4°C (refrigerator), k ≈ 0.35 hr⁻¹ and n ≈ 1.1, giving θ(4hr) ≈ 0.62, θ(8hr) ≈ 0.88 (equivalent to 24hr at room temperature), θ(12hr) ≈ 0.96 (near-maximum). This explains the traditional instruction to prepare chè kho "the night before" (đêm hôm trước) the day it is needed — overnight at room temperature gives ~12 hours of retrogradation, reaching θ ≈ 0.72, which is the minimum firmness for clean slicing and altar presentation. For maximum quality, prepare 24 hours ahead. The TEMPERATURE OPTIMUM for retrogradation is not the coldest available — below ~0°C, the water in the amylose matrix freezes, and ice crystal formation DISRUPTS the amylose network rather than reinforcing it (freeze-thaw cycling actually produces a SPONGY, POROUS texture used in making frozen tofu and konyaku, but undesirable in chè kho). The optimum range is 4-25°C — cold enough to provide supercooling driving force but warm enough to maintain amylose chain mobility for organized crystal growth.'
    },
    {
      title: 'Mung Bean Protein — The Hidden Structural Reinforcement',
      description: 'Mung bean is not just starch — it contains 20-25% protein (dry weight basis), primarily VICILIN-TYPE globulins (8S fraction, MW ~150-180 kDa, a trimer of ~50-60 kDa subunits) with smaller amounts of LEGUMIN-TYPE globulins (11S fraction, MW ~320-380 kDa, a hexamer of paired acidic ~40 kDa + basic ~20 kDa subunits linked by a single disulfide bond). During the steaming and cooking steps, these proteins DENATURE (vicilin Td ≈ 82-86°C, legumin Td ≈ 95-100°C) and AGGREGATE into a PROTEIN GEL NETWORK that INTERPENETRATES the starch gel network. The result is an INTERPENETRATING POLYMER NETWORK (IPN) — two independent, topologically interlocked gel networks occupying the same volume, each contributing different mechanical properties. The STARCH NETWORK provides rigidity (high elastic modulus G\' but low strain at break — starch gels are stiff but brittle). The PROTEIN NETWORK provides toughness (lower G\' but high strain at break — protein gels are flexible and can deform 50-100% before fracturing). The IPN combination gives chè kho BOTH stiffness AND toughness — it is firm enough to slice but resilient enough not to shatter. This IPN structure also explains why chè kho made from mung bean STARCH (isolated, with the protein removed) produces an inferior product: the pure starch gel is BRITTLE and cracks during slicing, while the whole-bean paste produces a cohesive, clean-cutting block. The protein is not a contaminant to be removed but a structural PARTNER that transforms a brittle starch glass into a tough composite material.'
    },
    {
      title: 'Chè Kho in the Tết Altar — Food as Offering Medium',
      description: 'Chè kho\'s role on the Tết ancestral altar (bàn thờ gia tiên) reflects the Vietnamese conception of food as a MEDIUM OF COMMUNICATION between the living and the dead. In the Vietnamese Buddhist-Confucian-Taoist syncretic belief system, the ancestors\' spirits return to the family home during the three days of Tết (Mùng 1-3 of the Lunar New Year). The altar offerings are not symbolic gestures but ACTUAL PROVISIONS for the spirits — the food is believed to nourish the ancestors in the spirit realm, and the quality of the offering reflects the family\'s DEVOTION and PROSPERITY. Chè kho\'s specific place on the altar is determined by its properties: its GOLDEN COLOR associates it with the EARTH direction (center of the altar), its SWEET TASTE associates it with the harmonious (hòa) quality desired for the new year, and its DENSITY associates it with material substance and prosperity. The number of chè kho pieces offered follows numerological conventions: ODD numbers (3, 5, 7) for yang/active occasions (welcoming the ancestors), EVEN numbers (2, 4, 6) for yin/passive contexts (farewell offerings at the end of Tết). After the incense burns down (signaling that the ancestors have "consumed" the spiritual essence of the food), the physical offerings are distributed among the living family members — eating the altar food is believed to share in the ancestors\' blessings, making chè kho both a ritual object and a communal dessert. The transition from sacred offering to secular food is seamless: the same chè kho block is first placed on the altar (ritual function), then removed, sliced, and shared with arriving guests (social function) — the food\'s dual identity as offering and hospitality is a microcosm of Vietnamese Tết\'s blending of the sacred and the domestic.'
    }
  ],

  nutritionFacts: {
    servingSize: '1 diamond piece (approximately 40g)',
    calories: 85,
    totalFat: '3g',
    saturatedFat: '2.5g',
    cholesterol: '0mg',
    sodium: '3mg',
    totalCarbohydrate: '14g',
    dietaryFiber: '1g',
    totalSugars: '8g',
    protein: '2g',
    vitaminD: '0mcg',
    calcium: '10mg',
    iron: '0.5mg',
    potassium: '60mg'
  },

  relatedRecipes: [
    {
      title: 'Mứt Dừa',
      slug: 'mut-dua',
      image: '/images/recipes/mut-dua.jpg',
      description: 'Candied coconut ribbons — the fat-structured counterpart on the Tết candy tray'
    },
    {
      title: 'Mứt Gừng',
      slug: 'mut-gung',
      image: '/images/recipes/mut-gung.jpg',
      description: 'Candied ginger — crystallization-driven confection with pungent TRPV1 thermogenesis'
    },
    {
      title: 'Bánh Chưng',
      slug: 'banh-chung',
      image: '/images/recipes/banh-chung.jpg',
      description: 'Square sticky rice cake — featuring mung bean paste filling as a complementary starch system'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Chè Kho — Vietnamese Dried Mung Bean Pudding',
    description: 'Amylose retrogradation-controlled semi-crystalline gel (Avrami θ(t)=1-exp(-k·tⁿ), k≈0.10 hr⁻¹ at 25°C, n≈1.2), Gordon-Taylor Tg depression by sucrose plasticization (Tg_mix≈45-55°C — glassy at room temp, softening at oral temp), coconut cream fat-in-glass composite with MCT stress-concentrator fracture control, starch-protein interpenetrating polymer network (IPN) for stiffness+toughness, and shear-induced amylose pre-alignment crystallization acceleration during the 45-60min continuous stirring ritual.',
    image: '/images/recipes/che-kho.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-20',
    prepTime: 'PT8H30M',
    cookTime: 'PT1H30M',
    totalTime: 'PT34H',
    recipeYield: '~20 diamond pieces',
    recipeCategory: 'Dessert',
    recipeCuisine: 'Vietnamese',
    keywords: 'chè kho, dried mung bean pudding, vietnamese tết dessert, mung bean cake, ancestral offering sweet',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '85 calories',
      fatContent: '3g',
      proteinContent: '2g',
      carbohydrateContent: '14g'
    },
    recipeIngredient: [
      '400g hulled split mung beans',
      '250g granulated sugar',
      '200ml coconut cream',
      '1 tsp vanilla extract',
      '2 tbsp toasted sesame seeds'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Soak hulled split mung beans 6-8 hours for Fickian starch granule hydration.' },
      { '@type': 'HowToStep', text: 'Steam 25-30 min for complete gelatinization with minimal amylose leaching, mash hot through sieve.' },
      { '@type': 'HowToStep', text: 'Integrate sugar and coconut cream to form starch-sugar-fat ternary matrix.' },
      { '@type': 'HowToStep', text: 'Stir continuously 45-60 min for dehydration, caramelization, Maillard, and shear-induced amylose pre-alignment.' },
      { '@type': 'HowToStep', text: 'Mold, set 8-24 hours for Avrami retrogradation to θ≈0.72-0.90, slice into diamond shapes.' }
    ]
  }
};

export default function CheKhoPage() {
  return <RecipeLayout recipe={recipeData} />;
}
