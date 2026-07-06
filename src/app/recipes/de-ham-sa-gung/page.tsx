'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'de-ham-sa-gung',
    title: 'Dê Hầm Sả Gừng (Slow-Braised Goat with Lemongrass and Ginger)',
    subtitle: 'Bone-in goat pieces braised for two hours in a clay pot with lemongrass, galangal, ginger, and yellow wine until the meat pulls from the bone and the broth is deep amber and fragrant — the Vietnamese slow braise that transforms goat from something challenging into something extraordinary.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/de-ham-sa-gung.jpg',
    intro: `Dê hầm sả gừng is the Vietnamese goat braise — the preparation that takes the most challenging domestic meat and, through two hours of low, covered heat in an aromatic liquid of lemongrass, galangal, ginger, and yellow rice wine, produces something that is simultaneously deeply savory, intensely fragrant, and fall-from-the-bone tender. The technique is hầm — the Vietnamese slow braise in which meat, aromatics, and a small amount of liquid are sealed in a clay pot or heavy casserole and cooked at the lowest possible temperature, building pressure gradually, driving the aromatics into the meat from all directions simultaneously. Goat responds to hầm better than to any other cooking method: the connective tissue that makes young goat slightly chewy when grilled becomes gelatin after 90-120 minutes of moist heat, the fat renders and bastes the lean muscle from within, and the gamey character that divides opinion at higher temperatures mellows to a savory, almost lamb-like depth at slow-braise temperatures. The specific aromatic combination for dê hầm — lemongrass, galangal, fresh ginger, fresh turmeric if available, dried chili — is the Vietnamese goat trinity, calibrated to harmonize with the meat rather than mask it. The yellow rice wine (rượu vàng) added to the braise is the element that accelerates the tenderizing process and adds the warm, slightly malty background note that separates Vietnamese goat braise from Chinese braised goat or Indian goat curry. By the time the clay pot comes to the table, the kitchen has been fragrant for two hours, the meat pulls from the bone with chopsticks, and the broth poured over rice is one of the finest things Vietnamese slow cooking produces.`,
    ingredientSections: [
        {
            title: 'Goat',
            items: [
                { amount: 1.2, unit: 'kg', name: 'bone-in goat pieces (dê chặt miếng)', note: 'shoulder, ribs, and neck — bone-in cuts produce the most gelatin and the richest broth. Ask the butcher to chop into 5-6cm pieces. Young goat under 8 months produces the most tender result.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for pre-seasoning' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'for color and pre-seasoning' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Aromatic paste — the Vietnamese goat trinity',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, finely minced to paste' },
                { amount: 40, unit: 'g', name: 'fresh galangal (riềng)', note: 'peeled and minced to paste — the essential goat aromatic' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'peeled and minced' },
                { amount: 20, unit: 'g', name: 'fresh turmeric (nghệ tươi)', note: 'peeled and minced — if available. Substitute: 1 tsp turmeric powder.' },
                { amount: 6, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 2, name: 'dried chilies', note: 'soaked and minced — adds warmth without the raw chili sharpness' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 100, unit: 'ml', name: 'yellow rice wine (rượu vàng) or Shaoxing wine', note: 'the accelerating tenderizing element — do not substitute with white wine, the flavor is different' },
                { amount: 300, unit: 'ml', name: 'water or light bone stock' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce', note: 'adds color and depth' },
                { amount: 1.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'star anise', note: 'whole — removed before serving' },
                { amount: 1, name: 'cinnamon stick (3cm)' },
            ],
        },
        {
            title: 'Vegetables',
            items: [
                { amount: 2, name: 'medium carrots', note: 'cut into large chunks — added in the last 40 minutes' },
                { amount: 200, unit: 'g', name: 'taro (khoai môn)', note: 'peeled and cut into chunks — optional, absorbs the broth magnificently. Or substitute with potato.' },
            ],
        },
        {
            title: 'Garnish and to serve',
            items: [
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 1, name: 'small bunch Vietnamese balm (rau kinh giới)', note: 'the herb specifically suited to braised goat — its menthol note complements the richness' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground over each bowl' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice or fresh baguette', note: 'baguette specifically for mopping the broth' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the goat pieces',
            description: 'Place the goat pieces in a large pot of cold water. Bring to a full, vigorous boil and blanch for 10 minutes. Drain and rinse every piece thoroughly under cold running water. This step removes the surface impurities and blood that make goat broth cloudy and adds off-flavors. Properly blanched goat should smell clean and mildly of the meat — any remaining strong smell after blanching indicates either old meat or insufficient blanching.',
            tip: 'Blanching goat requires a more thorough rinse than pork or chicken because goat releases more coagulated blood protein during the blanch. Rinse each piece individually under running water until the water runs clear. The effort here determines the clarity and cleanliness of the final broth.',
        },
        {
            title: 'Build the aromatic paste and sear',
            description: 'Heat oil in a clay pot or heavy casserole over medium-high heat. Add the minced lemongrass, galangal, ginger, fresh turmeric, garlic, shallots, and dried chili. Fry for 4-5 minutes until the paste is golden, fragrant, and the raw edge has completely cooked out — the galangal should smell warm and piney, the lemongrass clearly citrus. Add the blanched goat pieces and sear for 3-4 minutes, turning to coat every surface in the aromatic paste.',
            tip: 'Frying the aromatic paste for a full 4-5 minutes before the goat goes in is what produces the depth in dê hầm that distinguishes it from a simple braise. Raw lemongrass and galangal added directly to the liquid produce a lighter, fresher result. Fried paste produces a braise with a caramelized aromatic foundation.',
        },
        {
            title: 'Add wine and liquid — build the braise',
            description: 'Pour the yellow rice wine directly over the searing goat — it will sizzle aggressively and the alcohol will begin evaporating immediately. Let cook for 30 seconds. Add water or stock, fish sauce, soy sauce, sugar, star anise, and cinnamon. The liquid should come about halfway up the goat pieces — this is a semi-submerged hầm braise, not a covered stew. Bring to a boil.',
            tip: 'The yellow rice wine added while the goat is still searing — to a hot, active surface — produces a different result than wine added to cold liquid. The immediate vaporization drives the wine character into the meat surface and the aromatic paste before the liquid moderates the temperature.',
        },
        {
            title: 'Braise sealed at the lowest heat — 90 minutes',
            description: 'Reduce heat to absolute minimum. Cover the clay pot tightly — use a sheet of baking paper under the lid if the fit is not perfect. Braise undisturbed for 90 minutes. Do not open. The sealed environment builds steam pressure that drives the lemongrass and galangal into the goat from all directions. At 90 minutes, open and check: the meat should be tender and beginning to pull from the bone, the broth should be deep amber and fragrant.',
            tip: 'The 90-minute undisturbed cooking is the discipline of hầm. Every time the lid is lifted, the pressure environment collapses and the temperature drops. One unnecessary opening adds 15-20 minutes to the cooking time. Trust the process and check only at 90 minutes.',
        },
        {
            title: 'Add vegetables and finish',
            description: 'Add the carrot chunks and taro pieces. Replace the lid and braise for a further 35-40 minutes until the vegetables are completely tender and the goat meat pulls from the bone effortlessly. Remove the star anise and cinnamon stick. Taste the broth and adjust: fish sauce for salt, a pinch of sugar if the tamarind note from the wine is too prominent, black pepper for warmth.',
            tip: 'Adding the vegetables in the last 40 minutes is the technique that produces vegetables that are tender and broth-saturated without dissolving. Taro specifically added too early completely disappears into the broth; added at the correct time it absorbs the broth and becomes the best vehicle for the braising liquid in the bowl.',
        },
        {
            title: 'Serve from the clay pot',
            description: 'Bring the clay pot directly to the table. Scatter spring onion, cilantro, and Vietnamese balm over the surface. Grind black pepper generously over the pot. Serve with steamed rice and baguette alongside, lime wedges, and fresh chili. To eat: pull a piece of goat from the bone at the table, spoon the taro and carrot alongside, ladle the fragrant broth generously over rice. The baguette for dipping in the goat broth is the preparation\'s finest moment.',
            tip: 'Vietnamese balm (rau kinh giới) served alongside dê hầm is the herb pairing that most people outside Vietnam have not encountered with goat. Its specific menthol-lemon character complements braised goat in a way that cilantro or mint alone does not. If available, use it generously as a table herb rather than a garnish.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
