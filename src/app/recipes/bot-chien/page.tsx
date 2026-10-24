'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: "Bột Chiên",
  subtitle: "Saigon Fried Rice Flour Cake — Where Steamed Starch Meets the Flat-Top Griddle",
  heroImage: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=1200",
  prepTime: "30 min (+ 4 hrs steaming & cooling)",
  cookTime: "20 min",
  servings: "4",
  difficulty: "Intermediate" as const,
  region: "Southern" as const,
  province: "Sài Gòn (gốc Triều Châu)",

  introduction: `Bột chiên is Saigon's answer to a question no one outside Cholon ever thought to ask: what happens when you steam rice flour into a solid block, cut it into cubes, and fry those cubes on a flat griddle until they develop golden crusts on exactly two faces while the interior remains soft, white, and yielding — then scramble eggs directly over the cubes so the egg binds cube to cube in a crispy protein lattice?

The answer is one of the most texturally brilliant street foods in Southeast Asia.

The dish traces to Teochew (Chaozhou) Chinese immigrants who settled in Cholon — Saigon's Chinatown — in the 18th and 19th centuries. The original Teochew version, called "chai tow kway" (菜頭粿, literally "radish cake"), used daikon radish mixed into the rice flour batter before steaming. Saigon's adaptation made a critical simplification: it dropped the radish entirely, making the cake PURE rice starch — a blank canvas that exists solely for texture, not flavour. This is a profound design decision. By removing the one flavoured ingredient from the cake, the Saigon version made the cake's ONLY purpose to deliver texture contrast. All flavour responsibility shifted to the egg, the soy sauce, the green onions, and the pickled papaya on the side.

The physics of bột chiên centre on a phenomenon called the Maillard-starch crust paradox. Pure rice starch has very few free amino acids (the Maillard reaction needs both reducing sugars AND amino acids). So where does the golden-brown colour come from? The egg. When egg is scrambled over the rice cubes, egg proteins (ovalbumin, ovotransferrin) provide the amino acids, while the rice starch surface provides the reducing sugars (glucose, maltose from starch hydrolysis during steaming). The Maillard reaction happens AT THE INTERFACE between egg and starch — not in the egg alone, not in the starch alone, but in the molecular handshake between them. This is contact-dependent browning, and it's why bột chiên that is fried without egg turns pale gold at best, while bột chiên WITH egg achieves deep mahogany.

The eating experience is deliberately architectural. Each cube presents two crispy faces (top and bottom, where griddle contact occurred), four soft faces (the sides, which never touched the griddle), and a completely soft, almost pudding-like interior. Your teeth pass through: crunch → soft → pudding → soft → crunch. This five-layer texture sequence from a single cube is what makes bột chiên hypnotic. Add the egg lattice draped over everything — itself crispy where thin, custardy where thick — and you have a dish where no two bites deliver the same texture ratio.

The soy sauce is not an afterthought. It is a specifically formulated sweet soy sauce (xì dầu ngọt) — darker, thicker, and sweeter than standard soy — that performs two functions: it provides the salt-sweet-umami flavour that the intentionally bland rice cake cannot, and it provides ADDITIONAL reducing sugars (from the added molasses or palm sugar) that accelerate Maillard browning on the next flip. Each application of sauce makes the subsequent browning faster and deeper. The sauce is not seasoning. It is fuel for the crust.`,

  ingredients: [
    {
      group: "Rice Flour Cake (Bánh Bột)",
      items: [
        "300g rice flour (bột gạo) — NOT glutinous rice flour",
        "50g tapioca starch (bột năng) — for chewiness",
        "600ml water",
        "1 teaspoon salt",
        "1 tablespoon cooking oil — prevents sticking",
        "Steaming vessel: 20cm × 20cm square pan, lightly oiled"
      ]
    },
    {
      group: "For Frying",
      items: [
        "4 tablespoons cooking oil — more than you think (the cubes need to shallow-fry)",
        "4 large eggs — beaten lightly, not whipped",
        "4 stalks green onion (hành lá) — cut into 3cm lengths",
        "3 cloves garlic — roughly chopped (optional, for aroma)"
      ]
    },
    {
      group: "Sweet Soy Sauce (Xì Dầu Ngọt)",
      items: [
        "3 tablespoons dark soy sauce (xì dầu đen)",
        "1 tablespoon regular soy sauce (xì dầu trắng)",
        "2 tablespoons sugar — palm sugar preferred for depth",
        "1 tablespoon water",
        "Heat gently until sugar dissolves — do not boil"
      ]
    },
    {
      group: "Pickled Papaya (Đồ Chua Đu Đủ)",
      items: [
        "200g green papaya — julienned into thin matchsticks",
        "2 tablespoons rice vinegar",
        "2 tablespoons sugar",
        "1 teaspoon salt",
        "1 bird's eye chili — sliced (optional)",
        "Toss and let sit 30 minutes minimum"
      ]
    },
    {
      group: "Dipping Sauce",
      items: [
        "Tương ớt (chili sauce) — Chinsu or sriracha",
        "Additional sweet soy sauce — for drizzling at the table",
        "Tương đen (hoisin-style dark sauce) — optional, for extra sweetness"
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: "Make the Rice Flour Batter — Starch Suspension Engineering",
      detail: `Combine rice flour, tapioca starch, salt, and cooking oil in a large mixing bowl. Gradually add water while stirring constantly with a whisk. The batter should be completely smooth — no lumps.

WHY TWO STARCHES — THE TEXTURE EQUATION:

RICE FLOUR (85% of the starch):
Rice starch granules are the smallest of all cereal starches (2-8 μm diameter, versus wheat at 22-36 μm or potato at 15-100 μm). When gelatinised and cooled, these small granules form a DENSE, closely-packed gel network. This density is what gives the cooled rice cake its firm, sliceable texture — you can cut it into clean cubes without crumbling.

Rice starch is also 75-80% amylopectin (the branched polymer) and 20-25% amylose (the linear polymer). During cooling, the amylose chains align and crystallise (retrogradation), creating the rigid structure that holds the cube shape during frying. Without amylose, the cake would be sticky and soft (like mochi, which uses glutinous rice flour that is 99% amylopectin and ~1% amylose).

TAPIOCA STARCH (15% of the starch):
Tapioca is 83% amylopectin — higher than rice. Its role is not structure but TEXTURE MODIFICATION. The tapioca molecules intersperse within the rice starch network, creating zones of slightly higher elasticity. When you bite a cube that is pure rice flour: clean break, slightly chalky. When you bite a cube with tapioca added: slight bounce, slight chew, slight QQ character. The tapioca is the difference between "firm tofu" texture and "firm-but-bouncy" texture.

THE RATIO MATTERS:
→ 100% rice flour = too firm, chalky, crumbles when fried
→ 85:15 rice:tapioca = perfect balance — firm enough to cube, bouncy enough to satisfy
→ 70:30 rice:tapioca = too bouncy, won't hold cube shape, interior too chewy
→ 50:50 = you've made a different dish entirely (closer to bánh bột lọc)

LUMP PREVENTION:
Add water to flour, not flour to water. Adding flour to water creates instant lumps because the outer surface of each flour particle gelatinises on contact with water, forming a waterproof shell that traps dry flour inside. Adding water to flour allows gradual, even hydration from the outside in.

The batter should have the consistency of heavy cream — it pours freely but coats a spoon. If it drips off the spoon cleanly: too thin (add 1 Tbsp rice flour). If it doesn't pour: too thick (add 1 Tbsp water).`,
      tip: "Some Cholon vendors add 1-2 tablespoons of lard to the batter before steaming. The fat disperses throughout the gel during steaming, creating microscopic oil droplets that act as 'lubricants' between starch chains. The result: the interior is silkier, almost creamy, and the cube releases from the griddle more cleanly. If you want the authentic Cholon texture, this is the secret addition."
    },
    {
      step: 2,
      title: "Steam the Batter — Gelatinisation & Gel Formation",
      detail: `Oil the steaming pan lightly. Pour the batter into the pan — it should be 3-4cm deep. Place in a steamer over vigorously boiling water. Steam for 35-45 minutes.

THE STEAMING PROCESS — WHAT'S ACTUALLY HAPPENING:

PHASE 1 — GELATINISATION (0-15 minutes, 60-80°C):
As steam heat penetrates the batter from all surfaces, the starch granules absorb water and swell. At 60°C, the crystalline regions of amylopectin begin to melt (loss of birefringence under polarised light — the granule goes from "organized" to "disordered"). By 80°C, the granules have swollen to 5-10× their original volume and have burst, releasing amylose and amylopectin into the surrounding water. The batter transforms from a white liquid suspension to a translucent, viscous gel.

PHASE 2 — GEL SETTING (15-30 minutes, 95-100°C):
The freed amylose molecules, being linear, begin to ALIGN with each other — hydrogen-bonding side-by-side in parallel arrays. This alignment creates a 3D network (a gel) that traps water and swollen amylopectin within its structure. The batter is no longer a liquid: it is a solid gel.

The surface of the gel (in contact with steam) sets first. The interior takes longer because heat must conduct inward through the already-set gel, which is a poor thermal conductor. This is why the steaming time is 35-45 minutes — not because the reaction is slow, but because heat TRANSFER through a 4cm-thick starch gel is slow.

PHASE 3 — FINAL SETTING (30-45 minutes):
The entire depth of the gel reaches 95°C+. All starch is fully gelatinised. Continued steaming drives off excess free water (the gel tightens slightly). The surface develops a skin — a denser, slightly drier layer that will become the crust anchor during frying.

DONENESS TEST:
Insert a chopstick or skewer into the centre. It should come out CLEAN — no milky batter clinging to it. If the inserted stick shows wet, white residue: the centre hasn't fully gelatinised. Continue steaming in 5-minute increments.

The fully steamed cake should be:
→ Translucent (not opaque white — opaque = uncooked starch)
→ Firm to the touch (wobbles like firm jelly, doesn't flow)
→ Slightly shiny on the surface (the skin)

COOLING — THE CRITICAL RETROGRADATION PHASE:
Remove from steamer. Cool to room temperature (1-2 hours), then REFRIGERATE for minimum 2 hours, overnight ideal.

During cooling, the amylose molecules undergo RETROGRADATION — they crystallise into tight, ordered structures that are STRONGER than the original gel. This retrogradation is what transforms the soft, wobbly steamed gel into a firm, sliceable block that can withstand the violence of a hot griddle without disintegrating.

Retrogradation is temperature-dependent: it occurs fastest at 4°C (refrigerator temperature). At room temperature, it takes 12-24 hours to fully retrograde. At 4°C, it takes 2-4 hours. This is why refrigeration is not optional — it compresses the retrogradation timeline from half a day to half an afternoon.

THE FIRMNESS HIERARCHY:
→ Freshly steamed, still warm: too soft to cube (pudding consistency)
→ Room temperature, 2 hours: barely cutable (soft tofu)
→ Refrigerated 2 hours: properly firm (firm tofu — THIS IS YOUR TARGET)
→ Refrigerated overnight: very firm (extra-firm tofu — the crispiest crust)
→ Refrigerated 3+ days: excessively retrograded (chalky, dry — too far)`,
      tip: "Overnight refrigeration is the cheat code for the crispiest bột chiên. During extended cold-storage, the amylose retrogradation proceeds further, and some amylopectin also begins to retrograde (slower process). The resulting cake is denser and drier at the surface — meaning LESS moisture to evaporate during frying, which means FASTER crust formation and CRISPIER results. Every serious bột chiên vendor steams in the evening and fries the next morning."
    },
    {
      step: 3,
      title: "Cut into Cubes — Geometry Matters",
      detail: `Remove the chilled rice cake from the pan. It should release cleanly from the oiled surface (run a knife around the edges if needed). Cut into 2.5-3cm cubes.

THE CUBE SIZE EQUATION:

WHY 2.5-3cm — NOT BIGGER, NOT SMALLER:

TOO SMALL (< 2cm):
The surface-to-volume ratio becomes too high. During frying, the crust (surface) overwhelms the soft interior (volume). You get cubes that are ALL crunch and no soft centre — missing the textural contrast that IS the point of bột chiên. Additionally, small cubes flip uncontrollably on the griddle and are impossible to manage with a spatula.

PERFECT (2.5-3cm):
At this size, each cube has ~4.5cm² per face × 6 faces = ~27cm² total surface area enclosing ~17cm³ of volume. When two faces are crisped on the griddle, you achieve the optimal ratio: 2 crispy faces (33% of surface) + 4 soft faces (67% of surface) + 100% soft interior. The bite sequence is: crunch → give → pudding → give → crunch. This five-stage sequence requires EXACTLY this size ratio.

TOO BIG (> 4cm):
The interior is too large — the cube takes too long to heat through, and the surface overcooks while waiting for the centre to warm. The griddle contact time for proper browning (~3 minutes per face) is calibrated for 3cm cubes. A 5cm cube would need 5+ minutes per face, during which the first-fried face would over-brown while resting against the hot surface.

CUTTING TECHNIQUE:
Use a sharp knife dipped in water between cuts. The rice cake is sticky and the knife will accumulate a starch film that creates drag. A wet blade passes through cleanly. Cut straight down — don't saw. Sawing tears the retrograded starch network; a clean downward cut compresses and separates it.

CORNER AND EDGE PIECES:
The outer edge and corner cubes have one or two surfaces that were the original steamed "skin" (the surface that contacted the pan during steaming). These skin surfaces are already denser and drier than interior surfaces. When fried, they develop an EXTRA crispy, almost cracker-like crust. These are the premium pieces — every vendor knows this, and regulars ask for "xin mấy miếng bên ngoài" (give me the outside pieces).`,
      tip: "After cutting, let the cubes sit uncovered at room temperature for 15-20 minutes. This allows the freshly exposed cut surfaces to air-dry slightly, reducing surface moisture. Drier surfaces = faster Maillard reaction = crispier crust. This 15-minute patience window is the difference between 'good' and 'exceptional' bột chiên."
    },
    {
      step: 4,
      title: "Fry the Cubes — The Flat-Top Ballet",
      detail: `Heat a large, flat griddle, cast-iron pan, or non-stick skillet over MEDIUM-HIGH heat. Add 3 tablespoons oil — enough to coat the bottom generously plus a 1-2mm pool. The oil should shimmer but NOT smoke.

Place cubes in the pan in a single layer, leaving 1cm gap between each. DO NOT MOVE THEM for 3 minutes.

THE NO-TOUCH RULE — WHY 3 MINUTES UNDISTURBED:

When a rice starch cube contacts hot oil on a hot surface, the following happens in sequence:

0-30 SECONDS:
Surface moisture begins evaporating. The oil temperature at the contact point drops from 180°C to ~140°C as it absorbs the thermal energy needed for water evaporation. The cube is NOT browning yet — it is DRYING. You will hear gentle sizzling — this is water leaving.

30-90 SECONDS:
Surface moisture is mostly gone. The oil temperature at the contact point recovers to 160°C+. Now Maillard reaction begins — but slowly, because pure rice starch has very few free amino acids. The surface is developing a pale golden colour from caramelisation of residual sugars (maltose, glucose) from the starch hydrolysis during steaming.

90-180 SECONDS:
The crust is now SET. The surface starch has dehydrated and vitrified (glass transition) into a rigid, crispy layer that is physically distinct from the soft, hydrated interior. The colour is golden-brown. The cube can now be moved without leaving half its surface on the pan.

IF YOU MOVE THE CUBE BEFORE 3 MINUTES:
The crust hasn't set. The soft, wet starch is still bonded to the pan surface. When you lift the cube, the forming crust tears off, stays on the pan, and burns — while the cube is left with a pale, soft, crust-less surface. The premature break reveals wet interior starch that will never crisp properly because the surface is now too rough and moist. Patience is NOT optional.

FLIP ONCE:
After 3 minutes, use a thin spatula to flip each cube. The browned face should lift cleanly if the crust has set properly. Fry the second face for 2-3 minutes. Now you have two golden faces (top and bottom) and four soft faces (sides).

WHY ONLY TWO FACES:
Frying all six faces would eliminate the soft sides — destroying the textural contrast. Two-face frying is a DESIGN CHOICE, not laziness. The architecture demands exactly two crispy planes separated by a soft equator.`,
      tip: "Medium-high, not high. High heat browns the surface too fast, before the interior has warmed enough to soften from its refrigerated firmness. The interior should be warm and pudding-soft when the crust is golden. If you fry too hot: crispy outside, cold dense inside. If too cool: greasy, pale, no proper crust. The 170-180°C oil temperature is the same window as nem chua rán — not a coincidence, but a physics constant for rice starch browning."
    },
    {
      step: 5,
      title: "Add the Egg — Contact-Dependent Browning",
      detail: `Push the fried cubes to one side of the pan (or remove temporarily). Add 1 tablespoon oil. Pour beaten eggs into the pan. Let the egg SET on the bottom for 30 seconds — don't scramble yet.

Now push/slide the cubes BACK ONTO the partially-set egg layer. Press each cube gently into the egg so its surface makes contact.

Wait 60 seconds. The egg beneath and around the cubes is now browning in the oil.

THE EGG-STARCH INTERFACE — WHERE THE MAGIC HAPPENS:

This is the Maillard reaction's finest moment in bột chiên. Pure rice starch on its own has:
→ Reducing sugars: YES (glucose, maltose from steaming hydrolysis) — ✓
→ Free amino acids: BARELY (rice protein is only 6-8% of flour, and most is locked in intact granules) — ✗

Beaten egg provides:
→ Free amino acids: ABUNDANT (ovalbumin, ovotransferrin, lysozyme — all soluble proteins rich in lysine, the amino acid most reactive in Maillard) — ✓
→ Reducing sugars: TRACE (egg has minimal carbohydrate) — ✗

TOGETHER: the rice cube provides the sugars, the egg provides the amino acids. The Maillard reaction occurs AT THE INTERFACE WHERE THEY TOUCH — not in the egg alone, not in the starch alone. This is why the browning is deepest exactly where egg meets cube.

The golden-mahogany colour of properly fried bột chiên is NOT from the egg browning (that would be pale yellow) and NOT from the rice starch caramelising (that would be light gold). It is from MAILLARD PRODUCTS formed by rice-derived sugars reacting with egg-derived amino acids — a colour and flavour that neither ingredient can produce alone. This is contact-dependent browning: a reaction that requires the physical contact of two different foods.

SCRAMBLE TECHNIQUE:
After the egg layer has browned on the bottom (60 seconds), use the spatula to break it into rough pieces — not small scrambled bits, but large, irregular sheets that drape over and between the cubes. Some egg should remain as a thin crispy lattice connecting multiple cubes. Some should be thick, custardy pockets between cubes. This heterogeneity is essential — every bite should be different.

Add green onion pieces now — they need only 30-60 seconds of heat to soften and release their aroma (allyl methyl sulfide, dipropyl disulfide) without losing their colour or crunch.`,
      tip: "The Cholon master technique: crack the eggs DIRECTLY onto the cubes in the pan, rather than pre-beating. This creates uneven egg distribution — some cubes get thick yolk coverage (richer, more browning), some get thin white coverage (crispier, more delicate), some get almost none. The randomness is intentional — it ensures no two pieces taste the same, which is what keeps you reaching for the next one."
    },
    {
      step: 6,
      title: "Sauce & Serve — The Flavour Delivery System",
      detail: `Drizzle sweet soy sauce over the cubes in the pan during the last 30 seconds of cooking. Toss gently to coat.

Transfer to a plate. Serve immediately with pickled papaya alongside and chili sauce for dipping.

THE SWEET SOY SAUCE — ENGINEERED FOR THIS DISH:

Standard soy sauce (xì dầu trắng) is:
→ Salt: 16-18% NaCl
→ Umami: glutamate from soybean protein hydrolysis
→ Colour: amber, from moderate Maillard reaction during brewing
→ Viscosity: thin, watery

Sweet soy sauce (xì dầu ngọt) for bột chiên is:
→ Salt: 8-10% NaCl (diluted by sugar addition)
→ Umami: same glutamate base
→ Sweetness: 15-20% sugar (palm sugar, molasses, or caramel)
→ Colour: dark brown to black, from sugar caramelisation
→ Viscosity: thick, syrupy — clings to surfaces

THE SAUCE HAS TWO JOBS:

JOB 1 — FLAVOUR DELIVERY:
The rice cake is intentionally BLAND. It has no salt, no sugar, no umami of its own. It is a texture vehicle. The sweet soy sauce provides ALL of the salt + sugar + umami in one application. The sauce-to-cake ratio is therefore critical:
→ Too little sauce: bland, the starch texture feels purposeless
→ Right amount: each bite delivers salt-sweet-umami that complements the egg richness
→ Too much: the sauce overwhelms the delicate egg-starch Maillard flavours

JOB 2 — MAILLARD FUEL:
The sugar in the sweet soy sauce provides ADDITIONAL reducing sugars on the cube surfaces. When these sugars contact the hot pan during that final 30-second toss, they undergo rapid caramelisation AND Maillard reaction with the egg proteins already on the surface. The result: a deeper, more complex brown that develops in seconds rather than minutes. The sauce is literally ACCELERATING the browning. This is why the sauce goes on IN THE PAN, not at the table — it needs heat to fulfil its second function.

PICKLED PAPAYA — THE PALATE RESET:
Green papaya's function is purely textural and acidic. Its crunch (from intact plant cell walls + calcium pectate) provides a RAW crunch that contrasts with the FRIED crunch of the rice cake — same acoustic property, completely different mouthfeel. Its acidity (from the rice vinegar pickle) cuts through the oil-richness of each bite, resetting the palate.

The chili in the pickle is not for heat — it's for the endorphin micro-dose that creates the "just one more piece" compulsion loop. Capsaicin + fat (from the fried cubes) + sugar (from the sauce) + acid (from the pickle) activates all four reward pathways simultaneously. This is engineered addictiveness.

EATING TEMPERATURE — THE 5-MINUTE WINDOW:
Bột chiên is best between 1-5 minutes after leaving the pan:
→ At 0 minutes: too hot, steam burns, can't taste subtleties
→ At 1-3 minutes: optimal — crust still crispy, interior still warm-soft, egg still yielding
→ At 5-8 minutes: the interior starch begins retrograding AGAIN as it cools, firming up and losing the pudding quality
→ At 15+ minutes: the crust has softened (moisture migration from interior), the starch is firm-cold, the egg is rubbery. Inedible by bột chiên standards.

Street vendors serve it on a metal plate with a small portable burner underneath — keeping the bottom face in contact with heat while you eat, maintaining the crust on at least ONE face throughout the meal.`,
      tip: "The pickled papaya must be GREEN (unripe), never orange/ripe. Green papaya is 92% water + intact pectin cell walls = maximum crunch. Ripe papaya has softened pectin (pectinase enzyme activity during ripening) and higher sugar content — it would turn mushy in the pickle and add unwanted sweetness to an already sweet dish. The crunch of green papaya is structural, not a flavour choice."
    }
  ],

  tips: [
    {
      title: "The Cholon vs. Central Saigon Divide",
      content: "Cholon (District 5/6) bột chiên uses lard for frying and often adds preserved Chinese sausage (lạp xưởng) diced into the egg mixture — adding a sweet, waxy pork fat dimension. Central Saigon bột chiên uses vegetable oil and keeps the egg pure. The Cholon version is richer and more complex; the Central version is cleaner and lets the starch texture speak. Both are 'authentic' — they represent different migration generations of the same Teochew ancestor dish."
    },
    {
      title: "Rice Flour Selection — Why NOT Glutinous",
      content: "Glutinous rice flour (bột nếp) is 99% amylopectin and nearly 0% amylose. Without amylose, the steamed gel CANNOT retrograde into a firm, sliceable block — it stays sticky, stretchy, and mochi-like. Regular rice flour's 20-25% amylose content is the structural backbone. Using glutinous rice flour for bột chiên is like trying to build a brick wall with chewing gum instead of morite — same basic material, completely wrong mechanical properties."
    },
    {
      title: "The Cast Iron Advantage",
      content: "Cast iron's thermal mass (high specific heat capacity × high density = massive energy storage) means that when cold rice cubes hit the surface, the pan temperature drops minimally. A thin non-stick pan loses 30-40°C on contact; cast iron loses 5-10°C. This temperature stability is why cast iron produces the most consistent, even Maillard crust. Saigon street vendors use thick steel plancha griddles that weigh 8-10kg — pure thermal mass."
    },
    {
      title: "The Retrogradation Clock",
      content: "Starch retrogradation is reversible. If you reheat a retrograded rice cake (microwave or steam), the amylose crystals melt back into a gel — the block becomes soft again. Then upon re-cooling, it retrogrades AGAIN, but this time forming a slightly different crystal structure (polymorphism). This second retrogradation produces a DENSER, more resistant starch network. So: steam → cool → reheat → re-cool produces a firmer block than a single steam → cool cycle. Some vendors exploit this with a deliberate reheat step before the final refrigeration."
    },
    {
      title: "Chai Tow Kway Connection",
      content: "Singapore and Malaysia call this dish 'chai tow kway' (fried carrot cake) — same Teochew ancestor, but they kept the daikon radish and offer both 'white' (no sweet soy) and 'black' (with sweet soy) versions. The Saigon version is closest to Singaporean 'black' chai tow kway minus the radish. Penang has 'char koay kak' — same concept, smaller cubes, more egg. Each city calibrated the ratio differently: Singapore = balanced, Penang = more egg, Saigon = more starch. The diaspora mapped its identity onto a rice flour cube."
    },
    {
      title: "School-Gate Economics",
      content: "Bột chiên is one of Saigon's quintessential after-school snacks (món ăn vặt). Vendors set up directly outside school gates at 4-5 PM, timing their production to the dismissal bell. The dish costs 15,000-25,000 VND ($0.60-1.00 USD) per portion — priced for a student's daily pocket money. The portable griddle setup requires only: a gas burner, a flat pan, pre-steamed rice cake blocks (prepared at home), eggs, soy sauce, and a squeeze bottle of chili sauce. Total equipment investment under $50 USD. This low barrier to entry makes bột chiên one of the most accessible micro-entrepreneurship opportunities in Vietnamese street food."
    }
  ],

  nutrition: {
    calories: "380 kcal per serving",
    protein: "12g — primarily from egg",
    carbs: "48g — primarily from rice starch + soy sauce sugars",
    fat: "16g — absorbed frying oil + egg fat",
    fiber: "1g",
    sodium: "890mg — from soy sauce",
    vitamins: "Folate from egg, vitamin A from egg yolk, iron from soy sauce"
  },

  relatedRecipes: [
    {
      title: "Crispy Vietnamese Sizzling Pancake",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
      slug: "banh-xeo",
      description: "Another rice flour creation — batter poured thin and crispy instead of steamed and cubed"
    },
    {
      title: "Saigon Broken Rice Plate",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400",
      slug: "com-tam",
      description: "Saigon's other starch-based street icon — fractured rice grains under grilled pork"
    },
    {
      title: "Lemongrass Pork Bánh Mì",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400",
      slug: "banh-mi",
      description: "Another Saigon street food with cross-cultural DNA — French bread, Vietnamese soul"
    }
  ],

  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Bột Chiên — Saigon Fried Rice Flour Cake",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "description": "Saigon-style fried rice flour cake — steamed rice starch cubes pan-fried until golden on two faces, scrambled with egg, drizzled with sweet soy sauce, served with pickled green papaya. A Teochew immigrant dish that became Saigon's quintessential after-school snack.",
    "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=1200",
    "prepTime": "PT4H30M",
    "cookTime": "PT20M",
    "totalTime": "PT5H",
    "recipeYield": "4 servings",
    "recipeCategory": "Main Course",
    "recipeCuisine": "Vietnamese",
    "keywords": "bột chiên, fried rice flour cake, Saigon street food, Cholon, Teochew, chai tow kway, egg fried cake, sweet soy sauce, Vietnamese snack, after-school food, rice starch, fried carrot cake",
    "recipeIngredient": [
      "300g rice flour",
      "50g tapioca starch",
      "600ml water",
      "4 large eggs",
      "4 tablespoons cooking oil",
      "4 stalks green onion",
      "3 tablespoons dark soy sauce",
      "2 tablespoons sugar",
      "200g green papaya",
      "2 tablespoons rice vinegar",
      "Chili sauce for dipping"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Mix rice flour, tapioca starch, salt, oil and water into smooth batter. Pour into oiled 20cm pan, 3-4cm deep." },
      { "@type": "HowToStep", "text": "Steam for 35-45 minutes until fully set and translucent. Cool to room temperature, then refrigerate minimum 2 hours (overnight ideal)." },
      { "@type": "HowToStep", "text": "Cut the chilled rice cake into 2.5-3cm cubes. Let cut surfaces air-dry 15 minutes." },
      { "@type": "HowToStep", "text": "Heat oil in a flat pan over medium-high. Place cubes in single layer. Do NOT move for 3 minutes until golden crust sets. Flip once, fry 2-3 minutes more." },
      { "@type": "HowToStep", "text": "Push cubes aside, add egg. Let egg set 30 seconds, then push cubes back onto egg. Break egg into rough pieces with spatula. Add green onions." },
      { "@type": "HowToStep", "text": "Drizzle sweet soy sauce, toss gently 30 seconds. Serve immediately with pickled green papaya and chili sauce." }
    ],
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "380 kcal",
      "proteinContent": "12g",
      "carbohydrateContent": "48g",
      "fatContent": "16g",
      "fiberContent": "1g"
    }
  }
};

export default function BotChienPage() {
  return <RecipeLayout recipe={recipeData} />;
}
