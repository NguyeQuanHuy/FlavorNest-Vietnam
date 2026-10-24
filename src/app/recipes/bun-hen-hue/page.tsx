'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Bún Hến Huế',
  subtitle: 'Huế Baby Clam Vermicelli — The Cold-Broth Dissolution Matrix',
  heroImage: '/images/recipes/bun-hen-hue.jpg',
  region: 'Central' as const,
  difficulty: 'Medium',
  prepTime: '30 min',
  cookTime: '30 min',
  totalTime: '1 hr',
  servings: 4,
  rating: 4.7,
  reviewCount: 159,
  calories: 350,
  tags: ['Huế', 'Noodle', 'Clam', 'Street Food', 'Cold Broth', 'Cồn Hến'],

  introduction: {
    paragraphs: [
      "Bún Hến Huế is the LIQUID COUNTERPART of Cơm Hến — the same Cồn Hến baby clam ecosystem, the same arsenal of toppings, but built on COLD VERMICELLI instead of day-old rice, and served with a ROOM-TEMPERATURE BROTH that inverts every thermodynamic assumption of Vietnamese soup. Where phở and bún bò depend on scalding broth to drive aromatic volatilization and fat emulsification, Bún Hến operates at 25-30°C — a temperature regime where dissolved flavor compounds remain in the LIQUID PHASE rather than escaping to the gas phase, creating a broth that is more flavorful per milliliter than any hot soup because nothing is lost to evaporation.",
      "The critical scientific distinction between Bún Hến and Cơm Hến is the NOODLE-BROTH INTERACTION KINETICS. Day-old rice (Cơm Hến) is a retrograded starch matrix with crystalline amylose regions that resist water absorption — it maintains structural independence in the bowl, absorbing only surface moisture. Vermicelli noodles (Bún Hến) are a FRESHLY GELATINIZED amylose gel with high water-absorption capacity — they act as OSMOTIC SPONGES, drawing broth into their porous structure through capillary action. Over the 10-15 minutes of a typical eating session, the noodles absorb 30-50% of their dry weight in broth, progressively concentrating the remaining liquid. The bowl EVOLVES: the broth becomes more intense as the noodles dilute themselves, creating a dynamic flavor gradient that starts mild and finishes concentrated.",
      "This dish is the working-class breakfast of Cồn Hến island — cheaper than Cơm Hến because vermicelli is less expensive than rice, and faster to prepare because the noodles require no overnight aging. But the apparent simplicity conceals sophisticated SOLUTION CHEMISTRY: the room-temperature broth is a carefully balanced electrolyte solution where dissolved amino acids (from clam cooking liquid), NaCl (from mắm ruốc), organic acids (from fermentation), and capsaicin (from chili oil) interact through ionic strength effects that would be disrupted at higher temperatures. The broth is designed to be tasted at 25-30°C, and heating it would fundamentally alter its flavor profile — not improve it."
    ]
  },

  ingredients: [
    {
      group: 'Hến — Baby Clams',
      items: [
        { name: 'Fresh baby clams (hến)', amount: '1 kg', note: 'Corbicula fluminea — Hương River freshwater clams' },
        { name: 'Water for cooking', amount: '1 liter' },
        { name: 'Salt', amount: '1 tsp', note: 'Triggers valve opening via osmotic shock' },
      ]
    },
    {
      group: 'Broth Seasoning',
      items: [
        { name: 'Fermented shrimp paste (mắm ruốc Huế)', amount: '2 tbsp', note: 'Room-temperature solubility optimized' },
        { name: 'Fish sauce', amount: '2 tbsp' },
        { name: 'MSG (optional)', amount: '½ tsp' },
        { name: 'Sugar', amount: '1 tsp' },
      ]
    },
    {
      group: 'Toppings Array',
      items: [
        { name: 'Pork cracklings (tóp mỡ)', amount: '80g', note: 'Glass-state rendered cubes' },
        { name: 'Roasted peanuts', amount: '60g', note: 'Crushed — Maillard pyrazine crunch' },
        { name: 'Toasted sesame seeds', amount: '2 tbsp' },
        { name: 'Fried shallots', amount: '3 tbsp' },
        { name: 'Chili oil (ớt sate)', amount: '2-3 tbsp', note: 'Capsaicin in lipid carrier' },
        { name: 'Vietnamese coriander (rau răm)', amount: '1 bunch', note: 'Polygodial TRPA1 agonist' },
        { name: 'Spearmint (húng)', amount: '½ bunch' },
        { name: 'Banana blossom (bắp chuối)', amount: '½ head', note: 'Shredded — tannin astringent' },
        { name: 'Bean sprouts', amount: '100g' },
        { name: 'Star fruit (khế)', amount: '1', note: 'Sliced — oxalic acid palate reset' },
      ]
    },
    {
      group: 'Noodles',
      items: [
        { name: 'Fresh rice vermicelli (bún tươi)', amount: '500g', note: 'Room temperature — NOT reheated' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Sand Purge — Osmotic Valve Cycling',
      details: 'Soak baby clams in salted water (2% NaCl — approximating Hương River brackish zones) for 2-4 hours. The clams are FILTER FEEDERS: they open their siphons to circulate water across their gills, trapping food particles and expelling waste — including sand trapped in the mantle cavity. The salt concentration mimics their natural habitat, encouraging normal valve cycling behavior. During each open-close cycle, trapped sand grains are hydraulically expelled through the exhalant siphon. A 2-hour soak allows approximately 50-80 valve cycles, removing 90%+ of internal sand. Change the water 2-3 times as expelled sand accumulates on the bottom.',
      time: '2-4 hr (passive)',
      tip: 'Water that is TOO fresh (0% NaCl) or TOO salty (>5% NaCl) triggers VALVE CLOSURE as a stress response — the clam seals its shell to protect against osmotic shock, trapping sand inside permanently. The 2% sweet spot keeps the clam relaxed and actively filtering. Adding a tablespoon of cornstarch to the soaking water provides a food source that stimulates more vigorous filter cycling — the clam "thinks" there\'s food available and opens its siphons wider and more frequently, expelling sand 30-40% faster than in clear saltwater alone.'
    },
    {
      step: 2,
      title: 'Clam Cooking — Minimal Thermal Extraction',
      details: 'Bring 1 liter of water to a rolling boil. Add clams all at once. Stir gently for 3-5 minutes until shells open. IMMEDIATELY strain through a colander, RESERVING the cooking liquid — this liquid is the broth foundation. The brief boil serves two purposes: (1) thermal denaturation of the adductor muscle (the muscle holding the shell closed) at 55-65°C, causing the valve to spring open; (2) extraction of FREE AMINO ACIDS from the clam tissue into the surrounding water. Corbicula clams contain high concentrations of glycine (120-180 mg/100g), alanine (80-120 mg/100g), and glutamic acid (60-100 mg/100g) — these dissolve into the cooking water within the first 3 minutes, creating a naturally seasoned broth.',
      time: '5 min',
      tip: 'The cooking time must be EXACTLY 3-5 minutes. Below 3 minutes, not enough amino acids have extracted into the water (broth is bland). Above 5 minutes, the clam meat over-contracts (actin denaturation at 75-80°C causes the muscle fibers to shorten by 30-40%), producing rubbery, shrunken meat that disappears in the bowl. The 3-5 minute window extracts 60-70% of available free amino acids while keeping the meat at the myosin-denatured/actin-intact stage — tender, plump, and juicy. Remove the clam meat from shells while still warm (the cooling meat contracts and grips the shell, making extraction harder as temperature drops).'
    },
    {
      step: 3,
      title: 'Broth Assembly — Room-Temperature Solution Chemistry',
      details: 'Let the clam cooking liquid cool to ROOM TEMPERATURE (25-30°C). This is not laziness — it is deliberate flavor engineering. Dissolve mắm ruốc Huế in a small amount of the warm (not hot) liquid, strain to remove shell fragments, then add to the main broth. Add fish sauce, sugar, and MSG if using. Taste and adjust. The finished broth should be SAVORY-SWEET-SLIGHTLY FUNKY from the mắm ruốc, with a clean clam backbone. It should NOT be heated again after assembly — the flavor profile is calibrated for room-temperature tasting.',
      time: '30 min (cooling)',
      tip: 'At room temperature (25°C), the broth\'s dissolved volatile compounds remain in the LIQUID PHASE because their vapor pressures are low at this temperature. Glycine (sweet amino acid, bp 233°C decomposition) has negligible volatility. Even the more volatile compounds from mắm ruốc — trimethylamine (fishy, bp 2.9°C) and indole (fecal at high concentration, floral at low, bp 254°C) — partition strongly into the aqueous phase at 25°C. At 95°C (hot soup temperature), the same compounds have 10-100× higher vapor pressure, escaping into the air above the bowl. The room-temperature broth delivers ALL its flavor to the tongue; a hot broth sends a significant fraction to the nose (aromatic) but loses it from the liquid (less flavor per sip).'
    },
    {
      step: 4,
      title: 'Toppings Preparation — The Twelve-Element Arsenal',
      details: 'Prepare all toppings separately: (1) Crush roasted peanuts to 2-3mm fragments. (2) Toast sesame seeds until golden (150°C, 3-4 minutes — surface Maillard producing nuttarin and sesamol antioxidant). (3) Fry thinly sliced shallots in oil until golden-brown and crispy (caramelization of fructose at 110°C + Maillard of asparagine). (4) Prepare tóp mỡ cracklings if not pre-made (cold-start render 5mm fatback cubes). (5) Prepare chili oil: sauté dried chili flakes in oil with garlic — capsaicin dissolves in the lipid carrier (oil-soluble), creating a SUSTAINED-RELEASE delivery system. (6) Shred banana blossom and soak in acidulated water (lime juice prevents enzymatic browning from polyphenol oxidase). (7) Wash and drain herbs.',
      time: '20 min',
      tip: 'The chili oil deserves special attention: capsaicin\'s solubility in oil (log P = 3.04 — strongly lipophilic) means it partitions 1,000:1 into fat over water. When the oily chili is added to the aqueous broth, the capsaicin stays in the oil droplets rather than dissolving homogeneously. This creates LOCALIZED HOT SPOTS: each oil droplet delivers a concentrated burst of capsaicin to the TRPV1 receptors it contacts, rather than a uniform low-level burn across the entire tongue. The eating experience alternates between cool clam broth and fiery chili bursts — a STOCHASTIC heat distribution that is more interesting than uniform spiciness.'
    },
    {
      step: 5,
      title: 'Bowl Assembly — Ambient Temperature Architecture',
      details: 'Place room-temperature rice vermicelli in a bowl (do NOT rinse in hot water — the noodles must start at ambient temperature to maintain the cold-broth concept). Add a generous portion of cooked clam meat on top. Arrange the topping arsenal: peanuts, sesame, fried shallots, tóp mỡ, herbs (rau răm, spearmint), shredded banana blossom, bean sprouts, star fruit slices. Drizzle chili oil according to preference. Ladle the room-temperature clam broth over everything — enough to submerge the noodles by two-thirds (the top third should be exposed to air, creating a dry-wet textural gradient).',
      time: '5 min',
      tip: 'The PARTIAL SUBMERSION is a deliberate design choice: the exposed noodle tops remain dry and slightly chewy (higher elastic modulus from surface dehydration), while the submerged portion absorbs broth and softens. Each chopstick lift brings both dry and wet noodles together — the textural contrast is part of the architecture. Full submersion (as in phở) would eliminate this contrast within 2 minutes as the noodles equilibrate to uniform hydration. The Bún Hến bowl is designed to be eaten TOP-DOWN: dry crunchy toppings first, then the softening noodle-broth middle, finishing with the concentrated liquid at the bottom.'
    },
    {
      step: 6,
      title: 'Dynamic Bowl Evolution — The 15-Minute Concentration Gradient',
      details: 'Eat within 15-20 minutes. The bowl EVOLVES through three phases: PHASE 1 (0-5 min): the toppings are crisp, the noodles firm, the broth at full volume — maximum textural contrast, moderate flavor intensity. PHASE 2 (5-10 min): noodles have absorbed ~20% of broth, tóp mỡ begins softening, fried shallots lose crunch — the textures converge toward "tender" while the remaining broth concentrates by ~25%. PHASE 3 (10-15 min): noodles are fully saturated (no further absorption), remaining broth is now concentrated 1.3-1.5× original — the last sips are the most intensely flavored liquid in the bowl, a natural "reduction" achieved through osmotic absorption rather than thermal evaporation.',
      time: '15-20 min eating',
      tip: 'This PASSIVE CONCENTRATION mechanism is unique to room-temperature noodle soups. In a hot soup, evaporation reduces broth volume from the top (concentrating flavors) while the noodles also absorb from within — two competing reduction mechanisms. In Bún Hến\'s cold broth, evaporation is negligible (the broth is at ambient temperature, not steaming), so the ONLY concentration mechanism is noodle absorption. This produces a cleaner, more predictable concentration curve — the flavor intensifies linearly with time rather than through the chaotic interplay of evaporation and absorption. The last 20% of broth is reliably 40-50% more concentrated than the first pour.'
    }
  ],

  proTips: [
    {
      title: 'Bún Hến vs Cơm Hến — Starch Architecture Divergence',
      description: 'The fundamental difference is STARCH STATE. Cơm Hến\'s day-old rice has undergone retrogradation: amylose chains have re-crystallized into Type III resistant starch (RS3) with low water absorption capacity (~10% of dry weight). The rice grains remain discrete, separate, structurally independent in the bowl. Bún Hến\'s fresh vermicelli is in the AMORPHOUS gelatinized state: amylose chains are disordered, hydrated, with high water absorption capacity (~40% of dry weight). The noodles act as osmotic pumps, actively drawing broth into their porous matrix through capillary forces. This difference means the same broth, same toppings, same clams produce FUNDAMENTALLY DIFFERENT eating experiences: Cơm Hến delivers a static flavor profile (rice stays the same throughout), while Bún Hến delivers a DYNAMIC one (noodles evolve, broth concentrates, textures shift).'
    },
    {
      title: 'Room-Temperature Flavor Perception — The Thermoreceptor Advantage',
      description: 'Taste receptor sensitivity varies with temperature. The T1R2/T1R3 sweet receptor has MAXIMUM sensitivity at 35-37°C (body temperature) and decreases above and below. The T1R1/T1R3 umami receptor shows similar temperature dependence. At 25°C (Bún Hến\'s broth temperature), sweet and umami sensitivity are at ~80% of maximum — already close to optimal. At 95°C (phở temperature), the same receptors are THERMALLY INACTIVATED — sensitivity drops to 40-60% of maximum, which is why hot soups need MORE seasoning to taste the same. Bún Hến\'s room-temperature broth requires LESS salt, less sugar, less fish sauce than an equivalent hot soup to achieve the same perceived flavor intensity, because the taste receptors are operating closer to their optimal temperature range.'
    },
    {
      title: 'Capillary Absorption in Rice Vermicelli — Osmotic Sponge Mechanics',
      description: 'Fresh rice vermicelli has a porous microstructure: during extrusion and brief steaming, the gelatinized starch forms a network of interconnected channels (2-20μm diameter) throughout the noodle cross-section. When immersed in broth, capillary pressure drives liquid INTO these channels: P = 2γcos(θ)/r, where γ is surface tension (~72 mN/m for the aqueous broth), θ is contact angle (~20° for water on hydrophilic starch), and r is channel radius. For 5μm channels: P ≈ 27 kPa — enough to draw liquid 2.7 meters vertically, far exceeding the few millimeters needed to fill the noodle. This capillary force is why noodles absorb broth so aggressively: the physics FORCES liquid into the noodle matrix, and only saturation of all available channels stops the process.'
    },
    {
      title: 'Capsaicin Oil-Water Partitioning — Stochastic Heat Distribution',
      description: 'Capsaicin\'s partition coefficient (log P = 3.04) means it concentrates 1,000× more in oil than in water. In the Bún Hến bowl, the chili oil floats as discrete droplets on the broth surface and coats some noodle strands. Each sip encounters a RANDOM distribution of oil droplets: some sips carry multiple droplets (concentrated heat), others carry none (no heat). This stochastic distribution creates a variable heat experience — the spiciness FLUCTUATES from bite to bite rather than maintaining a constant level. Psychophysical research shows that VARIABLE stimulation maintains higher receptor sensitivity than constant stimulation (sensory adaptation is slower for irregular stimuli), making the fluctuating heat of Bún Hến more persistently perceptible than the uniform heat of a homogeneously spiced hot soup.'
    },
    {
      title: 'Star Fruit Oxalic Acid — Calcium Chelation Palate Reset',
      description: 'Star fruit (Averrhoa carambola) contains 0.5-1.0% oxalic acid by weight — the highest concentration of any common Vietnamese accompaniment fruit. Oxalic acid chelates calcium ions (forming insoluble calcium oxalate) from the saliva, reducing salivary calcium concentration from ~1.5 mM to ~0.5 mM. Since calcium stabilizes the mucin glycoprotein network that forms the salivary film coating the tongue, calcium removal DESTABILIZES this film, causing it to thin and refresh. The tongue\'s taste receptors, no longer shielded by a thick mucin-protein-fat film from the preceding bite, regain full sensitivity. This is why a slice of star fruit between bites of rich, fatty Bún Hến produces a dramatic "palate clearing" effect — the oxalic acid literally strips the flavor-blocking film from the taste receptor surface.'
    },
    {
      title: 'Volatile Retention in Cold Broth — Henry\'s Law Application',
      description: 'Henry\'s Law states that the concentration of a dissolved gas in a liquid is proportional to its partial pressure above the liquid: C = kH × p. For volatile flavor compounds, this means the warmer the liquid, the MORE compound escapes to the gas phase (kH decreases with temperature). At 25°C, trimethylamine (fishy note from mắm ruốc, kH = 9.7 M/atm at 25°C) has ~80% of its mass dissolved in the broth. At 95°C, the same compound has only ~20% dissolved — 80% has escaped to the steam above the bowl. For the diner, this means: hot soup → intense aroma (volatiles in the nose) but diluted liquid flavor; cold soup → modest aroma but CONCENTRATED liquid flavor. Bún Hến trades aromatic drama for liquid intensity — every sip delivers 3-4× more dissolved flavor compounds than the same broth served hot.'
    }
  ],

  nutritionFacts: {
    servingSize: '1 bowl (approximately 500g)',
    calories: 350,
    totalFat: '12g',
    saturatedFat: '4g',
    cholesterol: '55mg',
    sodium: '980mg',
    totalCarbohydrate: '42g',
    dietaryFiber: '3g',
    totalSugars: '4g',
    protein: '18g',
    vitaminD: '0mcg',
    calcium: '120mg',
    iron: '8.5mg',
    potassium: '380mg'
  },

  relatedRecipes: [
    {
      title: 'Cơm Hến Huế',
      slug: 'com-hen-hue',
      image: '/images/recipes/com-hen-hue.jpg',
      description: 'The rice-based sibling — retrograded starch vs osmotic sponge'
    },
    {
      title: 'Bún Bò Huế',
      slug: 'bun-bo-hue',
      image: '/images/recipes/bun-bo-hue.jpg',
      description: 'The HOT soup counterpart — collagen cathedral at 95°C'
    },
    {
      title: 'Nem Lụi Huế',
      slug: 'nem-lui-hue',
      image: '/images/recipes/nem-lui-hue.jpg',
      description: 'Lemongrass pork skewers — another Huế street food icon'
    }
  ],

  spicinessData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Bún Hến Huế — Baby Clam Vermicelli with Cold Broth',
    description: 'Room-temperature clam broth over fresh vermicelli — osmotic noodle absorption creates passive 1.3-1.5× broth concentration over 15 minutes, Henry\'s Law volatile retention delivers 3-4× dissolved flavor vs hot soup, stochastic capsaicin oil-droplet heat distribution.',
    image: '/images/recipes/bun-hen-hue.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT30M',
    cookTime: 'PT30M',
    totalTime: 'PT60M',
    recipeYield: '4 servings',
    recipeCategory: 'Main Course',
    recipeCuisine: 'Vietnamese',
    keywords: 'bún hến, hue clam noodle, baby clam vermicelli, cold broth vietnamese, hue street food, con hen island, room temperature soup, vietnamese noodle',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '350 calories',
      fatContent: '12g',
      proteinContent: '18g',
      carbohydrateContent: '42g'
    },
    recipeIngredient: [
      '1kg fresh baby clams',
      '500g fresh rice vermicelli',
      '2 tbsp fermented shrimp paste (mắm ruốc Huế)',
      '80g pork cracklings',
      '60g roasted peanuts',
      'Rau răm, spearmint, banana blossom, bean sprouts',
      'Star fruit, chili oil, fried shallots, sesame'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Sand purge clams via osmotic valve cycling 2-4 hours' },
      { '@type': 'HowToStep', text: 'Cook clams 3-5 minutes for minimal thermal amino acid extraction' },
      { '@type': 'HowToStep', text: 'Cool broth to room temperature and season with mắm ruốc' },
      { '@type': 'HowToStep', text: 'Prepare twelve-element topping arsenal' },
      { '@type': 'HowToStep', text: 'Assemble with partial submersion for dry-wet gradient' },
      { '@type': 'HowToStep', text: 'Eat within 15 minutes through three-phase concentration evolution' }
    ]
  }
};

export default function BunHenHuePage() {
  return <RecipeLayout recipe={recipeData} />;
}
