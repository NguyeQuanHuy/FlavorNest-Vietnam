'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'sup-ga-nam',
  title: `Súp Gà Nấm (Vietnamese Chicken and Mushroom Soup)`,
  subtitle: `Chicken — poached gently, shredded fine — simmered with shiitake, straw mushrooms and corn in a light, egg-drop, cornstarch-thickened broth that is halfway between a Chinese corn soup and a French velouté, belonging fully to neither and tasting entirely Vietnamese: fish sauce instead of soy, coriander instead of parsley, and a crack of white pepper that arrives at the back of the throat like a warm hand. The soup the Vietnamese kitchen serves to the recovering, the elderly, the postpartum mother, and the child who refuses everything else.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/sup-ga-nam.jpg',
  intro: `Súp — the Vietnamese word borrowed directly from the French soupe — occupies a specific register in the Vietnamese kitchen that neither canh (clear Vietnamese soup) nor cháo (rice porridge) occupies: it is a THICKENED soup, enriched with beaten egg and stabilised with cornstarch or tapioca into a smooth, slightly viscous, pourable-but-clingy consistency that coats the spoon and slides down the throat with the gentleness of a warm custard. The thickening is the point — canh is clear (water-thin, broth-light), cháo is thick (porridge-dense, rice-heavy), and súp sits between them: thicker than a canh, thinner than a cháo, and easier to swallow than either.

The Vietnamese súp is a Franco-Chinese hybrid: its thickening technique (cornstarch slurry + beaten egg dropped into hot broth) is Chinese (the same egg-drop, starch-thickened structure as a Chinese corn soup or a hot-and-sour soup), but its seasoning is Vietnamese (fish sauce, white pepper, coriander, fried shallots), and its emotional register is French (the soupe as restorative, as comfort, as the food-as-medicine tradition the French call cuisine de santé and the Vietnamese call "ăn bồi dưỡng" — eating for nourishment).

The chicken provides easily digestible protein (poached chicken breast, shredded fine, is among the most digestible animal proteins — its low fat and short, loosely bundled muscle fibres require minimal gastric acid and minimal protease activity to break down). The mushrooms provide two things: umami (shiitake's guanylate, which synergises with the chicken broth's inosinate to produce a perceived savoury intensity 5-8x greater than either alone) and beta-glucan (a soluble fibre with documented immunomodulatory activity in clinical studies — shiitake beta-glucan stimulates macrophage and natural-killer-cell activity, which is why mushroom soups have been recommended by traditional-medicine practitioners worldwide for centuries, and why the modern clinical literature has caught up with the grandmother's instinct).

The corn adds sweetness and body — its kernels release a starchy, milky liquid when cut and heated that contributes to the soup's overall viscosity and that provides glucose in a gentler form than the cháo trắng's dissolved rice starch. The egg — beaten and drizzled into the hot soup in a thin stream — sets into delicate, ribbon-like curds that float in the thickened broth like golden clouds, providing additional protein in a form so soft and so pre-denatured (the hot broth does the work the stomach would have done) that even the weakest stomach accepts it.

Súp gà nấm is the food the Vietnamese hospital cafeteria serves. It is the food the postpartum mother's family brings in a thermos. It is the food the elderly parent eats when chewing is difficult and swallowing is cautious. And it is the food the recovering child eats when the cháo trắng has done its job and the appetite is returning but the stomach is not yet ready for the full table.`,
  ingredientSections: [
    {
      title: 'The chicken broth',
      items: [
        { amount: 1, unit: 'L', name: 'chicken broth (from poaching a chicken — see gà luộc recipe — or a good-quality store-bought stock)' },
        { amount: 200, unit: 'g', name: 'chicken breast, poached, shredded fine', note: `Poach gently (simmer, not boil) for 15-18 minutes, cool in the broth, shred by hand into the finest possible fibres. The fine shred is a digestibility decision: shorter, thinner fibres require less chewing and less gastric processing.` },
      ],
    },
    {
      title: 'The mushrooms and corn',
      items: [
        { amount: 6, name: 'dried shiitake mushrooms, soaked 30 min, stems removed, sliced thin', note: `Dried shiitake's guanylate concentration is roughly 3x higher than fresh (the drying concentrates the nucleotide), which is why the Vietnamese sick-bed soup specifies dried, not fresh. The soaking liquid — dark, umami-rich — goes into the broth.` },
        { amount: 100, unit: 'g', name: 'straw mushrooms (nấm rơm), halved, or button mushrooms, sliced', note: `The second mushroom — softer, milder, providing bulk and a neutral-sweet chew.` },
        { amount: 1, name: 'ear of sweet corn, kernels cut off (about 150 g), or 150 g canned corn kernels', note: `The sweetness and the starch — the corn's milky liquid contributes to the soup's body.` },
      ],
    },
    {
      title: 'The thickening and the egg',
      items: [
        { amount: 2, unit: 'tbsp', name: 'cornstarch, dissolved in 3 tbsp cold water', note: `The thickener — stirred into the simmering broth, it gelatinises in 30 seconds and converts the broth from clear-thin to smooth-clingy. Tapioca starch works identically (slightly more translucent finish).` },
        { amount: 2, name: 'eggs, beaten', note: `Drizzled in a thin stream into the hot, thickened soup while stirring gently — the egg sets into delicate ribbons and curds that float in the broth. The egg is pre-cooked protein: the hot broth denatures it, so the stomach receives a protein that is already unfolded and accessible to protease.` },
      ],
    },
    {
      title: 'The seasoning',
      items: [
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'ground white pepper', note: `White, not black — white pepper's heat is cleaner and more back-of-throat than black pepper's front-of-tongue burn, and the Vietnamese sick-bed soup prefers the gentler register.` },
        { amount: 1, unit: 'tsp', name: 'sesame oil' },
      ],
    },
    {
      title: 'The toppings',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
        { amount: 30, unit: 'g', name: 'coriander, chopped' },
        { amount: 2, name: 'scallions, sliced' },
        { amount: 1, name: 'lime, in wedges (optional — for the recovering eater who can handle acid)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the broth with mushroom soaking liquid — the umami is in the water',
      description: `Soak the dried shiitake in 200 ml warm water for 30 minutes. The soaking liquid turns dark amber — this liquid contains dissolved guanylate, glutamate and other umami compounds that the drying process concentrated in the mushroom's cells and the soaking process leached into the water. Do NOT discard this liquid. Strain it (through a fine sieve — the soaking water may contain grit from the dried mushroom's surface) and add it to the chicken broth.

Combine the 1 L chicken broth + the strained shiitake soaking liquid in a pot. Bring to a gentle simmer. Add the sliced shiitake, the halved straw mushrooms and the corn kernels. Simmer 15 minutes — the mushrooms soften, the corn releases its milky starch, and the broth deepens from a simple chicken stock to a mushroom-enriched, corn-sweetened, multi-umami liquid.

Season: fish sauce, sugar. Taste — the broth should be savoury-sweet, mushroom-forward, and GENTLE. If it tastes too strongly of anything: dilute with a splash of water. The sick-bed soup errs on the side of mild, because the recovering stomach's tolerance threshold is lower than the well stomach's.`,
      tip: `The shiitake's guanylate + the chicken broth's inosinate produce SYNERGISTIC umami — a perceived intensity 5-8x greater than either nucleotide alone, mediated by the T1R1/T1R3 umami receptor (the same receptor the tôm hùm nướng phô mai's fish-sauce-lobster synergy activated). The synergy means the soup TASTES richer and more nourishing than its actual caloric content suggests — the brain interprets the umami signal as "protein-rich, nutrient-dense" and upregulates appetite accordingly. For a recovering patient whose appetite is suppressed, this umami-driven appetite stimulation is therapeutically valuable: the soup tastes more nourishing than it is, the patient eats more of it, and the increased intake accelerates recovery. The umami is not just flavour. It is appetite medicine.`,
    },
    {
      title: 'Thicken with cornstarch, drizzle the egg — the soup becomes silk',
      description: `THICKEN: stir the cornstarch slurry (2 tbsp cornstarch dissolved in 3 tbsp cold water — always dissolve in COLD water first, never add dry starch to hot liquid, which clumps instantly). Pour the slurry into the simmering broth in a thin stream while stirring continuously. The broth thickens within 30 seconds — from water-thin to smooth-clingy, the spoon leaving a momentary trail when dragged across the pot's bottom.

The target viscosity: thick enough to coat the back of a spoon in a thin, even film that does not run off immediately (the same nappé consistency a French velouté targets), thin enough to pour from a ladle in a smooth stream. If too thick: add broth or water. If too thin: dissolve another teaspoon of cornstarch in cold water and add.

EGG DROP: bring the thickened soup to a gentle simmer (not a boil — boiling disperses the egg into invisible specks; simmering lets it set into visible ribbons). Beat the 2 eggs. Pour in a THIN STREAM from a height of 15-20 cm, moving the pouring hand in a slow circle while stirring the soup GENTLY in the opposite direction with the other hand. The thin stream sets into delicate, golden, ribbon-like curds that float in the thickened broth — each ribbon a strand of pre-denatured egg protein, soft, silky and requiring almost no digestive effort.

Add the shredded chicken. Stir gently once — the chicken distributes through the soup. Add the sesame oil and white pepper. Off the heat.`,
      tip: `The egg-drop technique — thin stream into gently simmering, starch-thickened broth — is the same technique Chinese hot-and-sour soup and Italian stracciatella use, and the physics is the same everywhere: the egg protein (principally ovalbumin) denatures at 62-65°C on contact with the hot liquid, setting from liquid to solid before it can disperse. The THICKNESS of the broth matters: in a thin, un-thickened broth, the egg sinks and clumps at the bottom (gravity pulls it down before it sets); in a thick, starch-stabilised broth, the egg FLOATS — the broth's viscosity suspends the egg stream in place long enough for it to set, producing the delicate, floating, ribbon-like curds the technique is designed to create. The cornstarch thickening is not just a texture step — it is the PREREQUISITE for the egg-drop's success.`,
    },
    {
      title: 'Ladle into bowls — the gentlest bowl the kitchen can offer',
      description: `Ladle the hot, thickened, egg-ribboned soup into bowls. Top: fried shallots (a generous scatter — their sweet, caramelised, oil-glazed crunch is the soup's single textural counterpoint against the overall softness), sliced scallion, chopped coriander.

The bowl should be: golden (the broth's chicken-mushroom colour), smooth (the cornstarch's work), studded with egg ribbons (golden, floating, delicate), mushroom slices (dark, umami-rich), corn kernels (yellow-sweet) and chicken shreds (white, fine). The visual is warm and GENTLE — no dark soy, no red chili oil, no aggressive garnish.

Eat with a spoon — each spoonful is a single, smooth, warm, savoury, corn-sweet, mushroom-umami, egg-silky, chicken-shredded, pepper-warmed mouthful that the throat accepts without chewing and the stomach accepts without protest. The soup slides. It does not challenge. It does not demand. It arrives warm, savoury and soft, and it leaves a film of nourishment on the tongue and a warmth in the stomach that the body reads as: I have been fed, gently, and I am better for it.

Súp gà nấm is the second step on the recovery ladder — after the cháo trắng (which gave water and starch and nothing else) and before the miến gà (which gives protein and broth and complexity). The cháo was survival. The súp is recovery. The miến is return. And the three together — cháo trắng → súp gà nấm → miến gà → full meal — are the Vietnamese kitchen's recovery protocol, administered by the mother at the bedside, one bowl at a time, one day at a time, from blank porridge to full table.`,
      tip: `The recovery ladder — cháo trắng → súp gà nấm → miến gà → full meal — tracks the stomach's increasing capacity across the illness's arc: the cháo (starch + water, minimal protein, no fat) for the acute phase when the stomach accepts nothing; the súp (thickened broth + egg + shredded chicken + mushroom, moderate protein, minimal fat) for the recovery phase when the stomach is cautious; the miến (full broth + glass noodle + shredded chicken, normal seasoning) for the returning phase when the appetite is back; and the full meal (rice + kho/canh + protein) for the well phase. Each step adds complexity — more protein, more fat, more texture, more flavour — and each step is a test: can the stomach handle this? If yes, tomorrow we escalate. If no, we stay here another day. The mother is the clinician, and the ladder is the protocol, and the bowls are the doses.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
