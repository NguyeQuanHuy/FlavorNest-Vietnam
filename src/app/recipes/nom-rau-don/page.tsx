'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'nom-rau-don',
  title: `Nộm Rau Dớn (Highland Fiddlehead Fern Salad)`,
  subtitle: `The tightly coiled young fronds of the forest fern — rau dớn, the fiddlehead — blanched for thirty seconds, shocked in ice water, and tossed with toasted sesame, crushed peanuts, mắc khén, fried garlic and a lime-fish-sauce dressing. The salad that tastes of the forest floor before the canopy opens, eaten in the highlands where the fern grows between the rocks and the bamboo.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '20 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/nom-rau-don.jpg',
  intro: `Rau dớn — the fiddlehead fern, Diplazium esculentum — is one of the great foraged vegetables of the Vietnamese highlands: a wild, uncultivated, seasonally available forest plant whose young fronds, tightly coiled in the characteristic spiral that gives them their English name, emerge from the forest floor after the rains in dense, vivid-green clusters that the Tày, the Dao and the H'mông harvest by the basketful and carry down to the morning market. The fern grows in the damp, shaded understory of the mountain forests throughout Tuyên Quang, Hà Giang, Lào Cai, Yên Bái and every northern highland province, and it is one of the few genuinely wild vegetables that remains a daily food rather than a specialty — foraged, sold and eaten in quantities that make it a staple green rather than a curiosity.

The fiddlehead — the coiled tip of the frond, harvested before it unfurls — is the edible part, and its flavour is unlike any cultivated vegetable: green, faintly nutty, mildly bitter, with a mineral, almost asparagus-like depth that carries the forest's own terroir — the iron-rich soil, the filtered light, the perpetual moisture of the understory. The texture, after a brief blanch, is snappy-crisp at the stem and tender-yielding at the coiled tip, and the coil's geometry — a tight spiral that unwinds slightly during cooking — holds the dressing in its crevices the way a scored fish holds tomato sauce: every curve is a pocket of flavour.

The nộm is the highland's standard format for foraged greens: blanch briefly (to destroy the raw fern's residual tannins and to inactivate the enzyme thiaminase, which breaks down vitamin B1 and which is present in many fern species), shock in ice water (to set the green colour and the snap), toss with a highland dressing of lime, fish sauce, mắc khén and sesame, and eat immediately. The format is identical to the nộm hoa chuối from Hanoi — both are nộm, both are northern, both are tossed salads — but the rau dớn version is rougher, wilder and more intensely mineral, because the ingredient came from a forest floor rather than from a courtyard banana tree, and the forest's flavour is in every coil.

A food-safety note: fiddlehead ferns should be blanched before eating, not eaten raw. Several fern species contain thiaminase (which depletes vitamin B1) and ptaquiloside (a carcinogen in bracken fern, Pteridium aquilinum — NOT in Diplazium esculentum, which is the species used here, but misidentification in the field is possible). Blanching for 30-60 seconds in boiling water deactivates thiaminase and reduces any residual anti-nutritional factors. Do not eat raw, and positively identify the species as Diplazium esculentum if foraging yourself.`,
  ingredientSections: [
    {
      title: 'The fiddleheads',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'rau dớn (fiddlehead ferns, Diplazium esculentum), coiled tips, 8-10 cm',
          note: `Tightly coiled — the tighter the coil, the younger the frond, the more tender and the less bitter. Shake off any brown papery scales clinging to the coils. Rinse well in several changes of water — the coils trap forest debris. In North America/Europe: ostrich fern fiddleheads (Matteuccia struthiopteris) are the locally available equivalent — same format, same blanch-and-toss method, similar flavour. Available at farmers' markets and specialty grocers in spring. Do NOT forage bracken fern (Pteridium) — it contains the carcinogen ptaquiloside.`,
        },
      ],
    },
    {
      title: 'The blanch and shock',
      items: [
        { amount: 2, unit: 'L', name: 'boiling water with 1 tbsp salt' },
        { amount: 1, name: 'large bowl of ice water' },
      ],
    },
    {
      title: 'The highland dressing',
      items: [
        { amount: 3, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        {
          amount: 1,
          unit: 'tsp',
          name: 'mắc khén, toasted and coarsely ground',
          note: `The highland pepper — its numbing, citrus-piney bite is the aromatic that marks this nộm as mountain rather than lowland. Same mắc khén as the trâu gác bếp marinade.`,
        },
        { amount: 3, name: 'cloves garlic, sliced thin and fried golden' },
        { amount: 2, name: 'bird\'s-eye chilies, sliced' },
      ],
    },
    {
      title: 'The crunch and herbs',
      items: [
        { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds', note: `The highland's nut — sesame appears in every Tày nộm and every highland dipping salt because the sesame grows on the hillside terraces where peanuts do not.` },
        { amount: 50, unit: 'g', name: 'roasted peanuts, coarsely crushed' },
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
        { amount: 30, unit: 'g', name: 'rau mùi (coriander), roughly chopped' },
        { amount: 20, unit: 'g', name: 'rau răm (if available — less common in the highlands than in the lowlands)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Blanch 30 seconds, shock immediately — green, snappy, safe',
      description: `Bring the salted water to a hard boil. Drop the cleaned fiddleheads in — all at once, and stir once to submerge every coil. Blanch exactly 30 seconds. Not 20 — the thiaminase is still active. Not 60 — the fern is limp and the colour has gone from vivid green to olive.

Lift out with a spider and plunge immediately into the ice water. The thermal shock does three things: it halts the cooking (preserving the snap), it sets the chlorophyll (locking the vivid green), and it cools the fern to the temperature the dressing needs (a warm fern wilts in dressing; a cold fern stays crisp).

Drain very well — shake in a colander, then spread on a cloth and blot. Wet fiddleheads dilute the dressing exactly as wet banana blossom dilutes its nộm.

The blanched fiddleheads should be: vivid green (no olive-brown), snappy when bitten (the stem should crack, not bend), and tasting of clean, green, faintly mineral forest — the bitterness reduced by the blanch from aggressive to pleasant.`,
      tip: `The 30-second blanch is a food-safety step disguised as a cooking step. Thiaminase — the enzyme that degrades vitamin B1 (thiamine) — is present in many fern species including Diplazium esculentum, and consuming large quantities of raw fern over time can lead to thiamine deficiency (beriberi). Thiaminase is a heat-labile enzyme that denatures at approximately 60°C — reached within 10 seconds of immersion in boiling water — so the 30-second blanch destroys it completely with a wide safety margin. The same blanch reduces the fern's tannin content (the compounds responsible for its raw bitterness) by roughly 40-50%, bringing the bitterness from mouth-puckering to pleasantly mild. The blanch is the step that makes the fern both safe and palatable, and skipping it — eating the coils raw, as some modern-foraging aesthetics encourage — is a B1-depletion risk that the highland communities, who eat fern daily, have understood empirically and avoided by always blanching.`,
    },
    {
      title: 'Toss with the highland dressing — mắc khén, fried garlic, lime, sesame',
      description: `Mix the dressing: dissolve sugar in fish sauce and lime juice. Add the ground mắc khén, fried garlic slices and chili.

In a wide bowl: the drained, cold fiddleheads. Pour the dressing over and toss — gently, because the coils are fragile when cold and aggressive tossing unwinds them. Each coil should be dressed: the spiral's inner surfaces should glisten with the lime-fish-sauce, and the mắc khén's coarse grind should be visible as dark specks caught in the coils' crevices.

Add the sesame, crushed peanuts, fried shallots and herbs. Toss once more — lightly.

Transfer to a plate. The nộm should be: vivid green (the blanch-and-shock preserved it), studded with golden garlic chips and tan sesame, and — if you bring your nose close — smelling of lime, mắc khén's citrus-numbing note, and the fern's own green-mineral perfume underneath.`,
      tip: `The mắc khén in the dressing is doing the same job black pepper does in a lowland nộm — providing the aromatic warmth that frames the acid and the salt — but its flavour register is completely different: where black pepper gives a simple, warm, piperine heat, mắc khén gives a numbing tingle (from hydroxy-alpha-sanshool, the same compound family as Sichuan pepper and as the lá cách in the Cà Mau gỏi), a citrus-pine brightness (from limonene and linalool), and a faintly woody depth (from terpineol). The mắc khén is the highland's pepper, and its presence in a nộm is the aromatic declaration that the salad was made above 500 metres, by a Tày hand, from a forest fern, in a kitchen where the hearth still smokes.`,
    },
    {
      title: 'Eat immediately — the coils hold crunch for 15 minutes, then unfurl and wilt',
      description: `Eat with chopsticks — each lift should carry a coiled frond (still spiralled, still green, caught in the chopstick's pinch like a tiny green spring), a few sesame seeds, a garlic chip, a herb leaf.

The bite: the stem snaps first (crisp, mineral, grassy). The coil unwinds on the tongue (tender, faintly nutty, releasing the lime-mắc-khén dressing from its inner surfaces). The peanut crunches through. The garlic chip shatters with its sweet-toasted note. And the mắc khén arrives at the finish — not as heat but as a tingle, a faint buzz on the lips that lasts ten seconds and that the next bite reactivates.

Eat within 15 minutes. The fiddlehead's coil is a spring — a tightly wound structure under tension — and the blanching weakened its cell walls enough that the tension slowly unwinds the coil in the dressing's acid-salt environment. At 15 minutes the coils are still spiralled. At 25 they have begun to unfurl — the spring releasing, the crevices opening, the dressing pooling out. At 35 the fiddleheads are flat, limp fronds in a puddle, and the salad is a memory.

This is the highland's spring salad — the fern fronds emerge after the first rains, the same way the bông điên điển emerges after the Mekong flood and the cá linh arrives with the monsoon. The forest's calendar wrote the recipe, and the recipe is available for exactly the weeks the calendar dictates.`,
      tip: `Nộm rau dớn completes the collection's foraged-wild-green file: the sầu đâu (neem, An Giang canal bank), the bông điên điển (Sesbania, Đồng Tháp floodplain), the lá cách (Premna, Cà Mau mangrove), and now the rau dớn (fern, Tuyên Quang forest floor). Four wild plants, four ecosystems, four provinces, four salads — each one foraged from a landscape no farm can replicate and each one carrying a flavour no cultivated vegetable can approach. The foraged greens are the cuisine's basement — the oldest layer, the one that predates the garden, the one that the forest provides without being asked. Every provincial collection in this project that includes a foraged green is a collection that still touches the forest floor, and the forest floor is where the cuisine began.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
