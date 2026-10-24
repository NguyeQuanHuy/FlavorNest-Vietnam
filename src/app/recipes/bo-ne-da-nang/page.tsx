'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bo-ne-da-nang',
  title: `Bò Né Đà Nẵng — Sizzling Steak & Eggs on a Cast Iron Plate`,
  subtitle: 'A screaming-hot cast iron plate bearing a butter-basted steak, fried eggs with lace-crispy edges, pâté toast, and a tomato-onion sauté — served still sizzling so violently that the name "né" means "DODGE" — the diner must lean back to avoid the spitting oil, and the dish is a masterclass in CONTACT HEAT TRANSFER, BUTTER BASTING THERMODYNAMICS, and the Leidenfrost-to-nucleate boiling transition that creates the most dramatic breakfast in Central Vietnam.',
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '25 min',
  rating: 4.8,
  baseServings: 2,
  heroImage: '/images/recipes/bo-ne-da-nang.jpg',

  intro: `Bò Né is Vietnam\’s answer to a question that French colonial cuisine left behind: what happens when you take the STEAK-FRITES concept, strip away Parisian pretension, serve it on a plate so hot it could brand cattle, and price it as BREAKFAST? The answer is one of Đà Nẵng\’s most beloved morning rituals — a dish where the plate itself is the cooking vessel, where the sizzle is not ambiance but a SAFETY WARNING, and where the physics of heat transfer determine whether you get a perfectly crusted steak or a gray, steamed disappointment.

The "NÉ" (dodge/lean back) in Bò Né is not metaphorical. The cast iron plate arrives at the table heated to 250-300°C — well above the smoke point of the butter and oil mixture coating its surface (butter smoke point: 175°C, clarified butter: 250°C). At these temperatures, the residual moisture in the steak, eggs, and vegetables that sit on the plate undergoes VIOLENT NUCLEATE BOILING: water droplets trapped between the food and the superheated iron surface vaporize explosively, ejecting micro-droplets of oil in ballistic trajectories up to 30-40cm from the plate surface. These oil droplets are at 200-250°C — enough to cause minor burns on exposed skin. The experienced Bò Né diner holds the menu or a napkin as a SHIELD, leans back at a 30-45° angle, and waits for the initial 15-20 second eruption to subside before approaching the plate. This is not theater — it is THERMODYNAMICS made audible and visible.

The CAST IRON PLATE (đĩa gang) is the dish\’s central technology. Cast iron has a thermal conductivity of 50-55 W/m·K — modest compared to aluminum (237 W/m·K) or copper (398 W/m·K), but it compensates with extraordinary VOLUMETRIC HEAT CAPACITY (3.5 MJ/m³·K). A 2kg cast iron plate heated to 280°C stores approximately 350 kJ of thermal energy — enough to continue cooking the steak for 5-7 minutes at the table without any external heat source. This stored energy is what makes tableside sizzle-cooking possible: the steak continues developing its Maillard crust while the diner watches, the eggs continue setting their whites while leaving the yolks runny, and the vegetables continue caramelizing — all on residual thermal energy that slowly depletes at a rate of approximately 2-3°C per minute. By the time the plate cools to 150°C (when the sizzle fades to silence), the cooking is complete.

The STEAK in Đà Nẵng\’s Bò Né is NOT a thick Western-style cut. It is a thin steak — 8-12mm thick — from the loin or round, often pounded slightly thinner for even cooking. This thinness is not a compromise; it is a DESIGN SPECIFICATION. At 8-12mm thickness, the thermal center of the steak reaches 60°C (medium-rare) within 2-3 minutes of contact with the 280°C plate — fast enough that the surface develops an intense Maillard crust WITHOUT the center overcooking. A thick 25mm steak on the same plate would char its surface to carbon before the center reached 55°C. The thin format also maximizes the CRUST-TO-INTERIOR RATIO: a 10mm steak has a crust-to-center ratio of approximately 30-40% (3-4mm of Maillard crust on each side, 2-4mm of pink center), versus 10-15% for a thick steak. More crust per bite = more Maillard flavor compounds per gram of meat.

The BUTTER BASTING technique — spooning hot melted butter over the steak\’s top surface while the bottom sears on the plate — is a heat transfer technique that bridges the gap between CONDUCTIVE heating (plate-to-bottom-surface contact) and CONVECTIVE heating (hot butter flowing over the top surface). Without basting, the top surface of a thin steak cooks only from INTERNAL CONDUCTION — heat traveling vertically through the meat at 0.4-0.5 W/m·K (muscle\’s thermal conductivity). With basting, the top surface receives EXTERNAL CONVECTIVE HEAT from the butter (temperature 160-180°C, heat transfer coefficient 250-500 W/m²·K for a flowing liquid fat film), which can deliver heat 5-10× faster than internal conduction. The result: the top surface develops Maillard browning SIMULTANEOUSLY with the bottom surface — bilateral crust formation, eliminating the "seared bottom / gray top" problem of conventional single-side searing.

The butter itself contributes FLAVOR COMPOUNDS during basting that the steak\’s own surface chemistry cannot produce. Butter is 80% fat, 16-18% water, and 2-4% MILK SOLIDS. The milk solids contain casein and whey proteins, lactose (a reducing sugar), and phospholipids. When butter is heated to 160-180°C, the lactose and casein undergo their OWN Maillard reaction — independent of and in addition to the beef\’s Maillard reaction — producing diacetyl (2,3-butanedione, butter-scotch aroma), δ-decalactone (creamy, peach-like), and 2-acetyl-2-thiazoline (roasted, nutty). These BUTTER MAILLARD PRODUCTS deposit on the steak\’s surface during basting, adding a flavor dimension that beef alone cannot generate. The butter\’s water content (16-18%) also plays a role: as water vaporizes on the steak\’s hot surface, it creates localized cooling that PREVENTS the surface temperature from exceeding 180°C — the threshold above which Maillard products begin degrading into bitter pyrolysis compounds. Butter is simultaneously a flavor donor, a heat transfer medium, and a TEMPERATURE REGULATOR.

The FRIED EGGS occupy the plate\’s COOLER ZONE (the edge, where the cast iron is thinner and stores less thermal energy, running 200-230°C versus the center\’s 280°C). At these temperatures, the egg white proteins — ovalbumin (54% of white protein, denaturation temperature 84°C), ovotransferrin (12%, denaturation 61°C), and ovomucoid (11%, denaturation 77°C) — denature in a specific sequence. Ovotransferrin goes first (the thin, watery outer white firms up), followed by ovomucoid and then ovalbumin (the thick inner white sets to an opaque gel). The egg\’s edge, in direct contact with the superheated oil film on the iron plate, undergoes EXTREME Maillard reaction: the proteins and trace sugars in the white react at 200°C+, producing a LACE-CRISPY FRILL of brown, crunchy egg white that extends 1-2cm beyond the egg\’s body. This crispy edge — called "rìa trứng giòn" — is the textural signature of Bò Né eggs. The yolk, insulated by the thick white beneath it and heated only from below through conduction, remains RUNNY (center temperature 55-60°C) while its top surface begins to set from the rising steam. The ideal Bò Né egg has a crispy bottom, a set white, and a yolk that breaks into golden liquid when punctured — a TEMPERATURE GRADIENT preserved in protein form.

The PÂTÉ TOAST is the French colonial ghost in the machine. A slice of baguette is toasted and spread with pâté de foie (liver pâté), then placed on the sizzle plate where the butter and steak juices can seep into its toasted surface. The pâté\’s emulsified fat (30-40% of pâté by weight) melts on contact with the hot plate, migrating into the bread\’s porous crumb structure via CAPILLARY ACTION — the bread\’s open-cell foam structure (pore diameter 0.5-3mm) generates capillary pressures of 20-100 Pa that draw the liquid fat inward. The toast becomes a FAT-SATURATED SPONGE that delivers concentrated pâté flavor in every bite, while its toasted surface provides CRUNCH contrast against the melting pâté within.`,

  ingredientSections: [
    {
      title: 'Steak',
      items: [
        {
          amount: 2,
          name: 'beef steaks, 8-12mm thick, 150-180g each (sirloin or round)',
          note: 'THIN CUT is the specification. Pound slightly with a meat mallet if thicker than 12mm. The thin format maximizes crust-to-interior ratio (30-40% vs 10-15% for thick steaks) and allows the thermal center to reach medium-rare (60°C) within 2-3 minutes of plate contact — fast enough to prevent charring. In Germany: Rumpsteak or Hüftsteak from the Metzger, sliced to 10mm and pounded lightly.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'soy sauce',
          note: 'MARINADE BASE. Soy sauce\’s free amino acids (glutamic acid 800-1,200 mg/100ml) accelerate Maillard browning by pre-depositing reactive amino groups on the meat surface. The 1-2% salt content also draws surface moisture outward via osmosis — pre-drying the surface for faster browning onset.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'oyster sauce',
          note: 'Adds glutamate + caramelized sugar. The sugar component (15-20% of oyster sauce) provides readily available REDUCING SUGARS for Maillard reaction — meat\’s own surface sugars (glycogen at 0.5-1.0%) are often insufficient for rapid browning at the thin steak\’s short cook time.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'vegetable oil',
          note: 'Coats the marinated surface in a thin lipid film that improves THERMAL CONTACT between the meat\’s irregular surface and the flat iron plate. Without oil, air gaps between meat and plate create insulating pockets where no browning occurs — the dreaded "gray spots."'
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'freshly cracked black pepper',
          note: 'Piperine for heat and bioavailability enhancement (same mechanism as Gà Nướng Tiêu). Applied pre-cook so the pepper fragments embed in the developing Maillard crust.'
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'garlic, minced',
          note: 'Allicin-derived sulfur compounds amplify the Maillard reaction\’s pyrazine output. Applied pre-cook for surface-level aromatic integration.'
        }
      ]
    },
    {
      title: 'Butter Basting',
      items: [
        {
          amount: 50,
          unit: 'g',
          name: 'unsalted butter',
          note: 'The TRI-FUNCTION MEDIUM: (1) convective heat delivery to the steak\’s top surface at 160-180°C, (2) butter Maillard flavor compounds (diacetyl, δ-decalactone) deposited during basting, (3) water content (16-18%) acts as temperature regulator preventing surface pyrolysis above 180°C. Unsalted butter allows independent salt control.'
        },
        {
          amount: 2,
          name: 'garlic cloves, smashed',
          note: 'Infused into the basting butter. The garlic\’s sulfur compounds dissolve in the butter\’s fat phase and are deposited on the steak surface with each basting spoon, creating a GARLIC-BUTTER MAILLARD LAYER distinct from the beef\’s own Maillard products.'
        },
        {
          amount: 2,
          name: 'sprigs of fresh thyme (or rosemary)',
          note: 'Added to the basting butter. Thymol (from thyme) or 1,8-cineole (from rosemary) are fat-soluble terpenes that dissolve in the hot butter and transfer to the steak\’s surface during basting — AROMATIC INFUSION via fat-phase solubilization.'
        }
      ]
    },
    {
      title: 'Eggs & Accompaniments',
      items: [
        {
          amount: 4,
          name: 'eggs',
          note: 'Two per person. Cracked directly onto the sizzle plate\’s EDGE ZONE (200-230°C). The edge placement ensures a crispy lace frill on the bottom while keeping the yolk runny — exploiting the cast iron plate\’s radial temperature gradient.'
        },
        {
          amount: 1,
          name: 'medium tomato, sliced into wedges',
          note: 'Placed on the sizzle plate. At 200°C+, the tomato\’s surface water boils off rapidly and the sugars (fructose + glucose, 2-3% by weight) caramelize, producing a SWEET-CHARRED flavor that bridges the savory steak and the rich eggs.'
        },
        {
          amount: 1,
          name: 'small onion, sliced into rings',
          note: 'The onion\’s high sugar content (8-10% of dry weight) makes it the fastest-caramelizing vegetable on the plate. At 250°C+ contact temperature, onion sugars undergo RAPID CARAMELIZATION (not Maillard — this is pure sugar pyrolysis) within 30-60 seconds, producing the sweet, slightly bitter caramel notes that complement the steak\’s savory Maillard products.'
        },
        {
          amount: 4,
          name: 'baguette slices, toasted',
          note: 'Toasted to golden — the bread\’s surface starch has undergone glass transition, creating a rigid crust that resists immediate moisture absorption from the pâté and steak juices. This crust buys 2-3 minutes of crunch before the capillary-drawn fats soften it.'
        },
        {
          amount: 60,
          unit: 'g',
          name: 'liver pâté (pâté de foie)',
          note: 'Spread on the toasted baguette. The pâté\’s emulsified fat (30-40%) melts on the hot plate and migrates into the bread via capillary action — the bread becomes a fat-saturated flavor sponge. In Germany: Leberwurst (fine texture type) or French-style pâté from the Feinkost section.'
        }
      ]
    },
    {
      title: 'Dipping Sauce (Nước Tương)',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'soy sauce',
          note: 'GLUTAMATE BACKBONE for the dipping sauce.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'lime juice',
          note: 'Citric acid for brightness. Protonates any Maillard-derived bitter compounds, reducing their perceived bitterness.'
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'sugar',
          note: 'Balances the soy sauce\’s salt intensity.'
        },
        {
          amount: 1,
          name: 'red chili, sliced',
          note: 'Capsaicin heat for the dipping sauce.'
        }
      ]
    }
  ],

  steps: [
    {
      title: 'Marinate the steaks',
      instruction: 'Combine soy sauce, oyster sauce, oil, pepper, and minced garlic. Coat the steaks and marinate for 15-20 minutes at room temperature. Remove from refrigerator 20 minutes before cooking to bring the meat to room temperature — cold steaks create a larger thermal gradient between surface and center.',
      time: '20 min',
      tip: 'ROOM TEMPERATURE EQUILIBRATION AND THERMAL GRADIENT: A steak at 4°C (refrigerator temperature) placed on a 280°C plate has a temperature differential (ΔT) of 276°C. A room-temperature steak (20°C) has ΔT = 260°C. The difference seems small (16°C), but the thermal center is what matters: a cold steak\’s center starts at 4°C and must reach 60°C (medium-rare) — a 56°C rise — while its surface is at 280°C. This creates a STEEP THERMAL GRADIENT that overcooks the outer layers before the center warms up. A room-temperature center starting at 20°C needs only a 40°C rise — the gradient is SHALLOWER, meaning less overcooking of the outer layers by the time the center reaches target. For thin steaks (10mm), this effect is less pronounced than for thick steaks, but it\’s still measurable: the room-temperature steak has approximately 15-20% less overcooked "gray band" between the crust and the pink center.',
      doneness: 'The steak surface should look slightly glossy from the marinade coating. The soy sauce should have created a slightly darker color on the surface — this pre-deposited amino acid layer will begin Maillard browning within the first 30 seconds of plate contact. The meat should feel slightly cool to the touch — not cold from the fridge, not warm.'
    },
    {
      title: 'Preheat the cast iron sizzle plates',
      instruction: 'Place cast iron sizzle plates directly on the stovetop burner (or in a 280°C oven) for 10-12 minutes. The plates must reach 280°C MINIMUM before any food touches them. Add 1 tablespoon of vegetable oil to each plate in the final 2 minutes — the oil should shimmer, then begin to smoke lightly.',
      time: '12 min',
      tip: 'THERMAL ENERGY LOADING: The 10-12 minute preheat is not just about surface temperature — it\’s about loading the cast iron\’s entire thermal mass with energy. A 2kg plate at 280°C stores Q = mcΔT = 2 × 460 × 260 ≈ 239 kJ (where 460 J/kg·K is cast iron\’s specific heat capacity and 260°C is the temperature rise from room temperature). This stored energy must be sufficient to: (1) sear the steak bottom (requires approximately 50 kJ over 2 minutes), (2) fry the eggs (approximately 30 kJ over 3 minutes), (3) caramelize the vegetables (approximately 20 kJ over 2 minutes), AND (4) continue sizzling at the table for 3-5 minutes (approximately 100 kJ lost to air convection and radiation). A COLD or insufficiently preheated plate runs out of stored energy before the steak develops its crust — the surface temperature drops below the Maillard threshold (120°C) and the steak STEAMS instead of sears, producing the gray, boiled-meat texture that is the cardinal sin of Bò Né.',
      doneness: 'The oil should SHIMMER (convection currents visible on the oil surface, indicating 200-230°C) and begin producing the first wisps of smoke (250°C+). Drop a single water droplet onto the plate: it should DANCE (Leidenfrost effect, >200°C), then evaporate violently within 1 second (>250°C). If the water droplet simply sizzles and evaporates slowly (>3 seconds), the plate is not hot enough — continue heating.'
    },
    {
      title: 'Sear the steak with butter basting',
      instruction: 'Place the marinated steak on the CENTER of the screaming-hot plate. Do NOT move it for 90 seconds. While the bottom sears, add butter, smashed garlic, and thyme to the plate\’s edge. As the butter melts and foams, tilt the plate slightly and use a spoon to continuously baste the steak\’s top surface with the foaming butter for 60 seconds. Flip the steak and sear the second side for 60-90 seconds, continuing to baste.',
      time: '3-4 min',
      tip: 'BUTTER FOAM AND BILATERAL CRUST: When butter hits the 250°C+ plate, its water content (16-18%) vaporizes VIOLENTLY, creating the characteristic foaming. This foam is NOT a waste product — it is a HEAT TRANSFER OPTIMIZATION. The foam consists of thin butter films stretched between steam bubbles, creating an enormous surface area of hot fat. When spooned over the steak\’s top surface, these thin films conform to the meat\’s irregular topography, delivering heat to every crevice and ridge that a flat pool of butter would bridge over. The foam\’s steam content also provides MOISTURE-MEDIATED HEAT TRANSFER — steam at 100°C+ condenses on the steak\’s cooler top surface, releasing its latent heat of vaporization (2,260 kJ/kg) directly onto the meat. The combination of FAT CONVECTION (butter at 160-180°C) and STEAM CONDENSATION (at 100°C) produces bilateral browning rates within 15-20% of each other — the bottom (direct contact at 280°C) develops its crust only slightly faster than the top (basted at equivalent 180-220°C effective temperature).',
      doneness: 'After 90 seconds on side one: the bottom should have a deep brown, unbroken Maillard crust. Lift an edge to check — no gray or pale patches. The butter should be golden-brown and fragrant (the milk solids have undergone their own Maillard reaction — diacetyl and δ-decalactone aromas). After flipping and 60-90 seconds on side two: both surfaces should be deeply browned. Touch the center — it should yield with gentle resistance (medium-rare, approximately 55-60°C internal). For medium: add 30 seconds per side.'
    },
    {
      title: 'Add eggs, vegetables, and pâté toast to the plate',
      instruction: 'Push the steak to one side of the plate. Crack eggs onto the EDGE ZONE (cooler area). Lay tomato wedges and onion rings in any remaining space. Place pâté-spread toast at the plate\’s coolest corner. The entire plate should now be fully loaded — steak in center, eggs on one side, vegetables scattered, toast tucked in the corner.',
      time: '2 min',
      tip: 'RADIAL TEMPERATURE GRADIENT EXPLOITATION: A cast iron plate does not have uniform temperature — its CENTER (where the burner flame was concentrated) is approximately 280°C, while its EDGE (thinner metal, more surface area for heat loss) runs 200-230°C. This 50-80°C radial gradient creates THERMAL ZONES that you exploit by placing each component where its optimal cooking temperature lies. The steak occupies the center (280°C — maximum Maillard intensity). The eggs occupy the mid-edge (220-250°C — hot enough for lace-crispy whites but not so hot that the yolk sets instantly). The tomatoes and onions occupy any zone (they caramelize across the full 200-280°C range). The toast occupies the coolest edge (200°C — warm enough to melt the pâté fat into the bread but not so hot that it chars the bread surface). This is MULTI-ZONE COOKING on a single thermal surface — the same principle as a professional kitchen\’s French top range, where different zones run different temperatures for different tasks.',
      doneness: 'The eggs should be audibly sizzling with the edge of the white spreading thin (indicating sufficient plate temperature for crispy frill formation). The onion rings should be browning on contact surfaces. The tomato wedges should be releasing moisture (their surfaces should be bubbling). The toast should have a melting pool of pâté visible on its surface.'
    },
    {
      title: 'Serve tableside: the "né" moment',
      instruction: 'Transfer the fully loaded sizzle plate onto its wooden trivet base and bring to the table IMMEDIATELY — the plate must still be actively sizzling. Place it in front of the diner with a WARNING: "NÉ!" The initial oil-spitting eruption lasts 15-20 seconds. The diner should hold a napkin as a shield and lean back. Once the eruption subsides, the diner has 5-7 minutes to eat while the plate continues cooking the components on its residual heat. Serve with the soy-lime-chili dipping sauce on the side.',
      time: '1 min',
      tip: 'THE NUCLEATE BOILING ERUPTION: When the loaded plate is moved from the stovetop to the table, the jostling DISLODGES trapped moisture pockets between the food and the plate surface. These pockets — previously held in place by the food\’s weight — suddenly contact the 250°C+ iron, undergoing NUCLEATE BOILING: the liquid water superheats past 100°C on the superheated surface, then explosively vaporizes, ejecting micro-droplets of oil in all directions. This is different from the Leidenfrost effect (which produces a STABLE vapor film) — nucleate boiling occurs at lower superheat (ΔT_superheat = 5-30°C above boiling point) and is characterized by INDIVIDUAL BUBBLE NUCLEATION at specific surface sites, each bubble bursting violently at the liquid-air interface. The eruption is self-limiting: once the trapped moisture has boiled off (15-20 seconds), the surface returns to dry-contact conduction and the sizzle fades to a gentle crackle. The 5-7 MINUTE EATING WINDOW is defined by the plate\’s thermal decay: starting at 250°C, the plate loses heat at approximately 3°C per minute to convection and radiation. At 150°C (reached after approximately 5-7 minutes), the plate no longer has sufficient thermal energy to continue cooking — the Maillard reaction threshold (120°C) is passed, and browning ceases. Eat the steak first (while the Maillard is still active on its contact surface), then the eggs, then the vegetables, then the toast last (it benefits from extended fat absorption time).',
      doneness: 'The plate\’s sizzle should be DEAFENINGLY LOUD for the first 15-20 seconds (nucleate boiling eruption), then fade to a steady crackle (stable contact boiling), then to a gentle hiss (plate cooling below vigorous boiling temperature). The steak should have a deep brown crust on its bottom surface (the table side, still in contact with the plate). The eggs should have a CRISPY LACE FRILL — 1-2cm of brown, crackly egg white extending beyond the egg\’s body — with a runny yolk visible as a golden dome in the center. The onion rings should be golden-brown and sweet-smelling. The toast should have absorbed enough melted pâté to darken its cut surface. Puncture the egg yolk with the tip of a chopstick — it should release a flow of liquid gold that pools around the steak and toast, creating a rich YOLK SAUCE that the steak pieces are dipped into.'
    }
  ],

  proTips: [
    {
      title: 'The Wooden Trivet Is Not Optional',
      description: 'The cast iron plate at 250°C+ will SCORCH any surface it touches — table, placemat, anything. The wooden trivet (đế gỗ) is a thermal insulator (wood conductivity = 0.1-0.2 W/m·K vs iron\’s 50 W/m·K) that protects the table surface while also serving as a HANDLE for the diner to rotate the plate. Never place the sizzle plate directly on any surface other than its trivet.'
    },
    {
      title: 'Steak Thickness: The 10mm Sweet Spot',
      description: 'Thinner than 8mm: the thermal center overshoots medium-rare before any meaningful crust develops — the steak is uniformly gray-brown throughout. Thicker than 15mm: the surface chars to bitter pyrolysis products before the center reaches 55°C, and the crust-to-interior ratio drops below 20%. The 8-12mm range, with 10mm as the optimum, allows full Maillard crust development (3-4mm on each side) while maintaining a 2-4mm pink center — the maximum crust-to-interior ratio achievable without overcooking either zone.'
    },
    {
      title: 'German Cast Iron Sizzle Plate Sources',
      description: 'A Gusspfanne (cast iron skillet) works — Lodge, Skeppshult, or Petromax brands from Amazon.de or Manufactum. For authentic Bò Né presentation, search for "Servierpfanne aus Gusseisen" (cast iron serving pan) with a wooden Untersetzer (trivet). A 20-25cm diameter plate is ideal for a single serving. Pre-season with flaxseed oil before first use — the polymerized oil coating prevents rust and creates a non-stick surface that improves with use.'
    },
    {
      title: 'Egg Yolk as Sauce: The Emulsion Hack',
      description: 'When the runny yolk breaks over the hot plate, it encounters melted butter, rendered steak fat, and the steak\’s Maillard juices. The yolk\’s lecithin (a phospholipid emulsifier at 10% concentration in yolk) spontaneously EMULSIFIES these fats into the yolk\’s aqueous phase, creating an instant HOLLANDAISE-LIKE SAUCE without any whisking or tempering. This is the same chemistry as traditional hollandaise — yolk lecithin stabilizing a fat-in-water emulsion — but performed by the sizzle plate\’s residual heat rather than a double boiler. Drag each steak piece through this spontaneous sauce before eating.'
    },
    {
      title: 'Eating Sequence for Maximum Experience',
      description: 'The optimal sequence follows the plate\’s THERMAL DECAY: (1) Steak first — while the plate is hottest (250°C+), the steak\’s contact surface is still developing Maillard crust. Cut and eat within 2-3 minutes. (2) Eggs second — the yolk, once broken, begins setting on the hot plate. Eat within 1 minute of breaking for maximum runniness. (3) Vegetables third — tomato and onion continue caramelizing on residual heat. (4) Pâté toast last — the toast has been absorbing melted pâté fat for the entire meal, reaching peak fat saturation by the 5-minute mark. Each component is eaten at the moment the plate\’s declining temperature curve delivers its optimal cooking state.'
    }
  ],

  nutrition: {
    calories: 620,
    protein: '38g',
    carbs: '22g',
    fat: '42g',
    fiber: '2g'
  },

  conclusion: `Bò Né Đà Nẵng is BREAKFAST AS THEATER — a dish where the cooking vessel IS the serving vessel, where the meal continues to cook itself at the table on stored thermal energy, and where the first act is literally dangerous enough to require the diner to DODGE. The cast iron plate\’s 350 kJ of stored energy at 280°C is the engine: it drives the steak\’s bilateral Maillard crust through butter basting (hot fat + steam condensation = top-and-bottom browning within 15-20% of each other), it creates the egg\’s signature lace-crispy frill through extreme nucleate boiling at the white\’s edge, it caramelizes the onion\’s 8-10% sugar content within 30 seconds of contact, and it melts the pâté into the toast\’s porous crumb through capillary-driven fat migration. The "xèo" of Bánh Xèo was the sound of batter meeting oil; the "né" of Bò Né is the sound of everything meeting iron — a broader, more violent acoustic signature that announces breakfast has arrived and the diner must take cover. The plate\’s thermal decay curve — 280°C at arrival, 150°C when the sizzle fades 5-7 minutes later — is also the meal\’s PACING CLOCK: steak first (while Maillard is still active), eggs second (before the yolk sets), vegetables third (still caramelizing), toast last (peak fat absorption). And when the yolk breaks across the plate and the lecithin spontaneously emulsifies the butter, steak fat, and Maillard juices into a golden hollandaise-without-a-name, you understand why Đà Nẵng chose this as its morning meal — because no other dish starts the day with quite this much physics, chemistry, and the instruction to lean back.`
};

export default function BoNeDaNangPage() {
  return <RecipeLayout recipe={recipe} />;
}
