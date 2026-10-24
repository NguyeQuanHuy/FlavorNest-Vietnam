'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-te-lang-cho',
  title: `Bánh Tẻ Làng Chờ (Plain-Rice Leaf Cakes of Chờ Village)`,
  subtitle: `Soaked plain rice — not glutinous — ground wet into a batter and cooked slowly on the stove until it sets into a firm, sliceable, translucent gel, wrapped around a filling of seasoned pork and wood ear in dong leaf and steamed. The one Vietnamese cake made from ordinary rice, from the one village in Bắc Ninh that has made it longer than anyone can date.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '3 hr',
  rating: 4.8,
  baseServings: 6,
  heroImage: '/images/recipes/banh-te-lang-cho.jpg',
  intro: `Làng Chờ — Chờ village, in Yên Phong district — sits on the road between Bắc Ninh city and Hanoi, and it has been making one cake for so long that the village and the cake are synonymous: say bánh tẻ to anyone in the Red River Delta and they will say làng Chờ, the way saying Champagne says France. The cake is a paradox in a cuisine that runs on glutinous rice: it is made from gạo tẻ, ordinary plain rice, the rice you cook for dinner, which every other Vietnamese cake ignores in favour of the sticky, chewy, cohesive nếp. Bánh tẻ is what happens when a village decided that plain rice could also be a cake — and proved it, by grinding the rice to a slurry, cooking the slurry into a gel, wrapping the gel around a filling, and steaming it in dong leaf until it emerged as something that no other rice product in the country can be confused with: firm, smooth, faintly translucent, sliceable with a knife, and with a clean, pure, unsweetened rice flavour that tastes of nothing but the grain.

The technique is the recipe's central intelligence and it is worth understanding because it explains why nobody else does this. Glutinous rice is nearly pure amylopectin — branched starch — and when cooked it forms a soft, cohesive, sticky, elastic mass that holds any shape you press it into: the ideal cake material. Plain rice is roughly 20-25% amylose — linear starch — and amylose behaves completely differently: cooked, it sets into a rigid, crumbly, crystalline gel that shatters rather than bends. A plain-rice cake, by every rule, should be chalk.

Làng Chờ solved this by cooking the batter before wrapping, not after. The soaked rice is ground wet into a very fine, smooth slurry, then cooked over low heat in a pot, stirring constantly, for 20-30 minutes — the same laborious stove-top gelatinization as a pastry cream or a polenta — until it transforms from a thin white liquid into a thick, smooth, glossy, translucent paste that pulls away from the pot in one mass. This slow, hydrated, stirred gelatinization does something that simple boiling or steaming cannot: it fully hydrates and disperses the amylose chains before they can retrograde into a crystalline network, producing a gel that is firm but not crumbly, smooth but not sticky, and translucent rather than opaque. The paste is then wrapped around the filling in dong leaf and steamed, which sets it into its final form without the shock-crystallization that would ruin it.

The filling is plainly northern: minced pork with some fat, wood ear mushroom for texture, black pepper for warmth, fish sauce for salt, shallot for sweetness. Nothing surprising, nothing elaborate — the filling is a vehicle for the dough, not the other way around. The dong leaf — lá dong, Phrynium placentarium, the broad, waxy-surfaced wrapping leaf of the north — contributes its own quiet perfume to the surface of the cake during the steam, a green, faintly vanilla note that is different from banana leaf's and that the northern palate recognises instantly.

The finished cake is sliced into rounds 1.5 cm thick, revealing a cross-section of pale, translucent, faintly green-grey dough with a dark filling at its core, and it is eaten at room temperature — dipped in fish sauce with a few drops of lime, or, for the Bắc Ninh original, with nothing at all. Its texture in the mouth is unlike any other rice product: firm enough to resist the tooth, smooth enough to feel almost gelatinous, dense enough to chew, and clean enough that the finish is simply rice. No sugar, no coconut, no fat in the dough — just rice, water, time and stirring. It is the most minimal cake in the Vietnamese canon, and it requires the most patience of any in it.`,
  ingredientSections: [
    {
      title: 'The dough',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'plain long-grain rice (gạo tẻ), NOT glutinous',
          note: `Ordinary rice — the rice you eat with dinner. Soaked overnight (8-12 hours) until a grain crushes easily between two fingers, then ground wet into the smoothest possible slurry. A high-powered blender with water does this well; a Vietnamese wet-grinder is ideal. The slurry must be grind-smooth, with no grit between your fingertips — any residual grain fragments show up as chalky specks in the finished cake and ruin the translucence.`,
        },
        { amount: 400, unit: 'ml', name: 'water (for grinding — adjust to achieve a smooth, pourable slurry)' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil', note: `Stirred into the cooked paste at the end — it glosses the dough, keeps it workable, and helps the finished cake release from the leaf.` },
      ],
    },
    {
      title: 'The filling',
      items: [
        { amount: 300, unit: 'g', name: 'minced pork (roughly 20-25% fat)', note: `Fat is structural — it keeps the filling moist through the double cooking (stir-fry then steam) and gives richness against the austere dough.` },
        { amount: 20, unit: 'g', name: 'dried wood ear mushroom (mộc nhĩ), soaked and finely chopped', note: `The textural crunch inside the soft filling — the same rubbery snap it contributes to every northern spring roll and every Huế dumpling.` },
        { amount: 4, name: 'shallots, finely minced' },
        { amount: 2, name: 'cloves garlic, minced' },
        { amount: 1.5, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The wrapping',
      items: [
        {
          amount: 14,
          name: 'pieces of lá dong (Phrynium placentarium), about 25 x 15 cm, softened',
          note: `The northern wrapping leaf — broad, waxy, pliable, with a quiet green-vanilla perfume it gives to the cake during the steam. Sold frozen in Vietnamese groceries in Europe. If unavailable: banana leaf softened over a flame is the honest substitute, though its perfume is different and more tropical. Aluminium foil is the emergency fallback that contributes nothing but does no harm.`,
        },
        { amount: 14, name: 'strips of bamboo string or kitchen twine' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 1, name: 'small bunch of coriander or rau răm (optional)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Soak overnight, grind smooth — the slurry must be silk',
      description: `Rinse the rice and soak in plenty of cool water for 8-12 hours — overnight is the Chờ timing. By morning a grain should crush to powder between two fingers with no hard core.

Drain the rice and blend with 400 ml fresh water in a high-powered blender for a full 3-4 minutes — until the slurry is absolutely smooth, white, and leaves no grit between your fingertips when rubbed. Test a drop between thumb and forefinger, searching for any grain fragment. If you find one, blend longer.

A gritty slurry makes a gritty cake, and the translucence that defines bánh tẻ depends on complete dispersal of the starch: any intact grain fragment scatters light, shows up as an opaque fleck in the finished gel, and ruins the smooth, clean, almost glass-like quality the dough should have. Three minutes of blending is the minimum. Four is safer.`,
      tip: `Overnight soaking does chemical preparation that no amount of grinding can replicate: the water penetrates the grain's protein matrix and loosens the bonds holding the starch granules in place, so the blender can liberate them fully rather than merely cracking the grain into particles. A rice soaked four hours grinds to a gritty slurry; one soaked twelve hours grinds to silk. The soak is doing the first half of the dispersal, and the blender finishes what the water started. Shortcut either and the starch stays partially locked, the gel sets cloudy, and the cake tastes of raw flour at its centre.`,
    },
    {
      title: 'Cook the slurry on the stove — 25 minutes of constant stirring, and no shortcuts',
      description: `Pour the slurry into a heavy-bottomed pot with the salt. Set over medium-low heat and begin stirring with a wooden spatula — and do not stop. Stir continuously, scraping the bottom and the edges, for 25-30 minutes.

The slurry will go through stages. Minutes 1-8: it warms, stays liquid, begins to thicken imperceptibly. Minutes 8-15: it thickens visibly, goes from white-opaque to ivory, and resists the spatula. Minutes 15-22: it crosses a threshold — suddenly it goes from thick to very thick, clears from ivory to faintly translucent, and starts pulling away from the pot walls in a cohesive mass. Minutes 22-28: the paste is smooth, glossy, strongly translucent, and wraps around the spatula in one mass when lifted. This is the endpoint.

Take it off the heat. Knead in the oil on an oiled surface for 2 minutes — working quickly while it is warm and pliable. Cover with oiled cling film. The paste stiffens as it cools but remains workable for about 30 minutes.

Do not be tempted to skip this step and steam raw slurry in the leaf, which would seem simpler and is what anyone unfamiliar with bánh tẻ would try. Raw slurry steamed directly sets into an opaque, crumbly, chalky mass — the amylose crystallizes before it can hydrate fully — and the result is not a cake but a rice-flavoured brick. The stove-top cooking is the technique, and the technique is not optional.`,
      tip: `Here is the science that Chờ village figured out empirically and that makes their cake unique in the Vietnamese canon. Amylose — the linear starch that makes up 20-25% of plain rice — has a strong tendency to retrograde: its chains align, hydrogen-bond, and crystallize into a rigid, opaque, crumbly network (which is why leftover plain rice goes hard in the fridge). Cooking the slurry slowly, with constant stirring, fully hydrates and disperses the amylose chains in excess water BEFORE they can find each other and crystallize. Once fully dispersed, the amylose sets into an amorphous, transparent, smooth gel rather than a crystalline, opaque, crumbly one. The slow stirring is what gives each chain enough time and water to hydrate completely — fast heating or unstirred heating leaves pockets of dry starch that crystallize on cooling and show up as white, chalky zones in the cake. Twenty-five minutes of stirring is not patience for its own sake. It is the time the starch needs to hydrate fully, and fully hydrated amylose is the only amylose that sets clear.`,
    },
    {
      title: 'Cook the filling — dry, fast, well-peppered',
      description: `Heat the oil in a wok, fry the shallots and garlic until fragrant and golden. Add the pork and stir-fry 3-4 minutes over high heat, breaking it fine. Add the wood ear, fish sauce, sugar and pepper and fry 2 more minutes until the pan is dry and the filling is aromatic, cohesive and crumbly — no pooling liquid.

Cool completely. A warm filling softens the dough around it and the cake slumps.

Taste it: savoury, well-peppered, faintly sweet from the shallot, with the wood ear contributing a pleasant squeak. The filling's job is to be punchy enough to register through the deliberately neutral dough, and pepper is its voice.`,
      tip: `The filling is cooked before wrapping for the same food-safety reason that governed the bánh ram ít and the bánh trứng kiến: the dough surrounding it is already cooked, and the final steaming is only long enough to fuse the leaf to the dough and set the shape — not long enough to cook raw pork to safety through a dense starch insulation. Pre-cooked filling, pre-cooked dough, and a steam that seals rather than cooks: every component arrives at the steamer already done, and the steamer is a finishing tool, not a cooking one.`,
    },
    {
      title: 'Wrap in dong leaf — long and thin, tied at both ends',
      description: `Take a piece of the warm dough (about 50 g), flatten it in your oiled palm into an oval about 10 x 7 cm and 4-5 mm thick. Lay a tablespoon of filling along the centre. Fold the dough over the filling lengthwise and press the edges to seal — forming a long, thin, stuffed cylinder about 12 cm long and 3 cm in diameter.

Lay the cylinder on a dong leaf, roll the leaf around it once, fold the ends under, and tie at both ends and the middle with bamboo string. The parcel should be snug — tight enough that the dough compresses slightly and no air pocket remains between dough and leaf.

Steam 20-25 minutes over hard-boiling water. The dong leaf darkens, the dough sets to its final firm, translucent state, and the leaf's perfume infuses the surface. Cool to room temperature before unwrapping — 1 hour minimum. Warm bánh tẻ is slack; at room temperature it firms to its proper dense, smooth, almost-glassy set.`,
      tip: `The dong leaf's contribution is aromatic and structural. The perfume: dong leaf carries coumarin and green-herbaceous volatiles that migrate into the dough's moist surface during the 20-minute steam, giving the cake a faint, distinctly northern-Vietnamese scent that banana leaf does not replicate. The structure: dong leaf's waxy cuticle releases cleanly from the set dough, leaving a smooth, glossy surface — where a rougher leaf would tear and leave fibres embedded. The combination of perfume and release is why the north wraps everything ceremonial in dong leaf (bánh chưng, bánh tẻ, bánh gai), and it is why the leaf is not packaging but an ingredient.`,
    },
    {
      title: 'Unwrap, slice, dip — and taste the rice',
      description: `Unwrap the cooled cake from its leaf. It should be a smooth, firm, faintly translucent, pale cylinder with a dark filling visible at its centre. Slice into rounds 1.5 cm thick with a wet knife — the starch clings to a dry blade.

The cross-section is the sight: a ring of clean, slightly grey-translucent dough with the dark, pepper-flecked filling at its heart. The dough should look almost glassy — not opaque white, not chalky — and should hold its shape on the plate without slumping.

Serve at room temperature with a saucer of fish sauce, lime juice and sliced chili. Dip each round lightly — the dip is a brightener, not a bath. Or, for the Làng Chờ purist: eat it plain, with nothing, and taste only the rice. The dough tastes of rice and time and stirring. Nothing else was ever in it, and nothing else was ever needed.

Keeps 2 days at room temperature in its leaf. Refrigerating hardens the amylose to chalk — the same retrogradation the cooking was designed to prevent. Room temperature, in the leaf, eaten within two days: the format is the preservation, and it is enough.`,
      tip: `Bánh tẻ is the plainest cake in this collection and possibly the plainest in Vietnamese cooking, and its plainness is the message. A dough of rice, water, salt and oil, made transparent by nothing but patience, wrapped in a leaf and served with nothing but fish sauce: it is the cake that proves ordinary rice — the daily grain, the unremarkable staple, the thing every Vietnamese person eats three times a day without noticing — can also be extraordinary, if the cook is willing to stand at the stove for twenty-five minutes and stir. The village that made this cake chose the most common ingredient in the country and said: this is enough. One ingredient, one technique, one cake. Làng Chờ has been right for as long as anyone can remember.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
