'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-lam-e-de',
    title: `Highland Bamboo Tube Sticky Rice`,
    subtitle: `Cơm Lam — Glutinous rice cooked inside fresh bamboo tubes over fire — the Ê Đê, Ba Na, and Tày highland preparation that transforms rice through bamboo steam and wood smoke.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cơm lam is the bamboo tube rice that the highland ethnic communities of Vietnam — the Ê Đê, Ba Na, Tày, Nùng, H'Mông, and others — have cooked over open fires for generations: glutinous rice soaked in water, packed into freshly cut green bamboo tubes, and propped at an angle over a wood fire until the bamboo chars on the outside and the rice inside steams in the bamboo's own moisture, absorbing the tube's faint grassy-sweet fragrance and the wood smoke simultaneously.\n\nThe bamboo tube is not merely a cooking vessel but an active ingredient. Fresh green bamboo (specifically young sections cut before the bamboo has fully lignified) contains 60-70% water in its cellular structure — when the tube is placed over fire, this water converts to steam inside the sealed cavity and cooks the rice by steam pressure rather than direct heat. Simultaneously, the bamboo's inner lining (the tabasheer layer, a thin silica-rich membrane) releases its characteristic faint sweetness into the steam environment. And the bamboo's outer green tissue chars progressively over the fire, releasing the volatile compounds of pyrolysis — the same process that gives charcoal-grilled food its characteristic smoky character — which permeate inward through the steam environment and season the rice with a faint smokiness that is specifically of burning bamboo: lighter, greener, and more aromatic than the smoke of hardwood charcoal.\n\nThe result is a rice preparation whose flavour cannot be achieved by any other method — not by cooking rice in a pot with bamboo leaves, not by adding bamboo shoot extract to the cooking water, not by smoking cooked rice over bamboo chips. The fresh bamboo tube in its entirety — the moisture, the tabasheer, the charring outer tissue — produces a combination of steam-cooking and smoke-infusion that is the dish's irreducible essence. When the charred tube is split open at the table, releasing the steam and the smell of the bamboo and the rice simultaneously, the eating experience begins before the first bite.`,
    ingredientSections: [
        {
            title: `Rice`,
            items: [
                { amount: 400, unit: 'g', name: `glutinous rice (gao nep)`, note: `soaked 4-6 hours or overnight — the soaking water is used for filling the tubes` },
                { amount: 0.5, unit: 'tsp', name: `salt`, note: `dissolved in the soaking water` },
            ],
        },
        {
            title: `Bamboo tubes`,
            items: [
                { amount: 4, name: `fresh green bamboo tubes (ong tre tuoi)`, note: `30-35cm long sections, 5-6cm diameter — one node at the closed end, open at the top; cut from young bamboo (1-2 year old growth); substitute: see step 1 for German alternatives` },
            ],
        },
        {
            title: `Optional fillings (regional variations)`,
            items: [
                { amount: 100, unit: 'ml', name: `fresh coconut milk (nuoc cot dua)`, note: `added to the rice before packing — southern highland version` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `mixed with coconut milk` },
                { amount: 2, unit: 'tbsp', name: `black sesame seeds (me den)`, note: `mixed into rice — Tày version` },
            ],
        },
        {
            title: `Muối vừng (sesame salt — classic accompaniment)`,
            items: [
                { amount: 4, unit: 'tbsp', name: `white sesame seeds (me trang)`, note: `dry-toasted golden` },
                { amount: 1.5, unit: 'tsp', name: `coarse salt` },
                { amount: 1, unit: 'tsp', name: `sugar` },
            ],
        },
        {
            title: `Accompaniments`,
            items: [
                { amount: 200, unit: 'g', name: `grilled pork or chicken`, note: `grilled alongside the bamboo tubes over the same fire` },
                { amount: 1, unit: 'tbsp', name: `hat doi dipping salt`, note: `the highland spice pairing for cơm lam` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Source bamboo tubes — and the German substitute`,
            description: `Fresh green bamboo tubes are the irreplaceable vessel for authentic cơm lam — their moisture content is the steam source, their tabasheer lining is the flavour contributor, and their charring outer tissue is the smoke source. In Germany, bamboo is grown as an ornamental plant — Phyllostachys varieties (particularly Phyllostachys edulis, the moso bamboo) are available at garden centres (Gartencenter) and grow vigorously in German gardens. A thick-walled Phyllostachys bamboo section of 5-6cm diameter can be used as a cơm lam vessel — cut a 30-35cm section including one node (which forms the closed bottom). If bamboo is unavailable: wrap soaked rice tightly in 3-4 layers of banana leaf sealed with toothpicks and cook over the fire — the banana leaf produces a different but related aromatic, and the preparation is called bánh lam in some communities.`,
            tip: `The bamboo species matters for authentic cơm lam flavour. The Phyllostachys species available in German gardens have a slightly different volatile oil profile from the tropical bamboo species (primarily Bambusa and Dendrocalamus) used in Vietnamese highlands — the German bamboo's charring produces more of a northern temperate forest character and slightly less of the tropical green-sweet note. The flavour difference is real but small — the cooking mechanism (steam from bamboo moisture + bamboo char smoke) is identical and the result is recognisable as cơm lam even with the botanical substitution.`,
        },
        {
            title: `Prepare the bamboo tubes`,
            description: `Cut bamboo sections 30-35cm long, ensuring one closed node at the bottom. The node is the natural sealed end that holds the rice and water inside the tube. Rinse the interior of each tube thoroughly with cold water — fresh bamboo sometimes contains insect debris or fine bamboo fibres. Do not oil the interior — the natural bamboo surface releases the rice cleanly after cooking because the starch gelatinisation creates a slight gap between the rice cylinder and the bamboo wall as the rice cooks and contracts slightly on cooling.`,
        },
        {
            title: `Pack the tubes`,
            description: `Drain the soaked glutinous rice — reserve the salted soaking water. Fill each bamboo tube approximately two-thirds full with soaked rice — pack gently, not compressed. Pour the reserved soaking water into the tube until the water level is 2cm above the rice surface. If using coconut milk version: replace half the soaking water with coconut milk — the fat in the coconut milk prevents the rice from sticking to the bamboo interior and adds richness. If using black sesame version: mix sesame through the rice before packing. Plug the open end of each tube loosely with a piece of banana leaf or a folded piece of foil — loose enough to allow steam to escape but tight enough to prevent the water from sloshing out when the tube is tilted.`,
            tip: `The two-thirds rice to one-third headspace ratio is the cơm lam packing rule that prevents both undercooking and the tube splitting. Glutinous rice expands approximately 50% in volume when fully cooked — a tube packed more than two-thirds full will have the expanded rice create pressure that can split the bamboo along its natural grain lines. A tube packed less than half full produces rice that is cooked unevenly, with the top portion drying out before the bottom portion is done.`,
        },
        {
            title: `Cook over fire — 45 to 60 minutes`,
            description: `Build a wood fire or use charcoal in a grill. Prop the bamboo tubes at a 45-degree angle over the fire — leaning toward but not directly in the flames. The angled position keeps the water-rice mixture at the bottom of the tube (near the closed node) while the open top allows steam to escape. Rotate the tubes 90 degrees every 10-12 minutes to char the exterior evenly. The progression: first 15 minutes — the bamboo exterior remains green; 15-30 minutes — the bamboo begins to char to yellow-brown; 30-45 minutes — the exterior is deeply charred black-brown and the interior steam is cooking the rice; 45-60 minutes — the rice is fully cooked, the tube is uniformly charred. The tube is done when a skewer inserted into the rice through the open top meets no resistance.`,
            tip: `The 45-degree angle is the specific positioning that makes cơm lam work. Vertical positioning (tube standing upright) concentrates all the rice and water at the bottom, producing unevenly cooked rice — overcooked at the bottom, undercooked at the top. Horizontal positioning causes the water to run toward the open end and spill. The 45-degree angle keeps the water in contact with all the rice while the tube's natural convection currents circulate the steam throughout the interior. Highland communities lean the tubes against stones or forked sticks at this angle — a technique refined over generations of cooking.`,
        },
        {
            title: `Open at the table — the split-and-peel moment`,
            description: `Allow cooked tubes to cool 5 minutes — they are extremely hot. Using a cleaver or heavy knife, split each tube lengthwise in a single firm stroke. The charred exterior splits cleanly along the bamboo grain. Peel back the two halves of the charred tube to reveal the rice cylinder inside — it should be intact, slightly golden from the bamboo contact, and smell simultaneously of cooked glutinous rice, bamboo steam, and wood smoke. The inner surface of the bamboo will be coated with a thin layer of gelatinised rice starch — this is the tabasheer's contribution and is the most flavourful surface of the entire rice cylinder. Slice the rice cylinder crosswise into rounds and serve immediately.`,
        },
        {
            title: `Serve the highland way`,
            description: `Serve cơm lam rounds with muối vừng (sesame salt) for dipping, hạt dổi dipping salt for the highland spice pairing, grilled pork or chicken cooked alongside, and lime. In the highland villages of Đắk Lắk, Gia Lai, and Kon Tum, cơm lam is the festival food eaten during the harvest celebration — the bamboo tubes are cooked in a communal fire around which the entire village gathers, the sharing of the opened tubes a communal act that connects the eating to the fire, the harvest, and the community simultaneously. Each round of rice, sliced from the bamboo cylinder and dipped in sesame salt, carries the flavour of all three elements of its cooking — the bamboo's steam, the bamboo's smoke, and the bamboo's tabasheer sweetness — in a preparation whose apparent simplicity conceals a sophisticated cooking mechanism refined over centuries of highland food culture.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}