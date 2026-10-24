'use client'

import RecipeLayout from '@/components/RecipeLayout'

const RECIPE_DATA = {
  title: "Cơm Hến Quảng Trị",
  subtitle: "Quảng Trị Baby Clam Rice — The Cold Rice That Proved Poverty Could Be Delicious",
  servings: 4,
  prepTime: "40 min",
  cookTime: "20 min",
  totalTime: "1 hr",
  difficulty: "Medium" as const,
  rating: 4.7,
  reviewCount: 93,
  image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
  description: "Cơm hến is often credited to Huế, but the Quảng Trị version came first — rawer, spicier, less manicured, and built on a fundamental premise that offends every Asian rice culture: the rice is served COLD. Not leftover cold, not forgotten cold — deliberately, philosophically cold. In a cuisine where hot rice signifies prosperity, cold rice was the food of the too-poor-to-afford-firewood. Quảng Trị transformed this poverty marker into a textural choice: cold rice grains remain separate and firm, each one a tiny vehicle for the scalding clam broth, the fiery chili oil, and the fourteen-ingredient topping cascade that turns a bowl of leftovers into one of Central Vietnam's most complex dishes.",

  ingredients: [
    { section: "Rice — Cold and Intentional", items: [
      "400g cooked jasmine rice, cooled to room temperature",
      "Best: yesterday's rice, refrigerated overnight"
    ]},
    { section: "Hến — Baby Clams", items: [
      "1kg fresh baby clams (hến), live in shell",
      "1L water for cooking clams",
      "2 stalks lemongrass, bruised",
      "1 tsp salt (for purging)"
    ]},
    { section: "The Fourteen-Layer Topping", items: [
      "3 tbsp roasted peanuts, coarsely crushed",
      "2 tbsp toasted sesame seeds",
      "3 tbsp fried pork rinds (tóp mỡ), crumbled",
      "3 shallots, thinly sliced and fried crispy (hành phi)",
      "2 tbsp dried shrimp (tôm khô), roughly chopped",
      "100g banana blossom heart (bắp chuối), thinly shredded",
      "50g Vietnamese coriander (rau răm), roughly chopped",
      "30g Vietnamese mint (húng lủi), roughly chopped",
      "30g perilla (tía tô), chiffonade",
      "3 scallions, finely sliced",
      "2 fresh red chilies, thinly sliced",
      "50g pickled garlic (tỏi ngâm), sliced",
      "Lime wedges",
      "1 starfruit (khế), thinly sliced — or green mango"
    ]},
    { section: "Chili Oil — Quảng Trị Intensity", items: [
      "4 tbsp cooking oil",
      "3 tbsp dried chili flakes (ớt bột)",
      "1 tbsp fermented shrimp paste (mắm ruốc)",
      "2 cloves garlic, minced",
      "1 tsp sugar"
    ]},
    { section: "Seasoning", items: [
      "3 tbsp fish sauce (nước mắm)",
      "1 tbsp fermented shrimp paste (mắm ruốc)",
      "Salt and pepper to taste"
    ]}
  ],

  instructions: [
    {
      step: 1,
      title: "Purge the Clams — Sand is the Enemy",
      details: "Soak live baby clams in cold water with 1 tsp salt for 2-3 hours (or overnight in the refrigerator). The salt triggers the clams to expel sand from their digestive tracts. Change the water 2-3 times during soaking. After purging, scrub clams under running water, discarding any that are open and don't close when tapped (dead clams).",
      tip: "The salt purge exploits bivalve OSMOREGULATION. Baby clams maintain an internal salinity equilibrium with their surrounding water. When you increase the external salt concentration beyond their comfort range (normal river water: 0.5-2 ppt, your salt water: approximately 10 ppt), the clams actively pump water OUT through their siphons to dilute the surrounding medium — and this outward pumping flushes sand grains from their digestive tract and mantle cavity. The overnight duration matters: hến are tiny (5-10mm), with correspondingly tiny siphons that move water slowly. A 30-minute soak that works for larger clams (nghêu, sò) is insufficient for hến — they need hours to fully purge. The tap-test for dead clams is food safety, not quality: a dead clam's adductor muscle has relaxed, so the shell gapes open permanently. Dead bivalves decompose rapidly, producing cadaverine and putrescine (the same compounds in rotting meat), and a single dead clam in the pot will contaminate the entire batch with off-flavours."
    },
    {
      step: 2,
      title: "Cook the Clams — Flash Extraction",
      details: "Bring 1L water to a rolling boil with bruised lemongrass. Add purged clams all at once. Cover and boil for 3-4 minutes, stirring once at the 2-minute mark. The clams are done when 90% of shells have opened. Immediately strain, RESERVING ALL THE BROTH — this is liquid gold. Pick clam meat from shells (tedious but essential — there's no shortcut for 1kg of baby clams). Discard shells and any unopened clams.",
      tip: "The 3-4 minute window is calibrated to clam muscle protein denaturation. Clam adductor muscle (the hinge muscle that holds shells shut) is predominantly paramyosin — a coiled-coil protein that denatures at 55-65°C, causing the muscle to relax and the shell to spring open. The edible body meat is predominantly myosin + actin, which denatures at 65-75°C. At 3-4 minutes in boiling water, the body meat reaches approximately 70°C — tender and just-set, with a sweet, briny flavour. Beyond 5 minutes, the meat contracts aggressively (losing 30-40% volume), becomes rubbery, and expels its naturally sweet glycogen-rich juice into the broth rather than retaining it in the meat. The BROTH is equally important: it contains the extracted clam essence — glycogen (sweetness), free amino acids (umami, especially glycine and taurine), and minerals (sodium, potassium, zinc). This broth is cơm hến's soul. In Quảng Trị, the broth is served alongside the rice as a separate cup for sipping — not poured over, but alternated: bite of rice, sip of broth, bite of rice."
    },
    {
      step: 3,
      title: "Build the Chili Oil — Quảng Trị's Liquid Fire",
      details: "Heat 4 tbsp oil over medium-low heat (130°C). Add minced garlic, cook 30 seconds until fragrant. Remove from heat, cool 1 minute. Add chili flakes — they'll sizzle and bloom in the residual heat. Add 1 tbsp mắm ruốc and 1 tsp sugar, stir to dissolve. The oil should be deep red, thick with chili solids, and intensely aromatic.",
      tip: "Quảng Trị cơm hến uses chili oil as a THERMAL COUNTERPOINT to the cold rice. The oil is served warm (not hot — about 50-60°C), and when it hits cold rice (15-20°C), the temperature differential creates a sensory SHOCK that the brain perceives as complexity. The warm oil also has lower viscosity than cold oil, allowing it to flow into the spaces between rice grains and coat each grain individually — impossible with room-temperature oil, which would sit on the surface as a pool. The mắm ruốc in the chili oil serves a specific purpose beyond flavour: its amino acids undergo a micro-Maillard reaction with the residual sugars in the chili during the off-heat blooming phase, producing brown melanoidins that deepen the oil's colour from chili-red to mahogany. This is why Quảng Trị chili oil looks darker and richer than simple chili flakes in oil."
    },
    {
      step: 4,
      title: "Prepare the Fourteen-Layer Topping — Each Element Is Non-Negotiable",
      details: "Prepare each topping component separately: (1) Crush roasted peanuts coarsely — not powder, visible chunks. (2) Toast sesame seeds in dry pan until golden. (3) Crumble fried pork rinds into 1cm pieces. (4) Fry shallot slices in oil until deep golden and crispy. (5) Roughly chop dried shrimp. (6) Shred banana blossom paper-thin, soak in lime water. (7-10) Prepare herbs: chop rau răm, húng lủi, chiffonade tía tô, slice scallions. (11) Slice fresh chilies. (12) Slice pickled garlic. (13) Cut lime into wedges. (14) Slice starfruit paper-thin. Arrange all in separate small bowls or on a large platter.",
      tip: "The fourteen components are not a suggestion — they're a COMPLETE SENSORY SYSTEM engineered across five dimensions. CRUNCH: peanuts (hard crunch, fat-rich), sesame seeds (micro-crunch, oil-rich), tóp mỡ (airy crunch, pork fat), hành phi (delicate crunch, allium). UMAMI: dried shrimp (nucleotide-rich), fish sauce (glutamate), mắm ruốc (glutamate + kokumi). FRESH: rau răm (peppery-cool), húng lủi (mint-cool), tía tô (anise-cool), banana blossom (astringent-clean). ACID: lime (citric), starfruit (oxalic), pickled garlic (acetic). HEAT: fresh chili (capsaicin), chili oil (capsaicin in fat matrix). Remove any single element and the system becomes unbalanced — not subtly, but noticeably. This is why cơm hến vendors in Quảng Trị markets display all fourteen components openly: the customer can SEE the complete system and would protest a missing element. Each component earns its place by occupying a unique position in the five-dimensional flavour space — no two components serve the same function."
    },
    {
      step: 5,
      title: "Season the Clam Meat — Light Touch",
      details: "Toss the picked clam meat with 1 tbsp fish sauce, 1 tbsp mắm ruốc, and a pinch of pepper. Gently stir to coat — the clam meat is delicate and will break apart if handled roughly. The seasoning should enhance the natural brininess, not overwhelm it.",
      tip: "The LIGHT seasoning reflects a principle specific to small bivalves: hến meat already contains significant natural sodium (0.5-0.8g per 100g) and free glutamate (50-80mg per 100g). Adding heavy seasoning at this stage creates sodium overload when combined with the fish sauce, mắm ruốc, and chili oil that will be added at the table. Quảng Trị cooks understand this as 'để cho khách tự nêm' (let the customer season themselves) — but the underlying logic is ADDITIVE SEASONING. Each layer adds a small amount: clam's natural salt + light fish sauce on meat + broth's natural salinity + chili oil's mắm ruốc + table fish sauce = TOTAL sodium, which should reach approximately 1,200-1,400mg per serving for satisfying saltiness. If any single layer is over-seasoned, the total crosses into unpleasant territory. This distributed seasoning approach is the opposite of Western 'season at every stage to build depth' — Vietnamese cơm hến seasons ACROSS stages to build precision."
    },
    {
      step: 6,
      title: "The Cold Rice — Philosophy in a Grain",
      details: "Use room-temperature or refrigerated rice. Do NOT reheat. If using freshly cooked rice, spread on a tray and cool completely — at least 30 minutes, ideally 1-2 hours. The grains should be firm, individual, and slightly resistant to the tooth. Divide cold rice into 4 deep bowls.",
      tip: "Cold rice in cơm hến is not laziness — it's RETROGRADATION engineering. When cooked rice cools below 60°C, the amylose molecules (released during cooking) re-associate into crystalline double-helix structures through hydrogen bonding — a process called retrogradation. These retrograded starch crystals are physically harder and more resistant to digestive enzymes than freshly gelatinised starch. The result: cold rice grains are FIRMER (they resist compression, providing textural contrast to the soft clam meat), SEPARATE (crystallised surfaces repel each other, preventing clumping), and have LOWER GLYCEMIC INDEX (retrograded starch behaves as resistant starch — RS3 — which ferments in the colon rather than absorbing as glucose in the small intestine). The Quảng Trị poverty that made cold rice necessary inadvertently created a HEALTHIER dish: the resistant starch feeds beneficial gut bacteria, and the firm separate grains mean each one absorbs topping and sauce independently, delivering the full flavour payload per grain rather than as a homogeneous starchy mass."
    },
    {
      step: 7,
      title: "Assemble the Bowl — Layer by Layer",
      details: "Over the cold rice, arrange: seasoned clam meat (generous layer), then the fourteen toppings in a cascade — peanuts, sesame, tóp mỡ, hành phi across the top for crunch; banana blossom, herbs around the edges for freshness; dried shrimp scattered throughout for umami; fresh chili and pickled garlic for accent; starfruit slices and lime wedges on the side. Drizzle 1-2 tbsp warm chili oil over everything. Serve the clam broth separately in small cups, reheated to steaming.",
      tip: "The SEPARATE broth service is the Quảng Trị signature that Huế partially adopted. The logic: if you pour hot broth over cold rice, the rice temperature rises to approximately 40-50°C — a lukewarm no-man's-land that is neither satisfyingly cold nor satisfyingly hot, and the thermal shock that makes the dish interesting is eliminated. By keeping them separate, the eater controls the alternation: a spoonful of cold, complex, textured rice → a sip of hot, clean, sweet clam broth. This creates TEMPORAL CONTRAST — the brain processes the cold bite and the hot sip as distinct sensory events, each resetting the palate for the other. The clam broth is deliberately SIMPLE (just clam essence + lemongrass + seasoning) while the rice is deliberately COMPLEX (fourteen toppings + chili oil). This simplicity-complexity alternation prevents flavour fatigue: the clean broth clears the palate of the topping cascade, and the topped rice provides novelty after the broth's simplicity."
    },
    {
      step: 8,
      title: "Eat — The Quảng Trị Rhythm",
      details: "Mix the toppings into the rice gently — just enough to distribute, not enough to homogenise. Each bite should be slightly different from the last (sometimes more peanut, sometimes more herb, sometimes a hit of pickled garlic). Alternate with sips of hot clam broth. Add more chili oil, fish sauce, or lime as desired throughout the meal. The bowl should be finished within 10-15 minutes — the tóp mỡ loses its crunch after 15 minutes of moisture contact.",
      tip: "The instruction to MIX GENTLY, NOT HOMOGENISE is the final engineering principle. A fully mixed bowl delivers the same flavour in every bite — efficient but boring. A partially mixed bowl delivers STOCHASTIC variation: each spoonful is a slightly different combination of the fourteen elements. This randomness exploits the brain's NOVELTY-SEEKING reward system — each bite triggers a micro-prediction ('what will this one taste like?') followed by a micro-surprise ('oh, more peanut this time'), both of which release dopamine. Uniform mixing eliminates both prediction and surprise, collapsing the reward cycle. This is the same principle behind trail mix (varied handfuls are more satisfying than sorted components), artisanal pizza (irregular topping distribution), and why a bowl of cơm hến from a market vendor — hastily assembled with uneven topping — often tastes better than a carefully arranged restaurant version. Disorder is a feature, not a flaw."
    }
  ],

  proTips: [
    {
      title: "THE COLD RICE PARADOX — Poverty as Innovation",
      content: "In every rice-eating culture, HOT rice symbolises prosperity, care, and proper hospitality. Serving cold rice to a guest is an insult in Chinese, Japanese, Korean, Thai, and most Vietnamese contexts. Cơm hến VIOLATES this universal norm — and the violation is the dish's origin story. Quảng Trị and Huế's poorest families couldn't afford the firewood to reheat leftover rice. Instead of being ashamed, they built an entire dish around cold rice's UNIQUE PROPERTIES: its firm texture (from starch retrogradation), its grain separation (no clumping), its ability to absorb sauces without becoming mushy, and its thermal contrast with hot broth. The innovation was REFRAMING: instead of 'cold rice because poor,' it became 'cold rice because better.' This reframing succeeded so completely that today, restaurants with perfectly good stoves deliberately serve cơm hến with cold rice — the poverty marker became a quality marker. This is culinary evolution's equivalent of biological exaptation: a trait that evolved under one pressure (scarcity) being co-opted for a completely different function (texture engineering)."
    },
    {
      title: "RETROGRADATION SCIENCE — Why Yesterday's Rice Is Better Than Today's",
      content: "Freshly cooked rice contains fully gelatinised starch — amylose and amylopectin molecules dispersed in water, soft and sticky. As rice cools, amylose molecules (the linear 20-25% fraction) gradually re-align into crystalline double helices — a process called retrogradation. This happens in two phases: FAST RETROGRADATION (0-4 hours, amylose): creates the firm, separate-grain texture. SLOW RETROGRADATION (4-24 hours, amylopectin): creates harder, drier crystals that resist rehydration even when sauce is added. Overnight refrigeration accelerates both phases because nucleation (crystal seed formation) is faster at 4°C than at room temperature — a counterintuitive principle where COLDER produces MORE crystals FASTER. This is why day-old refrigerated rice is ideal for cơm hến: maximum retrogradation = maximum firmness = maximum sauce-holding without becoming soggy. It's also why day-old rice is preferred for fried rice worldwide — the same retrogradation science applies: retrograded grains maintain integrity during high-heat stir-frying, while fresh rice would mush. Quảng Trị's poverty-driven use of leftover rice anticipated by centuries what food science now recommends."
    },
    {
      title: "THE FOURTEEN-ELEMENT MATRIX — Redundancy by Design",
      content: "Cơm hến's fourteen toppings might seem excessive, but the system has zero redundancy — each element occupies a unique coordinate in the flavour-texture matrix. Map it: PEANUTS (crunchy + nutty + fat), SESAME (micro-crunchy + toasty + aromatic), TÓP MỠ (airy-crunchy + pork + rendered fat), HÀNH PHI (delicate-crunchy + sweet allium + caramelised), DRIED SHRIMP (chewy + oceanic umami + inosinate), BANANA BLOSSOM (crisp-raw + astringent + palate-cleaning), RAU RĂM (peppery-herbaceous + cooling), HÚNG LỦI (mint-cooling + sweet), TÍA TÔ (anise-herbal + warming), SCALLIONS (sharp allium + fresh bite), FRESH CHILI (capsaicin heat + vegetal), PICKLED GARLIC (acetic acid + sweet + pungent), LIME (citric acid + aromatic oil), STARFRUIT (oxalic acid + crunchy + mild sweet). No two elements share the same coordinate. Remove peanuts and you lose the hard-crunch + nutty-fat position — sesame can't replace it (different crunch frequency, different fat profile). Remove rau răm and you lose the peppery-cooling position — húng lủi's mint-cooling is a different sensation. This non-redundancy is why market vendors refuse to skip elements: the system was optimised by generations of eaters who noticed that something was MISSING when any component was absent."
    },
    {
      title: "QUẢNG TRỊ VS HUẾ CƠM HẾN — The Regional Split",
      content: "Like bún bò, cơm hến exists in both Quảng Trị and Huế versions, and the differences reveal each city's food philosophy. RICE: Quảng Trị = COLD, always (the original poverty-driven choice). Huế = room temperature or slightly warm (the refined compromise — not hot, but not as extreme as cold). CHILI: Quảng Trị = scorching ớt hiểm oil, capsaicin as CORE flavour. Huế = moderate chili, capsaicin as ACCENT. MẮM RUỐC: Quảng Trị = heavy, present in both chili oil AND as table condiment. Huế = lighter touch, background note. TOPPINGS: Quảng Trị = all fourteen, non-negotiable, maximum complexity. Huế = ten to twelve, slightly streamlined, emphasis on herb balance over crunch variety. BROTH: Quảng Trị = served as separate sipping cup (hot-cold alternation preserved). Huế = sometimes poured over rice (thermal contrast reduced). PORTION: Quảng Trị = generous, meal-sized. Huế = smaller, often breakfast or snack-sized. The pattern repeats from bún bò: Quảng Trị keeps the raw, extreme, labourer's original. Huế refines toward elegance, balance, and moderation. Both claim authenticity; both are correct — they're authentic to different traditions."
    },
    {
      title: "BIVALVE SWEETNESS — Why Clams Taste Sweet Without Sugar",
      content: "Baby clams (hến) taste distinctly SWEET, despite containing no sucrose or fructose. This sweetness comes from three sources that conventional sweeteners lack. SOURCE 1 — GLYCOGEN: bivalves store energy as glycogen (animal starch) rather than fat. Glycogen concentration in hến ranges from 1-5% of wet weight, and when it reaches your tongue, amylase in saliva breaks it into maltose and glucose — producing a delayed, gentle sweetness that builds over 5-10 seconds of chewing. SOURCE 2 — GLYCINE: the most abundant free amino acid in clam meat (200-400mg/100g). Glycine activates sweet receptors on the tongue — it's literally a sweet amino acid, with approximately 0.7× the sweetness of sucrose gram-for-gram. SOURCE 3 — ALANINE: the second most abundant free amino acid in clams (100-200mg/100g), also with a sweet taste profile. Together, these three sweet compounds create a UMAMI-SWEET fusion that sugar cannot replicate. This is why adding sugar to clam broth tastes wrong — it provides the right sweetness level but the WRONG type. The natural sweetness from glycogen + glycine + alanine is intertwined with savoury perception in a way that sucrose overrides rather than complements. Quảng Trị's clam broth remains unsweetened (or minimally sweetened) specifically to preserve this delicate natural sweetness."
    }
  ],

  nutritionFacts: {
    calories: 440,
    protein: "28g",
    carbs: "46g",
    fat: "16g",
    fiber: "5g",
    sodium: "1320mg"
  },

  keywords: ["cơm hến", "Quảng Trị", "baby clam rice", "Vietnamese clam dish", "cold rice dish", "hến", "central Vietnam cuisine", "street food", "Quảng Trị food", "cơm hến gốc", "Vietnamese comfort food", "fourteen toppings"],

  recipeSchema: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Cơm Hến Quảng Trị — Baby Clam Cold Rice with Fourteen Toppings",
    "description": "The original cold-rice baby clam dish from Quảng Trị — fiercer and more complex than the Huế version. Cold retrograded rice topped with fourteen non-redundant elements: clam meat, peanuts, sesame, pork rinds, herbs, pickled garlic, starfruit, and scorching chili oil. Hot clam broth served separately for thermal contrast.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "datePublished": "2026-10-12",
    "prepTime": "PT40M",
    "cookTime": "PT20M",
    "totalTime": "PT1H",
    "recipeYield": "4 servings",
    "recipeCategory": "Main Course",
    "recipeCuisine": "Vietnamese",
    "keywords": "cơm hến, Quảng Trị, baby clam rice, cold rice, fourteen toppings, central Vietnam, hến",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "440 kcal",
      "proteinContent": "28g",
      "carbohydrateContent": "46g",
      "fatContent": "16g",
      "fiberContent": "5g",
      "sodiumContent": "1320mg"
    },
    "recipeIngredient": [
      "400g cooked cold rice",
      "1kg fresh baby clams",
      "Roasted peanuts",
      "Toasted sesame seeds",
      "Fried pork rinds (tóp mỡ)",
      "Fried shallots",
      "Dried shrimp",
      "Banana blossom",
      "Rau răm, húng lủi, tía tô, scallions",
      "Fresh chili, pickled garlic, starfruit",
      "Chili oil with mắm ruốc",
      "Fish sauce, lime"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Purge live clams in salted cold water for 2-3 hours, changing water 2-3 times. Scrub and discard dead clams." },
      { "@type": "HowToStep", "text": "Boil clams with lemongrass for 3-4 minutes until shells open. Strain, RESERVE BROTH. Pick meat from shells." },
      { "@type": "HowToStep", "text": "Build chili oil: garlic in oil, off-heat chili bloom, add mắm ruốc and sugar." },
      { "@type": "HowToStep", "text": "Prepare all fourteen toppings separately: peanuts, sesame, tóp mỡ, hành phi, dried shrimp, banana blossom, four herbs, chili, pickled garlic, lime, starfruit." },
      { "@type": "HowToStep", "text": "Season clam meat lightly with fish sauce, mắm ruốc, pepper." },
      { "@type": "HowToStep", "text": "Place cold rice in bowls. Top with clam meat and all fourteen toppings. Drizzle warm chili oil." },
      { "@type": "HowToStep", "text": "Serve hot clam broth separately in cups. Eat by alternating bites of cold topped rice with sips of hot broth." }
    ]
  }
}

export default function ComHenQuangTriPage() {
  return <RecipeLayout recipe={RECIPE_DATA} />
}