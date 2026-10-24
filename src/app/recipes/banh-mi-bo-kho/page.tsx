'use client';

import RecipeLayout from '../_components/RecipeLayout';

const recipeData = {
  title: "Bánh Mì Bò Kho",
  subtitle: "Saigon Beef Stew with French Bread — Where Pot-au-Feu Became Vietnamese",
  heroImage: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=1200",
  prepTime: "30 min",
  cookTime: "2 hrs 30 min",
  servings: "6",
  difficulty: "Intermediate" as const,
  region: "Southern" as const,
  province: "Sài Gòn",

  introduction: `Bò kho is the dish that proves colonial cuisine is not about submission — it is about capture and transformation. The French brought pot-au-feu to Indochina: beef simmered with root vegetables in a clear, delicate broth. Vietnam looked at it, understood its structure, and rebuilt it from the inside out — replacing carrots with carrots (keeping ONE element as camouflage), replacing the clear broth with a lemongrass-annatto-star-anise-coconut thunderstorm, and replacing the dinner plate with a torn baguette dipped directly into the bowl.

The result shares exactly one ingredient with pot-au-feu (beef), one vegetable (carrots), and one serving vessel (French bread). Everything else — the spice architecture, the braising liquid, the colour, the eating method — is purely Vietnamese. This is not fusion. This is culinary annexation.

What makes bò kho scientifically fascinating is its spice layering strategy. Most Western stews add spices at one point (the beginning) and let them simmer. Bò kho adds spices at THREE distinct points — dry spice bloom in oil (beginning), lemongrass in the braise (middle), and fresh herbs at service (end) — creating temporal flavour architecture where early-added compounds have been thermally transformed into deep, complex molecules, while late-added compounds retain their raw, bright volatiles. You taste three versions of "spiced" simultaneously: roasted spice, braised spice, and fresh spice.

The bread is not a side dish. It is the extraction tool — torn, dipped, used to soak up the brick-red braising liquid that would otherwise remain in the bowl. A spoon retrieves the solids. The bread retrieves the liquid. Together, they ensure zero waste of the most labour-intensive component: the broth itself.`,

  ingredients: [
    {
      group: "Beef & Marinade",
      items: [
        "1kg beef chuck or shin — cut into 4cm cubes",
        "2 stalks lemongrass — white part only, bruised and cut into 5cm pieces",
        "3 tablespoons fish sauce",
        "1 tablespoon soy sauce",
        "1 tablespoon curry powder (Vietnamese or Madras)",
        "1 teaspoon Chinese five-spice powder (ngũ vị hương)",
        "1 tablespoon annatto oil (dầu điều) or annatto seeds in oil",
        "1 tablespoon sugar",
        "1 teaspoon freshly ground black pepper",
        "Marinate minimum 30 minutes, overnight ideal"
      ]
    },
    {
      group: "Aromatics & Spice Bloom",
      items: [
        "3 tablespoons cooking oil",
        "5 shallots — thinly sliced",
        "6 cloves garlic — smashed",
        "2 tablespoons tomato paste",
        "2 star anise",
        "1 cinnamon stick (5cm)",
        "3 bay leaves",
        "1 tablespoon annatto oil (additional, for colour)"
      ]
    },
    {
      group: "Braising Liquid",
      items: [
        "400ml coconut water (nước dừa tươi)",
        "800ml beef stock or water",
        "2 tablespoons fish sauce (additional)",
        "1 tablespoon rock sugar or palm sugar"
      ]
    },
    {
      group: "Vegetables",
      items: [
        "3 large carrots — roll-cut into 3cm chunks",
        "2 medium potatoes — optional, peeled, cut into 3cm cubes (Saigon street style)",
        "1 large daikon radish — optional, cut into 3cm chunks (Huế variation)"
      ]
    },
    {
      group: "Serving",
      items: [
        "2-3 bánh mì loaves — warmed, torn into pieces for dipping",
        "Fresh herbs: Thai basil (húng quế), saw-tooth coriander (ngò gai), bean sprouts",
        "Lime wedges",
        "Bird's eye chilies — sliced",
        "Hoisin sauce — optional, for dipping bread"
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: "Marinate the Beef — Spice Penetration Kinetics",
      detail: `Combine beef cubes with lemongrass, fish sauce, soy sauce, curry powder, five-spice powder, annatto oil, sugar, and black pepper. Mix thoroughly, ensuring every surface is coated. Cover and refrigerate — 30 minutes minimum, overnight ideal.

THE MARINADE PERFORMS THREE FUNCTIONS SIMULTANEOUSLY:

FUNCTION 1 — SALT PENETRATION:
Fish sauce (3% NaCl) + soy sauce (18% NaCl) create a combined salt concentration that drives diffusion into the beef via osmotic gradient. Salt penetration rate in raw beef: ~1mm per hour at 4°C (refrigerator), ~2mm per hour at 22°C (room temperature). For 4cm cubes, full centre-penetration requires ~20 hours at 4°C — which is why overnight is ideal but 30 minutes still seasons the outer 1mm (the part that contacts the pan first during searing).

Salt does more than season: at 1-2% concentration within muscle tissue, NaCl dissolves myosin filaments, which then unfold and form a gel network during cooking. This gel TRAPS MOISTURE within the meat. Marinated beef retains 10-15% more moisture during braising than unmarinated beef — the difference between juicy and dry.

FUNCTION 2 — SPICE PRE-INFUSION:
Curry powder and five-spice contain fat-soluble compounds (curcumin, cinnamaldehyde, eugenol, anethole) that dissolve in the annatto oil coating each cube. These compounds need TIME to partition from the oil phase into the meat's intramuscular fat. 30 minutes = surface absorption only. Overnight = penetration into fat marbling = spice flavour IN the meat, not just ON it.

FUNCTION 3 — SUGAR + AMINO ACID PRIMING:
Sugar (sucrose) + free amino acids from fish sauce are now in direct contact with the meat surface. When this surface hits the hot pan in Step 2, these pre-positioned reactants undergo Maillard reaction FASTER and at LOWER TEMPERATURE than unsugared/unaminated meat. The marinade is pre-loading the chemical fuel for browning.

LEMONGRASS BRUISING — WHY:
Bruising (smashing with the flat of a knife) ruptures the fibrous cells of the lemongrass stalk, releasing the essential oil from internal oil glands. Un-bruised lemongrass releases its oil 5-10× slower because the waxy outer layer is a diffusion barrier. Bruised lemongrass in a marinade is like opening a bottle vs trying to smell through the cork.`,
      tip: "Don't skip the annatto oil in the marinade — it's not just colour. Bixin (the annatto carotenoid) is fat-soluble and bonds to beef proteins during marination, creating a permanent orange-red stain that SURVIVES braising. Without it, the curry powder's turmeric provides yellow (not red), and the stew looks like Indian curry rather than Vietnamese bò kho."
    },
    {
      step: 2,
      title: "Sear the Beef — Maillard Crust Architecture",
      detail: `Remove beef from marinade. RESERVE the marinade liquid — do not discard. Pat beef surfaces dry with paper towels.

Heat 2 tablespoons oil in a heavy-bottomed pot (Dutch oven ideal) over HIGH heat until shimmering. Sear beef in 2-3 batches — single layer, no crowding, 2-3 minutes per face until deeply browned on at least two sides.

Remove seared beef. Set aside.

WHY DRY THE SURFACE — THE MOISTURE BARRIER:
Water boils at 100°C. Maillard reaction begins at 140°C. If the meat surface is wet, the water must FIRST evaporate (absorbing heat energy as latent heat of vaporisation — 2,260 kJ/kg) before the surface can reach Maillard temperature. Wet surfaces steam instead of searing: you hear a sad "ssss" instead of a confident "CRACK."

Patting dry removes surface moisture, allowing the pan's thermal energy to heat the meat surface directly to 140°C+ within seconds. The marinade's pre-loaded sugars and amino acids then undergo rapid Maillard reaction, creating 500+ flavour compounds in the crust.

WHY BATCHES — THE CROWDING DISASTER:
Each kg of beef releases approximately 100-150ml of liquid during the first 2 minutes of high-heat cooking (purge: water + dissolved myoglobin + denatured albumin). If the pan contains too many cubes:
→ Total purge volume exceeds the pan's evaporation capacity
→ The pan temperature drops from 200°C to 100°C (boiling point of purge liquid)
→ The beef BOILS in its own juice instead of searing
→ Maillard reaction cannot initiate below 140°C → grey, steamed beef with ZERO crust

Two batches of 500g each: purge volume = 50-75ml per batch → pan evaporates this within 30 seconds → surface stays at Maillard temperature → brown crust forms.

This is the single most common mistake in stew-making worldwide. The fix is always the same: fewer pieces, higher heat, more patience.`,
      tip: "Flip each cube only ONCE per face. Every flip drops the surface temperature by 30-40°C, resetting the Maillard clock. Two flips = one uninterrupted browning cycle per face = maximum crust. Constant flipping = maximum time for minimum crust."
    },
    {
      step: 3,
      title: "Spice Bloom — Fat-Soluble Extraction",
      detail: `In the same pot (with the fond still on the bottom), reduce heat to medium. Add 1 tablespoon oil. Add star anise, cinnamon stick, and bay leaves. Stir in the oil for 60-90 seconds until intensely fragrant.

Add sliced shallots. Cook 3-4 minutes until golden. Add smashed garlic. Cook 30 seconds.

Add tomato paste and additional annatto oil. Stir constantly for 2 minutes — the paste should darken from bright red to brick-brown.

THE SPICE BLOOM — WHY OIL, NOT WATER:
Star anise, cinnamon, and bay leaf contain their key flavour compounds in different molecular forms:

STAR ANISE: Anethole (90% of essential oil) — anise/liquorice flavour. Log P = 2.4 (moderately fat-soluble). In oil: dissolves and distributes rapidly. In water: floats on surface, largely unextracted.

CINNAMON: Cinnamaldehyde (65-80% of essential oil) — warm, spicy-sweet. Log P = 1.9. In oil: dissolves readily at 120°C+. In water: partially soluble but thermally unstable → degrades to cinnamic acid (sour, less aromatic) within 30 minutes of boiling.

BAY LEAF: 1,8-Cineole (eucalyptol, 40-50% of essential oil) — cooling, camphoraceous. Log P = 2.5. Fat-soluble. In water: practically insoluble → bay leaves in water-based braises release only 10-15% of their aromatic potential.

The bloom extracts these compounds into the oil phase BEFORE water is added. Once extracted, they remain dissolved in the oil droplets dispersed throughout the braise — surviving the full 2.5-hour cooking time rather than degrading in water.

TOMATO PASTE — THE GLUTAMATE BRIDGE:
Tomato paste contains 150-250mg/100g free glutamate — more than fresh tomatoes (40-60mg) because concentration during paste-making removes water while retaining amino acids. Cooking tomato paste in oil for 2 minutes at medium heat triggers a SPECIFIC Maillard reaction between glutamate and the paste's reducing sugars → producing pyrazines (nutty, roasted) that are unique to cooked tomato paste and CANNOT form in water.

The paste also provides lycopene (red carotenoid, fat-soluble, thermally stable) that adds red colour depth alongside the annatto's bixin. Two red pigments from different sources = deeper, more complex red than either alone.

FOND RECOVERY: The brown crust stuck to the pot bottom (fond) from Step 2 is concentrated Maillard product. The shallots' released moisture dissolves (deglazes) this fond, incorporating it into the base. This is the same principle as deglazing in French cuisine — the technique crossed cultures along with the dish.`,
      tip: "If the tomato paste burns (turns black instead of brick-brown), the heat was too high. Black = pyrolysis (destruction) not Maillard (construction). Start over with fresh paste at lower heat. There is no fixing burnt tomato paste — the bitter compounds are permanent."
    },
    {
      step: 4,
      title: "Build the Braise — Coconut Water as Tenderising Agent",
      detail: `Return seared beef to the pot. Pour in the RESERVED MARINADE LIQUID.

Add coconut water and beef stock. The liquid should JUST cover the beef — not submerge it by 3cm (too dilute) and not leave cubes exposed (uneven cooking).

Add additional fish sauce and rock sugar. Bring to a boil over high heat, then IMMEDIATELY reduce to the lowest possible simmer. Cover with lid slightly ajar (1-2cm gap).

Braise for 2-2.5 hours. Check every 30 minutes — adjust liquid level if needed (add hot water if too low).

COCONUT WATER — THE TENDERISING ACCELERATOR:
Coconut water contains approximately 250mg/L potassium — the highest potassium concentration of any common cooking liquid (compare: beef stock ~50mg/L, plain water ~0mg/L).

Potassium ions (K⁺) accelerate collagen denaturation in beef by a mechanism first identified in this recipe's Quảng Trị ancestor (bún bò giò heo):
→ K⁺ ions displace calcium ions (Ca²⁺) from the collagen triple helix stabilisation sites
→ Ca²⁺ cross-links between collagen chains are weakened
→ The collagen unwinds (denatures) at a LOWER TEMPERATURE and FASTER RATE than in pure water
→ Net effect: collagen → gelatin conversion occurs ~20-30% faster in coconut water braise vs water-only braise

For a 2.5-hour braise, this means the same tenderness achieved at hour 3 in water is reached at hour 2-2.5 in coconut water. This is not trivial — it's 30-60 minutes saved on a street vendor's gas bill.

Coconut water also contributes:
→ Natural sugars (2-3% glucose + fructose) → Maillard products during long braise → deeper broth colour
→ Slight acidity (pH 5.0-5.5) → maintains an environment where collagen denaturation is favoured over muscle fibre tightening
→ Lauric acid traces → subtle sweetness and body

COCONUT WATER ≠ COCONUT MILK:
Coconut water (inside the coconut, clear, thin) provides the potassium + sugar without fat. Coconut milk (pressed from flesh, white, fatty) adds fat but minimal potassium. Bò kho uses WATER, not milk — the braise should be clean and translucent (like consommé with colour), not creamy-opaque.

LID AJAR — THE REDUCTION EQUATION:
Fully closed: zero evaporation → broth stays thin, flavours diluted, you end with MORE liquid than you started.
Fully open: maximum evaporation → broth concentrates but may drop below the beef level → top cubes dry out and toughen.
1-2cm gap: controlled evaporation of ~100-150ml/hour → broth concentrates slowly → by hour 2, the volume has reduced by 20-25% → intensified flavour without exposed beef.`,
      tip: "Use YOUNG coconut water (nước dừa tươi) if possible, not packaged coconut water (which often contains added sugar and preservatives). Young coconut water has higher potassium (300+ mg/L vs packaged 200mg/L) and zero additives. If unavailable, packaged unsweetened coconut water works — just reduce the added sugar by half."
    },
    {
      step: 5,
      title: "Add Vegetables — Differential Timing",
      detail: `After 1.5 hours of braising (beef is tender but not falling apart):

Add carrots. Continue braising 30 minutes.

If using potatoes: add 15 minutes AFTER carrots (total 15 minutes cooking). If using daikon: add at the SAME TIME as carrots (30 minutes total — daikon is denser).

Total time with vegetables: beef 2-2.5 hours, carrots 30 minutes, potatoes 15 minutes.

DIFFERENTIAL TIMING — WHY NOT ADD EVERYTHING TOGETHER:
Each vegetable has a different optimal cooking time based on its CELL WALL COMPOSITION:

CARROTS:
→ Cell walls: high pectin (1.5-2%), moderate cellulose, thick-walled cells
→ Pectin softening begins at 85°C and requires 25-35 minutes at braise temperature
→ At 30 minutes: pectin sufficiently degraded for "fork-tender" → cell walls yield but don't collapse
→ At 60 minutes: over-softened → mushy, flavour leached into broth, structural collapse
→ Carrots survive 30 minutes because pectin degradation is a SLOW reaction at braise pH (5.5-6.0)

POTATOES:
→ Cell walls: lower pectin than carrots, high starch content (15-20%)
→ Starch gelatinises at 60-70°C (starts immediately in the braise)
→ At 15 minutes: starch fully gelatinised, cells softened → creamy interior, still holds shape
→ At 30 minutes: cells rupture completely → potato disintegrates into the broth → turns the broth starchy and cloudy
→ This is why potatoes go in LAST — they cook faster and disintegrate faster than any other vegetable

DAIKON:
→ Cell walls: low pectin, high water content (95%), large thin-walled cells
→ Despite being mostly water, daikon's cell walls are tougher than potato's → requires 30 minutes
→ Bonus: daikon releases ISOTHIOCYANATES during cooking — pungent sulfur compounds that mellow to sweet after 20+ minutes of braising → natural sweetness contribution to the broth

THE CARROT PARADOX — FRENCH SURVIVAL:
Of all the pot-au-feu ingredients, Vietnam kept the carrot. Why? Because the carrot serves THREE functions no Vietnamese vegetable replaces:
→ COLOUR: β-carotene is fat-soluble and thermally stable → orange pigment survives braising, complementing the annatto red → the total colour is "brick-red" (annatto) + "orange" (carrot) = the signature bò kho colour impossible to achieve with annatto alone
→ SWEETNESS: Carrots contain 4-5% free sugars (sucrose dominant) → natural sweetener that rounds the spice-salt-acid broth
→ TEXTURE: Braised carrot has a unique soft-but-structured quality (pectin gel, not starch gel) that no Vietnamese root vegetable provides at the same cooking time

The Vietnamese kitchen kept the carrot not out of deference to France but because it genuinely has no Vietnamese substitute at this intersection of colour + sweetness + texture.`,
      tip: "Cut carrots using the ROLL CUT (oblique cut): cut diagonally, rotate 90°, cut again. This creates irregular pieces with MAXIMUM surface area — each piece has two angled faces that absorb more braising liquid than straight-cut cubes. More absorption = more flavour in each carrot bite."
    },
    {
      step: 6,
      title: "Final Seasoning & The Bread Protocol",
      detail: `Taste the broth. Adjust:
→ Not rich enough? → 1 tablespoon fish sauce
→ Not sweet enough? → 1 teaspoon sugar
→ Not aromatic enough? → this is rare, but a pinch of five-spice added NOW (at service) provides fresh aromatic lift that 2 hours of braising has cooked out of the original spice bloom
→ Colour too pale? → 1 teaspoon annatto oil stirred in at the end

Remove star anise, cinnamon stick, bay leaves, and lemongrass pieces. These have given everything — leaving them in risks bitterness (star anise and cinnamon release tannins after 3+ hours).

Ladle into deep bowls. Top with torn Thai basil, saw-tooth coriander, bean sprouts, lime wedge, and sliced chilies.

Serve with warmed bánh mì on the side — torn, not sliced.

THE BREAD PROTOCOL — TORN, NOT SLICED:
Tearing bread creates an IRREGULAR SURFACE — peaks, craters, exposed crumb — that traps braising liquid by capillary action. A smooth knife-cut surface is flat, and liquid runs off like water on a windshield.

The bread's role in bò kho:
→ EXTRACTION TOOL: Torn bread dipped into the bowl absorbs 3-5ml of braising liquid per dip (measured by weight differential). Across a meal, the bread extracts 50-80ml of broth — the most flavour-dense component — that would otherwise remain in the bowl.
→ TEXTURE CONTRAST: Warm, crispy crust + soft, broth-soaked crumb = two textures in one bite. The crust's Maillard products (from baking at 220°C+) add roasted flavour notes absent from the stew itself.
→ THERMAL BUFFER: Bread at room temperature (22°C) against broth at 85°C+ creates a temperature gradient. The bread cools the absorbed broth to ~50°C by the time it reaches your mouth — the optimal tasting temperature where flavour perception is maximised (too hot suppresses taste bud sensitivity, too cool reduces volatile release).

BÁNH MÌ CRUST — THE FRENCH-VIETNAMESE BREAD DIFFERENCE:
Vietnamese bánh mì uses a small amount of rice flour (5-10%) blended with wheat flour. This creates:
→ THINNER, CRISPIER CRUST: Rice flour has no gluten → the crust can't stretch as much during oven spring → it shatters rather than bends
→ LIGHTER CRUMB: Rice starch gelatinises differently from wheat starch → more irregular air pockets → airier interior that absorbs liquid faster
→ FASTER STALING: The rice starch retrogrades faster than pure wheat → bánh mì goes stale within 4-6 hours → which is why it's baked fresh multiple times daily in Saigon. This "flaw" is actually a feature for bò kho: slightly stale bread (2-3 hours old) absorbs MORE liquid than fresh bread because the retrograded starch matrix has opened up more capillary channels.

THREE TEMPORAL SPICE LAYERS AT SERVICE:
Layer 1 — BLOOM SPICES (added hour 0): Star anise anethole, cinnamon cinnamaldehyde → thermally transformed over 2.5 hours into deeper, polymerised forms. These taste "roasted, dark, complex."
Layer 2 — BRAISE SPICES (added hour 0): Lemongrass citral, curry powder turmeric → partially degraded, creating breakdown products. These taste "warm, round, integrated."
Layer 3 — FRESH HERBS (added minute 0 at service): Thai basil estragole, saw-tooth coriander dodecanal → completely raw, maximum volatile intensity. These taste "bright, sharp, aromatic."

All three layers hit your palate simultaneously = temporal depth in a single spoonful.`,
      tip: "Bò kho tastes BETTER on day 2. Overnight refrigeration allows: (1) fat to solidify on top for easy removal (cleaner broth), (2) starch from any dissolved potato to retrograde and re-gelatinise on reheating (thicker body), (3) spice compounds to continue partitioning into the meat's intramuscular fat (deeper flavour). Reheat gently — rapid boiling breaks the now-tender collagen gel network."
    }
  ],

  proTips: [
    {
      title: "Pot-au-Feu → Bò Kho — The Colonial Transformation Map",
      content: `The transformation from French pot-au-feu to Vietnamese bò kho follows a pattern seen across colonised cuisines — the colonised culture keeps the STRUCTURE and replaces the CONTENT:

POT-AU-FEU → BÒ KHO:
→ Beef chuck → KEPT (same cut, same braising logic — collagen-rich for long cooking)
→ Carrots → KEPT (same role — sweetness, colour, texture)
→ Turnips, leeks, celery → REPLACED by lemongrass, star anise, cinnamon (Vietnamese aromatics)
→ Clear broth → REPLACED by annatto-red, spice-heavy braising liquid
→ Onion piqué (clove-studded onion) → EVOLVED into direct spice bloom in oil (more efficient extraction)
→ French mustard (dipping) → REPLACED by hoisin sauce + fresh herbs
→ Boiled potatoes (side) → MOVED INTO the stew (Saigon variation)
→ French bread (side) → KEPT, but evolved from baguette to bánh mì (rice flour hybrid)
→ Dinner plate + utensils → REPLACED by street bowl + chopsticks + torn bread

The structural elements preserved from pot-au-feu:
✓ Tough cut + long braise = tender meat
✓ Aromatic vegetables cooked in the broth
✓ Bread served alongside for soaking
✓ Root vegetables for sweetness and body

The content elements that make it Vietnamese:
✓ Annatto for colour (replaces saffron's role in bouillabaisse)
✓ Lemongrass + star anise + cinnamon (replaces bouquet garni)
✓ Fish sauce (replaces salt as the primary seasoning)
✓ Coconut water (replaces wine as the braising liquid acid/tenderiser)
✓ Eaten for BREAKFAST on the street (replaces dinner at the table)

The pattern: coloniser provides technique, colonised provides flavour. The dish that results belongs to neither and both.`
    },
    {
      title: "Annatto — The Red That Isn't Chili",
      content: `Bò kho's brick-red colour comes primarily from annatto (hạt điều), not from chili. This is a crucial distinction because annatto provides COLOUR WITHOUT HEAT — allowing the dish to be deeply coloured (visually suggesting spiciness) while remaining accessible to children and spice-averse eaters.

Annatto seeds (Bixa orellana) contain two carotenoid pigments:
→ BIXIN (80% of total pigment): Fat-soluble, red-orange, thermally stable to 180°C. When dissolved in oil, bixin coats proteins and starch, creating a permanent stain. Bixin in braising liquid colours the BROTH; bixin in the marinade colours the MEAT.
→ NORBIXIN (20%): Water-soluble derivative of bixin, yellow-orange. Norbixin colours the AQUEOUS phase of the braise — the clear liquid between oil droplets.

Together, bixin (in oil) + norbixin (in water) = every phase of the broth is coloured = uniform brick-red from every angle.

ANNATTO VS. OTHER RED SOURCES:
→ Paprika: provides red colour + mild flavour, but fades dramatically after 30+ minutes of braising (capsanthin is thermally less stable than bixin)
→ Tomato paste: provides red + umami, but shifts toward brown-orange during long braising (lycopene is thermally stable but Maillard browning darkens it)
→ Chili: provides red + HEAT — unsuitable when colour without heat is the goal
→ Saffron: provides yellow-gold (not red), prohibitively expensive, wrong colour for bò kho

Annatto is the only common food colouring that provides INTENSE RED that SURVIVES HOURS OF BRAISING without contributing significant flavour or heat. This is why it appears across Vietnamese cuisine wherever red colour is needed: bò kho, bún riêu, bún bò Huế, chả cá, cơm tấm sườn.`
    },
    {
      title: "Five-Spice + Curry Powder — The Double Spice System",
      content: `Bò kho uses BOTH Chinese five-spice and South Asian curry powder. This is not redundancy — it is a deliberate two-system approach:

CHINESE FIVE-SPICE (ngũ vị hương):
→ Components: star anise (anethole), cinnamon (cinnamaldehyde), cloves (eugenol), Sichuan pepper (hydroxy-α-sanshool), fennel (anethole variant)
→ Flavour character: WARM, SWEET, AROMATIC — "dessert spices" that provide depth and roundness
→ Function in bò kho: creates the BASE NOTE — the sustained, deep, warm undertone that lingers after each bite
→ Optimum extraction: in oil at 120-140°C (Step 3 bloom) — these compounds are primarily fat-soluble

CURRY POWDER (cà ri):
→ Vietnamese curry powder contains: turmeric (curcumin), coriander (linalool), cumin (cuminaldehyde), fenugreek (sotolon), chili (capsaicin), sometimes mustard seed
→ Flavour character: EARTHY, PUNGENT, BRIGHT — "savoury spices" that provide forward flavour and colour
→ Function in bò kho: creates the MID NOTE — the immediately recognisable "curry" flavour that hits first
→ Optimum extraction: in the marinade (Step 1) where oil + time dissolve fat-soluble compounds, and in the braise where water extracts water-soluble compounds (fenugreek sotolon is water-soluble)

TOGETHER:
Five-spice provides DEPTH (background, long finish)
Curry powder provides BRIGHTNESS (foreground, immediate impact)

This is the same architectural principle as bass + treble in audio: neither alone sounds complete. Five-spice without curry = too sweet, too "Chinese." Curry without five-spice = too flat, too "Indian." The combination creates a flavour that is recognisably NEITHER — it is Vietnamese.

The double system also reflects bò kho's dual heritage: Chinese spice traditions (via Vietnam's Hoa Chinese community) + South Asian spice traditions (via Indian merchants in Saigon's Chợ Lớn) + French braising technique = triangulated cuisine.`
    },
    {
      title: "The Breakfast Street Cart — Bò Kho at 6 AM",
      content: `In Saigon, bò kho is BREAKFAST. Not lunch, not dinner — breakfast. Vendors start their fires at 3-4 AM, the stew having braised through the night on ember-low heat. By 6 AM, the stew has had 8-10 hours of braising — collagen fully converted, spice compounds fully integrated, broth fully concentrated.

The breakfast context shapes the dish:

THERMAL WAKE-UP: At 6 AM, body temperature is at its circadian minimum (~36.2°C, having dropped from 36.8°C during the night). A bowl of hot bò kho (85°C broth) provides rapid core warming — this is physiologically experienced as "waking up." The spice compounds (cinnamaldehyde, anethole) are mild thermogenic agents that increase metabolic rate by 3-5% for 2-3 hours — the morning's energy boost.

CALORIC DENSITY: 4cm beef cubes + bread = 500-600 kcal in one bowl. For manual labourers beginning a 10-hour shift, this caloric density in a single fast meal (15 minutes at the cart) is essential. The protein (40g+) provides sustained satiety through the morning.

THE CART INFRASTRUCTURE:
→ One large pot of stew (made overnight)
→ A charcoal brazier maintaining 85°C simmer
→ A stack of bánh mì loaves (delivered fresh by motorcycle at 5:30 AM from a nearby bakery)
→ A tray of fresh herbs (prepped at 5 AM)
→ Plastic stools, 8-12 (customers sit while eating — this is not grab-and-go)

The cart is a SINGLE-PRODUCT restaurant — no menu, no choices beyond "more chili?" and "with bread or with noodles?" (some carts offer bún or mì alongside bread). This specialisation allows the vendor to perfect ONE dish over years, which is why bò kho from a 20-year cart is always better than bò kho from a restaurant that makes 50 dishes.`
    }
  ],

  nutritionInfo: {
    calories: 520,
    protein: "42g",
    carbs: "35g",
    fat: "22g",
    fiber: "4g"
  },

  tags: ["Street Food", "Beef Stew", "Bánh Mì", "Saigon", "Bò Kho", "French Influence", "Coconut Water", "Star Anise", "Lemongrass", "Breakfast"],

  relatedRecipes: [
    {
      title: "Lemongrass Pork Bánh Mì",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400",
      slug: "banh-mi",
      description: "The other side of bánh mì — stuffed with lemongrass grilled pork"
    },
    {
      title: "Hanoi Beef Pho",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400",
      slug: "hanoi-beef-pho",
      description: "Vietnam's other star anise beef broth — clear where bò kho is red"
    },
    {
      title: "Saigon Broken Rice Plate",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400",
      slug: "com-tam",
      description: "Saigon's other signature breakfast — grilled pork on fractured rice"
    }
  ],

  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Bánh Mì Bò Kho — Saigon Beef Stew with French Bread",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "description": "Vietnamese beef stew braised in coconut water with lemongrass, star anise, cinnamon, and annatto, served with torn bánh mì for dipping. Where French pot-au-feu was captured and rebuilt with Vietnamese spice architecture.",
    "image": "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=1200",
    "prepTime": "PT30M",
    "cookTime": "PT2H30M",
    "totalTime": "PT3H",
    "recipeYield": "6 servings",
    "recipeCategory": "Main Course",
    "recipeCuisine": "Vietnamese",
    "keywords": "bò kho, beef stew, bánh mì, Vietnamese stew, Saigon, street food, lemongrass beef, star anise, coconut water braised, annatto, French bread, Vietnamese breakfast",
    "recipeIngredient": [
      "1kg beef chuck or shin",
      "2 stalks lemongrass",
      "3 tablespoons fish sauce",
      "1 tablespoon curry powder",
      "1 teaspoon five-spice powder",
      "2 tablespoons annatto oil",
      "400ml coconut water",
      "800ml beef stock",
      "2 star anise",
      "1 cinnamon stick",
      "2 tablespoons tomato paste",
      "3 large carrots",
      "2-3 bánh mì loaves",
      "Fresh Thai basil and saw-tooth coriander"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Marinate beef cubes with lemongrass, fish sauce, soy sauce, curry powder, five-spice, annatto oil, sugar and pepper. Rest minimum 30 minutes." },
      { "@type": "HowToStep", "text": "Pat beef dry. Sear in batches over high heat until deeply browned on two sides. Remove and reserve." },
      { "@type": "HowToStep", "text": "In the same pot, bloom star anise, cinnamon and bay leaves in oil. Add shallots, garlic, tomato paste and annatto oil. Cook until brick-brown." },
      { "@type": "HowToStep", "text": "Return beef. Add coconut water, stock, fish sauce and sugar. Bring to boil, then lowest simmer with lid ajar for 1.5 hours." },
      { "@type": "HowToStep", "text": "Add roll-cut carrots, braise 30 minutes more. Add potatoes if using for final 15 minutes." },
      { "@type": "HowToStep", "text": "Adjust seasoning. Serve in deep bowls with fresh herbs, lime, chilies and torn warm bánh mì." }
    ],
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "520 kcal",
      "proteinContent": "42g",
      "carbohydrateContent": "35g",
      "fatContent": "22g",
      "fiberContent": "4g"
    }
  }
};

export default function BanhMiBoKhoPage() {
  return <RecipeLayout recipe={recipeData} />;
}