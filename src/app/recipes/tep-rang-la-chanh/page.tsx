'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'tep-rang-la-chanh',
  title: `Tép Rang Lá Chanh (Crispy Fried Paddy Shrimp with Kaffir Lime Leaf)`,
  subtitle: `Tiny freshwater shrimp — thumbnail-sized, translucent, caught by the scoopful from the paddy's irrigation canals — tossed in a hot wok with sliced kaffir lime leaf, garlic, chili and fish sauce until every shrimp is golden-crisp and every lime leaf is a shattering, aromatic, citrus-green shard. The Monday-night rice-topper that turns a bowl of plain rice into a meal.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '15 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/tep-rang-la-chanh.jpg',
  intro: `Tép — the tiny freshwater shrimp, the baby shrimp, the paddy shrimp — is the humblest protein in the Vietnamese pantry and the most abundant. It is not the tiger prawn, not the white shrimp, not the langoustine. It is the thumbnail-sized, translucent, almost weightless crustacean that swarms in every canal, every irrigation ditch, every flooded paddy in Vietnam from the Red River to the Mekong, and that is caught not with a rod or a trap but with a SCOOP — a fine-mesh net dragged through the shallow water, pulling up tép by the hundred in a single sweep.

The tép is too small to peel (its shell is paper-thin and edible), too small to devein (its vein is invisible), and too small to eat one by one (a single tép is one bite of nothing). It is eaten by the spoonful — dozens at a time — and its cooking must therefore be a method that makes dozens of tiny shrimp into a unified, scoopable, rice-toppable mass. That method is rang — dry-frying, stir-frying in a hot wok with minimal oil until every shrimp is dehydrated, crispy, golden and lightly caramelised — and the result is a crunchy, salty, savoury, chitin-snapping topping that turns a bowl of plain white rice into a complete meal for the cost of a net-scoop and ten minutes at the wok.

The kaffir lime leaf — lá chanh — is the aromatic that elevates the rang from functional to fragrant. The leaves are sliced into hair-thin ribbons (chiffonade), thrown into the hot wok in the last 30 seconds, and they crisp instantly — each ribbon becoming a tiny, shattering, intensely citrus-scented shard that distributes through the shrimp mass and delivers a hit of citronellal and limonene with every spoonful. The lime leaf does for the tép what the rau răm does for every gỏi: it is the fixed aromatic, the herb that marks the dish, and its absence turns the tép rang from a specific dish into a generic fried shrimp.

Tép rang lá chanh is Monday food — the dish a mother makes when the market is far, the pantry is thin, and the canal behind the house is full of shrimp. It takes 15 minutes. It costs almost nothing. It feeds four over rice. And it has done so, every Monday, in every province, for as long as the canals have held tép and the gardens have grown lime trees.`,
  ingredientSections: [
    {
      title: 'The shrimp',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'tép (tiny freshwater shrimp), washed, drained very dry',
          note: `Shell-on — the shells are paper-thin and crisp to an edible, chitin-crunchy coating during the rang. Do not peel. Drain VERY dry — wet shrimp steam in the wok instead of crisping, and steamed tép is soft tép, which is not the dish. Spread on a cloth and blot for 5 minutes. In Europe: the smallest raw shrimp available (pink shrimp, bay shrimp, or frozen small shrimp, thawed and dried thoroughly).`,
        },
      ],
    },
    {
      title: 'The aromatics',
      items: [
        {
          amount: 10,
          name: 'kaffir lime leaves (lá chanh), spines removed, sliced into hair-thin chiffonade',
          note: `The chiffonade is essential — whole leaves do not distribute through the shrimp mass, and they burn rather than crisp in the wok's heat. The hair-thin ribbons distribute evenly, crisp in 10 seconds, and deliver lime-leaf fragrance in every spoonful.`,
        },
        { amount: 4, name: 'cloves garlic, sliced thin' },
        { amount: 2, name: 'red chilies, sliced thin (or 1 tsp chili flakes)' },
      ],
    },
    {
      title: 'The seasoning',
      items: [
        { amount: 1.5, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar', note: `The sugar caramelises on the shrimp's surface — the same dual-browning (caramel + Maillard) the nem nướng's sugar achieved, here on a microscopic scale across hundreds of tiny shrimp.` },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 3, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
  ],
  steps: [
    {
      title: 'Dry the shrimp completely — this IS the technique',
      description: `Wash the tép in 2-3 changes of water. Drain in a fine-mesh sieve for 5 minutes. Spread on a clean cloth and blot — press gently, absorbing every surface drop. The shrimp should feel DRY to the touch, not damp.

The drying is not a suggestion — it is the step that determines whether the dish succeeds or fails. Wet shrimp in a hot wok release their surface water as steam, and the steam prevents the wok's temperature from exceeding 100°C at the shrimp's surface — which means no Maillard browning, no caramelisation, no crispness. Only steam. And steamed tép is a soft, grey, flavourless pile that no amount of lime leaf can rescue. DRY shrimp in a hot wok contact the oil's 180°C+ surface directly, and the Maillard reaction begins in seconds — golden, crisp, caramelised, aromatic. The difference between wet and dry is the difference between failure and tép rang.`,
      tip: `The surface-moisture problem is the same problem every stir-fry in every wok-based cuisine faces, and the solution is universal: DRY the ingredient before it enters the oil. The physics: water evaporating from a food's surface absorbs 2,260 joules per gram (the latent heat of vaporisation), and that energy is subtracted from the wok's heat, dropping the surface temperature from 180°C+ to 100°C until all the water is gone. Only AFTER the surface is dry can the temperature climb past 100°C and the Maillard reaction (which requires 140°C+) begin. Drying the shrimp before the wok eliminates the evaporation step and allows Maillard browning to start immediately — saving 2-3 minutes of wasted steam time and producing a crispier product because the total time at Maillard temperature is longer.`,
    },
    {
      title: 'Rang in a screaming wok — 4 minutes, no stirring for the first 90 seconds',
      description: `Heat the oil in a wok over the highest heat until the oil shimmers and a wisp of smoke rises. Add the garlic — 15 seconds, golden. Add the dried shrimp — spread in a single layer across the wok's surface. DO NOT STIR for 90 seconds. Let the shrimp's underside crisp — the chitin shell meets the oil's 180°C surface and undergoes the glass transition (the same chitin vitrification the bọ cạp chiên documented), turning from flexible to crispy in under a minute.

At 90 seconds: toss. The shrimp flip, their golden undersides now visible. Add the fish sauce, sugar and pepper — the fish sauce sizzles and evaporates almost instantly (the wok is very hot), depositing its salt and its amino acids on the shrimp's surface. The sugar melts and caramelises — a thin toffee glaze on each shrimp.

Toss every 15 seconds for 2 more minutes. The shrimp are done when: every shrimp is uniformly golden-orange (the astaxanthin's red + the Maillard's brown), crispy when bitten (the shell shatters, not bends), and the wok is DRY — no liquid remaining.

Add the lime-leaf chiffonade and the chili in the last 30 seconds. Toss twice — the lime leaf crisps on contact with the hot oil (10 seconds), releasing its citronellal into the wok in a burst of lime-citrus fragrance. Off the heat. Toss once more.`,
      tip: `The 90-second no-stir window is the Maillard-development period: the shrimp's underside, in continuous contact with the 180°C oil, develops its golden crust undisturbed. Stirring during this period lifts the shrimp off the hot surface, replaces it with another shrimp that starts the browning clock from zero, and the result is a wok full of half-browned, half-raw shrimp rather than a wok full of uniformly golden ones. The no-stir is patience, and the patience is crispness.`,
    },
    {
      title: 'Spoon over rice — the Monday-night meal, the paddy on a bowl',
      description: `Transfer the tép rang to a plate — mound it high, the golden shrimp studded with dark-green lime-leaf shards and red chili slices, the whole pile glistening with the last traces of caramelised fish-sauce glaze.

Eat: spoon a generous portion of tép rang over a bowl of hot steamed rice. The shrimp settle into the rice, their residual oil and caramelised glaze soaking into the grains. Each spoonful of rice-and-shrimp carries: the shrimp's chitin-crunch (snapping, individual, hundreds of micro-crunches per mouthful), the shrimp's caramelised sweetness (sugar + Maillard, on every surface), the fish sauce's salt, and — arriving through the crunch in bright, citrus-green bursts — the lime-leaf shards, each one a tiny explosion of citronellal that the nose registers before the tongue and that makes the spoonful smell of a lime grove in the rain.

That is the meal. Rice. Tép rang. A saucer of pickled vegetables if the pantry holds them. A bowl of canh if there is time. And the tép rang does the heavy lifting — its concentrated crunch-and-salt seasoning the rice with the efficiency of a condiment and the satisfaction of a protein. It is the most calories-per-minute, most flavour-per-đồng, most meal-per-effort dish in the collection — 15 minutes from wok to table, a net-scoop's worth of free paddy shrimp turned into the topping that makes a bowl of rice worth eating.`,
      tip: `Tép rang lá chanh is the collection's most EVERYDAY dish — the one that appears on the most tables, the most often, with the least ceremony. Every other dish in the collection is, to some degree, an occasion: a provincial speciality, a festival food, a market-day treat, a weekend project. The tép rang is none of these. It is Monday. It is Tuesday. It is every day the canal has shrimp and the tree has lime leaves and the rice cooker is on. And its presence in the collection — alongside the thắng cố's 4-hour cauldron and the trâu gác bếp's 7-day smoke — is the reminder that a cuisine is not measured by its peaks but by its base, and the base is the dish the mother makes without thinking, without planning, without ceremony, when the family needs to eat and the paddy provides.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
