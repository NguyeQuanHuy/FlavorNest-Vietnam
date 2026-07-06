'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-bo-phu-yen',
    title: 'Bún Bò Phú Yên (Phú Yên Beef Vermicelli Soup)',
    subtitle: 'Beef broth perfumed with lemongrass, shrimp paste, and annatto oil — lighter and less aggressively spiced than bún bò Hu? but carrying the same lemongrass-m?m ru?c soul — served with thin-sliced beef, pork hock, and the fresh herbs of the central coast. The Phú Yên version that its own people consider quietly superior.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/bun-bo-phu-yen.jpg',
    intro: `Bún bò Phú Yên exists in a specific position in the Vietnamese noodle soup hierarchy: south of bún bò Hu?, which is famous and widely documented, and north of the southern bún bò that simplifies the lemongrass-shrimp paste combination into something milder. Phú Yên's version occupies the middle — it has the lemongrass and m?m ru?c character of the Hu? tradition, but the broth is clearer and less assertive, the chili heat is present but not dominant, and the overall impression is of a soup that is simultaneously lighter and more nuanced than its more famous northern neighbor. People from Phú Yên who move to Hu? find bún bò Hu? too heavy. People from Hu? who visit Phú Yên find bún bò Phú Yên too delicate. Both assessments are accurate — and both miss the point. Bún bò Phú Yên is calibrated to the palate of the central coast, where the sea breeze and the heat demand something that refreshes while satisfying. The specific character of the Phú Yên version comes from three things: the m?m ru?c (fermented shrimp paste) used is a coastal Phú Yên variety, slightly different in flavor from Hu? m?m ru?c; the annatto oil (d?u di?u) is used more generously, giving the broth a deeper orange-red color; and the fresh lemongrass in the broth is more pronounced than in Hu?, where the paste form dominates. The result is a soup that smells more clearly of lemongrass, looks more dramatically colored, and tastes slightly lighter — the Phú Yên version of a dish that the province has been making for as long as anyone can remember, quietly, without seeking the recognition that Hu? has received.`,
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 800, unit: 'g', name: 'beef shin bones or knuckle bones', note: 'blanched and rinsed' },
                { amount: 300, unit: 'g', name: 'pork hock (giò heo)', note: 'blanched — braised in the broth, served sliced alongside the beef' },
                { amount: 2.5, unit: 'L', name: 'water' },
                { amount: 3, name: 'shallots', note: 'halved and charred over flame' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Lemongrass-shrimp paste paste (s?t s? m?m ru?c)',
            items: [
                { amount: 5, name: 'lemongrass stalks', note: 'inner stalk, very finely minced — the volume of lemongrass is higher than in bún bò Hu?' },
                { amount: 6, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fermented shrimp paste (m?m ru?c Phú Yên)', note: 'thinned with 2 tbsp warm water before using. M?m ru?c from the Phú Yên coast is lighter purple and slightly milder than Hu? m?m ru?c.' },
                { amount: 3, unit: 'tbsp', name: 'annatto oil (d?u di?u)', note: 'more generous than Hu? version — gives the deep orange-red color. Make by heating annatto seeds in oil until deep red, strain.' },
                { amount: 2, name: 'fresh red chilies', note: 'minced — adjust for heat preference. Phú Yên version is moderately spiced.' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Beef toppings',
            items: [
                { amount: 300, unit: 'g', name: 'beef brisket or flank (th?t bò b?p)', note: 'braised in the broth, sliced thin when serving' },
                { amount: 200, unit: 'g', name: 'beef sirloin (bò tái)', note: 'sliced paper-thin — placed raw in bowl, cooked by boiling broth' },
            ],
        },
        {
            title: 'Noodles',
            items: [
                { amount: 400, unit: 'g', name: 'fresh bún (rice vermicelli)', note: 'medium thickness — the standard for bún bò across the central coast' },
            ],
        },
        {
            title: 'Garnish and table herbs',
            items: [
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 3, unit: 'tbsp', name: 'shallot-infused oil' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 1, name: 'bunch Vietnamese basil (húng qu?)' },
                { amount: 1, name: 'bunch bean sprouts' },
                { amount: 1, name: 'banana blossom (b?p chu?i)', note: 'finely shredded — the central coast bún bò garnish' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 2, unit: 'tbsp', name: 'extra m?m ru?c', note: 'thinned and served alongside for those who want more' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the clear beef-pork broth',
            description: 'Blanch beef bones and pork hock separately in boiling water for 10 minutes. Drain and rinse thoroughly. Return both to a large pot with cold water, charred shallots, and ginger. Bring to a boil, reduce to the lowest simmer. Skim for the first 20 minutes. After 1 hour, add the beef brisket to braise. Simmer for a total of 2 hours — the brisket is done when completely tender. Remove the brisket and pork hock and set aside to cool for slicing. The broth should be clear amber.',
            tip: 'The pork hock in the broth alongside beef bones is the Phú Yên technique — it adds collagen and a slight pork sweetness that rounds the beef character. Bún bò Hu? occasionally uses pork hock as a topping but rarely braises it in the broth simultaneously.',
        },
        {
            title: 'Make the lemongrass-shrimp paste sauté',
            description: 'Heat neutral oil in a pan over medium heat. Add minced lemongrass, garlic, and shallots. Fry slowly for 5-6 minutes until golden and intensely fragrant — the lemongrass must be cooked through, not just warmed. Add minced chili and fry 1 minute. Add the thinned m?m ru?c — it will spit in the oil. Stir for 2 minutes until the raw shrimp paste character cooks out and becomes savory. Add annatto oil — the mixture immediately turns deep orange-red. Add fish sauce and sugar.',
            tip: 'Cooking the m?m ru?c in the oil until its raw fermented character mellows is the critical step. Raw m?m ru?c added directly to broth tastes sharp and one-dimensional. Fried m?m ru?c tastes savory, complex, and specifically central Vietnamese. This is the technique that makes bún bò taste like bún bò.',
        },
        {
            title: 'Combine paste and broth',
            description: 'Strain the beef-pork broth. Return to a clean pot. Add the entire lemongrass-m?m ru?c paste to the hot broth. Stir well. The broth immediately turns from amber to a deep orange-red from the annatto oil. Simmer for 15 minutes to allow the lemongrass paste to fully integrate into the broth. Taste: the Phú Yên version should taste of lemongrass first, shrimp paste second, with a moderate chili warmth and the clean sweetness of the pork broth underneath.',
            tip: 'The color of authentic bún bò Phú Yên is distinctly more orange than Hu? — the extra annatto oil is deliberate. When you see a bowl with a deep reddish-orange broth surface, you are looking at a properly made Phú Yên version.',
        },
        {
            title: 'Season and taste the Phú Yên balance',
            description: 'Season with fish sauce, sugar, and salt. The Phú Yên balance: lemongrass fragrance dominant, m?m ru?c as savory depth not as foreground flavor, moderate heat, a clean sweetness from the pork broth. It should taste clearly different from bún bò Hu? — lighter, more lemongrass-forward, less pungent from the shrimp paste. If it tastes too similar to Hu?, add more fresh lemongrass to the broth and simmer 5 more minutes.',
            tip: 'The test of Phú Yên balance: close your eyes and taste a spoonful of plain broth. The first thing you should smell and taste is lemongrass. The shrimp paste should be a background warmth. In bún bò Hu?, the m?m ru?c is more prominent. This difference is the identity of the two versions.',
        },
        {
            title: 'Slice the proteins',
            description: 'Slice the cooled braised brisket against the grain into 5mm rounds. Slice the pork hock into 5mm slices — include both the skin and meat for textural variety. Slice the raw sirloin paper-thin for the tái topping. Season the raw beef lightly with fish sauce and pepper. Keep cold until serving.',
            tip: 'The pork hock served in bún bò Phú Yên specifically — skin on, in neat slices — is more prominent here than in other bún bò versions. The collagen-rich pork hock skin adds a textural element that makes the Phú Yên version more substantial than it appears.',
        },
        {
            title: 'Assemble and serve',
            description: 'Blanch bún noodles in boiling water 30 seconds. Drain and divide into deep bowls. Arrange sliced brisket, pork hock, and raw beef slices over the noodles. Ladle boiling broth over everything — the raw beef cooks immediately. Top with shallot oil, crispy shallots, spring onion, and cilantro. Serve with a generous herb plate of Vietnamese basil, bean sprouts, shredded banana blossom, lime, chili, and a small bowl of thinned m?m ru?c for those who want more. The banana blossom is specifically the Phú Yên addition to the herb plate.',
            tip: 'The shredded banana blossom in the herb plate is the visual signal of a central coast bún bò. Add it raw to the bowl for crunch and a faint bitter note that contrasts with the rich broth. Phú Yên diners add it generously — it is not a garnish but an ingredient.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
