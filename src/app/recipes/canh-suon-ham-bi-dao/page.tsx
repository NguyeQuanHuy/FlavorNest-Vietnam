'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'canh-suon-ham-bi-dao',
  title: `Canh Sườn Hầm Bí Đao (Pork Rib Soup with Winter Melon)`,
  subtitle: `Pork ribs — simmered low for two hours until the collagen dissolves and the broth is golden and gelatinous — with chunks of winter melon that cook to a translucent, cool-sweet, almost-melting softness that the Vietnamese call "thanh nhiệt": heat-clearing, the food that cools the body from inside. The soup the Vietnamese kitchen makes when the summer is too hot, the fever is too high, or the body needs to be reminded what gentle feels like.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '2 hr 30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/canh-suon-ham-bi-dao.jpg',
  intro: `Bí đao — the winter melon, the wax gourd, Benincasa hispida — is the Vietnamese kitchen's most explicitly "cooling" vegetable in the traditional hot-cold medical framework that governs much of Vietnamese food thinking. In this framework (inherited from Chinese medicine's yīn-yáng classification of foods), every ingredient is categorised as "heating" (nóng — ginger, chili, beef, fried food) or "cooling" (mát — winter melon, mung bean, lotus, cucumber), and the cook's job is to balance the two: a hot day calls for cooling food, a fever calls for cooling food, a body overloaded with fried and spicy food calls for cooling food, and the cooling food the kitchen reaches for first — before the mung-bean chè, before the lotus-seed soup, before any other thanh-nhiệt preparation — is canh bí đao.

Winter melon earns its cooling reputation by three mechanisms that are genuinely physiological, not merely folkloric. First: it is 96% water — one of the highest water contents of any food — and eating it is, functionally, drinking water in solid form, which cools by hydration. Second: its flesh is nearly devoid of protein, fat and fibre (roughly 0.4% protein, 0.2% fat, 0.5% fibre), which means the stomach expends almost zero metabolic energy digesting it — and metabolic energy generates heat (the "thermic effect of food"), so a food that requires no digestion generates no metabolic heat. Third: it contains triterpene compounds (principally cucurbitacins at sub-bitter concentrations) that have documented mild diuretic activity in animal studies — and diuresis (increased urination) cools by fluid turnover, the same mechanism the body uses when it sweats.

The pairing with pork ribs (sườn non) is the balance principle in action: the ribs are "warming" (protein, fat, collagen — all metabolically active, all heat-generating), and the winter melon is "cooling" (water, zero protein, zero fat). The soup holds both, and the eater receives both — the ribs' nourishment and the melon's cooling — in a single bowl that is balanced by the medical logic even as it is delicious by the culinary logic.

The cooking is a slow simmer — 2 hours for the ribs (the collagen in the rib cartilage needs time to hydrolyse to gelatin, which gives the broth its body and its lip-coating richness), then 15-20 minutes for the winter melon (which cooks fast because it is 96% water and has almost no structural fibre to resist the heat). The melon goes in at the end because it dissolves if cooked too long — at 30 minutes it is mush, at 45 it has disappeared into the broth, and the canh's visual signature (translucent, jade-green, whole chunks of melon floating in a clear, golden, rib-enriched broth) is lost.`,
  ingredientSections: [
    {
      title: 'The ribs',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'pork spare ribs or baby-back ribs, cut into 4-5 cm pieces',
          note: `Ask the butcher to cut across the ribs into 4-5 cm sections. The small sections expose more bone marrow and more cartilage to the water, producing a richer, more gelatinous broth. Blanch first: boil 5 minutes, drain, rinse — removes the blood, the scum and the off-taste that a un-blanched rib releases into the broth.`,
        },
      ],
    },
    {
      title: 'The winter melon',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'bí đao (winter melon), peeled, seeded, cut into 3-4 cm chunks',
          note: `Peel the waxy green skin. Scoop out the seeds and the spongy pith. Cut the white flesh into chunks large enough to hold their shape during the 15-20 minute simmer — too small and they dissolve. The flesh should be: firm-white when raw, translucent-jade when cooked. Available at every Asian grocer, usually sold by the wedge (the whole melon can exceed 10 kg).`,
        },
      ],
    },
    {
      title: 'The broth aromatics',
      items: [
        { amount: 2, unit: 'L', name: 'water' },
        { amount: 15, unit: 'g', name: 'ginger, bruised', note: `A small amount — the ginger is "warming" and the soup's intent is "cooling," so the ginger is present for aroma (gingerol's fresh note cuts the pork's richness) but restrained in quantity.` },
        { amount: 2, name: 'scallions, knotted' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
        { amount: 5, name: 'dried goji berries (kỷ tử), optional', note: `A traditional-medicine addition — "nourishes the liver and brightens the eyes." Their mild sweetness and red colour are also visual.` },
        { amount: 3, name: 'dried red dates (táo đỏ), pitted, optional', note: `"Nourishes the blood and the qi." Their sweetness rounds the broth.` },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 2, name: 'scallions, sliced' },
        { amount: 30, unit: 'g', name: 'coriander, chopped' },
        { amount: 1, unit: 'tsp', name: 'ground white pepper' },
      ],
    },
  ],
  steps: [
    {
      title: 'Blanch the ribs, then simmer 2 hours — the collagen needs every minute',
      description: `BLANCH: put the rib pieces in cold water, bring to a boil, boil 5 minutes. The water turns grey-brown with blood and scum. Drain. Rinse each rib piece under running water, scrubbing off any clinging scum. Scrub the pot. This step is non-negotiable — un-blanched ribs release blood proteins into the broth for the next 2 hours, producing a murky, grey, off-tasting soup that no amount of skimming can rescue. The blanch removes the blood in 5 minutes; the broth spends the remaining 2 hours building clarity rather than fighting cloudiness.

SIMMER: return the blanched ribs to the clean pot. Add 2 L fresh cold water, ginger and knotted scallion. Bring to a boil. Reduce to a bare simmer — the same gentle bubble the cháo trắng and the miến gà used. Cover, lid ajar.

Simmer 1.5-2 hours. Skim at 15, 30 and 60 minutes — the fat that rises is pork fat (flavourful but clouding), and removing most of it produces a cleaner, lighter broth that matches the soup's cooling intent. Leave a LITTLE fat — the broth needs some lipid for mouthfeel and for carrying the ginger's fat-soluble gingerol.

At 1.5 hours: test a rib — the meat should pull from the bone easily, and the cartilage at the rib's end should be soft and gelatinous (press it — it yields completely). If the cartilage is still firm: 30 more minutes.

The broth should be: golden (from the pork's rendered collagen and the ginger's tint), clear (the blanch and the skimming achieved this), and — when cooled on a spoon — faintly gelatinous (the collagen has hydrolysed to gelatin and the broth sets slightly when cool). This gelatin-body is the broth's nourishment — dissolved collagen provides glycine and proline, two amino acids the body uses for tissue repair, which is why rib soup is the Vietnamese kitchen's convalescence soup alongside the cháo trắng.`,
      tip: `The 2-hour simmer for pork ribs is calibrated to collagen hydrolysis: the Type I and Type III collagen in the rib cartilage and the periosteum (the bone's outer membrane) begins converting to gelatin at roughly 70°C, but the conversion is SLOW at a simmer (85-90°C) — roughly 1% per minute for the first hour, accelerating as the collagen network loosens. At 2 hours, roughly 60-70% of the accessible collagen has converted, and the broth contains enough dissolved gelatin (roughly 3-5 g per litre) to produce a perceptible body and a faint set when cooled. A 1-hour simmer converts only 20-30% — a thinner, less nourishing, less lip-coating broth. The second hour is the hour that matters, and skipping it saves time but loses the broth.`,
    },
    {
      title: 'Add the winter melon at the end — 15-20 minutes, not a minute more',
      description: `Season the broth: fish sauce, salt, sugar. Add the goji berries and dates if using. Taste: the broth should be savoury, clean, faintly sweet (from the pork's own amino acids and the dates' fructose), and LIGHT — lighter than a phở broth, lighter than a bún bò Huế broth, because the winter melon's cooling intent requires a broth that does not overpower the melon's own mild sweetness.

Add the winter-melon chunks. Return to a gentle simmer. Cook 15-20 minutes — the melon's transformation is visible and dramatic:

MINUTES 0-5: the chunks are opaque-white, firm, holding their shape.

MINUTES 5-10: the edges turn translucent — the melon's cell walls are collapsing as the pectin dissolves in the hot liquid, and the 96%-water flesh is becoming visible through the thinning cell walls. The chunks are softening but still holding shape.

MINUTES 10-15: the chunks are TRANSLUCENT — jade-green, almost glassy, soft to a spoon's prod but not yet dissolving. This is the target: the melon should look like carved jade floating in golden broth — the visual that makes canh bí đao one of the most beautiful soups in the Vietnamese canon.

MINUTES 15-20: the chunks are fully translucent, very soft, on the edge of dissolving. Pull the heat NOW. Past 20 minutes the melon collapses into the broth and disappears.

Add sliced scallion, coriander and white pepper. The soup is complete.`,
      tip: `The winter melon's 96% water content means it contributes almost no flavour of its own — its taste is barely perceptible: faintly sweet, faintly vegetal, essentially neutral. This neutrality is the ingredient's role: the melon is not in the soup to flavour it but to DILUTE the ribs' richness with the melon's own water, to provide a soft, cool, almost-melting texture that the tongue reads as "cooling" (soft foods feel cooler than hard foods because they conform to the tongue's surface and increase the thermal-contact area), and to carry the broth's dissolved gelatin and fish-sauce umami in its translucent flesh like a savoury, edible water balloon. The melon is a VEHICLE for the broth, and its transparency is the visual proof: you can SEE the broth through the melon, because the melon IS mostly broth by the time it reaches the bowl.`,
    },
    {
      title: 'Serve warm — the cooling soup at the hot table, the gentle medicine',
      description: `Ladle into bowls: 2-3 rib pieces, 3-4 chunks of translucent melon, a generous ladle of the clear, golden, gelatinous broth. The bowls should show: gold (broth), jade (melon), ivory (rib meat), red (goji, if used), green (scallion, coriander). The colour palette is the gentlest in the collection — no dark caramel, no red chili oil, no black char — because the soup's visual should match its intent: soft, clear, cool, restorative.

Eat with rice — the broth spooned over the rice, the melon eaten in large, soft, translucent pieces that yield under the tongue and release their absorbed broth in a gentle, warm, gelatin-rich flood. The rib meat pulls from the bone and is eaten between spoonfuls of melon-and-broth. The goji berries (if present) are sweet, chewy, ruby-red punctuation marks in the golden broth.

The soup is eaten when the body needs cooling — after a hot day, during a fever, after too many days of fried and grilled and spiced food from this collection's more aggressive entries. It is the reset button the Vietnamese kitchen presses when the body's thermal register has been pushed too far toward "hot," and the press is gentle: no chili, no ferment, no char, no aggressive acid. Just rib, melon, water, time.

Canh sườn hầm bí đao is the collection's kindest soup — kinder than the cháo trắng (which is more austere) and kinder than the miến gà (which is more complex). Its kindness is in its intent: it does not challenge the eater, does not demand the eater's attention, does not assert its own flavour over the eater's need. It gives warmth (the broth), nourishment (the collagen), hydration (the melon) and comfort (the whole), and it asks nothing back except the empty bowl.`,
      tip: `The Vietnamese hot-cold food classification — while not validated by controlled clinical trials — maps onto genuine physiological phenomena: "heating" foods (high-protein, high-fat, spiced) DO increase metabolic heat production (the thermic effect of food: protein requires 20-30% of its caloric value to digest, fat requires 0-3%, and carbohydrate requires 5-10%); "cooling" foods (high-water, low-protein, low-fat) DO reduce metabolic heat production (winter melon's near-zero protein requires near-zero digestive energy). The traditional classification anticipated the thermic-effect research by centuries, and while it conflates metabolic heat with folk concepts of body "fire" and "wind," its practical dietary recommendations — eat cooling food when hot, eat warming food when cold — produce the physiologically correct outcome: reduced metabolic heat load in summer, increased metabolic heat load in winter. The grandmother's classification is imprecise in its mechanism and accurate in its effect.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
