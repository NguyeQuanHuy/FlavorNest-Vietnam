'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'lau-mam-dong-thap',
  title: `Lẩu Mắm Đồng Tháp (Fermented Fish Hotpot of the Mekong Flood Season)`,
  subtitle: `A hotpot broth built from mắm cá linh — the fermented silver barb of the annual Mekong flood — simmered with lemongrass, galangal and garlic until the raw ferment mellows into a dark, savoury, intoxicating base, then loaded at the table with everything the floodplain gives: catfish, shrimp, pork belly, eggplant, bông điên điển, water spinach, bitter gourd, and whatever else the morning market provided. The Delta's most extravagant communal pot.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/lau-mam-dong-thap.jpg',
  intro: `The Mekong floods every year. From July to November the water rises across the Đồng Tháp Mười — the Plain of Reeds, the vast floodplain that gives the province its name — and with it comes the cá linh, the silver barb, migrating downstream from Tonlé Sap in numbers so enormous that the nets come up silver. The linh season is a short, violent bounty: too many fish, too fast, for any household to eat fresh. What the Delta does with the surplus is what every river culture has always done — it ferments: salts the fish, jars it, waits, and six months later opens a pot of mắm cá linh, the dark, pungent, profoundly umami paste that is the Mekong's own fish sauce, chunkier and fiercer than the refined nước mắm of the coast, and the foundation of the Delta's most theatrical dish.

Lẩu mắm is a hotpot, and it is the Delta's answer to a specific social and agricultural question: what do you cook when the floodplain has receded, the mắm is ready, and every ingredient the wetland produces is in season at once? The answer is: everything. The pot is communal, the table is loaded, and the broth runs for two hours while people eat, talk, drink and add things at whatever pace suits the evening. It is the Mekong's most generous dish, and its generosity is structural: the fermented base is concentrated enough to season an enormous volume of fresh protein and vegetables, and the fresh ingredients, as they cook in the broth, season it in return. The pot deepens as the evening progresses — each piece of catfish, each handful of water spinach, each blossom of điên điển leaves something behind — and the last bowl of broth, ladled over bún after the eating has stopped, is the richest liquid of the night.

The broth construction is the technique, and it requires cooking the mắm before it meets the table. Raw mắm cá linh stirred directly into boiling water gives a harsh, sharp, aggressively pungent pot that pushes half the table back. The Delta method fries the mắm first: dissolved, strained, and then simmered with a heavy aromatic base — lemongrass, galangal, garlic, shallots, chili — for twenty to thirty minutes, until the volatile amines that carry the raw ferment's challenging top note have been driven off and the paste's deeper character — malty, earthy, cheesy, overwhelmingly savoury — has emerged and married with the aromatics. This bloomed mắm broth is the dish's engine, and getting it right is the single most important step: too raw and the pot smells of the jar; too cooked and the ferment's complexity has been boiled flat. The window is fifteen to twenty minutes of gentle simmering after the bloom, and the signal is in the nose: when the kitchen smells of lemongrass and something deeply savoury rather than of raw fermented fish, the broth is ready.

The ingredients that go into the pot are a roll call of the Mekong floodplain's biodiversity, and their variety is not excess — it is the design. Cá lóc (snakehead), cá basa or cá tra (catfish), shrimp, pork belly, sliced squid. Then the vegetables: eggplant (cà tím, cut in wedges), bitter gourd (khổ qua, sliced thin), water spinach (rau muống), morning glory, banana blossom, mushrooms. And then — the seasonal signature that marks the dish as Đồng Tháp — bông điên điển, the vivid yellow blossoms of the Sesbania sesban tree that grows along every canal and rice-paddy bund in the province and that flowers precisely when the floodwater recedes. The blossoms are slightly sweet, faintly bitter, and they wilt in the hot broth in seconds; they are there for colour, for season, and for the taste of the specific few weeks after the flood that no other ingredient carries.`,
  ingredientSections: [
    {
      title: 'The mắm broth',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'mắm cá linh or mắm cá sặc (fermented Mekong fish)',
          note: `The foundation. Sold in jars at Vietnamese groceries — a dark, chunky, pungent paste of fermented freshwater fish. Dissolve in 500 ml warm water, stir hard to break it up, and strain through a fine sieve. Keep the strained liquid (all the flavour); discard the gritty residue (all the texture problems). If mắm cá linh is unavailable: mắm cá sặc is the closest relative; anchovy-based mắm nêm is a distant but workable fallback that changes the dish's register from river to sea.`,
        },
        { amount: 2, unit: 'L', name: 'water or light pork stock' },
        { amount: 4, name: 'stalks lemongrass, bruised and knotted' },
        { amount: 40, unit: 'g', name: 'galangal, sliced and bruised' },
        { amount: 8, name: 'cloves garlic, smashed' },
        { amount: 4, name: 'shallots, sliced' },
        { amount: 3, name: 'red chilies — 2 whole, 1 sliced' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'sugar', note: `The Delta sweetness — rounds the ferment's salt edge and lets the mắm's deeper flavours emerge.` },
        { amount: 2, unit: 'tbsp', name: 'neutral oil (for frying the aromatics)' },
        { amount: 1, unit: 'tbsp', name: 'annatto oil (dầu điều, optional)', note: `For a warm reddish tinge to the broth — traditional in many Đồng Tháp versions.` },
      ],
    },
    {
      title: 'The proteins (the more, the merrier)',
      items: [
        { amount: 300, unit: 'g', name: 'cá lóc (snakehead) or cá basa, in thick slices or chunks', note: `The river fish. Bone-in if available — the bone seasons the broth.` },
        { amount: 200, unit: 'g', name: 'shrimp, shell-on', note: `Shell-on so the shells contribute their carotenoid colour and their inosinate to the pot.` },
        { amount: 200, unit: 'g', name: 'pork belly, sliced thin', note: `The fat. A mắm broth without pork fat is lean and sharp; the belly rounds it.` },
        { amount: 150, unit: 'g', name: 'squid, cleaned and scored (optional)' },
        { amount: 150, unit: 'g', name: 'chả cá (fried fish cakes), sliced', note: `Bought — the golden springy cakes from any Vietnamese grocer.` },
      ],
    },
    {
      title: 'The vegetables and blossoms — the floodplain on a tray',
      items: [
        { amount: 2, name: 'Asian eggplant (cà tím), cut in wedges' },
        { amount: 1, name: 'bitter gourd (khổ qua), halved, seeded, sliced thin', note: `Its bitterness against the fermented broth is a specific and deliberate contrast — the same palate-reset principle as green banana beside fried fish.` },
        { amount: 200, unit: 'g', name: 'rau muống (water spinach), cut in lengths' },
        { amount: 150, unit: 'g', name: 'bắp chuối (banana blossom), shredded, in lime water' },
        { amount: 100, unit: 'g', name: 'mushrooms (oyster, straw or enoki)' },
        {
          amount: 100,
          unit: 'g',
          name: 'bông điên điển (Sesbania sesban blossoms)',
          note: `The Đồng Tháp signature — vivid yellow, slightly sweet, faintly bitter, and in season precisely when the floodwater recedes. Sold occasionally frozen at larger Vietnamese groceries abroad. If unavailable: squash blossoms or day-lily buds gesture at the colour and the delicacy, but honestly, the dish is still a lẩu mắm without them and a complete one. With them it is a Đồng Tháp lẩu mắm, and the difference is the season.`,
        },
        { amount: 100, unit: 'g', name: 'đậu bắp (okra), halved lengthwise (optional)' },
        { amount: 50, unit: 'g', name: 'rau đắng (bitter herb), if available', note: `A specific bitter green the Delta puts into lẩu mắm and into almost nothing else — its intense bitterness acts as the broth's internal palate-reset.` },
      ],
    },
    {
      title: 'The noodles and table',
      items: [
        { amount: 600, unit: 'g', name: 'fresh bún (rice vermicelli)' },
        { amount: 50, unit: 'g', name: 'rau răm, húng quế, ngò gai — torn' },
        { amount: 3, name: 'red chilies, sliced, in fish sauce' },
        { amount: 1, name: 'lime, in wedges' },
      ],
    },
  ],
  steps: [
    {
      title: 'Bloom the mắm — fry the aromatics, simmer the strained paste, and wait for the nose',
      description: `Dissolve the mắm in 500 ml warm water. Stir hard, mash any chunks, and strain through a fine sieve into a bowl. Keep the strained liquid; discard the grit.

Heat the oil in a heavy pot. Fry the garlic, shallots and sliced chili until golden and fragrant — 2 minutes. Add the lemongrass, galangal, whole chilies and annatto oil. Stir 30 seconds.

Pour in the strained mắm liquid. It will sizzle, darken, and fill the kitchen with a smell that is initially challenging and progressively appetising. Simmer gently 15-20 minutes, stirring occasionally.

The bloom is ready when the kitchen smells of lemongrass and deep savouriness rather than of raw fermented fish. The shift is unmistakable in the nose and it happens between minute 12 and minute 18 — the volatile amines (trimethylamine, the fishy top note) have boiled off, and the less volatile glutamates and Maillard compounds underneath have been released. This is the same frying-the-ferment step this collection documented with the sour bamboo in the Tuyên Quang duck and with the mắm tép in the Tây Ninh chưng: heat in fat edits the volatiles.

Add the fish sauce, sugar and the 2 L of water or stock. Bring to a simmer and taste: deeply savoury, faintly sweet, aromatic, with the mắm's earthiness running underneath like a bass line. If it is too sharp, add sugar. If it is flat, add a splash more of the strained mắm. This is the base, and it must be right before the pot goes to the table.`,
      tip: `The straining is non-negotiable and it is the difference between a clear, professional, deeply flavoured broth and a gritty, murky, amateur one. Raw mắm cá linh contains bone fragments, scales, undissolved fibre and sediment that, if poured directly into the pot, settle as a grey sludge that clouds the broth and gives every spoonful a sandy, muddy texture. Dissolved, stirred and strained, the same paste yields a clear, copper-brown, intensely flavoured liquid — all flavour extracted, all grit left behind. This is the same straining discipline the bún nước lèo uses with mắm bò hóc, and every Delta cook who makes either dish treats straining as the first and most sacred step of the morning.`,
    },
    {
      title: 'Set the pot on the table — proteins first, then vegetables in waves',
      description: `Transfer the bloomed broth to a hotpot vessel over a burner and bring it back to a lively simmer at the table. Set out the protein tray, the vegetable tray and the noodle bowls around it.

Start with the proteins: lower the fish pieces and the pork belly into the simmering broth — they need 6-8 minutes and they season the pot as they cook. Add the shrimp and the squid 3-4 minutes later — they need 2-3 minutes and overcooking them is the most common table-side error. The chả cá go in whenever — they are already cooked and just need warming.

Then the vegetables, in waves: eggplant first (it drinks broth and softens in 4 minutes), bitter gourd with it (same time), mushrooms next. Water spinach and banana blossom go in last, by the handful, and come out within a minute.

And the bông điên điển — the yellow blossoms — go in at the very last moment, one handful at a time, and are eaten within 20 seconds of touching the broth. They wilt instantly and their delicate sweetness vanishes into the pot if left in for more than a minute. Drop, lift, eat. They are the most ephemeral ingredient in the pot and in the entire collection.`,
      tip: `The pot deepens as the evening runs. Every piece of fish that cooks in it deposits gelatin and amino acids; every shrimp deposits inosinate; every piece of pork deposits fat that carries flavour across the broth's surface. By the second hour the broth is measurably richer, darker and more savoury than it was at the start, and the last bowl — ladled over bún after the eating has stopped — is the best liquid of the night. This is the same hotpot-as-trajectory principle the collection documented with the gà nòi lá cách in Vĩnh Long and the bò tùng xẻo in Tây Ninh: a communal pot is a running tally of everything that passed through it, and the final act is always drinking the score.`,
    },
    {
      title: 'Ladle over bún — and eat the broth that the evening made',
      description: `Put bún in individual bowls. Each person ladles broth, fish, vegetables and whatever they want from the communal pot over their own noodles. Scatter herbs, squeeze lime, add chili.

The lẩu mắm bowl is not a composed dish — it is a salvage operation, a snapshot of whatever the pot contains at the moment the ladle goes in, and no two bowls are the same. One gets the last piece of snakehead; another gets a shrimp and three okra; a third gets mostly broth and banana blossom. The randomness is the format, and the format is the reason nobody argues.

And the final bowl: after the proteins are gone, after the vegetables are gone, after the table has leaned back — one last ladleful of the concentrated, dark, savoury, aromatic broth, over a small nest of fresh bún, with nothing else. This is the closing act of every lẩu mắm in the Delta, and the broth at this point has been working for two hours and carries the contribution of every ingredient that passed through it. It is the richest, deepest, most complete liquid of the evening, and it is drunk slowly, quietly, with whatever conversation is left, and with the knowledge that the cá linh that made the mắm came down the river six months ago in a flood that will come again, and that the bông điên điển that went into the pot tonight flowered because the flood receded, and that the whole cycle — flood, fish, ferment, flower, pot — is the dish.`,
      tip: `Lẩu mắm is the Mekong Delta's most complete self-portrait in a single pot: the flood gave the fish, the ferment preserved it, the recession grew the blossoms, the canals raised the shrimp, the paddies raised the snakehead, the gardens gave the eggplant and the bitter gourd, and the palm trees gave the sugar. Nothing in the pot comes from further than the province, and most of it comes from the same flooded plain that gave the province its name. A cuisine is, in the end, a landscape eating itself — and lẩu mắm is the Đồng Tháp Mười, the Plain of Reeds, arranged around a burner, in a broth made from last year's flood, garnished with this year's flowers.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
