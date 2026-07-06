'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'gio-heo-ham-mang-chua',
    title: 'Giò Heo H?m Mang Chua (Pork Hock Braised with Sour Bamboo Shoots)',
    subtitle: 'A whole pork hock braised low and slow in a clay pot with sour fermented bamboo shoots from the Phú Yên mountains until the collagen renders completely and the bamboo acidity drives into the richest pork braise in Vietnamese mountain cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '3 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/gio-heo-ham-mang-chua.jpg',
    intro: `Giò heo h?m mang chua is the braise of the inland Phú Yên mountains — a dish made in the communities of Son Hòa, Sông Hinh, and the highland valleys where both the bamboo that grows on the hillsides and the pigs raised in the yards are the primary sources of protein and flavor. Mang chua — sour fermented bamboo shoots — are not the same as fresh bamboo or dried bamboo. They are bamboo shoots that have been fermented in brine for days or weeks, developing a lactic sourness and a depth of flavor that raw or dried bamboo cannot approach. The fermentation produces the same class of compounds found in kimchi, sauerkraut, and other traditional preserved vegetables — lactic acid, complex amino acids, and a funky depth that is unmistakably fermented. When these sour bamboo shoots are combined with a whole pork hock — the collagen-rich, gelatinous cut that responds better to slow braising than any other — in a sealed clay pot over very low heat for three hours, the bamboo sourness gradually penetrates the pork as the pork collagen dissolves into the braising liquid, which thickens and becomes something between a broth and a sauce. The pork hock skin, by the end, is trembling and translucent. The bamboo is completely tender and has absorbed the pork richness. The braising liquid is simultaneously sour, rich, and deeply savory. In Phú Yên's highland communities, this dish is the cold-season meal — made when the rain comes in October and the mountain air drops and something with this much collagen and this much depth is what the body asks for.`,
    ingredientSections: [
        {
            title: 'Pork hock',
            items: [
                { amount: 1, name: 'whole pork hock (giò heo), 1-1.2kg', note: 'front hock preferred — more collagen than rear. Ask butcher to score the skin in a crosshatch pattern to allow the braising liquid to penetrate.' },
            ],
        },
        {
            title: 'Sour bamboo shoots',
            items: [
                { amount: 400, unit: 'g', name: 'sour fermented bamboo shoots (mang chua)', note: 'available at Vietnamese grocery stores in jars or vacuum packs. Rinse once under cold water. Do not squeeze out all the sour liquid — some of the fermented character should remain. If unavailable: combine 300g canned bamboo shoots with 3 tbsp rice vinegar and leave 30 minutes. Different flavor but similar acidity.' },
            ],
        },
        {
            title: 'Aromatics and braising liquid',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and cut into 5cm pieces' },
                { amount: 5, name: 'garlic cloves', note: 'lightly smashed, kept whole' },
                { amount: 4, name: 'shallots', note: 'halved' },
                { amount: 3, name: 'fresh red chilies', note: 'halved lengthwise — one minced for the braise, two left as halves for serving' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '4 slices, smashed' },
                { amount: 400, unit: 'ml', name: 'water', note: 'just enough to come halfway up the hock — this is a semi-dry braise' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground over each bowl' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch and sear the pork hock',
            description: 'Place the pork hock in cold water, bring to a vigorous boil and blanch for 10 minutes. Drain and rinse thoroughly. Pat dry. Heat oil in the clay pot or heavy casserole over medium-high heat. Sear the hock on all sides — 3-4 minutes per side until golden. The sear caramelizes the skin surface and adds depth to the braising liquid. Remove and set aside briefly.',
            tip: 'Searing the hock after blanching (not instead of blanching) produces the best result — clean meat from blanching, caramelized surface from searing. Both steps serve different purposes and cannot replace each other.',
        },
        {
            title: 'Build the aromatic base',
            description: 'In the same clay pot over medium heat, fry the lemongrass, garlic, shallots, ginger, and minced chili in the remaining oil for 3 minutes until golden and deeply fragrant. The clay pot base should smell intensely of lemongrass and ginger before anything else goes in. This aromatic foundation is what distinguishes Phú Yên braising from simpler preparations.',
            tip: 'The clay pot surface retains aromatic compounds from previous cooking — if this is not the first time using the pot, it already carries history. This is why clay pot cooking improves over time and why experienced Phú Yên cooks treasure their old clay pots.',
        },
        {
            title: 'Layer the mang chua and return the hock',
            description: 'Spread the rinsed sour bamboo shoots over the aromatic base in the pot. Place the seared pork hock on top of the bamboo — the hock sits on a bed of bamboo shoots rather than directly on the clay. Pour water around the sides. Add fish sauce, sugar, and black pepper. The liquid should come about halfway up the hock. Bring to a boil.',
            tip: 'The bamboo shoot bed under the hock is the technique that prevents the skin from sticking to the clay and allows the braising liquid to circulate under the hock as well as around and above it. Every surface of the hock should have contact with either the braising liquid or the steam it generates.',
        },
        {
            title: 'Braise sealed at the lowest heat — 2 to 2.5 hours',
            description: 'Reduce heat to the absolute lowest setting. Cover the clay pot tightly — use a sheet of baking paper under the lid to improve the seal if the lid does not fit perfectly. Braise for 2 to 2.5 hours without opening. The sealed environment builds pressure slightly and drives the bamboo sourness into the pork while the collagen from the hock dissolves into the braising liquid. Check once at the 1.5-hour mark — add 3-4 tablespoons of water if the liquid has reduced too much.',
            tip: 'The sealed lid for the full cooking time is the principle of h?m cooking — the steam cannot escape and continuously bastes the upper portion of the hock while the lower portion braises in the liquid. Opening the lid even once disrupts this environment significantly and extends the cooking time.',
        },
        {
            title: 'Test and finish',
            description: 'After 2.5 hours, open the lid carefully — the steam is very hot. Test the hock: the skin should be trembling, completely translucent, and yield with almost no pressure. Pierce the thickest meat — the chopstick should enter and exit with no resistance. The braising liquid should be thick enough to coat a spoon and taste simultaneously sour from the bamboo, rich from the pork collagen, savory from the fish sauce, and fragrant from the lemongrass. Taste and adjust with a few more drops of fish sauce if needed.',
            tip: 'Trembling skin is the specific visual indicator of a correctly braised pork hock — it moves when the pot is gently shaken. Skin that is merely soft has more cooking ahead. Trembling skin means the collagen has completely converted to gelatin and the hock is done.',
        },
        {
            title: 'Serve from the clay pot',
            description: 'Bring the clay pot directly to the table — the retained heat keeps everything warm throughout the meal. Scatter spring onion and cilantro over the top. Grind black pepper generously over the surface. Serve with steamed jasmine rice, lime wedges, and sliced fresh chili alongside. To eat: pull the hock apart at the table — the meat separates easily from the bone. Spoon the bamboo shoots and braising liquid generously over rice. The liquid soaking into the rice is the best element of the meal.',
            tip: 'The braising liquid poured over rice is where the full complexity of giò heo h?m mang chua reveals itself — the lactic sourness of the bamboo, the pork gelatin, the lemongrass oil — all concentrated and absorbed into plain rice. Serve the liquid as generously as the meat.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
