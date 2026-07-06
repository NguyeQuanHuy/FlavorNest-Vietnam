'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trung-chien-mam-nhi-la-e',
    title: 'Tr?ng Chiên M?m Nhi Lá É Phú Yên (Phú Yên Fried Egg with Litsea Fish Sauce)',
    subtitle: 'Eggs beaten with m?m nhi and fried in generous oil until the edges blister into crispy lacework — served not with plain nu?c ch?m but with a m?m nhi sauce infused with pounded lá é leaves that turns the most everyday preparation into something specifically and unmistakably Phú Yên.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/trung-chien-mam-nhi-la-e.jpg',
    intro: `Tr?ng chiên m?m nhi lá é is the Phú Yên fried egg — a preparation that is structurally identical to the tr?ng chiên lá h? of southern Vietnam or the plain fried egg of any Vietnamese household, differentiated entirely by two ingredients: the m?m nhi beaten into the egg before frying rather than standard fish sauce, and the m?m nhi-lá é dipping sauce served alongside rather than a standard nu?c ch?m. These two substitutions produce a completely different eating experience from the same basic technique. The m?m nhi in the egg provides the specific sweetness and depth of the first-press fish sauce that standard fish sauce at the same volume cannot — the egg tastes richer, more rounded, and more complex without tasting of a specific added ingredient. The m?m nhi-lá é dipping sauce is the preparation that makes this specifically and unmistakably Phú Yên: fresh lá é leaves pounded with m?m nhi, lime juice, and sugar produce a sauce that carries both the premium fish sauce depth and the wild citrus-pepper-camphor character of litsea cubeba simultaneously — a combination that exists in this form nowhere outside the province. The fried egg is the vehicle; the m?m nhi-lá é sauce is the point. Together they demonstrate what the province does with its most everyday preparation when its two signature ingredients — the first-press fish sauce and the wild mountain leaf — are applied simultaneously. In Phú Yên households, this is not considered a special dish. It is Tuesday dinner. The fact that it tastes specifically of the province is not a decision that was made — it is simply the result of using what is available and what is always on the table.`,
    ingredientSections: [
        {
            title: 'Fried egg',
            items: [
                { amount: 4, name: 'large eggs' },
                { amount: 1.5, unit: 'tbsp', name: 'm?m nhi (Phú Yên first-press fish sauce)', note: 'beaten into the eggs before frying — not added after' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced — stirred into the egg batter' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'generous — for the blistered Phú Yên-style edge' },
            ],
        },
        {
            title: 'M?m nhi lá é dipping sauce — the defining element',
            items: [
                { amount: 20, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)', note: 'pounded — the wild citrus-pepper leaf of Phú Yên that defines this sauce' },
                { amount: 3, unit: 'tbsp', name: 'm?m nhi', note: 'the sauce base — first-press premium' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'warm water' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 8, name: 'bánh tráng mè Tuy An (sesame rice crackers)', note: 'optional — for the full Phú Yên eating ritual' },
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'for eating raw alongside' },
                { amount: 1, name: 'bunch rau ram' },
                { amount: 2, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 1, name: 'cucumber, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the m?m nhi lá é sauce first',
            description: 'Pound fresh lá é leaves in a mortar until completely broken down — the leaves should release their oil and turn to a dark green paste. Add m?m nhi directly to the mortar and stir to combine with the pounded leaves. Transfer to a small bowl. Add fresh lime juice, sugar, and warm water. Add minced chili. Stir until the sugar dissolves. The sauce should be fragrant with the lá é oil, deep and complex from the m?m nhi, bright from the lime. Taste: all three elements should be detectable — the fish sauce depth, the lime brightness, and the lá é wild citrus note.',
            tip: 'Pounding the lá é leaves directly with the m?m nhi — rather than pounding the leaves separately and then adding the sauce — extracts the lá é oils more completely into the liquid. The m?m nhi acts as a solvent for the volatile litsea oils, producing a more aromatic sauce than one where the leaves were pounded dry and the sauce added later.',
        },
        {
            title: 'Beat the eggs with m?m nhi',
            description: 'Beat the eggs with m?m nhi, black pepper, and sugar until completely combined. Add the sliced spring onion and stir through. Taste the raw egg mixture from a spoon — it should taste richly eggy with a clear savory note from the m?m nhi. The difference from standard fish sauce at this stage is subtle but present: the m?m nhi produces a slightly sweeter, more rounded egg batter.',
            tip: 'The comparison between an egg beaten with m?m nhi and an egg beaten with standard fish sauce is most clearly tasted in the raw batter — the m?m nhi produces a batter that smells of egg and the sea simultaneously, while standard fish sauce produces a batter that smells more sharply of fish sauce. The cooked result reflects this difference.',
        },
        {
            title: 'Fry at maximum heat — 90 seconds undisturbed',
            description: 'Heat oil in a wok or pan over maximum heat until smoking. Pour the egg mixture in one motion. Do not touch for 90 seconds — the edges will blister into the crispy lacework specific to the high-oil Vietnamese frying technique. After 90 seconds the edges are crispy, the center soft. Fold in half with a spatula. Slide onto a plate immediately.',
            tip: 'The blistered edge of tr?ng chiên m?m nhi lá é has a slightly richer, more golden character than the same technique applied to eggs beaten with standard fish sauce — the m?m nhi\'s higher amino acid content produces more pronounced Maillard caramelization at the egg-oil interface. The edge is visually more golden and more deeply flavored.',
        },
        {
            title: 'Serve with the m?m nhi lá é sauce — two ways',
            description: 'Serve the folded omelette with the m?m nhi lá é sauce in individual small bowls, steamed rice, fresh lá é leaves, rau ram, and sesame crackers. Two ways to eat: RICE WAY — spoon omelette pieces over rice, drizzle the m?m nhi lá é sauce over each spoonful. CRACKER WAY — break a piece of omelette onto a sesame cracker, add a raw lá é leaf, dip in the sauce. The cracker way is the more specifically Phú Yên of the two — the sesame cracker extending the province\'s eating ritual into its most everyday meal.',
            tip: 'The m?m nhi lá é sauce served with a plain fried egg is the clearest expression of the Phú Yên philosophy in the entire recipe collection: the province takes its most humble preparation and makes it provincial not by changing the technique but by changing the condiment. The technique is universal; the condiment is Phú Yên. This is the cooking identity of the province in one dish.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
