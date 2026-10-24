'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'tuong-ban',
  title: `Tương Bần (Fermented Soybean Paste of the Red River Delta)`,
  subtitle: `Soybeans boiled, inoculated with wild mould on rice straw, fermented in the sun for three months in stoneware jars until they collapse into a thick, malty, deeply savoury paste — the mother sauce of the northern Vietnamese table, and the ingredient that fish sauce never replaced.`,
  category: 'VEGETARIAN',
  difficulty: 'Hard',
  totalTime: '3 months',
  rating: 4.7,
  baseServings: 12,
  heroImage: '/images/recipes/tuong-ban.jpg',
  intro: `Every cuisine with soybeans eventually makes a fermented paste from them — miso in Japan, doenjang in Korea, doubanjiang in China — because the chemistry is too good and too obvious: Aspergillus moulds growing on cooked beans produce amylase and protease enzymes that, over weeks and months, break the soybean's protein and starch down into free amino acids (principally glutamate) and free sugars (principally glucose), and the result is umami so concentrated it functions as a seasoning on its own. Vietnam's entry in this global family is tương, and its most famous address is Bần — Bần Yên Nhân, a town in Hưng Yên province, on the old road between Bắc Ninh and Hanoi — which has made tương for long enough that the paste carries the town's name across the entire northern Delta the way Dijon carries its mustard across France.

Tương Bần is not a bottled sauce. It is a thick, coarse, dark-brown paste — closer to a chunky miso than to soy sauce — with visible bean fragments, a malty-sweet aroma, and a flavour that lands as savoury first, sweet second and faintly sour-fermented third. In the northern kitchen it is everywhere: it is the dipping sauce for boiled pork and tofu (tương chấm), the braising liquid for eggplant (cà pháo muối tương), the base of the peanut-liver nước lèo that this collection met in Huế, and the seasoning that Buddhist pagoda kitchens — which use neither fish sauce nor shrimp paste — depend on for their entire umami supply. It is the oldest soy ferment in Vietnamese cooking, predating fish sauce's dominance by centuries, and it has never been replaced by fish sauce so much as joined by it: the northern table uses both, in different places, for different reasons, and understands the difference.

The traditional process is a three-stage fermentation run entirely by wild organisms — no purchased starter, no controlled-temperature incubation, no laboratory culture. Soybeans are boiled until very soft, drained, and spread on rice straw mats or banana leaves in a warm, humid place. Over three to five days, wild Aspergillus spores from the air and from the straw colonise the beans, covering them in a fine white-then-yellow-green mould — the koji stage, in Japanese terminology, though the Vietnamese maker calls it mốc and monitors it by smell and colour rather than by temperature chart. This mould-coated soybean, now called mốc tương, is the enzyme factory: its Aspergillus produces the proteases and amylases that will drive the entire fermentation.

The mốc is then combined with salt, water, and — in many Bần formulas — a quantity of roasted glutinous rice (also mould-inoculated), packed into wide-mouthed stoneware jars, and set in full sun with the lids loosely covered. For the next two to three months the jars sit in the courtyard, exposed to the cycle of sun and night, and the enzymes do their slow work: proteins break to peptides and amino acids, starches break to sugars, and lactic acid bacteria (always present, always uninvited, always welcome) produce the mild acidity that keeps hostile organisms out and gives the finished tương its faint, clean sourness. The maker stirs the jars daily, tastes weekly, and declares the paste done when it has darkened to the correct shade of brown, thickened to the correct spoonable consistency, and tastes — on a piece of boiled tofu, never off the spoon — of malt, of salt, of savouriness so deep it seems to have memory.

This recipe documents the traditional method with modern guardrails — sanitized jars, measured salt, clear hard-stop rules for off-odours and wrong-coloured moulds — because the collection's job is to record the food as it is made. Tương Bần is also sold in jars at every Vietnamese grocer in Europe, and buying it is the honest path for anyone who wants to cook northern Vietnamese food this month rather than three months from now. But making it is making the Delta's oldest seasoning from scratch, and the jar you finish is the jar you use in every recipe this collection has called for tương — and in every recipe it has not yet written.`,
  ingredientSections: [
    {
      title: 'The soybeans',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'dried soybeans, whole',
          note: `Good-quality, uniform, not split. Soaked overnight and boiled until very soft — a bean should crush to paste between two fingers with zero resistance. Undercooked beans will not mould properly because the Aspergillus needs access to the interior protein and starch, and a hard bean denies it.`,
        },
      ],
    },
    {
      title: 'The mốc (mould starter)',
      items: [
        {
          amount: 1,
          name: 'bundle of dry rice straw, clean (for the traditional wild inoculation)',
          note: `In the Bần method, the cooked beans are spread on or layered with dry rice straw in a warm, humid space (28-35°C), and the wild Aspergillus spores already present on the straw — and in the air of any Vietnamese kitchen that has made tương before — colonise the beans over 3-5 days. The straw is the delivery vehicle, not the organism; the organism is in the environment.\n\nMODERN ALTERNATIVE (more reliable, especially in Europe): use purchased koji starter (Aspergillus oryzae spores, available online from koji and miso suppliers) — 2 g per kilo of cooked beans, sprinkled over the cooled beans and incubated at 30°C for 48 hours. Same organism, same enzymes, same result, vastly more predictable.`,
        },
      ],
    },
    {
      title: 'The roasted rice (optional, but traditional in Bần)',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'glutinous rice, dry-roasted until golden, then cooked and mould-inoculated alongside the beans',
          note: `The rice contributes additional amylase (from the Aspergillus growing on its starch) and free sugars to the ferment, which give the finished tương its malty-sweet depth. Some formulas omit it and the paste is more purely savoury; the Bần formula includes it, and the sweetness it adds is what makes tương Bần identifiably Bần.`,
        },
      ],
    },
    {
      title: 'The brine and the jar',
      items: [
        {
          amount: 250,
          unit: 'g',
          name: 'coarse sea salt (roughly 12-15% of the total packed weight)',
          note: `The safety floor. Below 10% the ferment is vulnerable to Clostridium and Bacillus cereus toxins; above 18% the Aspergillus enzymes slow to a crawl and the ferment takes twice as long. 12-15% is the traditional Bần range and the one that balances safety and speed.`,
        },
        { amount: 1.5, unit: 'L', name: 'water, boiled and cooled' },
        {
          amount: 1,
          name: 'stoneware or glass jar, 4-5 L, wide-mouthed — sanitized with boiling water',
          note: `Wide-mouthed because the paste is stirred daily and needs access. Stoneware for tradition and thermal mass; glass for visibility. The jar sits in full sun for three months, so glass must be wrapped in cloth to prevent algae growth on the inner surface. A loose lid or a cloth-and-rubber-band cover — CO₂ must vent.`,
        },
      ],
    },
  ],
  steps: [
    {
      title: 'Boil the soybeans to mush — truly soft, no shortcuts',
      description: `Soak the soybeans overnight in plenty of water — they will double in volume. Drain, cover with fresh water, and boil 3-4 hours (or pressure-cook 45 minutes at full pressure) until a bean crushes to paste between two fingers with absolutely no core resistance.

Drain well. Spread the hot beans on a clean tray and cool to 35-40°C — warm enough to welcome the mould, not hot enough to kill it.

If the beans are even slightly firm at the centre, the mould will colonise only the surface and the interior starch and protein will remain locked — producing a tương that is thin, flat and sour rather than thick, malty and savoury. There is no overcooking soybeans for tương. Cook them softer than you think, then softer still.`,
      tip: `The boil is not cooking in the culinary sense — it is cell destruction in the biological sense. The mould's enzymes are large protein molecules that cannot penetrate intact plant cell walls; they need the walls to be ruptured by heat, exposing the interior starch and protein to enzymatic attack. A fully boiled bean is a bean with no intact cells, which means the Aspergillus has access to 100% of the substrate. A firm bean is a bean with a surviving core of intact cells, and the enzyme is locked out of precisely the material it needs. The softness is not a texture preference. It is an access requirement.`,
    },
    {
      title: 'Grow the mốc — 3-5 days of wild mould, or 48 hours of koji starter',
      description: `TRADITIONAL (wild): spread the warm, drained beans in a layer 3-4 cm deep on a tray lined with dry rice straw, cover loosely with more straw or a damp cloth, and leave in a warm (28-35°C), humid, well-ventilated space for 3-5 days. By day 2-3 a fine white fuzz appears on the bean surfaces; by day 4-5 it has turned yellow-green, the beans smell sweetly musty — like a ripe cheese or a rising bread — and the surface mould is thick enough that the beans hold together in a mat when lifted.

MODERN (koji starter): cool the drained beans to 35°C, sprinkle 2 g of Aspergillus oryzae spore powder over them, toss to distribute, spread 3 cm deep in a tray, cover with a damp cloth, and incubate at 28-32°C for 48 hours. The result is the same white-to-yellow-green mould coat, achieved faster and more reliably.

HARD STOP: any mould that is BLACK, PINK or BRIGHT ORANGE is the wrong organism and potentially toxic. Discard the entire batch without tasting. The correct colours are white → pale yellow → yellow-green. The correct smell is sweetly musty, like fresh bread or camembert rind. A sour, rotten or ammonia smell means contamination. Start over.`,
      tip: `The mould is almost certainly Aspergillus oryzae or a close relative — the same organism that makes Japanese koji, Chinese qu, and Korean nuruk. It is one of the most important organisms in human food history: it produces amylase (which converts starch to sugar), protease (which converts protein to amino acids and peptides), and lipase (which converts fat to fatty acids), and between them these three enzymes transform a bland cooked bean into a flavour concentrate. The wild method relies on environmental spores, which is why tương-making towns like Bần have a "house culture" — decades of spore accumulation in the walls, the jars, the straw, making each subsequent batch more reliable. A kitchen that has never made tương has no such culture, which is why the purchased koji starter exists: it supplies the correct organism at the correct concentration, reliably, on the first attempt.`,
    },
    {
      title: 'Dissolve salt, combine everything, pack the jar — and put it in the sun',
      description: `Dissolve the salt in the boiled-and-cooled water. Break the mốc-coated beans apart (they will have matted together) and combine them with the brine in the sanitized jar. If using the roasted rice mốc, add it now. Stir thoroughly. The mixture should be a thick, coarse, soupy slurry — roughly the consistency of a chunky porridge.

Cover the jar with a cloth or a loosely set lid and put it in the sunniest spot you have — a south-facing windowsill, a balcony, a courtyard. The sun's warmth drives the enzymatic reactions faster; the daily temperature cycle (warm days, cool nights) produces the rhythm the ferment needs.

Stir the jar daily with a clean, dry spoon — scraping the bottom and the sides, mixing the surface back in. The daily stir is non-negotiable: it prevents mould from establishing on the surface, exposes fresh substrate to the enzymes, and aerates the paste, which the Aspergillus enzymes (aerobic) need.`,
      tip: `Sun exposure is the Bần method's free temperature control. On a sunny day the jar's temperature climbs to 35-40°C, which is the optimal range for Aspergillus protease and amylase activity — faster than a 25°C indoor ferment by a factor of roughly two. At night the temperature drops and the reaction slows, allowing flavour compounds to accumulate without the harsh, over-fermented notes a constantly high temperature produces. The daily cycle is a temperature program, executed by the sun, for free, and it is why courtyard tương is rounder and more complex than indoor tương, which ferments at a flat, monotonous 28°C. The sun is doing the work a miso maker's koji room does with heaters and timers — just more slowly, more gently, and with a rhythm the jar's own chemistry responds to.`,
    },
    {
      title: 'Ferment 2-3 months — stir daily, taste weekly, wait',
      description: `Week 1-2: the paste bubbles gently, darkens from pale to tan, and smells actively yeasty-malty — the enzymes are at peak activity and the lactic bacteria are establishing.

Week 3-6: the colour deepens to brown, the bean fragments soften further and begin to dissolve, the paste thickens, and the smell shifts from actively fermenting to calmly savoury — like a miso at rest.

Week 8-12: the paste is a thick, dark, spoonable, coarse brown mass with fully soft bean fragments dispersed throughout. The smell is malty, deeply savoury, faintly sweet, with no sharpness or rawness. Taste it — on a piece of boiled tofu, never off the spoon (it is too salty alone to judge): it should be savoury, malty-sweet, faintly sour, with a long umami finish that sits on the tongue after the spoon is gone.

If by week 12 the paste is still pale, thin or actively sour, it needs more time or more sun. If it smells of ammonia or rot — discard. A correct tương smells like a well-aged miso with a touch of dark bread, and there is no ambiguity about it.`,
      tip: `The flavour development curve of soybean fermentation is non-linear and patient: the first month produces the bulk of the enzyme activity (starch → sugar, protein → amino acids), the second month produces the deepening and mellowing (Maillard reactions between the new sugars and amino acids, giving colour and malty complexity), and the third month produces the rounding (further Maillard, ester formation by yeast, and the slow lactic acidification that gives the clean sourness). Stopping at one month gives a paste that is functional but harsh; at two months it is good; at three it is Bần. Longer — six months, a year — gives a darker, smoother, more miso-like paste that some households prefer. The jar does not expire. It matures.`,
    },
    {
      title: 'Use it everywhere the northern table asks — and understand what it replaced',
      description: `DIPPING SAUCE (tương chấm): 3 tablespoons tương, thinned with a splash of warm water, with minced garlic, chili, and a pinch of sugar stirred in. Served in a communal saucer beside boiled pork, boiled tofu, steamed eggplant, and every plain vegetable the pagoda kitchen sets on the table. This is the oldest form and the most common — the one that every northern child knows before they know fish sauce.

BRAISING LIQUID: stir 2-3 tablespoons into a braise of eggplant, tofu or pork — the enzymes and sugars in the paste drive Maillard browning in the pot and produce a dark, malty, clinging glaze that fish sauce alone never achieves.

NƯỚC LÈO BASE: dissolved in broth with peanuts, sesame and pork liver, it becomes the thick tan sauce that Huế pours over its bánh khoái and its nem lụi — the same sauce this collection has made three times, whose depth now traces back to this jar.

Keeps indefinitely at room temperature in a sealed jar — the salt and the acid environment are hostile to spoilage. Refrigerated, it thickens and mellows further. A household jar lasts a year, spooned from daily, and the next jar is started before the current one runs out, so the kitchen is never without it.`,
      tip: `Tương is older than nước mắm in the Vietnamese kitchen — fermented soybeans require only soybeans and salt, while fish sauce requires access to the sea and a warm coast — and in the inland, riverine, landlocked villages of the Red River Delta, tương was the umami source for centuries before the coastal fish-sauce trade connected to the interior. The northern table still uses both, and it uses them differently: fish sauce for clean, direct, marine-sharp salting; tương for deep, malty, sweet-savoury complexity. One is a scalpel and the other is a bass note, and the northern cook reaches for each by instinct — fish sauce for a broth, tương for a dip, both for a braise. Understanding that tương is not a substitute for fish sauce but a parallel system, older and differently voiced, is understanding the northern kitchen at its foundation. The jar in the courtyard is that foundation. Everything built on it — every braise, every dip, every Huế sauce — stands because the beans fermented.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
