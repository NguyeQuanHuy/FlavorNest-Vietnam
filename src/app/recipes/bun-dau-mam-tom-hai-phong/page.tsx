'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-dau-mam-tom-hai-phong',
  title: `Bún Đậu Mắm Tôm Hải Phòng (Fried Tofu with Shrimp Paste — Hải Phòng's Funk-and-Crunch Platter)`,
  subtitle: `A platter of: bún lá (flat-pressed rice noodle blocks), đậu hũ chiên (golden fried tofu, crispy outside, custard-soft inside), chả cốm (green-rice pork patty), nem cua bể (the Hải Phòng crab spring roll), dồi (blood sausage), and a BOWL of MẮM TÔM — fermented shrimp paste, whipped with lime juice and sugar into a frothy, pink, funky, polarising dipping sauce that is: the dish's CENTRE OF GRAVITY, the ingredient every component orbits, and the ingredient that divides the Vietnamese table into two nations.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '45 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/bun-dau-mam-tom-hai-phong.jpg',
  intro: `Bún đậu mắm tôm — the national trinity of rice-noodle + fried-tofu + shrimp-paste — exists across Vietnam, but the Hải Phòng version is EXPANDED: where the Hà Nội plate carries bún + đậu hũ chiên + mắm tôm, the Hải Phòng plate adds: NEM CUA BỂ (the HP crab-spring-roll, recipe #2), DỒI (blood sausage), CHẢ CỐM (green-rice pork patty), and THỊT LUỘC (boiled pork belly). The HP version is: BIGGER, MORE DIVERSE, the plate as abundance-display.\n\nTHE MẮM TÔM is the dish's SOUL and most POLARISING element. The fermented shrimp paste's volatile-compound suite includes: DIMETHYL TRISULFIDE (DMTS — the sulfur-funk-signature), TRIMETHYLAMINE (TMA — the "fishy" amine from shrimp-protein-degradation), and INDOLE (a nitrogen-compound found in jasmine at low concentration = floral-sweet, and in feces at high concentration = pungent. The mắm tôm's indole sits at ~50-100 ppb — the PERCEPTION-SPLIT-ZONE where ~50% of people read "complex, fermented, interesting" and ~50% read "something has gone very wrong").\n\nThe WHIPPING is the management: raw mắm tôm is overwhelming even for the experienced eater. The whipping technique (mắm tôm + lime juice + sugar, whipped 30-60 seconds) does THREE things: AERATION (air-bubbles dilute the volatile-concentration at the surface by 30-40%, turning dark-purple to LIGHT PINK), ACID-NEUTRALISATION (the lime's citric acid PROTONATES the amines — TMA, histamine — converting the volatile free-base to less-volatile protonated-salt forms, reducing the sharpest funk-notes by 40-60%), and SWEETNESS-BALANCE (the sugar reframes "funk alone" to "funk + sweet," shifting the brain's processing from "unpleasant" to "complex").\n\nThe FRIED TOFU is the mắm tôm's BEST FRIEND: the golden-crispy exterior (1-2 mm starch-glass, shattering at 3-4 N) LIMITS the mắm-tôm's contact per bite (the sauce coats only the surface — the 2-3 mm of crispy-tofu between sauce and tongue BUFFERS the funk), while the custard-soft interior (80-85% moisture, bland, protein-rich) ABSORBS the funk's aftertaste, resetting the palate. The tofu is: the mắm tôm's DELIVERY SYSTEM and its ANTIDOTE simultaneously.\n\nThe bún đậu's eating-architecture is DESIGNED to make the mắm tôm APPROACHABLE: the eater who dips ONLY THE BOTTOM of the tofu receives the managed funk — crunch ANNOUNCES, soft PREPARES, funk ARRIVES LAST after the palate has been set-up and cushioned. The architecture separates the bún đậu first-timer's "rejection" from the experienced eater's "addiction."`,
  ingredientSections: [
    {
      title: 'Mắm tôm pha (whipped shrimp paste dip)',
      items: [
        { amount: 4, unit: 'tbsp', name: 'mắm tôm (fermented shrimp paste)', note: `The SOUL — dark-purple-to-brown, thick paste, intensely funky. Vietnamese groceries carry several brands.` },
        { amount: 3, unit: 'tbsp', name: 'lime juice (roughly 2-3 limes)' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, name: 'bird\'s-eye chili, minced' },
        { amount: 1, name: 'clove garlic, minced' },
      ],
    },
    {
      title: 'Đậu hũ chiên (fried tofu)',
      items: [
        { amount: 400, unit: 'g', name: 'firm tofu, cut into 3 × 4 cm blocks, 2 cm thick, pressed 15-20 min', note: `FIRM — not silken (disintegrates) or extra-firm (too dense). PRESS to expel surface-moisture → drier surface = faster Maillard = crispier crust.` },
        { amount: 300, unit: 'ml', name: 'neutral oil for deep-frying' },
      ],
    },
    {
      title: 'The Hải Phòng expanded platter',
      items: [
        { amount: 4, name: 'nem cua bể (HP crab spring rolls, recipe #2), fried and sliced', note: `The HP SIGNATURE — no Hà Nội bún đậu includes this. Its presence = the marker saying "this is the Hải Phòng version."` },
        { amount: 200, unit: 'g', name: 'chả cốm (green-rice pork patty), sliced', note: `Ground pork mixed with cốm (young green rice harvested at "milk stage" — pale-green, soft, carrying grassy-sweet-hay aroma from chlorophyll + immature-starch 2-AP). Seasonal: September-November.` },
        { amount: 200, unit: 'g', name: 'thịt luộc (boiled pork belly), sliced thin', note: `The SIMPLEST protein — boiled, sliced, bland-clean-fat-layered. The mắm tôm's most NEUTRAL partner: fat-richness + mild-pork-sweetness, ZERO competing-flavour.` },
        { amount: 200, unit: 'g', name: 'dồi (blood sausage), sliced', note: `Pork blood + glass noodles + herbs, stuffed in casing, boiled. The DARK + DARK pairing with mắm tôm: haemoglobin-iron + fermented-funk = the ADVANCED item the connoisseur reaches for first.` },
      ],
    },
    {
      title: 'The bún and herbs',
      items: [
        { amount: 400, unit: 'g', name: 'bún lá (flat-pressed rice noodle blocks)', note: `NOT loose bún strands — PRESSED BLOCKS (6 × 4 × 3 cm) that absorb mắm tôm only at the SURFACE, preserving the interior's bland rice-starch. The pressing = CONTROLLED-ABSORPTION vehicle.` },
        { amount: 200, unit: 'g', name: 'rau sống: kinh giới (Vietnamese balm — THE bún-đậu herb), tía tô, rau mùi, húng quế' },
        { amount: 100, unit: 'g', name: 'dưa chuột (cucumber), sliced' },
        { amount: 4, name: 'limes, in wedges' },
      ],
    },
  ],
  steps: [
    {
      title: 'Whip the mắm tôm, fry the tofu — the funk aerates, the crunch forms',
      description: `WHIP THE MẮM TÔM: combine 4 tbsp mắm tôm + 3 tbsp lime juice + 1 tbsp sugar + minced chili + minced garlic. WHIP vigorously with chopsticks for 30-60 seconds — the paste transforms from DARK PURPLE (dense, concentrated) to LIGHT PINK (frothy, aerated, expanded 50-80%). The whipped mắm tôm should be: FROTHY (visible air-bubbles), POURABLE (thick-sauce, not thick-paste), and BALANCED (funky but managed, sour from lime, sweet from sugar, hot from chili — four taste-dimensions all present).

The chemistry of the whipping: the AERATION incorporates air-bubbles that dilute the volatile-concentration at the surface (the nose receives 30-40% less DMTS per sniff). The LIME JUICE protonates the biogenic amines (TMA, histamine → their less-volatile salt-forms), reducing the sharpest funk-notes by 40-60%. The SUGAR provides sweet-context that shifts the brain's processing from "unpleasant" toward "complex." The CHILI adds capsaicin-distraction (TRPV1 heat competes for the nose's attention against the DMTS — the same attentional-competition the lemongrass used against the goat's gamey).

FRY THE TOFU: heat 300 ml oil to 180°C. Slide the pressed, dry tofu-blocks into the oil — 4-6 at a time. Fry 4-5 minutes, turning once, until ALL FOUR SIDES are GOLDEN-BROWN. The transformation: the surface-layer (1-2 mm) dehydrates from 80% to <10% moisture (the starch-glass-zone: golden, rigid, shattering at 3-4 N), while the interior retains 80-85% moisture (the custard-zone: soft, white, trembling). The boundary is SHARP — the transition from crispy to soft occurs over 0.5 mm, and the tooth's passage through this boundary is one of the Vietnamese kitchen's most SATISFYING textural-transitions.

DRAIN on a rack (NOT paper towels — the towel's moisture wicks back into the crust, softening it). The fried tofu: GOLDEN (uniform Maillard on all surfaces), RIGID (holds rectangular shape without flexing), and carrying the SIZZLE (residual oil crackle for 30 seconds after removal = freshness-indicator).`,
      tip: `The mắm tôm's INDOLE sits at the PERCEPTION-SPLIT concentration (~50-100 ppb): at LOW concentration (10-20 ppb) it smells FLORAL (the same compound contributes to jasmine's scent). At MEDIUM (50-100 ppb — the mắm tôm's range): ~50% of people read "complex, fermented" and ~50% read "fecal." At HIGH (>200 ppb): nearly everyone reads "fecal." The whipping's aeration DILUTES the indole at the sauce's surface from ~80 ppb (un-whipped) to ~50 ppb (whipped), pushing the concentration toward "complex" and away from "unpleasant." The whipping is: INDOLE-MANAGEMENT — the same threshold-management the eel's geosmin-cleaning and the mắm's ghost-ingredient-principle documented.`,
    },
    {
      title: 'Arrange the platter — the Hải Phòng expanded format, the communal feast',
      description: `THE PLATTER (served on a SHARED PLATTER — the communality is the eating's social-architecture):

CENTRE: the bowl of whipped mắm tôm (pink, frothy — the GRAVITY-WELL every component orbits).

SURROUNDING (arranged in sectors):

SECTOR 1 — ĐẬU HŨ CHIÊN: golden, rectangular, crispy-on-custard-soft blocks, stacked 2-3 high (the vertical stack says "ABUNDANCE"), still sizzling faintly.

SECTOR 2 — BÚN LÁ: pressed noodle-blocks, rectangular, dense, pale-white.

SECTOR 3 — NEM CUA BỂ: sliced HP crab-spring-rolls, diagonal-cut cross-section showing the 7-ingredient mosaic inside the double-wrapper.

SECTOR 4 — CHẢ CỐM: green-rice pork patties, sliced (the pork's pink matrix studded with cốm's pale-green flecks — autumn's young-rice visible in year-round pork).

SECTOR 5 — THỊT LUỘC: boiled pork-belly slices in a fan (alternating white-fat and pink-lean layers).

SECTOR 6 — DỒI: blood-sausage slices, dark-brown-to-black (the blood's coagulated haemoglobin-colour), with glass-noodle-strands and herb-flecks visible in cross-section.

SECTOR 7 — RAU SỐNG: kinh giới PROMINENTLY (the bún đậu's signature herb — its mentholated, slightly-medicinal, balm-like elsholtzia-ketone aroma cuts through the mắm tôm's funk), cucumber, lime wedges.

THE EATING — each eater assembles their own bites:

THE CLASSIC BITE — ĐẬU HŨ + MẮM TÔM: pick up a tofu block. DIP the BOTTOM only (controlled-dose). BITE: CRISPY top SHATTERS (the un-dipped, dry crust — pure crunch, no funk) → teeth descend through SOFT interior (bland, protein-rich, moisture-heavy — the DILUTER) → reach the MẮM-TÔM-COATED bottom (the FUNK ZONE, arriving LAST). The sequence: crunch ANNOUNCES → soft PREPARES → funk ARRIVES LAST, after the palate has been set-up and cushioned. The architecture makes the mắm tôm APPROACHABLE.

THE ADVANCED BITE — DỒI + MẮM TÔM: blood-sausage dipped in shrimp-paste — DARK + DARK, haemoglobin-iron + DMTS-funk. PRIMAL (iron + fermented-protein, the oldest flavour-pairing — the smell of blood + preserved-protein, the two aromas the paleolithic brain associates with "food available, survival secured"). The dồi + mắm tôm is the platter's FINAL BOSS.

THE BÚN LÁ + MẮM TÔM: break a piece of pressed noodle-block. Dip. The dense block absorbs mắm tôm only at the SURFACE (the pressing made the interior impenetrable) — BLAND-CENTRE + FUNKY-SURFACE, the same controlled architecture the tofu provided.

WRAP: any component wrapped in kinh giới + tía tô (the herb-duo's mentholated-cool + perillaldehyde-anise = GREEN-AROMATIC-WRAPPER that RESETS the palate between mắm-tôm-dipped bites, clearing the funk's lingering-residual).

Bún đậu mắm tôm Hải Phòng is the collection's most POLARISING recipe — the dish that confronts with SMELL and manages with: WHIPPING (aeration-dilution), LIME (amine-protonation), SUGAR (reward-reframing), ARCHITECTURE (crunch→soft→funk sequence), and COMPANY (the communal platter where the lovers' enthusiasm gives the sceptics PERMISSION to try). The border-crossing from "unpleasant" to "complex" is: the Vietnamese kitchen's most transformative eating-experience.`,
      tip: `KINH GIỚI (Elsholtzia ciliata — Vietnamese balm) is the bún đậu's SPECIFIC herb — appearing on every bún đậu plate and almost nowhere else. Its principal volatile: ELSHOLTZIA KETONE (a monoterpenoid unique to the Elsholtzia genus — no other culinary herb produces it), with a MENTHOLATED, COOL, slightly-medicinal aroma. The kinh giới's mentholated-cool CONTRASTS the mắm tôm's fermented-warm. Each Vietnamese dish has its FIXED HERB PAIRING: rau răm + raw beef, dill + fish soup, lá mơ + goat, and kinh giới + mắm tôm — the two are inseparable, co-dependent, and the absence of either is immediately noticed.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
