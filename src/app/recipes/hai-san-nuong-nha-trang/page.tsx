'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'hai-san-nuong-nha-trang',
  title: `Hải Sản Nướng Nha Trang (Charcoal-Grilled Seafood Platter — Nha Trang Night Market)`,
  subtitle: `The Nha Trang night: a charcoal grill glowing on the sidewalk, the bay's dark water behind it, and on the grate: sò điệp nướng mỡ hành (scallops with scallion oil), mực nướng sa tế (squid with satay), tôm hùm nướng phô mai (lobster with cheese), and nghêu nướng mỡ hành (clams with garlic butter) — each species grilled in its own SHELL, the shell as both cooking vessel and serving plate, the mỡ hành (scallion oil) sizzling in the half-shell's cup as the charcoal's radiant heat cooks the protein from below. The Vietnamese coast's most THEATRICAL food format and the collection's final recipe for Khánh Hòa.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '45 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/hai-san-nuong-nha-trang.jpg',
  intro: `The hải sản nướng — grilled seafood — is not a recipe in the single-dish sense. It is a FORMAT: a charcoal grill, a selection of marine species, and a set of TOPPINGS (mỡ hành, sa tế, phô mai, bơ tỏi) that the eater chooses per-species. The format is Nha Trang's NIGHT ECONOMY — the sidewalk grills that light up at sundown along Trần Phú beach road, each grill displaying its species-selection on ice (the eater points at the species, names the topping, and the griller cooks to order), and the eating happens at plastic tables 2 metres from the grill, the bay's waves audible between bites.

The format's genius is the SHELL-AS-VESSEL principle: each species is grilled IN ITS OWN SHELL (the scallop on its half-shell, the clam in its opened shell, the oyster on its cup, the lobster in its halved carapace), and the shell serves FOUR simultaneous functions:

COOKING VESSEL: the shell's concave interior holds the topping (mỡ hành, butter, cheese) in a POOL that the charcoal's heat warms from below. The topping SIMMERS in the shell-cup (the shell's calcium carbonate conducts heat at roughly 2-3 W/m·K — faster than terracotta's 0.6-1.0 but slower than metal's 50+, producing a moderate, even heat that simmers the topping without burning it). The protein sits IN the simmering topping, cooking simultaneously from: BELOW (the charcoal's radiant heat through the shell) and ABOVE (the hot topping's convective heat from the pool of sizzling oil/butter/cheese). The dual-direction cooking produces a protein that is: evenly cooked (no raw-underneath/charred-on-top — both surfaces reach temperature simultaneously) and TOPPING-INFUSED (the protein's surface absorbs the mỡ hành or the butter or the cheese during the 3-5 minute cooking, and the infusion is deeper than a post-cooking drizzle because the hot topping is in contact with the protein for the entire cooking duration).

SERVING PLATE: the shell goes from the grill directly to the eater's table — no transfer to a plate, no lost juices, no cooling during plating. The eater receives the species IN THE SHELL IT LIVED IN, the shell still sizzling, the topping still bubbling, the protein still cooking in the residual heat. The shell is the most ZERO-WASTE serving vessel in any cuisine — the shell that protected the animal in life serves the animal in death.

FLAVOUR CONTRIBUTOR: the shell's calcium carbonate, when heated to 200°C+ by the charcoal's radiant heat, undergoes a mild THERMAL DECOMPOSITION at the shell's thinnest points (the shell-lip, the hinge area), releasing trace CO₂ and producing a faint, MINERAL, LIMESTONE-LIKE aroma that transfers to the topping and the protein. The shell-mineral aroma is subtle (detectable only at close range, when the nose is 5-10 cm from the sizzling half-shell) but SPECIFIC — it is the smell of heated seashell, a smell the coastal Vietnamese associate with "ocean food on fire," and a smell no metal pan or ceramic plate produces.

PORTION CONTROL: each half-shell contains EXACTLY ONE PORTION of the species — one scallop muscle in one half-shell, one cluster of clam-meat in one opened shell, one lobster tail in one halved carapace. The shell IS the portion-size, determined by the animal's own body-size, and the eater orders in SHELL-COUNTS ("three scallops, two clams, one lobster") rather than in grams. The ordering-by-shell is the night-market's commerce format, and the format is intuitive because the shell IS the unit.`,
  ingredientSections: [
    {
      title: 'The species — choose your shells',
      items: [
        { amount: 8, name: 'sò điệp (scallops), on half-shell, cleaned', note: `The night market's MOST POPULAR species — the scallop's flat half-shell is the ideal grilling vessel (wide, stable, holds 1-2 tbsp of topping). The adductor muscle sits in the shell-cup like a white disc in a concave plate.` },
        { amount: 500, unit: 'g', name: 'nghêu (clams), scrubbed, or hàu (oysters), shucked to half-shell' },
        { amount: 2, name: 'mực (squid), whole, cleaned, scored (not in shell — the squid is the FORMAT EXCEPTION: no shell, grilled directly on the grate, the scored mantle curling and charring)' },
        { amount: 1, name: 'tôm hùm (lobster), 400-600 g, halved lengthwise (the premium — the halved carapace as vessel, the tail-meat and claw-meat exposed)', note: `Optional — the luxury tier. Many night-market tables order everything EXCEPT the lobster (the lobster is 3-5x the price of the other species combined), and the meal is complete without it.` },
        { amount: 8, name: 'tôm sú (tiger prawn), shell-on (the middle tier — grilled on the grate, shell-on, the shell crisps to edible chitin-crunch)' },
      ],
    },
    {
      title: 'Mỡ hành (scallion oil — the DEFAULT topping)',
      items: [
        { amount: 100, unit: 'ml', name: 'neutral oil' },
        { amount: 6, name: 'scallions, sliced fine (white and green parts separated)' },
        { amount: 3, name: 'cloves garlic, minced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
      ],
    },
    {
      title: 'Alternative toppings',
      items: [
        { amount: 3, unit: 'tbsp', name: 'sa tế (satay chili paste) + oil — for mực nướng sa tế', note: `The SPICY option: sa tế's dried-shrimp + chili + lemongrass + garlic paste, dissolved in oil, ladled onto the squid during grilling. The sa tế's capsaicin + the squid's inosinate = a hot-savoury combination the beer demands.` },
        { amount: 100, unit: 'g', name: 'phô mai (cheese — processed cheese slices or mozzarella), grated — for tôm hùm nướng phô mai', note: `The MODERN topping — the lobster-with-cheese format appeared in the 2000s-2010s as Nha Trang's tourism economy globalised the night-market menu. The cheese melts over the lobster's exposed tail-meat, forming a bubbly, golden, Maillard-crusted cap that is: a fusion the purist rejects and the tourist adores, and that has become Nha Trang's most-photographed night-market image.` },
        { amount: 50, unit: 'g', name: 'bơ tỏi (garlic butter) — butter + minced garlic, for nghêu/hàu', note: `The FRENCH-Vietnamese option: butter in the shell-cup, garlic sizzling in the butter, the French technique in the Vietnamese shell.` },
        { amount: 50, unit: 'g', name: 'đậu phộng rang (roasted peanuts), crushed — scattered on scallops after grilling' },
      ],
    },
    {
      title: 'Condiments and sides',
      items: [
        { amount: 1, name: 'muối tiêu chanh (salt + pepper + lime) — the 12th appearance' },
        { amount: 1, name: 'muối ớt xanh (green chili salt)' },
        { amount: 4, name: 'limes, in wedges' },
        { amount: 4, name: 'cold beers (bia — Saigon Xanh, Tiger, 333 — the night-market pairing)', note: `The beer is not optional — the hải sản nướng format is INSEPARABLE from cold beer at the Vietnamese night market. The beer's carbonation (CO₂ effervescence) scrubs the tongue's oil-film between bites (the mỡ hành and the butter coat the tongue in a lipid layer, and the beer's carbonic acid + the mechanical scrubbing of the bubbles dissolve the film and reset the palate for the next shell). The beer is the FORMAT'S PALATE-CLEANSER.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the mỡ hành, prep the species, fire the charcoal — the grill assembles',
      description: `MỠ HÀNH: heat the oil in a small pan. Add the garlic — fry 30 seconds until golden (the allicin→ajoene conversion, the same sweet-garlic-oil every mỡ hành in the collection has produced). Add the scallion WHITES (the white part is hardier and can withstand the oil's heat — the green part, added later, wilts instantly in hot oil and would turn brown-bitter if fried). Fry the whites 30 seconds. Off heat. Add the scallion GREENS (the residual heat wilts them gently, preserving their bright-green colour and their fresher, sharper allium aroma — the greens carry more of the volatile allyl sulfides that the heat-stable whites have already lost). Add fish sauce, sugar, pepper. Stir. The mỡ hành is: GREEN-FLECKED OIL (the green scallion pieces floating in the golden, garlic-fragrant oil), SAVOURY-SWEET (the fish sauce + sugar), and carrying the DUAL-ALLIUM aroma (the cooked-whites' mellow-sweet + the raw-greens' sharp-fresh — two aromatic registers from one vegetable, separated by a 30-second cooking-time-offset).

PREP THE SPECIES:

SCALLOPS: ensure each scallop muscle is detached from the flat half-shell's interior (run a knife under the muscle — the muscle is attached by a small tendon that the knife severs). The muscle now sits LOOSE in the half-shell cup — free to absorb the mỡ hành from all sides.

CLAMS: scrub, purge (1 hr in salted water). They will OPEN on the grill — the heat kills the adductor muscle that holds the shells closed, and the shells spring open, revealing the meat inside.

SQUID: score the mantle in a cross-hatch pattern (3 mm deep, 1 cm spacing — the same scoring the lẩu hải sản documented for accelerated heat-transfer and the aesthetic curling).

LOBSTER (if using): halve lengthwise with a heavy knife through the head and the tail. Clean the head-cavity (remove the stomach sac and the gills — the grey, feathery gills are bitter; the green tomalley is edible and prized). The halved lobster: the tail-meat exposed, the claw-meat accessible, the halved carapace forming a BOAT-SHAPED VESSEL that will hold the cheese or the mỡ hành.

FIRE: light the charcoal grill. Let the coals burn to glowing embers — no flame, just radiant heat. The grill-surface temperature: 250-350°C directly over the embers (the species sit at different heights and positions to calibrate their species-specific cooking times — the scallops, which cook fastest, go at the grill's EDGE where the heat is lower; the lobster, which needs the most time, goes at the CENTRE where the heat is highest).`,
      tip: `The SHELL-AS-VESSEL's thermal properties differ by species: the SCALLOP shell (thin, flat, 1-2 mm — heats fast, the muscle cooks in 3-4 minutes) vs the LOBSTER carapace (thick, curved, 3-5 mm — heats slowly, the tail-meat needs 8-10 minutes). The shell's THICKNESS determines the cooking time — thicker shell = more thermal mass to heat = slower heat-transfer to the protein = longer cooking. The night-market griller knows each species' shell-thickness intuitively and places them on the grill accordingly: thin-shelled species first (they'll be done when the thick-shelled species, placed simultaneously, are halfway). The shell IS the timer — the experienced griller reads the shell's temperature (by the sizzle-intensity of the topping in the shell-cup) rather than watching a clock.`,
    },
    {
      title: 'Grill species by species, topping by topping — the night market\'s choreography',
      description: `THE GRILL SESSION (the night-market griller works 5-8 species simultaneously across a 50-80 cm charcoal grill, but for the home cook, work in waves):

SÒ ĐIỆP NƯỚNG MỠ HÀNH (scallop with scallion oil) — THE ICON:
Place the scallops-on-half-shell on the grill. Spoon 1 tbsp of mỡ hành into each shell-cup — the oil pools around the scallop muscle, and the charcoal's heat begins warming the oil from below through the shell. Within 60 seconds: the mỡ hành SIZZLES — the oil reaches 150-160°C in the shell-cup (the shell's thermal conductivity transfers the charcoal's heat to the oil steadily), and the scallion pieces in the oil begin to fry IN THE SHELL (the shell is a tiny FRY-PAN, and the mỡ hành is frying on the grill, in the shell, on top of the scallop — a FRY-IN-A-GRILL, a technique-within-a-technique).

At minute 2-3: the scallop muscle's surface, immersed in the sizzling mỡ hành, begins to turn OPAQUE-WHITE (the myosin denaturing at 55-60°C — the scallop's narrow-window cooking the lẩu hải sản documented). The muscle's underside (touching the shell's heated interior) receives direct conducted heat and cooks slightly FASTER than the top (which cooks via the simmering oil's convective heat). At minute 3-4: the muscle is: white throughout, firm-but-tender, the mỡ hành's garlic-scallion infused into the surface (the 3-4 minute simmering-contact time has allowed the oil's fat-soluble allyl sulfides to penetrate 1-2 mm into the muscle's surface).

FINISH: scatter crushed peanuts on top (the crunch — the dry, Maillard-toasted peanut providing the textural contrast the soft, oil-poached scallop needs). Squeeze a lime wedge over (the citric acid brightens the oil's richness). Serve IN THE SHELL — the shell goes from grill to table, still sizzling, the mỡ hành still bubbling, the scallop still cooking in the residual heat. EAT WITH A SPOON — scoop the muscle + the mỡ hành + the peanuts from the shell-cup in one spoonful. The spoonful: SOFT scallop (glycine-sweet, oil-infused, just-cooked tender), CRUNCHY peanut, SIZZLING mỡ hành (the garlic-scallion oil, hot, savoury, the dual-allium aroma at full volume), and the SHELL'S MINERAL (the faint, limestone, heated-calcium-carbonate background, detectable as a warm, ocean-mineral note beneath the garlic's sweetness).

MỰC NƯỚNG SA TẾ (squid with satay):
Brush the scored squid with sa tế-oil. Place DIRECTLY on the grate (no shell — the squid is the grill's only shell-less species). Grill 90 seconds per side — the scored surface CURLS (the scores' cuts allow the mantle's muscle-layers to contract independently, and each square between the scores curls upward, producing the FLOWER-LIKE opening that the grilled-squid's visual is famous for). The sa tế's chili-oil chars at the curl's tips (producing tiny, dark, capsaicin-concentrated, charred-spice dots on the squid's surface — the HOTTEST points of the hottest species on the grill). Slice into rings. Dip in muối tiêu chanh.

TÔM HÙM NƯỚNG PHÔ MAI (lobster with cheese — the modern fusion):
Place the halved lobster on the grill, cut-side UP (the carapace-bottom faces the fire, the exposed tail-meat faces the sky). Spoon mỡ hành into the cavity first — simmer 3 minutes (the mỡ hành infuses the meat). Then: lay grated cheese across the exposed tail-meat — the cheese melts in 60-90 seconds (the combined heat from the grill below and the hot mỡ hành beneath the cheese), and the melted cheese BUBBLES (the whey proteins in the cheese Maillard-brown at the surface, producing a golden, bubbly, gratin-like crust on the lobster's tail). Total: 8-10 minutes. The lobster arrives at the table: the carapace-boat sizzling, the tail-meat under a golden cheese-crust, the mỡ hành pooling in the cavity's corners, and the presentation is: DRAMATIC (the halved lobster is the largest single piece on the table, the cheese-crust glows golden under the night-market's lights, and the table photographs it before eating it — the lobster-cheese is Nha Trang's most-Instagrammed night-market image).

NGHÊU NƯỚNG BƠ TỎI (clams with garlic butter):
Place the clams on the grill — closed shells directly on the grate. Within 2-3 minutes: the heat kills the adductor muscle and the shells SPRING OPEN (the clam's opening is the grill's most DRAMATIC visual micro-event — the shells pop open with a faint click, revealing the steaming meat inside, and each pop is a tiny announcement: "I'm done"). Immediately spoon bơ tỏi (garlic butter) into each opened shell — the butter melts on contact with the hot shell and the hot meat, the garlic sizzles, and the clam sits in a pool of garlic-butter-and-its-own-briny-liquor (the clam's body-fluid, released during cooking, mixing with the butter to produce a BEURRE-DE-MER: a butter-and-seawater emulsion that is: salty, buttery, garlicky, briny — a French technique accidentally invented by a Vietnamese night-market griller who put butter in a clam shell and let the ocean's salt do the seasoning).

THE NIGHT: the table fills with shells — scallop half-shells (empty, the mỡ hành licked clean), squid rings (the sa tế's red oil staining the plate), the lobster carapace (the cheese-crust scraped to the last molecule), clam shells (the garlic-butter pools drained with a spoon) — and the beer bottles accumulate beside the shells (the CO₂ resetting the palate between species, the alcohol releasing the evening from the day's restraint), and the bay's water reflects the night-market's lights, and the charcoal's glow is the kitchen, and the sidewalk is the restaurant, and the shells on the table are the ocean's invoice, and the invoice is paid in pleasure.

TEN KHÁNH HÒA DISHES, ONE BAY: bún cá (the ocean's noodle soup), bánh căn (the Cham's clay-mould griddle), nem nướng Ninh Hòa (the pounded-bouncy sausage), lẩu hải sản (the 7-species hotpot), bánh xèo (the crunch-engineered mini-pancake), ốc hương (the luxury gastropod), bò lá lốt (the Piper-family wrapper), chè yến sào (the bird's-saliva texture), bánh ướt Diên Khánh (same batter, two fates), and now the hải sản nướng (the shell-as-vessel, the night-market theatre). Ten dishes, one coastline, one bay, and the bay's gift to the table is: the shell — the container the ocean built, the vessel the griller heats, the plate the eater empties, and the evidence, piled on the table at midnight, that the ocean was generous and the night was long.`,
      tip: `Muối tiêu chanh's TWELFTH appearance (adding sò điệp and mực from this recipe to the running count) extends the collection's universal-condiment tally: twelve proteins across all categories, all cooking methods, all price points. But the hải sản nướng format reveals the trio's LIMITATION: the night-market table offers muối tiêu chanh AND muối ớt xanh (green chili salt — a Khánh Hòa-specific variant where bird's-eye chili is pounded with salt and lime into a bright-green, intensely hot, chili-forward paste). The green-chili salt adds CAPSAICIN (which the black-pepper trio's piperine approximates but does not replicate — capsaicin activates TRPV1 at a different binding site than piperine, producing a HOTTER, more SUSTAINED, more BURNING sensation than pepper's milder warmth). The night market therefore offers BOTH condiments because NEITHER alone covers the full receptor-range: the trio covers ENaC + TRPV1-piperine + PKD2L1, and the green-chili-salt adds TRPV1-capsaicin at a higher activation intensity. The two together: the COMPLETE SET for the coast's seafood.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
