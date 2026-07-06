'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-nau-ruou',
    title: 'Gà Nấu Rượu (Chicken Braised in Rice Wine)',
    subtitle: 'Chicken pieces braised in Vietnamese rice spirit with fresh ginger, turmeric, and lemongrass until the alcohol cooks off and the braise reduces to a deeply aromatic, amber sauce with a heat that is entirely its own. The Mekong Delta braise that uses rice wine as a cooking medium.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '55 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ga-nau-ruou.jpg',
    intro: `Gà nấu rượu is the Mekong Delta chicken braise that uses rượu đế — Vietnamese rice spirit, distilled to 40-45% ABV from fermented glutinous rice — not merely as a flavoring but as the primary cooking liquid. The technique is different from wine-braising in French cooking: the rượu đế is not reduced separately, not added to a stock base, not used in small amounts. A whole bottle goes into the pot with the chicken and the aromatics, and the braise proceeds in this high-alcohol environment until the spirit evaporates and what remains is the concentrated character of the rice wine — its particular warmth, its faint sweetness, its sharp and clean finish — transformed by heat and time into a braising sauce of unusual depth. The ginger in this dish is not restrained: 80 grams of fresh ginger is the minimum, julienned and present in quantity throughout the sauce and as a topping. The turmeric colors everything golden. The lemongrass contributes citrus and grass. Together with the rice wine, these three aromatics produce a braising medium that smells immediately recognizable as southern Vietnamese and tastes of the delta — warm, slightly sharp, with the ginger heat building slowly at the back of the throat. Gà nấu rượu is eaten in the Mekong Delta as a warming dish during the rainy season and as a restorative after physical exertion. It also appears consistently at the tables of people who make it once and cannot stop making it.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 1.2, unit: 'kg', name: 'chicken pieces, bone-in', note: 'thighs and drumsticks preferred. A cut-up whole chicken works perfectly.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for pre-seasoning' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'for pre-seasoning — gives the characteristic color' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Rượu braise',
            items: [
                { amount: 500, unit: 'ml', name: 'rượu đế (Vietnamese rice spirit)', note: '40-45% ABV — available at Vietnamese liquor stores. Substitute: soju, Chinese baijiu, or any clean rice spirit. Do not use sake — too mild.' },
                { amount: 80, unit: 'g', name: 'fresh ginger', note: 'half julienned finely for the braise, half julienned for the garnish' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, bruised and cut into 5cm pieces' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder', note: 'for the braise — doubles the color and warmth' },
                { amount: 5, name: 'garlic cloves', note: 'lightly smashed, kept whole' },
                { amount: 3, name: 'shallots', note: 'halved' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'extra julienned — piled over the finished dish' },
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Season and sear the chicken',
            description: 'Toss the chicken pieces with fish sauce, turmeric, and black pepper. Leave 10 minutes. Heat oil in a heavy pot or clay pot over high heat. Sear the chicken pieces skin-side down for 3-4 minutes without moving until deeply golden. Flip and sear 2 minutes on the other side. Work in batches — do not crowd. The golden seared surface adds depth to the braise that un-seared chicken cannot produce. Remove and set aside.',
            tip: 'The sear is what separates gà nấu rượu that tastes deep and complex from one that tastes merely alcoholic. The Maillard reaction on the chicken surface creates compounds that persist through the braise and give the sauce its character.',
        },
        {
            title: 'Build the aromatic base',
            description: 'In the same pot, fry the lemongrass pieces, smashed garlic, halved shallots, and half the julienned ginger over medium heat for 2 minutes until fragrant and beginning to color. Add the turmeric and stir for 30 seconds until the oil turns golden. The base should smell intensely of lemongrass and ginger at this stage.',
            tip: 'Frying the lemongrass and ginger in the chicken fat left from searing is the technique that produces a richer result than clean oil. The chicken fat carries and amplifies the aromatic compounds from the ginger and lemongrass.',
        },
        {
            title: 'Add the rice wine — carefully',
            description: 'Return the seared chicken to the pot. Pour the rượu đế over the chicken — it should sizzle on contact with the hot aromatics. If using a gas flame, be aware that the alcohol may briefly ignite when it hits the hot pot — this is normal and subsides in seconds as the pot is removed from the flame. Add fish sauce and sugar. Bring to a full boil.',
            tip: 'If concerned about flambé: reduce the heat before adding the alcohol, pour slowly, and keep a lid nearby to smother any flame. The brief ignition is not dangerous but startling if unexpected.',
        },
        {
            title: 'Braise until sauce reduces',
            description: 'Once boiling, reduce to a medium simmer. Cook uncovered for 25-30 minutes, turning the chicken pieces occasionally. The alcohol evaporates during this time — the sharp spirit smell will mellow into a warm, fragrant aroma as the cooking progresses. The sauce reduces by approximately half. The chicken is done when the meat pulls away from the bone with gentle pressure.',
            tip: 'The smell of the braise tells you what stage you are at. At 5 minutes: sharp alcohol. At 15 minutes: alcohol mellowing into warmth. At 25 minutes: the rice wine character has integrated fully and what remains is the concentrated essence — warm, gingery, golden. This is the moment.',
        },
        {
            title: 'Reduce to a glossy sauce',
            description: 'When the chicken is cooked through, remove the pieces and set aside. Increase the heat and reduce the remaining braising liquid for 3-4 minutes until it thickens to a glossy sauce that coats a spoon — a sauce, not a gravy, not a soup. Return the chicken to the pot and turn to coat in the reduced sauce. Taste and adjust: more fish sauce if it needs salt, a pinch of sugar if too sharp.',
            tip: 'The final reduction is what makes gà nấu rượu a finished dish rather than a braise in progress. The sauce at serving should be concentrated enough to cling to the chicken pieces and pool attractively on the plate beneath — not flow freely.',
        },
        {
            title: 'Finish with ginger and serve',
            description: 'Transfer to a serving plate or bring the clay pot to the table. Pile the extra julienned ginger generously over the top — more than looks reasonable. Scatter spring onion, sliced chili, and cilantro. Serve immediately with steamed rice and lime wedges. The rice wine braising liquid that pools on the plate, soaked into the rice, is the best element of the meal. Spoon it deliberately.',
            tip: 'The raw julienned ginger scattered over the finished dish is not garnish — it is a structural element. Its fresh sharpness contrasts with the mellow warmth of the braise in the way that fresh herbs contrast with long-cooked sauces throughout Vietnamese cooking. Do not reduce the quantity.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
