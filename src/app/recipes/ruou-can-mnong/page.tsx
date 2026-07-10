'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ruou-can-mnong',
    title: `M'Nông Bamboo Jar Wine`,
    subtitle: `Rượu Cần M'Nông — The fermented rice wine of Đắk Lắk's M'Nông people, brewed in bamboo cylinders with forest leaf starter and drunk through rattan straws.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '720 hrs',
    rating: 4.9,
    baseServings: 6,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `The M'Nông people of Đắk Lắk and Đắk Nông provinces — renowned throughout Vietnam as the elephant-herding community of the Central Highlands — produce a rượu cần that differs fundamentally from the K'Ho version of Lâm Đồng in three structural ways: the fermentation vessel, the starter culture, and the drinking implement. Where K'Ho rượu cần ferments in clay jars, M'Nông rượu cần is traditionally brewed in large bamboo cylinders (ống lồ ô, 80-120cm long, 15-20cm diameter) sealed with banana leaf and forest clay. Where K'Ho starter (men rượu cần) uses one set of highland forest plants, M'Nông men lá uses a completely different botanical combination specific to the dry deciduous forests of the Krông Bông and Lắk lake district. And where K'Ho wine is drunk through thin bamboo straws, M'Nông wine is drunk through rattan straws (cần mây) — the plant that gives the entire category of wine its name.\n\nThe M'Nông fermentation starter is the most botanically complex of any highland ethnic group's rượu cần preparation. It combines roasted glutinous rice flour with a minimum of seven forest plant species: bark of the cây lồng mức (Wrightia religiosa), leaves of the cây đắng (a bitter shrub specific to the Ea Kar forest), roots of wild ginger, dried skin of the me rừng pod, forest turmeric rhizome, dried flower of the cây tầm gửi (mistletoe parasitic on highland oak), and wild chili — each contributing specific microbial communities and enzymatic compounds that produce the M'Nông wine's distinctive flavour: simultaneously more bitter, more aromatic, and more medicinally complex than K'Ho rượu cần.\n\nIn M'Nông culture, rượu cần is inseparable from the đâm trâu ceremony (buffalo sacrifice), the lễ cúng bến nước (water source blessing), and the reception of clan elders — the bamboo cylinder is brought out and drunk communally, with the ceremony's host controlling the pace of water addition and the order of drinking. To refuse the rượu cần straw when offered by the host is a serious social transgression.`,
    ingredientSections: [
        {
            title: `Fermented rice base`,
            items: [
                { amount: 800, unit: 'g', name: `glutinous rice (gao nep)`, note: `washed, soaked overnight, steamed until fully cooked — spread to cool completely` },
                { amount: 200, unit: 'g', name: `regular white rice (gao te)`, note: `mixed with glutinous rice — the M'Nông blend; K'Ho uses glutinous only` },
                { amount: 60, unit: 'g', name: `men la M'Nong (M'Nong forest leaf starter)`, note: `authentic starter from M'Nong vendors at Buon Ma Thuot market; substitute: 40g commercial banh men + 5g each dried galangal, wild ginger, bitter bark powder` },
            ],
        },
        {
            title: `M'Nông starter substitute (men lá approximation)`,
            items: [
                { amount: 40, unit: 'g', name: `commercial banh men ruou`, note: `base yeast-mould cake` },
                { amount: 5, unit: 'g', name: `dried galangal powder`, note: `approximates the forest ginger root` },
                { amount: 3, unit: 'g', name: `dried turmeric powder`, note: `approximates forest turmeric rhizome` },
                { amount: 2, unit: 'g', name: `dried bitter orange peel`, note: `approximates the cây đắng bitter leaf` },
                { amount: 1, unit: 'g', name: `dried chili flakes`, note: `the wild chili component` },
                { amount: 3, unit: 'g', name: `me rung dried pod skin`, note: `if available — adds forest sourness to the starter` },
            ],
        },
        {
            title: `Bamboo vessel`,
            items: [
                { amount: 1, name: `large fresh bamboo cylinder (ong lo o)`, note: `80-100cm long, 15-20cm diameter, one natural node as sealed bottom; substitute: large glass carboy 5-10L` },
                { amount: 3, name: `banana leaf pieces`, note: `for sealing the open top` },
                { amount: 1, unit: 'handful', name: `forest clay or food-grade sealant`, note: `pressed over banana leaf seal — traditional M'Nong airtight seal` },
            ],
        },
        {
            title: `Drinking implements`,
            items: [
                { amount: 6, name: `rattan straws (can may)`, note: `thin, hollow rattan sections 80cm long — the M'Nong drinking implement; substitute: long metal straws` },
                { amount: 2, unit: 'L', name: `clean cold water`, note: `added progressively during the drinking ceremony` },
            ],
        },
        {
            title: `Ceremony accompaniments`,
            items: [
                { amount: 500, unit: 'g', name: `grilled wild boar or pork (thit rung nuong)` },
                { amount: 4, name: `portions com lam (bamboo tube rice)` },
                { amount: 1, name: `bunch highland herbs` },
            ],
        },
    ],
    steps: [
        {
            title: `The M'Nông vs K'Ho distinction — understanding before making`,
            description: `The fundamental difference between M'Nông and K'Ho rượu cần is the starter's botanical complexity and the vessel's material. M'Nông men lá contains 7+ forest plant species vs the K'Ho starter's 3-4; the additional bitter bark and mistletoe compounds produce a wine that is simultaneously more complex and more medicinal. The bamboo vessel vs clay jar also changes the fermentation environment: bamboo is more porous than clay, allowing very slow micro-oxygenation that produces a slightly more oxidative character in the finished wine — closer to a light sherry note than the clean lactic ferment of clay-jar wine. These differences are not interchangeable; M'Nông communities have specific preferences for their own wine and can identify K'Ho wine by taste within the first sip.`,
            tip: `If you have previously made K'Ho rượu cần and want to compare: the most immediately noticeable difference in M'Nông wine is the bitterness — a clean, pleasant herbal bitterness from the bark compounds that K'Ho wine lacks entirely. The M'Nông wine is also slightly more aromatic (from the additional plant species) and has a faintly oxidative edge from the bamboo vessel's micro-porosity. Blind-tasting the two side by side is one of the most specific sensory experiences available in Vietnamese ethnobotanical food culture.`,
        },
        {
            title: `Cook and cool the rice blend`,
            description: `Wash glutinous and white rice together until water runs clear. Soak overnight in cold water — minimum 8 hours. Drain completely. Steam in a bamboo steamer lined with banana leaf for 30 minutes until fully cooked — all grains should be translucent and sticky. Spread on a wide bamboo mat or tray in a thin layer and fan until completely cool — room temperature, not warm. The mixed rice (80% glutinous, 20% white) produces a wine with both the sticky-rice sweetness and the white-rice starch conversion that the M'Nông blend requires. The white rice contributes more rapidly fermentable simple starches that give the early fermentation its energy.`,
        },
        {
            title: `Prepare the men lá starter`,
            description: `If using authentic men lá M'Nông: grind the dried starter cake to a coarse powder in a mortar. It should smell simultaneously of forest undergrowth, bitter bark, and fermented grain — a complex, slightly medicinal aroma. If using the substitute combination: grind commercial bánh men with dried galangal, turmeric, bitter orange peel, chili, and me rừng pod skin together to a coarse powder. Mix thoroughly. The substitute will produce a recognisable rượu cần with some of the M'Nông complexity but without the specific forest microbial community that defines the authentic product.`,
        },
        {
            title: `Inoculate the rice`,
            description: `Spread the cooled rice blend on a clean surface. Sprinkle starter powder evenly across the rice and mix gently but thoroughly with clean dry hands — every grain should be coated. Transfer in layers to the bamboo cylinder (or glass carboy), pressing each layer gently to remove air pockets. Fill to 80% capacity. The natural node at the bottom of the bamboo is the sealed base. Seal the open top with banana leaf, pressing firmly into the cylinder opening. Cover the banana leaf seal with a small amount of forest clay or press plastic wrap with a rubber band as a substitute seal. The seal must allow CO₂ to escape (don't over-tighten) but prevent oxygen and insects from entering.`,
        },
        {
            title: `Ferment in a warm location — 30 to 45 days`,
            description: `Stand the bamboo cylinder upright or at a slight lean in a warm location — 26-32°C ideal. M'Nông villages traditionally stand the cylinder in the shade of the longhouse eaves where temperature is stable. In Germany: near a south-facing window in summer, near a radiator in winter. After 5-7 days, a faint fermentation smell should be detectable through the seal. After 2 weeks, the smell should be clearly alcoholic and faintly fruity. After 30 days, unwrap the banana leaf seal briefly and sniff — the wine should smell of alcohol, grain, and the bitter herb complexity of the men lá. If pleasant and clearly fermented: ready for the ceremony. If any ammonia or putrid note: discard.`,
            tip: `M'Nông rượu cần ferments faster than K'Ho because the higher white rice content provides more immediately available simple sugars. At 28°C, 30 days is typically sufficient; K'Ho requires 30-60 days. The bitter bark compounds in the men lá also have antimicrobial properties that suppress competing bacteria more aggressively than the K'Ho starter — the M'Nông wine is more resistant to contamination. This antimicrobial function of the additional plant species is not decorative; it is a centuries-evolved food safety mechanism.`,
        },
        {
            title: `Open and set up for the ceremony`,
            description: `Move the cylinder to its drinking location. Remove the clay/banana leaf seal — do not discard the banana leaf, which is used as a mat under the cylinder during the ceremony. Insert rattan straws (or long metal straws) through the fermented rice mass to the bottom of the cylinder. Add 300ml cold water to the cylinder, pouring gently over the surface. Wait 10 minutes. The ceremony begins when the host takes the first sip through their straw and pronounces the wine ready. In M'Nông custom, the host drinks first and longest at the opening — this is not selfishness but the host's responsibility to assess the wine's quality and assume any risk before guests drink.`,
        },
        {
            title: `The M'Nông drinking protocol`,
            description: `M'Nông rượu cần ceremony has stricter protocol than K'Ho. Straws are allocated by the host based on seniority — elders drink first, guests second, younger community members last. Water is added by the host alone — no guest adds water independently. The cylinder is passed by rotating it slightly rather than by carrying it to each person. The ceremony ends when the host removes their straw — this signals to all others that the wine is finished. Removing a straw before the host is a significant breach of protocol. At home, adapt these protocols to your gathering: designate a host, let them control water addition, and follow their lead on ceremony pace.`,
            tip: `The rattan straw (cần mây) is what gives the entire category of wine its Vietnamese name. Rattan is hollow and flexible, with natural nodes that partially filter the fermented rice solids as the wine is drawn up. Metal straws work but lack this partial filtration — the wine drawn through metal straws is slightly cloudier and less refined than through rattan. Online sourcing of rattan sections suitable for drinking straws is possible through craft and weaving suppliers in Germany (search "Rattan Rohr" at craft supply stores).`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}