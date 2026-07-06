'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ghe-hap-sa-mam-nhi',
    title: 'Ghẹ Hấp Sả Mắm Nhĩ (Phú Yên Flower Crab Steamed with Lemongrass)',
    subtitle: 'Live flower crabs from the Phú Yên coast steamed over lemongrass, ginger, and beer — served with a dipping sauce of mắm nhĩ thinned with lime juice and fresh ginger that is specific to the central coast and transforms the sweet crab into something extraordinary.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ghe-hap-sa-mam-nhi.jpg',
    intro: `Ghẹ hấp sả mắm nhĩ is the Phú Yên preparation that best demonstrates the province's cooking philosophy: use the finest local ingredient (ghẹ — flower crab, Portunus pelagicus, caught in the waters between Phú Yên and the Trường Sa islands), apply the simplest technique (steaming over lemongrass and ginger), and pair it with the dipping sauce that only this province produces (mắm nhĩ — the first-press fish sauce of the Phú Yên coast). The flower crab is the most commonly eaten crab on the central Vietnamese coast — smaller than mud crab, with a spotted blue and white carapace that gives it its name, and flesh that is sweeter and more delicate than mud crab but less abundant per crab. The steaming preparation preserves all of that sweetness: the aromatics perfume the steam, the steam perfumes the flesh, and the flesh arrives at the table tasting entirely of the sea it came from plus the specific citrus-lemongrass character of the steam. The mắm nhĩ dipping sauce is not the standard nước chấm of everywhere else. It is the premium first-press fish sauce thinned with fresh lime juice, fresh ginger grated to almost a paste, and a small amount of sugar — creating a sauce that is simultaneously more complex and more focused than fish sauce-based nước chấm. The mắm nhĩ depth, the lime brightness, the ginger heat, and the sweet crab flesh together constitute the flavor experience that Phú Yên people miss most when they leave the coast.`,
    ingredientSections: [
        {
            title: 'Crabs',
            items: [
                { amount: 1.2, unit: 'kg', name: 'live flower crabs (ghẹ / blue swimmer crabs)', note: '3-4 crabs at 300-400g each. Live is essential. Phú Yên flower crabs are specific; blue swimmer crabs (Portunus pelagicus) available elsewhere are the same species.' },
            ],
        },
        {
            title: 'Steaming bath',
            items: [
                { amount: 330, unit: 'ml', name: 'Vietnamese beer (Saigon, 333, or Tiger)', note: 'one can — the beer steam is the Phú Yên coastal method' },
                { amount: 300, unit: 'ml', name: 'water' },
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and cut into pieces' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 4, name: 'kaffir lime leaves', note: 'torn' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Mắm nhĩ ginger dipping sauce — the Phú Yên preparation',
            items: [
                { amount: 4, unit: 'tbsp', name: 'mắm nhĩ (Phú Yên first-press fish sauce)', note: 'Sông Cầu or Tuy Hòa mắm nhĩ specifically. Substitute with the highest quality Vietnamese fish sauce available.' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice', note: 'about 2 limes — squeezed at the moment of making' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'grated on the finest available grater until almost a paste — not julienned, not sliced, grated to release maximum oil' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'warm water', note: 'to thin slightly' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced — optional, some Phú Yên versions exclude chili to let the mắm nhĩ character stand alone' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)', note: 'eaten between crabs' },
                { amount: 4, name: 'kaffir lime leaves, extra', note: 'finely shredded — scattered over the finished crabs' },
                { amount: 2, name: 'limes, extra wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 1, name: 'bowl warm water with lime slice', note: 'finger bowl' },
            ],
        },
    ],
    steps: [
        {
            title: 'Sedate and prepare the crabs',
            description: 'Place the live flower crabs in the freezer for 15 minutes. Rinse under cold water, scrubbing the shell with a brush. Flower crabs do not need to be cleaned before steaming — the whole crab goes in. Remove rubber bands if present. Place belly-side up in the steamer — this position retains the roe in the shell cavity during steaming, which is the most flavorful part of the flower crab.',
            tip: 'Flower crabs have thinner, lighter shells than mud crabs and cook faster. The 15-minute freezer sedation is sufficient — longer and the flesh begins to lose moisture before it even hits the steamer.',
        },
        {
            title: 'Build the beer-lemongrass steaming bath',
            description: 'Combine beer, water, bruised lemongrass, smashed ginger, torn kaffir lime leaves, and salt in the steamer base. Bring to a vigorous, full rolling boil. The steam must be strong and fragrant — clearly smelling of lemongrass — before the crabs go in. The flower crab steams quickly and needs the full force of the steam from the first minute.',
            tip: 'For flower crabs specifically, the steaming bath must be at maximum boil before the crabs go in — not just simmering. Flower crabs are more delicate than mud crabs and benefit from the intense initial steam that cooks them quickly rather than a gradual temperature rise.',
        },
        {
            title: 'Steam for exactly 8-10 minutes',
            description: 'Place the crabs belly-side up on the steaming rack. Cover tightly. Steam over high heat: 300g crabs — 8 minutes. 400g crabs — 10 minutes. Do not open the lid. The crabs are done when the shells have turned from muted blue-white to brilliant orange throughout — no grey or blue patches remaining — and the leg joints show completely white, opaque flesh when one leg is pulled.',
            tip: 'Flower crabs cook faster than mud crabs of the same weight because their shells are thinner and their flesh is more delicate. The 8-10 minute window is strict — over-steamed flower crab loses the specific sweetness and becomes stringy. Set a timer and pull immediately.',
        },
        {
            title: 'Make the mắm nhĩ ginger sauce — the defining preparation',
            description: 'Grate the ginger on the finest available grater — microplane if you have one — until it is almost liquid paste. This releases the full volatile oil content of the ginger rather than producing the fiber texture of grated ginger. Combine mắm nhĩ, fresh lime juice, grated ginger paste, sugar, and warm water. Stir to combine. Add minced chili if using. Taste: the sauce should taste immediately of the mắm nhĩ depth, then the lime brightness, then the ginger heat as a finishing note. The three flavors should arrive in sequence, not simultaneously.',
            tip: 'Microplane-grated ginger in the mắm nhĩ sauce produces the ginger-forward character that distinguishes this sauce from a standard ginger-fish sauce dip. The near-liquid paste distributes through the sauce completely and produces ginger heat in every spoonful rather than in isolated pieces.',
        },
        {
            title: 'Plate and scatter aromatics',
            description: 'Transfer the steamed crabs to a large plate or serve directly from the steamer rack. Scatter finely shredded kaffir lime leaves over the hot crabs — they wilt slightly from the residual heat and release their citrus fragrance. Add rau răm and sliced chili. Serve the mắm nhĩ ginger sauce in individual small bowls alongside.',
            tip: 'The shredded kaffir lime leaves scattered over the hot crabs is the visual and aromatic finishing element specific to Phú Yên coastal seafood. The leaves release their fragrant oils from the heat of the crabs below and add a citrus fragrance that bridges the lemongrass steam and the ginger-mắm nhĩ dipping sauce.',
        },
        {
            title: 'How to eat ghẹ — the Phú Yên way',
            description: 'Open each flower crab: lift the apron (the triangular flap on the underside), then remove the top shell by pressing the back and lifting from the front. Scoop the roe and crab butter first from the top shell — these go directly into the mắm nhĩ sauce, which transforms it into something even richer. Remove the gills. Break the body in half. Eat the body meat dipped in the mắm nhĩ sauce. Crack the claws with a spoon. Eat with rau răm between pieces.',
            tip: 'Adding the crab roe and butter from the top shell directly into the individual mắm nhĩ dipping bowl is the Phú Yên coastal practice — it enriches the sauce into something extraordinary. The mắm nhĩ with dissolved crab roe is the best dipping sauce in Vietnamese seafood cooking.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
