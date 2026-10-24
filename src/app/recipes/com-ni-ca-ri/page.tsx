'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'com-ni-ca-ri',
  title: `Cơm Nị Cà Ri (Chăm Turmeric Rice with Chicken Curry — Châu Giang Style)`,
  subtitle: `Cơm nị — rice cooked with turmeric, ghee and whole spices until every grain is golden, fragrant and glistening with clarified-butter fat — served with a coconut-milk chicken curry spiced with a masala that is neither Indian nor Vietnamese but specifically CHĂM: the spice blend of the Cham Muslim community of Châu Giang, who have lived in the Mekong Delta for centuries and whose cuisine is the Vietnamese food map's most direct South Asian connection.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/com-ni-ca-ri.jpg',
  intro: `Cơm nị — from the Malay-Cham nasi (rice), cognate with the Indonesian nasi and the Arabic nasī — is the rice preparation of the Chăm (Cham) community of Châu Giang, An Giang province and the neighbouring districts of Sóc Trăng. The Chăm are a Malay-Polynesian people whose ancestors built the Champa kingdom (2nd-17th century CE) along the central Vietnamese coast, and whose descendants — principally Cham Muslims (Bani Islam) and Cham Brahmans (Bani Balamon) — now live in scattered communities in the Mekong Delta, in Ninh Thuận and Bình Thuận provinces, and in Cambodia. The Cham Muslims of Châu Giang maintain a HALAL food tradition that is unique in Vietnam: no pork (the Islamic prohibition), no alcohol, and a spice vocabulary (cumin, coriander seed, cardamom, cinnamon, clove, fennel) that traces directly to the Indian Ocean trade routes the Champa kingdom participated in for a millennium.

The cơm nị's name tells its history: nị = nasi = rice cooked in fat with spices, the same preparation the Indian subcontinent calls BIRYANI (from the Persian birinj, "rice") and the Malay world calls NASI MINYAK (oil rice) or NASI BERIANI. The Cham version sits at the intersection of three rice-and-spice traditions: INDIAN (the whole-spice tempering, the ghee, the turmeric), MALAY (the coconut milk, the pandan, the word "nasi"), and VIETNAMESE (the jasmine rice variety, the fish-sauce-based condiments on the side, the fresh herbs).

The rice is cooked in GHEE (bơ ghee — clarified butter, the Indian cooking fat the Cham adopted along with Islam and its food laws). The ghee is heated with whole spices — cinnamon stick, cardamom pods, cloves, star anise — and the spices TEMPER in the hot fat (the fat-soluble volatile compounds dissolve into the ghee: cinnamaldehyde from the cinnamon, eugenol from the clove, 1,8-cineole from the cardamom, anethole from the star anise). The rinsed rice is added to the tempered ghee, stirred to coat every grain in the spice-infused fat, then water (or coconut milk) and turmeric are added, and the rice is cooked by the ABSORPTION method (the same method every Vietnamese rice cook uses: measure the water, bring to a boil, cover, reduce to a simmer, the rice absorbs all the liquid). The finished rice is: GOLDEN (the turmeric's curcumin, dissolved in the ghee and deposited on every grain), FRAGRANT (the tempered whole spices' volatiles, carried by the ghee's fat to the rice's surface), and GLISTENING (the ghee's fat coating each grain in a thin, clarified-butter film that separates the grains and prevents clumping).

The chicken curry (cà ri gà) is the cơm nị's permanent partner — the two are NEVER served separately, and the combination "cơm nị cà ri" is spoken as a single phrase, the way "phở bò" or "cơm tấm" are single phrases. The curry is: chicken (bone-in, skin-on, cut through the bone into 5 cm pieces), simmered in coconut milk with the Chăm masala (a spice blend the community grinds at home — cumin, coriander, turmeric, chili, fennel, cinnamon, clove, cardamom — heavier on the cumin and the coriander than the Vietnamese bột cà ri the ragu used, and containing NO star anise, which is a Vietnamese-Chinese spice the Chăm masala deliberately excludes), with potatoes, carrots and onions.

The curry is HALAL — no pork, no pork-derived products, no alcohol — and the Chăm cook uses NO fish sauce in the curry itself (fish sauce is not haram, but the Chăm Muslim culinary tradition prefers salt + the curry's own spice-complexity over fish sauce's fermented-fish flavour). Fish sauce appears at the TABLE, offered as a SIDE condiment for the Vietnamese guests who eat at the Chăm table and who — unable to eat a meal without fish sauce — add it themselves. The Chăm host does not add it. The Chăm palate does not need it. The curry's spice-complexity provides the savoury depth the Vietnamese palate obtains from fish sauce — the same substitution the tương Nam Đàn made for the Nghệ An inland kitchen: when the coastal condiment is absent, the alternative must provide the same UMAMI through different chemistry (the Chăm masala's cumin + coriander + slow-cooked onion produce glutamate and thiazolines that approximate fish sauce's umami without the fermented-fish flavour).`,
  ingredientSections: [
    {
      title: 'Cơm nị (the turmeric-ghee rice)',
      items: [
        { amount: 500, unit: 'g', name: 'jasmine rice, rinsed 3 times, drained' },
        { amount: 3, unit: 'tbsp', name: 'ghee (clarified butter)', note: `The Indian fat — the Chăm cooking medium. If unavailable: unsalted butter (melt, skim the foam, pour the clear fat). The ghee's smoke point (250°C) allows the whole-spice tempering at high heat without burning.` },
        { amount: 1, unit: 'tsp', name: 'ground turmeric' },
        { amount: 1, name: 'cinnamon stick, 5 cm' },
        { amount: 3, name: 'cardamom pods, lightly crushed' },
        { amount: 3, name: 'cloves' },
        { amount: 1, name: 'star anise (the Vietnamese presence in the Chăm rice — absent from the curry\'s masala but present in the rice\'s tempering, a compromise)' },
        { amount: 1, name: 'bay leaf' },
        { amount: 650, unit: 'ml', name: 'water or light coconut milk' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, name: 'pandan leaf, knotted (optional — the Malay contribution)', note: `The pandan's 2-acetyl-1-pyrroline is the SAME compound that gives jasmine rice its fragrance (jasmine rice produces it naturally; pandan adds a second dose). The double-2AP rice is more aromatic than either source alone.` },
      ],
    },
    {
      title: 'Cà ri gà (chicken curry — Chăm masala)',
      items: [
        { amount: 1, name: 'whole chicken (1.2-1.5 kg), cut through bone into 5 cm pieces' },
        { amount: 2, name: 'potatoes, peeled, quartered' },
        { amount: 2, name: 'carrots, roll-cut 3 cm' },
        { amount: 2, name: 'onions, quartered' },
        { amount: 400, unit: 'ml', name: 'coconut milk (1 can, full-fat)' },
        { amount: 200, unit: 'ml', name: 'water' },
      ],
    },
    {
      title: 'Chăm masala (the spice paste)',
      items: [
        { amount: 2, unit: 'tbsp', name: 'ground cumin', note: `HEAVY cumin — more than the Vietnamese bột cà ri uses. The cumin's cuminaldehyde is the Chăm curry's aromatic signature, the way the lemongrass's citral is the Vietnamese curry's and the star anise's anethole is the phở's.` },
        { amount: 2, unit: 'tbsp', name: 'ground coriander seed' },
        { amount: 1, unit: 'tbsp', name: 'ground turmeric' },
        { amount: 1, unit: 'tsp', name: 'ground chili (moderate — the Chăm curry is warm, not fiery)' },
        { amount: 1, unit: 'tsp', name: 'ground fennel' },
        { amount: 0.5, unit: 'tsp', name: 'ground cinnamon' },
        { amount: 0.5, unit: 'tsp', name: 'ground clove' },
        { amount: 0.5, unit: 'tsp', name: 'ground cardamom' },
        { amount: 4, name: 'cloves garlic, pounded' },
        { amount: 3, name: 'shallots, pounded' },
        { amount: 20, unit: 'g', name: 'ginger, grated' },
        { amount: 2, name: 'stalks lemongrass, minced (the Vietnamese intrusion into the Chăm spice blend)' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil or ghee' },
        { amount: 1.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 1, name: 'plate of rau sống: húng quế, rau răm, cucumber, tomato' },
        { amount: 1, name: 'small saucer of fish sauce + chili (offered, not imposed)' },
        { amount: 100, unit: 'g', name: 'đồ chua (pickled carrot + daikon)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Cook the cơm nị — temper whole spices in ghee, add rice, absorb',
      description: `Heat the ghee in a heavy pot over medium heat. Add the whole spices: cinnamon stick, cardamom pods, cloves, star anise, bay leaf. TEMPER 60-90 seconds — the spices sizzle in the ghee, their fat-soluble volatiles dissolving into the clarified butter (the kitchen fills with the warm, complex, Indian-Ocean-trade aroma of cinnamon-cardamom-clove — the aroma that connects this Mekong Delta kitchen to every South Asian kitchen that has ever tempered whole spices in hot fat).

Add the drained rice. Stir 2 minutes — every grain coats in the spice-infused ghee, and the rice's surface starch fries lightly in the fat (the light frying creates a thin, fat-sealed barrier on each grain that prevents the grains from absorbing too much water during cooking, producing SEPARATE, INDIVIDUAL, NON-STICKY grains — the same grain-separation technique the Indian biryani and the Persian polo use, and the OPPOSITE of the Vietnamese nếp's stickiness-goal).

Add the turmeric. Stir — the yellow curcumin dissolves into the ghee and distributes uniformly, tinting every grain golden in 15 seconds. Add the knotted pandan leaf if using.

Add the water (or coconut milk) and salt. Bring to a boil. Stir ONCE (to distribute the liquid), then COVER tightly, reduce to the LOWEST heat. Cook 18-20 minutes WITHOUT OPENING THE LID (every lid-lift loses steam, and the absorption method requires ALL the steam to remain inside the pot — the steam's pressure pushes the water into the rice's starch granules, and the lost steam is lost hydration).

At 18-20 minutes: off heat, lid still on. Rest 10 minutes — the residual steam finishes the cooking (the centre grains, which were slightly under-done, reach full gelatinisation in the resting period's carryover heat).

OPEN: the rice is: GOLDEN (every grain turmeric-tinted), FRAGRANT (the tempered spices' volatiles, trapped under the lid for 30 minutes, now escaping in a warm, complex, spice-market aroma cloud), GLISTENING (each grain coated in a thin ghee film), and SEPARATE (the fat-sealed grains do not stick — run a fork through, and the grains flow like golden sand).

Remove the whole spices (the cinnamon stick, the cardamom pods, the cloves, the star anise, the bay leaf — their job is done, their volatiles are in the ghee, and biting into a whole clove in the rice is a surprise the eater does not need).`,
      tip: `The ghee-tempering technique — whole spices fried in clarified butter for 60-90 seconds — is the TADKA / TARKA / CHAUNK of Indian cooking, and it is the Chăm cuisine's most direct Indian inheritance. The technique exploits the principle that many spice volatiles are FAT-SOLUBLE (not water-soluble): cinnamaldehyde (cinnamon), eugenol (clove), 1,8-cineole (cardamom) and anethole (star anise) all dissolve more readily in fat than in water, and the hot ghee EXTRACTS them from the spice's cell walls faster than boiling water would (the fat's higher temperature — 180-200°C vs water's 100°C — and its lipophilic affinity accelerate the extraction). The tempered ghee is a SPICE-INFUSED FAT — a flavoured cooking medium that carries the spice's aromatics to every grain of rice it contacts. Water-based rice cooking cannot achieve this distribution: boiling rice in spice-water deposits the volatiles only on the grain's surface, while fat-tempered rice carries the volatiles INTO the grain (the ghee penetrates the starch during the frying step, carrying the dissolved volatiles with it).`,
    },
    {
      title: 'Cook the cà ri gà — the Chăm masala, coconut milk, no fish sauce',
      description: `BLOOM THE MASALA: heat oil or ghee in a heavy pot. Add the pounded garlic, shallot and ginger — 2 minutes, golden. Add the ground spice mix (cumin, coriander, turmeric, chili, fennel, cinnamon, clove, cardamom) — stir 60 seconds in the hot fat (the same bloom principle the ragu's curry powder documented: fat activates fat-soluble spice compounds, converting raw-spice-harshness to cooked-spice-warmth). Add the minced lemongrass — 30 seconds (the Vietnamese intrusion, adding citral to the South Asian masala).

The bloomed masala should: smell intensely of CUMIN (the dominant note — cuminaldehyde filling the kitchen with its warm, earthy, slightly smoky, Indian-restaurant aroma), with the coriander's floral-citrus and the turmeric's warm-earthy as supporting notes. The cumin is the Chăm curry's IDENTITY the way the lemongrass is the ragu's and the ngải bún is the bún nước lèo's.

ADD THE CHICKEN: toss the chicken pieces in the bloomed masala — stir 3-4 minutes, coating every piece in the spice paste. The chicken's surface sears in the spice-fat (the amino acids from the chicken's surface + the spices' sugars = a CURRY-MAILLARD crust, the same double-fond the ragu documented).

ADD coconut milk + water. Bring to a simmer. Add salt and sugar. Season — taste the broth: it should be CUMIN-FORWARD, coconut-rich, moderately spiced, and carrying a SAVOURY DEPTH that does not come from fish sauce but from the cumin's thiazolines (sulfur-containing compounds produced by cumin's heat-treatment that activate the same umami-adjacent receptors fish sauce's glutamate activates — a parallel umami-pathway through different chemistry).

Simmer 25-30 minutes — add the potatoes and carrots at minute 10 (20 minutes of simmering for the potatoes' starch to soften and leach into the broth, thickening it). The curry is done when: the chicken falls from the bone at a chopstick's pull, the potatoes are soft throughout, the broth is thick (the potato's dissolved amylose + the coconut cream's fat + the chicken's bone-gelatin — the same triple-thickening the ragu documented, here from a different protein and a different spice), and the colour is: deep golden-orange (the turmeric + the cumin's browning + the coconut cream's opacity).`,
      tip: `The Chăm masala's deliberate EXCLUSION of star anise is a CULTURAL MARKER: star anise (hồi) is the spice the Vietnamese kitchen uses most ubiquitously (phở, bò sốt vang, bò kho, thịt kho, ngũ vị hương — star anise appears in all of them), and its anethole-dominant aroma is the aromatic the world reads as "Vietnamese." The Chăm masala's cumin-coriander-cardamom-fennel profile is DELIBERATELY un-Vietnamese — it signals "this is Chăm, not Kinh" through ABSENCE (no star anise) as much as through presence (cumin). The one exception: the cơm nị's rice tempering includes star anise — the Vietnamese-Chăm compromise, the rice meeting the curry halfway, the host's gesture to the Vietnamese guest's aromatic expectation.`,
    },
    {
      title: 'Serve together — the golden rice, the golden curry, the three-culture plate',
      description: `Mound the cơm nị on one side of the plate — a golden, glistening, fragrant dome of separate grains. Ladle the cà ri gà beside it — 2-3 pieces of bone-in chicken, potato quarters, carrots, all swimming in the thick, golden-orange, coconut-cumin curry sauce.

THE PLATE is: GOLDEN — everything is golden (the rice's turmeric, the curry's turmeric, the ghee's clarified-butter sheen, the chicken's curry-Maillard crust), and the monochrome gold is the visual identity of the cơm nị cà ri, the colour that says "Chăm table" the way the bún nước lèo's muddy-brown says "Khmer table."

EATING: spoon the curry sauce over the rice — the sauce's coconut fat and the rice's ghee merge on the grain's surface, and the grain absorbs the curry's spice-infused liquid through its fat-coated pores (the fat from both sources creates a lipid-bridge between the grain and the sauce, accelerating absorption — the same principle the scallion oil bridged the bánh mướt to its dipping broth). Each spoonful: the rice's ghee-tempered, whole-spice-fragrant, turmeric-golden individual grains + the curry's cumin-forward, coconut-rich, chicken-savoury, potato-thickened sauce = the Indian Ocean's spice vocabulary, spoken through a Vietnamese grain, at a Mekong Delta table.

The chicken: fall-from-bone, curry-coated, the bone releasing its marrow-gelatin into the sauce as the eater pulls the meat free. The potato: soft, curry-stained, the starch-absorbing-sauce vehicle the carbohydrate-loving Vietnamese palate demands alongside the rice (two starches — rice and potato — in one meal, which the Indian purist might question but the Mekong Delta eater does not).

Đồ chua (pickled carrot and daikon) on the side — the VIETNAMESE contribution to the plate, the acid-crunch that the Chăm curry does not provide and that the Vietnamese palate cannot eat without. The Chăm host sets out the đồ chua for the Vietnamese guest the same way they set out the fish sauce: offered, not imposed, the bridge between two tables.

Cơm nị cà ri is the Sóc Trăng collection's FOURTH culture: after the Khmer (bún nước lèo), the Chinese (bánh pía), and the Vietnamese (present in everything), the Chăm introduce the SOUTH ASIAN spice vocabulary — cumin, coriander, cardamom, ghee, the tadka tempering — that no other Vietnamese provincial cuisine contains at this concentration. Sóc Trăng's food map now holds: Khmer (fermented fish, prahok), Chinese (flaky pastry, five-spice roast), Vietnamese (noodle, herbs, fish sauce), and Chăm (Indian-Ocean spices, halal, ghee rice) — four cultures, four cuisines, one province, one market, and the market's food court is the most culturally diverse square metre of food in Vietnam.`,
      tip: `The cơm nị's 2-acetyl-1-pyrroline (2-AP) — the compound responsible for jasmine rice's characteristic "popcorn-like" fragrance — is DOUBLED when pandan leaf is added: jasmine rice naturally produces 2-AP at roughly 0.04-0.09 ppm (parts per million), and pandan leaf contains 2-AP at roughly 0.7-1.2 ppm. The pandan's 2-AP diffuses into the rice's steam during cooking, depositing on the grain's surface, and the finished rice contains roughly 2x the 2-AP of jasmine rice cooked without pandan. The double-2AP rice is perceived as MORE FRAGRANT (the compound's detection threshold is roughly 0.006 ppm, so even the single dose is well above threshold — but the doubled dose produces a STRONGER, more persistent, more "basmati-like" fragrance that the Chăm tradition prefers). The pandan is the Malay contribution: the Indian biryani does not use pandan; the Malay nasi does; and the Chăm rice — at the intersection — uses BOTH the Indian ghee-tempering AND the Malay pandan, the combined technique that neither tradition alone employs.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
