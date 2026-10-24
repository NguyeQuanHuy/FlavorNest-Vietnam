'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ruou-sim-phu-quoc',
  title: `Rượu Sim Phú Quốc (Wild Rose Myrtle Berry Wine)`,
  subtitle: `The purple-black berries of the wild sim tree — Rhodomyrtus tomentosa, the rose myrtle that blankets Phú Quốc's hillsides — macerated in rice wine with rock sugar for three months until the alcohol draws out the fruit's anthocyanins, tannins and deep berry sweetness into a garnet-red, gently sweet, warmly alcoholic liqueur. The island's forest in a glass.`,
  category: 'DESSERT',
  difficulty: 'Easy',
  totalTime: '3 months',
  rating: 4.7,
  baseServings: 12,
  heroImage: '/images/recipes/ruou-sim-phu-quoc.jpg',
  intro: `The sim tree — Rhodomyrtus tomentosa, the rose myrtle, downy myrtle or sim rừng — is a tough, evergreen shrub that grows wild across Phú Quốc's inland hills, on laterite soil, in the scrubby secondary forest that covers the terrain between the pepper gardens and the national park. It flowers pink, fruits dark purple-black, and during its season — roughly from July to September, coinciding with the monsoon — the hillsides are dotted with clusters of ripe sim berries that stain everything they touch an indelible violet. The berries are small, about the size of a blueberry, with a thin skin, a dense purple flesh, a mild sweetness, a marked tannin-astringency, and a flavour that sits in the territory between blueberry, pomegranate and a dry red wine, with a faint rose-like floral note that gives the plant its English name.

The island has been making rượu sim — sim wine — for as long as the sim trees and the rice wine have coexisted, which is to say for as long as anyone can remember. The method is not a fermentation but a maceration: ripe berries are washed, bruised lightly, layered with rock sugar in a glass jar, and then covered with rượu trắng — the same rice spirit this collection distilled in the làng Vân recipe — and sealed. Over three months the alcohol extracts the berries' anthocyanins (the purple pigment), their tannins (the astringency), their sugars (the sweetness), and their volatile esters (the floral-berry aroma), and the colourless rice spirit turns, slowly and irreversibly, into a deep garnet-red liqueur with a flavour profile that no other Vietnamese drink possesses: fruity, tannic, gently sweet, warmly alcoholic, and tasting of a specific hillside on a specific island in a specific season.

Rượu sim is Phú Quốc's signature drink — sold in hand-labelled bottles at every market and every gift shop, given to visitors, brought to the mainland as a souvenir, and served at island weddings and celebrations with an authority that implies long tradition even when the bottle was sealed three months ago. Its reputation, like the nước mắm's, has grown past the island's shoreline: rượu sim Phú Quốc is now a recognised product across Vietnam, and the bottles — always hand-labelled, always slightly different, always with a sediment of berry pulp at the bottom — are carried home by every tourist who visits and by every islander who leaves.

The recipe is among the simplest in this collection — berries, sugar, spirit, time — and its simplicity is the same simplicity as the rượu mãng cầu in Tây Ninh: a fruit that wants to become a drink, a spirit that wants to become flavoured, and a jar that holds them together while time does the work. The cook's intervention is minimal: bruise the berries so the skin breaks and the extraction starts, layer them with sugar so the osmotic draw pulls juice out before the alcohol pushes flavour in, pour the spirit over, seal, and wait. Three months later the jar contains a liqueur, the berries are spent, and the island's hillside is in the glass.

A note on safety, consistent with every alcohol recipe in this collection: rượu sim is a maceration, not a fermentation — the berries are preserved in an already-alcoholic spirit, so there is no fermentation step and no risk of the fermentation failures (mould, off-odours, methanol) that the fruit-wine and rice-wine recipes documented. The only requirement is that the base spirit is genuine — distilled rice wine at 35-45% ABV, not industrial alcohol, not methanol-contaminated moonshine. Buy from a trusted source or distill your own by the làng Vân method. The maceration itself is inherently safe: 35%+ alcohol is hostile to every pathogen and every spoilage organism, and the jar is sterile from the moment the spirit touches the fruit.`,
  ingredientSections: [
    {
      title: 'The berries',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'ripe sim berries (Rhodomyrtus tomentosa / rose myrtle), fresh',
          note: `Ripe — deep purple-black, soft to the touch, staining your fingers violet when squeezed. Unripe green berries are astringent and bitter and produce a harsh, tannic wine nobody will drink twice. The berries are available only during the monsoon season (July-September) on Phú Quốc and in the wild scrublands of southern Vietnam and Southeast Asia.\n\nIN EUROPE: Rhodomyrtus is not commonly sold, but the plant grows wild in parts of southern France, Spain, Portugal and Australia (where it is classified as invasive). Foragers in Mediterranean climates may find it. If entirely unavailable: the technique (fruit macerated in spirit with sugar) works with any tannin-rich, anthocyanin-dense berry — blackberries, sloes, elderberries, aronia — producing a different but structurally similar liqueur. Sloe gin is the nearest European analogue, made by the identical method from a different berry. Name the substitute honestly.`,
        },
      ],
    },
    {
      title: 'The spirit and the sugar',
      items: [
        {
          amount: 1.5,
          unit: 'L',
          name: 'rượu trắng (rice spirit), 35-45% ABV',
          note: `Clear, clean, well-distilled rice spirit — the same product this collection made in the làng Vân recipe. In Europe: Vietnamese rice spirit from a Vietnamese grocer, or a clean, neutral spirit such as vodka or soju at 35-40%. The base spirit must be genuine and must be at least 35% ABV — below that, the alcohol concentration is insufficient to fully preserve the fruit and extract the anthocyanins, and the maceration may ferment unpredictably.`,
        },
        {
          amount: 300,
          unit: 'g',
          name: 'rock sugar (đường phèn), in chunks',
          note: `Rock sugar dissolves slowly in the spirit over the first weeks, producing a gradual sweetening that integrates with the berry's own sugars rather than sitting on top. Granulated sugar dissolves instantly and produces a sharper, less-integrated sweetness. Rock sugar is the traditional choice and the better one.`,
        },
      ],
    },
    {
      title: 'The jar',
      items: [
        {
          amount: 1,
          name: 'glass jar, 3-4 L, wide-mouthed, with a tight-sealing lid — sanitized',
          note: `Glass, always — you want to watch the colour change, which is the maceration's progress report. The spirit turns from clear to pale pink in the first week, to rose by month one, to deep garnet by month three. A jar you cannot see through is a jar you cannot read.`,
        },
      ],
    },
  ],
  steps: [
    {
      title: 'Wash, bruise and layer — berries, sugar, spirit, seal',
      description: `Wash the berries gently in cool water — they are soft and bruise easily, which is fine because you are about to bruise them deliberately. Drain well.

Spread the berries on a clean tray and press each one lightly with the flat of a spoon or your thumb — just enough to crack the skin and expose the purple flesh without crushing the berry to pulp. The broken skin is the extraction surface: intact berries macerate slowly and unevenly; bruised berries release their pigment and their flavour into the spirit from the first hour.

Layer in the sanitized jar: a layer of bruised berries, a scatter of rock sugar chunks, more berries, more sugar — finishing with a layer of sugar on top. Pour the rice spirit over until the berries are fully submerged and the sugar is covered. The liquid should stand at least 2 cm above the topmost berry.

Seal the lid tightly. Unlike the fermenting jars in this collection (which must vent CO₂), a maceration jar must be sealed — no CO₂ is produced, and air exposure oxidises the anthocyanins and browns the liqueur.

Set the jar in a cool, dark place. Not in sunlight — UV degrades anthocyanins and the garnet colour fades to brown within weeks. A cupboard, a pantry shelf, the back of a wardrobe. Somewhere it can sit for three months without being bumped, moved or opened out of curiosity.`,
      tip: `The bruising step controls the extraction rate, and the rate matters for flavour. An intact berry's skin is a semi-permeable membrane: alcohol can penetrate it slowly, but the anthocyanins and tannins inside — large, polar molecules — cannot exit through intact cell walls at the same rate. Bruising ruptures the cells at the skin's surface, creating channels through which the pigment and the tannin can diffuse directly into the surrounding spirit. The result is faster extraction (weeks rather than months for full colour) and more complete extraction (pigment from the broken cells plus the intact interior, rather than just the surface). A jar of intact berries at three months is pale rose; a jar of bruised berries at three months is deep garnet. The thumb did the work.`,
    },
    {
      title: 'Wait three months — swirl weekly, watch the colour, resist opening',
      description: `Week 1: the spirit begins to colour. The rock sugar dissolves slowly, settling as a syrup at the bottom. The berries float. The liquid is pale pink — the first anthocyanins have crossed from the broken skin into the alcohol.

Week 2-4: swirl the jar gently once a week — do not shake, do not open — to redistribute the dissolving sugar. The colour deepens to rose, then to ruby. The berries begin to sink as their sugar is extracted and their density increases relative to the sweetened spirit.

Month 2: the colour is a strong, clear ruby-garnet. The berries are sunken and soft. The aroma, if you briefly crack the lid to sniff, is berry-floral-alcoholic — unmistakably fruity, with the rice spirit's clean grain note underneath.

Month 3: the colour is deep garnet, the berries are spent and pale (they have given everything), and the liqueur, tasted, is: gently sweet, warmly alcoholic, tannic (a pleasant dryness at the finish), fruity (blueberry-pomegranate), and faintly floral (the rose-myrtle's signature ester, which is why the plant is called rose myrtle and why the wine smells, distantly, of roses).

It is ready. It can also continue ageing — six months gives a smoother, more integrated drink; a year gives a liqueur of genuine depth. The jar does not expire. It matures.`,
      tip: `The colour change across three months is a real-time anthocyanin extraction curve, and it is the most beautiful progress indicator in any recipe in this collection. Anthocyanins are water-and-alcohol-soluble pigments stored in the berry's vacuoles, and their rate of extraction follows a logarithmic curve: fast at first (the broken-skin cells release immediately), then slower as the diffusion front moves inward through the intact tissue. The first week gives 40% of the total colour; the first month gives 75%; the third month gives 95%. Beyond three months the marginal colour gain is minimal, but the flavour integration — the slow blending of fruit esters, tannins and sugar into a cohesive whole — continues indefinitely. Colour tells you the extraction is done. Time tells you the flavour is done. The two finish on different schedules, and the patient drinker waits for both.`,
    },
    {
      title: 'Strain, bottle and serve — the hillside in a glass',
      description: `Strain the liqueur through a fine-mesh sieve lined with clean muslin into a clean jug. Press the berries gently to extract the last of the absorbed liquid — but gently, because hard pressing forces bitter tannin-rich pulp through the cloth and clouds the liqueur.

The strained liqueur should be: clear (hold to the light — it should be translucent garnet, not opaque), deeply coloured, and when swirled in a glass it should leave slow, viscous legs on the side — a sign of the sugar and the extracted polysaccharides giving the drink body.

Bottle in clean glass, seal, and store in the dark. It keeps indefinitely — the alcohol preserves it, and the colour and flavour only improve with time. Six months in the bottle, post-straining, produces a noticeably smoother drink than three months; a year produces something that a European liqueur-maker would recognise as serious.

Serve cold — from the fridge, or over a single ice cube in a small glass. Sip slowly. The first taste is fruit and sweetness; the middle is the rice spirit's warmth; the finish is tannin and a faint floral note that lingers and that, if you have been to Phú Quốc in July, tastes exactly like the hillside above Hàm Ninh smells in the rain.`,
      tip: `Rượu sim closes the Phú Quốc collection with the island's third great natural product — after the anchovy (nước mắm) and the pepper (tiêu) — the wild sim berry. Each of the three grows in a different zone of the island's geography: the anchovy in the sea, the pepper on the hillside garden, the sim in the wild forest above the garden. Together they form a vertical transect of the island's ecology, from reef to ridge, and the ten recipes in the collection have used all three, in every combination, across every format from raw to fermented to distilled. The fish sauce seasoned the crab. The pepper spiced the snail. The sim berry flavours the closing glass. And the glass is raised — on a Hàm Ninh waterfront, or at a kitchen table in Gotha — to an island whose cuisine is built from three ingredients that the sea, the garden and the forest each contributed, and that the kitchen combined because the island is small enough that all three are within walking distance.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
