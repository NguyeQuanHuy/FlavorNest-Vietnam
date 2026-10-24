'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-tam-bi-tra-vinh',
  title: `Bánh Tằm Bì Trà Vinh (Silkworm Noodles with Pork Skin, Coconut Cream and Xíu Mại)`,
  subtitle: `Fat, tangled, hand-rolled rice noodles named after the silkworms they resemble — short, stubby, chewy and deliberately irregular — piled with shredded pork skin in toasted rice powder, a ladleful of warm coconut cream, pork meatballs in tomato sauce, and a scatter of herbs. The Mekong Delta's most texturally eccentric noodle dish, and Trà Vinh's answer to cơm tấm.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '2 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-tam-bi-tra-vinh.jpg',
  intro: `Bánh tằm bì is the dish that confuses visitors from every other region of Vietnam, because it breaks so many rules at once that it takes a moment to understand that the rules it is following are its own. The noodle is wrong by every standard: short instead of long, thick instead of thin, tangled instead of neat, and deliberately irregular in diameter so every strand has a different chew — fat at one end, tapered at the other, twisted in the middle. They are hand-rolled, one by one, by pressing a piece of rice dough between the palms and letting it worm outward in a lopsided, caterpillar-like crawl that gives the noodle its name: tằm means silkworm, and the noodle looks exactly like one. Then the toppings arrive in a combination that no other Vietnamese plate would tolerate: cold shredded pork skin tossed in toasted rice powder (the bì), warm coconut cream ladled like a sauce, pork meatballs braised in a Vietnamese-Chinese tomato-and-soy gravy (the xíu mại), sliced cucumber, pickled vegetables and fresh herbs. Cold, warm, hot, sweet, savoury, sour, crisp, chewy, slippery — all on one plate, deliberately clashing, deliberately good.

The dish belongs to the Mekong Delta and specifically to the provinces where Khmer and Chinese and Vietnamese kitchens have been borrowing from each other long enough that nobody remembers who brought what. The coconut cream is Khmer, arriving from the same coconut groves that supply the bún nước lèo and the cốm dẹp. The xíu mại is Teochew Chinese — a Cantonese-adapted meatball that migrated south with the Hoa community and settled into the Delta's repertoire centuries ago. The bì is Vietnamese through and through — the same toasted-rice-powder-dressed pork skin that appears on cơm tấm in Saigon and in the Trảng Bàng rolls. And the noodle is simply the Delta, which has always preferred its rice starch in shapes that the north considers crude and that the Delta considers honest.

What makes the plate work, despite its improbable ingredient list, is that every component solves a problem the others create. The coconut cream is rich and faintly sweet — the bì's dry, savoury, rice-powder crunch balances it. The xíu mại's tomato sauce is tangy and warm — the noodle's bland chew absorbs it. The cucumber and pickles cut through the cream's fat. The herbs lift what the cream weighs down. No single element is remarkable alone; the plate is an argument made by six witnesses, and the argument only holds if they all speak.

Trà Vinh has the strongest claim to the dish, though Bến Tre and Vĩnh Long also make versions. The Trà Vinh plate is the most loaded and the most Khmer-inflected — more coconut cream, a denser bì — and it is the version this recipe documents. It is a breakfast and a lunch, sold at market stalls from five in the morning, and it is the plate a Trà Vinh person will describe to you if you ask what they eat when they are not eating bún nước lèo. Two soups and a dry plate: a three-dish portfolio that covers every meal of the day, and that is more than most provinces manage.`,
  ingredientSections: [
    {
      title: 'The bánh tằm noodles',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'rice flour (bột gạo)',
          note: `Plain rice flour, not glutinous.`,
        },
        {
          amount: 80,
          unit: 'g',
          name: 'tapioca starch (bột năng)',
          note: `Roughly 25% — gives the noodle its slippery chew and its slight translucency. Without it, the noodle is brittle and chalky.`,
        },
        { amount: 280, unit: 'ml', name: 'boiling water, approximately' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The bì (pork skin in roasted rice powder)',
      items: [
        {
          amount: 250,
          unit: 'g',
          name: 'pork skin (bì heo)',
          note: `Boiled 25-30 minutes until completely soft, chilled in iced water, then shaved into the finest possible ribbons. The same bì this collection has dressed in Trảng Bàng and Bến Có — same technique, same thính, same rule: cold for clean cutting, room temperature for correct chew.`,
        },
        { amount: 2, unit: 'tbsp', name: 'thính (roasted rice powder)' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The coconut cream sauce',
      items: [
        {
          amount: 400,
          unit: 'ml',
          name: 'coconut cream (the thick top layer of a can, or fresh squeezed)',
          note: `Full-fat, thick, pourable but not thin — closer to heavy cream than to coconut milk. This is ladled warm over the plate as a sauce, not stirred into anything, and its richness is the plate's central axis. Thin coconut milk is the wrong product and the dish will taste flat.`,
        },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, unit: 'tbsp', name: 'rice flour, slaked in 2 tbsp water (optional)', note: `Some stalls thicken the cream slightly so it clings to the noodles rather than pooling at the bottom. Optional but practical.` },
      ],
    },
    {
      title: 'The xíu mại (pork meatballs in tomato sauce)',
      items: [
        { amount: 300, unit: 'g', name: 'minced pork (roughly 20% fat)' },
        { amount: 3, name: 'shallots, half minced for the meatballs, half sliced for the sauce' },
        { amount: 2, name: 'cloves garlic, minced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, unit: 'tbsp', name: 'tapioca starch', note: `Binds the meatball and gives it a faint bounce.` },
        { amount: 3, name: 'ripe tomatoes, diced, or 200 ml canned crushed tomato' },
        { amount: 1, unit: 'tbsp', name: 'tomato paste' },
        { amount: 1, unit: 'tbsp', name: 'soy sauce' },
        { amount: 200, unit: 'ml', name: 'water' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The plate garnish',
      items: [
        { amount: 1, name: 'cucumber, sliced thin on the bias' },
        { amount: 100, unit: 'g', name: 'đồ chua (quick-pickled carrot and daikon)' },
        { amount: 50, unit: 'g', name: 'rau răm and húng quế, roughly torn' },
        { amount: 2, unit: 'tbsp', name: 'fried shallots' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 1, name: 'saucer of fish sauce with chili and lime' },
      ],
    },
  ],
  steps: [
    {
      title: 'Roll the silkworms — one by one, irregular on purpose',
      description: `Mix the rice flour, tapioca starch and salt. Pour in the boiling water gradually, stirring hard. Add the oil and knead 5 minutes into a smooth, firm, faintly translucent dough — the same scalded dough this collection has made for every bánh canh, and the same earlobe-softness test applies.

Pinch off pieces of about 10 g. Roll each between your palms in a loose, slightly uneven back-and-forth motion to produce a short, fat, irregular worm — 6-8 cm long, thicker in the middle, tapered at the ends, with a slight twist. This irregular shape is the format and the point: every strand has a different diameter and therefore a different chew, and a bowlful of them eats with a textural variety that uniform noodles cannot match.

Lay them on an oiled tray without touching. Steam 12-15 minutes over hard-boiling water until translucent through, or boil 4-5 minutes until they float and clear. Toss with a spoonful of oil so they do not weld.`,
      tip: `The irregular shape is not carelessness elevated to tradition — it is a genuine textural choice with a physical basis. In a uniform noodle, every bite delivers the same resistance; in a tapered one, the thin end gives first, the thick middle resists, and the fat centre requires a second chew. That variation across a single strand stimulates the jaw differently with every bite, which is why a plate of bánh tằm feels more interesting in the mouth than the same dough cut into even strips would. The silkworm shape is an ergonomic decision at the scale of a tooth.`,
    },
    {
      title: 'Make the bì — shave, toss, and keep it cool',
      description: `Boil the pork skin 25-30 minutes until a fingernail pressed into it leaves a deep, easy dent. Plunge into iced water 10 minutes. Shave into the finest possible ribbons — translucent, flexible, nearly hair-thin.

Toss with the thính, sugar and salt until every ribbon wears a matte dry coat and the ribbons separate cleanly. Hold at room temperature under a cloth.

The bì is the dry, savoury, nutty pole of the plate — the counterweight to the wet, sweet, rich coconut cream on the other side. Its toasted-rice crunch is what stops the plate from sliding into cloying. Every component on this plate has a nemesis on the same plate, and the bì's nemesis is the cream.`,
      tip: `This is the fourth appearance of bì in this collection — Trảng Bàng's bánh canh, Trảng Bàng's phơi sương, Bến Có's bánh canh, and now here — and the technique has not changed once, because it does not need to. Collagen skin, boiled to gel, chilled to set, shaved to ribbons, tossed in thính: the same four steps everywhere, the same three functions (chew, crunch, dry-seasoning-carrier), adapted to a different plate each time. Bì is a module — a standalone component that plugs into any southern Vietnamese dish that needs a textural third dimension — and the Delta deploys it with the confidence of a cook who knows the module works.`,
    },
    {
      title: 'Braise the xíu mại — meatballs in tomato sauce, 20 minutes',
      description: `Mix the pork, minced shallot, half the garlic, fish sauce, pepper, sugar and tapioca starch in one direction for 60 seconds until cohesive. Roll into balls of about 20 g — small, one-bite.

Fry the remaining sliced shallot and garlic in the oil until fragrant. Add the tomato paste, fry 1 minute. Add the diced tomatoes, soy sauce, a pinch of sugar and the water. Simmer 5 minutes.

Lower the meatballs into the simmering sauce and braise 15-18 minutes, turning once, until cooked through, glossy and coated. The sauce should reduce to a thick, tangy, glossy gravy that clings to the balls.

The xíu mại is the warm, savoury, acidic element on the plate — its tomato tang is what cuts the coconut's fat from the other direction while the bì cuts it from the dry side. Two different acids (fruit acid from tomato, tannin-acid from thính) attacking the same richness from two different flanks.`,
      tip: `Xíu mại is the Teochew-Chinese meatball that migrated south with the Hoa diaspora and settled into the Delta's repertoire as a naturalised citizen — the same way char siu became xá xíu and wonton became hoành thánh. The tomato sauce is the Vietnamese adaptation: Teochew originals are braised in soy-based liquids, but the Delta's fondness for sweet-sour and its access to cheap tomatoes swung the sauce toward the Italian end of the spectrum, producing a meatball-in-red-sauce that is recognisably neither Chinese nor Vietnamese but specifically Delta-Chinese-Vietnamese — a dish that exists only in the contact zone, and that both cultures claim without either being quite right.`,
    },
    {
      title: 'Warm the coconut cream — and pour it like a sauce, not a dressing',
      description: `Heat the coconut cream with the salt and sugar in a small saucepan over low heat, stirring, until warm and uniform — not hot, not simmering, just blood-warm. If thickening, stream in the slaked rice flour and stir until the cream coats a spoon lightly.

The cream should be pourable but not thin — the consistency of a warm crème anglaise. Too thick and it sits on the plate in a lump; too thin and it runs to the edges and pools without coating anything.

This is ladled over the plated noodles as the last wet element, after the bì and before the xíu mại, so it touches everything and coats the tằm.`,
      tip: `Coconut cream as a warm sauce over a dry noodle plate — rather than cooked into a broth or stirred into a curry — is the Khmer contribution to this dish and it is unique in the Vietnamese noodle canon. It functions like a béchamel functions on pasta: a rich, lipid-based, lightly sweetened coating that binds the dry components (bì, noodles) into a single mouthful and carries their flavours across the tongue in a fat-soluble matrix. No Vietnamese dish outside the Khmer-influenced provinces uses coconut this way — as a table sauce rather than a cooking medium — and it is the single element that makes bánh tằm bì impossible to confuse with any other noodle plate in the country.`,
    },
    {
      title: 'Plate the chaos — and understand that the chaos is the composition',
      description: `On a wide plate or a shallow bowl: a mound of the silkworm noodles in the centre, oiled and warm. A generous handful of bì draped over one side. A ladleful of warm coconut cream poured over the noodles and the bì. Two or three xíu mại with their tomato sauce spooned on the other side. Sliced cucumber, pickled vegetables and torn herbs scattered wherever they fit. Fried shallots and chili on top.

The plate looks, and is meant to look, like a composition by someone who valued abundance over order. White noodles, tan bì, ivory cream, red meatball sauce, green herbs, orange pickles — six colours, six textures, six flavour registers, no two of them in agreement, all of them necessary.

Eat by mixing: drag the spoon through everything on the plate so each bite carries noodle, cream, bì, a sliver of cucumber and a fragment of xíu mại. The plate is not a composed arrangement to be deconstructed. It is a deliberate tangle to be deliberately tangled further. The order was never the point. The collision was.`,
      tip: `Bánh tằm bì is the Delta's cơm tấm — a plate where multiple independently-prepared components are arrayed on a single surface and the eater's spoon is the final mixing tool — and the comparison is exact. Cơm tấm has broken rice, bì, a fried egg, grilled pork, pickles and nước mắm; bánh tằm bì has silkworm noodles, bì, coconut cream, xíu mại, pickles and herbs. Same architecture, different ingredients, same instruction to the eater: mix everything, and the plate's balance will emerge from the mixing. It is a format that trusts the eater to find the right ratio, rather than imposing one — and that trust is the southern table's defining gesture. The north portions; the centre arranges; the south piles it up and hands you the spoon.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
