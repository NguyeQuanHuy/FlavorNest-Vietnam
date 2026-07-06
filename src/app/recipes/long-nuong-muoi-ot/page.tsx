'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'long-nuong-muoi-ot',
    title: 'Lòng Nướng Muối Ớt (Grilled Pork Intestine with Salt and Chili)',
    subtitle: 'The street food that requires the most commitment and delivers the most reward — pork intestine cleaned, marinated in lemongrass and garlic, grilled over charcoal until the outside chars and the inside stays yielding, served with salt-chili dipping sauce and cold beer.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/long-nuong-muoi-ot.jpg',
    intro: `Lòng nướng muối ớt is the dish that separates the curious from the committed. It is pork intestine — specifically the small intestine, thoroughly cleaned, the inner surface scraped until it loses its characteristic odor, then marinated and grilled over charcoal until it chars at the edges and the collagen inside becomes soft and yielding. The outside is crisp from the fire; the inside is silky from the fat and connective tissue. Eaten with muối ớt — salt ground with fresh chili and a squeeze of lime — it is one of the great Vietnamese street food experiences. The technique is simple. The cleaning step requires patience. The result is worth it. This recipe includes full cleaning instructions for first-time cooks and a restaurant shortcut for those with access to a Vietnamese butcher who sells pre-cleaned intestine.`,
    ingredientSections: [
        {
            title: 'Intestine and marinade',
            items: [
                { amount: 600, unit: 'g', name: 'pork small intestine (lòng non)', note: 'pre-cleaned from Vietnamese butcher strongly recommended for first-timers' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk only, very finely minced' },
                { amount: 4, name: 'garlic cloves, minced' },
                { amount: 2, name: 'shallots, minced' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder', note: 'gives the characteristic golden color' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Cleaning (if not pre-cleaned)',
            items: [
                { amount: 2, unit: 'tbsp', name: 'salt', note: 'for scrubbing' },
                { amount: 3, unit: 'tbsp', name: 'rice vinegar or white vinegar', note: 'for final rinse — removes residual odor' },
                { amount: 1, name: 'lemon or lime, juiced', note: 'for final rinse' },
            ],
        },
        {
            title: 'Muối ớt dipping sauce',
            items: [
                { amount: 1, unit: 'tsp', name: 'sea salt or coarse salt' },
                { amount: 2, name: 'fresh red bird\'s eye chilies', note: 'finely minced or pounded with salt in mortar' },
                { amount: 2, name: 'limes', note: 'juiced fresh at the table' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'optional — rounds the heat' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bundle fresh herbs', note: 'Vietnamese coriander (rau răm), perilla (tía tô), mint' },
                { amount: 100, unit: 'g', name: 'bean sprouts', note: 'for freshness and crunch' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean the intestine (if not pre-cleaned)',
            description: 'Turn the intestine inside out by feeding water through one end until the pressure inverts it. Scrape the inner wall with the back of a knife under cold running water — you are removing the mucosal lining which carries most of the odor. Repeat with salt rubbing: coat the outside with coarse salt and rub vigorously for 2 minutes. Rinse thoroughly. Final rinse: soak 5 minutes in cold water with rice vinegar and lime juice. Rinse again with cold water. The cleaned intestine should have only a mild, neutral smell.',
            tip: 'Pre-cleaned intestine from a Vietnamese butcher eliminates this step entirely. If available, buy it pre-cleaned — the result is identical and the process takes 5 minutes instead of 20.',
        },
        {
            title: 'Blanch briefly',
            description: 'Bring a pot of water to a boil with a pinch of salt. Blanch the cleaned intestine for 3-4 minutes. This firms the texture slightly and removes any remaining surface impurities. Drain and rinse with cold water. Cut into 8-10cm lengths.',
            tip: 'Do not over-blanch — more than 5 minutes makes the intestine tough before it even reaches the grill.',
        },
        {
            title: 'Marinate',
            description: 'Combine fish sauce, oyster sauce, sugar, finely minced lemongrass, garlic, shallots, oil, turmeric, and black pepper. Add the intestine pieces and toss to coat completely. Marinate for at least 30 minutes at room temperature, or up to 2 hours in the refrigerator. The turmeric will give the intestine a golden color that deepens on the grill.',
            tip: 'Fine mincing of lemongrass is critical — large pieces burn before the intestine cooks through. Mince almost to a paste.',
        },
        {
            title: 'Make the muối ớt',
            description: 'Pound salt and fresh chili together in a mortar until the chili is broken down and fully integrated with the salt. The color should be a vibrant red-flecked mixture. Add a small amount of sugar if desired. At the table, squeeze fresh lime juice over the muối ớt just before eating — the lime brightens and activates the chili heat. Each diner gets their own small dish.',
            tip: 'The salt-to-chili ratio is personal — more salt produces a milder dip, more chili produces more heat. Vietnamese street vendors often make it aggressively hot.',
        },
        {
            title: 'Grill over high heat',
            description: 'Grill over charcoal or on a very hot griddle pan. Place intestine pieces on the grill and leave undisturbed for 3-4 minutes until the underside develops char marks and the edges begin to crisp. Turn and grill 2-3 minutes on the other side. The intestine is done when the outside is charred in places, the surface is crispy, and the inside, when pressed, feels yielding rather than rubbery. Total time: 6-8 minutes.',
            tip: 'Charcoal gives a smokiness that a pan cannot replicate. If using a pan, use the highest heat possible and accept that the result will be good but different.',
        },
        {
            title: 'Serve immediately',
            description: 'Arrange grilled intestine on a plate with fresh herbs, bean sprouts, and lime wedges alongside. Place muối ớt dipping sauce on the side — each diner dips the intestine into the salt-chili-lime mixture and eats with herbs. The herbs are not garnish: wrap a piece of intestine in a perilla leaf with a few mint leaves, dip, eat. This is the correct way.',
            tip: 'Lòng nướng is a beer food. Cold Hà Nội or Saigon beer alongside is not optional — the carbonation cuts through the fat in a way that nothing else does.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
