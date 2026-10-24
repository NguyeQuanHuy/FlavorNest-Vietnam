'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'lau-ca-keo-tinh-bien',
  title: `Lẩu Cá Kèo Lá Giang (Goby Hotpot with Sour Giang Leaf)`,
  subtitle: `Live mud gobies — thumbnail-length, wriggling, barely worth scaling — dropped alive into a boiling sour broth of lá giang and tamarind, where they cook in ten seconds and are eaten whole, bones and all, by the dozen. The hotpot that runs on the smallest fish in the river and the sourest leaf on the bank.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '45 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/lau-ca-keo-tinh-bien.jpg',
  intro: `Cá kèo — the mudskipper goby, Pseudapocryptes elongatus — is one of the smallest, ugliest and most delicious fish in the Mekong Delta. It is a bottom-dwelling, mud-burrowing, air-breathing fish that lives in the brackish tidal flats and canal margins of the lower Delta, rarely growing past 10 centimetres, with a body like a fat finger, bulging eyes that sit on top of its head, and a survival strategy based on being too small and too muddy for anyone to bother with — a strategy that failed comprehensively when the Delta decided to eat it.

Cá kèo is caught by the basketful — trapped in fine nets or dug from the mud at low tide — and it is sold alive, wriggling in shallow basins of water at every market in the lower Delta. It is always sold live because it spoils within hours of death (its small body surface-to-volume ratio means bacterial decay runs fast), and it is always cooked live for the same reason — a dead cá kèo is a soft, bitter, ammonia-smelling cá kèo, and no amount of tamarind corrects it. The cooking is therefore a spectacle: the live fish are tipped from a bowl directly into a boiling pot at the table, where they thrash for two to three seconds before the heat kills them, and by the tenth second they are cooked through — bones softened by the acid broth, flesh firm-sweet, and ready for the chopsticks.

The broth is sour — violently, structurally, fundamentally sour — because the fish demands it. Cá kèo's flesh is naturally sweet and faintly muddy (it lives in mud), and the sour broth does the same job tamarind does in canh chua and lime does in gỏi cá: it cuts the richness, resets the palate, and — importantly — its acid accelerates the bone-softening that makes the fish edible whole. The acid comes from two sources: tamarind (the same tartaric-acid base as every canh chua in this collection) and lá giang — the leaves of Aganonerion polymorphum, a climbing vine native to the Delta whose leaves are so sharply sour they pucker the mouth on contact. Lá giang is the An Giang/Kiên Giang ingredient that appears in no other province's hotpot — its specific tartness is greener, more herbaceous and more intense than tamarind alone, and the combination of the two produces a broth that is sour in two registers: tamarind's fruity bass and lá giang's green treble.

The eating is communal, fast and volumetric. A table of four orders a kilogram or more of live cá kèo, and the fish are dropped into the bubbling pot in batches of ten or fifteen — cooking in seconds, fished out with chopsticks, dipped in a chili-salt-lime saucer, and eaten whole — head, tail, bones, everything — in one or two bites. The bones of a cá kèo are hair-thin and soften in the acid broth almost instantly; the flesh is sweet, clean and faintly firm; and the mouthful — a whole fish, acidified, dipped in salt — is so satisfying and so small that the hand is back in the pot before the previous fish is finished. A kilogram of cá kèo runs perhaps sixty to eighty individual fish, and a table of four can clear it in twenty minutes, at which point someone orders another kilogram, because the pot is still boiling and the evening is still young.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'live cá kèo (mud gobies), in water',
          note: `LIVE — wriggling, swimming, eyes moving. This is the only recipe in this collection that uses a live animal at the table, and the instruction is non-negotiable: a dead cá kèo, even a recently dead one, is soft, bitter and potentially unsafe. In Vietnam, live cá kèo is sold at every Delta market. In Europe: live gobies are not available. The honest substitute is the FRESHEST possible small whole fish — whitebait, fresh sprats, small fresh anchovies, or live shrimp — understanding that the spectacle changes and the dish's identity shifts. Frozen cá kèo from a Vietnamese grocer is the closer option — thaw and use immediately; they will not be live but they will be cá kèo.`,
        },
      ],
    },
    {
      title: 'The sour broth',
      items: [
        {
          amount: 100,
          unit: 'g',
          name: 'lá giang (Aganonerion polymorphum leaves)',
          note: `The An Giang sour leaf — intensely tart, green, herbaceous. Sold fresh at Vietnamese markets in the Delta; occasionally available frozen at larger overseas Vietnamese groceries. If unavailable: sorrel leaves (Rumex acetosa) provide a similar sharp green sourness from oxalic acid rather than lá giang's malic acid — different chemistry, similar register. Young tamarind leaves are another option.`,
        },
        {
          amount: 50,
          unit: 'g',
          name: 'tamarind paste, dissolved in 200 ml water and strained',
          note: `The second acid — tamarind's fruity bass under lá giang's green treble. Together they produce a two-register sourness no single acid can match.`,
        },
        { amount: 1.5, unit: 'L', name: 'water or light pork stock' },
        { amount: 2, name: 'stalks lemongrass, bruised and knotted' },
        { amount: 30, unit: 'g', name: 'ginger, sliced' },
        { amount: 3, name: 'cloves garlic, smashed' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1.5, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 2, name: 'red chilies, whole' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The vegetables',
      items: [
        { amount: 2, name: 'Asian eggplants, cut in wedges' },
        { amount: 150, unit: 'g', name: 'đậu bắp (okra), halved lengthwise' },
        { amount: 200, unit: 'g', name: 'rau muống (water spinach), cut in lengths' },
        { amount: 150, unit: 'g', name: 'bắp chuối (banana blossom), shredded, in lime water' },
        { amount: 200, unit: 'g', name: 'bean sprouts' },
        { amount: 100, unit: 'g', name: 'nấm rơm (straw mushrooms) or oyster mushrooms' },
      ],
    },
    {
      title: 'The table',
      items: [
        { amount: 600, unit: 'g', name: 'fresh bún (rice vermicelli)' },
        { amount: 2, unit: 'tbsp', name: 'fine salt' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 3, unit: 'tbsp', name: 'lime juice' },
        { amount: 3, name: 'bird\'s-eye chilies, sliced' },
        { amount: 50, unit: 'g', name: 'rau răm, whole sprigs' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the double-sour broth — lá giang + tamarind, lemongrass, 15 minutes',
      description: `Heat the oil in a pot. Fry the garlic and ginger 30 seconds until fragrant. Add the lemongrass, chilies, strained tamarind liquid and the water. Bring to a simmer.

Add the lá giang leaves — they wilt in 30 seconds and begin releasing their sharp, green, malic-acid sourness into the broth immediately. Simmer 15 minutes. Season with fish sauce, sugar and salt.

Taste: the broth should be SOUR first, aggressively sour, with the tamarind's fruity depth underneath and the lá giang's green sharpness on top. It should also be savoury (from the fish sauce), faintly sweet (from the sugar, rounding the acid edge), and aromatic (from the lemongrass and ginger). If it is not sour enough, add more lá giang or a squeeze of lime. This broth must be sour enough to soften fish bones in ten seconds and to reset a palate that is eating sixty fish in thirty minutes.

Transfer to a hotpot vessel on a table burner. Bring to a rolling boil — the pot must be actively, vigorously boiling when the fish go in, because the speed of the kill and the speed of the cook depend on the boil.`,
      tip: `The double-acid system — tamarind (tartaric acid, pH ~2.5-3.0) and lá giang (malic acid, pH ~3.0-3.5) — produces a broth more aggressively sour than either acid alone, because the two acids target different taste-receptor subtypes. Tartaric acid activates a different set of sour-sensing ion channels (PKD2L1) than malic acid does, and the combined activation produces a perceived sourness greater than the sum of the parts — a synergy, the same way umami synergy works but on the sour axis. This is why the Delta uses two sour sources in its hotpots and its canh chua: one acid is sour; two acids are SOUR, and the capital letters are the point.`,
    },
    {
      title: 'Drop the live fish into the boiling pot — ten seconds to cooked',
      description: `Set the basin of live cá kèo beside the pot. With a small net, a slotted spoon or — the Delta method — a bare hand, scoop 10-15 fish from the basin and tip them into the rolling boil.

They will thrash for 2-3 seconds. By second 5 they are still. By second 10 they are cooked — the flesh has turned from translucent to opaque-white, the skin has tightened, and the bones, in the acid broth, have already begun to soften.

Fish them out with chopsticks or a small net and set them on a plate. Or — the more common method — fish them directly from the pot to the mouth, dipped in the salt-pepper-lime saucer.

Drop the next batch. The pot is continuous: fish in, fish out, fish in, fish out, for as long as the basin has fish and the table has appetite.

Add the eggplant and okra to the broth between batches — they cook in 4-5 minutes and absorb the sour broth. Add the mushrooms. Add the rau muống and bean sprouts in the final rounds — they need only 30 seconds.`,
      tip: `A cá kèo cooks in 10 seconds because it is small (8-10 cm, perhaps 15 g), thin-bodied (the thermal centre is only 5-6 mm from the surface), and immersed in a vigorously boiling, acidic liquid that attacks the protein from the outside (heat denaturation) and the bones from the inside (acid dissolution) simultaneously. The acid broth is not just a flavour medium — it is a tenderiser that works faster than heat alone could. A cá kèo poached in plain boiling water for 10 seconds has firm bones that prickle the tongue; the same fish in the acid broth has bones that flex and yield. The lá giang and the tamarind are structural ingredients as much as flavour ingredients, and their sourness is doing chemical work the heat cannot.`,
    },
    {
      title: 'Eat whole — head, tail, bones, dipped in salt-lime, by the dozen',
      description: `Mix the salt, pepper and lime juice in a small saucer — the same muối tiêu chanh format, tuned sharper with extra lime to complement the sour broth rather than duplicate it.

Pick a fish from the plate or directly from the pot. Dip one end in the salt-lime saucer. Eat in one bite — the whole fish, head to tail. The bones should be imperceptible — the acid broth and the heat have softened them to the texture of a cooked sardine spine: present but yielding, a faint structural resistance that dissolves on the tongue.

The flesh is sweet, clean, faintly firm, with a touch of the mud-flat mineral that the acid has framed as character rather than defect. The sour broth on the fish's surface meets the salt-lime on the dipped end, and the bite carries sour-salty-sweet-peppery in one small mouthful.

Eat by the dozen. The fish are small, the bites are fast, and the rhythm — scoop from pot, dip, eat, reach for the next — runs at a pace that a table of four clearing a kilogram recognises as normal. The empty plate fills with small, clean skeletons (for those who choose to spit the spine rather than eat it), and the pot's broth darkens and deepens as sixty fish pass through it.

Close with bún: ladle the final broth — now enriched by the contribution of every fish that cooked in it — over bowls of fresh rice vermicelli. Add the cooked vegetables from the pot. Scatter rau răm. This is the hotpot's last act, the same closing-bowl ritual the lẩu mắm and the bò tùng xẻo performed: the pot kept score, and the score is the best broth of the evening.`,
      tip: `Lẩu cá kèo closes the An Giang collection with the province's most communal and most volumetric dish — a meal measured not in servings but in dozens, not in minutes but in rounds, and not in flavour but in rhythm. The rhythm is the recipe: drop, cook, fish, dip, eat, drop, cook, fish, dip, eat — a ten-second cycle repeated sixty or eighty times across the evening, each cycle delivering one small, perfect, whole-fish bite, and each cycle deepening the pot by one fish's contribution. The meal is not a course. It is a pulse — a heartbeat of boiling broth and tiny fish that runs until the basin is empty and the table leans back, and the closing bowl of broth-over-bún is the resting heart rate after the evening's work.

Set the ten An Giang recipes side by side and the province reads as a cross-section: the river gave the cá lóc (bún cá, bún mắm, nướng trui), the mắm jars (Châu Đốc's foundation), and the cá kèo. The mountains gave the beef (tung lò mò, cháo bò, nướng ngói) and the mushrooms (bánh xèo Núi Cấm). The forest gave the neem (gỏi sầu đâu). The canal bank gave the lá giang (this hotpot). Three communities — Vietnamese, Khmer, Chăm — cooked them in three traditions, and the province ate them all at the same table. An Giang is the most culturally diverse province in this collection, and its ten recipes are the proof: not fusion, not blending, but three kitchens sitting side by side, each fully itself, each enriching the table by the difference.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
