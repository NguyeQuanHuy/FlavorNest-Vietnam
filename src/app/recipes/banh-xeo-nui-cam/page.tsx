'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-xeo-nui-cam',
  title: `Bánh Xèo Núi Cấm (Seven-Mountain Crepe with Wild Mushrooms)`,
  subtitle: `The same turmeric batter, the same screaming wok — but on Núi Cấm, the highest of the Seven Mountains, the filling is not shrimp or pork but nấm mối, the wild termite mushrooms that erupt from the forest floor after the first rains and that taste of the mountain before they taste of anything the kitchen adds. A crepe that changes its filling when the altitude changes, and that proves a format is only as interesting as what the landscape puts inside it.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-xeo-nui-cam.jpg',
  intro: `Núi Cấm — the Forbidden Mountain, Thiên Cấm Sơn — is the tallest of the Bảy Núi at 710 metres, and its upper slopes, wrapped in forest and threaded with pagoda paths, carry a microclimate distinctly different from the sweltering Delta floor: cooler, damper, foggier, and — critically for this recipe — host to a mycological diversity that the flat paddies below cannot support. When the first monsoon rains hit the mountain in May or June, the forest floor erupts with mushrooms, and the one the mountain prizes above all others is nấm mối — the termite mushroom, Termitomyces spp. — a large, dense, deeply flavoured wild mushroom that grows exclusively from the fungal gardens of termite mounds in tropical forests and that cannot be cultivated.

Nấm mối is one of the most valued wild foods in mainland Southeast Asia. The mushroom is the fruiting body of a fungus that lives in obligate symbiosis with Macrotermes termites: the termites cultivate the fungus inside their mound, feeding it pre-chewed plant matter, and in return the fungus breaks down the cellulose into digestible sugars for the colony. When conditions are right — after heavy rain, when the mound's humidity spikes — the fungus sends up a large, conical, grey-brown mushroom through the soil above the mound, and the forest foragers are waiting. The mushrooms appear for a few weeks each monsoon season, they cannot be planted or predicted beyond knowing where the termite mounds are, and they are sold at the mountain's foot-market for prices that reflect the walking, the searching, the seasonality and the flavour: dense, meaty, almost truffle-like in intensity, with a savoury depth that cultivated mushrooms (oyster, shiitake, enoki) approach from a polite distance but never reach.

The Núi Cấm bánh xèo takes this mushroom — the mountain's rarest seasonal ingredient — and puts it inside the Delta's most universal format. The batter is the same turmeric-coconut formula documented twice in this collection. The wok is the same screaming-hot steel. But where the lowland crepe fills with shrimp and bean sprouts and sometimes pork, the mountain crepe fills with torn nấm mối, stir-fried quickly with garlic and a whisper of fish sauce, and the resulting crepe tastes of the forest — earthy, deep, umami-dense, with a meatiness that has no meat in it. Vegetarian pilgrims climbing to the Phật Thầy pagoda at the summit eat it without compromise; omnivores eat it without noticing the absence of protein, because the mushroom IS protein, in a form the tongue registers as abundantly, satisfyingly meaty.

The crepe is sold at stalls along the road that winds up Núi Cấm's western flank, and during the mushroom weeks the stalls post handwritten signs — "CÓ NẤM MỐI" — that function as a seasonal announcement and a quality guarantee and a price warning all in three words. The sign goes up when the foragers come down from the mountain with their baskets; it comes down when the baskets are empty; and between the two events — a few hours, sometimes a single morning — the stalls fry as fast as the wok allows and every crepe that comes off carries the mountain inside it.`,
  ingredientSections: [
    {
      title: 'The batter',
      items: [
        { amount: 200, unit: 'g', name: 'rice flour (bột gạo)' },
        { amount: 40, unit: 'g', name: 'cornstarch or tapioca starch' },
        { amount: 1.5, unit: 'tsp', name: 'ground turmeric' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 200, unit: 'ml', name: 'coconut milk' },
        { amount: 400, unit: 'ml', name: 'water' },
        { amount: 4, name: 'scallions, green parts, sliced thin' },
      ],
    },
    {
      title: 'The mushroom filling',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'nấm mối (termite mushrooms, Termitomyces spp.), torn into pieces',
          note: `The mountain's gift. Available wild during the monsoon season in the Bảy Núi and in tropical forests across mainland Southeast Asia. In Europe: not available, period — Termitomyces cannot be cultivated and does not grow in temperate forests. The honest substitute is the best combination of wild or semi-wild mushrooms you can source: fresh porcini, chanterelles, maitake or king oyster give the closest meaty, savoury, dense-textured result. Supermarket button mushrooms are too watery and too mild. The substitute should be named and the dish should be called bánh xèo nấm rather than bánh xèo Núi Cấm if the mushroom is not nấm mối.`,
        },
        { amount: 4, name: 'cloves garlic, sliced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil' },
        { amount: 200, unit: 'g', name: 'bean sprouts' },
      ],
    },
    {
      title: 'The wrap platter and nước chấm',
      items: [
        { amount: 1, name: 'large bunch of mustard greens (cải bẹ xanh)' },
        { amount: 1, name: 'head of soft lettuce' },
        { amount: 100, unit: 'g', name: 'herbs: tía tô, húng quế, rau răm, diếp cá' },
        { amount: 1, name: 'cucumber, in batons' },
        { amount: 1, name: 'green banana, sliced thin, in lime water' },
        { amount: 4, unit: 'tbsp', name: 'fish sauce' },
        { amount: 4, unit: 'tbsp', name: 'sugar' },
        { amount: 4, unit: 'tbsp', name: 'water' },
        { amount: 3, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, name: 'cloves garlic, pounded' },
        { amount: 2, name: 'red chilies, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Stir-fry the mushrooms fast — garlic, fish sauce, 90 seconds',
      description: `Tear the nấm mối into bite-sized pieces along their natural grain — do not chop, which compresses the fibres and releases water. The torn surfaces brown better and hold their texture in the crepe.

Heat the oil in a wok over high heat. Add the garlic — 10 seconds. Add all the mushrooms in one layer, spreading them so they contact the wok surface. Do not stir for 45 seconds — let them sear. Then toss twice, add the fish sauce, sugar and pepper, toss once more, and pull off the heat. Total time: 90 seconds.

The mushrooms should be: golden-brown at the edges, still firm and meaty at the centre, intensely aromatic, and dry — no pool of liquid in the wok. If they released water and are simmering in a puddle, the wok was too cold or the batch too large, and the mushrooms are boiled rather than seared. The difference is the Maillard crust, which gives the filling its savoury depth inside the crepe.

Set aside. The mushrooms are the filling for the crepe and they go in at the batter-swirl stage alongside the bean sprouts.`,
      tip: `Nấm mối's intense savouriness comes from its exceptionally high free-glutamate content — Termitomyces species produce glutamate at concentrations comparable to aged Parmesan, roughly 1,200-1,800 mg per 100 g of fresh mushroom, which is 5-10 times the level in cultivated button mushrooms. This is why the termite mushroom tastes "meaty" despite being a fungus: glutamate at that concentration activates the tongue's umami receptors as powerfully as a piece of aged beef. The searing in the wok adds Maillard compounds (pyrazines, thiophenes) that the tongue interprets as "browned meat," and the combination — fungal glutamate + Maillard browning — produces a filling that reads as protein to the palate despite containing no animal product. The mushroom is doing the work of the shrimp it replaced.`,
    },
    {
      title: 'Fry the crepe — same screaming wok, mushrooms instead of shrimp',
      description: `Rest the batter 30 minutes. Heat a 24-26 cm wok over high heat until a drop of water vanishes instantly. Add 1.5 tablespoons of oil and swirl.

Pour in a ladle of batter and immediately tilt and swirl to coat the wok in a thin, even layer. Scatter a generous handful of the seared mushrooms and bean sprouts over one half. Cover 90 seconds. Uncover, drizzle a teaspoon of oil around the rim, and fry uncovered 2-3 more minutes until the edges lift, curl and go translucent-brittle.

The crepe should be: golden-brown on the bottom, translucent and shattering at the edges, with the mushrooms visible through the batter like dark jewels in amber. The scent should be turmeric, coconut, and — underneath — the deep, earthy, truffle-adjacent aroma of the seared nấm mối.

Fold and slide out. Fry one, eat one, fry the next — the same relay format as every bánh xèo in this collection.`,
      tip: `The mushroom crepe shatters with a slightly different sound from the shrimp crepe, and the difference is instructive. Shrimp release moisture during the frying — their high water content steams against the batter from inside, producing micro-pockets of steam that make the crepe slightly puffier and give it a lighter, more hollow crunch. Mushrooms, pre-seared and therefore already dehydrated at their surface, release almost no moisture into the batter, and the crepe fries drier, flatter and more brittle — a crunch that is denser and more glass-like, closer to a cracker than to a puff. The absence of steam is the absence of the shrimp, heard through the crust.`,
    },
    {
      title: 'Tear, wrap with herbs and mustard green, dunk in nước chấm',
      description: `Tear off a shard of crepe — rim and centre together, with mushroom pieces visible in the golden shell. Lay it on a mustard leaf with lettuce, herbs, cucumber and green banana. Roll loosely. Dunk deep.

The bite: the crepe shatters, the mushroom's meaty chew resists, the herbs brighten, the mustard leaf's peppery bitterness frames, and the nước chấm's sweet-sour acid ties everything together. The mushroom's earthy-umami dominates the roll the way the shrimp's sweetness dominates the lowland version — same format, different star, different register entirely.

Eat during the mushroom weeks, on the road up Núi Cấm, with the mountain above and the Delta below, and know that the crepe you are holding is a product of altitude: the termite mound that grew the mushroom sits at 400 metres, in a forest the Delta floor does not have, in a microclimate the Delta floor cannot reach. The crepe format travelled up the mountain from the paddy. The filling came down the mountain from the forest. And the meeting — turmeric batter from below, wild mushroom from above — is the Bảy Núi's table expressed in a single fold.`,
      tip: `The Núi Cấm bánh xèo is the fourth bánh xèo in this collection — after the Cù Lao Dài hến xèo, the Đồng Tháp bông điên điển xèo, and now the Bảy Núi nấm mối xèo — and setting them side by side reveals the format's true nature: the batter is a constant (turmeric, coconut, rice flour); the filling is the variable; and the variable is always the landscape. The islet fills its crepe with river clams. The floodplain fills its with seasonal blossoms. The mountain fills its with wild mushrooms. Same format, three altitudes, three ecologies, three dishes. The bánh xèo is not a recipe. It is a frame, and what goes inside the frame is whatever the ground beneath the wok provides. The batter asks no questions. The landscape answers all of them.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
