'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tung-lo-mo',
    title: `Cham Muslim Beef Sausage`,
    subtitle: `Tung Lò Mò — Halal beef sausage of the Cham Islamic community of Châu Phong, An Giang — spiced with lemongrass, galangal, and palm sugar, sun-dried then grilled.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '72 hrs',
    rating: 4.9,
    baseServings: 8,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Tung lò mò is the halal beef sausage of the Chăm Islam community of Châu Phong commune, Tân Châu district, An Giang province — one of the largest and oldest Islamic communities in Vietnam, descended from Cham kingdom refugees who settled along the Mekong after the fall of Vijaya in the fifteenth century. The Châu Phong Cham have maintained their Islamic faith, their Cham language, and their distinct food culture for six centuries in the middle of the Buddhist-majority Mekong Delta — and tung lò mò is the food that most clearly marks this continuity.\n\nThe sausage is made entirely from beef (the Cham community does not consume pork) — minced beef mixed with lemongrass, galangal, palm sugar, fish sauce, and a specific Cham spice blend that includes turmeric and a small amount of dried shrimp paste, packed into natural beef casings and hung to sun-dry on bamboo racks outside the longhouses of Châu Phong for 2-3 days before grilling. The sun-drying concentrates the flavour and partially ferments the sausage surface, producing a slight tang and a wrinkled exterior that is the visual marker of an authentic tung lò mò versus a freshly made imitation.\n\nThe name tung lò mò comes from the Cham language — the exact etymology is disputed among scholars, but it is most commonly translated as "hanging sausage" (tung = to hang, lò mò = the sausage itself). It is eaten at every Cham celebration — Eid al-Fitr, weddings, and the Cham new year — grilled over charcoal and served with fresh herbs, cucumber, and a dipping sauce of fish sauce and lime that echoes Vietnamese nuoc cham while remaining distinctly Cham in its simplicity.`,
    ingredientSections: [
        {
            title: `Beef sausage mixture`,
            items: [
                { amount: 500, unit: 'g', name: `beef chuck or shoulder (thit bo bap)`, note: `minced medium-coarse — 15% fat content; ask butcher for beef with some fat included` },
                { amount: 100, unit: 'g', name: `beef fat (mo bo)`, note: `minced fine — adds richness and prevents drying during sun-drying` },
                { amount: 3, name: `lemongrass stalks, inner white only, minced to paste` },
                { amount: 25, unit: 'g', name: `fresh galangal, minced fine` },
                { amount: 4, name: `garlic cloves, minced to paste` },
                { amount: 3, name: `shallots, minced` },
                { amount: 1.5, unit: 'tsp', name: `ground turmeric` },
                { amount: 2, unit: 'tbsp', name: `palm sugar (duong thot not)`, note: `dissolved in 1 tbsp warm water` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 0.5, unit: 'tsp', name: `dried shrimp paste (mam ruoc)`, note: `very small amount — depth agent, not dominant flavour` },
                { amount: 1, unit: 'tbsp', name: `tapioca starch (bot nang)`, note: `binds the mixture` },
            ],
        },
        {
            title: `Casings`,
            items: [
                { amount: 1, name: `natural beef casing (long bo), 2-3 metres`, note: `soaked in cold water 30 min, rinsed thoroughly inside and out; available at halal butchers in Germany` },
            ],
        },
        {
            title: `For sun-drying`,
            items: [
                { amount: 1, name: `bamboo rack or wire rack`, note: `for hanging the sausages` },
                { amount: 1, name: `roll kitchen twine`, note: `for tying off sausage links` },
            ],
        },
        {
            title: `Dipping sauce (nuoc cham Cham style)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `warm water` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch mint` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 2, name: `limes, wedged` },
                { amount: 10, name: `sheets rice paper (banh trang)`, note: `for wrapping` },
            ],
        },
    ],
    steps: [
        {
            title: `Mix the beef sausage`,
            description: `Combine minced beef and minced beef fat in a large bowl. Add lemongrass paste, galangal, garlic paste, shallots, turmeric, dissolved palm sugar, fish sauce, salt, black pepper, dried shrimp paste, and tapioca starch. Mix firmly by throwing the mixture against the bowl repeatedly for 4-5 minutes — this develops protein binding and produces a sausage that holds its shape during drying and grilling rather than crumbling. The mixture should be tacky, fragrant with lemongrass and turmeric, and slightly sticky when pressed between fingers. Refrigerate 30 minutes before stuffing.`,
            tip: `The small amount of dried shrimp paste (mắm ruốc) is the depth agent that distinguishes tung lò mò from a simple lemongrass beef sausage. At 0.5 tsp per 600g of meat, it is not detectable as a separate flavour but adds umami complexity that makes the finished sausage taste more complete. The Châu Phong Cham community uses halal-certified shrimp paste specifically — any shrimp paste works in flavour terms, but the halal certification matters for the Cham community itself.`,
        },
        {
            title: `Prepare the beef casings`,
            description: `Soak beef casings in cold water for 30 minutes to soften and remove the salt they are packed in. Flush the inside of the casing by running cold water through one end while holding the other end closed — the casing should inflate slightly and fill with water. Drain and inspect for any holes or tears — discard damaged sections. Beef casings are thicker and more robust than pork casings — they can withstand the 2-3 day sun-drying process without tearing, which is why the Cham community uses them rather than the thinner pork casings common in Vietnamese lạp xưởng.`,
            tip: `Natural beef casings are available at halal butchers (Halal-Fleischer) throughout Germany — in cities with significant Turkish or Arab communities (Berlin, Frankfurt, Hamburg, Cologne), halal butchers are easy to find and typically stock beef casings. Ask specifically for "Rinderdarm" (beef intestine casing). In Germany's Vietnamese community, halal beef casings are sometimes available at Vietnamese grocery stores that serve Muslim customers.`,
        },
        {
            title: `Stuff the sausages`,
            description: `Attach a sausage funnel or piping bag tip to one end of the casing. Feed the entire casing onto the funnel tube in accordion folds. Tie a knot at the end. Feed the chilled beef mixture through the funnel into the casing, pushing firmly and evenly — avoid air pockets by pressing the mixture forward continuously. Fill to about 80% capacity — the mixture expands slightly during drying. Every 10-12cm, twist the sausage twice in alternating directions to form individual links. Tie each link with kitchen twine at both ends for extra security. The finished sausages should be plump, even in diameter, and golden-yellow from the turmeric.`,
        },
        {
            title: `Sun-dry — 2 to 3 days`,
            description: `Hang the sausage links on a bamboo or wire rack in a sunny, well-ventilated location. In Châu Phong, the sausages hang outside the longhouse eaves in the Mekong Delta sun (32-35°C) for 2-3 days. In Germany: a south-facing balcony or windowsill in summer works well; in cooler weather, hang near a warm south-facing window with good airflow. The sausages will darken from golden to deep amber, the skin will wrinkle slightly, and the surface will develop a slight dry-firm texture. After 2 days, press a sausage — it should feel firm on the outside and slightly yielding in the centre. This is the correct drying level for grilling.`,
            tip: `The 2-3 day sun-drying is what makes tung lò mò fundamentally different from fresh Vietnamese lạp xưởng. The drying concentrates the palm sugar and lemongrass flavours, partially ferments the surface (producing the slight tang), and creates the characteristic wrinkled exterior. In Germany in winter, a food dehydrator set to 40-45°C for 12-16 hours produces a similar result to 2 days of Mekong sun-drying. Do not use the oven — the enclosed environment prevents the airflow necessary for even drying and produces a cooked rather than dried product.`,
        },
        {
            title: `Grill over charcoal`,
            description: `Prepare charcoal with medium-hot coals. Grill dried sausages over medium heat, turning every 2-3 minutes for 12-15 minutes total. The skin will char slightly and blister — the palm sugar caramelising on the surface creates dark spots that are expected and desired. The interior should be fully cooked through and juicy from the beef fat that has partially rendered during sun-drying and continues to render during grilling. Press the sausage — it should feel firm throughout with a slight give. The lemongrass and turmeric aroma will intensify dramatically when the sausage first contacts the heat.`,
            tip: `The combination of sun-dried exterior and grilled interior produces a tung lò mò with two distinct texture layers: a slightly chewy, caramelised outer skin and a moist, fragrant interior. This two-layer texture is the signature of properly made tung lò mò and is only achievable through the sun-drying step — a fresh sausage grilled directly has a uniform texture throughout without this contrast.`,
        },
        {
            title: `Serve the Châu Phong way`,
            description: `Slice grilled sausages diagonally into 2cm pieces. Arrange on a plate with fresh herbs, cucumber, and lime wedges. Serve dipping sauce alongside. In Châu Phong, tung lò mò is eaten by wrapping a piece of sausage in rice paper with rau răm, mint, and cucumber, then dipping in the fish sauce and lime. At Eid celebrations, the sausage is eaten with steamed rice and a simple vegetable stir-fry as part of a larger communal meal. The Cham community of Châu Phong considers tung lò mò their most identifiable cultural food — the dish that marks them as Cham in a Vietnamese world.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}