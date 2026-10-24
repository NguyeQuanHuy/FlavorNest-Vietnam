'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'xoi-gac',
  title: `Xôi Gấc (Red Sticky Rice with Spiny Bitter Gourd)`,
  subtitle: `Glutinous rice — soaked overnight in the vivid red, lycopene-saturated pulp of the gấc fruit — steamed until every grain is a deep, glossy, blood-red jewel glistening with coconut milk. The rice the Vietnamese serve at weddings and at Tết, because red is the colour of luck, of prosperity, of celebration, and because no other grain on the table glows like this one.`,
  category: 'DESSERT',
  difficulty: 'Easy',
  totalTime: '12 hr + 45 min',
  rating: 4.9,
  baseServings: 8,
  heroImage: '/images/recipes/xoi-gac.jpg',
  intro: `Gấc — Momordica cochinchinensis, the spiny bitter gourd, the sweet gourd, the baby jackfruit — is a vine fruit that grows throughout tropical Vietnam and whose ripe seed arils contain the highest concentration of lycopene of any known food: roughly 70 times more lycopene per gram than a tomato, and roughly 10 times more beta-carotene than a carrot. The arils — the soft, oily, vivid-red membranes that surround each seed inside the ripe fruit — are the dye, the fat and the flavour agent that transform a pot of white glutinous rice into the luminous, deep-red, ceremonial xôi gấc.

The fruit is seasonal: ripe gấc appears at Vietnamese markets from November through January, peaking in December — which is why xôi gấc is the Tết rice (Tết falls in late January or February, and the gấc harvest precedes it by weeks, providing the red colour for the New Year's table). The timing is not coincidence — the festival and the fruit co-evolved in the culture's calendar, and the ripe gấc IS the announcement that Tết is coming, the same way the mùa cá linh flood season IS the announcement that the Delta's abundance is arriving.

The red colour is symbolic and non-negotiable: red (đỏ) is the colour of luck, prosperity, joy and celebration in Vietnamese (and broader East Asian) culture, and the xôi gấc's vivid, deep, blood-red grain is the most intensely coloured food on the celebration table — more red than any chili, any tomato, any beetroot. The colour comes from the lycopene and the beta-carotene in the arils, both of which are fat-soluble carotenoids that dissolve into the coconut milk (which provides the fat vehicle) and then absorb into the glutinous rice's amylopectin matrix during the overnight soak. The result: each grain is dyed RED from surface to centre, and the dye is permanent — it does not wash off, does not fade during steaming, and does not bleed onto the plate. The grain IS red, not coated in red.

The coconut milk is the second essential ingredient: its fat dissolves the carotenoids (which are fat-soluble and would not absorb into the rice from a water-only soak), enriches the steamed rice with a creamy, tropical richness, and gives each grain a glossy, glistening surface that catches the light. Xôi gấc without coconut milk is pale, dry and matte; xôi gấc with coconut milk is deep, rich and luminous. The fat is the colour's vehicle and the rice's luxury.

Xôi gấc appears at: weddings (on a tray at the entrance, scooped into small bowls for each guest), Tết (on the ancestor altar and on the family table), baby's one-month celebration (đầy tháng), and any occasion where red = luck is the message. It is never eaten as a casual meal. It is always eaten as a symbol, and the symbol is always: this table is blessed, this occasion is joyous, and this rice is the colour of the joy.`,
  ingredientSections: [
    {
      title: 'The rice',
      items: [
        { amount: 1, unit: 'kg', name: 'glutinous rice (nếp), soaked 4-6 hours, drained', note: `The same nếp as the cơm lam, the xôi ngũ sắc and every glutinous-rice preparation in the collection. Soak 4-6 hours minimum (not overnight — the gấc soak comes next, and the total soaking must not exceed 16 hours or the grains become too soft to steam properly).` },
      ],
    },
    {
      title: 'The gấc',
      items: [
        {
          amount: 1,
          name: 'ripe gấc fruit (about 500-700 g), or 200 g frozen gấc arils',
          note: `RIPE: the fruit is round, 10-15 cm diameter, covered in small spines, and turns from green to vivid orange-red when ripe. Cut open: inside are rows of seeds, each surrounded by a soft, oily, vivid-red aril. Scoop out the arils (and the seeds — the seeds are discarded or used in other preparations). Mash the arils thoroughly with 2 tablespoons of rice wine (the alcohol helps extract the fat-soluble carotenoids). FROZEN gấc arils: available year-round at Vietnamese groceries — thaw, mash, use directly. If entirely unavailable: NO true substitute exists for the colour and the nutrition. Tomato paste (3 tbsp) + annatto oil (1 tbsp) produces a red colour from different pigments (lycopene from tomato + bixin from annatto) but lacks the gấc's specific fat-rich, beta-carotene-dense profile.`,
        },
        { amount: 2, unit: 'tbsp', name: 'rice wine (rượu trắng)', note: `Mixed into the mashed arils — the ethanol acts as a solvent that extracts the fat-soluble carotenoids more efficiently than water alone.` },
      ],
    },
    {
      title: 'The coconut milk and seasoning',
      items: [
        { amount: 200, unit: 'ml', name: 'coconut milk (full-fat)', note: `The fat vehicle — dissolves the carotenoids and carries them into the rice. Also enriches the finished xôi with creamy richness.` },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
      ],
    },
  ],
  steps: [
    {
      title: 'Mash the gấc arils, mix with drained rice and coconut milk — soak 8-12 hours',
      description: `Mash the gấc arils (fresh or thawed) thoroughly with the rice wine — break every membrane, release every drop of the vivid-red, oily liquid. The mashed arils should be: uniformly red, oily, fragrant (gấc arils smell faintly of tomato and of tropical fruit), and liquid enough to pour.

Combine the drained, pre-soaked glutinous rice with the mashed gấc arils, the coconut milk, salt and sugar in a large bowl. Mix thoroughly — every grain must contact the red liquid. The mixture should be: uniformly vivid red (no white grains visible — white grains become pale patches in the finished xôi, and pale patches are the quality failure the cook is judged on).

Cover and soak 8-12 hours (overnight). During the soak, the rice's amylopectin absorbs the dissolved carotenoids from the gấc-coconut-liquid into its starch matrix — the same dye-absorption mechanism the xôi ngũ sắc used with its five colours, here applied with one colour at maximum saturation.

In the morning: the rice grains should be: uniformly deep red from surface to centre (break one — the centre should be red, not white), swollen (the starch has absorbed the liquid), and the bowl should have almost no free liquid remaining (the rice has drunk everything).`,
      tip: `The rice wine's ethanol is doing a specific extraction job: lycopene and beta-carotene are fat-soluble but not water-soluble, and they dissolve more readily in ethanol than in water (ethanol's partial non-polarity matches the carotenoids' hydrophobic structure). The rice wine's 25-30% ethanol content provides enough solvent power to extract the carotenoids from the aril's cell membranes into solution, where the coconut milk's fat then absorbs them. Without the rice wine, the extraction is slower and less complete, and the finished xôi is paler. The rice wine is the extraction catalyst, and the 2-tablespoon dose is calibrated to maximise extraction without making the rice taste of alcohol (the ethanol evaporates during steaming).`,
    },
    {
      title: 'Steam 30-35 minutes — the red deepens, the coconut glistens',
      description: `Line a steamer tier with cheesecloth. Spread the gấc-soaked rice in an even layer, 3-4 cm thick (not thicker — thick layers steam unevenly, producing a wet bottom and a dry top). Poke 4-5 steam holes through the rice with a chopstick — the holes allow steam to rise through the mass and cook the rice from below as well as from above.

Steam over hard-boiling water for 30-35 minutes. At 15 minutes: lift the lid briefly and sprinkle 2-3 tablespoons of the remaining gấc-coconut liquid (if any) or plain coconut milk over the surface — the re-moistening ensures the top layer stays glossy and does not dry to a crust.

The rice is done when: every grain is translucent (the starch is fully gelatinised), the colour has deepened from the raw soak's bright red to a deeper, richer, almost blood-red (the steaming's heat fixes the carotenoids into the starch matrix permanently, and the translucent gelatinised grain shows the colour more vividly than the opaque raw grain did), and the texture is sticky, tender and glossy — each grain glistening with the coconut milk's fat.

Turn the steamed xôi out onto a tray. While still hot, gently fold with a wet spatula — the folding distributes the surface's coconut gloss through the mass and ensures uniform colour and shine.`,
      tip: `The colour deepening during steaming is the same transparency-reveals-pigment mechanism the xôi ngũ sắc documented: raw rice starch is opaque (the granules scatter light), and the embedded carotenoids are hidden behind the opacity. When the starch gelatinises during steaming (the granules absorb water, swell, and become transparent), the carotenoids — now embedded in a clear matrix — become visible, and the colour appears to deepen from pale-red (opaque raw) to deep-red (transparent cooked). The pigment did not increase. The window became clear.`,
    },
    {
      title: 'Mound, serve, celebrate — the reddest grain on the table',
      description: `Mound the hot xôi gấc on a serving plate — traditionally in a dome shape (the dome represents abundance) or pressed into a round mould and unmoulded (the circle represents completeness — the same symbolism the xôi ngũ sắc's disc carried).

The finished xôi gấc should be: deep blood-red (uniform, no pale patches), glistening (the coconut fat catching the light on every grain's surface), sticky (the grains cling together in the dome's shape without falling), and fragrant — a warm, tropical, faintly sweet, coconut-and-carotenoid aroma that is specific to xôi gấc and that no other rice preparation in the collection carries.

Serve warm or at room temperature. Xôi gấc is eaten by scooping with a spoon or by tearing pieces from the dome by hand. Each mouthful: sticky, sweet, coconut-rich, and carrying the gấc's own faint flavour — a mild, slightly tomato-like, slightly tropical fruitiness that the lycopene's volatile breakdown products provide.

At a wedding: the xôi gấc is set at the entrance tray, scooped into small bowls or onto banana-leaf squares, and handed to each guest as they arrive. The red rice is the first food the guest eats at the celebration — before the gà luộc, before the nem rán, before the giò lụa — and its colour is the first message: this is a joyous occasion, this table is prosperous, and this rice is the colour of the joy you are about to share.

Xôi gấc is the collection's most symbolic single-colour food — where the xôi ngũ sắc carried five colours for five elements, the xôi gấc carries one colour for one message: red = luck. The colour is the recipe's purpose, and the purpose is the occasion, and the occasion — wedding, Tết, birth, celebration — is the reason the gấc fruit exists in the Vietnamese garden at all. The vine was planted for this rice. The rice was coloured for this table. And the table is set for this moment.`,
      tip: `Gấc's lycopene concentration — roughly 70x that of tomato — makes xôi gấc one of the most lycopene-dense foods eaten regularly anywhere in the world. Lycopene is a potent antioxidant with documented associations (in epidemiological studies, not clinical trials — the distinction matters) with reduced risk of certain cancers and cardiovascular disease. The coconut milk's fat dramatically increases lycopene's bioavailability (from roughly 2-5% absorption from a low-fat matrix to 15-20% from a fat-rich matrix), because lycopene is fat-soluble and requires dietary fat for absorption through the intestinal wall. The xôi gấc's coconut milk is not just the colour's vehicle — it is the nutrition's vehicle, and the traditional pairing of gấc-with-coconut-fat is, empirically, the optimal delivery system for the fruit's most valuable micronutrient. The grandmother who added coconut milk to the gấc rice did not know about bioavailability. She knew the rice tasted better with fat. The lab confirms she was also feeding her family more efficiently.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
