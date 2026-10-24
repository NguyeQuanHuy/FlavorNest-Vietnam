'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Bánh Lọc Huế',
  subtitle: 'Huế Translucent Tapioca Dumplings with Shrimp & Pork',
  heroImage: '/images/recipes/banh-loc-hue.jpg',
  region: 'Central' as const,
  difficulty: 'Hard',
  prepTime: '1 hr',
  cookTime: '45 min',
  totalTime: '1 hr 45 min',
  servings: 30,
  rating: 4.8,
  reviewCount: 187,
  calories: 320,
  tags: ['Huế', 'Dumplings', 'Tapioca', 'Royal Cuisine', 'Steamed', 'Street Food'],

  introduction: {
    paragraphs: [
      "Bánh Lọc is Huế\'s most optically miraculous creation — translucent tapioca dumplings that reveal their jewel-like shrimp and pork filling through a wrapper so clear it approaches the refractive index of water itself. The word \"lọc\" means \"to filter\" or \"to clarify,\" and the name is the recipe: a wrapper engineered to filter out opacity while preserving structural integrity sufficient to survive steaming, folding, and the journey from banana leaf to chopstick to mouth.",
      "This is Huế culinary philosophy distilled to its essence — the cung đình (royal court) obsession with refinement pushed to its thermodynamic limit. Where other dumpling traditions celebrate the wrapper as a substantial element, Bánh Lọc treats it as a transparent vehicle designed to disappear visually while remaining texturally present. The filling is not hidden inside the wrapper — it is displayed through it, like a gemstone behind glass.",
      "Bánh Lọc exists in two canonical formats that share identical dough but diverge at the thermal processing step: Bánh Lọc Trần (\"naked\" — boiled directly in water) and Bánh Lọc Gói (wrapped in banana leaf and steamed). This dual-format architecture from identical raw material is a masterclass in how cooking medium transforms texture from the same molecular starting point."
    ]
  },

  ingredients: [
    {
      group: 'Tapioca Wrapper Dough',
      items: [
        { name: 'Tapioca starch (bột năng)', amount: '400g', note: 'Must be >95% amylopectin for maximum transparency' },
        { name: 'Boiling water', amount: '320ml', note: '100°C — critical for complete gelatinization' },
        { name: 'Cooking oil', amount: '2 tbsp', note: 'Plasticizer preventing amylopectin re-association' },
        { name: 'Fine salt', amount: '½ tsp' },
      ]
    },
    {
      group: 'Shrimp & Pork Filling',
      items: [
        { name: 'Fresh shrimp', amount: '300g', note: 'Shell-on, head-on preferred for astaxanthin extraction' },
        { name: 'Pork belly', amount: '200g', note: 'Skin-on, 3mm dice for collagen gelatin' },
        { name: 'Shallots, minced', amount: '4 bulbs' },
        { name: 'Garlic, minced', amount: '4 cloves' },
        { name: 'Fish sauce', amount: '2 tbsp' },
        { name: 'Sugar', amount: '1 tbsp' },
        { name: 'Ground black pepper', amount: '1 tsp' },
        { name: 'Annatto oil (dầu điều)', amount: '2 tbsp', note: 'Bixin-norbixin carotenoid color amplifier' },
        { name: 'Cooking oil', amount: '2 tbsp' },
      ]
    },
    {
      group: 'Banana Leaf Wrapping (for Bánh Lọc Gói)',
      items: [
        { name: 'Banana leaves', amount: '20 sheets', note: 'Cut 15×20cm, briefly blanched' },
        { name: 'Cooking oil for brushing', amount: '2 tbsp' },
      ]
    },
    {
      group: 'Nước Chấm Dipping Sauce',
      items: [
        { name: 'Fish sauce', amount: '3 tbsp' },
        { name: 'Lime juice', amount: '2 tbsp' },
        { name: 'Sugar', amount: '2 tbsp' },
        { name: 'Water', amount: '3 tbsp' },
        { name: 'Garlic, minced', amount: '2 cloves' },
        { name: 'Fresh chili, sliced', amount: '2 pieces' },
      ]
    },
    {
      group: 'Tôm Chua Accompaniment (Optional)',
      items: [
        { name: 'Tôm chua Huế (fermented shrimp paste)', amount: '100g', note: 'Lactobacillus-fermented, 3-7 day cure' },
        { name: 'Thinly sliced pork belly (boiled)', amount: '100g' },
        { name: 'Star fruit or green banana slices', amount: '1 piece' },
        { name: 'Fresh herbs (rau răm, tía tô)', amount: '1 bunch' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Shrimp Preparation — Astaxanthin Liberation Protocol',
      details: 'Peel shrimp, reserving shells and heads. Devein. Cut each shrimp into 2-3 pieces depending on size. The shells and heads contain astaxanthin bound to crustacyanin protein — pound them with 2 tbsp oil in mortar, then strain through fine mesh to extract vivid orange annatto-amplified fat. This astaxanthin oil will be added to the filling for color that remains visible through the translucent wrapper.',
      time: '15 min',
      tip: 'Astaxanthin is fat-soluble — you MUST extract it into oil, not water. The protein-bound form is gray-blue; liberation by heat or mechanical disruption releases the free carotenoid\'s characteristic red-orange. This color shift will be visible through the gelatinized tapioca wrapper — the filling essentially "glows" through its transparent casing.'
    },
    {
      step: 2,
      title: 'Pork Belly Processing — Collagen Gelatin Pre-Engineering',
      details: 'Cut pork belly into precise 3mm dice including skin. The skin is not optional — it contains Type I and III collagen that will partially hydrolyze during cooking (beginning at 70°C, completing by 85°C), converting to gelatin that acts as a thermal adhesive binding the filling into a cohesive mass rather than loose particles. This gelatin sets upon cooling to ~25°C, creating a self-contained filling unit.',
      time: '10 min',
      tip: 'The 3mm dice is a surface-area optimization: too large and collagen conversion is incomplete in the steaming window; too small and the pork renders to mush. At 3mm, the collagen-to-gelatin conversion reaches 60-70% completion during the 15-minute steam cycle.'
    },
    {
      step: 3,
      title: 'Filling Sauté — Maillard-Caramelization Dual Browning',
      details: 'Heat oil + annatto oil in pan over high heat until shimmering (180°C surface). Sauté shallots and garlic until golden — this is simultaneous Maillard reaction (amino acids + reducing sugars, 140-165°C) and caramelization (sugar pyrolysis, 160-180°C). Add pork belly, cook 3-4 minutes until fat renders and edges brown. Add shrimp pieces, cook 1-2 minutes until just pink — do NOT fully cook them as they will cook again during steaming. Season with fish sauce, sugar, pepper. Add astaxanthin oil. Toss to coat. Cool completely before wrapping.',
      time: '15 min',
      tip: 'The filling MUST be completely cool before wrapping — warm filling will pre-gelatinize the dough at the contact interface, creating an opaque zone that destroys the transparency effect. Temperature differential is everything.'
    },
    {
      step: 4,
      title: 'Dough Hydration — Amylopectin Gelatinization Threshold',
      details: 'Place tapioca starch and salt in a large bowl. Bring water to a ROLLING boil — not simmering, not steaming, but 100°C with active convection currents. Pour boiling water into starch in ONE stream while stirring vigorously with chopsticks. The starch granules must absorb water above their gelatinization temperature (60-70°C for tapioca) in a single hydration event. Immediately begin kneading once cool enough to handle — add oil during kneading. Knead 8-10 minutes until completely smooth, translucent, and elastic.',
      time: '15 min',
      tip: 'Tapioca starch is >95% amylopectin with <5% amylose. This ratio is the KEY to transparency: amylose molecules are linear chains that scatter light through crystalline junction zones; amylopectin\'s branched architecture cannot form these scattering centers, producing a gel that transmits light at >85% in the visible spectrum (400-700nm). Using wheat or rice flour would introduce amylose and destroy transparency.'
    },
    {
      step: 5,
      title: 'Dough Resting — Polymer Chain Relaxation',
      details: 'Cover dough with damp cloth and rest 15 minutes. During this interval, the gelatinized amylopectin chains undergo stress relaxation — mechanical kneading aligns polymer chains under tension; resting allows entropic recoil to a more random configuration. This eliminates elastic memory that would cause the rolled dough to spring back, making sheeting to <1mm thickness possible.',
      time: '15 min',
      tip: 'If dough is too sticky, your hands are too warm — wet them with cold water, not starch. Adding dry starch creates ungelatinized pockets that appear as white opaque spots in the finished dumpling, destroying the transparency you engineered in step 4.'
    },
    {
      step: 6,
      title: 'Sheeting — Sub-Millimeter Optical Window Engineering',
      details: 'Divide dough into 30 portions (~20g each). Roll each into a ball, then flatten on oiled surface to a disc approximately 8cm diameter and 0.8-1.0mm thickness. The disc must be uniformly thin — any thick zone will appear more opaque due to increased optical path length through the gel matrix. Work quickly as exposed dough loses moisture and develops surface opacity.',
      time: '20 min',
      tip: 'Transparency follows Beer-Lambert law: absorbance increases linearly with path length. A 2mm wrapper transmits roughly half the light of a 1mm wrapper through the same gel matrix. The target is 0.8-1.0mm — thin enough for >80% light transmission, thick enough to maintain structural integrity during folding.'
    },
    {
      step: 7,
      title: 'Assembly — Bánh Lọc Trần (Naked Boiled Format)',
      details: 'For Bánh Lọc Trần: place 1 tablespoon filling in center of disc. Fold in half to create a half-moon shape. Press edges firmly to seal — the gelatinized starch is self-adhesive when pressed with sufficient force (the amylopectin chains interpenetrate across the contact interface through reptation). Crimp edges decoratively if desired. Set on oiled tray.',
      time: '20 min',
      tip: 'The self-sealing mechanism relies on polymer chain reptation: when two surfaces of gelatinized amylopectin are pressed together, individual chains diffuse across the boundary like snakes slithering through grass. Given sufficient contact pressure and time (~3 seconds of firm pinch), the interface achieves ~70% of bulk tensile strength — enough to survive boiling.'
    },
    {
      step: 8,
      title: 'Assembly — Bánh Lọc Gói (Banana Leaf Steamed Format)',
      details: 'For Bánh Lọc Gói: brush banana leaf rectangle with thin oil film. Place dough disc on leaf, add filling, fold dough. Then fold banana leaf into a rectangular packet — first fold long sides over, then fold ends underneath. The banana leaf creates an enclosed steam chamber that cooks the dumpling in its own micro-environment.',
      time: '20 min',
      tip: 'The banana leaf is not just wrapping — it is a volatile transfer medium. During steaming, the leaf releases 2-acetyl-1-pyrroline (the same compound that makes basmati rice and pandan aromatic), eugenol (clove-like), and hexanal (fresh green) into the enclosed steam chamber. These volatiles condense onto the dumpling surface, infusing flavors that boiled-format dumplings never acquire.'
    },
    {
      step: 9,
      title: 'Cooking — Dual Thermal Processing',
      details: 'For Bánh Lọc Trần: bring large pot of water to gentle boil. Slide dumplings in, 8-10 at a time. They sink initially then FLOAT when done — this is a density phase transition: raw dough is denser than water (ρ > 1.0 g/cm³); full gelatinization + steam bubble incorporation drops density below water. Cook 1 minute after floating. Remove with slotted spoon to oiled plate. For Bánh Lọc Gói: arrange packets in steamer, steam over high heat 15 minutes.',
      time: '20 min',
      tip: 'The float test is a built-in thermodynamic doneness indicator. Raw tapioca gel contains residual crystalline regions that are denser; complete gelatinization melts these crystals while steam nucleation creates micro-bubbles trapped in the gel network. The combined effect crosses the buoyancy threshold at exactly the moment cooking completes — nature\'s timer.'
    },
    {
      step: 10,
      title: 'Nước Chấm — Ionic Strength Balancing',
      details: 'Dissolve sugar in warm water. Add fish sauce, lime juice. The ratio is calibrated for Huế palate — slightly saltier and less sweet than Southern nước chấm. Add garlic and chili. Rest 5 minutes for allicin development (alliinase enzyme converts alliin to allicin upon cellular disruption, peaking at 5-10 minutes). Serve in individual dipping bowls.',
      time: '5 min',
      tip: 'Huế nước chấm has a higher fish sauce-to-sugar ratio than Saigon\'s version — this is not accidental. The translucent, delicately flavored wrapper requires a more assertive sauce to provide gustatory contrast. A sweet sauce would create flavor monotony; the salt-forward Huế profile creates a perceptual "frame" that makes the wrapper\'s subtle sweetness perceptible through simultaneous contrast.'
    },
    {
      step: 11,
      title: 'Plating & Tôm Chua Assembly',
      details: 'Arrange Bánh Lọc Trần on a plate brushed with oil (prevents adhesion). Unwrap Bánh Lọc Gói partially, leaving banana leaf as a serving vessel. Serve with nước chấm, tôm chua (fermented shrimp paste), sliced boiled pork belly, star fruit, and fresh herbs. The traditional Huế presentation includes BOTH formats on the same plate — the naked and the wrapped side by side, inviting comparison of how thermal processing medium transforms identical dough.',
      time: '5 min',
      tip: 'Tôm chua is Huế\'s signature lacto-fermented condiment — whole shrimp cured with garlic, galangal, and chili for 3-7 days. The Lactobacillus fermentation produces lactic acid (pH 3.8-4.2), ethyl esters (fruity), and diacetyl (buttery). This living condiment provides a probiotic, funky dimension that industrially-produced sauces cannot replicate.'
    }
  ],

  proTips: [
    {
      title: 'The Amylopectin Transparency Principle',
      description: 'Tapioca starch is >95% amylopectin, the branched starch polymer. This is why it produces transparent gels while wheat flour (25-28% amylose) and rice flour (15-35% amylose) produce opaque ones. Amylose, being linear, readily aligns into crystalline junction zones that scatter visible light through Rayleigh scattering. Amylopectin\'s α-1,6 branch points every 20-25 glucose units prevent crystalline alignment, producing an amorphous gel with refractive index (n ≈ 1.34) nearly matching water (n = 1.33). The result: >85% light transmission through a 1mm gel layer.'
    },
    {
      title: 'Retrograde Resistance & the Eating Window',
      description: 'Amylopectin retrogrades (re-crystallizes) 100-1,000× more slowly than amylose — but it DOES retrograde given enough time. At room temperature, Bánh Lọc remains optimally transparent for 2-3 hours before amylopectin branch-point crystallization begins creating visible haze. Refrigeration accelerates this crystallization dramatically (4°C is the maximum nucleation rate temperature for starch). This is why Bánh Lọc must be eaten fresh — there is a thermodynamic clock ticking from the moment it leaves the steamer.'
    },
    {
      title: 'Banana Leaf Volatile Transfer Chemistry',
      description: 'Banana leaf contains 2-acetyl-1-pyrroline (popcorn/pandan aroma), trans-2-hexenal (green, fresh), eugenol (clove), and multiple lactones. During steaming at 100°C, these volatiles sublimate from the leaf surface, dissolve into the steam phase, then condense onto the cooler dumpling surface. The enclosed packet creates a closed-system distillation chamber with no volatile loss — the dumpling absorbs 100% of released aromatics. This is why Bánh Lọc Gói has a complex fragrance that Bánh Lọc Trần, boiled in open water where volatiles escape to atmosphere, simply cannot match.'
    },
    {
      title: 'Astaxanthin Thermochromism Through Glass',
      description: 'Raw shrimp are gray-blue because astaxanthin is bound to crustacyanin protein, which distorts the carotenoid\'s conjugated double-bond system. Heating to 60-70°C denatures crustacyanin, releasing free astaxanthin with its native absorption peak at 478nm (red-orange). In Bánh Lọc, this color transformation happens INSIDE the transparent wrapper during cooking — you can literally watch the filling change color through the glass-like casing. This chromatic display is part of the aesthetic experience Huế cooks engineered.'
    },
    {
      title: 'Huế\'s Dual-Format Architectural Philosophy',
      description: 'Bánh Lọc Trần (boiled) and Bánh Lọc Gói (steamed in leaf) demonstrate how identical raw material diverges through processing. Boiling creates a firmer, more elastic texture: the dough hydrates further in excess water, and the mechanical agitation of boiling aligns polymer chains. Steaming produces a softer, more yielding texture: limited water availability (only steam condensation) means less total hydration, while the gentle thermal environment preserves more of the kneaded dough\'s original amorphous structure. Same dough, same filling, fundamentally different eating experiences.'
    },
    {
      title: 'The Collagen Gelatin Binding System',
      description: 'Pork belly skin collagen converts to gelatin beginning at 70°C. Inside the sealed dumpling, this gelatin performs a critical structural function: upon cooling below ~25°C (or even at serving temperature), it forms a loose gel network that binds the discrete shrimp pieces and pork dice into a cohesive filling mass. Without skin-on pork belly, the filling is loose particles that scatter when bitten — with it, the filling holds together as a unified unit that can be cleanly bitten through.'
    }
  ],

  nutritionFacts: {
    servingSize: '3 pieces (approximately 120g)',
    calories: 320,
    totalFat: '12g',
    saturatedFat: '4g',
    cholesterol: '85mg',
    sodium: '680mg',
    totalCarbohydrate: '42g',
    dietaryFiber: '1g',
    totalSugars: '3g',
    protein: '12g',
    vitaminD: '0.5mcg',
    calcium: '35mg',
    iron: '2.1mg',
    potassium: '180mg'
  },

  relatedRecipes: [
    {
      title: 'Bánh Bèo Chén',
      slug: 'banh-beo-chen',
      image: '/images/recipes/banh-beo-chen.jpg',
      description: 'Steamed rice cakes in small dishes — Huế\'s other translucent delicacy'
    },
    {
      title: 'Bánh Nậm',
      slug: 'banh-nam',
      image: '/images/recipes/banh-nam.jpg',
      description: 'Flat steamed rice dumplings in banana leaf — the sister wrapper'
    },
    {
      title: 'Bún Bò Huế',
      slug: 'bun-bo-hue',
      image: '/images/recipes/bun-bo-hue.jpg',
      description: 'Huế\'s iconic spicy beef noodle soup — the city\'s flagship'
    }
  ],

  schpiresearchData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Bánh Lọc Huế — Huế Translucent Tapioca Dumplings',
    description: 'Translucent tapioca dumplings filled with shrimp and pork belly — Huế royal cuisine\'s most optically engineered creation, available in boiled (trần) and banana-leaf steamed (gói) formats.',
    image: '/images/recipes/banh-loc-hue.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT60M',
    cookTime: 'PT45M',
    totalTime: 'PT105M',
    recipeYield: '30 dumplings',
    recipeCategory: 'Main Course',
    recipeCuisine: 'Vietnamese',
    keywords: 'bánh lọc, huế dumplings, tapioca dumplings, vietnamese dumplings, royal cuisine, cung đình, translucent dumplings, bánh lọc trần, bánh lọc gói',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '320 calories',
      fatContent: '12g',
      proteinContent: '12g',
      carbohydrateContent: '42g'
    },
    recipeIngredient: [
      '400g tapioca starch',
      '320ml boiling water',
      '300g fresh shrimp',
      '200g pork belly',
      '4 shallots',
      '2 tbsp annatto oil',
      '2 tbsp fish sauce',
      '20 banana leaf sheets',
      'Nước chấm dipping sauce'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Extract astaxanthin from shrimp shells into oil for color' },
      { '@type': 'HowToStep', text: 'Dice pork belly with skin for collagen gelatin binding' },
      { '@type': 'HowToStep', text: 'Sauté filling with annatto oil, cool completely' },
      { '@type': 'HowToStep', text: 'Hydrate tapioca starch with 100°C water for full gelatinization' },
      { '@type': 'HowToStep', text: 'Rest dough 15 minutes for polymer chain relaxation' },
      { '@type': 'HowToStep', text: 'Sheet to 0.8-1.0mm for optimal light transmission' },
      { '@type': 'HowToStep', text: 'Fill and seal using amylopectin reptation self-adhesion' },
      { '@type': 'HowToStep', text: 'Wrap in banana leaf for volatile transfer steaming' },
      { '@type': 'HowToStep', text: 'Boil trần format until float test triggers; steam gói 15 minutes' },
      { '@type': 'HowToStep', text: 'Serve both formats with nước chấm and tôm chua' }
    ]
  }
};

export default function BanhLocHuePage() {
  return <RecipeLayout recipe={recipeData} />;
}
