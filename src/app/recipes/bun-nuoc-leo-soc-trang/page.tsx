'use client'

import RecipeLayout from '../_components/RecipeLayout';const recipeData = {
  title: "Bún Nước Lèo Sóc Trăng",
  subtitle: "Khmer-Vietnamese Fermented Fish Noodle Soup — Where Two Civilisations Meet in One Bowl",
  servings: 4,
  prepTime: "40 min",
  cookTime: "1 hour 30 min",
  totalTime: "2 hrs 10 min",
  difficulty: "Medium" as const,

  introduction: `In the Mekong Delta's extraordinary catalogue of noodle soups, bún nước lèo occupies a singular position — it is the only major Vietnamese soup whose DNA is explicitly, openly, proudly Khmer. The name itself is a clue: "nước lèo" is a Vietnamese transliteration of the Khmer word for broth, and the dish's soul ingredient — mắm bò hóc (prohok), a Cambodian fermented mudfish paste — has no Vietnamese equivalent and no substitute.

Sóc Trăng, the province that claims this soup as its signature, is one of the Mekong Delta's most ethnically diverse regions: roughly 30% Khmer, 25% Chinese (Teochew and Hokkien), and 45% Vietnamese, a demographic triangle whose culinary expressions have been cross-pollinating for centuries. Bún nước lèo is the edible evidence of this convergence — a Khmer fermented-fish base enriched with Vietnamese lemongrass aromatics and served over Chinese-influenced rice vermicelli, topped with ingredients from all three traditions.

The broth is unlike anything in the Vietnamese canon. Where phở builds on roasted bones and star anise, where bún riêu layers crab and tomato, bún nước lèo constructs its flavour on a foundation of decomposed protein — fish that has been fermented for months until its proteins have broken down into a concentrated paste of free amino acids, primarily glutamate and aspartate. This fermentation product, diluted and cooked with lemongrass, galangal, and turmeric, creates a broth that is murky, complex, deeply funky, and utterly addictive — the opposite of hủ tiếu Nam Vang's crystal clarity, and every bit its equal.`,

  regions: ["Southern Vietnam — Sóc Trăng Province, Mekong Delta (Khmer-Vietnamese borderland cuisine)"],

  history: `The history of bún nước lèo mirrors the history of the Khmer people in the Mekong Delta — a story of ancient presence, gradual Vietnamese southward expansion (Nam tiến), and the cultural negotiations that followed.

The Mekong Delta was Khmer territory until the 17th-18th centuries, when Vietnamese settlers moved southward from Central Vietnam. The Khmer population that remained became the Khmer Krom — "Lower Khmer" — maintaining their language, Theravada Buddhist practice, and food traditions even as Vietnamese political and cultural frameworks grew dominant around them.

Prohok (mắm bò hóc) is the anchor of Khmer Krom cuisine. Made by fermenting snakehead fish or mudfish (cá lóc, cá sặc) with salt for 3-6 months, it is the Khmer equivalent of Vietnamese mắm — but differs fundamentally in texture, intensity, and application. While Vietnamese mắm produces a clear liquid (nước mắm) by pressing and filtering, prohok retains the fermented fish flesh as a thick paste, giving it higher protein complexity and a more assertive fermented character.

The marriage of prohok with Vietnamese aromatics (lemongrass, which is native to Southeast Asia but more prominent in Vietnamese than Khmer cooking) likely occurred in the 19th century as the two communities' cuisines began overlapping in shared market spaces. Chinese settlers contributed the noodle format and the practice of topping soups with sliced roast meats.

Today, bún nước lèo is Sóc Trăng's official culinary identity — the dish the province claims in Vietnam's informal system of regional food representation, alongside phở (Hà Nội), bún bò (Huế), and hủ tiếu (Mỹ Tho/Sa Đéc).`,

  culturalContext: `Bún nước lèo's identity as a Khmer-Vietnamese dish is not an academic footnote — it is the dish's defining characteristic, visible in every component. The broth speaks Khmer (prohok + galangal + turmeric). The aromatics speak Vietnamese (lemongrass + fish sauce adjustments). The noodle and toppings speak Chinese-influenced Vietnamese (bún round vermicelli + heo quay roast pork). The herb platter speaks universally Mekong Delta (banana blossom + water spinach + bean sprouts).

In Sóc Trăng's morning markets, bún nước lèo stalls are operated by Khmer and Vietnamese vendors interchangeably — the dish has transcended ethnic ownership while retaining its Khmer soul. This is unusual in Vietnamese food culture, where most regional dishes are firmly "owned" by their community of origin. Bún nước lèo's shared ownership reflects Sóc Trăng's genuine cultural integration — a place where Khmer pagodas and Vietnamese đình temples sit within walking distance, where children grow up bilingual, and where food is the most natural medium of exchange.

The dish also represents the Mekong Delta's broader flavour philosophy: unafraid of fermentation, generous with herbs, democratic in its accessibility. A bowl costs 20,000-30,000 VND ($0.80-$1.20) at a street stall — the same as phở in Hà Nội — and serves as breakfast, lunch, or the morning-after-drinking recovery meal.

Bún nước lèo is served with an unusually extensive herb-and-vegetable platter, even by Mekong Delta standards. The banana blossom (bắp chuối) shredded into the bowl is not garnish — it is structural, providing the astringent tannin counterweight that prevents the rich, funky broth from becoming overwhelming. Without it, the soup is one-dimensional; with it, it is balanced.`,

  ingredients: [
    {
      group: "Prohok Broth — The Fermented Foundation",
      items: [
        { name: "Mắm bò hóc (prohok / Cambodian fermented fish paste)", amount: "150 g", note: "The soul ingredient — 3-6 month fermented mudfish, protein broken to free amino acids (glutamate 2,000-3,000mg/100g)" },
        { name: "Snakehead fish (cá lóc)", amount: "600 g whole", note: "Poached whole for flesh; bones and head reinforce broth with fresh inosinate to complement prohok's glutamate" },
        { name: "Pork bones (xương heo)", amount: "500 g", note: "Blanched — adds body gelatin and sweetness; bridges the Khmer fish base with Vietnamese pork-broth tradition" },
        { name: "Lemongrass (sả)", amount: "5 stalks", note: "Bruised and knotted — citral + geraniol aromatics mask prohok's raw ferment smell while preserving its umami" },
        { name: "Galangal (riềng)", amount: "1 piece ~50g", note: "Sliced — Khmer aromatic signature; contains 1,8-cineole (eucalyptus note) absent from ginger" },
        { name: "Fresh turmeric (nghệ tươi)", amount: "30 g", note: "Sliced — curcumin gives broth its characteristic golden-amber colour; anti-inflammatory synergy" },
        { name: "Shrimp paste (mắm ruốc)", amount: "1 tbsp", note: "Optional umami reinforcement — adds crustacean-derived nucleotides alongside fish-derived amino acids" },
        { name: "Tamarind pulp (me)", amount: "30 g dissolved in 100ml water", note: "Tartaric acid sourness — the Khmer sourness signature (vs Vietnamese lime = citric acid)" },
        { name: "Palm sugar (đường thốt nốt)", amount: "2 tbsp", note: "Khmer sweetener — terroir-specific caramel notes complement fermented fish better than cane sugar" },
        { name: "Fish sauce (nước mắm)", amount: "2-3 tbsp", note: "Vietnamese adjustment layer — fine-tunes salinity after prohok establishes the base" },
        { name: "Water", amount: "3 litres", note: "The dilution medium — prohok is far too intense undiluted" },
      ]
    },
    {
      group: "Proteins — The Three-Tradition Toppings",
      items: [
        { name: "Roast pork (heo quay)", amount: "300 g", note: "Chinese-influenced: crispy skin, five-spice flavour — buy pre-made or roast belly at 220°C" },
        { name: "Shrimp (tôm)", amount: "200 g", note: "Peeled, deveined — poached in broth 2 minutes for sweetness contrast" },
        { name: "Fish flesh (from poached cá lóc above)", amount: "From the 600g fish", note: "Flaked — the Khmer protein component, poached in its own broth" },
      ]
    },
    {
      group: "Noodles",
      items: [
        { name: "Fresh bún (round rice vermicelli)", amount: "600 g", note: "Medium thickness — blanched 15 seconds; bún's neutral starch absorbs broth without competing with prohok's intensity" },
      ]
    },
    {
      group: "The Extended Herb-Vegetable Platter",
      items: [
        { name: "Banana blossom (bắp chuối)", amount: "1 large", note: "Shredded fine, soaked in acidulated water — astringent tannins ESSENTIAL for balancing funky broth" },
        { name: "Water spinach (rau muống)", amount: "200 g", note: "Cut 5cm lengths, blanched — iron-rich, slightly mucilaginous, absorbs broth" },
        { name: "Bean sprouts (giá đỗ)", amount: "200 g", note: "Raw — crunch + thermal contrast" },
        { name: "Rau răm (Vietnamese coriander)", amount: "1 bunch", note: "Peppery-citrus — the fixed herb for fermented-fish dishes across Vietnam" },
        { name: "Húng quế (Thai basil)", amount: "1 bunch", note: "Anise-like — aromatic counterpoint to prohok's deep funk" },
        { name: "Hẹ (Chinese chives)", amount: "1 bunch, cut 3cm", note: "Allicin pungency — cuts richness" },
        { name: "Fresh chilies", amount: "3-4 sliced", note: "Capsaicin — individual heat calibration at table" },
        { name: "Lime wedges", amount: "4", note: "Citric acid — Vietnamese sourness layer on top of Khmer tamarind sourness in broth" },
      ]
    },
    {
      group: "Finishing",
      items: [
        { name: "Fried shallots (hành phi)", amount: "4 tbsp", note: "Maillard-caramelised allium — aromatic bridge between fresh herbs and fermented broth" },
        { name: "Garlic oil (tỏi phi)", amount: "3 tbsp", note: "Drizzled on surface — same lipid-layer aroma-trapping principle as hủ tiếu" },
      ]
    },
  ],

  instructions: [
    {
      step: 1,
      title: "Prohok Processing — Taming Fermentation",
      details: `Mắm bò hóc (prohok) straight from the jar is intensely pungent — a concentrated mass of fermented fish proteins that would overwhelm any broth if used directly. The processing step is about controlled dilution and aromatic masking.

Dissolve 150g prohok in 500ml of water, stirring to break up any solid chunks. Strain through a fine-mesh sieve, pressing the solids to extract maximum liquid. Discard the bones and hard residue — what passes through the sieve is the concentrated flavour extract: dissolved free amino acids (primarily glutamate and aspartate), salt, and fermentation byproducts including organic acids and amines.

The straining step is critical for texture: unfiltered prohok creates a gritty broth with visible fish bone fragments. The flavour is entirely in the liquid phase — the solids are depleted fibre and bone.

This dissolved prohok extract contains glutamate at concentrations of 2,000-3,000mg per 100g — roughly 10-15× the concentration in parmesan cheese, making it one of the most umami-dense ingredients in any cuisine. The challenge is not intensity but integration: how to deliver this umami without its raw fermented smell dominating the bowl. That integration is the job of Steps 2 and 3.`,
      tip: "Smell the raw prohok, then smell the strained liquid — the straining removes 30-40% of the volatile amines (the 'stinky' compounds) while retaining virtually all the umami. If the strained liquid still smells harsh, a second strain through cheesecloth helps."
    },
    {
      step: 2,
      title: "Bone Broth & Aromatic Base — The Bridge Between Traditions",
      details: `Blanch pork bones: cold water to boil, drain, rinse, scrub — the same clarity protocol as hủ tiếu (though bún nước lèo's broth will be opaque anyway, removing blood proteins prevents off-flavours).

In a clean stockpot, combine blanched pork bones with 3 litres of water. Bring to a gentle boil, then reduce to a simmer.

Now build the aromatic bridge. Bruise lemongrass stalks with the back of a knife (rupturing cell walls to release citral and geraniol) and tie each into a knot (the knot keeps fibrous strands from separating into the broth). Add to pot alongside sliced galangal and turmeric.

This aromatic trio — lemongrass, galangal, turmeric — is a Khmer-Southeast Asian signature combination, distinct from the Vietnamese aromatic trio (lemongrass, shallot, chili) and the Chinese trio (ginger, scallion, garlic). Each serves a specific chemical function:

LEMONGRASS: Citral (lemony aldehyde) masks prohok's trimethylamine (the "fishy" volatile). This is literal chemical masking — citral occupies the same olfactory receptors that trimethylamine targets, blocking perception of the fermented smell while allowing the umami taste to pass through unimpeded.

GALANGAL: 1,8-cineole provides a sharp, clean, almost medicinal note that "lifts" the heavy broth — perceptual lightness amid dense flavour.

TURMERIC: Curcumin contributes warm earthiness and golden colour. The colour is functional: it makes the opaque broth look appetising rather than murky. Without turmeric, prohok broth is grey-brown; with it, golden-amber.

Simmer for 30 minutes to extract aromatics before adding fish or prohok.`,
      tip: "Taste the bone-and-aromatic broth BEFORE adding prohok — it should taste like a fragrant, slightly sweet pork-lemongrass tea. This clean base is what allows the prohok to integrate rather than dominate."
    },
    {
      step: 3,
      title: "Prohok Integration & Fish Poaching — Building Umami Depth",
      details: `After 30 minutes of aromatic simmering, add the strained prohok extract. Stir well and bring back to a simmer. The broth will immediately turn opaque and golden-amber (from turmeric meeting dissolved fish proteins).

Add tamarind water. Tamarind provides tartaric acid — the Khmer sourness signature. Compare this to the Vietnamese sourness preference (lime = citric acid) and Central Vietnamese sourness (fermented shrimp paste acidity). Tartaric acid has a ROUNDER, more persistent sour profile than citric acid's SHARP, ephemeral bite. This roundness pairs better with the heavy umami of prohok — sharp citric acid would clash, which is why lime is served at the table for individual adjustment rather than cooked into the broth.

Add palm sugar (đường thốt nốt). The same Mekong Delta palm sugar discussed in the bánh tầm bì recipe — its terroir-specific caramel-butterscotch notes create a sweetness that feels like it belongs with fermented fish, whereas refined sugar tastes like a correction rather than an integration.

Add optional mắm ruốc (shrimp paste) for nucleotide reinforcement — the glutamate from prohok + nucleotides from shrimp paste triggers the umami synergy effect.

Now lower the whole cleaned snakehead fish into the simmering broth. Poach gently for 12-15 minutes (for a 600g fish). The fish serves dual duty: (1) its flesh becomes a topping, and (2) its bones and head leach fresh inosinate into the broth, complementing prohok's aged glutamate with a bright, fresh umami note.

Remove fish, flake flesh, discard bones. Taste broth and adjust with fish sauce for salinity.`,
      tip: "The finished broth should taste: FIRST umami-salt (prohok), THEN sour (tamarind), THEN sweet (palm sugar), THEN aromatic-warm (lemongrass-galangal-turmeric). If any layer is missing, adjust that component specifically — don't add more of everything."
    },
    {
      step: 4,
      title: "Protein Toppings — The Three-Tradition Assembly",
      details: `Each protein topping represents a different culinary tradition present in Sóc Trăng:

KHMER — FLAKED FISH: The cá lóc poached in Step 3, now flaked into large chunks. This fish was cooked IN the prohok broth, so it has absorbed the fermented umami directly into its flesh — it tastes more intensely of the broth's character than any other component.

CHINESE — ROAST PORK (HEO QUAY): If using pre-made heo quay from an Asian market, re-crisp the skin under a broiler for 2-3 minutes. Slice 5mm thick, including the crackling layer. The five-spice (ngũ vị hương) seasoning in heo quay — star anise, cloves, cinnamon, Sichuan pepper, fennel — provides aromatic complexity from the Chinese tradition, completely different from the Khmer-Vietnamese aromatics in the broth. This deliberate contrast between the Teochew-influenced topping and the Khmer broth is what makes each bite a cross-cultural conversation.

VIETNAMESE — POACHED SHRIMP: Drop shrimp into the simmering broth for 2 minutes. Shrimp's natural sweetness (from glycine and proline amino acids) provides the Vietnamese preference for sweetness-as-freshness atop the aged fermented base. The shrimp is the lightest, freshest element — the counter-narrative to prohok's depth.

Arrange all three proteins in separate sections within each bowl — they are not mixed, allowing the diner to experience each tradition independently or combine them freely.`,
      tip: "If making your own heo quay: score pork belly skin, rub with five-spice and salt, air-dry skin uncovered in fridge overnight, roast at 220°C skin-up for 40 minutes, then broil 5 minutes for crackling. The overnight drying is what makes skin shatter rather than chew."
    },
    {
      step: 5,
      title: "Noodle & Vegetable Preparation",
      details: `NOODLES: Blanch fresh bún in boiling water for 15-20 seconds — just enough to warm through and separate the strands. Fresh bún is already cooked during manufacturing (steamed rice batter extruded and cut), so this blanch is about temperature and separation, not cooking. Over-blanching turns bún mushy; it should retain a subtle resistance to the bite. Drain thoroughly — waterlogged noodles dilute the carefully calibrated broth.

BANANA BLOSSOM: Pull off the dark outer petals to reach the pale, tender inner core. Quarter lengthwise, then shred finely crosswise. Immediately submerge in water with 1 tbsp of lime juice or vinegar — the acid prevents enzymatic browning (polyphenol oxidase turning cut surfaces brown) and leaches some of the aggressive tannins, moderating astringency to a pleasant, palate-cleansing level.

Banana blossom is not optional in bún nước lèo. Its tannin astringency is the STRUCTURAL COUNTERWEIGHT to the broth's richness. Without it, the broth is cloying by the third spoonful; with it, the bowl stays balanced through to the last noodle.

WATER SPINACH: Blanch in boiling water for 30 seconds — enough to wilt stems while leaves stay bright green. Ice-bath immediately to set the chlorophyll colour and stop carryover cooking. Water spinach's slight mucilaginous quality helps it cling to noodles and absorb broth.

Arrange all vegetables and herbs on a shared platter.`,
      tip: "Shred banana blossom only when you're ready to serve — even in acidulated water, it loses crunch after 30 minutes. For the best texture, shred-and-soak while the broth finishes its final simmer."
    },
    {
      step: 6,
      title: "Bowl Assembly — Three Traditions in One Vessel",
      details: `Pre-heat bowls. Layer in order:

LAYER 1 — NOODLES: Place drained bún in the bowl. Create a slight well in the centre — this holds the proteins visually and functionally (prevents them from sliding to the edges).

LAYER 2 — VEGETABLES: Arrange blanched water spinach and a generous handful of shredded banana blossom on one side of the bowl.

LAYER 3 — PROTEINS: Place flaked fish, sliced heo quay, and poached shrimp in distinct sections around the bowl — the visual separation is traditional and intentional, showcasing each tradition's contribution.

LAYER 4 — BROTH: Ladle hot broth over everything, filling to 2cm below the rim. The broth's golden-amber colour, studded with suspended turmeric particles, should be the bowl's dominant visual statement.

LAYER 5 — FINISHING: Drizzle garlic oil over the surface (same lipid-layer aroma-trapping principle as hủ tiếu). Scatter fried shallots. Add a pinch of sliced chives.

TABLESIDE: Bean sprouts, fresh herbs (rau răm, húng quế), lime wedges, sliced chilies — arranged on the communal platter for individual customisation.

The eating strategy: first spoonful should be pure broth (to taste the prohok-lemongrass-tamarind base). Then combine noodles + fish + banana blossom in one chopstick lift to experience the Khmer elements. Then heo quay + herbs for the Chinese-Vietnamese elements. Finally, mix everything for the full convergence.`,
      tip: "Squeeze lime over individual spoonfuls, not into the whole bowl — citric acid (lime) on top of tartaric acid (tamarind already in broth) can shift the balance too far toward sour. Table-side lime is a per-bite adjustment, not a whole-bowl seasoning."
    },
  ],

  proTips: [
    {
      title: "Prohok vs Mắm Cá — Why They're Not Interchangeable",
      description: `Vietnamese mắm cá (fermented fish, including mắm cá linh and mắm cá sặc) and Cambodian prohok (mắm bò hóc) are often treated as interchangeable, but their fermentation chemistry differs significantly. Prohok uses higher salt ratios (25-30% vs mắm's 20-25%) and longer fermentation (3-6 months vs 1-3 months), producing higher free glutamate concentrations and a thicker, more paste-like consistency. Vietnamese mắm retains more intact protein fragments (peptides), giving it a "chewier" umami. Using mắm cá in place of prohok produces a lighter, less intensely funky broth — acceptable but fundamentally different, like using soy sauce where miso is called for.`
    },
    {
      title: "The Dual-Sourness Architecture — Tamarind + Lime",
      description: `Bún nước lèo uses TWO acids from different traditions, and they are not redundant. Tamarind's tartaric acid is COOKED INTO the broth — its roundness integrates with the prohok over 30+ minutes of simmering, becoming part of the base flavour. Lime's citric acid is added AT THE TABLE — its sharpness sits on top of the broth, not inside it. This dual-sourness creates depth: a persistent acid backbone (tamarind) with a bright, ephemeral acid top-note (lime). One without the other is flat. This regional acid-format map extends to the whole Mekong Delta: tamarind in cooked preparations (canh chua, bún nước lèo), lime at the table (nước chấm, garnish). The Delta inherited tamarind from Khmer cuisine and lime from Vietnamese — both survived.`
    },
    {
      title: "Banana Blossom — The Unsung Structural Engineer",
      description: `In most Vietnamese dishes outside the Delta, banana blossom is optional garnish. In bún nước lèo, it is LOAD-BEARING ARCHITECTURE. The tannin astringency in banana blossom (proanthocyanidins, the same compounds that make unripe fruit puckery) binds to proteins in the broth, reducing their perceived richness on the palate. Without this binding, prohok broth fatigues the taste receptors by the third spoonful — the umami becomes oppressive. With banana blossom, the tannins reset the palate between bites, allowing each spoonful to register as intensely as the first. This is the same principle behind red wine with steak: tannins bind to salivary proteins, "cleaning" the mouth of fat and protein residue.`
    },
    {
      title: "The Three-Tradition Topping as Cultural Statement",
      description: `The separate arrangement of Khmer fish, Chinese heo quay, and Vietnamese shrimp in the bowl is not aesthetic choice — it is cultural statement. Sóc Trăng's identity is built on the coexistence, not the merger, of its three communities. The proteins MEET in the broth (the shared medium, like the shared geography) but retain their distinct identities (flavour profiles, cooking methods, seasoning traditions). Mixing them in the bowl before eating is the diner's choice, not the cook's imposition. This parallel-but-connected arrangement mirrors Sóc Trăng's social reality: distinct communities sharing space, each contributing to a whole that none could produce alone.`
    },
    {
      title: "Sourcing Prohok Outside Southeast Asia",
      description: `Mắm bò hóc (prohok) is available in jars at Cambodian and Vietnamese grocery stores in most cities with Southeast Asian communities. Look for brands from Châu Đốc (An Giang Province) or imported Cambodian brands. If unavailable: the closest substitute is Vietnamese mắm cá sặc (fermented climbing perch) — same fish family, similar fermentation, but lighter intensity. Use 200g to approximate 150g prohok's umami. DO NOT substitute with shrimp paste (mắm ruốc), fish sauce (nước mắm), or soybean paste (tương) — each has fundamentally different amino acid profiles. If none of these fermented fish products are available, this is not the recipe to attempt — the prohok IS the dish.`
    },
  ],

  nutritionInfo: {
    calories: 520,
    protein: "40g",
    carbs: "55g",
    fat: "16g",
    fiber: "5g",
  },

  pairings: [
    { name: "Trà đá (Iced jasmine tea)", description: "Tannins in strong tea complement banana blossom's tannin palate-cleansing, extending the astringent reset between spoonfuls" },
    { name: "Rượu đế Sóc Trăng", description: "Local Delta rice spirit — its raw simplicity pairs with the broth's primal fermented character; sipped between bites to clear the palate entirely" },
    { name: "Nước dừa tươi (fresh coconut water)", description: "Mildly sweet, electrolyte-rich — the gentle pairing for those who find prohok broth intense; coconut's fat-free sweetness doesn't compound the broth's richness" },
  ],

  storageInstructions: `Broth: Refrigerate up to 4 days, freeze up to 2 months. The broth's flavour actually IMPROVES after 12-24 hours of refrigeration — fermentation aromatics mellow while umami persists, producing a rounder, less aggressive profile on reheating. This is one of the rare Vietnamese soups that tastes better the next day.

Proteins: Cook fresh for each serving. Pre-flaked fish dries out rapidly. Heo quay crackling loses its crackle within hours — re-crisp under a broiler for 2 minutes before serving leftovers.

Banana blossom: Must be shredded fresh — cannot be stored once cut, as oxidation and tannin leaching accelerate even in acidulated water. Buy whole blossoms and shred per-serving.

Noodles: Fresh bún should be used within 24 hours of purchase. Refrigeration hardens the starch (retrogradation); if storing overnight, blanch again for 10 seconds to re-gelatinise before serving.`,

  dietaryInfo: ["Dairy-Free", "Nut-Free"],

  companyInfo: {
    name: "FlavorNest Vietnam",
    logo: "/images/logo.png",
    url: "https://flavornest-vietnam.vercel.app",
  },

  canonicalUrl: "https://flavornest-vietnam.vercel.app/recipes/bun-nuoc-leo-soc-trang",
}

export default function BunNuocLeoSocTrangPage() {
  return <RecipeLayout recipe={recipeData} />
}
