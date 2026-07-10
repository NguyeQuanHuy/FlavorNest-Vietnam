'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ruou-can-co-ho',
    title: `K'Ho Ethnic Jar Wine`,
    subtitle: `Rượu Cần Cơ Ho — The indigenous fermented rice wine of the K'Ho people of the Lâm Đồng highlands, drunk communally through bamboo straws from a clay jar.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '720 hrs',
    rating: 4.9,
    baseServings: 8,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Rượu cần (jar wine, literally "straw wine") is the ceremonial fermented rice beverage of the indigenous K'Ho people — the largest ethnic minority of Lâm Đồng province, whose villages cluster around the base of the Bidoup–Núi Bà massif and the highland plateaus surrounding Đà Lạt. The K'Ho have inhabited the Lang Biang plateau for at least two thousand years, and rượu cần has been central to every significant communal event in their culture for the entirety of that time: births, deaths, marriages, harvest celebrations, conflict resolutions, and the receiving of important guests.\n\nThe wine is made from glutinous rice mixed with men rượu cần — a specific fermentation starter cake unique to each highland ethnic group, made from a combination of medicinal forest plants, wild yeasts, and mould cultures that each family guards and propagates across generations. The starter cake is the irreplaceable element: it is not a commercial yeast, not a laboratory culture, but a living community of microorganisms cultivated from the specific forest environment of the K'Ho homeland. The flavour of rượu cần from the K'Ho villages around Lạc Dương differs measurably from rượu cần made by the Ê Đê of Đắk Lắk or the M'Nông of Đắk Nông — same format, different forest, different flavour.\n\nThe wine is fermented in a sealed clay jar for a minimum of 30 days, traditionally buried in the earth beneath the longhouse for temperature stability. It is opened only for the occasion it was made for, and drunk communally through thin bamboo straws (cần) inserted through a layer of forest leaves covering the surface of the fermented mass. Water is added to the jar as the wine is drunk, diluting the remaining liquid over the course of the ceremony. The jar is considered finished when the water added equals the original volume of the fermented mass — a point determined by the host, who monitors the clarity and flavour throughout.`,
    ingredientSections: [
        {
            title: `Fermented rice base (com ruou)`,
            items: [
                { amount: 1, unit: 'kg', name: `glutinous rice (gao nep)`, note: `washed and soaked overnight — the K'Ho use black glutinous rice (nep than) for the most ceremonial batches` },
                { amount: 50, unit: 'g', name: `men ruou can (highland fermentation starter cake)`, note: `available from K'Ho vendors at Da Lat market or online from Lang Biang cultural suppliers; substitute: 30g commercial banh men ruou with 5g dried medicinal herbs including galangal root, cinnamon bark, and wild ginger` },
                { amount: 200, unit: 'g', name: `cooked sticky rice (com nep chin)`, note: `a small portion cooked separately and mixed into the raw soaked rice — accelerates initial fermentation` },
            ],
        },
        {
            title: `Forest herb layer (la rung — traditional covering)`,
            items: [
                { amount: 10, name: `banana leaves, cut to fit jar opening` },
                { amount: 5, name: `leaves of fragrant forest herbs`, note: `K'Ho use sa nhan (Alpinia zerumbet) leaves and wild lemongrass — substitute: kaffir lime leaves and lemongrass` },
                { amount: 1, unit: 'tbsp', name: `coarse salt`, note: `sprinkled on top of the rice layer before sealing — inhibits surface mould` },
            ],
        },
        {
            title: `Vessel and equipment`,
            items: [
                { amount: 1, name: `clay jar (hu dat or binh gom) with lid`, note: `5-10 litre capacity; available at Vietnamese ceramic suppliers; substitute: large glass jar with loose-fitting lid` },
                { amount: 4, name: `thin bamboo straws (can tre) or metal straws`, note: `inserted through the leaf covering to drink` },
                { amount: 1, unit: 'L', name: `clean cold water per serving session`, note: `added to the jar as wine is consumed` },
            ],
        },
        {
            title: `Accompaniments (served alongside at K'Ho ceremonies)`,
            items: [
                { amount: 500, unit: 'g', name: `grilled wild boar or pork (thit nuong)`, note: `salted and grilled over open wood fire` },
                { amount: 200, unit: 'g', name: `grilled corn (bap nuong Da Lat)`, note: `Đà Lạt highland corn — sweeter than lowland varieties` },
                { amount: 1, name: `bunch fresh forest herbs`, note: `sa nhan leaves, wild mint, highland coriander` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare and cook the glutinous rice`,
            description: `Wash glutinous rice thoroughly until water runs clear. Soak overnight in cold water — minimum 8 hours, 12 is better for black glutinous rice which has a harder hull. Drain completely. Steam in a bamboo steamer lined with banana leaf for 25-30 minutes until fully cooked — each grain should be translucent and sticky but individual, not clumped into a mass. Spread the cooked rice on a clean bamboo mat or wide tray to cool to room temperature. This cooling is critical: the fermentation starter must be added at room temperature (25-28°C), never to hot rice which kills the yeast and mould cultures.`,
            tip: `Black glutinous rice (nếp than) produces a deeper, more complex rượu cần than white glutinous rice — the anthocyanin pigments in the black hull contribute to the wine's dark colour and add a mild tannin note that white rice wine lacks. K'Ho ceremonial wine uses black rice specifically for important occasions. For a first attempt, white glutinous rice is more forgiving and produces a cleaner, milder wine.`,
        },
        {
            title: `Prepare the fermentation starter`,
            description: `If using authentic men rượu cần starter cakes: grind to a fine powder in a mortar or spice grinder. The powder should smell earthy, slightly spicy, and faintly medicinal — the forest herb compounds are what give each community's wine its specific character. If using the substitute combination: grind commercial bánh men rượu together with dried galangal root, cinnamon bark shards, and dried wild ginger to a coarse powder. Sift to remove any large fibrous pieces. The starter quantity is critical — too little and fermentation is slow and incomplete; too much and the wine becomes overly alcoholic and harsh.`,
            tip: `The men rượu cần starter cake is the single ingredient most worth sourcing authentically for this preparation. K'Ho vendors at Đà Lạt market sell small packets specifically for home production — ask at the highland produce section. The starter from different K'Ho sub-groups (K'Ho Lạch, K'Ho Chil, K'Ho Srê) produces measurably different wines because each community's forest environment cultivates a different microbial community in their starter. This biodiversity in the starter is one of the most specific examples of terroir in Vietnamese food culture.`,
        },
        {
            title: `Mix and layer into the jar`,
            description: `Spread cooled cooked rice on a clean surface. Sprinkle the ground starter powder evenly over the rice and mix gently with clean hands — every grain should be coated with a fine dusting of starter. Mix in the small amount of pre-cooked sticky rice (this provides immediately available sugars to kick-start fermentation). Transfer the inoculated rice in layers to the clean clay jar, pressing each layer firmly but not compacting — some air space between grains is necessary for the initial aerobic phase of fermentation. Fill the jar to about 80% capacity. Sprinkle coarse salt evenly over the top layer. Cover the surface completely with banana leaves, then fragrant forest herb leaves on top. Seal the jar with its lid, pressing firmly.`,
        },
        {
            title: `Ferment — 30 days minimum`,
            description: `Place the sealed jar in a stable-temperature location — a basement, a cool cupboard, or buried partially in earth if available. The ideal fermentation temperature is 25-30°C — consistent, not fluctuating. In a German home in summer, a kitchen cupboard away from direct sun works well; in winter, near (but not adjacent to) a radiator. Leave completely undisturbed for 30 days minimum. After 30 days, the rice will have liquefied partially, the jar will smell of alcohol and fruit when the lid is briefly lifted, and the surface layer beneath the leaves will show signs of active fermentation. For a more complex, richer wine, leave 60 days. The K'Ho traditionally ferment for 60-90 days for ceremonial batches.`,
            tip: `Do not open the jar during fermentation to check on progress — each opening introduces oxygen and contaminants. Judge by smell at the lid seal: at 2 weeks a faint sweet-sour smell should be detectable; at 4 weeks a clear alcoholic and fruity aroma. If at 2 weeks there is no smell at all, the fermentation has not started — this indicates either the rice was too hot when the starter was added, or the starter was not viable. A very strong unpleasant smell (putrid rather than fermented) indicates contamination — discard and restart with cleaned equipment.`,
        },
        {
            title: `Open and prepare for drinking`,
            description: `After the fermentation period, move the jar to where it will be consumed. Remove the lid and the herb and banana leaf covering — the surface of the fermented mass will be visible, dark from the rice and starter. Insert bamboo straws (cần) through the fermented rice mass to the bottom of the jar — the liquid has settled below the solid mass. Do not stir. Add 500ml of clean cold water to the jar, pouring gently over the surface without disturbing the mass. Wait 10 minutes for the water to percolate through the fermented rice and dilute the concentrated wine below.`,
            tip: `The first sip through the bamboo straw will be the most concentrated and most alcoholic — the undiluted wine from the bottom of the jar. In K'Ho ceremony, the host always takes the first sip to test the wine and signal that it is ready. The alcohol content of rượu cần varies considerably: 15-25% depending on fermentation time, rice variety, and starter. The first sips are equivalent to a strong wine; the later sips as more water is added are closer to a light beer in alcohol content.`,
        },
        {
            title: `The communal drinking ceremony`,
            description: `Rượu cần is drunk communally — each person takes a straw and drinks simultaneously, or in turn following the host's direction. As the wine level drops, water is added to the jar at intervals — traditionally in amounts judged by the host by feeling the weight of the jar. The ceremony continues until the added water equals the original volume of fermented rice (the wine is considered finished) or until the gathering ends. In K'Ho tradition, removing a straw from the jar before the ceremony is complete is considered disrespectful. Replacement straws can be added but existing straws should not be removed. The jar is shared without reservation — this is the social function of rượu cần, to dissolve hierarchy and create temporary equality among all present.`,
            tip: `For home serving in Germany without the ceremonial context: place the jar at the centre of a table, provide each person with a clean metal straw as a substitute for bamboo, and add water progressively as the wine is consumed. The ratio to aim for is 1 part wine to 1 part added water over the course of an evening. Serve the grilled pork and Đà Lạt corn alongside. The wine pairs best with strongly flavoured grilled or smoked food — its natural acidity and residual sweetness cut through fat in a way that few commercial wines achieve at this price point.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}