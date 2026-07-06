'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-rong-bien-suon',
    title: 'Canh Rong Biển Hầm Sườn (Seaweed and Pork Rib Tonic Soup)',
    subtitle: 'Pork ribs simmered for one hour into a rich, slightly cloudy stock — joined by rehydrated seaweed, silken tofu, and dried wolfberries in the final 15 minutes. The Vietnamese-Chinese tonic soup that combines the mineral richness of seaweed with the collagen of long-braised pork ribs into the most nourishing bowl in the seaweed series.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/canh-rong-bien-suon.jpg',
    intro: `Canh rong biển hầm sườn is the seaweed and pork rib tonic soup — the most substantial and most nourishing preparation in the seaweed series, belonging to the category of Vietnamese-Chinese tonic soups (canh thuốc or canh bổ) that are made specifically for their restorative properties and eaten when the body needs replenishment. The preparation combines two ingredients that Vietnamese traditional medicine considers specifically complementary: pork ribs, whose long simmering releases collagen, bone minerals, and the specific fatty richness of the marrow into the stock; and seaweed, whose mineral content — iodine, calcium, magnesium, and various trace minerals — is considered beneficial for thyroid function, bone health, and overall vitality. Together in a long-simmered soup, these two ingredients produce a broth that is simultaneously rich from the pork collagen, mineral from the seaweed, and deeply savory from the combination of both. The specific Chinese-Vietnamese tonic additions — dried wolfberries (kỷ tử), which are added in the final minutes for their purported eye health and immune benefits and their specific sweet-tart background note in the finished broth — and fresh ginger, which appears throughout the preparation in the quantities appropriate for a tonic soup rather than the more restrained quantities of an everyday broth, complete the tonic character of the preparation. The tofu added near the end of the simmering period provides a protein and textural element that is specifically appropriate for this soup — its silken character absorbing the rib and seaweed broth during the final cooking period and providing the specific soft, broth-saturated bite that makes it the preferred accompaniment to the chewy seaweed and the tender rib meat. This is the soup that Vietnamese families make on Sundays when there is time for the full hour of simmering, that appears on the table alongside a simple kho and steamed rice, and that demonstrates what patient, slow cooking produces from simple ingredients.`,
    ingredientSections: [
        {
            title: 'Pork ribs and stock',
            items: [
                { amount: 600, unit: 'g', name: 'pork spare ribs (sườn heo)', note: 'cut into 5cm sections. Blanch first to remove impurities.' },
                { amount: 1.5, unit: 'L', name: 'water' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '4 slices, smashed — generous for a tonic soup' },
                { amount: 4, name: 'shallots', note: 'halved and charred — for the stock' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Seaweed',
            items: [
                { amount: 40, unit: 'g', name: 'dried wakame seaweed (rong biển khô)', note: 'soaked in cold water 10 minutes, drained. Added in the final 15 minutes.' },
            ],
        },
        {
            title: 'Tonic additions',
            items: [
                { amount: 200, unit: 'g', name: 'silken tofu (đậu phụ non)', note: 'cut into 3cm cubes — added in the final 10 minutes' },
                { amount: 20, unit: 'g', name: 'dried wolfberries (kỷ tử / goji berries)', note: 'soaked briefly, added in the final 10 minutes' },
                { amount: 10, unit: 'g', name: 'dried red dates (táo đỏ)', note: '5-6 dates, pitted — added with the ribs for the full simmering time' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'added at the end' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'freshly ground per bowl' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the ribs and build the stock',
            description: 'Place the pork ribs in cold water, bring to a boil, and blanch for 5 minutes. Drain and rinse under cold water — removing the grey impurities that would cloud and bitter the finished broth. Return the blanched ribs to a clean pot with fresh water, smashed ginger, charred shallots, salt, and dried red dates. Bring to a boil, skim for 10 minutes, reduce to a steady simmer. Cook for 45-50 minutes until the rib meat is tender and beginning to pull from the bone.',
            tip: 'The blanching of pork ribs before the main simmering is the technique that produces a clear, clean-tasting tonic broth rather than the grey, slightly bitter broth that un-blanched ribs produce. The grey foam that rises during blanching is myoglobin and bone proteins — harmless but unpleasant-tasting. Removing them produces a broth that tastes specifically of pork collagen and bone minerals rather than of pork blood and protein.',
        },
        {
            title: 'Add seaweed in the final 15 minutes',
            description: 'At 45-50 minutes, when the ribs are tender, add the rehydrated wakame seaweed. The seaweed needs only 15 minutes in the rich pork broth — long enough to absorb the broth character and release its mineral notes into the stock, not so long that it loses its specific slightly chewy texture. Season the broth with fish sauce, salt, and white pepper.',
            tip: 'The 15-minute seaweed addition time for canh rong biển hầm sườn is longer than the 3-minute addition in canh rong biển thịt băm because the richer pork broth supports longer seaweed cooking without the seaweed becoming over-soft. The higher fat and gelatin content of the pork broth provides a medium that the seaweed absorbs rather than being dissolved by.',
        },
        {
            title: 'Add tofu and wolfberries in the final 10 minutes',
            description: 'Add the silken tofu cubes and soaked wolfberries to the simmering soup. The tofu needs 10 minutes to absorb the pork-seaweed broth through its silken structure. The wolfberries need 5-10 minutes to soften and release their specific sweet-tart flavor into the broth. Taste and adjust seasoning — the seaweed and pork ribs combined will have provided significant natural salt and mineral flavor, so additional fish sauce may be needed in small amounts only.',
            tip: 'The silken tofu in canh rong biển hầm sườn absorbs the pork-seaweed broth during the 10-minute final simmer in a way that firm tofu does not — the silken structure acts like a sponge, drawing the broth into its interior. A cube of silken tofu bitten through in the finished soup releases the pork-seaweed broth from inside it simultaneously with the tofu\'s own soft character. This is the specific pleasure of silken tofu in a rich long-simmered soup.',
        },
        {
            title: 'Finish and serve as a tonic meal',
            description: 'Add sesame oil. Ladle into deep bowls — each bowl should contain rib sections, seaweed, tofu cubes, wolfberries, and a generous amount of the rich broth. Scatter sliced spring onion and cilantro. Grind white pepper. The finished canh rong biển hầm sườn: rich, slightly cloudy broth from the pork collagen, the dark green seaweed, the white tofu, the red wolfberries, and the rib sections visible beneath. Serve with plain steamed rice alongside.',
            tip: 'Canh rong biển hầm sườn eaten as the primary dish of a simple meal — with only steamed rice alongside and no other preparations — is the correct way to experience it as the tonic soup it is designed to be. The broth spooned over rice, the rib meat pulled from the bone, the seaweed and tofu eaten with each spoonful — this is the Sunday family meal that the preparation was made for. One hour of simmering, one hour of eating slowly, one hour of restoration.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
