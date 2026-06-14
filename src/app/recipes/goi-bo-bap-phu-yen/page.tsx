'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-bo-bap-phu-yen',
    title: 'Gỏi Bò Bắp Phú Yên (Phú Yên Beef Shank Salad)',
    subtitle: 'Beef shank simmered until the collagen renders and the meat becomes dense and yielding, sliced thin and tossed with Vietnamese coriander, ginger, lemongrass, roasted peanuts, and a lime-fish sauce dressing — served with sesame rice crackers and the muối lá é that appears throughout Phú Yên cooking.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '2 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/goi-bo-bap-phu-yen.jpg',
    intro: `Gỏi bò bắp Phú Yên is the beef salad built around bò bắp — beef shank, the cut that contains the highest concentration of collagen-rich connective tissue in the animal, and that when properly cooked becomes one of the most satisfying textures in Vietnamese cooking. Bắp means the shank or leg, and the appeal of this cut is specific: the meat itself is lean and firm, with a slightly chewy texture that holds up to the acidic dressing without becoming soft, but the connective tissue between muscle groups melts during the long simmer into a gelatinous richness that coats the meat and the dressing together. When sliced thin and tossed with the sharp, peppery character of rau răm, the warm heat of fresh ginger julienned in quantity, the citrus of lemongrass, and the bright lime-fish sauce dressing — the result is a salad of unusual textural complexity where the beef is simultaneously lean and rich, the herbs are simultaneously sharp and fragrant, and the crackers alongside provide the crunch that completes the bowl. In Phú Yên, gỏi bò bắp is eaten as a nhậu dish — a beer food, shared at the center of a table with cold Saigon Beer and the specific sesame crackers of Tuy An district. It is also the salad that appears at family gatherings as a cold starter, prepared the night before because the beef slices more cleanly and takes the dressing more completely when fully cold. The muối lá é alongside — the pounded litsea leaf salt that appears throughout Phú Yên cooking — provides the aromatic dimension that distinguishes this from the same salad made anywhere else in Vietnam.`,
    ingredientSections: [
        {
            title: 'Beef shank',
            items: [
                { amount: 700, unit: 'g', name: 'beef shank (thịt bò bắp)', note: 'whole piece — not pre-cut. The whole shank holds together during the long simmer and slices more cleanly when cooled.' },
                { amount: 1.5, unit: 'L', name: 'water' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised — for the poaching liquid' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: '2 slices, smashed — for the poaching liquid' },
                { amount: 3, name: 'shallots', note: 'halved — for the poaching liquid' },
                { amount: 1.5, unit: 'tbsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Salad dressing',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice', note: 'about 2 limes' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'adds warmth and bridges the beef and herb flavors' },
            ],
        },
        {
            title: 'Salad components',
            items: [
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'peeled and finely julienned — used in larger quantity than most salads, a structural element not a garnish' },
                { amount: 2, name: 'lemongrass stalks', note: 'inner stalk only, very finely sliced into rings — paper thin' },
                { amount: 1, name: 'large bunch Vietnamese coriander (rau răm)', note: 'leaves only — the essential herb, used generously' },
                { amount: 3, name: 'shallots', note: 'thinly sliced, soaked in ice water 10 minutes and drained' },
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
            ],
        },
        {
            title: 'Muối lá é (Phú Yên litsea leaf salt)',
            items: [
                { amount: 15, unit: 'g', name: 'fresh lá é leaves', note: 'or substitute: 5 kaffir lime leaves + 5 rau răm leaves' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'sesame rice crackers (bánh tráng mè Tuy An)', note: 'Phú Yên sesame crackers — or any sesame rice crackers' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 1, name: 'bunch extra rau răm', note: 'served fresh alongside' },
            ],
        },
    ],
    steps: [
        {
            title: 'Simmer the beef shank — low and long',
            description: 'Place the whole beef shank in a pot. Cover with cold water. Bring to a boil and blanch 5 minutes — drain and rinse the shank and the pot. Return to the clean pot with 1.5L cold water, bruised lemongrass, ginger, halved shallots, salt, and sugar. Bring to a boil, reduce to the lowest possible simmer. Cook uncovered for 1.5-2 hours until completely tender — a chopstick passes through the thickest part without resistance and the collagen surrounding the muscle groups has fully melted.',
            tip: 'The shank must be genuinely tender — not just cooked through. Under-cooked bò bắp is tough and the collagen is still rubbery. The test: try to pull the muscle groups apart with two forks. They should separate easily when the shank is ready. If resistance, simmer 20 more minutes.',
        },
        {
            title: 'Cool completely before slicing',
            description: 'Remove the cooked shank from the broth and cool to room temperature — then refrigerate for minimum 2 hours, ideally overnight. Cold bò bắp slices cleanly and precisely; warm bò bắp shreds and tears. The collagen surrounding the meat sets in the refrigerator into a firmer, more stable matrix that allows the thin, clean slices the salad requires. Slice against the grain into rounds 3-4mm thick when fully cold.',
            tip: 'The overnight refrigeration is the step that separates a properly prepared gỏi bò bắp from a rushed one. Cold bò bắp sliced at 3mm is distinctly different from warm bò bắp torn apart — the texture in the final salad is firmer, the presentation is cleaner, and the dressing absorption is more controlled.',
        },
        {
            title: 'Prepare the lemongrass and ginger',
            description: 'Slice the lemongrass inner stalks into rings no thicker than 1mm — use a sharp knife or mandoline. The lemongrass rings must be paper-thin to be edible; thick lemongrass is fibrous and unpleasant. Julienne the ginger into the finest possible strips — thinner than a matchstick. Both lemongrass and ginger in this salad are present in quantity as structural flavor elements, not as light aromatics. They will be in every bite.',
            tip: 'If the lemongrass rings are thicker than 1mm they will be tough and spiky in the salad. Run a test piece between your teeth — if you feel fiber resistance, slice thinner. The lemongrass should be barely detectable as a texture and intensely detectable as a flavor.',
        },
        {
            title: 'Make the dressing',
            description: 'Combine fish sauce, lime juice, sugar, water, garlic, chili, and sesame oil. Stir until sugar dissolves. Taste alongside a slice of the cold beef — the dressing should be bright and balanced, with the lime clearly present and the sesame oil adding a warm background note. For gỏi bò bắp specifically, the dressing should have slightly more acid than for seafood salads — the dense beef absorbs it and the lime note needs to persist through the protein.',
            tip: 'The sesame oil in gỏi bò bắp dressing is more important than in seafood gỏi. The warm nuttiness of sesame bridges the bold beef and the sharp rau răm in a way that a purely fish sauce-lime dressing cannot.',
        },
        {
            title: 'Assemble — the bóp method',
            description: 'Combine the cold beef slices, finely sliced lemongrass, julienned ginger, soaked-and-drained shallots, and rau răm leaves in a wide bowl. Pour the dressing over. Using your hands, gently knead and fold the salad — the bóp technique used throughout Phú Yên salads — so the dressing penetrates the beef slices and the herbs bruise slightly and release their oils. Work for about 1 minute. Taste and adjust.',
            tip: 'The bóp technique on beef is gentler than on chicken — bò bắp slices are firm but can break if handled too aggressively. Fold and press rather than squeeze. The goal is to drive the dressing into the surfaces of each slice, not to compress the meat.',
        },
        {
            title: 'Plate and serve the Phú Yên way',
            description: 'Transfer to a serving plate. Top with crushed peanuts, crispy fried shallots, and toasted sesame seeds — all added last to preserve crunch. Make the muối lá é: pound lá é leaves with salt and pepper until the salt turns fragrant and green. Add sugar. Squeeze lime at the table. Arrange sesame crackers around the plate. To eat: lay a piece of beef on a sesame cracker with rau răm, dip in the lime-squeezed muối lá é, eat immediately.',
            tip: 'The muối lá é is not interchangeable with plain salt or nước chấm for this dish. The litsea leaf in the salt provides the aromatic counterpoint to the dense beef that is specifically Phú Yên — it is the same herb that appears in gà hấp lá é and gà nướng mọi. The province uses it throughout its cooking as a signature flavor that ties its dishes together.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}