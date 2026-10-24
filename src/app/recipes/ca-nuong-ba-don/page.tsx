'use client';

import RecipeLayout from '../_components/RecipeLayout';

const recipeData = {
  title: "Cá Nướng Ba Đồn",
  subtitle: "Ba Đồn Charcoal-Grilled Fish in Wild Betel Leaf with Scallion Oil",
  heroImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
  prepTime: "40 min",
  cookTime: "20 min",
  servings: "4",
  difficulty: "Intermediate" as const,
  region: "Central" as const,
  province: "Quảng Bình",

  introduction: `Ba Đồn sits where the Gianh River—the ancient border between Đàng Trong and Đàng Ngoài—meets the South China Sea. This geographic collision creates a brackish estuary where freshwater cá trắm and saltwater cá nục share the same waters, and fishermen from both kingdoms once traded catch across the political divide.

Cá nướng Ba Đồn is not simply grilled fish. It is a three-layer thermal reactor: lá lốt (wild betel leaf) wraps fish in an aromatic micro-steam chamber, charcoal provides radiant infrared heat from below, and mỡ hành (scallion oil) delivers a final thermal shock from above. The result is fish that is simultaneously smoked, steamed, and seared—three cooking methods executed in a single vessel made of nothing more than a leaf.

What makes this dish scientifically remarkable is lá lốt itself. A member of the Piper genus—the same family as black pepper—lá lốt contains hydroxychavicol and β-caryophyllene, compounds that do not merely flavour the fish but actively protect it: hydroxychavicol is a potent antioxidant that slows lipid oxidation during grilling, meaning the leaf literally prevents the fish from developing off-flavours while adding its own peppery, slightly anise-like perfume. The leaf is medicine, seasoning, and cooking vessel in a single botanical solution.`,

  ingredients: [
    {
      group: "Fish & Marinade",
      items: [
        "800g whole freshwater fish (snakehead, carp, or tilapia) — cleaned, scored",
        "3 tablespoons fish sauce (nước mắm)",
        "1 tablespoon honey or palm sugar",
        "2 teaspoons ground turmeric (nghệ)",
        "1 tablespoon minced lemongrass (sả) — white part only",
        "3 cloves garlic — minced",
        "1 teaspoon freshly ground black pepper",
        "1 tablespoon cooking oil",
        "½ teaspoon salt"
      ]
    },
    {
      group: "Lá Lốt Wrapping",
      items: [
        "30-40 fresh lá lốt leaves (wild betel / Piper lolot) — washed, stems trimmed",
        "Kitchen twine or bamboo skewers for securing"
      ]
    },
    {
      group: "Mỡ Hành (Scallion Oil)",
      items: [
        "6-8 scallions (hành lá) — finely sliced, white and green separated",
        "80ml neutral oil (vegetable or peanut)",
        "½ teaspoon salt",
        "½ teaspoon sugar",
        "1 tablespoon fish sauce"
      ]
    },
    {
      group: "Dipping Sauce & Accompaniments",
      items: [
        "3 tablespoons fish sauce",
        "2 tablespoons lime juice",
        "1 tablespoon sugar",
        "2 tablespoons warm water",
        "2 bird's eye chilies — sliced",
        "2 cloves garlic — minced",
        "Fresh herbs: rau răm (Vietnamese coriander), tía tô (perilla), kinh giới (lemon balm)",
        "Rice paper or bánh tráng nướng (grilled rice crackers)",
        "Steamed rice"
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: "Score the Fish — Heat Transfer Engineering",
      detail: `Score both sides of the fish with diagonal cuts 2cm apart, cutting to the bone (approximately 5-7mm deep). Rotate 45° and cut again to create a diamond crosshatch pattern.

SCIENCE — WHY CROSSHATCH, NOT PARALLEL:
Each cut serves three thermal functions: (1) increases surface area for marinade penetration by ~40%, (2) creates channels for steam escape during grilling — preventing the skin from ballooning and separating from flesh, (3) allows heat to penetrate to the bone via conduction shortcuts rather than relying solely on surface-to-centre thermal diffusion.

The diamond pattern specifically matters because parallel cuts create "flaps" that curl during cooking (differential contraction between skin and flesh). Diamond cuts create small "islands" that are anchored on all four sides, maintaining structural integrity.

DEPTH CALIBRATION: Cut until you feel the knife contact bone, then stop. Too shallow (3mm) = marinade stays surface-level. Too deep (through the bone) = fish falls apart on the grill. The bone itself acts as a thermal highway — it conducts heat faster than flesh (bone thermal conductivity ~0.6 W/m·K vs muscle ~0.45 W/m·K), so cutting TO the bone means the bone heats from both inside and outside simultaneously.`,
      tip: "Pat the fish completely dry with paper towels before scoring. Wet surfaces dilute the marinade and create a barrier against flavour penetration. Dry protein = better Maillard reaction = better crust."
    },
    {
      step: 2,
      title: "Build the Marinade — Turmeric-Lemongrass Barrier System",
      detail: `Combine fish sauce, honey, ground turmeric, minced lemongrass, garlic, black pepper, oil, and salt. Mix until the honey dissolves completely.

Apply the marinade into every score mark using your fingers, pressing firmly so the paste fills each channel completely. Coat the cavity generously. Rest 30 minutes at room temperature (NOT refrigerator).

THE TURMERIC FUNCTION — BEYOND COLOUR:
Turmeric contains curcumin (2-5% by weight), which serves three roles:
→ COLOUR: Curcumin binds to fish protein (albumin) at pH 6-7, creating a vivid golden-orange that intensifies during grilling (curcumin is thermally stable up to 180°C)
→ ANTIOXIDANT: Curcumin inhibits lipid peroxidation — it literally prevents the fish oils (omega-3 DHA/EPA) from breaking down into off-flavour aldehydes during high-heat grilling. This is why turmeric-marinated fish tastes "cleaner" than unmarinated
→ ANTIMICROBIAL: Curcumin disrupts bacterial cell membranes, acting as a natural preservative during the 30-minute room-temperature marination

WHY ROOM TEMPERATURE:
Cold fish (4°C from fridge) placed on a hot grill creates a massive thermal gradient: the surface overcooks to 85°C+ while the centre remains at 20°C. Room-temperature fish (22-25°C) reduces this gradient by 60%, giving you even doneness throughout.

LEMONGRASS WHITE PART ONLY: The white base contains 70-80% of the essential oil (citral + myrcene + geraniol). The green tops are mostly cellulose fibre with negligible aromatic contribution.`,
      tip: "If using whole turmeric root instead of powder: grate it on a microplane. Fresh turmeric contains turmerone oil (absent in powder) that adds an earthy, ginger-like warmth not found in dried turmeric."
    },
    {
      step: 3,
      title: "Prepare Lá Lốt — The Piper Genus Reactor",
      detail: `Wash lá lốt leaves gently and pat dry. If leaves are large (>8cm), use individually. If small (<5cm), overlap two leaves to create sufficient coverage.

For WHOLE FISH: Arrange leaves shingle-style (overlapping like roof tiles) across a flat surface. Place fish on top. Fold leaves over the fish, wrapping snugly but not too tight. Secure with kitchen twine at 3-4 points.

For FISH PORTIONS: Wrap each piece individually in 2-3 leaves, securing with a toothpick or bamboo skewer.

LÁ LỐT — THE PIPER SPECTRUM CONNECTION:
Lá lốt (Piper lolot) belongs to the same genus as:
→ Black pepper (Piper nigrum) — piperine = sharp heat
→ Long pepper (Piper longum) — piperlongumine = slow-building warmth
→ Betel leaf (Piper betle) — chavicol = numbing + sweet
→ Kava (Piper methysticum) — kavalactones = anaesthetic

Lá lốt sits uniquely in this spectrum: it contains hydroxychavicol (antioxidant, 15-20mg/g dry weight) + β-caryophyllene (peppery sesquiterpene, same molecule found in black pepper and cloves) + safrole-adjacent compounds (warm, root-beer-like). This gives lá lốt its signature "peppery but not spicy, warm but not hot" character.

WHEN HEATED TO 150-200°C (grilling temperature), lá lốt releases:
→ β-caryophyllene: woody, peppery — bp 262°C, so it SLOWLY volatilises, creating sustained aroma throughout cooking
→ Eugenol: clove-like — bp 254°C, same slow release pattern
→ Hydroxychavicol: doesn't volatilise (too heavy), stays IN the leaf → continues protecting the fish from oxidation

This is a TIMED-RELEASE AROMATIC SYSTEM: heavy compounds stay and protect, light compounds release and perfume.`,
      tip: "Lá lốt is NOT interchangeable with lá chuối (banana leaf). Banana leaf provides steam barrier but zero aromatic contribution. If lá lốt is unavailable, perilla (tía tô) leaves are the closest aromatic substitute — same peppery-anise profile — though they're more fragile and require gentler handling."
    },
    {
      step: 4,
      title: "Prepare Charcoal — Radiant Heat vs. Convective Heat",
      detail: `Light charcoal and allow to burn until covered with white ash (30-40 minutes). Spread coals evenly. Position grill grate 10-12cm above the coals.

TARGET: Coals should glow deep orange-red with complete ash coverage. NO visible flames.

THE PHYSICS OF CHARCOAL GRILLING:
Charcoal emits heat via TWO mechanisms:
→ RADIATION (infrared): Electromagnetic waves travel directly from coal to fish surface. This is the dominant mechanism (60-70% of total heat transfer at grill temperatures). Infrared penetrates 1-2mm into the fish surface, creating intense surface heating. This is what creates the char-grilled crust.
→ CONVECTION: Hot air rises from coals and flows around the fish. This is gentler, accounting for 30-40% of heat. Convection cooks the interior.

WHY NO FLAMES ALLOWED:
Visible flames = incomplete combustion = production of polycyclic aromatic hydrocarbons (PAHs) and volatile organic compounds that create bitter, acrid flavours. White-ash coals = complete combustion = clean radiant heat with minimal smoke compounds. The ideal grilling temperature at grate level is 230-260°C for fish (lower than meat's 280-320°C because fish proteins denature at lower temperatures).

THE 10-12CM HEIGHT:
This distance follows the inverse-square law of radiation: doubling distance reduces radiant intensity to 1/4. At 10cm, you get intense surface Maillard reaction (surface reaches 160°C+) without incinerating the lá lốt wrapper. Closer = burnt leaves before fish cooks. Further = no char development.

GAS GRILL COMPROMISE: If using gas, preheat to maximum, then reduce to medium-high. Place a cast-iron plate over half the grill to create a radiant heat source (metal radiates IR more efficiently than gas flames). The lá lốt wrapper makes gas grilling more forgiving because the leaf buffers direct convective heat.`,
      tip: "The 'hand test': hold your palm 12cm above the grate. If you must pull away after 3-4 seconds = correct temperature (~250°C). 2 seconds = too hot. 5-6 seconds = too cool. Your pain threshold is a surprisingly accurate thermometer calibrated to protein cooking temperatures."
    },
    {
      step: 5,
      title: "Grill the Fish — The Three-Layer Thermal Reactor",
      detail: `Oil the grill grate generously. Place the wrapped fish on the grate, presentation side down first.

GRILLING TIMELINE (for 800g whole fish):
→ Minutes 0-7: First side, lid OFF. The lá lốt in direct contact with the grate will char and release aromatic compounds. Steam builds inside the leaf wrapper. DO NOT MOVE the fish.
→ Minute 7-8: Carefully flip using two spatulas (one supporting the head, one the tail). The wrapper should show char marks but remain intact.
→ Minutes 8-15: Second side, lid OFF. Internal temperature rising through the critical 55-65°C zone.
→ Minutes 15-18: If using a grill lid, close it now for 3 minutes to create an oven effect (convection + radiation) to finish the thickest part near the backbone.
→ Target: Internal temperature 63°C at the thickest point (measured through the wrapper with an instant-read thermometer through a score mark).

THE THREE-LAYER REACTOR EXPLAINED:
Layer 1 — CHARCOAL (below): Provides radiant infrared heat. Creates Maillard compounds on the LEAF surface (yes, the leaf itself undergoes Maillard reaction, contributing toasted flavour compounds).
Layer 2 — LÁ LỐT WRAPPER (middle): Creates a sealed micro-environment. Fish releases moisture as steam, which is trapped by the leaf. This steam: (a) cooks the fish via moist-heat convection at exactly 100°C — preventing the flesh from exceeding this temperature even while the leaf exterior reaches 200°C+, (b) extracts volatile aromatics FROM the leaf INTO the fish — β-caryophyllene and eugenol are steam-distilled onto the fish surface, (c) hydroxychavicol remains in the leaf, continuously neutralising lipid oxidation products.
Layer 3 — MỠ HÀNH (above, added after grilling): Hot scallion oil delivered onto just-opened fish provides a final thermal burst that: (a) shatters residual surface moisture, (b) carries oil-soluble compounds (allyl sulfides from scallion) into the score marks, (c) creates a glossy, aromatic coating.

WHY FISH PROTEIN IS DIFFERENT:
Fish collagen contains less hydroxyproline than mammalian collagen (5-10% vs 12-14%), which means:
→ Fish collagen denatures at 25-30°C (vs 65°C for beef/pork)
→ Fish is already "tender" before you start cooking — the goal is NOT tenderisation (as with meat) but TEXTURE SETTING through myosin coagulation (40-50°C) and actin denaturation (65-70°C)
→ The danger zone is OVERCOOKING: above 70°C, fish proteins contract aggressively, squeezing out moisture → dry, chalky texture
→ Target 63°C gives you fully set myosin (safe, opaque) with minimal actin contraction (still juicy)

DO NOT MOVE DURING FIRST 7 MINUTES: Fish skin proteins need time to coagulate and release from the grill grate. Moving too early tears the skin. The Maillard crust also needs uninterrupted contact to develop. This is the "patience pays" rule of fish grilling.`,
      tip: "If the fish sticks when flipping: slide a thin metal spatula between fish and grate, then use a second spatula on top. If resistance is strong, wait 1-2 more minutes — the fish will release itself once the surface proteins fully coagulate and shrink away from the metal."
    },
    {
      step: 6,
      title: "Make Mỡ Hành — Scallion Oil Thermal Window",
      detail: `While the fish grills, prepare the mỡ hành:

1. Separate scallion whites and greens. Slice whites into 2mm rings, greens into 3-4mm rings.
2. Place the WHITE parts in a heat-proof bowl with salt, sugar, and fish sauce.
3. Heat oil in a small saucepan until it reaches exactly 70-80°C (the oil should shimmer but NOT smoke or ripple actively).
4. Pour the hot oil directly over the scallion whites. You should hear a gentle sizzle, not a violent splatter.
5. Immediately add the GREEN parts. Stir once. The residual heat will wilt them to vivid bright green.

THE 70-80°C THERMAL WINDOW — WHY THIS SPECIFIC RANGE:
Scallion chemistry operates on a razor-thin temperature spectrum:

Below 60°C: Alliin (odourless precursor) is not converted. The scallion tastes raw, sharp, sulfurous — alliinase enzyme is still active, continuously producing irritating thiosulfinates.

60-80°C — THE SWEET SPOT:
→ Alliinase is denatured (enzyme destroyed above 60°C), stopping ALL production of harsh sulfur compounds
→ Existing allicin breaks down into gentle, sweet diallyl sulfides and ajoene
→ Maillard reaction begins between scallion sugars (4-5% fructose + glucose) and amino acids → sweet, caramelised flavour
→ Cell walls soften, releasing intracellular liquid that emulsifies with the oil → creamy texture
→ Chlorophyll in green parts remains intact (degrades above 80°C) → vivid colour preserved

Above 100°C: Sugars caramelise → bitter. Chlorophyll converts to pheophytin → dull olive-brown. Sulfur compounds volatilise completely → all aroma lost to the air instead of staying in the oil.

This is why mỡ hành from street vendors always tastes better than homemade: they've calibrated to this window through decades of muscle memory. The oil should be hot enough to "cook" but not hot enough to "fry."

WHITE BEFORE GREEN: Whites have more alliin (they've been growing underground, accumulating sulfur from soil). They need full thermal exposure to tame the sulfur. Greens are already mild and need only a flash of heat to wilt and release colour.`,
      tip: "Test oil temperature without a thermometer: drop ONE thin scallion ring into the oil. At 70-80°C, it will sizzle gently and the edges will curl slowly (5-8 seconds). At 100°C+, it will splatter and brown immediately. If the ring doesn't sizzle at all, the oil is too cool — heat 30 seconds more."
    },
    {
      step: 7,
      title: "Open & Dress — The Reveal Ceremony",
      detail: `Transfer the grilled wrapped fish to a serving platter. Cut the twine. Partially open the lá lốt wrapper — peel back the top layer of leaves to expose the fish, but leave the bottom layer as a serving base (it's infused with fish juices and charcoal aroma — edible and delicious).

Immediately pour the mỡ hành over the exposed fish, directing it into the score marks. The oil should sizzle on contact with the hot fish surface.

Scatter fresh herbs (rau răm, tía tô, kinh giới) around the platter. Serve with dipping sauce, rice paper, and steamed rice.

THE REVEAL SEQUENCE MATTERS:
Opening the wrapper releases the FIRST aromatic wave — trapped β-caryophyllene, eugenol, and steam-distilled fish volatiles that have been concentrating inside the sealed leaf chamber. This is the "perfume" moment that signals the dish is ready.

Pouring mỡ hành creates the SECOND aromatic wave — hot oil hitting moist fish surface generates instant aerosolisation of the scallion's diallyl sulfides and the fish's surface Maillard compounds. The sizzle sound itself triggers salivation (Pavlovian acoustic-gustatory association).

Fresh herbs provide the THIRD aromatic wave — raw, bright, terpene-rich aromas (rau răm's sesquiterpene aldehydes, tía tô's perillaldehyde, kinh giới's citral) that contrast with the cooked, deep, roasted aromas of the first two waves.

THREE WAVES = TEMPORAL AROMATIC ARCHITECTURE:
Wave 1 (opening) = deep, peppery, smoky — 0-5 seconds
Wave 2 (mỡ hành) = sweet, sulfurous, sizzling — 5-15 seconds
Wave 3 (herbs) = bright, green, citric — continuous during eating

RÂU RĂM — THE FIXED HERB FOR GRILLED FISH:
Rau răm (Vietnamese coriander, Persicaria odorata) contains kesom oil rich in decenal and dodecanal — long-chain aldehydes that specifically complement charred lipid compounds from grilled fish. The pairing is not arbitrary: decenal's carbon chain length (C10) mirrors the chain length of the dominant oxidised lipid fragments from grilled fish fat (C8-C12), creating harmonic resonance in the olfactory system rather than dissonance. This is why rau răm with grilled fish "makes sense" to your nose in a way that, say, mint would not.`,
      tip: "Eat within 5 minutes of opening. The lá lốt wrapper's aromatic compounds continue to volatilise rapidly once exposed to air — the flavour literally flies away. The mỡ hành also begins to separate as it cools (oil and fish sauce de-emulsify below 50°C). This is a dish designed for immediacy."
    },
    {
      step: 8,
      title: "Mix the Dipping Sauce — Acid-Sugar-Salt Triangle",
      detail: `Dissolve sugar in warm water. Add fish sauce, lime juice, minced garlic, and sliced chilies. Stir well. Taste and adjust: the sauce should hit all three points of the triangle simultaneously — no single flavour should dominate.

THE DIPPING SAUCE AS FREQUENCY MODULATOR:
Grilled fish has a dominant flavour "frequency" — umami (glutamate from fish protein breakdown) + smoke (phenolic compounds) + Maillard sweetness. This is a LOW-FREQUENCY signal: deep, rich, sustained.

The dipping sauce provides HIGH-FREQUENCY contrast:
→ Lime acid (citric, pH 2.2) = bright, immediate, cutting — stimulates sour taste receptors in <0.3 seconds
→ Fish sauce umami = AMPLIFIES the fish's own umami rather than competing with it (additive effect: two sources of glutamate > one)
→ Sugar = rounds the acid's sharp attack, creating a smoother onset curve
→ Chili capsaicin = TRPV1 pain signal that forces attention cycling between pain and pleasure, extending the perceived duration of each bite
→ Raw garlic allicin = pungent sulfur "spike" that punctuates the otherwise smooth umami-acid continuum

WITHOUT THE SAUCE: The grilled fish is a beautiful sustained note — satisfying but eventually monotonous (sensory adaptation after 4-5 bites, hedonic decline).

WITH THE SAUCE: Each dip resets the palate by introducing high-frequency contrast, preventing adaptation and maintaining hedonic value throughout the meal. This is why Vietnamese cuisine almost never serves grilled protein without a dipping sauce — the sauce is not condiment but ESSENTIAL COMPONENT of the flavour architecture.

BA ĐỒN VARIATION: Local dipping sauce uses muối ớt xanh (green chili salt: green bird's eye chilies pounded with salt and a squeeze of calamansi). Simpler than nước chấm, but the green chili's capsaicin is delivered with fresh vegetal terpenes (absent in dried red chilies) that harmonise with lá lốt's own terpene profile. If you can get green bird's eye chilies, try this local version.`,
      tip: "The ratio to memorize: 1 fish sauce : 1 lime : 0.5 sugar : 1 water. This creates a balanced nước chấm that works for virtually any grilled protein. Adjust from there: more lime for fatty fish, more sugar for lean fish, more fish sauce for bland fish."
    }
  ],

  proTips: [
    {
      title: "The Gianh River Terroir — Why Ba Đồn Fish Tastes Different",
      content: `Ba Đồn sits at the Gianh River estuary — where freshwater meets saltwater in a 15km brackish zone. Fish living in this zone (cá trắm cỏ, cá diêu hồng, cá rô) undergo osmoregulatory stress: their bodies constantly work to balance internal salt concentration against the fluctuating external environment.

This stress produces two culinary effects:
→ HIGHER FREE AMINO ACID CONTENT: Stressed fish accumulate osmolytes (glycine, alanine, taurine, betaine) in their muscle tissue to maintain cell volume. These are the same amino acids responsible for umami and sweetness — meaning brackish-water fish are naturally MORE flavourful than their purely freshwater or purely saltwater counterparts.
→ FIRMER TEXTURE: Osmoregulatory stress increases muscle protein concentration (the fish's body works harder, building more myofibrillar protein). This gives Ba Đồn fish a denser, meatier texture that holds up to charcoal grilling without falling apart.

This is terroir applied to aquaculture: the specific geography of the Gianh River estuary creates fish with naturally superior flavour and texture, which is why Ba Đồn became famous for grilled fish rather than, say, fish soup (where texture matters less).`
    },
    {
      title: "Lá Lốt — The Edible Reactor Vessel",
      content: `Most wrapping leaves in Vietnamese cuisine serve passive roles: banana leaf (moisture barrier), lotus leaf (aromatic infusion). Lá lốt is unique in playing an ACTIVE chemical role during cooking.

Three active functions:
1. ANTIOXIDANT SHIELD: Hydroxychavicol (15-20mg/g dry weight) scavenges free radicals produced during high-temperature grilling. Without this shield, fish polyunsaturated fatty acids (PUFAs) oxidise into malondialdehyde and 4-hydroxynonenal — compounds that taste rancid and are potentially harmful. Lá lốt reduces these by 40-60% compared to unwrapped grilling.

2. ANTIMICROBIAL ENVELOPE: The same hydroxychavicol disrupts bacterial cell membranes. In pre-refrigeration Ba Đồn, this extended the safe eating window of grilled fish by several hours — a practical necessity for fishermen eating on their boats.

3. FLAVOUR TIME-RELEASE: β-caryophyllene (bp 262°C) and eugenol (bp 254°C) are released GRADUALLY during the 15-18 minute grilling process, unlike marinade spices that burst in the first 3 minutes and then burn. The leaf is a slow-release flavour capsule.

The leaf is completely edible after grilling. The charred portions are particularly valuable — pyrolysis of leaf cellulose creates furanones (caramel-like) and pyrazines (nutty, roasted) that complement the fish's own Maillard products.`
    },
    {
      title: "Mỡ Hành as Lipid-Soluble Flavour Delivery",
      content: `Mỡ hành is not merely a topping — it is a delivery vehicle for lipid-soluble flavour compounds that water-based sauces cannot transport.

Many critical flavour molecules are hydrophobic (fat-soluble, not water-soluble):
→ Curcuminoids from turmeric marinade — poorly soluble in water (11μg/mL), highly soluble in oil (100mg/mL). Mỡ hành dissolves and redistributes the turmeric flavour across the fish surface.
→ β-caryophyllene from lá lốt — completely insoluble in water, miscible with oil. The scallion oil captures and preserves these aromatics instead of letting them evaporate.
→ Maillard compounds from the char crust — many are lipophilic. Oil carries them deeper into the score marks, extending the "grilled" flavour into the fish interior.

The fish sauce in the mỡ hành mixture creates a micro-emulsion: fish sauce (aqueous) + oil + scallion proteins (emulsifier) = stable dispersion where BOTH water-soluble (amino acids, salt) AND oil-soluble (terpenes, sulfides) flavour compounds coexist in a single sauce. This emulsion breaks below 50°C, which is why the mỡ hành MUST be applied to hot fish — the thermal energy maintains emulsion stability during the critical first 2-3 minutes of eating.`
    },
    {
      title: "The Historical Divide — Gianh River as Culinary Border",
      content: `The Gianh River was the border between the Trịnh Lords (Đàng Ngoài, the North) and the Nguyễn Lords (Đàng Trong, the South) from 1570-1786. This 200-year political division created one of Vietnam's sharpest culinary borders.

North of the Gianh: cooking tends toward subtlety — fish is steamed, poached, or lightly fried. Seasoning relies on diluted dipping sauces. Herbs are used sparingly.

South of the Gianh: cooking becomes bolder — grilling over charcoal, aggressive spicing with lemongrass, chili, and turmeric, heavy use of wrapping leaves, robust dipping sauces.

Ba Đồn, sitting ON the border, absorbs both traditions:
→ Northern influence: the fish itself is treated with respect — minimal marinade, no heavy sauces that would mask the natural flavour
→ Southern influence: charcoal grilling, lá lốt wrapping, mỡ hành — bold techniques that ADD flavour layers without obscuring the fish

This is why cá nướng Ba Đồn feels both restrained and vibrant simultaneously — it is literally the product of a 200-year negotiation between two culinary philosophies meeting at a river.`
    }
  ],

  nutritionInfo: {
    calories: 320,
    protein: "38g",
    carbs: "8g",
    fat: "16g",
    fiber: "1g"
  },

  tags: ["Quảng Bình", "Grilled Fish", "Lá Lốt", "Charcoal", "Mỡ Hành", "Central Vietnam", "Ba Đồn", "Gianh River", "Piper Genus"],

  relatedRecipes: [
    {
      title: "Chả Cá Bảo Ninh",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400",
      slug: "cha-ca-bao-ninh",
      description: "Hand-pounded fish cakes from Quảng Bình's coastal village"
    },
    {
      title: "Cháo Canh Quảng Bình",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
      slug: "chao-canh-quang-binh",
      description: "Thick vegetable & rice-slab soup with the anti-cháo principle"
    },
    {
      title: "Bún Bò Giò Heo Quảng Trị",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400",
      slug: "bun-bo-gio-heo-quang-tri",
      description: "The fierce ancestor of Huế's famous bún bò"
    }
  ],

  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Cá Nướng Ba Đồn — Ba Đồn Charcoal-Grilled Fish in Wild Betel Leaf",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "description": "Whole fish marinated in turmeric and lemongrass, wrapped in lá lốt (wild betel leaf), grilled over charcoal, and dressed with sizzling scallion oil. A three-layer thermal reactor from Quảng Bình's Gianh River estuary.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
    "prepTime": "PT40M",
    "cookTime": "PT20M",
    "totalTime": "PT60M",
    "recipeYield": "4 servings",
    "recipeCategory": "Main Course",
    "recipeCuisine": "Vietnamese",
    "keywords": "cá nướng, Ba Đồn, grilled fish, lá lốt, mỡ hành, scallion oil, Quảng Bình, charcoal grilled, wild betel leaf, Vietnamese fish",
    "recipeIngredient": [
      "800g whole freshwater fish (snakehead, carp, or tilapia)",
      "3 tablespoons fish sauce",
      "1 tablespoon honey",
      "2 teaspoons ground turmeric",
      "1 tablespoon minced lemongrass",
      "3 cloves garlic",
      "30-40 fresh lá lốt leaves",
      "6-8 scallions",
      "80ml neutral oil",
      "2 bird's eye chilies",
      "2 tablespoons lime juice",
      "Fresh herbs: rau răm, tía tô, kinh giới"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Score both sides of the fish in a diamond crosshatch pattern, cutting 5-7mm deep to the bone. Pat dry completely." },
      { "@type": "HowToStep", "text": "Mix fish sauce, honey, turmeric, lemongrass, garlic, pepper, oil and salt. Apply marinade into every score mark and cavity. Rest 30 minutes at room temperature." },
      { "@type": "HowToStep", "text": "Wash and dry lá lốt leaves. Wrap the marinated fish in overlapping leaves (shingle-style), securing with kitchen twine." },
      { "@type": "HowToStep", "text": "Prepare charcoal until covered with white ash. Position grill grate 10-12cm above the coals." },
      { "@type": "HowToStep", "text": "Grill the wrapped fish 7-8 minutes per side until internal temperature reaches 63°C. Close lid for final 3 minutes if needed." },
      { "@type": "HowToStep", "text": "Prepare mỡ hành: heat oil to 70-80°C, pour over scallion whites with salt, sugar and fish sauce. Add greens immediately." },
      { "@type": "HowToStep", "text": "Transfer fish to platter, open wrapper partially, pour sizzling mỡ hành over the fish into score marks. Garnish with fresh herbs." },
      { "@type": "HowToStep", "text": "Serve immediately with nước chấm dipping sauce (fish sauce, lime, sugar, water, chili, garlic), rice paper and steamed rice." }
    ],
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "320 kcal",
      "proteinContent": "38g",
      "carbohydrateContent": "8g",
      "fatContent": "16g",
      "fiberContent": "1g"
    }
  }
};

export default function CaNuongBaDonPage() {
  return <RecipeLayout recipe={recipeData} />;
}