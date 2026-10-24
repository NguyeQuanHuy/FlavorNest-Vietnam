'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Bánh Đúc Ngô',
  subtitle: 'Corn Pudding Cake — The Zein-Amylose Biphasic Gel Thermoplastic',
  heroImage: '/images/recipes/banh-duc-ngo.jpg',
  region: 'Central' as const,
  difficulty: 'Easy',
  prepTime: '15 min',
  cookTime: '30 min',
  totalTime: '45 min',
  servings: 6,
  rating: 4.5,
  reviewCount: 134,
  calories: 160,
  tags: ['Nghệ An', 'Corn', 'Pudding', 'Central', 'Vegetarian', 'Snack'],

  introduction: {
    paragraphs: [
      "Bánh đúc ngô is a BIPHASIC GEL — two incompatible polymer networks occupying the same physical space but forming distinct phases at the microscale. The first phase is AMYLOSE from rice flour: linear α-1,4-glucan chains that entangle into a rigid, transparent gel network (the same network that forms in bánh mướt). The second phase is ZEIN from corn: a prolamin storage protein (MW 22-27 kDa) that is uniquely HYDROPHOBIC among cereal proteins (>50% of its amino acid residues are nonpolar — leucine, alanine, proline), making it insoluble in water but soluble in the alkaline cooking liquid. When the corn-rice mixture cools, zein precipitates out of solution (its solubility drops 5-10× as pH decreases from cooking pH ~8 to cooled pH ~6.5), forming PROTEIN MICRODOMAINS (0.5-5μm) dispersed throughout the amylose gel matrix. These zein domains create the characteristic OPAQUE YELLOW COLOR (zein particles scatter light via Mie scattering, with the yellow contributed by corn's zeaxanthin carotenoids trapped within the protein phase) and the distinctive SLIGHTLY GRAINY TEXTURE — each zein microdomain is a tiny particle that the tongue detects as a subtle graininess within the otherwise smooth starch gel.",
      "The corn used in Nghệ An bánh đúc ngô is FIELD CORN (ngô tẻ, flint or dent varieties), not sweet corn. Field corn has HIGH STARCH (60-70% dry weight) and LOW SUGAR (1-3%) compared to sweet corn's 6-18% sugar. The high starch content is essential: the corn starch GELATINIZES alongside the rice starch during cooking, and the two starches form an INTERPENETRATING NETWORK — corn amylose chains entangle with rice amylose chains in a single, continuous gel matrix. If sweet corn were used, its lower starch content would produce an insufficiently firm gel (below the critical gelation concentration of ~6% total starch), and the high sugar would make the pudding sweet rather than savory — fundamentally changing the dish's identity from a NEUTRAL VEHICLE for savory toppings to a dessert.",
      "The cooking technique is a CONTINUOUS STIRRING GELATINIZATION — the corn-rice slurry is heated while being stirred constantly for 20-30 minutes. The constant stirring serves a critical rheological function: it PREVENTS LUMP FORMATION by maintaining uniform heat distribution and shearing apart any locally gelled regions before they can consolidate. Starch gelatinization is an IRREVERSIBLE phase transition — once a region gels, it cannot be re-dispersed by stirring. Lumps form when a LOCAL REGION reaches gelatinization temperature (60-70°C) before the surrounding slurry, creating a gelled island in a sea of ungelled suspension. Constant stirring eliminates these thermal gradients by forced convection, ensuring the ENTIRE VOLUME gelatinizes simultaneously, producing a perfectly smooth, lump-free gel."
    ]
  },

  ingredients: [
    {
      group: 'Corn Pudding',
      items: [
        { name: 'Dried corn kernels (ngô tẻ)', amount: '300g', note: 'Field corn — high starch, low sugar' },
        { name: 'Rice flour', amount: '100g', note: 'Amylose network co-gelation' },
        { name: 'Lime water (nước vôi trong)', amount: '2 tbsp', note: 'Ca(OH)₂ — nixtamalization analog' },
        { name: 'Water', amount: '1.5L' },
        { name: 'Salt', amount: '1 tsp' },
      ]
    },
    {
      group: 'Toppings',
      items: [
        { name: 'Fried shallots', amount: '3 tbsp' },
        { name: 'Shallot oil', amount: '2 tbsp' },
        { name: 'Roasted peanuts (crushed)', amount: '3 tbsp' },
        { name: 'Toasted sesame seeds', amount: '1 tbsp' },
        { name: 'Scallions (chopped)', amount: '2 stalks' },
        { name: 'Fish sauce or tương Nam Đàn', amount: 'For dipping' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Corn Preparation — Nixtamalization-Analog Alkaline Treatment',
      details: 'Soak dried corn in water with lime water (Ca(OH)₂ solution) overnight (12-16 hours). The lime water performs a PARTIAL NIXTAMALIZATION: Ca²⁺ ions cross-link the corn\'s hemicellulose (arabinoxylan) chains, loosening the pericarp (outer hull) for easier removal, while the alkaline pH (10-12) partially hydrolyzes the zein protein matrix that encases the starch granules, making the starch MORE ACCESSIBLE for gelatinization. Rinse thoroughly, then grind or blend with water into a coarse slurry — the particle size should be 0.5-2mm (visible corn fragments), not a smooth paste. These fragments provide the TEXTURAL IDENTITY of bánh đúc ngô: heterogeneous regions of intact corn cell clusters within the smooth gel matrix.',
      time: '12-16 hrs + 15 min grinding',
      tip: 'The Ca(OH)₂ treatment also releases BOUND NIACIN (vitamin B₃). In corn, 60-70% of niacin is present as NIACYTIN — a glycosylated form covalently bound to hemicellulose, which is biologically unavailable (humans lack the glycosidase needed to cleave the niacin-sugar bond). Alkaline treatment at pH >10 hydrolyzes this bond, converting niacytin to FREE NIACIN that can be absorbed in the small intestine. This is the same chemistry that prevented pellagra in Mesoamerican cultures that nixtamalized their corn — and that caused pellagra epidemics in European/American populations that adopted corn without the alkaline processing. Nghệ An\'s use of lime water in bánh đúc ngô is an INDEPENDENT DISCOVERY of the same nutritional chemistry, arrived at through empirical observation rather than biochemical knowledge.'
    },
    {
      step: 2,
      title: 'Slurry Preparation — Biphasic Suspension Assembly',
      details: 'Combine the ground corn slurry with rice flour and additional water to achieve a THIN, POURABLE CONSISTENCY (approximately 10-12% total solids). Stir thoroughly to ensure uniform distribution of both the corn particles and the dissolved rice flour. The slurry at this stage is a COMPLEX SUSPENSION: (1) corn starch granules (3-25μm, partially swollen from soaking), (2) rice starch granules (3-8μm, dry), (3) corn cell fragment particles (0.5-2mm), and (4) dissolved zein protein (~1% w/v at the alkaline pH). All four components will undergo DIFFERENT TRANSFORMATIONS during cooking: the starch granules gelatinize, the corn fragments soften, and the zein precipitates — three simultaneous phase transitions coordinated by a single thermal ramp.',
      time: '5 min',
      tip: 'The RICE FLOUR:CORN RATIO (~1:3 by dry weight) is calibrated for a specific gel FIRMNESS. Pure corn starch gel is SOFT and FRAGILE (corn amylose content: 25-28%, gel strength ~200 g·cm). Adding rice starch (amylose 25-30%, but with a different chain length distribution — rice amylose DP 1,000-2,000 vs corn amylose DP 500-1,000) creates an INTERPENETRATING NETWORK where the longer rice amylose chains act as CROSS-LINKS between shorter corn amylose segments, increasing gel strength to ~400-500 g·cm — firm enough to be cut into slices and picked up with chopsticks without crumbling, but soft enough to yield immediately under tooth pressure.'
    },
    {
      step: 3,
      title: 'Cooking — Continuous Stirring Gelatinization',
      details: 'Pour the slurry into a heavy-bottomed pot over MEDIUM heat. Stir CONTINUOUSLY with a flat wooden paddle in a figure-8 motion. As the temperature rises past 60°C, the slurry begins to thicken (starch granules swell and burst). Continue stirring as the mixture becomes progressively thicker — it will go through three rheological stages: THIN LIQUID (< 60°C, Newtonian flow), THICK PASTE (60-80°C, shear-thinning non-Newtonian), and STIFF GEL (> 85°C, yield stress solid). At the stiff gel stage, the mixture should pull away cleanly from the pot walls and hold its shape briefly when the paddle is lifted. Season with salt. Total cooking time: 20-30 minutes of continuous stirring.',
      time: '25 min',
      tip: 'The figure-8 stirring pattern is not arbitrary — it is OPTIMIZED for uniform mixing in a cylindrical pot. A simple circular stir creates a VORTEX with a dead zone at the center and along the bottom where the angular velocity approaches zero. A figure-8 pattern crosses the center line twice per cycle, disrupting the vortex structure and creating CHAOTIC ADVECTION — a mixing regime where fluid elements are stretched and folded exponentially, achieving complete mixing in O(log n) cycles rather than O(n) cycles for simple circular flow. At the high viscosities of gelatinizing starch (10²-10⁴ Pa·s), this difference is critical: circular stirring would leave unmixed regions for 5-10 minutes, long enough for localized over-gelatinization and scorching on the pot bottom.'
    },
    {
      step: 4,
      title: 'Molding — Gel Casting & Controlled Cooling',
      details: 'Pour the hot gel into a shallow mold (a plate, a banana-leaf-lined tray, or individual bowls) lightly brushed with oil. The gel must be poured IMMEDIATELY — it begins setting within 2-3 minutes as the temperature drops below 70°C (the gel point where amylose chain entanglement density exceeds the critical overlap concentration c*). Smooth the top surface with a wet spoon. Allow to cool at room temperature for 30-60 minutes until fully set. The cooled gel should be FIRM, OPAQUE YELLOW, and slightly JIGGLY when the mold is tapped — indicating a gel with 70-75% water content held in the amylose-zein biphasic network.',
      time: '45 min cooling',
      tip: 'The COOLING RATE determines the gel\'s MICROSTRUCTURE and hence its texture. FAST cooling (e.g., refrigerator, 4°C) produces a FINE-GRAINED gel: rapid nucleation creates many small amylose crystallites (1-5μm), resulting in a smooth, uniform texture. SLOW cooling (room temperature, 25°C) produces a COARSE-GRAINED gel: fewer nucleation events create larger crystallites (10-50μm) with larger amorphous regions between them, resulting in a softer, more tender texture with a pleasant yielding quality. Traditional bánh đúc ngô is ALWAYS cooled at room temperature — the coarse-grained, tender texture is part of its identity. Refrigerated bánh đúc ngô develops a stiff, rubbery texture that Nghệ An residents recognize immediately as \"wrong.\"'
    },
    {
      step: 5,
      title: 'Serving — Topping Architecture & Dipping System',
      details: 'Cut the set pudding into rectangular pieces (3×5cm) or scoop with a wet spoon. Arrange on a plate and TOP in layers: shallot oil drizzle first (fat phase — flavor carrier and gloss), then crushed roasted peanuts (textural crunch), toasted sesame seeds (nutty aromatic), fried shallots (caramelized crunch), and chopped scallions (fresh aromatic contrast). Serve with fish sauce or tương Nam Đàn for dipping. The topping architecture is designed for TEXTURAL COMPLEXITY on a monotextural base: the soft, smooth gel provides a NEUTRAL CANVAS, while the toppings add crunch (peanuts), crisp (fried shallots), pop (sesame seeds), and freshness (scallions) — four distinct textural modes on a single bite.',
      time: '5 min',
      tip: 'Bánh đúc ngô is traditionally served as a BREAKFAST or MID-AFTERNOON SNACK — times when the body\'s blood glucose is relatively low. The dish\'s HIGH GLYCEMIC LOAD (corn and rice starch are rapidly digested by salivary and pancreatic amylases, producing a glucose spike within 15-30 minutes of consumption) makes it an ideal FAST-ENERGY food for agricultural laborers who need quick fuel for physical work. The peanut topping MODERATES the glycemic response — peanut fat and protein slow gastric emptying (the stomach takes 3-4× longer to empty a mixed meal than a pure carbohydrate meal), reducing the peak blood glucose by 20-30% and extending the energy release over 2-3 hours rather than the 30-minute spike from pure starch. The empirical pairing of starch base + peanut topping is an unconscious GLYCEMIC INDEX ENGINEERING.'
    }
  ],

  proTips: [
    {
      title: 'Zein — The Uniquely Hydrophobic Cereal Protein',
      description: 'ZEIN is corn\'s primary storage protein (60-70% of total corn protein), and it is chemically unique among cereal proteins: its amino acid composition is >50% HYDROPHOBIC residues (leucine 20%, proline 10%, alanine 10%, phenylalanine 7%), making it essentially a NATURAL PLASTIC. Dry zein films have properties comparable to synthetic polymers (tensile strength 20-30 MPa, oxygen permeability comparable to polyethylene). In bánh đúc ngô, the zein doesn\'t dissolve in the gel matrix — it forms PHASE-SEPARATED MICRODOMAINS because the hydrophobic zein chains are thermodynamically incompatible with the hydrophilic amylose network. This immiscibility is the source of both the opaque appearance (the refractive index difference between zein domains n=1.49 and amylose gel n=1.34 causes light scattering) and the subtle grainy mouthfeel (the tongue\'s mechanoreceptors detect the zein particles as distinct entities within the smooth gel).'
    },
    {
      title: 'Lime Water Ca(OH)₂ — Triple Function Alkali',
      description: 'The lime water (nước vôi trong) in bánh đúc ngô performs THREE FUNCTIONS simultaneously: (1) PERICARP LOOSENING — Ca²⁺ ions chelate with pectin in the corn\'s outer layer, converting insoluble protopectin to soluble calcium pectate, weakening the hull adhesion and allowing partial removal; (2) STARCH MODIFICATION — the alkaline pH (10-12) causes partial AMYLOSE LEACHING from the corn granules during soaking, pre-dissolving some amylose chains into the soaking water. When this amylose-enriched water is used in cooking, the additional free amylose contributes to a STRONGER GEL NETWORK (more inter-granular cross-links); (3) CALCIUM CROSS-LINKING — Ca²⁺ ions form ionic bridges between carboxylate groups on adjacent amylose chains (each bridge requires 2 COO⁻ groups from deprotonated C6 hydroxyl oxidation products), creating a CALCIUM-REINFORCED gel network with 30-50% higher gel strength than the same gel without calcium. This triple function from a single ingredient is an elegant example of BIOCHEMICAL ECONOMY in traditional food processing.'
    },
    {
      title: 'Corn in Nghệ An — Subsistence Grain of the Mountains',
      description: 'Corn (ngô) arrived in Vietnam from the Americas via Portuguese traders in the 16th century and found its AGRICULTURAL NICHE in the mountainous western districts of Nghệ An, where the thin, acidic, well-drained soils on karst limestone were too poor for rice paddy cultivation. Corn\'s drought tolerance (it requires only 500-800mm rainfall vs rice\'s 1,200-2,000mm) and its ability to grow on steep slopes (vs rice\'s need for flat, flooded paddies) made it the SURVIVAL GRAIN of highland Nghệ An communities. Bánh đúc ngô is a POVERTY FOOD in the most dignified sense — it transforms the cheapest available starch into a satisfying, nutritious meal that can be served with whatever toppings are at hand (peanuts from the garden, fish sauce from the pantry, scallions from the yard). The dish\'s survival into the era of rice abundance is a testament to its genuine deliciousness — it persists not from necessity but from affection.'
    },
    {
      title: 'Interpenetrating Polymer Network — The Rice-Corn Co-Gelation',
      description: 'When rice and corn starches gelatinize together, they form an INTERPENETRATING POLYMER NETWORK (IPN) — a material science concept where two or more polymer networks are interlocked on a molecular scale without covalent bonds between them. Rice amylose (DP 1,000-2,000, longer chains) and corn amylose (DP 500-1,000, shorter chains) both form their own entanglement networks during cooling, but these networks INTERPENETRATE — the long rice chains thread through the mesh of the shorter corn network and vice versa, creating a MECHANICALLY INTERLOCKED structure. The IPN has properties that NEITHER COMPONENT has alone: the longer rice amylose chains provide ELASTICITY (they can stretch and recover without breaking), while the shorter corn amylose chains provide FIRMNESS (they form denser crystalline junction zones). The combination gives bánh đúc ngô its characteristic texture: firm enough to slice, elastic enough to not crumble, tender enough to melt on the tongue.'
    }
  ],

  nutritionFacts: {
    servingSize: '1 piece (approximately 150g)',
    calories: 160,
    totalFat: '3g',
    saturatedFat: '0.5g',
    cholesterol: '0mg',
    sodium: '380mg',
    totalCarbohydrate: '30g',
    dietaryFiber: '2g',
    totalSugars: '1g',
    protein: '4g',
    vitaminD: '0mcg',
    calcium: '35mg',
    iron: '1.0mg',
    potassium: '140mg'
  },

  relatedRecipes: [
    {
      title: 'Bánh Mướt',
      slug: 'banh-muot',
      image: '/images/recipes/banh-muot.jpg',
      description: 'Rice rolls — different starch gel, same Nghệ An breakfast'
    },
    {
      title: 'Nhút Thanh Chương',
      slug: 'nhut-thanh-chuong',
      image: '/images/recipes/nhut-thanh-chuong.jpg',
      description: 'Fermented jackfruit — pairs as savory side'
    },
    {
      title: 'Tương Nam Đàn',
      slug: 'tuong-nam-dan',
      image: '/images/recipes/tuong-nam-dan.jpg',
      description: 'Soybean paste — traditional dipping sauce'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Bánh Đúc Ngô — Corn Pudding Cake',
    description: 'Zein-amylose biphasic gel via continuous stirring gelatinization, zein hydrophobic microdomain phase separation Mie scattering opacity, Ca(OH)₂ triple-function nixtamalization analog, rice-corn interpenetrating polymer network co-gelation, figure-8 chaotic advection mixing, and controlled room-temperature coarse-grained nucleation cooling.',
    image: '/images/recipes/banh-duc-ngo.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT15M',
    cookTime: 'PT30M',
    totalTime: 'PT45M',
    recipeYield: '6 servings',
    recipeCategory: 'Appetizer',
    recipeCuisine: 'Vietnamese',
    keywords: 'bánh đúc ngô, corn pudding, vietnamese corn cake, nghệ an corn, central vietnam snack',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '160 calories',
      fatContent: '3g',
      proteinContent: '4g',
      carbohydrateContent: '30g'
    },
    recipeIngredient: [
      '300g dried field corn',
      '100g rice flour',
      'Lime water Ca(OH)₂',
      'Peanuts, sesame, fried shallots',
      'Fish sauce or tương Nam Đàn'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Soak corn overnight with lime water for nixtamalization' },
      { '@type': 'HowToStep', text: 'Grind and combine with rice flour slurry' },
      { '@type': 'HowToStep', text: 'Cook with continuous figure-8 stirring 25 minutes' },
      { '@type': 'HowToStep', text: 'Pour into mold and cool at room temperature' },
      { '@type': 'HowToStep', text: 'Top with peanuts, sesame, fried shallots, scallions' }
    ]
  }
};

export default function BanhDucNgoPage() {
  return <RecipeLayout recipe={recipeData} />;
}
