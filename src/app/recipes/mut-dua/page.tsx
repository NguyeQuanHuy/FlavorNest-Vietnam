'use client';

import RecipeLayout from '../_components/RecipeLayout';

const recipeData = {
  title: 'Mứt Dừa',
  subtitle: 'Candied Coconut Ribbons — Capillary-Driven Sugar Infiltration Through Copra Fiber Matrix',
  heroImage: '/images/recipes/mut-dua.jpg',
  region: 'Southern' as const,
  difficulty: 'Medium',
  prepTime: '45 min',
  cookTime: '1.5 hr',
  totalTime: '2.5 hr + overnight drying',
  servings: 40,
  rating: 4.7,
  reviewCount: 213,
  calories: 55,
  tags: ['Tết', 'Southern', 'Dessert', 'Coconut', 'Candied', 'Confectionery'],

  introduction: {
    paragraphs: [
      "Mứt dừa is a CAPILLARY-DRIVEN SUGAR INFILTRATION process — the exploitation of coconut endosperm's natural POROUS FIBER MATRIX to draw concentrated sucrose syrup into the tissue through capillary action, followed by surface crystallization to produce ribbons of sweet, chewy coconut with a frosted sugar exterior. The coconut meat (copra, the solid endosperm of Cocos nucifera) is not a homogeneous solid but a COMPOSITE MATERIAL: a continuous CELLULOSE-HEMICELLULOSE FIBER NETWORK (comprising ~3% of wet weight, organized as interwoven microfibrils 3-5nm in diameter bundled into macrofibrils 10-50μm) filled with a PARENCHYMA MATRIX of large, thin-walled cells (50-200μm diameter) packed with LIPID BODIES (oil bodies, oleosomes — spherical organelles 1-5μm diameter, each consisting of a triacylglycerol core surrounded by a phospholipid monolayer embedded with oleosins, structural proteins that prevent coalescence). The fresh coconut meat's composition — 35-45% water, 30-35% fat (primarily lauric acid C12:0 at 45-50% of total fatty acids), 3-4% protein, 3-4% fiber, and 6-8% carbohydrate — makes it simultaneously a fat-rich, fiber-structured, water-containing substrate that responds uniquely to sugar processing.",
      "The SUGAR INFILTRATION mechanism exploits the coconut's dual porosity: MACROPORES (the ruptured cell lumens created during shredding/slicing, diameter 50-200μm) and MICROPORES (the interstitial spaces between cellulose microfibrils in the cell wall, diameter 5-50nm). When sliced coconut is immersed in hot sucrose syrup, two transport mechanisms operate simultaneously: (1) CONVECTIVE FLOW through macropores — the syrup fills the large cell cavities rapidly (minutes) driven by the hydrostatic pressure of the surrounding syrup and the CAPILLARY PRESSURE generated at the curved liquid-air meniscus within the pore (P_cap = 2γ·cos θ/r ≈ 1.5 kPa for a 100μm pore with syrup surface tension γ ≈ 75 mN/m and contact angle θ ≈ 30° on the hydrophilic cellulose wall). (2) DIFFUSIVE PENETRATION through micropores — sucrose molecules (hydrodynamic radius ~0.47nm) diffuse into the nanoscale spaces between cellulose microfibrils at D ≈ 1-5 × 10⁻¹¹ m²/s (10-100× slower than free-solution diffusion, restricted by the tortuous path through the fiber network). This dual-rate infiltration produces a GRADED SUGAR PROFILE across the ribbon thickness: the outer zone (0-1mm depth) reaches sugar equilibrium within 30-60 minutes, while the inner core requires 2-3 hours for full penetration — the gradual cooking time of mứt dừa allows COMPLETE INFILTRATION so every fiber is saturated with sugar.",
      "The SENSORY ARCHITECTURE of mứt dừa is defined by the interplay between its THREE STRUCTURAL COMPONENTS: (1) the SUGAR CRYSTAL COATING (surface frost, as in mứt gừng) providing initial sweetness and visual whiteness; (2) the FAT BODIES within the parenchyma cells, providing RICHNESS — when the ribbon is chewed, the ruptured cells release their MCT-rich oil (lauric acid C12:0, capric acid C10:0, caprylic acid C8:0), which coats the tongue with a CREAMY, COOLING sensation (MCTs have a lower melting point than LCTs — coconut oil melts at 24-26°C, just below mouth temperature, producing a characteristic mouth-cooling effect as the latent heat of melting absorbs thermal energy from the oral mucosa); and (3) the FIBER SCAFFOLD providing CHEWINESS — the cellulose-hemicellulose network resists mastication (cellulose's tensile strength ~500-1,000 MPa, comparable to structural steel), requiring 15-25 chewing cycles per piece versus 5-10 for mứt gừng, extending the flavor release duration proportionally. This extended chewing is not a textural defect but a DESIGN FEATURE — it ensures prolonged contact between the sweet-fatty coconut bolus and the taste receptors, maximizing hedonic impact per piece."
    ]
  },

  ingredients: [
    {
      group: 'Coconut Preparation',
      items: [
        { name: 'Fresh mature coconut meat (cơm dừa già)', amount: '500g (approximately 2 coconuts)', note: 'Mature endosperm 11-12 months — firm, white, high fat 30-35%' },
        { name: 'Pandan leaves (lá dứa)', amount: '3-4 leaves (optional)', note: 'For green-tinted variant — 2-acetyl-1-pyrroline aromatic infusion' },
        { name: 'Red food coloring or beetroot juice', amount: 'As needed (optional)', note: 'For Tết multicolor presentation — traditional red/green/white trio' },
      ]
    },
    {
      group: 'Crystallization Syrup',
      items: [
        { name: 'Granulated white sugar', amount: '350g (0.7:1 sugar-to-coconut ratio)', note: 'Lower ratio than mứt gừng — coconut fat provides its own preservation' },
        { name: 'Coconut water or plain water', amount: '100ml', note: 'Minimal — coconut meat releases water during osmotic exchange' },
        { name: 'Vanilla extract', amount: '1 tsp (optional)', note: 'Vanillin aromatic complement to coconut lactones' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Coconut Meat Extraction & Ribbon Cutting — Fiber Length Optimization',
      details: 'Crack the mature coconuts and separate the white endosperm (cơm dừa) from the hard endocarp shell. The brown testa (thin skin between meat and shell) should be left ON for visual contrast in the traditional version (the testa contains condensed tannins that add a slight astringent complexity), or peeled OFF for the pure white version preferred in Southern presentations. Cut the coconut meat into THIN RIBBONS: approximately 3-5cm long × 1cm wide × 2-3mm thick. The DIMENSIONS are structurally optimized: the LENGTH (3-5cm) should run PARALLEL to the predominant fiber orientation in the coconut endosperm (fibers generally align radially from the shell toward the center of the nut — slice tangentially to the shell\'s curvature to capture long fiber spans). Ribbons cut parallel to the fibers have a TENSILE STRENGTH of ~100-200 MPa along their length (the fibers bear the load) but only ~5-10 MPa perpendicular (the parenchyma matrix fails) — this anisotropy creates the characteristic PEELABLE, CHEWY texture when eaten (the ribbon can be torn along its length into fibrous strings, each coated with crystallized sugar). The THICKNESS (2-3mm) is the sugar-penetration optimum: the sucrose diffusion front from each face advances at √(2Dt) ≈ 0.15mm per √(min) in the coconut matrix, reaching the center of a 2mm ribbon in approximately 45 minutes and a 3mm ribbon in approximately 100 minutes — matching the cooking time window of 60-90 minutes.',
      time: '30 min',
      tip: 'The MATURITY of the coconut is critical: young coconut (6-8 months) has soft, gelatinous endosperm with 80-90% water, 5-10% fat, and minimal fiber — it would dissolve into mush during sugar cooking, producing a syrupy paste rather than individual ribbons. Mature coconut (11-12 months) has firm endosperm with 45-50% water, 30-35% fat, and 3-4% fiber — the fully developed cellulose-hemicellulose scaffold provides the STRUCTURAL INTEGRITY to maintain ribbon shape through 90 minutes of boiling. Over-mature coconut (>14 months) has begun COPRA DRYING in situ (the endosperm dehydrates naturally as the nut loses moisture through the shell pores), producing a hard, rubbery texture with low water content (<30%) that resists sugar penetration (the collapsed pore structure reduces both capillary flow and diffusion rates). The visual test: ideal coconut meat is FIRM WHITE with no yellowing (yellow indicates lipid oxidation — the unsaturated fatty acids, primarily oleic C18:1 at 6-8%, oxidize to hydroperoxides producing a rancid off-flavor), snaps cleanly when bent (indicating adequate fiber content), and has a SWEET, FRESH COCONUT AROMA (the dominant volatile is δ-octalactone, a creamy lactone at 10-50 ppm — degradation to hexanal indicates oxidative rancidity).'
    },
    {
      step: 2,
      title: 'Sugar Dissolution & Initial Infusion — Osmotic Gradient Establishment',
      details: 'Combine the coconut ribbons with 350g sugar and 100mL water in a wide, heavy-bottomed pan. Toss to coat all ribbons evenly with sugar. Let stand for 30 MINUTES before heating — this MACERATION STEP allows the dry sugar to draw water from the coconut meat by OSMOSIS (the sucrose concentration at the coconut surface approaches saturation, ~67% w/w, creating an osmotic pressure of ~100 atm against the coconut\'s internal water activity of aw ≈ 0.99). During maceration, the coconut releases 50-80mL of cellular water into the surrounding sugar, DISSOLVING the sugar crystals and forming a concentrated syrup without adding excess external water. This self-generated syrup has two advantages over pre-made syrup: (1) it starts at HIGHER SUGAR CONCENTRATION (because the coconut\'s own water is the solvent, and only enough is released to dissolve the adjacent sugar — no excess dilution), reducing the total cooking time needed to reach the crystallization endpoint; (2) it contains COCONUT FLAVOR COMPOUNDS — the osmotically extracted cellular water carries dissolved δ-octalactone, γ-nonalactone (coconut-peach), and free fatty acids that would be absent in a plain sugar-water syrup, creating a more integrated flavor. If making COLORED variants for Tết (the traditional FIVE-COLOR presentation: white, green/pandan, red, yellow/orange, purple): divide the coconut ribbons into portions and add pandan leaf extract (green — the 2-acetyl-1-pyrroline and chlorophyll pigments), red food coloring or beetroot juice, butterfly pea flower extract (blue-purple), and turmeric (yellow) to separate sugar batches BEFORE maceration, allowing the dye to penetrate the coconut tissue along with the sugar during osmotic exchange.',
      time: '30 min maceration',
      tip: 'The SUGAR-TO-COCONUT RATIO of 0.7:1 (350g sugar per 500g coconut) is LOWER than mứt gừng\'s 0.8:1 because coconut\'s high FAT CONTENT (30-35%) provides additional preservation independently of sugar: the lipid bodies in the coconut cells create a HYDROPHOBIC BARRIER that reduces water activity (aw of coconut oil is effectively 0, and the fat-filled cells have an effective aw of ~0.85-0.90 even before sugar addition, compared to lean ginger at aw ≈ 0.97). The combined effect of sugar (reducing aw to 0.65-0.70 in the aqueous phase) and fat (reducing the proportion of aqueous phase available for microbial growth by occupying 30-35% of the tissue volume) produces equivalent preservation at a LOWER sugar loading — the product is less cloyingly sweet than mứt gừng while being equally shelf-stable. Exceeding 1:1 sugar-to-coconut ratio produces excessively hard, candy-like ribbons where the sugar dominates and the coconut flavor is buried — a common mistake in commercial production that prioritizes shelf life over taste.'
    },
    {
      step: 3,
      title: 'Controlled Cooking — Three-Phase Sugar-Fat Co-Processing',
      details: 'After 30 minutes of maceration, place the pan over MEDIUM-LOW HEAT. The cooking proceeds through three phases, each with distinct thermochemistry: PHASE 1 — BOIL-OFF (0-20 min): the water (from coconut + added 100mL) boils at 100-103°C (the boiling point elevation by dissolved sucrose — ΔT_b = K_b × m, where K_b = 0.512°C·kg/mol for water and m ≈ 5-6 mol/kg for 70% sucrose solution — raises the boiling point 2-3°C above pure water). During this phase, the syrup is THIN and FLUID, and the coconut ribbons float freely. The FAT BODIES in the coconut cells remain INTACT within their oleosin-stabilized membranes because the temperature (100-103°C) is below the oleosin denaturation temperature (~110°C) — the fat stays encapsulated inside the cells rather than leaking into the syrup, which would create a greasy, separated product. Stir gently every 3-5 minutes to prevent sticking. PHASE 2 — CONCENTRATION (20-50 min): as water evaporates, the syrup thickens progressively (viscosity increases from ~10 mPa·s to ~500 mPa·s). The sucrose diffusion front has now penetrated the full thickness of the ribbons (√(2Dt) ≈ 1-1.5mm for t = 30-50 min). The ribbons become TRANSLUCENT as the intracellular sugar concentration matches the cell wall\'s refractive index. Stir more frequently (every 1-2 minutes) as viscosity increases. PHASE 3 — DRYING (50-80 min): most free water has evaporated. The syrup is now a THIN FILM coating each ribbon (syrup temperature reaches 108-112°C, corresponding to ~85-90% sucrose concentration). REDUCE HEAT TO LOW and stir CONTINUOUSLY — at this concentration, the syrup is in the metastable zone (S ≈ 1.1-1.3 at the cooking temperature) and crystallization will begin as soon as the temperature drops upon removal from heat. The fat bodies begin to partially MELT (coconut fat melting point 24-26°C, but the oleosome membrane ruptures at ~110°C, releasing the liquid fat), creating a thin FAT FILM on each ribbon\'s surface that modulates the subsequent crystallization (fat acts as a crystal growth inhibitor by coating crystal faces, producing FINER crystals than mứt gừng — 2-20μm vs 5-50μm).',
      time: '60-80 min',
      tip: 'The CRITICAL TEMPERATURE WINDOW: keep the syrup below 115°C throughout cooking. Above 115°C, two problems emerge simultaneously: (1) MAILLARD BROWNING — the reducing sugars (glucose and fructose from sucrose inversion, which occurs at ~0.5% per hour at 100°C but accelerates dramatically above 110°C) react with the coconut\'s free amino acids (glutamic acid, aspartic acid at ~0.1-0.2% of endosperm protein) to form Amadori intermediates → melanoidins, turning the white ribbons YELLOW then BROWN. For the prized white mứt dừa, even slight yellowing is a quality failure. (2) COCONUT FAT DEGRADATION — above 120°C, the lauric acid (C12:0) and other free fatty acids undergo THERMAL OXIDATION (auto-oxidation accelerates 10× per 15°C temperature increase above 100°C according to the Arrhenius relationship), producing hexanal, nonanal, and 2,4-decadienal — rancid, cardboard-like off-flavors that permanently taint the product. A candy thermometer in the syrup is essential — if temperature approaches 115°C, immediately reduce heat or add 1-2 tablespoons of water to cool the system back below 110°C.'
    },
    {
      step: 4,
      title: 'Crystallization — Fat-Modulated Microcrystal Formation',
      details: 'Remove the pan from heat when the syrup is nearly absorbed and the ribbons are coated with a thin, sticky, very concentrated sugar film (temperature ~110-112°C). The crystallization of mứt dừa differs from mứt gừng because of the coconut fat\'s role as a CRYSTAL HABIT MODIFIER. As the sugar coating cools and enters the supersaturated state (S > 1.3 at 60°C), sucrose nucleation begins — but the fat film on each ribbon\'s surface COMPETES with sucrose for surface sites. Fat molecules (primarily lauric acid, a C12 chain with a terminal carboxylate) ADSORB onto certain crystal faces preferentially (the hydrophobic C12 chain lies flat on the non-polar {110} face of the sucrose crystal, while the carboxylate group points into solution), BLOCKING crystal growth in that direction while allowing growth on un-blocked faces. This ANISOTROPIC GROWTH INHIBITION produces crystals that are FLATTER and SMALLER than those on fat-free surfaces (like mứt gừng): typical mứt dừa crystals are platelets 2-20μm in diameter and 0.5-2μm thick, vs mứt gừng\'s more equant 5-50μm crystals. The flat platelet morphology produces an even MORE MATTE, VELVETY surface finish (the flat faces reflect light specularly at multiple angles rather than the more diffuse scattering from equant crystals). Stir the cooling ribbons with GENTLE TOSSING motions (lifting and dropping rather than circular stirring — circular stirring causes the delicate ribbons to compress against each other, smearing the nascent crystal coating and producing a sticky clump instead of individually frosted pieces). Continue tossing until each ribbon is individually coated with dry, non-sticky sugar frost.',
      time: '15-20 min',
      tip: 'The THREE-COLOR TẾT PRESENTATION: traditional mứt dừa is presented in three colors — TRẮNG (white, plain), XANH (green, pandan-infused), and ĐỎ (red, traditionally from gấc fruit or modern food coloring) — arranged in concentric circles or alternating layers on the Tết candy tray (mâm mứt). The color coding has SYMBOLIC MEANING in Vietnamese Tết culture: WHITE represents purity and new beginnings (the blank slate of the new year), GREEN represents prosperity and growth (the verdant rice paddies of an abundant year), and RED represents good fortune and joy (the universally auspicious color in Vietnamese-Chinese-influenced culture). The pandan-green variant has an ADDITIONAL FLAVOR DIMENSION beyond symbolism: pandan leaf extract contributes 2-acetyl-1-pyrroline (2AP, the same compound responsible for jasmine rice\'s aroma, at 0.1-0.4 ppm) which creates a SYNERGISTIC AROMATIC INTERACTION with the coconut\'s δ-octalactone — both are lactone-family compounds that share the FRUITY-CREAMY receptor activation pathway (OR1A1 and OR2W1 olfactory receptors), and their combination at sub-threshold individual concentrations produces a super-additive aroma perception 2-3× stronger than either alone. This pandan-coconut synergy is one of Southeast Asian cuisine\'s most potent aromatic pairings.'
    },
    {
      step: 5,
      title: 'Drying & Storage — MCT-Stabilized Low Water Activity System',
      details: 'Spread the individually crystallized ribbons on wire racks or parchment-lined trays in a SINGLE LAYER. Dry at room temperature (25-30°C in Southern Vietnam\'s Tết season) for 8-12 hours, or in a very low oven (50°C) for 2-3 hours with the door slightly ajar for moisture escape. The drying endpoint is a ribbon that feels DRY to the touch (surface aw < 0.65), FLEXES without cracking when bent 30° (indicating that the fat content maintains internal plasticity even as the sugar coating dries — pure sugar-dried products like mứt gừng become BRITTLE at aw < 0.65, but the coconut\'s 30-35% fat content acts as an internal PLASTICIZER, maintaining flexibility by preventing the sugar-infiltrated parenchyma from vitrifying into a rigid glass). This fat-mediated flexibility is why mứt dừa has a LONGER ENJOYABLE SHELF LIFE than mứt gừng: the ribbons remain pleasantly chewy for 3-4 weeks at room temperature, while mứt gừng becomes progressively harder (retrogradation of the amorphous sugar in the ginger matrix) after 1-2 weeks. The coconut fat also provides an ADDITIONAL PRESERVATION MECHANISM beyond water activity depression: lauric acid (C12:0, constituting 45-50% of coconut fat) and its monoglyceride form MONOLAURIN have documented ANTIMICROBIAL ACTIVITY against gram-positive bacteria and lipid-enveloped viruses (monolaurin disrupts microbial lipid membranes by inserting into the bilayer and destabilizing the hydrophobic core — the C12 chain length is optimal for membrane disruption, being long enough to insert deeply but short enough to maintain sufficient aqueous solubility for transport to the membrane surface). Store in airtight containers — the primary degradation pathway is not microbial but OXIDATIVE: atmospheric O₂ attacks the unsaturated fatty acids in the coconut fat (oleic acid C18:1 at 6-8% of total fat) through a radical chain reaction initiated by heat or light, producing hydroperoxides → hexanal + nonanal (rancid off-flavors). Protection: exclude light (opaque container), minimize headspace (less O₂ reservoir), and optionally add a small sachet of food-grade silica gel desiccant to maintain low humidity inside the container.',
      time: '8-12 hours air drying',
      tip: 'The BITE PROFILE of quality mứt dừa unfolds in four temporal phases: (1) INITIAL CONTACT (0-2s) — the sugar crystal coating SHATTERS between the teeth (microcrystals fracture along their platelet planes with a satisfying micro-crunch, perceptible as a delicate "sandy" texture distinct from the coarser crunch of granulated sugar), releasing a burst of SWEETNESS as the dissolved sucrose reaches taste receptors. (2) CHEWING PHASE (2-10s) — the teeth compress the coconut ribbon, rupturing the parenchyma cells and releasing the enclosed FAT BODIES. The coconut oil (melting point 24-26°C) liquefies on contact with the warm oral mucosa (37°C), coating the tongue with a CREAMY, COOLING film (the latent heat of melting, ~105 J/g, absorbs 3-5 calories of thermal energy from the mouth surface per gram of fat melted, producing a measurable 0.5-1°C drop in local mucosal temperature — the "cooling" sensation of coconut). (3) FIBER PHASE (10-20s) — as the parenchyma is masticated, the cellulose FIBER SCAFFOLD remains intact, requiring continued chewing. Each chewing cycle squeezes additional fat and sugar from the fiber matrix, providing a SUSTAINED RELEASE of sweetness and richness. (4) AROMATIC FINISH (15-30s) — the volatile compounds released by mastication (δ-octalactone from coconut, vanillin if added, 2AP if pandan-infused) reach the retronasal olfactory epithelium via the nasopharynx, producing the characteristic CREAMY-SWEET aroma that lingers after the bolus is swallowed. This 30-second sensory arc makes mứt dừa one of the most texturally complex items on the Tết candy tray.'
    }
  ],

  proTips: [
    {
      title: 'Lauric Acid — The Medium-Chain Triglyceride Advantage',
      description: 'Coconut fat is unique among plant oils because it is >60% MEDIUM-CHAIN TRIGLYCERIDES (MCTs) — triglycerides esterified with fatty acids of 6-12 carbon chain length. The dominant MCT fatty acid is LAURIC ACID (C12:0) at 45-50% of total fatty acids, followed by myristic (C14:0, 15-20%), capric (C10:0, 5-8%), and caprylic (C8:0, 5-8%). MCTs differ from the LONG-CHAIN TRIGLYCERIDES (LCTs, C16-C22) that dominate most dietary fats in THREE metabolically significant ways: (1) ABSORPTION — MCTs are hydrolyzed faster by pancreatic lipase (the C12 chain fits more easily into lipase\'s catalytic groove than C16-C18 chains, Km decreases 3-5× with decreasing chain length) and the resulting free MCFAs are absorbed directly into the portal vein to the liver, bypassing the lymphatic chylomicron pathway that LCTs require (MCFAs are sufficiently water-soluble, with lauric acid\'s solubility at 55 mg/L vs stearic acid\'s 0.3 mg/L, to be transported as free acids bound to albumin rather than requiring repackaging into lipoproteins). (2) OXIDATION — MCFAs enter the mitochondrial matrix directly, without requiring the CARNITINE SHUTTLE (CPT-I/CPT-II transport system) that LCFAs depend on — CPT-I is the rate-limiting step of LCFA oxidation and is inhibited by malonyl-CoA (the first committed intermediate of fatty acid synthesis), creating a metabolic bottleneck. MCFAs bypass this bottleneck entirely, making them ~2× faster to oxidize than LCFAs. (3) THERMOGENESIS — the rapid, unregulated oxidation of MCFAs in hepatic mitochondria produces excess acetyl-CoA that exceeds the TCA cycle\'s capacity, driving KETOGENESIS (acetyl-CoA → acetoacetate → β-hydroxybutyrate). These ketone bodies are exported to peripheral tissues as an alternative fuel source. The net effect: MCTs increase diet-induced thermogenesis (DIT) by 50-100% compared to isocaloric LCTs, meaning that calories from coconut fat generate MORE HEAT and LESS STORAGE than equivalent calories from olive oil or butter. Each piece of mứt dừa contains ~2g of coconut fat, providing ~18 kcal of which ~10-12% is dissipated as heat rather than stored — a small but real thermogenic contribution to the cold Tết season.'
    },
    {
      title: 'The Coconut Oleosome — Nature\'s Micro-Encapsulation System',
      description: 'The fat in coconut endosperm is not a continuous oil phase (like olive oil in an olive) but is stored in OLEOSOMES — discrete spherical organelles of 1-5μm diameter, each consisting of a TRIACYLGLYCEROL (TAG) core surrounded by a PHOSPHOLIPID MONOLAYER (not a bilayer — the hydrophobic TAG core replaces the second leaflet) embedded with OLEOSINS (small 15-24 kDa proteins with a central hydrophobic hairpin that anchors into the TAG core and N/C-terminal amphiphilic domains that face the aqueous cytoplasm). The oleosins prevent oleosome COALESCENCE through STERIC REPULSION — the protein domains extending into the aqueous phase create an entropic barrier (the "polymer brush" model, with repulsion energy proportional to the number of oleosin molecules per unit surface area at ~10,000 oleosins per oleosome) that keeps adjacent oleosomes separated. This natural micro-encapsulation is what makes mứt dừa possible: if the coconut fat existed as a free oil (as in processed coconut oil), it would MIGRATE to the surface during sugar cooking, creating a greasy exterior that repels the aqueous sugar syrup and prevents crystallization (fat is hydrophobic — it forms a barrier film with contact angle >90° against the aqueous syrup, blocking sugar deposition). But because the fat remains ENCAPSULATED in oleosomes until the cells are ruptured by chewing, the sugar syrup can penetrate the aqueous-accessible INTER-OLEOSOME spaces in the cell, coating the cellulose cell wall with sugar while the fat stays sequestered inside its protein-stabilized microspheres. Only when the consumer BITES the ribbon are the cells ruptured, the oleosomes released, and the fat experienced as a sudden burst of creamy richness — a temporal separation of sweetness (surface sugar, immediate) and richness (encapsulated fat, delayed) that is the defining pleasure of mứt dừa.'
    },
    {
      title: 'Bến Tre — The Coconut Capital of Vietnam',
      description: 'The highest-quality mứt dừa comes from BẾN TRE province (Mekong Delta, Southern Vietnam), which produces ~40% of Vietnam\'s coconut crop and has earned the epithet "Xứ Dừa" (Coconut Land). Bến Tre\'s coconut quality advantage has THREE environmental bases: (1) SOIL — the alluvial Mekong Delta soil (pH 5.5-6.5, high organic matter 3-5%, clay-loam texture) provides optimal mineral nutrition for Cocos nucifera, particularly POTASSIUM (K⁺ is the critical nutrient for coconut, required at 200-300 kg K₂O/ha/year for maximum endosperm oil content — K⁺ activates the fatty acid synthase complex that builds the lauric acid chains, and K-deficient palms produce endosperm with 20-25% fat instead of the optimal 30-35%). (2) WATER TABLE — the Mekong Delta\'s shallow water table (1-3m depth, with seasonal flooding that recharges the root zone) ensures the palm never experiences WATER STRESS — coconut palms have no drought-dormancy mechanism (they are tropical lowland plants that evolved in consistently wet coastal habitats) and respond to water deficit by REDUCING endosperm development (smaller nuts with thinner meat), so reliable water supply directly determines nut size and meat thickness. (3) VARIETY — Bến Tre grows predominantly the "dừa ta" (local coconut) variety, a TALL PALM ecotype with 60-80 years productive lifespan that has been selected by Vietnamese farmers for ENDOSPERM QUALITY (thick meat, high fat content, sweet water) rather than the high-yielding DWARF HYBRID varieties (PB-121, Malayan Yellow Dwarf × West African Tall crosses) promoted by agricultural agencies for copra oil production. The "dừa ta" endosperm is 12-15mm thick (vs 8-10mm for hybrids) with 33-36% fat (vs 28-30% for hybrids) and a higher δ-octalactone content (the distinctive coconut aroma compound), producing mứt dừa with superior chewiness, richness, and fragrance. Bến Tre mứt dừa commands a 30-50% price premium over generic supermarket versions made from hybrid-variety copra — the terroir effect in action.'
    },
    {
      title: 'Five-Color Mứt Dừa — Chromatic Symbolism on the Tết Tray',
      description: 'The FIVE-COLOR mứt dừa (mứt dừa ngũ sắc) represents the Vietnamese adaptation of the Chinese FIVE ELEMENTS (Ngũ Hành) cosmological system: WHITE (Kim/Metal — the west, autumn, purity — plain mứt dừa), GREEN (Mộc/Wood — the east, spring, growth — pandan-infused), RED (Hỏa/Fire — the south, summer, fortune — gấc or food coloring), YELLOW (Thổ/Earth — the center, stability, prosperity — turmeric-tinted), and BLUE-PURPLE (Thủy/Water — the north, winter, wisdom — butterfly pea flower extract). The five colors arranged on the Tết candy tray represent COSMIC BALANCE — all five elements present in harmony, symbolizing a wish for a COMPLETE, BALANCED new year. The COLORING AGENTS are themselves foods with nutritional significance: PANDAN (Pandanus amaryllifolius) provides chlorophyll a/b (the green pigments, maximum absorption at 430nm/663nm) and 2-acetyl-1-pyrroline (the aroma compound shared with jasmine rice, basmati rice, and bread crust — a Maillard product of proline + reducing sugar at >100°C); GẤC (Momordica cochinchinensis) provides LYCOPENE (50-70× the lycopene concentration of tomato by weight, one of nature\'s most potent singlet oxygen quenchers with a quenching rate constant kq ≈ 3.1 × 10¹⁰ M⁻¹s⁻¹) and β-carotene (pro-vitamin A); TURMERIC provides CURCUMIN (the yellow phenolic compound, absorption maximum 420nm, with documented anti-inflammatory activity through NF-κB pathway inhibition); BUTTERFLY PEA (Clitoria ternatea) provides TERNATIN anthocyanins (acylated delphinidin glycosides with exceptional pH-stability — they maintain their blue color from pH 3-7, unlike most anthocyanins which turn red below pH 3, because the acyl groups stack over the chromophore, preventing the hydration that causes color loss). Each color contributes not just symbolism but PHYTOCHEMICAL DIVERSITY — the five-color tray is a polyphenol-rich antioxidant portfolio disguised as a festive confection.'
    }
  ],

  nutritionFacts: {
    servingSize: '4 ribbons (approximately 30g)',
    calories: 55,
    totalFat: '3g',
    saturatedFat: '2.5g',
    cholesterol: '0mg',
    sodium: '5mg',
    totalCarbohydrate: '8g',
    dietaryFiber: '0.5g',
    totalSugars: '7g',
    protein: '0.3g',
    vitaminD: '0mcg',
    calcium: '3mg',
    iron: '0.2mg',
    potassium: '35mg'
  },

  relatedRecipes: [
    {
      title: 'Mứt Gừng',
      slug: 'mut-gung',
      image: '/images/recipes/mut-gung.jpg',
      description: 'Candied ginger — the pungent crystallized counterpart on the Tết candy tray'
    },
    {
      title: 'Chè Kho',
      slug: 'che-kho',
      image: '/images/recipes/che-kho.jpg',
      description: 'Dried mung bean pudding — another Tết sweet with complementary protein-starch base'
    },
    {
      title: 'Bánh Tét',
      slug: 'banh-tet',
      image: '/images/recipes/banh-tet.jpg',
      description: 'Cylindrical rice cake — Southern Tết staple featuring coconut cream MCT infusion'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Mứt Dừa — Vietnamese Candied Coconut Ribbons',
    description: 'Capillary-driven sucrose infiltration through coconut copra dual-porosity matrix (macropore convection + micropore Fickian diffusion D≈1-5×10⁻¹¹ m²/s), oleosome-encapsulated MCT lauric acid 45-50% providing internal fat-phase preservation and antimicrobial monolaurin, fat-modulated crystallization producing 2-20μm platelet microcrystals, and 30-second temporal sensory arc from crystal crunch through fat-melt cooling to fiber-scaffold sustained release.',
    image: '/images/recipes/mut-dua.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-20',
    prepTime: 'PT45M',
    cookTime: 'PT1H30M',
    totalTime: 'PT14H',
    recipeYield: '~40 ribbons',
    recipeCategory: 'Dessert',
    recipeCuisine: 'Vietnamese',
    keywords: 'mứt dừa, candied coconut, vietnamese tết candy, coconut ribbons, five color mut dua',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '55 calories',
      fatContent: '3g',
      proteinContent: '0.3g',
      carbohydrateContent: '8g'
    },
    recipeIngredient: [
      '500g mature coconut meat',
      '350g granulated sugar',
      '100ml water or coconut water',
      'Pandan leaves for green variant (optional)',
      'Red food coloring for red variant (optional)'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Extract mature coconut meat, cut 3-5cm × 1cm × 2-3mm ribbons parallel to fiber orientation.' },
      { '@type': 'HowToStep', text: 'Macerate with sugar 30 min for osmotic water extraction and self-syrup generation.' },
      { '@type': 'HowToStep', text: 'Cook 60-80 min through boil-off, concentration, and drying phases, keeping below 115°C.' },
      { '@type': 'HowToStep', text: 'Remove from heat, toss gently during cooling for fat-modulated platelet crystal formation.' },
      { '@type': 'HowToStep', text: 'Dry 8-12 hours, store airtight — MCT fat maintains chewiness at aw 0.65-0.70 for 3-4 weeks.' }
    ]
  }
};

export default function MutDuaPage() {
  return <RecipeLayout recipe={recipeData} />;
}
