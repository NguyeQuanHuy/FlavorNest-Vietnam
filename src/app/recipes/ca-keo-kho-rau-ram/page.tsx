'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-keo-kho-rau-ram',
  title: `Cá Kèo Kho Rau Răm (Mud Goby Braised Dry with Vietnamese Coriander)`,
  subtitle: `The same thumbnail-length mud gobies the lẩu cá kèo dropped live into a sour hotpot — here braised dark and slow in a caramel-fish-sauce kho with black pepper and a blanket of rau răm pressed over the top, until the sauce reduces to a sticky glaze and the tiny bones soften to edibility. The goby that was a ten-second hotpot experience, reimagined as a thirty-minute meditation.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '40 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/ca-keo-kho-rau-ram.jpg',
  intro: `The cá kèo has already appeared in this collection in the lẩu cá kèo Tịnh Biên — the sour hotpot where live gobies were dropped into boiling lá giang broth and eaten whole in ten seconds. That was the fast version, the communal version, the sixty-fish-in-twenty-minutes version. This is the slow version: the same fish, braised in the kho format — caramelised, simmered in fish sauce and pepper until the sauce is almost gone and every fish is glazed — and eaten with rice in the silence of a Tuesday afternoon rather than the noise of a Saturday evening.

The kho format changes the goby completely. In the hotpot the fish cooked in ten seconds and was eaten immediately — the flesh was barely set, the bones were barely softened, and the eating was a race between the chopsticks and the clock. In the kho the fish cooks for twenty-five to thirty minutes in a small, covered clay pot at a bare simmer, and the extended cooking does what the brief hotpot could not: the bones — already thin, already hair-like in a fish this small — soften completely in the caramel's mild acidity, the flesh absorbs the dark, sweet-salty kho sauce to its centre, and the rau răm pressed over the top wilts into the pot and weaves its peppery, soapy, slightly citric perfume through every fish. The goby that was a fresh, acid, ten-second bite is now a dark, glazed, thirty-minute bite, and the two versions — same fish, same bones, different cooking, different table — are as different as a sashimi and a braise from the same tuna.

The rau răm is not a garnish here — it is a structural ingredient. A thick layer of the herb is laid over the fish before the lid goes on, and during the braise the rau răm does three things: it steams in the sauce's vapour and releases its volatile oils (principally decanal and dodecanal — the aldehydes that carry the herb's characteristic peppery-soapy-lemony scent) into the pot's headspace, where they condense on the fish's surface; it wilts and collapses into the sauce, thickening it slightly with its released plant fibre; and it provides a green, aromatic mat that insulates the fish from the lid's dripping condensation, which would otherwise dilute the concentrating sauce. The rau răm is the lid's interior design, the sauce's thickener and the fish's perfumer, all from one handful of herb.

The eating is the quietest in the collection: a small clay pot, four bowls of rice, pickled vegetables, and the silence of a meal that requires no conversation because the food is rich enough to fill the silence. The pot sits on the table and each person reaches in with chopsticks, lifts a glazed, dark, bone-soft goby, sets it on the rice, and eats — bones and all, head and all, in two or three bites. One goby per mouthful of rice. Ten gobies per bowl. The pot holds forty, and a family of four eats it in twenty minutes, which is the same twenty minutes the hotpot took but at a tenth of the volume and a hundred times the concentration.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'cá kèo (mud gobies), cleaned',
          note: `Live or very fresh. Cleaned: rinsed, purged if live (in clean water 2-4 hours). Some cooks gut the tiny fish by squeezing the belly; others leave them whole (the gut mass is negligible at this size and dissolves in the braise). Either is traditional. In Europe: fresh sprats, whitebait or small fresh anchovies — any small, whole, bone-soft fish that can be eaten entire after braising.`,
        },
      ],
    },
    {
      title: 'The kho',
      items: [
        {
          amount: 1.5,
          unit: 'tbsp',
          name: 'sugar (for a medium caramel)',
          note: `Medium amber — the same register as the thịt kho trám đen. Dark enough for toffee depth, not so dark that it overwhelms the goby's delicate sweetness.`,
        },
        { amount: 1, unit: 'tbsp', name: 'water (to stop the caramel)' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tbsp', name: 'soy sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar (additional)' },
        { amount: 100, unit: 'ml', name: 'water or coconut water', note: `Just enough to barely cover the fish — the kho reduces to a glaze, and too much liquid means too much time and a sauce that never concentrates.` },
        { amount: 1, unit: 'tsp', name: 'ground black pepper, coarsely cracked', note: `Generous — the pepper-on-small-fish pairing is the same partnership the Huế kho tiêu established. Black pepper's piperine cuts through the caramel's sweetness and the fish sauce's salt.` },
        { amount: 3, name: 'shallots, sliced thin' },
        { amount: 2, name: 'cloves garlic, sliced' },
        { amount: 1, name: 'red chili, sliced (optional)' },
      ],
    },
    {
      title: 'The rau răm blanket',
      items: [
        {
          amount: 100,
          unit: 'g',
          name: 'rau răm (Vietnamese coriander), whole sprigs, washed',
          note: `A THICK LAYER — not a scatter, not a garnish. The rau răm is pressed over the fish as a continuous mat before the lid goes on. It steams, wilts, perfumes and insulates simultaneously.`,
        },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 200, unit: 'g', name: 'dưa leo (cucumber), sliced — the fresh crunch against the dark braise' },
        { amount: 200, unit: 'g', name: 'canh (clear soup) — the mandatory kho partner' },
      ],
    },
  ],
  steps: [
    {
      title: 'Caramel, shallots, fish, sauce, pepper — layered in a clay pot',
      description: `Make the caramel: melt the 1.5 tablespoons of sugar in a small clay pot (or heavy saucepan) over medium heat, swirling. Stop at medium amber — dark honey colour. Add the water to stop. Add a splash of oil, then the shallots and garlic — fry 30 seconds in the caramel until fragrant.

Lay the cleaned gobies in the pot in a single layer — or two layers if the pot is small, but avoid piling three deep (the bottom layer overcooks before the top layer starts). Pour the fish sauce, soy sauce, additional sugar and the water over the fish. The liquid should come about halfway up the fish — NOT fully submerging. Scatter the cracked black pepper and sliced chili over the top.

Now the rau răm: lay the whole sprigs over the fish in a thick, continuous blanket that covers the pot's surface. Press down gently so the herbs contact the fish underneath. The mat should be 2-3 cm thick — dense enough that lifting the lid later reveals green rather than fish.`,
      tip: `The clay pot — nồi đất — is the traditional kho vessel because its thermal properties match the kho's requirements. Clay conducts heat slowly (about 1 W/m·K, similar to the tile in the bò nướng ngói), distributes it evenly, and retains it long after the flame is off — which means the sauce continues reducing gently during the resting period after the flame is cut. A metal pot conducts heat fast, creates hot spots, and cools quickly — producing a kho with a scorched bottom and a thin sauce. The clay pot is the kho's designated vessel for the same reason it was the bò nướng ngói's designated grill: slow heat, even distribution, thermal forgiveness.`,
    },
    {
      title: 'Braise 25-30 minutes, lid on — the bones soften, the sauce glazes',
      description: `Cover the pot. Bring to a bare simmer over the lowest heat — a bubble every 4-5 seconds, no more. Hold for 25-30 minutes. DO NOT STIR — the gobies are too small and too fragile to survive a spoon, and stirring breaks them into a purée that is food but is not cá kèo kho.

Instead: tilt the pot gently every 10 minutes and spoon the pooled sauce from one side over the rau răm blanket, letting it seep through the herbs back down to the fish. This basting-through-herbs distributes the concentrating sauce and the herb's released volatiles simultaneously.

At 25 minutes: lift the lid. The rau răm has wilted from a green blanket to a dark, collapsed, herb-infused mat. The sauce has reduced from 100 ml to perhaps 2-3 tablespoons of dark, glossy, sticky glaze. The fish — visible now under the wilted rau răm — are dark, glazed, intact in shape but soft throughout.

The test: lift one goby with chopsticks. It should hold together (if it falls apart, the heat was too high). Bite through it — the bones should be IMPERCEPTIBLE. If you feel a prickle: 5 more minutes, lid on, lowest heat.

Off the heat. Rest 5 minutes with the lid on — the clay pot's retained heat finishes the last degree of bone-softening and the sauce sets from liquid-glaze to sticky-glaze as it cools from 100°C to 80°C.`,
      tip: `The bone-softening mechanism here is the same acid-and-time dissolution documented in every small-fish kho in the collection — the cá linh kho lạt (20 minutes, pale caramel), the Huế cá bống kho (45 minutes, dark caramel), and now this (30 minutes, medium caramel). The acid is the caramel's own weak organic acids plus the fish sauce's acetic and amino acids, and they dissolve the goby's hydroxyapatite (calcium phosphate) bone mineral at a rate governed by the acid concentration and the bone thickness. A cá kèo's bones are thinner than a cá linh's (the goby is smaller), so they dissolve faster — 25-30 minutes is sufficient where the cá linh needed 18-20. The bone thickness IS the timer, and a cook who knows the fish's size knows the braise time without being told.`,
    },
    {
      title: 'Eat from the pot — bone-soft gobies on rice, in the quiet',
      description: `Bring the clay pot to the table — the pot is the serving vessel, and the presentation is the pot itself: dark, glazed, herb-blanketed, steaming faintly, smelling of rau răm and caramel and fish sauce and pepper.

Each person reaches in with chopsticks, lifts one or two gobies from under the herb mat, and sets them on the rice. The glaze — dark, sticky, concentrated — transfers from the fish to the rice on contact, and the rice around each fish darkens with absorbed sauce.

Eat whole — head, tail, bones, everything — in two bites. The first bite: the caramel's toffee-sweet-bitter, the fish sauce's salt, the pepper's warmth, and the rau răm's peppery-soapy-citric perfume arriving through the glaze. The second bite: the goby's own flesh — sweet, dense, delicate, and — if the braise was right — completely, utterly, bone-free in the mouth.

The contrast with the lẩu cá kèo is now complete and instructive: same fish, same bones, two formats. The lẩu was fast, sour, communal and loud — sixty fish in twenty minutes, in an acid broth, at a table of shouting. The kho is slow, sweet-salty, solitary and quiet — forty fish in twenty minutes, in a caramel glaze, at a table of rice. The fast version was the fish at ten seconds — fresh, acid-softened, barely cooked. The slow version is the fish at thirty minutes — glazed, caramel-infused, bones dissolved. The goby did not change. The time changed, and the time wrote two completely different meals from the same animal in the same mud.`,
      tip: `Cá kèo kho rau răm and lẩu cá kèo lá giang are the collection's most dramatic same-ingredient-different-format pair: one fish, two preparations, two eating experiences that share nothing except the animal. The pair proves the principle the collection has argued from its first page: a recipe is not an ingredient — it is a relationship between an ingredient and a technique, and changing the technique changes the dish more profoundly than changing the ingredient. A cá kèo in a hotpot and a cá kèo in a kho are two different dishes. A cá kèo in a kho and a cá lóc in a kho are the same dish. The technique is the identity. The fish is the material. And the cook who understands this can take any fish in the paddy and make any kho in the canon, because the format is the recipe, and the format accepts whatever swims.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
