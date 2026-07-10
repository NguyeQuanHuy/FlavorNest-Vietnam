'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-hap-gung-hanh-kieu-hoa',
    title: `Cantonese-Style Steamed Fish`,
    subtitle: `Cá Hấp Gừng Hành Kiểu Hoa — Whole fish steamed with ginger and spring onion, finished with hot oil and aged soy sauce — the purest expression of Chinese-Vietnamese coastal cooking.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cá hấp gừng hành kiểu Hoa is the steamed fish preparation that the Cantonese and Teochew communities of Chợ Lớn brought to southern Vietnam and that has become one of the most universally admired techniques in the Vietnamese-Chinese kitchen — a whole fresh fish steamed over vigorously boiling water for exactly the right number of minutes, then finished with a cascade of julienned ginger and spring onion, a drizzle of aged soy sauce and sesame oil, and finally a pour of smoking-hot neutral oil that sizzles on contact with the aromatics, releasing their volatile compounds in a single dramatic burst of fragrance.\n\nThe technique is deceptively simple but requires precise execution at every step. The fish must be truly fresh — this preparation has nowhere to hide off-flavours, no sauce to mask, no spice to distract. The steaming time must be exact — one minute too long produces dry, flaky flesh that has lost its natural sweetness; one minute too short produces flesh that has not yet released from the bone. The oil must be genuinely smoking — below 190°C it does not flash-volatilise the ginger and spring onion aromatics, producing a flat pour rather than the explosive sizzle that is the dish's theatrical and flavour climax.\n\nIn the Hoa communities of Chợ Lớn and the coastal cities of Vietnam, this preparation is the test of a cook's fundamental skill — because it requires neither elaborate technique nor complex seasoning, only the discipline to buy the freshest fish available and the restraint to not overcook it. A perfectly executed cá hấp gừng hành is considered the most honest expression of a fish's quality.`,
    ingredientSections: [
        {
            title: `Fish`,
            items: [
                { amount: 1, name: `whole fresh fish (600-800g)`, note: `sea bass (ca vuoc), snapper (ca hong), grouper (ca song), or bream — scaled, gutted, head on; freshness is the entire dish` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `cleaning rub` },
                { amount: 1, unit: 'tbsp', name: `Shaoxing rice wine (ruou Shao Xing)`, note: `rubbed inside cavity and over skin — removes fishiness` },
                { amount: 3, name: `slices fresh ginger`, note: `placed inside cavity` },
                { amount: 2, name: `spring onion stalks, knotted`, note: `placed inside cavity` },
            ],
        },
        {
            title: `Hot oil finish aromatics`,
            items: [
                { amount: 40, unit: 'g', name: `fresh ginger (gung tuoi)`, note: `julienned into very fine 6cm threads — the finer the better` },
                { amount: 4, name: `spring onions, julienned into 6cm fine threads`, note: `white and green parts both used` },
                { amount: 2, name: `fresh red chili (ot do), julienned thin`, note: `optional — for colour and mild heat` },
            ],
        },
        {
            title: `Seasoning sauce`,
            items: [
                { amount: 3, unit: 'tbsp', name: `light soy sauce (xi dau nhat)`, note: `or aged soy sauce (xi dau lao) for more depth` },
                { amount: 1, unit: 'tbsp', name: `Shaoxing rice wine` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
                { amount: 2, unit: 'tbsp', name: `warm water`, note: `dilutes the soy to a pourable consistency` },
            ],
        },
        {
            title: `For the hot oil pour`,
            items: [
                { amount: 4, unit: 'tbsp', name: `neutral oil (dau an)`, note: `must reach smoking point — approximately 190-200°C` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
                { amount: 1, name: `bunch cilantro (rau mui)`, note: `scattered over finished fish` },
            ],
        },
    ],
    steps: [
        {
            title: `Select and prepare the fish`,
            description: `The fish must be bought and cooked the same day — this preparation is not suitable for fish that has been refrigerated overnight. Signs of genuine freshness: bright, clear eyes (not sunken or cloudy); bright red gills; firm flesh that springs back when pressed; no fishy smell (fresh fish smells of the sea, not of fish). Score the fish 3 times diagonally on each side — deep enough to reach the bone. Rub with salt, rest 5 minutes, rinse. Rub Shaoxing wine over the skin and inside the cavity. Stuff the cavity with ginger slices and knotted spring onion. Place the fish on a heatproof plate that fits inside your steamer.`,
            tip: `The scoring of steamed fish is both structural and culinary. Structural: the cuts allow steam to penetrate the thick dorsal flesh, ensuring even cooking throughout the fish rather than having the thin belly flesh overcooked when the thick back is still underdone. Culinary: the cuts allow the seasoning sauce poured after steaming to flow into the flesh, flavouring the interior rather than sitting only on the surface. Score confidently and deeply — hesitant, shallow cuts do not achieve either function.`,
        },
        {
            title: `Set up the steamer correctly`,
            description: `Bring water in the steamer base to a full, vigorous boil before placing the fish — the fish must encounter maximum steam immediately. Use a rack or chopsticks to elevate the plate above the water level — the fish steams, not poaches. The plate must be large enough to hold the fish flat but small enough to fit inside the steamer with 2-3cm clearance on all sides for steam circulation. Place the fish plate in the steamer only when the water is at a full rolling boil.`,
        },
        {
            title: `Steam — timing is everything`,
            description: `Cover and steam over vigorous boiling water. Timing by fish weight: 600g fish — 8 minutes; 700g — 9 minutes; 800g — 10 minutes. Do not open the lid during steaming. The fish is done when the flesh at the deepest score cut is just opaque and begins to separate from the bone when pressed with a chopstick. The eyes will have turned white and slightly protruded. Remove from steamer immediately — residual heat continues cooking the fish for 60-90 more seconds after leaving the steamer.`,
            tip: `The steaming time calculation — approximately 1 minute per 80g of fish weight — is the Cantonese standard used in Hong Kong and Chợ Lớn professional kitchens. At home, err on the side of slightly underdone rather than overdone: a fish that is 30 seconds underdone can be returned to the steamer; a fish that is 2 minutes overdone cannot be rescued. The moment the flesh at the thickest score cut turns from translucent to opaque is the correct endpoint.`,
        },
        {
            title: `Discard the steaming liquid`,
            description: `After removing the fish from the steamer, carefully tilt the plate and pour off the accumulated steaming liquid — this liquid contains the fishy compounds released during steaming and will make the finished sauce muddy and unpleasant if left on the plate. This step is performed at every professional Cantonese-Vietnamese steamed fish table and is the step most home cooks skip, producing a finished dish with a slightly muddy, less clean flavour than the restaurant version.`,
            tip: `The steaming liquid discard is the single most impactful small technique in cá hấp gừng hành. The liquid that pools on the plate during steaming contains denatured myoglobin, dissolved fat compounds, and volatile fishy aldehydes — exactly the off-flavours that the clean preparation is designed to minimise. Pouring it off before adding the seasoning sauce ensures the sauce interacts only with the clean-steamed fish flesh.`,
        },
        {
            title: `Arrange aromatics and add sauce`,
            description: `Scatter the julienned ginger threads, spring onion julienne, and red chili (if using) over the entire surface of the steamed fish — pile them generously, more than seems appropriate. They will be flash-cooked by the hot oil in the next step. Combine soy sauce, Shaoxing wine, sugar, sesame oil, and warm water. Pour this sauce mixture over and around the fish — it should pool slightly around the base of the fish on the plate.`,
        },
        {
            title: `The hot oil pour — the climax`,
            description: `Heat neutral oil in a small saucepan over high heat until it reaches 190-200°C — it should just begin to smoke. Test with a single piece of ginger julienne: it should sizzle immediately and explosively on contact with the oil. When the oil is at temperature, pour it in a thin, continuous stream directly over the mounded ginger and spring onion on the fish. The oil will sizzle and flash on contact, releasing the volatile oils from the ginger and spring onion in an instant burst of fragrance. The entire table will smell of the dish simultaneously. Scatter cilantro. Serve immediately.`,
            tip: `The smoking-oil pour is the most theatrical and most technically critical moment of cá hấp gừng hành. The oil at 190-200°C flash-volatilises the gingerol and shogaol compounds in the ginger and the thiosulfinates in the spring onion simultaneously — the burst of aroma that fills the room in the first 5 seconds of contact is the entire aromatic payload of these two ingredients delivered at once. Oil below 180°C produces a slower, less complete volatilisation — the aromatics release over the next few minutes rather than immediately, producing a flat result. There is no substitute for genuinely hot oil.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}