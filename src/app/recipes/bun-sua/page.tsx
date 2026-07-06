'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-sua',
    title: `Jellyfish Noodle Soup`,
    subtitle: `Bún Sứa — Nha Trang's coastal noodle soup with cured jellyfish, clear pork and shrimp broth, and a mandatory plate of raw herbs.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs 30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bún sứa is Nha Trang's most distinctly coastal noodle soup — a dish built around cured jellyfish (sứa), which appears nowhere else in Vietnamese noodle culture with such prominence. Nha Trang sits on one of the most productive jellyfish fishing grounds in Southeast Asia; the fishing boats bring in moon jellyfish (Aurelia aurita) and rhizostome jellyfish by the basket, and the curing yards along the coast process them overnight in layers of salt and alum before they reach the morning market.\n\nThe broth is deceptively simple: pork bones and dried shrimp simmered until clear, seasoned with fish sauce and a small amount of rock sugar for the southern sweetness that marks Khánh Hòa province cooking. What makes it different from every other clear broth noodle soup in Vietnam is the jellyfish — cured, rinsed, and served cold alongside the hot soup, providing a texture that has no equivalent in any other cuisine. Properly cured jellyfish is firm, faintly crunchy, slightly slippery, and almost entirely flavourless on its own. It absorbs the broth, the dipping sauce, and the lime squeezed over it. The texture is the point.\n\nBún sứa is eaten at breakfast in Nha Trang, at small shops along Nguyễn Thiện Thuật street that open at 5am and close when the jellyfish runs out — usually by 9am. Outside Khánh Hòa province it is almost unknown. Outside Vietnam it is entirely undocumented in English food writing.`,
    ingredientSections: [
        {
            title: `Cured jellyfish (sứa muối)`,
            items: [
                { amount: 400, unit: 'g', name: `cured jellyfish (sứa muối)`, note: `sold vacuum-packed or in brine at Vietnamese/Asian grocers — rinse thoroughly before use` },
                { amount: 2, unit: 'L', name: `cold water`, note: `for soaking and desalting — change water 3 times over 1 hour` },
                { amount: 1, unit: 'tbsp', name: `rice vinegar`, note: `added to final soak to firm the texture` },
            ],
        },
        {
            title: `Clear broth (nước lèo)`,
            items: [
                { amount: 800, unit: 'g', name: `pork bones (xương heo)`, note: `blanched and rinsed` },
                { amount: 100, unit: 'g', name: `dried shrimp (tôm khô)`, note: `soaked 15 min` },
                { amount: 2, name: `medium onions, halved and charred` },
                { amount: 20, unit: 'g', name: `rock sugar (đường phèn)` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nước mắm)` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 2.5, unit: 'L', name: `water` },
            ],
        },
        {
            title: `Toppings`,
            items: [
                { amount: 200, unit: 'g', name: `pork shoulder (thịt heo)`, note: `simmered whole 25 min, cooled and sliced thin` },
                { amount: 200, unit: 'g', name: `medium shrimp (tôm)`, note: `poached in broth 2 min, peeled` },
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 2, unit: 'tbsp', name: `fried shallots (hành phi)` },
                { amount: 1, unit: 'tbsp', name: `pork lard or neutral oil` },
            ],
        },
        {
            title: `Noodles`,
            items: [
                { amount: 500, unit: 'g', name: `fresh rice vermicelli (bún tươi)`, note: `or 250g dried, soaked and blanched 30 seconds` },
            ],
        },
        {
            title: `Herb plate and condiments`,
            items: [
                { amount: 150, unit: 'g', name: `bean sprouts (giá đỗ)`, note: `raw` },
                { amount: 1, name: `bunch Vietnamese coriander (rau răm)` },
                { amount: 1, name: `bunch perilla (tía tô)` },
                { amount: 1, name: `bunch mint (húng lủi)` },
                { amount: 1, name: `cucumber, sliced into batons` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili (ớt hiểm), sliced` },
                { amount: 2, unit: 'tbsp', name: `chili sauce or sa tế`, note: `served on the side` },
            ],
        },
    ],
    steps: [
        {
            title: `Desalt and prepare the jellyfish`,
            description: `Cured jellyfish is packed in heavy salt — it must be desalted before eating. Place jellyfish in a large bowl of cold water and soak for 20 minutes. Drain, add fresh cold water, soak again 20 minutes. Drain again and repeat once more with fresh water — three soaks total. On the third soak, add 1 tbsp rice vinegar to the water. The vinegar firms the jellyfish texture and removes any residual metallic taste from the alum curing. After the final soak, drain and taste a small piece — it should be mildly salty, clean, and slightly firm. If still very salty, soak one more time in plain cold water.`,
            tip: `Properly desalted jellyfish has a firm, faintly crunchy texture and is almost transparent. It should not be rubbery (under-soaked and still too salty) or completely soft (over-soaked). The vinegar soak is the step most home recipes skip — do not skip it. It is what gives the jellyfish the slight resistance that makes the texture interesting.`,
        },
        {
            title: `Slice the jellyfish`,
            description: `Cut desalted jellyfish into strips 1 cm wide and 5–6 cm long using a sharp knife. Some pieces will have the bell (softer, more translucent) and some will have the oral arms (denser, more opaque) — both are used. Keep at room temperature while preparing the broth. Jellyfish is served at room temperature or slightly cool, never hot — heat makes it rubbery and unpleasant.`,
        },
        {
            title: `Blanch the bones and build the broth`,
            description: `Boil pork bones in water for 5 minutes, drain, and rinse each bone under cold water until clean. Char onion halves cut-side down directly over a gas flame until deeply blackened on the flat surface, about 4 minutes. In a clean stockpot, combine blanched bones, soaked dried shrimp, charred onions, and 2.5 L cold water. Bring to a boil then immediately reduce to the gentlest possible simmer — barely moving at the surface. Skim foam for the first 15 minutes. Simmer uncovered for 1.5 to 2 hours until broth is pale gold and clear.`,
            tip: `The clarity of the broth is important in bún sứa because the jellyfish is nearly transparent — a murky broth makes the entire bowl look dull. Maintain the lowest possible heat throughout. Never let the broth boil after the initial skim.`,
        },
        {
            title: `Cook the toppings`,
            description: `Poach whole pork shoulder in lightly salted water for 25 minutes. Remove, cool completely, then slice thin across the grain. Poach shrimp directly in the simmering broth for 2 minutes until just pink, remove with a slotted spoon and peel. Strain the finished broth through a fine mesh sieve. Season with rock sugar, fish sauce, and salt — taste for the Khánh Hòa balance: clean, lightly sweet, savoury, with dried shrimp depth underneath.`,
        },
        {
            title: `Blanch the noodles`,
            description: `If using dried bún, soak in cold water 30 minutes until pliable, then blanch in boiling water 30 seconds — drain immediately. If using fresh bún, blanch 10 seconds only. Divide noodles between 4 bowls. Add ½ tsp pork lard or oil to each bowl before ladling broth — it melts invisibly and rounds the flavour.`,
        },
        {
            title: `Assemble and serve`,
            description: `Layer pork slices and shrimp over the noodles. Place a generous portion of jellyfish strips alongside — not submerged in the broth, but resting on top or to the side where they remain at room temperature. Ladle hot broth over the pork and noodles. Finish with spring onion, fried shallots. Serve immediately with the full herb plate alongside. In Nha Trang, the jellyfish is lifted into the broth piece by piece as you eat, never pre-immersed — this controls the temperature and texture of each bite.`,
            tip: `The correct eating sequence in Nha Trang: squeeze lime into the broth first, add chili. Eat a few bites of noodle and pork in broth. Then take a strip of jellyfish, dip briefly in the broth to warm slightly, eat with a leaf of rau răm. The jellyfish should be warm-cool, not hot — it takes about 10 seconds submerged in hot broth to reach the ideal temperature before it begins to toughen.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
