'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-khot',
    title: `Bánh Khọt (Vũng Tàu Crispy Mini Pancakes with Shrimp)`,
    subtitle: `Bánh Khọt — Vũng Tàu's bite-sized turmeric rice pancakes, fried crisp in a cast-iron well pan, crowned with a whole shrimp and wrapped in mustard greens.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 15 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/banh-khot.jpg',
    intro: `Bánh khọt is the street snack of Vũng Tàu, the seaside city an hour and a half south-east of Saigon where fishing boats still land their catch on Bãi Trước every morning. The name is onomatopoeia: "khọt" is the sound the vendor's spoon makes scraping each little cake out of its blackened mould — khọt, khọt, khọt — sixteen times a minute at the busy stalls on Hoàng Hoa Thám street. Southern Vietnamese grow up eating them by the dozen on weekend trips to the coast, and the dish has followed the diaspora to every Vietnamese neighbourhood from Little Saigon to Berlin-Lichtenberg.

The ingredients are humble and specific. The batter is rice flour, not wheat — rice has no gluten, so nothing in the cake can turn chewy or bready; it can only set and then crisp. A spoonful of cold cooked rice is blended into the batter, the Vũng Tàu cook's oldest trick: the already-gelatinised starch and its small load of free sugars brown faster and more evenly than raw flour alone. Coconut milk adds fat, which keeps the centre soft and custardy while the edges fry. Turmeric gives the colour — curcumin is fat-soluble, which is why the cakes glow brighter yellow where they touch the oil. The topping is the coast itself: small shell-on tôm đất (river shrimp) in Vũng Tàu, or peeled black tiger prawns abroad.

The technique is shallow-frying in a well pan with a lid — a hybrid that does two jobs at once. The oil in each well fries the base and sides above 160 °C, driving out water and triggering Maillard browning into a thin glassy shell. The lid traps steam, which sets the top of the batter at about 100 °C without ever browning it. The result is the defining bánh khọt texture: a crisp, lacy cup that shatters, holding a soft, almost molten centre. Its central-coast cousin bánh căn is cooked in a dry clay mould with no oil at all and stays soft throughout; its big sister bánh xèo uses a similar batter spread thin in a wok. Bánh khọt sits between the two — the crispness of bánh xèo in the shape of bánh căn.

Bánh khọt is never eaten alone. Each cake is wrapped in a leaf of cải bẹ xanh (Vietnamese mustard greens) with lettuce, mint, perilla and a few strands of pickled papaya, then dipped in sweet-sour nước chấm. The bitter-peppery mustard leaf cuts the coconut fat; the pickle cuts the oil; the fish sauce ties it together. Eat them standing at the pan if you can — a bánh khọt is at its best in the first three minutes after it leaves the mould.

Photo: "Brodard - Banh khot" by manda_wong, CC BY 2.0, via Wikimedia Commons.`,
    ingredientSections: [
        {
            title: 'Batter — rest 1 hour',
            items: [
                { amount: 200, unit: 'g', name: 'rice flour', note: 'Plain rice flour, NOT glutinous (sticky) rice flour — glutinous flour turns gummy. The Thai "three elephants" (Erawan) brand sold in every Asian shop in Europe is ideal. Ready-made "bột bánh khọt" mix also works; then skip the starch and turmeric.' },
                { amount: 30, unit: 'g', name: 'tapioca or potato starch', note: 'Adds the glassy crunch to the edges. Potato starch (Kartoffelstärke) is a perfect substitute.' },
                { amount: 60, unit: 'g', name: 'cold cooked jasmine rice', note: 'Day-old rice is best. Blended into the batter it gives faster, more even browning — the Vũng Tàu secret.' },
                { amount: 200, unit: 'ml', name: 'coconut milk', note: 'Full-fat, from a can (Chaokoh or Aroy-D). Shake the can first. Light coconut milk gives a drier, less custardy centre.' },
                { amount: 250, unit: 'ml', name: 'cold water', note: 'Or ice-cold sparkling water for an even lighter, lacier crust.' },
                { amount: 1, unit: 'tsp', name: 'ground turmeric', note: 'For colour. Too much tastes bitter and earthy — keep it to one level teaspoon.' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 3, name: 'spring onions, finely sliced', note: 'Green parts only; the whites go into the scallion oil.' },
            ],
        },
        {
            title: 'Topping & frying',
            items: [
                { amount: 300, unit: 'g', name: 'small shrimp', note: 'In Vũng Tàu: tiny shell-on tôm đất, eaten shell and all. In Europe: small peeled prawns (Garnelen, 40-60 per kg). Pat completely dry or they spit in the oil.' },
                { amount: 0.5, unit: 'tsp', name: 'fish sauce', note: 'For seasoning the shrimp.' },
                { amount: 0.25, unit: 'tsp', name: 'ground black pepper' },
                { amount: 120, unit: 'ml', name: 'neutral oil', note: 'Rapeseed or sunflower. Bánh khọt needs real oil in every well — about 1 teaspoon each per batch. This is shallow-frying, not greasing.' },
                { amount: 3, unit: 'tbsp', name: 'scallion oil (mỡ hành)', note: 'Spring-onion whites sizzled in 3 tbsp hot oil for 10 seconds — spooned over the finished cakes.' },
                { amount: 2, unit: 'tbsp', name: 'shrimp floss or dried shrimp powder', note: 'Optional but classic (tôm chấy). Pound dried shrimp to a fluffy powder and toast 2 minutes in a dry pan.' },
            ],
        },
        {
            title: 'To serve — Vũng Tàu style',
            items: [
                { amount: 1, name: 'head Vietnamese mustard greens (cải bẹ xanh)', note: 'The essential wrapper. Substitute: young Chinese mustard greens or, at a pinch, Swiss chard leaves. Romaine alone is too bland.' },
                { amount: 1, name: 'head soft lettuce' },
                { amount: 1, name: 'large handful mixed herbs', note: 'Mint, perilla (tía tô), Vietnamese balm (kinh giới), Thai basil.' },
                { amount: 150, unit: 'g', name: 'pickled green papaya and carrot (đồ chua)', note: 'Julienned, pickled 30 minutes in 1:1 rice vinegar and sugar with a pinch of salt.' },
                { amount: 200, unit: 'ml', name: 'nước chấm', note: '3 tbsp fish sauce, 3 tbsp sugar, 3 tbsp lime juice, 9 tbsp warm water, 2 garlic cloves and 1 chilli, minced. Southern-style: sweeter than the north.' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blend the batter and rest it — 1 hour',
            description: `Put the cold cooked rice in a blender with the water and blend for 60 seconds until completely smooth — no grains should remain visible. Add the rice flour, starch, coconut milk, turmeric, salt and sugar and blend another 20 seconds. Pour through a fine sieve into a jug, stir in the sliced spring-onion greens, cover and rest at room temperature for 1 hour (up to 4 hours in the fridge).

The rested batter should be thin and pourable, like full-fat milk — it runs off a spoon in a continuous stream, not in drops. If it is thicker than single cream, add water a tablespoon at a time.

Skipping the rest is the most common failure: unrested batter has dry flour pockets that burst into holes and cakes that crack instead of curling into neat cups.`,
            tip: `Resting lets rice-flour particles fully hydrate. Rice flour absorbs water far more slowly than wheat flour because its starch granules are packed in a dense protein matrix — an hour's soak is what lets the starch gelatinise evenly in the pan. Always stir from the bottom before each batch: rice flour settles within minutes.`,
        },
        {
            title: 'Season the shrimp and make the scallion oil — 10 min',
            description: `Peel and devein the shrimp if using large ones (small tôm đất stay whole, shell on). Halve any prawn longer than your thumb so it fits a well. Pat bone-dry with kitchen paper, then toss with fish sauce and pepper and leave 10 minutes.

For the scallion oil, heat 3 tbsp oil until it shimmers, pour it over the finely sliced spring-onion whites in a heatproof bowl and add a pinch of salt. It should sizzle hard for 5-10 seconds and smell sweet and oniony, not burnt.

Wet shrimp are the second most common failure: surface water hits hot oil, spits violently and cools the well so the cake stays pale.`,
            tip: `Pouring hot oil over raw spring onion (rather than frying them in it) blooms the aromatics without browning them — the sulphur compounds turn sweet but the colour stays bright green. Bánh khọt, bánh xèo and cơm tấm all share this same southern mỡ hành.`,
        },
        {
            title: 'Heat the well pan with oil — until a drop of batter sizzles instantly',
            description: `Set a bánh khọt pan (or a cast-iron aebleskiver/Æbleskiver pan or takoyaki pan, both sold in Europe) over medium-high heat for 3-4 minutes. Add about 1 teaspoon of oil to each well.

The pan is ready when the oil shimmers and a drop of batter sizzles loudly the moment it lands and sets around the edge within 2-3 seconds. If it sinks silently, wait another minute; if the oil smokes, lift the pan off the heat for 30 seconds.

A pan that is too cool produces soft, greasy cakes that stick; too hot and the edges burn before the centre sets.`,
            tip: `Cast iron is traditional because of its thermal mass: each cold spoonful of batter barely lowers the pan temperature, so the edges keep frying instead of stewing. Thin non-stick pans lose heat with every pour — if that is all you have, fill fewer wells per batch.`,
        },
        {
            title: 'Fry and steam the cakes — 3-4 minutes under the lid',
            description: `Stir the batter from the bottom. Fill each well about two-thirds full — the batter should hiss and climb the sides. Immediately place one shrimp on top of each cake and cover the pan with a lid.

Cook 3-4 minutes over medium heat. Lift the lid: the tops should look set and matt with no wet shine, and the edges should have pulled slightly away from the well, turning deep golden and lacy. Remove the lid and drizzle a few drops of oil around the rim of each cake; fry uncovered another 1-2 minutes until the bottoms are crisp.

If the bottoms are dark brown but the tops still wet, your heat is too high; if the tops are set but the cakes are pale, cook uncovered longer.`,
            tip: `The lid creates two cooking zones in one pan: hot oil below (frying, 160-180 °C, Maillard browning) and steam above (100 °C, gentle setting). That split is the entire bánh khọt texture — crisp shell, custardy heart. It is also what separates it from bánh căn, which uses a dry clay mould and no oil and so never crisps.`,
        },
        {
            title: 'Unmould, top and serve — eat within 3 minutes',
            description: `Ease each cake out with a small spoon or chopstick, running it around the edge first — they should release cleanly with a hollow scraping "khọt". Stand them upright on a plate, spoon a little scallion oil over each and sprinkle with shrimp floss.

Re-oil the wells and repeat; the second batch is always better than the first as the pan seasons. Serve each batch the moment it is done.

Cakes left waiting turn soft within 5-10 minutes as steam from the centre migrates into the crust.`,
            tip: `How to eat: lay a mustard-green leaf flat, add a piece of lettuce, two or three herb leaves and a few strands of pickle, set one or two bánh khọt on top, roll it into a loose parcel and dip the whole thing in nước chấm. One parcel, one or two bites. The peppery cải bẹ xanh is not a garnish — it is what makes the coconut-rich cake taste light. A plate of bánh khọt eaten by the pan, still crackling, is the dish in its true form.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
