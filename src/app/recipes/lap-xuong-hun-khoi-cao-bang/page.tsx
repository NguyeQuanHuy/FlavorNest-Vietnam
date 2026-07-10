'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'lap-xuong-hun-khoi-cao-bang',
    title: `Cao Bằng Smoked Pork Sausage`,
    subtitle: `Lạp Xưởng Hun Khói Cao Bằng — The Tày-Nùng highland smoked sausage seasoned with hạt dổi and mắc khén — darker, drier, and more resinous than any lowland version.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '168 hrs',
    rating: 4.9,
    baseServings: 10,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Lạp xưởng hun khói Cao Bằng is the highland smoked sausage of the Tày and Nùng communities — a preparation that shares the lạp xưởng format (Chinese-influenced cured sausage, 臘腸 là cháng) with lowland Vietnamese cooking but diverges completely in spicing, smoking, and final texture. Where the southern Vietnamese lạp xưởng is sweet, soft, and relatively fatty — seasoned with five-spice and sugar, air-dried rather than smoked — the Cao Bằng version is darker, drier, and built around the highland spice combination of hạt dổi (Michelia tonkinensis seeds) and mắc khén (Zanthoxylum rhetsa berries) that gives it an unmistakably resinous, numbing-citrus character found in no other sausage tradition in Vietnam.\n\nThe Tày-Nùng smoked sausage tradition of the northeastern highlands reflects the same food preservation logic as the Xơ Đăng and Ê Đê gác bếp of the Central Highlands: in mountain communities without reliable salt roads or refrigeration, smoke is preservation. The sausages are hung above the longhouse hearth fire for 5-7 days of continuous smoking, developing a hard, dark exterior and a dense, intensely flavoured interior that keeps at room temperature for months. They are festival food — made before Tết in quantities sufficient for the entire celebration period — and everyday food simultaneously, sliced thin and eaten with sticky rice as the simplest possible meal.\n\nThe fat ratio is critical and specific: 70% lean pork to 30% fat, maintained precisely because leaner sausage dries too hard during the extended smoking while fattier sausage never achieves the firm, sliceable texture that makes the Cao Bằng version structurally distinct from the soft, squeezable lowland lạp xưởng. The pork fat in this ratio renders slowly during smoking, basting the lean meat from within while the smoke compounds penetrate from without — producing a sausage with a gradient of textures from the deeply smoked exterior to the slightly yielding, fat-enriched centre.`,
    ingredientSections: [
        {
            title: `Pork mixture`,
            items: [
                { amount: 700, unit: 'g', name: `lean pork shoulder (thit heo nac vai)`, note: `hand-chopped to 4-5mm pieces — not minced through grinder` },
                { amount: 300, unit: 'g', name: `pork back fat (mo lung heo)`, note: `cut into 3-4mm cubes — kept separate and cold until mixing` },
            ],
        },
        {
            title: `Highland spice seasoning`,
            items: [
                { amount: 1.5, unit: 'tsp', name: `hat doi seeds (Michelia tonkinensis)`, note: `lightly toasted, crushed coarse — the Cao Bằng signature` },
                { amount: 1, unit: 'tsp', name: `mac khen berries (Zanthoxylum rhetsa)`, note: `lightly toasted, crushed — the numbing-citrus element` },
                { amount: 2, unit: 'tbsp', name: `coarse salt (muoi hat)`, note: `non-iodised` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tbsp', name: `Shaoxing rice wine or dry sherry`, note: `preservative and flavour; the Hoa community influence` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 0.5, unit: 'tsp', name: `five-spice powder (ngu vi huong)`, note: `a small amount — Chinese heritage note, restrained` },
                { amount: 4, name: `garlic cloves, minced to paste` },
            ],
        },
        {
            title: `Casings`,
            items: [
                { amount: 2, unit: 'm', name: `natural pork casings (long heo)`, note: `soaked in cold water 30 min, rinsed inside and out — available at German butchers (Metzger) who make fresh sausages` },
            ],
        },
        {
            title: `For smoking`,
            items: [
                { amount: 1, name: `smoker or covered charcoal grill` },
                { amount: 400, unit: 'g', name: `hardwood chunks (oak, hickory or lychee wood)`, note: `lychee wood is the Cao Bằng traditional smoke — gives a faintly fruity note; oak is the closest German substitute` },
                { amount: 1, name: `kitchen twine` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions sticky rice (xoi) or steamed white rice` },
                { amount: 1, unit: 'tsp', name: `hat doi dipping salt (muoi hat doi)` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, name: `cucumber, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Toast and prepare the highland spices`,
            description: `Toast hạt dổi seeds in a dry pan over low heat for 60-90 seconds until fragrant — they burn quickly, so low heat is essential. Toast mắc khén separately for 2 minutes at medium-low. Cool both completely. Crush separately in a mortar to a coarse powder — hạt dổi to fine, mắc khén slightly coarser. The combination of these two highland spices in a single sausage is specific to the Tày-Nùng tradition of Cao Bằng — hạt dổi provides the resinous-camphor base note, mắc khén provides the numbing-citrus top note. Together they produce a spice profile that is entirely of the northeastern highland forest.`,
            tip: `The hạt dổi and mắc khén quantities in this recipe — 1.5 tsp and 1 tsp respectively per kg of meat — are the Cao Bằng proportions. These are larger than the amounts used in grilling or dipping salts because the smoke and the fat in the sausage absorb and dilute the spice compounds during the 5-7 day smoking period. What tastes aggressively spiced in the raw mixture becomes balanced and integrated in the finished sausage.`,
        },
        {
            title: `Mix the pork by hand`,
            description: `Combine hand-chopped lean pork and cold fat cubes in a large bowl. Add all seasoning: crushed hạt dổi, crushed mắc khén, coarse salt, sugar, fish sauce, Shaoxing wine, black pepper, five-spice, and garlic paste. Mix firmly by hand for 5-6 minutes — throwing the mixture against the bowl repeatedly to develop protein binding. The fat cubes should remain as distinct pieces rather than smearing into the lean meat — keep the mixture cold throughout mixing by resting in the refrigerator between batches. Refrigerate the mixed filling 30 minutes before stuffing.`,
            tip: `The hand-chopped texture and the distinct fat cubes are the structural elements that distinguish Cao Bằng lạp xưởng from machine-processed sausage. When sliced after smoking, the finished sausage should show distinct pieces of lean meat separated by visible fat pockets — the fat will have rendered slightly during smoking but remains as identifiable white-cream islands in the darker lean meat matrix. This visual is the quality marker that Tày highland cooks use to assess a correctly made sausage.`,
        },
        {
            title: `Stuff the casings`,
            description: `Feed soaked pork casing onto a sausage funnel or piping tip. Tie a knot at the closed end. Push the chilled pork mixture through the funnel into the casing — fill firmly but not to maximum capacity, leaving 10% room for expansion during smoking. Every 15-18cm, twist the casing in alternating directions to form individual links. Tie each link with kitchen twine. Pierce each sausage 6-8 times with a fine needle or toothpick — these perforations allow the smoke to penetrate and moisture to escape evenly during the smoking period.`,
        },
        {
            title: `Initial air-dry — 24 hours`,
            description: `Hang the sausage links in a cool, well-ventilated location for 24 hours before smoking. This initial air-drying forms a pellicle — a thin, dry surface layer — that helps smoke adhere evenly during the first hours of smoking. Sausage stuffed and smoked immediately without this drying step develops uneven smoke adhesion: darker in some spots, lighter in others. In Cao Bằng, the sausages are hung in the longhouse eaves for the first night before being moved above the hearth fire.`,
        },
        {
            title: `Smoke — 5 to 7 days (home version: 48 to 72 hours)`,
            description: `Traditional Cao Bằng smoking: hang above the longhouse hearth at 40-60°C for 5-7 days of continuous smoke. Home version: set up a smoker or covered charcoal grill at 60-70°C. Add soaked hardwood chunks every 45-60 minutes. Smoke for 8-hour sessions over 6-9 days to approximate the 5-7 day continuous result. After 48 hours, the sausages will be dark amber-brown, firm to the touch, and smell intensely of smoke and hạt dổi. At 72 hours, the exterior is nearly black in places, the interior still slightly yielding — this is the correct home endpoint. For full shelf stability, extend to the equivalent of 5-7 days total active smoking time.`,
            tip: `Lychee wood (vải thiều wood) is the Cao Bằng traditional smoking fuel — the lychee orchards of Lục Ngạn district (Bắc Giang, adjacent to Cao Bằng) produce pruning wood that imparts a faintly sweet-fruity note to the smoke. In Germany, lychee wood is not available commercially but cherry wood (Kirschholz-Chips at German BBQ suppliers) provides a similar fruity-sweet smoke note as the closest available substitute. Oak (Eiche) is the neutral baseline — correct flavour without the fruity dimension.`,
        },
        {
            title: `Slice and serve`,
            description: `Allow fully smoked sausages to cool completely and rest at room temperature for 24 hours — the smoke compounds continue distributing through the interior during this rest period and the flavour integrates further. Slice diagonally at 3-4mm thickness. The cross-section should show the dark smoked exterior transitioning to a lighter, fat-speckled interior. Pan-fry slices briefly in a dry pan over medium heat — 60 seconds per side until slightly caramelised — or grill over charcoal. Serve with sticky rice, hạt dổi dipping salt, rau răm, and lime. In Cao Bằng households, the smoked sausage hangs above the kitchen hearth and slices are cut as needed — the hanging position keeps the sausage warm and dry continuously while adding incremental smoke from the daily cooking fire.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}