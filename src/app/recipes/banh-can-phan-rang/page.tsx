'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-can-phan-rang',
  title: `Bánh Căn Phan Rang (Clay-Mould Mini Rice Cakes — Ninh Thuận Style)`,
  subtitle: `Rice batter poured into tiny, lidded, unglazed clay moulds set over a charcoal fire — cooked from below and above simultaneously until the bottom is golden-crisp and the top is soft-steamed, producing a two-textured mini cake: crunchy at the base, custardy at the crown, with a quail egg or a shrimp or a scallion nestled on top. Phan Rang's breakfast, eaten by the dozen, dipped in a fish-sauce-and-fish-broth nước chấm found nowhere else.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '45 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/banh-can-phan-rang.jpg',
  intro: `Bánh căn is Phan Rang's breakfast the way phở is Hanoi's — the dish the city eats every morning, the dish every visitor is told to try, and the dish no other city makes in quite the same way. Phan Rang is the capital of Ninh Thuận, the driest province in Vietnam, on the south-central coast between Nha Trang and Phan Thiết, and its food carries the Chăm influence that distinguishes Ninh Thuận from every other coastal province: the spicing is drier, the sauces are more fish-forward, and the cooking vessels are clay — specifically, the unglazed terracotta moulds that give bánh căn its name and its character.

The mould — khuôn bánh căn — is a flat terracotta disc about 25 cm in diameter, with 6-8 shallow round wells (each roughly 7 cm across and 2 cm deep) pressed into its surface, and a matching flat terracotta lid. The disc sits directly over charcoal embers, and the cook ladles a thin layer of rice batter into each well, adds a topping (quail egg, shrimp, minced pork, scallion, or nothing), covers with the lid, and waits 3-4 minutes. The bottom of each cake cooks by conduction from the hot clay (producing a golden, crisp, slightly oily base), and the top cooks by steam trapped under the lid (producing a soft, pale, custardy surface). The two-texture result — crisp-bottom, soft-top — is the bánh căn's defining quality and the quality no non-clay, non-lidded cooking method can replicate.

The batter is the simplest in this collection: rice flour and water, with a pinch of salt. No egg, no coconut milk, no tapioca — nothing but rice and water, producing a cake that tastes purely of rice and of the clay it cooked on. Some versions add a small proportion of cooked rice (blended into the batter) for a denser, chewier result; others add a splash of coconut milk for richness. The pure-rice version is the Phan Rang default, and its simplicity is its statement: the cake is a vehicle for the topping and the dipping sauce, and a vehicle should not announce itself.

The dipping sauce is where Phan Rang departs from every other Vietnamese city. Instead of a standard nước chấm (fish sauce, lime, sugar, chili), Phan Rang's bánh căn is dipped in a fish-broth-based sauce — a thin, warm, savoury liquid made by simmering dried fish or fish bones, then seasoning with fish sauce, scallion oil and chili. The sauce is closer to a light soup than to a dipping condiment, and the bánh căn is dunked into it like a beignet into coffee — the warm broth soaks into the cake's crispy base, softening it slightly while seasoning it from below, and the combination of the cake's rice-neutral chew, the broth's fish-savoury warmth and the topping's specific flavour (egg-rich, or shrimp-sweet, or scallion-sharp) is the three-note chord that Phan Rang plays every morning, twelve cakes at a time.`,
  ingredientSections: [
    {
      title: 'The batter',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'rice flour (bột gạo)',
        },
        { amount: 400, unit: 'ml', name: 'water' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (added to the batter for easier release from the mould)' },
        {
          amount: 50,
          unit: 'g',
          name: 'cooked rice, blended smooth (optional — for a denser, chewier cake)',
        },
      ],
    },
    {
      title: 'The toppings (mix and match)',
      items: [
        { amount: 12, name: 'quail eggs', note: `The classic — one egg per well, cracked directly onto the batter. The egg sets on the steamed surface while the rice crisps on the clay base.` },
        { amount: 12, name: 'small shrimp, peeled, halved' },
        { amount: 100, unit: 'g', name: 'minced pork or squid, seasoned with fish sauce and pepper' },
        { amount: 4, name: 'scallions, sliced fine', note: `The vegetarian option — scallion scattered on the batter before the lid goes on.` },
      ],
    },
    {
      title: 'The clay mould (or adapted)',
      items: [
        {
          amount: 1,
          name: 'khuôn bánh căn (terracotta mould with 6-8 wells and a lid)',
          note: `Available at Vietnamese kitchenware shops. ADAPTED: a takoyaki pan (the Japanese octopus-ball pan) is the closest substitute — its hemispherical wells are slightly deeper than the bánh căn's shallow wells, producing rounder cakes, but the cook-from-below principle is the same. An æbleskiver pan (Danish pancake pan) also works. The lid can be a flat sheet of metal or a pot lid — the steam must be trapped.`,
        },
        { amount: 1, unit: 'tbsp', name: 'neutral oil, for greasing the wells' },
        { amount: 1, name: 'charcoal fire or gas burner on medium heat' },
      ],
    },
    {
      title: 'The Phan Rang dipping broth (nước chấm bánh căn)',
      items: [
        {
          amount: 300,
          unit: 'ml',
          name: 'fish broth (made from simmering 100 g dried fish or fish bones in 500 ml water, 20 min, strained)',
          note: `The Phan Rang specific — a warm, thin, savoury broth rather than a cold, sweet-sour sauce. The broth should taste of fish and salt, simply and directly.`,
        },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'scallion oil (mỡ hành — the same green scallion oil the sò huyết used)' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 1, unit: 'tbsp', name: 'fried shallots' },
        { amount: 1, unit: 'tbsp', name: 'fried garlic chips' },
      ],
    },
  ],
  steps: [
    {
      title: 'Mix the batter, heat the mould — the clay must be hot before the first pour',
      description: `Whisk the rice flour, water, salt and oil until smooth — the consistency of thin cream, with no lumps. If using the cooked-rice addition: blend the rice with 100 ml of the water until perfectly smooth, then whisk into the flour mixture. Rest the batter 15 minutes — the rice starch hydrates and the batter pours more evenly.

Set the clay mould over the charcoal fire (or on a gas burner at medium heat). Let it heat 5-8 minutes — the clay is a slow conductor and needs time to reach the 180-200°C that crisps the batter's base. Test: flick a drop of water into a well — it should sizzle and evaporate in 2 seconds.

Oil each well generously with a brush or a piece of pork fat on a stick (the traditional tool — a chunk of fatback rubbed across the hot wells, melting and greasing simultaneously).`,
      tip: `The unglazed terracotta is doing two things no metal pan does. First: its rough, porous surface grips the batter in thousands of micro-anchor-points, producing a base that releases cleanly as a single piece (from the oil in the larger pores) but that has a rough, textured, golden-brown underside (from the micro-anchors) rather than the smooth, flat underside a metal pan produces. Second: the clay's low thermal conductivity (roughly 1 W/m·K, the same as the nồi đất and the bò nướng ngói tile) distributes heat evenly and slowly across the well's surface, preventing hot-spots that burn one side while under-cooking the other. Metal conducts heat faster (50-80 W/m·K for cast iron) and creates hot-spots at the burner's centre. The clay is slower but more even, and "slow but even" is what a 3-minute cake needs.`,
    },
    {
      title: 'Pour, top, lid, wait — 3-4 minutes, two textures forming simultaneously',
      description: `Ladle batter into each well — fill about two-thirds full (the cake does not rise much — this is not a pancake with leavening). The batter should sizzle gently on contact with the hot, oiled clay.

Add the topping immediately: crack a quail egg onto one well, lay two shrimp halves on another, scatter scallion on a third, spoon minced pork on a fourth. Each well gets a different topping if desired — the mixed batch is the Phan Rang standard, so each person's plate carries variety.

COVER with the clay lid. The lid traps the steam rising from the wet batter, and the steam cooks the top surface while the clay base cooks the bottom surface — two heat sources, two textures, one cake.

Wait 3-4 minutes. Do not lift the lid to check until 3 minutes have passed — every lid-lift dumps the trapped steam and the top surface goes from soft-custardy to dry-tough.

At 3-4 minutes: lift the lid. The cakes should be: golden-crisp at the base (visible as a darker ring where the batter contacts the well's wall), soft-pale-custardy at the top (the steamed surface, still slightly moist), and the topping cooked through (the quail egg set with a faintly runny yolk — ideal — or fully set, depending on the fire's intensity).

Pop each cake out with a thin spatula or a bamboo stick — run the stick around the well's edge and the cake releases in one piece. Set on a plate, crispy-side down (so the crisp stays crisp and does not steam against the plate's surface).`,
      tip: `The two-texture result — crisp base, soft top — is a function of the two heat sources' different mechanisms. The base cooks by CONDUCTION from the hot clay (dry heat, 180-200°C, producing Maillard browning and dehydration = crispness). The top cooks by STEAM from the trapped moisture (wet heat, 100°C, producing starch gelatinisation without surface dehydration = softness). The same batter, in the same well, at the same time, receives two different cooking methods on its two faces and develops two different textures. No other cooking format in this collection produces a two-textured result from a single pour — every other fried or steamed item is uniformly crisp (fried throughout) or uniformly soft (steamed throughout). The bánh căn's lidded-clay-well format is unique because it delivers both, simultaneously, to one cake.`,
    },
    {
      title: 'Dunk in the warm fish broth — the Phan Rang dip that nobody else uses',
      description: `Serve batches of 4-6 cakes per person — the cakes arrive continuously from the mould, and each batch replaces the one just eaten. The eating pace matches the cooking pace, and a skilled bánh căn cook keeps 6-8 wells in continuous rotation, pouring the next batch as the previous one comes off.

The dipping: hold a cake by its edge (the crispy side is the handle), and dunk the soft-top side into the warm fish broth. The broth soaks into the custardy surface in 2-3 seconds, seasoning it with fish-savoury warmth and softening it further into a silky, broth-saturated bite. Then eat: the dunked top is soft-salty-fishy, the base is crisp-golden-neutral, and the topping — quail egg, shrimp, scallion — provides its own specific note between the two textures.

The quail-egg cake: the yolk, if still faintly runny, breaks when bitten and runs into the rice cake's steamed surface, enriching it with fat and egg-sweetness — the most luxurious of the four toppings, and the one that runs out first.

The shrimp cake: the shrimp's sweet snap against the rice cake's neutral chew — marine crunch meeting starch cushion.

The scallion cake: the simplest — nothing but rice, scallion and broth — and the one that tastes most like Phan Rang's morning, because it is the cheapest and the one every schoolchild eats.

Eat 10-12 per person. The cakes are small (7 cm across, perhaps 30 g each) and the eating is continuous — the rhythm is: dunk-eat-dunk-eat, with a sip of iced tea between every 3-4 cakes, and the pile of empty wells on the mould refills faster than the plate empties.`,
      tip: `Bánh căn's warm-fish-broth dip is the format that connects Phan Rang to its Chăm heritage more clearly than any other dish in the city's repertoire. The Chăm cuisine — predating the Vietnamese absorption of Champa — was a fish-based, coast-based, dry-climate cuisine that used fermented and dried fish as its primary seasoning, and the warm fish broth as a dipping medium (rather than the cold fish-sauce-lime-sugar that the Vietnamese tradition standardised) is a Chăm survival — a format the Vietnamese adopted when they settled Ninh Thuận and that persists in Phan Rang's breakfast because the breakfast has not changed since the Chăm made it. The bánh căn is a Vietnamese cake dipped in a Chăm sauce, and the combination is Phan Rang's own — the place where the two traditions share a table and a mould and a morning.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
