'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-uot-thit-nuong-kim-long',
  title: `Bánh Ướt Thịt Nướng Kim Long (Fresh Rice Sheets Rolled Around Charcoal Pork)`,
  subtitle: `Cool, silk-soft steamed rice sheets rolled by hand around slices of sesame-honey pork still smoking from the charcoal, from the garden-house village of Kim Long upriver of the citadel. Cold silk outside, hot smoke inside, and a peanut-liver sauce to dunk it in — Huế's most elegant handheld food.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 45 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/banh-uot-thit-nuong-kim-long.jpg',
  intro: `Kim Long sits on the north bank of the Perfume River, a few kilometres upstream of the citadel, and it is the district of the nhà vườn — the garden houses of the old mandarin families, walled compounds of fruit trees and longan shade where court officials retired to grow things and receive guests. It is also, by unanimous city consensus, the address of one dish: bánh ướt thịt nướng. The stalls cluster along Kim Long road under the trees, most of them run by women whose mothers ran them, and what they sell looks almost too simple to have a reputation — a fresh steamed rice sheet, a few slices of charcoal-grilled pork and a spray of herbs rolled inside it, a bowl of dipping sauce. Then you eat one, and the reputation explains itself: the roll is cool and the pork inside it is hot, and the two arrive together.

The bánh ướt is the same fresh steamed rice sheet that appears across Vietnam under a family of names — bánh cuốn in Hanoi, bánh mướt in Hà Tĩnh — a thin batter of rice flour ladled onto cloth stretched over steam, set in thirty seconds, and lifted off in a translucent, slippery, faintly elastic sheet. Ướt simply means wet: the sheet is used fresh, never dried, at room temperature, brushed with scallion oil so it neither sticks nor dries. Its entire contribution is textural and thermal — cool, yielding, neutral silk — and it exists in this dish to be the exact opposite of what it wraps. Kim Long makes the sheets continuously through the afternoon, because a bánh ướt more than a few hours old loses the suppleness that lets it roll without cracking, and suppleness is the whole point of it.

The thịt nướng is where Huế's grilling voice speaks: thin-sliced pork shoulder with its fat, marinated in the city's signature register — lemongrass, garlic, shallot, fish sauce, honey and a heavy hand of sesame, both seeds and oil — and grilled fast over real charcoal until the edges char and the honey caramelizes in streaks. The sesame is the tell. Northern grilled pork (the bún chả of Hanoi) is caramel-and-fish-sauce direct; southern (the thịt nướng of Saigon) is sweeter and lemongrass-loud; Huế's is the perfumed middle, nutty with toasted sesame and only just sweet, built to be smelled from the street. The physics is the nem lụi's physics — radiant ember heat, dripping fat returning as smoke — applied to slices instead of paste.

And then the roll is dunked, and here Kim Long divides into two loyal congregations. Most of the famous stalls serve nước lèo — the thick peanut-sesame-liver emulsion this collection met with bánh khoái and nem lụi, Huế's rich answer to grilled meat. A minority, and many home tables, serve mắm nêm, the pungent fermented anchovy sauce, pineapple-sweetened, for those who want the roll's coolness answered with funk instead of richness. Both are correct; asking a Kim Long vendor which is better is a way of finding out where her mother was from. Either way the format is the same: roll, dunk deep, two bites, reach for the next — under the longan trees, with the river going by, in the district where Huế's officials learned that the best thing to do with power is retire from it and eat well.`,
  ingredientSections: [
    {
      title: 'The bánh ướt (fresh rice sheets)',
      items: [
        {
          amount: 250,
          unit: 'g',
          name: 'plain rice flour (bột gạo tẻ)',
          note: `Plain, not glutinous. Fresh bánh ướt/bánh cuốn sheets from a Vietnamese grocer's chiller are a legitimate shortcut — steam them 30 seconds to revive their suppleness before rolling. But the cloth-steamed homemade sheet is meaningfully silkier, and the rig costs a pot and a t-shirt's worth of cotton.`,
        },
        { amount: 50, unit: 'g', name: 'tapioca starch (bột năng)', note: `The 20% that gives the sheet its elasticity and translucence — the same ratio as Hà Tĩnh's bánh mướt, for the same reason: a pure rice sheet tears when lifted.` },
        { amount: 650, unit: 'ml', name: 'water', note: `A thin batter — skimmed-milk consistency. Rest it 2 hours minimum.` },
        { amount: 0.75, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (in the batter)' },
        { amount: 4, unit: 'tbsp', name: 'mỡ hành (scallion oil)', note: `Brushed on every sheet as it comes off the cloth — seasoning, gloss, and anti-welding all at once.` },
      ],
    },
    {
      title: 'The thịt nướng',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'pork shoulder (nạc vai) with its fat, sliced 3-4 mm thin',
          note: `Shoulder, not lean loin — the marbling is what bastes the slices over the coals and keeps them supple inside a cool roll. Freeze the piece 30 minutes for clean thin slicing.`,
        },
        { amount: 2, name: 'stalks lemongrass, tender parts minced fine' },
        { amount: 3, name: 'cloves garlic and 2 shallots, pounded' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1.5, unit: 'tbsp', name: 'honey', note: `Honey over plain sugar — its fructose caramelizes faster and streaks the slices with char. Watch it on the fire for the same reason.` },
        {
          amount: 1.5,
          unit: 'tbsp',
          name: 'roasted sesame seeds + 1 tbsp sesame oil',
          note: `The Huế tell. Sesame in both forms — seeds for the toasted crackle, oil for the perfume — is what makes a passer-by on Kim Long road stop walking.`,
        },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
        { amount: 800, unit: 'g', name: 'hardwood charcoal' },
      ],
    },
    {
      title: 'The sauce — choose your congregation',
      items: [
        {
          amount: 1,
          name: 'batch nước lèo (peanut-liver sauce): 100 g pork liver + 80 g minced pork + 3 tbsp tương + 60 g ground peanuts + 1 tbsp ground sesame + garlic, sugar, fish sauce, 200 ml water',
          note: `The majority position at the famous stalls — the same thick tan emulsion built for bánh khoái and nem lụi (see either recipe for the full method). Rich answering smoke.`,
        },
        {
          amount: 1,
          name: 'OR a bowl of mắm nêm: 4 tbsp strained fermented anchovy sauce + 4 tbsp crushed pineapple + sugar, garlic, chili, lime',
          note: `The minority position: funk answering smoke. Pineapple is the correct thinner — its bromelain and sugar soften mắm nêm the way lime never can.`,
        },
      ],
    },
    {
      title: 'Inside the rolls and on the table',
      items: [
        { amount: 100, unit: 'g', name: 'herbs: húng quế, rau thơm, tía tô, ngò' },
        { amount: 1, name: 'small handful of shredded lettuce' },
        { amount: 1, name: 'cucumber, in thin batons' },
        { amount: 1, name: 'green (unripe) banana and 1 star fruit, thinly sliced (table side)', note: `The Huế fried-and-grilled-food escort, doing its usual tannin-and-acid palate work.` },
        { amount: 3, name: 'bird\'s-eye chilies, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Marinate the pork — 1 hour, sesame and all',
      description: `Toss the thin pork slices with lemongrass, garlic, shallot, fish sauce, honey, sesame seeds, sesame oil, pepper and the neutral oil, massaging so every slice is coated. Marinate 1 hour at room temperature, or up to 4 in the fridge.

The slices should look glossy and smell like a Kim Long afternoon already — lemongrass first, sesame underneath.

Thin slices take a marinade fast; past 4 hours the fish sauce starts curing the surface and the grilled pork eats ham-like. One hour is the stall standard, timed to the lunch batter rest.`,
      tip: `Sesame oil in a charcoal marinade is a volatility play. Its signature aroma compounds are heat-fragile — long cooking destroys them — but on a 90-second-per-side grill they survive at the edges while the seeds toast and the honey chars, layering three distinct sesame registers (perfume, crackle, caramel-adjacent) onto one slice. It is the same last-moment-aromatics doctrine as the rau om in canh chua and the pepper finishing the kho tiêu, applied before the fire instead of after, because the fire is brief enough to permit it.`,
    },
    {
      title: 'Steam the sheets on cloth — thirty seconds each, stockpiled under oil',
      description: `Whisk the rested batter. Stretch cloth drum-tight over a pot of hard-boiling water, oil it lightly, and ladle on a thin layer, swirling to a 20 cm round. Cover 30 seconds — until translucent and matte — then lift the sheet off in one motion with an oiled flat stick onto an oiled tray. Brush with scallion oil. Repeat, stacking loosely with oil between.

You need 16-20 sheets. Find the rhythm — ladle, cover, count, lift — and the batch takes twenty minutes.

Hold the finished sheets at room temperature under a cloth, never refrigerated: cold turns fresh rice sheets stiff and grainy within the hour, and a stiff sheet cracks around hot pork instead of embracing it.`,
      tip: `The sheet's suppleness is a starch state with a countdown. Freshly steamed, the gelatinized rice starch is at maximum amorphous flexibility; from that moment retrogradation begins — the starch slowly recrystallizing, the sheet stiffening — and refrigeration accelerates it brutally (the same reason day-old rice hardens in the fridge). Kim Long stalls steam continuously through service not from fussiness but because the sheet has perhaps a four-hour window of true silkiness at room temperature, and the dish is defined by catching it inside that window with pork that is thirty seconds off the fire.`,
    },
    {
      title: 'Grill fast over embers — 90 seconds a side, edges charred',
      description: `Burn the charcoal to flame-less glowing embers. Lay the slices across an oiled rack in a single layer and grill about 90 seconds per side — they are thin; this is fast — until caramel-streaked, char-edged, and just cooked through with the fat translucent and dripping.

Flare management is the skill: honey-marinated fat will drip and flame. Shift slices off flares immediately; a soot-coated slice tastes of the failure. Work in batches and pile the finished pork loosely — steaming under foil softens the char you just built.

The pork must go from rack to roll within minutes. Its heat is an ingredient with a half-life.`,
      tip: `Slices grill differently from the nem lụi paste on the same fire: with no gel network to set, the slice's clock is pure surface-to-core — and at 3 mm the core catches up in three minutes total, which means the whole art is getting maximum Maillard and caramelization onto the surface before that moment. Hence the ferocious embers, the honey (fast-browning fructose), and the sugar-and-fat-heavy marinade: everything is chosen to make browning outrun cooking. On thicker meat the same marinade would blacken before doneness; the 3-4 mm slice is not a serving suggestion, it is the thermal design.`,
    },
    {
      title: 'Roll at the last minute — cool sheet, hot pork, herbs, snug',
      description: `Lay a sheet flat, best face down. Along the near third: a little shredded lettuce, two or three herb leaves, a baton of cucumber, then two or three slices of pork straight off the grill.

Fold the near edge over the filling, tuck the sides, and roll snugly — firm enough to hold in one hand, loose enough that the sheet is not stretched glassy. The warmth of the pork will relax the sheet around itself; a well-made roll settles into shape in your palm.

Roll as you eat, in relays, exactly as the stalls do — a plate of six pre-rolled and cooling is the tourist version. The dish is the temperature gap, and the gap closes at about one roll per two minutes.`,
      tip: `Here is the central-Vietnamese textural doctrine again, in its gentlest form. Hà Tĩnh runs the contrast crisp-against-soft (ram in bánh mướt); Kim Long runs it cool-against-hot with softness on both sides — the sheet's cool silk against the pork's radiant smoke, an entirely thermal collision with no crunch involved. It is the most refined statement of the region's one idea, which is fitting for the district of retired mandarins: the same argument as the field lunch up the coast, made in a lower voice, under better trees.`,
    },
    {
      title: 'Dunk deep — and let the sauce name your allegiance',
      description: `Serve the rolls with individual bowls of warm nước lèo scattered with crushed peanuts — or of pineapple-softened mắm nêm — plus the chilies, and the green banana and star fruit alongside.

Dunk one end deep; the first bite should carry sauce all the way through. Two bites per roll, a slice of star fruit between rolls, and repeat until the pork runs out, which is the traditional stopping signal.

If serving both sauces, watch the table quietly self-sort — richness people and funk people, as fixed as handedness. Kim Long has run this experiment daily for generations; the split holds at roughly two to one, nước lèo ahead, with defections in both directions and strong opinions in all of them.`,
      tip: `The two-sauce schism is the Huế condiment doctrine caught mid-argument. Grilled fatty pork can be answered two ways: with more richness that clings (nước lèo — the liver emulsion carrying peanut fat deep into the roll) or with fermented sharpness that cuts (mắm nêm — glutamate-dense anchovy funk brightened by pineapple). Both obey the deeper rule this collection keeps meeting — the condiment supplies what the dish lacks or answers what it has — they simply disagree about which move is more elegant. The rest of the country picked cut, long ago. Huế, characteristically, kept both answers and made the choice part of the dish.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
