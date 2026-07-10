'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-uot-long-ga-kon-tum',
    title: `Kon Tum Fresh Rice Sheet with Chicken Offal`,
    subtitle: `Bánh Ướt Lòng Gà Kon Tum — Steamed fresh rice sheets rolled around ginger-stir-fried chicken offal — Kon Tum's most beloved morning market dish.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh ướt lòng gà is the breakfast dish that defines Kon Tum's morning market culture — the food that the city's residents, from highland ethnic community members to lowland Vietnamese settlers, converge on before 8am at the stalls along Trần Phú street and around Chợ Kon Tum. The dish is structurally simple: fresh steamed rice sheets (bánh ướt), soft and slightly translucent, wrapped around a filling of stir-fried chicken offal (lòng gà — liver, gizzard, heart, and intestine) cooked with fresh ginger, shallots, and fish sauce until fragrant and just cooked through. The rolls are served with fried shallots, spring onion oil, and a clear ginger-fish sauce dipping sauce.\n\nWhat makes the Kon Tum version distinct from bánh ướt preparations elsewhere in Vietnam is the filling. Lowland bánh ướt typically uses minced pork and wood ear mushroom; Hà Nội bánh cuốn uses a similar preparation. Kon Tum uses exclusively chicken offal — specifically the offal from gà ta (free-range chicken), whose liver is darker and more intensely flavoured, gizzard firmer and chewier, and heart richer than commercial chicken offal. The free-range chicken is raised in the highland villages surrounding Kon Tum by Bahnar and Jrai families who sell live birds at the morning market daily.\n\nThe ginger quantity is the other distinction: significantly more than standard Vietnamese ginger use, reflecting the highland preference for ginger as a warming spice in the cool Kon Tum climate. The ginger is cut into fine julienne rather than minced, appearing as visible threads throughout the offal filling and providing bursts of warmth in individual bites.`,
    ingredientSections: [
        {
            title: `Fresh rice sheets (banh uot)`,
            items: [
                { amount: 200, unit: 'g', name: `rice flour (bot gao te)` },
                { amount: 40, unit: 'g', name: `tapioca starch (bot nang)` },
                { amount: 480, unit: 'ml', name: `water` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Chicken offal filling (long ga xao gung)`,
            items: [
                { amount: 150, unit: 'g', name: `chicken liver (gan ga ta)`, note: `free-range preferred — darker, more intense; sliced 5mm` },
                { amount: 150, unit: 'g', name: `chicken gizzard (me ga)`, note: `cleaned and thinly sliced across the grain` },
                { amount: 100, unit: 'g', name: `chicken heart (tim ga)`, note: `halved` },
                { amount: 60, unit: 'g', name: `fresh ginger (gung tuoi)`, note: `julienned into fine 4cm threads — the Kon Tum generous quantity` },
                { amount: 4, name: `shallots, sliced thin` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `oyster sauce` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Mỡ hành (spring onion oil)`,
            items: [
                { amount: 4, name: `spring onions, sliced thin` },
                { amount: 4, unit: 'tbsp', name: `neutral oil` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Ginger fish sauce (nuoc cham gung — the Kon Tum dip)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 3, unit: 'tbsp', name: `warm water` },
                { amount: 30, unit: 'g', name: `fresh ginger, minced fine`, note: `generous — mirrors the filling's ginger character` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the rice sheet batter`,
            description: `Whisk rice flour, tapioca starch, and salt together. Add water gradually, whisking until smooth. Add neutral oil and whisk once more. Strain through a fine sieve. Rest 20 minutes. The batter should be thin — thinner than crepe batter. The 80:20 rice to tapioca ratio produces sheets strong enough to wrap chunky chicken offal without tearing while remaining soft and delicate in texture.`,
        },
        {
            title: `Prepare the chicken offal`,
            description: `Clean gizzards by cutting open and removing the inner yellow membrane — rinse thoroughly. Slice gizzards thin across the grain (against the muscle fibre direction) — this produces tender slices rather than chewy chunks. Slice liver 5mm thick. Halve hearts. Blanch all offal in boiling salted water for 90 seconds — this firms the surface and removes blood. Drain and pat completely dry. Blanching is particularly important for the liver: it sets the exterior so it does not break apart during the high-heat stir-fry.`,
            tip: `Free-range chicken offal (from gà ta) has a significantly more intense flavour than commercial chicken offal — darker liver, firmer gizzard, more pronounced heart flavour. In Germany, halal butchers and farmers' markets sometimes carry free-range chicken offal; otherwise, standard supermarket chicken offal works but will be milder. The extra ginger quantity in the Kon Tum recipe compensates partially for milder commercial offal by providing more aromatic contrast.`,
        },
        {
            title: `Stir-fry the filling — high heat, fast`,
            description: `Heat neutral oil in a wok over the highest possible heat until smoking. Add sliced shallots and minced garlic — stir 30 seconds until fragrant. Add gizzard slices first — they need the most cooking, 2-3 minutes until firm and slightly golden. Add heart halves, stir 60 seconds. Add liver slices last — stir-fry exactly 90 seconds. Add julienned ginger and toss. Season with fish sauce, oyster sauce, sugar, and black pepper. Toss continuously 30 more seconds. Add sesame oil, toss once, remove from heat. The entire stir-fry takes 6-7 minutes total. The liver should be just cooked — slightly pink at the centre, not grey throughout.`,
            tip: `The gizzard-heart-liver sequence is critical — each component has a different cooking time and texture requirement. Gizzard (dense, muscular): needs 2-3 minutes to tenderise. Heart (firm but less dense): 60 seconds. Liver (delicate, high fat): 90 seconds maximum or it becomes grainy and bitter. Adding all three simultaneously produces either undercooked gizzard or overcooked liver. The sequence — gizzard first, then heart, then liver — is the technique.`,
        },
        {
            title: `Steam the rice sheets`,
            description: `Set up steaming cloth over a pot of vigorously boiling water. Brush cloth with oil. Pour 60ml batter per sheet in a thin even layer. Cover 60 seconds. Lift off onto a lightly oiled surface. The sheets should be soft, slightly translucent, and peel cleanly from the cloth. Work quickly — steam all sheets before the filling cools; warm filling in warm sheets produces the best texture. Stack completed sheets with a tiny brush of oil between each to prevent sticking.`,
        },
        {
            title: `Make the mỡ hành`,
            description: `Place sliced spring onions in a heatproof bowl with salt. Heat oil until shimmering at approximately 180°C. Pour over spring onions in one motion. Stir once. The oil should sizzle vigorously and the spring onions turn vivid green. Use within 30 minutes.`,
        },
        {
            title: `Make the ginger dipping sauce`,
            description: `Combine fish sauce, lime juice, sugar, warm water, minced ginger, garlic, and chili. Stir until sugar dissolves. The sauce should be clear, savoury-sweet, with a prominent ginger sharpness that echoes the julienned ginger in the filling. In Kon Tum, the ginger dipping sauce is made more ginger-forward than standard nuoc cham — the ginger is the aromatic thread connecting the sauce to the filling. Taste: ginger warmth should arrive 3-4 seconds after the first sip and linger.`,
        },
        {
            title: `Roll and serve`,
            description: `Place a rice sheet flat. Spoon 2-3 tablespoons of the stir-fried offal filling across the lower third. Roll forward firmly into a cylinder about 10cm long. Arrange rolls on a plate seam-side down. Spoon mỡ hành generously over the rolls. Scatter fried shallots. Serve immediately with the ginger dipping sauce alongside and rau răm on the side. In Kon Tum morning market, the vendor rolls each order to order and places it directly in front of the customer — eating begins before the last roll is finished. Dip each roll in the ginger sauce before each bite. The filling's warmth from the wok should still be present when eaten.`,
            tip: `Bánh ướt lòng gà is a 10-minute eating window dish — the rice sheets harden as they cool and the filling's warmth fades. Kon Tum market vendors roll and deliver continuously, never pre-rolling. At home: roll and serve in batches of 4, eating while rolling the next batch. The ginger dipping sauce continues to develop as the ginger steeps — by the second batch, the sauce is more complex than the first.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}