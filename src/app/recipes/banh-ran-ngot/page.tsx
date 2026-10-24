'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-ran-ngot',
  title: `Bánh Rán Ngọt (Sweet Fried Sesame Balls with Mung Bean Filling)`,
  subtitle: `The savoury ball's sweeter sibling: the same glutinous rice dough, the same sesame-seed armour, but this one is hollow — puffed to a golden sphere twice its original size, light as a Christmas ornament, filled with a disc of sweetened mung bean paste and rolled in granulated sugar while still hot. The 3 PM snack of every Hanoi schoolchild, and the proof that the same dough, the same oil and the same seeds produce a completely different thing when the filling changes and the temperature rises.`,
  category: 'DESSERT',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-ran-ngot.jpg',
  intro: `Bánh rán ngọt is the other half of the bánh rán pair — the sweet to the previous recipe's savoury, the hollow to the previous recipe's stuffed, the puffed to the previous recipe's dense. The two share a dough, a sesame coat and a wok of oil, and they diverge at every other point: the sweet version puffs to a hollow sphere (because the filling is a thin disc of mung bean paste, not a heavy meatball, and the dough has room to inflate), it fries at a slightly higher temperature (to drive the puff), and it is rolled in sugar after frying rather than dipped in nước chấm. The finished product is a golden globe the size of a tennis ball, coated in sesame seeds and granulated sugar, hollow inside except for a thin layer of sweet mung bean paste pressed against the interior wall, and so light that three of them weigh less than one of the savoury version.

The puff is the spectacle and the physics. The dough ball enters the oil at roughly 4 cm diameter. Over 5-6 minutes, the moisture trapped in the dough converts to steam, the steam inflates the elastic glutinous-rice matrix from inside, and the ball expands to 7-8 cm — nearly doubling its diameter, which means roughly eight times its volume — while the sesame-studded crust sets around the expanding sphere. The finished ball is a thin-walled, hollow globe: tap it and it sounds like tapping a ping-pong ball. Bite it and the crust shatters into the hollow interior, and the mung-bean layer — pressed thin against the wall by the inflation — peels away in a sweet, dense, crumbling sheet.

The stalls that sell bánh rán ngọt are the same stalls that sell the savoury version — the same oil, the same wok, the same vendor — and they sit on every street corner in Hanoi between two and six in the afternoon. The price is almost nothing. The pleasure is enormous. And the two versions — savoury and sweet, side by side in the same glass case, one dense and one hollow, one dipped in fish sauce and one rolled in sugar — are one of the most satisfying pairs in Vietnamese street food: same starting point, same technique, different destination.`,
  ingredientSections: [
    {
      title: 'The dough',
      items: [
        { amount: 300, unit: 'g', name: 'glutinous rice flour (bột nếp)' },
        { amount: 80, unit: 'g', name: 'boiled potato, mashed smooth', note: `Same structural role as the savoury version — amylose reinforcement for the puff.` },
        { amount: 150, unit: 'ml', name: 'warm water, approximately' },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The mung bean filling',
      items: [
        {
          amount: 150,
          unit: 'g',
          name: 'split mung beans (đậu xanh), soaked 2 hours',
          note: `Steamed 20 minutes, mashed smooth while hot with sugar and coconut oil. The paste should be dense, smooth, faintly sweet and dry enough to roll into small discs without sticking.`,
        },
        { amount: 60, unit: 'g', name: 'sugar' },
        { amount: 1, unit: 'tbsp', name: 'coconut oil or butter', note: `Gives the paste a creamy richness that plain mung bean lacks.` },
        { amount: 0.25, unit: 'tsp', name: 'vanilla extract (optional)' },
      ],
    },
    {
      title: 'The sesame coat and sugar roll',
      items: [
        { amount: 100, unit: 'g', name: 'white sesame seeds, raw' },
        {
          amount: 100,
          unit: 'g',
          name: 'granulated sugar, in a wide tray',
          note: `The balls are rolled in sugar while still hot from the oil — the residual oil on the surface melts the sugar crystals slightly, creating a thin, crunchy, caramelised sugar shell that fuses with the sesame crust.`,
        },
      ],
    },
    {
      title: 'For frying',
      items: [
        { amount: 800, unit: 'ml', name: 'neutral oil, for deep-frying' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the mung bean filling discs — sweet, smooth, flat',
      description: `Steam the soaked mung beans 20 minutes until soft. Mash immediately while hot with the sugar, coconut oil and vanilla until perfectly smooth — no lumps. The paste should be dense enough to hold its shape and dry enough that it does not stick to your fingers.

Divide into 16 small portions (about 12-15 g each). Roll each into a ball, then press flat into a disc about 3 cm across and 5 mm thick. Set on a parchment-lined tray and chill 15 minutes — a cold disc holds its shape inside the dough better than a warm one.

The filling discs should be: flat (so they press against the interior wall when the ball puffs, rather than sitting as a lump at the bottom), smooth (so no texture fights the dough's chew), and sweet (they are the only sweetness in the ball itself — the dough is barely sweetened).`,
      tip: `The disc shape rather than a ball is the key to the sweet bánh rán's characteristic thin-layer-of-filling-against-the-wall result. During puffing, the steam inflates the dough from the centre outward, and anything in the centre is pushed to the wall. A ball of filling resists this push and stays as a lump; a disc of filling yields to it and spreads along the interior surface. The filling's shape at wrapping determines its shape at eating, and the disc-to-thin-layer transformation is the inflation's intended geometry.`,
    },
    {
      title: 'Wrap, seal, roll in sesame — the same method, lighter filling',
      description: `Make the dough exactly as the savoury version: glutinous rice flour, mashed potato, sugar, salt, oil, warm water. Knead to a smooth, elastic dough. Rest 10 minutes.

Divide into 16 pieces (about 30 g each). Flatten each into a disc in your palm, place a chilled mung bean disc in the centre, gather the edges, pinch to seal, and roll into a smooth ball. The ball should be slightly lighter and slightly smaller than the savoury version — the filling weighs less, and the lighter ball puffs more dramatically.

Roll in raw sesame seeds, pressing gently to embed. The ball is now: glutinous-rice-and-potato shell, sesame-studded surface, mung-bean disc at the centre. Set on an oiled tray.`,
      tip: `The lighter filling is the engineering difference between the sweet and the savoury ball. The savoury version's dense pork filling weighs roughly 25-30 g per ball — heavy enough to limit the dough's inflation, producing a thick-walled, barely-puffed, dense result. The sweet version's mung bean disc weighs 12-15 g — half the mass — and the freed weight budget goes to air: the dough expands further, the wall thins further, and the finished ball is a hollow globe rather than a solid sphere. Same dough, same oil, different filling weight, different final geometry. The filling's mass IS the puff's governor.`,
    },
    {
      title: 'Fry at 150°C start, then coax to 165°C — the slow-puff method',
      description: `Heat the oil to 150°C — LOWER than the savoury version, and the lowest frying temperature in this collection. Lower the balls in, 4-5 at a time.

For the first 2 minutes: the balls sit at the bottom, barely bubbling. The heat is penetrating the dough slowly, and the moisture inside is converting to steam gradually. Do not raise the heat yet.

At minute 2-3: the balls begin to float. This is the steam's first push — the dough is starting to inflate. NOW begin the coaxing: use a spider or two chopsticks to gently, repeatedly press each ball under the oil surface and release. Press-release, press-release, every 10 seconds. Each press compresses the expanding dough slightly, and each release lets the steam re-expand it — and with each cycle the ball is a tiny bit larger, a tiny bit rounder, and the wall is a tiny bit thinner.

Gradually raise the oil temperature to 160-165°C over the next 4-5 minutes while continuing the press-release rhythm. The balls expand visibly with each cycle — from 4 cm to 5 to 6 to 7 — and the crust transitions from pale to golden. The sesame seeds toast from white to amber.

The ball is done when: it is nearly double its original diameter, uniformly golden, light enough to spin freely in the oil currents, and a tap with the spider sounds hollow. Total frying time: 7-9 minutes.

Lift out. Drain 30 seconds on a rack. Then — while still hot — roll immediately in the tray of granulated sugar. The residual surface oil melts the sugar crystals slightly, and they adhere as a thin, crunchy, sweet shell over the sesame crust.`,
      tip: `The press-release coaxing is the secret technique of the bánh rán ngọt vendor, and it is the step that no home recipe adequately explains. Without it, the balls puff unevenly — one side inflates while the other stays flat, producing a lopsided, partly-hollow, partly-dense result. With it, the even, rhythmic compression redistributes the steam pressure throughout the ball's interior after each press, ensuring that every point on the wall experiences the same inflation force and the ball expands symmetrically. The press is the reset; the release is the puff; and the rhythm — every 10 seconds, for 5-6 minutes — is what produces the perfect sphere that the stall vendor's glass case displays in rows of golden, uniform, hollow globes.`,
    },
    {
      title: 'Sugar-crusted, hollow, golden — eat while the crust still remembers the oil',
      description: `The finished ball: a golden sphere the size of a tennis ball, coated in toasted sesame seeds fused to a crunchy sugar shell, light enough to toss and catch, and hollow enough that holding it to your ear and shaking produces a faint rattle from the mung bean disc sliding inside.

Bite through the sugar-sesame crust — it shatters into sweet, crunchy fragments. Beneath it: the thin, chewy, mochi-textured dough wall, inflated to perhaps 3 mm thick, with the characteristic glutinous-rice chew that clings to the tooth. Pressed against the interior wall: the mung bean layer, thin, dense, faintly sweet, crumbling where the dough is chewy. And in the centre: air. The hollow that the steam built and the crust preserved — the architecture of a balloon, made edible.

Eat within 15 minutes. The sugar shell absorbs atmospheric moisture fast (sugar is hygroscopic) and goes from crunchy to sticky to wet in that order. The vendor rolls each batch in sugar immediately before handing them over, and the walk from the stall to wherever you are eating is part of the timer.

Set the sweet ball beside the savoury one from the previous recipe and the pair tells a complete story: same dough, same wok, same seeds, and two different snacks — one dense-and-savoury for the eater who wants a meal replacement, one hollow-and-sweet for the eater who wants a pleasure. The vendor sells both from the same case. The customer buys whatever their three o'clock requires. And the oil — which has fried both — carries the flavour of each into the other, which is why a bánh rán mặn from a stall that also sells ngọt has a faint sweetness in its crust, and a ngọt from the same stall has a faint savouriness in its shell, and neither is a defect. The shared oil is the shared parentage.`,
      tip: `The sweet and the savoury bánh rán, made side by side from the same dough in the same oil, are the most elegant demonstration of the format-versus-filling principle in this collection. One dough, one frying medium, two fillings, two temperatures, two results: dense sphere and hollow globe, fish-sauce dip and sugar roll, meal and snack. The filling weight governed the puff. The frying temperature governed the crust. And the dough — the same elastic, potato-reinforced, amylopectin-amylose composite — accommodated both, because it was engineered for range, not for one job. The grandmother who invented the dough did not think in starch chemistry. She thought: what dough works for both? And the answer — glutinous rice plus potato — works for both because it was designed to, by a thousand afternoons of frying and a thousand adjustments, until the formula was right for every version and every temperature the wok would ask of it.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
