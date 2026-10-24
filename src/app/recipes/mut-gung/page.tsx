'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Mứt Gừng',
  subtitle: 'Candied Ginger — Supersaturated Sucrose Crystallization on a Gingerol-to-Shogaol Pungency Gradient',
  heroImage: '/images/recipes/mut-gung.jpg',
  region: 'Northern' as const,
  difficulty: 'Medium',
  prepTime: '1 hr',
  cookTime: '2 hr',
  totalTime: '3 hr + overnight drying',
  servings: 30,
  rating: 4.6,
  reviewCount: 187,
  calories: 45,
  tags: ['Tết', 'Northern', 'Dessert', 'Ginger', 'Candied', 'Confectionery'],

  introduction: {
    paragraphs: [
      "Mứt gừng is a CONTROLLED CRYSTALLIZATION process — the deliberate manipulation of sucrose supersaturation kinetics to deposit a DRY, OPAQUE SUGAR SHELL onto sliced ginger rhizome while simultaneously transforming the rhizome's pungency profile through THERMAL ISOMERIZATION of gingerols to shogaols. The crystallization mechanism exploits a phase transition: sucrose dissolved in water at elevated temperature (solubility 487g/100mL at 100°C) is cooled while coating the ginger slices, and as the solution crosses the METASTABLE ZONE BOUNDARY (the supersaturation level at which spontaneous nucleation begins, approximately 1.3× saturation concentration at the given temperature), sucrose molecules begin depositing onto the ginger surface as CRYSTALLINE NUCLEI. These nuclei grow into the characteristic FROSTED, OPAQUE COATING — millions of microcrystals (5-50μm diameter) scattering light diffusely from the surface, producing the white matte appearance that distinguishes properly crystallized mứt gừng from the translucent, glassy appearance of failed candying (where the sugar remained in solution or formed an amorphous glass rather than crystalline deposit).",
      "The PUNGENCY TRANSFORMATION is equally precise: raw ginger's primary pungent compound is [6]-GINGEROL (1-[4'-hydroxy-3'-methoxyphenyl]-5-hydroxy-3-decanone, MW 294.4 Da), a vanilloid receptor (TRPV1) agonist with a binding affinity Ki ≈ 20-50 μM — it produces a WARM, SHARP, WET heat sensation localized in the oral cavity because its β-hydroxy ketone structure makes it relatively HYDROPHILIC (log P ≈ 2.5), keeping it dissolved in the aqueous salivary film rather than partitioning into the lipid-rich oral mucosa. During the prolonged cooking at 100-110°C, gingerol undergoes THERMAL DEHYDRATION — the β-hydroxy group eliminates water (an E1cb elimination mechanism, with the base being the carbonyl oxygen acting as an intramolecular proton acceptor), producing [6]-SHOGAOL (1-[4'-hydroxy-3'-methoxyphenyl]-4-decenal-3-one), which has an α,β-unsaturated carbonyl (conjugated enone) that makes it MORE LIPOPHILIC (log P ≈ 3.8) and a STRONGER TRPV1 agonist (Ki ≈ 5-15 μM, 3-4× more potent than gingerol). Shogaol produces a DEEPER, DRIER, MORE LINGERING heat because its lipophilicity drives it to PARTITION INTO the oral mucosal membrane (partition coefficient between membrane lipid and aqueous saliva is ~10× higher than gingerol's), where it activates TRPV1 receptors embedded in the membrane for a prolonged duration. The gingerol-to-shogaol conversion follows first-order kinetics with a rate constant k ≈ 0.02-0.05 min⁻¹ at 100°C, achieving 30-50% conversion during the typical 60-90 minute cooking — enough to shift the pungency profile from sharp-wet to warm-dry without eliminating the original gingerol character entirely.",
      "The CULTURAL TIMING of mứt gừng — made specifically for Tết — encodes THERMOGENIC MEDICINE: ginger's TRPV1 activation triggers a systemic sympathetic nervous response (the same heat-sensing pathway that capsaicin activates) including peripheral vasodilation (skin blood flow increases 20-40%, producing a sensation of WARMTH) and increased thermogenesis (brown adipose tissue activation via β3-adrenergic signaling, raising metabolic rate 5-10% for 2-3 hours post-ingestion). In Northern Vietnam's Tết season (late January-February, average temperature 15-18°C, humidity 80-90%), this thermogenic effect serves a real physiological function — the candied ginger warms the body from within during the cold, damp lunar New Year celebrations. The sugar coating serves dual purposes: it PRESERVES the ginger (water activity aw drops to 0.65-0.70 in the crystallized product, below the 0.80 threshold for most spoilage organisms) and it MODULATES the pungency delivery (sucrose molecules temporarily occupy TRPV1 receptor-adjacent taste receptor sites, creating a 2-3 second sweet lead before the pungent hit — the characteristic sweet-then-hot temporal profile that makes mứt gừng addictively snackable rather than medicinally harsh)."
    ]
  },

  ingredients: [
    {
      group: 'Ginger Preparation',
      items: [
        { name: 'Fresh mature ginger rhizome (gừng già)', amount: '500g', note: 'Mature (9-12 months) — higher gingerol content 1.5-3% vs young ginger 0.5-1%' },
        { name: 'Fine salt', amount: '1 tbsp', note: 'Osmotic pre-treatment for cell rupture and bitterness extraction' },
        { name: 'Alum (phèn chua) — optional', amount: '½ tsp', note: 'Al³⁺ pectin cross-linking for crunch retention' },
      ]
    },
    {
      group: 'Crystallization Syrup',
      items: [
        { name: 'Granulated white sugar', amount: '400g (0.8:1 sugar-to-ginger ratio)', note: 'Sucrose — the crystallizable disaccharide' },
        { name: 'Water', amount: '150ml', note: 'Dissolution medium — evaporated during candying' },
        { name: 'Fresh lime juice', amount: '1 tbsp (optional)', note: 'Citric acid — partial inversion to glucose+fructose inhibiting premature crystallization' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Ginger Selection & Slicing — Fiber Orientation Engineering',
      details: 'Select MATURE ginger rhizome (gừng già, 9-12 months growth) — identifiable by its papery, slightly wrinkled skin (the periderm has developed multiple suberized cell layers as the rhizome ages, unlike young ginger\'s thin, smooth skin with minimal suberization). Mature ginger contains 1.5-3% gingerols by dry weight (vs 0.5-1% in young ginger) because the oleoresin-producing secretory cells in the cortical parenchyma have had more growth cycles to accumulate product. Peel thinly (the cortex directly beneath the periderm contains the highest concentration of oleoresin cells — 30-40% of total gingerol is in the outer 2mm of tissue). Slice the ginger into 2-3mm thick pieces, cutting at a 45° DIAGONAL to the rhizome\'s long axis. This diagonal cut is NOT aesthetic — it is FIBER ORIENTATION ENGINEERING: the ginger rhizome contains vascular bundles running parallel to its long axis (endarch xylem vessels and phloem sieve tubes embedded in the parenchyma ground tissue). A perpendicular (90°) cut severs these bundles cleanly, producing slices that fall apart during cooking as the parenchyma cells soften. A diagonal cut leaves longer intact fiber segments spanning the slice, creating a STRUCTURAL SCAFFOLD that holds the piece together even after the parenchyma has absorbed sugar and softened. The optimal fiber span length — the diagonal gives approximately 2× the cross-section of a straight cut — provides the chewy-yet-tender texture that defines quality mứt gừng.',
      time: '20 min',
      tip: 'The THICKNESS WINDOW (2-3mm) is a mass-transfer optimization: thinner slices (<1.5mm) have faster sugar penetration (Fick\'s diffusion, penetration depth ∝ √t, with D_sucrose ≈ 5×10⁻¹⁰ m²/s in ginger parenchyma — full equilibration of a 1mm slice takes ~30 min vs ~2 hours for a 3mm slice) but they CURL during cooking (differential thermal expansion between the dense vascular bundle surface and the porous parenchyma core, at thermal expansion coefficient mismatch Δα ≈ 10⁻⁵ K⁻¹) and become BRITTLE after crystallization (too little hydrated parenchyma volume to provide chewiness). Thicker slices (>4mm) require extended cooking (>3 hours for full sugar equilibration) during which excessive gingerol-to-shogaol conversion (>60%) makes the product uncomfortably pungent and the surface overcooks while the center remains unsweetened (concentration gradient produces a sweet-outside, bitter-inside cross-section). The 2-3mm window balances penetration time, structural integrity, and pungency conversion.'
    },
    {
      step: 2,
      title: 'Salt Osmotic Pre-Treatment — Bitterness & Excess Pungency Extraction',
      details: 'Toss the ginger slices with 1 tablespoon of salt and let stand for 30 minutes. The salt serves an OSMOTIC EXTRACTION function: the NaCl concentration gradient (from ~3-5% on the surface to 0% in the cell interior) drives PLASMOLYSIS — water moves out of the ginger cells through the semi-permeable cell membrane (the tonoplast and plasma membrane, with reflection coefficient σ ≈ 0.9 for NaCl) following the osmotic pressure gradient (Π = iMRT ≈ 2.5 atm for 3% NaCl). This water efflux carries with it water-soluble BITTER COMPOUNDS — primarily polyphenolic tannins (condensed proanthocyanidins, MW 500-3,000 Da), chlorogenic acid (MW 354 Da), and excess free gingerols that would make the final product unpleasantly sharp. The expelled liquid (visible as a pool of yellowish brine at the bottom of the bowl) contains 40-60% of the original water-soluble bitterness compounds. After 30 minutes, SQUEEZE the ginger slices firmly by hand (or in a clean cloth) to expel the osmotically drawn liquid, then RINSE twice in clean water to wash away surface salt and extracted bitter compounds. Optional: soak in alum (phèn chua, aluminum potassium sulfate KAl(SO₄)₂·12H₂O) solution (½ tsp in 500mL water) for 15 minutes — the Al³⁺ ions cross-link pectin chains in the cell wall through COORDINATE BONDS (Al³⁺ is trivalent, forming tris-bidentate complexes with galacturonate carboxylate groups), producing a firmer texture that resists softening during the subsequent sugar cooking.',
      time: '30 min soaking + 10 min squeezing/rinsing',
      tip: 'Some traditional recipes call for BLANCHING (30-60 seconds in boiling water) instead of or in addition to salting. Blanching achieves rapid ENZYME INACTIVATION — the polyphenol oxidase (PPO, optimal temperature 30-40°C) that would cause enzymatic browning (oxidation of phenolic substrates to brown o-quinones) during the prolonged sugar-cooking step is irreversibly denatured at 100°C within 15-30 seconds (PPO\'s thermal inactivation follows first-order kinetics with D₁₀₀ ≈ 5-15 seconds depending on cultivar). However, blanching also causes GINGEROL LEACHING (gingerols are moderately water-soluble, log P ≈ 2.5 — not enough to be water-insoluble, but partitioning ~30% into the blanching water during a 60-second exposure). This gingerol loss reduces the final pungency, which may be desirable for those who prefer milder mứt gừng but sacrifices the full thermogenic potency. The salt-only method retains MORE gingerol (salt doesn\'t extract it efficiently because gingerol preferentially partitions into the oleoresin droplets rather than the aqueous salt solution) while still removing bitter compounds.'
    },
    {
      step: 3,
      title: 'Sugar Cooking — Osmotic Equilibration & Gingerol Thermal Isomerization',
      details: 'Combine the pre-treated ginger slices with 400g sugar and 150mL water in a wide, heavy-bottomed pan (wide surface area accelerates water evaporation; heavy bottom prevents hot spots that would cause localized caramelization and brown discoloration). Optionally add 1 tablespoon lime juice — the citric acid (pKa₁ 3.13) catalyzes PARTIAL INVERSION of sucrose to glucose + fructose (acid hydrolysis of the glycosidic bond, rate proportional to [H⁺] concentration). This 5-10% inversion is DELIBERATE: the glucose and fructose molecules ACT AS CRYSTALLIZATION INHIBITORS — their molecular geometry differs from sucrose\'s (glucose is a pyranose ring, fructose a furanose ring, vs sucrose\'s disaccharide), so they cannot fit into the sucrose crystal lattice. Instead, they ADSORB onto the growing crystal faces, blocking the attachment of sucrose molecules and SLOWING crystal growth. This prevents PREMATURE crystallization during cooking (if sucrose crystallized before the ginger was fully sugar-saturated, the syrup would seize into a solid mass with the ginger embedded in a sugar rock rather than individually coated). Bring to a boil over MEDIUM HEAT, then reduce to a LOW SIMMER. The cooking proceeds through three phases: PHASE 1 (0-30 min): OSMOTIC INFUSION — sugar concentration in the syrup is ~70% w/w initially, creating a massive osmotic gradient (Π > 100 atm) that drives water OUT of the ginger cells and sugar IN. The ginger slices shrink visibly as cellular water is replaced by sucrose solution. PHASE 2 (30-60 min): EQUILIBRATION — sugar concentration inside and outside the ginger approaches equilibrium (~65-70% w/w throughout). The slices become translucent as the refractive index of the internal sugar solution (n ≈ 1.47 at 70% sucrose) approaches that of the cell wall material (n ≈ 1.49 for cellulose), eliminating the light-scattering interfaces that made the raw ginger opaque. Simultaneously, [6]-gingerol is undergoing thermal dehydration to [6]-shogaol at k ≈ 0.02-0.05 min⁻¹ — approximately 30-50% conversion by the end of this phase. PHASE 3 (60-90 min): CONCENTRATION — the remaining free water evaporates, and the syrup thickens dramatically as sucrose concentration rises above 85% w/w (viscosity increases exponentially: η ≈ 1 Pa·s at 70% → η ≈ 100 Pa·s at 85% → η ≈ 10,000 Pa·s at 90%). Stir CONTINUOUSLY during this phase to prevent scorching.',
      time: '60-90 min',
      tip: 'MONITORING the endpoint: the cooking is complete when the syrup has been almost entirely absorbed by the ginger slices and the small amount remaining in the pan is THICK and VISCOUS but NOT caramelized (syrup temperature should not exceed 115°C — above this, sucrose begins thermal decomposition: dehydration → 5-hydroxymethylfurfural (HMF) → brown polymers, producing an undesirable brownish color and bitter-burnt off-flavor). A simple endpoint test: tilt the pan — the residual syrup should flow VERY SLOWLY (viscosity estimate >500 Pa·s) but should NOT form threads or hard-crack strands (those indicate the temperature has exceeded 130°C and the product has entered candy territory — too hard). The ginger slices should appear SEMI-TRANSLUCENT and PLUMP (swollen with absorbed sugar), with a thin coating of thick syrup. If the syrup runs off quickly (too thin), continue cooking. If the sugar begins to turn amber (caramelization onset at 160°C), immediately remove from heat and add 1-2 tablespoons of water to cool the sugar below the caramelization threshold.'
    },
    {
      step: 4,
      title: 'Crystallization — Supersaturation-Induced Surface Nucleation',
      details: 'This is the signature step that separates mứt gừng from simple candied ginger. Remove the pan from heat. The residual syrup coating each ginger slice is now a HOT, CONCENTRATED sucrose solution (~85-90% w/w at ~110°C). As this solution COOLS, it enters the SUPERSATURATED state — the dissolved sucrose concentration exceeds the equilibrium solubility at the cooling temperature (solubility: 200g/100mL at 20°C vs the actual concentration of ~450g/100mL). Supersaturation ratio S = C/C_sat ≈ 2.0-2.3 at room temperature — well into the LABILE ZONE where SPONTANEOUS NUCLEATION occurs (the metastable zone width for sucrose is approximately S = 1.1-1.3; above this, nucleation is inevitable). To TRIGGER and CONTROL crystallization: stir the cooling ginger slices GENTLY but CONTINUOUSLY with a wooden spatula as the temperature drops through 80-60°C (the zone of maximum nucleation rate). The stirring serves two purposes: (1) MECHANICAL AGITATION promotes PRIMARY NUCLEATION by providing energy input (the stirring energy, ~10⁻³ J/s, overcomes the nucleation activation energy barrier ΔG* = 16πγ³v²/(3(kT·ln S)²), where γ is the crystal-solution interfacial energy ~10 mJ/m² and v is the molecular volume of sucrose ~0.57 nm³); (2) EVEN DISTRIBUTION ensures that crystallization occurs uniformly across all ginger surfaces rather than preferentially on a few pieces (which would deplete the supersaturation before the remaining pieces are coated). As nucleation begins, the syrup rapidly transforms from GLOSSY and TRANSPARENT to MATTE and OPAQUE — this visual transition marks the crystallization front propagating across each ginger surface as millions of sucrose microcrystals (5-50μm) precipitate from solution. Continue stirring until each piece is individually coated with a dry, powdery sugar crust and no sticky syrup remains — this indicates that the supersaturation has been fully consumed by crystal growth (S → 1.0, equilibrium reached).',
      time: '15-20 min (during cooling)',
      tip: 'The CRYSTAL SIZE distribution (5-50μm) determines the visual and textural quality: crystals smaller than 5μm feel SMOOTH (below the tongue\'s spatial resolution of ~20μm for particles) — the coating would appear glassy and feel waxy. Crystals larger than 100μm feel GRITTY and SANDY (each crystal is individually perceptible on the tongue). The 5-50μm range — achieved by the combination of high supersaturation (S > 2, producing high nucleation density → many small crystals rather than few large ones) and moderate cooling rate (natural air cooling, ~2-5°C/min) — produces the ideal FROSTED, DRY texture that feels powdery and melts quickly on the tongue. If crystallization fails (the coating remains sticky and glassy — this happens when the lime juice addition was excessive, producing >15% invert sugar that poisons crystal growth), the remedy is to SPREAD the ginger pieces on a tray and DUST with 1-2 tablespoons of powdered sugar. The dry sugar crystals in the powder act as SEED CRYSTALS (secondary nucleation sites) that trigger crystallization of the supersaturated syrup coating on contact, bootstrapping the process that spontaneous nucleation failed to complete.'
    },
    {
      step: 5,
      title: 'Drying & Storage — Water Activity Depression for Shelf Stability',
      details: 'Spread the crystallized ginger pieces in a SINGLE LAYER on a wire rack or parchment-lined tray, ensuring no pieces touch (contact zones trap moisture and remain sticky, creating sites for eventual microbial colonization). Dry at ROOM TEMPERATURE for 6-12 hours (or in a low oven at 50-60°C for 2-3 hours — temperatures above 70°C would cause the sucrose coating to PARTIALLY DISSOLVE via hygroscopic moisture absorption, destroying the crystalline frost). The drying step reduces the product\'s WATER ACTIVITY (aw) from ~0.75 (immediately after crystallization) to the target 0.65-0.70. At aw < 0.70, the product is below the growth threshold for: (1) YEASTS (minimum aw ~0.88 for osmotolerant Zygosaccharomyces); (2) MOLDS (minimum aw ~0.70-0.80 for xerophilic Aspergillus, though the sucrose creates additional osmotic stress beyond what aw alone indicates); (3) BACTERIA (minimum aw ~0.90 for most spoilage species). The combination of low aw, high sugar concentration (osmotic stress), and the acidic gingerol/shogaol compounds (which have mild antimicrobial activity against gram-positive bacteria at concentrations >0.5% w/w through membrane disruption) makes properly dried mứt gừng stable for 2-3 MONTHS at room temperature in a sealed container, and 6+ months if refrigerated. Store in an airtight container — exposure to ambient humidity (Vietnam\'s Tết-season humidity of 80-90% RH corresponds to aw ≈ 0.80-0.90 at the product surface, creating a water vapor driving force that would rehydrate the crystalline coating, causing it to dissolve and become sticky — the process called DELIQUESCENCE, where the surface aw drops below the critical relative humidity CRH of sucrose at 84.5% RH, triggering spontaneous dissolution).',
      time: '6-12 hours air drying',
      tip: 'The FINAL PRODUCT should have a distinctive cross-section when bitten: an OUTER ZONE of dry, crunchy sucrose microcrystals (the "frost" — 0.5-1mm thick, aw ≈ 0.55-0.60, glassy-to-crystalline transition); a MIDDLE ZONE of sugar-saturated ginger parenchyma (translucent, chewy, aw ≈ 0.65-0.70, containing the mixed gingerol/shogaol pungency compounds in their oleoresin droplets); and the VASCULAR BUNDLE FIBERS running through the slice (providing the structural scaffold that keeps the piece cohesive). The pungency TEMPORAL PROFILE when eaten: first 1-2 seconds — SWEET (sucrose dissolving from the crystalline coating activates T1R2/T1R3 sweet taste receptors at threshold ~10 mM, producing immediate sweetness before any pungency is perceived); seconds 2-5 — WARM GINGER HEAT builds as the dissolved sugar carrying gingerols from the chewed parenchyma reaches TRPV1 receptors in the oral mucosa (gingerol\'s aqueous-phase onset time is 1-3 seconds); seconds 5-15 — DEEP, LINGERING WARMTH as shogaol partitions from the aqueous chyme into the mucosal lipid membrane (shogaol\'s lipophilic onset is slower, 3-5 seconds, but its membrane residence time is longer, 10-30 seconds, because its higher log P means slower desorption from the lipid bilayer). This SWEET→SHARP→DEEP temporal sequence is the hallmark of quality mứt gừng — a single bite that tells a complete flavor story across 15 seconds.'
    }
  ],

  proTips: [
    {
      title: 'Gingerol vs Shogaol — The Thermal Pungency Switch',
      description: '[6]-Gingerol (the major pungent compound in raw ginger, at 1-3% of dry weight) and [6]-shogaol (its thermal dehydration product) differ in THREE pharmacologically significant ways: (1) POTENCY — shogaol\'s TRPV1 binding affinity is 3-4× higher (Ki ≈ 5-15 μM vs gingerol\'s 20-50 μM) because the α,β-unsaturated carbonyl (conjugated enone) in shogaol\'s structure acts as a Michael acceptor, forming REVERSIBLE COVALENT BONDS with the cysteine residues (Cys157, Cys616) lining the TRPV1 vanilloid binding pocket — a stronger interaction than gingerol\'s non-covalent hydrogen bonding via its β-hydroxy group. (2) LIPOPHILICITY — shogaol\'s log P (3.8) exceeds gingerol\'s (2.5) because the dehydration eliminates the polar hydroxyl group, making the molecule more HYDROPHOBIC. This drives shogaol preferentially into the lipid bilayer of the oral mucosa (membrane/water partition coefficient Km/w ≈ 6,300 for shogaol vs ≈ 300 for gingerol), where it accesses MEMBRANE-EMBEDDED TRPV1 receptors from the lipid phase — a fundamentally different activation pathway than gingerol\'s aqueous-phase approach. (3) TEMPORAL PROFILE — gingerol produces QUICK-ONSET, SHORT-DURATION heat (onset 1-3s, peak 5-8s, fade 15-20s) because it reaches TRPV1 quickly through the aqueous saliva but is also quickly diluted and swallowed. Shogaol produces SLOW-ONSET, LONG-DURATION heat (onset 3-5s, peak 10-15s, fade 30-60s) because its membrane partitioning creates a slow-loading, slow-releasing DEPOT effect — it takes longer to accumulate in the membrane but also takes longer to desorb. The 30-50% gingerol→shogaol conversion achieved in mứt gừng cooking creates a BLENDED pungency profile that combines the immediacy of gingerol with the depth of shogaol — neither raw ginger (all gingerol, sharp but fleeting) nor dried ginger powder (>70% shogaol, deep but harsh) can achieve this balanced temporal architecture.'
    },
    {
      title: 'Sucrose Crystallization — Nucleation Theory Applied',
      description: 'The crystallization step follows CLASSICAL NUCLEATION THEORY (CNT): in a supersaturated solution (S = C/C_sat > 1), sucrose molecules spontaneously form clusters (embryos) through random collision and association. Most embryos are thermodynamically UNSTABLE — they dissolve back into solution because the energetic cost of creating a new crystal-solution INTERFACE (surface free energy γ ≈ 10 mJ/m², creating an energy penalty proportional to surface area ∝ r²) exceeds the energetic gain of forming the CRYSTALLINE INTERIOR (volume free energy ΔGv ∝ -kT·ln S per molecule, a gain proportional to volume ∝ r³). The competition between surface penalty (r²) and volume gain (r³) produces a CRITICAL NUCLEUS RADIUS r* = 2γv/(kT·ln S) — embryos smaller than r* dissolve (surface penalty dominates), while those larger than r* GROW spontaneously (volume gain dominates). For sucrose at S = 2.0 and 60°C: r* ≈ 1.5-2.0 nm (approximately 10-15 sucrose molecules). The NUCLEATION RATE J (nuclei formed per unit volume per unit time) is J = A·exp(-ΔG*/kT), where ΔG* = 16πγ³v²/[3(kT·ln S)²] is the energy barrier. At S = 2.0: J ≈ 10¹²-10¹⁵ nuclei/m³/s — enormous nucleation density producing MILLIONS of tiny crystals per cm² of ginger surface rather than a few large crystals. This high nucleation density is what creates the characteristic FROST — a dense, uniform coating of microcrystals that scatter light diffusely (each crystal is smaller than the wavelength of visible light, producing Rayleigh/Mie scattering from the aggregate) rather than the few large, transparent crystals that would form at lower supersaturation (S < 1.5).'
    },
    {
      title: 'Regional Variations — Northern Spicy vs Southern Sweet',
      description: 'Mứt gừng exists on a PUNGENCY SPECTRUM across Vietnam\'s regions that reflects the North-South taste gradient: NORTHERN mứt gừng (Hà Nội, Bắc Ninh) uses MATURE ginger (gừng già, 10-12 months) with a HIGH sugar-to-ginger ratio of 0.8:1 but MINIMAL blanching — the full gingerol content is retained and partially converted to shogaol, producing an ASSERTIVELY PUNGENT product where the heat DOMINATES the sweetness. The northern palate values this intensity — mứt gừng is eaten deliberately, one piece at a time, with hot trà sen (lotus tea), where the ginger\'s warmth complements the tea\'s floral astringency. CENTRAL mứt gừng (Huế) takes the pungency further, sometimes adding a thin chili powder coating over the sugar crust — the capsaicin (TRPV1 agonist like gingerol/shogaol, but with 10× higher potency at Ki ≈ 0.5-5 μM) creates a triple-pungency hit: immediate capsaicin → mid-range gingerol → lingering shogaol. SOUTHERN mứt gừng (Sài Gòn) uses YOUNG ginger (gừng non, 5-7 months, lower gingerol 0.5-1%) with aggressive blanching (2-3 rounds of boiling water, extracting 50-70% of remaining pungent compounds) and a higher sugar ratio (1:1 or even 1.2:1). The result is a SWEET-FORWARD product where the ginger provides aromatic warmth rather than pungent heat — more approachable for children and those who prefer mứt as a casual snack rather than a deliberate sensory experience. This North-South pungency gradient mirrors the general Vietnamese flavor principle: Northern cooking emphasizes CLARITY AND INTENSITY (fewer ingredients, each at high impact), while Southern cooking emphasizes BALANCE AND SWEETNESS (more ingredients at moderate individual impact, unified by sugar and coconut).'
    },
    {
      title: 'Thermogenic Medicine — TRPV1-Mediated Metabolic Activation',
      description: 'Ginger\'s thermogenic effect — the subjective warmth and measured metabolic increase after consumption — operates through a well-characterized TRPV1→sympathetic nervous system→thermogenesis cascade: (1) Gingerol/shogaol activate TRPV1 receptors in the oral and gastric mucosa. TRPV1 is a non-selective cation channel (permeable to Ca²⁺, Na⁺, Mg²⁺) that normally opens at temperatures above 43°C — pungent compounds trigger it at normal body temperature, producing a "phantom heat" signal. (2) The TRPV1 activation generates afferent nerve signals via the vagus nerve (cranial nerve X) and spinal dorsal root ganglia to the hypothalamus, specifically the preoptic area (POA) and the dorsomedial nucleus (DMH) — the brain\'s thermoregulatory center. (3) The hypothalamus responds to the perceived "heating" by activating COUNTER-REGULATORY COOLING mechanisms: peripheral VASODILATION (increased skin blood flow, mediated by CGRP — calcitonin gene-related peptide — released from sensory nerve endings, causing arteriolar smooth muscle relaxation). This vasodilation produces the characteristic FACIAL FLUSH and SENSATION OF WARMTH after eating pungent ginger — the body is literally trying to dump excess heat that doesn\'t actually exist. (4) Simultaneously, the sympathetic nervous system activates BROWN ADIPOSE TISSUE (BAT) thermogenesis via β3-adrenergic receptor signaling → UCP1 (uncoupling protein 1) activation → mitochondrial proton gradient dissipation as heat instead of ATP. Measured effects in human studies: 5-10% increase in resting metabolic rate for 2-3 hours after consuming 2g dried ginger (equivalent to ~10g fresh ginger, or approximately 4-5 pieces of mứt gừng). In the cold, humid Tết season of Northern Vietnam, this TRPV1-mediated thermogenesis is genuinely therapeutic — it\'s not just a folk belief but a pharmacologically validated warming mechanism delivered in the culturally appropriate vehicle of a festive confection.'
    }
  ],

  nutritionFacts: {
    servingSize: '3 pieces (approximately 25g)',
    calories: 45,
    totalFat: '0g',
    saturatedFat: '0g',
    cholesterol: '0mg',
    sodium: '10mg',
    totalCarbohydrate: '11g',
    dietaryFiber: '0.3g',
    totalSugars: '9g',
    protein: '0.2g',
    vitaminD: '0mcg',
    calcium: '3mg',
    iron: '0.2mg',
    potassium: '40mg'
  },

  relatedRecipes: [
    {
      title: 'Mứt Dừa',
      slug: 'mut-dua',
      image: '/images/recipes/mut-dua.jpg',
      description: 'Candied coconut — another Tết crystallized confection with MCT lauric acid'
    },
    {
      title: 'Chè Kho',
      slug: 'che-kho',
      image: '/images/recipes/che-kho.jpg',
      description: 'Dried mung bean pudding — pairs with mứt gừng on the Tết sweets tray'
    },
    {
      title: 'Bánh Chưng',
      slug: 'banh-chung',
      image: '/images/recipes/banh-chung.jpg',
      description: 'Square rice cake — the savory anchor that mứt gừng\'s sweetness counterbalances'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Mứt Gừng — Vietnamese Candied Ginger',
    description: 'Supersaturated sucrose crystallization at S≈2.0 depositing 5-50μm microcrystal frost coating via classical nucleation theory, with simultaneous gingerol-to-shogaol thermal dehydration (E1cb elimination, k≈0.02-0.05 min⁻¹ at 100°C, 30-50% conversion) shifting TRPV1 pungency from sharp-wet aqueous-phase to deep-dry membrane-partitioned heat.',
    image: '/images/recipes/mut-gung.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-20',
    prepTime: 'PT1H',
    cookTime: 'PT2H',
    totalTime: 'PT15H',
    recipeYield: '~30 pieces',
    recipeCategory: 'Dessert',
    recipeCuisine: 'Vietnamese',
    keywords: 'mứt gừng, candied ginger, vietnamese tết candy, crystallized ginger, ginger confection',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '45 calories',
      fatContent: '0g',
      proteinContent: '0.2g',
      carbohydrateContent: '11g'
    },
    recipeIngredient: [
      '500g mature ginger rhizome',
      '400g granulated sugar',
      '150ml water',
      '1 tbsp salt',
      '1 tbsp lime juice (optional)'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Select mature ginger, peel, slice 2-3mm diagonal to fiber orientation.' },
      { '@type': 'HowToStep', text: 'Salt osmotic pre-treatment 30 min to extract bitterness, squeeze and rinse.' },
      { '@type': 'HowToStep', text: 'Cook with sugar and water in 3 phases: osmotic infusion, equilibration, concentration (60-90 min).' },
      { '@type': 'HowToStep', text: 'Remove from heat, stir continuously during cooling to trigger supersaturation crystallization.' },
      { '@type': 'HowToStep', text: 'Dry 6-12 hours at room temperature, store airtight at aw 0.65-0.70.' }
    ]
  }
};

export default function MutGungPage() {
  return <RecipeLayout recipe={recipeData} />;
}
