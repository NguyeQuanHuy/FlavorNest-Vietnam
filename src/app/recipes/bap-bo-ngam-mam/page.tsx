'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bap-bo-ngam-mam',
    title: 'Fish Sauce Pickled Beef Shank',
    subtitle: 'Bắp bò ngâm mắm — dai giòn, đậm mắm, thái lát mỏng ăn mãi không chán.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '5 hrs',
    rating: 4.9,
    baseServings: 6,
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85',
    intro: `Bap bo ngam mam is the cold cut that earns its place at every serious Vietnamese table — a whole beef shank, simmered until just tender, then submerged in a brine of premium fish sauce, garlic, chilli, and spices and left to absorb for hours until every fibre carries the deep, complex saltiness of good nuoc mam. Sliced thin against the grain and fanned across a plate, it is dark amber at the edges and pale rose at the centre, firm enough to hold its shape but yielding under the teeth with a clean, satisfying chew.

This is a dish of patience and precision. The beef must be cooked to the exact point where it is tender but not falling apart — it will firm up further in the cold brine, and a shank that is overcooked at the simmering stage will become mealy and dense after pickling. The brine is not a marinade; it is an active curing liquid, and the quality of the fish sauce determines the quality of the finished dish entirely. Use the best nuoc mam you have. Eat sliced thin with fresh herbs, sliced chilli, and a dipping sauce of lime and pepper — or simply as it is, straight from the refrigerator, standing over the cutting board, which is how most people actually eat it.`,
    ingredientSections: [
        {
            title: 'Bắp bò',
            items: [
                { amount: 1, unit: 'kg', name: 'beef shank (bắp bò)', note: 'whole piece, sinew on — do not trim; the sinew becomes the gelatin that gives the characteristic texture' },
                { amount: 2, name: 'stalks lemongrass', note: 'bruised' },
                { amount: 4, name: 'slices fresh ginger' },
                { amount: 1, unit: 'tbsp', name: 'salt' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, name: 'star anise' },
                { amount: 1, name: 'cinnamon stick', note: '5cm piece' },
            ],
        },
        {
            title: 'Nước ngâm mắm',
            items: [
                { amount: 200, unit: 'ml', name: 'premium fish sauce (nước mắm)', note: 'Phu Quoc 40 degrees or Chin-su — the quality of the fish sauce is the dish' },
                { amount: 100, unit: 'ml', name: 'water' },
                { amount: 60, unit: 'g', name: 'sugar', note: 'palm sugar preferred for deeper flavour; white sugar works' },
                { amount: 6, name: 'garlic cloves', note: '4 cloves lightly smashed whole, 2 cloves sliced thin' },
                { amount: 3, name: 'red bird\'s eye chillies', note: 'halved lengthwise' },
                { amount: 2, name: 'star anise' },
                { amount: 1, name: 'cinnamon stick', note: '4cm piece' },
                { amount: 3, name: 'slices fresh ginger' },
                { amount: 1, unit: 'tbsp', name: 'white vinegar', note: 'brightens the brine and extends shelf life' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 20, unit: 'g', name: 'fresh Vietnamese coriander (rau răm)', note: 'leaves only' },
                { amount: 10, unit: 'g', name: 'fresh mint leaves' },
                { amount: 2, name: 'fresh red chillies', note: 'sliced thin' },
                { amount: 1, name: 'lime', note: 'cut into wedges' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'cracked coarsely — for the dipping condiment' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the beef',
            description: 'Place the whole beef shank in a pot of cold water. Bring to a boil over high heat and boil for 5 minutes — the water will turn grey and foam will rise. Drain completely and rinse the shank under cold running water, scrubbing off any grey residue. Rinse the pot. This blanching step removes impurities and ensures the finished brine stays clean and clear.',
            tip: 'Do not skip the blanching. A shank going straight into the simmering stage produces a cloudy brine and a slightly gamey flavour in the finished dish. Two minutes of extra work here makes a visible difference.',
        },
        {
            title: 'Simmer the beef',
            description: 'Return the blanched shank to the clean pot with fresh water to cover by 4cm. Add lemongrass, ginger, salt, fish sauce, star anise, and cinnamon. Bring to a boil, then reduce to the gentlest possible simmer — the surface should barely tremble. Simmer uncovered for 1.5 to 2 hours, skimming any foam every 30 minutes. The shank is ready when a chopstick or skewer meets slight resistance at the thickest point — tender but not yielding completely.',
            tip: 'The target texture is firm-tender, not falling apart. The shank will continue to soften slightly during pickling. If it is already very soft at this stage, the finished dish will be mealy. Err on the side of undercooking by 10 minutes.',
        },
        {
            title: 'Shape the shank',
            description: 'Remove the shank from the pot while still hot. If the shape is uneven, wrap it tightly in cling film immediately, moulding it into a compact cylinder — this makes slicing cleaner and more uniform later. Alternatively, place it in a loaf tin or similar container and press a weight on top. Allow to cool at room temperature for 30 minutes, then refrigerate for 1 hour until firm.',
        },
        {
            title: 'Make the brine',
            description: 'Combine fish sauce, water, and sugar in a small saucepan over medium-low heat. Stir until the sugar dissolves completely — about 3 minutes. Do not boil. Add smashed garlic, sliced garlic, chilli, star anise, cinnamon, ginger, and white vinegar. Remove from heat and allow to cool completely to room temperature. The brine must be cold before the beef goes in — warm brine will continue cooking the meat.',
        },
        {
            title: 'Submerge and pickle',
            description: 'Place the cooled, shaped shank into a clean glass jar or airtight container that fits it snugly. Pour the cold brine over until the beef is fully submerged — place a small plate or zip-lock bag filled with water on top to keep it under the surface if needed. Seal and refrigerate for a minimum of 3 hours. For full flavour penetration, pickle for 8–12 hours or overnight.',
            tip: 'The longer it pickles, the deeper the fish sauce penetrates. Three hours gives a seasoned exterior; overnight gives a uniformly flavoured slice from edge to centre. Most Vietnamese home cooks prepare this the night before and slice it the next day.',
        },
        {
            title: 'Slice and serve',
            description: 'Remove the shank from the brine and pat dry. Using a sharp knife, slice as thin as possible against the grain — 2–3mm slices are ideal. The slices should be translucent at the edges and show a cross-section of muscle, sinew, and tendon. Fan across a plate. Scatter rau ram, mint, and fresh chilli over the top. Serve with lime wedges and cracked black pepper alongside. The brine keeps for 3 days refrigerated and can be reused once.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
