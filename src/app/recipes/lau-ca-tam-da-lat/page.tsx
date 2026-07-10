'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'lau-ca-tam-da-lat',
    title: `Đà Lạt Sturgeon Hotpot`,
    subtitle: `Lẩu Cá Tầm Đà Lạt — Highland sturgeon simmered at the table in a lemongrass-tomato broth with Đà Lạt vegetables and rice noodles.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Lẩu cá tầm Đà Lạt is the premium communal dish of the highland city — a hotpot built around live-farmed sturgeon from the cold lakes and rivers of Lâm Đồng province, cooked at the table in a fragrant lemongrass and tomato broth that is simultaneously light enough to let the sturgeon's natural sweetness dominate and complex enough to make the broth worth drinking as a soup in its own right.\n\nThe dish emerged in the early 2010s as Đà Lạt's sturgeon farming industry matured and restaurants around Tuyền Lâm lake began competing to create signature preparations. Lẩu — the communal hotpot format — was the natural choice because it preserves the texture of sturgeon better than any single-cooking-method preparation: each diner controls exactly how long their piece of fish spends in the broth, and sturgeon cooked for precisely 2-3 minutes in a simmering broth retains the firm, slightly gelatinous texture and rendered fat that makes it the most luxurious freshwater fish in Vietnam.\n\nWhat distinguishes lẩu cá tầm Đà Lạt from other Vietnamese fish hotpots is the vegetable selection: entirely highland produce grown in the cool Lâm Đồng climate — Đà Lạt cabbage, broccoli, kohlrabi, watercress, and the various lettuces that grow year-round at altitude. These vegetables have a sweetness and tenderness that lowland-grown equivalents lack, and they cook faster in hot broth, releasing their natural sugars into the liquid and progressively sweetening the broth as the meal advances. By the final rounds of a lẩu cá tầm meal, the broth has become a light vegetable and fish consommé of considerable complexity — drunk from small bowls as the meal's close.`,
    ingredientSections: [
        {
            title: `Sturgeon`,
            items: [
                { amount: 800, unit: 'g', name: `fresh sturgeon fillet (ca tam Da Lat)`, note: `skin-on, sliced 1.5cm thick across the body; substitute: large catfish or barramundi fillet` },
                { amount: 1, unit: 'tsp', name: `rice wine`, note: `tossed with sliced fish, rested 5 min, rinsed` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Lemongrass-tomato hotpot broth (nuoc lau)`,
            items: [
                { amount: 600, unit: 'g', name: `fish bones and head (xuong ca)`, note: `from the sturgeon or any white fish — blanched and rinsed` },
                { amount: 3, name: `lemongrass stalks, bruised and knotted` },
                { amount: 4, name: `kaffir lime leaves, torn` },
                { amount: 3, name: `medium tomatoes, quartered` },
                { amount: 3, name: `shallots, halved and charred` },
                { amount: 30, unit: 'g', name: `fresh galangal, sliced` },
                { amount: 2, name: `bird's eye chili, whole` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 20, unit: 'g', name: `rock sugar (duong phen)` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 2, unit: 'L', name: `water` },
                { amount: 1, unit: 'tbsp', name: `annatto oil (dau mau dieu)`, note: `for colour — heat 2 tbsp oil with 1 tsp annatto seeds until orange, strain` },
            ],
        },
        {
            title: `Đà Lạt highland vegetables (rau Da Lat)`,
            items: [
                { amount: 200, unit: 'g', name: `Da Lat cabbage (bap cai Da Lat)`, note: `cut into wedges — sweeter than lowland cabbage` },
                { amount: 150, unit: 'g', name: `broccoli (bong cai xanh)`, note: `cut into florets` },
                { amount: 150, unit: 'g', name: `kohlrabi (su hao)`, note: `peeled and sliced thin` },
                { amount: 100, unit: 'g', name: `watercress (rau cai xoong)`, note: `grown in Đà Lạt highland streams` },
                { amount: 100, unit: 'g', name: `Da Lat butter lettuce (xa lach Da Lat)`, note: `leaves separated` },
                { amount: 150, unit: 'g', name: `enoki mushrooms (nam kim cham)`, note: `roots trimmed` },
                { amount: 100, unit: 'g', name: `oyster mushrooms (nam so)`, note: `torn into pieces` },
            ],
        },
        {
            title: `Noodles and tofu`,
            items: [
                { amount: 300, unit: 'g', name: `fresh rice vermicelli (bun tuoi)`, note: `or glass noodles (mien)` },
                { amount: 200, unit: 'g', name: `soft tofu (dau hu mem)`, note: `cut into 3cm cubes` },
            ],
        },
        {
            title: `Dipping sauce (muoi tieu chanh Da Lat)`,
            items: [
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, unit: 'tbsp', name: `fresh lime juice` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 1, unit: 'tsp', name: `sugar` },
            ],
        },
    ],
    steps: [
        {
            title: `Build the highland broth`,
            description: `Blanch fish bones in boiling water 5 minutes, drain and rinse clean. Char shallot halves cut-side down over gas flame until blackened on the flat surface. Combine bones, charred shallots, bruised lemongrass, torn kaffir lime leaves, galangal slices, whole chili, and quartered tomatoes in a stockpot with 2 L cold water. Bring to a boil, skim foam for 10 minutes, reduce to a steady simmer. Cook uncovered 45 minutes. Strain through a fine mesh sieve, pressing all solids. Season with fish sauce, rock sugar, and salt. Add annatto oil for the characteristic orange-red colour. Taste — the broth should be aromatic with lemongrass and kaffir lime, faintly sweet from the tomato and rock sugar, savoury from the fish bones. Transfer to the hotpot vessel.`,
            tip: `The tomatoes in lẩu cá tầm Đà Lạt broth serve two functions: colour and natural sweetness. Đà Lạt is one of Vietnam's primary tomato-growing regions — the highland tomatoes are smaller, redder, and sweeter than lowland varieties. If using German greenhouse tomatoes (which are generally sweeter than Vietnamese lowland varieties), reduce the rock sugar by half and taste before adding more.`,
        },
        {
            title: `Prepare the sturgeon slices`,
            description: `Toss sturgeon slices with rice wine and salt, rest 5 minutes, then rinse and pat completely dry. Arrange on a cold plate in a single layer — the fish should remain chilled until it goes into the broth. Sturgeon slices for hotpot should be 1.5cm thick: thin enough to cook through in 2-3 minutes, thick enough to remain in one piece when retrieved with a slotted spoon. Thinner slices overcook before they can be retrieved; thicker slices require longer submersion and become rubbery at the edges before the centre cooks through.`,
            tip: `The skin should remain on the sturgeon slices for lẩu. During the 2-3 minute broth submersion, the skin releases collagen into the surrounding liquid — a tiny but measurable contribution to the broth's body that accumulates over many rounds of cooking. By mid-meal, the broth will have a faint silkiness that was not present at the start. This is the skin's contribution.`,
        },
        {
            title: `Prepare all vegetables and set the table`,
            description: `Cut all vegetables and arrange on plates by cooking time: longest first (kohlrabi, broccoli, cabbage), medium (mushrooms, tofu), shortest (watercress, lettuce). Arrange the cold plate of sturgeon slices. Place fresh rice vermicelli in a bowl of cold water to prevent clumping. Set up the portable burner at the centre of the table, place the hotpot vessel on it, and bring the broth to a simmer over medium heat. Place the dipping sauce in individual small bowls. Set out soup bowls and chopsticks for each person.`,
        },
        {
            title: `Make the dipping sauce`,
            description: `Combine coarse salt, coarsely ground black pepper, lime juice, sliced chili, and sugar in a small bowl. Stir until salt and sugar dissolve. The muối tiêu chanh Đà Lạt differs from the coastal version by the addition of a small amount of sugar — the highland version is slightly rounder and less sharp than the purely saline coastal preparation, calibrated against the sweeter highland vegetables that are eaten alongside the fish. Make immediately before serving.`,
        },
        {
            title: `Cook in the correct order`,
            description: `Begin with the longest-cooking vegetables: add kohlrabi and broccoli florets to the simmering broth first — they need 4-5 minutes. Then add cabbage wedges (3-4 minutes), mushrooms and tofu (2-3 minutes). The sturgeon slices go in last, in small batches: lower 3-4 slices gently into the broth and cook exactly 2-3 minutes. The flesh should be just opaque through the full thickness with the skin slightly translucent. Retrieve with a flat spoon or spider strainer. Add vermicelli directly to the broth in the final rounds — cook 1 minute and retrieve.`,
            tip: `The sturgeon timing is 2 minutes for 1.5cm slices in a properly simmering (not boiling) broth. A rolling boil breaks the delicate flesh apart before it is retrieved. Maintain the broth at a gentle simmer — steady small bubbles, not vigorous rolling. Each diner is responsible for their own timing: drop the fish, count to 120, retrieve. This individual control is the social mechanic that makes lẩu a communal meal rather than a served one.`,
        },
        {
            title: `Drink the final broth`,
            description: `When all the fish and vegetables have been eaten, the remaining broth in the pot will have transformed — enriched with sturgeon collagen from the skin, sweetened by the highland cabbage and kohlrabi, deepened by the accumulated fish and mushroom releases. Add any remaining vermicelli to the broth and cook 1 minute. Ladle into bowls for each person. This final broth is drunk as the meal's closing course. In Đà Lạt restaurants, the waiter replenishes the broth with additional stock midway through the meal to prevent it from reducing too far — at home, keep a small pot of hot water or light stock nearby to add as needed.`,
            tip: `The broth progression in lẩu cá tầm Đà Lạt follows the same self-seasoning logic as lẩu thả Phan Thiết — the liquid that ends the meal is a different and more complex liquid than the one that began it. Đà Lạt locals describe the final broth as "nước lẩu ngọt" (sweet hotpot water) — the natural sugars of the highland vegetables and the collagen of the sturgeon skin have made it genuinely sweet without any added sweetener beyond the initial rock sugar.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}