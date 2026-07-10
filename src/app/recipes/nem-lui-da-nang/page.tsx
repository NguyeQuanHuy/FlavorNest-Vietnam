'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nem-lui-da-nang',
    title: `Đà Nẵng Lemongrass Pork Skewer`,
    subtitle: `Nem Lụi Đà Nẵng — Seasoned pork paste grilled on lemongrass skewers, wrapped in rice paper with starfruit and green banana — the central coast's most aromatic street skewer.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Nem lụi is the lemongrass-skewered pork preparation that defines the street food culture of Đà Nẵng, Huế, and the central coast — a seasoned pork paste moulded around the lower third of a fresh lemongrass stalk and grilled over charcoal, the lemongrass stalk serving simultaneously as skewer, aromatic, and flavour infusion source as the pork's fat renders and bastes the stalk during cooking, releasing the citral compounds from the lemongrass fibres into the meat from the inside out. The dish is assembled at the table by the diner: the grilled skewer is slid from the lemongrass stalk and wrapped in thin rice paper with green banana, starfruit, cucumber, fresh herbs, and the essential mắm nêm, then dipped and eaten.\n\nThe name lụi describes the action of impaling — thịt lụi is meat impaled on a skewer in central Vietnamese vocabulary. The specific use of lemongrass as the skewer rather than bamboo or metal is the preparation's defining technique: a fresh lemongrass stalk, bruised along its length to open the fibrous cells and release the citral-rich essential oil, provides an aromatic infusion that penetrates the pork from the core outward during the 8-10 minutes of charcoal grilling. No amount of surface-applied lemongrass marinade produces the same result — the aromatic must be inside the meat, not on it.\n\nThe pork paste for nem lụi is distinctly different from the smooth, elastic chả cá paste — it is coarser, deliberately textured, and contains both minced pork and pork fat in visible pieces rather than a homogeneous blend. This coarseness is the texture that produces the correct grilled result: a surface that chars and crisps in places while the interior remains slightly yielding, with the distinct fat pieces rendering during grilling to baste the paste from within. A smooth, homogeneous paste produces a nem lụi that is uniformly cooked and lacks the textural variation that the correctly made version provides.`,
    ingredientSections: [
        {
            title: `Pork paste`,
            items: [
                { amount: 400, unit: 'g', name: `pork shoulder (thit heo nac vai)`, note: `hand-minced to 3-4mm pieces — not food processor; the coarse texture is essential` },
                { amount: 100, unit: 'g', name: `pork fat (mo heo)`, note: `cut into 3-4mm cubes — kept separate and cold` },
                { amount: 3, name: `shallots, minced fine` },
                { amount: 3, name: `garlic cloves, minced to paste` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tsp', name: `five-spice powder (ngu vi huong)` },
                { amount: 1, unit: 'tbsp', name: `tapioca starch (bot nang)`, note: `binder — holds paste to lemongrass` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
            ],
        },
        {
            title: `Lemongrass skewers`,
            items: [
                { amount: 12, name: `fresh lemongrass stalks`, note: `thick, firm stalks — bruised along the lower 10cm by pressing firmly with the side of a knife; this opens the fibrous cells and releases citral during grilling` },
            ],
        },
        {
            title: `Nam Ô mắm nêm dipping sauce`,
            items: [
                { amount: 4, unit: 'tbsp', name: `mam nem (fermented anchovy sauce)` },
                { amount: 3, unit: 'tbsp', name: `fresh pineapple juice` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 2, unit: 'tbsp', name: `roasted peanuts, crushed` },
                { amount: 1, unit: 'tbsp', name: `toasted sesame seeds` },
            ],
        },
        {
            title: `Rice paper and wrapping components`,
            items: [
                { amount: 20, name: `sheets banh trang mong (thin rice paper)`, note: `22-24cm diameter` },
                { amount: 2, name: `green bananas (chuoi xanh)`, note: `sliced very thin — the astringency is essential` },
                { amount: 1, name: `starfruit (khe / Averrhoa carambola)`, note: `sliced thin — the sour note specific to central Vietnamese wraps` },
                { amount: 1, name: `cucumber, julienned` },
                { amount: 1, name: `head butter lettuce` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 1, name: `bunch kinh gioi` },
                { amount: 100, unit: 'g', name: `do chua (pickled daikon and carrot)` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Hand-mince the pork — coarse texture is mandatory`,
            description: `Using a heavy cleaver or sharp knife, mince the pork shoulder by rocking the blade across the meat repeatedly — not a food processor. The target texture is 3-4mm irregular pieces with visible grain, not a smooth paste. After mincing the lean, add the cold pork fat cubes and mix through — the fat pieces should remain as distinct cubes rather than being worked into the lean. This two-component coarse mixture (minced lean + fat cubes) is what produces the characteristic surface texture of grilled nem lụi: the lean portions char and firm while the fat pieces render and create pockets of basted moisture within the paste.`,
            tip: `Hand-mincing vs food processor is not a matter of preference but of function for nem lụi. A food processor produces a smooth, emulsified paste in which fat and lean are uniformly blended — when grilled, this paste sets uniformly and produces a smooth, even surface without textural variation. Hand-mincing with a cleaver produces irregular pieces of varying sizes — when grilled, the smaller pieces char first, the larger pieces remain more tender, and the fat cubes render to create self-basting pockets. The visual result: a grilled nem lụi surface that is simultaneously charred in places, golden in others, with small glistening spots where the fat rendered — this visual variation is the quality indicator.`,
        },
        {
            title: `Season and rest the paste`,
            description: `Combine minced pork, fat cubes, shallots, garlic, fish sauce, sugar, black pepper, five-spice, tapioca starch, and sesame oil. Mix firmly by hand for 3 minutes until cohesive — the tapioca starch is the binding agent that holds the paste to the lemongrass stalk during grilling. Without it, the paste slides off the stalk in the first minutes of heat as the fat begins to render. Refrigerate 30 minutes — the chilled paste is firmer and easier to mould onto the stalks, and the cold fat cubes maintain their distinct shape during the moulding process rather than smearing into the lean.`,
        },
        {
            title: `Prepare the lemongrass stalks`,
            description: `Select thick, firm lemongrass stalks — thin stalks do not provide sufficient structural support and bend during grilling. Remove the outer dried layer from each stalk. Bruise the lower 10cm firmly by pressing with the flat of a heavy knife or rolling pin — the fibrous cells should be visibly crushed and the stalk should smell intensely of lemongrass citral at the crushed section. This bruising is the step that converts the lemongrass from a passive skewer to an active flavour source: the crushed fibres release citral continuously during grilling as the heat volatilises the essential oil from the broken cells.`,
            tip: `The citral concentration in lemongrass is highest in the inner white section of the lower stalk — the same section used in cooking. Bruising this section to open the cells releases approximately 3-4x more citral during grilling than an unbruised stalk, because the cell walls that normally contain the essential oil are ruptured and the oil is accessible to the heat. The nem lụi mounted on a properly bruised stalk will have a measurably more intense lemongrass aroma than one mounted on an unbruised stalk, even if identical pork paste is used. The bruising is the most consistently under-performed step in home nem lụi preparation.`,
        },
        {
            title: `Mould the paste onto the stalks`,
            description: `With wet hands, take approximately 40g of chilled pork paste and press it firmly around the bruised lower section of a lemongrass stalk — moulding it into an oval approximately 8cm long and 3cm in diameter. The paste should enclose the lemongrass completely and adhere firmly. Press down on the ends to seal — any gap will allow the fat to drip out during grilling and the paste to slide. The lemongrass stalk should protrude 3-4cm beyond the paste at the bottom (for holding) and 5-6cm at the top (for gripping to remove after grilling).`,
        },
        {
            title: `Grill over charcoal — 8 to 10 minutes`,
            description: `Prepare charcoal at medium-high heat. Grill nem lụi skewers, turning every 2 minutes, for 8-10 minutes total until the surface is deeply caramelised and the interior is cooked through. The pork fat will render during grilling, dripping onto the coals and producing aromatic smoke — this fat-smoke infuses the exterior of the skewer during cooking and is the source of the characteristic nem lụi aroma that fills the area around a grilling station. Do not rush the turning — each side needs 2 full minutes to caramelise properly before being moved. The finished skewer should be deep golden-brown, slightly charred at the edges, and the lemongrass stalk beneath visibly darkened from the heat.`,
        },
        {
            title: `Slide and wrap at the table`,
            description: `Bring the grilled nem lụi skewers to the table on the lemongrass stalks. Each diner holds the lemongrass stalk and slides the grilled paste off — the rendered fat and the lemongrass's oil create a natural release. The inside surface of the paste that was in contact with the lemongrass will be lighter in colour and intensely fragrant — this is the surface that received the maximum citral infusion from the bruised stalk. Immediately wrap in softened thin rice paper with butter lettuce, rau răm, mint, kinh giới, a thin slice of green banana, a slice of starfruit, cucumber, and pickled vegetables. Dip in mắm nêm and eat in two bites. The crispy outside of the nem, the fragrant lemongrass-infused inside, the astringency of the green banana, the sourness of the starfruit, and the deep funk of the mắm nêm arriving simultaneously is the central coast eating experience at its most complete.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}