'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-hap-com-me',
    title: 'Gà H?p Com M? (Chicken Steamed with Fermented Rice)',
    subtitle: 'Whole chicken marinated in com m? — a mildly sour fermented rice paste unique to central Vietnamese cooking — then steamed until the lactic acid in the ferment tenderizes the meat and perfumes it with a clean sourness that no vinegar or lime can replicate.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '3 days (fermentation) + 1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ga-hap-com-me.jpg',
    intro: `Gà h?p com m? is the most specifically Phú Yên dish in the province's chicken repertoire — a preparation built around com m?, the fermented rice paste that is the distinctly central Vietnamese souring agent found in Phú Yên, Bình Ð?nh, and neighboring provinces. Com m? — literally "sour rice" — is made by cooking jasmine rice, allowing it to cool, then fermenting it at room temperature for 2-3 days until lactic acid bacteria produce a gentle, clean sourness without the alcohol content of a wine-based ferment. The resulting paste tastes of very mild yogurt, slightly tangy, slightly starchy, with none of the sharpness of vinegar and none of the brightness of lime. When this paste is rubbed over a whole chicken and the chicken is steamed with it, the lactic acid works on the muscle proteins during the marination period and the cooking, producing a texture of unusual tenderness — softer than a plain steamed chicken, with the sourness distributed through the meat rather than sitting on the surface. The steam carries the fermented rice character into every part of the bird. The resulting chicken is simultaneously tender and flavorful in a way that is difficult to describe to someone who has not eaten it: the lactic acid note is clear but never sharp, the meat is juicy, and the skin has a faint opacity from the rice coating. Com m? is not sold commercially — it is made at home, and the making of it is the necessary first step of this recipe. The fermentation takes 2-3 days and requires no special equipment. The patience is the only barrier to a dish that is, once made, one of the most distinctive in the entire Vietnamese chicken canon.`,
    ingredientSections: [
        {
            title: 'Com m? (fermented rice paste — make 2-3 days ahead)',
            items: [
                { amount: 200, unit: 'g', name: 'jasmine rice', note: 'cooked to standard steamed rice consistency — slightly drier than eating rice' },
                { amount: 2, unit: 'tbsp', name: 'previous com m? or plain yogurt', note: 'the starter culture — if making for the first time, plain yogurt provides the lactobacillus bacteria. After the first batch, reserve 2 tbsp to start the next.' },
                { amount: 0.5, unit: 'tsp', name: 'salt', note: 'slightly inhibits unwanted bacteria while allowing lactobacillus to thrive' },
            ],
        },
        {
            title: 'Chicken and marinade',
            items: [
                { amount: 1, name: 'whole chicken, 1.3-1.5kg', note: 'free-range essential — the longer marination in com m? (4-12 hours) requires a chicken with enough fat to stay moist' },
                { amount: 150, unit: 'g', name: 'com m?', note: 'from the batch above — the primary marinade' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, finely minced — mixed into the com m?' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'finely minced — mixed into the com m?' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'colors the chicken golden through the rice coating' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Steaming bath',
            items: [
                { amount: 500, unit: 'ml', name: 'water' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised — in the steaming water' },
                { amount: 20, unit: 'g', name: 'ginger', note: '2 slices — in the steaming water' },
            ],
        },
        {
            title: 'Dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'com m?', note: 'stirred into the dipping sauce — adds the fermented rice note to the sauce. Optional but specific to Phú Yên serving style.' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch rau ram', note: 'leaves only' },
                { amount: 4, name: 'spring onions, sliced' },
                { amount: 2, name: 'limes, extra wedges' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the com m? — 2 to 3 days ahead',
            description: 'Cook the jasmine rice as normal. While still warm (not hot), mix in 2 tablespoons of plain yogurt or previous com m? batch and salt. Transfer to a clean glass jar or ceramic container. Cover loosely with cloth — not airtight, the fermentation produces CO2. Leave at room temperature (24-28°C ideal) for 2-3 days. Stir once daily. After 2 days taste: it should be pleasantly sour, slightly tangy, with a clean lactic character — like mild yogurt but starchier. If not sour enough, leave another 24 hours. Refrigerate once it reaches the desired sourness — it keeps for 1 week.',
            tip: 'Room temperature is critical — below 20°C the fermentation is too slow and may not acidify properly. Above 30°C the bacteria become too active and the paste can develop off-flavors. The ideal fermentation environment is a warm kitchen counter away from direct sunlight. In summer, 2 days is usually sufficient. In winter, 3 days minimum.',
        },
        {
            title: 'Make the com m? marinade',
            description: 'Combine the com m? with finely minced lemongrass, ginger, garlic, fish sauce, sugar, turmeric, and white pepper. The marinade will be thick — more paste than liquid. It should taste sour, savory, aromatic, and slightly sweet. The lemongrass and ginger must be minced almost to a paste — large pieces cannot penetrate with the chicken skin and will fall off during steaming.',
            tip: 'Use a food processor or pound in a mortar to achieve the fine paste needed for the lemongrass and ginger. Large fibrous pieces of lemongrass in the marinade do not perfume the meat — only the oils released from properly broken-down lemongrass penetrate the skin.',
        },
        {
            title: 'Marinate the chicken — minimum 4 hours',
            description: 'Loosen the skin of the chicken carefully from the flesh over the breast and thighs — slide your fingers between skin and meat without tearing. Push some of the com m? paste directly under the skin and spread it over the breast and thigh meat. Rub the remaining paste over every external surface and inside the cavity. Place in a container or zip-lock bag and refrigerate for minimum 4 hours — overnight (8-12 hours) is significantly better. The lactic acid in the com m? works on the proteins continuously throughout the marination.',
            tip: 'The under-skin application is the technique that makes gà h?p com m? different from simply rubbing the marinade on the exterior. The paste under the skin is in direct contact with the meat and seasons and tenderizes from within the skin layer rather than just on the surface.',
        },
        {
            title: 'Bring to room temperature and steam',
            description: 'Remove chicken from the refrigerator 30 minutes before steaming. Build the steaming bath with water, lemongrass, and ginger — bring to a vigorous boil. Place the chicken breast-side down on the steaming rack — the com m? coating will be visible on the surface, slightly white from the rice paste. Cover tightly and steam for 35-40 minutes for a 1.3kg chicken, 40-45 for 1.5kg. Check water level at 20 minutes and add boiling water if needed.',
            tip: 'The com m? coating on the chicken surface will partially solidify during steaming into a thin, slightly opaque layer that looks unusual but is correct — this is the cooked rice starch from the fermented paste setting on the skin surface. It is not a flaw.',
        },
        {
            title: 'Test and rest',
            description: 'Pierce the thigh joint — juices must run completely clear. When done, remove from the steamer and rest 10 minutes. Unlike plain steamed chicken, gà h?p com m? does not benefit from an ice bath — the com m? coating would rinse away. Simply rest at room temperature. The steaming liquid in the pot below will have absorbed some of the com m? character and lemongrass — season and serve as a small soup alongside.',
            tip: 'The absence of the ice bath is the key difference in the post-cooking technique. The com m?-coated chicken is served at room temperature, which also allows the lactic acid character in the coating to remain more present than it would be at the ice-cold temperature of an ice-bathed bird.',
        },
        {
            title: 'Make the com m? dipping sauce and serve',
            description: 'Combine fish sauce, lime juice, sugar, and water. Stir until dissolved. Add garlic and chili. Stir in 2 tablespoons of com m? — it will make the sauce slightly cloudy and add the fermented rice character to the dipping experience. Chop the chicken through the bone. Arrange on a plate. Scatter rau ram and sliced spring onion over the top. Serve with the com m? dipping sauce, extra lime, and steamed rice.',
            tip: 'The com m? in the dipping sauce is the Phú Yên-specific element that ties the whole dish together — the same fermented rice character in the marinade, the meat, and the sauce creates a unified flavor experience. Without it, the dish works but the coherence is missing.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
