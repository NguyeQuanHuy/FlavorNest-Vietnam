'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'nhum-nuong-mo-hanh',
  title: `Nhum Nướng Mỡ Hành (Sea Urchin Grilled with Scallion Oil and Peanuts)`,
  subtitle: `A whole sea urchin — split open, its five tongues of golden roe still in the shell — grilled directly over charcoal with a spoonful of sizzling scallion oil, crushed peanuts and a crack of black pepper. Eaten from the shell with a small spoon, in one slow mouthful, at the edge of the ocean it came from. The most luxurious three minutes on the island.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '20 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/nhum-nuong-mo-hanh.jpg',
  intro: `Nhum is the Vietnamese name for the sea urchin — cầu gai in the north, nhum or nhím biển in the south — and Phú Quốc's warm, reef-rich, current-swept waters around the An Thới and Thổ Chu archipelagos produce them in the kind of abundance that makes an expensive ingredient elsewhere into a beach snack here. The divers bring them up in netted bags, crack them on the dock, and within the hour they are on a charcoal grate at a beachside stall, five golden crescents of roe still sitting in their spiny shell, receiving nothing but a spoonful of hot scallion oil and a scatter of peanuts before the shell is handed directly to the customer, still smoking, still too hot to hold comfortably.

The roe — the gonads, technically, universally called "uni" in the Japanese vocabulary the rest of the world has adopted — is the only edible part, and it is one of the most intensely flavoured ocean products on earth. Its taste is a paradox: creamy and briny simultaneously, sweet and savoury in the same molecule, with a marine richness that butter and cheese approach from different directions but that only sea urchin occupies. The texture is a custard — a soft, dense, slightly granular paste that melts on the tongue at body temperature and coats the palate with a lipid film that carries the flavour for a full thirty seconds after the spoon is gone. Nothing else in the sea tastes like this, and the word umami, which this collection has used a hundred times, applies here more precisely than anywhere: sea urchin roe contains free glutamate, inosinate AND guanylate, the triple-synergy combination that produces the most intense umami response the human tongue can register.

The Phú Quốc preparation is the simplest the island could devise, and it is simple because the ingredient does not need help. The urchin is split in half with a scissors or a heavy knife, the viscera (the dark, bitter intestinal mass) are rinsed away under running water, and the five tongues of roe are left in the shell — golden, clean, glistening. The half-shell goes directly onto a charcoal grate, roe-side up. A spoonful of mỡ hành — scallion fried in hot oil until sizzling — is poured over the roe. Crushed peanuts are scattered. Pepper is cracked. The grill heats the shell from below, the roe warms gently from residual heat, and in three minutes the shell is served — the roe barely warmed, not cooked, still creamy, now perfumed with scallion oil and studded with peanut crunch.

The instruction "barely warmed, not cooked" is the entire technique and the entire skill. Sea urchin roe is a heat-fragile emulsion: above approximately 60°C the proteins denature, the fat separates, and the creamy custard turns to a grainy, dry, bitter scramble that no amount of oil can rescue. The charcoal heats the shell — which is calcium carbonate and conducts heat slowly — and the shell warms the roe gently from below to perhaps 45-50°C, enough to intensify the aroma and soften the texture without crossing the denaturation threshold. The roe should be warm to the tongue, not hot; creamy, not firm; and it should melt rather than chew. If it chews, it was on the fire too long.`,
  ingredientSections: [
    {
      title: 'The sea urchins',
      items: [
        {
          amount: 8,
          name: 'whole live sea urchins, 6-8 cm diameter',
          note: `Live — the spines should move when touched. Dead urchins spoil within hours and the roe turns bitter. In Phú Quốc they come off the dive boat that morning. In Europe: live sea urchins are available from specialist fishmongers, online seafood suppliers, and occasionally at high-end Japanese or Mediterranean groceries. Species varies by region — Mediterranean (Paracentrotus lividus) and Japanese (Strongylocentrotus) are both excellent. Buy them the day you plan to eat them and keep them cold but not frozen.`,
        },
      ],
    },
    {
      title: 'The scallion oil and toppings',
      items: [
        { amount: 3, unit: 'tbsp', name: 'neutral oil or rendered pork fat' },
        { amount: 4, name: 'scallions, sliced very thin', note: `Fried in the hot oil for 5 seconds — just enough to sizzle, release their allium volatiles, and turn vivid green. Not browned, not wilted to mush.` },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
        { amount: 3, unit: 'tbsp', name: 'roasted peanuts, finely crushed' },
        { amount: 1, unit: 'tsp', name: 'coarsely cracked black pepper' },
        { amount: 1, name: 'lime, in wedges' },
      ],
    },
  ],
  steps: [
    {
      title: 'Open the urchins — scissors, rinse, keep the roe in the shell',
      description: `Hold the urchin upside-down (mouth-side up) in a folded towel — the spines are sharp. Cut a circle around the mouth with heavy scissors or a sharp knife, about 3 cm in diameter, and lift the disc off. Pour out the dark liquid inside.

Gently rinse the interior under a light stream of cold water, letting the dark viscera (intestines, digestive matter) wash away while the five golden-orange tongues of roe remain attached to the shell wall. The roe is fragile — do not poke or scrub. A light rinse is enough. What remains: five crescents of clean, glistening, golden roe, sitting in a spiny bowl.

Drain the shell upside-down for 30 seconds, then set it roe-side-up on a tray. Repeat for all eight.

The roe should be: golden to deep orange, firm but yielding, with a clean ocean smell. If any tongue is dark brown, collapsed, or smells of ammonia — that urchin was dead before it was opened, and the roe is not safe to eat. Discard it.`,
      tip: `The colour of the roe tells you its quality and its season. Deep golden-orange roe is at peak condition — full of lipid, glycogen and the amino acids that produce the characteristic sweetness. Pale yellow roe is post-spawning — the gonad has released its gametes and is rebuilding, and the flavour is thinner and less sweet. Dark brown roe is degraded — the urchin was stressed, starved or dead too long. In Phú Quốc the peak season runs from roughly November to April, when the urchins are feeding heavily on the reef algae and the roe is at maximum fat content. European urchins peak in late winter to early spring. Eat them in season and the colour tells you you are right.`,
    },
    {
      title: 'Make the mỡ hành — 5 seconds of sizzle, not a second more',
      description: `Heat the oil in a small pan over high heat until it shimmers and a scallion slice dropped in sizzles violently on contact. Add all the sliced scallions and the salt at once — they will erupt in a sizzle and turn vivid green in 3-5 seconds.

Pull the pan off the heat immediately. The scallions should be glossy, bright green, and floating in sizzling oil. They should NOT be brown, NOT be wilted, NOT be soft — the mỡ hành is a 5-second product, and every second past 5 is a second toward bitterness.

Set the pan aside, scallions still in the oil. The residual heat finishes them gently while you set up the grill.`,
      tip: `The mỡ hành's 5-second rule is the strictest timing in the Vietnamese aromatics repertoire, and the reason is the same volatile chemistry this collection has documented with the ngò om in canh chua: the allyl sulfides and thiosulfinates that give scallion its bright, oniony, nose-filling aroma are heat-labile — they evaporate or decompose within seconds at high temperature. At 5 seconds the oil has extracted the maximum aroma from the ruptured cell walls and the compounds are dissolved in the fat, still intact. At 15 seconds they have begun to degrade. At 30 seconds the scallion is brown and the oil smells of burnt onion. The mỡ hành is a volatile capture in fat, and the capture window is five seconds.`,
    },
    {
      title: 'Grill — shell on embers, scallion oil on roe, three minutes total',
      description: `Set the opened urchin shells, roe-side up, directly on a charcoal grate over glowing embers — the same low, even, flameless heat as every charcoal dish in this collection. The spiny shell sits stably on the grate and conducts heat slowly from below.

Immediately spoon the mỡ hành — oil and scallions together, about 1 teaspoon per urchin — directly over the roe. Scatter crushed peanuts and crack pepper over each.

Grill 2-3 minutes. Do not touch. The shell heats from below, the roe warms gently from the shell's conducted heat and from the hot oil on its surface, and the scallion oil sizzles faintly against the warm shell wall.

The roe is ready when: it is visibly warm (a faint steam rises), the surface has gone from glossy-wet to matte-warm, the colour has deepened slightly, and — the touch test — a fingertip pressed gently into a tongue feels warm and creamy, not cool and firm (under-warmed) and not hot and grainy (overcooked).

Lift off the grill with tongs. Squeeze a wedge of lime over each. Serve immediately, in the shell, on a plate or in your hand.`,
      tip: `The shell is a thermal buffer — calcium carbonate has a relatively low thermal conductivity (about 2.5 W/m·K, compared to metal's 15-400), which means it absorbs the grill's heat slowly and transmits it to the roe gently, over minutes rather than seconds. This is the reason the urchin is grilled in its shell rather than removed and cooked directly: the shell's slow conductance is the temperature control that keeps the roe below the 60°C denaturation threshold while the grill burns at 300°C+. Remove the roe from the shell and put it on a pan, and it overcooks in ten seconds. Leave it in the shell and the same grill takes three minutes to warm it to 45-50°C. The shell is a heat shield that happens to be a bowl.`,
    },
    {
      title: 'Eat from the shell — one spoon, one mouthful, one ocean',
      description: `Hand the shell to the eater, or set it on a plate with a small spoon. Scoop all five tongues of roe in one spoonful if the shell is small, or two spoonfuls if it is generous.

The mouthful: the roe melts on the tongue — warm, creamy, intensely sweet-briny-umami — with the scallion oil's allium brightness cutting through the richness, the peanut's crunch providing the only solid texture in the bite, the pepper's warmth arriving at the finish, and the lime's acid sharpening the whole ensemble into focus. The flavour lasts thirty seconds on the palate — longer than any other single-ingredient mouthful in this collection — because the roe's lipid film coats the taste buds and releases its amino acids slowly as it melts.

Eat the urchins within the first five minutes off the grill. The roe cools fast in the open shell and cold uni on a cooling shell is a different, lesser thing — the aroma retreats, the fat sets slightly, and the meltingness that defines the experience stiffens to a paste. Warm uni, warm shell, warm mỡ hành, warm evening. The dish is temperature-dependent from start to finish, and the finish is now.`,
      tip: `Sea urchin roe's umami is the most intense in any whole food — not because it has the most glutamate (Parmesan has more) but because it carries all three umami-active compounds simultaneously: glutamate, inosinate AND guanylate, in a single natural matrix. The synergy between these three is multiplicative, not additive — each one amplifies the others' signal on the tongue's umami receptors, and the combined effect is roughly 20-30 times stronger than any single compound at the same concentration. This is why uni tastes "more" than its chemical analysis predicts, and why a fingertip of it floods the palate in a way that no other single ingredient can. The island grills it, adds scallion oil and peanuts, and the result is the most flavour-dense three minutes in this entire collection — because the ingredient arrived at the grill already carrying the most flavour the ocean can concentrate into a single organism.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
