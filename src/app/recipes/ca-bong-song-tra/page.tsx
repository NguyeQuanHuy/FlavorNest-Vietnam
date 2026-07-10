'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-bong-song-tra',
    title: `Trà Khúc River Goby in Black Pepper`,
    subtitle: `Cá Bống Sông Trà — Quảng Ngãi's tiny river goby braised in fish sauce, black pepper, and caramel until the bones soften and the sauce lacquers.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cá bống sông Trà is the dish that every Quảng Ngãi person names first when asked what food they miss most about home. The cá bống (river goby, Glossogobius giuris) of the Trà Khúc River — the river that runs through the heart of Quảng Ngãi city from the Trường Sơn mountains to the sea — is a small, dark, firm-fleshed fish that has been caught from these specific waters for as long as the province has existed. It is not remarkable in size: 8 to 12 centimetres, weighing 20 to 40 grams each. What makes it remarkable is its flesh — dense, sweet, with a mineral undertone from the river's particular geology — and what happens to it during kho tiêu (black pepper braising).\n\nKho tiêu is one of the most technically demanding of the Vietnamese braising methods, despite its apparent simplicity. Fish, fish sauce, sugar, and black pepper are combined in a clay pot and cooked over very low heat for 45 minutes to an hour, during which the liquid reduces to a thick, dark lacquer that coats every surface of the fish. The bones of the cá bống, small enough to begin with, soften during this process until they are completely edible — the fish is eaten whole, bones and all, with plain white rice and the cooking liquid used as the bowl's seasoning sauce.\n\nThe black pepper quantity in cá bống kho tiêu Quảng Ngãi is notable: significantly more than standard southern kho tiêu preparations, reflecting the central Vietnamese preference for heat from pepper rather than chili. The pepper is added in two stages — half at the beginning of the braise (which mellows and integrates) and half in the final five minutes (which provides sharp, fresh heat on top of the deeper cooked pepper base).`,
    ingredientSections: [
        {
            title: `Fish`,
            items: [
                { amount: 500, unit: 'g', name: `fresh river goby (ca bong song)`, note: `whole, cleaned — 8-12cm length; substitute: small whole sardines, smelt, or any small firm-fleshed river fish` },
                { amount: 1, unit: 'tbsp', name: `coarse salt`, note: `rubbed on fish 10 min then rinsed — removes surface slime` },
                { amount: 1, unit: 'tsp', name: `rice wine`, note: `tossed with fish after salt rinse` },
            ],
        },
        {
            title: `Braising liquid (kho tiêu)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce (nuoc mam)`, note: `40°N — Phan Thiết or Phú Quốc preferred` },
                { amount: 1.5, unit: 'tbsp', name: `sugar`, note: `for the caramel base` },
                { amount: 1, unit: 'tbsp', name: `dark caramel (nuoc mau)`, note: `2 tbsp sugar cooked dry until deep amber, then 3 tbsp water added — the colour base` },
                { amount: 100, unit: 'ml', name: `coconut water (nuoc dua)`, note: `not coconut milk — natural sweetness rounds the fish sauce` },
                { amount: 2, unit: 'tsp', name: `black pepper, coarsely ground`, note: `stage 1 — added at the start; mellows during long braise` },
                { amount: 1, unit: 'tsp', name: `black pepper, freshly cracked`, note: `stage 2 — added in final 5 minutes; provides fresh sharp heat` },
                { amount: 4, name: `shallots, halved` },
                { amount: 3, name: `garlic cloves, smashed` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 2, name: `fresh red chili, sliced` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Clean the goby`,
            description: `River goby has a slightly slimy skin that must be removed before braising or it creates an unpleasant texture in the finished dish. Rub each fish firmly with coarse salt — work against the scales from tail to head. Leave 10 minutes, then rinse under cold water. Toss with rice wine, leave 5 minutes, rinse again. Pat completely dry. The fish should feel slightly rough on the surface rather than slippery. If buying from a Vietnamese fishmonger, ask them to scale and gut the fish — goby scales are small and numerous and time-consuming to remove at home.`,
            tip: `Cá bống sông Trà from the Trà Khúc River are identified by their darker colouration compared to sea goby or farmed goby — the river's tannin-rich water from the upstream forest colours the fish's skin a deep olive-brown. In Germany, fresh river goby are rarely available; frozen whole smelt (Stint) from German fishmongers or fresh small sardines from Mediterranean fishmongers are the closest substitutes in size, flesh density, and bone structure.`,
        },
        {
            title: `Make the dark caramel (nước màu)`,
            description: `Place 2 tbsp sugar in a small saucepan over medium heat. Do not stir — swirl the pan gently as the sugar melts and colours. Cook until the sugar reaches a deep amber colour — the colour of dark honey, just before it turns black. Remove from heat immediately and add 3 tbsp cold water — it will spit and solidify briefly before dissolving back into a dark syrup. Return to low heat and stir until smooth. This nước màu is the colour base for the braise. It adds depth of colour and a faint bitterness that balances the sweetness of the coconut water.`,
            tip: `The caramel must reach deep amber — not pale gold (insufficient colour and bitterness) and not black (burnt, produces an acrid taste that cannot be corrected). The visual cue is when smoke just begins to rise from the surface of the melted sugar. At that moment: 3 more seconds, then off the heat. The line between perfect dark amber and burnt is approximately 5 seconds at medium heat.`,
        },
        {
            title: `Build the braise in a clay pot`,
            description: `A clay pot (nồi đất) is the traditional vessel for kho tiêu and produces superior results to stainless steel or cast iron: it distributes heat more evenly at low temperatures and allows very slow reduction without scorching. If unavailable, use the heaviest-bottomed pot you own. Heat neutral oil in the pot over medium heat. Sauté shallots and garlic until golden, about 2 minutes. Arrange cleaned dry goby in a single layer over the shallots. Combine fish sauce, sugar, nước màu, coconut water, and stage-1 black pepper. Pour over the fish. The liquid should come to about halfway up the fish — not covering them.`,
        },
        {
            title: `Braise low and slow — 45 minutes`,
            description: `Bring the liquid to a gentle simmer over medium heat. Reduce to the lowest possible flame. Cover with a lid slightly ajar — some steam must escape for the liquid to reduce. Braise undisturbed for 30 minutes. Do not stir — the fish will break apart if moved during the early stages. After 30 minutes, gently tilt the pot to baste the fish with the reducing liquid using a spoon. Continue braising 15 more minutes. The liquid should have reduced by two-thirds and be thickening to a syrupy consistency. The fish should be deep amber-brown and beginning to look lacquered.`,
            tip: `The Quảng Ngãi method for kho tiêu uses a lower heat and longer time than the southern Vietnamese version. The extended braise at very low heat is what softens the small bones of the goby to the point where they are completely edible — the calcium in the bones gradually dissolves into the surrounding braising liquid over 45 minutes. This bone-softening does not occur at high heat in a short time. The patience is the technique.`,
        },
        {
            title: `Final reduction and pepper finish`,
            description: `Remove the lid entirely for the final 10 minutes. Increase heat very slightly to medium-low. The remaining liquid will reduce quickly to a thick, dark, glossy lacquer that coats the fish rather than pooling at the bottom. Watch carefully — the transition from syrup to lacquer to burnt happens within 2 minutes at this stage. When the liquid coats the fish completely and only a small amount remains at the base of the pot, add the stage-2 freshly cracked black pepper. Tilt the pot to distribute. Remove from heat immediately.`,
            tip: `The two-stage pepper addition is the central Vietnamese technique that distinguishes this from standard kho tiêu. Stage-1 pepper cooked for 45 minutes produces a deep, integrated heat with mellowed spice character — the backbone. Stage-2 pepper added off heat provides sharp, bright, fresh pepper aroma that sits on top of the cooked base. Together they produce a pepper presence that is simultaneously deep and vivid. Using all pepper at the start produces only the mellowed note; only at the end produces only the sharp note.`,
        },
        {
            title: `Serve over white rice`,
            description: `Bring the clay pot directly to the table — the fish is served in the cooking vessel. Each person takes 2-3 fish over their rice bowl and spoons a small amount of the lacquer from the pot over their rice. The lacquer is intensely seasoned and should be used in small quantities as a sauce for the plain rice rather than eaten directly. The fish is eaten whole — bones, head, and all. The bones of properly braised cá bống are soft enough to chew without discomfort. Serve with rau răm alongside and fresh chili for those who want additional heat beyond the pepper in the braise.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}