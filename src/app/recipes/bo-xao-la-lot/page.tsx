'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-xao-la-lot',
    title: 'Bò Xào Lá Lốt (Beef Stir-Fried with Wild Pepper Leaf)',
    subtitle: 'Minced beef seasoned with lemongrass and fish sauce, wrapped in lá lốt leaves and grilled until the leaf chars and the beef inside stays juicy and fragrant — or stir-fried loose with the torn leaves until the wild pepper aroma is driven into every piece.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/bo-xao-la-lot.jpg',
    intro: `Bò xào lá lốt is one of the most aromatic dishes in Vietnamese cooking — a preparation where the defining character comes entirely from lá lốt, the wild pepper leaf (Piper sarmentosum) that grows throughout Vietnam and has a flavor that sits between black pepper, basil, and something entirely its own: warm, slightly spicy, camphor-adjacent, deeply green. The leaf is not subtle. When it chars over heat, it releases aromatic compounds that perfume everything in the pan and, when wrapped around the beef, penetrate the meat during cooking. There are two versions of this dish and both are correct: bò cuốn lá lốt, where seasoned minced beef is wrapped in whole leaves and grilled over charcoal until the leaf blackens and the beef inside steams in its own juices; and bò xào lá lốt proper, where the beef is stir-fried in a wok with torn lá lốt leaves until the leaf wilts, chars slightly at the edges, and its oils coat the beef. This recipe covers both — the grilled roll version for occasions when charcoal is available and the experience is the point, and the stir-fry version for weeknight cooking when the flavor is the point. Both are eaten with rice paper, fresh herbs, cucumber, and nước chấm. Both are among the dishes that Vietnamese people who have been away from home dream about in a specific, visceral way.`,
    ingredientSections: [
        {
            title: 'Beef mixture',
            items: [
                { amount: 500, unit: 'g', name: 'minced beef (thịt bò bằm)', note: '20% fat content — lean beef produces dry, crumbly result. Ask butcher to mince beef chuck or short rib.' },
                { amount: 2, name: 'lemongrass stalks', note: 'inner stalk, very finely minced — almost a paste' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Lá lốt leaves',
            items: [
                { amount: 40, name: 'fresh lá lốt leaves (wild pepper leaf)', note: 'large leaves for wrapping (bò cuốn), small-medium for stir-frying. Available at Vietnamese and Asian grocery stores. No substitute — the dish exists only with this leaf.' },
            ],
        },
        {
            title: 'For the stir-fry version',
            items: [
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
                { amount: 2, name: 'extra garlic cloves', note: 'thinly sliced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'added to the wok at the end' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Table accompaniments',
            items: [
                { amount: 16, name: 'sheets dried rice paper (bánh tráng)', note: 'for wrapping' },
                { amount: 200, unit: 'g', name: 'dried rice vermicelli', note: 'cooked and cooled' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'cucumber', note: 'julienned' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
            ],
        },
        {
            title: 'Nước chấm',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 5, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Season the beef mixture',
            description: 'Combine minced beef with finely minced lemongrass, garlic, shallots, fish sauce, sugar, black pepper, sesame oil, and neutral oil. Mix thoroughly with your hands until the ingredients are completely incorporated and the mixture holds together when pressed. Rest for 15 minutes — the lemongrass needs time to perfume the meat. The mixture should smell strongly of lemongrass even before cooking.',
            tip: 'The lemongrass must be minced to an almost-paste consistency — large fibrous pieces do not perfume the beef uniformly. Pound in a mortar first, then mince, for the finest result. This step is what separates fragrant bò lá lốt from mediocre bò lá lốt.',
        },
        {
            title: 'METHOD 1: Bò cuốn lá lốt — the wrapped and grilled version',
            description: 'Take a large lá lốt leaf, shiny side down. Place 1 tablespoon of beef mixture in the center of the lower third of the leaf. Roll tightly from the bottom, encasing the beef completely. Secure with a toothpick or leave seam-side down. The roll should be firm and compact — about 4cm long and 2cm wide. Prepare all rolls before grilling.',
            tip: 'Shiny side down (dull side up for rolling) is the correct orientation — the shiny side faces out on the finished roll and chars more attractively. The dull interior of the leaf in contact with the beef releases more aromatic oil into the meat during grilling.',
        },
        {
            title: 'Grill the rolls over charcoal',
            description: 'Place the rolls on a wire rack over hot charcoal. Grill for 3-4 minutes per side until the lá lốt leaf is deeply charred in patches — not uniformly black, but with specific char spots where the leaf has directly contacted the heat. The leaf should be clearly cooked and slightly shrunken. The beef inside is cooked through from the leaf\'s heat. The smell when the leaf chars is one of the defining aromas of Vietnamese cooking.',
            tip: 'The charring of the lá lốt is the process that releases the full aromatic potential of the leaf. A lá lốt that is merely wilted and green has not reached its flavor peak. The specific compounds that make the leaf extraordinary are released by heat damage to the cell walls — which requires genuine charring.',
        },
        {
            title: 'METHOD 2: Bò xào lá lốt — the stir-fry version',
            description: 'Heat a wok over maximum heat until smoking. Add oil, then the sliced garlic. Fry 20 seconds. Add the seasoned beef mixture and break up with a spatula — spread across the wok in a thin layer. Do not stir for 60 seconds — let the bottom caramelize. Then break up and toss. When the beef is 80% cooked, tear the lá lốt leaves directly into the wok in large pieces — 3-4 pieces per leaf. Toss vigorously for 60-90 seconds until the leaves wilt, char at the edges, and the aroma blooms explosively.',
            tip: 'Tearing the leaves rather than cutting produces more irregular edges that char more and release more aromatic oil. Add them when the beef is almost — not fully — cooked, so they have 90 seconds in the wok without over-charring while the beef finishes.',
        },
        {
            title: 'Season and finish',
            description: 'For the stir-fry version: add fish sauce, sugar, and sliced chili to the wok in the last 30 seconds. Toss once to distribute. Remove from heat immediately — the lá lốt continues charring from residual heat and will become bitter if left too long on heat after the leaves are already wilted.',
            tip: 'The moment to pull bò xào lá lốt from the heat: when the leaves are wilted, have charred edges, and the wok smells intensely of the wild pepper leaf oil. 5 seconds too long and the char crosses from aromatic to bitter. This is the most time-sensitive step in the dish.',
        },
        {
            title: 'Serve and assemble at the table',
            description: 'Transfer to a serving plate. Scatter spring onion and extra lá lốt leaves (raw) over the top. Make the nước chấm and divide among individual bowls. Set out all wrapping ingredients at the table. To eat: dampen a rice paper sheet, place vermicelli, a piece of beef (rolled or stir-fried), herbs, and cucumber on it. Roll loosely. Dip entirely in the nước chấm. The raw lá lốt leaf eaten alongside the cooked version amplifies the wild pepper character of the whole dish.',
            tip: 'Serving raw lá lốt leaves alongside the cooked beef is the technique that demonstrates the full range of the leaf — cooked lá lốt is warm, slightly smoky, and deep; raw lá lốt is sharp, fresh, and bright. Together in the same wrap they produce the complete lá lốt experience.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}