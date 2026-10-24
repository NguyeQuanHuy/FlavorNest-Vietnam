'use client';

import RecipeLayout from '@/components/RecipeLayout';

const recipeData = {
  title: "Hủ Tiếu Gõ",
  subtitle: "Knock-Knock Noodle Soup — The Only Dish That Announces Itself Before You See It",
  heroImage: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=1200",
  prepTime: "45 min",
  cookTime: "3 hrs",
  servings: "6",
  difficulty: "Intermediate" as const,
  region: "Southern" as const,
  province: "Sài Gòn",

  introduction: `Hủ tiếu gõ is the only dish in Vietnamese cuisine — perhaps in any cuisine — that is identified by SOUND before smell, sight, or taste. The "gõ" in its name means "knock" — referring to the rhythmic tok-tok-tok of wooden sticks striking a bamboo tube or wooden block, the vendor's acoustic advertisement echoing through Saigon's alleys after dark. You hear hủ tiếu gõ before you smell it. You smell it before you see it. You see the flickering gas flame of the pushcart before you see the vendor. This sensory sequence — sound → smell → sight → taste — is the opposite of restaurant dining, where sight dominates, and it is what makes hủ tiếu gõ a fundamentally NOCTURNAL food experience.

The dish itself is a pork-based noodle soup served from a mobile pushcart (xe đẩy) that roams residential streets between 7 PM and 2 AM. The broth is clear, sweet from pork bones simmered since afternoon, and deliberately LIGHTER than the morning phở or bún bò that Saigon also offers. This lightness is a design decision, not a compromise. Hủ tiếu gõ is eaten as a late-night meal — after dinner, before sleep — when the stomach wants comfort but not heaviness. The broth is warm, not hot. The portion is moderate, not generous. The toppings are simple, not elaborate. Everything about this dish is calibrated for 10 PM consumption.

The noodle — hủ tiếu — is where Southern Vietnamese cuisine diverges most sharply from the North. While phở uses bánh phở (fresh rice noodles, soft, absorbent), hủ tiếu uses a sun-dried rice noodle that has been rehydrated. The drying-rehydrating cycle fundamentally alters the starch structure. During sun-drying, the rice starch undergoes COMPLETE retrogradation — the amylose chains crystallise thoroughly in the tropical heat. When rehydrated, these retrograded chains partially melt but retain their crystalline memory. The result: a noodle that is CHEWIER, more TRANSLUCENT, and more RESISTANT to broth-softening than fresh rice noodles. Hủ tiếu noodles maintain their bite for 15-20 minutes in hot broth; phở noodles begin softening within 5 minutes. This resistance is critical for a pushcart operation where the vendor cannot control how quickly the customer eats.

The Teochew Chinese origin is unmistakable. "Hủ tiếu" is a Vietnamese phonetic adaptation of Teochew "kway teow" (粿條) — the same word that gives Singapore and Malaysia their "char kway teow" and "kway teow soup." The Saigon version kept the noodle type and the clear pork broth but added Vietnamese condiments: fish sauce (replacing soy sauce as the primary seasoning), fried shallots (replacing fried garlic as the aromatic fat), and fresh herbs (absent in Teochew versions). The knock — the "gõ" — is a purely Vietnamese innovation. Teochew hawkers in Singapore use voice calls; Malaysian vendors use bells. Only in Saigon did the wooden percussion become the dish's identity.

The pushcart is an engineering marvel of portable gastronomy. Within a cart measuring roughly 1.5m × 0.7m, the vendor carries: a 30-litre stockpot of simmering broth, a burner, a water pot for blanching noodles, pre-portioned noodles and toppings in compartmentalised containers, bowls, chopsticks, spoons, condiments (hoisin, chili, lime), a small washing basin, and the wooden knocking device. Total weight: 80-120kg. One person pushes this through narrow alleys, stops on demand, assembles a bowl in under 90 seconds, collects payment, and moves on. The entire restaurant — kitchen, dining room, and cash register — weighs less than the average refrigerator.`,

  ingredients: [
    {
      group: "Pork Bone Broth (Nước Lèo)",
      items: [
        "1.5kg pork bones — a mix of neck bones (xương cổ) and leg bones (xương ống) for collagen + marrow",
        "500g pork ribs — for meat toppings, simmered in the broth then sliced",
        "1 daikon radish (500g) — peeled, cut into 3 large chunks",
        "1 jicama (củ sắn, 300g) — peeled, quartered — the Saigon secret for natural sweetness",
        "5 dried squid tentacles (râu mực khô) — optional but traditional, for umami depth",
        "3 tablespoons fish sauce",
        "2 tablespoons rock sugar (đường phèn)",
        "1 tablespoon salt",
        "3 litres water"
      ]
    },
    {
      group: "Aromatics",
      items: [
        "1 large onion — halved, charred on an open flame until blackened",
        "5cm piece ginger — halved, charred",
        "5 shallots — fried until golden (hành phi), reserve both the crispy shallots AND the shallot oil",
        "3 cloves garlic — smashed",
        "1 teaspoon white peppercorns — lightly crushed"
      ]
    },
    {
      group: "Noodles & Toppings",
      items: [
        "400g dried hủ tiếu noodles — soak in room-temperature water 30 minutes before use",
        "200g ground pork (thịt bằm) — for the sautéed meat topping",
        "200g pork liver — optional, thinly sliced (blanch in broth 30 seconds at service)",
        "12 medium shrimp — peeled and deveined, poach in broth at service",
        "4 eggs — quail eggs traditional (8-12), chicken eggs acceptable",
        "100g bean sprouts (giá đỗ) — raw, rinsed",
        "4 stalks Chinese celery (cần tây ta) — thinly sliced",
        "Fried shallots (hành phi) — for garnish"
      ]
    },
    {
      group: "Ground Pork Topping (Thịt Bằm Xào)",
      items: [
        "200g ground pork",
        "2 cloves garlic — minced",
        "1 tablespoon fish sauce",
        "1 teaspoon sugar",
        "½ teaspoon black pepper",
        "1 tablespoon shallot oil (from frying shallots)"
      ]
    },
    {
      group: "Table Condiments",
      items: [
        "Hoisin sauce (tương đen)",
        "Chili sauce (tương ớt) — Chinsu or sriracha",
        "Fresh bird's eye chilies — sliced",
        "Lime wedges",
        "Fresh herbs: sawtooth coriander (ngò gai), Thai basil (húng quế)",
        "Fish sauce with garlic and chili (nước mắm pha) — optional"
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: "Prepare the Bones — Blanch & Clean for Clarity",
      detail: `Place pork bones and ribs in a large pot. Cover with cold water. Bring to a FULL ROLLING BOIL over high heat. Boil vigorously for 5 minutes. Drain, discard the water, and rinse every bone under cold running water, scrubbing off all scum, coagulated blood, and grey foam.

THE BLANCHING IMPERATIVE — WHY THIS STEP IS NON-NEGOTIABLE:

Raw pork bones contain:
→ Blood (haemoglobin + myoglobin): when heated slowly, these proteins coagulate into grey-brown flocs that cloud the broth permanently. Once dispersed, no amount of skimming can fully remove them — they're colloidal, meaning they're too small to skim but too large to dissolve.

→ Bone marrow surface proteins: the outermost layer of marrow contains albumin and other water-soluble proteins that denature rapidly in hot water, forming the grey "scum" (bọt) that rises to the surface. These proteins are flavourless and texturally unpleasant — removing them costs nothing in taste and gains everything in clarity.

→ Residual blood within bone channels: even well-cleaned bones have blood within the Haversian canals and trabecular spaces. The blanching FORCES this blood out via thermal expansion — the heat causes the blood to expand, pushing it out through the porous bone surface. Cold-start simmering would extract this blood slowly, integrating it irreversibly into the broth.

THE COLD-WATER RINSE:
After blanching, running cold water over each bone achieves two things:
1. THERMAL SHOCK contracts the bone surface proteins, creating a smoother surface that releases collagen more evenly during the long simmer
2. PHYSICAL REMOVAL of any remaining scum caught in bone crevices — your fingers should feel clean bone, not slippery protein film

This 10-minute step is the difference between a broth that is crystal-clear (the hủ tiếu gõ standard) and one that is cloudy (acceptable for many soups, but NOT for this one). Hủ tiếu gõ broth must be TRANSPARENT — you should see the bottom of the bowl through it. Clarity is not aesthetic vanity; it signals CLEAN extraction. A clear broth tastes cleaner, sweeter, and more purely of pork because the clouding agents (denatured blood proteins) have bitter, metallic off-flavours that mask the broth's natural sweetness.`,
      tip: "Start the blanch with COLD water, not hot. Cold-starting ensures even heating throughout the bone mass, which pushes blood out uniformly. Dropping bones into already-boiling water sears the surface instantly, trapping blood inside — the opposite of what you want. Cold start = maximum blood expulsion."
    },
    {
      step: 2,
      title: "Build the Broth — The 3-Hour Sweet Pork Extraction",
      detail: `Return the cleaned bones and ribs to a clean pot. Add 3 litres of COLD water. Add charred onion and ginger.

Bring to a boil over high heat. Immediately REDUCE to the lowest possible simmer — the surface should show only occasional lazy bubbles breaking once every 2-3 seconds. Skim any remaining foam during the first 30 minutes.

After 30 minutes of clean simmering, add daikon radish, jicama, dried squid tentacles, crushed white peppercorns, salt, and rock sugar.

Simmer for 2.5-3 hours total. Do not stir. Do not boil vigorously at any point.

THE LOW-SIMMER DOCTRINE — PHYSICS OF CLARITY:

A broth's clarity is determined by ONE variable: agitation.

At a VIGOROUS BOIL (100°C, constant surface disruption):
The turbulent convection currents continuously break the fat globules into smaller and smaller droplets. These micro-droplets (< 10 μm) become emulsified — suspended permanently in the water phase, stabilised by dissolved proteins acting as emulsifiers. The result: a permanently opaque, milky broth. This is DESIRABLE for tonkotsu ramen (which boils bones for 12+ hours to create a colloidal emulsion) but DISASTROUS for hủ tiếu gõ.

At a LOW SIMMER (85-92°C, occasional bubble):
The fat renders from the bones and RISES to the surface as large, intact droplets (> 100 μm). These large droplets are too heavy relative to their surface area to be dragged back down by the gentle convection. They float, coalesce, and can be skimmed. The broth below remains clear because the fat and water phases stay SEPARATED. Collagen extraction still occurs (it begins at 70°C), but the extraction is gradual and controlled.

THE JICAMA SECRET — SAIGON'S UNIQUE SWEETENER:

Hanoi uses no sweetener beyond the pork bones themselves. Saigon adds JICAMA (củ sắn) — a root vegetable that is 86% water and 10% inulin (a fructose polymer). Inulin is technically a dietary fibre, not a sugar — it passes through the small intestine undigested. But in a simmering broth at 90°C, the mild acid conditions slowly hydrolyse some inulin into free fructose, which IS a sugar — specifically, the SWEETEST natural monosaccharide (1.7× sweeter than glucose).

This slow hydrolysis releases sweetness GRADUALLY over the 3-hour simmer — unlike rock sugar, which dissolves instantly and provides constant sweetness from minute one. The jicama creates a sweetness that BUILDS as the broth simmers. By hour 3, the combined sweetness from pork glycosaminoglycans (natural bone sweetness) + jicama-derived fructose + rock sugar creates a three-layered sweet profile that is more complex than any single sweetener could produce.

DRIED SQUID — THE UMAMI AMPLIFIER:
Dried squid tentacles contribute glutamate AND inosinate (IMP) — the two umami compounds that exhibit SYNERGISTIC enhancement (together, they produce umami perception 8× stronger than either alone). The squid also contributes trimethylamine oxide (TMAO), which at low concentrations adds a subtle oceanic depth to the pork broth without making it taste fishy. This pork-seafood umami bridge is characteristically Southern Vietnamese — Northern broths avoid seafood additions.

CHARRED ONION & GINGER — THE AROMATIC ANCHOR:
Charring produces pyrazines and furanones (Maillard products) on the onion and ginger surfaces. These compounds are thermally stable — they survive 3 hours of simmering without degrading. They provide a BASS NOTE of roasted sweetness that anchors the broth's aroma, preventing it from becoming one-dimensional (just "porky"). The char also caramelises the onion's natural sugars (8% fructose, 2% glucose), creating additional Maillard reactants at the charred surface.`,
      tip: "Remove the ribs after 1.5 hours — they're the meat topping. If left for the full 3 hours, the meat dries out and becomes fibrous as all its gelatin converts to solution. At 1.5 hours, the meat is tender, pulls from the bone easily, and retains enough gelatin to feel succulent. Slice against the grain into 5mm pieces and reserve. The bones stay in for the full 3 hours — they still have collagen and marrow to give."
    },
    {
      step: 3,
      title: "Prepare the Ground Pork Topping — The Umami Layer",
      detail: `Heat shallot oil in a small pan over medium-high heat. Add minced garlic — sauté 30 seconds until fragrant but not browned. Add ground pork. Break it into small crumbles using a spatula or chopsticks.

Cook, stirring frequently, until the pork is cooked through and beginning to brown at the edges — about 5-6 minutes. Season with fish sauce, sugar, and black pepper. Cook 1 more minute until the fish sauce is absorbed and the pork is slightly caramelised.

THE GROUND PORK'S ROLE — CONCENTRATED MEATINESS:

Hủ tiếu gõ uses BOTH broth-simmered pork (the sliced ribs from Step 2) AND separately sautéed ground pork. This seems redundant until you understand the flavour profiles:

BROTH-SIMMERED PORK:
→ Has GIVEN its flavour to the broth (diffusion equilibrium — the meat and broth now have equal flavour concentration)
→ Texture: soft, yielding, slightly fibrous
→ Taste: mild, clean, identical to the broth itself
→ Role: protein/texture provider, not flavour provider

SAUTÉED GROUND PORK:
→ Has RETAINED its flavour (sautéing in oil seals the surface, preventing flavour leaching)
→ Texture: firm crumbles with crispy edges (Maillard crust on each piece)
→ Taste: concentrated, caramelised, distinctly "meaty" — DIFFERENT from the broth
→ Role: flavour bomb that provides contrast to the mild broth

Together, they create a pork spectrum: the broth is pork's essence dissolved in water (light, clean, sweet). The simmered slices are pork's body without its soul (texture without intensity). The sautéed ground is pork's concentrated declaration (intense, brown, bold). Three versions of pork, three completely different experiences, in one bowl.

The fish sauce in the sauté is not just salt — at high temperature (160°C+ in the pan), the fish sauce's free amino acids undergo rapid Maillard reaction with the pork's glucose and ribose, creating pyrazines and thiazoles that amplify the "meaty" aroma beyond what unseasoned pork can achieve. Fish sauce is a Maillard CATALYST in high-heat applications.`,
      tip: "Don't fully break the ground pork into powder. Leave some pieces as 5-8mm crumbles — these larger pieces provide textural variety and develop better Maillard crust (more surface area-to-thickness ratio than tiny granules, which dry out). The ideal is a mix of fine crumbles and slightly chunky pieces."
    },
    {
      step: 4,
      title: "Prepare Noodles & Toppings — The Assembly Line",
      detail: `While the broth simmers, prepare all components for rapid assembly:

NOODLES — THE REHYDRATION PROTOCOL:
Soak dried hủ tiếu noodles in ROOM-TEMPERATURE water for 30 minutes. NOT hot water.

Why room temperature: Hot water rehydrates the outer surface of the noodle too rapidly, causing it to swell and soften while the core remains hard — producing noodles with mushy outsides and crunchy centres. Room-temperature soaking allows gradual, EVEN hydration throughout the noodle cross-section. Water molecules diffuse inward at a rate proportional to the concentration gradient (Fick's law), and slow diffusion produces uniform hydration.

After 30 minutes, the noodles should be flexible but still firm — they will finish cooking during the 15-second blanch in boiling water at service.

DRIED HỦ TIẾU vs FRESH PHỞ — THE RETROGRADATION DIFFERENCE:

Dried hủ tiếu noodles have been sun-dried after their initial steaming. During drying, two things happen:

1. MOISTURE REMOVAL: water activity drops from 0.95 (fresh) to 0.30 (dried), concentrating the starch and protein.

2. RETROGRADATION: as water leaves, the amylose chains pack tightly together, forming crystalline regions (type III resistant starch). These crystals do NOT fully melt during rehydration — they persist as rigid zones within the noodle structure, providing the characteristic CHEWINESS that distinguishes hủ tiếu from phở.

This is why hủ tiếu noodles feel "springier" and more "al dente" than phở noodles — the retrograded amylose crystals act as internal reinforcement rods within the softer amylopectin matrix. Fresh phở noodles have no retrogradation and are therefore softer, more absorbent, and less structurally resilient.

OTHER TOPPINGS — MISE EN PLACE:
→ Shrimp: peeled, deveined, halved lengthwise if large. Will be poached in hot broth for 60-90 seconds at service.
→ Pork liver: sliced 3mm thin. Will be blanched in broth for 30 seconds at service (overcooking liver = chalky, granular texture; 30 seconds = creamy, rosy centre).
→ Quail eggs: hard-boiled (3 minutes in boiling water), peeled. 2-3 per bowl.
→ Bean sprouts: raw, washed. Their crunch provides temperature AND texture contrast.
→ Chinese celery: sliced thin. Its strong celery flavour (phthalide compounds — 3-n-butylphthalide) is a signature aromatic of Southern Vietnamese soups.
→ Fried shallots: ready for final garnish.

This assembly-line prep is how pushcart vendors achieve 90-second bowl assembly. Every component is pre-portioned, pre-positioned, and requires only HEAT APPLICATION (blanching, poaching) at the moment of service — never cooking from raw.`,
      tip: "If you can't find dried hủ tiếu noodles, use dried flat rice noodles (bánh phở khô) as the closest substitute — they'll have similar retrogradation characteristics. Fresh phở noodles work in a pinch but will give you a softer, more delicate bowl that's closer to phở than hủ tiếu. The noodle IS the identity of this dish — it's worth seeking out the real thing at an Asian grocery store."
    },
    {
      step: 5,
      title: "Finish the Broth — Strain, Season, Perfect",
      detail: `After 3 hours of simmering, remove and discard the bones, daikon, jicama, onion, ginger, and squid tentacles. Strain the broth through a fine-mesh sieve lined with cheesecloth (or a clean kitchen towel) into a clean pot.

STRAINING — WHY CHEESECLOTH:
Even after clean simmering, the broth contains:
→ Micro-particles of bone collagen that broke free during extraction
→ Tiny fat globules that didn't coalesce and rise
→ Fragments of daikon and jicama fibre
→ Sediment from the dried squid

A standard sieve catches the large pieces. The cheesecloth catches particles down to ~100 μm — small enough to affect clarity but too large to truly dissolve. The double filtration produces the crystal-clear, golden broth that is hủ tiếu gõ's visual signature.

FINAL SEASONING — THE BALANCE TRIANGLE:

Taste the strained broth. It should already be good from 3 hours of extraction. Now fine-tune:

SWEETNESS (rock sugar): The broth should be noticeably sweet — sweeter than phở, which leans savoury. Hủ tiếu gõ broth is often described as "ngọt nước" (water-sweet) — the sweetness of extracted collagen and jicama, enhanced by sugar. If it's not sweet enough, add rock sugar in 1-teaspoon increments, tasting between each.

SALT/UMAMI (fish sauce): Fish sauce provides BOTH salt and glutamate. Add in 1-tablespoon increments. The broth should be fully seasoned — not bland, not aggressively salty. The test: sip the broth alone (no noodles). It should be satisfying as a drink. If you'd add condiments to make it drinkable, it needs more fish sauce.

DEPTH (white pepper): White pepper's piperine provides a gentle warmth that is barely perceptible as "spicy" but very perceptible as "deep." Add ground white pepper in ¼-teaspoon increments. The pepper should be a subliminal presence — felt in the throat, not tasted on the tongue.

THE BROTH SHOULD BE:
→ Clear: you can see through it to the bottom of the pot
→ Golden: from the charred aromatics and natural pork collagen colour
→ Sweet-forward: the first note you taste should be sweetness
→ Clean-finishing: no lingering heaviness, no fatty mouthfeel
→ Aromatic: charred onion + fried shallot oil = the signature scent

Keep the broth at a gentle simmer (not boiling) for service. It should be very hot — 85-90°C — but not rolling. A rolling boil emulsifies any remaining surface fat and clouds the broth you just clarified.`,
      tip: "The Saigon street vendor's secret finishing move: add 1 tablespoon of fried shallot OIL (not the crispy shallots, but the oil they were fried in) to the broth pot in the last 10 minutes. This shallot-infused fat floats on the surface, creating a thin aromatic layer that you smell with every spoonful. It's invisible (a few golden drops on the surface) but profoundly aromatic — fried shallot oil contains 2-propenal (from allicin thermal breakdown) which has an aroma threshold of just 0.05 ppb, meaning TRACES are sufficient to perfume the entire bowl."
    },
    {
      step: 6,
      title: "Assemble Each Bowl — The 90-Second Protocol",
      detail: `This is the pushcart vendor's choreography, refined to eliminate every wasted motion. Follow this sequence for each bowl:

SECOND 0-15: BLANCH THE NOODLES
Drop one portion of soaked hủ tiếu noodles (about 70-80g dry weight, now swollen to ~150g) into rapidly boiling water. Stir once to prevent sticking. Blanch for 15 SECONDS — no more. Lift out with a strainer and deposit directly into the serving bowl.

Why 15 seconds: The noodles are already rehydrated from the 30-minute soak. They need only HEAT, not more water absorption. Fifteen seconds brings the noodle temperature from room temp (~25°C) to serving temp (~75°C) without softening the retrograded starch structure. Every additional second in boiling water allows more water to penetrate, softening the noodle toward the mushy threshold.

SECOND 15-30: TOPPINGS
Layer onto the noodles in this order:
→ Sliced simmered pork ribs (3-4 slices, already at room temperature)
→ Sautéed ground pork (2 tablespoons, from the pan — reheat briefly if cooled)
→ Quail eggs (2-3, halved)

SECOND 30-50: POACH THE PROTEINS
Drop shrimp and liver slices into the simmering broth. Count:
→ Shrimp: 60-90 seconds (until they curl and turn pink — actin denaturation at 65°C causes the muscle to contract into a C-shape)
→ Liver: 30 seconds maximum (liver proteins set at 65°C; at 70°C, the smooth endoplasmic reticulum ruptures, releasing granular texture — the difference between CREAMY and CHALKY)

Fish out with a small strainer. Place on top of the noodles.

SECOND 50-70: LADLE THE BROTH
Ladle 350-400ml of hot broth over the assembled toppings. The broth should be hot enough (85-90°C) to briefly re-heat the toppings and create the first wisp of steam that carries the aroma to the customer's nose.

SECOND 70-90: GARNISH
→ Raw bean sprouts (a handful on top — they will wilt slightly in the broth but retain crunch for 5+ minutes)
→ Sliced Chinese celery
→ Fried shallots (a generous pinch)
→ A drizzle of shallot oil (optional, 1 teaspoon)

Serve with condiments on the side: hoisin sauce, chili sauce, lime wedges, sliced chilies, and fresh herbs.

THE DRY VERSION — HỦ TIẾU KHÔ:
Some customers order "khô" (dry) — the noodles are tossed with sweet soy sauce and shallot oil INSTEAD of being submerged in broth. The broth is served separately in a small cup for sipping. This version showcases the noodle's texture more prominently because the retrograded starch isn't softened by continuous broth immersion. The khô version is considered the connoisseur's choice — you taste the noodle architecture without the masking effect of liquid.`,
      tip: "The vendor's greatest skill isn't cooking — it's TIMING. The blanch, poach, ladle, garnish sequence must be seamless because the noodles are degrading from the moment they leave the boiling water. A 10-second delay between blanching and broth-ladling means 10 seconds of the noodles cooling and sticking together (starch retrogradation accelerates as temperature drops from 75°C toward 40°C). Practice the sequence. The goal is ONE continuous flowing motion from blanch to serve."
    }
  ],

  tips: [
    {
      title: "The Tok-Tok Sound — Acoustic Marketing",
      content: "The knocking sound of hủ tiếu gõ is not random — it follows a specific rhythm: two quick knocks followed by a pause, repeated (tok-tok... tok-tok... tok-tok...). This 2:1 work-rest ratio is the same rhythm as a resting heartbeat (lub-dub... lub-dub...). Research in psychoacoustics shows that rhythms matching cardiac cadence are perceived as 'comfortable' and 'approaching' — your brain interprets the sound as something coming TOWARD you, which triggers anticipatory behaviour (looking out the window, reaching for your wallet). The rhythm is not tradition — it's unconscious neuroscience, selected by a century of street vendors for the rhythm that sold the most bowls."
    },
    {
      title: "Why Hủ Tiếu Gõ Is Nocturnal",
      content: "Saigon's street food ecosystem is temporally partitioned: breakfast (6-9 AM) belongs to phở, bún, cháo, and xôi. Lunch (11 AM-1 PM) belongs to cơm tấm, bún, and rice plates. Afternoon snacks (3-5 PM) belong to chè, bánh tráng, and bột chiên. NIGHT (7 PM-2 AM) belongs to hủ tiếu gõ, cháo lòng, and mì vịt tiềm. This isn't arbitrary — each time slot corresponds to a specific digestive state: empty stomach (breakfast — heavy, complex), mid-day energy need (lunch — protein + starch), insulin dip (afternoon — sugar), and pre-sleep comfort (night — warm, light, soothing). Hủ tiếu gõ's lighter broth, moderate portion, and warm temperature are specifically calibrated for the 10 PM body."
    },
    {
      title: "The Xe Đẩy (Pushcart) Economics",
      content: "A hủ tiếu gõ pushcart requires an initial investment of approximately 5-8 million VND ($200-320 USD): the cart frame, stockpot, burner, gas canister, utensils, and initial ingredient inventory. Daily operating costs run 300,000-500,000 VND ($12-20 USD). Selling 40-60 bowls per night at 25,000-35,000 VND each ($1-1.40 USD), a vendor grosses 1-2 million VND ($40-80 USD) per night. After costs, net income is 500,000-1,500,000 VND ($20-60 USD) per night. Working 25 nights per month, a successful hủ tiếu gõ vendor earns 12-37 million VND ($480-1,480 USD) per month — comparable to or exceeding a junior office worker's salary, with zero rent overhead."
    },
    {
      title: "Hủ Tiếu Regional Variations",
      content: "Hủ tiếu exists in four major Southern variants, each named after its origin: Hủ Tiếu Nam Vang (Phnom Penh-style — pork + seafood + pork liver, usually the most topping-heavy), Hủ Tiếu Mỹ Tho (Mỹ Tho city — pork-only, cleaner broth, the 'purist' version), Hủ Tiếu Sa Đéc (Sa Đéc town — famous for its noodle texture, the noodles themselves are the star), and Hủ Tiếu Gõ (Saigon — the pushcart night version, lighter broth, simpler toppings). All share the dried rice noodle base but diverge in broth richness, topping complexity, and serving context. Hủ tiếu gõ is the most minimal of the four — appropriately, since it's carried on one person's back through the night."
    },
    {
      title: "The Dry (Khô) vs. Wet (Nước) Debate",
      content: "Hủ tiếu khô (dry) and hủ tiếu nước (wet/soup) are not different dishes — they're different perspectives on the SAME dish, ordered by the same customer on different nights depending on mood. The wet version is comfort: warm broth envelops everything, softens edges, soothes. The dry version is precision: each ingredient is tasted individually against the dressed noodle, textures stay distinct, the sipping broth punctuates rather than submerges. Many vendors serve both from the same cart — the only difference is whether the broth goes INTO the bowl or BESIDE it."
    },
    {
      title: "Chinese Celery vs. Western Celery",
      content: "Chinese celery (cần tây ta, Apium graveolens var. secalinum) has thinner stalks, darker leaves, and 3-4× the essential oil concentration of Western celery. The key compound — 3-n-butylphthalide — is responsible for the distinctive 'celery' aroma and also has vasodilating properties (it relaxes blood vessel walls). In a hot bowl of hủ tiếu gõ, the heat releases these volatile oils rapidly, creating the characteristic herbal-savoury aroma burst when the bowl arrives. Western celery can substitute but delivers a much milder, more watery version of the same note — you'd need 3× the amount to approach the same aromatic intensity."
    }
  ],

  nutrition: {
    calories: "420 kcal per serving",
    protein: "32g — from pork, shrimp, liver, and egg",
    carbs: "45g — primarily from rice noodles",
    fat: "12g — from shallot oil and natural pork fat",
    fiber: "2g — from bean sprouts and celery",
    sodium: "980mg — from fish sauce and broth seasoning",
    vitamins: "B12 from pork liver, vitamin A from egg yolk, iron from pork"
  },

  relatedRecipes: [
    {
      title: "Hanoi Beef Pho",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400",
      slug: "hanoi-beef-pho",
      description: "Vietnam's other great noodle soup — beef broth, fresh noodles, Northern style"
    },
    {
      title: "Crab & Tomato Vermicelli Soup",
      image: "https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=400",
      slug: "bun-rieu-cua",
      description: "Another Southern noodle soup icon — tomato-crab broth with rice vermicelli"
    },
    {
      title: "Saigon Broken Rice Plate",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400",
      slug: "com-tam",
      description: "Saigon's daytime counterpart — grilled pork on fractured rice"
    }
  ],

  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Hủ Tiếu Gõ — Saigon Knock-Knock Noodle Soup",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "description": "Saigon's iconic nocturnal pushcart noodle soup — clear pork bone broth sweetened with jicama, served with dried rice noodles, ground pork, shrimp, liver, quail eggs, and fried shallots. The only dish that announces itself by sound: tok-tok-tok through the alleyways after dark.",
    "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=1200",
    "prepTime": "PT45M",
    "cookTime": "PT3H",
    "totalTime": "PT3H45M",
    "recipeYield": "6 servings",
    "recipeCategory": "Main Course",
    "recipeCuisine": "Vietnamese",
    "keywords": "hủ tiếu gõ, noodle soup, Saigon street food, pushcart noodles, knock-knock noodles, pork bone broth, Vietnamese noodle soup, night food, Teochew noodles, xe đẩy, dried rice noodles, hủ tiếu khô",
    "recipeIngredient": [
      "1.5kg pork bones",
      "500g pork ribs",
      "1 daikon radish",
      "1 jicama",
      "5 dried squid tentacles",
      "400g dried hủ tiếu noodles",
      "200g ground pork",
      "200g pork liver",
      "12 medium shrimp",
      "4 eggs (quail preferred)",
      "Bean sprouts, Chinese celery, fried shallots",
      "Fish sauce, rock sugar, white pepper",
      "Hoisin sauce, chili sauce, lime wedges"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Blanch pork bones in cold water brought to a boil for 5 minutes. Drain, rinse thoroughly under cold water, scrubbing off all scum." },
      { "@type": "HowToStep", "text": "Return clean bones to pot with 3 litres cold water, charred onion and ginger. Simmer at lowest heat. After 30 minutes add daikon, jicama, dried squid, peppercorns, salt and rock sugar. Simmer 3 hours total." },
      { "@type": "HowToStep", "text": "Remove ribs at 1.5 hours, slice for topping. Sauté ground pork separately with garlic, fish sauce, sugar and pepper until browned." },
      { "@type": "HowToStep", "text": "Soak dried hủ tiếu noodles in room-temperature water for 30 minutes. Prepare all toppings." },
      { "@type": "HowToStep", "text": "Strain broth through cheesecloth-lined sieve. Season with fish sauce, rock sugar, white pepper until clear, sweet and aromatic." },
      { "@type": "HowToStep", "text": "For each bowl: blanch noodles 15 seconds, layer toppings, poach shrimp and liver in broth, ladle 350ml broth over, garnish with bean sprouts, celery, fried shallots. Serve with hoisin, chili sauce and lime." }
    ],
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "420 kcal",
      "proteinContent": "32g",
      "carbohydrateContent": "45g",
      "fatContent": "12g",
      "fiberContent": "2g"
    }
  }
};

export default function HuTieuGoPage() {
  return <RecipeLayout recipe={recipeData} />;
}
