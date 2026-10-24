'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Kẹo Cu Đơ',
  subtitle: 'Peanut Brittle with Rice Paper — The Sugar Glass Transition Confectionery',
  heroImage: '/images/recipes/keo-cu-do.jpg',
  region: 'Central' as const,
  difficulty: 'Hard',
  prepTime: '20 min',
  cookTime: '25 min',
  totalTime: '45 min',
  servings: 20,
  rating: 4.8,
  reviewCount: 213,
  calories: 180,
  tags: ['Hà Tĩnh', 'Candy', 'Peanut', 'Central', 'Dessert', 'Gift'],

  introduction: {
    paragraphs: [
      "Kẹo cu đơ is a SUGAR GLASS — an amorphous solid produced by cooling a supersaturated sucrose solution rapidly enough to prevent crystallization. The physics is identical to silicate glass production: a liquid (molten sugar at 150-160°C) is cooled through its GLASS TRANSITION TEMPERATURE (Tg ≈ 52°C for anhydrous sucrose) faster than the molecules can rearrange into a crystalline lattice. The result is a material that has the MECHANICAL PROPERTIES of a solid (hardness, brittleness, fracture) but the MOLECULAR ARRANGEMENT of a liquid (disordered, no long-range periodicity). This amorphous state is METASTABLE — given enough time, the sugar molecules will eventually find their crystalline equilibrium (a process called DEVITRIFICATION, manifesting as the white, opaque, grainy surface that develops on old hard candy). The kẹo cu đơ maker's art is controlling this glass-forming process to produce a brittle with exactly the right THICKNESS (2-3mm of sugar glass), TRANSPARENCY (amber-clear, indicating complete amorphous state), and FRACTURE BEHAVIOR (clean snap with minimal fragmentation, indicating a glass well below Tg).",
      "The CARAMELIZATION during sugar cooking is the source of kẹo cu đơ's color, flavor, and aroma — and it is one of the most complex chemical reactions in food science. When sucrose is heated above 160°C, it undergoes THERMAL DECOMPOSITION: the glycosidic bond between glucose and fructose breaks (hydrolysis), and the resulting monosaccharides undergo a CASCADE of dehydration, fragmentation, and polymerization reactions producing over 200 distinct compounds. The major reaction pathways include: ISOMERIZATION (glucose → fructose via enolization), DEHYDRATION (sugar → anhydrosugars → hydroxymethylfurfural HMF), FRAGMENTATION (HMF → furanones, pyranones, maltol), and POLYMERIZATION (small molecules → caramelin, caramelen — high-MW brown polymers collectively called MELANOIDINS, MW 1,000-50,000 Da). The color progression is a direct indicator of the reaction extent: pale gold (150°C) → amber (155°C) → dark amber (160°C) → brown (165°C) → black (>170°C, carbonization — burnt, bitter, ruined).",
      "The RICE PAPER (bánh tráng) sandwich that encases the peanut brittle is the feature that distinguishes Hà Tĩnh kẹo cu đơ from all other peanut brittles worldwide. Two sheets of thin, dry rice paper are used as the TOP and BOTTOM surfaces of the candy. During assembly, the hot sugar glass (150-160°C) is poured between the rice paper sheets, and the sugar's residual heat partially GELATINIZES the rice starch in the contact zone (the inner 0.1mm of each rice paper sheet), creating a GRADED INTERFACE: the outer surface remains crispy-dry rice paper, the inner surface transitions to a gelatinized starch zone bonded to the sugar glass, and the core is the peanut-studded caramel. This graded interface provides DELAMINATION RESISTANCE — the rice paper is gradually merged into the sugar glass at the molecular level."
    ]
  },

  ingredients: [
    {
      group: 'Sugar Glass',
      items: [
        { name: 'Granulated sugar', amount: '400g', note: 'Sucrose — glass-forming substrate' },
        { name: 'Maltose syrup (mạch nha)', amount: '200g', note: 'Glucose + maltose — crystallization inhibitor' },
        { name: 'Water', amount: '100ml', note: 'Initial dissolution medium' },
        { name: 'Fresh ginger juice', amount: '2 tbsp', note: 'Gingerol — flavor + partial shogaol conversion' },
        { name: 'Lime juice', amount: '1 tbsp', note: 'Citric acid — sucrose inversion catalyst' },
      ]
    },
    {
      group: 'Filling & Structure',
      items: [
        { name: 'Roasted peanuts', amount: '300g', note: 'Skin-on, warm — thermal shock prevention' },
        { name: 'White sesame seeds (toasted)', amount: '3 tbsp' },
        { name: 'Rice paper sheets (bánh tráng)', amount: '20 sheets', note: 'Thin, dry — sandwich substrate' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Sugar Dissolution — Supersaturation Setup',
      details: 'Combine sugar, maltose syrup, water, and lime juice in a heavy-bottomed pot. Heat over MEDIUM-LOW heat, stirring gently until all sugar crystals are completely dissolved. This initial dissolution is critical: any UNDISSOLVED CRYSTAL left in the solution will act as a SEED CRYSTAL during cooling, triggering unwanted crystallization — the crystal provides a template surface where dissolved sucrose molecules align into the crystal lattice, propagating crystallization throughout the mass in seconds. Once dissolved, STOP STIRRING and increase heat to medium-high. From this point forward, do NOT stir, do NOT introduce any utensil into the syrup, and do NOT brush the pot walls — any disturbance can nucleate crystallization.',
      time: '8 min',
      tip: 'The MALTOSE SYRUP is the KEY anti-crystallization agent. Maltose and glucose act as CRYSTAL GROWTH INHIBITORS through two mechanisms: (1) STERIC INTERFERENCE — maltose molecules adsorb onto the surface of growing sucrose crystals but don\'t fit into the lattice, BLOCKING attachment sites for incoming sucrose and reducing crystal growth rate by 80-95%. (2) VISCOSITY INCREASE — maltose syrup increases solution viscosity 2-3× compared to pure sucrose at the same concentration, slowing the DIFFUSION rate of sucrose molecules toward crystal surfaces. Together, these make the sugar glass RESISTANT TO CRYSTALLIZATION during cooling, extending shelf life from hours (pure sucrose brittle) to weeks (maltose-stabilized brittle).'
    },
    {
      step: 2,
      title: 'Caramelization — Thermal Decomposition Control',
      details: 'Allow the syrup to boil undisturbed. As water evaporates, the boiling point rises. Monitor the temperature with a candy thermometer: 110°C (thread stage) → 120°C (soft ball) → 130°C (hard ball) → 140°C (soft crack) → 150°C (hard crack) → 155-160°C (light caramel, >99% solids + decomposition begins). At 155-160°C, the syrup is AMBER-GOLD with a CARAMEL AROMA. Add ginger juice — it will bubble violently (water flash-evaporation). Immediately remove from heat. The window between 155°C (perfect caramel) and 170°C (burnt carbon) is only 15°C and closes in approximately 30-60 SECONDS.',
      time: '12 min',
      tip: 'The GINGER JUICE is added at the end for a THERMOCHEMICAL reason: gingerol is HEAT-LABILE — it undergoes dehydration to SHOGAOL at temperatures above 100°C (activation energy ~80 kJ/mol). Shogaol is 2× more pungent with a SHARPER, more persistent heat. The brief ~5 second exposure to 155°C converts approximately 30-50% of gingerol to shogaol, creating a BLEND: the rounded warmth of gingerol + the sharp bite of shogaol. If ginger were added earlier, >90% would convert to shogaol, producing an unpleasantly sharp, one-dimensional heat.'
    },
    {
      step: 3,
      title: 'Peanut Integration — Thermal Mass Management',
      details: 'Immediately add warm roasted peanuts and toasted sesame seeds to the hot caramel. Fold gently with a WOODEN spatula (wood\'s low thermal conductivity 0.1-0.2 W/m·K minimizes heat loss vs metal\'s 50-400 W/m·K). The peanuts must be PRE-WARMED (60-80°C) — cold peanuts would cause THERMAL SHOCK at the interface, creating brittle, weak regions. Warm peanuts reduce the temperature differential from 130°C to 80°C, allowing the sugar glass to FLOW AROUND and BOND TO the peanut surface before solidifying.',
      time: '1 min',
      tip: 'Peanuts should be roasted with SKINS ON. The skin (testa) is rich in PROANTHOCYANIDINS (condensed tannins, MW 500-3,000 Da) that counterbalance caramel sweetness. More importantly for candy structure, the rough skin surface has a SURFACE ENERGY of ~45 mJ/m² — higher than smooth oily peanut interior (25-30 mJ/m²). This provides better WETTING by molten sugar (contact angle ~30° vs ~60° on oil-surface), creating a stronger sugar-peanut bond. Skinless peanuts in brittle feel loose — they pop out rather than fracturing cleanly.'
    },
    {
      step: 4,
      title: 'Rice Paper Sandwich — Graded Interface Assembly',
      details: 'Lay a sheet of rice paper on a lightly oiled surface. Quickly pour the hot peanut-caramel mixture onto the rice paper and spread to 2-3mm thickness using an oiled rolling pin. Immediately place a SECOND sheet of rice paper on top and press firmly. The assembly must be completed within 60-90 SECONDS — as the sugar cools through Tg (~52°C), it transitions from a viscous liquid (workable) to a rigid glass (unworkable). Once the sugar glass forms, any force produces FRACTURE rather than flow.',
      time: '2 min',
      tip: 'The 2-3mm THICKNESS is a fracture mechanics optimization. The CRITICAL CRACK LENGTH in sugar glass is approximately 1-2mm (Griffith criterion: ac = 2γE/πσ²). A candy thinner than 1mm shatters into POWDER (any flaw exceeds the critical length). A candy thicker than 5mm requires excessive bite force. At 2-3mm, the candy cracks cleanly under normal bite force — one controlled fracture plane rather than explosive fragmentation.'
    },
    {
      step: 5,
      title: 'Cooling & Cutting — Glass Annealing',
      details: 'Cool at ROOM TEMPERATURE for 15-20 minutes. Do NOT refrigerate — rapid cooling creates RESIDUAL STRESS (surface contracts before interior, creating tensile stress) that causes spontaneous cracking during storage. Once cooled to ~30°C, cut into rectangular pieces with a sharp, heavy knife with a single DECISIVE STROKE. Scoring with a saw motion creates micro-cracks that propagate during storage. Store immediately in AIRTIGHT packaging — sugar glass is hygroscopic, absorbing moisture from ambient air that plasticizes the surface (reducing surface Tg below ambient), triggering DEVITRIFICATION (the white, grainy coating on old candy). In Hà Tĩnh\'s humid climate (70-85% RH), unpackaged kẹo cu đơ begins devitrification within 24-48 hours.',
      time: '20 min',
      tip: 'Kẹo cu đơ is a FUNCTIONAL FOOD SOUVENIR — it is perhaps the most commercially significant traditional candy in central Vietnam. Hà Tĩnh produces an estimated 500+ tonnes of kẹo cu đơ annually, with major production concentrated in the towns of Kỳ Anh and Thạch Hà. The candy\'s LONG SHELF LIFE (weeks to months when properly packaged — the sugar glass at <45% RH is thermodynamically stable), LIGHT WEIGHT, and CULTURAL SIGNIFICANCE make it an ideal travel gift. Every bus station and highway stop in Hà Tĩnh sells kẹo cu đơ — it is to Hà Tĩnh what mochi is to Japanese train stations or nougat to French autoroute rest stops: a REGIONAL CONFECTION elevated to the status of obligatory souvenir.'
    }
  ],

  proTips: [
    {
      title: 'The Glass Transition — Sugar as Amorphous Solid',
      description: 'The GLASS TRANSITION is a second-order phase transition where a material transforms from a rubbery/viscous state to a rigid/brittle state without crystallization. For sucrose, Tg ≈ 62°C (dry) but drops to ~52°C with maltose and ~30°C with 5% water (water is a PLASTICIZER — small molecules insert between sugar chains, increasing mobility). Above Tg, sugar molecules REARRANGE — the material flows and sticks. Below Tg, molecular motion is FROZEN — the material is rigid and snappable. The kẹo maker manipulates this transition empirically: the candy is workable (spreadable) above 52°C and becomes the finished product (hard, storable) below it. This is the same physics used in polymer engineering and semiconductor manufacturing — glass transition control — realized in a street candy from Hà Tĩnh.'
    },
    {
      title: 'Caramelization vs Maillard — Two Distinct Browning Chemistries',
      description: 'Kẹo cu đơ involves BOTH browning reactions simultaneously: CARAMELIZATION is thermal decomposition of sugars ALONE (no amino acids required) — producing furanones (buttery), maltol (toasty), diacetyl (butterscotch), and melanoidins (brown color). MAILLARD REACTION occurs between reducing sugars and the AMINO ACIDS in peanut protein — producing PYRAZINES (nutty, roasted), THIAZOLES (meaty), and Strecker aldehydes. The peanuts provide the amino acid substrate that pure sugar caramel lacks — this is why kẹo cu đơ has a more complex, deeper flavor than pure caramel candy. The two reactions produce COMPLEMENTARY compound classes: caramelization provides the sweet-butterscotch base, Maillard provides the savory-nutty overtones.'
    },
    {
      title: 'Rice Paper — Functionally Graded Edible Material',
      description: 'The rice paper is a FUNCTIONAL INGREDIENT: TEXTURALLY — dry rice paper crumbles with a delicate shatter while sugar glass fractures with a sharp snap, creating a TWO-STAGE FRACTURE in each bite. PRACTICALLY — it prevents the sticky caramel from adhering to fingers and teeth, serving as an EDIBLE NON-STICK SURFACE. SENSORIALLY — toasted rice starch at the heated contact zone contributes subtle CEREAL FLAVOR (dextrinized starch → pyrazines). The starch wafer → gelatinized transition zone → sugar glass structure is a FUNCTIONALLY GRADED MATERIAL — a concept used in aerospace ceramics and dental prosthetics, here realized in a street snack.'
    },
    {
      title: 'Cu Đơ — Cultural Heritage of Hà Tĩnh',
      description: 'The name \"cu đơ\" has contested etymology — \"cũ đơ\" (old and simple), or a dialect term for \"peanuts stuck together,\" or a description of being stunned (đơ người) by its taste. Whatever the origin, kẹo cu đơ has become an ICONIC SOUVENIR of Hà Tĩnh province, recognized by Vietnam\'s Ministry of Culture as intangible cultural heritage. The candy\'s endurance through 100+ years of wars, famines, and upheavals speaks to its dual appeal: a genuinely excellent confection and a symbol of Hà Tĩnh identity. Every bus stop in the province sells it — it\'s the obligatory gift that visitors carry home, a CULTURAL CURRENCY as valuable as the candy itself.'
    }
  ],

  nutritionFacts: {
    servingSize: '1 piece (approximately 30g)',
    calories: 180,
    totalFat: '8g',
    saturatedFat: '1g',
    cholesterol: '0mg',
    sodium: '15mg',
    totalCarbohydrate: '24g',
    dietaryFiber: '1g',
    totalSugars: '18g',
    protein: '4g',
    vitaminD: '0mcg',
    calcium: '15mg',
    iron: '0.5mg',
    potassium: '80mg'
  },

  relatedRecipes: [
    {
      title: 'Bánh Gai',
      slug: 'banh-gai',
      image: '/images/recipes/banh-gai.jpg',
      description: 'Black sticky rice cake — another Nghệ An confection'
    },
    {
      title: 'Bánh Đúc Ngô',
      slug: 'banh-duc-ngo',
      image: '/images/recipes/banh-duc-ngo.jpg',
      description: 'Corn pudding — starch gel vs sugar glass contrast'
    },
    {
      title: 'Nhút Thanh Chương',
      slug: 'nhut-thanh-chuong',
      image: '/images/recipes/nhut-thanh-chuong.jpg',
      description: 'Fermented jackfruit — savory Nghệ An counterpart'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Kẹo Cu Đơ — Peanut Brittle with Rice Paper',
    description: 'Sugar glass transition Tg≈52°C amorphous solid, maltose crystal growth inhibitor, 155-160°C caramelization cascade, gingerol→shogaol partial conversion, Griffith criterion 2-3mm fracture optimization, rice paper functionally graded interface, and peanut skin proanthocyanidin surface energy wetting bond.',
    image: '/images/recipes/keo-cu-do.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT20M',
    cookTime: 'PT25M',
    totalTime: 'PT45M',
    recipeYield: '20 pieces',
    recipeCategory: 'Dessert',
    recipeCuisine: 'Vietnamese',
    keywords: 'kẹo cu đơ, peanut brittle, ha tinh candy, vietnamese candy, rice paper peanut candy',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '180 calories',
      fatContent: '8g',
      proteinContent: '4g',
      carbohydrateContent: '24g'
    },
    recipeIngredient: [
      '400g sugar + 200g maltose syrup',
      '300g roasted peanuts (skin-on)',
      'Rice paper sheets',
      'Ginger juice, lime juice',
      'Toasted sesame seeds'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Dissolve sugar and maltose without residual crystals' },
      { '@type': 'HowToStep', text: 'Caramelize to 155-160°C amber, add ginger at end' },
      { '@type': 'HowToStep', text: 'Fold in warm peanuts and sesame' },
      { '@type': 'HowToStep', text: 'Sandwich between rice paper sheets at 2-3mm' },
      { '@type': 'HowToStep', text: 'Cool at room temperature, cut with single stroke' }
    ]
  }
};

export default function KeoCuDoPage() {
  return <RecipeLayout recipe={recipeData} />;
}
