'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-hoi-long-heo',
  title: `Bánh Hỏi Lòng Heo (Woven Rice Vermicelli Sheets with Pork Offal — Bình Định)`,
  subtitle: `Bánh hỏi — impossibly fine rice noodles, thinner than angel hair, steamed into flat, woven, fabric-like sheets that tear like silk — served with a platter of boiled pork offal: intestine, ear, stomach, liver, all sliced thin and glistening with mỡ hành (scallion oil). Set a piece of offal on a sheet of bánh hỏi, roll loosely, dip in mắm nêm, and eat. The Bình Định breakfast that turns rice flour into textile and pork into a map of textures.`,
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '3 hr',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/banh-hoi-long-heo.jpg',
  intro: `Bánh hỏi is the most technically demanding noodle in the Vietnamese canon — more demanding than phở (which is cut from a sheet), more demanding than bún (which is extruded through a press), and more demanding than miến (which is dried and reconstituted). Bánh hỏi is WOVEN: the rice-flour batter is pushed through a fine-mesh sieve or a perforated press into threads so thin they are individually invisible (0.3-0.5 mm diameter — thinner than spaghetti's 1.8 mm, thinner than capellini's 0.85 mm, thinner than any commercially produced noodle outside of Asia), and the threads are steamed on a cloth in a criss-crossed, layered pattern that produces a flat, square, fabric-like sheet roughly 10 x 10 cm and 3-4 mm thick.

The sheet's structure IS its identity: hold a sheet of bánh hỏi to the light and you see through it — the threads are so fine and so loosely woven that the sheet is more air than noodle, more negative space than positive, a rice-flour lace that the tongue barely registers as solid before it dissolves. The texture is unique in the noodle world: not chewy (like udon), not slippery (like phở), not snappy (like al-dente spaghetti), but DISSOLVING — the threads are so thin that they hydrate fully in the mouth's saliva within 3-4 seconds, breaking down from a coherent sheet to a smooth, starchy, warm paste that coats the tongue and disappears. Eating bánh hỏi is eating a noodle that does not want to be a noodle — it wants to be a sauce, and it achieves that ambition on the tongue.

Bình Định — the central coastal province whose capital is Quy Nhơn — is the province most associated with bánh hỏi, and the combination "bánh hỏi lòng heo" (woven noodle sheets + boiled pork offal) is the Bình Định breakfast the way phở is the Hanoi breakfast and hủ tiếu is the Saigon breakfast. The pairing is texturally deliberate: the bánh hỏi is SOFT (dissolving, no resistance, a whisper on the tongue), and the lòng heo is VARIED (intestine's snap, ear's cartilage crunch, stomach's chew, liver's silk) — and the soft-base + varied-topping architecture produces a mouthfeel range wider than any other noodle-and-topping combination in the collection. Every piece of offal delivers a different crunch or yield on the same dissolving-noodle base, and the contrast is renewed with every roll.

The mỡ hành — scallion oil, the same green-gold, fragrant, allium-infused oil the sò huyết nướng deployed — is the conduit between the noodle and the offal: it is drizzled over the bánh hỏi sheets (soaking into the threads, lubricating them, preventing them from sticking to each other) AND over the offal platter (coating each slice in a glossy, aromatic, allium-rich film that carries the offal's own flavour to the nose). The mỡ hành is the translator between two textures, and without it the bánh hỏi is dry and the offal is plain.

The dipping sauce is mắm nêm — fermented anchovy sauce, the central coast's pungent, funky, umami-dense condiment that is to Bình Định what mắm tôm is to Nghệ An and nước mắm is to Phú Quốc. Mắm nêm is thicker, cloudier, more aggressively flavoured than nước mắm (it is a PASTE fermented from whole anchovies, not a LIQUID pressed from fermented fish), and its presence beside the bánh hỏi is the regional marker: a table with bánh hỏi and nước mắm is not Bình Định; a table with bánh hỏi and mắm nêm IS.`,
  ingredientSections: [
    {
      title: 'Bánh hỏi (the woven noodle sheets)',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'rice flour (bột gạo)',
          note: `Fine, white, pure-rice flour — the same flour the bánh cuốn and the bánh xèo use. The flour's amylose-to-amylopectin ratio determines the thread's firmness: higher amylose (indica rice, long-grain) produces firmer threads that hold their shape; higher amylopectin (japonica, short-grain) produces softer threads that dissolve faster. Bình Định uses long-grain indica for a thread that is firm enough to weave but soft enough to dissolve on the tongue.`,
        },
        { amount: 1, unit: 'tbsp', name: 'tapioca starch', note: `5-10% of the flour weight — the tapioca adds translucency and a slight chewiness to the otherwise matte, dissolving rice-flour thread.` },
        { amount: 400, unit: 'ml', name: 'water' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (mixed into the batter to prevent sticking)' },
      ],
    },
    {
      title: 'Lòng heo (the offal platter)',
      items: [
        { amount: 200, unit: 'g', name: 'pork intestine (lòng non + lòng già), cleaned by the nậm-pịa protocol' },
        { amount: 150, unit: 'g', name: 'pork ear, boiled 40 min, sliced thin', note: `Cartilage crunch — the ear's elastic cartilage provides the hardest, most persistent chew on the platter.` },
        { amount: 150, unit: 'g', name: 'pork stomach (dạ dày / bao tử), cleaned, boiled 35 min, sliced' },
        { amount: 100, unit: 'g', name: 'pork liver, boiled 5 min, sliced 3 mm', note: `In last, out first — the liver's 5-minute-to-chalky window.` },
        { amount: 100, unit: 'g', name: 'pork belly, boiled 35 min, sliced thin (optional — the non-offal element)' },
      ],
    },
    {
      title: 'Mỡ hành (scallion oil)',
      items: [
        { amount: 80, unit: 'ml', name: 'neutral oil' },
        { amount: 6, name: 'scallions, sliced thin' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'Mắm nêm dipping sauce',
      items: [
        { amount: 3, unit: 'tbsp', name: 'mắm nêm (fermented anchovy paste)', note: `The central coast's condiment — thicker, funkier, more aggressive than nước mắm. Diluted for dipping.` },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, name: 'cloves garlic, pounded' },
        { amount: 2, name: 'bird\'s-eye chilies, sliced' },
        { amount: 50, unit: 'g', name: 'pineapple, diced fine', note: `The fruit that tames the mắm nêm — its bromelain enzyme breaks down residual fish proteins and its sweetness softens the sauce's aggression.` },
      ],
    },
    {
      title: 'Rau sống',
      items: [
        { amount: 200, unit: 'g', name: 'lettuce, húng quế, rau răm, tía tô, kinh giới' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the batter, press through the sieve, steam the sheets — rice flour becomes textile',
      description: `Mix the rice flour, tapioca starch, salt and oil with the water — stir until smooth, no lumps. The batter should be: thin (pourable, like heavy cream), smooth (no grains — strain through a sieve if any remain), and slightly oily (the tablespoon of oil prevents the threads from fusing during steaming).

PRESSING: the traditional method uses a perforated press (khuôn bánh hỏi) — a small, hand-held metal cup with a finely perforated bottom (holes 0.3-0.5 mm diameter). The batter is poured into the cup and pushed through the holes by pressing a piston, and the threads fall onto a steaming cloth in a criss-cross pattern. HOME METHOD: pour the batter through a fine-mesh sieve (the finest available — a tea strainer works), swinging the sieve over the cloth in alternating directions (left-right, then front-back) to create the woven pattern.

Each sheet: pour/press enough batter for a 10 x 10 cm square. The threads should be: individually visible (if they merge into a continuous sheet, the batter is too thick — add water), criss-crossed (the weaving is the structure), and thin enough that the cloth is visible through the sheet.

STEAM: set the cloth with the pressed threads in a steamer over boiling water. Steam 3-4 minutes — the threads set (the rice starch gelatinises), turning from opaque-white-raw to translucent-white-cooked. Lift the cloth out. Peel the sheet gently — it should come away as a coherent, flexible, lace-like square.

Oil the surface lightly (a brush dipped in oil, swept once across the sheet) — the oil prevents the sheets from sticking when stacked. Stack on a plate. Repeat until the batter is used — roughly 15-20 sheets from 500 g of flour.`,
      tip: `The 0.3-0.5 mm thread diameter is the parameter that defines bánh hỏi and distinguishes it from every other rice noodle: phở is 3-5 mm wide (a flat ribbon), bún is 1-2 mm diameter (a round strand), and bánh hỏi is 0.3-0.5 mm (a thread — barely visible individually, legible only as a woven mass). The thread's thinness determines its dissolution rate on the tongue: surface-area-to-volume ratio increases as diameter decreases (a 0.4 mm thread has roughly 5x the surface-area-per-gram of a 2 mm bún strand), and the higher surface area means the saliva's amylase contacts more starch per second, dissolving the thread faster. A phở noodle survives in the mouth for 10-15 seconds of chewing. A bún strand survives 8-10 seconds. A bánh hỏi thread dissolves in 3-4 seconds. The thread's thinness IS its texture — the dissolution IS the experience — and no thicker noodle can replicate it.`,
    },
    {
      title: 'Prepare the offal platter and the mỡ hành — five textures on one plate',
      description: `OFFAL: clean all offal by the standard protocol (salt-scrub, acid-soak, double-blanch — the same protocol the nậm pịa and the thắng cố used). Boil each component separately, to its own doneness:

INTESTINE: 25-30 min until tender but still snappy (a chopstick passes through with slight resistance — the intestine's collagen should be softened but not dissolved, because the SNAP is the texture the offal platter needs).

EAR: 40 min — the cartilage softens from rigid to yielding-but-crunchy. Slice 2 mm thin against the grain — each slice shows the ear's cross-section: skin-fat-cartilage-fat-skin, a five-layer laminate.

STOMACH: 35 min — firm, dense, slightly chewy. Slice 3 mm.

LIVER: 5 min — silky, creamy, the shortest cook on the platter. Slice 3 mm. The liver goes in the boiling water LAST and comes out FIRST.

BELLY (if using): 35 min — skin-on, the skin softened to a gelatin-rich, yielding, translucent layer over the fat-and-meat below. Slice 3 mm.

Arrange all sliced offal on a platter — the five (or four) components side by side, each one a different colour (intestine's pale, ear's white-pink, stomach's cream, liver's dark brown, belly's pink-white) and a different texture.

MỠ HÀNH: heat oil to 160°C. Add sliced scallion and salt — the oil sizzles, the scallion wilts and turns vivid green in 10-15 seconds. Off the heat IMMEDIATELY — the mỡ hành should be: green (not brown), fragrant (the allicin's volatile compounds captured in the oil within the 10-second window), and pourable.

Drizzle the mỡ hành over the offal platter AND over the stacked bánh hỏi sheets — both glisten, both are lubricated, and both carry the scallion's aroma.`,
      tip: `The lòng heo platter's five textures map onto three of the collection's five crunch mechanisms: the ear provides SCLERENCHYMA-LIKE crunch (the cartilage's collagen-and-proteoglycan matrix resists compression in a fibre-wall-like manner — not technically sclerenchyma, which is a plant term, but structurally analogous). The intestine provides TURGOR-LIKE snap (the cleaned intestine's muscular wall, boiled to the right doneness, snaps under the tooth like a pressurised cell). The liver provides ZERO crunch — pure yield, pure silk, the textural rest between the crunches. The stomach provides a DENSE CHEW — neither crunchy nor yielding, but requiring sustained jaw work that extends the mouthful's duration. The platter is a texture sampler, and the bánh hỏi's dissolving softness is the neutral base that lets each texture speak without competition.`,
    },
    {
      title: 'Roll, dip in mắm nêm, eat — the Bình Định breakfast at the market',
      description: `MẮM NÊM SAUCE: mix the mắm nêm with sugar, lime, garlic, chili and diced pineapple. Stir until the sugar dissolves. The sauce should be: pungent (the mắm nêm's fermented-anchovy funk is the FIRST note and the LOUDEST note — this is not a subtle sauce), sweet (the sugar and the pineapple's fructose rounding the funk), sour (the lime cutting the salt), and chunky (the pineapple dice providing a fruit-sweet, enzyme-active, texture-contrasting element that no other dipping sauce in the collection contains).

THE ROLL: take one sheet of bánh hỏi (glistening with mỡ hành). Lay a piece of offal on the sheet — one piece per roll, so each roll is a single-texture experience. Add a leaf of lettuce, a sprig of húng quế, a strand of rau răm. Roll loosely — the sheet is delicate and tears if wrapped tight; the loose roll is the format, and the looseness lets the mắm nêm enter the roll's interior through the gaps.

Dip the roll's end into the mắm nêm. Bite.

The sequence: the bánh hỏi's threads dissolve first (3-4 seconds, the starch coating the tongue in a smooth, warm, neutral base), then the offal's texture arrives (the intestine's snap, or the ear's crunch, or the liver's silk — whichever piece this roll holds), then the mắm nêm's funk floods the mouth (pungent, salty, sweet, sour, with the pineapple's fruity sweetness arriving 2 seconds after the funk as a relief), then the herbs reset (húng quế's anise, rau răm's pepper, lettuce's cool water).

The Bình Định morning: the market stall, the low table, the bánh hỏi stacked high, the offal platter steaming, the mắm nêm in a communal bowl. Each person rolls their own. Each roll is different (a different offal, a different herb, a different amount of mắm nêm). The breakfast takes 20 minutes and costs 30,000 đồng and leaves the eater full until noon and smelling faintly of mắm nêm for the rest of the morning, which, in Bình Định, is not a problem — everyone smells of mắm nêm, because everyone ate bánh hỏi.`,
      tip: `Bánh hỏi lòng heo is the collection's most TEXTURE-FOCUSED recipe: the noodle is chosen for its dissolution (the softest noodle), the offal is chosen for its variety (five textures on one plate), the mỡ hành is chosen for its lubrication (oil as texture-smoother), and the mắm nêm is chosen for its viscosity (a thick paste, not a thin sauce — the paste CLINGS to the roll rather than dripping off, adding a final textural layer to the mouth). Every component is selected for what it FEELS rather than for what it tastes, and the feeling is the dish's argument: that a breakfast can be a tactile experience as much as a flavour one, and that the tongue's touch receptors deserve as much attention as its taste receptors.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
