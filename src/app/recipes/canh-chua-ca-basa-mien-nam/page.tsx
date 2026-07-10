'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-chua-ca-basa-mien-nam',
    title: `Southern Vietnamese Sour Fish Soup`,
    subtitle: `Canh Chua Cá Basa Miền Nam — The Mekong Delta's defining sour soup: basa fish with tamarind, pineapple, tomato, and okra in a broth that balances four flavours perfectly.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Canh chua is the sour soup that the Mekong Delta considers its most representative dish — a preparation that exists in every province of Vietnam but reaches its most balanced, most complex expression in the southern delta provinces where the full arsenal of souring agents (tamarind, pineapple, starfruit, tomato), sweeteners (sugar, pineapple), and the specific vegetables of the delta (bắp chuối, bông súng, giá đỗ, đậu bắp) are all simultaneously available and combined in a single pot.\n\nThe basa (Pangasianodon hypophthalmus — the striped catfish, also called swai or basa in Western markets) is the fish that modern canh chua is most often made with in both Vietnam and globally — a mild, white-fleshed catfish farmed throughout the Mekong Delta in enormous quantities, prized for its clean flavour, firm texture when fresh, and generous fat content that keeps it moist during the brief cooking it receives in the hot sour broth. The fat in basa fillets is the element that makes the fish compatible with the aggressive sourness of the canh chua broth — lean fish would become dry and flavourless against the tamarind-pineapple acid, but basa's fat provides a richness that balances and softens the sourness.\n\nThe four-flavour balance of canh chua — chua (sour from tamarind), ngọt (sweet from pineapple and sugar), mặn (salty from fish sauce), and béo (rich from the fish fat and the broth's body) — is the aesthetic target that every southern Vietnamese cook calibrates instinctively. No written recipe can specify these ratios precisely because the sourness of each tamarind batch, the sweetness of each pineapple, and the saltiness of each brand of fish sauce varies. The cook tastes and adjusts continuously until the four flavours arrive simultaneously in a single spoonful, none dominant, all present.`,
    ingredientSections: [
        {
            title: `Fish`,
            items: [
                { amount: 500, unit: 'g', name: `fresh basa fillet (ca basa / Pangasianodon hypophthalmus)`, note: `cut into 4-5cm pieces; substitute: any mild white fish — catfish, barramundi, tilapia` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `light rub before adding to broth` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
            ],
        },
        {
            title: `Souring base`,
            items: [
                { amount: 40, unit: 'g', name: `tamarind block (me chua)`, note: `dissolved in 150ml warm water, strained — the primary souring agent` },
                { amount: 150, unit: 'g', name: `fresh pineapple (dua), cut into chunks`, note: `adds sweetness and secondary sourness` },
                { amount: 3, name: `medium ripe tomatoes, quartered` },
            ],
        },
        {
            title: `Broth base`,
            items: [
                { amount: 1.2, unit: 'L', name: `water or light fish stock` },
                { amount: 3, name: `shallots, halved` },
                { amount: 2, name: `garlic cloves, smashed` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)`, note: `adjust to taste` },
                { amount: 1, unit: 'tsp', name: `sugar`, note: `adjust against tamarind sourness` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Mekong Delta vegetables`,
            items: [
                { amount: 100, unit: 'g', name: `dau bap (okra)`, note: `cut into 2cm sections — the classic canh chua vegetable` },
                { amount: 100, unit: 'g', name: `gia do (bean sprouts)`, note: `raw — added last` },
                { amount: 100, unit: 'g', name: `rau muong (water spinach)`, note: `cut 5cm` },
                { amount: 2, name: `stalks celery (ca chua tay)`, note: `sliced — adds aromatic depth` },
            ],
        },
        {
            title: `Rau ôm and garnish (mandatory)`,
            items: [
                { amount: 1, name: `bunch rau om (rice paddy herb / Limnophila aromatica)`, note: `the non-negotiable canh chua herb — added raw at serving` },
                { amount: 3, name: `spring onions, sliced` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
            ],
        },
    ],
    steps: [
        {
            title: `Extract the tamarind`,
            description: `Break tamarind block into pieces. Place in a bowl with 150ml warm water. Press and massage the flesh with your fingers for 3-4 minutes until completely dissolved into the water — only the seeds and fibrous strings remain. Strain through a fine sieve, pressing firmly to extract all liquid. Discard solids. The strained tamarind liquid should be deep brown, intensely sour, and smell of the fruit's distinctive sweet-sour aroma. This liquid is the primary souring agent and the backbone of canh chua's flavour identity — its sourness is rounder and more complex than vinegar or lime, with fruity depth that neither of those substitutes can replicate.`,
            tip: `Tamarind sourness varies significantly by batch — some blocks are intensely sour, others are milder. Always taste the strained liquid before adding it to the broth and adjust the quantity accordingly. A very sour batch may require only 100ml of the extracted liquid; a mild batch may need all 150ml plus a squeeze of lime to reach the correct acidity. This batch-by-batch calibration is why canh chua cannot be made by following a fixed recipe — the cook must taste and adjust throughout.`,
        },
        {
            title: `Build the sour broth`,
            description: `Heat oil in a wide pot over medium heat. Sauté shallots and garlic until golden — 2 minutes. Add pineapple chunks and cook 2-3 minutes until the edges begin to caramelise slightly — this step converts the pineapple's sharp raw acidity into a rounder, sweeter note. Add quartered tomatoes and stir 2 minutes until beginning to soften. Pour in water or fish stock and bring to a boil. Add strained tamarind liquid. Season with fish sauce, sugar, and salt. Simmer 10 minutes. Taste the broth — it should be clearly sour from the tamarind, sweet from the pineapple, and savoury from the fish sauce. Adjust: too sour → add sugar; too sweet → add tamarind; too flat → add fish sauce.`,
            tip: `The pineapple caramelisation before adding liquid is the technique that prevents the raw, sharp pineapple acidity from dominating the finished broth. Raw pineapple added directly to simmering broth contributes a harsh, one-dimensional sourness; 2-3 minutes of direct heat converts the surface sugars and reduces the bromelain enzyme activity, producing a rounder, sweeter contribution. The same bromelain that makes raw pineapple tenderise meat is deactivated by heat — adding the caramelised pineapple prevents the enzyme from working on the fish proteins during cooking and producing a mushy texture.`,
        },
        {
            title: `Add vegetables in sequence`,
            description: `Add okra sections to the simmering broth — they need 3-4 minutes to soften slightly while retaining a slight bite. Add water spinach 2 minutes after okra — it needs only 2 minutes. Add celery with the water spinach. The sequencing ensures each vegetable reaches its correct texture simultaneously rather than all becoming uniformly soft.`,
        },
        {
            title: `Poach the basa fish`,
            description: `Season basa pieces lightly with salt and pepper. Lower gently into the simmering broth — do not stir. Poach uncovered for 4-6 minutes until the flesh is just opaque throughout and flakes when pressed with a chopstick. Basa's high fat content means it stays moist even when fully cooked — it is more forgiving than lean fish. Remove from heat immediately. Add raw bean sprouts — they wilt in the residual heat within 60 seconds to the correct just-tender texture.`,
            tip: `The fat content of basa (Pangasianodon hypophthalmus) is approximately 10-15% — significantly higher than cod (0.7%), tilapia (4%), or snapper (2%). This fat is what makes basa specifically compatible with canh chua's aggressive sourness: the fat molecules coat the tastebuds during eating, moderating the acid's sharp impact and allowing the sweetness and umami to be perceived alongside it. Lower-fat fish in the same preparation feel "sour" first because nothing moderates the acid's immediate impact. This is the food chemistry reason why basa, cá lóc, and catfish dominate canh chua preparations while lean sea fish are used less frequently.`,
        },
        {
            title: `Final seasoning — the four-flavour calibration`,
            description: `Before adding garnishes, taste the broth one final time and calibrate all four flavours simultaneously. Sour (chua): should be the leading note — present immediately. Sweet (ngọt): should arrive after the sour, softening it. Salty (mặn): should be present throughout, amplifying both. Rich (béo): should be felt as a fullness from the fish fat in the broth. If any element is absent or dominant, adjust with: more tamarind liquid (too sweet), more sugar (too sour), more fish sauce (too flat), a few drops of neutral oil (too sharp). The four arriving together is the target.`,
        },
        {
            title: `Serve with rau ôm`,
            description: `Ladle canh chua into bowls ensuring each bowl has fish, vegetables, pineapple, and generous broth. Scatter spring onion, fried shallots, and coarse black pepper. Place a generous amount of raw rau ôm fronds directly on the hot broth surface — the residual heat wilts them in 20-30 seconds, releasing their lemony-cumin volatile oils into the broth. This final rau ôm addition is the element that transforms canh chua from a sour fish soup into something specifically southern Vietnamese. Serve with lime and chili alongside steamed rice. The broth is poured over the rice as well as drunk directly from the bowl.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}