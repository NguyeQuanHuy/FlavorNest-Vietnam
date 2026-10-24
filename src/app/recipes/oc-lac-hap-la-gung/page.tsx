'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'oc-lac-hap-la-gung',
  title: `Ốc Lác Hấp Lá Gừng (Field Snails Steamed in Ginger Leaf)`,
  subtitle: `Fat apple snails from the flooded fields, starved for two days on chili water until they purge themselves clean, then packed into a pot with young ginger leaves and steamed until the meat pulls out of the shell in one whole coil.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/oc-lac-hap-la-gung.jpg',
  intro: `Oc lac is the fat, round apple snail of the Mekong floodplain — brown-shelled, palm-sized, and abundant in every flooded rice field and canal in Vinh Long from the monsoon onward. It is the cheapest protein in the Delta and one of the best-loved: sold by the basketful at every market, eaten at every roadside stall in the late afternoon, and cooked at home with a technique of near-total simplicity. There is no broth here, no sauce in the pot, no fat, and barely any seasoning. There is a pile of snails, a handful of ginger leaves, and steam. Everything the dish is depends on what happens before the pot goes on the heat.

The purging is the recipe. A field snail is a filter-feeder living in mud, and its gut and mantle are full of silt, algae and whatever else the field contained. Cook it without purging and every mouthful is gritty and tastes of pond. So the Delta keeps snails alive in a basin of water for two to three days, and the water has chilies crushed into it, or a rusty iron nail, or rice-washing water — every household has its version. The snails, irritated and unfed, keep filtering and voiding, and over 48 hours they empty their digestive tracts entirely and firm up their flesh. The chili is not mysticism: the capsaicin irritates the snail into more vigorous mantle contraction and faster purging, and the effect is real and visible in the sediment at the bottom of the basin. A properly purged oc lac is clean, sweet and firm. A rushed one is sand.

The ginger leaf is the second half of the dish and it is not the same thing as ginger root. La gung — the long, blade-like leaves of the ginger plant — carry a very different aromatic profile: green, faintly citrus-camphorous, warm but without the sharp pungent bite of the rhizome. Packed around the snails in a dry pot, they release their volatile oils into the steam, and that steam is the entire cooking medium and the entire seasoning. The compounds bind directly to the sulfurous and amine notes in shellfish, which is why ginger and snail is a pairing found in almost every cuisine that eats both. The leaves also stop the snails from sitting directly on the pot floor and scorching. They are aromatic, functional and free — the Delta ingredient in its purest form.

The eating is a social event and it has its own equipment. A pile of steaming snails goes on the table with a handful of thorns from a citrus tree, or toothpicks, or a safety pin, and a saucer of nuoc mam gung — fish sauce with pounded ginger, garlic, chili, sugar and lime. You hook the meat out with a twist of the wrist, in one piece, discard the operculum, dip, and eat. The correct twist is anticlockwise and follows the spiral of the shell; done right the whole coil of meat comes out intact, and done wrong it snaps and you lose the best part in the shell. Everyone in the Delta learns this at about age five, and everyone visiting learns it in about ten minutes, usually with an audience.`,
  ingredientSections: [
    {
      title: 'The snails',
      items: [
        {
          amount: 1.5,
          unit: 'kg',
          name: 'live oc lac (apple snails), in shell',
          note: `They must be alive — a snail with a retracted, dry body or one that does not respond when its operculum is touched is dead, and a dead snail cooked in a shared pot will ruin the batch. In Europe: frozen shelled Vietnamese snails are available and are already purged, in which case skip straight to the steaming and reduce it to 6 minutes. Live escargot or large periwinkles from a fishmonger can be used but must be purged just as thoroughly.`,
        },
        {
          amount: 3,
          name: 'red chilies, crushed (for the purging water)',
          note: `The capsaicin irritates the snail into contracting its mantle harder and voiding faster. This is a real mechanism, not folklore, and the sediment at the bottom of the basin will prove it to you.`,
        },
        { amount: 1, unit: 'tbsp', name: 'salt (for the purging water)' },
        { amount: 1, name: 'iron nail or a handful of rice-washing water (optional, traditional)' },
      ],
    },
    {
      title: 'The steam',
      items: [
        {
          amount: 100,
          unit: 'g',
          name: 'la gung (fresh ginger leaves), whole',
          note: `The long blade leaves of the ginger plant — green, warm, faintly camphorous-citrus, and quite different from the root. Sold in bundles at large Vietnamese groceries in Europe. If unavailable: use a mixture of lemongrass leaves and a generous quantity of sliced fresh ginger root, and accept that it will be sharper and less green.`,
        },
        { amount: 40, unit: 'g', name: 'fresh ginger root, thickly sliced', note: `In addition to the leaves, not instead of them. Sits at the bottom of the pot.` },
        { amount: 2, name: 'stalks lemongrass, bruised' },
        { amount: 3, unit: 'tbsp', name: 'water', note: `Three tablespoons only. The snails release a great deal of their own liquid, and that liquid — not added water — is what generates the steam. More water and you are boiling them, which leaches the sweetness straight out of the meat and into a broth you will throw away.` },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'Nuoc mam gung (ginger fish sauce)',
      items: [
        {
          amount: 30,
          unit: 'g',
          name: 'young ginger, pounded to a rough paste',
          note: `Pounded, never grated or blended. Pounding ruptures the cells and releases gingerol in coarse fibrous shreds that hold their bite in the sauce; a smooth puree oxidizes fast and turns flat and slightly bitter within the hour.`,
        },
        { amount: 4, unit: 'tbsp', name: 'fish sauce (35-40°N)' },
        { amount: 3, unit: 'tbsp', name: 'sugar' },
        { amount: 3, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, unit: 'tbsp', name: 'water' },
        { amount: 4, name: 'cloves garlic, pounded' },
        { amount: 3, name: 'bird\'s-eye chilies, pounded' },
      ],
    },
    {
      title: 'The table',
      items: [
        { amount: 20, name: 'citrus thorns, toothpicks, or safety pins', note: `Genuinely necessary equipment, not a joke. In the Delta the thorns come off the pomelo or lime tree in the yard.` },
        { amount: 50, unit: 'g', name: 'rau ram (Vietnamese coriander)', note: `The traditional partner to every snail dish in Vietnam — its peppery, faintly soapy edge is exactly calibrated against shellfish sweetness.` },
        { amount: 1, name: 'lime, in wedges' },
      ],
    },
  ],
  steps: [
    {
      title: 'Purge the snails — 48 hours, and there is no shortcut',
      description: `Put the live snails in a wide basin with enough cool water to cover them by a few centimeters. Crush the chilies into the water, add the salt, and drop in the iron nail if you are using one. Leave 48 hours in a cool, shaded place. Change the water completely every 12 hours, rinsing the snails each time.

Look at the bottom of the basin after each 12-hour stretch. The first change will leave a thick layer of dark sediment; by the fourth change the water should be running almost clear. That is the signal.

This is the entire dish and it cannot be compressed. Twelve hours of purging leaves grit in the meat. Twenty-four leaves some. Forty-eight is the number the Delta uses, and it is why oc lac at a good stall tastes clean and sweet and the same snail cooked carelessly at home tastes of the field it came from.`,
      tip: `Two things are happening over those 48 hours. The snails are voiding their digestive tracts — literally emptying the silt and algae they were filtering — and, unfed, they are metabolizing their own glycogen reserves, which firms the flesh and concentrates the free amino acids that make snail meat taste sweet rather than muddy. A well-purged snail is not just cleaner than an unpurged one; it is measurably better tasting. Starvation is a seasoning technique here, and the same principle governs the purging of clams, cockles and mussels everywhere in the world.`,
    },
    {
      title: 'Scrub the shells and check every snail is alive',
      description: `Scrub the shells hard with a brush under running water to remove the algae and mud that will otherwise end up on your fingers and in your mouth. Rinse until the water runs clear.

Check each snail. Touch the operculum — the hard plate sealing the opening — and it should twitch and retract. Discard any snail that does not respond, any with a cracked shell, and any that smells of ammonia.

One dead snail in a covered pot will taint the entire batch, because there is no broth here to dilute it — the steam carries everything.`,
      tip: `A dead snail is not merely unpleasant, it is a real safety problem. Snail flesh is high in free amino acids, which bacteria decarboxylate into biogenic amines — histamine, cadaverine, putrescine — very quickly once the animal dies, and these are heat-stable: cooking does not destroy them. This is precisely why the Delta insists on cooking snails alive and why the check takes thirty seconds. The old rule, in every shellfish-eating culture, is the same: if it does not move, it does not go in the pot.`,
    },
    {
      title: 'Pack the pot dry — leaves at the bottom, snails on top',
      description: `Lay half the ginger leaves, the sliced ginger root and the bruised lemongrass across the bottom of a heavy pot. Pile the snails on top, mouth-up where you can manage it. Cover them completely with the remaining ginger leaves. Sprinkle with salt and add just the 3 tablespoons of water.

The snails should not be sitting in liquid. They should be sitting on leaves, wrapped in leaves, with barely enough water to get the steam started — the rest of the moisture will come out of the snails themselves within the first two minutes.

Water in the pot is the classic mistake and it converts this into a completely different and much poorer dish. Boiled snails leach their sweetness into the cooking water, which is then discarded, and the meat that comes out is bland and slightly rubbery.`,
      tip: `This is a dry steam, and the distinction from boiling is not pedantry. In steam, the snail is surrounded by water vapor at 100°C but is not immersed — so there is no concentration gradient pulling its soluble compounds out into the surrounding liquid. Free amino acids, nucleotides, and sugars stay inside the meat, and the small amount of liquid that does collect at the bottom of the pot is the snails' own juice, concentrated and intensely savory. Delta cooks tip that liquid over the snails before serving. Nobody throws it away.`,
    },
    {
      title: 'Steam 8-10 minutes — the operculum tells you when',
      description: `Cover tightly and steam over medium-high heat. Give it 8-10 minutes for large oc lac, 6 for smaller snails, from the moment steam appears at the lid.

The doneness signal is unmistakable and needs no thermometer: the operculum — the hard plate sealing the shell — pops loose and falls away, and the meat protrudes slightly at the mouth of the shell. When most of the pot has done this, they are ready. Give it 30 more seconds and take the pot off.

Overcooking is the one real risk. Snail meat is dense muscle, and past about 12 minutes it contracts hard and turns from tender-firm to genuinely rubbery. It goes from perfect to disappointing in roughly two minutes, and it does not come back.`,
      tip: `The operculum popping off is not a coincidence of timing — it is a direct readout of the protein inside. The plate is held in place by the columellar muscle that anchors the snail to its own shell, and when that muscle's protein denatures and contracts, its grip fails and the plate releases. It happens at almost exactly the point where the rest of the meat has set but has not yet begun to toughen. The snail is telling you it is cooked, using the only signal it has. Trust it over the clock.`,
    },
    {
      title: 'Pound the ginger fish sauce and eat straight from the pot',
      description: `Pound the ginger, garlic and chilies together, then stir in the fish sauce, sugar, lime juice and water until the sugar has fully dissolved. It should be thick with ginger shreds — a sauce you can almost stand a toothpick in, not a thin liquid.

Tip the snails into a bowl with the leaves still on them and pour over the concentrated liquid from the bottom of the pot. Serve with the sauce, the thorns, the rau ram and the lime.

Hook the meat out with a thorn or toothpick, twisting anticlockwise with the spiral of the shell so the whole coil comes out in one piece. Discard the operculum. Dip generously, add a leaf of rau ram, and eat. Then reach for the next one, and keep going until the bowl is empty — which, in the Delta, takes about twenty minutes and involves everyone at the table talking at once.`,
      tip: `Ginger with snail is one of the most universal pairings in the world's cooking and the reason is chemistry, not custom. Snail flesh carries sulfurous and amine compounds that read as muddy or musky; gingerol and shogaol bind to and mask precisely these compounds while adding a warm counterpoint. This is why ginger appears with snails in Vietnam, in China, and in the herb butter that the French put on their escargot. Different continents, no contact, the same answer. Certain pairings are not cultural at all — they are just correct, and every cuisine that eats the ingredient finds its way there eventually.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
