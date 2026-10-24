'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'goi-xoai-xanh-kho-ca',
  title: `Gỏi Xoài Xanh Khô Cá (Green Mango Salad with Dried Fish and Mắm Dressing)`,
  subtitle: `Unripe mango — sour, crunchy, astringent, aggressively green — shredded into julienne and tossed with toasted dried fish, crushed peanuts, fried shallots, rau răm and a dressing of mắm đường (fermented fish paste softened with sugar and chili). The salad that is all edges and no centre: sour + salty + sweet + funky + crunchy, nothing mild, nothing quiet, and nothing that needs to be eaten politely.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '20 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/goi-xoai-xanh-kho-ca.jpg',
  intro: `Green mango is what the south eats when the tree has fruit but the fruit is not ready, and what the south discovered — long before any nutritionist confirmed it — is that unripe mango is a different ingredient from ripe mango in every dimension that matters to the kitchen. Ripe mango is sweet, soft, fragrant and yielding. Green mango is sour, hard, astringent and resistant — its flesh is dense with ungelatinised starch, its juice is loaded with citric and malic acid, its skin is taut with tannins, and its texture when shredded is a crisp, snappy, juicy julienne that holds its crunch in a dressing for twenty minutes where ripe mango would dissolve in three. Green mango is the south's sour-crunchy vegetable, and it is treated as one: shredded into salads, pickled beside rice plates, sliced into dipping saucers, and never, in any preparation, expected to be sweet.

Gỏi xoài xanh is the salad that puts the green mango at the centre and surrounds it with everything the Delta pantry provides in concentrated form: khô cá sặc (dried climbing perch, toasted and shredded, the same fibrous, smoky, umami-dense dried fish the gỏi sầu đâu used), mắm đường (a specific condiment made by mashing mắm cá — the Châu Đốc fermented fish — with sugar and chili into a thick, sweet-salty-funky paste that is the Delta's answer to shrimp paste and that appears on every family table as a dipping sauce for raw fruit), crushed roasted peanuts, fried shallots, and rau răm. The combination is deliberately imbalanced — everything is turned to maximum, every flavour is shouting, and the mango's sourness is the referee that keeps the match from becoming a riot.

The mắm đường dressing is the dish's Delta fingerprint — the element that marks the salad as Mekong rather than Hanoi or Huế. It is not nước chấm (the clear, sweet-sour-salty liquid) and not mắm nêm (the central coast's thin fermented anchovy sauce). It is a thick paste — mắm cá dissolved with sugar over low heat until it becomes a glossy, dark, pourable-but-clingy sauce with the consistency of honey and a flavour profile that runs from salt to sweet to fermented-fish-funk in a single spoonful. Poured over green mango and dried fish, it ties the two together with a funk that neither the mango's acid nor the fish's smoke could generate alone, and the result is a salad that tastes of the river (mắm), the tree (mango), the sun (dried fish) and the pan (peanuts, shallots) simultaneously.

The salad is mồi nhậu — eaten with beer, at the pace of conversation, in the afternoon heat, at a plastic table under a tamarind tree. It is the snack the Delta eats when the mango tree's fruit is still months from ripe and the evening is still hours from cool and something sour, salty, crunchy and aggressively flavoured is the only thing that makes sense.`,
  ingredientSections: [
    {
      title: 'The green mango',
      items: [
        {
          amount: 2,
          name: 'large green (unripe) mangoes, firm and sour',
          note: `UNRIPE — hard when pressed, green-skinned, with no yellow blush and no sweet fragrance. The flesh should be pale white-green, dense, and tart enough to pucker the mouth when tasted raw. Peel and julienne on a box grater or with a knife into matchstick-thin strips. Do not shred too fine — the strips should have enough body to hold their crunch for 20 minutes in the dressing.`,
        },
      ],
    },
    {
      title: 'The dried fish',
      items: [
        {
          amount: 80,
          unit: 'g',
          name: 'khô cá sặc or khô cá lóc (dried climbing perch or dried snakehead), toasted and shredded',
          note: `The same toasted-and-shredded dried fish the gỏi sầu đâu used — grilled 2-3 minutes over flame until smoky, then pulled into fibrous strands. Its concentrated salt-umami-smoke is the bass note against the mango's acid treble.`,
        },
      ],
    },
    {
      title: 'The mắm đường dressing',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'mắm cá (fermented fish paste — mắm cá sặc or mắm cá linh)',
          note: `Dissolved in 2 tbsp warm water and strained through a fine sieve if chunky.`,
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'sugar',
          note: `More than seems right — the sugar's job is not to make the dressing sweet but to bridge the mắm's salt and the mango's acid into a coherent sauce. Without enough sugar the dressing is mắm-on-mango, which is a confrontation. With sugar it is mắm-through-mango, which is a conversation.`,
        },
        { amount: 2, name: 'cloves garlic, pounded fine' },
        { amount: 3, name: 'bird\'s-eye chilies, pounded' },
        { amount: 1, unit: 'tbsp', name: 'lime juice' },
        { amount: 1, unit: 'tbsp', name: 'water' },
      ],
    },
    {
      title: 'The crunch and herbs',
      items: [
        { amount: 60, unit: 'g', name: 'roasted peanuts, coarsely crushed' },
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
        { amount: 50, unit: 'g', name: 'rau răm, roughly torn' },
        { amount: 30, unit: 'g', name: 'húng quế (Thai basil), leaves picked' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the mắm đường — dissolve, sweeten, heat until glossy',
      description: `Combine the strained mắm, sugar, garlic, chili, lime juice and water in a small saucepan over low heat. Stir 3-4 minutes until the sugar dissolves completely and the sauce is glossy, thick enough to coat a spoon, and no longer smells sharply of raw mắm — the gentle heat drives off the volatile top-note amines and leaves the deeper, rounder, malty-sweet character underneath.

Taste: the dressing should be sweet first, salty second, funky third, and hot fourth — a sequence that seems wrong for a mắm sauce but is correct, because the sugar's dominance is what lets the mắm approach the sour mango without overwhelming it. An un-sweetened mắm on green mango is a two-note blast of salt and acid. A sweetened mắm on green mango is a four-note chord.

Cool to room temperature before dressing the salad.`,
      tip: `The mắm đường's gentle heating is the same bloom technique this collection has applied to every fermented-fish product: low heat in a liquid medium drives off trimethylamine (the sharp, fishy top note) while preserving the glutamate, the Maillard melanoidins and the deeper volatile esters that carry the mắm's complexity. Raw mắm stirred cold into a dressing retains the trimethylamine and pushes half the table away. Bloomed mắm in the same dressing smells of toffee-salt-fish and pulls the whole table in. The bloom is the edit, and the edit is the difference between a condiment and an assault.`,
    },
    {
      title: 'Toast and shred the dried fish — smoky, fibrous, salty',
      description: `Hold the dried fish over a direct flame or on a grill grate — toast 2-3 minutes, turning, until the surface darkens and the smell shifts from dried-fish to smoky-savoury. Cool 2 minutes, then shred by hand into long, thin, fibrous strands.

The strands should be dry, crunchy at the edges, chewy at the centre, and taste of concentrated salt, smoke and fish. They are the salad's second protein (after the mắm's dissolved amino acids) and its textural anchor — every bite should include a strand or two.`,
      tip: `The toasting generates the same Maillard compounds every dried-protein toasting in this collection has produced: pyrazines (nutty), thiophenes (meaty), Strecker aldehydes (bready-malty). These compounds do not exist in the un-toasted dried fish — they are created by the brief, high heat, and they transform the fish from one-dimensional (salty) to multidimensional (salty + smoky + nutty + savoury). The 2-minute toast is a 2-minute flavour multiplication, and it costs nothing but attention.`,
    },
    {
      title: 'Toss everything — mango, fish, dressing, herbs, peanuts — and eat immediately',
      description: `In a wide bowl: the shredded green mango. Pour the mắm đường dressing over and toss thoroughly — every strand of mango must be coated, because the dressing's sweetness is the mediator and an un-dressed strand is an un-mediated blast of raw acid.

Add the shredded dried fish, half the herbs. Toss again. Transfer to a plate. Scatter crushed peanuts, fried shallots, remaining rau răm and basil over the top.

Serve immediately. The green mango holds its crunch for about 20 minutes in the dressing — longer than any ripe fruit or any cooked vegetable, because its high starch content and dense cell walls resist the osmotic softening that the dressing's salt and sugar impose. At 20 minutes the mango is still crunchy. At 30 it has begun to wilt. At 45 it is a soft, sad tangle. The window is generous by gỏi standards, but it is still a window.

The bite: the mango's sour-crunch hits first — sharp, bright, hard, astringent. Then the mắm đường arrives — sweet-salty-funky, coating the mango's acid in a dark, malty glaze. Then the dried fish — smoky, fibrous, savory, a completely different texture from the mango's snap. Then the peanut — crunchy-nutty, a third texture. Then the rau răm — peppery, green, the palate-reset. And the chili — building, building, arriving last, staying longest.

Everything in the bowl is loud. Nothing is quiet. The mango is aggressively sour. The mắm is aggressively funky. The chili is aggressively hot. The peanut is aggressively crunchy. And together they produce a salad that is not balanced in the usual sense — it is not a harmony — but is balanced in the sense that every loudness cancels another loudness, and what remains in the centre is a complexity that no single ingredient at normal volume could achieve. The salad is a shouting match that somehow resolves into music.`,
      tip: `Gỏi xoài xanh khô cá completes the collection's gỏi architecture: the raw-protein gỏi (tôm sống, cá trích, bò tái chanh) where the acid cures the protein; the raw-vegetable gỏi (bông điên điển, sầu đâu) where the acid dresses the plant; and now the raw-fruit gỏi, where the fruit IS the acid and the dressing's job is to meet the fruit halfway. Three gỏi types, three relationships with acid. In the protein gỏi, lime provides the acid. In the vegetable gỏi, lime provides the acid. In the fruit gỏi, the mango provides the acid and the dressing provides the sweetness that the other two gỏi's limes balanced against. The framework inverts — the ingredient does the acidifying and the dressing does the sweetening — and the inversion produces a salad that tastes completely different from any lime-dressed gỏi because the acid source is different: citric acid (lime) is sharp, bright and one-note; malic acid (green mango) is broader, more rounded and carries a fruity complexity that citric alone cannot. The fruit taught the dressing a new acid, and the dressing changed its balance to match.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
