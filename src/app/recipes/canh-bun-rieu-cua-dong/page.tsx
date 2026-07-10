'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-bun-rieu-cua-dong',
    title: `Freshwater Crab Noodle Soup`,
    subtitle: `Bún Riêu Cua Đồng — Northern Vietnam's freshwater crab tomato broth with floating crab patties, tofu, and vermicelli — the most complex home soup in Vietnamese cooking.`,
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '2 hrs 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bún riêu cua đồng is the northern Vietnamese noodle soup that requires the most fundamental understanding of its primary technique to make correctly — the grinding and dissolving of whole freshwater field crabs (cua đồng, Somanniathelphusa sinensis) to produce both the broth's umami foundation and the floating orange crab-protein islands (gạch riêu) that are the dish's visual signature. Without understanding why the whole crab is ground rather than the meat simply extracted, and why the resulting liquid must be heated gently rather than boiled vigorously, the dish cannot be made correctly.\n\nThe technique — grinding entire live crabs shell-and-all with salt, dissolving in water, straining, and simmering gently until the crab proteins coagulate into floating islands — produces a broth and a protein element simultaneously from a single ingredient. As the strained crab liquid heats, the dissolved proteins (primarily hemocyanin, the copper-based oxygen carrier of crustaceans) coagulate at approximately 65-70°C and rise to the surface as orange, slightly foam-like islands. These gạch riêu islands are then scooped gently from the surface and served atop each bowl — they are simultaneously the most flavourful element of the dish and the visual proof that the crab was processed correctly.\n\nThe broth is built on this crab liquid combined with a pork bone base and finished with sautéed tomato, mẻ (fermented cooked rice) or tamarind for sourness, and mắm tôm for depth. The combination of the crab's oceanic umami, the tomato's brightness, the fermented sourness of mẻ, and the funky depth of mắm tôm produces a broth so complex that each of its components is individually identifiable yet none dominates — the definition of a truly sophisticated broth.`,
    ingredientSections: [
        {
            title: `Freshwater crab processing`,
            items: [
                { amount: 400, unit: 'g', name: `cua dong (freshwater field crabs)`, note: `live, small — Somanniathelphusa species; substitute: 200g frozen freshwater crab meat + 3 tbsp crab paste from Vietnamese grocer` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `added when grinding crabs` },
                { amount: 800, unit: 'ml', name: `cold water`, note: `for dissolving ground crab` },
            ],
        },
        {
            title: `Pork bone broth base`,
            items: [
                { amount: 400, unit: 'g', name: `pork bones (xuong heo)`, note: `blanched and rinsed` },
                { amount: 1, unit: 'L', name: `water` },
                { amount: 2, name: `shallots, charred` },
                { amount: 2, name: `slices fresh ginger` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Tomato-mẻ souring base`,
            items: [
                { amount: 4, name: `medium ripe tomatoes`, note: `2 halved and charred, 2 quartered raw` },
                { amount: 3, unit: 'tbsp', name: `me (fermented cooked rice)`, note: `the northern souring agent — dissolved in 50ml warm water, strained; substitute: 2 tbsp tamarind liquid + 1 tsp rice vinegar` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `annatto oil (dau mau dieu)`, note: `deep orange colour` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Mắm tôm finish (northern depth)`,
            items: [
                { amount: 1.5, unit: 'tbsp', name: `mam tom (fermented shrimp paste)` },
                { amount: 1, unit: 'tbsp', name: `lime juice`, note: `mixed with mắm tôm before adding to broth` },
            ],
        },
        {
            title: `Toppings`,
            items: [
                { amount: 150, unit: 'g', name: `firm tofu (dau hu chac)`, note: `cut into 3cm cubes, pan-fried golden` },
                { amount: 100, unit: 'g', name: `pork blood pudding (tiet canh)`, note: `optional — sliced; or substitute extra tofu` },
                { amount: 100, unit: 'g', name: `cha lua (steamed pork sausage)`, note: `sliced thin` },
            ],
        },
        {
            title: `Noodles and garnish`,
            items: [
                { amount: 400, unit: 'g', name: `fresh bun tuoi (rice vermicelli)`, note: `blanched 10 sec` },
                { amount: 200, unit: 'g', name: `rau muong (water spinach)`, note: `cut 5cm, blanched` },
                { amount: 150, unit: 'g', name: `gia do (bean sprouts)`, note: `raw` },
                { amount: 1, name: `bunch kinh gioi (Vietnamese lemon balm)`, note: `the northern herb; substitute: lemon balm + mint` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 3, name: `spring onions, sliced` },
                { amount: 3, unit: 'tbsp', name: `fried shallots` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, unit: 'tbsp', name: `mam tom`, note: `extra on the side` },
                { amount: 3, name: `bird's eye chili, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Process the freshwater crabs — the technique foundation`,
            description: `Clean live crabs by scrubbing under cold water. Remove the apron flap and gills. Separate the top shell from the body — reserve any golden roe inside. Place crab bodies (shell included) and 1 tsp salt in a stone mortar or blender. Pound or blend to a fine paste — the shell should be completely broken down. Add 800ml cold water gradually and mix thoroughly. Strain through cheesecloth, pressing the solids firmly. The strained liquid will be pale orange, slightly cloudy, and smell of raw freshwater crab. Reserve the golden roe separately — it will be added back as a garnish.`,
            tip: `The shell-inclusive grinding is the technique that produces the gạch riêu floating islands — the shell's chitin and mineral compounds contribute to the coagulation process, and the shell's pigments (astaxanthin compounds) give the islands their characteristic orange colour. Processing crab meat only without the shell produces a paler, less flavourful liquid that coagulates less dramatically. The floating islands in a correctly made bún riêu should be clearly orange, not pale yellow — the shell pigments are responsible for this colour.`,
        },
        {
            title: `Make the pork bone broth`,
            description: `Blanch pork bones 5 minutes, rinse. Combine with charred shallots, ginger, and 1L water. Bring to a boil, skim foam 10 minutes. Reduce to a steady simmer 45 minutes. Season with fish sauce and salt. Strain and reserve. This pork broth provides the body and richness that the crab liquid alone — being relatively thin — cannot supply. The combination of the two broths is the structural foundation of bún riêu.`,
        },
        {
            title: `Develop the gạch riêu — the critical step`,
            description: `Combine the strained crab liquid with the pork bone broth in a wide pot. Bring to a gentle simmer over medium-low heat — never a full boil. As the temperature approaches 65-70°C, the crab proteins will begin coagulating and rising to the surface as orange floating islands. Do not stir — stirring breaks the islands into small pieces rather than allowing them to form into the large, cohesive masses that are the visual signature of good bún riêu. Once the islands have fully formed (8-10 minutes at a gentle simmer), scoop them carefully from the surface with a slotted spoon and set aside.`,
            tip: `The 65-70°C gentle simmer is the specific temperature window for gạch riêu formation. Below 60°C: the proteins do not coagulate. Above 80°C (full boil): the proteins coagulate too rapidly, forming small, scattered flakes rather than large cohesive islands, and the vigorous movement of the boiling liquid breaks apart islands as they form. The gentle simmer that produces the large, beautiful orange islands requires patience — it takes 8-10 minutes at this temperature versus 2-3 minutes at boiling, but the visual and textural result is incomparably superior.`,
        },
        {
            title: `Build the tomato-mẻ broth`,
            description: `Heat oil in a separate pan. Sauté minced shallots and garlic until golden. Add charred tomato halves and raw quartered tomatoes. Cook 5-6 minutes until completely softened. Add annatto oil — the deep orange colour compounds in the annatto reinforce the crab orange of the gạch riêu, producing visual coherence across the bowl. Add tomato mixture to the crab-pork broth. Add dissolved and strained mẻ liquid. Add remaining fish sauce and sugar. Dissolve mắm tôm in lime juice and add. Simmer 10 minutes. Taste: the broth should be sour from the mẻ, savoury from the mắm tôm and fish sauce, and have the tomato's brightness underlying everything.`,
        },
        {
            title: `Pan-fry the tofu`,
            description: `Pat tofu cubes completely dry. Heat 2 tbsp neutral oil in a pan over medium-high heat. Fry tofu on all sides until deep golden — 3-4 minutes per side. The golden tofu provides both textural contrast to the soft crab islands and a mild, nutty flavour that balances the broth's intensity. Add to the broth in the final 5 minutes of simmering to warm through and absorb some broth flavour.`,
        },
        {
            title: `Assemble and serve`,
            description: `Blanch bún vermicelli 10 seconds in boiling water, divide into bowls. Arrange gạch riêu islands (2-3 per bowl), fried tofu, sliced chả lụa, and blood pudding (if using) over the noodles. Ladle hot broth generously over everything — include the tomato pieces. Add blanched water spinach. Scatter spring onion, fried shallots, raw bean sprouts. Place kinh giới and rau răm alongside. Serve with lime, extra mắm tôm, and chili. The mắm tôm dissolved in lime juice is squeezed directly over the bowl before eating — it adds the northern depth note that makes bún riêu distinctly of this tradition. In Hà Nội, bún riêu is eaten at sidewalk stalls from 6am, the vendor ladling from a pot that has been simmering since midnight.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}