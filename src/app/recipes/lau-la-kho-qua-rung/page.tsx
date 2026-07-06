'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'lau-la-kho-qua-rung',
    title: `Wild Bitter Melon Leaf Hotpot`,
    subtitle: `L?u Lá Kh? Qua R?ng — A Mekong Delta medicinal hotpot built on wild bitter melon leaves, pork ribs, and a broth that tastes of the forest floor.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.8,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Kh? qua r?ng (Momordica charantia var. abbreviata) is the wild smaller cousin of the cultivated bitter melon — a thin-stemmed vine that grows in the forest edges, riverbanks, and fallow fields of the Mekong Delta and the southern highlands. Every part of it is used: the tiny bitter fruit (smaller than a thumb, intensely bitter), the young shoots, and most importantly the leaves, which carry a concentrated bitterness that the cultivated variety has largely lost through centuries of selective breeding toward milder flavour.\n\nL?u lá kh? qua r?ng is one of the most distinctively medicinal dishes in southern Vietnamese cooking — a hotpot where wild bitter melon leaves are the defining ingredient, added in continuous batches to a simmering pork rib broth throughout the meal. The bitterness of the leaves disperses into the broth progressively, building from mild in the first minutes to intensely bitter by the end. Southern Vietnamese cooking has a deep tradition of bitter-tasting foods as health foods (thu?c d?ng dã t?t — bitter medicine cures illness), and l?u lá kh? qua r?ng sits squarely in this tradition: it is simultaneously a meal and a tonic, eaten specifically when someone in the household is unwell, fatigued, or recovering from excess.\n\nThe dish is associated with the An Giang and Ð?ng Tháp highland-border regions, where the wild vine is collected by hand from the forest. In the Mekong Delta lowlands, it appears at weekend family meals as a seasonal dish when the vine is available. Outside Vietnam it is essentially unknown — the cultivated bitter melon (kh? qua) appears in Chinese and Southeast Asian cooking throughout the world, but the wild leaf preparation is specific to the southern Vietnamese tradition and has never been documented in English.`,
    ingredientSections: [
        {
            title: `Broth base`,
            items: [
                { amount: 600, unit: 'g', name: `pork spare ribs (suon heo)`, note: `cut into 4 cm pieces — blanched and rinsed` },
                { amount: 3, name: `shallots, halved and charred` },
                { amount: 20, unit: 'g', name: `rock sugar (duong phen)` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 2, unit: 'L', name: `water` },
            ],
        },
        {
            title: `The bitter melon leaves (la kho qua rung)`,
            items: [
                { amount: 400, unit: 'g', name: `wild bitter melon leaves and young shoots (la kho qua rung)`, note: `substitute: cultivated bitter melon leaves (la kho qua vuon) — milder; or young bitter melon fruit sliced thin` },
                { amount: 100, unit: 'g', name: `wild bitter melon fruit (kho qua rung)`, note: `tiny, sliced thin — optional; adds fruit bitterness distinct from leaf bitterness` },
            ],
        },
        {
            title: `Hotpot additions (nhung)`,
            items: [
                { amount: 200, unit: 'g', name: `pork belly (ba chi heo)`, note: `sliced thin 3mm — added at the table` },
                { amount: 200, unit: 'g', name: `firm tofu (dau hu chac)`, note: `cut into 3 cm cubes` },
                { amount: 100, unit: 'g', name: `pork liver (gan heo)`, note: `sliced 4mm — blanched 30 seconds before serving` },
                { amount: 150, unit: 'g', name: `enoki mushrooms (nam kim cham)`, note: `roots trimmed` },
                { amount: 100, unit: 'g', name: `straw mushrooms (nam rom)`, note: `halved` },
                { amount: 200, unit: 'g', name: `fresh rice vermicelli (bun tuoi)`, note: `or glass noodles (mien)` },
            ],
        },
        {
            title: `Dipping sauce (muoi tieu chanh)`,
            items: [
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 1.5, unit: 'tbsp', name: `fresh lime juice` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `Raw herb plate`,
            items: [
                { amount: 150, unit: 'g', name: `bean sprouts (gia do)`, note: `raw` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch perilla (tia to)` },
                { amount: 1, name: `bunch sawtooth coriander (ngo gai)` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, whole` },
            ],
        },
    ],
    steps: [
        {
            title: `Blanch the ribs and build the broth`,
            description: `Cover pork ribs with cold water in a pot, bring to a boil, cook 5 minutes. Drain and rinse each rib under cold running water until clean — no grey residue. Char shallot halves cut-side down over a gas flame until blackened on the flat surface. Combine blanched ribs, charred shallots, and 2 L cold water in a clean stockpot. Bring to a boil, skim foam for the first 10 minutes, then reduce to a low simmer. Cook uncovered for 1 hour until ribs are tender and the broth is sweet and clear. Season with rock sugar, fish sauce, and salt. The starting broth should be mild and slightly sweet — the bitterness of the leaves will season it progressively during the meal.`,
            tip: `The broth for lau la kho qua rung begins mild by design. A strongly seasoned starting broth will clash with the progressive bitterness of the leaves rather than carrying it. Think of the broth as a canvas that the leaves paint over the course of the meal — it starts pale and ends complex.`,
        },
        {
            title: `Prepare the bitter melon leaves`,
            description: `Rinse wild bitter melon leaves and shoots in several changes of cold water. Pick leaves from the tougher stems — young shoots with leaves attached are used whole. The leaves will vary in bitterness depending on age: darker, larger leaves are more bitter; pale young leaves at the shoot tips are mild. Sort into two piles: young shoots and small leaves for early in the meal (milder, added first), larger older leaves for mid and late meal (more bitter, building the intensity). If using the tiny wild fruit, slice thin and add with the older leaves.`,
            tip: `Wild bitter melon leaves (la kho qua rung) are significantly more bitter than cultivated bitter melon leaves (la kho qua vuon) and immeasurably more bitter than the fruit sold in supermarkets. Outside Vietnam, cultivated bitter melon leaves are occasionally available at Vietnamese or Chinese grocers in Germany — Dong Xuan Center in Berlin sometimes stocks them fresh. If using cultivated leaves, double the quantity to approximate the bitterness of the wild variety. The young shoots of regular bitter melon vines, if you can find them growing in a garden or greenhouse, are closer to the wild version than the mature cultivated leaves.`,
        },
        {
            title: `Make the muoi tieu chanh dipping sauce`,
            description: `Combine coarse salt and coarsely ground black pepper in a small bowl. Add fresh lime juice and stir — the mixture will foam slightly as the acid reacts with the salt. Add sliced chili. The sauce should be sharp, salty, and intensely aromatic with freshly ground pepper. Unlike nuoc cham, muoi tieu chanh contains no sugar and no fish sauce — it is the austere Mekong Delta dipping sauce for boiled and hotpot meats, calibrated to cut through the fat of pork belly and liver without adding sweetness that would fight the bitterness of the leaves.`,
            tip: `The choice of muoi tieu chanh over nuoc cham for this hotpot is deliberate and non-negotiable. Sweet nuoc cham conflicts with the progressive bitterness building in the broth — the sweetness creates a confused flavour that experienced diners find unpleasant. The saltiness and acid of muoi tieu chanh aligns with and amplifies the bitterness rather than fighting it. This is the flavour logic of the dish.`,
        },
        {
            title: `Set up the hotpot table`,
            description: `Transfer finished pork rib broth to a clay pot or hotpot vessel on a portable burner at the centre of the table. Bring to a simmer. Arrange around it: the sorted bitter melon leaves in two separate plates (young shoots separate from older leaves); sliced pork belly, cubed tofu, liver slices, and mushrooms arranged on a large plate; the herb plate with bean sprouts, rau ram, ngo gai, and perilla; individual bowls of muoi tieu chanh; noodles in a bowl of cold water to prevent clumping; lime wedges and whole chili. The pork ribs can be left in the broth or removed to a separate plate — in An Giang, the ribs remain in the pot and are eaten throughout the meal.`,
        },
        {
            title: `Add the young leaves first`,
            description: `Begin the meal by adding a small handful of young bitter melon shoots and pale young leaves to the simmering broth. They will wilt in 30 seconds and turn the broth the faintest green. At this stage the bitterness contribution is minimal — the broth will taste clean and lightly vegetable. Add pork belly slices and tofu to cook 2-3 minutes. Retrieve and eat with muoi tieu chanh and raw herbs. The first rounds of the meal are gentle — the bitterness builds from here.`,
        },
        {
            title: `Build the bitterness progressively`,
            description: `As the meal progresses, add larger, darker leaves in increasing quantities. Each addition of older leaves releases more bitter compounds (momordicin and charantin) into the broth. Add mushrooms and liver in the middle rounds. Add noodles near the end — drop a portion directly into the broth and cook 1 minute before retrieving. By the final rounds, the broth will be noticeably bitter — a clean, vegetal, medicinal bitterness that is not unpleasant but requires the muoi tieu chanh and fresh herbs to balance. Eat the broth in small sips between bites throughout the meal.`,
            tip: `The bitterness escalation is the defining experience of lau la kho qua rung and what separates it from any other hotpot in Vietnamese cooking. Southern Vietnamese diners who eat this regularly describe the final broth as the goal — the moment when the accumulated bitterness of many leaves has produced a liquid with genuine medicinal character. First-time eaters should start with small amounts of leaf per round and build more slowly. The bitterness cannot be reversed once it is in the broth.`,
        },
        {
            title: `Drink the final broth`,
            description: `When all ingredients have been eaten, ladle the final bitter broth into small bowls for each person. It will be dark green-gold, intensely flavoured, and bitter in a way that is simultaneously fatiguing and clarifying. In An Giang, this final broth cup is drunk slowly, without speaking, as the meal's conclusion. It is considered the most valuable part of the dish — the accumulated medicinal compounds of the wild vine concentrated by an hour of simmering. Squeeze a wedge of lime into the final bowl. Do not add anything else.`,
            tip: `Southern Vietnamese traditional medicine (thuoc nam) considers la kho qua rung a cooling food (thuc pham tinh mat) that reduces internal heat, supports liver function, and lowers blood sugar — claims that align partially with modern research on bitter melon's hypoglycaemic compounds (charantin, polypeptide-p, vicine). Whether one believes the medicinal claims or not, the final broth produces a distinctive physical sensation of clearness and lightness that is difficult to attribute to placebo alone. The dish is most often eaten after periods of heavy eating, drinking, or illness — the bitter finish functions as a reset.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
