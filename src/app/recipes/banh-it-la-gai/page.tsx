'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-it-la-gai',
  title: `Bánh Ít Lá Gai (Black-Leaf Sticky Rice Cake — Bình Định)`,
  subtitle: `Glutinous rice dough — pounded with the dark, fibrous, iron-rich leaves of the lá gai plant until the white dough turns jet-black and smells of forest and earth — wrapped around a sweet filling of mung bean and coconut, folded into a banana leaf, and steamed into a small, pyramidal, glistening-black cake that is Bình Định's most iconic sweet, Bình Định's most frequent offering to the ancestors, and Bình Định's answer to the question: what happens when a leaf turns rice into something the rice could not have been alone?`,
  category: 'DESSERT',
  difficulty: 'Hard',
  totalTime: '4 hr',
  rating: 4.9,
  baseServings: 20,
  heroImage: '/images/recipes/banh-it-la-gai.jpg',
  intro: `Lá gai — Boehmeria nivea var. tenacissima, the ramie plant, a tropical nettle-family shrub whose fibrous bark is used to make rope and fabric throughout Southeast Asia — is the ingredient that makes this cake black, and the blackness is the cake's identity. The leaf is not eaten for its flavour (which is mild, faintly vegetal, almost neutral), not for its nutritional content (though it is iron-rich — roughly 5 mg per 100 g of fresh leaf), and not for its aroma (which is faint, earthy, green). It is eaten for its COLOUR — a deep, permanent, chlorophyll-and-polyphenol black that dyes the glutinous rice dough from white to jet-black during the pounding, and that does not fade during steaming, does not wash off on the fingers, and does not lighten over time. The black IS the cake, and the cake IS the black, and the Bình Định cook who makes bánh ít lá gai is making, first and foremost, a colour.

The colour carries meaning. Black (đen) in Vietnamese folk culture is the colour of the earth, of the ancestors, of depth, of permanence. A black cake offered on the ancestor altar is an offering of the earth itself — the leaf from the forest floor, the rice from the paddy, the coconut from the garden, all combined and darkened into a colour that says: this gift comes from the ground you are buried in, and we have not forgotten you. The bánh ít lá gai is, alongside the bánh chưng (the square, green, Tết rice cake) and the bánh dày (the round, white, Tết rice cake), one of the Vietnamese kitchen's ceremonial cakes — foods made not primarily to eat but to offer, and eaten after the offering as a sharing of the ancestors' meal.

The preparation is labour-intensive and specifically Bình Định's: the lá gai leaves are boiled until soft, then POUNDED in a mortar with cooked glutinous rice for 30-45 minutes — the same exhausting, rhythmic, arm-destroying pounding the giò lụa's pork demanded, here applied to a dough rather than a meat. The pounding does two things: it extracts the leaf's chlorophyll and polyphenol pigments from the cell walls and distributes them uniformly through the rice dough (producing the jet-black colour), and it develops the dough's glutinous-rice-starch network into a smooth, elastic, stretchy, mochi-like texture that is the cake's specific mouthfeel — chewy, sticky, yielding slowly under the tooth, then springing back.

The filling is the sweet centre: mung beans (soaked, steamed, mashed), mixed with fresh coconut (shredded), sugar and a pinch of salt — a golden, sweet, grainy-smooth, coconut-fragrant ball that sits inside the black dough like a yolk inside an egg. The contrast — black outside, golden inside — is the cake's visual surprise: the eater bites through the dark, chewy, leaf-flavoured exterior and discovers the bright, sweet, tropical interior, and the discovery is the cake's pleasure.

The wrapping is banana leaf — folded into a pyramid (the Bình Định shape; other provinces make flat discs or cylinders), tied with banana-fibre string, and steamed for 20-25 minutes. The pyramid shape is specific and deliberate: it sits upright on the altar tray, it stacks neatly for transport (the pointed top nests into the flat base of the cake above), and its triangular silhouette is the visual that Bình Định people identify as "home" when they see it in a market 1,000 km from Quy Nhơn.`,
  ingredientSections: [
    {
      title: 'The lá gai dough',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'lá gai (ramie leaves), fresh or frozen',
          note: `Fresh: dark green, slightly furry (the leaf's trichomes — fine, non-stinging hairs on the surface), available at Vietnamese groceries or foraged from wild ramie (common in tropical Vietnam, southern China and Southeast Asia). Frozen: thaw before boiling. If entirely unavailable: the collection's xôi ngũ sắc documented lá cẩm as a dye plant — 100 g lá cẩm tím produces a deep purple-black, not the true jet-black of lá gai, but the closest visual approximation. NO substitute replicates lá gai's specific polyphenol-black.`,
        },
        { amount: 500, unit: 'g', name: 'glutinous rice flour (bột nếp)' },
        { amount: 100, unit: 'g', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 200, unit: 'ml', name: 'warm water (adjust as needed — the dough should be soft, pliable, not sticky)' },
      ],
    },
    {
      title: 'The mung bean and coconut filling',
      items: [
        { amount: 200, unit: 'g', name: 'dried mung beans (hulled, yellow), soaked 4 hr' },
        { amount: 100, unit: 'g', name: 'fresh coconut, finely shredded (or desiccated coconut, rehydrated)', note: `The tropical fat — its lauric acid provides a creamy, slightly oily richness the mung bean alone does not carry.` },
        { amount: 80, unit: 'g', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'coconut oil or neutral oil' },
      ],
    },
    {
      title: 'For wrapping',
      items: [
        { amount: 40, name: 'banana-leaf squares, 15 x 15 cm, softened over flame' },
        { amount: 20, name: 'pieces of kitchen twine or banana-fibre string' },
      ],
    },
  ],
  steps: [
    {
      title: 'Boil the lá gai, pound with the flour — white dough becomes black',
      description: `Wash the lá gai leaves. Boil in water for 20-25 minutes until very soft — the leaves collapse from firm to mushy, and the water turns dark green-black (the chlorophyll and the polyphenol tannins leach into the water). Drain the leaves. SQUEEZE out as much water as possible — the drier the leaves, the less excess moisture enters the dough, and the firmer the final cake.

POUND: in a large mortar, combine the boiled, squeezed lá gai leaves with the glutinous rice flour, sugar, salt and warm water. Pound — HARD, rhythmic, continuous — for 30-45 minutes.

THE STAGES:

MINUTES 0-10: the leaves and the flour are separate — green-black leaf fragments visible in the white flour, the mixture is granular, non-cohesive, crumbly.

MINUTES 10-20: the pounding breaks the leaf's remaining cell walls, releasing the chlorophyll and the polyphenol pigments into the surrounding dough. The colour shifts from white-with-green-specks to grey to dark grey-green. The dough begins to cohere — the glutinous rice flour's amylopectin, hydrated by the water and the leaf's residual moisture, becomes sticky and elastic.

MINUTES 20-35: the dough is JET-BLACK — uniform, smooth, no visible leaf fragments (the fibres have been pounded to invisibility, their cellulose distributed through the dough as an invisible structural reinforcement). The texture is: elastic (stretches 5-6 cm), smooth (no grains, no lumps, no fibres), sticky (clings to the pestle), and BLACK (hold it to the light — opaque, absorbing all light, the deepest natural food colour in the collection).

MINUTES 35-45: refinement — continued pounding smooths the last rough patches, develops the elasticity further, and produces the final dough: a jet-black, mochi-soft, stretchy, cohesive mass that the hands shape as easily as clay.

FOOD PROCESSOR METHOD: process the boiled leaves to a fine purée first, then combine with the flour, sugar, salt and water. Process 5-8 minutes. The processor produces a comparable colour but a slightly less elastic dough (the blade cuts the amylopectin chains rather than aligning them by the pestle's shearing force). The traditional mortar produces the better texture. The processor produces the better colour (more thorough leaf-cell destruction = more complete pigment extraction).`,
      tip: `The lá gai's jet-black colour comes from TWO pigment classes working simultaneously: CHLOROPHYLL (the green pigment, converted during the boiling and the acidic conditions of the pounding to pheophytin — a grey-green compound that contributes the dark base colour) and POLYPHENOL TANNINS (the brown-black pigments, released from the leaf's vacuoles during cell-wall destruction, that oxidise in the air during pounding to dark-brown-to-black quinone polymers — the same browning chemistry that turns a cut apple brown, here pushed to its extreme endpoint by 45 minutes of continuous air exposure during pounding). The two pigment systems — pheophytin's dark green + quinone's dark brown — combine to produce the jet-black that neither system alone would reach. The colour is a BLEND, and the blend requires both the boiling (to convert chlorophyll to pheophytin) and the extended pounding (to oxidise the tannins to quinones). Skip either step and the dough is dark-green (boiled but un-pounded) or dark-brown (pounded but un-boiled), not the true jet-black that defines the cake.`,
    },
    {
      title: 'Make the filling, wrap in pyramids, steam — earth outside, gold inside',
      description: `FILLING: steam the soaked mung beans 20-25 minutes until very soft. Mash to a smooth purée (a fork, a potato masher or a food processor). Stir in the shredded coconut, sugar, salt and coconut oil over low heat for 3-4 minutes — the sugar melts, the coconut's fat coats the mung bean, and the mixture becomes: golden, sweet, slightly sticky, fragrant with coconut. Cool. Roll into 20 balls, each about 15 g — small, dense, golden spheres.

ASSEMBLY: take a portion of the black dough (about 30-35 g). Flatten into a disc in your oiled palm (oil prevents sticking — the dough is very sticky). Place a mung-bean ball in the centre. Wrap the dough around the ball — pinch closed, smooth the surface, shape into a smooth sphere. The sphere should be: black outside, golden inside, with the dough evenly thick (5-7 mm) on all sides.

WRAP IN PYRAMID: set the filled sphere on a softened banana-leaf square. Fold the leaf up around the sphere, forming a triangular pyramid — three faces meeting at a pointed top, the base flat. Tie with twine at the base. The pyramid should stand upright on its flat base.

STEAM: set the pyramids upright in a steamer (they fit neatly — the pointed tops allow close packing). Steam over boiling water 20-25 minutes.

The cakes are done when: the banana leaf has darkened from bright green to olive (the chlorophyll has converted to pheophytin — the same conversion the lá gai's chlorophyll underwent during boiling, here happening to the banana leaf's chlorophyll during steaming), and the dough, tested by peeling a corner of one cake's leaf, is: glossy (the starch's surface has gelatinised to a smooth, shiny, almost lacquered finish), black (the colour has deepened further — the steam's heat fixes the quinone polymers into a more stable, darker state), and elastic (press with a finger — the dough yields and springs back in 2 seconds).

Cool 30 minutes. The dough firms as it cools (the amylopectin retrogrades slightly, setting the dough from soft-and-stretchy to firm-and-chewy — the same retrogradation the cơm nắm and the xôi ngũ sắc documented).`,
      tip: `The pyramid shape — three triangular faces meeting at a point — is structurally the most EFFICIENT wrapping shape for a round filling: the banana leaf, which is a flat, non-stretchy sheet, cannot conform to a sphere (it wrinkles and leaves gaps), but it CAN fold into a pyramid (three straight folds, no stretching, no gaps, the leaf's flat nature accommodated by the shape's flat faces). The pyramid is the GEOMETRIC SOLUTION to the problem of wrapping a round thing in a flat sheet, and it is the same solution the Japanese onigiri and the Chinese zongzi arrived at independently: when the wrapping is flat and the filling is round, the package is a polyhedron.`,
    },
    {
      title: 'Unwrap, bite through the black to the gold — the earth gives way to the sweet',
      description: `Unwrap the banana leaf — peel it away from the cake. The bánh ít lá gai sits on the leaf: a small, glistening, jet-black pyramid, smooth-surfaced, the leaf's vein-pattern faintly imprinted on the dough's glossy surface. The cake is beautiful in the specific way only very dark things are beautiful: it absorbs the light, it reflects nothing, and its surface seems deeper than its size — a small, black, dense, quiet object that the eye reads as "earth" and "depth" and "permanence."

Bite. The dough yields — slowly, chewily, the amylopectin network stretching under the tooth before separating. The lá gai's flavour is: faintly vegetal (the leaf's own mild taste, distributed through the dough by the pounding), faintly earthy (the tannins' astringent-but-rounded background, softened by the sugar), and faintly iron-mineral (the leaf's 5 mg/100 g iron, tasted as a subtle metallic depth beneath the sweet). The dough's texture is: chewy-elastic (the mochi-family texture — pull, stretch, yield, stick to the teeth for a moment, then release), smooth (no grains, no fibres — the 45-minute pounding eliminated everything), and dense (the leaf's fibre and the glutinous flour's starch together produce a dough that is heavier per volume than the plain xôi's air-pocketed lightness).

Then the filling arrives — the golden mung-bean centre, breached by the bite, releasing its sweet-coconut-smooth interior into the mouth alongside the black dough's chewy-mineral exterior. The contrast: black (outside) + gold (inside), chewy (dough) + smooth (filling), mineral-earthy (lá gai) + sweet-tropical (coconut + mung bean). The bite is a cross-section of the cake's architecture: earth enclosing sweetness, darkness holding light.

Bánh ít lá gai is the collection's most symbolically resonant dessert — more resonant than the xôi gấc (which carries one colour-meaning: red = luck) and more resonant than the xôi ngũ sắc (which carries five colour-meanings mapped to cosmology). The bánh ít lá gai carries ONE colour-meaning: black = earth = ancestor = depth = home. And the cake is given to the ancestors before it is eaten by the living, because the ancestors' claim is older, and the earth's colour is theirs before it is ours.

Every Bình Định person who has left the province — for Saigon, for Hanoi, for Germany, for California — knows the bánh ít lá gai by its pyramid silhouette before they see its colour, and by its colour before they taste its filling, and by its filling before they name the province it comes from. The cake IS Bình Định, in the way no other food item in this collection IS its province so completely, so exclusively, and so irrevocably. A phở belongs to Hanoi but also to the world. A bánh mì belongs to Saigon but also to everywhere. A bánh ít lá gai belongs to Bình Định and to nowhere else, and the belonging is the cake's deepest flavour.`,
      tip: `Bánh ít lá gai is the collection's deepest engagement with COLOUR AS MEANING: where the xôi gấc used red (luck, prosperity, celebration — an OUTWARD-facing colour, displayed at weddings and Tết), and the xôi ngũ sắc used five colours (cosmological completeness — a STRUCTURAL colour system, mapping the five elements), the bánh ít lá gai uses black (earth, depth, ancestor, permanence — an INWARD-facing colour, offered on the altar, consumed in memory). The three colour-cakes together form the collection's colour-theology: red for the living, five colours for the cosmos, and black for the dead. The cake's colour is not decoration. It is the cake's sermon, delivered in pigment, preached to the tongue.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
