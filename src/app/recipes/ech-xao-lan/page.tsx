'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ech-xao-lan',
    title: '?ch Xào Lan (Frog Stir-Fried in the Rolled Wok Style)',
    subtitle: 'Frog pieces caramelized in a clay pot then rolled continuously in a wok with lemongrass, galangal, ginger, and fish sauce until the aromatic paste dries completely onto every surface — the xào lan technique applied to the most tender meat in Vietnamese freshwater cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ech-xao-lan.jpg',
    intro: `?ch xào lan is the frog preparation that most clearly demonstrates what the xào lan technique achieves: a dry, aromatic crust caramelized onto the protein surface that is simultaneously the seasoning and the texture of the dish. ?ch — frog, specifically the paddy frog (Rana rugulosa) found in rice fields and waterways throughout Vietnam — is the freshwater protein that Vietnamese cooks consider the most delicate and the most demanding to cook well. The flesh is white, lean, and extremely tender, with a sweetness that is often compared to chicken but is specifically its own: cleaner, slightly more delicate, with none of the fat that chicken carries. This leanness is what makes xào lan the ideal preparation for ?ch — the technique's dry-heat rolling caramelizes the surface proteins into a crust that provides the textural interest the lean meat itself lacks, and the lemongrass-galangal-ginger aromatic paste provides the flavor depth that the clean, delicate meat does not generate on its own. The combination of three aromatics — lemongrass, galangal, and fresh ginger — in roughly equal proportions is specific to Vietnamese frog cooking and reflects a specific culinary knowledge: lemongrass and galangal together without ginger would be too forward; galangal and ginger together without lemongrass would be too warming; all three together produce the aromatic equilibrium that complements rather than overpowers the delicate frog. The Mekong Delta and central Vietnamese provinces are the primary frog-eating regions of Vietnam, and in both places ?ch xào lan is a nh?u dish eaten with cold beer and genuine enthusiasm by people who have been eating frog since childhood and who consider it one of the great pleasures of the Vietnamese countryside table.`,
    ingredientSections: [
        {
            title: 'Frog',
            items: [
                { amount: 600, unit: 'g', name: 'cleaned frog pieces (?ch làm s?ch)', note: 'legs and body sections, bone-in. Available at Vietnamese and Asian markets cleaned and ready to cook. If using whole frogs: clean, remove skin, separate legs from body, chop body into sections.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for pre-marinating' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'reduces gamey notes and gives golden color' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Three-aromatic paste',
            items: [
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, minced to paste' },
                { amount: 30, unit: 'g', name: 'fresh galangal (ri?ng)', note: 'peeled and minced to paste — the essential middle aromatic' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'minced — the warming finishing aromatic' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced — for the finished dish' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Xào lan seasoning',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'additional — added during rolling' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'added at the very end' },
            ],
        },
        {
            title: 'Finishing crust',
            items: [
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'finely ground — the finishing crust element' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded' },
            ],
        },
        {
            title: 'Garnish and to serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, extra' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the frog — 20 minutes',
            description: 'Combine frog pieces with fish sauce, turmeric, black pepper, and sugar. Toss to coat every surface. Marinate for 20 minutes at room temperature. The turmeric is specifically important for frog — it eliminates the slightly gamey character that unfamiliar cooks sometimes find off-putting about frog meat, while the fish sauce begins seasoning the lean flesh from the surface inward. After marinating, the frog pieces should be golden-yellow from the turmeric.',
            tip: 'Frog meat is leaner than chicken and absorbs marinades faster because of its lower fat content. 20 minutes is sufficient — longer and the fish sauce can begin to firm the delicate flesh before it reaches the wok.',
        },
        {
            title: 'Sear the frog pieces first',
            description: 'Heat 2 tablespoons of oil in a wok over maximum heat until smoking. Add the marinated frog pieces in a single layer — do not crowd. Sear without moving for 2-3 minutes until the bottom is golden and the turmeric has caramelized on the surface. Flip and sear 1-2 minutes on the other side. The frog should be about 70% cooked and have a golden-caramelized exterior. Remove and set aside.',
            tip: 'The initial sear for ?ch xào lan is what differentiates it from a simple stir-fry. The caramelized surface from the sear provides the first layer of texture that the rolling caramelizes further. Frog that has not been seared first produces a softer, less interesting result in the xào lan step.',
        },
        {
            title: 'Build the three-aromatic paste base',
            description: 'In the same wok with remaining oil, fry the lemongrass paste, galangal paste, ginger, garlic, and shallots over high heat for 2 minutes until deeply golden. All three aromatics must be properly cooked — the lemongrass should be golden, the galangal should have lost its sharp rawness, and the ginger should smell warmed and rounded rather than sharp. Add minced chili and fry 30 seconds. The wok should smell extraordinary at this stage — the three-aromatic combination together is one of the most complex natural fragrance combinations in Vietnamese cooking.',
            tip: 'Cooking all three aromatics — lemongrass, galangal, ginger — simultaneously rather than sequentially produces a more integrated result than adding them one at a time. The oils from each release together and blend in the hot wok oil rather than each developing separately.',
        },
        {
            title: 'Return frog and begin the rolling — 12-15 minutes',
            description: 'Return the seared frog pieces to the wok with the aromatic base. Add fish sauce, sugar, and black pepper. Begin the xào lan rolling: toss and turn the frog continuously, ensuring every piece contacts the hot wok surface. The sauce will gradually reduce and caramelize onto the frog pieces. Roll for 12-15 minutes over medium-high heat — the paste should dry progressively from wet to sticky to almost-dry caramelized. If the paste dries too quickly, add a splash of water and continue rolling.',
            tip: 'The 12-15 minute rolling time for ?ch is slightly shorter than for dê xào lan (15-20 minutes) because frog is more delicate and can break apart with extended rolling. Watch the frog pieces carefully — when the paste is dry and caramelized and the pieces feel firm throughout when pressed, the rolling is complete.',
        },
        {
            title: 'Apply the peanut crust',
            description: 'When the aromatic paste has dried completely onto the frog surface, reduce heat to medium. Add the finely ground peanuts and toasted sesame. Roll briefly — 45-60 seconds — until the peanut powder adheres to the caramelized surface. Add shredded kaffir lime leaves and sesame oil in the final 10 seconds. Remove from heat immediately.',
            tip: 'The peanut powder for ?ch xào lan should be finer than for other xào lan preparations — frog pieces are smaller and the peanut needs to coat more completely. Process the peanuts until they are fine crumbs with no visible whole pieces.',
        },
        {
            title: 'Plate and serve',
            description: 'Transfer to a serving plate. The finished ?ch xào lan should show: golden-brown pieces with a dry, caramelized crust visible on all surfaces, the peanut-sesame coating adhered throughout, the kaffir lime shreds visible. Scatter rau ram and sliced spring onion. Serve with lime wedges, sliced chili, and steamed rice. To eat: pick up a frog leg piece, bite through the peanut-aromatic crust to the tender white flesh inside. The contrast of the dry, complex exterior and the silky interior is the specific pleasure of ?ch xào lan.',
            tip: 'The frog legs of ?ch xào lan are eaten with the fingers — holding the small leg bone and biting through the caramelized crust. The lean, sweet flesh inside the caramelized exterior is the eating experience that makes Vietnamese people who grew up eating frog describe it as one of the most satisfying preparations in the countryside cooking repertoire.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
