'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-chien-mam',
    title: 'Mực Chiên Mắm (Crispy Squid in Fish Sauce Caramel)',
    subtitle: 'Squid rings coated in seasoned batter and fried until shatteringly crisp, then tossed in a hot caramel of fish sauce, sugar, and garlic that coats every piece in a sticky, intensely savory glaze. The squid dish that disappears from the plate before it reaches the table.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/muc-chien-mam.jpg',
    intro: `Mực chiên mắm is the Vietnamese squid preparation that most clearly shows the influence of the fish sauce caramel technique — the same method used in gà chiên nước mắm, applied to squid with results that are, if anything, even more spectacular. The squid is first fried in a light rice flour batter that produces an extremely crispy exterior, then immediately tossed in a hot fish sauce caramel that clings to the crust and caramelizes further from the residual heat of the freshly fried squid. The timing of this tossing — the squid must be hot when it hits the glaze — is everything. Cold fried squid absorbs the glaze instead of being coated by it, producing a soggy result. Hot squid coated in hot glaze produces a lacquered surface that stays crisp for several minutes. Mực chiên mắm is beer food, shared-plate food, the dish that a Vietnamese restaurant table orders first and finishes before the mains arrive. The fish sauce caramel takes 4 minutes to make. The squid fries in 3. The entire dish is done in under 40 minutes, most of which is preparation.`,
    ingredientSections: [
        {
            title: 'Squid and batter',
            items: [
                { amount: 600, unit: 'g', name: 'fresh squid (mực)', note: 'cleaned and cut into rings 1.5cm wide, tentacles kept whole. Medium squid (15-18cm body) is ideal.' },
                { amount: 80, unit: 'g', name: 'rice flour (bột gạo)', note: 'produces crispier result than wheat flour' },
                { amount: 30, unit: 'g', name: 'cornstarch (bột bắp)', note: 'mixed with rice flour — the combination is the crispiest coating possible' },
                { amount: 0.5, unit: 'tsp', name: 'baking powder', note: 'creates air pockets in the crust' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 500, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
        {
            title: 'Fish sauce caramel glaze',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'water' },
                { amount: 6, name: 'garlic cloves', note: 'thinly sliced — fried until golden in the glaze' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for the glaze pan' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'sliced — added at the end' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 1, name: 'lime, cut in wedges' },
                { amount: 1, name: 'fresh red chili, extra slices' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean and prepare the squid',
            description: 'Pull the head and tentacles from the body — the innards come with it. Remove the clear quill from inside the body. Peel the purple skin from the body under cold running water. Rinse the body cavity. Cut tentacles just above the eyes, discard the head. Slice the body into rings 1.5cm wide. Pat every piece completely dry with paper towels — excess moisture causes dangerous oil splatter and prevents the batter from adhering.',
            tip: 'Dry the squid twice — once after cleaning, once after cutting. Surface moisture is the enemy of crispy batter. The squid should feel dry to the touch before coating.',
        },
        {
            title: 'Make the dry coating',
            description: 'Combine rice flour, cornstarch, baking powder, salt, and white pepper in a wide shallow bowl. This is a dry coating — no liquid, no egg. Toss the dried squid rings and tentacles in the flour mixture until every piece is evenly coated in a thin layer. Shake off the excess — the coating should be light, not thick.',
            tip: 'Dry coating (flour only, no batter) is the Vietnamese technique for maximum crispiness. A wet batter coating produces a thicker crust that absorbs the glaze rather than being coated by it.',
        },
        {
            title: 'Fry in hot oil',
            description: 'Heat oil to 180°C. Fry the coated squid in batches — do not overcrowd. Fry for 2-3 minutes until pale golden and just cooked through. Remove and drain on paper towels. The squid should be crispy but not deeply colored at this stage — it will go back into heat when tossed in the glaze and will darken further. Overcooking at this stage produces rubbery squid inside a burnt crust.',
            tip: 'Squid cooks very fast. At 180°C, 2 minutes is enough for rings. Overcooked squid is tough and rubbery — there is no recovery. When in doubt, err toward undercooking slightly since the glaze will add heat.',
        },
        {
            title: 'Make the fish sauce caramel glaze',
            description: 'While the squid fries, heat oil in a wok over medium heat. Add sliced garlic and fry until golden and just crisp — 2-3 minutes. Remove garlic with a slotted spoon and set aside. To the same oil, add sugar. Caramelize to deep amber without stirring. Add fish sauce and water — it will spit aggressively. Stir until combined into a smooth, glossy caramel glaze.',
            tip: 'The glaze should be made and ready before the squid finishes frying. The tossing must happen while the squid is still piping hot — cold squid in glaze produces a soggy result.',
        },
        {
            title: 'Toss squid in hot glaze — fast',
            description: 'Add all the freshly fried squid to the wok with the hot caramel glaze. Toss rapidly and continuously for 60 seconds — every ring and tentacle should be completely coated and the glaze should caramelize slightly further onto the crust. Add the fried garlic and sliced chili in the last 10 seconds. The entire tossing step should take no more than 90 seconds.',
            tip: 'Work fast. The glaze thickens as it cools. If it becomes too thick before all the squid is coated, add a splash of water and 5 seconds over heat to loosen it.',
        },
        {
            title: 'Plate and serve immediately',
            description: 'Transfer to a plate in a single layer — never stack or the steam softens the crust. Scatter spring onion and extra chili. Serve with lime wedges. Mực chiên mắm is at its best in the first 10 minutes — the crust remains crisp, the glaze is still sticky and warm. This is beer food: serve with cold lager and eat immediately.',
            tip: 'Single layer is essential after glazing. The glaze creates steam between stacked pieces and destroys the crust within minutes. A large flat plate presented at the center of the table is the correct service.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
