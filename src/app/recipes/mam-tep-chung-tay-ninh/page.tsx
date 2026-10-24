'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'mam-tep-chung-tay-ninh',
  title: `Mắm Tép Chưng (Steamed Fermented Freshwater Shrimp with Pork and Egg)`,
  subtitle: `Tiny river shrimp fermented for months in the Vàm Cỏ Đông basin, mashed with minced pork and egg, studded with black pepper and steamed into a firm, ruddy, intensely savoury cake that is sliced, not spooned, and eaten in slivers over rice with raw vegetables. The salt pole of the Tây Ninh table, and the dish that makes a bowl of plain rice into a complete meal.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '50 min',
  rating: 4.7,
  baseServings: 6,
  heroImage: '/images/recipes/mam-tep-chung-tay-ninh.jpg',
  intro: `The Vàm Cỏ Đông river runs the eastern border of Tây Ninh, slow and warm, through country that is half rice paddy and half rubber plantation, and in its shallows and in the flooded fields beside it live tép — tiny freshwater shrimp, barely thumbnail-length, caught by the netful with fine mesh and sold by the basin at every market along the river. Fresh, they go into soups and stir-fries. But the tép that built a regional pantry are the ones that went into jars: salted, fermented, broken down over weeks and months into a purple-pink, violently pungent paste that is Tây Ninh's answer to the shrimp pastes of every river-and-rice civilization from the Mekong to the Chao Phraya. Mắm tép is the fermented ingredient; mắm tép chưng is the dish it becomes once the kitchen decides to civilize it.

Chưng is the steaming, and what it does to raw mắm is the entire point: the pungent, nose-clearing, actively challenging paste is combined with minced pork, beaten egg, black pepper and a little sugar, mixed into a thick batter, and steamed gently for thirty to forty minutes until it sets into a firm, sliceable, ruddy-brown cake — closer to a terrine or a savoury flan than to anything the word mắm usually conjures. The heat does two things the raw paste cannot do for itself. First, it drives off the most volatile and aggressive amines — the trimethylamine and short-chain fatty acids that make raw mắm challenging to the uninitiated — leaving the glutamate, the nucleotides and the deeper savoury compounds that were always there underneath. Second, the egg and pork proteins set into a matrix around the fermented shrimp, capturing its flavour in a structure you can slice with a knife and eat in measured bites, rather than scooping a tablespoon of paste and bracing. Chưng is domestication: the same wild ferment, brought indoors and given manners.

The dish lives at the salt-umami pole of the Tây Ninh meal, exactly where kho lives on a Mekong table and where cá bống kho tiêu lives in Huế — the dark, concentrated, highly seasoned thing that exists to push a great deal of plain rice through a long day. A sliver of mắm tép chưng across a bowl of hot rice, a mouthful of raw cucumber or sliced star fruit to reset, another sliver, more rice: that rhythm is the working lunch of every farming and plantation household along the Vàm Cỏ Đông, and the cake, once steamed and cooled, keeps for days in the fridge and improves for the first two of them. It was preservation food before it was a recipe — shrimp caught in a glut, fermented into a shelf-stable paste, steamed into a portable, sliceable cake that travels to the field in a tiffin and feeds a worker without a kitchen. The flavour is its own reward; the engineering is its origin.

A note for the kitchen that has never opened a jar of mắm tép: the raw paste smells strong and does not pretend otherwise. This is correct, and it is the same confidence this collection has asked for with mắm sống in Vĩnh Long, with mắm nêm in Trảng Bàng, and with mắm cá ruộng in Tuyên Quang. Trust the steaming. The cake that comes out of the pot is mellow, firm, savoury and deeply pleasant, and if you serve it without naming its ingredient, most people will eat the whole thing before asking what it was. Name it first and you lose half the table. Name it after and you gain converts. This is the traditional introduction strategy in Tây Ninh and it has a perfect record.`,
  ingredientSections: [
    {
      title: 'The chưng',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'mắm tép (fermented freshwater shrimp paste)',
          note: `Sold in jars at every Vietnamese grocer — a thick, purple-pink paste with a powerful fermented aroma. Do not confuse with mắm ruốc Huế (a finer, saltier paste) or with Thai kapi (drier, harder). The Tây Ninh/southern mắm tép is typically looser and sweeter than the northern version. Taste it from the jar: it should be very salty, deeply savoury, and pungent but not rotten.`,
        },
        {
          amount: 250,
          unit: 'g',
          name: 'minced pork (roughly 20% fat)',
          note: `The moderator. Its fat and protein dilute the salt concentration, contribute Maillard flavour during the steam, and set into the matrix that makes the finished cake sliceable. Lean pork alone gives a dry, crumbly result; a little fat keeps it moist through the long steam.`,
        },
        {
          amount: 3,
          name: 'eggs',
          note: `The structural binder. Beaten into the mixture, they set at around 68°C into the gel that holds the cake together — the same role egg plays in a French terrine or a Vietnamese chả. Three eggs for this batch gives a firm, sliceable set; two gives a softer, spoonable version some households prefer.`,
        },
        { amount: 3, name: 'shallots, finely minced' },
        { amount: 3, name: 'cloves garlic, finely minced' },
        {
          amount: 1.5,
          unit: 'tsp',
          name: 'coarsely ground black pepper',
          note: `Generous, and visible in the finished cake as dark specks — the pepper's resinous warmth is the specific aromatic partner for fermented shrimp in every cuisine that pairs them.`,
        },
        { amount: 1, unit: 'tbsp', name: 'sugar', note: `The southern calibration. It does not make the cake sweet; it rounds the ferment's salt and shifts the flavour from aggressive to savoury-warm.` },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
        { amount: 1, unit: 'tsp', name: 'fish sauce (optional, only if the mắm tép is unusually mild)' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 6, name: 'bowls of hot steamed rice', note: `Non-negotiable. The cake is engineered to season rice, and it is far too concentrated to eat alone in any quantity that common sense would endorse.` },
        {
          amount: 1,
          name: 'platter of raw vegetables: cucumber in batons, star fruit in slices, green banana, lettuce',
          note: `The raw-vegetable escort does the same palate-clearing work here that it does beside kho, beside mắm sống, beside every salt-pole dish in the south — crunch, tannin and water between bites of something intense.`,
        },
        { amount: 50, unit: 'g', name: 'rau răm and húng quế, whole sprigs', note: `The fixed pairing. Rau răm with fermented shrimp is as automatic in the south as ginger with squid on the coast.` },
        { amount: 2, name: 'red chilies, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Fry the aromatics and bloom the mắm — the kitchen will announce itself',
      description: `Heat the oil in a pan over medium heat. Fry the shallots and garlic until fragrant and just golden — 2 minutes, no further. Add the mắm tép and stir continuously for 3-4 minutes over medium-low heat.

The paste will loosen, darken slightly, and — the readiness signal — its raw, sharp, high-volatile pungency will mellow into something rounder, warmer and recognisably appetising. The shift is unmistakable in the nose: from something that clears the sinuses to something that fills the kitchen. Open a window for the first two minutes; by the fourth, close it again and let the neighbours know what is coming.

Do not brown the paste. Blackened mắm tép is bitter and harsh; the bloom is a gentle warming, not a fry.`,
      tip: `What the gentle frying does to the paste is the same volatile editing the sour bamboo received in the Tuyên Quang duck braise: brief heat in fat evaporates the most volatile and most challenging amine compounds (trimethylamine, the "fishy" top note) while leaving the less volatile glutamate, nucleotides and Maillard precursors intact. The shift from raw-pungent to cooked-savoury happens over exactly this window — 3 to 4 minutes, medium-low — and it is the single step that transforms mắm tép from something you approach cautiously to something you spoon over rice with enthusiasm. Every chưng recipe in the south begins here, and the step is always described the same way: xào cho dậy mùi thơm — fry until the fragrance rises. It is a command to the nose, not the clock.`,
    },
    {
      title: 'Combine everything and beat smooth — the batter should be pourable',
      description: `Scrape the bloomed mắm tép into a bowl. Add the minced pork, the sugar and the black pepper and mix until evenly combined.

Beat the eggs until uniform and pour them in, stirring in one direction until the whole mixture is a thick, homogeneous, pourable batter — no pockets of pure mắm, no clumps of dry pork. The colour should be an even ruddy pink-brown.

Taste it raw — briefly, a fingertip — and decide: salty enough? The eggs and pork have diluted the mắm's salt by roughly 60%, and the steaming will mellow it further; if it tastes mildly salty raw, it will taste bland cooked. It should be assertively savoury now, with pepper warmth and a clean fermented depth, no raw sharpness.`,
      tip: `Mixing in one direction is doing small-scale what the bò viên's slapping does at high intensity: it aligns the solubilised pork myosin into a light, cohesive network that will set firm in the steamer. Random stirring leaves the proteins tangled at cross-purposes, and the cake crumbles when sliced. Sixty seconds, one direction, with the fork: minimal effort, maximum structural payoff. Every Vietnamese chả, chưng and steamed meat cake follows the same instruction, because it is the same physics.`,
    },
    {
      title: 'Steam gently — 30-35 minutes at medium steam, never a hard boil',
      description: `Pour the batter into a heatproof bowl or small steaming dish, 4-5 cm deep maximum. Tap the bowl on the counter to settle air bubbles. Cover the bowl loosely with foil or a plate.

Set in a steamer over simmering water — not a hard rolling boil — and steam 30-35 minutes. The cake is done when a skewer or chopstick pushed into the centre comes out clean, the surface is firm to the touch and has set to a matte ruddy brown, and pressing the centre with a finger leaves an impression that fills back slowly.

Hard steam creates bubbles: the egg proteins at the surface set too fast, trapping steam pockets that expand and riddle the cake with craters. Gentle, medium steam lets the proteins set from the edges inward at a pace that gives trapped air time to escape. A smooth, dense, bubble-free cake is a gently steamed one.`,
      tip: `The steaming temperature matters because it governs the egg's set. Egg white begins to set at 62°C and yolk at 68°C; above about 80°C the proteins contract hard and squeeze out water, and the cake turns dry and sponge-holed. A vigorous boil pushes the interior well past 80°C; a gentle simmer holds it around 75-80°C for longer, and the proteins gel smoothly into a dense, flan-like matrix with no weeping. It is the same reason a custard is baked in a bain-marie and a chawanmushi is steamed gently — the same physics, the same egg, the same demand for patience.`,
    },
    {
      title: 'Cool, slice, and serve cold over hot rice',
      description: `Lift the bowl out and cool 15-20 minutes. The cake firms as it cools — straight from the steamer it is soft and hard to slice; at room temperature it sets to its proper dense, terrine-like consistency and cuts cleanly with a wet knife.

Slice into thin wedges or rectangles. Serve at room temperature or fridge-cold, over bowls of hot rice. The thermal contrast — cold cake on hot rice — is traditional and practical: the heat of the rice lifts the mắm's aroma out of the cake exactly the way hot potatoes lifted the mắm sống in Vĩnh Long, and the cold density of the cake keeps it from dissolving.

Lay cucumber, star fruit, herbs and chili alongside. The rhythm: a sliver of cake pressed into the rice, a bite, a mouthful of cucumber, a sprig of rau răm. Repeat across a bowl, then a second bowl, then push back from the table.

The cake keeps 4-5 days refrigerated and is genuinely better on day two, when the flavours have married and the salt has equalised through the pork matrix. Pack it for a field lunch, a work lunch, a bus journey — it was designed for the road, and the road has not changed.`,
      tip: `Mắm tép chưng is the final proof of this collection's recurring argument: fermentation is not a flavour category, it is an engineering category, and the dish that results from it is always a preservation problem solved so well that it became a cuisine. Tiny river shrimp, too small to fillet, too abundant to eat fresh, too perishable to store — fermented into mắm (shelf-stable), steamed into chưng (portable, sliceable, fridge-stable for a week), and eaten in slivers calibrated to season rice (concentrated, so a little goes all day). At every stage the problem is perishability and the solution is concentration — and the flavour that emerged from the solution is what people now crave, order, and carry home in jars. Nobody fermented shrimp because they wanted umami. They fermented shrimp because the river gave them too many on Tuesday and none on Wednesday. The umami was the accident, and the chưng was the recipe that followed the accident home.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
