'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'thit-hun-khoi-xo-dang',
    title: `Tây Bắc Hearth-Smoked Buffalo Meat`,
    subtitle: `Thịt Trâu Gác Bếp — Tây Bắc Thái community's hearth-smoked buffalo dried above the cooking fire for weeks — the most intensely flavoured preserved meat in Vietnamese highland cooking.`,
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '336 hrs',
    rating: 4.9,
    baseServings: 6,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Thịt trâu gác bếp — literally "buffalo meat placed above the hearth" — is the preserved smoked meat of the Thái communities of Điện Biên, Lai Châu, Sơn La, and Hòa Bình provinces in the Tây Bắc (Northwestern) highlands of Vietnam. It is made by seasoning thick strips of buffalo meat with a specific highland spice combination, then hanging them above the family longhouse hearth fire where they dry and smoke slowly over 2-4 weeks of continuous low-heat exposure until the meat is black on the exterior, deep mahogany-red within, intensely concentrated in flavour, and shelf-stable at room temperature for months.\n\nThe technique is ancient — the Thái communities of the northwestern highlands have preserved meat this way for as long as oral history records, and the preparation appears in their poetry and folk songs as a marker of highland identity and the longhouse kitchen as a living space. The hearth fire in a Thái longhouse burns continuously for cooking, heating, and smoking — the gác bếp (above-the-hearth) position is the highest rack above the fire, where the temperature is lowest (40-60°C) and the smoke is most concentrated. This combination of very low heat and dense, continuous smoke over weeks produces a preservation mechanism that is fundamentally different from either hot-smoking (high heat, short time) or cold-smoking (low heat, no cooking): gác bếp is ultra-slow warm-smoking where the meat simultaneously dries, absorbs smoke compounds, and develops enzymatic changes over the extended time period that shorter preparations cannot replicate.\n\nThe spice combination used before hanging is the preparation's second defining element: mắc khén (Zanthoxylum rhetsa berries), hạt dổi (Michelia tonkinensis seeds), fresh ginger, lemongrass, garlic, and salt. These spices are not just flavouring — the mắc khén's antimicrobial compounds and the salt together create the surface environment that prevents spoilage during the weeks of slow smoking, allowing the meat to preserve safely without refrigeration.`,
    ingredientSections: [
        {
            title: `Buffalo or beef`,
            items: [
                { amount: 1, unit: 'kg', name: `buffalo meat (thit trau) or beef shank (bap bo)`, note: `cut into strips 4-5cm wide and 2-3cm thick along the grain — the grain direction is important: with-grain cutting produces strips that hold together during the long smoking period` },
                { amount: 2, unit: 'tbsp', name: `coarse salt (muoi hat)`, note: `non-iodised — primary preserving agent` },
            ],
        },
        {
            title: `Tây Bắc highland spice rub`,
            items: [
                { amount: 2, unit: 'tsp', name: `mac khen berries (Zanthoxylum rhetsa)`, note: `toasted and ground coarse — antimicrobial + numbing-citrus flavour` },
                { amount: 1.5, unit: 'tsp', name: `hat doi seeds (Michelia tonkinensis)`, note: `toasted and ground fine — resinous-camphor depth` },
                { amount: 40, unit: 'g', name: `fresh ginger, grated to paste` },
                { amount: 3, name: `lemongrass stalks, inner white only, minced fine` },
                { amount: 6, name: `garlic cloves, minced to paste` },
                { amount: 1, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
            ],
        },
        {
            title: `Home smoking setup (German apartment method)`,
            items: [
                { amount: 1, name: `smoker or covered kettle grill` },
                { amount: 200, unit: 'g', name: `hardwood chunks or chips`, note: `oak (Eiche) or beech (Buche) — available at German BBQ suppliers; lychee wood most authentic but unavailable in Germany` },
                { amount: 14, unit: 'days', name: `total smoking time`, note: `2-hour sessions daily at 50-60°C — approximates 2-week continuous gác bếp` },
            ],
        },
        {
            title: `Mắc khén dipping salt`,
            items: [
                { amount: 1, unit: 'tsp', name: `mac khen berries, toasted and ground` },
                { amount: 0.5, unit: 'tsp', name: `hat doi seeds, toasted and ground` },
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1.5, unit: 'tbsp', name: `lime juice` },
                { amount: 2, name: `bird's eye chili, minced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions sticky rice (xoi nep)` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, name: `cucumber, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Cut the meat with the grain`,
            description: `Cut buffalo or beef into strips 4-5cm wide, 2-3cm thick, and 15-20cm long — cutting along the grain (parallel to the muscle fibres). This with-grain direction is the opposite of the against-grain cutting used for tender fresh meat. For gác bếp, with-grain cutting is correct: the long muscle fibres running the length of the strip hold the meat together structurally during the 2-4 week smoking period, preventing the strips from breaking or falling off the rack. Against-grain strips would disintegrate during the extended drying. The finished dried meat is eaten in small pieces torn against the grain — the chewiness from the with-grain drying is a quality characteristic, not a flaw.`,
            tip: `The with-grain vs against-grain cutting distinction is the most counterintuitive technique in thịt trâu gác bếp for cooks trained in Western butchery. All Western smoked meat preparations (brisket, pastrami, jerky) specify against-grain slicing for tenderness. Gác bếp specifically requires with-grain orientation for structural integrity during the weeks-long drying period — tenderness is achieved not by cutting direction but by the enzymatic tenderisation that occurs slowly during the extended smoking time, as the meat's own proteolytic enzymes (cathepsins) continue working at the 40-60°C temperature range.`,
        },
        {
            title: `Apply the highland spice rub`,
            description: `Combine salt, ground mắc khén, ground hạt dổi, ginger paste, lemongrass paste, garlic paste, fish sauce, sugar, and black pepper. Mix thoroughly into a fragrant, slightly wet paste. Rub aggressively into all surfaces of each meat strip — the spice must penetrate the outer layer of the flesh. The salt and mắc khén's antimicrobial compounds (particularly the alkaloid zanthoxylol) begin working immediately, creating the surface environment that allows safe preservation during the long smoking period. Rest the rubbed meat at room temperature for 2 hours before smoking — the salt begins drawing surface moisture and the spice compounds begin penetrating the meat fibres.`,
            tip: `The antimicrobial function of mắc khén in gác bếp is not incidental to its role as a spice — it is why mắc khén is used in this preparation specifically. Zanthoxylol and related alkaloids in Zanthoxylum species have documented antimicrobial activity against the bacteria most commonly associated with meat spoilage (Staphylococcus aureus, Listeria monocytogenes). Combined with the salt's water activity reduction, the mắc khén creates a dual-mechanism surface protection that allows the meat to hang at ambient temperature for weeks without refrigeration. This is traditional food safety science — the Thái communities discovered empirically what modern food microbiology later confirmed chemically.`,
        },
        {
            title: `Set up the home smoking — 14-day approximation`,
            description: `Traditional gác bếp: hang meat strips above the longhouse hearth at 40-60°C, 24 hours continuous smoke for 2-4 weeks. Home method: set up a smoker or covered kettle grill at 50-60°C (very low — this is warm-smoking not hot-smoking). Add hardwood chunks. Smoke the meat strips for 2-hour sessions daily for 14 days. Between sessions, hang the meat in a cool, well-ventilated area or refrigerate. The 14 daily 2-hour sessions (28 hours total active smoking) approximates the flavour development of 2 weeks of continuous low-level hearth smoke — not identical, but producing a recognisably gác bếp result.`,
        },
        {
            title: `Monitor the smoking progression`,
            description: `Day 1-3: the meat surface begins to dry and darken. The spice crust is visible and fragrant. Day 4-7: the exterior is deeply darkened, almost black in places. The meat has lost 20-30% of its original weight. The surface feels firm and slightly leathery. Day 8-11: the exterior is uniformly dark, the interior when cut reveals a deep mahogany-red colour. The meat has lost 35-45% of its original weight. Day 12-14: the exterior is black, the interior mahogany, the texture throughout is firm but not hard. The smell is of concentrated meat, wood smoke, mắc khén, and hạt dổi simultaneously — all four notes clearly present. This is the correct endpoint.`,
            tip: `The weight loss percentage is the most reliable indicator of gác bếp progress at home. At 35-45% weight loss: the water activity of the meat surface has been reduced sufficiently for shelf stability, the flavour compounds have concentrated proportionally, and the enzymatic tenderisation has had sufficient time to work on the tough buffalo fibres. Below 30% loss: under-smoked, will not keep at room temperature. Above 50% loss: over-dried, the interior texture becomes hard rather than chewy-yielding.`,
        },
        {
            title: `Rest and store`,
            description: `After the final smoking session, allow the meat to cool completely and rest at room temperature for 24 hours — the smoke compounds redistribute from the surface into the interior during this rest period, and the flavour integrates further. The finished thịt trâu gác bếp keeps at room temperature (below 25°C) for 2-3 months wrapped in cloth or paper — not plastic, which traps moisture and promotes mould. In the refrigerator, it keeps for 6 months. The flavour continues developing for the first 2 weeks after completion — like aged cheese, the gác bếp at 2 weeks post-completion is noticeably more complex than on the day it finished smoking.`,
        },
        {
            title: `Prepare and serve`,
            description: `Tear or slice the smoked meat into small pieces against the grain — the with-grain drying produces a chewy strip that is eaten in small, torn-against-grain pieces. The correct preparation for serving: briefly grill or pan-sear the torn pieces over high heat for 60-90 seconds to reactivate the mắc khén's volatile compounds and warm the fat — the searing produces a second round of Maillard browning on the already-concentrated surface. Serve with sticky rice, mắc khén dipping salt, rau răm, mint, and lime. In the Thái longhouse tradition, thịt trâu gác bếp is brought out for important guests and festivals — tearing pieces from the hanging strip above the hearth is both the food preparation and the hospitality gesture, the host sharing something that took weeks to make and represents the household's care and provision.`,
            tip: `The brief searing before serving is the preparation technique that transforms kept gác bếp from a preserved ingredient into a finished dish. Stored gác bếp has its volatile aromatic compounds largely locked in the dried surface — the surface is stable but the aromatics are dormant. 60-90 seconds of high heat reactivates them: the mắc khén's hydroxy-alpha-sanshool volatilises, the hạt dổi's camphor compounds release, and the Maillard-concentrated surface caramelises further. The serving gác bếp should be hot, fragrant, and slightly sizzling — not cold and inert from storage.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}