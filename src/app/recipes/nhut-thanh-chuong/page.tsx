'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Nhút Thanh Chương',
  subtitle: 'Fermented Jackfruit Pickle — The Anaerobic Lactic Acid Biofilm Reactor',
  heroImage: '/images/recipes/nhut-thanh-chuong.jpg',
  region: 'Central' as const,
  difficulty: 'Medium',
  prepTime: '45 min',
  cookTime: '0 min (7-14 days fermentation)',
  totalTime: '7-14 days',
  servings: 10,
  rating: 4.6,
  reviewCount: 142,
  calories: 35,
  tags: ['Nghệ An', 'Fermented', 'Pickle', 'Central', 'Traditional', 'Probiotic'],

  introduction: {
    paragraphs: [
      "Nhút is a SOLID-STATE LACTIC ACID FERMENTATION — one of the most ancient bioprocessing technologies on Earth, predating written history by millennia — applied to young jackfruit (mít non). The process is deceptively simple: shredded jackfruit is packed with salt into an earthenware jar, sealed, and left for 7-14 days. But inside that sealed jar, a MICROBIAL SUCCESSION of extraordinary complexity unfolds. In the first 24-48 hours, aerobic and facultatively anaerobic bacteria (Enterobacteriaceae, Pseudomonas) consume the residual oxygen, producing CO₂ that purges the headspace and establishing ANAEROBIC CONDITIONS. As oxygen disappears, the obligate aerobes die off, and LACTIC ACID BACTERIA (LAB) — primarily Lactobacillus plantarum, L. brevis, and Leuconostoc mesenteroides — emerge as the dominant population. These LAB ferment the jackfruit's sugars (glucose, fructose, sucrose totaling 5-10% dry weight) via the EMBDEN-MEYERHOF-PARNAS PATHWAY (homofermentative: glucose → 2 lactate + 2 ATP) and the PHOSPHOKETOLASE PATHWAY (heterofermentative: glucose → lactate + ethanol + CO₂ + ATP), producing lactic acid that drops the pH from ~6.5 to 3.5-4.0 within 5-7 days.",
      "The SALT CONCENTRATION (3-5% w/w NaCl) is the master variable controlling the entire fermentation. Below 2%, pathogenic bacteria (Clostridium, Salmonella) can survive and produce toxins — the fermentation is UNSAFE. Above 8%, even LAB are inhibited — the fermentation STALLS. At 3-5%, the salt creates a SELECTIVE PRESSURE: it inhibits most gram-negative pathogens (which lack the Na⁺/H⁺ antiporter systems needed for osmotic stress tolerance) while allowing gram-positive LAB (which possess multiple compatible solute transport systems — proline, glycine betaine, carnitine — for osmotic balance) to thrive. This differential salt tolerance is the SAFETY MECHANISM of all traditional vegetable fermentations worldwide — from Korean kimchi (2.5-3.5% NaCl) to German sauerkraut (2-3% NaCl) to Nghệ An nhút (3-5% NaCl).",
      "What makes nhút unique among Vietnamese fermented foods is the SUBSTRATE: young jackfruit. Jackfruit (Artocarpus heterophyllus) is a member of Moraceae (the fig family) with an unusual tissue architecture — its flesh contains LATEX VESSELS (laticifer cells) that produce a sticky, white latex composed of polyisoprene rubber particles (0.1-3μm) suspended in an aqueous serum of proteases (jacalin), chitinases, and lectins. This latex is a DEFENSE SYSTEM against herbivory — it gums up insect mouthparts and contains antimicrobial enzymes. In nhút production, the latex must be NEUTRALIZED before fermentation (it inhibits LAB as effectively as it inhibits insects). Soaking the shredded jackfruit in salted water for 2-4 hours leaches out the water-soluble latex proteins, while the polyisoprene particles coagulate and can be physically removed — a SELECTIVE EXTRACTION that removes the antimicrobial components while retaining the fermentable sugars and structural polysaccharides."
    ]
  },

  ingredients: [
    {
      group: 'Primary Fermentation',
      items: [
        { name: 'Young jackfruit (mít non)', amount: '1 kg', note: 'Unripe, firm — high cellulose, low sugar' },
        { name: 'Sea salt (muối hột)', amount: '40-50g', note: '4-5% w/w — selective LAB pressure' },
        { name: 'Sugar', amount: '1 tbsp', note: 'Fermentation kickstart — readily available glucose' },
        { name: 'Rice wash water (nước vo gạo)', amount: '500ml', note: 'Wild LAB inoculum from rice surface microbiome' },
      ]
    },
    {
      group: 'Aromatics',
      items: [
        { name: 'Galangal (riềng), sliced', amount: '50g', note: 'ACA antimicrobial — suppresses mold, not LAB' },
        { name: 'Garlic, crushed', amount: '5 cloves', note: 'Allicin selective antimicrobial' },
        { name: 'Chili, sliced', amount: '3-5', note: 'Capsaicin — anti-fungal at fermentation pH' },
      ]
    },
    {
      group: 'Serving (Nhút Xào)',
      items: [
        { name: 'Fermented nhút', amount: '300g', note: 'After 7-14 days — pH 3.5-4.0' },
        { name: 'Pork belly (sliced)', amount: '150g', note: 'Fat renders into stir-fry medium' },
        { name: 'Shrimp paste (mắm tôm)', amount: '1 tbsp', note: 'Umami amplifier — free glutamate 5-10g/L' },
        { name: 'Garlic, chili', amount: 'To taste' },
        { name: 'Cooking oil', amount: '2 tbsp' },
        { name: 'Sesame seeds', amount: '1 tbsp', note: 'Toasted — lipid-phase aromatic carrier' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Jackfruit Preparation — Latex Neutralization & Structural Shredding',
      details: 'Cut young jackfruit into quarters, remove the core. Shred the flesh into thin strips (2-3mm × 5-6cm) using a knife or mandoline. Immediately immerse in salted water (2% NaCl) for 2-4 hours. The immersion serves TWO FUNCTIONS: (1) LATEX EXTRACTION — the water-soluble latex proteins (jacalin, a 66 kDa lectin; chitinase, 30 kDa) dissolve into the soaking water via concentration gradient-driven diffusion (Fick\'s first law: J = -D × dc/dx, where J is the flux, D ≈ 10⁻⁶ cm²/s for proteins in water, dc/dx is the concentration gradient). The polyisoprene particles (hydrophobic, density 0.91 g/cm³) coagulate at the ionic strength of 2% NaCl (the Na⁺ ions screen the negative surface charges that keep the particles in colloidal suspension, triggering DLVO-type coagulation). (2) OSMOTIC DEHYDRATION — the 2% NaCl creates a 0.34 M osmotic pressure (~8.5 atm) across the jackfruit cell membranes, drawing out intracellular water and partially collapsing the cells, which creates a TEXTURE FOUNDATION — partially dehydrated cells are more resistant to further softening during fermentation.',
      time: '2-4 hrs',
      tip: 'Young jackfruit is chosen over ripe jackfruit for a COMPOSITIONAL reason: young jackfruit has HIGH CELLULOSE (8-12% dry weight) and LOW SUGAR (2-5% dry weight), while ripe jackfruit has LOW CELLULOSE (5-8%) and HIGH SUGAR (15-25%). High cellulose provides the STRUCTURAL SCAFFOLD that maintains the shredded texture throughout 14 days of fermentation — the cellulose microfibrils (crystalline β-1,4-glucan bundles, tensile strength ~1 GPa) are essentially indigestible by LAB (which lack cellulase enzymes), so they persist as a rigid framework while the softer pectin and hemicellulose matrix around them is partially hydrolyzed by bacterial pectinases. Low sugar prevents EXCESSIVE ACID PRODUCTION — with too much substrate, the LAB produce so much lactic acid that the pH drops below 3.0, which inhibits even the LAB themselves and can produce an unpleasantly sharp, vinegar-like sourness.'
    },
    {
      step: 2,
      title: 'Inoculation — Rice Wash Water as Wild LAB Starter',
      details: 'Drain the soaked jackfruit. In a clean earthenware or glass jar, layer the shredded jackfruit with salt, sugar, galangal, garlic, and chili. Pour rice wash water over the packed jackfruit until fully submerged. The RICE WASH WATER is a natural LAB INOCULUM: raw rice grains harbor a surface microbiome dominated by Lactobacillus plantarum, L. brevis, Pediococcus, and Leuconostoc (10⁴-10⁶ CFU/g). When rice is washed, these bacteria are suspended in the wash water along with surface starch (an additional FERMENTABLE SUBSTRATE — amylase-positive LAB strains can hydrolyze the starch to glucose and ferment it). The rice wash water provides both the ORGANISMS and the FOOD to jumpstart fermentation, reducing the LAG PHASE from 48-72 hours (spontaneous fermentation relying on jackfruit surface microbiome alone) to 12-24 hours.',
      time: '15 min',
      tip: 'The GALANGAL and GARLIC serve as SELECTIVE ANTIMICROBIALS — they inhibit mold and yeast without significantly affecting LAB. Galangal\'s ACA (1\'-acetoxychavicol acetate) has an MIC of 6.25 μg/mL against Aspergillus niger (the most common contaminating mold) but >100 μg/mL against L. plantarum — a 16× SELECTIVITY RATIO. Garlic\'s allicin has an MIC of 15-30 μg/mL against yeasts (Candida, Saccharomyces) but >200 μg/mL against LAB in acidic conditions (pH <5, allicin\'s thiosulfinate group is less reactive due to protonation). These aromatics are not just flavor additions — they are BIOLOGICAL CONTROL AGENTS that steer the microbial succession toward LAB dominance and away from spoilage organisms.'
    },
    {
      step: 3,
      title: 'Anaerobic Seal — Creating the Fermentation Bioreactor',
      details: 'Press the jackfruit down firmly to eliminate air pockets. Place a weight (a water-filled bag or a clean stone) on top to keep all material SUBMERGED below the liquid surface. Seal the jar with a tight-fitting lid or plastic wrap. The seal doesn\'t need to be hermetic — LAB-produced CO₂ needs to ESCAPE to prevent pressure buildup. A loosely fitting lid or a single layer of plastic wrap with a small puncture acts as a ONE-WAY VALVE: CO₂ (produced at ~0.5 mmol/g/day during active fermentation) builds up enough pressure (0.1-0.5 atm above ambient) to push through the gap, but ambient air (containing O₂) cannot flow back in because the CO₂ blanket sitting on top of the liquid is DENSER than air (CO₂ MW 44 vs air MW 29) and acts as a gas barrier.',
      time: '5 min',
      tip: 'SUBMERSION is the single most critical fermentation parameter after salt concentration. Any jackfruit piece that protrudes above the liquid surface is exposed to AIR — the liquid-air interface has a dissolved oxygen concentration of ~8 mg/L (Henry\'s law at 25°C), which supports AEROBIC MOLD GROWTH (Aspergillus, Penicillium, Rhizopus). Mold on the surface produces mycotoxins (aflatoxin, ochratoxin) that diffuse downward into the entire jar. The weight ensures 100% submersion by creating a HYDROSTATIC SEAL — the liquid layer above the topmost jackfruit piece prevents oxygen diffusion to the fermentation zone (oxygen diffusivity in water is 2.1 × 10⁻⁵ cm²/s — 10,000× slower than in air, so even a 1cm liquid layer provides effective oxygen exclusion for the time scales involved).'
    },
    {
      step: 4,
      title: 'Fermentation — 7-14 Day Microbial Succession',
      details: 'Store the sealed jar at room temperature (25-30°C) for 7-14 days. Do NOT open the jar during the first 5 days — each opening introduces O₂ and disrupts the anaerobic environment. After day 5, you may check: the nhút should smell PLEASANTLY SOUR (lactic acid), the liquid should be slightly cloudy (bacterial cells, 10⁸-10⁹ CFU/mL at peak fermentation), and the jackfruit strips should be TRANSLUCENT-GOLDEN (the pectin matrix has partially hydrolyzed, changing the light-scattering properties from opaque-white to translucent). Taste a small piece — it should be CRUNCHY-SOUR with no off-flavors (putrid, sulfurous, or alcoholic off-flavors indicate contamination by Clostridium, Desulfovibrio, or wild yeast). The nhút is ready when the pH reaches 3.5-4.0 (test with pH strips or taste — the sourness should be CLEAN and SHARP like yogurt, not harsh like vinegar).',
      time: '7-14 days',
      tip: 'TEMPERATURE controls the fermentation KINETICS and the FLAVOR PROFILE through its effect on the LAB species balance. At 20-25°C, Leuconostoc mesenteroides (heterofermentative) dominates the early phase, producing LACTIC ACID + CO₂ + ETHANOL + DIACETYL (butter flavor) + ACETALDEHYDE (green apple). This mixed-product fermentation creates a COMPLEX, AROMATIC flavor profile. At 30-35°C, Lactobacillus plantarum (homofermentative) dominates immediately, producing ONLY LACTIC ACID — cleaner, sharper, less complex. The traditional Nghệ An kitchen temperature (25-28°C year-round due to the tropical-continental climate) naturally produces a SEQUENTIAL SUCCESSION: Leuconostoc first (complex aromatics), then Lactobacillus (acid production) — this two-phase fermentation is why traditional nhút has a more complex flavor than industrially produced versions fermented at controlled 30°C.'
    },
    {
      step: 5,
      title: 'Serving — Nhút Xào (Stir-Fried Fermented Jackfruit)',
      details: 'The most common serving method: heat oil in a wok or pan over high heat. Sear pork belly slices until golden and fat is rendered (2-3 min). Add garlic and chili, stir-fry 30 seconds. Add drained nhút and stir-fry for 3-5 minutes over high heat. The high heat DRIVES OFF the volatile organic acids (acetic acid bp 118°C, propionic acid bp 141°C) while RETAINING the non-volatile lactic acid (bp 122°C at 12 mmHg — effectively non-volatile at atmospheric pressure). This selective evaporation ROUNDS the sour flavor: the sharp, pungent volatile acids disappear, leaving only the smooth, yogurt-like sourness of lactic acid. Add mắm tôm shrimp paste in the last 30 seconds — its free glutamate (5-10 g/L) and nucleotides (IMP, GMP) provide UMAMI SYNERGY with the nhút\'s own fermentation-derived glutamate. Finish with toasted sesame seeds.',
      time: '8 min',
      tip: 'The PORK BELLY FAT serves a specific sensory function beyond flavor: lactic acid is a WEAK ACID (pKa 3.86) that exists in EQUILIBRIUM between its undissociated form (HL, sour-tasting) and its dissociated form (L⁻ + H⁺, less sour). Fat COATS THE TONGUE, creating a hydrophobic barrier that partially blocks the undissociated lactic acid molecules from reaching the sour taste receptors (PKD2L1 channels on Type III taste cells). The perceived sourness drops by approximately 30-40% in the presence of fat — this is the ACID-FAT BALANCE principle that makes rich-sour combinations (yogurt, sour cream, nhút xào with pork belly) more palatable than lean-sour ones. The pork belly isn\'t just a protein addition — it\'s a SOUR-PERCEPTION MODULATOR.'
    },
    {
      step: 6,
      title: 'Storage — Long-Term Preservation Under Acid Barrier',
      details: 'Properly fermented nhút (pH <4.0) can be stored in the refrigerator for 2-3 months or at room temperature for 3-4 weeks. The LOW pH is the preservation mechanism: at pH 3.5-4.0, the concentration of undissociated lactic acid ([HL] = [total acid] × 1/(1 + 10^(pH-pKa))) ranges from 40-75% of total acid. The UNDISSOCIATED form is the antimicrobial species — it is uncharged and lipophilic, so it can cross bacterial cell membranes by passive diffusion. Once inside the cell (pH ~7.0), it dissociates into H⁺ and L⁻, acidifying the cytoplasm and disrupting proton motive force. At pH 3.5, the undissociated lactic acid concentration is sufficient to inhibit virtually ALL food-borne pathogens including E. coli (MIC 0.5% undissociated acid), Salmonella (MIC 0.3%), and Listeria (MIC 0.2%).',
      time: 'N/A',
      tip: 'Nhút that develops a WHITE FILM on the surface during storage is experiencing KAHM YEAST growth (Pichia, Debaryomyces) — aerobic yeasts that metabolize lactic acid as a carbon source, RAISING the pH and potentially enabling pathogen growth. The kahm yeast itself is non-toxic, but its pH-raising activity is DANGEROUS because it removes the acid barrier that prevents pathogen growth. If a white film appears: remove it completely, add a thin layer of salt on the surface (the high local NaCl concentration inhibits the yeast), and re-seal. If the nhút smells off (putrid, sulfurous) after kahm yeast contamination, DISCARD IT — the pH may have risen enough for Clostridium to germinate.'
    }
  ],

  proTips: [
    {
      title: 'Lactic Acid Bacteria — The Gram-Positive Advantage',
      description: 'LAB dominate vegetable fermentations because of a STRUCTURAL ADVANTAGE: their gram-positive cell wall (20-80nm thick peptidoglycan layer, cross-linked by D-amino acid bridges) provides superior OSMOTIC STRESS RESISTANCE compared to gram-negative pathogens (2-7nm peptidoglycan). The thick peptidoglycan layer acts as a MECHANICAL EXOSKELETON that resists the turgor pressure changes caused by the 3-5% NaCl in the fermentation brine. Additionally, LAB possess COMPATIBLE SOLUTE TRANSPORTERS (ProU for glycine betaine, OpuA for proline) that import osmolytes to balance the external osmotic pressure — a sophisticated OSMOREGULATORY SYSTEM that most gram-negative food pathogens lack. The evolutionary reason: LAB naturally inhabit HIGH-OSMOLARITY environments (plant surfaces with periodic desiccation, animal digestive tracts with bile salts), so they evolved these systems as a survival toolkit that humans inadvertently exploit in fermentation.'
    },
    {
      title: 'Jackfruit Cellulose — The Indigestible Scaffold',
      description: 'The CRUNCH of properly fermented nhút — maintained through 14 days of microbial attack — is a testament to cellulose\'s extraordinary biochemical resistance. Cellulose is a LINEAR β-1,4-glucan polymer where adjacent glucose units are rotated 180° relative to each other, allowing the chains to form FLAT RIBBONS that hydrogen-bond into parallel sheets, which stack into CRYSTALLINE MICROFIBRILS with a crystallinity index of 60-70%. This crystalline structure is resistant to microbial attack because: (1) the β-glycosidic bond is in an EQUATORIAL position, sterically inaccessible to most enzymes; (2) the inter-chain hydrogen bonds create a WATER-EXCLUSION ZONE that prevents enzyme penetration; (3) only organisms with a complete CELLULASE SYSTEM (endoglucanase + exoglucanase + β-glucosidase, working synergistically) can break crystalline cellulose — and LAB lack all three. The pectin and hemicellulose matrix AROUND the cellulose fibrils IS digestible by LAB pectinases, which is why the texture softens slightly (pectin loss) without losing its crunch (cellulose retention).'
    },
    {
      title: 'Rice Wash Water Microbiome — The Ancient Starter Culture',
      description: 'Using rice wash water as a fermentation starter is an EMPIRICAL BIOTECHNOLOGY predating germ theory by thousands of years. The surface of unhusked rice grains harbors a remarkably consistent LAB-dominated microbiome (10⁴-10⁶ CFU/g) because the rice grain\'s starchy surface and slightly acidic environment (pH 5.5-6.5 from silicic acid) SELECTIVELY FAVOR acid-tolerant, amylolytic bacteria. The dominant species — L. plantarum (40-60% of total LAB), L. brevis (15-25%), Leuconostoc mesenteroides (10-20%) — are the SAME species that dominate successful vegetable fermentations. By using rice wash water, the traditional fermenter is effectively performing a TARGETED INOCULATION with a pre-selected microbial consortium, achieving in 12-24 hours what spontaneous fermentation (relying on the much smaller and less LAB-dominated jackfruit surface microbiome) takes 48-72 hours to accomplish. The rice wash is a BIOLOGICAL SHORTCUT — an acceleration of the inevitable microbial succession.'
    },
    {
      title: 'Thanh Chương Terroir — Geographic Specificity of Fermentation',
      description: 'Nhút is named after THANH CHƯƠNG, a district in Nghệ An province, because the local conditions produce a recognizably DISTINCT fermentation product. The terroir effect operates through THREE CHANNELS: (1) WATER — Thanh Chương\'s water source (Lam River watershed) has a specific mineral profile (moderate Ca²⁺, low Fe²⁺) that affects LAB metabolism (Ca²⁺ activates lactate dehydrogenase, the key enzyme in lactic acid production, while Fe²⁺ promotes competing heterofermentative pathways); (2) CLIMATE — the Nghệ An microclimate (25-28°C average, 80-85% relative humidity) naturally favors the Leuconostoc→Lactobacillus succession that produces the complex flavor profile; (3) MICROBIAL ECOLOGY — each kitchen in Thanh Chương harbors a HOUSE MICROBIOME (LAB strains adapted to that specific environment over generations of fermentation) that acts as an invisible inoculum. The earthenware jars themselves develop a BIOFILM on their inner surfaces — a resident community of LAB embedded in an extracellular polysaccharide matrix — that re-inoculates each new batch. This is why nhút made in Thanh Chương tastes different from nhút made with identical ingredients in Sài Gòn.'
    },
    {
      title: 'Mắm Tôm Synergy — Umami Multiplication at the Molecular Level',
      description: 'The combination of nhút + mắm tôm in nhút xào exploits a UMAMI SYNERGY EFFECT. Fermented nhút contains free GLUTAMIC ACID (produced by LAB proteases breaking down jackfruit proteins, reaching 0.5-1.0 g/L in the brine). Mắm tôm shrimp paste contains both free glutamic acid (5-10 g/L) AND RIBONUCLEOTIDES (inosine-5\'-monophosphate IMP, guanosine-5\'-monophosphate GMP, produced by nucleotidases during shrimp autolysis). Glutamate alone activates the T1R1+T1R3 umami receptor with a binding constant Kd ≈ 2 mM. When IMP or GMP is co-present, they bind to a ALLOSTERIC SITE on the T1R1 subunit (the Venus flytrap domain), inducing a conformational change that INCREASES glutamate\'s binding affinity by 8-30×. The result is a MULTIPLICATIVE rather than additive umami perception: 1 + 1 = 8-30 in terms of perceived intensity. This is why the nhút + mắm tôm combination produces an umami impact far exceeding what either ingredient could achieve alone.'
    }
  ],

  nutritionFacts: {
    servingSize: '1 serving nhút xào (approximately 150g)',
    calories: 35,
    totalFat: '0.5g',
    saturatedFat: '0g',
    cholesterol: '0mg',
    sodium: '680mg',
    totalCarbohydrate: '7g',
    dietaryFiber: '3g',
    totalSugars: '2g',
    protein: '1g',
    vitaminD: '0mcg',
    calcium: '30mg',
    iron: '0.8mg',
    potassium: '120mg'
  },

  relatedRecipes: [
    {
      title: 'Tương Nam Đàn',
      slug: 'tuong-nam-dan',
      image: '/images/recipes/tuong-nam-dan.jpg',
      description: 'Fermented soybean paste — another Nghệ An fermentation'
    },
    {
      title: 'Cháo Lươn Nghệ An',
      slug: 'chao-luon-nghe-an',
      image: '/images/recipes/chao-luon-nghe-an.jpg',
      description: 'Eel porridge — pairs with nhút as side dish'
    },
    {
      title: 'Bánh Mướt',
      slug: 'banh-muot',
      image: '/images/recipes/banh-muot.jpg',
      description: 'Steamed rice rolls — Nghệ An breakfast companion'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Nhút Thanh Chương — Fermented Jackfruit Pickle',
    description: 'Anaerobic lactic acid fermentation of young jackfruit via Embden-Meyerhof-Parnas homofermentative and phosphoketolase heterofermentative pathways, 3-5% NaCl gram-positive selective pressure, latex polyisoprene DLVO coagulation neutralization, rice wash water LAB inoculum shortcut, Leuconostoc→Lactobacillus two-phase succession, cellulose crystalline scaffold persistence, and Thanh Chương terroir house-microbiome biofilm.',
    image: '/images/recipes/nhut-thanh-chuong.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT45M',
    cookTime: 'P14D',
    totalTime: 'P14D',
    recipeYield: '10 servings',
    recipeCategory: 'Appetizer',
    recipeCuisine: 'Vietnamese',
    keywords: 'nhút thanh chương, fermented jackfruit, vietnamese pickle, nghệ an fermentation, lactic acid fermentation, traditional vietnamese food',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '35 calories',
      fatContent: '0.5g',
      proteinContent: '1g',
      carbohydrateContent: '7g'
    },
    recipeIngredient: [
      '1kg young jackfruit, shredded',
      '40-50g sea salt (4-5% w/w)',
      '500ml rice wash water (LAB inoculum)',
      'Galangal, garlic, chili (selective antimicrobials)',
      'For serving: pork belly, mắm tôm, sesame seeds'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Shred jackfruit and neutralize latex by salted water soak' },
      { '@type': 'HowToStep', text: 'Pack with salt, aromatics, and rice wash water inoculum' },
      { '@type': 'HowToStep', text: 'Seal with CO₂ one-way valve and weight for submersion' },
      { '@type': 'HowToStep', text: 'Ferment 7-14 days at 25-28°C until pH 3.5-4.0' },
      { '@type': 'HowToStep', text: 'Stir-fry with pork belly and mắm tôm for serving' },
      { '@type': 'HowToStep', text: 'Store under acid barrier at pH <4.0' }
    ]
  }
};

export default function NhutThanhChuongPage() {
  return <RecipeLayout recipe={recipeData} />;
}
