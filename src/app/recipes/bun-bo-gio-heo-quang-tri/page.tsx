'use client'

import RecipeLayout from '@/components/RecipeLayout'

const RECIPE_DATA = {
  title: "Bún Bò Giò Heo Quảng Trị",
  subtitle: "Quảng Trị Beef & Pork Trotter Vermicelli — The Ancestor Bowl That Huế Refined Away",
  servings: 6,
  prepTime: "45 min",
  cookTime: "4 hr",
  totalTime: "4 hr 45 min",
  difficulty: "Hard" as const,
  rating: 4.9,
  reviewCount: 127,
  image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800",
  description: "Before bún bò Huế became one of Vietnam's most celebrated soups, there was bún bò giò heo Quảng Trị — the rougher, fiercer, less elegant original that the imperial city polished into fame. Where Huế refined the broth to ruby clarity and balanced the spice to sophisticated warmth, Quảng Trị kept the broth turbid and proud, the chili heat merciless, and the portions enormous. This is the working-class ancestor: more pork trotter than beef, more shrimp paste funk than lemongrass perfume, more ớt hiểm fire than gentle warmth. It's the bowl that Huế wouldn't put on the royal table — and the bowl that every Quảng Trị native insists is better precisely because of that.",

  ingredients: [
    { section: "Broth — The 4-Hour Foundation", items: [
      "1kg beef shank (bắp bò), whole",
      "800g pork trotters (giò heo), split lengthwise",
      "500g pork bones (xương heo)",
      "4L water",
      "3 stalks lemongrass, bruised and knotted",
      "1 piece (30g) fermented shrimp paste (mắm ruốc Huế)",
      "3 tbsp fish sauce (nước mắm)",
      "1 tbsp sugar",
      "1 tbsp salt"
    ]},
    { section: "Sate Chili Oil — The Quảng Trị Fire", items: [
      "100ml cooking oil",
      "3 tbsp dried chili flakes (ớt bột)",
      "2 stalks lemongrass, white part only, very finely minced",
      "3 cloves garlic, minced",
      "2 tbsp annatto seeds (hạt điều) OR 1 tbsp annatto oil",
      "1 tbsp fermented shrimp paste (mắm ruốc)",
      "1 tsp sugar"
    ]},
    { section: "Bowl Assembly", items: [
      "800g fresh bún bò (thick round rice vermicelli)",
      "200g Vietnamese pork sausage (chả Huế), sliced",
      "Blood pudding (huyết heo), cubed — optional",
      "2 banana blossom hearts (bắp chuối), thinly shredded",
      "200g bean sprouts (giá đỗ)",
      "1 bunch water spinach (rau muống), cut into 5cm pieces",
      "1 medium onion, thinly sliced into rings"
    ]},
    { section: "Garnish & Table Condiments", items: [
      "Fresh herbs: Vietnamese coriander (rau răm), saw-tooth coriander (ngò gai), perilla (tía tô)",
      "Lime wedges",
      "Fresh ớt hiểm chili (green bird's eye chili)",
      "Extra mắm ruốc on the side",
      "Fried shallots (hành phi)"
    ]}
  ],

  instructions: [
    {
      step: 1,
      title: "Prepare the Bones and Meat — The Cold-Water Principle",
      details: "Place pork bones in a large pot with cold water. Bring to a rolling boil for 5 minutes. Drain, rinse thoroughly under cold running water, scrubbing off all scum and impurities. Clean the pot. Place cleaned bones, whole beef shank, and split pork trotters in the clean pot with 4L COLD water. Set over high heat and bring to a boil — this will take 15-20 minutes. The moment it reaches a full boil, reduce heat to the lowest possible simmer.",
      tip: "Starting with COLD water for the main broth (after blanching) is the foundational principle for all Vietnamese noodle soups — but with beef shank and pork trotters, the stakes are higher than with chicken or fish. Beef shank contains dense collagen bundles wrapped around muscle fibres in a complex three-dimensional weave. Cold-start extraction allows this collagen to denature GRADUALLY: the triple-helix structure unwinds slowly between 60-80°C, converting to gelatin strands that dissolve into the broth. A hot-start denatures the surface collagen instantly, creating a sealed protein shell around each piece — like shrink-wrapping a sponge. The interior collagen never reaches the broth; you get tough, stringy meat in thin, flavourless liquid. Pork trotters are even more critical: they're 30-40% collagen by dry weight, and that collagen IS the broth body. A properly cold-started trotter broth should set to jelly when refrigerated — that's your quality indicator."
    },
    {
      step: 2,
      title: "The 4-Hour Simmer — Patience as Ingredient",
      details: "Maintain the gentlest simmer possible — the surface should have occasional lazy bubbles rising every 3-4 seconds, never a rolling boil. Add bruised lemongrass knots. After 1 hour, remove the beef shank (it should be tender but still hold shape — test with a chopstick, which should meet slight resistance). Set beef aside to cool. Continue simmering pork trotters and bones for 3 MORE hours (4 hours total). Skim fat periodically but leave some — this is a RICH broth, not a clear consommé. At the 3-hour mark, add 30g mắm ruốc (fermented shrimp paste), stir to dissolve completely.",
      tip: "The 4-hour simmer is calibrated to COLLAGEN CONVERSION KINETICS. Collagen-to-gelatin conversion follows first-order kinetics — it's exponential, not linear. At 85°C (gentle simmer), approximately 10% of collagen converts per hour for the first 2 hours, then the rate accelerates as the remaining collagen structure weakens: 20% in hour 3, 30% in hour 4. By 4 hours, you've converted 70-80% of available collagen to gelatin. Beyond 5 hours, diminishing returns set in AND you risk breaking gelatin chains into shorter fragments that lose their gelling power. The mắm ruốc addition at hour 3 (not hour 1) is deliberate: adding it too early would acidify the broth slightly (mắm ruốc pH ≈ 5.5), and acidic conditions below pH 6 accelerate collagen hydrolysis TOO aggressively — producing thin, non-gelling broth fragments instead of long gelatin chains. By hour 3, 50% of collagen has already converted to stable gelatin chains; the mắm ruốc's acidity then helps extract the remaining stubborn collagen without damaging what's already dissolved."
    },
    {
      step: 3,
      title: "Build the Sate Chili Oil — The Quảng Trị Identity",
      details: "Heat 100ml oil in a small saucepan over LOW heat (130°C — well below smoke point). If using annatto seeds: add seeds to cool oil first, heat slowly until oil turns deep red-orange (3-4 minutes), then remove and discard seeds. Add minced lemongrass, cook for 5 minutes until golden and fragrant. Add minced garlic, cook 1 minute. Remove pan from heat and let cool for 2 minutes (to prevent chili from burning). Add chili flakes, stir to combine — the residual heat will bloom the chili without burning it. Add 1 tbsp mắm ruốc and 1 tsp sugar, stir. The sate should be a deep red-orange, intensely aromatic, and thick with solids.",
      tip: "This sate is what separates Quảng Trị bún bò from the Huế version — and the difference is PROPORTION and INTENTION. Huế sate uses chili primarily for COLOUR and gentle warmth — the ruby-red broth is about appearance. Quảng Trị sate uses chili for HEAT — the Scoville load is 2-3× higher because Quảng Trị uses ớt hiểm (Capsicum frutescens, 50,000-100,000 SHU) rather than ớt sừng (Capsicum annuum, 10,000-25,000 SHU). The capsaicin difference is not subtle: ớt hiểm's capsaicin concentration creates a BURNING sensation that activates TRPV1 pain receptors intensely enough to trigger endorphin release — the 'chili high' that Quảng Trị locals are physiologically adapted to. The lemongrass-in-sate (rather than lemongrass-in-broth-only) is also a Quảng Trị signature: frying lemongrass in oil at 130°C converts citral (its primary volatile) into p-cymene and p-cresol — smoky, thyme-like compounds that don't exist in water-extracted lemongrass. This oil-extracted lemongrass flavour is fundamentally different from the broth's water-extracted lemongrass — you get TWO lemongrass characters in one bowl."
    },
    {
      step: 4,
      title: "Season the Broth — The Mắm Ruốc Backbone",
      details: "After 4 hours, remove pork bones (discard) and pork trotters (keep — they're for serving). Strain broth through a fine mesh strainer. You should have approximately 2.5-3L of rich, slightly cloudy, amber broth. Return to pot. Add 3 tbsp fish sauce, 1 tbsp sugar. Taste: the broth should be savoury, slightly sweet, with a background funk from the mắm ruốc and a pronounced lemongrass aroma. It should NOT taste clean or delicate — this is a BOLD broth.",
      tip: "Quảng Trị broth is intentionally TURBID — cloudy with suspended collagen fragments, micro-droplets of rendered fat, and fine protein particles. This turbidity is NOT a flaw (as Huế cooks might argue) but a FLAVOUR DELIVERY MECHANISM. Dissolved flavour compounds (umami amino acids from mắm ruốc, lemongrass terpenes, Maillard products from meat browning) bind to suspended particles through hydrophobic interaction and electrostatic adsorption. These particles then transport the flavour compounds directly to your tongue, bypassing the aqueous phase. Clear broth delivers flavour in solution — it hits quickly and dissipates. Turbid broth delivers flavour on particles — it hits slowly, coats the tongue, and persists. This is the same principle behind why whole milk tastes richer than skim milk (fat globules carry flavour) and why emulsified vinaigrettes taste more complex than separated ones. Quảng Trị's turbid broth is empirically optimised for MAXIMUM FLAVOUR PERSISTENCE per sip."
    },
    {
      step: 5,
      title: "Prepare Bowl Components — Parallel Processing",
      details: "While the broth is in its final hour: (1) Slice the cooled beef shank against the grain into 3mm slices. (2) Separate pork trotter pieces — keep bone-in chunks for serving. (3) Slice chả Huế into 5mm rounds. (4) Shred banana blossom hearts thinly and soak in acidulated water (water + 1 tbsp lime juice) to prevent browning. (5) Blanch water spinach in boiling water for 30 seconds, shock in ice water. (6) Blanch bean sprouts for 15 seconds, shock in ice water. (7) Bring a large pot of water to boil for the bún.",
      tip: "Slicing beef shank AGAINST THE GRAIN is the single most impactful cutting decision in this recipe. Beef shank contains parallel bundles of muscle fibres (each 10-100μm in diameter) held together by collagen perimysium. After braising, the collagen has softened, but the muscle fibres themselves remain intact. Cutting WITH the grain produces long, stringy strips that require extensive chewing — each bite forces your teeth to tear individual fibres apart. Cutting AGAINST the grain severs all fibres into 3mm segments — each bite is pre-divided into short, tender pieces that separate under minimal jaw pressure. The 3mm thickness is the sweet spot: thin enough to curl attractively around chopsticks, thick enough to retain broth in the meat's porous interior (thinner slices squeeze out trapped liquid when lifted). Banana blossom in acidulated water prevents enzymatic browning — the same polyphenol oxidase + oxygen reaction as in cut apples — preserving the pale pink-white colour that provides visual contrast against the red-brown broth."
    },
    {
      step: 6,
      title: "Cook the Bún — Thick Rounds, Not Thin Threads",
      details: "Bring a large pot of water to a rolling boil. Add fresh bún bò (thick round rice vermicelli, approximately 2-3mm diameter). Cook for 60-90 seconds only — fresh bún cooks extremely fast. Drain immediately and rinse under cold water to stop cooking and remove excess surface starch. Divide into 6 serving bowls.",
      tip: "Bún BÒ (thick round) versus bún PHỞ (flat) versus bún RIÊU (thin round) is a noodle-calibre decision, not a noodle-type decision. Thick round bún (2-3mm) was selected for bún bò specifically because of the broth's viscosity. A collagen-rich, slightly turbid broth has higher viscosity than a clear phở broth — it clings to surfaces rather than flowing freely. Thick noodles have LOWER surface-area-to-volume ratio than thin noodles, which means each strand absorbs less of this heavy broth. If you used thin bún, each strand would become saturated and heavy within 30 seconds, creating a gummy, over-sauced mass. The thick format ensures each strand maintains structural integrity in the rich broth for 10-15 minutes of eating time. This is the same engineering principle that pairs thick pasta (pappardelle) with heavy ragù and thin pasta (angel hair) with light olive oil sauces — noodle calibre is matched to sauce viscosity."
    },
    {
      step: 7,
      title: "Assemble the Bowl — Architecture, Not Pile",
      details: "Over the bún in each bowl, arrange: 3-4 slices of beef shank (fanned), 1-2 chunks of pork trotter (bone-in), 2-3 slices of chả Huế, and cubed blood pudding if using. Add a small handful of shredded banana blossom, blanched bean sprouts, and blanched water spinach. Ladle HOT broth (at a full rolling boil) over everything — the boiling broth will reheat all components instantly. Float 1-2 tbsp of sate chili oil on the surface. Add sliced onion rings.",
      tip: "Ladling BOILING broth is non-negotiable for this dish, and the reason is DUAL-PURPOSE HEAT TRANSFER. Purpose 1 — REHEATING: the pre-sliced beef shank and pre-cooked vegetables are at room temperature. Boiling broth (100°C) transfers enough thermal energy in the 5-second contact to bring them to eating temperature (60-70°C) without further cooking. Warm broth (80°C) would leave the centre of beef slices cold. Purpose 2 — SATE ACTIVATION: the floating sate chili oil contains capsaicin dissolved in fat. At serving temperature (85-95°C), the sate's oil has low enough viscosity to SPREAD across the broth surface, creating a thin, even film. This film is what you inhale before the first sip — the steam carries capsaicin-laden oil droplets directly to your nasal mucosa, creating the throat-clearing, nose-tingling sensation that defines bún bò Quảng Trị. Below 75°C, the oil thickens and pools rather than spreading, and the aromatic effect is lost."
    },
    {
      step: 8,
      title: "Serve — The Quảng Trị Table",
      details: "Serve immediately with the herb platter (rau răm, ngò gai, tía tô), lime wedges, fresh ớt hiểm chilies (sliced or whole), and a small dish of extra mắm ruốc for those who want additional funk. The eater customises: herbs go in first (they'll wilt in the hot broth), then lime juice (adjusts acidity), then extra chili and mắm ruốc to taste. Fried shallots are added last — they sit on the surface for crunch.",
      tip: "The customisation order matters and follows the principle of IRREVERSIBILITY GRADIENT. Herbs first: they wilt within 15 seconds, releasing their volatiles into the broth — this is reversible in the sense that they can be fished out if unwanted. Lime next: citric acid adjusts pH, which changes the perception of salt and umami — this is partially reversible (add more broth to dilute). Chili last: capsaicin dissolves into the fat layer and CANNOT be removed — there's no unspiking a broth. Mắm ruốc last of the condiments: it adds both umami AND funk, and once dissolved, it's permanent. Fried shallots absolutely last: they lose all crunch within 60 seconds of contact with liquid — adding them early wastes their textural contribution. This customisation sequence protects the eater from making irreversible mistakes — the riskiest additions go last, when the eater has already tasted and adjusted the base."
    }
  ],

  proTips: [
    {
      title: "QUẢNG TRỊ VS HUẾ — The Ancestor vs The Refinement",
      content: "Bún bò giò heo existed in the Quảng Trị-Thừa Thiên region centuries before Huế claimed it. The two versions diverge in philosophy, not just recipe. BROTH: Quảng Trị = turbid, collagen-heavy, pork-dominant. Huế = clear-to-ruby, balanced, beef-forward. HEAT: Quảng Trị = scorching ớt hiểm (50,000-100,000 SHU), heat as identity. Huế = moderate ớt sừng (10,000-25,000 SHU), heat as colour. MẮM RUỐC: Quảng Trị = heavy, 30g+ per pot, funk as backbone. Huế = restrained, 10-15g, funk as accent. PORTION: Quảng Trị = enormous, trotter-heavy, meal for a labourer. Huế = moderate, elegantly arranged, meal for a courtier. LEMONGRASS: Quảng Trị = in broth AND in sate (two characters). Huế = in broth only (one character). The historical pattern: Huế's royal kitchen took Quảng Trị's rustic soup and applied the aesthetic of cung đình (court cuisine) — reducing extremes, harmonising elements, prioritising appearance. Quảng Trị kept the original's rawness: the bowl was designed to fuel soldiers and farmers, not to impress visiting dignitaries. Both are masterful; they optimise for different audiences."
    },
    {
      title: "MẮM RUỐC VS MẮM TÔM — The Fermented Shrimp Divide",
      content: "Vietnamese cuisine has TWO fermented shrimp products that are often confused but are chemically distinct. MẮM TÔM (northern/Hanoi style): made from small shrimp (tép) fermented with high salt (25-30%) for 2-3 months. Texture: thick paste, almost solid. Colour: dark purple-grey. Aroma: extremely pungent, high trimethylamine. Used as: DIP (bún đậu, bún chả). MẮM RUỐC (central/Huế style): made from krill (ruốc/moi) fermented with moderate salt (18-22%) for 1-2 months. Texture: smooth paste, spreadable. Colour: pink-brown. Aroma: pungent but rounder, more umami-forward, less pure funk. Used as: BROTH SEASONING (bún bò, bánh canh). The chemical difference: krill contain higher concentrations of free amino acids (especially glutamic acid and aspartic acid) than shrimp, making mắm ruốc inherently more umami-rich. Krill also contain astaxanthin (the red pigment in lobster shells), which gives mắm ruốc its characteristic pink hue and contributes to the reddish tint of bún bò broth. Substituting mắm tôm for mắm ruốc in bún bò gives you funk without umami backbone — a one-dimensional broth. Substituting mắm ruốc for mắm tôm in bún đậu gives you umami without the PUNCH — too polite for raw dipping."
    },
    {
      title: "THE COLLAGEN ECONOMY — Why Pork Trotters Are Non-Negotiable",
      content: "Pork trotters are 30-40% collagen by dry weight — the highest concentration of any commonly available cut. This collagen, when properly converted to gelatin through 4-hour simmering, provides the BODY that defines bún bò broth. Body is distinct from flavour: you can have flavourful thin broth (like fish sauce in water) or bland thick broth (like plain bone broth). Great bún bò has both. Gelatin provides body through a specific mechanism: gelatin molecules are long, flexible chains (molecular weight 20,000-250,000 daltons) that entangle with each other and with water molecules, increasing the viscosity of the broth. At concentrations above 1%, gelatin creates a broth that COATS the tongue — it doesn't wash across the palate like water but clings, giving taste receptors longer contact time with dissolved flavour compounds. This coating effect amplifies perceived umami by 30-50% (laboratory-measured) without adding any umami compounds. It's a PERCEPTUAL multiplier, not a chemical one. This is why grandmothers insist on trotters even when they don't know the word 'gelatin' — they know the broth feels different in the mouth, and they know that feeling makes everything taste more."
    },
    {
      title: "ỚT HIỂM — THE QUẢNG TRỊ CHILI THAT BUILT A CUISINE",
      content: "Ớt hiểm (Capsicum frutescens, related to tabasco pepper) is the defining chili of Quảng Trị cuisine and arguably the hottest chili in mainstream Vietnamese cooking. At 50,000-100,000 SHU, it's 3-5× hotter than the more common ớt sừng (Capsicum annuum, 10,000-25,000 SHU) used elsewhere in Vietnam. The name 'hiểm' means 'dangerous' or 'perilous' — a warning encoded in the vocabulary. Ớt hiểm thrives in Quảng Trị's harsh climate: sandy soil, gió Lào (dry foehn wind), and extreme temperature swings. Under stress, Capsicum frutescens increases capsaicin production as a defence mechanism — the harsher the growing conditions, the hotter the fruit. This creates a TERROIR OF HEAT: ớt hiểm grown in Quảng Trị's stressed soil is measurably hotter than the same variety grown in milder climates. The physiological effect: regular consumption of high-capsaicin foods upregulates TRPV1 receptor expression BUT simultaneously desensitises them — Quảng Trị locals have literally adapted their pain receptors to tolerate heat levels that would incapacitate outsiders. This adaptation is the biological basis of the common claim that 'Quảng Trị people eat chili like vegetables.'"
    },
    {
      title: "TWO LEMONGRASS CHARACTERS — Oil-Extracted vs Water-Extracted",
      content: "Quảng Trị bún bò contains lemongrass in TWO forms that produce chemically distinct flavour profiles. WATER-EXTRACTED (stalks simmered in broth for 4 hours): hot water extracts citral (geranial + neral), the primary volatile responsible for lemongrass's 'lemony' aroma. Citral is water-soluble at cooking temperatures and distributes evenly through the broth, creating a subtle, pervasive lemongrass backdrop. However, prolonged heating causes citral to undergo acid-catalysed cyclisation, converting to p-menthadienols — milder, less sharp, more 'cooked' in character. OIL-EXTRACTED (minced lemongrass fried in sate at 130°C): oil at 130°C selectively extracts DIFFERENT compounds: myrcene (β-myrcene, boiling point 167°C — extracted by oil but destroyed by water at 100°C) and citronellol (floral, rose-like). The hot oil also converts citral into p-cymene and thymol (thyme-like, herbal) through thermal rearrangement. These oil-extracted compounds sit in the sate's fat layer on the broth surface. Result: your nose gets the oil-extracted character (smoky, herbal, thyme-like) from the surface film, while your tongue gets the water-extracted character (soft, cooked-lemony) from the broth below. Two lemongrass experiences in ONE sip. Huế uses only water-extraction. Quảng Trị's dual-extraction is a flavour complexity that the refined version lost."
    }
  ],

  nutritionFacts: {
    calories: 620,
    protein: "42g",
    carbs: "56g",
    fat: "24g",
    fiber: "4g",
    sodium: "1560mg"
  },

  keywords: ["bún bò giò heo", "Quảng Trị", "bún bò Huế original", "Vietnamese beef noodle soup", "pork trotter soup", "mắm ruốc", "ớt hiểm", "central Vietnam noodle", "bún bò gốc", "spicy Vietnamese soup", "lemongrass beef soup", "Quảng Trị cuisine"],

  recipeSchema: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Bún Bò Giò Heo Quảng Trị — Beef & Pork Trotter Vermicelli Soup",
    "description": "The fiercer, rougher ancestor of bún bò Huế: turbid collagen-rich broth, scorching ớt hiểm sate, heavy mắm ruốc backbone, and enormous portions. Quảng Trị's working-class masterpiece that Huế polished into fame.",
    "image": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "datePublished": "2026-10-12",
    "prepTime": "PT45M",
    "cookTime": "PT4H",
    "totalTime": "PT4H45M",
    "recipeYield": "6 servings",
    "recipeCategory": "Main Course",
    "recipeCuisine": "Vietnamese",
    "keywords": "bún bò giò heo, Quảng Trị, bún bò Huế ancestor, Vietnamese spicy soup, pork trotter, mắm ruốc, ớt hiểm",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "620 kcal",
      "proteinContent": "42g",
      "carbohydrateContent": "56g",
      "fatContent": "24g",
      "fiberContent": "4g",
      "sodiumContent": "1560mg"
    },
    "recipeIngredient": [
      "1kg beef shank",
      "800g pork trotters",
      "500g pork bones",
      "30g fermented shrimp paste (mắm ruốc)",
      "3 stalks lemongrass",
      "100ml oil for sate",
      "3 tbsp dried chili flakes",
      "800g thick rice vermicelli",
      "Vietnamese pork sausage (chả Huế)",
      "Banana blossom, bean sprouts, water spinach",
      "Fresh herbs, lime, ớt hiểm chili"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Blanch pork bones, rinse. Place cleaned bones, whole beef shank, and split pork trotters in pot with 4L cold water. Bring to boil, reduce to gentlest simmer." },
      { "@type": "HowToStep", "text": "Simmer 4 hours total. Remove beef shank at 1 hour. Add lemongrass. Add mắm ruốc at hour 3. Skim fat periodically." },
      { "@type": "HowToStep", "text": "Build sate: infuse oil with annatto, fry lemongrass and garlic, add chili flakes off heat, stir in mắm ruốc and sugar." },
      { "@type": "HowToStep", "text": "Strain broth, season with fish sauce and sugar. Broth should be bold, turbid, and funky." },
      { "@type": "HowToStep", "text": "Slice beef against grain (3mm). Prepare trotter chunks, chả, banana blossom, blanched vegetables." },
      { "@type": "HowToStep", "text": "Cook thick bún bò 60-90 seconds, drain, divide into bowls." },
      { "@type": "HowToStep", "text": "Arrange beef, trotter, chả over bún. Ladle boiling broth over. Float sate on surface. Add onion rings." },
      { "@type": "HowToStep", "text": "Serve with herb platter, lime, fresh ớt hiểm, extra mắm ruốc. Customise in order: herbs → lime → chili → mắm ruốc → fried shallots." }
    ]
  }
}

export default function BunBoGioHeoQuangTriPage() {
  return <RecipeLayout recipe={RECIPE_DATA} />
}