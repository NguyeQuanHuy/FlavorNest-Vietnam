'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nuoc-mam-phan-thiet',
    title: `Phan Thiết Fish Sauce`,
    subtitle: `Nước Mắm Phan Thiết — Vietnam's oldest documented fish sauce tradition, fermented 12-18 months in wooden barrels from cá cơm anchovy and sea salt.`,
    category: 'CONDIMENT',
    difficulty: 'Hard',
    totalTime: '365 days',
    rating: 4.9,
    baseServings: 1,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Phan Thiết fish sauce is not a recipe in the ordinary sense — it is a process that takes between twelve and eighteen months, requires specific anchovy species, and cannot be replicated precisely outside the climatic and microbial conditions of the Bình Thuận coast. What this page documents is the complete traditional production method as practiced by the barrel houses (nhà thùng) that have operated in Phan Thiết since the seventeenth century, alongside a practical small-batch home method that produces a genuine fermented fish sauce in three to six months.\n\nNước mắm Phan Thiết is made exclusively from cá cơm (Encrasicholina heteroloba and Stolephorus tri — two species of anchovy harvested from the warm, plankton-rich waters between Phan Thiết and Phú Quý island). The anchovy is caught at night by lamplight in October and November, when the schools are densest and the fish are fattest. Within hours of landing, the fish are mixed with sea salt in a ratio of 3 parts fish to 1 part salt by weight — the Phan Thiết standard — and packed into hardwood barrels (thùng gỗ) of up to 10,000 litres made from bời lời wood, a Vietnamese hardwood that does not impart tannins to the fermenting liquid.\n\nOver twelve to eighteen months, the proteins in the anchovy are broken down by the fish's own digestive enzymes (autolysis) and by halophilic bacteria that thrive in the high-salt environment. The liquid that drains from the bottom of the barrel is the first press (nước mắm nhĩ) — the highest grade, darkest in colour, richest in amino acids, and most expensive. Later presses, made by adding water to the spent solids and fermenting again, produce progressively lower grades. Nước mắm nhĩ Phan Thiết, at 40 degrees nitrogen (40°N), contains 40g of amino acid nitrogen per litre — the measure of quality and the number printed on every premium bottle.`,
    ingredientSections: [
        {
            title: `Traditional barrel method (large scale — for understanding)`,
            items: [
                { amount: 3, unit: 'kg', name: `fresh whole anchovy (ca com)`, note: `Encrasicholina heteroloba preferred — caught same day; never frozen` },
                { amount: 1, unit: 'kg', name: `coarse non-iodised sea salt (muoi hat)`, note: `3:1 fish to salt ratio by weight — the Phan Thiet standard` },
                { amount: 1, name: `hardwood barrel or large ceramic crock`, note: `minimum 10L capacity for meaningful production` },
                { amount: 1, name: `heavy stone or weight for pressing`, note: `keeps fish submerged below the brine line` },
            ],
        },
        {
            title: `Home small-batch method (3-6 months, 1 litre yield)`,
            items: [
                { amount: 1.5, unit: 'kg', name: `fresh whole anchovy or sardine`, note: `the freshest available — Vietnamese ca com from Asian frozen section acceptable` },
                { amount: 500, unit: 'g', name: `coarse non-iodised sea salt`, note: `3:1 ratio maintained — iodised salt inhibits the halophilic bacteria` },
                { amount: 1, name: `2-litre glass jar with loose lid or cloth cover`, note: `must allow gas to escape without letting insects in` },
            ],
        },
        {
            title: `How to use nước mắm Phan Thiết — making nuoc cham`,
            items: [
                { amount: 3, unit: 'tbsp', name: `nước mắm Phan Thiết 40N`, note: `the base — use less of a higher-grade sauce, more of a lower-grade` },
                { amount: 3, unit: 'tbsp', name: `warm water` },
                { amount: 2, unit: 'tbsp', name: `sugar` },
                { amount: 1.5, unit: 'tbsp', name: `fresh lime juice` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Understanding the fermentation — what is actually happening`,
            description: `Fish sauce fermentation is autolysis accelerated by salt. When whole anchovy are mixed with salt at a 3:1 ratio, the salt immediately begins drawing water from the fish cells by osmosis. This concentrated brine creates an environment where most bacteria cannot survive — but halophilic (salt-loving) bacteria thrive. Simultaneously, the digestive enzymes still present in the fish's own gut and flesh (primarily proteases) continue breaking down proteins into amino acids and peptides even after the fish has died, because enzymes are not living organisms and function independently of cellular life. Over twelve months, this enzyme activity converts fish protein into a liquid rich in glutamic acid, lysine, and other amino acids — the source of fish sauce's intense umami. The nitrogen content (measured as amino acid nitrogen per litre) is the international standard for grading fish sauce quality. Phan Thiết's 40°N premium grade is among the highest in the world.`,
            tip: `Phú Quốc fish sauce (also 40°N) and Phan Thiết fish sauce are Vietnam's two internationally recognised premium products. The difference is the anchovy species: Phú Quốc uses Stolephorus commersonii from the Gulf of Thailand; Phan Thiết uses Encrasicholina heteroloba and Stolephorus tri from the South China Sea. The salt concentration in the surrounding water differs, as does the plankton diet of the fish — these variables produce measurably different amino acid profiles and therefore different flavour characteristics.`,
        },
        {
            title: `The Phan Thiết barrel house method (nhà thùng)`,
            description: `Fresh anchovy are weighed on landing at the fishing pier. The fish are never washed — washing removes the surface bacteria and digestive enzymes that drive fermentation. Within 4 hours of landing, the fish are layered into hardwood barrels in alternating layers: fish, salt, fish, salt, beginning and ending with a thick salt layer. The top is sealed with a heavy wooden lid weighted with stones. The barrel is left undisturbed in a covered but ventilated warehouse. After 2-3 weeks, the fish will have collapsed and a dark brine (nuoc boi) will have formed above the fish mass. This brine is ladled up and poured back over the top daily for the first month — a process called dao or khuay (stirring) that distributes enzymes and bacteria evenly through the mass and accelerates fermentation. After the first month, the barrel is sealed and left undisturbed for 11-17 more months.`,
            tip: `The bời lời hardwood barrels used in Phan Thiết are the containers that most distinguish the production from industrial fish sauce made in plastic or stainless steel tanks. The wood is porous enough to allow very slow oxidation from the outside — this contributes to the deep amber colour and rounded flavour of premium Phan Thiết sauce. The barrels are reused for decades; an old barrel is more valuable than a new one because its interior has been inoculated with the microbial community of previous fermentations.`,
        },
        {
            title: `First press — nước mắm nhĩ`,
            description: `After 12-18 months, the tap at the base of the barrel is opened and the first liquid is collected by gravity — no pressing, no squeezing. This gravity-drained first extract is nước mắm nhĩ: the darkest, richest, most amino-acid-dense fraction of the fermentation. A 10,000-litre barrel yields approximately 3,000-4,000 litres of first-press sauce. It is tested for nitrogen content (target: 40g amino nitrogen per litre minimum for premium grade) using the Kjeldahl method. Sauce that meets the standard is bottled without dilution or additives as nước mắm nhĩ 40°N. Sauce that falls short is blended with second and third press liquid to produce standard commercial grades.`,
        },
        {
            title: `Home small-batch production method`,
            description: `Rinse anchovy briefly in cold salted water (not fresh water, which shocks the osmotic process). Do not gut or head the fish — the gut enzymes are essential for fermentation. Layer fish and salt in a clean glass jar: 3 parts fish to 1 part salt by weight, alternating thin layers, beginning and ending with a thick salt layer. The top salt layer should be at least 2cm deep — this is the barrier that excludes spoilage organisms from the surface. Press a small plate or weight inside the jar to keep fish submerged. Cover with cloth or a loose lid — gas must escape. Leave in a warm location (25-30°C) — a south-facing windowsill in summer, near a radiator in winter. After 1-2 weeks the fish will collapse and brine will cover everything. Stir gently once a week with a clean wooden spoon for the first month. After 3-6 months, strain through a fine mesh sieve lined with cheesecloth. The collected liquid is your fish sauce — amber, intensely savoury, and entirely your own.`,
            tip: `In Germany, fresh whole anchovy are available at Turkish and Greek fishmongers (Hamsi in Turkish), typically in autumn when Mediterranean anchovy season aligns with the Vietnamese cá cơm harvest season. Frozen Vietnamese cá cơm from Asian grocery stores (Dong Xuan Center, Viet-Markt chains) also work for home production. Non-iodised sea salt is available at health food stores (Reformhaus) or online. The smell during fermentation is aggressive — a garage, balcony, or basement is the appropriate location.`,
        },
        {
            title: `Grading and quality assessment`,
            description: `Professional nước mắm is graded by nitrogen content measured in degrees N (grams of amino acid nitrogen per litre). The commercial grades in Vietnam: Đặc biệt (special) = 40°N and above; Thượng hạng (premium) = 30-39°N; Hạng 1 (grade 1) = 20-29°N; Hạng 2 = 10-19°N. For home-produced sauce, a simple quality check: hold a small amount in a white spoon in bright light. Premium first-press sauce is deep amber, almost mahogany, and completely clear with no particulates. Shake a few drops on your wrist — the smell should be intensely savoury and complex, with no putrid or ammonia notes. Ammonia smell indicates protein decomposition rather than controlled autolysis — this can result from insufficient salt at the beginning of fermentation or from contamination.`,
            tip: `The 40°N designation on Phan Thiết bottles is a guarantee of minimum amino acid content, not a flavour claim. Different producers at 40°N will taste differently based on the specific anchovy species, the age of their barrels, the local climate, and the microbial community established in their production facility over decades. Tasting between Viet Huong (Phu Quoc), Chin Su, Masan, and artisan Phan Thiết producers at the same nitrogen level reveals measurable flavour differences — the Phan Thiết producers typically show a more complex, longer finish and less initial sharpness than mass-market brands.`,
        },
        {
            title: `How to make nuoc cham — the correct ratio`,
            description: `The standard nuoc cham ratio for 40°N fish sauce: 1 part fish sauce : 1 part water : 2/3 part sugar : 1/2 part lime juice. For 4 servings: 3 tbsp nước mắm, 3 tbsp warm water, 2 tbsp sugar, 1.5 tbsp lime juice. Dissolve sugar in warm water first, then add fish sauce and lime juice, then garlic and chili. Taste: it should be simultaneously salty, sweet, sour, and intensely savoury, with no single note dominating. If using a lower-grade fish sauce (below 30°N), increase the fish sauce volume by 20% and reduce water proportionally — lower nitrogen means less flavour per tablespoon. If using a higher-grade artisan sauce (above 40°N), reduce fish sauce by 10%. The ratio adjusts to the sauce; the sauce does not adjust to the ratio.`,
            tip: `Nuoc cham made with genuine Phan Thiết 40°N nước mắm nhĩ does not need MSG — the glutamic acid content of the sauce is sufficient to produce full umami. Nuoc cham made with industrial-grade fish sauce at 15-20°N often benefits from a small addition of MSG to compensate for the lower amino acid content. This is not a flavour shortcut; it is a technical correction for an inferior base ingredient.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
