'use client';

import RecipeLayout from '../_components/RecipeLayout';

const recipeData = {
  title: 'Tương Nam Đàn',
  subtitle: 'Fermented Soybean & Rice Paste — The Dual-Substrate Koji Proteolysis Engine',
  heroImage: '/images/recipes/tuong-nam-dan.jpg',
  region: 'Central' as const,
  difficulty: 'Hard',
  prepTime: '2 hrs',
  cookTime: '0 min (3-6 months fermentation)',
  totalTime: '3-6 months',
  servings: 20,
  rating: 4.7,
  reviewCount: 158,
  calories: 45,
  tags: ['Nghệ An', 'Fermented', 'Soybean Paste', 'Central', 'Traditional', 'Condiment'],

  introduction: {
    paragraphs: [
      "Tương Nam Đàn is a DUAL-SUBSTRATE SOLID-STATE FERMENTATION — one of the most biochemically sophisticated food processes in Vietnamese cuisine. Unlike Japanese miso (which ferments soybeans alone with koji mold) or Korean doenjang (which ferments soybeans with Bacillus-dominated meju blocks), Nghệ An tương ferments SOYBEANS AND GLUTINOUS RICE simultaneously, each substrate providing what the other lacks. Soybeans contribute PROTEIN (36-40% dry weight) — the raw material for umami-producing proteolysis. Glutinous rice contributes STARCH (75-80% dry weight) — the substrate for SACCHARIFICATION, converting polysaccharides to simple sugars that provide sweetness and serve as energy for the fermenting microorganisms. The dual-substrate design creates a SELF-BALANCING FERMENTATION: as the mold Aspergillus oryzae (koji) produces PROTEASES that break down soy protein into free amino acids (glutamate → umami, leucine → sweet, phenylalanine → bitter-to-sweet), it simultaneously produces AMYLASES (α-amylase, glucoamylase) that break down rice starch into glucose and maltose (→ sweetness). The resulting paste has a COMPLEX FLAVOR PROFILE that neither substrate could produce alone: umami from soy protein hydrolysis, sweetness from rice starch saccharification, and a deep CARAMEL-BROWN color from Maillard reactions between the freed amino acids and sugars.",
      "The MOLD PHASE is the biotechnological core of tương production. Cooked glutinous rice is spread on bamboo trays and left at 28-32°C and >80% relative humidity for 2-3 days. During this period, Aspergillus oryzae spores (naturally present in the Nghệ An kitchen environment, or deliberately inoculated from a previous batch) germinate and produce AERIAL HYPHAE that penetrate into the rice matrix. The hyphae secrete EXTRACELLULAR ENZYMES — primarily α-amylase (EC 3.2.1.1, which randomly cleaves α-1,4 linkages in starch chains, reducing viscosity rapidly), glucoamylase (EC 3.2.1.3, which sequentially removes glucose units from the non-reducing end), and alkaline protease (EC 3.4.21, which cleaves peptide bonds in denatured soy protein at pH 7-9). These enzymes are the CATALYTIC MACHINERY of the entire fermentation — without them, the starch and protein substrates would remain inert. The mold essentially functions as an ENZYME FACTORY: it grows on the rice, producing enzymes that diffuse outward into the mixed soy-rice substrate and catalyze the hydrolysis reactions that generate flavor.",
      "Nam Đàn is the district that gives this tương its name — and its SPECIFICITY is not just geographical marketing. The Nam Đàn production method differs from other Vietnamese tương in three critical parameters: (1) the SOY:RICE RATIO is approximately 1:1 by dry weight (other regions use 2:1 or 3:1), producing a SWEETER, MORE BALANCED paste; (2) the fermentation vessel is traditionally a large earthenware jar (chum) exposed to DIRECT SUNLIGHT for several hours daily — the solar heating creates THERMAL CYCLING (25°C at night, 40-50°C in afternoon sun) that drives enzymatic reactions at different rates depending on the temperature optimum of each enzyme (α-amylase optimum 60-70°C, protease optimum 45-55°C, both shut down below 20°C), producing a flavor complexity that isothermal fermentation cannot match; (3) the paste is STIRRED DAILY with a wooden paddle, incorporating oxygen into the anaerobic mass, which activates oxidative browning enzymes (polyphenol oxidase, peroxidase) that contribute to the deep color and nutty flavor."
    ]
  },

  ingredients: [
    {
      group: 'Koji Preparation (Mốc)',
      items: [
        { name: 'Glutinous rice (gạo nếp)', amount: '500g', note: 'Cooked — amylopectin-rich substrate for A. oryzae' },
        { name: 'Koji starter (mốc tương) or previous batch', amount: '1 tbsp', note: 'A. oryzae spore inoculum — 10⁶ spores/g' },
      ]
    },
    {
      group: 'Soybean Preparation',
      items: [
        { name: 'Soybeans (đậu nành)', amount: '500g', note: 'Dry weight — 1:1 ratio with rice' },
        { name: 'Water for soaking', amount: '1.5L' },
      ]
    },
    {
      group: 'Brine & Fermentation',
      items: [
        { name: 'Sea salt', amount: '150g', note: '10-12% w/w of total mass — halophilic selection' },
        { name: 'Water (boiled and cooled)', amount: '1L', note: 'Sterile diluent — no competing microbiome' },
      ]
    },
    {
      group: 'Serving & Uses',
      items: [
        { name: 'Mature tương', amount: 'As needed', note: 'After 3-6 months — dark brown, thick, umami-rich' },
        { name: 'Chili, garlic, lime', amount: 'To taste', note: 'For dipping sauce preparation' },
        { name: 'Sugar', amount: 'Optional', note: 'Balance adjustment' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Koji Cultivation — Aspergillus oryzae Enzyme Factory',
      details: 'Cook glutinous rice until tender but not mushy (al dente — individual grains should be intact). Spread cooked rice in a thin layer (2-3cm) on a bamboo tray lined with clean banana leaf or cloth. Allow to cool to 35°C. Sprinkle koji starter evenly over the surface and mix gently. Cover with a damp cloth and place in a warm (28-32°C), humid (>80% RH) location. Within 24 hours, white mycelium appears on the rice surface. By 48-72 hours, the rice should be covered with a DENSE MAT of white-to-pale-green mycelium — this is the KOJI (mốc). The green color indicates SPORULATION (Aspergillus oryzae conidia are yellow-green) — the mold has completed its growth phase and is producing spores for the next generation. At this stage, the rice is saturated with EXTRACELLULAR ENZYMES: α-amylase activity reaches 50-100 U/g, glucoamylase 20-50 U/g, alkaline protease 200-500 U/g.',
      time: '48-72 hrs',
      tip: 'The 28-32°C temperature range is CRITICAL for species selection. A. oryzae grows optimally at 30-35°C and produces predominantly PROTEASES and AMYLASES — the enzymes needed for tương flavor development. At higher temperatures (37-42°C), the closely related A. flavus (which produces the carcinogenic mycotoxin AFLATOXIN B₁) is favored. The two species are morphologically similar (both produce yellow-green conidia) but biochemically different: A. oryzae has LOST the aflatoxin biosynthetic gene cluster through millennia of human selection (the 70 kb gene cluster is fragmented and non-functional in domesticated A. oryzae strains). The temperature control during koji cultivation is therefore a SAFETY MEASURE rooted in evolutionary microbiology — selecting for the domesticated, non-toxigenic strain over its wild, toxigenic relative.'
    },
    {
      step: 2,
      title: 'Soybean Preparation — Protein Denaturation for Enzyme Access',
      details: 'Soak soybeans in water overnight (12-16 hours) — the beans absorb water and swell to ~2.2× their dry weight. Boil or steam the soaked beans until soft (2-3 hours at 100°C, or 45 min in a pressure cooker at 121°C). The cooking serves TWO ESSENTIAL FUNCTIONS: (1) PROTEIN DENATURATION — native soy proteins (glycinin 11S and β-conglycinin 7S, which together comprise 65-80% of total soy protein) are globular proteins with hydrophobic cores that are INACCESSIBLE to proteases. Heating above 80°C unfolds these globular structures, exposing the hydrophobic core and the peptide bonds to enzymatic attack — denatured soy protein is hydrolyzed 10-50× faster than native protein by A. oryzae proteases. (2) STERILIZATION — the 100°C+ treatment kills vegetative bacterial cells and most mold spores on the bean surface, reducing microbial competition for the inoculated A. oryzae. Drain and cool the beans to 40°C, then COARSELY CRUSH — not into a paste, but into irregular 3-5mm pieces that expose maximum surface area while maintaining structural integrity.',
      time: '16 hrs soak + 2-3 hrs cook',
      tip: 'The COARSE CRUSH is a surface-area optimization with a STRUCTURAL CONSTRAINT. Finely ground soybeans (paste) would provide maximum surface area for enzymatic attack, but would also create a DENSE, OXYGEN-EXCLUDING MASS that prevents aerobic mold growth on the surfaces. The 3-5mm irregular pieces provide a POROUS BED with interstitial air channels (30-40% void fraction) that allow oxygen diffusion throughout the mass — essential for A. oryzae, which is an OBLIGATE AEROBE that requires O₂ for energy production via the mitochondrial electron transport chain. The irregular shape (vs uniform cubes) creates a FRACTAL-LIKE surface with crevices and protrusions that increase the effective surface area by 2-3× compared to smooth cubes of the same size — more surface means more enzyme-substrate contact.'
    },
    {
      step: 3,
      title: 'Combining — Dual-Substrate Assembly',
      details: 'In a large earthenware jar (chum), combine the crushed cooked soybeans with the koji rice. Mix thoroughly — every soy piece should be in contact with koji rice pieces. Dissolve salt in boiled, cooled water to make brine (~15% NaCl solution). Pour brine over the soy-koji mixture until the solids are JUST SUBMERGED (the liquid level should be 1-2cm above the solid surface). Stir to distribute salt evenly. The SALT serves multiple functions: (1) it creates a HALOPHILIC SELECTION — only salt-tolerant organisms (A. oryzae, halophilic LAB like Tetragenococcus halophilus) survive; (2) it CONTROLS THE RATE of enzymatic hydrolysis — salt partially inhibits protease activity (10-12% NaCl reduces protease activity by 40-60%), preventing over-rapid proteolysis that would produce excessive bitter peptides (hydrophobic peptides of 2-6 kDa, primarily those rich in leucine, isoleucine, and phenylalanine); (3) it PRESERVES the paste — 10-12% NaCl is above the growth minimum for most food-borne pathogens.',
      time: '30 min',
      tip: 'The 1:1 SOY:RICE RATIO specific to Nam Đàn produces a distinctive SWEET-SAVORY BALANCE. Compare: Japanese shiro miso uses 1:2 soy:rice (very sweet, mild umami), Japanese aka miso uses 1:0.5 soy:rice (strong umami, little sweetness), Korean doenjang uses ~1:0 (pure soybean, intense umami, no saccharification-derived sweetness). Nam Đàn tương at 1:1 sits at the MIDPOINT — enough soy protein for substantial umami generation (free glutamate reaches 2-5 g/L after 3-6 months), enough rice starch for significant sweetness (glucose + maltose reach 5-10 g/L). This balance is the SENSORY IDENTITY of Nam Đàn tương — it\'s what makes it immediately distinguishable from both Japanese and other Vietnamese tương in blind tasting.'
    },
    {
      step: 4,
      title: 'Solar Fermentation — Thermal Cycling Bioreactor',
      details: 'Place the sealed jar in a location that receives DIRECT MORNING SUNLIGHT (6-10 AM, 2-4 hours of sun exposure). Cover with a glass or clear plastic lid that allows solar heating while preventing rain and contamination. STIR the paste daily with a clean wooden paddle — mixing incorporates oxygen, redistributes enzymes and substrates, and prevents surface mold. Ferment for a MINIMUM of 3 months (traditional: 6-12 months). During fermentation, monitor: the AROMA should progress from raw-beany (first weeks) → malty-sweet (1-2 months) → deep savory-caramel (3+ months); the COLOR should darken from pale tan → amber → deep mahogany-brown; the TEXTURE should thin from thick paste → pourable sauce as proteolysis and saccharification break down the solid matrix.',
      time: '3-6 months',
      tip: 'The THERMAL CYCLING from solar exposure is a MULTI-ENZYME OPTIMIZATION strategy. A. oryzae produces enzymes with DIFFERENT TEMPERATURE OPTIMA: α-amylase (60-70°C, still active at the jar\'s peak temperature of 45-50°C in direct sun), acid protease (45-55°C, peaks during solar heating), alkaline protease (50-60°C, also peaks during heating), and glutaminase (37-45°C, active at moderate temperatures). At night (25°C), enzyme ACTIVITY is low but enzyme STABILITY is high — the enzymes accumulate without being denatured. During solar heating (40-50°C), enzyme activity PEAKS — the accumulated enzymes catalyze maximum hydrolysis during the warmest hours. This daily cycle produces MORE TOTAL HYDROLYSIS than constant-temperature fermentation at any single temperature, because it allows the enzymes to work at their optimum during the day while preserving them at night. It\'s a natural PULSED-REACTOR strategy.'
    },
    {
      step: 5,
      title: 'Maturation Assessment — Sensory & Chemical Endpoints',
      details: 'After 3 months minimum, assess the tương for readiness. Taste: should be DEEPLY SAVORY (umami from free glutamate 2-5 g/L + aspartate), MODERATELY SWEET (glucose + maltose from saccharification), with NO BITTERNESS (bitter peptides should have been further hydrolyzed to non-bitter amino acids by extended fermentation). Aroma: COMPLEX, with notes of caramel (Maillard melanoidins), roasted grain (pyrazines from amino acid-sugar reactions), and a fermented depth (organic acids — lactic, acetic, succinic — produced by LAB). Color: DARK MAHOGANY-BROWN (melanoidins — high-molecular-weight Maillard polymers, MW >300 kDa, responsible for the color of soy sauce, balsamic vinegar, and dark beer). Texture: thick but pourable, with some suspended soy fiber particles.',
      time: 'Assessment only',
      tip: 'The BITTERNESS→UMAMI TRANSITION is a critical quality marker. Early in fermentation (month 1-2), protease activity produces BITTER PEPTIDES — oligopeptides of 2-6 amino acids with hydrophobic residues (Leu, Ile, Phe, Trp, Val) that activate the T2R bitter taste receptors. These peptides are INTERMEDIATES — they are further hydrolyzed by exopeptidases (aminopeptidase, carboxypeptidase) into free amino acids over the subsequent months. Free leucine and phenylalanine are SWEET (not bitter — bitterness requires the peptide context, not the individual amino acid). If the tương is still bitter at 3 months, it needs MORE TIME, not adjustment — bitterness is a sign of INCOMPLETE PROTEOLYSIS, and the solution is patience, not additives.'
    },
    {
      step: 6,
      title: 'Serving — Tương as Universal Condiment',
      details: 'Nam Đàn tương is used three ways: (1) DIPPING SAUCE — mix with minced garlic, chili, lime juice, and a touch of sugar. The acid (lime) enhances the perception of umami (protonation of glutamate increases its binding affinity for the T1R1+T1R3 receptor), the chili adds capsaicin heat, and the sugar balances any residual bitterness. (2) COOKING SAUCE — add to stir-fries, braises, and soups as a umami base. The amino acids in tương undergo MAILLARD REACTIONS when cooked at high temperature (>140°C), producing new aromatic compounds (pyrazines, thiazoles) that don\'t exist in the raw paste. (3) STRAIGHT CONDIMENT — a spoonful alongside rice, boiled vegetables, or tofu. In this form, the tương\'s full flavor complexity is experienced without masking — the 200+ volatile compounds produced during months of fermentation are presented directly to the palate.',
      time: '5 min',
      tip: 'Tương that has been fermenting for >12 months develops a FIFTH DIMENSION of flavor beyond sweet-salty-sour-umami: a deep, complex KOKUMI sensation. Kokumi is mediated by γ-glutamyl peptides (γ-Glu-Val-Gly, γ-Glu-Cys-Gly/glutathione) that activate the CALCIUM-SENSING RECEPTOR (CaSR) on taste cells. These peptides are produced during extended fermentation by γ-glutamyltranspeptidase, an enzyme that transfers glutamyl groups from glutathione to other amino acids. Kokumi doesn\'t have its own taste — it AMPLIFIES the existing tastes, making sweet sweeter, umami deeper, and creating a sensation of THICKNESS, CONTINUITY, and MOUTHFULNESS. This is why artisanal 12-month tương has a presence and depth that 3-month tương — despite similar umami intensity — lacks.'
    }
  ],

  proTips: [
    {
      title: 'Aspergillus oryzae — The National Fungus of Japan, The Unsung Hero of Nghệ An',
      description: 'A. oryzae (koji mold) is one of humanity\'s oldest DOMESTICATED ORGANISMS — selected from wild Aspergillus populations over at least 2,000 years of East Asian fermentation. Compared to its wild ancestor A. flavus, domesticated A. oryzae has undergone radical GENOMIC CHANGES: (1) LOSS of the aflatoxin biosynthetic gene cluster (the 25-gene, 70 kb cluster is fragmented and non-functional); (2) AMPLIFICATION of protease and amylase gene families (A. oryzae has 134 protease genes vs A. flavus\'s 93 — a 44% increase through gene duplication events); (3) ENHANCED SPORULATION on starchy substrates (A. oryzae produces 10× more spores on rice than on soil-based media, reflecting its adaptation to the human-provided substrate). This is convergent ARTIFICIAL SELECTION — different cultures across East Asia (Japan: miso/sake, China: doubanjiang/jiuqu, Vietnam: tương) independently selected the same species for the same enzymatic capabilities, producing regionally distinct but functionally equivalent domesticated strains.'
    },
    {
      title: 'Melanoidin Color — Maillard Browning as Fermentation Clock',
      description: 'The COLOR of tương is a direct visual indicator of its MAILLARD REACTION PROGRESS — and thus its fermentation age. Maillard reactions between free amino acids (from proteolysis) and reducing sugars (from saccharification) proceed through three stages: EARLY (Amadori rearrangement, producing colorless intermediates, days 1-30), INTERMEDIATE (dehydration and fragmentation, producing UV-absorbing but weakly colored compounds like 3-deoxyglucosone and hydroxymethylfurfural, months 1-3), and ADVANCED (polymerization into high-MW melanoidins, MW 10-300 kDa, producing the characteristic brown color, months 3-12). The color intensity follows a LOGARITHMIC CURVE: it increases rapidly in months 3-6 (as the concentration of early/intermediate products exceeds the threshold for polymerization), then plateaus at months 12+ (as the remaining free amino acids and sugars are depleted). A color comparison card (like a paint swatch) is more reliable than taste for assessing fermentation maturity — the color:flavor correlation is R² > 0.85.'
    },
    {
      title: 'Glutaminase — The Umami-Generating Enzyme',
      description: 'The key enzyme for UMAMI GENERATION in tương is not protease (which merely liberates amino acids from protein) but GLUTAMINASE (EC 3.5.1.2, L-glutamine amidohydrolase). Glutaminase converts the amino acid GLUTAMINE (abundant in soy protein, 18-20% of total amino acids, but TASTELESS) into GLUTAMIC ACID (the umami taste molecule) + ammonia. Without glutaminase, the free glutamine released by proteolysis would contribute NOTHING to umami flavor — the amide group on glutamine\'s side chain blocks the γ-carboxyl group that is essential for binding to the T1R1+T1R3 umami receptor. A. oryzae produces glutaminase as one of its SECONDARY METABOLITES during the stationary growth phase (after the exponential growth phase on the koji rice). The enzyme has a pH optimum of 5.0-6.0 — precisely matching the pH of the fermenting tương paste during months 1-3, when the maximum glutamine substrate is available from ongoing proteolysis. This pH coincidence is not random — it reflects 2,000+ years of co-evolution between the mold and the fermentation conditions selected by human practice.'
    },
    {
      title: 'Daily Stirring — Oxygen Pulse Engineering',
      description: 'The DAILY STIRRING of tương is far more than mixing. Each stir event introduces a PULSE OF DISSOLVED OXYGEN (~8 mg/L at saturation) into the otherwise anaerobic paste. This oxygen pulse triggers THREE REACTIONS: (1) OXIDATIVE BROWNING — polyphenol oxidase (present in soybean at ~0.5 U/g) catalyzes the oxidation of phenolic compounds (isoflavones: genistein, daidzein) to quinones, which polymerize into brown pigments, contributing 20-30% of the total color development; (2) LIPID OXIDATION — soybean oil (18-20% of dry weight) undergoes auto-oxidation at the double bonds of linoleic and linolenic acids, producing aldehydes (hexanal, 2-nonenal) that contribute to the complex aroma — controlled lipid oxidation produces pleasant nutty-roasty notes, while uncontrolled oxidation produces rancidity; (3) MICROBIAL SUCCESSION RESET — the oxygen pulse briefly favors aerobic organisms over anaerobes, preventing the buildup of anaerobic spoilage bacteria (Clostridium) that produce off-flavors (butyric acid → rancid butter smell). The daily stirring is an empirical OXYGEN ENGINEERING protocol — a pulsed aeration strategy that maintains the fermentation in a FACULTATIVE ZONE between fully aerobic (too much oxidation → rancidity) and fully anaerobic (spoilage risk).'
    },
    {
      title: 'Nam Đàn as Hồ Chí Minh\'s Birthplace — Cultural Symbolism of Tương',
      description: 'Nam Đàn district is the birthplace of HỒ CHÍ MINH (1890-1969), and tương Nam Đàn carries a CULTURAL WEIGHT that transcends its culinary value. The paste symbolizes Nghệ An\'s ethos of SIMPLICITY AND PATIENCE — it transforms the cheapest possible ingredients (soybeans and rice, the staples of subsistence agriculture) into a deeply complex condiment through nothing but TIME, SALT, and SUNSHINE. No expensive equipment, no imported ingredients, no specialized knowledge beyond what a grandmother teaches her granddaughter. The 3-6 month fermentation period embodies the Nghệ An philosophy of DELAYED GRATIFICATION — the willingness to invest months of daily attention (stirring, covering, checking) for a reward that compounds slowly and invisibly. In a region historically marked by poverty and hardship (Nghệ An was one of the poorest provinces in Vietnam for much of the 20th century), tương represents the DIGNIFICATION OF SCARCITY — the transformation of almost nothing into something extraordinary through patient, intelligent work.'
    }
  ],

  nutritionFacts: {
    servingSize: '1 tablespoon (approximately 15g)',
    calories: 45,
    totalFat: '1.5g',
    saturatedFat: '0.2g',
    cholesterol: '0mg',
    sodium: '920mg',
    totalCarbohydrate: '5g',
    dietaryFiber: '1g',
    totalSugars: '2g',
    protein: '3g',
    vitaminD: '0mcg',
    calcium: '20mg',
    iron: '1.2mg',
    potassium: '95mg'
  },

  relatedRecipes: [
    {
      title: 'Nhút Thanh Chương',
      slug: 'nhut-thanh-chuong',
      image: '/images/recipes/nhut-thanh-chuong.jpg',
      description: 'Fermented jackfruit — Nghệ An\'s other great fermentation'
    },
    {
      title: 'Cháo Lươn Nghệ An',
      slug: 'chao-luon-nghe-an',
      image: '/images/recipes/chao-luon-nghe-an.jpg',
      description: 'Eel porridge — tương as dipping companion'
    },
    {
      title: 'Bánh Mướt',
      slug: 'banh-muot',
      image: '/images/recipes/banh-muot.jpg',
      description: 'Steamed rice rolls — neutral canvas for tương sauce'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Tương Nam Đàn — Fermented Soybean & Rice Paste',
    description: 'Dual-substrate solid-state fermentation via Aspergillus oryzae koji enzyme factory on glutinous rice, soybean glycinin/conglycinin denaturation for protease access, 1:1 soy:rice Nam Đàn sweet-savory balance, solar thermal cycling multi-enzyme optimization pulsed bioreactor, glutaminase pH 5-6 umami conversion, Maillard melanoidin color-age logarithmic correlation, and daily oxygen pulse engineering.',
    image: '/images/recipes/tuong-nam-dan.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT2H',
    cookTime: 'P180D',
    totalTime: 'P180D',
    recipeYield: '20 servings',
    recipeCategory: 'Appetizer',
    recipeCuisine: 'Vietnamese',
    keywords: 'tương nam đàn, vietnamese soybean paste, fermented soybean, nghệ an tương, koji fermentation, aspergillus oryzae, traditional condiment',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '45 calories',
      fatContent: '1.5g',
      proteinContent: '3g',
      carbohydrateContent: '5g'
    },
    recipeIngredient: [
      '500g soybeans (boiled, crushed)',
      '500g glutinous rice (koji-inoculated)',
      '150g sea salt (10-12% w/w)',
      'Koji starter (Aspergillus oryzae)',
      '1L boiled cooled water'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Cultivate koji on glutinous rice for 48-72 hours' },
      { '@type': 'HowToStep', text: 'Soak, boil, and coarsely crush soybeans' },
      { '@type': 'HowToStep', text: 'Combine soy + koji rice at 1:1 ratio with salt brine' },
      { '@type': 'HowToStep', text: 'Solar-ferment with daily stirring for 3-6 months' },
      { '@type': 'HowToStep', text: 'Assess maturity by color, aroma, and bitterness absence' },
      { '@type': 'HowToStep', text: 'Serve as dipping sauce, cooking sauce, or straight condiment' }
    ]
  }
};

export default function TuongNamDanPage() {
  return <RecipeLayout recipe={recipeData} />;
}
