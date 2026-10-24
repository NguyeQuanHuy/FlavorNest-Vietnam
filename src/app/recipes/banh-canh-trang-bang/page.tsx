'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-canh-trang-bang',
  title: `Bánh Canh Trảng Bàng (Trảng Bàng Pork-Knuckle Thick-Noodle Soup)`,
  subtitle: `Hand-cut rice-and-tapioca noodles in a clear pork-bone broth, topped with a split pig's trotter braised to trembling softness, sliced lean pork, pork skin ribbons and a tangle of wild herbs pulled from the roadside hedges of Highway 22. The dish that put a gas-station town on every Vietnamese food map.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '3 hr',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/banh-canh-trang-bang.jpg',
  intro: `Trảng Bàng is a small town on Highway 22, forty-five minutes northwest of Saigon on the road to the Cambodian border, and its economy runs on two things: rubber plantations and a noodle soup. Every bus, every truck, every family car heading to Tây Ninh or to the Black Virgin Mountain pulls over at the same stretch of road, and the stalls along it serve one dish, in one format, with one set of accompaniments that have not changed in living memory. Bánh canh Trảng Bàng is what a highway rest stop looks like when a culture that takes soup seriously builds it.

The noodle is the anchor and it is made on-site, in the back of the stall, from a dough of rice flour and tapioca starch kneaded with warm water, rolled thick and cut by hand into fat, irregular batons — the same rice-tapioca blend this collection has met in Nam Phổ and Phú Yên, but cut wider and chewier, with a slippery-dense bite that sits between udon and gnocchi. The stalls roll and cut continuously through the morning because the noodle is at its best within the hour: fresh-cut bánh canh has a supple, faintly elastic chew that dried or even day-old noodles do not possess, and the town's reputation was built on that freshness, maintained across forty simultaneous bowls at six in the morning, six days a week.

The broth is a clean pork-bone stock — long-simmered, skimmed obsessively, seasoned with fish sauce and a restrained sweetness — and it is deliberately plain for the same reason the Đức Thọ broth is plain and the bún bò Đức Thọ broth is plain: the noodle and the toppings are the argument, and a loud broth would talk over them. What distinguishes the Trảng Bàng bowl from every other bánh canh in Vietnam is the topping architecture. The centrepiece is a giò heo — a whole pig's trotter, split lengthwise, braised until the skin is trembling-soft and the connective tissue has dissolved to gelatin while the meat still clings to the bone. Beside it: sliced lean pork poached in the broth, and bì — ribbons of boiled pork skin tossed in toasted rice powder, the Saigon-region garnish that adds a faintly nutty, chewy dimension no other protein can supply.

And then — the part that makes the dish genuinely Trảng Bàng and not merely a good bánh canh — the rau rừng arrives. A basket the size of a small child, overflowing with wild and semi-wild herbs gathered from the roadsides, hedgerows and rubber-plantation edges of Highway 22: fish mint, Vietnamese balm, wild pepper leaf, young cashew shoots, bằng lăng leaves, đinh lăng, and whatever else the herb gatherers found that morning in a diversity that can run past twenty species on a generous day. No two baskets are identical. The herbs are not garnish; they are a second meal inside the first — torn by the handful into the bowl, or wrapped around a piece of trotter and dipped in the broth, or eaten plain between spoonfuls. They are what make a roadside bowl taste of the roadside, specifically this roadside, and they are the reason the dish has resisted every attempt to franchise it to air-conditioned Saigon shophouses. The herbs do not travel.

The eating is fast, communal, and unapologetic. You squat or sit on a low plastic stool, the bowl arrives steaming, the herb basket is shared across the table, and you eat with the bus idling outside. The trotter is pulled apart with chopsticks and fingers. The broth is drunk from the bowl. The herbs go in by the fistful. And the bill, for one of the best bowls of soup in the south, is the price of a parking meter. Trảng Bàng has never pretended to be anything other than a stop on the way to somewhere else, and it has never needed to.`,
  ingredientSections: [
    {
      title: 'The noodles (bánh canh tươi)',
      items: [
        {
          amount: 250,
          unit: 'g',
          name: 'rice flour (bột gạo)',
          note: `Plain rice flour, not glutinous.`,
        },
        {
          amount: 150,
          unit: 'g',
          name: 'tapioca starch (bột năng)',
          note: `The 40% tapioca ratio is higher than most bánh canh — it gives the Trảng Bàng noodle its distinctive slippery density and translucent chew. Reduce to 30% for a softer, more Phú Yên-style texture.`,
        },
        { amount: 250, unit: 'ml', name: 'boiling water, approximately', note: `Boiling, not warm — the scald pre-gelatinizes part of the starch and is what makes the dough cohesive and rollable. Add gradually; the final dough is firm and smooth, not sticky.` },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The broth and the trotter',
      items: [
        {
          amount: 1.5,
          unit: 'kg',
          name: 'pork bones (neck, spine, knuckle)',
          note: `Blanched 5 minutes and rinsed, pot scrubbed, bones restarted in fresh water — the mandatory clarity step.`,
        },
        {
          amount: 2,
          name: 'pig's trotters (giò heo), split lengthwise by the butcher',
          note: `Split, not whole — the marrow and the interior surfaces must face the broth. Ask any Asian or halal butcher; they have the saw.`,
        },
        { amount: 3, unit: 'L', name: 'water' },
        { amount: 1, name: 'yellow onion, halved and charred' },
        { amount: 30, unit: 'g', name: 'ginger, charred and bruised' },
        { amount: 4, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1.5, unit: 'tbsp', name: 'rock sugar' },
        { amount: 1.5, unit: 'tsp', name: 'salt' },
        { amount: 300, unit: 'g', name: 'pork loin or leg, in one piece', note: `Poached whole in the broth and sliced thin. Pull it at 70 minutes; let the trotters stay.` },
      ],
    },
    {
      title: 'The bì (pork skin with toasted rice powder)',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'pork skin (bì heo), in one piece',
          note: `Boiled 25-30 minutes until fully soft, chilled in iced water, then sliced into fine, hair-thin ribbons. The cold firms the collagen enough to shave it; warm skin shreds to mush.`,
        },
        { amount: 2, unit: 'tbsp', name: 'thính (roasted rice powder)', note: `Tossed through the cold ribbons — it dries them, keeps them separate, and lays a faint toasted nuttiness under the chew. The same thính that dresses every gỏi in the country, here doing logistics as much as flavour.` },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The rau rừng platter',
      items: [
        {
          amount: 1,
          name: 'enormous basket of mixed wild herbs — the more kinds, the better',
          note: `The soul of the bowl and the thing that does not travel. In Trảng Bàng: diếp cá (fish mint), húng cây/húng chanh, lá lốt (wild betel leaf), rau răm, kinh giới, ngò gai, húng quế, lá cách, lá đinh lăng, đọt non cashew, lá bằng lăng — twenty species on a generous day, each with its own register of bitterness, anise, pepper, citrus or astringency. In Europe: build the spirit from what you can source — perilla, Thai basil, Vietnamese coriander, culantro, betel leaves from the Asian grocer, watercress, young rocket, mint — and aim for volume and variety, not a specific list. The basket IS the dish.`,
        },
        { amount: 200, unit: 'g', name: 'bean sprouts, raw' },
        { amount: 1, name: 'banana blossom (bắp chuối), shredded, held in lime water', note: `The southern noodle-soup standard — adds crunch and a faint astringency.` },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'scallions, sliced' },
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 4, name: 'bird\'s-eye chilies, sliced, in a saucer of fish sauce', note: `The table condiment: chili-fish-sauce for dipping the trotter directly, separate from the broth. The two-system rule, as always.` },
        { amount: 1, name: 'saucer of tương đen (dark soybean sauce), optional', note: `Some stalls offer it for dipping the lean pork — a Saigon-orbit habit.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the broth and braise the trotters — 2.5 hours, one pot',
      description: `Blanch all bones and both split trotters in boiling water 5 minutes. Drain, rinse every piece under cold water, scrub the pot, and start again: bones, trotters, 3 L fresh cold water, charred onion and ginger. Bring to a bare simmer and hold it there — a bubble breaking every second, never a boil.

At 30 minutes, lower in the whole pork loin. Skim every 15-20 minutes.

At the 70-minute mark, pull the loin — a skewer should pass through with moderate pressure. Chill it in iced water for clean slicing later.

Leave the trotters in for the full 2.5 hours. Season with fish sauce, rock sugar and salt in the last 30 minutes. The trotters are done when the skin is trembling-soft and translucent, the meat is falling from the bone but has not yet fallen, and a chopstick pressed into the thickest part meets no resistance. If the skin is still tough, give it another 30 minutes; collagen conversion has a threshold, not a gradient, and below it nothing happens.`,
      tip: `The trotter is where this broth gets its body and why a clean pork stock here feels richer than the ingredient list explains. A pig's trotter is roughly 30% collagen by dry weight — far more than any other cut — and over 2.5 hours at simmer temperature that collagen hydrolyzes into gelatin continuously, filling the broth with a lip-coating, spoon-clinging richness that no amount of lean bone can match. This is why the trotter stays the full time while the lean pork leaves early: the loin gives up everything it has in 70 minutes and then only dries; the trotter is still giving at two and a half hours. Know what each cut is there for, and pull each when its job is done — the oldest rule of the stockpot, and the one most home cooks merge into a single timer.`,
    },
    {
      title: 'Make the noodles fresh — and cook them within the hour',
      description: `Mix the rice flour, tapioca starch and salt. Pour in the boiling water gradually, stirring hard with chopsticks. Add the oil, and once it is cool enough, knead 5-6 minutes into a firm, smooth, slightly translucent dough.

Roll on a starch-dusted surface to about 5 mm thick — a fat noodle is the format — and cut by hand into irregular batons about 1 cm wide and 8 cm long. Dust with starch and shake apart. Do not wash, do not rinse.

Drop them into the simmering broth (or a separate pot of boiling water) 4-5 minutes before serving: they are done when they float, turn translucent, and feel slippery-chewy in the mouth.

Use within the hour. Fresh bánh canh has a supple elasticity that dried never achieves and that even refrigerating overnight destroys — the starch retrogrades, the chew turns gummy, and the noodle that made Trảng Bàng famous becomes an ordinary one. The stalls cut continuously for this reason, and if you can, cut in batches through the meal.`,
      tip: `The 40% tapioca ratio is the Trảng Bàng signature and it sits at the dense, slippery end of the bánh canh spectrum. A higher rice-to-tapioca ratio (the Phú Yên style) gives a softer, more absorbent noodle that drinks the broth; a higher tapioca ratio gives one that resists the broth — slippery, translucent, almost springy, requiring the tooth to work. The town picked the chewier formula because the bowl is built to be eaten fast and the noodle must hold its texture through five minutes of sitting in hot broth while you pull a trotter apart with one hand. Texture is a use-case decision, not a quality dial.`,
    },
    {
      title: 'Prepare the bì — chill, shave, toss with thính',
      description: `Boil the pork skin in lightly salted water 25-30 minutes until a fingernail pressed into it leaves a deep, easy dent and the whole piece bends without resistance. Plunge straight into iced water for 10 minutes.

Shave into the finest ribbons your knife allows — they should be translucent, flexible, almost hair-thin. Toss with the thính, sugar and salt until every ribbon wears a fine matte coat and the ribbons fall apart separately.

This is the Saigon-orbit garnish that no northern bowl carries: a chew within the chew, nutty from the thính, faintly sticky from the collagen, adding a textural dimension to the bowl that neither the lean pork nor the trotter provides. It is also, incidentally, the cheapest part of the pig, turned by knife skill and rice powder into something a diner requests by name.`,
      tip: `Bì is collagen translated twice. The first translation is the boil, which converts the tough, cross-linked collagen of raw skin into soft, pliable gelatin gel — the dent test reads exactly this threshold. The second is the mouth: chewed and warmed, the thin ribbons of set gelatin re-melt slightly on the tongue, giving a slick, rich, lip-coating sensation that has nothing to do with fat. It is concentrated mouthfeel from a zero-fat tissue, and it is the reason bì appears on cơm tấm, in gỏi cuốn, and in this bowl — always as a supporting actor, never the lead, adding the sensation that makes people say the broth feels rich without being able to say why.`,
    },
    {
      title: 'Assemble the bowl — trotter at the crown, herbs by the fistful',
      description: `Divide the noodles between four deep bowls. Lay thin slices of the poached pork and a mound of bì on one side. Set a half-trotter at the crown of each bowl, skin-side up, propped against the rim so it is the first thing the eye lands on. Scatter scallion, fried shallots and black pepper.

Ladle the broth at a rolling boil — it must steam violently on contact, enough to wilt the scallion and warm the bì. Serve immediately with the herb basket, the bean sprouts and banana blossom on the side, and the chili-fish-sauce saucer for the trotter.

The herbs go in by the handful, torn, not placed — fish mint first if you have it (its metallic, cooling bite is the signature opener), then everything else in whatever order curiosity suggests. The correct ratio is two parts herb to one part soup; anything less polite is closer to correct. In Trảng Bàng a first-timer reaching timidly for three leaves is handed the basket and instructed to start over.`,
      tip: `The herb basket is Trảng Bàng's genuine competitive advantage and the reason the dish resists export. Twenty species of roadside and hedgerow herb, gathered that morning, each carrying a different bitter, anise, pepper or astringent register, means the bowl changes with every handful and is never the same twice in the same sitting. A Saigon franchise can replicate the noodle, the broth, the trotter — it cannot replicate a hedge on Highway 22, and the stall owners know it. The dish teaches, pleasantly, that some food is bound to a specific few kilometres of earth, and that eating it means going there. This is not a limitation. It is the recipe's final ingredient, and it is called geography.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
