'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'com-sen-dong-thap',
  title: `Cơm Sen Đồng Tháp (Lotus-Seed Rice of Tháp Mười)`,
  subtitle: `Jasmine rice cooked with dried lotus seeds from the Tháp Mười lotus fields — the seeds steamed until they crack open and turn mealy-sweet, stirred into the rice so every mouthful carries a pale, starchy, faintly floral nugget among the grains. Wrapped in a lotus leaf and steamed again until the rice perfumes. The dish that made a wetland into a brand.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/com-sen-dong-thap.jpg',
  intro: `Tháp Mười is a district in Đồng Tháp province that consists, for most of the year, of a wetland so vast and so flat that the horizon is a lotus field in every direction. The Đồng Tháp Mười — the Plain of Reeds — floods annually from the Mekong, and when the water stands at the right level, between ankle and thigh, the lotus grows: Nelumbo nucifera, the sacred lotus, covering the canals and the flooded fields in a carpet of leaves the size of dinner plates and flowers the colour of dawn. Đồng Tháp produces more lotus than any other province in Vietnam, and the lotus produces more than flowers — it produces seeds, rhizomes, stems, leaves and petals, every one of which the province eats, drinks, wraps, or sells.

Cơm sen — lotus-seed rice — is the dish that put the lotus economy on the plate. It is not a complicated dish, and its simplicity is the whole message: take the province's best rice, cook it with the province's lotus seeds, wrap it in the province's lotus leaf, and steam it until the leaf's perfume has permeated every grain. The dish is Đồng Tháp telling its own story in a mouthful: wetland rice, wetland seed, wetland leaf, everything from the same flooded field.

The lotus seed — hạt sen — is a remarkable ingredient and one that no other cuisine uses as confidently as the Vietnamese. Fresh, it is a plump, pale-green, faintly crisp nugget the size of a peanut, with a mild, starchy, slightly sweet flavour and a chestnut-like texture that softens to mealy-creamy when cooked. Dried, it shrinks to a pale, hard, wrinkled bead that must be soaked and steamed to rehydrate — and in that form it keeps indefinitely on the shelf, a year-round product from a seasonal harvest. Inside each seed, running through its centre, is the tâm sen — the green embryonic shoot, intensely bitter, which must be pushed out with a toothpick before cooking or it taints the whole batch. The removal is tedious: every seed, one at a time, a toothpick through the centre. It is the only fiddly step in the recipe and it is non-negotiable — one bitter embryo left in ruins twenty mild seeds around it.

The lotus leaf — lá sen — is the wrapping, and it is an ingredient, not a package. Over twenty minutes of steaming, the leaf releases its volatile compounds — a complex mixture of alkaloids, terpenes and aldehydes that give lotus leaf its specific, warm, faintly tea-like, green-herbaceous, slightly mineral perfume — directly into the rice's moist surface. The perfume is unmistakable and irreplaceable: no other leaf in the Vietnamese wrapping canon smells like lotus, and the rice that emerges from the leaf carries the scent for hours. In Chinese cooking, lotus-leaf rice is a dim-sum classic (lo mai gai); in Vietnamese cooking, it is Đồng Tháp's own, made with the province's own leaves from the province's own fields, and the perfume is the terroir.

The dish is served unwrapped at the table — the leaf opened like a gift, the rice mounded inside it still steaming, the seeds visible as pale nuggets among the grains, and the perfume rising on the steam as the first thing the table smells before the first spoonful is taken. It is plain food made beautiful by provenance, and it is the dish Đồng Tháp serves to anyone who asks what the province tastes like when it tastes most like itself.`,
  ingredientSections: [
    {
      title: 'The rice',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'jasmine rice (gạo thơm)',
          note: `Good jasmine — fragrant, long-grain, the kind you eat for dinner. Rinsed until the water runs clear. The rice is the canvas; the lotus seed and the leaf are the painting, and a canvas made of broken, stale or flavourless rice shows every flaw.`,
        },
        { amount: 450, unit: 'ml', name: 'water (for cooking the rice)' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil or butter' },
        { amount: 0.75, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The lotus seeds',
      items: [
        {
          amount: 150,
          unit: 'g',
          name: 'dried lotus seeds (hạt sen khô)',
          note: `Sold at every Vietnamese and Chinese grocer, in bags of pale, wrinkled, hard beads. Soak 2-4 hours until they plump and a fingernail can dent the surface. CRITICAL: push the green embryo (tâm sen) out of every seed with a toothpick or a blunt skewer before cooking — it is the thin green shoot running through the seed's centre, and it is intensely bitter. One left in poisons twenty around it. This step is tedious, non-negotiable, and the reason Đồng Tháp's grandmothers do it while watching television.`,
        },
      ],
    },
    {
      title: 'The lotus-leaf wrapper',
      items: [
        {
          amount: 4,
          name: 'dried lotus leaves (lá sen khô), soaked 30 minutes in warm water',
          note: `Sold at Vietnamese and Chinese grocers — large, round, brown, stiff when dry, pliable when soaked. Each leaf, once rehydrated, is wide enough to wrap a generous serving of rice into a parcel. Fresh leaves are vastly more aromatic (and if you grow lotus or have a lake nearby, pick them), but dried leaves, properly soaked, carry enough of the signature perfume to scent the rice through the final steaming.`,
        },
      ],
    },
    {
      title: 'Optional enrichments',
      items: [
        { amount: 100, unit: 'g', name: 'lạp xưởng (Chinese sausage), diced', note: `The Cantonese-influenced addition that turns cơm sen from a temple dish into a weeknight dinner — its sweet, fatty, cured-pork richness against the mild lotus seed is a Delta-Chinese crossover that many households include.` },
        { amount: 4, name: 'shallots, sliced and fried golden' },
        { amount: 2, unit: 'tbsp', name: 'roasted peanuts, coarsely crushed' },
        { amount: 1, unit: 'tbsp', name: 'toasted sesame seeds' },
        { amount: 2, unit: 'tbsp', name: 'fried shallots' },
      ],
    },
  ],
  steps: [
    {
      title: 'Soak, de-embryo and steam the lotus seeds — 30 minutes, one by one',
      description: `Soak the dried lotus seeds in warm water for 2-4 hours until plump and dent-soft. Drain.

Take each seed and push a toothpick or a thin skewer through the centre from one end — the green embryonic shoot (tâm sen) will push out the other side as a thin, bright-green stick. Discard it. Repeat for every seed. Check each one by splitting one in half occasionally — no green remaining in the centre.

Steam the de-embryoed seeds over boiling water for 25-30 minutes until they are fully soft, mealy-starchy, and a finger pressed into one meets no resistance. They should taste mildly sweet, clean, slightly nutty, with no bitterness whatsoever.

If any bitterness lingers: an embryo was missed. Find it, remove it, and re-taste. The bitterness is the tâm sen's alkaloids (liensinine, isoliensinine — the same compounds that make lotus-embryo tea a mild sedative), and they are aggressive enough that one seed can taint a pot.`,
      tip: `The tâm sen is not a defect — it is the plant's embryonic axis, and it is bitter by evolutionary design: the bitterness protects the seed from being eaten before it germinates. Vietnamese cooking turns the bitterness into a product in its own right — trà tâm sen, lotus-embryo tea, is valued precisely for its cooling, sedative, bitter character — but in a rice dish where the lotus seed's mild sweetness is the point, the embryo must go. The tedium of removing it one by one is the price of the seed's mildness, and every Đồng Tháp kitchen pays it without complaint because the alternative — a pot of bitter rice — is a price nobody pays twice.`,
    },
    {
      title: 'Cook the rice, fold in the seeds and the enrichments',
      description: `Rinse the jasmine rice until the water runs clear. Cook in a rice cooker or pot with the 450 ml water, oil and salt — standard method, and the rice should come out fluffy, separate, and slightly firm rather than soft, because it will steam again inside the leaf and absorb more moisture.

While the rice is hot: fold in the steamed lotus seeds gently, distributing them evenly. If using the lạp xưởng, fry the diced sausage in its own fat for 2 minutes until the edges are golden and glossy, then fold it through the rice alongside the seeds. Add the fried shallots if using.

Taste a spoonful: rice-fragrant, faintly sweet from the seed, savoury-fatty if the sausage is in, and nutty from the shallots. The perfume from the lotus leaf has not arrived yet — that is the next step's job.`,
      tip: `Cooking the rice slightly firm — al dente by intention — is the technique that prevents the finished cơm sen from being mushy after its second steaming inside the leaf. The leaf-steaming adds 15-20 minutes of moist heat to already-cooked rice, and rice that was soft to begin with will over-gelatinise into a sticky, porridge-adjacent mass by the time the leaf opens. Slightly undercooking the rice gives it the structural margin to absorb the leaf's moisture and the steam's heat without crossing from fluffy to collapsed. The same principle governs every twice-cooked rice dish in the Asian canon — fried rice starts with day-old rice, lo mai gai starts with par-cooked sticky rice — because the second heat must not finish what the first heat already completed.`,
    },
    {
      title: 'Wrap in lotus leaf and steam — the perfume arrives',
      description: `Drain the soaked lotus leaves and pat dry. Lay each leaf flat, rib-side down, on a surface. Mound a quarter of the lotus-seed rice in the centre of each leaf — about a generous bowlful.

Fold the leaf over the rice: bring the near edge up and over, fold the sides in, then fold the far edge over to create a sealed, flat parcel roughly 15 x 15 cm. Tie loosely with kitchen string or a strip of lotus stem if you have one.

Steam the parcels in a steamer over hard-boiling water for 15-20 minutes. The leaf darkens, the rice inside heats through, and — the purpose of the step — the leaf's volatile alkaloids and terpenes migrate into the rice's moist surface, perfuming every grain on the outer layer and perceptibly scenting the entire parcel.

The perfume arrives through the lid of the steamer first: a warm, green, tea-like, faintly mineral scent that is recognisably lotus and nothing else. When the kitchen smells of it, the cơm sen is ready.`,
      tip: `The lotus leaf's perfume compounds — principally megastigmatrienone and its derivatives, alongside terpenes and small alkaloids — are volatile at steaming temperatures and migrate into the rice's surface moisture by gaseous diffusion. The exchange is one-directional: the leaf loses its scent, and the rice gains it. A dried leaf that has been steaming for 20 minutes smells of almost nothing when unwrapped; the rice it held smells of everything the leaf released. This is the same volatile-transfer mechanism banana leaf uses in every bánh it wraps, and dong leaf uses in the northern cakes — but lotus leaf's specific volatiles are unique in the Vietnamese wrapping canon, and they are the reason no cook substitutes another leaf and calls the dish cơm sen.`,
    },
    {
      title: 'Unwrap at the table — the perfume is the first course',
      description: `Bring the parcels to the table sealed. Cut the string and unwrap at the moment of serving — the leaf opens and the perfume rises on the steam as a visible, fragrant cloud. This is the presentation: the leaf is the plate, the rice is mounded inside it, the lotus seeds are visible as pale nuggets among the grains, and the whole thing smells of the wetland.

Scatter the crushed peanuts, sesame seeds and extra fried shallots over the top. Serve with a simple canh (clear soup), a plate of kho (any kho in this collection), and pickled vegetables — the standard cơm-and-sides format of the southern table.

Eat from the leaf with a spoon. Each spoonful should carry rice and at least one lotus seed — the seed's mealy, mild, chestnut-like texture against the fluffy grain is the combination the dish was built for, and missing it is missing the point.

The leaf is not eaten — it is the plate, the perfumer, and the gift wrap, and it is left on the table when the rice is gone, still faintly fragrant, still recognisably a lotus leaf, still marking the dish as Đồng Tháp.`,
      tip: `Cơm sen is the Đồng Tháp collection's quiet centre — not a hotpot, not a kho, not a gỏi, but a bowl of rice that carries the province's identity more directly than any of them. The lotus seed is Tháp Mười's cash crop. The lotus leaf is its packaging. The jasmine rice is its staple. The dish is the province eating its own field: seed from the flower, leaf from the plant, grain from the paddy, all from the same flooded plain, all in the same mouthful. A cuisine that wraps its rice in its own landscape's leaf and flavours it with its own landscape's seed is a cuisine that knows exactly where it is, and cơm sen is Đồng Tháp's way of saying so without raising its voice.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
