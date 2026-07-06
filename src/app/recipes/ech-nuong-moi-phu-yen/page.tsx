'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ech-nuong-moi-phu-yen',
    title: 'Ếch Nướng Mọi Phú Yên (Phú Yên Whole-Fire Grilled Frog)',
    subtitle: 'Whole frogs salted and grilled directly over hardwood charcoal with no marinade — the same fire-and-salt philosophy as gà nướng mọi applied to the paddy frogs of Phú Yên\'s rice fields and mountain streams, served with muối lá é.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ech-nuong-moi-phu-yen.jpg',
    intro: `Ếch nướng mọi Phú Yên is the frog preparation that applies the province's most fundamental cooking philosophy — fire, salt, and the best available local ingredient — to ếch, the paddy frogs caught in the rice fields and mountain streams of the inland communities of Sơn Hòa, Đồng Xuân, and the highland valleys. The mọi technique, which appears throughout Phú Yên cooking as the most direct and most revealing preparation (gà nướng mọi for chicken, cua đá nướng muối ớt for rock crab), means the same thing applied to frog: no marinade, no sauce applied during cooking, only the fire and the coarse salt that was rubbed into the surface before the charcoal was lit. The specific challenge of applying the mọi philosophy to frog — rather than to chicken or goat, which are more forgiving — is that frog flesh is significantly more delicate and cooks faster. The charcoal fire must be calibrated precisely: hot enough to produce the specific char that marks mọi cooking, gentle enough that the exterior does not char before the interior has cooked through, and consistent enough that every surface receives equal heat. The frogs are threaded on bamboo skewers or placed on a flat grill basket and turned frequently over a medium-hot fire for 15-20 minutes. The result — frogs with a charred, slightly crackling exterior and juicy, sweet, slightly smoky interior — is what the mọi philosophy achieves when correctly executed with this protein. The muối lá é served alongside is not just the Phú Yên condiment; it is the specific condiment for mọi cooking throughout the province, appearing here for what may be the most unusual protein it has accompanied in the series but functioning in exactly the same way: providing the aromatic complexity that the fire-only preparation deliberately excludes.`,
    ingredientSections: [
        {
            title: 'Frogs',
            items: [
                { amount: 8, name: 'whole frogs (ếch), cleaned', note: '150-200g each — cleaned, skin removed, left whole with legs and body intact. The whole frog on the grill is the mọi presentation. Alternatively: thread onto bamboo skewers through the body.' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt', note: 'rubbed over every surface — the only seasoning' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'rubbed inside the body cavity' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil', note: 'brushed over the salted frogs before grilling — prevents sticking and helps the salt caramelize' },
            ],
        },
        {
            title: 'Hardwood charcoal fire',
            items: [
                { amount: 0.5, unit: 'kg', name: 'hardwood charcoal', note: 'built to medium — less intense than for gà nướng mọi because frog is more delicate' },
                { amount: 4, name: 'bamboo skewers or flat grill basket', note: 'for holding the frogs — prevents them from falling through the grill grate' },
            ],
        },
        {
            title: 'Muối lá é — the mọi condiment',
            items: [
                { amount: 25, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)', note: 'appearing here with ếch for the first time in the series' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'pounded with the leaves' },
                { amount: 3, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'for eating raw alongside' },
                { amount: 1, name: 'bunch rau răm' },
                { amount: 1, name: 'green mango', note: 'julienned — optional but traditional alongside mọi preparations' },
                { amount: 2, name: 'extra limes' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Salt the frogs and rest',
            description: 'Pat each cleaned whole frog completely dry inside and out. Rub coarse salt firmly over every external surface — legs, body, inside the leg joints. Rub white pepper inside the body cavity. Brush lightly with oil over the salted surfaces. Leave at room temperature for 30 minutes. The salt draws surface moisture then reabsorbs — seasoning the frog from within the skin rather than sitting on the exterior. The oil helps the salt caramelize against the charcoal heat.',
            tip: 'The 30-minute salt rest for ếch nướng mọi is proportionally longer than for gà nướng mọi (1 hour) because frog flesh is more delicate and the salt works faster through the thin frog skin. 30 minutes produces full salt penetration for frog; 1 hour would be slightly over-seasoned.',
        },
        {
            title: 'Thread onto skewers or prepare the grill basket',
            description: 'Thread each salted frog onto a bamboo skewer lengthwise — through the body from the neck opening to the base of the spine, with the legs spread out on either side. Or place the frogs in a flat grill basket that can be turned as a unit. The skewering or basket is specifically necessary for frog — unlike chicken which can be placed directly on grill grates, frog falls apart too easily when cooked directly on grates without support.',
            tip: 'Bamboo skewers for ếch nướng mọi should be soaked in water for 30 minutes before use — the same reason as for any bamboo skewer preparation: to prevent burning before the protein is cooked. The skewer should pass through the body cavity of the frog cleanly, with the legs spread naturally on either side of the skewer for even heat exposure.',
        },
        {
            title: 'Build and calibrate the charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over. For ếch specifically, the fire should be medium rather than the medium-hot used for chicken mọi. Hold your hand 15cm above the grill — 5-6 seconds comfortable before the heat is too intense. This slightly cooler fire is essential for frog: the thin legs will char before the body is cooked through at medium-hot temperatures. The more moderate heat allows even cooking across all surfaces.',
            tip: 'The fire calibration difference between gà nướng mọi (medium-hot) and ếch nướng mọi (medium) reflects the protein difference. Chicken has enough fat to self-baste at higher temperatures; frog is lean and dries at high temperatures before charring correctly. The cooler fire for frog produces more even char and juicier flesh simultaneously.',
        },
        {
            title: 'Grill with frequent turning — 15-20 minutes',
            description: 'Place the skewered frogs over the medium charcoal. Turn every 3-4 minutes — more frequently than for chicken — because the thin legs char faster than the body. After 15 minutes, the body should be charred with specific black patches and the legs should be crispy. After 20 minutes, the flesh should be completely white and set when pressed firmly, with no yielding center. The frogs will have reduced in size slightly from the fat and moisture loss during grilling.',
            tip: 'The specific visual of correctly grilled ếch nướng mọi: the legs should be slightly darker and crispier than the body, with char at the joints and the ends. The body should have specific black patches where the charcoal heat was most direct, with golden-charred areas between. This uneven char is correct — it is the visual signature of mọi cooking.',
        },
        {
            title: 'Pound the muối lá é',
            description: 'Pound lá é leaves with salt, pepper, sugar, and chilies until intensely green and fragrant. For ếch specifically — the most delicate protein in the Phú Yên mọi series — the muối lá é should be slightly finer than for the chicken or rock crab versions. The delicate frog flesh needs a salt that coats more completely with each dip. Squeeze lime at the table.',
            tip: 'The muối lá é with ếch nướng mọi is the pairing that demonstrates the condiment\'s universality most clearly — the same litsea leaf salt that works with the robust flavor of charcoal goat and the intense sweetness of grilled lobster works equally with the delicate sweetness of fire-grilled frog. It works because the lá é character is aromatic and citrus-forward rather than assertive and pungent — it frames rather than dominates.',
        },
        {
            title: 'Serve and eat — the complete mọi experience',
            description: 'Bring the grilled frogs directly to the table on their skewers. Remove from skewers onto a plate. Scatter fresh lá é leaves and rau răm. Serve with muối lá é, sesame crackers, green mango, and lime. The eating: pull a leg from the body, place on a sesame cracker with a raw lá é leaf, dip edge in lime-squeezed muối lá é, eat in one bite. The body section: break apart with fingers, eat the pieces the same way. Nothing from ếch nướng mọi should remain on the plate.',
            tip: 'The mọi eating ritual — sesame cracker, protein piece, raw lá é leaf, muối lá é dip — is the same for ếch as for every other mọi preparation in the Phú Yên series. From gà to cua đá to dê to ếch, the ritual is unchanged. The province applies its one condiment, its one cracker, and its one eating method to every protein it grills over fire. This consistency is not limitation — it is identity.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
