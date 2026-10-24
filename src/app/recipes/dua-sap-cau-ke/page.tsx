'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'dua-sap-cau-ke',
  title: `Dừa Sáp Cầu Kè (Wax Coconut of Cầu Kè — Eaten Fresh or as Kem)`,
  subtitle: `A genetic mutation found in one district of one province: a coconut whose meat has thickened from a crisp white shell into a dense, waxy, jelly-like mass that fills the cavity entirely, tastes of custard and coconut cream, and has no equivalent anywhere else in the world. Eaten straight from the shell with a spoon, or blended into the richest coconut ice cream the Mekong has ever produced.`,
  category: 'DESSERT',
  difficulty: 'Easy',
  totalTime: '20 min',
  rating: 4.9,
  baseServings: 2,
  heroImage: '/images/recipes/dua-sap-cau-ke.jpg',
  intro: `Cầu Kè is a small district in southern Trà Vinh, Khmer-majority, flat, canal-laced and so unremarkable on a map that no tourist itinerary has ever found a reason to stop there — until the coconut. Dừa sáp, the wax coconut, is a naturally occurring genetic mutation in a small percentage of coconut palms, found almost exclusively in the Cầu Kè area: a recessive trait carried by a few hundred trees that, when two carrier palms cross-pollinate, produces a fruit in which the normal hard white coconut meat has been replaced by something entirely different. Instead of the familiar crisp, fibre-rich, oil-dense flesh of an ordinary coconut, the dừa sáp's cavity is filled with a soft, dense, translucent, waxy-gelatinous mass — closer to a very thick coconut cream that has set into a jelly than to anything normally called coconut meat. It is scooped with a spoon, not broken with a knife. It melts on the tongue. And it tastes of coconut intensified to a degree that makes ordinary coconut water seem like a rumour of itself.

The biology is a defect in endosperm development: the gene that normally directs the coconut's liquid endosperm to deposit as a rigid, cellular, fat-rich solid (the white meat) instead produces an amorphous, high-moisture, high-sugar gel that fills the shell from the inside out. The coconut water is present but reduced to a small, thick, almost syrupy pool at the centre, intensely sweet and fragrant. The fat content is lower than in normal meat but the sugar and the volatile aromatic esters — the compounds that smell and taste of coconut — are dramatically higher, which is why dừa sáp tastes the way it does: not like eating coconut but like eating the idea of coconut, concentrated past what the normal fruit achieves.

Dừa sáp cannot be farmed reliably, only encouraged. The mutation is recessive: even a grove of known carrier palms produces only 20-30% sáp fruit per harvest, and there is no way to know which nut on a bunch has the trait until it is opened. The rest are normal coconuts, sold at normal prices. This lottery, combined with the tiny geographic range (attempts to transplant carriers to other provinces have largely failed — the interaction of soil, microclimate and pollination ecology is not understood and may not be reproducible), makes dừa sáp one of the rarest and most expensive fruits in Vietnam: a single nut sells for twenty to fifty times the price of an ordinary coconut, depending on the grade, and the top grade — sáp đặc, where the gel fills the shell completely with almost no liquid — commands prices that a European truffle dealer would recognise.

The eating, given this, is deliberately simple and does not attempt to improve on the ingredient. The shell is cracked, the thick syrupy water is poured into a glass and drunk first, and then the waxy flesh is scooped out with a spoon and eaten as-is — cold, if possible, because chilling firms the gel slightly and slows the melt on the tongue, extending the moment. That is the purist's version and the one that the Cầu Kè growers eat themselves.

The second version — and the one that has made dừa sáp famous beyond the province — is kem dừa sáp, wax-coconut ice cream: the scooped gel blended with a little condensed milk and coconut cream, frozen, and served in the empty coconut shell. The ice cream is staggeringly rich, absurdly coconutty, and smoother than any ice cream made from ordinary coconut because the gel's own structure — already a semi-set emulsion — does the emulsifier's job without any added stabiliser. It is sold at stalls in Trà Vinh city and, increasingly, at tourist spots across the Mekong, and it is, without competition, the most luxurious frozen dessert in Vietnamese cooking.

This recipe documents both the fresh eating and the ice cream, because both are the dish, and both require the same irreplaceable ingredient. Dừa sáp can be ordered online from Vietnamese specialty fruit sellers and occasionally appears, frozen, in overseas Vietnamese groceries — but it is expensive and availability is genuinely limited. The recipe is here because the collection's job is to document the real food of each province, including the foods that are rare, and because anyone who has eaten dừa sáp will confirm that the price, for once, is explained in full by the first spoonful.`,
  ingredientSections: [
    {
      title: 'Fresh dừa sáp (the purist version)',
      items: [
        {
          amount: 2,
          name: 'dừa sáp (wax coconuts), whole',
          note: `The ingredient is the recipe. Buy from a trusted source — Cầu Kè growers, Vietnamese specialty fruit sellers online, or occasionally frozen at larger Vietnamese groceries abroad. Grade matters: sáp đặc (fully filled, almost no liquid) is the top tier; sáp lỏng (partially filled, more liquid) is more affordable and still extraordinary. A normal coconut is not a substitute in any sense — the substitution would be like replacing a truffle with a mushroom and calling it the same dish. If you cannot source dừa sáp, make the ice cream below with ordinary coconut cream and enjoy it for what it is, but name it honestly.`,
        },
      ],
    },
    {
      title: 'Kem dừa sáp (wax coconut ice cream)',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'dừa sáp flesh, scooped from 2 coconuts',
          note: `The thick, waxy, jelly-like meat — scooped with a large spoon, scraping down to the shell. Every gram counts.`,
        },
        {
          amount: 100,
          unit: 'ml',
          name: 'dừa sáp water (the thick syrupy liquid from the same coconuts)',
          note: `Much thicker and sweeter than ordinary coconut water — it is part of the ice cream's flavour and should not be discarded or replaced.`,
        },
        {
          amount: 100,
          unit: 'ml',
          name: 'coconut cream (from a can, full-fat)',
          note: `A supplement — the dừa sáp flesh is lower in fat than normal coconut and the ice cream needs a little extra lipid for a smooth freeze. Ordinary full-fat coconut cream serves this structural role.`,
        },
        {
          amount: 80,
          unit: 'ml',
          name: 'condensed milk (sữa đặc)',
          note: `The sweetener and the emulsifier in one — its milk proteins and sugar stabilise the freeze without any other additive. Adjust to taste: the Trà Vinh stalls run sweet, but the fruit's own sweetness is already substantial.`,
        },
        { amount: 0.25, unit: 'tsp', name: 'salt', note: `The pinch that sharpens everything.` },
        { amount: 2, name: 'reserved empty coconut shell halves, for serving', note: `The traditional serving vessel — the ice cream returns to its own shell. Clean the shells, chill them, and scoop the ice cream back in.` },
      ],
    },
    {
      title: 'Optional toppings for the kem',
      items: [
        { amount: 2, unit: 'tbsp', name: 'roasted peanuts, crushed' },
        { amount: 2, unit: 'tbsp', name: 'toasted coconut flakes' },
        { amount: 1, unit: 'tbsp', name: 'roasted sesame seeds' },
        { amount: 4, name: 'small scoops of cốm dẹp (if in season — the green rice from recipe 4)', note: `The Trà Vinh crossover: cốm dẹp on dừa sáp ice cream is the province's most luxurious dessert combination, and it exists only here.` },
      ],
    },
  ],
  steps: [
    {
      title: 'The fresh eating — crack, pour, scoop, and do not add anything',
      description: `Chill the whole coconut in the refrigerator for 2-3 hours — the cold firms the gel slightly and makes it scoopable rather than slippery.

Crack it open with a heavy knife or a cleaver: a decisive strike around the equator, then prise apart. Immediately pour the thick, syrupy, intensely fragrant water into a small glass — drink it first, cold, alone, and understand why the price is what it is.

Now scoop the flesh: a large spoon, drawn firmly along the shell wall, lifts the waxy gel in thick, translucent, quivering curls. Eat it directly from the spoon. Cold. Plain. Nothing added.

The first spoonful is the moment the ingredient explains itself, and the only honest instruction is to get out of its way. Any sugar, any lime, any syrup you might consider adding would be a commentary on something that has already said everything it intends to say.`,
      tip: `The intensity of dừa sáp's flavour is a direct consequence of its mutation. In a normal coconut, the volatile esters that carry the "coconut" aroma — delta-octalactone and gamma-nonalactone above all — are distributed across a large mass of cellular, fibrous, oil-rich meat that dilutes and locks them in fat. In dừa sáp, the same or greater quantity of these compounds is dissolved in a smaller, wetter, more homogeneous gel with higher free water and lower fat — which means the volatiles are more mobile, more available, and reach the nose faster and in greater concentration. You are not tasting a better coconut. You are tasting the same coconut with its aromatics freed from their usual prison. The mutation is a delivery mechanism, and what it delivers is the smell of the tropics at a concentration the normal fruit was never designed to achieve.`,
    },
    {
      title: 'The ice cream — blend, freeze, return to the shell',
      description: `Combine the scooped dừa sáp flesh, the thick water, the coconut cream, the condensed milk and the salt in a blender. Blend on high 60-90 seconds until completely smooth — the gel breaks down into a thick, homogeneous, intensely fragrant cream with no lumps or fibrous texture.

Taste: it should be sweet, rich, overwhelmingly coconutty, and just salty enough that the sweetness does not cloy. Adjust condensed milk up or down by the tablespoon.

Pour into a freezer-safe container, cover, and freeze 4-6 hours, stirring vigorously with a fork every 90 minutes for the first 4 hours to break ice crystals. Alternatively, churn in an ice cream maker 25-30 minutes until thick and soft-set, then freeze 2 hours to firm.

The ice cream sets denser and smoother than ordinary coconut ice cream because the dừa sáp gel is already a natural emulsion — its polysaccharides and proteins trap air and water in a stable matrix that resists the large-crystal formation that makes cheap ice cream icy. You are not adding emulsifier to coconut. You are freezing a coconut that emulsified itself.`,
      tip: `The fork-stir method — freezing in a tray, breaking crystals every 90 minutes — is called still-freezing and it is how ice cream was made before churning machines existed. The key is timing: ice crystals nucleate and grow from the container walls inward, and scraping them back into the still-liquid centre at regular intervals breaks them down to a fine, even grain. Miss one interval and the crystals grow past the point where scraping can reduce them; hit every interval and the result, while not as smooth as churned, is remarkably close. Dừa sáp's own viscosity helps enormously — a thicker base resists crystal growth more effectively than a thin one, which is why this ice cream still-freezes better than most.`,
    },
    {
      title: 'Serve in the shell — the ice cream goes home',
      description: `Clean the reserved shell halves, chill them in the freezer for 30 minutes. Scoop the ice cream back into the shells — two or three scoops per half, mounded — and top with crushed peanuts, toasted coconut flakes, sesame, and a small heap of cốm dẹp if you have it and the season allows.

Serve immediately. The ice cream melts faster than dairy-based because its fat content is lower and its water content higher — you have about ten minutes of structured scoopability before it returns to the thick cream it was before the freezer, which is, admittedly, not a terrible outcome. The shell keeps it cold a little longer than a bowl, because the husk is a natural insulator — the same reason coconuts survive floating across oceans in tropical sun without their water spoiling.

Eat with a spoon, from the shell, on a hot afternoon, and know that what you are eating is a genetic accident found in one small district of one quiet province, carried by a few hundred palms, unpredictable by harvest, and unavailable to everyone who is not either standing in Cầu Kè or willing to pay the price of rarity. Some ingredients are common and technique makes them extraordinary; this one is extraordinary and technique stays out of its way. Both are valid recipes. This one simply starts closer to the finish line.`,
      tip: `The coconut shell as serving vessel is not decoration — it is thermal engineering and flavour recycling. A coconut husk is dense coir fibre, a world-class thermal insulator (it is literally used as industrial insulation in some applications), and a frozen shell adds its own cold mass to the ice cream. Together they slow the melt by several minutes compared to a room-temperature ceramic bowl. And the thin film of residual dừa sáp gel on the shell interior — the scraping always leaves a little — melts into the ice cream as it softens, adding one more layer of the fresh flavour to the frozen one. The shell is not the plate. It is the last ingredient.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
