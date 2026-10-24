'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'tieu-phu-quoc',
  title: `Tiêu Phú Quốc (Phú Quốc Peppercorn — Green, Red and Black, Three Ways)`,
  subtitle: `The same berry from the same vine, harvested at three different stages of ripeness and processed three different ways to produce three different spices: green pepper (fresh, piney, citrus-bright), red pepper (ripe, fruity, sweet-hot) and black pepper (dried, fermented, deep-warm). A single plant, three ingredients, and the second pillar of the island's spice economy after the fish sauce.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/tieu-phu-quoc.jpg',
  intro: `Phú Quốc grows pepper the way it makes fish sauce — with a specificity of terroir, a stubbornness of method, and a quality that the international spice trade recognises by name. The pepper gardens climb every hillside on the island's northern half, the vines spiralling up living or concrete pillars to three metres and fruiting in dense, hanging racemes that shift from green to yellow to red as the berries ripen over the course of several months. A single vine produces all three colours; which colour is harvested depends on what the farmer wants to make, and the decision is the recipe.

Piper nigrum — the pepper plant — produces a single berry, and that berry contains a single compound that matters above all others: piperine, the alkaloid that activates the tongue's heat receptors and that IS pepper's heat. But piperine alone is only the foundation; the berry also carries terpenes (limonene, beta-caryophyllene, sabinene, pinene) that carry its aromatic identity, and these terpenes change dramatically as the berry ripens and as it is processed. Green pepper is the unripe berry, and its terpene profile is dominated by fresh, bright, vegetal, citrus-piney compounds — the same volatiles that burst from the fresh berries in the ốc vú nàng recipe. Red pepper is the fully ripe berry, and its terpene profile has shifted to fruity, floral, almost wine-like — the same berry, weeks later, now smelling of stone fruit rather than pine needles. Black pepper is the ripe or near-ripe berry, briefly blanched and then sun-dried, during which process an enzymatic browning — polyphenol oxidase, the same enzyme that browns apples — darkens the skin to black and the terpene profile deepens into the warm, woody, slightly smoky register the world knows as "pepper."

Phú Quốc's pepper distinction — what makes it Phú Quốc's rather than Kampot's or Malabar's or Sarawak's — is the combination of the island's laterite soil (iron-rich, acidic, well-drained), its rainfall pattern (heavy monsoon, dry season), its elevation (the gardens are on hillsides, not flatlands), and its processing tradition (small-batch, hand-harvested, sun-dried on bamboo mats). The piperine content of Phú Quốc black pepper routinely tests at 5-7%, which is at the high end of the global range and which translates directly to heat intensity. But piperine is the baseline — what makes the island's pepper sought after by chefs is its aromatic complexity: a sniff of freshly cracked Phú Quốc black pepper gives warm wood, faint citrus, a hint of chocolate, and a long, slow heat that builds rather than stings.

This recipe is not a recipe in the usual sense — you cannot grow pepper in a German kitchen, and the processing from vine to table takes weeks of sun and wind that no oven replicates. Instead, it is a guide to understanding, sourcing and using the three forms of Phú Quốc pepper, each in the preparation that shows it best: green pepper in a stir-fry with shrimp, red pepper in a finishing salt, and black pepper cracked over a fried egg. Three colours, three techniques, three dishes, one vine.`,
  ingredientSections: [
    {
      title: 'Green pepper — the fresh berry',
      items: [
        {
          amount: 50,
          unit: 'g',
          name: 'fresh green peppercorns on the stem (tiêu xanh)',
          note: `The unripe berry — bright green, firm, sharply aromatic. Available at high-end grocers, spice suppliers and Asian markets. Brined green peppercorns (in jars) are the accessible substitute — rinse well. Dried green peppercorns are a distant third — they have lost the volatile terpenes that make fresh green pepper a different ingredient from dried.`,
        },
        { amount: 300, unit: 'g', name: 'shrimp, shell-on, for the stir-fry' },
        { amount: 3, name: 'cloves garlic, smashed' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'Red pepper — the ripe berry',
      items: [
        {
          amount: 2,
          unit: 'tbsp',
          name: 'dried red peppercorns (tiêu đỏ)',
          note: `The fully ripe berry, dried with its red skin intact — rarer and more expensive than black pepper because the harvest window is narrower (the berry must be picked at exact peak ripeness) and the drying must preserve the colour. Sold at specialty spice shops. Its flavour is fruity, warm, faintly sweet and less sharp than black — closer to a mild, aromatic paprika crossed with pepper than to straight heat.`,
        },
        { amount: 3, unit: 'tbsp', name: 'flaky sea salt (Maldon or similar)' },
        { amount: 1, unit: 'tsp', name: 'lime zest, finely grated' },
      ],
    },
    {
      title: 'Black pepper — the dried, fermented berry',
      items: [
        {
          amount: 2,
          unit: 'tbsp',
          name: 'whole black peppercorns (tiêu đen Phú Quốc), freshly cracked',
          note: `Buy whole, crack as needed — pre-ground pepper loses its volatile terpenes within days of grinding, and what remains is piperine heat without aromatic depth. A good Phú Quốc black peppercorn, cracked between the teeth, should give heat first, then wood, then a faint citrus, then a long warm finish. If it gives only heat, it is old or it is not Phú Quốc's.`,
        },
        { amount: 4, name: 'eggs, for frying' },
        { amount: 2, unit: 'tbsp', name: 'butter' },
        { amount: 1, unit: 'tsp', name: 'fish sauce' },
      ],
    },
  ],
  steps: [
    {
      title: 'Green pepper: stir-fry with shrimp — the fresh burst',
      description: `Heat the oil in a wok over high heat until smoking. Add the garlic — 10 seconds. Add the shrimp and sear 60 seconds without moving. Flip, add the whole green peppercorn clusters — stems and all — the fish sauce and the sugar.

Toss 60 seconds more. The peppercorns will burst in the heat — the same aromatic detonation the ốc vú nàng received — and the shrimp will finish in the pepper-scented oil, their shells crisping and caramelising.

Total wok time: 2.5 minutes. The shrimp should be pink, the pepper clusters should be glossy-dark, and the wok should smell overwhelmingly of citrus-pine pepper and seared shellfish.

Serve immediately, peppercorn clusters and all. The clusters are eaten — stem, berry, everything — bitten off the raceme like tiny green grapes. The burst of each berry between the teeth is a sharp, bright, piney hit that cuts straight through the shrimp's richness.`,
      tip: `Fresh green pepper's volatiles — principally limonene (citrus), beta-pinene (pine) and sabinene (woody-spicy) — are present at 5-10 times the concentration of dried black pepper, because drying evaporates them. A stir-fry with fresh green pepper therefore carries an aromatic intensity that no amount of dried pepper can replicate: it smells of a pepper garden, not of a pepper mill. The stir-fry format is the optimal delivery because the high heat bursts the oil cells rapidly (the 80°C threshold) and the fat in the wok captures the released volatiles before they can evaporate into the air. The wok is a volatile-capture device, and the fat is the solvent. Same principle as the mỡ hành, applied to pepper.`,
    },
    {
      title: 'Red pepper: finishing salt — the fruity warmth',
      description: `Crack the dried red peppercorns coarsely in a mortar — not fine, not whole. Coarse enough that individual fragments are visible and provide a staged release on the tongue.

Combine with the flaky sea salt and the freshly grated lime zest. Toss with your fingers to distribute the zest's oil through the salt — the friction releases the limonene and it should perfume your hands.

Use this salt as a finishing condiment — pinched over grilled fish, over sliced avocado, over a piece of seared tofu, over the cơm tấm chả cá from recipe 4 — anywhere you would reach for salt-and-pepper and want something warmer, fruitier and more interesting. A pinch between your fingers, held to your nose, should smell of stone fruit and mild heat and lime.

Store in a small jar, sealed. It keeps 1 week before the lime zest oxidises and the red pepper's aromatics fade. Make small batches, use quickly.`,
      tip: `Red peppercorns are the same berry as black, harvested weeks later and dried differently — the skin is left intact rather than being enzymatically browned, and the drying is gentler (often in the shade) to preserve the red anthocyanin pigment. The flavour difference is dramatic: where black pepper's browning produced pyrazines and furanones (warm, smoky, roasted), the unbrowsed red skin retains more of the original terpenes (fruity, floral) and its anthocyanins contribute a mild, tannic, wine-like bitterness. Red pepper is therefore mellower, more complex and less sharp than black — a finishing spice rather than a cooking spice, and one that rewards restraint. A heavy hand with red pepper wastes it; a pinch on the right surface reveals it.`,
    },
    {
      title: 'Black pepper: cracked over a fried egg — the deep warmth',
      description: `Heat the butter in a small pan over medium heat. Crack an egg in — let the white set, spoon hot butter over the yolk, and pull when the edges are golden-lacy and the yolk is still liquid.

Slide onto a plate. Crack black Phú Quốc pepper generously over the yolk — coarsely, so the fragments are visible and crunch faintly. Add a few drops of fish sauce directly onto the yolk.

That is the dish: a fried egg, butter, black pepper, fish sauce. Four ingredients, and every one is doing one job. The egg is the canvas. The butter is the fat. The pepper is the spice. The fish sauce is the salt. And the egg yolk, broken with the spoon and mixed with the pepper and the fish sauce, becomes a thick, golden, peppery, umami-rich sauce that is eaten with rice, with bread, with bún, or with nothing — the simplest hot meal on the island and the one that shows Phú Quốc's black pepper most clearly, because there is nothing else on the plate to compete with it.

Eat within 60 seconds of cracking the pepper. The volatile terpenes in freshly cracked black pepper begin to evaporate immediately — their half-life at room temperature is roughly 15-20 minutes, and a cracked pepper on an egg that sat five minutes has already lost a third of its aroma. Crack at the plate, at the moment, and eat.`,
      tip: `Cracking pepper at the plate rather than in the kitchen is not a restaurant affectation — it is a volatile-chemistry necessity. Piperine (the heat) is non-volatile and stable indefinitely; the terpenes (the aroma) are volatile and unstable. Pre-ground pepper has full heat and no aroma — it is the skeleton of the spice. Freshly cracked pepper has both — the heat and the perfume together — and the perfume is the difference between pepper as a seasoning and pepper as a spice. This is why pepper mills exist: not to grind (a jar of pre-ground does that), but to preserve the volatiles until the moment of use. The mill is a storage container that releases its contents one turn at a time, and each turn is a fresh exposure of the berry's interior to air, and each exposure is a new burst of terpenes. The first turn is the best. The hundredth turn of the same peppercorn is ground dust. Buy whole. Crack fresh. The three seconds between the crack and the tongue is the window the aroma lives in.`,
    },
    {
      title: 'Three colours, one vine, one island — and the pepper that ties the collection together',
      description: `Set all three dishes on the same table: the shrimp stir-fry with its green clusters, the finishing salt in its small jar, and the fried egg with its coarse black crack. Taste them in sequence — green, then red, then black — and the vine tells its own story:

Green: sharp, bright, piney, citrus, raw. The berry at its youngest, before any processing, carrying its full load of volatile terpenes and a sharp, almost wasabi-like piperine hit. This is the pepper that burst in the ốc vú nàng and that will appear in the ghẹ Hàm Ninh recipe to come.

Red: mellow, fruity, warm, almost sweet. The berry at full ripeness, its terpene profile shifted from pine to stone fruit, its piperine slightly softened by the sugars the ripening produced.

Black: deep, woody, smoky, complex. The same ripe berry, blanched and sun-dried, its polyphenol-oxidase browning having produced the warm, roasted, chocolatey compounds that make black pepper black pepper — the spice the world has traded for two thousand years.

One vine, three harvests, three processes, three spices. The island grows all three and uses all three, often in the same meal, and the collection has now placed pepper in almost every savoury dish it has written — from the northern kho's cracked black to the southern gỏi's coarse white to Phú Quốc's fresh green. The berry that ties them together is here, on this island, on this vine, and this recipe is its portrait.`,
      tip: `Phú Quốc's pepper is the collection's second infrastructure ingredient, after the nước mắm — the two pillars of the island's spice economy, both built from a biological resource the island's specific conditions favour. The nước mắm comes from the sea (anchovy, salt, time, wood). The pepper comes from the hillside (vine, laterite, monsoon, sun). Between them they season everything the island cooks and a great deal of what the mainland cooks, and the two recipes — nước mắm first, then pepper — are the collection's way of honouring the foundation before it decorates the house. Every kho in this collection used pepper. Every dressing used fish sauce. The island produced both. The recipes document both. And the kitchen that uses both together — pepper cracked into nước-mắm-dressed food, the same combination that has appeared in every recipe since page one — is using Phú Quốc without knowing it.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
