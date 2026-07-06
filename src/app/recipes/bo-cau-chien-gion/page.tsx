'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-cau-chien-gion',
    title: 'Bồ Câu Chiên Giòn (Crispy Deep-Fried Pigeon)',
    subtitle: 'Young pigeon marinated in five-spice and soy sauce then deep-fried whole at 175°C for 12-14 minutes until every bone is edible and the skin shatters — served with salt, pepper, and lime. The preparation that applies the chim cút chiên giòn bone-crisping technique to the richer, more dramatic pigeon.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '3 hr + 15 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/bo-cau-chien-gion.jpg',
    intro: `Bồ câu chiên giòn is the deep-fried pigeon of Vietnamese-Chinese cooking — a preparation that takes the bone-crisping deep-frying technique used for chim cút chiên giòn (crispy fried quail) and applies it to pigeon, which at the correct frying temperature and time produces a result where not just the skin but the smaller bones of the carcass have crisped to a genuinely edible consistency. The technique for pigeon is the same as for quail — deep-frying at a sustained 175°C for 12-14 minutes — but the result is more dramatic because pigeon is larger, darker-fleshed, and richer, and because the bones that crisp during the correct frying time include the wing bones, rib bones, and breastbone of an animal larger than a quail, producing more bone-crunch per bite and more of the mineral depth that crisped bone contributes alongside the meat. The preparation requires a specific sequence: the pigeon must be marinated with five-spice and soy sauce to provide the seasoning that will be sealed into the flesh during frying; then air-dried for at least 2 hours so the skin surface is completely dry before the oil contact that produces crackling skin; then fried whole, breast-side down initially, turned once, at a temperature that is hot enough to crisp the bones in the available time but not so hot that the exterior chars before the interior is cooked through. The dipping preparation for bồ câu chiên giòn is deliberately simple — salt, pepper, and fresh lime — because the pigeon itself, at correctly crisped doneness, is the most flavored element of the plate and needs a condiment that provides acidity and mineral brightness rather than competing aromatic complexity. Eaten whole at the table, pulling wing sections, cracking through the breastbone, and finishing with the legs, bồ câu chiên giòn is the most satisfying of all the Vietnamese fried bird preparations because the pigeon provides both more flavor and more interesting bone-work than the quail.`,
    ingredientSections: [
        {
            title: 'Pigeon',
            items: [
                { amount: 2, name: 'whole squab (young pigeon), 350-450g each', note: 'cleaned — the smaller the bird, the more effectively the bones crisp. Young squab at 350-400g produces the best bone-crisping result.' },
            ],
        },
        {
            title: 'Marinade',
            items: [
                { amount: 3, unit: 'tbsp', name: 'light soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'dark soy sauce', note: 'for color' },
                { amount: 2, unit: 'tbsp', name: 'Shaoxing wine' },
                { amount: 1, unit: 'tsp', name: 'five-spice powder' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'grated' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'For frying',
            items: [
                { amount: 1, unit: 'L', name: 'neutral oil', note: 'for deep frying — enough to fully submerge the pigeons' },
            ],
        },
        {
            title: 'Dipping salt',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'flaky sea salt' },
                { amount: 1.5, unit: 'tsp', name: 'freshly ground black pepper', note: 'coarsely ground' },
                { amount: 0.5, unit: 'tsp', name: 'five-spice powder', note: 'small amount — echoes the marinade' },
                { amount: 3, name: 'limes', note: 'cut in wedges — squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 2, unit: 'portions', name: 'steamed jasmine rice', note: 'or eat without rice as a main nhậu dish' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate and air-dry — minimum 2 hours, ideally overnight',
            description: 'Combine all marinade ingredients. Rub over every surface of each pigeon — inside the cavity, under the wing joints, around the legs. Marinate 2 hours at room temperature minimum, or overnight refrigerated. Then: place on a wire rack uncovered and air-dry for minimum 2 hours at room temperature or 4 hours in the refrigerator. The surface must be completely dry — slightly tacky but not moist — before frying. This air-drying step produces crackling skin; skipping it produces soft skin regardless of frying temperature.',
            tip: 'The combined marination and air-drying sequence for bồ câu chiên giòn — marinate for flavor penetration, then air-dry for skin drying — is the same two-phase preparation as for bồ câu quay mật ong. The only difference is the cooking method that follows. The preparation logic is identical because the goal is the same: flavor throughout the flesh, crackling skin at the surface.',
        },
        {
            title: 'Blanch briefly before frying — optional but recommended',
            description: 'For very fresh pigeons: blanch in boiling water for 3 minutes, drain, and pat completely dry before the air-drying phase. This pre-blanching removes surface impurities and any blood that would produce off-flavors during deep-frying, and it produces a cleaner-tasting fried pigeon. If the pigeon has been cleaned and handled well, this step can be skipped — proceed directly to marinating.',
            tip: 'The blanching step for bồ câu chiên giòn serves the same purpose as blanching for bồ câu hầm thuốc bắc — removing the surface impurities that produce murky or bitter flavors during cooking. For a braised preparation the difference is obvious in the broth; for a fried preparation the difference is more subtle but present in the background character of the skin and the rendered fat.',
        },
        {
            title: 'Deep-fry at 175°C — exactly 12-14 minutes',
            description: 'Heat oil to 175°C in a wok or deep pot large enough to submerge the pigeons. Fry one pigeon at a time — the temperature drops significantly when a cold pigeon enters and crowding compounds this. Lower the pigeon breast-side down into the oil. Fry for 6-7 minutes without moving. Turn and fry a further 6-7 minutes breast-side up. Total time: 12-14 minutes. The pigeon is done when the skin is deep golden-brown throughout and a wing bone pressed firmly between two fingers yields and cracks rather than flexing.',
            tip: 'The 175°C temperature for bồ câu chiên giòn is slightly lower than for chim cút chiên giòn (180°C) because pigeon is larger and needs more time for the interior to cook through at the same rate as the bones crisp. 175°C for 12-14 minutes produces both a cooked interior and crisped small bones simultaneously. 180°C for the same time would over-brown the exterior before the interior was properly cooked.',
        },
        {
            title: 'Drain and rest',
            description: 'Remove the fried pigeon from the oil and drain on a rack — not paper towels, which trap steam and soften the skin. Rest for 3 minutes. The skin should be deep golden-brown, visibly crispy, and shattering when pressed. The wing tip bones should crack when bent. The small rib bones, when the pigeon is pulled apart at the table, should produce an audible crunch when bitten.',
            tip: 'The wing tip bone crunch test immediately after the rest period is the most reliable indicator of correctly fried bồ câu chiên giòn. Grip a wing tip between thumb and forefinger and press firmly — it should crack cleanly with moderate pressure. If it bends without cracking, the frying was insufficient. Return to the oil for 2 more minutes.',
        },
        {
            title: 'Combine the dipping salt and serve whole',
            description: 'Combine salt, coarsely ground black pepper, and five-spice on individual small plates. Place lime wedges alongside. Bring the whole pigeon to the table — do not chop before service. Each diner works through the bird at the table: pull the legs free first, crack the breast open, pull the wings. Each piece dipped in the lime-squeezed salt-pepper-five spice. The bones of each section eaten — wing bones, ribs, breastbone — producing the mineral crunch that is the specific pleasure of correctly fried bồ câu chiên giòn. Serve with rau răm, mint, cucumber, and rice.',
            tip: 'Serving bồ câu chiên giòn whole — not pre-chopped — is the presentation that best demonstrates the crisping achievement and produces the most engaged eating experience. Pre-chopped fried pigeon loses the bone-cracking element that is the defining pleasure of the preparation. Let each diner dismantle their own bird.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
