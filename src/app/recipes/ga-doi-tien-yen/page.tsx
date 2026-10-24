'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Gà Đồi Tiên Yên — Tiên Yên Free-Range Hill Chicken
//  Quảng Ninh #3
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. SLOW-TWITCH FIBER TYPE I DOMINANCE —
//     free-range hill chickens forage 8-12 hours/day
//     covering 2-5 km on hilly terrain → chronic
//     endurance exercise shifts muscle fiber composition
//     from Type IIB fast-twitch glycolytic (white,
//     tender, low flavor) toward Type I slow-twitch
//     oxidative (red, firm, high flavor). Type I fibers
//     have 3-5× MORE MYOGLOBIN (iron-containing O₂
//     carrier, MW 17 kDa), 2-3× MORE MITOCHONDRIA
//     (containing flavor-active phospholipids and
//     iron-sulfur clusters), and 5-10× MORE CAPILLARY
//     DENSITY. The higher myoglobin concentration creates
//     the deep YELLOW-RED color of hill chicken meat,
//     and the mitochondrial phospholipids contribute
//     the complex, "chickeny" aroma through oxidative
//     degradation during cooking
//  2. SUBCUTANEOUS FAT RENDERING — THIN SKIN
//     ARCHITECTURE — hill chickens develop a THIN,
//     TIGHT skin with minimal subcutaneous fat (1-2 mm
//     vs 3-8 mm in broilers) because constant movement
//     burns fat reserves. The thin fat layer renders
//     COMPLETELY during roasting/grilling at 160-180°C,
//     creating a self-basting effect that keeps the
//     meat moist while the skin crisps. Broiler chicken
//     skin retains unrendered fat → flabby texture
//  3. COLLAGEN CROSS-LINKING MATURATION —
//     hill chickens are typically 6-12 months old at
//     slaughter (vs 5-7 weeks for broilers). The 5-10×
//     LONGER LIFESPAN allows collagen (Type I and III)
//     to accumulate AGE-DEPENDENT CROSS-LINKS:
//     enzymatic (lysyl oxidase-mediated pyridinoline
//     and deoxypyridinoline) + non-enzymatic (glycation-
//     derived pentosidine and glucosepane). These
//     MATURE cross-links have higher thermal stability
//     (Td increases from 65°C in young collagen to
//     72-75°C in mature collagen) → the meat requires
//     HIGHER temperature or LONGER time to become
//     tender, but rewards patience with DEEPER FLAVOR
//     from collagen hydrolysis products
//  4. INOSINE MONOPHOSPHATE (IMP) ACCUMULATION
//     FROM EXERCISE METABOLISM — chronic exercise
//     increases AMP deaminase activity, which converts
//     AMP → IMP during post-mortem ATP degradation:
//     ATP → ADP → AMP → IMP. Free-range chickens have
//     30-80% HIGHER IMP concentration than caged birds
//     (300-400 mg/100g vs 180-250 mg/100g). IMP
//     synergizes with glutamate (from fish sauce) to
//     produce UMAMI perception 8× greater than either
//     alone (Yamaguchi synergy, distinct application
//     from Hủ Tiếu context)
//  5. CAROTENOID-YELLOW SKIN PIGMENTATION —
//     hill chickens forage on xanthophyll-rich insects,
//     grasses, and corn → accumulate lutein and
//     zeaxanthin in skin and subcutaneous fat →
//     distinctive GOLDEN-YELLOW skin color. The
//     carotenoids are deposited in lipid droplets within
//     dermal adipocytes, and their concentration
//     correlates with FORAGING INTENSITY — yellower
//     skin = more foraging = more exercise = better
//     meat quality. Vietnamese consumers use skin color
//     as a PROXY INDICATOR for meat quality
//  6. TIÊN YÊN LIMESTONE KARST FORAGING ECOLOGY —
//     Tiên Yên district's karst landscape provides
//     calcium-rich soil → high-calcium insects and
//     plants → stronger bones and firmer muscle
//     attachment points. The hilly terrain (200-500m
//     elevation) forces chickens to navigate slopes,
//     developing SPECIFICALLY the thigh and drumstick
//     muscles that are the most valued cuts
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'ga-doi-tien-yen',
  title: 'Gà Đồi Tiên Yên (Tiên Yên Free-Range Hill Chicken)',
  subtitle: 'Slow-twitch Type I fiber dominance from hill foraging yields 3-5× myoglobin and 30-80% higher IMP, mature collagen cross-links (pyridinoline + pentosidine) raise Td to 72-75°C requiring patient cooking, while complete subcutaneous fat rendering creates self-basting crispy-skin architecture.',
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 15 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/ga-doi-tien-yen.jpg',

  intro: `Gà Đồi Tiên Yên — Tiên Yên Free-Range Hill Chicken — is one of those dishes where the INGREDIENT does all the work and the cook's job is to NOT RUIN IT. The chickens of Tiên Yên district, raised on the limestone karst hills of northeast Quảng Ninh, produce meat so fundamentally different from commercial broiler chicken that they might as well be different animals. The differences are not marketing claims — they are MEASURABLE, QUANTIFIABLE consequences of exercise physiology, maturation biology, and foraging ecology.

The FOUNDATIONAL MECHANISM is SLOW-TWITCH FIBER TYPE I DOMINANCE induced by chronic endurance exercise. Chickens raised on Tiên Yên's hills forage for 8-12 hours per day, covering 2-5 km over hilly terrain. This sustained, moderate-intensity activity triggers a FIBER TYPE SHIFT in skeletal muscle: the proportion of Type I slow-twitch oxidative fibers increases at the expense of Type IIB fast-twitch glycolytic fibers. Commercial broilers, which are confined and barely walk, have muscle dominated by Type IIB fibers — white, fast-contracting, glycogen-fueled fibers designed for explosive movements (wing flapping during predator escape). Hill chickens develop more Type I fibers — red, slow-contracting, fat-fueled fibers designed for sustained locomotion.

The consequences for MEAT QUALITY are profound and interconnected. Type I fibers contain 3-5× MORE MYOGLOBIN — the iron-containing, oxygen-binding protein (MW 17 kDa) responsible for the RED COLOR of muscle. The myoglobin serves as an intracellular oxygen reservoir, ensuring that the slow-twitch fibers have continuous oxygen supply for aerobic ATP production during extended foraging. In the cooked meat, myoglobin's iron (Fe²⁺) participates in FENTON CHEMISTRY and lipid oxidation catalysis, generating volatile aldehydes and ketones that constitute the complex, "chickeny" AROMA that broiler chicken almost entirely lacks. Type I fibers also contain 2-3× MORE MITOCHONDRIA — the organelles that house the electron transport chain and citric acid cycle. Mitochondrial membranes are rich in PHOSPHOLIPIDS (phosphatidylcholine, phosphatidylethanolamine, cardiolipin) containing polyunsaturated fatty acids (PUFA, especially arachidonic acid C20:4ω-6 and DHA C22:6ω-3) that are EXTREMELY susceptible to oxidative degradation during cooking. This oxidation produces volatile compounds — hexanal, nonanal, 2-decenal, 2,4-decadienal — that are the PRIMARY CONTRIBUTORS to cooked chicken flavor. Broiler chicken, with fewer mitochondria and less PUFA-rich phospholipid, produces a BLAND, GENERIC flavor that consumers have come to accept as "normal" chicken.

SUBCUTANEOUS FAT RENDERING follows a fundamentally different pathway in hill chicken versus broiler. Broiler chickens, sedentary and overfed, deposit 3-8 mm of subcutaneous fat beneath the skin — a thick layer that DOES NOT FULLY RENDER during typical roasting times. The unrendered fat creates a FLABBY, GREASY skin texture and contributes a "fatty" mouthfeel that masks the lean meat flavor beneath. Hill chickens, constantly burning calories through locomotion, maintain only 1-2 mm of subcutaneous fat. This thin layer renders COMPLETELY at roasting temperatures (160-180°C) within the first 15-20 minutes of cooking. The rendering serves a dual function: (1) the released liquid fat BASTES the meat from within, maintaining moisture in the lean, low-fat muscle (intramuscular fat in hill chicken is 2-4%, versus 5-12% in broiler); (2) the defatted skin, now a thin protein-lipid composite, CRISPS through Maillard browning and dehydration, achieving the coveted "da giòn" — crispy skin that SHATTERS when bitten. The self-basting mechanism is critical because hill chicken meat, being lean and rich in slow-twitch fibers with high connective tissue content, would otherwise DRY OUT during cooking.

COLLAGEN CROSS-LINKING MATURATION is perhaps the most underappreciated factor in hill chicken quality. Commercial broilers reach slaughter weight in 5-7 WEEKS — their collagen is essentially juvenile, with primarily enzymatic cross-links (immature divalent cross-links: dehydro-DHLNL and dehydro-HLNL) that denature readily at 65-68°C. Hill chickens are raised for 6-12 MONTHS, during which the collagen undergoes MATURATION — the immature divalent cross-links are progressively replaced by mature TRIVALENT cross-links through two pathways: (1) ENZYMATIC: lysyl oxidase-mediated formation of pyridinoline (Pyr) and deoxypyridinoline (d-Pyr) cross-links from condensation of three lysine or hydroxylysine-derived aldehydes; (2) NON-ENZYMATIC: glycation (Maillard-type) reactions where glucose attaches to collagen lysine residues, eventually forming advanced glycation end-products (AGEs) including pentosidine (a fluorescent cross-link from lysine + arginine + pentose) and glucosepane (the most abundant AGE cross-link in aged tissues). These mature cross-links raise the DENATURATION TEMPERATURE (Td) from 65°C (juvenile collagen) to 72-75°C (mature collagen) — meaning the meat must reach a HIGHER internal temperature for the collagen to convert to gelatin and the meat to become tender. Quick, high-heat cooking of hill chicken results in TOUGH, CHEWY meat because the collagen hasn't had time or temperature to denature. Low-and-slow cooking at 75-85°C for 45-60 minutes REWARDS patience with gelatin-rich, succulent meat that carries the deep, complex flavors extracted from the mature collagen matrix.

INOSINE MONOPHOSPHATE (IMP) is the dominant umami nucleotide in chicken meat, and its concentration is DIRECTLY LINKED to exercise history. During life, muscle maintains a pool of adenine nucleotides (ATP, ADP, AMP) that fuel contraction. Chronic exercise UPREGULATES the enzyme AMP deaminase, which catalyzes the deamination of AMP to IMP (AMP + H₂O → IMP + NH₃). After slaughter, the ATP degradation pathway proceeds: ATP → ADP → AMP → IMP → inosine → hypoxanthine. In free-range chickens, the higher AMP deaminase activity means that the AMP → IMP conversion is faster and more complete, resulting in 30-80% HIGHER peak IMP concentrations (300-400 mg/100g in free-range vs 180-250 mg/100g in caged birds). IMP is a potent umami compound that SYNERGIZES with glutamate through the Yamaguchi mechanism — when IMP binds to the T1R1/T1R3 umami receptor simultaneously with glutamate, the receptor's affinity for glutamate increases dramatically, producing an umami perception up to 8× greater than the sum of each compound alone. This is why hill chicken meat dipped in fish sauce (glutamate source) produces an EXPLOSIVE umami sensation — the high endogenous IMP in the meat synergizes with the exogenous glutamate from the sauce.

CAROTENOID-YELLOW SKIN is the Vietnamese consumer's most trusted VISUAL PROXY for meat quality. Hill chickens foraging on insects (high in lutein), grasses (zeaxanthin), and corn (lutein + zeaxanthin) accumulate these xanthophyll carotenoids in the lipid droplets of dermal adipocytes. The carotenoid concentration correlates directly with foraging intensity — more foraging means more dietary carotenoid intake, which means YELLOWER skin and fat. Since foraging intensity also correlates with all the quality markers above (more exercise → more Type I fibers → more myoglobin → more IMP → leaner → firmer), skin color functions as a remarkably ACCURATE quality indicator. Vietnamese market buyers squeeze the chicken thigh, check skin color, and feel the firmness of the breast — they are unconsciously performing a multi-parameter quality assessment that correlates with the biochemical markers described above.

TIÊN YÊN's limestone karst terrain at 200-500m elevation creates the ideal FORAGING ECOSYSTEM for quality chicken. The calcium-rich karst soil supports calcium-accumulating plants and calcium-rich insect populations, which contribute to stronger bones and firmer muscle attachment points in the chickens — the periosteal collagen at the bone-tendon-muscle junction is denser and more mineralized, providing a firmer "grip" that consumers perceive as better texture when eating bone-in pieces. The hilly terrain specifically develops the THIGH and DRUMSTICK muscles — the hip extensors (iliotibialis, femorotibialis) and ankle extensors (gastrocnemius) that power uphill locomotion — which happen to be the most valued cuts in Vietnamese cuisine. The altitude also provides cooler nights (15-20°C vs 25-30°C in lowland farms), which reduces HEAT STRESS — chronic heat stress in lowland chickens triggers corticosterone release that promotes protein catabolism and off-flavor generation through stress-induced lipid oxidation.`,

  ingredientSections: [
    {
      title: 'Chicken — Type I Fiber Dominance System',
      items: [
        {
          amount: 1,
          unit: 'unit',
          name: 'whole Tiên Yên hill chicken (gà đồi), 1.2-1.5 kg',
          note: 'Look for GOLDEN-YELLOW skin (carotenoid pigmentation from foraging), FIRM thigh muscles (Type I fiber dominance), and small body size (slow growth rate = mature collagen). 6-12 months old preferred.',
        },
      ],
    },
    {
      title: 'Marinade & Aromatics',
      items: [
        {
          amount: 2,
          unit: 'tbsp',
          name: 'honey',
          note: 'Reducing sugars (fructose + glucose from inverted honey) for Maillard browning on the thin subcutaneous fat-rendered skin.',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'fish sauce',
          note: 'Glutamate 800-1,200 mg/100mL synergizes with chicken\'s IMP 300-400 mg/100g through Yamaguchi mechanism → 8× umami amplification.',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'soy sauce',
        },
        {
          amount: 3,
          unit: 'unit',
          name: 'kaffir lime leaves (lá chanh), bruised',
          note: 'Citronellal + citronellol terpenes complement the phospholipid-derived chicken aroma volatiles.',
        },
        {
          amount: 3,
          unit: 'cm',
          name: 'ginger, sliced',
        },
        {
          amount: 3,
          unit: 'clove',
          name: 'garlic, smashed',
        },
        {
          amount: 2,
          unit: 'unit',
          name: 'lemongrass stalks, bruised and knotted',
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'five-spice powder',
        },
        {
          amount: 0.5,
          unit: 'tsp',
          name: 'black pepper',
        },
      ],
    },
    {
      title: 'Dipping Sauce',
      items: [
        {
          amount: 1,
          unit: 'unit',
          name: 'lime, quartered',
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'salt',
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'black pepper, freshly cracked',
        },
        {
          amount: 4,
          unit: 'unit',
          name: 'kaffir lime leaves, julienned',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Prepare and marinate the chicken — flavor penetration, 30 minutes',
      description: `CLEAN the chicken thoroughly. PAT COMPLETELY DRY — surface moisture prevents Maillard browning and inhibits skin crisping.

COMBINE honey, fish sauce, soy sauce, five-spice powder, and black pepper in a bowl. RUB the marinade all over the chicken, inside and out, ensuring it reaches the thigh joints (where the meat is thickest and hardest to flavor).

STUFF the cavity with bruised kaffir lime leaves, ginger slices, smashed garlic, and lemongrass knots — these aromatics will steam INSIDE the chicken during cooking, flavoring the meat from within via steam-carried volatile terpenes.

MARINATE for at least 30 minutes (or up to overnight in the refrigerator). The fish sauce provides glutamate that will synergize with the chicken's endogenous IMP during eating.`,
      tip: `THE IMP-GLUTAMATE SYNERGY — EXERCISE-DERIVED UMAMI: The Yamaguchi synergy between IMP and glutamate follows a MULTIPLICATIVE model: umami intensity = k × [IMP]^a × [Glu]^b, where the exponents a and b are each approximately 1, meaning that DOUBLING the IMP concentration approximately DOUBLES the synergistic effect. A hill chicken with 350 mg/100g IMP (vs 200 mg/100g in broiler) produces approximately 75% MORE synergistic umami when combined with the same amount of glutamate from fish sauce. This is why hill chicken dipped in salt-pepper-lime tastes MORE UMAMI than broiler chicken dipped in the same sauce — the extra IMP in the meat is doing the heavy lifting, and the fish sauce marinade is the catalyst that unlocks it.`,
    },
    {
      title: 'Roast the chicken — subcutaneous fat rendering + collagen denaturation, 45-55 minutes',
      description: `PREHEAT oven to 200°C (or prepare a charcoal grill for indirect cooking at 180-200°C).

PLACE the chicken breast-side up on a roasting rack set over a drip pan. The rack is essential — it allows HOT AIR to circulate around the entire bird, ensuring uniform skin crisping and allowing rendered fat to drip away rather than pooling.

ROAST at 200°C for 15 minutes — this initial HIGH HEAT drives rapid subcutaneous fat rendering. The thin 1-2 mm fat layer beneath the skin melts completely during this phase, basting the lean meat from within while defatting the skin for crisping.

REDUCE heat to 170°C and continue roasting for 30-40 minutes. This LOWER, SLOWER phase allows the mature collagen (Td 72-75°C) to denature — the thigh meat must reach an internal temperature of at least 75°C for sufficient time (approximately 30 minutes at 75-80°C) to convert the cross-linked collagen into gelatin.

THE THIGH IS THE INDICATOR: Insert a thermometer into the thickest part of the thigh (the most exercised muscle with the most mature collagen and highest Type I fiber content). When it reads 78-82°C, the collagen has denatured and the juices run CLEAR.

REST the chicken for 10 minutes — this allows the temperature to equalize and the myosin-water system to re-equilibrate, redistributing juices from the hotter exterior to the cooler interior.`,
      tip: `MATURE COLLAGEN REQUIRES PATIENCE — THE CROSS-LINK PENALTY: Young broiler collagen (5-7 weeks old) has a denaturation temperature Td of 65-68°C — it converts to gelatin quickly and at a temperature the meat reaches early in cooking. Hill chicken collagen (6-12 months old) has Td of 72-75°C — a seemingly small 7°C difference that actually requires approximately 30-50% MORE COOKING TIME because (1) the meat must reach a higher internal temperature, which takes longer due to the logarithmic approach to oven temperature (Newton's law of cooling in reverse), and (2) the mature cross-links (pyridinoline, pentosidine, glucosepane) have higher ACTIVATION ENERGIES for thermal cleavage, meaning they need not just higher temperature but MORE TIME at that temperature to cleave. This is why Tiên Yên locals roast their chickens LOW AND SLOW — they've learned that rushing produces tough, chewy meat. The reward for patience is meat that is simultaneously FIRM (from the dense, exercised muscle fibers) and SUCCULENT (from the gelatin released by the mature collagen) — a texture impossible to achieve with broiler chicken no matter how you cook it.`,
    },
    {
      title: 'Chop and serve — the Quảng Ninh mountain chicken experience',
      description: `CHOP the chicken through the bone into 3-4 cm pieces using a heavy cleaver — Vietnamese style, where the bone fragments add textural interest and release marrow.

ARRANGE on a plate — the pieces should display the GOLDEN-YELLOW skin (carotenoid pigmentation), the CRISPY rendered surface (defatted and Maillard-browned), and the PINK-RED meat (myoglobin from Type I fibers — this is NOT undercooked; it's the natural color of myoglobin-rich slow-twitch muscle).

PREPARE the salt-pepper-lime dipping sauce: mix salt, freshly cracked black pepper, and julienned kaffir lime leaves. Serve with lime quarters for squeezing.

THE EATING PROTOCOL: Take a bone-in piece, dip in salt-pepper-lime, and BITE through: CRISPY defatted skin → FIRM, FLAVORFUL meat (Type I fiber density + phospholipid aroma + IMP umami) → SUCCULENT gelatin-rich connective tissue (denatured mature collagen) → MARROW release from the bone. The salt-pepper-lime dip provides the glutamate-free counterpoint — NaCl for saltiness, pepper piperine for mild TRPV1 activation, lime citric acid for sourness, and kaffir lime citronellal for aromatic lift — allowing the chicken's own IMP-driven umami to shine as the DOMINANT taste.`,
      tip: `SKIN COLOR AS QUALITY PROXY — WHEN CAROTENOIDS TELL THE TRUTH: Vietnamese market buyers have been using skin color as a chicken quality indicator for centuries, and the science validates their intuition perfectly. Xanthophyll carotenoids (lutein + zeaxanthin) are deposited in dermal fat ONLY through dietary intake — chickens cannot synthesize them de novo. A chicken that forages on insects, grasses, and corn accumulates 5-15 µg/g carotenoids in skin fat, producing DEEP GOLDEN-YELLOW coloring. A confined broiler fed commercial pellets accumulates <2 µg/g, producing PALE, ALMOST WHITE skin (or artificially yellow from synthetic canthaxanthin added to feed, which produces an unnatural orange-yellow). The carotenoid concentration correlates with foraging intensity → exercise intensity → all the quality markers (fiber type, IMP, collagen maturity, leanness). So when a Vietnamese grandmother at the market squeezes a chicken thigh and checks its skin color, she is performing a MULTI-VARIATE QUALITY ASSESSMENT that modern food scientists would struggle to improve upon — she just does it in two seconds instead of two hours of lab work.`,
    },
  ],
};

export default function GaDoiTienYenPage() {
  return <RecipeLayout recipe={recipe} />;
}
