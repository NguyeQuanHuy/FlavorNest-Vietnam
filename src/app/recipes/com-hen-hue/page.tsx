'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Cơm Hến Huế',
  subtitle: 'Huế Baby Clam Rice — The Original Royal Street Bowl',
  heroImage: '/images/recipes/com-hen-hue.jpg',
  region: 'Central' as const,
  difficulty: 'Medium',
  prepTime: '40 min',
  cookTime: '20 min',
  totalTime: '1 hr',
  servings: 4,
  rating: 4.7,
  reviewCount: 198,
  calories: 480,
  tags: ['Huế', 'Clam', 'Cold Rice', 'Street Food', 'Royal Heritage', 'Spicy'],

  introduction: {
    paragraphs: [
      "Cơm Hến Huế is the original — Đà Nẵng adopted it, Saigon borrowed it, but the dish was born on the banks of Cồn Hến, a 400-year-old islet in the Hương River where the clam-digging families of Huế have harvested Corbicula fluminea since the Nguyễn dynasty. What distinguishes Huế\'s version from every adaptation is the FERMENTATION AXIS: the clam broth serves as a living culture medium, inoculated with mắm ruốc Huế (Huế\'s distinctively purple fermented shrimp paste) that contributes not just flavor but active proteolytic enzymes that continue working in the bowl.",
      "Where other versions emphasize the twelve-condiment combinatorial matrix, Huế\'s original focuses on THERMAL ARCHITECTURE — a precisely stratified bowl where every layer exists at a different temperature, from ice-cold rice at the bottom through room-temperature herbs and crunchy elements to scalding-hot clam broth ladled over at service. This thermal gradient creates a 60-80°C differential that drives convective mixing, volatile release, and starch-behavior changes all simultaneously in the eating vessel.",
      "The dish is Huế\'s philosophical statement about impermanence: unlike a static plate, Cơm Hến is designed to CHANGE as you eat it. The hot broth slowly penetrates the cold rice, the crunch elements absorb moisture and soften, the herbs wilt and release different volatiles at different temperatures. No two bites are chemically identical — it is a dynamic system engineered to evolve over a 10-15 minute consumption window."
    ]
  },

  ingredients: [
    {
      group: 'Hến (Baby Clams) & Broth',
      items: [
        { name: 'Fresh baby clams (hến)', amount: '1 kg', note: 'Corbicula fluminea — live, sand-purged overnight' },
        { name: 'Water for boiling', amount: '1.5L' },
        { name: 'Lemongrass stalks, bruised', amount: '3 stalks', note: 'Citral release through cellular rupture' },
        { name: 'Fresh ginger, sliced', amount: '30g' },
        { name: 'Mắm ruốc Huế', amount: '2 tbsp', note: 'Purple fermented shrimp paste — NOT substitute with pink mắm tôm' },
        { name: 'Fish sauce', amount: '1 tbsp' },
        { name: 'MSG (optional)', amount: '½ tsp' },
      ]
    },
    {
      group: 'Cold Rice Base',
      items: [
        { name: 'Cooked jasmine rice', amount: '600g', note: 'Cooked and cooled to room temperature minimum' },
      ]
    },
    {
      group: 'Tóp Mỡ & Fried Elements',
      items: [
        { name: 'Pork fatback', amount: '150g', note: 'For rendering into tóp mỡ cracklings' },
        { name: 'Peanuts, roasted', amount: '80g', note: 'Dry-roasted until Maillard browning at 160°C' },
        { name: 'Sesame seeds, toasted', amount: '2 tbsp' },
      ]
    },
    {
      group: 'Herb & Vegetable Matrix',
      items: [
        { name: 'Banana blossom, thinly shredded', amount: '1 blossom', note: 'Enzymatic browning inhibited by lime-water soak' },
        { name: 'Rau răm (Vietnamese coriander)', amount: '1 large bunch' },
        { name: 'Spearmint leaves', amount: '½ bunch' },
        { name: 'Thai basil', amount: '½ bunch' },
        { name: 'Bean sprouts', amount: '200g' },
        { name: 'Scallions, sliced', amount: '4 stalks' },
        { name: 'Fresh chili, sliced', amount: '5-8 pieces', note: 'Huế-level heat: ớt hiểm 50,000-100,000 SHU' },
      ]
    },
    {
      group: 'Seasoning & Condiment Array',
      items: [
        { name: 'Mắm ruốc Huế (additional)', amount: '2 tbsp', note: 'Tableside condiment' },
        { name: 'Chili oil (sa tế)', amount: '2 tbsp' },
        { name: 'Lime wedges', amount: '4 pieces' },
        { name: 'Fried shallots', amount: '4 tbsp' },
        { name: 'Toasted sesame oil', amount: '1 tbsp' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Sand Purge — Osmotic Self-Cleaning',
      details: 'Soak live clams in salted water (15g salt per liter — approximating brackish river salinity of Hương River near Cồn Hến) for 4-8 hours or overnight. The clams\' filter-feeding mechanism continues operating in this isotonic environment: they draw water through their siphon, filter it across ctenidia (gill plates), and expel sand particles. Change water 2-3 times. Discard any clams that remain open when tapped — they are dead and may harbor Vibrio bacteria.',
      time: '4-8 hrs (passive)',
      tip: 'The salinity matters: pure freshwater causes the clams to clamp shut (hypo-osmotic shock stops filter-feeding), while over-salted water causes osmotic stress. At 15g/L, the clams remain metabolically active and self-clean most efficiently. Cồn Hến\'s location — where tidal salt water meets the Hương River\'s fresh flow — produces naturally brackish conditions that keep wild clams perpetually sand-free.'
    },
    {
      step: 2,
      title: 'Clam Extraction — Paramyosin Denaturation Threshold',
      details: 'Bring 1.5L water to boil with lemongrass and ginger. Add clams, cover, and steam for 3-5 minutes. The adductor muscle\'s catch mechanism relies on paramyosin — a protein that maintains tension without ATP expenditure. At 55-65°C, paramyosin denatures irreversibly, releasing the muscle\'s grip and gaping the shells. Remove clams with slotted spoon. RESERVE ALL BROTH — this is the liquid gold of the dish. Pick clam meat from shells. Discard shells.',
      time: '15 min',
      tip: 'The broth contains every water-soluble compound the clams released: glycine and alanine (sweet amino acids), succinic acid (shellfish-specific umami activating SUCNR1 receptors), zinc and iron minerals, and nucleotides. Discarding this broth would be discarding 40-60% of the dish\'s total flavor. It will be seasoned and served as the hot component.'
    },
    {
      step: 3,
      title: 'Broth Fortification — Mắm Ruốc Enzymatic Inoculation',
      details: 'Strain broth through fine mesh to remove grit. Return to pot over medium heat. Dissolve mắm ruốc Huế into the warm broth — stir until completely integrated. The mắm ruốc contributes not just flavor but residual proteolytic enzymes from the Bacillus and Staphylococcus fermentation that produced it. These enzymes continue hydrolyzing proteins in the broth, generating free amino acids that intensify umami over the 10-15 minutes the broth stays hot. Season with fish sauce. Keep at 85-90°C — hot enough for volatile release but below the 100°C boiling point that would destroy the delicate fermentation aromatics.',
      time: '10 min',
      tip: 'Mắm ruốc Huế is PURPLE, not pink — the color comes from oxidized astaxanthin in krill (Acetes species) exposed to high-salt (25-30% NaCl) anaerobic fermentation conditions for 3-6 months. The purple indicates advanced Maillard melanoidin formation between amino acids and reducing sugars under alkaline conditions created by protein decomposition. Pink mắm tôm from the North is a different product with different flavor chemistry — substitution fundamentally alters the dish.'
    },
    {
      step: 4,
      title: 'Tóp Mỡ — Rendered Fat Crackling Architecture',
      details: 'Cut pork fatback into 5mm dice. Place in cold wok (starting cold is CRITICAL). Heat slowly from room temperature to 180°C over 15 minutes. The slow temperature ramp allows water to evaporate gradually from the fat tissue (pork fat is 10-15% water) without explosive vaporization. As water exits, the collagen matrix holding the fat cells dehydrates and undergoes glass transition — converting from a rubbery, pliable state to a rigid, glass-like state. The result is crispy tóp mỡ with internal void structure from the escaped steam.',
      time: '20 min',
      tip: 'Starting in a cold wok is the entire technique. Hot oil would seal the surface (creating a fried exterior) trapping water inside — the crackling would be crispy outside but chewy-soggy inside. Cold-start rendering allows water to migrate outward before surface sealing occurs, producing a crackling that is uniformly crispy throughout its cross-section. Drain on paper. These MUST be added to the bowl at the very last moment — their glass-state crunch degrades within 2-3 minutes on moist rice.'
    },
    {
      step: 5,
      title: 'Clam Meat Sauté — Volatile Amplification',
      details: 'Heat 2 tbsp oil in wok over high heat. Flash-sauté picked clam meat with 1 tbsp sliced lemongrass and 1 tsp chili for exactly 90 seconds. The goal is not to cook (they are already cooked) but to trigger Maillard surface reactions and release trapped volatiles through thermal shock. The high-heat wok contact generates 2-acetyl-1-pyrroline, pyrazines, and thiazoles on the clam surface while the interior remains tender.',
      time: '3 min',
      tip: 'Exactly 90 seconds. At 120 seconds, the clam meat transitions from tender to rubbery as myosin cross-links tighten — Corbicula clams have unusually high collagen-to-myosin ratios that make them particularly sensitive to overcooking. The window between "aromatic surface browning" and "rubber eraser texture" is narrow.'
    },
    {
      step: 6,
      title: 'Herb Preparation — Enzymatic Volatile Pre-Release',
      details: 'Tear (don\'t cut) rau răm, mint, and Thai basil leaves. Tearing ruptures cells along natural fracture lines, exposing enzymes to substrates in patterns that produce different volatile profiles than knife-cut herbs. Shred banana blossom finely and soak in lime water (prevents polyphenol oxidase browning). Blanch bean sprouts for 10 seconds (thermal shock kills surface bacteria while preserving cell turgor = crunch).',
      time: '10 min',
      tip: 'Rau răm releases polygodial — a drimane sesquiterpene that activates TRPA1 receptors (the wasabi/mustard receptor, not the chili TRPV1 receptor). This gives rau răm its characteristic "tingling" sensation that is neurologically distinct from chili heat. Combined with chili\'s TRPV1 activation and black pepper\'s TRPV1 agonism, the herb matrix creates a three-receptor somatosensory experience unique to Cơm Hến.'
    },
    {
      step: 7,
      title: 'Bowl Assembly — Thermal Gradient Architecture',
      details: 'This is the critical engineering step. Build from bottom to top in strict thermal order: (1) COLD rice at the bottom — room temperature or slightly below. (2) ROOM TEMPERATURE herbs, banana blossom, bean sprouts layered over rice. (3) WARM sautéed clam meat arranged on herbs. (4) Room temperature tóp mỡ, peanuts, sesame, fried shallots scattered on top. (5) HOT broth ladled over at tableside — 85-90°C. The temperature differential between layer 1 (20-25°C) and layer 5 (85-90°C) creates a 60-65°C gradient across 5-6cm of bowl depth.',
      time: '5 min',
      tip: 'The hot broth hitting cold rice is not just heating — it is partially RE-GELATINIZING retrograded starch at the contact interface while leaving the bottom rice cold and resistant. This creates a TEXTURAL GRADIENT within the rice itself: top grains become soft and porridge-like, middle grains are warm and yielding, bottom grains remain firm and cold. Each spoonful from a different depth delivers a different rice texture.'
    },
    {
      step: 8,
      title: 'Condiment Calibration — Individual Bowl Tuning',
      details: 'Present condiment array tableside: additional mắm ruốc, chili oil, lime wedges, fried shallots, chili slices. Each diner adjusts their own bowl. The Huế convention is to start with a full tablespoon of mắm ruốc and 3-4 chili slices — aggressively seasoned by any non-Huế standard. Add lime last — the acid denatures any remaining surface proteins on the clam meat, tightening texture perceptibly, while citric acid protonates volatile amines from the mắm ruốc, reducing "fishiness" through Le Chatelier equilibrium shift.',
      time: '2 min',
      tip: 'Huế\'s capsaicin tolerance is legendary — the city consumes per-capita chili volumes 3-5× higher than Hanoi or Saigon. This is not mere preference but neurological adaptation: chronic capsaicin exposure upregulates TRPV1 receptor endocytosis (receptors are internalized after repeated activation), reducing perceived heat intensity. What a Huế native calls "medium spicy" registers as "extremely hot" to an unadapted palate. Adjust accordingly.'
    }
  ],

  proTips: [
    {
      title: 'The Thermal Gradient Convection Engine',
      description: 'The 60-65°C temperature differential between hot broth (top) and cold rice (bottom) drives natural convection: hot broth sinks as it cools (density increases), cold rice water rises as it warms. This creates circulating currents that continuously mix the bowl\'s contents without stirring. The convection redistributes flavor compounds, brings buried herbs to the surface, and ensures that each spoonful is a different snapshot of an evolving dynamic system — no two bites from the same bowl are identical.'
    },
    {
      title: 'Mắm Ruốc Huế vs Mắm Tôm Hanoi — Parallel Fermentation Divergence',
      description: 'Both are fermented shrimp pastes, but they are different products. Mắm ruốc Huế uses krill (Acetes) fermented at 25-30% NaCl for 3-6 months — the extended anaerobic period produces advanced melanoidin pigments (purple-brown) and high concentrations of biogenic amines (histamine, tyramine) that contribute to its uniquely "heady" flavor. Northern mắm tôm uses larger shrimp, shorter fermentation (1-3 months), lower salt concentration, producing a pink, less complex product. The enzymatic profiles differ: mắm ruốc retains more active proteases that continue working in warm broth.'
    },
    {
      title: 'Cồn Hến Terroir — Why Geography Creates Flavor',
      description: 'Cồn Hến islet sits where the Hương River splits into two channels. The sediment composition — fine alluvial silt rich in organic matter from upstream forest decomposition — provides the specific mineral and amino acid profile that the clams filter-feed on. Clams from this environment accumulate higher glycine and alanine concentrations (sweet amino acids from algal protein) and distinctive mineral signatures (iron from laterite soil, zinc from decomposing vegetation). Clams from other rivers produce different flavor profiles because the dissolved organic matter composition differs.'
    },
    {
      title: 'Dynamic Bowl Evolution — The 15-Minute Transformation',
      description: 'Cơm Hến is designed to be consumed within 15 minutes, during which it undergoes continuous transformation: Minutes 0-3: maximum thermal gradient, crunchiest tóp mỡ, freshest herbs. Minutes 3-7: broth penetrates mid-rice, tóp mỡ begins moisture absorption, herbs wilt releasing secondary volatiles. Minutes 7-12: thermal equilibrium approaches, rice fully softens at top, herb flavors fully diffuse into broth. Minutes 12-15: homogeneous temperature, tóp mỡ fully softened, system reaches flavor steady-state. Eating slowly vs quickly yields fundamentally different experiences of the same bowl.'
    },
    {
      title: 'Three-Receptor Somatosensory Mapping',
      description: 'Cơm Hến Huế activates three distinct pain/temperature receptors simultaneously: TRPV1 (capsaicin from ớt hiểm chili, threshold 43°C equivalent), TRPA1 (polygodial from rau răm, plus allicin from raw garlic/shallots), and TRPM8 (menthol from spearmint). The brain interprets these three signals as hot+sharp+cool simultaneously — a neurological paradox that produces the distinctive "all-over tingle" that Huế food is famous for. This trigeminal complexity is absent from non-Huế versions that omit rau răm or use milder chilies.'
    },
    {
      title: 'The Cold Rice Debate — Overnight vs Same-Day',
      description: 'Huế tradition demands cold leftover rice (cơm nguội), not freshly cooled rice. The distinction is not nostalgia — it is starch science with different parameters than simple cooling. Overnight rice at ambient tropical temperature (25-30°C) undergoes a specific retrogradation pathway: amylopectin crystallization proceeds slowly at this temperature (unlike the rapid nucleation at 4°C refrigeration), producing larger, more stable crystalline domains that resist re-gelatinization more effectively. This means overnight-ambient rice maintains its firm, separate-grain texture longer when hot broth is added, compared to refrigerated rice which quickly softens.'
    }
  ],

  nutritionFacts: {
    servingSize: '1 bowl (approximately 350g)',
    calories: 480,
    totalFat: '18g',
    saturatedFat: '6g',
    cholesterol: '65mg',
    sodium: '920mg',
    totalCarbohydrate: '58g',
    dietaryFiber: '4g',
    totalSugars: '3g',
    protein: '22g',
    vitaminD: '0.3mcg',
    calcium: '120mg',
    iron: '8.5mg',
    potassium: '380mg'
  },

  relatedRecipes: [
    {
      title: 'Bún Hến Huế',
      slug: 'bun-hen-hue',
      image: '/images/recipes/bun-hen-hue.jpg',
      description: 'The vermicelli sibling — same clams, different starch architecture'
    },
    {
      title: 'Bún Bò Huế',
      slug: 'bun-bo-hue',
      image: '/images/recipes/bun-bo-hue.jpg',
      description: 'Huế\'s iconic spicy beef noodle soup'
    },
    {
      title: 'Cơm Hến Đà Nẵng',
      slug: 'com-hen-da-nang',
      image: '/images/recipes/com-hen-da-nang.jpg',
      description: 'Đà Nẵng\'s adaptation — the combinatorial condiment variant'
    }
  ],

  schpiresearchData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Cơm Hến Huế — Huế Baby Clam Rice',
    description: 'The original Cồn Hến baby clam rice — thermal gradient architecture with cold retrograded rice, scalding mắm ruốc broth, and a three-receptor somatosensory herb matrix from Vietnam\'s royal capital.',
    image: '/images/recipes/com-hen-hue.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT40M',
    cookTime: 'PT20M',
    totalTime: 'PT60M',
    recipeYield: '4 servings',
    recipeCategory: 'Main Course',
    recipeCuisine: 'Vietnamese',
    keywords: 'cơm hến, huế clam rice, baby clams, corbicula, vietnamese street food, royal cuisine, cold rice, hương river, cồn hến',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '480 calories',
      fatContent: '18g',
      proteinContent: '22g',
      carbohydrateContent: '58g'
    },
    recipeIngredient: [
      '1kg fresh baby clams',
      '600g cooked cold rice',
      '150g pork fatback for tóp mỡ',
      '2 tbsp mắm ruốc Huế',
      'Rau răm, spearmint, Thai basil',
      '1 banana blossom',
      '80g roasted peanuts',
      'Chili, lime, fried shallots'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Purge clams in brackish water overnight' },
      { '@type': 'HowToStep', text: 'Boil clams until paramyosin denaturation opens shells' },
      { '@type': 'HowToStep', text: 'Fortify broth with mắm ruốc Huế enzymatic inoculation' },
      { '@type': 'HowToStep', text: 'Cold-start render tóp mỡ for uniform glass-state crunch' },
      { '@type': 'HowToStep', text: 'Flash-sauté clam meat 90 seconds for Maillard surface' },
      { '@type': 'HowToStep', text: 'Assemble bowl in strict thermal gradient order' },
      { '@type': 'HowToStep', text: 'Ladle hot broth tableside, calibrate condiments to taste' }
    ]
  }
};

export default function ComHenHuePage() {
  return <RecipeLayout recipe={recipeData} />;
}
