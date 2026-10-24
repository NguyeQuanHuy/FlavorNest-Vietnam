'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'goi-ca-duc',
  title: `Gỏi Cá Đục (Raw Sillago Cured in Lime and Roasted Rice Powder)`,
  subtitle: `Silver sillago pulled from the surf at Nghi Xuân, filleted while still stiff, pressed dry, cured in lime and tossed in roasted rice powder — then wrapped in fig leaf with a thick peanut-sesame sauce. Hà Tĩnh's boldest dish, and its most technically exacting.`,
  category: 'APPETIZER',
  difficulty: 'Hard',
  totalTime: '1 hr',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/goi-ca-duc.jpg',
  intro: `Cá đục — sillago, the silver whiting of the Vietnamese coast — is a small, slim, sand-dwelling fish that runs the shallow surf zone along the Hà Tĩnh coastline, and Nghi Xuân district eats it raw. Gỏi cá đục is the province's most confident dish: no heat is applied to the fish at any point, the cure is lime juice and nothing else, and the entire preparation succeeds or fails on how fresh the fish was and how thoroughly you dried it. A gỏi cá made from a fish landed that morning is clean, sweet and firm, tasting of the sea in the way that only raw fish can. Made from a fish that spent a day on ice, it is a bad idea.

The fish is well suited to this and it is not a coincidence. Sillago is exceptionally lean — almost no intramuscular fat — and its flesh is white, fine-grained and firm, with a mild, sweet flavor and none of the oily, metallic edge that a mackerel or a sardine would bring to a raw preparation. Lean flesh also cures cleanly: there is no fat to go rancid, and the lime acid penetrates evenly rather than being repelled by lipid. The fish is small enough that the fillets come off thin and can be cured through in twenty minutes, and firm enough that they hold together through the pressing and tossing that follow. In Europe, the honest choices are very fresh sea bream, sea bass, or — if you can get it — fresh whiting, all of which must be sashimi-grade and must have been frozen to -20°C for at least 24 hours before being eaten raw. This is not optional and is not a Western squeamishness; parasite risk in wild marine fish is real, and freezing is the only reliable control.

The technique that separates gỏi cá from ceviche is the pressing. After the fillets are sliced, they are salted briefly and then squeezed — hard, in a clean cloth — until a startling amount of water comes out. Only then does the lime go on. This ordering is the whole method. Fish flesh is roughly 75% water, and if you pour acid onto wet fillets, the acid is immediately diluted, the cure is weak and slow, and the finished gỏi is watery and slack. Press the water out first and the lime hits concentrated protein: it denatures the surface fast, the flesh firms and turns opaque within minutes, and the finished fish is dense and almost crunchy. Vietnamese cooks describe a good gỏi cá as "giòn" — crisp — which sounds like a strange word for raw fish until you have eaten one made this way.

Thính — roasted rice powder — is the third element and it does three jobs simultaneously. Raw rice is dry-toasted to a deep nutty brown and ground to a coarse powder; tossed through the cured fish, it absorbs the last residual moisture, coats each slice in a fine dry layer that stops them clumping, and adds a toasted, nutty aroma that binds the whole thing together. It is used in every gỏi and every nem chua across Vietnam for exactly these reasons. Then the fish is wrapped in lá sung — fig leaf, faintly furry, mildly astringent, a Hà Tĩnh non-negotiable — with a thick sauce of pounded peanut, sesame and the fish's own lime juice, and eaten immediately, with rice wine, standing up, in company.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'cá đục (sillago / silver whiting), whole, landed the same day',
          note: `SAFETY, AND THIS IS NOT NEGOTIABLE OUTSIDE VIETNAM: fish eaten raw must be sashimi-grade and must have been frozen at -20°C for at least 24 hours (or -35°C for 15 hours) to kill parasites. Buy from a fishmonger who can confirm this. In Europe: sashimi-grade sea bream, sea bass, or whiting. If you cannot verify the freezing, do not make this dish raw — the same dressing works with lightly seared fish, and it is a different but honest preparation.`,
        },
        { amount: 1, unit: 'tbsp', name: 'fine salt (for the pressing)' },
        {
          amount: 6,
          name: 'limes (about 120 ml juice)',
          note: `Fresh, always. Bottled lime juice has been pasteurized and its acid concentration is inconsistent — and here the acid IS the cooking.`,
        },
        { amount: 2, unit: 'tbsp', name: 'rice wine (optional)', note: `A traditional first rinse for the fillets. The alcohol strips residual surface odor compounds that neither water nor salt can reach.` },
      ],
    },
    {
      title: 'Thính and the toss',
      items: [
        {
          amount: 60,
          unit: 'g',
          name: 'raw rice (for thính), dry-toasted and coarsely ground',
          note: `Toast raw rice grains in a dry pan over medium heat, stirring constantly, until deep golden-brown and intensely nutty — 8-10 minutes. Grind coarse, not to flour. Absorbs residual moisture, prevents clumping, and adds the toasted aroma that defines every gỏi in Vietnam. Make it fresh; it goes stale and dusty within days.`,
        },
        { amount: 3, name: 'shallots, very thinly sliced' },
        { amount: 30, unit: 'g', name: 'young ginger, finely julienned' },
        { amount: 2, name: 'red chilies, finely sliced' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 30, unit: 'g', name: 'rau răm and rau húng, roughly chopped' },
      ],
    },
    {
      title: 'The peanut-sesame sauce',
      items: [
        { amount: 80, unit: 'g', name: 'roasted peanuts, pounded coarse' },
        { amount: 30, unit: 'g', name: 'roasted white sesame seeds, pounded' },
        {
          amount: 100,
          unit: 'ml',
          name: 'the lime juice pressed out of the fish, strained',
          note: `Do not throw this away. It is lime juice saturated with the fish's own dissolved protein and free amino acids, and it is the most savory liquid in the recipe. Reusing it in the sauce is the trick that makes a Nghi Xuân gỏi cá taste different from a generic one.`,
        },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 4, name: 'cloves garlic, pounded' },
        { amount: 2, name: 'chilies, pounded' },
        { amount: 1, unit: 'tbsp', name: 'roasted rice powder (thính), to thicken' },
      ],
    },
    {
      title: 'The wrap platter',
      items: [
        {
          amount: 30,
          name: 'lá sung (fig leaves), young and soft',
          note: `The Hà Tĩnh wrapper and a genuine requirement — faintly furry, mildly astringent, slightly bitter, and it binds directly to the fat of the peanut sauce the way tannin binds to fat in tea. If unavailable in Europe, young grape leaves or perilla layered two-deep are the nearest substitutes.`,
        },
        { amount: 20, name: 'sheets of rice paper (bánh tráng)' },
        { amount: 100, unit: 'g', name: 'herbs: tía tô, kinh giới, húng quế, rau răm' },
        { amount: 1, name: 'green (unripe) banana, thinly sliced' },
        { amount: 1, name: 'star fruit (khế), thinly sliced' },
        { amount: 1, name: 'cucumber, in batons' },
        { amount: 1, name: 'bottle of rice wine', note: `Structural. Gỏi cá is a mồi nhậu dish — it is eaten with alcohol, standing, in company, and the wine is part of the preparation rather than an accompaniment to it.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Fillet the fish while it is still stiff — and skin it',
      description: `Scale, gut and fillet the fish. Remove the skin entirely and pull out every pin bone with tweezers. Rinse the fillets briefly in rice wine, then in cold water, and pat dry.

Slice the fillets on a shallow diagonal into pieces about 3-4 mm thick. The flesh should be firm, translucent-white, faintly springy, and should smell of clean seawater and nothing else. If it smells of ammonia or of fish, stop — the fish is not fresh enough for this dish and no amount of lime will fix it.

Work fast and keep the fish cold. Every minute the fillets spend at room temperature is a minute of bacterial growth and enzymatic softening.`,
      tip: `Skin off, always. Fish skin carries the majority of the surface bacterial load and most of the trimethylamine that gives fish its fishy smell, and unlike in a cooked preparation, none of it is going to be killed or driven off by heat. It is also tough and unpleasant raw. Every raw fish preparation in Vietnam — gỏi cá đục, gỏi cá trích, gỏi cá mai — begins with removing the skin, and it is a food-safety decision as much as a textural one.`,
    },
    {
      title: 'Salt and press — squeeze out the water, and be ruthless',
      description: `Toss the sliced fish with the salt and leave 10 minutes. Then wrap the fish in a clean cotton cloth and squeeze — hard, with real force, over a bowl — until no more liquid comes out. You should extract several tablespoons of cloudy water. Discard it.

The pressed fish should look and feel noticeably drier, denser and firmer, and the slices should separate rather than clump.

This is the step that everyone underestimates, and skipping it is the difference between a gỏi cá that is crisp and dense and one that is watery and slack. Squeeze harder than feels reasonable.`,
      tip: `Salt draws water out of the fish by osmosis, breaking down the cell membranes at the surface and releasing free water from the muscle. Removing that water before the lime goes on means the acid arrives undiluted, and undiluted acid denatures protein fast and evenly — the fillets firm up within minutes rather than slowly turning mushy over an hour. This is the fundamental difference between Vietnamese gỏi cá and Latin American ceviche, where the fish sits in a large volume of acid and stays soft. Pressing is what makes gỏi cá crunchy.`,
    },
    {
      title: 'Cure in lime — 20 minutes, and watch the color',
      description: `Pour the lime juice over the pressed fish, toss to coat every slice, and leave 20 minutes, tossing once at the halfway point.

Watch the flesh. It goes from translucent grey-white to solid, opaque white — the same visual change that heat produces, because the same thing is happening chemically. Twenty minutes is enough for a 4 mm slice. A slice cut in half should be opaque all the way through with, at most, a faint translucent line at the very center.

Then press again. Squeeze the fish in the cloth a second time and — this is important — KEEP the lime juice that comes out. It goes into the sauce. Over-curing past 40 minutes turns the flesh chalky, dry and crumbly, so do not leave it and walk away.`,
      tip: `Acid denaturation and heat denaturation do the same thing by different routes. Heat gives protein molecules enough kinetic energy to shake apart their folded structure; acid changes the electrical charge on the amino acid side chains until the folded structure repels itself apart. Either way the protein unfolds and reassembles into an opaque, firm network — which is why acid-cured fish looks and feels cooked. The difference is that acid works from the outside inward at a fixed rate and never stops, so timing is the only control you have. Twenty minutes. Then get it out.`,
    },
    {
      title: 'Toss with thính and aromatics — dry, and at the last minute',
      description: `Toss the twice-pressed fish with the roasted rice powder, shallot, ginger, chili and sugar until every slice is coated in a fine dry layer and the pieces fall apart cleanly rather than sticking together. Fold in the chopped rau răm and húng last.

The finished gỏi should look dry, not wet — matte, nubbly with rice powder, with visible shreds of ginger and shallot. If it looks wet, you did not press it hard enough at step 3, and you should press again before adding more thính.

Do this immediately before serving. Thính starts absorbing moisture the moment it touches the fish, and after fifteen minutes it goes from dry and nutty to pasty.`,
      tip: `Thính is one of the most elegant ingredients in the Vietnamese pantry and it works on three axes at once. Physically, toasted rice is hygroscopic and porous — it soaks up the last of the surface moisture and keeps the slices separate. Chemically, dry-roasting rice at around 180°C drives the Maillard reaction and produces pyrazines and furans, giving that deep nutty-popcorn aroma. And structurally, it gives the fish a coarse, sandy surface texture that provides contrast against the smooth flesh. Nothing else in the pantry does all three.`,
    },
    {
      title: 'Pound the sauce, wrap in fig leaf, and eat immediately',
      description: `Pound the garlic and chili, then work in the peanuts and sesame. Stir in the reserved lime juice from the fish, the fish sauce and the sugar, and thicken with a tablespoon of thính until the sauce coats a spoon heavily — it should be a thick paste, not a dipping liquid.

Lay a fig leaf on a sheet of rice paper, add herbs, a slice of green banana, a slice of star fruit, then a pinch of the gỏi. Spoon on the peanut sauce, roll tight, and eat.

Serve everything at once and eat it fast, with rice wine. The gỏi has a working life of about twenty minutes: the lime continues to cure the fish even after tossing, and by the half-hour mark it has gone from firm and crisp to dry and chalky. This dish does not wait, and in Nghi Xuân nobody expects it to.`,
      tip: `The sauce is thick rather than thin, and this is deliberate. Every other Vietnamese fish preparation is dipped into a thin nước chấm, because the fish is fatty or fried and the sauce needs to cut through it. Gỏi cá đục is the opposite problem: the fish is raw, lean, acidic and dry, so the sauce must supply what the fish lacks — fat, richness, body, and toasted depth. Match the condiment to the deficiency of the dish, not to the tradition. That is the whole grammar of Vietnamese condiments, and gỏi cá đục is the clearest possible demonstration of it.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
