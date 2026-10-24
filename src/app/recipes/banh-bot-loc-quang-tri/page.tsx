'use client';

import RecipeLayout from '../_components/RecipeLayout';

const recipeData = {
  title: "Bánh Bột Lọc Quảng Trị",
  subtitle: "Quảng Trị Translucent Tapioca Dumplings with Shrimp & Pork in Banana Leaf",
  heroImage: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=1200",
  prepTime: "1 hr 30 min",
  cookTime: "25 min",
  servings: "6 (approx. 30 dumplings)",
  difficulty: "Hard" as const,
  region: "Central" as const,
  province: "Quảng Trị",

  introduction: `Bánh bột lọc is the dish that turns cassava — a famine crop, a survival carbohydrate, a root that poisoned you if you processed it wrong — into something that looks like it belongs in a jewellery box. The translucent wrapper, glowing amber-pink where shrimp presses against it, is not a visual trick. It is a direct consequence of amylopectin chemistry: cassava starch is 83% amylopectin, which forms gels with a refractive index nearly identical to water (1.34 vs 1.33), meaning light passes through instead of scattering. The dumpling is literally see-through because of molecular architecture.

Quảng Trị's version is the ancestor — larger, rougher, more generous with filling, always wrapped in banana leaf and always steamed. When the Nguyễn court relocated culinary traditions to Huế, they refined the dumpling: smaller, thinner-skinned, sometimes served "trần" (naked, unwrapped). But refinement is subtraction. The Quảng Trị original insists on the banana leaf — not merely as packaging, but as a third flavour layer where the leaf's waxy esters transfer grassy, green-tea-like compounds to the dumpling surface during steaming.

What makes this recipe difficult is not technique but thermodynamics. Tapioca dough has a working window of approximately 3-4 minutes: too hot and it burns your hands, too cool and it cracks like plaster. Every dumpling is a race against the second law of thermodynamics — entropy wins when the dough reaches room temperature. This is why Quảng Trị grandmothers work in teams: one person kneads and portions the dough under a damp cloth, another fills and wraps. The assembly line is not efficiency — it is thermal necessity.`,

  ingredients: [
    {
      group: "Tapioca Dough",
      items: [
        "400g tapioca starch (bột lọc / bột năng) — NOT tapioca flour",
        "300ml boiling water",
        "1 tablespoon cooking oil",
        "½ teaspoon salt",
        "Extra tapioca starch for dusting"
      ]
    },
    {
      group: "Shrimp & Pork Filling",
      items: [
        "300g fresh shrimp — peeled, deveined, cut into 1cm pieces",
        "150g pork belly — cut into 5mm × 2cm strips",
        "3 shallots — finely minced",
        "2 cloves garlic — minced",
        "2 tablespoons fish sauce",
        "1 tablespoon sugar",
        "1 teaspoon ground black pepper",
        "½ teaspoon chili flakes (ớt bột)",
        "1 tablespoon annatto oil (dầu điều) — for colour",
        "1 tablespoon cooking oil"
      ]
    },
    {
      group: "Banana Leaf Wrapping",
      items: [
        "30-35 banana leaf pieces — cut into 15×20cm rectangles, washed",
        "Kitchen twine or thin bamboo ties"
      ]
    },
    {
      group: "Nước Chấm Dipping Sauce",
      items: [
        "4 tablespoons fish sauce",
        "3 tablespoons sugar",
        "3 tablespoons warm water",
        "2 tablespoons lime juice",
        "2 bird's eye chilies — finely sliced",
        "2 cloves garlic — minced",
        "1 tablespoon pickled carrot and daikon (đồ chua) — optional"
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: "Cook the Filling — Fat Rendering Sequence",
      detail: `Heat cooking oil in a pan over medium-high heat. Add pork belly strips and cook for 4-5 minutes until the fat is partially rendered and edges are golden. The pork should be about 70% cooked — NOT fully done.

Add shallots and garlic, stir 30 seconds until fragrant. Add shrimp pieces, fish sauce, sugar, black pepper, chili flakes, and annatto oil. Stir-fry for 2 minutes until shrimp just turns pink (still slightly translucent in the centre).

Transfer to a plate and spread flat to cool quickly. The filling must be room temperature or cooler before wrapping.

THE 70% PORK RULE — WHY UNDERCOOK:
The pork will steam for another 25 minutes inside the dumpling. If you fully cook it now (100%), steaming pushes it to the equivalent of 150% — dry, tough, flavourless fibres that have expelled all their moisture.

At 70% doneness: pork belly fat has rendered enough to be liquid (fat melts at 36-45°C, achieved in 4-5 minutes at medium-high), but the lean portion retains moisture. During steaming, this rendered fat performs three functions inside the sealed dumpling:
→ LUBRICATES the shrimp (which becomes dry above 65°C as myosin contracts)
→ MOISTENS the tapioca wrapper from the inside out (preventing the interior surface from becoming gummy)
→ CARRIES fat-soluble flavour compounds (annatto carotenoids, black pepper piperine, chili capsaicin) throughout the filling

ANNATTO OIL — COLOUR WITH PURPOSE:
Dầu điều isn't decorative. Annatto's bixin (a carotenoid) is oil-soluble and thermally stable to 180°C. It stains the pork fat orange-red, which then SHOWS THROUGH the translucent wrapper, creating the signature warm glow of properly made bánh bột lọc. Without annatto, the filling looks grey through the dough — technically fine, visually dead.

COOLING SPEED MATTERS: Spread flat on a plate, not piled in a bowl. Hot filling placed inside tapioca dough immediately gelatinises the dough's interior surface prematurely, creating a gummy layer between wrapper and filling. Room temperature filling = clean separation between dough and filling after steaming.`,
      tip: "If shrimp are large, butterfly them before cutting. This exposes more surface area to the marinade and ensures even cooking during the brief steaming time. Head-on shrimp add more flavour — toast the heads separately, crush, and fold into the filling for concentrated shrimp essence."
    },
    {
      step: 2,
      title: "Build the Dough — The Gelatinisation Threshold",
      detail: `Place tapioca starch in a large, heat-proof bowl. Add salt. Create a well in the centre.

Bring water to a FULL ROLLING BOIL (100°C). Immediately pour ALL the boiling water into the well. Working fast with chopsticks, stir the water into the starch in circular motions for 30 seconds until a shaggy, lumpy mass forms.

Add cooking oil. When cool enough to handle (still hot, ~60-70°C), knead the dough with your hands for 3-4 minutes until smooth, pliable, and slightly tacky. It should feel like warm modelling clay — elastic but not sticky.

Cover with a damp cloth immediately. Work within 30 minutes.

THE CRITICAL SCIENCE — WHY BOILING WATER OR NOTHING:

Tapioca starch gelatinisation temperature: 59-70°C. This is the temperature at which starch granules absorb water, swell irreversibly, and burst, releasing amylose and amylopectin chains that entangle into a gel network.

With BOILING water (100°C):
→ ~40-50% of starch granules gelatinise INSTANTLY on contact — these become the "glue" that holds the dough together
→ The remaining 50-60% of granules are wetted but NOT gelatinised — they remain as intact granules embedded in the gel matrix
→ This creates a TWO-PHASE SYSTEM: gel matrix (cohesion) + intact granules (structure) = workable dough

With WARM water (60-80°C):
→ Partial, uneven gelatinisation — some granules swell, others don't, creating a lumpy, crumbly mess that won't hold together
→ Temperature drops below 59°C as it mixes → remaining starch never gelatinises → dough crumbles

With COLD water:
→ Zero gelatinisation → tapioca starch simply suspends in water → the moment you stop stirring, starch settles to the bottom → no dough formation possible

THE RATIO 400g : 300ml — WHY EXACT:
This is a 1.33:1 starch-to-water ratio by weight. Too much water (1:1) = sticky, unworkable slurry. Too little (2:1) = dry, cracking dough that shatters when folded. The 1.33:1 ratio provides exactly enough water to gelatinise the binding fraction while leaving the structural fraction hydrated but intact.

WHY OIL MATTERS: 1 tablespoon of oil coats the amylopectin chains, reducing inter-chain hydrogen bonding. This makes the dough MORE pliable without adding more water (which would make it sticky). Oil is a plasticiser for starch — the same principle used in making plastic bags from corn starch.`,
      tip: "If the dough cracks when you fold it in half: it's too cool or too dry. Microwave for 15-20 seconds under the damp cloth to re-warm it, OR knead in ½ tablespoon of boiling water. If it sticks to everything: dust with dry tapioca starch, NOT flour (wheat flour creates opaque spots in the translucent wrapper)."
    },
    {
      step: 3,
      title: "Prepare Banana Leaves — The Waxy Barrier",
      detail: `Cut banana leaves into 15×20cm rectangles, cutting WITH the grain (parallel to the veins, not across them). Wipe clean with a damp cloth.

Pass each leaf briefly over a gas flame or dip in boiling water for 5 seconds. The leaf should darken slightly from bright green to deep olive-green and become noticeably more flexible.

Stack prepared leaves and keep covered with a damp cloth.

WHY HEAT-TREAT THE LEAVES:
Banana leaves have a waxy cuticle (epicuticular wax layer) composed of long-chain alkanes, fatty acids, and wax esters. Raw, this cuticle is rigid and the leaf is brittle — it cracks when folded.

Brief heat treatment (3-5 seconds over flame or in boiling water) melts the surface wax (melting point ~60-80°C) and plasticises the cellulose fibres underneath. The result:
→ Leaf becomes foldable without cracking
→ Waxy surface remains intact — this is the non-stick coating that prevents tapioca dough from bonding to the leaf
→ Heat releases volatile esters from the wax layer — these are the grassy, green-tea-like aromatics that distinguish banana-leaf-steamed foods from parchment or foil alternatives

CUTTING WITH THE GRAIN: Banana leaf veins run parallel. Cutting WITH the veins means the leaf can fold perpendicular to the veins without tearing. Cutting ACROSS the veins = the leaf rips along the cut vein lines when you try to fold it.

THE BANANA LEAF IS NOT BANANA LEAF-FLAVOURED:
Common misconception. The aromatic compounds released during steaming are primarily: (1) hexanal and (2) trans-2-hexenal — the same "green" aldehydes found in freshly cut grass, green tea, and cucumber. The banana plant and actual banana fruit share very few flavour compounds (isoamyl acetate, the banana smell, is in the fruit, not the leaf). Banana leaf contributes "freshness" and "grassiness," not "banana-ness."`,
      tip: "If banana leaves are unavailable: parchment paper is functional but aromatic-dead. A creative substitute: blanched collard green leaves or Swiss chard leaves — they won't provide the waxy non-stick, so brush with oil, but they do release similar green aldehydes during steaming."
    },
    {
      step: 4,
      title: "Form the Dumplings — The 3-Minute Working Window",
      detail: `Work with ONE-QUARTER of the dough at a time, keeping the rest under the damp cloth.

1. Pinch off a 20g piece of dough (roughly a large marble). Roll into a ball.
2. On a lightly oiled surface (NOT starch-dusted — oil prevents sticking without drying the dough), flatten the ball into a 8-9cm disc using your palm or a small rolling pin. Target thickness: 2mm.
3. Place 1 tablespoon of filling in the centre of the disc. Fold in half to create a half-moon. Press edges firmly to seal, then crimp by folding the sealed edge over itself in 3mm increments.
4. Place the dumpling on a prepared banana leaf piece. Fold the leaf: bottom third up, top third down, then tuck the sides under. The package should be snug but not compressed.
5. Tie with kitchen twine or a thin strip of banana leaf. Not too tight — the dumpling expands slightly during steaming.

Repeat. Work quickly. Each quarter-batch should be formed in 3-4 minutes.

THE 3-MINUTE WINDOW — THERMODYNAMIC REALITY:
Tapioca dough behaves like a thermoplastic polymer: it is pliable when warm (>40°C) and brittle when cool (<30°C). At room temperature (22-25°C), you have approximately 3-4 minutes before the dough crosses from workable to cracking.

This is not a fault of technique — it is physics. As the dough cools:
→ Amylopectin chains that were mobile and flexible at 50-60°C begin to re-associate (early retrogradation)
→ Hydrogen bonds reform between chains, creating rigid junction zones
→ The dough transitions from viscoelastic (stretchy, foldable) to elastic-brittle (springs back, then snaps)

COUNTERMEASURES:
→ Work in small batches (quarter-dough at a time)
→ Keep unused dough under damp cloth (slows heat loss by 40-50% via humidity blanket)
→ If a piece cracks: knead it back into the warm dough mass — once re-warmed, the amylopectin chains become mobile again. This is fully reversible below 3 cycles.
→ Warm your work surface: place a towel soaked in hot water on the counter for 2 minutes before working, then remove and dry. The residual heat extends your window by ~1 minute.

2MM THICKNESS — THE TRANSLUCENCY EQUATION:
Too thick (3mm+) = opaque wrapper, gummy chew, filling invisible — you've made a ball of glue with mystery contents. Too thin (1mm) = tears during wrapping, exposes filling during steaming, dissolves into a starch slick. At 2mm, the wrapper: (a) is thin enough for light to transmit through (translucent), (b) is thick enough to maintain structural integrity during steaming, (c) delivers the signature QQ texture — the bouncy, elastic chew that defines well-made bột lọc.

CRIMPING PURPOSE: The folded crimp creates a triple-thickness seal (6mm vs 2mm body). During steaming, internal steam pressure builds inside the dumpling (shrimp + pork release moisture). The crimp prevents blowout by being 3× stronger than the body. It is structural engineering, not decoration.`,
      tip: "Wet your fingertips with oil, not water, when handling the dough. Water re-activates the surface starch into a sticky slime. Oil creates a molecular barrier (lipid layer) that prevents the dough from bonding to your skin while keeping the dough surface intact."
    },
    {
      step: 5,
      title: "Steam the Dumplings — Saturated Steam vs. Dry Heat",
      detail: `Bring steamer water to a vigorous, rolling boil. Arrange wrapped dumplings in a single layer in the steamer basket (bamboo preferred, metal acceptable). Leave 2cm between packages for steam circulation.

Steam over HIGH heat for 20-25 minutes. Do NOT reduce to medium — sustained high heat is critical.

After 20 minutes, open one test dumpling. The wrapper should be fully translucent (you can see the orange-pink filling through it) with no white opaque patches. If opaque spots remain, steam 3-5 more minutes.

Remove from steamer. Rest 2-3 minutes before unwrapping (dough firms slightly during rest, making it easier to peel from the leaf).

SATURATED STEAM — WHY HIGH HEAT IS NON-NEGOTIABLE:
At a rolling boil, the steamer produces SATURATED STEAM — steam at 100°C that carries maximum latent heat (2,257 kJ/kg). This is the thermal payload that cooks the dumplings.

At a gentle simmer (reduced heat):
→ Steam production drops → air pockets form inside the steamer
→ Air is a terrible heat conductor (0.025 W/m·K vs water's 0.6 W/m·K)
→ Dumplings in air pockets cook unevenly — some fully translucent, others with opaque spots
→ Lower temperature means slower starch gelatinisation → longer cook time → filling overcooks while wrapper catches up

At a rolling boil:
→ Steam fills every gap, displacing all air
→ Uniform 100°C on every surface of every dumpling simultaneously
→ Complete gelatinisation of remaining intact starch granules within 20 minutes
→ Shrimp and pork reach 75-80°C (fully safe) without overcooking because the steam environment cannot exceed 100°C at atmospheric pressure — this is a BUILT-IN TEMPERATURE LIMITER

THE TRANSLUCENCY CHECKPOINT:
White/opaque patches = ungelatinised starch granules. These granules still have their crystalline structure intact, which scatters light (Mie scattering — particles ~15-25μm in diameter, comparable to light wavelengths). Once gelatinised, the granules burst and their contents merge into the amorphous gel matrix, which has uniform refractive index = transparent.

A fully translucent wrapper means 100% gelatinisation has been achieved. This is not merely visual — ungelatinised starch tastes "raw" and chalky. Translucency = visual confirmation that the starch is fully cooked.

BAMBOO VS. METAL STEAMER:
Bamboo absorbs excess condensation from the lid, preventing water droplets from falling back onto the dumplings (which would create water-logged, slimy surfaces). Metal lids drip condensation — if using metal, wrap the lid with a kitchen towel to absorb drips. This is a practical difference, not snobbery.`,
      tip: "Don't stack dumplings. The banana leaf between layers blocks steam from reaching the inner surfaces, creating uneven cooking. If you must batch, cook in separate rounds. One layer = uniform steam access = uniform translucency."
    },
    {
      step: 6,
      title: "Mix the Nước Chấm — The Quảng Trị Ratio",
      detail: `Dissolve sugar completely in warm water. Add fish sauce, lime juice, minced garlic, and sliced chilies. Stir and taste.

The Quảng Trị ratio runs SALTIER and SPICIER than the Huế version — this is deliberate compensation for the sweet, bland tapioca wrapper.

QUẢNG TRỊ RATIO: 4 fish sauce : 3 sugar : 3 water : 2 lime — concentrated, punchy
HUẾ RATIO: 3 fish sauce : 4 sugar : 4 water : 2 lime — lighter, sweeter, more dilute
SÀI GÒN RATIO: 3 fish sauce : 5 sugar : 5 water : 2 lime — sweet-forward, gentle

THE CALIBRATION LOGIC:
Tapioca wrapper contributes ZERO flavour — it is pure starch, no protein (so no umami), no fat (so no richness), no salt, no acid. It is a flavour vacuum. The filling provides umami (shrimp), fat (pork), and seasoning, but it is sealed INSIDE the wrapper.

When you bite through the wrapper, your palate first encounters: bland, sweet, chewy starch. If the dipping sauce is mild, the overall experience reads as bland. The filling's flavour arrives 2-3 seconds later, AFTER the chew, creating a disjointed experience — you taste wrapper, THEN taste filling, never together.

Concentrated dipping sauce solves this: you coat the wrapper's exterior with intense flavour BEFORE the bite. Now your palate receives: salty-sour-spicy (sauce on wrapper surface) → sweet-chewy (wrapper body) → umami-rich-fatty (filling) in a rapid 1-2-3 temporal sequence rather than a gap-filled 1...(gap)...2.

This is why thinner dipping sauces fail with bánh bột lọc. The sauce must be concentrated enough to persist through the chew. Dilute sauce washes off the slippery surface before you taste it.`,
      tip: "Add 1 tablespoon of the rendered pork-shrimp liquid from the filling pan into the dipping sauce. This bridges the sauce and filling flavour profiles — the sauce now contains the same Maillard compounds as the filling, creating continuity between exterior and interior taste."
    },
    {
      step: 7,
      title: "Unwrap & Serve — The Peel as Ritual",
      detail: `Serve dumplings still wrapped. Each diner unwraps their own — this is part of the experience.

To unwrap: untie the string, unfold the leaf, then gently peel the dumpling from the leaf surface. The waxy side should release cleanly. If using the matte side accidentally (non-waxy), the dough may stick — use a small spoon to lift it.

Arrange unwrapped dumplings on a plate or eat directly from the leaf. Dip generously in the nước chấm. Eat in one or two bites — not more.

THE PEEL AS SENSORY PRIMER:
Unwrapping a banana leaf package creates a specific sensory sequence that primes the appetite:
→ TOUCH: The warm, smooth leaf against fingertips triggers tactile anticipation
→ SOUND: Untying and unfolding creates rustling — a low-frequency "opening" cue
→ SIGHT: The translucent dumpling is revealed — orange-pink filling glowing through clear wrapper
→ SMELL: Trapped steam carrying hexanal (green), annatto (earthy), and fish sauce (umami) releases in a concentrated burst — this is the aroma "payload" that banana leaf traps and releases all at once

This four-sense priming sequence occurs before the first bite. By the time the dumpling enters your mouth, your salivary glands are fully activated, your olfactory epithelium is loaded with context, and your brain has already begun predicting the flavour. The wrapped dumpling doesn't just taste different from an unwrapped one — it is physiologically processed differently because of this priming.

ONE-OR-TWO-BITE RULE:
Each dumpling is designed as a single flavour unit: wrapper + filling in a specific ratio. Biting into small pieces disrupts this ratio — you get bites that are all wrapper and bites that are all filling. One or two bites ensures every taste includes both components in the architect's intended proportion. This is portion design, not table manners.

THE LEAF IS THE PLATE:
In Quảng Trị tradition, the banana leaf serves as a personal plate — you eat the dumpling from the leaf, using the leaf's concave shape to hold the dipping sauce. This is not poverty aesthetics; it is functional: the waxy leaf surface is hydrophobic, so the sauce beads and pools rather than absorbing, keeping the sauce concentrated where you need it.`,
      tip: "Eat within 30 minutes of steaming. Unlike wheat dumplings that hold well, tapioca dumplings undergo visible retrogradation: the wrapper becomes progressively opaque, stiff, and chalky as amylopectin chains re-crystallise. Resteaming for 3-5 minutes reverses this completely — but it only works once. Twice-retrograded tapioca is permanently damaged."
    }
  ],

  proTips: [
    {
      title: "Amylopectin vs. Amylose — Why Cassava Creates Translucency",
      content: `The translucent wrapper of bánh bột lọc is not a cooking technique — it is a consequence of cassava's starch molecular ratio.

All starches contain two polymers:
→ AMYLOSE: Linear chains. When cooled, amylose chains align and crystallise (retrogradation), creating OPAQUE gels. Wheat starch = 25-28% amylose → opaque dumpling skins. Rice starch = 20-25% amylose → translucent but still cloudy.
→ AMYLOPECTIN: Highly branched chains. Branches PREVENT crystalline alignment. Amylopectin gels remain AMORPHOUS (disordered) → light passes through with minimal scattering → TRANSLUCENT.

Cassava starch = 83% amylopectin, only 17% amylose. This is the highest amylopectin ratio of any common food starch (compare: waxy rice 95-100% amylopectin → also translucent → used for similar dumplings in Chinese/Thai cuisines). The low amylose content means minimal retrogradation → the wrapper stays translucent for hours rather than clouding in minutes.

The refractive index of an amylopectin gel (n = 1.34-1.35) is nearly identical to water (n = 1.33). When the refractive indices match, photons pass through both materials without bending or scattering → transparency. Amylose crystals have higher refractive index (n = 1.50+), creating interfaces that scatter light → opacity.

This is the same physics behind why ice is transparent (crystalline water, uniform refractive index) and snow is white (air-ice interfaces scatter all wavelengths).`
    },
    {
      title: "The QQ Texture — Bounce Physics of Tapioca",
      content: `The chew of bánh bột lọc is described in Chinese/Taiwanese culinary terminology as "QQ" (彈牙, literally "bouncing off the tooth"). This is a specific textural quality distinct from wheat gluten chew or rice cake chew.

WHAT CREATES QQ:
Amylopectin's branched structure creates an ELASTIC gel network. When you bite:
→ Phase 1 (compression): Your teeth compress the gel. Amylopectin chains are pushed closer together.
→ Phase 2 (elastic recovery): You release bite pressure. The branched chains, which were compressed but not broken, spring back toward their original conformation.
→ Phase 3 (re-bite): The dumpling has partially recovered its shape. Your teeth meet resistance again.

This compression → recovery → resistance cycle IS the QQ sensation. It requires:
→ High amylopectin (branching = elastic recovery)
→ 2mm thickness (thin enough to compress fully, thick enough to spring back)
→ Adequate water content (~40% of gel weight) — water acts as a plasticiser within the gel network, allowing chain mobility

WHY WHEAT DUMPLINGS DON'T HAVE QQ:
Wheat chew comes from GLUTEN — a protein network. Gluten creates a PLASTIC deformation (it stays where you push it, like chewing gum). Amylopectin creates ELASTIC deformation (it pushes back). Plastic chew = stretchy and persistent. Elastic chew = bouncy and springy. Both are "chewy" but to different neurological receptors.

If your bánh bột lọc doesn't have QQ: too much water in the dough → gel is too soft, no elastic recovery. Solution: reduce water by 20-30ml next batch.`
    },
    {
      title: "Quảng Trị vs. Huế — Ancestor vs. Courtier",
      content: `The Quảng Trị → Huế evolution of bánh bột lọc mirrors the broader culinary journey from working-class origin to court refinement, exactly paralleling the bún bò giò heo → bún bò Huế transformation.

QUẢNG TRỊ ORIGINAL:
→ Size: Large (25-30g each), 5-6 fill a meal
→ Wrapper: Thick (2-3mm), deliberately chewy — the wrapper IS the meal, filling is accent
→ Filling: Generous, chunky shrimp + thick pork belly strips — proportion favours filling
→ Wrapping: Always banana leaf — the leaf is essential
→ Sauce: Salty, concentrated — working-class calibration for heavy labour calorie replacement
→ Context: Fishermen's fuel, market food, eaten with hands from the leaf

HUẾ REFINEMENT (Bánh bột lọc Huế):
→ Size: Small (12-15g each), 8-12 for an elegant portion
→ Wrapper: Paper-thin (1-1.5mm), maximum translucency — the wrapper is showcase, not sustenance
→ Filling: Measured, single whole shrimp + thin pork sliver — filling is jewel, wrapper is display case
→ Wrapping: Often served "trần" (naked/unwrapped) — displaying the translucency as visual art
→ Sauce: Lighter, sweeter — court palate that finds salt aggressive
→ Context: Served in sets with other bánh (bột lọc + nậm + bèo = "bộ ba bánh Huế"), elaborate presentation

The transition happened during the Nguyễn Dynasty (1802-1945) as Quảng Trị families migrated south to serve the Huế court. The court aesthetic demanded elegance, refinement, and visual beauty — values that progressively miniaturised and thinned the dumpling until it became more display than sustenance.

Neither is "better." Quảng Trị bánh bột lọc is a satisfying meal. Huế bánh bột lọc is edible art. The same DNA, two phenotypes — nature vs. nurture expressed in starch.`
    },
    {
      title: "The Cassava Paradox — Poison to Transparency",
      content: `Cassava (Manihot esculenta) contains linamarin, a cyanogenic glycoside that converts to hydrogen cyanide (HCN) when the plant cells are damaged. Bitter cassava varieties contain 200-400mg HCN/kg — enough to be lethal if eaten raw. The lethal dose for a 60kg adult is approximately 1mg/kg body weight.

To extract SAFE tapioca starch from cassava:
1. Peel (removes 50% of cyanide, concentrated in the cortex)
2. Grate and soak in water (HCN is water-soluble, dissolves out)
3. Squeeze and filter (removes fibre + residual cyanide)
4. Settle (starch sinks, cyanide-containing supernatant is poured off)
5. Sun-dry (remaining HCN, bp 26°C, volatilises in the sun)

By the time you have tapioca starch, it contains <10mg HCN/kg — well below the safety threshold of 50mg/kg. The transformation from poison to translucent dumpling wrapper is one of humanity's great food-processing achievements, developed independently across Southeast Asia, South America, and West Africa.

In Quảng Trị's history, cassava was THE famine crop — it grows in poor, sandy, war-ravaged soil where rice fails. During the American War, Quảng Trị (the DMZ province) was the most heavily bombed region in human history. Cassava grew in bomb craters. The women who turned this survival crop into beautiful, translucent dumplings performed an act of quiet defiance: transforming the most desperate ingredient into something that glows.

This parallels the bánh xèo khoai Quảng Bình story — sweet potato growing in bomb craters. Both provinces, destroyed by bombs, turned their survival crops into their most celebrated dishes.`
    }
  ],

  nutritionInfo: {
    calories: 285,
    protein: "14g",
    carbs: "38g",
    fat: "9g",
    fiber: "1g"
  },

  tags: ["Quảng Trị", "Bánh Bột Lọc", "Tapioca", "Dumplings", "Banana Leaf", "Steamed", "Central Vietnam", "Shrimp", "Pork", "Translucent"],

  relatedRecipes: [
    {
      title: "Bún Bò Giò Heo Quảng Trị",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400",
      slug: "bun-bo-gio-heo-quang-tri",
      description: "The fierce ancestor of Huế's famous beef noodle soup"
    },
    {
      title: "Cơm Hến Quảng Trị",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400",
      slug: "com-hen-quang-tri",
      description: "Baby clam cold rice — the original before Huế refined it"
    },
    {
      title: "Bánh Xèo Khoai Quảng Bình",
      image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400",
      slug: "banh-xeo-khoai-quang-binh",
      description: "Sweet potato sizzling pancake — another survival-crop-turned-art"
    }
  ],

  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Bánh Bột Lọc Quảng Trị — Translucent Tapioca Dumplings",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "description": "Hand-formed tapioca dumplings filled with shrimp and pork belly, wrapped in banana leaf and steamed until translucent. The ancestor version from Quảng Trị — larger, bolder, and more generous than the refined Huế variant.",
    "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=1200",
    "prepTime": "PT1H30M",
    "cookTime": "PT25M",
    "totalTime": "PT1H55M",
    "recipeYield": "30 dumplings (6 servings)",
    "recipeCategory": "Main Course",
    "recipeCuisine": "Vietnamese",
    "keywords": "bánh bột lọc, tapioca dumplings, Quảng Trị, translucent dumplings, banana leaf, steamed dumplings, Vietnamese dumplings, shrimp pork dumplings, cassava starch, Central Vietnam",
    "recipeIngredient": [
      "400g tapioca starch",
      "300ml boiling water",
      "300g fresh shrimp",
      "150g pork belly",
      "3 shallots",
      "2 tablespoons fish sauce",
      "1 tablespoon annatto oil",
      "30-35 banana leaf pieces (15×20cm)",
      "4 tablespoons fish sauce for dipping sauce",
      "2 tablespoons lime juice",
      "2 bird's eye chilies"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Cook shrimp and pork belly filling with shallots, garlic, fish sauce, annatto oil, and seasonings. Cool to room temperature." },
      { "@type": "HowToStep", "text": "Pour boiling water into tapioca starch, stir vigorously, add oil, and knead into smooth, pliable dough. Cover with damp cloth." },
      { "@type": "HowToStep", "text": "Heat-treat banana leaf rectangles over flame or in boiling water until pliable and dark green." },
      { "@type": "HowToStep", "text": "Working quickly in small batches, flatten 20g dough into 8-9cm discs, fill with 1 tablespoon filling, fold into half-moons, crimp edges, and wrap in banana leaf." },
      { "@type": "HowToStep", "text": "Steam over high heat for 20-25 minutes until wrapper is fully translucent with no opaque patches." },
      { "@type": "HowToStep", "text": "Mix concentrated dipping sauce: fish sauce, sugar, warm water, lime juice, chilies, and garlic." },
      { "@type": "HowToStep", "text": "Serve wrapped. Diners unwrap at table, dip generously, and eat in one or two bites." }
    ],
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "285 kcal",
      "proteinContent": "14g",
      "carbohydrateContent": "38g",
      "fatContent": "9g",
      "fiberContent": "1g"
    }
  }
};

export default function BanhBotLocQuangTriPage() {
  return <RecipeLayout recipe={recipeData} />;
}