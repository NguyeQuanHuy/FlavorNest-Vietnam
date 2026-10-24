'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'oc-vu-nang-nuong-tieu',
  title: `Ốc Vú Nàng Nướng Tiêu Xanh (Grilled Nipple Snails with Fresh Green Peppercorns)`,
  subtitle: `A limpet-like marine snail found on the rocks of Phú Quốc's southern coast, grilled in its own conical shell over charcoal with a knob of butter, a cluster of the island's fresh green peppercorns and a drop of nước mắm. Pried from the shell with a toothpick and eaten in one bite — briny, buttery, pepper-hot and tasting of the reef it clung to that morning.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '20 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/oc-vu-nang-nuong-tieu.jpg',
  intro: `Ốc vú nàng — the name translates, with the Vietnamese language's characteristic directness, as "maiden's breast snail" — is a marine gastropod of the Patellidae family, a conical limpet that clings to the intertidal rocks along Phú Quốc's southern and eastern coastlines. Its shell is a low, smooth, slightly asymmetric cone, typically 4 to 6 centimetres across, and the animal inside is a single disc of dense, chewy, intensely briny muscle that has spent its life holding on to a rock against the current, which is the best possible training programme for flavour: slow growth, constant exercise, a diet of reef algae, and immersion in the same clean, current-swept water that produced the anchovy for the nước mắm and the urchin for the nhum nướng.

The snail is gathered by hand at low tide — prised from the rocks with a flat blade, quickly, before it clamps down (a limpet that senses danger suctions itself to the rock with a force that exceeds its own body weight, and a clamped limpet is an immovable limpet). The gathering is seasonal and regulated, because the reefs are the island's long-term asset and overharvesting is the island's long-term risk, and the stalls that serve ốc vú nàng charge prices that reflect the scarcity and the hand-gathering and the fact that the snail cannot be farmed.

The cooking is, once again, the simplest thing the island could devise: the snail in its shell, placed directly on a charcoal grate, open-side up, so the shell becomes the cooking vessel. Into the shell goes a small knob of butter, a few berries of fresh green pepper — the famous tiêu Phú Quốc, picked that week from the pepper gardens that climb every hillside on the island — and a drop of the island's own nước mắm. The charcoal heats the shell, the butter melts and sizzles, the green peppercorns burst and release their sharp, piney, citrus-resinous heat into the butter, and the snail inside cooks in its own juices plus the butter-pepper-fish-sauce bath, firming from raw-translucent to cooked-opaque in about three minutes.

The fresh green peppercorn is the ingredient that ties this dish to the island as specifically as the nước mắm ties the gỏi cá trích. Phú Quốc is one of Vietnam's premier pepper-growing regions — the island's laterite soil, its altitude, its microclimate and its rainfall pattern produce a pepper that the spice trade ranks among the world's finest — and the fresh green berry, picked before it dries, is a different ingredient from the dried black peppercorn the rest of the world knows. Fresh green pepper is sharper, more vegetal, more citrus-piney, with a fruity brightness that drying destroys. It is available on the island year-round (the vines fruit continuously in the tropical climate) and it appears in a dozen Phú Quốc dishes — but nowhere more perfectly than here, bursting in hot butter on top of a rock snail, where its bright heat meets the snail's brine and the butter's fat in a combination that tastes like the island distilled to a single bite.`,
  ingredientSections: [
    {
      title: 'The snails',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'ốc vú nàng (limpets / Patella spp.), live, in shell',
          note: `Live — the muscle should retract when touched. In Phú Quốc they come off the rocks that morning. In Europe: live limpets are gathered wild on Atlantic and Mediterranean coasts (Patella vulgata in the UK/France, Patella caerulea in the Mediterranean) and are occasionally sold at specialist fishmongers or coastal markets. If unavailable: large live periwinkles, whelks, or abalone can be grilled in the same format — different species, same shell-on-charcoal technique, similar briny-chewy result. Clean the shells by scrubbing under running water.`,
        },
      ],
    },
    {
      title: 'The butter-pepper topping',
      items: [
        {
          amount: 60,
          unit: 'g',
          name: 'unsalted butter, cut into small knobs (about 5 g each)',
          note: `One knob per snail. The butter does three jobs: cooking fat, flavour carrier for the pepper's volatiles, and the richness that rounds the snail's brine. Salted butter works but reduce the nước mắm accordingly.`,
        },
        {
          amount: 40,
          unit: 'g',
          name: 'fresh green peppercorns (tiêu xanh), on the stem',
          note: `The Phú Quốc signature — fresh, not brined, not dried. Sold on their racemes (the small branching stems) at markets in the island and increasingly at high-end grocers and spice suppliers in Europe. They should be vivid green, firm, and smell sharply of citrus and pine. Brined green peppercorns (in jars) are the accessible substitute — rinse them well, as the brine is salty. Dried black pepper is the distant fallback — crack it coarse and accept that the dish's register has shifted from bright-fresh to warm-roasted.`,
        },
        { amount: 2, unit: 'tbsp', name: 'nước mắm Phú Quốc', note: `A few drops per shell — the island's own, seasoning the island's own snail.` },
        { amount: 1, name: 'lime, in wedges' },
      ],
    },
    {
      title: 'The table',
      items: [
        { amount: 20, name: 'toothpicks or small forks' },
        { amount: 30, unit: 'g', name: 'rau răm, whole sprigs' },
        { amount: 1, name: 'cold beer per person' },
      ],
    },
  ],
  steps: [
    {
      title: 'Scrub the shells and set up the grate — embers, no flame',
      description: `Scrub every shell under running water with a stiff brush — limpets carry algae, barnacles and grit on their exterior, and any of these burning on the charcoal produces an acrid smoke that taints the butter. The shells should feel smooth and clean.

Check each snail: touch the exposed muscle. It should retract — a living animal pulling back from stimulus. Any snail that does not retract, that smells of ammonia, or that has a slack, unresponsive body is dead and should be discarded. A dead limpet on a grill is the same food-safety problem as a dead mussel in a pot.

Burn your charcoal to glowing embers — the same low, even, flameless heat as the nhum and every other grilled dish in the collection. Set the grate.`,
      tip: `The retraction test is the mollusc's universal vitality check — identical in principle to the tap-and-close test for mussels and clams. A live gastropod's foot muscle contracts reflexively when touched; a dead one does not, because the nerve-to-muscle connection has failed. The test takes one second per animal and it is the only pre-cooking safety gate for any shell-on mollusc served from a grill where the opening-during-cooking signal (which tells you a bivalve is safe) does not apply, because a limpet's shell does not close in the first place. Check every one. The one you skip is the one that ruins the evening.`,
    },
    {
      title: 'Place shell-side down, load the topping, grill 3-4 minutes',
      description: `Set each snail on the grate, shell-side down, open-side up — the conical shell sitting stable on the grate with the snail's muscle facing the sky. The charcoal heats the shell from below; the interior becomes a tiny pan.

Into each shell: one knob of butter, 4-5 fresh green peppercorns (pulled from the stem), and 3-4 drops of nước mắm. The butter melts immediately on the hot shell and begins to sizzle. The peppercorns burst in the heat after about 60 seconds, releasing a sharp, piney, citrus aroma that rises from the grate in a visible, fragrant steam.

Grill 3-4 minutes. The snail is done when: the butter is sizzling actively (not just melted — sizzling, which means the shell has reached 100°C+), the snail's muscle has turned from translucent to opaque-white, and the edges of the muscle have contracted slightly from the shell wall. A fingertip pressed into the muscle should feel firm and springy — like the pad of your thumb, not like the back of your hand.

Do not overcook. A limpet cooked past 4 minutes on a hot grate is a rubber disc in a butter puddle, and no amount of lime corrects it. The muscle is thin — 5-8 mm — and it overcooks as fast as a shrimp.`,
      tip: `The fresh green peppercorn's burst is worth watching and understanding. At room temperature the berry is sealed — its essential oils (principally piperine, plus limonene, beta-caryophyllene and sabinene) are locked inside intact oil cells. At roughly 80°C the cell walls rupture and the oils release in a sudden aromatic burst — the same mechanism as a mustard seed popping in a tadka. The timing of that burst — about 60 seconds into the grill — is the moment the dish's flavour shifts from butter-and-brine to butter-and-brine-and-pepper, and it is the moment the Phú Quốc identity of the dish arrives. Dried pepper does not burst. It releases gradually, in a warm, roasted register. The fresh berry's burst is sharp, vegetal, almost floral — a brightness that dried pepper cannot produce because drying has already evaporated the volatile terpenes that carry it. The fresh pepper IS the island's advantage, and the burst is the advantage expressed.`,
    },
    {
      title: 'Pry, squeeze lime, eat in one bite — standing, at the grate',
      description: `Lift each shell off the grate with tongs. It is hot — hold it with a napkin or set it on a plate. Squeeze a wedge of lime into the butter-pepper pool in the shell.

Slide a toothpick or a small fork under the edge of the snail's muscle and pry it free of the shell — it should release cleanly in one piece, a disc of white muscle trailing a small visceral sac (edible, faintly bitter, and included or discarded by personal preference — the Phú Quốc stalls include it).

Eat the muscle in one bite — the toothpick lifts it from the shell and delivers it directly to the mouth, trailing a film of green-pepper butter and a drop of lime-fish-sauce. The bite carries: the chew of the muscle (dense, briny, faintly sweet, like a firmer version of abalone), the richness of the butter, the sharp citrus-pine burst of the green pepper, the acid of the lime, and the umami of the nước mắm. Five flavour systems in one small bite.

Tilt the shell to your lips and drink the remaining butter-pepper-lime-fish-sauce liquid from the shell. It is a concentrated sauce — one teaspoon of it — and it is the best teaspoon on the island.

Eat with rau răm between snails and beer between bites. The pace is one snail per minute, and the evening runs at the speed of the grate.`,
      tip: `The butter pooled in the shell after the snail is removed is a compound butter made by the grill: unsalted butter enriched with the snail's own liquor (briny, amino-acid-rich), the burst green pepper's terpenes (piney, citrus), the nước mắm's glutamate, and the lime's citric acid. It is, in effect, a beurre composé assembled in a limpet shell over three minutes of charcoal, and drinking it is not an afterthought — it is the dish's second course, liquid after solid, and it carries flavour compounds from the snail's own cooking that the snail's muscle alone does not. The shell is a bowl that cooked the sauce while it held the protein. It is the most efficient vessel in this collection, and the cook did nothing but place it on the fire and walk away.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
