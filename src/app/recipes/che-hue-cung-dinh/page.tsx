'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Chè Huế Cung Đình',
  subtitle: 'Huế Royal Court Sweet Soup — The Eight-Treasure Imperial Dessert',
  heroImage: '/images/recipes/che-hue-cung-dinh.jpg',
  region: 'Central' as const,
  difficulty: 'Hard',
  prepTime: '2 hr',
  cookTime: '1 hr',
  totalTime: '3 hr',
  servings: 8,
  rating: 4.9,
  reviewCount: 142,
  calories: 380,
  tags: ['Huế', 'Dessert', 'Royal Cuisine', 'Sweet Soup', 'Cung Đình', 'Banquet'],

  introduction: {
    paragraphs: [
      "Chè Huế Cung Đình is the imperial court\'s most extravagant dessert — an EIGHT-LAYER sweet soup served in individual porcelain bowls where each layer is a different color, texture, and flavor, stacked in precise chromatic order from dark base to pale crown. This is not a mixed dessert but a STRATIFIED ARCHITECTURE where density engineering determines position: heavier components sink, lighter ones float, and the sequence is designed to be excavated top-to-bottom by spoon, each layer revealing the next like geological strata.",
      "The dish traces to the Nguyễn dynasty court kitchens (1802-1945) where royal chefs competed to demonstrate mastery through refinement rather than abundance. Chè Cung Đình was the ultimate test — each of its eight components required a different cooking technique, a different starch system, a different sweetening approach, and a different coloring agent, all converging into a single bowl that displayed chromatic harmony, textural variety, and precise temperature control. A failed layer — one that sank when it should float, or bled color into its neighbor — was grounds for dismissal.",
      "The science behind this dessert is DENSITY-DRIVEN SELF-ASSEMBLY: each component is engineered to a specific density through its sugar concentration, starch content, and fat fraction. When carefully layered, the components maintain separation because denser layers cannot rise through lighter ones (Archimedes\' principle). The bowl becomes a stable density column — a culinary lava lamp in static equilibrium, where physics does the work of keeping eight flavors in their assigned positions."
    ]
  },

  ingredients: [
    {
      group: 'Layer 1 (Bottom): Đậu Xanh — Mung Bean Paste',
      items: [
        { name: 'Split mung beans (đậu xanh cà)', amount: '150g', note: 'Hulled — removes tannin-containing seed coat' },
        { name: 'Sugar', amount: '80g' },
        { name: 'Coconut milk', amount: '60ml' },
        { name: 'Pandan leaf', amount: '1 leaf', note: '2-acetyl-1-pyrroline aromatic' },
        { name: 'Salt', amount: 'pinch' },
      ]
    },
    {
      group: 'Layer 2: Đậu Đỏ — Red Bean',
      items: [
        { name: 'Red beans (đậu đỏ)', amount: '100g' },
        { name: 'Sugar', amount: '60g' },
        { name: 'Salt', amount: 'pinch' },
      ]
    },
    {
      group: 'Layer 3: Hạt Sen — Lotus Seeds',
      items: [
        { name: 'Dried lotus seeds', amount: '80g', note: 'Embryo removed — eliminates bitterness' },
        { name: 'Sugar', amount: '50g' },
        { name: 'Vanilla extract', amount: '½ tsp', note: 'Modern substitution for traditional hoa bưởi' },
      ]
    },
    {
      group: 'Layer 4: Bột Lọc Viên — Tapioca Pearls',
      items: [
        { name: 'Tapioca starch', amount: '100g' },
        { name: 'Boiling water', amount: '80ml' },
        { name: 'Pandan extract', amount: '1 tsp', note: 'Green coloring from chlorophyll a+b' },
        { name: 'Sugar syrup', amount: '60ml' },
      ]
    },
    {
      group: 'Layer 5: Thạch — Agar Jelly',
      items: [
        { name: 'Agar powder', amount: '8g' },
        { name: 'Water', amount: '400ml' },
        { name: 'Sugar', amount: '80g' },
        { name: 'Butterfly pea flower extract', amount: '2 tbsp', note: 'Anthocyanin pH-sensitive blue-purple' },
      ]
    },
    {
      group: 'Layer 6: Nhãn Nhục — Dried Longan',
      items: [
        { name: 'Dried longan flesh', amount: '80g', note: 'Maillard-browned during drying process' },
        { name: 'Sugar', amount: '40g' },
        { name: 'Water', amount: '200ml' },
      ]
    },
    {
      group: 'Layer 7: Nước Cốt Dừa — Coconut Cream Layer',
      items: [
        { name: 'Coconut cream (thick)', amount: '200ml', note: '>20% fat fraction' },
        { name: 'Sugar', amount: '30g' },
        { name: 'Tapioca starch', amount: '1 tbsp', note: 'Viscosity modifier preventing mixing' },
        { name: 'Salt', amount: '¼ tsp' },
        { name: 'Pandan leaf', amount: '1 leaf' },
      ]
    },
    {
      group: 'Layer 8 (Top): Topping Garnishes',
      items: [
        { name: 'Toasted sesame seeds', amount: '2 tbsp' },
        { name: 'Toasted coconut flakes', amount: '2 tbsp' },
        { name: 'Crushed roasted peanuts', amount: '2 tbsp' },
        { name: 'Pomegranate seeds (optional)', amount: '2 tbsp', note: 'Anthocyanin ruby color accent' },
      ]
    },
    {
      group: 'Master Sugar Syrup',
      items: [
        { name: 'Rock sugar (đường phèn)', amount: '200g', note: 'Sucrose crystal — cleaner sweetness than granulated' },
        { name: 'Water', amount: '300ml' },
        { name: 'Pandan leaves', amount: '2 leaves' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Master Sugar Syrup — Rock Sugar Dissolution Kinetics',
      details: 'Dissolve rock sugar in water over medium heat with pandan leaves. Rock sugar (đường phèn) is crystalline sucrose with larger crystal lattice than granulated sugar — dissolution requires more energy but produces a CLEANER sweetness because the slow dissolution process excludes molasses impurities that are trapped in granulated sugar\'s rapid crystallization. Heat until fully dissolved and slightly thickened (105°C — just above the thread stage). Remove pandan. This syrup will be used across multiple layers, providing unified sweetness character.',
      time: '15 min',
      tip: 'Rock sugar\'s perceived sweetness is 10-15% lower than granulated sugar at equal mass because its crystal purity excludes fructose (from inverted sucrose in molasses). This is DESIRABLE for chè cung đình — the royal court aesthetic demanded subtle sweetness, never cloying. The pandan leaves contribute 2-acetyl-1-pyrroline at low concentration (5-10 ppb) — below the conscious detection threshold for most people, it registers as an undefined "pleasant" quality rather than identifiable "pandan flavor."'
    },
    {
      step: 2,
      title: 'Layer 1: Mung Bean Paste — Amylose Retrogradation Paste',
      details: 'Soak split mung beans 2 hours. Steam or boil until completely soft (25-30 minutes). Mash while hot — the amylose chains are mobile in the gelatinized state and can be aligned into a smooth paste. Add sugar, coconut milk, pandan leaf, salt. Cook over low heat while stirring until the paste thickens and pulls away from the pot sides. This paste has the HIGHEST DENSITY of all layers (ρ ≈ 1.15-1.20 g/cm³) due to its low water content and high starch concentration — it forms the stable foundation of the density column.',
      time: '40 min',
      tip: 'Mashing while HOT is critical. As the paste cools below 60°C, amylose chains begin retrograding — re-aligning into crystalline regions that are insoluble and gritty. Once retrograded, no amount of re-mashing produces a smooth paste. The window for achieving velvet-smooth texture is during the first 10 minutes after cooking, while amylose chains are still mobile and can be mechanically disrupted into fine particles below the tongue\'s texture-detection threshold (~25μm).'
    },
    {
      step: 3,
      title: 'Layer 2: Red Bean — Controlled Hydration Architecture',
      details: 'Soak red beans overnight (12 hours minimum — the seed coat must fully hydrate for even cooking). Boil in fresh water until tender but NOT mushy — individual beans should hold their shape when scooped but yield to gentle pressure. This is the critical texture: the pectin-cellulose cell walls of each bean remain intact (providing structure) while the intracellular starch is fully gelatinized (providing creaminess). Sweeten with sugar and a pinch of salt. Drain excess liquid. Density: ρ ≈ 1.10-1.12 g/cm³.',
      time: '1 hr',
      tip: 'The overnight soak does more than hydrate — it initiates enzymatic softening of the pectin matrix. Phytase enzymes in the seed coat activate at room temperature, slowly degrading phytic acid-calcium crosslinks that cement cell walls together. This enzymatic pre-treatment is why soaked beans cook in 45 minutes while unsoaked beans require 2+ hours. The salt in the sweetening step is not for flavor — Ca²⁺ and Na⁺ ions from salt stabilize the remaining pectin crosslinks, preventing over-softening into mush.'
    },
    {
      step: 4,
      title: 'Layer 3: Lotus Seeds — Alkaloid Removal & Tender Compression',
      details: 'If using dried lotus seeds: soak 4 hours, then remove the green embryo (germ) from the center of each seed — this embryo contains liensinine and isoliensinine (isoquinoline alkaloids) that are intensely bitter. Boil lotus seeds in water for 30-40 minutes until tender. The lotus seed is primarily starch with unusually high resistant starch (RS2) content — even after full cooking, 15-20% of the starch remains crystalline and indigestible, giving lotus seeds their characteristic chalky-creamy texture that differs from any bean. Sweeten gently. Density: ρ ≈ 1.05-1.08 g/cm³.',
      time: '45 min',
      tip: 'Lotus seeds have a unique starch architecture: the B-type crystalline polymorph (also found in banana and potato starch) is more resistant to gelatinization than the A-type found in cereal starches. This means even at 100°C for 40 minutes, some crystalline regions persist — producing the signature "dry-creamy" mouthfeel that is neither the smooth gel of mung bean nor the grainy texture of red bean. This resistant starch also has a lower glycemic index, making lotus seeds the "healthiest" layer.'
    },
    {
      step: 5,
      title: 'Layer 4: Pandan Tapioca Pearls — Chlorophyll Color-Locked Gel Spheres',
      details: 'Mix tapioca starch with boiling water and pandan extract. Knead until smooth green dough forms. Roll into 8mm balls. Boil in water for 8-10 minutes until they float and become translucent. Transfer to sugar syrup. The pandan extract provides chlorophyll a (blue-green, absorbs at 430nm and 662nm) and chlorophyll b (yellow-green, absorbs at 453nm and 642nm). Heat during boiling partially converts chlorophyll to pheophytin (magnesium replaced by hydrogen ions under acidic conditions), shifting color toward olive — this is why the pearls are deep green, not bright green. Density: ρ ≈ 1.03-1.06 g/cm³.',
      time: '25 min',
      tip: 'The pearls achieve translucency through the same amylopectin mechanism as Bánh Lọc — but here the transparency serves a DIFFERENT purpose: it allows the green chlorophyll color to be seen throughout the pearl\'s volume rather than only on the surface. An opaque starch pearl (wheat-based) with the same amount of pandan would appear green only on the outside, white inside. The tapioca pearl is green ALL THE WAY THROUGH — a solid emerald in the density column.'
    },
    {
      step: 6,
      title: 'Layer 5: Agar Jelly — Anthocyanin pH-Sensitive Chromatic Display',
      details: 'Dissolve agar in water, bring to boil (agar requires full boiling to activate — unlike gelatin, it needs temperatures above 85°C to dissolve the agarose double-helix junction zones). Add sugar. Remove from heat, add butterfly pea flower extract. Pour into flat tray, cool to set. The agar sets through thermal hysteresis: it dissolves at 85-95°C but gels at 35-40°C — a 50°C gap that means once set, it won\'t melt again at serving temperature. Cut into 1cm diamond shapes. Density: ρ ≈ 1.01-1.03 g/cm³.',
      time: '30 min (+ 1 hr setting)',
      tip: 'Butterfly pea flower anthocyanins are NATURAL pH INDICATORS: blue at pH 7 (neutral), purple at pH 4-5 (slightly acidic), pink at pH 2-3 (acidic). In the neutral sugar-water agar, they produce deep blue. When the jelly cubes contact the acidic sugar syrup in the bowl (pH ~5 from dissolved CO₂), the edges shift toward purple while the centers remain blue — creating a GRADIENT coloration within each cube. This pH-responsive color change is a living, dynamic chromatic element that other food colorings cannot replicate.'
    },
    {
      step: 7,
      title: 'Layer 6: Dried Longan — Maillard Caramel Infusion',
      details: 'Simmer dried longan flesh in water with sugar for 15 minutes. Dried longan has already undergone extensive Maillard reactions during the drying process (70-80°C for 24-48 hours) — the reducing sugars (glucose, fructose) in fresh longan react with amino acids (proline, asparagine) to produce melanoidins (brown color), furanones (caramel flavor), and Strecker aldehydes (fruity-floral). Rehydrating in sugar syrup reopens the collapsed cellular structure, allowing these trapped flavor compounds to diffuse into the surrounding liquid. Density: ρ ≈ 1.02-1.05 g/cm³.',
      time: '20 min',
      tip: 'Dried longan\'s flavor is fundamentally different from fresh longan — not just more concentrated but chemically transformed. The drying process creates 40-60 new volatile compounds not present in fresh fruit: 5-methylfurfural (caramel), 2-acetylfuran (balsamic), benzaldehyde (almond), and multiple lactones (creamy). These Maillard products make dried longan taste like "caramelized fruit" — a flavor category that doesn\'t exist in the fresh fruit. The simmering step extracts these compounds into the syrup, creating a "longan liquor" with complexity far exceeding its humble ingredient list.'
    },
    {
      step: 8,
      title: 'Layer 7: Coconut Cream — Fat-Phase Density Barrier',
      details: 'Heat coconut cream with sugar, pandan, salt, and tapioca starch slurry. Stir constantly over medium heat until thickened (the tapioca starch gelatinizes at 60-70°C, increasing viscosity by 5-10×). Cool slightly. This layer has the LOWEST density of all liquid layers (ρ ≈ 0.97-1.00 g/cm³) because coconut fat (ρ = 0.92 g/cm³) constitutes 20-25% of its volume. It naturally floats on all other layers, creating a white "ceiling" that seals the density column. The starch thickening prevents the cream from mixing with layers below through viscous resistance.',
      time: '10 min',
      tip: 'The tapioca starch thickener serves a critical anti-mixing function: without it, the coconut cream\'s low viscosity (similar to milk) would allow convective currents to mix it into the layer below, destroying the stratification. The thickened cream has a yield stress — a minimum force required to initiate flow — which means gentle handling won\'t disturb the interface. This is the same rheological principle that keeps mayonnaise (another oil-in-water emulsion) sitting on top of a salad rather than draining to the bottom.'
    },
    {
      step: 9,
      title: 'Bowl Assembly — Density-Driven Stratification Protocol',
      details: 'Working in clear glass or porcelain bowls, layer from HEAVIEST to LIGHTEST: (1) Mung bean paste at bottom — press flat. (2) Red beans. (3) Lotus seeds. (4) Pandan tapioca pearls. (5) Blue agar jelly diamonds. (6) Longan in syrup. (7) Coconut cream — pour gently over the back of a spoon to prevent disruption. (8) Garnish: toasted sesame, coconut flakes, crushed peanuts, pomegranate seeds. Each layer should remain DISTINCT — visible as separate colored bands through the glass.',
      time: '10 min',
      tip: 'Pour each liquid or semi-liquid layer over the BACK OF A SPOON held just above the previous layer\'s surface. This technique dissipates kinetic energy — the liquid spreads horizontally rather than plunging vertically. A direct pour creates a turbulent jet that can penetrate 2-3cm into the layer below, mixing the interface irreversibly. The spoon technique reduces penetration to <3mm, maintaining clean color boundaries. This is the same technique bartenders use for layered cocktails (pousse-café) — identical physics, different application.'
    },
    {
      step: 10,
      title: 'Serving Temperature & Presentation',
      details: 'Serve at room temperature or slightly chilled (15-20°C). Do NOT serve ice-cold — temperatures below 10°C cause the coconut cream to partially solidify (coconut fat\'s melting point is 24°C), creating waxy mouthfeel and destroying the liquid-cream texture. Present in clear vessels so the chromatic stratification is visible — the visual spectrum from dark gold (bottom) through red, cream, green, blue, amber to white (top) is the dish\'s primary aesthetic statement. Provide long-handled spoons for excavating through layers.',
      time: '2 min',
      tip: 'The chromatic sequence follows an approximate color temperature gradient: warm tones (gold, red) at the bottom, cool tones (green, blue) in the middle, neutral (white) on top. This is not accidental — Huế royal aesthetics drew from Buddhist cosmology where warm tones represent the earthly realm (heavy, grounded) and cool tones represent the spiritual realm (light, ethereal). The bowl reads as a COSMOGRAM — earth to heaven, dense to ethereal, warm to cool — encoded in dessert.'
    }
  ],

  proTips: [
    {
      title: 'Density Engineering — The Archimedes Column',
      description: 'Each layer\'s density is controlled by three variables: sugar concentration (higher sugar = denser), starch content (higher starch = denser), and fat fraction (higher fat = lighter). The mung bean paste (ρ ≈ 1.18) is heavy because it is a concentrated starch paste with 40%+ sugar. The coconut cream (ρ ≈ 0.98) is light because coconut fat (ρ = 0.92) makes up 20-25% of its mass. The intervening layers are tuned to densities between these extremes, creating a stable gradient. If any layer is denser than the one below it, convective overturn occurs — the heavy layer sinks through the light one, destroying the stratification.'
    },
    {
      title: 'Rock Sugar vs Granulated — Crystal Purity Science',
      description: 'Rock sugar is formed by SLOW crystallization over 7-14 days from supersaturated sucrose solution. This slow process allows the growing crystal lattice to exclude impurities — molasses residues, mineral ions, organic acids — that are inevitably trapped in granulated sugar\'s rapid industrial crystallization (minutes, not days). The result: rock sugar is 99.5-99.8% pure sucrose vs 99.0-99.5% for granulated. That 0.3-0.5% purity difference is perceivable: rock sugar produces a "cleaner" sweet sensation because there are no off-flavors from caramelized molasses, bitter minerals, or sour organic acids.'
    },
    {
      title: 'Agar Thermal Hysteresis — Nature\'s Set-and-Forget Gel',
      description: 'Agar\'s 50°C hysteresis gap (melts at 85°C, sets at 35°C) is the widest of any food gelling agent. Gelatin has only 10-15°C hysteresis (melts at 35°C, sets at 20-25°C). This means agar jelly is THERMALLY STABLE at any serving temperature a human would encounter — it won\'t melt in the mouth (37°C), in a warm room (30°C), or on a hot day (40°C). For chè cung đình, this stability is essential: the agar cubes maintain their shape and position in the density column indefinitely, while gelatin cubes would melt and dissolve within minutes of assembly.'
    },
    {
      title: 'Butterfly Pea Anthocyanins — Edible pH Paper',
      description: 'Delphinidin-3,5-diglucoside is the primary anthocyanin in butterfly pea flowers. Its chromophore (the light-absorbing molecular structure) contains a pyrylium ring that changes electron density with pH: at pH 7+ the ring is in quinoidal base form (blue), at pH 4-5 it protonates to flavylium cation (purple), at pH 2-3 it forms the red flavylium form. In the chè bowl, different layers have different pH values — the sugar syrup layers are slightly acidic (pH 5-6) while the coconut cream is nearly neutral (pH 6.5-7). The agar cubes therefore shift color depending on which neighboring layer\'s pH they equilibrate with, creating an evolving color display over the dessert\'s serving life.'
    },
    {
      title: 'The Eight-Treasure Tradition — Culinary Numerology',
      description: 'Eight components is not arbitrary — the number eight (bát) is auspicious in Vietnamese culture (and across East Asia), representing prosperity and completeness. The Nguyễn court codified many dishes in groups of eight: eight-course banquets, eight-jewel soups, eight-treasure desserts. For chè cung đình, the eight layers also create a PRACTICAL constraint: with fewer than six layers, the visual impact is insufficient for royal presentation; with more than ten, the density differences between adjacent layers become too small to prevent mixing. Eight is the MAXIMUM number of layers achievable with natural ingredients while maintaining stable density stratification.'
    },
    {
      title: 'Resistant Starch in Lotus Seeds — The Healthy Layer',
      description: 'Lotus seed starch contains 15-20% RS2 (resistant starch type 2 — native granular crystalline starch that resists enzymatic digestion). Unlike potato or rice starch where cooking eliminates RS2 by gelatinization, lotus seed\'s B-type crystalline polymorph has a higher gelatinization temperature (75-85°C vs 60-70°C for potato A-type), meaning some crystals survive standard cooking. This resistant starch passes through the small intestine undigested, reaching the colon where it is fermented by Bifidobacterium and Lactobacillus species into short-chain fatty acids (butyrate, propionate, acetate) — the same compounds produced by dietary fiber. The lotus seed layer is functionally a prebiotic hidden in a dessert.'
    }
  ],

  nutritionFacts: {
    servingSize: '1 bowl (approximately 300g)',
    calories: 380,
    totalFat: '14g',
    saturatedFat: '10g',
    cholesterol: '0mg',
    sodium: '120mg',
    totalCarbohydrate: '60g',
    dietaryFiber: '5g',
    totalSugars: '38g',
    protein: '8g',
    vitaminD: '0mcg',
    calcium: '45mg',
    iron: '2.8mg',
    potassium: '320mg'
  },

  relatedRecipes: [
    {
      title: 'Chè Xoa Xoa Hạt Lựu',
      slug: 'che-xoa-xoa-hat-luu',
      image: '/images/recipes/che-xoa-xoa-hat-luu.jpg',
      description: 'Đà Nẵng\'s agar jelly dessert — the Central cousin'
    },
    {
      title: 'Bánh Lọc Huế',
      slug: 'banh-loc-hue',
      image: '/images/recipes/banh-loc-hue.jpg',
      description: 'Translucent tapioca dumplings — amylopectin transparency science'
    },
    {
      title: 'Bánh Bèo Chén',
      slug: 'banh-beo-chen',
      image: '/images/recipes/banh-beo-chen.jpg',
      description: 'Steamed rice cakes in small dishes — another Huế miniature'
    }
  ],

  schpiresearchData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Chè Huế Cung Đình — Royal Court Eight-Treasure Sweet Soup',
    description: 'Eight-layer density-stratified imperial dessert from the Nguyễn dynasty court — mung bean, red bean, lotus seeds, pandan pearls, butterfly pea agar, longan, and coconut cream in Archimedes-stable chromatic column.',
    image: '/images/recipes/che-hue-cung-dinh.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT120M',
    cookTime: 'PT60M',
    totalTime: 'PT180M',
    recipeYield: '8 servings',
    recipeCategory: 'Dessert',
    recipeCuisine: 'Vietnamese',
    keywords: 'chè huế, chè cung đình, royal dessert, eight treasure soup, vietnamese sweet soup, imperial cuisine, nguyen dynasty, layered dessert, density stratification',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '380 calories',
      fatContent: '14g',
      proteinContent: '8g',
      carbohydrateContent: '60g'
    },
    recipeIngredient: [
      '150g split mung beans',
      '100g red beans',
      '80g dried lotus seeds',
      '100g tapioca starch for pearls',
      '8g agar powder with butterfly pea flower',
      '80g dried longan',
      '200ml coconut cream',
      '200g rock sugar',
      'Pandan leaves, sesame, peanuts'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Prepare rock sugar syrup with pandan for unified sweetness' },
      { '@type': 'HowToStep', text: 'Cook mung bean paste as densest foundation layer' },
      { '@type': 'HowToStep', text: 'Simmer red beans with pectin-stabilized structure' },
      { '@type': 'HowToStep', text: 'Process lotus seeds with alkaloid-free tender compression' },
      { '@type': 'HowToStep', text: 'Form pandan tapioca pearls as translucent emerald spheres' },
      { '@type': 'HowToStep', text: 'Set butterfly pea agar jelly with pH-responsive color' },
      { '@type': 'HowToStep', text: 'Prepare longan Maillard caramel infusion' },
      { '@type': 'HowToStep', text: 'Thicken coconut cream as floating fat-phase density barrier' },
      { '@type': 'HowToStep', text: 'Assemble eight layers using spoon-back pour technique' }
    ]
  }
};

export default function CheHueCungDinhPage() {
  return <RecipeLayout recipe={recipeData} />;
}
