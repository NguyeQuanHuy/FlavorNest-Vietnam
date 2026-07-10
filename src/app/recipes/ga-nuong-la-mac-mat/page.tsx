'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-nuong-la-mac-mat',
    title: `Lâm Đồng Chicken Grilled in Mắc Mật Leaves`,
    subtitle: `Gà Nướng Lá Mắc Mật — Highland free-range chicken marinated and grilled wrapped in mắc mật leaves over charcoal, a dish of the forest edge.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Lá mắc mật (Clausena indica) is a small aromatic tree that grows at the edges of the highland forests of northern and central Vietnam — in Lạng Sơn and Cao Bằng in the north, and increasingly in the transitional forest zones of Lâm Đồng, Đắk Lắk, and the Central Highlands, where it was introduced by ethnic minority communities who carried its seeds along trade and migration routes. The leaf has a complex aromatic profile that is simultaneously citrusy, slightly anise-like, faintly resinous, and unlike any other Vietnamese herb — it is often described as what would happen if kaffir lime and Vietnamese coriander had a child that was raised in a pine forest.\n\nGà nướng lá mắc mật is the preparation that made this leaf famous beyond its forest-edge origin: free-range chicken is marinated in a paste of minced mắc mật leaves, lemongrass, garlic, and fish sauce, then wrapped in additional whole mắc mật leaves and grilled slowly over charcoal until the leaves have charred and the steam trapped inside has perfumed the flesh from the outside while the marinade works from within. When the leaves are peeled back at the table, the aroma released is the most complex chicken smell in Vietnamese cooking.\n\nThe Lâm Đồng version of this dish uses vịt Cổ Lũng mountain chicken or local gà ta (free-range chicken) — never commercial broiler chicken, which lacks the muscle density and fat distribution to carry the mắc mật aroma without becoming bland. The highland chicken's dark, firm meat and higher fat content are what allow the leaf's volatile compounds to penetrate during the long, slow grilling process. This recipe documents the Lâm Đồng highland method with the double-leaf wrapping technique and the specific marinade proportions developed by the forest-edge communities of Đà Lạt's outskirts.`,
    ingredientSections: [
        {
            title: `Chicken`,
            items: [
                { amount: 1.2, unit: 'g', name: `free-range chicken (ga ta), cut into pieces`, note: `bone-in thighs and drumsticks preferred; the dark meat carries mắc mật aroma better than breast` },
                { amount: 1, unit: 'tbsp', name: `rice wine`, note: `rubbed on chicken, rested 10 min, rinsed — removes gamey note of free-range birds` },
            ],
        },
        {
            title: `Mắc mật marinade paste`,
            items: [
                { amount: 40, unit: 'g', name: `fresh mắc mật leaves (la mac mat)`, note: `approximately 30-40 leaves — minced fine; available from specialist Vietnamese herb suppliers online in Germany` },
                { amount: 3, name: `lemongrass stalks, inner white part only, minced to paste` },
                { amount: 5, name: `garlic cloves, minced to paste` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tbsp', name: `oyster sauce` },
                { amount: 1, unit: 'tbsp', name: `honey` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `ground turmeric (bot nghe)` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Wrapping leaves`,
            items: [
                { amount: 40, name: `whole fresh mắc mật leaves`, note: `large, undamaged leaves for wrapping — the inner marinade paste uses minced leaves, the outer wrap uses whole leaves` },
                { amount: 1, name: `roll kitchen twine`, note: `for securing the wrapped pieces` },
            ],
        },
        {
            title: `Dipping sauce (muoi mac mat — leaf-infused salt)`,
            items: [
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 6, name: `fresh mắc mật leaves, minced very fine` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 2, name: `bird's eye chili, minced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed sticky rice (xoi) or white rice` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 2, name: `limes, wedged` },
                { amount: 150, unit: 'g', name: `Da Lat pickled vegetables`, note: `kohlrabi and carrot pickled in rice vinegar` },
            ],
        },
    ],
    steps: [
        {
            title: `Understanding lá mắc mật — sourcing and substitutes`,
            description: `Lá mắc mật (Clausena indica) is the ingredient that defines this dish and has no direct substitute. The leaf combines citrus (from the Clausena genus's relationship to the citrus family), anise, and resinous forest-pine notes in proportions that no single herb replicates. For sourcing in Germany: Vietnamese online food suppliers (Viet-Foods.de, Asian-Markt.de) occasionally stock dried mắc mật leaves or frozen bunches; Vietnamese community groups in Berlin, Frankfurt, and Hamburg sometimes source fresh leaves from specialty growers. A partial approximation: combine 20g kaffir lime leaves (minced) with 10g Vietnamese coriander (rau răm), 5g fresh tarragon, and 3g fresh dill. This approximation has the citrus note, the anise note, and the herbaceous note but lacks the resinous pine quality. It produces a good dish — not the same dish.`,
            tip: `If you locate fresh mắc mật leaves, buy more than you need and freeze the excess in zip-lock bags. Frozen mắc mật loses some volatile aroma but retains enough for cooking purposes. The leaves freeze well for up to 3 months. Dried mắc mật is available online and retains the resinous note better than drying preserves most herbs, because the resinous compounds are more heat-stable than the fresh citrus volatiles.`,
        },
        {
            title: `Make the marinade paste`,
            description: `Combine minced mắc mật leaves, lemongrass paste, garlic paste, minced shallots, fish sauce, oyster sauce, honey, sugar, turmeric, black pepper, and neutral oil in a bowl. Mix thoroughly — the marinade should be a fragrant, slightly oily paste of deep green colour with visible herb and lemongrass texture. The honey serves two functions: it tenderises the chicken protein during the long marinade and caramelises during grilling, giving the surface a lacquered finish. The turmeric colours the flesh yellow beneath the skin and provides its own aromatic contribution that complements the mắc mật without competing.`,
        },
        {
            title: `Marinate the chicken — minimum 2 hours`,
            description: `Rub chicken pieces with rice wine, rest 10 minutes, rinse and pat dry. Score each piece with 3-4 diagonal cuts through the skin to the bone — this allows the marinade to penetrate the densest parts of the thigh and drumstick. Coat each piece thoroughly in the mắc mật marinade paste, pressing it firmly into the score cuts and under the skin where possible. Cover and refrigerate for minimum 2 hours, preferably overnight. The mắc mật volatile compounds penetrate the flesh more deeply with longer marinating time — an overnight marinade (8-12 hours) produces measurably more aromatic chicken than a 2-hour marinade.`,
            tip: `The score cut depth matters: too shallow (2mm) and the marinade sits on the surface; too deep (to the bone) and the cut opens during cooking, losing juices. 5mm into the flesh is the correct depth — the knife should feel the resistance of the bone without reaching it. Each cut creates a channel that the marinade fills and that the mắc mật vapour uses during grilling to penetrate inward from both the surface and the interior of the cut simultaneously.`,
        },
        {
            title: `Wrap in mắc mật leaves`,
            description: `Remove marinated chicken from the refrigerator 20 minutes before grilling. For each piece: lay 4-5 large mắc mật leaves flat, overlapping to create a leaf mat slightly larger than the chicken piece. Place the chicken marinade-side down in the centre of the leaf mat. Fold the leaves up and around the piece, pressing firmly to contact the skin — the leaves should be in full contact with the marinated surface. Add 2-3 more leaves on top and wrap the entire bundle firmly with kitchen twine at 2-3 points. The leaf wrapping creates a sealed environment during the first phase of grilling where the volatile mắc mật compounds build up as steam inside the package and penetrate the flesh from the outside while the marinade works from within.`,
            tip: `The double-layer mắc mật approach — minced leaves in the marinade plus whole leaves as wrapping — is the Lâm Đồng highland technique that produces the maximum aromatic penetration into the flesh. The minced leaves in the marinade provide direct surface contact; the whole-leaf steam environment provides vapour-phase penetration that reaches into the flesh between the marinade's score-cut channels. Neither approach alone achieves what both together produce.`,
        },
        {
            title: `Grill — indirect then direct`,
            description: `Prepare a two-zone charcoal fire. Place leaf-wrapped chicken bundles on the indirect side, covered, for 25-30 minutes. The leaves will steam and char on the outside; inside, the chicken cooks gently in the aromatic steam environment. After 30 minutes, move to the direct heat side and grill 5-6 minutes per side, turning once. The outer leaves will char completely — this is correct and desired. The char on the leaves produces additional aromatic compounds (pyrazines and furans from the burning Clausena essential oils) that permeate the final layer of flesh. Do not remove the charred leaves until serving.`,
        },
        {
            title: `Make the mắc mật leaf salt`,
            description: `Combine coarse salt, very finely minced fresh mắc mật leaves, lime juice, sugar, and minced chili in a small bowl. Mix until the salt has absorbed the leaf oils and turned pale green. This muối mắc mật is the dipping condiment that delivers one final concentrated hit of the leaf's aroma at the moment of eating — the chicken has been perfumed from inside by the marinade and from outside by the leaf steam, and the dipping salt delivers it undiluted at the point of contact with the tongue. Prepare immediately before serving — the volatile aroma fades within 30 minutes of cutting the leaves.`,
        },
        {
            title: `Unwrap at the table`,
            description: `Bring the charred leaf bundles to the table on a wooden board. Cut the twine and peel back the charred outer leaves at the table — the moment the leaves are opened, the accumulated aromatic steam is released in one concentrated burst. This opening is the most dramatic sensory moment of the dish and should happen at the table, not in the kitchen. The chicken beneath will be deep golden-brown with a lacquered surface from the honey marinade. Serve immediately with sticky rice, fresh herbs, Đà Lạt pickled vegetables, and the mắc mật leaf salt in individual small bowls.`,
            tip: `In K'Ho villages where gà nướng lá mắc mật is prepared for important guests, the host always opens the first bundle at the table and waits for the aroma to reach the guests before any other word is spoken. The released steam is considered the dish announcing itself. Recreate this at home by gathering everyone around the table before cutting the twine — the 3-second aromatic release when the leaves are peeled back is the dish's highest point and should be experienced collectively.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}