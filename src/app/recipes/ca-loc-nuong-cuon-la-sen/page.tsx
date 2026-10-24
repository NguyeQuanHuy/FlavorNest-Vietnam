'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-loc-nuong-cuon-la-sen',
  title: `Cá Lóc Nướng Cuốn Lá Sen (Straw-Grilled Snakehead Wrapped in Young Lotus Leaf)`,
  subtitle: `A whole snakehead fish skewered on sugarcane and burned black in a fire of rice straw, then scraped clean and wrapped — not in rice paper, but in the pale young lotus leaves pulled from the flooded fields of Vinh Long the same morning.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '40 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/ca-loc-nuong-cuon-la-sen.jpg',
  intro: `Ca loc nuong trui — snakehead grilled in straw — is the oldest cooking method still practiced in the Mekong Delta, and it belongs to the fields rather than to any kitchen. A farmer catches a snakehead in a paddy channel, runs a stalk of sugarcane or a green bamboo skewer through its mouth and out the tail, stands it upright in the mud, heaps rice straw around it, and lights the straw. Nothing is scaled. Nothing is gutted. Nothing is seasoned. When the straw has burned out, the outside is a black shell and the inside is the whitest, sweetest fish in Vietnam. What makes the Vinh Long version its own dish is the wrapper: instead of rice paper, the fish is rolled in la sen non — the young, pale, still-furled lotus leaves that grow in the province's flooded fields and canal edges, picked before they harden.

The snakehead has to be a snakehead. Ca loc is a lean, muscular ambush predator with almost no intramuscular fat and a dense, long-fibered white flesh that holds together in sheets rather than flaking apart — which is precisely why it survives being incinerated at close quarters. A fatty or delicate fish put in the same fire renders, collapses and dries. The Delta snakehead is also an air-breather that lives in the warm, shallow, oxygen-poor water of the rice fields, and it feeds on the shrimp and small fish of the same fields — a terroir you can taste as a clean, faintly sweet river character with none of the muddy note that pond-raised fish carry. In Europe, frozen whole snakehead from Vietnamese groceries is the honest choice; whole sea bass is the closest fresh substitute, though it is fattier and needs three minutes less over the flame.

The straw fire is not a rustic affectation, it is a specific thermal instrument. Rice straw burns fast, hot and clean — it flares to well over 600°C, produces a dry, high-radiant heat, and burns itself out in ten to twelve minutes. In that short, ferocious window the scales and skin carbonize completely into a rigid black crust while the interior of the fish is effectively steaming inside its own sealed body: the flesh never touches flame, never touches smoke, and never loses its moisture. A charcoal grill can approximate this, but charcoal burns long and low with a smoky, sulfurous edge, and the fish picks it up. The taste of ca loc nuong trui is the taste of a fish cooked with no seasoning, no smoke and no fat — a nakedness that only works because the fish is that good.

The lotus leaf is what makes the dish Vinh Long. A young lotus leaf is tender enough to fold without cracking, faintly astringent and grassy-cool, and it carries a specific aromatic — nuciferine and related compounds in the leaf give it a green, slightly medicinal, tea-like edge that behaves like an herb and a wrapper at once. Rice paper is neutral; the lotus leaf is an ingredient. Rolled around white fish, bun, and a fistful of herbs, dipped in mam nem or in salted chili-lime, it makes a bite that tastes of the flooded field the fish came out of. The old cooks say you should eat the fish standing beside the fire that cooked it, and they are right, but they are not romanticizing: the flesh is at its sweetest in the first ten minutes after the straw goes out.`,
  ingredientSections: [
    {
      title: 'The fish and the fire',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'whole snakehead fish (ca loc), NOT scaled, NOT gutted',
          note: `One fish of 700-900 g. The scales and the belly are what protect the flesh in the fire — removing either turns the dish into ordinary grilled fish. Rinse the slime off under cold water and pat dry, nothing more. In Europe: frozen whole snakehead from Vietnamese groceries, fully thawed and dried. Whole sea bass or grey mullet of the same weight are workable substitutes but need 3 minutes less over the flame.`,
        },
        {
          amount: 1,
          name: 'stalk of sugarcane or green bamboo, split into a 60 cm skewer',
          note: `Run it through the mouth and out at the tail so the fish is rigid. Sugarcane is traditional and adds a faint sweetness at the flesh nearest the skewer. A long metal skewer works but conducts heat inward — expect the center to cook 2 minutes faster.`,
        },
        {
          amount: 2,
          name: 'large armfuls of dry rice straw (rom)',
          note: `The authentic fuel. Outside Vietnam: build a hardwood-charcoal fire, get it fully white-hot with no visible flame, and hold the fish 8-10 cm above it. Do not use briquettes — their binders leave a chemical note on a fish this unseasoned.`,
        },
        { amount: 2, unit: 'tbsp', name: 'scallion oil (mo hanh)', note: `Sliced scallion greens flash-scalded in hot oil with a pinch of salt. Brushed on after the char is scraped away, never before — oil on the fish before the fire simply burns.` },
        { amount: 2, unit: 'tbsp', name: 'roasted peanuts, crushed' },
      ],
    },
    {
      title: 'The lotus leaf wrap platter',
      items: [
        {
          amount: 20,
          name: 'young lotus leaves (la sen non), still pale and soft',
          note: `Pick or buy the small, pale-green, tightly furled leaves — a mature dark leaf is leathery, bitter, and cracks when you roll it. Rinse, snip out the thick central stem, and cut each leaf into a rough 18 cm round. If lotus leaves are unavailable in Europe, use large fresh perilla leaves overlapped two-deep, or fall back to rice paper — but the dish becomes ca loc nuong trui rather than the Vinh Long version.`,
        },
        { amount: 300, unit: 'g', name: 'fresh bun (rice vermicelli)', note: `Cooked, rinsed cold, drained into loose nests.` },
        { amount: 100, unit: 'g', name: 'mixed herbs: tia to, hung que, rau ram, kinh gioi' },
        { amount: 1, name: 'cucumber, cut into thin batons' },
        { amount: 1, name: 'green (unripe) banana, thinly sliced', note: `Soaked in lime water. Its tannins reset the palate between rolls.` },
        { amount: 1, name: 'star fruit (khe), thinly sliced' },
      ],
    },
    {
      title: 'Mam nem dipping sauce',
      items: [
        { amount: 4, unit: 'tbsp', name: 'mam nem (fermented anchovy sauce)', note: `Strained. The Delta pairing for freshwater fish grilled without seasoning — it supplies everything the fire deliberately left out.` },
        { amount: 4, unit: 'tbsp', name: 'crushed fresh pineapple with its juice', note: `The bromelain and the fruit sugar are what soften mam nem — this is thinning by pineapple, not by lime or water.` },
        { amount: 1.5, unit: 'tbsp', name: 'sugar' },
        { amount: 3, name: 'cloves garlic, pounded' },
        { amount: 2, name: 'red bird\'s-eye chilies, pounded' },
        { amount: 1, unit: 'tbsp', name: 'lime juice' },
      ],
    },
  ],
  steps: [
    {
      title: 'Skewer the fish and stand it in the fire — 10-12 minutes of straw',
      description: `Rinse the fish, dry it, and drive the skewer in through the mouth and out at the base of the tail so the body is held straight. Stand the skewer upright in earth or sand — the fish vertical, head up — and heap the dry straw around it. Light the straw at the base.

Burn one full armful, let it collapse, then heap the second armful and burn that too. Total straw time is 10-12 minutes for a 800 g fish. The fish should be uniformly black — a matte, dry, carbon-black shell with no soft or glistening patches.

Doneness reads through the char: press the flank through the black crust and it should feel firm and springy, not soft. If you are unsure, push a skewer into the thickest point behind the head — it should slide in with no resistance and come out hot enough to sting the lip. Undercooked here means a raw pink line along the spine; overcooked past 15 minutes and the flesh nearest the skin dries into cotton.`,
      tip: `The straw fire works because of radiant heat, not contact heat. Straw flares above 600°C but has almost no thermal mass — it transfers energy as radiation, which the black carbonizing skin absorbs almost perfectly, and it burns out before that heat can drive deep enough to dry the muscle. The fish is being grilled on the outside and steamed on the inside by its own water, inside a sealed carbon shell, and the timing is decided by the fuel rather than by the cook. It is the most elegant piece of engineering in Vietnamese village cooking.`,
    },
    {
      title: 'Scrape, do not wash — the reveal',
      description: `Lay the black fish on a board and let it sit 2 minutes. Using the back of a knife, scrape the carbonized skin and scales away in long strokes from head to tail. They lift off in brittle plates, taking the ash with them and leaving a clean, pearl-white fillet underneath.

Split the fish open along the spine, lift out the backbone in one piece, and discard the innards, which have shrunk into a small dry mass at the belly and have been keeping the cavity sealed the entire time.

Never rinse the fish under water to remove the ash. Water washes away the surface juices at the exact moment they are most concentrated, and it drops the flesh temperature below the point where the aroma lifts. Scrape with a blade, brush off the last flecks with a dry cloth, and accept a few specks of ash — everyone in the Delta does.`,
      tip: `The reason no one seasons this fish before the fire is that seasoning cannot reach it and would only burn. Salt applied to the skin is scraped away with the char; salt applied to the flesh requires cutting the fish open, which lets the moisture out. So all seasoning happens after: scallion oil, crushed peanut, and the mam nem at the table. The fish itself, alone, tastes of nothing but fish — and this is the point of the dish, not a shortcoming of it.`,
    },
    {
      title: 'Dress with scallion oil while the flesh is still steaming',
      description: `Heat 2 tablespoons of oil until it shimmers, throw in the sliced scallion greens with a pinch of salt, count to five, and pour the whole thing straight over the open fish. It should sizzle audibly for several seconds on contact.

Scatter the crushed peanuts over the top immediately, while the oil is still hot enough to bloom their aroma.

Do this within a minute of scraping. The lean flesh of a snakehead has no fat of its own — the scallion oil is not a garnish, it is the entire lipid content of the dish, and it needs the residual heat of the fish to spread and carry.`,
      tip: `Five seconds in the oil, not thirty. Scallion greens hold their volatile allyl sulfides only briefly at high heat; scalded for a few seconds they turn bright and release aroma, cooked for half a minute they go dull and grey and taste of nothing. This is the same volatile-aromatic principle that governs la e in Phu Yen and dill in the north: the aromatic goes in at the last possible moment, and the heat that reaches it is residual, not applied.`,
    },
    {
      title: 'Make the pineapple mam nem — pounded, not stirred',
      description: `Pound the garlic and chilies to a paste, add the crushed pineapple and its juice, and pound again until the fruit breaks down. Stir in the strained mam nem and the sugar until dissolved, then finish with the lime juice.

The sauce should be thick enough to cling to a rolled leaf and no thicker. Taste on a piece of the fish, never off the spoon — mam nem alone is far too intense to judge on its own.

If it is too sharp, add pineapple. If it is flat, add mam nem. Water is not a correction, it is a dilution — it drops the salt and the ferment together and leaves you with nothing.`,
      tip: `Pineapple is the correct thinner for mam nem, and lime is not. Pineapple brings fruit acid, sugar, and bromelain, an enzyme that continues to break down residual fish protein in the sauce and rounds off its sharp edges over the ten minutes it sits. Lime brings acid alone — it makes mam nem thinner and sourer without making it kinder. Every coastal and Delta cook who serves mam nem with grilled fish thins it with fruit.`,
    },
    {
      title: 'Roll in lotus leaf — and eat within ten minutes',
      description: `Lay a young lotus leaf flat on your palm, rough side down. Add a pinch of bun, two or three herb leaves, a baton of cucumber, a slice of star fruit and a slice of green banana. Then lift a piece of fish straight off the bone with chopsticks — a sheet of white flesh with scallion oil and peanut clinging to it — and lay it on top.

Fold the near edge over, tuck the sides, and roll tight. The leaf should hold without tearing; if it splits, the leaf was too mature. Dip one end deep into the mam nem and eat the roll in two bites.

Eat the whole fish within ten minutes of it coming off the fire. Lean snakehead flesh has no fat to keep it succulent as it cools, and the lotus leaf loses its cool grassy edge as soon as it wilts against the hot fish. Roll one, eat one, roll the next. Nobody in the Delta builds a plate of rolls in advance.`,
      tip: `The lotus leaf is doing three jobs at once — wrapper, herb, and palate cleanser — and no rice paper can do any of them. Its faint astringency binds to the fat of the scallion oil the way tea does; its grassy coolness lands against the smokeless, seasonless white flesh; and it tastes unmistakably of the flooded field the fish was pulled from. A snakehead cooked in the straw of the field it lived in, wrapped in the lotus leaf of the water it swam in, eaten standing beside the fire that burned out ten minutes ago — that is not a serving suggestion. That is the recipe.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
