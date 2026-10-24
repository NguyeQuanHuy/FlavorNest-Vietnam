'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ga-nuong-tieu-son-tra',
  title: `Gà Nướng Tiêu Sơn Trà — Sơn Trà Peninsula Black Pepper Grilled Chicken`,
  subtitle: 'Free-range mountain chicken spatchcocked flat, dry-brined with wild Sơn Trà pepper and fish sauce, then grilled over longan-wood charcoal until the skin shatters like glass — a dish that exploits SUBCUTANEOUS FAT RENDERING, PIPERINE THERMOSENSITIZATION, and the physics of RADIANT vs. CONVECTIVE heat transfer to produce the crunchiest chicken skin in Central Vietnam.',
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '2 hr 30 min (including dry brine)',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/ga-nuong-tieu-son-tra.jpg',

  intro: `Sơn Trà Peninsula — the 4,439-hectare mountainous promontory jutting into the East Sea northeast of Đà Nẵng — is one of Vietnam\\'s most biodiverse landmasses, home to the endangered red-shanked douc langur and, less famously, to wild pepper plants (Piper nigrum var.) that produce berries with a piperine concentration 20-35% higher than commercially farmed Phú Quốc or Bình Phước pepper. This intensified piperine content is the result of ALTITUDE STRESS METABOLITE ACCUMULATION: plants growing at 300-600m elevation on Sơn Trà\\'s granite slopes face higher UV radiation, wider temperature swings, and thinner soil nutrient profiles than lowland farms. In response, the plants upregulate secondary metabolite synthesis — piperine, piperonal, β-caryophyllene — as chemical defense compounds. What protects the plant from herbivory becomes, for the cook, an INTENSIFIED FLAVOR ARSENAL.

Piperine (C₁₇H₁₉NO₃) is not merely "hot" in the way capsaicin is hot. While capsaicin activates TRPV1 receptors (the same receptors that detect temperatures above 43°C), piperine activates BOTH TRPV1 AND TRPA1 receptors — the latter being the receptor for mustard oil, wasabi, and raw garlic. This DUAL-RECEPTOR ACTIVATION produces a heat that is simultaneously BURNING (TRPV1) and SHARP-STINGING (TRPA1), a qualitatively different sensation from chili heat alone. Furthermore, piperine is a potent BIOAVAILABILITY ENHANCER: it inhibits hepatic and intestinal glucuronidation (the metabolic pathway that deactivates and prepares absorbed compounds for excretion), increasing the systemic bioavailability of curcumin by 2,000%, β-carotene by 60%, and — critically for taste perception — extending the oral residence time of other flavor compounds by 30-50%. A pepper-heavy marinade doesn\\'t just add pepper flavor; it makes EVERY OTHER FLAVOR in the dish last longer on the palate.

The chicken itself is gà đi bộ (literally "walking chicken") — free-range birds that forage on Đà Nẵng\\'s peri-urban hillsides, developing dense, dark meat with intramuscular fat marbling that factory-farmed birds never achieve. The key difference is MYOGLOBIN CONCENTRATION: free-range chickens that walk 3-5 km daily develop 40-60% more myoglobin in their leg muscles than sedentary caged birds. Myoglobin, the oxygen-storing protein in muscle tissue, serves as a FLAVOR RESERVOIR — when denatured during grilling at 65-80°C, it releases iron (Fe²⁺) that catalyzes lipid oxidation reactions, producing the distinctive "meaty" aroma compounds (hexanal, nonanal, 2-pentylfuran) that define the taste of real chicken versus the bland, watery texture of industrial poultry. The free-range bird\\'s exercise-induced muscle also has a higher ratio of TYPE I (slow-twitch, oxidative) to TYPE II (fast-twitch, glycolytic) fibers, meaning more mitochondria per cell, more enzymatic activity, and ultimately a more COMPLEX FLAVOR DEVELOPMENT during thermal cooking.

SPATCHCOCKING — removing the backbone and flattening the bird — is not a Western technique adapted for Vietnamese cooking; the Vietnamese practice of chặt dọc (splitting along the spine) predates the European term by centuries. The physics are identical regardless of name: a flattened bird has UNIFORM THICKNESS across its entire surface (approximately 3-5cm), which means the grill\\'s radiant heat penetrates to the center from both sides simultaneously, eliminating the thermal gradient problem of a whole round bird (where the breast overcooks to 85°C while the thigh joint is still at 55°C). Spatchcocking also MAXIMIZES SKIN SURFACE AREA in contact with the grill grate, and it is the SKIN that makes this dish extraordinary.

Chicken skin is a TRILAYER COMPOSITE MATERIAL: the outermost layer is the epidermis (dead keratinized cells, 0.1-0.2mm), below that is the dermis (collagen + elastin network, 0.5-1.0mm), and below that is the hypodermis (subcutaneous fat layer, 2-6mm depending on the bird and body location). The DRY BRINE — a 2-hour coating of salt, fish sauce, and crushed pepper applied directly to the skin surface — initiates OSMOTIC DEHYDRATION of the epidermis. The salt draws moisture from the skin\\'s outer layers via osmotic pressure (salt creates a water activity gradient: pure salt aw = 0.75, fresh skin aw = 0.98), reducing the skin\\'s surface moisture by 20-30%. This dehydration is the PREREQUISITE for crunch: water is the enemy of crispness. When this dehydrated skin hits the grill, three things happen in sequence. First (100-120°C), residual moisture boils off and the collagen in the dermis begins to denature, shrinking the skin and creating micro-wrinkles that increase surface area. Second (120-160°C), the subcutaneous fat renders — the triglycerides melt and flow outward through the collagen matrix, BASTING THE SKIN FROM WITHIN while simultaneously removing the insulating fat layer that separates skin from meat. Third (160-200°C), the dehydrated, rendered skin undergoes the MAILLARD REACTION: amino acids from the fish sauce react with reducing sugars from the honey glaze, producing melanoidins (the brown color), pyrazines (the roasted aroma), and furanones (the caramel-like sweetness). The result is skin that has been dehydrated, rendered, and Maillard-crusted — a GLASS-STATE PROTEIN SHEET that shatters on first bite with an audible crack, followed by the rush of rendered fat and concentrated flavor.

The charcoal matters. Longan wood (Dimocarpus longan) charcoal, produced by slow pyrolysis of longan orchard prunings, burns at 600-750°C — hotter than standard commercial charcoal (500-650°C) — with a characteristic SWEET AROMATIC SMOKE profile. During combustion, the longan wood\\'s residual sugars (sucrose, glucose from the sapwood) undergo PYROLYSIS rather than complete oxidation, producing furfural, hydroxymethylfurfural (HMF), and maltol vapor. These sugar-decomposition volatiles deposit on the chicken\\'s surface as a SMOKE CONDENSATE that adds a subtle sweetness impossible to replicate with gas or electric grilling. The higher burning temperature also increases the proportion of RADIANT HEAT (infrared radiation at 2-5 μm wavelength) relative to convective heat (hot air), and radiant heat penetrates the skin surface 2-3mm deep — directly heating the subcutaneous fat layer for more efficient rendering than convective heat alone, which must conduct through the skin surface before reaching the fat.`,

  ingredientSections: [
    {
      title: 'Chicken',
      items: [
        {
          amount: 1,
          name: 'whole free-range chicken (gà đi bộ), 1.5-1.8 kg',
          note: 'Free-range is non-negotiable. The bird\\'s exercise-built Type I muscle fibers contain 40-60% more myoglobin than caged birds — this myoglobin is the iron-rich flavor factory that produces "meaty" aroma compounds during grilling. Look for dark-colored legs (indicating high myoglobin), firm flesh, and yellow-tinted skin (from carotenoid-rich foraging diet). In Germany: Freilandhuhn or Bio-Hähnchen from a Wochenmarkt.'
        }
      ]
    },
    {
      title: 'Sơn Trà Pepper Dry Brine',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'coarsely cracked black pepper',
          note: 'CRACK, don\\'t grind. Coarse 2-3mm fragments create PIPERINE MICROBURSTS: each fragment releases its heat payload only when bitten, producing stochastic spice distribution across the chew cycle rather than uniform heat. Sơn Trà wild pepper has 20-35% higher piperine than commercial; Kampot or Tellicherry pepper are the closest substitutes in Europe.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'fish sauce (nước mắm Phú Quốc)',
          note: 'Applied as part of the dry brine, not a liquid marinade. The fish sauce\\'s 1,200-1,800 mg/100ml free glutamate deposits directly on the skin surface where it will participate in Maillard reactions during grilling — the amino acids from fish sauce react 3-5× faster than those from raw meat, accelerating browning onset.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'fine sea salt',
          note: 'The OSMOTIC ENGINE of the dry brine. Salt creates the water-activity gradient (aw 0.75 vs skin aw 0.98) that drives moisture out of the epidermis over 2 hours. Flaky or coarse salt dissolves too slowly; fine salt creates a uniform brine film within minutes.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'garlic powder',
          note: 'Pre-dehydrated garlic avoids the moisture penalty of fresh minced garlic. Alliin decomposes to allicin-derived sulfur compounds (diallyl disulfide, ajoene) during the dry-brine rest period, infusing the skin surface with volatile sulfur aromatics that amplify the Maillard reaction\\'s pyrazine output.'
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'five-spice powder',
          note: 'Star anise (anethole), cinnamon (cinnamaldehyde), clove (eugenol), fennel (anethole), Sichuan pepper (hydroxy-alpha-sanshool). Five compounds targeting five distinct receptor populations — the AROMATIC BACKDROP against which the black pepper\\'s piperine solo plays.'
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'white sugar',
          note: 'The MAILLARD SUBSTRATE. Sucrose inverts to glucose + fructose under acidic conditions (fish sauce pH 5.0-5.5), and these reducing sugars react with amino acids at grilling temperatures to produce browning. Without sugar, the skin browns 5-8 minutes slower.'
        }
      ]
    },
    {
      title: 'Honey-Pepper Glaze',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'raw honey',
          note: 'Applied in the final 5 minutes of grilling. Honey is a SUPERSATURATED SUGAR SOLUTION (80% sugar, 17% water, aw 0.55-0.60) that creates an instant glass-state coating when dehydrated by grill heat. The honey\\'s fructose caramelizes at 110°C — lower than sucrose\\'s 160°C — producing caramel color and flavor faster, reducing the risk of burning.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'fish sauce',
          note: 'Mixed with the honey for the glaze. Fish sauce amino acids + honey sugars = ACCELERATED MAILLARD at the surface, producing the final deep mahogany color and intense savory-sweet crust.'
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'finely ground black pepper',
          note: 'Fine grind for the glaze — this layer is meant to provide BASELINE CONTINUOUS HEAT (uniformly distributed piperine) against which the coarsely cracked pepper in the dry brine provides STOCHASTIC HEAT SPIKES when bitten. Two particle sizes = two heat delivery modes.'
        }
      ]
    },
    {
      title: 'Charcoal & Aromatics',
      items: [
        {
          amount: 2,
          unit: 'kg',
          name: 'longan-wood charcoal (or fruit-wood charcoal)',
          note: 'Longan (nhãn) charcoal burns at 600-750°C with sweet aromatic smoke from pyrolyzed wood sugars. In Germany: apple wood (Apfelholz) or cherry wood (Kirschholz) charcoal from a Baumarkt produces a similar sweet-smoke profile. Avoid briquettes — the binder additives produce acrid smoke.'
        },
        {
          amount: 4,
          name: 'lemongrass stalks, bruised',
          note: 'Placed directly on the coals in the final 3 minutes. The lemongrass essential oil (citral 65-85% of volatile fraction) vaporizes on contact with 600°C+ coals, producing a CITRAL SMOKE BURST that deposits on the chicken\\'s glaze surface. This is FINISHING SMOKE — applied after the glaze has set, so the aromatic compounds are trapped in the honey\\'s glass-state coating.'
        },
        {
          amount: 1,
          name: 'handful of dried longan shells (optional)',
          note: 'Dried longan fruit shells contain 15-20% tannins by weight. When burned on the coals, these tannins produce pyrogallol vapor — a phenolic compound that imparts a subtle astringent-sweet smoke note unique to longan-wood grilling.'
        }
      ]
    },
    {
      title: 'Dipping Sauce — Salt, Pepper & Lime (Muối Tiêu Chanh)',
      items: [
        {
          amount: 2,
          unit: 'tbsp',
          name: 'fine sea salt',
          note: 'Base mineral taste.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'freshly ground black pepper',
          note: 'THIRD piperine delivery mode — dissolved in lime juice for LIQUID HEAT that coats the oral mucosa uniformly, supplementing the dry brine\\'s embedded heat and the glaze\\'s surface heat.'
        },
        {
          amount: 3,
          name: 'limes, halved',
          note: 'Citric acid + salt + piperine = the TRIGEMINAL TRIAD. Each compound activates a different branch of the trigeminal nerve: acid (sour), salt (gustatory), piperine (nociceptive). Together they produce a sensation greater than the sum of their parts — the salt amplifies sourness perception by 20-30%, while the piperine extends the duration of both.'
        }
      ]
    }
  ],

  steps: [
    {
      title: 'Spatchcock the chicken',
      instruction: 'Place the chicken breast-side down. Using heavy kitchen shears, cut along both sides of the backbone from tail to neck and remove it entirely (save for stock). Flip the chicken breast-side up. Press down firmly on the breastbone with your palms until you hear a CRACK — the keel bone snapping allows the bird to lay completely flat. Tuck the wing tips behind the shoulders. The bird should now be uniformly 3-5cm thick across its entire surface.',
      time: '5 min',
      tip: 'UNIFORM THICKNESS HEAT TRANSFER: A whole round chicken has thickness ranging from 15cm (breast to back) to 3cm (wings). This creates a thermal gradient where the thin parts overcook to 90°C while the thick breast center is still at 55°C. Spatchcocking compresses this range to 3-5cm EVERYWHERE, meaning the thermal center of the thickest section (thigh joint) and the thinnest section (breast edge) both reach 74°C within a 3-5 minute window rather than a 15-20 minute window. The Biot number (Bi = hL/k, where h = heat transfer coefficient, L = characteristic length, k = thermal conductivity) drops from ~2.5 for a whole bird to ~0.8 for a spatchcocked bird — below Bi = 1, the internal temperature distribution is nearly uniform, eliminating the overcooked-outside/raw-inside problem.',
      doneness: 'The bird should lie COMPLETELY FLAT on the cutting board with no section more than 5cm above the board surface. The breastbone should be cracked (you\\'ll feel it give way). Both thighs and drumsticks should splay outward at the same angle. If the bird springs back upright, the keel bone hasn\\'t fully cracked — press again with more force.'
    },
    {
      title: 'Apply the dry brine',
      instruction: 'Mix salt, cracked pepper, fish sauce, garlic powder, five-spice, and sugar into a paste. Pat the chicken completely dry with paper towels — BOTH sides. Apply the brine paste evenly over the entire surface, pressing the cracked pepper fragments into the skin. Place skin-side up on a wire rack set over a sheet pan. Refrigerate UNCOVERED for minimum 2 hours, maximum 12 hours.',
      time: '2 hr (passive)',
      tip: 'DRY-BRINE OSMOTIC PHYSICS: The uncovered refrigeration serves TWO PURPOSES simultaneously. First, the SALT draws moisture from the skin via osmotic pressure. The initial osmotic gradient (skin aw 0.98 → salt surface aw 0.75) pulls water outward at approximately 0.3-0.5 ml per hour. This water dissolves the salt, which then REVERSES DIRECTION — the dissolved salt migrates back into the skin, seasoning it from within (Fick\\'s first law of diffusion). Second, the REFRIGERATOR\\'S AIR CIRCULATION (the evaporator coil dehumidifies air to 30-40% RH) acts as a FORCED-AIR DRYER, evaporating the surface moisture that osmosis brought out. After 2 hours: the skin surface moisture has dropped from 78% to 55-60%, the salt has penetrated 3-5mm deep into the flesh, and the fish sauce amino acids have polymerized slightly on the surface — pre-staging the Maillard reaction. After 12 hours (overnight): the skin surface is almost PAPERY — moisture below 45%, retrogradation of skin collagen begins, and the deep seasoning is uniform throughout the entire bird.',
      doneness: 'After 2 hours minimum: the skin surface should feel noticeably drier and slightly tacky — not wet or slippery. The pepper fragments should be adhered to the surface by the dried fish sauce film. The brine paste should have partially dissolved and been absorbed. If the skin still feels wet, the bird needs more time or the refrigerator humidity is too high — leave the door slightly ajar for 10 minutes to flush humid air.'
    },
    {
      title: 'Build and heat the charcoal fire',
      instruction: 'Light the longan-wood charcoal in a chimney starter. When fully ashed over (20-25 minutes), spread into a TWO-ZONE FIRE: pile 70% of the coals on one side (HOT ZONE, 300-350°C at grate level) and 30% on the other (MEDIUM ZONE, 200-250°C). Place the grate and heat for 5 minutes. Oil the grate by rubbing a lard-soaked paper towel across the bars with tongs.',
      time: '30 min',
      tip: 'TWO-ZONE FIRE AND RADIANT HEAT DOMINANCE: At charcoal temperatures of 600-750°C, heat transfer to the chicken is approximately 65% RADIANT (infrared photons at 2-5 μm wavelength traveling at light speed from coal to skin) and 35% CONVECTIVE (hot air molecules physically contacting the skin). This matters because radiant heat penetrates 2-3mm into the skin surface — directly reaching the subcutaneous fat layer — while convective heat only heats the outermost 0.1mm and must then CONDUCT inward through the skin\\'s poor thermal conductivity (k = 0.37 W/m·K, similar to rubber). The hot zone provides the intense radiant burst needed for initial skin rendering and Maillard browning. The medium zone provides the gentler heat for cooking the meat through without charring the skin. The MOVEMENT between zones is the cook\\'s primary control lever.',
      doneness: 'Hold your hand 15cm above the hot zone grate — you should be able to hold it for only 2-3 seconds (300-350°C). Above the medium zone, 5-6 seconds (200-250°C). The coals should be covered in white-gray ash with no visible flame. Any flames indicate incomplete combustion — wait until they die down.'
    },
    {
      title: 'Grill: skin-side down first, then flip and render',
      instruction: 'Place the chicken SKIN-SIDE DOWN on the HOT ZONE. Do NOT touch it for 5 minutes — the skin must develop its initial Maillard crust without being disturbed. After 5 minutes, slide to the MEDIUM ZONE and continue skin-side down for another 8-10 minutes — listen for the sizzle of fat rendering. Flip to BONE-SIDE DOWN on the medium zone and cook for 15-20 minutes, basting once with any accumulated juices. Move to the hot zone bone-side down for the final 5 minutes to crisp the skin from radiant heat bouncing off the grate.',
      time: '35-40 min',
      tip: 'THE RENDERING SEQUENCE: When the skin hits the 300-350°C hot zone grate, three thermal events cascade. MINUTES 0-2: Surface moisture flash-boils (100°C), creating the initial sizzle — this rapid steam release creates MICRO-PORES in the epidermis through which rendered fat will later escape. MINUTES 2-5: The dermal collagen begins shrinking (onset at 65°C, rapid contraction at 75-80°C), physically COMPRESSING the subcutaneous fat layer beneath it — like squeezing a sponge. MINUTES 5-15 (medium zone): The compressed fat melts (triglyceride melting range 30-45°C, but full rendering requires sustained exposure above 130°C for fat to flow through the collagen matrix) and flows outward through the steam-created micro-pores, SELF-BASTING the skin while dripping onto the coals where it vaporizes into FLARE SMOKE — the brief aromatic bursts from fat combustion that deposit on the chicken\\'s upper surface. DO NOT press down on the chicken — this squeezes out rendered fat before it has traveled through the entire skin thickness, leaving unrendered fat pockets. Let GRAVITY and COLLAGEN CONTRACTION do the work.',
      doneness: 'After skin-side grilling (15-18 minutes total): the skin should be deep golden-brown with visible darkened spots where Maillard products concentrated. Lift an edge — the skin should be RIGID, holding its shape like a cracker rather than flopping. Fat should no longer be visibly dripping (rendering complete). After bone-side grilling (20-25 minutes total): insert an instant-read thermometer into the thickest part of the thigh — target 74-76°C. The breast should read 72-74°C. The juices running from a thigh puncture should be clear, not pink.'
    },
    {
      title: 'Apply the honey-pepper glaze and finish with aromatic smoke',
      instruction: 'Mix honey, fish sauce, and fine pepper. In the final 5 minutes of grilling, flip to skin-side up and brush the glaze over the entire skin surface in THREE THIN COATS, each 90 seconds apart. After the third coat, drop the bruised lemongrass stalks and dried longan shells (if using) directly onto the hot coals. Immediately cover with the grill lid (or an inverted wok) for 2 minutes to trap the aromatic smoke against the glazed surface. Remove to a cutting board and rest 10 minutes before cutting.',
      time: '10 min',
      tip: 'GLAZE GLASS TRANSITION AND SMOKE CAPTURE: Each honey glaze coat undergoes rapid dehydration on the 200°C+ skin surface, transitioning from liquid (aw 0.55) to GLASS STATE (aw <0.3) within 60-90 seconds. The glass-state honey is a rigid, transparent film approximately 0.05-0.1mm thick per coat — three coats build a 0.15-0.3mm EDIBLE LACQUER that is simultaneously a Maillard reaction surface (amino acids + reducing sugars) and a SMOKE TRAP. When the lemongrass hits the 600°C+ coals, its essential oils (citral, geraniol, citronellal) vaporize explosively — these volatile compounds encounter the still-tacky glaze surface and are ADSORBED into the honey\\'s glass matrix, locked in place as the glaze finishes setting. Without the glaze, these smoke aromatics would simply bounce off the already-set skin surface. With the glaze, they become permanent flavor residents. The 10-MINUTE REST is critical: the temperature gradient within the bird (surface 180°C, center 74°C) drives MOISTURE REDISTRIBUTION via pressure differential. The overheated outer fibers have expelled moisture into the gaps between muscle bundles; during rest, as the surface cools and pressure equalizes, this pooled moisture is REABSORBED by the partially denatured muscle proteins. Cutting immediately releases this moisture as juice loss (15-20% of total weight); resting reduces juice loss to 5-8%.',
      doneness: 'The glaze should be a deep MAHOGANY color — darker than the Maillard-only skin beneath it, with a high-gloss sheen that catches light. Tap the skin with a fingernail — it should produce a hollow, resonant TOCK (glass-state confirmation). The lemongrass aroma should be immediately detectable when you bring the bird to your nose. After 10 minutes of rest: press the breast meat with a finger — it should yield gently and spring back slowly (indicating fully rested, rehydrated fibers). A sharp knife through the thigh joint should meet minimal resistance and release minimal juice.'
    },
    {
      title: 'Cut and serve with muối tiêu chanh',
      instruction: 'Using a heavy cleaver, cut the chicken Vietnamese-style: through the bone into 3-4cm pieces. Arrange on a platter with the crispiest skin pieces facing upward. Serve immediately with muối tiêu chanh (salt + pepper + lime juice mixed fresh at the table). Each piece is dipped skin-first into the salt-pepper-lime, bitten through the glass-state skin, and chewed through the piperine-infused meat.',
      time: '5 min',
      tip: 'TRIPLE PIPERINE DELIVERY ARCHITECTURE: This dish delivers piperine through THREE DISTINCT MECHANISMS, each targeting a different temporal window. LAYER 1 — DRY BRINE (embedded): Coarsely cracked 2-3mm pepper fragments embedded in the skin during the 2-12 hour brine. These fragments release piperine ONLY when bitten — producing stochastic, unpredictable heat spikes during chewing. LAYER 2 — GLAZE (surface): Finely ground pepper dissolved in the honey-fish sauce glaze. This piperine is uniformly distributed across the skin\\'s surface and dissolves on contact with saliva — producing IMMEDIATE, UNIFORM baseline heat the instant the skin enters the mouth. LAYER 3 — DIPPING SAUCE (external): Fresh-ground pepper dissolved in lime juice. Citric acid enhances piperine\\'s TRPV1 activation by lowering oral pH (protons are TRPV1 co-agonists), amplifying the perceived heat by 40-60%. These three layers create a TEMPORAL PIPERINE CASCADE: glaze heat (0-2 seconds) → embedded heat (3-8 seconds, stochastic) → dipping sauce heat (continuous background). At no point in the chew cycle is the palate without piperine stimulation.',
      doneness: 'The cut pieces should reveal THREE DISTINCT LAYERS visible in cross-section: (1) the glass-state skin + glaze (0.5-1mm, dark mahogany, shattering), (2) the rendered subcutaneous zone (1-2mm, translucent, fatty), and (3) the seasoned meat (white-pink, juicy, with visible pepper fragments). The dipping sauce should be mixed fresh — salt and pepper dissolving in lime juice, creating a cloudy, intensely aromatic liquid. If the skin on any piece is soft or leathery rather than crispy, that piece didn\\'t receive adequate rendering — eat it first, before it softens further.'
    }
  ],

  proTips: [
    {
      title: 'Dry-Brine Duration: 2 Hours vs Overnight',
      description: 'Two hours is the MINIMUM for osmotic salt penetration to reach 3mm depth and surface dehydration to begin. Overnight (8-12 hours) is optimal: the salt penetrates the full 5-8mm depth of the breast, the surface moisture drops below 45%, and the fish sauce amino acids form a dried film that undergoes INSTANT Maillard reaction on grill contact — producing deep color within the first 2 minutes rather than the usual 5-8 minutes. The overnight bird is detectably crispier and more evenly seasoned than the 2-hour bird.'
    },
    {
      title: 'Charcoal Temperature Calibration',
      description: 'If you don\\'t have a grill thermometer, use the HAND TEST at grate level: 2 seconds = 350°C+ (searing zone, too hot for sustained cooking), 3-4 seconds = 280-320°C (ideal hot zone), 5-6 seconds = 200-260°C (ideal medium zone), 7+ seconds = below 200°C (too cool, skin won\\'t render properly). The fat rendering phase requires sustained 250-300°C to keep the triglycerides fluid enough to flow through the collagen matrix — below 200°C the fat resolidifies before escaping, producing a greasy, unrendered skin.'
    },
    {
      title: 'German Grill Adaptation',
      description: 'A Weber Kugelgrill (kettle grill) is ideal for the two-zone fire. Pile the coals on one side using the Kohleschiene (coal divider). For the aromatic smoke finish, close the lid and open the bottom vent halfway + top vent fully — this creates a draft that pulls smoke across the chicken from bottom to top, maximizing smoke contact time. Apfelholz (apple wood) or Kirschholz (cherry wood) chunks from OBI or Hornbach produce the closest smoke profile to longan charcoal.'
    },
    {
      title: 'The Rest Is Not Optional',
      description: 'Cutting the chicken immediately off the grill wastes 15-20% of the meat\\'s moisture as juice loss. During the 10-minute rest, the internal temperature continues rising 3-5°C (carryover cooking) while the pressure differential between the overheated surface and cooler center drives moisture redistribution back into the muscle fibers. A rested bird produces 60-70% less juice when cut, meaning that moisture stayed in the meat where it belongs. Cover loosely with foil — not tightly, which traps steam and softens the glass-state skin.'
    },
    {
      title: 'Piperine Bioavailability Enhancement',
      description: 'Piperine inhibits CYP3A4 and UGT enzymes in the liver and intestinal wall, reducing first-pass metabolism of co-consumed compounds. This means that the turmeric in any accompanying dish (Mì Quảng, for example) has 2,000% higher bioavailability when eaten in the same meal. It also means that the flavor compounds from the honey glaze, fish sauce, and lemongrass smoke ALL persist longer on the palate — piperine literally extends the "flavor half-life" of the entire meal.'
    }
  ],

  nutrition: {
    calories: 480,
    protein: '42g',
    carbs: '8g',
    fat: '32g',
    fiber: '1g'
  },

  conclusion: `Gà Nướng Tiêu Sơn Trà is a study in PHASE TRANSITIONS applied to poultry. The skin undergoes four state changes — hydrated → osmotically dehydrated → rendered → glass-state lacquered — each transition removing water, adding flavor, and increasing brittleness until the final product SHATTERS on contact with teeth. The three-layer piperine delivery architecture (embedded fragments, surface glaze, external sauce) ensures that heat perception is never absent, never monotonous, and never predictable — each chew cycle encounters a different combination of steady burn, stochastic spike, and acid-amplified sting. The free-range chicken\\'s exercise-dense Type I muscle fibers, rich in myoglobin and mitochondrial enzymes, produce a depth of "chicken flavor" that no factory bird can approach — the iron-catalyzed lipid oxidation products (hexanal, nonanal) are the chemical signature of REAL CHICKEN, the taste that industrial agriculture has bred out of existence. The longan-wood smoke deposits its pyrolyzed-sugar aromatics into the honey glaze\\'s glass matrix, permanently embedding the sweet smoke into the crust rather than leaving it as a surface dusting that fades with the first breath. And the muối tiêu chanh dipping sauce — that simple trinity of salt, pepper, and lime — exploits proton-mediated TRPV1 co-agonism to amplify the perceived heat of every pepper encounter by 40-60%, turning a condiment into a FLAVOR AMPLIFIER. This is the chicken that Đà Nẵng locals drive up the winding Sơn Trà road to eat at sunset, watching the fishing boats return to Thọ Quang harbor while their fingers crack through mahogany skin and pepper-fire lights up the palate. It is the taste of a peninsula where wild pepper grows harder than anywhere else, where chickens still walk free, and where the cook\\'s job is simply to not waste what nature provided.`
};

export default function GaNuongTieuSonTraPage() {
  return <RecipeLayout recipe={recipe} />;
}
