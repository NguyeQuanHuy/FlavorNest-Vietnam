'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'mi-quang-ech',
  title: `Mì Quảng Ếch — Frog Mì Quảng`,
  subtitle: 'Wild-caught frog legs braised in turmeric-lemongrass broth over alkaline rice noodles with peanuts, sesame crackers, and a seven-herb garden — the amphibian variant that Central Vietnamese cooks consider the most texturally sophisticated of all Mì Quảng proteins.',
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '55 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/mi-quang-ech.jpg',

  intro: `Among the thirty-plus protein variations of Mì Quảng that exist across Quảng Nam and Đà Nẵng, the frog version — Mì Quảng Ếch — occupies a position of quiet reverence among connoisseurs who understand what amphibian muscle does that poultry and pork cannot. This is not frog as novelty protein. In the rice paddies surrounding Đà Nẵng\\'s western districts and the Thu Bồn river system, wild frogs (ếch đồng) have been harvested for centuries as a rainy-season protein that arrives precisely when the paddies flood between September and November. The dish exists because the ingredient and the season demanded it: frog appears when the fields are too waterlogged for land-based farming, and Mì Quảng\\'s concentrated broth format — mere tablespoons rather than bowls — extracts maximum flavor from an animal whose delicate flesh would dissolve in a full-volume soup.

The critical distinction between frog and every other Mì Quảng protein lies in MYOSIN ISOFORM COMPOSITION. Frog skeletal muscle contains predominantly fast-twitch Type IIb fibers with myosin heavy chain isoforms that denature at 58-62°C — a full 8-12°C lower than chicken breast myosin (68-73°C) and 15°C lower than pork loin (75-78°C). This lower denaturation threshold means frog muscle transitions from raw to perfectly set in a narrower temperature window, producing a texture that is simultaneously firm enough to hold its shape on the bone yet yields to the tongue with almost zero chewing resistance. The muscle fibers themselves are 30-50 micrometers in diameter — roughly half the thickness of chicken fibers (60-100μm) — creating a grain so fine that the meat appears to have no visible fiber structure at all, only a smooth, almost custard-like surface when properly cooked.

The turmeric-lemongrass broth that bathes the frog creates a DUAL EXTRACTION SYSTEM unique to this protein. Frog bones are thinner-walled and more porous than poultry bones, with a cortical thickness of just 0.3-0.8mm compared to chicken\\'s 1.5-3.0mm. This porosity allows curcuminoids and citral from the lemongrass to penetrate the bone matrix during braising, creating a bi-directional flavor exchange: bone marrow lipids (rich in omega-3 DHA at 2-4% of total fatty acids — unusually high for a terrestrial animal) migrate outward carrying fat-soluble aroma compounds, while water-soluble turmeric polyphenols migrate inward, turning the marrow itself golden. When you suck the bone — and you must suck the bone — you taste turmeric-infused marrow that no other protein in the Mì Quảng family can produce.

Đà Nẵng\\'s frog Mì Quảng follows the canonical minimal-broth philosophy but pushes it further: the broth-to-noodle ratio drops to approximately 1.5-2 tablespoons per serving because frog releases its own moisture during eating. The interstitial fluid trapped between frog muscle fibers — approximately 75-78% water content compared to chicken\\'s 65-70% — creates a SECONDARY BROTH that emerges as you bite through each piece, supplementing the concentrated turmeric base from within. This is moisture-release as flavor delivery: the frog is not merely sitting in broth, it is generating broth. The peanut bed beneath the noodles acts as the same capillary sponge system documented in standard Mì Quảng, but here it captures both the applied broth AND the frog\\'s expelled moisture, creating a third flavor layer that is neither pure broth nor pure meat juice but a hybrid with the umami concentration of both.

The rainy-season connection runs deeper than harvest timing. Wild paddy frogs feed on the insects that proliferate during monsoon floods — crickets, water beetles, dragonfly larvae — and this ENTOMOPHAGOUS DIET produces muscle with higher chitin-derived glucosamine content (15-25 mg/100g versus farmed frog\\'s 5-8 mg/100g) and a distinctive sweetness that Vietnamese cooks describe as "thịt ngọt tự nhiên" — naturally sweet meat. This dietary terroir cannot be replicated by farm-raised frogs fed on commercial pellets, which is why Đà Nẵng cooks insist on ếch đồng over ếch nuôi, and why the dish remains fundamentally seasonal despite year-round availability of farmed alternatives.`,

  ingredientSections: [
    {
      title: 'Frog & Marinade',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'whole frog legs (ếch đồng)',
          note: 'Wild paddy frogs preferred for natural sweetness. Each leg pair 80-120g. Farmed frogs work but lack the insect-diet-derived glucosamine sweetness. Skin ON — frog skin contains collagen that creates the silky broth body.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'fresh turmeric, finely grated',
          note: 'Fresh root, not powder — curcumin in fresh turmeric is 3-5% by weight with higher bioavailability due to intact essential oil matrix. The oils carry curcuminoids into frog bone marrow during braising.'
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'fish sauce (nước mắm)',
          note: 'Cá cơm 40°N preferred. The glutamate content (1,200-1,800 mg/100ml) compensates for frog\\'s lower free amino acid content compared to red meat.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'lemongrass, finely minced',
          note: 'Use only the bottom 10cm of the stalk where citral concentration peaks at 65-75% of essential oil content. Mince to <2mm to maximize surface area for marinade penetration.'
        },
        {
          amount: 3,
          name: 'shallots, minced',
          note: 'Vietnamese shallots (hành tím) — smaller, more pungent than European. Allicin from shallots acts as a natural tenderizer on frog\\'s already-delicate myosin.'
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'black pepper, freshly ground',
          note: 'Piperine enhances curcumin absorption by 2,000% through inhibition of hepatic glucuronidation — the classic turmeric-pepper bioavailability synergy.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'annatto oil (dầu hạt điều)',
          note: 'Bixin carotenoids add orange-red depth that curcumin\\'s yellow alone cannot achieve. Also provides fat-phase carrier for turmeric\\'s lipophilic compounds.'
        }
      ]
    },
    {
      title: 'Concentrated Broth Base',
      items: [
        {
          amount: 500,
          unit: 'ml',
          name: 'pork bone stock',
          note: 'Light pork stock provides the gelatin backbone (4-6% protein) that frog bones alone cannot generate in sufficient quantity. Simmer pork neck bones 2-3 hours minimum.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'cooking oil',
          note: 'Neutral oil for the turmeric bloom. Oil temperature must reach 120-140°C to activate curcumin\\'s keto-enol tautomerism — the molecular switch that deepens color from pale yellow to deep amber.'
        },
        {
          amount: 2,
          name: 'lemongrass stalks, bruised',
          note: 'Whole stalks for broth infusion (separate from the minced lemongrass in the marinade). Bruising ruptures oil cells in the fibrous cortex, releasing citral and geraniol into the liquid phase.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'fresh turmeric, sliced',
          note: 'Second turmeric addition for broth color. Sliced rather than grated — slower extraction creates layered golden hue without the muddy sediment of over-grated turmeric.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'fish sauce',
          note: 'Final seasoning for the concentrated broth. Add at the end to preserve volatile aromatic amines that boil off above 85°C.'
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'sugar',
          note: 'Trace sugar rounds the turmeric\\'s slight bitterness without sweetening the broth. Works through bitter-receptor masking at sub-threshold sweetness levels.'
        }
      ]
    },
    {
      title: 'Mì Quảng Noodles',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'fresh Mì Quảng rice noodles',
          note: 'Wide, flat, turmeric-tinted rice noodles 2-3mm thick. The alkaline treatment (nước tro) gives them their characteristic chewiness — lye raises gelatinization temperature by 5-8°C, producing firmer gel. If unavailable, wide rice stick noodles (bánh phở) are acceptable but lack the alkaline bite.'
        }
      ]
    },
    {
      title: 'Peanut & Cracker Base',
      items: [
        {
          amount: 100,
          unit: 'g',
          name: 'roasted peanuts, roughly crushed',
          note: 'Dry-roasted at 160°C until Maillard browning reaches stage 3 (deep golden). Crush to irregular 2-4mm fragments — NOT peanut powder. The fragments create the CAPILLARY BED that traps broth beneath the noodles.'
        },
        {
          amount: 4,
          name: 'bánh tráng nướng (grilled rice crackers)',
          note: 'Charcoal-grilled until blistered with irregular dark spots. The GLASS TRANSITION from rubbery to glassy state creates the shattering crunch that contrasts with frog\\'s soft flesh. Break into large shards tableside.'
        }
      ]
    },
    {
      title: 'Herb Garden & Accompaniments',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'banana blossom, thinly shredded',
          note: 'Mandatory structural element. Tannins in banana blossom (3-5% gallic acid derivatives) provide astringent counterpoint to frog\\'s rich, smooth texture. Soak in acidulated water to prevent enzymatic browning.'
        },
        {
          amount: 100,
          unit: 'g',
          name: 'mixed herbs: Vietnamese mint (rau răm), Thai basil, cilantro, perilla (tía tô), fish mint (diếp cá)',
          note: 'The VOLATILE SPECTRUM: rau răm (sesquiterpenes, peppery), Thai basil (methyl chavicol, sweet anise), cilantro (linalool, citrus), perilla (perillaldehyde, cinnamon-mint), fish mint (decanal, unique fishy-citrus). Each herb contributes 15-50 different volatile compounds — together they create a retronasal complexity impossible to achieve with any single herb.'
        },
        {
          amount: 100,
          unit: 'g',
          name: 'bean sprouts',
          note: 'Raw for crunch contrast. The cell turgor pressure of fresh sprouts (0.5-0.8 MPa) provides the mechanical resistance that frog\\'s soft meat lacks.'
        },
        {
          amount: 2,
          name: 'green chilies, sliced',
          note: 'Central Vietnamese green finger chilies. Capsaicin triggers TRPV1 heat receptors that amplify perception of the turmeric\\'s warmth — additive thermosensation.'
        },
        {
          amount: 2,
          name: 'limes, quartered',
          note: 'Citric acid at pH 2.0-2.5. Added at the table to brighten the concentrated broth and denature any residual surface proteins for a cleaner finish.'
        }
      ]
    }
  ],

  steps: [
    {
      title: 'Clean and portion the frog legs',
      instruction: 'Separate frog legs at the hip joint, then cut each leg into 2-3 pieces at natural joint points. Remove any remaining visceral membrane (the thin, translucent peritoneal lining that clings to the inner thigh). Rinse thoroughly under cold running water, then soak in lightly salted water (1 tbsp salt per liter) for 10 minutes to draw out any residual blood from the spongy bone interior.',
      time: '15 min',
      tip: 'AMPHIBIAN BONE ARCHITECTURE: Frog bones are pneumatized differently from bird bones — they lack air sacs but have a medullary cavity filled with yellow marrow rich in oleic acid (45-55% of marrow fat). This marrow is the prize: cutting at joints rather than mid-shaft preserves the sealed marrow chambers that will release their lipids into the broth during braising. If you cut mid-bone, the marrow escapes too early and disperses before flavor concentration occurs.',
      doneness: 'Frog pieces should be cleanly separated at joints with no splintered bone fragments. The salt soak water should run clear after 10 minutes — any remaining pink means soak another 5 minutes.'
    },
    {
      title: 'Marinate with turmeric and lemongrass',
      instruction: 'Combine grated fresh turmeric, minced lemongrass, minced shallots, fish sauce, black pepper, and annatto oil in a bowl. Add frog pieces and massage the marinade into every surface and crevice, ensuring the turmeric paste contacts the exposed bone marrow at each joint cut. Marinate for minimum 20 minutes at room temperature, or up to 2 hours refrigerated.',
      time: '20 min',
      tip: 'CURCUMINOID BONE PENETRATION: Fresh turmeric\\'s essential oils (ar-turmerone, turmerone) act as penetration enhancers — they disrupt the lipid bilayers of the periosteum membrane covering each bone, allowing curcumin to migrate into the marrow space at a rate of approximately 0.5mm/hour. The 20-minute minimum gives enough penetration for the outer marrow to turn golden. The black pepper\\'s piperine isn\\'t just for bioavailability — it also inhibits curcumin\\'s photodegradation, keeping the marinade vivid even under kitchen lighting.',
      doneness: 'Every frog piece should be uniformly coated in deep golden-orange paste with no white flesh visible. The marinade will have thickened slightly as fish sauce proteins interact with turmeric polyphenols — this is correct.'
    },
    {
      title: 'Build the turmeric broth base',
      instruction: 'Heat cooking oil in a heavy-bottomed pot over medium-high heat until shimmering (160-170°C). Add sliced fresh turmeric and bruised lemongrass stalks, stirring constantly for 60-90 seconds until the turmeric sizzles and the oil turns deep amber. Pour in the pork bone stock — it will steam vigorously. Bring to a simmer, then reduce heat to maintain a gentle bubble. Season with fish sauce and sugar.',
      time: '5 min',
      tip: 'CURCUMIN KETO-ENOL TAUTOMERISM: At oil temperatures above 120°C, curcumin\\'s diketo form (pale yellow) shifts to its keto-enol form (deep orange-red) as the molecule planarizes. This isn\\'t just about color — the keto-enol tautomer is more lipophilic, meaning it partitions more effectively into the fat droplets suspended in the broth, creating a stable golden emulsion rather than a murky suspension. If the oil isn\\'t hot enough, you get yellow oil floating on clear broth instead of the integrated golden liquid that defines proper Mì Quảng.',
      doneness: 'The broth should be uniformly golden-amber with no oil separation visible on the surface. The aroma should be intensely floral-earthy (lemongrass citral + turmeric ar-turmerone) with no raw starchy smell.'
    },
    {
      title: 'Braise the frog in concentrated broth',
      instruction: 'Add marinated frog pieces to the simmering turmeric broth in a single layer. The liquid should come halfway up the frog pieces — NOT submerge them. Cover with a tight-fitting lid and braise at a gentle simmer (85-90°C, small bubbles breaking the surface every 2-3 seconds) for exactly 12-15 minutes. Do NOT stir during braising.',
      time: '15 min',
      tip: 'PARTIAL SUBMERSION BRAISING creates a DUAL-TEXTURE ZONE on each frog piece: the submerged lower half undergoes wet-heat collagen conversion (Type III collagen → gelatin at 65-70°C), producing silky-soft meat, while the exposed upper half steams gently, retaining more of its native myofibrillar structure for a slightly firmer bite. This textural gradient within a single piece is impossible with full submersion. The tight lid creates a steam dome at 100% relative humidity that prevents the exposed surface from drying while maintaining the temperature differential. CRITICAL: frog myosin\\'s low denaturation temperature (58-62°C) means the meat reaches perfect doneness long before the collagen fully converts — the 12-15 minute window allows collagen conversion to catch up without overcooking the muscle proteins.',
      doneness: 'Frog meat should pull slightly from the bone when nudged with chopsticks but NOT fall off — that means overcooking. The braising liquid should have reduced by about 30%, concentrating into an intensely golden, slightly viscous sauce. A drop on a white plate should be clear amber, not cloudy.'
    },
    {
      title: 'Prepare the noodle assembly base',
      instruction: 'If using fresh Mì Quảng noodles, separate them gently and briefly warm in a dry pan or microwave for 30 seconds (do not boil — they are pre-cooked). If using dried rice noodles, cook according to package, drain, and rinse with cold water. For each bowl: place a generous handful of crushed roasted peanuts on the bottom, then layer the warmed noodles on top.',
      time: '5 min',
      tip: 'THE PEANUT CAPILLARY BED: Crushed peanut fragments (2-4mm irregular shapes) create an interstitial matrix with capillary channels approximately 0.5-1.0mm in diameter. When the concentrated broth is added, these channels draw liquid downward through CAPILLARY ACTION (driven by surface tension at the peanut oil/broth interface), distributing flavor beneath the noodle layer. Without this peanut foundation, the 1.5-2 tablespoons of concentrated broth would simply sit on top of the noodles — insufficient volume to coat them. The peanut bed transforms a top-dressing into an infiltrating flavor system.',
      doneness: 'Noodles should be room temperature or slightly warm, pliable but not sticky. The peanut layer should be visible beneath the noodle edges — approximately 1.5-2 tablespoons of crushed peanuts per bowl.'
    },
    {
      title: 'Plate: frog over noodles with concentrated broth',
      instruction: 'Arrange 3-4 pieces of braised frog on top of the noodle bed in each bowl. Spoon exactly 2-3 tablespoons of the concentrated turmeric braising liquid over the frog and noodles — no more. The broth should barely wet the noodles, not pool. Arrange shredded banana blossom, bean sprouts, and the mixed herb garden on one side of the bowl. Place a large shard of grilled rice cracker vertically, leaning against the bowl edge.',
      time: '5 min',
      tip: 'THE MOISTURE-RELEASE ARCHITECTURE: This bowl is engineered for PROGRESSIVE HYDRATION. Layer 1 (peanut bed) captures initial broth. Layer 2 (noodles) is barely moistened. Layer 3 (frog) sits on top holding 75-78% internal water content. As you eat, each bite of frog releases interstitial fluid (approximately 2-3ml per piece) that drips down through the noodles to the peanut bed, creating a SECONDARY BROTH IN REAL TIME. By the last bite of frog, the noodles at the bottom of the bowl are saturated with a hybrid liquid that is part turmeric broth, part frog meat juice — a flavor impossible to achieve by pre-mixing. This is why Mì Quảng is eaten with chopsticks from the top down, never stirred.',
      doneness: 'The bowl should appear almost dry on the surface — the broth is BENEATH and WITHIN, not visible as a pool. Herbs should be vibrant and unwilted. The rice cracker must be added last and eaten first, before it absorbs ambient moisture and loses its glass-state crunch.'
    },
    {
      title: 'Tableside finishing: lime, chili, and the eating ritual',
      instruction: 'At the table, squeeze a quarter lime over the frog pieces (not the herbs — acid wilts them). Add sliced green chili to taste. Break the rice cracker into 3-4 large shards. Eat in this specific order: first, a shard of rice cracker alone for the baseline crunch. Then, pick up a frog piece with chopsticks, bite through the flesh while sucking the marrow from the exposed joint. Follow with a chopstick-full of noodles gathered from beneath the frog, now moistened with released meat juices. Finish each cycle with a pinch of herbs and banana blossom.',
      time: '2 min',
      tip: 'SEQUENTIAL TEXTURE ARCHITECTURE: The eating order isn\\'t ritual — it\\'s SENSORY CALIBRATION. The rice cracker\\'s glass-state fracture (shattering at >10⁴ Pa) resets your jaw proprioceptors to maximum sensitivity. The frog\\'s near-zero chewing resistance then registers as astonishingly soft by contrast — a textural illusion that would not exist without the cracker baseline. The herb bite provides volatile aromatics that reach the olfactory epithelium via retronasal pathway during chewing, while the banana blossom\\'s tannin astringency contracts the oral mucosa, re-sensitizing it for the next cycle. Each four-component bite is a SENSORY RESET that prevents palate fatigue across the entire bowl.',
      doneness: 'The experience is complete when the bowl bottom reveals a thin layer of golden-amber liquid that is neither the original broth nor plain meat juice but a HYBRID EXTRACTION — part turmeric broth, part frog interstitial fluid, part peanut oil. This residual liquid, sopped up with the final cracker shard, is the most concentrated flavor moment of the entire dish.'
    }
  ],

  proTips: [
    {
      title: 'Wild vs. Farmed Frog: The Flavor Gap',
      description: 'Wild paddy frogs (ếch đồng) develop 3-5× more free glutamate (80-120 mg/100g versus 25-40 mg/100g in farmed) due to their varied insect diet. The glucosamine from chitin-rich prey also contributes a natural sweetness that no amount of seasoning can replicate. If using farmed frogs, compensate by adding 1 tsp of MSG to the marinade and a pinch of sugar — it won\\'t match wild frog but closes the gap by approximately 60%.'
    },
    {
      title: 'The Bone-Sucking Technique',
      description: 'Frog bones at the joint contain sealed marrow chambers that the braising liquid has penetrated. Apply negative pressure (suction) at the exposed joint end — the turmeric-infused marrow will flow out as a warm, golden liquid with an omega-3 richness unlike any other bone marrow. The thin bone walls (0.3-0.8mm) mean even moderate suction creates enough pressure differential to extract marrow that thicker-walled poultry bones would retain.'
    },
    {
      title: 'Broth Volume: Less is Absolutely More',
      description: 'Resist the urge to add more broth. The 2-3 tablespoon serving is NOT insufficient — it\\'s precisely calibrated. The frog\\'s internal moisture (75-78% water content) will contribute an additional 15-25ml of flavorful liquid per bowl as you eat. Adding more broth converts this from Mì Quảng (dry noodle architecture) into a noodle soup, which has completely different flavor dynamics. If the noodles seem dry initially, trust the process — by the third bite of frog, the moisture balance is perfect.'
    },
    {
      title: 'European Substitute: French Cuisses de Grenouille',
      description: 'European frog legs (Rana temporaria or Pelophylax ridibundus, available at Asian supermarkets in Germany and France) work as substitutes but tend to be smaller and leaner. Use 1kg to compensate for smaller leg size. The European frogs lack the paddy-insect diet, so increase fish sauce by 1 tbsp and add a small piece of dried shrimp (tôm khô) to the broth for the missing umami depth. The cooking times remain identical — European frog myosin denatures at the same temperature range.'
    },
    {
      title: 'Rice Cracker Timing',
      description: 'Grilled rice crackers exist in a metastable GLASSY STATE with water activity below 0.3. Above this threshold — reached within 4-7 minutes of exposure to the humid bowl environment — starch chains absorb moisture, undergo partial re-gelatinization, and transition to a RUBBERY STATE. The cracker goes from shattering to bending. This is why it\\'s added last and broken immediately. In Đà Nẵng street stalls, the cracker is handed to you separately, wrapped in paper, and you add it yourself — the cook knows the physics.'
    }
  ],

  nutrition: {
    calories: 520,
    protein: '38g',
    carbs: '55g',
    fat: '16g',
    fiber: '4g'
  },

  conclusion: `Mì Quảng Ếch is the connoisseur\\'s Mì Quảng — a version that demands understanding of amphibian muscle physics, bone marrow extraction, and the progressive-hydration architecture that makes Quảng Nam\\'s dry noodle format fundamentally different from every other Vietnamese noodle dish. The frog is not just another protein option; it is the protein that most completely exploits the minimal-broth philosophy, because it carries its own moisture reserve that transforms the bowl during the act of eating. Every bite releases interstitial fluid that the peanut bed captures and the noodles absorb, creating a flavor feedback loop that intensifies rather than dilutes. When you reach the bottom of the bowl and find that thin layer of golden hybrid liquid — part turmeric broth, part frog essence, part peanut oil — you understand why Central Vietnamese cooks consider this the most intellectually satisfying member of the Mì Quảng family. It is a dish that rewards patience, demands technique, and delivers a textural journey from glass-state cracker to custard-soft frog in every carefully sequenced bite.`
};

export default function MiQuangEchPage() {
  return <RecipeLayout recipe={recipe} />;
}
