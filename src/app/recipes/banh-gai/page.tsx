'use client';

import RecipeLayout from '../_components/RecipeLayout';

const recipeData = {
  title: 'Bánh Gai',
  subtitle: 'Black Leaf Cake — The Activated-Carbon Polyphenol Stealth Pigmentation System',
  heroImage: '/images/recipes/banh-gai.jpg',
  region: 'Central' as const,
  difficulty: 'Hard',
  prepTime: '2 hr',
  cookTime: '45 min',
  totalTime: '3 hr',
  servings: 20,
  rating: 4.7,
  reviewCount: 176,
  calories: 160,
  tags: ['Nghệ An', 'Dessert', 'Sticky Rice', 'Traditional', 'Central', 'Steamed'],

  introduction: {
    paragraphs: [
      "Bánh gai achieves its signature JET-BLACK color through a mechanism that is fundamentally different from any other food coloring: it uses CARBONIZED PLANT MATTER — leaves of the gai plant (Abroma augusta, Indian hemp) that have been dried, toasted, and ground to a fine powder containing both ACTIVATED CARBON and CONDENSED POLYPHENOLIC PIGMENTS. This dual-pigment system creates a black that is optically deeper than any single-compound colorant. Activated carbon absorbs light across the ENTIRE visible spectrum (400-700nm) with near-zero reflectance, while the condensed tannins (polymeric proanthocyanidins, MW 2,000-30,000 Da) contribute a deep brown-black that fills the spectral gaps where carbon alone might show slight gray. Together they produce a color with a CIE L* value of 15-20 (near the perceptual black limit of L*=0), compared to L*=25-30 for squid ink, L*=30-35 for black sesame, and L*=35-40 for activated charcoal alone. This makes bánh gai one of the DARKEST natural foods in existence.",
      "The GÀI LEAF itself is a botanical curiosity: Abroma augusta produces leaves rich in MUCILAGE (a complex polysaccharide of galactose, rhamnose, and uronic acid residues) alongside unusually high concentrations of PHENOLIC COMPOUNDS (gallic acid, catechins, and their oligomeric condensation products). When the leaves are dried and toasted at 150-180°C, two simultaneous reactions occur: (1) the cellulose and hemicellulose PYROLYZE to form activated carbon with a surface area of 200-400 m²/g (each gram of carbon has the surface area of a tennis court), and (2) the phenolic compounds undergo OXIDATIVE POLYMERIZATION — the same reaction that turns tea leaves from green to black — forming melanoidin-like pigment polymers that are chemically bound to the carbon matrix. The mucilage, meanwhile, SURVIVES the toasting (polysaccharides are more thermally stable than cellulose at 150-180°C) and becomes the binding agent that incorporates the carbon-pigment complex into the glutinous rice dough.",
      "The DOUGH MATRIX is a glutinous rice (Oryza sativa var. glutinosa) paste with 95-100% amylopectin content — a branched starch polymer that forms a VISCOELASTIC GEL rather than the rigid amylose gel of regular rice. Amylopectin's α-1,6 branching points (every 20-25 glucose units) prevent the tight double-helix packing that makes amylose gels firm and opaque. Instead, amylopectin forms a SOFT, STRETCHY, TRANSLUCENT matrix — the characteristic mochi-like texture of glutinous rice cakes. The gai leaf powder is dispersed uniformly throughout this matrix at 5-8% w/w, with the carbon particles (0.1-10μm) and polyphenol polymers acting as REINFORCING FILLERS that increase the dough's tensile strength by 20-30% while simultaneously blackening it. The carbon particles also act as a MOISTURE BARRIER — their hydrophobic surface (contact angle >90° for water) reduces the rate of moisture migration between the filling and the dough, keeping the mung bean filling dry and the dough surface non-sticky for 2-3 days at room temperature."
    ]
  },

  ingredients: [
    {
      group: 'Gai Leaf Dough',
      items: [
        { name: 'Glutinous rice flour (bột nếp)', amount: '500g', note: '95-100% amylopectin — viscoelastic gel matrix' },
        { name: 'Dried gai leaves (lá gai)', amount: '100g', note: 'Toasted and ground — activated carbon + polyphenol pigment' },
        { name: 'Muscovado or dark brown sugar', amount: '150g', note: 'Molasses contributes additional melanoidins' },
        { name: 'Cooking oil', amount: '2 tbsp', note: 'Plasticizer — reduces dough stiffness' },
        { name: 'Warm water', amount: '300-350ml', note: 'Gradual hydration' },
      ]
    },
    {
      group: 'Mung Bean Filling',
      items: [
        { name: 'Dried split mung beans', amount: '200g', note: 'Soaked 4 hr — vicilin + legumin protein gel' },
        { name: 'Sugar', amount: '80g' },
        { name: 'Coconut cream', amount: '50ml', note: 'Lipid plasticizer for smooth paste' },
        { name: 'Vanilla extract', amount: '1 tsp', note: 'Vanillin aldehyde — cross-modal sweetness enhancement' },
        { name: 'Sesame seeds (toasted)', amount: '2 tbsp', note: 'Optional — sesamol antioxidant + nuttiness' },
      ]
    },
    {
      group: 'Wrapping & Steaming',
      items: [
        { name: 'Banana leaves', amount: '20 pieces', note: 'Blanched — semi-permeable moisture barrier' },
        { name: 'Kitchen string', amount: 'As needed' },
        { name: 'Cooking oil (for brushing)', amount: '2 tbsp', note: 'Release agent — lowers surface energy' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Gai Leaf Processing — Pyrolytic Pigment Generation',
      details: 'If starting from dried gai leaves: toast in a dry pan over medium heat (150-180°C surface temperature) for 10-15 minutes, stirring constantly, until the leaves are BRITTLE and uniformly dark (the transition from flexible-brown to brittle-black marks the completion of pyrolysis — at this point, the cellulose has lost ~60% of its mass as CO₂ and H₂O vapor, and the remaining carbon matrix has developed its characteristic microporous structure). Grind the toasted leaves to a FINE POWDER using a mortar and pestle or spice grinder — the particle size target is <50μm. Larger particles create visible specks in the dough and reduce the color intensity (the pigmenting efficiency scales inversely with particle size: halving the particle diameter quadruples the number of particles per gram and doubles the surface area available for light absorption). Sift through a fine-mesh strainer to remove any stem fragments or unground pieces.',
      time: '20 min',
      tip: 'The toasting temperature window (150-180°C) is narrow and critical. Below 140°C, the leaves DRY but don\'t pyrolyze — the cellulose remains intact (it decomposes above 150°C), so the powder is brown rather than black, and lacks activated carbon\'s light-absorbing properties. Above 200°C, the polyphenol polymers begin to COMBUST (complete oxidation to CO₂), losing their pigment contribution and leaving only gray-white carbon ash. The sweet spot (150-180°C) achieves PARTIAL PYROLYSIS: cellulose converts to black carbon while polyphenols polymerize without burning, creating the dual-pigment system that produces true black. Stir constantly because stationary leaves overheat on the contact surface (pan at 180°C, leaf surface at 200°C+ due to poor thermal conductivity of dried plant matter).'
    },
    {
      step: 2,
      title: 'Mung Bean Filling — Vicilin-Legumin Protein Gel',
      details: 'Soak split mung beans in water for 4 hours (the cotyledon cells absorb water through the cut surface at ~0.5g water/g bean/hour, reaching equilibrium hydration of 1.8-2.0g water/g bean). Steam for 20-25 minutes until completely soft — the starch granules gelatinize (65-75°C) and the STORAGE PROTEINS (vicilin 8S, ~150 kDa, and legumin 11S, ~350 kDa) denature and aggregate, forming a protein gel matrix that holds the gelatinized starch in a coherent paste. Mash while hot (the proteins are still mobile above their denaturation temperature and can be reshaped), then add sugar, coconut cream, and vanilla. Cook the paste in a pan over low heat for 5-8 minutes, stirring until it pulls away from the pan as a smooth, non-sticky ball (the endpoint indicates that sufficient moisture has evaporated to bring the total solids above 65%, at which point the sugar concentration exceeds the saturation limit for sucrose at room temperature, and the filling sets firm upon cooling). Allow to cool, then portion into 20 balls (~20g each).',
      time: '35 min',
      tip: 'COCONUT CREAM serves as a LIPID PLASTICIZER in the filling: the fat globules (average 2-5μm) insert themselves between protein-starch aggregates, reducing the inter-particle friction and creating a smooth, paste-like texture rather than a dry, crumbly one. Without fat, the denatured mung bean protein forms an OVER-CROSS-LINKED network (disulfide bonds + hydrophobic interactions) that is brittle and mealy. The optimal fat content is 8-12% of filling weight — below 8%, the filling cracks when bitten; above 15%, the filling is greasy and doesn\'t hold its shape. Coconut cream provides exactly this range (50ml coconut cream ≈ 15-18g fat in 200g beans + 80g sugar = 5-6% w/w + residual moisture loss during cooking concentrates it to 8-12%).'
    },
    {
      step: 3,
      title: 'Dough Formation — Carbon-Reinforced Amylopectin Matrix',
      details: 'Dissolve muscovado sugar in warm water (the molasses in muscovado contains melanoidins — Maillard reaction products that contribute additional brown-black pigment, complementing the gai leaf\'s carbon-polyphenol system). Combine glutinous rice flour with the gai leaf powder, mixing thoroughly in the dry state to ensure uniform distribution (carbon particles tend to AGGREGATE due to van der Waals forces between their aromatic surfaces — pre-mixing with the flour separates them mechanically before water is added). Gradually add the sugar water while kneading, then add oil. Knead for 10-15 minutes until the dough is SMOOTH, UNIFORMLY BLACK, and has a SATINY SHEEN (the sheen indicates that the amylopectin has been partially hydrated and the carbon particles have been coated with a thin film of mucilage from the gai leaves, reducing their surface roughness). The dough should be PLIABLE but not sticky — it should pull away from your hands cleanly. Rest for 15 minutes under a damp cloth to allow full hydration of the flour particles.',
      time: '25 min',
      tip: 'The KNEADING is not optional — it serves three engineering functions: (1) GLUTEN-ANALOG NETWORK FORMATION. Glutinous rice contains glutelin (oryzenin) rather than wheat gluten, but extended kneading creates a weak protein network (tensile strength ~0.1 MPa vs wheat gluten\'s 1-2 MPa) that provides cohesion. (2) PARTICLE DISPERSION. The repeated fold-stretch-fold action creates LAMINAR SHEAR FLOW that breaks apart carbon particle aggregates — after 100+ fold cycles, the particle dispersion approaches statistical uniformity (coefficient of variation <10%). (3) STARCH DAMAGE. The mechanical stress fractures 5-10% of the starch granules, releasing free amylopectin chains that act as a WET ADHESIVE between intact granules, increasing dough cohesion. Under-kneaded dough (5 min) has visible carbon streaks and tears when stretched; properly kneaded dough (15 min) stretches uniformly to 2-3× its length before breaking.'
    },
    {
      step: 4,
      title: 'Assembly — Encapsulation & Banana Leaf Wrapping',
      details: 'Portion dough into 20 pieces (~35g each). Flatten each piece into a 7-8cm disc (3-4mm thick) on an oiled surface — the oil prevents sticking without adding flour (which would create white patches on the black surface). Place a mung bean filling ball in the center and fold the dough around it, pinching closed and rolling gently between oiled palms to create a smooth, egg-shaped package. Wrap each in a BRUSHED BANANA LEAF piece (oiled side against the dough): fold the leaf around the cake and tie with kitchen string. The banana leaf serves as a SEMI-PERMEABLE STEAM BARRIER — it allows water vapor to enter (the dough needs steam to complete gelatinization) but prevents the dough surface from contacting liquid water (which would wash away the carbon and create gray patches). The banana leaf also contributes FLAVOR: at steaming temperature (100°C), the leaf releases 2-acetyl-1-pyrroline (the same compound responsible for jasmine rice aroma, concentration 0.04-0.06 ppm in banana leaf) and several green-leaf volatiles (hexanal, 2-hexenal) that are absorbed into the dough\'s surface layer.',
      time: '30 min',
      tip: 'BLANCH the banana leaves in boiling water for 30 seconds before use. This thermal treatment serves three purposes: (1) it SOFTENS the leaf by partially gelatinizing the starch in the leaf\'s epidermal cells and melting the cuticular waxes, making it pliable enough to fold without cracking (unblanched leaves crack along the vein lines, allowing steam condensate to contact the dough). (2) It SANITIZES the leaf surface — banana leaves harbor Bacillus and Pseudomonas at 10³-10⁴ CFU/cm² that are reduced by 90-99% at 100°C/30s. (3) It ACTIVATES the aromatic compounds by disrupting the leaf cells\' vacuoles, where the 2-acetyl-1-pyrroline precursors (proline + methylglyoxal) react upon thermal release. Unblanched leaves contribute less aroma because the intact cells sequester the precursors.'
    },
    {
      step: 5,
      title: 'Steaming — Amylopectin Gelatinization & Gel Setting',
      details: 'Arrange wrapped cakes in a steamer in a SINGLE LAYER (stacking compresses the bottom cakes, creating an uneven flat shape rather than the desired egg form). Steam over HIGH HEAT for 40-45 minutes. During steaming, three simultaneous processes complete the cake: (1) AMYLOPECTIN GELATINIZATION — the remaining ungelatinized starch granules (those not damaged during kneading) swell and burst as the temperature exceeds 65°C internally, releasing their amylopectin into the continuous phase and creating the translucent, sticky, chewy matrix. (2) CARBON-MUCILAGE INTEGRATION — the gai leaf mucilage (galactomannan-type polysaccharide) dissolves in the hot water within the dough and forms hydrogen bonds with the amylopectin chains, creating a HYBRID POLYSACCHARIDE NETWORK that is more elastic than amylopectin alone. (3) FILLING STEAM-SETTING — the mung bean filling reaches 90-95°C internally, driving off additional moisture and concentrating the sugar to a near-glassy state that sets firm upon cooling. After steaming, remove from steamer and allow to cool to room temperature ON THE BANANA LEAF — do not unwrap until fully cooled (45-60 minutes), as the amylopectin network needs time to set.',
      time: '45 min + 45 min cooling',
      tip: 'The COOLING RATE determines the final texture. Bánh gai should cool SLOWLY at room temperature (25-30°C), taking 45-60 minutes to reach ambient. This slow cooling allows the amylopectin chains to form LOOSE, DISORDERED aggregates — a process called RETROGRADATION — that create a CHEWY texture with moderate firmness. Fast cooling (refrigerator, 4°C) causes rapid, TIGHT crystallization of the amylopectin branches (particularly the outer chains of DP 12-16), producing a HARD, STALE texture within hours — the same process that makes bread stale. This is reversible: re-steaming for 5-10 minutes melts the amylopectin crystals (Tm ≈ 55-65°C for amylopectin retrograded crystals) and restores the original soft texture. Slow room-temperature cooling avoids the tight crystallization entirely, keeping the cake soft for 2-3 days.'
    }
  ],

  proTips: [
    {
      title: 'Activated Carbon as Functional Colorant — Beyond Aesthetics',
      description: 'The activated carbon in gai leaf powder does more than provide color. Its microporous structure (pore diameter 0.5-5 nm, surface area 200-400 m²/g) ADSORBS volatile compounds — both desirable and undesirable. It removes the slightly musty, cereal-like off-flavors that glutinous rice flour develops during storage (caused by lipid oxidation products: hexanal, nonanal) while retaining the banana leaf\'s 2-acetyl-1-pyrroline (which, as a heterocyclic compound, binds less strongly to carbon\'s nonpolar surface than the aldehydes). The net effect is a CLEANER FLAVOR PROFILE in gai leaf cake compared to undyed glutinous rice cakes. The carbon also acts as a RADICAL SCAVENGER — its aromatic π-electron system delocalizes free radicals, extending the cake\'s shelf life by 30-50% compared to un-carbonized versions (3 days vs 2 days at room temperature before microbial spoilage becomes detectable).'
    },
    {
      title: 'The Gai Leaf Mucilage — Nature\'s Emulsifier-Binder',
      description: 'The mucilage from Abroma augusta leaves is a POLYELECTROLYTE — a charged polysaccharide with uronic acid residues (pKa ≈ 3.5) that carry negative charges at the dough\'s pH (~5.5). These charges create ELECTROSTATIC REPULSION between mucilage chains, which counteracts the tendency of the amylopectin network to over-aggregate during cooling. The result is a dough that retrogrades MORE SLOWLY than pure glutinous rice dough (half-time for retrogradation increases from 6 hours to 15+ hours), staying soft longer. The mucilage also acts as an INTERFACIAL STABILIZER between the hydrophobic carbon particles and the hydrophilic starch matrix — its amphiphilic structure (hydrophobic acetyl groups on the galactomannan backbone, hydrophilic uronic acid side chains) anchors to both surfaces, preventing the carbon from segregating out of the dough during steaming.'
    },
    {
      title: 'Banana Leaf Wrapping — Controlled Atmosphere Packaging',
      description: 'The banana leaf is a NATURAL MODIFIED-ATMOSPHERE PACKAGE. Fresh banana leaf has a water vapor transmission rate (WVTR) of 50-100 g/m²/day — high enough to allow steam to enter during cooking, but low enough to prevent surface dehydration during storage. More importantly, the leaf\'s waxy cuticle (composed of C₂₆-C₃₀ fatty alcohols and esters) is SELECTIVELY PERMEABLE to different gases: it transmits CO₂ 3-5× faster than O₂, creating a low-O₂/high-CO₂ atmosphere around the cake during storage (similar to commercial modified atmosphere packaging). This reduced O₂ environment inhibits aerobic mold growth (the primary spoilage mechanism for room-temperature rice cakes) and slows lipid oxidation. A plastic-wrapped bánh gai spoils faster because plastic is either completely impermeable (anaerobic conditions promote Clostridium) or equally permeable to all gases (no selective CO₂ enrichment).'
    },
    {
      title: 'Mung Bean Filling — Glass Transition & Texture Engineering',
      description: 'The mung bean filling undergoes a GLASS TRANSITION during cooling: above 60°C, it is a viscous paste (rubbery state); below its glass transition temperature Tg (≈35-40°C at the 65% solids concentration achieved by cooking), it becomes a BRITTLE AMORPHOUS SOLID — not crystalline (the mixed sugar-protein-starch system prevents crystallization), but rigid. This glass transition is what gives properly made bánh gai filling its characteristic CLEAN SNAP when bitten — the filling fractures along a smooth plane rather than deforming plastically. If the filling is under-cooked (solids <60%), Tg drops below 25°C and the filling remains soft and pasty at room temperature. If over-cooked (solids >75%), the filling becomes excessively hard and chalky (Tg rises above 50°C, and the glassy state persists even in the warm mouth). The 65% solids target places Tg right at the boundary of room and mouth temperature — firm at rest, softening immediately when eaten.'
    }
  ],

  nutritionFacts: {
    servingSize: '1 cake (approximately 55g)',
    calories: 160,
    totalFat: '3g',
    saturatedFat: '1.5g',
    cholesterol: '0mg',
    sodium: '15mg',
    totalCarbohydrate: '30g',
    dietaryFiber: '2g',
    totalSugars: '10g',
    protein: '3g',
    vitaminD: '0mcg',
    calcium: '15mg',
    iron: '1mg',
    potassium: '80mg'
  },

  relatedRecipes: [
    {
      title: 'Bánh Mướt',
      slug: 'banh-muot',
      image: '/images/recipes/banh-muot.jpg',
      description: 'Rice rolls — same glutinous rice family, different form'
    },
    {
      title: 'Bánh Đúc Ngô',
      slug: 'banh-duc-ngo',
      image: '/images/recipes/banh-duc-ngo.jpg',
      description: 'Corn pudding cake — starch gel comparison'
    },
    {
      title: 'Kẹo Cu Đơ',
      slug: 'keo-cu-do',
      image: '/images/recipes/keo-cu-do.jpg',
      description: 'Peanut brittle — another Nghệ An sweet tradition'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Bánh Gai — Black Leaf Cake',
    description: 'Activated carbon-polyphenol dual pigmentation CIE L* 15-20 deepest natural food color, Abroma augusta leaf pyrolytic carbon 200-400 m²/g surface area + condensed tannin MW 2,000-30,000 Da oxidative polymerization, amylopectin 95-100% viscoelastic matrix with carbon reinforcing filler, mucilage polyelectrolyte retrogradation inhibitor, mung bean vicilin-legumin protein gel with glass transition Tg 35-40°C clean snap, banana leaf semi-permeable selective CO₂/O₂ atmosphere packaging.',
    image: '/images/recipes/banh-gai.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-20',
    prepTime: 'PT2H',
    cookTime: 'PT45M',
    totalTime: 'PT3H',
    recipeYield: '20 cakes',
    recipeCategory: 'Dessert',
    recipeCuisine: 'Vietnamese',
    keywords: 'bánh gai, black leaf cake, nghệ an dessert, vietnamese sticky rice cake, gai leaf cake',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '160 calories',
      fatContent: '3g',
      proteinContent: '3g',
      carbohydrateContent: '30g'
    },
    recipeIngredient: [
      '500g glutinous rice flour',
      '100g dried gai leaves (toasted, ground)',
      '200g split mung beans',
      'Muscovado sugar, coconut cream',
      'Banana leaves for wrapping'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Toast and grind gai leaves at 150-180°C for dual carbon-polyphenol pigment' },
      { '@type': 'HowToStep', text: 'Prepare mung bean filling to 65% solids for glass transition Tg 35-40°C' },
      { '@type': 'HowToStep', text: 'Knead dough 15 min for carbon dispersion and oryzenin network' },
      { '@type': 'HowToStep', text: 'Wrap in banana leaves and steam 40-45 min, slow cool to room temperature' }
    ]
  }
};

export default function BanhGaiPage() {
  return <RecipeLayout recipe={recipeData} />;
}
