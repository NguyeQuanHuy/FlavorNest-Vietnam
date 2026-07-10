'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'mi-quang-da-nang',
    title: `Đà Nẵng Quảng Noodles`,
    subtitle: `Mì Quảng Đà Nẵng — Central Vietnam's turmeric-yellow rice noodle dish with shrimp, pork, and quail eggs in a minimal broth — the dish that defines Quảng Nam-Đà Nẵng cuisine.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Mì Quảng is the noodle dish that Quảng Nam province and Đà Nẵng city consider their most essential culinary identity — a wide, flat, turmeric-yellow rice noodle (mì Quảng noodle) served in a small amount of rich, concentrated broth (nước nhưn) rather than submerged in a full bowl of soup, topped with shrimp, pork, quail eggs, fresh herbs, toasted peanuts, and sesame rice crackers (bánh tráng nướng). The deliberate restraint of the broth — just enough to moisten and flavour the noodles, not enough to constitute a soup — is the most distinctive technical characteristic of mì Quảng and the element most often misunderstood by cooks outside the region.\n\nThe nước nhưn (the Quảng Nam term for the broth/sauce that accompanies mì Quảng, distinct from the nước dùng/nước lèo of other noodle soups) is made by sautéing annatto-coloured shrimp and pork together with shallots, garlic, and lemongrass until deeply caramelised, then adding a measured amount of pork bone broth — enough to produce a sauce, not a soup. The annatto oil colours everything deep orange; the caramelised shrimp and pork contribute concentrated umami; the lemongrass provides brightness. The finished nước nhưn is thick, intensely flavoured, and present in the bowl in a quantity of approximately 100-120ml per serving — enough to coat the noodles and pool slightly at the bottom of the bowl, but not enough to submerge them.\n\nThe Đà Nẵng version of mì Quảng differs from the Hội An and Tam Kỳ versions in its broth concentration and its topping combination. Đà Nẵng versions are typically slightly more broth-forward than the driest Hội An preparations, and use quail eggs (trứng cút) as a standard topping — boiled and halved, their yolk providing an additional richness that the sautéed protein alone does not contribute.`,
    ingredientSections: [
        {
            title: `Mì Quảng noodles`,
            items: [
                { amount: 400, unit: 'g', name: `mi Quang noodles (tuoi or kho)`, note: `wide flat rice noodles with turmeric — 1.5-2cm wide; available at Vietnamese grocers; substitute: wide rice noodles (pad thai width) + 0.5 tsp turmeric in the broth` },
            ],
        },
        {
            title: `Nước nhưn (the concentrated broth-sauce)`,
            items: [
                { amount: 300, unit: 'g', name: `fresh medium shrimp (tom)`, note: `peeled, deveined — shells reserved for broth` },
                { amount: 250, unit: 'g', name: `pork shoulder (thit heo nac)`, note: `sliced 3mm thin` },
                { amount: 3, name: `shallots, minced` },
                { amount: 4, name: `garlic cloves, minced` },
                { amount: 2, name: `lemongrass stalks, inner white, minced` },
                { amount: 2, unit: 'tbsp', name: `annatto oil (dau mau dieu)`, note: `the deep orange colour signature` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 400, unit: 'ml', name: `pork bone broth`, note: `the measured, minimal amount` },
            ],
        },
        {
            title: `Shrimp shell broth`,
            items: [
                { amount: 1, name: `reserved shrimp shells and heads` },
                { amount: 600, unit: 'ml', name: `water` },
                { amount: 1, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Toppings`,
            items: [
                { amount: 8, name: `quail eggs (trung cut)`, note: `boiled 4 min, peeled, halved — the Đà Nẵng standard` },
                { amount: 4, unit: 'tbsp', name: `roasted peanuts, crushed coarse` },
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
            ],
        },
        {
            title: `The Quảng Nam herb plate`,
            items: [
                { amount: 1, name: `head butter lettuce` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 1, name: `bunch kinh gioi (Vietnamese lemon balm)` },
                { amount: 100, unit: 'g', name: `bean sprouts (gia do)`, note: `raw` },
                { amount: 1, name: `banana blossom (bap chuoi), shredded`, note: `adds astringency` },
                { amount: 2, name: `limes, wedged` },
                { amount: 4, name: `banh trang nuong (toasted sesame rice crackers)`, note: `broken into pieces over the bowl at serving — the textural signature` },
            ],
        },
        {
            title: `Mắm nêm dipping sauce`,
            items: [
                { amount: 3, unit: 'tbsp', name: `mam nem (fermented anchovy sauce)`, note: `Đà Nẵng-style — the central Vietnamese dipping standard` },
                { amount: 2, unit: 'tbsp', name: `fresh pineapple juice` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the shrimp shell broth`,
            description: `Toast shrimp shells and heads in a dry pan over medium-high heat until pink and fragrant — 2-3 minutes. Add 600ml water and bring to a boil. Simmer 20 minutes. Strain and reserve. This shrimp shell broth is the umami foundation that the pork bone broth alone cannot provide — the shells' chitin and the heads' hepatopancreas release concentrated shellfish amino acids into the liquid during simmering, producing a broth with the specific shrimp sweetness that makes mì Quảng distinctly of the central coastal kitchen. Combine with pork bone broth for the nước nhưn.`,
            tip: `Toasting the shrimp shells before simmering is the technique that extracts maximum flavour from an ingredient most cooks discard. The dry heat Maillard-browns the shell proteins and converts the astaxanthin (the carotenoid pigment responsible for the pink colour) from its protein-bound form to a free form that is both more aromatic and more soluble in water. The toasted shells produce a broth that is 40-50% more flavourful than untoasted shells simmered for the same time — this is the professional kitchen technique used in French bisque preparation applied to Vietnamese noodle broth.`,
        },
        {
            title: `Build the nước nhưn — the minimal broth technique`,
            description: `Heat neutral oil and annatto oil together in a wide pot over medium-high heat. Sauté shallots, garlic, and lemongrass until golden — 3 minutes. Add pork slices and stir-fry until just cooked through — 3-4 minutes. Add shrimp and cook 2 minutes until pink. The protein must be sautéed before adding liquid — the caramelisation of the shrimp and pork in the hot annatto oil is what produces the concentrated, intense nước nhưn character. Add fish sauce, sugar, and pepper. Season and taste. Pour in 400ml of the combined shrimp-pork broth. Simmer 10 minutes — this is the total broth for 4 portions, approximately 100ml per serving.`,
            tip: `The 400ml total broth for 4 servings is the measurement that most clearly defines mì Quảng as distinct from all other Vietnamese noodle soups. A standard Vietnamese noodle soup uses 300-350ml broth per serving — 1.2-1.4L for 4 portions. Mì Quảng uses 100ml per serving — 400ml for 4 portions. This 3-4x reduction means the nước nhưn must be 3-4x more concentrated in flavour than standard broth to achieve the same flavour impact in the bowl. The sautéing step, the shrimp shell broth, and the annatto oil are all calibrated for this concentration requirement.`,
        },
        {
            title: `Prepare the quail eggs`,
            description: `Bring water to a boil. Lower quail eggs gently into the water. Boil exactly 4 minutes for a just-set yolk — the white is fully cooked and the yolk is set but still slightly yielding at the centre. Transfer immediately to ice water for 2 minutes. Peel carefully — quail shells are thin but the membrane beneath is tough. Halve each egg lengthwise. The cut surface should show a pale golden-orange yolk that is set throughout but not chalky. Overcooked quail eggs (above 5 minutes boiling) have a grey-green ring around the yolk from iron-sulphide formation — visually and flavour unappealing in the white bowl of mì Quảng.`,
        },
        {
            title: `Prepare the noodles`,
            description: `If using dried mì Quảng noodles: soak in cold water 20 minutes until pliable. Blanch in boiling water 30-45 seconds. Drain. If using fresh noodles: blanch directly 15-20 seconds. The mì Quảng noodle is wider and slightly thicker than standard rice vermicelli — it has more body and absorbs the nước nhưn differently than thinner noodles. The turmeric in the noodle dough gives them their characteristic golden-yellow colour that deepens further when the orange annatto nước nhưn is added.`,
        },
        {
            title: `Assemble the mì Quảng bowl`,
            description: `Place a portion of blanched noodles in each bowl — the noodles fill approximately two-thirds of the bowl. Ladle 100ml of hot nước nhưn over the noodles — it should moisten all the noodles and pool slightly at the bottom without submerging them. Arrange shrimp (2-3 per bowl) and pork slices over the noodles. Place 4 quail egg halves (from 2 eggs) around the bowl. Scatter roasted peanuts, spring onion, fried shallots, and coarse black pepper generously. Break 1 toasted sesame rice cracker into pieces and scatter over the top — the cracker provides immediate textural contrast and the sesame adds a final aromatic note.`,
            tip: `The bánh tráng nướng (toasted sesame rice cracker) broken over mì Quảng is not a garnish but an integral textural component that must be added at the last moment before serving — cracker pieces that sit in the nước nhưn for more than 2 minutes absorb moisture and lose their crunch, becoming soft and flavourless. In Đà Nẵng and Quảng Nam restaurants, the cracker is served separately and broken over the bowl by the diner at the table — maintaining crispness until the first bite. The contrast between the chewy noodle, the tender protein, the creamy egg yolk, and the crunchy cracker is the textural composition that makes mì Quảng complete.`,
        },
        {
            title: `Serve with the Quảng herb plate`,
            description: `Bring the bowl to the table alongside the full Quảng Nam herb plate — butter lettuce, rau răm, mint, kinh giới, raw bean sprouts, shredded banana blossom, lime, and the mắm nêm dipping sauce. The eating of mì Quảng is interactive: the diner adds raw herbs and bean sprouts directly into the bowl, squeezes lime over the nước nhưn, and dips pieces of the protein into the mắm nêm. Toss the bowl lightly before eating to distribute the nước nhưn evenly through the noodles — the pooled broth at the bottom must be lifted through the noodles for every strand to be coated. In Đà Nẵng, mì Quảng is eaten for breakfast and lunch, never dinner — the concentrated nước nhưn is considered too rich for the evening meal.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}