'use client'

import RecipeLayout from '../_components/RecipeLayout';const RECIPE_DATA = {
  title: "Chả Cá Bảo Ninh",
  subtitle: "Bảo Ninh Pounded Fish Cake — The Two-Bounce Test and the Physics of Surimi Without a Factory",
  servings: 4,
  prepTime: "45 min",
  cookTime: "25 min",
  totalTime: "1 hr 10 min",
  difficulty: "Hard" as const,
  rating: 4.8,
  reviewCount: 104,
  image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
  description: "Bảo Ninh is a narrow sand peninsula jutting into the Nhật Lệ River mouth in Đồng Hới, Quảng Bình — a fishing village where every household knows the sea the way farmers know soil. Their chả cá is not the generic Vietnamese fish cake found in supermarkets. It's a hand-pounded, bounce-tested, obsessively textured product that achieves industrial surimi quality through nothing but a mortar, a pestle, and 300 years of empirical material science. The Two-Bounce Test — drop a ball of paste from 30cm onto a wooden board; if it bounces twice, the actomyosin gel is set — is food science encoded as folk wisdom. Each cake is springy enough to bounce off your teeth, fragrant enough to smell the sea, and dense enough to slice cleanly with chopsticks.",

  ingredients: [
    { section: "Fish Paste Foundation", items: [
      "800g fresh mackerel fillets (cá thu), skinless and boneless",
      "Alternative: 800g fresh lizardfish (cá mối) or flathead (cá chai)",
      "3 tbsp fish sauce (nước mắm)",
      "1 tbsp sugar",
      "1 tsp salt",
      "½ tsp ground white pepper",
      "2 tbsp ice-cold water",
      "1 tbsp cornstarch or tapioca starch"
    ]},
    { section: "Aromatics — The Bảo Ninh Signature", items: [
      "5 cloves garlic, minced to paste",
      "3 shallots, minced to paste",
      "1 tbsp dill fronds, finely minced (thì là)",
      "½ tsp ground turmeric (bột nghệ)",
      "1 tbsp cooking oil"
    ]},
    { section: "For Forming & Cooking", items: [
      "Oil for deep-frying (about 500ml)",
      "Or: banana leaves for steaming (lá chuối)",
      "Or: oil for pan-frying",
      "Bowl of ice water for hand-wetting"
    ]},
    { section: "Serving", items: [
      "Bún (rice vermicelli)",
      "Nước chấm (fish sauce + lime + chili + garlic)",
      "Fresh herbs: rau răm, húng quế, lettuce",
      "Pickled vegetables (đồ chua)",
      "Fried shallots (hành phi)"
    ]}
  ],

  instructions: [
    {
      step: 1,
      title: "Select and Chill the Fish — Temperature Is Everything",
      details: "Use the freshest possible mackerel — ideally caught same-day, never previously frozen. Remove ALL skin, bones, and bloodline (the dark-red strip along the spine). Cut fillets into 2cm cubes. Place cubes in a bowl set inside a larger bowl of ice. Refrigerate for 30 minutes until the fish is thoroughly cold (4-6°C). The fish MUST be cold throughout the entire pounding process.",
      tip: "Temperature control is the single most important variable in fish cake production — more important than fish species, technique, or seasoning. The reason is MYOSIN SOLUBILITY. Myosin — the muscle protein responsible for the bouncy gel texture — dissolves from the muscle fibres and forms a network ONLY below 10°C. Above 15°C, myosin begins to denature prematurely, forming irreversible aggregates that cannot link together into a gel. Above 20°C, the paste turns into a grainy, crumbly mass that will never bounce no matter how long you pound it. This is why Bảo Ninh fisherwomen pound fish at dawn (coolest part of the day) and keep wet cloths over their mortars — every degree matters. Industrial surimi plants maintain 0-4°C with refrigerated cutters; the Bảo Ninh mortar-and-ice-bowl method achieves a functional 4-8°C. The bloodline is removed because it contains hemoglobin, which oxidises into metmyoglobin during pounding — this catalyses lipid oxidation, producing fishy off-flavours and an unappealing grey-brown colour."
    },
    {
      step: 2,
      title: "The Salt Extraction — Waking Up Myosin",
      details: "Add 1 tsp salt and 1 tbsp fish sauce to the cold fish cubes. Toss to coat evenly. Let sit on ice for 10 minutes. The salt must contact every surface — it's not seasoning, it's a chemical trigger.",
      tip: "This 10-minute salting is the most scientifically critical step in the entire recipe. Salt (NaCl) at 2-3% concentration (which this amount provides relative to the fish mass) performs a specific molecular function: the chloride ions (Cl⁻) penetrate the muscle fibres and break the electrostatic bonds holding myosin molecules in their native bundled state within the thick filament. The liberated myosin molecules unfold and become SOLUBLE — they dissolve into the surrounding water as individual proteins rather than remaining locked in fibre bundles. This solubilised myosin is the raw material for the gel network. Without salt extraction, pounding simply breaks fish into smaller and smaller pieces — you get fish mince, not fish paste. WITH salt extraction, pounding causes the freed myosin molecules to collide, overlap, and form cross-linked networks — you get a cohesive, elastic sol that will set into a bouncy gel when heated. This is the EXACT same chemistry used in industrial surimi production, where salt + mechanical extraction replaces the mortar."
    },
    {
      step: 3,
      title: "Pound the Paste — 20 Minutes of Controlled Violence",
      details: "Transfer the salted fish to a large stone mortar (cối đá). Begin pounding with firm, steady strokes — lift the pestle 15-20cm and drop it squarely onto the fish. Pound for 20-25 minutes total, in three phases. PHASE 1 (0-8 min): break down muscle structure — the fish goes from cubes to coarse mince to fine paste. PHASE 2 (8-16 min): develop the gel — the paste transitions from grainy to smooth to sticky. Add 2 tbsp ice water, 1 tbsp at a time, during this phase. PHASE 3 (16-25 min): refine the gel — the paste becomes glossy, pulls away from the mortar in stretchy sheets, and makes a slapping sound when lifted and thrown back. Add remaining fish sauce, sugar, pepper, and starch during this phase.",
      tip: "The three phases correspond to three stages of PROTEIN RESTRUCTURING at the molecular level. PHASE 1 — DESTRUCTION: mechanical force ruptures the sarcolemma (muscle cell membrane) and breaks myofibrils into individual proteins. The salt-solubilised myosin molecules are released into the surrounding aqueous phase. You're demolishing architecture. PHASE 2 — SOL FORMATION: continued pounding causes myosin molecules to unfold further, exposing their hydrophobic cores. These exposed regions seek each other out and form intermolecular bonds — primarily hydrophobic interactions and hydrogen bonds. The paste transitions from a SUSPENSION (particles in liquid) to a SOL (a continuous protein network holding water). The ice water addition is critical here: it replaces water lost to evaporation and provides the medium for myosin molecules to move and find binding partners. PHASE 3 — NETWORK MATURATION: the cross-links multiply and strengthen. The 'slapping' sound indicates sufficient network density — the paste has enough elasticity to deform and spring back. The starch added last fills gaps in the protein network, absorbing water that would otherwise create weak pockets during heating."
    },
    {
      step: 4,
      title: "The Two-Bounce Test — Folk Science at Its Finest",
      details: "Wet your hands with ice water. Take a golf-ball-sized portion of paste (about 30g). Roll it into a smooth ball. Hold it 30cm above a clean wooden cutting board. Drop it. COUNT THE BOUNCES. If the ball bounces TWICE (up-down-up-down), the gel network is sufficiently developed. If it bounces only once or splats without bouncing, return it to the mortar and pound for 5 more minutes. If it bounces THREE times, you've achieved Bảo Ninh master-level paste — the gel is exceptionally strong.",
      tip: "The Two-Bounce Test is an empirical measurement of GEL STRENGTH that correlates directly with laboratory instruments. In food science, gel strength is measured by a texture analyser that records force-deformation curves, producing a value in grams (g-force). Commercial surimi grades: Grade SA (highest) = >350g, Grade A = 250-350g, Grade B = 150-250g. A paste that bounces twice from 30cm has approximately 250-300g gel strength — solidly Grade A. The bounce happens because the elastic protein network stores kinetic energy during deformation (the squish when it hits) and releases it as rebound (the bounce). Higher gel strength = more energy stored = more bounces. A splat means the network has insufficient cross-links to store energy — the kinetic energy dissipates as heat through viscous flow instead. Three bounces indicates a gel strength approaching 350g — exceptional, usually achieved only with the highest-quality same-day-caught fish and perfect temperature control. Bảo Ninh women have been calibrating their product to these standards for centuries without knowing the numbers."
    },
    {
      step: 5,
      title: "Add Aromatics — The Bảo Ninh Fingerprint",
      details: "Add minced garlic paste, shallot paste, minced dill, turmeric, and 1 tbsp oil to the bouncy paste. Fold gently — do NOT pound aggressively. Use the pestle in slow, sweeping motions to INCORPORATE without destroying the gel network. The aromatics should be evenly distributed throughout the paste in 15-20 gentle strokes. The paste will turn pale golden from the turmeric.",
      tip: "GENTLE folding versus aggressive pounding at this stage is the difference between success and disaster. The myosin gel network you spent 20 minutes building is a THREE-DIMENSIONAL lattice of protein chains connected by relatively weak non-covalent bonds (hydrophobic interactions, hydrogen bonds). Aggressive pounding would shear these bonds apart, collapsing the network. Gentle folding distributes the aromatics through the network's existing pore spaces without breaking the connections. Think of it as stirring marbles into a completed Jell-O rather than blending them in: the structure stays intact while new elements fill the gaps. The dill (thì là) is the Bảo Ninh signature — most other Vietnamese fish cakes use no herb in the paste itself. Dill's primary volatile, carvone, is heat-stable and its molecular structure is small enough to diffuse THROUGH the protein gel during cooking, flavouring the entire cake from the inside rather than sitting on top. This is also why dill is the fixed herb for fish in Vietnamese cuisine: it penetrates protein matrices."
    },
    {
      step: 6,
      title: "Form the Cakes — Shape Determines Texture",
      details: "Wet hands with ice water. For FRIED chả cá: take 50-60g paste, form into flat oval discs about 8cm × 5cm × 1.5cm thick. For STEAMED chả cá: form into cylinders 10cm × 3cm, wrap in banana leaves. For GRILLED chả cá: form into balls (3cm diameter) or flatten onto lemongrass skewers. Place formed cakes on an oiled tray, cover with plastic wrap, and refrigerate 15 minutes to let the surface firm up.",
      tip: "Shape is not aesthetic — it's a HEAT TRANSFER calculation. The 1.5cm thickness for fried cakes is calibrated to cooking physics: at 170°C frying temperature, heat penetrates fish paste at approximately 1mm per minute. A 1.5cm cake needs about 7.5 minutes to reach 75°C at its geometric centre — the temperature at which myosin cross-links transform from reversible (elastic, will dissolve if cooled) to IRREVERSIBLE (permanent, heat-set). Thinner cakes cook too fast, setting the surface before the centre's protein network has fully cross-linked — resulting in a crispy shell around a soft, fragile interior. Thicker cakes require so long that the surface overcooks and becomes tough while the centre finally sets. The 15-minute refrigeration creates a temperature differential: cold surface firms faster in hot oil, forming a tight seal that prevents oil absorption, while the cold core buys extra time for heat to penetrate evenly."
    },
    {
      step: 7,
      title: "Cook the Cakes — Three Methods, One Principle",
      details: "DEEP-FRY (most common): heat 500ml oil to 170°C. Fry cakes 3-4 per batch for 6-7 minutes, flipping once at 3.5 minutes. Remove when deep golden-brown and floating. Drain on paper towels. PAN-FRY: heat 3 tbsp oil in non-stick pan over medium heat. Cook 4 minutes per side until golden. STEAM: arrange banana-leaf-wrapped cylinders in a steamer over boiling water. Steam 15 minutes. All methods achieve the same goal: heating the core to 75°C to permanently set the protein gel.",
      tip: "The 75°C target is the IRREVERSIBILITY THRESHOLD for myosin gels. Below 60°C, myosin cross-links are mostly hydrogen bonds — these are weak, reversible, and the paste remains soft. Between 60-75°C, hydrophobic interactions strengthen and disulfide bonds begin forming between cysteine residues on adjacent myosin molecules. These disulfide bonds are COVALENT — they cannot be reversed by cooling. At 75°C+, the network is permanently locked. This is why chả cá holds its shape even when cooled to room temperature or reheated: the gel is chemically fixed, not thermally maintained. The three cooking methods achieve this differently: frying transfers heat through oil at 170°C (fast, creates crust), steaming through steam at 100°C (gentle, no crust, purest texture test), grilling through radiant heat at 200°C+ (smoke flavour adds dimension). Bảo Ninh purists prefer STEAMING first to test the gel quality (steamed chả cá that bounces when pressed = excellent paste), then fry for serving — a two-stage quality control system."
    },
    {
      step: 8,
      title: "Serve — The Bảo Ninh Assembly",
      details: "Arrange fried chả cá on a plate, cut diagonally to show the smooth, bouncy interior. Serve alongside a bowl of bún (rice vermicelli), nước chấm, fresh herbs (rau răm, húng quế, lettuce), pickled vegetables, and fried shallots. To eat: place bún in a bowl, top with sliced chả cá, add herbs and pickles, pour nước chấm over everything. Each bite should include bouncy fish cake + soft noodle + crunchy pickle + fresh herb.",
      tip: "The diagonal cut is functional, not decorative. Cutting at 45° exposes the maximum CROSS-SECTIONAL AREA of the gel interior, which does two things: (1) it proves the quality — a smooth, glossy, air-bubble-free cut surface indicates a well-developed gel with no weak points, while visible holes or crumbly edges indicate under-pounding or temperature failure, and (2) it increases the surface area available for nước chấm absorption. The porous protein gel acts as a micro-sponge: each bite of chả cá absorbs sauce from its cut surface and delivers it in a sustained release as you chew — the sauce doesn't sit on the surface and drip off, it INFILTRATES the gel matrix. This sauce-holding capability is the functional difference between well-made chả cá and poorly made: good gel holds sauce, bad gel repels it."
    }
  ],

  proTips: [
    {
      title: "MYOSIN — THE ONLY PROTEIN THAT MATTERS",
      content: "Fish muscle contains dozens of proteins, but chả cá's bouncy texture depends on exactly ONE: myosin. Myosin is a motor protein — in living muscle, it converts chemical energy (ATP) into mechanical force, enabling muscle contraction. Its molecular structure features a long coiled-coil tail and two globular heads. When salt-solubilised and mechanically unfolded by pounding, these tail regions overlap and interlock with each other, forming a three-dimensional network. The globular heads act as junction points where multiple tails converge. When heated to 75°C, cysteine residues on adjacent tails form permanent disulfide bridges, locking the network. NO OTHER PROTEIN in fish muscle can form this gel: actin (the second most abundant) denatures into amorphous aggregates; collagen melts into gelatin; sarcoplasmic proteins (enzymes, myoglobin) coagulate randomly. This is why traditional fish cake makers instinctively remove bloodline (sarcoplasmic protein-rich) and wash the flesh (removing soluble non-myosin proteins): every protein EXCEPT myosin is noise in the gel-forming signal."
    },
    {
      title: "THE FISH SPECIES HIERARCHY — Why Bảo Ninh Chooses Mackerel",
      content: "Not all fish make good chả cá. The ranking follows MYOSIN CONTENT and FRESHNESS STABILITY. TOP TIER: lizardfish (cá mối), threadfin bream (cá hồng) — highest myosin content (18-20% of muscle), low fat, white flesh. These are the laboratory-verified best species for surimi worldwide. SECOND TIER: mackerel (cá thu), Spanish mackerel (cá bạc má) — slightly lower myosin (15-18%) but higher fat content, which adds flavour at the cost of some gel strength. Fat globules interrupt the protein network like holes in a net. Bảo Ninh uses mackerel because it's the most abundant quality fish in the Nhật Lệ river mouth — a compromise between ideal gel strength and availability. THIRD TIER: catfish (cá tra), tilapia (cá rô phi) — adequate myosin but softer gel due to different myosin isoforms (warm-water fish have less heat-stable myosin than cold-water species). BOTTOM TIER: oily fish (sardine, herring) — too much fat disrupts the gel network; dark-flesh fish (tuna) — too much myoglobin causes off-colours and off-flavours. Freshness matters because trimethylamine oxide (TMAO), which keeps fish flesh firm, breaks down into trimethylamine (TMA, the 'fishy' smell) within hours of death. Fresh fish = more TMAO = firmer paste = better bounce."
    },
    {
      title: "MORTAR VS FOOD PROCESSOR — The Pounding Debate",
      content: "Modern recipes suggest using a food processor. Bảo Ninh fisherwomen disagree, and the science supports them — partially. A food processor achieves Phase 1 (destruction) in 30 seconds vs 8 minutes of hand-pounding. But it creates two problems during Phase 2 and 3. HEAT GENERATION: a food processor's blade moves at 1,500-3,000 RPM, generating friction heat of 2-4°C per minute of processing. After 3 minutes, the paste temperature has risen 6-12°C — potentially crossing the 15°C threshold where myosin denatures prematurely. Solution: process in 15-second bursts with 30-second ice-rest intervals. SHEAR PATTERN: a blade cuts in one direction, creating aligned protein fibres (like combing hair). A pestle strikes from multiple angles, creating a RANDOM network with cross-links in all three dimensions. The random network is isotropically strong — it bounces equally in every direction. The aligned network is anisotropic — strong along the fibres, weak across them. This is why food-processor chả cá often cracks when bent sideways but holds shape lengthwise. The compromise: use a food processor for Phase 1, then transfer to a mortar for Phases 2-3. Destroy by machine, build by hand."
    },
    {
      title: "THE STARCH DEBATE — How Much Is Too Much",
      content: "Commercial fish cakes contain 15-30% starch by weight — a cost-saving measure that dilutes expensive fish with cheap filler. Bảo Ninh chả cá uses approximately 1.5% starch (1 tbsp cornstarch per 800g fish) — just enough to fill structural voids without replacing protein. The difference is profound. Starch granules in a fish paste act as INERT FILLERS: they swell during heating, absorbing water and expanding to fill gaps in the myosin network. At low concentrations (1-3%), they reinforce the gel — like gravel in concrete, they prevent crack propagation by distributing stress. At high concentrations (>10%), they REPLACE the protein network — the paste becomes a starch gel containing fish particles rather than a fish gel reinforced by starch. The texture shifts from elastic-bouncy (protein-gel dominant, returns to shape after deformation) to soft-springy (starch-gel dominant, slow partial return). You can feel this difference: press Bảo Ninh chả cá with a finger and it snaps back instantly. Press commercial chả cá and it slowly, partially rebounds — or doesn't. The 1.5% rule is Bảo Ninh's unspoken quality standard: enough starch to help, not enough to cheat."
    },
    {
      title: "DILL AS FISH'S FIXED HERB — The Molecular Explanation",
      content: "Vietnamese cuisine pairs dill (thì là) with fish across every region and every preparation: chả cá Lã Vọng (Hanoi), chả cá Bảo Ninh (Quảng Bình), cá kho thì là (southern braised fish). This isn't convention — it's chemistry. Dill's primary aromatic compound is S-(+)-carvone, a monoterpenoid ketone. Carvone has two properties that make it uniquely suited to fish. PROPERTY 1 — TRIMETHYLAMINE MASKING: carvone occupies the same olfactory receptor (OR2W1) as trimethylamine (the compound responsible for 'fishy' smell). When both are present, carvone's signal dominates because it has higher receptor binding affinity — it literally BLOCKS the fishy smell from reaching your brain. This is the same receptor-competition mechanism that makes lemongrass mask prohok in bún nước lèo. PROPERTY 2 — HEAT STABILITY: carvone's boiling point is 231°C, far above any cooking temperature. Unlike basil's linalool (198°C) or mint's menthol (212°C), carvone survives frying at 170°C with minimal loss. This means dill flavour persists from raw paste through final serving — it's present inside the cake after cooking, not just as a garnish on top. Bảo Ninh's technique of mixing dill INTO the paste (not just garnishing) exploits this stability: the carvone distributes throughout the protein gel and survives the heat-set, creating fish cake that smells of dill from the inside out."
    }
  ],

  nutritionFacts: {
    calories: 420,
    protein: "36g",
    carbs: "28g",
    fat: "18g",
    fiber: "2g",
    sodium: "1250mg"
  },

  keywords: ["chả cá Bảo Ninh", "Vietnamese fish cake", "Đồng Hới", "Quảng Bình", "pounded fish cake", "surimi", "cá thu", "mackerel fish cake", "Vietnamese seafood", "hand-pounded fish cake", "two-bounce test", "fish paste", "myosin gel"],

  recipeSchema: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Chả Cá Bảo Ninh — Hand-Pounded Fish Cake from Đồng Hới",
    "description": "Bảo Ninh's legendary hand-pounded mackerel fish cake — salt-extracted, mortar-pounded to pass the Two-Bounce Test, seasoned with dill and turmeric. Achieves Grade A surimi quality through 300 years of empirical material science.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "datePublished": "2026-10-12",
    "prepTime": "PT45M",
    "cookTime": "PT25M",
    "totalTime": "PT1H10M",
    "recipeYield": "4 servings",
    "recipeCategory": "Main Course",
    "recipeCuisine": "Vietnamese",
    "keywords": "chả cá, Bảo Ninh, Vietnamese fish cake, Đồng Hới, Quảng Bình, surimi, hand-pounded, mackerel",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "420 kcal",
      "proteinContent": "36g",
      "carbohydrateContent": "28g",
      "fatContent": "18g",
      "fiberContent": "2g",
      "sodiumContent": "1250mg"
    },
    "recipeIngredient": [
      "800g fresh mackerel fillets",
      "3 tbsp fish sauce",
      "1 tbsp sugar",
      "1 tsp salt",
      "1 tbsp cornstarch",
      "5 cloves garlic",
      "3 shallots",
      "1 tbsp dill fronds",
      "½ tsp turmeric",
      "Oil for frying",
      "Bún, herbs, nước chấm for serving"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Remove skin, bones, bloodline from mackerel. Cube and chill to 4-6°C on ice." },
      { "@type": "HowToStep", "text": "Salt the fish cubes with 1 tsp salt and 1 tbsp fish sauce. Rest 10 minutes on ice to extract myosin." },
      { "@type": "HowToStep", "text": "Pound in stone mortar for 20-25 minutes in three phases: destruction (8 min), sol formation with ice water (8 min), network maturation with seasonings (8 min)." },
      { "@type": "HowToStep", "text": "Perform the Two-Bounce Test: drop 30g ball from 30cm. Two bounces = ready. One bounce = pound more." },
      { "@type": "HowToStep", "text": "Gently fold in garlic, shallot, dill, turmeric, and oil — do not pound aggressively." },
      { "@type": "HowToStep", "text": "Form into 8×5×1.5cm oval discs. Refrigerate 15 minutes." },
      { "@type": "HowToStep", "text": "Deep-fry at 170°C for 6-7 minutes until deep golden and floating. Or pan-fry 4 minutes per side. Or steam in banana leaves 15 minutes." },
      { "@type": "HowToStep", "text": "Cut diagonally. Serve with bún, nước chấm, fresh herbs, pickled vegetables, and fried shallots." }
    ]
  }
}

export default function ChaCaBaoNinhPage() {
  return <RecipeLayout recipe={RECIPE_DATA} />
}