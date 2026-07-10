'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'lau-bo-tay-nguyen',
    title: `Central Highlands Beef Hotpot`,
    subtitle: `Lẩu Bò Tây Nguyên — Highland grass-fed beef simmered at the table in a lemongrass-mắc khén broth with forest mushrooms and highland vegetables.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Lẩu bò Tây Nguyên is the communal hotpot of Đắk Lắk's highland ranching communities — a dish built around the grass-fed beef raised on the open plateaus and savanna grasslands of the Ea Súp, Buôn Đôn, and Cư M'Gar districts, where large-scale cattle ranching has been practiced since the French colonial era introduced Zebu crossbreeds to the highlands. The beef here is leaner, darker, and more intensely flavoured than lowland cattle raised in feedlots — the constant grazing on highland grasses, wild herbs, and mineral-rich volcanic soil produces a depth of flavour that the same cut from commercial cattle does not have.\n\nThe broth is the most distinctly highland element of the dish: built on lemongrass, galangal, mắc khén, and roasted shallots rather than the tomato-and-annatto base of southern Vietnamese bò nhúng dấm or the fermented shrimp broth of Central Vietnamese lẩu. Mắc khén is added in two forms — whole toasted berries simmered in the broth for fragrance, and crushed berries in the dipping salt for the numbing tingle at the moment of eating. Forest mushrooms (nấm mối, nấm tràm) from the surrounding deciduous forests are added to the broth as it simmers, contributing an earthy depth that intensifies over the course of the meal.\n\nThe dish is eaten at highland ranching community gatherings — the beef is sliced thin and cooked briefly in the simmering broth at the table, 30-45 seconds per slice, then dipped in the mắc khén salt and eaten with sticky rice. The broth accumulates beef, mushroom, and herb flavour across the meal and is drunk at the end as a rich, complex consommé.`,
    ingredientSections: [
        {
            title: `Beef`,
            items: [
                { amount: 600, unit: 'g', name: `highland grass-fed beef (bo Tay Nguyen)`, note: `sirloin or beef tenderloin — sliced 2mm thin across the grain; refrigerate until moment of serving; substitute: any grass-fed beef, sliced thin` },
                { amount: 200, unit: 'g', name: `beef brisket (uc bo)`, note: `simmered in broth 45 min before serving — adds body and collagen` },
            ],
        },
        {
            title: `Highland broth (nuoc lau Tay Nguyen)`,
            items: [
                { amount: 800, unit: 'g', name: `beef bones (xuong bo)`, note: `roasted at 220°C 25 min until deep brown — the Maillard-roasted bone broth base` },
                { amount: 4, name: `lemongrass stalks, bruised and knotted` },
                { amount: 40, unit: 'g', name: `fresh galangal, sliced thick` },
                { amount: 1.5, unit: 'tbsp', name: `mac khen berries, whole toasted`, note: `simmered in broth — fragrance, not direct tingle` },
                { amount: 4, name: `shallots, halved and charred` },
                { amount: 3, name: `garlic cloves, smashed` },
                { amount: 2, name: `star anise` },
                { amount: 1, name: `cinnamon stick, 5cm` },
                { amount: 2, unit: 'tbsp', name: `fish sauce` },
                { amount: 20, unit: 'g', name: `rock sugar` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 2.5, unit: 'L', name: `water` },
            ],
        },
        {
            title: `Forest mushrooms and vegetables`,
            items: [
                { amount: 150, unit: 'g', name: `fresh or dried forest mushrooms (nam moi, nam tram, or shiitake)`, note: `simmered in broth from the start — contribute earthy depth throughout meal` },
                { amount: 150, unit: 'g', name: `enoki mushrooms (nam kim cham)`, note: `added at table during eating` },
                { amount: 200, unit: 'g', name: `Da Lat cabbage or highland cabbage`, note: `cut into wedges` },
                { amount: 150, unit: 'g', name: `watercress (rau cai xoong)` },
                { amount: 200, unit: 'g', name: `firm tofu (dau hu chac)`, note: `cut into 3cm cubes` },
                { amount: 300, unit: 'g', name: `fresh rice noodles (bun tuoi) or glass noodles (mien)` },
            ],
        },
        {
            title: `Mắc khén dipping salt (muoi mac khen)`,
            items: [
                { amount: 1.5, unit: 'tbsp', name: `mac khen berries, toasted and crushed fine` },
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 2, name: `bird's eye chili, minced` },
            ],
        },
        {
            title: `Herb plate`,
            items: [
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 1, name: `bunch ngo gai (sawtooth coriander)` },
                { amount: 2, name: `limes, wedged` },
                { amount: 150, unit: 'g', name: `bean sprouts, raw` },
            ],
        },
    ],
    steps: [
        {
            title: `Roast the bones for deep broth`,
            description: `Preheat oven to 220°C. Arrange beef bones in a single layer in a roasting pan. Roast 25-30 minutes until deeply browned on all sides — the bones should be close to dark brown, not pale gold. This deep roasting creates Maillard reaction compounds on the bone surface that dissolve into the broth and give the Tây Nguyên lẩu its distinctive dark, rich character compared to the pale fish broths of coastal lẩu. Transfer roasted bones to a stockpot. Deglaze the roasting pan with 200ml water, scraping up all browned bits — add this liquid to the pot.`,
            tip: `The bone-roasting step is what distinguishes lẩu bò Tây Nguyên from other Vietnamese beef hotpots. Southern bò nhúng dấm uses a vinegar-pineapple broth; central lẩu uses fish broth. The highland version uses roasted bone stock because highland cattle ranching communities have always had access to beef bones and the Ê Đê tradition of slow-cooking over wood fire naturally produces the deep bone broth that requires long, high heat.`,
        },
        {
            title: `Build the broth — 90 minutes`,
            description: `Add charred shallots, bruised lemongrass, galangal, whole toasted mắc khén berries, smashed garlic, star anise, and cinnamon to the bone pot. Add 2.5 L cold water. Bring to a boil, skim foam thoroughly for the first 15 minutes, then reduce to the lowest possible simmer. Add forest mushrooms — they will simmer for the full 90 minutes, releasing their earthy compounds progressively into the broth. Add brisket pieces for the final 45 minutes. After 90 minutes total, remove brisket (slice thin for serving), strain broth through a fine sieve, and season with fish sauce, rock sugar, and salt.`,
        },
        {
            title: `Make the mắc khén dipping salt`,
            description: `Combine finely crushed mắc khén, coarse salt, sugar, lime juice, and minced chili in a small bowl. Stir until salt and sugar dissolve. The salt should produce an immediate numbing tingle — within 5 seconds of touching the tongue. The tingle amplifies the perception of the beef's natural sweetness and the broth's earthy depth in every dipped bite. Make immediately before serving; the mắc khén volatile compounds dissipate within 30 minutes of crushing.`,
        },
        {
            title: `Slice the beef paper-thin`,
            description: `Keep beef refrigerated until the moment of slicing. Partially freeze for 20 minutes if it is difficult to slice thinly — semi-frozen beef slices cleanly at 2mm without tearing. Slice across the grain at 2mm thickness. The grain direction matters: across-the-grain slices are shorter and more tender in the finished bite; along-the-grain slices are longer and chewier. For lẩu bò Tây Nguyên, across-the-grain is standard — the brief 30-45 second cook time means the meat should be as tender as possible when it reaches the diner. Arrange on a cold plate and return to refrigerator until the broth is at the table and simmering.`,
        },
        {
            title: `Set up the table`,
            description: `Transfer strained broth to a hotpot vessel on a portable burner at the centre of the table. Bring to a simmer. Arrange around it: cold plate of sliced beef and sliced brisket; vegetables and mushrooms; tofu; noodles in cold water; herb plate; individual bowls of mắc khén dipping salt; lime wedges. Each person has their own soup bowl and chopsticks. The meal begins when the broth reaches a visible simmer.`,
        },
        {
            title: `Cook and eat in the highland rhythm`,
            description: `Add forest vegetables and mushrooms to the simmering broth first — they take 3-5 minutes. Then add beef slices in small batches: lower 3-4 slices into the broth, count 30 seconds for rare, 45 seconds for medium. Retrieve immediately with chopsticks. Dip in mắc khén salt and eat with herbs and sticky rice. The tingle from the dipping salt should arrive before the beef flavour and linger after the bite is swallowed. Add noodles in the final rounds — cook 1 minute and retrieve. The broth deepens and enriches across the meal as beef, mushroom, and vegetable compounds accumulate.`,
            tip: `The mắc khén dipping salt is eaten differently from the liquid dipping sauces of other Vietnamese hotpots. The beef slice is dipped so that the crushed mắc khén granules adhere to the wet meat surface — they do not dissolve like a sauce but sit as particles that deliver their numbing compound as the meat is chewed. This physical-contact tingle delivery is specific to the highland dry salt format and produces a different eating experience than a liquid mắc khén sauce would.`,
        },
        {
            title: `Drink the final broth`,
            description: `At the end of the meal, the broth will have become a rich, layered consommé — dark from the roasted bones, earthy from the forest mushrooms, fragrant with lemongrass and mắc khén, enriched with beef collagen and fat. Ladle into small bowls and drink slowly, without speaking, as the meal's close. In Đắk Lắk highland ranching communities, the final broth is considered the meal's most honest expression — the accumulated flavour of everything cooked in it, undiluted and direct. Squeeze a final wedge of lime into the bowl. Add nothing else.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}