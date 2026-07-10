'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'mi-quang-ngai',
    title: `Quảng Ngãi Turmeric Noodles`,
    subtitle: `Mì Quảng Ngãi — The provincial version of mì Quảng with pork ribs, shrimp, and a richer broth than Đà Nẵng — eaten with roasted peanuts and sesame rice crackers.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Mì Quảng is one of the most discussed noodle dishes in Vietnamese culinary discourse — a wide, turmeric-yellow fresh rice noodle served with a small amount of rich concentrated broth, roasted peanuts, sesame crackers, and a mandatory herb plate. The Đà Nẵng version is the most internationally documented, but mì Quảng Ngãi — the provincial variation made in Quảng Ngãi city and the surrounding districts — differs in ways that local cooks consider significant and outsiders rarely document.\n\nThe Quảng Ngãi version uses pork ribs and shrimp as the standard topping combination rather than the chicken or pork-only preparations more common in Quảng Nam and Đà Nẵng. The broth is richer and slightly more abundant — not the near-dry presentation of some Đà Nẵng versions, but a more generous pour that comes up to the noodle surface without covering it. The annatto oil (dầu màu điều) is applied more heavily, giving the Quảng Ngãi bowl a deeper orange-red colour. And the roasted peanuts are crushed finer than in Đà Nẵng — to an almost-powder that disperses through the broth rather than sitting as distinct pieces on top.\n\nThe noodle itself is the constant across all mì Quảng versions: a wide, thick, fresh rice noodle coloured and flavoured with turmeric, made by pouring batter onto a hot cloth surface (identical to bánh cuốn technique) but cut wider — about 2cm — and thicker, with more body and a slight resistance to the bite that thinner rice noodles lack. In Quảng Ngãi, the noodle makers are concentrated in the Nghĩa Hành and Tư Nghĩa districts, where the rice used for the noodle batter is grown in the same fields that supply the province's bánh tráng and bánh cuốn industries.`,
    ingredientSections: [
        {
            title: `Fresh turmeric noodles (mi Quang tuoi)`,
            items: [
                { amount: 300, unit: 'g', name: `rice flour (bot gao te)`, note: `fine-milled` },
                { amount: 50, unit: 'g', name: `tapioca starch (bot nang)` },
                { amount: 1.5, unit: 'tsp', name: `ground turmeric (bot nghe)`, note: `fresh grated turmeric gives deeper colour: 1 tbsp fresh = 1 tsp dried` },
                { amount: 500, unit: 'ml', name: `water` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `prevents sheets from sticking` },
            ],
        },
        {
            title: `Pork rib and shrimp broth (nuoc nhan)`,
            items: [
                { amount: 400, unit: 'g', name: `pork spare ribs (suon heo)`, note: `cut into 5cm pieces — blanched and rinsed` },
                { amount: 200, unit: 'g', name: `fresh medium shrimp (tom)`, note: `peeled and deveined` },
                { amount: 3, name: `shallots, minced` },
                { amount: 4, name: `garlic cloves, minced` },
                { amount: 2, name: `lemongrass stalks, bruised` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `black pepper` },
                { amount: 500, unit: 'ml', name: `pork bone broth or water` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Annatto oil (dau mau dieu — applied generously)`,
            items: [
                { amount: 4, unit: 'tbsp', name: `neutral oil` },
                { amount: 1.5, unit: 'tbsp', name: `annatto seeds (hat dieu mau)`, note: `more than standard — the Quảng Ngãi deeper colour` },
            ],
        },
        {
            title: `Quảng Ngãi toppings`,
            items: [
                { amount: 80, unit: 'g', name: `roasted peanuts (dau phong rang)`, note: `crushed to fine powder — the Quảng Ngãi distinction` },
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 2, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 4, name: `sheets sesame rice cracker (banh trang me nuong)`, note: `1 per bowl — broken over the top` },
            ],
        },
        {
            title: `Herb plate (mandatory)`,
            items: [
                { amount: 150, unit: 'g', name: `bean sprouts (gia do)`, note: `raw` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 1, name: `bunch sawtooth coriander (ngo gai)` },
                { amount: 1, name: `head butter lettuce` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `fresh chili, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the turmeric noodle batter`,
            description: `Combine rice flour, tapioca starch, turmeric, and salt in a bowl. Add water gradually, whisking constantly to prevent lumps. Add neutral oil and whisk smooth. The batter should be thin and pour easily — similar in consistency to single cream. The turmeric should colour it a deep yellow-orange. Strain through a fine sieve. Rest 30 minutes — the starch hydrates fully and produces more even, translucent sheets. The turmeric colour will intensify slightly during resting as the curcumin compounds disperse evenly through the batter.`,
            tip: `Fresh turmeric produces a significantly more vivid colour and a more complex flavour than dried turmeric powder. If fresh turmeric root is available at Vietnamese or Indian grocery stores in Germany, grate 1.5 tbsp and add to the batter — strain out the fibrous solids before resting. The resulting noodle will be a deeper, warmer orange-yellow than the dried powder version and will have a faint earthy-spicy note that dried turmeric lacks.`,
        },
        {
            title: `Steam the noodle sheets`,
            description: `Set up a steaming cloth over a pot of vigorously boiling water — muslin stretched taut and oiled lightly. Pour approximately 80ml of batter onto the cloth in a thin, even layer using a circular motion to produce a round about 22cm wide. Cover with a dome lid for 60 seconds. Peel off with a flat wooden stick onto a lightly oiled surface. Cut each round sheet into strips approximately 2cm wide. Mì Quảng noodles are wider and thicker than bánh cuốn sheets — use more batter per pour (80ml vs 60ml) and allow 65-70 seconds rather than 60 to produce a slightly thicker sheet. Stack cut noodles with a light brush of oil between layers to prevent sticking.`,
            tip: `Mì Quảng noodles are used at room temperature — never reheated or blanched before serving. The hot broth ladled over them at assembly warms them sufficiently. Blanching or reheating mì Quảng noodles softens them past the point of their characteristic slight resistance to the bite. This room-temperature noodle with hot broth contrast is what gives the dish its specific texture experience.`,
        },
        {
            title: `Make the annatto oil`,
            description: `Heat neutral oil in a small saucepan over medium-low heat. Add annatto seeds and stir for 3-4 minutes until oil turns a deep orange-red. Remove seeds with a spoon — discard or reserve for another use. The oil should be the colour of dark paprika. For Quảng Ngãi mì, use 1.5 tbsp seeds rather than the standard 1 tbsp to achieve the deeper colour characteristic of the provincial version. Set aside.`,
        },
        {
            title: `Build the pork rib and shrimp topping`,
            description: `Heat 2 tbsp neutral oil in a wide pan over medium-high heat. Sauté shallots and garlic until golden, 2 minutes. Add blanched pork ribs and sear, turning, until lightly coloured on all sides — 4-5 minutes. Add lemongrass, fish sauce, sugar, and black pepper. Pour in pork bone broth or water. Bring to a simmer and cook covered for 25 minutes until ribs are tender. Add shrimp in the final 2-3 minutes — cook just until pink. Add annatto oil, stir to combine — the broth will turn deep orange-red. Taste and adjust seasoning. The broth should be rich, savoury, and slightly sweet with a prominent annatto colour and mild lemongrass fragrance.`,
            tip: `The Quảng Ngãi broth is more generous than Đà Nẵng mì Quảng — it should come to just below the noodle surface in the bowl, not pool above it. The ratio is roughly 80ml broth per bowl. This additional broth quantity means the peanut powder disperses through the liquid rather than sitting dry on top — producing a richer, more integrated eating experience than the near-dry Đà Nẵng version.`,
        },
        {
            title: `Crush the peanuts to fine powder`,
            description: `Place roasted peanuts in a mortar and pound to a fine powder — finer than the coarse crush used in most Vietnamese dishes. The target is a powder where most pieces are smaller than 2mm, with some fine dust. This fine powder is the Quảng Ngãi distinction — when scattered over the broth, it partially dissolves into the liquid and thickens it slightly, acting simultaneously as a texture element and a flavour thickener. A coarser crush sits on top without integrating. Pound in batches of 2 tbsp for control.`,
        },
        {
            title: `Assemble the bowl`,
            description: `Place room-temperature noodles in each bowl — a generous portion, about 150g per bowl. Arrange pork rib pieces and 4-5 shrimp over the noodles. Ladle 80ml of hot broth over everything — it should come just to the noodle surface. Drizzle 1 tsp additional annatto oil over the top for colour. Scatter finely crushed peanut powder generously over the entire surface. Add spring onion, fried shallots. Break one sesame rice cracker into large pieces and lean against the side of the bowl. Serve immediately with the full herb plate alongside.`,
        },
        {
            title: `Eat the Quảng Ngãi way`,
            description: `Add raw bean sprouts, rau răm, mint, ngò gai, and torn lettuce directly to the bowl — not as a side, but mixed into the noodles. Squeeze lime over the bowl. Break the sesame cracker and push pieces into the noodles so they absorb the broth and soften slightly — the half-softened cracker is the correct texture, not fully soft and not fully crunchy. Stir everything together before eating so the peanut powder, herb juices, and broth combine into a unified dressing for the noodles. Eat with chopsticks and a deep spoon for the broth.`,
            tip: `Mì Quảng is meant to be stirred thoroughly before the first bite — unlike pho or bún bò Huế where the broth is kept separate from the noodles until the spoon scoops them together, mì Quảng is a mixed dish. The stirring distributes the peanut powder, the annatto oil, the herb juices, and the broth through every noodle strand. The bowl should look unified, not layered, by the time the first bite is taken.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}