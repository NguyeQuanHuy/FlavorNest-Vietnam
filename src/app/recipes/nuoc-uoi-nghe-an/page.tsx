'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'nuoc-uoi-nghe-an',
  title: `Nước Ươi (Swollen Forest-Seed Drink — Nghệ An's Cooling Gel)`,
  subtitle: `Hạt ươi — the small, brown, wrinkled seed of a tropical forest tree — soaked in water until it swells to 5x its dry size, splits open, and releases a translucent, amber, trembling gel that looks like a jellyfish and tastes of forest and faintly of honey. Served in a glass of rock-sugar syrup over ice, the gel floating like a strange, beautiful, edible organism that the Nghệ An summer heat demands and the Nghệ An forest provides.`,
  category: 'DESSERT',
  difficulty: 'Easy',
  totalTime: '15 min + 4-6 hr soaking',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/nuoc-uoi-nghe-an.jpg',
  intro: `Hạt ươi — the seed of Scaphium macropodum (also called Sterculia lychnophora), a tropical tree in the Malvaceae family that grows wild in the forests of the Trường Sơn mountain range running along Nghệ An, Hà Tĩnh and Quảng Bình — is one of the strangest food ingredients in the Vietnamese pantry: a small (2-3 cm), brown, wrinkled, hard, unremarkable-looking seed that, when soaked in water, undergoes a DRAMATIC PHYSICAL TRANSFORMATION.

The dry seed absorbs water through its porous outer coat, and the seed's polysaccharide-rich endosperm (the tissue that surrounds the embryo, packed with storage carbohydrates) hydrates and swells — absorbing water at a rate of roughly 3-5x its dry weight within 4-6 hours. As the endosperm swells, it pushes against the seed coat from inside, and the coat splits open along pre-formed fracture lines, releasing the swollen endosperm as a TRANSLUCENT, AMBER-COLOURED, GEL-LIKE MASS that is: wobbly (the hydrated polysaccharide forms a loose, trembling gel — structurally similar to agar or gelatin but produced by a plant polysaccharide rather than by an algal or animal protein), faintly sweet (the endosperm contains residual sugars — glucose and fructose — that dissolve into the gel during hydration), and faintly fragrant (the seed carries volatile compounds — principally terpenes and phenolics — from the Scaphium tree's own chemistry, giving the gel a subtle, woody, honey-like, faintly medicinal aroma that no other Vietnamese ingredient carries).

The swollen gel is the drink's main ingredient — it floats in a glass of sweetened water or rock-sugar syrup, translucent and trembling, looking like a piece of amber-coloured jellyfish or like a chunk of very soft, very translucent, very beautiful ice. The eater-drinker scoops the gel with a spoon, bites through it (the texture is: yielding, slippery, dissolving — softer than agar, softer than grass jelly, approaching the consistency of barely-set gelatin), and drinks the sweet liquid around it. The gel contributes texture rather than flavour — its taste is mild and nearly neutral — and the drink's sweetness comes from the syrup, and the drink's refreshment comes from the ice, and the drink's INTEREST comes from the gel's strange, translucent, living-looking, organism-like presence in the glass.

In the Vietnamese folk-medicine framework, hạt ươi is classified as "thanh nhiệt giải độc" (heat-clearing, toxin-flushing) — the same category the winter melon, the mung bean, the aloe vera and the bitter gourd occupy. The seed is prescribed for: sore throat (the gel's mucilaginous coating soothes inflamed mucosa — the same coating mechanism the nước mía gừng's sucrose film provided), constipation (the polysaccharide gel is a bulk-forming fibre that absorbs water in the intestine and softens the stool — the same mechanism commercial fibre supplements like psyllium use), and "nội nhiệt" (internal heat — the catch-all folk diagnosis for acne, mouth ulcers, insomnia and irritability that the Vietnamese kitchen treats with cooling foods).

The pharmacology is, as with the other thanh-nhiệt ingredients, plausible but incompletely proven: the seed's polysaccharide has documented mucilaginous (coating) and laxative (bulk-forming) properties in in-vitro studies, and the traditional use for sore throat and constipation is consistent with these properties. The "heat-clearing" claim is less well-supported by modern data but is consistent with the hydration + fibre + low-calorie profile that every "cooling" food in the Vietnamese system shares.`,
  ingredientSections: [
    {
      title: 'The ươi seeds',
      items: [
        {
          amount: 20,
          unit: 'g',
          name: 'hạt ươi (Scaphium macropodum seeds), dried',
          note: `Small, brown, wrinkled, hard — sold at Vietnamese traditional-medicine shops, dried-goods stalls and some Asian groceries (sometimes labelled "malva nut" or "sterculia seed" in English). 20 g = roughly 15-20 seeds, which swell to produce roughly 200-300 g of gel — enough for 4 drinks. Buy seeds that are: uniform brown (not black or mouldy), hard (not soft or crumbly — soft seeds have absorbed moisture and may be spoiled), and faintly aromatic (a woody, honey-like scent when sniffed closely).`,
        },
      ],
    },
    {
      title: 'The soaking',
      items: [
        {
          amount: 1,
          unit: 'L',
          name: 'room-temperature water',
          note: `NOT hot water — hot water (>60°C) causes the polysaccharide to dissolve INTO the water rather than forming a discrete gel, producing a cloudy, viscous liquid instead of translucent gel chunks. Room-temperature water (20-30°C) hydrates the seed slowly, allowing the polysaccharide to swell in place and retain its structure as a coherent, scoopable, spoonable gel mass.`,
        },
      ],
    },
    {
      title: 'The syrup and serving',
      items: [
        { amount: 80, unit: 'g', name: 'rock sugar (đường phèn), dissolved in 600 ml water', note: `The same clear, clean, single-note syrup the chè hạt sen used. Light sweetness — the ươi gel's own faint sweetness should be perceptible, not drowned.` },
        { amount: 2, name: 'pandan leaves, knotted, simmered in the syrup 5 min (optional)' },
        { amount: 1, name: 'glass full of ice cubes per serving' },
      ],
    },
    {
      title: 'Optional additions',
      items: [
        { amount: 50, unit: 'g', name: 'dried longan flesh (nhãn nhục), added to the syrup', note: `The traditional-medicine partner — longan is classified as "bổ" (tonic, warming), balancing the ươi's "mát" (cooling). The sweet-smoky dried longan in the cold, cooling ươi drink is a hot-cold balance in a single glass.` },
        { amount: 1, unit: 'tbsp', name: 'goji berries (kỷ tử)', note: `Same role as in the canh sườn bí đao — visual (red dots in amber liquid) and symbolic ("nourishes the liver, brightens the eyes").` },
        { amount: 50, unit: 'g', name: 'hạt sen (lotus seeds), boiled soft', note: `Added for texture — the lotus seed's starchy, chalky-soft bite against the ươi gel's slippery dissolve.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Soak the seeds 4-6 hours — watch them transform from stone to jellyfish',
      description: `Place the dried ươi seeds in a bowl. Pour room-temperature water over — enough to cover by 5 cm (the seeds swell dramatically and need room). Cover loosely. Leave 4-6 hours at room temperature — or overnight in the refrigerator (slower hydration, same result).

THE TRANSFORMATION (slow, visible, fascinating):

HOUR 0: the seeds sit at the bottom — small, brown, wrinkled, hard, inert. Nothing happens for the first 30 minutes as the water penetrates the seed coat's outer layer.

HOUR 1: the seeds have swollen by roughly 50% — they are visibly larger, the wrinkles smoothing as the internal endosperm absorbs water and pushes outward against the coat. The first hairline cracks appear in the coat.

HOUR 2-3: the coat SPLITS — the swelling endosperm breaks through the pre-formed fracture lines, and translucent, amber-coloured, gel-like material begins oozing from the cracks. The seed is turning inside out: the hard, brown exterior cracking open to reveal a soft, amber, trembling interior. The water around the seeds turns faintly amber (the polysaccharide's soluble fraction dissolving into the soaking water).

HOUR 4-6: the transformation is complete. Each seed has swollen to 3-5x its original size, the coat has split open fully, and the endosperm has hydrated into a TRANSLUCENT, AMBER, WOBBLY GEL MASS — each one a small, irregular, jellyfish-like blob ranging from 3-6 cm across, with the brown seed-coat fragments clinging to the surface like barnacles on a hull.

CLEAN: gently remove the brown coat fragments from each gel blob — peel them off by hand or rinse under gentle water. The fragments are fibrous, slightly bitter and texturally intrusive; the cleaned gel is: pure amber, translucent (hold it to the light — you can see through it, faintly), smooth-surfaced, and trembling at the slightest touch.

The cleaned gel can be used immediately or stored in the soaking water in the refrigerator for 2-3 days.`,
      tip: `The ươi seed's polysaccharide — the gel-forming compound — is principally a GLUCOMANNAN (a polymer of glucose and mannose linked by β-1,4 glycosidic bonds), the same class of polysaccharide found in konjac (the Japanese gel-food ingredient) and in chia seeds (which also form a mucilaginous gel when soaked). Glucomannan's gel-forming mechanism is HYDRATION, not thermal setting (unlike agar, which requires heating and cooling to gel, or gelatin, which requires heating, dissolving, and cooling): the glucomannan chains in the ươi seed's endosperm absorb water molecules into their polymer matrix at room temperature, swelling and entangling into a loose, hydrated, three-dimensional network that IS the gel. No heating required. No cooling required. Just water, time, and a polymer that was designed by the tree to absorb water — because the endosperm's biological function is to hydrate when the seed germinates, absorbing soil-water to fuel the embryo's first growth. The drink repurposes the seed's germination mechanism as a food-texture technology.`,
    },
    {
      title: 'Make the syrup, assemble — gel in syrup, over ice, a glass of forest and cool',
      description: `SYRUP: dissolve rock sugar in 600 ml water over medium heat. Add pandan leaves if using — simmer 5 minutes, remove. Add dried longan and/or goji berries if using — let them infuse in the warm syrup for 10 minutes, then cool. The syrup should be: clear, lightly sweet (lighter than the chè hạt sen's syrup — the ươi drink is a BEVERAGE, not a dessert, and the sweetness should refresh rather than satiate), and carrying the pandan's vanilla-green note (if used) as a background whisper.

Cool the syrup to room temperature. Refrigerate if making ahead.

ASSEMBLE (per glass): fill a tall glass with ice cubes. Spoon 2-3 pieces of the cleaned ươi gel into the glass — the amber blobs settle among the ice cubes, translucent, trembling, looking like exotic marine organisms trapped in a frozen sea. If using longan and lotus seeds: add 2-3 longan pieces and 3-4 lotus seeds.

Pour the cold syrup over — fill the glass. The gel floats (its density is roughly 1.01 g/cm³ — barely denser than water, hovering at mid-glass rather than sinking to the bottom or floating to the top). The ice cubes clink. The gel trembles. The longan's brown, the goji's red, the ươi's amber and the syrup's pale gold produce a glass that looks like a terrarium of edible translucent organisms — the most visually unusual drink in the collection.

DRINK AND SCOOP: sip the syrup through a straw (cold, sweet, pandan-scented, refreshing), and scoop the gel with a spoon (each spoonful lifts a wobbly, slippery, trembling blob that the tongue presses against the palate and that yields — dissolving, not quite chewed, not quite drunk, somewhere between a food and a liquid, the texture of something that was a stone 6 hours ago and is now a jellyfish, the forest's seed transformed by nothing but water and time into a thing the mouth has never encountered before).

Nước ươi is the Nghệ An summer's cooling drink — drunk at every sidewalk stall from May to September, when the temperature exceeds 35°C and the body wants something cold, sweet, hydrating and STRANGE. The strangeness is the point: no other drink in the Vietnamese canon has a texture like the ươi gel's — softer than any jelly, more translucent than any pudding, more otherworldly than any ingredient that came from a tree — and the strangeness is the conversation-starter, the Instagram-trigger, and the reason a first-time drinker stares into the glass for 10 seconds before the first sip, wondering what the translucent amber thing floating in the ice is, and whether it is alive.

It is not alive. It was a seed. It absorbed water. It became a gel. And the gel — trembling in the glass, tasting faintly of forest and honey, dissolving on the tongue in 3 seconds — is the Trường Sơn mountain's own cooling technology, designed by the Scaphium tree for germination and repurposed by the Nghệ An kitchen for summer.`,
      tip: `Nước ươi is the collection's most TEXTURALLY UNUSUAL drink — the only beverage in the project that contains a SOLID-GEL component floating in a liquid, producing a drink-and-eat hybrid that neither a straw alone nor a spoon alone can fully consume (the straw drinks the syrup but cannot lift the gel; the spoon scoops the gel but cannot drink the syrup). The Vietnamese solution: use BOTH — the wide straw for the liquid, the long-handled spoon for the gel — and the dual-utensil format is the format's signature, the same way the cơm hến's spoon (not chopsticks) and the bánh đúc's toothpick (not fork) were format-specific utensil choices. The ingredient dictates the utensil, and the utensil reveals the ingredient's nature: if you need two tools to consume it, it is two things at once — food AND drink, solid AND liquid, stone AND jellyfish — and the ươi's dual nature is its deepest strangeness and its most enduring charm.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
