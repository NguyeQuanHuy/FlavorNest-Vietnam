'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-ngu-dai-duong-phu-yen',
    title: 'Cá Ngừ Đại Dương Phú Yên (Phú Yên Ocean Tuna — Three Preparations)',
    subtitle: 'The hand-line caught yellowfin and bigeye tuna of Phú Yên\'s deep-sea fleet — the fish that the province has staked its culinary reputation on — prepared three ways from the same catch: sashimi-style raw with mắm nhĩ ginger sauce, grilled over charcoal with muối lá é, and braised dark and slow with galangal and fish sauce.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-ngu-dai-duong-phu-yen.jpg',
    intro: `Cá ngừ đại dương Phú Yên is the tuna that has made the province famous throughout Vietnam — not the canned tuna of industrial fishing, but the hand-line caught (câu tay) yellowfin (cá ngừ vây vàng) and bigeye tuna (cá ngừ mắt to) that Phú Yên's deep-sea fleet brings in from the waters of the South China Sea, some of the most productive tuna fishing grounds in Southeast Asia. The câu tay method — hand-line fishing, where individual fish are caught on a single line rather than netted — produces tuna of a specific quality: less stressed than netted fish, with the lactic acid in the muscle not depleted by exhaustion, which means the flesh retains its sweetness and its specific red color rather than the pale, slightly bitter flesh that heavily stressed tuna produces. Phú Yên tuna is sold at the Tuy Hòa harbor market from the early morning when the boats come in, at prices calibrated to the freshness in hours rather than days, and is eaten throughout the province in preparations that range from raw to grilled to braised — the three cooking philosophies of the province applied to the ingredient that most rewards all three. The raw preparation (tái or gỏi style) showcases the tuna's sweetness and color directly. The grilled preparation produces the caramelized exterior that the dense, fat-rich tuna flesh develops magnificently on charcoal. The kho preparation — the slow braise in fish sauce and galangal — produces the deepest, most concentrated expression of the fish's flavor. This recipe covers all three, because a single large tuna piece from Phú Yên's boats deserves to be understood from all directions.`,
    ingredientSections: [
        {
            title: 'Tuna',
            items: [
                { amount: 800, unit: 'g', name: 'sashimi-grade fresh tuna loin (cá ngừ đại dương phi lê)', note: 'deep red, very fresh — from hand-line caught yellowfin or bigeye if possible. The flesh should be deep burgundy-red, firm but slightly yielding, with no brown discoloration. Divide into three portions: 250g for the raw preparation, 300g for grilling, 250g for kho.' },
            ],
        },
        {
            title: 'Raw preparation (tái cá ngừ)',
            items: [
                { amount: 250, unit: 'g', name: 'tuna, paper-thin sliced', note: 'across the grain — 3mm maximum. Served immediately after slicing.' },
                { amount: 3, unit: 'tbsp', name: 'mắm nhĩ (Phú Yên first-press fish sauce)', note: 'thinned with 1 tbsp lime juice — the curing agent and primary seasoning' },
                { amount: 1, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'microplane-grated' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
            ],
        },
        {
            title: 'Grilled preparation (cá ngừ nướng than)',
            items: [
                { amount: 300, unit: 'g', name: 'tuna steak, 2cm thick' },
                { amount: 1, unit: 'tsp', name: 'coarse salt', note: 'rubbed on both surfaces' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil', note: 'brushed on before grilling' },
            ],
        },
        {
            title: 'Braised preparation (cá ngừ kho)',
            items: [
                { amount: 250, unit: 'g', name: 'tuna, cut into 4cm cubes' },
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'for the caramel base' },
                { amount: 3, unit: 'tbsp', name: 'mắm nhĩ' },
                { amount: 30, unit: 'g', name: 'fresh galangal', note: 'sliced — essential for fish kho in Phú Yên' },
                { amount: 4, name: 'garlic cloves', note: 'sliced' },
                { amount: 2, name: 'shallots', note: 'halved' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'whole' },
                { amount: 100, unit: 'ml', name: 'water', note: 'just enough to begin the braise' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Muối lá é (for grilled preparation)',
            items: [
                { amount: 15, unit: 'g', name: 'fresh lá é leaves' },
                { amount: 1.5, unit: 'tsp', name: 'coarse salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'limes' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An' },
                { amount: 1, name: 'bunch rau răm' },
                { amount: 1, name: 'bunch fresh lá é leaves' },
                { amount: 1, name: 'bunch Vietnamese coriander' },
                { amount: 1, name: 'cucumber', note: 'sliced into batons' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 2, name: 'extra limes' },
            ],
        },
    ],
    steps: [
        {
            title: 'PREPARATION 1: Raw tái cá ngừ — serve first',
            description: 'Slice 250g of tuna paper-thin (3mm) across the grain immediately before serving — tuna oxidizes and changes color within minutes of slicing. Combine mắm nhĩ, lime juice, sugar, microplane-grated ginger, and chili. Arrange the slices on a cold plate. Drizzle the mắm nhĩ ginger sauce over. Serve immediately with rau răm and sesame crackers. The raw tuna in this preparation should taste of the sea, of the fat richness specific to deep-water tuna, and of the mắm nhĩ that frames rather than overpowers it.',
            tip: 'Slice the raw tuna on a chilled surface and serve within 2 minutes of slicing. Phú Yên\'s câu tay tuna at peak freshness has a specific sweetness in the raw flesh that is the clearest argument for why hand-line fishing produces better eating quality than net fishing. This sweetness is the first and most important flavor in tái cá ngừ Phú Yên.',
        },
        {
            title: 'PREPARATION 2: Grilled tuna over charcoal',
            description: 'Season the 2cm-thick tuna steak with coarse salt and black pepper. Brush with oil. Build charcoal to medium-hot. Grill the tuna steak 2-3 minutes per side for medium-rare (the correct doneness for tuna) — the surface should be charred and caramelized while the center remains deep pink. Tuna cooked to well-done loses its characteristic richness entirely. Rest 2 minutes. Slice and serve with muối lá é alongside.',
            tip: 'The correct doneness for grilled Phú Yên tuna is medium-rare — a charred exterior with a warm pink center. The dense, fat-rich flesh of yellowfin and bigeye tuna at this doneness is the most satisfying version of the fish. Well-done tuna is dry and flavorless. The char from the charcoal against the rich tuna flesh is the preparation that most clearly demonstrates why this tuna is priced at a premium.',
        },
        {
            title: 'PREPARATION 3: Cá ngừ kho — the slow braise',
            description: 'Make a dark caramel: heat oil and sugar in a small clay pot until deep amber. Add galangal, garlic, and shallots — fry 1 minute. Add tuna cubes and coat in the caramel. Add mắm nhĩ, whole chilies, and water. Bring to a boil, reduce to the lowest simmer. Braise uncovered for 20-25 minutes until the sauce has reduced to a dark, thick glaze. The kho tuna should be dark and intensely flavored — the fish that in the raw preparation tasted of the sea now tastes of the sea concentrated through caramel and galangal.',
            tip: 'Tuna kho is unusual in Vietnamese cooking because tuna is typically a raw or grilled fish — the kho treatment is specific to Phú Yên, where the abundance of high-quality tuna makes using some pieces for braising an uncontroversial decision. The galangal in tuna kho is the aromatic that most specifically complements the rich, dense tuna flesh in a braised context.',
        },
        {
            title: 'Pound the muối lá é',
            description: 'Pound lá é leaves with salt, pepper, and sugar until intensely green and fragrant. Transfer to plates. This is the dipping condiment specifically for the grilled preparation — the raw version uses the mắm nhĩ ginger sauce, and the kho version needs no dipping sauce because the braising sauce is self-contained. The three preparations use three different condiment approaches: raw mắm nhĩ, grilled muối lá é, braised self-sauce.',
            tip: 'The three condiment approaches across three preparations from the same fish illustrates the Phú Yên cooking philosophy completely: the raw preparation needs the cleanest, most complex condiment (mắm nhĩ ginger); the grilled preparation needs the most aromatic (muối lá é); the braised preparation needs nothing external. The fish dictates the condiment.',
        },
        {
            title: 'Serve all three together — the complete Phú Yên tuna experience',
            description: 'Serve all three preparations simultaneously on a shared table: the raw tái on a cold plate, the grilled steak sliced alongside muối lá é, the kho in its clay pot. Provide sesame crackers, all fresh herbs, cucumber, rice, and lime. The complete experience: raw tuna shows the ingredient. Grilled tuna shows what fire does to it. Braised tuna shows what time and concentration do to it. Eating all three from the same fish is understanding why Phú Yên considers this tuna worth protecting.',
            tip: 'The three preparations served together from the same fish is specifically the Phú Yên way of honoring a premium ingredient — showing what it is, what fire makes it, and what slow cooking makes it. This three-way service is done at the better tuna restaurants along the Tuy Hòa harbor, where the morning catch is prepared in all forms before noon.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
