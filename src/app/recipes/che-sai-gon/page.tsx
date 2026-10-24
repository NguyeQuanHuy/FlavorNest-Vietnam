'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'che-sai-gon',
  title: `Chè Ba Màu + Chè Thập Cẩm (Three-Colour Sweet Soup and Mixed Sweet Soup, Saigon Style)`,
  subtitle: `Layers of mung bean, red bean, pandan jelly, coconut cream and crushed ice in a tall glass — or a bowl of everything the chè cart has, in whatever combination the eater's finger points to. The Saigon dessert tradition, where every glass is a construction and every bowl is a negotiation.`,
  category: 'DESSERT',
  difficulty: 'Medium',
  totalTime: '2 hr',
  rating: 4.8,
  baseServings: 6,
  heroImage: '/images/recipes/che-sai-gon.jpg',
  intro: `Chè is the Vietnamese word for sweet soup, sweet drink, sweet snack — a category so broad it covers everything from a hot bowl of black bean simmered to softness with sugar to a cold glass layered like a geological core sample with five different coloured strata of jelly, bean, fruit and ice. The category has hundreds of variants across Vietnam, but its spiritual capital is Sài Gòn, where the chè carts and chè stalls operate on every block and where the ordering system — pointing at the ingredients you want from a glass case that holds twenty options — produces a customised dessert every time.

Chè ba màu — three-colour sweet soup — is the most recognisable variant and the one the world outside Vietnam has mostly encountered: three layers in a tall glass, each a different colour and texture, topped with coconut cream and crushed ice. The layers, bottom to top, are traditionally: đậu đỏ (red bean — adzuki, simmered sweet), đậu xanh (mung bean, steamed and mashed to a smooth paste), and thạch (jelly — pandan-flavoured, cut into cubes, translucent green). Over the top goes a ladleful of nước cốt dừa (coconut cream, sweetened, slightly salted) and then a dome of đá bào (crushed ice). The glass is eaten with a long spoon, bottom to top or — the Saigon method — stirred into a chaos of colour and cold and cream.

Chè thập cẩm — mixed sweet soup — is the free-form version: the eater points at whatever the cart has (and a good cart has fifteen to twenty options), and the vendor scoops a spoonful of each into a bowl over crushed ice and coconut cream. The possible components include: hạt sen (lotus seeds), nhãn nhục (dried longan), bột báng (tapioca pearls), khoai môn (taro, cubed and steamed), nước dừa (young coconut strips), trân châu (boba pearls), rau câu (agar jelly in various colours), chuối (banana, in coconut milk), and whatever fruit is in season — jackfruit, lychee, longan, mango. The bowl is different every time because the selection is different every time, and the eater is the composer.

The two versions — ba màu (structured) and thập cẩm (freeform) — represent the same format at two levels of order, and both are correct. Ba màu is the Instagram version: layered, colourful, symmetrical, served in a clear glass so the strata are visible. Thập cẩm is the market version: chaotic, personal, served in a bowl where everything is already mixed and the colour is whatever the fifteen components averaged out to. Sài Gòn drinks both without ranking either.`,
  ingredientSections: [
    {
      title: 'Chè ba màu — the three layers',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'đậu đỏ (adzuki beans / red beans), soaked 6 hours',
          note: `Simmered 45-60 minutes until soft but still holding their shape, then sweetened with 80 g sugar and a pinch of salt. The bottom layer — dense, red-brown, sweet.`,
        },
        {
          amount: 200,
          unit: 'g',
          name: 'đậu xanh (split mung beans), soaked 2 hours',
          note: `Steamed 20 minutes, mashed smooth with 60 g sugar while hot. The middle layer — golden, smooth, paste-like.`,
        },
        {
          amount: 1,
          name: 'batch of thạch rau câu lá dứa (pandan agar jelly)',
          note: `10 g agar powder + 500 ml water + 80 g sugar + 1 tsp pandan extract (or 5 pandan leaves, blended and strained). Bring to a boil stirring, pour into a tray, chill until set, cut into 1 cm cubes. The top layer — green, translucent, wobbly.`,
        },
      ],
    },
    {
      title: 'The coconut cream and ice',
      items: [
        {
          amount: 400,
          unit: 'ml',
          name: 'coconut cream (full-fat)',
          note: `Warmed gently with 2 tbsp sugar and 0.25 tsp salt until dissolved. Served at room temperature or slightly warm — not hot, not cold — so it flows over the ice without solidifying.`,
        },
        { amount: 1, unit: 'tbsp', name: 'tapioca starch, slaked in 2 tbsp water (optional)', note: `Stirred into the warming coconut cream to thicken it slightly — some stalls do, some do not. Thickened cream clings to the spoon and coats every component; un-thickened cream runs to the bottom.` },
        { amount: 500, unit: 'g', name: 'crushed ice (đá bào)', note: `Finely crushed — not cubed. The ice is the top of the glass and it chills everything as it melts.` },
      ],
    },
    {
      title: 'Chè thập cẩm — additional components (choose 5-8)',
      items: [
        { amount: 100, unit: 'g', name: 'hạt sen (dried lotus seeds), simmered 30 min with sugar' },
        { amount: 100, unit: 'g', name: 'nhãn nhục (dried longan), soaked 20 min' },
        { amount: 100, unit: 'g', name: 'bột báng (small tapioca pearls), cooked 15 min' },
        { amount: 100, unit: 'g', name: 'khoai môn (taro), cubed, steamed, tossed in sugar' },
        { amount: 100, unit: 'g', name: 'nước dừa non (young coconut flesh), shredded' },
        { amount: 100, unit: 'g', name: 'trân châu (boba/tapioca balls), cooked' },
        { amount: 100, unit: 'g', name: 'rau câu (agar jelly), various colours, cubed' },
        { amount: 100, unit: 'g', name: 'jackfruit or longan, fresh or canned, diced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Cook the three layers — each one separately, each one sweet',
      description: `RED BEAN: simmer the soaked adzuki beans in plenty of water for 45-60 minutes until soft but intact — not mushy, not bursting. Drain. Toss with 80 g sugar and a pinch of salt while warm; the sugar melts into the hot beans and each bean becomes a sweet, dense, jewel-like unit. Cool.

MUNG BEAN: steam the soaked split mung beans 20 minutes until they crush to powder between two fingers. Mash immediately while hot with 60 g sugar — the heat helps the sugar dissolve into the paste. The result should be a smooth, golden, dense paste that holds its shape on a spoon. Cool.

PANDAN JELLY: dissolve 10 g agar powder in 500 ml water with 80 g sugar, bring to a full boil stirring constantly (agar sets only if it reaches a proper boil), add pandan extract, pour into a flat tray to a depth of 1.5 cm, and chill until fully set — about 1 hour. Cut into 1 cm cubes. Each cube should be translucent green, firm, and wobble when tapped.

Each component can be made a day ahead and refrigerated. They are assembled cold.`,
      tip: `Agar sets at a much higher temperature than gelatin (35-40°C vs. 15-20°C) and stays set at room temperature (gelatin melts), which is why every Vietnamese chè uses agar rather than gelatin for its jelly component. In a glass of crushed ice that is melting continuously, an agar jelly holds its cube shape for the full eating time; a gelatin jelly would dissolve into the melting ice within minutes. The agar is a tropical ingredient chosen for tropical conditions, and its thermal stability is the reason chè works as a cold, iced, outdoor, sidewalk dessert in a 35°C city.`,
    },
    {
      title: 'Layer the chè ba màu — bottom to top, colour by colour',
      description: `In a tall, clear glass (so the layers are visible):

BOTTOM: 3 tablespoons of sweetened red beans, pressed gently into the glass base. Red-brown layer.

MIDDLE: 3 tablespoons of mashed mung bean paste, spooned carefully over the beans without mixing. Golden layer.

TOP: a generous scoop of pandan jelly cubes, set on the mung bean. Green layer.

OVER THE TOP: a ladleful of the sweetened coconut cream, poured slowly so it flows over the jelly and settles between the cubes.

CROWN: a dome of finely crushed ice, mounded high.

The glass should read, from bottom to top: brown, gold, green, white, and ice. Hold it to the light: the layers should be distinct, the colours vivid, and the coconut cream should be threading down through the jelly cubes like milk in coffee.

Serve with a long spoon. The eater has two choices: eat layer by layer (the structured experience) or stir everything into a cold, creamy, multi-textured, multi-coloured chaos (the Saigon experience). Both are correct. The chaos is more common.`,
      tip: `The layering works because each component has a different density: the red beans are the densest (whole cooked beans, heavy with absorbed water and sugar), the mung paste is medium (a smooth semi-solid), the jelly cubes are light (agar is 98% water by weight), and the coconut cream is lightest (a lipid emulsion). The layers stack in density order and stay separated as long as the spoon does not intervene — which, in Saigon, is about fifteen seconds. The layering is a visual exercise, not a structural one, and its purpose is the Instagram moment before the stirring begins.`,
    },
    {
      title: 'Build the chè thập cẩm — point, scoop, pour, eat',
      description: `For the freeform version: set out all the prepared components in separate bowls. Each person points at what they want — or the cook chooses 6-8 components and scoops a spoonful of each into a bowl.

A good thập cẩm might contain: red beans, mung paste, pandan jelly, lotus seeds, tapioca pearls, taro cubes, young coconut flesh and longan. Or it might contain all of those plus boba, jackfruit and three colours of agar jelly. The selection is the composition, and the composition is different every time.

Over the scooped components: pour coconut cream generously. Top with crushed ice. Serve with a spoon.

Eat by digging: each spoonful from the mixed bowl is a surprise — the spoon hits a lotus seed, a taro cube, a boba pearl, a jelly wobble, each one with a different texture and a different sweetness, all bound by the coconut cream and chilled by the ice. The bowl is a texture sampler, and the pleasure is in the variety — no two spoonfuls are the same.

This is the Saigon chè experience: stand at a cart, point at six things, receive a bowl of cold, sweet, creamy, multi-textured, multi-coloured dessert, eat it on the sidewalk in the shade, and walk away for less than a dollar. The cart is the kitchen, the sidewalk is the dining room, and the city is the restaurant. Sài Gòn's chè tradition is not a recipe. It is a system — a modular, customisable, endlessly recombinant system — and every glass is a unique composition that will never be exactly replicated.`,
      tip: `Chè thập cẩm is the most Vietnamese expression of the "build your own" philosophy this collection has documented across the southern table: the phở's herb platter, the bún quậy's table-side nước mắm, the hotpot's communal pot. The south trusts the eater to compose, and chè thập cẩm takes this trust to its logical conclusion — the eater chooses not just the seasoning but the ingredients themselves, from a palette of fifteen to twenty options, and the vendor's only job is to scoop, pour cream and add ice. The vendor does not judge the combination. The vendor does not suggest. The finger points, the spoon scoops, and the bowl belongs to whoever ordered it. It is the most democratic dessert in Asia, and it runs on a system older than any menu: you see it, you want it, you point.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
