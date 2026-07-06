'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-nuoc-leo',
    title: `Khmer Fermented Fish Noodle Soup`,
    subtitle: `Bún Nước Lèo — The soul of Sóc Trăng in a bowl. Prawn paste broth, pork hock, and lemongrass over rice vermicelli.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs 30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bún nước lèo is the signature noodle soup of the Mekong Delta's Khmer community — most authentically eaten in Sóc Trăng, Trà Vinh, and Bạc Liêu provinces. The broth is built on mắm prông (Khmer fermented prawn paste), lemongrass, and pork hock simmered for two hours until the collagen dissolves into silk. Unlike the Vietnamese-Chinese broths of the north, this one does not seek clarity — it is deliberately opaque, rust-orange, layered with fermented depth and aromatic lemongrass top notes.\n\nThe dish belongs to the tri-cultural cuisine of the Mekong Delta: Vietnamese technique, Khmer ingredients, Chinese pork hock tradition. Served over thick rice vermicelli with shrimp, sliced pork, and a mandatory herb plate that includes banana blossom and water spinach, it is one of the few Vietnamese noodle soups where you eat the broth and the greens in equal proportion. Every Khmer household in Sóc Trăng has its own mắm prông ratio. This recipe uses the middle road — fragrant but not overwhelming for the uninitiated.`,
    ingredientSections: [
        {
            title: `For the broth (nước lèo)`,
            items: [
                { amount: 600, unit: 'g', name: `pork hock (giò heo)`, note: `cut into 3–4 cm pieces by butcher` },
                { amount: 200, unit: 'g', name: `dried shrimp (tôm khô)`, note: `soaked 20 min, drained` },
                { amount: 3, unit: 'tbsp', name: `Khmer fermented prawn paste (mắm prông)`, note: `substitute: 2 tbsp mắm ruốc Huế + 1 tbsp shrimp paste` },
                { amount: 3, name: `lemongrass stalks`, note: `bruised, tied in a knot` },
                { amount: 4, name: `kaffir lime leaves (lá chanh)` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nước mắm)` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 2, unit: 'tsp', name: `salt` },
                { amount: 2.5, unit: 'L', name: `water` },
            ],
        },
        {
            title: `For the annatto oil (dầu màu điều)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `neutral oil` },
                { amount: 1.5, unit: 'tbsp', name: `annatto seeds (hạt điều màu)`, note: `gives broth its signature rust-orange colour` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, name: `garlic cloves, minced` },
            ],
        },
        {
            title: `For the toppings`,
            items: [
                { amount: 300, unit: 'g', name: `medium shrimp (tôm)`, note: `peeled, deveined` },
                { amount: 200, unit: 'g', name: `pork shoulder (thịt heo)`, note: `sliced thin, blanched 3 min` },
                { amount: 500, unit: 'g', name: `fresh thick rice vermicelli (bún)`, note: `or 250 g dried, soaked and blanched` },
            ],
        },
        {
            title: `Herb plate (mandatory — do not skip)`,
            items: [
                { amount: 150, unit: 'g', name: `bean sprouts (giá đỗ)`, note: `blanched 30 seconds` },
                { amount: 100, unit: 'g', name: `thinly shredded banana blossom (bắp chuối bào)` },
                { amount: 1, name: `bunch water spinach (rau muống)`, note: `cut into 5 cm pieces, blanched` },
                { amount: 1, name: `bunch Vietnamese coriander (rau răm)` },
                { amount: 1, name: `bunch sawtooth coriander (ngò gai)` },
                { amount: 2, name: `limes, cut into wedges` },
                { amount: 3, name: `bird's eye chili (ớt hiểm), sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the pork hock`,
            description: `Bring a pot of water to a rolling boil. Add pork hock pieces and boil for 5 minutes — grey scum will rise. Drain, rinse each piece under cold water, scrub off residue. This blanching step is non-negotiable for a clean-tasting broth. Set cleaned hock aside.`,
        },
        {
            title: `Dissolve the prawn paste`,
            description: `In a small bowl, combine mắm prông with 100 ml warm water. Stir and press with a spoon until fully dissolved. Strain through a fine sieve, discarding solids. This step removes grit and ensures the fermented flavour infuses evenly into the broth without muddy texture.`,
            tip: `If mắm prông is unavailable in Germany, Vinh Thuan or Coop brand mắm ruốc from Vietnamese grocery stores (Asien-Markt, Dong Xuan Center) works as a 1:1 substitute — add 1 extra tsp of shrimp paste to compensate.`,
        },
        {
            title: `Build the broth`,
            description: `In a large stockpot, combine 2.5 L water, cleaned pork hock, soaked dried shrimp, bruised lemongrass, and kaffir lime leaves. Bring to a boil, then reduce heat to a gentle simmer. Skim any remaining foam from the surface. Add the strained prawn paste liquid. Simmer uncovered for 90 minutes until pork hock is tender and broth has deepened in colour and aroma.`,
        },
        {
            title: `Make the annatto oil`,
            description: `While broth simmers, heat neutral oil in a small saucepan over medium-low heat. Add annatto seeds and stir for 2–3 minutes until oil turns deep orange-red. Remove seeds with a spoon. In the same coloured oil, sauté minced shallots and garlic until fragrant, about 90 seconds. Set aside.`,
            tip: `The annatto oil is what gives bún nước lèo its distinctive rust colour. Without it the broth looks dull and pale — the visual is part of the dish's identity.`,
        },
        {
            title: `Cook the shrimp`,
            description: `Remove pork hock from the simmering broth after 90 minutes. Increase heat slightly and add shrimp directly to the broth. Cook 2–3 minutes until pink and just cooked through. Remove shrimp with a slotted spoon. Slice pork hock meat from the bone into bite-sized pieces. Return bone to broth if desired for extra richness.`,
        },
        {
            title: `Season the broth`,
            description: `Add the annatto oil to the broth, stirring to combine. Season with fish sauce, sugar, and salt. Taste — it should be savoury, lightly sweet, with a distinct fermented prawn depth and lemongrass fragrance at the finish. Adjust as needed. Remove lemongrass stalks before serving. Keep at a low simmer.`,
        },
        {
            title: `Assemble the bowls`,
            description: `Divide rice vermicelli between 4 bowls. Top each with pork hock slices, 4–5 shrimp, and a pinch of sliced pork shoulder. Ladle broth generously over everything — it should come up to just below the noodle surface, not drowning it. Finish with a drizzle of any remaining annatto oil for colour.`,
        },
        {
            title: `Serve with the herb plate`,
            description: `Place bean sprouts, shredded banana blossom, water spinach, rau răm, and ngò gai alongside in a communal plate. Each person adds their own greens as they eat — this is not a soup you dress in advance. Squeeze lime, add chili, and eat immediately. The broth cools quickly, so do not let the bowls wait.`,
            tip: `Bún nước lèo is eaten all morning in Sóc Trăng — street vendors set up before 6am and sell out by 10am. The best bowls are the ones where the broth has been simmering since midnight.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
