'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-chien-gion-sot-ca',
  title: `Cá Chiên Giòn Sốt Cà Chua (Crispy Fried Whole Fish in Tomato Sauce)`,
  subtitle: `A whole river fish — scored to the bone, dredged in tapioca starch, deep-fried until the skin shatters and the fins go crisp as glass — then blanketed in a sweet-sour tomato sauce thick enough to cling to every ridge of the crust. The northern weeknight dish that turns one fish into two meals: the fried skeleton standing upright on the plate, and the sauce poured over it like a red velvet curtain.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '45 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/ca-chien-gion-sot-ca.jpg',
  intro: `Cá chiên sốt cà is one of the most common home dishes in northern Vietnam — the fish-and-rice plate that appears on the family table three or four times a week in every province from Hà Nội to the Red River Delta — and its ubiquity makes it easy to overlook. It is not a restaurant dish, not a festival dish, not a dish that any province claims as its signature. It is the dish a mother makes when nobody asked what is for dinner, and the answer is what it always is: a fried fish in tomato sauce, rice, canh, and the knowledge that the family has been fed.

The fish is whole — cá rô (climbing perch), cá diêu hồng (tilapia), cá chép (carp), or whatever the market had that morning — scored in deep diagonal slashes on both sides so the heat reaches the bone and the starch coats the crevices, dredged in tapioca starch (which fries crispier than wheat flour and holds its crunch longer under sauce), and deep-fried until the skin is a golden, shattering, bubbled shell, the fins are transparent and crisp as potato chips, and the flesh at the thickest point is just cooked through, white and flaking.

The sauce is the northern tomato sauce — not the southern canh chua's bright, tamarind-sharp, pineapple-sweet acid broth, but a denser, sweeter, more ketchup-adjacent construction built from fried tomatoes, onion, garlic, sugar and a splash of vinegar, thickened to a glossy, clingy consistency that coats the fish rather than pooling around it. It is one of the few Vietnamese sauces that shows a clear French colonial influence — the Tonkinese version of sauce tomate, adapted with fish sauce instead of salt, with more sugar than a French cook would use, and without the roux — and its presence on the northern table is so ordinary that nobody thinks of it as colonial anymore. It is simply the sauce that goes on fried fish, the way nước chấm goes on grilled meat, and its origin story has been absorbed into the wallpaper.

The plating is distinctive: the whole fried fish is stood upright on a serving plate — propped against a mound of rice or against the plate's rim — so its full profile is visible: head, tail, scored flanks, crispy fins spread like wings. The sauce is poured over from head to tail, settling into the scores and running down the flanks, and the fish arrives at the table looking like a gilded sculpture under a red glaze. It is the most dramatic per-đồng presentation in the northern home kitchen, and it costs whatever the cheapest whole fish at the market costs, plus one tomato and a spoonful of starch.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 1,
          name: 'whole fish, 500-700 g (tilapia, carp, sea bass, perch), scaled, gutted, gills removed',
          note: `Whole — head and tail on. Score both sides in deep diagonal slashes, 2 cm apart, cutting to the bone. The scores are the fried surface area — more scores, more crust, more sauce-clinging ridges.`,
        },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 0.5, unit: 'tsp', name: 'ground turmeric (optional — for a golden colour under the starch)' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        {
          amount: 80,
          unit: 'g',
          name: 'tapioca starch (bột năng), for dredging',
          note: `Tapioca, not wheat, not cornstarch. Tapioca's near-pure amylopectin gelatinises into a clear, glassy, bubble-textured crust that stays crisp under sauce for 10+ minutes — the same physics the bánh phồng tôm used for its puff. Wheat flour soaks through and goes limp in 3 minutes; tapioca holds.`,
        },
        { amount: 500, unit: 'ml', name: 'neutral oil, for deep-frying' },
      ],
    },
    {
      title: 'The tomato sauce',
      items: [
        { amount: 4, name: 'ripe tomatoes, diced', note: `Or 3 tbsp tomato paste + 2 fresh tomatoes for a richer, deeper colour.` },
        { amount: 1, name: 'yellow onion, diced' },
        { amount: 3, name: 'cloves garlic, minced' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'sugar', note: `The northern tomato sauce leans sweet — the sugar rounds the tomato's acid and gives the sauce its glossy, clingy body.` },
        { amount: 1, unit: 'tbsp', name: 'rice vinegar or white vinegar' },
        { amount: 1, unit: 'tbsp', name: 'tomato ketchup (optional — some cooks add a squeeze for colour and sweetness consistency)' },
        { amount: 100, unit: 'ml', name: 'water' },
        { amount: 1, unit: 'tsp', name: 'tapioca starch, slaked in 1 tbsp water (optional thickener)' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil' },
        { amount: 2, name: 'scallions, cut in 3 cm lengths' },
        { amount: 30, unit: 'g', name: 'coriander, roughly chopped' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 1, name: 'bowl of canh (clear soup — cabbage, tofu, or chayote)' },
        { amount: 1, name: 'plate of dưa cải chua (pickled mustard greens)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Score, season, dredge — every crevice coated, every fin dry',
      description: `Pat the whole fish very dry — inside and out, every surface. Season inside the cavity and over both faces with salt, turmeric and pepper. Let it sit 10 minutes — the salt draws a thin film of moisture to the surface, which the starch will absorb.

Dredge generously in tapioca starch — every surface, every score, inside the cavity, the head, the tail, the fins. Shake off the excess. The fish should be uniformly white with starch, and every slash should have starch packed into it.

Spread the pectoral and dorsal fins out — they fry into translucent, glass-crisp sheets if they are extended, and they burn into carbon lumps if they are folded against the body. Pin them with toothpicks if necessary.

Let the dredged fish sit 5 minutes before frying — the starch hydrates slightly on the moist surface and forms a paste that adheres better in the oil. This 5-minute rest is the difference between a crust that stays on the fish and a crust that floats off into the oil.`,
      tip: `The scoring depth — to the bone — is doing two jobs that a shallower score cannot. First: it exposes the bone surface to the oil, and the thin layer of flesh between each score fries independently, producing a fish where every 2 cm section is crisp all the way through rather than only at the skin. Second: it creates deep crevices that the starch fills and that, once fried, become rigid ridges of golden crust that the tomato sauce clings to. A smooth-skinned fried fish sheds sauce; a scored one holds it. The score is a sauce-retention architecture, built by the knife.`,
    },
    {
      title: 'Fry whole — 170°C, 6-8 minutes per side, do not move',
      description: `Heat the oil in a wok deep enough to submerge at least half the fish. Target 170°C — a pinch of starch dropped in should sizzle and rise immediately.

Lower the fish in carefully — away from you, to avoid splatter. Fry 6-8 minutes on the first side without touching. The oil will bubble violently for the first 2 minutes (surface moisture), then settle. The crust forms, firms, and turns from white to pale gold to deep gold.

Turn once — using two spatulas or a spider, gently — and fry the second side 5-6 minutes. The fish is done when: both sides are uniformly deep golden, the tail is rigid and dry, the fins are translucent and crisp (tap one — it should click like glass), and a chopstick inserted into the thickest part meets the bone with no resistance.

Lift out and drain upright on a rack — stand the fish on its belly so the oil drains from both flanks equally. The crust should be audibly crisp — run a fingernail across it and hear the scratch.`,
      tip: `The 170°C temperature is lower than most deep-frying guides suggest, and the reason is time. A whole fish 3-4 cm thick needs 12-15 minutes of total frying for the heat to reach the bone at the centre, and 180°C+ would over-brown the surface before the interior is cooked. At 170°C the crust forms more slowly, browns more evenly, and the interior reaches safe temperature (74°C at the bone) at the same moment the exterior reaches ideal colour. Temperature and time are linked variables, and for a thick whole fish the correct solution is lower temperature and longer time, not higher temperature and shorter time.`,
    },
    {
      title: 'Build the sauce — fried tomato, sweet-sour, glossy',
      description: `While the fish drains: heat oil in a pan. Fry the garlic and onion until softened and golden — 2 minutes. Add the diced tomatoes (and paste if using) and fry 3-4 minutes, pressing, until the tomatoes collapse into a thick, pulpy mass.

Add the water, fish sauce, sugar and vinegar. Simmer 5 minutes. Taste: the sauce should be sweet-sour-savoury, thicker than a soup and thinner than a ketchup — it must pour but it must cling.

If it is too thin: stir in the slaked tapioca starch — the sauce will thicken in 30 seconds to a glossy, clingy, slightly translucent body. If it is thick enough without the starch, skip it.

Off the heat: stir in the scallion lengths and coriander. They wilt in the residual heat and give the sauce a green confetti.`,
      tip: `The sauce's cling is the engineering problem, and tapioca starch is the engineering solution. A thin, watery tomato sauce runs off a fried fish in seconds, pooling at the base of the plate and leaving the crust naked and unannotated. A tapioca-thickened sauce coats the crust in a glossy, adherent film — the same clear, elastic gel the starch produced in the coconut cream for the chuối nướng — and every ridge of the scored crust holds a stripe of red. The starch is the glue between the fry and the sauce, and the plate's drama depends on it.`,
    },
    {
      title: 'Stand the fish, pour the sauce, serve with rice and pickles',
      description: `Stand the fried fish upright on a serving plate — lean it against the plate's rim or prop it against a mound of rice. The full profile should be visible: head to tail, fins spread, scores aligned.

Pour the hot tomato sauce over the fish from head to tail — slowly, so it settles into the scores, clings to the ridges, and runs down the flanks in a red glaze. The sauce should coat but not drown — the crust should be visible through the sauce at the ridges, golden under red.

Serve immediately with rice, canh and pickled mustard greens. The eating: each person uses chopsticks to pull a section of fish from between two scores — the section comes away as a rectangular slab of flesh bounded by two walls of crispy crust, coated in sauce. Set it on the rice. The sauce soaks into the rice. The crust stays crisp against the flesh. The bite carries all three: starch-crunch, tomato-sweet-sour, fish-flake.

The fish stays crisp under the sauce for about 10 minutes — the tapioca crust's resistance to hydration is better than wheat's but not infinite. After 15 minutes the sauce has penetrated and the crust has softened from shattering to merely crunchy. Eat within the window.

This is the plate ten million northern Vietnamese households ate last Tuesday, and will eat next Tuesday, and have eaten every Tuesday their mothers could afford a fish. It is the most ordinary plate in this collection — no exotic ingredient, no cultural crossroads, no food-science revelation — and its ordinariness is its honour. A cuisine is judged by its celebrations, but it is fed by its Tuesdays, and cá chiên sốt cà is every Tuesday in the north.`,
      tip: `The tapioca crust's sauce-resistance is quantifiable: a tapioca-starch-dredged fried surface absorbs moisture at roughly one-third the rate of a wheat-flour-dredged surface, because tapioca's amylopectin network gelatinises into a tighter, more hydrophobic matrix than wheat starch's amylose-amylopectin mixture. In practical terms: a wheat-flour fried fish under tomato sauce is soggy in 3 minutes; a tapioca-starch fried fish holds its crunch for 10. Every northern Vietnamese cook who dredges in bột năng rather than bột mì knows this empirically, and the choice — repeated daily, across millions of kitchens — is a starch-science decision made without knowing the chemistry. The grandmother chose the right starch. The lab explains why she was right.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
