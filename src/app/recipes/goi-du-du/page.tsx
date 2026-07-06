'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-du-du',
    title: 'Gỏi Đu Đủ (Vietnamese Green Papaya Salad)',
    subtitle: 'Finely shredded unripe papaya tossed with shrimp, pork, Vietnamese herbs, roasted peanuts, and a lime-fish sauce dressing. Lighter and more fragrant than the Thai version, with the herb plate playing an equal role to the papaya itself.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/goi-du-du.jpg',
    intro: `Gỏi đu đủ is the Vietnamese green papaya salad — related to the more internationally famous Thai som tam but distinct in character. Where the Thai version is pounded in a mortar and carries a direct, aggressive heat, the Vietnamese version is tossed rather than pounded, lighter in its seasoning, and relies on the freshness of the herbs as much as the papaya itself. The papaya provides crunch and a mild tartness. The herbs — Vietnamese coriander, mint, perilla — provide fragrance and complexity. The shrimp and pork provide protein and savory depth. The dressing ties everything together with the classic Vietnamese sweet-sour-salty balance. Gỏi đu đủ is a summer salad in the truest sense: light enough to eat in heat, flavored enough to be satisfying, assembled in minutes once the papaya is shredded. The key is the papaya: it must be genuinely unripe — rock hard, pale green-white inside, with absolutely no sweetness. Any ripeness produces a salad that is soft and flat-tasting.`,
    ingredientSections: [
        {
            title: 'Salad base',
            items: [
                { amount: 400, unit: 'g', name: 'green papaya (đu đủ xanh)', note: 'peeled, seeded, and finely shredded — must be rock-hard and unripe. About half a medium papaya.' },
                { amount: 200, unit: 'g', name: 'cooked shrimp', note: 'medium size, peeled — boiled or steamed 3 minutes. Halved lengthwise.' },
                { amount: 150, unit: 'g', name: 'boiled pork belly or shoulder', note: 'thinly sliced — boil with salt and lemongrass until just cooked, cool, slice 3mm thin.' },
                { amount: 1, name: 'small carrot', note: 'finely julienned — for color contrast' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots' },
            ],
        },
        {
            title: 'Herbs (essential)',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)', note: 'leaves only — the defining herb for this salad' },
                { amount: 1, name: 'bunch mint (húng lủi)', note: 'leaves only' },
                { amount: 0.5, name: 'bunch perilla (tía tô)', note: 'leaves torn — optional but adds complexity' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Dressing (nước chấm gỏi)',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice', note: 'about 2-3 limes — must be fresh' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves, finely minced' },
                { amount: 1, name: 'bird\'s eye chili, finely minced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 8, name: 'prawn crackers or rice crackers', note: 'for scooping — optional but traditional' },
                { amount: 1, name: 'lime', note: 'extra wedges for the table' },
            ],
        },
    ],
    steps: [
        {
            title: 'Shred the green papaya',
            description: 'Peel the papaya, halve lengthwise, and scoop out the seeds. Using a box grater (large holes), a mandoline with julienne attachment, or a dedicated papaya shredder, shred the papaya into very thin matchstick strips — 2mm wide, 5-6cm long. Place in a large bowl, sprinkle with 1 teaspoon of salt, toss, and leave for 10 minutes. The salt draws out excess moisture. Rinse under cold water and squeeze gently to drain.',
            tip: 'The salting and rinsing step prevents the salad from becoming watery. Un-salted papaya releases liquid into the dressing and dilutes everything within minutes.',
        },
        {
            title: 'Prepare the proteins',
            description: 'Boil shrimp in salted water with a bruised lemongrass stalk for 3 minutes until just pink and cooked through. Drain and cool under cold water. Peel and halve lengthwise. For the pork: boil pork belly or shoulder in salted water with lemongrass and a slice of ginger until just cooked through (15-20 minutes depending on thickness). Cool, slice 3mm thin against the grain.',
            tip: 'The proteins should be just-cooked, not overdone. Overcooked shrimp is rubbery; overcooked pork is dry. Both should be tender.',
        },
        {
            title: 'Make the dressing',
            description: 'Combine fish sauce, fresh lime juice, sugar, and water. Stir until the sugar dissolves completely. Add minced garlic and chili. Taste: the dressing should be balanced between sweet, sour, and salty with a clean heat. Adjust each element to your preference — Vietnamese dressings are not fixed ratios but personal calibrations.',
            tip: 'Make the dressing 10 minutes before using — the garlic and chili flavor develops and mellows slightly as it steeps.',
        },
        {
            title: 'Julienne the carrot',
            description: 'Cut the carrot into fine julienne strips matching the papaya in size. The carrot provides color contrast and a slightly different crunch from the papaya. It can be lightly pickled (toss with 1 tsp rice vinegar and pinch of sugar, leave 10 minutes) for extra brightness — optional but good.',
            tip: 'Uniform julienne size means everything in the salad dresses at the same rate. Thick carrot chunks remain underdressed while thin shreds absorb too much dressing.',
        },
        {
            title: 'Assemble just before serving',
            description: 'In a large bowl, combine drained papaya, julienned carrot, shrimp, sliced pork, and all the herbs — Vietnamese coriander, mint, perilla, spring onion. Add the dressing and toss gently until evenly coated. Taste and adjust. The salad should taste bright, savory, and fragrant — no single element should dominate.',
            tip: 'Assemble immediately before serving. Gỏi đu đủ softens quickly once dressed — it should be eaten within 15-20 minutes of tossing.',
        },
        {
            title: 'Plate and finish',
            description: 'Arrange on a serving plate. Top with crushed roasted peanuts, crispy fried shallots, and sliced chili. Serve with rice crackers alongside for scooping. The complete eating experience: a spoonful of salad on a cracker, eaten in one bite — the crunch of the cracker against the fresh herbs and tender papaya is the combination the dish is designed for.',
            tip: 'The fried shallots and crushed peanuts should be added at the very last moment — they lose their crunch within minutes of contact with the dressed salad.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}