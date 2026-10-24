'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'com-dep-khmer',
  title: `Cốm Dẹp Khmer (Flattened Young Rice with Coconut and Palm Sugar)`,
  subtitle: `Young green sticky rice, still milky in the grain, roasted in sand until it puffs, then pounded flat in a tall wooden mortar to the rhythm of four women striking in turn — winnowed, tossed with fresh coconut and palm sugar, and eaten by the handful at Ok Om Bok, the Khmer full-moon festival. The taste of a harvest caught at its youngest.`,
  category: 'DESSERT',
  difficulty: 'Hard',
  totalTime: '3 hr',
  rating: 4.8,
  baseServings: 6,
  heroImage: '/images/recipes/com-dep-khmer.jpg',
  intro: `On the full moon of the tenth lunar month — late October or early November, when the rice in the paddies has headed but not yet hardened — the Khmer of Trà Vinh celebrate Ok Om Bok, the moon-worship festival, and its centrepiece offering is cốm dẹp: young rice, flattened. The ceremony is moonlit and specific: families gather the newest, greenest rice from their own fields, roast it, pound it, mix it with coconut and palm sugar, arrange it on trays under banana-leaf cones, and present it to the moon with incense and candles and prayers for the harvest to come. Then everyone eats it, by the handful, still warm, standing in the yard under the moon they just fed.

The rice must be young — lúa nếp non, sticky rice harvested weeks before maturity, when the grain is still green-husked, plump with milky starch, and soft enough to dent with a thumbnail. This is not a convenience; it is the entire point. Mature rice is a dried, hardened, glassy starch store — excellent for cooking, useless for pounding flat, and tasting of nothing much. Young rice is still full of free sugars, amino acids, chlorophyll and moisture: it is alive, in the way that a seed about to sprout is alive, and it tastes green, sweet, milky and unmistakably of the field. No amount of soaking or processing converts old rice into young rice. The harvest window for cốm dẹp is about two weeks, and the festival falls inside it.

The processing is a spectacle and a percussion concert. The green paddy is first roasted — traditionally in a wide pan of hot sand, which distributes heat evenly and prevents scorching — until the husks darken and the grain inside puffs slightly and dries enough to pound. The roasted paddy is then winnowed to separate the husk, and the naked green grains are pounded in a tall wooden mortar by a team of three or four women striking in interlocking rhythm — thump-thump-thump-thump, each pestle landing in the gap between the last, so the grain is hit continuously without anyone colliding. The pounding flattens each grain into a thin, translucent, irregular disc and further drives off moisture while the mechanical compression aligns the starch into a dense, chewy, faintly crunchy flake.

The finished cốm dẹp is pale green, dry, light, faintly nutty from the roasting and faintly sweet from the young grain's own sugars. Mixed with fresh grated coconut and crumbled palm sugar, it becomes a confection that is both ancient and immediate: green, sweet, coconut-rich, chewy, with a toasted-grain undertone that connects it unmistakably to the field it came from a few hours ago. It is the only food in this collection that is harvested, processed and consumed on the same day, and the compression of that timeline is not logistical convenience but religious requirement.

For the overseas kitchen: young green sticky rice is not available in Europe in its raw paddy form. What IS available is cốm — Vietnamese green flattened rice — sold in small bags, fresh or frozen, at Vietnamese groceries, particularly around Tết and autumn. It is the same product, from the same young harvest, already roasted and pounded. Toss it with coconut and palm sugar exactly as below and you are eating the same dish, from a different field.`,
  ingredientSections: [
    {
      title: 'From bought cốm (the practical method)',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'cốm (Vietnamese green flattened rice), fresh or frozen',
          note: `Sold in small bags at Vietnamese groceries, typically from the Vòng village tradition near Hanoi. Fresh is best; frozen thaws in minutes. Already roasted, pounded and winnowed. If neither is available: green rice flakes sold dried lose colour but lightly toasted in a dry pan they recover some nuttiness.`,
        },
      ],
    },
    {
      title: 'From raw paddy (the full Ok Om Bok method)',
      items: [
        { amount: 1, unit: 'kg', name: 'young green sticky rice, still in the husk (lúa nếp non)', note: `Harvested 2-3 weeks before maturity — available only during the harvest window and only at the source.` },
        { amount: 2, unit: 'kg', name: 'clean fine sand (for roasting)', note: `The traditional heat-transfer medium — surrounds every grain with even, gentle, dry heat. Alternatively a very heavy dry pan over the lowest flame, stirring constantly.` },
      ],
    },
    {
      title: 'The coconut and sugar mix',
      items: [
        { amount: 200, unit: 'g', name: 'fresh coconut, finely grated', note: `Fresh only — its moisture and fat are the dressing. Desiccated is too dry and too stale.` },
        {
          amount: 100,
          unit: 'g',
          name: 'palm sugar (đường thốt nốt), crumbled or shaved',
          note: `The Khmer sugar — from the Borassus palm, tapped from the trees in every Trà Vinh Khmer compound. Deeper, more caramel, more mineral than cane sugar. Jaggery is the nearest substitute; brown sugar a distant third. White sugar misses entirely.`,
        },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'roasted sesame seeds (optional)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Roast the paddy in sand — 15-20 minutes of constant stirring (from-scratch only)',
      description: `Heat the sand in a wide heavy pan over medium heat until uncomfortably hot at 10 cm. Add the green paddy in 300 g batches and stir constantly with a wooden paddle, turning the grains through the hot sand.

Over 15-20 minutes the husks darken from green to olive to tan, the grains inside puff slightly — faint pops, like distant popcorn — and the smell shifts from grassy-raw to toasted and nutty. A grain bitten should be dry through, slightly puffed, and no longer milky-wet at its centre.

Pour through a coarse sieve to separate the sand, and move to the next batch. The sand is reused for every batch.`,
      tip: `Sand-roasting is the most elegant heat-transfer method in pre-industrial cooking. The 2 kg of hot sand holds far more thermal energy than a dry pan surface and releases it steadily, so the grain temperature rises gently rather than spiking. Each grain is enveloped on all sides rather than touching metal on one face, so there are no hot spots and no scorching. The same technique is used across India for puffed rice, across the Middle East for coffee, and across China for chestnuts. It predates thermometers by millennia and outperforms most of them.`,
    },
    {
      title: 'Winnow and pound flat — the rhythm is the technique (from-scratch only)',
      description: `Toss the roasted grain upward from a flat basket in a breeze or before a fan: heavy naked grain falls back, light papery husk drifts away.

Put the winnowed grain in a tall wooden mortar, 200 g at a time. Pound with a long pestle in a steady, moderate rhythm — straight down, lift, straight down — compressing the grains against the mortar floor into thin discs, not smashing to powder. The traditional method uses three or four women striking in interlocking sequence.

Pound 5-8 minutes per batch until every grain has been flattened to a translucent, irregular disc and no whole round grains remain. Winnow once more to remove loosened husk fragments.`,
      tip: `Pounding flattens rather than crushes because of a starch-state trick: the roasted young grain is still soft and plastic — its starch is partially gelatinized and still holds enough moisture to deform under compression rather than fracturing. A dry, mature, fully vitrified grain would shatter to dust. This is the physical reason cốm dẹp requires young rice: the grain must be in the narrow window where its starch is soft enough to press into a flake and firm enough to hold the shape afterward. Two weeks earlier it is too wet and sticks; two weeks later it is too hard and breaks. The festival's date tracks the grain's state, and the grain's state is the recipe.`,
    },
    {
      title: 'Mix with coconut and palm sugar — warm, by hand',
      description: `Whether from fresh-pounded or from a bag: toss the cốm dẹp with the grated coconut, crumbled palm sugar, the pinch of salt and the sesame if using. Mix by hand — your hands' warmth softens the palm sugar's edges and helps the coconut's moisture bind the flakes into loose, fragrant clusters.

Taste as you mix: the cốm should be green-sweet and toasted, the coconut rich and fresh, the palm sugar deep-caramel and faintly mineral. If the sugar is too hard, grate it finer; if the coconut is too dry, a spoonful of coconut cream rescues it.

Serve immediately, in a mound on a banana leaf, still faintly warm from the pounding — or, under the full moon, in a banana-leaf cone on a tray with incense, which is the dish's original and correct serving vessel.`,
      tip: `Palm sugar — đường thốt nốt — is worth naming its chemistry because it explains the flavour gap with white sugar. Borassus palm sap carries free glucose and fructose, amino acids, minerals (potassium, iron, zinc) and caramelisation precursors stripped during refining. A palm sugar has already undergone partial Maillard and caramelisation during its own production, which is why it tastes of toffee, butterscotch and mineral rather than flat sweetness. In a dish this simple — three ingredients — the sweetener IS a third of the flavour.`,
    },
    {
      title: 'Eat by the handful — and understand why it is only tonight',
      description: `Cốm dẹp is eaten by the handful, standing, directly from the banana-leaf tray, under the moon or under a ceiling light, with family or with no one.

It keeps one day, covered, at room temperature — by the second day the coconut has soured and the cốm has staled past recovery. There is no preserved version, no frozen version, no version that waits for a more convenient occasion. The green grain was alive this morning; the coconut was cracked this afternoon; the palm sugar was tapped this season. The dish is a snapshot of a harvest at a specific instant, and the instant does not pause.

This is why cốm dẹp is a festival food: it exists only when the rice is ready and only for as long as the rice stays green, and the festival exists to mark exactly that window. The ceremony and the recipe are the same event — a field becoming a plate becoming a prayer, in one evening, under one moon, at the pace of one harvest.`,
      tip: `Close with what cốm dẹp shares with every seasonal, hyper-perishable, festival-bound dish in this collection — the bánh trứng kiến (three weeks of ant eggs), the mực nhảy (four minutes between cage and plate), the phơi sương (one night's dew). These are foods that cannot be industrialised, cannot be shipped, and cannot be separated from their calendar without becoming something else. They are the dishes that require going to the place, at the time, and eating them there — and that requirement, which looks like a limitation, is what makes them matter. Cốm dẹp is rice that was green this morning, pounded this evening, and gone by tomorrow. The moon saw it. You ate it. The harvest will come.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
