'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'luon-xao-sa-ot',
    title: 'Luon Xào S? ?t (Eel Stir-Fried with Lemongrass and Chili)',
    subtitle: 'Fresh rice paddy eel pieces coated in turmeric and stir-fried at maximum wok heat with lemongrass, galangal, garlic, and fresh chili until the exterior caramelizes and the kitchen smells of the specific combination that makes luon xào s? ?t one of the most addictive nh?u dishes in central and southern Vietnam.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/luon-xao-sa-ot.jpg',
    intro: `Luon xào s? ?t is the stir-fried eel preparation that appears on nh?u menus and family dinner tables across central and southern Vietnam — a dish where the specific combination of fresh rice paddy eel, lemongrass, galangal, and chili produces something more than its ingredients separately: a caramelized, intensely fragrant wok dish where the eel's naturally sweet, slightly mineral flesh takes on the dry, aromatic character of the xào technique and the lemongrass-galangal paste coats every surface in a golden crust. Luon d?ng — the rice paddy eel, Monopterus albus — is the specific freshwater eel of Vietnamese cooking, different from the larger saltwater or freshwater eels of Japanese, European, or Chinese cooking in its smaller size (30-60cm), its boneless eating quality (the bones are too small and soft to require removal in smaller specimens), and its specific sweetness from the rice paddy and canal habitat of the Mekong Delta and the central Vietnamese plains. The cleaning and preparation of luon is the most demanding step in the preparation — the eel must be cleaned of its slippery coating using salt or ash before cutting, a process that requires either confidence or patience and that is the reason many Vietnamese home cooks prefer to buy pre-cleaned eel from the market rather than starting from live. Once cleaned and cut into 5-7cm sections, the eel is marinated with turmeric — which simultaneously reduces the muddy freshwater character and provides the golden color — and then stir-fried with the maximum lemongrass and galangal aromatics that the wok can hold and that will caramelize onto the eel surface during the brief, high-heat cooking period.`,
    ingredientSections: [
        {
            title: 'Eel',
            items: [
                { amount: 600, unit: 'g', name: 'fresh rice paddy eel (luon d?ng), cleaned', note: 'cut into 5-7cm sections. To clean live eel: rub firmly with coarse salt to remove the slippery coating, rinse thoroughly, cut. Pre-cleaned eel from Asian markets is acceptable.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for pre-marinating' },
                { amount: 1, unit: 'tsp', name: 'fresh turmeric, grated', note: 'or 0.5 tsp dried turmeric' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Stir-fry aromatics',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, minced to paste' },
                { amount: 30, unit: 'g', name: 'fresh galangal (ri?ng)', note: 'minced to paste — the aromatic that makes this specifically central Vietnamese' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 4, name: 'bird\'s eye chilies', note: 'minced — luon xào s? ?t should be genuinely spicy' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced diagonally' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'added at the end' },
                { amount: 3, unit: 'tbsp', name: 'water', note: 'added mid-wok to create steam' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded' },
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground — finishing seasoning' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, extra sliced' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean and marinate the eel',
            description: 'If starting with live eel: rub each eel vigorously with coarse salt to remove the slippery mucus coating — the salt reacts with the mucus and allows a firm grip. Rinse thoroughly. Cut into 5-7cm sections. If starting with pre-cleaned eel sections: rinse and pat dry. Combine eel sections with fish sauce, grated turmeric, black pepper, and sugar. Toss to coat. Marinate 20 minutes at room temperature.',
            tip: 'The salt-rubbing technique for live eel is the step that makes the difference between an eel that is safe to handle and one that slips continuously. Apply the salt generously to the outside of the live eel and rub firmly in both directions — with and against the natural direction of movement. The mucus will become visible as a white foam. Rinse completely before cutting.',
        },
        {
            title: 'Sear the eel first — briefly',
            description: 'Heat 2 tablespoons of oil in a wok over maximum heat until smoking. Add the marinated eel pieces in a single layer — do not crowd. Sear without moving for 2 minutes until the bottom is golden and the turmeric has caramelized on the surface. Flip and sear 1 minute. The eel should be about 65% cooked and have a golden-caramelized exterior. Remove and set aside.',
            tip: 'The initial sear for luon xào is more important than for most other proteins because eel releases significant moisture during cooking. The sear seals the surface and produces a caramelized exterior that holds during the subsequent wok-tossing. Eel that goes directly into the aromatic wok without searing releases moisture that steams the aromatics rather than frying them.',
        },
        {
            title: 'Build the aromatic base at maximum heat',
            description: 'Add remaining oil to the wok. Add lemongrass paste, galangal paste, garlic, and shallots over maximum heat. Fry for 90 seconds until deeply golden — the galangal must cook through completely or it tastes harsh and raw. Add all the minced and sliced chili. The wok should smell explosively of lemongrass and galangal together — this is the aromatic moment the dish is built around.',
            tip: 'The 90-second frying of the lemongrass-galangal paste at maximum heat before the eel returns is the step that most defines the final flavor of luon xào s? ?t. Under-cooked aromatics produce a harsh, raw-smelling dish. Properly caramelized aromatics produce the specific golden, complex fragrance that makes this preparation one of the most aromatic wok dishes in Vietnamese cooking.',
        },
        {
            title: 'Return eel and stir-fry — 5-6 minutes',
            description: 'Return the seared eel to the wok with the aromatic base. Add fish sauce, sugar, and black pepper. Toss continuously over maximum heat for 5-6 minutes. Add water around the wok edge at 3 minutes to create a burst of steam that helps the sauce penetrate the eel. The paste should gradually caramelize onto the eel surface — at 5-6 minutes each piece should be coated in a dry, fragrant, slightly charred aromatic crust.',
            tip: 'The 5-6 minute tossing time for luon xào is longer than for lighter proteins because eel is dense and needs the extended wok time to cook completely through. Test at 5 minutes by pressing the thickest piece — it should feel firm throughout with no soft center. The interior should be white and set, not translucent.',
        },
        {
            title: 'Add finishing elements and serve',
            description: 'Add shredded kaffir lime leaves, spring onion pieces, and sesame oil. Toss once more. Grind black pepper over the surface. Transfer to a serving plate — the luon xào should show: golden-caramelized eel pieces coated in the aromatic paste, the lemongrass-galangal crust visible on each surface, the kaffir lime shreds and spring onion green throughout. Serve with rau ram, mint, lime wedges, sliced chili, and steamed rice.',
            tip: 'Luon xào s? ?t eaten immediately from the wok — when the eel is still sizzling and the lemongrass aromatics at their most volatile — is the best version of the dish. The fragrance of hot lemongrass-galangal on freshly cooked eel is the sensory experience the preparation is designed to produce. Cooled luon xào is good; hot luon xào is what the dish is.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
