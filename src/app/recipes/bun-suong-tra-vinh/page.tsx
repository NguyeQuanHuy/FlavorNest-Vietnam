'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-suong-tra-vinh',
  title: `Bún Suông Trà Vinh (Shrimp-Paste Stick Noodle Soup)`,
  subtitle: `A clear pork-shrimp broth poured over bún, topped with golden fried sticks of pounded shrimp paste — springy, sweet, faintly crisp at the edges — alongside sliced pork, quail eggs and the Trà Vinh herb pile. The only noodle soup in the Delta that fries its protein into a shape, and the reason is the name: suông means cylindrical, and the sticks are the dish.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/bun-suong-tra-vinh.jpg',
  intro: `Bún suông is one of those dishes that marks a province instantly. Say bún nước lèo and half the Delta claims it; say bún suông and you are talking about Trà Vinh, specifically, and about one element in the bowl that no other province's noodle soup carries: the suông itself, a golden fried stick of pounded shrimp paste about the length and thickness of a cigar, springy inside and faintly crisp at its fried edges, swimming in a clear broth alongside sliced pork and halved quail eggs. The suông is what you came for, and everything else in the bowl exists to make its arrival more vivid.

The paste is the same myosin-gel chemistry this collection has met in the bò viên, the nem lụi and the bánh canh dollops — fresh shrimp pounded with salt until the protein dissolves and cross-links into an elastic network — but shaped and cooked differently from any of them. Instead of balls poached in broth or paste moulded on skewers, the bún suông paste is formed into smooth cylinders, about 2 cm thick and 8 cm long, and fried in oil until the outside is golden and sealed and the inside is just set to a bouncy, yielding firmness. The frying gives the sticks something no poached shrimp product can have: a Maillard crust, a thin layer of caramelised protein on the surface that tastes toasted, sweet and almost nutty, and that holds its integrity in hot broth for the length of a bowl without going soggy. It is, in effect, a fried sausage made from shrimp, and its texture profile — crisp bite yielding to a springy, sweet, pop-in-the-mouth interior — is unique in the Vietnamese noodle-soup canon.

The broth is deliberately clean and light, for the same reason that always governs a bowl built around a single star: a loud broth would compete. Pork bones and shrimp shells simmered long, skimmed obsessively, seasoned with fish sauce and a light hand of sugar — the southern-Delta register, sweet enough to round the shrimp and clean enough to frame it. The toppings beyond the suông are supporting cast: sliced boiled pork, halved boiled quail eggs (the Delta's favourite miniature protein, appearing here as a visual and textural grace note), and the standard southern platter of bean sprouts, banana blossom, herbs and lime.

The bowl belongs to the Trà Vinh market morning — specifically to a handful of stalls in the city market and along the roads radiating from it — and its fame, while genuine within the Delta, has never quite crossed the national consciousness the way bún nước lèo has. This is partly because the suông is fiddly to make in quantity (each stick is hand-formed) and partly because its texture is fragile (it must be fried shortly before service and does not hold). The stalls that make it well make nothing else, and they tend to sell out by nine in the morning, which is the surest quality signal in Vietnamese market food: a dish that disappears before ten is a dish the market trusts.`,
  ingredientSections: [
    {
      title: 'The suông (fried shrimp-paste sticks)',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'fresh shrimp, peeled, deveined, patted very dry',
          note: `The freshest you can buy — the paste has nowhere to hide staleness. Pat aggressively dry: surface water is the enemy of the myosin gel, and wet shrimp gives a soft, crumbly stick that falls apart in the fryer.`,
        },
        { amount: 8, unit: 'g', name: 'fine salt (roughly 1.6% of the shrimp weight)', note: `The structural dose — dissolves the myosin and enables the gel. Measure it; too little and the paste stays crumbly, too much and the sticks taste salty rather than sweet.` },
        { amount: 50, unit: 'g', name: 'pork back fat, finely diced and frozen hard', note: `About 10% — the internal baste. It melts during the fry into micro-pockets that keep the stick juicy. Without it the lean shrimp paste sets dry and chalky.` },
        { amount: 1, unit: 'tbsp', name: 'tapioca starch', note: `A light binder that also helps the surface fry to a smoother, more golden crust.` },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'ground white pepper' },
        { amount: 1, unit: 'tsp', name: 'fish sauce' },
        { amount: 2, name: 'cloves garlic, pounded fine' },
        { amount: 2, unit: 'tbsp', name: 'crushed ice', note: `Worked in during the pounding to keep the paste below 10°C — the same thermostat that governs every springy paste in this collection.` },
        { amount: 500, unit: 'ml', name: 'neutral oil, for frying' },
      ],
    },
    {
      title: 'The broth',
      items: [
        { amount: 800, unit: 'g', name: 'pork bones', note: `Blanched 5 minutes, rinsed, restarted in fresh water.` },
        { amount: 1, name: 'reserved shrimp shells and heads from the peeling above', note: `Toasted in a dry pan 3-4 minutes until coral and fragrant, then added to the stock — the free-flavour second extraction that this collection has run in every shrimp broth from Nam Phổ to Trà Vinh.` },
        { amount: 2, unit: 'L', name: 'water' },
        { amount: 1, name: 'yellow onion, halved and charred' },
        { amount: 20, unit: 'g', name: 'ginger, charred and bruised' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The toppings',
      items: [
        { amount: 250, unit: 'g', name: 'pork leg or shoulder, poached in the broth, chilled, sliced thin' },
        { amount: 8, name: 'quail eggs, boiled 3 minutes, peeled, halved', note: `The Delta's favourite miniature protein — visual, textural, and exactly the right scale for a noodle soup where the star is something else.` },
        { amount: 2, unit: 'tbsp', name: 'fried shallots' },
        { amount: 3, name: 'scallions, sliced' },
      ],
    },
    {
      title: 'The noodles and the platter',
      items: [
        { amount: 600, unit: 'g', name: 'fresh bún (rice vermicelli)' },
        { amount: 200, unit: 'g', name: 'bean sprouts' },
        { amount: 100, unit: 'g', name: 'banana blossom, shredded, in lime water' },
        { amount: 100, unit: 'g', name: 'herbs: húng quế, rau răm, ngò gai' },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 3, name: 'bird\'s-eye chilies, sliced, in fish sauce' },
      ],
    },
  ],
  steps: [
    {
      title: 'Pound the shrimp paste cold — salt first, fat last, and keep it below 10°C',
      description: `Put the dry shrimp and the salt in a chilled food processor or mortar and work them — salt first, alone, for 60 seconds in the processor or 5 minutes by hand — until the mass goes from chopped pink shrimp to a sticky, cohesive, pale-pink paste that clings to the blade in one lump.

Then work in the ice, sugar, fish sauce, garlic, pepper and tapioca starch. Fold in the frozen fat last, just until distributed — the fat should stay in visible dice, not dissolve.

Slap the paste down into the bowl a dozen times until it lands with a dense thud. Touch the back of your hand to it: it must feel cold. If it feels merely cool, return it to the freezer for 10 minutes.

The paste is ready when a pinch pulled off and pressed between wet fingers springs back slowly. Chill 20 minutes before shaping.`,
      tip: `This is the myosin gel for the fifth time in this collection — salt dissolves the contractile protein, shearing unwinds it, slapping aligns it, and cold keeps it all from denaturing before it reaches the oil — and by now the principle is a friend. What is new is the destination: not a ball poached gently in broth (the bò viên), not a paste moulded on a stalk (the nem lụi), not a dollop simmered in thickened soup (the bánh canh), but a freestanding cylinder fried at 165°C. The fry adds a dimension none of the others have — a caramelised Maillard crust — which is why the paste needs the frozen fat as internal insurance: without it the lean shrimp crust-to-core would overcook and dry before the crust finishes browning. The fat is the timing mechanism.`,
    },
    {
      title: 'Shape the sticks — smooth, even, 8 cm long',
      description: `Wet your hands with oil. Take about 50 g of paste, roll it between your palms into a smooth cylinder roughly 2 cm thick and 8 cm long — a fat cigar. Lay it on an oiled tray. Repeat to make 12-14 sticks.

They should be smooth-surfaced, uniform in thickness, and straight. A lumpy or cracked surface fries unevenly — thick spots stay raw while thin spots scorch — and a tapered stick cooks its thin end to chalk while the thick end stays soft. Precision here is not fussiness; it is heat-management expressed as shape.

Chill the formed sticks 15 minutes before frying. Cold paste holds its shape in the first critical seconds of hot oil; room-temperature paste slumps and flattens.`,
      tip: `The cylinder is the optimal geometry for a fried protein stick, and the reason is surface-to-volume ratio. A sphere (the bò viên shape) has the minimum surface area for its volume — good for poaching, where you want minimal surface denaturation, but bad for frying, where the whole point is the crust. A flat patty has maximum surface — good for a burger, but the interior overcooks before you can build a thick crust. A cylinder splits the difference: enough surface for a satisfying golden crust, enough core volume to stay springy and moist at the centre, and an even thickness that cooks uniformly around its circumference. The suông shape is not tradition for its own sake. It is the geometry that delivers both textures at once.`,
    },
    {
      title: 'Fry at 165°C — golden, sealed, 4-5 minutes',
      description: `Heat the oil to 165°C in a wok or deep pan — a chopstick tip should stream steady bubbles, not furious foam. Lower the sticks in gently, 4-5 at a time, and fry 4-5 minutes, turning once at the halfway mark with tongs.

They are done when: uniformly golden all around (no pale patches), the surface feels firm and faintly crisp under the tongs, and a stick tapped against the wok rim gives a light, solid knock rather than a soft thud.

Drain upright on a rack. Do not pile them — steam trapped between stacked sticks softens every surface you just built. Fry all batches before assembling any bowls.

At 180°C the crust burns before the core sets. At 150°C the paste absorbs oil and turns greasy-soft. 165°C is the window where both arrive together — the same narrow range the bánh ram ít used for its glutinous discs, and for the same physics.`,
      tip: `The frying does something to the shrimp paste that no poaching or steaming can: the Maillard reaction. At 165°C the amino acids and sugars on the stick's surface recombine into hundreds of new volatile and non-volatile compounds — pyrazines, furanones, Strecker aldehydes — that smell and taste toasted, nutty, caramelised and deeply savoury. These are the same compounds a seared steak develops, a crust of bread develops, and a grilled nem lụi develops — but the shrimp version has its own specific register, sweeter and more marine, because shrimp's free amino acids (glycine, alanine, glutamate) and its sugars produce a distinct Maillard fingerprint. The golden crust is not a colour. It is a flavour, and it is the whole reason the suông is fried rather than poached.`,
    },
    {
      title: 'Build the broth and assemble — suông placed last, always',
      description: `Build the broth while the paste chills: blanched bones, toasted shrimp shells, charred onion and ginger in 2 L water, simmered 90 minutes, strained, seasoned. Poach the pork piece at 30 minutes, pull at 90, chill and slice.

Blanch the bún 10 seconds, drain into bowls. Lay the sliced pork and the halved quail eggs on one side. Ladle the hot broth over. Scatter scallion, fried shallots and pepper.

Place the suông last — two or three sticks per bowl, laid gently across the top so they sit half-submerged, half-proud. They must arrive at the table with their crust still intact. A suông buried in broth for five minutes before serving has already lost its edge; one placed at the moment of service gives the eater three or four minutes of crunch-to-spring before the broth does its softening work. That window is the dish.

Serve the herb platter alongside. Eat the suông first, while its crust holds, dipped in the chili-fish-sauce saucer. Then the pork, the egg, the herbs, the broth. The bowl is paced by the suông's texture clock, and the clock is short.`,
      tip: `The suông's crunch is on a countdown the moment broth touches it — hot liquid migrates through the Maillard crust by capillary action at a rate governed by the crust's porosity and the broth's temperature, and within five minutes the shrimp paste has rehydrated and softened from crisp-edged back to uniformly springy. Placing the sticks last, at service, buys the maximum window; the Trà Vinh stalls fry continuously through the morning and lay each batch into the bowls as they finish, never in advance. It is the same last-second-assembly principle that governs the ram inside the bánh mướt, the cracker under the hến, and every crisp-against-soft pairing this collection has documented. Crunch has a half-life, and the recipe is always, in the end, a schedule.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
