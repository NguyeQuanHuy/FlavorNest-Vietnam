'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-phong-tom-sa-giang',
  title: `Bánh Phồng Tôm Sa Giang (Sa Giang Shrimp Crackers)`,
  subtitle: `Tapioca starch, fresh shrimp paste, salt and sugar — pressed into thin discs, sun-dried to translucent wafers, and deep-fried in three seconds until they puff to four times their size into a shattering, shrimp-pink, impossibly light cracker. The most exported food in Đồng Tháp's history, and a recipe so simple its difficulty is entirely in the drying.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '2 days',
  rating: 4.8,
  baseServings: 8,
  heroImage: '/images/recipes/banh-phong-tom-sa-giang.jpg',
  intro: `Sa Giang is a brand name before it is a place — or rather, it is a place that became a brand name so successfully that the two are now inseparable. The Sa Giang factory sits in Cao Lãnh, the capital of Đồng Tháp, and it has been producing bánh phồng tôm — shrimp crackers — since 1960, exporting them to every Vietnamese grocery on earth and to a good number of non-Vietnamese ones besides. The red-and-yellow box with the leaping shrimp is one of the most recognisable food packages in the Vietnamese diaspora, and the cracker inside it — pale, translucent, hard as a poker chip in its dried state and then exploding into a puffy, shattering, shrimp-pink cloud the instant it hits hot oil — is one of the most satisfying three-second cooking transformations in any cuisine.

But bánh phồng tôm is not a factory invention. It is a village product industrialised, and the village product predates the factory by generations. Every household in the Mekong Delta that had shrimp and tapioca made its own version: the shrimp pounded to a paste with tapioca starch and salt, the paste rolled thin, sliced into discs, and dried in the sun on bamboo racks for a day or two until the discs were rigid, translucent and shelf-stable. Fried in hot oil on demand — at a party, at Tết, beside a meal of cơm tấm or bún — they puffed into the cracker the world now buys in a box. Sa Giang's contribution was scale, consistency and the export chain, not the recipe.

The puff is the physics, and the physics is elegant. A dried cracker is a dense, glassy matrix of gelatinised tapioca starch with residual moisture trapped inside — roughly 10-12% water, locked in molecular-scale pockets within the starch network. When the cracker hits oil at 180°C, that residual water flashes to steam in under a second, and the steam — expanding to 1,600 times the water's volume — inflates the softened starch matrix from the inside out, exactly as steam inflates a puff-pastry or a poori. The cracker's volume increases three to four times in three seconds, the surface sets crisp in the hot oil, and the interior is a foam of air pockets trapped in a shell of fried starch. The whole event takes less time than reading this sentence, and the window between "perfectly puffed" and "still flat" or "burned" is about two seconds. Getting the oil temperature right is the entire skill of frying; getting the drying right is the entire skill of making.

The drying is, in fact, the recipe's real difficulty and the reason most home versions underperform. If the cracker is under-dried (too much residual moisture), it puffs unevenly and stays chewy-soft at the centre. If it is over-dried (too little moisture), there is not enough steam to inflate the matrix and the cracker stays flat and hard in the oil, browning without puffing. The target is a narrow moisture window — 10-12% — and the traditional method of achieving it is sun-drying for one to two days, checking by flexing the disc: a correctly dried cracker bends very slightly before snapping cleanly, like a dry pasta sheet. The factory uses controlled dehydrators. The village uses the sun. Both aim for the same snap.

This recipe documents the from-scratch method — shrimp paste, tapioca, drying, frying — because the collection's purpose is to record the food as it is made, and because a home-made shrimp cracker, fried from a disc you dried yourself, has a shrimp intensity and a freshness that no box from any factory can match. The box is excellent. The home-dried disc, made from shrimp you pounded that morning, is a different thing, and the difference is the shrimp.`,
  ingredientSections: [
    {
      title: 'The cracker dough',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'fresh shrimp, peeled, deveined, patted very dry',
          note: `The freshest you can find — the cracker's flavour IS the shrimp, concentrated by drying. Pound or process to a very smooth paste — no chunks, no fibre. The paste should be sticky and cohesive, not grainy.`,
        },
        {
          amount: 300,
          unit: 'g',
          name: 'tapioca starch (bột năng)',
          note: `The puffing agent. Tapioca's near-pure amylopectin gelatinises into a clear, elastic, glassy matrix that traps moisture uniformly — the prerequisite for an even puff. Cornstarch or rice flour will not puff the same way because their amylose content produces a rigid, crystalline matrix that shatters rather than inflates.`,
        },
        { amount: 1.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'ground white pepper' },
        { amount: 1, unit: 'tsp', name: 'baking powder (optional)', note: `Some formulas add a tiny amount — it generates additional gas during frying, giving a slightly lighter, more expansive puff. Traditional recipes do not use it; the Sa Giang factory reportedly does.` },
        { amount: 150, unit: 'ml', name: 'water, approximately' },
      ],
    },
    {
      title: 'For frying',
      items: [
        { amount: 1, unit: 'L', name: 'neutral oil, for deep-frying at 180°C', note: `The oil must be deep enough to submerge the cracker entirely — a half-submerged cracker puffs on one side and stays flat on the other.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Pound the shrimp and build the dough — smooth, pink, elastic',
      description: `Pound or process the peeled shrimp with the salt to a very smooth, sticky, cohesive paste — 3-4 minutes in a food processor, or 10 minutes in a mortar. The salt dissolves the myosin and the paste should cling to the blade or pestle in one mass.

Mix the tapioca starch, sugar, pepper and baking powder if using. Add the shrimp paste and work together with your hands, adding water gradually, until you have a smooth, firm, pale-pink dough — slightly stiffer than a bread dough, not sticky, not crumbly. It should roll out without cracking and without sticking.

The dough should smell powerfully of shrimp and feel elastic when pulled — the tapioca and the myosin together form a network that stretches before tearing.`,
      tip: `The shrimp-to-tapioca ratio is the puff's calibration knob. More shrimp (above 50%) gives a more intensely flavoured cracker with a denser, less dramatic puff — the protein network resists inflation. More tapioca (above 60%) gives a lighter, more spectacular puff but a milder flavour — the starch matrix inflates easily but carries less shrimp per bite. The 50:50 ratio here is the Sa Giang balance: enough shrimp to taste convincingly of the sea, enough tapioca to puff convincingly in the oil. Adjust toward shrimp for flavour, toward tapioca for drama.`,
    },
    {
      title: 'Shape into logs, steam, slice thin, and dry — the two-day step',
      description: `Roll the dough into logs about 4 cm in diameter and 20 cm long — smooth, even, no air pockets. Wrap each log tightly in cling film, twisting the ends.

Steam the logs over hard-boiling water for 30-40 minutes until firm through — a skewer should come out clean and the log should feel dense and rubbery-firm when pressed.

Cool completely, then refrigerate overnight. The cold firms the gelatinised starch to its maximum density, which is what allows you to slice it thin without crumbling. The next morning, unwrap and slice into discs 2-3 mm thick with a very sharp knife — as thin and as uniform as your steadiest hand allows. Thick slices will not dry uniformly and will not puff evenly.

Lay the discs in a single layer on bamboo racks, wire racks or parchment-lined trays, and dry:

SUN-DRYING (traditional): set the racks in full sun with good airflow for 1-2 days, turning once, until the discs are rigid, translucent, and snap cleanly when bent — like a dry pasta sheet. Bring inside at night to avoid dew re-moisturising them.

OVEN-DRYING (practical): set oven to 60-70°C with fan and door slightly ajar. Dry 4-6 hours, turning once, until the same snap test passes.

DEHYDRATOR: 60°C, 6-8 hours.

The target: a disc that is translucent (you can see light through it), rigid (it does not bend more than 2 mm before snapping), and weighs roughly half what the freshly sliced disc weighed (the moisture has halved from about 25% to 10-12%). If it bends without snapping, it is too wet and will puff unevenly. If it shatters into fragments at the slightest touch, it is too dry and will not puff at all.

Store the dried discs in an airtight container with a desiccant sachet. They keep 3-6 months at room temperature — the same shelf life as the factory product, because the product is the same.`,
      tip: `The steam-then-slice-then-dry sequence is the industrial method and it solves a problem the older roll-thin-and-dry method could not: uniformity. A raw dough rolled to 2 mm and dried directly shrinks and warps unpredictably as the moisture leaves, producing discs of wildly varying thickness that puff unevenly. A steamed log gelatinises the starch uniformly throughout, and slicing the set log produces discs of perfectly even thickness — every disc identical, every one drying at the same rate, every one hitting the oil with the same moisture content and puffing to the same size. The steam step is a pre-set, a controlled gelatinisation that standardises the product before the drying begins. It is the factory's single most important innovation, and it works identically at home.`,
    },
    {
      title: 'Fry at 180°C — three seconds from disc to cloud',
      description: `Heat the oil to 180°C — a small piece of dried cracker dropped in should sink for one second, then rise violently to the surface in an eruption of bubbles and puff to 3-4 times its size within 3 seconds. If it stays at the bottom and bubbles gently, the oil is too cold. If it browns instantly, the oil is too hot.

Drop one disc at a time into the oil. It will sink, pause for one heartbeat, then explode upward — puffing, expanding, curling, and turning from translucent-pale to opaque-white-to-faintly-pink in the same second. Flip it once with a spider or tongs. Total time in the oil: 3-5 seconds. Pull it the moment it stops expanding and before it starts browning.

Drain upright on a rack. The cracker should be: enormous (3-4 times the disc's diameter), uniformly puffed (no flat patches), shatteringly crisp, pale shrimp-pink, and — when held to the ear and squeezed — crackle like a fire. A cracker that is flat in patches was under-dried. A cracker that browned before puffing was in oil that was too hot. A cracker that is chewy was in oil that was too cold. The three-second window is the whole skill.

Fry all the discs in rapid succession — the oil temperature drops with each one, so let it recover between batches of four or five.`,
      tip: `The three-second puff is a phase transition: the residual water in the dried starch matrix, heated past 100°C in a fraction of a second by the 180°C oil, flashes to steam and expands to 1,600 times its liquid volume. The softened (but not yet melted) starch matrix stretches to accommodate the expanding steam, forming the foam structure — a network of thin starch walls enclosing air pockets — and then the starch sets rigid in the hot oil, locking the foam in place. The whole event — heating, flash, expansion, setting — runs to completion in under three seconds because the disc is only 2-3 mm thick and the temperature differential between the oil and the disc's interior is nearly 170°C. A thicker disc would take longer and brown before puffing; a thinner one would not hold enough moisture to puff at all. The 2-3 mm thickness was calibrated, by generations of village makers and by the factory's food engineers, to the exact dimension that places the puff and the set in the same three-second window. The thickness is the timer.`,
    },
    {
      title: 'Eat immediately — or within the hour, because the cracker keeps score',
      description: `Serve the crackers in a pile — they are too light and too fragile to stack neatly, and a pile is the correct format. They are eaten by hand, broken into manageable shards, and they accompany everything: cơm tấm (the cracker in the corner of every broken-rice plate in Saigon), bún (laid across the top of a dry-noodle bowl), gỏi cuốn (as a crunchy side), or nothing at all — straight from the pile, one after another, the way the rest of the world eats potato chips, except these taste of the Mekong's shrimp and the Delta's tapioca and three seconds of physics.

A fresh-fried cracker is at its peak for about 30 minutes. After that, atmospheric moisture migrates into the foam structure — the same hygroscopic re-absorption that softens every fried food in this collection — and the cracker goes from shattering to merely crunchy to disappointingly chewy. In humid Đồng Tháp, the window is even shorter. This is why every stall fries to order, why every household fries in batches through a meal, and why a plate of crackers at a party is replenished by someone standing at the wok rather than piled in advance.

The dried discs, however, keep for months. They are the pantry product — shelf-stable, lightweight, infinitely patient — and the three-second fry is the on-demand transformation that turns them from pantry to plate. The disc is the storage format. The cracker is the eating format. And the oil, heated to exactly 180°C, is the bridge between them.`,
      tip: `Bánh phồng tôm Sa Giang is the Đồng Tháp collection's closing dish, and it closes with the simplest possible demonstration of the province's two great resources: shrimp and tapioca. The shrimp comes from the rivers and the paddies, dried and pounded into a paste. The tapioca comes from the cassava fields, ground to a starch. The two are combined, steamed, sliced, dried, and stored — a product that weighs almost nothing, keeps for months, and contains the Mekong's flavour in a wafer. Three seconds of hot oil and the wafer becomes a cracker — the most dramatic volume expansion in Vietnamese cooking, the most satisfying sound, and the most portable piece of the Delta. The red-and-yellow box in every Vietnamese grocery in Europe, in every Chinatown in the world, is Đồng Tháp's longest-reaching export, and the cracker inside it is the province's simplest recipe: shrimp, starch, sun, oil, and three seconds of steam becoming air.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
