'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-hap-bia',
    title: 'Tôm H?p Bia (Beer-Steamed Shrimp)',
    subtitle: 'Live or very fresh shrimp steamed over Vietnamese beer with lemongrass and ginger until just pink — eaten whole, shell and all, with mu?i tiêu chanh. The simplest and most satisfying way to eat fresh shrimp in Vietnam.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/tom-hap-bia.jpg',
    intro: `Tôm h?p bia is the Vietnamese coastal dish that requires the least technique and the best ingredient. Beer, lemongrass, ginger, and the freshest shrimp available — that is the complete list. The beer produces steam that is slightly more aromatic than water, the lemongrass adds a citrus perfume, and the shrimp cook in 4-5 minutes to a sweetness that no other method replicates. The shells are eaten with the shrimp in the Vietnamese style — the shell adds flavor and a slight crunch, and the head, when present, contains the most concentrated shrimp flavor of all. The dipping sauce is the salt-pepper-lime mixture (mu?i tiêu chanh) that appears throughout Vietnamese coastal cooking: simple, direct, and precisely calibrated to the sweetness of fresh shrimp. Tôm h?p bia is beach food, market food, late-night food. It is what you order at a seafood restaurant in Nha Trang or Phú Qu?c when the shrimp are good and you want to taste exactly what they are.`,
    ingredientSections: [
        {
            title: 'Shrimp',
            items: [
                { amount: 800, unit: 'g', name: 'fresh shrimp, whole (tôm tuoi)', note: 'heads on, shells on — live if possible. Size: medium to large (16-20 count per 500g). Freshness is the only variable that matters.' },
            ],
        },
        {
            title: 'Steaming bath',
            items: [
                { amount: 330, unit: 'ml', name: 'Vietnamese beer', note: 'Saigon, Tiger, or Hanoi. Any light lager. Dark beer is too heavy.' },
                { amount: 150, unit: 'ml', name: 'water' },
                { amount: 3, name: 'lemongrass stalks', note: 'bruised and roughly cut' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3-4 slices, smashed' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Mu?i tiêu chanh (salt-pepper-lime)',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'flaky sea salt or coarse salt' },
                { amount: 1.5, unit: 'tsp', name: 'freshly ground black pepper', note: 'coarse — the pepper is a flavor, not just seasoning' },
                { amount: 3, name: 'limes', note: 'squeezed fresh at the table — one lime per 2 diners' },
                { amount: 1, unit: 'tsp', name: 'sugar', note: 'optional — Vietnamese coastal style sometimes adds a pinch' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 1, name: 'bunch fresh herbs', note: 'Vietnamese coriander (rau ram) preferred' },
                { amount: 2, name: 'extra limes' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the shrimp — minimal intervention',
            description: 'Rinse the shrimp under cold water. That is all. Do not peel, do not devein, do not remove the heads. The shell protects the flesh during steaming and adds flavor to the steam. The head contains the hepatopancreas — the most intensely flavored part of the shrimp. Removing any of these before steaming wastes flavor.',
            tip: 'The only preparation: use scissors to trim the sharp rostrum (the pointed spike on the head) if it is very long — it can puncture other shrimp during cooking and make the plate look messy.',
        },
        {
            title: 'Build the aromatic beer bath',
            description: 'Combine beer, water, bruised lemongrass, and smashed ginger in the steamer base. Add a teaspoon of salt directly to the liquid — this seasons the steam slightly. Bring to a full rolling boil over high heat. The beer will foam as it heats. The steam should smell strongly of lemongrass before adding the shrimp.',
            tip: 'Use the beer at room temperature, not cold from the refrigerator. Cold beer drops the temperature of the bath and slows the initial steam generation.',
        },
        {
            title: 'Steam in a single layer',
            description: 'Arrange the shrimp in a single layer on the steaming rack — not piled on top of each other. If you have more shrimp than fit in a single layer, steam in two batches. A single layer ensures every shrimp cooks at the same rate. Cover with a tight lid and steam over high heat.',
            tip: 'Single layer is critical. Shrimp piled two or three deep means the bottom shrimp overcook before the top ones are done.',
        },
        {
            title: 'Time precisely — 4 to 5 minutes',
            description: 'Steam medium shrimp (16-20 count) for exactly 4-5 minutes from when the steam resumes full force after placing the shrimp. Large shrimp (10-15 count) need 5-6 minutes. The shrimp are done when: the shells are bright orange-red throughout, the flesh is opaque white (not translucent), and the shrimp have curled into a loose C-shape — not a tight O (overcooked).',
            tip: 'A tight O-curl means overcooked — the proteins have contracted fully. A loose C-curl means correctly cooked. Remove at the first sign of C-curl formation.',
        },
        {
            title: 'Make the dipping salt',
            description: 'While the shrimp steam, prepare individual dipping plates: pile salt and coarsely ground black pepper on each small plate. Leave the lime uncut until the moment of eating. The ritual: squeeze the lime directly over the salt-pepper mixture at the table — the lime juice activates the pepper, dissolves the salt slightly, and the citrus oil from the skin perfumes the mixture.',
            tip: 'Never pre-mix the mu?i tiêu chanh into a sauce. The separate elements — dry salt, dry pepper, wet lime — create a different experience from a pre-mixed dip. The contrast between the dry and wet is part of the technique.',
        },
        {
            title: 'Serve immediately and eat with the shell',
            description: 'Transfer the steamed shrimp to a serving plate the moment they are done — residual heat continues cooking them on the plate. Scatter sliced chili and fresh herbs. How to eat: pick up a shrimp, bite through the shell and all. The shell of properly cooked fresh shrimp is thin and adds crunch without being tough. Suck the head — it contains the most flavor. Dip in the salt-pepper-lime between each shrimp. Eat standing up if possible: this is not a formal dish.',
            tip: 'If the shells are too tough to bite through comfortably, the shrimp were not fresh enough — fresh shrimp shells are thin and tender. This is the most honest freshness test in Vietnamese seafood cooking.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
