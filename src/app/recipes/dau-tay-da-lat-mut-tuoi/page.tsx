'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'dau-tay-da-lat-mut-tuoi',
    title: `Đà Lạt Fresh Strawberry Jam`,
    subtitle: `Mứt Dâu Tây Đà Lạt — Same-day highland strawberry jam made with minimal sugar to preserve the fruit's natural acidity and Lang Biang terroir.`,
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Đà Lạt strawberries (dâu tây Đà Lạt) are among the most distinctive fruit in Vietnam — small, deep red, intensely fragrant, and significantly more acidic than the large commercial strawberries grown in lowland greenhouses or imported from Korea and the United States that dominate Vietnamese supermarkets. They are grown at 1,500 metres on the volcanic basalt soil of the Lang Biang plateau in Lâm Đồng province, in a climate that combines cool temperatures (14-23°C year-round), high humidity, and strong ultraviolet radiation at altitude — conditions that concentrate the anthocyanin pigments and volatile aroma compounds in the fruit far beyond what is achievable at sea level.\n\nMứt dâu tây Đà Lạt — fresh strawberry jam — is the simplest way to preserve and extend the berry's season, and it is made by the basketful at Đà Lạt's Chợ Đêm (night market) and along the strawberry farms of the Trại Mát area east of the city. The key principle of Đà Lạt jam-making is restraint: minimal sugar (50% of the fruit weight, not the 1:1 ratio of European jam), no pectin, no preservatives, and cooking time kept as short as possible — 20-25 minutes at a vigorous boil — to preserve the volatile aromatics that make the highland berry so distinctive and that long cooking destroys entirely.\n\nThe result is a jam that is looser than commercial jam, more intensely fruity, and has a shelf life of 2-3 weeks refrigerated rather than months. In Đà Lạt, this is considered a feature rather than a defect — mứt tươi (fresh jam) is specifically distinguished from the heavily preserved commercial product. It is eaten on fresh baguette from the Đà Lạt bakeries, stirred into plain yogurt, or spooned over the highland pancakes sold at the morning market.`,
    ingredientSections: [
        {
            title: `The fruit`,
            items: [
                { amount: 500, unit: 'g', name: `Đà Lạt strawberries or the most aromatic fresh strawberries available`, note: `hulled and halved — small berries left whole; choose the ripest, most fragrant fruit` },
                { amount: 250, unit: 'g', name: `sugar`, note: `50% of fruit weight — the Đà Lạt ratio; European jam uses 80-100%` },
                { amount: 2, unit: 'tbsp', name: `fresh lime juice`, note: `not lemon — lime acidity matches the berry's own acid profile` },
                { amount: 0.5, unit: 'tsp', name: `salt`, note: `a pinch only — amplifies the strawberry flavour without being detectable` },
            ],
        },
        {
            title: `Optional additions`,
            items: [
                { amount: 1, unit: 'tsp', name: `vanilla extract`, note: `added off heat — some Đà Lạt vendors include it` },
                { amount: 0.5, unit: 'tsp', name: `black pepper, finely ground`, note: `the unexpected Đà Lạt addition — pepper enhances strawberry's volatile aromatics` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `sections fresh baguette (banh mi), sliced and toasted` },
                { amount: 200, unit: 'g', name: `plain yogurt (sua chua)`, note: `unsweetened — for stirring jam into` },
                { amount: 1, unit: 'tbsp', name: `fried shallots (hanh phi)`, note: `optional — the savoury contrast that surprises` },
            ],
        },
    ],
    steps: [
        {
            title: `Macerate the strawberries`,
            description: `Hull and halve the strawberries, leaving very small ones whole. Place in a heavy-bottomed pot with sugar, lime juice, and salt. Toss to coat every berry. Leave at room temperature for 30 minutes — the sugar will draw moisture from the fruit by osmosis, creating a natural syrup at the bottom of the pot and slightly softening the berries. This macerating step means less cooking time is needed to break down the fruit, which preserves more of the volatile aroma compounds. Do not skip or shorten the maceration.`,
            tip: `The maceration liquid that forms in the bottom of the pot is already strawberry syrup — concentrated, intensely fragrant, and the most aromatic part of the jam-making process. Đà Lạt vendors sometimes spoon a small amount of this pre-cooking liquid over fresh bread as a preview before the jam is finished. The aroma at this stage is stronger than the cooked jam because the heat-sensitive volatiles have not yet been driven off.`,
        },
        {
            title: `Cook — vigorous boil, short time`,
            description: `Place the pot over medium-high heat. Bring to a boil stirring gently to dissolve any remaining sugar crystals. Once boiling, increase to high heat and maintain a vigorous boil — not a gentle simmer. The Đà Lạt method uses high heat and short time: 20-25 minutes at a rolling boil, stirring every 3-4 minutes to prevent scorching at the bottom. The jam will foam significantly in the first 5 minutes — skim the foam with a spoon but do not discard it (eat it on bread immediately — it is the most intensely flavoured part of the process). By 20 minutes, the jam will have reduced and thickened noticeably.`,
            tip: `The 20-25 minute high-heat method preserves approximately 60-70% of the original volatile aroma compounds compared to 30-40% retained by the low-and-slow European method. This is why Đà Lạt mứt tươi smells more intensely of fresh strawberry than commercial jam. The trade-off is shorter shelf life — without the long cooking that drives off water and the high sugar ratio that inhibits microbial growth, the jam must be refrigerated and consumed within 2-3 weeks.`,
        },
        {
            title: `Test the set`,
            description: `Place a small ceramic plate in the freezer before cooking begins. At 20 minutes, remove the pot from heat and drop 1 teaspoon of jam onto the chilled plate. Wait 30 seconds, then push the jam with your fingertip — it should wrinkle and hold its shape rather than running. If it runs, return to the boil for 3-5 more minutes and test again. Đà Lạt mứt tươi sets softer than commercial jam — it should hold a mound when spooned but flow slowly rather than sitting rigidly. The wrinkle test should produce light wrinkling, not the deep folds of a stiff European jam.`,
            tip: `The set point for Đà Lạt mứt tươi is 103-104°C on a thermometer — lower than the 105°C of commercial jam. This lower set temperature corresponds to a lower sugar concentration and a softer, more fluid final product. If you have a kitchen thermometer, it is more reliable than the wrinkle test for this specific preparation where the soft set can be difficult to judge visually.`,
        },
        {
            title: `Finish and jar`,
            description: `Remove from heat. If using vanilla extract or black pepper, add now and stir in — off-heat addition preserves the volatile compounds in both. Pour into clean, warm glass jars immediately. The jam will continue to set slightly as it cools — a jar that looks slightly too liquid when hot will reach the correct consistency at room temperature. Seal the jars and leave to cool completely before refrigerating. Do not seal while hot and then refrigerate immediately — condensation forms inside the lid and introduces moisture that shortens shelf life.`,
        },
        {
            title: `The black pepper addition — why it works`,
            description: `Black pepper in strawberry jam is used by several Đà Lạt vendors and is consistently described by tasters as making the jam taste "more strawberry" rather than "peppery." This is not a flavour paradox — it is chemistry. Piperine, the primary compound in black pepper, temporarily suppresses certain bitter receptors on the tongue, allowing the sweet and fruity notes of the strawberry to be perceived more intensely without competition. The effect is similar to the role of salt in desserts: you do not taste the pepper itself, but the strawberry flavour is amplified. Use 0.5 tsp maximum — beyond this amount the pepper becomes detectable.`,
            tip: `Add the black pepper off heat along with vanilla. The heat-volatile compounds in black pepper (the ones responsible for its aroma) are driven off by high cooking temperatures — adding pepper at the boil produces a cooked, flat pepper note rather than the bright, fragrant effect that works in this jam. Always add off heat, always at the end.`,
        },
        {
            title: `Serve the Đà Lạt way`,
            description: `Spread generously on slices of warm toasted baguette — the bread-to-jam ratio in Đà Lạt is more jam than bread, unlike European convention. Alternatively, spoon 2-3 tablespoons into a bowl of plain unsweetened yogurt and stir until swirled but not fully mixed — the uneven distribution means each spoonful has a different fruit-to-yogurt ratio. The unexpected serving suggestion from the Trại Mát strawberry farms: a small spoonful of mứt dâu tây with a pinch of fried shallots on bread — the shallot's savoury sweetness against the fruit acid is a flavour combination that has no Western equivalent and requires no explanation beyond the first taste.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}