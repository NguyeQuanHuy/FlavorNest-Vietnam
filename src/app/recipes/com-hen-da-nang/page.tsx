'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'com-hen-da-nang',
  title: `Cơm Hến Đà Nẵng — Baby Clam Rice with Pork Crackling & Herb Garden`,
  subtitle: 'Cold leftover rice tossed with flash-sautéed baby river clams, pork crackling shards, roasted peanuts, sesame seeds, and a twelve-component condiment matrix — the dish that turns THERMAL INVERSION and DAY-OLD STARCH into a textural masterpiece where every grain of rice remains individually distinct.',
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/com-hen-da-nang.jpg',

  intro: `Cơm Hến defies the foundational rule of Vietnamese cuisine — that rice must be served hot. This is COLD RICE BY DESIGN, not cold rice by negligence. The dish originated along the Hàn River system running through Đà Nẵng, where tiny freshwater clams (Corbicula fluminea, known as hến) colonize the sandy riverbed in densities of 200-500 individuals per square meter. These clams — rarely exceeding 15mm in shell diameter — have been harvested by hand-raking since the Nguyễn Dynasty, and the dish built around them represents perhaps the most sophisticated application of RETROGRADED STARCH in any Asian cuisine.

The cold rice is not a compromise — it is a TEXTURAL ENGINEERING DECISION rooted in starch chemistry. When cooked rice cools to room temperature or below, the amylose fraction (20-25% of rice starch) undergoes RETROGRADATION: the linear amylose chains, which were dispersed and hydrated during gelatinization at 60-80°C, reassociate into double-helical crystalline structures held together by hydrogen bonds. This crystalline network does three things that hot rice cannot. First, it INCREASES MECHANICAL STRENGTH — retrograded rice grains require 30-50% more compressive force to deform than freshly cooked grains, producing a firmer, more defined chew. Second, it REDUCES SURFACE STICKINESS — the crystalline amylose shell on each grain\’s surface has lower water activity (aw 0.85-0.90) than the gelatinized surface of hot rice (aw 0.95-0.98), which means each grain remains individually separated rather than clumping into a sticky mass. Third, it CREATES RESISTANT STARCH (RS3) — retrograded amylose is partially resistant to enzymatic digestion, slowing glucose absorption and extending the satiety window. Cơm Hến\’s cold rice is harder, drier, less sticky, and more nutritionally sustaining than its hot counterpart. Every property the dish needs.

The baby clams contribute a specific AMINO ACID PROFILE that defines the dish\’s taste identity. Corbicula fluminea muscle tissue is exceptionally rich in succinic acid (200-400 mg/100g) — a dicarboxylic acid that activates the recently discovered succinic acid taste receptor (SUCNR1) on the tongue, producing a flavor described in Japanese cuisine as "shellfish umami" that is chemically distinct from glutamate umami. The clams also contain high concentrations of glycine (400-600 mg/100g) and alanine (300-500 mg/100g) — the two amino acids most strongly associated with SWEETNESS in protein hydrolysates. This combination — succinic acid + glycine + alanine — creates the characteristic "sweet-ocean" taste that no amount of fish sauce or MSG can replicate, because it activates receptor populations (SUCNR1 + T1R2/T1R3 sweet receptors) that glutamate does not touch.

The CONDIMENT MATRIX is where Cơm Hến achieves its complexity. Unlike most Vietnamese dishes that arrive pre-dressed by the cook, Cơm Hến is a SELF-ASSEMBLY SYSTEM: twelve or more condiments are served in individual dishes, and the eater builds each bite from a personalized combination. Pork crackling (tóp mỡ) provides Maillard-crusted fat crunch. Roasted peanuts provide protein crunch. Sesame seeds provide oil-rich micro-crunch. Fried shallots provide allium sweetness. Chili oil provides capsaicin heat. Mắm ruốc provides fermented umami amplification. Shrimp paste provides briny depth. Lime provides acid brightness. Star fruit provides oxalic acid sharpness. Green banana provides tannin astringency. Fresh herbs provide volatile aromatics. Each condiment targets a different receptor population, and the COMBINATORIAL POSSIBILITIES across 12 condiments exceed 4,000 unique combinations — ensuring that no two bites in the same bowl need taste identical.

Đà Nẵng\’s version distinguishes itself from Huế\’s original by two modifications: a HOTTER chili profile (Đà Nẵng palates run 30-50% above Huế\’s already-spicy baseline) and the addition of MORE PORK CRACKLING per serving, reflecting Đà Nẵng\’s preference for textural crunch over Huế\’s emphasis on the clam broth. In fact, the clam cooking broth — which in Huế is sometimes served as a side soup — is in Đà Nẵng reduced further and used primarily as a MOISTENING AGENT for the cold rice, applied sparingly (2-3 tablespoons per bowl) to bridge the gap between dry retrograded grains and the wet condiments without destroying the starch\’s crystalline structure. The broth is lubricant, not soup.`,

  ingredientSections: [
    {
      title: 'Baby Clams (Hến)',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'live baby river clams (hến/Corbicula)',
          note: 'Corbicula fluminea, 10-15mm shell diameter. Must be LIVE — shells closed or closing when tapped. Purge in salted water (1 tbsp salt per liter) for 2-3 hours to expel sand. The smaller the clam, the higher the ratio of adductor muscle to total body weight, and therefore the more concentrated the succinic acid + glycine flavor.'
        },
        {
          amount: 2,
          name: 'lemongrass stalks, bruised',
          note: 'Added to the clam steaming water. Citral volatile compounds penetrate the opening shells during steaming, infusing the clam meat with lemongrass aroma from the inside. This is INTERNAL AROMATIC DELIVERY — the lemongrass reaches the clam before the eater does.'
        },
        {
          amount: 1,
          name: 'small piece fresh ginger, sliced',
          note: 'Gingerol and shogaol suppress any muddy off-notes from the clams\’ river habitat. The ginger\’s 6-gingerol also inhibits lipid oxidation in the clam\’s hepatopancreas, preventing the "fishy" flavor that develops when bivalve lipids oxidize.'
        }
      ]
    },
    {
      title: 'Cold Retrograded Rice',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'day-old cooked jasmine rice, refrigerated',
          note: 'CRITICAL: the rice must be cooked the day before and refrigerated overnight at 4°C for minimum 8 hours. This cold aging drives amylose retrogradation to 60-75% completion — the crystalline shell on each grain is thick enough for textural firmness but not so thick that the grain becomes brittle. Same-day rice at room temperature reaches only 20-30% retrogradation — insufficient for the desired firmness. Rice cooked and cooled on the same day is a last resort.'
        }
      ]
    },
    {
      title: 'Pork Crackling (Tóp Mỡ)',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'pork fatback, cut into 1cm cubes',
          note: 'Rendered slowly until the fat melts out and the connective tissue matrix collapses into crispy, golden CRACKLINGS. The residual protein-collagen structure undergoes glass transition at low moisture (<5%), creating the shattering brittleness that defines tóp mỡ. Reserve the rendered lard — it\’s used to sauté the clams.'
        }
      ]
    },
    {
      title: 'Twelve-Component Condiment Matrix',
      items: [
        {
          amount: 80,
          unit: 'g',
          name: 'roasted peanuts, roughly crushed',
          note: 'Dry-roasted at 160°C to Maillard stage 3 (deep golden). Crushed to 2-4mm fragments for crunch. Peanuts provide protein-based crunch at a different FRACTURE FREQUENCY than the fat-based crunch of tóp mỡ — together they create a bimodal crunch spectrum.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'white sesame seeds, toasted',
          note: 'Toasted until golden. Sesame\’s high oil content (50-55%) means each seed delivers a MICRO-BURST of fat when crushed between teeth, supplementing the pork crackling\’s larger-scale fat delivery with a fine-grained lipid distribution.'
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'crispy fried shallots',
          note: 'Maillard products (2-acetyl-1-pyrroline, furfural) provide sweet-savory aromatic complexity. The shallot\’s residual sugar caramelizes at 170°C, contributing a toasted sweetness that bridges the gap between savory clam and neutral rice.'
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'chili oil with flakes',
          note: 'Capsaicin dissolved in oil phase for LIPOPHILIC HEAT DELIVERY. Oil-borne capsaicin contacts TRPV1 receptors more uniformly across the oral mucosa than dry chili flakes, producing a broader, more even heat sensation.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'mắm ruốc (fermented shrimp paste), diluted',
          note: 'The UMAMI AMPLIFIER. Dilute 1:1 with warm water before serving. Biogenic amines lower gustatory perception thresholds — same mechanism documented in Bún Chả Cá. Apply sparingly: 1/2 tsp per bite of rice is sufficient.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'fish sauce (nước mắm)',
          note: 'Glutamate backbone for seasoning. The fish sauce\’s 1,200-1,800 mg/100ml glutamate provides the PRIMARY UMAMI upon which all other condiments build.'
        },
        {
          amount: 100,
          unit: 'g',
          name: 'green banana, sliced thin',
          note: 'Proanthocyanidin tannins (400-800 mg/100g) for ASTRINGENT PALATE RESET. The tannins bind salivary proteins, contracting the oral mucosa and physically stripping flavor residues from the tongue surface between bites.'
        },
        {
          amount: 1,
          name: 'star fruit, sliced',
          note: 'Oxalic acid (pKa 1.25) delivers SHARP ACID SPIKES that cut through the accumulated fat from pork crackling and sesame. More immediate than citric acid — the sourness arrives and fades within 2 seconds.'
        },
        {
          amount: 2,
          name: 'limes, quartered',
          note: 'Citric acid for gradual broth brightening. Slower acid onset than star fruit — these two acids create a TEMPORAL ACID GRADIENT: star fruit for immediate sharp spike, lime for sustained background sourness.'
        },
        {
          amount: 150,
          unit: 'g',
          name: 'mixed fresh herbs: rau răm, Thai basil, perilla, mint, culantro',
          note: 'The VOLATILE CROWN — torn by hand at the table to maximize cellular disruption and volatile release. Each herb\’s essential oil profile targets different olfactory receptor clusters, creating the retronasal complexity that elevates the bowl from "flavored rice" to "sensory landscape."'
        },
        {
          amount: 100,
          unit: 'g',
          name: 'shredded banana blossom',
          note: 'Secondary tannin source + fibrous crunch. The shredded form creates higher surface-area-to-volume ratio than sliced banana, delivering tannin astringency more rapidly.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'rendered pork lard (from tóp mỡ)',
          note: 'Drizzled over the cold rice as a LUBRICANT that bridges the gap between dry retrograded grains and the wet condiments. The lard coats each grain with a thin lipid film (approximately 0.1mm) that prevents the clam broth from re-gelatinizing the retrograded amylose shell.'
        }
      ]
    }
  ],

  steps: [
    {
      title: 'Steam and extract the baby clams',
      instruction: 'Place purged clams in a wide pot with bruised lemongrass, ginger slices, and 200ml water. Cover tightly and steam over high heat for 4-5 minutes, shaking the pot once at the 3-minute mark. Remove from heat when 90%+ of shells have opened. Strain and RESERVE THE COOKING LIQUID — this is the clam broth. Pick the clam meat from the shells, discarding any that didn\’t open.',
      time: '15 min',
      tip: 'BIVALVE THERMAL GAPING: Clam shells open when the adductor muscles — the paired muscles that hold the shell closed — denature at 55-65°C. The adductor is primarily composed of PARAMYOSIN (the invertebrate catch muscle protein) which maintains tension without continuous ATP expenditure. When paramyosin denatures, the muscle\’s cross-bridge cycling ceases and the elastic hinge ligament at the shell\’s dorsal edge springs the valves apart. The 4-5 minute steaming window is calibrated to denature the adductor (opening the shell) WITHOUT overcooking the body meat — Corbicula\’s small body mass (0.5-1.5g per clam) means heat penetration to the center takes only 2-3 minutes. Overcooking (>7 minutes) causes the body to shrink by 30-40% as muscle proteins contract and expel water, producing tough, rubbery morsels. The RESERVED COOKING LIQUID is liquid gold: it contains succinic acid, glycine, alanine, and minerals (calcium from the shell\’s aragonite dissolving slightly in the slightly acidic cooking water) — the concentrated essence of clam.',
      doneness: 'Shells should be fully open (discard closed ones — they were dead before cooking). Clam meat should be plump and slightly translucent — not shrunken or opaque white (overcooked). The cooking liquid should be slightly milky with a sweet, briny aroma dominated by lemongrass. Taste the liquid: it should be naturally sweet with a clean ocean-river flavor and no muddy off-notes.'
    },
    {
      title: 'Render pork crackling (tóp mỡ)',
      instruction: 'Place pork fatback cubes in a cold, dry wok. Set heat to medium-low. Cook slowly, stirring every 2-3 minutes, for 20-25 minutes as the fat renders out and the solid residue transforms from pale and floppy to golden and crispy. Remove cracklings with a slotted spoon and drain on paper towels. Reserve the rendered lard in a heat-proof bowl.',
      time: '25 min',
      tip: 'GLASS TRANSITION IN RENDERED PORK: The transformation of fatback cube into crispy tóp mỡ occurs through a TWO-PHASE PROCESS. Phase 1 (RENDERING, 20-40 minutes, 100-140°C): triglyceride fat melts and flows out of the adipocyte cells, leaving behind a collapsed matrix of connective tissue (collagen + elastin) and residual protein. Phase 2 (GLASS TRANSITION, final 5 minutes, 140-165°C): as moisture drops below 5% water activity, the protein-collagen matrix undergoes a glass transition — shifting from a rubbery, flexible state to a glassy, brittle state. The glass transition temperature (Tg) for dehydrated collagen is approximately 140-160°C at <5% moisture. Below Tg, the matrix is rigid and shatters on biting; above Tg (or above 5% moisture), it is leathery and chewy. Cold-start rendering is essential: hot oil at the start deep-fries the exterior (sealing moisture inside) before the interior fat can melt out, producing greasy, chewy cubes that never reach the glass transition.',
      doneness: 'Cracklings should be deep golden-brown, uniform in color, and audibly SHATTER when bitten — not bend or chew. The interior should show visible pores where fat formerly resided (like a tiny sponge). If any cracklings are still chewy, they haven\’t reached glass transition — return them to the wok for 3-5 minutes more at slightly higher heat. The rendered lard should be clear and golden, not brown or cloudy.'
    },
    {
      title: 'Flash-sauté the clam meat',
      instruction: 'Heat 2 tablespoons of the rendered pork lard in a wok over maximum heat until smoking. Add clam meat and toss vigorously for 60-90 seconds — no more. Season with 1 tablespoon fish sauce and a pinch of sugar. Remove immediately.',
      time: '2 min',
      tip: 'THE 90-SECOND WINDOW: Clam meat is 78-82% water. At wok temperatures (250-350°C surface), the first 30 seconds drives surface moisture below the MAILLARD THRESHOLD (water activity <0.6), initiating rapid browning reactions between the clams\’ abundant free glycine and any trace sugars. Between 30-60 seconds, the Maillard reaction produces 2-acetylthiazole (roasted, meaty) and methional (potato-like) — the savory flavor compounds that distinguish sautéed clams from steamed clams. Beyond 90 seconds, the internal temperature rises above 80°C and the clam proteins CONTRACT, expelling 20-30% of their water and shrinking the meat to tough, rubbery nuggets. The pork lard (smoke point 190°C, higher than vegetable oils\’ typical 170-180°C at this volume) provides the thermal buffer needed for the extreme wok heat without burning.',
      doneness: 'Clam meat should have golden-brown spots on the surface (Maillard products) while remaining plump and juicy. Bite one: it should yield easily with a sweet, toasty flavor followed by the briny-sweet clam essence. If rubbery or dry, the sauté exceeded 90 seconds or the wok wasn\’t hot enough (causing slow moisture loss rather than rapid surface searing).'
    },
    {
      title: 'Assemble the self-assembly bowl',
      instruction: 'Place cold retrograded rice in each bowl — break apart any clumps with a fork to ensure individual grain separation. Drizzle 1 tablespoon of warm rendered lard over the rice and toss gently to coat each grain. Spoon 2-3 tablespoons of warm clam broth over the rice — just enough to moisten without saturating. Top with sautéed clam meat and a generous handful of pork cracklings. Serve with all twelve condiments in individual dishes arranged around each bowl.',
      time: '5 min',
      tip: 'THE LARD-BEFORE-BROTH SEQUENCE is critical. The rendered pork lard coats each retrograded rice grain with a thin LIPID FILM (approximately 0.1mm thickness) that serves as a MOISTURE BARRIER. When the clam broth is added subsequently, the water contacts the lipid film rather than the starch surface. This prevents the broth from RE-GELATINIZING the retrograded amylose — if water contacts the crystalline starch surface directly at temperatures above 60°C, the amylose double helices melt and the starch returns to its soft, gelatinized state, destroying the firm texture that overnight retrogradation created. The lard\’s hydrophobic barrier maintains the retrograded structure while allowing the broth\’s FLAVOR COMPOUNDS (succinic acid, glycine, fish sauce glutamate) to diffuse around each grain in the aqueous phase. Result: firm, separate grains floating in a thin flavor-rich liquid — the defining texture of properly made Cơm Hến.',
      doneness: 'The rice should be room temperature to slightly cool, each grain individually visible and distinct — NEVER a sticky mass. The lard coating should give the grains a subtle sheen. The broth should be visible as a thin film at the bowl\’s bottom, not pooling deeply. The pork cracklings should sit on top, still audibly crispy — they go in last because contact with moisture triggers the reverse glass transition within 3-4 minutes.'
    },
    {
      title: 'Self-assemble and eat: the combinatorial experience',
      instruction: 'Each bite is personally curated from the twelve-condiment palette. Build a spoonful by taking rice + clams from the bowl, then adding condiments: a few peanut fragments, sesame seeds, fried shallots, a dot of mắm ruốc, a drizzle of chili oil, a strip of green banana, a star fruit slice, and a torn herb or two. Each spoonful should be different. Alternate between heavily dressed bites (6-8 condiments) and minimalist bites (clams + rice + one acid) to prevent palate saturation.',
      time: '2 min',
      tip: 'COMBINATORIAL MATHEMATICS OF FLAVOR: With 12 condiments and 3 intensity levels each (none, moderate, heavy), each bite has 3¹² = 531,441 possible flavor configurations. Even choosing just 5 condiments per bite from 12 yields C(12,5) = 792 unique combinations. This COMBINATORIAL DEPTH is what makes Cơm Hến infinitely re-eatable — the eater is not consuming the same dish repeatedly but conducting a SERIES OF MICRO-EXPERIMENTS, each spoonful testing a different flavor hypothesis. The optimal eating strategy alternates between EXPLORATION bites (new condiment combinations) and EXPLOITATION bites (returning to a combination that worked particularly well) — the same explore-exploit tradeoff that governs optimal decision-making in behavioral economics. The pork crackling\’s CRUNCH TIMER adds urgency: once crackling contacts rice moisture, the glass transition reverses within 3-4 minutes, converting shattering crunch to chewy leather. Eat the crackling-heavy bites first.',
      doneness: 'The bowl is properly experienced when: (1) multiple condiment combinations have been tried — minimum 4-5 distinct flavor profiles per bowl, (2) the pork cracklings have all been consumed while still crunchy (within the first 5 minutes), (3) the clam broth at the bowl\’s bottom has been consumed last — it now contains dissolved condiment flavors from every topping that dripped down, creating a CONCENTRATED SUMMARY of the entire meal. Lift the bowl and drink this final liquid — it is the most complex sip in the experience.'
    }
  ],

  proTips: [
    {
      title: 'Rice Retrogradation: Temperature and Time',
      description: 'The optimal retrogradation window is 4°C for 8-16 hours. Below 0°C (freezer), ice crystal formation ruptures the amylose gel network, producing crumbly rather than firm grains. Above 15°C (room temperature overnight), retrogradation is too slow — only 20-30% completion by morning. The refrigerator\’s 4°C maximizes the nucleation rate of amylose double helices while keeping water in liquid state. For emergency same-day preparation, spread hot rice thin on a sheet pan and refrigerate uncovered for 3-4 hours — the increased surface area accelerates cooling and retrogradation.'
    },
    {
      title: 'Clam Broth Concentration',
      description: 'The clam steaming liquid should be reduced by half before using as the rice moistener. Reduction concentrates succinic acid and free amino acids while evaporating excess water. The target is a liquid dense enough that a drop leaves a sticky residue on your finger (indicating dissolved sugars and amino acids at >5% concentration) but not so thick that it becomes syrupy. This concentrated broth is the flavor bridge between dry rice and wet condiments.'
    },
    {
      title: 'European Substitute: Cockles or Small Clams',
      description: 'Herzmuscheln (cockles, Cerastoderma edule) from the Nordsee or small Venusmuscheln (Manila clams, Ruditapes philippinarum) from Asian markets serve as substitutes. Cockles have higher glycogen content (3-5% vs Corbicula\’s 1-2%), making them slightly sweeter. The succinic acid profile is comparable across most bivalve species. For pork crackling, Griebenschmalz (rendered pork lard with cracklings) is sold pre-made at German supermarkets — crush the included cracklings to approximate tóp mỡ.'
    },
    {
      title: 'The Lard Barrier: Why Vegetable Oil Doesn\’t Work',
      description: 'Pork lard solidifies at room temperature (melting point 36-45°C) because its fatty acid profile is 40-45% saturated. When applied to cold rice, the lard re-solidifies into a semi-solid film that provides a more effective moisture barrier than liquid vegetable oil (which remains fluid at room temperature and migrates away from the grain surface). The lard\’s phase behavior — liquid when applied warm, semi-solid within 2-3 minutes on cold rice — is the mechanism that makes the moisture barrier stable. Coconut oil (melting point 24°C) is the best vegetarian substitute for this specific function.'
    },
    {
      title: 'Crackling Freshness Window',
      description: 'Tóp mỡ\’s glass-state crunch lasts exactly 3-4 minutes after contact with the moist rice surface. The moisture front advances at approximately 1mm per minute through the porous crackling structure, progressively converting glassy protein-collagen back to rubbery. Eat all crackling pieces within the first 5 minutes. Store unused cracklings separately from the bowl in a dry container — they hold their crunch for 2-3 days if kept below 40% relative humidity.'
    }
  ],

  nutrition: {
    calories: 540,
    protein: '24g',
    carbs: '58g',
    fat: '24g',
    fiber: '4g'
  },

  conclusion: `Cơm Hến is the Vietnamese dish that proves cold rice is not a mistake but a MATERIAL SCIENCE ADVANTAGE — overnight retrogradation transforms amorphous starch into crystalline armor that resists the moisture assault of twelve condiments, maintaining individual grain integrity through an entire meal of combinatorial experimentation. The baby clams contribute a succinic acid + glycine + alanine flavor signature that activates receptor populations untouched by conventional umami seasoning. The pork crackling exists in a race against time — its glass-state crunch degrading with every passing minute of moisture exposure, creating an urgency that drives the meal\’s tempo. And the twelve-condiment self-assembly format transforms eating from passive consumption into active FLAVOR DESIGN, with over half a million possible configurations ensuring that monotony is mathematically impossible. When you tilt the empty bowl to drink the final liquid at the bottom — a concentrate of clam broth, dissolved condiment residues, and starch-released sugars — you taste the AGGREGATE MEMORY of every combination you built during the meal, compressed into a single sip. This is Đà Nẵng\’s answer to the question that drives all great cooking: how do you make the simplest ingredients — cold rice, tiny clams, rendered fat — produce an experience of infinite variety? You give the eater the tools and let combinatorics do the rest.`
};

export default function ComHenDaNangPage() {
  return <RecipeLayout recipe={recipe} />;
}
