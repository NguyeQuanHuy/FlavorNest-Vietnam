'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'mam-chau-doc',
  title: `Mắm Châu Đốc (The Fermented Fish of Vietnam's Mắm Capital)`,
  subtitle: `Whole Mekong fish — cá lóc, cá linh, cá sặc, cá trèn — salted, sun-dried, packed in earthenware with roasted rice powder and palm sugar, and aged six months to a year until the flesh has become a dense, fragrant, savoury paste. Not one product but a family: each fish gives a different mắm, and Châu Đốc makes them all, in a market that smells of a thousand jars.`,
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '6 months',
  rating: 4.8,
  baseServings: 20,
  heroImage: '/images/recipes/mam-chau-doc.jpg',
  intro: `Châu Đốc is not a town that makes mắm. Châu Đốc is a town that IS mắm. The distinction matters, because in every other Mekong province mắm-making is a household activity — families ferment their own surplus catch, in their own jars, for their own pantry. In Châu Đốc it is the industry: hundreds of fermenting houses line the riverbank and the roads into town, their earthenware jars stacked to the ceiling, their production measured in tonnes, and their product shipped across the entire Delta and beyond. The central market's mắm section runs for a full city block, and walking through it is a sensory event — the smell is dense, complex, layered, and unmistakable to anyone who has been within fifty metres of a fermented-fish product anywhere on earth. It is the smell of amino acids in concentration, and it is the smell of wealth.

The Mekong delivers the raw material: cá linh (silver barb, the flood-season fish), cá sặc (climbing perch, small, bony, intensely flavoured), cá lóc (snakehead, the king of the Delta rivers), cá trèn (sheatfish, oily and rich), cá chốt (catfish, for the strongest mắm), and a half-dozen others, each one producing a different mắm with a different character, a different intensity, a different use in the kitchen. Mắm cá linh is mild and sweet — the everyday seasoning, the one dissolved into bún nước lèo and lẩu mắm. Mắm cá sặc is denser, funkier, more assertive — the one served chưng with pork and egg. Mắm cá lóc is the prestige product — whole snakehead fillets, individually cured, aged until the flesh is firm and translucent and the flavour is so concentrated a single fillet seasons a family's week. Mắm cá trèn is the richest — oily, almost buttery, with a smoothness no lean fish can achieve.

What distinguishes Châu Đốc's mắm from the coastal nước mắm of Phú Quốc is not just the fish (freshwater vs. marine) but the method. Phú Quốc's nước mắm is a liquid — the fish is dissolved entirely over fifteen months and the product is a clear, amber sauce drawn from the barrel. Châu Đốc's mắm is a solid — the fish is salted, partially dried, packed with thính (roasted rice powder) and đường thốt nốt (palm sugar), and aged until the flesh has softened and transformed but has NOT dissolved. The finished product is a whole fish — or a fillet, or a chunk — that you can pick up, slice, and eat. It is a preserved fish, not a sauce, and the distinction defines the Delta's two great fermentation traditions: the coast makes liquid (nước mắm); the river makes solid (mắm).

The thính and the palm sugar are Châu Đốc's specific additions and they are what give the mắm its character. The thính — roasted rice powder, the same ingredient this collection has used in every gỏi and every nem — coats the fish during ageing and does double duty: its enzymes (from residual amylase activated during the roasting) contribute to the protein breakdown, and its toasted nuttiness flavours the paste. The palm sugar — đường thốt nốt, from the Borassus palms that grow throughout An Giang's Khmer communities — feeds the lactic bacteria that drive the acidification, and its caramel-toffee sweetness rounds the salt edge into something complex and almost dessert-like. A Châu Đốc mắm tastes nothing like Phú Quốc nước mắm: it is denser, sweeter, nuttier, less sharp, more funky, and it is eaten with rice as a protein, not poured from a bottle as a seasoning.

This recipe documents the traditional method for mắm cá sặc — the most common household mắm in An Giang — with the safety guardrails this collection applies to every fermentation: measured salt (minimum 20% by weight), clean fish, clean jars, and a hard-stop discard rule for any batch that smells of rot rather than of ferment. The mắm houses of Châu Đốc use the same method at industrial scale, with generations of accumulated microbial culture in their jars and their walls — the same "house culture" principle the tương Bần recipe documented.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 3,
          unit: 'kg',
          name: 'whole cá sặc (climbing perch) or cá linh (silver barb), very fresh',
          note: `Whole, ungutted for cá sặc (the gut is part of the flavour profile); gutted and scaled for cá linh. The fish must be same-day-caught — stale fish ferments to rot, not to mắm, and no amount of salt corrects the start. In Europe: whole fresh small carp, perch or sprats are the workable substitutes — the principle (small, bony, flavourful freshwater or estuary fish) is the same.`,
        },
      ],
    },
    {
      title: 'The cure',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'coarse sea salt (20% of fish weight — minimum)',
          note: `The safety floor. At 20% the water activity drops below the threshold for Clostridium botulinum and most spoilage bacteria. Châu Đốc's commercial producers often use 25-30% for extra margin. Weigh the salt; do not estimate. Below 18% the ferment is unsafe.`,
        },
      ],
    },
    {
      title: 'The Châu Đốc additions',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'thính (roasted rice powder)',
          note: `Dry-toasted to deep gold, ground coarse. Coats the fish during ageing — its residual amylase contributes to the enzymatic breakdown, and its toasted nuttiness perfumes the finished mắm.`,
        },
        {
          amount: 150,
          unit: 'g',
          name: 'đường thốt nốt (palm sugar), crumbled',
          note: `The An Giang sweetener — from the Borassus palms of the Khmer communities in Tri Tôn and Tịnh Biên. Its complex sugars feed the lactic bacteria and its caramel character rounds the salt. White sugar substitutes functionally but lacks the toffee depth.`,
        },
        {
          amount: 30,
          unit: 'g',
          name: 'galangal, sliced thin (optional)',
          note: `Some Châu Đốc formulas layer galangal slices between the fish — its terpenes slow surface oxidation and contribute a piney note to the finished mắm.`,
        },
      ],
    },
    {
      title: 'The jar',
      items: [
        {
          amount: 1,
          name: 'earthenware or glass jar, 5-8 L, wide-mouthed, sanitized',
          note: `Earthenware is traditional — its porosity allows micro-oxygenation that contributes to flavour complexity, the same principle as the bời lời barrel in the Phú Quốc nước mắm. Glass lets you watch. Sanitize with boiling water and dry completely.`,
        },
        { amount: 1, name: 'bamboo mat and heavy stone for pressing' },
        { amount: 1, name: 'cloth or loose lid for covering — the jar must breathe slightly' },
      ],
    },
    {
      title: 'To eat — three ways',
      items: [
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 1, name: 'platter of raw vegetables: cucumber, green banana, star fruit, bitter gourd, lettuce' },
        { amount: 50, unit: 'g', name: 'rau răm and húng quế' },
        { amount: 2, name: 'red chilies, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Salt, dry, coat with thính — the three-day preparation',
      description: `DAY 1: Rub every fish — inside the cavity (if gutted) and across every surface — with the weighed salt. Pack them belly-up in a basin, cover, and leave at room temperature for 24 hours. The salt draws water and begins the cure.

DAY 2: Drain off the brine the fish have wept. Spread the salted fish on bamboo racks or wire racks in full sun (or in a fan oven at 50-60°C) and dry for one full day, turning once. The fish should lose roughly 30% of their post-salting weight — firm, leathery, still pliable, not rigid.

DAY 3: Toss the dried, salted fish with the thính until every surface wears a matte, tan coat of roasted rice powder. The thính absorbs the remaining surface moisture and begins its enzymatic contribution from the moment of contact.

The fish are now ready for the jar: salted (the preservative), dried (the concentration), and thính-coated (the flavour agent). These three preparations — each one a separate technology — combine in the jar into a single fermentation that runs for months. Skip any one and the product is different.`,
      tip: `The three-day preparation is a stacked hurdle system — each step adds a preservation barrier that narrows the microbial field. Salt (day 1) drops the water activity below the threshold for most pathogens. Drying (day 2) drops it further and concentrates the salt at the fish's surface. Thính (day 3) adds a dry, slightly acidic coat that favours lactic bacteria over competing organisms. By the time the fish enters the jar it has already passed three selection gates, and the microbial population on its surface is heavily weighted toward the salt-tolerant, acid-producing bacteria that will drive the fermentation you want. The three days are not preparation for the jar. They are the fermentation's first three moves.`,
    },
    {
      title: 'Pack the jar — fish, sugar, galangal, press, and seal for six months',
      description: `Layer in the sanitized jar: a layer of palm sugar on the bottom, then a layer of thính-coated fish packed tightly belly-down, galangal slices if using, another scatter of palm sugar, another layer of fish — until the jar is full, finishing with a thick layer of palm sugar on top.

Press a bamboo mat over the surface and weight it with a heavy stone — the pressure excludes air from between the fish, forces the emerging brine upward, and keeps the fish submerged in its own liquid as the fermentation proceeds.

Cover with a cloth or set the lid loosely — the ferment produces a small amount of CO₂ in the early weeks and must vent. Set in a shaded, ventilated space. In Châu Đốc the jars sit in open-sided sheds along the riverbank; at home, a cool pantry or a covered balcony works.

The jar is not stirred, not opened (beyond monthly checks), and not moved for six months minimum.`,
      tip: `The palm sugar on the bottom and top is doing different jobs in different time frames. On the bottom: it dissolves slowly into the brine that the salt and the fish's own moisture produce, providing a continuous feed of simple sugars to the lactic bacteria through the first months — the same sustained-feeding principle as the rice in the nem Lai Vung. On the top: it creates a sugar-concentrate cap that is inhospitable to surface mould, buying the ferment time to establish its own protective acid and CO₂ layer — the same surface-protection strategy as the sugar cap on the rượu mãng cầu. Same sugar, same chemistry, two positions, two jobs.`,
    },
    {
      title: 'Age six months to a year — check monthly, trust the smell',
      description: `Month 1: the fish softens visibly. A brine rises above the weight. The jar smells of salt and fish — sharp, pungent, actively fermenting. The thính on the fish's surface has darkened from tan to brown.

Month 3: the fish is substantially softer — a finger pressed into a fillet leaves a deep, slow impression. The brine is dark, the smell is shifting from sharp-fermented to malty-savoury — the same transition every mắm and every tương in this collection has passed through. The palm sugar has largely dissolved and the lactic acid produced from it is now the jar's dominant acid.

Month 6: the fish is a transformed object — the flesh is translucent, dense, firm-soft, and a piece cut from a fillet and tasted is intensely savoury, malty-sweet, faintly funky, with a long umami finish and the toasted nuttiness of the thính running underneath. The bones, in a small fish like cá sặc, have partially softened. This is the minimum age and the point at which most Châu Đốc households begin using the jar.

Month 12 and beyond: the mắm has deepened further — darker, smoother, more integrated, with the sharp edges of the six-month version mellowed into a complexity that the market prices accordingly. A one-year mắm cá sặc from a good Châu Đốc house is among the most valued pantry products in the Mekong.

HARD STOP: green or black mould on the surface (scrape a thin white film — kahm yeast — but discard the batch if the mould is green, black or pink); a rotten, sulfurous or ammoniac smell that is distinct from the pungent-but-savoury smell of correct fermentation; any sliminess or discolouration that looks wrong. The difference between pungent-savoury (correct) and rotten (incorrect) is learned by experience but is unmistakable once learned, and when in doubt, discard.`,
      tip: `The thính's contribution across six months is worth naming precisely. Raw rice powder would simply absorb moisture and sit inert. Roasted rice powder — thính — has had its starch partially dextrinized by the toasting (the same pre-gelatinization that made the cháo gà's toasted rice cook differently), and the dextrinized starch is more accessible to the amylase enzymes the roasting also activated. Over the six months of ageing, this amylase slowly converts the dextrin to glucose, which the lactic bacteria convert to lactic acid, which lowers the pH — a cascading chain of reactions that runs in slow motion through the entire fermentation and that would not run at all if the rice were raw. The toasting is not a flavour step. It is a biochemical activation that sets the entire enzymatic chain in motion.`,
    },
    {
      title: 'Eat three ways — raw, chưng, or dissolved — and understand the pantry',
      description: `RAW (mắm sống): a piece of the aged fish, sliced, laid on a plate with sliced chili, garlic, rau răm and a squeeze of lime. Eaten with hot rice and raw vegetables — the most direct encounter with the ferment, and the way Châu Đốc eats its own mắm at home. The intensity is high and the rice is mandatory.

CHƯNG (steamed): 2-3 tablespoons of mắm (mashed or chopped) mixed with minced pork, beaten egg, black pepper and sugar, steamed in a bowl 25-30 minutes until set into a firm, savoury, ruddy cake — the same chưng technique documented with the mắm tép in Tây Ninh. Sliced, eaten cold over rice. Keeps 5 days refrigerated.

DISSOLVED (in broth): mắm dissolved in warm water, strained, and stirred into a broth — the method used in the bún cá Châu Đốc recipe above and in every lẩu mắm in the Delta. The mắm disappears into the liquid and leaves only its depth.

Three formats, one jar, three intensities — raw is the loudest, chưng is the middle, dissolved is the quietest — and a household that keeps one jar uses all three across the week. The jar is the pantry. The three formats are the menu.`,
      tip: `Mắm Châu Đốc is the An Giang collection's foundation recipe, the same way nước mắm was Phú Quốc's and tương was Bắc Ninh's — the fermented infrastructure that every other dish in the province refers to and relies on. The bún cá's depth came from it. The lẩu mắm's entire broth was built on it. The gỏi sầu đâu will dress with it. The bún mắm will name itself after it. Every savoury recipe in the An Giang file connects back to this jar, and the jar connects back to the river, and the river connects back to the flood that brought the fish. A provincial collection is, in the end, a map of dependencies — and the mắm jar is where every dependency converges. The river gave the fish. The sun dried it. The thính coated it. The palm sugar sweetened it. The jar held it. And time — six months, a year, as long as the household can wait — did the rest. Every recipe after this one is a footnote to the jar.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
