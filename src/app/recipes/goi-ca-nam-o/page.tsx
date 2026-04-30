'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-ca-nam-o',
    title: 'Da Nang Raw Fish Salad',
    subtitle: 'Goi ca Nam O — paper-thin slices of raw herring rolled with green banana, star fruit and herbs, dunked in thick mam nem peanut sauce.',
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1600&q=85',
    intro: 'Nam O is a small fishing village on the outskirts of Da Nang, and goi ca Nam O is its single most famous export. Fresh herring or anchovy is filleted within hours of being landed, sliced paper-thin, and tossed with toasted rice powder until each piece is coated in a fragrant pale dust. The fish is not technically cooked — but the rice powder dries the surface and the lime juice in the sauce does the rest. Wrapped in rice paper with green banana, star fruit, fresh herbs and the village mam nem (fermented anchovy sauce thickened with peanut and pineapple), it is one of those dishes that exists nowhere else in the world.',
    ingredientSections: [
        {
            title: 'The fish',
            items: [
                { amount: 400, unit: 'g', name: 'fresh herring or anchovy fillets', note: 'sashimi-grade only, scaled and deboned' },
                { amount: 60, unit: 'ml', name: 'fresh lime juice' },
                { amount: 80, unit: 'g', name: 'glutinous rice', note: 'toasted golden and finely ground' },
                { amount: 2, unit: 'tbsp', name: 'roasted sesame seeds' },
                { amount: 2, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
            ],
        },
        {
            title: 'Mam nem peanut sauce',
            items: [
                { amount: 4, unit: 'tbsp', name: 'mam nem (fermented anchovy sauce)', note: 'Da Nang or Phan Thiet brand' },
                { amount: 100, unit: 'g', name: 'fresh pineapple', note: 'finely grated' },
                { amount: 4, unit: 'tbsp', name: 'roasted peanut butter' },
                { amount: 2, unit: 'tbsp', name: 'lime juice' },
                { amount: 2, unit: 'tbsp', name: 'palm sugar' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'birds eye chillies', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'crushed roasted peanuts', note: 'for garnish' },
            ],
        },
        {
            title: 'To wrap and serve',
            items: [
                { amount: 1, name: 'pack rice paper wrappers' },
                { amount: 1, name: 'green banana', note: 'thinly sliced into water with lime' },
                { amount: 2, name: 'star fruit', note: 'thinly sliced' },
                { amount: 1, name: 'cucumber', note: 'cut in batons' },
                { amount: 1, name: 'large bunch perilla' },
                { amount: 1, name: 'large bunch Vietnamese balm (kinh gioi)' },
                { amount: 1, name: 'small head lettuce' },
            ],
        },
    ],
    steps: [
        {
            title: 'Source the fish',
            description: 'This dish is non-negotiable on freshness. Buy whole herring or anchovy from a fishmonger you trust, on the same day they were caught. The eyes should be clear, the gills bright red, and the flesh firm. Reject anything with cloudy eyes or a strong fishy smell.',
            tip: 'Frozen-and-thawed fish will not work. The texture is wrong and the food safety risk increases.',
        },
        {
            title: 'Prepare the fish',
            description: 'Fillet the fish and remove all bones. Slice each fillet against the grain into pieces 3mm thick. Toss the slices with lime juice in a glass bowl and let sit 5 minutes — the surface should turn opaque-white at the edges. Drain off the lime juice.',
        },
        {
            title: 'Coat with toasted rice powder',
            description: 'In a dry pan over medium heat, toast glutinous rice for 6 minutes until deep gold and intensely fragrant. Cool, then grind to a coarse powder in a mortar or spice grinder. In a clean bowl, gently toss the lime-cured fish with toasted rice powder, sesame seeds, sugar and salt until each piece is dusted. Cover and refrigerate while you make the sauce.',
            tip: 'The rice powder must be coarse, not fine. Fine powder turns gummy on the fish.',
        },
        {
            title: 'Make the mam nem peanut sauce',
            description: 'In a saucepan, warm 1 tbsp oil over medium heat. Saute garlic until pale gold. Add grated pineapple and palm sugar, cook 3 minutes until the pineapple breaks down. Stir in mam nem, peanut butter and 100ml water. Simmer for 5 minutes until thick and glossy. Off heat, add lime juice and minced chilli. Pour into a serving bowl and top with crushed peanuts.',
            tip: 'Mam nem is even funkier than mam tom. Add lime gradually until you find your tolerance.',
        },
        {
            title: 'Build the wrapping platter',
            description: 'Drain the green banana slices and pat dry. Arrange rice paper wrappers, all herbs, green banana, star fruit and cucumber on a wide platter. Place the bowl of fish in the centre and the bowl of mam nem peanut sauce alongside. Set a small dish of warm water on the table for moistening rice papers.',
        },
        {
            title: 'Wrap and dip',
            description: 'Each guest soaks a rice paper wrapper in warm water for 4 seconds until pliable. Lay on a plate. Build: lettuce, perilla, balm, a slice of green banana, a slice of star fruit, a baton of cucumber, then a small spoonful of the rice-coated fish. Roll into a tight cigar. Dip the open end into the mam nem peanut sauce. Eat in 2 bites.',
            tip: 'A perfect goi ca Nam O wrap holds together but releases lime, brine, herb and crunch in alternating bites.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
