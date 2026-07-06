'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-uot-long-ga',
    title: 'Bánh U?t Lòng Gà (Hu? Steamed Rice Rolls with Chicken Offal)',
    subtitle: 'Silky steamed rice paper rolls served with stir-fried chicken offal — gizzard, liver, heart, and intestine — in a lemongrass-chili oil, with crispy shallots and the specific Hu? dipping sauce that makes every element complete. The morning dish of the imperial city.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-uot-long-ga.jpg',
    intro: `Bánh u?t lòng gà is the Hu? breakfast that street food vendors set up before dawn and sell out of by 9am. Bánh u?t — steamed rice paper rolls — are the silky, almost translucent rice sheets that form the base: smooth, slightly chewy, with a clean rice flavor that serves as the neutral canvas for what goes on top. Lòng gà is the entirety of chicken offal: gizzard, liver, heart, and intestine, each cleaned and prepared separately and then briefly stir-fried with lemongrass, chili, and garlic until each organ is perfectly cooked to its own ideal texture — the gizzard chewy and slightly firm, the liver soft and just barely cooked through, the heart tender, the intestine silky with a faint minerality. The combination is placed over the rice rolls with crispy fried shallots, shallot oil, and fresh herbs. The dipping sauce is the Hu? version of nu?c ch?m — lighter, more herb-forward than southern versions, with the specific balance of the imperial city's cuisine where no single flavor element is allowed to dominate. Bánh u?t lòng gà is not a dish for every palate — it requires genuine curiosity about offal and the openness to eat organs prepared in a way that makes their individual characters clear rather than hiding them. For those willing to engage with it, it is one of the great breakfast dishes of Vietnam.`,
    ingredientSections: [
        {
            title: 'Bánh u?t (steamed rice rolls)',
            items: [
                { amount: 200, unit: 'g', name: 'rice flour (b?t g?o)', note: 'fine white rice flour — not glutinous' },
                { amount: 30, unit: 'g', name: 'tapioca starch (b?t nang)', note: 'adds elasticity and the silky texture' },
                { amount: 600, unit: 'ml', name: 'water' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'neutral oil', note: 'added to the batter to prevent sticking' },
            ],
        },
        {
            title: 'Chicken offal (lòng gà)',
            items: [
                { amount: 200, unit: 'g', name: 'chicken gizzards (m? gà)', note: 'cleaned, silverskin removed, scored shallowly and sliced thin' },
                { amount: 150, unit: 'g', name: 'chicken liver (gan gà)', note: 'trimmed of connective tissue, soaked in milk 20 minutes to mellow bitterness' },
                { amount: 100, unit: 'g', name: 'chicken hearts (tim gà)', note: 'trimmed of fat and blood vessels, halved' },
                { amount: 150, unit: 'g', name: 'chicken intestine (ru?t gà)', note: 'cleaned thoroughly — buy pre-cleaned from Vietnamese butcher. Optional but traditional.' },
                { amount: 2, name: 'lemongrass stalks', note: 'inner stalk, finely minced' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'chili flakes or fresh chili, minced' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the characteristic golden color to the offal' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Toppings and sauce',
            items: [
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 3, unit: 'tbsp', name: 'shallot-infused oil' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced — scattered over everything' },
                { amount: 1, name: 'small bunch cilantro' },
            ],
        },
        {
            title: 'Hu? dipping sauce (nu?c ch?m Hu?)',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves, minced' },
                { amount: 1, name: 'bird\'s eye chili, minced' },
                { amount: 1, unit: 'tsp', name: 'chili oil (d?u ?t)', note: 'the Hu? addition — a few drops of chili oil added to the sauce for color and heat' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the rice paper batter and rest',
            description: 'Whisk rice flour, tapioca starch, salt, and oil together. Gradually add water, whisking until completely smooth — no lumps. The batter should be thin and pourable, similar to full-fat milk in consistency. Rest for minimum 30 minutes — the starch hydrates fully and produces a smoother, more elastic sheet. Stir before using as the starch settles.',
            tip: 'Rested batter produces noticeably smoother, more elastic rice paper sheets than unrested batter. The 30-minute rest is the difference between sheets that tear on removal and sheets that peel cleanly.',
        },
        {
            title: 'Clean and prepare each offal separately',
            description: 'Gizzard: remove the tough silverskin lining, score shallowly in a crosshatch pattern, slice 5mm thin. Liver: trim connecting tissue and any green bile-stained areas. Soak in milk for 20 minutes — the milk draws out blood and mellows the bitterness. Rinse and pat dry. Slice 5mm thin. Heart: halve lengthwise, remove visible blood vessels. Intestine: if pre-cleaned, rinse under cold water and cut into 3-4cm pieces. Each organ needs different handling — the preparation is what makes offal delicious rather than confrontational.',
            tip: 'Soaking liver in milk is not optional for those who find liver bitter. The bitterness comes from blood remaining in the tissue — milk protein binds with and draws out the hemoglobin. 20 minutes produces a noticeably milder liver.',
        },
        {
            title: 'Stir-fry the offal in stages',
            description: 'Heat oil in a wok over high heat. Add lemongrass, garlic, and shallots — fry 30 seconds until fragrant. Add gizzard first — it needs the most cooking time. Stir-fry 3-4 minutes until cooked through and the scoring has opened. Add heart — 2 minutes. Add intestine if using — 2 minutes. Add liver last — only 90 seconds, just until the pink disappears from the outside but the center remains slightly soft. Season with fish sauce, sugar, chili, turmeric, and pepper. Toss everything together for 30 seconds.',
            tip: 'The staged addition based on cooking time is the crucial technique. Liver added at the same time as gizzard is overcooked, dry, and bitter by the time the gizzard is done. Each organ has its correct cooking window.',
        },
        {
            title: 'Steam the rice paper sheets',
            description: 'Set up a steamer with a cloth stretched tightly over the top of the pot. Bring to a full boil. Stir the batter. Pour one ladle (about 60ml) onto the cloth and spread quickly in a thin circle. Cover and steam 30-40 seconds until the surface turns matte. Slide a flat spatula under the sheet and peel away gently. Transfer to a flat board. Repeat. Stack the sheets between pieces of parchment paper to prevent sticking.',
            tip: 'Speed matters when spreading the batter — you have 3-4 seconds before it begins to set. Practice the circular spreading motion before the first sheet. The first two sheets will be imperfect; the third onwards will be consistent.',
        },
        {
            title: 'Make the Hu? dipping sauce',
            description: 'Combine fish sauce, lime juice, sugar, and water. Stir until sugar dissolves. Add minced garlic and chili. Add a few drops of chili oil — this is the Hu?-specific element that gives the sauce its orange tint and extra heat dimension. Taste: the Hu? version should be slightly lighter and more acidic than southern nu?c ch?m, with the chili oil adding warmth rather than sharp heat.',
            tip: 'The chili oil in Hu? nu?c ch?m is not the same as fresh chili heat. It adds a background warmth and color that is different from the sharp front-of-palate heat of fresh bird\'s eye chili. Both are present in the authentic version.',
        },
        {
            title: 'Assemble and serve',
            description: 'Arrange 3-4 steamed rice sheets on each plate, slightly overlapping. Spoon the stir-fried offal generously over the sheets. Drizzle shallot oil over everything. Top with crispy fried shallots, sliced spring onion, and cilantro. Serve the Hu? dipping sauce in individual small bowls alongside. To eat: tear a piece of rice sheet with the offal on top, dip into the sauce, eat. The silky rice paper, the chewy gizzard, the soft liver, and the sharp dipping sauce in each bite is the complete bánh u?t lòng gà experience.',
            tip: 'Serve immediately after assembling — the rice sheets absorb the shallot oil and begin to stick to the plate within minutes. Bánh u?t lòng gà is a dish that must be eaten the moment it is plated.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
