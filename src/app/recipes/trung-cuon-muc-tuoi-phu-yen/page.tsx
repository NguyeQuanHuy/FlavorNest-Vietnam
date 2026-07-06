'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trung-cuon-muc-tuoi-phu-yen',
    title: 'Tr?ng Cu?n M?c Tuoi Phú Yên (Phú Yên Fresh Squid Egg Roll)',
    subtitle: 'A thin egg sheet rolled around a filling of fresh squid stir-fried with lemongrass, chili, and m?m nhi — the Phú Yên egg roll where the squid filling is cooked with the province\'s four-stalk lemongrass proportion and the egg wrapper is seasoned with m?m nhi before rolling.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/trung-cuon-muc-tuoi-phu-yen.jpg',
    intro: `Tr?ng cu?n m?c tuoi Phú Yên is the fresh squid egg roll of the province — a preparation that takes the tr?ng cu?n (rolled egg) format that appears throughout Vietnamese and East Asian cooking and fills it with m?c tuoi (fresh squid) cooked specifically in the Phú Yên way: with four stalks of lemongrass, bird's eye chili, and m?m nhi as the primary aromatics and seasoning. The m?c (squid) available along the Phú Yên coast — particularly the fresh market squid from the Tuy Hòa fishing harbor and the smaller inshore squid from the rocky coast near Mui Ði?n — is prized for its specific sweetness and firm, clean-tasting flesh that the province's fishermen describe as tasting of the specific cold upwelling water that flows along the central Vietnamese coast. Stir-fried briefly with lemongrass and chili in a hot wok, this squid caramelizes at its edges, stays sweet and tender at the center, and carries the four-stalk lemongrass aromatics that make it identifiably Phú Yên in character. The egg wrapper — beaten with m?m nhi and fried as a thin sheet in a flat pan — provides the neutral, silky vehicle for this filling without competing with the squid's character. The rolling is done while the egg sheet is still warm and pliable, with the hot squid filling inside warming the egg from within and helping it seal cleanly. Sliced on the diagonal and served with mu?i lá é alongside, tr?ng cu?n m?c tuoi Phú Yên brings the province's signature condiment to its most refined egg preparation — the lá é salt against the lemongrass-squid filling wrapped in the m?m nhi egg sheet producing the complete Phú Yên flavor profile in a single diagonal slice.`,
    ingredientSections: [
        {
            title: 'Egg wrapper',
            items: [
                { amount: 4, name: 'large eggs' },
                { amount: 1, unit: 'tbsp', name: 'm?m nhi', note: 'beaten into the eggs — seasons the wrapper with the province\'s fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'water', note: 'thins the egg slightly for a more pliable wrapper' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for frying the egg sheet' },
            ],
        },
        {
            title: 'Fresh squid filling',
            items: [
                { amount: 250, unit: 'g', name: 'fresh squid (m?c tuoi)', note: 'cleaned, bodies cut into rings, tentacles left whole. Very fresh — squid that is not fresh smells strongly and toughens badly when cooked.' },
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, finely minced — four stalks, the Phú Yên proportion' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 1, name: 'fresh red chili', note: 'sliced — for color' },
                { amount: 1.5, unit: 'tbsp', name: 'm?m nhi', note: 'primary seasoning for the filling' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Filling aromatics and greens',
            items: [
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces — added at end of squid stir-fry' },
                { amount: 1, name: 'small bunch rau ram', note: 'leaves only — mixed into the filling before rolling' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'finished into the squid filling' },
            ],
        },
        {
            title: 'Mu?i lá é',
            items: [
                { amount: 15, unit: 'g', name: 'fresh lá é leaves' },
                { amount: 1, unit: 'tsp', name: 'coarse salt' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'bird\'s eye chili' },
                { amount: 2, name: 'limes' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'for eating raw alongside each slice' },
                { amount: 8, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 2, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Cook the squid filling first',
            description: 'Heat oil in a wok over maximum heat until smoking. Add lemongrass, garlic, and shallots — fry 60 seconds until golden. Add minced and sliced chili. Add the fresh squid rings and tentacles — they will spit aggressively in the hot wok. Stir-fry over maximum heat for exactly 90 seconds — squid toughens rapidly and 90 seconds at high heat is the window between tender and rubbery. Add m?m nhi, sugar, and black pepper in the final 20 seconds. Add spring onion and sesame oil. Remove from heat. Fold in rau ram leaves. The filling should be fragrant, slightly saucy, and the squid just cooked through.',
            tip: 'The 90-second maximum for fresh squid stir-fry is absolute — squid that cooks for 3-4 minutes at high heat becomes rubbery and almost inedible. At 90 seconds the squid rings should be just opaque throughout, slightly curved, and tender. The high heat is essential — lower heat produces moisture-releasing squid that steams rather than sears.',
        },
        {
            title: 'Pound the mu?i lá é',
            description: 'Pound lá é leaves with salt, pepper, sugar, and chili until intensely green. Transfer to plates. Squeeze lime at the table. Prepare before the egg wrapper so everything is ready for immediate assembly.',
            tip: 'Making the mu?i lá é before the egg wrapper ensures the assembly can happen immediately while the wrapper is still warm and pliable. A cooled egg wrapper cracks when rolled rather than folding cleanly.',
        },
        {
            title: 'Make the egg wrapper — thin and pliable',
            description: 'Beat eggs with m?m nhi, water, and white pepper until smooth. Heat a non-stick pan or well-seasoned wok over medium heat. Add just enough oil to coat the surface. Pour a thin layer of egg mixture — swirl immediately to coat the entire pan surface in a thin, even sheet. Cook over medium heat for 60-90 seconds until the top surface is just set but still slightly tacky — not fully dried. The wrapper should be pale gold, thin, and flexible.',
            tip: 'The medium heat for the egg wrapper is the temperature that produces a pliable, thin sheet without browning or crisping. High heat produces a thin sheet that tears when rolled. The surface should be just set — still slightly sticky when touched — when the filling goes on. This stickiness is what seals the roll.',
        },
        {
            title: 'Fill and roll while warm',
            description: 'Place the squid filling across the center of the still-warm egg wrapper — a line of filling from one side to the other, leaving 2cm border on the near and far edges. Scatter a few extra rau ram leaves over the filling. Roll the near edge of the wrapper over the filling, pressing gently to seal. Continue rolling to complete the cylinder. The warm, slightly sticky egg surface will seal the roll without needing any additional binding.',
            tip: 'Rolling the egg while warm and the surface is still slightly tacky is the critical step — the tackiness acts as a natural sealant. A cooled egg wrapper has dried and lost its stickiness, making sealing difficult and the roll prone to opening when sliced. Work quickly from pan to filling to roll.',
        },
        {
            title: 'Slice and serve',
            description: 'Using a sharp knife, slice the roll diagonally into 3-4cm sections — the diagonal cut exposes the spiral cross-section of egg and squid filling simultaneously. Arrange on a plate, cut-side up to display the spiral. Scatter shredded kaffir lime leaves. Serve with mu?i lá é, sesame crackers, fresh lá é leaves, and rice. To eat: place a roll section on a sesame cracker with a raw lá é leaf, dip in lime-squeezed mu?i lá é. The cross-section of golden egg and lemongrass-fragrant squid on the cracker with the lá é salt is the Phú Yên egg roll eaten at its most complete.',
            tip: 'The diagonal cut to display the spiral cross-section is both aesthetic and practical — the visual of the golden egg spiral wrapped around the squid filling makes the dish immediately appetizing, and the diagonal slice is thicker than a straight cut of the same section, producing a more substantial single piece to eat.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
