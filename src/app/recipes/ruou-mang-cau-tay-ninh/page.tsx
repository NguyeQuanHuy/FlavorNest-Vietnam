'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ruou-mang-cau-tay-ninh',
  title: `Rượu Mãng Cầu Tây Ninh (Tây Ninh Soursop Wine)`,
  subtitle: `Ripe soursop from the orchards at the foot of Núi Bà Đen, layered with sugar in a glass jar and left to ferment on its own wild yeasts for three weeks until the fruit collapses into a cloudy, fragrant, gently alcoholic wine that tastes of lychee and custard and the tropics. The slowest recipe in the Tây Ninh collection, and the one that asks the least of the cook and the most of the calendar.`,
  category: 'DESSERT',
  difficulty: 'Easy',
  totalTime: '3 weeks',
  rating: 4.6,
  baseServings: 8,
  heroImage: '/images/recipes/ruou-mang-cau-tay-ninh.jpg',
  intro: `Tây Ninh grows soursop — mãng cầu xiêm, the spiny, heart-shaped Annona muricata — in the red laterite orchards around the base of the Black Virgin Mountain, and the fruit is one of the province's cash crops: large, heavy, soft when ripe, with a white, juicy, fibrous flesh that tastes like a collision between pineapple, strawberry and coconut cream, and that begins fermenting approximately the moment the skin turns from green to yellow-green, because the sugar content is explosive and the wild yeasts on its skin have been waiting since the last rain. Tây Ninh's response to a fruit that wants to become alcohol was to let it, and rượu mãng cầu — soursop wine — is the result: a home-fermented, cloudy, gently fizzy, low-alcohol fruit wine made in glass jars on kitchen counters across the province, drunk cold, and given away in recycled water bottles with a handwritten label that says "mãng cầu" and a date.

The method is among the simplest fermentations in this collection's file — simpler than the three-month mắm cá ruộng, simpler than the men-lá-inoculated rice of Tuyên Quang — because the fruit does most of the work. Ripe soursop flesh is roughly 14-16% sugar by weight, which is in the same range as grape juice, and its skin carries a diverse population of wild Saccharomyces and non-Saccharomyces yeasts that begin fermenting the moment the fruit is bruised, which is to say the moment it is ripe, because a ripe soursop bruises under its own weight. Layer the flesh with sugar in a clean glass jar, seal it loosely enough to vent CO₂, and leave it at room temperature for three weeks: the yeasts consume the sugars, produce ethanol and CO₂, and the fruit collapses into a cloudy, aromatic liquid that is unmistakably wine — low-proof, somewhere between 5 and 8% depending on the fruit's sugar load and the ambient temperature, tasting of the fruit's own tropical-custard-acid profile now deepened and complicated by the ferment's esters and higher alcohols.

The sugar addition is the cook's only real lever and it is worth understanding. Wild soursop has enough sugar to ferment on its own, but the resulting wine would be bone-dry and quite tart — pleasant to some palates, challenging to most. The added sugar does two things: it feeds the yeast more fuel, raising the final alcohol slightly, and it leaves residual sweetness in the finished wine, because home fermentation at room temperature with wild yeasts rarely goes to completion the way a commercial wine ferment does. The balance point most Tây Ninh households land on is roughly 30-40% sugar by weight of the fruit, which produces a wine that is off-dry to medium-sweet, gently alcoholic, and drinkable cold without any adjustment — the Vietnamese equivalent of a German Spätlese, arrived at by kitchen intuition rather than refractometry.

A word on safety and honesty, in the tradition of this collection: wild fermentation of fruit is among the oldest and safest human food technologies — wine has been made this way for eight thousand years, and the alcohol and acid environment that develops within the first week is hostile to almost every pathogen — but it is not zero-risk, and the recipe below includes the guardrails: sanitized jars, a loose-not-sealed lid (a sealed jar under fermentation pressure is a glass bomb), a hard-stop discard rule for mould or off-odours, and a note on methanol that needs reading. Within those guardrails, the project is safe, rewarding, and vastly easier than it sounds. The fruit wants to do this. You are mostly getting out of its way.`,
  ingredientSections: [
    {
      title: 'The fruit',
      items: [
        {
          amount: 1.5,
          unit: 'kg',
          name: 'ripe soursop (mãng cầu xiêm), the riper the better',
          note: `The fruit should yield to gentle thumb pressure across its whole surface — uniformly soft, not just at one end. The skin may be darkening in patches; this is fine and indicates peak ripeness. An unripe soursop (hard, bright green) will not ferment well — its sugars have not developed and its flesh is astringent. Buy it a few days early and ripen it at room temperature if needed; once it yields to pressure, use it that day.

In Europe: soursop is sold fresh at Latin American, Caribbean and Vietnamese groceries in most large cities, and frozen soursop pulp (seedless, in blocks) is widely available. Frozen pulp works well — it is already broken down, already seeded, and ferments readily. Thaw completely before using.`,
        },
      ],
    },
    {
      title: 'The sugar and the jar',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'white granulated sugar',
          note: `Roughly 33% of the fruit weight — the Tây Ninh median. More sugar (up to 50%) gives a sweeter, slightly stronger wine; less (down to 20%) gives a drier, tarter, lower-alcohol one. White sugar is traditional because it lets the fruit's own flavour and colour dominate; palm sugar or raw cane sugar add their own character and are valid variations.`,
        },
        {
          amount: 1,
          name: 'glass jar, 3-4 L, wide-mouthed, with a lid that can be set on loosely — sanitized',
          note: `Sanitize with boiling water and dry completely. Glass so you can watch the ferment; wide-mouthed so you can get the fruit in and the wine out. CRITICAL: the lid must NOT be airtight during fermentation — CO₂ must vent continuously or the jar becomes a pressure vessel and can shatter. Rest the lid on top, or use a cloth and rubber band, or punch a small hole in a metal lid. A sealed jar is dangerous. This is not a suggestion; it is physics.`,
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'rice wine or vodka (optional, for rinsing the jar)',
          note: `A final alcohol wipe of the jar interior after sanitizing — an extra antiseptic step that costs nothing and displaces any residual tap-water bacteria. Optional but cheap insurance.`,
        },
      ],
    },
  ],
  steps: [
    {
      title: 'Break down the fruit — peel, seed, keep every drop of juice',
      description: `Peel the soursop by hand — the skin pulls away easily from ripe fruit. Break the flesh apart into rough chunks, pulling out and discarding the hard black seeds as you go. Work over a bowl to catch every drop of juice; the juice is sugar-water and the yeast's favourite meal.

You should end with roughly 1-1.2 kg of seedless pulp and juice — a wet, fibrous, intensely fragrant mass that smells like a tropical custard.

Do not blend or purée it. Intact fibrous chunks ferment more evenly than a smooth purée (which can compact and trap CO₂ in dangerous pockets), and the fibre itself gives the yeast a substrate to cling to.

Taste the flesh: it should be very sweet, pleasantly tart, and unmistakably soursop — custard, pineapple, strawberry. If it is bland or starchy, the fruit was not ripe enough, and the wine will be thin and disappointing.`,
      tip: `The seeds are discarded for a reason beyond convenience: Annona seeds contain acetogenins and small amounts of toxic alkaloids that you do not want infusing into an alcoholic solvent for three weeks. In the whole fresh fruit these are locked inside the hard seed coat and pose no dietary risk; in a warm fermentation bath, extraction is real. Pull every seed. This is the one non-negotiable safety step specific to soursop fermentation, and it applies equally to commercial and home production.`,
    },
    {
      title: 'Layer fruit and sugar in the jar — the bottom and the top are sugar',
      description: `Start with a 1 cm layer of sugar on the jar bottom. Then alternate: a layer of soursop pulp, a scatter of sugar, more pulp, more sugar — finishing with a thick cap of sugar on top, roughly 2 cm, that seals the fruit below.

Press each layer gently to eliminate air pockets, but do not compact it into a brick — the ferment needs interstitial space for CO₂ to rise through.

The jar should be no more than 75% full. Fermentation produces significant foam and the liquid level rises; a full jar overflows and a sealed full jar explodes.

Set the lid loosely on top — not screwed, not clamped. Place the jar in a cool, dark corner of the kitchen, out of direct sunlight, at room temperature (22-28°C is ideal; above 32°C the ferment runs fast and hot and produces off-flavours).`,
      tip: `The sugar cap on top is doing preservation work during the first 48 hours before the ferment establishes itself. In those hours, the yeast population is still small and the alcohol level is near zero — this is the window when the surface is most vulnerable to mould and aerobic spoilage bacteria. The thick sugar layer creates a locally hypertonic environment that most surface contaminants cannot grow in, buying time for the yeast to multiply, start producing CO₂ (which blankets the surface in an anaerobic layer) and start producing ethanol (which is antimicrobial). By day three the ferment is self-protecting; the sugar cap got it through the gate.`,
    },
    {
      title: 'Watch the first three days — the birth of the ferment',
      description: `Within 24-48 hours you should see the first signs: small bubbles rising through the pulp, the sugar dissolving into the fruit's own juice, and the liquid level rising as the flesh releases water. By day three the bubbling should be active and continuous, the sugar cap should have dissolved, and the jar should smell unmistakably of fermentation — yeasty, fruity, faintly alcoholic, like a cidery version of the fruit.

If by day four you see no bubbling: the fruit was not ripe enough, the kitchen is too cold, or the jar was too aggressively sanitized and the wild yeast population was killed. Solution: add a pinch of bread yeast (instant dried, 1 gram) dissolved in a tablespoon of warm water and sugar. It is not the wild-ferment purist path, but it will rescue the jar.

HARD STOP: if the surface develops fuzzy mould (green, black, pink, white-fuzzy), or if the smell is rotten, sulfurous or vinegary rather than yeasty-fruity, discard the entire jar. No scraping, no salvaging. A bad ferment is a bad ferment and three weeks of attention will not fix it.`,
      tip: `The wild yeasts performing the ferment are already on the fruit when you buy it — Saccharomyces and Candida species, among others, that colonise the skin of every sugar-rich tropical fruit in the orchard. Ripe soursop, with its high sugar, low pH and soft, bruise-prone skin, is an ideal substrate, which is why it ferments so readily and reliably without inoculation. The first 48 hours are a population race: the desirable yeasts, if present in sufficient numbers and given the sugar-and-acid environment they prefer, will outcompete spoilage organisms simply by growing faster and producing ethanol and CO₂ that hostile species cannot tolerate. The sugar cap, the clean jar and the loose lid are the starting conditions; the fruit's own microbiology does the rest.`,
    },
    {
      title: 'Ferment three weeks — stir once at the midpoint, and watch the quiet',
      description: `Leave the jar alone for the first ten days, checking only that bubbling continues and no mould has appeared on the surface. At around day 10-12, gently stir the contents with a clean, sanitized spoon to redistribute the pulp that has risen to the top and ensure the yeast has access to remaining sugar. Re-cover loosely.

Through weeks two and three the fermentation slows: the bubbling becomes intermittent, then occasional, then stops. The fruit pulp collapses and sinks. The liquid clarifies from opaque to translucent-cloudy. The smell shifts from actively yeasty to calmer, fruitier, and distinctly winey.

By day 21 the wine is ready for its first tasting. Spoon out a small measure, strain it through a fine sieve, chill it, and taste: it should be gently alcoholic (a warmth in the throat, not a burn), sweet-tart, deeply fruity with a fermented complexity underneath the soursop, and with no off-flavours — no vinegar, no nail-polish, no sulfur. If it tastes young and harsh, give it another week; time softens.`,
      tip: `The fermentation slowing and stopping is not a failure — it is the yeast running out of easily fermentable sugar and, at around 6-8% ethanol, reaching the tolerance limit of most wild yeast strains. Commercial wine yeasts can push to 14% and beyond; wild soursop yeasts cannot, which is why home rượu mãng cầu is a gentle, low-proof wine rather than a serious intoxicant. This is a feature, not a limitation: the residual sugar left behind by the yeast's early retirement is what makes the wine sweet and drinkable without any back-sweetening, and the moderate alcohol is why a Tây Ninh household can serve it to the whole table, grandmothers included, without anyone ending the evening poorly.`,
    },
    {
      title: 'Strain, bottle, chill — and drink within the month',
      description: `Strain the wine through a fine-mesh sieve lined with clean muslin or cheesecloth into a clean jug, pressing the pulp gently to extract every drop. Discard the spent pulp — it has given everything.

Pour the strained wine into clean glass bottles, filling to within 3 cm of the top. Cap loosely for the first two days in the fridge (a slow secondary fermentation may produce a little more CO₂), then cap normally.

Chill thoroughly and serve cold — this is a tropical wine and it wants to be cold the way a Riesling wants to be cold. Pour into small glasses, as you would a dessert wine or a sparkling sake.

The wine keeps 4-6 weeks refrigerated, and it mellows and clarifies further over that time — week two is better than week one, week three better still. It does not keep at room temperature for long; without pasteurization or sulfites the remaining yeast will slowly restart and the wine will turn vinegary. Fridge it, drink it within the month, and make another jar when the next soursop ripens.

A NOTE ON METHANOL: fruit fermentations produce trace methanol from pectin breakdown — this is normal, universal to all fruit wines, and at the volumes and alcohol levels of home soursop wine the quantities are toxicologically insignificant. Do NOT distill this wine. Distillation concentrates methanol into the foreshots at levels that can be dangerous, and home distillation without methanol-separation expertise is a genuine health hazard. Drink the wine as wine. Do not make it into spirits.`,
      tip: `Rượu mãng cầu is the gentlest fermentation project in this collection and a good first one for anyone who has never fermented anything: the fruit does most of the work, the timeline is forgiving (a day or two either side of three weeks changes the wine's character, not its safety), and the result is immediately drinkable without ageing, bottling equipment or specialised knowledge. It is also, quietly, one of the most democratic food-preservation techniques in Vietnam: it requires no salt, no starter culture, no smoker, no clay jar — only fruit, sugar, glass and time. A farming household with a soursop tree and a clean jar has everything it needs, which is why the tradition exists in exactly the form it does: simple because it had to be, good because it was made often enough to become good, and shared in recycled bottles because nobody in Tây Ninh has ever thought a fruit wine needed a label fancier than a felt-tip date.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
