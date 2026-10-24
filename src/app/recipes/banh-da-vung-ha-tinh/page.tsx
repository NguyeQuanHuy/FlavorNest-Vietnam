'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-da-vung-ha-tinh',
  title: `Bánh Đa Vừng Hà Tĩnh (Black Sesame Rice Crackers)`,
  subtitle: `Fermented rice batter laced with black sesame, garlic and pepper, steamed into thick discs, dried for two days in the sun on bamboo racks, and grilled over charcoal until they puff and blister. The cracker that runs through the entire Hà Tĩnh table — and a two-day lesson in how a poor province turns rice into shelf-stable crunch.`,
  category: 'VEGETARIAN',
  difficulty: 'Medium',
  totalTime: '2 days',
  rating: 4.8,
  baseServings: 8,
  heroImage: '/images/recipes/banh-da-vung-ha-tinh.jpg',
  intro: `By now, anyone cooking through this Hà Tĩnh collection has met the bánh đa vừng three times: as the scoop for the River La clams, as the crunch snapped over a bowl of cháo canh, and as the two shells of a kẹo cu đơ. It is the connective tissue of the province's table — a thick rice cracker, densely studded with black sesame, grilled over charcoal until it puffs — and it deserves its own recipe, because in Hà Tĩnh it is not a bought ingredient. Villages make it, most famously Việt Xuyên in Thạch Hà district, where courtyards fill with bamboo racks of drying discs whenever the sun cooperates, and where the trade has passed down long enough that nobody can date it.

What separates the Hà Tĩnh cracker from the bánh tráng and bánh đa of every other province is that it is seasoned like a dish, not left plain like a wrapper. The batter carries minced garlic and cracked black pepper — the province's signature seasoning pair, the same one that runs through the hến and the cháo canh — and the sesame load is heavy enough that the finished cracker is nearly as much seed as rice. Grilled, it tastes savoury, toasted, faintly hot and unmistakably of itself; it is a food you can eat alone with nothing, and children in Hà Tĩnh do, the way children elsewhere eat biscuits. Other provinces make sweeter, blander, thinner crackers as vehicles. Hà Tĩnh makes one that could stand as the destination.

The process is a three-act piece of food engineering, and every act has real chemistry in it. First the rice is soaked long enough to sour slightly — a mild lactic fermentation, the same one behind the Đức Thọ noodle — then ground wet into a batter and steamed into thick discs on cloth, exactly like an oversized bánh mướt. Second, the discs are dried: two days on bamboo racks in open sun, flipped regularly, until they pass from leathery to rigid to glassy — which is, in materials terms, the starch crossing its glass transition into an amorphous solid, shelf-stable for months in a climate that destroys almost everything else. Third, at the moment of eating, the disc meets live charcoal, and its few percent of residual water flash to steam and inflate the glassy starch into a blistered, porous, shattering foam. Fermentation, vitrification, puffing: a rice paddy converted into a pantry.

It is worth saying plainly why this food exists, because the reason is the province itself. Hà Tĩnh is poor, its climate is violent — floods in autumn, a scouring hot Laos wind in summer — and its history is a long exercise in preserving calories through bad seasons. The bánh đa is rice made storable, portable and instantly ready: dried, it keeps half a year; grilled, it is food in two minutes with no pot, no water and no fuel beyond a handful of embers. That the result also happens to be one of the most texturally satisfying objects in Vietnamese cooking is the kind of accident that isn't one. Scarcity engineering, given enough generations, becomes cuisine.`,
  ingredientSections: [
    {
      title: 'The batter',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'plain rice (gạo tẻ), an ordinary long-grain, not fragrant',
          note: `Old-crop rice is traditional and better — it is drier and yields a batter that dries harder and puffs bigger. Avoid jasmine and other fragrant varieties; their aroma fights the sesame and their softer starch makes a weaker cracker. Soaked overnight and ground wet (step 1). If you must use rice flour instead: 350 g, whisked with the water and rested 8 hours, and accept a slightly less complex cracker — the mild sourness of soaked whole rice cannot be faked.`,
        },
        { amount: 600, unit: 'ml', name: 'water, plus more to adjust' },
        {
          amount: 60,
          unit: 'g',
          name: 'tapioca starch (bột năng)',
          note: `Roughly 15% of the flour weight. It adds the flexibility that lets a thick disc survive handling and drying without cracking, and it browns and blisters beautifully on the coals.`,
        },
        {
          amount: 120,
          unit: 'g',
          name: 'black sesame seeds (vừng đen)',
          note: `The defining load — this is a lot of sesame, and it is meant to be. Black, not white: the black seed has a deeper, slightly bitter, more resinous aroma, and its oil content is what perfumes the cracker over the coals. Rinse and drain well; wet seeds distribute more evenly through the batter and stick better.`,
        },
        { amount: 4, name: 'cloves garlic, pounded to a fine paste', note: `In the batter itself — the Hà Tĩnh signature. It toasts inside the drying cracker and blooms over the charcoal.` },
        { amount: 1, unit: 'tsp', name: 'coarsely cracked black pepper', note: `The other half of the signature. Garlic and pepper in the batter is what makes this a Hà Tĩnh cracker and not a generic one.` },
        { amount: 1.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'Equipment',
      items: [
        {
          amount: 1,
          name: 'wide pot with cloth stretched over the mouth (the bánh mướt rig)',
          note: `A clean cotton or muslin cloth stretched drum-tight over a pot of boiling water and tied — the same steaming rig as bánh mướt, ladling a much thicker layer. A 26-28 cm pot mouth gives the traditional cracker size.`,
        },
        { amount: 2, name: 'bamboo racks, flat baskets or oven racks, for drying', note: `Anything that lets air reach both faces. Solid trays cause the underside to sweat and mould.` },
        { amount: 1, name: 'charcoal fire, for the final grilling', note: `Non-negotiable for the true result, for the reasons laid out in step 5. A gas flame is a workable second; an oven is a distant third.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Soak the rice until it just sours — 12 to 24 hours',
      description: `Rinse the rice twice and soak it in plenty of cool water for 12 hours in warm weather, up to 24 in cold. It is ready when a grain crushes completely between two fingers and the soaking water smells very faintly, cleanly sour — not rank, not fizzy, just a whisper of yoghurt.

Drain, and grind the rice with the 600 ml of fresh water in a blender, in batches, for a full 2-3 minutes per batch, until the batter is absolutely smooth with no grit between your fingertips.

Whisk in the tapioca starch, salt, garlic and pepper. The batter should be noticeably thicker than the bánh mướt batter — the consistency of pouring cream rather than skimmed milk — because this is a cracker, not a crepe. Rest 30 minutes, then stir in the drained sesame just before steaming so it stays suspended.`,
      tip: `The faint sourness is a controlled lactic fermentation and it is doing structural work, the same work it does in the Đức Thọ noodle one district away. Lactobacilli acidify the soak toward pH 4-5, which loosens the protein matrix binding the starch granules; the freed starch gelatinizes into a denser, more cohesive gel that dries harder and — critically — puffs more evenly over the coals. Industrial crackers made from dry flour in an afternoon are more brittle and less blistered for exactly this reason. The soak is not soaking. It is the first cooking.`,
    },
    {
      title: 'Steam thick discs on cloth — 4 to 5 minutes each',
      description: `Bring the cloth-covered pot to a hard boil. Stir the batter well — the sesame settles constantly — and ladle on a generous layer, spreading it with the back of the ladle into a disc 3-4 mm thick, three or four times thicker than a bánh mướt. Cover and steam 4-5 minutes.

The disc is done when it has turned fully opaque, the surface is set and matte, and the sesame seeds sit locked in the surface rather than loose on it. Slide a flat stick or oiled spatula under one edge and lift the whole disc onto an oiled tray or directly onto the drying rack.

Do not stack them. Lay each disc flat and separate. They are at their most fragile in the first minutes — a fold now is a crack after drying.`,
      tip: `Thickness is the entire difference between this and every thin rice paper in Vietnam, and it is chosen for the finale. A 1 mm sheet dries into something that can only shatter; a 3-4 mm disc dries into a slab with enough interior volume to hold meaningful residual water — and it is that trapped interior water, flashing to steam over the coals two months later, that inflates the cracker into a puffed foam. Thin crackers crisp. Thick crackers puff. The ladle is deciding, right now, what the charcoal will be able to do later.`,
    },
    {
      title: 'Sun-dry two days — flip often, and respect the leathery stage',
      description: `Set the racks of discs in direct sun with free airflow. Flip every 2-3 hours on the first day. Bring them in overnight (dew undoes a day of drying), and give them a second day of sun, flipping less often.

They pass through three readable stages: pliable and cool to the touch (day one, morning); leathery, bending without breaking (day one, evening); and finally rigid, lightened in colour, and glassy — a disc tapped with a fingernail gives a hard tick, and an attempt to bend it snaps it cleanly. That snap is the endpoint.

No sun? A fan oven at 60-70°C with the door cracked, 6-8 hours, flipping hourly, is an honest substitute. Higher temperatures case-harden the surface and trap moisture in the core — the disc feels dry, then moulds in the bag a week later.

Fully dried, the crackers keep 4-6 months in an airtight container with a desiccant sachet. This is the pantry stage: Hà Tĩnh households hold a stack the way European ones hold crispbread.`,
      tip: `The endpoint of drying has a name in materials science: the glass transition. As water leaves, the gelatinized starch passes from a rubbery, flexible state into an amorphous glass — molecularly frozen, rigid, and, at around 10-12% residual moisture, too dry for any microbe to grow. The flipping matters because moisture always migrates to the shaded face; leave a disc unflipped and one side vitrifies while the other stays rubbery, and the internal stress between the two states warps and cracks it. Slow, even, both faces: it is the same discipline as drying timber, at breakfast-table scale.`,
    },
    {
      title: 'Grill over charcoal — 2 minutes of constant motion',
      description: `Burn charcoal down to glowing embers with no flame. Hold a dried disc 15-20 cm above the coals with tongs or bare practiced fingertips, and turn it constantly — a quarter-turn and a flip every 5-10 seconds — for about 2 minutes.

Watch the transformation: the rigid grey disc softens for an instant, then blisters, puffs and domes in patches, curls at the rim, and turns a mottled gold, the sesame darkening and popping and releasing its oil-smoke perfume. Done, it is light, rigid, hollow-sounding, and snaps with a clean loud crack.

Constant motion is the whole skill. Held still for ten seconds, one patch scorches acrid-black while the rest stays raw and leathery. The Việt Xuyên grillers keep two crackers moving at once over one bed of coals; start with one.`,
      tip: `The puff is a steam explosion in slow motion, and it needs the violence of radiant charcoal heat specifically. Embers deliver energy as intense infrared: the cracker surface leaps past 200°C in a second or two, the interior's residual water flashes to steam faster than it can diffuse out, and the pressure inflates the momentarily-softened starch glass into a rigid foam before it re-sets. An oven fails not because it is too cool but because it is too gentle — it warms the disc evenly, the water strolls out as vapour, and the cracker dries browner without ever inflating. Same physics as popcorn, poppadoms and puffed rice: it is not the temperature that puffs, it is the rate.`,
    },
    {
      title: 'Eat it every way the province does',
      description: `Eat the first one straight off the coals, standing at the fire, with nothing — that is the quality test and the griller's privilege.

Then deploy it: snapped into shards as the spoon for hến xào; broken over a bowl of cháo canh in the last second before eating; as the shells of a kẹo cu đơ, pressed around hot peanut molasses; or simply set whole in the middle of the table at a nhậu session next to the beer, where it will not survive ten minutes.

Grill only what will be eaten within the half hour. A grilled cracker begins reabsorbing atmospheric moisture immediately, and in humid weather it slumps from shattering to leathery within a few hours. The dried, ungrilled disc is the storage format; the grilled one is a live performance. Households keep the stack dry and grill to order, one meal at a time — and now, so can you.`,
      tip: `Step back and the bánh đa vừng explains the whole Hà Tĩnh collection. It is the crisp half of the province's obsessive crisp-against-soft pairings — against wet clams, against thick soup, against chewy molasses candy. It carries the garlic-and-pepper signature that seasons the hến and the cháo canh. It is built by the same fermentation as the Đức Thọ noodle, sweetened by nothing, and engineered — like the bánh gai, like the cu đơ — to survive months in a punishing climate. One cracker, and in it the entire grammar of a province that had little, wasted nothing, and made the little it had snap.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
