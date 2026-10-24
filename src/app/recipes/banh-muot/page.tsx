'use client';

import RecipeLayout from '../_components/RecipeLayout';

const recipeData = {
  title: 'Bánh Mướt',
  subtitle: 'Thin Steamed Rice Rolls — The Amylose Film-Casting Precision',
  heroImage: '/images/recipes/banh-muot.jpg',
  region: 'Central' as const,
  difficulty: 'Medium',
  prepTime: '30 min',
  cookTime: '30 min',
  totalTime: '1 hr',
  servings: 4,
  rating: 4.7,
  reviewCount: 195,
  calories: 220,
  tags: ['Nghệ An', 'Rice Rolls', 'Steamed', 'Central', 'Breakfast', 'Street Food'],

  introduction: {
    paragraphs: [
      "Bánh mướt is a FILM-CASTING OPERATION disguised as cooking. The batter — a colloidal suspension of rice starch granules in water — is ladled onto taut fabric stretched over boiling water, spread into a THIN FILM (0.3-0.5mm), and steamed for exactly 60-90 seconds. During this time, the starch granules undergo GELATINIZATION: water penetrates the semi-crystalline granule structure, disrupting the hydrogen bonds between amylose and amylopectin chains, causing the granules to swell 5-30× their original volume and burst, releasing linear amylose molecules into the inter-granular space. These freed amylose chains entangle with each other and with the swollen amylopectin remnants, forming a CONTINUOUS GEL NETWORK — a coherent, flexible film that can be peeled from the fabric as a single, intact sheet. The entire process mirrors INDUSTRIAL FILM CASTING: a polymer solution (starch suspension) is spread onto a substrate (fabric), the solvent is removed (water evaporates and gelatinizes), and a solid film remains.",
      "The critical variable is FILM THICKNESS. At 0.3-0.5mm, the starch film is thin enough to be TRANSLUCENT (light passes through the gel matrix with minimal scattering because the film is thinner than the mean free path of visible photons in the gel) yet thick enough to be SELF-SUPPORTING (the amylose entanglement density exceeds the critical overlap concentration c* ≈ 2-3% w/v, providing sufficient tensile strength ~0.5 MPa to hold the sheet together during peeling and rolling). Films thinner than 0.2mm tear during peeling (below c* in regions of uneven spreading); films thicker than 1mm become opaque and rubbery (excessive amylopectin gel dominates over the amylose network, shifting the texture from tender-silky to chewy-elastic). The 0.3-0.5mm window is where Nghệ An grandmothers operate by instinct — a PRECISION TOLERANCE of ±0.1mm achieved without any measuring instrument, guided entirely by the visual cue of translucency and the tactile feedback of the spreading ladle.",
      "Bánh mướt is Nghệ An's answer to bánh cuốn — but with a THINNER, SILKIER texture and a DIFFERENT RICE VARIETY. While Hà Nội bánh cuốn uses ordinary rice flour (20-25% amylose), Nghệ An bánh mướt traditionally uses a local rice with HIGHER AMYLOSE CONTENT (25-30%), which produces a firmer gel network, a more translucent film, and a characteristic SLIGHT CHEWINESS that distinguishes it from the softer, more delicate Northern version. The higher amylose content also means the film RETROGRADES more slowly — it stays soft and pliable for longer at room temperature before becoming stiff, giving the vendor a wider serving window."
    ]
  },

  ingredients: [
    {
      group: 'Rice Batter',
      items: [
        { name: 'Rice flour (bột gạo)', amount: '300g', note: 'High-amylose variety — 25-30% amylose content' },
        { name: 'Tapioca starch (bột năng)', amount: '50g', note: '17% amylose — elasticity modifier' },
        { name: 'Water', amount: '700ml', note: 'Ratio 1:2 flour:water for optimal film viscosity' },
        { name: 'Salt', amount: '½ tsp', note: 'Ionic strength modifier — tightens gel network' },
        { name: 'Cooking oil', amount: '1 tbsp', note: 'Anti-adhesion surface lubricant' },
      ]
    },
    {
      group: 'Filling (Nhân)',
      items: [
        { name: 'Ground pork', amount: '200g', note: '70/30 lean:fat — Maillard substrate' },
        { name: 'Wood ear mushroom (mộc nhĩ)', amount: '30g dried', note: 'Rehydrated, minced — textural crunch matrix' },
        { name: 'Shallots (minced)', amount: '4' },
        { name: 'Fish sauce', amount: '1 tbsp' },
        { name: 'Black pepper', amount: '½ tsp' },
      ]
    },
    {
      group: 'Fried Shallots & Oil',
      items: [
        { name: 'Shallots (thinly sliced)', amount: '6', note: 'For crisping — glass transition crunch' },
        { name: 'Cooking oil', amount: '100ml', note: 'For frying — becomes flavored shallot oil' },
      ]
    },
    {
      group: 'Dipping Sauce (Nước Chấm)',
      items: [
        { name: 'Fish sauce', amount: '3 tbsp' },
        { name: 'Water', amount: '4 tbsp' },
        { name: 'Sugar', amount: '2 tbsp' },
        { name: 'Lime juice', amount: '2 tbsp' },
        { name: 'Garlic (minced)', amount: '2 cloves' },
        { name: 'Chili (sliced)', amount: '1-2' },
      ]
    },
    {
      group: 'Accompaniments',
      items: [
        { name: 'Chả lụa (pork sausage)', amount: '200g', note: 'Sliced — surimi-gel textural counterpoint' },
        { name: 'Fresh herbs (rau thơm)', amount: '1 bunch', note: 'Vietnamese coriander, perilla, Thai basil' },
        { name: 'Bean sprouts', amount: '100g', note: 'Raw — crisp cellular turgor contrast' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Batter Preparation — Colloidal Suspension Engineering',
      details: 'Combine rice flour, tapioca starch, salt, and water. Whisk thoroughly until no lumps remain, then let REST for 30 minutes. During this resting period, the starch granules undergo HYDRATION — water molecules penetrate the amorphous regions of the semi-crystalline granule through capillary action and osmotic pressure, pre-swelling the granules by 10-20% of their final gelatinized volume. This pre-hydration is critical: it reduces the ACTIVATION ENERGY of gelatinization during steaming, meaning the granules burst more uniformly and at a lower temperature (onset drops from 65°C to 60°C), producing a more homogeneous film with fewer ungelatinized \"white spots\" (regions of intact granules that scatter light and create opaque patches in the otherwise translucent film).',
      time: '35 min',
      tip: 'The TAPIOCA STARCH addition (14% of total starch) is a RHEOLOGICAL MODIFIER. Tapioca starch has a lower amylose content (17%) than rice flour (25-30%), and its granules are larger (15-25μm vs rice\'s 3-8μm). The larger tapioca granules swell more dramatically during gelatinization, creating a more VISCOUS, ELASTIC gel matrix. In the finished film, the tapioca acts as FLEXIBILITY JOINTS — regions of softer, more extensible gel within the firmer rice amylose network. Without tapioca, the pure rice film would be too brittle (amylose networks are strong but inelastic) and would crack when rolled. With too much tapioca (>20%), the film becomes gummy and loses its characteristic silky-smooth texture. The 14% ratio is the PERCOLATION THRESHOLD — just enough tapioca domains to prevent crack propagation without forming a continuous gummy phase.'
    },
    {
      step: 2,
      title: 'Steaming Apparatus — The Fabric Substrate System',
      details: 'Prepare the steaming apparatus: a wide pot of boiling water with a TAUT COTTON FABRIC stretched and tied securely over the opening. The fabric must be pulled drum-tight with no wrinkles or sags. Brush a thin layer of oil on the fabric surface. The fabric serves as the CASTING SUBSTRATE — it must be porous enough to allow steam to pass through (steam provides the heat for gelatinization from below) yet tight enough to prevent the liquid batter from dripping through. Cotton muslin with a thread count of 60-80 threads/inch provides the optimal PORE SIZE: large enough for steam (molecular diameter 0.28nm) to pass freely, small enough for the batter suspension (particle size 3-25μm) to be retained on the surface.',
      time: '5 min',
      tip: 'The TENSION of the fabric determines the film\'s thickness uniformity. A loose fabric sags under the weight of the batter, creating a thicker pool in the center and thinner edges — the resulting film has variable thickness, which causes differential retrogradation (thick regions stiffen faster than thin regions) and an uneven texture. A properly tensioned fabric is flat to within ±1mm across its surface, ensuring the batter spreads to UNIFORM THICKNESS when the ladle sweeps across. Professional vendors retension their fabric every 30-40 sheets as the repeated wetting-drying cycles cause the cotton fibers to relax (cotton\'s elastic modulus decreases ~15% when wet due to water plasticization of cellulose hydrogen bonds).'
    },
    {
      step: 3,
      title: 'Film Casting — The Ladle Sweep Technique',
      details: 'Stir the batter (starch settles during standing). Ladle approximately 60-80ml of batter onto the center of the oiled fabric. Immediately use the bottom of the ladle to spread the batter in a SINGLE CIRCULAR SWEEP outward from center to edge, creating a thin, even film approximately 25-30cm in diameter. Cover with a dome lid IMMEDIATELY. The spreading must be completed in ONE MOTION taking 1-2 seconds — multiple passes create SHEAR LINES (visible striations where the partially-gelled batter is re-spread, breaking the forming amylose network and creating weak lines along which the film will tear during peeling).',
      time: '1-2 sec per sheet',
      tip: 'The LADLE ANGLE during spreading controls the film thickness through a LUBRICATION THEORY relationship: the batter flow between the curved ladle bottom and the flat fabric follows the Reynolds equation, where the gap height (and thus film thickness) is proportional to the cube root of the spreading velocity times the batter viscosity divided by the applied pressure. A STEEPER ANGLE (ladle more perpendicular) creates more pressure and a thinner film; a SHALLOWER ANGLE (ladle more parallel) creates less pressure and a thicker film. Experienced vendors maintain a consistent 30-45° angle throughout the sweep — this is the angle that produces the optimal 0.3-0.5mm thickness at the typical sweeping speed of 0.5 m/s. The angle is held constant by keeping the wrist locked and pivoting from the shoulder — a biomechanical technique that takes weeks of practice to master.'
    },
    {
      step: 4,
      title: 'Steaming — Gelatinization Phase Transition',
      details: 'Steam with the lid on for exactly 60-90 seconds. During this time, steam condenses on the batter film surface, and the temperature rises from ambient to 95-100°C. The gelatinization proceeds as a FRONT moving from the bottom surface (in contact with steam through the fabric) upward: bottom granules gelatinize first (within 10-20 seconds), middle granules follow (30-40 seconds), and top surface granules complete last (50-70 seconds). The visual indicator is TRANSLUCENCY: the film transitions from WHITE-OPAQUE (intact granules scatter light via Mie scattering) to TRANSLUCENT-GLOSSY (gelatinized gel matrix has a refractive index close to water, minimizing scattering). When the ENTIRE surface is uniformly translucent with no white patches, the film is done.',
      time: '60-90 sec',
      tip: 'OVER-STEAMING (>120 seconds) causes the gel to DEHYDRATE from the top surface — the steam environment is saturated at 100°C, but condensation preferentially forms on the cooler lid rather than the now-hot film surface, creating a net MOISTURE LOSS from the film\'s upper layers. This dehydration increases the starch concentration above c* in those layers, triggering PREMATURE RETROGRADATION (amylose chains re-crystallize into double helices). The surface becomes tough and leathery rather than silky. The 60-90 second window ensures full gelatinization with MAXIMUM HYDRATION — the gel network is fully formed but still holds 70-75% water, which is what gives bánh mướt its characteristic silky-smooth mouthfeel.'
    },
    {
      step: 5,
      title: 'Peeling & Rolling — Film Delamination',
      details: 'Remove the lid. Use a thin bamboo stick or flat spatula to GENTLY lift one edge of the film from the fabric. Peel the entire sheet off in one continuous motion, rolling it loosely around the filling (if using) or into a simple scroll. The peeling must be SLOW and CONTINUOUS — jerky motions create stress concentrations at the peel front that exceed the film\'s tensile strength (~0.5 MPa) and cause tearing. The oil applied to the fabric before casting acts as a RELEASE AGENT — it forms a monomolecular hydrophobic layer between the hydrophilic starch gel and the hydrophilic cotton cellulose, reducing the adhesion (work of adhesion drops from ~70 mJ/m² for starch-on-cellulose to ~5 mJ/m² for starch-on-oil-on-cellulose).',
      time: '15 sec per sheet',
      tip: 'The bamboo stick\'s FLEXIBILITY is not incidental — a rigid spatula applies concentrated force at the peel point, which can puncture the delicate film. The bamboo flexes, distributing the lifting force across a 2-3cm front rather than a point. The peel angle also matters: peeling at 180° (pulling the film back flat against itself) requires the LEAST force (the elastic energy stored in the bent film assists delamination), while peeling at 90° (pulling straight up) requires the MOST force (all energy goes to breaking adhesion, none is returned as elastic rebound). Experienced vendors peel at approximately 150-170° — nearly flat, with the freed film draping over the bamboo stick and falling onto the work surface by gravity.'
    },
    {
      step: 6,
      title: 'Filling & Accompaniments — Assembly Architecture',
      details: 'For filled bánh mướt: place a spoonful of sautéed pork-mushroom filling on the sheet and roll loosely. For plain rolls: roll into scrolls and cut into 3-4cm lengths. Arrange on a plate, drizzle with shallot oil, top with fried shallots and sliced chả lụa. Serve with fresh herbs, bean sprouts, and nước chấm dipping sauce on the side. The assembly must be done IMMEDIATELY after peeling — the film begins RETROGRADATION within 10-15 minutes at room temperature (amylose chains re-associate into crystalline double helices, increasing the gel\'s firmness by 50-100% within the first hour). Fresh-from-the-steamer bánh mướt has a WATER ACTIVITY (aw) of 0.97-0.99, which keeps the gel in its softest state; as the surface dehydrates to aw < 0.95, the retrogradation rate accelerates exponentially.',
      time: '5 min',
      tip: 'The CHẢ LỤA slices provide a critical TEXTURAL COUNTERPOINT to the soft rice roll. Chả lụa is a SURIMI-TYPE GEL — pork protein (primarily myosin and actin) solubilized in high-salt solution (2-3% NaCl), set into a firm, elastic gel by heating (the \"two-step\" gelation: salt-soluble myosin unfolds at 40-50°C forming a preliminary network, then fully denatures at 60-75°C forming a rigid gel). The chả lụa\'s gel strength (3,000-5,000 g·cm by gel punch test) is 10-20× that of the rice roll\'s starch gel (200-400 g·cm). This order-of-magnitude difference creates a BINARY TEXTURE EXPERIENCE: the rice roll yields immediately under tooth pressure (fracture strain ~80%), then the chả lụa resists with elastic bounce-back (fracture strain ~200%), requiring sustained chewing force to break through.'
    }
  ],

  proTips: [
    {
      title: 'Amylose vs Amylopectin — The Film-Forming Dichotomy',
      description: 'The success of bánh mướt depends on the AMYLOSE:AMYLOPECTIN RATIO in the rice flour. Amylose (linear α-1,4-glucan chains, MW 10⁵-10⁶ Da, 25-30% in Nghệ An rice) is the FILM-FORMING component: its linear chains entangle, align, and hydrogen-bond into a coherent network with tensile strength. Amylopectin (branched α-1,4/α-1,6-glucan, MW 10⁷-10⁸ Da, 70-75%) is the SPACE-FILLING component: its branched structure swells to fill the inter-chain voids in the amylose network, providing bulk and softness. A film made from pure amylose would be STRONG but BRITTLE (like cellophane); a film from pure amylopectin would be SOFT but INCOHERENT (like a thick paste). The 25-30% amylose content of Nghệ An rice is in the \"Goldilocks zone\" for edible film casting — enough amylose for structural integrity, enough amylopectin for palatability.'
    },
    {
      title: 'Retrogradation Kinetics — The Serving Window',
      description: 'Retrogradation is the ENEMY of bánh mướt: the re-crystallization of amylose chains from a disordered gel into ordered double helices. The kinetics follow the AVRAMI EQUATION: X(t) = 1 - exp(-kt^n), where X is the crystallinity fraction, k is the rate constant (temperature-dependent), and n ≈ 1 (nucleation-limited). At 25°C (room temperature), the half-time (t₁/₂) for amylose retrogradation is approximately 20-30 minutes — meaning the rice roll loses HALF its initial softness within half an hour. At 4°C (refrigerator), t₁/₂ drops to 5-10 minutes (cold accelerates nucleation). At 60°C (warm holding), t₁/₂ extends to 2-3 hours. This is why street vendors keep their rolls on a WARM STEAMING TRAY — not to cook further, but to SUPPRESS RETROGRADATION by maintaining the temperature above the nucleation optimum (the nucleation rate peaks at 0-10°C and drops sharply above 40°C).'
    },
    {
      title: 'Wood Ear Mushroom — The Polysaccharide Crunch Matrix',
      description: 'Wood ear (Auricularia auricula-judae) in the filling provides a STRUCTURAL CRUNCH that is fundamentally different from vegetable crunch. Vegetable crispness comes from TURGOR PRESSURE — water-filled cells that burst under tooth pressure (a hydraulic mechanism that disappears when cooked). Wood ear crunch comes from its CELL WALL COMPOSITION: a dense matrix of β-1,3-glucan (lentinan-type) and chitin (β-1,4-N-acetylglucosamine) cross-linked with melanin pigments. This polysaccharide-chitin matrix is HEAT-STABLE — it retains its elastic resistance through boiling, steaming, and stir-frying because the β-glycosidic bonds that hold it together have higher thermal stability (bond dissociation energy ~400 kJ/mol) than the α-glycosidic bonds in starch (~350 kJ/mol). The result: wood ear pieces in the pork filling maintain their CARTILAGINOUS CRUNCH throughout cooking and in the finished roll, providing a textural anchor in an otherwise uniformly soft dish.'
    },
    {
      title: 'Fried Shallot Oil — Dual-Phase Flavor Delivery',
      description: 'The shallot oil drizzled over bánh mướt is a FLAVOR EXTRACT in a lipid carrier. During frying (160-170°C, 5-8 minutes), the shallot\'s flavor precursors undergo three simultaneous reactions: (1) MAILLARD REACTION between reducing sugars and amino acids produces pyrazines (nutty), furanones (caramel), and thiophenes (savory); (2) CARAMELIZATION of the 5-8% sucrose produces caramel volatiles (diacetyl, maltol, hydroxymethylfurfural); (3) ALLIUM-SPECIFIC reactions where S-alk(en)yl cysteine sulfoxides break down via alliinase and thermal pathways into thiosulfinates, cepaenes, and zwiebelanes (the onion/shallot flavor family). These ~200 volatile compounds DISSOLVE into the frying oil, creating a LIPOPHILIC FLAVOR CONCENTRATE that, when drizzled on the hydrophilic rice roll surface, sits ON TOP of the starch gel rather than absorbing into it. This surface positioning means the shallot flavor is the FIRST thing the tongue encounters — an immediate, concentrated burst before the neutral rice roll flavor underneath.'
    },
    {
      title: 'Nước Chấm Acid-Sweet-Salt Triangle',
      description: 'The dipping sauce follows a PSYCHOPHYSICAL TRIANGLE of taste interactions. Fish sauce provides SALT (NaCl, 20-25% in pure fish sauce, diluted to ~5% in nước chấm) and UMAMI (glutamic acid 10-20 g/L + various nucleotides). Sugar provides SWEETNESS (sucrose, threshold 10 mM). Lime juice provides SOURNESS (citric acid, threshold 0.4 mM). These three tastes interact CROSS-MODALLY: salt SUPPRESSES bitterness (any residual from the fish sauce\'s biogenic amines) while ENHANCING sweetness at moderate concentrations; sweetness SUPPRESSES sourness by competitive binding at the PKD2L1 sour receptor; sourness ENHANCES saltiness through a membrane potential mechanism. The standard ratio (3:4:2:2 = fish sauce:water:sugar:lime) is calibrated to position the sauce at the CENTER of the salt-sweet-sour triangle — equidistant from all three vertices — creating a balanced sauce that enhances the neutral rice roll without dominating any single taste dimension.'
    }
  ],

  nutritionFacts: {
    servingSize: '1 plate (approximately 300g with accompaniments)',
    calories: 220,
    totalFat: '8g',
    saturatedFat: '2g',
    cholesterol: '35mg',
    sodium: '720mg',
    totalCarbohydrate: '30g',
    dietaryFiber: '1g',
    totalSugars: '3g',
    protein: '10g',
    vitaminD: '0mcg',
    calcium: '25mg',
    iron: '1.8mg',
    potassium: '180mg'
  },

  relatedRecipes: [
    {
      title: 'Cháo Lươn Nghệ An',
      slug: 'chao-luon-nghe-an',
      image: '/images/recipes/chao-luon-nghe-an.jpg',
      description: 'Eel porridge — another Nghệ An breakfast staple'
    },
    {
      title: 'Lươn Xào Lăn',
      slug: 'luon-xao-lan',
      image: '/images/recipes/luon-xao-lan.jpg',
      description: 'Eel coconut curry — pair with bánh mướt'
    },
    {
      title: 'Fresh Spring Rolls',
      slug: 'fresh-spring-rolls',
      image: '/images/recipes/fresh-spring-rolls.jpg',
      description: 'Rice paper rolls — different starch film approach'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Bánh Mướt — Thin Steamed Rice Rolls',
    description: 'Nghệ An thin steamed rice rolls via amylose film-casting on fabric substrate, 0.3-0.5mm precision tolerance by ladle-sweep Reynolds lubrication theory, gelatinization front propagation 60-90s, Avrami retrogradation kinetics serving window, tapioca percolation threshold flexibility modifier, and dual-phase shallot oil surface flavor delivery.',
    image: '/images/recipes/banh-muot.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT30M',
    cookTime: 'PT30M',
    totalTime: 'PT60M',
    recipeYield: '4 servings',
    recipeCategory: 'Main Course',
    recipeCuisine: 'Vietnamese',
    keywords: 'bánh mướt, nghệ an rice rolls, steamed rice rolls, vietnamese rice crepes, banh cuon nghe an, central vietnam breakfast',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '220 calories',
      fatContent: '8g',
      proteinContent: '10g',
      carbohydrateContent: '30g'
    },
    recipeIngredient: [
      '300g rice flour (high-amylose)',
      '50g tapioca starch',
      '200g ground pork, wood ear mushroom filling',
      '200g chả lụa pork sausage',
      'Fried shallots, shallot oil',
      'Nước chấm dipping sauce',
      'Fresh herbs, bean sprouts'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Prepare colloidal batter with 30-min hydration rest' },
      { '@type': 'HowToStep', text: 'Set up taut fabric steaming substrate' },
      { '@type': 'HowToStep', text: 'Cast 0.3-0.5mm film by single ladle sweep' },
      { '@type': 'HowToStep', text: 'Steam 60-90s until fully translucent' },
      { '@type': 'HowToStep', text: 'Peel at 150-170° angle with bamboo stick' },
      { '@type': 'HowToStep', text: 'Fill, roll, top with shallot oil and accompaniments' }
    ]
  }
};

export default function BanhMuotPage() {
  return <RecipeLayout recipe={recipeData} />;
}
