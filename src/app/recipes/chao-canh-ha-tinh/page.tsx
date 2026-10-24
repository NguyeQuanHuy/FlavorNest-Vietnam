'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'chao-canh-ha-tinh',
  title: `Cháo Canh Hà Tĩnh (Thick Hand-Cut Noodle Soup with Shrimp and Pork)`,
  subtitle: `Neither a porridge nor a soup but the thing in between: fat hand-cut wheat noodles boiled directly in their own broth until the released starch thickens it to a cloudy, clinging body. Hà Tĩnh's winter breakfast, and the one dish where cloudy broth is the goal.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/chao-canh-ha-tinh.jpg',
  intro: `The name is a contradiction and everyone in Hà Tĩnh knows it. Cháo is rice porridge. Canh is a clear soup. Cháo canh is neither, and the name is the province's way of saying so: it is a bowl of thick, fat, hand-cut noodles in a broth that has been deliberately thickened to a cloudy, clinging consistency somewhere between the two. Every other noodle soup in Vietnam is judged on the clarity of its broth. Phở must be transparent. Bún bò must be clean. Bún thang must be crystalline. Cháo canh is the dish that inverts the rule, and it does it on purpose.

The mechanism is straightforward once you see it: the noodles are boiled directly in the broth, and not, as everywhere else in Vietnam, blanched separately in a pot of water and then dropped into a clean bowl. These are wheat-flour noodles, not rice, and they are cut thick and rough by hand, so they shed a great deal of starch as they cook. That starch gelatinizes and disperses through the broth, and over eight or nine minutes it turns a thin, clear, savoury liquid into something with real body — cloudy, faintly gluey in the best sense, thick enough that it clings to the noodle instead of running off it. Every noodle-soup cook in Vietnam guards against exactly this outcome. Hà Tĩnh chases it.

That thickness explains everything else about the dish, and above all why it is a north-central dish and not a southern one. Hà Tĩnh winters are genuinely cold and wet — the province catches the northeast monsoon head-on, and January mornings sit at ten or twelve degrees with a wind coming off the sea. A clear, elegant broth is a hot-weather food; it cools in the bowl within minutes. A thick, starchy broth holds its heat far longer, coats the mouth and throat, and sits heavy in the stomach. Cháo canh is engineered for cold mornings by people who have a lot of them, and it goes on the table at six in the morning across the province from November to March.

The topping is a two-protein structure that recurs across north-central Vietnam: small river or sea shrimp, pounded and fried into a rust-coloured savoury crumble, and belly pork, either sliced or minced and caramelised. The shrimp bring the marine, glutamate-heavy savour; the pork brings fat, which the starchy broth needs badly. Over the top go scallion, coriander, a scatter of fried shallot, and — this is a Hà Tĩnh bowl, so it is not optional — a great deal of black pepper. Some households serve it with a piece of grilled bánh đa vừng on the side to snap into the bowl. It is not a refined dish, it is not photogenic, and no Hanoi food writer has ever built a career on it. It is simply what the province eats when it is cold, and it is very good.`,
  ingredientSections: [
    {
      title: 'The noodles (sợi cháo canh)',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'plain wheat flour (bột mì)',
          note: `Wheat, not rice. This is one of the very few wheat-noodle dishes in the Vietnamese repertoire, and the wheat is essential: gluten gives the noodle its chew and the released wheat starch is what thickens the broth. Rice noodles will not do either job.`,
        },
        { amount: 150, unit: 'ml', name: 'warm water' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'rice flour or extra wheat flour, for dusting',
          note: `Dust generously when rolling. Do NOT shake the excess off before cooking — the loose surface flour goes into the pot with the noodles and is a deliberate part of how the broth thickens.`,
        },
      ],
    },
    {
      title: 'The broth',
      items: [
        { amount: 500, unit: 'g', name: 'pork bones', note: `Blanched 5 minutes and rinsed — the standard step for a clean-tasting base. The broth will end up cloudy from starch, but it should never be cloudy from scum, which tastes of nothing and looks grey rather than white.` },
        { amount: 2, unit: 'L', name: 'water' },
        { amount: 1, name: 'yellow onion, halved and charred' },
        { amount: 30, unit: 'g', name: 'ginger, charred and bruised' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tsp', name: 'sugar', note: `A teaspoon, not a tablespoon. North-central broth is savoury and pepper-driven, not sweet — the Delta habit of a big spoonful of rock sugar would be wrong here.` },
      ],
    },
    {
      title: 'The topping',
      items: [
        {
          amount: 250,
          unit: 'g',
          name: 'small shrimp, peeled and roughly pounded',
          note: `Pounded in a mortar to a coarse, uneven paste — not minced smooth. The rough texture is what fries into a savoury crumble with crisp edges rather than a uniform pink paste. Small shrimp have more shell-derived savour and are the traditional choice; the shells and heads go into the broth pot.`,
        },
        { amount: 250, unit: 'g', name: 'pork belly, finely diced' },
        { amount: 4, name: 'shallots, minced' },
        { amount: 3, name: 'cloves garlic, minced' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        {
          amount: 2,
          unit: 'tsp',
          name: 'ground black pepper',
          note: `The north-central signature and, in Hà Tĩnh, the defining seasoning of the bowl. A cháo canh should smell of pepper the moment it reaches the table.`,
        },
        { amount: 1, unit: 'tbsp', name: 'annatto oil (dầu điều)', note: `For the rust-red colour that identifies the topping at a glance. Optional but traditional.` },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'scallions, sliced' },
        { amount: 20, unit: 'g', name: 'coriander, chopped' },
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
        { amount: 1, unit: 'tsp', name: 'coarsely cracked black pepper, for the table' },
        { amount: 2, name: 'bánh đa vừng (sesame rice crackers), grilled (optional)', note: `Snapped and dropped into the bowl at the last second, Hà Tĩnh-style — crisp against thick, the same textural instinct that runs through the whole province.` },
        { amount: 1, name: 'saucer of fish sauce with sliced chili' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the noodle dough and rest it — 40 minutes',
      description: `Mix the flour and salt, add the warm water gradually, and knead 8-10 minutes into a firm, smooth, slightly stiff dough — noticeably firmer than a bread dough. Cover and rest 40 minutes.

The dough should feel dense and elastic, and it should spring back slowly when pressed. If it is soft and sticky, add flour; a soft dough gives noodles that dissolve into the broth instead of holding their shape.

The rest is what makes it rollable. Straight after kneading the gluten is tight and the dough fights back; forty minutes lets those gluten bonds relax and rearrange, and the dough rolls out without shrinking back at you.`,
      tip: `A wheat noodle in Vietnam is a genuine oddity and it is worth pausing on. Vietnamese noodle culture is overwhelmingly rice-based — phở, bún, bánh canh, hủ tiếu, mì Quảng are all rice. Wheat noodles cluster in the north and north-centre, where the Chinese influence is strongest and where wheat has historically been available. Cháo canh sits in exactly that band, and its texture — chewy, glutinous, substantial — is impossible to achieve with rice flour, which has no gluten and cannot be kneaded into an elastic dough at all.`,
    },
    {
      title: 'Build the broth — 60 minutes, with the shrimp shells in it',
      description: `Blanch the pork bones 5 minutes, drain, rinse clean, and start again in 2 L of cold water with the charred onion and ginger. Add the shrimp shells and heads. Simmer gently 60 minutes, skimming.

Strain, and season with the fish sauce, salt and sugar. It should taste clean, savoury and slightly under-seasoned — the noodles are about to go in and they will absorb salt as they cook.

Do not let it boil hard. The starch thickening comes later, from the noodles, and it should be the only thing clouding the broth. A broth clouded by hard-boiled scum and emulsified fat is a different and worse kind of cloudy, and you cannot tell them apart once they are mixed.`,
      tip: `The shrimp shells are free glutamate and they are the reason to buy shell-on shrimp. Crustacean shells are dense in glutamic acid and in nucleotides — inosinate and guanylate — and glutamate plus nucleotide is the classic synergistic pairing that produces savouriness far greater than the sum of its parts. Simmered for an hour they give a broth a depth that pork bones alone cannot. Almost every north-central noodle broth with a seafood component does this, and throwing the shells away is throwing away the point.`,
    },
    {
      title: 'Fry the topping — shrimp and pork, hard, 8 minutes',
      description: `Heat the annatto oil, fry the shallot and garlic until fragrant, then add the diced pork belly and fry over high heat 4-5 minutes until the fat has rendered and the edges are browned and crisp.

Add the pounded shrimp, the fish sauce and the sugar, and fry another 3-4 minutes, breaking it up with the spatula, until the shrimp has gone from grey to a dry, rust-orange crumble with crisp edges. Take it off the heat and stir in the 2 teaspoons of black pepper.

It should be dry and crumbly, not wet and pasty. Under-fried, the shrimp stays soft and the topping disappears into the broth. Fried hard, it holds its texture on top of the bowl for the whole meal, which is the point of a topping.`,
      tip: `Frying the pork first and rendering its fat, then cooking the shrimp in that fat, is a deliberate sequence. Shrimp is extremely lean and would stick and scorch in a dry pan; pork fat carries heat evenly around it, and — more importantly — carries flavour. Many of the aroma compounds generated when shrimp browns are fat-soluble, so they dissolve into the rendered pork fat and are then distributed through the entire topping and into the broth. Cook the lean thing in the fat of the fat thing. It is the oldest rule in the kitchen and it is why this topping tastes of both.`,
    },
    {
      title: 'Roll, cut, and boil the noodles IN the broth — this is the dish',
      description: `Roll the rested dough out on a well-floured surface to about 3 mm thick — thicker than you think, this is a fat noodle. Dust generously with flour, fold loosely, and cut by hand into strips 1 cm wide and 8-10 cm long. Shake them apart but do NOT wash or rinse off the surface flour.

Bring the broth to a rolling boil and drop the noodles straight in. Boil 8-9 minutes, stirring occasionally so they do not stick to the bottom.

Watch the broth change. It goes from clear amber to cloudy, then to a visibly thickened, milky-opaque body that coats the back of a spoon. That is the dish arriving. The noodles are done when they are cooked through but still chewy in the centre — like a firm pasta, not soft.

Do not blanch them separately in water first. Boiling the noodles in a separate pot and adding them to a clean broth gives you a perfectly nice wheat-noodle soup, and it is not cháo canh.`,
      tip: `This is starch gelatinization used as a thickener, and it is the same mechanism that makes pasta water valuable in an Italian kitchen. Wheat starch granules absorb water and swell as they heat past about 60°C, then rupture, releasing long amylose chains into the surrounding liquid. Those chains tangle and trap water, and the liquid becomes viscous. In every other Vietnamese noodle soup this is a contaminant to be washed away; in cháo canh it is the entire textural goal, and the loose flour clinging to the hand-cut noodles is deliberately left on because it accelerates the effect. The cook is not being careless. The cook is thickening the soup.`,
    },
    {
      title: 'Ladle, top, and eat while it is scalding',
      description: `Ladle the noodles and their thickened broth into deep bowls. Spoon the shrimp-and-pork topping generously over the middle, then scatter with scallion, coriander, fried shallots and another crack of black pepper.

Snap a piece of grilled bánh đa over the top if you have it, and serve with a saucer of fish sauce and chili.

Eat it immediately and eat it very hot. A thick starchy broth continues to thicken as it cools, and a bowl left standing for ten minutes sets toward paste, with the noodles absorbing broth until there is barely any left. This is a bowl that is at its best in its first three minutes and steadily less good after that — which is exactly why it is a breakfast eaten fast at a market stall on a cold morning, and not a dish anyone serves at a dinner party.`,
      tip: `The whole logic of cháo canh is thermal. Starch-thickened liquid has a far higher viscosity and a far lower rate of convective heat loss than a clear broth — it holds its temperature in the bowl, it coats the mouth and throat, and it delivers heat and carbohydrate together, fast, on a cold morning. This is the same reasoning behind congee in China, porridge in Scotland and polenta in the Alps. Cold-climate cuisines converge on thick, starchy, hot breakfasts, and Hà Tĩnh in January is a cold climate. Southern Vietnam, which is never cold, has nothing like this dish and has no need of one.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
