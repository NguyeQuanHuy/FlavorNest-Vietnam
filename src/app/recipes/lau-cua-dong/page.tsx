'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'lau-cua-dong',
  title: `Lẩu Cua Đồng (Field-Crab Hotpot with Water Spinach)`,
  subtitle: `Tiny rice-paddy crabs — pounded whole in a mortar, strained, and the slurry simmered until the crab protein rises as a rust-orange raft of solid crab custard floating on a rich, amber, intensely crabby broth. The broth goes into the hotpot. The custard goes on top. The vegetables go in by the handful. And the table eats the paddy's smallest crustacean in its most concentrated form.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/lau-cua-dong.jpg',
  intro: `Cua đồng — the rice-paddy crab, the field crab — is one of the smallest and most abundant crustaceans in the Vietnamese food system. It is a freshwater crab, typically Somanniathelphusa spp., 3-5 cm across the carapace, found in every rice paddy, every canal bank and every flooded field from the Red River Delta to the Mekong, and caught so easily and in such quantities that it is, in the rural economy, essentially free. A child with a basket and a flashlight can catch a kilogram in an hour. The market price per kilo is lower than tofu.

But the field crab is too small to eat as a crab — there is almost no extractable meat in a 3 cm crab, and cracking fifty tiny shells to get a spoonful of flesh is work that no appetite justifies. The Vietnamese kitchen's solution is total processing: the whole crab — shell, legs, body, innards, everything — is pounded in a mortar with water, and the resulting slurry is strained through a sieve. The sieve catches the shell fragments and the chitin; the strained liquid carries the dissolved protein, the fat, the crab's hepatopancreas (the tomalley, which is the flavour), and the orange carotenoid pigment (astaxanthin, the same compound that turns a cooked shrimp pink) that gives the broth its distinctive amber-orange colour.

When this strained crab water is simmered, something remarkable happens: the dissolved protein coagulates — exactly as egg white coagulates when heated — and rises to the surface as a solid, rust-orange raft of crab custard called gạch cua (crab paste/crab butter). The raft floats on the now-clear, amber broth below, and the cook has, from a kilogram of tiny, individually useless crabs, produced two products: a concentrated crab custard (rich, orange, intensely flavoured, spooned onto bowls as a topping) and a crab-flavoured broth (clear, amber, savoury, used as the hotpot's base).

The lẩu format is the Mekong's standard: the broth goes into a hotpot over a table burner, the vegetables go in by wave (rau muống — water spinach — is the fixed companion, its iron-tasting, canal-bank, slightly bitter green being the crab broth's traditional counterweight), and the gạch cua floats on top as a shared topping that everyone reaches for with their spoon. The meal runs at the hotpot's pace — the same communal, continuous, evening-length format the lẩu mắm and the lẩu cá kèo used — and the crab broth deepens as each vegetable cooked in it adds its own contribution.

A food-safety note: freshwater crabs are intermediate hosts for Paragonimus westermani — the lung fluke — whose larvae (metacercariae) encyst in the crab's tissues and, if consumed raw or undercooked, migrate to the human lungs and cause paragonimiasis. The strained crab slurry MUST be fully cooked — simmered at 100°C for the full duration of the broth-making — to kill the metacercariae. The tradition has always cooked the slurry (nobody drinks it raw), so the risk applies only if shortcuts are taken. Do not take them.`,
  ingredientSections: [
    {
      title: 'The field crabs',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'live cua đồng (field crabs), purged in clean water overnight',
          note: `Purged: kept in clean water for 12-24 hours so they expel the mud from their digestive tract. Rinse thoroughly. In Vietnam: sold live at every market, cheap and abundant. OUTSIDE VIETNAM: the pounding-and-straining technique works with any small, inexpensive crab — shore crabs (Carcinus maenas, common on European coasts and considered invasive), small blue crabs, or even crayfish. The product is the broth, not the crab — any crustacean with a shell and a hepatopancreas produces the same amber broth and the same coagulated gạch.`,
        },
      ],
    },
    {
      title: 'The broth',
      items: [
        { amount: 1.5, unit: 'L', name: 'water (for pounding and simmering)' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 3, name: 'tomatoes, quartered', note: `Added to the simmering broth — the tomato's glutamate reinforces the crab's own, and its acid brightens the rich, fatty broth.` },
        { amount: 2, name: 'stalks lemongrass, bruised (optional)' },
        { amount: 20, unit: 'g', name: 'ginger, bruised' },
        { amount: 1, unit: 'tbsp', name: 'annatto oil (dầu điều)', note: `Deepens the broth's orange from amber to a richer rust — visual amplification of the astaxanthin's natural tint.` },
      ],
    },
    {
      title: 'The vegetables',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'rau muống (water spinach), cut in lengths',
          note: `The fixed companion — its slightly bitter, iron-rich, canal-bank green is the crab broth's traditional partner. The pairing is ecological: the crab lives in the paddy, the water spinach grows in the canal beside the paddy, and the kitchen puts the neighbours in the same pot.`,
        },
        { amount: 200, unit: 'g', name: 'mồng tơi (Malabar spinach)', note: `Its slight mucilage adds body to the broth — the same thickening the okra contributed in the canh chua.` },
        { amount: 200, unit: 'g', name: 'bắp chuối (banana blossom), shredded' },
        { amount: 200, unit: 'g', name: 'rau nhút (water mimosa), if available' },
        { amount: 200, unit: 'g', name: 'đậu phụ (tofu), cubed and fried' },
        { amount: 100, unit: 'g', name: 'nấm (mushrooms)' },
        { amount: 200, unit: 'g', name: 'bún (rice vermicelli)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Pound the crabs whole and strain — the total-processing technique',
      description: `Rinse the purged crabs one final time. Working in batches of 200-250 g: put the live crabs in a large mortar and pound vigorously — smashing the shells, crushing the bodies, grinding everything to a coarse, wet, orange-flecked paste. Add 300-400 ml water per batch during the pounding to keep the paste fluid.

Pour the pounded slurry through a fine-mesh sieve (or a cloth-lined colander) into a large pot, pressing and squeezing to extract every drop of crab-flavoured liquid. What passes through: a thick, orange-amber liquid carrying dissolved protein, fat, hepatopancreas pigment and flavour. What stays behind: shell fragments, chitin, leg pieces — discard.

Repeat for all the crabs. The strained liquid in the pot — roughly 1.5-2 L — is the crab extract, and it smells powerfully of raw crustacean: briny, mineral, faintly sweet, unmistakably crab.

ALTERNATIVE (for those without a mortar large enough): blend the crabs in a powerful blender with water in batches, then strain. The result is identical — the blade does what the pestle does.`,
      tip: `The total-processing method — pound everything, strain everything, use the liquid — is the Vietnamese kitchen's solution to the problem of too-small-to-pick crustaceans, and it appears in every culture that faces the same problem: the French bisque passes crab and lobster shells through a food mill; the Thai tom yum stock simmers whole shrimp heads and strains; the Japanese dashi-style crab stock simmers crushed crab bodies. The principle is universal: when the animal is too small to eat as a piece, dissolve it into a liquid and eat the liquid. The mortar is the dissolver, the sieve is the filter, and the broth is the product.`,
    },
    {
      title: 'Simmer until the gạch rises — the protein raft that IS the crab',
      description: `Set the pot of strained crab liquid over medium heat. Add the fish sauce, salt, sugar and the annatto oil. Bring to a GENTLE simmer — do not stir once the liquid starts heating. Do not boil hard.

Between 70°C and 85°C the dissolved crab protein begins to coagulate — exactly as egg white coagulates — and rise to the surface as a soft, rust-orange, custard-like mass: the gạch cua. It accumulates over 5-10 minutes into a floating raft that covers most of the surface, and the broth underneath clears from opaque-orange to translucent-amber as the protein leaves the liquid and joins the raft.

Once the raft has formed and is firm enough to hold together when nudged with a spoon: gently lift it out in one or two pieces with a wide spatula. Set it on a plate — it is the topping, spooned over individual bowls later. The broth underneath is now clear, amber, deeply crabby and ready for the hotpot.

Add the quartered tomatoes, ginger and lemongrass to the broth. Simmer 10 minutes. Taste: savoury, crabby, faintly sweet, with the tomato's acid brightening the crustacean richness. Adjust with fish sauce if flat, with sugar if sharp.`,
      tip: `The gạch cua's rise is protein coagulation by the textbook: the crab's dissolved myosin, actin and other structural proteins denature at 70-85°C, unfold, and re-aggregate into a solid network that is less dense than the surrounding liquid (because the network traps air micro-bubbles and fat droplets, reducing its effective density), and the solid floats. The process is identical to making a clarification raft for a consommé — the same protein-coagulation-and-flotation mechanism French classical cooking uses to clarify stocks — except here the raft is the product rather than the waste. The Vietnamese cook keeps the raft and eats it. The French cook keeps the broth and discards the raft. Same physics, opposite value judgment.`,
    },
    {
      title: 'Set the hotpot, add vegetables by wave, spoon the gạch on every bowl',
      description: `Transfer the clear, amber crab broth to a hotpot vessel on a table burner. Bring to a lively simmer. The vegetables go in by wave — the standard hotpot format this collection has now deployed half a dozen times:

First wave: fried tofu and mushrooms — 3-4 minutes, absorbing the crab broth.

Second wave: banana blossom and water mimosa — 2 minutes.

Third wave: rau muống, cut in lengths, by the handful — 30 seconds to 1 minute, wilting to dark green in the amber broth.

Fourth wave: mồng tơi (Malabar spinach) — 30 seconds, its mucilage thickening the broth by a whisper.

And the gạch cua — spooned from the plate onto each person's bowl of bún or rice. A tablespoon per person, set on the noodles before the broth is ladled over. The gạch is the concentrate — a spoonful of it carries more crab flavour than a full bowl of the broth, and its rich, orange, custard-like texture dissolving into the hot broth and the noodles is the moment the bowl goes from a vegetable-in-broth to a crab meal.

Ladle the hot broth with vegetables over the bún and the gạch. Eat. The spoonful carries: the broth's amber, crab-savoury liquid; the gạch's orange, custard-rich dissolve; the rau muống's iron-bitter green; and the bún's neutral starch carrying everything. The paddy's smallest crustacean, concentrated into its most potent form, feeding a table of four from a kilogram of crabs that each weighed less than a tablespoon.`,
      tip: `Lẩu cua đồng is the dish that proves the Delta's resourcefulness at its most extreme: a kilogram of crabs too small to eat, pounded to a slurry, strained to a broth, coagulated to a custard, and served as a hotpot that feeds four — the same four that a single ghẹ Hàm Ninh also feeds, at fifty times the price. The field crab and the reef crab are the same phylum (Arthropoda), the same class (Malacostraca), the same order (Decapoda), and the same food — crustacean protein in a shell. The difference is the size, the price and the technique: the ghẹ is big enough to eat as a piece; the cua đồng is too small, so the kitchen dissolves it into a liquid and eats the liquid. The technique erases the size disadvantage, and the broth does not know whether the crab that made it was 3 cm or 30 cm. Flavour per đồng, the field crab wins.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
