'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-luon-nghe-an',
    title: 'Cháo Lươn Nghệ An (Nghệ An Eel Rice Porridge)',
    subtitle: 'Rice porridge made from eel bone stock — golden from fresh turmeric — topped with eel pieces stir-fried with lemongrass, galangal, and fresh turmeric until caramelized and fragrant, finished with crispy fried shallots, fresh ginger julienne, and rau răm. The most celebrated regional congee in Vietnamese cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/chao-luon-nghe-an.jpg',
    intro: `Cháo lươn Nghệ An is the eel porridge that Vietnamese people across the country acknowledge as one of the finest regional congees in the national repertoire — a dish so specifically identified with Nghệ An province (the central coastal province that is also the birthplace of Hồ Chí Minh) that eating it anywhere other than at the small rice-porridge shops of Vinh city or the street stalls of the coastal districts produces a specifically different experience, even when the recipe is followed exactly. The reason for this is the lươn (eel) itself: the rice paddy eels (Monopterus albus) of the Nghệ An plain and its network of irrigation canals are considered by Vietnamese food culture to produce a sweeter, more specifically flavored flesh than the same species from other regions, a quality attributed to the specific mineral content of the water and the particular feed available in the flooded rice fields of the province. Whether or not this regional difference is detectable to all palates, the preparation itself is specific and demanding: the eel bones, head, and trimmings are simmered into a stock that is then used to cook the rice porridge; the eel flesh is separately stir-fried with lemongrass, galangal, and fresh turmeric in a hot wok until caramelized and fragrant; and the finished porridge receives the eel, crispy fried shallots, fresh ginger julienne, and rau răm simultaneously at service. The golden color that runs through the entire preparation — the porridge, the eel, the crispy shallots — comes from the fresh turmeric that is used throughout, and it is this golden quality that makes cháo lươn Nghệ An visually as distinctive as it is flavorful. The shops in Vinh that serve nothing else open at 6am and are sold out by 10am, seven days a week, every week of the year.`,
    ingredientSections: [
        {
            title: 'Eel and stock',
            items: [
                { amount: 800, unit: 'g', name: 'fresh rice paddy eel (lươn đồng)', note: 'cleaned and cut into 5cm sections — or ask the fishmonger to clean them. The bones, head, and trimmings go into the stock. Substitute: freshwater eel from Asian markets, cleaned and sectioned.' },
                { amount: 1.5, unit: 'L', name: 'water', note: 'for the eel bone stock' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed — for the stock' },
                { amount: 3, name: 'shallots', note: 'halved and charred — for the stock' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Rice porridge',
            items: [
                { amount: 180, unit: 'g', name: 'jasmine rice', note: 'rinsed once' },
                { amount: 800, unit: 'ml', name: 'strained eel bone stock', note: 'from above' },
                { amount: 300, unit: 'ml', name: 'water', note: 'additional' },
                { amount: 30, unit: 'g', name: 'fresh turmeric', note: 'grated — gives the porridge its golden color and earthy fragrance. Or 1.5 tsp dried turmeric powder.' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for toasting the rice with shallots' },
                { amount: 3, name: 'shallots', note: 'sliced — fried in oil before rice' },
            ],
        },
        {
            title: 'Stir-fried eel topping',
            items: [
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, minced to paste' },
                { amount: 30, unit: 'g', name: 'fresh galangal', note: 'minced — the essential Nghệ An aromatic' },
                { amount: 30, unit: 'g', name: 'fresh turmeric', note: 'minced — more prominent than in most other Vietnamese eel preparations' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Essential toppings',
            items: [
                { amount: 5, unit: 'tbsp', name: 'crispy fried shallots (hành phi)', note: 'generous — the most important textural element' },
                { amount: 4, unit: 'tbsp', name: 'shallot-infused oil' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'finely julienned — a prominent quantity, not a garnish' },
                { amount: 1, name: 'large bunch Vietnamese coriander (rau răm)', note: 'leaves only — very generous Nghệ An quantity' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, unit: 'tsp', name: 'white pepper', note: 'freshly ground per bowl' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the eel bone stock',
            description: 'Separate the eel flesh pieces from the bones — keep the flesh aside for stir-frying. Place all bones, head, and trimmings in a pot with cold water, smashed ginger, charred shallots, and salt. Bring to a boil, skim for 15 minutes, reduce to a gentle simmer. Cook for 45 minutes. The eel bone stock will be golden-tinged and sweet — more delicate than pork or chicken stock but with a specific mineral sweetness from the eel. Strain through a fine sieve.',
            tip: 'The eel bone stock is the element that makes cháo lươn Nghệ An a specifically eel dish rather than a dish with eel on top. The porridge made with this stock carries the eel character through every grain of rice. Porridge made with water and topped with eel produces two separate elements; porridge made with eel stock topped with eel produces a unified bowl.',
        },
        {
            title: 'Cook the golden turmeric porridge',
            description: 'Heat oil in a medium pot. Fry sliced shallots until golden. Add grated fresh turmeric and stir for 30 seconds — the oil will turn deep golden-orange immediately. Add rinsed rice and stir for 2 minutes until coated in the golden turmeric oil. Pour in 800ml of eel bone stock and 300ml water. Bring to a boil, reduce to a medium simmer. Cook for 25-30 minutes, stirring every 5 minutes, until silky and thick. Season with fish sauce and salt.',
            tip: 'Fresh turmeric produces a noticeably deeper, more complex golden color and a more earthy-floral fragrance than dried turmeric powder. If using fresh, grate it on a fine grater — it will stain everything it touches permanently golden-orange. Work on a surface you do not mind staining and use gloves if available.',
        },
        {
            title: 'Marinate the eel flesh',
            description: 'Season the eel flesh sections with 1 tablespoon of fish sauce, half the turmeric, black pepper, and sugar. Leave 15 minutes. The turmeric pre-marination is important for eel specifically — it reduces the slightly muddy character that freshwater eel can carry and gives the flesh the golden color that makes the stir-fried eel visually consistent with the golden porridge beneath it.',
            tip: 'Eel is the freshwater protein that most benefits from turmeric pre-marination — its specific mineral-muddy character from the rice paddy habitat is more pronounced than in fish from cleaner water. The turmeric oils bind with the specific compounds responsible for this character and transform them into something warm and fragrant during the subsequent stir-frying.',
        },
        {
            title: 'Stir-fry the eel — fast and fragrant',
            description: 'Heat oil in a wok over maximum heat until smoking. Add lemongrass paste, galangal, remaining turmeric, garlic, and shallots — fry for 90 seconds until deeply golden and the wok smells of turmeric and lemongrass together. Add minced chili. Add the marinated eel pieces — they will spit in the hot wok. Stir-fry over maximum heat for 4-5 minutes, tossing frequently, until each piece is golden-caramelized on the exterior and cooked through. Add remaining fish sauce and sugar in the final minute.',
            tip: 'The 4-5 minute stir-fry for eel at maximum heat is the window that caramelizes the exterior while keeping the interior moist and sweet. Eel stir-fried for less time tastes raw-adjacent despite being cooked through; eel stir-fried for more time becomes dry and loses the moisture that makes it the superior congee topping it is.',
        },
        {
            title: 'Assemble the Nghệ An way',
            description: 'Ladle the golden porridge into deep bowls — generous, hot. Place a portion of stir-fried eel in the center. Drizzle shallot-infused oil over the surface. Add julienned ginger — more than seems necessary. Scatter rau răm leaves generously — in Vinh, the rau răm quantity is what surprises visitors most. Add sliced spring onion and crispy fried shallots. Grind white pepper. Squeeze lime at the table.',
            tip: 'The rau răm quantity in cháo lươn Nghệ An served at the shops in Vinh is almost equal in volume to the porridge itself — a full handful of leaves per bowl, not the token garnish that most recipes specify. The peppery, slightly citrusy rau răm provides the specific counterpoint to the rich, golden eel and porridge that makes the bowl complete. Do not restrain the rau răm.',
        },
        {
            title: 'Eat in sequence',
            description: 'Stir the bowl before the first spoonful — the shallot oil, eel juices, and lime should distribute through the porridge. The first spoonful should contain porridge, eel, ginger, and rau răm together — this combination establishes the complete bowl character. Eat steadily, adding lime and chili to taste with each spoonful. The eel pieces are eaten alongside the porridge rather than before or after. The bowl is finished when the last of the shallot oil and eel juices have been incorporated into the remaining porridge.',
            tip: 'Cháo lươn Nghệ An eaten slowly over 15-20 minutes is a different experience from the same bowl eaten quickly. The eel juices continue releasing into the porridge as the meal progresses, and the rau răm wilts slightly and melds into the surrounding flavors. The last few spoonfuls of the bowl — when the eel has enriched the porridge and the herbs have softened — are often better than the first.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
