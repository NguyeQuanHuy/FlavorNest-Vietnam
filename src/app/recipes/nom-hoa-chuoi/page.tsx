'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'nom-hoa-chuoi',
  title: `Nộm Hoa Chuối (Northern Banana Blossom Salad with Chicken)`,
  subtitle: `Banana blossom — the heavy, purple, torpedo-shaped flower of the banana tree — shredded into paper-thin slivers, soaked in lime water to stop the browning, and tossed with poached chicken, rau răm, Vietnamese coriander, crushed peanuts and a fish-sauce-lime-chili dressing. The northern nộm that turns a garden waste product into the crunchiest salad in the Vietnamese canon.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/nom-hoa-chuoi.jpg',
  intro: `Bắp chuối — the banana blossom, the banana flower, the banana heart — has appeared in this collection as a shredded garnish in a dozen bowls: sliced into lime water beside the canh chua, scattered across the bún mắm, piled on the herb platter of every lẩu. In those appearances it was a supporting actor — a crunchy, mildly astringent, slightly bitter shred that provided textural contrast against a dark broth or a rich noodle soup. In this recipe it is the star, and when the banana blossom is the star rather than the garnish, the knife work, the soaking and the dressing all change because the ingredient is now carrying the dish rather than decorating it.

Nộm is the northern Vietnamese word for what the south calls gỏi — a dressed salad of shredded vegetables and protein, tossed with a sweet-sour-salty-hot dressing and topped with herbs and peanuts. The naming difference is geographic (north says nộm; south says gỏi; central says both) and the preparation is essentially the same format: raw or blanched vegetable, cooked protein, acid dressing, herb, nut. But the northern nộm tends to be drier, more tightly dressed and more austere than the southern gỏi — less sugar, less coconut, fewer toppings — and the nộm hoa chuối is one of the most northern expressions of the format: banana blossom shredded very fine, dressed in fish sauce and lime with minimal sugar, topped with shredded poached chicken (not the south's preferred pork or dried shrimp), and finished with rau răm and crushed peanuts. The discipline is in the shredding and the soaking, and the pleasure is in the crunch.

The banana blossom is an extraordinary vegetable — if vegetable is even the correct word for a flower the size of a small rugby ball that grows at the end of a banana bunch and that most of the world throws away. Its outer petals are dark purple, tough and bitter — they are peeled off and discarded. Its inner petals are pale, tender and mildly astringent — they are the edible layers. And buried among the petals are rows of tiny, immature banana fingers — proto-bananas, white and crisp — that are included in the shredding and that contribute a faintly sweet crunch that the petals alone do not carry. The entire inner structure is shredded together — petals, fingers, pale inner cone — into a mass of fine, crisp, pale-pink-to-white slivers that oxidise to brown within minutes unless submerged in acidulated water, which is why every banana-blossom recipe begins with a bowl of lime water and a fast knife.

The chicken is poached — gently, the Vietnamese way: a whole breast simmered in stock or water just below boiling until it reaches 74°C at the centre, then cooled in its own poaching liquid and shredded by hand along the grain into fine, long fibres. Poached-and-shredded chicken is the protein format the north uses for every cold salad, and its texture — dry, fibrous, neutral, carrying whatever dressing it is tossed in — is the opposite of the south's preferred proteins (fatty pork belly, oily dried shrimp), which carry their own richness into the salad. The northern chicken shreds are deliberately lean because the salad's flavour comes from the dressing and the blossom, not from the protein.`,
  ingredientSections: [
    {
      title: 'The banana blossom',
      items: [
        {
          amount: 1,
          name: 'large banana blossom (bắp chuối), about 400 g',
          note: `The whole flower — dark purple outer petals discarded, inner pale petals and immature fingers kept. Available at Vietnamese, Chinese, Thai and Indian groceries. If only vacuum-packed or canned blossom is available (pre-shredded, in brine): drain, rinse well, and use as-is — the texture is softer and the flavour less interesting, but it works.`,
        },
        {
          amount: 1,
          unit: 'L',
          name: 'water with 2 tbsp lime juice or white vinegar',
          note: `The anti-browning bath. The shredded blossom goes in immediately after cutting and stays there until the moment of tossing.`,
        },
      ],
    },
    {
      title: 'The chicken',
      items: [
        {
          amount: 250,
          unit: 'g',
          name: 'chicken breast, poached and shredded',
          note: `Poach in gently simmering water or stock with a knob of ginger and a teaspoon of salt — 15-18 minutes for a 200 g breast. Cool in the poaching liquid 10 minutes (carryover cooking brings the centre to safe temperature gently), then shred by hand along the grain into long, thin fibres.`,
        },
      ],
    },
    {
      title: 'The dressing',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 1.5, unit: 'tbsp', name: 'sugar', note: `Less than a southern gỏi — the north keeps this tight.` },
        { amount: 2, name: 'cloves garlic, pounded fine' },
        { amount: 2, name: 'bird\'s-eye chilies, sliced thin' },
        { amount: 1, unit: 'tbsp', name: 'water' },
      ],
    },
    {
      title: 'The herbs and crunch',
      items: [
        { amount: 50, unit: 'g', name: 'rau răm (Vietnamese coriander), roughly torn' },
        { amount: 30, unit: 'g', name: 'kinh giới (Vietnamese balm), roughly torn (optional but very northern)' },
        { amount: 60, unit: 'g', name: 'roasted peanuts, coarsely crushed' },
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
        { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
      ],
    },
  ],
  steps: [
    {
      title: 'Shred the blossom — fast knife, lime water, no browning',
      description: `Peel off the outer 4-5 layers of dark purple petals — they are tough, bitter and not for eating. Continue peeling until you reach petals that are pale pink to white and feel tender when bent.

Halve the blossom lengthwise. Remove and reserve the tiny, pale, finger-like immature bananas tucked between the petals — they are edible and go into the salad.

Shred the pale inner petals and the core into the finest possible julienne — 2 mm wide, as thin as your knife allows. Work fast: the moment the knife exposes the cut surface, polyphenol oxidase meets oxygen and browning begins. Drop each handful of shreds immediately into the lime water.

Slice the immature banana fingers into thin rounds and add to the lime water.

Soak the entire batch 15-20 minutes. The acid in the lime water inhibits the polyphenol oxidase and fixes the blossom's colour at pale cream-pink rather than the brown-black it would reach in ten minutes without the acid.

Drain very well before tossing — squeeze gently in a clean cloth to remove as much water as possible. Wet blossom dilutes the dressing and makes the nộm soggy.`,
      tip: `The browning is the same enzymatic oxidation this collection documented in the gỏi bông điên điển: polyphenol oxidase catalyses the oxidation of phenolic compounds in the cut surface to quinones, which polymerise into brown melanin pigments. The lime water's citric acid inhibits the enzyme by lowering the pH below its optimal range (PPO is most active at pH 6-7 and nearly inactive below pH 4). The soaking does not remove the phenolics — they remain, contributing the blossom's characteristic mild astringency — but it prevents them from turning brown. The blossom after soaking is pale, crisp and slightly tart from the absorbed acid, and the tart note integrates seamlessly into the lime-based dressing.`,
    },
    {
      title: 'Toss everything — drained blossom, chicken, dressing, herbs, peanuts',
      description: `In a wide bowl: the well-drained banana blossom shreds and the immature banana rounds. Pour the dressing over and toss thoroughly — every shred must be dressed, because the dressing's acid and salt are the blossom's flavour delivery (the blossom itself is mild; the dressing makes it audible).

Add the shredded chicken. Toss gently — the chicken fibres should distribute evenly through the blossom, not clump. Add the torn rau răm and kinh giới. Toss once more.

Transfer to a serving plate. Scatter crushed peanuts, fried shallots and sesame seeds over the top.

The nộm should be: pale (cream-pink blossom, white chicken, tan peanuts, green herbs), dry at the surface (the dressing should be absorbed, not pooling), and tall — mounded, not flat, because the crunch of the blossom holds volume and the mound is the visual signal that the salad is fresh and un-wilted.

Serve within 15 minutes. The blossom holds its crunch longer than most shredded raw vegetables — about 20-25 minutes in a fish-sauce dressing — because its cell walls are thick, fibrous and resistant to osmotic softening. But past 25 minutes the fibres begin to wilt and the salad loses the crunch that is its entire purpose.`,
      tip: `The banana blossom's crunch is structural rather than cellular — it comes from the sclerenchyma fibres (thick-walled, lignified plant cells that provide structural support) running lengthwise through each petal, rather than from the turgor pressure of water-filled parenchyma cells (which is what makes lettuce and bean sprouts crunchy and which collapses as soon as salt draws the water out). Sclerenchyma fibres are not dependent on turgor — they are rigid by construction, like tiny wooden beams — and they maintain their crunch even after the surrounding parenchyma has wilted. This is why banana blossom in a fish-sauce dressing stays crunchy for 20+ minutes while lettuce in the same dressing goes limp in 5. The crunch is architectural, not hydraulic, and it survives the dressing because the architecture is stronger than the osmotic pressure the salt imposes.`,
    },
    {
      title: 'Eat by the chopstick-full — crunch, chicken, herb, peanut in every lift',
      description: `Eat with chopsticks — lifting a tangle of blossom shreds, chicken fibres, herb leaves and peanut fragments in each pinch. The mouthful should carry all five textures: the blossom's sclerenchyma crunch (snappy, dry, faintly astringent), the chicken's poached shred (lean, fibrous, neutral), the peanut's crushed crunch (fatty, nutty, different from the blossom's crunch), the herb's soft tear (peppery from the rau răm, cool from the kinh giới), and the fried shallot's crisp (sweet, caramelised, oil-glazed).

Five crunches and five flavours in one chopstick-lift. The blossom is the loudest crunch and the mildest flavour; the fried shallot is the quietest crunch and the sweetest flavour; and the dressing — sour, salty, garlicky, hot — ties them together as the sauce ties every Vietnamese salad together, by providing the acid-salt-sweet baseline that every component riffs against.

Nộm hoa chuối is a garden dish — it costs the price of the chicken, because the blossom came from the tree behind the house and the peanuts came from the plot beside it and the limes came from the tree beside that. In the north, where the banana trees grow in every courtyard and the blossoms are available from late spring through early autumn, the nộm appears at lunch two or three times a week, and its appearance means: the tree flowered, the knife was sharp, and lunch is twenty minutes away.`,
      tip: `Nộm hoa chuối is the northern counterpart to the southern gỏi bông điên điển — both are flower-based salads dressed in fish sauce and lime, both use rau răm as their fixed herb, and both are time-limited by their ingredient's freshness. But the two flowers occupy opposite ends of the texture spectrum: the điên điển blossom is soft, delicate and dissolving (it browns in 5 minutes and wilts in 10); the banana blossom is hard, fibrous and enduring (it holds crunch for 25 minutes in dressing). The south's flower salad is a sprint — toss and eat in under 5 minutes. The north's flower salad is a longer event — toss and eat within 20. Same format, two flowers, two clocks, and the clock's speed is a function of the flower's cell-wall architecture. The điên điển has thin parenchyma walls (soft, fast-wilting). The banana blossom has thick sclerenchyma fibres (rigid, slow-wilting). The wall thickness wrote the eating pace.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
