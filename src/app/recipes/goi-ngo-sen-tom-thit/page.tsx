'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-ngo-sen-tom-thit',
    title: 'Gỏi Ngó Sen Tôm Thịt (Lotus Root Salad with Shrimp and Pork)',
    subtitle: 'Thinly sliced lotus root tossed with poached shrimp, boiled pork, Vietnamese herbs, roasted peanuts, and crispy shallots in a bright lime-fish sauce dressing. The Vietnamese salad built around lotus root\'s unique crunch and its capacity to hold a dressing without softening.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/goi-ngo-sen-tom-thit.jpg',
    intro: `Gỏi ngó sen tôm thịt is the lotus root salad that appears at Vietnamese family celebrations, Tết feasts, and restaurant menus throughout the south — particularly in Huế, where lotus is not only an ingredient but a cultural symbol of purity and refinement. Ngó sen — lotus root — has a texture that no other vegetable replicates: firm, slightly crunchy, with a clean starchy character and natural holes running through each cross-section that are as visually striking as they are functional (they capture the dressing). When sliced thin and briefly pickled in rice vinegar, the lotus root becomes bright, slightly tart, and maintains its crunch even after dressing. The combination of lotus root crunch, tender shrimp and pork, the sharp peppery note of rau răm, and the richness of peanuts and fried shallots produces one of the most texturally complete salads in Vietnamese cooking. It is also one of the most photogenic — the cross-sectioned lotus root slices with their natural hole pattern arranged across a plate are immediately recognizable as distinctly Vietnamese. This salad takes patience in the preparation but rewards it fully.`,
    ingredientSections: [
        {
            title: 'Lotus root',
            items: [
                { amount: 400, unit: 'g', name: 'fresh lotus root (ngó sen)', note: 'firm, unblemished, the lighter-colored the better. Available at Vietnamese and Asian grocers. Frozen pre-sliced lotus root is acceptable.' },
                { amount: 100, unit: 'ml', name: 'rice vinegar', note: 'for the quick pickle — prevents oxidation and adds brightness' },
                { amount: 1, unit: 'tsp', name: 'sugar', note: 'for the pickling liquid' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 500, unit: 'ml', name: 'water', note: 'for blanching' },
            ],
        },
        {
            title: 'Proteins',
            items: [
                { amount: 250, unit: 'g', name: 'fresh shrimp, medium', note: 'peeled and deveined — boiled 3 minutes, halved lengthwise' },
                { amount: 200, unit: 'g', name: 'pork belly or shoulder', note: 'boiled whole with lemongrass and ginger until just cooked (15 min), cooled and sliced 3mm thin' },
            ],
        },
        {
            title: 'Salad components',
            items: [
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed — not too fine' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 3, unit: 'tbsp', name: 'shallot-infused oil', note: 'from the fried shallots — drizzled over for fragrance' },
            ],
        },
        {
            title: 'Herbs',
            items: [
                { amount: 1, name: 'large bunch Vietnamese coriander (rau răm)', note: 'leaves only — the essential herb for this salad' },
                { amount: 0.5, name: 'bunch mint (húng lủi)', note: 'leaves only' },
                { amount: 1, name: 'stalk culantro (ngò gai / saw-tooth herb)', note: 'thinly sliced — adds citrusy depth. Optional but traditional.' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Dressing (nước chấm gỏi)',
            items: [
                { amount: 3.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice', note: 'about 2 limes' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves, finely minced' },
                { amount: 1, name: 'bird\'s eye chili, finely minced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 8, name: 'prawn crackers (bánh phồng tôm)', note: 'for scooping — traditional accompaniment' },
                { amount: 2, name: 'limes, extra wedges' },
                { amount: 1, name: 'fresh red chili, sliced', note: 'optional garnish' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare and pickle the lotus root',
            description: 'Peel the lotus root using a vegetable peeler — the skin is thin and comes off easily. Slice into rounds 3-4mm thick. As you slice, drop each round immediately into a bowl of cold water mixed with a splash of rice vinegar — this prevents the lotus root from oxidizing and turning brown, and begins the pickling process. After all the lotus root is sliced, combine the rice vinegar, sugar, and salt in a separate bowl. Transfer the lotus root to this pickling liquid and leave for 20 minutes. The lotus root will become slightly translucent at the edges and taste bright and tart.',
            tip: 'The immediate drop into acidulated water after slicing is critical — lotus root oxidizes within minutes of being cut and turns an unappetizing grey. The vinegar pickle also firms the texture slightly, which helps it maintain crunch even after dressing.',
        },
        {
            title: 'Blanch the lotus root briefly',
            description: 'Bring a pot of water to a full boil. Drain the pickled lotus root. Blanch in the boiling water for exactly 60-90 seconds — just enough to remove the raw starchy taste while maintaining full crunch. Immediately transfer to ice water for 3 minutes to stop cooking. Drain and pat dry. The lotus root should be crisp, slightly translucent, and taste clean — no raw starch, no softness.',
            tip: 'Do not over-blanch. Lotus root that is cooked for more than 2 minutes loses its crunch and becomes the texture of boiled potato — completely wrong for this salad. 60-90 seconds is the maximum.',
        },
        {
            title: 'Cook the proteins',
            description: 'For the pork: place pork belly in cold water with 1 bruised lemongrass stalk, 2 ginger slices, and 1 tsp salt. Bring to a boil, reduce to a simmer, and cook for 15-20 minutes until just cooked through. Cool completely in the cooking liquid, then remove and slice 3mm thin against the grain. For the shrimp: boil salted water with a squeeze of lime. Add shrimp and cook for exactly 3 minutes until just pink. Transfer to ice water, peel, and halve lengthwise.',
            tip: 'Both proteins should be cooled completely before adding to the salad — warm proteins wilt the herbs and accelerate the dressing\'s absorption into the lotus root, softening it prematurely.',
        },
        {
            title: 'Make the dressing',
            description: 'Combine fish sauce, lime juice, sugar, and water in a small bowl. Stir until the sugar dissolves completely. Add minced garlic and chili. Taste: it should be a balanced sweet-sour-salty combination with clean heat. For gỏi ngó sen specifically, the dressing should be slightly sweeter than standard nước chấm — the lotus root has a subtle starchiness that responds well to a touch more sweetness.',
            tip: 'Make the dressing 10-15 minutes before using — the garlic mellows and integrates as it steeps. A freshly made dressing with raw garlic has a sharp bite that can overpower the delicate lotus root flavor.',
        },
        {
            title: 'Assemble the salad',
            description: 'In a large wide bowl, combine the drained lotus root, sliced pork, halved shrimp, and all the herbs — rau răm, mint, culantro if using, and spring onion. Pour the dressing over and toss gently to coat everything evenly. The lotus root should be the visual feature — try to keep the slices intact and visible rather than broken up. Taste and adjust — add more lime if flat, more sugar if too sharp.',
            tip: 'Toss with two large spoons using a lifting-and-folding motion rather than mixing. The goal is to coat every element while keeping the lotus root rounds whole. Broken lotus root pieces are not wrong, just less visually striking.',
        },
        {
            title: 'Plate and finish',
            description: 'Arrange the dressed salad on a serving plate. Drizzle the shallot-infused oil over the top — it adds a final layer of aromatic depth. Scatter the crushed peanuts and crispy fried shallots over everything at the last moment. Add sliced fresh chili for color. Serve with prawn crackers arranged around the plate for scooping. Serve immediately — gỏi ngó sen holds up slightly longer than mango or papaya salads (the lotus root is more stable) but is best within 20 minutes of dressing.',
            tip: 'The shallot oil drizzle is not optional — it adds the aromatic finishing layer that ties the dish together. Without it the salad tastes complete but slightly flat. With it, every bite carries an additional dimension.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
