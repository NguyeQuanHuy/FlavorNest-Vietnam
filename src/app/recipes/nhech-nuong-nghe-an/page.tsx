'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'nhech-nuong-nghe-an',
  title: `Nhệch Nướng (Grilled Swamp Eel Nghệ An — Cửa Lò Style)`,
  subtitle: `Nhệch — the long, slippery, snake-like brackish-water eel of Nghệ An's estuaries — marinated in turmeric, lemongrass and galangal, wrapped in banana leaf and grilled over charcoal until the leaf chars black and the eel inside steams to a custard-soft, golden, intensely fragrant flesh that tastes of estuary mud, turmeric root and charred leaf. The eel that Cửa Lò beach-town eats at dusk.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/nhech-nuong-nghe-an.jpg',
  intro: `Nhệch is a word that exists only in Nghệ An and its neighbouring provinces — there is no standard Vietnamese word for this animal because most of Vietnam does not eat it, does not catch it, and does not know what it is. The animal is a brackish-water eel — most likely Pisodonophis boro (the rice-paddy snake eel) or a related Ophichthidae species — that lives in the muddy, saline-to-brackish estuaries, mangrove fringes and tidal flats of the Nghệ An coast, burrowing into the mud at low tide and emerging to feed at high tide. It is long (50-80 cm), thin (2-3 cm diameter), covered in a thick mucus slime, and, to the unprepared observer, indistinguishable from a small snake. It is not a snake. It is a fish — a true eel with fins, gills and a swim bladder — and its flesh, once the slime is scrubbed off and the turmeric-lemongrass marinade has done its work, is one of the most delicate and most intensely flavoured seafood proteins on the Nghệ An coast.

The flesh is white, soft, fine-grained and remarkably free of the small bones that plague the freshwater swamp eel (lươn). Its fat content is moderate (roughly 8-10% — richer than the paddy lươn, leaner than the mountain cá chình mun), and its flavour is maritime — cleaner, saltier, more minerally than any freshwater eel, carrying the estuary's brackish terroir in the same way the cá chình mun carried the mountain stream's. The nhệch's flavour IS the estuary: mud, salt, tidal grass and the iodine of the South China Sea entering through the river's mouth.

Cửa Lò — the beach town 15 km east of Vinh city, Nghệ An's capital — is where the nhệch stalls concentrate, because Cửa Lò sits at the mouth of the Cửa Lò estuary where the nhệch population is densest. The fishermen catch them at low tide by hand or by trap — the eel burrows tail-first into the mud, and the catcher identifies the burrow by the small hole in the surface, reaches in wrist-deep, and pulls the eel out by its head. The catch is brought to the stalls that line the beach road, where the nhệch is cleaned (scrubbed with salt and ash to remove the slime — a more aggressive de-sliming than the lươn's salt-and-vinegar treatment, because the nhệch's mucus is thicker), marinated in the Nghệ An standard spice paste (turmeric, lemongrass, galangal, chili, mắm tôm), and either grilled directly or wrapped in banana leaf and grilled.

The banana-leaf wrap is the preferred method — and the method this recipe documents — because the leaf does for the nhệch what the bamboo tube did for the cơm lam: it creates a sealed, aromatic, self-steaming cooking vessel that prevents the eel's delicate flesh from drying on the grill and that contributes its own volatile compounds (benzaldehyde, hexanal, 2-acetyl-1-pyrroline — the same rice-like aroma compound that makes jasmine rice fragrant) to the eel's surface. The nhệch emerges from the charred leaf golden, custard-soft, coated in the turmeric paste, and smelling of banana leaf, charcoal and estuary.`,
  ingredientSections: [
    {
      title: 'The nhệch (or substitute eel)',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'nhệch or substitute eel, cleaned and de-slimed',
          note: `In Nghệ An: nhệch from the Cửa Lò estuary, scrubbed with salt and rice-husk ash until the slime is gone and the skin is rough. OUTSIDE VIETNAM: conger eel, sand eel, or any small marine/estuarine eel is the closest substitute. Freshwater eel (Anguilla spp.) also works but is richer and less maritime. Cut into 15 cm sections. De-boned if large (slit along the back, pull spine), or left bone-in if small (the bones soften during the leaf-wrapped grilling).`,
        },
      ],
    },
    {
      title: 'The Nghệ An spice paste',
      items: [
        { amount: 2, unit: 'tbsp', name: 'ground turmeric (or 40 g fresh turmeric, pounded)' },
        { amount: 3, name: 'stalks lemongrass, tender parts, minced very fine' },
        { amount: 20, unit: 'g', name: 'galangal (riềng), grated', note: `Galangal — sharper, more piney and more peppery than ginger — is the Nghệ An aromatic the way mắc khén is the Tày's and the way lá chanh is Tam Đảo's.` },
        { amount: 4, name: 'cloves garlic, pounded' },
        { amount: 3, name: 'shallots, pounded' },
        { amount: 2, name: 'red chilies, pounded' },
        { amount: 1, unit: 'tbsp', name: 'mắm tôm (fermented shrimp paste)', note: `The Nghệ An addition — its funky, umami-dense, purple-black paste amplifies the eel's own maritime register in a way fish sauce (which is cleaner and milder) cannot.` },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'For wrapping and grilling',
      items: [
        {
          amount: 8,
          name: 'pieces of banana leaf, 25 x 30 cm, softened over flame',
          note: `Pass each leaf briefly over a gas flame or over the charcoal — 5 seconds per side — until it turns from matte to glossy and becomes pliable. Un-softened banana leaf cracks when folded; softened leaf wraps smoothly.`,
        },
        { amount: 1, name: 'charcoal grill with glowing embers' },
        { amount: 1, name: 'kitchen twine or toothpicks for securing the parcels' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of hot steamed rice or bún' },
        { amount: 200, unit: 'g', name: 'rau sống: lettuce, rau răm, húng quế, tía tô, kinh giới' },
        { amount: 1, name: 'saucer of mắm tôm pha (diluted shrimp paste with lime, chili, sugar)' },
        { amount: 60, unit: 'g', name: 'roasted peanuts, crushed' },
        { amount: 1, name: 'lime, in wedges' },
      ],
    },
  ],
  steps: [
    {
      title: 'De-slime, marinate in the turmeric-galangal-mắm tôm paste',
      description: `Clean the eel: rub vigorously with coarse salt (3 tbsp) and, if available, rice-husk ash (a traditional Nghệ An de-sliming abrasive — the silica in the ash strips the mucus more effectively than salt alone). Scrub for 2-3 minutes until the skin feels rough and dry, not slippery. Rinse well. Cut into 15 cm sections.

Combine all spice-paste ingredients — turmeric, lemongrass, galangal, garlic, shallot, chili, mắm tôm, fish sauce, sugar, oil — into a thick, golden-orange paste. Rub every section of eel thoroughly — every surface, inside any cavity, pressed into any cut. The paste should coat the eel in a visible, thick, aromatic layer.

Marinate 30-45 minutes. The turmeric's curcumin stains the flesh golden. The galangal's galangin and the lemongrass's citral penetrate the eel's surface. The mắm tôm's glutamate bonds with the eel's own free amino acids, amplifying the umami at the molecular level before the grill even starts.`,
      tip: `The mắm tôm in the marinade — absent from the Quy Nhơn shellfish, absent from the Nha Trang nem nướng, and present here — is the aromatic marker that identifies a dish as Nghệ An. Where the southern coast uses fish sauce (clean, clear, bright) and the central coast uses mắm nêm (fermented anchovy, funky but still marine-clean), Nghệ An uses mắm tôm (fermented shrimp paste — darker, thicker, more aggressively funky, with a purple-black colour and a smell that the uninitiated describe as "challenging"). The mắm tôm is Nghệ An's condiment identity, and its presence in a marinade is the regional signature the tongue reads before the brain names the province.`,
    },
    {
      title: 'Wrap in banana leaf and grill — 15-20 minutes, the leaf is the oven',
      description: `Lay a softened banana leaf shiny-side up. Place 2 sections of marinated eel in the centre. Fold the leaf over — first the long sides, then the ends — into a tight parcel roughly 15 x 8 cm. Secure with twine or toothpicks. Make 4 parcels.

Lay the parcels on the charcoal grate, seam-side down, 10-12 cm above glowing embers. Grill 8-10 minutes per side, turning once. The leaf chars progressively: green → brown → black, and the charring is expected — the outer leaf is a sacrificial layer that absorbs the charcoal's heat and converts it to gentler, more even, steam-and-conduction cooking inside.

Inside the parcel: the eel steams in its own moisture and the spice paste's oil, the banana leaf's released volatiles (2-acetyl-1-pyrroline, the jasmine-rice aroma compound) perfume the eel's surface, and the turmeric paste cooks from a raw paste to a toasted, fragrant, golden crust fused to the eel's flesh.

The parcel is done when: the leaf is uniformly charred black, the parcel feels firm when squeezed gently (the eel inside has set from raw-soft to cooked-firm), and — when one parcel is opened as a test — the eel is golden, custard-soft, opaque throughout, and smells of turmeric-galangal-lemongrass-charred-leaf in a wave that fills the table.`,
      tip: `The banana leaf does the same job here that it did in the cơm lam's bamboo tube and the chạo tôm's sugarcane: it is a vessel that IS an ingredient. The leaf's wax layer (on the shiny side) melts during grilling and contributes a faint, sweet, plant-wax aroma; its cell walls break down and release 2-acetyl-1-pyrroline (the compound that makes basmati and jasmine rice aromatic — produced here by the same Maillard-like pathway at grilling temperature); and its fibre chars to carbon that insulates the eel from the charcoal's direct heat. The leaf is the oven wall, the aromatic and the thermal buffer, and it costs nothing because it grows behind the house.`,
    },
    {
      title: 'Unwrap at the table — the reveal, the steam, the golden eel',
      description: `Bring the charred parcels to the table on a plate. Cut the twine and peel the blackened banana leaf open — the steam rises, carrying turmeric-galangal-banana-leaf fragrance, and the eel is revealed: golden, glistening with the turmeric paste's oil, custard-soft, its surface fused with the toasted spice crust.

Break the eel into pieces with chopsticks — it flakes easily, the flesh falling into large, soft, golden chunks that carry the paste on their surface and the estuary's brackish flavour in their core.

Eat with rice or bún, the herb platter, and the mắm tôm pha (diluted shrimp paste: 2 tbsp mắm tôm + 1 tbsp lime juice + 1 tbsp sugar + sliced chili + a few drops of water, stirred until smooth). The mắm tôm pha amplifies the mắm tôm already in the marinade, creating a double-mắm-tôm register — in the flesh and on the surface — that is the Nghệ An flavour at full volume.

Or wrap: dampened rice paper, lettuce, herbs, a chunk of eel, a drizzle of mắm tôm pha, crushed peanuts. Roll. Bite. The banana-leaf-steamed eel is softer and more custardy than a directly grilled eel would be — the leaf's sealed, steamy environment prevented any surface dehydration — and the softness inside the crunchy-lettuce-and-peanut roll is the textural contrast the format was built for.

This is the eel the Nghệ An coast eats when the tide goes out and the mud gives up its hiding things — the nhệch, the animal with no standard name, from the estuary with no fame, caught by hand from the mud at low tide and cooked in the leaf of the tree behind the house. The most local ingredient in the collection: no export, no standard name, no recognition outside the province, and — to the people who catch it and cook it and eat it at dusk on the Cửa Lò beach road — no equal.`,
      tip: `Nhệch nướng is the collection's second banana-leaf-wrapped grill (after the cơm lam's thematic cousin) and its most geographically isolated recipe: the nhệch exists in Nghệ An's estuaries and in the culinary vocabulary of Nghệ An's people and essentially nowhere else in Vietnam's food canon. It is more localised than the cá chình mun (which exists wherever Anguilla marmorata's range extends) and more localised than the gỏi lá cách cá đuối (which exists wherever mangrove meets stingray). The nhệch is a one-province, one-estuary, one-name ingredient, and this page may be the first time it has been documented in English. The collection's job is to record these before they are forgotten, and the nhệch — still caught, still cooked, still eaten, but never written down — is exactly the ingredient the project was built to find.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
