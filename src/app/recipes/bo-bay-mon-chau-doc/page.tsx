'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-bay-mon-chau-doc',
    title: `Châu Đốc Seven-Course Beef`,
    subtitle: `Bò Bảy Món Châu Đốc — An Giang's feast of seven beef preparations anchored by bò nhúng giấm with mẻ souring liquid and lemongrass broth.`,
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 6,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bò bảy món — seven-course beef — is one of the most elaborate communal meals in southern Vietnamese cooking, a feast format in which every dish is built from a single cow and each preparation showcases a different technique: raw, grilled, steamed, braised, fried, stuffed, and simmered. The Châu Đốc version is distinguished from the more widely known Bình Dương and Hồ Chí Minh City versions by the souring agent used in the central hot pot dish: instead of vinegar or tamarind, Châu Đốc uses mẻ — fermented rice paste — as the primary acid, producing a broth with a complex, grain-fermented sourness that is specific to the Mekong Delta fermentation tradition.\n\nMẻ (fermented cooked rice) is one of the oldest souring agents in Vietnamese cooking — cooked rice left to ferment at room temperature for 3-5 days until it develops a clean, yeasty sourness that is simultaneously more complex and more gentle than vinegar. In Châu Đốc, mẻ is dissolved into the beef broth for bò nhúng mẻ — the hotpot course that anchors the seven-preparation feast — giving the dipping broth a character found nowhere else in the bò bảy món tradition.\n\nThis recipe documents the complete seven-course structure with focus on the Châu Đốc mẻ-soured hotpot, alongside shorter preparations for the remaining six courses. It is a feast for a minimum of six people and requires a full day of preparation. In An Giang, bò bảy món is served at weddings, important anniversaries, and major family celebrations — never as a casual meal.`,
    ingredientSections: [
        {
            title: `The beef (for all seven courses)`,
            items: [
                { amount: 300, unit: 'g', name: `beef sirloin (bo phi le)`, note: `sliced thin — for nhúng mẻ (hotpot) and tái chanh (lime-cured)` },
                { amount: 300, unit: 'g', name: `beef chuck or brisket (bo bap)`, note: `for bò kho (braised) and bò hầm sả (lemongrass braise)` },
                { amount: 200, unit: 'g', name: `beef mince (bo xay)`, note: `for bò nướng mỡ chài (grilled in caul fat)` },
                { amount: 200, unit: 'g', name: `beef tendon (gan bo)`, note: `for bò cuốn lá lốt (stuffed leaf rolls)` },
                { amount: 150, unit: 'g', name: `beef liver (gan bo)`, note: `for bò xào lăn (stir-fried with five spice)` },
            ],
        },
        {
            title: `Mẻ hotpot broth (Course 1 — bò nhúng mẻ)`,
            items: [
                { amount: 150, unit: 'g', name: `me (fermented rice paste)`, note: `3-5 day room temperature ferment from cooked rice; or buy from Vietnamese grocer` },
                { amount: 800, unit: 'ml', name: `beef bone broth` },
                { amount: 3, name: `lemongrass stalks, bruised` },
                { amount: 3, name: `shallots, charred` },
                { amount: 20, unit: 'g', name: `rock sugar` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `annatto oil`, note: `for colour` },
            ],
        },
        {
            title: `Lime-cured beef (Course 2 — bò tái chanh)`,
            items: [
                { amount: 150, unit: 'g', name: `beef sirloin, sliced paper thin` },
                { amount: 4, unit: 'tbsp', name: `fresh lime juice` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tbsp', name: `roasted peanuts, crushed` },
                { amount: 1, unit: 'tbsp', name: `fried shallots` },
                { amount: 1, name: `bunch rau ram` },
            ],
        },
        {
            title: `Grilled beef in caul fat (Course 3 — bò nướng mỡ chài)`,
            items: [
                { amount: 200, unit: 'g', name: `beef mince, seasoned with lemongrass garlic fish sauce` },
                { amount: 150, unit: 'g', name: `caul fat (mo chai heo)`, note: `from pork — wraps the beef mince; substitute: thinly sliced pork belly` },
                { amount: 4, name: `lemongrass stalks`, note: `as skewers` },
            ],
        },
        {
            title: `Beef in lá lốt leaves (Course 4 — bò cuốn lá lốt)`,
            items: [
                { amount: 200, unit: 'g', name: `beef mince, mixed with lemongrass and shallot` },
                { amount: 20, name: `la lot leaves (Piper sarmentosum)` },
            ],
        },
        {
            title: `Five-spice stir-fried beef (Course 5 — bò xào lăn)`,
            items: [
                { amount: 200, unit: 'g', name: `beef chuck, cubed 2cm` },
                { amount: 1, unit: 'tsp', name: `five-spice powder (ngu vi huong)` },
                { amount: 1, unit: 'tbsp', name: `lemongrass, minced` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `roasted peanuts, crushed` },
            ],
        },
        {
            title: `Lemongrass-braised beef (Course 6 — bò hầm sả)`,
            items: [
                { amount: 300, unit: 'g', name: `beef brisket, cubed 3cm` },
                { amount: 4, name: `lemongrass stalks, bruised` },
                { amount: 200, unit: 'ml', name: `coconut water` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tbsp', name: `palm sugar` },
            ],
        },
        {
            title: `Beef congee (Course 7 — cháo bò kết)`,
            items: [
                { amount: 150, unit: 'g', name: `jasmine rice` },
                { amount: 1.2, unit: 'L', name: `beef bone broth` },
                { amount: 1, name: `bunch spring onions, sliced` },
                { amount: 2, unit: 'tbsp', name: `fried shallots` },
                { amount: 1, unit: 'tsp', name: `ground black pepper` },
            ],
        },
        {
            title: `Table accompaniments (for all courses)`,
            items: [
                { amount: 20, name: `sheets rice paper (banh trang)` },
                { amount: 1, name: `head butter lettuce` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 1, name: `bunch ngo gai` },
                { amount: 150, unit: 'g', name: `cucumber, sliced` },
                { amount: 150, unit: 'g', name: `green mango or green banana, shredded` },
                { amount: 3, name: `limes, wedged` },
                { amount: 1, name: `bowl nuoc cham (fish sauce dipping)` },
                { amount: 1, name: `bowl tuong den (hoisin sauce for wrapping)` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the mẻ — 3 to 5 days ahead`,
            description: `Cook 100g jasmine rice normally. Cool to room temperature. Place in a clean glass jar, cover loosely with cloth, and leave at room temperature (25-28°C) for 3-5 days. After 3 days, the rice will have softened into a slightly sour, yeasty paste that smells of clean fermentation — faintly sour, gently alcoholic, with no off notes. This is mẻ. If the smell has any ammonia or putrid note, discard and restart. Mẻ is used as a souring agent dissolved into the beef broth — it provides a rounder, more complex sourness than vinegar that is specific to the Mekong Delta kitchen. Store finished mẻ in the refrigerator for up to 1 week.`,
            tip: `Mẻ is one of the most underappreciated fermented ingredients in Vietnamese cooking outside the Mekong Delta. Its sourness is the product of lactic acid bacteria (the same family that produces yogurt) feeding on the cooked rice starch over 3-5 days. The result is a paste with a pH around 3.5-4.0 — similar to yogurt — that adds sourness with a grain-fermented complexity that distilled vinegar cannot replicate. In Germany, mẻ is occasionally available at Vietnamese grocers as "cơm mẻ" in small tubs; it can also be made at home in any warm kitchen.`,
        },
        {
            title: `Build the mẻ hotpot broth (Course 1)`,
            description: `Dissolve mẻ paste in 200ml warm water, pressing with a spoon until smooth. Strain through a fine sieve — discard rice solids. Combine strained mẻ liquid with beef bone broth, charred shallots, bruised lemongrass, rock sugar, fish sauce, and annatto oil in a pot. Bring to a simmer 20 minutes — the mẻ sourness will mellow slightly but remain present as a clean, complex acid note. The broth should be sweet-sour-savoury with a golden colour. Transfer to a hotpot vessel on the table burner. Diners dip thin beef slices into the simmering mẻ broth for 20-30 seconds, then wrap in rice paper with herbs.`,
        },
        {
            title: `Prepare bò tái chanh (Course 2)`,
            description: `Slice sirloin paper-thin. Combine lime juice and salt. Pour over beef and toss — leave 8 minutes only. The lime partially cures the beef surface while leaving the interior still slightly rare. Drain excess lime. Arrange on a plate with crushed peanuts, fried shallots, and rau răm scattered over. Serve immediately — the acid cure continues and beyond 12 minutes the beef becomes too firm. This is the first course served, before the hotpot begins.`,
        },
        {
            title: `Grill bò nướng mỡ chài (Course 3)`,
            description: `Season beef mince with minced lemongrass, garlic, fish sauce, sugar, and pepper. Shape around lemongrass stalks into cylinders. Wrap each cylinder with a thin layer of caul fat — the fat renders during grilling and bastes the beef continuously. Grill over charcoal 8-10 minutes turning regularly until deeply golden and fragrant. The caul fat will have rendered and crisped. Serve hot directly from the grill between courses 1 and 2.`,
        },
        {
            title: `Roll and grill bò cuốn lá lốt (Course 4)`,
            description: `Mix beef mince with minced lemongrass, shallot, fish sauce, and pepper. Place 1 tsp on each lá lốt leaf, roll tightly, secure with a toothpick. Grill or pan-fry over high heat 3-4 minutes per side. The lá lốt chars slightly and perfumes the beef inside. Serve with nuoc cham. This course can be prepared in advance and reheated.`,
        },
        {
            title: `Cook bò xào lăn (Course 5)`,
            description: `Toss beef cubes with five-spice, lemongrass, fish sauce, and sugar. Marinate 20 minutes. Stir-fry over high heat in batches — 3-4 minutes until just cooked through with caramelised exterior. Finish with crushed peanuts. This course is served mid-feast when appetites are still strong and the table needs a dry, aromatic counterpoint to the hotpot broth.`,
        },
        {
            title: `Braise bò hầm sả (Course 6) and cook closing congee (Course 7)`,
            description: `For Course 6: Combine beef brisket, lemongrass, coconut water, fish sauce, and palm sugar in a pot. Braise covered on low heat 60-75 minutes until beef is tender and sauce is thick. For Course 7: While Course 6 braises, cook jasmine rice congee in beef bone broth for 45 minutes until grains bloom and the congee is loose and golden. Season with fish sauce and pepper. The congee is the closing course — served after all seven preparations to settle the feast and use the remaining broth.`,
            tip: `The seven courses of bò bảy món are traditionally served in a specific order that moves from raw to cooked, from light to rich, and closes with the congee that uses the remaining broth. The mẻ hotpot (Course 1) anchors the feast as the communal centre; all other courses are satellites around it. In Châu Đốc, the feast takes 2-3 hours to eat — the congee arriving at the end signals to all guests that the celebration is concluding.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}