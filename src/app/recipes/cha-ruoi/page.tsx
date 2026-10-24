'use client';

import RecipeLayout from '../_components/RecipeLayout';

const recipeData = {
  title: 'Chả Rươi',
  subtitle: 'Sandworm Omelette — The Omega-3 Phospholipid Emulsion Cake',
  heroImage: '/images/recipes/cha-ruoi.jpg',
  region: 'Central' as const,
  difficulty: 'Medium',
  prepTime: '20 min',
  cookTime: '25 min',
  totalTime: '45 min',
  servings: 4,
  rating: 4.8,
  reviewCount: 189,
  calories: 280,
  tags: ['Nghệ An', 'Seasonal', 'Seafood', 'Pan-Fried', 'Central', 'Autumn'],

  introduction: {
    paragraphs: [
      "Chả rươi is constructed from one of the most BIOCHEMICALLY EXTRAORDINARY ingredients in Vietnamese cuisine: rươi (Tylorrhynchus heterochaetus), a marine polychaete worm that swarms in coastal estuaries during a 2-3 week window in autumn (lunar months 9-10, corresponding to October-November). The worm's body is a LIVING LIPID CAPSULE — during its reproductive swarming phase (called epitoky), the worm's entire body cavity fills with GAMETE-LADEN COELOMIC FLUID that is 15-25% lipid by weight, predominantly PHOSPHOLIPIDS (phosphatidylcholine 40-50%, phosphatidylethanolamine 25-30%) loaded with OMEGA-3 POLYUNSATURATED FATTY ACIDS (EPA 20:5n-3 at 12-18% and DHA 22:6n-3 at 8-15% of total fatty acids). This phospholipid concentration is 5-10× higher than in fish flesh and comparable to krill oil — but unlike krill oil, which requires industrial extraction, rươi delivers its phospholipid payload IN WHOLE-FOOD FORM, with the lipids already organized in biological membranes that are immediately bioavailable.",
      "The PHOSPHOLIPID COMPOSITION of rươi is what makes chả rươi self-emulsifying. Traditional omelettes and fritters rely on ADDED EGGS for emulsification — the lecithin (phosphatidylcholine) in egg yolk stabilizes the oil-water interface in the batter. Rươi contains its OWN LECITHIN at concentrations (2-4% of total weight) comparable to egg yolk (3-4%), making it a SELF-EMULSIFYING PROTEIN-LIPID SYSTEM. When rươi is mixed into a batter, the phospholipids spontaneously migrate to the oil-water interfaces created during mixing, forming LAMELLAR BILAYER STRUCTURES (identical to cell membranes) that stabilize the emulsion without any additional emulsifier. The egg that IS added to chả rươi batter is primarily for its PROTEIN COAGULATION properties (ovalbumin denatures at 80°C, forming the solid matrix that holds the cake together) rather than for emulsification — the rươi has already handled that.",
      "The SEASONAL CONSTRAINT is absolute and non-negotiable: rươi swarm ONLY during specific lunar tidal cycles in autumn, when a combination of LUNAR GRAVITATIONAL PULL (spring tides during full and new moon), WATER TEMPERATURE (dropping below 25°C triggers the epitokal transformation), and PHOTOPERIOD (shortening day length activates hormonal cascades in the supraoesophageal ganglion) simultaneously trigger the mass reproductive swarming. The worms detach from their burrows in the estuarine mud, swim to the surface, and release their gametes — and this is the ONLY window for harvest. The entire annual supply of rươi is collected in these 2-3 weeks, and fresh rươi must be used within 24-48 hours of harvest (the phospholipids oxidize rapidly after death, producing fishy off-flavors from EPA/DHA peroxidation). This temporal constraint makes chả rươi one of Vietnam's most SEASONALLY EXCLUSIVE dishes — it exists for approximately 15-20 days per year, and the rest of the year it exists only in memory."
    ]
  },

  ingredients: [
    {
      group: 'Rươi Mixture',
      items: [
        { name: 'Fresh rươi (sandworms)', amount: '300g', note: 'Cleaned — endogenous phospholipid emulsifier' },
        { name: 'Eggs', amount: '3', note: 'Ovalbumin coagulation matrix — structural protein' },
        { name: 'Mandarin peel (vỏ quýt)', amount: '1 tbsp, minced', note: 'Limonene + polymethoxyflavones — signature aromatic' },
        { name: 'Dill (thì là)', amount: '1 large bunch', note: 'Carvone + α-phellandrene — terpenoid synergy' },
        { name: 'Scallions', amount: '3 stalks, chopped' },
        { name: 'Black pepper', amount: '1 tsp, freshly ground' },
        { name: 'Fish sauce', amount: '1 tbsp' },
      ]
    },
    {
      group: 'Optional Additions',
      items: [
        { name: 'Ground pork', amount: '100g', note: 'Optional — additional myosin protein network' },
        { name: 'Bean sprouts', amount: '50g', note: 'Optional — moisture + crunch contrast' },
      ]
    },
    {
      group: 'Cooking & Serving',
      items: [
        { name: 'Cooking oil', amount: '3 tbsp', note: 'For pan-frying — Maillard surface crust' },
        { name: 'Nước chấm', amount: 'For dipping' },
        { name: 'Rice vermicelli or steamed rice', amount: 'For serving' },
        { name: 'Fresh herbs (perilla, mint)', amount: 'For serving' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Rươi Cleaning — Preserving the Phospholipid Payload',
      details: 'Rinse rươi gently in LIGHTLY SALTED WATER (1-2% NaCl) — the isotonic solution prevents osmotic lysis of the worm\'s body wall cells, which would release the coelomic fluid prematurely (in fresh water, the hypo-osmotic stress causes the cells to swell and burst, releasing the phospholipid-rich fluid into the wash water and losing both flavor and emulsifying capacity). Pick through to remove any debris, mud, or non-rươi organisms. Drain thoroughly but do NOT squeeze or press — mechanical pressure ruptures the body wall and expresses the coelomic fluid. The goal is to deliver the rươi to the mixing bowl with their PHOSPHOLIPID CARGO INTACT inside the body cavity, where it will be released during mixing and cooking at the right moment.',
      time: '10 min',
      tip: 'FRESH rươi should be TRANSLUCENT with a reddish-brown color (the hemoglobin in their blood gives a warm tint) and have a clean, briny smell like fresh seaweed. STALE rươi (>48 hours post-harvest) become OPAQUE, develop a strong fishy odor (trimethylamine from bacterial decomposition of trimethylamine-N-oxide), and feel mushy (the autolytic enzymes — cathepsins B and D — have begun breaking down the muscle proteins). The color change from translucent to opaque indicates that the phospholipid membranes have undergone LIPID PEROXIDATION: the EPA/DHA double bonds (5-6 per molecule) react with atmospheric oxygen in a radical chain reaction, generating hydroperoxides that scatter light differently. Do NOT use rươi that have turned opaque — the oxidized phospholipids produce bitter, fishy off-flavors that cannot be masked.'
    },
    {
      step: 2,
      title: 'Batter Assembly — Phospholipid Emulsion Formation',
      details: 'In a large bowl, roughly chop or break apart the rươi — this RUPTURES the body wall and releases the coelomic fluid containing the phospholipids, proteins, and gametes. The released phospholipids immediately begin organizing at any air-water and oil-water interfaces in the mixture, forming stabilizing monolayers. Add eggs and beat lightly — the egg proteins (ovalbumin, ovotransferrin, lysozyme) dissolve into the aqueous phase, while the egg yolk phospholipids supplement the rươi\'s own phospholipids at the interfaces. Add minced mandarin peel, chopped dill, scallions, fish sauce, and black pepper. If using ground pork, add it now. The mixture should be HETEROGENEOUS — visible chunks of rươi, herb pieces, and optional pork in a loose, egg-bound slurry. Do NOT over-mix to a smooth paste (this would shear the phospholipid bilayers into micelles, reducing their emulsion-stabilizing capacity from bilayer geometry to spherical — bilayers cover 3-5× more interfacial area per molecule than micelles).',
      time: '5 min',
      tip: 'MANDARIN PEEL (vỏ quýt) is the DEFINING aromatic of chả rươi — without it, the dish loses its identity. The peel contains LIMONENE (60-80% of the essential oil, a monocyclic monoterpene with a bright citrus note) and POLYMETHOXYFLAVONES (nobiletin, tangeretin — compounds unique to Citrus reticulata that contribute a warm, slightly bitter, complex undertone). The limonene serves a dual function: as an aromatic, it masks any residual marine odor from the rươi, and as a LIPOPHILIC SOLVENT, it dissolves into the phospholipid bilayers and disrupts their packing, increasing the membrane\'s FLUIDITY and making the phospholipids more available for emulsification. This is why mandarin peel works better than lemon or lime peel (which contain limonene but lack the polymethoxyflavones and have different terpene ratios).'
    },
    {
      step: 3,
      title: 'Pan-Frying — Maillard Crust & Protein Coagulation',
      details: 'Heat oil in a pan over MEDIUM-HIGH heat (170-180°C oil temperature). Pour the batter mixture in a layer approximately 1.5-2cm thick. The cooking proceeds in TWO PHASES: (Phase 1) BOTTOM CRUST FORMATION — the bottom 2-3mm reaches 150-170°C, triggering Maillard reactions between the rươi\'s free amino acids (glutamic acid, alanine, glycine from the coelomic fluid) and reducing sugars (glucose, ribose from cellular metabolites). This produces the golden-brown crust with its characteristic SAVORY-SWEET aroma (pyrazines, furanones, Strecker aldehydes). Simultaneously, the egg proteins begin coagulating from the bottom up (ovalbumin at 80°C, ovotransferrin at 62°C), creating a solid matrix that entraps the rươi pieces. (Phase 2) After 5-6 minutes, when the bottom is firmly set and golden, FLIP the cake (use a plate-flip technique: slide onto plate, invert pan over plate, flip together). Cook the second side for 4-5 minutes. The internal temperature should reach 75-80°C throughout — sufficient for complete ovalbumin coagulation and pathogen elimination.',
      time: '12 min',
      tip: 'The 1.5-2cm thickness is optimized for SIMULTANEOUS crust formation and core cooking. Thinner (<1cm): the cake overcooks before adequate crust develops — the ratio of surface area to volume is too high, and the interior dries out before the Maillard reaction generates sufficient brown color and flavor compounds on the surface. Thicker (>3cm): the core remains undercooked when the crust is done — heat penetration by conduction through the protein-lipid matrix (thermal diffusivity α ≈ 1.2 × 10⁻⁷ m²/s) is too slow, requiring 15+ minutes for the center to reach 75°C, by which time the crust has progressed from golden-brown (desirable) to dark brown-black (acrylamide formation, bitter flavors). At 1.5-2cm, the core reaches 75°C in 10-12 minutes total — exactly the time needed for optimal crust development on both sides.'
    },
    {
      step: 4,
      title: 'Resting & Cutting — Gel Network Equilibration',
      details: 'Remove from pan and let rest for 3-5 minutes before cutting into wedges or diamond shapes. The RESTING PERIOD is critical: during cooking, the protein gel network (egg ovalbumin + rươi muscle proteins) is under THERMAL STRESS — the rapid temperature increase causes differential expansion between the protein matrix and the lipid inclusions, creating internal pressure. Cutting immediately releases this pressure as a burst of steam and liquid, causing the cake to crumble. During resting, the temperature equilibrates (surface cools from 170°C to ~80°C, core remains at ~75°C), the protein gel RELAXES (viscoelastic stress relaxation with a time constant of 1-2 minutes for egg protein gels), and the phospholipid emulsion STABILIZES (the phospholipid bilayers, disrupted by the high cooking temperature, reform as the temperature drops below the lipid phase transition temperature of ~40°C). After resting, the cake cuts cleanly with defined edges.',
      time: '5 min',
      tip: 'Serve on a bed of FRESH HERBS (perilla, mint, Vietnamese coriander) with rice vermicelli and nước chấm. The fresh herbs provide VOLATILE TERPENE CONTRAST: perilla\'s perillaldehyde (minty-herbal), mint\'s menthol (cooling), and Vietnamese coriander\'s dodecanal (cilantro-soapy) each activate different olfactory receptor populations, creating a multi-dimensional aromatic experience that prevents sensory adaptation to any single scent. The nước chấm provides ACID CONTRAST — the lime juice (pH 2.5) cuts through the phospholipid richness by emulsion-breaking at the low pH (phospholipid head groups become protonated below pH 3, losing their charge and collapsing the bilayer stabilization). This is why chả rươi NEEDS its dipping sauce — the acid literally transforms the mouthfeel from rich-heavy to bright-clean with each dip.'
    }
  ],

  proTips: [
    {
      title: 'Epitoky — The Biological Clock Behind Rươi Season',
      description: 'The rươi\'s swarming behavior is triggered by EPITOKY — a radical metamorphosis in which the posterior segments of the worm transform from sedentary burrowing morphology to free-swimming reproductive morphology. The segments develop paddle-like parapodia (swimming appendages), the gut degenerates (the worm stops eating — its only purpose is reproduction), and the coelom fills with gametes (eggs or sperm) suspended in the phospholipid-rich coelomic fluid. This transformation is controlled by a HORMONAL CASCADE: the supraoesophageal ganglion (the worm\'s "brain") produces a neuropeptide hormone that INHIBITS epitoky during most of the year. As day length shortens below a critical threshold (~11.5 hours) and water temperature drops below 25°C, the ganglion reduces hormone production, releasing the inhibition and triggering the transformation over 7-10 days. The actual swarming is synchronized to the LUNAR CYCLE — the spring tides during new and full moons create the strongest tidal currents, which the worms use for gamete dispersal. This triple-locked timing system (photoperiod × temperature × lunar phase) is why rươi season is so precisely predictable — local fishermen can forecast the swarming dates months in advance.'
    },
    {
      title: 'Phospholipid vs Triglyceride — Why Rươi Fat Is Different',
      description: 'Most dietary fats are TRIGLYCERIDES — three fatty acid chains esterified to a glycerol backbone. The body must digest these in the duodenum using pancreatic lipase + bile salts before absorption. Rươi fat is predominantly PHOSPHOLIPIDS — two fatty acid chains + a phosphate-linked head group (choline, ethanolamine) on glycerol. Phospholipids are absorbed by a DIFFERENT PATHWAY: they are taken up directly by enterocytes without requiring bile salt emulsification (the phospholipid\'s amphiphilic structure means it self-emulsifies), and the omega-3 fatty acids (EPA/DHA) on the sn-2 position are preserved through absorption (triglyceride digestion cleaves and re-esterifies the fatty acids, with some loss). Human studies show that phospholipid-bound omega-3s have 2-3× higher BIOAVAILABILITY than triglyceride-bound omega-3s — the same EPA/DHA dose from rươi reaches 2-3× higher blood plasma levels than from fish oil capsules. A single serving of chả rươi (75g rươi) delivers approximately 1.5-2.5g of EPA+DHA in phospholipid form — equivalent to 4-8 standard fish oil capsules in bioavailable omega-3 delivery.'
    },
    {
      title: 'Dill — The Obligate Aromatic Partner',
      description: 'Dill (Anethum graveolens) is the ONLY herb that is universally agreed upon as essential in chả rươi — other herbs vary by region, but dill is non-negotiable. The reason is TERPENOID COMPLEMENTARITY: dill\'s primary volatile, CARVONE (40-60% of essential oil), is a monoterpene ketone that specifically masks the DIMETHYL SULFIDE (DMS) and TRIMETHYLAMINE (TMA) odors produced by marine invertebrate tissue. Carvone achieves this by COMPETITIVE BINDING at olfactory receptor OR1A1 — carvone and TMA compete for the same receptor, and carvone\'s binding affinity (Ki ≈ 30 μM) is 10× higher than TMA\'s (Ki ≈ 300 μM), so even small amounts of carvone effectively silence the TMA signal. Dill\'s secondary volatile, α-PHELLANDRENE (15-25%), provides a warm, slightly peppery note that complements the mandarin peel\'s limonene. Together, the dill + mandarin peel aromatic system transforms rươi from "marine worm" to "savory-citrus-herbal delicacy" — a perceptual reframing achieved entirely through olfactory receptor competition.'
    },
    {
      title: 'Freezing Rươi — Preserving the 15-Day Window',
      description: 'Because fresh rươi season is only 15-20 days, FREEZING is the only way to eat chả rươi year-round. The freeze-thaw cycle affects rươi quality through three mechanisms: (1) ICE CRYSTAL DAMAGE — slow freezing (home freezer, -18°C) creates large ice crystals (50-200μm) that puncture cell membranes and body wall tissue, releasing the coelomic fluid upon thawing (drip loss 15-25%). Flash freezing (-40°C or liquid nitrogen) creates small crystals (<20μm) that cause minimal structural damage (drip loss 5-10%). (2) PHOSPHOLIPID OXIDATION — even at -18°C, the EPA/DHA-rich phospholipids undergo slow oxidation (the rate is reduced 100× compared to room temperature, but not zero — half-life of EPA peroxidation is ~6 months at -18°C). Vacuum packing reduces available oxygen and extends this to 12+ months. (3) PROTEIN DENATURATION — the freeze-concentration of solutes (as water freezes, the remaining unfrozen liquid becomes increasingly concentrated in salts and organic acids) denatures some of the rươi\'s structural proteins, softening the texture. The practical recommendation: flash-freeze in vacuum-sealed portions within 6 hours of harvest, use within 6 months, and thaw in the refrigerator (4°C, 8-12 hours) — never at room temperature (promotes surface bacterial growth while the core is still frozen).'
    }
  ],

  nutritionFacts: {
    servingSize: '1 wedge (approximately 120g)',
    calories: 280,
    totalFat: '18g',
    saturatedFat: '4g',
    cholesterol: '210mg',
    sodium: '580mg',
    totalCarbohydrate: '5g',
    dietaryFiber: '1g',
    totalSugars: '1g',
    protein: '22g',
    vitaminD: '2mcg',
    calcium: '60mg',
    iron: '4.5mg',
    potassium: '310mg'
  },

  relatedRecipes: [
    {
      title: 'Cháo Lươn Nghệ An',
      slug: 'chao-luon-nghe-an',
      image: '/images/recipes/chao-luon-nghe-an.jpg',
      description: 'Eel porridge — another seasonal delicacy'
    },
    {
      title: 'Lươn Xào Lăn',
      slug: 'luon-xao-lan',
      image: '/images/recipes/luon-xao-lan.jpg',
      description: 'Eel curry — Nghệ An protein pairing'
    },
    {
      title: 'Cháo Canh',
      slug: 'chao-canh',
      image: '/images/recipes/chao-canh.jpg',
      description: 'Rice flour soup — quick comfort companion'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Chả Rươi — Sandworm Omelette',
    description: 'Omega-3 phospholipid self-emulsifying cake from epitokal polychaete Tylorrhynchus heterochaetus, phosphatidylcholine 40-50% + EPA 12-18% + DHA 8-15% with 2-3× bioavailability vs triglyceride fish oil, carvone competitive OR1A1 binding 10× TMA masking, mandarin peel limonene + polymethoxyflavone dual aromatic, ovalbumin 80°C coagulation matrix, and lunar-photoperiod-temperature triple-locked 15-day seasonal harvest window.',
    image: '/images/recipes/cha-ruoi.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-20',
    prepTime: 'PT20M',
    cookTime: 'PT25M',
    totalTime: 'PT45M',
    recipeYield: '4 servings',
    recipeCategory: 'Main Course',
    recipeCuisine: 'Vietnamese',
    keywords: 'chả rươi, sandworm omelette, vietnamese seasonal food, ragworm cake, nghệ an rươi',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '280 calories',
      fatContent: '18g',
      proteinContent: '22g',
      carbohydrateContent: '5g'
    },
    recipeIngredient: [
      '300g fresh rươi (sandworms)',
      '3 eggs',
      'Mandarin peel, dill, scallions',
      'Fish sauce, black pepper',
      'Fresh herbs, nước chấm for serving'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Clean rươi in isotonic salt water preserving phospholipid payload' },
      { '@type': 'HowToStep', text: 'Mix with eggs, mandarin peel, dill — phospholipid self-emulsion forms' },
      { '@type': 'HowToStep', text: 'Pan-fry 1.5-2cm thick at 170-180°C, flip once, core to 75°C' },
      { '@type': 'HowToStep', text: 'Rest 3-5 min for gel relaxation, cut and serve with herbs and nước chấm' }
    ]
  }
};

export default function ChaRuoiPage() {
  return <RecipeLayout recipe={recipeData} />;
}
