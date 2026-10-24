'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-ran-man',
  title: `Bánh Rán Mặn (Savoury Fried Glutinous Rice Balls with Sesame Crust)`,
  subtitle: `Glutinous rice dough — soft, elastic, faintly sweet — wrapped around a filling of minced pork, glass noodles, wood-ear mushroom and onion, rolled in white sesame seeds, and deep-fried until the crust is a golden, seed-studded, shattering shell and the inside is a dense, savoury, mochi-chewy dumpling. The Hanoi street snack that exists in the afternoon space between lunch and dinner.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-ran-man.jpg',
  intro: `Bánh rán is the Vietnamese fried doughnut — a sphere of glutinous rice dough, deep-fried, coated in sesame — and it comes in two versions that share a name, a shape and a method but occupy completely different positions on the palate. Bánh rán ngọt is the sweet version: a hollow, puffed, golden ball filled with nothing or with a smear of mung bean paste, rolled in sugar, eaten as a snack. Bánh rán mặn is the savoury version: a denser, heavier, sesame-crusted ball filled with a minced-pork-and-glass-noodle stuffing, eaten as a meal replacement or a substantial afternoon snack, dipped in a clear nước chấm. The two are siblings — same mother (glutinous rice flour), same bath (the frying oil) — but they grew up to be different adults, and this recipe is about the savoury one.

The dough is standard Vietnamese glutinous rice dough: nếp (glutinous rice flour) hydrated with warm water, kneaded to a smooth, elastic, slightly sticky mass, and — the bánh rán's specific addition — mixed with a small proportion of boiled, mashed potato or sweet potato, which gives the dough its characteristic chewiness, its structural integrity during frying, and its ability to puff slightly without bursting. The potato starch cross-links with the rice's amylopectin in a way that pure rice dough cannot achieve, producing a network that is elastic enough to expand in the oil (the trapped moisture turns to steam and inflates the dough) but strong enough not to tear (the potato's amylose provides the tensile strength the rice's near-pure amylopectin lacks). The result: a fried ball that is crispy-golden on the outside, puffed to a thin shell, with a dense, mochi-chewy layer underneath and a pocket of hot filling at the centre.

The filling is the northern Vietnamese standard for any stuffed dough: thịt băm (minced pork), miến (glass noodles, soaked and chopped), mộc nhĩ (wood-ear mushroom, soaked and minced), hành khô (minced shallot), mùi (coriander), nước mắm, tiêu. It is the same filling that goes into bánh cuốn, bánh gối, nem rán — the northern stuffing template, varied in proportion but fixed in identity — and its savoury, texturally complex, fish-sauce-seasoned character is what makes the bánh rán mặn a meal rather than a snack.

The sesame crust is the visual signature and the textural exclamation point. Before frying, each ball is rolled in a tray of raw white sesame seeds, which stick to the dough's tacky surface and, during frying, toast to golden in the oil — each seed becoming a tiny point of toasted-nutty crunch embedded in the golden crust. The finished ball is studded like a medieval mace with sesame armour, and the first bite through the crust is a double shatter: the fried dough's glass-transition crispness plus the sesame's individual crunch, producing a texture that is more complex than either alone.

The stalls that sell bánh rán mặn sit on street corners in Hanoi's Old Quarter, typically in the late afternoon between two and five, and they fry to order — each ball dropped into the oil when the customer points, fished out three minutes later, drained for thirty seconds, and handed over in a small plastic bag with a rubber-banded sachet of nước chấm. It is the snack that Hanoi office workers eat at their desks at three o'clock, and the snack that schoolchildren eat on the walk home, and the snack that proves a culture's street food is measured not by its complexity but by its timing: the right food, at the right hour, at the right price, in the right hand.`,
  ingredientSections: [
    {
      title: 'The dough',
      items: [
        { amount: 300, unit: 'g', name: 'glutinous rice flour (bột nếp)' },
        {
          amount: 100,
          unit: 'g',
          name: 'boiled potato or sweet potato, mashed smooth while hot',
          note: `The structural booster — its amylose cross-links with the rice flour's amylopectin, giving the dough the tensile strength to puff without tearing and the chewiness that pure rice dough lacks.`,
        },
        { amount: 150, unit: 'ml', name: 'warm water, approximately' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (kneaded into the dough)' },
      ],
    },
    {
      title: 'The filling',
      items: [
        { amount: 200, unit: 'g', name: 'minced pork (70% lean)' },
        { amount: 30, unit: 'g', name: 'glass noodles (miến), soaked 15 min, drained, chopped into 2 cm lengths' },
        { amount: 15, unit: 'g', name: 'dried wood-ear mushroom (mộc nhĩ), soaked, minced', note: `The crunch inside the filling — its cartilage-like texture gives each bite an audible snap that the pork alone cannot provide.` },
        { amount: 2, name: 'shallots, minced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (for cooking the filling)' },
      ],
    },
    {
      title: 'The sesame crust and frying',
      items: [
        {
          amount: 100,
          unit: 'g',
          name: 'white sesame seeds, raw, in a flat tray',
          note: `Raw — they toast in the oil during frying. Pre-toasted sesame would burn to bitterness at frying temperature.`,
        },
        { amount: 800, unit: 'ml', name: 'neutral oil, for deep-frying' },
      ],
    },
    {
      title: 'The nước chấm',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 3, unit: 'tbsp', name: 'sugar' },
        { amount: 4, unit: 'tbsp', name: 'warm water' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, name: 'cloves garlic, pounded fine' },
        { amount: 1, name: 'red chili, sliced' },
        { amount: 1, unit: 'tbsp', name: 'julienned carrot (for colour)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Cook the filling, then make the dough — filling must be cold before wrapping',
      description: `FILLING: heat oil in a pan. Fry the shallots 30 seconds. Add the minced pork, breaking it into fine crumbles. Cook 3-4 minutes until no longer pink. Add the chopped glass noodles, minced wood-ear, fish sauce, pepper and sugar. Stir-fry 2 minutes — the glass noodles absorb the pork's rendered fat and the fish sauce. Cool completely before filling — hot filling melts the dough and the balls burst in the oil.

DOUGH: combine the glutinous rice flour, mashed potato, sugar, salt and oil. Add warm water gradually, kneading, until a smooth, elastic, non-sticky dough forms — it should feel like soft clay, pliable and slightly tacky but not sticking to your palm. Rest 10 minutes under a damp cloth.

The dough should pass the window-pane test adapted for glutinous rice: stretch a small piece — it should stretch thin enough to be faintly translucent before tearing. If it tears immediately, knead more or add a teaspoon of water. The elasticity is the puff's prerequisite.`,
      tip: `The potato's role in the dough is invisible but critical. Glutinous rice flour alone — pure amylopectin — makes a dough that is extremely sticky, extremely soft, and has almost no tensile strength: it stretches but cannot hold a shape, and in hot oil it either tears (if the steam pressure exceeds the dough's yield strength) or stays flat (if the dough cannot stretch enough to accommodate the steam). The mashed potato introduces amylose — the linear starch that glutinous rice lacks — which forms a tighter, more rigid gel network alongside the amylopectin's branched network. The result is a composite dough: amylopectin for elasticity (it stretches), amylose for strength (it holds). The potato is not filler. It is the structural rebar inside the concrete.`,
    },
    {
      title: 'Wrap, roll in sesame — tight, round, fully coated',
      description: `Divide the dough into 16 pieces (about 30 g each). Flatten each piece into a disc 7-8 cm across in your palm — thin at the edges, slightly thicker at the centre (the thin edge wraps and seals; the thick centre becomes the ball's equator where the crust is thickest).

Place a tablespoon of the cooled filling in the centre. Gather the edges up, pinch to seal, and roll between your palms into a smooth ball. No cracks, no thin spots — any weakness in the dough is a blowout point in the oil.

Roll each ball in the tray of raw sesame seeds, pressing gently so the seeds embed in the dough's tacky surface. The ball should be uniformly coated — no bald patches. Set on an oiled tray, not touching.`,
      tip: `The sesame seeds must be raw — a detail that feels wrong but is correct. Raw sesame adheres to the dough because its dry surface bonds to the dough's moist surface by capillary adhesion. In the oil, the seeds toast IN SITU from raw to golden in exactly the 3-4 minutes the ball needs to fry — reaching the same Maillard development they would in a dry pan, but embedded in a crust rather than loose. Pre-toasted seeds would continue browning past golden to bitter-black at frying temperature (170°C for 3-4 minutes), because they arrive at the oil already browned and have no headroom. The raw-to-toasted window must align with the fry-to-done window, and it does — three minutes for both, simultaneously.`,
    },
    {
      title: 'Fry at 160-165°C — low and slow, 6-8 minutes, rolling constantly',
      description: `Heat the oil to 160-165°C — LOWER than most frying in this collection, and deliberately so. Bánh rán mặn is a thick, dense, glutinous ball that needs time for the heat to reach the centre, and higher oil would burn the sesame and the crust before the interior is cooked.

Lower 4-5 balls into the oil gently. They will sink, pause, then rise as steam begins to inflate the dough from inside. Once they float: use chopsticks or a spider to ROLL them continuously in the oil — gentle, constant rotation, keeping every surface in contact with the oil for equal time. This rolling is the technique that produces a uniformly round, uniformly golden ball rather than a lopsided, half-browned one.

Fry 6-8 minutes total, rolling throughout. The balls puff slightly (not dramatically — the filling prevents full inflation), the crust turns from pale to deep gold, the sesame seeds toast from white to golden-brown, and the surface firms to a shattering hardness.

Lift out and drain on a rack. The ball should be: uniformly golden, studded with toasted sesame, audibly crisp when tapped, and light for its size (the puffed layer between crust and filling is air, and the air is the proof of the dough's structural success).

REST 2-3 minutes before eating — the filling inside is volcanic, and a bite too soon is a burn that no nước chấm can soothe.`,
      tip: `The 160-165°C temperature is an outlier in this collection's frying file, and the reason is the ball's geometry. A flat fritter (like the bánh cống) has a short thermal path from surface to centre — heat arrives fast, and 170-175°C is appropriate. A sphere has the longest possible thermal path for its volume — heat must travel from the surface to the geometric centre — and the path length means a higher temperature would over-brown the surface before the centre reaches the 70°C needed to cook the pork inside. The lower temperature gives the heat time to diffuse inward without the surface running ahead. Geometry dictates temperature. A sphere fries cooler than a disc.`,
    },
    {
      title: 'Dip in nước chấm — shatter the crust, find the filling',
      description: `Mix the nước chấm: dissolve sugar in warm water and fish sauce, add lime juice, garlic, chili and the julienned carrot.

Eat by hand. Hold the ball, dip one side in the nước chấm, and bite. The bite sequence: sesame seeds crunch first (individual, granular, toasted-nutty); the fried dough shell shatters second (glass-crisp, neutral-sweet); the chewy glutinous layer yields third (mochi-dense, elastic, clinging to the tooth); and the filling arrives fourth (pork-savoury, glass-noodle-slippery, wood-ear-crunchy, fish-sauce-salty). Four textures in one bite, from the same ball, in that order.

The nước chấm on the bitten surface runs into the gap between crust and filling, mixing with the pork's rendered fat and the dough's starch in a small, concentrated pool of savoury liquid that the next bite scoops.

Eat 3-4 per person. They are substantial — the glutinous dough and the pork filling make each ball roughly equivalent to a bowl of rice in caloric density — and the afternoon snack format assumes 3-4, not 10. The stall vendor counts by eye: one bag for one person, four balls, one sachet of nước chấm, and the transaction is done before the traffic light changes.`,
      tip: `Bánh rán mặn is the fried-dough dish that brings together every starch technology in this collection's frying file. The glutinous rice flour (amylopectin-dominant) provides the elastic chew. The potato (amylose-supplemented) provides the structural strength. The tapioca starch in the glass noodles inside provides the translucent slipperiness. The sesame on the surface provides the point-source crunch. Four different starches, four different textures, four different jobs, in one ball — and the ball is a sphere the size of a golf ball sold for a few thousand đồng on a Hanoi pavement. The engineering per đồng is the highest in the collection, and the engineer is a grandmother with a wok.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
