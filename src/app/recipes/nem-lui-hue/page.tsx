'use client';

import RecipeLayout from '../_components/RecipeLayout';

const recipeData = {
  title: 'Nem Lụi Huế',
  subtitle: 'Huế Grilled Pork Skewers with Lemongrass Stalk & Wrapping Ritual',
  heroImage: '/images/recipes/nem-lui-hue.jpg',
  region: 'Central' as const,
  difficulty: 'Medium',
  prepTime: '45 min',
  cookTime: '15 min',
  totalTime: '1 hr',
  servings: 4,
  rating: 4.8,
  reviewCount: 215,
  calories: 420,
  tags: ['Huế', 'Grilled', 'Pork', 'Wrapping', 'Interactive', 'Street Food'],

  introduction: {
    paragraphs: [
      "Nem Lụi is Huế\'s most INTERACTIVE dish — a grilled pork forcemeat skewered on lemongrass stalks that arrives at the table as a construction kit requiring assembly. The eater wraps the grilled meat in rice paper with fresh herbs, pickled vegetables, and star fruit, then dips the assembled roll into a rich peanut-liver sauce. Every bite is a custom creation, and no two rolls from the same plate are identical.",
      "What makes Nem Lụi scientifically fascinating is its LEMONGRASS SKEWER architecture. The meat is not simply pierced by the lemongrass stalk — it is MOLDED around it, creating a coaxial cylinder where the inner core is hollow lemongrass and the outer shell is pork forcemeat. During grilling, the lemongrass\'s essential oils (citral, geraniol, myrcene) vaporize from the inside outward, infusing the meat through internal diffusion rather than surface contact. This is INSIDE-OUT flavoring — the aromatics originate at the center and migrate to the periphery, the reverse of conventional marinades.",
      "The wrapping ritual — assembling each roll with personally selected proportions of herb, fruit, pickle, and sauce — transforms eating from consumption into PERFORMANCE. This participatory architecture is deeply embedded in Central Vietnamese food culture, where the eater\'s active involvement is considered essential to the experience. The dish is not finished when it leaves the kitchen; it is finished when the eater completes the assembly."
    ]
  },

  ingredients: [
    {
      group: 'Pork Forcemeat',
      items: [
        { name: 'Pork shoulder, minced', amount: '400g', note: '70:30 lean-to-fat ratio for emulsion stability' },
        { name: 'Pork fatback, diced 3mm', amount: '100g', note: 'Visible fat pockets for basting during grilling' },
        { name: 'Lemongrass, white part, minced', amount: '3 stalks', note: 'Cellular rupture releases citral into the paste' },
        { name: 'Shallots, minced', amount: '3 bulbs' },
        { name: 'Garlic, minced', amount: '4 cloves' },
        { name: 'Fish sauce', amount: '2 tbsp' },
        { name: 'Sugar', amount: '1 tbsp' },
        { name: 'Black pepper', amount: '1 tsp' },
        { name: 'Five-spice powder', amount: '½ tsp' },
        { name: 'Cornstarch', amount: '1 tbsp', note: 'Moisture binder preventing drip loss' },
        { name: 'Cooking oil', amount: '1 tbsp' },
      ]
    },
    {
      group: 'Lemongrass Skewers',
      items: [
        { name: 'Lemongrass stalks (thick, firm)', amount: '12 stalks', note: 'Bottom 15cm — trimmed, outer layers removed' },
      ]
    },
    {
      group: 'Wrapping Components',
      items: [
        { name: 'Bánh tráng (rice paper)', amount: '20 sheets', note: 'Thin, flexible — briefly dampened before use' },
        { name: 'Lettuce leaves', amount: '1 head' },
        { name: 'Fresh herbs: mint, Thai basil, rau răm, tía tô', amount: '2 bunches mixed' },
        { name: 'Green banana, thinly sliced', amount: '1 piece', note: 'Astringent tannins for palate contrast' },
        { name: 'Star fruit, thinly sliced', amount: '2 pieces', note: 'Oxalic acid + malic acid dual tartness' },
        { name: 'Cucumber, julienned', amount: '1 piece' },
        { name: 'Pickled carrots & daikon', amount: '200g' },
        { name: 'Bean sprouts', amount: '150g' },
      ]
    },
    {
      group: 'Nước Lèo (Peanut-Liver Dipping Sauce)',
      items: [
        { name: 'Pork liver pâté', amount: '100g', note: 'Lecithin emulsifier for sauce body' },
        { name: 'Roasted peanuts, crushed', amount: '80g' },
        { name: 'Hoisin sauce', amount: '3 tbsp' },
        { name: 'Peanut butter (smooth)', amount: '2 tbsp' },
        { name: 'Coconut milk', amount: '100ml' },
        { name: 'Garlic, minced', amount: '2 cloves' },
        { name: 'Chili paste (sa tế)', amount: '1 tbsp' },
        { name: 'Sugar', amount: '1 tbsp' },
        { name: 'Fish sauce', amount: '1 tbsp' },
        { name: 'Cooking oil', amount: '1 tbsp' },
        { name: 'Sesame seeds', amount: '1 tbsp', note: 'Garnish' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Forcemeat Emulsion — Myosin Salt-Soluble Extraction',
      details: 'Combine minced pork shoulder with fish sauce and salt first — mix vigorously for 3-4 minutes. The NaCl from fish sauce (≈25% salt) extracts myosin from muscle fibers into solution. Dissolved myosin acts as an emulsifying protein: its hydrophobic regions bind to fat globules while its hydrophilic regions bind to water, creating a stable meat emulsion that will hold together on the skewer during grilling. THEN add minced lemongrass, shallots, garlic, sugar, pepper, five-spice, cornstarch, and diced fatback. Mix until sticky and cohesive.',
      time: '10 min',
      tip: 'The order matters: salt+meat FIRST to extract myosin, other ingredients AFTER. If you add everything simultaneously, the starch and sugar interfere with myosin extraction — they compete for water molecules through osmotic pressure, leaving less free water available to dissolve the myosin. Under-extracted myosin produces a crumbly forcemeat that falls off the skewer during grilling. The target texture after mixing: when you press a ball against your palm and invert your hand, it should cling without falling for 3 seconds.'
    },
    {
      step: 2,
      title: 'Lemongrass Skewer Preparation — Volatile Reservoir Engineering',
      details: 'Trim lemongrass stalks to 15cm lengths. Remove 1-2 outer tough layers to expose the softer inner core. Score the exposed surface lightly with a knife — these micro-cuts become channels for essential oil release during grilling. The lemongrass stalk contains oleiferous glands concentrated in the inner layers — citral (60-80% of essential oil), geraniol (5-10%), and myrcene (1-5%) are stored in these glands at liquid state. During grilling at >100°C, these oils vaporize, creating internal pressure that drives volatile migration OUTWARD through the surrounding meat.',
      time: '10 min',
      tip: 'The scoring creates controlled release points — without it, essential oil vaporization pressure can build until the meat-lemongrass interface ruptures, creating a steam blowout that cracks the forcemeat cylinder. With scoring, pressure releases gradually through multiple micro-channels, delivering sustained aromatic infusion over the entire 10-12 minute grilling period rather than one catastrophic burst.'
    },
    {
      step: 3,
      title: 'Molding — Coaxial Cylinder Construction',
      details: 'Take ~40g of forcemeat. Oil your hands lightly. Press the meat around the top 8cm of the lemongrass stalk, building a cylinder 2-2.5cm in diameter with uniform wall thickness (~1cm) around the hollow lemongrass core. The key technique: start from the middle and press outward toward both ends, then smooth the surface. The cylinder must have no cracks or thin spots — these become failure points during grilling where the meat splits and falls into the fire.',
      time: '20 min',
      tip: 'The 1cm wall thickness is optimized for the grilling equation: at 2cm from heat source with a 1cm meat wall, thermal diffusion (α ≈ 1.4 × 10⁻⁷ m²/s for pork) achieves center temperature of 75°C in approximately 5-6 minutes per side. Thicker walls would leave raw centers when the surface is already charred; thinner walls dry out before Maillard browning fully develops. The lemongrass core provides no thermal resistance — it is essentially a flavor-delivery hollow that the heat conducts around.'
    },
    {
      step: 4,
      title: 'Grilling — Radiant Heat + Internal Volatile Infusion',
      details: 'Grill over medium-high charcoal (not maximum — you need sustained heat, not searing). Rotate skewers 90° every 2-3 minutes for four-sided browning. Total grilling time: 10-12 minutes. During this time, three simultaneous processes occur: (1) Surface Maillard browning (140-180°C surface temp), (2) Internal lemongrass oil vaporization (citral boils at 229°C but begins significant vapor pressure at 100°C), (3) Fat rendering from visible fatback cubes, creating internal basting rivulets.',
      time: '12 min',
      tip: 'Listen for the sizzle frequency change: initially, the surface water evaporates (high-frequency crackling at 2,000-5,000 Hz as steam escapes). After 3-4 minutes, the surface dehydrates and the sound shifts to lower frequency popping (500-1,500 Hz) as fat begins rendering. This frequency transition marks the shift from evaporative cooling phase (limiting surface temperature to 100°C) to Maillard browning phase (surface exceeds 140°C). The browning only begins AFTER the sound changes.'
    },
    {
      step: 5,
      title: 'Nước Lèo Sauce — Peanut-Liver Triple Emulsion',
      details: 'Heat oil, sauté garlic until fragrant. Add pork liver pâté, break it up and cook 2 minutes (develops Maillard flavors on liver surface). Add hoisin sauce, peanut butter, and chili paste — stir to combine. Add coconut milk gradually while stirring — the lecithin from liver pâté emulsifies the coconut fat into the water-based sauce, creating a stable oil-in-water emulsion. The crushed peanuts go in LAST — they provide texture disruption in the otherwise smooth sauce. Season with fish sauce, sugar. Simmer 5 minutes to thicken. Garnish with sesame seeds.',
      time: '10 min',
      tip: 'This sauce is a TRIPLE EMULSION: (1) Peanut oil from butter and crushed nuts dispersed in water phase, (2) Coconut fat globules dispersed in water phase, (3) Liver fat micro-droplets dispersed in water phase — all stabilized by liver lecithin (phosphatidylcholine). This triple-fat system creates an extraordinarily rich mouthfeel: each fat type melts at a different temperature (peanut oil is already liquid at room temp, coconut fat melts at 24°C, liver fat at 30-35°C), producing a cascading richness sensation as the sauce warms on the palate.'
    },
    {
      step: 6,
      title: 'Rice Paper Hydration — Amylose Plasticization Window',
      details: 'Briefly dip each rice paper sheet in warm water (30-35°C) for 2-3 seconds — NOT until soft, just until it begins to become pliable. It will continue hydrating on the plate as you assemble the roll. Over-hydration (>5 seconds) plasticizes the amylose network too thoroughly, creating a sticky, tear-prone wrapper. Under-hydration (<1 second) leaves brittle zones that crack during rolling.',
      time: '1 min per sheet',
      tip: 'Rice paper is a dried amylose gel — when dehydrated, the amylose chains form a glass-state network (below glass transition temperature Tg). Water acts as a plasticizer, lowering Tg below room temperature, converting the glass-state to rubber-state. The 2-3 second window targets the exact moment when enough water has penetrated to reach the rubber state (pliable) but before excess water creates a sol state (sticky, no structural integrity). This is a phase-transition precision technique.'
    },
    {
      step: 7,
      title: 'Roll Assembly — The Participatory Architecture',
      details: 'Lay hydrated rice paper on plate. Layer: lettuce leaf (moisture barrier between wet rice paper and filling), herbs (rau răm, mint, basil, tía tô), cucumber, bean sprouts, star fruit slice, green banana slice. Slide the grilled forcemeat OFF the lemongrass stalk by twisting and pulling — the meat should release cleanly (oil in the forcemeat prevents adhesion). Place meat on the herb bed. Fold bottom of rice paper over filling, fold in sides, roll tightly. Dip in nước lèo.',
      time: '2 min per roll',
      tip: 'The lettuce leaf between rice paper and filling is critical engineering: it creates a hydrophobic barrier (leaf wax cuticle, primarily C₂₉ and C₃₁ alkanes) that prevents the filling\'s moisture from migrating into the rice paper. Without it, the rice paper absorbs water from the herbs and meat juices within 30-60 seconds, becoming soggy and transparent to the point of structural failure. The lettuce extends the roll\'s structural lifespan from ~60 seconds to 3-5 minutes.'
    },
    {
      step: 8,
      title: 'Serving — Kit Presentation & Eating Sequence',
      details: 'Present as a construction kit: a plate of grilled skewers (still on lemongrass), a basket of rice paper, platters of herbs and vegetables separated by type, and the nước lèo sauce in a communal bowl. The traditional Huế eating sequence: take one grilled skewer, slide meat off, wrap with chosen combination, dip, eat. Bite into a slice of star fruit between rolls as a palate cleanser (its oxalic + malic acid combination strips fat from palate surfaces through saponification and chelation).',
      time: '3 min',
      tip: 'Star fruit\'s dual-acid palate cleansing is specific: oxalic acid (0.4-0.8%) chelates calcium ions in the salivary protein film, destabilizing the proteinaceous coating that traps fat molecules on tongue papillae. Malic acid (1.0-1.5%) provides the sour taste signal that triggers salivary reflex — the fresh saliva mechanically washes the destabilized fat-protein film. The combination is more effective than either acid alone, which is why star fruit is the traditional accompaniment, not lime or tamarind (which provide citric acid alone).'
    }
  ],

  proTips: [
    {
      title: 'Inside-Out Flavoring — The Coaxial Volatile Diffusion Model',
      description: 'Conventional marinades work outside-in: flavor molecules diffuse from the surface toward the center, with concentration decreasing exponentially with depth (Fick\'s second law). The lemongrass skewer reverses this: volatile oils vaporize from the central core and diffuse outward through the meat wall. The concentration profile is INVERTED — highest at the center, lowest at the surface. When you bite through the grilled nem lụi, you encounter increasing lemongrass intensity as you approach the center, the opposite of marinated meat. This inverted gradient creates a unique sensory crescendo within each bite.'
    },
    {
      title: 'Myosin Extraction & the Cold Forcemeat Rule',
      description: 'Myosin extraction into solution requires three conditions: sufficient NaCl concentration (2-3%), vigorous mechanical disruption (mixing), and LOW TEMPERATURE (<10°C). Myosin is a heat-sensitive protein — above 15°C, it begins to denature in solution, losing its emulsifying capacity. This is why commercial sausage-making uses ice: the mechanical energy of mixing generates heat, and ice absorbs it. For Nem Lụi, work quickly with cold meat and cold hands, or chill the mixture for 15 minutes between mixing and molding if the ambient temperature is high.'
    },
    {
      title: 'The Wrapping Ritual as Social Technology',
      description: 'Nem Lụi\'s construction-kit format is a social technology as much as a culinary one. The shared platters of herbs, the communal sauce bowl, and the individual assembly requirement create FORCED INTERACTION: reaching across the table for herbs, asking for the sauce, comparing each person\'s wrapping technique. This is not accidental — Huế street food culture deliberately designs dishes that require social participation. A solo eater at a Nem Lụi table is functionally incomplete; the dish assumes a minimum of two people engaged in shared construction.'
    },
    {
      title: 'Fat Rendering Rivulets — Internal Basting Architecture',
      description: 'The diced fatback (3mm cubes) distributed throughout the forcemeat creates a controlled internal basting system. As the forcemeat reaches 130-140°C at the surface during grilling, the fatback cubes begin rendering — liquid fat migrates through the meat matrix via capillary channels between muscle protein fibers. These rivulets of rendered fat baste the meat from within, preventing the dry, crumbly texture that would result from lean forcemeat. The fat also carries fat-soluble flavor compounds (from five-spice, lemongrass) deeper into the meat than water-based marinades could reach.'
    },
    {
      title: 'Rice Paper Phase Transitions — Glass, Rubber, Sol',
      description: 'Dried rice paper exists in three states depending on hydration: GLASS state (<8% moisture) — rigid, brittle, cracks when bent, transparent. RUBBER state (15-25% moisture) — pliable, elastic, can be folded and rolled without tearing, slightly opaque. SOL state (>35% moisture) — sticky, weak, tears under its own weight, very translucent. The 2-3 second dip targets the glass-to-rubber transition. Each state has a different amylose chain mobility: glass = immobile (vitrified), rubber = mobile but entangled (elastic network), sol = fully mobile (dissolved chains). Rolling requires the rubber state — any other state fails.'
    },
    {
      title: 'Star Fruit — The Underrated Palate Reset Technology',
      description: 'Star fruit (Averrhoa carambola) contains a specific combination of organic acids not found together in any other common fruit: oxalic acid (calcium chelator, 0.4-0.8 g/100g), malic acid (sour taste trigger, 1.0-1.5 g/100g), and ascorbic acid (antioxidant, 30-40 mg/100g). Between rolls of rich peanut-liver sauce, the star fruit performs three simultaneous resets: (1) Oxalic acid strips the lipid-protein coating from taste buds, (2) Malic acid triggers salivary flushing, (3) Ascorbic acid reduces oxidized iron compounds on the tongue surface that contribute to metallic aftertaste from liver pâté. No other Vietnamese accompaniment performs all three functions simultaneously.'
    }
  ],

  nutritionFacts: {
    servingSize: '3 rolls with sauce (approximately 280g)',
    calories: 420,
    totalFat: '20g',
    saturatedFat: '7g',
    cholesterol: '95mg',
    sodium: '780mg',
    totalCarbohydrate: '38g',
    dietaryFiber: '4g',
    totalSugars: '8g',
    protein: '24g',
    vitaminD: '0.4mcg',
    calcium: '55mg',
    iron: '3.8mg',
    potassium: '420mg'
  },

  relatedRecipes: [
    {
      title: 'Bánh Lọc Huế',
      slug: 'banh-loc-hue',
      image: '/images/recipes/banh-loc-hue.jpg',
      description: 'Translucent tapioca dumplings — another Huế wrapping masterpiece'
    },
    {
      title: 'Cơm Âm Phủ',
      slug: 'com-am-phu',
      image: '/images/recipes/com-am-phu.jpg',
      description: 'Huế\'s seven-component "Underworld Rice" platter'
    },
    {
      title: 'Bún Bò Huế',
      slug: 'bun-bo-hue',
      image: '/images/recipes/bun-bo-hue.jpg',
      description: 'Huế\'s iconic spicy beef noodle soup'
    }
  ],

  schpiresearchData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Nem Lụi Huế — Grilled Pork Skewers on Lemongrass',
    description: 'Grilled pork forcemeat molded around lemongrass stalks for inside-out volatile infusion, served as a DIY wrapping kit with rice paper, herbs, star fruit, and peanut-liver triple-emulsion dipping sauce.',
    image: '/images/recipes/nem-lui-hue.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT45M',
    cookTime: 'PT15M',
    totalTime: 'PT60M',
    recipeYield: '12 skewers (4 servings)',
    recipeCategory: 'Main Course',
    recipeCuisine: 'Vietnamese',
    keywords: 'nem lụi, huế grilled pork, lemongrass skewers, peanut sauce, rice paper wrapping, vietnamese street food, interactive dining, DIY rolls',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '420 calories',
      fatContent: '20g',
      proteinContent: '24g',
      carbohydrateContent: '38g'
    },
    recipeIngredient: [
      '400g pork shoulder, minced',
      '100g pork fatback',
      '12 lemongrass stalks',
      '100g pork liver pâté',
      '80g roasted peanuts',
      '100ml coconut milk',
      '20 rice paper sheets',
      'Fresh herbs, star fruit, green banana, pickled vegetables'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Extract myosin with salt for emulsion stability' },
      { '@type': 'HowToStep', text: 'Prepare lemongrass skewers with scored volatile channels' },
      { '@type': 'HowToStep', text: 'Mold forcemeat as coaxial cylinder around lemongrass core' },
      { '@type': 'HowToStep', text: 'Grill with radiant heat while internal oils vaporize outward' },
      { '@type': 'HowToStep', text: 'Build peanut-liver triple emulsion dipping sauce' },
      { '@type': 'HowToStep', text: 'Present as construction kit for participatory assembly' }
    ]
  }
};

export default function NemLuiHuePage() {
  return <RecipeLayout recipe={recipeData} />;
}
