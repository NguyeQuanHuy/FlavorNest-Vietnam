'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-cuon-hung-yen',
    title: `Hưng Yên Steamed Rice Roll with Pork Sausage`,
    subtitle: `Bánh Cuốn Chả Hưng Yên — Thin steamed rice rolls served in bone broth with chả quế and nem thính — the Red River Delta's most complete bánh cuốn preparation.`,
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh cuốn chả Hưng Yên is the steamed rice roll preparation of the Red River Delta that differs from the Hà Nội bánh cuốn in one fundamental way: it is served not with plain nuoc cham on the side but in a light, clear bone broth (nước dùng) that is ladled over the rolls in the bowl — making it simultaneously a rice roll dish and a noodle soup, two preparations that exist separately in the Hà Nội tradition but are combined in Hưng Yên's version into a single more sustaining morning bowl.\n\nThe chả in bánh cuốn chả refers to two specific chả preparations that accompany the rolls: chả quế (cinnamon pork sausage — a steamed pork paste seasoned with ground cinnamon that produces a subtly spiced, firm-textured sausage unlike any other Vietnamese chả) and nem thính (pork and roasted rice powder fermented rolls — a lightly fermented preparation with a clean sour note and a distinctive texture from the thính coating). These two chả represent two different preservation and flavour traditions — the chả quế's cinnamon seasoning reflects Chinese medical-culinary influence on northern Vietnamese cooking, while the nem thính's fermentation reflects the indigenous northern technique of using roasted rice as both a preservative coating and a flavour element.\n\nThe bone broth served with Hưng Yên bánh cuốn is made from pork bones simmered with charred shallots and ginger — simpler and lighter than phở broth but more complex than plain water, providing the liquid matrix that carries the rice rolls' silky texture and the chả's flavours into a coherent bowl. The broth is seasoned with fish sauce and a small amount of rock sugar, producing a clean, slightly sweet, savoury liquid that complements rather than competes with the rice rolls' delicate flavour.`,
    ingredientSections: [
        {
            title: `Fermented bánh cuốn batter`,
            items: [
                { amount: 200, unit: 'g', name: `rice flour (bot gao te)`, note: `fine-milled` },
                { amount: 30, unit: 'g', name: `tapioca starch (bot nang)` },
                { amount: 400, unit: 'ml', name: `water`, note: `room temperature` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
                { amount: 0.5, unit: 'tsp', name: `white vinegar`, note: `accelerates souring` },
                { amount: 6, unit: 'hrs', name: `fermentation time`, note: `at room temperature 24-28°C` },
            ],
        },
        {
            title: `Pork and mushroom filling`,
            items: [
                { amount: 200, unit: 'g', name: `pork mince (thit heo xay)` },
                { amount: 40, unit: 'g', name: `dried wood ear mushroom (nam meo kho)`, note: `soaked 20 min, minced fine` },
                { amount: 3, name: `shallots, minced` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Chả quế (cinnamon pork sausage — the Hưng Yên distinction)`,
            items: [
                { amount: 300, unit: 'g', name: `lean pork shoulder (thit heo nac)`, note: `very cold — ground fine` },
                { amount: 1.5, unit: 'tsp', name: `ground cinnamon (bot que)`, note: `the defining spice — Vietnamese cinnamon (Cinnamomum loureiroi) preferred` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tsp', name: `baking powder`, note: `bounce and lightness` },
                { amount: 2, unit: 'tbsp', name: `tapioca starch (bot nang)` },
                { amount: 1, name: `banana leaf`, note: `for wrapping before steaming` },
            ],
        },
        {
            title: `Nem thính (roasted rice pork rolls)`,
            items: [
                { amount: 200, unit: 'g', name: `pork shoulder (thit heo)`, note: `boiled until cooked, shredded finely` },
                { amount: 50, unit: 'g', name: `pork skin (bi heo)`, note: `boiled, scraped, julienned fine` },
                { amount: 4, unit: 'tbsp', name: `thinh (roasted rice powder)`, note: `white rice dry-toasted deep golden, ground coarse` },
                { amount: 2, name: `shallots, minced and briefly fried` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 8, name: `la lot leaves (Piper sarmentosum)`, note: `for wrapping — 1-2 per nem` },
            ],
        },
        {
            title: `Clear pork bone broth`,
            items: [
                { amount: 400, unit: 'g', name: `pork bones (xuong heo)`, note: `blanched and rinsed` },
                { amount: 1.2, unit: 'L', name: `cold water` },
                { amount: 3, name: `shallots, halved and charred` },
                { amount: 2, name: `slices fresh ginger, charred` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 15, unit: 'g', name: `rock sugar (duong phen)` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 3, name: `spring onions, sliced` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Make chả quế — the cinnamon sausage`,
            description: `Keep pork absolutely cold — partially freeze 20 minutes. Process in a food processor 3-4 minutes until fine paste. Add cinnamon, fish sauce, sugar, pepper, baking powder, and tapioca starch. Process 2 more minutes until the paste is smooth, slightly elastic, and the cinnamon is fully incorporated throughout — the paste should smell clearly of cinnamon. Wrap tightly in banana leaf into a cylinder 15cm long and 5cm diameter. Steam 35-40 minutes until cooked through. Cool completely before slicing. The finished chả quế should be firm, slightly bouncy, pale gold, and smell unmistakably of Vietnamese cinnamon with a clean savoury pork background.`,
            tip: `Vietnamese cinnamon (Cinnamomum loureiroi — also called Saigon cinnamon) is significantly more potent than the Ceylon cinnamon (Cinnamomum verum) available in German supermarkets — it contains 2-4x more cinnamaldehyde, the primary aromatic compound, producing a more intense, slightly spicier character. If using German supermarket cinnamon (typically Ceylon or Cassia), increase the quantity to 2 tsp to approximate the flavour impact of 1.5 tsp Vietnamese cinnamon. Vietnamese cinnamon is available at Asian spice shops in Germany and online — it is sold as "Saigon Zimt" or "Vietnamesischer Zimt."`,
        },
        {
            title: `Make nem thính — the roasted rice pork rolls`,
            description: `Combine shredded boiled pork, julienned boiled skin, fried shallots, fish sauce, pepper, and sugar. Toss thoroughly. Add the thính (roasted rice powder) and toss again — every piece of pork and skin should be coated in the pale golden powder. The thính absorbs residual moisture from the pork and skin, binding the mixture and adding a nutty, toasted-grain flavour. Taste — the nem thính should be savoury with a clear toasted-rice nuttiness and the slight bitterness of the roasted rice distinguishable from the pork's sweetness. Roll small portions (approximately 30g) tightly in lá lốt leaves — the wild betel leaf's warm, slightly camphor-spiced aroma is specifically calibrated for nem thính.`,
            tip: `The thính in nem thính is toasted significantly darker than the thính used in bì for bánh cuốn — the rice is taken to a deep golden-brown rather than light gold, producing more Maillard reaction products (pyrazines and furanones) that give the thính a toasted, slightly bitter, nutty character more complex than lightly toasted rice powder. This darker thính is the characteristic flavour of nem thính that distinguishes it from bì — the same ingredient at different toasting levels produces distinctly different flavour contributions.`,
        },
        {
            title: `Make the clear bone broth`,
            description: `Blanch pork bones 5 minutes, rinse. Combine with charred shallots, charred ginger, and 1.2L cold water. Bring to a boil, skim foam 10 minutes. Reduce to lowest simmer 45 minutes. Season with fish sauce, rock sugar, and salt. The broth must be completely clear — cloudy broth indicates insufficient skimming or too-vigorous boiling. The Hưng Yên bone broth for bánh cuốn is lighter and more delicate than phở broth — it should be a supporting liquid for the rice rolls, not a dominant flavour.`,
        },
        {
            title: `Ferment and steam the bánh cuốn`,
            description: `Ferment the batter 6 hours at room temperature. Stretch muslin tightly over a pot of boiling water. Brush lightly with oil. Pour 50ml of fermented batter onto the cloth in a smooth circle. Cover with dome lid exactly 45-50 seconds. Peel the translucent sheet from the cloth in one motion. Place 1.5 tablespoons of cooled filling across the lower third. Roll tightly into a 3cm diameter cylinder. The fermented batter gives Hưng Yên bánh cuốn its characteristic slight sourness — the same lactic acid fermentation that defines Hà Nội bánh cuốn but used in this bowl preparation where the broth carries the sourness further through the eating experience.`,
        },
        {
            title: `Assemble the Hưng Yên bowl`,
            description: `Place 3-4 bánh cuốn rolls in a deep bowl — the rolls arranged parallel, slightly overlapping. Ladle 150-180ml of hot clear bone broth over the rolls — enough to half-submerge them. The rolls should absorb the broth on their undersides while their surfaces remain exposed. Add 2-3 slices of chả quế alongside the rolls. Place 1 nem thính wrapped in lá lốt in the bowl. Scatter spring onion, fried shallots, and coarse black pepper generously. The three textures in the bowl — the silky bánh cuốn rolls, the firm bouncy chả quế, and the textured lightly fermented nem thính — and the hot clear broth constitute the complete Hưng Yên bánh cuốn experience.`,
            tip: `The broth temperature when ladled over the bánh cuốn is critical — it must be at a full simmer (90-95°C) when added to the bowl. Bánh cuốn rolls cool within 2-3 minutes of leaving the steaming cloth, and the hot broth is what reheats the rolls to the correct serving temperature. The broth also continues softening the rolls slightly in the bowl — bánh cuốn eaten immediately after rolling is slightly firmer than bánh cuốn that has sat in broth for 2 minutes. Both textures are correct; the broth-softened version is the Hưng Yên standard.`,
        },
        {
            title: `Eat the Hưng Yên morning way`,
            description: `Add sliced chili and squeeze lime into the broth. Each spoonful should include a piece of bánh cuốn (lifted from the broth with chopsticks), a slice of chả quế, and a bite of nem thính unwrapped from its lá lốt. The three components eaten together constitute the dish — eating them separately misses the interaction between the sour-silky rice roll, the cinnamon-fragrant firm sausage, and the nutty-fermented rice pork roll. In Hưng Yên's morning markets, bánh cuốn chả is eaten from 5am at stalls where the vendor rolls and fills continuously from the muslin-covered pot, the rhythmic peel-and-roll motion producing a steady stream of rolls for the breakfast crowd. The chả quế and nem thính are made the day before and kept at room temperature at the stall.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}