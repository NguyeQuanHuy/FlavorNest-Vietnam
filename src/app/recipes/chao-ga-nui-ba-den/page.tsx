'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'chao-ga-nui-ba-den',
  title: `Cháo Gà Núi Bà Đen (Black Virgin Mountain Free-Range Chicken Congee)`,
  subtitle: `A scrawny, dark-meated, fiercely flavoured free-range hen from the slopes of the Black Virgin Mountain, simmered until the broth is gold, the meat shredded, and the rice — dry-toasted first until it smells of popcorn — boiled into a porridge so thick the spoon stands. Topped with a fistful of fried shallots, torn herbs and a crack of pepper that means the south.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '2 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/chao-ga-nui-ba-den.jpg',
  intro: `Núi Bà Đen — the Black Virgin Mountain — is the only real elevation in Tây Ninh, a lone granite peak rising almost a thousand metres out of the flatlands near the Cambodian border, and on its lower slopes and in the orchards at its base lives a population of gà thả vườn, garden-loose chickens, that have spent their lives foraging whatever the mountain gives: insects, fallen fruit, worms, seeds, scrub. They are small, tough, dark-meated, and utterly unlike the six-week broiler that stocks a supermarket shelf. They are also, by unanimous regional consensus, the only chicken worth making cháo from, because a congee is a broth-delivery system, and only a bird with real broth in it deserves a pot this long.

The distinction between a good chicken and a supermarket chicken is not a preference — it is a measurable chemical gap, and it shows up nowhere more clearly than in a slow-cooked rice porridge. A free-range hen that has scratched for a year builds dense, myoglobin-rich, collagen-heavy muscle and deposits intramuscular fat in patterns a cage bird never develops. Simmered for ninety minutes, that collagen converts to gelatin, the myoglobin-dense meat releases nucleotides and amino acids, and the slow-accumulated fat renders into the broth as a golden lipid layer that carries all of it. The resulting liquid is rich, golden, lip-coating and deeply chickeny in a way that makes the word "chicken" feel like it was invented to describe this bird and borrowed, poorly, by all the others. A supermarket broiler simmered the same way gives thin, pale water with dry cotton in it, because a six-week-old animal has nothing to give.

The Tây Ninh cháo adds one step the province considers essential and most other cháo recipes do not bother with: the rice is dry-toasted before it meets the water. Raw rice goes into a dry pan over medium heat and is stirred constantly for eight to ten minutes until it turns from translucent white to opaque, faintly golden, and smells unmistakably of popcorn. Only then does it go into the chicken broth. The toasting does two things. It develops Maillard flavour — the same pyrazines and furans that make popcorn, toasted bread and roasted nuts smell good — so the finished porridge tastes toasted and nutty underneath the chicken, a dimension that untoasted rice simply does not have. And it partially denatures the starch on the grain's surface, which changes the porridge's texture: toasted grains break down more slowly and more unevenly, giving a cháo that is thick and creamy overall but still contains some intact grains that pop faintly at the tooth, rather than the smooth, baby-food uniformity of a cháo made from raw rice cooked to complete surrender.

The bowl is plain and makes no apology for it: a deep mound of thick porridge, shredded chicken piled in the centre, a shower of fried shallots, torn scallion and coriander, a crack of black pepper, a few drops of sesame oil, and — beside it, not on it — a saucer of sliced chili in fish sauce and a squeeze of lime. Plain, because the broth IS the seasoning and the porridge IS the vehicle and the chicken IS the topping, and adding anything else would be adding a comment to a conversation that was already finished. In Tây Ninh it is breakfast and it is sick-day food and it is cold-morning food and it is the first thing a new mother eats, and it is all of those things because the category they share is not a meal but a condition: you eat it when you need something that is all warmth and all sustenance and all flavour and nothing else. The mountain gives the bird and the bird gives the bowl, and the bowl is one of the simplest and best things in Vietnamese cooking.`,
  ingredientSections: [
    {
      title: 'The chicken',
      items: [
        {
          amount: 1.4,
          unit: 'kg',
          name: 'free-range chicken (gà ta / gà thả vườn), whole',
          note: `The oldest, toughest, most free-range bird you can honestly buy — a boiling fowl, a stewing hen, a retired layer from a farm shop or a halal butcher. Twelve months old minimum, dark-legged, scrawny, expensive per kilo and cheap per bowl of flavour. A supermarket broiler produces a different and poorer dish in every measurable way; if it is all you have, add 2 chicken wings and a pork bone to the pot for the gelatin it cannot supply.`,
        },
        { amount: 2, unit: 'tbsp', name: 'coarse salt + 1 lime, halved (for scrubbing)', note: `Rub hard, rinse, dry. The same surface-cleaning protocol as every Vietnamese boiled-bird dish: salt scrubs the protein slime, lime acid neutralises the surface amines. A clean bird gives a clean broth.` },
        { amount: 2.5, unit: 'L', name: 'water' },
        { amount: 1, name: 'yellow onion, halved and charred' },
        { amount: 30, unit: 'g', name: 'ginger, charred and bruised' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
      ],
    },
    {
      title: 'The toasted rice',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'plain long-grain rice (gạo tẻ)',
          note: `Not glutinous, not jasmine. An ordinary medium or long grain that breaks down into a porridge with enough body to hold a spoon upright but enough grain-integrity to keep some texture. Jasmine is too fragrant (it fights the chicken); glutinous is too sticky (the cháo turns to glue).`,
        },
      ],
    },
    {
      title: 'The garnish and the table',
      items: [
        { amount: 4, unit: 'tbsp', name: 'fried shallots, fresh-fried if possible', note: `The crunch on the porridge. Stale fried shallots from a tub are acceptable; fresh ones — sliced thin, fried slowly until deeply golden, drained on paper — are a different and obviously better ingredient.` },
        { amount: 4, name: 'scallions, thinly sliced' },
        { amount: 30, unit: 'g', name: 'coriander, roughly chopped' },
        { amount: 30, unit: 'g', name: 'rau răm, roughly torn (optional but very Tây Ninh)' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 1, unit: 'tsp', name: 'sesame oil, for drizzling' },
        { amount: 20, unit: 'g', name: 'ginger, finely julienned', note: `Raw ginger on the finished bowl — its bright, sharp heat against the warm, deep, cooked-ginger broth is a deliberate two-ginger design: one cooked in, one raw on top.` },
        { amount: 3, name: 'bird\'s-eye chilies, sliced, in 3 tbsp fish sauce', note: `The table saucer. Everyone adjusts; nobody judges.` },
        { amount: 1, name: 'lime, in wedges' },
      ],
    },
  ],
  steps: [
    {
      title: 'Scrub, blanch and simmer the chicken — 90 minutes at a murmur',
      description: `Rub the bird inside and out with salt and lime, rinse thoroughly, and blanch in boiling water 5 minutes. Drain, rinse the scum off the bird and the pot, and start fresh: the bird, 2.5 L cold water, charred onion and ginger.

Bring to a bare simmer — a bubble every second — and hold it there, lid ajar, for 90 minutes. Skim every 20 minutes. Season with fish sauce, salt and sugar in the final 20 minutes.

Pull the bird at 90 minutes: the thigh should move freely in its socket and a skewer into the thickest part should slide through with light pressure. Let it cool enough to handle, then shred the meat by hand into long fibres — no knife, which would cut the fibres short and lose the textural pull that defines shredded chicken.

Return every bone, every scrap of cartilage and every piece of skin to the pot and simmer on 30 more minutes while you toast the rice. Strain the broth.`,
      tip: `Returning the bones after shredding is the move that turns a good broth into the broth. Ninety minutes extracts the bird's initial offering — flavour from the meat, fat from the skin, first-pass gelatin from the joints. The thirty-minute extension on bones alone, with more surface exposed from the disarticulation, extracts a second wave — deeper gelatin, marrow minerals, the collagen from tendons and cartilage that was still converting when you pulled the meat. The broth you strain at two hours is measurably richer than the one at ninety minutes, and you will feel the difference in the finished cháo as body: the porridge coats the lip, clings to the spoon, and reads as rich without any added fat. That body is gelatin, and gelatin comes from time.`,
    },
    {
      title: 'Toast the rice — 8 minutes, stirring always, until it smells like popcorn',
      description: `Rinse the rice and drain it well — surface water in a dry pan spatters and steams instead of toasting. Spread it in a dry, heavy pan over medium heat and stir constantly, without stopping, for 8-10 minutes.

Watch the grain change: translucent white to opaque white, then faintly golden at the edges, and the smell shifts from raw starch to something warm, nutty and unmistakably popcorn-like. A grain bitten in half should be chalky and crumbly, no longer glassy.

Tip it out immediately. Residual pan heat will take golden to scorched in thirty seconds, and scorched rice makes a bitter cháo that no amount of chicken can save.

Do not wash the toasted rice. The surface starch loosened by the heat is part of the thickening system.`,
      tip: `The toasting is doing two jobs on two time scales. In the pan, the first five minutes drive off residual moisture and the grain's temperature climbs through 140-180°C — the Maillard window — generating the pyrazines, furanones and Strecker aldehydes that smell like popcorn and will perfume the finished porridge. In the pot, the pre-denatured surface starch from the toasting gelatinises and disperses faster than raw starch, thickening the broth early while the grain's intact interior breaks down slowly, so the cháo reaches serving thickness while still containing chewy grain fragments. Raw rice cháo is smooth throughout because nothing got a head start; toasted rice cháo has body AND texture, because the head start created a two-speed breakdown. The pan is designing the porridge's mouthfeel eight minutes before the broth touches the grain.`,
    },
    {
      title: 'Cook the cháo — toasted rice into chicken broth, 40 minutes to thick',
      description: `Bring the strained chicken broth back to a simmer — you should have roughly 1.8-2 L. Pour in the toasted rice, stir once, and bring back to a gentle boil. Drop to a low simmer, lid slightly ajar, and cook 35-40 minutes, stirring every 5-7 minutes from the bottom so the settling rice does not scorch.

The cháo is ready when it is thick enough that a spoon dragged across the bottom of the pot leaves a trail that closes slowly — roughly the consistency of a loose risotto. Some grains should be fully dissolved into the liquid; others should still be intact and give a faint pop at the tooth. This dual texture is the Tây Ninh signature and the reason the rice was toasted.

If it thickens too fast (the grain absorbed more than expected), add hot water from a kettle — never cold, which shocks the starch and makes it lumpy. If it is too thin at 40 minutes, simmer on, stirring more frequently; it will get there.`,
      tip: `Stirring from the bottom every five minutes is not optional and it is not about burning, though it prevents that too. Rice settling at the bottom of a simmering pot is in contact with much higher temperatures than rice suspended in the liquid, and it gelatinises and scorches fast — releasing a bitter, toasty note that overwhelms the clean popcorn flavour you built in the pan. The stir redistributes settling grains before they over-brown, and it also mechanically breaks the softened grains apart, releasing their starch into the liquid and accelerating the thickening. A cháo that is stirred only at the end is thick at the bottom and thin at the top; one stirred every five minutes is uniform. The spoon is the thermostat.`,
    },
    {
      title: 'Bowl it deep, pile the chicken, and let the table build the rest',
      description: `Ladle the thick cháo into deep bowls — fill them generously, because the porridge thickens as it sits and you want every spoonful to be liquid enough to slip. Pile a mound of shredded chicken in the centre, then the fried shallots, scallion, coriander, rau răm and julienned raw ginger. Crack pepper over, drizzle sesame oil.

Serve the chili-fish-sauce saucer and the lime on the side. The correct first move: stir everything together from the top into the porridge so the herbs wilt, the shallots sink, and the sesame oil streaks. Then taste. Then add the chili sauce in increments, because the only person who knows how much you need is you.

Eat it hot. A room-temperature cháo is a gelatinised block with chicken in it — the gelatin sets and the toasted grain stiffens, and the porridge stops being a porridge and starts being a punishment. Reheat with a splash of broth if a second bowl is coming late.`,
      tip: `The two-ginger design — charred ginger cooked into the broth, raw julienned ginger scattered on top — is worth naming because it is the same layered-aromatic architecture this collection has met in every Vietnamese dish that uses a volatile ingredient. The cooked ginger gives deep, warm, mellow gingerone (the heat-stable compound that ginger converts to over time). The raw ginger gives sharp, bright, punchy gingerol (the heat-labile compound that degrades with cooking). Together they give a ginger register that runs from bass to treble — mellow depth from the pot, bright bite from the bowl — and neither alone covers the full range. Two additions, two compounds, one ingredient, one complete flavour. The same trick governs the two-pepper timing of every kho, the herb-on-then-off-heat of every canh chua, and the raw-then-cooked scallion of every phở. Volatile aromatics are always, everywhere, a timing problem before they are a quantity problem.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
