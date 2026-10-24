'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-lang-song-serepok',
  title: `Cá Lăng Sông Sêrêpốk (Sêrêpốk River Catfish — Grilled in Banana Leaf)`,
  subtitle: `Cá lăng — the large, smooth-skinned, river catfish that haunts the deep pools of the Sêrêpốk, the Tây Nguyên's wildest river — wrapped in banana leaf with lemongrass, turmeric, lá é and green chili, and grilled over charcoal until the leaf chars and the fish inside steams in its own juice, emerging: white, flaking, clean-river-flavoured, firm from a life spent fighting the Sêrêpốk's current, and tasting of nothing but the river it came from and the highland herbs it was wrapped in.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/ca-lang-song-serepok.jpg',
  intro: `The Sêrêpốk — the river that flows WESTWARD, an anomaly in a country whose rivers flow east to the sea — rises in the Đắk Lắk highlands, carves through basalt gorges, tumbles over the Dray Sáp and Dray Nur waterfalls, and exits Vietnam into Cambodia where it joins the Mekong. The river's current is FAST (the gradient from the highlands to the Cambodian lowlands is steep — roughly 4 m per km, vs the Mekong Delta's nearly flat 0.01 m per km), the water is COOL (fed by highland springs at 18-22°C, vs the lowland rivers' 28-32°C), and the riverbed is BASALT (volcanic rock, mineral-rich, the same red laterite soil that gives the highland's coffee its terroir).

The cá lăng — Hemibagrus wyckioides, the Asian redtail catfish, or Hemibagrus nemurus, the yellow catfish — is the Sêrêpốk's prestige fish: a large (2-10 kg at market, up to 80 kg in the wild), smooth-skinned (no scales — the catfish family's defining trait), whiskered, bottom-dwelling predator that lives in the deep pools below the waterfalls and that fights the river's fast current daily. The current-fighting is the flavour's source: the cá lăng's muscle is FIRMER than any lowland catfish's (the constant swimming builds dense, exercise-hardened muscle fibres — the same exercise-equals-firmness principle the free-range chicken and the working buffalo demonstrated), and the flesh is CLEANER (the Sêrêpốk's fast, oxygenated, cool water does not harbour the anaerobic bacteria that produce the "muddy" geosmin and 2-methylisoborneol (MIB) compounds that make slow-water, pond-raised catfish taste of mud).

The cá lăng's CLEAN TASTE is the Sêrêpốk's specific gift: a cá lăng from the river tastes of nothing but fish and mineral-water, while a cá lăng from a still pond tastes of mud. The difference is the water: fast, oxygenated, cool water = aerobic bacteria dominate = no geosmin/MIB production = clean taste. Slow, warm, stagnant water = anaerobic bacteria dominate = geosmin/MIB accumulate in the fish's fat tissue = muddy taste. The Sêrêpốk's current IS the fish's flavour, because the current determines the microbial ecology that determines the off-flavour compounds that determine whether the fish tastes of the river or of the pond.

The banana-leaf wrapping is the same steam-in-own-juice technology the nhệch nướng used — and the parallel is precise: both are smooth-skinned fish (no scales), both are wrapped in banana leaf with highland aromatics, both grill over charcoal, and both emerge steamed rather than charred. The cá lăng is the nhệch's highland counterpart: the nhệch is estuarine (brackish, small, eel-like), the cá lăng is riverine (freshwater, large, catfish-shaped), and both use the banana leaf to convert a grill into a steamer, protecting the delicate scaleless skin from the fire's direct heat.

The aromatics inside the wrap are the highland's own: lemongrass (citral, the universal Vietnamese aromatic), turmeric (curcumin, the colour and the anti-inflammatory), lá é (eugenol, the Ê Đê marker), and green chili (capsaicin, moderate heat). No fish sauce inside the wrap — the fish is seasoned with SALT ONLY inside the leaf, and the fish sauce appears at the TABLE as a dipping sauce. The salt-only-inside approach is the same restraint the bún tôm Châu Trúc's broth used: when the ingredient is clean enough, the cook adds salt and nothing else, and the fish sauce — which carries its own fermented-fish flavour — is offered as a CHOICE, not imposed as a GIVEN.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 1,
          name: 'whole cá lăng (river catfish), 1.5-2 kg, cleaned, gutted, scored on both sides',
          note: `Smooth-skinned, no scales — handle gently (the skin tears more easily than a scaled fish's). Score 3-4 diagonal cuts, 1 cm deep, on each side. If whole cá lăng is unavailable: 4 catfish steaks (basa, pangasius or channel catfish), 3 cm thick — the banana-leaf wrap works for steaks as well as whole fish. River-caught is ideal; pond-raised works if soaked in clean running water for 2-3 hours before cooking (the running water purges some of the geosmin from the flesh's fat tissue).`,
        },
      ],
    },
    {
      title: 'The highland aromatics (inside the wrap)',
      items: [
        { amount: 3, name: 'stalks lemongrass, bruised and knotted, plus 2 more minced fine' },
        { amount: 1, unit: 'tbsp', name: 'ground turmeric' },
        { amount: 10, name: 'lá é leaves (wild basil)', note: `The eugenol-clove herb — stuffed inside the cavity and layered between the leaf and the fish.` },
        { amount: 4, name: 'green bird\'s-eye chilies, halved' },
        { amount: 20, unit: 'g', name: 'ginger, julienned' },
        { amount: 4, name: 'cloves garlic, sliced' },
        { amount: 1.5, unit: 'tsp', name: 'salt (inside the wrap — NO fish sauce inside)' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The banana-leaf wrap',
      items: [
        { amount: 3, name: 'large banana-leaf sheets, softened over flame', note: `Enough to wrap the whole fish in 2-3 layers — the multiple layers insulate the fish from the charcoal's direct heat, creating a steam chamber. The outermost layer chars; the middle layer steams; the innermost layer contacts the fish's skin and transfers the banana leaf's own chlorophyll-breakdown volatiles (the same sweet, green, smoky compounds the nhệch's banana leaf contributed).` },
        { amount: 1, name: 'kitchen twine' },
      ],
    },
    {
      title: 'Dipping sauce (at the table)',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 2, name: 'chilies, sliced' },
        { amount: 2, name: 'cloves garlic, minced' },
        { amount: 1, unit: 'tbsp', name: 'minced lá é (optional — the dip echoes the wrap\'s herb)' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of cơm lam or steamed rice' },
        { amount: 200, unit: 'g', name: 'rau sống: lá é, húng quế, rau răm, cucumber, green banana' },
      ],
    },
  ],
  steps: [
    {
      title: 'Stuff the cavity, rub the scores, wrap tight in banana leaf — the steam chamber closes',
      description: `Mix the minced lemongrass, turmeric, garlic, ginger, salt and oil into a paste. Rub the paste into the fish's scores on both sides and inside the cavity — the turmeric tints the flesh yellow at the score-walls, and the lemongrass's citral penetrates the exposed muscle.

STUFF the cavity with: the knotted lemongrass stalks, the lá é leaves (half of them), and the halved green chilies. The cavity is the AROMATIC CHAMBER — the heat will volatilise these aromatics, and the enclosed cavity will trap their vapours against the fish's interior flesh, infusing from inside out (the scores allow the exterior-rubbed aromatics to infuse from outside in — the fish is attacked from both directions).

WRAP: lay the softened banana leaves on a work surface, overlapping to form a sheet wide enough to enclose the fish. Scatter the remaining lá é leaves on the centre of the leaf bed (these will contact the fish's skin directly, transferring their eugenol through skin-contact during the steam). Lay the stuffed fish on the leaf bed. Fold the leaves over — first the long sides (tight against the fish), then the ends (tucked and folded flat). Wrap a second layer for insulation. Tie with twine at 3-4 points.

The wrapped fish should be: airtight (no gaps where steam can escape — escaping steam is lost moisture and lost aromatic), compact (the leaf presses against the fish's skin, maximising the contact area for the leaf's volatile transfer), and SEALED — the banana-leaf wrap is a pressure vessel, a steam chamber, a sealed-environment oven that converts the charcoal grill's dry radiant heat into moist internal steam.`,
      tip: `The banana-leaf wrap transforms the GRILLING MEDIUM from DRY HEAT (radiant + convective, producing Maillard crusting and surface dehydration) to WET HEAT (steam, trapped inside the leaf, producing gentle protein denaturation and zero surface dehydration). The scaleless catfish NEEDS wet heat: without scales, the fish's skin has no protective barrier against the grill's dry heat, and direct grilling produces a skin that tears, sticks to the grate, and chars to bitterness within 2 minutes. The banana leaf IS the catfish's scale — the protective barrier the evolution did not provide and the cook must supply. The nhệch (also scaleless, also banana-leaf-wrapped) needed the same intervention for the same reason: no scale = no protection = the leaf is the prosthetic scale.`,
    },
    {
      title: 'Grill 25-35 minutes, turning twice — the outer leaf chars, the inner fish steams',
      description: `Set the wrapped fish on the charcoal grill — directly on the grate, over medium-glowing embers (not high flame — high flame chars through all three leaf layers in 10 minutes, reaching the fish before the steam has cooked the interior). The grill distance: 10-15 cm above the embers.

GRILL 25-35 minutes for a 1.5-2 kg whole fish, turning every 8-10 minutes (3 turns total). The progression:

MINUTES 0-10 (first side): the outermost banana-leaf layer darkens from green to olive to brown to charred-black. The leaf's chlorophyll converts to pheophytin (the same darkening the bánh ít lá gai's leaf and every banana-leaf wrapper in the collection documented). Steam appears at the edges of the wrap — white wisps escaping through tiny gaps. Inside the sealed chamber: the fish's moisture (roughly 75-80% of the fish's weight) converts to steam at 100°C, and the trapped steam surrounds the fish in a moist, 100°C environment that gently denatures the protein from the surface inward. The lemongrass, lá é and chili aromatics volatilise in the steam and saturate the chamber's atmosphere.

MINUTES 10-20 (flip, second side): the char continues through the second leaf layer. The internal temperature of the fish's thickest point reaches 60-70°C. The flesh at the scores is opaque and beginning to flake. The turmeric-lemongrass paste, dissolved by the steam, has migrated along the score-channels into the muscle.

MINUTES 20-35 (flip again, final side): the fish is DONE when: a skewer through the thickest point (through the leaf — poke through all layers) meets no raw resistance, the internal temperature is 68-72°C, and the juices that escape from the skewer-hole are clear (not pink).

UNWRAP AT THE TABLE: the ritual of the banana-leaf fish is the unwrapping — the blackened, charred, smoky-smelling exterior leaf is peeled back in front of the diners, revealing the inner leaf (olive-green, steamed, intact), and the inner leaf is peeled to reveal the FISH: white-to-pale-yellow (the turmeric's curcumin, dyed into the flesh), glistening with its own steamed juice, the lá é leaves draped on its surface like dark-green confetti, the lemongrass knots visible in the open cavity, and the steam — aromatic, herbal, lemongrass-and-eugenol-scented — rising from the opened package in a cloud that the table breathes before the first piece is pulled.`,
      tip: `The Sêrêpốk cá lăng's firmness — from the river's fast current — is a collagen-content phenomenon: fish that swim constantly against currents develop more connective tissue (collagen) in their muscle (the collagen reinforces the muscle fibres against the mechanical stress of constant swimming), and the higher collagen content makes the flesh FIRMER in the raw state and MORE GELATIN-RICH after cooking (the collagen converts to gelatin during the 25-35 minutes of steaming, and the gelatin holds the flaked muscle together in moist, cohesive, gelatinous-sticky pieces rather than the dry, crumbly flakes a pond-raised catfish produces). The river's current built the collagen. The collagen became gelatin. The gelatin became the texture. The texture is the river's signature in the fish's flesh.`,
    },
    {
      title: 'Flake, dip, eat with cơm lam — the river, the leaf, the highland table',
      description: `Pull pieces of the steamed fish from the bone — the flesh flakes in large, moist, white-yellow, gelatin-glossy pieces that hold together on the chopstick (the converted gelatin binds the flakes into cohesive chunks rather than individual strands). Each piece carries: the turmeric's golden tint (visible at the score-walls), the lá é's eugenol (infused through the skin during the 25-minute steam — the eugenol, fat-soluble, dissolved into the fish's subcutaneous fat layer and is now distributed through the outer 3-5 mm of flesh), and the lemongrass's citral (infused through the cavity — the citral, volatile, saturated the steam atmosphere and deposited on every interior surface).

DIP in the nước chấm — the fish sauce, lime, sugar, chili, garlic and lá é combination. The dip's acid (lime) and umami (fish sauce) amplify the fish's own mild, clean, mineral-water flavour into a more assertive register — the fish sauce provides the fermented depth the salt-only seasoning inside the leaf deliberately withheld, and the lime's citric acid brightens the gelatin-rich flesh's heavy mouthfeel into something lighter and more refreshing.

EAT with cơm lam — the bamboo rice, torn from its tube, chewy, bamboo-sweet, the highland's starch. The cá lăng's clean, firm, herbal-steamed fish + the cơm lam's bamboo-scented sticky rice + the muối ớt lá é or the nước chấm = the Đắk Lắk riverine meal, the complete highland set: protein from the river, starch from the bamboo, herb from the forest, fire from the charcoal.

Cá lăng sông Sêrêpốk is the Đắk Lắk collection's WATER dish — where the gà nướng bản Đôn was the LAND dish (chicken from the yard) and the bò một nắng was the PASTURE dish (beef from the highland grass), the cá lăng is the RIVER dish: the protein the Sêrêpốk provides, caught from the deep pools below the waterfalls, and carrying in its firm, clean, mineral-flavoured flesh the river's own signature — the fast current's exercise, the cool water's cleanliness, the basalt riverbed's mineral terroir, and the Tây Nguyên's answer to the coast's cá thu and the paddy's cá lóc: a fish that tastes of where it swam, and that swam in the only river in Vietnam that flows the wrong way.`,
      tip: `The clean-vs-muddy taste distinction in catfish is entirely determined by TWO compounds: GEOSMIN (trans-1,10-dimethyl-trans-9-decalol, detection threshold 0.01 ppb — among the lowest of any flavour compound, which is why even trace amounts make fish taste "muddy") and 2-METHYLISOBORNEOL (MIB, detection threshold 0.03 ppb). Both are produced by cyanobacteria (blue-green algae) and actinobacteria in WARM, SLOW, NUTRIENT-RICH water — exactly the conditions of a lowland fish pond. In COOL, FAST, OLIGOTROPHIC water (the Sêrêpốk's profile), cyanobacterial growth is suppressed (the cold and the current reduce the nutrient concentration and the light exposure the algae need), and the geosmin/MIB production is minimal. The Sêrêpốk cá lăng's clean taste is not a genetic trait of the fish — it is an ENVIRONMENTAL trait of the river. The same fish raised in a warm, still pond would taste of mud. The river makes the fish. The fish carries the river. And the cook who grills the fish is serving the river on the plate.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
