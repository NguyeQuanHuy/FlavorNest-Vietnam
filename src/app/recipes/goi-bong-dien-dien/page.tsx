'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'goi-bong-dien-dien',
  title: `Gỏi Bông Điên Điển (Sesbania Blossom Salad with Dried Shrimp and Roasted Rice Powder)`,
  subtitle: `The yellow blossoms of the flood season, tossed raw with dried shrimp, shredded pork ear, roasted rice powder, crushed peanuts and rau răm — dressed in a lime-fish-sauce-sugar vinaigrette and eaten immediately, before the petals bruise. The lightest thing the Delta does with the flower, and the one where the flower is heard most clearly.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/goi-bong-dien-dien.jpg',
  intro: `The bông điên điển has now appeared in three Đồng Tháp dishes — wilted in a hotpot, set into a crepe, stir-fried beside a kho — and in each one it was cooked: heated, wilted, transformed. The gỏi is the fourth appearance and it is the one where the flower appears raw, which means it is the one where the flower's own flavour, undistorted by heat, arrives at the tongue unmediated. A raw điên điển petal tastes of almost-nothing, and then of a faint green sweetness, and then of a mild bitterness at the place where the petal meets the calyx, and then of a perfume that is floral in a way that is closer to saffron-in-water than to roses — dusty, warm, and gone before you are sure it was there. It is not a strong flavour. It is a quiet one, and the gỏi is built to hear it.

Gỏi in the Mekong tradition is a tossed salad — not the pressed-and-cured raw-fish gỏi of the coast, but the dressed-and-served salad of shredded protein, crunchy vegetables and a sweet-sour-salty-hot dressing, tossed with thính (roasted rice powder) and eaten immediately. The protein base is typically shredded boiled pork ear or belly and tép khô — sun-dried river shrimp, tiny and coral-orange, rehydrated briefly and still faintly crunchy, carrying a concentrated marine-umami that the fresh blossom's mildness needs as its counterweight. The thính dries the surfaces, stops the petals from clumping, and lays the toasted-rice nuttiness underneath that every Vietnamese gỏi uses as its baseline flavour. Crushed peanuts go on for fat and crunch. Rau răm goes in for its peppery-soapy bite. And the dressing — lime, fish sauce, sugar, garlic, chili — ties everything together and gives the blossom's quiet sweetness the acid frame it needs to register.

The dish is the most ephemeral in the Đồng Tháp collection and possibly the most ephemeral in the entire project: the raw blossoms bruise and brown within minutes of being dressed, and a gỏi bông điên điển that sat ten minutes on a plate is a gỏi that has already started dying. The Delta eats it immediately, and "immediately" is not a figure of speech — the toss is done at the table, the dressing is poured at the table, and the first mouthful is taken while the last handful of thính is still being scattered. The rhythm is: toss, serve, eat, in one continuous movement, with no pause for photography, for plating, or for waiting for the last guest to arrive. The guest who arrives late gets the second batch, made fresh, because the first one is already gone.

This is the salad of the flood season's brief window, and it is the dish I would give to a visitor who wanted to understand what Đồng Tháp tastes like at its most characteristic: a flower that lasts three weeks, a shrimp dried from last season's catch, a rice powder toasted that morning, a lime squeezed that second. Everything in the bowl is either very fresh or very preserved, and the gỏi is the moment the two meet. The flood made the shrimp and the sun dried it; the flood's recession grew the flower and the hand picked it; the kitchen's only job is to introduce them, quickly, before either one fades.`,
  ingredientSections: [
    {
      title: 'The blossoms',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'bông điên điển (Sesbania sesban blossoms), calyxes removed',
          note: `Fresh, picked that morning if at all possible. Pull each calyx off — the small green cup — and discard it; the calyx concentrates the saponin bitterness that the petals are mostly free of. Rinse very gently in cool water and drain on paper. Handle the petals like tissue paper: they bruise on contact and brown within minutes of being bruised. Do not chop, do not shred — the whole petal goes in. Frozen blossoms, thawed gently, work for the cooked dishes but lose too much structure for a raw gỏi. This is a fresh-only application.`,
        },
      ],
    },
    {
      title: 'The protein and the crunch',
      items: [
        {
          amount: 60,
          unit: 'g',
          name: 'tép khô (sun-dried river shrimp)',
          note: `Tiny, coral-orange, intensely savoury. Soak 15 minutes in warm water to soften slightly, then drain and squeeze dry. They should be pliable but still faintly crunchy — not soft, not brittle. Their concentrated umami is the bass note against the blossom's treble.`,
        },
        {
          amount: 150,
          unit: 'g',
          name: 'boiled pork ear (tai heo), shredded fine',
          note: `Boiled 40 minutes until soft, chilled, shaved into thin strips. Pork ear gives the gỏi a cartilage crunch that no other cut can supply — halfway between crunchy and chewy, slightly translucent, carrying almost no fat. Boiled pork belly, sliced thin, is the substitute if ear is unavailable, but the crunch is the loss.`,
        },
        { amount: 60, unit: 'g', name: 'roasted peanuts, coarsely crushed' },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'thính (roasted rice powder)',
          note: `Freshly toasted, coarsely ground. It dries the blossoms, stops the salad from weeping, and lays the toasted foundation that every Vietnamese gỏi stands on.`,
        },
      ],
    },
    {
      title: 'The dressing',
      items: [
        { amount: 3, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'sugar', note: `Dissolved completely in the lime and fish sauce before dressing. Undissolved sugar granules in a delicate petal gỏi is grit where there should be silk.` },
        { amount: 2, name: 'cloves garlic, pounded fine' },
        { amount: 2, name: 'red bird\'s-eye chilies, sliced thin' },
        { amount: 1, unit: 'tbsp', name: 'water' },
      ],
    },
    {
      title: 'The herbs',
      items: [
        { amount: 30, unit: 'g', name: 'rau răm (Vietnamese coriander), roughly torn', note: `The fixed herb. Its peppery, soapy bite frames the blossom's mildness the way a mount frames a watercolour — it defines the edge without competing with the interior.` },
        { amount: 2, unit: 'tbsp', name: 'fried shallots' },
      ],
    },
  ],
  steps: [
    {
      title: 'Prepare every component before you touch the blossoms',
      description: `Soak the tép khô 15 minutes, drain and squeeze dry. Shred the chilled pork ear. Crush the peanuts. Make the thính fresh. Mix the dressing — dissolve the sugar completely in the lime juice, fish sauce and water, then add the garlic and chili.

Everything must be ready, measured and within arm's reach before a single petal enters the bowl. A bông điên điển gỏi is assembled and eaten in under three minutes, and the blossoms begin browning the moment they are dressed. This is not a salad you build slowly. It is a salad you build in one movement, and the mise en place is the only pause the recipe permits.`,
      tip: `The urgency is enzymatic browning — the same polyphenol-oxidase chemistry that browns a cut apple, but faster in a thin, delicate flower petal with a high surface-to-volume ratio. Acid (from the lime) slows the browning by lowering the pH below the enzyme's optimal range, which is why the dressing must land quickly and why the dressing is heavy on lime. But slowed is not stopped: even dressed, the petals will darken within ten minutes. The Delta's solution is not chemical but temporal: eat faster than the enzyme works.`,
    },
    {
      title: 'Toss at the table — dressing first, then thính, then everything else, in 60 seconds',
      description: `In a wide, shallow bowl at the table: pour the dressing over the prepared blossoms first, tossing gently with two spoons to coat every petal. The acid lands on the flower and the clock starts.

Add the shredded pork ear and the drained tép khô. Toss once. Add the thính — it will absorb the excess dressing immediately and dry the surfaces. Toss again. Scatter the crushed peanuts and the rau răm over the top. Scatter the fried shallots last.

Sixty seconds from dressing to done. The gỏi should look: vivid yellow petals against the pink shrimp, the translucent ear, the matte tan of thính, the green of rau răm, the red of chili. It should smell: lime first, toasted rice underneath, and the blossom's faint dusty perfume arriving last, through the gap between the other two. It should feel: dry on the surface (the thính did its job) and wet inside each bite (the dressing did its job).

Serve immediately, with spoons. Do not plate individually — the bowl goes to the centre and everyone eats from it, because portioning takes the thirty seconds the blossoms do not have.`,
      tip: `Thính goes in after the dressing, never before, and the order is load-bearing. Dressing first coats the petals in acid, which slows browning and carries the seasoning into every surface. Thính second absorbs the excess liquid, converting the bowl from wet-salad to dry-gỏi — the distinction that separates a Vietnamese gỏi from a Western salad and that gives the mouthful its characteristic matte-coated, powder-on-petal texture. Reverse the order — thính first, then dressing — and the rice powder absorbs the dressing before it reaches the petals, leaving the blossoms un-seasoned and the thính a soggy paste. Same ingredients, different sequence, different dish. The order IS the recipe.`,
    },
    {
      title: 'Eat within five minutes — and taste the flower before it leaves',
      description: `Eat in spoonfuls — not pinches, not chopstick-lifts — scooping a cross-section of everything in each bite: petal, shrimp, ear, thính, peanut, herb. Each spoonful should carry all six textures (soft petal, crunchy shrimp, cartilage-chewy ear, sandy thính, nutty peanut, leafy herb) and all five tastes (the dressing's sour-sweet-salty-hot and the blossom's faint bitter).

Taste the blossom specifically: it arrives between the shrimp's umami blast and the rau răm's peppery bite, a quiet, warm, briefly floral note that is neither sweet nor bitter but somewhere in the territory of saffron-water or chamomile — and then it is gone, covered by the next component's louder voice. That quiet moment is the whole dish. Everything else in the bowl is an amplifier, a frame, a stage for that one soft note to be heard on. The dried shrimp is loud so the flower can be quiet. The thính is nutty so the flower can be floral. The lime is sharp so the flower can be gentle.

Finish within five minutes. The bowl should be empty and the petals should still be yellow. A bowl left ten minutes has brown petals, a weeping dressing pool, and a limp sadness that the original did not contain. If there are blossoms left and guests arriving, make a second batch. The flower is cheap and the season is short. Generosity costs nothing that scarcity has not already priced.`,
      tip: `This gỏi completes the bông điên điển's four-dish arc across the Đồng Tháp collection, and each dish extracted a different register from the same flower. Stir-fried with garlic (beside the kho lạt): the petals caramelised and their sugars browned into a warm, toasted sweetness. Set into the bánh xèo batter: the petals were captured in gelatinising starch and contributed a soft, slippery texture inside a brittle shell. Wilted in the lẩu mắm: the petals collapsed into the fermented broth and disappeared, leaving only colour. And now, raw in the gỏi: the petals at full fragility, full perfume, full ephemerality, dressed and eaten before the enzyme clock runs out. Four techniques, four textures, four survival windows — and one flower, available for three weeks, from one province, grown by one flood. The collection's most seasonal ingredient, heard four ways, in four dishes, on the same table, in the same month. That is what a provincial collection is: not ten unrelated recipes but one landscape's annual plan, read as a menu.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
