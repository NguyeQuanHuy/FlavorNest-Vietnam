'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'vit-quay-mac-mat',
    title: `Cao Bằng Mắc Mật Roast Duck`,
    subtitle: `Vịt Quay Mắc Mật — Cao Bằng's signature whole roast duck marinated in Clausena indica leaves — the most aromatic roast duck in Vietnamese cooking.`,
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '5 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Vịt quay mắc mật is the dish that defines Cao Bằng cuisine to the rest of Vietnam — a whole roast duck whose skin is lacquered deep mahogany and whose flesh carries the distinctive resinous-citrus fragrance of lá mắc mật (Clausena indica leaves), a wild highland tree that grows throughout the limestone karst forests of Cao Bằng, Lạng Sơn, and the Vietnamese-Chinese border region. The dish is so associated with the province that "vịt quay Cao Bằng" is used throughout Vietnam as a category descriptor for any roast duck prepared in this style, even when made far from the province itself.\n\nClausena indica (mắc mật in Tày language, sometimes called wild lime or tooth lime in English) is a small tree in the Rutaceae family — the same family as citrus — whose leaves contain volatile oils with a profile that sits somewhere between lime zest, pepper, and camphor, with a resinous depth that distinguishes it from any cultivated citrus herb. The leaves are used fresh, stuffed into the duck cavity and rubbed under the skin, then discarded before serving — they perfume the flesh from the inside and outside during roasting without appearing in the finished dish. Their presence is entirely aromatic: you taste mắc mật through the duck's fat and skin, never as a separate element.\n\nThe Tày and Nùng communities of Cao Bằng have been roasting duck with mắc mật for generations — the preparation appears in historical records of the region dating to the nineteenth century French colonial surveys, which note the distinctive fragrance of duck roasting over charcoal fires in Cao Bằng town's market district. The modern preparation uses a charcoal rotisserie, but the underlying technique — long marination, honey-vinegar glaze, slow turning over moderate heat — is unchanged.`,
    ingredientSections: [
        {
            title: `Duck`,
            items: [
                { amount: 1, name: `whole duck (2-2.2kg)`, note: `cleaned, excess fat removed from cavity — air-dried in refrigerator uncovered 12 hours before cooking` },
            ],
        },
        {
            title: `Mắc mật marinade`,
            items: [
                { amount: 80, unit: 'g', name: `fresh mac mat leaves (Clausena indica)`, note: `young and mature leaves mixed — available at Vietnamese community sources in Germany or order dried from specialty highland herb suppliers; substitute: 40g fresh kaffir lime leaves + 20g fresh basil + 1 tsp Sichuan pepper for a partial approximation` },
                { amount: 5, name: `garlic cloves, minced to paste` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tbsp', name: `soy sauce` },
                { amount: 1, unit: 'tbsp', name: `honey` },
                { amount: 1, unit: 'tsp', name: `five-spice powder (ngu vi huong)` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `sugar` },
            ],
        },
        {
            title: `Honey-vinegar glaze (for lacquered skin)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `honey` },
                { amount: 1.5, unit: 'tbsp', name: `rice vinegar` },
                { amount: 1, unit: 'tbsp', name: `soy sauce` },
                { amount: 0.5, unit: 'tsp', name: `five-spice powder` },
            ],
        },
        {
            title: `Cavity stuffing`,
            items: [
                { amount: 40, unit: 'g', name: `fresh mac mat leaves`, note: `stuffed inside the cavity during roasting` },
                { amount: 3, name: `lemongrass stalks, bruised` },
                { amount: 4, name: `garlic cloves, smashed` },
                { amount: 3, name: `slices fresh ginger` },
            ],
        },
        {
            title: `Hạt dổi dipping salt`,
            items: [
                { amount: 1, unit: 'tsp', name: `hat doi seeds, toasted and crushed` },
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1.5, unit: 'tbsp', name: `lime juice` },
                { amount: 2, name: `bird's eye chili, minced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice or xôi (sticky rice)` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 2, name: `limes, wedged` },
                { amount: 10, name: `fresh mac mat leaves`, note: `arranged as garnish on serving plate — visual and aromatic signal` },
            ],
        },
    ],
    steps: [
        {
            title: `Air-dry the duck — 12 hours`,
            description: `Clean the duck thoroughly, remove excess cavity fat, and pat completely dry inside and out. Place on a wire rack over a tray in the refrigerator, uncovered, for 12 hours. This air-drying step is the most important preparation for crispy lacquered skin — it removes surface moisture that would cause steaming rather than crisping during roasting. The skin should feel dry, slightly papery, and slightly stiff after 12 hours. Without this step, the honey glaze will not adhere evenly and the skin will be soft rather than lacquered.`,
            tip: `The air-drying technique is identical to the preparation for Peking duck (北京烤鸭), which vịt quay mắc mật is historically related to through the culinary exchange between the Vietnamese Tày-Nùng communities and the Zhuang-Han communities across the border in Guangxi. Cao Bằng's proximity to Guangxi (the border is 40km from the provincial capital) means the roasting technique was absorbed and then adapted with the local mắc mật ingredient — producing a dish that is simultaneously Sinitic in technique and entirely Vietnamese-highland in flavour.`,
        },
        {
            title: `Prepare and apply the mắc mật marinade`,
            description: `Bruise fresh mắc mật leaves by crushing in the palm — this breaks the cell walls and releases the volatile oils. Combine bruised leaves with garlic paste, minced shallot, fish sauce, soy sauce, honey, five-spice, black pepper, salt, and sugar. Mix into a fragrant paste. Using your fingers, separate the duck skin from the breast and thigh meat — slide fingers between skin and flesh to create pockets. Rub marinade paste directly under the skin, over the flesh. Rub remaining paste over the exterior skin. Stuff the cavity with fresh mắc mật leaves, bruised lemongrass, garlic, and ginger. Truss the cavity closed with kitchen twine. Marinate refrigerated for minimum 4 hours, ideally overnight.`,
            tip: `The under-skin marinade application is the technique that allows the mắc mật's aromatic oils to penetrate the duck flesh directly rather than only seasoning the surface. Duck skin is thick and relatively impermeable — marinade applied only to the exterior seasons the skin but not the flesh underneath. The under-skin application means that when the fat renders during roasting, the mắc mật-infused flesh fat bastes the meat continuously from within.`,
        },
        {
            title: `Make the honey-vinegar glaze`,
            description: `Combine honey, rice vinegar, soy sauce, and five-spice. Heat gently until honey dissolves completely. Cool to room temperature. The rice vinegar in the glaze performs two functions: its acetic acid partially denatures the skin proteins, allowing them to crisp more effectively during roasting; and it prevents the honey from burning too quickly on the exterior before the duck is fully cooked. This is the same chemistry used in Cantonese char siu and Peking duck glazes — a technique the Cao Bằng tradition has adapted from its Guangxi neighbours.`,
        },
        {
            title: `First glaze and rest`,
            description: `Remove duck from marinade, wipe exterior clean of large leaf pieces and marinade solids — they will burn during roasting. Brush the honey-vinegar glaze generously over all exterior surfaces. Hang or place on a rack at room temperature for 30 minutes — the glaze dries slightly and forms a thin, even coating. This dried glaze layer is what produces the lacquered effect: when the glaze contacts the oven heat, it immediately caramelises rather than running off the skin. A wet glaze runs and produces patchy colour; a dried glaze produces the uniform deep mahogany of authentic vịt quay.`,
        },
        {
            title: `Roast — the Cao Bằng method`,
            description: `Preheat oven to 220°C. Place duck breast-side up on a wire rack over a roasting pan. Roast at 220°C for 20 minutes — the initial high heat sets the glaze and begins rendering the fat. Reduce to 170°C and roast 40 more minutes. Remove, brush with a second coat of glaze, return to 190°C for 15 minutes until the skin is deep mahogany and the glaze has set to a hard, slightly sticky lacquer. The duck is done when the juices run clear when the thigh is pierced and the skin is uniformly deep brown. Rest 10 minutes before carving.`,
            tip: `Traditional Cao Bằng vịt quay is cooked on a charcoal rotisserie — the rotation ensures even rendering of the duck's substantial subcutaneous fat, and the charcoal smoke contributes to the finished flavour. At home, the oven method produces excellent results but misses the smoke note. To approximate: place 2-3 soaked hardwood chips on the oven floor for the first 20 minutes of roasting. Remove before the temperature reduction — lingering heavy smoke at lower temperatures turns bitter rather than aromatic.`,
        },
        {
            title: `Carve and serve`,
            description: `Carve the rested duck at the table — slice the breast into thin pieces, separate the legs at the joint. The skin should shatter slightly when cut — the lacquer is crispy and the fat beneath fully rendered. Arrange on a plate with fresh mắc mật leaves (which function as a visual and aromatic garnish — the diner smells the mắc mật as the plate arrives). Serve with the hạt dổi dipping salt, rice or sticky rice, rau răm, and cucumber. In Cao Bằng restaurants, the duck is presented whole at the table before carving — the intact lacquered bird is the presentation, and the tableside carving is the performance.`,
        },
        {
            title: `The hạt dổi dipping salt`,
            description: `Combine toasted crushed hạt dổi, salt, sugar, lime juice, and minced chili. Stir until dissolved. The numbing-resinous-pepper note of the hạt dổi against the sweet lacquered duck skin and the mắc mật-perfumed flesh produces the Cao Bằng flavour signature: three distinct resinous-aromatic elements (mắc mật in the flesh, hạt dổi in the dipping salt, five-spice in the glaze) in a single bite. This layered resinous complexity is what makes vịt quay mắc mật unlike any other Vietnamese roast duck preparation.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}