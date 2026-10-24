'use client';

import RecipeLayout from '../_components/RecipeLayout';

const recipeData = {
  title: "Canh Môn Nấu Tôm",
  subtitle: "Quảng Bình Taro & Shrimp Soup — The Mucilage-Thickened Broth",
  heroImage: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1200",
  prepTime: "25 min",
  cookTime: "35 min",
  servings: "4",
  difficulty: "Easy" as const,
  region: "Central" as const,
  province: "Quảng Bình",

  introduction: `Canh môn nấu tôm appears simple — taro chunks and shrimp in broth. But this simplicity is deceptive. The dish operates on a thickening mechanism that predates cornstarch by millennia: taro's own mucilage, a naturally occurring polysaccharide gel that thickens from within the ingredient itself rather than being added from outside.

When taro is simmered, its cells rupture and release mucilage — a complex of galactomannan and glucomannan polysaccharides that hydrate and swell in hot water, creating a viscous, silky broth without any added thickener. This is the same family of molecules found in okra, rau đay (jute leaves), and aloe vera. The thickening is not starch-based (taro starch gelatinises separately, contributing body) but mucilage-based — a fundamentally different rheology that creates silkiness rather than heaviness.

In Quảng Bình, this soup is the counterpart to cháo canh — both are hydration-response dishes designed for the Gió Lào season when the foehn wind strips moisture from every living thing. Where cháo canh uses external mucilage (rau đay, mồng tơi) added to rice, canh môn generates its own mucilage from within. The taro IS the thickener. This is engineering elegance: the main ingredient performs double duty as both food and sauce.

The shrimp component is equally calculated. Freshwater shrimp from Quảng Bình's rivers contribute more than protein — their shells, when simmered briefly, release astaxanthin (the orange-red carotenoid) and chitin-bound amino acids that create a shellfish stock impossible to replicate with shelled shrimp alone. The Quảng Bình grandmother who leaves the shells on is not being lazy. She is extracting a second ingredient from the first.`,

  ingredients: [
    {
      group: "Taro",
      items: [
        "500g taro (khoai môn) — peeled, cut into 3cm chunks",
        "1 teaspoon salt (for soaking)",
        "1 teaspoon vinegar or lime juice (for soaking)"
      ]
    },
    {
      group: "Shrimp & Aromatics",
      items: [
        "300g whole fresh shrimp (head-on, shell-on) — medium size",
        "3 shallots — thinly sliced",
        "3 cloves garlic — minced",
        "1 tablespoon cooking oil",
        "1 tablespoon fish sauce",
        "½ teaspoon ground black pepper"
      ]
    },
    {
      group: "Broth",
      items: [
        "1.2 litres water or light pork stock",
        "2 tablespoons fish sauce",
        "1 teaspoon sugar",
        "½ teaspoon salt (adjust to taste)"
      ]
    },
    {
      group: "Herbs & Finishing",
      items: [
        "4-5 stalks rau ngổ (rice paddy herb) — or substitute with rau răm (Vietnamese coriander)",
        "2 scallions — sliced",
        "Fresh black pepper — cracked",
        "1 tablespoon fried shallots (hành phi) — optional"
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: "Prepare the Taro — Neutralising Calcium Oxalate",
      detail: `Peel taro under running water or wearing gloves. Cut into 3cm chunks. Immediately soak in cold water with 1 teaspoon salt and 1 teaspoon vinegar for 15 minutes.

Drain, rinse thoroughly, and pat dry.

WHY YOUR HANDS ITCH — THE CALCIUM OXALATE DEFENCE:
Taro corms are loaded with raphides — microscopic needle-shaped crystals of calcium oxalate (CaC₂O₄) packed inside specialised ejector cells called idioblasts. When the cell is ruptured (by peeling, cutting, or chewing raw taro), the idioblast fires its raphides like a biological syringe.

These needles are 10-100μm long and 1-2μm wide — small enough to penetrate the outer layer of skin (stratum corneum is ~10-40μm thick). Once embedded, calcium oxalate triggers:
→ MECHANICAL irritation: Physical needle puncture of nerve endings
→ CHEMICAL irritation: Oxalic acid is released alongside the needles, causing localised inflammation
→ PROTEASE injection: Some taro varieties co-package proteolytic enzymes with the raphides, which digest surrounding tissue — amplifying the sting

This is an evolved ANTI-HERBIVORY defence. The plant is trying to make you stop eating it. Humanity's response was to figure out how to eat it anyway.

THE SALT-ACID SOAK NEUTRALISES THIS:
→ Salt (NaCl) creates an osmotic gradient that draws water OUT of residual intact idioblasts, collapsing them before they can fire during cooking
→ Acid (vinegar/lime, pH ~3) dissolves the calcium oxalate crystals: CaC₂O₄ + 2H⁺ → Ca²⁺ + H₂C₂O₄. The needles literally dissolve.
→ HEAT during cooking destroys the remaining idioblasts — cells rupture thermally at 70°C+, but the raphides are already dissolved by the acid pre-treatment

This is why raw taro is dangerous (it can cause severe throat swelling if chewed raw) but cooked taro is perfectly safe. Cooking destroys 100% of the delivery mechanism. The salt-acid soak is belt-and-suspenders — unnecessary if you cook thoroughly, but eliminating the hand-itch during prep.

3CM CHUNKS — WHY THIS SIZE:
Too small (1cm) = taro disintegrates completely into the broth, creating a uniformly thick porridge with no textural contrast. Too large (5cm) = centre remains firm and starchy while exterior has dissolved — you eat half-raw taro in thick broth. At 3cm: the outer 5-8mm dissolves into the broth (providing mucilage thickening), while the core remains intact and creamy (providing textural contrast). This is CONTROLLED PARTIAL DISSOLUTION — the taro serves as both thickener AND food simultaneously.`,
      tip: "Wear disposable gloves or rub your hands with cooking oil before peeling taro. The oil creates a lipid barrier that prevents raphide needles from reaching your skin. If you've already been 'stung': soak hands in warm salt water for 5 minutes — the salt draws out the oxalic acid and the warmth increases blood flow to flush the irritant."
    },
    {
      step: 2,
      title: "Prepare Shrimp — Shell-On Extraction Protocol",
      detail: `Rinse shrimp. Trim the rostrum (sharp horn on the head) with scissors. Pull out the intestinal vein (dark line along the back) using a toothpick inserted at the 2nd segment — pull gently, the vein slides out intact.

DO NOT REMOVE THE HEADS OR SHELLS.

Reserve 4-5 whole shrimp for garnish. For the remaining shrimp: separate heads from bodies. Set aside.

THE HEAD-ON ARGUMENT — THREE FLAVOUR RESERVOIRS:
A shrimp head contains three components absent in the tail meat:

1. HEPATOPANCREAS (tomalley): The green-yellow paste inside the head. This organ concentrates free amino acids (glycine, alanine, glutamate) at 3-5× the concentration found in tail muscle. It also contains digestive enzymes (trypsin, chymase) that, when heated to 60-80°C, AUTO-DIGEST surrounding proteins into more free amino acids — a self-amplifying umami reaction.

2. ASTAXANTHIN: The orange-red carotenoid that makes cooked shrimp pink. In live shrimp, astaxanthin is bound to crustacyanin protein (which makes the shell grey-brown). At 80°C, crustacyanin denatures and releases FREE astaxanthin — which is fat-soluble and dissolves into the cooking oil, turning it orange. This is the natural food colouring of the broth. Tail shells contain astaxanthin too, but heads contain 3-5× more per gram.

3. CHITIN-BOUND AMINO ACIDS: The shell is made of chitin, a polysaccharide that has amino acids (N-acetylglucosamine) covalently bonded to its structure. Simmering extracts these amino acids into the broth — they contribute a sweet, shellfish-specific flavour impossible to create from tail meat alone.

Removing the heads and shells before cooking discards 40-60% of the potential flavour. The Quảng Bình grandmother's "rustic" shell-on technique is actually the MAXIMUM EXTRACTION method.`,
      tip: "The intestinal vein doesn't affect safety (cooking kills any bacteria), but it contains gritty sand and a bitter compound (bile-like) that muddies the clean shrimp sweetness. Removing it takes 5 seconds per shrimp and is always worth the effort."
    },
    {
      step: 3,
      title: "Build the Shrimp Base — Head-Oil Extraction",
      detail: `Heat 1 tablespoon oil in a soup pot over medium heat. Add the SHRIMP HEADS only. Press each head with a spatula to crush it slightly, releasing the hepatopancreas into the oil.

Stir-fry for 2-3 minutes until the oil turns deep orange-red and the heads are crispy. The kitchen should smell intensely of roasted shellfish.

Add sliced shallots and minced garlic. Stir 30 seconds.

Add the shrimp bodies (shell-on), fish sauce, and black pepper. Stir-fry 1 minute until shells turn pink.

THE HEAD-CRUSH TECHNIQUE — ASTAXANTHIN EXTRACTION:
Pressing the heads is not casual violence — it is targeted extraction. The hepatopancreas is a soft organ enclosed in the hard carapace. Crushing the carapace ruptures the hepatopancreas, releasing its contents directly into the hot oil.

At 120-140°C (oil temperature in the pan):
→ Hepatopancreas proteins denature instantly, releasing free glutamate (umami)
→ Astaxanthin, freed from crustacyanin, dissolves into the oil (fat-soluble, partition coefficient strongly favours oil over water)
→ Maillard reaction between shell amino acids and hepatopancreas sugars produces pyrazines and furanones — these are the "roasted seafood" aromatics

The oil is now an ASTAXANTHIN-LOADED, UMAMI-CONCENTRATED FLAVOUR BASE. When water is added in the next step, this oil disperses as microdroplets throughout the broth, carrying colour and flavour to every spoonful.

WHY OIL FIRST, NOT WATER:
Astaxanthin is fat-soluble (log P = 10.3 — extremely hydrophobic). If you boil shrimp heads directly in water, astaxanthin remains trapped in the shell fragments (no fat to dissolve into) → broth stays pale, flavour stays locked in the discarded shells. Oil extraction first → astaxanthin transfers to the oil → oil disperses in the broth → orange colour and carotenoid flavour throughout.

This is the same principle as making a roux in French cooking or a tarka in Indian cooking: fat-extraction first, then hydration. The technique is universal because the chemistry is universal.`,
      tip: "If the oil starts smoking, reduce heat immediately. Burnt astaxanthin turns bitter and the oil becomes an off-flavour carrier. The visual cue: deep orange = perfect, dark brown = overcooked. Remove from heat and start over if brown — the bitter compounds are irreversible."
    },
    {
      step: 4,
      title: "Build the Broth — Mucilage Activation Sequence",
      detail: `Pour in 1.2 litres of water (or light pork stock). Increase heat to high. Bring to a boil, then reduce to medium. Skim any foam that rises — this is coagulated protein from the shrimp heads (albumin), not dirt, but it clouds the broth if left.

Add the taro chunks. Return to a gentle boil, then reduce to a LOW SIMMER.

Simmer for 25-30 minutes, stirring gently every 8-10 minutes. Do NOT boil vigorously.

THE MUCILAGE ACTIVATION TIMELINE:
Taro mucilage activation is a STAGED process that requires specific thermal conditions:

Minutes 0-8: STARCH GELATINISATION PHASE
→ Taro starch granules (15-25μm diameter) begin swelling at 58°C and fully gelatinise by 72°C
→ The broth thickens slightly from starch release — this is a PRELIMINARY thickening, starch-based, similar to adding cornstarch
→ The taro chunks are still firm, cells largely intact

Minutes 8-18: CELL RUPTURE PHASE
→ At 85-95°C sustained temperature, taro cell walls (pectin + cellulose) begin to break down
→ Idioblast cells (which contained calcium oxalate, now dissolved by pre-treatment) rupture and release their mucilage polysaccharides into the broth
→ Galactomannan and glucomannan chains hydrate, swell, and UNFOLD — each molecule can hold 100-200× its weight in water
→ Broth viscosity increases dramatically — but the thickening is DIFFERENT from starch: it's silky and slippery rather than pasty and opaque

Minutes 18-30: INTEGRATION PHASE
→ Outer layer of taro chunks has dissolved into the broth entirely — you can no longer see where the taro ends and broth begins at the edges
→ Inner core remains intact but soft — a creamy, smooth mass
→ Mucilage network is fully hydrated and integrated — the broth has a natural body that clings to a spoon but flows easily
→ Starch and mucilage TOGETHER create a dual-system thickener: starch provides body (higher viscosity at rest), mucilage provides silkiness (shear-thinning behaviour — thins when stirred, thickens when still)

WHY LOW SIMMER, NOT VIGOROUS BOIL:
Vigorous boiling (100°C with rolling bubbles):
→ Taro chunks disintegrate completely within 15 minutes — no textural contrast, just uniformly thick sludge
→ Mucilage chains are MECHANICALLY BROKEN by turbulence — shorter chains = less thickening capacity
→ Shrimp overcook to rubber within minutes
→ Emulsified oil droplets from Step 3 are disrupted, causing oil to pool on surface

Low simmer (85-92°C with gentle surface movement):
→ Controlled dissolution — outer layer releases, inner core preserves
→ Mucilage chains remain intact and fully extended — maximum thickening per molecule
→ Shrimp remain tender (proteins set but not contracted)
→ Oil emulsion remains stable — colour and flavour distributed evenly

This is the difference between controlled extraction and destruction. Same ingredient, same temperature range, dramatically different outcomes based on KINETIC ENERGY (bubble turbulence).`,
      tip: "Stir gently with a ladle moving in ONE direction only. Circular stirring in both directions creates shear forces that fragment the taro surface unevenly — some chunks dissolve completely while others remain raw. One-directional stirring creates a gentle vortex that distributes heat evenly without mechanical violence."
    },
    {
      step: 5,
      title: "Finish the Soup — Shrimp Timing & Herb Architecture",
      detail: `After 25 minutes of simmering taro, taste the broth. Add 2 tablespoons fish sauce and 1 teaspoon sugar. Adjust salt. The broth should taste lightly seasoned — the fish sauce amplifies the shrimp's existing umami rather than dominating it.

If you reserved whole shrimp for garnish: add them NOW, during the final 3 minutes. They need exactly 3 minutes at a simmer to cook through without overcooking. The curl test applies: C-shape = 55-60°C = juicy; full circle = 70°C+ = tough.

Remove the soup from heat. Remove and discard the spent shrimp heads (they've given everything to the broth).

Add torn rau ngổ (rice paddy herb) and sliced scallions. Stir once. Crack fresh black pepper over the surface.

Ladle into bowls. Place a whole garnish shrimp on top of each bowl. Finish with fried shallots if using.

RAU NGỔ — THE FIXED HERB FOR TARO SOUP:
Rau ngổ (Limnophila aromatica, rice paddy herb) is the specific herb paired with canh môn across Quảng Bình, and the pairing is chemically precise.

Taro soup has a DOMINANT FLAVOUR PROFILE of: earthy (geosmin from taro), sweet (free sugars from taro starch breakdown), umami (shrimp glutamate), and fatty (shrimp oil).

What's MISSING: brightness, citric bite, aromatic lift.

Rau ngổ supplies exactly this gap:
→ Limonene: citrusy terpene (also found in lemon peel) — provides the "lift" absent from the heavy, earthy broth
→ Perillaldehyde: the same compound in tía tô (perilla) — adds a sharp, slightly minty edge
→ Cuminaldehyde: warm, cumin-like — bridges the herb's brightness back to the earthy base notes of the taro

The three compounds together create a BRIDGE between earth (taro) and sky (citrus), with cumin warmth as the middle register. No other single herb covers all three frequency bands simultaneously.

SCALLION TIMING: Added OFF heat. At 100°C, scallion allicin converts to harsh sulfur compounds in 30 seconds. Off-heat (80-90°C), the conversion favours gentle diallyl disulfides — sweet rather than sharp. Same principle as the mỡ hành thermal window, but even gentler.`,
      tip: "If rau ngổ is unavailable: use a combination of rau răm (Vietnamese coriander, provides citral-like brightness) + a small pinch of ground cumin (provides the warm middle register). Two herbs approximate what one rau ngổ does alone — it's the only practical substitute."
    }
  ],

  proTips: [
    {
      title: "Taro Mucilage vs. Starch — Two Thickening Systems in One Root",
      content: `Most cooks think of taro as a starchy root. It is — but its thickening power comes primarily from MUCILAGE, not starch. Understanding the difference is essential:

STARCH THICKENING:
→ Mechanism: Starch granules absorb water, swell, burst → released amylose and amylopectin chains entangle → viscosity increases
→ Rheology: Newtonian (mostly) — viscosity stays constant regardless of stirring speed. Pasty, opaque, heavy mouthfeel.
→ Retrogradation: Amylose re-crystallises on cooling → the soup becomes GEL-LIKE when refrigerated, breaks into grainy lumps when reheated
→ Feel in mouth: Thick, coating, "heavy on the tongue"

MUCILAGE THICKENING:
→ Mechanism: Galactomannan and glucomannan chains hydrate and unfold → form a NETWORK of extended polymer chains in solution → viscosity increases through entanglement, not granule swelling
→ Rheology: Non-Newtonian (shear-thinning) — viscosity DECREASES when stirred or swallowed (fluid flows easily), INCREASES when still (holds its shape in the bowl). This creates the sensation of "silky" — it resists in the spoon but glides in the mouth.
→ No retrogradation: Mucilage does not crystallise on cooling → the soup stays fluid and silky even refrigerated
→ Feel in mouth: Silky, slippery, "light despite being thick"

Taro delivers BOTH SYSTEMS simultaneously — starch provides body (structural viscosity), mucilage provides silk (dynamic viscosity). This dual-system is why canh môn has a texture that cornstarch-thickened soups cannot replicate. No added thickener combines these two rheological behaviours in the same molecule.

CONNECTION TO CHÁO CANH: In cháo canh Quảng Bình, the mucilage comes from EXTERNAL sources (rau đay, mồng tơi) added to a starch base (rice). Canh môn achieves the same dual-system from a SINGLE INGREDIENT — the taro generates both starch body and mucilage silk internally. Same physics, more elegant packaging.`
    },
    {
      title: "The Shrimp Shell Economy — Nothing Wasted",
      content: `The shell-on technique extracts three classes of compounds from parts most Western recipes discard:

SHELL (chitin):
→ Contains N-acetylglucosamine (an amino sugar that tastes sweet-umami)
→ Simmering for 25+ minutes at pH 6-7 slowly hydrolyses chitin → releases glucosamine into the broth
→ This is the same glucosamine sold as a joint supplement — naturally present in shrimp shells, extracted for free by simmering

HEAD (hepatopancreas + brain):
→ Concentrated free amino acid reservoir (3-5× tail muscle levels)
→ Contains digestive enzymes that auto-digest proteins at 60-80°C → self-amplifying umami
→ Astaxanthin bound to crustacyanin → released at 80°C → fat-soluble orange colour
→ Total flavour contribution of heads: ~40-50% of the broth's umami + 100% of its colour

TAIL SHELL:
→ Less flavour than head, but provides astaxanthin and a small amount of chitin-hydrolysate
→ The tail shell is also a TEXTURAL SIGNAL when eating: the moment you encounter shell resistance while chewing, your brain prepares for the sweet shrimp meat underneath — this is anticipatory flavour priming

Total waste from a shell-on shrimp soup: head carapace fragments + tail shells picked out during eating. Total waste from a peeled shrimp soup: heads, shells, AND the 40-50% of flavour they contain. The "refined" technique is the wasteful one.`
    },
    {
      title: "Gió Lào Hydration Pair — Canh Môn + Cháo Canh",
      content: `Quảng Bình has two mucilage-thickened soups that form a HYDRATION PAIR during the Gió Lào (foehn wind) season (April-August):

CHÁO CANH: Rice-based + external mucilage (rau đay + mồng tơi) = CARBOHYDRATE-CENTRED hydration. The rice provides glycogen replenishment, the mucilage slows gastric emptying (keeping the water in the body longer). Eaten in the MORNING — sustained energy for the day.

CANH MÔN NẤU TÔM: Taro-based + internal mucilage + shrimp protein = PROTEIN-CENTRED hydration. The taro provides potassium (540mg/100g — higher than banana) for electrolyte balance lost through sweat, the shrimp provides amino acids for muscle recovery, the mucilage again slows water loss. Eaten in the EVENING — recovery after the day's dehydration.

The pair is complementary:
→ Morning (cháo canh): carbs + mucilage → sustained energy + water retention
→ Evening (canh môn): protein + potassium + mucilage → recovery + electrolyte rebalancing

Neither dish was designed this way consciously — there is no nutritional textbook behind them. They evolved through generations of Quảng Bình bodies responding to Gió Lào stress, selecting the foods that made them feel best at each time of day. The result is a nutritionally precise hydration protocol discovered empirically and transmitted through family kitchens.

Taro's potassium content is particularly relevant: Gió Lào winds can cause daily sweat losses of 2-4 litres, depleting potassium at ~200mg/litre lost. A single bowl of canh môn replenishes approximately 50-70% of a typical day's potassium deficit from perspiration.`
    },
    {
      title: "Taro Varieties — Not All Môn Are Equal",
      content: `Vietnamese markets distinguish several taro varieties that behave differently in soup:

KHoai MÔN (Colocasia esculenta var. esculenta):
→ The standard large taro corm. Purple-flecked flesh. High mucilage, moderate starch.
→ BEST for canh môn: dissolves partially, creates silky broth, retains creamy centre
→ This is what the recipe calls for

KHOAI SỌ (Colocasia esculenta var. antiquorum):
→ Smaller cormels, denser, less mucilage, higher starch
→ Holds shape during cooking — poor for thickening, good for stews where you want intact taro pieces
→ NOT recommended for this recipe (insufficient mucilage for broth thickening)

KHOAI MÔN TÍM (Purple taro / Okinawan taro):
→ Deep purple flesh (anthocyanin pigments). Moderate mucilage, high starch.
→ Turns the broth purple — visually dramatic but flavour is sweeter and less earthy
→ Acceptable substitute but different character

KHOAI MÔN RUỘT VÀNG (Yellow-fleshed taro):
→ High carotenoid content. Low mucilage.
→ Produces a golden broth but without the silky texture — more like a potato soup
→ Not recommended

The key variable is MUCILAGE CONTENT, which correlates roughly with sliminess when raw — the slimier the peeled taro feels, the more mucilage it will release into the broth. This is the one case where "slimy" is a quality indicator, not a defect.`
    }
  ],

  nutritionInfo: {
    calories: 235,
    protein: "18g",
    carbs: "28g",
    fat: "6g",
    fiber: "4g"
  },

  tags: ["Quảng Bình", "Taro", "Shrimp", "Soup", "Mucilage", "Central Vietnam", "Gió Lào", "Hydration", "Shell-On", "Rau Ngổ"],

  relatedRecipes: [
    {
      title: "Cháo Canh Quảng Bình",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
      slug: "chao-canh-quang-binh",
      description: "The hydration pair partner — rice-based mucilage soup for mornings"
    },
    {
      title: "Cá Nướng Ba Đồn",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
      slug: "ca-nuong-ba-don",
      description: "Charcoal-grilled fish in wild betel leaf from the Gianh River"
    },
    {
      title: "Ram Bắp Quảng Bình",
      image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400",
      slug: "ram-bap-quang-binh",
      description: "Crispy cabbage spring rolls with pre-salting osmotic engineering"
    }
  ],

  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Canh Môn Nấu Tôm — Quảng Bình Taro & Shrimp Soup",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "description": "A naturally thickened taro and shrimp soup from Quảng Bình. Taro's own mucilage creates a silky, shear-thinning broth without added thickener, while shell-on shrimp provide colour and deep umami from head-to-tail extraction.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1200",
    "prepTime": "PT25M",
    "cookTime": "PT35M",
    "totalTime": "PT60M",
    "recipeYield": "4 servings",
    "recipeCategory": "Soup",
    "recipeCuisine": "Vietnamese",
    "keywords": "canh môn, taro soup, shrimp soup, Quảng Bình, mucilage thickened, shell-on shrimp, Vietnamese soup, taro shrimp, Central Vietnam, Gió Lào, rau ngổ",
    "recipeIngredient": [
      "500g taro (khoai môn)",
      "300g whole fresh shrimp (head-on, shell-on)",
      "3 shallots",
      "3 cloves garlic",
      "1.2 litres water or pork stock",
      "2 tablespoons fish sauce",
      "1 teaspoon sugar",
      "4-5 stalks rau ngổ (rice paddy herb)",
      "2 scallions",
      "Fresh black pepper"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Peel taro, cut into 3cm chunks, soak in salted acidulated water for 15 minutes to neutralise calcium oxalate. Drain and rinse." },
      { "@type": "HowToStep", "text": "Separate shrimp heads from bodies. Crush heads in hot oil until oil turns orange-red. Add shallots, garlic, and shrimp bodies. Stir-fry briefly." },
      { "@type": "HowToStep", "text": "Add water, bring to a boil. Add taro chunks. Reduce to a low simmer for 25-30 minutes, stirring gently every 8-10 minutes." },
      { "@type": "HowToStep", "text": "Season with fish sauce, sugar, and salt. Add reserved whole shrimp for final 3 minutes. Remove from heat." },
      { "@type": "HowToStep", "text": "Add torn rau ngổ and sliced scallions off heat. Crack black pepper. Serve with optional fried shallots." }
    ],
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "235 kcal",
      "proteinContent": "18g",
      "carbohydrateContent": "28g",
      "fatContent": "6g",
      "fiberContent": "4g"
    }
  }
};

export default function CanhMonNauTomPage() {
  return <RecipeLayout recipe={recipeData} />;
}