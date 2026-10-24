'use client';

import RecipeLayout from '../_components/RecipeLayout';

const recipeData = {
  title: 'Dưa Hành',
  subtitle: 'Pickled Pearl Onions — Lactic Acid Fermentation as Controlled Microbial Ecosystem Engineering',
  heroImage: '/images/recipes/dua-hanh.jpg',
  region: 'Northern' as const,
  difficulty: 'Easy',
  prepTime: '30 min',
  cookTime: '0 min (fermentation: 5-7 days)',
  totalTime: '5-7 days',
  servings: 20,
  rating: 4.6,
  reviewCount: 198,
  calories: 15,
  tags: ['Tết', 'Northern', 'Fermented', 'Vegetarian', 'Condiment', 'Probiotic'],

  introduction: {
    paragraphs: [
      "Dưa hành is CONTROLLED MICROBIAL ECOSYSTEM ENGINEERING — the deliberate creation of environmental conditions (salt concentration, pH, temperature, oxygen exclusion) that SELECT for beneficial lactic acid bacteria (LAB) while SUPPRESSING spoilage organisms and pathogens, transforming raw Allium onion bulbs into a tangy, crunchy, probiotic condiment through anaerobic carbohydrate catabolism. The process exploits a fundamental principle of microbial ecology: COMPETITIVE EXCLUSION — in any environment, the organism best adapted to the prevailing conditions will outcompete all others for resources. By setting NaCl at 3-5% w/v, the fermentor selects for HALOTOLERANT LAB (which have evolved Na⁺/H⁺ antiporter membrane pumps and compatible solute synthesis pathways to maintain osmotic equilibrium at elevated salt concentrations) while excluding SALT-SENSITIVE spoilage organisms (Pseudomonas, Enterobacteriaceae, most yeasts, and molds) whose cytoplasmic membranes cannot maintain turgor pressure against the osmotic gradient, causing PLASMOLYSIS (cell shrinkage and death as water leaves the cell down its chemical potential gradient). This salt-mediated selection is the FIRST GATE of the preservation system.",
      "The SECOND GATE is pH DEPRESSION through lactic acid accumulation. LAB ferment the onion's endogenous sugars (glucose 1.5-3%, fructose 1-2%, sucrose 0.5-1%, and the unique Allium fructooligosaccharides — FOS — at 2-8% of dry weight) via the Embden-Meyerhof-Parnas (EMP) glycolytic pathway, producing 2 moles of L-lactic acid per mole of glucose consumed (homofermentative pathway, used by Lactobacillus plantarum and L. acidophilus) or 1 mole of lactic acid + 1 mole of ethanol + 1 mole of CO₂ per mole of glucose (heterofermentative pathway, used by Leuconostoc mesenteroides via the phosphoketolase route). The accumulating lactic acid (pKa 3.86) drops the brine pH from its initial 6.5-7.0 to a final 3.2-3.5 within 5-7 days. At pH < 3.5, the UNDISSOCIATED form of lactic acid (which predominates below pKa — Henderson-Hasselbalch equation predicts 70% undissociated at pH 3.5) crosses the bacterial cell membrane by passive diffusion (unlike the charged lactate anion, which cannot permeate the lipid bilayer). Inside the neutral-pH cytoplasm, the acid DISSOCIATES, releasing H⁺ ions that overwhelm the cell's proton-motive force maintenance system (the F₁F₀-ATPase proton pump consumes 1 ATP per 3-4 H⁺ exported, draining the cell's energy reserves). This intracellular acidification denatures essential enzymes and is lethal to most non-LAB organisms, including foodborne pathogens (Salmonella dies below pH 4.0, E. coli O157:H7 below pH 3.5, Clostridium botulinum spores cannot germinate below pH 4.6). The LAB themselves survive because they express ACID TOLERANCE RESPONSE (ATR) genes: the F₁F₀-ATPase is constitutively overexpressed (3-5× basal level), membrane lipid composition shifts to longer-chain cyclopropane fatty acids (reducing membrane proton permeability by 40-60%), and molecular chaperones (GroEL, DnaK) prevent acid-induced protein denaturation.",
      "The THIRD GATE is OXYGEN EXCLUSION. The onions must be fully submerged beneath the brine surface, creating an ANAEROBIC environment. This is critical because LAB are FACULTATIVE ANAEROBES (they tolerate oxygen but don't require it and grow optimally without it), while many spoilage organisms — aerobic molds (Aspergillus, Penicillium), oxidative yeasts (Pichia, Candida), and aerobic bacteria (Pseudomonas, Bacillus) — are OBLIGATE AEROBES that cannot grow without molecular oxygen as their terminal electron acceptor. Additionally, oxygen enables OXIDATIVE SPOILAGE reactions: atmospheric O₂ dissolved in the brine (equilibrium concentration ~8 mg/L at 20°C, 1 atm) drives enzymatic browning (polyphenol oxidase converts phenolic compounds to brown o-quinones, which polymerize to melanoidins) and non-enzymatic lipid peroxidation (radical chain reaction: initiation → propagation → termination, producing rancid aldehydes and ketones). Submersion eliminates the O₂ source, and the LAB's metabolic CO₂ production (from heterofermentative species and decarboxylase reactions) creates a protective CARBON DIOXIDE BLANKET above the brine surface (CO₂ is 1.5× denser than air), further displacing any residual oxygen. This triple-gate system — salt + acid + anoxia — makes dưa hành stable for MONTHS at room temperature without refrigeration, the original purpose of Tết preservation in pre-refrigeration Vietnam."
    ]
  },

  ingredients: [
    {
      group: 'Onion Substrate',
      items: [
        { name: 'Pearl onions or shallots (hành củ)', amount: '1 kg', note: 'Allium cepa var. aggregatum — high fructan FOS content 2-8% dry weight' },
        { name: 'Wood ash or slaked lime (nước tro)', amount: '2 tbsp in 1L water', note: 'Ca(OH)₂ pre-soak — pectin cross-linking for crunch retention' },
      ]
    },
    {
      group: 'Fermentation Brine',
      items: [
        { name: 'Coarse sea salt (muối hạt)', amount: '50g per liter water (5% w/v)', note: 'Halotolerance selection gate — Na⁺/H⁺ antiporter threshold' },
        { name: 'Warm water (35-40°C)', amount: '1 liter', note: 'For salt dissolution — cool to room temperature before use' },
        { name: 'Granulated sugar', amount: '2 tbsp', note: 'Supplemental fermentable substrate for LAB — accelerates initial pH drop' },
        { name: 'Rice wash water (nước vo gạo)', amount: '200ml (optional)', note: 'Natural LAB inoculum from rice grain epiphytic microbiome' },
      ]
    },
    {
      group: 'Equipment',
      items: [
        { name: 'Glass jar or ceramic crock (vại sành)', amount: '2-3 liter capacity', note: 'Non-reactive vessel — no metal (Fe²⁺/Cu²⁺ catalyze oxidative browning)' },
        { name: 'Fermentation weight or plate', amount: '1 piece', note: 'Submersion plate — maintains anaerobic conditions below brine surface' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Onion Preparation — Pectin Calcium Cross-Linking for Texture Preservation',
      details: 'Peel the pearl onions/shallots, removing the outer papery tunic layers (dead cells with no fermentable substrate — their removal eliminates a potential surface for mold colonization). For CRUNCH RETENTION — the most critical texture parameter — prepare a Ca(OH)₂ solution: dissolve 2 tablespoons of slaked lime (calcium hydroxide) or wood ash (which contains ~30-40% CaO that hydrates to Ca(OH)₂ upon dissolution) in 1 liter of water. Soak the peeled onions in this alkaline calcium bath (pH 12-13) for 2-4 hours. The calcium ions (Ca²⁺) serve a STRUCTURAL REINFORCEMENT function: they diffuse into the onion tissue and bind to the PECTIN polysaccharides in the cell wall middle lamella — specifically, the Ca²⁺ ions bridge adjacent homogalacturonan (HG) chains of pectin by chelating the carboxylate groups (COO⁻) of galacturonic acid residues in the "EGG-BOX" model: two parallel HG chains form a cavity that coordinates Ca²⁺ through their C-2/C-3 hydroxyl groups and C-6 carboxylate oxygens, with each Ca²⁺ bridging two chains and requiring a minimum of 7-20 consecutive unmethylated GalA residues (the "block-wise" distribution requirement) for stable junction zone formation. This Ca²⁺-pectin cross-linking RIGIDIFIES the cell wall, increasing its Young\'s modulus from ~50 MPa (uncross-linked) to ~150-200 MPa (Ca²⁺ cross-linked), preventing the SOFTENING that would otherwise occur during fermentation (LAB produce pectinolytic enzymes — polygalacturonase and pectin methylesterase — that degrade un-cross-linked pectin chains, turning the onion mushy). After soaking, rinse the onions thoroughly in clean water to remove excess Ca(OH)₂ — residual alkalinity would buffer against LAB acid production and delay fermentation onset.',
      time: '15 min active + 2-4 hours soaking',
      tip: 'The CONCENTRATION of Ca²⁺ matters: too little (<0.1% CaCl₂ equivalent) provides insufficient cross-link density — the pectin chains remain mostly un-bridged, and enzymes can still access and cleave them. Too much (>1% CaCl₂ equivalent) causes EXCESSIVE cross-linking that makes the onion tissue HARD and BITTER (Ca²⁺ above 200 mg/L has a detectable metallic-bitter taste, recognition threshold varying by individual but consistently reported in panel studies at 150-300 mg/L). The traditional wood ash method naturally falls in the optimal range (~0.3-0.5% Ca²⁺ equivalent) because the ash\'s calcium content is self-limiting: only the surface CaO hydrates and dissolves, providing a buffered release that cannot overshoot like a pure CaCl₂ solution can. This is empirical optimization over centuries — Vietnamese grandmothers calibrated the ash amount by TEXTURE TESTING (biting a soaked onion — it should give a crisp SNAP, not a hard CRUNCH or a soft SQUELCH) long before food science named the egg-box model.'
    },
    {
      step: 2,
      title: 'Brine Preparation — Selective Environment Design',
      details: 'Dissolve 50g of coarse sea salt and 2 tablespoons of sugar per liter of warm water (35-40°C to accelerate dissolution — NaCl solubility is 35.9g/100mL at 25°C, so 50g/L is well below saturation). Stir until completely dissolved (undissolved salt crystals settling on onion surfaces create localized HIGH-SALT ZONES at >10% w/v that would kill even halotolerant LAB through excessive osmotic stress, producing soft, unfermented pockets). Cool the brine to ROOM TEMPERATURE (20-28°C) before combining with onions — hot brine (>45°C) would thermally damage the onion\'s cell membrane phospholipid bilayer (transition from gel to liquid-crystalline phase occurs at 40-50°C for typical plant cell membranes), causing irreversible loss of semi-permeability (membrane becomes "leaky") and rapid release of intracellular contents that feeds spoilage organisms before LAB can establish dominance. If using rice wash water (nước vo gạo): combine 200mL of the second or third washing (the first wash removes surface dust and debris, the second/third contain the highest density of epiphytic LAB at 10⁴-10⁶ CFU/mL — these rice-associated Lactobacillus and Leuconostoc species evolved on the rice grain surface in the paddy field and provide a PRE-ADAPTED INOCULUM for fermentation). The rice wash also contributes residual rice starch (0.5-1% w/v) as supplemental fermentable substrate for LAB.',
      time: '10 min',
      tip: 'The 5% SALT CONCENTRATION (w/v) is the result of microbial selection optimization: at 3% NaCl, LAB grow well but Enterobacteriaceae (including potential pathogens like E. coli) are only partially inhibited — they can survive for 2-3 days before the accumulating lactic acid kills them, creating a risky "window of vulnerability." At 5% NaCl, Enterobacteriaceae are suppressed from HOUR ZERO (their salt tolerance ceiling is typically 3-4% NaCl for mesophilic strains), while LAB growth proceeds normally (their salt tolerance extends to 6-8% NaCl for L. plantarum, the dominant species in vegetable fermentations). At >8% NaCl, even the LAB are significantly inhibited (growth rate drops 50-70%), fermentation stalls at pH 4.5-5.0 (insufficient acid for full preservation), and the product is excessively salty. The 5% concentration hits the microbial "sweet spot" — maximum selectivity for LAB with minimum compromise on fermentation rate and final pH.'
    },
    {
      step: 3,
      title: 'Packing & Submersion — Anaerobic Seal Creation',
      details: 'Pack the rinsed, Ca²⁺-treated onions into the clean glass jar or ceramic crock, arranging them as tightly as possible (MINIMIZE HEADSPACE — trapped air between onions is a reservoir of dissolved oxygen that feeds aerobic spoilage organisms during the critical first 24-48 hours before LAB CO₂ production displaces it). Pour the cooled brine over the onions, ensuring they are COMPLETELY SUBMERGED with at least 2-3cm of brine above the topmost onion. Place a fermentation weight (a clean plate, a water-filled ziplock bag, or a traditional ceramic disc) on top to keep the onions BELOW the brine surface — any onion tissue exposed to air above the liquid-gas interface will develop SURFACE MOLD (Aspergillus, Penicillium, Rhizopus) within 48-72 hours because the aerobic environment at the air-brine interface supports the germination of ubiquitous fungal spores (present at 10¹-10³ CFU per m³ of indoor air). Below the brine surface, the dissolved oxygen is consumed within 6-12 hours by the initial aerobic/facultative microbial metabolism (respiration consumes O₂ → CO₂, and the high salt prevents O₂ diffusion from resupplying the submerged zones faster than metabolism consumes it), creating the ANAEROBIC SANCTUARY where LAB thrive and obligate aerobes die. Cover loosely — the lid must allow CO₂ ESCAPE (heterofermentative LAB produce 1 mol CO₂ per mol glucose, and the accumulating gas at 0.5-2 atm would rupture a sealed container) while preventing insect and dust entry.',
      time: '5 min',
      tip: 'The CERAMIC CROCK (vại sành) traditionally used in Vietnamese homes offers a specific advantage over glass: its POROUS WALLS (porosity 5-15%, pore diameter 1-10μm) allow slow CO₂ diffusion outward while being too fine for liquid brine to leak through (the capillary meniscus force at pore diameter <10μm with the brine\'s surface tension ~70 mN/m creates a capillary pressure barrier of >14 kPa, well above the fermentation gas pressure of 0.5-2 kPa above atmospheric). This SELECTIVE PERMEABILITY makes the crock a natural one-way valve — gas out, liquid stays in, air ingress limited by the counter-flow of outward CO₂ diffusion. Glass jars require manual "burping" (opening the lid daily to release gas pressure) because they are completely impermeable, and each burping event introduces a small pulse of atmospheric O₂ that the LAB must re-consume. Modern solution: use a fermentation airlock (water trap) fitted to the jar lid, providing the same one-way gas exchange as the ceramic crock.'
    },
    {
      step: 4,
      title: 'Fermentation — Microbial Succession from Leuconostoc to Lactobacillus',
      details: 'Place the sealed jar at ROOM TEMPERATURE (20-28°C optimal for mesophilic LAB — avoid direct sunlight, which would cause localized heating and UV-mediated radical formation in the brine). Fermentation proceeds through a predictable MICROBIAL SUCCESSION — a temporal sequence of dominant species replacement driven by the progressively acidifying environment: PHASE 1 (Days 0-2): LEUCONOSTOC MESENTEROIDES dominates. This heterofermentative LAB is the PIONEER species — it grows fastest at near-neutral pH (6.0-6.5) and moderate salt (3-5%), producing lactic acid, ethanol, acetic acid, and CO₂ from glucose via the phosphoketolase pathway. The CO₂ production is critical: the gas bubbles visible as effervescence in the brine displace dissolved O₂ from the liquid phase (Henry\'s Law: at equilibrium, the dissolved CO₂ concentration is ~1.5 g/L at 20°C/1 atm CO₂, reducing the O₂ partial pressure and dissolved concentration proportionally), establishing the anaerobic conditions that the subsequent homofermentative LAB require for optimal growth. Leuconostoc also produces DIACETYL (2,3-butanedione, butter aroma, threshold 0.1ppm) and ACETOIN (3-hydroxy-2-butanone, mild creamy) — the characteristic "young pickle" aroma of early fermentation. PHASE 2 (Days 2-5): LACTOBACILLUS PLANTARUM rises to dominance. As pH drops below 5.0, the acid-intolerant Leuconostoc population declines (its ATR system is weaker — growth ceases below pH 4.2), and the more acid-tolerant L. plantarum (growth minimum pH 3.2-3.5) takes over. L. plantarum is HOMOFERMENTATIVE — it converts glucose purely to lactic acid at 2 mol/mol efficiency, accelerating the pH decline without producing CO₂ or ethanol side-products. This "clean" fermentation produces a sharper, more purely sour flavor profile. L. plantarum also produces BACTERIOCINS (plantaricin A, plantaricin EF — small antimicrobial peptides of 20-40 amino acids) that specifically target competing gram-positive bacteria, ensuring its own competitive dominance. PHASE 3 (Days 5-7): TERMINAL ACIDIFICATION. pH reaches 3.2-3.5, where even L. plantarum growth slows (end-product inhibition — the accumulated lactic acid at 1-2% w/v inhibits its own producer by the undissociated acid mechanism). The fermentation self-terminates at this pH — a built-in NEGATIVE FEEDBACK LOOP that prevents over-acidification. Taste daily from Day 3 onward — the dưa hành is ready when it has a pleasant tangy sourness WITHOUT bitterness and the onions retain a firm CRUNCH.',
      time: '5-7 days',
      tip: 'TEMPERATURE controls the fermentation rate through the Arrhenius relationship: every 10°C increase approximately doubles the microbial growth rate (Q₁₀ ≈ 2.0 for mesophilic LAB). At 20°C, fermentation takes 7-10 days to reach pH 3.5. At 25°C, 5-7 days. At 30°C, 3-5 days. However, faster is NOT better — rapid fermentation at high temperature (>30°C) produces a HARSH, ONE-DIMENSIONAL sourness because the accelerated succession compresses Phase 1 (Leuconostoc) to <24 hours, reducing the accumulation of flavor-complexity compounds (diacetyl, acetoin, ethanol, trace acetic acid) that contribute to the "rounded" sourness of well-fermented dưa hành. At >35°C, the fermentation selects for thermophilic Lactobacillus species (L. delbrueckii, L. bulgaricus) that produce D-lactic acid (the dextrorotatory isomer, less palatable and poorly metabolized by humans — excess D-lactate causes D-lactic acidosis) instead of the L-lactic acid (levorotatory, the natural human metabolite) produced by mesophilic L. plantarum. The traditional Tết timing — making dưa hành in late December/early January when Northern Vietnam\'s temperature averages 15-20°C — provides a naturally SLOW fermentation (10-14 days) that maximizes flavor complexity. This is calendar-encoded fermentation science.'
    },
    {
      step: 5,
      title: 'Maturation & Storage — Post-Fermentation Flavor Integration',
      details: 'When the dưa hành reaches target sourness (pH 3.2-3.5, verified by taste or pH strip), transfer to the refrigerator (4-8°C) to ARREST further fermentation — cold temperatures reduce LAB metabolic activity by >90% (growth rate at 4°C is <5% of the 25°C maximum rate for mesophilic L. plantarum, whose cardinal minimum growth temperature is 10-12°C; below this, metabolism effectively stops). In the refrigerator, the flavor MATURES through non-biological chemical reactions that proceed slowly at low temperature: (1) ESTERIFICATION — lactic acid and ethanol (from Phase 1 Leuconostoc fermentation) react to form ETHYL LACTATE (the characteristic "mature pickle" ester, fruity-sweet aroma, threshold 14ppm), following the reversible reaction CH₃CH(OH)COOH + C₂H₅OH ⇌ CH₃CH(OH)COOC₂H₅ + H₂O. This acid-catalyzed Fischer esterification is slow at 4°C (half-time ~2-4 weeks) but produces measurable ethyl lactate at 5-20 ppm after 1 month of cold storage — above its sensory threshold, contributing a mellowing "roundness" to the fermented onion\'s flavor. (2) ALLIUM SULFUR COMPOUND TRANSFORMATION — the raw onion\'s lacrymatory factor (propanethial S-oxide, produced by alliinase acting on S-1-propenyl-L-cysteine sulfoxide during cell damage) degrades under acidic conditions to THIOSULFINATES and CEPAENES (mixed disulfides and polysulfides) with more complex, sweeter aromatic profiles than the raw precursor. (3) TEXTURE EQUILIBRATION — the osmotic gradient between the onion interior (driven to equilibrium with the brine salt over several weeks via slow NaCl diffusion through the Ca²⁺-cross-linked cell wall, D_NaCl ≈ 1-3 × 10⁻¹⁰ m²/s in pectin gel) produces a uniformly seasoned onion that is firm throughout rather than salty-outside/bland-inside. Properly fermented and stored, dưa hành keeps 3-6 months in the refrigerator and 1-2 months at room temperature (20-25°C, provided pH remains < 3.5).',
      time: 'Ongoing (3-6 months refrigerated shelf life)',
      tip: 'The PROBIOTIC value of dưa hành: at the end of active fermentation, the brine contains 10⁸-10⁹ CFU/mL of live Lactobacillus plantarum — one of the most extensively documented probiotic species. L. plantarum WCFS1 (a well-characterized strain isolated from human saliva but representative of food-fermentation strains) has been shown in clinical trials to: (1) survive gastric transit (pH 1.5-3.0 for 2 hours — its ATR system, evolved for acid survival in fermented foods, conveniently pre-adapts it for stomach acid); (2) adhere to intestinal epithelial cells via surface-expressed mannose-specific adhesins (Msa) that bind to the glycoprotein mannose residues of the intestinal mucus layer; (3) produce short-chain fatty acids (SCFA) — butyrate, propionate, acetate — in the colon that nourish colonocytes (butyrate is the primary energy source for colonic epithelial cells, providing 60-70% of their metabolic fuel) and modulate immune function (propionate activates regulatory T-cells via FFAR2/GPR43 signaling, reducing inflammatory cytokine production). A single 100g serving of dưa hành delivers approximately 10⁸-10⁹ CFU — equivalent to a commercial probiotic supplement capsule, but in a more bioavailable form (the food matrix protects bacteria during gastric transit better than a bare capsule). This is FUNCTIONAL FOOD predating the concept by millennia.'
    }
  ],

  proTips: [
    {
      title: 'The Allium Fructooligosaccharide (FOS) — Prebiotic Substrate for LAB',
      description: 'Onions contain 2-8% dry weight of FRUCTOOLIGOSACCHARIDES (FOS) — short-chain fructose polymers (degree of polymerization DP 3-10) linked by β(2→1) glycosidic bonds to a terminal glucose unit. These FOS are the secret to dưa hành\'s particularly robust fermentation compared to other pickled vegetables: while most plant substrates provide only simple sugars (glucose, fructose, sucrose — fermented within 24-48 hours), FOS provides a SLOW-RELEASE sugar source. LAB express cell-wall-associated β-fructofuranosidase (EC 3.2.1.26) that cleaves FOS chains from the non-reducing end, releasing one fructose molecule per hydrolysis event — but the enzyme\'s Km for FOS (≈5-15 mM) is higher than for sucrose (≈2-5 mM), so FOS hydrolysis proceeds MORE SLOWLY than sucrose fermentation. The result: fructose is released gradually over the entire 5-7 day fermentation period, maintaining continuous LAB metabolic activity and lactic acid production even after the simple sugars are exhausted (typically by Day 2). This sustained fermentation produces a more UNIFORMLY ACIDIFIED product (pH gradient from surface to center <0.3 pH units at Day 7, vs >0.5 for simple-sugar-only substrates) and a MORE COMPLEX flavor profile (the extended Leuconostoc Phase 1 in particular benefits from FOS-derived fructose, producing more diacetyl and acetoin). After fermentation, any undigested FOS in the pickled onion acts as a PREBIOTIC in the consumer\'s gut — the same β(2→1) linkage that LAB slowly hydrolyze is completely resistant to human digestive enzymes (which can only cleave α-glycosidic bonds), so the intact FOS reaches the colon where it selectively feeds Bifidobacterium and Lactobacillus populations. Dưa hành is thus a SYNBIOTIC food: it delivers BOTH probiotics (live LAB) AND prebiotics (residual FOS) in a single bite.'
    },
    {
      title: 'The Tết Pairing Logic — Acid-Fat Counterbalance System',
      description: 'Dưa hành is NEVER eaten alone during Tết — it is the ACID COUNTERBALANCE to the feast\'s fat-heavy dishes, and this pairing is not tradition for tradition\'s sake but a PHYSIOLOGICALLY OPTIMIZED digestive strategy. The Tết table centers on: bánh chưng (520 kcal/serving, 15-20% fat from pork belly and mung bean lipids), thịt kho tàu (450 kcal, 25-30% fat from braised pork belly), giò lụa (180 kcal, lean but dense protein requiring robust gastric proteolysis), and nem rán (300 kcal, deep-fried). Dưa hành\'s lactic acid (1-2% w/v at pH 3.5) serves three digestive functions upon consumption: (1) GASTRIC pH REDUCTION — the ingested acid (10-20 mEq H⁺ per 50g serving) supplements the stomach\'s own HCl production, lowering gastric pH from the post-meal buffered value of 3.0-4.0 (food proteins buffer stomach acid via their amino and carboxylate groups) to 2.0-2.5, which is the pH optimum for PEPSIN (the primary gastric protease, with maximum proteolytic activity at pH 1.5-2.5 and complete inactivation above pH 6.5). This accelerates protein digestion of the dense giò lụa and meat dishes. (2) BILE ACID STIMULUS — the acid bolus reaching the duodenum triggers CHOLECYSTOKININ (CCK) release from I-cells in the duodenal and jejunal mucosa, stimulating gallbladder contraction and bile acid secretion (bile acids are the EMULSIFIERS that solubilize the dietary fat from bánh chưng and thịt kho tàu into mixed micelles of 4-8nm diameter, accessible to pancreatic lipase). (3) PALATE REFRESHMENT — the tartness of lactic acid (sourness intensity ~1.5× that of acetic acid at equal molarity) stimulates salivary flow (sour taste is the strongest gustatory stimulus for parotid salivary secretion, at 2-3× the flow rate induced by sweet or salty stimuli), which mechanically clears the palate of residual fat film between bites, resetting the taste receptors for the next mouthful. This is empirical digestive optimization — the Tết menu is a complete ENZYMATIC SUPPORT SYSTEM disguised as a feast.'
    },
    {
      title: 'Troubleshooting — Soft, Slimy, or Off-Flavor Dưa Hành',
      description: 'SOFTENING: the onions lose their crunch and become mushy. Cause: insufficient Ca²⁺ pre-treatment (pectin not cross-linked), excessive fermentation temperature (>30°C accelerates pectinolytic enzyme activity from LAB cell-surface pectinases), or too low salt concentration (<3%, allowing pectinolytic Enterobacteriaceae to grow in the first 48 hours before LAB acid production eliminates them). Fix: ensure 2-4 hour Ca(OH)₂ soak, maintain 20-25°C during fermentation, and verify salt at 5% w/v. SLIMINESS: a viscous, ropy texture in the brine. Cause: DEXTRAN production — Leuconostoc mesenteroides (the Phase 1 heterofermentative pioneer) produces dextran, a high-molecular-weight α(1→6)-linked glucan polymer, from sucrose via the dextransucrase enzyme. When sucrose concentration is high (>2% w/v in the brine, possible if too much sugar was added), dextran accumulates as a viscous, slimy EXOPOLYSACCHARIDE that makes the brine unappealingly ropy. Fix: reduce added sugar, or skim the slimy brine off and replace with fresh 5% salt solution — the sliminess is aesthetic only and not harmful, as Leuconostoc is a food-grade organism. OFF-FLAVORS: rotten egg (H₂S), putrid (cadaverine, putrescine), or fecal (skatole, indole). Cause: CONTAMINATION by non-LAB organisms, usually Enterobacteriaceae or Clostridium species that metabolize amino acids via DECARBOXYLATION (histidine → histamine, lysine → cadaverine, ornithine → putrescine) and DESULFURATION (cysteine → H₂S via cysteine desulfhydrase). This indicates a FAILED fermentation — insufficient salt, pH did not drop fast enough, or anaerobic conditions were not maintained (surface exposure allowed aerobic competitors to consume the sugar before LAB could acidify). Fix: discard and restart with stricter salt concentration (5%), ensure complete submersion, and optionally add rice wash water as a LAB starter inoculum to accelerate the initial pH drop below 4.5 within 48 hours.'
    },
    {
      title: 'Hành vs Kiệu — Two Allium Fermentation Traditions',
      description: 'While dưa hành uses pearl onions (Allium cepa var. aggregatum), the Tết table in Central and Southern Vietnam often features DƯA KIỆU — fermented Chinese chives/rakkyo (Allium chinense). The two Allium species differ in their fermentation chemistry: ONION (hành) is rich in DIPROPYL DISULFIDE and propanethial S-oxide (the lacrymatory compound), producing a sharp, sulfurous, complex flavor after fermentation. RAKKYO (kiệu) is rich in DIALLYL DISULFIDE and methyl allyl trisulfide (the same organosulfur compounds found in garlic), producing a milder, more garlicky, sweeter flavor. The FOS content also differs: onion 2-8% vs rakkyo 10-20% dry weight — rakkyo has among the highest FOS concentrations of any food plant, making it a superior PREBIOTIC substrate. The higher FOS in rakkyo means its fermentation proceeds more slowly (more slow-release substrate, less initial simple sugar), producing a subtler acid profile over 7-14 days vs onion\'s 5-7 days. The texture also differs: rakkyo\'s smaller bulb size (1-2cm vs onion\'s 2-4cm) and thinner cell walls produce a more delicate crunch, while onion\'s thicker tissue provides a satisfying snap. The choice between hành and kiệu maps onto the North-South culinary divide: Northern Tết tables feature the sharper, more pungent dưa hành (matching the region\'s preference for bold, assertive flavors with minimal sweetness), while Southern tables favor the milder, sweeter dưa kiệu (consonant with the South\'s sweeter palate and coconut-rich cuisine). Both are valid solutions to the same engineering problem — Allium preservation through LAB fermentation — optimized for different regional flavor preferences.'
    }
  ],

  nutritionFacts: {
    servingSize: '50g (approximately 5-6 pickled onions)',
    calories: 15,
    totalFat: '0g',
    saturatedFat: '0g',
    cholesterol: '0mg',
    sodium: '480mg',
    totalCarbohydrate: '3g',
    dietaryFiber: '1g',
    totalSugars: '1g',
    protein: '0.5g',
    vitaminD: '0mcg',
    calcium: '25mg',
    iron: '0.3mg',
    potassium: '60mg'
  },

  relatedRecipes: [
    {
      title: 'Bánh Chưng',
      slug: 'banh-chung',
      image: '/images/recipes/banh-chung.jpg',
      description: 'Square sticky rice cake — dưa hành\'s essential fatty counterpart on the Tết altar'
    },
    {
      title: 'Thịt Kho Tàu',
      slug: 'thit-kho-tau',
      image: '/images/recipes/thit-kho-tau.jpg',
      description: 'Caramelized pork belly — the fat-heavy braise that needs acid counterbalance'
    },
    {
      title: 'Giò Lụa',
      slug: 'gio-lua',
      image: '/images/recipes/gio-lua.jpg',
      description: 'Pork sausage — the dense protein gel enhanced by dưa hành\'s gastric pH reduction'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Dưa Hành — Vietnamese Pickled Pearl Onions',
    description: 'Lactic acid fermentation triple-gate preservation: NaCl 5% halotolerance selection, Leuconostoc→Lactobacillus pH 6.5→3.2 microbial succession, and anaerobic CO₂ blanket oxygen exclusion. Ca(OH)₂ egg-box pectin cross-linking for crunch retention. Allium FOS 2-8% slow-release prebiotic substrate. Synbiotic food delivering 10⁸-10⁹ CFU/mL live L. plantarum probiotics plus residual FOS prebiotics.',
    image: '/images/recipes/dua-hanh.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-20',
    prepTime: 'PT30M',
    cookTime: 'P7D',
    totalTime: 'P7D',
    recipeYield: '~20 servings',
    recipeCategory: 'Condiment',
    recipeCuisine: 'Vietnamese',
    keywords: 'dưa hành, vietnamese pickled onions, fermented onions, tết condiment, lacto-fermented, probiotic pickle',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '15 calories',
      fatContent: '0g',
      proteinContent: '0.5g',
      carbohydrateContent: '3g',
      sodiumContent: '480mg'
    },
    recipeIngredient: [
      '1 kg pearl onions or shallots',
      '50g coarse sea salt per liter water (5% w/v)',
      '2 tbsp slaked lime or wood ash in 1L water (Ca²⁺ pre-soak)',
      '2 tbsp sugar',
      '200ml rice wash water (optional LAB inoculum)',
      'Fermentation weight and glass jar'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Peel onions, soak 2-4 hours in Ca(OH)₂ solution for pectin egg-box cross-linking, rinse thoroughly.' },
      { '@type': 'HowToStep', text: 'Dissolve 5% NaCl + sugar in warm water, cool to room temperature, optionally add rice wash water as LAB inoculum.' },
      { '@type': 'HowToStep', text: 'Pack onions tightly in glass jar, cover with brine ensuring 2-3cm submersion, weight down, cover loosely.' },
      { '@type': 'HowToStep', text: 'Ferment 5-7 days at 20-28°C, monitoring Leuconostoc→Lactobacillus succession until pH reaches 3.2-3.5.' },
      { '@type': 'HowToStep', text: 'Transfer to refrigerator for flavor maturation — ethyl lactate esterification and sulfur compound transformation over 2-4 weeks.' }
    ]
  }
};

export default function DuaHanhPage() {
  return <RecipeLayout recipe={recipeData} />;
}
