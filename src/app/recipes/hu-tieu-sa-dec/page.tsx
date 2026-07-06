'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'hu-tieu-sa-dec',
    title: `Sa Déc Rice Noodle Soup`,
    subtitle: `H? Ti?u Sa Ðéc — The clearest pork broth in the Mekong Delta, over hand-dried noodles from Ð?ng Tháp.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `H? ti?u Sa Ðéc is the noodle soup that the Mekong Delta is most proud of — and the one it argues about the most. Sa Ðéc (now Ð?ng Tháp province) has been producing h? ti?u noodles since the early twentieth century, when Teochew Chinese settlers brought the craft of sun-drying fresh rice noodles on bamboo racks along the river. The result is a noodle unlike any other in Vietnam: white, slightly translucent, with a firm-elastic bite that holds texture even after ten minutes in hot broth.\n\nThe broth is built on pork bones and dried squid simmered for two to three hours until completely clear — a point of local pride. No clouding, no shortcuts. It is seasoned with fish sauce, rock sugar, and dried shrimp for a sweetness that is distinctly southern but never cloying. Toppings are layered: sliced pork, pork liver, quail eggs, shrimp, and a spoonful of pork lard that melts silently into the bowl.\n\nUnlike h? ti?u Nam Vang (Phnom Penh style) which shares many ingredients, Sa Ðéc's version stays lighter, the broth thinner, the seasoning more restrained. It is a soup for people who believe the noodle should be the star.`,
    ingredientSections: [
        {
            title: `For the clear pork broth`,
            items: [
                { amount: 1, unit: 'kg', name: `pork bones (xuong heo)`, note: `blanched and rinsed` },
                { amount: 200, unit: 'g', name: `dried squid (m?c khô)`, note: `lightly toasted in dry pan 2 min` },
                { amount: 50, unit: 'g', name: `dried shrimp (tôm khô)`, note: `soaked 15 min` },
                { amount: 2, name: `medium onions, halved and charred` },
                { amount: 30, unit: 'g', name: `rock sugar (du?ng phèn)` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nu?c m?m)` },
                { amount: 1.5, unit: 'tsp', name: `salt` },
                { amount: 3, unit: 'L', name: `water` },
            ],
        },
        {
            title: `Toppings (topping Sa Ðéc)`,
            items: [
                { amount: 300, unit: 'g', name: `pork shoulder (th?t n?c vai)`, note: `simmered whole 25 min, sliced thin` },
                { amount: 150, unit: 'g', name: `pork liver (gan heo)`, note: `sliced 5mm, blanched 90 seconds only` },
                { amount: 200, unit: 'g', name: `medium shrimp (tôm)`, note: `peeled, deveined, poached in broth 2 min` },
                { amount: 8, name: `quail eggs (tr?ng cút)`, note: `hard-boiled, peeled, halved` },
                { amount: 2, unit: 'tbsp', name: `rendered pork lard (m? hành)`, note: `or substitute fried shallot oil` },
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 2, unit: 'tbsp', name: `fried shallots (hành phi)` },
            ],
        },
        {
            title: `Noodles`,
            items: [
                { amount: 500, unit: 'g', name: `Sa Ðéc dried h? ti?u noodles`, note: `soak in cold water 30 min, blanch 20 seconds — do NOT boil long` },
            ],
        },
        {
            title: `Herb plate and condiments`,
            items: [
                { amount: 150, unit: 'g', name: `bean sprouts (giá d?)`, note: `raw — served on the side, not cooked` },
                { amount: 1, name: `bunch garlic chives (h?)`, note: `cut 3 cm` },
                { amount: 1, name: `bunch sawtooth coriander (ngò gai)` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
                { amount: 1, unit: 'tbsp', name: `hoisin sauce (tuong hoisin)`, note: `served on side for dipping` },
                { amount: 1, unit: 'tbsp', name: `chili oil or sa t?` },
            ],
        },
    ],
    steps: [
        {
            title: `Blanch the bones`,
            description: `Place pork bones in a pot, cover with cold water, bring to a boil. Boil 5 minutes — foam and impurities will rise. Drain completely, rinse each bone under cold running water until water runs clear. This step determines whether the final broth is crystal-clear or murky. Do not rush it.`,
        },
        {
            title: `Char the onions`,
            description: `Halve two onions through the root. Place cut-side down directly on a gas flame or under a broiler until deeply charred — almost burnt — on the flat face, about 4–5 minutes. The charring adds a smoky sweetness to the broth that no other technique replicates. Rinse briefly under water to remove loose carbon.`,
        },
        {
            title: `Build the broth — 2.5 hours`,
            description: `In a large stockpot, combine blanched bones, toasted dried squid, soaked dried shrimp, charred onions, and 3 L cold water. Bring to a boil, then immediately reduce to the lowest possible simmer — barely bubbling at the surface. Skim any remaining foam in the first 20 minutes. A rolling boil will cloud the broth permanently. Simmer uncovered 2.5 hours. The broth should reduce to about 2 L and be pale gold, almost transparent.`,
            tip: `The clarity of h? ti?u Sa Ðéc broth is a point of local identity. If the broth clouds, reduce heat further. Never cover the pot while simmering — steam condensation drips back and muddies the surface.`,
        },
        {
            title: `Prepare the toppings`,
            description: `While broth simmers — poach whole pork shoulder in a separate pot of salted water for 25 minutes. Remove and let cool before slicing thin across the grain. Blanch pork liver slices in boiling water for exactly 90 seconds — overcooking makes liver grainy. Poach shrimp in broth for 2 minutes until just pink. Boil quail eggs 4 minutes, cool in ice water, peel and halve.`,
        },
        {
            title: `Soak and blanch the noodles`,
            description: `Soak Sa Ðéc dried noodles in room-temperature water for 30 minutes until pliable and opaque white. Bring a separate pot of water to a boil. Place soaked noodles in a noodle basket or fine sieve, submerge in boiling water for exactly 20 seconds — no more. Drain immediately. Sa Ðéc noodles are designed to retain bite; over-blanching destroys the texture that makes them famous.`,
        },
        {
            title: `Season the broth`,
            description: `Strain the broth through a fine mesh sieve, discarding solids. Return clear broth to clean pot and bring to a low simmer. Season with rock sugar, fish sauce, and salt. Taste — southern broth should lean slightly sweet before savoury, with clean pork depth and dried seafood umami underneath. Adjust fish sauce and sugar in small increments.`,
        },
        {
            title: `Assemble each bowl`,
            description: `Portion noodles into four bowls. Layer on sliced pork, 2–3 liver slices, 4–5 shrimp, and 2 quail egg halves. Add ½ tsp pork lard into each bowl before ladling — it will melt invisibly into the broth. Ladle hot broth generously over toppings. Finish with spring onion, fried shallots, and a pinch of garlic chives. Serve immediately with the herb plate alongside.`,
        },
        {
            title: `Eat the Sa Ðéc way`,
            description: `In Sa Ðéc, h? ti?u is eaten two ways — nu?c (with broth) or khô (dry, broth on the side). For khô: toss noodles with a spoon of lard, dash of fish sauce, and all toppings; sip the broth separately between bites. Add raw bean sprouts for crunch, squeeze lime, drop chili. Dip pork and liver in hoisin thinned with a little broth. The meal takes twenty minutes minimum. It should not be rushed.`,
            tip: `H? ti?u khô (dry version) is increasingly the preferred order among locals — it lets the noodle texture stand alone and the broth be appreciated as its own thing. Try the dry version at least once before deciding which you prefer.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
