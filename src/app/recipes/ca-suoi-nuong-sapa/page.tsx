'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-suoi-nuong-sapa',
  title: `Cá Suối Nướng (Charcoal-Grilled Stream Fish — Sapa)`,
  subtitle: `Tiny mountain stream fish — trout-like, palm-sized, cold-water-fed — threaded whole on bamboo skewers, salted, and grilled over charcoal at the edge of the terraced rice fields until the skin crisps and the bones soften and the flesh tastes of the limestone stream the fish swam in an hour ago. Dipped in muối mắc khén. Eaten whole, bones and all. The simplest recipe in the collection, and the one most dependent on the ingredient.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/ca-suoi-nuong-sapa.jpg',
  intro: `Sapa — the mountain town at 1,600 metres, in the Hoàng Liên Sơn range of Lào Cai province, where the terraced rice paddies cascade down the Muong Hoa valley and the H'Mông, the Red Dao and the Tày farm the slopes — has a stream-fish tradition that is the highlands' most elemental cooking: catch a fish, salt it, grill it, eat it. No marinade. No stuffing. No wrapping. No sauce beyond the salt-and-pepper saucer. The fish IS the dish, and the dish is as good as the fish, and the fish is as good as the stream.

The fish are small — 10-15 cm, rarely longer — and they belong to various species of cold-water stream fish: cá bống suối (stream gobies), cá chạch suối (stream loaches, Nemacheilus spp.), and occasionally small trout (cá hồi) in the higher-altitude streams where the water is cold enough. They are caught by hand, by net, by basket-trap, or by the children who wade the streams after school and carry the catch home in plastic bags tied to their belts. The catch is always small — a few hundred grams, a dozen tiny fish — and the eating is always immediate, because a stream fish out of cold water deteriorates faster than any pond fish, and freshness is the only quality that matters.

The grilling setup is the most basic in the collection: a small charcoal fire built between three stones at the edge of the stream or at the edge of the terrace, a bamboo skewer pushed through each fish from mouth to tail, and the skewered fish propped over the fire by wedging the skewer-end between the stones. The fish grill in 8-10 minutes, the cook's only intervention being the occasional turn. The charcoal is whatever wood was at hand — bamboo, pine, hardwood scraps from the house construction — and the smoke varies with the fuel, giving each fire's fish a slightly different aromatic that the cook does not control and does not need to.

The eating is whole: head, tail, fins, bones, everything. The fish are small enough that their bones are hair-thin and soften completely during the brief grilling (the same bone-softening-by-acid that the cá kèo kho achieved in 30 minutes of caramel braise, here achieved in 10 minutes of direct heat, because the bones are even thinner). A cá suối nướng is 2-3 bites, eaten from the skewer, dipped in muối mắc khén between bites, and washed down with — if the occasion warrants — corn wine from a plastic bottle.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        { amount: 20, name: 'small stream fish, 10-15 cm each, gutted, scales left on', note: `The freshest possible — ideally caught that day. Any small, whole, fresh fish works: smelt, sprat, sardine, small trout, small mackerel, whitebait. The fish must be WHOLE — head, tail, fins — because the grilling crisps everything into edible crunch.` },
      ],
    },
    {
      title: 'Seasoning — nothing more than this',
      items: [
        { amount: 1, unit: 'tbsp', name: 'coarse salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (optional — brushed on to prevent sticking)' },
      ],
    },
    {
      title: 'The dipping salt',
      items: [
        { amount: 2, unit: 'tbsp', name: 'muối mắc khén: toasted mắc khén + coarse salt, 1:1, pounded', note: `The highland's universal dip — numbing pepper and salt, nothing else.` },
      ],
    },
    {
      title: 'The fire',
      items: [
        { amount: 1, name: 'small charcoal fire — between three stones, at the edge of the terrace, or a standard grill' },
        { amount: 20, name: 'bamboo skewers' },
      ],
    },
  ],
  steps: [
    {
      title: 'Gut, salt, skewer — the entire preparation in 5 minutes',
      description: `Gut each fish with a thumbnail slit along the belly — squeeze the viscera out, rinse in the stream (or under the tap). Leave the scales on — they crisp during grilling and provide a thin, crunchy armour over the flesh. Leave the head and tail on.

Rub each fish lightly with salt — inside the cavity, across the skin. Thread each fish on a bamboo skewer through the mouth and out the tail, so the fish sits straight.

That is the preparation. No marinade. No spice paste. No herb stuffing. The fish's quality is the recipe's quality, and the salt's job is to amplify what the fish already carries, not to add what it lacks.`,
      tip: `The decision to leave the scales on — counterintuitive for any lowland or coastal fish preparation, where scaling is the first step — is specific to tiny stream fish and to the grilling format. The scales (made of hydroxyapatite and collagen, the same minerals as bone) crisp during the 8-10 minute grill into a thin, translucent, glass-crisp layer that shatters under the tooth and provides a micro-crunch between the charred skin and the soft flesh. Removing the scales exposes the skin directly to the charcoal, and the thin skin of a 10 cm fish burns through in 3 minutes, leaving the flesh unprotected and drying it. The scales are the fish's own grill-proof armour, and keeping them is the cook's decision to use that armour rather than discarding it.`,
    },
    {
      title: 'Grill 8-10 minutes over open charcoal — turn twice, nothing more',
      description: `Prop the skewered fish over the fire — wedge the skewer-ends between stones, or lay across a grate. The fish should be 6-8 cm above the embers — close enough for the skin to char, far enough that the flesh cooks through before the surface burns.

Grill 8-10 minutes total, turning twice (at 3 minutes and at 6 minutes). The fish are small and the heat reaches the centre fast — overcooking is the only risk, and overcooking means dryness (the flesh has almost no fat to insulate it).

The fish are done when: the skin is uniformly golden-brown to lightly charred, the scales have crisped to a translucent armour, the tail and fins are rigid and crisp (tap them — they click like the cá chiên's fins), and the flesh at the thickest point is opaque-white and flakes when prodded with a chopstick.

Pull from the fire. The fish should smell of: charcoal, salt, and the stream — a clean, cold-water, mineral, faintly stony scent that is the cold-water fish's own terroir and that no warm-water, pond-raised fish carries.`,
      tip: `Cold-water stream fish have a different fat-and-flavour profile from warm-water pond fish: the cold water (10-15°C year-round in Sapa's high-altitude streams) produces fish with higher proportions of unsaturated omega-3 fatty acids (the cell membranes require more unsaturated fat to maintain fluidity at cold temperatures — a biochemical adaptation called homeoviscous adaptation), and the fast-flowing, oxygen-rich, mineral-laden water produces fish with higher myoglobin content (for oxygen transport during sustained swimming against the current) and higher dissolved-mineral content (absorbed through the gills). The result: a stream fish tastes cleaner, more mineral, more "cold" than a pond fish, because its biochemistry IS colder, more mineral and more aerobic. The terroir is not a metaphor. It is a measurable difference in the flesh's fatty-acid ratio and mineral load.`,
    },
    {
      title: 'Eat whole from the skewer — dip in muối mắc khén, bones and all',
      description: `Hold the skewer. Dip the fish's head-end into the muối mắc khén. Bite — the head crunches (the skull of a 10 cm fish is paper-thin and shatters under the tooth), the scales crackle, and the flesh underneath is: white, flaking, faintly sweet, mineral, tasting of limestone water and mountain cold. The mắc khén's numbing tingle arrives through the salt and meets the fish's own mineral note, and the two merge into a single sensation: numbing-mineral-salty-cold, the highland's flavour signature in its purest form.

Second bite: the body — more flesh, the bones invisible (dissolved by the heat into soft, edible calcium that the tongue does not register as bone), the belly cavity carrying a faintly bitter note from the residual bile (a flavour the highland eaters expect and enjoy, the way the nậm pịa's bitterness is expected).

Third bite: the tail — all crunch, no flesh, a crispy fan that shatters and dissolves. The fish is gone in three bites and ten seconds.

Eat 5 per person. Drink corn wine between fish. The Sapa rhythm is the simplest in the collection: catch, gut, salt, skewer, grill, eat, repeat. No recipe more complex could improve this, because the fish's quality IS the complexity, and adding technique would subtract attention from the only thing that matters: what the stream grew, and what the fire revealed.`,
      tip: `Cá suối nướng is the collection's simplest recipe — the fewest ingredients (fish + salt), the fewest steps (gut, salt, skewer, grill), the shortest preparation (5 minutes), and the least technique (prop over fire, turn twice). It is the recipe that most clearly argues the collection's core thesis: a cuisine's greatest dishes are not its most complex but its most honest, and honesty is a function of ingredient quality, not of technique quantity. The stream fish needs no marinade because the stream already marinated it — in minerals, in cold, in oxygen, in the specific chemistry of the specific limestone that the specific water flows over. The cook who adds salt and fire is adding the minimum required to make the stream's chemistry edible. Everything else — the mắc khén, the corn wine, the mountain view — is context, and the context is already perfect.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
