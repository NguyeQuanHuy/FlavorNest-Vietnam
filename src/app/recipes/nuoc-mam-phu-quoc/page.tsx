'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'nuoc-mam-phu-quoc',
  title: `Nước Mắm Phú Quốc (Phú Quốc Fish Sauce — Traditional Barrel-Aged)`,
  subtitle: `Cá cơm — black anchovy, caught at night under lamplight off the island's north coast — layered with sea salt in thousand-litre wooden barrels made from bời lời wood and aged twelve to fifteen months until the fish dissolves entirely into a clear, amber, intensely savoury liquid. The first Protected Designation of Origin in Vietnamese food history, and the ingredient that seasons everything else in this collection.`,
  category: 'APPETIZER',
  difficulty: 'Hard',
  totalTime: '15 months',
  rating: 4.9,
  baseServings: 20,
  heroImage: '/images/recipes/nuoc-mam-phu-quoc.jpg',
  intro: `Every recipe in this collection that calls for fish sauce — and there is not a single savoury recipe that does not — has been calling, implicitly, for this. Nước mắm is to Vietnamese cooking what salt is to French cooking and what soy sauce is to Japanese: the invisible foundation, the seasoning that is present in everything and named in nothing, the ingredient the palate registers as depth rather than as identity. And the fish sauce that Vietnam itself considers the standard — the one against which every other fish sauce in the country is measured, the one that received the European Union's Protected Designation of Origin in 2012, the first Vietnamese food product to hold it — comes from Phú Quốc, an island in the Gulf of Thailand off the coast of Kiên Giang, where the industry runs on two things: anchovy and time.

The fish is cá cơm — the black anchovy, Stolephorus spp. — caught by lamplight from the waters around Phú Quốc and the nearby Thổ Chu and An Thới archipelagos, primarily during the fishing season from April to August when the anchovies school densely and the catch is at its freshest. The fish are small — 5 to 8 centimetres — and they are used whole: head, gut, bone, everything. The gut is not a contamination; it is the enzyme source. The anchovy's own digestive enzymes — trypsin, chymotrypsin, pepsin and their relatives — are what will, over the coming months, break the fish's protein down into free amino acids. The fish, in other words, digests itself.

The barrel is the second protagonist and it is specific to Phú Quốc. Traditional Phú Quốc fish sauce is aged in barrels made from the wood of the bời lời tree (Litsea glutinosa), a tropical hardwood native to the island's forests. Bời lời wood is dense, resinous and aromatic, and it does two things that concrete or plastic cannot: it breathes (its porous structure allows a very slow micro-oxygenation that participates in the ageing chemistry), and it contributes its own volatile and phenolic compounds to the sauce over the months of contact, the way an oak barrel contributes vanillin and tannin to wine and whisky. A Phú Quốc fish sauce aged in bời lời tastes perceptibly different from the same fish sauce aged in a concrete tank — rounder, warmer, more complex — and the traditional producers insist on the wood for this reason, even though the barrels are expensive, finite (the bời lời forests are shrinking), and harder to maintain than stainless steel.

The process is a single-stage, salt-driven, enzymatic hydrolysis that runs for twelve to fifteen months and requires almost no intervention. Fresh anchovies are layered with coarse sea salt — traditionally at a ratio of 3 parts fish to 1 part salt by weight, producing a brine concentration of roughly 25-30% — in the wooden barrels, pressed under bamboo mats with a heavy stone weight, and sealed. For the first three months the enzymes work at their peak rate, and the fish begins to liquefy: the solid mass drops as the protein breaks down, and a dark, thick liquid — the first extraction, the nhất, the premium grade — rises above the solids. The barrel is topped up with brine as the level drops, and the ageing continues through the monsoon and back out the other side. By month twelve the solids have largely dissolved; the liquid is a clear, deep amber with a reddish tint, an aroma that is intensely savoury with no raw-fish sharpness, and a nitrogen content above 30°N — the protein-density measurement that grades Vietnamese fish sauce and that Phú Quốc nhất routinely exceeds 35°N, placing it among the most protein-dense fish sauces in the world.

The first liquid drawn from the barrel — the nhất — is the premium product, sold at the highest price, used in the smallest quantities, and recognisable immediately by its colour (deep reddish-amber, not brown, not pale), its aroma (malty, almost caramel-like, with a savoury depth that registers as umami before it registers as salt), and its taste (intensely savoury, long-finishing, with a faint sweetness and no fishy sharpness — a fingertip on the tongue should taste of the sea without smelling of the dock). After the nhất is drawn, the remaining solids are washed with brine once or twice more to extract second and third pressings — the nhì and the ba — which are progressively lighter, thinner, less complex and less expensive, and which are what most cooking-grade fish sauces on the shelf actually are.

This recipe documents the traditional barrel process — for the record, for the education, and because any collection that has used fish sauce in two hundred recipes owes the ingredient its own page. Home production is not practical (the quantities, the barrel, the time, the climate) and is not recommended. What IS recommended is understanding what you are buying: reading the label for Phú Quốc origin, for nitrogen grade (30°N+ for cooking, 35°N+ for dipping), for a short ingredient list (anchovy, salt — nothing else), and for the colour and clarity that tell you the sauce was aged rather than chemically hydrolysed. The difference between a good fish sauce and a cheap one is the difference between a soy sauce brewed for a year and a soy sauce synthesised in a day, and the difference is in every dish this collection has written.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 30,
          unit: 'kg',
          name: 'cá cơm (black anchovy), fresh, whole, ungutted',
          note: `Caught that day or the day before — freshness is the first quality gate. The fish must smell of clean sea, not of ammonia or rot. In Phú Quốc the catch goes from boat to barrel within hours; a fish that waited two days on ice produces a sauce with a harsh, sharp top note that fifteen months of ageing does not fully remove. Whole and ungutted: the digestive enzymes in the gut are the proteases that drive the hydrolysis. A gutted anchovy ferments more slowly and produces a blander sauce.`,
        },
      ],
    },
    {
      title: 'The salt',
      items: [
        {
          amount: 10,
          unit: 'kg',
          name: 'coarse sea salt (3:1 fish-to-salt ratio by weight)',
          note: `Sea salt, not refined table salt — the minerals in sea salt (magnesium, calcium, potassium) contribute to the sauce's complexity and participate in the enzymatic reactions. The 3:1 ratio produces a brine concentration of roughly 25-30%, which suppresses all pathogenic bacteria while allowing the fish's own salt-tolerant enzymes to operate. Below 20% salt the ferment is unsafe; above 35% the enzymes are inhibited and the hydrolysis stalls. 25-30% is the window, and the ratio that produces it is the ratio Phú Quốc has used for as long as the industry has existed.`,
        },
      ],
    },
    {
      title: 'The barrel',
      items: [
        {
          amount: 1,
          name: 'wooden barrel, 500-1000 L, traditionally bời lời wood (Litsea glutinosa)',
          note: `Bời lời is native to Phú Quốc and is the traditional ageing vessel — its resinous, dense wood contributes phenolic and volatile compounds to the sauce over months of contact. The barrels are coopered by island barrel-makers and seasoned with brine for weeks before first use. A new barrel leaks; a seasoned one does not, because the salt has swollen the wood fibres to a watertight fit. In practice, only island producers use bời lời — elsewhere, food-grade HDPE tanks or concrete vats lined with food-grade coating are the standard, and they produce a clean, correct fish sauce without the wood's contribution. The wood is the terroir.`,
        },
        { amount: 1, name: 'bamboo mat and heavy stone (for pressing the fish under the brine)' },
        { amount: 1, name: 'wooden tap at the barrel base (for drawing the liquid)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Layer fish and salt — the barrel is filled in one day',
      description: `Spread a 5 cm layer of coarse sea salt on the barrel bottom. Layer the fresh, whole anchovies on top — 10 cm of fish, then 3 cm of salt, then 10 cm of fish, then 3 cm of salt — until the barrel is full, finishing with a thick cap of salt on top.

Press a bamboo mat over the surface and weight it with a heavy stone — the weight compresses the fish, excludes air from the surface, and forces the liquid upward as the fish begins to break down.

Seal the barrel with a wooden lid. Set it in a roofed but well-ventilated space — not in direct sun (which would overheat the ferment and produce off-flavours) but not in a cold room (which would slow the enzymes to a crawl). Phú Quốc's producers keep their barrels in open-sided sheds, where the tropical heat (28-35°C average) drives the hydrolysis at exactly the rate tradition expects.

The barrel is not stirred, not opened, not touched for three months. The fish does the work.`,
      tip: `The salt-to-fish layering is not a brine — it is a gradient. Each salt layer draws water osmotically from the fish layer beneath it, creating a locally hypertonic zone at the interface that kills surface bacteria on contact. The resulting brine — a saturated salt solution laden with dissolved protein — migrates downward through the fish mass by gravity, ensuring that every fish is eventually surrounded by a preserving concentration of salt. The layering works from the top down, which is why the top cap of salt is thickest and the barrel is never turned: gravity IS the mixing, and the brine's own weight is the pump. It is the simplest fluid-dynamics system in food production, and it has been running, unchanged, for centuries.`,
    },
    {
      title: 'Wait three months — the fish dissolves, the liquid rises',
      description: `Month 1: the salt draws water from the fish. The barrel's liquid level rises visibly. The fish begins to soften and collapse under the weight. A strong, sharp, unmistakably fishy smell emerges — this is trimethylamine oxide breaking down to trimethylamine, and it is the raw-ferment phase that will mellow over the coming year.

Month 2: the fish mass has dropped significantly. The liquid is dark, opaque, and thick with suspended protein. The enzymes are at peak activity — the barrel is warm, the brine is concentrated, and the protein is being sheared into smaller and smaller peptide fragments. The smell is still strong but beginning to round — less sharp, more savoury.

Month 3: the liquid has clarified somewhat. The fish mass is a compact sludge at the bottom. The first taste — a drop on the tongue, cautiously — reveals intense salt, a deep umami, and the beginnings of the malty-caramel note that distinguishes an aged sauce from a young one. The sauce is not ready. It is a sketch of what it will become. It needs another nine to twelve months.

Do not draw liquid yet. Do not be impatient. Time is the ingredient and it cannot be purchased at any shorter term.`,
      tip: `The enzymatic hydrolysis — the protein → peptide → amino acid breakdown — follows first-order kinetics at a rate governed by temperature, salt concentration and enzyme concentration. At 30°C and 25% salt, Phú Quốc's conditions, the half-life of the intact fish protein is roughly 30-40 days — meaning that half the protein is converted in the first month, half of the remainder in the second, and so on exponentially. By month three, roughly 85-90% of the original protein has been converted to soluble peptides and amino acids. The remaining 10-15% — the most resistant, most cross-linked structural proteins — takes another nine months to break down fully, and those last, slow conversions produce the most complex and the most subtle flavour compounds in the sauce. The first three months make the sauce functional. The last twelve make it excellent.`,
    },
    {
      title: 'Age twelve to fifteen months — the sauce finds itself',
      description: `From month 3 to month 12-15 the barrel sits, undisturbed, in the shed. The enzymatic hydrolysis continues, slower now, working through the resistant proteins. Maillard reactions between the free amino acids and the residual sugars from the fish's glycogen generate the melanoidins that darken the sauce from pale brown to deep reddish-amber and that produce the malty, caramel-like, almost biscuity aroma that defines a properly aged Phú Quốc nước mắm.

The bời lời barrel contributes its own compounds over this period — phenolics, terpenes, subtle resinous notes — that integrate with the fish-derived flavours into a complexity that a plastic tank cannot replicate.

By month 12-15: the liquid is clear, deep amber-red, and when a sample is drawn from the tap at the barrel's base it should be: viscous enough to coat a glass, clear enough to read newsprint through, aromatic enough that a drop on the wrist fills the nose, and savoury enough that a single drop on the tongue floods the palate with umami for ten seconds after the drop is gone. The nitrogen content, if tested (producers test routinely with a Kjeldahl apparatus), should exceed 30°N — 35°N or above for nhất grade.

This is the nước mắm nhất — the first pressing, the premium, the one that goes into dipping sauces and dressings and that is never cooked, because cooking destroys the volatiles that fifteen months of chemistry produced.`,
      tip: `The Maillard reactions that darken and flavour the sauce during the long ageing are the same chemistry this collection has documented in every caramel, every sear, every toasted thính: amino acids + reducing sugars → melanoidins + volatile aromatics. The difference is the timescale. A caramel reaches Maillard in minutes at 160°C. A seared steak reaches it in seconds at 200°C. Fish sauce reaches it in months at 30°C. The chemistry is identical — the same amino groups, the same carbonyl groups, the same melanoidin polymers — but the low temperature means the reaction runs through thousands of intermediate compounds that high-temperature Maillard skips, and those intermediates are what make an aged fish sauce more complex than a fresh one. Temperature is speed; time is complexity. The barrel chose time.`,
    },
    {
      title: 'Draw the nhất — and understand what you are buying',
      description: `Open the tap at the barrel's base and draw the first liquid into clean glass bottles. It flows slowly — thick, viscous, deeply coloured, smelling of the sea and of time. This is nước mắm nhất Phú Quốc: the premium, the undiluted, the fifteen-month product.

After the nhất is drawn, the remaining solids in the barrel are washed with saturated brine — poured in at the top, allowed to percolate through the fish sludge, and drawn from the tap. This is the nhì — the second pressing, lighter, thinner, less complex, still good, and the grade that most cooking-grade fish sauces on the market actually are. A third wash produces the ba — lighter still, and the base for the cheapest sauces.

For the kitchen: nhất (35°N+) is for dipping sauces, dressings and finishing — anywhere the fish sauce is tasted raw. Nhì (25-30°N) is for cooking — braising, stir-frying, seasoning broth — where the heat would destroy the nhất's volatile complexity anyway. The price difference is significant and the use-case difference is real. A kitchen that uses nhất in a braise is spending money the heat will waste; a kitchen that uses ba in a dipping sauce is saving money the tongue will miss.

WHAT TO LOOK FOR ON THE SHELF: Phú Quốc origin (the PDO label, if present). Ingredient list: cá cơm (anchovy), muối (salt) — nothing else. No sugar, no caramel colouring, no hydrolysed protein, no preservatives. Nitrogen grade: 30°N+ for cooking, 35°N+ for dipping. Colour: deep reddish-amber, not brown, not pale. Clarity: hold the bottle to the light — a good fish sauce is clear, not cloudy. Price: a 500 ml bottle of genuine nhất costs what a bottle of good olive oil costs. If it is the price of water, it is not nhất.`,
      tip: `The nitrogen grade — measured in degrees N (°N) — is the single most reliable quality indicator on a fish sauce label, and understanding it clarifies the entire market. °N measures total nitrogen content as a percentage, which is a direct proxy for dissolved amino acid concentration, which is a direct proxy for umami intensity. A sauce at 10°N is thin, salty water with a suggestion of fish; at 20°N it is a serviceable cooking sauce; at 30°N it is a good sauce with real depth; at 40°N it is a concentrate so intensely savoury that a drop changes a bowl. Phú Quốc nhất typically grades at 35-43°N, which places it at the top of the global fish-sauce spectrum — comparable to the best Thai nam pla and the best Japanese ishiru. The grade is on the label. Read it. It tells you more than the brand name, more than the price, and more than any marketing copy about tradition and heritage. The number is the sauce.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
