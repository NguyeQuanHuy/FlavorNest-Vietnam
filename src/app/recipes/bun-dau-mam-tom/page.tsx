'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-dau-mam-tom',
    title: 'Vermicelli with Tofu and Shrimp Paste',
    subtitle: 'Bun dau mam tom — a wooden tray of cold vermicelli, golden-fried tofu, boiled pork belly, fresh herbs and the most divisive condiment in Vietnam.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=85',
    intro: 'Bun dau mam tom is the dish that separates the curious from the converted. The components are humble — vermicelli, fried tofu, boiled pork — but the heart of the dish is the small saucer of mam tom, a purple fermented shrimp paste whipped with lime, sugar, kumquat and a splash of hot oil until it foams pink and pale. The smell is uncompromising. The taste, after the third dip, is genuinely addictive. Hanoi at its most unapologetic, traditionally eaten on small plastic stools at noon with a glass of bia hoi.',
    ingredientSections: [
        {
            title: 'The tray',
            items: [
                { amount: 400, unit: 'g', name: 'rice vermicelli (bun)', note: 'cooked, cooled, formed into small mats' },
                { amount: 400, unit: 'g', name: 'firm white tofu', note: 'cut in 3cm cubes, patted dry' },
                { amount: 400, unit: 'g', name: 'pork belly', note: 'whole piece' },
                { amount: 200, unit: 'g', name: 'cha com (Hanoi green rice sausage)', note: 'sliced, optional' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'for frying tofu' },
            ],
        },
        {
            title: 'Mam tom dip',
            items: [
                { amount: 3, unit: 'tbsp', name: 'mam tom (purple fermented shrimp paste)', note: 'Hanoi or Thanh Hoa brand' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 4, name: 'kumquats', note: 'juiced, optional but traditional' },
                { amount: 2, unit: 'tbsp', name: 'hot oil', note: 'from frying the tofu' },
                { amount: 2, name: 'birds eye chillies', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'rice wine', note: 'optional, for aroma' },
            ],
        },
        {
            title: 'Herbs and finish',
            items: [
                { amount: 1, name: 'large bunch perilla (tia to)' },
                { amount: 1, name: 'large bunch Vietnamese balm (kinh gioi)' },
                { amount: 1, name: 'small bunch mint' },
                { amount: 1, name: 'small head lettuce' },
                { amount: 1, name: 'cucumber', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Boil the pork belly',
            description: 'Place pork belly in a small pot, cover with cold water, add a pinch of salt and a slice of ginger. Bring to a gentle simmer and poach for 25 minutes until a chopstick slides through cleanly. Plunge into ice water for 5 minutes to firm the texture, then slice thin against the grain.',
            tip: 'Never boil hard — high heat turns the belly stringy. A lazy simmer keeps it silky.',
        },
        {
            title: 'Cook and form the vermicelli',
            description: 'Cook rice vermicelli according to package instructions, drain and rinse under cold water until completely cool. With clean hands, gather small handfuls and press into flat mats about the size of a credit card. Set on the serving tray.',
            tip: 'The mats are not optional. Hanoi vendors press the noodles so each guest can lift one whole at a time.',
        },
        {
            title: 'Fry the tofu',
            description: 'Heat oil in a heavy pan until shimmering. Fry tofu cubes in a single layer for 3 minutes per side until shattering-crisp on the outside and custardy inside. Drain on paper. Reserve 2 tbsp of the hot oil for the mam tom.',
            tip: 'Wet tofu refuses to crisp. Press it between towels for 15 minutes before frying.',
        },
        {
            title: 'Whip the mam tom',
            description: 'In a small bowl, combine mam tom with sugar, lime juice and kumquat juice. Whisk vigorously for 30 seconds. Pour the reserved hot oil straight in — it will foam violently and turn the paste a pale lilac-pink. Stir in chillies and rice wine. Taste — adjust sugar and lime to balance the funk.',
            tip: 'The hot oil step is what tames the smell and develops the flavour. Do not skip.',
        },
        {
            title: 'Build the tray',
            description: 'Arrange the vermicelli mats, fried tofu, sliced pork belly and cha com on a wide bamboo or wooden tray. Pile the herbs on the side along with cucumber slices. Place the small bowl of whipped mam tom in the centre. Serve immediately while the tofu is still hot.',
        },
        {
            title: 'Eat the Hanoi way',
            description: 'Take a vermicelli mat, top with a piece of tofu and pork, a leaf of perilla and a sliver of cucumber. Dip the whole bundle into the mam tom — generously, do not be shy. Eat with chopsticks and one hand. Repeat. Drink bia hoi between bites if available.',
            tip: 'First-timers should start with a tiny dip. By the third bite the smell becomes appetite.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
