'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-mi-sai-gon',
  title: `Bánh Mì Sài Gòn (The Saigon Baguette Sandwich)`,
  subtitle: `A Vietnamese baguette — shorter, thinner, airier and crustier than its French ancestor, made with rice flour blended into the wheat — split lengthwise and layered with pâté, butter, chả lụa, thịt nguội, đồ chua, cucumber, coriander, chili and Maggi. Built in 45 seconds, eaten in 3 minutes, and containing, in its 25 cm of bread, the entire history of France in Vietnam and of Vietnam after France.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '4 hr (bread) + 15 min (assembly)',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/banh-mi-sai-gon.jpg',
  intro: `Bánh mì — literally "wheat cake" (bánh = cake, mì = wheat) — is the Vietnamese word for bread, for baguette, and for the sandwich the baguette holds, and the triple meaning captures the object's triple identity: it is bread (baked), it is French (baguette), and it is Vietnamese (the sandwich that France never imagined and that Vietnam made inevitable).

The baguette arrived in Vietnam with the French colonial administration in the mid-19th century, baked by French bakers for French colonists, using French flour imported from France. The Vietnamese did not eat it — they had rice. The French ate it — they needed wheat. And for decades the baguette was a colonial object, consumed by colonists and by the Vietnamese who served them, baked in French-style bakeries in Saigon and Hanoi and Haiphong, and carrying the cultural weight of the occupier's table.

Then two things happened. First: the Vietnamese bakers who learned the craft from the French began modifying the recipe — substituting rice flour for a portion of the wheat flour (10-20%), which produced a lighter, crustier, airier bread with a thinner crust and a more open crumb, because the rice flour's lack of gluten creates steam pockets in the dough that wheat flour's gluten network would have trapped and compressed. The Vietnamese baguette became physically different from the French one: shorter (25-30 cm vs 60-65 cm), thinner, lighter, crustier, and with a crumb so open and airy that the interior is mostly air — a bread designed to be filled, not to be eaten plain.

Second: the sandwich happened. Sometime in the 1950s — no one knows exactly when or where, because street food does not keep birth certificates — someone in Saigon took the Vietnamese baguette, split it, and filled it with: pâté (the French contribution), chả lụa (the Vietnamese contribution), đồ chua (the Vietnamese pickled-vegetable contribution), coriander (the Vietnamese herb contribution), and chili (the Vietnamese heat contribution). The bánh mì sandwich was born — not in a restaurant, not in a cookbook, not with a creator's name — but on a street corner, from a cart, assembled in under a minute and sold for a price a factory worker could afford.

The sandwich became Vietnam's national street food within a decade. By the 1960s every corner in Saigon had a bánh mì cart; by the 1970s every city in Vietnam had one; by the 2000s every city in the world with a Vietnamese diaspora had one; and by the 2010s the bánh mì was on every "world's best sandwiches" list, winning recognition not because it was exotic but because it was, genuinely, one of the best-engineered sandwiches ever assembled.

The engineering is the argument. Every component in the bánh mì occupies a specific structural role, and no component is redundant:

THE BREAD: the crust provides the crunch, the air-pocketed crumb provides the cushion, and the rice-flour formula provides the lightness that keeps a filled bánh mì from being a jaw-exhausting brick (a French baguette filled the same way would be twice as heavy and twice as chewy).

THE PÂTÉ: the umami-and-fat foundation, spread invisible on the bottom bread, amplifying every ingredient above it.

THE BUTTER OR MAYONNAISE: the fat barrier between the bread and the moist fillings — without it, the bread absorbs the pickles' acid and the pâté's fat and becomes soggy within 5 minutes.

THE PROTEINS: chả lụa (the bounce), thịt nguội (the slice), or whatever the stall offers — the savoury centre.

THE ĐỒ CHUA: pickled carrot and daikon — the acid-crunch that cuts through the protein's richness and the fat's coating.

THE CUCUMBER: the fresh crunch — turgor-crisp, cool, neutral, resetting the palate between bites.

THE CORIANDER: the aromatic — citral and linalool arriving at the nose through the bite, the herb that separates a Vietnamese sandwich from any other.

THE CHILI: the heat — fresh sliced bird's-eye, or chili sauce, or both, calibrated by the eater's tolerance.

THE MAGGI: the final seasoning — a few drops of the soy-based liquid seasoning the Vietnamese adopted from the Swiss (Maggi Würze, introduced to Vietnam via the French colonial supply chain), providing a concentrated, salty, savoury, faintly caramel-sweet finishing note that no other single condiment duplicates.

Every component. Every role. No waste. The bánh mì is not a sandwich — it is a system, and the system is optimised, and the optimisation happened not in a test kitchen but on a sidewalk, over fifty years, one cart at a time, by cooks whose names no one recorded.`,
  ingredientSections: [
    {
      title: 'The bánh mì bread (makes 6 baguettes)',
      items: [
        { amount: 400, unit: 'g', name: 'bread flour (high-gluten wheat flour)' },
        { amount: 100, unit: 'g', name: 'rice flour', note: `The Vietnamese modification — 20% rice flour reduces the dough's gluten content, producing a thinner, crustier, airier bread. The rice flour's starch gelatinises during baking into a crispy, glass-like surface layer that shatters when bitten — the "shatter-crust" that defines the Vietnamese baguette and that a 100%-wheat French baguette's chewier, thicker crust does not produce.` },
        { amount: 10, unit: 'g', name: 'sugar' },
        { amount: 8, unit: 'g', name: 'salt' },
        { amount: 5, unit: 'g', name: 'instant yeast' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil or lard', note: `A small amount of fat — the French baguette uses none, but the Vietnamese baguette adds a tablespoon of oil or lard to the dough, which shortens the gluten (the fat molecules insert between gluten strands and prevent them from forming long, elastic chains), contributing to the lighter, more tender crumb.` },
        { amount: 320, unit: 'ml', name: 'warm water (35-38°C)' },
      ],
    },
    {
      title: 'The layers (per sandwich)',
      items: [
        { amount: 1, unit: 'tbsp', name: 'pâté gan, spread on the bottom bread', note: `Edge to edge, 2-3 mm thick — the invisible foundation.` },
        { amount: 1, unit: 'tsp', name: 'butter or mayonnaise, spread on the top bread', note: `The moisture barrier.` },
        { amount: 60, unit: 'g', name: 'chả lụa (Vietnamese pork loaf), sliced 3 mm', note: `The bounce — 2-3 slices, the giò lụa this collection documented.` },
        { amount: 40, unit: 'g', name: 'thịt nguội (Vietnamese cold cuts / head cheese) or roasted pork, sliced', note: `The savoury protein — varies by stall. Options: thịt nguội (head cheese), thịt nướng (grilled pork), xíu mại (meatballs), gà nướng (grilled chicken), trứng ốp la (fried egg), or sardines (the budget version). The filling is the variable; everything else is the constant.` },
        { amount: 40, unit: 'g', name: 'đồ chua: pickled carrot (julienned) + daikon (julienned)', note: `Quick pickle: julienned carrot and daikon in rice vinegar + sugar + salt, 30 minutes minimum. The acid-crunch component.` },
        { amount: 4, name: 'cucumber slices or batons' },
        { amount: 1, name: 'sprig of coriander (ngò rí), 3-4 stems with leaves' },
        { amount: 2, name: 'slices of fresh chili, or 1 tsp chili sauce (tương ớt)' },
        { amount: 0.5, unit: 'tsp', name: 'Maggi seasoning sauce', note: `The finishing drops — the Swiss-via-French-via-Vietnamese concentrated soy-based seasoning.` },
        { amount: 1, unit: 'pinch', name: 'ground black pepper' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the dough — wheat + rice, the formula that changed the baguette',
      description: `Combine the bread flour, rice flour, sugar, salt and yeast in a large bowl. Add the warm water and oil. Mix until a shaggy dough forms. Turn onto a floured surface and knead 8-10 minutes — the dough should be smooth, slightly tacky and elastic, but LESS elastic than a pure-wheat dough (the rice flour dilutes the gluten network, reducing its elasticity and its gas-trapping capacity, which is the point: the weaker gluten traps LESS gas, producing a more OPEN, more AIRY crumb with larger holes).

First rise: cover the dough, rest 1-1.5 hours at room temperature until doubled.

Divide into 6 equal pieces (roughly 140 g each). Shape each piece into a baguette: flatten to a rectangle, fold the long edges to the centre, seal, and roll into a cylinder 25-30 cm long, 4-5 cm wide — shorter, thinner and lighter than a French baguette.

Set on a parchment-lined tray, seam-side down. Cover loosely. Second rise: 30-40 minutes until puffy but not fully doubled. Score the top: 3 diagonal slashes with a razor blade or sharp knife — the scores control the bread's expansion during baking and produce the baguette's signature split-crust pattern.`,
      tip: `The rice flour's role is STRUCTURAL, not just textural: rice flour contains NO gluten (the storage proteins in rice are glutelin and prolamin, not the glutenin and gliadin that form wheat's gluten network). By replacing 20% of the wheat flour with rice, the dough's overall gluten content drops from roughly 12% to roughly 9.5% — enough gluten to hold the bread's shape and trap some gas, but not enough to produce the dense, chewy, elastic crumb of a French baguette. The reduced gluten produces: thinner crust (less elastic dough stretches more thinly on the surface), larger holes in the crumb (the weaker network cannot trap small bubbles, so they merge into large ones), and lighter weight (more air, less dough per centimetre). The rice flour is the engineering change that adapted the baguette from a French bread-course (eaten with cheese and wine, meant to be chewy and substantial) to a Vietnamese sandwich-vessel (meant to be filled, meant to be light, meant to shatter rather than chew).`,
    },
    {
      title: 'Bake hot and steamy — 220°C, steam in the first 10 minutes, 18-22 minutes total',
      description: `Preheat the oven to 220°C with a baking tray or pizza stone inside. Place a shallow pan of water on the oven floor (or throw 4-5 ice cubes onto the oven floor when the bread goes in) — the steam is ESSENTIAL: it keeps the crust's surface moist during the first 10 minutes of baking, allowing the dough to expand fully before the crust sets. Without steam, the crust dries and hardens in the first 5 minutes, restricting the dough's rise and producing a dense, under-risen bread. With steam, the crust stays pliable for 10 minutes, the dough rises fully, and the crust then dries and hardens into the thin, glass-crisp, shattering shell the Vietnamese baguette demands.

Bake 18-22 minutes — until the crust is deep golden-brown and the bread sounds HOLLOW when tapped on the bottom (the hollow sound indicates the interior is fully baked and the crumb has set — a thudding sound means the interior is still doughy).

Cool on a wire rack 15 minutes — the cooling sets the crumb's starch (retrogradation) and crisps the crust (the moisture in the crust evaporates as the bread cools, converting the crust from the oven's moist-flexible state to the table's dry-shattering state).

The finished Vietnamese baguette: 25-30 cm long, 4-5 cm wide, light (roughly 100-110 g, vs a French baguette's 250 g for a 60 cm loaf), with a crust so thin and so crisp it shatters at the first bite into a shower of golden flakes, and a crumb so open and airy it compresses under a light press to half its volume — the compression that makes room for the fillings.`,
      tip: `The oven steam's mechanism is surface-starch gelatinisation: when steam condenses on the cool dough's surface in the oven's first minutes, the water gelatinises the surface starch, producing a thin, glassy, smooth, shiny layer (the same starch gelatinisation the cháo and the miến documented, here applied to a bread's surface at 100°C). This gelatinised layer dries in the remaining baking time into a GLASS — a thin, rigid, brittle, light-reflective surface that is the Vietnamese baguette's signature: thinner than the French crust (because the rice-flour dough produces less surface gluten to thicken it), shinier (the gelatinised starch is smoother than a non-steamed crust's rough, matte surface), and more shattering (glass is more brittle than chewy gluten-crust). The steam makes the shatter.`,
    },
    {
      title: 'Assemble in 45 seconds — the system, the layers, the street-corner symphony',
      description: `THE ASSEMBLY (timed — a professional bánh mì vendor does this in 30-45 seconds):

SECOND 0-5: split the baguette lengthwise — not all the way through, leaving a hinge at the back. Open it like a book.

SECOND 5-10: spread pâté on the bottom bread — a thin, even layer, edge to edge. This is the foundation: invisible, essential, umami-and-fat-rich.

SECOND 10-15: spread butter or mayonnaise on the top bread — the moisture barrier that prevents sogginess.

SECOND 15-25: lay the proteins — 2-3 slices of chả lụa, overlapping, covering the pâté. Add the thịt nguội or the day's protein on top.

SECOND 25-35: pile the đồ chua — a generous pinch of julienned pickled carrot and daikon, their acid-pink-and-white a colour splash against the protein's pale.

SECOND 35-40: cucumber batons, coriander sprigs, chili slices — the fresh-crunch-aromatic-heat layer, added last because they are the most delicate and because their position on top means they are the first flavour the tongue meets when the top bread compresses the sandwich during the bite.

SECOND 40-45: Maggi — 3-4 drops along the length. Pepper — a crack. Close the sandwich. Hand to the customer.

THE BITE: the top teeth hit the crust — SHATTER, golden flakes falling. The teeth pass through the crumb — compressed, yielding, mostly air. Then the layers arrive in sequence, bottom to top: pâté (rich, five-spice, umami, invisible), chả lụa (bouncy, myosin-sprung, faintly sweet), thịt nguội (savoury, dense, cold-fat-coated), đồ chua (sour, crunchy, acid-bright, the palate's reset), cucumber (cool, turgor-crisp, neutral), coriander (citral burst, the nose engaging before the swallow), chili (capsaicin heat, building, not arriving all at once), and Maggi (the finish — salty, sweet, caramel-dark, the last note before the swallow).

Seven layers. Seven textures. Seven flavour profiles. One bite. 45 seconds to build. 3 minutes to eat. And the cart moves to the next customer.

Bánh mì Sài Gòn is the collection's most globally recognised recipe, the highest-SEO-value page the project will publish, and the dish that — more than the phở, more than the spring roll, more than any other single item — represents Vietnamese food to the world. It is also the dish that most completely embodies the collection's thesis: that a cuisine's greatest dishes are not designed in laboratories or in restaurants but on sidewalks, by cooks whose names no one recorded, over decades of trial and error and one-đồng increments, until the system is perfect and the perfection looks effortless and the effort looks like a 45-second assembly that anyone could do. Anyone could. No one did, until Vietnam did.`,
      tip: `The đồ chua — the pickled julienned carrot and daikon — is the component that most precisely controls the bánh mì's flavour balance, because it is the ACID that counteracts the FAT (pâté + butter + pork fat) and the CRUNCH that counteracts the SOFT (pâté + chả lụa + bread crumb). Without đồ chua a bánh mì is: rich, soft, one-dimensional, tiring by the third bite. With đồ chua: bright, crunchy, multi-dimensional, refreshing through the last bite. The acid (rice vinegar) cuts the fat's mouth-coating by emulsifying it (acid disrupts fat's hydrophobic aggregation on the tongue, breaking the coat into smaller droplets that the saliva can wash away). The crunch (the carrot's and daikon's turgor-maintained cell walls) provides the textural counterpoint that the soft fillings need. The đồ chua is the sandwich's editorial voice — it says "enough richness, here is freshness" — and without it the sandwich has no editor and the richness runs unchecked.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
