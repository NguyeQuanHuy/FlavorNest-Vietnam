'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: "Xôi Gà",
  subtitle: "Vietnamese Sticky Rice with Chicken — Where Amylopectin Architecture Meets the Physics of Shredding and the Chemistry of Fried Shallots",
  heroImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
  prepTime: "30 min (+ 4 hrs soaking)",
  cookTime: "45 min",
  servings: "4",
  difficulty: "Intermediate" as const,
  region: "Southern" as const,
  province: "Sài Gòn",

  introduction: `Xôi gà is Vietnam's breakfast architecture: a mound of steamed glutinous rice, impossibly glossy and cohesive, crowned with hand-shredded chicken, a cascade of fried shallots, and a drizzle of chicken fat that sinks between the grains like mortar between bricks. It is sold from aluminium pots wrapped in quilted blankets on the back of motorbikes, from glass-fronted carts at market corners, and from storefronts where the xôi lady — always a woman, almost without exception — has been serving the same mound since 4:30 AM. By 8:00 AM, the pot is empty. By 8:30 AM, she is gone. Xôi gà operates on a clock that respects only one truth: breakfast waits for nobody.

The rice is gạo nếp — glutinous rice, also called sticky rice or waxy rice (Oryza sativa var. glutinosa). Despite the name, it contains ZERO gluten. "Glutinous" refers to its glue-like stickiness when cooked, which comes from its starch composition. Normal rice (gạo tẻ) contains 20-25% amylose (linear starch chains) and 75-80% amylopectin (branched starch chains). Glutinous rice contains less than 1% amylose and 99%+ amylopectin. This single molecular difference — the near-total absence of amylose — creates an entirely different physical material when cooked.

Amylose, being linear, forms tight crystalline structures when it cools (retrogradation). This is why regular rice hardens when refrigerated — the amylose chains re-crystallise into an ordered lattice, expelling water. Amylopectin, being branched like a tree, CANNOT retrograde efficiently. Its branches get in each other's way, preventing crystallisation. This means glutinous rice stays soft and pliable even when cold — it doesn't harden, doesn't dry out, doesn't become crunchy. A ball of xôi wrapped in banana leaf at 6 AM is still soft at noon. This anti-retrogradation property is why xôi is the only rice format that works as portable street food — it maintains its texture for hours without reheating.

The stickiness itself comes from amylopectin's branched architecture. When glutinous rice is steamed (not boiled — steamed, a critical distinction), the amylopectin granules absorb water and swell, but they don't fully dissolve into the cooking water the way they would during boiling. Instead, the swollen granules press against each other, and the amylopectin branches from adjacent granules entangle — like two trees growing into each other. These inter-granular entanglements create a continuous sticky network that holds the rice mass together. Pulling apart a clump of xôi requires enough force to disentangle thousands of these molecular bridges. This is why xôi holds its shape when pressed into a mound, why it can be eaten with hands rather than chopsticks, and why each grain adheres to its neighbours with surprising tenacity.

The chicken component is not just "chicken on rice." The bird is poached whole in a carefully maintained sub-simmer — 80-85°C, never boiling — until the meat releases from the bone with gentle pulling but hasn't contracted into dry fibres. The poaching liquid becomes the broth that enriches the rice. The chicken is then shredded by hand — not chopped, not sliced, SHREDDED — along the muscle fibre grain. This produces irregular, wispy threads that have maximum surface area for absorbing the chicken fat drizzle and for trapping fried shallot fragments in their tangles. A knife would produce flat surfaces; a machine would produce uniform strands. Only hand-shredding creates the three-dimensional tangle of fibres that defines xôi gà's textural identity.

The fried shallots are the acoustic element. In a dish that is otherwise soft (rice, chicken), they provide the only crunch — and they provide it generously. A proper xôi gà has enough fried shallots that every spoonful produces multiple crunch events, creating an auditory rhythm against the silence of the soft components. The shallots also provide Maillard flavour (deep, caramelised sweetness), and their residual oil becomes part of the fat system that lubricates each bite. And the shallot oil — pale gold, intensely aromatic — is often the FAT drizzled over the rice rather than pure chicken fat. It is simultaneously garnish, seasoning, and cooking medium.

Xôi gà is one of the oldest continuous breakfast formats in Vietnamese food culture. Archaeological evidence from the Đông Sơn culture (700 BCE - 200 CE) shows glutinous rice cultivation in the Red River Delta. The Bronze Age drums of this period depict communal rice preparation scenes. While we cannot know if they shredded chicken over it, the glutinous rice steaming technique is at least 2,700 years old — making xôi one of the longest-running food technologies in human history, predating bread in most European cultures.`,

  ingredients: [
    {
      group: "Sticky Rice",
      items: [
        "500g glutinous rice (gạo nếp — look for Vietnamese or Thai sticky rice, NOT Japanese mochigome)",
        "1 teaspoon salt",
        "1 tablespoon cooking oil or chicken fat — for coating grains",
        "200ml chicken broth (from poaching) — for enriching the rice during steaming",
        "1 pandan leaf (lá dứa) — optional, tied in a knot, for fragrance"
      ]
    },
    {
      group: "Poached Chicken",
      items: [
        "1 whole chicken (approximately 1.5-1.8kg) — free-range preferred for firmer texture",
        "3 litres water",
        "3 slices ginger (2cm thick)",
        "2 stalks spring onion — white parts, bruised",
        "1 tablespoon salt",
        "1 teaspoon sugar",
        "1 teaspoon whole black peppercorns"
      ]
    },
    {
      group: "Fried Shallots & Shallot Oil",
      items: [
        "200g shallots (approximately 10-12 medium) — peeled and thinly sliced (2mm uniform)",
        "200ml neutral cooking oil — for deep-frying"
      ]
    },
    {
      group: "Garnish & Serving",
      items: [
        "Vietnamese coriander (rau răm) — roughly torn",
        "Fresh cilantro (ngò rí)",
        "Ground black pepper",
        "Soy sauce or Maggi seasoning — optional dipping",
        "Fresh chilies — sliced, optional",
        "Chicken liver pâté — optional, traditional accompaniment"
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: "Soak the Glutinous Rice — The 4-Hour Hydration Protocol",
      detail: `Rinse the glutinous rice in cold water 3-4 times until the water runs relatively clear. Then submerge in cold water with at least 5cm of water above the rice surface. Soak for a MINIMUM of 4 hours, or overnight (8-12 hours).

THE SOAKING IMPERATIVE — MOLECULAR HYDRATION:

Glutinous rice MUST be soaked before steaming. This is not a suggestion — it is a physical requirement. Here's why:

RAW STARCH GRANULE STRUCTURE:
Each grain of raw glutinous rice contains starch granules — microscopic packets of amylopectin chains arranged in semi-crystalline rings (like tree growth rings). These rings alternate between crystalline regions (ordered, dense, water-resistant) and amorphous regions (disordered, less dense, water-permeable).

Water penetrates the amorphous regions first — they're the weakest point in the granule's defences. From there, water slowly infiltrates the crystalline regions, disrupting the hydrogen bonds that hold the amylopectin chains in their ordered arrangement. This process takes TIME because the crystalline regions resist water penetration — they're designed by evolution to be storage structures, not easily accessed.

WHY 4 HOURS MINIMUM:
At room temperature (25°C), water penetration through the amorphous regions and into the first layers of crystalline structure takes approximately 2-3 hours. Full hydration of the granule core requires 4-6 hours. After 4 hours, the grains have absorbed approximately 30-35% of their dry weight in water. This pre-hydration is essential because:

1. STEAM ALONE IS INSUFFICIENT: During steaming, the rice is exposed to steam (100°C water vapour), not liquid water. Steam provides heat but LIMITED water delivery — the water condenses on grain surfaces, but the volume is far less than submersion. If the grain cores aren't pre-hydrated, the outer layers gelatinise (cook) while the cores remain raw — creating grains that are mushy outside and gritty inside.

2. UNIFORM GELATINISATION: Pre-soaked grains have water distributed evenly throughout. When steam heat reaches 60-70°C (the gelatinisation temperature of glutinous rice amylopectin), the entire granule gelatinises simultaneously — outer and inner layers together. This produces the characteristic TRANSLUCENT, UNIFORMLY STICKY texture. Under-soaked grains gelatinise unevenly, producing rice with opaque white centres (uncooked starch) and sticky exteriors — a common failure.

3. REDUCED STEAMING TIME: Fully soaked rice steams in 25-30 minutes. Under-soaked rice requires 45-60 minutes of steaming, during which the outer layers become over-hydrated and pasty while the cores slowly catch up. The longer steaming destroys the grain integrity that makes good xôi texturally distinct from congee.

THE OVERNIGHT ADVANTAGE:
8-12 hours of soaking allows water to penetrate even the most resistant crystalline regions at the granule core. The result: the most uniform gelatinisation, the most translucent grains, the most cohesive sticky texture. Vietnamese xôi vendors universally soak overnight — they begin soaking at night and steam at 3-4 AM for the morning rush.`,
      tip: "Add 1 teaspoon of salt to the soaking water. The sodium ions (Na⁺) from the salt penetrate the grain alongside the water and interact with the amylopectin's hydroxyl groups, slightly weakening inter-chain hydrogen bonds. This pre-weakening means the grains gelatinise faster and more completely during steaming, producing a softer, more cohesive xôi. The salt also seasons the rice from the inside out rather than surface-only."
    },
    {
      step: 2,
      title: "Poach the Chicken — Sub-Simmer Protein Denaturation",
      detail: `Place the whole chicken in a large pot. Add cold water, ginger, spring onion whites, salt, sugar, and peppercorns.

Bring to a boil over high heat. As soon as the water reaches a rolling boil, IMMEDIATELY reduce heat to the lowest setting that maintains tiny, occasional bubbles — 80-85°C. This is a sub-simmer, not a simmer.

SKIM any foam and scum that rises in the first 5 minutes — these are coagulated blood proteins and albumin that would cloud the broth and coat the chicken skin with grey residue.

Poach for 35-40 minutes for a 1.5kg chicken (add 5 minutes per 200g above that).

THE 80-85°C DOCTRINE — WHY NOT BOIL:

Chicken muscle is composed of bundles of myosin and actin protein filaments arranged in parallel fibres, surrounded by collagen-rich connective tissue (endomysium, perimysium, epimysium — three nested sheaths of collagen, from finest to coarsest).

At 62-65°C: Myosin denatures. The protein unfolds and cross-links with neighbouring molecules, causing the muscle to firm. At this stage, the meat is cooked through (safe to eat) but still tender — the fibres have set but haven't contracted significantly.

At 70-75°C: Actin denatures. Actin contraction squeezes water out of the muscle fibres. The meat begins to dry out and firm noticeably. However, at this temperature, the collagen in the connective tissue also begins converting to gelatin — softening the tissue that holds the fibre bundles together.

At 80-85°C (OUR TARGET): Collagen-to-gelatin conversion is well underway. The connective tissue between fibre bundles softens enough that the bundles can be PULLED APART with gentle force — i.e., hand-shredded. The meat is firm enough to hold its fibre structure but soft enough that the fibres separate cleanly along natural grain lines. This is the Goldilocks zone for shreddable chicken.

At 100°C (BOILING): The violent agitation of a rolling boil does two things: (1) it physically tears the chicken apart — skin ruptures, meat breaks irregularly, bones may separate; (2) the high heat causes rapid, aggressive protein contraction that squeezes ALL moisture out of the muscle fibres, producing dry, stringy meat that shreds into sawdust rather than silky threads.

THE ICE BATH — POST-POACH SHOCK:
After poaching, transfer the chicken to an ice bath (or cold water) for 10 minutes. This serves two purposes:

1. SKIN TIGHTENING: The rapid temperature drop contracts the skin's collagen, creating a taut, glossy surface. If the chicken cools slowly at room temperature, the skin remains slack and wrinkled.

2. HALTING CARRYOVER COOKING: The chicken's internal temperature continues rising for 5-10 minutes after removal from the pot (carryover cooking from residual heat). Without an ice bath, a perfectly poached chicken becomes an overcooked one during resting. The ice bath stops this immediately.

RESERVE THE BROTH — it is liquid gold. 200ml goes into the sticky rice during steaming. The rest makes exceptional soup or sauce base.`,
      tip: "Test doneness by inserting a chopstick deep into the thickest part of the thigh. Pull it out and touch it to your lower lip — if it's uniformly hot throughout (no cool spots), the chicken is done. Alternatively: pierce the thigh joint with a knife — the juices should run clear (no pink). The thigh is always the last part to cook because it's the thickest and has the most connective tissue."
    },
    {
      step: 3,
      title: "Shred the Chicken — Fibre Grain Physics",
      detail: `Remove the chicken from the ice bath. Pat dry.

Remove the skin — set aside (optional: slice and add to serving, or fry until crispy as a garnish).

Pull the meat from the bones. Start with the breast, then the thighs, then the drumsticks. Keep dark and white meat separate if you want to control the ratio on the finished plate.

SHRED BY HAND — pulling ALONG the muscle fibre grain, not across it.

THE PHYSICS OF SHREDDING:

Chicken muscle fibres run in parallel bundles — like a cable made of thousands of individual wires. Each "wire" is a muscle fibre approximately 50-100 micrometers in diameter and several centimeters long.

PULLING ALONG THE GRAIN:
→ Your fingers separate the bundles at their natural junction points — the collagen-weakened boundaries between fibre groups
→ The fibres stay intact (long, thin, wispy)
→ Maximum surface area per gram of chicken
→ Each strand has irregular edges and loose fibrillar ends (fraying)
→ These frayed ends create HOOKS that trap shallots and absorb fat

CUTTING ACROSS THE GRAIN (with a knife):
→ Each cut severs thousands of fibres simultaneously
→ Produces flat, smooth surfaces with minimal surface area
→ No fraying, no hooks — shallots slide off, fat beads on the surface
→ Texture is mealy rather than stringy

MACHINE SHREDDING:
→ Mechanical shredders pull too aggressively — they snap fibres mid-length
→ Produces short, uniform strands that lack the wispy irregularity
→ Acceptable for volume operations but texturally inferior

The ideal shredded chicken fibre is 3-5cm long, has visible sub-fibre fraying at both ends, and is thin enough to be partially translucent when held to light. It should look like pulled pork's Vietnamese cousin — long, irregular, and tangle-prone.

DARK VS WHITE MEAT:
Breast (white): lower collagen, more uniform fibres, cleaner shred, milder flavour, drier. Best for the "snow-capped mountain" aesthetic — bright white threads on yellow rice.

Thigh/drumstick (dark): higher collagen (more gelatin when cooked), more irregular fibres, juicier, richer flavour. Produces more texturally interesting shreds — some thick, some thin, some with connective tissue "glue" that holds small clusters together.

The Saigon xôi gà standard uses BOTH — mixed together so each bite has the clean threads of breast AND the juicy clusters of thigh. The visual contrast (white and darker threads intermingled) signals authenticity.`,
      tip: "While shredding, keep your hands slightly oiled with chicken fat or cooking oil. The fat prevents the chicken fibres from sticking to your hands and tearing in wrong places. It also pre-lubricates the fibres, ensuring the final drizzle of shallot oil distributes evenly. Professional xôi vendors shred with a specific rhythm: pull-tear-drop, pull-tear-drop — never pulling more than two fingers' width at a time."
    },
    {
      step: 4,
      title: "Steam the Sticky Rice — Amylopectin Gelatinisation",
      detail: `Drain the soaked rice thoroughly. Toss with 1 tablespoon oil or chicken fat and 1 teaspoon salt.

Line a steamer basket with cheesecloth or a clean muslin cloth. Spread the rice evenly, about 3-4cm thick. Poke 5-6 holes through the rice with your finger or a chopstick — these are STEAM CHANNELS.

If using a pandan leaf, tie it in a knot (rupturing the cells to release fragrance) and place it on top of the rice.

Steam over vigorously boiling water for 15 minutes.

After 15 minutes, SPRINKLE 200ml warm chicken broth evenly over the rice. Use a spoon to gently fold the rice — bringing bottom rice to the top — to redistribute moisture.

Continue steaming for another 10-15 minutes until the rice is translucent and uniformly sticky.

THE STEAMING METHOD — WHY NOT BOILING:

This is the most critical technical distinction in xôi preparation.

BOILING (submerging rice in water):
→ Excess water dissolves the amylopectin from the outer granules into the cooking water
→ The water becomes starchy and thick (the starch that should be IN the rice is now IN the water)
→ Grains lose their integrity — outer layers dissolve, creating mush
→ The result is congee or porridge, not xôi
→ Draining boiled glutinous rice produces a soggy, pasty mass with no grain definition

STEAMING (exposing rice to steam above boiling water):
→ Steam delivers HEAT without excess water — the rice receives only the water that condenses on its surface
→ Each grain retains its amylopectin — nothing dissolves into a cooking liquid
→ Gelatinisation happens INSIDE each grain rather than in a water bath
→ Grains swell, become translucent, and stick to EACH OTHER through surface amylopectin entanglement
→ Individual grains are still distinguishable (plump, glossy, distinct) but firmly bonded to neighbours

THE STEAM CHANNELS:
The holes poked in the rice layer are essential. Without them, the rice forms a dense, compacted mass that blocks steam penetration. The channels allow steam to rise through the rice bed, ensuring even heat distribution:

→ Bottom layer: direct steam contact → cooks first → often slightly wetter
→ Middle layer: steam rising through channels → even cooking
→ Top layer: steam that has passed through the lower layers → cooks last → often slightly drier

THE BROTH ADDITION AT 15 MINUTES:
At the 15-minute mark, the outer grains are gelatinised but the inner grains (especially in the top layer) may still have opaque centres. The chicken broth provides:

1. ADDITIONAL MOISTURE: The water in the broth compensates for the inherent unevenness of steam distribution, ensuring the top layer fully gelatinises.

2. FLAVOUR INTEGRATION: The glutamate, gelatin, and aromatic compounds in the broth are absorbed directly into the rice granules during the final phase of gelatinisation — when the starch network is most open and absorbent. Broth added at this stage becomes PART of the rice's flavour, not a surface coating. This is why xôi gà tastes like chicken throughout, not just on top.

3. FAT DELIVERY: The chicken fat in the broth coats individual grains with a lipid layer that does two things: (a) prevents excessive inter-granular sticking (so the xôi is cohesive but not gummy — individual grains can still be distinguished), and (b) gives each grain a glossy, luminous appearance — the characteristic "golden glow" of well-made xôi gà.

DONENESS TEST:
Press a grain between your fingers. It should flatten completely with no gritty core. It should be translucent (no white/opaque centre). The mass should hold together when pressed but yield to gentle pulling — sticky but not gluey.`,
      tip: "The professional secret: steam the rice in two layers separated by a thin cloth. Bottom layer (60% of rice) steams for 15 minutes, then flip the top layer to the bottom. This ensures that every grain has spent time in both the high-moisture bottom position and the drier top position, producing the most uniform texture. The broth is sprinkled between the layers during the flip."
    },
    {
      step: 5,
      title: "Fry the Shallots — The Maillard Cascade",
      detail: `Peel and slice shallots into uniform 2mm rings. Uniformity is CRITICAL — uneven slices produce a mix of burnt and undercooked shallots in the same batch.

Place sliced shallots and all the oil in a cold pan or wok. YES — start cold.

Turn heat to MEDIUM. The shallots and oil heat together gradually.

Stir frequently. Watch the colour progression:
→ 0-5 minutes: shallots soften in the oil, releasing moisture (bubbling = water evaporating)
→ 5-8 minutes: bubbling decreases as moisture depletes, shallots start turning pale gold
→ 8-10 minutes: golden colour deepens, edges start browning — THE CRITICAL WINDOW
→ 10-12 minutes: shallots are deep golden-brown — PULL THEM OUT NOW

Strain the shallots through a fine mesh strainer over a bowl. The oil in the bowl is your SHALLOT OIL — liquid gold.

Spread the fried shallots on paper towels in a single layer. They will continue darkening from residual heat for 30-60 seconds.

THE COLD START METHOD — CONTROLLED DEHYDRATION:

Starting shallots in cold oil is the opposite of normal frying technique (which starts with hot oil). The reason:

HOT OIL START:
→ Shallot slices hit 180°C oil instantly
→ Surface dehydrates and browns in seconds
→ Interior remains raw and moist
→ Result: burnt exterior, soggy interior
→ Or: if you reduce heat to compensate, the extended frying leaches too much moisture into the oil, lowering the oil temperature, and the shallots ABSORB oil instead of crisping — greasy, limp shallots

COLD OIL START:
→ Shallots and oil heat TOGETHER at the same rate
→ Internal moisture migrates to the surface GRADUALLY as the temperature rises
→ Surface browning begins only AFTER most internal moisture has evaporated
→ Result: dehydrated uniformly from inside out, then browned from outside in
→ The shallot becomes a crispy shell with no soggy centre
→ Residual oil content is LOWER because the shallot was already dehydrated before the oil reached frying temperature

THE MAILLARD SWEET SPOT — 150-170°C:
Shallots contain 5-8% sugar (fructose + glucose + sucrose) and 1-2% amino acids (mostly glutamic acid and alanine). When the surface temperature reaches 150°C, the Maillard reaction begins: sugars react with amino acids to produce hundreds of flavour compounds — pyrazines (nutty, roasted), furanones (caramel), thiophenes (meaty), and melanoidins (the brown colour itself, which contributes bitter-sweet depth).

Above 170°C, pyrolysis begins — the sugars decompose rather than react, producing acrid, bitter compounds. The window between "perfectly caramelised" (150-170°C) and "acrid burnt" (170°C+) is NARROW — perhaps 30-60 seconds at medium heat. This is why you must watch and pull them early: carryover heat will push them from golden to perfect brown during the 60 seconds on paper towels.

THE PULL-EARLY PRINCIPLE:
Remove shallots when they are LIGHTER than your target colour. Residual heat from the oil they've absorbed + carryover from the metal strainer will darken them by 1-2 shades. If they look perfect in the pan, they'll be burnt on the plate. If they look slightly underdone in the pan, they'll be perfect on the plate.`,
      tip: "Save ALL the shallot oil. It keeps refrigerated for 2-3 weeks and is the single most versatile finishing oil in Vietnamese cooking. Drizzle over rice, noodles, steamed vegetables, congee, or any grilled meat. The oil contains dissolved Maillard compounds from the shallots — it IS liquid flavour. Two tablespoons of shallot oil can elevate a mediocre bowl of instant noodles into something worth eating slowly."
    },
    {
      step: 6,
      title: "Assemble — Architecture, Not Piling",
      detail: `This is construction, not decoration. The order matters.

LAYER 1 — THE FOUNDATION (Rice):
Mound the steamed sticky rice on a plate, pressing gently into a dome or a flat oval. The rice should be warm — not screaming hot (which would steam the toppings) and not cold (which would resist the fat drizzle). 65-75°C is ideal.

Drizzle 1-2 tablespoons of shallot oil over the rice mound. Watch it sink between the grains — the oil migrates by capillary action into the spaces between rice grains, coating each one with flavour and fat. This drizzle is NOT optional. Without it, the rice is dry and the xôi is just sticky rice with chicken on top. With it, the rice is lubricated, flavoured, and glossy — each grain slides against its neighbour with a satisfying friction that is neither gummy (too wet) nor crumbly (too dry).

LAYER 2 — THE PROTEIN (Chicken):
Arrange the shredded chicken over the rice. Don't compact it — let it sit in a loose, airy tangle. The air spaces between chicken fibres are FLAVOUR TRAPS — they hold shallot oil, they catch shallot fragments, and they allow steam from the warm rice below to rise through the chicken, carrying aroma to the nose.

Drizzle another tablespoon of shallot oil over the chicken. The oil darkens the fibres from white to ivory-gold and visually unifies the chicken with the rice below.

LAYER 3 — THE CRUNCH (Fried Shallots):
Scatter fried shallots generously — MORE than you think is right. Xôi gà without enough fried shallots is like a cake without frosting — structurally complete but emotionally disappointing. The shallots should partially cover the chicken, with some falling onto the exposed rice at the edges.

LAYER 4 — THE AROMATICS (Herbs & Pepper):
Scatter torn rau răm and cilantro. A generous crack of black pepper. Sliced chilies if desired.

THE OPTIONAL FIFTH ELEMENT — Chicken Liver Pâté:
Traditional Saigon xôi gà often includes a smear of pâté (influenced by French colonial cuisine) — silky, rich, slightly metallic. It's served as a small quenelle or thin layer between the rice and chicken. The pâté provides iron-rich depth and a creamy texture that bridges the chewy rice and the stringy chicken. Not all vendors offer it, and it's entirely optional, but its presence signals a vendor who understands the full flavour spectrum of the dish.

THE BANANA LEAF OPTION:
For portable xôi (the to-go version), assemble on a rectangle of banana leaf. The leaf imparts a subtle vegetal fragrance (from 2-acetyl-1-pyrroline — the SAME compound that gives jasmine rice its aroma and pandan its fragrance — a chemical coincidence that makes banana leaf and sticky rice natural partners). The leaf also provides a waterproof wrapper that keeps the shallot oil from soaking through. Fold into a neat rectangle. The banana leaf xôi is meant to be eaten within 2-3 hours — the amylopectin anti-retrogradation property buys you this window.`,
      tip: "The perfect bite contains ALL layers simultaneously: a spoonful that has rice at the bottom, chicken in the middle, and fried shallots on top. Don't eat top-to-bottom (chicken first, then rice) — that defeats the entire architectural purpose. The Vietnamese way: press the spoon DOWNWARD through all layers, scoop UPWARD to capture everything, then eat. Each mouthful should have the crunch of shallots, the pull of chicken, and the sticky yield of rice in one combined texture."
    }
  ],

  tips: [
    {
      title: "The Amylopectin Spectrum — Not All Sticky Rice Is Equal",
      content: "Within the glutinous rice category (all >99% amylopectin), there are varietals with subtle differences: Vietnamese gạo nếp cái hoa vàng (golden flower sticky rice) — considered the premium variety, grown primarily in northern Vietnam (Hải Dương, Bắc Ninh), with a natural fragrance from 2-acetyl-1-pyrroline (the same compound in jasmine rice and basmati). Thai sticky rice (khao niao) — slightly firmer grain, preferred for Southeast Asian sticky rice in general. Lao sticky rice — very similar to Thai, often indistinguishable. Japanese mochigome — shorter grain, higher moisture retention, produces MUCH stickier rice (designed for mochi, not xôi) — NOT recommended for xôi gà as it becomes too gummy. For xôi gà specifically, Vietnamese or Thai long-grain glutinous rice is the standard."
    },
    {
      title: "The Shallot Oil Economy — Why Vietnamese Cooks Never Discard It",
      content: "Making fried shallots produces two products of equal value: the crispy shallots AND the oil. The oil contains: dissolved Maillard compounds (pyrazines, furanones — flavour), dissolved allicin derivatives (the onion-family flavour compounds that survived the frying temperature — they're heat-stable up to 190°C), carotenoids from the shallot's outer layers (giving the oil its golden colour), and a small amount of dispersed starch from the shallot cells (giving the oil a very slight body that makes it cling to food rather than running off). This oil is functionally equivalent to a compound butter in French cooking — a fat that carries flavour. It costs nothing beyond the shallots you were going to fry anyway, and it transforms simple foods. Keep it in a jar in the fridge."
    },
    {
      title: "Xôi Colour Variations — The Saigon Spectrum",
      content: "Xôi gà is the 'plain' version — natural rice colour (white to pale yellow from chicken fat). But Saigon's xôi ecosystem includes dozens of coloured variations, all using the same steaming technique: Xôi gấc (deep red-orange) — coloured with gấc fruit (Momordica cochinchinensis), which contains lycopene at 70× tomato concentration. Xôi lá cẩm (purple) — coloured with magenta plant (Peristrophe bivalvis) leaf extract, naturally pH-sensitive (turns red in acid, blue in alkaline). Xôi lá dứa (green) — coloured with pandan leaf juice. Xôi đậu xanh (yellow-spotted) — with mung beans, natural yellow from the bean. Xôi vò (translucent yellow) — coated with mung bean paste and turmeric. Each colour has its own traditional topping pairing, but xôi gà (plain + chicken) remains the breakfast staple."
    },
    {
      title: "The 4:30 AM Economy — How Xôi Vendors Operate",
      content: "A typical Saigon xôi gà vendor operates on this schedule: 8 PM — soak 5-10kg of glutinous rice. 2:30 AM — wake up, begin steaming rice in batches. 3:30 AM — begin poaching chicken (2-4 whole birds). 4:00 AM — fry shallots (the last step before service, as they must be fresh). 4:30 AM — first customers arrive (market workers, taxi drivers, construction workers). 5:00-7:30 AM — peak service. 8:00 AM — pot is usually empty. Revenue: 30-50 servings × 30,000-50,000 VND = 900,000-2,500,000 VND/day ($36-100 USD). Costs: rice + chicken + shallots + fuel ≈ 40-50% of revenue. Net income: $18-50/day for 10 hours of work. It's a living — but barely. The xôi ladies persist because the morning slot has minimal competition (no restaurant opens that early) and the startup cost is essentially zero (a pot, a steamer, a motorbike)."
    },
    {
      title: "Steaming Equipment — The Xửng and Alternatives",
      content: "The traditional Vietnamese steamer (xửng) is a multi-tiered aluminium stack: bottom pot holds boiling water, middle tiers hold the rice (each tier lined with cloth). The conical lid traps steam and channels condensation down the sides rather than dripping onto the rice (dripping creates soggy spots). At home: a bamboo steamer over a wok works perfectly — the bamboo absorbs excess moisture, preventing condensation drip. A metal steamer insert in a pot works too — just line the lid with a clean towel to absorb condensation before it drips. An instant pot in 'steam' mode works in a pinch but produces slightly wetter xôi due to the sealed pressure environment. NEVER use a microwave — it heats water molecules inside the grain directly, causing internal explosions that destroy the grain structure and produce a paste rather than distinct sticky grains."
    },
    {
      title: "The Chicken Fat Hierarchy",
      content: "In the xôi gà fat system, there are three fats in descending order of traditional importance: (1) Chicken fat (mỡ gà): rendered from the fat deposits around the chicken's cavity and neck during poaching. Yellow, fragrant, rich. The premium fat for drizzling over the rice — it carries the most 'chickeny' flavour. (2) Shallot oil (dầu hành phi): produced during frying shallots. Carries the entire Maillard spectrum of the shallots. Used both for drizzling and for mixing into the rice. (3) Cooking oil (dầu ăn): neutral, used only for coating grains before steaming to prevent clumping. The professional standard is to use chicken fat for rice enrichment AND shallot oil for finishing. Home cooks often use shallot oil for both. The flavour difference is noticeable — chicken fat gives a rounder, more 'meaty' richness; shallot oil gives a sharper, more aromatic brightness. The ideal plate uses both."
    }
  ],

  nutrition: {
    calories: "620 kcal per serving (200g rice + 120g chicken + shallots + oil)",
    protein: "32g — from poached chicken",
    carbs: "78g — glutinous rice is nearly pure amylopectin starch",
    fat: "18g — from shallot oil, chicken fat, and cooking oil",
    fiber: "1g — glutinous rice is low in fibre",
    sodium: "680mg — from salt and fish sauce",
    vitamins: "B1 (thiamine), B6, niacin, iron (from chicken dark meat), selenium"
  },

  relatedRecipes: [
    {
      title: "Saigon Broken Rice Plate",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400",
      slug: "com-tam",
      description: "The other iconic Saigon rice dish — broken jasmine rice with grilled pork"
    },
    {
      title: "Hanoi Beef Pho",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400",
      slug: "hanoi-beef-pho",
      description: "Another master-class in broth enrichment and protein handling"
    },
    {
      title: "Grilled Lemongrass Pork Chops",
      image: "https://images.unsplash.com/photo-1432139509613-5c4255a1d197?w=400",
      slug: "grilled-lemongrass-pork",
      description: "Lemongrass in a different role — as a marinade penetrator on grilled meat"
    }
  ],

  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Xôi Gà — Vietnamese Sticky Rice with Shredded Chicken",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "description": "Steamed glutinous rice enriched with chicken broth and fat, topped with hand-shredded poached chicken, generous fried shallots, and drizzled with golden shallot oil. Vietnam's definitive breakfast — portable, satisfying, and sold from motorbike pots across Saigon since 4:30 AM.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
    "prepTime": "PT4H30M",
    "cookTime": "PT45M",
    "totalTime": "PT5H15M",
    "recipeYield": "4 servings",
    "recipeCategory": "Main Course",
    "recipeCuisine": "Vietnamese",
    "keywords": "xôi gà, sticky rice chicken, Vietnamese sticky rice, glutinous rice, fried shallots, street food breakfast, Saigon breakfast, shredded chicken, steamed sticky rice, hành phi, shallot oil, Vietnamese breakfast",
    "recipeIngredient": [
      "500g glutinous rice",
      "1 whole chicken (1.5-1.8kg)",
      "200g shallots",
      "200ml cooking oil",
      "200ml chicken broth",
      "Ginger, spring onion, pandan leaf",
      "Vietnamese coriander and cilantro",
      "Fish sauce, salt, pepper"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Soak glutinous rice in salted cold water for minimum 4 hours, preferably overnight." },
      { "@type": "HowToStep", "text": "Poach whole chicken in sub-simmering water (80-85°C) with ginger and spring onion for 35-40 minutes. Ice bath after." },
      { "@type": "HowToStep", "text": "Hand-shred chicken along the muscle fibre grain into long, wispy threads." },
      { "@type": "HowToStep", "text": "Steam drained rice for 15 minutes, sprinkle with chicken broth, fold, steam 10-15 minutes more until translucent." },
      { "@type": "HowToStep", "text": "Cold-start fry sliced shallots in oil until deep golden. Strain — keep both the crispy shallots and the shallot oil." },
      { "@type": "HowToStep", "text": "Assemble: rice mound → shallot oil drizzle → shredded chicken → more shallot oil → generous fried shallots → herbs and pepper." }
    ],
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "620 kcal",
      "proteinContent": "32g",
      "carbohydrateContent": "78g",
      "fatContent": "18g",
      "fiberContent": "1g"
    }
  }
};

export default function XoiGaPage() {
  return <RecipeLayout recipe={recipeData} />;
}
