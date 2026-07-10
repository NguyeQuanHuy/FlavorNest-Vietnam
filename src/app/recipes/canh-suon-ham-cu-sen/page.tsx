'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-suon-ham-cu-sen',
    title: `Pork Rib and Lotus Root Soup`,
    subtitle: `Canh Sườn Hầm Củ Sen — Slow-simmered pork ribs with lotus root, red dates, and goji berries — the Hoa community's nourishing soup eaten year-round in southern Vietnam.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '2 hrs 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Canh sườn hầm củ sen is the soup that most clearly expresses the Hoa (ethnic Chinese) community's contribution to southern Vietnamese daily cooking — a long-simmered pork rib broth enriched with lotus root (củ sen, Nelumbo nucifera rhizome), dried red dates (táo đỏ, Ziziphus jujuba), and goji berries (kỷ tử, Lycium chinense), producing a broth that is simultaneously a meal and a tonic — deeply nourishing in the Chinese medicinal food tradition, and deeply delicious in any tradition.\n\nThe lotus root is the centrepiece ingredient — the rhizome of the sacred lotus plant, harvested from ponds and slow-moving waterways throughout the Mekong Delta and the Red River Delta. When sliced crosswise, each section reveals 9-11 characteristic holes arranged in a ring around the central core — these air channels run the entire length of the rhizome and give the sliced lotus root its beautiful, lace-like cross-section. During the long simmer, the lotus root remains firm but yields to a pleasant crunch — it does not dissolve or become mushy even after 2 hours of cooking, a quality produced by its unique starch structure (lotus root starch is primarily amylose, the linear starch fraction that gelatinises slowly and resists softening under extended heating).\n\nThe red dates and goji berries are the tonic elements — both are standard ingredients in Chinese medicinal cooking, added to soups and braises for their documented nutritional properties (red dates for iron and zinc; goji berries for zeaxanthin, lutein, and vitamin C) as much as for their gentle sweetness. They contribute a mild fruity sweetness to the broth that balances the pork's richness without making the soup taste of fruit — at the quantities used, they are flavour amplifiers rather than primary ingredients.`,
    ingredientSections: [
        {
            title: `Main proteins and vegetables`,
            items: [
                { amount: 600, unit: 'g', name: `pork spare ribs (suon heo)`, note: `cut into 5cm sections — blanched and rinsed` },
                { amount: 400, unit: 'g', name: `fresh lotus root (cu sen tuoi)`, note: `peeled, sliced 1cm rounds — drop in acidulated water immediately to prevent browning; substitute: canned lotus root, drained` },
                { amount: 1, unit: 'L', name: `cold water` },
            ],
        },
        {
            title: `Tonic additions (the Hoa community touch)`,
            items: [
                { amount: 8, name: `dried red dates (tao do / Ziziphus jujuba)`, note: `rinsed — pitted or whole; iron and zinc source` },
                { amount: 2, unit: 'tbsp', name: `dried goji berries (ky tu / Lycium chinense)`, note: `rinsed — added in the last 20 minutes only; overcooking destroys zeaxanthin` },
                { amount: 20, unit: 'g', name: `dried lotus seeds (hat sen kho)`, note: `optional — soaked 2 hours, green germ removed` },
                { amount: 3, name: `slices dried astragalus root (hoang ky)`, note: `optional — the tonic herb that appears in most Hoa slow soups` },
            ],
        },
        {
            title: `Aromatics`,
            items: [
                { amount: 3, name: `slices fresh ginger` },
                { amount: 3, name: `shallots, halved` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 20, unit: 'g', name: `rock sugar (duong phen)`, note: `the gentle sweetener` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 1, name: `bunch cilantro or rau ram` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
            ],
        },
    ],
    steps: [
        {
            title: `Blanch and prepare the pork ribs`,
            description: `Place pork rib sections in a pot of cold water. Bring to a boil. Blanch 5 minutes, skimming foam continuously. Drain and rinse each rib section under cold running water — removing all visible blood and impurities. This blanching step is essential for the clear, clean broth that canh sườn hầm củ sen requires. Un-blanched ribs produce a cloudy, slightly murky broth with a stronger pork smell that overwhelms the delicate sweetness of the lotus root and dates.`,
        },
        {
            title: `Prepare the lotus root`,
            description: `Peel the lotus root using a vegetable peeler — remove the brown skin completely to reveal the white interior. Slice crosswise into 1cm rounds — each slice reveals the characteristic ring of air channels. Drop immediately into a bowl of cold water with a squeeze of lime or a splash of rice vinegar — lotus root oxidises rapidly when peeled, turning pinkish-brown within minutes. The acidulated water prevents oxidation and maintains the white, visually striking cross-section. Drain just before adding to the soup.`,
            tip: `The 9-11 air channels visible in each lotus root slice are not merely decorative — they are the anatomical reason lotus root maintains its texture through 2 hours of simmering. The channels are surrounded by thick-walled cells with a high proportion of amylose starch (the linear, slow-gelatinising starch) rather than the amylopectin (branched, fast-gelatinising) that makes potatoes and other root vegetables fall apart in prolonged cooking. This structural difference allows lotus root to be simmered for hours while remaining pleasantly firm — a quality that makes it ideal for slow soups where other vegetables would dissolve.`,
        },
        {
            title: `Build the broth`,
            description: `Combine blanched ribs, drained lotus root slices, dried red dates, lotus seeds (if using), astragalus slices (if using), ginger slices, and shallots in a large pot. Add 1L cold water. Bring to a boil, skim any remaining foam. Reduce to the lowest possible simmer. Cook uncovered for 90 minutes — the long slow simmer extracts maximum collagen from the ribs, dissolves the red dates into the broth, and allows the lotus root to absorb the surrounding flavour while maintaining its structure. Season with fish sauce, salt, and rock sugar after 90 minutes.`,
        },
        {
            title: `Add goji berries in the final 20 minutes`,
            description: `After 90 minutes of simmering, add the dried goji berries. Continue simmering for 20 more minutes — the goji berries will plump and release their mild fruity sweetness into the broth. Do not add the goji berries earlier: the zeaxanthin and lutein carotenoids responsible for much of their nutritional value degrade rapidly at simmering temperatures — at 20 minutes of simmering approximately 40% is retained; at 90 minutes only 15% remains. The 20-minute late addition is the tonic-preservation technique used in traditional Chinese medicinal soup cooking.`,
            tip: `The zeaxanthin timing is the food science that distinguishes the Hoa community's approach to tonic soup ingredients from casual addition. In Chinese medicinal food tradition, different ingredients are added at different points in a long-simmered soup based on their heat stability — dense, structure-providing ingredients (bones, lotus root, dates) go in first for full-time cooking; nutritionally sensitive ingredients (goji berries, leafy herbs) go in late to preserve their active compounds. This sequenced addition is not superstition but practical food science that predates modern nutrition science by centuries.`,
        },
        {
            title: `Taste and adjust`,
            description: `After the full 2+ hour simmer, taste the broth. It should be clear (or very lightly clouded from the lotus starch), golden-brown from the red dates, and taste simultaneously of pork richness, lotus root earthiness, and the gentle fruity sweetness of the dates and goji berries. The rock sugar provides background sweetness that should not be individually identifiable — if the soup tastes sweet, reduce the rock sugar for the next batch. The fish sauce provides the salinity that connects all the elements. The correct broth for canh sườn hầm củ sen is quieter and less assertive than most Vietnamese soups — this is intentional.`,
        },
        {
            title: `Serve the nourishing soup`,
            description: `Ladle into deep bowls — include rib sections, lotus root slices (2-3 per bowl), red dates, and goji berries in each serving. The broth should be generous. Scatter spring onion and coarse black pepper. Add cilantro or rau răm. Serve with steamed white rice. In southern Vietnamese Hoa households, canh sườn hầm củ sen is eaten at lunch on weekends and during recovery from illness — it is simultaneously a meal and a medicine in the Chinese medicinal food tradition where the distinction between the two is deliberately blurred. The lotus root slices at the bottom of the bowl, having absorbed 2 hours of pork-and-date broth, are the most flavourful element and are eaten last.`,
            tip: `Eating the lotus root slices last is the Hoa family eating practice for this soup — the lotus root, having spent the longest time in the broth of any ingredient, has absorbed the deepest concentration of pork collagen, date sweetness, and goji berry compounds. Each slice eaten last delivers the accumulated flavour of the entire soup in a single bite. Lotus root eaten first (before it has fully absorbed) tastes primarily of itself; eaten last it tastes of the entire soup's history.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}