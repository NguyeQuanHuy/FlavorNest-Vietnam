'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'hu-tieu-soc-trang',
  title: `Hủ Tiếu Sóc Trăng (Clear-Broth Rice Noodle Soup — Southern Style)`,
  subtitle: `Hủ tiếu — the thin, translucent, slightly chewy, sun-dried-then-rehydrated rice noodle the southern Vietnamese kitchen prizes above all other noodle formats — in a clear, sweet, pork-bone-and-dried-shrimp broth topped with sliced pork, shrimp, quail eggs and a shower of fried garlic. The Sóc Trăng breakfast that the Teochew Chinese brought, the Vietnamese adopted, and the Mekong Delta perfected into the south's answer to the north's phở.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '3 hr',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/hu-tieu-soc-trang.jpg',
  intro: `Hủ tiếu — from the Teochew Chinese 粿條 (kué-tiâu, "rice-cake strips") — is the Mekong Delta's NOODLE, the way phở is the north's noodle and bún bò Huế is the centre's: the noodle soup the region identifies with, argues about, and eats every morning. The noodle itself — flat, 3-5 mm wide, translucent, slightly chewy, with a faint sun-dried-starch sweetness that no freshly made noodle carries — is the Teochew community's contribution to the Vietnamese south, and its presence on the Sóc Trăng breakfast table is as certain as the bún nước lèo's presence on the Khmer table next door.

The hủ tiếu noodle is DIFFERENT from phở noodle, bún noodle and mì noodle in its PRODUCTION METHOD: where phở is cut from a freshly steamed sheet (soft, slippery, dissolving), bún is extruded through a press (round, bouncy, smooth), and mì is wheat-based (elastic, chewy, yellow), hủ tiếu is SUN-DRIED: the rice-flour sheet is steamed, cut into strips, and then DRIED in the sun for 1-3 days, producing a brittle, translucent, shelf-stable noodle that must be REHYDRATED (soaked in warm water 20-30 minutes) before use. The sun-drying changes the noodle's starch at the molecular level: the amylose chains, which in freshly steamed noodles are in their gelatinised (disordered, soft) state, RETROGRADE during the drying (the chains re-crystallise into ordered, tightly packed structures — the same retrogradation the cơm hến's cold rice and the cơm nắm documented), and the retrograded starch is MORE RESISTANT to re-gelatinisation when the noodle is rehydrated and placed in hot broth. The result: a noodle that is CHEWIER than phở (the retrograded starch resists the broth's heat longer before softening), MORE TRANSLUCENT (the crystallised starch scatters less light than the disordered gelatinised starch), and carrying a faint DRIED-STARCH SWEETNESS (the Maillard reaction between the noodle's trace proteins and sugars, accelerated by the sun's UV during the 1-3 day drying, produces a very mild, toasted, sweet background note that fresh noodles do not carry).

The broth is the hủ tiếu's second identity marker: CLEAR, SWEET, and LIGHT — the opposite of the lẩu mắm's opaque-funky-heavy and the bún nước lèo's muddy-brown-pungent. The hủ tiếu broth is made from: pork bones (simmered 2-3 hours for gelatin), dried shrimp (tôm khô — the Mekong Delta's dried-shrimp industry produces small, orange, intensely sweet, sun-dried shrimp that are simmered in the stock to add a MARINE SWEETNESS the pork bones alone do not carry), dried squid (a Teochew addition — a small piece of sun-dried squid simmered in the stock contributes a deep, smoky, umami-layered sweetness), rock sugar (đường phèn — the clean, mineral-free sweetness the chè hạt sen documented), and daikon (a large piece, simmered for 2 hours, contributing a faint, vegetal sweetness and absorbing some of the pork's fat — producing a LEANER, CLEANER broth).

The broth's CLARITY is its pride: the hủ tiếu cook skims obsessively (every 10 minutes for the first hour), never lets the stock boil (a rolling boil emulsifies the fat, producing a cloudy, greasy broth — the same clarity-vs-cloudiness distinction every consommé-maker and every phở-cook in this collection has guarded), and strains through cloth. The finished broth is: TRANSPARENT (hold a spoon in the bowl — you can see the spoon's metal through the broth), pale gold (the dried shrimp's astaxanthin and the rock sugar's amber), and SWEET — perceptibly sweeter than the phở's broth, because the rock sugar + the dried shrimp's glycine + the daikon's fructose together produce a sweetness level that the northern palate reads as "too sweet" and the southern palate reads as "correct." The sweetness is the south's signature, and the hủ tiếu broth is its most concentrated expression.`,
  ingredientSections: [
    {
      title: 'The broth — pork bone + dried seafood + rock sugar',
      items: [
        { amount: 1, unit: 'kg', name: 'pork bones (leg or neck), blanched' },
        { amount: 50, unit: 'g', name: 'dried shrimp (tôm khô)', note: `The marine sweetness — small, orange, sun-dried shrimp sold at every Vietnamese grocer. Simmered whole in the stock for 1-2 hours, then removed (they've given everything). The dried shrimp's concentrated glycine (the drying removed 80% of the water but 0% of the amino acids) produces a SWEETNESS IN THE BROTH that no fresh shrimp can match at the same dose.` },
        { amount: 1, name: 'small piece dried squid (mực khô), roughly 30 g', note: `The Teochew addition — a smoky, umami-deep, chewy piece of sun-dried squid that simmers in the stock and contributes: glutamate (from the squid's protein), a faint smokiness (from the sun-drying's surface Maillard), and the Teochew kitchen's specific broth-signature (every Teochew noodle-soup broth in Southeast Asia — from Singapore's bak chor mee to Penang's koay teow th'ng — uses dried squid for the same purpose).` },
        { amount: 300, unit: 'g', name: 'daikon (củ cải trắng), peeled, in 2 large chunks' },
        { amount: 50, unit: 'g', name: 'rock sugar (đường phèn)' },
        { amount: 3, unit: 'L', name: 'water' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The noodles',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'hủ tiếu khô (dried rice noodle strips), soaked in warm water 20-30 min, drained',
          note: `The sun-dried, retrograded, translucent, chewy southern noodle. If unavailable: fresh hủ tiếu (sold refrigerated at Vietnamese groceries — blanch 30 seconds) or dried pad Thai noodles (same width, similar chew, different starch profile). Phở noodle is NOT a substitute — the phở's soft slipperiness is the wrong texture for this broth.`,
        },
      ],
    },
    {
      title: 'The toppings',
      items: [
        { amount: 200, unit: 'g', name: 'pork leg or shoulder, boiled in the broth 40 min, sliced thin', note: `Boiled in the stock (contributing its flavour to the broth AND becoming the topping — zero-waste). Sliced 3 mm against the grain.` },
        { amount: 200, unit: 'g', name: 'shrimp, peeled, poached in the broth 2-3 min' },
        { amount: 100, unit: 'g', name: 'ground pork, seasoned with fish sauce + pepper, formed into small balls, poached 5 min', note: `The pork-ball element — the same minced-pork-ball the hủ tiếu Nam Vang (Phnom Penh-style) includes, here simpler (no five-spice, no starch binder — just seasoned pork, dropped by the teaspoon into the simmering broth, setting into irregular, rustic, 2 cm balls).` },
        { amount: 6, name: 'quail eggs, hard-boiled, peeled', note: `The Teochew signature — small, spotted, one per bowl, the yolk golden-orange and dense. Duck or chicken egg works but lacks the quail egg's miniature elegance.` },
        { amount: 3, unit: 'tbsp', name: 'hành phi (fried garlic + fried shallots)', note: `FRIED GARLIC is the hủ tiếu's specific garnish (not just fried shallots — the hủ tiếu demands garlic chips alongside shallot chips, the allium-duo that the Teochew kitchen always deploys).` },
        { amount: 100, unit: 'g', name: 'Chinese celery (cần tây), sliced thin', note: `The Teochew herb — sharper, thinner-stemmed, more pungent than Western celery. Its 3-n-butylphthalide contributes a celery-specific, slightly medicinal, green-sharp aroma the parsley or coriander cannot replicate.` },
        { amount: 30, unit: 'g', name: 'scallion, sliced' },
        { amount: 2, unit: 'tbsp', name: 'lard or garlic oil, drizzled (the final richness)' },
      ],
    },
    {
      title: 'At the table',
      items: [
        { amount: 200, unit: 'g', name: 'bean sprouts, raw' },
        { amount: 100, unit: 'g', name: 'Chinese chives (hẹ), cut 5 cm' },
        { amount: 30, unit: 'g', name: 'rau om (rice-paddy herb, optional — the Delta herb)' },
        { amount: 4, name: 'limes, in wedges' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 2, unit: 'tbsp', name: 'hoisin sauce (tương đen — the southern table condiment)' },
        { amount: 2, unit: 'tbsp', name: 'chili sauce (tương ớt — Sriracha or similar)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Simmer the broth 2-3 hours — clear, sweet, the south\'s purity',
      description: `Blanch the pork bones (3 min boil, drain, rinse). Return to a clean pot with 3 L COLD water (cold start = cleaner extraction — the proteins dissolve slowly and are skimmed as they rise, rather than being instantly emulsified by a hot-start boil). Add the daikon chunks.

Bring to a boil. SKIM immediately and obsessively — every 10 minutes for the first hour. The skim removes: blood-protein scum (grey, foamy, bitter if left), emulsified fat (which would cloud the broth), and any residual bone fragments. The obsessive skimming is the hủ tiếu broth's PRICE OF CLARITY — the phở cook skims too, but the hủ tiếu cook skims MORE, because the hủ tiếu broth is expected to be MORE transparent than phở's (the phở's star anise and cinnamon add colour that masks slight cloudiness; the hủ tiếu's pale-gold broth has nowhere to hide).

After 30 minutes: add the dried shrimp and the dried squid piece. The dried seafood sinks to the bottom and begins releasing its concentrated amino acids (the glycine from the dried shrimp, the glutamate from the dried squid) into the stock.

Add the boiling pork piece (the meat for the topping) at minute 30 as well — it simmers alongside the bones and the seafood for 40-50 minutes.

At minute 60: add the rock sugar. The sugar dissolves in 2 minutes and the broth's flavour shifts: the savoury pork-and-seafood base acquires a SWEET OVERLAY — clean, mineral-free, crystalline sweetness that lifts the broth's heavy protein-savoury into a lighter, more balanced, more drinkable register. The rock sugar is the hủ tiếu broth's TUNING FORK — it sets the pitch from "stock" to "broth" to "soup," and the southern palate knows immediately if the pitch is correct.

Simmer 2-3 hours total. Remove the boiled pork at minute 70-80 (cool, slice thin for the topping). Remove the daikon at minute 120 (it has given its sweetness and absorbed the pork's fat — discard or serve separately). Remove the dried shrimp and squid (their job is done).

STRAIN through a fine sieve lined with cloth. The broth should be: TRANSPARENT (hold to the light — no cloudiness, no floating fat, the gold is even and clear), PALE GOLD (the dried shrimp's astaxanthin + the rock sugar's amber), and carrying THREE sweetnesses simultaneously: the pork bone's collagen-derived SAVOURY SWEETNESS (the amino acids the brain reads as "rich"), the dried shrimp's AMINO-ACID SWEETNESS (glycine, the same crustacean sweetness the bún tôm Châu Trúc documented), and the rock sugar's PURE SWEETNESS (sucrose, the tongue's most familiar sweet). The three sweetnesses LAYER — they do not blend into one generic "sweet" but remain DISTINGUISHABLE if the eater pays attention: savoury-sweet from the bones, marine-sweet from the shrimp, pure-sweet from the sugar. The layering is the broth's sophistication.

Season: fish sauce, salt. The final broth: clear, sweet, light, and carrying more depth than its transparency suggests.`,
      tip: `The dried squid's contribution to the hủ tiếu broth is a TEOCHEW SIGNATURE found in noodle soups across the Teochew diaspora: Singapore (bak chor mee, kway teow soup), Malaysia (Penang koay teow th'ng), Thailand (kuay tiew nam sai), and Vietnam (hủ tiếu). The dried squid's principal flavour contribution is not glutamate (which the dried shrimp provides in greater quantity) but TRIMETHYLAMINE OXIDE (TMAO) — a compound abundant in cephalopod muscle that, when heated in water, breaks down to TRIMETHYLAMINE (TMA, the "fishy" compound) and FORMALDEHYDE at low levels. At the LOW concentration a single small piece of dried squid contributes to 3 L of stock, the TMA registers not as "fishy" but as a faint, SMOKY, OCEANIC DEPTH — a background note the dried shrimp does not carry and that marks the broth as Teochew-derived. Remove the dried squid and the broth is still good; add it and the broth has a THIRD DIMENSION the two-component (bone + shrimp) broth lacks.`,
    },
    {
      title: 'Assemble — noodles, toppings, the clear golden pour, the garlic shower',
      description: `Blanch the rehydrated hủ tiếu noodles in boiling water 15-20 seconds — just enough to warm (the noodles are already cooked from the original steaming; the rehydration restored their flexibility; the blanch restores their temperature). Drain. Divide into 6 bowls.

ARRANGE THE TOPPINGS: sliced boiled pork (3-4 slices per bowl, fanned), poached shrimp (2-3 per bowl, pink, curled), pork balls (2-3 per bowl), one peeled quail egg (halved, the golden yolk facing up), Chinese celery, scallion.

LADLE THE BROTH: the clear, golden, sweet, transparent liquid fills the bowl — the noodles visible through the broth, the toppings visible through the broth, the bowl's ceramic visible through the broth. The clarity IS the beauty, and the beauty is the cook's 2-3 hours of obsessive skimming made visible.

DRIZZLE garlic oil or lard — a teaspoon on the surface, the rendered fat forming tiny, golden, light-catching droplets that carry the fried garlic's allicin-derived aromatics across the broth's surface.

SHOWER with hành phi — the golden, crispy, fried garlic chips and shallot chips falling onto the broth's surface and floating (their oil-sealed surfaces repel the water, and they bob on the broth like tiny golden boats for 60 seconds before absorbing enough moisture to sink and soften).

THE FIRST SPOONFUL: the broth — clear, sweet, light, the three-sweetness layering detectable: savoury-sweet (base), marine-sweet (middle), pure-sweet (top). The broth is DRINKABLE — lighter than phở's (no star anise heaviness, no cinnamon warmth), lighter than bún bò Huế's (no mắm ruốc funk, no chili oil slick), and the lightness is the hủ tiếu's argument: that a noodle soup can be TRANSPARENT and DEEP simultaneously, that sweetness can be COMPLEX without being cloying, and that the south's love of sweet in savoury is not a deficiency but a DESIGN.

THE NOODLE: the hủ tiếu's chew — firmer than phở (the retrograded starch resists the broth's heat for 15-20 minutes before softening — LONGER than phở's 10-15 minute window, giving the hủ tiếu a wider eating-window than the phở), more translucent (the dried-and-rehydrated starch's crystal structure refracts light differently, producing a glassy, almost-see-through noodle that the phở's opaque-white freshness does not match), and carrying the faint, sun-dried, toasted-starch sweetness that makes each noodle strand taste slightly of the sun that dried it.

Add bean sprouts, Chinese chives, rau om. Squeeze lime. Dab hoisin. Dab chili sauce. The southern condiment-bar (hoisin + chili sauce + lime + bean sprouts) is the hủ tiếu's table-side personalisation system — wider than phở's (which offers only herbs + lime + chili), because the south's palate is MORE tolerant of sweetness-additions (the hoisin adds MORE sweet to an already-sweet broth, and the southern eater welcomes it, and the northern eater watching is horrified, and the horror is the geography).`,
      tip: `The hủ tiếu noodle's SUN-DRYING produces a starch structure that is RESISTANT STARCH Type 3 (RS3) — retrograded amylose that resists enzymatic digestion in the small intestine and passes to the colon, where the gut microbiome ferments it to SHORT-CHAIN FATTY ACIDS (butyrate, propionate, acetate — the same compounds the mắm nhum's lipase produced from urchin fat, here produced by BACTERIA from the noodle's starch in the eater's gut). The RS3 in the sun-dried hủ tiếu makes it a lower-glycaemic-index food than the fresh phở noodle (whose fully gelatinised, non-retrograded starch is rapidly digested and rapidly blood-sugar-spiking). The sun-drying is therefore not just a preservation method and not just a texture-modifier — it is a NUTRITIONAL modifier, and the hủ tiếu's lower GI is the sun's health contribution, delivered through the starch's crystal structure, measurable in the eater's blood-glucose curve.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
