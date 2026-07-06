'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-cau-hap-mam-nhi',
    title: 'B? Câu H?p M?m Nhi Phú Yên (Phú Yên Steamed Pigeon with Premium Fish Sauce)',
    subtitle: 'Whole pigeon steamed over Vietnamese beer with lemongrass and ginger — the same aromatic bath used for Phú Yên\'s finest seafood — served with the m?m nhi and microplane-grated ginger dipping sauce that transforms the rich, dark pigeon flesh into something specific to the central coast.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/bo-cau-hap-mam-nhi.jpg',
    intro: `B? câu h?p m?m nhi Phú Yên is the preparation that demonstrates the province's cooking philosophy most clearly: take the finest available ingredient, apply the simplest technique, and pair it with the condiment that only Phú Yên produces. The technique is the beer-lemongrass steaming that coastal Phú Yên families apply to their finest seafood — cua hu?nh d?, gh?, tôm hùm — transferred here to pigeon, the bird that Vietnamese-Chinese tonic cooking holds in the highest regard. The transfer of a seafood steaming technique to pigeon is not arbitrary: steaming is the method that best preserves the delicate, specific flavor of a high-quality protein, whether that protein comes from the sea or from a rooftop pigeon coop, and the beer-lemongrass bath produces an aromatic steam that perfumes the flesh from all directions simultaneously during cooking. The pigeon's dark, rich flesh — significantly more mineral and iron-rich than chicken — responds to steaming in a way that produces the most clearly flavored result: none of the depth of the pigeon is diluted by braising liquid, none is masked by caramelization from roasting, and none is lost to the water when boiled. What emerges from the steamer after 20 minutes is a pigeon that tastes entirely of itself plus the lemongrass and ginger that the steam has driven into the flesh. The m?m nhi dipping sauce — the same preparation used alongside steamed crab and steamed lobster — provides the aromatic and umami dimension that the deliberately unseasoned pigeon requires and that no other dipping preparation delivers with the same effect.`,
    ingredientSections: [
        {
            title: 'Pigeon',
            items: [
                { amount: 2, name: 'whole pigeons (b? câu / squab), 400-500g each', note: 'cleaned — squab (young pigeon) preferred for its more tender, milder flesh. Blanch briefly before steaming.' },
                { amount: 1, unit: 'tsp', name: 'coarse sea salt', note: 'rubbed inside the cavity' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'inside the cavity' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: '2 slices — placed inside the cavity' },
                { amount: 2, name: 'spring onions', note: 'tied — stuffed inside the cavity' },
            ],
        },
        {
            title: 'Beer-lemongrass steaming bath',
            items: [
                { amount: 330, unit: 'ml', name: 'Vietnamese beer (Saigon or 333)', note: 'one can — the coastal Phú Yên steaming medium' },
                { amount: 300, unit: 'ml', name: 'water' },
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and cut into pieces' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 4, name: 'kaffir lime leaves', note: 'torn' },
                { amount: 3, name: 'shallots', note: 'halved' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'M?m nhi ginger dipping sauce',
            items: [
                { amount: 4, unit: 'tbsp', name: 'm?m nhi (Phú Yên first-press fish sauce)' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'microplane-grated to almost liquid paste — the same technique as for gh? h?p s? m?m nhi' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'warm water' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced — optional' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 4, name: 'kaffir lime leaves, extra', note: 'finely shredded — scattered over the finished pigeon' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 2, name: 'limes, extra wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 2, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch briefly and prepare the cavity',
            description: 'Place the pigeons in cold water, bring to a boil and blanch for 3 minutes only — less than for braising. Drain and rinse thoroughly. Pat dry. Season the cavity with salt, white pepper, ginger slices, and the spring onion bundle. The brief blanching removes surface impurities without beginning the cooking process, so the steaming starts with a clean bird that tastes only of itself after the 20-minute steam.',
            tip: 'The 3-minute blanch for steaming pigeon is shorter than the 5-minute blanch for braising pigeon — when braising, the blanching also begins the cooking process and the times are additive. For steaming, the blanching is purely a cleaning step and should not begin cooking the flesh.',
        },
        {
            title: 'Build the aromatic beer steaming bath',
            description: 'Combine beer, water, bruised lemongrass, smashed ginger, torn kaffir lime leaves, halved shallots, and salt in the steamer base. Bring to a vigorous, full rolling boil. The steam must be strong and intensely aromatic — clearly smelling of lemongrass and kaffir lime — before the pigeons go in. For pigeon specifically, the steam environment is more important than for chicken because pigeon\'s denser flesh requires the aromatics to penetrate from a stronger steam cloud.',
            tip: 'Adding shallots to the beer-lemongrass steaming bath for pigeon (not used for seafood) is the adaptation that adds a gentle sweetness to the steam that complements the rich, dark pigeon flesh. The onion sweetness in the steam balances the mineral intensity of the pigeon in a way that is not necessary for the cleaner flavor of seafood.',
        },
        {
            title: 'Steam belly-side up — exactly 20-22 minutes',
            description: 'Place the pigeons belly-side up on the steaming rack. Cover tightly. Steam over maximum heat for 20 minutes for 400g pigeons, 22 minutes for 500g. Do not open the lid. Pigeon is done when: the skin has turned from raw grey-purple to a uniform pale golden-beige; juices at the thigh run clear when pierced; and one leg pulled from the body separates with moderate resistance — not easily (undercooked) and not with no resistance (overcooked).',
            tip: 'Belly-side up for pigeon steaming is the same positioning as for crab — it retains the internal juices and the small amount of pigeon fat in the cavity rather than draining them during cooking. The fat and juices that pool in the cavity during steaming are poured over the carved pieces when serving.',
        },
        {
            title: 'Rest and reserve the steaming liquid',
            description: 'Remove the pigeons from the steamer. Rest on a rack for 5 minutes. Pour the juices from the cavity over the resting birds — these accumulated juices during steaming are the most concentrated pigeon flavor in the entire preparation. Strain the steaming liquid from the base — it is a fragrant broth of beer, lemongrass, ginger, and pigeon drippings. Season and serve in small cups alongside the meal as a between-course palate cleanser.',
            tip: 'The steaming liquid for b? câu h?p is even more valuable than the equivalent liquid from seafood steaming — the pigeon drippings that fall into the beer-lemongrass bath during 20 minutes of steaming produce a broth with the specific richness of pigeon and the aromatic freshness of the Phú Yên steaming method together.',
        },
        {
            title: 'Make the m?m nhi ginger sauce',
            description: 'Grate fresh ginger on the finest available grater until it reaches an almost liquid paste consistency. Combine with m?m nhi, fresh lime juice, sugar, warm water, and optional chili. Stir to combine. Taste: the m?m nhi depth should arrive first, followed by the lime brightness, then the ginger warmth building slightly. This is the same sauce used for gh? h?p and tôm hùm — applied here to pigeon for the first time in the Phú Yên culinary logic.',
            tip: 'The application of the m?m nhi ginger sauce — developed for Phú Yên\'s finest steamed seafood — to pigeon is the creative move that makes b? câu h?p m?m nhi a specifically Phú Yên dish rather than merely a steamed pigeon preparation. The sauce transforms the pigeon eating experience in the same way it transforms crab or lobster: it provides the aromatic dimension that the simple steaming deliberately omits.',
        },
        {
            title: 'Carve and serve',
            description: 'Carve each pigeon: remove the legs first, then the wings, then split the breast down the center. Arrange on a plate — the skin should be pale golden, the flesh visible at the cut surfaces a deep, dark purple-brown. Scatter shredded kaffir lime leaves, rau ram, and sliced spring onion. Pour the reserved cavity juices over the arranged pieces. Serve with the m?m nhi ginger sauce, the fragrant steaming broth in small cups, steamed rice, and lime wedges.',
            tip: 'The deep purple-brown color of steamed pigeon flesh is not a sign of undercooking — it is the natural color of pigeon meat, which is significantly darker than chicken even when fully cooked. The darkness comes from the high myoglobin content of the dense, iron-rich pigeon muscle. New eaters of pigeon are often surprised by this color; it is correct.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
