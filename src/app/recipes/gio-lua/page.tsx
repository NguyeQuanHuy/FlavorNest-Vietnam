'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Giò Lụa',
  subtitle: 'Vietnamese Pork Sausage — The Myosin Salt-Soluble Protein Gel Engine',
  heroImage: '/images/recipes/gio-lua.jpg',
  region: 'Northern' as const,
  difficulty: 'Hard',
  prepTime: '1 hr',
  cookTime: '1 hr',
  totalTime: '2 hr',
  servings: 10,
  rating: 4.8,
  reviewCount: 264,
  calories: 180,
  tags: ['Tết', 'Northern', 'Pork', 'Steamed', 'Traditional', 'Charcuterie'],

  introduction: {
    paragraphs: [
      "Giò lụa is a PROTEIN GEL ENGINE — a system that converts raw pork muscle into a BOUNCY, ELASTIC SOLID through the precise manipulation of MYOSIN, the molecular motor protein that normally powers muscle contraction. In living muscle, myosin exists as thick filaments (bundles of ~300 myosin molecules) embedded in the sarcomere alongside actin thin filaments. In giò lụa production, the pounding/grinding process EXTRACTS myosin from these filaments into a SALT-SOLUBLE SOLUTION. This extraction requires two conditions: (1) MECHANICAL DISRUPTION — the pounding breaks open the muscle cells (sarcolemma) and disrupts the sarcomere structure, freeing the myosin filaments from their actin-anchored positions; and (2) IONIC STRENGTH — the added salt (NaCl at 2-3% w/w) increases the ionic strength to 0.3-0.6 M, which screens the electrostatic attractions between myosin molecules within the thick filament, causing the filament to DEPOLYMERIZE into individual myosin monomers (MW ~520,000 Da each, rod-shaped, 160nm long × 2nm wide). These dissolved myosin monomers are the BUILDING BLOCKS of the gel.",
      "The GEL FORMATION occurs during steaming (70-80°C): the dissolved myosin monomers undergo THERMAL DENATURATION — their globular head domains (S1 subfragment, containing the ATPase and actin-binding sites) UNFOLD, exposing hydrophobic residues that were buried in the native structure. These exposed hydrophobic patches drive INTERMOLECULAR AGGREGATION: myosin heads from adjacent molecules associate through hydrophobic interactions, forming a THREE-DIMENSIONAL NETWORK of cross-linked protein strands. The network's MECHANICAL PROPERTIES are determined by the balance between two competing processes: (1) ORDERED AGGREGATION — slow, controlled unfolding and association that produces a fine-stranded, transparent, elastic gel (the desired outcome); and (2) DISORDERED AGGREGATION — rapid, chaotic unfolding and precipitation that produces a coarse, opaque, crumbly solid (the failure mode). The temperature ramp rate is the control variable: a GRADUAL increase (2-3°C/min through the critical 40-60°C zone) favors ordered aggregation, while a RAPID increase (>5°C/min, as in boiling water) favors disordered aggregation. This is why giò lụa is STEAMED (gradual conduction heating through the banana leaf and meat mass) rather than BOILED (rapid convection heating from direct water contact).",
      "The TEXTURE of giò lụa — described as bouncy, springy, QQ (the onomatopoeic Mandarin term adopted into Vietnamese food vocabulary) — is quantified by its GEL STRENGTH: 3,000-5,000 g·cm as measured by a puncture test (the force × distance required to push a cylindrical probe through the gel). This gel strength is 10-20× higher than tofu (200-500 g·cm) and 2-3× higher than hot dog (1,500-2,500 g·cm), placing giò lụa in the ELITE TIER of protein gel products alongside kamaboko (Japanese fish cake, 3,000-6,000 g·cm) and surimi-based imitation crab (3,000-5,000 g·cm). The secret is the MYOSIN CONCENTRATION: traditional pounding extracts 70-80% of the available myosin into solution (compared to 40-50% in machine grinding), providing a higher concentration of gel-forming protein per gram of meat. Higher myosin concentration → more cross-link density → higher gel strength → bouncier texture. This is the fundamental reason why hand-pounded giò lụa (giò giã tay) commands a 2-3× price premium over machine-ground versions."
    ]
  },

  ingredients: [
    {
      group: 'Pork Paste — Myosin Source Material',
      items: [
        { name: 'Pork ham/leg meat (thịt nạc đùi)', amount: '1 kg', note: 'Lean slow-twitch muscle — maximum myosin content 18-20% of wet weight' },
        { name: 'Fine salt (muối)', amount: '25g (2.5% w/w)', note: 'NaCl ionic strength 0.3-0.6 M for thick filament depolymerization' },
        { name: 'Granulated sugar', amount: '15g', note: 'Kosmotropic water retention + subtle sweetness' },
        { name: 'Premium fish sauce (nước mắm)', amount: '2 tbsp', note: 'Supplemental NaCl + free amino acid umami' },
        { name: 'Baking powder', amount: '1 tsp', note: 'pH elevation from 5.5→6.0-6.5 for improved myosin solubility above pI 5.4' },
        { name: 'Freshly ground black pepper', amount: '½ tsp', note: 'Piperine aromatic — TRPV1 micro-activation' },
      ]
    },
    {
      group: 'Wrapping Assembly — Thermal Buffer System',
      items: [
        { name: 'Fresh banana leaves (lá chuối)', amount: '8-10 large pieces', note: 'Blanched — semi-permeable thermal conductivity ~0.3 W/m·K buffer' },
        { name: 'Kitchen string or rubber bands', amount: 'As needed', note: 'Compression binding for void elimination + protein concentration' },
        { name: 'Aluminum foil', amount: 'Optional outer layer', note: 'Modern substitute for additional thermal insulation' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Meat Selection & Cold-Chain Preservation — Post-Rigor Myosin Window',
      details: 'Select LEAN pork leg meat (thịt nạc đùi) — the quadriceps and hamstring muscles have the highest myosin content (18-20% of wet weight) because they are HIGH-FORCE, SLOW-TWITCH (Type I) fibers used for sustained locomotion. Avoid tenderloin (lower myosin, higher collagen-to-myosin ratio disrupting gel purity) and belly (excessive intramuscular fat >15% destroying protein network continuity). The meat MUST be COLD throughout all processing — maintain core temperature below 10°C at all times. This cold-chain requirement exists because myosin\'s gel-forming capacity is TEMPERATURE-SENSITIVE: above 15°C, the S1 head domain begins CONFORMATIONAL DRIFT (partial unfolding detected by circular dichroism at 222nm — α-helical content drops 5-10%), reducing salt-solution solubility by 20-30%. Above 25°C, this partially denatured myosin AGGREGATES PREMATURELY in the raw paste, consuming cross-linking capacity before the steamer. Cut the ice-cold meat into 2-3cm cubes for the grinder/processor.',
      time: '15 min',
      tip: 'POST-MORTEM TIMING is the hidden variable: meat should be processed 6-24 hours after slaughter, during the RESOLUTION phase of rigor mortis. During rigor (1-6 hours post-mortem), ATP depletion locks myosin heads onto actin filaments in an IRREVERSIBLE ACTOMYOSIN COMPLEX — the cross-bridge cycle freezes in the strong-binding state. In this rigid state, myosin CANNOT be extracted by salt because it is physically tethered to the actin lattice. During resolution (6-24 hours), endogenous proteolytic enzymes — μ-calpain (optimal pH 7.4, Ca²⁺-dependent, attacking desmin and nebulin) and cathepsin B/L (lysosomal, released by membrane disruption, attacking titin and connectin) — partially digest the structural scaffolding proteins that anchor the myofilament lattice, freeing myosin from the sarcomere and making it SALT-EXTRACTABLE. Meat processed during rigor yields gel strength of only 1,500-2,000 g·cm; the same meat at the optimal post-rigor window yields the full 3,000-5,000 g·cm — a 2× difference from timing alone.'
    },
    {
      step: 2,
      title: 'Grinding & Salt Extraction — Thick Filament Depolymerization',
      details: 'Add salt, sugar, fish sauce, and baking powder to the cold meat cubes. Process in a food processor in 15-20 second PULSES (not continuous — continuous grinding generates frictional heat at 2-3°C per minute of blade operation through viscous dissipation, exceeding the 10°C safety limit within 3-4 minutes). Between each pulse, SCRAPE DOWN the walls and monitor temperature with an instant-read thermometer inserted into the paste center. The grinding serves two simultaneous functions: (1) CELL DISRUPTION — the blade\'s shearing action fractures the sarcolemma (muscle cell membrane, a phospholipid bilayer ~7nm thick) and the myofibrillar lattice, releasing myosin from the sarcomere into the surrounding extracellular salt solution; (2) IONIC DISSOLUTION — the 2.5% NaCl distributes uniformly through the disrupted tissue, reaching the 0.3-0.6 M ionic strength threshold at which the electrostatic attractions between adjacent myosin molecules within the thick filament (mediated by the light meromyosin rod domain\'s periodic charge distribution) are SCREENED, causing the 300-molecule filament to DEPOLYMERIZE into individual myosin monomers. Process until the paste becomes TACKY and GLOSSY — a visual indicator that dissolved myosin (extremely viscous at >2% w/v due to its 160nm rod-shaped molecular geometry creating high entanglement density) dominates the matrix. The paste should STICK to the bowl when inverted — the "inversion test" confirming adequate extraction.',
      time: '15-20 min',
      tip: 'The BAKING POWDER (NaHCO₃ + acid salt) raises the paste\'s pH from ~5.5 (typical post-mortem meat pH, depressed by lactate accumulation from anaerobic glycolysis after slaughter) to ~6.0-6.5. Two effects on gel quality: (1) INCREASED MYOSIN SOLUBILITY — myosin\'s isoelectric point (pI) is pH 5.4, where net charge equals zero and solubility is at its minimum (electrostatic self-association dominates). Moving pH to 6.0-6.5 increases net negative charge (deprotonation of surface glutamic acid and aspartic acid residues, pKa ~4.1), enhancing intermolecular electrostatic REPULSION and increasing solubility by 30-50%. More dissolved myosin = higher gel-forming protein concentration = more cross-link junctions per unit volume = higher gel strength. (2) IMPROVED WATER-HOLDING — at pH > pI, the net negative charge creates Donnan osmotic swelling of the protein matrix, each pH unit above pI increasing bound water by ~10% through electrostatic immobilization of water dipoles. This yields a JUICIER giò lụa that releases moisture when bitten rather than a dry, chalky product. CRITICAL: do not exceed pH 7.0 — alkaline conditions cause irreversible denaturation of the myosin S1 head domain via hydroxyl-catalyzed disulfide scrambling, permanently destroying gel-forming capacity.'
    },
    {
      step: 3,
      title: 'Extended Pounding — Extensional Flow Myosin Orientation',
      details: 'Traditional method: transfer the salt-extracted paste to a heavy stone mortar (cối đá) and POUND with a wooden pestle (chày) for 30-45 minutes — the most labor-intensive step in Vietnamese charcuterie. This pounding is NOT simply further grinding — it is a MECHANICAL ENERGY INPUT that serves a specific molecular purpose: each compression-release cycle (frequency ~1 Hz, impact force ~50-100 N, contact time ~50ms) applies EXTENSIONAL FLOW to the dissolved myosin molecules in solution. The extensional strain rate (ε̇ ≈ 10-100 s⁻¹) exceeds the inverse of myosin\'s longest relaxation time (τ₁ ≈ 0.1-1s for the 160nm rod), causing the molecules to STRETCH and ALIGN in the flow direction — the Weissenberg number Wi = ε̇·τ₁ > 1, indicating polymer chain extension. This ORIENTATION reduces the randomness (configurational entropy) of the subsequent thermal aggregation: oriented myosin molecules denature and cross-link into a MORE ORDERED, FINE-STRANDED network (strand diameter 10-30nm) compared to the random, coarse network (strand diameter 100-500nm) formed by unoriented molecules. The result is a gel that is MORE ELASTIC (higher storage modulus G\' — stores more energy per deformation cycle, producing the "bounce") and MORE TRANSPARENT (fine strands have Rayleigh scattering cross-section proportional to d⁶, so 10nm strands scatter ~10⁶× less light than 100nm strands). Modern alternative: continue food processing with periodic ice chip additions (maintaining T < 10°C) for a total of 8-10 minutes of active processing time.',
      time: '30-45 min (traditional) / 10 min (machine)',
      tip: 'The measurable difference between HAND-POUNDED (giò giã tay) and MACHINE-GROUND giò lụa: hand-pounded achieves 70-80% myosin extraction efficiency (gel strength 4,000-5,000 g·cm) while machine grinding achieves 40-60% (gel strength 2,500-3,500 g·cm). The mechanism: machine grinding uses SHARP BLADES rotating at 3,000-10,000 RPM, creating extremely high shear rates (γ̇ > 1,000 s⁻¹) concentrated at the blade edge. At these shear rates, the EXTENSIONAL COMPONENT of the flow field unfolds the myosin S1 head domain PREMATURELY — the mechanical denaturation threshold for myosin is approximately 500 s⁻¹ extensional strain rate, well below the blade\'s operating range. This premature unfolding triggers AGGREGATION INSIDE THE PROCESSOR: the exposed hydrophobic patches on adjacent denatured heads associate, forming insoluble clumps that are permanently lost from the gel-forming pool. Hand pounding operates at LOW SHEAR RATE (γ̇ < 10 s⁻¹) with HIGH COMPRESSIVE STRESS (σ ≈ 0.5-1 MPa), which squeezes myosin out of the ruptured muscle cells through the perforated sarcolemma WITHOUT exceeding the mechanical denaturation threshold. The molecules emerge INTACT, retaining their full thermal gel-forming capacity for the steamer. This is the biochemical basis of the artisanal premium — hand-pounding preserves the protein, machine-grinding partially destroys it.'
    },
    {
      step: 4,
      title: 'Wrapping — Shock-Wave Air Removal & Thermal Buffer Assembly',
      details: 'Blanch banana leaves in boiling water for 30 seconds — this serves three functions: (1) SOFTENING the leaf by partially dissolving the cuticular wax layer (a C₂₆-C₃₂ alkane mixture) and plasticizing the cellulose fiber matrix, preventing cracking during folding; (2) SANITIZING by killing surface microorganisms (>99% reduction of vegetative bacteria at 100°C/30s); (3) ACTIVATING AROMATICS — heat volatilizes the leaf\'s signature compounds: 2-acetyl-1-pyrroline (2AP, the "pandan" note, threshold 0.1ppb), trans-2-hexenal (fresh green, threshold 17ppb), and eugenol (warm spice, threshold 6ppb) that will imprint on the giò surface during steaming. Lay 2-3 overlapping leaves on a clean surface, place the pork paste in the center, and SHAPE into a cylinder approximately 5-6cm in diameter. Before wrapping: SLAM the shaped paste against the work surface 10-15 times from 15cm height — each impact generates a compression wave propagating through the dense paste at ~1,500 m/s (the speed of sound in the protein-water medium, intermediate between water\'s 1,480 m/s and muscle tissue\'s 1,580 m/s). This wave compresses trapped air bubbles below the Laplace pressure threshold (P_Laplace = 2γ/r ≈ 1.5 kPa for a 0.1mm bubble in protein paste with surface tension γ ≈ 0.07 N/m), dissolving them into the surrounding liquid phase. Roll tightly in banana leaf, fold ends, and tie with string at 2-3cm intervals under FIRM TENSION — this compression eliminates residual air (holes in slices are BOTH aesthetically unacceptable AND structurally critical as crack-initiation sites under the Griffith criterion) and concentrates the paste by 10-15%, expelling interstitial water and proportionally increasing the dissolved myosin concentration → higher cross-link density → stronger gel.',
      time: '15 min',
      tip: 'The TRANSLUCENCY TEST: after slamming and before wrapping, take a small handful of paste (30-40g) and press it between your palms into a thin layer (~2mm). Hold this layer up to a bright light source. A properly processed, air-free paste should be UNIFORMLY TRANSLUCENT — light passes through the fine myosin solution without significant scattering. Any WHITE SPOTS are air pockets (the refractive index mismatch at the air-paste interface, Δn ≈ 0.33, creates strong Mie scattering visible as opaque white inclusions). If white spots persist after slamming, fold the paste over itself and repeat the slam-and-check cycle until the paste is uniformly clear. This test also reveals FAT POCKETS (slightly off-white, Δn ≈ 0.10, appearing as faint cloudy zones rather than sharp white dots) — an indication that the meat had higher intramuscular fat than the <5% threshold and the gel quality may be compromised.'
    },
    {
      step: 5,
      title: 'Steaming — Controlled Thermal Gelation Through the Critical Window',
      details: 'Place the wrapped giò cylinders in a steamer basket over VIGOROUSLY BOILING water (ensure continuous steam generation throughout the 45-60 minute cook). The steam environment (100°C saturated vapor at 1 atm, latent heat of condensation 2,257 kJ/kg) contacts the outer banana leaf surface, but the giò\'s internal temperature rises GRADUALLY because heat must conduct sequentially through: (1) the banana leaf layer (k ≈ 0.3 W/m·K, thickness ~0.3mm); (2) the meat paste itself (k ≈ 0.5 W/m·K for lean pork). For a 6cm diameter cylinder, solving the transient heat conduction equation (Fourier\'s law in cylindrical coordinates, ∂T/∂t = α·(1/r)·∂/∂r·(r·∂T/∂r), with thermal diffusivity α ≈ 1.4×10⁻⁷ m²/s for lean pork) gives: center reaches 40°C in ~12 min, 50°C in ~18 min, 60°C in ~25 min, and 75°C (gelation endpoint) in ~35 min. The heating rate through the CRITICAL WINDOW (40-60°C) is approximately 2.5°C/min — falling within the OPTIMAL RANGE (2-3°C/min) for fine-stranded, ordered gel formation. Steam for 45-60 minutes total to ensure the geometric center reaches 75-80°C (at which >95% of myosin has undergone complete S1 head and S2 hinge denaturation, maximizing cross-link density). After steaming, IMMEDIATELY immerse in ICE WATER for 10-15 minutes — this rapid cooling (center temperature drops from 80°C to 30°C in ~10 min) accomplishes three objectives: (1) ARRESTS RESIDUAL COOKING (preventing over-denaturation above 80°C that would trigger syneresis — water expulsion — and toughening); (2) THERMAL CONTRACTION of the gel (protein network shrinks ~2% linearly upon cooling, pulling away from the banana leaf for easier unwrapping); (3) ACCELERATES GEL MATURATION — the rapid temperature drop through 40-50°C promotes additional hydrogen bond formation between the already-cross-linked myosin strands, strengthening the network by 10-15% compared to slow cooling.',
      time: '45-60 min steaming + 10-15 min ice bath',
      tip: 'The GELATION TEMPERATURE SEQUENCE for pork myosin, mapped by differential scanning calorimetry (DSC): 40-45°C — myosin ROD DOMAIN (light meromyosin, LMM) begins partial unfolding of the coiled-coil α-helix; minimal gel contribution but the onset of viscosity increase (the paste "sets" slightly). 50-55°C — the S1 HEAD DOMAIN undergoes cooperative thermal unfolding (the major DSC endotherm, ΔH ≈ 15-20 J/g): hydrophobic residues (Ile, Leu, Val, Phe) that were buried in the native globular fold become SOLVENT-EXPOSED, driving intermolecular hydrophobic associations that create the primary cross-link network — THIS IS THE GEL-FORMING EVENT that determines final texture. 60-65°C — the S2 HINGE SUBFRAGMENT unfolds (secondary endotherm, ΔH ≈ 5-8 J/g), providing ADDITIONAL cross-links between the S1-mediated junction zones and the LMM rod strands — this event STRENGTHENS an already-formed gel but cannot rescue a failed one. 70-75°C — sarcoplasmic proteins (soluble enzymes, myoglobin) denature and precipitate, filling the interstices of the myosin network — this increases OPACITY (the gel shifts from translucent to opaque pale pink) but has minimal mechanical effect. Above 80°C — the coiled-coil rod begins to UNRAVEL, and the gel undergoes SYNERESIS (contraction and water expulsion at 0.5-1% volume per degree), reducing juiciness. The 75-80°C endpoint balances maximum cross-link density against minimum syneresis.'
    }
  ],

  proTips: [
    {
      title: 'The Myosin Hexamer — Molecular Architecture of Bounce',
      description: 'Myosin II is a HEXAMERIC motor protein: two heavy chains (MHC, ~220 kDa each) and four light chains (2× essential ELC ~17 kDa + 2× regulatory RLC ~20 kDa). Each heavy chain has a GLOBULAR HEAD (S1 subfragment, ~95 kDa, containing the 25K/50K/20K domain architecture with the ATPase catalytic site in the 50K cleft and the actin-binding interface spanning all three domains) connected by a LEVER ARM (a single α-helix stabilized by ELC and RLC binding, providing the 10nm powerstroke in living muscle) through a flexible HINGE (S2 subfragment, ~60 kDa coiled-coil) to a long α-helical ROD (light meromyosin, LMM, ~65 kDa). The two heavy chains intertwine at the rod end in a LEFT-HANDED COILED-COIL with a 7-residue heptad repeat (a-b-c-d-e-f-g, with hydrophobic residues at positions a and d creating the hydrophobic stripe that drives dimerization). In giò lụa\'s gel, the HEADS are the cross-links (each unfolded S1 can bind 2-3 neighboring rods through hydrophobic interaction patches of ~800 Å² each) and the RODS are the elastic strands — the coiled-coil can reversibly extend 10-15% (from 160nm to ~180nm) before the interhelical hydrophobic contacts rupture, storing elastic energy ½kx² ≈ 10⁻²⁰ J per molecule. The gel\'s macroscopic BOUNCE is this molecular elasticity scaled up: 10¹⁶ myosin molecules per cm³ of gel, each contributing its spring constant k ≈ 1-5 pN/nm, producing a bulk storage modulus G\' ≈ 10-50 kPa — the characteristic "QQ" springiness.'
    },
    {
      title: 'Fat Content — The 5% Gel Network Percolation Threshold',
      description: 'Giò lụa requires LEAN meat (<5% total fat) because dispersed fat globules DISRUPT the continuous myosin gel network through a percolation-theory mechanism. At <5% fat (volume fraction φ < 0.05), the dispersed globules (diameter 1-50μm after grinding, stabilized by adsorbed myosin at the oil-water interface acting as a Pickering emulsifier) are ISOLATED within the continuous protein gel matrix — the average inter-globule distance exceeds their diameter, so the protein network forms UNBROKEN strands between them. The globules act as INERT FILLERS that slightly increase opacity (Mie scattering from the fat-gel refractive index mismatch Δn ≈ 0.10) but do not significantly affect gel strength (measured reduction <10%). At 5-10% fat (φ = 0.05-0.10), globules begin to CLUSTER and COALESCE during heating (surface myosin denatures and loses its emulsifying capacity above 60°C, destabilizing the Pickering interface), creating fat channels that interrupt the protein network — gel strength drops 30-50%. Above 10% fat (φ > 0.10), the fat phase PERCOLATES — it forms a continuous channel network spanning the entire gel volume, and the structure transitions from "protein gel with fat inclusions" to "fat matrix with protein fragments," which crumbles rather than bounces (gel strength <1,500 g·cm). The lean leg meat\'s natural 3-4% intramuscular fat falls safely below the 5% threshold.'
    },
    {
      title: 'Giò Lụa vs Hot Dog — The Gel Strength Gap Explained',
      description: 'Both giò lụa and hot dogs are emulsified/comminuted meat products cooked in casings, yet giò lụa achieves 2× the gel strength. Three factors explain the gap: (1) MYOSIN PURITY — giò lụa uses lean pork exclusively (myosin constitutes 45-55% of the total extractable protein, at 18-20% total protein per gram of meat → 8-10% myosin by weight in the raw paste), while hot dogs contain 15-20% added fat, 2-5% starch/fillers, and often mechanically deboned/separated meat (MDS) whose myofibrillar protein is partially denatured by the mechanical separation process — myosin content drops to 4-6% of the final product. More myosin = more cross-link-capable molecules per unit volume = more junction zones in the network = higher gel strength. (2) EXTRACTION EFFICIENCY — traditional pounding achieves 70-80% myosin dissolution (the low-shear, high-compression mechanism described above), while industrial bowl-cutter emulsification for hot dogs achieves 40-50% (high-shear blade damage causes premature denaturation and aggregation losses of 20-30% of available myosin). (3) HEATING PROFILE — steaming provides controlled 2-3°C/min heating through the critical 40-60°C window (fine-stranded gel formation), while hot dogs cooked in smokehouse ovens experience less uniform temperature control (surface overheating above 85°C while core is still in the critical zone), producing a MIXED gel — fine strands in the overheated outer zone, coarser strands in the rapidly-heated inner zone. The combined result: giò lụa\'s gel strength (3,000-5,000 g·cm) consistently exceeds hot dog (1,500-2,500 g·cm) by 2× — a quantifiable measure of Vietnam\'s charcuterie superiority.'
    },
    {
      title: 'Slicing Physics — Blade Lubrication & Cross-Section Diagnostics',
      description: 'Giò lụa should be sliced with a SHARP, WET blade — dip the knife in cold water between each cut. The water film serves as a HYDRODYNAMIC LUBRICANT (viscosity 1 mPa·s at 20°C) between the steel blade and the protein gel surface: without lubrication, the gel\'s surface proteins adhere to the blade through hydrophobic steel-protein interactions (contact angle of protein gel on steel ≈ 40-60°, indicating significant adhesion), causing the slice to TEAR rather than cut cleanly. The water film (thickness ~10-50μm under cutting pressure) interposes a low-friction boundary layer (friction coefficient μ ≈ 0.01 vs μ ≈ 0.3-0.5 for dry steel-on-gel), enabling clean fracture along the blade plane rather than adhesive tearing perpendicular to it. Slice PERPENDICULAR to the cylinder\'s long axis to reveal the diagnostic cross-section: (1) UNIFORM PALE PINK — myoglobin denatured to metmyoglobin (Fe³⁺ oxidation state, absorption peak at 503nm) at 75°C, producing the characteristic gray-pink; excessive darkening indicates Maillard browning from overheating (>90°C). (2) SMOOTH, PORCELAIN-LIKE SURFACE — no visible pores (air holes), fat pockets (white spots), or graininess (indicating coarse gel from disordered aggregation or insufficient myosin extraction). (3) MIRROR-LIKE GLOSS — the fine-stranded gel surface (strand diameter <30nm, well below visible wavelength 400-700nm) produces specular reflection rather than diffuse scattering, appearing glossy. The SPRING-BACK TEST: press the slice surface with a fingertip (applied stress ~10 kPa) and release — a properly formed gel recovers >90% of the indentation depth within 1 second (elastic recovery), while a failed gel shows <50% recovery (plastic deformation, indicating insufficient cross-linking or heat damage to the rod domain springs).'
    }
  ],

  nutritionFacts: {
    servingSize: '2 slices (approximately 80g)',
    calories: 180,
    totalFat: '4g',
    saturatedFat: '1.5g',
    cholesterol: '65mg',
    sodium: '650mg',
    totalCarbohydrate: '2g',
    dietaryFiber: '0g',
    totalSugars: '1g',
    protein: '28g',
    vitaminD: '0mcg',
    calcium: '15mg',
    iron: '1.5mg',
    potassium: '320mg'
  },

  relatedRecipes: [
    {
      title: 'Bánh Chưng',
      slug: 'banh-chung',
      image: '/images/recipes/banh-chung.jpg',
      description: 'Square sticky rice cake — giò lụa\'s essential Tết companion on the ancestral altar and feast table'
    },
    {
      title: 'Bánh Mướt',
      slug: 'banh-muot',
      image: '/images/recipes/banh-muot.jpg',
      description: 'Nghệ An rice rolls — the thin amylose film that wraps chả lụa for breakfast'
    },
    {
      title: 'Nem Rán',
      slug: 'nem-ran',
      image: '/images/recipes/nem-ran.jpg',
      description: 'Crispy spring rolls — another Tết protein preparation completing the holiday platter'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Giò Lụa — Vietnamese Steamed Pork Sausage',
    description: 'Salt-soluble myosin extraction at ionic strength 0.3-0.6 M depolymerizing thick filaments, hexameric MW 520 kDa with S1 head domain 50-55°C cooperative thermal unfolding driving hydrophobic cross-link formation, hand-pounding 70-80% extraction via low-shear extensional flow (Wi>1) vs machine 40-50%, gel strength 3,000-5,000 g·cm in the elite kamaboko tier, and controlled 2-3°C/min steaming through the critical 40-60°C ordered aggregation window.',
    image: '/images/recipes/gio-lua.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-20',
    prepTime: 'PT1H',
    cookTime: 'PT1H',
    totalTime: 'PT2H',
    recipeYield: '1 log (~10 servings)',
    recipeCategory: 'Main Course',
    recipeCuisine: 'Vietnamese',
    keywords: 'giò lụa, vietnamese pork sausage, chả lụa, steamed pork ham, tết food, vietnamese charcuterie, protein gel',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '180 calories',
      fatContent: '4g',
      proteinContent: '28g',
      carbohydrateContent: '2g'
    },
    recipeIngredient: [
      '1 kg lean pork leg meat (thịt nạc đùi)',
      '25g fine salt (2.5% w/w)',
      '15g sugar',
      '2 tbsp fish sauce',
      '1 tsp baking powder',
      '½ tsp black pepper',
      '8-10 large banana leaf pieces',
      'Kitchen string for tying'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Select lean post-rigor pork leg, keep cold below 10°C, cut into 2-3cm cubes.' },
      { '@type': 'HowToStep', text: 'Grind with salt in pulses for myosin thick filament depolymerization — paste must pass inversion test.' },
      { '@type': 'HowToStep', text: 'Pound 30-45 min (traditional) or process 8-10 min for extensional flow myosin orientation — window-pane test confirms.' },
      { '@type': 'HowToStep', text: 'Slam paste to remove air, wrap tightly in banana leaf, tie at 2-3cm intervals under compression.' },
      { '@type': 'HowToStep', text: 'Steam 45-60 min until center reaches 75-80°C, then ice-water bath 10-15 min to arrest cooking and mature gel.' }
    ]
  }
};

export default function GioLuaPage() {
  return <RecipeLayout recipe={recipeData} />;
}
