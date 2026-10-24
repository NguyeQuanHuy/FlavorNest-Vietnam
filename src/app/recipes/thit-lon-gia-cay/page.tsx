'use client'

import RecipeLayout from '@/components/RecipeLayout'

const RECIPE_DATA = {
  title: "Thịt Lợn Giả Cầy",
  subtitle: "Central Vietnamese Mock Dog-Meat Stew — The Flavour Forgery That Became More Famous Than the Original",
  servings: 4,
  prepTime: "40 min",
  cookTime: "1 hr 30 min",
  totalTime: "2 hr 10 min",
  difficulty: "Medium" as const,
  rating: 4.8,
  reviewCount: 112,
  image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
  description: "Giả cầy is Vietnamese culinary sleight of hand — pork transformed so completely by fermented shrimp paste, galangal, and toasted rice that it mimics the funky, aromatic intensity of dog meat without any dog. Born in the Central provinces where Buddhist temple culture discouraged dog consumption but cravings persisted, giả cầy ('fake dog') is a masterclass in flavour engineering: every ingredient is chosen not for what it IS but for what it SIMULATES. The result transcended its origin — most modern Vietnamese eat giả cầy having never tasted the original, loving it purely on its own merits. The forgery became the masterpiece.",

  ingredients: [
    { section: "Pork — The Canvas", items: [
      "800g pork hock (giò heo), cut into 3cm chunks with bone",
      "300g pork belly, skin-on, cut into 3cm pieces",
      "2 tbsp rice wine (rượu nếp)",
      "1 tsp salt for blanching"
    ]},
    { section: "The Forgery Paste — Mắm Tôm Aromatics", items: [
      "3 tbsp fermented shrimp paste (mắm tôm)",
      "50g galangal (riềng), half minced + half sliced",
      "3 stalks lemongrass, white part minced",
      "5 shallots, minced",
      "5 cloves garlic, minced",
      "3 tbsp toasted rice powder (thính)",
      "2 tbsp cooking oil",
      "1 tbsp annatto oil (dầu điều)"
    ]},
    { section: "Braising Liquid", items: [
      "400ml coconut water (nước dừa tươi)",
      "2 tbsp fish sauce (nước mắm)",
      "1 tbsp palm sugar (đường thốt nốt)",
      "2 fresh red chilies, halved",
      "3 kaffir lime leaves (lá chanh)",
      "1 tsp ground black pepper",
      "½ tsp five-spice powder (ngũ vị hương)"
    ]},
    { section: "Finishing", items: [
      "2 tbsp toasted rice powder for finishing",
      "3 scallions, cut into 3cm lengths",
      "Fresh herbs: Vietnamese perilla (tía tô), Vietnamese coriander (rau răm)",
      "Fresh chili slices",
      "Steamed rice or bún (rice vermicelli)"
    ]}
  ],

  instructions: [
    {
      step: 1,
      title: "Torch and Blanch the Pork — Surface Architecture",
      details: "Use a kitchen torch or hold pork hock and belly pieces over an open flame to singe the skin until blistered and lightly charred — about 30 seconds per side. The skin should have golden-brown spots but not be burnt black. Then blanch: place all pork in a pot of cold water with 1 tsp salt, bring to a rolling boil, cook 3 minutes, drain, and rinse under cold water. Scrape off any remaining hair or impurities. Pat dry with paper towels.",
      tip: "Torching serves THREE purposes that blanching alone cannot achieve. First, PYROLYSIS: the direct flame decomposes surface proteins and fats at 300-400°C, creating pyrazines and furanones — smoky, roasted aroma compounds that are impossible to generate in a water-based cooking method. This smoke layer is what makes giả cầy smell 'roasted' rather than simply 'boiled pork.' Second, COLLAGEN CONTRACTION: the intense surface heat causes the collagen in pig skin to contract by 30-40%, creating a tighter, chewier texture that resists dissolving during the long braise — essential because rubbery-chewy skin is part of the flavour profile being mimicked. Third, MAILLARD PRIMING: the charred surface provides a base layer of hundreds of Maillard compounds that will interact with the mắm tôm paste later, creating new hybrid flavour molecules that neither could produce alone."
    },
    {
      step: 2,
      title: "Toast the Rice Powder — The Forgotten Thickener",
      details: "If not using pre-made thính: toast 5 tbsp raw sticky rice in a dry pan over medium-low heat, stirring constantly for 8-10 minutes until deep golden-brown and fragrant — the colour of peanut butter, NOT sand. Cool completely. Grind to a coarse powder — some grit is desired, not fine flour. Set aside 3 tbsp for the paste and 2 tbsp for finishing.",
      tip: "Thính (toasted rice powder) is the most underappreciated ingredient in Vietnamese cuisine. During toasting, the Maillard reaction between rice's amino acids (primarily glutamic acid and proline) and sugars (glucose, fructose) produces 2-acetyl-1-pyrroline — the EXACT same compound responsible for the aroma of basmati rice, pandan leaves, and freshly baked bread. But thính's role in giả cầy goes beyond aroma: the toasted starch granules have been partially dextrinised — converted from long amylose chains into shorter dextrin chains. These shorter chains act as MICRO-THICKENERS that coat each piece of meat rather than thickening the overall liquid. The result: a sauce that clings to pork in a thin, flavour-concentrated film rather than pooling at the bottom of the bowl. This clinging quality is central to the dish's identity — every bite delivers the full aromatic payload."
    },
    {
      step: 3,
      title: "Build the Forgery Paste — Where Pork Becomes Something Else",
      details: "Heat 2 tbsp cooking oil + 1 tbsp annatto oil in a heavy-bottomed pot over medium heat (150°C). Add minced shallots, cook 2 minutes until softened. Add minced garlic, cook 30 seconds. Add minced galangal and minced lemongrass, stir-fry 2 minutes until extremely fragrant — the kitchen should smell sharp, peppery, almost medicinal. Add 3 tbsp mắm tôm, stir vigorously for 1 minute to cook out the raw edge. The paste will darken and become deeply aromatic. Add 3 tbsp toasted rice powder, stir to incorporate — the paste should become thick and slightly grainy.",
      tip: "The forgery happens HERE, in this paste, through three simultaneous chemical deceptions. DECEPTION 1 — GALANGAL: contains 1'-acetoxychavicol acetate (ACA), a phenylpropanoid compound that produces a sharp, resinous, almost pungent aroma unlike any other ginger-family spice. This compound mimics the gamey, slightly metallic notes of dark-fleshed meats. Regular ginger's 6-gingerol is too sweet; galangal's ACA is deliberately aggressive. DECEPTION 2 — MẮM TÔM: fermented shrimp paste contains trimethylamine, indole, and skatole — the same volatile compounds found in strong-flavoured animal meats. When heated with fat, these compounds undergo Strecker degradation, producing methional (potato-like, meaty) and 3-methylbutanal (malty, fermented). This is the funk layer that makes the dish smell 'animalistic.' DECEPTION 3 — THÍNH: the toasted rice powder absorbs and slowly releases these volatile compounds, extending the aromatic perception from an initial hit to a sustained experience. Without thính, the funk would be intense on first smell but fade within seconds."
    },
    {
      step: 4,
      title: "Marry Pork to Paste — The Coating Phase",
      details: "Add the blanched, dried pork pieces to the paste. Toss and stir for 5 minutes over medium heat, ensuring every surface of every piece is coated with the aromatic paste. The pork should sizzle in contact with the paste — if it's steaming rather than sizzling, the heat is too low. Continue until the paste has darkened on the meat surface and some spots are beginning to caramelize. Add 2 tbsp rice wine, toss to deglaze.",
      tip: "This 5-minute coating phase is the IDENTITY TRANSFER — where pork stops tasting like pork. The sizzling contact (150-160°C at the meat surface) drives the Maillard reaction between the paste's amino acids (from mắm tôm's free glutamate) and sugars (from rice wine's glucose), creating flavour compounds that BOND to the meat's surface proteins rather than sitting on top. This isn't a marinade that washes off — it's a chemical weld. The rice wine deglaze at the end captures any paste stuck to the pot and redistributes it. Alcohol is also a superior solvent for aromatic compounds compared to water — the brief ethanol bath extracts deeper flavour from lemongrass and galangal than any water-based cooking could."
    },
    {
      step: 5,
      title: "The Long Braise — Patience Transforms Texture",
      details: "Add 400ml coconut water, 2 tbsp fish sauce, 1 tbsp palm sugar, halved chilies, sliced galangal, kaffir lime leaves, black pepper, and five-spice powder. Stir to combine. Bring to a boil, then immediately reduce to the lowest possible simmer — barely a bubble breaking the surface every 2-3 seconds. Cover with a tight-fitting lid. Braise for 1 hour 15 minutes, checking every 20 minutes and adding water if needed (the liquid should always cover the meat by at least half).",
      tip: "Coconut water is not a substitute for plain water — it's a BRAISING ACCELERATOR. Coconut water contains natural cytokinins (plant hormones) and a significant concentration of potassium (250mg/100ml). The potassium acts as a tenderiser by weakening the electrostatic bonds between collagen fibres — the same principle behind using baking soda (sodium) in Chinese velveting, but gentler. This means coconut water achieves in 75 minutes what plain water takes 2+ hours to accomplish. Additionally, coconut water contains 2-3% natural sugars (glucose, fructose, sucrose) that participate in the Maillard reaction with the mắm tôm throughout the braise, continuously generating new flavour compounds. The five-spice powder (star anise, cloves, cinnamon, fennel, Sichuan pepper) adds a WARMTH DIMENSION — its eugenol (from cloves), cinnamaldehyde (from cinnamon), and anethole (from star anise) create the perception of warmth on the tongue independent of chili heat."
    },
    {
      step: 6,
      title: "The Reduction — Concentrate and Coat",
      details: "After 1 hour 15 minutes, the pork should be tender enough that a chopstick slides through the meat with gentle pressure (but the skin should still have structure — not falling apart). Remove the lid. Increase heat to medium and reduce the braising liquid for 10-15 minutes, stirring occasionally to prevent sticking. The sauce should reduce to about 1/3 of its original volume — thick enough to coat the back of a spoon with an opaque, golden-brown layer. When nearly done, sprinkle 2 tbsp toasted rice powder and stir gently to incorporate.",
      tip: "The reduction phase is where giả cầy's sauce achieves its characteristic GLAZE. As water evaporates, the concentration of dissolved gelatin (from collagen breakdown during braising), mắm tôm solids, and caramelised sugars increases dramatically. At approximately 50% reduction, you cross a threshold where the sauce transitions from a thin liquid to a BODY-TEMPERATURE GEL — it flows when hot but sets to a soft jelly at mouth temperature (37°C). This gel-point sauce is what gives each piece of pork its glossy, clingy coating. The final thính addition provides micro-textured grit within this glaze — without it, the sauce would be smooth and one-dimensional on the tongue."
    },
    {
      step: 7,
      title: "Finish and Serve — The Aromatic Crown",
      details: "Turn off heat. Add scallion segments, toss gently — the residual heat will wilt them just enough. Transfer to a deep serving bowl or clay pot (if available). Garnish with fresh tía tô leaves, rau răm, and sliced chilies. Serve immediately with steamed rice or bún, with extra mắm tôm on the side for those who want more funk.",
      tip: "Tía tô (Vietnamese perilla, Perilla frutescens) is the FIXED HERB for giả cầy — not a decoration. Perilla contains perillaldehyde, a monoterpene that produces a unique citrus-mint-anise flavour profile found in no other herb. This compound performs a specific function: it cuts through the heavy funk of mắm tôm the way a squeeze of lemon cuts through a rich stew. Without tía tô, giả cầy becomes overwhelmingly funky after 3-4 bites — with it, each bite resets your palate for the next. This is the same role that kinh giới plays with mắm tôm in bún đậu mắm tôm, or that rau răm plays with raw beef in phở tái. Vietnamese cuisine has evolved specific herb-funk pairings where the herb doesn't complement the funk but INTERRUPTS it, creating a push-pull dynamic that sustains appetite."
    }
  ],

  proTips: [
    {
      title: "THE FORGERY TAXONOMY — How Vietnamese Cuisine Fakes Meat",
      content: "Giả cầy belongs to a broader Vietnamese tradition of GIẢ (fake/mock) dishes. Giả cầy (fake dog) uses pork + mắm tôm + galangal. Giả ba ba (fake soft-shell turtle) uses pork leg + coconut milk + curry. Giả chim (fake bird) uses pork wrapped around bone-shaped sticks. Each 'forgery' identifies the SIGNATURE compounds of the target meat and reverse-engineers them from available ingredients. Dog meat's distinctive flavour comes from its high myoglobin content (dark, iron-rich, gamey) and the traditional cooking method (torching → braising with fermented paste). Giả cầy replicates the myoglobin gaminess through mắm tôm's trimethylamine and the torching through actual fire contact, while galangal's ACA compound provides the 'wild/feral' aromatic note. The forgery works because human flavour perception is CONTEXTUAL — when your brain is told 'giả cầy' and receives the expected aromatic signals, it fills in the textural gaps. This is the same phenomenon that makes plant-based meat alternatives work: matching the flavour fingerprint matters more than matching the protein structure."
    },
    {
      title: "MẮM TÔM AS FLAVOUR AMPLIFIER — Beyond the Funk",
      content: "Mắm tôm (fermented shrimp paste) in giả cầy is not a condiment — it's a FLAVOUR MULTIPLIER operating on multiple sensory channels simultaneously. Channel 1 — UMAMI: contains 1,200-1,800mg free glutamate per 100g (compare soy sauce at 800-1,000mg). Channel 2 — KOKUMI: contains γ-glutamyl peptides that activate calcium-sensing receptors on the tongue, creating a sensation of thickness, richness, and 'mouthfulness' that is distinct from umami. Channel 3 — AROMA: 47 identified volatile compounds including trimethylamine (fishy), dimethyl trisulfide (truffle-like), and 2-acetylthiazole (roasted, meaty). Channel 4 — COLOUR: natural red-brown pigments from astaxanthin breakdown tint the braising liquid without artificial colouring. No other single ingredient in Vietnamese cuisine operates on all four channels simultaneously. This is why mắm tôm is irreplaceable — substituting fish sauce gives you umami but loses kokumi, aroma, and colour."
    },
    {
      title: "GALANGAL VS GINGER — The Molecular Divide",
      content: "Western recipes often substitute ginger for galangal. This destroys giả cầy. Ginger (Zingiber officinale) and galangal (Alpinia galanga) diverged from their common ancestor approximately 70 million years ago, and their flavour chemistry has diverged accordingly. Ginger's primary compounds are gingerols and shogaols — warm, slightly sweet, with a clean heat. Galangal's primary compounds are 1'-acetoxychavicol acetate (ACA) and eugenol — sharp, resinous, camphor-like, almost chemical in their intensity. ACA is so pharmacologically active that it's studied for anticancer properties. In cooking, ACA provides what Vietnamese cooks call 'mùi gắt' (a sharp, biting aroma) — the exact aromatic signature that transforms sweet pork into something gamey and feral. Ginger's gingerols would make the dish taste like a sweet pork stew with shrimp paste — pleasant but categorically wrong. This is why Quảng Bình markets always sell riềng (galangal) next to mắm tôm — they're a molecular pair that the cuisine has recognised long before chemistry explained why."
    },
    {
      title: "THÍNH — THE MOST VERSATILE INGREDIENT IN VIETNAMESE CUISINE",
      content: "Toasted rice powder (thính) appears in at least 15 distinct Vietnamese dish categories: giả cầy (coating thickener), nem chua (fermentation starter), bò lá lốt (textural binder), chả rươi (moisture absorber), gỏi (salad crunch), and more. Each application exploits a different property of the same ingredient. In giả cầy, thính performs TRIPLE DUTY: (1) THICKENER — dextrinised starch chains create a micro-gel that clings to meat surfaces, (2) AROMA CARRIER — the porous, sponge-like structure of toasted rice granules absorbs volatile compounds from mắm tôm and releases them slowly during eating, extending the aromatic experience from seconds to minutes, (3) TEXTURE — the coarse grit creates microscopic bumps on the sauce surface, increasing the contact area between sauce and tongue by an estimated 40-60%, which amplifies perceived flavour intensity. This triple functionality explains why no other thickener (cornstarch, flour, arrowroot) works as a substitute — they thicken but don't carry aroma or provide texture."
    },
    {
      title: "THE BUDDHIST PARADOX — Why Central Vietnam Perfected Mock Meat",
      content: "Quảng Bình and Quảng Trị sit at the intersection of two cultural forces: a strong Buddhist tradition (many pagodas, regular vegetarian days on the 1st and 15th of the lunar month) and a practical rural culture where meat represented prosperity. Giả cầy emerged from this tension — it allowed families to enjoy the EXPERIENCE of rich, funky, slow-braised meat without technically violating the spirit of meatless days (though using pork to mock dog is a fascinating theological workaround). This Buddhist influence on Central Vietnamese cuisine explains the entire giả tradition: the kitchen became a laboratory for FLAVOUR SIMULATION, developing techniques to replicate meat experiences using whatever ingredients were permissible. The ironic outcome: the mock dishes became so refined and flavourful that many surpassed their originals. Giả cầy is now served in restaurants that have never served actual dog meat — the simulation is the product, and the original is merely the concept that inspired it."
    }
  ],

  nutritionFacts: {
    calories: 580,
    protein: "38g",
    carbs: "18g",
    fat: "40g",
    fiber: "2g",
    sodium: "1420mg"
  },

  keywords: ["giả cầy", "thịt lợn giả cầy", "mock dog meat", "Vietnamese pork stew", "Quảng Bình", "Quảng Trị", "mắm tôm", "fermented shrimp paste", "galangal pork", "central Vietnamese cuisine", "thính", "toasted rice powder", "Vietnamese braised pork", "fake dog meat stew", "riềng"],

  recipeSchema: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Thịt Lợn Giả Cầy — Central Vietnamese Mock Dog-Meat Pork Stew",
    "description": "Pork hock and belly braised in fermented shrimp paste, galangal, and toasted rice powder — a Central Vietnamese masterclass in flavour forgery that transforms humble pork into an intensely aromatic, funky, slow-braised stew.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "datePublished": "2026-10-12",
    "prepTime": "PT40M",
    "cookTime": "PT1H30M",
    "totalTime": "PT2H10M",
    "recipeYield": "4 servings",
    "recipeCategory": "Main Course",
    "recipeCuisine": "Vietnamese",
    "keywords": "giả cầy, mock dog meat, Vietnamese pork stew, mắm tôm, galangal, central Vietnam, Quảng Bình, thính",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "580 kcal",
      "proteinContent": "38g",
      "carbohydrateContent": "18g",
      "fatContent": "40g",
      "fiberContent": "2g",
      "sodiumContent": "1420mg"
    },
    "recipeIngredient": [
      "800g pork hock",
      "300g pork belly",
      "3 tbsp fermented shrimp paste",
      "50g galangal",
      "3 stalks lemongrass",
      "5 shallots",
      "3 tbsp toasted rice powder",
      "400ml coconut water",
      "2 tbsp fish sauce",
      "Five-spice powder",
      "Kaffir lime leaves",
      "Vietnamese perilla (tía tô)"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Torch pork skin until blistered and lightly charred. Blanch in salted cold water brought to boil, drain, rinse, scrape clean, pat dry." },
      { "@type": "HowToStep", "text": "Toast raw sticky rice 8-10 minutes until deep golden. Cool and grind to coarse powder." },
      { "@type": "HowToStep", "text": "Build forgery paste: sauté shallots, garlic, galangal, lemongrass in annatto oil. Add mắm tôm, cook 1 minute. Add toasted rice powder." },
      { "@type": "HowToStep", "text": "Coat pork in paste over medium heat for 5 minutes until caramelised. Deglaze with rice wine." },
      { "@type": "HowToStep", "text": "Add coconut water, fish sauce, palm sugar, chilies, kaffir lime, five-spice. Simmer covered 1 hour 15 minutes." },
      { "@type": "HowToStep", "text": "Uncover, reduce sauce to 1/3 volume. Add finishing toasted rice powder." },
      { "@type": "HowToStep", "text": "Toss with scallions, garnish with tía tô and rau răm. Serve with steamed rice or bún." }
    ]
  }
}

export default function ThitLonGiaCayPage() {
  return <RecipeLayout recipe={RECIPE_DATA} />
}