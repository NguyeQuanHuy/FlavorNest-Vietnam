'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'kho-ca-tra-phong',
  title: `Khô Cá Tra Phồng (Puffed Dried Pangasius — Châu Đốc's Crispy Fish)`,
  subtitle: `Cá tra — the Mekong's farmed pangasius, the fish Vietnam exports by the hundred thousand tonnes — filleted, salted, sun-dried to leathery flatness, and then deep-fried until the flat, dried fillet PUFFS to 3-4x its thickness, the surface crisping to golden while the interior inflates into a hollow, airy, fish-flavoured cracker. The same steam-inflation physics the xôi phồng exploited, here applied to FISH instead of rice, producing the Châu Đốc snack that crunches, puffs and tastes of the Mekong's most abundant protein.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '30 min + 1-2 days drying',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/kho-ca-tra-phong.jpg',
  intro: `Khô cá tra phồng — literally "dried pangasius puffed" — is Châu Đốc's second-most-famous fish product (after the mắm cá). The cá tra (Pangasianodon hypophthalmus, the iridescent shark catfish, the Mekong's most commercially farmed fish — Vietnam produces roughly 1.5 million tonnes annually, principally from the An Giang and Đồng Tháp floating-cage and pond farms) is: large (farmed cá tra reach 1-3 kg), mild (the flesh is white, bland, low-fat at 2-3%, with almost no "fishy" off-flavour — the same clean-tasting, geosmin-free quality the flowing-river-cage cá lóc documented), and CHEAP (the cá tra's industrial-scale farming makes it Vietnam's least expensive fresh fish, and the dried product — khô cá tra — is the economy snack the Delta's working class buys by the kilo).

The PHỒNG (puffing) is the preparation's spectacle and its physics: a flat, dried, 3-5 mm thick fillet of cá tra, dropped into 180°C oil, INFLATES in 5-8 seconds to a puffy, hollow, 15-20 mm thick, golden, crispy fish cracker. The puffing mechanism is IDENTICAL to the xôi phồng's: residual moisture (15-20%) in the dried fillet's interior flash-evaporates to steam at the oil's temperature, the steam expands (1,700x volume increase), the dried surface (a protein-and-collagen glass, dehydrated to 5-8% moisture by the sun-drying) acts as a sealed crust that contains the expanding steam, and the crust INFLATES from flat to puffy as the steam pressure pushes outward.

But the khô cá tra phồng's crust is made of DIFFERENT MATERIAL than the xôi phồng's: the xôi phồng's crust is STARCH-GLASS (amylopectin, dehydrated and vitrified), while the khô cá tra phồng's crust is PROTEIN-GLASS — the fish's muscle protein (principally myosin and collagen) dehydrated by the sun-drying to a glassy, rigid, brittle state. The protein-glass behaves differently from the starch-glass during inflation: it is MORE ELASTIC (protein chains are longer and more flexible than starch chains, and the dehydrated protein can stretch further before fracturing — roughly 80-120% surface-area increase before cracking, vs the starch-glass's 50-80%), and MORE AROMATIC (the protein's Maillard products during frying are more complex and more numerous than the starch's, because protein contains 20 different amino acids that each produce different Maillard volatiles, while starch produces only glucose-derived Maillard products). The protein-glass inflation produces a crust that is: MORE DRAMATICALLY PUFFED (the greater elasticity allows more inflation before cracking), and MORE FLAVOURFUL (the richer Maillard from the 20-amino-acid protein).

The dried cá tra's preparation is a TWO-STEP process that the Châu Đốc fish-drying industry has industrialised:

STEP 1 — SALT AND DRY: the cá tra fillet is rubbed with salt (5-8% by weight — lighter than the mắm's 20-25%, because the goal is DRYING, not FERMENTING), optionally seasoned with sugar, pepper and garlic, and laid flat on bamboo racks in the sun for 1-2 days. The sun removes 50-60% of the fillet's original moisture (from 75-80% to 25-35%), and the salt's osmotic pressure draws additional water from the flesh's cells to the surface (where the sun evaporates it). The dried fillet is: flat (5-7 mm thick for a fillet that started at 15-20 mm — the dehydration shrinks the fillet to 1/3 its fresh thickness), leathery (the surface protein has dehydrated to a stiff, semi-rigid, translucent sheet), and carrying a concentrated fish-and-salt-and-pepper flavour (the 1.5-2x concentration the bò một nắng documented — same physics, different protein).

STEP 2 — FRY TO PUFF: the dried fillet is deep-fried at 170-185°C. The interior's residual moisture (25-35% — higher than the xôi phồng's 15-20%, because the fish-protein matrix retains water more tenaciously than the rice-starch matrix) flash-vaporises, the protein-glass crust inflates, and the flat fillet balloons into a PUFFY, HOLLOW, GOLDEN, CRISPY fish cracker in 5-8 seconds.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'cá tra fillets (pangasius / basa), 1.5-2 cm thick',
          note: `Pangasius (cá tra) or basa (cá basa) — both are Mekong catfish species with mild, white, low-fat flesh ideal for drying. Fresh fillets from the fish counter. If using pre-dried khô cá tra (sold at Vietnamese groceries as flat, amber, semi-rigid sheets): skip the drying step and proceed directly to frying.`,
        },
      ],
    },
    {
      title: 'The dry-cure',
      items: [
        { amount: 2, unit: 'tbsp', name: 'salt (roughly 5-8% of fish weight)' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'black pepper' },
        { amount: 3, name: 'cloves garlic, minced (optional — the Châu Đốc version\'s aromatic)' },
      ],
    },
    {
      title: 'For frying',
      items: [
        { amount: 500, unit: 'ml', name: 'neutral oil for deep-frying', note: `170-185°C — the SAME inflation zone the xôi phồng documented. Below 165°C: slow heat penetration, gradual steam release, no puffing (the fish fries flat and dense). Above 190°C: the protein-glass crust rigidifies and browns before the interior's moisture fully vaporises — the crust cracks rather than puffs.` },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 1, name: 'green mango salad: julienned green mango + shredded carrot + herbs + nước mắm chua ngọt dressing' },
        { amount: 2, unit: 'tbsp', name: 'muối tiêu chanh (the 9th appearance — salt + pepper + lime)' },
        { amount: 1, name: 'plate of raw vegetables: lettuce, cucumber, herbs' },
        { amount: 4, name: 'bowls of steamed rice (the khô cá tra phồng as a rice-accompaniment)' },
        { amount: 1, name: 'cold beer (the Delta\'s pairing — the crispy, salty, puffy fish + cold beer is the Mekong evening\'s most popular combination)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Salt, season, sun-dry 1-2 days — the protein-glass forms',
      description: `RUB the cá tra fillets with salt, sugar, pepper and garlic (if using). Lay flat on a rack or a bamboo mat — single layer, not overlapping (each fillet must dry independently).

SUN-DRY 1-2 days: same principle as the tung lò mò and the bò một nắng — the sun's radiant heat + the wind's boundary-layer removal drive moisture from the fillet's interior to its surface to the air.

DAY 1 (8-10 hours of sun): the fillet's surface dries first — the protein dehydrates from its gel-state (soft, moist, 75-80% water) to a GLASSY state (hard, translucent, 15-25% water on the surface). The interior is still relatively moist (40-50%). The fillet shrinks: from 15-20 mm fresh thickness to 8-12 mm (the surface layer contracts as it dehydrates, pulling the interior inward). The fillet begins to curl at the edges (the surface dries and contracts faster than the interior, producing a stress differential that curves the fillet — the same drying-curl every jerky and every dried-fish product worldwide exhibits).

DAY 2 (optional, for maximum puff): the fillet continues drying to 25-35% overall moisture. The surface is now: RIGID (the protein-glass has fully formed — the dehydrated myosin and collagen chains are locked in an amorphous solid, the same glassy state the sugar-glass and the starch-glass occupied, here from PROTEIN rather than from carbohydrate), TRANSLUCENT (the dried-protein refracts light, producing an amber, slightly see-through edge), and LEATHERY (the fillet is stiff but bendable — it does not snap like a cracker but it does not fold like a fresh fillet).

The MOISTURE GRADIENT: the dried fillet's surface is at 8-15% moisture (the protein-glass, rigid, the sealed crust), the interior is at 25-35% (still containing the water that will become the steam that inflates the fillet). The gradient is the puff's prerequisite — identical in principle to the xôi phồng's starch-glass-over-moist-centre, here replicated in protein-glass-over-moist-centre.

Store: the dried fillets keep at room temperature 1-2 weeks (the reduced water activity inhibits bacterial growth), refrigerated 1-2 months, frozen 6 months. The Châu Đốc dried-fish stalls sell them in stacks — flat, amber, leathery, the garlic-and-pepper aroma detectable at the stall's perimeter.`,
      tip: `The cá tra's LOW FAT CONTENT (2-3% for farmed pangasius) is the puffing's advantage: fat does not evaporate during sun-drying (unlike water), and a high-fat fish (like cá lóc at 5-7% or salmon at 12-15%) retains its fat through the drying, producing a GREASY dried product that, when fried, renders additional fat into the oil (muddying it) and produces a HEAVY, OIL-SOAKED, less-crispy result. The cá tra's lean flesh dries to an almost fat-free protein-glass that, when fried, absorbs LESS oil (the protein-glass's low porosity limits oil uptake to 5-8% by weight, vs a fattier fish's 15-20%) and puffs MORE CLEANLY (the steam encounters no fat-barriers inside the fillet that would impede its outward expansion). The lean fish puffs better than the fatty fish — the opposite of the tung lò mò's fat-retention advantage, and the demonstration that fat is an ASSET for some preparations (sausage drying) and a LIABILITY for others (fish puffing).`,
    },
    {
      title: 'Fry at 175-185°C — flat to puffy in 5-8 seconds, the protein balloon',
      description: `Heat oil to 175-185°C. Drop one dried fillet into the oil —

SECOND 0-2: the fillet sinks (the dried fish is denser than the oil). The oil's heat begins penetrating the protein-glass crust.

SECOND 2-4: BUBBLES appear at the fillet's edges and surface — the interior's moisture is beginning to vaporise. The fillet begins to SWELL — the flat, 5-7 mm sheet lifts at its centre, the protein-glass crust stretching outward as the internal steam-pressure builds.

SECOND 4-6: RAPID INFLATION — the fillet balloons from 5-7 mm to 15-20 mm thickness, the protein-glass crust stretching to accommodate the expanding steam. The fillet rises to the oil's surface (the inflated, air-filled fillet is now less dense than the oil, and it bobs upward like the xôi phồng's golden balloon). The surface BROWNS — the protein-glass crust's amino acids undergo rapid Maillard browning at 175-185°C, producing a GOLDEN, crispy, complexly aromatic exterior (the 20-amino-acid Maillard the intro documented — each amino acid producing its own volatile: proline → pyrrolines, glycine → pyrazines, cysteine → thiophenes and furanones, leucine → 3-methylbutanal — a MORE DIVERSE Maillard volatile cocktail than the xôi phồng's starch-only Maillard).

SECOND 6-8: the inflation stabilises — the crust has stretched to its maximum, the steam has vented through micro-cracks, and the fillet is now: PUFFY (15-20 mm thick, hollow inside, the interior a single large cavity or a network of smaller cavities), GOLDEN (the Maillard-browned protein-glass), CRISPY (the dehydrated, fried, protein-glass crust shatters under the tooth), and FLOATING (the air-filled interior is buoyant).

FRY 10-15 more seconds after the puff completes — turn once to ensure even browning. Lift out. Drain on a rack.

The puffed khô cá tra phồng is: LIGHT (the hollow interior is mostly air — a puffed fillet weighs the same as the dried fillet but occupies 3-4x the volume), CRISPY (the protein-glass crust fractures at 3-5 Newtons — firmer than the xôi phồng's starch-glass at 2-3 N, because the protein's intermolecular bonds are stronger than the starch's), and AROMATIC (the 20-amino-acid Maillard volatile suite, the garlic's toasted ajoene, the pepper's piperine — a COMPLEX fish-cracker aroma that the simple starch-puff of the xôi phồng and the shrimp-cracker-puff of the bánh phồng tôm do not carry).

BREAK a piece — the crust SHATTERS (the protein-glass fracture, audible, the shards golden and thin-walled), the hollow interior is revealed (the steam's former home, now a cavity that the eye sees and the tongue will find empty), and the aroma that escapes from the broken interior is: CONCENTRATED FISH (the dried-fish's amino acids, concentrated by the drying and further concentrated by the frying's Maillard, now trapped inside the sealed crust and released all at once when the crust breaks — a burst of fish-savoury-garlic-pepper that is the khô cá tra phồng's most intense aromatic moment).

EAT with green mango salad — the ACID-CRUNCH of the julienned mango + the CRISPY-PUFFY of the fish = the same sour-with-fried pairing every fried protein in the collection has deployed, here at the most dramatic textural scale (a flat fish that became a balloon). Dip in muối tiêu chanh — the 9TH APPEARANCE of the salt-pepper-lime trio, now the collection's most-documented condiment by a wide margin.

Or eat with rice — break the puffed fish into pieces over the rice bowl, drizzle nước mắm ngọt, and the crispy fish-shards soften in the sauce over 2-3 minutes (the same crunch-to-soft timeline the cháo's bánh tráng documented — here the fish-protein-glass softens in fish sauce rather than in rice porridge, and the transition zone between crispy and sauce-softened is the most interesting bite).

Khô cá tra phồng completes the collection's PUFFING PAIR: xôi phồng (STARCH-glass, rice, Khmer festival food, sweet) ↔ khô cá tra phồng (PROTEIN-glass, fish, Châu Đốc snack food, savoury). Same physics (steam inflation inside a sealed crust), different material (starch vs protein), different elasticity (50-80% vs 80-120% stretch), different Maillard (glucose-only vs 20-amino-acid), different context (festival spectacle vs everyday beer snack). The puffing is universal. The material is specific. And the material's specificity — starch or protein, rice or fish — determines everything: the colour, the crunch force, the aroma, the stretchability, and the social context in which the balloon is eaten.`,
      tip: `Muối tiêu chanh's NINTH appearance (gà Hồ, ghẹ, tôm chiên, gà đồi, lợn cắp nách, gà luộc, bò lúc lắc, bò nướng ngói, and now khô cá tra phồng) confirms it as the collection's most UNIVERSAL condiment — appearing with poultry (3x), beef (2x), pork (1x), seafood (2x), and now dried fish (1x), spanning Northern, Central and Southern regions, and pairing with grilled, fried, boiled and dried preparations. The trio's universality validates its status as a MINIMAL COMPLETE CONDIMENT: salt (ENaC), pepper (TRPV1), lime (PKD2L1) = three receptor systems, three ingredients, maximum coverage with minimum complexity. No other three-ingredient condiment in any cuisine achieves this breadth.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
