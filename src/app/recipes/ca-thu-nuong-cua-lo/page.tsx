'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-thu-nuong-cua-lo',
  title: `Cá Thu Nướng Cửa Lò (Charcoal-Grilled Mackerel — Cửa Lò Beach)`,
  subtitle: `A whole mackerel — the silver, torpedo-shaped, fat-rich king mackerel the central coast's waters produce — scored, salted, and grilled over charcoal at the beach until the skin crisps and the fat under the skin renders and self-bastes and the flesh flakes into large, oily, clean-marine, white-pink pieces that are dipped in muối ớt xanh: green chili pounded with salt and lime. The Cửa Lò beach dinner that needs nothing but the fish, the fire, the salt and the sea the fish came from.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/ca-thu-nuong-cua-lo.jpg',
  intro: `Cá thu — the king mackerel, Scomberomorus commerson (also called the narrow-barred Spanish mackerel) — is the central coast's prestige fish: a large (3-15 kg at market size), fast-swimming, pelagic predator caught offshore by the fishing boats that depart from Cửa Lò, Cửa Hội and the other harbours along the Nghệ An-Hà Tĩnh coastline. The cá thu is not a paddy fish, not a river fish, not a lagoon fish — it is an OCEAN fish, a deep-water migrant that follows the warm currents along the Vietnamese coast from the Gulf of Tonkin to the South China Sea, and its flesh carries the ocean's register: clean, mineral, iodine-rich, with no muddy or weedy undertones that freshwater and brackish-water fish sometimes carry.

The cá thu's fat content — roughly 8-12% in the belly section, 4-6% in the back — is the grilling's self-basting mechanism: the subcutaneous fat layer (between the skin and the flesh, 2-3 mm thick in a well-fed fish) renders during grilling, liquefying from solid-white to golden-clear, and the rendered fat flows DOWN across the flesh's surface (gravity pulling it along the scored channels the cook cut before grilling), basting every exposed surface in a thin, fish-oil film that prevents drying, promotes Maillard browning (the fat's glycerol and the flesh's amino acids react at the grilling temperature to produce surface browning that lean fish cannot achieve), and deposits the omega-3 fatty acids (EPA and DHA, present in mackerel at among the highest concentrations of any commercially available fish — roughly 1,500-2,500 mg per 100 g) onto the flesh's surface where the eater consumes them.

The fat makes the cá thu one of the most FORGIVING grilled fish in the collection — more forgiving than the cá suối nướng Sapa (which is lean and dries in 2 minutes past perfect), more forgiving than the nhệch (which is moderate-fat and needs the banana-leaf wrap to prevent drying), and approaching the cá chình mun's self-basting richness. A cá thu at 8 minutes of grilling is moist and perfect; at 12 minutes it is still moist and acceptable; at 15 minutes it is finally starting to dry. The fat's basting buys the cook a 7-minute WINDOW between perfect and overcooked — the widest window of any grilled fish in the collection — and the wide window is the reason the cá thu is the fish the Cửa Lò beach stalls grill for tourists who want "a fish, on the beach, with beer": the tourist's timing is imprecise, and the mackerel forgives imprecision.

The dipping condiment — muối ớt xanh (green chili salt) — is the Nghệ An coast's specific grilled-fish condiment, distinct from the muối tiêu chanh the collection has documented 7 times. Where muối tiêu chanh is salt + pepper + lime (a TRANSPARENT condiment — you can see the ingredients), muối ớt xanh is salt + GREEN CHILI + lime, pounded together in a mortar into a rough, green-flecked, aromatic, moderately-hot paste whose capsaicin heat is milder and more vegetal than dried red chili's, and whose fresh-green-pepper aroma (from the green chili's unripe capsaicinoid-and-terpene profile) pairs specifically with the mackerel's oily, marine flavour in a way the dried-red-chili's sharper, fruitier, more aggressive heat does not.

The muối ớt xanh is the Nghệ An coast's EIGHTH condiment appearance in this collection, and it occupies a position BETWEEN the muối tiêu chanh (which is heat-free — the pepper is black, not chili) and the mắm nêm (which is fermented and funky). The muối ớt xanh is: fresh (the green chili is raw), hot (moderate capsaicin), green (the chili's chlorophyll), and acidic (the lime) — a condiment designed for FAT fish, because the capsaicin's heat and the lime's acid both cut through lipid coatings on the tongue, and the mackerel is the fattiest fish the Nghệ An coast grills.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 1,
          name: 'whole king mackerel (cá thu), 1.5-2.5 kg, or 4 mackerel steaks 3 cm thick',
          note: `Whole fish: scaled, gutted, gills removed, fins trimmed. Score both sides with 3-4 diagonal cuts 1 cm deep — the same crunch-and-baste architecture every scored-fish in this collection used (the scores let fat render out AND let heat penetrate in). If steaks: score the skin side. The mackerel must be FRESH — mackerel deteriorates faster than most fish (its high fat content oxidises rapidly, producing the "fishy" trimethylamine smell within hours of death — a fresh mackerel smells of the sea; a 24-hour-old mackerel smells of fish). Buy same-day if possible.`,
        },
        { amount: 1, unit: 'tbsp', name: 'coarse salt (rubbed on both sides, inside the scores)' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (brushed on to prevent sticking)' },
      ],
    },
    {
      title: 'Muối ớt xanh (green chili salt)',
      items: [
        {
          amount: 6,
          name: 'green bird\'s-eye chilies',
          note: `GREEN — not red. The green chili's capsaicin content is roughly 60-70% of the ripe red version's, and its volatile profile includes more TERPENES (the green, vegetal, herbaceous notes) and fewer CAPSAICINOID ESTERS (the sharp, fruity, heat-dominant notes the ripe red develops). The green chili's heat is: milder, greener, more vegetal, and more aromatic than the red's — designed for fatty fish rather than for lean.`,
        },
        { amount: 2, unit: 'tbsp', name: 'coarse sea salt' },
        { amount: 3, unit: 'tbsp', name: 'lime juice (freshly squeezed at the table)' },
        { amount: 2, name: 'cloves garlic (optional)' },
      ],
    },
    {
      title: 'For grilling',
      items: [
        { amount: 1, name: 'charcoal grill with glowing embers' },
        { amount: 1, name: 'fish-grilling basket (kẹp cá) — the hinged wire basket that holds the whole fish between two grates', note: `The basket prevents the fish from falling apart on the grill (the mackerel's rich, oily flesh flakes easily at grilling temperature) and allows the cook to flip the fish in one motion without tearing the skin.` },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 200, unit: 'g', name: 'rau sống: lettuce, húng quế, rau răm' },
        { amount: 1, name: 'plate of sliced cucumber and tomato' },
        { amount: 4, name: 'cold beers (Bia Hà Nội or Bia Sài Gòn — the Cửa Lò beach format)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Score, salt, grill 6-8 minutes per side — the fat bastes from inside',
      description: `Rub the scored mackerel with salt — inside the scores, across both skin surfaces, inside the cavity. The salt: draws surface moisture (drying the skin for better crisping), seasons the flesh at the score-depth, and dissolves the outer layer of the subcutaneous fat (the salt-dissolved fat renders faster during grilling, jumpstarting the self-basting). Let the salted fish rest 10 minutes.

Brush with oil. Clamp in the grilling basket. Lay on the grate over glowing embers, 8-10 cm above the coals.

GRILL 6-8 minutes per side for a 2 kg whole fish (3-4 minutes per side for steaks). The progression:

MINUTE 1-2: the skin tightens and begins to blister. The subcutaneous fat — solid-white in the raw fish — begins to melt (the fat's melting point is 20-25°C, well below the grill's 200°C+ surface temperature). The first drops of rendered fat appear at the score-marks and begin running down the flesh's surface.

MINUTE 3-4: the skin is golden-brown, the score-marks have opened wide (the heat shrinks the flesh, pulling the score-walls apart), and rendered fat is flowing freely — golden, clear, running along the channels the scores created, basting the exposed flesh below. The fat drips onto the coals and flares briefly — the flare's smoke carries the omega-3's specific breakdown products (2,4-decadienal, the "fried fish" aroma compound) back to the fish's surface, smoking it from below while the fat bastes it from above.

MINUTE 5-6: the first side is done — the skin is crispy (dark golden to lightly charred), the flesh at the thickest point is opaque and flaking, and the rendered fat has deposited a thin, glistening, golden film across every exposed surface. Flip.

MINUTE 6-8 (second side): repeat. The second side crisps and renders.

The fish is done when: a skewer into the thickest point meets no raw resistance (the flesh should flake at the touch), the skin is uniformly crispy on both sides, and the rendered fat is still liquid (glistening, golden — if the fat has re-solidified on the surface, the fish has cooled below 25°C and should be served immediately).`,
      tip: `The mackerel's omega-3 fat (EPA + DHA, 1,500-2,500 mg/100g) makes the cá thu one of the most nutritionally valuable fish in the collection — more omega-3 than the cá lóc (freshwater, lean, ~200 mg/100g), more than the cá rô (freshwater, lean, ~150 mg/100g), and approaching the cá chình mun's 15-18% intramuscular fat (though the chình mun's fat is predominantly monounsaturated, not omega-3). The grilling preserves roughly 70-80% of the raw omega-3 (the remainder degrades through thermal oxidation at the fish's surface), which means a 200 g serving of grilled cá thu delivers roughly 2,000-3,500 mg of EPA+DHA — exceeding the American Heart Association's recommended 1,000 mg/day for cardiovascular benefit. The beach dinner is a health food, and the health is in the fat, and the fat is what makes the grilling forgiving.`,
    },
    {
      title: 'Pound the muối ớt xanh at the table — the green condiment for the fat fish',
      description: `POUND: in a small mortar (the Cửa Lò beach stalls provide a stone mortar at each table), combine the green chilies, salt and garlic (if using). Pound 30 seconds — the chilies split, the seeds scatter, the salt grinds into the flesh, and the mixture becomes a rough, green-flecked, wet, aromatic paste. Squeeze the lime juice in. Stir.

The muối ớt xanh should be: GREEN (the chili's chlorophyll, visible as green flecks in the white salt), WET (the lime juice and the chili's internal moisture), HOT (moderate — the green chili's 60-70% capsaicin is noticeable but not punishing), ACIDIC (the lime, cutting through fat), and AROMATIC (the green chili's terpenes — limonene, β-pinene, sabinene — carrying a fresh, vegetal, herbaceous note that the dried red chili does not provide).

The condiment is pounded FRESH at the table, not prepared in advance — the green chili's terpenes are volatile and dissipate within 15 minutes of pounding (the same volatile-clock the tép rang's lime-leaf chiffonade and the bún chả cá's fish broth documented). A pre-made muối ớt xanh is a flat, heat-only condiment; a just-pounded one is a complex, three-dimensional, green-aromatic-hot condiment. The freshness is the difference.`,
      tip: `The green-vs-red chili distinction is a RIPENESS distinction with specific flavour consequences: green chili = unripe, lower capsaicin (60-70% of ripe), higher terpene content (the vegetal, green, herbaceous volatiles that the ripening process converts to the red chili's fruitier, sweeter esters), and higher chlorophyll (the green colour itself). Red chili = ripe, full capsaicin, lower terpenes (converted to esters during ripening), and full carotenoid (the red-orange pigments that replace chlorophyll during ripening — the same capsanthin and capsorubin that give paprika its red). The Cửa Lò cook CHOOSES green because the terpenes (not the capsaicin) are the pairing with the mackerel's fat: the green, herbaceous, piney terpenes complement the omega-3's marine, oily, slightly fishy notes the way a green-herb sauce complements a fatty lamb chop. Red chili would add heat without the herbal complement. Green chili adds BOTH.`,
    },
    {
      title: 'Eat on the beach — fish, chili salt, rice, beer, the sea',
      description: `The grilled mackerel arrives at the table in its basket — opened, the fish steaming, the skin crispy-dark, the rendered fat glistening, the score-marks splayed open like the gills of a breathing fish. The beach wind carries the 2,4-decadienal — the fried-fish aroma — and the charcoal smoke, and the salt air from the sea the fish came from 6 hours ago.

Pull flakes of the flesh from the bone with chopsticks. The flesh comes away in large, oily, white-pink pieces — each piece carrying a film of rendered omega-3 fat on its surface and a trace of charcoal-smoke on its skin-side. Dip in the muối ớt xanh — the green paste coats the flake's oily surface (the lime's acid emulsifies the fat on contact, breaking the oil film into tiny droplets that the salt and the chili can penetrate).

The bite: the mackerel's flesh (clean, marine, oily, warm — the omega-3 coating the tongue in a thin, fish-flavoured lipid film that the brain reads as "rich" and "satisfying"), the muối ớt xanh (green-hot, lime-sharp, salt-amplified — the capsaicin's moderate heat cutting through the lipid film, the lime's acid dissolving it, the salt's NaCl amplifying the glutamate the grilling's Maillard reaction produced in the fish's surface), and the charcoal-smoke (a background note, faint, warm, universal — the smoke that every fire since the first fire has contributed to every grilled thing).

Eat with rice. Drink beer — cold, the bubbles' carbonic acid providing a THIRD fat-cutting mechanism (alongside the lime's citric acid and the chili's capsaicin), the alcohol's ethanol providing a FOURTH (ethanol dissolves lipids on the tongue, a degreasing effect the French call "cutting the fat" and the Vietnamese call "đỡ ngán" — reducing the heaviness). The beer is not incidental to the beach dinner. The beer is STRUCTURAL — it is the fat-cutter the tongue needs after 3 bites of omega-3-rich mackerel, and its absence makes the mackerel feel heavier by the 5th bite.

Cá thu nướng Cửa Lò is the Nghệ An collection's simplest fish — simpler than the nhệch (which needed banana-leaf wrapping, turmeric marinating and mắm-tôm seasoning) and approaching the cá suối nướng Sapa's radical minimalism (fish + salt + fire). The mackerel needs no marinade because its fat IS its marinade — the omega-3 self-bastes, self-browns and self-flavours. The cook who salts, scores and grills is a cook who respects the fish enough to add nothing, and the muối ớt xanh — pounded fresh at the table, not applied in the kitchen — is the eater's choice, not the cook's imposition. The fish arrives naked. The condiment arrives separate. And the meeting — fish and salt and green chili and lime, on a beach, at dusk, with a beer — is the Cửa Lò evening, unchanged for as long as the mackerel have run and the fishermen have grilled.`,
      tip: `The four fat-cutting mechanisms at the Cửa Lò beach dinner table — lime acid (citric acid emulsifies lipid), green chili capsaicin (stimulates saliva production, which washes lipid from the tongue), beer carbonic acid (CO₂ dissolved in the beer forms carbonic acid, which has a mild degreasing effect), and beer ethanol (ethanol is a lipid solvent, dissolving the fat film on the tongue's surface) — are four DIFFERENT chemical mechanisms all converging on the same physiological outcome: clearing the omega-3 fat from the tongue between bites so the next bite tastes as fresh as the first. The Vietnamese beach dinner is, without knowing the chemistry, a FAT-MANAGEMENT SYSTEM — every component of the meal (the condiment, the drink, the acid, the heat) is selected not only for its own flavour but for its fat-clearing function, because the mackerel's richness needs continuous management, and the management is built into the format.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
