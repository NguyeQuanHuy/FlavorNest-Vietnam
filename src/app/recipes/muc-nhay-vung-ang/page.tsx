'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'muc-nhay-vung-ang',
  title: `Mực Nhảy Vũng Áng (Live Squid Blanched at the Water's Edge)`,
  subtitle: `Squid lifted alive from a net cage in Vũng Áng bay, still flashing colour, dropped into boiling water for ninety seconds and eaten on the pier with ginger fish sauce. The freshest thing you will ever eat in Vietnam, and a dish defined entirely by the minutes between the sea and the mouth.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '20 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/muc-nhay-vung-ang.jpg',
  intro: `Mực nhảy means jumping squid, and the name is completely literal. At Vũng Áng, on the Kỳ Anh coast at the southern end of Hà Tĩnh, the squid boats come in and transfer their catch alive into floating net cages moored just off the shore. The restaurants are built on stilts over the water beside them. You choose your squid, it is netted out and carried to the kitchen still flexing and flashing pigment through its skin, and it is in boiling water within a minute. From cage to table takes perhaps four minutes. There is no other dish in Vietnam where the interval between the animal being alive and being eaten is this short, and there is no version of this dish that survives the interval being any longer.

Freshness here is not a quality claim, it is the entire technical basis of the dish, and the chemistry is unusually stark. Squid muscle is dense, low in fat, and structured from short, tightly packed fibres wrapped in thin sheets of collagen. Alive, that muscle is at maximum turgor: the cells are full, the flesh is translucent, and when cooked briefly it is crisp — the Vietnamese word is giòn, the same word used for a good gỏi cá, and it means the flesh audibly snaps between the teeth. Within hours of death, autolytic enzymes begin breaking down the muscle proteins from within, the cells lose water, and the flesh turns first soft, then rubbery, then chalky. A squid that spent a night on ice can still be delicious — grilled, stuffed, stir-fried — but it can never be crisp again, and mực nhảy is a dish about crispness.

The cooking is therefore almost nothing, and it must be almost nothing. The squid goes whole and uncleaned into hard-boiling water for 60 to 90 seconds, comes out, is cut, and is eaten. That window is not a suggestion. Squid protein has a brutal doneness curve: below about 60°C it is raw and slippery; between 60 and 70°C the collagen sheets contract and the flesh sets into that crisp, snapping texture; and above 70°C, sustained, the collagen contracts further and squeezes the muscle fibres, and the squid goes rubbery. It stays rubbery for a long time — a full 40 minutes of braising will eventually dissolve the collagen into gelatin and make it tender again, which is the principle behind every slow-cooked squid stew on earth. But between 2 minutes and 30 minutes there is nothing but disappointment. There are exactly two correct cooking times for squid, and mực nhảy is the short one.

What goes with it is as spare as the cooking. Nước mắm gừng — fish sauce, a great deal of pounded ginger, garlic, chili, lime, sugar — and nothing else. No herbs beyond a handful of rau răm, no rice, no vegetables. In Vũng Áng the squid arrives on a plate, the sauce arrives in a saucer, the beer is already cold, and you sit on plastic stools over the water and eat squid for an hour with your fingers while the cages you are eating from bump against the pilings below you. It is one of the great meals in Vietnam and it is impossible to export, because the dish is not really the squid or the sauce. It is the four minutes.`,
  ingredientSections: [
    {
      title: 'The squid',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'live squid (mực ống), whole, 12-18 cm bodies',
          note: `Alive is the dish. A live squid is translucent, flexes when handled, and flashes pigment through its skin. In Vũng Áng it is netted from a cage at your feet.

OUTSIDE VIETNAM: live squid is essentially unobtainable in Europe. The honest substitute is the freshest whole squid you can find — bought same-day from a fishmonger, ideally never frozen, with clear glassy eyes, firm translucent flesh, and a smell of clean sea and nothing else. Cook it with the identical 90-second method. It will not be crisp in quite the way a live squid is, but it will be very good, and it will teach you the technique. A grey, opaque, faintly ammoniac squid is not worth cooking this way — braise it instead.`,
        },
        { amount: 2, unit: 'L', name: 'water', note: `Plain. No salt, no aromatics, no lemongrass, no ginger in the pot. Vũng Áng boils squid in plain water and the reason is simple confidence: anything added to the water would be a comment on the squid, and the squid is not in need of comment.` },
      ],
    },
    {
      title: 'Nước mắm gừng (ginger fish sauce)',
      items: [
        {
          amount: 40,
          unit: 'g',
          name: 'young ginger, pounded to a coarse paste',
          note: `Pounded in a mortar, never grated or blended. Pounding tears the cells and releases gingerol in coarse fibrous shreds that hold their bite and their texture in the sauce; a smooth blended puree oxidizes within the hour and turns flat, grey and slightly bitter. The sauce should be visibly full of ginger — thick with it.`,
        },
        { amount: 5, unit: 'tbsp', name: 'fish sauce (nước mắm, 35-40°N)', note: `Use a good one. In a sauce this bare, the fish sauce has nowhere to hide.` },
        { amount: 3, unit: 'tbsp', name: 'sugar' },
        { amount: 3, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, unit: 'tbsp', name: 'water' },
        { amount: 5, name: 'cloves garlic, pounded' },
        { amount: 4, name: 'bird\'s-eye chilies, pounded', note: `Central Vietnam does not moderate its chili the way the south does. Four is the correct number and Hà Tĩnh would use more.` },
      ],
    },
    {
      title: 'The table',
      items: [
        { amount: 50, unit: 'g', name: 'rau răm (Vietnamese coriander), whole leaves', note: `The only herb on the plate. Its soapy-peppery bite is the standing partner to every squid, snail and clam dish in Vietnam.` },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 1, unit: 'tbsp', name: 'salt, pepper and lime (muối tiêu chanh), pounded together', note: `An alternative dip, for people who find fish sauce too heavy against something this clean. Both saucers go on the table and everyone chooses.` },
        { amount: 1, name: 'crate of cold beer', note: `Structural, not decorative. Mực nhảy is a mồi nhậu dish — it is eaten slowly, over an hour, in company, with beer, on plastic stools. Served formally on a plate at a dinner table it is a lesser thing, and Vũng Áng would think you had missed the point.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Boil the water hard — nothing in it, and a full rolling boil',
      description: `Bring 2 litres of plain water to a hard, full rolling boil in a wide pot. Not a simmer — a violent, unmistakable boil, with the surface breaking continuously.

Do not add salt, ginger, lemongrass or wine. The squid is going in for 90 seconds; nothing you add to the water will have time to reach it, and anything that does reach it will only mask what you are trying to taste.

The volume matters. Too little water and dropping in 800 g of cold squid crashes the temperature — the water stops boiling, the squid cooks slowly through the crucial 60-70°C band instead of shooting past it, and it turns rubbery. Plenty of water, boiling hard, is the whole insurance policy.`,
      tip: `Thermal mass is the reason for the large pot. When the squid goes in, the water temperature drops sharply, and how far it drops and how fast it recovers is determined by how much boiling water there is. A big pot recovers in seconds; a small pot may take a minute, and that minute is spent holding the squid in the exact temperature range where collagen contracts and squeezes the muscle. Same squid, same 90 seconds on the clock, completely different result — decided by pot size. This is the most underrated variable in fast cooking.`,
    },
    {
      title: 'Drop the squid in whole — 60 to 90 seconds, and watch it',
      description: `Lower the whole squid — uncleaned, unpeeled, intact — into the boiling water. Do not clean it first, do not cut it, do not score it.

Watch for the change: the translucent body turns opaque white, the skin flushes pink-purple and then goes matte, the tentacles curl tight, and the body contracts and firms. This takes 60 seconds for a small squid and 90 for a larger one. Lift it out the moment the flesh is uniformly opaque.

Two minutes is too long. Cut into a squid at 60 seconds and at 3 minutes and the difference is unmistakable: the first snaps, the second bounces. Once it has gone rubbery there is no recovering it short of braising it for another forty minutes, which is a different dish entirely.`,
      tip: `Cooking it whole and uncleaned is not laziness — it is protection. The intact mantle and skin form a barrier that slows heat penetration and, crucially, keeps the squid's own liquid inside. A squid cleaned and cut into rings before boiling has enormously more surface area exposed to the water, and it leaches its free amino acids and its sweetness into the pot in seconds. Vũng Áng cooks it whole and cleans it after, and the difference in sweetness is immediately obvious.`,
    },
    {
      title: 'Clean and cut after cooking — not before',
      description: `Lift the squid out and let it drain 30 seconds. Pull the head and tentacles away from the body — the innards come with them in one piece. Pull out the transparent quill. The skin will slip off easily with your fingers now that it has been cooked, or leave it on; Vũng Áng leaves it on.

Cut the body into thick rings or slit it open and cut into wide strips. Keep the tentacles whole — they are the best part and everybody at the table knows it.

Do this at the table, or as close to it as possible, while the squid is still hot. Every minute it sits, it cools and firms, and the crispness that ninety seconds of boiling bought you starts to slide.`,
      tip: `The skin slips off after cooking because the thin layer of collagen bonding it to the mantle has contracted and released — before cooking you would have to scrape it. This is a small piece of evidence for the larger point: almost every job that seems to belong to preparation is easier after 90 seconds of heat, and doing it before only exposes more surface area to the water. Cook first, clean second. It is the opposite of how squid is handled everywhere else, and it is correct.`,
    },
    {
      title: 'Pound the ginger sauce — thick, and made in the last five minutes',
      description: `Pound the ginger, garlic and chili together in a mortar until you have a coarse, fibrous, aromatic paste. Stir in the fish sauce, sugar, lime juice and water, and taste.

The sauce should be thick with ginger shreds — you should be able to load a spoonful onto a piece of squid rather than dipping it into liquid. Sharp, salty, hot, and dominated by ginger. If the ginger is not the first thing you taste, add more.

Make it within ten minutes of eating. Pounded ginger oxidizes fast: gingerol degrades on contact with air and acid, and a sauce made an hour ahead is noticeably duller, greyer and less pungent than one made just before the squid comes out of the pot.`,
      tip: `Ginger with squid is the same universal pairing as ginger with snail, and for the same chemistry. Cephalopod and mollusc flesh carries trimethylamine and various sulfur compounds that read as marine at best and muddy at worst; gingerol and shogaol bind to and mask precisely these, while adding a warm counterpoint that lean, sweet, water-cooked flesh badly needs. Vietnam, China, Korea and Japan all arrived at ginger-and-cephalopod independently. Some pairings are not culture. They are just chemistry, found repeatedly.`,
    },
    {
      title: 'Eat with your fingers, over an hour, with beer',
      description: `Put the squid on a plate with the rau răm scattered over, the nước mắm gừng in a saucer, the muối tiêu chanh in another, and lime wedges alongside.

Take a piece with your fingers, load it with ginger sauce, add a rau răm leaf, and eat. Then have some beer. Then do it again.

There is no rice, no vegetables, no rush and no formality. This is a mồi nhậu dish and it is eaten over an hour in company, on low stools, ideally within a hundred metres of where the squid was swimming. Everything about the dish is designed around a very short interval between the sea and the plate, and everything about the eating is designed around a very long one between the plate and the end of the evening.`,
      tip: `It is worth being honest about what does not travel. The technique here is trivially reproducible anywhere — boiling water, 90 seconds, ginger sauce — and if you cook a very fresh squid this way in a kitchen in Germany it will be excellent. But mực nhảy as Vũng Áng understands it is not a technique; it is a proximity. The dish is the four minutes between the cage and the pot, and no amount of skill closes that gap. Some dishes can be exported and some can only be visited, and knowing which is which is the beginning of taking a cuisine seriously.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
