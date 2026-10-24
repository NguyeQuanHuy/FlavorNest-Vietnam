'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Nem Chua Thanh Hóa — Thanh Hóa Fermented Pork Roll
//  Thanh Hóa #1
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. MYOFIBRILLAR PROTEIN ACID-SET GELATION —
//     LAB pH drop 6.5→4.2 drives myosin isoelectric
//     aggregation (pI 5.4), forming rigid gel network
//     WITHOUT HEAT — cold protein gelation via
//     electrostatic charge neutralization
//  2. BANANA LEAF MICROAEROBIC NICHE ENGINEERING —
//     leaf permeability O₂ transmission rate
//     50-200 cc/m²/day creates µ-aerobic environment
//     favoring LAB (facultative anaerobe) over
//     Pseudomonas/E. coli (obligate aerobe)
//  3. PORK SKIN COLLAGEN HYDROLYSATE BINDER —
//     cooked skin gelatin (bloom 80-150 g) as
//     cold-setting adhesive matrix between meat
//     particles, distinct from whole-skin bì texture
//  4. GARLIC ALLICIN → AJOENE ANTIMICROBIAL
//     HURDLE — allicin MIC 15-60 µg/mL against
//     Staphylococcus aureus, synergistic with
//     LAB-produced lactic acid pH barrier
//  5. CHILI-GALANGAL CAPSAICIN-ACA SENSORY
//     SCAFFOLDING — TRPV1 heat + TAS2R bitter
//     layered onto acid-umami base, hedonic
//     complexity via trigeminal recruitment
//  6. THANH HÓA FERMENTATION TERROIR —
//     regional LAB microbiome (Lb. plantarum,
//     Lb. brevis, P. pentosaceus endemic strains),
//     tropical 28-35°C = 48-72 hr fermentation
//     vs temperate 5-7 days, Hạc Thành origin
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'nem-chua-thanh-hoa',
  title: 'Nem Chua Thanh Hóa (Thanh Hóa Fermented Pork Roll)',
  subtitle: 'LAB lactic acid drives myosin to isoelectric point pI 5.4 triggering cold acid-set gelation without heat, banana leaf O₂ transmission rate 50-200 cc/m²/day engineers a microaerobic niche favoring facultative LAB over obligate aerobes, garlic allicin (MIC 15-60 µg/mL) synergizes with pH 4.2 as a dual antimicrobial hurdle, and pork skin gelatin (bloom 80-150 g) cold-sets as interparticle adhesive matrix.',
  category: 'APPETIZER',
  difficulty: 'Hard',
  totalTime: '3 days',
  rating: 4.9,
  baseServings: 20,
  heroImage: '/images/recipes/nem-chua-thanh-hoa.jpg',

  intro: `Nem chua Thanh Hóa is Vietnam's most INTELLECTUALLY SOPHISTICATED fermented food — a raw pork sausage that cures itself through LACTIC ACID BACTERIA fermentation, achieving food safety, textural transformation, and flavor development simultaneously through a process that is, at its core, a masterclass in COLD PROTEIN GELATION. No heat is applied at any point. The raw pork goes in pink, soft, and perishable; it emerges 48-72 hours later firm, tangy, and shelf-stable — transformed entirely by microbiology and protein chemistry operating at ambient tropical temperature.

The CENTRAL MECHANISM is MYOFIBRILLAR PROTEIN ACID-SET GELATION — a phenomenon that is fundamentally different from the heat-set gelation that occurs in cooking. When pork is ground or pounded, the MYOFIBRILLAR PROTEINS (primarily myosin, approximately 43% of total muscle protein, and actin, approximately 22%) are extracted from the muscle fiber into the surrounding aqueous phase, forming a viscous SOL. In conventional cooking, heating this sol above 55-65°C would cause the proteins to denature and aggregate into a HEAT-SET GEL (the mechanism behind chả lụa, meatballs, and all cooked sausages). In nem chua, something entirely different happens: LACTIC ACID BACTERIA (LAB) — primarily Lactobacillus plantarum, Lactobacillus brevis, and Pediococcus pentosaceus — ferment the sugars in the mixture, producing LACTIC ACID that gradually drops the pH from 6.5 (raw meat) to approximately 4.0-4.5 over 48-72 hours.

As the pH descends through 5.4 — the ISOELECTRIC POINT (pI) of myosin — something remarkable occurs. At its pI, myosin has ZERO NET ELECTRICAL CHARGE. The repulsive electrostatic forces that normally keep myosin molecules separated in solution disappear, and the molecules begin to AGGREGATE through hydrophobic interactions and hydrogen bonding. These aggregates grow into a three-dimensional GEL NETWORK that traps water, fat, and flavor compounds within its mesh — producing a firm, sliceable texture from raw meat without any application of heat. The gel strength depends on the RATE of pH decline: a gradual decline (0.02-0.05 pH units per hour, achieved by the natural LAB fermentation rate at 28-35°C) produces a FINE-STRANDED, ELASTIC gel with good water-holding capacity; a rapid decline (as would occur with direct acid addition) produces a COARSE, CRUMBLY gel that expels water — this is why nem chua made with vinegar instead of fermentation has an inferior, grainy texture. The LAB fermentation rate is therefore not just a food safety measure but a TEXTURAL ENGINEERING parameter.

The BANANA LEAF wrapping is not decorative — it is a precision MICROAEROBIC NICHE ENGINEERING system. Fresh banana leaf (Musa spp.) has an OXYGEN TRANSMISSION RATE (OTR) of approximately 50-200 cc/m²/day — far lower than paper or cloth but far higher than plastic wrap (1-5 cc/m²/day). This intermediate OTR creates a MICROAEROBIC environment inside the leaf wrapper: enough oxygen for the FACULTATIVE ANAEROBIC LAB (which can metabolize either aerobically or anaerobically) to thrive, but too little for OBLIGATE AEROBIC spoilage bacteria (Pseudomonas, Acinetobacter) and pathogens (E. coli, Salmonella) to compete effectively. The banana leaf also contributes POLYPHENOLIC COMPOUNDS from its waxy surface layer — primarily catechins and epicatechins — that provide additional ANTIOXIDANT protection against lipid oxidation in the raw pork fat. The leaf's inner surface is naturally hydrophobic (contact angle > 90°), preventing the nem chua from sticking and facilitating clean unwrapping. Traditional nem chua makers select YOUNG, FLEXIBLE leaves (lower lignin content, higher OTR) for the inner layer and OLDER, TOUGHER leaves (higher lignin, lower OTR) for the outer layer — creating an OTR GRADIENT that fine-tunes the oxygen environment: slightly more aerobic near the meat surface (supporting LAB colonization) and more anaerobic further out (preventing mold growth on the leaf surface).

PORK SKIN serves as a COLLAGEN HYDROLYSATE BINDER — functionally different from the whole-skin bì texture in cơm tấm. In nem chua, the pork skin is BOILED until fully tender (30-45 minutes at 95-100°C), then GROUND or finely sliced while still warm. At this stage, 50-70% of the skin's collagen has been converted to GELATIN — soluble, denatured collagen chains with a bloom strength of approximately 80-150 g. When this warm gelatin-rich skin is mixed into the raw pork mixture, the gelatin is in its SOL state (liquid above 35°C). As the mixture cools to ambient temperature (28-35°C in tropical Thanh Hóa — conveniently near gelatin's sol-gel transition of 25-35°C), the gelatin SETS into a weak gel that acts as an ADHESIVE MATRIX between the raw meat particles. This gelatin matrix performs two functions: (1) it physically BONDS the meat particles together, providing initial structural integrity before the LAB fermentation produces enough acid for myosin gelation; and (2) it TRAPS WATER at the particle interfaces, maintaining the moist, succulent texture even as the lactic acid gel contracts and expresses some water during fermentation.

GARLIC in nem chua is not merely a flavoring — it is an ANTIMICROBIAL HURDLE that synergizes with the lactic acid pH barrier. Raw garlic contains ALLIIN, which when crushed is converted by alliinase to ALLICIN (diallyl thiosulfinate). Allicin has a MINIMUM INHIBITORY CONCENTRATION (MIC) of 15-60 µg/mL against Staphylococcus aureus, Listeria monocytogenes, and other Gram-positive pathogens — concentrations easily achieved by the garlic levels used in nem chua (3-5% of total weight). Over the 48-72 hour fermentation, allicin thermally degrades to AJOENE and VINYL DITHIINS — compounds with lower antimicrobial potency but still significant activity at the concentrations present. The garlic-acid combination creates a DUAL HURDLE: pathogens must simultaneously resist both the low pH environment (pH 4.0-4.5, below the growth minimum for most foodborne pathogens) AND the allicin/ajoene antimicrobial compounds. Each hurdle alone might be insufficient, but together they create a SYNERGISTIC barrier that is greater than the sum of its parts — this is the HURDLE TECHNOLOGY principle formalized by Leistner (1995), but practiced empirically in Thanh Hóa for centuries.

CHILI and occasionally GALANGAL are added to nem chua not just for flavor but for SENSORY SCAFFOLDING — building a multi-dimensional taste experience on top of the acid-umami base. Chili's CAPSAICIN activates TRPV1 thermoreceptors (the "heat" channel), adding a trigeminal BURN sensation that is perceived on a completely different neural pathway from the gustatory acid-umami. This trigeminal recruitment transforms nem chua from a two-dimensional taste (sour + umami) into a three-dimensional SENSORY EXPERIENCE (sour + umami + heat). The galangal, when used, contributes 1'-ACETOXYCHAVICOL ACETATE (ACA) — a compound that activates TAS2R bitter receptors at sub-threshold concentrations, adding a barely perceptible BITTER UNDERTONE that increases the perceived complexity of the overall flavor without being consciously identified as bitterness. This technique — using bitter compounds below conscious detection threshold to increase hedonic complexity — is the same principle used by bartenders who add a dash of bitters to cocktails.

Thanh Hóa's nem chua tradition is rooted in the province's unique position as the SOUTHERNMOST outpost of ancient Vietnamese civilization — the Lam Sơn dynasty's heartland, where fermented food traditions brought from the Red River Delta encountered the warmer climate of north-central Vietnam. The higher AMBIENT TEMPERATURE (annual mean 23-24°C, with summer months averaging 28-35°C) accelerates LAB fermentation dramatically compared to Hanoi (annual mean 23°C): nem chua in Thanh Hóa ferments in 48-72 hours versus 4-5 days in Hanoi's cooler climate. This faster fermentation, driven by the ARRHENIUS EQUATION (reaction rate approximately doubles for every 10°C increase), produces a characteristically TANGIER, MORE ASSERTIVE flavor profile — the LAB produce more lactic acid in less time, driving the pH lower and generating more fermentation byproducts (diacetyl, acetaldehyde, acetic acid) that contribute to the complex, slightly aggressive sourness that distinguishes Thanh Hóa nem chua from the milder, more delicate versions made in Hanoi or Saigon. The regional LAB MICROBIOME — the endemic strains of Lb. plantarum and P. pentosaceus that have co-evolved with Thanh Hóa's nem chua tradition over centuries — contributes additional terroir specificity: these strains produce slightly different ratios of lactic acid to acetic acid, and different quantities of exopolysaccharides (EPS) that affect texture, compared to LAB strains from other regions.`,

  ingredientSections: [
    {
      title: 'Meat Component — Myofibrillar Protein Sol',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'lean pork (thịt nạc heo), from leg or shoulder',
          note: 'Must be VERY FRESH (slaughtered within 4-6 hours for optimal myofibrillar protein extractability — pre-rigor or early post-rigor meat has higher myosin solubility). Use lean cuts — excess fat interferes with the myosin acid-set gel network.',
        },
        {
          amount: 200,
          unit: 'g',
          name: 'pork skin (bì heo), boiled and finely sliced or ground',
          note: 'Boil 30-45 min until fully tender. The extracted gelatin (bloom 80-150 g) acts as cold-setting adhesive matrix between meat particles. Process while WARM — gelatin sets below 35°C.',
        },
      ],
    },
    {
      title: 'Fermentation & Curing Agents',
      items: [
        {
          amount: 50,
          unit: 'g',
          name: 'cane sugar or cooked sticky rice (xôi)',
          note: 'FERMENTATION SUBSTRATE for LAB. Sugar provides immediately available glucose/fructose; cooked sticky rice provides slowly-released glucose from amylase digestion of gelatinized starch — the rice option produces a more gradual, controlled pH decline.',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'fish sauce (nước mắm)',
          note: 'Provides free amino acids + salt. The amino acids (glutamate, aspartate) contribute umami depth during fermentation.',
        },
        {
          amount: 1.5,
          unit: 'tsp',
          name: 'salt',
          note: 'At 2-3% concentration, salt selectively inhibits Gram-negative spoilage bacteria while LAB (salt-tolerant to 6-8%) thrive — another hurdle in the antimicrobial system.',
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'ground black pepper',
        },
      ],
    },
    {
      title: 'Antimicrobial & Sensory Scaffolding',
      items: [
        {
          amount: 10,
          unit: 'clove',
          name: 'garlic, thinly sliced',
          note: 'DUAL FUNCTION: antimicrobial hurdle (allicin MIC 15-60 µg/mL vs S. aureus) AND flavor. Slice rather than crush to moderate allicin release — crushed garlic delivers a burst of allicin that can overwhelm the delicate fermentation aromatics.',
        },
        {
          amount: 10,
          unit: 'unit',
          name: 'fresh bird\'s eye chilies (ớt hiểm), halved',
          note: 'Capsaicin TRPV1 trigeminal activation adds the "heat" dimension to the sour-umami base. Placed INSIDE each roll for direct contact.',
        },
        {
          amount: 20,
          unit: 'leaf',
          name: 'guava leaves or fig leaves (lá ổi/lá sung)',
          note: 'Tannin-rich leaves placed inside the roll. Polyphenol tannins provide additional antimicrobial activity AND contribute astringency that balances the acid.',
        },
      ],
    },
    {
      title: 'Wrapping — Microaerobic Niche System',
      items: [
        {
          amount: 20,
          unit: 'sheet',
          name: 'banana leaves (lá chuối), washed and briefly wilted over flame',
          note: 'O₂ transmission rate 50-200 cc/m²/day creates the MICROAEROBIC environment essential for LAB dominance over obligate aerobic spoilage bacteria. Wilt briefly over flame to increase flexibility without destroying the waxy polyphenol layer.',
        },
        {
          amount: 40,
          unit: 'piece',
          name: 'thin strips for tying, or kitchen twine',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Pound the meat — myofibrillar protein extraction, 20 minutes',
      description: `This step is the FOUNDATION of nem chua's texture — the goal is to EXTRACT myofibrillar proteins (myosin and actin) from the muscle fibers into the surrounding aqueous phase, creating a viscous protein SOL that will later gel when the pH drops.

CUT the lean pork into chunks. Using a heavy mortar and pestle (cối giã — the traditional tool) or a food processor, POUND or process the meat until it forms a SMOOTH, STICKY, PASTE-LIKE mass. The pounding serves two purposes: (1) it physically RUPTURES the muscle cell membranes (sarcolemma), releasing the myofibrillar proteins from their intracellular confinement; and (2) it creates MECHANICAL SHEAR that partially unfolds the myosin molecules, increasing their surface hydrophobicity and making them more reactive for subsequent acid-induced aggregation.

The paste should be TACKY — when you press a piece between your fingers and pull apart, it should stretch slightly and leave sticky residue. This tackiness indicates that sufficient myosin has been extracted into solution. If the paste is still crumbly or grainy, continue pounding — insufficient extraction will produce a weak, crumbly gel after fermentation.

ADD fish sauce, salt, sugar (or crumbled cooked sticky rice), and ground black pepper to the paste. KNEAD vigorously for 5 minutes, slamming the mass against the bowl or counter (the traditional "đập" technique). This kneading further extracts and aligns the myosin molecules, and distributes the salt and sugar evenly. Salt at 2-3% concentration also increases myosin SOLUBILITY (salting-in effect at low ionic strength), drawing even more protein into solution.

MIX IN the finely sliced or ground cooked pork skin while it is still WARM (above 35°C). The gelatin in the skin is in its sol state and distributes evenly through the meat paste, filling the spaces between meat particles. As the mixture cools, this gelatin will set and provide initial structural binding.`,
      tip: `COLD ACID-SET GELATION — THE PHYSICS OF CURING WITHOUT HEAT: The transformation of raw pork paste into firm, sliceable nem chua is one of the most elegant examples of PROTEIN GELATION in food science. In heat-set gelation (cooking), thermal energy unfolds the native protein structure, exposing hydrophobic regions that aggregate into a gel network. In nem chua's ACID-SET GELATION, the mechanism is entirely different: the protein structure remains largely NATIVE (folded), but the surface electrical charge changes. At pH 6.5 (raw meat), myosin molecules carry a NET NEGATIVE CHARGE (they have more deprotonated carboxyl groups than protonated amino groups at this pH). These negative charges create ELECTROSTATIC REPULSION between molecules, keeping them dispersed in solution. As LAB produce lactic acid and the pH drops toward 5.4 (myosin's isoelectric point), the carboxyl groups progressively protonate (–COO⁻ → –COOH), reducing the net charge toward zero. At zero net charge, the repulsive electrostatic barrier vanishes, and the molecules aggregate through HYDROPHOBIC INTERACTIONS (the strongest non-covalent force in aqueous systems) and HYDROGEN BONDS. The resulting gel has a different microstructure than a heat-set gel: finer strands (5-20 nm diameter vs 20-100 nm for heat-set), more elastic (higher strain-at-break), and better water-holding capacity — which is why nem chua has a distinctly different, more SPRINGY texture than cooked sausages.`,
    },
    {
      title: 'Wrap — banana leaf microaerobic engineering, 30 minutes',
      description: `PREPARE banana leaves: Wash thoroughly, then WILT each leaf by passing it briefly over a gas flame or dipping in boiling water for 3-5 seconds. This heat treatment makes the leaf FLEXIBLE (preventing cracking during wrapping) while preserving the waxy POLYPHENOL layer on the inner surface. Cut into rectangles approximately 15 × 20 cm.

ASSEMBLY of each roll: Place a banana leaf rectangle on the work surface, waxy (shiny) side UP. Place approximately 50 g of the meat-skin paste in the center. Shape into a cylinder approximately 8 cm long and 2.5 cm in diameter.

TUCK 1-2 slices of garlic, half a bird's eye chili, and 1 guava or fig leaf AGAINST the meat surface before rolling. These aromatics and antimicrobials must be in DIRECT CONTACT with the meat — the garlic's allicin needs to diffuse into the meat surface, and the guava leaf tannins need to contact potential surface bacteria.

ROLL the banana leaf tightly around the meat cylinder, tucking the ends in like a spring roll. The roll should be SNUG but not so tight that it compresses the meat (compression would expel air pockets that help buffer pH changes during fermentation). Tie with banana leaf strips or twine at both ends.

WRAP each roll in a SECOND banana leaf layer. This double wrapping serves the OTR gradient engineering: the inner leaf (in contact with meat) has slightly higher oxygen permeability (meat moisture keeps the leaf hydrated and permeable), while the outer leaf (exposed to ambient air) is drier and less permeable — creating the oxygen gradient that favors LAB colonization at the meat surface while inhibiting mold on the outer leaf.

BUNDLE 5-10 wrapped rolls together with an outer binding. This clustering creates additional THERMAL INSULATION — the fermentation is exothermic (LAB metabolism generates heat), and the bundled rolls maintain a temperature 1-3°C above ambient, accelerating the fermentation within the cluster.`,
      tip: `BANANA LEAF MICROAEROBIC NICHE — WHY PLASTIC DOESN'T WORK THE SAME: Modern nem chua producers sometimes substitute plastic wrap for banana leaves, and the result is measurably different. Plastic wrap (LDPE) has an OTR of only 1-5 cc/m²/day — 10-100× lower than banana leaf. This creates a nearly ANAEROBIC environment that favors HETEROFERMENTATIVE LAB (which produce CO₂, ethanol, and acetic acid alongside lactic acid) over HOMOFERMENTATIVE LAB (which produce only lactic acid). The result is nem chua with more ACETIC ACID (vinegary note), more CO₂ gas buildup (puffy, bloated rolls), and a different, less clean sourness compared to banana-leaf-wrapped nem chua. Banana leaf's intermediate OTR supports the dominance of HOMOFERMENTATIVE Lb. plantarum — the species that produces the cleanest, purest lactic acid fermentation with minimal byproducts. The banana leaf also contributes PHENOLIC COMPOUNDS (catechins, epicatechins from the waxy layer) that act as antioxidants, preventing lipid oxidation in the raw pork fat — plastic wrap offers no such protection, which is why plastic-wrapped nem chua sometimes develops a slightly rancid off-flavor that banana-leaf-wrapped nem chua never does.`,
    },
    {
      title: 'Ferment — LAB transformation at tropical ambient, 48-72 hours',
      description: `PLACE the bundled nem chua rolls in a warm location (28-35°C is optimal for Thanh Hóa's endemic LAB strains). In tropical Vietnam, ambient room temperature is sufficient. In cooler climates, a warm cabinet, the top of a refrigerator, or a proofing box set to 30°C can be used.

DO NOT REFRIGERATE during fermentation — temperatures below 20°C dramatically slow LAB metabolism (the Arrhenius equation predicts a 50-75% rate reduction for every 10°C drop), potentially allowing spoilage bacteria to outcompete the LAB before sufficient acid is produced.

FERMENTATION TIMELINE at 30-35°C:
- HOURS 0-12: LAG PHASE — LAB adapt to the meat environment. pH remains near 6.5. The meat is still raw and soft. The garlic allicin and salt provide the primary antimicrobial protection during this vulnerable period.
- HOURS 12-24: LOG PHASE — LAB begin rapid exponential growth. pH drops from 6.5 to approximately 5.5. The meat begins to FIRM slightly as it passes through myosin's pI (5.4) — the acid-set gelation has begun.
- HOURS 24-48: STATIONARY PHASE — LAB population stabilizes. pH drops from 5.5 to 4.0-4.5. The meat is now FULLY GELLED — firm, sliceable, with a distinctly tangy aroma. The color has shifted from raw pink to a cured ROSY PINK (lactic acid reacts with myoglobin to form acidomyoglobin, which has a stable pink color at low pH).
- HOURS 48-72: MATURATION — pH stabilizes. Flavor compounds (diacetyl, acetaldehyde, free amino acids from proteolysis) develop and deepen. The texture reaches maximum firmness.

TEST for doneness at 48 hours: Unwrap one roll. The meat should be FIRM (can be sliced cleanly with a knife without crumbling), TANGY (distinctly sour aroma and taste), and PINK (not gray or brown). If still soft or not sour enough, rewrap and ferment another 12-24 hours.

ONCE FERMENTED, transfer to the refrigerator (4-8°C). Cold storage halts LAB activity and stabilizes the product. Nem chua keeps 1-2 weeks refrigerated; the sourness will continue to increase very slowly even at refrigerator temperature.`,
      tip: `THE HURDLE TECHNOLOGY SYSTEM — WHY NEM CHUA IS SAFE: Raw fermented pork sounds dangerous, and it would be — without the MULTI-HURDLE antimicrobial system that makes nem chua one of the safest fermented foods when made correctly. The safety depends on FIVE simultaneous hurdles, each insufficient alone but synergistically effective together: (1) SALT at 2-3% — inhibits Gram-negative bacteria (E. coli, Salmonella growth minimum requires < 4% NaCl, but their metabolic rate is significantly reduced above 2%). (2) LOW pH from LAB lactic acid — below pH 4.5, virtually all foodborne pathogens cease growth (S. aureus minimum pH 4.0, Salmonella minimum pH 3.8, E. coli minimum pH 4.0). (3) ALLICIN from garlic — direct membrane damage to Gram-positive pathogens at 15-60 µg/mL. (4) COMPETITIVE EXCLUSION by LAB — the dominant LAB population physically outcompetes pathogens for nutrients and binding sites on the meat surface. (5) MICROAEROBIC ENVIRONMENT from banana leaf — selectively suppresses obligate aerobic spoilage organisms. Leistner's hurdle technology principle states that each hurdle reduces the pathogen population by 1-3 log cycles; five hurdles operating simultaneously can achieve a 5-15 log cycle reduction — equivalent to commercial pasteurization. This is why properly made nem chua, despite containing RAW pork, has an excellent food safety record spanning centuries of production.`,
    },
  ],
};

export default function NemChuaThanhHoaPage() {
  return <RecipeLayout recipe={recipe} />;
}
