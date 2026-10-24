'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-trung-kien',
  title: `Bánh Trứng Kiến (Tày Ant-Egg Cakes in Young Fig Leaves)`,
  subtitle: `Glutinous rice dough pressed flat onto a young fig leaf, spread with a filling of black-ant eggs sautéed in pork fat with shallot, capped with a second leaf and steamed — the leaf eaten with the cake. A three-week springtime specialty of the Tày in Chiêm Hóa and Na Hang, made from a harvest that climbs trees.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '2 hr',
  rating: 4.7,
  baseServings: 6,
  heroImage: '/images/recipes/banh-trung-kien.jpg',
  intro: `For about three weeks a year — the turn of the second and third lunar months, when the forests of Chiêm Hóa and Na Hang are warming and the rains have not yet come — the Tày go looking up. The quarry is the nest of the kiến ngạt, a large, glossy black tree ant that builds dark football-sized colonies of chewed leaf and fibre in the branches of forest trees, and inside those nests, precisely then, are the eggs: plump, pale ivory larvae and pupae the size of rice grains, packed by the tens of thousands, at the fattest and cleanest moment of their cycle. A good nest yields a bowl or two of trứng kiến after cleaning; a good morning yields enough for a family's batch of bánh trứng kiến — and the season's brevity is not incidental to the dish's status. Nobody writes songs about ingredients available in December and July alike.

Set squeamishness aside for one paragraph, because the ingredient earns it. Ant brood is, by composition, closer to a dairy-fat-and-protein food than to anything the word "insect" conjures: the larvae run high in fat and complete protein, and when sautéed gently in pork fat with shallots they behave on the palate like a cross between fish roe and browned butter — each egg popping faintly under the tooth and releasing a rich, faintly sweet, nutty-creamy taste that Tày cooks compare, not defensively but descriptively, to egg yolk cooked in cream. Vietnam's northern mountains have never treated insect foods as a dare; this collection has already visited the cricket and silkworm table, and trứng kiến sits at its top end — a luxury by scarcity and by flavour at once, the mountain's caviar in every sense that matters, including price.

The cake around the filling is a study in restraint, and its genius is the wrapper. The dough is plain glutinous rice — the same near-pure amylopectin this collection has steamed, fried and pounded across five provinces — kneaded soft with warm water and a little fat, and pressed into a flat disc not into a mould or a banana leaf, but onto a young leaf of the vả fig, the very tree whose fruit Huế boils for its salad. The filling is spread, a second young leaf caps it, and the sandwich is steamed until the dough turns translucent and the leaves soften from felt to silk. Then — the point — the leaf is not unwrapped. It is eaten, its faint astringency and green tea-like bitterness cutting the fatty filling and the bland chew of the rice exactly as green banana cuts fried fish on the coast. The fig leaf is wrapper, plate and palate-cleanser in one, and a bánh trứng kiến peeled and discarded has been misunderstood.

An honest word for the overseas kitchen, in the tradition of this collection's field-rat and live-squid entries: trứng kiến does not export. It is hyper-seasonal, hand-harvested, and consumed within days; no freezer aisle in Europe carries it, and no urban ant is a substitute for a forest species — do not improvise. This recipe documents the dish as the Tày make it, because the largest English-language record of Vietnamese food should hold its rarest dishes, not just its portable ones. For cooks who want to practice the form, the dough, leaf and technique work beautifully with a filling of small fish roe or finely crumbled seasoned tofu sautéed the same way — a different cake, honestly named, that keeps the method alive until you can eat the real one in a Chiêm Hóa spring, which is the correct long-term plan.`,
  ingredientSections: [
    {
      title: 'The filling',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'trứng kiến (black tree-ant eggs/larvae), cleaned',
          note: `The season's harvest, gathered from forest nests in early spring and cleaned by winnowing and brief rinsing — adult ants, nest debris and any darkened eggs removed, leaving only plump ivory brood. UNAVAILABLE OUTSIDE THE REGION, and not to be improvised from any other ant. For practicing the form abroad: 250 g small fish roe (e.g. capelin) rinsed of brine, or finely crumbled firm tofu, sautéed by the same method — a different, honestly-renamed cake.`,
        },
        { amount: 2, unit: 'tbsp', name: 'rendered pork fat (mỡ heo)', note: `Pork fat, not oil — its savour is half the filling's roundness, and the Tày original is unapologetic about it.` },
        { amount: 4, name: 'shallots, finely minced' },
        { amount: 1, unit: 'tsp', name: 'fish sauce' },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 2, unit: 'tbsp', name: 'roasted crushed peanuts (optional, some households)', note: `For extra body in a lean-nest year — a quiet stretch that also flatters the nuttiness already there.` },
        { amount: 1, name: 'small handful of chopped kiệu or scallion greens' },
      ],
    },
    {
      title: 'The dough',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'glutinous rice flour (bột nếp)',
          note: `Ideally milled from the local nếp nương upland sticky rice; any good glutinous flour serves. Plain rice flour cannot — the cake's soft translucent chew is pure amylopectin.`,
        },
        { amount: 300, unit: 'ml', name: 'warm water, approximately' },
        { amount: 1, unit: 'tbsp', name: 'pork fat or neutral oil' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The wrapper',
      items: [
        {
          amount: 24,
          name: 'young vả or sung fig leaves, soft and pale, stems trimmed',
          note: `THE leaf — young enough to fold without cracking and to eat without toughness; a mature dark leaf is leather and bitterness. Picked the same morning in Chiêm Hóa. In Europe: young leaves from a garden fig (Ficus carica), briefly blanched, are a genuinely close cousin; young grape leaves are the fallback. The leaf is eaten with the cake — choose accordingly.`,
        },
      ],
    },
  ],
  steps: [
    {
      title: 'Clean the harvest — winnow, sort, and keep it cold',
      description: `Spread the trứng kiến in a wide flat basket and winnow gently: tap and tilt so the lighter nest debris and stray adult ants walk or blow off the edge, leaving the heavier ivory eggs behind. The Tày trick is a leafy twig laid in the basket — remaining adults climb it within minutes and are removed with it.

Rinse the sorted eggs briefly in cool water in a fine sieve, drain thoroughly, and hold cold. They should be plump, uniformly pale, dry to the touch and clean-smelling — faintly grassy, nothing more.

Work the same day as the harvest. This is among the most perishable ingredients in the entire Vietnamese larder, and its freshness window is measured in hours, which is half the reason the dish never travels.`,
      tip: `Harvest ethics are built into the tradition and worth recording with the recipe: a Tày gatherer takes part of a nest and leaves the queen's section intact, so the colony rebuilds and the same trees yield next spring — the ant equivalent of the beekeeper's frames-not-hive rule. The three-week season is thus self-enforcing twice over: biology sets when the brood is fat, and restraint ensures there is a next year. Wild foods that lasted centuries in a cuisine all carry some version of this arithmetic; the ones that did not, disappeared with their source.`,
    },
    {
      title: 'Sauté the filling gently — bloom the fat, do not brown the eggs',
      description: `Warm the pork fat over medium heat and fry the shallots until translucent and sweet — 2 minutes, no colour beyond pale gold. Add the trứng kiến, lower the heat, and fold gently for 3-4 minutes, seasoning with fish sauce, salt and pepper.

The eggs should turn from ivory to a warm opaque cream, glisten with fat, and release a smell the Tày compare to browned butter and toasted rice. A few will pop — correct. Do not stir-fry hard and do not brown: scorched brood turns bitter and mealy, and a season's harvest deserves better.

Fold in the peanuts and scallion greens off the heat. Cool completely before filling — a warm filling steams the dough from within and the cakes arrive gummy.`,
      tip: `The gentleness is fat-chemistry pragmatism. Ant brood carries its richness as delicate unsaturated fats within thin membranes: low heat renders a little of it into the pork fat (rounding the whole filling) while leaving most eggs intact to pop on the palate — the roe-like textural event the dish is prized for. High heat ruptures everything at once, weeps the fat out, and leaves protein grit. The same rule governed the hến in Hà Tĩnh and the shrimp dollops in Huế: when the ingredient is essentially little parcels of flavour, the cooking's whole job is not to break the parcels early.`,
    },
    {
      title: 'Knead the dough soft — earlobe rule, damp-cloth rule',
      description: `Mix the glutinous flour and salt; add the warm water gradually, then the fat, and knead 5 minutes to a smooth, supple, matte dough — the earlobe softness this collection has calibrated across five provinces, holding a fingerprint briefly, releasing cleanly from the palm.

Divide into 12 balls of about 55 g. Keep everything under a damp cloth; glutinous dough skins over in minutes and a skinned disc cracks at the edges when pressed.

There is no rest required and no gluten to develop — the dough is ready the moment it is smooth, which is one of amylopectin's small mercies to the cook.`,
      tip: `By now the glutinous dough is an old colleague, so note only what is new: this cake uses it unfilled-and-flat rather than wrapped-and-sealed — a disc with filling spread on top, not a ball with filling inside — which means thickness discipline replaces seam discipline. The disc must be even, or the thin zones steam to translucence while thick zones stay pasty, and the leaf shows every flaw when peeled back. Different geometry, same molecule, same demand for uniformity by different means.`,
    },
    {
      title: 'Assemble on the leaf — press, spread, cap',
      description: `Lay a young fig leaf glossy-side down. With oiled fingers, press a dough ball directly onto it into an even disc about 8-9 cm across and 5-6 mm thick, following the leaf's shape.

Spread 1.5 tablespoons of cooled filling across the disc, leaving a 1 cm border. Cap with a second leaf, glossy-side up, and press the edges gently so the sandwich holds — no sealing, no tying; the steam and the dough's tack do the fastening.

Assemble all twelve. They should look like what they are: green envelopes with a secret, stacked and ready, smelling faintly of fig and shallot already.`,
      tip: `The fig leaf is doing four jobs and charging for none: it is the non-stick surface (the dough never touches a steamer tray), the flavour agent (its mild coumarin-and-green-tea aromatics infuse the dough as it steams), the palate-cleanser (its tannins cut the filling's fat, the green-banana principle in wrapper form), and the plate (the cake is carried, gifted and eaten from it). Vietnam's leaf-wrapped canon mostly uses banana and dong leaves as inedible packaging; the fig leaf's edibility promotes it from wrapper to ingredient — the same promotion Vĩnh Long gave the lotus leaf around its grilled snakehead, decided independently, five hundred kilometres apart.`,
    },
    {
      title: 'Steam 25 minutes, rest 5 — and eat the whole envelope warm',
      description: `Arrange the cakes in a steamer over hard-boiling water, not touching, and steam 25 minutes. The top leaves will darken from bright green to deep olive and turn silk-soft; peek under one — the dough should be translucent through, with the filling's shadow visible.

Rest 5 minutes off the steam; straight-from-the-pot glutinous dough is slack and gummy, and five minutes of cooling sets it to its proper tender chew.

Eat warm, in hand, leaf and all — bite through envelope, dough and filling together, so the leaf's bitterness, the rice's blandness and the eggs' popping richness land as one composed mouthful. Room temperature the same day is traditional for the field and the gift basket; refrigeration is the enemy of everything the amylopectin achieved. Twelve cakes, one spring morning's nest, three weeks a year: eat them like the calendar item they are.`,
      tip: `Close the collection's insect file with the honest observation the dish forces: the line between "delicacy" and "dare" is drawn by familiarity and nothing else. Ant brood is compositionally kin to roe and egg — foods no one flinches at — and within its culture it outprices pork; the flinch it earns elsewhere is geography, not chemistry. The largest English-language record of this cuisine keeps such dishes not as exotica but as data points in the real argument: that the northern mountains built a complete, sophisticated food system from forest, paddy and patience, and that its calendar — mắm jars in autumn, ant eggs in spring — is as considered as any tasting menu. The season is short. The record should be long.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
