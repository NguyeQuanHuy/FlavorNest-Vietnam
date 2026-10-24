'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'hen-song-la-xuc-banh-da',
  title: `Hến Sông La Xúc Bánh Đa (River La Clams Scooped with Sesame Rice Crackers)`,
  subtitle: `Baby clams raked from the sandbars of the River La, stir-fried hard and fast with shallot and pepper, then scooped up with shards of charcoal-blistered sesame cracker. No plates, no chopsticks, no cutlery — the cracker is the spoon and you eat it too.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '40 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/hen-song-la-xuc-banh-da.jpg',
  intro: `The River La runs down out of the Trường Sơn mountains through Đức Thọ district and joins the Lam on the Nghệ An border, and for its last thirty kilometers it is slow, shallow and sandy. In that sand live hến — tiny freshwater clams, thumbnail-sized, gathered by women wading the shallows with flat baskets at low water, exactly as they have been for as long as anyone can account for. Hến sông La are famous throughout north-central Vietnam and Hà Tĩnh is quietly proprietorial about them: sweeter and cleaner than clams from muddier rivers, because the River La runs over sand rather than silt, and sand-dwelling clams do not taste of mud.

The dish is almost aggressively simple. The clams are boiled open, their meat shaken free, and then stir-fried very hard and very fast with shallot, chili and a great deal of black pepper — the north-central signature — until they are just heated through and glossed with their own liquid. That is the entire cooking. What makes it a dish rather than a bowl of clams is what you eat it with: bánh đa vừng, the black-sesame rice cracker of Hà Tĩnh, grilled over charcoal until it puffs, blisters and curls into a bowl-shaped shard. You snap the cracker into pieces and use each piece as a scoop. There is no other implement. The cracker is the spoon, and when it is full of clams you eat both together.

That combination is doing something specific, and it is the reason the dish works. The clams are soft, wet, sweet and savory; the cracker is dry, brittle, nutty and toasted. Bite them together and the cracker shatters against the yielding clam, the sesame's roasted oils meet the clam's marine sweetness, and the whole thing lands as one bite rather than two. It is the same textural principle as the ram inside the bánh mướt in the province next door — north-central Vietnam has a genuine obsession with putting crisp things and soft things in the mouth at the same instant, and eats a surprising number of its dishes this way.

The pepper deserves its own note. A Hà Tĩnh hến xào is peppery in a way that surprises visitors from the south, and it is not carelessness. North-central cooking runs on black pepper the way southern cooking runs on chili and sugar — the pepper is the heat, the aroma and the structure. Its piperine has a sharp, resinous, slightly citrus warmth that cuts directly across shellfish sweetness, and it is added at the end, off the heat, because piperine is volatile and long cooking flattens it. A spoonful of these clams should smell of pepper before it smells of anything else, and then, half a second later, of the river.`,
  ingredientSections: [
    {
      title: 'The clams',
      items: [
        {
          amount: 1.5,
          unit: 'kg',
          name: 'live hến (baby freshwater clams) in shell — yields about 250 g meat',
          note: `Purge in cold salted water for 4-6 hours, changing the water twice, so they void their sand. In Europe: frozen shelled Vietnamese hến are widely available and already purged — use 250 g and skip straight to step 3. Fresh small vongole or cockles work but are saltier and need no extra fish sauce.`,
        },
        { amount: 1, unit: 'tbsp', name: 'salt (for purging)' },
        { amount: 2, name: 'red chilies, crushed (for the purging water)' },
      ],
    },
    {
      title: 'The stir-fry',
      items: [
        { amount: 5, name: 'shallots, thinly sliced', note: `Shallot, not onion. Its higher sugar content and lower water content mean it caramelizes rather than steams in a fast, dry stir-fry.` },
        { amount: 4, name: 'cloves garlic, minced' },
        { amount: 3, name: 'red chilies, sliced' },
        {
          amount: 2,
          unit: 'tsp',
          name: 'coarsely cracked black pepper',
          note: `Yes, two teaspoons. This is the north-central signature and it is meant to be assertive. Cracked coarse, not ground fine, and added at the very end — piperine is volatile and long cooking dulls it into a flat, dusty heat.`,
        },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil or, traditionally, rendered pork fat', note: `Pork fat is the Hà Tĩnh choice and it is noticeably better here — its higher smoke point and its own savoriness suit a very fast, very hot stir-fry of a lean ingredient.` },
        { amount: 3, name: 'scallions, cut into 3 cm lengths' },
        { amount: 30, unit: 'g', name: 'rau răm (Vietnamese coriander), roughly chopped', note: `The universal partner to shellfish across Vietnam. Its soapy-peppery bite is precisely calibrated against clam sweetness — no substitute really works.` },
        { amount: 20, unit: 'g', name: 'lá lốt or húng quế, shredded (optional)' },
      ],
    },
    {
      title: 'The crackers',
      items: [
        {
          amount: 4,
          name: 'bánh đa vừng (large black-sesame rice crackers), 25 cm',
          note: `The Hà Tĩnh cracker: a thick rice wafer studded heavily with black sesame, sold dried and uncooked. It MUST be grilled over live charcoal — an oven or a pan gives a pale, flat, biscuity result and misses the point entirely. Sold in Vietnamese groceries in Europe; look for the thick, sesame-heavy kind, not the thin bánh tráng used for wrapping.`,
        },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 1, name: 'lime, in wedges' },
        { amount: 2, unit: 'tbsp', name: 'roasted peanuts, crushed' },
        { amount: 1, name: 'saucer of nước mắm gừng: fish sauce, pounded ginger, chili, lime, sugar' },
        { amount: 1, name: 'bottle of cold beer or rice wine', note: `This is a drinking dish. In Đức Thọ it is eaten in the late afternoon, on a low table, with beer, and it is not a course in a meal.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Purge and open the clams — and keep the water',
      description: `Soak the live clams in cold salted water with the crushed chilies for 4-6 hours, changing the water twice. Rinse. Discard any clam that does not close when tapped.

Put them in a dry pot with a splash of water, cover, and cook over high heat 4-5 minutes, shaking once, until the shells have all opened. Tip into a colander set over a bowl. Rub and shake the shells to release the meat, then pick out the meat.

Strain the cooking liquid through a fine cloth to remove sand and grit. Keep it — a few spoonfuls go back into the stir-fry at the end, and the rest is drunk as a hot clear broth alongside, which is what the River La households do and what visitors never expect.`,
      tip: `Clams open when the adductor muscle holding the shells shut denatures and releases its grip — it happens fast, and every second past that point is a second the meat spends toughening. Five minutes maximum, and take the pot off the moment the last shell has opened. This is also why the clams are cooked in a single hot batch rather than simmered: the clam is done the instant it is open, and it has no interest in being cooked twice.`,
    },
    {
      title: 'Grill the bánh đa over charcoal — 2 minutes, turning constantly',
      description: `Get a charcoal fire down to glowing embers with no flame. Hold each cracker 15-20 cm above the coals and turn it constantly — every 5-10 seconds — for about 2 minutes.

Watch it transform: the flat pale disc puffs, blisters, goes opaque, curls at the edges, and turns a mottled golden-brown with the sesame seeds darkening and popping. It should feel light, rigid and hollow, and it should snap with a clean crack.

Constant turning is the entire technique. Hold it still for even ten seconds and one spot scorches black and bitter while the rest is still raw. A properly grilled bánh đa has an even mottled color and no black patches.`,
      tip: `The puffing is superheated steam. Bánh đa is a dried starch matrix holding a few percent residual water; over live coals the surface heats past 200°C almost instantly, that trapped water flashes to steam, and the steam expands inside the softening starch — inflating it into a rigid, porous, glassy foam. It is exactly what happens to a poppadom or to puffed rice. This is why an oven fails: it heats too slowly and too evenly, the water leaves gradually as vapor rather than flashing, and the cracker dries and browns without ever puffing. You need the thermal shock of live coals.`,
    },
    {
      title: 'Fry the shallots hard — 3 minutes, until golden and sweet',
      description: `Heat the oil or pork fat in a wok over high heat until it just begins to shimmer. Add the shallots and fry 2-3 minutes, stirring, until they are golden at the edges and smell sweet. Add the garlic and sliced chili and fry 30 seconds more.

The shallots should be golden and slightly collapsed, not brown and crisp — you are building a sweet aromatic base, not making fried shallots. If they go dark, the whole dish will taste acrid.

Do not add the clams yet. Building the aromatic base first, then adding the protein at the last moment, is the fundamental structure of every Vietnamese stir-fry and it is what keeps delicate ingredients from being overcooked in the pursuit of flavor.`,
      tip: `Shallots are chosen over onion here for a measurable reason: they contain roughly twice the sugar and considerably less water. In a fast, hot stir-fry, that means they caramelize — Maillard and sugar caramelization together — in the two or three minutes available, while an onion would still be releasing water and steaming itself pale. Every Vietnamese stir-fry that starts with an aromatic base starts with shallot, and this is why.`,
    },
    {
      title: 'The clams — 90 seconds and not one second more',
      description: `Turn the heat to maximum. Tip in the clam meat, the fish sauce and the sugar, and toss hard and continuously for 60-90 seconds. Add 3 tablespoons of the reserved clam liquid, let it hiss and reduce for 15 seconds, then take the wok off the heat entirely.

Off the heat, throw in the cracked black pepper, the scallions, the rau răm and the lá lốt, and toss once.

Ninety seconds. The clams are already cooked from being opened — this step seasons them and glosses them and does nothing else. Two extra minutes in the wok and they contract into hard little beads and give up the sweetness you spent six hours purging sand to protect. This is the only difficult moment in the recipe and it is difficult purely because it demands that you stop.`,
      tip: `The pepper and the herbs go in off the heat for the same reason: their aromatics are volatile. Piperine, and the terpenes in rau răm, evaporate readily above about 80°C — held over a flame for even a minute they largely leave the wok and go into the room, which is why an over-fried hến xào smells wonderful while you are cooking it and tastes of nothing at the table. Added to a hot pan off the burner, they release just enough to perfume the dish and then stay in it. Residual heat is the correct amount of heat for every volatile aromatic in Vietnamese cooking.`,
    },
    {
      title: 'Scoop with the cracker — no cutlery, and eat it fast',
      description: `Tip the clams into a shallow bowl. Squeeze lime over, scatter the crushed peanuts, and set the grilled bánh đa alongside, snapped into large shards.

Eat by scooping: take a shard of cracker, load it with clams, and eat the whole thing in one bite. Chopsticks are for reaching across the table, not for eating this. There is a saucer of nước mắm gừng if you want it, but most of Đức Thọ does not bother.

Eat immediately and eat fast. The cracker softens within minutes of being loaded with wet clams, and a soft bánh đa is a sad object. Grill the crackers last, snap them at the table, and load each shard as you eat it. If the whole thing has gone quiet and crunchy-less, the meal took too long.`,
      tip: `This is the north-central textural obsession in its purest form — the same instinct that wraps a hot fried ram inside a cool steamed rice sheet a district away. Something brittle and something yielding, in the mouth at the same moment, deliberately engineered to arrive together and to be at their peak for only a few minutes. It is why these dishes cannot be plated in advance, cannot be photographed slowly, and cannot really be served in a restaurant that wants everyone to eat at the same time. They are cooked for the table that is already sitting down.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
