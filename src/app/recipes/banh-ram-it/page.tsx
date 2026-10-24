'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-ram-it',
  title: `Bánh Ram Ít (Steamed Dumpling on a Fried Dumpling)`,
  subtitle: `One glutinous rice dough, split in two and sent down opposite paths: half steamed into a soft, translucent dumpling with a shrimp-pork heart, half deep-fried into a golden, glass-crisp disc. Stacked — soft riding crisp — under shrimp floss and scallion oil. Huế's most elegant two-bite lesson in what starch can do.`,
  category: 'APPETIZER',
  difficulty: 'Hard',
  totalTime: '2 hr',
  rating: 4.8,
  baseServings: 6,
  heroImage: '/images/recipes/banh-ram-it.jpg',
  intro: `Of all the small bánh of Huế — the bèo, the nậm, the lọc, the tiny steamed things served by the dozen on communal trays — bánh ram ít is the cleverest, because it is two opposite foods made from one identical dough, deliberately stacked so you eat the contradiction in a single bite. On top sits the bánh ít: a soft, sticky, faintly translucent steamed dumpling of glutinous rice wrapped around a savoury shrimp-and-pork centre. Underneath sits the bánh ram: a disc of the very same glutinous dough, deep-fried until it puffs and sets into something between a cracker and a beignet shell — golden, brittle at the edge, chewy-crisp at the heart. The soft one is pressed gently onto the fried one, the pair is showered with tôm chấy — the coral-orange dried shrimp floss of Huế — glossed with scallion oil, and eaten in one or two bites with a sweet-leaning fish sauce. Chewy, then crisp. Steam, then fry. Same dough.

The dish is usually told as a royal story, and for once the story is plausible. The small bánh of Huế are court food in their DNA: the Nguyễn kitchens prized many dishes in small portions — a king should taste fifty things, not finish three — and they prized wit. A dumpling whose base is its own fried twin is exactly the kind of edible pun the imperial kitchen traded in, and bánh ram ít remains, to this day, a dish for occasions: đám giỗ trays, wedding boards, the first course a Huế grandmother sends out when she intends to make a point. Street versions exist and are wonderful, but the dish never fully left the formal register. It is served in neat rows, and it is judged on neatness.

Technically, the whole dish is a controlled experiment on amylopectin, which is what makes it so satisfying to actually cook. Glutinous rice flour is very nearly pure amylopectin — the branched starch molecule — with almost none of the linear amylose that lets ordinary rice starch set firm. Hydrated and steamed, amylopectin gelatinizes into a soft, cohesive, elastic, translucent mass that never really hardens: that is the bánh ít, and it is why the dumpling stays tender for hours. But take the same dough and put it into 170°C oil instead, and the surface dehydrates and sets into a rigid crust while steam generated inside puffs it hollow; amylopectin's stretchiness is exactly what lets the crust inflate without tearing. That is the bánh ram, and it is the same principle as a Japanese fried mochi or a Brazilian pão de queijo shell. One molecule, two heat treatments, two opposite results, one plate. It is the tidiest demonstration in the whole Vietnamese repertoire that texture is not an ingredient — it is a decision.

The crowning tôm chấy deserves its own sentence, because it is a Huế technology in its own right: dried or fresh shrimp pounded and then toasted slowly in a dry pan with a little annatto-tinted fat until it becomes a fine, dry, vividly orange floss that keeps for weeks and lands on half the small bánh of the city. It is savour, colour and texture in one scatter — and on bánh ram ít it is also the referee, its dry salinity tying the bland-soft top and the rich-crisp bottom into one coherent bite. A plate of these, a pot of tea, and the Perfume River doing nothing in particular: that is a Huế afternoon, in the formal register.`,
  ingredientSections: [
    {
      title: 'The dough (makes both halves)',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'glutinous rice flour (bột nếp)',
          note: `The entire architecture. It must be glutinous — near-pure amylopectin — for both halves to work: plain rice flour would steam into something crumbly and fry into something bulletproof. One dough is made, then divided; resist the temptation to make two different doughs.`,
        },
        { amount: 300, unit: 'ml', name: 'warm water, approximately', note: `Added gradually — flours vary. The target is a smooth, pliable, non-sticky dough with the feel of an earlobe.` },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil, plus more for hands' },
      ],
    },
    {
      title: 'The filling',
      items: [
        { amount: 200, unit: 'g', name: 'shrimp, peeled and coarsely chopped' },
        { amount: 150, unit: 'g', name: 'minced pork with some fat' },
        { amount: 3, name: 'shallots, minced' },
        { amount: 2, name: 'cloves garlic, minced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 15, unit: 'g', name: 'wood ear mushroom, soaked and minced (optional)' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'Tôm chấy (shrimp floss) and finishing',
      items: [
        {
          amount: 60,
          unit: 'g',
          name: 'dried shrimp, soaked 20 minutes, or 150 g fresh shrimp',
          note: `Pounded fine and toasted dry into floss (step 4). The coral-orange scatter that finishes half the small bánh of Huế — savoury, dry, and structural: it bridges the soft top and crisp base into one bite.`,
        },
        { amount: 1, unit: 'tsp', name: 'annatto oil (dầu điều), or neutral oil with a pinch of paprika', note: `For the colour. Tôm chấy is judged first with the eyes.` },
        { amount: 4, name: 'scallions, greens sliced, scalded in 3 tbsp hot oil (mỡ hành)' },
        { amount: 1, unit: 'L', name: 'neutral oil, for deep-frying the ram' },
      ],
    },
    {
      title: 'Nước mắm ngọt (the sweet-leaning sauce)',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 3, unit: 'tbsp', name: 'sugar', note: `Huế small-bánh sauce runs sweeter and thicker than table nước chấm — closer to a light syrup that clings.` },
        { amount: 4, unit: 'tbsp', name: 'water' },
        { amount: 1, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, name: 'red chilies, sliced', note: `Huế will also set out raw bird's-eye chilies whole. The city's chilli tolerance is a regional identity.` },
        { amount: 1, name: 'clove garlic, minced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make one dough, knead it smooth, divide it in two',
      description: `Mix the glutinous rice flour and salt. Add the warm water gradually, mixing, then the oil, and knead 5-6 minutes to a smooth, supple, matte dough — soft as an earlobe, holding a fingerprint briefly, releasing cleanly from your palm.

Too wet and the steamed dumplings slump and the fried discs blister violently; too dry and the dough cracks when you wrap. Adjust by the teaspoon of water or flour. Glutinous dough is forgiving to correct and unforgiving to ignore.

Divide it: 60% for the steamed bánh ít, 40% for the fried bánh ram. Cover both with a damp cloth — glutinous dough skins over in minutes, and a skinned dough seams badly.`,
      tip: `There is no yeast, no resting for gluten, no development — because there is no gluten. Glutinous rice, despite its name, is gluten-free; its cohesion is pure amylopectin stickiness, activated the moment warm water hydrates the starch. This is why the dough is workable immediately and why it behaves like nothing wheat-based: it does not spring back, does not toughen with handling, and does not rise. It only does two things — steam soft or fry crisp — and this dish, alone in the repertoire, makes it do both.`,
    },
    {
      title: 'Cook the filling dry — a wet heart splits a steamed dumpling',
      description: `Fry the shallot and garlic in the oil until fragrant. Add the pork, break it down 2 minutes, then the shrimp, wood ear, fish sauce, sugar and pepper. Fry 3-4 minutes more until the mixture is cooked through, aromatic, and — critically — dry, with no liquid pooling in the pan.

Cool completely, then squeeze into 18-20 tight balls of about 15 g each. Each must hold its shape on the tray.

A wet filling is the classic failure: inside a sealed dumpling, its moisture turns to steam in the steamer and forces the seam open, and the bánh ít arrives gaping. Cook it dry, cool it fully, pack it tight.`,
      tip: `Pre-cooking the filling — rather than wrapping it raw, as many Chinese dumplings do — is dictated by the wrapper. A glutinous rice skin steams to doneness in 10-12 minutes, far less time than raw pork needs to cook safely at steam temperatures, and unlike wheat it gives no visual cue of underdone filling. So the filling arrives finished and the steamer only has to set the skin. Every glutinous-wrapped dumpling in Vietnam — bánh ít, bánh ít trần, bánh khúc — follows this rule, and it is a food-safety rule wearing a texture rule's clothes.`,
    },
    {
      title: 'Shape and steam the bánh ít — 12 minutes to translucence',
      description: `Oil your hands. Divide the larger dough portion into 18-20 pieces (about 20 g each). Flatten each into a disc thicker at the centre, set a filling ball on it, gather the edges up, pinch sealed, and roll gently into a smooth ball. No gold should show through anywhere — thin patches split.

Set the balls on oiled parchment squares, spaced, in a steamer over hard-boiling water. Steam 10-12 minutes.

Done, they turn from opaque white to faintly translucent — you should just sense the filling's shadow — and the surface is glossy and springs back slowly when pressed. Brush each lightly with scallion oil the moment they come out, or they will weld to everything they touch, including each other.`,
      tip: `The opacity change is the doneness signal and it is pure physics. Raw starch granules scatter light — hence the opaque white. As they gelatinize, absorbing water and losing their ordered structure, they stop scattering and the mass turns translucent. The dumpling is literally showing you its starch state through its skin. It is the same signal read on a bánh mướt sheet at 30 seconds and a bánh bột lọc at 8 minutes; glutinous and tapioca doughs across the whole country report their own doneness this way, and the cook only has to look.`,
    },
    {
      title: 'Fry the bánh ram and toast the tôm chấy',
      description: `Shape the smaller dough portion into 18-20 balls, then flatten each into a disc about 6 cm across and 8 mm thick.

Heat the oil to 165-170°C. Fry the discs in batches 4-5 minutes, turning often and pressing them gently under the oil with a spider. They will puff slightly, blister, and set deep gold. Done, a disc tapped against the wok rim gives a hard knock. Drain upright on a rack — flat on paper, they steam themselves soft from below.

Meanwhile, the floss: pound the soaked dried shrimp fine, then toast in a dry pan with the teaspoon of annatto oil over low heat, stirring constantly, 8-10 minutes, until completely dry, fluffy and vivid orange. It should rustle when stirred. Set aside; it keeps for weeks.`,
      tip: `Here is the experiment completing itself. The identical dough that steamed soft now meets 170°C oil: the surface dehydrates and rigidifies in seconds while interior moisture flashes to steam, and amylopectin's elasticity lets the crust stretch and puff instead of tearing — a chewy-hearted, crisp-shelled disc, where steam produced a soft translucent ball. Water in, water out; same molecule, opposite foods. Frying at 190°C fails instructively: the crust sets before the puff, and you get a bullet. The dough needs the crust and the steam to arrive together, and 165-170°C is where they do.`,
    },
    {
      title: 'Stack, dress, and serve in neat rows — soft on crisp, floss on top',
      description: `Stir the sauce until the sugar fully dissolves: fish sauce, sugar, water, lime, then garlic and chilli floating on top. It should be sweeter and slightly thicker than table nước chấm — a glaze more than a dip.

Assemble at the last minute: one steamed bánh ít pressed gently onto each fried bánh ram, a brush of scallion oil over the top, a generous pinch of tôm chấy over that. Arrange in rows on a platter — this is Huế; rows matter — with the sauce in a small bowl or spooned lightly over.

Eat each pair in one or two bites, top and bottom together; separating them misses the argument. And eat within 20 minutes of assembly: the crisp base sits under a moist dumpling and is absorbing its steam from the moment they touch. Stack late, serve immediately, and let the last pair go to whoever fried the ram.`,
      tip: `Soft-on-crisp, engineered to be eaten in the same instant, at a deadline set by moisture migration — by now, three provinces into the centre of the country, the pattern should be familiar. The ram inside Hà Tĩnh's bánh mướt, the clams on the sesame cracker, the cu đơ, and now Huế doing it in miniature with a single dough and royal manners. Central Vietnam's defining textural idea is the deliberate collision of brittle and yielding, and its defining constraint is that the collision has a clock on it. The cuisines differ in register — Hà Tĩnh's version is a field lunch, Huế's is a court canapé — but it is one idea, walked up the social ladder. Taste them side by side and the centre of Vietnam explains itself.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
