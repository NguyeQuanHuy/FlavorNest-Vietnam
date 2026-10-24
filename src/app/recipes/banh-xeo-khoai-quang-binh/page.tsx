'use client'

import RecipeLayout from '../_components/RecipeLayout';const RECIPE_DATA = {
  title: "Bánh Xèo Khoai Quảng Bình",
  subtitle: "Sweet Potato Sizzling Pancake — The Famine Pancake That Outsmarted Rice Flour",
  servings: 4,
  prepTime: "30 min",
  cookTime: "40 min",
  totalTime: "1 hr 10 min",
  difficulty: "Medium" as const,
  rating: 4.7,
  reviewCount: 96,
  image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
  description: "While the rest of Vietnam builds bánh xèo from rice flour, Quảng Bình builds it from sweet potato — and the result is a completely different pancake. Thicker, denser, bronze-gold rather than turmeric-yellow, with a crispy exterior that shatters into shards and a starchy interior that clings to your teeth like mochi. This isn't a variation on bánh xèo — it's a parallel invention born from the same concept (hot oil + batter + filling) but engineered from a different starch entirely. Where rice flour bánh xèo is lace, khoai bánh xèo is armour. Born during wartime scarcity when rice was too precious to fry, sweet potato — abundant, drought-resistant, growing in Quảng Bình's sandy soil — became the flour of necessity. The necessity became preference.",

  ingredients: [
    { section: "Sweet Potato Batter", items: [
      "500g sweet potato (khoai lang), orange-fleshed preferred",
      "100g rice flour (bột gạo)",
      "50g tapioca starch (bột năng)",
      "300ml water",
      "½ tsp turmeric powder (bột nghệ)",
      "½ tsp salt",
      "2 scallions, finely sliced"
    ]},
    { section: "Filling", items: [
      "200g pork belly, thinly sliced",
      "200g shrimp, peeled and deveined",
      "150g bean sprouts (giá đỗ)",
      "1 medium onion, thinly sliced",
      "3 cloves garlic, minced",
      "2 tbsp fish sauce",
      "1 tsp sugar",
      "½ tsp ground pepper",
      "Vegetable oil for frying (about 200ml total)"
    ]},
    { section: "Nước Chấm Dipping Sauce", items: [
      "3 tbsp fish sauce",
      "2 tbsp sugar",
      "3 tbsp warm water",
      "2 tbsp lime juice",
      "1 fresh chili, minced",
      "2 cloves garlic, minced"
    ]},
    { section: "Herb & Wrap Platter", items: [
      "Lettuce leaves (xà lách)",
      "Fresh herbs: Vietnamese mint (rau răm), perilla (tía tô), basil (húng quế)",
      "Pickled mustard greens (dưa chua) — optional",
      "Rice paper (bánh tráng) — optional for wrapping"
    ]}
  ],

  instructions: [
    {
      step: 1,
      title: "Prepare the Sweet Potato — Grate, Don't Mash",
      details: "Peel 500g sweet potato. Grate finely using a box grater or food processor with the fine grating disc. You want thin shreds, not a purée — the texture of the grated potato IS the texture of the pancake. Place grated sweet potato in a large bowl. Add 100g rice flour, 50g tapioca starch, ½ tsp turmeric, ½ tsp salt, and sliced scallions. Gradually add 300ml water while mixing with chopsticks. The batter should be thick and chunky — visibly studded with sweet potato shreds — not smooth like a crêpe batter.",
      tip: "GRATING vs MASHING is the critical fork in this recipe. Grating produces long, thin shreds (2-3mm × 20-30mm) that maintain their fibrous structure during frying. Each shred is a reinforcing rod in the pancake's architecture — like rebar in concrete. The network of interlocking shreds creates a matrix that holds the batter together while allowing steam to escape through the gaps between shreds, preventing sogginess. Mashing ruptures the cell walls completely, releasing all the amylose and amylopectin into a uniform paste — this makes a dense, gummy disk with no internal structure, no steam escape routes, and no textural contrast. The grated shreds also create SURFACE AREA: each protruding shred that contacts the hot oil undergoes independent Maillard browning, creating hundreds of micro-crispy points across the pancake's surface."
    },
    {
      step: 2,
      title: "Pre-Cook the Filling — Separate Protein from Pancake",
      details: "Heat 1 tbsp oil in a skillet over high heat. Sear pork belly slices for 2 minutes until edges brown. Add garlic, stir 15 seconds. Add shrimp, cook 1 minute until just turning pink (they'll cook more in the pancake). Season with 2 tbsp fish sauce, 1 tsp sugar, ½ tsp pepper. Remove immediately to a plate. Do NOT add bean sprouts yet — they go in raw during assembly.",
      tip: "Pre-cooking the protein is specific to khoai bánh xèo and unnecessary for rice-flour versions. The reason is COOKING TIME DIFFERENTIAL: sweet potato batter is thicker and denser than rice-flour batter, requiring 5-7 minutes per side versus 2-3 minutes for rice-flour bánh xèo. If raw pork and shrimp were sealed inside a sweet potato pancake for 10-14 minutes total, the proteins would overcook catastrophically — pork would lose 35-40% moisture and become sawdust, shrimp would contract into rubber nuggets. Pre-cooking to 70% doneness means the final 30% happens gently inside the pancake's steamy interior, where the trapped moisture from sweet potato starch creates a 100°C steam environment that finishes the proteins without drying them."
    },
    {
      step: 3,
      title: "Mix the Dipping Sauce — Balance Before the First Bite",
      details: "Dissolve 2 tbsp sugar in 3 tbsp warm water. Add 3 tbsp fish sauce, 2 tbsp lime juice, minced chili, and minced garlic. Stir well. Taste: the sauce should hit sweet first, then sour, then salty, with chili heat arriving last. Adjust sugar/lime/fish sauce to achieve this sequence. Let stand 10 minutes for flavours to meld.",
      tip: "The flavour arrival sequence (sweet → sour → salty → heat) is engineered by molecular weight and receptor kinetics, not randomness. Sucrose molecules are small and reach sweet receptors on the tongue tip in <0.5 seconds. Citric acid from lime activates sour receptors on the tongue sides in 0.5-1 second. Sodium ions from fish sauce travel through saliva to salt receptors in 1-2 seconds. Capsaicin from chili binds to TRPV1 pain receptors in 2-4 seconds because it's lipophilic (fat-soluble) and must first dissolve into the tongue's lipid layer. This temporal layering is WHY the sauce enhances rather than overwhelms the sweet potato pancake — each wave arrives as the previous one fades, preventing any single taste from dominating."
    },
    {
      step: 4,
      title: "Heat the Pan — The Temperature Contract",
      details: "Place a non-stick or well-seasoned cast-iron skillet (25-28cm) over medium-high heat. Add 3 tbsp oil — enough to cover the bottom generously. Heat until the oil shimmers and a drop of batter sizzles immediately on contact (approximately 180°C). The pan must be HOT before batter touches it. Swirl oil to coat the sides of the pan up to 1cm height.",
      tip: "180°C is the SWEET POTATO SIZZLE POINT — the temperature where three things happen simultaneously. First, water in the batter instantly flash-evaporates at the contact surface, creating the characteristic 'xèo' sizzle (onomatopoeia that gave the dish its name). This steam burst creates a micro-gap between batter and pan that prevents sticking. Second, the Maillard reaction between sweet potato's abundant free amino acids (asparagine, glutamic acid) and sugars (glucose, fructose, maltose — sweet potato contains 4-7% free sugars vs rice flour's 0.3%) begins immediately, producing the bronze-gold colour that distinguishes khoai bánh xèo from yellow rice-flour versions. Third, the starch at the contact surface rapidly gelatinises then dehydrates, forming a rigid crust within 30 seconds that acts as the pancake's structural foundation. Below 160°C: the batter absorbs oil and becomes greasy. Above 200°C: the sugars burn before starch sets, producing bitter char."
    },
    {
      step: 5,
      title: "Pour and Spread — The 10-Second Window",
      details: "Stir the batter vigorously (sweet potato shreds settle). Ladle approximately 150ml (one large ladleful) into the centre of the hot pan. IMMEDIATELY tilt and rotate the pan to spread batter outward in a spiral motion. You have about 10 seconds before the batter sets. The pancake should be 5-6mm thick — significantly thicker than a rice-flour bánh xèo (which is 1-2mm). Some uneven thickness is desirable — thin spots will crisp, thick spots will stay chewy.",
      tip: "The 10-second window exists because of AMYLOSE GELLING KINETICS. When sweet potato starch granules hit 180°C oil, they undergo instant gelatinisation — the amylose molecules burst from the granule and form a gel network within 8-12 seconds. Once gelled, the batter cannot flow. Rice flour gelatinises more slowly (its higher amylose content creates a more gradual transition), giving rice-flour bánh xèo a 15-20 second window. This is why khoai bánh xèo is always thicker: the faster gelling means the batter stops flowing before it can spread thin. Quảng Bình cooks don't fight this physics — they EMBRACE the thickness, understanding that 5-6mm is the optimal range for the texture dichotomy: the outer 1-2mm crisps while the inner 3-4mm remains soft and starchy, creating a contrast that thin rice-flour versions cannot achieve."
    },
    {
      step: 6,
      title: "Add Filling and Cover — The Dual-Zone Again",
      details: "Quickly distribute pre-cooked pork and shrimp over one half of the pancake. Add a handful of raw bean sprouts on top. Drizzle 1 tbsp oil around the edges of the pancake (it will sizzle under the batter). Cover with a lid. Cook for 3 minutes. The lid traps steam from the batter, creating two cooking zones: the bottom fries in oil at 180°C while the top steams at 100°C.",
      tip: "The dual-zone cooking principle here is identical to Miền Tây bánh xèo — bottom fries, top steams — but the THICK batter changes the thermodynamics significantly. In a 5-6mm sweet potato pancake, the temperature gradient from bottom (180°C) to top (100°C) spans only 5-6mm, creating a gradient of 13-16°C per millimetre. This steep gradient is what produces the dramatic texture contrast: the bottom millimetres are dehydrated below 5% moisture (crispy, shattering), while the top millimetres remain above 40% moisture (soft, starchy, almost cake-like). A thinner rice-flour pancake has the same gradient across 1-2mm — it becomes uniformly crispy because there isn't enough thickness to sustain a soft interior. The 3-minute lid time is calibrated to this thickness: enough for the top to set and the filling to heat through, not enough for the bottom to burn."
    },
    {
      step: 7,
      title: "Crisp and Fold — Listen for the Crackle",
      details: "Remove the lid. Increase heat to medium-high. Cook uncovered for 3-4 minutes more until the bottom is deeply golden-bronze and the edges lift away from the pan. You should hear a steady crackling sound — this is moisture escaping from the crust. Drizzle 1 tsp oil along the edges. Using a spatula, fold the pancake in half (filling side onto empty side). Press gently. Cook 1 more minute on the folded side for extra crispiness. Slide onto a cutting board and cut into 3-4 wedges.",
      tip: "LISTENING is the most accurate doneness test for khoai bánh xèo. The crackling sound is caused by water vapour forcing its way through micro-channels in the crust — each crackle is a tiny steam explosion. The sound frequency increases as the crust dehydrates: LOW-FREQUENCY crackling (every 2-3 seconds) = still too wet, HIGH-FREQUENCY crackling (continuous, like rain on a tin roof) = ideal crispiness, SILENCE = all moisture gone, burning imminent. This is the same acoustic physics that professional pastry chefs use to judge deep-frying: the pitch rises as water content drops. Sweet potato's high sugar content means the window between 'perfectly crisp' and 'burnt sugar' is narrower than rice flour — about 60-90 seconds. The edge-oil drizzle in the last minute serves as a CONDUCTION BRIDGE, ensuring the edges (which cool faster due to higher surface-area-to-volume ratio) crisp at the same rate as the centre."
    },
    {
      step: 8,
      title: "Serve — Build the Wrap",
      details: "Serve wedges immediately on a plate alongside the herb platter, lettuce leaves, and dipping sauce. To eat: take a lettuce leaf, add herbs (rau răm, tía tô, húng quế), place a wedge of bánh xèo khoai on top, roll loosely, and dip in nước chấm. Alternatively, wrap in rice paper for a more structured bite. The pancake should still be crackling faintly when it reaches the table — if it's silent, it's been sitting too long.",
      tip: "The lettuce-herb-pancake wrap creates what sensory scientists call a TEXTURAL SYMPHONY: five distinct textures in one bite. Layer 1 — CRISPY: the dehydrated sweet potato crust shatters on first bite. Layer 2 — CHEWY: the soft interior starch stretches and clings. Layer 3 — CRUNCHY: raw bean sprouts provide high-frequency crunch (different from crispy — crunch is cellulose fracture, crispy is starch fracture). Layer 4 — TENDER: the pre-cooked pork and shrimp yield easily. Layer 5 — SOFT: lettuce and herbs provide gentle give with no resistance. These five textures engage different jaw muscles at different rates, creating the sensation of COMPLEXITY that makes the brain perceive the food as more satisfying than any single texture could. This is why unwrapped bánh xèo khoai, delicious as it is, causes flavour fatigue faster — fewer textures = less neural novelty = shorter pleasure curve."
    }
  ],

  proTips: [
    {
      title: "SWEET POTATO VS RICE FLOUR — A Complete Starch Comparison",
      content: "Sweet potato starch and rice starch are chemically distinct in ways that produce completely different pancakes. AMYLOSE/AMYLOPECTIN RATIO: rice flour is 20-25% amylose (the linear chain that creates crispiness), while sweet potato is 15-20% amylose — lower amylose means khoai bánh xèo will NEVER achieve the shattering, glass-like crispiness of rice-flour versions, but it develops a different kind of crispiness: more like shortbread than glass, crumbly-crispy rather than snap-crispy. GELATINISATION TEMPERATURE: rice starch gelatinises at 68-78°C, sweet potato at 58-72°C — the lower onset means sweet potato batter sets faster in the pan, explaining the 10-second window. SUGAR CONTENT: sweet potato contains 4-7% free sugars (glucose, fructose, maltose, sucrose) vs rice flour's 0.3%. These sugars participate aggressively in the Maillard reaction, producing the bronze-gold colour and a complex caramel-nutty flavour that rice flour cannot match. This is sweet potato's advantage: it SELF-SEASONS. The pancake is flavourful even without turmeric or coconut milk, because the sugars generate hundreds of Maillard flavour compounds during frying."
    },
    {
      title: "THE SCARCITY ENGINE — How Wartime Created Regional Cuisine",
      content: "Quảng Bình's khoai bánh xèo exists because of war, not gastronomy. During the American War (1964-1975), Quảng Bình was the most heavily bombed province in Vietnam — sitting just north of the DMZ (17th parallel), it absorbed waves of B-52 carpet bombing that destroyed rice paddies and disrupted supply chains. Rice flour became impossible to source. Sweet potato, however, thrived: Ipomoea batatas grows in sandy, bomb-cratered soil that would kill rice, requires no irrigation (drought-resistant), matures in 3-4 months (vs 5-6 for rice), and its tubers survive underground even when the above-ground plant is destroyed. The entire province pivoted to sweet potato as its primary starch — not just for bánh xèo, but for bread (bánh khoai), noodles (bún khoai), porridge (cháo khoai), and even fermenting into alcohol. This wartime adaptation became permanent culture: even today, with rice abundant, Quảng Bình people PREFER khoai bánh xèo over rice-flour versions. Scarcity engineered a preference that prosperity didn't undo."
    },
    {
      title: "THE REGIONAL BÁNH XÈO MAP — Five Pancakes, One Name",
      content: "Vietnam has at least five distinct bánh xèo traditions, each reflecting its region's starch, climate, and eating culture. HUẾ (15-20cm): small, thin, rice flour + egg, minimal filling, individual portions — the aristocratic version, elegance over abundance. SÀI GÒN (25-30cm): medium, rice flour + coconut milk, generous filling, folded in half — the commercial version, designed for restaurant service. MIỀN TÂY (40-50cm): giant, rice flour + coconut milk, maximalist filling, shared — the communal version, abundance as identity. QUẢNG BÌNH (20-25cm): medium, SWEET POTATO flour, thick and dense, cut into wedges — the survival version, caloric density as priority. BAN MÊ THUỘT (20cm): rice flour + corn flour, highland vegetables filling — the highland version, using whatever grows at altitude. The map reveals a pattern: each region's bánh xèo is built from its most AVAILABLE starch, filled with its most ABUNDANT protein, and sized for its EATING CULTURE (individual/shared). The dish name stayed constant while every component variable changed — bánh xèo is less a recipe and more a cooking TEMPLATE."
    },
    {
      title: "ASPARAGINE AND ACRYLAMIDE — The Sweet Potato Safety Note",
      content: "Sweet potato contains high levels of asparagine — the amino acid that, when heated above 120°C with reducing sugars (glucose, fructose), produces acrylamide, a compound classified as 'probably carcinogenic' by the WHO. This is the same chemistry that makes French fries, toast, and coffee potential acrylamide sources. In khoai bánh xèo, the frying surface reaches 180°C — well above the acrylamide formation threshold. However, Quảng Bình's traditional technique inadvertently MINIMISES acrylamide through three mechanisms: (1) the lid-steaming phase keeps the top surface below 120°C for 3 minutes, limiting formation to only the bottom contact surface, (2) the thick batter means less surface-to-volume ratio exposed to high heat compared to thin fries, and (3) the herb-wrap eating method means each bite is diluted with raw vegetables. Studies suggest that golden-brown colour (Maillard products) correlates with acrylamide formation — so the traditional instruction to cook until 'bronze-gold, NOT dark brown' is both culinary AND health wisdom encoded in cooking technique."
    },
    {
      title: "THE FIVE-TEXTURE SYMPHONY — Engineering the Perfect Bite",
      content: "Vietnamese cuisine understands texture as orchestration, not accompaniment. Khoai bánh xèo's wrap-and-dip format creates FIVE distinct textures in a single bite, each engaging different mechanoreceptors on the tongue, palate, and teeth. CRISPY (bánh xèo crust): activates Type I mechanoreceptors with high-frequency vibrations during fracture — perceived as 'satisfying.' CHEWY (soft interior): activates Type II mechanoreceptors through sustained deformation — perceived as 'substantial.' CRUNCHY (raw bean sprouts): activates BOTH types through cellulose cell-wall rupture — perceived as 'fresh.' TENDER (pork, shrimp): minimal mechanoreceptor activation — perceived as 'easy, yielding.' SOFT (lettuce, herbs): gentle even deformation — perceived as 'cooling, refreshing.' The brain receives FIVE different tactile signals simultaneously, triggering a dopamine response proportional to textural complexity. This is why wrapped bites are more satisfying than unwrapped ones: more textures = more neural novelty = longer before habituation dampens pleasure. The Quảng Bình grandmother who first wrapped her khoai pancake in lettuce with herbs wasn't decorating — she was engineering pleasure."
    }
  ],

  nutritionFacts: {
    calories: 520,
    protein: "24g",
    carbs: "48g",
    fat: "26g",
    fiber: "5g",
    sodium: "1080mg"
  },

  keywords: ["bánh xèo khoai", "sweet potato pancake", "Quảng Bình", "Vietnamese sizzling pancake", "khoai lang", "bánh xèo miền Trung", "central Vietnam pancake", "Vietnamese street food", "sweet potato recipe", "Vietnamese pancake", "wartime cuisine", "scarcity cooking"],

  recipeSchema: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Bánh Xèo Khoai Quảng Bình — Sweet Potato Sizzling Pancake",
    "description": "Quảng Bình's wartime invention: thick, bronze-gold sizzling pancakes made from grated sweet potato instead of rice flour, with pork, shrimp, and bean sprouts. Crispy-crumbly exterior, soft starchy interior, wrapped in lettuce and herbs.",
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "datePublished": "2026-10-12",
    "prepTime": "PT30M",
    "cookTime": "PT40M",
    "totalTime": "PT1H10M",
    "recipeYield": "4 servings",
    "recipeCategory": "Main Course",
    "recipeCuisine": "Vietnamese",
    "keywords": "bánh xèo khoai, sweet potato pancake, Quảng Bình, Vietnamese pancake, central Vietnam, wartime cuisine",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "520 kcal",
      "proteinContent": "24g",
      "carbohydrateContent": "48g",
      "fatContent": "26g",
      "fiberContent": "5g",
      "sodiumContent": "1080mg"
    },
    "recipeIngredient": [
      "500g sweet potato, grated",
      "100g rice flour",
      "50g tapioca starch",
      "200g pork belly",
      "200g shrimp",
      "150g bean sprouts",
      "Turmeric powder",
      "Fish sauce",
      "Lettuce, herbs for wrapping",
      "Nước chấm dipping sauce"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Grate sweet potato finely. Mix with rice flour, tapioca starch, turmeric, salt, scallions, and water to form thick, chunky batter." },
      { "@type": "HowToStep", "text": "Pre-cook filling: sear pork belly, add shrimp and garlic, season with fish sauce. Set aside." },
      { "@type": "HowToStep", "text": "Make nước chấm: dissolve sugar in warm water, add fish sauce, lime juice, chili, garlic." },
      { "@type": "HowToStep", "text": "Heat oiled pan to 180°C. Pour batter, spread within 10 seconds. Pancake should be 5-6mm thick." },
      { "@type": "HowToStep", "text": "Add pre-cooked filling and raw bean sprouts to one half. Cover with lid, cook 3 minutes (dual-zone: fry bottom, steam top)." },
      { "@type": "HowToStep", "text": "Remove lid, cook uncovered 3-4 minutes until crackling sounds indicate crispy crust. Fold in half, cook 1 more minute." },
      { "@type": "HowToStep", "text": "Cut into wedges. Serve with lettuce, herbs, and nước chấm. Wrap each wedge in lettuce with herbs, dip, and eat." }
    ]
  }
}

export default function BanhXeoKhoaiQuangBinhPage() {
  return <RecipeLayout recipe={RECIPE_DATA} />
}