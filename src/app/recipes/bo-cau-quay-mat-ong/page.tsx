'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-cau-quay-mat-ong',
    title: 'Bồ Câu Quay Mật Ong (Honey-Roasted Pigeon)',
    subtitle: 'Pigeon marinated in five-spice, Shaoxing wine, and soy sauce then lacquered with multiple layers of honey glaze and roasted until the skin turns deep mahogany and shatters — the Vietnamese-Cantonese roasted pigeon of Chợ Lớn that achieves in a home oven what Cantonese restaurants produce with professional rotisseries.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '24 hr + 1 hr',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/bo-cau-quay-mat-ong.jpg',
    intro: `Bồ câu quay mật ong is the honey-roasted pigeon of the Vietnamese-Chinese culinary tradition — a preparation that comes directly from Cantonese roasting technique and that is most associated with the kitchens of Chợ Lớn, the Chinatown district of Ho Chi Minh City where the Chinese-Vietnamese community has been cooking this dish for generations. The preparation follows the same principles as vịt nướng chao and vịt quay Bắc Kinh — the skin must be prepared to receive the honey glaze, the glaze must be applied in multiple layers, and the final high-heat roasting must caramelize the outermost layer of glaze to the specific mahogany-red that is the visual signature of correctly roasted Chinese-Vietnamese poultry. For pigeon specifically, the preparation differs from duck or chicken in its scale: each bird is an individual portion, the skin-to-meat ratio is higher than any domestic poultry, and the flesh is so dark and so dense that it can carry a honey glaze that would overwhelm a lighter bird. The overnight marination is the step that most home cooks skip and most home cooks regret — the five-spice and Shaoxing wine need time to penetrate pigeon flesh, which is significantly denser than chicken and requires longer exposure to the aromatics to flavor it throughout. The air-drying after marination is the step that produces crackling skin — pigeon skin that has not been air-dried before roasting steams under the honey glaze rather than crisping, producing a soft, sticky result instead of the shatteringly crispy lacquered surface that bồ câu quay mật ong should have. One pigeon per person is the serving size — not because the bird is particularly large but because the complete experience of working through a whole roasted pigeon at the table is the intended way to eat this preparation.`,
    ingredientSections: [
        {
            title: 'Pigeon',
            items: [
                { amount: 2, name: 'whole pigeons (bồ câu), 400-500g each', note: 'cleaned — squab (young pigeon) preferred for its tenderness. The younger and smaller the bird, the more delicate the flesh and the higher the skin-to-meat ratio that makes the roasting result more dramatic.' },
            ],
        },
        {
            title: 'Overnight marinade',
            items: [
                { amount: 3, unit: 'tbsp', name: 'light soy sauce' },
                { amount: 2, unit: 'tbsp', name: 'dark soy sauce', note: 'for color depth in the marinade' },
                { amount: 2, unit: 'tbsp', name: 'Shaoxing wine (rượu Thiệu Hưng)' },
                { amount: 1, unit: 'tbsp', name: 'honey' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'five-spice powder (ngũ vị hương)' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'grated' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Honey lacquer glaze',
            items: [
                { amount: 5, unit: 'tbsp', name: 'honey', note: 'pure, runny — warmed slightly for easy application' },
                { amount: 1, unit: 'tbsp', name: 'light soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'Shaoxing wine' },
                { amount: 1, unit: 'tsp', name: 'rice wine vinegar', note: 'adds gloss and prevents burning' },
                { amount: 0.5, unit: 'tsp', name: 'sesame oil', note: 'added to the glaze last' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 2, name: 'spring onions', note: 'sliced' },
                { amount: 3, unit: 'tbsp', name: 'hoisin sauce', note: 'for dipping — the traditional Cantonese accompaniment' },
                { amount: 2, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate overnight — inside and out',
            description: 'Combine all marinade ingredients. Rub the mixture over every surface of each pigeon — under the skin of the breast (loosen with your fingers and push marinade directly onto the meat), inside the cavity, around the legs and wings. Place in a zip-lock bag or covered container. Refrigerate for minimum 12 hours — 24 hours is significantly better. The dark soy sauce and five-spice need this time to penetrate the dense pigeon flesh. After 12-24 hours, the pigeon should be visibly darker and the breast flesh tinted from the marinade.',
            tip: 'The under-skin marination of the pigeon breast is the technique that produces color and flavor in the flesh itself rather than only on the exterior skin. At 24 hours, the breast meat beneath the skin should be noticeably darker from the soy sauce penetration. This internal coloring is the sign of a properly marinated bồ câu quay.',
        },
        {
            title: 'Air-dry after marinating — essential',
            description: 'Remove the pigeons from the marinade. Scrape off any large pieces of shallot or ginger that would burn during roasting. Place on a wire rack over a tray. Refrigerate uncovered for 4-6 hours — or leave at room temperature for 2 hours. The surface should feel completely dry and slightly tacky before roasting. This step is what produces crackling skin. Wet skin from the marinade moisture steams under the glaze rather than crisping.',
            tip: 'The air-drying time after marination is more important for pigeon than for chicken or duck because pigeon skin is thinner and dries faster — but also absorbs the glaze more efficiently when dry. A 6-hour air-dry in the refrigerator produces the driest, best-prepared surface for glazing.',
        },
        {
            title: 'Apply first honey glaze and roast at moderate heat',
            description: 'Preheat oven to 180°C. Brush the pigeons all over with a generous first layer of honey glaze — every surface including the cavity opening and leg joints. Place breast-side up on a wire rack in a roasting tray. Roast for 25 minutes for smaller squab (400g), 30 minutes for larger pigeons (500g). The pigeons should be about 75% cooked with the skin golden-amber from the first glaze application.',
            tip: 'The first honey glaze application before the moderate-heat roasting phase provides the base caramelization layer — the foundation that subsequent glaze applications build on. Without this first layer, the skin never develops the depth of color that bồ câu quay mật ong requires.',
        },
        {
            title: 'Apply second and third glaze — blast at high heat',
            description: 'Increase oven to 230°C. Remove the pigeons and brush with a second generous layer of honey glaze — specifically into the joint areas and anywhere the first layer has not caramelized evenly. Return to oven for 8 minutes. Remove, apply a third and final glaze layer. Return for 5-7 minutes — watching from the 3-minute mark. The skin will rapidly deepen from amber to deep mahogany. The pigeons are done when the skin is deep red-brown and shatters when tapped with a finger.',
            tip: 'Three glaze applications — before the moderate phase and twice during the high-heat phase — are the minimum for the deep lacquered surface of bồ câu quay mật ong. Each application darkens the pigeon progressively. The final 5-7 minutes at 230°C is the critical phase — the difference between correct mahogany and burnt is about 2 minutes.',
        },
        {
            title: 'Rest and serve whole',
            description: 'Rest the roasted pigeons on a rack for 8 minutes — do not cover. The skin must be open to the air during resting to remain crispy. To serve: chop each pigeon through the bone with a heavy cleaver — the skin should shatter at the first contact. Arrange on a plate. Serve with hoisin sauce, cucumber slices, spring onion, cilantro, steamed rice, and lime wedges. The classic eating: a piece of pigeon with crackling mahogany skin dipped in hoisin sauce, eaten with a piece of cucumber — the same combination that makes Peking duck what it is, applied here to the smaller, richer bird.',
            tip: 'The skin shattering at the cleaver contact is the confirmation of a correctly roasted bồ câu quay mật ong — the same confirmation as for vịt nướng chao. If the skin is intact when cut but does not shatter, the air-drying was insufficient or the blast phase too short. Still delicious — but the specific lacquered-shattering quality that defines the preparation is a matter of technique, not of taste.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
