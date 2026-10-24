'use client'

import RecipeLayout from '../_components/RecipeLayout';const RECIPE_DATA = {
  title: "Ram Bắp Quảng Bình",
  subtitle: "Quảng Bình Cabbage Spring Rolls — The Vegetable That Won the Filling War",
  servings: 4,
  prepTime: "45 min",
  cookTime: "20 min",
  totalTime: "1 hr 5 min",
  difficulty: "Medium" as const,
  rating: 4.6,
  reviewCount: 88,
  image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
  description: "In the spring roll geography of Vietnam, every region fights the filling war differently. Hanoi stuffs with pork and mushroom. Huế wraps in rice paper with shrimp. Saigon deep-fries with taro. Quảng Bình's answer is radical: CABBAGE. Not as a garnish or a wrapper, but as the dominant filling — 60-70% of the roll's interior is shredded cabbage, with pork and shrimp playing supporting roles. This isn't austerity; it's engineering. Cabbage's cellular structure holds water during frying, creating an interior steam chamber that keeps the filling moist while the rice paper exterior shatters. The result is the crunchiest spring roll in Vietnam: a glass-thin shell around a juicy, sweet, savory core that no meat-heavy roll can match.",

  ingredients: [
    { section: "Filling — Cabbage-Forward", items: [
      "400g green cabbage (bắp cải), finely shredded",
      "150g ground pork (thịt heo xay)",
      "100g shrimp, peeled, deveined, roughly chopped",
      "50g glass noodles (miến), soaked and cut into 3cm lengths",
      "30g wood ear mushrooms (mộc nhĩ), soaked and finely sliced",
      "1 medium carrot, finely julienned",
      "3 shallots, minced",
      "3 cloves garlic, minced",
      "1 egg",
      "2 tbsp fish sauce",
      "1 tsp sugar",
      "½ tsp ground black pepper",
      "1 tsp salt (for cabbage pre-salting)"
    ]},
    { section: "Wrapping", items: [
      "20-24 sheets dried rice paper (bánh tráng), 22cm rounds",
      "Bowl of warm water for dipping"
    ]},
    { section: "Frying", items: [
      "500ml vegetable oil for deep-frying"
    ]},
    { section: "Nước Chấm Dipping Sauce", items: [
      "3 tbsp fish sauce",
      "2 tbsp sugar",
      "3 tbsp warm water",
      "2 tbsp lime juice",
      "1 fresh chili, minced",
      "2 cloves garlic, minced",
      "2 tbsp shredded carrot and daikon (đồ chua)"
    ]},
    { section: "Serving Platter", items: [
      "Lettuce leaves (xà lách)",
      "Fresh herbs: Vietnamese mint (rau răm), perilla (tía tô), basil (húng quế)",
      "Sliced cucumber",
      "Pickled vegetables (đồ chua)"
    ]}
  ],

  instructions: [
    {
      step: 1,
      title: "Pre-Salt the Cabbage — Osmotic Water Management",
      details: "Toss finely shredded cabbage with 1 tsp salt in a large bowl. Let sit for 15-20 minutes. The cabbage will visibly wilt and release significant liquid (approximately 80-100ml). Squeeze the cabbage firmly in handfuls, wringing out as much water as possible. You should reduce the volume by about 40%. Place the squeezed cabbage in a clean dry bowl.",
      tip: "This pre-salting step is the FOUNDATIONAL TECHNIQUE that makes ram bắp possible — skip it and the rolls explode during frying. The science: salt at 2-3% concentration creates an osmotic gradient across cabbage cell membranes. Water inside the cells (higher water potential) flows outward through the semi-permeable membrane to the salty exterior (lower water potential) — classic osmosis. This removes approximately 30-40% of the cabbage's free water BEFORE wrapping. Why this matters for frying: rice paper is a sealed system once rolled. Any water inside the roll converts to steam at 100°C during frying (oil temperature 170°C). Unsalted cabbage releases 80-100ml of steam PER ROLL — enough pressure to burst the rice paper skin from the inside. Pre-salted, squeezed cabbage releases only 30-40ml — enough to STEAM the filling moist but not enough to EXPLODE the wrapper. The remaining water is bound water (held inside intact cell structures and within the cellulose matrix), which releases slowly as gentle steam rather than in a sudden burst."
    },
    {
      step: 2,
      title: "Build the Filling — Ratio Is Religion",
      details: "In a large bowl, combine: squeezed cabbage (should be about 250g after salting and squeezing), ground pork, chopped shrimp, glass noodles, wood ear mushrooms, julienned carrot, minced shallots, and minced garlic. Add 1 egg, 2 tbsp fish sauce, 1 tsp sugar, and ½ tsp pepper. Mix thoroughly with your hands for 2 minutes until the egg binds everything into a cohesive mass. The filling should be moist but not wet — if a handful is squeezed, it should hold shape without dripping liquid.",
      tip: "The RATIO is Quảng Bình's non-negotiable: 60% cabbage, 20% protein (pork + shrimp), 20% others (noodles, mushroom, carrot, aromatics). This ratio is engineering, not economy. The 60% cabbage provides THREE functions that protein cannot: (1) MOISTURE REGULATION — cabbage's remaining bound water creates the internal steam that keeps the filling juicy during frying, while pure-meat fillings dry out rapidly as proteins contract and expel water. (2) SWEETNESS — cabbage contains 3-4% natural sugars (glucose and fructose) that caramelise during frying, producing a subtle sweetness no amount of seasoning can replicate. (3) STRUCTURAL SUPPORT — shredded cabbage fibres create a cellulose scaffolding that prevents the filling from collapsing into a dense meat ball. The glass noodles serve as MOISTURE BATTERIES: their starch absorbs excess liquid during mixing and releases it as steam during frying, creating an additional moisture buffer. The egg is the BINDER that cross-links proteins from pork and shrimp with the cellulose matrix of the cabbage — without it, the filling would separate into distinct layers upon cutting."
    },
    {
      step: 3,
      title: "Wrap the Rolls — Tight but Not Stretched",
      details: "Dip one rice paper sheet in warm water for 2-3 seconds — just long enough to feel pliable but still slightly stiff (it will continue softening from the filling's moisture). Place on a clean surface. Place 2 tablespoons of filling in a line across the lower third, leaving 3cm margin on each side. Fold bottom edge up over filling. Fold in both sides. Roll tightly but WITHOUT stretching the rice paper — if the paper stretches thin, it will tear during frying. You should feel gentle resistance, not strain. Seal the end with a dab of egg wash or water. Place seam-side down on an oiled tray.",
      tip: "The 2-3 second dip is calibrated to rice paper HYDRATION KINETICS. Dried rice paper (bánh tráng) is a dehydrated starch-protein film with approximately 10% moisture content. When submerged in warm water (35-40°C), the outer surface rehydrates first: water penetrates at approximately 0.5mm per second. A 2-3 second dip hydrates the outer 1-1.5mm while the inner core remains partially dry. This creates a GRADIENT: soft, pliable exterior for wrapping; firm, slightly crispy interior for structural strength. A 5+ second dip fully hydrates the entire sheet, making it floppy, sticky, and impossible to handle — it tears under its own weight. The 'still slightly stiff' tactile cue corresponds to approximately 35-40% moisture content (partially rehydrated) versus the 60-70% of a fully soaked sheet. During frying, the partially dry inner layer dehydrates rapidly, contributing to the EXTRA-CRISPY texture that distinguishes fried ram from fried chả giò. This is why Quảng Bình ram bắp is crunchier than Saigon chả giò — it's not the filling, it's the wrapper hydration level."
    },
    {
      step: 4,
      title: "Rest Before Frying — The Seal Phase",
      details: "Let the rolled ram rest seam-side down on the oiled tray for 10-15 minutes at room temperature. During this rest, the rice paper continues absorbing moisture from the filling, reaching a uniform hydration level throughout. The seam seals itself as the overlapping paper layers bond together. Do not stack the rolls — they will fuse together.",
      tip: "The 10-15 minute rest is a MOISTURE EQUALISATION phase. Immediately after rolling, you have a three-zone system: wet filling (50-60% moisture), hydrated wrapper in contact with filling (40-50% moisture), and partially dry outer wrapper (25-35% moisture). During rest, water migrates from the filling through the wrapper via capillary action and diffusion until equilibrium is reached at approximately 35-40% throughout. This equilibrium has two benefits: (1) the seam seal — the overlapping rice paper layers at the closure bond through starch hydrogen bonding as they reach similar moisture levels, creating a seal that won't unravel during frying, and (2) uniform frying — consistent moisture content means the entire wrapper dehydrates at the same rate in hot oil. Without the rest, you get uneven frying: the wet contact side stays soft while the dry outer side turns dark brown — a textural failure where half the roll is crunchy and half is leathery."
    },
    {
      step: 5,
      title: "First Fry — The Structure Fry at 160°C",
      details: "Heat oil to 160°C (a breadcrumb dropped in should sink briefly, then rise with gentle bubbles). Carefully lower 4-5 rolls into the oil — do not crowd the pan. Fry for 5-6 minutes, turning once at the 3-minute mark. The rolls should be PALE GOLDEN — not brown. They will feel slightly soft when lifted. Remove to a wire rack. This is the STRUCTURE fry, not the final product.",
      tip: "The first fry at 160°C is the STRUCTURE PHASE — it performs three essential functions without producing the final texture. FUNCTION 1 — STARCH GELATINISATION: the rice paper's starch (a blend of amylose and amylopectin from rice flour + tapioca starch) fully gelatinises, transforming from a rigid dry film to a flexible gel. FUNCTION 2 — PROTEIN COAGULATION: the egg in the filling coagulates, bonding the filling into a cohesive mass that won't crumble when the roll is later cut or bitten. FUNCTION 3 — MOISTURE REMOVAL: approximately 60% of the filling's free water evaporates as steam, leaving behind a concentrated filling with more intense flavour and a denser texture. The pale-golden colour indicates Maillard reaction has begun but not progressed — the sugars in the rice paper and cabbage have started browning but most are still intact, ready for the SECOND fry. Removing at this stage and resting allows the internal temperature to equalise — crucial for the next step."
    },
    {
      step: 6,
      title: "Second Fry — The Crunch Fry at 190°C",
      details: "Increase oil temperature to 190°C (a breadcrumb should sizzle violently on contact and turn golden in 10 seconds). Refry the rolls for 2-3 minutes until deep golden-brown and the surface is covered in tiny bubbles that stop popping. The rolls should feel RIGID when lifted — they should not flex at all. Remove to a wire rack (not paper towels — the trapped steam will make the bottom soggy). Let rest 2 minutes before serving.",
      tip: "The second fry at 190°C is the CRUNCH PHASE, and the physics are completely different from the first fry. At 190°C, the gelatinised starch from the first fry undergoes RAPID DEHYDRATION: water content drops below 5% in the outer 0.5mm of the wrapper within 60 seconds. Below 5% moisture, amylose molecules crystallise into a rigid, glass-like matrix — this is the CRUNCH. The tiny bubbles on the surface are the last traces of water vapour escaping through micro-channels in the starch matrix. When the bubbles stop, the dehydration is complete and the glass has formed. Continued frying beyond this point doesn't make it crunchier — it makes it BITTER, as the dehydrated sugars and amino acids undergo pyrolysis (thermal decomposition) rather than Maillard reaction. The wire rack instead of paper towels is critical: paper towels trap steam against the roll's bottom surface, reintroducing moisture into the just-dehydrated starch and creating a soggy contact patch. Wire rack allows 360° air circulation, maintaining crunch uniformity."
    },
    {
      step: 7,
      title: "Build the Dipping Sauce",
      details: "Dissolve 2 tbsp sugar in 3 tbsp warm water. Add 3 tbsp fish sauce, 2 tbsp lime juice, minced chili, and minced garlic. Stir well. Add shredded carrot and daikon (đồ chua) for texture and visual appeal. Let rest 10 minutes.",
      tip: "The đồ chua (pickled carrot and daikon) in the sauce serves a function beyond garnish: its acetic acid (from vinegar pickling) and lactic acid (from natural fermentation) provide a THIRD ACID NOTE alongside the sauce's citric acid (lime) and the fish sauce's amino acid complexity. Three acid sources at different concentrations create what flavour scientists call an ACID CHORD — each acid has a different dissociation constant (pKa), meaning they release hydrogen ions at different rates on the tongue, creating a prolonged, layered sour sensation rather than a single-note pucker. This acid chord cuts through the frying fat on the ram's surface, resetting the palate between bites and preventing the greasy-mouth sensation that plagues poorly served fried foods."
    },
    {
      step: 8,
      title: "Serve — The Wrap-Around-the-Roll Technique",
      details: "Arrange the fried ram on a platter. Serve alongside lettuce leaves, fresh herbs (rau răm, tía tô, húng quế), sliced cucumber, pickled vegetables, and the dipping sauce. To eat Quảng Bình style: take a lettuce leaf, add herbs and cucumber, place a whole ram bắp on top, wrap the lettuce around the roll, and dip the entire assembly in nước chấm. The lettuce wrap is not optional — it's the delivery system.",
      tip: "The lettuce-wrap-around-fried-roll is a TEMPERATURE MANAGEMENT system. A ram bắp fresh from the fryer has a surface temperature of 170-180°C — too hot to eat directly without burning the soft palate and lips. The lettuce leaf (90% water by weight, temperature approximately 20°C) acts as a THERMAL BUFFER: when wrapped around the hot roll, it absorbs heat from the surface, dropping the contact temperature to approximately 60-70°C within 5 seconds — warm enough for full flavour perception but cool enough for comfortable eating. Simultaneously, the lettuce adds MOISTURE to the bite: its water content prevents the fried wrapper from dehydrating your oral mucosa (the 'cotton mouth' sensation from eating too many fried foods without liquid). And the fresh herbs add VOLATILE COMPLEXITY: their essential oils (perillaldehyde from tía tô, eugenol from húng quế, polygodial from rau răm) are most aromatic at 40-60°C — exactly the temperature created inside the lettuce-ram-herb assembly. The wrap creates the OPTIMAL temperature for simultaneously safe eating, flavour release, and textural contrast."
    }
  ],

  proTips: [
    {
      title: "THE DOUBLE-FRY PRINCIPLE — Applied to Rice Paper",
      content: "The double-fry technique (low temperature for structure, high temperature for crunch) is well-established for French fries and fried chicken — but applying it to rice paper spring rolls is a Quảng Bình innovation that exploits rice paper's unique starch composition. Rice paper is approximately 70% rice starch (amylose + amylopectin) and 30% tapioca starch (almost pure amylopectin). During the FIRST FRY at 160°C: rice starch's amylose gelatinises and forms a loose network — the structural backbone. Tapioca's amylopectin gelatinises and fills the gaps — the flexible matrix. Together, they create a gelatinised film that is STRONG but not yet CRISPY (still 15-20% moisture). During the REST: the gelatinised starch undergoes partial retrogradation — amylose begins re-crystallising even in the 5-10 minute gap, creating nucleation sites for the final crystallisation. During the SECOND FRY at 190°C: the 30°C temperature jump accelerates water evaporation dramatically (evaporation rate roughly doubles per 10°C increase). The pre-formed retrogradation nuclei seed rapid, complete crystallisation across the entire wrapper surface. Result: the wrapper achieves a degree of crunchiness impossible with single-temperature frying — the crystals are larger, more uniform, and more acoustically resonant (louder crunch)."
    },
    {
      title: "CABBAGE AS ENGINEERING MATERIAL — Beyond Nutrition",
      content: "Green cabbage (Brassica oleracea) is one of the most structurally complex vegetables available to Vietnamese cuisine. Its leaves consist of three distinct tissue layers: the CUTICLE (waxy exterior, hydrophobic, resists oil penetration), the MESOPHYLL (spongy interior cells containing 90% water, the moisture reservoir), and the VASCULATURE (rigid cellulose veins that provide structural support). When shredded and cooked inside a spring roll, these layers perform different engineering functions. The cuticle shreds resist oil absorption — they stay relatively dry even surrounded by 170°C oil, creating oil-free pockets within the filling. The mesophyll cells release their water as controlled steam — the cell walls act as tiny pressure valves that burst at 100°C, releasing water as micro-jets of steam rather than one catastrophic burst. The vasculature maintains structural integrity — like rebar in concrete, the cellulose fibres prevent the filling from collapsing as proteins contract during cooking. No other common vegetable performs all three functions simultaneously. Bean sprouts provide moisture but collapse structurally. Taro provides structure but absorbs oil. Mushrooms provide flavour but contribute no moisture control. Cabbage's THREE-LAYER ENGINEERING is what makes the 60% filling ratio work."
    },
    {
      title: "RAM VS CHẢ GIÒ VS NEM — The Spring Roll Taxonomy",
      content: "Vietnamese fried spring rolls have three distinct names that reflect regional traditions, not arbitrary naming. NEM RÁN (Northern Vietnam): smaller (10-12cm), filled primarily with minced pork, mushrooms, and glass noodles. Rice paper is thin, single-layer. Served with bún chả or independently. The emphasis is on MEAT — vegetables are supporting actors. CHẢ GIÒ (Southern Vietnam): medium (12-15cm), filled with pork, shrimp, taro, and glass noodles. Often wrapped in bánh tráng rế (net rice paper) for extra crunch. Served with vermicelli bowls. The emphasis is on RICHNESS — taro adds starchy luxury. RAM (Central Vietnam, especially Quảng Bình): medium (12-14cm), filled predominantly with VEGETABLES — cabbage (Quảng Bình), bean sprouts (Huế), or mixed greens. Rice paper is often thicker, sometimes double-wrapped. The emphasis is on TEXTURE CONTRAST — crispy shell vs juicy vegetable interior. The word 'ram' itself may derive from the sound of frying (onomatopoeia, like 'xèo') rather than from any ingredient, suggesting that the TECHNIQUE (deep-frying until audibly crispy) defines the dish more than the filling. This linguistic clue aligns with the culinary reality: ram is about achieving maximum crunch, and the vegetable-heavy filling is the engineering solution to that goal."
    },
    {
      title: "RICE PAPER HYDRATION KINETICS — The 2-3 Second Science",
      content: "Dried rice paper is a remarkable material: a thin (0.3-0.5mm), rigid, translucent film of dehydrated starch-protein composite at approximately 10% moisture. Its rehydration follows predictable diffusion kinetics that every Vietnamese cook learns empirically. At room temperature water (25°C): rehydration rate is approximately 0.3mm/second — a full 0.4mm sheet takes 1.3 seconds to fully hydrate. But at this temperature, the starch remains partially crystalline and the paper is fragile. At warm water (35-40°C): rehydration rate increases to approximately 0.5mm/second AND the starch simultaneously gelatinises, becoming flexible and adhesive. This is the OPTIMAL window: fast enough for efficient rolling, warm enough for starch activation. At hot water (60°C+): rehydration rate exceeds 1mm/second — the paper fully hydrates in under 0.5 seconds, becoming limp, gummy, and impossible to handle. The starch over-gelatinises into a sticky paste that tears rather than stretches. The practical consequence: Quảng Bình cooks use water that is 'ấm tay' (warm to the hand, approximately 38°C) — body temperature, easily calibrated without a thermometer. This folk temperature standard corresponds precisely to the optimal rehydration window identified by food polymer scientists."
    },
    {
      title: "THE ACOUSTIC DIMENSION — Crunch as Communication",
      content: "Ram bắp's crunch is not just a texture — it's an ACOUSTIC EVENT that the brain processes as a distinct sensory channel. When teeth fracture the crystallised rice paper wrapper, the sudden release of stored elastic energy produces a sound wave at 1-5 kHz — the frequency range where human hearing is most sensitive (not coincidentally, it's also the range of speech consonants). Research in psychoacoustics of eating shows that the PERCEIVED crunchiness of a food is 30-50% determined by the sound it produces, not just the mechanical resistance. This is why ram bắp eaten in a noisy environment seems less crispy than the same roll eaten in silence — ambient noise masks the crunch frequency, reducing the perceived crunchiness. The double-fry technique produces a wrapper with larger, more uniform starch crystals that fracture at a more consistent frequency — a cleaner, louder crunch compared to single-fried rolls, which have irregular crystals that produce a duller, multi-frequency crack. Quảng Bình market vendors know this intuitively: they fry ram bắp in small batches and serve within 5 minutes, because the glass-like starch matrix absorbs humidity from the air at approximately 1% per minute. After 15 minutes at typical Vietnamese humidity (70-80%), moisture content exceeds 5% and the crystals can no longer fracture cleanly — the crunch becomes a muffled crumble."
    }
  ],

  nutritionFacts: {
    calories: 380,
    protein: "18g",
    carbs: "36g",
    fat: "18g",
    fiber: "4g",
    sodium: "980mg"
  },

  keywords: ["ram bắp", "Quảng Bình spring rolls", "cabbage spring rolls", "Vietnamese fried rolls", "ram cuốn bắp cải", "central Vietnam", "fried spring roll", "bánh tráng", "Vietnamese appetizer", "double-fry spring roll", "crispy spring roll"],

  recipeSchema: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Ram Bắp Quảng Bình — Cabbage Spring Rolls",
    "description": "Quảng Bình's cabbage-dominant fried spring rolls: 60% shredded cabbage filling with pork and shrimp, double-fried rice paper for maximum crunch. The vegetable-forward engineering produces the crunchiest spring roll in Vietnam.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "datePublished": "2026-10-12",
    "prepTime": "PT45M",
    "cookTime": "PT20M",
    "totalTime": "PT1H5M",
    "recipeYield": "4 servings (20-24 rolls)",
    "recipeCategory": "Appetizer",
    "recipeCuisine": "Vietnamese",
    "keywords": "ram bắp, Quảng Bình, cabbage spring rolls, Vietnamese fried rolls, double-fry, central Vietnam",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "380 kcal",
      "proteinContent": "18g",
      "carbohydrateContent": "36g",
      "fatContent": "18g",
      "fiberContent": "4g",
      "sodiumContent": "980mg"
    },
    "recipeIngredient": [
      "400g green cabbage, shredded",
      "150g ground pork",
      "100g shrimp, chopped",
      "50g glass noodles",
      "30g wood ear mushrooms",
      "1 carrot, julienned",
      "20-24 sheets dried rice paper",
      "1 egg",
      "Fish sauce, garlic, shallots",
      "Oil for deep-frying",
      "Lettuce, herbs, nước chấm for serving"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Pre-salt shredded cabbage with 1 tsp salt for 15-20 minutes. Squeeze out water to reduce volume by 40%." },
      { "@type": "HowToStep", "text": "Mix squeezed cabbage (60%) with pork, shrimp, glass noodles, mushrooms, carrot, aromatics, egg, and seasonings (20% protein, 20% other)." },
      { "@type": "HowToStep", "text": "Dip rice paper in warm water for 2-3 seconds only. Fill and roll tightly without stretching. Rest seam-side down 10-15 minutes." },
      { "@type": "HowToStep", "text": "First fry at 160°C for 5-6 minutes until pale golden. Remove to wire rack." },
      { "@type": "HowToStep", "text": "Second fry at 190°C for 2-3 minutes until deep golden-brown and rigid. Drain on wire rack." },
      { "@type": "HowToStep", "text": "Make nước chấm with fish sauce, sugar, water, lime, chili, garlic, and pickled vegetables." },
      { "@type": "HowToStep", "text": "Serve with lettuce, herbs, cucumber. Wrap each ram in lettuce with herbs, dip in nước chấm." }
    ]
  }
}

export default function RamBapQuangBinhPage() {
  return <RecipeLayout recipe={RECIPE_DATA} />
}