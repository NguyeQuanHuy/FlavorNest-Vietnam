'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'goi-du-du-tom-kho',
  title: `Gỏi Đu Đủ Tôm Khô (Green Papaya Salad with Dried Shrimp and Beef Jerky)`,
  subtitle: `Green papaya — shredded into crunchy, water-white julienne — tossed with rehydrated dried shrimp, torn Vietnamese beef jerky, rau răm, crushed peanuts and a fish-sauce-lime-sugar-chili dressing. The Vietnamese cousin of the Thai som tum, speaking the same sour-salty-sweet language with a different accent: fish sauce instead of palm sugar, rau răm instead of long beans, and a quieter chili that lets the papaya talk.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '25 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/goi-du-du-tom-kho.jpg',
  intro: `Green papaya salad belongs to the entire mainland Southeast Asian family — Thai, Lao, Cambodian, Vietnamese — and each country's version is recognisable within a single bite because the dressing, the protein and the herb are each country's signature. The Thai som tum pounds its dressing in a mortar (palm sugar, fish sauce, lime, green chili, tomato, dried shrimp, long beans) into a wet, pungent, aggressively sweet-sour-salty-hot sauce that the papaya bathes in. The Lao version adds padaek (thick fermented fish paste) and pulls the flavour toward the funky end. The Vietnamese gỏi đu đủ — this recipe — does not pound. It dresses: a clear, pourable, sweet-sour-salty-hot dressing of fish sauce, lime, sugar, garlic and chili, mixed in a bowl and poured over the shredded papaya, which is tossed rather than pounded, producing a salad that is drier, lighter, less sauced and more textural than the Thai version.

The green papaya is the same ingredient everywhere: the unripe fruit of Carica papaya, harvested when the flesh is white, hard and starch-laden, with none of the ripe fruit's musky sweetness and all of the raw vegetable's neutral crunch. Shredded into julienne — by knife, by mandoline, or by the hooked Thai papaya shredder — it produces long, snappy, water-white strips that hold their crunch in a fish-sauce dressing for thirty minutes or more, because the unripe papaya's cell walls are thick, lignified and resistant to osmotic wilting (the same sclerenchyma architecture the banana blossom exploited, here in a different plant). Green papaya is, structurally, more wood than fruit, and its crunch is the crunch of young wood rather than the crunch of a fresh vegetable.

The proteins are the Vietnamese pantry's preserved duo: tôm khô (sun-dried shrimp, the tiny, coral-orange, umami-dense pellets that have appeared in a dozen gỏi in this collection) and khô bò (Vietnamese beef jerky, torn into fibrous strips, sweet-salty-smoky, chewy and intensely flavoured). The two together give the salad its savoury architecture: the shrimp provides concentrated marine umami from below; the jerky provides concentrated meat umami from above; and the papaya sits in the middle, crunching neutrally, absorbing both.

The dressing is the standard southern gỏi formula — fish sauce, lime, sugar, garlic, chili — but calibrated specifically for papaya: slightly more sugar than the bò tái chanh's dressing (because papaya is more neutral and needs more sweetness to register as dressed rather than plain), slightly less lime (because the papaya's own malic acid contributes a mild sourness that supplements the citric), and the same aggressive garlic-chili base that every gỏi in the south carries as its aromatic floor.`,
  ingredientSections: [
    {
      title: 'The green papaya',
      items: [
        {
          amount: 1,
          name: 'medium green papaya (about 500 g), peeled, seeded, shredded into fine julienne',
          note: `UNRIPE — hard, white-fleshed, no yellow, no fragrance. Peel, halve, scoop seeds, and shred into matchstick-thin julienne using a mandoline, a box grater's julienne blade, or a knife. The strips should be 3-4 mm wide and 8-10 cm long — fine enough to tangle but thick enough to crunch. Soak 10 minutes in cold salted water (1 tbsp salt per litre), then drain and squeeze very dry in a cloth — the salt firms the strips and the squeezing removes excess water that would dilute the dressing.`,
        },
      ],
    },
    {
      title: 'The proteins',
      items: [
        {
          amount: 40,
          unit: 'g',
          name: 'tôm khô (sun-dried shrimp), soaked 10 min in warm water, drained',
          note: `Pliable but still faintly crunchy — not soft, not brittle. Their concentrated umami is the salad's bass note.`,
        },
        {
          amount: 80,
          unit: 'g',
          name: 'khô bò (Vietnamese beef jerky), torn into thin strips',
          note: `The sweet-salty-smoky chewy protein. Sold at every Vietnamese grocer in sealed bags. Torn by hand into fibrous strips that tangle with the papaya's julienne. If unavailable: any high-quality beef jerky, torn thin, plus a pinch of extra sugar in the dressing to approximate the Vietnamese version's sweetness.`,
        },
      ],
    },
    {
      title: 'The dressing',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 3, unit: 'tbsp', name: 'lime juice' },
        {
          amount: 2.5,
          unit: 'tbsp',
          name: 'sugar',
          note: `Slightly more than the bò tái chanh's dressing — green papaya is flavour-neutral and absorbs sweetness rather than contributing it. The sugar makes the papaya taste dressed rather than plain.`,
        },
        { amount: 3, name: 'cloves garlic, pounded fine' },
        { amount: 3, name: 'bird\'s-eye chilies, pounded or sliced' },
        { amount: 1, unit: 'tbsp', name: 'water' },
      ],
    },
    {
      title: 'The herbs and crunch',
      items: [
        { amount: 50, unit: 'g', name: 'rau răm (Vietnamese coriander), roughly torn' },
        { amount: 30, unit: 'g', name: 'húng quế (Thai basil), leaves picked' },
        { amount: 60, unit: 'g', name: 'roasted peanuts, coarsely crushed' },
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
      ],
    },
  ],
  steps: [
    {
      title: 'Shred, salt-soak, squeeze dry — crunch management in three steps',
      description: `Peel the papaya, halve lengthwise, scoop out the seeds and the soft pith. Shred into fine julienne — a mandoline set to 3 mm is ideal; a knife works if the hand is patient.

Soak the shreds in cold water with 1 tablespoon of salt per litre for 10 minutes. The salt does two things: it firms the papaya's cell walls by partially dehydrating the cells (the same osmotic principle that firms pickles), and it draws out the milky papain-rich sap that raw green papaya bleeds from its cut surfaces — papain is a protease that can irritate the mouth if not washed away, and the soaking removes it.

Drain and squeeze in a clean cloth — wring hard. The papaya should be: crisp, dry to the touch, faintly salty, and no longer weeping any milky liquid. Wet papaya dilutes the dressing and produces a salad that pools at the bottom; dry papaya absorbs the dressing and stays crisp for 30 minutes.`,
      tip: `The papain removal is a food-safety and a comfort step, not a flavour step. Papain — the cysteine protease that the papaya plant produces as a defence against herbivory — is concentrated in the unripe fruit's latex (the milky sap) and can cause mouth irritation, lip numbness and, at higher exposures, contact dermatitis. The salt-water soak draws the latex from the cut surfaces and dissolves the papain into the wash water, which is discarded. Ripe papaya has negligible papain (the enzyme degrades as the fruit ripens); green papaya has significant quantities, and the soak is the step that makes it comfortable to eat raw. The same papain, in concentrated form, is sold commercially as a meat tenderiser — its proteolytic power is real, and your mouth is made of protein.`,
    },
    {
      title: 'Toss everything — papaya, proteins, dressing, herbs, peanuts',
      description: `Dissolve the sugar completely in the fish sauce, lime juice and water. Add the garlic and chili.

In a wide bowl: the drained, squeezed papaya. Pour the dressing over and toss thoroughly — the papaya's neutral julienne needs complete dressing contact to taste of anything.

Add the soaked dried shrimp and the torn beef jerky. Toss — the shrimp and jerky should distribute evenly through the papaya's tangle. Add the torn rau răm and basil. Toss once more.

Transfer to a serving plate. Scatter crushed peanuts and fried shallots over the top.

The salad should be: pale (white papaya, orange shrimp, brown jerky, green herbs, tan peanuts), dry at the surface (the dressing absorbed into the papaya, not pooling), and TALL — mounded high, because the papaya's julienne holds volume and height is the visual signal of crunch.`,
      tip: `The Vietnamese gỏi đu đủ's toss-in-a-bowl method produces a fundamentally different salad from the Thai som tum's pound-in-a-mortar method, and the difference is texture. Pounding bruises the papaya — it ruptures cells, releases juice, softens fibres, and creates a wet, saucy, semi-crushed salad where the papaya has lost some of its crunch and gained the dressing's liquid. Tossing preserves the papaya — the julienne strips stay intact, the cells stay whole, the crunch stays maximal, and the dressing coats rather than penetrates. The Thai version is wetter, saucier and more intensely flavoured per bite. The Vietnamese version is drier, crunchier and more textural per bite. Same ingredient, two verbs (pound vs. toss), two salads.`,
    },
    {
      title: 'Eat within 30 minutes — the papaya holds, but not forever',
      description: `Eat by chopstick-tangle: lift a nest of papaya strips trailing a shrimp, a jerky shred, an herb leaf and a peanut crumb. Each mouthful carries: the papaya's neutral, lignified crunch (snappy, clean, absorbing everything around it), the dried shrimp's marine umami (salty, concentrated, coral), the jerky's meaty chew (sweet, smoky, fibrous), the rau răm's peppery bite, and the peanut's fatty crunch.

The papaya is the silence in the middle of the noise — it is the ingredient with the least flavour and the most crunch, and its job is to carry the dressing and the proteins and the herbs to the tongue on a crunchy vehicle. Without the papaya, the salad is a pile of jerky and shrimp. With the papaya, it is a salad — and the difference between a pile and a salad is the neutral, crunchy, absorbent matrix that organises everything else into bites.

The papaya holds its crunch for about 30 minutes in the dressing — longer than lettuce (5 minutes), longer than bean sprouts (10 minutes), about the same as banana blossom (25 minutes). Past 30 minutes the osmotic pressure of the salt and sugar in the dressing overwhelms the sclerenchyma's resistance, the cells collapse, the water exits, and the salad goes from crunchy to limp. The clock is generous. It is not infinite.`,
      tip: `Green papaya's crunch endurance — 30 minutes in a fish-sauce dressing — places it at the top of this collection's salad-crunch hierarchy: green papaya (30 min) > banana blossom (25 min) > green mango (20 min) > bean sprouts (10 min) > lettuce (5 min) > bông điên điển (3 min). The hierarchy tracks cell-wall architecture: papaya and banana blossom have the thickest sclerenchyma; lettuce and flower petals have the thinnest parenchyma; and the dressing's osmotic attack defeats each one at a rate inversely proportional to wall thickness. The cook who knows the hierarchy knows how long each salad can sit, which means the cook knows when to toss: a papaya gỏi can be tossed 20 minutes before serving; a flower gỏi must be tossed at the table. The hierarchy IS the timing guide, and the timing guide IS the recipe's missing step.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
