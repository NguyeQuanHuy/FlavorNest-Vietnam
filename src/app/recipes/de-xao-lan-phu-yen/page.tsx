'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'de-xao-lan-phu-yen',
    title: 'Dê Xào Lan Phú Yên (Phú Yên Rolled Goat Stir-Fry)',
    subtitle: 'Goat pieces stir-fried and rolled in a wok with lemongrass, galangal, m?m nhi, and roasted peanuts until each piece is caramelized and coated in a dry, fragrant paste that clings — the xào lan technique where the sauce reduces completely and the aromatics become the crust.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/de-xao-lan-phu-yen.jpg',
    intro: `Dê xào lan is the central Vietnamese rolled stir-fry applied to goat — a preparation where xào means to stir-fry and lan means to roll or tumble, describing the specific motion of tossing the meat continuously in the wok until the liquid marinade has evaporated completely and the aromatic paste has caramelized onto every surface in a dry, fragrant crust. The xào lan technique is specific to central Vietnamese cooking and appears with pork, chicken, and goat — but the goat version is considered the most complete expression of the method because goat's dense, slightly gamey flesh responds to the long, dry wok treatment better than more delicate proteins. The Phú Yên version of dê xào lan uses m?m nhi — the province's first-press premium fish sauce — in the marinade and in the wok sauce, which produces a caramelization that ordinary fish sauce cannot approach. The m?m nhi's higher concentration of amino acids and its natural sweetness caramelize at a lower temperature than standard fish sauce and produce a crust that is darker, more complex, and more aromatic. The galangal in the marinade is more prominent than in other provincial versions — Phú Yên uses galangal the way the rest of Vietnam uses ginger, generously and without restraint, and in xào lan it provides the specific warm-piney character that defines the dish's personality. Roasted peanuts ground into the finishing paste are the element that creates the dry, slightly crunchy coating that distinguishes xào lan from a sauced stir-fry — the peanut powder absorbs the last of the wok moisture and adheres to the caramelized meat surface, producing a texture that is simultaneously dry and intensely flavored.`,
    ingredientSections: [
        {
            title: 'Goat',
            items: [
                { amount: 700, unit: 'g', name: 'bone-in goat pieces (dê ch?t mi?ng)', note: 'rib, shoulder, and neck — 4-5cm pieces. Bone-in essential for xào lan — the bone conducts heat and provides the collagen that helps the paste adhere.' },
            ],
        },
        {
            title: 'Marinade',
            items: [
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, minced to paste' },
                { amount: 30, unit: 'g', name: 'fresh galangal', note: 'finely minced to paste — prominent in Phú Yên version' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'm?m nhi (Phú Yên first-press fish sauce)', note: 'the defining seasoning — not substitutable for this dish' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Xào lan wok paste',
            items: [
                { amount: 3, name: 'extra lemongrass stalks', note: 'minced — added to the wok, separate from the marinade' },
                { amount: 4, name: 'extra garlic cloves', note: 'minced' },
                { amount: 3, name: 'fresh red chilies', note: 'minced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 1.5, unit: 'tbsp', name: 'm?m nhi', note: 'additional — added to the wok during cooking' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Finishing — the xào lan crust',
            items: [
                { amount: 80, unit: 'g', name: 'roasted peanuts', note: 'finely ground — not a paste, but fine crumbs. Added in the final minute of wok cooking.' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'coarsely ground — final seasoning' },
            ],
        },
        {
            title: 'Garnish and to serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 16, name: 'sesame rice crackers (bánh tráng mè)', note: 'optional — the Phú Yên accompaniment' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the goat — minimum 1 hour',
            description: 'Combine the goat pieces with lemongrass paste, galangal paste, garlic, shallots, m?m nhi, sugar, turmeric, black pepper, and sesame oil. Work the marinade thoroughly into every surface and between the bone and meat. Marinate for minimum 1 hour at room temperature, or up to 6 hours refrigerated. The galangal needs time to penetrate the dense goat flesh — 1 hour produces a noticeable difference versus 15 minutes.',
            tip: 'The xào lan technique requires a well-marinated meat because the final dish has no sauce to compensate for under-seasoned meat. Every piece must carry the galangal-lemongrass character throughout — not just on the surface. Longer marination always produces a better result here.',
        },
        {
            title: 'Sear the goat first — high heat, no moving',
            description: 'Heat a wok or heavy pan over maximum heat until smoking. Add 2 tablespoons of oil. Add the marinated goat pieces in a single layer — do not crowd. Sear without touching for 3-4 minutes until the bottom caramelizes deeply and the marinade chars to the meat surface. Flip and sear 2-3 minutes. The goat should be 70% cooked and have a deeply caramelized exterior. Remove and set aside.',
            tip: 'The initial sear without touching is what produces the caramelized crust that is the foundation of xào lan. The marinade on the meat surface caramelizes in contact with the hot oil and forms a layer that the subsequent wok-rolling cannot achieve. Do not stir during this stage.',
        },
        {
            title: 'Build the wok paste and return the goat',
            description: 'In the same wok with remaining oil, fry extra lemongrass, garlic, and both types of chili for 45 seconds until golden and the wok smells explosively of lemongrass. Return the seared goat pieces. Add the additional m?m nhi and sugar — it will sizzle and immediately begin to caramelize on the hot surfaces. Begin the lan motion: toss and roll the goat continuously, turning every piece, ensuring every surface contacts the hot wok.',
            tip: 'The lan rolling motion is the technique that gives the dish its name and its texture. Continuous, firm tossing that tumbles each piece against the hot wok surface caramelizes the m?m nhi paste onto the meat in layers. Gentle stirring produces a steamed result; vigorous rolling produces the dry, caramelized crust.',
        },
        {
            title: 'The long rolling — 15-20 minutes',
            description: 'Continue the xào lan rolling over medium-high heat for 15-20 minutes total. The key transitions to watch: at 5 minutes the liquid from the marinade is evaporating; at 10 minutes the surface should be dry and the caramelization deepening; at 15 minutes the paste should be clinging to the meat surface in a dry, slightly sticky crust. If the wok dries too quickly before the goat is cooked through, add 2 tablespoons of water and continue rolling. The goat is done when a chopstick passes through the thickest piece without resistance.',
            tip: 'The 15-20 minute rolling time for goat is significantly longer than for pork or chicken xào lan — goat is denser and takes longer to cook through. The extended time also allows more layers of caramelization to build on the surface. This is the discipline of dê xào lan: patience with the rolling.',
        },
        {
            title: 'Add the peanut crust — final minute',
            description: 'When the goat is fully cooked and the caramelized paste is dry and fragrant, reduce heat to medium. Add the finely ground roasted peanuts and toasted sesame seeds. Roll and toss for 60 seconds — the peanut powder absorbs the last of the wok moisture and adheres to the caramelized goat surface, creating the specific dry, slightly crunchy coating of xào lan. Grind black pepper generously and toss once more.',
            tip: 'The peanuts must be very finely ground — almost a powder — for them to adhere to the caramelized goat surface. Roughly crushed peanuts fall off; fine powder sticks. Process them in a blender or pound in a mortar until fine crumbs remain, no whole peanut pieces.',
        },
        {
            title: 'Plate and serve',
            description: 'Transfer to a serving plate. The finished dê xào lan Phú Yên should look: deeply caramelized golden-brown surface, visibly coated in the peanut-sesame crust, with the lemongrass and galangal paste clinging in darker patches. Scatter rau ram, spring onion, and fresh chili over the top. Serve with steamed rice, lime wedges, and sesame crackers. To eat: pull a rib piece with fingers, bite through the peanut crust to the caramelized goat beneath. The crackers and lime are for between bites.',
            tip: 'Dê xào lan eaten with the fingers — holding the bone piece and biting through the caramelized crust — produces a different experience than eating with chopsticks and a spoon. The bones are handles; the crust is what you bite through. This is the intended eating method and produces the best contact between the caramelized surface and the palate.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
