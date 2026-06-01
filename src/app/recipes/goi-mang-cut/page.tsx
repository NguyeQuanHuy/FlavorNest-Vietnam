'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-mang-cut',
    title: 'Gỏi Măng Cụt (Vietnamese Mangosteen Salad)',
    subtitle: 'The rarest Vietnamese salad — mangosteen segments tossed with shrimp, pork, toasted coconut, and fresh herbs in a lime-fish sauce dressing. Seasonal, fleeting, and unlike anything else in the Vietnamese salad canon.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/goi-mang-cut.jpg',
    intro: `Gỏi măng cụt is the salad that most visitors to Vietnam never encounter — not because it is difficult to make, but because mangosteen (măng cụt) has a season of roughly six to eight weeks in summer, and most of the fruit is eaten fresh rather than cooked. Using mangosteen in a salad is the decision of a cook who has access to more mangosteen than can be eaten out of hand, or who wants to do something more interesting with the fruit than simply peel and eat it. The mangosteen segment has a flavor profile that is extraordinary: simultaneously sweet, sour, and floral, with a clean acidity that behaves differently from lime or vinegar in a dressing context — it integrates rather than cuts. The texture is soft and yielding, which means the salad needs structural contrast from other elements. Vietnamese cooks provide this with shrimp, boiled pork, and — uniquely in this salad — toasted dried coconut or coconut flakes, which add a nuttiness that complements the tropical sweetness of the mangosteen. Gỏi măng cụt is a Mekong Delta dish, associated with Bình Dương and the southern provinces where mangosteen orchards are concentrated. It appears at family gatherings during the June-July season and at Mekong Delta restaurants as a seasonal special. Outside of Vietnam, mangosteen is available frozen at Asian grocers year-round — the frozen version loses some floral fragrance but retains the flavor and texture necessary for the salad.`,
    ingredientSections: [
        {
            title: 'Mangosteen',
            items: [
                { amount: 500, unit: 'g', name: 'fresh mangosteen (măng cụt)', note: 'about 8-10 fruits. Choose heavy, firm fruits with bright purple-black skin and a green calyx. Frozen mangosteen segments are a viable year-round substitute.' },
            ],
        },
        {
            title: 'Proteins',
            items: [
                { amount: 200, unit: 'g', name: 'fresh shrimp, medium', note: 'peeled, deveined — boiled 3 minutes in lightly salted water, cooled and halved lengthwise' },
                { amount: 150, unit: 'g', name: 'pork belly or shoulder', note: 'boiled until just cooked with ginger and lemongrass, cooled completely, sliced 3mm thin' },
            ],
        },
        {
            title: 'Salad components',
            items: [
                { amount: 40, unit: 'g', name: 'toasted dried coconut flakes (dừa nạo sấy)', note: 'toasted in a dry pan until golden — the key textural and flavor element unique to this salad' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Herbs',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)', note: 'leaves only — essential' },
                { amount: 0.5, name: 'bunch mint (húng lủi)', note: 'leaves only' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Dressing',
            items: [
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'fresh lime juice', note: 'less than usual — mangosteen provides its own acidity' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves, minced' },
                { amount: 1, name: 'bird\'s eye chili, minced' },
                { amount: 0.5, unit: 'tsp', name: 'sesame oil', note: 'adds a warm nuttiness that complements the coconut' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 8, name: 'prawn crackers (bánh phồng tôm)' },
                { amount: 2, name: 'limes, extra wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Open and prepare the mangosteen',
            description: 'Score around the equator of each mangosteen with a sharp knife — cut through the thick purple-black skin only, not into the white flesh. Twist the top half off. Lift out the white segments — they should come out cleanly. Discard any segments with large seeds if you prefer (the seeds are edible but large). For the salad, leave smaller segments whole and halve larger ones. Handle gently — the flesh bruises easily and the purple juice from the skin stains everything permanently.',
            tip: 'The purple skin juice stains irreversibly — wear an apron and work on a surface that can be wiped quickly. The white flesh does not stain but the skin juice will if the skin is broken over the fruit.',
        },
        {
            title: 'Toast the coconut flakes',
            description: 'Place dried coconut flakes in a dry pan over medium-low heat. Toast, stirring constantly, for 3-4 minutes until golden — the flakes go from pale to golden very quickly at the end, so watch carefully. Remove from heat immediately when golden and spread on a plate to cool. The toasted coconut should smell nutty and sweet. This is the element that makes gỏi măng cụt distinct from every other Vietnamese gỏi.',
            tip: 'Toasted coconut darkens further off the heat. Remove when it looks slightly under-toasted — the residual heat completes the process. Dark brown coconut is bitter.',
        },
        {
            title: 'Cook the proteins',
            description: 'Boil pork in salted water with 1 lemongrass stalk and 2 ginger slices for 15 minutes until just cooked. Cool in the cooking liquid, remove and slice 3mm thin. Boil shrimp for 3 minutes in salted water, cool under cold water, peel and halve lengthwise. Both proteins should be completely cool before assembling — warm protein wilts the herbs and softens the mangosteen.',
            tip: 'Cool the pork completely in its cooking liquid before slicing — this keeps it moist. Removed from the liquid while hot, it dries out within minutes.',
        },
        {
            title: 'Make the dressing',
            description: 'Combine fish sauce, lime juice, sugar, water, garlic, chili, and sesame oil. Stir until sugar dissolves. Taste alongside a segment of mangosteen — the dressing should complement the mangosteen\'s natural sweet-sour character, not compete with it. The lime juice quantity should be adjusted based on how tart the mangosteen is. Very sweet mangosteen needs more lime; tart mangosteen needs less.',
            tip: 'This is the only Vietnamese gỏi where the dressing must be calibrated specifically to the individual fruit. Taste the mangosteen before finalizing the dressing. Every batch of mangosteen differs in sweetness and acidity.',
        },
        {
            title: 'Assemble with care',
            description: 'In a wide bowl, gently combine the mangosteen segments, shrimp, pork slices, rau răm, mint, spring onion, and sliced chili. Pour the dressing over. Fold gently with two spoons — mangosteen segments crush easily under aggressive handling. Every element should be lightly coated. Add half the toasted coconut at this stage and fold in gently.',
            tip: 'The mangosteen must be folded in last and handled the least. It is the most delicate element in the salad. Think of it as finishing with a garnish rather than tossing it as an ingredient.',
        },
        {
            title: 'Plate and finish immediately',
            description: 'Transfer to a serving plate. Top with remaining toasted coconut, crushed peanuts, and crispy fried shallots — all added at the last moment to preserve texture. The visual should show white mangosteen segments, golden coconut, and the green herbs clearly. Serve immediately with prawn crackers. Gỏi măng cụt softens quickly — the mangosteen releases juice once dressed and the salad becomes wet within 15 minutes. Eat fast.',
            tip: 'For a seasonal celebration presentation: arrange a few whole unpeeled mangosteen around the plate as decoration — the deep purple of the skin against the pale salad is one of the most visually striking Vietnamese dish presentations.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}