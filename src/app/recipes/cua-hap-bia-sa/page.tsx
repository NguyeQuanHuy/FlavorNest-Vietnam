'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cua-hap-bia-sa',
    title: 'Cua H?p Bia S? (Beer-Steamed Crab with Lemongrass)',
    subtitle: 'Live mud crab or blue swimmer crab steamed over Vietnamese lager beer with lemongrass, ginger, and kaffir lime leaf until the shell turns brilliant orange and the sweet white flesh inside is just set — served with mu?i tiêu chanh and the instruction to eat with your hands.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/cua-hap-bia-sa.jpg',
    intro: `Cua h?p bia s? is the steamed crab preparation that appears on every coastal seafood restaurant menu in Vietnam and on every table where freshness matters most. The technique is identical to tôm h?p bia — Vietnamese beer provides the steaming liquid, the lemongrass and ginger perfume the steam — but the application to whole crab produces results that are specific to this crustacean: the thick shell of a live mud crab (cua bùn) or blue swimmer crab (cua bi?n) conducts heat slowly and evenly, protecting the sweet flesh inside from direct heat while the aromatic steam penetrates through the leg joints and the underside. The result is crab meat that is simultaneously perfectly cooked and deeply fragrant — the lemongrass character present throughout the flesh rather than only on the surface. Cua h?p bia s? is the Vietnamese preparation that most clearly demonstrates why live crab is worth seeking: the sweetness of the flesh, the flavor of the roe when present, and the texture of properly steamed versus pre-cooked crab are different enough that they constitute different eating experiences. The steaming time is the critical variable — too short and the flesh is translucent and soft at the joints; too long and the flesh tightens, shrinks from the shell, and loses the moisture that makes fresh crab worth eating. Eight to twelve minutes, depending on the crab's weight, and nothing more.`,
    ingredientSections: [
        {
            title: 'Crab',
            items: [
                { amount: 2, name: 'live mud crabs or blue swimmer crabs (cua bùn / cua bi?n)', note: '500-700g each. Live is essential — pre-cooked crabs steamed a second time lose their moisture and flavor completely. If only one crab available, the recipe scales down directly.' },
            ],
        },
        {
            title: 'Beer steaming bath',
            items: [
                { amount: 660, unit: 'ml', name: 'Vietnamese lager beer (Saigon, Tiger, or 333)', note: '2 cans — light lager only. The mild malt and CO2 carry the lemongrass aromatics more effectively than water.' },
                { amount: 300, unit: 'ml', name: 'water' },
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and roughly cut' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '4 thick slices, smashed' },
                { amount: 6, name: 'kaffir lime leaves', note: 'torn' },
                { amount: 3, name: 'spring onions', note: 'tied in a bundle' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Mu?i tiêu chanh',
            items: [
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 2, unit: 'tsp', name: 'freshly ground black pepper', note: 'coarse grind' },
                { amount: 3, name: 'limes', note: 'squeezed fresh at the table' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'optional' },
                { amount: 1, name: 'bird\'s eye chili, minced', note: 'optional — for heat in the salt' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 4, name: 'kaffir lime leaves, extra', note: 'finely shredded — for scattering over the finished crab' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 1, name: 'bowl warm water with lime slice', note: 'finger bowl' },
                { amount: 1, name: 'crab cracker or heavy spoon', note: 'for the claws' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the live crab',
            description: 'Place the live crabs in the freezer for 20 minutes to sedate completely. The crabs should be still when removed — if still moving, return for 5 more minutes. Rinse under cold running water, scrubbing the shell and leg joints with a brush to remove any mud or debris. Remove the rubber bands if present. The crabs go into the steamer whole — no further preparation needed. The whole shell protects the flesh during steaming.',
            tip: 'The 20-minute freezer sedation produces a more deeply sedated crab than a shorter period — the crab will not move during preparation or the initial placement in the steamer, which produces safer and more even cooking than a partially sedated crab that moves and changes position during steaming.',
        },
        {
            title: 'Build the aromatic beer bath',
            description: 'Pour both cans of beer into the steamer base along with the water, bruised lemongrass, smashed ginger, torn kaffir lime leaves, spring onion bundle, and salt. Bring to a vigorous, full rolling boil over high heat. The beer will foam as it heats — this is normal and subsides within 2 minutes. The steam should smell clearly of lemongrass and ginger before the crab goes in — if the steam smells only of beer, the aromatics need 2 more minutes.',
            tip: 'The steaming liquid must be at a vigorous boil before the crab goes in — not a simmer, not a light boil. A vigorous boil produces consistent, intense steam that cooks the crab evenly from all sides. Starting with insufficient steam produces uneven cooking where the underside steams faster than the top.',
        },
        {
            title: 'Steam to the precise time',
            description: 'Place the crabs in the steamer belly-side up — this position keeps the roe and crab butter (if present) in the shell cavity rather than draining out during cooking. Cover tightly. Steam over high heat: 500g crab — 8 minutes. 600g — 10 minutes. 700g — 12 minutes. Do not open the lid during steaming. Check the water level once at the halfway point — top up with boiling water if needed.',
            tip: 'Belly-side up is the specific positioning that retains the crab roe and butter in the upper shell cavity. These are the most flavorful elements of the crab and should be preserved, not drained. Vietnamese coastal cooks always position crabs belly-up for steaming.',
        },
        {
            title: 'Test doneness',
            description: 'At the correct time, open the lid carefully — the steam is extremely hot. The shell should be uniformly brilliant orange with no dark grey patches remaining. Pull one leg — it should come away with moderate resistance and the meat at the joint should be white and opaque throughout. If any translucent or soft meat is visible at the joints, cover and steam 2 more minutes.',
            tip: 'The leg-pull test is the most reliable doneness indicator for whole steamed crab. A correctly cooked crab leg comes away cleanly with moderate resistance. An under-cooked leg resists the pull — the meat is still connected to the shell at the joint. An over-cooked leg comes away with no resistance at all — the meat has shrunk and separated.',
        },
        {
            title: 'Make the mu?i tiêu chanh',
            description: 'Place salt and coarsely ground black pepper on individual small plates — one per diner. Leave the limes uncut. Squeeze the lime directly over the salt-pepper at the moment of eating — the citrus oil from the lime skin is released in the act of squeezing and is the aromatic element that makes mu?i tiêu chanh work. The dipping salt should be freshly made at the table, not pre-mixed.',
            tip: 'For cua h?p specifically, the mu?i tiêu chanh should have slightly more pepper than for shrimp — crab flesh is sweeter and more neutral than shrimp and benefits from a more assertive pepper note in the dipping salt.',
        },
        {
            title: 'Crack, eat, and serve',
            description: 'Transfer the steamed crabs to a large plate or board. Scatter shredded kaffir lime leaves, rau ram, and sliced chili over the top. Serve with the mu?i tiêu chanh, lime wedges, finger bowls, and a crab cracker for the claws. To eat: remove the top shell, scoop out the roe and crab butter with a spoon — these are eaten first. Pull the legs and claws. Crack the claws with the cracker. Dip all flesh in the mu?i tiêu chanh. Eat with rau ram between pieces. The reserved steaming liquid in the pot is a fragrant broth — season and serve in small cups alongside.',
            tip: 'The crab butter and roe in the top shell — the orange-red liquid accumulated during steaming — should be eaten first, before it cools and loses its liquid character. Vietnamese coastal diners eat this directly from the shell with a small spoon, often with a squeeze of lime. It is the most intensely flavored part of the whole crab.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
