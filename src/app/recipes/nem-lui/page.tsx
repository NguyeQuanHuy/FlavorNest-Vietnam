'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nem-lui',
    title: 'Hue Lemongrass Pork Skewers',
    subtitle: 'Nem lui Hue — seasoned ground pork moulded around lemongrass stalks and grilled over charcoal, eaten DIY in rice paper with the famous peanut-liver sauce.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&w=1600&q=85',
    intro: 'Nem lui is a Hue royal court dish that escaped the palace and became the city street food everyone wraps with their hands. The lemongrass stalk is not a flavour — it is the skewer itself, perfuming the seasoned pork from the inside as it grills. What makes nem lui Hue different from every other Vietnamese pork skewer is the dipping sauce: a thick, glossy, golden-orange sauce built on roasted peanut butter, sesame, fermented bean paste and a small amount of pork liver. Each guest wraps the hot skewer in rice paper with green banana, star fruit, herbs and pickles, then dunks. The first wrap is awkward. The fifth is muscle memory.',
    ingredientSections: [
        {
            title: 'Pork mixture',
            items: [
                { amount: 600, unit: 'g', name: 'pork shoulder', note: 'minced, with 25% fat' },
                { amount: 100, unit: 'g', name: 'pork back fat', note: 'finely diced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 6, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'palm sugar' },
                { amount: 1, unit: 'tsp', name: 'five-spice powder' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 2, unit: 'tsp', name: 'baking powder', note: 'for springy texture' },
            ],
        },
        {
            title: 'Skewers and grill',
            items: [
                { amount: 12, name: 'thick lemongrass stalks', note: 'tough outer leaves removed, halved if very thick' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for brushing' },
            ],
        },
        {
            title: 'Hue peanut-liver dipping sauce',
            items: [
                { amount: 100, unit: 'g', name: 'pork liver', note: 'finely minced' },
                { amount: 4, unit: 'tbsp', name: 'roasted peanut butter', note: 'unsweetened' },
                { amount: 2, unit: 'tbsp', name: 'fermented soybean paste (tuong)' },
                { amount: 30, unit: 'g', name: 'glutinous rice', note: 'toasted and ground, for thickening' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'palm sugar' },
                { amount: 300, unit: 'ml', name: 'pork stock or water' },
                { amount: 2, unit: 'tbsp', name: 'crushed roasted peanuts', note: 'for garnish' },
            ],
        },
        {
            title: 'To wrap and serve',
            items: [
                { amount: 1, name: 'pack rice paper wrappers', note: 'banh trang' },
                { amount: 1, name: 'large bunch perilla' },
                { amount: 1, name: 'large bunch Vietnamese coriander' },
                { amount: 1, name: 'small head lettuce' },
                { amount: 1, name: 'green banana', note: 'thinly sliced into water' },
                { amount: 1, name: 'star fruit', note: 'thinly sliced' },
                { amount: 1, name: 'cucumber', note: 'cut in batons' },
            ],
        },
    ],
    steps: [
        {
            title: 'Knead the pork until sticky',
            description: 'Combine all pork mixture ingredients in a large bowl. Knead and slap the mixture against the sides of the bowl for 5 full minutes — the pork should turn pale, glossy, and noticeably sticky. This develops the bind that lets the meat cling to the lemongrass.',
            tip: 'Skipping the kneading equals pork sliding off the lemongrass on the grill. Five minutes, no shortcut.',
        },
        {
            title: 'Rest the meat',
            description: 'Cover and refrigerate the pork mixture for 30 minutes. The cold rest tightens the bind further and lets the seasonings penetrate the meat.',
        },
        {
            title: 'Mould the pork around lemongrass',
            description: 'Wet your hands with cold water. Take 2 tbsp of pork mixture and wrap it around the bottom two-thirds of a lemongrass stalk, pressing firmly into a smooth oval about 8cm long. Leave the top third of the lemongrass exposed as a handle. Repeat for all 12 skewers.',
            tip: 'Wet hands stop the pork from sticking. Re-wet between each skewer.',
        },
        {
            title: 'Make the peanut-liver sauce',
            description: 'In a heavy pan, fry minced shallots and garlic in 2 tbsp oil until golden. Add minced pork liver and cook for 3 minutes, breaking up with a spoon. Stir in peanut butter, fermented soybean paste, palm sugar and toasted ground rice. Pour in pork stock and simmer for 8 minutes, stirring constantly, until the sauce is thick and glossy. Season with fish sauce. The colour should be deep golden-orange.',
            tip: 'The sauce should coat the back of a spoon. If it pools and runs, simmer longer; if it goes paste-like, splash in more stock.',
        },
        {
            title: 'Grill over hot charcoal',
            description: 'Brush skewers with oil. Grill over hot coals for 4 minutes per side, turning twice, until the pork is deep mahogany with charred edges and the lemongrass is blackened and fragrant. The pork should sizzle audibly the whole time.',
            tip: 'A grill pan over high heat works indoors. Avoid an oven broiler — you lose the smoke that defines the dish.',
        },
        {
            title: 'Build the wrapping platter',
            description: 'Arrange rice paper wrappers, herbs, green banana, star fruit, cucumber and the hot skewers on a wide platter. Pour the warm peanut sauce into a shallow bowl and scatter crushed peanuts on top. Place a small dish of warm water in the centre for moistening rice papers.',
        },
        {
            title: 'Wrap and dip',
            description: 'Each guest dips a rice paper wrapper briefly in warm water until pliable, lays it on a plate, and builds: lettuce, perilla, coriander, a slice each of green banana and star fruit, a baton of cucumber. Pull the pork off the lemongrass with chopsticks and lay it across the herbs. Roll tightly into a cigar. Dip the open end into the peanut sauce and eat in 2 bites. Repeat 11 more times.',
            tip: 'Keep the rice paper soaked for under 5 seconds. Over-soaked paper tears; under-soaked stays brittle.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
