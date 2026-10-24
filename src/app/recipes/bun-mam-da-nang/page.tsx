'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-mam-da-nang',
  title: `Bún Mắm Đà Nẵng — Đà Nẵng Fermented Fish Vermicelli Soup`,
  subtitle: 'A broth built on PROTEOLYTIC DECOMPOSITION — whole fermented fish dissolved into a savory liquid so umami-dense it triggers gustatory saturation, loaded with pork, shrimp, eggplant, and water spinach over rice vermicelli, representing Central Vietnam\\'s most polarizing and most addictive noodle soup.',
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '2 hr',
  rating: 4.8,
  baseServings: 6,
  heroImage: '/images/recipes/bun-mam-da-nang.jpg',

  intro: `Bún Mắm occupies the extreme end of the Vietnamese flavor spectrum — the point where fermentation pushes past pleasant umami into territory that Western palates initially classify as "spoiled" before the brain recalibrates and recognizes one of the most profoundly savory liquids ever created by human food processing. The broth is not made with fermented fish sauce added to stock. The broth IS dissolved fermented fish — whole mudfish (cá lóc) or snakehead fish that have undergone 6-12 months of halophilic bacterial proteolysis in salt brine, breaking down every protein, every cell membrane, every organelle into a slurry of free amino acids, peptides, and nucleotides that registers on the tongue as PURE, UNCUT UMAMI. Where phở whispers umami through slow bone extraction, Bún Mắm screams it through biochemical demolition.

The Central Vietnamese version — distinct from the Mekong Delta\\'s Bún Mắm which uses mắm cá linh (fermented Henicorhynchus) — builds on mắm cá lóc (fermented snakehead) or mắm ruốc (fermented krill) as its base, producing a broth with a different AMINO ACID SIGNATURE. Snakehead muscle is unusually rich in taurine (200-400 mg/100g fresh weight) and anserine (300-600 mg/100g), both of which survive fermentation intact because they are free amino acids not incorporated into protein structures. During fermentation, the endogenous proteases (cathepsins, calpains) and exogenous bacterial enzymes (from Bacillus subtilis, Staphylococcus saprophyticus, and various halophilic Archaea) cleave the fish\\'s structural proteins into their constituent amino acids, raising the FREE GLUTAMATE content from 20-50 mg/100g (fresh fish) to 800-1,500 mg/100g (fermented mắm). Simultaneously, nucleotide degradation pathways convert ATP → ADP → AMP → IMP → hypoxanthine, and the IMP (inosinic acid) that accumulates during the first 2-3 months of fermentation provides the NUCLEOTIDE UMAMI that synergizes with glutamate at T1R1/T1R3 taste receptors by a factor of 7-8×. The result: perceived umami intensity in the broth is not additive but MULTIPLICATIVE.

The Đà Nẵng interpretation layers this fermented base with FRESH PROTEIN CONTRAST — sliced pork belly, whole shrimp, and sometimes crab — whose clean, unfermented flavors serve as REFERENCE POINTS against which the fermented broth\\'s complexity becomes perceptible. Without fresh protein in the bowl, the palate cannot triangulate the broth\\'s flavor because there is no baseline for comparison. This is the psychophysical principle of SIMULTANEOUS CONTRAST applied to gustation: a mild flavor adjacent to an intense flavor makes both more perceptible than either would be alone. The fresh shrimp\\'s clean sweetness (free glycine + alanine) makes the broth\\'s fermented depth taste deeper; the broth\\'s umami intensity makes the shrimp taste sweeter. They exist in a MUTUALISTIC FLAVOR AMPLIFICATION where each component enhances the perception of the other.

The vegetable architecture in Đà Nẵng\\'s Bún Mắm serves a TEXTURAL REMEDIATION function that compensates for the broth\\'s overwhelming density. Eggplant (cà tím), sliced and simmered until its parenchyma cells collapse, absorbs broth like a sponge — each bite of eggplant delivers a measured dose of fermented broth diluted by the eggplant\\'s internal water (92% moisture content), creating a BUFFERED DELIVERY SYSTEM that moderates the broth\\'s intensity. Water spinach (rau muống) provides hollow-stem crunch and fresh chlorophyll bitterness that resets the palate between bites. Banana blossom strips add tannin astringency that physically contracts the oral mucosa, squeezing out the broth\\'s residual proteins from the mucosal surface and preparing a clean slate for the next spoonful. Each vegetable is a PALATE RESET MECHANISM with a different recovery pathway: eggplant dilutes, water spinach refreshes, banana blossom cleanses.

The dish\\'s polarizing nature stems from a specific set of volatile compounds — BIOGENIC AMINES — that the fermentation process generates in abundance. Histamine (100-500 mg/100g), tyramine (50-200 mg/100g), putrescine (30-150 mg/100g), and cadaverine (20-100 mg/100g) are produced by bacterial decarboxylation of histidine, tyrosine, ornithine, and lysine respectively. At low concentrations, these compounds are below olfactory detection thresholds and contribute only to the gustatory amplification effect. At higher concentrations — particularly putrescine and cadaverine — they produce the "funky," "decaying" aroma that first-time tasters find challenging. The experienced Bún Mắm eater has undergone OLFACTORY HABITUATION: repeated exposure downregulates the olfactory receptor neurons (ORNs) responsive to these amines, reducing perceived intensity by 40-60% while leaving the gustatory amplification effect fully intact. This is why Bún Mắm is an ACQUIRED TASTE in the neurological sense — the brain literally rewires its olfactory processing to filter out the challenging aromatics while preserving the beneficial umami enhancement.`,

  ingredientSections: [
    {
      title: 'Fermented Fish Broth Base',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'mắm cá lóc (fermented snakehead fish)',
          note: 'The BROTH FOUNDATION. Whole fermented snakehead — bones, flesh, organs all dissolved into a thick paste after 6-12 months of halophilic fermentation. The glutamate content (800-1,500 mg/100g) is 15-30× higher than fresh fish. If unavailable, substitute mắm cá sặc (fermented climbing perch) or mắm ruốc (fermented krill) — different flavor profile but similar umami density.'
        },
        {
          amount: 500,
          unit: 'g',
          name: 'pork femur bones',
          note: 'Gelatin backbone for the broth. Pork collagen → gelatin conversion provides the MOUTHFEEL SUBSTRATE that the watery mắm solution lacks. Without pork bones, the broth is intensely flavored but thin — like drinking straight fish sauce diluted with water.'
        },
        {
          amount: 2.5,
          unit: 'L',
          name: 'water',
          note: 'Start ratio: 12:1 water-to-mắm by weight. This dilution brings the fermented fish\\'s salt content from 20-25% down to approximately 1.5-2% — still assertively salty but within the palatable range.'
        },
        {
          amount: 3,
          name: 'lemongrass stalks, bruised',
          note: 'Citral and geraniol aromatics MASK the biogenic amine volatiles through competitive olfactory receptor binding. Lemongrass is not optional — it is the olfactory counterweight that makes the fermented broth approachable.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'sugar',
          note: 'Sweet-salty balance. Sugar also undergoes trace Maillard reactions with the broth\\'s abundant free amino acids during simmering, producing roasted, caramel notes that add flavor depth without additional salt.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'tamarind paste',
          note: 'Tartaric acid provides the sour axis that prevents the broth from becoming a one-note umami bomb. The acid also protonates some biogenic amines, converting them from volatile free bases to non-volatile salts — chemical deodorization.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'annatto oil (dầu hạt điều)',
          note: 'Bixin carotenoids give the broth its signature deep amber-orange color. Also provides a fat phase for carrying lipophilic aroma compounds.'
        }
      ]
    },
    {
      title: 'Fresh Proteins (Contrast Layer)',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'pork belly, skin on, in one piece',
          note: 'Boiled whole in the pork bone broth for 30 minutes, then sliced 3mm thin. The fresh pork\\'s clean glycine-alanine sweetness serves as the FLAVOR BASELINE against which the fermented broth\\'s complexity becomes measurable. Without this reference, the palate drowns in umami with nothing to compare against.'
        },
        {
          amount: 300,
          unit: 'g',
          name: 'whole shrimp, head-on, shell-on',
          note: 'Head-on for hepatopancreas richness. Shell-on during simmering extracts astaxanthin (orange carotenoid) and chitin-derived N-acetylglucosamine, both of which contribute to the broth\\'s color and body. Peel at the table.'
        },
        {
          amount: 200,
          unit: 'g',
          name: 'fried tofu puffs (đậu hũ chiên), halved',
          note: 'Tofu puffs act as BROTH SPONGES — their porous interior (80-85% void space after frying) absorbs 3-4× their weight in fermented broth. Each bite delivers a measured, manageable dose of the intense liquid. The neutral soy protein also provides another contrast layer.'
        }
      ]
    },
    {
      title: 'Vegetable Palate Reset System',
      items: [
        {
          amount: 2,
          name: 'Asian eggplants (cà tím), cut into 3cm segments',
          note: 'BUFFERED DELIVERY: eggplant parenchyma at 92% moisture + porous cellular structure absorbs broth during simmering, then releases it during chewing at diluted concentration. Each bite moderates the broth\\'s intensity from overwhelming to pleasurable.'
        },
        {
          amount: 200,
          unit: 'g',
          name: 'water spinach (rau muống), cut into 10cm segments',
          note: 'CHLOROPHYLL RESET: fresh green bitterness + hollow-stem crunch provides both chemical and mechanical palate cleansing. Added raw at the table — the heat of the broth wilts it to perfect tenderness in 30 seconds.'
        },
        {
          amount: 150,
          unit: 'g',
          name: 'banana blossom, thinly shredded',
          note: 'TANNIN CLEANSE: proanthocyanidin tannins (400-800 mg/100g) bind to salivary mucoproteins, physically stripping the broth\\'s residual proteins from oral surfaces. The astringent pucker is the palate contracting to a clean baseline.'
        },
        {
          amount: 100,
          unit: 'g',
          name: 'bean sprouts',
          note: 'Turgor-pressure crunch and neutral flavor dilute the broth\\'s intensity through mechanical disruption of the flavor-coated mucosal layer.'
        }
      ]
    },
    {
      title: 'Noodles & Garnishes',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'fresh rice vermicelli (bún tươi)',
          note: 'Thin round rice noodles. The neutral starch provides the bland backdrop against which the fermented broth\\'s flavor complexity becomes fully legible — like a white gallery wall that makes every painting more vivid.'
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'crispy fried shallots',
          note: 'Maillard product garnish — 2-acetyl-1-pyrroline adds a toasted, popcorn-like aromatic layer atop the fermented base.'
        },
        {
          amount: 1,
          name: 'bunch fresh herbs: Thai basil, Vietnamese coriander, perilla',
          note: 'Volatile aromatic counterpoint. The herbs\\' terpenes (linalool, estragole, perillaldehyde) provide a FRESH FREQUENCY that the fermented, cooked broth entirely lacks.'
        },
        {
          amount: 2,
          name: 'limes, quartered',
          note: 'Citric acid serves dual function: brightens the heavy broth AND protonates biogenic amines at the surface, reducing their volatility and therefore their aroma intensity with each squeeze.'
        },
        {
          amount: 3,
          name: 'red chilies, sliced',
          note: 'Capsaicin TRPV1 activation triggers salivation and endorphin release — both of which facilitate consumption of the intense broth over a 20-30 minute eating session.'
        }
      ]
    }
  ],

  steps: [
    {
      title: 'Prepare the pork bone base stock',
      instruction: 'Blanch pork femur bones in boiling water for 3 minutes. Drain, rinse, and scrub clean. Place in a fresh pot with 2.5 liters cold water. Bring to a boil, skim scum for 15 minutes, then reduce to a gentle simmer. Cook for 90 minutes with the lid slightly ajar. After 30 minutes, add the whole pork belly piece to poach in the same stock.',
      time: '90 min',
      tip: 'SEQUENTIAL EXTRACTION STRATEGY: The pork bone stock is built FIRST and separately from the fermented fish because the extraction requirements are incompatible. Pork collagen needs 90+ minutes at 85-95°C for adequate gelatin conversion (target: 4-6% gelatin concentration for proper mouthfeel). Fermented fish, conversely, needs only 15-20 minutes of simmering — its proteins are already fully hydrolyzed by enzymatic action during fermentation, and extended boiling drives off volatile flavor compounds (especially the desirable low-concentration esters and alcohols) while concentrating the undesirable high-concentration amines. Building pork stock first, then adding the mắm at the end, gives each component its optimal extraction time.',
      doneness: 'After 90 minutes, the stock should coat a spoon and feel slightly viscous on the lips. Remove the pork belly after 30 minutes of poaching — it should be tender when pierced with a chopstick but still hold its shape. Plunge the belly into ice water for 5 minutes, then slice 3mm thin. The stock itself should be clear to slightly golden, not cloudy.'
    },
    {
      title: 'Dissolve and integrate the fermented fish',
      instruction: 'In a separate pot, combine the mắm cá lóc with 500ml of the hot pork stock. Whisk vigorously to dissolve — the mắm will break down from a thick paste into a dark, opaque liquid. Strain this mixture through a fine-mesh sieve into the main pork stock pot, pressing the solids with a spoon to extract maximum liquid. Discard any bone fragments or undissolved residue. Add bruised lemongrass stalks, tamarind paste, sugar, and annatto oil. Simmer for 15-20 minutes.',
      time: '25 min',
      tip: 'THE DISSOLUTION-AND-STRAIN PROTOCOL eliminates the textural debris of fermentation — bone fragments, scales, and undissolved connective tissue — while preserving the dissolved flavor matrix. The straining step is where FLAVOR MEETS REFINEMENT: the liquid that passes through the sieve contains free amino acids (glutamate 800-1,500 mg/100g), nucleotides (IMP 50-200 mg/100g), peptides (responsible for kokumi — the "mouthfulness" sensation), and dissolved lipids — all in solution. What stays behind is structural waste. The 15-20 minute simmer after straining allows the lemongrass aromatics to integrate and the tamarind acid to react with biogenic amines (PROTONATION: R-NH₂ + H⁺ → R-NH₃⁺), converting volatile amine free bases into non-volatile ammonium salts. This is CHEMICAL DEODORIZATION — the broth retains the amines\\' gustatory amplification effect on the tongue while reducing their olfactory assault on the nose by 30-50%.',
      doneness: 'The broth should be deep amber-orange (from annatto) with a clear, appetizing appearance — no murky sediment. Taste: intensely savory-salty with sour (tamarind) and sweet (sugar) background notes. The lemongrass should be evident in the aroma. The fermented character should be present but not overwhelming — if it smells aggressively "funky," add more tamarind (acid protonation) or simmer 5 minutes longer (volatile amine evaporation).'
    },
    {
      title: 'Cook the proteins and vegetables in the broth',
      instruction: 'Bring the fermented broth to a simmer. Add eggplant segments and fried tofu puffs. Simmer for 8-10 minutes until the eggplant is soft and has absorbed broth. Add whole shrimp (head-on, shell-on) and cook for 3-4 minutes until they turn pink-orange. Remove shrimp and set aside. Taste the broth and adjust: more fish sauce if under-salted, more sugar if too harsh, more tamarind if flat.',
      time: '15 min',
      tip: 'SEQUENTIAL PROTEIN ADDITION prevents overcooking delicate ingredients while ensuring each component reaches its optimal absorption state. Eggplant goes first because its SPONGE FUNCTION requires 8-10 minutes: the parenchyma cell walls (primarily cellulose + pectin) break down at 85-95°C, collapsing the rigid cell structure and creating voids that fill with broth through CAPILLARY INFILTRATION. Each 3cm eggplant segment absorbs approximately 15-20ml of broth — a buffered dose that the eater releases during chewing. Tofu puffs absorb simultaneously through their pre-existing pore structure (created during frying). Shrimp go last because their muscle proteins denature rapidly (55-70°C, 2-4 minutes) — overcooking drives moisture out and converts the tender flesh into chewy rubber. The shrimp\\'s hepatopancreas (the orange "head butter") melts into the broth at 65-70°C, contributing phospholipid emulsifiers and additional umami.',
      doneness: 'Eggplant should be uniformly soft and visibly darker (saturated with amber broth). Squeeze gently — broth should weep from the cut surface. Tofu puffs should be swollen and heavy with absorbed liquid. Shrimp should be pink-orange with tightly curled tails (indicator of 70°C internal temperature). If tails are straight, they\\'re undercooked; if tightly coiled into circles, overcooked.'
    },
    {
      title: 'Assemble the bowls with contrast architecture',
      instruction: 'Place rice vermicelli in each bowl. Arrange sliced pork belly, 2-3 shrimp, eggplant segments, and tofu puffs on top of the noodles. Ladle the hot fermented broth generously — this is a full-broth soup, not Mì Quảng\\'s minimal application. Top with shredded banana blossom, bean sprouts, and raw water spinach (the broth\\'s heat will wilt it). Finish with crispy fried shallots, fresh herbs, lime quarters, and sliced chilies.',
      time: '5 min',
      tip: 'CONTRAST ARCHITECTURE — the bowl is organized as a FLAVOR GRADIENT from mild (bottom) to intense (top). Noodles at the bottom are bland starch — the neutral canvas. Fresh proteins (pork, shrimp) in the middle provide clean reference flavors. The broth itself is the most intense layer. The raw vegetables and herbs on top provide the PALATE RESET TOOLS needed to manage the intensity. This vertical gradient means each spoonful can be calibrated by depth: scooping shallow gives broth + herbs (intense + fresh), scooping deep gives noodles + pork (mild + clean). The eater NAVIGATES the flavor gradient in real time, self-regulating intensity based on their tolerance. Add water spinach raw at the table — it wilts perfectly in the 85-90°C broth within 30 seconds, retaining its chlorophyll brightness and hollow-stem crunch that would be lost if cooked in the pot.',
      doneness: 'The bowl should present a CHROMATIC MAP of the flavor system: amber-orange broth, pale pink pork, orange-pink shrimp, deep purple-brown eggplant, green herbs and water spinach, white noodles visible at the edges. The broth should have a thin film of annatto-colored oil on the surface. Steam should carry lemongrass and fermented fish aromatics — the first impression should be savory-aromatic, not merely pungent.'
    },
    {
      title: 'The eating protocol: managing fermented intensity',
      instruction: 'Begin with a spoonful of pure broth — let the full umami intensity register. Follow immediately with a bite of eggplant (buffered delivery). Then a mouthful of noodles with pork (neutral reset). Build each subsequent bite with increasing proportions of broth to noodle. Squeeze lime gradually over the course of the bowl — each squeeze reduces the biogenic amine volatility by 5-10%. When the broth alone becomes comfortable to sip, the palate has recalibrated.',
      time: '2 min',
      tip: 'GUSTATORY RECALIBRATION TIMELINE: The first 3-5 minutes of eating represent the ADAPTATION PHASE, where olfactory receptor neurons (ORNs) responsive to biogenic amines undergo short-term habituation — firing rate decreases by 40-60% with sustained exposure. During this phase, the broth may taste overwhelmingly pungent. By minute 5-8 (the TRANSITION PHASE), the ORNs have significantly downregulated, and the fermented character shifts from "funky" to "deeply savory" in perceived quality. By minute 10+ (the PLATEAU PHASE), the gustatory system is fully recalibrated: the broth\\'s umami registers at maximum intensity while the amine aroma has faded to a background note. This is the phase where Bún Mắm addicts live — where every sip delivers umami at a concentration that no other Vietnamese soup achieves, without the olfactory penalty that made the first sip challenging. The lime\\'s citric acid assists the transition by protonating surface-level amines with each squeeze, chemically accelerating what the nervous system does neurologically.',
      doneness: 'The bowl is properly eaten when: (1) the broth has been drunk directly from the rim (the ultimate sign of palate recalibration), (2) all eggplant and tofu have been consumed (they absorbed the most broth and therefore deliver the most concentrated flavor), and (3) the shrimp heads have been sucked for their hepatopancreas butter. If any broth remains — and Bún Mắm broth should NEVER remain — the eater has not fully committed.'
    }
  ],

  proTips: [
    {
      title: 'Mắm Quality: Age and Color',
      description: 'Premium mắm cá lóc is aged 12-18 months and has a deep mahogany color with a smooth, almost sweet aroma beneath the fermented character. Young mắm (3-6 months) is sharper, harsher, and produces a broth with more challenging biogenic amine levels. If buying from a Vietnamese market, look for brands from Châu Đốc (An Giang province) — the traditional epicenter of mắm production. The paste should be smooth and uniform, not chunky with visible bone fragments (which indicates incomplete proteolysis).'
    },
    {
      title: 'The Tamarind-Lime Dual Acid Strategy',
      description: 'Tamarind (tartaric acid, pKa 2.89) goes into the cooking broth because it\\'s heat-stable and performs the bulk protonation of biogenic amines during simmering. Lime (citric acid, pKa 3.13) goes in at the table because its volatile limonene aroma provides an olfactory mask in real-time — each squeeze releases fresh citrus volatiles that compete with amine compounds for olfactory receptor binding. Using both acids at different stages achieves 50-70% amine volatility reduction — more effective than either alone.'
    },
    {
      title: 'European Substitute: Anchovy Paste + Fish Sauce',
      description: 'Without access to Vietnamese mắm cá lóc, approximate the fermented base with: 4 tbsp high-quality anchovy paste (sold as "Sardellenpaste" at German supermarkets) + 3 tbsp fish sauce (nước mắm 40°N) + 1 tsp shrimp paste (mắm ruốc or Thai kapi). This combination provides similar glutamate density (600-900 mg/100g) and nucleotide synergy. The flavor profile is 70% approximation — it lacks the specific taurine and anserine signature of fermented snakehead — but produces a credible Bún Mắm experience. Add an extra tablespoon of tamarind to compensate for the substitute\\'s sharper amine profile.'
    },
    {
      title: 'Eggplant: The Intensity Moderator',
      description: 'If the broth is too intense even after lime and tamarind adjustment, ADD MORE EGGPLANT. Each additional 100g of eggplant absorbs 60-80ml of broth during simmering, diluting the concentration in the bowl by approximately 5%. For extreme sensitivity, pre-cook extra eggplant and add it to each bowl before ladling broth — the eggplant acts as a volumetric buffer that makes the broth more approachable without changing its composition.'
    },
    {
      title: 'Why Bún Mắm Is an Acquired Taste (Neurologically)',
      description: 'The olfactory system\\'s response to biogenic amines follows a POWER LAW of habituation: each subsequent exposure reduces perceived intensity by a decreasing percentage. Exposure 1→2: 30-40% reduction. Exposure 2→3: 15-20% reduction. Exposure 3→4: 5-10% reduction. By the 4th-5th bowl (across separate meals), the olfactory system has essentially reclassified the amine volatiles from "threat" to "neutral" — a process called PERCEPTUAL LEARNING. This is why Vietnamese food authorities recommend trying Bún Mắm at least 3 times before deciding you don\\'t like it. The first encounter is almost always negative. The third is almost always positive.'
    }
  ],

  nutrition: {
    calories: 620,
    protein: '38g',
    carbs: '62g',
    fat: '22g',
    fiber: '5g'
  },

  conclusion: `Bún Mắm is Vietnamese cuisine\\'s most honest dish — it hides nothing behind technique or presentation, instead placing the raw product of 12 months of bacterial proteolysis directly in front of you and asking: can you handle the truth of fermentation? The broth is liquid umami at concentrations that trigger gustatory saturation — the point where taste receptors approach maximum occupancy and additional umami compounds produce diminishing returns. The fresh proteins in the bowl exist as contrast agents that make the fermented depth measurable by comparison. The eggplant exists as a delivery buffer that moderates the assault. The herbs and lime exist as chemical deodorizers that protonate the volatile amines into silence. And the entire eating experience is a NEUROLOGICAL JOURNEY from initial olfactory resistance through habituation to the plateau phase where the broth\\'s true character — profoundly, addictively, unsurpassedly savory — reveals itself to a recalibrated palate. This is not a dish for the timid first-timer. It is a dish for the eater who understands that the most complex flavors on earth are produced not by human creativity but by bacterial metabolism operating over months of patient decomposition. Bún Mắm is the taste of time itself — twelve months of enzymatic labor concentrated into a single bowl, and the most compelling argument for why controlled decay is not spoilage but transformation.`
};

export default function BunMamDaNangPage() {
  return <RecipeLayout recipe={recipe} />;
}
