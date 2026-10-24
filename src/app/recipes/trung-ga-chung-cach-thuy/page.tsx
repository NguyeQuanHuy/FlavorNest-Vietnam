'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'trung-ga-chung-cach-thuy',
  title: `Trứng Gà Chưng Cách Thủy (Vietnamese Double-Boiled Steamed Egg)`,
  subtitle: `Eggs — beaten with a measured amount of warm water, fish sauce and a whisper of scallion — steamed in a bowl over gently simmering water until the mixture sets to a custard so smooth, so soft and so tremblingly delicate that a spoon passes through it like passing through warm silk. The food the Vietnamese kitchen makes for the person whose stomach accepts nothing solid and whose body needs protein that arrives without asking.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '25 min',
  rating: 4.8,
  baseServings: 2,
  heroImage: '/images/recipes/trung-ga-chung-cach-thuy.jpg',
  intro: `Chưng cách thủy — literally "steam by the water method," equivalent to the French bain-marie, the Japanese chawanmushi's technique, and every double-boiler custard in every cuisine — is the Vietnamese kitchen's gentlest application of heat to the most nutritionally complete single ingredient in the pantry: the egg.

An egg is, nutritionally, a complete organism-in-waiting: it contains every amino acid a body needs (it is the reference protein against which all other proteins' biological value is measured — egg protein scores 100 on the biological value scale, meaning 100% of its protein is usable by the human body), every fat-soluble vitamin except vitamin C (A, D, E, K, plus B12, riboflavin, folate and choline), and a fat profile dominated by oleic acid (the same monounsaturated fat that defines olive oil). A sick person who can eat nothing but steamed egg is receiving, per 60 g egg, roughly 6 g of complete protein, 5 g of easily digestible fat, and a full complement of micronutrients — more nutritional density per gram of effort than any other single food in the Vietnamese sick-bed repertoire.

The steaming technique is the delivery system that makes the egg's nutrition ACCESSIBLE to the weakest stomach: by beating the egg with warm water (which dilutes the protein concentration and reduces the custard's density), and steaming gently in a covered bowl over barely simmering water (which sets the ovalbumin and the ovotransferrin at 62-70°C without exceeding 80°C, where the proteins over-coagulate and produce a tough, rubbery, bubble-riddled, stomach-challenging solid), the cook produces a custard that is: soft (the diluted protein network is loose, open and yields to a spoon without resistance), smooth (the gentle, indirect steam heat sets the protein uniformly without the violent temperature spikes that direct heat causes), and essentially PRE-DIGESTED (the thermal denaturation has already unfolded the proteins, exposing their peptide bonds to the stomach's protease — the stomach receives an unfolded, accessible, easy-to-cleave protein rather than a folded, native, protease-resistant one).

The custard is the cháo trắng's protein complement — where the cháo provides starch and water, the steamed egg provides protein and fat, and the two together (cháo + steamed egg, spooned alternately or mixed) constitute a COMPLETE recovery meal: starch for glucose, protein for tissue repair, fat for energy and vitamin absorption, and water for hydration. The mother who serves cháo trắng with a bowl of trứng chưng cách thủy beside it is serving, without knowing the biochemistry, a nutritionally balanced meal that a hospital dietitian would approve.`,
  ingredientSections: [
    {
      title: 'The custard',
      items: [
        {
          amount: 3,
          name: 'eggs, at room temperature',
          note: `Room temperature — cold eggs straight from the fridge produce a denser custard because the cold liquid chills the steaming water and slows the setting, allowing the protein to over-aggregate into a tighter, tougher network. Room-temperature eggs set faster and more gently.`,
        },
        {
          amount: 150,
          unit: 'ml',
          name: 'warm water (40-50°C)',
          note: `The dilution: 50 ml water per egg is the Vietnamese standard for a soft, trembling custard. Less water (30 ml/egg) produces a firmer, denser set — suitable for a healthier eater. More water (70 ml/egg) produces an almost-liquid custard — suitable for the sickest eater who can barely swallow solids. The water must be WARM, not cold (cold water + hot steam = slow, uneven setting) and not hot (hot water begins cooking the egg in the bowl before the steaming starts).`,
        },
        { amount: 1, unit: 'tbsp', name: 'fish sauce', note: `The only seasoning — its salt and its umami are the custard's entire flavour, and 1 tbsp for 3 eggs is calibrated to produce a faintly savoury, not salty, custard that a sick palate can accept.` },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
      ],
    },
    {
      title: 'The toppings (minimal — the custard is the dish)',
      items: [
        { amount: 1, name: 'scallion, sliced very thin', note: `Added BEFORE steaming — the scallion wilts gently in the custard's surface and releases its mild allium into the top layer.` },
        { amount: 0.5, unit: 'tsp', name: 'sesame oil, drizzled after steaming' },
        { amount: 1, unit: 'pinch', name: 'ground white pepper' },
        { amount: 1, unit: 'tbsp', name: 'fried shallots (for the recovering eater — the first crunch)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Beat gently, strain, pour — no bubbles, no foam, no violence',
      description: `Crack the eggs into a bowl. Add the warm water, fish sauce and sugar. Beat with chopsticks or a fork — GENTLY, using a stirring motion rather than a whisking motion. The goal is to COMBINE (homogeneous mixture of yolk, white and water) without AERATING (no foam, no bubbles, no froth).

Foam is the enemy: every air bubble in the mixture becomes a crater in the finished custard — a pockmark in the smooth surface, a hole in the silky interior — because the trapped air expands during steaming, rises to the surface, and pops, leaving a void. A custard with bubbles is a custard with holes. A custard without bubbles is a custard like silk.

STRAIN the beaten mixture through a fine-mesh sieve into the steaming bowl — the straining removes: the chalazae (the white, ropelike cords that anchor the yolk — they do not dissolve during steaming and produce rubbery strings in the custard), any residual foam (caught by the sieve's mesh), and any unmixed egg-white strands (which would set as opaque, tough lumps in the otherwise smooth custard).

The strained mixture in the bowl should be: uniform pale-yellow, smooth, bubble-free, and still — no swirling, no rippling, no surface disturbance.

Scatter the sliced scallion over the surface. Cover the bowl tightly with a plate, a lid or aluminium foil — the cover prevents condensation from the steam lid from dripping onto the custard's surface, which produces water-filled dimples in the set custard.`,
      tip: `The strain-through-a-sieve step is the technique that separates a silk-smooth Vietnamese steamed egg from a rough, hole-riddled one, and it is the same step the Japanese chawanmushi demands for the same reason: the sieve removes the physical contaminants (chalazae, unmixed albumen strands, foam bubbles) that the beating introduced, and it produces a liquid that is as HOMOGENEOUS as possible before the heat arrives. Heterogeneity in the liquid becomes heterogeneity in the solid — a lump of unmixed white becomes a tough spot in the custard, and a bubble becomes a hole. The sieve is the quality gate, and everything that the sieve catches is a defect the custard avoided.`,
    },
    {
      title: 'Steam over gentle water — 12-15 minutes, the water must NOT boil hard',
      description: `Set a steamer or a wide pot with 5 cm of water over medium heat. Bring to a GENTLE simmer — small bubbles rising lazily, steam rising steadily, the water at 85-90°C. NOT a hard boil (100°C produces violent steam that over-heats the custard's surface before the centre sets, resulting in a tough, bubbly, over-coagulated exterior around a still-liquid interior).

Set the covered bowl on the steamer rack. Close the steamer's lid — LEAVING A SMALL GAP (prop the lid open 1 cm with a chopstick or a folded cloth). The gap vents excess steam and prevents the temperature inside the steamer from exceeding 90°C — the sweet spot for egg-custard setting.

Steam 12-15 minutes for 3 eggs with 150 ml water. The custard sets from the edges inward: at 8 minutes the edges are firm and the centre is still liquid; at 12 minutes the centre has just set — it trembles (jiggles like gelatin) when the bowl is gently shaken but does not slosh.

THE JIGGLE TEST: at 12 minutes, gently shake the bowl. If the custard JIGGLES (the entire surface moves as one trembling mass) — it is done. If the centre SLOSHES (a liquid wave moves independently of the set edges) — 2-3 more minutes. If the surface is FIRM and does not jiggle — it is overcooked, and the interior is tough.

Remove from the steamer. Uncover. The custard should be: pale yellow, smooth, trembling, with the scallion visible as thin green threads on the surface, and NO bubbles, NO holes, NO cracks.

Drizzle sesame oil. Scatter white pepper. Add fried shallots if the eater is recovering.`,
      tip: `The 85-90°C steaming temperature (achieved by simmering, not boiling, with the lid slightly ajar) is the egg-custard's critical control parameter. Egg ovalbumin begins to denature at 62°C and is fully set at 70°C; egg ovotransferrin begins at 62°C and is set at 65°C; and egg yolk proteins set at 65-70°C. At 85-90°C the custard's internal temperature reaches 70-75°C gradually and uniformly — all proteins set GENTLY into a loose, soft, open network that the spoon and the stomach both find yielding. At 100°C (hard boil) the custard's surface hits 85-90°C while the centre is still at 60°C — the surface over-coagulates (the proteins contract too tightly, squeezing water out as syneresis — the weeping liquid on an overcooked custard), and the interior is undercooked. The gentle-steam-gap method prevents the over-under split by keeping the MAXIMUM temperature below the over-coagulation threshold everywhere in the custard simultaneously.`,
    },
    {
      title: 'Eat by the spoonful — the softest protein the kitchen can make',
      description: `The steamed egg arrives at the bedside in its bowl — trembling, pale, smooth, trailing a thin ribbon of sesame oil and a scatter of green scallion. It is eaten with a spoon — each scoop lifts a quivering, custard-soft, uniform mass that barely holds its shape on the spoon's concavity and that, when it enters the mouth, dissolves on the tongue in 2-3 seconds without chewing, without biting, without any muscular effort the sick body does not have.

The taste: savoury (the fish sauce's glutamate, mild, carrying the egg's own umami), faintly sweet (the sugar + the egg yolk's own lipid-sweetness), warm (the steaming temperature, still held in the custard's centre), and EGGY — the egg's own flavour, which is a complex of sulfur compounds (from the albumen's cysteine), lipid volatiles (from the yolk's oleic acid), and umami (from the egg's own free glutamate and inosinate). The egg tastes of egg, and the custard lets it.

Eat beside a bowl of cháo trắng: a spoonful of custard, a spoonful of cháo, alternating. The custard provides the protein and the fat the cháo lacks. The cháo provides the starch and the hydration the custard lacks. Together they are a complete meal: carbohydrate (cháo) + protein (egg) + fat (yolk) + water (both) + micronutrients (egg's vitamins + cháo's B vitamins from the rice germ). The mother who serves both is serving, from two bowls, everything the body needs to recover.

Trứng chưng cách thủy is the softest solid food in the Vietnamese sick-bed repertoire — softer than the cháo trắng (which has grain fragments), softer than the súp gà (which has chicken shreds), softer than anything except the nước mía gừng (which is a liquid). It sits on the recovery ladder between the liquid drinks and the porridges: liquid → steamed egg → cháo trắng → súp gà → miến gà → full meal. The egg is the first PROTEIN the recovering body encounters, and its softness is the reason: the body that cannot chew can still swallow a steamed egg, and the protein that arrives in silk is protein the stomach does not have to fight.`,
      tip: `The egg's biological value of 100 — the reference score against which all other proteins are measured — means that 100% of the egg's amino acids are absorbed and used by the human body for protein synthesis. By comparison: beef scores 80 (80% utilised), chicken scores 79, fish scores 76, rice scores 56, and beans score 49. The sick person whose only protein intake is steamed egg is receiving the MOST EFFICIENT protein in the food system — every gram of egg protein eaten becomes a gram of human protein built, with no waste, no excess nitrogen to excrete (which taxes the kidneys, already stressed during illness), and no amino-acid imbalance to compensate for. The egg is not merely the softest protein. It is the best protein, by the measure that matters most for a recovering body: how much of what I eat becomes part of me.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
