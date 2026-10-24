'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'thit-kho-tram-den',
  title: `Thịt Kho Trám Đen (Pork Belly Braised with Black Canarium Olives)`,
  subtitle: `Pork belly — cubed, caramelised, simmered low — braised with trám đen, the black olive-like fruit of the Canarium tramdenum tree that grows in the highland forests of Tuyên Quang. The trám's oily, faintly resinous, mineral-bitter flesh melts into the kho's caramel sauce and cuts through the pork's fat with a bitterness no other fruit in the Vietnamese pantry provides. The winter braise of the northern mountains.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '2 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/thit-kho-tram-den.jpg',
  intro: `Trám đen — the black canarium, Canarium tramdenum — is one of the most distinctive and least known ingredients in northern Vietnamese cooking. It is a forest tree fruit, about the size and shape of a large olive, with a thin, dark-purple-to-black skin, a dense, oily, slightly resinous flesh surrounding a hard stone, and a flavour profile that sits in its own category: bitter, oily, faintly smoky, with a mineral depth that tastes of the iron-rich laterite soil the tree grows in and a lingering astringency that the tongue reads as tannin. It is not sweet. It is not sour. It is not savoury in the way a mushroom or a fermented paste is savoury. It is bitter-oily-mineral, and this combination — which would be a defect in a fruit meant to be eaten raw — is a virtue in a braise meant to cut through pork fat, because the bitterness does for the kho what the canh chua's acid does in the south: it resets the palate between bites, and it frames the pork's richness in a contrast that makes the richness more vivid.

The trám harvest runs from September to November — the same autumn window as the cốm Vòng, the chả rươi and the Mekong's cá linh season — and the fruit is available fresh at every highland market during those weeks, sold in baskets by the women who picked them from the forest that morning. Outside the season the fruit is preserved: salted, dried, or — most commonly — boiled briefly and stored in brine, which is the form sold at Vietnamese grocers year-round and the form used when fresh trám is not in hand.

The braise is the northern kho template — the same architecture as every kho in this collection (caramel + protein + liquid + time) — with the trám added as a braising fruit the way the Vũ Đại kho added galangal and the Huế kho added pepper: a single ingredient that changes the kho's register from standard to specific. The pork belly is cubed, caramelised in a medium-amber nước màu (darker than the cá linh kho lạt's pale amber, lighter than the Vũ Đại's near-black), and simmered with the trám for 1.5-2 hours until the pork is soft, the fat is translucent, and the trám's flesh has partially dissolved into the sauce, darkening it, enriching it with the fruit's own oil, and threading a persistent bitterness through the caramel-soy-fish-sauce sweetness that makes this kho taste of the highland and of the season and of nowhere else.

The dish is winter food — eaten with hot rice, a bowl of canh, and pickled mustard greens, in the months when the highland temperature drops to 8-10°C and the kitchen fire runs all day and the household needs a kho that is rich enough and dense enough to keep a farmer warm through an afternoon of terraced-paddy work. It is the kho that closes the Tuyên Quang collection, and it closes it with the forest: the trám came from the same forest that grew the rau dớn, that smoked the trâu gác bếp, and that provided the bamboo for the cơm lam. The forest is the province's pantry, and this kho is its winter inventory.`,
  ingredientSections: [
    {
      title: 'The pork',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'pork belly, skin on, cut into 3 cm cubes',
          note: `Skin on — the skin's collagen dissolves during the 2-hour braise into gelatin that thickens the sauce to a lip-coating glaze. Skinless belly produces a thinner, less unctuous kho.`,
        },
      ],
    },
    {
      title: 'The trám đen',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'trám đen (black canarium olives), fresh or brined',
          note: `Fresh: boil 10 minutes to soften the flesh, then use. Brined/preserved: rinse well to remove excess salt, then use. The fruit should be: olive-sized, dark purple-black, with a firm-oily flesh that yields to a thumbnail press. If entirely unavailable: black olives (Kalamata or Niçoise, rinsed of brine) provide a similar olive-oil-bitter profile but lack the trám's resinous, mineral depth. Name the substitute honestly — the dish without trám is a standard pork kho, and the trám IS the recipe's identity.`,
        },
      ],
    },
    {
      title: 'The caramel and braising liquid',
      items: [
        { amount: 2, unit: 'tbsp', name: 'sugar (for the caramel — medium-amber)' },
        { amount: 1, unit: 'tbsp', name: 'water (to stop the caramel)' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'soy sauce (xì dầu)' },
        { amount: 1, unit: 'tbsp', name: 'sugar (additional, in the braise)' },
        { amount: 300, unit: 'ml', name: 'water or light stock' },
        { amount: 3, name: 'shallots, halved' },
        { amount: 3, name: 'cloves garlic, smashed' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 0.5, unit: 'tsp', name: 'five-spice powder (ngũ vị hương) — optional, some highland households include it' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 1, name: 'bowl of canh (clear soup)' },
        { amount: 200, unit: 'g', name: 'dưa cải chua (pickled mustard greens)', note: `The kho's mandatory acid partner — the pickle's sourness resets the braise's richness bite by bite.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the caramel — medium amber, the highland register',
      description: `Melt the 2 tablespoons of sugar in a heavy pot over medium heat, swirling. Watch the progression: clear → straw → pale gold → amber. Stop at medium amber — the colour of dark honey, with a distinct toasted-bitter-sweet smell. Add the tablespoon of water — it will spit — and swirl to dissolve.

This caramel sits in the middle of the collection's kho-caramel gradient: darker than the cá linh kho lạt's pale amber (which protected a delicate fish), lighter than the Vũ Đại's near-black (which anchored a 14-hour fire). Medium amber for a 2-hour pork braise — dark enough to give the sauce its toffee depth, light enough that the trám's own bitterness is not doubled by caramel bitterness.

Add a splash of oil. Sear the pork belly cubes in the caramel — turning them in the dark sugar until every face is coated and faintly golden, 3-4 minutes. The caramel adheres to the pork's surface and begins the Maillard cascade that runs for the next two hours.`,
      tip: `The caramel's amber depth is calibrated to the trám's bitterness, and the calibration is a bitterness-budget problem. Both the caramel and the trám contribute bitter compounds to the sauce — the caramel's melanoidins and the trám's tannins — and the total bitterness must not exceed the pork fat's ability to round it. A dark caramel + trám = too bitter (the fat cannot compensate, and the sauce tastes medicinal). A pale caramel + trám = correctly bitter (the trám provides the bitterness alone, and the caramel provides only sweetness and colour). A medium caramel + trám = optimally bitter (both contribute, neither dominates, and the fat resolves the sum). The caramel's depth is not an aesthetic choice. It is a bitterness arithmetic.`,
    },
    {
      title: 'Add the trám and braise low — 1.5-2 hours, lid on, patience',
      description: `Add the shallots and garlic to the caramelised pork. Fry 1 minute. Add the fish sauce, soy sauce, additional sugar, pepper and five-spice if using. Stir to coat every cube.

Add the trám đen — whole, with their stones. The stones do not soften and are not eaten, but they sit in the braise and contribute a faint, woody, resinous note from their surface as the liquid simmers around them.

Add the water or stock — enough to come about two-thirds up the pork, not fully submerging. Bring to a simmer. Cover. Reduce to the lowest possible heat — a bubble every 3-4 seconds, no more.

Braise 1.5-2 hours. Check every 30 minutes: the liquid should be reducing slowly, the pork should be softening progressively, and the trám flesh should be dissolving gradually into the sauce — releasing its oil (which floats as dark droplets in the caramel sauce), its tannins (which darken the liquid), and its mineral-bitter flavour (which threads through the sweet-salty-savoury base like a dark ribbon).

At 1.5 hours: test a cube of pork — a chopstick should pass through with zero resistance, and the fat layer should be translucent and gelatinous. The trám flesh should have softened from firm to spreadable, partially clinging to the stone, partially dissolved into the sauce. The sauce should have reduced to a dark, glossy, concentrated glaze — enough to coat the pork but not enough to pool.

If the sauce is still thin at 1.5 hours: uncover and simmer 15-20 minutes more to reduce. If the sauce is thick but the pork is still firm: add a splash of hot water and continue covered.`,
      tip: `The trám's oil — a lipid high in oleic acid, the same monounsaturated fatty acid that makes olive oil's mouthfeel — integrates into the kho's sauce during the braise and changes its viscosity and its feel on the tongue. A pork kho without trám has a sauce that is water-based with suspended fat globules. A pork kho with trám has a sauce that is partially emulsified — the trám's oil and the pork's rendered fat create a more homogeneous, creamier, more adherent sauce that clings to the rice rather than pooling beside it. The trám is not just a flavour ingredient. It is a sauce-texture ingredient, and its contribution is the difference between a sauce that sits on the rice and a sauce that coats the rice.`,
    },
    {
      title: 'Serve with rice, pickled greens, and the winter the highland provided',
      description: `Ladle the kho into a serving bowl — the cubes of pork glossy-dark in their reduced sauce, the softened trám visible among them, the occasional stone protruding (to be navigated by the eater's tongue and set aside on the plate's edge).

Set beside hot rice and a bowl of pickled mustard greens. The eating: a cube of pork on the rice, a spoonful of the dark sauce over, a bite of pickle to reset. The mouthful carries: the pork's soft, melting, collagen-rich chew; the caramel's toffee-sweet-bitter depth; the fish sauce's salt; and the trám's own signature — oily, bitter, mineral, resinous — arriving at the finish like a taste from the forest floor, which is exactly what it is.

The trám's bitterness is the kho's closing note, and it is the note that makes this braise different from every other pork kho in the collection. The Huế kho closes on pepper. The Vũ Đại kho closes on dark caramel. The Vĩnh Long kho closes on coconut. This one closes on a forest fruit's tannin-mineral bite, and the bite is the highland's flavour — the taste of a winter that lasts four months, of a forest that grows the fruit in autumn and the fern in spring, and of a kitchen where the fire runs all day and the kho sits on it from morning to evening, darkening slowly, softening slowly, becoming more itself with every hour.`,
      tip: `Thịt kho trám đen closes the Tuyên Quang collection with the province's winter dish, and the ten recipes now span the full cycle: the spring-summer forage (rau dớn fiddleheads, bánh trứng kiến ant eggs), the autumn harvest (gỏi cá bỗng river fish, vịt bầu sour bamboo duck), the year-round pantry (cơm lam bamboo rice, trâu gác bếp smoked buffalo), and the winter braise (this kho, with its autumn-harvested trám and its all-day fire). The collection is a calendar — the same way Đồng Tháp's collection was a flood cycle and Phú Quốc's was a sea-garden-forest transect — and the calendar runs on the forest's seasons: what the forest gives in spring, the kitchen eats in spring; what the forest gives in autumn, the kitchen preserves for winter. The province is the menu. The seasons are the courses. And the trám — harvested in October, braised in January — is the autumn fruit that feeds the winter table, carried across the months by salt and brine, arriving in the kho pot as a taste of October in the middle of the cold.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
