'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-xeo-binh-dinh',
  title: `Bánh Xèo Bình Định (Crispy Small Crepes — Central Coast Style)`,
  subtitle: `Small — palm-sized, not plate-sized — thin, shattering-crisp, turmeric-golden rice-flour crepes filled with shrimp, pork and bean sprouts, folded in half, and eaten not with chopsticks but WRAPPED: torn into pieces, rolled inside dampened bánh tráng with herbs and lettuce, and dipped in mắm nêm. The Bình Định bánh xèo that is half the size, twice the crunch and three times the wrapping of its Saigon cousin.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/banh-xeo-binh-dinh.jpg',
  intro: `Bánh xèo — the name is onomatopoeic: xèo is the sound the batter makes when it hits the hot oiled pan, a sharp, sizzling, high-pitched hiss that announces the crepe's arrival to every ear within 10 metres — exists in three distinct regional versions in Vietnam, and the differences are as instructive as the spring-roll north-south split this collection documented:

THE SOUTHERN VERSION (Saigon): LARGE (30-40 cm diameter, plate-sized, folded in half), THICK batter (more coconut milk, more turmeric, producing a denser, softer, more bread-like crepe), filled with shrimp, pork, bean sprouts AND mung beans (the extra starch), and eaten by tearing pieces and wrapping in lettuce with herbs, dipping in nước chấm (the sweet, fish-sauce-based dip). The southern bánh xèo is a MEAL — one crepe is a serving.

THE CENTRAL VERSION (Bình Định, Quảng Ngãi, Phú Yên): SMALL (12-15 cm diameter, palm-sized), THIN batter (more water, less coconut milk, producing a thinner, crispier, more lace-like crepe), filled with shrimp, pork and bean sprouts only (no mung bean — the central version is leaner), and eaten WRAPPED IN BÁNH TRÁNG — the crepe pieces are set on a dampened rice paper sheet with herbs, rolled into a proper roll, and dipped in MẮMNÊM (the fermented anchovy paste, not the nước chấm). The central bánh xèo is a COMPONENT — 3-4 crepes make a serving, and each crepe is wrapped individually.

THE HUẾ VERSION: the smallest (8-10 cm, cupcake-pan-sized, called "bánh khoái"), thickest, and often including a yolk-based dipping sauce (nước lèo) rather than mắm nêm.

The Bình Định version — the central version — is the version this recipe documents, because it is the crispiest, the thinnest, the most texturally extreme, and the most ARCHITECTURALLY COMPLEX in its eating format: the crepe (crispy) is torn and placed inside the bánh tráng (chewy) with herbs (fresh) and dipped in mắm nêm (funky) — four textures and four flavour registers in every roll, nested inside each other like a matryoshka doll of crunch-inside-chew-inside-fresh-inside-funk.

The crispness is the Bình Định version's specific argument: the batter is thinner (higher water content, lower coconut-milk content), the pan is hotter (the central cooks use small, heavy, cast-iron pans heated to smoking), and the crepe is cooked LONGER (until the edges lift from the pan and the underside is dark-golden-brown, almost charred, with a surface so crisp it shatters into shards when folded rather than bending like the softer southern version). The Bình Định bánh xèo is, in structural terms, closer to a CRACKER than to a crepe — a rice-flour cracker with a filling, shattered and wrapped.`,
  ingredientSections: [
    {
      title: 'The batter',
      items: [
        { amount: 200, unit: 'g', name: 'rice flour (bột gạo)' },
        { amount: 30, unit: 'g', name: 'cornstarch or tapioca starch', note: `The crispness enhancer — the starch gelatinises faster than rice flour and produces a more glass-like, more shattering crust.` },
        { amount: 1, unit: 'tsp', name: 'ground turmeric', note: `For colour — the golden-yellow that gives the bánh xèo its visual identity. Less turmeric than the southern version (which is deep gold); the central version is pale gold, almost cream.` },
        { amount: 400, unit: 'ml', name: 'water', note: `More water, less coconut milk than the southern version — the higher water ratio produces a thinner batter that spreads more thinly and crisps more completely.` },
        { amount: 50, unit: 'ml', name: 'coconut milk (optional — some Bình Định versions omit it entirely for maximum crispness)' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 2, name: 'scallions, sliced very thin, mixed into the batter' },
      ],
    },
    {
      title: 'The filling',
      items: [
        { amount: 200, unit: 'g', name: 'shrimp, peeled, halved lengthwise' },
        { amount: 150, unit: 'g', name: 'pork belly, sliced thin (2 mm)' },
        { amount: 200, unit: 'g', name: 'bean sprouts (giá)', note: `Added RAW — they wilt slightly on the crepe's residual heat but stay crunchy. The bean sprouts' turgor-crunch inside the crepe's glass-crunch is the texture duality the dish is built on.` },
        { amount: 1, name: 'onion, sliced thin' },
      ],
    },
    {
      title: 'For wrapping and dipping',
      items: [
        { amount: 20, name: 'sheets of bánh tráng (rice paper), dampened', note: `The SECOND wrapper — the crepe is the first wrapper (around the filling), and the rice paper is the second wrapper (around the crepe). The double-wrapping is the central Vietnamese format that the south does not use.` },
        { amount: 200, unit: 'g', name: 'rau sống: lettuce, húng quế, kinh giới, rau răm, tía tô' },
        { amount: 1, name: 'green banana, sliced thin, in lime water' },
        { amount: 3, unit: 'tbsp', name: 'mắm nêm, prepared as in the bánh hỏi recipe (with pineapple, lime, sugar, chili)' },
      ],
    },
    {
      title: 'For cooking',
      items: [
        { amount: 100, unit: 'ml', name: 'neutral oil', note: `More oil than the southern version uses — the central crepe is FRIED more than it is cooked, the oil pooling around the crepe's edges and crisping them to a lace-like, translucent, shatter-on-contact frill.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the batter thin, rest 30 minutes — the starch hydrates for maximum crispness',
      description: `Combine rice flour, cornstarch, turmeric, salt, water and coconut milk (if using). Whisk until smooth — no lumps. Stir in the sliced scallion. The batter should be: THIN (thinner than a French crêpe batter — pour from a ladle and it runs like water, not like cream), pale gold (the turmeric's tint), and uniform.

Rest 30 minutes — the resting period allows the rice flour's starch granules to hydrate fully (absorbing water into their amylopectin matrix), which produces a smoother, more cohesive batter that spreads more evenly in the pan. An un-rested batter produces a grainy, uneven crepe with thick spots and thin spots; a rested batter produces a uniform, lace-like, evenly thin crepe.

After resting: stir the batter again (the starch settles during the rest — re-mix to re-suspend). The batter is ready.`,
      tip: `The Bình Định batter's higher water-to-flour ratio (roughly 2:1 by volume vs the Saigon version's 1.5:1) is the crispness control: more water = thinner batter = thinner crepe = faster dehydration in the pan = more complete starch vitrification. The crepe's crispness is a GLASS-TRANSITION phenomenon: the gelatinised rice starch, as it dehydrates on the hot pan, passes through its glass-transition temperature (roughly 60-80°C for rice starch at low moisture), converting from a rubbery, flexible gel to a rigid, brittle glass. A thinner crepe reaches the glass transition FASTER (less water to evaporate) and MORE COMPLETELY (the entire crepe, not just the edges, passes through the transition). The thin batter IS the crisp prescription.`,
    },
    {
      title: 'Fry small, fry hot, fry crisp — each crepe takes 3-4 minutes',
      description: `Heat a small cast-iron or non-stick pan (18-20 cm diameter — smaller than the 30 cm pan the southern version uses) over HIGH heat. Add 1 tablespoon of oil — swirl to coat. The oil should shimmer and faintly smoke.

ADD THE FILLING FIRST: lay 3-4 shrimp halves and 2-3 pork slices in the hot oil. Sear 30 seconds — the shrimp curls, the pork's edges brown.

POUR THE BATTER: one small ladle (about 50-60 ml) of batter over the seared filling. IMMEDIATELY swirl the pan — the batter runs across the surface, filling the gaps between the filling pieces, coating the pan's hot surface in a thin, golden, turmeric-tinted film. The batter hisses — XÈOOOO — the sound that names the dish.

Scatter a handful of raw bean sprouts on one half of the crepe. Reduce heat to medium-high. Cook 2-3 minutes WITHOUT TOUCHING — the batter sets, the underside dehydrates, the edges curl upward and turn dark golden, and the oil pools beneath the crepe and fries it from below. The crepe is essentially SHALLOW-FRIED, not pan-cooked — the generous oil is the central version's crispness insurance.

FOLD: when the underside is dark golden-brown and the edges are lace-crisp and lifting from the pan (the crepe should release cleanly — if it sticks, 30 more seconds), fold the crepe in half with a spatula — the crepe CRACKS at the fold line (it is too crisp to bend smoothly), and the crack is the sound of success.

Slide onto a plate. The crepe should be: golden-brown (darker than the Saigon version), thin (you can see light through it at the thinnest points), CRISP (tap it — it clicks like ceramic), and filled (shrimp, pork and bean sprouts visible through the cracked fold).

Repeat — 3-4 crepes per person, each one taking 3-4 minutes. The cook works continuously, and the table eats as the crepes arrive, wrapping each one while it is still crackling-hot.`,
      tip: `The generous oil (1 tablespoon per 18 cm crepe = roughly 3-4 mm of oil in the pan) is the Bình Định technique that the Saigon version does not use (the Saigon cook uses a thin oil film, not a pool). The pooled oil does two things: it FRIES the crepe's underside (the oil at 180°C+ dehydrates the batter faster than the dry pan's 160°C contact alone, accelerating the glass transition), and it produces the LACE EDGE — the thin, perforated, translucent frill of batter that extends beyond the filling and that is the crispiest, most shattering, most texturally extreme part of the crepe. The lace is batter that was too thin to hold together and that the oil fried into a web of individual starch-glass filaments — each filament a tiny, crisp, golden thread that shatters under the tooth independently. The lace is the Bình Định bánh xèo's signature, and the oil is the lace's maker.`,
    },
    {
      title: 'Tear, wrap in bánh tráng, dip in mắm nêm — the matryoshka roll',
      description: `THE WRAPPING RITUAL (the central Vietnamese format — the south does not do this):

Dampen a sheet of bánh tráng — brush with water or dip briefly, until pliable but not floppy.

Lay the rice paper flat. Set a lettuce leaf on the lower third. Place herbs (húng quế, kinh giới, rau răm), green banana slices.

TEAR a piece of the hot bánh xèo — a quarter or a third — and set it on the herbs. The crepe SHATTERS as you tear — golden shards and lace-fragments falling onto the lettuce, the bean sprouts spilling from the fold, the shrimp and pork visible among the rubble of crispy crepe.

Roll the rice paper: fold the bottom edge over, tuck the sides, roll forward. The roll is: rice paper (chewy, soft, translucent) enclosing lettuce (cool, turgor-crisp) enclosing herbs (aromatic, peppery) enclosing the bánh xèo shards (crispy, golden, shattering inside the soft roll like croutons in a soup).

Dip in the mắm nêm. Bite.

THE MATRYOSHKA: the teeth pass through the rice paper (chewy), then the lettuce (crisp-cool), then the herbs (aromatic), then the bánh xèo shards SHATTER inside the mouth — the crispy crepe, trapped inside the soft rice-paper roll, breaks apart on contact with the teeth, and the shards mix with the lettuce's water and the mắm nêm's funk in a mouthful that contains four textures (chewy + crisp + crunchy-shattering + soft-sprout) and four flavour registers (neutral rice paper + cool lettuce + aromatic herbs + funky-sweet-sour mắm nêm) simultaneously.

The filling arrives last — the shrimp (sweet, pink, marine), the pork (savoury, fat-edged), and the bean sprouts (still crunchy — their turgor survived the crepe's heat and the roll's compression) — and the mouthful is complete: 7 components, 4 textures, 4 flavour registers, in one roll, from one 15 cm crepe, assembled at the table in 15 seconds.

Bánh xèo Bình Định is the collection's most ARCHITECTURALLY NESTED dish — the crepe wraps the filling, the rice paper wraps the crepe, and the mouth unwraps both in sequence. The nesting is the central coast's specific innovation: the south's bánh xèo wraps in lettuce (one layer); the centre's wraps in rice paper (two layers — the crepe AND the paper); and the extra layer adds the chewy-soft exterior that makes the interior's shatter more dramatic by contrast. The wrapping is the amplifier, and the contrast is the sound.`,
      tip: `The three regional bánh xèo versions — Saigon (large, soft, lettuce-wrapped, nước chấm), Bình Định (small, crispy, bánh-tráng-wrapped, mắm nêm), and Huế (smallest, thickest, peanut-sauce-dipped) — map the same north-to-south pattern the spring-roll pair and the dipping-sauce pair documented: the south is LARGER, SOFTER, SWEETER (bigger crepe, more coconut milk, sweeter dip); the centre is SMALLER, CRISPIER, FUNKIER (smaller crepe, more water, mắm nêm); and Huế is the MOST ELABORATE (the smallest format with the most complex sauce). The bánh xèo is the cuisine's compass — like the spring roll, like the bún, like the dipping sauce — and it points in the same direction every time: south = abundance, centre = austerity, Huế = refinement.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
