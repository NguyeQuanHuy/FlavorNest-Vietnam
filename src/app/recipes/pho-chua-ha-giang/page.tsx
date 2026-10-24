'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'pho-chua-ha-giang',
  title: `Phở Chua Hà Giang (Sour Mixed Phở — Hà Giang's Cold Noodle Salad)`,
  subtitle: `Phở noodles — the same flat rice noodle Hà Nội's phở bò swims in — but here served COLD, DRY, TOSSED (not in broth), with roast duck, char siu pork, fried tofu, crushed peanuts, julienned papaya, herbs, and a SWEET-SOUR SAUCE made from rice vinegar, sugar, chili and garlic that coats every strand in a glossy, tangy, peanut-studded dressing. The dish that takes the nation's most sacred noodle and turns it UPSIDE DOWN: no broth, no hot, no reverence — just a cold, messy, crunchy, sour-sweet toss that Hà Giang claims as its own and that Hà Nội considers borderline heresy.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/pho-chua-ha-giang.jpg',
  intro: `Phở chua — literally "sour phở" — is the Hà Giang province's most ICONOCLASTIC dish: it takes the phở noodle (the Vietnamese food canon's most revered format — the flat rice noodle that, in Hà Nội, is served ONLY in a hot, clear, star-anise-scented bone broth, and whose serving-rules are treated with the seriousness of a liturgy) and serves it in a way that violates EVERY convention of the Hà Nội phở tradition:

NOT HOT — the noodles are served at room temperature or cold.
NOT IN BROTH — the noodles are DRY (tossed in a sauce, not swimming in liquid).
NOT BEEF OR CHICKEN — the protein is ROAST DUCK and CHAR SIU PORK (Chinese-influenced preparations that the phở purist considers foreign intrusions).
NOT PLAIN — the noodles are TOSSED with peanuts, papaya, herbs, fried shallots and tofu (the phở purist's nightmare: additions that overwhelm the noodle's delicate rice-flour flavour).
NOT SERIOUS — the phở chua is a STREET SNACK, eaten casually, at any hour, from a plastic bag if necessary (the phở bò is a MEAL, eaten with ceremony, at the proper hour, from a proper bowl).

The phở chua's origin is CHINESE-VIETNAMESE highland: the dish's flavour-profile (sweet-sour-peanut-duck) traces to the Chinese communities of Hà Giang, Cao Bằng and Lạng Sơn — the northern border provinces where Chinese culinary influence is strongest (the same border-region that gave Vietnam the bánh cuốn, the xôi, and many other Chinese-origin preparations). The sweet-sour sauce is: Chinese (the rice-vinegar-and-sugar base is the same tiáo-liào / dipping-sauce format the Cantonese kitchen uses for cold noodles), and the roast duck is: Chinese (the same crispy-skinned, five-spice-rubbed, oven-or-fire-roasted duck the Cantonese/Teochew tradition produces — not the Vietnamese vịt nấu chao or vịt om sấu, which are braised/stewed rather than roasted). The phở chua is therefore: a CHINESE-ORIGIN cold-noodle format using a VIETNAMESE noodle, topped with CHINESE proteins, dressed with a CHINESE-DERIVED sauce, and adopted by the HIGHLAND-VIETNAMESE as a LOCAL SPECIALITY. The dish's cultural genealogy is: China → Hà Giang → local identity.

The NOODLE is the same phở noodle the collection has referenced throughout — the flat, 3-5 mm wide, freshly-steamed-and-cut rice noodle that is: soft, slippery, dissolving-smooth, and carrying the faint rice-starch sweetness that the cold serving-temperature PRESERVES better than the hot-broth serving-temperature (the hot broth accelerates the noodle's starch-dissolution, and the dissolved starch enters the broth rather than staying on the tongue; the cold/room-temperature noodle's starch dissolves MORE SLOWLY in the mouth, and the tongue retains MORE of the noodle's native rice-sweetness per chew-second).

The SAUCE is the phở chua's identity: a sweet-sour dressing made from: rice vinegar (or lime juice — some versions use citrus-acid instead of acetic-acid), sugar, chili, garlic, and a THICKENER (typically a cornstarch slurry or the natural thickening from simmering the sugar-vinegar until syrupy). The sauce is: POURABLE but CLINGING (thicker than a dipping-sauce, thinner than a paste — the viscosity is calibrated to coat the phở noodles in a thin, glossy, flavour-rich film without pooling at the bowl's bottom), SWEET-FIRST-SOUR-SECOND (the sugar:acid ratio is roughly 2:1 — the sweetness leads, the sourness follows, and the sourness's job is to CUT the sweetness before it becomes cloying, the same sweet-then-sour architecture the nước mắm ngọt documented but here without the fish sauce's umami — the phở chua's sauce is FISH-SAUCE-FREE in its purest form, relying on the soy sauce and the peanut for its savoury-depth).

The TOPPINGS are the phở chua's TEXTURAL EXTRAVAGANCE — more toppings per bowl than any other phở format:

VỊT QUAY (roast duck): crispy-skinned, five-spice-rubbed, sliced — the Chinese contribution, the protein-star.
XÁ XÍU (char siu pork): the Cantonese red-glazed, honey-soy-marinated, oven-roasted pork belly/shoulder — the SECOND protein, because the phở chua is GENEROUS (two proteins, where the phở bò offers only one).
ĐẬU HŨ CHIÊN (fried tofu): golden, crispy-surfaced, soft-inside — the THIRD protein-source and the textural-contrast (crispy-outside / soft-inside, a mini-version of the bánh cống's dual-texture).
LẠC RANG (roasted peanuts): crushed — the DRY CRUNCH, the peanut's Maillard-roasted pyrazines providing the nutty-warm aroma the broth-free format lacks.
ĐU ĐỦ XANH (green papaya): julienned — the TURGOR CRUNCH, the same bland-crispy-hydrating papaya the mắm thái deployed as a diluter, here deployed as a textural-filler.
HÀNH PHI (fried shallots): the golden-crispy-allium garnish.
RAU THƠM (herbs): húng quế, rau mùi, rau răm — the aromatic layer.`,
  ingredientSections: [
    {
      title: 'The noodles',
      items: [
        { amount: 400, unit: 'g', name: 'phở noodles (fresh or dried, blanched)', note: `The SAME noodle as phở bò — flat, 3-5 mm wide, rice-flour. Fresh is better for the cold format (the fresh noodle's higher moisture produces a softer, more slippery strand that the sauce coats better). Blanch, drain, COOL to room temperature (or rinse in cold water for a cold version). Oil lightly to prevent sticking.` },
      ],
    },
    {
      title: 'The proteins — three sources',
      items: [
        {
          amount: 1,
          name: 'roast duck leg or half-duck (vịt quay), sliced',
          note: `Chinese-style roast duck — crispy skin, five-spice-rubbed. Buy from a Chinese-Vietnamese roast-meat shop (the same source the hủ tiếu's heo quay came from). Or roast at home: rub with five-spice + salt + honey, roast at 200°C for 1 hr. Slice thin, skin-on.`,
        },
        { amount: 200, unit: 'g', name: 'char siu pork (xá xíu), sliced', note: `Cantonese-style BBQ pork — red-glazed, honey-soy-marinated. Buy pre-made or make: pork shoulder/belly marinated in soy + hoisin + honey + five-spice + red fermented tofu (for colour), roasted 40 min at 200°C.` },
        { amount: 200, unit: 'g', name: 'firm tofu, cubed 2 cm, fried golden' },
      ],
    },
    {
      title: 'The sweet-sour sauce',
      items: [
        { amount: 3, unit: 'tbsp', name: 'rice vinegar (or 2 tbsp lime juice + 1 tbsp white vinegar)', note: `The ACID — rice vinegar's acetic acid is milder and ROUNDER than lime's citric acid (acetic acid's pKa is 4.76 vs citric acid's 3.13, meaning rice vinegar is LESS SHARPLY SOUR at the same pH — the sourness creeps rather than stabs).` },
        { amount: 4, unit: 'tbsp', name: 'sugar' },
        { amount: 2, unit: 'tbsp', name: 'soy sauce (the umami source — no fish sauce in the purest version)' },
        { amount: 100, unit: 'ml', name: 'water' },
        { amount: 3, name: 'cloves garlic, minced' },
        { amount: 2, name: 'red chilies, minced' },
        { amount: 1, unit: 'tsp', name: 'cornstarch dissolved in 1 tbsp water (the thickener — optional, for a glossier, more clinging sauce)' },
      ],
    },
    {
      title: 'The toppings',
      items: [
        { amount: 60, unit: 'g', name: 'roasted peanuts, crushed coarsely' },
        { amount: 150, unit: 'g', name: 'green papaya, julienned' },
        { amount: 2, unit: 'tbsp', name: 'hành phi (fried shallots)' },
        { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
        { amount: 30, unit: 'g', name: 'rau mùi (cilantro)' },
        { amount: 30, unit: 'g', name: 'húng quế' },
        { amount: 30, unit: 'g', name: 'rau răm' },
        { amount: 4, name: 'limes, in wedges' },
        { amount: 2, name: 'red chilies, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the sweet-sour sauce, prepare the proteins and toppings — everything cold or room-temp',
      description: `SAUCE: dissolve the sugar in water over low heat. Add rice vinegar, soy sauce, minced garlic and minced chili. Simmer 3 minutes — the sugar caramelises VERY LIGHTLY (the sauce should stay CLEAR-AMBER, not dark-brown — the light caramelisation adds a faint toffee-note without the heavy bitterness of a dark caramel). If using the cornstarch slurry: stir it in, simmer 1 more minute until the sauce thickens from watery to GLOSSY-POURABLE (the viscosity of maple syrup — thick enough to coat a spoon but thin enough to pour from a pitcher). COOL the sauce completely — the phở chua's sauce is served at ROOM TEMPERATURE or COLD (a hot sauce on cold noodles would produce temperature-confusion and would wilt the raw papaya and herbs).

The cooled sauce should taste: SWEET-DOMINANT (the 4 tbsp sugar leads), SOUR-SUPPORTING (the vinegar's acetic acid follows, 2-3 seconds after the sweet), GARLICKY (the raw garlic's allicin, still pungent in the un-cooked sauce — the garlic was added to the warm sauce but not cooked long enough to convert all the allicin to ajoene, so the sauce carries BOTH: the cooked garlic's mellow sweetness AND the raw garlic's sharp bite), and carrying a CHILI WARMTH at the finish.

PROTEINS: slice the roast duck (skin-on, 3 mm slices — the crispy skin is the duck's textural treasure; removing the skin is sacrilege). Slice the char siu (5 mm, showing the red-glazed exterior and the pink-white interior — the cross-section's colour-gradient IS the char siu's visual identity). Fry the tofu cubes until golden on all sides (the golden-crispy-exterior / white-soft-interior dual-texture).

PAPAYA: julienne the green papaya into thin, 5 cm long strands. Soak in cold water 10 minutes (crisps the turgor, removes surface-latex).

PEANUTS: crush coarsely (the 2-3 mm fragments, not powder — the fragments provide VISIBLE, AUDIBLE crunch that powder does not).

All components ready. All at room temperature or cold. The assembly is: TOSS, not layer, not ladle, not compose.`,
      tip: `The phở chua's NO-FISH-SAUCE purity is a CHINESE HERITAGE marker: the Chinese kitchen that originated the dish uses SOY SAUCE (a soybean fermentation product) rather than fish sauce (a fish fermentation product) as its umami source. The soy sauce's flavour is: ROUNDER, LESS PUNGENT, MORE MALTY than fish sauce (soy sauce's principal umami compound is glutamate from soybean-protein hydrolysis, carried in a malt-sugar-and-wheat medium that produces Maillard compounds during the sauce's brewing — the maltol, furfural and 4-hydroxy-2(or 5)-ethyl-5(or 2)-methyl-3(2H)-furanone, collectively called HEMF, are the soy sauce's SPECIFIC aroma compounds that fish sauce lacks). The soy-sauce-based phở chua therefore tastes DIFFERENT from a fish-sauce-based version: less funky, more malty, more Chinese-adjacent. Some modern Hà Giang versions ADD fish sauce alongside the soy sauce (the Vietnamese adaptation, the border-crossing that adds Vietnamese umami to Chinese umami), but the purest highland versions remain soy-only.`,
    },
    {
      title: 'Toss everything together — the heretical phở, the cold noodle salad',
      description: `THE TOSS (the assembly that makes phở purists look away):

NOODLES: place the blanched, cooled, oiled phở noodles in a large bowl (or distribute into 4 individual bowls).

SAUCE: pour 3-4 tablespoons of the sweet-sour sauce over the noodles. TOSS — lift the noodles with chopsticks, fold them through the sauce, repeat 10-15 times until EVERY STRAND is coated in the glossy, amber, sweet-sour film. The tossing is the phở chua's defining ACTION — the action that makes this NOT phở bò (which is ladled, not tossed) and NOT any other Vietnamese noodle soup (which are assembled in layers, not mixed). The toss produces: a UNIFORM coating (every strand carries the same sauce-concentration, vs the ladled-broth's gradient from top-wet to bottom-dry), and the sauce's clinging viscosity means the flavour stays ON the noodle rather than pooling at the bowl's bottom (the phở broth's thin viscosity means the broth separates from the noodle as the bowl sits — the phở chua's sauce does not separate, because the cornstarch-thickened sauce ADHERES).

TOPPINGS — ADD IN SEQUENCE: roast duck slices (the crispy-skinned, five-spice-fragrant protein-star, arranged on TOP of the tossed noodles — the duck is not tossed IN, it is placed ON, because tossing would crush the crispy skin), char siu slices (the red-glazed, sweet-savoury, honey-soy pork — placed beside the duck), fried tofu cubes (the golden-crispy-soft — scattered between the meats), crushed peanuts (SCATTERED GENEROUSLY — the peanuts are the phở chua's most AUDIBLE element, the crunch that sounds in every bite), julienned papaya (the CRISP-COOL element, scattered over everything), fried shallots (the golden-aromatic), sesame seeds (the micro-crunch-and-nutty), and the herbs (cilantro, húng quế, rau răm — torn and scattered, the AROMATIC FINISH).

THE BOWL: a LANDSCAPE of textures and colours — the glossy, amber-sauced noodles forming the terrain, the duck's dark-brown skin and pale meat the mountain-range, the char siu's red-pink glaze the sunset, the tofu's golden cubes the boulders, the papaya's pale-green julienne the forest, the peanuts' golden crumble the gravel, and the herbs' green-and-purple the foliage. The bowl is: MORE COLOURFUL than any phở bò (which is mono-brown: brown broth + brown beef + white noodle), more TEXTURALLY VARIED (6+ textures vs phở bò's 3: soft noodle + tender beef + crunchy sprout), and more VISUALLY CHAOTIC (the toss produces a RANDOM distribution of components, vs the phở bò's ordered, layered, ceremonial presentation). The chaos IS the character — the phở chua is not reverent, not ceremonial, not precious. It is a TOSS.

SQUEEZE LIME over the top — the citric acid's sharp-bright layering ON TOP of the vinegar's round-sour, producing a DOUBLE-ACID bowl (acetic from the dressing + citric from the lime — two different acid-types, two different sourness-characters, the round-and-the-sharp coexisting the way the lẩu cá linh's tamarind-and-lime documented double-acid).

THE BITE: the chopsticks lift a tangle of sauce-coated noodles + a piece of duck + a peanut-fragment + a papaya strand + a herb leaf. In the mouth:

THE NOODLE: soft, slippery, the phở-strand's familiar rice-starch texture, but here at room temperature (the starch dissolves MORE SLOWLY than in hot broth, producing a LONGER-LASTING noodle-presence on the tongue — the cold phở chews for 3-4 seconds vs the hot phở's 2-3, and the extra second is the extra rice-sweetness the cold temperature preserves).

THE SAUCE: sweet-first (the sugar's sucrose hitting the tongue's T1R2/T1R3 sweet receptors), sour-second (the acetic acid arriving 1-2 seconds later at the PKD2L1 sour receptor — the round-sour, the creeping-sour, not the stabbing-sour), garlicky (the allicin's sharp-pungent cutting through the sweet-sour), and chili-warm (the capsaicin at the finish — mild, the chili is a BACKGROUND in this sauce, not a foreground).

THE DUCK: the skin CRUNCHES (the roast duck's crispy skin — the same Cantonese-roast-skin crunch the hủ tiếu's heo quay documented, here from duck-skin rather than pork-skin — the skin's collagen-glass snap, the fat-rendered-and-crisped surface), then the meat TEARS (the roast duck's thigh-meat, tender, five-spice-warm, the dark-meat's iron-sweetness + the five-spice's star-anise-cinnamon-clove).

THE PEANUT: CRUNCHES (dry, oil-rich, Maillard-toasted, the crunch that the cold-and-soft bowl NEEDS — without the peanut, the phở chua is: soft noodle + soft duck-meat + soft tofu + soft papaya = monotonously soft. The peanut breaks the monotony and tells the mouth "this is a SALAD, not a soup").

THE PAPAYA: crunches (turgor, cool, bland-watery — the DILUTER, the same role it played in the mắm thái, here diluting the sauce's sweetness rather than the mắm's saltiness).

Phở chua Hà Giang is the collection's most ICONOCLASTIC recipe — the recipe that takes the Vietnamese kitchen's most SACRED format (the phở, the broth, the ceremony) and INVERTS every convention: cold for hot, dry for wet, tossed for ladled, chaotic for ceremonial, Chinese-derived for Vietnamese-original. The inversion is not disrespect — it is REINVENTION: the highland took the lowland's noodle and asked "what else can this noodle do?" and the answer was: it can be cold, it can be sour, it can be tossed, and it can carry a roast duck on its back. The phở purist's horror is the highland's freedom, and the freedom produced a dish that is — by any measure except the purist's — delicious.`,
      tip: `The phở chua's COLD-NOODLE-SALAD format places it in a global family of COLD TOSSED NOODLE preparations: the Chinese liáng miàn (cold noodles with sesame sauce), the Korean naengmyeon (cold buckwheat noodles in iced broth), the Japanese hiyashi chūka (cold ramen with toppings), the Sichuan dàn dàn miàn (sometimes served cold), and the Southeast Asian variations. The format's universality suggests a CONVERGENT SOLUTION to a common problem: in hot climates (or hot seasons in cold climates), a hot noodle soup is thermally unwelcome, and the cold-tossed format delivers the noodle's starch-satisfaction without the broth's thermal load. Hà Giang's summers (May-September, 25-30°C even at 1,000 m elevation) are warm enough to motivate the cold-noodle format, and the phở chua's seasonality (more popular in summer than in winter, when the cháo ấu tẩu's warming congee takes precedence) confirms the thermal-motivation theory.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
