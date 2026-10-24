'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'oc-xao-hai-phong',
  title: `Ốc Xào Hải Phòng (Hải Phòng Stir-Fried Sea Snails — The Harbour City's Night-Market Shells)`,
  subtitle: `Sea snails — ốc móng tay (razor clams), ốc hương (babylonia), ốc mỡ (moon snails) — wok-fired at extreme heat with lemongrass, chili, Thai basil, and a sauce architecture that is: salty-sweet-sour-aromatic in FOUR SECONDS of wok time. The dish that every Hải Phòng night market serves from 6 PM onward, eaten with bare hands and cold beer.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '25 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/oc-xao-hai-phong.jpg',
  intro: `Ốc xào — stir-fried snails — is not a dish unique to Hải Phòng. Every Vietnamese city has its ốc culture. But the Hải Phòng version is DISTINCT in three ways that mark it as harbour-city cooking: the SNAIL SELECTION (Hải Phòng sits where the Red River meets the Gulf of Tonkin — the brackish-water estuary zone that produces ốc móng tay, ốc hương, ốc mỡ, and ốc vòi voi, all saltwater or brackish species with firmer flesh and cleaner brine-sweetness than the freshwater ốc bươu and ốc nhồi of Hà Nội's lakes), the SAUCE SPEED (the Hải Phòng wok-stir is FAST — 30-45 seconds total wok-contact, versus the 2-3 minute braise-stir common in Hà Nội, because the harbour-city palate wants the snail's own brine PRESERVED rather than replaced by sauce), and the LEMONGRASS DOMINANCE (where Hà Nội ốc xào often leads with ginger or dill, the HP version leads with lemongrass — 3-4 stalks per kilogram, minced fine, creating a citral-forward aromatic bed that the snails land on and absorb in those 30-45 seconds).

THE CHEMISTRY OF SPEED: the Hải Phòng wok-stir's brevity is not laziness — it is OSMOTIC MANAGEMENT. A snail's flesh is 78-82% water held in a protein-gel matrix. Prolonged heat (>90 seconds at wok temperature) causes the protein to CONTRACT and EXPEL water — the snail shrinks, toughens, and releases a pool of liquid that drops the wok temperature from stir-fry range (~280°C) to braising range (~100°C). The HP 30-45 second stir keeps the flesh ABOVE the contraction-threshold's time-limit: the surface sears (Maillard at the shell-opening contact points), the interior barely warms past 65°C, and the snail retains its brine-sweetness and its BOUNCE (the elastic give-under-tooth that distinguishes a properly cooked snail from a rubber eraser).

THE LEMONGRASS'S ROLE is not just aromatic — it is TEXTURAL. Minced lemongrass (2-3 mm pieces) fried in oil for 60 seconds before the snails arrive undergoes partial DEHYDRATION: the outer cellulose dries and crisps while the inner core retains its citral-rich essential oil. These crispy lemongrass bits CLING to the snail shells and lodge at the shell-opening, so when the eater sucks the snail from its shell, the first thing the lips encounter is: CRISPY LEMONGRASS (crunch + citral burst), then the SNAIL (brine-sweet, bouncy, warm), then the SAUCE (salty-sweet-sour, coating the shell's interior). The sequence is DESIGNED by the lemongrass's particle-size: too large and it falls off the shell; too small and it dissolves into the sauce. The 2-3 mm mince is the size that CLINGS.

THE EATING is COMMUNAL and MANUAL. Ốc xào arrives in a shared plate, shells glistening with sauce and studded with lemongrass and chili. Each person picks up a shell, holds it to the mouth, and SUCKS — the combination of lip-seal and tongue-suction that extracts the meat in one pull. The sound is the soundtrack of every Hải Phòng night market: the collective slurping of a table of six, punctuated by shells hitting the discard bowl and beer glasses hitting the table. Chopsticks are for the timid. Toothpicks are for the tourist. The HP ốc-eater uses MOUTH and FINGERS, and the sauce running down the wrist is not a failure of technique — it is the technique.

The dipping sauce served alongside — muối tiêu chanh (salt-pepper-lime) or a ginger-lime fish sauce — exists for the snails that resist the suck: the stubborn ốc mỡ that requires a toothpick-extraction, pulled from the shell and dunked. But the majority go mouth-first, sauce and all, and the Hải Phòng night is measured in kilograms of shells.`,
  ingredientSections: [
    {
      title: 'The snails',
      items: [
        { amount: 1, unit: 'kg', name: 'mixed sea snails: ốc móng tay (razor clams), ốc hương (babylonia/sweet snails), ốc mỡ (moon snails)', note: `The HP TRIO — all saltwater/brackish species. In Europe: use a mix of cockles, small clams (vongole), and whelks from any fishmonger. The key is: SMALL (bite-size, suckable from the shell), BRINY (saltwater, not freshwater), and ALIVE (shells closed or closing when tapped = alive; open and unresponsive = dead = discard). Scrub shells under running water. Soak in salted water (30g salt per litre) for 2 hours to purge sand.` },
      ],
    },
    {
      title: 'The wok aromatics',
      items: [
        { amount: 4, name: 'stalks lemongrass, tender inner core only, minced to 2-3 mm', note: `The DOMINANCE aromatic — 4 stalks per kg is the HP ratio. Mince FINE: 2-3 mm pieces that will crisp in the oil and cling to the shells. Larger pieces slide off; a paste disappears into the sauce. The particle-size is the technique.` },
        { amount: 6, name: 'cloves garlic, minced' },
        { amount: 4, name: 'bird\'s-eye chilies, sliced into rings', note: `Rings, not minced — the visual of red chili rings against the dark shells is the HP ốc-xào's signature look. The rings also retain more capsaicin than a mince (less cell-rupture = less capsaicin released into the sauce = more heat per bite when you hit a ring).` },
        { amount: 3, name: 'shallots, thinly sliced' },
        { amount: 3, unit: 'tbsp', name: 'neutral oil (high smoke-point)' },
      ],
    },
    {
      title: 'The sauce (mixed in advance)',
      items: [
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tbsp', name: 'soy sauce' },
        { amount: 2, unit: 'tbsp', name: 'rice wine or dry sherry' },
        { amount: 1, unit: 'tbsp', name: 'lime juice (added at the very end, off heat)' },
      ],
    },
    {
      title: 'The finish',
      items: [
        { amount: 1, name: 'large handful Thai basil (húng quế), leaves picked' },
        { amount: 2, name: 'scallion stalks, cut into 3 cm lengths' },
        { amount: 1, unit: 'tsp', name: 'black pepper, freshly cracked' },
      ],
    },
    {
      title: 'The dipping salt',
      items: [
        { amount: 2, unit: 'tbsp', name: 'muối tiêu chanh: fine salt + cracked black pepper + lime juice', note: `Mixed to a wet paste. The THIRTEENTH muối-tiêu-chanh in this collection — METHOD-INVARIANT across every province, every protein, every temperature. The ratio adapts (more lime for fatty snails, more pepper for bland ones), the STRUCTURE never changes.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Purge, scrub, and blanch — the sand must leave before the wok',
      description: `PURGE: soak the snails in salted water (30g salt per litre, roughly seawater concentration) for 2 hours minimum. The salt triggers the snails' natural EXPULSION response — they open slightly and pump water through their bodies, flushing sand from the digestive tract. Fresh water kills them; salt water keeps them alive and purging.

SCRUB: after purging, scrub each shell under running water with a stiff brush. Sand trapped in the shell ridges will survive the wok and ruin the eating — one grain of sand between the teeth undoes the entire dish.

BLANCH (for ốc mỡ and any tightly-closed spiral shells): bring a pot of water to a rolling boil, drop the snails in for 60 seconds exactly, then drain. This PRE-LOOSENS the meat from the shell (the protein at the shell-attachment point partially denatures), making the suck-extraction possible later. Skip this for razor clams and open-shell species — they don't need loosening and the blanch overcooks their delicate flesh.

DRY the shells thoroughly. Water on the shell surface will FLASH-STEAM on contact with the hot wok, dropping the temperature instantly and preventing the Maillard sear at the shell-opening that gives the HP ốc xào its characteristic CHARRED-BRINE flavour at the lip-contact point.`,
      tip: `The 30g/L salt concentration for purging is not arbitrary — it approximates the 3% salinity of the Gulf of Tonkin where these snails live. Too low (fresh water) and the snails close defensively and die without purging. Too high (>5%) and osmotic stress kills them quickly, also without purging. At their native salinity they behave normally — feeding, filtering, expelling — and the sand leaves with the water they pump. The purge is not cleaning; it is letting the snail clean itself.`,
    },
    {
      title: 'Build the aromatic bed — lemongrass goes FIRST and gets 60 seconds ALONE',
      description: `MIX THE SAUCE in a small bowl: fish sauce + oyster sauce + sugar + soy sauce + rice wine. Stir until sugar dissolves. Set aside. The lime juice is NOT in this mix — it goes in at the very end, off heat, so the citric acid stays BRIGHT rather than cooking into the sauce and turning flat.

HEAT the wok until it SMOKES — genuine smoke, not shimmer. Add 3 tbsp oil, swirl to coat, and IMMEDIATELY add the minced lemongrass. Stir-fry for 60 seconds — the lemongrass sizzles violently, the water flashes off, and the pieces transition from PALE-WET to GOLDEN-CRISPY. The kitchen fills with citral — the monoterpene aldehyde that IS lemongrass's scent, released as the oil reaches 160°C and ruptures the essential-oil glands in the dried pieces.

After 60 seconds, add the garlic, shallots, and chili rings. Stir-fry 15 seconds — the garlic must NOT brown (brown garlic in a 30-second stir-fry = bitter garlic in the final dish, because there is no braising-time to mellow it).

The wok now contains: a GOLDEN-CRISPY lemongrass bed, fragrant garlic, sweet shallots, and red chili rings. This is the AROMATIC PLATFORM the snails will land on.`,
      tip: `The lemongrass goes in FIRST and ALONE because it needs two things the other aromatics don't: TIME (60 seconds to dehydrate and crisp) and EXCLUSIVE OIL CONTACT (the oil must be clean when the lemongrass hits it — garlic or shallot fragments in the oil would burn during the lemongrass's 60-second fry and turn the whole base bitter). The sequencing — lemongrass alone, then garlic-shallot-chili together, then snails — is a THERMAL-TOLERANCE sequence: lemongrass tolerates 60 seconds at wok-temperature, garlic tolerates 15, and the snails tolerate 30-45. Each ingredient enters the wok at the moment that gives it exactly the time it needs and no more.`,
    },
    {
      title: 'The snails hit the wok — 30-45 seconds, VIOLENT heat, ONE toss of sauce',
      description: `TURN THE HEAT TO MAXIMUM. The wok must be at its absolute peak — 280-300°C at the surface. Add ALL the snails at once and SPREAD them into a single layer against the wok surface. Do NOT stir for 10 seconds — let the shells sear against the metal. You should hear a ROAR, not a hiss. A hiss means the wok is too cold and the snails are braising.

After 10 seconds of searing contact: TOSS once (the classic wok-flip, or stir aggressively with a spatula), then immediately pour the pre-mixed sauce over the snails. The sauce hits the hot wok surface and ERUPTS — a burst of steam, caramelising sugar, and fish-sauce volatiles. TOSS 3-4 times in rapid succession, coating every shell.

Total wok-contact from snails-in to snails-out: 30 seconds for razor clams and thin-shelled species. 45 seconds for moon snails and thick-shelled species. Do NOT exceed 60 seconds for any species — the protein contraction threshold.

ADD the Thai basil and scallion lengths in the last 5 seconds — they need only the residual heat to wilt and release their aromatics. KILL the heat. Add the lime juice NOW (off-heat, into the residual steam) and toss once more. The lime's citric acid hits the hot sauce and BRIGHTENS it — the sour note should arrive LAST in the flavour sequence, after the salt-sweet-aromatic have already landed.

CRACK black pepper over the top. Transfer immediately to a serving plate — do not let the snails sit in the wok. Residual heat continues cooking, and at 90 seconds the flesh has already started its contraction.`,
      tip: `The 10-second sear before the first toss is the moment that creates the HP ốc xào's CHARRED-BRINE signature. At 280°C+ the proteins at the shell-opening (where the snail's foot contacts the wok through the shell) undergo Maillard reaction in the presence of the snail's own sodium chloride — producing a specific set of pyrazines and thiols that smell and taste of CHARRED OCEAN. This flavour exists only at the shell-opening and only when the sear happened. A snail that was stirred immediately upon entering the wok — the common amateur mistake — never contacts the metal long enough for the Maillard to complete, and the dish tastes of sauce-on-snail rather than of CHARRED-BRINE-SNAIL-IN-SAUCE. The difference is the difference between good ốc and Hải Phòng ốc.`,
    },
    {
      title: 'Serve immediately — shells, sauce, fingers, and the discard bowl',
      description: `PILE the snails onto a shared plate — shells glistening with sauce, studded with golden lemongrass bits and red chili rings, Thai basil leaves wilted and clinging, scallion lengths scattered through. The visual: DARK SHELLS (the snails' natural grey-brown-black), GOLD (crispy lemongrass), RED (chili rings), GREEN (basil and scallion) — the four-colour composition that says "ốc xào" at every HP night market.

SET OUT: the muối tiêu chanh in individual dipping saucers, a communal discard bowl for empty shells, toothpicks for the stubborn species, and — non-negotiably — COLD BEER. Ốc xào without beer is ốc xào without its liquid partner. The beer's CO₂ scrubs the residual fish-sauce salt from the palate between shells, its bitterness (from hops' iso-alpha-acids) counterbalances the sauce's sweetness, and its cold temperature contracts the tongue's taste-receptors momentarily, RESETTING them before the next shell's flavour-burst. The HP ốc-beer pairing is not cultural accident — it is SENSORY ENGINEERING.

THE EATING: pick up a shell. Hold it to the lips, opening facing the mouth. SUCK — a sharp, short inhalation that creates negative pressure in the oral cavity, pulling the meat from the shell in one piece. The sequence the mouth receives: CRISPY LEMONGRASS (the bits clinging to the shell-opening hit the lips first — crunch + citral), then SAUCE (salty-sweet-sour, coating the shell's interior, arriving with the inflow), then SNAIL MEAT (brine-sweet, warm, bouncy, landing on the tongue last). Chew 3-4 times. Drop the empty shell into the discard bowl. Reach for the next.

For stubborn species (ốc mỡ, whelks): toothpick-extract, dip in muối tiêu chanh, eat. But the suck-species are the MAIN EVENT, and the rhythm of a Hải Phòng ốc table — suck, chew, drop, reach, suck — is the heartbeat of the harbour city after dark.`,
      tip: `The discard bowl fills in LAYERS that record the evening: razor clam shells at the bottom (eaten first — the easiest, the most delicate, the appetiser), moon snails in the middle (the bulk, the rhythm), and whelk opercula at the top (the last, the stubbornest, extracted by toothpick when the beer has made patience easier). A Hải Phòng host reads the discard bowl the way a sommelier reads empty bottles — it tells the story of the meal's arc, its pacing, and how much beer was involved. When the bowl overflows onto the table, the evening has been a success.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
