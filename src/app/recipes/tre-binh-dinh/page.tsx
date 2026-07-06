'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tre-binh-dinh',
    title: `Bình Định Fermented Pork Ear Roll`,
    subtitle: `Tré Bình Định — Spiced pork ear and skin fermented in galangal, toasted rice powder, and garlic, wrapped in banana leaf and cured 3 days.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '96 hrs',
    rating: 4.8,
    baseServings: 8,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Tré is Bình Định's most distinctive preserved meat — a fermented roll made from shredded pork ear, pork skin, and lean pork, spiced with galangal (riềng), toasted rice powder, garlic, and chili, then wrapped tightly in a double layer of banana leaf and left to cure at room temperature for three to four days. The result is something between a salami and a pickle: firm, slightly sour from lactic acid fermentation, intensely aromatic with galangal, and with a texture built from the contrast between the gelatinous skin, the cartilage of the ear, and the lean meat.\n\nTré is Central Vietnamese food in the purest sense — a preservation technique born from the need to use the entire pig, developed in a region with a hot climate that demanded curing rather than refrigeration. Every family in Quy Nhơn and the surrounding districts has its own ratio. The galangal quantity is the variable that divides households: some use enough to make the roll visibly yellow-orange, others use a more restrained hand. This recipe uses the traditional Bình Định ratio — prominent galangal, not overwhelming.\n\nTré is eaten at room temperature as part of a larger meal, sliced through the banana leaf and served with rice crackers (bánh tráng), raw vegetables, and a dipping sauce. It appears on every Tết table in Bình Định and is the defining dish of the province's gio chả (charcuterie) tradition alongside nem chả Bình Định. Outside Vietnam, it is almost entirely undocumented in English.`,
    ingredientSections: [
        {
            title: `Pork components`,
            items: [
                { amount: 300, unit: 'g', name: `pork ear (tai heo)`, note: `cleaned, boiled 20 min until just tender, cooled and shredded thin` },
                { amount: 200, unit: 'g', name: `pork skin (bì heo)`, note: `boiled 15 min, fat scraped off, cut into thin 4 cm strips` },
                { amount: 200, unit: 'g', name: `lean pork (thịt nạc)`, note: `boiled 15 min, cooled and hand-shredded along the grain` },
            ],
        },
        {
            title: `Spice and curing mix`,
            items: [
                { amount: 60, unit: 'g', name: `fresh galangal (riềng tươi)`, note: `peeled and minced to a fine paste — galangal, not ginger; the two are not interchangeable` },
                { amount: 3, unit: 'tbsp', name: `toasted rice powder (thính gạo)`, note: `dry-toast raw rice in a pan until golden, grind coarse — this is the fermentation medium` },
                { amount: 8, name: `garlic cloves, minced to paste` },
                { amount: 2, unit: 'tsp', name: `chili flakes (ớt bột)` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nước mắm)` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
            ],
        },
        {
            title: `Wrapping`,
            items: [
                { amount: 8, name: `banana leaves, cut into 30 × 30 cm squares`, note: `wipe clean with damp cloth; pass briefly over gas flame to make pliable` },
                { amount: 1, name: `roll of kitchen twine` },
            ],
        },
        {
            title: `Dipping sauce and accompaniments`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 8, name: `sheets of rice cracker (bánh tráng mè)`, note: `sesame rice crackers, not the fresh type` },
                { amount: 1, name: `bunch Vietnamese coriander (rau răm)` },
                { amount: 1, name: `head butter lettuce` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the pork components`,
            description: `Boil pork ear in lightly salted water for 20 minutes until the cartilage is tender but still has resistance — it should flex, not snap. Boil pork skin separately for 15 minutes, then immediately scrape the inner fat layer off with a spoon while still warm (cold fat is harder to remove). Boil lean pork 15 minutes until cooked through. Cool all three components completely before proceeding — warm meat holds moisture that prevents proper fermentation and causes rot instead of curing.`,
            tip: `Shred the lean pork by hand along the grain into thin strips 4–5 cm long. Do not chop or mince — tré texture depends on the interplay between long shreds of meat, thin strips of skin, and fine threads of ear cartilage. Uniform thin shredding of all three components is the defining preparation step.`,
        },
        {
            title: `Toast the rice powder`,
            description: `Place 4 tbsp raw white rice (no oil) in a dry pan over medium heat. Stir constantly for 8–10 minutes until every grain is golden and the kitchen smells of popcorn. Grind in a mortar or spice grinder to a coarse powder — not fine flour. Some texture should remain. This toasted rice powder (thính) is the fermentation medium: it provides starch for lactic acid bacteria to consume during curing. It is what makes tré sour rather than rotten.`,
        },
        {
            title: `Mince the galangal and garlic`,
            description: `Peel fresh galangal and mince to a very fine paste using a knife or small food processor. Galangal is tougher than ginger and requires more work — fibrous chunks in the final roll are unpleasant. Mince garlic to a smooth paste separately. Combine galangal paste, garlic paste, chili flakes, black pepper, fish sauce, sugar, and salt in a small bowl and mix thoroughly. This spice paste should smell intensely of galangal — sharp, camphoric, floral.`,
            tip: `If fresh galangal is unavailable in Germany — check Vietnamese or Thai grocery stores, or Asien-Markt chains — use 2 tbsp galangal powder (bột riềng) as a substitute. The flavour will be less vivid but acceptable. Ginger is not a substitute; its flavour profile produces a completely different and incorrect result.`,
        },
        {
            title: `Mix and combine`,
            description: `In a large bowl, combine shredded pork ear, pork skin strips, and shredded lean pork. Add the spice paste and mix thoroughly with clean hands, massaging the paste into every strand. Add toasted rice powder and mix again until evenly distributed — every piece of meat and skin should be coated in the yellow-orange galangal mixture. Taste a small amount: it should be savoury, spiced, and slightly sharp from the garlic. The sourness will develop during fermentation.`,
        },
        {
            title: `Wrap in banana leaf`,
            description: `Pass each banana leaf square briefly over a gas flame — 2–3 seconds per side — until it turns slightly darker and becomes pliable without tearing. Place a portion of the spiced pork mixture (about 120 g) in the centre of one leaf. Shape into a tight cylinder about 6 cm in diameter. Roll the leaf firmly around the filling, folding the ends under. Wrap a second banana leaf around the first in the opposite direction for a double layer. Tie securely with kitchen twine at each end and in the middle — the roll must be airtight for proper anaerobic fermentation.`,
            tip: `The tightness of the wrap is critical. Loose wrapping allows air in, which causes mould rather than lactic fermentation. Press the filling firmly as you roll and tie the twine snugly. Traditional Bình Định tré makers press the rolls under a heavy board for the first hour to compress the filling.`,
        },
        {
            title: `Ferment at room temperature — 3 to 4 days`,
            description: `Place wrapped rolls on a tray or plate at room temperature — ideally 26–30°C. In a warm German summer, 3 days is sufficient. In winter with an indoor temperature of 20–22°C, allow 4 days. Do not refrigerate during fermentation. After 24 hours, the banana leaf will darken and the roll will feel firmer. After 48 hours, a faint sour aroma will be detectable through the leaf. At 72 hours, unwrap one roll to check: the interior should smell sour-spiced, the colour should be deeper, and the texture firm and slightly sticky. If the smell is of clean lactic sourness, the tré is ready. If there is any ammonia or putrid note, discard.`,
        },
        {
            title: `Serve and eat`,
            description: `Slice the roll through the banana leaf with a sharp knife — the leaf holds the shape during cutting. Unwrap individual slices at the table. Arrange slices on a plate alongside rice crackers, butter lettuce, and rau răm. Make the dipping sauce by combining fish sauce, lime juice, sugar, garlic, and chili until sugar dissolves. In Bình Định, tré is eaten by wrapping a slice in lettuce with rau răm and a piece of broken rice cracker, then dipping the entire wrap in the sauce. The cracker provides crunch; the herb cuts the richness of the pork skin; the sauce balances the fermented sourness.`,
            tip: `Tré keeps wrapped in banana leaf in the refrigerator for up to 7 days after fermentation is complete. The sourness continues to deepen in cold storage. Day 4 after fermentation is generally considered the flavour peak — the galangal and fermented sourness are in balance before the acid becomes dominant.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
