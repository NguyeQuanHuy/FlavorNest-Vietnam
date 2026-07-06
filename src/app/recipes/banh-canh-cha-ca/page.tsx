'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-canh-cha-ca',
    title: `Thick Noodle Soup with Fish Cake`,
    subtitle: `Bánh Canh Ch? Cá — Phú Yên's fat tapioca noodles in a clear fish bone broth, topped with hand-pounded turmeric fish cake.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh canh ch? cá is the noodle soup that Phú Yên province is most proud of — eaten at breakfast at every market stall from Tuy Hòa to Sông C?u, and the dish that anyone from Phú Yên will name first when asked what food defines their province. The noodles are bánh canh — thick, round, slightly translucent tapioca-rice noodles with a chewy, almost gelatinous bite that is unlike any other noodle in Vietnamese cooking. The broth is built from fish bones and dried shrimp, simmered clear and seasoned with fish sauce and a restrained hand. The star is the ch? cá — a hand-pounded fish cake made from fresh coastal fish (cá thu, mackerel, or cá c?, sailfish) mixed with turmeric, lemongrass, and garlic, then either steamed and sliced or shaped into patties and fried until the outside is golden and the inside remains springy.\n\nWhat distinguishes the Phú Yên version from bánh canh ch? cá found elsewhere in Central Vietnam is the turmeric in the fish cake — enough to colour the ch? cá a deep yellow-orange — and the thin slices of fresh chili and raw onion placed directly on top of the finished bowl. The broth is poured over everything at the table, wilting the onion slightly and releasing the chili's heat into the bowl. The colour contrast — pale broth, yellow fish cake, white noodles, green onion, red chili — is as deliberate as the flavour balance.\n\nOn the fishing coast around Sông C?u, where the best cá thu is landed, bánh canh ch? cá shops open at 5am and the fish cakes are made fresh before dawn. The hand-pounding is non-negotiable: machine-ground fish paste produces a springy but uniform texture; hand-pounded fish has a coarser, more layered bite that holds up in hot broth without disintegrating.`,
    ingredientSections: [
        {
            title: `Fish bone broth (nuoc leo)`,
            items: [
                { amount: 800, unit: 'g', name: `fish bones and heads (xuong ca)`, note: `mackerel, snapper, or any firm white fish — rinsed and soaked in salted water 15 min` },
                { amount: 80, unit: 'g', name: `dried shrimp (tom kho)`, note: `soaked 15 min` },
                { amount: 2, name: `medium onions, halved and charred` },
                { amount: 20, unit: 'g', name: `rock sugar (duong phen)` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 2.5, unit: 'L', name: `water` },
            ],
        },
        {
            title: `Cha ca (turmeric fish cake) — hand-pounded`,
            items: [
                { amount: 500, unit: 'g', name: `fresh mackerel fillet (ca thu)`, note: `skin removed, pin bones removed — substitute: firm white fish fillet such as basa or snapper` },
                { amount: 1.5, unit: 'tsp', name: `ground turmeric (bot nghe)`, note: `fresh turmeric grated gives deeper colour — 1 tbsp fresh = 1 tsp dried` },
                { amount: 2, name: `lemongrass stalks, inner white part only, minced fine` },
                { amount: 4, name: `garlic cloves, minced` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tsp', name: `tapioca starch (bot nang)`, note: `binds the paste and improves the bounce` },
                { amount: 2, unit: 'tbsp', name: `neutral oil`, note: `for pan-frying the patties` },
            ],
        },
        {
            title: `Noodles`,
            items: [
                { amount: 500, unit: 'g', name: `fresh banh canh noodles`, note: `thick round tapioca-rice noodles; substitute: 300g dried banh canh soaked 30 min` },
            ],
        },
        {
            title: `Toppings and garnish`,
            items: [
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 0.5, name: `white onion, sliced paper-thin`, note: `placed raw on top — the broth wilts it as it is ladled` },
                { amount: 3, name: `fresh red chili (ot suong), sliced thin` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, name: `bunch coriander (ngo)` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, unit: 'tbsp', name: `annatto oil (dau mau dieu)`, note: `optional — drizzled for colour; heat 2 tbsp oil with 1 tsp annatto seeds until orange, strain` },
            ],
        },
    ],
    steps: [
        {
            title: `Build the fish bone broth`,
            description: `Soak fish bones and heads in lightly salted water for 15 minutes to draw out blood — this produces a clearer broth. Drain and rinse. Char onion halves cut-side down over a gas flame until blackened on the flat surface, about 4 minutes. Combine fish bones, soaked dried shrimp, charred onions, and 2.5 L cold water in a stockpot. Bring to a boil, skim foam thoroughly for the first 10 minutes, then reduce to the lowest possible simmer. Cook uncovered for 45 minutes — fish bone broth needs far less time than pork bone broth and becomes bitter if over-extracted. Strain through a fine mesh sieve. Season with rock sugar, fish sauce, and salt. The finished broth should be pale gold, clear, and taste of clean ocean with dried shrimp sweetness underneath.`,
            tip: `Fish bones release their flavour within 45 minutes — simmering longer extracts bitter compounds from the bones. This is the most common mistake in homemade fish broth. Set a timer. The broth is done when it tastes clean and sweet, not when it tastes strong.`,
        },
        {
            title: `Pound the fish cake by hand`,
            description: `Cut fish fillets into small chunks. Working in batches, pound in a stone mortar with a pestle using firm, rhythmic strokes — not grinding, but lifting and dropping the pestle to build a coarse, sticky paste over 5-6 minutes per batch. The fish is ready when it holds together when pressed and the texture is slightly fibrous rather than smooth. Combine all pounded fish in a bowl. Add turmeric, minced lemongrass, garlic, fish sauce, sugar, black pepper, and tapioca starch. Mix firmly with a spatula, throwing the mixture against the bowl repeatedly — this builds elasticity in the proteins. The paste should be tacky, yellow-orange, and hold its shape when scooped.`,
            tip: `The hand-pounding and throwing technique (danh cho dai) develops the myosin protein network that gives cha ca its signature springy bite. A food processor produces a paste that is too uniform and lacks the layered texture — it will cook through correctly but the bite is different. If using a processor, pulse 8-10 times maximum, never continuous blend.`,
        },
        {
            title: `Shape and cook the fish cakes`,
            description: `Wet your hands with cold water. Scoop approximately 40 g of paste and shape into a flat oval patty about 1 cm thick, or a small cylinder. Heat neutral oil in a non-stick pan over medium heat. Fry patties 3 minutes per side until deep golden on both sides and just cooked through — press the centre, it should spring back firmly. The turmeric will darken to a deep orange during frying. Remove and drain on paper towels. Alternatively, steam patties for 8 minutes for a softer texture, then pan-fry briefly for colour. In Phu Yen, most vendors do both: steam to set, then fry for the crust.`,
        },
        {
            title: `Cook the noodles`,
            description: `Bring a large pot of unsalted water to a rolling boil. Add fresh banh canh noodles and cook 2-3 minutes until just tender with a slight resistance at the centre — they will continue softening in the hot broth. If using dried soaked noodles, cook 4-5 minutes. Drain and divide between 4 bowls immediately — do not leave in water or they clump irreversibly.`,
        },
        {
            title: `Assemble the bowl`,
            description: `Place noodles in each bowl. Slice fish cake patties on a diagonal into 1 cm pieces and arrange over the noodles — 3-4 pieces per bowl, showing the golden crust and yellow interior. Lay paper-thin raw onion slices and fresh chili slices on top of the fish cake. Add spring onion and coriander. Scatter fried shallots. If using annatto oil, drizzle 1 tsp over the bowl for a glossy orange accent. Ladle piping hot broth over everything at the table — the onion will wilt instantly and the chili will release its heat into the broth. Serve with lime wedges.`,
            tip: `The raw onion must go in before the broth, not after — the point is for the boiling broth to briefly wilt and sweeten the onion as it lands, not cook it fully. The onion should be softened but still have faint crunch when eaten. This wilting-by-broth technique is specific to Phu Yen banh canh and not documented in other regional variations.`,
        },
        {
            title: `Eat the Phu Yen way`,
            description: `Squeeze lime into the bowl first. Stir gently to distribute the chili and onion through the broth. Eat noodles and fish cake together — the springy cha ca against the chewy noodle is the textural core of the dish. The broth is drunk between bites from the bowl, not from a spoon. In Tuy Hoa, a small dish of fresh chili salt (muoi ot) is placed alongside — dipping the fish cake directly into the chili salt before eating is the local preference over adding more chili to the broth.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
