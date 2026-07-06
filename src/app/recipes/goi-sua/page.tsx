'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-sua',
    title: 'Gỏi Sứa (Vietnamese Jellyfish Salad)',
    subtitle: 'Prepared jellyfish tossed with pork, shrimp, cucumber, fresh herbs, roasted peanuts, and a sharp lime-fish sauce dressing — the Vietnamese salad built around the most unusual and most underestimated ingredient in Southeast Asian cooking.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/goi-sua.jpg',
    intro: `Gỏi sứa is the Vietnamese jellyfish salad — a dish that requires more trust from a first-time eater than almost any other, and delivers more reward. Prepared jellyfish has been processed (salted, then desalted and blanched) to remove the stinging cells and produce the texture that makes it worth eating: dense, chewy, with a clean oceanic freshness and a resistance between the teeth that is unique among edible ingredients. It is not gelatinous, not slippery, not what first-timers imagine. It is closest in texture to a firm, slightly chewy squid — but lighter and more neutral in flavor, which makes it an ideal canvas for the sharp, herb-forward Vietnamese dressing. Gỏi sứa is a coastal dish, most associated with the central coast provinces — Đà Nẵng, Quảng Nam, Phú Yên — where jellyfish are harvested in summer. Prepared jellyfish is available year-round at Vietnamese and Asian grocers, typically sold salted in bags or pre-rinsed and packaged. This recipe uses the prepared variety.`,
    ingredientSections: [
        {
            title: 'Salad',
            items: [
                { amount: 300, unit: 'g', name: 'prepared jellyfish (sứa)', note: 'salted or pre-rinsed from Asian grocery. Must be desalted before use — see step 1. Available refrigerated or in brine.' },
                { amount: 200, unit: 'g', name: 'cooked pork belly or shoulder', note: 'boiled until just cooked, cooled, sliced 3mm thin against the grain' },
                { amount: 200, unit: 'g', name: 'cooked shrimp', note: 'medium, peeled and halved lengthwise — boiled 3 minutes' },
                { amount: 1, name: 'cucumber', note: 'halved lengthwise, seeds removed, sliced thinly on the diagonal' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots' },
            ],
        },
        {
            title: 'Herbs (essential)',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)', note: 'leaves only — the defining herb for this salad' },
                { amount: 1, name: 'bunch mint (húng lủi)', note: 'leaves only' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Dressing',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice', note: '2-3 limes — must be fresh' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves, minced' },
                { amount: 1, name: 'bird\'s eye chili, minced' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 8, name: 'prawn crackers or rice crackers', note: 'for scooping — optional but traditional' },
                { amount: 2, name: 'limes, extra wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Desalt and prepare the jellyfish',
            description: 'If using salted jellyfish: soak in several changes of cold water for 1-2 hours, changing the water every 30 minutes until the jellyfish no longer tastes aggressively salty. If using pre-rinsed packaged jellyfish: rinse once under cold water. Cut or pull apart into strips 1cm wide and 5-6cm long. Blanch in boiling water for 10-15 seconds — just enough to slightly firm the texture. Immediately plunge into ice water. Drain and squeeze gently. The jellyfish should be cool, slightly firm, and taste mildly of the sea.',
            tip: 'Do not over-blanch the jellyfish — more than 20 seconds in boiling water makes it rubbery and releases its moisture, producing a watery salad. The 10-15 second blanch just firms the texture slightly.',
        },
        {
            title: 'Prepare the proteins',
            description: 'Boil pork belly in salted water with a bruised lemongrass stalk and ginger slice for 15-20 minutes until just cooked. Cool completely before slicing — hot pork tears rather than slicing cleanly. Slice 3mm thin against the grain. Boil shrimp in salted water for 3 minutes until just pink. Cool under cold water, peel, and halve lengthwise.',
            tip: 'Both proteins should be at room temperature when assembled — cold pork from the refrigerator makes the salad feel flat. Slice the pork while still slightly warm for the cleanest cuts.',
        },
        {
            title: 'Make the dressing',
            description: 'Combine fish sauce, lime juice, sugar, and water. Stir until the sugar dissolves. Add minced garlic, chili, and sesame oil. Taste: the dressing should be balanced sweet-sour-salty with the fish sauce providing depth without being identifiable as a separate flavor. For a gỏi sứa dressing, it should be slightly more acidic than a standard nước chấm — the lime helps cut the oceanic character of the jellyfish.',
            tip: 'Make the dressing 15 minutes before using. The garlic and chili mellow as they steep, producing a more integrated flavor than a dressing used immediately.',
        },
        {
            title: 'Assemble just before serving',
            description: 'In a large bowl, combine the drained jellyfish, sliced pork, shrimp, cucumber, and all the herbs — rau răm, mint, and spring onion. Pour the dressing over and toss gently but thoroughly. Every ingredient should be coated. Taste and adjust seasoning.',
            tip: 'Assemble immediately before serving — gỏi sứa softens quickly once dressed. The jellyfish releases moisture into the dressing within 15-20 minutes and the salad becomes watery. Dress and eat.',
        },
        {
            title: 'Plate and finish',
            description: 'Arrange on a serving plate. Top with crushed roasted peanuts and crispy fried shallots — added at the last moment to preserve their crunch. Serve with prawn crackers for scooping and extra lime wedges. The complete eating experience: a spoonful of salad on a cracker, one bite. The crunch of the cracker against the chewy jellyfish and tender pork is the textural combination the dish is built around.',
            tip: 'If serving for first-timers: describe the jellyfish texture honestly — firm, slightly chewy, mild. The comparison to squid is accurate. Most people who approach it with openness enjoy it; the hesitation is always greater than the reality.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}