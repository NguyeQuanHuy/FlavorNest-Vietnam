'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'khau-nhuc-cao-bang',
    title: `Cao Bằng Braised Pork Belly`,
    subtitle: `Khâu Nhục Cao Bằng — The Hoa community's slow-braised pork belly with fermented tofu, taro, and nam ru sauce — a six-hour dish from the Chinese border.`,
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '6 hrs',
    rating: 4.9,
    baseServings: 6,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Khâu nhục (扣肉, kòu ròu in Mandarin — "pressed meat") is the dish that most directly expresses the Chinese cultural heritage of the Hoa (ethnic Chinese) communities that have lived in Cao Bằng for centuries, trading across the border with Guangxi and maintaining culinary traditions that link the northeastern Vietnamese highland kitchen to southern Chinese Hakka and Cantonese cooking. The name describes the final presentation: the pork belly, cooked until completely tender, is inverted from its braising vessel onto a plate so the fat layer faces up — "pressed" into the serving position.\n\nThe Cao Bằng version of khâu nhục differs from the Cantonese original and from the versions made by Hoa communities in Hội An or Sóc Trăng in several specific ways. The primary seasoning agent is tương nam ru — a locally produced fermented soybean paste that is the Cao Bằng Hoa community's specific condiment, darker and more complex than standard tương đen, with a flavour that combines the umami of Chinese doubanjiang with the specific microbiological character of the Cao Bằng highland fermentation environment. The pork belly is layered with taro (khoai sọ) rather than the preserved mustard greens (梅菜, meicai) of the Hakka original — taro grown in the cold Cao Bằng soil absorbs the braising liquid with a density and earthiness that the Chinese vegetable cannot match in this highland context.\n\nThe dish requires six hours of cooking — not a shortened modern adaptation, but the full traditional duration that converts the pork belly's collagen to gelatin, renders the fat to a trembling, barely-solid state, and reduces the braising liquid to a sauce so concentrated that a single spoonful coats the entire bowl of rice. This is festival food: made for Tết, for weddings, for the arrival of important guests.`,
    ingredientSections: [
        {
            title: `Pork belly`,
            items: [
                { amount: 1, unit: 'kg', name: `pork belly (ba chi heo)`, note: `skin-on, a single flat piece — the skin must remain intact throughout cooking` },
                { amount: 2, unit: 'L', name: `water`, note: `for initial blanching` },
                { amount: 3, unit: 'tbsp', name: `soy sauce`, note: `for initial colouring rub` },
                { amount: 500, unit: 'ml', name: `neutral oil`, note: `for deep-frying the rubbed pork belly` },
            ],
        },
        {
            title: `Tương nam ru braising sauce (the Cao Bằng distinction)`,
            items: [
                { amount: 4, unit: 'tbsp', name: `tuong nam ru (Cao Bằng fermented soybean paste)`, note: `substitute: 3 tbsp Chinese doubanjiang (豆瓣酱) + 1 tbsp miso paste, combined` },
                { amount: 3, unit: 'tbsp', name: `soy sauce` },
                { amount: 2, unit: 'tbsp', name: `dark soy sauce (xi dau den)`, note: `for colour depth` },
                { amount: 2, unit: 'tbsp', name: `Shaoxing rice wine (ruou Shao Xing)`, note: `or dry sherry` },
                { amount: 30, unit: 'g', name: `rock sugar (duong phen)` },
                { amount: 1, unit: 'tbsp', name: `oyster sauce` },
                { amount: 500, unit: 'ml', name: `water or light stock` },
            ],
        },
        {
            title: `Aromatics`,
            items: [
                { amount: 2, name: `star anise (hoi huong)` },
                { amount: 1, name: `cinnamon stick, 5cm` },
                { amount: 3, name: `cloves (dinh huong)` },
                { amount: 5, name: `garlic cloves, smashed` },
                { amount: 4, name: `slices fresh ginger` },
                { amount: 2, name: `spring onions, knotted` },
            ],
        },
        {
            title: `Taro layer`,
            items: [
                { amount: 500, unit: 'g', name: `taro (khoai so)`, note: `peeled, cut into 1.5cm thick slices — same dimensions as the pork belly slices; wear gloves when peeling` },
                { amount: 2, unit: 'tbsp', name: `soy sauce`, note: `for coating taro before frying` },
                { amount: 200, unit: 'ml', name: `neutral oil`, note: `for frying the taro` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 6, name: `portions steamed white rice` },
                { amount: 1, name: `bunch spring onion, sliced` },
                { amount: 1, unit: 'tsp', name: `black pepper` },
            ],
        },
    ],
    steps: [
        {
            title: `Blanch and colour the pork belly`,
            description: `Place whole pork belly skin-side down in a pot of cold water. Bring to a boil and blanch 10 minutes — skimming foam continuously. Remove and rinse. Pat the skin completely dry. Rub the skin with soy sauce while still warm — the heat helps the soy sauce penetrate the skin's proteins. Leave 10 minutes until the skin is dry and darker. Heat 500ml oil in a wok to 180°C. Lower the pork belly skin-side down into the oil — it will spit violently. Fry skin-side down for 3-4 minutes until the skin is deep golden-brown and beginning to blister. Remove immediately and submerge in cold water for 5 minutes — the thermal shock causes the skin to contract and form the characteristic blistered texture that absorbs the braising sauce.`,
            tip: `The fry-then-cold-water shock step is the technique that produces the distinctive texture of khâu nhục skin — blistered, porous, and able to absorb the braising liquid throughout its depth rather than just on the surface. Skin that is not fried first remains smooth and impermeable; the braising liquid glazes it but does not penetrate. The fried-and-shocked skin opens microscopically, allowing the tương nam ru braising sauce to work into the skin layer during the long braise, producing skin that is simultaneously gelatinous, deeply flavoured, and falling-apart tender.`,
        },
        {
            title: `Slice and marinate`,
            description: `Remove pork belly from cold water. Slice crosswise into 1.5cm thick pieces — keeping the piece intact by not cutting all the way through, or slicing fully and reassembling. Combine tương nam ru, soy sauce, dark soy sauce, Shaoxing wine, rock sugar, and oyster sauce. Mix until sugar begins to dissolve. Coat all surfaces of the pork belly slices thoroughly with this marinade. Rest 30 minutes at room temperature. The fermented soybean paste's amino acids and enzymes will begin penetrating the meat surface during this period.`,
        },
        {
            title: `Fry the taro`,
            description: `Coat taro slices with soy sauce and leave 5 minutes. Heat 200ml oil in a pan over medium-high heat. Fry taro slices in batches until golden on both sides — 3-4 minutes per side. The frying creates a slightly crispy exterior that prevents the taro from disintegrating during the long braise while allowing it to absorb the braising liquid through the porous interior. Set aside. Do not crowd the pan — crowded taro steams rather than fries and produces a soft exterior that dissolves before the braise is complete.`,
        },
        {
            title: `Assemble in braising vessel`,
            description: `In a deep heatproof bowl or individual braising vessel that fits inside a steamer: arrange alternating slices of pork belly (skin-side down) and fried taro in a single packed layer. The pork and taro pieces should fit snugly — they will shrink during the long braise. Place smashed garlic, ginger slices, star anise, cinnamon, cloves, and knotted spring onion between the layers. Pour the remaining marinade and 500ml water or stock over everything. The liquid should almost cover the pork and taro.`,
        },
        {
            title: `Steam for 4 to 5 hours`,
            description: `Place the covered braising vessel in a large steamer. Steam over vigorously boiling water for 4-5 hours — checking the water level every 45-60 minutes and replenishing with boiling water. Do not open the braising vessel lid during cooking. The steam environment cooks the pork at a steady 100°C without the liquid reduction that would occur in oven braising — producing a more evenly cooked, more tender result than any oven method. After 4 hours, the pork belly fat will have rendered almost completely and the meat will be falling apart. After 5 hours, the collagen has fully converted to gelatin and the texture is trembling.`,
            tip: `The steaming method rather than oven braising is the critical distinction of authentic khâu nhục. Oven braising produces reduction and concentration of the braising liquid simultaneously with the meat cooking — the liquid becomes very concentrated before the meat is fully tender. Steaming maintains a constant liquid volume while the meat cooks slowly in a sealed environment — the pork renders into its own braising liquid, producing a sauce that is naturally rich from the rendered fat and gelatin rather than from reduction. The result is silkier and less aggressively seasoned.`,
        },
        {
            title: `Invert and serve`,
            description: `Remove the braising vessel from the steamer. Place a deep serving plate over the top of the braising vessel. Invert firmly in one confident motion — the khâu nhục will release from the vessel and sit on the plate with the skin layer now facing up, the taro visible beneath, and the concentrated braising sauce pooled around the edges. The inverted presentation reveals the glistening, deep mahogany skin on top — this visual is the "pressed meat" of the name. Pour any remaining braising liquid from the vessel over the inverted meat. Scatter spring onion and black pepper. Serve immediately with steamed rice — each person spoons portions of pork, taro, and sauce over their rice.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}