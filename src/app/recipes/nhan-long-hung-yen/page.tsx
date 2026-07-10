'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nhan-long-hung-yen',
    title: `Hưng Yên Longan Desserts`,
    subtitle: `Nhãn Lồng Hưng Yên — Three preparations from Vietnam's most prized longan: fresh fruit, slow-dried longan, and longan sweet soup — the Red River Delta's summer treasure.`,
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '4 hrs',
    rating: 4.9,
    baseServings: 6,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Nhãn lồng Hưng Yên (Dimocarpus longan var. — the Hưng Yên longan variety) is the fruit that has made Hưng Yên province famous throughout Vietnam and beyond — a specific cultivar of the longan tree grown in the alluvial soil of the Red River Delta whose fruit is considered the finest longan in the world by Vietnamese connoisseurs, superior in flavour and texture to the longan grown in any other province or country. The nhãn lồng distinction from standard longan is immediately apparent: the fruit is larger, the shell thinner and more fragrant, the flesh thicker, whiter, and more translucent, and the flavour dramatically more intense — a honey-musky sweetness with floral notes that the generic longan of export markets cannot approach.\n\nThe name nhãn lồng (literally "cage longan" or "lantern longan") refers to the fruit's appearance when the thin shell is peeled away — the white, translucent flesh surrounds the dark seed like a paper lantern surrounding a candle, glowing slightly when held to light. This visual quality — the translucency of the flesh — is one of the indicators of the nhãn lồng variety's superior quality: the high sugar content (22-26% Brix in peak season, compared to 15-18% for standard longan) produces a denser, more optically active flesh that scatters light differently than lower-sugar varieties.\n\nHưng Yên's longan season runs from late June through August, and during these weeks the province transforms around the nhãn lồng harvest — the trees heavy with fruit, the markets overflowing, and the roadside stalls selling fresh longan, dried longan (long nhãn — the TCM ingredient), and longan sweet soup (chè nhãn) to travellers on the highway between Hà Nội and Hải Phòng. This recipe documents three preparations: the correct way to eat fresh nhãn lồng, the slow-drying method for long nhãn, and the chè nhãn sweet soup that uses both fresh and dried longan together.`,
    ingredientSections: [
        {
            title: `Fresh nhãn lồng`,
            items: [
                { amount: 500, unit: 'g', name: `fresh nhan long Hung Yen longan`, note: `in shell — the shell should be thin, slightly rough-textured, and smell faintly sweet when scratched; substitute: the freshest longan available from Chinese or Vietnamese grocers in Germany` },
            ],
        },
        {
            title: `Long nhãn (slow-dried longan — home method)`,
            items: [
                { amount: 500, unit: 'g', name: `fresh longan`, note: `shell-on — for drying` },
                { amount: 1, name: `oven or food dehydrator`, note: `set to 50-55°C` },
                { amount: 48, unit: 'hrs', name: `drying time`, note: `at 50-55°C — traditional method uses 3-4 days of sun and smoke` },
            ],
        },
        {
            title: `Chè nhãn (longan sweet soup)`,
            items: [
                { amount: 200, unit: 'g', name: `fresh longan flesh (nhan tuoi)`, note: `peeled and deseeded` },
                { amount: 30, unit: 'g', name: `long nhan (dried longan flesh)`, note: `soaked 20 minutes in warm water` },
                { amount: 30, unit: 'g', name: `dried lotus seeds (hat sen kho)`, note: `soaked 2 hours, green germ removed` },
                { amount: 20, unit: 'g', name: `dried white wood ear fungus (nam bac)`, note: `soaked 20 minutes, torn into pieces` },
                { amount: 700, unit: 'ml', name: `water` },
                { amount: 60, unit: 'g', name: `rock sugar (duong phen)` },
                { amount: 2, name: `pandan leaves (la dua)`, note: `tied in a knot` },
                { amount: 0.25, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Chè nhãn finish`,
            items: [
                { amount: 150, unit: 'ml', name: `coconut cream (kem dua)`, note: `kept cold — poured over at serving` },
                { amount: 0.25, unit: 'tsp', name: `salt`, note: `stirred into coconut cream` },
                { amount: 6, name: `ice cubes`, note: `for the cold version` },
            ],
        },
    ],
    steps: [
        {
            title: `Eating fresh nhãn lồng — the correct technique`,
            description: `Fresh nhãn lồng is the simplest preparation and the highest expression of the fruit's quality — no cooking, no addition, just the fruit eaten at peak ripeness. Select longan with thin, slightly rough shells that feel slightly yielding when pressed — overly firm shells indicate under-ripeness, while very soft shells indicate over-ripeness or damage. To open: hold the longan between thumb and index finger and press firmly — the thin shell of nhãn lồng cracks and peels away cleanly in one piece, unlike the thicker shells of inferior varieties that require more force. The peeled fruit should be completely white, slightly translucent, and glistening with its own sugar syrup. Eat immediately — the aromatic compounds in fresh longan flesh begin degrading within 30-60 seconds of exposure to air, which is why freshly peeled nhãn lồng tastes dramatically more fragrant than longan that has been peeled and stored.`,
            tip: `The 30-60 second aromatic degradation window of peeled fresh longan is the food chemistry reason that longan must be eaten immediately after peeling. The primary aromatic compounds in Dimocarpus longan — primarily 2-phenylethanol, geraniol, and linalool — are volatile at room temperature and oxidise rapidly when exposed to air. A longan peeled and eaten in the first 30 seconds delivers these compounds at full concentration; the same longan peeled and eaten 5 minutes later has lost 40-60% of its aromatic intensity. The traditional Hưng Yên way: peel and eat one at a time, never in advance, sitting in the shade of the longan orchard.`,
        },
        {
            title: `Make long nhãn — home slow-drying`,
            description: `Traditional long nhãn production in Hưng Yên uses charcoal smoke-drying for 3-4 days — the longan are placed on bamboo racks above slow-burning charcoal fires, turning twice daily, until the shell darkens to deep brown-black and the flesh inside has dried to a sticky, intensely concentrated state. Home oven method: place whole shell-on longan on wire racks over baking trays. Set oven to 50-55°C with fan-forced and propped door (2-3cm gap for moisture escape). Dry 48 hours, rotating racks every 12 hours. The shells will darken from tan to deep brown. Done when the shell feels hard and the fruit inside feels firm but slightly yielding when pressed — not rock-hard (over-dried) and not soft (under-dried).`,
            tip: `The charcoal smoke in traditional long nhãn drying contributes a specific smoky-sweet note to the dried fruit that the oven method cannot replicate — this is why artisan long nhãn from Hưng Yên tastes more complex than oven-dried home versions. The smoke compounds (particularly guaiacol and syringol from hardwood charcoal) absorb into the longan shell during drying and slowly migrate through the shell to the flesh over the multi-day process. To approximate this in Germany: add a small amount of liquid smoke (Flüssigrauch, available at German BBQ suppliers) to a water spray bottle. Lightly mist the longan every 12 hours during oven drying.`,
        },
        {
            title: `Make the chè nhãn sweet soup`,
            description: `Bring 700ml water to a boil. Add pandan leaves and lotus seeds. Simmer 20 minutes until lotus seeds are just tender. Add soaked white wood ear fungus and dried longan flesh. Simmer 10 more minutes — the wood ear will become silky and the dried longan will plump and release its concentrated sweetness into the liquid. Add rock sugar and salt, stirring until dissolved. Add fresh longan flesh in the final 3 minutes — it needs only brief heating to warm through. Remove pandan leaves. The broth should be clear, slightly golden from the rock sugar, and smell of longan, pandan, and lotus.`,
            tip: `The combination of fresh and dried longan in the same chè is the Hưng Yên technique that produces maximum flavour complexity from the single fruit. Fresh longan contributes its volatile aromatic compounds (2-phenylethanol, geraniol) which survive brief heating intact; dried longan (long nhãn) contributes its concentrated, caramel-like Maillard products from the drying process and its deeply sweet, slightly smoky character. Together they produce a chè with both the brightness of fresh longan and the depth of the dried — neither alone produces both dimensions.`,
        },
        {
            title: `Serve warm or cold`,
            description: `Warm version: ladle into bowls with lotus seeds, wood ear, and both types of longan in each bowl. Pour cold salted coconut cream over the surface. Serve immediately — the temperature contrast between warm soup and cold cream is the eating experience. Cold version: cool completely, refrigerate 2 hours. Serve in bowls with ice cubes and cold coconut cream. In Hưng Yên during nhãn season, chè nhãn is sold from street carts along the National Highway 5 that connects Hà Nội to Hải Phòng — travellers stopping to buy bags of fresh nhãn lồng from roadside vendors also buy cups of chè nhãn to drink in the shade of the longan orchards. The fresh longan in the warm chè, the dried longan's depth, the lotus seed's earthiness, and the cold coconut cream is the sensory summary of Hưng Yên summer.`,
        },
        {
            title: `The long nhãn TCM dimension`,
            description: `Long nhãn (龍眼肉, lóngyǎn ròu in Chinese — "dragon eye meat") has been used in Traditional Chinese Medicine and its Vietnamese equivalent for over 2,000 years as a tonic for the heart and spleen — prescribed for anxiety, insomnia, forgetfulness, and general weakness. The modern nutritional analysis partially supports these traditional uses: longan flesh contains adenosine (a nucleoside with documented calming effects on the nervous system), significant amounts of vitamin C and potassium, and polyphenols with antioxidant activity. The drying process concentrates these compounds — long nhãn contains approximately 3-4x the adenosine concentration of fresh longan flesh per gram. Whether this concentration reaches pharmacologically meaningful levels in culinary quantities is uncertain, but the traditional use of long nhãn specifically (not fresh longan) as a tonic ingredient reflects an empirical observation of its concentrated compound profile.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}