'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trung-vit-lon-nuong-than',
    title: 'Tr?ng V?t L?n Nu?ng Than Phú Yên (Charcoal-Grilled Balut with Lá É Salt)',
    subtitle: 'Balut — fertilized duck eggs at 16-18 days — grilled directly on hardwood charcoal until the shell chars and the contents inside cook from the conducted heat, served upright with mu?i lá é and rau ram. The Tuy Hòa street preparation that applies the province\'s fire-and-salt philosophy to its most divisive ingredient.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/trung-vit-lon-nuong-than.jpg',
    intro: `Tr?ng v?t l?n nu?ng than is the grilled balut of Phú Yên — a street preparation that takes the fertilized duck egg that is one of the most discussed and debated foods in Vietnamese cuisine and cooks it in a way that is specific to the central coast. Balut — tr?ng v?t l?n in Vietnamese — is a fertilized duck egg that has been incubated for 16-18 days, at which point the developing duckling inside has reached a stage where it has formed distinct components: a broth beneath the membrane, the solidified egg white, the yolk, and the partially developed duckling with its soft bones, beak beginning to form, and small but visible feathers. Boiled balut is the standard preparation throughout Vietnam — the egg cracked at the small end, the broth sipped first from the shell, then the contents eaten with rau ram and mu?i tiêu chanh. Grilled balut is the Phú Yên street variation: the whole uncracked egg placed directly on hot charcoal for 8-10 minutes, where the shell chars and the heat conducts through the shell and cooks the contents from the outside in rather than from the inside out as in boiling. The result is a balut where the broth inside has partially reduced and concentrated from the charcoal heat, the white is firmer with a slight char character from the extended cooking, and the duckling has developed a specific texture from the dry heat that boiling does not produce. In Tuy Hòa, this preparation is sold at evening street stalls from 5pm onward — the vendor with a small charcoal fire, a basket of eggs, and a bottle of mu?i lá é is a specific fixture of the city's street food landscape. The mu?i lá é for tr?ng v?t l?n nu?ng is the condiment that most clearly makes this Phú Yên rather than generic Vietnamese balut: the wild citrus-pepper character of litsea cubeba against the rich, concentrated egg and duckling is a pairing that exists nowhere else and that residents of the province consider obvious.`,
    ingredientSections: [
        {
            title: 'Balut',
            items: [
                { amount: 8, name: 'balut (tr?ng v?t l?n)', note: '16-18 day fertilized duck eggs — available at Vietnamese grocery stores and Asian markets. The 16-18 day stage has the most flavor and the most developed but still tender duckling. Refrigerate until ready to grill — take out 20 minutes before grilling to approach room temperature.' },
            ],
        },
        {
            title: 'Charcoal',
            items: [
                { amount: 0.5, unit: 'kg', name: 'hardwood charcoal', note: 'built to medium-hot — hot enough to char the shell and cook the egg through in 8-10 minutes' },
            ],
        },
        {
            title: 'Mu?i lá é Phú Yên — the eighth and most surprising application',
            items: [
                { amount: 20, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'limes', note: 'squeezed at the table' },
                { amount: 1, name: 'bird\'s eye chili', note: 'pounded with the leaves' },
            ],
        },
        {
            title: 'Essential accompaniments',
            items: [
                { amount: 1, name: 'large bunch Vietnamese coriander (rau ram)', note: 'generous amount — rau ram with balut is one of the most established pairings in Vietnamese street food' },
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'for eating raw alongside — amplifies the mu?i lá é character' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 4, name: 'small egg cups or folded paper', note: 'to hold the eggs upright while eating' },
            ],
        },
    ],
    steps: [
        {
            title: 'Understanding balut before you begin',
            description: 'Balut at 16-18 days contains a partially developed duckling inside the egg — this is the ingredient and it should not be a surprise when the egg is opened. The contents of a balut: a layer of clear broth beneath the air sac at the top; the solidified egg white forming the lower half; the orange-yellow yolk; and the duckling in the upper half, with soft, edible bones, a small beak, and beginning feather development. All of this is eaten. The rau ram and the mu?i lá é exist specifically to accompany all of these components — each has a different texture and flavor and needs the herbs and salt to complete it.',
            tip: 'Balut is genuinely delicious when approached without resistance — the broth is rich and savory, the white is firm, the yolk is creamy, and the duckling has a specific density and flavor that nothing else in Vietnamese street food resembles. The discomfort some first-timers feel is entirely about expectation rather than flavor. Approach it as a new eating experience, not as a test.',
        },
        {
            title: 'Build the charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over. The fire for tr?ng v?t l?n nu?ng should be medium-hot — hot enough to char the shell and conduct heat through it in 8-10 minutes, not so hot that the shell cracks from thermal shock before the interior has heated through. The eggs go directly onto the glowing coals — no grill grate, no rack. Direct coal contact is the Tuy Hòa method.',
            tip: 'Direct coal contact for the egg shells is the technique that produces the specific char on the shell surface and the concentrated internal heat that distinguishes grilled from boiled balut. A grill grate above the coals produces a milder heat with less char character. The Tuy Hòa street vendors place the eggs directly in the glowing ash at the edge of the fire.',
        },
        {
            title: 'Grill directly on the coals — 8-10 minutes',
            description: 'Place the balut eggs directly on the glowing charcoal. Turn with tongs every 2-3 minutes so the shell chars evenly on all sides. At 8-10 minutes the shell should be charred in patches across the entire surface, the eggs warm throughout when held. The shell does not crack during correct grilling — if cracking occurs, the fire is too hot. A cracked shell loses the internal broth.',
            tip: 'The test for doneness: hold the egg near your ear and gently swirl it — if you hear the broth moving inside, the egg is not hot enough throughout. At correct doneness, the broth has heated and partially set; there is no sloshing sound. This audio test is the Tuy Hòa street vendor\'s quality check.',
        },
        {
            title: 'Pound the mu?i lá é',
            description: 'Pound lá é leaves with salt, pepper, sugar, and chili until intensely green and fragrant. For tr?ng v?t l?n the mu?i lá é should be slightly saltier than for other preparations — the rich egg and duckling content needs more salt contact per bite. Transfer to individual small plates. Squeeze lime at the table.',
            tip: 'Mu?i lá é with balut is the pairing that most surprises people who know both ingredients separately. The wild citrus-camphor character of lá é against the concentrated egg and duckling richness produces a combination that is more harmonious than mu?i tiêu chanh against the same ingredients — the lá é complexity matches the complexity of the balut rather than simply seasoning it.',
        },
        {
            title: 'Serve upright and eat in sequence',
            description: 'Place each charred egg in a small cup or folded paper holder — small end up, the traditional balut orientation. The diner cracks the small end of the shell with a spoon. The correct eating sequence: sip the hot broth from the shell first — it is the most fragrant and the hottest element, and it seasons the palate for everything that follows. Then eat the white with mu?i lá é and rau ram. Then the yolk. Then the duckling with rau ram and fresh lá é leaf. The sequence is traditional and produces the best eating experience in this specific order.',
            tip: 'The duckling portion of grilled balut has a specific texture from the charcoal heat — slightly firmer and more concentrated than boiled balut duckling. The soft bones are edible and contribute their mineral character. Eat with a generous piece of rau ram and a raw lá é leaf simultaneously — the herb combination alongside the duckling is the specific Tuy Hòa street food experience that cannot be replicated without both herbs.',
        },
        {
            title: 'The complete Tuy Hòa street experience',
            description: 'Grilled balut in Tuy Hòa is eaten standing or perched on a low plastic stool at the evening stall, with cold beer or sugarcane juice, in the company of other people eating the same thing. The mu?i lá é is in a small glass bottle on the stall table — poured rather than spooned, in the generous quantities the stall vendor applies automatically. This context is part of the dish. At home: small stools, cold beer, the mu?i lá é in a small bottle, eaten quickly while the eggs are still hot from the charcoal.',
            tip: 'Grilled balut cools quickly and the experience is specifically about eating it hot from the coals. The contrast between the charred exterior of the shell and the hot, concentrated interior is at its peak in the first 3 minutes after the egg comes off the fire. Organize the eating so the eggs are cracked and consumed immediately after grilling.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
