'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'pho-bo-ha-noi',
    title: 'Authentic Hanoi Beef Pho',
    subtitle: `The real thing — a crystal-clear bone broth simmered for hours, silky rice noodles, paper-thin beef, and the exact spice bundle that makes Hanoi pho taste like Hanoi pho and nothing else.`,
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '5 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/pho-bo-ha-noi.webp',
    intro: `Phở bò Hà Nội is the most imitated Vietnamese dish in the world and the least often replicated correctly. The difference between a good bowl and a great one is almost entirely in the broth — specifically, in the patience required to make it. This recipe does not cut corners. It asks for 4 hours of simmering, properly blanched bones, correctly charred aromatics, and a spice bundle toasted until fragrant. The result is a broth so clear you can see the bottom of the bowl, so deeply savory it needs nothing added, so aromatic that your kitchen will smell like Hanoi at dawn. It is worth every minute.`,
    ingredientSections: [
        {
            title: 'The broth',
            items: [
                { amount: 1.5, unit: 'kg', name: 'beef marrow and knuckle bones', note: 'split — ask your butcher' },
                { amount: 500, unit: 'g', name: 'beef brisket or shank', note: 'whole piece, tied with string' },
                { amount: 3, unit: 'L', name: 'cold water' },
                { amount: 1, name: 'large yellow onion', note: 'halved, skin on' },
                { amount: 60, unit: 'g', name: 'fresh ginger', note: 'one large thumb, halved' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce', note: 'Phú Quốc brand preferred' },
                { amount: 2, unit: 'tbsp', name: 'rock sugar', note: 'or 1.5 tbsp regular sugar' },
                { amount: 1.5, unit: 'tsp', name: 'salt', note: 'adjust at end' },
            ],
        },
        {
            title: 'Spice bundle',
            items: [
                { amount: 5, name: 'star anise pods' },
                { amount: 1, name: 'cinnamon stick', note: '8 cm / 3 inch' },
                { amount: 4, name: 'whole cloves' },
                { amount: 1, name: 'black cardamom pod', note: 'thảo quả — crack open' },
                { amount: 2, unit: 'tsp', name: 'coriander seeds' },
                { amount: 1, unit: 'tsp', name: 'fennel seeds' },
            ],
        },
        {
            title: 'Noodles and beef',
            items: [
                { amount: 600, unit: 'g', name: 'fresh flat rice noodles (bánh phở)', note: 'or 400g dried — soak 30 min first' },
                { amount: 300, unit: 'g', name: 'beef eye of round or sirloin', note: 'for raw beef — freeze 20 min before slicing' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, name: 'small bunch cilantro', note: 'chopped' },
                { amount: 0.5, name: 'yellow onion', note: 'paper-thin slices, soaked in cold water 10 min' },
                { amount: 2, name: 'limes', note: 'cut in wedges' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'sliced — optional' },
                { amount: 200, unit: 'g', name: 'bean sprouts', note: 'Saigon style — omit for traditional Hanoi' },
                { amount: 1, name: 'bunch Thai basil', note: 'Saigon style only' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the bones (non-negotiable)',
            description: 'Place bones and brisket in a large pot. Cover with cold water. Bring to a hard boil and cook 10 minutes — you will see a lot of grey foam. Drain everything. Rinse each bone and piece of meat under cold running water, scrubbing off any residue. Wash the pot. This step is the entire reason authentic phở broth is crystal clear. Skip it and your broth will be murky and grey — no amount of skimming will fix it.',
            tip: 'Do not be tempted to skim instead of blanch. Blanching removes the proteins and blood that cause cloudiness at the source. Skimming only removes what has already floated up.',
        },
        {
            title: 'Char the aromatics',
            description: 'Hold the onion halves and ginger directly over a gas burner with tongs, cut-side down, until charred and blackened in spots — about 5 minutes per side. Alternatively, place cut-side up under a broiler at maximum heat for 10 minutes. The skins should blister and blacken. The interiors should soften. Do not rinse them — the char is exactly what you want.',
            tip: 'The char gives phở its characteristic sweet smokiness. Under-charred aromatics produce a flat, thin broth. You want genuine blackening, not just browning.',
        },
        {
            title: 'Toast the spice bundle',
            description: 'In a dry skillet over medium heat, add star anise, cinnamon, cloves, cardamom, coriander seeds, and fennel seeds. Toast for 2-3 minutes, shaking the pan constantly, until the spices are fragrant and slightly darkened. Watch carefully — they burn fast. Immediately transfer to a piece of cheesecloth or a tea strainer and tie into a bundle.',
            tip: 'Toasting unlocks the essential oils in the spices. Untoasted spices produce a one-dimensional, dusty broth. The smell when they toast correctly is unmistakable — you will know.',
        },
        {
            title: 'Build and simmer the broth',
            description: 'Return cleaned bones and brisket to the pot with 3 liters of cold water. Add the charred onion, charred ginger, and spice bundle. Bring to a gentle simmer — never a hard boil. Skim any foam that rises in the first 15 minutes. Reduce heat to the lowest setting that maintains a steady simmer and cook uncovered for 4 hours. After 1.5 hours, check the brisket — pierce with a chopstick. When it slides through easily, remove the brisket, plunge into cold water for 10 minutes (this keeps it juicy), then refrigerate until needed.',
            tip: 'A hard boil emulsifies the fat and bone marrow into the broth, turning it cloudy and greasy. A lazy simmer keeps it clear and clean. The temperature matters more than the time.',
        },
        {
            title: 'Strain and season the broth',
            description: 'After 4 hours, strain the broth through a fine-mesh sieve into a clean pot. Discard all solids — the bones have given everything. Add fish sauce, rock sugar, and salt. Taste carefully. The broth should be deeply savory from the fish sauce, subtly sweet from the sugar, with the spice and char as a background note. Adjust seasoning. Keep at a steady simmer while you prepare the bowls.',
            tip: 'Season gradually and taste after each addition. The fish sauce is doing most of the work — add it in 1 tbsp increments until the savory depth is right, then balance with sugar.',
        },
        {
            title: 'Prepare the raw beef',
            description: 'Take the beef eye of round or sirloin from the freezer (it should be firm but not frozen). Using your sharpest knife, slice against the grain as thin as possible — almost translucent. The slices should be no more than 2mm thick. The beef will cook in the bowl from the heat of the broth, so thinness is not optional — it is the entire technique.',
            tip: 'A sharp knife and semi-frozen beef is the only way to achieve true phở-thin slices at home. Fully thawed beef will slip and shred under the knife.',
        },
        {
            title: 'Cook the noodles',
            description: 'Bring a separate pot of water to a full boil. For fresh bánh phở: blanch for 30 seconds, drain. For dried noodles: cook according to package directions (usually 5-6 minutes), drain and rinse briefly with cold water. Divide the noodles among 4 deep bowls — each bowl needs a generous portion, the noodles are half the dish.',
            tip: 'Never cook the noodles in the broth. They release starch, cloud the broth, and absorb liquid unevenly. Always cook separately.',
        },
        {
            title: 'Assemble and serve',
            description: 'On top of the noodles in each bowl: a few slices of the reserved brisket, a portion of the raw beef slices laid flat, a scatter of spring onion, cilantro, and thin onion rings. Now bring the broth to a full rolling boil — not a simmer, a boil. Ladle the boiling broth generously over each bowl. The raw beef will turn pale pink within 10-15 seconds. Serve immediately with lime, chili, and herbs on the side. Eat it hot.',
            tip: 'The broth must be boiling when poured — this is what cooks the raw beef safely and instantly. A warm broth will leave the beef raw in the center. Bring it to a proper boil every time.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}