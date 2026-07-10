'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-cha-ca-da-nang',
    title: `Đà Nẵng Fish Cake Noodle Soup`,
    subtitle: `Bún Chả Cá Đà Nẵng — Central Vietnam's fish cake noodle soup with turmeric broth, tomato, and dill — the coastal city's most beloved breakfast bowl.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bún chả cá Đà Nẵng is the fish cake noodle soup that the coastal city has made its own — a clear, golden-turmeric broth built on fish bones and tomato into which fresh handmade chả cá (fish cakes) of two types are added: chả cá chiên (fried fish cakes, golden and firm-edged) and chả cá hấp (steamed fish cakes, softer and more delicate). The combination of both textures in one bowl — the crispy-edged fried cake and the silky steamed cake — is the Đà Nẵng distinction from bún cá preparations elsewhere that use only one type.\n\nThe fish used for the chả cá of Đà Nẵng is cá thu (Spanish mackerel, Scomberomorus commerson) — the fish that swims in the South China Sea waters off the central Vietnamese coast in abundance and whose firm, flavourful flesh produces fish cakes of a specific character: dense, bouncy, slightly sweet, and holding their shape through both frying and steaming without falling apart. Spanish mackerel has a higher protein content and lower water content than most white fish, and its natural glutamate concentration is sufficient that the fish cakes need only fish sauce and a small amount of seasoning to be complete — the fish itself provides the flavour.\n\nThe broth is the same tomato-turmeric base as bún cá Hải Phòng but with a central Vietnamese character: less aggressively seasoned, lighter in body (no dried squid in the broth), and always finished with dill and spring onion as the mandatory herbs. The Đà Nẵng broth is calibrated for the fish cakes' own strong flavour — a more assertive broth would compete with the chả cá rather than supporting it.`,
    ingredientSections: [
        {
            title: `Chả cá thu (Spanish mackerel fish cakes)`,
            items: [
                { amount: 500, unit: 'g', name: `fresh Spanish mackerel fillet (ca thu)`, note: `skin removed, bones checked — very cold; substitute: any firm white fish — barramundi, sea bass` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tsp', name: `ground turmeric`, note: `golden colour` },
                { amount: 2, unit: 'tbsp', name: `tapioca starch (bot nang)`, note: `binder and elasticity` },
                { amount: 1, name: `egg white`, note: `lightness` },
                { amount: 2, name: `spring onions, minced` },
                { amount: 2, name: `shallots, minced` },
            ],
        },
        {
            title: `Fish bone broth`,
            items: [
                { amount: 400, unit: 'g', name: `fish bones and head (xuong ca)`, note: `from the mackerel or other sea fish` },
                { amount: 1.5, unit: 'L', name: `cold water` },
                { amount: 2, name: `shallots, charred` },
                { amount: 2, name: `slices fresh ginger, charred` },
                { amount: 1, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Tomato-turmeric broth`,
            items: [
                { amount: 4, name: `medium ripe tomatoes`, note: `2 charred, 2 quartered raw` },
                { amount: 1.5, unit: 'tsp', name: `ground turmeric` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `For cooking the fish cakes`,
            items: [
                { amount: 200, unit: 'ml', name: `neutral oil`, note: `for frying half the cakes` },
            ],
        },
        {
            title: `Noodles and garnish`,
            items: [
                { amount: 400, unit: 'g', name: `fresh bun tuoi (rice vermicelli)` },
                { amount: 1, name: `large bunch thi la (fresh dill)`, note: `fronds only — the mandatory central coast herb` },
                { amount: 3, name: `spring onions, sliced` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
                { amount: 150, unit: 'g', name: `bean sprouts, raw` },
            ],
        },
        {
            title: `Mắm nêm (central Vietnamese dipping)`,
            items: [
                { amount: 2, unit: 'tbsp', name: `mam nem` },
                { amount: 1, unit: 'tbsp', name: `pineapple juice` },
                { amount: 1, unit: 'tsp', name: `lime juice` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, name: `garlic clove, minced` },
                { amount: 1, name: `bird's eye chili, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the chả cá paste — the two-cake technique`,
            description: `Keep fish very cold — partially freeze 20 minutes if needed. Process in a food processor 7-8 minutes until the paste is smooth, sticky, and elastic — test with the finger-stretch test (stretches 3-4cm without breaking). Add fish sauce, sugar, pepper, turmeric, tapioca starch, egg white, minced spring onion, and shallots. Process 2 more minutes. Divide the paste into two equal portions. One portion will be fried (chả cá chiên); the other steamed (chả cá hấp). Shape each portion into oval cakes approximately 6cm long and 1.5cm thick — wet hands prevent sticking.`,
            tip: `The two-cake approach — half fried, half steamed from the same paste — is the Đà Nẵng bún chả cá distinction that produces two fundamentally different textures from identical ingredients. The fried cakes develop a golden, slightly crispy exterior through the Maillard reaction of the fish proteins in hot oil, with a firmer, denser interior from the rapid heat. The steamed cakes have no exterior browning — they are uniformly silky throughout, softer and more delicate. In the same bowl, the fried cake provides chew and the caramelised fish flavour; the steamed cake provides softness and the pure fish sweetness. Neither alone produces both experiences.`,
        },
        {
            title: `Fry and steam the fish cakes`,
            description: `Fry half the cakes: heat oil to 170°C. Fry the shaped cakes 3-4 minutes per side until deep golden. Drain on a wire rack. Steam the other half: place shaped cakes in a steamer over boiling water. Steam 12-15 minutes until just set throughout — the cakes should be opaque white and firm when pressed. The fried cakes are golden and firm-edged; the steamed cakes are white and slightly yielding. Both must be cooked before the broth is assembled — they will be added to the hot broth at serving rather than simmered in it, preserving their distinct textures.`,
        },
        {
            title: `Make the fish bone broth`,
            description: `Blanch fish bones 3 minutes, rinse. Combine with charred shallots, charred ginger, and 1.5L cold water. Bring to a boil, skim foam 10 minutes. Reduce to a low simmer 30 minutes. Strain — the broth should be clear and smell cleanly of the sea. Season lightly with salt. The 30-minute maximum for sea fish bones prevents the over-extraction bitterness that longer simmering produces. This base broth will be combined with the tomato-turmeric build for the final soup.`,
        },
        {
            title: `Build the tomato-turmeric broth`,
            description: `Heat oil over medium heat. Sauté minced shallots and garlic until golden. Add turmeric — bloom 30 seconds in the hot oil, developing a deeper colour and richer flavour than turmeric added directly to liquid. Add charred and raw tomatoes. Cook 5-6 minutes until completely softened. Pour in the strained fish bone broth. Season with fish sauce and sugar. Simmer 10 minutes. The broth should be clear golden-orange from the turmeric and tomato — not opaque or thick, just delicately coloured and cleanly flavoured.`,
        },
        {
            title: `Assemble the bowl`,
            description: `Blanch bún 10 seconds in boiling water. Divide into bowls. Place 2 fried fish cakes and 2 steamed fish cakes in each bowl — arranged so both types are visible. Ladle hot broth generously over everything. Add raw bean sprouts. Place a generous amount of fresh dill fronds directly on the hot broth surface — allow 20-30 seconds for them to wilt and release their anise-lemon volatile oils. Scatter spring onion, fried shallots, and coarse black pepper. Serve with lime, chili, and mắm nêm alongside.`,
            tip: `The visual presentation of bún chả cá Đà Nẵng — the golden fried cakes and white steamed cakes visible in the same bowl, the bright dill fronds wilting on the golden-orange broth surface — is the bowl's identity before the first bite. Đà Nẵng restaurants are proud of this visual: the golden-and-white cake combination against the turmeric broth and the green dill is the colour signature of the city's most celebrated breakfast. Arrange the cakes with intention — the fried cakes should show their golden surfaces, the steamed cakes their clean white.`,
        },
        {
            title: `Eat the Đà Nẵng morning way`,
            description: `Squeeze lime into the broth. Add chili. Stir the wilted dill into the broth — it should be distributed throughout the bowl rather than sitting on top. Each spoonful should contain noodle, broth, dill, and pieces of both cake types. The mắm nêm is served on the side for dipping the fish cakes — not added to the broth. In Đà Nẵng, bún chả cá is eaten from 5:30am at market stalls that have been simmering the broth since 3am. The fish cakes are fried to order — the sizzle of the fresh cakes hitting the hot oil is audible from the street and functions as the stall's morning announcement.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}