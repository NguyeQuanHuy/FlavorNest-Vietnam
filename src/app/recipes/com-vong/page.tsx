'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'com-vong',
  title: `Cốm Vòng (Green Flattened Young Rice of Vòng Village)`,
  subtitle: `The same young rice the Khmer Trà Vinh pounded for Ok Om Bok, here roasted and pounded by the women of Vòng village on the western edge of Hanoi — and eaten not with palm sugar and coconut but with chuối tiêu, the small, ripe, fragrant finger banana, in a combination so simple and so perfect that it has represented Hanoi's autumn on every literary page the city has produced.`,
  category: 'DESSERT',
  difficulty: 'Hard',
  totalTime: '3 hr',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/com-vong.jpg',
  intro: `Cốm is young rice — green, flattened, fragrant — and it has appeared once before in this collection, in the Trà Vinh cốm dẹp recipe, where the Khmer of the Mekong pounded it for the Ok Om Bok moon festival and ate it with coconut and palm sugar. The product is the same; the culture is different. In the north, cốm belongs to Hanoi, and in Hanoi it belongs to one village: Vòng, now absorbed into the city's Cầu Giấy district but still making cốm by the methods its families have used for longer than Hanoi has been a capital — and still wrapping it in lotus leaves for sale, still carrying it in flat baskets on bicycles, and still selling it on the pavement of Hàng Than street to customers who queue for the same reason people queue for anything in Hanoi: because this vendor's cốm is better than the one across the street, and the argument has been running for a century.

Vòng cốm is made from nếp cái hoa vàng — the golden-flower glutinous rice variety that the Red River Delta considers its finest — harvested in late September or early October, roughly two weeks before full maturity, when the grain is still green with chlorophyll, still soft with ungelatinised starch, and still milky with free sugars that the ripening will convert to storage starch and lock away. The harvest window is the same narrow two weeks the Trà Vinh cốm dẹp documented: too early and the grain is too wet; too late and the grain is too hard. The window is the recipe's gate, and the village watches the paddies like a clock.

The processing is roasting and pounding — the same two steps as the Khmer method — but with differences in technique that produce a different product. Vòng cốm is roasted in a wide pan over a low wood fire, stirred by hand, for a precise duration that the village women judge by the grain's colour (from bright green to a deeper, matte, olive green), its smell (from raw-grassy to toasted-nutty, the same Maillard transition the cháo gà's toasted rice made), and its sound (the grains stop hissing as their surface moisture evaporates and begin to click as they dry). Then the roasted grain is pounded — in a tall mortar, with a long pestle, in the same interlocking rhythm the Trà Vinh women used — but MORE GENTLY, for SHORTER, because Vòng cốm is not pounded flat (dẹp) but pounded just enough to crack the husk, loosen it for winnowing, and flatten the grain slightly without pressing it into a thin disc. The result is a grain that is denser, chewier and more intact than the Trà Vinh version — a flake with body, not a wafer.

The eating is Hanoi's autumn ritual: cốm Vòng, wrapped in a lotus leaf, carried home, unwrapped, and eaten with chuối tiêu — the small, thin-skinned, intensely fragrant finger banana that the north considers the only banana worth pairing with cốm. The combination is: green, chewy, toasted-nutty, faintly sweet cốm + ripe, soft, perfumed, fully sweet banana, and the two together — eaten alternately, a pinch of cốm then a bite of banana — produce a flavour conversation that Hanoi has been writing poems about since the Lý dynasty. Thạch Lam wrote about it. Vũ Bằng wrote about it. Every Hanoi autumn essay ever written mentions cốm Vòng and chuối tiêu in the same sentence, because the combination IS autumn in the city's literary memory, and eating it is a way of reading the calendar with the mouth.`,
  ingredientSections: [
    {
      title: 'The cốm (bought)',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'cốm Vòng (fresh green flattened rice), wrapped in lotus leaf',
          note: `Sold fresh at Vietnamese groceries in autumn (September-November), imported from Hanoi or made from the same process in local Vietnamese communities. Also available frozen — thaw at room temperature and use immediately. The cốm should be pale green, matte, faintly moist, and smell of toasted grain and lotus leaf. If it is brown, dry or odourless, it is old and the dish will be a history lesson rather than a meal.`,
        },
      ],
    },
    {
      title: 'From scratch (for the record — requires young glutinous rice)',
      items: [
        { amount: 1, unit: 'kg', name: 'young glutinous rice, in the husk (nếp non), harvested 2 weeks before maturity', note: `The same ingredient as the Trà Vinh cốm dẹp — green, milky, soft. Available only during the harvest window and only at the source.` },
      ],
    },
    {
      title: 'To eat with',
      items: [
        {
          amount: 8,
          name: 'chuối tiêu (finger bananas / Lady Finger bananas), ripe',
          note: `Small, thin-skinned, intensely perfumed bananas — the Musa acuminata cultivar the north pairs with cốm. In Europe: "Lady Finger" or "sugar bananas" from Latin American, Caribbean or Asian groceries. NOT Cavendish — too large, too bland, too starchy. The banana must be small, ripe, fragrant and sweet enough to eat without any addition.`,
        },
        {
          amount: 4,
          name: 'lotus leaves (fresh or dried, soaked), for wrapping/serving',
          note: `The lotus leaf is the traditional wrapper AND the serving plate — the cốm is unwrapped from it and eaten from it, and the leaf's perfume (the same volatile alkaloids the cơm sen recipe documented) infuses the surface of the cốm during storage.`,
        },
      ],
    },
    {
      title: 'Other pairings (traditional)',
      items: [
        { amount: 100, unit: 'g', name: 'dừa nạo (fresh grated coconut) — optional', note: `Some Hanoi households eat cốm mixed with fresh coconut and a little sugar — the northern version of the Trà Vinh cốm dẹp's coconut-and-palm-sugar combination, lighter and less sweet.` },
        { amount: 50, unit: 'g', name: 'persimmon (hồng), ripe — optional', note: `Cốm eaten with ripe persimmon is the other classic Hanoi autumn pairing — green grain against orange fruit, chewy against melting.` },
      ],
    },
  ],
  steps: [
    {
      title: 'The from-scratch method: roast, pound, winnow (for the record)',
      description: `ROAST: spread the green paddy in a wide, heavy pan over a low wood fire or the lowest gas flame. Stir constantly by hand for 15-20 minutes. Watch the grain change: bright green to olive, the hissing of surface moisture giving way to the clicking of drying grain, and the smell shifting from raw grass to toasted nut.

POUND: transfer to a tall mortar, 200 g at a time. Pound gently — moderate strokes, not the full-force pounding of the Trà Vinh method — for 3-4 minutes per batch. The goal: crack the husk, flatten the grain slightly, but do NOT press it into a thin disc. Vòng cốm is thicker and chewier than Trà Vinh cốm dẹp.

WINNOW: toss in a flat basket or before a fan to separate the cracked husks from the naked green grains. The cốm should be: pale green, slightly flattened, dry at the surface, faintly moist at the centre, and chewy when bitten.

Wrap immediately in a lotus leaf — the cốm dries and stales within hours if exposed to air.`,
      tip: `The gentler pounding is the difference between Vòng cốm and Trà Vinh cốm dẹp, and the difference matters: a heavily pounded grain (the southern method) is thin, translucent and crisp — a flake that shatters between the teeth. A lightly pounded grain (the Vòng method) is thick, dense and chewy — a nugget that requires the tooth to work. The two textures produce two completely different eating experiences from the same starting grain, and the preference maps onto the regions: the south likes its cốm crisp (eaten in a tossed salad with coconut), the north likes its cốm chewy (eaten plain, a pinch at a time, as a meditation on texture). The mortar's force IS the regional identity.`,
    },
    {
      title: 'Unwrap, pinch, eat with banana — the autumn ritual',
      description: `Set the lotus-leaf packet on the table. Unwrap it slowly — the leaf opens and the cốm's toasted-green-lotus perfume rises on the air as the first thing the nose catches before the hand reaches.

The cốm sits in the opened leaf: a mound of pale-green, matte, slightly moist, irregularly flattened grains. Take a pinch — five or six grains between thumb and forefinger — and eat. The first chew: green, toasted, faintly sweet, with a dense, chewy, almost gummy resistance that yields slowly as the tooth works. The grain tastes of the paddy — of rice, of chlorophyll, of the Maillard compounds the roasting generated — and of the lotus leaf that held it.

Then a bite of chuối tiêu: small, soft, melting, intensely fragrant, fully sweet. The banana's sweetness floods the palate that the cốm's chewiness just cleared, and the two flavours — green-toasted-grain and ripe-perfumed-fruit — occupy different registers that do not blend so much as alternate, each one making the other more vivid by contrast.

Pinch of cốm. Bite of banana. Pinch. Bite. The rhythm is slow — slower than any other eating in this collection — because the cốm is a contemplative food, not a hunger food, and the correct pace is the pace of a conversation with the season.

The cốm keeps 2-3 days in its lotus leaf, refrigerated — but like every hyper-fresh product in this collection, day one is the peak, day two is acceptable, and day three is nostalgia. Eat it the day you buy it, in the autumn, with the right banana, and the dish is not a recipe but a poem that the mouth reads and the season wrote.`,
      tip: `Cốm Vòng + chuối tiêu is the north's most literary food pairing, and its literary status is not incidental — it is the reason the pairing survives. Thạch Lam's essay on cốm (in "Hà Nội Băm Sáu Phố Phường") is read by every Vietnamese schoolchild, and it describes the act of eating cốm with banana in prose so precise and so sensory that the essay IS a recipe: the texture, the colour, the fragrance, the pace, the season, all documented in a literary form that has preserved the dish's identity more effectively than any cookbook. Vietnamese food culture is, in many cases, a literary culture first and a kitchen culture second — the dish exists because the essay described it, and the essay persists because the dish confirms it, and the cycle has been running since the 1940s. Cốm Vòng is food as literature, and eating it is reading.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
