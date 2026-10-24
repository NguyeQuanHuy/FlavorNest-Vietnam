'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'lau-hai-san-nha-trang',
  title: `Lẩu Hải Sản Nha Trang (Seafood Hotpot — Nha Trang Bay's Ocean Feast)`,
  subtitle: `A bubbling pot of lemongrass-ginger-tomato broth set on the table, surrounded by platters of the South China Sea's finest: tôm hùm (lobster), mực (squid), sò điệp (scallops), nghêu (clams), cá mú (grouper), tôm sú (tiger prawn) and rong biển (seaweed) — each one dipped into the broth for its species-specific cooking time, from the squid's 15-second flash to the lobster's 5-minute simmer, and the broth improving with every protein's contribution until the final noodle course swims in the ocean's accumulated essence.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/lau-hai-san-nha-trang.jpg',
  intro: `Nha Trang's geography IS its menu: the city sits on a bay dotted with islands, the fishing fleet docks at the harbour 500 metres from the restaurant strip, and the seafood on the hotpot table was alive in the ocean 4-6 hours before. The lẩu hải sản (seafood hotpot) is the bay's celebration format — the meal that says "we are on the coast, the ocean is 100 metres away, and the ocean's protein is on this table in seven species."

The lẩu hải sản is the collection's most BIODIVERSITY-DENSE pot — more species per meal than the lẩu mắm (which uses many vegetables but principally cá lóc, shrimp, squid and pork — 4 animal proteins), more than the lẩu lá rừng (which uses many leaves but principally chicken and beef — 2 animal proteins), and approaching a marine TASTING MENU: each species contributes a DIFFERENT amino-acid profile, a DIFFERENT inosinate/glutamate ratio, a DIFFERENT texture, and a DIFFERENT optimal cooking time. The hotpot format — communal, self-service, each eater cooking at the table — requires the eaters to KNOW their species: dip the squid for 15 seconds and it is tender; dip it for 60 seconds and it is rubber. Dip the lobster for 5 minutes and it is perfect; dip it for 2 minutes and it is raw inside. The species-knowledge is the skill, and the skill is the coast's education.

THE BROTH starts light and finishes heavy — the SELF-IMPROVING principle the lẩu mắm and the lẩu lá rừng documented, here applied to OCEAN proteins:

STARTING BROTH: a clear, light, lemongrass-ginger-tomato base — similar to the bún cá Nha Trang's foundation but thinner, less concentrated, designed to be a CANVAS rather than a finished painting (the broth's initial glutamate is roughly 200-300 mg/L, moderate, not overwhelming — the canvas needs to be light enough to show the proteins' contributions).

AS THE SESSION PROGRESSES (45-60 minutes of dipping): each protein species ENRICHES the broth with its specific amino acids and nucleotides:

THE CLAMS (nghêu): opened in the first 5 minutes, releasing their briny, NaCl-rich LIQUOR (the clam's body-fluid, concentrated seawater at 2-3% salinity, carrying dissolved glycine-betaine — the compound that gives shellfish their specific "SWEET-OCEANIC" taste that finfish does not carry). The clam-liquor salts and sweetens the broth.

THE SHRIMP (tôm sú): peeled and dipped at minute 10-15, releasing GLYCINE (the crustacean's sweetness-amino-acid, at 0.5-1% of the shrimp's flesh weight) and INOSINATE (the nucleotide that synergises with the broth's glutamate — the first synergy-boost).

THE FISH (cá mú, grouper): sliced and dipped at minute 15-20, releasing INOSINATE at higher concentration than the shrimp (finfish inosinate content: 200-300 mg/100g, roughly 2-3x the shrimp's 80-120 mg/100g), plus the fish's collagen (which dissolves into the broth as gelatin, thickening it — the broth that started thin now begins to coat the lip).

THE SQUID (mực): dipped in 15-second flashes throughout the session, releasing TAURINE (the sulfur-amino-acid abundant in cephalopod muscle — taurine contributes a faint, sweet, slightly sulfurous note that is the squid's specific flavour-contribution to the broth, unmatched by any other protein).

THE LOBSTER (tôm hùm): the finale — the whole lobster halves simmered for 5 minutes, releasing the RICHEST contribution: the hepatopancreas's concentrated glutamate (the tomalley, the same organ the steamed-shrimp's head-suck delivered, here at lobster-scale — 5-10x the shrimp's volume), the shell's astaxanthin (colouring the broth orange-red), and the shell's chitin-derived N-acetylglucosamine (contributing a faint sweetness and a slight thickening).

BY MINUTE 45: the broth has transformed from a light, clear, 200-300 mg/L-glutamate canvas to a DARK, RICH, 800-1,200 mg/L-glutamate, gelatin-thickened, multi-species OCEAN STOCK that carries the accumulated contributions of 6-7 species. The transformation is VISIBLE (the colour darkens from pale-gold to amber-orange), TACTILE (the viscosity increases from water-thin to lip-coating), and TASTING (a spoonful of the minute-45 broth is dramatically more complex, more savoury, more oceanic than a spoonful of the minute-0 broth — the improvement is measurable and unmistakable).

The NOODLE COURSE (bún or mì) goes in at minute 45 — the noodles cook in the ocean's accumulated essence, each strand absorbing the multi-species broth, and the final bowl is the RICHEST, MOST COMPLEX noodle course in any hotpot in the collection.`,
  ingredientSections: [
    {
      title: 'The starting broth',
      items: [
        { amount: 2.5, unit: 'L', name: 'water' },
        { amount: 3, name: 'stalks lemongrass, bruised' },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
        { amount: 3, name: 'tomatoes, quartered' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, name: 'dried squid piece (15 g — the Teochew depth-note the hủ tiếu documented)' },
        { amount: 2, name: 'dried red chilies' },
      ],
    },
    {
      title: 'The seven species — the ocean\'s platters',
      items: [
        { amount: 1, name: 'tôm hùm (lobster), 400-600 g, halved lengthwise', note: `The FINALE species — cooked last (5 min), richest contribution (hepatopancreas glutamate, shell astaxanthin). The lobster's halved body goes into the broth cut-side-down, the tomalley dissolving directly into the liquid.` },
        { amount: 300, unit: 'g', name: 'tôm sú (tiger prawn), shell-on, deveined' },
        { amount: 300, unit: 'g', name: 'mực (squid), cleaned, scored, cut into rings and tentacles', note: `SCORED (cross-hatch, 3 mm deep) — the scoring increases the surface area for heat penetration (the squid's thick mantle muscle cooks from the surface inward, and the scoring creates channels that accelerate the heat transfer by 3-5x, reducing the cooking time from 30-40 sec to 15-20 sec). 15 SECONDS — the squid's myosin denatures at 55-60°C and the collagen contracts at 65-70°C; at 15 sec the myosin is set (tender) but the collagen has not yet contracted (no rubberiness). At 30+ sec: the collagen contracts, squeezes water from the muscle, and the squid becomes RUBBER. The window is narrow.` },
        { amount: 300, unit: 'g', name: 'sò điệp (scallops), cleaned, on half-shell or shelled' },
        { amount: 300, unit: 'g', name: 'nghêu (clams), scrubbed, soaked in salted water 1 hr to purge sand' },
        { amount: 300, unit: 'g', name: 'cá mú (grouper) fillet, sliced 5 mm', note: `Firm white fish — the grouper's dense, collagen-rich flesh holds together in the hotpot without flaking apart (softer fish like sole or tilapia disintegrate in the broth's turbulence). Alternative: cá chẽm (barramundi), cá hồng (red snapper).` },
        { amount: 100, unit: 'g', name: 'rong biển (seaweed — rau câu or rong nho / sea grapes)', note: `Rong nho (Caulerpa lentillifera, sea grapes): tiny, green, vesicle-clustered seaweed that POPS on the tongue — each 2-3 mm sphere bursts under the tooth, releasing a salty, oceanic, slightly vegetal juice. The sea grape's vesicle-burst is the MARINE version of the pomelo's vesicle-burst — same mechanism (turgor-maintained capsule that ruptures under bite-force), different kingdom (algae vs citrus), different flavour (salty-oceanic vs sweet-citrus).` },
      ],
    },
    {
      title: 'The vegetable and noodle course',
      items: [
        { amount: 200, unit: 'g', name: 'rau muống (water spinach)' },
        { amount: 100, unit: 'g', name: 'nấm (mushrooms — enoki, oyster or king oyster)' },
        { amount: 100, unit: 'g', name: 'bắp ngô non (baby corn)' },
        { amount: 100, unit: 'g', name: 'đậu hũ non (soft tofu), cubed' },
        { amount: 400, unit: 'g', name: 'mì tươi (fresh egg noodles) or bún (rice vermicelli) — the final course' },
        { amount: 30, unit: 'g', name: 'hành lá (scallion) + ngò (cilantro) — final garnish' },
        { amount: 4, name: 'limes' },
        { amount: 3, name: 'chilies, sliced' },
      ],
    },
    {
      title: 'Dipping sauces (choose or offer all)',
      items: [
        { amount: 1, name: 'muối tiêu chanh (salt + pepper + lime)' },
        { amount: 1, name: 'muối ớt xanh (green chili salt — the Nha Trang version: bird\'s-eye chili pounded with salt and lime)' },
        { amount: 1, name: 'nước mắm gừng (ginger fish sauce)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the starting broth, arrange the species platters — the ocean sets the table',
      description: `BROTH: bring 2.5 L water to a boil with lemongrass, ginger, tomato, dried squid, dried chili, fish sauce, sugar and salt. Simmer 15 minutes — the tomatoes dissolve (orange-amber colour, citric acid contribution), the lemongrass releases citral (the brightness), and the dried squid releases its TMAO→TMA smoky-oceanic depth (the same Teochew broth-signature the hủ tiếu documented). Strain the lemongrass and dried squid (their jobs are done). The broth is now: LIGHT, CLEAR, AROMATIC — a canvas, not a painting.

Transfer to the hotpot burner at the table. Bring to a gentle, continuous bubble.

ARRANGE THE PLATTERS: the seven species on separate plates around the pot — each species on its own plate, each plate labelled (or the host explains to the guests which species is which and how long each one cooks):

CLAMS — 3-4 minutes (drop in the broth, lid on, wait until they OPEN — an unopened clam after 5 minutes is dead-before-cooking and should be DISCARDED, never forced open).

SHRIMP — 2-3 minutes (shell-on: the shell turns orange-pink, the flesh curls to a C — the same C-curve-vs-O-curl the tôm Đầm Vạc documented. C = done. O = overcooked).

FISH — 2-3 minutes (5 mm slices — the flesh turns opaque-white from translucent in 90-120 seconds; at 3 minutes the slice begins to FLAKE in the broth's turbulence — lift before it disintegrates).

SCALLOPS — 60-90 seconds (the scallop's adductor muscle is LEAN and LOW-COLLAGEN — it overcooks from tender to rubbery FASTER than any other species in the pot. 60 sec for a 1 cm thick scallop = the myosin sets but the collagen has not contracted. 120 sec = rubber. The scallop's window is the NARROWEST of the seven species).

SQUID — 15-20 seconds (the scored rings: dip in, count to 15, PULL OUT. The scoring's accelerated heat-transfer means the myosin sets throughout the 3-4 mm wall thickness in 15 seconds. The mantra: "in-fifteen-out" — the Nha Trang squid-dipper's timing phrase).

LOBSTER — 5 minutes (the halved body goes in cut-side-down; the lid goes on; 5 minutes of simmering cooks the dense claw-meat to 74°C+ and the tail-meat to 68-72°C. The hepatopancreas dissolves into the broth during this simmer — the tomalley's concentrated glutamate is the broth's FINAL ENRICHMENT).

SEA GRAPES — 10-15 seconds (a quick dip in the warm broth to warm the vesicles slightly but NOT to cook them — the sea grape's turgor-crunch collapses above 50°C, and the 10-second dip in 95°C broth warms the surface without heating the vesicle's interior above 40°C. Longer = soft, crunchless, deflated sea-weed).`,
      tip: `The seven species' DIPPING TIMES span a 20x range: squid at 15 seconds to lobster at 300 seconds (5 minutes). The range reflects the species' MUSCLE ARCHITECTURE: squid (thin-walled, low collagen, fast-denaturing myosin → cooks in seconds), scallop (single-muscle, low collagen, medium-fast → 60-90 sec), shrimp (exoskeleton-insulated, moderate collagen → 2-3 min), fish (thick fillet, moderate collagen → 2-3 min), clam (shell-enclosed, must reach internal 74°C → 3-4 min), and lobster (thick shell + thick claw-muscle + hepatopancreas that needs full dissolution → 5 min). The ARCHITECTURE determines the TIME, and the time-awareness is the coast-dweller's education — the Nha Trang child who grows up eating hotpot KNOWS the times by age 12, the way the Đắk Lắk child knows the bamboo-tube's rotation interval and the Châu Đốc child knows the mắm's curing months.`,
    },
    {
      title: 'Dip species by species, watch the broth evolve, finish with noodles — the ocean accumulates',
      description: `THE SESSION (45-60 minutes, communal, the table as kitchen):

WAVE 1 (minute 0-10) — CLAMS AND SHRIMP: drop the clams into the bubbling broth first — lid on, 3-4 minutes, the clams open (each opening shell releases a 5-10 ml burst of liquor — the seawater-concentrated, glycine-betaine-rich body-fluid that SALTS and SWEETENS the broth simultaneously). Lift the opened clams to individual bowls. Dip the shrimp — 2-3 minutes, the shells turning orange, the glycine dissolving into the broth. The broth after wave 1: slightly SALTIER (the clam-liquor's NaCl), slightly SWEETER (the shrimp's glycine), and carrying the first COLOUR SHIFT (the shrimp-shell's astaxanthin tinting the broth from pale-gold to faint-orange).

WAVE 2 (minute 10-25) — FISH AND SCALLOPS: dip the grouper slices — 2-3 minutes each, the flesh whitening, the collagen dissolving. The broth THICKENS slightly (the fish-collagen → gelatin contribution). Dip the scallops — 60-90 seconds each, quick in-out (the narrow window). The scallop's contribution: a burst of SUCCINIC ACID (the dicarboxylic acid that gives shellfish their specific "savoury-tart" undertone, distinct from glutamate's "savoury-sweet" — the two savouriness-types coexist in the broth and are perceived as DEPTH).

Scatter mushrooms and baby corn into the broth between protein-dips — the mushrooms contribute GUANYLATE (the third nucleotide alongside inosinate and glutamate — the TRIPLE-UMAMI SYNERGY: glutamate × inosinate × guanylate produces a perceived umami intensity roughly 30x greater than any single compound alone, the most powerful umami-multiplication documented in the food-science literature, and the lẩu hải sản's broth, by minute 25, carries all three).

WAVE 3 (minute 15-30 ongoing) — SQUID FLASHES: throughout the session, the diners dip scored squid rings for 15-second flashes — the squid is eaten immediately (the "in-fifteen-out" cycle), and each dip leaves behind a trace of taurine and a trace of squid-inosinate that accumulates over the session's 10-15 squid-dips.

Add rau muống and tofu between waves — the vegetables absorb the enriching broth (the rau muống's hollow stems fill with the multi-species liquid, each stem becoming a BROTH-DELIVERY TUBE the eater bites and releases a warm, ocean-complex mouthful).

WAVE 4 (minute 30-40) — THE LOBSTER: the finale. Lower the halved lobster into the broth, cut-side-down. Lid on. Simmer 5 minutes. The lobster's contributions flood the broth: the hepatopancreas dissolves (the green-grey tomalley liquefies, releasing its concentrated glutamate — 300-500 mg/100g — into the broth in a single, final, massive umami-dose), the shell leaches astaxanthin (the broth turns from faint-orange to VIVID ORANGE-RED — the colour shift is dramatic, visible in real-time as the lobster-shell's pigment dissolves), and the claw-meat releases its own inosinate (the final nucleotide-contribution). Lift the lobster. Crack the claws at the table — the meat inside: white, firm, sweet, steaming, the ocean's premium protein.

THE BROTH AT MINUTE 40: taste it — the transformation from minute-0 is DRAMATIC. The broth is: DARK AMBER-ORANGE (6 species' pigments accumulated), THICK (the fish-gelatin + the lobster-shell compounds + the mushroom's dissolved cell walls — the broth coats the spoon and drips slowly), and carrying the TRIPLE-UMAMI (glutamate from tomato + clam + lobster-tomalley; inosinate from shrimp + fish + squid + lobster; guanylate from mushrooms — the three nucleotide types synergising at 30x intensity). A spoonful is: OCEANIC (the accumulated iodine, bromophenols, glycine-betaine and taurine from 6 marine species), SWEET (the glycine from the shrimp + the glycine-betaine from the clams, the crustacean-and-bivalve sweetness compound pair), SAVOURY (the triple-umami, at saturating concentration — the tongue's mGluR1 receptors are fully activated), and THICK (the gelatin-and-extract body, coating the lip for 10-15 seconds after the spoonful).

NOODLE COURSE: drop the mì tươi (or bún) into the evolved broth. Cook 2-3 minutes. Ladle into bowls — the noodles swimming in the ocean's accumulated essence, each strand coated in the amber-orange, thick, triple-umami, 6-species broth. Scatter scallion and cilantro. Squeeze lime.

THE LAST BOWL is the BEST BOWL — the same self-improving principle the lẩu mắm and the lẩu lá rừng documented, here at the collection's widest species-diversity: 6-7 marine species contributed to the broth that the noodle absorbs, and the noodle-bowl at minute 45 is a SUMMARY of the ocean — every species' amino acids, every species' nucleotides, every species' collagen and pigment, concentrated into a single bowl of noodles that tastes of the entire South China Sea compressed into a cup.

Lẩu hải sản Nha Trang is the Khánh Hòa collection's most ABUNDANT dish — the dish with the most species (7), the most species-specific dipping times (15 sec to 5 min), the strongest self-improvement ratio (broth umami increases roughly 4-6x over the session), and the most direct relationship between GEOGRAPHY and PLATE: the bay is 100 metres from the table, the fleet is 500 metres, the fish was alive this morning, and the pot is the bay's autobiography, written in seven species over 45 minutes.`,
      tip: `The TRIPLE-UMAMI SYNERGY (glutamate × inosinate × guanylate) documented in the lẩu hải sản's evolved broth is the food-science literature's most POWERFUL taste-amplification: each pair (glutamate + inosinate, or glutamate + guanylate) produces roughly 8-15x perceived umami vs glutamate alone, and the TRIPLE combination (all three present simultaneously) produces roughly 25-30x. The lẩu hải sản's minute-40 broth is one of the few NATURALLY OCCURRING triple-umami liquids (most foods contain only 1-2 of the three nucleotides): the tomato and the clam provide glutamate, the fish and the shrimp and the lobster provide inosinate, and the mushrooms provide guanylate. The combination is not designed — it is EMERGENT: the eaters dip their preferred species in their preferred order for their preferred reasons (taste, texture, tradition), and the triple-synergy assembles itself from the accumulation, and the final broth's extraordinary depth is the ACCIDENT of diversity — the more species in the pot, the more likely all three nucleotides are present, and the more powerful the synergy. The biodiversity IS the flavour.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
