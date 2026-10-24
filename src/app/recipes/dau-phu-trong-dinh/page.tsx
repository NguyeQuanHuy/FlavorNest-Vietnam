'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'dau-phu-trong-dinh',
  title: `Đậu Phụ Trọng Đình Chấm Mắm Tôm (Village Tofu Dipped in Fermented Shrimp Paste)`,
  subtitle: `Tofu made that morning — still warm, trembling-soft, smelling of the soybean and nothing else — fried golden on both faces and dipped in mắm tôm whipped with lime until it foams pink. Two ingredients, one village, and the dish that the entire Red River Delta eats for lunch when it does not feel like trying.`,
  category: 'VEGETARIAN',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/dau-phu-trong-dinh.jpg',
  intro: `There are a thousand tofu villages in the Red River Delta — every district has one, the way every district has a rice mill and a noodle shop — but the one that Bắc Ninh names first is Trọng Đình, a hamlet in Tiên Du district where the wells draw from a limestone aquifer whose mineral content the villagers believe, with the unshakeable conviction of people who have compared, makes the best tofu in the province. The claim is not testable in any way that would satisfy a food scientist and not dismissable in any way that would satisfy someone who has eaten both. Trọng Đình tofu is denser, smoother, and more firmly set than the tofu from the village a kilometre away, and whether the water is the reason or the skill is the reason or the two are the same thing is a question Bắc Ninh is content to leave open.

The tofu is made fresh every morning by a process that has not changed since the village started: soybeans soaked overnight, ground wet, the slurry boiled, the soy milk strained through cloth, and then coagulated — not with the calcium sulfate (thạch cao) that factories use, but with giấm chua, a natural vinegar made from rice or from the previous batch's whey, which gives a softer, more delicate, slightly tangier curd than mineral coagulants do. The curds are ladled into cloth-lined moulds, pressed lightly, and the fresh tofu is turned out in trembling, warm, pale-gold blocks that smell of soybean and wet stone and the morning. It is sold within hours, often still warm, from the back of a bicycle or a motorbike, and a block bought at seven is fried by eight and eaten by nine. The Delta does not think of tofu as a shelf-stable protein; it thinks of it as a morning food, as perishable as bread, and the villages that make it well are known the way a Parisian arrondissement knows its boulangerie.

And then the eating is so simple it barely qualifies as a recipe, and that simplicity is the entire message. The tofu is cut into rectangles, fried in oil until both faces are golden and crisp while the interior stays white and custard-soft, drained, and dipped in mắm tôm — the fermented shrimp paste of the northern Delta, whipped with a squeeze of lime until it lightens from purple-grey to a foamy, aerated, pink emulsion that clings to the fried surface. One piece of tofu, one dip, one bite. The crunch of the fried skin, the yielding softness of the curd, the violent, funky, salty-sweet-sour hit of the whipped mắm tôm, and then a leaf of kinh giới or a sprig of rau húng to scrub the palate. Repeat. With rice, with bún, or with nothing at all — this is the dish the Delta eats standing at the kitchen counter when nobody is watching and nobody needs to be impressed.

Mắm tôm is the condiment that divides Vietnam more sharply than any political opinion. The south mostly declines it. The centre tolerates it. The north cannot imagine breakfast without it. It is a paste of fermented shrimp — small coastal brine shrimp, salted and fermented for months until they are a thick, purple, pungent, extraordinarily savoury mass — and its smell, to the uninitiated, is an event. Whipped with lime it transforms: the acid lightens the colour, aerates the paste, and drives off the harshest volatile amines while leaving the glutamate and the deeper savouriness intact. It goes from confrontational to compelling in the thirty seconds it takes to whip it, and that thirty seconds is the Delta's standing invitation to every visitor who thinks they do not like mắm tôm. Try it whipped. Then try to stop.`,
  ingredientSections: [
    {
      title: 'The tofu',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'fresh tofu, the freshest and softest you can find',
          note: `The morning's tofu from a Vietnamese grocer or an Asian market — soft-to-medium firm, pale, smelling of soybean and nothing else. In Europe the best tofu for this dish is the unpasteurised, water-packed kind from a Korean or Japanese grocer, or the fresh blocks from a Chinese tofu shop if your city has one. Avoid the shrink-wrapped, week-old, fridge-cold supermarket block if you can — it will work, but it will not tremble. Cut into rectangles about 6 x 4 cm and 2 cm thick. Pat completely dry on paper towels — wet tofu spatters in oil and steams instead of frying, and a steamed crust is no crust at all.`,
        },
        { amount: 150, unit: 'ml', name: 'neutral oil, for shallow-frying', note: `Enough to come halfway up the tofu pieces. Peanut oil is traditional and adds a faint nuttiness that the Delta palate expects.` },
      ],
    },
    {
      title: 'The whipped mắm tôm',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'mắm tôm (fermented shrimp paste)',
          note: `The purple-grey, pungent, unapologetically aromatic fermented shrimp paste of the northern coast. Sold in jars at every Vietnamese grocer. Buy a good one — the colour should be a uniform dark purple-brown, the texture thick, and the smell powerful but not rotten. Cheap mắm tôm tastes of salt alone; good mắm tôm tastes of the sea, of umami, and of something you cannot name until you have been eating it for a year.`,
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'fresh lime juice',
          note: `The catalyst. Squeezed directly into the paste and whipped — the acid lightens the colour from purple to pink, aerates the paste into a foam, and volatilises the harshest amines (trimethylamine) while leaving the glutamate intact. This is the Delta's universal mắm-tôm transformation and it takes thirty seconds.`,
        },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, name: 'red chili, sliced thin (or a few drops of chili oil)' },
        { amount: 1, unit: 'tsp', name: 'rice vinegar (optional — some households add a splash for extra lift)' },
      ],
    },
    {
      title: 'The table',
      items: [
        {
          amount: 1,
          name: 'small bunch of kinh giới (Vietnamese balm / lemon balm)',
          note: `The fixed herb partner to mắm tôm across the entire north — its cool, slightly medicinal, faintly minty bite is calibrated precisely against the paste's funk. Rau húng lủi (spearmint) is the second choice. Either one, one leaf per bite, is the palate-cleaner the dip demands.`,
        },
        { amount: 1, name: 'small bunch of tía tô (perilla), whole leaves' },
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 1, name: 'plate of cà pháo muối (pickled baby eggplant) or dưa muối (pickled mustard greens)', note: `The northern lunch plate's acid counterweight — crunchy, sour, salt-fermented, and present on every table that carries mắm tôm.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Dry the tofu — this is the entire frying insurance',
      description: `Cut the tofu into rectangles 6 x 4 x 2 cm. Lay them in a single layer on a triple thickness of paper towels, set another triple layer on top, and press gently for 5 minutes. Replace the towels if they are saturated and press again.

The surface of each piece should feel matte-dry to the fingertip, not glossy-wet. Every drop of surface water that enters the hot oil becomes a steam explosion — spattering oil across the stove, dropping the oil temperature 15 degrees, and steaming the tofu's surface grey and limp where it should be golden and crisp.

Five minutes of pressing is the difference between a restaurant-quality golden crust and a pale, waterlogged, floppy disaster. No technique in the frying step can compensate for a wet starting surface.`,
      tip: `Tofu is roughly 85% water by weight, and no amount of pressing removes the internal water — only the surface and near-surface moisture. The goal is not to dehydrate the block (which would turn it rubbery) but to create a dry outer millimetre that can contact hot oil directly, without a water barrier, and undergo Maillard browning. Oil at 170°C dehydrates and browns that dry outer layer into a crisp, golden shell in about 90 seconds; the interior water stays where it is, keeping the centre custard-soft. Dry surface, wet centre: one texture gradient, created by five minutes of paper towel.`,
    },
    {
      title: 'Fry golden — 170°C, 90 seconds per face, do not move it',
      description: `Heat the oil in a wide pan to 170°C — a small cube of tofu dropped in should sizzle immediately and rise to the surface in a stream of fine bubbles. Lay the dried tofu pieces in the oil in one layer, not touching. Do not crowd.

Fry 90 seconds per side — do not touch, do not nudge, do not lift to check. The crust forms by dehydration and Maillard browning of the soy protein at the surface, and every time you move a piece you tear the forming crust off the pan floor and it resets to zero.

At 90 seconds, slide a thin spatula under and flip in one confident motion. The underside should be a deep, even golden-brown. Fry the second side 90 seconds. Drain upright on a rack — flat on paper and the steam from the hot interior softens the underside crust.

The pieces should sound hollow when tapped with a chopstick — a thin, crisp, golden shell around a soft white interior. That hollow tap is the quality signal, and it tells you the crust dehydrated fully before you pulled it.`,
      tip: `Tofu's surface protein — mostly glycinin and beta-conglycinin — undergoes Maillard browning at around 150-170°C, producing the same pyrazines and Strecker aldehydes that brown meat and bread. At 170°C the browning is fast enough to build a full golden crust in 90 seconds — before the internal temperature rises enough to toughen the centre. Below 150°C the surface absorbs oil without browning and the tofu turns greasy-soggy; above 190°C the surface burns before the crust has formed a continuous shell. 170°C is the window, and 90 seconds is the flight time through it.`,
    },
    {
      title: 'Whip the mắm tôm — thirty seconds, and the paste transforms',
      description: `Put the mắm tôm in a small bowl. Squeeze the lime juice directly in. Add the sugar. Now whip — with a fork, with chopsticks, with a small whisk — vigorously, for 30 seconds, incorporating air with every stroke.

Watch it change: the dense, purple-grey paste lightens to a foamy, aerated, pale pink emulsion — roughly doubling in volume as the air is whipped in. The smell shifts simultaneously: from sharp, sinus-clearing, raw-fermented to something rounder, warmer, almost fruity-savoury.

Scatter the sliced chili over the surface. The saucer is ready. It will hold its foam for about 10 minutes before deflating and darkening — which is why it is whipped at the last moment, every time, and never made in advance.

If you have never eaten mắm tôm before: dip a piece of hot fried tofu into the whipped paste, add a leaf of kinh giới, and eat the whole thing in one bite. The tofu's crisp-then-soft, the paste's salty-funky-lime, and the herb's cool-minty arrive together, and the combination is one of the most complete single bites in Vietnamese cooking. The second piece will be in the paste before you have finished chewing the first.`,
      tip: `The whipping is acid-volatile chemistry in real time. Lime juice (citric acid) protonates the trimethylamine in the paste — the compound most responsible for the "fishy" top note — converting it from a volatile free base to a non-volatile salt that no longer reaches the nose. Simultaneously, the whipping physically aerates the paste, introducing air bubbles that carry the remaining pleasant volatile esters upward (the fruity-savoury notes) while the heavier, harsher compounds stay in the liquid phase. The colour change from purple to pink is a pH shift in the shrimp's astaxanthin pigment — the same chemistry that turns a lobster shell from brown to red when boiled. Thirty seconds, one squeeze of lime, and the paste has been chemically edited into a different condiment — the same ingredients, rearranged by acid and air into something almost everyone likes, including people who swore they never would.`,
    },
    {
      title: 'Dip, bite, herb, rice — and understand why this is the Delta lunch',
      description: `Serve the fried tofu hot on a plate, the whipped mắm tôm in its saucer, the herbs alongside, and the rice in individual bowls. The pickled eggplant or mustard green goes on a small side plate.

The motion: chopstick a piece of tofu, press one face into the pink foam so a visible coat clings, lift, set a leaf of kinh giới on top, and eat in one bite. Follow with a mouthful of rice. Then a bite of pickle. Then the next piece of tofu, already being lifted toward the saucer.

This is the northern Delta working lunch — đậu phụ mắm tôm — and it is the meal that has no season, no occasion, no ceremony and no pretension. It costs less than bread. It takes less time than a sandwich. It feeds a family for an hour from a single block of morning tofu and a jar of paste that sits in the cupboard for months. And it tastes — in the way that only a combination of fresh-fried protein and aged ferment can taste — of both that morning's soybean and last year's shrimp, in the same bite, in the same second.

The dish needs no closing tip because it is its own closing tip: the simplest food is often the best food, the cheapest food is often the most flavourful, and a village that makes one thing well — tofu, from its own water, every morning, for longer than it can remember — has understood something about cooking that a recipe with forty ingredients has not. Make the ingredient right. Fry it. Dip it. The rest is commentary.`,
      tip: `This dish is the collection's final proof of a thesis it has been building since the first page: that Vietnamese cooking is, at its foundation, a system of fermented seasonings meeting fresh ingredients, and that the depth of the cuisine lives not in the complexity of its dishes but in the depth of its jars. The mắm tôm in the saucer was shrimp, caught months or years ago, transformed by salt and time into something no fresh shrimp can be. The tofu on the plate was a soybean, soaked last night, ground this morning, set by the previous batch's own acid, fried five minutes ago. The bite that brings them together — fresh-fried this-morning protein dipped in last-year's ferment — is the simplest possible expression of the cuisine's architecture: time in the jar, freshness on the plate, and the eater's hand is the bridge between them. Every dish in this collection, from the mắm bò hóc of Trà Vinh to the tương of Bần, has been this same structure dressed in different clothes. The tofu and the paste just wear the fewest.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
