'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-mi-xiu-mai-da-lat',
    title: `Đà Lạt Meatball Bánh Mì`,
    subtitle: `Bánh Mì Xíu Mại Đà Lạt — Chợ Đà Lạt's signature breakfast: crispy baguette dipped in rich pork meatball and tomato broth.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh mì xíu mại is the breakfast that defines Chợ Đà Lạt morning — a format found nowhere else in Vietnam with the same character. Where Saigon's bánh mì is a sandwich eaten on the move, Đà Lạt's bánh mì xíu mại is a sit-down dipping experience: a short section of crispy French baguette served alongside a deep clay bowl of simmering pork meatballs (xíu mại) in a rich tomato-based broth, eaten by tearing the bread and dipping each piece into the broth to soak up the pork fat and tomato sweetness before eating.\n\nXíu mại — the term comes from Cantonese siu mai (燒賣), though the Đà Lạt version bears little resemblance to the Hong Kong dim sum dumpling — is here a small, dense pork meatball seasoned with wood ear mushroom, water chestnut, garlic, and oyster sauce, simmered directly in a tomato and pork stock broth until the meatballs have released their fat into the surrounding liquid and the broth has thickened to a consistency that clings to bread. The Đà Lạt highland tomatoes — grown in the cool Lâm Đồng climate and notably sweeter and more acidic than lowland varieties — are the ingredient that makes the broth here different from xíu mại preparations in Ho Chi Minh City or Hà Nội.\n\nThe dish entered Đà Lạt's food culture through the Chinese merchant community that settled around the central market in the early twentieth century, and it has been served at the same family-run stalls in and around Chợ Đà Lạt for three or four generations. The cold highland morning air — Đà Lạt's temperature at 6am sits between 10 and 15°C year-round — makes a bowl of hot xíu mại broth with fresh-baked baguette the most sensible breakfast imaginable.`,
    ingredientSections: [
        {
            title: `Pork meatballs (xiu mai)`,
            items: [
                { amount: 400, unit: 'g', name: `pork shoulder (thit heo nac vai)`, note: `minced fine — 20% fat content preferred; ask butcher or mince at home` },
                { amount: 30, unit: 'g', name: `dried wood ear mushroom (nam meo)`, note: `soaked 20 min, drained, minced fine` },
                { amount: 50, unit: 'g', name: `water chestnut (cu nang)`, note: `fresh or canned, minced coarse — adds crunch that persists through simmering` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 2, name: `shallots, minced` },
                { amount: 1.5, unit: 'tbsp', name: `oyster sauce` },
                { amount: 1, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
                { amount: 1, unit: 'tbsp', name: `tapioca starch (bot nang)`, note: `binds and keeps meatballs tender during long simmering` },
                { amount: 1, name: `egg white`, note: `lightens the texture` },
            ],
        },
        {
            title: `Đà Lạt tomato broth (nuoc sot ca chua Da Lat)`,
            items: [
                { amount: 500, unit: 'g', name: `Da Lat tomatoes`, note: `or the ripest, most aromatic tomatoes available — diced` },
                { amount: 300, unit: 'ml', name: `light pork stock`, note: `or water with 1 pork bone simmered 30 min` },
                { amount: 3, name: `shallots, minced` },
                { amount: 4, name: `garlic cloves, minced` },
                { amount: 1.5, unit: 'tbsp', name: `tomato paste (cot ca chua)`, note: `intensifies colour and body` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tbsp', name: `oyster sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `sections of fresh French baguette (banh mi)`, note: `15-20cm each — warm in oven 5 min at 180C before serving` },
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 2, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, name: `bunch coriander (ngo)`, note: `roughly chopped` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `fresh red chili, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Mix and rest the meatball paste`,
            description: `Combine minced pork, minced wood ear mushroom, minced water chestnut, garlic, shallots, oyster sauce, fish sauce, sugar, black pepper, sesame oil, tapioca starch, and egg white in a large bowl. Mix by throwing the paste against the inside of the bowl repeatedly — lift a handful and throw it down firmly, repeating for 3-4 minutes. This develops the protein network and produces a meatball that holds together during long simmering rather than falling apart. The paste should become tacky and elastic, pulling away from the bowl sides cleanly. Cover and refrigerate 30 minutes — the cold firms the fat and makes the paste easier to shape.`,
            tip: `The water chestnut is the textural secret of Đà Lạt xíu mại. Unlike the soft textures of mushroom and pork that meld together during cooking, minced water chestnut retains its crunch through even 20 minutes of simmering — each bite of meatball has a hidden crispness at the centre. Canned water chestnut works as well as fresh for this purpose; drain and rinse thoroughly before mincing.`,
        },
        {
            title: `Shape the meatballs`,
            description: `Wet your hands with cold water. Scoop approximately 25g of chilled paste and roll firmly between palms into a smooth ball about 3cm in diameter. The surface should be perfectly smooth — cracks or rough surfaces cause the meatball to break apart during simmering. Place on a lightly oiled plate as you work. The yield should be approximately 24-28 meatballs. Refrigerate the shaped meatballs while making the broth.`,
        },
        {
            title: `Build the Đà Lạt tomato broth`,
            description: `Heat neutral oil in a wide, heavy-bottomed pot over medium heat. Sauté minced shallots and garlic until golden and fragrant, about 2 minutes. Add tomato paste and stir into the shallot mixture — cook 60 seconds until the paste darkens slightly and smells caramelised. Add diced tomatoes and cook stirring for 5-6 minutes until completely broken down and jammy. Add pork stock, fish sauce, oyster sauce, sugar, and black pepper. Bring to a simmer and taste — the broth should be intensely tomato-forward, savoury, and faintly sweet. The Đà Lạt tomato sweetness should be the dominant note.`,
            tip: `The tomato paste caramelisation step (cooking the paste in the shallot oil before adding liquid) is the technique that gives the Đà Lạt broth its depth. Raw tomato paste tastes tinny and sharp; caramelised tomato paste tastes rich and almost meaty. Do not skip this 60-second step — it is the difference between a flat broth and a complex one.`,
        },
        {
            title: `Simmer the meatballs in the broth`,
            description: `Gently lower chilled meatballs into the simmering tomato broth one by one — do not drop from height, which causes them to break on impact. The broth should maintain a gentle simmer throughout. Cook uncovered for 15-18 minutes, turning the meatballs gently halfway through. The meatballs are done when they feel firm when pressed with a spoon and float steadily at the surface. The broth will have thickened slightly from the pork fat and collagen released by the meatballs. Taste and adjust seasoning with fish sauce or sugar if needed.`,
            tip: `Never boil the meatball broth vigorously. The turbulence of a rolling boil breaks the meatballs apart before the protein network has fully set. Maintain the barest simmer — barely moving at the surface, with occasional small bubbles. After 15 minutes at this temperature, the meatballs are fully cooked and structurally sound enough to withstand gentle stirring.`,
        },
        {
            title: `Warm the baguette`,
            description: `Cut baguette into 15-20cm sections. Place in a preheated oven at 180°C for 5 minutes until the crust is hot and re-crisped. The crust must be properly crispy for the dipping technique to work — a soft baguette absorbs the broth immediately and disintegrates. A properly crisped crust holds its structure through 3-4 dips before softening to the correct eating texture. In Đà Lạt market stalls, the bread is sourced from bakeries that supply fresh baguettes every 2 hours from 5am onward — the freshness of the bread at highland temperatures (which keep it crispy longer than lowland heat) is part of the dish's appeal.`,
        },
        {
            title: `Serve in clay bowls`,
            description: `Ladle 6-7 meatballs and generous broth into individual deep clay bowls or ceramic soup bowls. The broth should come up around the meatballs, not cover them — the tops of the meatballs should be visible above the surface. Scatter spring onion, fried shallots, roughly chopped coriander, and coarse black pepper over the top. Drizzle a small amount of the reddest broth from the base of the pot over the surface for colour. Serve immediately with the warmed baguette section alongside, lime wedges, and fresh chili. The bowl and bread arrive together; they are not sequential courses.`,
            tip: `The clay bowl is functional in Đà Lạt, not decorative — clay retains heat longer than ceramic or steel at cool highland temperatures. At 10-15°C ambient air temperature, a clay bowl keeps the xíu mại broth at eating temperature for 15 minutes; a metal bowl for 5. In Germany in winter, preheat the serving bowls in the oven at 100°C for 5 minutes before ladling — it replicates the highland clay bowl insulation effect.`,
        },
        {
            title: `The dipping technique`,
            description: `Tear a piece of baguette — do not slice. Torn bread has a rougher surface that absorbs broth more efficiently than a clean-cut surface. Hold the torn piece and submerge the soft inner face in the hot broth for 3-4 seconds. The crust remains above the broth, the crumb absorbs a full charge of tomato-pork liquid. Eat in one or two bites, then tear the next piece. Eat a meatball between bread dips — scoop it whole from the broth. Squeeze lime into the bowl halfway through eating when the first brightness of the tomato has faded into richness.`,
            tip: `The bread-dipping sequence in Đà Lạt bánh mì xíu mại is: dip the soft face, not the crust. The crust is the handle — if the crust gets wet it becomes structurally compromised and the bread falls apart in the hand. Hold the piece with crust upward, immerse the torn bottom face for 3-4 seconds maximum. Each piece should be eaten immediately after dipping, not left to soak.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}