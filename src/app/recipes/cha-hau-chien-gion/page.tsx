'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cha-hau-chien-gion',
    title: 'Chả Hàu Chiên Giòn (Crispy Fried Oyster Cakes)',
    subtitle: 'Fresh oysters folded into a seasoned rice flour batter with egg, spring onion, and bean sprouts then fried in generous oil until each oyster cake has a shatteringly crispy exterior and a creamy, briny oyster center — the central Vietnamese street food that is simultaneously a pancake, a fritter, and a vehicle for the freshest possible oyster.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/cha-hau-chien-gion.jpg',
    intro: `Chả hàu chiên giòn is the fried oyster cake of central Vietnamese coastal cooking — a preparation that sits in the same category as the Taiwanese oyster omelette (蚵仔煎, ô-á-chian) and the Korean haemul pajeon but arrives at its own specific character through the specific Vietnamese preparation: a rice flour batter rather than wheat flour or sweet potato starch, a higher oyster-to-batter ratio than most Asian fried oyster preparations, and the specific combination of bean sprouts and spring onion that makes the interior of each cake simultaneously crispy, creamy, and fresh. The preparation appears at markets and seafood restaurants throughout the central coastal provinces — Quảng Nam, Quảng Ngãi, Bình Định, and Phú Yên — where fresh oysters are both abundant and affordable, and where the combination of available cooking equipment (a flat pan, some oil, and a charcoal or gas flame) and the available ingredient (the day's fresh oyster harvest) produces this specific dish. Chả hàu chiên giòn differs from the Taiwanese oyster omelette in its use of rice flour rather than sweet potato starch — the rice flour produces a crisper, less chewy result that shatters when bitten rather than stretching. It differs from the Korean seafood pancake in its smaller individual size (each cake is 8-10cm across, one per diner rather than one shared pancake) and in its significantly higher cooking oil quantity — the Vietnamese version is fried in enough oil that the cake essentially deep-fries in its own portion rather than pan-frying, which is the technique that produces the specific shattering crispiness of the exterior that makes chả hàu chiên giòn what it is.`,
    ingredientSections: [
        {
            title: 'Batter',
            items: [
                { amount: 100, unit: 'g', name: 'rice flour (bột gạo)', note: 'produces the shatteringly crispy exterior — not wheat flour' },
                { amount: 30, unit: 'g', name: 'tapioca starch (bột năng)', note: 'added to the rice flour — gives extra crispiness and slight chew' },
                { amount: 2, name: 'large eggs', note: 'beaten' },
                { amount: 120, unit: 'ml', name: 'water', note: 'cold' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the golden color' },
            ],
        },
        {
            title: 'Filling',
            items: [
                { amount: 300, unit: 'g', name: 'fresh oysters (hàu tươi)', note: 'shucked, drained of excess liquor — patted dry. Kept whole or halved if very large.' },
                { amount: 100, unit: 'g', name: 'bean sprouts (giá)', note: 'the textural element that keeps the interior light' },
                { amount: 5, name: 'spring onions', note: 'sliced into 2cm pieces' },
                { amount: 2, name: 'shallots', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Frying',
            items: [
                { amount: 6, unit: 'tbsp', name: 'neutral oil per batch', note: 'generous — the cake should sit in 3-4mm of oil during frying' },
            ],
        },
        {
            title: 'Dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'head butter lettuce', note: 'leaves separated — for wrapping' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 2, name: 'extra limes' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the batter and prepare the filling',
            description: 'Combine rice flour, tapioca starch, beaten eggs, cold water, fish sauce, sugar, white pepper, and turmeric. Whisk until smooth — no lumps. The batter should be slightly thicker than crêpe batter but thinner than pancake batter. Rest 10 minutes. Pat the oysters completely dry — surface moisture prevents the batter from adhering and causes dangerous oil splatter. Combine the dry oysters, bean sprouts, spring onion, and shallots in a bowl. Pour the batter over the filling and fold gently until everything is coated.',
            tip: 'The batter resting period is important for rice flour specifically — rice flour absorbs water slowly and a rested batter produces a more cohesive result than batter used immediately. After 10 minutes, the batter will be slightly thicker than when first mixed, which is the correct consistency for holding the oysters and vegetables together during frying.',
        },
        {
            title: 'Heat oil to correct temperature',
            description: 'Heat 6 tablespoons of neutral oil in a flat non-stick or cast iron pan over medium-high heat. The oil should be deep enough to come 3-4mm up the sides of the cake — this is the semi-deep-frying that produces the shattering crust rather than the softer result of pan-frying with minimal oil. Test the temperature: a small drop of batter should sizzle immediately and float to the surface. If it sinks and takes 3-4 seconds to sizzle, the oil needs more time.',
            tip: 'The 3-4mm oil depth for chả hàu is the specific quantity that semi-deep-fries the cake — enough oil that the batter base is submerged and fries from below simultaneously with the steam-frying of the top from the heat above. Less oil produces a cake that is pan-fried with the characteristic pale, slightly soft result of pan-frying; more oil produces deep-fried cakes that cook through too quickly before the interior oysters have time to warm.',
        },
        {
            title: 'Fry individual cakes — one at a time',
            description: 'Pour approximately 3-4 tablespoons of the oyster batter mixture per cake into the hot oil — each cake should be 8-10cm across. Do not flatten with a spatula — the batter will spread naturally. Fry without moving for 3-4 minutes until the edges are clearly golden and crispy and the top surface is set but still slightly wet at the center. Flip carefully using a wide spatula. Fry the second side for 2-3 minutes until golden. Drain on a rack.',
            tip: 'Frying chả hàu one or two at a time rather than crowding the pan is the technique that produces the individual crispy cakes rather than a merged mass. Each cake needs its own oil contact area to develop the shattering exterior. Crowded cakes steam each other rather than frying individually.',
        },
        {
            title: 'Test for the correct interior',
            description: 'Press the center of a finished cake gently — it should feel firm but slightly yielding at the center where the oysters are. Cut one cake to check: the exterior should shatter cleanly at the knife; the interior should be creamy and slightly liquid around the oysters from the oyster juice that has released during frying; the bean sprouts should still have slight crunch. The oysters themselves should be just cooked — opaque throughout but not shrunken.',
            tip: 'The slightly liquid interior around the oysters in a correctly fried chả hàu is not undercooking — it is the oyster juice that has released during the frying time and pooled within the cake. This liquid is the most intensely flavored element of the cake interior and is why the ratio of oysters to batter must be high enough for the oyster juice to create this effect.',
        },
        {
            title: 'Serve with herbs and dipping sauce',
            description: 'Place the hot cakes on a serving plate. Make the dipping sauce: combine fish sauce, lime juice, sugar, water, garlic, and chili. Serve alongside the full herb plate: rau răm, mint, perilla, butter lettuce leaves, and cucumber. To eat: place a cake in a lettuce leaf, add herbs and cucumber, fold loosely, dip in the nước chấm. Or eat directly with chopsticks, using the herbs between bites. The cakes must be eaten immediately — they lose their shattering crust within 5 minutes of leaving the oil.',
            tip: 'The lettuce-wrap eating style for chả hàu chiên giòn is the central Vietnamese approach that makes the fried cake feel lighter and provides the fresh herb contrast that the rich, crispy oyster cake needs. The crispy cake, the fresh lettuce, the herbs, and the bright dipping sauce in each bite is the complete experience the preparation was designed for.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
