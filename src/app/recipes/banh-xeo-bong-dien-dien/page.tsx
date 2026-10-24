'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-xeo-bong-dien-dien',
  title: `Bánh Xèo Bông Điên Điển (Mekong Flood-Season Crepe with Sesbania Blossoms)`,
  subtitle: `The standard Mekong crepe — turmeric batter, coconut milk, shrimp and bean sprouts — loaded with the vivid yellow blossoms of the Sesbania tree that flowers only when the floodwater recedes. A crepe that announces the season by its colour: gold inside gold, made for the same few weeks the cá linh run and the fields drain.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/banh-xeo-bong-dien-dien.jpg',
  intro: `Bánh xèo is the Mekong Delta's universal crepe — huge, turmeric-yellow, fried until the edge shatters like glass, filled with shrimp and bean sprouts, torn and wrapped in herbs and mustard leaf, dunked in nước chấm — and every province from Saigon to Cà Mau makes a version, each claiming theirs is the original. What makes the Đồng Tháp version its own dish, and the reason to write a separate recipe when the Cù Lao Dài hến xèo already fills the collection's bánh-xèo slot, is the bông điên điển: the vivid yellow blossoms of the Sesbania sesban tree, scattered into the batter at the moment of pouring, so the finished crepe is yellow from turmeric in the dough and yellow from flowers on its surface — a double gold that no other province's crepe carries because no other province has Đồng Tháp's density of Sesbania trees.

Điên điển is a fast-growing leguminous tree that thrives along canal banks, paddy bunds and floodplain margins — everywhere the Mekong deposits the alluvial silt it likes — and it flowers from September to November, precisely the weeks when the annual flood is receding and the fields are draining. The timing is not a coincidence; it is the ecological logic the Delta's cuisine runs on. The same receding flood that uncovers the canals and lets the cá linh juveniles be netted also lets the Sesbania's roots hit drier ground and triggers its flowering, so the blossoms appear at exactly the moment the fresh fish appear, and the kitchen puts them on the same table — the cá linh in a kho lạt, the blossoms in a bánh xèo, and often both on the same plate.

The blossoms taste faintly sweet, mildly bitter at the stem end, and green-herbaceous in a way that is closer to a courgette flower than to any other blossom the collection has met. They wilt almost instantly in heat, which means they must go into the batter at the moment it hits the hot wok and be eaten within the minute — anything longer and they turn to a brown, flavourless smear. Their contribution is therefore less about flavour (which is mild) than about texture (a soft, slightly slippery petal against the shattering crepe), colour (the golden scatter visible through the crisp batter), and above all season — the blossom in the crepe is a datestamp, and anyone in the Delta who sees it knows the month without being told.

The batter is the standard Mekong formula, unchanged from the Cù Lao Dài recipe earlier in this collection: rice flour, a proportion of cornstarch or tapioca starch, coconut milk, turmeric, scallion greens, water — thin as skimmed milk, poured into a smoking-hot wok and swirled to a shattering-crisp sheet in three minutes. The filling here is not hến but the more common shrimp-and-pork combination, because the Đồng Tháp version is not an islet specialist but the mainstream Delta crepe, and its mainstream filling is exactly what every visitor to the Mekong has eaten at a hundred stalls — except for the gold flowers that make it, for three or four weeks a year, a different and more beautiful thing.`,
  ingredientSections: [
    {
      title: 'The batter',
      items: [
        { amount: 200, unit: 'g', name: 'rice flour (bột gạo)' },
        { amount: 40, unit: 'g', name: 'cornstarch or tapioca starch', note: `The crisp. Same ratio, same reason as every bánh xèo in the collection.` },
        { amount: 1.5, unit: 'tsp', name: 'ground turmeric' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 200, unit: 'ml', name: 'coconut milk' },
        { amount: 400, unit: 'ml', name: 'water' },
        { amount: 4, name: 'scallions, green parts, thinly sliced' },
        { amount: 1, name: 'egg (optional)' },
      ],
    },
    {
      title: 'The filling and the blossoms',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'bông điên điển (Sesbania sesban blossoms)',
          note: `The dish. Vivid yellow, picked that morning or thawed from frozen (available at larger Vietnamese groceries abroad, typically in autumn). Rinse gently, pull the calyx off each blossom and discard it — the calyx is bitter beyond what the dish wants. The petals are scattered into the wok at the moment the batter is poured, so they set into the surface of the crepe and are visible through it. If entirely unavailable: the crepe is a standard Mekong bánh xèo without them, and it should be called that rather than pretending.`,
        },
        { amount: 200, unit: 'g', name: 'shrimp, peeled or shell-on (small Delta shrimp, shell-on, are traditional — the shell crisps in the fry)' },
        { amount: 150, unit: 'g', name: 'pork belly, thinly sliced' },
        { amount: 200, unit: 'g', name: 'bean sprouts' },
        { amount: 1, name: 'small onion, thinly sliced' },
        { amount: 100, unit: 'g', name: 'mung beans, soaked and steamed (optional)' },
        { amount: 6, unit: 'tbsp', name: 'neutral oil, for frying' },
      ],
    },
    {
      title: 'The wrap platter and nước chấm',
      items: [
        { amount: 1, name: 'large bunch of mustard greens (cải bẹ xanh), whole leaves', note: `The correct Delta wrapper — its peppery bitterness is the counterweight to the fried shell.` },
        { amount: 1, name: 'head of soft lettuce' },
        { amount: 150, unit: 'g', name: 'herbs: tía tô, húng quế, rau răm, kinh giới, diếp cá (fish mint)' },
        { amount: 1, name: 'cucumber, in batons' },
        { amount: 1, name: 'green (unripe) banana, thinly sliced, in lime water' },
        { amount: 1, name: 'star fruit (khế), thinly sliced' },
        { amount: 4, unit: 'tbsp', name: 'fish sauce' },
        { amount: 4, unit: 'tbsp', name: 'sugar' },
        { amount: 4, unit: 'tbsp', name: 'water' },
        { amount: 3, unit: 'tbsp', name: 'lime juice' },
        { amount: 3, name: 'cloves garlic and 2 chilies, pounded' },
      ],
    },
  ],
  steps: [
    {
      title: 'Mix the batter and rest it — then prepare the blossoms',
      description: `Whisk the rice flour, starch, turmeric and salt with the coconut milk and water until smooth. Stir in the scallion greens and the egg if using. Rest 30 minutes minimum — the flour must hydrate fully or the crepe will be gritty. The batter should be the consistency of skimmed milk and pour off a ladle in a thin unbroken stream.

Meanwhile, prepare the blossoms: rinse gently in cool water, pull each calyx off (the small green cup at the base of the flower — it concentrates the Sesbania's bitterness and would make the crepe harsh), and drain well on paper. Set them in a bowl beside the stove, within reach, because they go in at the moment of pouring and any delay costs you the effect.

Whisk the batter again just before each crepe — the starch settles constantly.`,
      tip: `The blossom's calyx removal is a bitterness-management step, not a prep-prettiness step. Sesbania's leaves and stems contain saponins and tannins concentrated in the green tissue; the yellow petals are comparatively mild, with a gentle sweetness and a faint, pleasant bitter note. Remove the calyx and you taste a flower; leave it and you taste a hedge. The Delta's bông-điên-điển sellers at the market do this trimming for you — the blossoms arrive calyx-free in the basket — but frozen ones from a grocer may not, and checking each one takes thirty seconds and saves the crepe.`,
    },
    {
      title: 'Fry the crepe the Mekong way — screaming wok, blossoms in with the batter',
      description: `Heat a 24-26 cm wok over high heat until a drop of water vanishes instantly. Add 1.5 tablespoons of oil and swirl to coat the sides.

Sear 3-4 shrimp and a few slices of pork belly for 30 seconds in the oil. Then, with the wok still screaming hot: pour in a ladle of batter and immediately tilt and swirl — and simultaneously scatter a generous handful of the prepared bông điên điển over the batter while it is still liquid. The blossoms land on the wet surface and set into it as it firms, becoming part of the crepe's surface rather than a topping on it.

Add bean sprouts and onion over one half. Cover and cook 90 seconds. Uncover, drizzle a teaspoon of oil around the rim, and fry uncovered 2-3 more minutes until the edges lift, curl, go translucent-brittle, and the blossoms visible through the crisp batter have turned from wet-yellow to a toasted-gold. Fold, slide out.

The sound — xèo, the hiss — must be violent. A soft sizzle means the wok was too cold and the crepe will be leathery, and no amount of time recovers a cold start. If the hiss is wrong, remove, reheat, restart.`,
      tip: `Scattering the blossoms into the wet batter rather than laying them on the finished crepe is the technique that makes this a bông-điên-điển bánh xèo rather than a bánh xèo with flowers on it. Set into the batter while it is still liquid, the petals are captured in the gelatinising starch and fused into the crepe's structure — they become transparent windows of yellow in the golden sheet, visible when the crepe is held up to the light, and they contribute a soft, slippery petal texture inside the shattering crust. Laid on afterwards they would sit on top, fall off at first bite, and contribute nothing structural. The timing — flowers in the same second as the batter — is the whole difference between a seasonal crepe and a garnished one.`,
    },
    {
      title: 'Mix the nước chấm — the standard southern formula',
      description: `Dissolve the sugar in the fish sauce and water until completely clear. Add the lime juice. Then the pounded garlic and chili, floating on top.

This is the same clear, sweet-sour, chili-flecked nước chấm that accompanies every southern bánh xèo, every gỏi cuốn, every fried spring roll — the Delta's universal condiment, calibrated thinner and sweeter than the central version and sharper and less sweet than the northern one. Its job against a fried crepe is to cut the oil and brighten the batter, and against the blossoms specifically it adds an acid note that lifts the petals' mild sweetness into the foreground.`,
      tip: `The nước chấm for fried food is deliberately thinner and more acidic than the nước chấm for fresh rolls or for grilled meat — more water, more lime, less sugar — because its job is to cut fat rather than to supply it. This collection has documented the condiment-calibration principle at every step: match the sauce to the dish's fat content. A lean fish gets a thick, fatty peanut sauce; a fried crepe gets a thin, sharp, acid sauce; a raw gỏi gets something in between. The nước chấm is not one sauce — it is a family of sauces, tuned by the cook to the plate, and the tuning knob is the fat on the other side of the dip.`,
    },
    {
      title: 'Tear, wrap, dunk — and eat within the minute, before the blossoms vanish',
      description: `Bring the crepe straight from the wok to the table. Tear off a piece — taking rim and centre together, with visible blossoms in the shard — and lay it on a mustard leaf or lettuce leaf with herbs, cucumber, a slice of green banana and one of star fruit. Roll loosely. Dunk deep.

Eat in two bites. The first should carry: the shatter of the turmeric-starch shell, the soft petal of the blossom set inside it, the crunch of the sprout, the shrimp's sweetness, and the nước chấm's bright acid. The second bite is the herb end — green, peppery, tannin-sharp.

A bánh xèo has a working life of about three minutes before the steam from the filling softens the crust from inside. A bông-điên-điển bánh xèo has an even shorter one, because the petals' moisture attacks the crust alongside the steam. Fry one, eat one, fry the next. The blossoms and the crust are both on the same clock, and the clock is short.

Eat through the season — late September to November — and then wait a year. The Sesbania flowers when the flood says so, and the flood does not consult. The crepe without the blossoms is still a crepe, still good, still the Mekong's own. But the crepe with the blossoms is Đồng Tháp in the specific weeks when Đồng Tháp is most itself — the fields draining, the canals filling, the cá linh running, and the trees along every bund turning gold. The crepe is a calendar page, and you eat it when it falls.`,
      tip: `Set the three bông-điên-điển dishes side by side — the stir-fry with garlic beside the kho lạt, the scatter in the lẩu mắm, and now the bánh xèo — and the blossom reveals itself as the Đồng Tháp collection's connective tissue, the way rau rừng is Trảng Bàng's and thính is every gỏi's. It appears in a different form in every dish: raw and wilted in the hotpot, sautéed as a side beside the kho, and set into batter in the crepe. One ingredient, three techniques, three textures — and all of them available for only the same few weeks. The blossom is not a garnish that decorates the collection. It is a season that organises it.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
