'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cha-ca-hap-la-chuoi',
    title: `Steamed Fish Cake in Banana Leaf`,
    subtitle: `Chả Cá Hấp Lá Chuối — Northern-style minced fish paste steamed in banana leaf parcels with dill and spring onion oil — delicate, aromatic, and entirely different from fried chả cá.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Chả cá hấp lá chuối is the steamed fish cake preparation that exists alongside — and is often overshadowed by — the famous chả cá Lã Vọng of Hà Nội, which is pan-fried and turmeric-golden. The steamed version is older, quieter, and in many ways more technically demanding: a paste of fresh fish ground to a smooth, elastic consistency, seasoned with dill, spring onion, fish sauce, and a small amount of pork fat for richness, wrapped in banana leaf parcels and steamed until just set — firm enough to slice but so delicate that it trembles when the plate is moved.\n\nThe key technical challenge is the fish paste itself. The paste must be worked — pounded or processed — to the point where the fish proteins denature and crosslink into an elastic network that holds the cake's shape after steaming. Under-worked paste produces a crumbly, grainy result that falls apart when sliced. Over-worked paste produces a dense, rubbery result that is unpleasant to eat. The window between these two failures is narrow and is judged by feel: the paste should be sticky, slightly shiny, and stretch without breaking when pulled between two fingers.\n\nThe banana leaf wrapping serves three functions simultaneously: it creates a sealed steam environment that cooks the fish paste from all directions evenly; it imparts a faint green, grassy fragrance to the outer surface of the cake; and it prevents the delicate paste from drying out or forming a skin during steaming. When the parcels are opened at the table, the burst of dill and banana leaf fragrance is the dish announcing itself.`,
    ingredientSections: [
        {
            title: `Fish paste`,
            items: [
                { amount: 500, unit: 'g', name: `fresh white fish fillet (ca thu, ca basa, or ca tram)`, note: `skin removed, bones checked — very cold, almost frozen` },
                { amount: 80, unit: 'g', name: `pork fat (mo heo) or pork belly fat`, note: `minced fine — adds richness and prevents dryness` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
                { amount: 2, unit: 'tbsp', name: `tapioca starch (bot nang)`, note: `binder — prevents crumbling` },
                { amount: 1, name: `egg white`, note: `adds lightness and binding` },
            ],
        },
        {
            title: `Northern aromatic additions`,
            items: [
                { amount: 1, name: `large bunch thi la (fresh dill)`, note: `fronds only, roughly chopped — folded into paste last` },
                { amount: 4, name: `spring onions, sliced thin`, note: `folded into paste last` },
                { amount: 3, name: `shallots, minced fine` },
            ],
        },
        {
            title: `Banana leaf wrapping`,
            items: [
                { amount: 8, name: `fresh or frozen banana leaf sections (20x20cm)`, note: `wiped clean, softened briefly over flame to make pliable` },
                { amount: 1, name: `roll kitchen twine or toothpicks`, note: `to secure parcels` },
            ],
        },
        {
            title: `Mỡ hành (spring onion oil — poured at serving)`,
            items: [
                { amount: 4, name: `spring onions, sliced thin` },
                { amount: 4, unit: 'tbsp', name: `neutral oil` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Dipping sauce`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 3, unit: 'tbsp', name: `warm water` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 400, unit: 'g', name: `fresh bun tuoi (rice vermicelli)`, note: `blanched` },
                { amount: 1, name: `head butter lettuce` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare and work the fish paste — the critical technique`,
            description: `Keep fish and fat very cold throughout — partially freeze for 20 minutes if needed. Cut fish into rough chunks. Process in a food processor for 2 minutes until a coarse paste forms. Add pork fat and continue processing 3-4 more minutes until the paste becomes sticky, slightly shiny, and pulls away from the processor bowl sides. Add fish sauce, sugar, pepper, sesame oil, tapioca starch, and egg white. Process 2 more minutes until completely combined and the paste is elastic — test by pulling a small amount between two fingers: it should stretch 3-4cm without breaking. Add minced shallots and pulse briefly to incorporate.`,
            tip: `The fish paste working time — 7-8 minutes total in a food processor — is the variable that most determines the final texture. At 4 minutes: coarse and grainy, will crumble when steamed. At 6 minutes: smoother but still not sufficiently elastic. At 8 minutes: the myosin proteins in the fish have sufficiently denatured and crosslinked to form an elastic network that holds the cake's shape after steaming. Beyond 10 minutes: over-processed, dense and rubbery. The finger-stretch test is the definitive quality check — 3-4cm stretch without breaking confirms correct elasticity.`,
        },
        {
            title: `Fold in the dill and spring onion`,
            description: `Transfer the worked fish paste to a bowl. Add chopped dill fronds and sliced spring onion. Fold gently with a spatula — do not process or over-mix. The dill and spring onion should be distributed throughout the paste but remain as identifiable pieces rather than blended into the paste itself. Over-mixing at this stage activates more myosin crosslinking and can tighten the paste beyond the desired texture. The dill pieces will be visible as green flecks in the white paste — this is the visual marker of a correctly made chả cá hấp.`,
        },
        {
            title: `Prepare the banana leaves`,
            description: `Wipe each banana leaf section with a damp cloth to remove any dust. Pass each leaf briefly over a gas flame or hot plate — 2-3 seconds per side — until it becomes pliable and slightly darker green. This heat treatment relaxes the leaf's cellular structure, making it flexible enough to fold without cracking. An unheated banana leaf is brittle and will crack when folded, breaking the sealed steam environment. Lightly oil the inner surface of each leaf — this prevents the fish paste from sticking to the leaf surface during steaming.`,
        },
        {
            title: `Wrap the parcels`,
            description: `Place approximately 80g of fish paste in the centre of each banana leaf section. Shape into a rectangle approximately 8x4cm and 1.5cm thick. Fold the banana leaf over the paste on all sides to create a sealed parcel — the paste should be completely enclosed with no gaps. Secure with kitchen twine tied twice around the parcel length and twice around the width, or with 2-3 toothpicks along each sealed edge. The parcels must be tightly sealed — any gap allows the steam environment to escape and the fish paste to dry out during cooking.`,
        },
        {
            title: `Steam 15 to 18 minutes`,
            description: `Bring water in the steamer to a vigorous boil. Arrange parcels in a single layer in the steamer basket — they can touch but not overlap. Steam covered for 15-18 minutes. The fish cake is done when the parcel feels firm when pressed through the banana leaf — the paste has set from soft to firm throughout. Do not over-steam: beyond 20 minutes the paste becomes rubbery and the dill loses its vibrant colour, turning from bright green to olive-drab. Remove and rest 3 minutes before serving — the cake continues to firm slightly from residual heat.`,
        },
        {
            title: `Make the mỡ hành and serve`,
            description: `Place sliced spring onions and salt in a bowl. Heat oil until shimmering. Pour over spring onions. Bring parcels to the table unopened. Open at the table by cutting the twine and unfolding the banana leaf — the burst of dill and banana leaf fragrance as each parcel opens is the dish's aromatic announcement. Spoon mỡ hành generously over each cake. Serve with bún, lettuce, cucumber, and dipping sauce. To eat: slice the cake crosswise into 2cm rounds — the cross-section should show the white fish cake with green dill flecks distributed throughout. Wrap in lettuce with bún and herbs. Dip in nuoc cham.`,
            tip: `Chả cá hấp lá chuối is the preparation that reveals whether a northern cook understands the difference between the dill's role in this dish versus in bún cá or cháo cá. In those soups, the dill is added last-second and wilts in the hot broth, releasing its volatile oils into the liquid. In chả cá hấp, the dill is enclosed within the banana leaf parcel and steams with the fish paste — its oils infuse the fish cake from within during the 15-18 minute cooking, producing a dill flavour that is simultaneously more integrated and more persistent than a surface application.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}