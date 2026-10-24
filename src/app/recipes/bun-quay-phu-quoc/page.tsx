'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-quay-phu-quoc',
  title: `Bún Quậy Phú Quốc (Stirred Noodle Soup with Mackerel Balls and Fish Cake)`,
  subtitle: `A clear, light fish broth with hand-rolled mackerel balls and sliced fried fish cake, poured over fresh bún and — the name, the ritual, the whole point — stirred violently by the eater with chopsticks before the first spoonful. The island's morning bowl, and the only noodle soup in Vietnam that instructs you to destroy its presentation before you eat it.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/bun-quay-phu-quoc.jpg',
  intro: `Bún quậy means stirred noodles, and the name is the instruction. In every other noodle soup in this collection — phở, bún bò, hủ tiếu, bánh canh, bún nước lèo — the bowl arrives at the table in a state of composed beauty: broth, noodle, toppings, herbs, each in its place, each visible, each contributing to the visual argument. And then you eat it, carefully, with the spoon in one hand and the chopsticks in the other, and the bowl's composition holds through the meal. Bún quậy inverts this entirely. The bowl arrives composed. You pick up your chopsticks. And you stir — hard, deep, violently, in circles, until the broth clouds with the starch from the noodles, the fish balls scatter, the chả cá tumbles, and the whole thing is a whirlpool of cloudy, protein-laden, noodle-tangled chaos. Then you eat.

The stirring is not a suggestion and not a personal preference. It is the dish's technique, executed by the eater rather than by the cook, and it has a physical basis. The fresh bún in a Phú Quốc bún quậy is made differently from mainland bún: it is softer, starchier, more loosely set, and when stirred vigorously in hot broth it releases surface starch into the liquid, thickening it from a thin, clear fish stock into a slightly cloudy, slightly viscous, noodle-starch-enriched soup that coats the palate differently from a clear broth. The stirring IS the thickening step, and the eater IS the cook. A bún quậy eaten without stirring is a clear fish soup with soft noodles in it — pleasant, fine, and missing the point.

The fish is the island's own: cá thu, Spanish mackerel, which schools around Phú Quốc in the same waters the anchovy does and which the island's fishermen catch year-round. The mackerel is used two ways in the bowl. First, it is pounded — fresh, with salt — into the same myosin-gel paste this collection has now documented half a dozen times, and rolled by hand into small, springy, irregular balls that are poached directly in the broth. Second, it is made into chả cá: the same paste, but pressed flat, pan-fried until golden on both faces, and sliced into batons. The two forms give two textures from the same fish: the balls are soft, bouncy and broth-flavoured; the fried slices are firm, golden-crusted and carry a Maillard note the balls do not have. Together, they are the bowl's protein, and they are both made from the fish that swims past the kitchen window.

The broth is a quick fish stock — mackerel bones and heads simmered with onion and a light hand — deliberately light, deliberately plain, because the stirring will thicken it and the fish balls will season it and the nước mắm on the table will salt it. The cook builds the platform. The eater finishes the dish. And the first spoonful, taken from a bowl you just turned into a storm, tastes of everything at once: cloudy starch-broth, springy fish ball, crisp chả edge, soft noodle, and the Phú Quốc nước mắm you squeezed over it from the bottle on the table — the same nước mắm that was the previous recipe in this collection, now doing the job it was made for.`,
  ingredientSections: [
    {
      title: 'The fish balls (chả cá viên)',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'fresh mackerel (cá thu) fillet, skin removed, pin-boned, patted very dry',
          note: `Spanish mackerel is the Phú Quốc standard — firm, clean, and with enough myosin to form a springy gel. In Europe: fresh mackerel, fresh kingfish, or fresh pollock. The fish must be same-day-fresh and cold; stale fish produces a crumbly, flat-flavoured ball that no amount of pounding rescues.`,
        },
        { amount: 6, unit: 'g', name: 'fine salt (1.5% of the fish weight)', note: `The structural dose — dissolves the myosin, enables the gel.` },
        { amount: 1, unit: 'tbsp', name: 'tapioca starch' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'ground white pepper' },
        { amount: 1, unit: 'tsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'crushed ice (to keep the paste cold)' },
      ],
    },
    {
      title: 'The fried fish cake (chả cá chiên)',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'mackerel paste (same preparation as above, from the same batch)',
          note: `Set aside 200 g of the pounded paste before rolling balls. Press into flat cakes about 1 cm thick and 8 cm across. Pan-fry in oil until golden on both faces — 2-3 minutes per side. Slice into batons for the bowl.`,
        },
        { amount: 3, unit: 'tbsp', name: 'neutral oil (for pan-frying)' },
      ],
    },
    {
      title: 'The broth',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'mackerel bones, heads and trimmings (from filleting above, plus extra if available)',
          note: `The free stock. Rinsed clean of blood, simmered 30-40 minutes — no longer, because fish stock turns bitter past 45 minutes as the bones' connective tissue begins to break down unpleasantly. A pork-bone stock simmered for hours is the opposite architecture; a fish stock is a sprint, not a marathon.`,
        },
        { amount: 1.5, unit: 'L', name: 'water' },
        { amount: 1, name: 'yellow onion, halved' },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce (Phú Quốc, naturally)' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The noodles',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'fresh bún (rice vermicelli), the softest and freshest available',
          note: `The Phú Quốc bún is softer and starchier than mainland bún — it releases more surface starch when stirred, which is the thickening mechanism. Use the freshest, softest bún your grocer has. If only dried is available, cook it softer than you normally would — 1 minute longer than the packet says.`,
        },
      ],
    },
    {
      title: 'The table',
      items: [
        { amount: 200, unit: 'g', name: 'bean sprouts' },
        { amount: 50, unit: 'g', name: 'scallions, sliced' },
        { amount: 50, unit: 'g', name: 'herbs: húng quế, rau răm, ngò gai' },
        { amount: 2, unit: 'tbsp', name: 'fried shallots' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        {
          amount: 1,
          name: 'bottle of Phú Quốc nước mắm nhất, on the table',
          note: `The island's own — the previous recipe in this collection, now here as a condiment. Each eater squeezes their own dose directly into the stirred bowl. The nước mắm is the seasoning that the cook deliberately under-dosed in the broth, trusting the eater to finish.`,
        },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 4, name: 'bird\'s-eye chilies, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Pound the mackerel paste cold — then split it two ways',
      description: `Cut the filleted mackerel into chunks and put it in a chilled food processor with the salt. Process 3-4 minutes until the mass is sticky, cohesive, and clings to the blade in one pale-pink lump. Add the ice, tapioca starch, sugar, pepper and fish sauce, and process 30 seconds more.

Slap the paste into a chilled bowl a dozen times — the same alignment step as every springy paste in this collection. Touch the back of your hand: it must feel cold.

Split the paste: 400 g for balls, 200 g for the fried cake. The balls will be poached; the cake will be fried. Two textures from one paste, divided at the bowl.`,
      tip: `Mackerel's myosin gels differently from shrimp's — it is slightly softer, slightly more fragile, and it requires a colder working temperature to hold its network before cooking. If the paste warms above 10°C during processing, the myosin denatures prematurely and the balls will be crumbly rather than springy. The crushed ice is not optional; it is the thermostat that keeps the paste in the narrow window where the protein is dissolved but not yet set. Same principle as every paste in this collection, calibrated tighter for fish than for pork or shrimp.`,
    },
    {
      title: 'Roll the balls, fry the cakes — two products, one paste',
      description: `BALLS: wet your hands with oil. Pinch off 15 g pieces and roll between your palms into irregular, roughly spherical balls — they do not need to be perfect, and the island's stall cooks roll them fast and lopsided because the shape does not affect the taste and the morning queue is long. Set on an oiled tray. You should have 25-30 balls.

FRIED CAKE: press the reserved 200 g of paste into 2-3 flat cakes, 1 cm thick. Heat oil in a pan over medium heat and fry 2-3 minutes per side until golden and firm. The crust should be a deep, even gold — the Maillard crust that the poached balls will not have, and the textural contrast the bowl is built on. Cool slightly, then slice into batons 1 cm wide.`,
      tip: `The two products from one paste — poached balls and fried cake — give the bowl a textural range that neither alone can. The ball is soft, springy, soaked in broth, and tastes of the stock it was poached in. The fried baton is firm, crusted, dry at the surface, and tastes of the oil it was fried in plus the Maillard compounds the frying generated. Together they deliver the fish in two registers: one brothy, one toasty. One paste, two cooking methods, two textures, and the spoon carries both in the same mouthful after the stirring has scrambled the bowl into its intended chaos.`,
    },
    {
      title: 'Build the fish broth — 30 minutes, no longer',
      description: `Rinse the mackerel bones and heads under cold water until the water runs clear — blood left on the bones turns bitter in the stock. Put them in a pot with the water, onion and ginger. Bring to a simmer and skim immediately — fish stock produces more scum in the first 5 minutes than pork stock produces in an hour.

Simmer 30-35 minutes, skimming twice more. Strain through a fine sieve. Season with fish sauce, sugar and salt — lightly. The broth should taste clean, faintly fishy-sweet, and deliberately under-seasoned, because the eater will add nước mắm from the bottle and the stirring will add starch from the noodles, and both will change the broth's character in the bowl.

Do not simmer past 40 minutes. Fish-bone stock turns bitter at 45+ because the collagen in fish connective tissue — unlike pork or beef collagen — degrades into bitter peptide fragments at prolonged simmer. A fish stock is a 30-minute product. A pork stock is a 3-hour product. Respect the biology.`,
      tip: `The deliberate under-seasoning is the cook's gift to the eater, and it is the design principle of the entire bún quậy format. The cook builds a broth that is 70% of the way to the correct flavour. The eater finishes the last 30% with nước mắm from the bottle, lime from the wedge, chili from the saucer, and starch from the stirred noodles. The bowl is a collaboration, and the cook's restraint is what makes the collaboration possible — an over-seasoned broth cannot be adjusted downward, only upward, and a broth at 100% before the bottle arrives becomes 130% after it, which is too much. The under-seasoning is not an error. It is a space left for the eater to inhabit.`,
    },
    {
      title: 'Poach the balls, assemble the bowl, and STIR — the eater finishes the dish',
      description: `Bring the strained broth back to a simmer. Drop the fish balls in and poach 4-5 minutes — they are done when they float and feel springy-firm when pressed. Leave them in the broth.

Blanch the bún 10 seconds, drain into four bowls. Ladle the hot broth with 6-7 fish balls per bowl. Lay the sliced fried chả cá batons across the top. Add bean sprouts. Scatter scallion, fried shallots, pepper and herbs.

Serve with the bottle of nước mắm, the lime and the chili on the table. And now deliver the instruction that is the dish's name:

QUẬY. STIR.

Take your chopsticks, push them to the bottom of the bowl, and stir — hard, in circles, for ten seconds. The noodles tangle, the balls scatter, the chả batons tumble, the bean sprouts submerge, and the clear broth turns cloudy-white as the soft bún releases its surface starch into the liquid. The broth thickens. The bowl becomes a storm. Stop stirring.

Now squeeze nước mắm from the bottle — a generous stream, two or three seconds. Squeeze lime. Add chili if you want it. And eat — spooning from the cloudy, thickened, protein-and-starch-loaded liquid that ten seconds of stirring created from what was, a moment ago, a clear and orderly bowl.

The first spoonful carries everything: the cloudy starch-broth with its new body, a springy fish ball bitten in half, a baton of fried chả with its golden crust softening at the edge, a tangle of noodles, and the nước mắm's umami hitting last and longest. It is a bowl that does not taste like any other noodle soup in Vietnam, because no other noodle soup in Vietnam asks the eater to do the final cooking, and the final cooking — the stirring — changes the bowl's physics from clear broth to starch-thickened soup in the ten seconds between the instruction and the spoon.`,
      tip: `The starch thickening is real, measurable physics. Fresh bún's surface carries a film of loosely-bound gelatinised starch — the same film that makes fresh noodles feel slightly slippery — and stirring in hot broth shears this film off and disperses it into the liquid, where it acts as a thickening agent exactly the way a cornstarch slurry does. The difference is that the thickening happens in the bowl, at the table, performed by the eater, rather than in the pot by the cook. The result is a broth that is perceptibly thicker, more viscous and more mouth-coating than the clear stock it was poured from — a transformation that takes ten seconds and that is irreversible (you cannot un-stir the starch out). Bún quậy is the only Vietnamese noodle soup where the eater changes the broth's viscosity on purpose, and the name — stirred noodles — is the physics made into a verb.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
