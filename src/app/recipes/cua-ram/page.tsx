'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cua-ram',
    title: 'Cua Ram (Vietnamese Caramelized Crab)',
    subtitle: 'Small whole crabs fried until the shells are crispy then tossed in a hot caramel of fish sauce, garlic, and chili — eaten whole, shell and all, with cold beer. The coastal Vietnamese dish that demonstrates how to make the most of a small crab.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/cua-ram.jpg',
    intro: `Cua ram is what Vietnamese coastal cooks do with small crabs — the kind that are too small to justify the effort of cracking open for the meat inside but too good to discard. The technique is the same one applied to tôm rim (caramelized shrimp) and m?c chiên m?m (fish sauce squid): fry the seafood until the shell is crispy and partially edible, then toss in a fish sauce caramel that lacquers the surface. With small crabs (under 8cm carapace width), the shell becomes thin and crispy enough through deep-frying to be eaten entirely — legs, claws, body shell and all. The meat inside has already absorbed the frying heat and the caramel penetrates through the thin shell into the flesh. Cua ram is associated specifically with coastal central Vietnam — Ðà N?ng, H?i An, and the beach towns of the central coast — where small rock crabs and mud crabs are caught in quantity and sold cheaply at morning markets. It is beer food in its purest form: messy, aromatic, eaten with fingers at a plastic table while the sea breeze comes in.`,
    ingredientSections: [
        {
            title: 'Crabs',
            items: [
                { amount: 800, unit: 'g', name: 'small whole crabs (cua nh?)', note: 'carapace width 5-8cm. Small rock crabs, small mud crabs, or blue crabs. Must be small enough that the shell becomes edible when fried. Large crabs do not work for this dish.' },
                { amount: 500, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
        {
            title: 'Fish sauce caramel',
            items: [
                { amount: 3, unit: 'tbsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'water' },
                { amount: 6, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'sliced — cua ram should be noticeably spicy' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'coarsely ground' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 1, name: 'bunch cilantro' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'extra fresh chili, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean and prepare the crabs',
            description: 'If using live crabs, place in the freezer for 15 minutes to sedate. Rinse under cold water. Remove the top shell (carapace) if larger than 6cm — for very small crabs under 5cm, leave the top shell on. Remove the gills (the grey feathery organs on both sides of the body — not edible). Rinse again. Pat completely dry. Optionally cut each crab in half through the body for slightly faster cooking — leave small crabs whole.',
            tip: 'Dry the crabs thoroughly before frying. Wet crab shells cause violent oil splatter. Pat dry, then let air-dry on a rack for 5 minutes before frying.',
        },
        {
            title: 'Deep-fry until shells are crispy',
            description: 'Heat oil to 180°C. Fry the crabs in batches — do not crowd. Fry for 5-7 minutes for crabs under 6cm, 7-9 minutes for larger. The crabs are ready when the shells are bright orange-red, feel light and crispy when you tap them with a spoon, and the legs are brittle. The shell must be fully crispy — this is what makes them edible. Drain on paper towels.',
            tip: 'The frying time is what makes the shells edible. Under-fried shells are tough and spiky; properly fried small crab shells crack and crunch like a thin cracker. When in doubt, fry longer.',
        },
        {
            title: 'Make the fish sauce caramel',
            description: 'Heat oil in a wok over medium heat. Fry sliced garlic until golden and just crispy — 2-3 minutes. Remove and set aside. Add sugar to the oil. Caramelize to deep amber without stirring. Add fish sauce and water — it will spit aggressively. Stir until combined. Add black pepper. The glaze should be dark, glossy, and smell intensely of caramelized fish sauce.',
            tip: 'The garlic must be removed before making the caramel — it burns in the caramelizing sugar. Fry separately and add back at the end with the chili.',
        },
        {
            title: 'Toss crabs in the caramel',
            description: 'Add the hot fried crabs to the wok with the caramel. Toss rapidly and constantly for 60-90 seconds — every surface of every crab should be coated. Add the sliced chili and reserved fried garlic in the last 15 seconds. The caramel should be visibly coating the shell surface and beginning to caramelize further from the residual heat of the crabs.',
            tip: 'Work fast — the caramel thickens quickly as it cools. If it sets before all the crabs are coated, add a splash of water and 10 seconds over heat to loosen.',
        },
        {
            title: 'Serve immediately — fingers required',
            description: 'Transfer to a large plate. Scatter spring onion, cilantro, and extra chili. Serve with lime wedges. Cua ram is eaten with fingers — pick up a crab, bite through the thin shell, eat the entire thing. The shell of properly fried small crabs crunches cleanly and tastes of the caramel glaze. The meat inside is sweet, hot, and lacquered with the sauce. Suck every fragment clean. Serve with cold beer — this is non-negotiable.',
            tip: 'Provide finger bowls of warm water with a slice of lime for cleaning hands. Cua ram is one of the messiest Vietnamese dishes and one of the most enjoyable. The mess is part of the experience.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
