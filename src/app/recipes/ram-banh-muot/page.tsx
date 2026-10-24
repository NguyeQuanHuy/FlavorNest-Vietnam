'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ram-banh-muot',
  title: `Ram Bánh Mướt (Crisp Spring Rolls Wrapped in Steamed Rice Sheets)`,
  subtitle: `A shattering hot fried roll, still spitting oil, laid into a cold silk-soft steamed rice sheet and wrapped — crunch inside softness, hot inside cool. The dish that Hà Tĩnh eats for breakfast and that exists nowhere else in Vietnam.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/ram-banh-muot.jpg',
  intro: `Ram bánh mướt is the single most characteristic dish of Hà Tĩnh, and its logic is so simple that it takes a moment to see how strange it is. Ram is what the north-central provinces call a fried spring roll — nem rán in Hanoi, chả giò in Saigon — and bánh mướt is a steamed rice sheet, a close cousin of bánh cuốn but plain, unfilled, and slid off the steaming cloth in translucent white sheets. Every other province in Vietnam eats these two things separately. Hà Tĩnh wraps one inside the other and eats them together, and the result is a textural collision that neither dish achieves alone: the ram shatters, the bánh mướt yields, and the two arrive in the mouth at the same moment.

The bánh mướt is the harder half and the one that marks the province. Unlike bánh cuốn, which is filled with pork and wood ear and served with a warm dipping broth, bánh mướt is naked. It is made from rice soaked overnight and stone-ground into a very thin batter, ladled onto a cloth stretched over a pot of boiling water, covered for thirty seconds, and lifted off in a sheet so thin it is nearly transparent. It is brushed with scallion oil, folded into loose rolls, and served at room temperature — never hot. Its entire purpose is texture: cool, slippery, faintly sweet, and completely yielding. It exists to be the counterweight to something else, and in Hà Tĩnh that something else is the ram.

The ram is also its own thing. North-central rolls are smaller and slimmer than the fat Saigon chả giò, and they are wrapped in bánh đa nem — the brittle, sun-dried rice paper of the region — rather than the softer southern rice paper. The filling is lean: minced pork, wood ear, glass noodle, a little shredded carrot and kohlrabi, bound with egg and heavy on black pepper, which is the north-central signature and not a garnish. Fried correctly, in two stages, the wrapper becomes a hard, blistered, glassy shell that audibly cracks. This is the point of the whole exercise. A soft ram inside a soft bánh mướt would be pointless.

The eating is a race against physics. You take a sheet of bánh mướt, lay a hot ram diagonally across it, add a few herbs, roll, and dip in nước chấm. The ram must still be hot enough to have steam coming off it, because the moment it cools, the wrapper softens, and the moment it sits inside the damp rice sheet, it starts absorbing moisture and losing its crunch. In Hà Tĩnh the cook stands at the fryer, hands rolls out one at a time, and everyone at the table wraps and eats immediately, over and over, for twenty minutes. It is a dish that punishes politeness. Whoever waits for everyone else to be served gets a soft ram, and gets told so.`,
  ingredientSections: [
    {
      title: 'Bánh mướt (steamed rice sheets)',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'plain rice flour (bột gạo tẻ)',
          note: `Plain rice flour only — glutinous rice flour will turn the sheet chewy and gluey. Traditionally the rice is soaked overnight and stone-ground wet, and if you can find fresh wet rice batter (bột nước) at a Vietnamese grocer, it is far better than dry flour.`,
        },
        {
          amount: 60,
          unit: 'g',
          name: 'tapioca starch (bột năng)',
          note: `Roughly 20% of the rice flour. This is what gives bánh mướt its characteristic slippery elasticity and its faint translucency. Rice flour alone produces a sheet that is dull, brittle at the edges, and tears when you lift it.`,
        },
        { amount: 800, unit: 'ml', name: 'water', note: `The batter must be very thin — close to the consistency of skimmed milk. It will look far too watery. It is not.` },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (in the batter)' },
        { amount: 3, unit: 'tbsp', name: 'mỡ hành (scallion oil)', note: `Sliced scallion greens flash-scalded in hot oil. Brushed over each sheet as it comes off the steamer — it seasons the sheet and, more practically, stops the sheets from welding to each other.` },
      ],
    },
    {
      title: 'Ram (the fried rolls)',
      items: [
        {
          amount: 20,
          name: 'sheets of bánh đa nem (dried rice paper for frying), 16 cm',
          note: `The brittle north-central dried rice paper, not the soft southern kind used for fresh rolls. It is what fries into a hard, blistered, glassy shell. Sold in Vietnamese groceries across Europe — look for thin, semi-transparent sheets, often sold as "rice paper for spring rolls".`,
        },
        { amount: 300, unit: 'g', name: 'minced pork (roughly 20% fat)', note: `Some fat is structural — it keeps the filling from drying into a dense pellet inside the shell during the long fry.` },
        { amount: 20, unit: 'g', name: 'dried wood ear mushroom (mộc nhĩ), soaked and finely chopped', note: `In for texture, not flavor — its rubbery snap is what stops the filling from turning into paste.` },
        { amount: 50, unit: 'g', name: 'glass noodles (miến), soaked and cut short' },
        { amount: 1, name: 'carrot and 1 small kohlrabi, finely julienned', note: `Squeeze the julienne hard in a cloth to remove water. Wet vegetables inside a roll create steam, and steam blows holes in a frying wrapper.` },
        { amount: 3, name: 'shallots, finely minced' },
        { amount: 1, name: 'egg' },
        { amount: 1.5, unit: 'tsp', name: 'ground black pepper', note: `This much, and it is not a mistake. Heavy black pepper is the north-central signature in every minced-pork filling from Nghệ An to Quảng Bình, and a Hà Tĩnh ram tastes noticeably peppery.` },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, unit: 'L', name: 'neutral oil, for frying' },
      ],
    },
    {
      title: 'Nước chấm and the platter',
      items: [
        { amount: 4, unit: 'tbsp', name: 'fish sauce' },
        { amount: 3, unit: 'tbsp', name: 'sugar', note: `Less sugar than a southern nước chấm. Central Vietnamese dipping sauce runs sharper and saltier — the sweetness stays in the background.` },
        { amount: 3, unit: 'tbsp', name: 'lime juice' },
        { amount: 5, unit: 'tbsp', name: 'water' },
        { amount: 4, name: 'cloves garlic and 3 chilies, pounded' },
        { amount: 1, name: 'carrot and green papaya, shredded and quick-pickled' },
        { amount: 150, unit: 'g', name: 'herbs: rau mùi, tía tô, kinh giới, húng quế' },
        { amount: 1, name: 'head of soft lettuce and 1 cucumber, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make and rest the bánh mướt batter — 4 hours minimum',
      description: `Whisk the rice flour, tapioca starch and salt with the water until completely lump-free, stir in the oil, and rest at least 4 hours — overnight is better. Whisk again before use; the starch settles hard at the bottom.

The batter must be thin enough to run off a ladle in an unbroken stream, like skimmed milk. If it drops in dollops, add water. A thick batter gives a thick, doughy, opaque sheet — the exact opposite of what bánh mướt is.

The rest is not optional. Unhydrated rice flour granules give a chalky, gritty texture that no amount of steaming will fix, and the sheet will tear when you try to lift it.`,
      tip: `The tapioca starch is doing the structural work. Rice starch gelatinizes into a soft but inelastic gel — it sets, but it has no stretch, so a pure rice sheet tears the moment you try to peel it off the cloth. Tapioca starch forms long, flexible amylopectin chains that gelatinize into a cohesive, elastic, slightly translucent film. That 20% is the difference between a sheet you can lift in one piece and a sheet that shreds in your hands.`,
    },
    {
      title: 'Steam the sheets on cloth — 30 seconds each, and work fast',
      description: `Stretch a piece of clean cotton or muslin tightly over a wide pot of boiling water and secure it. Lightly oil the cloth. Ladle a thin layer of batter onto the cloth and swirl it into a 20 cm circle, cover with a lid, and steam exactly 30 seconds.

The sheet is ready when it turns from milky-white to translucent and the surface goes matte-glossy rather than wet. Slide a flat bamboo stick or an oiled spatula under one edge and lift the whole sheet off in one movement onto an oiled tray.

Brush each sheet with scallion oil, fold loosely into a roll, and set aside AT ROOM TEMPERATURE. Do not stack them hot without oil between them or they will fuse into a single block. Do not refrigerate — cold makes them stiff and rubbery.`,
      tip: `Thirty seconds. Rice starch gelatinizes fully at around 80°C and the sheet is only 1 mm thick, so it reaches that temperature almost instantly — everything after the gelatinization point is dehydration, and a sheet steamed for 60 seconds starts drying, toughening at the edges, and sticking to the cloth. This is why bánh mướt is made in a continuous rhythm: ladle, cover, count, lift, repeat. The cook in Hà Tĩnh does not use a timer. They count.`,
    },
    {
      title: 'Mix the filling — and squeeze the vegetables dry',
      description: `Combine the pork, wood ear, glass noodle, shallot, egg, pepper, fish sauce and sugar. Squeeze the julienned carrot and kohlrabi hard in a clean cloth until no more water comes out, then fold them in. Mix in one direction only, for about a minute, until the filling is cohesive and slightly sticky.

The filling should hold its shape when squeezed in your palm. If it is wet or slack, you did not squeeze the vegetables enough, and the rolls will burst in the fryer.

Wet filling is the number one cause of failed ram. Water inside the roll turns to steam at 100°C, the steam has nowhere to go, and it blows the wrapper open — dumping filling into the oil and leaving you with a hollow, greasy shell.`,
      tip: `Mixing in one direction is the same principle behind the beef balls of the Mekong, at a much lower intensity: unidirectional mixing aligns the myosin strands drawn out of the pork by the salt in the fish sauce, and they cross-link into a light network that binds the filling together. Stirred randomly, the filling stays loose and crumbly and falls out of the roll when you bite it. Sixty seconds in one direction is all it takes.`,
    },
    {
      title: 'Roll tight, then fry twice — 140°C, then 180°C',
      description: `Soften each sheet of bánh đa nem briefly — a quick wipe with a damp cloth or a two-second dip in water with a teaspoon of sugar in it, no more. Place a tablespoon of filling near one edge, fold the sides in, and roll tightly into a slim cigar about 2 cm thick. Tight is essential: air pockets expand and burst the roll.

First fry: 140°C for 6-7 minutes. The rolls should go pale gold and firm, with almost no bubbling. Lift out and rest at least 10 minutes.

Second fry: 180°C for 2-3 minutes, until deep golden, blistered, and hard. They should rattle against each other in the basket. Drain upright on a rack, never flat on paper.

Skip the double fry and you must choose: fry once at low heat and the shell is pale and leathery; fry once at high heat and the wrapper burns before the pork is cooked through.`,
      tip: `The double fry is the same physics that makes a good chip. The low first fry cooks the pork through and drives water out of the wrapper slowly, without browning — it dehydrates. The rest lets residual moisture migrate from the filling out to the surface. The hot second fry then flashes that surface moisture off instantly and blisters the now-dry wrapper into a rigid, glassy, porous shell. A single fry cannot do both jobs, because the temperature that cooks pork gently is not the temperature that vitrifies rice paper. Two temperatures, two jobs.`,
    },
    {
      title: 'Wrap and eat immediately — the ram must still be hot',
      description: `Mix the nước chấm: dissolve the sugar in the fish sauce and water, add lime, then the pounded garlic and chili and the pickles.

Take a sheet of bánh mướt, lay a ram diagonally across it with a few herb leaves and a slice of cucumber, roll it up, and dip. Eat in two bites, while the ram is still audibly crisp.

Wrap them one at a time, as they come out of the fryer. A ram that sits inside a damp rice sheet for even three minutes has begun to soften from the inside, and the entire point of the dish — hot brittle shell against cool yielding sheet — is gone. In Hà Tĩnh the fryer keeps working through the whole meal and nobody waits for anybody.`,
      tip: `This dish is a study in deliberate contrast, and every element is chosen against its partner. Hot against cold. Brittle against yielding. Fried against steamed. Fatty against plain. Peppery filling against neutral rice sheet. Neither half is remarkable on its own — a plain bánh mướt is bland, and a ram is just a spring roll — but they are engineered to meet. Understanding that is understanding why Hà Tĩnh never eats them separately, and why the province finds it faintly absurd that the rest of the country does.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
