'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'gio-thu',
    title: 'Giò Th? (Vietnamese Head Cheese)',
    subtitle: 'Pig head meat, ears, and tongue simmered until tender, mixed with wood ear mushrooms, glass noodles, and black pepper, then pressed tightly into banana leaf cylinders and chilled until the natural gelatin sets into a dense, sliceable terrine — the essential T?t preparation of northern Vietnam.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '6 hr + overnight chilling',
    rating: 4.9,
    baseServings: 10,
    heroImage: '/images/recipes/gio-thu.jpg',
    intro: `Giò th? is the Vietnamese head cheese — the preparation that transforms the most underutilized parts of the pig (head meat, ears, tongue, and skin) into one of the most refined cold cuts in Vietnamese cooking. The name giò means sausage or processed meat, and th? means head: giò from the head. It is made in large quantities in northern Vietnamese households in the week before T?t, shaped into cylinders wrapped in banana leaves and tied tightly with bamboo string, boiled until the natural gelatin in the pig's head has distributed through the mixture, then pressed under heavy weights overnight until the gelatin sets and the cylinder can be unwrapped, sliced, and eaten cold. The resulting slice is firm, glossy from the set gelatin, visibly studded with the dark pieces of wood ear mushroom and glass noodle, and tasting of concentrated pork, black pepper, and the specific earthy note of the wood ear. Giò th? is not a dish that can be rushed or simplified — the pig's head (or ear, tongue, and skin combination that approximates it) must be cleaned, blanched, simmered, and seasoned carefully at each stage. The banana leaf wrapping is not decorative: it imparts a specific green fragrance to the giò during boiling that is part of its taste. The pressing must be firm enough that the gelatin sets without air pockets. These are the variables of a T?t preparation that Vietnamese grandmothers have managed with complete certainty for generations and that anyone making it for the first time should approach with patience and a willingness to practice. The result — cold slices of giò th? alongside a bowl of hot ph? or with pickled vegetables on the T?t table — is one of the most specific and irreplaceable tastes of Vietnamese New Year.`,
    ingredientSections: [
        {
            title: 'Pork',
            items: [
                { amount: 1, unit: 'kg', name: 'pig ear (tai heo)', note: 'cleaned and hair-singed — or ask Asian butcher to prepare. Rich in collagen, produces the firm set gelatin.' },
                { amount: 500, unit: 'g', name: 'pig tongue (lu?i heo)', note: 'peeled after blanching — see step 2' },
                { amount: 300, unit: 'g', name: 'pig skin (da heo)', note: 'blanched and cut into thin strips — provides additional gelatin' },
                { amount: 300, unit: 'g', name: 'lean pork shoulder (th?t vai)', note: 'adds substance and meaty flavor to balance the collagen-rich head parts' },
            ],
        },
        {
            title: 'Aromatics for boiling',
            items: [
                { amount: 3, name: 'shallots', note: 'halved' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Mix-ins',
            items: [
                { amount: 40, unit: 'g', name: 'dried wood ear mushrooms (m?c nhi)', note: 'soaked 20 minutes, squeezed dry, finely julienned — the visual and textural signature of giò th?' },
                { amount: 30, unit: 'g', name: 'dried glass noodles (mi?n)', note: 'soaked 10 minutes, cut into 3cm pieces' },
                { amount: 4, name: 'shallots', note: 'thinly sliced, fried until crispy in oil — stirred into the mixture' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 2, unit: 'tsp', name: 'black pepper', note: 'coarsely ground — giò th? should taste assertively of black pepper' },
                { amount: 1, unit: 'tsp', name: 'white pepper' },
                { amount: 1, unit: 'tbsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Wrapping',
            items: [
                { amount: 8, name: 'large banana leaves', note: 'softened briefly over a flame or in boiling water until pliable — wiped clean. Or use aluminum foil as a substitute though the fragrance will be absent.' },
                { amount: 1, name: 'roll kitchen twine or bamboo string' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'head butter lettuce' },
                { amount: 3, unit: 'tbsp', name: 'pickled daikon and carrot (d? chua)', note: 'the essential accompaniment' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 3, unit: 'tbsp', name: 'soy sauce or nu?c ch?m', note: 'for dipping' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean and blanch all pork parts',
            description: 'Singe any remaining hair from the pig ears using a flame. Scrub the ears, tongue, and skin under cold water. Place all pork parts in a large pot of cold water, bring to a vigorous boil and blanch 10 minutes. Drain completely and rinse every piece. This removes impurities and the surface proteins that produce cloudiness and off-flavors. After blanching, peel the tongue: the rough outer membrane comes away easily when the tongue is still hot — peel while you can still handle it, not after it has cooled.',
            tip: 'Peeling the tongue must be done while hot — the membrane that needs removing clings tightly once cold and tearing it cold damages the flesh underneath. Have a bowl of cold water nearby to cool your hands while working on the hot tongue.',
        },
        {
            title: 'Simmer until each part is correctly tender',
            description: 'Return all blanched pork to a clean pot with shallots, ginger, lemongrass, fish sauce, salt, and sugar. Cover with cold water. Bring to a boil and reduce to a gentle simmer. Different parts reach the correct texture at different times — check every 20-30 minutes: pig skin done at 45-60 minutes (soft, translucent); pork shoulder done at 60-70 minutes (tender, sliceable); tongue done at 60-70 minutes (firm but yielding); ears done at 75-90 minutes (completely pliable, no resistance when bent). Remove each piece as it reaches the correct texture.',
            tip: 'The pig ear must be completely pliable — when you fold it double it should bend without any resistance or cracking. An under-cooked ear produces rubbery pieces in the giò that are unpleasant to eat and do not take the gelatin binder correctly.',
        },
        {
            title: 'Cool, slice, and julienne all components',
            description: 'Cool all cooked pork to room temperature, then refrigerate until firm enough to slice cleanly — at least 1 hour. Slice the pig ear into fine julienne strips 2-3mm wide and 3-4cm long. Slice the tongue into thin rounds, then julienne. Cut the skin into thin strips 5mm wide. Dice or shred the pork shoulder into rough pieces. All components should be roughly consistent in size so they distribute evenly through the giò.',
            tip: 'Julienning the pig ear finely is important — thick ear pieces are the most texturally challenging element for uninitiated eaters. Fine julienne distributes the ear throughout the mixture in a way that each slice contains it without any single piece being dominant.',
        },
        {
            title: 'Season and combine all components',
            description: 'In a large bowl, combine all the sliced and julienned pork with the julienned wood ear mushroom, drained glass noodle pieces, and crispy fried shallots. Season with fish sauce, sugar, black pepper, white pepper, and sesame oil. Toss thoroughly. Taste: the mixture should taste well-seasoned and assertively peppery — the flavors will mellow slightly during the final boiling and pressing. The black pepper should be clearly present in every mouthful.',
            tip: 'Season more assertively than seems necessary — the cooling and pressing process mellows the seasoning significantly. What tastes slightly over-peppered in the raw mixture will taste perfectly seasoned in the finished cold giò.',
        },
        {
            title: 'Wrap in banana leaves and boil',
            description: 'Lay two banana leaf sheets overlapping on a flat surface. Place a generous mound of the pork mixture in a line along the center of the leaves. Roll the leaves tightly around the mixture to form a cylinder 6-7cm in diameter. Tie firmly with kitchen twine at 3cm intervals — the ties must be tight enough to compress the mixture as it cooks. Place the cylinders in boiling water and boil for 45 minutes. The final boiling distributes the gelatin through the mixture and sets the cylinder shape.',
            tip: 'Tight rolling and tight tying are what produce a giò th? that slices cleanly rather than crumbling. Each tie should compress the leaf and the mixture inside — if the twine is loose the mixture expands unevenly during boiling and the cross-section looks messy.',
        },
        {
            title: 'Press overnight under heavy weight',
            description: 'Remove the cylinders from the boiling water. While still hot, wrap each cylinder in a cloth and place between two flat boards. Stack heavy weights on top — pots of water, books, anything that can apply sustained even pressure. Press at room temperature for 2 hours, then transfer to the refrigerator still under weight overnight. The pressing forces out any remaining air pockets and compresses the mixture as the gelatin sets. Unwrap the next day — the giò th? should be firm, cylindrical, and slice cleanly with a sharp knife.',
            tip: 'The pressing is as important as the boiling. Un-pressed giò th? has air pockets and a loose texture that crumbles when sliced. Pressed giò th? is dense, holds together completely, and has the characteristic firm, almost waxy cross-section of the authentic product.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
