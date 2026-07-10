'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-lang-nuong-giay-bac',
    title: `Sêrêpốk River Catfish in Foil`,
    subtitle: `Cá Lăng Nướng Giấy Bạc — Đắk Lắk's prized river catfish wrapped in foil with lemongrass, galangal, and mắc khén, slow-roasted over charcoal.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cá lăng (Mystus wyckioides — the giant river catfish, also called the yellow catfish) is the most prized freshwater fish of the Sêrêpốk River system — the river that runs through the heart of Đắk Lắk province before crossing into Cambodia, fed by the Krông Ana and Krông Nô tributaries that drain the volcanic highlands of the province. The Sêrêpốk cá lăng is distinguished from lowland catfish by its environment: the river runs fast and cold through basalt gorges, and the fish develop lean, firm, white flesh with minimal muddy undertone — the characteristic flaw of slow-water catfish raised in stagnant ponds.\n\nNướng giấy bạc (foil roasting) is the technique that has become the signature preparation for cá lăng in Buôn Ma Thuột's riverside restaurants: the fish is cleaned, marinated in a paste of lemongrass, galangal, garlic, mắc khén, and fish sauce, then wrapped tightly in aluminium foil and placed directly on charcoal coals — not above them, but buried in them — for 25-30 minutes. The foil creates a sealed steam environment that cooks the fish in its own juices and the marinade's aromatics simultaneously, producing flesh that is simultaneously firm from the indirect heat and intensely fragrant from the accumulated steam of the lemongrass and mắc khén.\n\nThe foil is opened at the table — the burst of aromatic steam released when the package is unwrapped is considered the first moment of eating, before the first bite is taken. The liquid that has accumulated inside the foil package during cooking is the most concentrated expression of the marinade and the fish's natural juices — poured over the fish before serving or drunk from a small spoon as a sauce.`,
    ingredientSections: [
        {
            title: `Fish`,
            items: [
                { amount: 800, unit: 'g', name: `fresh ca lang fillet or whole section (Mystus wyckioides)`, note: `skin-on, bone-in sections 4-5cm thick; substitute: large catfish steak, barramundi, or sea bass — must be fresh, not frozen` },
                { amount: 1, unit: 'tbsp', name: `rice wine`, note: `rubbed on fish 5 min then rinsed` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `for initial cleaning rub` },
            ],
        },
        {
            title: `Foil marinade paste`,
            items: [
                { amount: 1.5, unit: 'tbsp', name: `mac khen berries, toasted and crushed`, note: `the Đắk Lắk signature; substitute: 1 tbsp Sichuan pepper + 0.5 tsp lime zest` },
                { amount: 3, name: `lemongrass stalks, inner white only, minced to paste` },
                { amount: 25, unit: 'g', name: `fresh galangal (rieng tuoi), minced fine` },
                { amount: 4, name: `garlic cloves, minced to paste` },
                { amount: 2, name: `shallots, minced` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `ground turmeric (bot nghe)` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
                { amount: 4, name: `kaffir lime leaves (la chanh), torn` },
            ],
        },
        {
            title: `Inside the foil packet`,
            items: [
                { amount: 2, name: `lemongrass stalks, bruised and halved` },
                { amount: 4, name: `slices fresh galangal` },
                { amount: 1, name: `bunch la e (holy basil) or Thai basil` },
                { amount: 1, unit: 'tbsp', name: `unsalted butter`, note: `placed on top of fish before sealing — enriches the accumulated cooking liquid` },
            ],
        },
        {
            title: `Mắc khén dipping sauce`,
            items: [
                { amount: 1, unit: 'tbsp', name: `mac khen berries, toasted and crushed` },
                { amount: 2, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 2, unit: 'tbsp', name: `warm water` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice or sticky rice` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch mint` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Clean and score the fish`,
            description: `Rub fish sections with salt, leave 5 minutes, then rinse under cold water. Toss with rice wine, leave 5 more minutes, rinse again and pat completely dry. Score each piece with 3 diagonal cuts through the skin to the bone — deep enough to allow marinade penetration but not so deep that the section separates during cooking. The scoring is especially important for cá lăng because its skin is thick and resistant to flavour penetration without physical channels cut through it.`,
            tip: `Cá lăng from the Sêrêpốk River has a distinctive yellow-gold skin colour and very white flesh — the skin colour is caused by the fish's diet of aquatic insects and small crustaceans in the clean fast-moving river water. At Vietnamese fishmongers in Germany, frozen Vietnamese catfish (cá tra) is the most available substitute but has a softer, fattier flesh and a milder flavour than river cá lăng. For the best substitute in Germany, ask a fishmonger for fresh Wels catfish (Waller) from European rivers — similar firm texture and clean river flavour.`,
        },
        {
            title: `Make the marinade paste`,
            description: `Combine crushed mắc khén, lemongrass paste, minced galangal, garlic paste, shallots, fish sauce, sugar, turmeric, black pepper, neutral oil, and torn kaffir lime leaves in a bowl. Mix thoroughly to a fragrant, slightly oily paste. The paste should smell intensely of mắc khén's numbing citrus, lemongrass, and the earthy-camphoric galangal base. Coat fish sections on all surfaces, pressing the paste firmly into the score cuts. Marinate at room temperature for 30 minutes — sufficient for the mắc khén compounds to begin penetrating the flesh.`,
        },
        {
            title: `Assemble the foil packets`,
            description: `Tear large sheets of heavy-duty aluminium foil — each sheet should be large enough to wrap one fish section with generous overlap for sealing. Lay a sheet flat and place bruised lemongrass pieces and galangal slices in the centre — these create an aromatic bed that prevents the fish from direct contact with the foil and adds steam aromatics from below. Place the marinated fish section on top. Add a few lá é or Thai basil leaves over the fish. Place a small knob of butter on top of the fish. Fold the foil up and around the fish, crimping the edges firmly — no gaps or loose folds. The seal must be completely airtight or the aromatic steam escapes during cooking.`,
            tip: `The butter inside the foil packet is not a traditional Ê Đê ingredient — it is a Buôn Ma Thuột restaurant refinement that appeared in the 2010s when the foil-roasting technique became popular. It enriches the accumulated cooking liquid that pools at the bottom of the packet during cooking, turning it from a thin fish-and-lemongrass broth into a slightly emulsified sauce. At Ê Đê village level, the butter is absent and the fish is cooked in its own juices and the marinade alone — also excellent, simply less rich.`,
        },
        {
            title: `Bury in charcoal coals`,
            description: `Prepare a charcoal fire and allow the coals to develop a thick grey ash covering — no orange flame. Using tongs, create a flat bed of coals and bury the foil packets directly in the coals, covering the top with additional coals. Cook for 25-30 minutes, turning the packets once at 15 minutes using tongs. The foil will blacken on the outside — this is correct. The fish inside is insulated by the foil and steaming in the trapped liquid. Alternatively: place packets on a grill grate directly over medium-hot coals for 20 minutes per side — the direct burial method is faster and produces more intense cooking, but both work.`,
            tip: `The burial-in-coals method is the most dramatic and produces the most intense aromatic result because the heat surrounds the package from all directions simultaneously rather than from below only. At Sêrêpốk riverside restaurants in Đắk Lắk, the packets are buried in a firepit of coffee wood coals and left for exactly 28 minutes by the cook's intuition — no timer. The blackened foil emerging from the coals, trailing smoke, is the visual that Buôn Ma Thuột diners associate with this dish before the first smell reaches them.`,
        },
        {
            title: `Make the dipping sauce`,
            description: `Combine mắc khén, fish sauce, lime juice, sugar, warm water, minced garlic, and sliced chili. Stir until sugar dissolves. The sauce should tingle the tongue within seconds — if it does not, the mắc khén is old or was over-toasted. The tingle amplifies the perception of the fish's sweetness and the marinade's lemongrass aromatics in each dipped bite. Make immediately before serving.`,
        },
        {
            title: `Open at the table`,
            description: `Bring the blackened foil packets to the table unopened. Using scissors or a knife, cut open the top of each packet at the table — the aromatic steam that bursts out in the first 3 seconds after opening is the dish's most intense flavour moment and should be experienced by everyone at the table simultaneously. The fish inside will be surrounded by a small pool of concentrated cooking liquid — spoon this over the fish before eating or into a small cup to drink as a sauce. The fish flesh should flake easily from the bone and peel away from the skin. Dip each piece in mắc khén sauce. Eat with rice and fresh herbs.`,
            tip: `The table-opening moment is culturally significant at Buôn Ma Thuột restaurant meals — the host opens all packets simultaneously so the aroma reaches everyone at once. This is the same principle as the gà nướng lá mắc mật table-opening: the released steam is the dish announcing itself. Do not open packets in the kitchen and carry the fish to the table — the aromatic impact is lost within 30 seconds of opening.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}