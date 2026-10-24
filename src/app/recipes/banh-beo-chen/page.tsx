'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Bánh Bèo Chén',
  subtitle: 'Huế Steamed Rice Cakes — The Miniature Concavity Architecture',
  heroImage: '/images/recipes/banh-beo-chen.jpg',
  region: 'Central' as const,
  difficulty: 'Medium',
  prepTime: '30 min',
  cookTime: '30 min',
  totalTime: '1 hr',
  servings: 6,
  rating: 4.7,
  reviewCount: 168,
  calories: 280,
  tags: ['Huế', 'Appetizer', 'Steamed', 'Rice Cake', 'Street Food', 'Miniature'],

  introduction: {
    paragraphs: [
      "Bánh Bèo Chén is the GEOMETRY of Huế cuisine — tiny steamed rice cakes served in individual ceramic saucers (chén), each one a CONCAVE DISC engineered to hold exactly the right amount of topping in its shallow depression. The disc is not flat — it has a deliberate MENISCUS CURVATURE created by surface tension between the liquid batter and the ceramic wall during steaming. This curvature concentrates the toppings (dried shrimp, pork cracklings, scallion oil) in the center while the thin, translucent edges provide a textural frame of pure rice gel. The eating technique — scraping the disc from the saucer with a flat bamboo spatula — is itself a MECHANICAL EVENT: the spatula shears the gel-ceramic interface, exploiting the weak adhesion between the hydrophobic ceramic glaze and the hydrophilic starch gel.",
      "Each bánh bèo weighs approximately 15-20g — a SINGLE-BITE architecture that eliminates the need for cutting, tearing, or portion control. The Huế court aesthetic of miniaturization (cung đình) demanded that food be consumed in discrete, self-contained units where every bite delivered the complete flavor profile. This is information-theoretic efficiency: each bánh bèo contains the FULL SIGNAL (rice, shrimp, pork fat, scallion, fish sauce) with no redundancy across bites, unlike a large dish where some bites miss certain components.",
      "The science of Bánh Bèo is THIN-FILM GELATION: the batter (rice flour + water, ~15-18% solids) is poured into saucers to a depth of only 3-5mm, then steamed. At this thickness, heat penetration is essentially INSTANTANEOUS — the entire film reaches 100°C within 30 seconds. The rapid, uniform gelatinization produces an amylose gel with remarkably consistent texture from center to edge, unlike thicker cakes where the exterior over-gels while the interior remains under-cooked. The thinness also creates a LIGHT-TRANSMITTING gel — bánh bèo is translucent because the gel thickness (3-5mm) falls below the optical scattering path length for fully gelatinized rice starch (~8mm), allowing 40-60% light transmission."
    ]
  },

  ingredients: [
    {
      group: 'Rice Cake Batter',
      items: [
        { name: 'Rice flour (bột gạo)', amount: '200g', note: 'Not glutinous — amylose:amylopectin ~25:75' },
        { name: 'Tapioca starch', amount: '30g', note: 'Amylopectin elasticity modifier — prevents brittleness' },
        { name: 'Water', amount: '500ml' },
        { name: 'Salt', amount: '½ tsp' },
        { name: 'Vegetable oil', amount: '1 tbsp', note: 'Anti-adhesion — creates hydrophobic release layer' },
      ]
    },
    {
      group: 'Tôm Chấy — Dried Shrimp Floss',
      items: [
        { name: 'Dried shrimp (tôm khô)', amount: '100g', note: 'Rehydrate then pulse — controls particle size' },
        { name: 'Vegetable oil', amount: '2 tbsp' },
        { name: 'Garlic (minced)', amount: '2 cloves' },
        { name: 'Fish sauce', amount: '1 tbsp' },
        { name: 'Sugar', amount: '1 tsp' },
      ]
    },
    {
      group: 'Tóp Mỡ — Pork Cracklings',
      items: [
        { name: 'Pork fatback', amount: '150g', note: 'Cut into 5mm cubes — uniform rendering geometry' },
        { name: 'Fish sauce', amount: '1 tsp' },
      ]
    },
    {
      group: 'Mỡ Hành — Scallion Oil',
      items: [
        { name: 'Scallions (hành lá)', amount: '6 stalks', note: 'Green parts only — chlorophyll-infused oil' },
        { name: 'Vegetable oil', amount: '60ml' },
        { name: 'Salt', amount: 'pinch' },
      ]
    },
    {
      group: 'Nước Chấm — Dipping Sauce',
      items: [
        { name: 'Fish sauce', amount: '3 tbsp' },
        { name: 'Sugar', amount: '2 tbsp' },
        { name: 'Water', amount: '3 tbsp' },
        { name: 'Lime juice', amount: '1 tbsp' },
        { name: 'Garlic (minced)', amount: '1 clove' },
        { name: 'Fresh chili (sliced)', amount: '1-2' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Batter Hydration — Starch Granule Suspension Engineering',
      details: 'Whisk rice flour and tapioca starch into water gradually, ensuring NO LUMPS. The ratio is critical: 200g flour + 30g starch to 500ml water = approximately 31.5% total flour by weight of solution, which translates to ~15-18% starch solids (flour is ~55-60% starch). This concentration produces a batter with viscosity of approximately 50-80 centipoise — thin enough to self-level in the saucer (forming the concave meniscus) but viscous enough to prevent the starch granules from settling during the 30-second pour-to-steam interval. Add salt and oil. Let rest 30 minutes — this allows full hydration of the damaged starch granule surfaces.',
      time: '35 min',
      tip: 'The 30g tapioca starch addition is a TEXTURE INSURANCE POLICY. Pure rice flour gels are brittle — they crack when bent because the amylose network has limited chain entanglement. Tapioca starch (>95% amylopectin, virtually no amylose) acts as a PLASTICIZER: the amylopectin branches interpenetrate the amylose network, providing flexible chain segments that absorb deformation energy. At 13% of total starch, the tapioca converts the gel from "cracks when scraped" to "flexes when scraped" — the precise behavior needed for the spatula-release eating technique.'
    },
    {
      step: 2,
      title: 'Tôm Chấy — Particle Size-Controlled Shrimp Floss',
      details: 'Soak dried shrimp in warm water for 15 minutes. Drain and pat dry. Pulse in a food processor 5-8 times — the goal is IRREGULAR PARTICLES of 2-4mm, not fine powder. Fry the pulsed shrimp in oil with garlic over medium heat until fragrant and SLIGHTLY CRISPY (3-4 minutes). Season with fish sauce and sugar. The dried shrimp have already undergone extensive Maillard reactions during their drying process (sun-dried at 50-70°C for 24-48 hours), producing melanoidins and pyrazines. The frying step adds a SECOND LAYER of Maillard products at higher temperature (160-180°C), creating alkylpyrazines and furanones that the lower-temperature drying could not produce.',
      time: '20 min',
      tip: 'Particle size determines the TEXTURAL CONTRIBUTION: particles below 1mm integrate into the rice gel surface and become invisible (wasted effort). Particles above 5mm dominate the bite and overwhelm the delicate rice gel. The 2-4mm sweet spot creates particles that sit ON TOP of the gel, providing textural contrast without piercing the surface. Each particle is large enough to be individually perceived by the tongue\'s mechanoreceptors (spatial resolution ~1-2mm) but small enough to be consumed in a single-bite disc. This is GRANULOMETRIC ENGINEERING — optimizing particle size for the specific eating format.'
    },
    {
      step: 3,
      title: 'Tóp Mỡ — Glass-Transition Pork Cracklings',
      details: 'Cut pork fatback into uniform 5mm cubes. Place in a cold, dry pan (COLD-START RENDERING). Heat gradually from room temperature to 160-170°C over 15-20 minutes. The slow heating allows the fat to render from the adipose tissue BEFORE the residual protein matrix reaches glass-transition temperature. As the liquid fat leaves the cellular structure, the remaining protein-collagen scaffold dehydrates. When moisture drops below 5%, the protein matrix undergoes GLASS TRANSITION (Tg ≈ 140-160°C for dehydrated collagen-protein): it transforms from a rubbery, flexible state to a rigid, brittle, glassy state — this is the "crack" of tóp mỡ. Season with fish sauce while still hot.',
      time: '20 min',
      tip: 'Why UNIFORM 5mm cubes? Fat rendering rate is proportional to surface-area-to-volume ratio. A 5mm cube has SA:V = 6/5 = 1.2 mm⁻¹. A 10mm cube has SA:V = 6/10 = 0.6 mm⁻¹ — HALF the rendering rate. Non-uniform cubes mean the small ones reach glass transition (burnt, bitter) while the large ones are still rubbery (chewy, greasy). The 5mm cube is the optimal geometry for uniform cracklings: large enough to provide satisfying crunch (below 3mm they shatter into powder) but small enough for complete rendering in a reasonable time (above 8mm requires 30+ minutes).'
    },
    {
      step: 4,
      title: 'Mỡ Hành — Chlorophyll a+b Infusion Oil',
      details: 'Finely slice scallion green parts. Heat oil to 130-140°C (NOT smoking point — below the chlorophyll degradation threshold). Add scallions and immediately remove from heat. Stir for 30 seconds. The heat ruptures the chloroplast membranes, releasing chlorophyll a (blue-green) and chlorophyll b (yellow-green) into the oil phase. Chlorophylls are LIPOPHILIC (fat-soluble) due to their phytol tail (C₂₀H₃₉OH), so they dissolve readily in the hot oil, creating a vibrant green infusion. The brief heat exposure (130°C for 30 seconds) preserves 70-80% of the chlorophyll — longer or hotter exposure converts it to pheophytin (olive-brown).',
      time: '5 min',
      tip: 'Scallion oil is the VISUAL SIGNATURE of bánh bèo — the bright green drops on the translucent white disc create a high-contrast COLOR RATIO that signals freshness and quality. The chlorophyll-oil droplets also serve as FLAVOR DELIVERY VEHICLES: dissolved in oil, the scallion\'s allyl sulfide volatiles (responsible for the characteristic green-onion aroma) are protected from evaporation because they partition into the oil phase. On the tongue, the oil droplets slowly release these volatiles as they warm to body temperature and spread — a CONTROLLED-RELEASE aromatics system embedded in fat.'
    },
    {
      step: 5,
      title: 'Steaming — Thin-Film Rapid Gelation',
      details: 'Arrange small ceramic saucers (7-8cm diameter) in a steamer. Lightly oil each saucer — the oil creates a HYDROPHOBIC RELEASE LAYER between the ceramic glaze and the hydrophilic starch gel. Stir the batter (starch granules settle during rest) and ladle approximately 15-20ml into each saucer — the batter should form a layer only 3-5mm deep. The surface tension between the batter and the curved saucer wall creates a CONCAVE MENISCUS — the batter is thinnest at the center and thickest at the edges (opposite of what you\'d expect from a flat pour). Steam over high heat for 5-7 minutes until the cakes are translucent and set.',
      time: '7 min per batch',
      tip: 'The concave meniscus is a SURFACE TENSION phenomenon: the hydrophilic rice batter has high adhesion to the ceramic wall (contact angle <30°), causing the liquid to climb the walls while the center depresses. This self-forming concavity is the FUNCTIONAL BOWL that will hold the toppings — it is not molded or shaped manually, but engineered by the physics of wetting. The oiling step reduces wall adhesion slightly (increasing contact angle to ~40-50°) to prevent EXCESSIVE climbing that would leave the center too thin. The balance point creates a gentle depression of 1-2mm depth — enough to cradle a spoonful of tôm chấy and scallion oil without overflowing.'
    },
    {
      step: 6,
      title: 'Topping Assembly — Information-Complete Micro-Portions',
      details: 'While cakes are still warm (above 40°C — below this, the surface gel stiffens and toppings don\'t adhere), add in sequence: (1) a small spoonful of tôm chấy (dried shrimp floss) into the concavity center, (2) 2-3 pieces of tóp mỡ (cracklings) nestled into the shrimp, (3) a drizzle of mỡ hành (scallion oil) over the entire surface, (4) a few drops of nước chấm for those who eat directly from the saucer. Each assembled disc weighs approximately 20-25g and contains the COMPLETE FLAVOR PROFILE: starch (rice gel), protein (shrimp), fat (pork crackling + scallion oil), umami (fish sauce), salt, sugar, acid (lime), and aromatic (scallion + garlic). No component is missing from any single unit.',
      time: '10 min',
      tip: 'The topping-to-cake RATIO is approximately 30:70 by weight — this ratio ensures the delicate rice gel flavor is not overwhelmed while providing enough topping for sensory interest. A ratio below 20:80 produces bland discs where you\'re essentially eating plain rice gel. Above 40:60, the toppings dominate and the rice gel becomes mere vehicle — losing the point of the dish. The 30:70 ratio has been empirically optimized over centuries of Huế street food evolution — it\'s the ratio where both the rice gel\'s clean starch sweetness AND the topping\'s savory complexity are simultaneously perceivable.'
    },
    {
      step: 7,
      title: 'Serving & Eating Mechanics',
      details: 'Serve the saucers arranged on a large platter or bamboo tray, 8-12 per person. Provide a flat bamboo spatula (dao bánh bèo) and a communal bowl of nước chấm. The eating technique: hold the saucer in one hand, insert the spatula at the edge of the disc, and SHEAR the gel from the ceramic surface with a single horizontal stroke. The gel-ceramic interface fails at low shear stress (~0.1-0.5 kPa) because the oil release layer prevents hydrogen bonding between the starch hydroxyl groups and the ceramic silicate surface. The released disc folds onto the spatula, is dipped in nước chấm, and consumed in one bite.',
      time: '2 min',
      tip: 'The flat bamboo spatula is not just tradition — it is MECHANICALLY OPTIMAL for this task. A spoon\'s curved profile applies concentrated force at the contact point, which can tear the gel. A fork pierces it. The flat spatula distributes force evenly across the gel-ceramic interface, initiating a CLEAN DELAMINATION rather than a tear. The bamboo material has a surface roughness of 10-50μm (from exposed cellulose fibers) that provides just enough friction to grip the wet gel without puncturing it — smoother materials (metal, plastic) allow the gel to slide off during transfer to mouth. This is a centuries-refined ergonomic solution to a specific materials-science problem.'
    }
  ],

  proTips: [
    {
      title: 'Thin-Film vs Bulk Gelation — Why 3-5mm Changes Everything',
      description: 'In a thick rice cake (>10mm), heat penetration creates a TEMPERATURE GRADIENT: the surface reaches 100°C while the center lags at 80-90°C. This gradient means the surface starch over-gels (amylose aligns into dense crystalline regions) while the center under-gels (amylose remains mostly amorphous). The result: a cake that is tough on the outside and gummy inside. At 3-5mm thickness, the Biot number (ratio of internal thermal resistance to surface thermal resistance) drops below 0.1, meaning the temperature is essentially UNIFORM across the film thickness — every starch granule experiences the same thermal history, producing a gel with uniform texture from surface to center.'
    },
    {
      title: 'Rice Flour Amylose Content — The 25% Sweet Spot',
      description: 'Regular rice flour contains ~25% amylose and ~75% amylopectin. This ratio is critical for bánh bèo: amylose provides the GEL NETWORK (linear chains that align and cross-link through hydrogen bonding, creating the firm, sliceable structure), while amylopectin provides WATER RETENTION (highly branched chains that hold water in the gel matrix, maintaining the moist, tender texture). Glutinous rice flour (~0-5% amylose, 95-100% amylopectin) produces a soft, sticky mass that cannot hold its shape. High-amylose flour (>30%) produces a brittle, dry gel that cracks. The 25% amylose point gives firm-but-tender — the defining bánh bèo texture.'
    },
    {
      title: 'Ceramic Saucer Thermal Mass — Controlled Cooling Kinetics',
      description: 'The ceramic saucer (chén) has a specific heat capacity of ~0.8 J/g·K and a mass of ~50g, giving it a thermal mass of ~40 J/K. After steaming, this stored thermal energy keeps the bánh bèo above 60°C for 5-8 minutes — the window during which toppings are applied. As the saucer slowly cools from 100°C to 40°C, the rice gel undergoes CONTROLLED RETROGRADATION: the amylose chains gradually re-align into a more ordered structure, increasing gel firmness by 20-30%. This retrogradation is DESIRABLE — it converts the just-steamed gel (soft, fragile) into a room-temperature gel (firm, scrapeable) that can withstand the spatula without tearing. The ceramic saucer is the THERMAL BUFFER that controls this firming rate.'
    },
    {
      title: 'Single-Bite Information Theory — No Redundant Bites',
      description: 'In a large shared dish, individual bites vary randomly — one bite gets extra shrimp, another gets only rice, a third gets too much sauce. Information theory calls this CHANNEL NOISE: the intended flavor signal (the chef\'s recipe) is corrupted by the random geometry of each bite. Bánh bèo eliminates channel noise through PORTIONING: each disc is a pre-assembled, quality-controlled unit where the topping-to-cake ratio is fixed at the design stage. Every bite delivers an identical signal-to-noise ratio. This is the same principle behind sushi (portioned by the chef, consumed as-designed) versus sashimi served on a shared plate (bite composition varies by diner). Huế cuisine\'s miniaturization tradition is fundamentally an exercise in REDUCING INFORMATIONAL ENTROPY in the eating experience.'
    },
    {
      title: 'Scallion Oil Chromatic Contrast — Green on White Semiotics',
      description: 'The bright green scallion oil drops on the white translucent disc create a color contrast ratio of approximately 5:1 to 8:1 (measured as relative luminance difference). This exceeds the WCAG 2.0 accessibility guideline of 4.5:1 for text readability — the food is, literally, "readable" at the color contrast level. This high contrast serves a SIGNALING function in street food contexts: from 2-3 meters away, a customer can assess freshness by the vividity of the green (faded green = old oil = stale) and abundance by the coverage of green dots (sparse = stingy vendor). The visual design of bánh bèo is a QUALITY COMMUNICATION SYSTEM optimized for the market context.'
    }
  ],

  nutritionFacts: {
    servingSize: '8-10 pieces (approximately 200g)',
    calories: 280,
    totalFat: '12g',
    saturatedFat: '4g',
    cholesterol: '45mg',
    sodium: '680mg',
    totalCarbohydrate: '35g',
    dietaryFiber: '1g',
    totalSugars: '3g',
    protein: '10g',
    vitaminD: '0mcg',
    calcium: '35mg',
    iron: '1.5mg',
    potassium: '180mg'
  },

  relatedRecipes: [
    {
      title: 'Bánh Nậm',
      slug: 'banh-nam',
      image: '/images/recipes/banh-nam.jpg',
      description: 'The flat cousin — banana leaf-steamed rice cake'
    },
    {
      title: 'Bánh Lọc Huế',
      slug: 'banh-loc-hue',
      image: '/images/recipes/banh-loc-hue.jpg',
      description: 'Translucent tapioca dumplings — another Huế miniature'
    },
    {
      title: 'Nem Lụi Huế',
      slug: 'nem-lui-hue',
      image: '/images/recipes/nem-lui-hue.jpg',
      description: 'Lemongrass pork skewers — participatory Huế eating'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Bánh Bèo Chén — Huế Steamed Rice Cakes in Saucers',
    description: 'Thin-film rice gel miniatures in concave ceramic saucers with dried shrimp floss, glass-transition pork cracklings, and chlorophyll-infused scallion oil — surface tension-engineered single-bite architecture from imperial Huế.',
    image: '/images/recipes/banh-beo-chen.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT30M',
    cookTime: 'PT30M',
    totalTime: 'PT60M',
    recipeYield: '6 servings (48-60 pieces)',
    recipeCategory: 'Appetizer',
    recipeCuisine: 'Vietnamese',
    keywords: 'bánh bèo, hue rice cake, steamed rice cake, vietnamese appetizer, hue street food, banh beo chen, miniature food, imperial cuisine',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '280 calories',
      fatContent: '12g',
      proteinContent: '10g',
      carbohydrateContent: '35g'
    },
    recipeIngredient: [
      '200g rice flour',
      '30g tapioca starch',
      '100g dried shrimp',
      '150g pork fatback for cracklings',
      '6 scallion stalks for scallion oil',
      'Fish sauce, lime, sugar, chili for dipping sauce'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Prepare rice batter at 15-18% starch solids concentration' },
      { '@type': 'HowToStep', text: 'Process dried shrimp into 2-4mm particle size floss' },
      { '@type': 'HowToStep', text: 'Cold-start render pork fatback into glass-state cracklings' },
      { '@type': 'HowToStep', text: 'Infuse scallion chlorophyll into oil at 130-140°C' },
      { '@type': 'HowToStep', text: 'Steam thin-film batter in oiled ceramic saucers 5-7 minutes' },
      { '@type': 'HowToStep', text: 'Assemble toppings at 30:70 topping-to-cake ratio' },
      { '@type': 'HowToStep', text: 'Serve with bamboo spatula for clean gel-ceramic delamination' }
    ]
  }
};

export default function BanhBeoChenPage() {
  return <RecipeLayout recipe={recipeData} />;
}
