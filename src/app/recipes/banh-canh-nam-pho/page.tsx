'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Bánh Canh Nam Phổ',
  subtitle: 'Nam Phổ Village Tapioca Noodle Soup with Crab & Pork Knuckle',
  heroImage: '/images/recipes/banh-canh-nam-pho.jpg',
  region: 'Central' as const,
  difficulty: 'Hard',
  prepTime: '1 hr',
  cookTime: '2 hr 30 min',
  totalTime: '3 hr 30 min',
  servings: 6,
  rating: 4.8,
  reviewCount: 176,
  calories: 520,
  tags: ['Huế', 'Noodle Soup', 'Crab', 'Pork Knuckle', 'Tapioca Noodles', 'Village Heritage'],

  introduction: {
    paragraphs: [
      "Bánh Canh Nam Phổ is named after a small village 8km south of Huế\'s citadel — a place so deeply associated with this dish that the village IS the recipe\'s identity. What distinguishes Nam Phổ\'s version from every other bánh canh in Vietnam is the BROTH VISCOSITY ENGINEERING: a collagen-dense pork knuckle broth thickened further by starch leaching from the tapioca noodles during cooking, creating a liquid that sits at the boundary between soup and sauce — too thick for drinking, too thin for coating, existing in a rheological no-man\'s-land that clings to noodles with unprecedented tenacity.",
      "The noodle itself is the dish\'s structural thesis: bánh canh noodles are extruded from tapioca starch dough (sometimes blended with rice flour), producing thick, cylindrical strands 3-5mm in diameter with a translucent, chewy-slippery texture impossible to achieve with wheat or rice noodles alone. The amylopectin-dominant tapioca creates a gel network that is simultaneously elastic (bounces back when bitten) and plastic (deforms permanently when chewed past yield point) — a dual mechanical behavior that wheat gluten networks cannot replicate.",
      "The crab component elevates this village dish to royal-court complexity: fresh field crab (cua đồng) is pounded, strained, and heated to form crab custard (riêu cua) — a heat-set protein foam that floats on the broth surface like savory meringue islands. This foam is 70-80% air by volume, a protein matrix that traps crab flavor in an architecture designed to dissolve on the tongue, releasing concentrated umami in a single burst rather than the gradual diffusion of flavor from solid meat."
    ]
  },

  ingredients: [
    {
      group: 'Pork Knuckle Collagen Broth',
      items: [
        { name: 'Pork knuckle (giò heo)', amount: '1 kg', note: 'Front knuckle preferred — higher collagen-to-meat ratio' },
        { name: 'Pork bones', amount: '500g' },
        { name: 'Shallots, charred', amount: '4 bulbs', note: 'Dry-charred for Maillard melanoidin color' },
        { name: 'Ginger, charred', amount: '50g' },
        { name: 'Lemongrass stalks, bruised', amount: '3 stalks' },
        { name: 'Fish sauce', amount: '3 tbsp' },
        { name: 'Sugar', amount: '1 tbsp' },
        { name: 'Salt', amount: 'to taste' },
        { name: 'Annatto oil', amount: '2 tbsp', note: 'Bixin orange-red broth coloring' },
        { name: 'Shrimp paste (mắm ruốc Huế)', amount: '1 tbsp' },
      ]
    },
    {
      group: 'Crab Custard (Riêu Cua)',
      items: [
        { name: 'Fresh field crabs (cua đồng)', amount: '500g', note: 'Or 200g crab paste if unavailable' },
        { name: 'Water for blending', amount: '500ml' },
        { name: 'Scallion, minced', amount: '2 stalks' },
        { name: 'Fish sauce', amount: '1 tbsp' },
      ]
    },
    {
      group: 'Bánh Canh Noodles',
      items: [
        { name: 'Fresh bánh canh noodles (tapioca)', amount: '800g', note: 'Thick, round, translucent strands' },
        { name: 'Or: tapioca starch', amount: '400g', note: 'For homemade: 70% tapioca, 30% rice flour' },
        { name: 'Rice flour (for homemade)', amount: '170g' },
        { name: 'Boiling water (for homemade)', amount: '400ml' },
        { name: 'Salt', amount: '½ tsp' },
      ]
    },
    {
      group: 'Toppings',
      items: [
        { name: 'Chả Huế (Huế pork sausage)', amount: '200g', note: 'Sliced — emulsified pork forcemeat' },
        { name: 'Quail eggs, boiled', amount: '12 pieces' },
        { name: 'Fried shallots', amount: '4 tbsp' },
        { name: 'Scallions, sliced', amount: '4 stalks' },
        { name: 'Fresh chili, sliced', amount: '4 pieces' },
        { name: 'Black pepper', amount: '1 tsp' },
        { name: 'Chili oil', amount: '2 tbsp' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Pork Knuckle Blanch — Albumin Purge Protocol',
      details: 'Place pork knuckle and bones in cold water. Bring to rolling boil for 5 minutes — the surface temperature jump causes rapid denaturation of water-soluble albumin proteins, which coagulate into gray scum on the surface. Discard water completely. Rinse knuckle and bones under cold running water, scrubbing off any residual coagulated protein clinging to bone surfaces. This blanch removes blood proteins, water-soluble impurities, and lipid oxidation products that would otherwise cloud the final broth and contribute off-flavors.',
      time: '10 min',
      tip: 'The cold-start blanch is more effective than adding meat to already-boiling water. Cold-start allows the interior to heat gradually, giving water-soluble albumin time to dissolve into the water BEFORE it denatures. If you add meat to boiling water, the surface proteins denature immediately, forming a sealed crust that traps interior albumin — it will later leach out slowly during the long simmer, creating persistent cloudiness impossible to skim.'
    },
    {
      step: 2,
      title: 'Collagen Extraction Simmer — Type I/III Hydrolysis Kinetics',
      details: 'Place blanched knuckle and bones in clean pot with 3L cold water. Add charred shallots and ginger (charring drives surface Maillard reactions producing melanoidins that contribute amber color and caramel-bitter flavor depth to broth). Add bruised lemongrass. Bring to boil, then IMMEDIATELY reduce to gentle simmer (90-95°C). Simmer 2-2.5 hours. Pork knuckle contains 25-35% collagen by dry weight — Type I (tensile strength) and Type III (elasticity) collagen in the connective tissue surrounding the joint begin hydrolysis to gelatin at 75°C, with conversion rate doubling for every 10°C increase. At 90°C, approximately 70-80% conversion occurs in 2 hours.',
      time: '2 hr 30 min',
      tip: 'The broth\'s final viscosity is determined during this step. Gelatin concentration above 1% by weight produces visible body (the broth clings to a spoon); above 3% it becomes syrupy. A single pork knuckle in 3L water typically produces 1.5-2.5% gelatin concentration — the sweet spot for bánh canh broth that coats noodles without being gelatinous. If using pork leg bone instead of knuckle, the gelatin yield drops 40-60% because leg bone has less surrounding connective tissue. The knuckle\'s joint capsule and tendons are the primary gelatin sources.'
    },
    {
      step: 3,
      title: 'Crab Custard Formation — Heat-Set Protein Foam Architecture',
      details: 'If using whole crabs: clean, remove top shell and gills, pound in mortar with 500ml water, strain through fine mesh — discard solids. If using crab paste: dissolve 200g paste in 500ml cold water, stir thoroughly. The crab liquid contains dissolved myosin, actin, and hemocyanin (copper-based blood protein). Add to a pot of COLD broth or water. Heat SLOWLY from cold — as temperature rises through 60-75°C, the dissolved proteins denature and aggregate, trapping air bubbles from the gentle stirring into a protein foam matrix. This foam floats to surface as a cohesive raft — the riêu cua.',
      time: '15 min',
      tip: 'Starting from COLD is mandatory. If you add crab liquid to hot broth, the proteins denature instantly at the surface of each droplet — they form micro-particles that disperse through the broth as cloudiness rather than aggregating into a cohesive foam raft. The slow-heat method allows protein chains to unfold gradually, find each other through Brownian motion, and form large intermolecular networks (β-sheet aggregation) that are strong enough to trap and hold gas bubbles. This is the same principle as clarifying consommé with egg white raft.'
    },
    {
      step: 4,
      title: 'Broth Seasoning — Annatto-Mắm Ruốc Flavor Axis',
      details: 'Remove pork knuckle from broth (reserve — it will be sliced for topping). Strain broth. Return to pot. Stir in annatto oil — the bixin carotenoid dissolves into the fat phase of the broth, producing the characteristic deep orange-red color of Nam Phổ bánh canh. Add mắm ruốc Huế, fish sauce, sugar. The mắm ruốc provides a bass-note umami (fermented protein hydrolysate) underneath the crab\'s high-note umami (free glutamate + nucleotides). Season to taste — the broth should taste slightly saltier than ideal, because the noodles will absorb salt and dilute seasoning when added.',
      time: '10 min',
      tip: 'Annatto\'s bixin is fat-soluble — it only dissolves in the lipid fraction of the broth. This is why annatto oil (pre-dissolved in fat) works while raw annatto seeds added to aqueous broth would barely color it. The bixin molecules partition into fat globules, which then disperse through the broth as an emulsion stabilized by the gelatin. The color is therefore an EMULSION color — tiny orange fat droplets suspended in aqueous gelatin — which is why the broth appears uniformly orange rather than having oil slicks on top.'
    },
    {
      step: 5,
      title: 'Noodle Preparation — Amylopectin-Amylose Dual Network',
      details: 'If using fresh noodles: blanch briefly in boiling water for 30 seconds, drain. If making from scratch: combine 400g tapioca starch + 170g rice flour + salt. Pour 400ml boiling water in, stir with chopsticks, knead until smooth (8-10 min). Rest 15 min. Roll into thick ropes, cut into 5cm lengths. The dual-starch system creates a composite network: tapioca amylopectin provides elasticity and translucency (branched chains resist alignment = no opacity), while rice amylose provides structural rigidity (linear chains form crystalline junction zones = bite resistance). The 70:30 ratio balances chew and firmness.',
      time: '20 min (fresh) or 40 min (homemade)',
      tip: 'Pure tapioca noodles are too elastic — they bounce back endlessly when bitten, like chewing gum. Pure rice noodles are too brittle — they snap cleanly with no chew. The 70:30 tapioca:rice blend creates a BIPHASIC gel network: amylopectin provides the continuous elastic phase, while amylose crystallites act as rigid filler particles (analogous to rubber filled with carbon black). The crystallites create stress-concentration points that allow controlled failure — the noodle yields when bitten firmly but bounces back when bitten gently.'
    },
    {
      step: 6,
      title: 'Noodle-Broth Integration — Starch Leaching Viscosity Amplification',
      details: 'Add blanched noodles to the simmering broth for 2-3 minutes. During this brief cooking, the noodle surfaces release amylopectin into the broth — this starch leaching is not a defect but a DESIGN FEATURE. The dissolved amylopectin thickens the broth incrementally, adding 0.3-0.5% starch concentration to the existing gelatin viscosity. The combined gelatin + leached starch system creates a SYNERGISTIC viscosity — the two thickeners interact, with gelatin networks trapping starch granules, producing viscosity greater than the sum of individual contributions.',
      time: '3 min',
      tip: 'This starch-leaching step is why bánh canh broth has a unique "clingy" texture impossible to replicate by simply adding starch to pork broth. Pre-dissolved starch creates uniform viscosity; leached starch creates GRADIENT viscosity — highest near the noodle surfaces (where leaching is concentrated) and lowest in the free broth between noodles. This gradient means the broth clings more tightly to the noodles than to the spoon, selectively coating the noodles with a thicker flavor layer.'
    },
    {
      step: 7,
      title: 'Pork Knuckle Slicing — Collagen Gelatin Cross-Section Reveal',
      details: 'Slice the reserved pork knuckle into 1cm-thick rounds. Each cross-section reveals the architectural layers: outer skin (Type I collagen → firm gelatin), subcutaneous fat (rendered but retained), connective tissue seams (Type III collagen → soft gelatin), and muscle fibers (myosin denatured → tender meat). These layers create a STRIATED texture when bitten — alternating firm-soft-firm as teeth pass through different tissue types.',
      time: '5 min',
      tip: 'The 1cm thickness is calibrated for the tissue-layer experience. Thinner slices collapse the layers into a single chew sensation; thicker slices separate the layers so far that they are experienced sequentially rather than simultaneously. At 1cm, all tissue types are present in every bite, creating the characteristic "composite" texture of perfectly braised knuckle — no single texture dominates.'
    },
    {
      step: 8,
      title: 'Bowl Assembly — Thermal Layering & Foam Placement',
      details: 'Place noodles in serving bowls. Arrange sliced pork knuckle, chả Huế slices, and halved quail eggs on noodles. Ladle HOT broth over (85-90°C). Gently place a portion of crab custard foam on top — the foam should float on the broth surface. Garnish with scallions, fried shallots, black pepper, chili oil. The crab custard MUST be placed LAST and GENTLY — it is a fragile protein foam that collapses under its own weight if submerged or roughly handled.',
      time: '5 min',
      tip: 'The crab custard floating on the surface creates a THERMAL INSULATION LAYER — air trapped in the foam has thermal conductivity 25× lower than water (0.025 vs 0.6 W/m·K). This foam lid reduces heat loss from the broth surface by 40-60%, keeping the broth hotter for longer. This is functional engineering disguised as garnish — the foam simultaneously delivers crab flavor AND maintains serving temperature.'
    }
  ],

  proTips: [
    {
      title: 'Gelatin-Starch Synergistic Viscosity — Why 1+1 = 3',
      description: 'Gelatin and starch thicken liquids through fundamentally different mechanisms: gelatin forms triple-helix junction zones that create a 3D network (a physical gel), while amylopectin thickens through volume exclusion (swollen granules crowd the liquid phase). When combined, gelatin helices wrap around starch granules, creating composite structures with higher effective volume than either component alone. Research shows gelatin-starch mixtures at 1.5%+0.5% concentration produce viscosity equivalent to 3.5% gelatin alone — a 40% efficiency gain. This synergy is the molecular basis of bánh canh broth\'s unique thickness.'
    },
    {
      title: 'Hemocyanin — The Copper Blood Protein That Makes Crab Foam Blue',
      description: 'Crab blood contains hemocyanin instead of hemoglobin — a copper-based oxygen carrier (vs iron-based in vertebrates). When dissolved crab juice is heated, hemocyanin denatures at 60-70°C, releasing copper ions that catalyze oxidation reactions contributing to the crab foam\'s characteristic yellow-orange color (copper oxidation states). The copper also acts as a protein cross-linker, strengthening the foam network — hemocyanin-containing foams are measurably stronger than foams from copper-free proteins at equivalent concentrations.'
    },
    {
      title: 'Nam Phổ Village — How Geography Becomes Recipe',
      description: 'Nam Phổ sits along a canal system connected to Tam Giang lagoon — Vietnam\'s largest coastal lagoon. The village historically had simultaneous access to lagoon crabs, river fish, and land-raised pigs, all within walking distance. This geographic convergence made the combination of pork knuckle + crab + tapioca noodles a practical inevitability rather than a creative invention. The dish was born from PROXIMITY: the three key ingredients all came from within 2km of the village\'s kitchens, before refrigeration made distance irrelevant.'
    },
    {
      title: 'Biphasic Gel Noodles — Engineering Controlled Bite Failure',
      description: 'The 70:30 tapioca:rice noodle is a composite material with two distinct phases: a continuous elastic phase (tapioca amylopectin network) containing rigid dispersed particles (rice amylose crystallites). Under low stress (gentle bite), the elastic phase deforms and recovers — the noodle bounces. Under high stress (firm bite), stress concentrations at the amylose crystallite interfaces initiate crack propagation — the noodle yields with a satisfying "give." This is the same engineering principle as rubber-toughened plastics: a compliant matrix with rigid inclusions that create predictable failure.'
    },
    {
      title: 'Annatto Emulsion Color — Why the Broth Glows',
      description: 'Bixin from annatto is dissolved in oil, then dispersed as micro-droplets in the gelatin-stabilized broth. These droplets are 1-10μm in diameter — within the Mie scattering regime for visible light. Each droplet acts as a tiny orange sphere that simultaneously absorbs blue-green light (bixin\'s complementary absorption) and scatters remaining wavelengths. The result: the broth appears to GLOW orange rather than simply being orange. The gelatin prevents droplet coalescence (Ostwald ripening), maintaining the micro-droplet dispersion that creates this optical effect throughout the serving window.'
    },
    {
      title: 'Quail Egg Geometry — Why Not Chicken Eggs',
      description: 'Quail eggs are not a luxury substitution — they serve a geometric purpose. At 10-12g each (vs 50-60g chicken egg), a halved quail egg creates a perfect single-bite portion that fits on a spoonful alongside noodles and broth. A halved chicken egg is 5× larger, requiring multiple bites and dominating the spoon. The quail egg\'s higher yolk-to-white ratio (32% vs 28% for chicken) also means more emulsified yolk fat dissolving into each spoonful of broth, creating localized richness zones in the bowl.'
    }
  ],

  nutritionFacts: {
    servingSize: '1 bowl (approximately 450g)',
    calories: 520,
    totalFat: '18g',
    saturatedFat: '6g',
    cholesterol: '210mg',
    sodium: '890mg',
    totalCarbohydrate: '62g',
    dietaryFiber: '2g',
    totalSugars: '4g',
    protein: '28g',
    vitaminD: '0.8mcg',
    calcium: '95mg',
    iron: '4.2mg',
    potassium: '450mg'
  },

  relatedRecipes: [
    {
      title: 'Bún Bò Huế',
      slug: 'bun-bo-hue',
      image: '/images/recipes/bun-bo-hue.jpg',
      description: 'Huế\'s iconic spicy beef noodle soup — the city\'s flagship'
    },
    {
      title: 'Bánh Lọc Huế',
      slug: 'banh-loc-hue',
      image: '/images/recipes/banh-loc-hue.jpg',
      description: 'Translucent tapioca dumplings — another amylopectin masterwork'
    },
    {
      title: 'Cơm Âm Phủ',
      slug: 'com-am-phu',
      image: '/images/recipes/com-am-phu.jpg',
      description: 'Huế\'s seven-component "Underworld Rice" platter'
    }
  ],

  schpiresearchData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Bánh Canh Nam Phổ — Nam Phổ Village Tapioca Noodle Soup',
    description: 'Thick tapioca noodles in collagen-dense pork knuckle broth with floating crab custard foam, sliced knuckle, Huế pork sausage, and quail eggs — the dish that made a village famous.',
    image: '/images/recipes/banh-canh-nam-pho.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT60M',
    cookTime: 'PT150M',
    totalTime: 'PT210M',
    recipeYield: '6 servings',
    recipeCategory: 'Main Course',
    recipeCuisine: 'Vietnamese',
    keywords: 'bánh canh, nam phổ, huế noodle soup, tapioca noodles, pork knuckle, crab custard, riêu cua, collagen broth, vietnamese soup',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '520 calories',
      fatContent: '18g',
      proteinContent: '28g',
      carbohydrateContent: '62g'
    },
    recipeIngredient: [
      '1kg pork knuckle',
      '500g pork bones',
      '500g fresh field crabs',
      '800g fresh bánh canh noodles',
      '200g chả Huế pork sausage',
      '12 quail eggs',
      '2 tbsp annatto oil',
      '1 tbsp mắm ruốc Huế'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Blanch pork knuckle with cold-start albumin purge' },
      { '@type': 'HowToStep', text: 'Simmer 2.5 hours for Type I/III collagen hydrolysis to gelatin' },
      { '@type': 'HowToStep', text: 'Form crab custard foam through slow-heat protein aggregation' },
      { '@type': 'HowToStep', text: 'Season broth with annatto-mắm ruốc flavor axis' },
      { '@type': 'HowToStep', text: 'Cook noodles in broth for starch-leaching viscosity amplification' },
      { '@type': 'HowToStep', text: 'Assemble bowls with floating crab foam thermal insulation' }
    ]
  }
};

export default function BanhCanhNamPhoPage() {
  return <RecipeLayout recipe={recipeData} />;
}
