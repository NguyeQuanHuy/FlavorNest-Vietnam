'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'che-bot-loc-heo-quay',
  title: `Chè Bột Lọc Heo Quay (Sweet Ginger Soup with Roast-Pork Tapioca Dumplings)`,
  subtitle: `Cubes of crisp-skinned roast pork sealed inside translucent tapioca dumplings and served warm in a clear ginger-sugar syrup. The most argued-about dessert in Vietnam, a genuine relic of the Nguyễn court's kitchens — and, once the shock passes, one of its most logical: candied bacon, a century early, in dumpling form.`,
  category: 'DESSERT',
  difficulty: 'Medium',
  totalTime: '1 hr 15 min',
  rating: 4.6,
  baseServings: 6,
  heroImage: '/images/recipes/che-bot-loc-heo-quay.jpg',
  intro: `Huế has more kinds of chè — the sweet soups and puddings of Vietnam — than any other city, by a margin that is not close: the standard boast is thirty-six varieties, and the boast undercounts. Corn chè, lotus-seed chè, mung bean, taro, grilled-banana, green sticky rice; a Huế chè shop is an apothecary of sweetness. And then, on every menu, sitting among the beans and the fruits like a guest from another genre, is chè bột lọc heo quay: a warm, clear, ginger-perfumed sugar syrup in which float small translucent dumplings, and inside each dumpling is a cube of heo quay — crisp-skinned Chinese-style roast pork, skin, fat, meat and all. It is a dessert with roast pork in it. First-time eaters tend to need the sentence repeated.

The dish is court food, and its logic is court logic. The Nguyễn dynasty kitchens were organized around a ruler who was served dozens of small dishes at a sitting and whose cooks competed, generation after generation, on novelty within refinement — the same institutional pressure that produced the fifty tiny bánh and the vegetable dishes carved into phoenixes. A kitchen like that eventually asks: what has never been put inside a sweet? The answer that survived is this one, and it survived because it is not actually a stunt. The combination it proposes — rich roasted pork fat, crackling skin, sugar, and ginger — is one the rest of the world keeps independently discovering and applauding: candied bacon, maple-glazed ham, Chinese char siu itself, the salted-caramel principle in porcine form. Huế simply got there earliest, committed hardest, and filed it under dessert.

Technically, the dumpling is the same bột lọc that Huế wraps around shrimp for its famous savoury version: pure tapioca starch, scalded with boiling water into a translucent, elastic, chewy dough that turns glass-clear when boiled. Tapioca is near-pure amylopectin with essentially no protein and no flavour of its own, which makes it the perfect diplomatic pouch — it neither leaks the pork's saltiness into the syrup nor lets the syrup sog the crackling, holding the two worlds a millimetre apart until the moment of the bite. The syrup itself is deliberately restrained: rock sugar for a clean, round sweetness, and a serious quantity of ginger, whose gingerol does with pork fat exactly what it does with snails and squid elsewhere in this collection — cuts, warms, and ties the richness to the sweetness so the combination reads as intentional rather than accidental.

The bowl is served warm, in small portions — this is a chè of four or five dumplings, not a sundae — often scattered with roasted sesame, and it belongs to the late afternoon, to the chè-shop hour when Huế snacks between meals. Order it once for the story; you will order it the second time for the thing itself, which is the trajectory the dish has been performing on skeptics for a hundred and fifty years. Every food culture has one dish that guards the border between sweet and savoury and dares you to cross. This is Vietnam's, and it holds the border from the sweet side.`,
  ingredientSections: [
    {
      title: 'The roast pork',
      items: [
        {
          amount: 250,
          unit: 'g',
          name: 'heo quay (crisp-skinned Chinese-style roast pork belly), bought from a good Asian barbecue shop',
          note: `Buy it — even Huế buys it, from the Chinese roast shops the dish has always depended on. You need pork belly with genuinely crisp, blistered crackling, a proper fat layer, and well-seasoned meat. Ask for a centre-cut piece and keep it uncovered so the skin stays hard. Making heo quay from scratch is a worthy project and a different recipe.`,
        },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper', note: `A light dusting over the cut cubes — the whisper of heat inside the sweet is traditional and it matters.` },
      ],
    },
    {
      title: 'The dumpling dough (bột lọc)',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'tapioca starch (bột năng), plus more for dusting',
          note: `Pure tapioca, nothing else — this is what turns glass-clear and springy-chewy when boiled. Cornstarch or rice flour will give you opaque, brittle failures.`,
        },
        { amount: 160, unit: 'ml', name: 'boiling water, approximately', note: `Genuinely boiling, poured in while it still steams hard — the scald is the technique (step 2).` },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The ginger syrup',
      items: [
        { amount: 120, unit: 'g', name: 'rock sugar (đường phèn)', note: `Rock sugar reads cleaner and rounder than granulated — in a syrup this bare there is nowhere to hide. White sugar works; the syrup will be a shade sharper.` },
        { amount: 800, unit: 'ml', name: 'water' },
        {
          amount: 50,
          unit: 'g',
          name: 'ginger, half sliced into coins and bruised, half julienned fine',
          note: `A serious amount, in two cuts: the bruised coins perfume the syrup as it simmers; the fine julienne goes in near the end and stays in the bowl as bright, edible heat. Ginger is the treaty that makes pork-in-dessert lawful.`,
        },
        { amount: 1, name: 'pinch of salt', note: `A pinch of salt in a sweet syrup sharpens the sweetness — the same reason it goes in caramel.` },
        { amount: 1, unit: 'tbsp', name: 'roasted white sesame seeds, to finish' },
      ],
    },
  ],
  steps: [
    {
      title: 'Cube the roast pork — skin on every piece, and keep it dry',
      description: `Cut the heo quay into small cubes, about 1.5 cm, making sure every cube carries its full cross-section: crackling on top, fat in the middle, meat below. Dust lightly with the black pepper.

Trim away any soft or chewy patches of skin — inside the dumpling, only genuinely crisp crackling earns its place; leathery skin becomes a wet bootlace.

Keep the cubes uncovered and bone-dry until wrapping. Moisture on the pork surface is the enemy twice over: it stops the dough sealing and it softens the crackling from outside before the syrup ever gets a chance to do it from within.`,
      tip: `The dumpling is about to perform a small feat of preservation engineering: keeping crackling crisp while surrounded by hot liquid. It can only work because tapioca dough, once boiled, is a dense, low-permeability gel — water migrates through it very slowly — and because the fat layer under the skin is itself hydrophobic armour. The system buys the crackling twenty to thirty minutes of crunch inside the syrup, which is exactly the service window of a chè shop bowl. Cut the pork wet or seal the dough badly, and the clock starts at zero.`,
    },
    {
      title: 'Scald the tapioca dough — boiling water, working fast',
      description: `Put the tapioca starch and salt in a bowl. Pour in the boiling water in a thin stream, stirring hard with chopsticks — it will seize into ragged clumps, which is correct. Add the oil, and as soon as it is cool enough to touch, knead in the bowl and then on the counter for 3-4 minutes into a smooth, warm, elastic, slightly translucent dough.

It should feel like soft putty and stretch a few centimetres before tearing. Too dry and crumbly: wet your hands and knead on. Too sticky: dust with starch a teaspoon at a time.

Work with it warm, under a damp cloth. Tapioca dough is only obedient while the scald's heat lasts; cold, it stiffens, cracks at the edges, and refuses to seal.`,
      tip: `Raw tapioca starch plus cold water makes a non-Newtonian slurry, not a dough — there is no gluten and nothing to bind. The boiling water is the binder: it pre-gelatinizes a fraction of the starch on contact, and that cooked fraction becomes the glue that holds the raw remainder in a workable, elastic mass. This scalded-starch trick (the same one behind bột lọc dumplings, some mochi, and choux pastry's cooked flour) is why the water temperature is a hard requirement. Hot-tap water gives you sand; boiling water gives you dough.`,
    },
    {
      title: 'Wrap each cube — thin, sealed, and without trapped air',
      description: `Pinch off pieces of warm dough about 15 g each. Flatten each in your palm into a disc a little wider than a pork cube, slightly thicker at the centre.

Set a cube in the middle, crackling facing your palm, and bring the dough up around it, pinching the seam closed and rolling briefly between your palms into a smooth ball. Press as you seal to expel air — a trapped bubble expands in the boil and bursts the dumpling.

The wrap should be thin — 2-3 mm — with the pork's shadow just visible through the raw dough. Thick wraps boil up gummy and bury the pork; thin ones turn to glass. Wrap all of them before boiling any, and keep the finished balls under the damp cloth.`,
      tip: `Translucence is the aesthetic contract of this dessert: the diner must be able to see the dark cube of pork suspended inside the clear dumpling, floating in clear syrup — the surprise is displayed, not hidden. That visibility depends entirely on wrap thickness, because tapioca gel is glass-clear at 2 mm and cloudy at 6. The Nguyễn court kitchens plated for the eye first, and this dish, even in its street-shop afterlife, is still judged the moment the bowl lands: if you cannot see the pork, the wrapping was too timid.`,
    },
    {
      title: 'Simmer the ginger syrup, then boil the dumplings in water — separately',
      description: `Simmer the water, rock sugar, bruised ginger coins and pinch of salt for 15 minutes, until the syrup is fully clear and unmistakably gingered. Fish out the coins, add the fine julienne, and hold the syrup at the barest simmer.

In a separate large pot of plain boiling water, boil the dumplings in batches, 6-8 minutes each: they sink, then rise, then turn from opaque white to fully translucent — give them 2 more minutes after they clear. Lift them with a spider, dip briefly in cool water so they release each other, and slide them straight into the warm syrup.

Never boil the dumplings in the syrup itself. They shed a film of starch as they cook, and a clear ginger syrup clouded with tapioca wash is the amateur signature of this dish.`,
      tip: `The float-then-clear sequence is the dumpling reporting its own state twice. It floats when the interior air and steam expand enough to lower its density below water — a rough doneness bell. It clears when the starch has fully gelatinized: raw granules scatter light, cooked gel transmits it, so translucence is literally the sight of the last starch finishing. The same two signals govern every tapioca and glutinous dumpling in this collection, from bánh ram ít to bánh bột lọc — the dough tells you; the clock only estimates.`,
    },
    {
      title: 'Serve warm, small, sesame on top — and let the bite argue for itself',
      description: `Ladle 4-5 dumplings into each small bowl with enough warm syrup to float them, making sure each bowl gets its share of ginger julienne. Scatter roasted sesame over the top.

Serve warm — never cold. Chilled, the tapioca stiffens toward rubber, the pork fat waxes, and the whole argument collapses. Warm, the dumpling is at peak chew, the fat at peak silk, the ginger at peak lift.

Instruct the skeptics only this far: one whole dumpling, one bite, syrup and all. The sequence inside — cool slick tapioca, then the give of hot fat, then crackling, then salt blooming into the ginger-sugar — happens in about two seconds and does its own persuading. Eat within twenty minutes; the crackling's clock is running from the moment the syrup touches the dumpling.`,
      tip: `Why the combination works is worth stating plainly, because the dish gets treated as a dare when it is really a proof. Fat carries and prolongs sweetness on the palate (every pastry knows this); salt sharpens sugar's perception (every caramel knows this); roasted Maillard flavours are chemically at home in desserts (coffee, chocolate, dulce de leche); and gingerol cleans up the finish so richness never stalls into cloying. Char siu glaze, candied bacon, maple ham — the world keeps ratifying the same treaty from the savoury side. Chè bột lọc heo quay is the only signatory that filed from the sweet side, a royal kitchen's century-early wager that the border was imaginary. It was.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
