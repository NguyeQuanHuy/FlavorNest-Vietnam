'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-rim-me',
    title: `Tamarind Braised Squid`,
    subtitle: `M?c Rim Me — Southern Vietnamese squid caramelised in tamarind, fish sauce, and palm sugar until the sauce lacquers the flesh.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `M?c rim me is one of the defining preparations of southern Vietnamese coastal cooking — squid braised in a concentrated reduction of tamarind pulp, fish sauce, and palm sugar until the liquid thickens into a dark, glossy lacquer that coats every surface of the flesh. Rim (to braise until dry) is a technique used across southern Vietnamese cooking for fish, pork, and shellfish, but tamarind as the souring agent — rather than vinegar or lime — is specifically Mekong Delta and south-central coast in character.\n\nThe dish appears in different forms along the coast. In Vung Tàu it is made with whole baby squid. In C?n Tho the squid is scored and cut into rings. In Phan Rang (Ninh Thu?n) — where tamarind trees line the roads and the fruit is used with a frequency seen nowhere else in Vietnam — m?c rim me is a daily dish, made quickly over high heat and eaten over plain white rice. This recipe follows the Ninh Thu?n method: fresh tamarind pulp dissolved in warm water, reduced with palm sugar and fish sauce until sticky, with a finishing hit of chili and a small amount of butter to round the gloss.\n\nThe key is the reduction. Rim means the sauce must cook completely down to a coating — not a pool of liquid, but a concentrated film on the squid surface that is simultaneously sweet, sour, salty, and slightly sticky. It takes patience and high heat in the final two minutes.`,
    ingredientSections: [
        {
            title: `Squid`,
            items: [
                { amount: 600, unit: 'g', name: `fresh squid (m?c)`, note: `cleaned — tubes cut into 2 cm rings, tentacles kept whole; baby squid can be left whole` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `for cleaning — rubbed on squid and rinsed off` },
                { amount: 1, unit: 'tsp', name: `rice wine or dry sherry`, note: `to remove any fishiness before cooking` },
            ],
        },
        {
            title: `Tamarind braising sauce`,
            items: [
                { amount: 60, unit: 'g', name: `tamarind pulp (me chua)`, note: `block tamarind — not concentrate; dissolved in 150 ml warm water, strained` },
                { amount: 40, unit: 'g', name: `palm sugar (duong thot not or duong the)`, note: `grated; substitute: dark brown sugar if unavailable` },
                { amount: 2.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tbsp', name: `soy sauce`, note: `adds colour depth` },
                { amount: 1, unit: 'tsp', name: `sugar`, note: `additional — balances if tamarind is very sour` },
            ],
        },
        {
            title: `Aromatics and finish`,
            items: [
                { amount: 5, name: `garlic cloves, minced` },
                { amount: 3, name: `shallots, minced` },
                { amount: 3, name: `bird's eye chili (ot hiem), sliced` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
                { amount: 10, unit: 'g', name: `unsalted butter`, note: `added at the end — gives gloss and rounds sharpness` },
                { amount: 2, name: `spring onions, sliced thin`, note: `for finishing` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
                { amount: 1, name: `lime, wedged` },
                { amount: 1, name: `bunch rau ram or coriander` },
            ],
        },
    ],
    steps: [
        {
            title: `Clean and prepare the squid`,
            description: `Pull the head and tentacles from the tube — the innards will come with it. Remove the transparent quill from inside the tube. Peel the purple skin from the tube under cold running water — it slips off easily when fresh. Cut the tentacles from the head just below the eyes, keeping them in one piece. Discard the head and innards. Cut tubes into 2 cm rings. Rub squid pieces with salt, let sit 2 minutes, then rinse thoroughly under cold water. Toss with rice wine, let sit 5 minutes, then pat completely dry with paper towels. Dry squid sears — wet squid steams.`,
            tip: `The most common mistake in muc rim me is not drying the squid thoroughly before cooking. Surface moisture creates steam in the pan, which prevents the initial sear and causes the squid to release liquid during braising — the sauce never reduces properly and the dish is watery. Paper towel dry, then rest on a clean cloth for 5 minutes before cooking.`,
        },
        {
            title: `Prepare the tamarind liquid`,
            description: `Break 60 g block tamarind into pieces and place in a bowl with 150 ml warm water. Press and knead with your fingers for 3-4 minutes until the pulp dissolves into the water and only fibres and seeds remain. Strain through a fine sieve, pressing the solids to extract maximum liquid. Discard fibres and seeds. The strained liquid should be a deep brown, thick, and intensely sour — taste it. Add palm sugar to this liquid and stir until dissolved. Add fish sauce and soy sauce. Taste the combined sauce: it should be sour-leading, then sweet, then salty. Adjust sugar or fish sauce to balance.`,
            tip: `Block tamarind varies significantly in sourness between batches and brands. Always taste the dissolved liquid before adding palm sugar — some blocks are mild and need less sugar adjustment, others are very sharp. The sauce before reducing should lean slightly more sour than the finished dish will be, as the reduction concentrates all flavours including sweetness.`,
        },
        {
            title: `Sear the squid`,
            description: `Heat a wok or wide pan over the highest heat possible until smoking. Add neutral oil — it should shimmer immediately. Add squid rings and tentacles in a single layer — do not crowd, cook in two batches if needed. Sear without moving for 60 seconds until the underside has slight colour. Toss once and cook 30 more seconds. The squid should be just opaque, barely cooked. Remove immediately to a plate. The squid will finish cooking in the sauce — at this point it should be underdone.`,
        },
        {
            title: `Build the braise`,
            description: `In the same pan over medium heat, add a small splash of oil if needed. Saute minced garlic and shallots for 90 seconds until fragrant and just golden. Add sliced chili and stir 20 seconds. Pour in the tamarind-palm sugar-fish sauce mixture. Bring to a vigorous simmer and cook uncovered for 4-5 minutes, stirring occasionally, until the sauce has reduced by half and coats the back of a spoon.`,
        },
        {
            title: `Return squid and reduce to lacquer`,
            description: `Add the seared squid back to the pan and toss to coat in the sauce. Increase heat to high. Cook stirring constantly for 2-3 minutes — the sauce will continue to reduce and begin clinging to the squid surfaces. The moment the sauce looks thick and glossy and coats every piece of squid without pooling at the bottom of the pan, remove from heat immediately. Add butter and toss vigorously for 20 seconds until melted and incorporated — the butter emulsifies the remaining sauce into a shine on the squid surface.`,
            tip: `The rim finish happens fast. Watch for the visual cue: the sauce transitions from a bubbling liquid to a thick, dark, almost-dry coating in about 60 seconds at high heat. If you miss this window by 30 seconds the squid overcooks and the sauce burns. Stay at the pan. Do not leave for this final step.`,
        },
        {
            title: `Plate and serve`,
            description: `Transfer immediately to a serving plate. Scatter spring onion slices over the top. The squid should be a deep mahogany colour, every piece visibly lacquered, with no pooling liquid on the plate. Serve over plain white rice with lime wedges and rau ram or fresh coriander on the side. Squeeze lime over the squid just before eating — the acid cuts through the sticky sweetness and the dish rebalances. In Ninh Thuan, muc rim me is eaten with a cold Saigon beer and nothing else on the table.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
