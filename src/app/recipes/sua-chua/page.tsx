'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'sua-chua',
    title: 'Vietnamese Yogurt',
    subtitle: 'Sua chua — sweet, tangy condensed-milk yogurt, set in small jars or frozen in plastic bags by neighbourhood aunties.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '8 hrs',
    rating: 4.7,
    baseServings: 10,
    heroImage: '/images/recipes/sua-chua.jpg',
    intro: 'Sua chua is the simplest dessert in Vietnam and somehow also the most beloved. The recipe arrived with the French in the 19th century and was adapted with the only milk available at the time — sweetened condensed. The result is denser, tangier and far sweeter than European yogurt, with a clean satisfying snap when the spoon breaks the surface. Every Vietnamese child has a memory of buying frozen sua chua in a small plastic bag from a neighbourhood auntie on a hot afternoon, biting off the corner, and squeezing the cold sweet-tart yogurt directly into their mouth.',
    ingredientSections: [
        {
            title: 'Yogurt base',
            items: [
                { amount: 1, unit: 'L', name: 'whole milk', note: 'fresh, full fat' },
                { amount: 400, unit: 'ml', name: 'sweetened condensed milk' },
                { amount: 200, unit: 'ml', name: 'boiling water' },
                { amount: 200, unit: 'ml', name: 'cold water' },
                { amount: 3, unit: 'tbsp', name: 'plain yogurt with live cultures', note: 'starter, room temperature' },
            ],
        },
        {
            title: 'Equipment',
            items: [
                { amount: 10, name: 'small glass jars or pots', note: 'sterilised' },
                { amount: 1, name: 'large insulated container or oven', note: 'for fermentation' },
            ],
        },
    ],
    steps: [
        {
            title: 'Sterilise the jars',
            description: 'Wash jars in hot soapy water, rinse, and place upside down on a clean towel. Pour boiling water inside and out. Drain completely. Sterile jars are critical — any bacteria will spoil the batch.',
        },
        {
            title: 'Mix the milk base',
            description: 'In a large jug, dissolve condensed milk in 200ml boiling water and stir until fully combined. Add 200ml cold water and the litre of fresh milk. Stir well. The mixture should now be at body temperature — around 40C.',
            tip: 'Test on the inside of your wrist. It should feel comfortably warm, like bathwater. Too hot and you kill the culture; too cool and it will not ferment.',
        },
        {
            title: 'Add the starter culture',
            description: 'Stir 3 tbsp of plain yogurt thoroughly into the warm milk mixture until fully dissolved. The starter must be at room temperature — cold starter shocks the milk and the batch will not set evenly.',
        },
        {
            title: 'Pour into jars',
            description: 'Strain the mixture through a fine sieve to catch any lumps. Pour into the sterilised jars, filling each two-thirds full. Cover with lids but do not seal tightly.',
        },
        {
            title: 'Ferment 6 to 8 hours',
            description: 'Place the jars in a warm environment for fermentation. Options: a turned-off oven with just the light on, an insulated cooler with warm water bottles, a yogurt maker, or a thick towel-wrapped bundle on a warm radiator. Hold the temperature around 40 to 45 C. Do not disturb for at least 6 hours.',
            tip: 'Moving the jars during fermentation breaks the curd. Set them once and walk away.',
        },
        {
            title: 'Test and refrigerate',
            description: 'After 6 hours, tilt one jar gently — the yogurt should hold its shape and not slosh. If still liquid, ferment another 1 to 2 hours. Once set, transfer to the refrigerator and chill at least 4 hours before eating. This both stops the fermentation and develops the tang.',
        },
        {
            title: 'Serve the Vietnamese way',
            description: 'Eat plain with a small spoon, or top with crushed ice and a drizzle of fresh fruit syrup. For the iconic frozen version, freeze sealed plastic bags for 4 hours and bite off the corner to squeeze the slushy yogurt directly into your mouth — the way every Vietnamese child first met sua chua.',
            tip: 'Save 3 tbsp from each batch as starter for the next one. A good Vietnamese household has not bought yogurt starter in 30 years.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}