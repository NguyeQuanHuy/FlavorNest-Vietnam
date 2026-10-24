'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-kho-lang-vu-dai',
  title: `Cá Kho Làng Vũ Đại (Black Carp Braised in Clay Pot with Galangal — Đại Hoàng Village)`,
  subtitle: `A whole black carp — five kilograms or more — cut into steaks and braised for fourteen hours in a clay pot over a wood fire with galangal, black pepper and nước màu, until the bones are soft enough to chew and the sauce has become a dark, resinous, almost-dry lacquer. The Tết fish of the Red River Delta, from the village that Nam Cao made famous and that made the fish famous in return.`,
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '16 hr',
  rating: 4.9,
  baseServings: 8,
  heroImage: '/images/recipes/ca-kho-lang-vu-dai.jpg',
  intro: `Làng Vũ Đại is a literary name before it is a culinary one. The village is properly Đại Hoàng, in Lý Nhân district, Hà Nam province — the southern edge of the Red River Delta, an hour south of Bắc Ninh — and it was made famous by the writer Nam Cao, who set his most celebrated stories there under the fictional name Vũ Đại. The village is now famous twice: once for the literature, and once for the fish. Cá kho làng Vũ Đại is the Tết fish of the entire northern Delta — braised, sealed, gifted, and eaten over the three days of the new year — and it has become, in the last two decades, one of the most sought-after and most expensive prepared foods in Vietnam, shipped across the country in its own clay pot as a prestige gift. A single pot, containing a five-kilogram black carp braised for fourteen hours, sells for prices that would buy a month's groceries.

The fish is cá trắm đen — the black carp, Mylopharyngodon piceus — one of the largest freshwater fish in the Red River system, raised for two to three years in ponds until it reaches five kilograms or more. The black carp is a molluscivore: its pharyngeal teeth are built to crush snail shells, and its diet of hard-shelled prey gives it a dense, firm, dark-meated flesh with a fine grain and a clean, faintly sweet flavour that no fish raised on pellets can replicate. It is the cá bỗng of Tuyên Quang's logic applied to a different species: a slow-grown fish with a natural diet, selected because its muscle was built for the pot it will enter.

The braise is the longest in this collection and among the longest in Vietnamese cooking: fourteen hours, minimum, over a low wood fire, in a clay pot the size of a wash basin. The fish is cut into thick steaks, rubbed with salt and galangal, packed in the pot over a caramel base, seasoned with fish sauce, black pepper and a generous quantity of galangal — sliced, not pounded — and then braised at the barest murmur from dusk through the night until the following morning. The pot is never stirred. The fire is fed by one person through the night, regulated by eye and by sound — the slow, lazy blip of a pot that has been reducing for ten hours sounds different from a pot at three hours, and the fire-keeper knows both.

What fourteen hours achieves is not available at any shorter time and is the entire reason the dish commands its price. The fish's collagen — dense in a muscle that spent three years crushing snails — converts fully to gelatin, so the flesh is soft and yielding without falling apart. The bones — the thick, hard bones of a five-kilogram carp — partially demineralize in the long, slightly acidic environment (the caramel provides the acidity), exactly as they do in the three-month mắm of Chiêm Hóa and the one-hour braise of Huế's gobies, and they become soft enough to chew and eat. The sauce reduces from a light braise liquid to a dark, resinous, almost-dry lacquer that coats every steak and that, spooned over rice, is the most concentrated seasoning in the northern Tết.

The pot is sealed after braising — often with a paste of rice dough over the lid — and in its sealed pot the fish keeps for the full three days of Tết without refrigeration, which is, as with every sealed and preserved Tết food in this collection, the original engineering specification. The pot is opened at the Tết table, the steaks are lifted out and sliced, and they are eaten with pickled scallion heads (dưa kiệu), steamed rice, and the mandatory clear soup — the kho-and-canh axis of the northern table, the same pairing structure the south uses, tuned drier and saltier for the northern palate.

A note on scale: the village recipe is built for a five-kilogram fish and a fourteen-hour fire, which is a commitment that few kitchens outside the Delta can or should attempt. The recipe below scales to a more practical 1.5-2 kg of bone-in carp steaks and a 6-8 hour braise, which produces a genuinely excellent fish kho with soft bones and a proper lacquer — not the full Đại Hoàng article, but a faithful rehearsal of it, and closer than anything a shorter braise can achieve. For the full experience, the village ships.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 1.5,
          unit: 'kg',
          name: 'black carp (cá trắm đen) or common carp, cut into 4 cm bone-in steaks',
          note: `Black carp is the original and the best — firm, dark, dense-boned, clean-flavoured. In Europe: whole common carp or mirror carp from a Polish, Turkish or Asian fishmonger, cut into thick steaks by the butcher's saw. Bone-in is non-negotiable — the bones are half the dish, and their softening is the whole point of the long braise. Catfish steaks are the distant fallback; their bones are thinner and soften in 3 hours, which produces a different and easier dish.`,
        },
        { amount: 2, unit: 'tbsp', name: 'coarse salt (for scrubbing)' },
        { amount: 2, unit: 'tbsp', name: 'rice wine' },
      ],
    },
    {
      title: 'The braise',
      items: [
        {
          amount: 80,
          unit: 'g',
          name: 'galangal (riềng), half sliced into thick coins, half julienned',
          note: `Generous and essential — galangal is the aromatic spine of the northern fish kho the way lemongrass is the spine of the southern one. Its piney, medicinal, faintly citrus warmth survives the long braise and frames the deep caramel. Ginger would be wrong: too warm, too familiar, and it mellows to nothing over six hours while galangal's terpenes persist.`,
        },
        {
          amount: 4,
          unit: 'tbsp',
          name: 'sugar (for nước màu)',
          note: `Taken to dark amber — the darkest caramel in the collection, darker even than the Huế kho tiêu, because a braise this long needs a proportionally deeper bitterness to anchor it. Light caramel over six hours reduces to candy; dark caramel reduces to depth.`,
        },
        { amount: 1, unit: 'tbsp', name: 'water (to stop the caramel)' },
        { amount: 4, unit: 'tbsp', name: 'fish sauce (nước mắm, 35-40°N)' },
        {
          amount: 2,
          unit: 'tsp',
          name: 'coarsely cracked black pepper',
          note: `The northern heat — cracked coarse for the same staged-release reason as every kho in this collection.`,
        },
        { amount: 4, name: 'shallots, sliced' },
        { amount: 200, unit: 'ml', name: 'strong brewed trà xanh (green tea)', note: `The Đại Hoàng signature addition — strong green tea poured into the pot in place of plain water. Its tannins tenderize the fish, its bitterness deepens the caramel, and its colour darkens the final sauce. A unique move in Vietnamese kho and the one that most outsiders' recipes miss.` },
        { amount: 100, unit: 'ml', name: 'water' },
        { amount: 3, name: 'dried chilies, whole' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil or rendered pork fat' },
      ],
    },
    {
      title: 'The pot and the fire',
      items: [
        {
          amount: 1,
          name: 'clay pot (niêu đất), 3-4 L, unglazed or partially glazed',
          note: `Clay is not optional for the full version. Its low conductivity and high thermal mass hold temperature through the long braise without the spiking that metal produces, and its porosity absorbs fat and seasoning over years of use — a seasoned niêu đất from a Đại Hoàng kitchen is itself an ingredient. A new one must be cured: soak in water overnight, then heat gently with plain water for an hour before first use. A heavy enamelled cast-iron pot (Le Creuset style) is the honest modern substitute.`,
        },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 1, name: 'jar of dưa kiệu (pickled scallion heads)', note: `The fixed northern Tết condiment — its sharp vinegar crunch is the designed counterweight to the dark, rich, sweet-salty fish. Non-negotiable.` },
        { amount: 8, name: 'bowls of hot steamed rice' },
        { amount: 1, name: 'pot of canh (clear soup) — cabbage, tofu, or whatever the Tết table sets beside the kho' },
      ],
    },
  ],
  steps: [
    {
      title: 'Scrub the fish, rub with salt and galangal — 30 minutes',
      description: `Rub each steak hard with coarse salt, rinse under cold water, and rinse again with the rice wine. Pat completely dry. Rub the galangal coins over every surface — the fish should smell of galangal and clean river, nothing else.

Lay the steaks in a single layer, dust with cracked pepper on both sides, and leave 30 minutes at room temperature.

A river fish that smells of mud at this stage was raised in a muddy pond, and no galangal will fix it over six hours — the braise concentrates, not conceals. Choose a different fish or a different fishmonger.`,
      tip: `The galangal rub before the pot is doing what it does in every northern game and fish preparation: its terpenes — particularly 1,8-cineole and alpha-pinene — bind to and mask the geosmin and MIB compounds that give freshwater fish their earthy, muddy note. Applied as a rub before the braise, the terpenes have 30 minutes of direct contact with the fish surface at full concentration, which is more effective than simmering galangal in the pot liquid, where the compounds dilute. Both additions happen in this recipe — rub first, pot second — because the rub handles the surface and the pot handles the bulk liquid, and between them the galangal reaches everywhere.`,
    },
    {
      title: 'Build the caramel — the darkest in the collection',
      description: `In the clay pot over medium heat, melt the sugar dry, swirling. Take it through clear, straw, honey, amber, and then — further than any other kho in this collection — to a very dark mahogany that is one breath from smoking, where the smell has left sweet behind and entered the territory of coffee and burnt toast. Add the tablespoon of water. It will spit.

Add the oil and the shallots, stir 30 seconds. The caramel should be nearly black in the pot but dark amber when held up to the light on a spoon. If it tastes straightforwardly bitter with no residual sweetness underneath, it has gone too far — discard and start again.

The darkness is proportional to the braise length. A two-hour kho uses a medium caramel because the reduction is moderate. A six-to-fourteen-hour kho reduces the sauce to almost nothing, concentrating the caramel many-fold, and needs a deeper, more bitter starting point so the finished lacquer reads as complex-bitter-sweet rather than as burnt sugar.`,
      tip: `This is the third caramel in the collection's kho file — the Mekong's medium-amber for coconut kho, Huế's dark-amber for pepper kho, and now Đại Hoàng's near-black for the longest braise. Lined up, they demonstrate a single principle: the darker the caramel, the more bitter caramelans it contains, and the more reduction a braise can absorb before the bitterness overwhelms the sweetness. It is a calibration curve, not a preference scale, and each province's caramel sits exactly where its braise time puts it. Match the darkness to the hours. The pot will tell you if you were right.`,
    },
    {
      title: 'Pack the pot and pour the tea — the braise begins at dusk',
      description: `Lay the galangal julienne across the caramel in the pot bottom. Pack the fish steaks in a single tight layer — raft formation, side by side, skin up. Pour over the fish sauce. Add the dried chilies. Pour the brewed green tea and the water down the side of the pot — the liquid should come about halfway up the fish, no more.

Bring to a bare simmer over the lowest heat you can sustain — a flame so low the surface barely shivers, a bubble breaking every two seconds. Cover with a lid slightly ajar.

In Đại Hoàng this is the moment the fire-keeper settles in for the night. The pot goes on at dusk — six or seven in the evening — and it comes off the following morning. One person feeds the fire, checks the pot every hour, tops up with a splash of hot tea or water if the liquid drops below a third of the fish's height, and sleeps in snatches on a mat beside the hearth. The sound of the pot — the slow, thick, intermittent blip of a deeply reduced kho — is what wakes the keeper when the fire needs feeding. It is the longest single piece of cooking attention in Vietnamese cuisine, and the village has been doing it at Tết for longer than anyone alive can date.`,
      tip: `The green tea in the pot is the Đại Hoàng signature and it is worth understanding because it does three things no other liquid can. First, its tannins (catechins and epicatechins) tenderize the fish by cross-linking with the collagen at the bone-meat interface, accelerating the conversion to gelatin — the same chemistry that tea-brining uses in Chinese red-cooked dishes. Second, its bitterness deepens the caramel's bitterness into a multi-layered bass note. Third, its colour — already dark — darkens further with the Maillard compounds of the long braise, giving the finished sauce its characteristic near-black, resinous, lacquer appearance. Water would achieve none of these. Tea was the choice, and the choice is the village's trade secret, published here because a collection this size should hold it.`,
    },
    {
      title: 'Braise 6-8 hours at home, 14 in the village — and check the bones',
      description: `Hold the barest simmer for a minimum of 6 hours — 8 is better, 14 is the village standard for a five-kilogram fish. Every hour: tilt the pot and spoon the darkening liquid back over the steaks. Every two hours: check the liquid level and add a small splash of hot tea if it drops below a third of the fish height. Never stir — the steaks must stay intact.

The braise passes through stages you can read. Hours 1-3: the fish firms, the liquid is still loose and brown. Hours 3-5: the liquid thickens visibly, the colour deepens toward dark chocolate, the galangal's perfume fills the kitchen. Hours 5-8: the sauce is now a heavy, syrupy, near-black lacquer, the steaks sit in perhaps two tablespoons of it per piece, and the pot sounds thick and slow.

The doneness test is the bone. Press a chopstick against the largest visible bone in a steak: at 6 hours it bends but does not break; at 8 it yields with gentle pressure and a piece bitten off chews softly like firm cartilage; at 14 it crushes between the teeth like a ripe olive. The bones tell you when your braise is done, and the answer is different for every pot. When you can eat the bone, the fish is ready.`,
      tip: `Bone softening in a kho is a slow acid-and-heat dissolution of hydroxyapatite — the calcium phosphate mineral that makes bone hard. The caramel's organic acids (produced during caramelisation), the green tea's tannic acid, and the fish sauce's amino acids together maintain a mildly acidic environment (pH roughly 4.5-5.5) across the long braise, and at 95-100°C the hydroxyapatite gradually dissolves, releasing calcium into the sauce and leaving behind a softened collagen-and-protein matrix that bends and chews rather than snapping. At six hours the dissolution is partial — the bone is flexible but still mineralised at its core. At fourteen the dissolution is nearly complete and the bone is essentially collagen gel with traces of mineral. The time is not arbitrary. It is the rate of a chemical reaction at a specific temperature and pH, and shortening it is not an option the chemistry offers.`,
    },
    {
      title: 'Seal, rest, and serve at Tết — or any day you declare worthy',
      description: `Take the pot off the heat. If sealing for Tết storage: press a round of rice-dough paste or cling film over the surface, set the lid on, and leave at room temperature — it keeps the full three days. If eating today: rest the pot 30 minutes, then bring it to the table as it is.

Lift each steak out carefully — a spatula under, a spoon guiding on top — and set it on rice. Spoon the dark lacquer over the rice: one spoonful per bowl, no more. The lacquer is a seasoning, not a sauce, and its concentration after six or more hours of reduction means a little goes further than any fresh condiment can.

Eat with dưa kiệu — the pickled scallion's sharp vinegar crunch is the specific counterweight the village designed the kho to be eaten with, and without it the dark richness has no foil. A mouthful of fish-and-rice, a bite of dưa kiệu, a sip of canh, and repeat: the northern Tết rhythm, the same kho-pickle-soup triangle that every Delta Tết table also runs, tuned darker and drier for the north's palate and for the north's winter.`,
      tip: `Cá kho làng Vũ Đại is the dish in this collection where time is most explicitly the ingredient — not a condition that enables other ingredients, but the thing itself, purchased with hours and measured in the softness of a bone. A two-hour kho is a good fish dish. A six-hour kho is a different category. A fourteen-hour kho is something a village has been making for generations, through the night, beside a fire, for the new year, and the difference between it and the two-hour version is the same difference as between a week-aged cheese and a two-year one: the same ingredients, the same chemistry, and a depth that nothing but time can produce. The village sells time. The price is high. The fish is worth it.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
