'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trung-lon',
    title: 'Trứng Lộn (Balut / Vietnamese Fertilized Duck Egg)',
    subtitle: 'The street food that requires the most commitment — a fertilized duck egg boiled at 17-21 days development, eaten from the shell with salt, black pepper, fresh herbs, and a squeeze of lime. One of the most nutritious and most misunderstood foods in Southeast Asia.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.6,
    baseServings: 2,
    heroImage: '/images/recipes/trung-lon.jpg',
    intro: `Trứng lộn — called balut in Filipino, hột vịt lộn in Vietnamese — is the fertilized duck egg that has become one of the most internationally notorious street foods in the world. It is eaten in Vietnam every day by millions of people who do not consider it remotely exotic: a protein-rich snack sold from baskets by vendors at street corners, bus stations, and night markets, eaten with rau răm (Vietnamese coriander), fresh ginger, salt, black pepper, and lime. The development stage matters enormously. Vietnamese trứng lộn is typically 17-19 days — the embryo is developed enough to show a small duck with partially formed features, but young enough that the textures are tender and the flavors mild. Filipino balut (21+ days) has a more developed embryo with harder bones and a stronger flavor. This recipe focuses on preparation and eating technique — the actual cooking is simple. The complexity is in understanding what you are eating and why it tastes the way it does.`,
    ingredientSections: [
        {
            title: 'Main',
            items: [
                { amount: 4, name: 'fertilized duck eggs (trứng vịt lộn)', note: '17-19 day development for Vietnamese style — available at Vietnamese grocery stores and some Asian markets. Ask specifically for the development stage.' },
                { amount: 1, unit: 'tsp', name: 'sea salt or flaky salt' },
                { amount: 1, unit: 'tsp', name: 'freshly ground black pepper', note: 'coarsely ground — this is structural, not just seasoning' },
            ],
        },
        {
            title: 'Essential accompaniments',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)', note: 'the essential herb — no substitute. Eaten generously with each bite.' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'peeled and finely julienned — raw, eaten alongside' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, unit: 'tbsp', name: 'rice vinegar ginger dipping sauce', note: 'optional — ginger julienned, mixed with 1 tbsp rice vinegar and pinch of sugar' },
            ],
        },
    ],
    steps: [
        {
            title: 'Source the eggs correctly',
            description: 'Trứng lộn must be bought from a source that stores them correctly — kept warm (35-37°C) to maintain the embryo development without continuing to develop further. Vietnamese grocery stores typically source them at 17-19 days development and sell them within a day or two. The egg should feel slightly heavier than a regular egg. If the shell is cracked or the egg smells off before cooking, discard it.',
            tip: 'Ask your Vietnamese grocery store specifically: "trứng vịt lộn 17-19 ngày" — 17-19 day duck egg. Development stage significantly affects the eating experience.',
        },
        {
            title: 'Boil correctly',
            description: 'Place the eggs in a small pot and cover with cold water. Bring to a boil over medium heat. Once boiling, reduce to a steady simmer and cook for exactly 14-16 minutes. This timing produces a fully set yolk, tender embryo tissues, and the characteristic broth inside the shell that is one of the best parts of the egg. Remove with a spoon and rest 2 minutes before eating.',
            tip: 'Over-boiling makes the yolk crumbly and dry and the embryo tough. Under-boiling leaves the white unset. 15 minutes from boiling is the Vietnamese street vendor standard.',
        },
        {
            title: 'Prepare the accompaniments',
            description: 'While the eggs cook, prepare the accompaniments: Wash and dry the rau răm (Vietnamese coriander) — it should be in a generous pile. Julienne the fresh ginger finely. Mix salt and black pepper on a small plate — this is the primary dipping medium. Squeeze lime juice over the salt-pepper mixture just before eating.',
            tip: 'The rau răm quantity should look excessive — you need a generous leaf with every bite. Its sharp, peppery flavor is what makes trứng lộn taste Vietnamese rather than just confrontational.',
        },
        {
            title: 'Open and eat correctly — the Vietnamese technique',
            description: 'Hold the egg with the pointed end up. Tap the top firmly with a spoon to create a clean opening — about 2cm across. Remove the small shell pieces. The first thing you encounter is a pale broth inside the shell — drink this immediately, it is the most delicious part. Then spoon a small amount of salt-pepper-lime mixture into the opening. Use a small spoon to scoop and eat the contents with rau răm leaves and ginger strips alongside each bite.',
            tip: 'Opening from the pointed end (not the round end) gives access to the broth first. This is not arbitrary — the broth at the pointed end is the clearest and best-flavored.',
        },
        {
            title: 'What you will find inside — anatomy',
            description: 'Inside the egg: a clear, rich broth around the outside. The yolk — larger than a regular egg, deep orange, very rich and creamy. The white — set but soft, with a different texture from a regular hard-boiled egg. The embryo — at 17-19 days, a small duck with soft features, tender enough to eat without noticing bones. The air sac at the rounded end — eat this last or discard. Everything except the shell is edible.',
            tip: 'Eat everything in the same spoonful — yolk, white, embryo, broth, rau răm, ginger. The combination is what produces the correct flavor. Isolating any single component misses the point.',
        },
        {
            title: 'Flavor and nutrition',
            description: 'Trứng lộn tastes richer and more complex than a regular hard-boiled egg — the yolk is deeper, the broth is gelatinous and savory, the embryo adds a slightly gamey depth. The rau răm is not optional decoration — its sharp, peppery flavor cuts through the richness in the same way that rau răm always balances rich Vietnamese food. Nutritionally, a single trứng lộn provides significant protein, all essential amino acids, iron, calcium, and phosphorus — it is genuinely the most nutritious way to eat an egg.',
            tip: 'If trying for the first time: lead with the broth and yolk, which are the least confrontational parts. Once you have tasted those, the rest is context rather than challenge.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}