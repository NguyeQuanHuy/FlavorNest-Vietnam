'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trung-hap-thit-bam',
    title: 'Tr?ng H?p Th?t Bam (Steamed Egg with Minced Pork)',
    subtitle: 'Eggs beaten with minced pork, wood ear mushrooms, glass noodles, and spring onion then steamed until silky and just set — the northern Vietnamese family dish that appears on weekday dinner tables from Hà N?i to Vinh, eaten over plain rice with the natural cooking juices spooned over.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/trung-hap-thit-bam.jpg',
    intro: `Tr?ng h?p th?t bam is the steamed egg and minced pork dish that sits at the center of the northern Vietnamese family meal — a preparation so straightforward that it appears on weeknight dinner tables without ceremony and yet so specifically satisfying that it is one of the dishes that Vietnamese people living abroad most consistently describe when they describe the food they miss. The dish is structurally simple: eggs beaten with a small amount of water or stock to lighten them, combined with minced pork, soaked glass noodles cut short, soaked and sliced wood ear mushrooms, spring onion, fish sauce, and a small amount of sugar, then poured into a heatproof bowl and steamed until the egg sets around the pork and the surface is smooth, slightly golden, and yielding when pressed. The steaming rather than frying or baking produces the specific texture that defines the dish: the egg does not form a firm, rubbery mass as it would fried, nor does it dry at the surface as it would baked — instead it sets slowly from the steam heat into something between a silky custard and a soft omelette, with the pork suspended throughout in individual pieces rather than in a dense mass. The wood ear mushrooms (m?c nhi) provide the specific crunchy texture that appears throughout Vietnamese dishes requiring textural contrast — their firm, slightly gelatinous bite against the soft egg is one of the most characteristic textural combinations in the northern Vietnamese home cooking repertoire. Tr?ng h?p th?t bam is eaten spooned from the communal bowl onto individual rice bowls, with the natural juices that have pooled in the steaming bowl drizzled over the rice. These juices — a combination of the pork fat that has rendered during steaming, the egg liquid that has concentrated, and the fish sauce seasoning — are the most flavorful element of the preparation and should not be poured away.`,
    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 4, name: 'large eggs' },
                { amount: 200, unit: 'g', name: 'minced pork (th?t heo bam)', note: 'medium fat — not lean, which produces a dry result. 20% fat content is ideal.' },
                { amount: 20, unit: 'g', name: 'dried wood ear mushrooms (m?c nhi)', note: 'soaked in warm water 20 minutes, drained, stems removed, finely sliced' },
                { amount: 15, unit: 'g', name: 'dried glass noodles (mi?n)', note: 'soaked in water 10 minutes, drained, cut into 3cm lengths' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced — white and green parts separated' },
                { amount: 2, name: 'shallots', note: 'minced' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 3, unit: 'tbsp', name: 'warm water or light stock', note: 'beaten into the eggs — lightens the texture' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'added at the end' },
            ],
        },
        {
            title: 'Topping',
            items: [
                { amount: 2, name: 'spring onions', note: 'green parts, sliced — scattered over after steaming' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground over the finished dish' },
                { amount: 1, unit: 'tsp', name: 'shallot-infused oil', note: 'drizzled over the surface' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice', note: 'plain, hot' },
                { amount: 1, name: 'cucumber, sliced', note: 'for freshness alongside' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'additional — for dipping or drizzling' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the pork and soaked ingredients',
            description: 'Season the minced pork with half the fish sauce, half the sugar, half the pepper, and the minced shallots. Mix thoroughly. Combine with the soaked and sliced wood ear mushrooms, the soaked and cut glass noodles, and the white parts of the spring onion. Mix again until evenly distributed. The mixture should feel cohesive — the pork binding loosely with the mushrooms and noodles.',
            tip: 'Seasoning the pork before combining with the eggs — rather than seasoning the whole mixture at once — ensures the pork is properly flavored throughout. Pork mixed directly into seasoned egg can result in under-seasoned pork pieces surrounded by a well-seasoned egg matrix.',
        },
        {
            title: 'Beat the eggs with water',
            description: 'Crack the eggs into a bowl. Add warm water or light stock, remaining fish sauce, sugar, salt, and pepper. Beat until the yolks and whites are fully combined and the mixture is uniform — not frothy, but smooth. The warm water is specifically used rather than cold: it helps the eggs and water combine more evenly and produces a silkier steamed texture than cold water.',
            tip: 'The warm water beaten into the eggs is the technique that produces the silky, slightly loose texture of tr?ng h?p th?t bam rather than a dense, firm steamed egg. The water ratio — 3 tablespoons per 4 eggs — is calibrated for this texture. More water produces a looser, almost custard-like result; less produces a firmer, more omelette-like result.',
        },
        {
            title: 'Combine and pour into the steaming bowl',
            description: 'Add the seasoned pork-mushroom-noodle mixture to the beaten eggs. Stir to combine — the pork should be distributed throughout the egg mixture rather than clumped. Pour into a heatproof ceramic or glass bowl that will fit inside your steamer with some clearance. The mixture should fill the bowl no more than two-thirds — the egg expands during steaming. Skim any foam from the surface with a spoon.',
            tip: 'Skimming the foam from the surface of the egg mixture before steaming produces a smooth, flat top on the finished dish — aesthetically important for a dish that is served from the bowl directly at the table. A foamy surface produces a pitted, uneven top that is less visually appealing.',
        },
        {
            title: 'Steam at medium heat — 20-22 minutes',
            description: 'Place the bowl in the steamer over boiling water. Critically: reduce the heat to medium before adding the bowl — the steam must be gentle, not vigorous. Cover with a lid that has a small gap (or place a chopstick under the lid) to allow some steam to escape. Steam for 20-22 minutes. The egg is done when the center is just set — a gentle shake of the bowl shows the center moving very slightly but not liquid. The surface should be smooth and lightly golden at the edges.',
            tip: 'The medium heat and slightly vented lid are the two techniques that produce the smooth, silky surface of correctly steamed egg. High heat produces bubbles that rise through the egg mixture and leave pitted holes in the surface. A fully sealed lid traps water droplets that drip onto the egg surface and leave craters. Medium heat plus slight venting produces the flawless smooth surface.',
        },
        {
            title: 'Finish and serve from the bowl',
            description: 'Drizzle sesame oil over the surface. Scatter the green spring onion tops and freshly ground black pepper. Drizzle shallot-infused oil. Bring the bowl directly to the table. To serve: use a spoon to portion onto individual rice bowls, making sure to include the natural juices pooled around the edges and beneath the egg. These juices — pork fat, egg liquid, and concentrated fish sauce — spooned over the rice are the most flavorful element of the meal.',
            tip: 'The natural cooking juices beneath and around the steamed egg are not a byproduct — they are a deliberate element of tr?ng h?p th?t bam that should be distributed to every diner. Spooning these juices over plain rice and eating them before the egg itself is the correct sequence: it seasons the rice for the egg that follows.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
