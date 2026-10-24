'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Ốc Bươu Nhồi Thịt',
  subtitle: 'Stuffed Apple Snail — The Gastropod Pressure Vessel',
  heroImage: '/images/recipes/oc-buou-nhoi-thit.jpg',
  region: 'Northern' as const,
  difficulty: 'Hard',
  prepTime: '1 hr',
  cookTime: '30 min',
  totalTime: '1 hr 30 min',
  servings: 4,
  rating: 4.8,
  reviewCount: 176,
  calories: 320,
  tags: ['Đồng Ruộng', 'Snail', 'Stuffed', 'Northern', 'Lemongrass', 'Street Food'],

  introduction: {
    paragraphs: [
      "Ốc Bươu Nhồi Thịt transforms the humble rice paddy apple snail (Pila polita) into a SELF-CONTAINED PRESSURE COOKING VESSEL — the spiral shell acts as a rigid, calcium-carbonate chamber that contains the seasoned pork-and-snail filling under steam pressure during cooking. The shell\'s geometry — a logarithmic spiral with continuously decreasing cross-section toward the apex — creates a NATURAL FUNNEL that directs steam generated at the wider aperture end inward toward the narrow apex, building localized pressure that forces aromatic compounds (lemongrass, galangal, lime leaf) deep into the protein matrix. No manufactured cookware can replicate this fractal pressure gradient.",
      "The apple snail is the largest freshwater gastropod in Vietnamese rice paddies — shells reaching 6-8cm diameter with internal volumes of 15-25ml, enough to contain a meaningful portion of stuffing. The snail\'s foot muscle (the edible portion) is composed of PARAMYOSIN — a thick-filament muscle protein unique to mollusks that has double the molecular weight of vertebrate myosin (220 kDa vs 520 kDa). Paramyosin forms a crystalline paracrystalline core within each thick filament, giving snail meat its characteristic dense, chewy texture that resists the tenderizing effects of cooking far more effectively than mammalian muscle. This protein must be finely minced and mixed with pork to achieve an edible texture — intact paramyosin fibers remain tough even after hours of cooking.",
      "The dish is a masterwork of REVERSE ENGINEERING: the snail is extracted from its shell, its meat is minced and combined with pork, aromatics, and wood ear mushroom, then the mixture is STUFFED BACK INTO the original shell — the animal\'s own architecture repurposed as its cooking vessel. The shell is then sealed at the aperture by the stuffing itself (which expands slightly during cooking, creating a self-sealing plug), and steamed. The calcium carbonate shell (CaCO₃, thermal conductivity 2.2 W/m·K — 4× higher than water) conducts heat efficiently from the steam environment into the filling, while its rigid structure prevents the filling from expanding and losing its dense, compact texture."
    ]
  },

  ingredients: [
    {
      group: 'Snails',
      items: [
        { name: 'Live apple snails (ốc bươu)', amount: '20 large', note: 'Pila polita — 6-8cm diameter shells' },
        { name: 'Salt', amount: '2 tbsp', note: 'For purging — mucus coagulation' },
        { name: 'Tamarind or vinegar', amount: '2 tbsp', note: 'Acid dissolves surface slime glycoproteins' },
      ]
    },
    {
      group: 'Stuffing',
      items: [
        { name: 'Ground pork (thịt xay)', amount: '300g', note: '70:30 lean:fat — fat lubricates paramyosin' },
        { name: 'Wood ear mushroom (nấm mèo)', amount: '20g dried', note: 'Rehydrated, finely minced — β-glucan crunch' },
        { name: 'Glass noodles (miến)', amount: '30g', note: 'Soaked, cut short — starch binder absorbs juices' },
        { name: 'Shallots (minced)', amount: '3' },
        { name: 'Garlic (minced)', amount: '4 cloves' },
        { name: 'Dill (thì là)', amount: '3 tbsp chopped', note: 'Carvone — signature Northern Vietnamese snail herb' },
        { name: 'Fish sauce', amount: '1 tbsp' },
        { name: 'Pepper', amount: '½ tsp' },
        { name: 'Egg', amount: '1', note: 'Ovalbumin binding matrix' },
      ]
    },
    {
      group: 'Steaming Aromatics',
      items: [
        { name: 'Lemongrass stalks', amount: '4', note: 'Bruised — citral vapor infusion' },
        { name: 'Kaffir lime leaves (lá chanh)', amount: '6', note: 'Citronellal + limonene' },
        { name: 'Ginger slices', amount: '4 slices' },
        { name: 'Beer or water', amount: '200ml', note: 'Beer adds CO₂ + maltose Maillard volatiles' },
      ]
    },
    {
      group: 'Dipping Sauce',
      items: [
        { name: 'Fish sauce', amount: '3 tbsp' },
        { name: 'Lime juice', amount: '2 tbsp' },
        { name: 'Sugar', amount: '1 tbsp' },
        { name: 'Garlic (minced)', amount: '2 cloves' },
        { name: 'Fresh chili (sliced)', amount: '2' },
        { name: 'Ginger (julienned)', amount: '1 tbsp', note: 'Gingerol — TRPV1 warm-burn agonist' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Snail Purging — Mucus Glycoprotein Elimination',
      details: 'Soak live snails in water with salt and tamarind for 4-6 hours, changing water 2-3 times. The snails respond to the acidic-saline environment by secreting MUCUS — a viscous glycoprotein gel (mucin, MW 200-2,000 kDa) that serves as a protective barrier against environmental stress. This stress-secretion response is exploited to PURGE the snails: each secretion cycle expels mucus along with trapped dirt, fecal matter, and sand from the mantle cavity. The acid (tamarind, pH ~3) hydrolyzes the mucin glycoproteins on the shell surface, dissolving the slimy coating. Salt (NaCl) at 3-5% concentration induces osmotic water loss from the snail\'s epithelium, stimulating further mucus secretion. After purging, the snails are clean and their remaining mucus reserves are depleted.',
      time: '4-6 hr (passive)',
      tip: 'Adding a handful of CHILI SLICES to the purging water significantly increases mucus secretion rate. Capsaicin activates TRPV1 receptors on the snail\'s epithelial cells (these receptors are conserved across mollusks), triggering a defensive mucus hypersecretion response. The snail interprets capsaicin exposure as a chemical threat and purges its entire mucus reserve in 2-3 hours instead of the usual 4-6 hours. This accelerated purging also has the side effect of partially TENDERIZING the foot muscle — the snail\'s stress response includes protease release (cathepsin D) that begins breaking down its own muscle protein for energy mobilization.'
    },
    {
      step: 2,
      title: 'Snail Extraction — Operculum Release & Columella Detachment',
      details: 'Bring a pot of water to boil. Blanch snails for 2-3 minutes until the operculum (the hard disc covering the shell aperture) loosens. The operculum is attached to the columellar muscle — a powerful retractor muscle anchored to the central column (columella) of the shell. At 55-65°C, this muscle denatures and loses its grip on both the operculum and the columella. Use a pin or small fork to extract the snail body from the shell with a TWISTING motion — the body is wound around the columella in a spiral matching the shell geometry, and must be extracted along the same spiral path. Separate the foot (edible) from the visceral mass (discard). Reserve the empty shells — these are the cooking vessels.',
      time: '20 min',
      tip: 'The TWISTING extraction motion is not arbitrary — it follows the snail\'s own CHIRALITY. Apple snails are DEXTRAL (right-handed spiral): when viewed from the apex, the shell winds clockwise. The body inside follows this chirality. Extracting with a CLOCKWISE twist (from the diner\'s perspective, looking into the aperture) follows the spiral and slides the body out smoothly. A counterclockwise twist — fighting the chirality — tears the body at the weakest point (the connection between foot and visceral mass), leaving visceral fragments lodged inside the shell that are nearly impossible to remove and will produce bitter, unpleasant flavors during cooking.'
    },
    {
      step: 3,
      title: 'Snail Meat Processing — Paramyosin Comminution',
      details: 'Clean the extracted snail feet thoroughly — remove the remaining mucus by rubbing with salt and lime juice, then rinse. Mince the snail meat VERY FINELY — 2-3mm particles maximum. Paramyosin\'s crystalline paracrystalline structure makes intact snail muscle exceptionally tough (tensile strength 2-3× that of pork muscle). Mincing mechanically disrupts the paracrystalline lattice, breaking the long paramyosin filaments into short, manageable fragments. Without this comminution step, the stuffing would contain chewy, rubbery lumps of snail meat that refuse to integrate with the pork matrix.',
      time: '15 min',
      tip: 'After mincing, MARINATE the snail meat with ½ tsp of baking soda (sodium bicarbonate) for 15 minutes, then rinse thoroughly. The alkaline pH (pH ~8.5) disrupts the paramyosin paracrystalline lattice through electrostatic repulsion: at pH above the protein\'s isoelectric point (~5.5), the paramyosin molecules acquire net negative charge, causing electrostatic repulsion between adjacent molecules in the crystal. This loosens the paracrystalline packing, reducing the meat\'s toughness by 40-60%. The baking soda must be rinsed away before mixing with pork — residual alkalinity would produce a soapy off-flavor and interfere with the pork\'s myosin gelation.'
    },
    {
      step: 4,
      title: 'Stuffing Assembly — Pork-Paramyosin Composite Matrix',
      details: 'Combine minced snail meat, ground pork, minced wood ear mushroom, soaked and cut glass noodles, shallots, garlic, dill, fish sauce, pepper, and egg. Mix vigorously for 3-5 minutes in ONE DIRECTION ONLY (clockwise or counterclockwise — pick one and commit). This unidirectional mixing extracts salt-soluble MYOSIN from the pork, which forms a continuous gel network upon cooking that BINDS the paramyosin snail fragments into a cohesive mass. The egg provides a secondary ovalbumin gel network that fills gaps in the myosin matrix. The glass noodles act as STARCH SPONGES — they absorb 2-3× their weight in liquid during cooking, capturing the meat juices that would otherwise leak out of the shell.',
      time: '10 min',
      tip: 'The UNIDIRECTIONAL MIXING is critical for myosin extraction. Myosin is a polar, rod-shaped molecule (150nm long, 2nm wide). When mixed in one direction, the shear forces align the myosin molecules parallel to the flow direction, creating ORIENTED BUNDLES that cross-link more efficiently during cooking (aligned molecules have more contact area for intermolecular bonding). Reversing direction disrupts these bundles, producing a randomly oriented network with 30-40% less gel strength. The same principle is used in surimi processing — one-directional kneading produces the strongest kamaboko gel.'
    },
    {
      step: 5,
      title: 'Shell Stuffing — Logarithmic Spiral Packing',
      details: 'Clean the reserved shells thoroughly — boil for 5 minutes to sterilize and remove any remaining organic matter. Pack the stuffing into each shell using a chopstick or small spoon, pressing firmly to eliminate air pockets. The filling should be FLUSH with the aperture — not protruding (it will expand slightly during cooking) and not recessed (air gaps reduce heat transfer efficiency). The logarithmic spiral geometry means the filling at the apex is only 3-5mm wide while the aperture end is 20-30mm wide. Heat will penetrate from the aperture (wide end) and from the shell walls simultaneously, converging at the narrow apex — the LAST POINT to reach cooking temperature.',
      time: '20 min',
      tip: 'Leave a small CONCAVE DEPRESSION at the aperture surface rather than packing it completely flat. During steaming, the stuffing expands by approximately 5-8% (from thermal expansion of water + gas expansion of dissolved CO₂). This expansion presses the stuffing outward against the shell walls, creating a SELF-SEAL at the aperture — the expanded stuffing acts as a plug that traps steam inside the shell, building internal pressure. A flat or convex surface would allow the expanding stuffing to push outward into the steam environment, venting pressure and losing the self-pressurizing advantage that the shell geometry provides.'
    },
    {
      step: 6,
      title: 'Aromatic Steaming — Shell-Conducted Vapor Infusion',
      details: 'Arrange lemongrass, kaffir lime leaves, and ginger in the bottom of a wide pot. Place stuffed snails aperture-side UP on a steamer rack above the aromatics. Pour beer (or water) over the aromatics — the beer\'s CO₂ and maltose will generate additional volatile compounds during heating. Cover tightly and steam over high heat for 20-25 minutes. The aromatic steam rises, enters each shell through the upward-facing aperture, and penetrates the stuffing through the concave depression. Simultaneously, the CaCO₃ shell conducts heat from the surrounding steam (thermal conductivity 2.2 W/m·K) directly into the filling through the shell walls — DUAL HEATING from both the open aperture (convective steam) and the shell surface (conductive solid).',
      time: '25 min',
      tip: 'Why BEER instead of water? Beer contributes three things to the steaming environment: (1) CO₂ dissolved in beer (4-5 g/L) is released as gas during heating, INCREASING the total vapor pressure in the pot by 5-10% above pure steam — this higher pressure raises the boiling point slightly, cooking the filling faster; (2) maltose and other reducing sugars undergo Maillard reactions with amino acids from the aromatics at 100°C, producing pyrazines (nutty-roasted) and furanones (caramel) that are carried into the shells by steam; (3) ethanol vapor (from beer\'s ~5% ABV) is an excellent solvent for lipophilic aromatic compounds in lemongrass and lime leaf, extracting citral and citronellal more efficiently than water vapor alone.'
    },
    {
      step: 7,
      title: 'Serving — Aperture Presentation & Extraction Technique',
      details: 'Arrange steamed snails on a platter, aperture-side up. The filling should be visibly set — firm, slightly domed from expansion, with flecks of green dill and dark wood ear mushroom visible on the surface. Serve with nước chấm (ginger-lime-chili fish sauce). The eating technique: hold the shell in one hand (the shell retains heat — use a napkin), use a toothpick or small fork to detach the stuffing from the shell wall with a circular motion, then extract the entire filling cylinder in one piece. The filling should come out as a COHERENT PLUG — if the myosin gel network was properly formed, the filling holds together as a single unit rather than crumbling into fragments.',
      time: '5 min',
      tip: 'The extraction test is the QUALITY INDICATOR: a well-made ốc nhồi produces a filling that slides out as an intact, spiral-shaped cylinder — a perfect mold of the shell\'s interior. This indicates: (1) sufficient myosin extraction (strong gel network), (2) proper packing density (no air gaps that would break the cylinder), (3) correct cooking time (enough for gel to set, not so much that it shrinks and detaches prematurely). A filling that crumbles indicates insufficient mixing (poor myosin extraction); one that sticks to the shell indicates under-cooking (myosin not fully denatured); one that is rubbery and shrunken indicates over-cooking (excessive protein denaturation and water expulsion).'
    }
  ],

  proTips: [
    {
      title: 'CaCO₃ Shell as Heat Exchanger — Superior to Metal Cookware',
      description: 'The snail shell\'s thermal conductivity (2.2 W/m·K for aragonite CaCO₃) is lower than metal but HIGHER than ceramic, glass, or the food itself (water: 0.6 W/m·K, meat: 0.4-0.5 W/m·K). This makes the shell a MODERATE heat conductor — fast enough to transfer heat efficiently from the steam environment to the filling, but slow enough to prevent the SURFACE OVERHEATING that occurs in metal pans. The shell provides a thermal buffer: its 1-2mm wall thickness stores heat energy (specific heat 0.82 J/g·K × ~5g shell mass = ~4.1 J/K thermal mass) that smooths out temperature fluctuations. The filling cooks in a thermally stable environment — no hot spots, no cold spots, just uniform gentle conduction from all directions.'
    },
    {
      title: 'Paramyosin vs Myosin — Mollusk vs Mammal Muscle Architecture',
      description: 'Paramyosin (520 kDa) is TWICE the molecular weight of vertebrate myosin (220 kDa) and forms a different structural arrangement: in mammalian muscle, myosin heads project outward from thick filaments to interact with actin (generating force). In mollusk muscle, paramyosin forms a CRYSTALLINE CORE within the thick filament, with myosin molecules wrapped around the outside. This paracrystalline core acts as a structural scaffold that makes the filament exceptionally rigid — which is why mollusks can maintain shell closure with minimal energy expenditure (the "catch" mechanism). For the cook, this rigidity means snail meat is inherently TOUGHER than pork at any given cooking temperature, requiring mechanical disruption (mincing) or chemical disruption (baking soda) rather than thermal tenderization alone.'
    },
    {
      title: 'Dill in Northern Vietnamese Cuisine — Carvone Specificity',
      description: 'Dill (Anethum graveolens) is the signature herb paired with snails, fish, and eggs in Northern Vietnamese cooking — a pairing not found in Central or Southern cuisine, which prefer rau răm (Vietnamese coriander) and ngò gai (culantro) respectively. Dill\'s primary aromatic compound is S-(+)-carvone (40-60% of essential oil), which activates TRPM8 cold-menthol receptors, creating a cooling sensation that counterbalances the richness of protein-fat fillings. Carvone also has a specific pharmacological property relevant to snails: it is a potent ANTHELMINTIC (anti-parasitic) compound. Rice paddy snails are intermediate hosts for several parasites (Angiostrongylus cantonensis), and the traditional pairing of dill with snails may have originated as an empirical anti-parasitic practice — the carvone volatiles permeate the filling during cooking, providing a chemical insurance policy alongside the thermal kill provided by steam cooking.'
    },
    {
      title: 'Logarithmic Spiral Geometry — Nature\'s Pressure Vessel',
      description: 'The apple snail shell is a logarithmic (equiangular) spiral: each whorl is geometrically similar to the next, with a constant angle between the radius and the tangent line (typically 73-86° for Pila species). This geometry creates a CONTINUOUSLY VARYING CROSS-SECTION from wide aperture to narrow apex. When sealed at the aperture (by the expanding stuffing), steam generated at the wide end is funneled toward the narrow apex, where the decreasing volume compresses the steam. The pressure gradient follows P ∝ 1/A (pressure inversely proportional to cross-sectional area), meaning the apex experiences 4-6× higher pressure than the aperture. This pressure gradient FORCES aromatic steam deep into the filling — the narrow apex end, furthest from the heat source, receives the most pressurized (and therefore hottest) steam, partially compensating for its geometric disadvantage in heat transfer.'
    },
    {
      title: 'Glass Noodle Starch Sponge — Juice Retention Engineering',
      description: 'Glass noodles (miến, from mung bean starch) serve a HYDRAULIC FUNCTION in the stuffing: during cooking, the pork and snail proteins contract and expel approximately 15-20% of their weight as liquid (a combination of water, dissolved proteins, and fat). Without a sorbent, this liquid leaks out through the aperture, producing a dry, tough filling. The pre-soaked glass noodles — already hydrated to 60-70% of their maximum water capacity — absorb this expelled liquid in real time through CAPILLARY ACTION in the amylose gel network. Their remaining absorption capacity (30-40% of maximum) is perfectly matched to the expected liquid loss from the protein matrix. The result: juice that would have been lost is retained within the filling as hydrated starch, maintaining moisture and adding a slippery textural contrast to the dense protein matrix.'
    },
    {
      title: 'Ovalbumin Egg Binder — Secondary Gel Network',
      description: 'The egg in the stuffing is not for flavor — it creates a SECONDARY GEL NETWORK that fills the structural gaps in the primary myosin network. Myosin gels at 50-55°C, forming the main structural matrix. Ovalbumin (the primary egg white protein, 54% of egg white) gels at 80-84°C — significantly HIGHER than myosin. This temperature staggering is crucial: the myosin network sets first (creating the primary structure), then the ovalbumin network fills in the remaining liquid-filled spaces as the temperature continues rising. The result is a DOUBLE-NETWORK gel with both large-pore (myosin, formed first) and small-pore (ovalbumin, formed second) structures — a composite that is stronger, more elastic, and better at retaining moisture than either network alone.'
    }
  ],

  nutritionFacts: {
    servingSize: '5 stuffed snails (approximately 250g)',
    calories: 320,
    totalFat: '14g',
    saturatedFat: '5g',
    cholesterol: '120mg',
    sodium: '780mg',
    totalCarbohydrate: '12g',
    dietaryFiber: '1g',
    totalSugars: '2g',
    protein: '35g',
    vitaminD: '0mcg',
    calcium: '180mg',
    iron: '6.2mg',
    potassium: '350mg'
  },

  relatedRecipes: [
    {
      title: 'Ốc Len Xào Dừa',
      slug: 'oc-len-xao-dua',
      image: '/images/recipes/oc-len-xao-dua.jpg',
      description: 'Mud creeper snails in coconut — another gastropod preparation'
    },
    {
      title: 'Canh Chua Cá Lóc',
      slug: 'canh-chua-ca-loc',
      image: '/images/recipes/canh-chua-ca-loc.jpg',
      description: 'Sour fish soup — another rice paddy harvest dish'
    },
    {
      title: 'Bún Chả Cá',
      slug: 'bun-cha-ca',
      image: '/images/recipes/bun-cha-ca.jpg',
      description: 'Fish cake noodle soup — myosin gel science'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Ốc Bươu Nhồi Thịt — Stuffed Apple Snail',
    description: 'Rice paddy apple snail shells repurposed as logarithmic-spiral pressure vessels for pork-paramyosin stuffing with dill carvone, beer-steamed aromatic infusion, CaCO₃ dual-conduction heating, and ovalbumin double-network gel binding.',
    image: '/images/recipes/oc-buou-nhoi-thit.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT60M',
    cookTime: 'PT30M',
    totalTime: 'PT90M',
    recipeYield: '4 servings (20 snails)',
    recipeCategory: 'Appetizer',
    recipeCuisine: 'Vietnamese',
    keywords: 'ốc bươu nhồi thịt, stuffed snail, apple snail, vietnamese snail recipe, northern vietnamese food, rice paddy cuisine, đồng ruộng, dill snail',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '320 calories',
      fatContent: '14g',
      proteinContent: '35g',
      carbohydrateContent: '12g'
    },
    recipeIngredient: [
      '20 large apple snails',
      '300g ground pork (70:30 lean:fat)',
      '20g dried wood ear mushroom',
      '30g glass noodles',
      'Dill, shallots, garlic, egg',
      '4 lemongrass stalks, 6 kaffir lime leaves',
      '200ml beer for steaming'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Purge snails in salt-acid water for mucus glycoprotein elimination' },
      { '@type': 'HowToStep', text: 'Extract snails via operculum release and columella detachment' },
      { '@type': 'HowToStep', text: 'Mince snail meat for paramyosin comminution' },
      { '@type': 'HowToStep', text: 'Assemble pork-paramyosin composite with unidirectional mixing' },
      { '@type': 'HowToStep', text: 'Pack stuffing into shells with concave aperture self-seal' },
      { '@type': 'HowToStep', text: 'Steam with beer-lemongrass-lime leaf aromatic infusion' },
      { '@type': 'HowToStep', text: 'Serve aperture-up with ginger-lime-chili dipping sauce' }
    ]
  }
};

export default function OcBuouNhoiThitPage() {
  return <RecipeLayout recipe={recipeData} />;
}
