'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-chua-ca-tam-dak-lak',
    title: `Đắk Lắk Sturgeon Sour Soup`,
    subtitle: `Canh Chua Cá Tầm Đắk Lắk — Highland sturgeon in a sour broth built on me rừng (wild tamarind) from the Ea Súp forest, with highland vegetables.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Canh chua cá tầm Đắk Lắk is the highland adaptation of Vietnam's most beloved sour fish soup — a dish that exists in every region of the country but takes on a completely different character when the souring agent is me rừng (wild forest tamarind, Dialium cochinchinense) from the Ea Súp district forests of western Đắk Lắk, and the fish is highland-farmed sturgeon from the cold lakes of the province rather than the catfish, snakehead, or elephant ear fish of the Mekong Delta original.\n\nMe rừng is a wild fruit that grows in the dry deciduous forests of Đắk Lắk and Đắk Nông — small, dark, grape-like clusters of pods with a thin edible flesh that is intensely sour and simultaneously resinous, with a forest-floor earthiness that commercial tamarind (me nuôi) entirely lacks. The Ê Đê and M'Nông communities of the highland forests have used me rừng as a souring agent for generations, and its flavour is the defining element of Đắk Lắk canh chua — a sourness that is wilder, more complex, and more aromatic than the clean, straightforward acid of commercial tamarind.\n\nThe sturgeon used is farmed in the Ea Súp reservoir and the highland lakes of the province — the same cool, clean water environment that produces Đà Lạt's Tuyền Lâm sturgeon, but at a slightly lower altitude and warmer temperature, giving Đắk Lắk sturgeon a marginally fattier, more richly flavoured flesh. The combination of wild tamarind sourness, sturgeon fat, and highland vegetables — bạc hà (taro stem), cà chua, dứa (pineapple from the nearby plantation districts) — produces a canh chua that is simultaneously familiar in structure and entirely specific in flavour to the province.`,
    ingredientSections: [
        {
            title: `Sturgeon`,
            items: [
                { amount: 600, unit: 'g', name: `fresh sturgeon fillet or steak (ca tam Dak Lak)`, note: `skin-on, 3-4cm thick sections; substitute: large catfish steak or barramundi` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `rubbed on fish 5 min then rinsed` },
                { amount: 1, unit: 'tsp', name: `ground turmeric`, note: `rubbed on fish after rinsing — the highland canh chua addition` },
            ],
        },
        {
            title: `Me rừng souring base (wild forest tamarind)`,
            items: [
                { amount: 60, unit: 'g', name: `me rung (Dialium cochinchinense — wild forest tamarind)`, note: `fresh or dried pods — crack pods and soak in 200ml warm water 15 min, extract liquid; substitute: 40g commercial tamarind block + 1 tsp rice vinegar + 0.5 tsp dark brown sugar to approximate the forest note` },
                { amount: 200, unit: 'ml', name: `warm water`, note: `for soaking and extracting me rung` },
            ],
        },
        {
            title: `Broth and vegetables`,
            items: [
                { amount: 1.2, unit: 'L', name: `light fish or chicken stock`, note: `or water — the me rung provides the flavour base` },
                { amount: 2, name: `medium tomatoes, quartered` },
                { amount: 150, unit: 'g', name: `pineapple (dua), cut into chunks`, note: `fresh — adds tropical sweetness` },
                { amount: 150, unit: 'g', name: `bac ha (taro stem / dọc mùng)`, note: `peeled and cut into 4cm pieces; substitute: celery stalks` },
                { amount: 100, unit: 'g', name: `bean sprouts (gia do)`, note: `added raw at serving` },
                { amount: 3, name: `shallots, halved` },
                { amount: 2, name: `garlic cloves, smashed` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
                { amount: 2, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Highland garnish`,
            items: [
                { amount: 1, name: `bunch rau om (rice paddy herb / Limnophila aromatica)`, note: `the essential canh chua herb — lemony, slightly cumin-like; substitute: dill + a few drops lime juice` },
                { amount: 1, name: `bunch ngo gai (sawtooth coriander)` },
                { amount: 3, name: `spring onions, sliced` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 2, name: `limes, wedged` },
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
            title: `Extract the me rừng souring liquid`,
            description: `Crack open the dark me rừng pods by pressing firmly between thumb and forefinger — the thin shell splits to reveal the dark, sticky flesh surrounding a hard seed. Remove the flesh and seeds from the shell. Combine flesh and seeds in a bowl with 200ml warm water. Press and massage the flesh with your fingers for 3-4 minutes until it dissolves into the water, leaving only the hard seeds and fibrous membranes. Strain through a fine sieve, pressing solids firmly. The resulting liquid should be deep brown-black, intensely sour, and smell of wild fruit and forest floor — more complex and earthier than commercial tamarind liquid. Taste: adjust souring quantity based on intensity.`,
            tip: `Me rừng sourness varies significantly by season and dryness of the pods. Fresh me rừng (available in Đắk Lắk markets July-October) is less concentrated than dried pods. If sourcing from Vietnamese online suppliers or community markets in Germany, dried me rừng pods are more commonly available — use 40g dried for this recipe. The forest-floor earthiness of me rừng is its defining quality over commercial tamarind; the commercial tamarind substitute suggested above (tamarind + rice vinegar + dark brown sugar) approximates but cannot replicate this complexity.`,
        },
        {
            title: `Prepare the sturgeon`,
            description: `Rub sturgeon sections with salt, rest 5 minutes, rinse. Rub ground turmeric over all surfaces — the turmeric in Đắk Lắk canh chua is a highland adaptation not found in the Mekong Delta original. It colours the fish golden and adds an earthy warmth that complements the me rừng's sourness. Pat dry and set aside. The sturgeon's skin releases collagen into the broth during cooking — leave skin on for maximum body in the finished soup.`,
        },
        {
            title: `Build the sour broth`,
            description: `Heat neutral oil in a large pot over medium heat. Sauté halved shallots cut-side down until golden on the flat surface, 3 minutes. Add smashed garlic and stir 30 seconds. Add pineapple chunks and cook 2 minutes until beginning to caramelise at the edges. Add quartered tomatoes and stir — they will break down quickly. Add stock, me rừng souring liquid, fish sauce, sugar, and salt. Bring to a simmer. Add bạc hà pieces. Simmer 10 minutes. Taste the broth — it should be sour-forward, faintly sweet from the pineapple and tomato, savoury from the fish sauce, and have the distinctive me rừng forest note underneath.`,
            tip: `The pineapple-caramelise step before adding liquid is the technique that prevents the pineapple from tasting raw and sharp in the finished soup. 2 minutes of direct heat in oil converts the surface sugars of the pineapple and softens the acidity of unripe pineapple. This step is used in professional canh chua preparation throughout Vietnam but is rarely documented in home recipes.`,
        },
        {
            title: `Cook the sturgeon in the broth`,
            description: `Lower sturgeon sections gently into the simmering broth — do not drop, which breaks the delicate flesh. The broth should return to a gentle simmer within 60 seconds. Cook uncovered for 8-10 minutes depending on thickness — the flesh should be just opaque through the thickest part and flake slightly when pressed with a chopstick. The sturgeon skin will have softened and begun releasing collagen, giving the broth a faint silkiness. Do not boil vigorously — the sturgeon flesh is more delicate than catfish and falls apart at high heat.`,
            tip: `Đắk Lắk sturgeon in canh chua cooks faster than catfish because its fat content is higher and its protein structure is looser at the same temperature. The visual cue: the flesh colour transitions from translucent pink to opaque white at the edges. When the opacity has reached the thickest centre point, the fish is done. Remove from heat immediately — residual heat in the broth will continue cooking the fish for 60-90 more seconds after the flame is off.`,
        },
        {
            title: `Finish and adjust seasoning`,
            description: `Remove from heat. Taste the broth and adjust: if too sour, add 1 tsp sugar and stir; if not sour enough, add 1-2 tbsp more me rừng liquid or a squeeze of lime; if underseasoned, add fish sauce in small increments. The correct balance is sour-leading, then sweet, then savoury — with the me rừng forest note as the aromatic background. This balance differs from southern canh chua which is more aggressively sweet and bright; the Đắk Lắk highland version is more austere and complex.`,
        },
        {
            title: `Serve with highland herbs`,
            description: `Ladle soup into large bowls — place sturgeon sections in first, then ladle broth and vegetables over. Add a small handful of raw bean sprouts directly to each bowl — they wilt in the hot broth within 30 seconds, becoming just tender while retaining a slight crunch. Scatter rau ôm and ngò gai generously over each bowl — in canh chua, rau ôm is added at the last second and not cooked, so its lemony-cumin aroma is preserved at full intensity. Add spring onion and chili. Serve with lime wedges and steamed rice. The broth is drunk from the bowl throughout the meal — in Đắk Lắk, the ratio of broth to rice is equal.`,
            tip: `Rau ôm (Limnophila aromatica) is the herb without which canh chua is incomplete — its unique lemony-cumin aroma is what distinguishes canh chua from any other Vietnamese sour soup. In Germany, rau ôm is occasionally available fresh at Vietnamese grocers in major cities; frozen is more reliable. If unavailable, a combination of fresh dill (for the grassy top note) and a small amount of cumin seed (for the deeper note) approximates the flavour but not the texture. Grow rau ôm from seed on a warm German windowsill — it germinates easily and produces enough for cooking within 6 weeks.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}