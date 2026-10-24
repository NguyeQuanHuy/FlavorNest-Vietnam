'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-linh-non-kho-lat',
  title: `Cá Linh Non Kho Lạt (Young Silver Barbs Braised Lightly with Caramel)`,
  subtitle: `Thumbnail-length juvenile silver barbs from the first weeks of the Mekong flood, braised barely — in a caramel so gentle it is called lạt, meaning bland — until the tiny bones soften and the fish are eaten whole, a dozen at a time, over rice, during the few weeks a year they exist. The taste of a flood's opening act, and the most seasonal dish in the Delta.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '45 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/ca-linh-non-kho-lat.jpg',
  intro: `Cá linh is the silver barb — Henicorhynchus siamensis — a small migratory fish that descends the Mekong from Tonlé Sap every monsoon season, following the flood pulse into the Vietnamese Delta by the million. The adult fish, caught in September and October when the migration is at its peak, are the ones that go into the mắm jars — salted and fermented into the paste that built the lẩu mắm in the previous recipe. But in the very first weeks of the flood — late July, early August, when the waters are just rising and the fish are just arriving — the nets pull up something different: cá linh non, the juveniles, thumbnail-length, translucent, soft-boned, so small and so fragile that they do not survive being carried to a distant market. They are cooked where they are caught, within the day, and they are cooked the lightest way the Delta knows: kho lạt.

Kho lạt means braised bland — or more precisely, braised light, because lạt in Vietnamese means not salty, under-seasoned, restrained. It is the opposite of every other kho in this collection: where the Huế gobies were braised dark and dry in a dark caramel and a reckless load of pepper, and where the Vĩnh Long carp was braised in coconut water to a lacquer, cá linh non kho lạt is braised in a caramel taken only to light amber, with fish sauce at half the normal dose and sugar at a quarter, in a small pot with barely enough liquid to submerge the fish, for no more than twenty minutes. The braise is not building flavour from the outside in — it is protecting a flavour that is already there. The juvenile linh has a sweetness, a clean, delicate, river-mineral freshness, that the adult fish has already lost to age and that no amount of seasoning can replace. Cooking it hard would destroy it. Cooking it light preserves it. Kho lạt is not undercooking. It is restrained cooking, and the restraint is the recipe.

The bones are the other reason for the light braise, and they are the reason the dish cannot be made from any other fish at any other size. A juvenile linh, at two to three centimetres, has bones so thin and so poorly mineralised that twenty minutes of gentle heat in a mildly acidic caramel softens them to the point of being undetectable on the tongue. The fish are eaten whole — head, tail, spine, fins, everything — in mouthfuls of three or four at a time, and the mouthful is soft, sweet, faintly caramelised, and structurally uniform. An adult linh, at eight or ten centimetres, has bones that are fully mineralised and would require an hour of braising to soften, by which time the flesh is paste. There is no substitution. The dish exists because the fish is this size, at this age, for these few weeks, and anyone who wants to eat it goes to Đồng Tháp between late July and mid-August and finds a net.

The dish is eaten with rice — always — and with canh chua, the sour soup that is every kho's partner, and very often with a side of bông điên điển xào tỏi (the yellow Sesbania blossoms stir-fried with garlic), because the blossoms flower at exactly the time the juvenile linh arrive, and the Delta, which wastes nothing that arrives at the same time, puts them on the same table. The plate is the season: flood fish, flood flower, flood water in the canals outside the window. It is the most time-bound dish in the Mekong, and its brevity is its identity. In three weeks the juvenile linh will be adult linh, and the dish will be over until next year.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'cá linh non (juvenile silver barbs), 2-3 cm, whole',
          note: `Available only during the first weeks of the Mekong flood season (late July-August) and only in the Delta or at Delta-connected markets. Cleaned by a quick rinse — they are too small to gut individually; the viscera are negligible and dissolve in the braise. NOT available frozen, NOT available outside the season, and NOT substitutable in any honest sense — there is no other fish this small, this soft-boned and this sweet. If you cannot source them: the technique (light caramel, gentle braise, whole-fish eating) works with whitebait, fresh sprats or fresh small anchovies, producing a different and worthwhile dish that should be named honestly as what it is.`,
        },
      ],
    },
    {
      title: 'The light braise',
      items: [
        {
          amount: 1.5,
          unit: 'tbsp',
          name: 'sugar (for a LIGHT caramel)',
          note: `Taken only to light amber — the colour of pale honey, nothing darker. This is not the dark mahogany of the Huế kho or the near-black of the Vũ Đại kho. The caramel here is a glaze, not a backbone; its job is to coat the fish in a faint sweetness that deepens their own, not to impose a bitter-sweet profile of its own. If the caramel smells of toast, you have gone too far for this dish.`,
        },
        { amount: 1, unit: 'tbsp', name: 'water (to stop the caramel)' },
        {
          amount: 1.5,
          unit: 'tbsp',
          name: 'fish sauce',
          note: `Half the dose of a standard kho — deliberately under-seasoned by normal standards, because the fish is delicate and the salt must support its sweetness, not dominate it. Taste the broth after 10 minutes; if the fish's own flavour is not the first thing you taste, you have added too much.`,
        },
        { amount: 1, unit: 'tsp', name: 'sugar (additional, in the braise)' },
        { amount: 100, unit: 'ml', name: 'water or young coconut water', note: `Barely enough to submerge the fish halfway. Coconut water adds a faint tropical sweetness that reinforces the fish's own; plain water is more traditional and cleaner.` },
        { amount: 3, name: 'shallots, sliced' },
        { amount: 2, name: 'cloves garlic, sliced' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 1, name: 'red chili, sliced' },
        { amount: 2, name: 'scallions, cut in 3 cm lengths' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 1, name: 'bowl of canh chua (sour soup) — the mandatory kho partner' },
        {
          amount: 100,
          unit: 'g',
          name: 'bông điên điển xào tỏi (Sesbania blossoms stir-fried with garlic), optional',
          note: `The seasonal side dish that flowers when the linh arrive — same flood, same table. Wilt the blossoms in a hot pan with garlic and a splash of fish sauce for 60 seconds. They are there for colour, for bitterness and for the calendar.`,
        },
      ],
    },
  ],
  steps: [
    {
      title: 'Rinse the fish gently — they are too small for anything else',
      description: `Put the juvenile linh in a bowl of cool water and swirl gently with your hand — the water clouds slightly as loose scales and surface slime rinse away. Drain carefully through a fine sieve or a colander lined with cloth — the fish are so small they fall through standard colander holes.

Do not gut them. Do not descale them individually. Do not trim anything. At 2-3 cm the visceral mass is a speck and it dissolves entirely in the braise, contributing a faint bitterness that the Delta palate expects and that factory-cleaned fish cannot provide.

Drain well. Wet fish in a caramel spatters and steams, and steam means the fish boil rather than braise, which means they disintegrate before the bones soften. Dry them gently on paper towels — gently, because the flesh is so soft a firm press breaks them.`,
      tip: `The decision not to gut the fish is not laziness — it is the cooking tradition's response to a practical impossibility and a flavour preference at once. At 2-3 cm, gutting by hand would take a minute per fish and destroy the fish in the process; a 500 g batch might contain 200 individual fish. And the gut's trace of bile and liver — bitter, mineral, faintly iron-rich — is part of the kho's flavour profile in the Delta's understanding, the same way the snail's whole body (minus the gut sac) is part of the steamed-snail profile. Village cooking does not waste what is edible, and at this scale everything is edible.`,
    },
    {
      title: 'Make the lightest caramel in the collection — pale honey, and stop',
      description: `In a small clay pot or heavy pan, melt the 1.5 tablespoons of sugar dry over medium heat, swirling. Watch it closely: it will go clear, then faintly straw, then a pale golden honey colour — and at that exact point, pull it off the heat and add the tablespoon of water. It will spit briefly.

Do not take it further. Compare this to the coffee-dark caramel of the Vũ Đại kho or the mahogany of the Huế kho tiêu: this caramel is barely tinted, barely bitter, barely asserting itself. Its job is to glaze and sweeten, not to anchor. The bitterness that balances a heavy kho would obliterate a fish this delicate.

Add the oil, fry the shallots and garlic 30 seconds until fragrant.`,
      tip: `The caramel gradient across this collection's kho file is now complete, and it is worth seeing as a single system: the lightest (this dish — pale amber, for the most delicate fish, the shortest braise), the medium (the Vĩnh Long coconut kho — medium amber, for a firm river carp, a 40-minute braise), the dark (the Huế gobies — dark amber, for a salty-peppery braise that seasons a week of rice), and the darkest (the Vũ Đại — near-black, for a 14-hour fire). Each caramel is calibrated to its fish and its time: lighter for less time and more delicacy, darker for more time and more concentration. The sugar is the same; the clock is different; and the clock dictates the colour. This is not four recipes — it is one principle, applied four times, and understanding the principle means you can set any caramel for any kho by asking a single question: how long will this pot be on the fire?`,
    },
    {
      title: 'Braise gently — 18-20 minutes, and do not stir',
      description: `Lay the drained fish in the caramel in a single layer — do not pile. Pour the fish sauce, the additional sugar and the water (or coconut water) over. Add the sliced chili and half the pepper. The liquid should come about halfway up the fish, no more.

Bring to the barest simmer, cover partially, and braise 18-20 minutes. Do not stir — the fish are so fragile a spoon dragged through them reduces the pot to a purée. Tilt the pot every 5 minutes and spoon the liquid back over the exposed tops.

At 18 minutes: the liquid has reduced to perhaps 3-4 tablespoons of glossy, pale-golden glaze. The fish are intact but soft — a finger pressed on one meets no resistance. And the test that matters: bite a fish. The spine should be imperceptible. If you feel a prickle, give the pot 3 more minutes.

Off the heat: scatter the scallions and the remaining pepper. Shake the pot gently once — the scallion wilts in the residual heat.`,
      tip: `The bone-softening here is the same acid-and-heat dissolution of hydroxyapatite this collection documented in the Huế gobies, the Chiêm Hóa mắm and the Vũ Đại carp — but it runs to completion in 20 minutes instead of hours because the bones are those of a 2-3 cm juvenile, which means they are thinner than a human hair and contain a fraction of the mineral of an adult bone. There is almost nothing to dissolve. The caramel's mild acidity and the heat do their work in minutes on a substrate this thin, which is the precise reason this dish cannot be made from an adult fish of any species — the adult's bone is mineralised past the point that a 20-minute light braise can reach. The recipe's seasonality is, in the end, a bone-thickness problem, and the bone-thickness is a function of the fish's age, which is a function of the flood's timing. The calendar wrote the recipe.`,
    },
    {
      title: 'Eat whole, by the mouthful — with rice, canh chua, and the blossoms if the season gave them',
      description: `Serve the pot directly — the fish in their pale glaze, scallion wilted across them. Set the rice, the canh chua and the bông điên điển (if you have them) alongside.

Eat the fish in mouthfuls of three or four at a time, scooped onto rice with a spoon. Do not pick them up individually — they are too small and too soft for chopsticks to handle without destroying them, and the spoon-onto-rice method is how every Delta household eats them. Each mouthful is a soft, sweet, faintly caramelised, bone-free mass of tiny fish, glazed in a whisper of caramel, carried on a bed of rice. Follow with a spoonful of canh chua — the sour resets the sweet — and a bite of the yellow blossoms if the pot on the table next to you has them.

The dish lasts the season and the season lasts three weeks. There is no preserved version. There is no frozen version. The fish are caught, cooked and eaten on the same day, in the same province, in the same weeks of the same months, and when those weeks end the fish are adults and the dish is over. Lẩu mắm is what the Delta does with last year's flood fish. This kho lạt is what the Delta does with this year's. Between them, the cá linh feeds the province twice: once as a juvenile, eaten fresh and whole in the lightest kho the kitchen knows; and once as an adult, fermented for months, bloomed in aromatics, and poured as the foundation of the Delta's most extravagant pot. One fish, two ages, two dishes, one flood. That is the Mekong's annual plan, and every recipe in the Đồng Tháp file follows from it.`,
      tip: `This is the collection's most seasonal dish and its most ephemeral, and it closes the Delta's flood-cycle trilogy: the mắm cá linh (adults, fermented for months, used as a year-round seasoning), the lẩu mắm (the mắm dissolved into a communal hotpot, eaten when the pot is set), and now the kho lạt (the juveniles, braised fresh and light, eaten the day they are caught). Three dishes from one fish, three time scales — a year, an evening, a day — and three intensities — deep and fermented, medium and bloomed, light and barely there. The fish taught the Delta its own cooking spectrum, from the heaviest preservation to the gentlest heat, and the spectrum is keyed to the animal's age because the animal's age dictates what the kitchen can do with it. Youth means fragility means lightness means kho lạt. Age means resilience means fermentation means mắm. The flood decides which you get, and when.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
