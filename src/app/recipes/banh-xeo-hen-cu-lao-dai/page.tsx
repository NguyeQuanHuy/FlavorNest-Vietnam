'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-xeo-hen-cu-lao-dai',
  title: `Bánh Xèo Hến Cù Lao Dài (Baby Clam Crepe from Cù Lao Dài Islet)`,
  subtitle: `A turmeric-yellow rice crepe fried until the edges shatter like glass, filled not with pork and shrimp but with the tiny freshwater clams raked out of the sandbars around Cù Lao Dài — the islet version, sweeter and cleaner than any city bánh xèo.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 15 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-xeo-hen-cu-lao-dai.jpg',
  intro: `Cu Lao Dai is a long, narrow river islet in the Co Chien, split between Vinh Long and Ben Tre, and it is built on sand. The Mekong deposits it there year after year, and in the shallows around it live hen — tiny freshwater clams, no larger than a fingernail, which the islet women rake out of the sandbars at low water in flat baskets and carry home by the kilo. Hen are cheap, abundant, and so small that shucking them by hand is impossible; they are boiled open by the potful, the meat shaken free, and the water they cooked in is kept, because it is sweeter than the clams. Cu Lao Dai eats hen in everything — with rice, with soup, with rice paper — and it puts them in banh xeo.

Banh xeo everywhere else in the south is a crepe of pork belly and shrimp. The islet version is not a variation on it so much as a different logic. Hen are delicate, sweet, faintly mineral, and they carry almost no fat — which changes what the crepe has to do. A pork-and-shrimp banh xeo relies on rendered fat and the caramelized proteins of the filling to give it richness; a hen banh xeo has none of that, so it leans instead on the crepe itself: thinner, crisper, more turmeric, and cooked hotter and harder so the shell does the work. The result is lighter, cleaner, and more brittle — and it tastes overwhelmingly of the river rather than of the pig.

The batter is the technical heart of the dish and it is where nearly everyone goes wrong. Rice flour alone produces a crepe that browns but stays leathery. What makes banh xeo shatter is the combination of rice flour with a proportion of cornstarch or tapioca starch, a slug of coconut milk, and — critically — a batter thin enough to feel wrong. It should have the viscosity of full-fat milk, not of pancake batter. Poured into a wok that is genuinely, uncomfortably hot, that thin batter flashes: the water boils out almost instantly, the starch gelatinizes and immediately dehydrates rather than staying soft, and the fat in the coconut milk fries the underside from within. What you are actually making is not a crepe but a very thin, very fast fried starch shell. The sound it makes — xeo, the hiss — is the name of the dish, and if the wok does not scream when the batter hits it, you have already failed.

Eating it is a whole-table operation. The crepe is torn, not cut, into pieces; each piece is laid on a mustard leaf or lettuce leaf with a fistful of herbs, rolled, and dunked in nuoc cham. The mustard green matters: its pepper-bitterness is the counterweight to the fried shell, and on Cu Lao Dai the platter runs to a dozen herbs, all of them from the garden ten steps from the kitchen door. Everything here comes from within a kilometer of where you are sitting — the clams from the sandbar, the coconut from the tree in the yard, the herbs from the bed beside it, and the rice flour from the fields on the mainland you can see across the water.`,
  ingredientSections: [
    {
      title: 'The batter',
      items: [
        { amount: 200, unit: 'g', name: 'rice flour (bot gao)', note: `Plain rice flour, not glutinous. Glutinous rice flour will produce a chewy, sticky crepe — the opposite of what you want.` },
        {
          amount: 40,
          unit: 'g',
          name: 'cornstarch or tapioca starch',
          note: `Roughly 20% of the rice flour weight. This is the crisp. Pure rice flour browns but stays pliable; the added starch gelatinizes and then dehydrates into a brittle, glassy structure. Skip it and your crepe will be soft and disappointing no matter how hot the pan.`,
        },
        { amount: 1.5, unit: 'tsp', name: 'ground turmeric', note: `For the color and a faint earthy bitterness that grounds the coconut. Fresh turmeric, pounded, is better if you can get it.` },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 200, unit: 'ml', name: 'coconut milk', note: `Its fat fries the crepe from the inside as the water boils off — this is a lipid contribution, not a flavor one, and water alone will not substitute.` },
        {
          amount: 400,
          unit: 'ml',
          name: 'water or reserved hen cooking liquid',
          note: `Use the strained water the clams were boiled in. It is the sweetest liquid on the islet and putting it back into the batter is what makes this a hen banh xeo rather than a banh xeo with clams in it.`,
        },
        { amount: 4, name: 'scallions, green parts only, thinly sliced' },
        { amount: 1, name: 'egg (optional)', note: `Used in some Delta households for extra color and a slightly sturdier shell. Purists on the islet leave it out.` },
      ],
    },
    {
      title: 'The hen filling',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'live hen (baby freshwater clams) in shell — yields ~200 g meat',
          note: `Purge in salted water for 2 hours before cooking so they spit out their sand. In Europe: fresh or frozen shelled baby clams from a Vietnamese grocer are the practical option, or the smallest live vongole you can find. Do NOT use canned clams — they are cooked, salty, and rubbery, and they carry none of the sweetness the dish depends on.`,
        },
        { amount: 3, name: 'shallots, finely sliced' },
        { amount: 3, name: 'cloves garlic, minced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 150, unit: 'g', name: 'bean sprouts' },
        { amount: 100, unit: 'g', name: 'sliced yellow onion' },
        { amount: 100, unit: 'g', name: 'mung beans, soaked and steamed until soft (optional)', note: `A common islet addition — the starchy sweetness bulks out a filling that is otherwise very lean.` },
        { amount: 6, unit: 'tbsp', name: 'neutral oil, for frying' },
      ],
    },
    {
      title: 'The wrap platter and nuoc cham',
      items: [
        {
          amount: 1,
          name: 'large bunch of mustard greens (cai ben), whole leaves',
          note: `The correct wrapper for banh xeo in the Delta, and better than lettuce. Its peppery bitterness is a direct counterweight to the fried shell — the same job that green banana does for fried fish.`,
        },
        { amount: 1, name: 'head of soft lettuce' },
        { amount: 150, unit: 'g', name: 'mixed herbs: tia to, hung que, rau ram, kinh gioi, dieu (fish mint)', note: `Fish mint (dieu ca) is polarizing but it is the Delta signature — sharp, metallic, cooling.` },
        { amount: 1, name: 'cucumber, in batons' },
        { amount: 4, unit: 'tbsp', name: 'fish sauce' },
        { amount: 4, unit: 'tbsp', name: 'sugar' },
        { amount: 4, unit: 'tbsp', name: 'water' },
        { amount: 3, unit: 'tbsp', name: 'lime juice' },
        { amount: 3, name: 'cloves garlic and 2 chilies, pounded' },
        { amount: 1, name: 'carrot and white radish, shredded and quick-pickled' },
      ],
    },
  ],
  steps: [
    {
      title: 'Purge and open the hen — and keep the water',
      description: `Soak the live clams in cold salted water for 2 hours, changing the water twice, until no more sand settles at the bottom. Drain and rinse.

Put them in a dry pot over high heat with a splash of water, cover, and cook 4-6 minutes, shaking once, until all the shells have opened. Tip them into a colander set over a bowl to catch every drop of the liquid. Shake and rub the shells to release the meat, then pick the meat out.

Strain the cooking liquid through a fine sieve or a cloth to remove sand and shell grit, and set it aside for the batter. Discard any clam that stayed shut.

This liquid is the most valuable thing in the recipe. Throwing it away and using plain water in the batter turns a Cu Lao Dai banh xeo into an ordinary one.`,
      tip: `Clams open when the adductor muscle holding the two shells shut denatures with heat — it happens fast, and every second past the moment the last shell opens is a second the meat spends toughening. Six minutes maximum. The meat should be plump and just set, not shrunken and rubbery. This is the same reason the islet boils hen in a single fast batch rather than simmering them: the clam is done the moment it is open.`,
    },
    {
      title: 'Make the batter and rest it — 30 minutes, and it must look too thin',
      description: `Whisk the rice flour, starch, turmeric and salt together. Pour in the coconut milk and the strained hen liquid (topped up with water to 400 ml) and whisk until completely smooth. Stir in the scallion greens. Rest 30 minutes.

The finished batter should have the viscosity of full-fat milk — it should run off a spoon in a thin unbroken stream, not drop in dollops. It will look far too thin. It is not. A batter thick enough to feel right in the bowl produces a soft, thick, leathery crepe.

The 30-minute rest lets the rice flour hydrate fully. Fry it immediately and the ungelatinized flour granules give a gritty, chalky texture. Whisk again just before frying — the starch settles.`,
      tip: `Thinness is the entire crisp mechanism. When a very thin, high-water batter hits a 200°C wok, the water flashes to steam almost instantly and escapes upward through the batter — leaving behind a starch layer that gelatinizes and immediately dries into a brittle, porous shell, with the coconut fat frying its underside as it goes. A thick batter simply cannot lose its water fast enough: the interior stays hydrated, the starch stays soft, and you get a pancake. Same ingredients, entirely different physics.`,
    },
    {
      title: 'Cook the filling — 3 minutes, and no more',
      description: `Heat a tablespoon of oil in a wok and fry the shallots and garlic until fragrant. Add the hen meat, the fish sauce and the pepper, and toss for 90 seconds — just enough to season and heat through. Tip it out onto a plate immediately and set aside.

The clams are already cooked. This step seasons them and nothing else. Two minutes too long in the wok and they contract into chewy little beads and lose the sweetness you spent two hours purging sand to protect.

Keep the sliced onion, bean sprouts and mung beans raw and separate — they go into the crepe directly and cook inside it.`,
      tip: `This double-cooking problem is why hen banh xeo is harder than pork banh xeo. Pork and shrimp are added raw to the crepe and cook as it fries — perfect timing. Hen has already been cooked once to get it out of the shell, so the second cooking in the crepe is a liability, not a benefit. The Cu Lao Dai solution is to keep the wok pre-fry to seconds and to add the hen to the crepe late, at the folding stage rather than at the pouring stage.`,
    },
    {
      title: 'Fry the crepe — the wok must scream, or start over',
      description: `Heat a 24 cm non-stick or well-seasoned wok over high heat until a drop of water skitters and vanishes instantly — around 200°C. Add 1.5 tablespoons of oil and swirl to coat the sides.

Throw in a small handful of sliced onion, then pour in a ladle of batter and immediately tilt and swirl the wok so the batter runs up the sides in the thinnest possible layer. It must hiss loudly and violently — that hiss is the xeo, and if you get a soft sizzle, your wok is not hot enough. Stop, reheat, and start over; nothing is recoverable from a cool pan.

Scatter bean sprouts and mung beans over one half, cover, and cook 90 seconds. Uncover, drizzle a teaspoon of oil around the rim, and fry uncovered 2-3 more minutes until the edges lift, curl, and go visibly translucent-brittle. Add the hen to one half in the last 30 seconds, fold, and slide it out.

Doneness: the underside is deep gold and lace-textured, and the edge snaps audibly when you tap it with a spatula.`,
      tip: `The oil drizzled around the rim in the second half of the cook is not optional and it is not for sticking. It runs down the wok wall, pools under the outer edge of the crepe, and shallow-fries the rim — which is why a properly made banh xeo has an edge that shatters like a wafer while the center stays tender enough to fold. The gradient from brittle rim to soft center is the texture the dish is judged on. Restaurants that cook the whole thing at one level of heat produce banh xeo that are uniformly soft or uniformly hard, and neither is right.`,
    },
    {
      title: 'Tear, wrap, dunk — and never let one sit',
      description: `Mix the nuoc cham: dissolve the sugar in the fish sauce and water completely, then add lime, then the pounded garlic and chili and the pickled carrot and radish, so they float. Serve in individual bowls.

Take the crepe to the table straight from the wok. Tear off a piece with chopsticks, lay it on a mustard green or lettuce leaf, pile on herbs and cucumber, roll it tight, and plunge it into the nuoc cham. Eat in two bites.

A banh xeo has a life of about three minutes. The steam trapped inside the fold works its way outward and softens the shell from within, and a crepe that sat on a plate for ten minutes while everyone waited politely is a crepe that has lost the only thing that made it worth frying. On Cu Lao Dai the cook stands at the wok and the eaters eat as they come — one crepe, one person, immediately, and the cook eats last.`,
      tip: `Note that the nuoc cham here is thinner and sourer than the tamarind sauce used for fried fish, and this is deliberate. A hen banh xeo is lean — no pork fat, no rendered shrimp — so the sauce does not need to cut richness; it needs to supply salt and brightness to a filling that is delicate and sweet. Match the condiment to the fat content of what it is dressing, always. This is the single most useful rule in Vietnamese cooking, and it is why the same crepe served with pork gets a sauce with noticeably more sugar and less lime.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
