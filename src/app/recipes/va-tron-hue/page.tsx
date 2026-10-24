'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'va-tron-hue',
  title: `Vả Trộn (Huế Fig Salad with Shrimp and Pork on Sesame Crackers)`,
  subtitle: `The pale green figs that grow in every Huế garden, boiled until their astringency surrenders, squeezed dry and crushed by hand, then tossed warm with shrimp, pork belly, sesame and rau răm — and scooped up on shards of grilled sesame rice cracker. The taste of a Huế garden, in the city where gardens are a philosophy.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '50 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/va-tron-hue.jpg',
  intro: `Huế is a city of nhà vườn — garden houses — and the old quarters like Kim Long are still laid out as compounds where the house sits inside its own small ecosystem of fruit trees, herbs and a pond. In almost every one of those gardens stands a cây vả: a broad-leafed fig, Ficus auriculata, whose fruit grows not on the branches but in dense clusters directly from the trunk and the base of the tree, fat green discs the size of a small apple. The vả is to Huế what the artichoke is to Rome — a slightly laborious, faintly bitter garden vegetable that the rest of the country mostly ignores and the city itself treats as an identity. And the definitive thing Huế does with it is vả trộn: the fig, tamed by boiling, crushed and tossed warm with shrimp, pork and herbs into a dry, nubbly salad that is eaten by scooping it onto shards of grilled sesame rice cracker.

The technical heart of the dish is the taming, because a raw vả is close to inedible. Like all figs it runs with white latex when cut, and its flesh is loaded with tannins — the same astringent polyphenols as an unripe persimmon — that dry the mouth and turn brown on contact with air within minutes. The Huế method solves both problems with one pot: the whole figs are boiled, unpeeled, for twenty to thirty minutes, which leaches and heat-degrades the tannins, coagulates and washes out the latex, and softens the dense flesh to something between a cooked artichoke heart and a firm potato. Then they are plunged into cold water, peeled, sliced, and — the step everyone forgets — squeezed, hard, in a cloth, until the waterlogged flesh gives up its liquid and becomes the dry, absorbent sponge that the seasoning will soak into. A vả that was not squeezed makes a watery salad, and a watery trộn is a failed one: this is a dry salad, in the same family as the gỏi, where every surface should be coated and nothing should pool.

What the fig brings, once tamed, is texture and a flavour that is easier to recognize than describe: mildly nutty, faintly green, a whisper of residual bitterness that reads as sophistication rather than fault — and, above all, an extraordinary capacity to absorb. Crushed by hand into rough, craggy pieces (never sliced neatly; the broken surfaces are where the seasoning lives), the fig drinks up fish sauce, pork fat, and the toasted oils of sesame and peanut, and hands them back in every bite. The shrimp and pork belly are almost a garnish by weight; the fig is the protagonist. There is a fully vegetarian version — vả trộn chay, with fried tofu and mushroom replacing the animal half — that is just as canonical, because Huế's Buddhist kitchens, cooking for the city's pagodas, long ago worked out that the fig carries a meatless dressing just as happily.

It is served warm or at room temperature, mounded on a plate under a snow of sesame and peanut, with grilled bánh tráng mè broken at the table — and it belongs to the beginning of things: the first plate at a family gathering, the vegetable course of a đám giỗ tray, the thing that comes out with the first round of drinks. A Huế person abroad, asked what they miss that cannot be bought, will name this dish more often than any soup — because the soups travel, and the tree does not.`,
  ingredientSections: [
    {
      title: 'The figs',
      items: [
        {
          amount: 6,
          name: 'fresh vả (Ficus auriculata figs), green and firm — about 500 g',
          note: `The garden fig of Huế, growing in clusters from the trunk. In Europe: fresh vả is rare but appears frozen (whole or pre-sliced, labelled "trái vả") at larger Vietnamese grocers — frozen is genuinely acceptable here since the fruit is boiled anyway. The honest substitutes, in order: firm unripe green common figs (boiled the same way), canned artichoke hearts (drained, squeezed, and briefly boiled to remove brine — surprisingly close in texture and nuttiness), or young green jackfruit. Ripe sweet figs are wrong; this is a vegetable, not a fruit.`,
        },
        { amount: 1, unit: 'tbsp', name: 'salt (for the boiling water)' },
        { amount: 1, name: 'squeeze of lime, for the soaking water', note: `The figs go into acidulated water the moment they are peeled and sliced — their polyphenols oxidize brown within minutes in plain air, and a grey vả trộn is judged before it is tasted.` },
      ],
    },
    {
      title: 'The shrimp and pork',
      items: [
        { amount: 150, unit: 'g', name: 'small shrimp, peeled', note: `Small ones, halved lengthwise after cooking so they distribute through the salad rather than sitting on it.` },
        { amount: 150, unit: 'g', name: 'pork belly, in one piece', note: `Boiled, then diced small. The fat is structural: a fig this absorbent needs lipid to carry the seasoning into it, and lean pork leaves the salad austere.` },
        { amount: 1, name: 'shallot, minced' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The seasoning and toss',
      items: [
        { amount: 2, unit: 'tbsp', name: 'fish sauce', note: `For the classic version. The vegetarian vả trộn chay uses soy or vegetarian fish sauce and swaps the shrimp and pork for fried tofu and wood ear — equally canonical in this city of pagoda kitchens.` },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 3, unit: 'tbsp', name: 'roasted white sesame seeds', note: `The signature snowfall — vả trộn wears more sesame than any other salad in the country.` },
        { amount: 3, unit: 'tbsp', name: 'roasted peanuts, crushed' },
        { amount: 30, unit: 'g', name: 'rau răm (Vietnamese coriander), roughly chopped', note: `The non-negotiable herb. Its peppery, faintly soapy bite against the mild nutty fig is the flavour signature of the dish.` },
        { amount: 2, unit: 'tbsp', name: 'mỡ hành (scallion oil)' },
      ],
    },
    {
      title: 'To serve',
      items: [
        {
          amount: 4,
          name: 'bánh tráng mè (sesame rice crackers), grilled over charcoal or open flame',
          note: `The utensil and the counterpoint — snapped into shards at the table and used to scoop. Grill them fresh; the whole dish is soft-on-crisp and a stale cracker forfeits half of it.`,
        },
        { amount: 1, name: 'saucer of fish sauce with sliced bird\'s-eye chili (optional)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Boil the figs whole — 25 minutes, until a chopstick slides through',
      description: `Put the whole, unpeeled figs into a pot of salted boiling water — they float, so weigh them down with a small plate — and boil steadily for 20-30 minutes, until a chopstick pushed through the fattest one meets no resistance.

Lift them straight into a bowl of cold water and leave 5 minutes. The skins, leathery when raw, now slip off under your thumb. Peel them all.

Do not shortcut the boil. An underboiled vả keeps enough tannin to dry the mouth, and its latex leaves a gummy film on the knife and the tongue. The fig must surrender completely — this is the artichoke rule: there is no al dente for vả.`,
      tip: `The boil is chemistry with two targets. Tannins — the astringent polyphenols that make raw fig undrinkably drying — are water-soluble and heat-labile: twenty-plus minutes leaches a large fraction into the water and degrades much of the rest, which is why the pot water turns faintly tea-coloured. Meanwhile the white latex, a suspension of rubber particles and protein-digesting enzymes (ficin — the reason raw fig sap irritates skin), coagulates with heat and rinses away. One pot, two problems, and the same reason unripe persimmons, acorns and olives all pass through water on their way to being food: astringency is not a flavour to balance, it is a compound to remove.`,
    },
    {
      title: 'Slice, soak in lime water, then squeeze — hard',
      description: `Slice the peeled figs into rough 1 cm wedges, dropping them straight into a bowl of water with a good squeeze of lime as you go. When all are sliced, leave them 10 minutes — the acidulated soak pulls a last measure of tannin and keeps them pale.

Then drain, wrap the fig in a clean cloth, and squeeze — hard, in fistfuls, over the sink — until no more water runs and the flesh feels like a wrung sponge. Expect to be surprised by how much comes out.

Finally, crush and break the squeezed fig with your hands into rough, craggy, uneven pieces. Do not slice it neatly. The broken faces are absorption surfaces, and the whole dish depends on them.`,
      tip: `The squeeze is the same move as the gỏi cá press in Hà Tĩnh, serving the same master: seasoning cannot enter what water already fills. Boiled fig is waterlogged — its cells ruptured by heat and flooded — and dressed in that state it dilutes everything and weeps on the plate. Wrung dry, it becomes a vacuum: porous, spongy tissue that pulls the fish sauce, pork fat and scallion oil deep inside rather than wearing them on the surface. Vietnamese dry salads are built on this one exchange — water out first, flavour in second — and the cloth is the most important tool in the recipe.`,
    },
    {
      title: 'Cook the shrimp and pork — separately, then together',
      description: `Boil the pork belly piece 20-25 minutes until a skewer passes freely; rest it in its water 5 minutes, then dice small — 1 cm, each piece showing its stripe of fat.

Fry the shallot in the oil until fragrant, add the shrimp, and sear 90 seconds until just pink and curled; halve them lengthwise. Toss shrimp and diced pork together in the warm pan with a teaspoon of the fish sauce, off the heat, just to gloss.

Keep everything warm. Vả trộn is tossed warm — the heat is what drives the seasoning into the fig — and assembled from cold parts it never quite marries.`,
      tip: `Warmth is a solvent condition, not a serving preference. Absorption into the fig's spongy tissue runs on diffusion, and diffusion rates climb steeply with temperature — a warm fig drinks the dressing in minutes, a cold one holds it at the surface for an hour. The same physics is why the German Kartoffelsalat is dressed while the potatoes steam and why the hến hit the crackers hot. Toss warm, rest ten minutes, serve barely warm: the flavour has moved inward, and the salad tastes like one thing instead of five.`,
    },
    {
      title: 'Toss — fig first, fat first, herbs last',
      description: `In a wide bowl, toss the crushed warm fig with the mỡ hành first, until every craggy surface is glossed. Then the fish sauce, sugar, pepper and chilli; toss again and let it sit 2 minutes — watch the fig drink.

Fold in the shrimp and pork, then two-thirds of the sesame and peanuts, and finally the rau răm, with as few strokes as will distribute it.

Taste a piece of fig, not a shrimp. The fig is the protagonist and the seasoning gauge: it should taste nutty, savoury, faintly sweet, warm with pepper, with the herb arriving late. If the fig is bland, the salad is bland, whatever the shrimp says.`,
      tip: `Fat before fish sauce is a sequencing rule with a reason. Scallion oil coats the fig's porous surfaces first and moderates how fast the water-based fish sauce penetrates — dress with fish sauce first and the outer millimetre of each piece saturates with salt before the interior gets anything, giving a salad that is sharp outside and hollow inside. Lipid first, then the seasoning rides in evenly on it. It is the same order in which a French vinaigrette meets warm potatoes, discovered separately, for the same porous-starch reasons.`,
    },
    {
      title: 'Mound, snow with sesame, and scoop with the cracker',
      description: `Mound the salad on a plate, scatter the reserved sesame and peanut over the top — the snowfall is the presentation — and finish with a last few rau răm leaves. Grill the bánh tráng mè at the last minute and bring them whole to the table.

To eat: snap off a shard of cracker, press it into the mound to scoop, and take cracker and salad in one bite. No cutlery improves on this. A saucer of chilli fish sauce stands by for those who want a sharper edge.

Serve warm or at room temperature, within the hour. The fig holds its seasoning well, but the crackers begin dying the moment the humidity finds them — grill in relays if the evening runs long. In a Huế garden house, this is the plate on the table when the guests arrive, and the tree it came from is usually visible from the chair.`,
      tip: `Step back and vả trộn is the central-Vietnamese grammar written in a garden's handwriting: the crisp-against-soft pairing (cracker and fig), the wrung-dry absorbent base (the gỏi logic), rau răm as the assigned herb, sesame doing the toasted work, and a canonical vegetarian twin from the pagoda kitchens standing beside the shrimp-and-pork original. What is distinct is the sourcing radius. Bánh canh Nam Phổ walks in from a village; the vả falls from the trunk beside the door. Huế's cooking is usually described by its royal court, but its garden houses wrote just as much of the menu — and this dish, more than any soup, is the one that cannot leave, because the recipe begins with a tree.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
