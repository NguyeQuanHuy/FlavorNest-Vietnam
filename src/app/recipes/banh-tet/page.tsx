'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Bánh Tét',
  subtitle: 'Cylindrical Sticky Rice Log — The Radial Symmetry Conduction-Optimized Starch Cylinder',
  heroImage: '/images/recipes/banh-tet.jpg',
  region: 'Southern' as const,
  difficulty: 'Hard',
  prepTime: '3 hr',
  cookTime: '8-10 hr',
  totalTime: '13 hr',
  servings: 8,
  rating: 4.8,
  reviewCount: 287,
  calories: 480,
  tags: ['Tết', 'Southern', 'Sticky Rice', 'Traditional', 'Celebration'],

  introduction: {
    paragraphs: [
      "Bánh tét is the CYLINDRICAL COUNTERPART to bánh chưng — same ingredients, same hydrothermal starch fusion process, but a fundamentally different GEOMETRY that changes the heat transfer physics, the structural mechanics, and the eating experience. The cylinder is wrapped in banana leaf (not lá dong) and achieves its shape by rolling rather than folding. This cylindrical geometry provides RADIAL SYMMETRY — heat penetrates uniformly from all directions perpendicular to the long axis, meaning the temperature gradient is purely one-dimensional (radial), compared to the THREE-DIMENSIONAL gradient in a cube. For a cylinder of radius R, the center reaches cooking temperature in time t ≈ R²/(4α), where α is thermal diffusivity (~1.5 × 10⁻⁷ m²/s for hydrated glutinous rice). For a typical bánh tét radius of 5cm, t ≈ (0.05)²/(4 × 1.5 × 10⁻⁷) ≈ 4,200 seconds ≈ 70 minutes — meaning the GEOMETRIC CENTER reaches 100°C within the first hour. The remaining 7-9 hours are entirely for the STARCH FUSION process (grain boundary dissolution and amylopectin interpenetration), not for heat penetration. This is more thermally efficient than bánh chưng's cube, where the corners overshoot while the face centers are still equilibrating.",
      "The BANANA LEAF wrapping (Musa × paradisiaca) creates a different flavor profile than lá dong. Banana leaf's essential oil contains EUGENOL (15-25% of volatiles, the same compound that gives cloves their aroma) and trans-2-HEXENAL (10-20%, a green-leaf aldehyde with a fresh, grassy note). During the 8-10 hour cook, these volatiles infuse into the rice at a rate determined by their PARTITION COEFFICIENTS between the leaf wax and the aqueous rice phase: eugenol (log P = 2.5) preferentially stays in the lipid phase, creating a concentrated aromatic layer at the rice-leaf interface, while hexenal (log P = 1.6) distributes more evenly throughout the rice. This creates a GRADIENT AROMATICS: the outermost rice layer has an intense, clove-like warmth that diminishes toward the center, while the grassy-fresh note is uniformly distributed. Bánh chưng's lá dong provides a different gradient — chlorogenic acid (log P = -0.4) distributes almost entirely in the aqueous phase, creating a uniform vegetal note throughout rather than a surface-concentrated spice aroma.",
      "The CYLINDRICAL SLICE reveals a different AESTHETIC than bánh chưng's square cross-section. A properly made bánh tét slice is a perfect CIRCLE with CONCENTRIC RINGS: a thin dark-green outer ring (banana leaf chlorophyll infusion), a translucent pale rice annulus, a golden mung bean ring, and a coral-pink pork center — a TARGET PATTERN that is one of the most recognizable images of Vietnamese Tết. Some regional variants add VISUAL COMPLEXITY: banana or coconut strips in the center for a different color pattern, or pandan juice in the rice for a jade-green base. The circular geometry also affects the FILLING-TO-RICE RATIO per bite: because the cross-sectional area scales with r², a slice from the center of a cylinder has a much higher filling fraction than a slice from near the end (where the filling tapers to zero). Vietnamese families traditionally cut bánh tét with the cotton string used to tie it — wrapping the string around the cylinder and pulling to create a clean, compression-free cut that doesn't deform the concentric ring pattern."
    ]
  },

  ingredients: [
    {
      group: 'Rice Layer',
      items: [
        { name: 'Glutinous rice (gạo nếp)', amount: '1 kg', note: 'Soaked 8-12 hr — same hydration protocol as bánh chưng' },
        { name: 'Salt', amount: '1 tsp' },
        { name: 'Pandan extract (optional)', amount: '2 tbsp', note: 'Jade-green variant — 2-acetyl-1-pyrroline aromatic' },
      ]
    },
    {
      group: 'Mung Bean Layer',
      items: [
        { name: 'Split mung beans', amount: '400g', note: 'Soaked, steamed, mashed — concentric ring' },
        { name: 'Sugar', amount: '2 tbsp' },
        { name: 'Salt', amount: '½ tsp' },
        { name: 'Coconut cream', amount: '3 tbsp', note: 'Southern richness — MCT lauric acid' },
      ]
    },
    {
      group: 'Pork Filling',
      items: [
        { name: 'Pork belly', amount: '500g', note: '30-40% fat — radial center core' },
        { name: 'Shallots (minced)', amount: '3' },
        { name: 'Fish sauce', amount: '2 tbsp' },
        { name: 'Black pepper', amount: '1 tsp' },
        { name: 'Five-spice powder', amount: '½ tsp', note: 'Southern accent — star anise dominant' },
      ]
    },
    {
      group: 'Wrapping',
      items: [
        { name: 'Banana leaves', amount: '20-30 large pieces', note: 'Blanched — eugenol + hexenal aromatic system' },
        { name: 'Kitchen string or bamboo strips', amount: 'As needed' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Rice & Filling Preparation — Identical Foundation',
      details: 'Prepare glutinous rice, mung bean paste, and marinated pork belly using the same protocols as bánh chưng (soak rice 8-12 hours, steam and mash mung beans, marinate pork with aromatics). The ONE DIFFERENCE in the Southern version is the addition of COCONUT CREAM to the mung bean paste — this introduces MEDIUM-CHAIN TRIGLYCERIDES (MCTs, primarily lauric acid C12:0 at 45-50% of coconut fat) that have a LOWER MELTING POINT (24°C for lauric acid vs 63°C for stearic acid in pork fat) and a FASTER DIFFUSION RATE in the mung bean matrix (D ≈ 2 × 10⁻¹⁰ m²/s for MCTs vs 10⁻¹⁰ m²/s for long-chain triglycerides). This means coconut fat permeates the mung bean layer MORE COMPLETELY than pork fat alone, creating a RICHER, more uniformly unctuous filling layer. Optional: mix pandan extract into the rice for the jade-green variant.',
      time: '8-12 hr soak + 1 hr prep',
      tip: 'PANDAN EXTRACT adds both COLOR and AROMA to the rice. The green color comes from CHLOROPHYLL (extracted by blending pandan leaves with water and straining), which is the same molecule present in lá dong and banana leaf but delivered at 10-50× higher concentration. The aroma comes from 2-ACETYL-1-PYRROLINE (2AP), the same compound responsible for jasmine rice and basmati rice fragrance. Pandan contains 2AP at 0.1-0.4 ppm — above its odor detection threshold of 0.06 ppb, this concentration creates a powerful floral-nutty aroma that infuses the entire rice layer during cooking. The 2AP is HEAT-STABLE up to 120°C (well above the 100°C boiling), so the aroma persists through the 8-10 hour cook.'
    },
    {
      step: 2,
      title: 'Cylindrical Assembly — Radial Symmetry Construction',
      details: 'Lay 3-4 banana leaf pieces on a flat surface, overlapping to form a rectangle approximately 40×50cm. The banana leaves should be arranged with their NATURAL CURVE all facing the same direction — this curvature assists the rolling process by guiding the rice into a cylindrical form. Spread a 1cm-thick layer of rice across the center third of the leaves, leaving 10cm margins on the short edges. Form a LOG of mung bean paste (2-3cm diameter) along the center of the rice. Place pork strips along the center of the mung bean. Add more mung bean paste on top, then more rice to encapsulate the filling. The filling should form a CONCENTRIC CYLINDER: pork core (2cm diameter), mung bean annulus (1cm thick), rice outer layer (1.5-2cm thick). Roll tightly using the banana leaves, tucking in the ends like a candy wrapper. Tie with string at 3-4cm intervals along the length — the string ties serve as COMPRESSION RINGS that maintain the cylindrical cross-section during cooking.',
      time: '30 min per log',
      tip: 'The ROLLING TECHNIQUE determines the cross-section quality. Roll from ONE SIDE only (not both sides toward the middle, which creates a seam). Apply EVEN PRESSURE throughout the roll — uneven pressure creates an ECCENTRIC cross-section where the filling is off-center (the pork core displaced toward one side, creating a thick rice wall on one side and a thin one on the other). The visual test: look at the roll from the end — the filling should appear centered. If it\'s off-center by more than 5mm, unroll and re-roll. The string ties should be firm but not tight enough to create WAIST CONSTRICTIONS — the cross-section should be uniform along the entire length, not a series of bulges separated by pinch points. Aim for 7-8cm finished diameter.'
    },
    {
      step: 3,
      title: 'Hydrothermal Cooking — Radial Starch Fusion',
      details: 'Submerge the logs completely in boiling water. The CYLINDRICAL GEOMETRY allows a FASTER cook than an equivalent-volume cube: for a 7cm diameter cylinder (radius 3.5cm), the radial penetration time is t = R²/(4α) ≈ 2,000 seconds ≈ 33 minutes — the entire cross-section reaches 100°C within the first hour. Compare to a 15cm cube where the center-to-face distance is 7.5cm and penetration time is ~2.5 hours. Cook for 8-10 hours — 2 hours less than bánh chưng because the shorter thermal penetration distance means the starch fusion process begins uniformly earlier. Maintain water level above the logs at all times. Rotate the logs 180° halfway through the cook — this compensates for any slight convection-driven temperature asymmetry (the bottom of the pot is slightly hotter due to the heat source).',
      time: '8-10 hr',
      tip: 'The 8-10 hour cook (vs 10-12 for bánh chưng) is not a shortcut — it\'s geometrically OPTIMAL. The starch fusion process (grain boundary dissolution + amylopectin interpenetration) takes the same 7-8 hours regardless of geometry — it\'s a chemical kinetics problem, not a heat transfer one (at 100°C, the oryzenin disulfide bond hydrolysis rate constant k ≈ 10⁻⁴ s⁻¹ is the rate-limiting step). The difference is that the cylinder reaches uniform 100°C in 30-60 minutes, while the cube takes 2-3 hours. Adding this thermal equilibration time: cylinder = 1 hr + 8 hr fusion = 9 hr total; cube = 2.5 hr + 8 hr fusion = 10.5 hr total. The 2-hour savings is purely from GEOMETRY, not from under-cooking.'
    },
    {
      step: 4,
      title: 'Cooling & Serving — String-Cut Technique',
      details: 'Remove from pot and press gently under a flat board (less pressure needed than bánh chưng — the cylindrical geometry naturally expels less water because the surface-to-volume ratio is lower for a cylinder than a cube of equivalent volume). Cool for 4-6 hours. To serve, use the STRING-CUT TECHNIQUE: wrap a piece of cotton string or dental floss around the cylinder at the desired slice position, cross the two ends, and pull in opposite directions. The string creates a COMPRESSION CUT — it squeezes through the gel by concentrating the cutting force along a 0.5mm-wide line (pressure = force / area — the thin string creates enormous local pressure, exceeding the gel\'s yield stress of ~5 kPa with minimal applied force). This is superior to knife cutting because: (1) a knife\'s 1-2mm blade width SMEARS the concentric layers, blurring the ring pattern; (2) the knife\'s wedge action SPLITS the cake ahead of the cut, creating irregular fracture surfaces; (3) the sticky amylopectin adheres to the knife blade, requiring re-cleaning between cuts. The string leaves a clean, undistorted cross-section that displays the concentric rings in full visual glory.',
      time: '4-6 hr cooling + cut to serve',
      tip: 'THICKNESS of each slice matters for the eating experience. Traditional slices are 1.5-2cm thick — thin enough to pick up with chopsticks without breaking, thick enough to contain a full cross-section of all concentric layers in each bite. Thinner slices (<1cm) tend to FRACTURE along the mung bean-rice interface (the weakest point in the structure, where the adhesion between dissimilar gels is lower than the cohesion within either gel). Thicker slices (>3cm) are unwieldy and the filling-to-rice ratio per bite becomes too high at the center, too low at the periphery — the radial geometry means the filling fraction increases quadratically toward the center (area = πr²), so a thick bite from the center is mostly mung bean and pork, while a thick bite from the edge is almost entirely rice. 1.5-2cm thickness provides the best BALANCED BITE where chopsticks can capture all layers simultaneously.'
    }
  ],

  proTips: [
    {
      title: 'Cylinder vs Cube — A Tale of Two Geometries',
      description: 'The North-South divide in Vietnamese Tết rice cakes (square bánh chưng vs cylindrical bánh tét) is a study in GEOMETRIC TRADE-OFFS. The cube has a higher surface-area-to-volume ratio (6/a for a cube of side a, vs 2/r + 2/h for a cylinder of radius r and height h), meaning it loses heat faster during cooling — good for rapid gel setting (maintaining the square shape) but bad for shelf life (more surface for microbial colonization). The cylinder has a lower SA:V ratio, retaining heat longer (slower gel setting, no need for heavy pressing) and presenting less surface area for spoilage. The cube tessellates perfectly for packing and storage; the cylinder wastes space between logs but can be cut in continuous slices without exposing internal surfaces until ready to eat. The cube\'s 3D geometry creates corner effects (overcooked corners, undercooked face centers); the cylinder\'s radial symmetry cooks uniformly. Neither is superior — each is optimized for its region\'s climate and eating culture: the cold Northern Tết needs rapid pressing and compact storage; the warm Southern Tết needs slower spoilage and on-demand slicing.'
    },
    {
      title: 'Five-Spice Powder — The Southern Aromatic Signature',
      description: 'Southern bánh tét often includes FIVE-SPICE POWDER (ngũ vị hương) in the pork filling — a blend absent from Northern bánh chưng. The five spices (star anise, clove, cinnamon, Sichuan pepper, fennel) provide a MULTI-RECEPTOR aromatic activation: trans-ANETHOLE from star anise and fennel activates the olfactory receptor OR1G1 (sweet, licorice note); EUGENOL from clove activates OR2W1 and TRPV1 (warm, dental-anesthetic); CINNAMALDEHYDE from cinnamon activates TRPA1 (hot-sweet, irritant channel); HYDROXY-α-SANSHOOL from Sichuan pepper activates KCNK channels (tingling, paresthetic). This multi-channel activation creates a COMPLEX warmth that is distinct from single-spice heat — it engages five independent neural pathways simultaneously, producing a perceptual richness that the brain interprets as "depth." Northern bánh chưng, using only black pepper (piperine on TRPV1 alone), has a simpler, cleaner spice profile that allows the pork and mung bean flavors to dominate. The five-spice vs pepper-only divide mirrors the broader North-South Vietnamese flavor philosophy: Northern clarity vs Southern complexity.'
    },
    {
      title: 'Banana Leaf Tannin Interaction — Natural Browning Inhibitor',
      description: 'Banana leaf contains CONDENSED TANNINS (proanthocyanidins B1 and B2) at 5-10 mg/g dry weight that leach into the rice surface during cooking. These tannins INHIBIT enzymatic browning by binding to and inactivating polyphenol oxidase (PPO) — the enzyme that causes cut fruits and vegetables to turn brown. While PPO-driven browning is not a major concern in rice, the tannins also INHIBIT non-enzymatic browning (Maillard reaction) by chelating the metal ion catalysts (Fe²⁺, Cu²⁺) that accelerate the reaction. This is why banana leaf-wrapped bánh tét maintains a LIGHTER COLOR than lá dong-wrapped bánh chưng even after extended storage: the tannin-mediated Maillard inhibition slows the sugar-amino acid condensation that would otherwise darken the rice over days. However, this browning inhibition is a double-edged sword: when pan-frying leftover bánh tét, the tannin-treated surface browns MORE SLOWLY than untreated rice, requiring 20-30% longer frying time to achieve the same Maillard crust intensity.'
    },
    {
      title: 'Sweet Variants — Bánh Tét Nhân Chuối & Đậu',
      description: 'Southern bánh tét has SWEET VARIANTS that have no bánh chưng counterpart: banana-filled (nhân chuối) replaces pork with ripe banana pieces, and sweet mung bean (đậu đường) uses heavily sweetened mung bean without meat. The banana filling introduces a unique TEXTURAL TRANSFORMATION: raw banana is firm (cell turgor pressure 0.5-1.0 MPa) with a starchy texture (25-30% starch, low sugar). During the 8-10 hour cook, the banana\'s starch is completely converted to sugars by residual amylase activity (α-amylase survives up to 70°C, glucoamylase up to 60°C — both active during the temperature ramp), and the pectin in the cell walls is solubilized by the hot acidic environment (banana pH 4.5-5.0), causing the cells to separate and the tissue to become SOFT-JAMMY. The combination of gelatinized rice + caramelized banana (Maillard between banana sugars and amino acids) + mung bean creates a DESSERT VERSION that is distinctly Southern — in the North, sweet rice cakes exist (bánh chưng ngọt with lotus seeds) but never with banana, reflecting the agricultural abundance: bananas fruit year-round in the South\'s tropical lowlands, while Northern bananas are seasonal and too valuable to cook into rice cakes.'
    }
  ],

  nutritionFacts: {
    servingSize: '2 slices (approximately 180g)',
    calories: 480,
    totalFat: '16g',
    saturatedFat: '7g',
    cholesterol: '50mg',
    sodium: '620mg',
    totalCarbohydrate: '68g',
    dietaryFiber: '3g',
    totalSugars: '3g',
    protein: '14g',
    vitaminD: '0mcg',
    calcium: '25mg',
    iron: '2mg',
    potassium: '230mg'
  },

  relatedRecipes: [
    {
      title: 'Bánh Chưng',
      slug: 'banh-chung',
      image: '/images/recipes/banh-chung.jpg',
      description: 'Square Northern cousin — same soul, different geometry'
    },
    {
      title: 'Thịt Kho Tàu',
      slug: 'thit-kho-tau',
      image: '/images/recipes/thit-kho-tau.jpg',
      description: 'Caramelized pork — essential Southern Tết pairing'
    },
    {
      title: 'Dưa Hành',
      slug: 'dua-hanh',
      image: '/images/recipes/dua-hanh.jpg',
      description: 'Pickled onions — acid balance for rich rice cake'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Bánh Tét — Cylindrical Sticky Rice Log',
    description: 'Radial symmetry conduction-optimized starch cylinder — thermal penetration t=R²/4α≈33 min for uniform 100°C, banana leaf eugenol + hexenal aromatic partition gradient, coconut MCT lauric acid enhanced mung bean diffusion, string-cut compression technique for concentric ring display, and five-spice multi-receptor OR1G1+TRPV1+TRPA1+KCNK activation.',
    image: '/images/recipes/banh-tet.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-20',
    prepTime: 'PT3H',
    cookTime: 'PT10H',
    totalTime: 'PT13H',
    recipeYield: '2 logs (~8 servings)',
    recipeCategory: 'Main Course',
    recipeCuisine: 'Vietnamese',
    keywords: 'bánh tét, cylindrical rice cake, southern tết food, vietnamese sticky rice log, lunar new year',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '480 calories',
      fatContent: '16g',
      proteinContent: '14g',
      carbohydrateContent: '68g'
    },
    recipeIngredient: [
      '1 kg glutinous rice (soaked 8-12 hr)',
      '400g split mung beans + coconut cream',
      '500g pork belly with five-spice',
      'Banana leaves for wrapping',
      'Optional: pandan extract for jade-green variant'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Prepare rice, mung bean paste with coconut cream, and five-spice pork' },
      { '@type': 'HowToStep', text: 'Roll concentric layers in banana leaf, tie at 3-4cm intervals' },
      { '@type': 'HowToStep', text: 'Boil 8-10 hours for radial starch fusion' },
      { '@type': 'HowToStep', text: 'Cool, string-cut into 1.5-2cm slices revealing concentric rings' }
    ]
  }
};

export default function BanhTetPage() {
  return <RecipeLayout recipe={recipeData} />;
}
