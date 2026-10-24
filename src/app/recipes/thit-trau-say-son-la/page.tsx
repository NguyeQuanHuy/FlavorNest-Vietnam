'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'thit-trau-say-son-la',
  title: `Thịt Trâu Sấy Gác Bếp Kiểu Sơn La (Sơn La Black Thai Smoke-Dried Buffalo)`,
  subtitle: `The Black Thai's version of the highland's smoked buffalo — sliced thinner, marinated wetter, hung closer to the fire, and finished in half the time of the Tuyên Quang Tày version. The same animal, the same hearth, a different ethnic hand, and a different jerky: chewier, more intensely spiced, and carrying the Black Thai's own mắc khén-sả-gừng trinity that marks everything the Thái đen kitchen touches.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '4 days',
  rating: 4.8,
  baseServings: 8,
  heroImage: '/images/recipes/thit-trau-say-son-la.jpg',
  intro: `This collection already holds a trâu gác bếp — the Tuyên Quang Tày version, sliced thick, hung high, cold-smoked 5-7 days over a distant hearth into a dense, bresaola-like product that keeps for weeks. This is its sibling: the Sơn La version, made by the Thái đen (Black Thai), the ethnic group that dominates the Sơn La plateau and whose cuisine is the most refined, most aromatic and most spice-heavy in the Vietnamese highland canon.

The differences are specific and instructive. The Tày version (Tuyên Quang) slices thick (3-4 cm), marinates dry (a paste rubbed on the surface), hangs high (60-80 cm above the fire, in the warm-smoke zone at 40-55°C), and dries slowly (5-7 days). The product is dense, dry throughout, and keeps at room temperature for weeks — a preservation product first, a flavour product second.

The Thái đen version (Sơn La) slices thinner (1.5-2 cm), marinates wetter (the meat is soaked in a liquid brine of spice-infused fish sauce and rice wine), hangs lower (40-50 cm above the fire, in the hotter smoke zone at 55-70°C), and dries faster (3-4 days). The product is chewier, moister, more intensely flavoured — less a preservation product and more a snack product, meant to be eaten within a week or two rather than stored for a month.

The spice vocabulary is also different. Both use mắc khén (the highland Sichuan pepper that is the universal highland signature). But the Thái đen version adds ginger in quantity (the Tày version uses it sparingly), fresh sả (lemongrass, which the Tày version also uses but less of), and — the Thái đen's specific addition — hạt dổi (Piper lolot seeds, also called mountain pepper seeds), a small, round, intensely aromatic seed that carries a warmth somewhere between black pepper and Sichuan pepper and that is found in no other Vietnamese ethnic cuisine. Hạt dổi is the Thái đen's signature spice, the way mắc khén is the Tày's shared highland spice, and its presence in a marinade marks the dish as Sơn La Thái đen rather than as any other highland origin.

The two versions — Tuyên Quang thick-cut, slow, dry; Sơn La thin-cut, fast, chewy — are not competitors but complements, the way a bresaola and a biltong are both dried beef but occupy different positions on the dryness-chewiness spectrum. Including both in the collection maps the highland's dried-buffalo file across two provinces and two ethnic groups, and the map shows that the same animal, the same hearth and the same basic technique produce different products when the knife cuts differently, the fire hangs at a different height, and the spice shelf belongs to a different kitchen.`,
  ingredientSections: [
    {
      title: 'The buffalo (or beef)',
      items: [
        {
          amount: 2,
          unit: 'kg',
          name: 'buffalo or beef — lean cuts (round, flank, shoulder), sliced 1.5-2 cm thick WITH the grain',
          note: `Thinner than the Tuyên Quang version's 3-4 cm — the thinner slice dries faster and produces a chewier, more snack-like product. Cut WITH the grain for pull-apart eating.`,
        },
      ],
    },
    {
      title: 'The Thái đen wet marinade',
      items: [
        { amount: 3, unit: 'tbsp', name: 'mắc khén, toasted and coarsely ground' },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'hạt dổi (Piper lolot seeds), toasted and ground',
          note: `The Thái đen signature — small, round, intensely aromatic seeds with a warmth between black pepper and Sichuan pepper. Sold at highland-specialty spice sellers. If unavailable: 1 tsp Sichuan peppercorn + 0.5 tsp long pepper (Piper longum) approximates the register.`,
        },
        { amount: 4, name: 'stalks lemongrass, tender parts, minced' },
        { amount: 40, unit: 'g', name: 'ginger, grated', note: `More ginger than the Tuyên Quang version — the Thái đen kitchen uses ginger as a primary aromatic, not a supporting one.` },
        { amount: 30, unit: 'g', name: 'galangal, grated' },
        { amount: 6, name: 'cloves garlic, pounded' },
        { amount: 4, name: 'shallots, pounded' },
        { amount: 5, name: 'dried red chilies, toasted, ground' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'rice wine (rượu trắng)' },
        { amount: 40, unit: 'g', name: 'salt (2% of meat weight)' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
      ],
    },
    {
      title: 'For smoking / drying',
      items: [
        { amount: 1, name: 'hearth, smoker, or adapted setup (same options as the Tuyên Quang version)', note: `Hang LOWER than the Tuyên Quang version — 40-50 cm above the fire, in the 55-70°C zone. The hotter position dries the thinner slices faster (3-4 days vs 5-7) and produces a slightly more cooked, less raw-chew texture.` },
      ],
    },
    {
      title: 'To eat',
      items: [
        { amount: 1, name: 'charcoal grill or hot pan' },
        { amount: 4, unit: 'tbsp', name: 'muối chấm mắc khén hạt dổi: toasted mắc khén + hạt dổi + salt, ground', note: `The Thái đen dipping salt — two highland peppers in one saucer.` },
        { amount: 1, name: 'bottle of rice wine or corn wine' },
      ],
    },
  ],
  steps: [
    {
      title: 'Slice thin, soak in the wet marinade overnight — the brine penetrates deeper',
      description: `Slice the meat 1.5-2 cm thick, WITH the grain, into strips roughly 20 x 8 cm. Combine all marinade ingredients into a WET paste — wetter than the Tuyên Quang version's dry rub, because the fish sauce and rice wine create a liquid that submerges the thinner slices and penetrates further into the meat's interior.

Lay the slices in a non-reactive container, pour the marinade over, and toss until every surface is coated and the slices are sitting in a thin pool of spiced brine. Cover and refrigerate 12-24 hours.

The wet marinade does what the Tuyên Quang's dry rub could not at the surface level: the liquid carries the dissolved spice compounds (mắc khén's sanshool, ginger's gingerol, hạt dổi's piperine-analogue) DEEPER into the meat's interior, because the liquid medium provides continuous contact across the entire surface area and the osmotic gradient draws the brine inward. A dry-rubbed slab is flavoured at the surface; a brine-soaked slab is flavoured 3-5 mm deep. The thinner slice means the brine reaches the centre.`,
      tip: `The wet-vs-dry marinade is the processing split between the two versions, and it produces measurably different products. The dry rub (Tuyên Quang) creates a surface-concentrated flavour profile: the outer 2-3 mm is intensely spiced, and the interior is mostly plain salted meat. The wet brine (Sơn La) creates a through-flavoured profile: the spice compounds, dissolved in the fish-sauce-and-wine liquid, diffuse by osmotic gradient into the full depth of the 1.5-2 cm slab, so every bite from surface to centre carries the mắc khén-ginger-hạt dổi trinity. The rub is a painting on the surface. The brine is a dye through the fabric.`,
    },
    {
      title: 'Hang lower, dry faster — 3-4 days at 55-70°C',
      description: `Remove the slices from the brine. Do not pat dry — the residual brine on the surface becomes the first layer of the smoke-crust. Thread a wire or bamboo skewer through one end of each slab and hang from the rack above the hearth, 40-50 cm above the fire — LOWER than the Tuyên Quang version's 60-80 cm.

At 40-50 cm the air temperature is 55-70°C — hotter than the Tuyên Quang's 40-55°C cold-smoke zone, and hot enough to partially COOK the meat's outer layer while drying it. The Sơn La product is therefore a hot-smoke rather than a cold-smoke: the outer 3-4 mm is lightly cooked (denatured, firm, dark), while the interior is dried-raw (chewy, dense, still carrying the marinade's spice). The dual texture — cooked surface over raw-dried interior — is the Thái đen's specific product identity.

Turn daily. The slices darken: the brine-coated surface turns from wet-amber to dry-mahogany, and the meat shrinks to roughly 50% of its original weight. At 3-4 days: the slices are rigid but not brittle (they should bend slightly before cracking, unlike the Tuyên Quang version which does not bend at all), dark throughout, and carrying the accumulated smoke of 3-4 days' cooking fires.`,
      tip: `The lower hanging height crosses the protein-denaturation threshold (60°C) at the surface, which the Tuyên Quang version's higher, cooler position did not. This means the Sơn La product is a COOKED-DRIED hybrid rather than a RAW-DRIED product: the surface is cooked (protein denatured, texture firm-crumbly), and the interior is dried-raw (protein undenatured, texture chewy-dense). The dual texture is deliberate — the cooked surface is easier to tear (denatured protein fractures rather than stretching), which makes the Sơn La version more snackable: you can tear a strip off with your fingers more easily than you can tear the Tuyên Quang version, which is denser and more resistant because its protein is undenatured throughout.`,
    },
    {
      title: 'Tear, re-grill briefly, eat with the double-pepper dipping salt',
      description: `To eat: tear the dried slab into strips along the grain — the fibres separate into long, dark, aromatic strands. Each strand carries: the cooked-smoked surface (dark, firm, crumbling), the dried-raw interior (chewy, dense, spiced through), and the mắc khén-ginger-hạt dổi trinity infused by the wet brine into the full depth of the meat.

RE-GRILL: lay the torn strips on a charcoal grate or a hot dry pan for 45-60 seconds per side — just enough to warm, crisp the edges, and wake the dormant spice volatiles. The heat reactivates the mắc khén's sanshool tingle (which was suppressed during the drying as the compound crystallised in the cooled fat) and the ginger's gingerol (which was converted to zingerone during the hot-smoking, and which the brief re-grill partially converts back as the fat re-melts). The strip that comes off the re-grill is warm, fragrant, tingling and ready.

Dip in the muối chấm mắc khén hạt dổi — the double-pepper salt. The mắc khén's numbing tingle hits first. The hạt dổi's warmer, rounder pepper follows. The salt amplifies the meat's umami. The re-grilled strip's own smoke and spice arrive through the chew.

Eat with rice wine or corn wine. The Thái đen drinking format is the same as the Tuyên Quang Tày's: jerky, dipping salt, rice spirit, and the conversation that runs until the bottle or the jerky is gone.

Two trâu gác bếp in the collection now — the Tuyên Quang Tày version (thick, cold-smoked, dry, surface-flavoured, keeps a month) and the Sơn La Thái đen version (thin, hot-smoked, chewy, through-flavoured, keeps two weeks). Same animal, same hearth, different hands, different products. The highland's dried-buffalo file is now a map with two pins, and the distance between the pins — 200 km, two ethnic groups, two spice shelves — is the distance between two jerky philosophies: preserve (Tày) and flavour (Thái đen).`,
      tip: `The hạt dổi — Piper lolot seeds — is the spice that separates this recipe from every other highland preparation in the collection. It belongs to the Piperaceae family (the same as black pepper and long pepper) but its volatile profile is distinct: where black pepper's heat comes from piperine (a sharp, fast, front-of-tongue burn), hạt dổi's heat comes from a mixture of piperine-analogues and terpenes that produce a slower, rounder, more aromatic warmth that spreads across the tongue and lingers in the throat. The Thái đen use it the way the Tày use mắc khén — as the identity spice, the aromatic fingerprint that marks a dish as belonging to their kitchen. A trâu gác bếp with mắc khén alone is Tày. A trâu gác bếp with mắc khén AND hạt dổi is Thái đen. The second spice is the ethnic signature.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
