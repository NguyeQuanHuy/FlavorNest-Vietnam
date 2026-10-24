'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: 'Cơm Âm Phủ',
  subtitle: 'Huế "Underworld Rice" — The Nocturnal Seven-Component Platter',
  heroImage: '/images/recipes/com-am-phu.jpg',
  region: 'Central' as const,
  difficulty: 'Hard',
  prepTime: '1 hr 30 min',
  cookTime: '1 hr',
  totalTime: '2 hr 30 min',
  servings: 4,
  rating: 4.7,
  reviewCount: 164,
  calories: 580,
  tags: ['Huế', 'Rice Plate', 'Night Market', 'Multi-Component', 'Street Food', 'Heritage'],

  introduction: {
    paragraphs: [
      "Cơm Âm Phủ — literally \"Underworld Rice\" or \"Hell Rice\" — is Huế\'s most theatrically named dish and one of its most architecturally complex. The name has nothing to do with the food itself but everything to do with its TEMPORAL NICHE: this dish was traditionally sold only after dark, in the lantern-lit alleyways near Đông Ba market where the dim lighting and shadowy vendors created an atmosphere reminiscent of the Buddhist underworld (âm phủ). The dish emerged from darkness, and its legend was built in darkness.",
      "What makes Cơm Âm Phủ scientifically remarkable is its PARALLEL PROCESSING architecture — seven distinct protein and vegetable preparations, each requiring a different thermal treatment, a different cutting geometry, and a different seasoning approach, all converging onto a single plate of rice. This is not a stir-fry or a stew where components merge; it is a PLATTER where each element maintains its individual identity while contributing to a combinatorial flavor matrix when eaten together.",
      "The seven components — grilled pork, steamed chicken, pork skin, julienned egg crêpe, pickled vegetables, fresh herbs, and a special broth — represent a COMPLETE PROTEIN SPECTRUM: myosin-dominant (chicken), collagen-dominant (pork skin), albumin-dominant (egg), and fermentation-modified (pickles). Each protein type denatures at different temperatures, has different texture profiles, and interacts differently with the shared rice and sauce components. The plate is a protein chemistry textbook served on a banana leaf."
    ]
  },

  ingredients: [
    {
      group: 'Steamed Rice',
      items: [
        { name: 'Jasmine rice', amount: '400g', note: 'Long-grain, freshly steamed — not cold' },
        { name: 'Pandan leaf (optional)', amount: '2 leaves', note: '2-acetyl-1-pyrroline aromatic transfer' },
      ]
    },
    {
      group: 'Component 1: Grilled Pork (Thịt Nướng)',
      items: [
        { name: 'Pork shoulder or neck', amount: '300g', note: 'Type I + Type IIa fiber mix for fat marbling' },
        { name: 'Lemongrass, minced', amount: '2 stalks' },
        { name: 'Shallots, minced', amount: '3 bulbs' },
        { name: 'Garlic, minced', amount: '3 cloves' },
        { name: 'Fish sauce', amount: '2 tbsp' },
        { name: 'Honey', amount: '1 tbsp', note: 'Fructose Maillard acceleration at 110°C' },
        { name: 'Annatto oil', amount: '1 tbsp' },
        { name: 'Black pepper', amount: '1 tsp' },
        { name: 'Sugar', amount: '1 tbsp' },
      ]
    },
    {
      group: 'Component 2: Poached Chicken (Gà Luộc)',
      items: [
        { name: 'Chicken thigh (bone-in, skin-on)', amount: '400g', note: 'Dark meat — higher myoglobin, more flavor' },
        { name: 'Ginger, sliced', amount: '20g' },
        { name: 'Scallion stalks', amount: '2 stalks' },
        { name: 'Salt', amount: '1 tsp' },
      ]
    },
    {
      group: 'Component 3: Pork Skin (Bì Heo)',
      items: [
        { name: 'Pork skin', amount: '200g', note: 'Type I/III collagen matrix' },
        { name: 'Toasted rice powder (thính)', amount: '3 tbsp', note: 'Maillard-derived pyrazines + dextrinized starch' },
        { name: 'Fish sauce', amount: '1 tbsp' },
        { name: 'Garlic, minced', amount: '2 cloves' },
        { name: 'Black pepper', amount: '½ tsp' },
      ]
    },
    {
      group: 'Component 4: Egg Crêpe (Trứng Tráng)',
      items: [
        { name: 'Eggs', amount: '4 large' },
        { name: 'Fish sauce', amount: '½ tsp' },
        { name: 'Cooking oil', amount: '1 tbsp' },
      ]
    },
    {
      group: 'Component 5: Pickled Vegetables (Đồ Chua)',
      items: [
        { name: 'Green papaya, julienned', amount: '200g' },
        { name: 'Carrots, julienned', amount: '100g' },
        { name: 'Rice vinegar', amount: '100ml' },
        { name: 'Sugar', amount: '3 tbsp' },
        { name: 'Salt', amount: '1 tsp' },
      ]
    },
    {
      group: 'Component 6: Fresh Herbs & Vegetables',
      items: [
        { name: 'Cucumber, sliced', amount: '1 piece' },
        { name: 'Lettuce leaves', amount: '8 leaves' },
        { name: 'Rau răm (Vietnamese coriander)', amount: '1 bunch' },
        { name: 'Mint leaves', amount: '½ bunch' },
        { name: 'Perilla (tía tô)', amount: '½ bunch' },
      ]
    },
    {
      group: 'Component 7: Nước Lèo (Consommé Broth)',
      items: [
        { name: 'Pork bones', amount: '500g' },
        { name: 'Dried shrimp', amount: '30g', note: 'Nucleotide umami amplifier' },
        { name: 'Scallions', amount: '2 stalks' },
        { name: 'Fish sauce', amount: '2 tbsp' },
        { name: 'Sugar', amount: '1 tsp' },
        { name: 'Salt', amount: 'to taste' },
      ]
    },
    {
      group: 'Mắm Pha (Blended Dipping Sauce)',
      items: [
        { name: 'Fish sauce', amount: '3 tbsp' },
        { name: 'Lime juice', amount: '2 tbsp' },
        { name: 'Sugar', amount: '2 tbsp' },
        { name: 'Garlic, minced', amount: '2 cloves' },
        { name: 'Chili, minced', amount: '2 pieces' },
        { name: 'Water', amount: '2 tbsp' },
        { name: 'Liver pâté (optional)', amount: '1 tbsp', note: 'Emulsified liver for sauce body' },
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: 'Nước Lèo Broth — Nucleotide-Enhanced Pork Consommé',
      details: 'Blanch pork bones: bring to boil for 5 minutes, discard water (removes albumin scum, blood proteins, and water-soluble impurities). Rinse bones under cold water. Start clean pot with 2L cold water, add blanched bones, dried shrimp, scallion stalks. Bring to boil, then immediately reduce to bare simmer (85-90°C — surface should shimmer, not bubble). Simmer 1.5 hours. The dried shrimp contribute inosine 5\'-monophosphate (IMP) which synergizes with the glutamate from pork bone collagen hydrolysis — the IMP×glutamate synergy produces 8-15× perceived umami amplification at the T1R1/T1R3 receptor.',
      time: '1 hr 30 min',
      tip: 'The bare simmer temperature is critical: at 100°C rolling boil, fat emulsifies into the broth creating a cloudy, greasy liquid. At 85-90°C, fat floats as a clear surface layer that can be skimmed, and dissolved proteins denature slowly enough to aggregate into large flocs that either float or sink — not the micro-dispersions that cause cloudiness. The result is a clear, golden consommé with concentrated flavor and no greasiness.'
    },
    {
      step: 2,
      title: 'Pork Marinade — Fructose Maillard Pre-Priming',
      details: 'Slice pork shoulder into 5mm steaks (across the grain — this severs muscle fibers at 5mm intervals, creating pre-determined fracture planes for easy biting). Combine all marinade ingredients. The honey is not for sweetness — fructose undergoes Maillard reaction at 110°C (vs glucose at 140°C), giving a 30°C head start on surface browning. Marinate minimum 30 minutes, ideally 2 hours. The fish sauce\'s protease enzymes (from anchovy autolysis) begin surface tenderization during this period.',
      time: '30 min – 2 hr',
      tip: 'Pork neck (thịt cổ) is the Huế cut of choice — it contains intramuscular fat deposits between Type I (slow-twitch, oxidative) and Type IIa (fast-twitch, oxidative-glycolytic) muscle fibers. This marbling melts during grilling (beginning at 130°C as triglycerides liquefy), creating internal basting channels that keep the thin steak moist despite high-heat grilling. Lean cuts like tenderloin produce dry, tough results at these temperatures.'
    },
    {
      step: 3,
      title: 'Chicken Poaching — Sub-Boil Myosin Preservation',
      details: 'Place chicken thighs in pot with ginger, scallion, and salt. Cover with cold water. Bring to 75-80°C (small bubbles forming at bottom but NOT rising to surface). Hold at this temperature for 25-30 minutes. DO NOT BOIL. At 75°C, myosin denatures sufficiently for food safety (Salmonella and Campylobacter inactivated) while actin remains largely native (actin denatures at 80-83°C). Native actin retains its water-binding capacity, producing chicken that is moist and silky rather than dry and stringy.',
      time: '30 min',
      tip: 'The actin preservation window (75-80°C) is the fundamental secret of silky-textured poached chicken across all of East Asian cuisine. Above 83°C, actin denatures and contracts, squeezing out bound water like wringing a sponge — this is why boiled chicken is dry. The 3-8°C window between "safely cooked" and "dry" is narrow, which is why Huế vendors use massive pots with high thermal mass (temperature stability) and minimal flame (preventing overshoot).'
    },
    {
      step: 4,
      title: 'Pork Skin Processing — Collagen Gelatin Conversion & Thính Coating',
      details: 'Boil pork skin in water for 30 minutes until completely tender (collagen fully converted to gelatin — the skin should be completely pliable with no resistance). Cool in ice water (rapid cooling sets the gelatin network, giving the skin a firm-yet-yielding texture). Shave off any subcutaneous fat. Slice into 2mm-thin strips — julienne. Toss with toasted rice powder (thính), minced garlic, fish sauce, and pepper. The thính serves dual purposes: its dextrinized starch absorbs surface moisture preventing clumping, while its Maillard-derived pyrazines (roasty, nutty) provide flavor contrast to the bland gelatin.',
      time: '40 min',
      tip: 'Thính (toasted rice powder) is made by dry-roasting raw rice in a pan until deep golden, then grinding to powder. The roasting drives dextrinization (starch chain fragmentation → sweet, caramelized flavor) and Maillard reactions (amino acids from rice protein × reducing sugars → 2-acetylpyrazine, the "roasted grain" aroma compound). This powder is a Vietnamese flavor technology — it provides crunch, absorbs moisture, and delivers complex roasted aromatics all in one ingredient.'
    },
    {
      step: 5,
      title: 'Egg Crêpe — Ovalbumin Network Sheeting',
      details: 'Beat eggs with fish sauce until homogeneous (do NOT incorporate air — you want a flat crêpe, not a fluffy omelet). Heat oiled non-stick pan over medium-low heat. Pour a thin layer of egg (~2mm thickness), swirling to create a uniform disc. Cook until the bottom sets (ovalbumin gel network forms at 62-65°C for the bottom surface) and the top is barely set (still slightly moist). Do NOT flip — carryover heat will finish the top surface. Roll the crêpe and julienne into 3mm strips.',
      time: '10 min',
      tip: 'The one-sided cooking is deliberate: the bottom develops a light Maillard crust (contact with 160°C pan) while the top remains soft and slightly glossy (radiant heat at ~100°C from steam). When julienned, each strip has a dual-texture cross-section: golden-firm outside, soft-custardy inside. Flipping would eliminate this gradient, producing uniformly firm strips that lack textural interest.'
    },
    {
      step: 6,
      title: 'Quick Pickles — Osmotic Dehydration & Acid Equilibration',
      details: 'Toss julienned papaya and carrot with salt, let stand 10 minutes (osmotic pressure draws out cellular water — the vegetables lose 15-20% of their mass as exudate). Squeeze out extracted water firmly. Dissolve sugar in rice vinegar, pour over squeezed vegetables. Marinate minimum 30 minutes. The acetic acid (pH 2.8-3.2) penetrates the cell wall through aquaporin channels, acidifying the cytoplasm and denaturing internal proteins — this is "cooking" through acid rather than heat, with the structural result being a crisp-tender texture that retains cell-wall rigidity while softening internal structure.',
      time: '40 min total',
      tip: 'The osmotic pre-treatment is not optional. Without draining cellular water first, the pickle liquid would be diluted by exudate, raising pH above the preservation threshold (pH 4.6 for botulism prevention) and producing soggy pickles. Pre-salting removes the diluting water BEFORE the vinegar is added, ensuring both proper acidity and proper crunch. The pectin-calcium crosslinks in cell walls remain intact (acid doesn\'t hydrolyze them at room temperature), preserving the signature crunch.'
    },
    {
      step: 7,
      title: 'Pork Grilling — Infrared + Convective Dual Browning',
      details: 'Grill marinated pork steaks over high charcoal heat or under broiler at maximum setting. The 5mm thickness is calibrated for the surface-to-center ratio: at this thickness, surface Maillard browning (140-180°C) achieves full development in exactly the time it takes for center to reach 75°C safe internal temperature. Each side gets 2-3 minutes. The honey-fructose in the marinade creates a lacquered glaze — fructose caramelizes at 110°C and then undergoes Maillard with surface amino acids to produce HMF (5-hydroxymethylfurfural), furanones, and melanoidins that form the characteristic dark, aromatic crust.',
      time: '8 min',
      tip: 'Charcoal grilling provides infrared radiation (emitted from hot coals, 600-800°C surface temperature) PLUS convective heat (hot air rising through grate). This dual heating mode creates browning speeds impossible with a pan (conductive only) or oven (convective only). The infrared component penetrates 1-2mm into the meat surface, initiating Maillard reactions below the surface — this is why charcoal-grilled meat has a deeper, more complex crust than pan-seared meat of equivalent surface temperature.'
    },
    {
      step: 8,
      title: 'Mắm Pha — Emulsified Compound Dipping Sauce',
      details: 'Dissolve sugar in lime juice and fish sauce. Add minced garlic and chili. For the Huế variation: blend in 1 tbsp liver pâté (if using). The liver pâté serves as an emulsifier and flavor anchor — liver contains abundant lecithin (phosphatidylcholine) that stabilizes the oil-in-water emulsion, creating a sauce with body and cling rather than the watery consistency of standard nước chấm. The liver also contributes iron-catalyzed umami compounds and vitamin A-derived retinol flavor notes.',
      time: '5 min',
      tip: 'The optional liver pâté transforms the sauce from a clear liquid to an opaque, creamy emulsion with 3-5× more viscosity. This viscosity is functional: the sauce CLINGS to food surfaces rather than dripping off, delivering higher flavor intensity per bite. Huế street vendors who include pâté in their mắm pha have a competitive flavor advantage that customers recognize without understanding the emulsion science behind it.'
    },
    {
      step: 9,
      title: 'Platter Assembly — Seven-Component Radial Architecture',
      details: 'Mound hot steamed rice in center of plate or banana leaf. Arrange the seven components in distinct SECTORS around the rice — each component occupying its own zone, not mixed. Traditional arrangement: grilled pork at 12 o\'clock (hot), chicken at 2 o\'clock (room temp), pork skin at 4 o\'clock (cold), egg strips at 6 o\'clock (room temp), pickles at 8 o\'clock (cold), herbs at 10 o\'clock (fresh). Serve broth in a separate small bowl alongside. The radial architecture is not aesthetic — it allows the eater to control WHICH components combine with each bite of rice.',
      time: '5 min',
      tip: 'The sector arrangement reflects Cơm Âm Phủ\'s philosophical design: unlike a stir-fry where the chef determines flavor combinations, this platter DELEGATES combination authority to the eater. Each person constructs their own bite — pork+pickle+rice, or chicken+herbs+rice, or all seven together. This is a fundamentally different eating paradigm from Western "composed plates" where the chef\'s combination is the only option. With seven components and variable proportions, the combinatorial space exceeds 10,000 meaningfully different bites.'
    },
    {
      step: 10,
      title: 'Serving — Nocturnal Context & Consumption Protocol',
      details: 'Serve immediately while rice is hot, grilled pork is warm, and crunch elements retain their texture. The broth is sipped between bites as a palate cleanser — its clear, light flavor resets the gustatory receptors between the intense flavors of the plate components. Traditional Huế service includes a small dish of sliced fresh chili and whole garlic cloves on the side for those who want additional capsaicin or allicin intensity.',
      time: '2 min',
      tip: 'The broth-as-palate-cleanser is neurological engineering: after exposure to the complex, intense flavors of grilled pork + fermented fish sauce + pickled vegetables, taste receptors undergo adaptation (reduced sensitivity). A sip of mild, clear broth — low in sodium, low in glutamate relative to the plate — provides a "contrast reset" that re-sensitizes the receptors, making the next bite taste as intense as the first. This is the same principle behind the ginger served between sushi courses in Japanese cuisine.'
    }
  ],

  proTips: [
    {
      title: 'The Seven-Component Protein Spectrum',
      description: 'Each protein component denatures at different temperatures and has different structural properties: Grilled pork myosin (55-60°C denaturation, tight fiber bundles), Chicken myosin (55-60°C but poached at sub-actin threshold preserving moisture), Pork skin collagen (75-85°C → gelatin, amorphous gel network), Egg ovalbumin (62-65°C for setting, 80°C for browning), Dried shrimp in broth (pre-denatured, nucleotide donor). Each protein responds differently to the shared fish sauce and lime acid environment on the palate — collagen-gelatin dissolves in warm saliva, egg proteins resist, myosin fibers shred. One plate, five protein architectures, five mastication experiences.'
    },
    {
      title: 'Thính — Vietnam\'s Forgotten Flavor Technology',
      description: 'Toasted rice powder (thính) is one of Vietnamese cuisine\'s most underappreciated ingredients. When raw rice is dry-roasted at 180-200°C: (1) Starch undergoes dextrinization — long amylose chains fragment into shorter dextrins that are sweet and easily soluble. (2) The Strecker degradation pathway converts rice\'s amino acids (particularly proline and hydroxyproline) into volatile aldehydes — 2-acetylpyrroline (popcorn/pandan), alkylpyrazines (roasted grain). (3) The physical structure becomes porous and hygroscopic — ground thính absorbs surface moisture from wet ingredients like pork skin, preventing the slimy texture that would otherwise occur. This single ingredient provides flavor, texture control, and moisture management simultaneously.'
    },
    {
      title: 'The Nocturnal Economy of Huế Street Food',
      description: 'Cơm Âm Phủ\'s name reflects Huế\'s historical night-market economy. Before electric lighting, vendors near Đông Ba market sold food by oil lantern from late evening through the pre-dawn hours. The dim, flickering light created an atmosphere that locals associated with the Buddhist concept of âm phủ (the realm of the dead). The name stuck not as a judgment on the food\'s quality but as an atmospheric descriptor — and it became a marketing advantage. Today, authentic Cơm Âm Phủ vendors still operate primarily at night, maintaining the tradition that the dish tastes different (better) after dark, which may have a perceptual basis: circadian variation in taste receptor sensitivity peaks in late evening.'
    },
    {
      title: 'Combinatorial Eating Mathematics',
      description: 'Seven components with three levels of proportion (none, some, lots) per bite creates 3⁷ = 2,187 possible combinations. Adding the sauce variable (none, dipped, soaked) triples it to 6,561. Adding the broth sip timing (before, during, after the bite) triples again to 19,683. In practice, over a 15-minute meal of approximately 30 bites, each person samples fewer than 100 of these 19,683 possible configurations — meaning you could eat Cơm Âm Phủ daily for six months without repeating the exact same sequence of bites.'
    },
    {
      title: 'Infrared Grilling — Why Charcoal Outperforms Gas',
      description: 'Charcoal emits electromagnetic radiation peaked at 3-5 μm wavelength (mid-infrared), which penetrates protein surfaces 1-2mm deep before being absorbed. Gas flames emit predominantly in the 2.7 μm and 4.3 μm bands (CO₂ and H₂O emission lines) with lower total radiant power. The charcoal advantage: (1) Higher total infrared flux (800°C coal surface vs 600°C gas flame tip), (2) Broader emission spectrum covering more protein absorption bands, (3) Drip fat hitting coals creates PAH smoke compounds that deposit on food surface (controversial but flavoring). The result is deeper, more complex Maillard crust development per unit time.'
    },
    {
      title: 'Actin vs Myosin — The 3°C Window That Changes Everything',
      description: 'The chicken poaching step exploits the fact that myosin denatures at 55-60°C while actin denatures at 80-83°C. Between 75-80°C, myosin is fully denatured (food-safe, opaque, cooked texture) while actin remains native (hydrated, holding water within its filament network). The moment temperature exceeds 83°C, actin contracts and expels its bound water — this is the molecular mechanism behind "overcooked chicken." The difference between silky and stringy chicken is literally 3°C of temperature control maintained for 25-30 minutes.'
    }
  ],

  nutritionFacts: {
    servingSize: '1 platter (approximately 450g)',
    calories: 580,
    totalFat: '22g',
    saturatedFat: '7g',
    cholesterol: '180mg',
    sodium: '980mg',
    totalCarbohydrate: '55g',
    dietaryFiber: '3g',
    totalSugars: '8g',
    protein: '38g',
    vitaminD: '1.2mcg',
    calcium: '65mg',
    iron: '4.5mg',
    potassium: '520mg'
  },

  relatedRecipes: [
    {
      title: 'Bún Bò Huế',
      slug: 'bun-bo-hue',
      image: '/images/recipes/bun-bo-hue.jpg',
      description: 'Huế\'s iconic spicy beef noodle soup'
    },
    {
      title: 'Cơm Hến Huế',
      slug: 'com-hen-hue',
      image: '/images/recipes/com-hen-hue.jpg',
      description: 'Huế baby clam rice — another legendary rice plate'
    },
    {
      title: 'Nem Lụi Huế',
      slug: 'nem-lui-hue',
      image: '/images/recipes/nem-lui-hue.jpg',
      description: 'Grilled pork skewers with wrapping ritual'
    }
  ],

  schpiresearchData: {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Cơm Âm Phủ — Huế "Underworld Rice" Platter',
    description: 'Seven-component rice platter from Huế\'s nocturnal street markets — grilled pork, poached chicken, pork skin with thính, egg crêpe, pickles, herbs, and consommé broth assembled in radial architecture for combinatorial eating.',
    image: '/images/recipes/com-am-phu.jpg',
    author: { '@type': 'Organization', name: 'FlavorNest Vietnam' },
    datePublished: '2026-10-19',
    prepTime: 'PT90M',
    cookTime: 'PT60M',
    totalTime: 'PT150M',
    recipeYield: '4 servings',
    recipeCategory: 'Main Course',
    recipeCuisine: 'Vietnamese',
    keywords: 'cơm âm phủ, huế rice plate, underworld rice, hell rice, vietnamese street food, night market, seven components, royal cuisine, đông ba market',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '580 calories',
      fatContent: '22g',
      proteinContent: '38g',
      carbohydrateContent: '55g'
    },
    recipeIngredient: [
      '400g jasmine rice',
      '300g pork shoulder with honey-lemongrass marinade',
      '400g chicken thigh',
      '200g pork skin with toasted rice powder',
      '4 eggs for crêpe julienne',
      '200g green papaya + 100g carrot pickles',
      'Fresh herb assortment',
      '500g pork bones for consommé'
    ],
    recipeInstructions: [
      { '@type': 'HowToStep', text: 'Build nucleotide-enhanced pork consommé at 85-90°C bare simmer' },
      { '@type': 'HowToStep', text: 'Marinate pork with fructose Maillard pre-priming' },
      { '@type': 'HowToStep', text: 'Poach chicken at 75-80°C sub-actin denaturation threshold' },
      { '@type': 'HowToStep', text: 'Process pork skin with thính toasted rice powder coating' },
      { '@type': 'HowToStep', text: 'Cook one-sided egg crêpe, julienne into strips' },
      { '@type': 'HowToStep', text: 'Quick-pickle papaya and carrot with osmotic pre-treatment' },
      { '@type': 'HowToStep', text: 'Grill pork with infrared charcoal dual browning' },
      { '@type': 'HowToStep', text: 'Assemble seven components in radial architecture around rice' }
    ]
  }
};

export default function ComAmPhuPage() {
  return <RecipeLayout recipe={recipeData} />;
}
