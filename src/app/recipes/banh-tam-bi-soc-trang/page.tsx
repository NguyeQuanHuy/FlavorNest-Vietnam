'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-tam-bi-soc-trang',
  title: `Bánh Tằm Bì Sóc Trăng (Silkworm Noodles with Coconut Cream and Shredded Pork Skin)`,
  subtitle: `Bánh tằm — thick, round, hand-rolled rice noodles that look like silkworms (tằm = silkworm) — topped with bì (shredded pork skin tossed in toasted rice powder), drowned in nước cốt dừa (warm coconut cream), and finished with a ladleful of sweet-savoury kho quẹt gravy. The Sóc Trăng breakfast that is simultaneously a noodle dish, a coconut dessert, and a pork-skin salad, and that tastes like all three at once.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/banh-tam-bi-soc-trang.jpg',
  intro: `Bánh tằm bì is a dish that confuses every first-timer's palate: is it savoury (the pork skin, the fish sauce)? Is it sweet (the coconut cream, the sugar)? Is it a noodle soup (the noodles are drowned in liquid)? Is it a dry noodle (the "liquid" is coconut cream, not broth)? The answer is: YES, to all, simultaneously, and the simultaneous-ness is the dish's character and its challenge to every categorisation system the Vietnamese kitchen offers.

The NOODLE — bánh tằm — is the dish's visual identity: a thick (5-7 mm diameter), round, hand-rolled rice noodle that is softer, chewier and more irregularly shaped than any machine-cut noodle in the collection. The name "silkworm" comes from the noodle's appearance: each strand is roughly the size, shape and pale-white colour of a silkworm (tằm — Bombyx mori, the silk-producing caterpillar that the Mekong Delta's sericultural past raised on mulberry leaves), and a plate of bánh tằm, piled loosely, looks like a nest of sleeping silkworms — an image that is endearing to the Vietnamese eye and slightly disturbing to the entomophobic Western one.

The noodle's thickness is its TEXTURAL SIGNATURE: where phở is thin (2-3 mm wide, dissolving-soft), bún is medium (1-2 mm round, bouncy), and hủ tiếu is flat-and-chewy (3-5 mm wide, retrograded-firm), the bánh tằm is THICK-AND-YIELDING — each strand requires 3-4 chews before it breaks apart, and the chewing releases the noodle's starch in a slow, progressive, mouth-coating pulse that the thinner noodles' faster dissolution cannot replicate. The thick noodle is a STARCH-DELIVERY VEHICLE — it holds more starch per strand, releases it more slowly, and coats the tongue more thoroughly, and the coating is the surface the coconut cream adheres to.

The BÌ — shredded pork skin — is the dish's PROTEIN COMPONENT, and it is one of the Vietnamese kitchen's most ingenious uses of a by-product: the pork skin (which many Western kitchens discard) is boiled until tender, chilled, sliced into hair-thin julienne, and tossed with THÍNH (the same toasted rice powder the nem chợ Huyện and the tré used as fermentation fuel — here used as a DRY COATING that absorbs the skin's surface moisture and coats each strand in a nutty, grain-toasted, golden powder). The bì is: CHEWY (the skin's collagen, partially converted to gelatin by the boiling but still retaining enough cross-linked structure to resist the tooth), NUTTY (the thính's Maillard products coating every strand), and visually GOLDEN-WHITE (the pale skin + the golden thính = a two-tone tangle that sits atop the white noodles).

The NƯỚC CỐT DỪA — coconut cream — is the dish's most POLARISING element: it is poured WARM over the noodles and the bì, pooling in the bowl like a savoury-sweet, white, thick, fat-rich sauce that is: coconut-fragrant (the lauric acid's tropical-lipid aroma), faintly sweet (a tablespoon of sugar dissolved in the cream), faintly salty (a pinch of salt + a splash of fish sauce — the savoury anchor that prevents the coconut from tipping into dessert territory), and THICK (the first pressing of the coconut — nước cốt, the cream, 20-25% fat — not the thin second pressing, nước dừa, which is watery and would make the bowl too liquid).

The KHO QUẸT — the caramelised pork-and-fish-sauce gravy — is the dish's SAVOURY ANCHOR: coconut water or water simmered with fish sauce and sugar until reduced to a thick, dark, salty-sweet, caramel-edged sauce that is ladled alongside (or over) the coconut cream. The kho quẹt is the dish's GRAVITY — it pulls the bowl from the sweet-coconut-dessert register back toward the savoury-noodle register, and its dark-brown stripe across the white coconut cream is the bowl's visual tension: sweet-white vs savoury-brown, coconut vs caramel, the two sauces meeting in the middle of the bowl and mixing only when the eater's chopsticks stir them together.`,
  ingredientSections: [
    {
      title: 'Bánh tằm (silkworm noodles)',
      items: [
        { amount: 400, unit: 'g', name: 'rice flour' },
        { amount: 50, unit: 'g', name: 'tapioca starch', note: `For chewiness — the tapioca's amylopectin network gives the thick noodle a springy, slightly gummy chew that pure rice flour's more brittle starch does not provide.` },
        { amount: 280, unit: 'ml', name: 'boiling water' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (prevents sticking)' },
      ],
    },
    {
      title: 'Bì (shredded pork skin with toasted rice powder)',
      items: [
        { amount: 300, unit: 'g', name: 'pork skin, boiled 30-40 min until tender, chilled, julienned hair-thin', note: `The julienne must be VERY thin (1-2 mm wide, 5-6 cm long) — thick-cut skin is rubbery and unpleasant. The thin julienne's high surface-area-to-volume ratio allows the thính to coat EVERY strand, producing a uniformly golden, nutty exterior on a chewy collagen interior.` },
        { amount: 3, unit: 'tbsp', name: 'thính (toasted rice powder)', note: `Same golden, Maillard-flavoured powder the nem chua and the tré used. Here it is a COATING, not a fermentation fuel — the thính absorbs the skin's moisture and replaces it with a dry, crunchy, grain-toasted texture.` },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
      ],
    },
    {
      title: 'Nước cốt dừa (coconut cream sauce)',
      items: [
        { amount: 400, unit: 'ml', name: 'coconut cream (nước cốt dừa, first pressing, thick)', note: `THICK cream — 20-25% fat. Shake the can, use the thick top layer. The thin second pressing (nước dừa) makes the dish watery. The cream's fat IS the sauce's body: it coats the noodles, suspends the bì's thính particles, and carries the fat-soluble aroma compounds (the lauric acid derivatives that make coconut smell like coconut) to the nose.` },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tsp', name: 'rice flour or cornstarch, dissolved in 1 tbsp water', note: `A tiny amount of starch thickens the cream from pourable to CLINGING — the starch gelatinises in the warm cream and increases its viscosity just enough to coat the noodles rather than pooling at the bowl's bottom.` },
      ],
    },
    {
      title: 'Kho quẹt (caramelised fish-sauce gravy)',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 100, unit: 'ml', name: 'coconut water or water' },
        { amount: 1, name: 'shallot, sliced thin' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
      ],
    },
    {
      title: 'Toppings and garnishes',
      items: [
        { amount: 100, unit: 'g', name: 'chả lụa, sliced thin (optional — adds the myosin-bounce)' },
        { amount: 100, unit: 'g', name: 'thịt nướng (grilled pork), sliced thin (optional — the charred protein)' },
        { amount: 100, unit: 'g', name: 'bean sprouts, blanched' },
        { amount: 30, unit: 'g', name: 'rau răm, torn' },
        { amount: 30, unit: 'g', name: 'húng quế' },
        { amount: 2, unit: 'tbsp', name: 'hành phi (fried shallots)' },
        { amount: 2, name: 'limes, in wedges' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 2, unit: 'tbsp', name: 'tương ớt (chili sauce)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the bánh tằm by hand — thick, irregular, each one a silkworm',
      description: `Pour the boiling water into the rice flour + tapioca starch + salt. Stir with chopsticks (the boiling water is too hot for hands) — the starch gelatinises on contact, producing a shaggy, half-cooked dough. When cool enough to touch (2-3 minutes): knead 5-8 minutes until smooth, elastic and non-sticky. Add the oil during kneading to prevent sticking.

THE HAND-ROLLING: pinch a walnut-sized piece of dough (roughly 15 g). Roll between your palms into a cylinder — 5-7 mm diameter, 12-15 cm long, tapered slightly at both ends (the "silkworm" shape). The strand should be: THICK (thicker than any other noodle in the collection — 3-5x the diameter of a bún strand), ROUND (not flat — the roundness is the silkworm's body shape), and IRREGULAR (the hand-rolling produces slight variations in thickness along the strand — the irregularity IS the character, and a machine-extruded, perfectly uniform strand is NOT a bánh tằm).

Lay each rolled strand on an oiled tray. Continue until all dough is rolled — roughly 30-40 strands.

BOIL: drop the strands into a large pot of boiling water. Cook 4-5 minutes — the thick noodles need longer than thin noodles (the heat must penetrate to the 2.5-3.5 mm centre, and the starch must gelatinise throughout — an under-cooked bánh tằm has a raw, white, chalky core that the tooth detects immediately). The noodles float when done (the gelatinised starch is less dense than the raw starch, and the density drop causes flotation — the same float-signal the Italian pasta cook uses for gnocchi).

Drain. Toss with a splash of oil to prevent sticking. The cooked noodles are: white, translucent, round, thick, and — when one is picked up with chopsticks — HEAVY (the thick strand's mass is 5-10x a bún strand's) and DROOPING (the cooked starch is soft and yielding, and the noodle's weight causes it to drape like a heavy silk cord, not a stiff wire).`,
      tip: `The bánh tằm's THICKNESS (5-7 mm) creates a STARCH-DISSOLUTION TIMELINE that is the longest of any noodle in the collection: the saliva's amylase, working from the strand's outer surface inward, takes roughly 8-12 seconds to dissolve a 5-7 mm strand (vs 3-4 seconds for the bánh hỏi's 0.3-0.5 mm threads, vs 6-8 seconds for the bún's 1-2 mm strands, vs 10-15 seconds for the phở's 2-3 mm flat ribbons). The slow dissolution means the mouth holds a STARCH-COATED TONGUE for longer per chew-cycle, and the prolonged coating is the surface the coconut cream ADHERES to — the cream's fat bonds to the starch's hydrated amylose (fat + starch = a hydrophobic-hydrophilic complex that is more stable on the tongue's surface than either fat-alone or starch-alone). The thick noodle is the coconut cream's ADHESION PLATFORM, and the platform's size determines how much cream the tongue receives per bite.`,
    },
    {
      title: 'Prepare the bì, the coconut cream and the kho quẹt — three sauces, three registers',
      description: `BÌ: toss the julienned, chilled pork skin with the thính, fish sauce, sugar and pepper. Every strand should be: coated in golden thính powder (dry, nutty, grain-toasted), carrying a trace of fish-sauce salt and a trace of sweetness. The bì is: visually golden-white, texturally chewy-crunchy (the collagen + the thính crust), and aromatically nutty-savoury (the thính's pyrazines + the fish sauce's glutamate).

COCONUT CREAM SAUCE: heat the coconut cream in a small pot over low heat. Add sugar, salt and the dissolved starch. Stir 3-4 minutes — the starch thickens the cream from liquid to a pourable-but-COATING consistency (roughly the viscosity of heavy cream, not of water — the difference between pooling at the bowl's bottom and clinging to the noodles' surface). The warm cream should taste: COCONUT (the lauric acid's tropical fat, the principal flavour), faintly SWEET (the sugar, subordinate to the coconut), and faintly SALTY (the salt and a splash of fish sauce, the savoury whisper that keeps this from being dessert). Keep warm.

KHO QUẸT: in a small pan, dissolve the sugar in the coconut water over medium heat. Add the sliced shallot — sauté 2 minutes until golden. Add the fish sauce. Simmer 5-8 minutes — the sugar and the fish sauce reduce together, the water evaporates, and the sauce concentrates into a THICK, DARK, GLOSSY, SALTY-SWEET GRAVY. The kho quẹt should be: dark brown (the Maillard between the fish sauce's amino acids and the sugar's sucrose, the same darkening the cá kho tộ's caramel-fish-sauce produced), thick enough to coat the back of a spoon (the concentration has reduced the volume by 50%), and tasting: SALTY-SWEET-CARAMELISED (the fish sauce's glutamate + the sugar's caramelisation + the shallot's sweet-allium). The kho quẹt is the bowl's SAVOURY ANCHOR — the dark counterweight to the white coconut cream's sweetness.`,
      tip: `The three sauces — bì (solid, dry, nutty-savoury), coconut cream (liquid, fat-rich, sweet-savoury), kho quẹt (thick, dark, salty-sweet-caramelised) — occupy three different PHASE STATES and three different FLAVOUR REGISTERS, and the bowl's architecture requires all three to be present simultaneously for the eating to work. Remove the bì: the bowl is too sweet (no protein, no savoury-dry counterpoint). Remove the coconut cream: the bowl is too dry (no fat, no coating, no tropical fragrance). Remove the kho quẹt: the bowl is too sweet-and-bland (no dark caramel, no fish-sauce anchor, no savoury gravity). The three are a TRIPOD — remove any leg and the structure falls.`,
    },
    {
      title: 'Assemble — white noodles, golden bì, white cream, dark gravy, the three-stripe bowl',
      description: `Set the warm bánh tằm in a bowl or on a plate — a loose, drooping, heavy-stranded nest of white noodles.

TOP with the bì — a generous handful of the golden, thính-coated, julienned pork skin, piled on one side of the noodle nest. Add chả lụa slices and/or thịt nướng slices if using.

POUR the warm coconut cream over the noodles — 3-4 tablespoons, enough to pool in the bowl's base and coat the noodles' surface. The white cream floods the white noodles and the golden bì — the bowl is now WHITE-ON-WHITE-ON-GOLDEN, and the coconut's tropical aroma rises from the warm surface.

DRIZZLE the kho quẹt — 1-2 tablespoons, in a dark-brown stripe across the white coconut cream. The visual: a DARK LINE across a WHITE FIELD — the bowl's most striking image, the contrast between the sweet-white and the savoury-dark, unblended until the eater's chopsticks draw through them.

Scatter hành phi, add bean sprouts, herbs. Set lime, chili and tương ớt on the side.

THE FIRST BITE: the chopsticks lift a thick bánh tằm strand — it drapes, heavy with adhering coconut cream, trailing a thin thread of kho quẹt, with a piece of bì tangled around it. The mouthful enters and the palate receives: FIVE simultaneous registers — the noodle's starch (thick, chewy, slow-dissolving, coating the tongue in a neutral, bland base), the coconut cream's fat (warm, sweet, tropical, coating the starch in a second, richer layer), the bì's collagen-chew (nutty-crunchy from the thính, firm from the collagen, providing the TEXTURE the soft noodle and the liquid cream both lack), the kho quẹt's caramel-salt (dark, salty-sweet, fish-sauce-deep, arriving 2 seconds after the coconut's sweetness and ANCHORING it), and the herbs' freshness (rau răm's pepper, húng quế's anise, resetting the palate for the next bite).

The five registers do not BLEND — they LAYER, each one arriving at a different second, each one activating a different receptor set, and the SEQUENCE (starch → fat → chew → caramel → fresh) IS the dish's architecture. The dish is not a flavour. It is a SEQUENCE of flavours, and the sequence is 5 seconds long, and every bite replays the sequence, and the replay is the rhythm, and the rhythm is the reason the Sóc Trăng morning starts with this bowl and does not look back.

Squeeze lime at the halfway point — the citric acid brightens the coconut cream's heavy richness and the kho quẹt's dense salt into a lighter, more citrus-forward register, the same acid-lift every rich dish in the collection's southern section receives.

Bánh tằm bì is the collection's most GENRE-DEFYING dish — it is not a noodle soup (there is no broth), not a dry noodle (the coconut cream is liquid), not a salad (the bì is warm, not cold), not a dessert (the fish sauce says otherwise), and not a main course in the northern sense (the north would not recognise coconut cream on noodles as lunch). It occupies a SOUTHERN-ONLY category — the "sweet-savoury, coconut-on-starch, eaten-at-7-AM" category that exists in Sóc Trăng, Bạc Liêu, Cần Thơ and nowhere north of Saigon, and that is, to the southern palate, as natural as phở is to the northern one and as inexplicable to the northern one as phở-without-hoisin is to the southern.`,
      tip: `The bánh tằm's hand-rolling — each strand individually shaped between the palms — makes it the collection's most LABOUR-INTENSIVE noodle per strand: 30-40 strands for 4 servings, each one rolled in 10-15 seconds = 5-10 minutes of repetitive hand-work. The labour is the reason machine-made bánh tằm now dominates the Sóc Trăng market (a noodle press produces 100 strands per minute), but the hand-rolled version survives in the premium stalls because the irregularity — the slight variations in thickness, the tapered ends, the occasional finger-dent on the surface — produces a noodle that interacts with the coconut cream DIFFERENTLY at every point along its length: the thick sections hold more cream, the thin sections hold less, and the eating-experience varies from bite to bite rather than presenting the monotonous uniformity the machine-pressed strand delivers. The hand-rolled noodle is HETEROGENEOUS, and the heterogeneity is the texture's interest, and the interest is the premium the artisanal stall charges. Imperfection, in this format, is the point.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
