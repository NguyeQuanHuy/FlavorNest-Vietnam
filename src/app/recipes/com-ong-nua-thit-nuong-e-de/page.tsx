'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'com-ong-nua-thit-nuong-e-de',
  title: `Cơm Ống Nứa Thịt Nướng Ê Đê (Bamboo-Tube Rice with Grilled Meat — The Complete Ê Đê Meal)`,
  subtitle: `The full highland plate: cơm lam (sticky rice steamed inside a green bamboo tube over charcoal until the rice absorbs the bamboo's sweet, woody, chlorophyll-green flavour), thịt nướng (pork or chicken marinated in lemongrass, lá é and wild honey, grilled over the same fire), and rau rừng luộc (forest greens — lá bép, lá nhíp, rau dớn — boiled to tender and dipped in muối ớt lá é). Three components, one fire, one forest, one meal that contains everything the highland provides and nothing the lowland ships.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '2 hr',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/com-ong-nua-thit-nuong-e-de.jpg',
  intro: `This recipe is the Đắk Lắk collection's FINALE — not a single dish but a COMPLETE MEAL, the Ê Đê highland set that brings together three components (rice, meat, vegetables) cooked by ONE heat source (the charcoal fire) and sourced from ONE landscape (the highland forest-edge: bamboo from the forest, rice from the paddy, meat from the yard, greens from the forest floor, herbs from the garden). The set is: starch (cơm lam), protein (thịt nướng), fibre (rau rừng), and condiment (muối ớt lá é) — a nutritionally complete meal from a single fire and a single geography.

The collection has already documented the cơm lam Ê Đê (recipe #1 in this Đắk Lắk set — the bamboo-tube rice), and the gà nướng bản Đôn (#2 — the grilled chicken with lá é salt). This recipe does not REPLACE those pages — it COMPLETES them, by documenting the SET they belong to: the Ê Đê meal format, where the three components are prepared simultaneously, around the same fire, in the same 90-minute cooking session, and served together as the highland's one-fire-one-table dinner.

THE ONE-FIRE PRINCIPLE: the Ê Đê kitchen traditionally uses a single hearth — a pit fire or a three-stone fire on the longhouse's floor — and the meal's components are arranged around the fire at different distances, using the fire's RADIANT-HEAT GRADIENT to cook each component at its optimal temperature:

THE BAMBOO TUBES (cơm lam) lean against the fire's stones at a 60° angle, 15-20 cm from the coals — far enough for MODERATE heat (the bamboo's surface reaches roughly 150-180°C, hot enough to steam the rice inside but not so hot that the bamboo burns through before the rice is cooked). The tubes rotate every 10-15 minutes, and the rice cooks in 40-50 minutes.

THE MEAT (thịt nướng) sits in a grilling basket or on skewers DIRECTLY OVER the coals, 8-10 cm above — the HOTTEST position, where the radiant heat is strongest (the meat's surface reaches 200-250°C, the Maillard zone). The meat cooks in 20-30 minutes with turning.

THE GREENS (rau rừng) boil in a pot of water set ON the fire's stones — the pot contacts the stones directly, and the water inside reaches 100°C. The greens cook in 5-10 minutes.

Three temperatures, three components, one fire. The fire is the KITCHEN — the equipment is the landscape (bamboo, stones, a pot), and the cook's skill is SPATIAL: knowing WHERE to place each component relative to the fire, and WHEN to start each one so they finish simultaneously.

The meal's eating is communal and hand-scale: the bamboo tube is split open at the table (cracked lengthwise with a knife, the two halves peeled apart, the rice inside steaming and carrying the bamboo's sweet-green-woody aroma). The meat is chopped on a board. The greens are piled on a plate. The muối ớt lá é sits in a saucer. And the table eats by hand — tearing rice from the tube, tearing meat from the bone, dipping both in the salt, eating the greens between bites. No chopsticks, no individual plates, no portion control. The fire is communal. The food is communal. And the eating is communal — the Ê Đê longhouse format, where 10-20 people sit in a circle around the fire and the food sits in the circle's centre.`,
  ingredientSections: [
    {
      title: 'Cơm lam (bamboo-tube rice)',
      items: [
        { amount: 400, unit: 'g', name: 'glutinous rice (nếp), soaked 4 hr, drained', note: `The same sticky rice the cơm lam Ê Đê recipe documented. Glutinous (nếp), not regular (tẻ) — the amylopectin-rich glutinous rice steams to a sticky, cohesive, chewy mass that holds together when the tube is split, while regular rice would crumble.` },
        { amount: 200, unit: 'ml', name: 'coconut milk (optional — some Ê Đê versions add coconut milk to the rice for richness)' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 4, name: 'fresh green bamboo tubes (nứa or tre), 30-40 cm long, 5-6 cm diameter, one end sealed by a natural node', note: `GREEN bamboo — freshly cut, still moist, the inner wall lined with a thin, translucent membrane (màng tre) that releases its volatile compounds (principally trans-2-hexenal and cis-3-hexenol — the "green leaf" aroma compounds) during steaming, infusing the rice with the bamboo's sweet, woody, chlorophyll-green flavour. Dried bamboo does not work — the volatiles have evaporated.` },
        { amount: 4, name: 'banana-leaf plugs or wads of fresh lá dong, to seal the open end' },
      ],
    },
    {
      title: 'Thịt nướng (grilled meat)',
      items: [
        { amount: 600, unit: 'g', name: 'pork shoulder or chicken thigh, sliced 1.5 cm thick or in large pieces', note: `Bone-in for chicken (the bone conducts heat to the interior and contributes gelatin to the surface during grilling). For pork: the shoulder's marbling provides self-basting; loin is too lean for the open-fire method.` },
        { amount: 2, name: 'stalks lemongrass, minced fine' },
        { amount: 1, unit: 'tbsp', name: 'ground turmeric' },
        { amount: 10, name: 'lá é leaves, chiffonade (the eugenol marinade)' },
        { amount: 3, name: 'cloves garlic, pounded' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'wild honey (mật ong rừng)', note: `Highland wild honey — darker, more complex, more floral than cultivated honey. The honey's fructose caramelises during grilling, contributing to the Maillard crust + a subtle floral sweetness that cultivated honey's blander profile does not provide.` },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
      ],
    },
    {
      title: 'Rau rừng luộc (boiled forest greens)',
      items: [
        { amount: 200, unit: 'g', name: 'lá bép (Gnetum gnemon leaves)', note: `The same mild, mucilaginous leaf the lẩu lá rừng used — here boiled simply, 5-7 min, drained, served whole.` },
        { amount: 100, unit: 'g', name: 'lá nhíp (Gnetum gnemon young shoots)', note: `Tender, sweet, the "highland spinach."` },
        { amount: 100, unit: 'g', name: 'rau dớn (Diplazium esculentum — fiddlehead fern)', note: `The highland's spring fern — the tightly curled young fronds (fiddleheads) of a forest-floor fern, boiled 3-4 min until tender. The texture: crisp-tender, slightly mucilaginous, with a faint, green, mineral, forest-floor flavour. Available at Vietnamese highland markets in spring; if unavailable, any tender forest green or regular water spinach substitutes structurally.` },
      ],
    },
    {
      title: 'Muối ớt lá é',
      items: [
        { amount: 2, unit: 'tbsp', name: 'coarse salt' },
        { amount: 4, name: 'green bird\'s-eye chilies' },
        { amount: 10, name: 'lá é leaves' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
      ],
    },
  ],
  steps: [
    {
      title: 'Start the fire, load the bamboo tubes, lean them in — the rice starts first (40-50 min)',
      description: `BUILD THE FIRE: hardwood charcoal (the Ê Đê use jackfruit wood, longan wood or cashew wood — dense, slow-burning, producing long-lasting, high-heat embers). Let the fire burn to glowing embers — no flame, just heat. Set 3-4 stones around the fire's edge (the stones are the tube-rests and the pot-supports).

LOAD THE TUBES: stuff each bamboo tube with the soaked, drained glutinous rice — fill to 3-4 cm below the open end (the rice swells during steaming and needs room). If using coconut milk: pour 30-40 ml into each tube after the rice. Add a pinch of salt. Plug the open end with a banana-leaf wad — press tight (the plug keeps the steam inside, converting the bamboo tube into a sealed pressure-vessel that steams the rice in its own moisture + the coconut milk + the bamboo's released volatiles).

LEAN the loaded tubes against the stones at a 60° angle — the sealed-node end at the bottom (closest to the coals), the plugged-open end at the top (furthest from the coals). The heat enters from the bottom, rises through the bamboo's interior, and steams the rice from bottom to top. Rotate the tubes 90° every 10-15 minutes — the rotation ensures even heating (the side facing the fire heats more than the side facing away, and without rotation the rice on the fire-side cooks while the rice on the away-side stays raw).

THE BAMBOO'S TRANSFORMATION: as the fire heats the green bamboo, the tube's inner membrane (the thin, translucent, cellulose-and-hemicellulose layer lining the bamboo's interior) begins to release its volatile compounds: trans-2-hexenal and cis-3-hexenol (the "green leaf" volatiles, the same compounds fresh-cut grass releases), furfural (a sweet, bread-like, Maillard-adjacent compound produced by the hemicellulose's thermal decomposition at 150-180°C), and traces of vanillin (from the bamboo's lignin, which partially decomposes at the tube's inner temperature). These volatiles migrate inward — from the tube wall through the steam to the rice — and infuse every grain with the bamboo's sweet-green-woody-vanilla flavour. The infusion takes 30+ minutes, which is why the rice cooks SLOWLY (the bamboo's insulation moderates the fire's heat) and why the flavour is DEEP (the long contact time allows full volatile migration).

At 40-50 minutes: the rice is done — a bamboo tube, tapped on the side, sounds SOLID (not sloshing — the rice has absorbed all the liquid and has set into a cohesive, sticky, cylinder-shaped mass). The outer bamboo is charred dark (the fire-facing side is black; the away-side is brown-green). The plug is scorched. And the rice inside — invisible until the tube is split — is: sticky, cohesive, infused, and carrying the bamboo's aroma in every grain.`,
      tip: `The bamboo tube's thermal insulation is the cơm lam's hidden advantage: green bamboo's thermal conductivity is roughly 0.15-0.30 W/m·K (comparable to softwood, and roughly 1/1000th of aluminium's 205 W/m·K). This means the fire's heat enters the tube SLOWLY — the tube acts as an insulated oven, moderating the temperature swing from the fire's 600°C+ surface to the rice's 100°C interior. The moderation prevents the rice from scorching against the tube's wall (which a metal tube would allow) and extends the steaming time (which allows the longer volatile-infusion the bamboo flavour requires). The bamboo is simultaneously the VESSEL (holding the rice), the INSULATOR (protecting the rice), and the FLAVOUR SOURCE (infusing the rice). No other cooking vessel in the collection serves all three functions.`,
    },
    {
      title: 'Marinate and grill the meat beside the tubes — the fire serves two masters',
      description: `While the bamboo tubes steam (they need 40-50 min — the meat starts at minute 15-20):

MARINATE: toss the sliced pork or chicken with lemongrass, turmeric, lá é chiffonade, garlic, fish sauce, wild honey, oil and pepper. Marinate 20 minutes while the tubes cook (the marinade penetrates the 1.5 cm slices sufficiently in 20 min — the lemongrass's citral and the lá é's eugenol are small, volatile molecules that migrate through muscle tissue at roughly 1-2 mm per 10 minutes at room temperature).

GRILL: set the marinated meat on skewers or in a grilling basket. Place DIRECTLY OVER the embers, 8-10 cm above — the hottest position in the one-fire kitchen. The meat grills 8-12 minutes per side (pork) or 6-8 minutes per side (chicken thigh).

The meat's progression follows the gà nướng bản Đôn's pattern: the turmeric-lemongrass-honey marinade produces a TRIPLE-BROWNING crust (curcumin's golden + honey's caramelisation + amino-acid Maillard = a crust that is darker, more complex and more aromatic than any single browning mechanism produces). The lá é's eugenol, heat-stable, survives the grilling and perfumes the crust with its clove-warm note.

The wild honey's fructose caramelises at 110°C (lower than sucrose's 160°C), and the early caramelisation produces a sticky, glossy, slightly charred, sweet-smoky glaze that the refined-sugar marinades of the lowlands cannot replicate — the wild honey carries additional Maillard-reactive amino acids (from the forest-flower pollen the bees collected) that produce MORE complex browning products than purified sugar.

At minute 35-40 of the overall session: the meat is done (the pork's internal temp reaches 68-72°C, the chicken's reaches 74°C), and the bamboo tubes — started 15-20 minutes earlier — are also done. The TWO-COMPONENT SYNCHRONISATION is the one-fire cook's skill: starting the slower component (the rice, 40-50 min) before the faster component (the meat, 20-25 min) so both finish at the same time, from the same fire, and arrive at the table together.`,
      tip: `The wild honey (mật ong rừng) from the Đắk Lắk highlands is a POLYFLORAL honey — collected by wild Apis dorsata (the giant Asian honey bee) from the mixed flowers of the highland forest, principally coffee blossoms, cashew flowers, wildflowers and forest-tree nectar. The polyfloral origin gives the honey a DARKER colour (more Maillard products from the diverse pollen proteins), a MORE COMPLEX aroma (terpenes and phenolics from the forest flowers, absent from monofloral cultivated honeys), and a HIGHER ENZYME content (wild honey retains more of the bee's own enzymes — invertase, diastase, glucose oxidase — than heat-processed commercial honey). The wild honey in the marinade is therefore not just a sweetener — it is a FLAVOUR CONTRIBUTOR (the forest flowers' terpenes infuse the meat) and a BROWNING ACCELERATOR (the higher enzyme content pre-converts the honey's sucrose to glucose + fructose, both of which Maillard-react faster than sucrose). The forest's flowers → the bee's honey → the meat's crust. The provenance is in the browning.`,
    },
    {
      title: 'Boil the greens, pound the salt, split the tube — the highland table assembles',
      description: `GREENS: in the pot on the fire's stones, boil water. Add the lá bép and rau dớn first (5-7 min — the tougher leaves need more time), then the lá nhíp (3-4 min — the tender shoots cook fast). Drain. Pile on a plate — dark green, glistening, tender, the forest's fibre course.

MUỐI ỚT LÁ É: pound the green chilies, salt and lá é in a mortar — 20 seconds, the eugenol releasing, the chili splitting. Squeeze lime. Stir. The highland condiment, unchanged across 4 recipes in this collection (gà nướng, bò một nắng, cá lăng, and now the complete set) — because it is the SAME condiment at every Ê Đê meal, the constant in a cuisine whose proteins change (chicken, beef, fish, pork) but whose salt does not.

SPLIT THE BAMBOO TUBE: hold the tube vertically on a board. Strike lengthwise with a heavy knife — the charred outer shell cracks along the bamboo's natural grain, and the tube splits into two halves. Inside: the cơm lam — a perfect cylinder of sticky rice, golden-white (the coconut milk's fat), glossy (the bamboo membrane's released starch coating the rice's surface), steaming (the sealed tube retained the heat), and FRAGRANT — the bamboo's sweet-green-woody-vanilla aroma erupts from the split tube in a cloud that the entire table breathes and that is the cơm lam's announcement: the rice is ready, the bamboo gave it everything, and the forest is on the table.

Peel the bamboo halves away from the rice — the rice cylinder slides out, the inner membrane clinging to its surface in translucent, edible, slightly chewy strips (the membrane is eaten — its fibre and its residual volatiles are part of the cơm lam experience). Tear the rice cylinder into chunks by hand — each chunk is sticky, cohesive, bamboo-scented, and warm.

THE TABLE: the split bamboo (the vessel IS the serving plate — the rice sits in the bamboo half-shell). The chopped grilled meat (piled on a board, turmeric-golden, lá é-scented, honey-glazed). The boiled greens (dark, tender, forest-sourced). The muối ớt lá é (in its mortar, green-flecked, eugenol-pungent). And — if the full Ê Đê format is honoured — the rượu cần (the tube-fermented rice wine the collection documented as rượu cần Tây Nguyên), sipped from a communal jar through bamboo straws.

EAT BY HAND: tear a piece of cơm lam (the sticky rice stretches, pulls, separates into a chunk that the hand holds). Tear a piece of grilled meat. Stack the meat on the rice. Dip in the muối ớt lá é. Bite — the bamboo-rice's sweet, woody, chlorophyll-green flavour meets the meat's lemongrass-turmeric-honey-charcoal crust meets the lá é salt's eugenol-sharp-lime-hot sting. Between bites: a piece of boiled lá bép (mild, mucilaginous, cleansing — the palate-resetter between the intense rice-and-meat bites, the same bland-between-intense rhythm the bánh mướt and the bánh đúc documented, here from a forest green rather than from a rice sheet).

TEN ĐẮK LẮK DISHES, ONE COMPLETE MEAL: the collection began with cơm lam Ê Đê (the rice alone), moved through gà nướng bản Đôn (the meat alone), bò một nắng (the dried protein), canh cà đắng (the bitter vegetable), cá lăng (the river fish), bún đỏ (the migrant synthesis), gỏi lá rừng (the forest raw), cà phê chồn (the civet's selection), lẩu lá rừng (the forest broth), and now arrives at the FULL SET — the meal where every component sits on one table, cooked by one fire, sourced from one landscape, and eaten by one circle of people who know what every leaf is, who know where every bamboo grows, and who know that the highland provides everything the table needs, because the highland IS the table, and the fire is the kitchen, and the forest is the garden, and the meal is complete.`,
      tip: `The cơm ống nứa thịt nướng Ê Đê is the collection's most SELF-SUFFICIENT meal — the meal with the fewest inputs from outside the immediate landscape: the bamboo is cut from the forest 200 m from the house, the rice is from the paddy 500 m away, the chicken or pork is from the yard, the greens are from the forest floor, the lá é is from the garden, the honey is from the forest bees, the salt is traded (the one input that is NOT local — salt must come from the coast, and the salt-trade is one of the oldest commerce routes between the highlands and the lowlands, predating the Kinh settlement by centuries). Every other ingredient in the meal is LOCAL — within walking distance, within harvesting distance, within the one-fire kitchen's reach. The meal's self-sufficiency is not poverty (the highland forest is RICH in edible species) but INDEPENDENCE — the independence of a cuisine that does not need the market, the highway, the cold chain or the factory, because the forest and the paddy and the yard provide everything the fire can cook and the table can hold. The self-sufficiency is the Ê Đê cuisine's deepest character, and the cơm ống nứa thịt nướng is its fullest expression.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
