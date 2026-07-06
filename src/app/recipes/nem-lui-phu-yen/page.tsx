'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nem-lui-phu-yen',
    title: 'Nem Lụi Phú Yên (Phú Yên Lemongrass Pork Skewers)',
    subtitle: 'Seasoned minced pork wrapped around the base of fresh lemongrass stalks and grilled over charcoal until caramelized — the lemongrass perfuming the pork from within as it cooks. Wrapped in rice paper with green banana, star fruit, and herbs, dipped in a peanut sauce that is specific to this preparation and no other.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/nem-lui-phu-yen.jpg',
    intro: `Nem lụi is the lemongrass pork skewer of central Vietnam — a preparation shared by Phú Yên, Bình Định, Quảng Nam, and Đà Nẵng, each province claiming its own version as the definitive one. The Phú Yên version — nem lụi Tuy Hòa specifically — is characterized by three things that distinguish it from its neighbors: the pork mixture includes a higher proportion of pork fat than the Đà Nẵng version, producing a richer, juicier result after grilling; the dipping sauce (tương chấm) is made with toasted peanuts, sesame, and hoisin in a proportion specific to Phú Yên; and the fresh accompaniments include green star fruit (khế xanh) sliced thin alongside the usual green banana and cucumber — a combination that provides an additional sour note against the rich grilled pork. Lụi means the act of threading onto a skewer, and in nem lụi the skewer is a fresh lemongrass stalk — not a bamboo stick, not a metal skewer. The fresh lemongrass does two things simultaneously: it holds the pork in place during grilling, and it releases its aromatic oils into the pork from the inside as the heat builds, so that the meat is perfumed throughout rather than merely on the surface. Grilled over charcoal until the pork caramelizes and the lemongrass stalk blackens and chars below the meat — the charred lemongrass end releasing its final burst of fragrance as it burns — nem lụi Phú Yên is a dish that requires the hands to assemble at the table and rewards the effort completely.`,
    ingredientSections: [
        {
            title: 'Pork mixture',
            items: [
                { amount: 500, unit: 'g', name: 'minced pork (thịt heo bằm)', note: '30% fat content — the higher fat percentage is specific to Phú Yên nem lụi and is what keeps the skewer juicy after charcoal grilling' },
                { amount: 100, unit: 'g', name: 'pork fat (mỡ heo)', note: 'finely minced separately then combined — the extra fat layer is the Phú Yên addition' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk only, very finely minced to a paste — for the pork mixture, in addition to the skewer stalks' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the characteristic golden color to the grilled pork' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 1, unit: 'tbsp', name: 'cornstarch', note: 'binder — helps the pork adhere to the lemongrass stalk' },
            ],
        },
        {
            title: 'Lemongrass skewers',
            items: [
                { amount: 16, name: 'fresh lemongrass stalks', note: 'thick, firm stalks 25-30cm long — the skewers. Remove the tough outer layers until you reach the white, firm inner stalk. Soak in water 30 minutes before grilling to slow burning.' },
            ],
        },
        {
            title: 'Phú Yên peanut dipping sauce (tương đậu phộng)',
            items: [
                { amount: 100, unit: 'g', name: 'roasted peanuts', note: 'skins removed, roughly ground — not smooth paste' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds', note: 'ground' },
                { amount: 3, unit: 'tbsp', name: 'hoisin sauce' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 100, unit: 'ml', name: 'water', note: 'added gradually to reach dipping consistency' },
                { amount: 3, name: 'garlic cloves', note: 'minced — fried briefly in oil before adding other ingredients' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil', note: 'for frying the garlic' },
                { amount: 1, unit: 'tsp', name: 'lime juice', note: 'added at the end to brighten' },
            ],
        },
        {
            title: 'Table wrapping ingredients',
            items: [
                { amount: 20, name: 'sheets dried rice paper (bánh tráng)', note: 'large, thin — dampened briefly before rolling' },
                { amount: 2, name: 'green bananas (chuối chát)', note: 'peeled and thinly sliced — the characteristic astringency is part of the dish' },
                { amount: 2, name: 'green star fruit (khế xanh)', note: 'thinly sliced — the Phú Yên addition that provides extra sourness. Substitute: green mango or sour green apple.' },
                { amount: 1, name: 'cucumber', note: 'julienned' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the pork mixture — rest 30 minutes',
            description: 'Combine minced pork with finely minced pork fat, lemongrass paste, garlic, shallots, fish sauce, sugar, black pepper, turmeric, sesame oil, and cornstarch. Mix thoroughly with hands, working the mixture until it becomes slightly sticky and cohesive — about 3 minutes of mixing. The mixture should hold its shape when pressed. Rest covered for 30 minutes — the lemongrass needs time to perfume the pork and the cornstarch needs to fully hydrate as a binder.',
            tip: 'The pork fat mixed separately then combined produces a more even fat distribution than buying pre-minced fatty pork. The fat pockets in pre-minced pork are uneven — separate mincing and combining produces consistent juiciness throughout each skewer.',
        },
        {
            title: 'Prepare and soak the lemongrass skewers',
            description: 'Trim the lemongrass stalks to 25cm. Remove all tough outer layers until the stalk is white, smooth, and firm enough to skewer pork without bending. Soak in cold water for 30 minutes — the water absorbed by the lemongrass slows the burning of the stalk during grilling, giving the pork time to cook before the skewer burns through. Pat the upper portion of the skewer (where the pork will be wrapped) dry before using — wet lemongrass prevents the pork from adhering.',
            tip: 'Thick lemongrass is essential — thin stalks bend under the weight of the pork or snap during grilling. Buy the thickest stalks available. If the stalks are thin, use two bound together with kitchen twine.',
        },
        {
            title: 'Wrap the pork around the lemongrass',
            description: 'Take about 40-50g of pork mixture (a generous tablespoon) and wrap it firmly around the lower third of the lemongrass stalk — the part that will be over the coals. Press the pork firmly to compact it and ensure it adheres completely to the stalk surface. The pork layer should be about 1.5cm thick and 6-7cm long. Smooth the surface with wet hands. Make sure there are no gaps or thin spots where the pork could separate from the stalk during grilling.',
            tip: 'Compressing the pork firmly around the stalk is the step that determines whether the skewer stays together or falls into the coals. Loosely applied pork contracts and falls off in the first minute of grilling. Firmly pressed pork adheres through the entire cooking time.',
        },
        {
            title: 'Make the Phú Yên peanut sauce',
            description: 'Heat oil in a small pan over medium heat. Fry the minced garlic for 30 seconds until golden. Add hoisin sauce, fish sauce, and sugar — stir to combine. Add water gradually, stirring, until the sauce reaches a thick, pourable consistency. Add the ground peanuts and ground sesame — stir to incorporate. Simmer 2 minutes until the peanuts absorb into the sauce and the whole mixture thickens further. Remove from heat, add lime juice and minced chili. The sauce should be thick enough to coat a spoon heavily but pourable when tilted.',
            tip: 'The Phú Yên peanut sauce has more peanut and sesame than the Đà Nẵng or Huế versions — it is thicker, nuttier, and more substantial. The ground sesame alongside the peanut is the specific Phú Yên character. Do not substitute with store-bought peanut sauce — the flavor difference is significant.',
        },
        {
            title: 'Grill over charcoal until caramelized',
            description: 'Build a medium-hot charcoal fire. Grill the nem lụi skewers, turning every 2-3 minutes, for 12-15 minutes total. The pork should caramelize to a deep golden-brown with slight char at the edges. The lemongrass stalk below the pork will char and blacken during grilling — this is correct and desired: the charring stalk releases its final burst of lemongrass fragrance directly into the meat. The skewer is done when the pork is firm throughout, deeply colored, and the lemongrass oil has clearly perfumed the meat.',
            tip: 'The charring of the lemongrass base during grilling is not a failure — it is the moment the dish becomes itself. The burning lemongrass oils released in the final minutes of cooking are what produce the specific perfumed-charcoal character of nem lụi that cannot be replicated in an oven or grill pan.',
        },
        {
            title: 'Assemble at the table — the Phú Yên way',
            description: 'Serve the nem lụi skewers immediately from the grill to the table, still on their lemongrass skewers. Arrange all wrapping ingredients. To eat: dampen a rice paper sheet, place cucumber, green banana, green star fruit, and herbs on the lower third. Pull the pork off the lemongrass skewer directly onto the rice paper. Roll loosely. Dip the entire roll into the Phú Yên peanut sauce. The combination of caramelized lemongrass pork, astringent green banana, sour star fruit, fresh herbs, and nutty-sweet dipping sauce is the complete experience.',
            tip: 'The green banana and star fruit are not optional in the Phú Yên version. The astringency of green banana and the clean sourness of green star fruit are what make this version distinct from all other nem lụi preparations. Without them the wrap is merely sweet and rich; with them it achieves the balance that central Vietnamese food specifically targets.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
