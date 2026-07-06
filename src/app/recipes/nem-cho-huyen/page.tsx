'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nem-cho-huyen',
    title: `Ch? Huy?n Fermented Pork Sausage`,
    subtitle: `Nem Ch? Huy?n — Bình Ð?nh's most prized nem chua, fermented in banana leaf with a ratio of lean pork to pork skin that no other province replicates.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '96 hrs',
    rating: 4.9,
    baseServings: 20,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Ch? Huy?n is a market town in Phù Cát district, Bình Ð?nh province — unremarkable in every respect except one: it produces what many Central Vietnamese consider the finest nem chua in the country. Nem ch? huy?n has been made here for over a century, and the reputation is specific enough that locals from Quy Nhon drive forty minutes to buy it fresh from the market rather than purchasing the Quy Nhon versions sold closer to home.\n\nNem chua is Vietnam's most widely made fermented pork sausage — a mixture of minced lean pork and pounded pork skin, seasoned with fish sauce, garlic, and sugar, wrapped in banana leaf with a layer of fresh chili and garlic pressed against the meat surface, and left to ferment at room temperature until pleasantly sour. What distinguishes nem ch? huy?n is the skin-to-meat ratio (higher skin content than most regions, giving a more gelatinous texture), the inclusion of toasted rice powder as a secondary fermentation medium alongside the natural pork lactobacillus, and the use of fresh fig leaves (lá sung) as the innermost wrapping layer — a Bình Ð?nh-specific detail that adds a faint tannin note to the finished sausage.\n\nNem chua is eaten raw — the fermentation is the cooking. It is one of the few raw pork preparations in Vietnamese cuisine, and the lactic acid environment that develops during curing renders the meat safe and the flavour complex. This recipe documents the ch? huy?n method with the fig leaf layer and toasted rice powder inclusion.`,
    ingredientSections: [
        {
            title: `Pork mixture`,
            items: [
                { amount: 500, unit: 'g', name: `lean pork (th?t n?c heo)`, note: `pork leg preferred — very fresh, chilled but not frozen` },
                { amount: 200, unit: 'g', name: `pork skin (bì heo)`, note: `boiled 15 min, fat scraped completely, cut into thin 3 cm strips — higher ratio than standard nem chua` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nu?c m?m)`, note: `40°N — Phú Qu?c or equivalent` },
                { amount: 1.5, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 1.5, unit: 'tbsp', name: `toasted rice powder (thính g?o)`, note: `dry-toasted until golden, ground coarse — the Bình Ð?nh addition` },
            ],
        },
        {
            title: `Surface seasoning (pressed against meat during wrapping)`,
            items: [
                { amount: 8, name: `garlic cloves, sliced thin` },
                { amount: 4, name: `fresh red chili (?t s?ng), sliced thin` },
                { amount: 1, unit: 'tsp', name: `black pepper, whole` },
            ],
        },
        {
            title: `Wrapping layers (innermost to outermost)`,
            items: [
                { amount: 20, name: `fresh fig leaves (lá sung)`, note: `the Bình Ð?nh distinction — substitute: perilla leaves if fig leaves unavailable` },
                { amount: 40, name: `banana leaf squares, 20 × 20 cm`, note: `2 per roll — passed over flame to make pliable` },
                { amount: 1, name: `roll kitchen twine` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch perilla (tía tô)` },
                { amount: 10, name: `sheets sesame rice cracker (bánh tráng mè)` },
                { amount: 3, name: `garlic cloves, sliced` },
                { amount: 4, name: `bird's eye chili, whole or sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the lean pork`,
            description: `The lean pork must be very cold — chill in the freezer for 20 minutes before processing until it is firm but not frozen. This is critical: warm pork fat smears during pounding and produces a paste rather than the textured mince that nem chua requires. Remove all visible fat, sinew, and connective tissue. Cut into small chunks and pound in a mortar in small batches, or pulse briefly in a food processor until the texture is a coarse, sticky mince — not a smooth paste. Some texture must remain. Transfer to a large bowl and keep refrigerated between batches.`,
            tip: `Traditional nem ch? huy?n makers pound the pork entirely by hand in a stone mortar. The mechanical friction of pounding extracts myosin proteins that bind the mixture together without additives. A food processor achieves a similar result if pulsed short — 10 pulses maximum, not continuous blending. Over-processing produces a sausage texture, not nem chua texture.`,
        },
        {
            title: `Prepare the pork skin`,
            description: `Boil pork skin in unsalted water for 15 minutes. Remove and immediately scrape every trace of fat from the inner surface with a spoon — this must be done while hot, as cold fat adheres firmly. Rinse under cold water and pat completely dry. Cut into strips 3 cm long and 2–3 mm wide. The strips must be thin enough to become translucent in the finished nem but retain some chew. Set aside at room temperature.`,
        },
        {
            title: `Toast the rice powder`,
            description: `Place 3 tbsp raw white rice in a dry pan over medium heat. Stir constantly 8–10 minutes until golden and fragrant — the rice should smell of popcorn and be evenly coloured with no pale grains. Grind in a mortar to a coarse powder. Some texture should remain — it is not rice flour. Set aside to cool completely before adding to the meat mixture.`,
        },
        {
            title: `Season and mix`,
            description: `Combine chilled minced pork with pork skin strips in a large bowl. Add fish sauce, sugar, salt, black pepper, and cooled toasted rice powder. Mix firmly with clean hands for 3–4 minutes until all ingredients are evenly distributed and the mixture becomes tacky — it should hold its shape when pressed. Taste a small pinch: it should be savoury, slightly sweet, with visible black pepper throughout. The sourness develops only during fermentation; the raw mixture should not taste sour.`,
            tip: `Keep the mixture cold throughout. If the pork begins to warm from handling, return to the refrigerator for 10 minutes before continuing. Warm fat in the mixture will separate during fermentation and produce a greasy surface rather than the clean, glossy exterior nem ch? huy?n is known for.`,
        },
        {
            title: `Portion and shape`,
            description: `Divide the mixture into 20 equal portions of approximately 35 g each. Roll each portion between palms into a smooth oval or cylinder about 5 cm long. The surface should be smooth and slightly tacky. Place each shaped portion on a tray lined with cling film. Refrigerate 15 minutes to firm slightly before wrapping.`,
        },
        {
            title: `Wrap — the three-layer method`,
            description: `Pass banana leaf squares over a gas flame for 2 seconds per side until pliable and fragrant. For each nem: lay one fig leaf flat on the work surface (or perilla if substituting). Place a chilled pork portion in the centre. Press 2–3 slices of garlic, 2–3 slices of red chili, and 3–4 whole peppercorns directly against the surface of the meat. Fold the fig leaf snugly around the meat — the garlic and chili are now sealed between meat and leaf. Place this fig-leaf parcel at the edge of a banana leaf square and roll tightly, folding ends under. Wrap a second banana leaf in the opposite direction. Tie with twine at each end. The roll must be completely airtight.`,
            tip: `The fig leaf (lá sung) against the meat surface is the defining detail of nem ch? huy?n that separates it from Quy Nhon nem and Saigon nem chua. The tannins in the leaf contribute a barely perceptible astringency that sharpens the sourness of the finished product. In Germany, fresh fig leaves are available at Middle Eastern or Turkish grocery stores in summer, or from fig trees grown as ornamentals.`,
        },
        {
            title: `Ferment at room temperature — 3 to 4 days`,
            description: `Arrange wrapped nem on a tray at room temperature — 26–30°C ideal. At German room temperature (20–22°C in winter), allow 4 full days. Do not refrigerate during fermentation. After 48 hours the banana leaf will darken and the rolls will feel firmer. At 72 hours unwrap one nem to check: the meat should be visibly lighter in colour (from deep red to pale pink-grey), smell of clean lactic sourness, and taste pleasantly sour with residual sweetness. If sour and firm, fermentation is complete. Refrigerate immediately once the desired sourness is reached.`,
        },
        {
            title: `Eat at room temperature`,
            description: `Remove nem from the refrigerator 20 minutes before serving. Unwrap at the table — peel back the banana leaf, then the fig leaf, to reveal the finished nem with its garlic and chili crust embedded in the surface. Eat whole in one or two bites, or wrap in perilla or rau ram with a piece of broken sesame rice cracker. In Bình Ð?nh, nem ch? huy?n is eaten as a standalone snack with beer, or as part of a cold plate alongside tré and ch? l?a at the start of a meal. A slice of fresh garlic and a sliver of chili eaten with each nem is the local way — the heat of the chili amplifies the sourness.`,
            tip: `Nem ch? huy?n keeps in the refrigerator for 5–7 days after fermentation is complete. The sourness intensifies daily in cold storage. Day 3 to 4 after completion is the flavour peak. Beyond day 7 the acid becomes unpleasant and the texture softens.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
