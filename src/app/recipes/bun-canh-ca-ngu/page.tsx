'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-canh-ca-ngu',
    title: 'Bún Canh Cá Ngừ (Tuna Noodle Soup)',
    subtitle: 'A clear, amber broth built from tuna bones and heads with lemongrass and ginger, served with fresh tuna steaks that cook in the bowl and rice vermicelli — the weekday noodle soup of Phú Yên and the central tuna coast.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/bun-canh-ca-ngu.jpg',
    intro: `Bún canh cá ngừ is the tuna noodle soup of Phú Yên province — one of the most important tuna fishing regions in Vietnam, where yellowfin and bigeye tuna are landed daily at the ports of Tuy Hòa, Vũng Rô, and Đông Hòa. In a province where tuna is the economic backbone, every part of the fish is used. The flesh becomes sashimi-grade slices or seared steaks. The bones and heads become broth. The eye becomes mắt cá ngừ kho. The collars become grilled collar. Bún canh cá ngừ uses the parts of the tuna that are not the premium cuts — the frames, the collars, the heads — to build a broth of extraordinary depth that could not be made from any other fish. Tuna bones produce a broth that is simultaneously rich and clean, with a depth of flavor that white fish bones cannot approach and a clarity that the oilier parts of the fish would cloud. The fresh tuna slices served in the bowl are added raw or very briefly seared — the hot broth finishes them in the bowl, keeping them pink in the center in the style of a Vietnamese shabu-shabu. This is not the canned tuna noodle soup of the Western world. It is a refined, specific, deeply regional dish that happens to be made from the most widely available fish in the central Vietnamese ocean.`,
    ingredientSections: [
        {
            title: 'Tuna broth',
            items: [
                { amount: 800, unit: 'g', name: 'tuna bones, frames, and collar (xương cá ngừ)', note: 'ask the fishmonger for tuna frames — the carcass after the fillets are removed. Or use tuna collar (cổ cá ngừ). Fresh or previously frozen.' },
                { amount: 2, unit: 'L', name: 'water' },
                { amount: 3, name: 'lemongrass stalks', note: 'bruised and tied — essential for tuna broth, neutralizes any fishiness' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '4 slices, smashed' },
                { amount: 3, name: 'shallots', note: 'halved and charred over flame until blackened' },
                { amount: 1, name: 'small onion', note: 'halved and charred' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Tuna for the bowl',
            items: [
                { amount: 400, unit: 'g', name: 'fresh tuna loin (cá ngừ đại dương)', note: 'sashimi-grade preferred — sliced 5-6mm thin against the grain. The hot broth cooks the slices in the bowl. If not comfortable with rare tuna: briefly sear each slice in a hot pan 30 seconds per side before serving.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for briefly marinating the sliced tuna' },
                { amount: 0.5, unit: 'tsp', name: 'sesame oil' },
                { amount: 0.25, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Noodles and toppings',
            items: [
                { amount: 400, unit: 'g', name: 'fresh bún (rice vermicelli)', note: 'medium thickness. Or dried vermicelli soaked and blanched.' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 3, unit: 'tbsp', name: 'shallot-infused oil' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, name: 'small bunch dill (thì là)', note: 'torn — the central Vietnamese herb for fish soups' },
                { amount: 1, name: 'small bunch Vietnamese coriander (rau răm)' },
                { amount: 2, name: 'tomatoes', note: 'cut into wedges — added to the broth for a gentle sweetness and color' },
            ],
        },
        {
            title: 'Table accompaniments',
            items: [
                { amount: 150, unit: 'g', name: 'bean sprouts' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 2, unit: 'tbsp', name: 'fermented shrimp paste (mắm ruốc)', note: 'Phú Yên style — served alongside for those who want it' },
            ],
        },
    ],
    steps: [
        {
            title: 'Roast and blanch the tuna bones',
            description: 'Rinse the tuna frames and collar thoroughly under cold water. Blanch briefly in boiling water for 5 minutes to remove impurities — drain and rinse. Then place on a baking tray and roast at 200°C for 15-20 minutes until the exposed flesh turns golden and the bones develop color. The roasting step is what distinguishes a deep, complex tuna broth from a pale, flat one — the Maillard reaction on the tuna protein surfaces creates the specific depth that makes this broth extraordinary.',
            tip: 'Tuna bones roasted before simmering produce a broth that is noticeably richer and more complex than raw bones added directly to water. The golden color on the bones indicates the right level of roasting — not burnt, not pale.',
        },
        {
            title: 'Char the aromatics',
            description: 'Hold halved shallots and halved onion cut-side down over a gas flame with tongs until deeply blackened — about 4 minutes each. Alternatively, broil cut-side up at maximum heat for 6-8 minutes. The char adds sweetness and depth to the tuna broth in the same way it functions in phở. Lightly scrape off the most aggressively burnt exterior — a little char is correct, bitter black is too much.',
            tip: 'The charred aromatics are particularly important in tuna broth because tuna has a stronger flavor than chicken or pork. The sweetness from charred onion and shallot balances the fish intensity beautifully.',
        },
        {
            title: 'Simmer the broth',
            description: 'Place roasted tuna bones in a large pot. Add 2L cold water, charred shallots, charred onion, lemongrass, and ginger. Bring to a boil, immediately reduce to the lowest possible simmer. Skim foam and fat during the first 20 minutes — tuna bones release more fat than white fish. Simmer uncovered for 45-60 minutes. Add tomato wedges in the last 15 minutes of simmering — they add sweetness and a gentle acidity without dominating.',
            tip: 'Skim the fat from tuna broth more diligently than from pork or chicken broth. Tuna fat left in the broth creates a slightly heavy, oily finish. A clean, skimmed tuna broth is light and clear despite its depth of flavor.',
        },
        {
            title: 'Strain and season',
            description: 'Strain the broth through a fine-mesh sieve, pressing on the solids to extract maximum flavor. Discard all bones, aromatics, and the tomato pieces. Return the clear broth to a clean pot. Season with fish sauce, sugar, salt, and black pepper. Taste: the broth should be clean, deep, oceanic, and slightly sweet from the charred onion. Adjust seasoning. Bring to a full boil before serving — the boiling broth is what cooks the raw tuna slices in the bowl.',
            tip: 'A well-made bún canh cá ngừ broth should taste complete on its own — rich enough to drink as a soup. If it tastes thin or watery, it needs more simmering time or more bones in the original batch.',
        },
        {
            title: 'Prepare the tuna slices',
            description: 'Slice the fresh tuna loin 5-6mm thin against the grain. Toss lightly with fish sauce, sesame oil, and black pepper. Leave for 5 minutes — this brief marinade seasons the surface without cooking the fish. The tuna should be handled gently and kept cold until the moment of serving.',
            tip: 'Slicing against the grain is essential for tuna — with the grain produces long stringy pieces that are difficult to eat with chopsticks. Against the grain produces clean, tender slices that separate easily.',
        },
        {
            title: 'Assemble and serve',
            description: 'Blanch bún noodles in boiling water 30 seconds, drain, divide among deep bowls. Arrange raw or briefly seared tuna slices over the noodles. Ladle the boiling hot broth generously over the tuna — the heat of the broth cooks the thin slices to medium-rare in 30-60 seconds. Drizzle shallot oil over each bowl. Top with spring onion, dill, rau răm, and crispy fried shallots. Serve immediately with bean sprouts, lime, chili, and mắm ruốc on the side.',
            tip: 'The bowl must be served and eaten immediately. The tuna continues cooking in the hot broth — after 2 minutes it will be medium-well. Eat fast. This is the principle of Vietnamese shabu-shabu applied to a noodle soup context.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
