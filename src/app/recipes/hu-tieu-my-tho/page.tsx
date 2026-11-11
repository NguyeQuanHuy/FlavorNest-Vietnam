'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'hu-tieu-my-tho',
    title: `Hủ Tiếu Mỹ Tho (Mekong Pork & Seafood Clear Noodle Soup)`,
    subtitle: `Hủ Tiếu Mỹ Tho — chewy Gò Cát rice noodles in a crystal-clear pork-bone broth sweetened with dried squid, topped with sliced pork, shrimp and fried garlic.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '3 hrs 30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/hu-tieu-my-tho.jpg',
    intro: `Hủ tiếu Mỹ Tho is the breakfast of the Mekong Delta's oldest river port — Mỹ Tho, on the northern branch of the Mekong (Tiền Giang, merged into Đồng Tháp province in 2025), where the noodle stalls along the riverbank open before 6 am for boat crews and market traders. The word hủ tiếu comes from the Teochew Chinese kuay teow — rice noodles carried to the delta by Chaozhou merchants in the 18th and 19th centuries — but Mỹ Tho made the dish its own. Southerners name it in the same breath as phở in Hanoi and bún bò in Huế: the defining bowl of a city.

The noodle is the reason the dish carries the city's name. Authentic hủ tiếu Mỹ Tho is made from Gò Cát rice, a hard, high-amylose variety grown in the brackish fields around the town. The rice is soaked, stone-ground, steamed into thin sheets, sun-dried and cut into fine strands. High amylose means the starch retrogrades firmly as it dries, so the noodles stay dai — springy and separate — even after minutes in hot broth, where softer rice noodles would turn limp. In Europe, look for dried "hủ tiếu Mỹ Tho" or "rice stick 1 mm" in Asian supermarkets; the Thai sen lek is the closest substitute.

The broth is a clear sweet stock of pork bones, dried squid and dried shrimp, with daikon for natural sweetness and rock sugar to round it. Clarity is technique, not luck: the bones are blanched to remove blood proteins, and the stock is held at a bare simmer — around 90 °C — for at least two and a half hours. At a rolling boil, fat is churned into tiny droplets that emulsify with dissolved gelatin and cloud the stock for good. The dried squid is toasted over a flame before it goes in; that brief Maillard browning creates the roasted, almost nutty aroma that tells a Mekong cook it is hủ tiếu and not phở.

A bowl of hủ tiếu Mỹ Tho is built to order: noodles blanched for seconds, topped with thin-sliced pork, minced pork, shrimp, sometimes squid and quail eggs, then drowned in boiling broth and finished with Chinese celery, garlic chives, fried garlic and crispy pork crackling (tóp mỡ). Ask for it "khô" and the noodles come dressed in a dark garlicky sauce with the broth in a separate bowl. Compared with hủ tiếu Nam Vang — the Phnom Penh style that Saigon adopted, heavy with pork offal and garlic — Mỹ Tho is lighter and sweeter, and the noodle, not the toppings, is the star.

Photo: "Hu tieu My Tho" by Trung geo, CC0, via Wikimedia Commons.`,
    ingredientSections: [
        {
            title: 'Broth — 3 litres',
            items: [
                { amount: 1.5, unit: 'kg', name: 'pork bones', note: 'A mix of neck bones and spare ribs (Schweineknochen + Rippchen). Neck bones give gelatin and body; ribs give meaty sweetness.' },
                { amount: 4, unit: 'L', name: 'water', note: 'Reduces to about 3 litres over 2.5 hours at a bare simmer.' },
                { amount: 1, name: 'dried squid (about 30 g)', note: 'The signature of the southern broth. Sold whole in Asian shops (getrockneter Tintenfisch). Toast it before use — see step 2.' },
                { amount: 30, unit: 'g', name: 'dried shrimp', note: 'Rinsed and soaked 15 minutes. Adds glutamate depth.' },
                { amount: 1, name: 'daikon (about 400 g), peeled and cut in large chunks', note: 'Natural sweetness without sugar. Substitute: white Rettich, widely sold in Germany.' },
                { amount: 2, name: 'onions, halved and charred' },
                { amount: 25, unit: 'g', name: 'rock sugar', note: 'Rounder sweetness than white sugar; 20 g white sugar works.' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Noodles & toppings',
            items: [
                { amount: 400, unit: 'g', name: 'dried hủ tiếu Mỹ Tho noodles', note: 'Thin, clear, dried rice strands about 1 mm wide. Substitute: Thai sen lek (rice stick 1 mm). Not glass noodles, not wide flat noodles.' },
                { amount: 300, unit: 'g', name: 'pork shoulder or loin', note: 'Simmered whole in the broth for 40 minutes, then sliced paper-thin.' },
                { amount: 200, unit: 'g', name: 'minced pork', note: 'Stir-fried with 1 tsp fish sauce and pepper until just cooked and crumbly.' },
                { amount: 12, name: 'medium shrimp, peeled, tails on', note: 'Poached in the broth for 60-90 seconds just before serving.' },
                { amount: 8, name: 'quail eggs, boiled and peeled', note: 'Optional, classic in Mỹ Tho.' },
                { amount: 100, unit: 'g', name: 'pork back fat', note: 'Diced and rendered into crispy tóp mỡ; keep the lard for the fried garlic. Optional but traditional.' },
                { amount: 6, name: 'garlic cloves, finely chopped', note: 'Fried golden in the rendered lard (or oil) — tỏi phi.' },
            ],
        },
        {
            title: 'To serve — Mekong style',
            items: [
                { amount: 1, name: 'small bunch garlic chives (hẹ)', note: 'Cut into 3 cm lengths. Schnittknoblauch in Germany; ordinary chives are a weaker substitute.' },
                { amount: 1, name: 'small bunch Chinese celery (cần tàu)', note: 'Thin-stemmed and aromatic. Substitute: celery leaves.' },
                { amount: 200, unit: 'g', name: 'bean sprouts' },
                { amount: 2, name: 'limes, in wedges' },
                { amount: 2, name: 'red bird\'s eye chillies, sliced' },
                { amount: 4, unit: 'tbsp', name: 'pickled garlic-chilli vinegar or sa tế', note: 'Optional, for the table.' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the bones and toast the dried squid — 15 min',
            description: `Put the pork bones in a large pot, cover with cold water and bring to a hard boil. Boil 5 minutes until grey scum rises, then drain, rinse each bone under running water and scrub the pot clean.

Meanwhile hold the dried squid with tongs over a gas flame (or under a hot grill) for 20-30 seconds per side until it curls, blisters and smells like roasted nuts. Tear it into strips. Char the halved onions cut-side down in a dry pan until blackened.

Skip the blanching and the stock will never be fully clear — the coagulated blood proteins cloud it from the first minute.`,
            tip: `Starting the blanch in cold water lets soluble blood proteins dissolve before they coagulate, so they rise as scum and drain away. Toasting the squid triggers the Maillard reaction between its amino acids and natural sugars, producing pyrazines — the roasted, savoury aroma that separates a Mekong hủ tiếu broth from a northern phở broth built on charred ginger and star anise.`,
        },
        {
            title: 'Simmer the clear broth at 90 °C — 2 hrs 30 min',
            description: `Return the bones to the clean pot with 4 litres of fresh water, the toasted squid, soaked dried shrimp, daikon and charred onions. Bring just to the boil, skim, then lower the heat until only a few small bubbles break the surface every second — about 90 °C. Add the whole piece of pork shoulder.

After 40 minutes, lift out the pork shoulder when a skewer slides through with no pink juice; plunge it into cold water for 10 minutes (this keeps it pale and firm for slicing), then refrigerate. Continue simmering the broth for the full 2.5 hours, skimming every 30 minutes.

The broth is ready when it is clear golden, tastes sweet and rounded with a light roasted note, and the daikon is translucent. Season with rock sugar, fish sauce and salt, then strain through a fine sieve.`,
            tip: `Clarity is temperature control. At a rolling boil, agitation breaks fat into micro-droplets that bind with gelatin and proteins into a stable emulsion — permanently cloudy. At 90 °C, fat floats undisturbed and can be skimmed. Mekong cooks judge the bowl by looking through it: you should see the noodles at the bottom.`,
        },
        {
            title: 'Prepare the toppings — 20 min',
            description: `Render the diced back fat in a small pan over medium-low heat for 12-15 minutes until the cubes are golden and crisp; lift them out (tóp mỡ). In 3 tbsp of the hot lard, fry the chopped garlic over medium heat, stirring, for 60-90 seconds until pale gold — then pour immediately into a heatproof bowl, as it keeps darkening.

Stir-fry the minced pork with fish sauce and pepper for 3 minutes until crumbly. Slice the chilled pork shoulder as thinly as possible against the grain. Peel the quail eggs.

Fried garlic taken to dark brown turns bitter and ruins the broth; pull it while it is still lighter than you want — residual heat finishes it.`,
            tip: `Garlic's sugars caramelise very fast once its water is gone — the window between golden and bitter is about 15 seconds. Frying in pork lard instead of oil is the old Mekong way: the lard carries a savoury depth the whole bowl inherits when the garlic is spooned on top.`,
        },
        {
            title: 'Blanch the noodles — 10-15 seconds per portion',
            description: `Soak the dried noodles in lukewarm water for 30 minutes until pliable. Bring a separate pot of water to a rolling boil. Put one portion of noodles in a noodle basket or sieve and dip it in the boiling water for 10-15 seconds, shaking, until the strands turn from white to translucent but still feel springy when pinched. Shake well and tip into a warmed bowl.

Use the same water to blanch the bean sprouts for 5 seconds if you prefer them softened.

Over-blanched noodles turn soft and swell in the hot broth; the bite should still have spring when you eat the last strand.`,
            tip: `Gò Cát rice is high in amylose, which retrogrades into a firm crystalline network as the noodles dry. A short blanch rehydrates the outside while that network holds the core — this is the "dai" texture Mỹ Tho is famous for. Never cook the noodles in the broth itself: their surface starch would cloud it.`,
        },
        {
            title: 'Assemble and ladle the boiling broth — eat within 5 minutes',
            description: `Bring the strained broth back to a full boil. Poach the shrimp in it for 60-90 seconds until just pink and curled. Top each bowl of noodles with sliced pork, minced pork, shrimp and 2 quail eggs, then ladle over about 400 ml of boiling broth — it must be at a boil to warm everything through.

Finish with garlic chives, Chinese celery, fried garlic with a little of its lard, and a scatter of tóp mỡ. Serve with bean sprouts, lime and chilli on the side.

For hủ tiếu khô (dry), toss the noodles with 1 tbsp fried-garlic lard, 1 tsp soy sauce, 1 tsp oyster sauce and 1 tsp sugar, add the toppings, and serve the broth in a small bowl alongside.`,
            tip: `How to eat: taste the broth first, plain — it is the measure of the cook. Then add lime and chilli to your own taste, a few bean sprouts, and eat the noodles with chopsticks and the broth with a spoon, alternating. The tóp mỡ is eaten while still crisp, in the first minutes. Hủ tiếu Mỹ Tho is a bowl where the noodle is the point: everything else in it exists to make the noodle taste of the river city.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
