'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-mam-an-giang',
  title: `Bún Mắm An Giang (Fermented Fish Noodle Soup — An Giang Style)`,
  subtitle: `The broth that names itself after the jar: mắm cá lóc dissolved, strained, bloomed with lemongrass and garlic, then loaded with a parade of proteins — snakehead, shrimp, squid, pork belly, eggplant — over rice vermicelli. Darker and more mắm-forward than the Đồng Tháp lẩu mắm, because An Giang is the mắm capital and the bowl does not dilute its own argument.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/bun-mam-an-giang.jpg',
  intro: `Bún mắm and lẩu mắm are siblings, not twins. The Đồng Tháp lẩu mắm is a communal hotpot — a large shared pot, ingredients added over an evening, the broth deepening as the night runs. Bún mắm An Giang is a bowl: a single, assembled, individual-serving noodle soup delivered to the table complete. The format changes everything. A hotpot is a process; a bowl is a snapshot. The cook must build into one bowl what the hotpot builds over an evening, and that means the mắm concentration is higher, the blooming more assertive, and the finished liquid darker, denser and more directly fermented than any lẩu would dare.

An Giang's bún mắm uses mắm cá lóc — the prestige mắm of Châu Đốc, made from whole snakehead fillets, aged six months to a year — and uses more of it per litre than any other mắm dish in this collection. The broth is not a fish stock with mắm stirred in; it is a mắm broth with just enough water to make it pourable. The bowl smells of fermented fish first and of everything else second, and the people who love it love it for exactly that directness.

The toppings are the Delta's maximum-protein architecture: cá lóc chunks, shrimp (shell-on), squid (scored and curled), pork belly (for fat), and eggplant (absorbing the dark broth like a sponge). Over the top go rau muống bào, bắp chuối, bean sprouts, herbs — and the bowl arrives as a dark, aromatic, multi-layered, unapologetically fermented construction that is as far from a clean phở as Vietnamese noodle soup can travel.

The bowl is a market breakfast — served at An Giang's town markets and the Châu Đốc riverfront — and it is the bowl the mắm makers eat themselves. They do not dilute their own product. They pour it bold, and the bowl is the proof that the jar was good.`,
  ingredientSections: [
    {
      title: 'The mắm broth',
      items: [
        { amount: 250, unit: 'g', name: 'mắm cá lóc or mắm cá sặc', note: `Dissolve in 400 ml warm water, mash, strain through a fine sieve. More than the lẩu mắm — this broth IS the mắm.` },
        { amount: 500, unit: 'g', name: 'pork bones, blanched and rinsed', note: `For body and gelatin the mắm broth alone lacks.` },
        { amount: 1.5, unit: 'L', name: 'water' },
        { amount: 3, name: 'stalks lemongrass, bruised and knotted' },
        { amount: 6, name: 'cloves garlic, smashed' },
        { amount: 3, name: 'shallots, sliced' },
        { amount: 2, name: 'dried chilies, whole' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tbsp', name: 'annatto oil (dầu điều)' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The proteins',
      items: [
        { amount: 250, unit: 'g', name: 'cá lóc, thick chunks, bone-in' },
        { amount: 200, unit: 'g', name: 'shrimp, shell-on' },
        { amount: 150, unit: 'g', name: 'squid, scored crosshatch, cut into pieces' },
        { amount: 150, unit: 'g', name: 'pork belly, sliced thin' },
        { amount: 2, name: 'Asian eggplants, cut in wedges' },
        { amount: 100, unit: 'g', name: 'chả cá, sliced (optional)' },
      ],
    },
    {
      title: 'The noodles and platter',
      items: [
        { amount: 600, unit: 'g', name: 'fresh bún (rice vermicelli)' },
        { amount: 100, unit: 'g', name: 'rau muống bào (shredded water spinach stems)' },
        { amount: 150, unit: 'g', name: 'bắp chuối, shredded, in lime water' },
        { amount: 200, unit: 'g', name: 'bean sprouts' },
        { amount: 50, unit: 'g', name: 'rau răm, húng quế, ngò gai' },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 3, name: 'bird\'s-eye chilies, sliced, in fish sauce' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the pork stock, bloom the mắm, combine — the broth is everything',
      description: `Simmer the blanched pork bones in 1.5 L water with lemongrass for 60 minutes, skimming. Strain.

Meanwhile: heat oil and annatto oil. Fry garlic and shallots until golden. Add dried chilies. Pour in the strained mắm liquid. Bloom 15-20 minutes — the volatile amines evaporate, the smell shifts from sharp-raw to deep-savoury.

Combine: pour the strained pork stock into the bloomed mắm. Season with fish sauce and sugar. The broth should be assertively mắm — savoury, fermented, deep, dark, with pork-stock body and lemongrass spine. Stronger than any lẩu broth, because the bowl must deliver its full depth in the first spoonful.`,
      tip: `The concentration difference is the format difference expressed as chemistry. A lẩu runs two hours and the broth deepens progressively — it can start mild. A bún mắm bowl must deliver its full depth immediately. The mắm dose is therefore higher, the bloom longer, and the pork-stock body more critical. Same ingredient, same technique, higher stakes per bowl.`,
    },
    {
      title: 'Poach five proteins in sequence — each to its own clock',
      description: `With the combined broth at a gentle simmer, add in sequence:

Eggplant first (5-6 minutes — it absorbs the dark broth). Pork belly at minute 3 (3-4 minutes — the fat renders into the broth). Cá lóc at minute 5 (4-5 minutes — until opaque and gently flaking). Shrimp and squid at minute 8 (shrimp 2-3 minutes, squid 90 seconds — both overcook brutally). Chả cá 30 seconds to warm.

Lift all proteins out. The broth has now been enriched by five proteins in ten minutes — darker, deeper and more complex than before any entered.`,
      tip: `Each protein contributes different umami compounds: fish gives inosinate and gelatin, shrimp gives inosinate and carotenoids, squid gives glutamate and glycine, pork gives glutamate and fat, eggplant absorbs everything and delivers it as a burst when bitten. The five together give the bowl a umami spectrum no single protein can, and the bloomed mắm underneath amplifies all of them synergistically. The parade is the recipe's argument for maximum depth from maximum diversity.`,
    },
    {
      title: 'Assemble — dark broth, protein landscape, green platter',
      description: `Blanch bún 10 seconds, drain into bowls. Arrange the proteins across the top — each visible, each identifiable. Ladle the dark, hot broth over.

Serve the green platter alongside: rau muống bào, bắp chuối, bean sprouts, herbs, lime, chili. The eater builds: sprouts first, water-spinach curls for crisp contrast, herbs torn over the dark surface, lime to brighten, chili to taste.

The bowl is vivid by contrast: dark broth, pink shrimp, white squid curls, brown pork, purple eggplant, green garnish. The darkness is what every light garnish stands against.`,
      tip: `The green platter is the broth's designed counterweight — visual contrast (green against dark), textural contrast (crisp-raw against soft-cooked), and flavour contrast (grassy-clean against fermented-deep). A bún mắm without it is bass without treble — technically present, structurally incomplete.`,
    },
    {
      title: 'Eat within five minutes — and taste the mắm capital at full voice',
      description: `Eat with spoon and chopsticks. Each spoonful carries broth and noodle; each chopstick lift carries a protein piece dipped through the dark liquid. The eggplant is the sleeper — bite into a wedge and the mắm broth it absorbed floods the mouth.

Set this bowl beside the bún cá from recipe 1 and see An Giang's range: the bún cá is the light version — golden, turmeric, clean fish with a whisper of mắm. The bún mắm is the dark version — brown, mắm-forward, every protein the river offers. One province, two bowls, two registers — the same jar, dialled to two volumes.

Bún mắm hides nothing. It puts the ferment at the front and says: this is what we eat. It divides people at the line where curiosity meets familiarity. On one side: "I cannot eat this." On the other: "I cannot eat without this." The line is the same line every great fermented food draws, and crossing it in the direction of love is one of the most rewarding journeys a palate can take. The bowl is the invitation.`,
      tip: `Bún mắm is the most honest expression of mắm in the Vietnamese noodle-soup canon. A bún nước lèo softens the mắm with coconut. A lẩu mắm dilutes it across an evening. A bún cá tucks it behind turmeric. Bún mắm An Giang puts the ferment at the front of the broth and invites you to taste it undisguised. The mắm makers of Châu Đốc eat it this way every morning. They do not dilute their own product. The bowl is the jar's confidence made visible.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
