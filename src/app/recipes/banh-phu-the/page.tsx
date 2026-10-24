'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-phu-the',
  title: `Bánh Phu Thê (Husband-and-Wife Cakes)`,
  subtitle: `Two translucent amber-gold tapioca wafers pressed together around a heart of mung bean, coconut and pork fat, wrapped in a box of banana leaf and tied with a red string. The wedding cake of Bắc Ninh — and possibly the only Vietnamese dessert whose recipe is also a theory of marriage.`,
  category: 'DESSERT',
  difficulty: 'Hard',
  totalTime: '3 hr',
  rating: 4.9,
  baseServings: 8,
  heroImage: '/images/recipes/banh-phu-the.jpg',
  intro: `In Bắc Ninh — the province of quan họ love duets, of the oldest Buddhist pagodas in Vietnam, and of a ceremonial culture so elaborate that the word lễ appears in conversation more often than the word cơm — no wedding, no engagement, no formal visit between families is complete without bánh phu thê on the tray. Phu thê means husband and wife, and the cake is the marriage in miniature: two identical halves, pressed together face to face, enclosing a shared filling, wrapped in a single leaf and tied with a thread. The thread is red at weddings. The number of cakes on the tray is always even. And the filling, by strict Bắc Ninh convention, must contain exactly three things — mung bean for the gold of prosperity, coconut for the sweetness of union, and a visible piece of pork fat for the richness that sustains. A cake without fat is a marriage without substance. Bắc Ninh says this with a straight face and means it.

The outer wafer is the technical heart and the visual signature: a thin, translucent, amber-gold disc made from tapioca starch cooked with sugar and a few drops of gardenia-pod extract or turmeric water — the yellow that gives the cake its colour and its symbolism, because yellow is the colour of royalty, of gold, of the skin of the ancestors. The cooked starch is rolled flat, cut into rounds, and when two rounds are pressed together around the filling and steamed, they fuse into a single translucent pouch, showing the filling's shadow through their surface the way a lantern shows its candle. A well-made bánh phu thê is literally transparent: you can see the gold of the bean, the white of the coconut, and — if the maker was traditional — the pale cube of fat, all through the amber wafer, without unwrapping it. The cake tells you what it contains, and what it contains tells you what a marriage should hold. Bắc Ninh has never been subtle about symbolism.

The wrapping is the third act, and it is more architecture than packaging. Each cake is set inside a small rectangular box folded from banana leaf — not wrapped loosely, but folded into a precise, four-walled, lidded container about the size of a matchbox, tied shut with a strip of bamboo or, at weddings, with a dyed-red raffia. The box is part of the gift: unwrapping it is a ritual of its own, a small performance of neatness that the giver intended and the receiver is expected to honour. A clumsily wrapped bánh phu thê is a social event, and not the kind anyone wants.

The cake is eaten at room temperature, cold from the tray, and it eats like no other sweet in the Vietnamese canon: the tapioca wafer is chewy-tender, faintly sweet, with a yielding, almost jelly-like give; inside, the mung bean is dense and quietly sweet, the shredded coconut is aromatic and faintly crunchy, and the cube of fat — if present — melts on the tongue with a richness that rounds every other flavour in the mouthful. It is not a cake you eat for energy or for indulgence. It is a cake you eat because someone's daughter is marrying someone's son, and the tray on the table says that both families agreed to the terms, and the terms are gold, sweetness and substance, in a transparent pouch, tied with a red string, in even numbers, from Bắc Ninh.`,
  ingredientSections: [
    {
      title: 'The tapioca wafer (the two halves)',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'tapioca starch (bột năng)',
          note: `Pure tapioca — the same starch that turns glass-clear in the Huế bột lọc dumplings, here rolled flat and coloured gold. No rice flour, no wheat — the translucence depends on tapioca's near-pure amylopectin, which gelatinizes into a clear, elastic gel that other starches cannot replicate.`,
        },
        { amount: 150, unit: 'g', name: 'sugar' },
        { amount: 300, unit: 'ml', name: 'water' },
        {
          amount: 1,
          unit: 'tsp',
          name: 'gardenia pod extract (dành dành) or turmeric water',
          note: `The gold colouring. Gardenia pods — the dried seedpods of Gardenia jasminoides, sold at Vietnamese and Chinese herbal shops — are simmered in water to yield a deep saffron-gold liquid whose colour is heat-stable and food-safe. Turmeric water (1 tsp ground turmeric steeped in 2 tbsp hot water and strained) is the pragmatic substitute and gives a very similar amber. Either way the colour must be gold, not yellow — gold is the symbolism, and a pale cake reads as an afterthought.`,
        },
        { amount: 1, unit: 'tbsp', name: 'neutral oil or pomelo flower water (optional)', note: `A few drops of pomelo-blossom water perfumes the wafer delicately — the traditional Bắc Ninh scent. Oil keeps the rolled dough workable.` },
      ],
    },
    {
      title: 'The filling (nhân)',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'split mung beans (đậu xanh cà vỏ), soaked 4 hours',
          note: `Steamed 20 minutes until soft, mashed smooth while hot, sweetened and cooked dry — the same sên nhân technique as the bánh gai filling. The gold of the bean is one of the cake's three symbolic elements.`,
        },
        {
          amount: 100,
          unit: 'g',
          name: 'fresh coconut, finely shredded or grated',
          note: `Fresh, not desiccated — its moisture and fat are part of the filling's richness. Tossed briefly in a dry pan with a pinch of sugar to lightly toast and dry it so it does not make the filling wet.`,
        },
        {
          amount: 50,
          unit: 'g',
          name: 'pork back fat, cut into small 1 cm cubes, blanched',
          note: `The controversial-to-outsiders, non-negotiable-to-Bắc-Ninh element. Blanched in boiling water 2 minutes to firm it, then tossed in sugar. Each cake gets one or two visible cubes. The fat melts on the tongue and the symbolism is declared without embarrassment: richness sustains. Modern versions sometimes omit it; traditional versions never do, and the grandmother who taught you will know which you chose.`,
        },
        { amount: 80, unit: 'g', name: 'sugar (for the filling)' },
        { amount: 1, unit: 'tbsp', name: 'roasted sesame seeds' },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
        { amount: 0.5, unit: 'tsp', name: 'vanilla or pomelo flower water (optional)' },
      ],
    },
    {
      title: 'The wrapping',
      items: [
        {
          amount: 16,
          name: 'pieces of banana leaf, cut into rectangles about 15 x 20 cm, softened',
          note: `Softened by passing briefly over a flame or dipping in boiling water — pliable enough to fold without cracking. Plus narrow strips for tying, or red-dyed raffia or string for wedding trays.`,
        },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the filling — gold, sweetness and substance',
      description: `Steam the soaked mung beans 20 minutes until a bean crushes to powder between two fingers. Mash smooth while hot. In a pan over low heat, combine the mashed bean with 80 g sugar and the salt, and stir continuously 8-10 minutes until the paste thickens, dries, and pulls away from the pan as one cohesive mass.

Fold in the toasted coconut, the sesame seeds and the vanilla. Cool completely, then roll into 16 small balls of about 20-25 g each.

Press one or two cubes of the blanched, sugared pork fat into the centre of each ball and close the bean paste around it, hiding the fat inside the gold. Each ball should hold its shape on a tray and show no fat at the surface — the fat is a secret the cake reveals only when bitten.`,
      tip: `The pork fat is blanched and sugared before it enters the filling, and both steps have a reason beyond hygiene. Blanching firms the fat so it holds its cube shape through the steaming instead of melting into a greasy smear before the cake is even sealed. The sugar coating then caramelises faintly against the fat during the steam, giving it a sweetness at the border where it meets the bean — so the bite transitions from sweet bean to sweet-rich fat rather than from sweet to savoury, which would jar. The sugar is the translator between two textures, and it is why the fat in a properly made bánh phu thê reads as luxurious rather than strange.`,
    },
    {
      title: 'Cook the tapioca dough — stir until it turns to glass',
      description: `Combine the tapioca starch, sugar and water in a heavy-bottomed pan. Stir to dissolve. Add the gardenia extract or turmeric water — the liquid should turn a deep amber-gold.

Cook over medium-low heat, stirring constantly and vigorously with a wooden spatula, for 10-15 minutes. The mixture will go through stages: thin and milky, then thick and lumpy, then — the moment — it suddenly clears and becomes a smooth, glossy, translucent, amber gel that pulls away from the pan in one elastic mass and stretches when lifted on the spatula.

Take it off the heat. Knead in the oil or flower water on an oiled surface while still warm, 2-3 minutes, until smooth and pliable. Cover with oiled cling film — it skins over in minutes and a skinned dough cracks when rolled.`,
      tip: `The sudden clearing is the gelatinization threshold made visible: tapioca starch granules absorb water as they heat, swelling and losing their crystalline structure, and at around 65-70°C they burst and release their amylopectin into the surrounding liquid. Below the threshold the mixture is opaque (intact granules scatter light); above it the gel is translucent (no granules left to scatter). The transition is abrupt because all granules in a well-stirred pot cross the threshold nearly simultaneously, and the cook sees it as a single moment when the white paste turns to glass. That moment is the dough being born, and everything before it is preparation.`,
    },
    {
      title: 'Roll, fill and press — two halves, one cake',
      description: `Oil your hands and your work surface. Divide the warm dough into 32 equal pieces (about 15 g each). Roll each into a ball and press flat into a disc about 7-8 cm across and 2-3 mm thick — thin enough that the filling's shadow will be visible through it when the cake is sealed.

Take two discs. Set a filling ball on one, press gently to flatten slightly, and lay the second disc on top. Press the edges together all the way around, sealing firmly but gently — no trapped air, no gaps, no pinching so hard the dough tears. The sealed cake should be a smooth, flat, amber-gold pouch with the filling's dark shadow visible through both faces.

Work quickly. The dough stiffens as it cools, and cool dough seals poorly — the two halves refuse to fuse and the cake opens during steaming. If the dough stiffens, warm it briefly in the microwave or over steam for 10 seconds.`,
      tip: `The two-disc method — two separate halves pressed together — rather than a single disc folded over is the structural symbolism and the structural engineering at once. Two halves fusing into one, enclosing a shared interior: the marriage in miniature. And technically, pressing two flat discs face-to-face produces a more uniform wall thickness than folding, where the fold line is thick and the far edge is thin — so the cake steams evenly and the translucence is uniform all around. The symbolism and the physics agree, which is the best kind of tradition: one that works for reasons beyond the ones it states.`,
    },
    {
      title: 'Wrap in banana-leaf boxes and steam — 15 minutes',
      description: `Fold each banana-leaf rectangle into a shallow, open-topped box: score a rectangle about 8 x 6 cm in the centre, fold up the four walls, and tuck the corners to hold. Set a sealed cake inside each box, close with a leaf lid, and tie shut with a leaf strip, bamboo string, or — for the wedding tray — a red-dyed raffia.

Steam the boxes in a steamer over hard-boiling water, 15 minutes. The cakes are done when the tapioca wafer has turned from matte to fully glossy and translucent, and the filling's shadow is clearly visible through the amber surface.

Cool completely before presenting — at least 2 hours. Warm tapioca is slack and sticky; at room temperature it firms to its proper tender-chewy set, and the banana leaf's perfume has fully infused the surface.`,
      tip: `The banana-leaf box is doing four things and should not be simplified to cling film. First, it provides the flat bottom and straight walls that give bánh phu thê its distinctive matchbox shape — a cake steamed in a loose wrap would slump into a lump. Second, the box holds the two halves in compression during the steam, ensuring the seal fuses completely. Third, the leaf releases its coumarin and grassy aromatics into the cake's surface over the 15 minutes. And fourth, the box is the gift presentation — unwrapping a bánh phu thê is opening a small architectural package, and the care of the folding says as much about the giver as the cake inside says about the baker. Cling film does one of these four jobs. The leaf does all of them.`,
    },
    {
      title: 'Present in even numbers, eat at room temperature — and read the cake',
      description: `Arrange the cooled cakes on a tray in even rows — two, four, six, eight, always even, because odd numbers at a wedding are a dissonance no Bắc Ninh table will tolerate. At a formal engagement the tray carries a specific count negotiated between families; at a casual visit, four or six is correct. Tie the wedding trays with red string.

To eat: untie, unfold the leaf box, lift the cake. It should be amber-gold, glossy, and translucent enough that you can see the filling through both faces — the bean's gold, the coconut's white, and, if the baker was traditional, the fat's pale cube, all visible as shadows through the wafer. Bite through: the tapioca yields with a tender, jelly-like chew; the bean is dense and gently sweet; the coconut is fragrant; and the fat, if present, melts.

The cake keeps 2-3 days at room temperature in its leaf box, and does not improve with refrigeration — cold hardens the tapioca to rubber, the same retrogradation that punishes every glutinous and tapioca product in this collection. Room temperature, in its box, on the tray, in even numbers. The form is the recipe's final ingredient.`,
      tip: `Bánh phu thê is the dish in this collection where form and content are genuinely inseparable — where the way the cake is shaped, wrapped, counted and presented is not packaging around a recipe but part of the recipe itself. Two halves pressed together is the marriage. The transparent wafer is the openness between partners. The shared filling is the life they build inside. The fat is the substance nobody should be ashamed to want. The even count is the symmetry the culture demands. And the red string is the bond.

Whether any of this symbolism was intended by the first baker in Đình Bảng or Tiên Du — nobody knows, and the province does not care. It is there now, carried by every tray, and every bride in Bắc Ninh who receives a tray of well-made bánh phu thê understands the sentence being spoken without anyone opening their mouth. Some recipes are food. This one is also a letter, and the kitchen is also a writing desk.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
