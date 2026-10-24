'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ram-cuon-cai',
  title: `Ram Cuốn Cải (Huế Crispy Spring Rolls Wrapped in Mustard Greens)`,
  subtitle: `Tiny, finger-length spring rolls of pork, shrimp, glass noodle and wood ear — fried to a shattering, golden, bubble-crusted crispness in rice paper — then rolled inside a blanched mustard leaf with herbs, green banana and star fruit, and dunked in nước lèo, the thick peanut-liver dipping sauce of Huế. The crunch inside the green, and the green inside the dip.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/ram-cuon-cai.jpg',
  intro: `Ram is the Huế word for what Hanoi calls nem rán and Saigon calls chả giò — a fried spring roll — but calling it a spring roll and moving on would miss everything that makes Huế's version its own dish. Ram is smaller: finger-length, thumb-thick, daintier and more precise than the fat Saigon chả giò or the full-sized Hanoi nem. It is wrapped in bánh tráng — rice paper, not wheat-flour wrapper — which puffs, blisters and shatters in the hot oil in a way no wheat wrapper can, producing a surface texture of tiny, irregular, golden bubbles that is the visual signature of every Huế ram. And it is not eaten on its own, the way a Saigon chả giò is eaten beside a bowl of bún or with nước chấm: it is eaten INSIDE something else — wrapped in a leaf of blanched mustard green or lettuce with herbs, green banana and star fruit, and dipped in the nước lèo that Huế pours on everything it is most proud of.

The roll-inside-a-roll is the architecture, and it is the most Huế construction in the collection's Huế file. A crispy thing (the ram) is placed inside a soft thing (the mustard leaf), with crunchy things (green banana, star fruit), aromatic things (herbs) and a sour-tart fruit (star fruit or green mango), and the whole bundle is dipped in a thick, rich, savoury sauce (the nước lèo, made from fermented soybean paste, peanut, liver and sesame). The bite therefore carries FIVE textures (shatter-crisp ram, soft leaf, crunchy banana, chewy herb, thick dipping sauce) and FOUR flavour registers (savoury-pork filling, bitter-peppery mustard leaf, tart star fruit, malty-nutty dipping sauce) in a single mouthful. It is Vietnamese food at its most texturally engineered, and the engineering is hidden inside a humble-looking leaf wrap that reveals nothing from the outside.

The mustard green — cải bẹ xanh — is not a random leaf. Its mild bitterness and peppery bite are the specific counterweights to the fried ram's richness, the same way the mustard leaf counterweights every bánh xèo in the Delta. The leaf is blanched briefly — 5 seconds in boiling water, just enough to wilt it to pliability without cooking out its bitterness — and it wraps the ram the way a rice-paper sheet wraps a gỏi cuốn: fold, tuck, roll, except the thing inside the wrapper is already fried and already wrapped in its own rice-paper shell. Two wrappers. Two textures. One bite. Huế has never been accused of doing things simply.`,
  ingredientSections: [
    {
      title: 'The ram filling',
      items: [
        { amount: 250, unit: 'g', name: 'minced pork (roughly 20% fat)', note: `Pork with some fat — lean pork gives a dry, crumbly ram that shatters to dust rather than yielding.` },
        { amount: 100, unit: 'g', name: 'shrimp, peeled, deveined, chopped fine', note: `Chopped, not pounded — the ram is a textured filling, not a smooth paste. The shrimp pieces should be visible and give a distinct sweet crunch inside the pork.` },
        { amount: 30, unit: 'g', name: 'dried glass noodles (miến), soaked 15 min, drained, cut into 3 cm lengths' },
        { amount: 15, unit: 'g', name: 'dried wood ear mushroom (mộc nhĩ), soaked, finely chopped' },
        { amount: 3, name: 'shallots, finely minced' },
        { amount: 2, name: 'cloves garlic, minced' },
        { amount: 1.5, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 1, name: 'egg yolk (for binding)' },
      ],
    },
    {
      title: 'The rice-paper wrapper and frying',
      items: [
        {
          amount: 20,
          name: 'sheets of bánh tráng (dried rice paper), 16-18 cm',
          note: `The thin, round, dried rice paper — NOT the fresh-steamed sheets. When fried, rice paper puffs and blisters into tiny golden bubbles that shatter on the tooth — the signature texture that wheat-flour wrappers cannot produce. Dip each sheet in water for 2 seconds, just until pliable. Over-dipped sheets are soggy, tear during rolling, and absorb oil instead of puffing.`,
        },
        { amount: 500, unit: 'ml', name: 'neutral oil, for deep-frying at 170°C' },
      ],
    },
    {
      title: 'The mustard-green wrap and herbs',
      items: [
        {
          amount: 20,
          name: 'large leaves of cải bẹ xanh (mustard greens), stems trimmed',
          note: `Blanched 5 seconds in boiling water, immediately iced — pliable enough to roll, still bitter and peppery enough to counter the fried ram. Raw mustard is too tough to roll; over-blanched mustard is too limp and too mild. Five seconds is the window.`,
        },
        { amount: 100, unit: 'g', name: 'herbs: húng quế, tía tô, rau răm, kinh giới' },
        { amount: 1, name: 'green (unripe) banana, sliced thin, in lime water' },
        { amount: 1, name: 'star fruit (khế), sliced thin', note: `The tart fruit — its oxalic acid cuts the fried richness from the inside of the wrap.` },
        { amount: 1, name: 'cucumber, in thin batons' },
      ],
    },
    {
      title: 'The nước lèo (Huế peanut-liver dipping sauce)',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'tương (fermented soybean paste)',
          note: `The malty-savoury base — the same tương this collection documented in the Bắc Ninh recipe.`,
        },
        { amount: 2, unit: 'tbsp', name: 'hoisin sauce' },
        { amount: 2, unit: 'tbsp', name: 'smooth peanut butter' },
        {
          amount: 50,
          unit: 'g',
          name: 'pork or chicken liver, simmered 10 min, mashed smooth',
          note: `The Huế signature — liver gives the nước lèo its characteristic creamy, mineral, iron-rich depth that a purely peanut-based sauce lacks. Simmered, not raw; mashed to a smooth paste and stirred into the sauce.`,
        },
        { amount: 1, unit: 'tbsp', name: 'toasted sesame seeds, ground' },
        { amount: 2, name: 'cloves garlic, pounded' },
        { amount: 1, name: 'red chili, sliced' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 100, unit: 'ml', name: 'water or stock', note: `Enough to thin the sauce to a spoonable, scoopable consistency — thick enough to cling to the ram, thin enough to flow from a spoon.` },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (for frying the garlic and tương)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Mix the filling and roll the ram — small, tight, finger-length',
      description: `Combine the pork, chopped shrimp, glass noodle, wood ear, shallot, garlic, fish sauce, sugar, pepper and egg yolk. Mix in one direction for 60 seconds until cohesive.

Dip a rice paper sheet in water 2 seconds — just until it bends without cracking, still slightly stiff. Lay it flat. Place about 1.5 tablespoons of filling along the lower third, shaped into a log about 7 cm long and 1.5 cm thick. Fold the near edge over, tuck the sides, and roll forward tightly — the finished ram should be a neat cylinder about the size of your index finger.

The tightness matters: a loose ram has air pockets that expand in the oil and blow the wrapper open; a tight ram fries as a solid cylinder and holds its shape. Press the seam edge down so it seals in the oil.

Make all 20 rolls. Lay them seam-side down on a tray, not touching. They can sit 30 minutes before frying.`,
      tip: `Rice paper as a frying wrapper behaves fundamentally differently from wheat-flour wrappers (Chinese spring-roll skins, Filipino lumpia wrappers). Rice paper is near-pure starch — amylopectin from the rice and tapioca — and when it hits 170°C oil, the residual moisture in the dampened sheet flashes to steam at hundreds of micro-points across the surface simultaneously, producing the bubble-pocked, crater-textured, irregularly-puffed crust that is the Huế ram's visual and textural signature. A wheat wrapper, with its gluten network, inflates smoothly and crisps to a uniform golden sheet. The difference is the protein: rice paper has none (no gluten to hold the surface together), so every steam-pocket is an independent blister. The result is louder, crunchier and more irregular than any wheat-fried roll — a surface that shatters differently at every point.`,
    },
    {
      title: 'Fry at 170°C — 5-6 minutes, golden and bubble-crusted',
      description: `Heat the oil to 170°C — a test corner of rice paper dropped in should sink briefly, then rise in a vigorous stream of fine bubbles and turn golden in 30 seconds.

Fry the ram in batches of 5-6, seam-side down first. Do not crowd — overlapping ram weld their blistered surfaces together and tear apart when separated. Fry 5-6 minutes, turning once at 3 minutes, until uniformly golden-brown and the surface is a landscape of tiny, crisp, golden bubbles.

Drain upright on a rack — not flat on paper. The same draining rule as every fried item in this collection: flat draining traps steam against the underside and softens the crust the oil just built.

The ram should: sound hollow when tapped (the filling has shrunk slightly from the wrapper during frying, creating a thin air layer), shatter audibly when bitten, and taste of pork-shrimp-wood-ear inside a shattering rice-paper shell. If the wrapper is chewy rather than crisp, the oil was too cool; if it is dark brown, the oil was too hot.`,
      tip: `The 170°C sweet spot for rice-paper frying is the same narrow window the bún suông used for its shrimp sticks and that every fried starch product in this collection has targeted: hot enough for the Maillard reaction to produce the golden colour and the toasted flavour in the time the interior needs to cook, but not so hot that the surface burns before the filling reaches safety. At 170°C a 1.5 cm ram reaches 75°C at its centre in about 5 minutes — the exact time the wrapper needs to develop its full bubble-crust. Lower temperature = oil absorption, soggy wrapper. Higher temperature = dark crust before the centre cooks. The window is narrow, and the thermometer is the insurance.`,
    },
    {
      title: 'Build the nước lèo — fry, blend, thin',
      description: `Heat the oil in a small pan. Fry the garlic 20 seconds until fragrant. Add the tương and the hoisin — fry 1 minute, stirring, until the paste darkens one shade and smells malty-savoury. Off the heat: stir in the peanut butter, the mashed liver, the ground sesame, the sugar, the chili and the water or stock. Stir until smooth.

Taste: the sauce should be malty (from the tương), nutty (from the peanut butter and the sesame), mineral-creamy (from the liver), faintly sweet and faintly hot. It should be thick enough to cling to a dipped ram and thin enough to flow from a spoon. If too thick, add water a tablespoon at a time.

The liver is the Huế element that separates nước lèo from a generic peanut sauce — its iron-rich, creamy, slightly gamey note adds a savoury depth that peanut-and-hoisin alone cannot reach, and it is the reason Huế's nước lèo is darker, richer and more complex than any dipping sauce in the south.`,
      tip: `The liver in the nước lèo is the same ingredient that makes pâté richer than butter and that makes liverwurst deeper than sausage — its high concentration of iron, B vitamins and fat-soluble vitamins gives a mineral, creamy, almost chocolatey depth that no plant-based ingredient can replicate. Huế puts liver in its dipping sauce for the same reason France puts it in its terrines: density of flavour per gram, in a medium that distributes it evenly. A peanut sauce without liver is sweet and nutty. A peanut sauce with liver is sweet, nutty, mineral, creamy and savoury — the same ingredients plus one, and the one changes everything.`,
    },
    {
      title: 'Wrap the ram in mustard green — the crunch inside the leaf',
      description: `Blanch the mustard-green leaves 5 seconds in boiling water, ice immediately. They should be dark green, pliable and still faintly peppery-bitter when tasted.

Lay a blanched leaf flat. On it: a sprig of herbs, a slice of green banana, a slice of star fruit, a baton of cucumber, and one or two freshly fried ram — still warm, still crunchy.

Roll: fold the near edge of the leaf over the ram, tuck the sides, roll forward into a snug green cylinder. The finished roll should be: green outside, golden inside, with the ram's bubble-crust still audible through the leaf if you hold it to your ear.

Dip one end deep into the nước lèo. Eat in two bites.

FIRST BITE: the tooth cuts through the soft mustard leaf into the shattering rice-paper crust of the ram — two textures in sequence, soft then shatter, with the star fruit's tart juice running between them. The filling — pork, shrimp, wood ear, glass noodle — arrives warm, savoury and fine-textured.

SECOND BITE: the herb end — perilla, basil, rau răm, with the green banana's starchy crunch and the nước lèo's malty-nutty-liver richness coating every surface.

The architecture is: leaf → crust → filling → sauce, four layers in one mouthful, each doing a different job. The leaf softens. The crust shatters. The filling feeds. The sauce seasons. And the whole thing lasts about four seconds between the teeth, which is all the time Huế needs to deliver its argument.`,
      tip: `Ram cuốn cải is Huế's most texturally complex single bite — four distinct textures in four concentric layers, each one requiring a different cooking method (blanching, frying, raw, blending), each one contributing a different resistance to the tooth. The sequence — soft leaf, then shattering crust, then yielding filling, then thick sauce — runs from the easiest to the hardest to chew, which is the opposite of the sequence the tooth would encounter in a typical bite (hard outside, soft inside). This inversion is the surprise: the mouth expects the exterior to be the hardest layer and is surprised when the crunch arrives INSIDE the softness, which makes the crunch seem louder and more vivid than it would on its own. The mustard leaf is a camouflage that hides the crunch until the tooth finds it, and the finding is the pleasure.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
