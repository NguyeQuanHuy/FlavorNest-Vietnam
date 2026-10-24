'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'chao-am-tra-vinh',
  title: `Cháo Ám Trà Vinh (Khmer-Style Fish Congee with Wild Greens)`,
  subtitle: `A thin, clear, deliberately un-thick rice soup loaded with snakehead fish, shrimp and a wilderness of greens — water spinach, banana blossom, young squash leaves, whatever the canal bank gave that morning — seasoned not with fish sauce but with mắm bò hóc and finished with a fistful of sliced scallion fried in pork fat. Not the porridge Hanoi means by cháo: the Khmer version, which is closer to a rice-and-everything soup than to a thickened gruel.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '1 hr 15 min',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/chao-am-tra-vinh.jpg',
  intro: `Cháo ám is the Khmer-Trà Vinh answer to a question every rice culture eventually asks: what do you cook when the cupboard holds rice, the canal holds a fish, the bank holds greens, and you have forty-five minutes? Every rice civilization has its own version — the Chinese have congee, the Koreans have juk, the Japanese have okayu — and the Khmer of the Mekong Delta have cháo ám, which is all of those and none of them, because it breaks the genre's most fundamental convention: it refuses to be thick.

Northern Vietnamese cháo is a porridge: rice boiled to surrender, the grains dissolved into a starchy, opaque, spoon-standing thickness that is the whole structural point. Cháo ám inverts this completely. The rice is cooked lightly in a generous volume of water or stock — whole grains, still intact, floating in a thin, clear, almost brothy liquid that you drink from the bowl as much as you spoon — and into that liquid goes everything the landscape provides: a piece of cá lóc pulled from the canal, peeled shrimp, sliced pork, and then, in quantities that dwarf the protein, the greens. Rau muống — water spinach, the full plant, stems shredded and leaves left whole. Bắp chuối bào — shredded banana blossom. Đọt bí — the tender growing tips of squash or pumpkin vines. Young morning-glory shoots, watercress, whatever herb the garden fence produced that morning. The greens go in at the end, barely wilted, so the bowl is more vegetable soup than rice porridge, and the finished colour is as green as it is white.

The seasoning is what marks the bowl as Khmer rather than Vietnamese. Where a Saigon cháo would reach for fish sauce and ginger, cháo ám reaches for mắm bò hóc — the same fermented mudfish paste that builds the bún nước lèo — dissolved, strained and stirred into the cooking liquid, giving the thin broth a deep, earthy, fermented savouriness that plain fish sauce cannot approach. A knob of galangal goes in rather than ginger. A stalk of lemongrass rather than scallion in the pot. And over the top, at the table, goes mỡ hành — scallion fried in pork fat until it sizzles, poured over the surface in a hot golden stream that perfumes the steam and sends a slick of flavoured lipid across the broth. The mỡ hành is not a garnish. In a soup this lean and this green, it is the entire fat content of the meal, and it is the flavour that hits the nose before the spoon arrives.

Cháo ám is a field worker's lunch, a rainy-day bowl, a sick-day bowl, a market-morning bowl — all the same roles that congee fills across Asia, but lighter, greener, more fragrant and less stodgy. It is the bowl you eat when you want the comfort of rice soup but not the weight of porridge, and it is the bowl the Khmer grandmothers of Trà Vinh feed to anyone who arrives at the house looking tired, underfed or sad, without asking whether they are hungry first. The correct portion is two bowls. The second one is already being ladled before you finish the first.`,
  ingredientSections: [
    {
      title: 'The rice soup base',
      items: [
        {
          amount: 150,
          unit: 'g',
          name: 'plain long-grain rice (gạo tẻ)',
          note: `Not glutinous — glutinous rice would turn this into a sticky porridge, which is exactly what this dish refuses to be. The rice is cooked to intact, separate grains floating in a clear, thin broth. Less rice, more water: the ratio is the philosophy.`,
        },
        { amount: 1.5, unit: 'L', name: 'water or light pork-bone stock' },
        {
          amount: 1.5,
          unit: 'tbsp',
          name: 'mắm bò hóc (prahok), dissolved in 100 ml warm water and strained',
          note: `The Khmer seasoning — dissolved, stirred hard, strained through a fine sieve so only the clear savoury liquid enters the pot. The same straining discipline as the bún nước lèo, for the same reason: flavour in, grit out.`,
        },
        { amount: 1, name: 'stalk lemongrass, bruised and knotted' },
        { amount: 20, unit: 'g', name: 'galangal, sliced and bruised' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The protein',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'cá lóc (snakehead fish), filleted and sliced into 2 cm pieces',
          note: `The canal fish of the Delta — firm, white, sweet, and the default protein for any Khmer cháo. In Europe: frozen snakehead from a Vietnamese grocer, or substitute firm white fish (basa, catfish, sea bass). Bone-in steaks give better broth; boneless fillets are easier.`,
        },
        { amount: 150, unit: 'g', name: 'shrimp, peeled', note: `Small Delta shrimp — their sweetness against the mắm bò hóc is a specific flavour combination the Khmer palate expects.` },
        { amount: 150, unit: 'g', name: 'pork shoulder or belly, thinly sliced (optional)' },
      ],
    },
    {
      title: 'The greens — the more, the greener, the better',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'rau muống (water spinach), stems shredded lengthwise, leaves left whole',
          note: `The backbone green. Stems go in first for crunch; leaves go in last for colour and wilt. If unavailable: regular spinach plus a handful of watercress does the broad-stroke job.`,
        },
        { amount: 100, unit: 'g', name: 'bắp chuối (banana blossom), shredded fine, held in lime water', note: `Its astringency and pale crunch are the textural contrast in the bowl.` },
        {
          amount: 100,
          unit: 'g',
          name: 'đọt bí (young squash or pumpkin vine tips and tendrils)',
          note: `The tendril of the pumpkin vine — sweet, slightly mucilaginous, and as Mekong as it gets. If you grow squash, the shoots are here. If not, substitute young pea shoots or tender broccoli tips.`,
        },
        { amount: 50, unit: 'g', name: 'ngò om (rice paddy herb), roughly torn', note: `Added at the very end, off the heat — its cumin-lemon volatile profile is the aromatic close of the bowl, and it boils away in seconds.` },
        { amount: 50, unit: 'g', name: 'húng quế and rau răm, roughly torn' },
      ],
    },
    {
      title: 'The mỡ hành (scallion oil) — the fat of the bowl',
      items: [
        { amount: 3, unit: 'tbsp', name: 'rendered pork fat or neutral oil', note: `Pork fat is the Khmer-Delta default and noticeably better — its own savouriness carries the scallion's allium compounds more richly than a neutral oil.` },
        { amount: 4, name: 'scallions, sliced thin' },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The table',
      items: [
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 2, unit: 'tbsp', name: 'fried shallots' },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 3, name: 'bird\'s-eye chilies, sliced' },
        { amount: 1, name: 'saucer of fish sauce with chili' },
      ],
    },
  ],
  steps: [
    {
      title: 'Cook the rice in broth — thin, clear, grains intact, 25 minutes',
      description: `Rinse the rice until the water runs clear — this is the rare cháo where cloudiness is not the goal. Bring the stock or water to a simmer with the lemongrass and galangal, add the rice, and cook 25 minutes at a gentle simmer, uncovered.

The rice should be fully cooked — soft and swollen — but each grain should still be a distinct, separate grain floating in a clear, thin, lightly flavoured liquid. This is not porridge. If it looks thick, add hot water until the ratio feels like a generous soup with rice in it, not a pot of congee.

Stir in the strained mắm bò hóc liquid, the fish sauce, sugar and salt. Taste: the broth should be lightly savoury, faintly earthy from the mắm, with the lemongrass and galangal humming underneath. Season deliberately under what feels right — the fish and the greens are about to add their own.`,
      tip: `The thin, clear, grain-intact style is a genuine philosophical break from the northern and Chinese congee traditions, where dissolution IS the point — the rice gives up its starch to the liquid and the two become one thick mass. Cháo ám keeps rice and liquid as two separate, co-existing things: the grain for chewing, the broth for drinking, and the greens and fish living in the broth alongside. It is closer to a Japanese ochazuke (tea poured over rice) than to a Cantonese jook, and it is built on a different assumption about what comfort means: not weight and opacity, but warmth and transparency and colour. The thin broth is a window into what is in the bowl. The thick porridge is a wall. Trà Vinh chose the window.`,
    },
    {
      title: 'Poach the fish and shrimp — 6 minutes total, in the pot',
      description: `Lower the fish pieces into the simmering rice broth and poach 4 minutes — just until opaque through and gently flaking. Add the shrimp and the sliced pork (if using) and poach 2 minutes more — until the shrimp are pink and the pork is just cooked.

Do not stir. The fish is delicate and a spoon dragged through it will shred it into fragments. Let the simmer do the poaching; let the pieces stay whole.

The protein is now in the broth, and the broth now tastes of everything: pork bone, mắm bò hóc, lemongrass, galangal, and the sweetness of fresh fish and shrimp. This is the bowl's final seasoning, contributed by the ingredients themselves.`,
      tip: `Fish poached directly in the serving broth is the same circular transaction this collection has documented in every broth-based recipe from bún nước lèo to bún suông: the protein cooks and seasons the liquid simultaneously, and the liquid carries the seasoning back into the protein. In a thin broth like this one the exchange is especially visible — the liquid goes from clear-gold to faintly opalescent as the fish's own proteins and fats disperse into it, and the flavour deepens by a measurable notch. The instruction to not stir is not about aesthetics; it is about keeping that dispersion gentle rather than violent, so the broth thickens imperceptibly with gelatin rather than clouding with shredded protein.`,
    },
    {
      title: 'Add the greens in waves — stems, then blossom, then vine tips, then leaves',
      description: `With the broth at a bare simmer and the fish poached: add the shredded rau muống stems and the drained banana blossom first. Wait 90 seconds — the stems should soften but still crunch. Add the đọt bí vine tips. Wait 60 seconds. Add the rau muống leaves last, pushing them gently below the surface. Wait 30 seconds — they wilt to dark green and glossy.

Take the pot off the heat entirely. Throw in the ngò om, húng quế and rau răm, and stir once.

The greens go in in waves because each has a different cooking time: stems want two minutes, vine tips want one, leaves want thirty seconds, and herbs want zero — only residual heat. A pot where everything went in together would give you cooked-to-death stems, vanished leaves and herbs that smell of nothing.`,
      tip: `This staggered-entry method is the canh chua principle — every ingredient at a different moment, the sequence timed backward from the most fragile — applied to a rice soup rather than a sour broth. The Trà Vinh grandmothers do it by feel and by colour: each wave changes the bowl's palette from gold to green in visible steps, and the final bowl should be about 60% green by surface area. A cháo ám that looks mostly white is a cháo ám that undercommitted on greens. The greens are not a garnish IN the soup. They are the soup's co-equal partner with the rice, and the bowl's balance is judged on whether they show.`,
    },
    {
      title: 'Sizzle the mỡ hành and pour it over — the steam carries the flavour',
      description: `In a small pan, heat the pork fat over medium-high until it shimmers. Throw in the sliced scallions and the pinch of salt — they will sizzle and pop and go vivid green in about five seconds. Pour the entire contents — fat, scallion, sizzle — directly over the surface of the ladled bowls.

The mỡ hành should hiss on contact and send up a steam that smells of fried allium and pork fat — that steam is the dish's first impression, and it is designed to arrive at the nose before the spoon arrives at the mouth.

Scatter fried shallots and pepper over the top. Serve with lime and the chili-fish-sauce saucer, and ladle the second bowl before anyone asks for it.

Eat within ten minutes. A thin broth cools fast, and a cool cháo ám is a different, lesser experience — the mỡ hành's perfume only lifts on steam, and steam is heat, and heat is time.`,
      tip: `The mỡ hành poured sizzling over a finished bowl is the single most widespread finishing technique in Vietnamese cooking — it closes phở, cháo, bún, and half the rice dishes in the country — and its physics is worth naming once, clearly, at the end of a collection that has used it a dozen times. Hot fat arriving on a wet surface does three things in the same second: it releases its own volatile aromatics (the scallion's allyl sulfides) as a burst of perfumed steam; it forms a thin lipid film on the broth's surface that slows subsequent heat loss and traps further volatiles beneath it; and it carries fat-soluble flavour compounds from the allium directly to the tongue's fat-sensitive receptors, bypassing the water-phase broth entirely. It is a flavour-delivery system operating in three phases — gas, liquid and lipid — simultaneously. The sizzle is a phase-transition event, and the five seconds of frying are the most flavour-dense five seconds in the recipe.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
