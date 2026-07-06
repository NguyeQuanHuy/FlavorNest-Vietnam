'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-xoai',
    title: 'Gỏi Xoài (Vietnamese Green Mango Salad)',
    subtitle: 'Shredded unripe mango tossed with dried shrimp, roasted peanuts, Vietnamese herbs, and a lime-fish sauce dressing that turns the mango\'s natural sourness into the organizing principle of the entire dish.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/goi-xoai.jpg',
    intro: `Gỏi xoài is the Vietnamese green mango salad — a dish built around the sourness and crunch of unripe mango in the same way that gỏi đu đủ is built around green papaya. The two salads share the same dressing architecture and the same herb vocabulary, but the mango version has a more pronounced tartness and a slightly different texture: firmer, more fibrous, with a clean acidity that needs no rice vinegar to supplement it. The dried shrimp (tôm khô) are the savory counterpoint — small, intensely flavored, slightly chewy — scattered through the salad rather than used as a primary protein. The peanuts add crunch and richness. The herbs — Vietnamese coriander (rau răm) specifically — add the peppery-sharp note that balances the mango's sourness. Gỏi xoài is a southern and central Vietnamese dish, eaten as a snack, an appetizer, or a side dish to grilled meats. It is also one of the most popular street food snacks in the country — sold in small plastic bags with a wooden skewer at markets and bus stations, eaten standing up between other activities. The mango must be genuinely unripe: rock hard, pale green inside, with an assertive sourness that makes your eyes water. Any sweetness means the mango is too ripe and the salad will be flat.`,
    ingredientSections: [
        {
            title: 'Salad',
            items: [
                { amount: 500, unit: 'g', name: 'green unripe mango (xoài xanh)', note: 'rock hard, pale green-white flesh, no sweetness whatsoever. 2 medium mangoes. Must be unripe — ripe mango produces a completely different and incorrect result.' },
                { amount: 30, unit: 'g', name: 'dried shrimp (tôm khô)', note: 'small, orange-pink. Soaked in warm water 10 minutes, drained and squeezed dry.' },
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed — not powder' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'thinly sliced — the heat is structural in this dish' },
            ],
        },
        {
            title: 'Herbs',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)', note: 'leaves only — essential, the defining herb' },
                { amount: 0.5, name: 'bunch mint (húng lủi)', note: 'leaves only' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Dressing',
            items: [
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice', note: 'about 1.5 limes — adjust based on mango sourness' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves, minced' },
                { amount: 1, name: 'bird\'s eye chili, minced', note: 'in addition to the sliced chili in the salad' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 8, name: 'prawn crackers or rice crackers', note: 'for scooping' },
                { amount: 2, name: 'limes, extra wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Peel and shred the green mango',
            description: 'Peel the mango and cut the flesh away from the seed in large pieces. Shred into fine julienne strips using a box grater (large holes), mandoline with julienne attachment, or a sharp knife. The strips should be 2-3mm wide and 5-6cm long. Taste a strip — it should be assertively sour and crunchy with no sweetness. If there is any sweetness, the mango is too ripe for this dish.',
            tip: 'A Vietnamese mango shredder (available at Asian kitchen stores) produces the ideal strip thickness and length in seconds. It is the single most useful tool for Vietnamese salad preparation.',
        },
        {
            title: 'Salt the mango briefly',
            description: 'Toss the shredded mango with a small pinch of salt (less than a quarter teaspoon). Leave for 5 minutes. The salt draws out a small amount of moisture and slightly softens the extreme sharpness of the mango. Rinse with cold water and squeeze gently. This step is optional but produces a more balanced result — particularly with very sour mangoes.',
            tip: 'Do not over-salt or leave too long. The goal is to take the edge off the sharpest acidity, not to make the mango limp. 5 minutes maximum.',
        },
        {
            title: 'Prepare the dried shrimp',
            description: 'Soak the dried shrimp in warm water for 10 minutes until slightly softened. Drain and squeeze out excess water firmly. Pat dry. The rehydrated dried shrimp should be pliable but not wet. If left in water too long they become waterlogged and lose their concentrated flavor.',
            tip: 'Taste a dried shrimp before adding to the salad — they vary considerably in saltiness by brand. If very salty, soak longer and squeeze more firmly. The dried shrimp flavor should be present in the salad but not overwhelming.',
        },
        {
            title: 'Make the dressing',
            description: 'Combine fish sauce, lime juice, sugar, and water. Stir until sugar dissolves. Add minced garlic and minced chili. Taste: it should be balanced sweet-sour-salty with a clean heat. For green mango salad specifically, the dressing should be slightly less acidic than for papaya salad — the mango itself provides significant acidity. Adjust with more sugar if the mango is very tart.',
            tip: 'Taste the dressing alongside a piece of the shredded mango before finalizing. The combined taste should be bright, sharp, and layered — not one-dimensionally sour.',
        },
        {
            title: 'Assemble immediately before serving',
            description: 'In a large bowl, combine the shredded mango, dried shrimp, sliced chili, rau răm, mint, and spring onion. Pour the dressing over and toss gently to coat evenly. Transfer to a serving plate. Top with crushed peanuts and fried shallots — these go on last to preserve their crunch.',
            tip: 'Dress and eat immediately. Green mango salad softens noticeably within 20 minutes of dressing as the acid continues working on the mango fibers. Assemble just before serving, not in advance.',
        },
        {
            title: 'Serve with crackers',
            description: 'Arrange on a plate with prawn crackers alongside. The traditional eating method: spoon a small amount of salad onto a cracker, eat in one bite. The crunch of the cracker against the chewy dried shrimp and crisp mango is the complete textural experience. Serve with extra lime wedges for those who want more acidity.',
            tip: 'Gỏi xoài as a street snack is served in a small plastic bag — the diner shakes the bag to mix everything, then opens it and eats with a small fork or skewer. The bag presentation keeps everything cold and the crackers separate until the moment of eating.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}