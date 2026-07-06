'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-cau-ham-thuoc-bac',
    title: 'Bồ Câu Hầm Thuốc Bắc (Pigeon Braised with Chinese Medicinal Herbs)',
    subtitle: 'Whole pigeon braised in a sealed clay pot with goji berries, red dates, dried longan, lotus seeds, and Shaoxing wine until the broth is dark, sweet, and deeply tonic — the Vietnamese-Chinese preparation eaten for strength, for recovery, and for the specific pleasure of a broth that has been building complexity for two hours.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/bo-cau-ham-thuoc-bac.jpg',
    intro: `Bồ câu hầm thuốc bắc is the pigeon braise that Vietnamese-Chinese families make when someone in the household needs strengthening — after illness, after childbirth, during examination periods, or simply because the weather has turned cold and the body is asking for something with more depth than ordinary food provides. Thuốc bắc literally means northern medicine — the dried medicinal herbs, roots, and fruits of the Chinese pharmacopoeia that appear in Vietnamese cooking as much as in Vietnamese medicine, the line between food and medicine being less defined in this tradition than in Western cooking. The specific herbs used in bồ câu hầm vary by household and by the specific tonic purpose — the version here uses the most accessible and most universally appreciated combination: goji berries (kỷ tử) for their sweetness and their antioxidant reputation; dried red dates (táo đỏ) for their specific honeyed sweetness and calming quality; dried longan flesh (long nhãn) for its mild sweetness and the specific depth it adds to braising liquids; fresh lotus seeds (hạt sen) for their starchiness and their gentle bitterness that balances the sweetness of the other herbs; and Shaoxing wine, which is not technically a herb but is as essential to the tonic character of the braise as any dried ingredient. The pigeon is the protein of choice for tonic cooking in both Vietnamese and Chinese traditions because pigeon meat is richer in protein and iron than chicken, has a specific dense, dark quality that chicken lacks, and produces a broth when braised that is darker and more complex than any chicken braise of equivalent simplicity. One pigeon per person is the serving size — not because the pigeon is large (it is not) but because the whole bird, eaten piece by piece over the course of the meal with the tonic broth poured over rice, constitutes a complete and deeply satisfying experience.`,
    ingredientSections: [
        {
            title: 'Pigeon',
            items: [
                { amount: 2, name: 'whole pigeons (bồ câu)', note: 'cleaned — about 400-500g each. Available at Vietnamese and Chinese markets. Squab (young pigeon) preferred — more tender and milder than older birds.' },
            ],
        },
        {
            title: 'Thuốc bắc (medicinal herbs)',
            items: [
                { amount: 3, unit: 'tbsp', name: 'goji berries (kỷ tử)', note: 'rinsed briefly' },
                { amount: 8, name: 'dried red dates (táo đỏ)', note: 'pitted or left whole — the pit can remain but pitting makes eating easier' },
                { amount: 20, unit: 'g', name: 'dried longan flesh (long nhãn)', note: 'adds the specific tonic sweetness' },
                { amount: 80, unit: 'g', name: 'fresh or dried lotus seeds (hạt sen)', note: 'embryo removed if using fresh. Dried: soaked 2 hours.' },
                { amount: 10, unit: 'g', name: 'dried lily buds (kim châm)', note: 'soaked 20 minutes, tough ends trimmed — optional but traditional' },
                { amount: 5, name: 'dried shiitake mushrooms', note: 'soaked 20 minutes, stems removed' },
            ],
        },
        {
            title: 'Braising liquid and aromatics',
            items: [
                { amount: 100, unit: 'ml', name: 'Shaoxing wine (rượu Thiệu Hưng)', note: 'drinking-grade, not salted cooking wine' },
                { amount: 400, unit: 'ml', name: 'water or light chicken stock' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 3, name: 'spring onions', note: 'tied in a bundle' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce (light)' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for searing' },
            ],
        },
        {
            title: 'Garnish and to serve',
            items: [
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'freshly ground over each bowl' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'drizzled at the end' },
                { amount: 2, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the pigeons',
            description: 'Place the whole pigeons in a pot of cold water. Bring to a boil and blanch for 5 minutes — the water will turn grey with the blood and impurities that make pigeon broth cloudy. Drain and rinse every surface of the birds thoroughly under cold running water. The blanched pigeons should smell clean and mildly of the bird — no blood, no strong smell. Pat completely dry.',
            tip: 'Blanching is more important for pigeon than for chicken — pigeon produces significantly more blood and impurities during blanching because its meat is darker and its blood is more abundant. A properly blanched and rinsed pigeon produces a clear, clean broth; a skipped or insufficient blanching produces a murky, slightly bitter one.',
        },
        {
            title: 'Sear until golden',
            description: 'Heat oil in a clay pot or heavy casserole over medium-high heat. Sear the blanched pigeons on all sides until golden — 8-10 minutes total, turning regularly. The sear caramelizes the skin and adds depth to the braising liquid that blanched-only pigeon cannot achieve. The skin should be golden-brown across most surfaces before the braising liquid goes in.',
            tip: 'The searing step after blanching is what distinguishes a restaurant-quality bồ câu hầm from a home version that merely braises without searing. The caramelized skin gives the broth a richer color and a roasted depth that transforms the tonic broth from clean and sweet to complex and warming.',
        },
        {
            title: 'Build the herb and braising liquid',
            description: 'Remove the pigeons briefly. Add the ginger slices and spring onion bundle to the pot and fry 1 minute. Pour in the Shaoxing wine — it will sizzle and the alcohol will begin evaporating. Return the pigeons to the pot. Add water or stock, fish sauce, soy sauce, sugar, and salt. Add all the dried herbs: red dates, longan, lotus seeds, lily buds, and soaked shiitake. The goji berries go in only in the last 20 minutes — added earlier they dissolve completely.',
            tip: 'Adding the goji berries in the last 20 minutes is the technique that preserves their appearance and their texture — small, plump, and visible in the finished broth. Added at the beginning they soften and disintegrate, flavoring the broth but disappearing visually. The visual of whole goji berries floating in the tonic broth is part of the presentation.',
        },
        {
            title: 'Braise sealed at low heat — 1 hour 20 minutes',
            description: 'Bring to a boil, reduce to the lowest possible simmer. Cover tightly — the seal is important for the tonic broth to develop. Braise for 1 hour without opening. At 1 hour, add the goji berries. Replace the lid and braise for a further 20 minutes. Total braising time: 1 hour 20 minutes. Open the lid: the broth should be dark amber, fragrant with the Shaoxing wine and the medicinal herbs, and the pigeon should be completely tender.',
            tip: 'The aroma when the lid is opened after 1 hour 20 minutes of sealed braising is one of the most distinctive in Vietnamese-Chinese cooking — the combination of Shaoxing wine, red dates, longan, and goji berries that has been building in the sealed environment produces a fragrance that is simultaneously sweet, winey, and deeply savory. This is the smell of tonic food.',
        },
        {
            title: 'Taste and adjust the tonic broth',
            description: 'Taste the broth carefully: it should be sweetly savory, with the red date and longan sweetness balanced by the Shaoxing wine and fish sauce depth. The lotus seeds should have softened to a slightly starchy, yielding texture. The specific quality of a correctly made tonic broth is warmth — not spice heat but a physical warmth that comes from the combination of ginger, wine, and the specific herbs. Adjust with a few more drops of fish sauce if needed.',
            tip: 'The sweetness of the tonic broth in bồ câu hầm is one of its defining characteristics — it should taste noticeably sweeter than most Vietnamese braising broths, from the combination of red dates, longan, and goji berries. This sweetness is deliberate and correct. Do not reduce the dates or longan to make it less sweet.',
        },
        {
            title: 'Serve whole birds with the tonic broth',
            description: 'Drizzle sesame oil over the pot. Scatter sliced spring onion, cilantro, and white pepper. Serve each pigeon whole in a deep bowl, ladle the tonic broth generously over and around it — ensuring the goji berries, lotus seeds, and dates are visible in each bowl. Serve with steamed rice. To eat: pull the pigeon apart at the joints with chopsticks — the meat should fall away from the bone. Alternate between eating the pigeon pieces and spooning the tonic broth over rice. The broth over rice is the most nourishing element of the meal.',
            tip: 'Serving the pigeon whole rather than pre-portioned is the traditional and correct presentation for bồ câu hầm thuốc bắc. The whole bird in the bowl is both more visually striking and more practical — the diner pulls pieces at their own pace, keeping the uneaten portions in the warm broth until ready.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
