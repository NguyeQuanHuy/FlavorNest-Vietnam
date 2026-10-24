'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-bong-the-kho-tieu',
  title: `Cá Bống Thệ Kho Tiêu (Perfume River Gobies Braised Dry with Black Pepper)`,
  subtitle: `Finger-length gobies from where the Perfume River meets the Tam Giang lagoon, braised in a clay pot with caramel, fish sauce and a reckless quantity of cracked pepper until the liquid is gone and each fish is a firm, dark, chewy-dense lacquered thing. Once carried to the Nguyễn kings as tribute; still the dish a Huế mother is judged by.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/ca-bong-the-kho-tieu.jpg',
  intro: `Cá bống thệ is a small goby — finger-length, sand-coloured, big-headed — that lives where the Perfume River slows and mingles with the great Tam Giang–Cầu Hai lagoon east of Huế, the largest brackish lagoon system in Southeast Asia. That address is its flavour: a fish that spends its life between fresh water and salt develops a flesh that is firmer, sweeter and cleaner than either a pure river fish or a sea one, and the bống thệ of this particular estuary was, in the Nguyễn era, a documented tribute food — netted by the lagoon villages, braised by the palace kitchens, and served to the kings as one of the plain dishes the court prized precisely because plainness leaves nowhere to hide. The dish that carried it then is the dish that carries it now, unchanged: kho tiêu, the dry pepper braise, in a clay pot the size of two cupped hands.

Kho tiêu is the central-Vietnamese answer to the question the Mekong answered with coconut water, and the two braises are worth holding side by side because they are the same technique making opposite regional statements. The southern cá cóc kho nước dừa is generous: 400 ml of coconut water, a rounded sweetness, a sauce that ends as a spoonable lacquer. The Huế kho tiêu is austere: no coconut, minimal water, a caramel taken dark, more fish sauce, and pepper — a genuinely startling amount of coarsely cracked black pepper — carrying all the heat and most of the aromatics. The pot is reduced not to a clinging sauce but almost to nothing: the finished fish sit nearly dry, each one glazed, dark mahogany, and dense. Central Vietnam is poor, its weather is violent, and its palate runs salty, peppery and concentrated because its food historically had to season a great deal of rice and survive a lot of humidity. This little pot is that whole history, edible.

The small fish is not a compromise; it is the design. A finger-length goby braised low for over an hour undergoes something a fish steak never can: its thin flesh firms and contracts as salt draws water out faster than it returns, its skin and its fine bones soften and half-dissolve into the glaze, and the whole fish becomes a single chewy-dense, intensely seasoned object eaten entire — head, bones and all, the calcium simply part of the dish. Huế cooks braise it twice on purpose: the pot is cooked, rested (overnight, ideally), and cooked again, and the second reduction is when the fish crosses from cooked to kho — the texture the region actually wants, closer to a soft jerky glazed in caramel than to anything a Western kitchen calls braised fish. The dish keeps for days at room temperature in its pot, and it was always meant to: this is preservation wearing the clothes of cuisine.

At the table it is the salt pole of the Huế meal, never eaten alone: one small fish, a great deal of rice, a bland cool vegetable, a clear canh — the same kho-and-soup axis that structures the southern table, tuned sharper. A Huế saying holds that you can judge a household by its cá kho, because the dish is nothing but judgment: caramel taken to the exact edge of bitter, salt to the exact edge of too much, reduction to the exact edge of dry. There is no sauce to hide in and no garnish to distract. The kings, who could have anything, kept asking for this — and once you have eaten it over rice on a wet Huế evening, the request makes perfect sense.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'cá bống thệ (small gobies), whole, cleaned and scaled — finger-length',
          note: `Gutted through a small cut, heads left on; the head is eaten and its gelatin is part of the glaze. In Europe: fresh or frozen small gobies from a Mediterranean or Asian fishmonger, whole smelt, or fresh sprats — any firm small fish 8-12 cm long, whole. Frozen Vietnamese cá bống appear at larger grocers and are honest. Fillets of anything are categorically wrong: this dish needs whole small fish with skin and bone.`,
        },
        { amount: 1, unit: 'tbsp', name: 'coarse salt (for scrubbing)', note: `Rub, rinse, and pat aggressively dry. A dry fish takes the marinade and the sear; a wet one steams and breaks.` },
        { amount: 2, unit: 'tbsp', name: 'fish sauce (for the marinade)' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        {
          amount: 2,
          unit: 'tsp',
          name: 'coarsely cracked black pepper, plus 1 tsp more to finish',
          note: `The signature, and the quantity is not a typo. Cracked coarse — never ground fine — so the piperine releases in stages across the long braise and the finished fish carry visible pepper armour. This dish should make your lips warm.`,
        },
        { amount: 3, name: 'shallots, thinly sliced' },
        { amount: 2, name: 'cloves garlic, minced' },
      ],
    },
    {
      title: 'The caramel and braise',
      items: [
        {
          amount: 2.5,
          unit: 'tbsp',
          name: 'sugar (for nước màu)',
          note: `Taken darker than feels safe — deep mahogany, one breath of smoke. The controlled bitterness of a dark caramel is what balances a braise this salty; a blond caramel here reads as candy.`,
        },
        { amount: 1, unit: 'tbsp', name: 'water (to stop the caramel)' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce (35-40°N)', note: `On top of the marinade's dose. Kho tiêu runs saltier than any southern kho, because it is engineered to season a mountain of rice, not to be eaten by the spoonful.` },
        { amount: 150, unit: 'ml', name: 'hot water', note: `Only this much — and note what is absent: no coconut water. Its sweetness belongs to the Mekong version; the Huế pot builds depth from caramel, fish sauce and pepper alone, and ends nearly dry.` },
        { amount: 1, unit: 'tbsp', name: 'neutral oil or, better, rendered pork fat', note: `A spoon of pork fat is the old Huế enrichment for a lean fish — it glosses the glaze and carries the pepper.` },
        { amount: 2, name: 'red chilies, left whole' },
        { amount: 2, name: 'scallions, white parts, bruised' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of hot steamed rice', note: `Structural. The fish is a seasoning delivery system; the rice is the meal. One small fish should carry a full bowl.` },
        { amount: 200, unit: 'g', name: 'rau luộc: blanched water spinach or mustard greens, plain' },
        { amount: 1, name: 'bowl of clear canh (any light soup)', note: `The kho-and-canh axis: dark, dry and salty against pale, wet and mild. Neither pole is complete alone.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Scrub, dry, marinate — 30 minutes, with the pepper already on',
      description: `Rub the whole gobies with coarse salt, rinse, and pat each one truly dry. Toss with the fish sauce, sugar, 2 teaspoons of cracked pepper, shallots and garlic, and leave 30 minutes at room temperature, turning once.

The fish should look glossy and feel tacky, with pepper visibly clinging. Small fish take seasoning fast — 30 minutes reaches the bone on a goby, where a fish steak needs the same time just to break the surface.

Do not marinate past an hour: at this salt level, a small fish over-cures, tightens, and turns leathery before the pot ever warms.`,
      tip: `Marinating with the pepper — rather than adding it all at the end — is a staged-release decision. Piperine is fat-soluble and only mildly water-soluble, so the cracked pepper on the fish surface gives up its heat slowly across the whole braise as the pot's fat liberates it, building a deep, integrated warmth in the flesh. The final teaspoon added at the end then supplies the bright, volatile top note that long cooking destroys. Two doses, two jobs: the marinade pepper is the bass line, the finishing pepper is the cymbal. Every kho tiêu in central Vietnam is voiced this way.`,
    },
    {
      title: 'Take the caramel one shade past comfort',
      description: `In the clay pot or a small heavy saucepan, melt the sugar dry over medium heat, swirling, through clear, straw, honey, amber — and at deep mahogany, when the first wisp of smoke rises and the smell tips from sweet toward toast, pull it off and add the tablespoon of water. Stand back; it spits.

The target is darker than the southern kho's caramel — the colour of black coffee in a white cup — because this pot has more salt to answer and no coconut sweetness to lean on. The window between right and ruined is seconds. Watch the pot, not the clock.

If it goes acrid-black, throw it out and start again. Thirty seconds of sugar is cheaper than a ruined pot of tribute fish.`,
      tip: `A darker caramel is chemically a more bitter, less sweet one: the longer sucrose fragments and repolymerizes, the more of it converts from sweet-tasting molecules into bitter, aromatic caramelans. The Huế pot pushes further down that curve than the Mekong pot deliberately, because bitterness is the only counterweight this austere braise has — no coconut, no rock-sugar roundness, just salt, pepper and this. Same technique, one shade darker, and the whole regional signature turns on that shade.`,
    },
    {
      title: 'Lay the fish in, add the little water — and never stir again',
      description: `Add the oil or pork fat and the bruised scallion whites to the caramel, count ten seconds, then lay the marinated fish into the pot in a single tight layer — they should hiss — pouring the marinade juices over. Let them sear untouched for 2 minutes.

Add the extra fish sauce, the 150 ml of hot water and the whole chilies. The liquid should come barely a third of the way up the fish. Bring to a bare simmer.

From this point the pot is never stirred — only tilted and spooned, only shaken gently by its handles. Small braised fish are held together by faith and skin; one pass of a spoon breaks them, and a kho of broken fish is a kho lost. Huế cooks lift the pot and swirl it, and so should you.`,
      tip: `The single tight layer is doing structural work. Packed side by side, the fish support each other like logs in a raft — none can flex, roll or slump as their proteins contract — and every fish keeps skin contact with the caramel below, which is where the glaze forms. A double layer steams its upper storey pale and crushes its lower one. This is why the traditional pot is small and the batch is modest: the pot is sized to the raft, not the appetite, and a big family simply braises two pots.`,
    },
    {
      title: 'Braise low and nearly dry — 45 minutes, then rest, then braise again',
      description: `Partially cover and hold at the barest simmer 40-45 minutes, tilting the pot every 10 minutes to spoon the darkening liquid back over the fish. Watch the sound: active bubbling gives way to a slow, fat blip... blip as the water leaves and only glaze remains.

First stop: when perhaps two tablespoons of thick, dark, glossy liquid remain and the fish are mahogany. Now — if you can — take the pot off, cool it, and rest it hours or overnight.

Second cooking: return it to low heat, add a splash of hot water down the pot's side, and braise 15-20 minutes more, to nearly dry again. Finish with the last teaspoon of cracked pepper and a shake of the pot to coat. The fish should be firm, dense, chewy at the edges, glazed to a dark shine, and lifting whole without breaking.`,
      tip: `The double braise is the step that separates cá kho from fish cooked in sauce, and it works through the rest, not the heat. As the pot cools overnight, the concentrated glaze — now hyperosmotic to the fish — continues drawing water out while its salt, caramel and pepper diffuse inexorably in; the flesh firms, darkens and cures toward the dense, half-preserved texture the region actually means by kho. The second reduction then sets that exchange under a final lacquer. It is why every Vietnamese grandmother says kho is better tomorrow, and why the Huế version — saltier, drier, further along the preservation spectrum — insists on the tomorrow rather than merely permitting it.`,
    },
    {
      title: 'Serve the pot itself — one fish, one bowl of rice, and the canh beside it',
      description: `Bring the clay pot to the table as it is, glaze bubbling faintly at the edges. Serve with hot rice, the plain blanched greens, and a bowl of clear soup.

The grammar: take one fish onto your rice, scrape a half-teaspoon of glaze over the grains — no more; the pot's remaining glaze must last the pot — and eat the fish entire, head and softened bones included, alternating with plain rice, a stem of greens, and a sip of canh. One small fish should see you through a full bowl. That ratio is the dish.

The pot keeps at room temperature for two or three days, re-warmed each meal, the fish darker and denser each time. The last fish, on the third day, eaten by whoever cooked it, over the last of the rice, is — by long Huế consensus — the best one. Tribute food never meant abundance. It meant this.`,
      tip: `Eating the fish whole — bones, head, all — is the final piece of the design, and the braise has made it not merely possible but pleasant: an hour-plus of low moist heat converts the fine bones' collagen matrix and softens their mineral to the point of yielding, exactly as canning does to salmon bones. What remains is texture and a substantial dose of calcium, in a cuisine historically short of dairy. The lagoon villages that netted these gobies for the palace threw nothing back and wasted nothing landed; the dish still eats by their arithmetic. Every part of a small fish, a great deal of rice, and a pot that lasts three days: that is not scarcity remembered. That is scarcity perfected.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
