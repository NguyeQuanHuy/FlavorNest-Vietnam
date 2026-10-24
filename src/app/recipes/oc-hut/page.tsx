'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: "Ốc Hút",
  subtitle: "Saigon Sucking Snails — Where the Shell IS the Cooking Vessel, the Flavour Trap, and the Eating Utensil",
  heroImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
  prepTime: "45 min (+ 2 hrs purging)",
  cookTime: "25 min",
  servings: "4",
  difficulty: "Easy" as const,
  region: "Southern" as const,
  province: "Sài Gòn",

  introduction: `Ốc hút is the only dish in Vietnamese cuisine — possibly in any cuisine — where the eating method is encoded in the name. "Hút" means "to suck." You place the shell opening against your lips, create an airtight seal, and SUCK the snail out of its spiral home along with the concentrated sauce that has been trapped inside the shell's coiled interior. The sound — a sharp, wet "schlurp" followed by the pop of the snail releasing from the shell's columella — is the dish's acoustic signature, and a table of ốc hút in full swing sounds like a percussion ensemble of twenty mouths performing syncopated suction.

The shell is not packaging. It is the COOKING VESSEL. When snails are stir-fried in a lemongrass-chili-coconut sauce, each shell acts as a miniature pot: sauce enters through the opening, flows into the spiral channel (the shell's internal whorl), and is trapped there by capillary action and the shell's narrowing geometry. The sauce that reaches the deepest part of the spiral — where the snail's body is coiled — has been concentrated by the shell's decreasing diameter, creating a gradient: thin sauce at the opening, increasingly concentrated sauce deeper in, and maximum intensity at the snail itself. When you suck, this gradient reverses: the most concentrated flavour hits your palate FIRST, followed by progressively thinner sauce. This is a natural flavour crescendo-in-reverse that no plated presentation can replicate.

The snail used for ốc hút is typically the freshwater apple snail (ốc bươu, Pila polita) or the smaller pointed snail (ốc mỡ, Cipangopaludina lecythoides). Both are gastropods — single-shelled, spiral-housed molluscs that inhabit rice paddies, canals, and slow-moving waterways throughout southern Vietnam. Their meat is lean (82% water, 15% protein, 1.5% fat), mildly flavoured (comparable to clams, but earthier), and has a characteristic chewiness from collagen-rich connective tissue that resists overcooking far better than shrimp or fish. This resilience is a feature: the aggressive stir-fry technique (high heat, intense aromatics) would destroy delicate seafood, but snails absorb the punishment and emerge texturally intact.

The sauce is a masterclass in aromatic architecture. Lemongrass provides the citral-dominant base note. Bird's eye chilies provide capsaicin heat. Coconut milk provides fat-soluble flavour extraction. Satay paste provides depth and complexity. Fish sauce provides salt and umami. Together, they create a sauce that is simultaneously fragrant (lemongrass), hot (chili), rich (coconut), deep (satay), and savoury (fish sauce) — a five-dimensional flavour system where no single component dominates because the shell's interior BLENDS them during the cooking process. The shell acts as a mixing chamber: as heat conducts through the calcium carbonate walls, the sauce inside is agitated by convection currents within the spiral, blending the oil-soluble and water-soluble components into an emulsion that coats the snail's surface uniformly.

Ốc hút is quintessential nhậu food — beer-drinking food. Not because of any particular flavour pairing (though the salt-fat-acid-heat profile does complement cold beer perfectly), but because of the MECHANICS. Eating ốc hút is slow. Each snail requires: pick up → position → seal lips → suck → chew → discard shell. This cycle takes 8-12 seconds per snail. A plate of 30-40 snails takes 5-8 minutes of focused eating. During those minutes, conversation flows, beer is sipped between snails, and the communal rhythm of pick-suck-chew-discard-talk-drink creates the tempo of a nhậu session. The snails do not let you eat fast. They impose sociability by forcing pauses between bites.`,

  ingredients: [
    {
      group: "Snails",
      items: [
        "1kg fresh snails (ốc bươu — apple snails, or ốc mỡ — pointed snails)",
        "2 tablespoons salt — for initial cleaning",
        "2 tablespoons rice vinegar or lime juice — for purging",
        "1-2 fresh chilies — for purging water (helps snails expel gut contents faster)"
      ]
    },
    {
      group: "Lemongrass Chili Sauce",
      items: [
        "4 stalks lemongrass — white part only, finely minced (not sliced — minced for maximum oil release)",
        "5-6 bird's eye chilies (ớt hiểm) — finely chopped (adjust to taste)",
        "4 cloves garlic — minced",
        "3 shallots — minced",
        "2 tablespoons satay paste (sa tế) — Saigon-style, chili-lemongrass base",
        "100ml coconut milk (nước cốt dừa)",
        "2 tablespoons fish sauce",
        "1 tablespoon sugar",
        "2 tablespoons cooking oil",
        "1 tablespoon tamarind paste — optional, for sour note",
        "10-12 kaffir lime leaves (lá chanh) — chiffonade (very thinly sliced)",
        "1 teaspoon ground black pepper"
      ]
    },
    {
      group: "Serving",
      items: [
        "Vietnamese coriander (rau răm) — roughly torn, generous handful",
        "Toothpicks or safety pins — for snails that resist sucking",
        "Extra lime wedges",
        "Extra sliced chilies",
        "Cold beer — the culturally mandated pairing"
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: "Purge the Snails — Gut Clearance Protocol",
      detail: `Place live snails in a large basin of cold water. Add 2 tablespoons salt, 2 tablespoons rice vinegar, and 1-2 sliced chilies. Leave for 2-3 hours, changing the water twice.

THE PURGING IMPERATIVE — WHY 2-3 HOURS:

Freshwater snails are detritivores — they eat decomposing plant matter, algae, and whatever organic material they find in rice paddies and canals. Their digestive tract (the hepatopancreas, visible as a dark mass inside the shell) contains this partially digested material along with the microbiome that processes it. Eating an unpurged snail means eating its last several meals along with the bacteria that were digesting them.

THE PURGING MECHANISM:
When snails are placed in salted, acidified water:

1. OSMOTIC STRESS: The salt concentration (approximately 3-4% NaCl solution) is higher than the snail's internal fluid osmolarity (~0.9% NaCl equivalent). Water flows OUT of the snail's body via osmosis, triggering a defensive mucus secretion. This mucus — thick, glossy, slightly viscous — carries gut contents with it as the digestive tract contracts.

2. pH STRESS: The vinegar (acetic acid, pH ~3) or lime juice (citric acid, pH ~2.5) lowers the water's pH below the snail's comfort zone (pH 6.5-7.5). The acidic environment further stimulates gut contraction and mucus expulsion. The snail is essentially performing an accelerated bowel movement.

3. CAPSAICIN STRESS (from the chilies): Snails have TRPV1 receptors (the same receptors that make humans feel chili "heat"). Capsaicin activates these receptors, causing irritation in the digestive tract and accelerating the gut-clearing process. The chili is not traditional — it's a Saigon shortcut that reduces purging time from 6-8 hours (salt-only) to 2-3 hours (salt + acid + capsaicin).

WATER CHANGES:
After 1 hour, the water will be cloudy with expelled mucus and gut contents. Drain, refill with fresh salted-acidified water. The second soaking extracts residual material. By hour 2-3, the water should be relatively clear — indicating the snails have expelled most gut contents.

AFTER PURGING:
Scrub each shell individually under running water using a stiff brush (a toothbrush works). The exterior accumulates algae, mud, and biofilm that contribute off-flavours. Pay special attention to the spiral ridges where debris collects. The shells should feel rough-clean, not slimy.

CHECK FOR DEAD SNAILS:
Tap the operculum (the "door" — the hard plate that seals the shell opening). A live snail retracts and pulls its operculum tight. A dead snail's operculum is loose or the body hangs limply out of the shell. Discard any dead snails — they decompose RAPIDLY (within hours, bacterial load reaches dangerous levels), and one dead snail in the pan can contaminate the entire batch.`,
      tip: "Vietnamese grandmothers add a handful of fresh chilies AND a sliced taro stem (dọc mùng) to the purging water. The taro stem releases calcium oxalate raphides — the same needle-like crystals that cause itching. These micro-needles irritate the snail's foot (the muscular sole it crawls on), stimulating maximum mucus production and the most thorough gut clearance. Aggressive? Yes. Effective? Absolutely."
    },
    {
      step: 2,
      title: "Prepare the Snails — The Tail Cut Decision",
      detail: `Bring a large pot of water to a rolling boil. Add snails. Boil for 3 minutes exactly. Drain.

THE 3-MINUTE BOIL — WHAT IT ACHIEVES:

This is NOT cooking the snails — it is PREPARING them for stir-frying. Three minutes of boiling achieves:

1. PATHOGEN KILL: Freshwater snails can harbour parasites, most significantly Angiostrongylus cantonensis (rat lungworm). The larvae reside in the snail's foot tissue. At 100°C (boiling), the larvae are killed within 1-2 minutes. The 3-minute boil provides a safety margin. This is why ốc hút is always COOKED — never raw — unlike marine oysters.

2. PARTIAL PROTEIN SET: The outer layer of the snail's foot (the muscular body) denatures and firms slightly, creating a more "meaty" texture. Without the pre-boil, the stir-fry's high heat hits raw tissue, which contracts violently and can become rubbery. The pre-boil denatures 30-40% of the surface proteins gently, so the stir-fry only needs to finish the job rather than doing it all at once.

3. OPERCULUM LOOSENING: The heat partially releases the operculum from the snail's body. During the stir-fry, the operculum falls off or loosens further, allowing sauce to penetrate into the shell. A sealed operculum = no sauce entry = flavourless snail.

THE TAIL CUT — TO CUT OR NOT:

Some recipes call for cutting off the tip (apex) of the shell — the pointed end opposite the opening. This creates a SECOND opening that changes the eating physics:

WITH TAIL CUT:
→ You suck from the opening, air enters from the cut tail
→ The snail slides out easily — less suction resistance
→ MORE sauce retained inside (air flow prevents vacuum lock)
→ Easier to eat, less dramatic suction sound
→ Preferred by: beginners, restaurants, neat eaters

WITHOUT TAIL CUT (TRADITIONAL):
→ You suck from the opening against a sealed system
→ The snail must overcome vacuum resistance to slide out
→ The "pop" when the snail releases is louder and more satisfying
→ LESS sauce retained (some is held by vacuum)
→ The sucking effort is part of the experience
→ Preferred by: nhậu veterans, traditionalists, loud tables

For this recipe: LEAVE THE TAIL INTACT. The authentic ốc hút experience is defined by that suction resistance and the triumphant "pop" of extraction. Cutting the tail is a convenience that removes the physical engagement that IS the dish.`,
      tip: "After boiling, use a toothpick to gently extract any remaining operculum that hasn't fallen off. Push the toothpick along the edge where the operculum meets the shell opening and lever it out. The operculum is inedible (it's keratin — the same protein as fingernails) and its presence blocks sauce from entering the shell."
    },
    {
      step: 3,
      title: "Build the Sauce — Five-Dimensional Aromatic Architecture",
      detail: `Heat oil in a large wok or wide pan over HIGH heat until shimmering.

Add minced lemongrass. Stir-fry for 2 minutes until fragrant and starting to turn golden.

Add minced shallots and garlic. Stir-fry 1 minute.

Add satay paste. Stir-fry 1 minute until the oil turns orange-red and the paste is fragrant.

Add chopped chilies. Stir-fry 30 seconds.

Add coconut milk. Stir to combine all aromatics into the coconut fat. Let it bubble for 1 minute.

Season with fish sauce, sugar, tamarind paste (if using), and black pepper.

THE FIVE DIMENSIONS — ENGINEERED, NOT ACCIDENTAL:

DIMENSION 1 — LEMONGRASS (Citral: geranial + neral):
Citral is the dominant monoterpene in lemongrass essential oil (65-85% of the volatile fraction). At high heat, citral partially isomerises into p-cymene and p-menthane derivatives — compounds with woody, slightly sweet notes that are less sharp than raw citral. The 2-minute fry time is calibrated: enough to trigger isomerisation (adding depth) without destroying citral entirely (preserving brightness). The result: a lemongrass note that is simultaneously bright (surviving citral) AND deep (isomeric derivatives).

DIMENSION 2 — CHILI (Capsaicin: 8-methyl-N-vanillyl-6-nonenamide):
Capsaicin binds TRPV1 receptors on the tongue, triggering a "heat" signal that is technically pain, not taste. But in the context of ốc hút, this "pain" signal serves a specific function: it makes you salivate. Increased salivation = increased dissolution of flavour compounds = enhanced taste perception of ALL other flavours. The chili doesn't add its own flavour — it amplifies EVERYTHING ELSE in the dish by increasing the solvent (saliva) available for flavour extraction.

DIMENSION 3 — COCONUT MILK (Lauric acid: C12 saturated fatty acid):
Coconut milk provides the FAT PHASE of the sauce. Many flavour compounds in lemongrass, chili, and satay are fat-soluble (log P > 1.0). Without a fat phase, these compounds would volatilise into the air rather than staying in the sauce. The coconut fat dissolves them, traps them in the liquid phase, and ensures they end up INSIDE the shell rather than evaporating from the pan. Additionally, the lauric acid creates a creamy mouthfeel that buffers the chili's heat — the fat coats TRPV1 receptors, reducing capsaicin binding and providing a "smooth heat" rather than "sharp burn."

DIMENSION 4 — SATAY PASTE (Complex: dried shrimp + galangal + lemongrass + garlic + chili):
Saigon satay paste (sa tế) is not Southeast Asian satay sauce. It is a unique Vietnamese preparation containing 8-12 ground aromatics suspended in chili oil. Its role in ốc hút is to provide DEPTH — the bass notes beneath the lemongrass's treble. Where lemongrass is bright and citrus-forward, satay paste is dark, roasted, and complex. The dried shrimp in the paste provides additional umami (glutamate + IMP synergy) that bridges the snail's natural umami with the fish sauce's fermentation umami.

DIMENSION 5 — FISH SAUCE (Glutamate + volatile amines):
Fish sauce provides the umami foundation and the salt. At high heat, the amino acids in fish sauce undergo rapid Maillard reaction with the sugars (added sugar + natural sugars in coconut milk), creating melanoidins that darken the sauce and add caramelised depth. Fish sauce at room temperature = sharp, pungent. Fish sauce at 180°C in a wok = mellow, complex, integrated.

THE TAMARIND OPTION — THE SOUR COUNTERBALANCE:
Tamarind paste adds tartaric acid — a less common acid in Vietnamese cooking (which prefers citric from lime and acetic from vinegar). Tartaric acid has a softer, more rounded sourness than citric acid, and it persists longer on the palate. In the rich coconut-satay-chili matrix, tamarind provides a counterpoint that prevents the sauce from becoming cloying. It's the invisible hand that keeps the sauce INTERESTING rather than just RICH.`,
      tip: "Mince the lemongrass, don't slice it. Slicing cuts across the fibre, producing rings that stay intact. Mincing breaks the fibre in all directions, rupturing MORE essential oil glands per gram. More ruptured glands = more citral released = more intense lemongrass flavour. A food processor works well for large quantities — pulse until fine but not puréed."
    },
    {
      step: 4,
      title: "Stir-Fry the Snails — Shell as Cooking Vessel",
      detail: `Add all the pre-boiled snails to the wok with the sauce. INCREASE heat to maximum.

Toss vigorously for 5-7 minutes. The goal is to coat every shell surface with sauce AND — critically — force sauce INTO the shell openings.

TOSSING MECHANICS — HOW SAUCE ENTERS THE SHELL:

The shell opening faces a random direction in the wok. During each toss:

→ When the opening faces UP: sauce pools in the opening from gravity
→ When the opening faces DOWN (during the toss arc): the sauce that pooled in the opening flows INWARD along the spiral channel via gravity + the acceleration of the toss
→ When the shell lands back in the wok: inertia drives the sauce deeper into the spiral

Each toss cycle pumps sauce approximately 2-3mm deeper into the shell spiral. Over 5-7 minutes of continuous tossing (approximately 50-70 toss cycles), sauce penetrates to the snail body coiled in the deepest part of the shell.

THE CAPILLARY RETENTION MECHANISM:
Once sauce enters the shell's spiral channel, it is retained by CAPILLARY ACTION. The shell's interior diameter decreases from ~15mm at the opening to ~3mm at the apex. In these narrow channels, the adhesion between the sauce and the calcium carbonate shell wall (hydrophilic interaction) is strong enough to hold the sauce against gravity. Even when the shell is inverted during tossing, the sauce in the deep spiral doesn't drain out — it's held by capillary forces.

This means each shell accumulates sauce over the 5-7 minute cooking period, never losing what it's already captured. By the end: the opening contains thin sauce (recent, less concentrated), the middle spiral contains medium sauce (captured earlier, slightly reduced from heat), and the deepest chamber contains CONCENTRATED sauce (captured earliest, most reduced, in direct contact with the snail body). This creates the natural flavour gradient that makes sucking so rewarding.

ADD KAFFIR LIME LEAVES in the last 2 minutes of stir-frying. Their essential oil (citronellal + limonene + linalool) is extremely heat-volatile — adding earlier would destroy it. Two minutes is enough to bloom the oil into the sauce without dissipating it. The lime leaf provides a bright, clean top note that lifts the heavy coconut-satay base.

THE DONENESS TEST:
Pick up one snail. The shell should be coated in a glossy, clinging sauce that doesn't drip off immediately. Tilt the opening downward — a thick rivulet of orange-red sauce should slowly ooze from the opening. If the sauce runs like water: too thin, reduce more. If nothing comes out: too thick, add 2 tablespoons water.

The snail meat is done when it yields to a toothpick probe with slight resistance — firm but not rubbery. Since the snails were pre-boiled for 3 minutes and stir-fried for 5-7 minutes, the total cooking time is 8-10 minutes — enough to cook through without toughening.`,
      tip: "Professional ốc hút vendors use a wok with TALL sides and toss with extreme vigor — the snails arc 30-40cm above the wok rim. This aggressive tossing isn't showmanship: the air time creates centrifugal force that drives sauce deeper into the shells than gentle stirring ever could. If your wok skills aren't there yet, use a large spoon to continuously turn the snails, opening-side-up then opening-side-down, ensuring every shell gets sauce from all angles."
    },
    {
      step: 5,
      title: "Plate & Eat — The Sucking Protocol",
      detail: `Transfer the sauced snails to a deep plate or wide bowl. Pour any remaining sauce from the wok over the top. Scatter torn rau răm (Vietnamese coriander) generously over everything.

Serve immediately with toothpicks, extra lime, extra chilies, and — essentially — cold beer.

THE SUCKING TECHNIQUE — A PHYSICAL MANUAL:

STEP 1 — ASSESS THE SHELL:
Pick up one snail. Locate the opening. Look inside — you should see the orange-red sauce and, deeper in, the edge of the snail's foot (the muscular body). If the operculum is still present (unlikely after pre-boiling, but possible): pry it off with a toothpick or your thumbnail.

STEP 2 — POSITION:
Bring the shell opening to your lips. Tilt at approximately 20-30 degrees above horizontal (opening slightly angled upward). This angle means gravity assists the sauce flow toward your mouth while the snail body, deeper in the shell, remains in place until suction pulls it.

STEP 3 — SEAL:
Press your lips FIRMLY around the shell opening. Create an airtight seal. Your lips should feel the shell edge all the way around — any gap means lost suction. The seal is critical because the suction force you generate (approximately -50 to -100 millibars of negative pressure) must act on the snail body through the sauce column, not leak out the sides.

STEP 4 — SUCK:
Draw a sharp, strong inhalation through the shell. Two things happen simultaneously:

A) The sauce, starting from the opening, flows toward your mouth — the thinnest, mildest sauce first (from the opening area), then progressively more concentrated sauce from deeper in the shell. You taste a flavour crescendo: mild → medium → intense → SNAIL.

B) The negative pressure propagates through the sauce column to the snail body, pulling it away from the columella (the central spiral axis the snail grips). At -80 to -100 millibars, the snail's adhesion to the shell wall is overcome, and it RELEASES with a satisfying "pop" — sliding through the sauce channel and into your mouth.

THE POP — PHYSICS:
The "pop" sound occurs because the snail's foot creates a partial seal against the shell wall (like a suction cup). When this seal breaks, the sudden pressure equalisation creates a small air rush from the shell apex to the opening — audible as a sharp pop. Louder pop = stronger seal = the snail was well-lodged = fresher, more vital snail. A quiet slide without pop = the snail was loose = it may have been dead before cooking or over-boiled until the muscle relaxed.

STEP 5 — CHEW:
The snail body has two distinct textures: the foot (firm, chewy, slightly springy) and the visceral mass (softer, more liver-like, where the hepatopancreas and gonad are located). Some eaters consume everything; others bite off the foot and discard the visceral mass (which can have a slightly gritty texture from residual gut contents if purging was incomplete). Neither approach is "correct" — it's personal preference.

STEP 6 — DISCARD:
Drop the empty shell into a communal discard bowl. Reach for the next snail. Sip beer. Resume conversation. Repeat.

THE NHẬU RHYTHM:
A proper nhậu session with ốc hút follows this tempo:
→ Pick up snail (2 seconds)
→ Position and seal (1 second)
→ Suck and pop (1 second)
→ Chew (3-5 seconds)
→ Discard shell (1 second)
→ Talk / laugh / drink beer (5-15 seconds)
→ Repeat

This 15-25 second cycle per snail means a plate of 40 snails sustains 10-15 minutes of continuous social eating — long enough for one round of conversation and two beers. The snails are not the main event: the SOCIALISING is. The snails are the metronome that keeps the nhậu rhythm going.`,
      tip: "If a snail resists sucking (some are stubbornly attached to the columella), use a toothpick to hook under the foot and lever it out. No shame in this — even veterans encounter resistant snails. The Vietnamese term is 'ốc cứng đầu' (stubborn-headed snail), and it's spoken with respect, not frustration. A snail that fights back was strong and vital — its meat will be firmer and more flavourful than one that slid out easily."
    }
  ],

  tips: [
    {
      title: "The Rau Răm Fixed Pairing — Molecular Logic",
      content: "Rau răm (Vietnamese coriander, Persicaria odorata) is the FIXED herb for ốc — not optional, not interchangeable, not 'any herb will do.' The plant produces aldehydes (dodecanal, decanal) that are structurally similar to the long-chain aldehydes produced by cooking snail fat. Similar molecular structure = harmonic flavour blending (like two notes forming a chord). Rau răm also contains a mild anaesthetic compound (polygodial) that slightly numbs the lips — counteracting the chili's burning sensation and allowing you to continue eating at speed. It is simultaneously a flavour harmoniser AND a pain manager."
    },
    {
      title: "Snail Species Guide for Ốc Hút",
      content: "Vietnam has 5+ snail species used in cooking, each with different characteristics: ỐC BƯƠU (apple snail, Pila polita) — large (4-6cm), thick meat, strong flavour, best for ốc hút because the shell diameter allows maximum sauce penetration. ỐC MỠ (butter snail, Cipangopaludina) — medium (2-3cm), tender, mild, good for ốc hút but less sauce capacity. ỐC LEN (mud snail, Cerithidea obtusa) — small (1-2cm), brackish water, intensely flavoured, used in ốc len xào dừa. ỐC HƯƠNG (fragrant snail, Babylonia areolata) — sea snail, premium, usually steamed not stir-fried. ỐC BƯƠU VÀNG (golden apple snail, Pomacea canaliculata) — invasive species, edible but less preferred due to parasite risk. For ốc hút specifically, ốc bươu is the gold standard."
    },
    {
      title: "The Calcium Carbonate Shell as Thermal Regulator",
      content: "Snail shells are 95-99% calcium carbonate (CaCO₃, the same compound as limestone and marble). CaCO₃ has a specific heat capacity of 0.84 J/g·°C — lower than water (4.18) but higher than metals. This means the shell heats slowly and cools slowly, creating a THERMAL BUFFER between the wok's extreme temperature (250-300°C surface) and the snail meat inside. During the 5-7 minute stir-fry, the shell exterior reaches ~150°C while the interior (where the snail sits) reaches only ~85°C — gentle poaching temperature. The shell is simultaneously a frying pan (outside) and a poaching vessel (inside), protecting the snail from the harsh wok environment that makes the sauce so intensely flavourful."
    },
    {
      title: "The Nhậu Economy — Why Ốc Dominates",
      content: "Ốc (snails in general, not just ốc hút) is the #1 nhậu food category in Saigon — more popular than barbecue, fried chicken, or seafood for drinking occasions. The reason is economic: snails have the HIGHEST time-to-food-cost ratio of any nhậu food. A plate of ốc hút costs 50,000-80,000 VND ($2-3.20 USD) and takes 10-15 minutes to consume — roughly $0.15-0.20 per minute of eating. Compare: grilled squid costs 100,000 VND and is eaten in 3 minutes ($0.55/minute). Fried chicken wings cost 80,000 VND and are eaten in 5 minutes ($0.27/minute). Ốc stretches the drinking budget by slowing the eating rate and extending the session. For bar owners, this is also beneficial: longer sessions = more beer sales."
    },
    {
      title: "Parasite Safety — The Non-Negotiable",
      content: "Freshwater snails can carry Angiostrongylus cantonensis (rat lungworm) larvae — a parasite that causes eosinophilic meningitis in humans. The larvae are killed at 65°C for 5+ minutes or 100°C for 1+ minute. The ốc hút preparation (3-minute boiling + 5-7 minute high-heat stir-frying) provides a DOUBLE safety margin. NEVER eat freshwater snails raw or undercooked. This is not a flavour preference — it is a medical imperative. Sea snails (ốc hương, ốc vú nàng) have negligible Angiostrongylus risk but may carry other marine parasites — still cook thoroughly."
    },
    {
      title: "Shell Recycling — The Circular Economy",
      content: "Empty snail shells from restaurants and nhậu establishments are collected by waste buyers and sold to: (1) Calcium supplement manufacturers — ground shells are pharmaceutical-grade calcium carbonate. (2) Chicken farmers — crushed shells added to poultry feed provide calcium for eggshell formation. (3) Craft producers — shells are polished, painted, and sold as decorative items. (4) Construction — ground shells are mixed into road-base materials as aggregate. A single night at a busy ốc restaurant produces 20-30kg of shells. At 2,000-5,000 VND/kg ($0.08-0.20/kg), the shells generate an additional revenue stream that slightly offsets the restaurant's waste costs. Nothing is wasted — the snail becomes food, the shell becomes calcium, the sauce becomes memory."
    }
  ],

  nutrition: {
    calories: "245 kcal per serving (approximately 10 snails with sauce)",
    protein: "22g — snail meat is 15% protein, comparable to chicken breast",
    carbs: "8g — from coconut milk, sugar, and sauce components",
    fat: "14g — from coconut milk, cooking oil, and satay paste",
    fiber: "2g — from lemongrass and lime leaves",
    sodium: "780mg — from fish sauce",
    vitamins: "Iron (3.5mg per 100g snail — higher than beef), B12, selenium, magnesium"
  },

  relatedRecipes: [
    {
      title: "Hanoi Grilled Pork Vermicelli",
      image: "https://images.unsplash.com/photo-1583224994076-0e2e8e4fc0c1?w=400",
      slug: "bun-cha-hanoi",
      description: "Another iconic nhậu pairing — grilled pork with herbs and nước chấm"
    },
    {
      title: "Crispy Vietnamese Sizzling Pancake",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
      slug: "banh-xeo",
      description: "Another hands-on communal eating experience — tear, wrap, dip"
    },
    {
      title: "Lemongrass Pork Bánh Mì",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400",
      slug: "banh-mi",
      description: "Lemongrass in its other starring role — grilled on pork, stuffed in bread"
    }
  ],

  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Ốc Hút — Saigon Sucking Snails in Lemongrass Chili",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "description": "Saigon's iconic beer-drinking snails — freshwater snails stir-fried in lemongrass, chili, coconut milk, and satay paste, sucked directly from the shell. Where the shell is simultaneously cooking vessel, flavour trap, and eating utensil.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
    "prepTime": "PT2H45M",
    "cookTime": "PT25M",
    "totalTime": "PT3H10M",
    "recipeYield": "4 servings",
    "recipeCategory": "Appetizer",
    "recipeCuisine": "Vietnamese",
    "keywords": "ốc hút, sucking snails, Saigon street food, lemongrass snails, chili snails, Vietnamese snails, nhậu food, beer snack, apple snails, coconut milk snails, satay snails, Vietnamese drinking food",
    "recipeIngredient": [
      "1kg fresh snails",
      "4 stalks lemongrass",
      "5-6 bird's eye chilies",
      "4 cloves garlic",
      "3 shallots",
      "2 tablespoons satay paste",
      "100ml coconut milk",
      "2 tablespoons fish sauce",
      "10-12 kaffir lime leaves",
      "Vietnamese coriander (rau răm)",
      "Toothpicks for stubborn snails"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Purge snails in salted, acidified water with chilies for 2-3 hours, changing water twice. Scrub shells clean." },
      { "@type": "HowToStep", "text": "Boil snails for 3 minutes. Drain. Remove any remaining operculum with a toothpick." },
      { "@type": "HowToStep", "text": "Stir-fry minced lemongrass, shallots, garlic, satay paste, and chilies in oil. Add coconut milk, fish sauce, sugar, and optional tamarind." },
      { "@type": "HowToStep", "text": "Add snails to the sauce. Toss vigorously over high heat for 5-7 minutes, forcing sauce into shells. Add kaffir lime leaves in last 2 minutes." },
      { "@type": "HowToStep", "text": "Serve with torn Vietnamese coriander, toothpicks, lime wedges and cold beer. Suck snails from shells, sauce and all." }
    ],
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "245 kcal",
      "proteinContent": "22g",
      "carbohydrateContent": "8g",
      "fatContent": "14g",
      "fiberContent": "2g"
    }
  }
};

export default function OcHutPage() {
  return <RecipeLayout recipe={recipeData} />;
}
