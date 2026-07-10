'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-ca-ro-dong-thai-binh',
    title: `Thái Bình Field Fish Tomato Soup`,
    subtitle: `Canh Cá Rô Đồng Cà Chua — Thái Bình's everyday field perch soup with tomato and dill — the taste of northern Vietnamese home cooking at its most essential.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Canh cá rô đồng cà chua is the daily soup of Thái Bình's farming households — a preparation so ingrained in the province's domestic cooking that asking a Thái Bình grandmother for the recipe produces immediate confusion, because the dish is not a recipe but a reflex: cá rô đồng (field perch, Anabas testudineus) from the rice paddy, tomatoes from the garden, dill from the fence row, fish sauce from the jar on the shelf. The combination has been made in this province for as long as anyone can remember, and its simplicity is its sophistication.\n\nCá rô đồng (Anabas testudineus — the climbing perch) is one of the most extraordinary fish in the Mekong and Red River Delta systems — a small freshwater perch capable of breathing air through a labyrinth organ in its head, surviving out of water for hours by absorbing atmospheric oxygen, and even moving short distances across land between water bodies. This amphibious adaptation means cá rô đồng can be kept alive outside water longer than virtually any other freshwater fish, arriving at the market in peak condition hours after being caught in the paddy fields.\n\nThe flesh of cá rô đồng is firm, white, and distinctly sweet — denser than most freshwater fish because the climbing perch's constant physical activity (it is a territorial, aggressive fish) develops lean, hard muscle throughout its small body. When simmered in a tomato-based broth with dill, the flesh holds together in large, clean-tasting pieces that absorb the tomato's acidity and the dill's anise-lemon fragrance without losing their own character. The soup is eaten with white rice, the broth poured over the rice in the northern style, the fish picked from the bone at the table with chopsticks.',`,
    ingredientSections: [
        {
            title: `Field perch`,
            items: [
                { amount: 600, unit: 'g', name: `ca ro dong (field perch / climbing perch, Anabas testudineus)`, note: `whole, cleaned — scored 3 times each side; substitute: whole small perch, crucian carp, or tilapia` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `cleaning rub` },
                { amount: 1, unit: 'tsp', name: `rice wine`, note: `removes muddy note` },
                { amount: 0.5, unit: 'tsp', name: `ground turmeric`, note: `rubbed on fish before cooking` },
            ],
        },
        {
            title: `Tomato broth`,
            items: [
                { amount: 4, name: `medium ripe tomatoes`, note: `2 halved and charred cut-side down, 2 quartered raw` },
                { amount: 3, name: `shallots, halved and charred` },
                { amount: 2, name: `garlic cloves, smashed` },
                { amount: 1, unit: 'L', name: `water` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `The northern herb identity`,
            items: [
                { amount: 1, name: `large bunch thi la (fresh dill / Anethum graveolens)`, note: `fronds only — added raw at the very last moment` },
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, unit: 'tbsp', name: `mam tom (fermented shrimp paste)`, note: `dissolved in lime juice — served on side` },
            ],
        },
    ],
    steps: [
        {
            title: `Clean and prepare the fish`,
            description: `Scale and gut the fish, score each side 3 times to the bone. Rub with salt, rest 5 minutes, rinse. Toss with rice wine, rest 5 minutes, rinse again and pat completely dry. Rub ground turmeric over all surfaces and into the score cuts. The turmeric is the visual and flavour signature of canh cá rô đồng Thái Bình — it colours the fish golden before cooking and adds an earthy warmth that the clean tomato broth alone does not have. Rest 10 minutes at room temperature while preparing the broth.`,
            tip: `Cá rô đồng's firm, dense flesh requires deeper scoring than softer freshwater fish — the thick lateral muscle does not cook through without 3 cuts reaching the central spine. Thái Bình cooks score confidently and deeply: a hesitant, shallow score produces uneven cooking where the belly is overcooked when the thick dorsal section is still underdone. Score with a single decisive stroke through the flesh, stopping only at the spine.`,
        },
        {
            title: `Char the tomatoes and shallots`,
            description: `Heat a dry pan over high heat until very hot. Place 2 halved tomatoes cut-side down and 3 halved shallots cut-side down directly on the hot surface without oil. Press down firmly. Leave without moving for 2-3 minutes until deeply charred on the cut surface — almost black in places. The charring caramelises the tomatoes' natural sugars and adds a smoky depth to the broth that raw tomato cannot produce. This charring technique is used throughout northern Vietnamese cooking (phở, bún bò Huế, canh cá) and produces a broth with richer, more complex flavour than one made with raw aromatics.`,
            tip: `The charred tomato technique produces two distinct flavour contributions to the broth. First: Maillard reaction products from the caramelised tomato surface (particularly hydroxymethylfurfural and furaneol) add a deep, slightly smoky sweetness. Second: the charred exterior slows the tomato's dissolution into the broth, producing a clearer broth with the tomato flavour present but the tomato pulp intact as a visible element. Charred aromatics are the most consistently underused technique in home northern Vietnamese cooking.`,
        },
        {
            title: `Build the broth`,
            description: `Heat oil in a pot over medium heat. Add smashed garlic and sauté 30 seconds. Add charred tomato halves and shallots, the 2 quartered raw tomatoes, and 1L water. Bring to a boil. The raw and charred tomatoes work together: the charred halves provide depth and sweetness; the raw quartered tomatoes provide brightness and body. Season with fish sauce, sugar, and salt. Simmer uncovered 15 minutes — the raw tomatoes will break down and enrich the broth while the charred tomatoes remain relatively intact, their smoky flavour slowly infusing.`,
        },
        {
            title: `Cook the fish in the broth`,
            description: `Lower the turmeric-rubbed fish gently into the simmering tomato broth. Do not stir — cá rô đồng is firm enough to hold together during cooking but will break along the score cuts if agitated. Simmer uncovered for 10-12 minutes until the flesh at the deepest score cut is completely white and flakes when pressed with a chopstick. The fish will turn from pale turmeric-yellow to a deeper golden-orange as it absorbs the tomato broth. The score cuts will open slightly, allowing the broth to penetrate the thick flesh.`,
        },
        {
            title: `Finish with dill and serve`,
            description: `Remove from heat. Add fresh dill fronds and spring onion directly to the pot — press them lightly onto the surface of the hot broth. Leave 30 seconds — the residual heat wilts the dill and releases its volatile anise-lemon oils into the broth without cooking them away. Ladle into bowls ensuring each bowl receives whole fish pieces, tomato, and broth with the wilted dill. Sprinkle coarse black pepper. Serve with steamed rice and mắm tôm-lime juice alongside.`,
            tip: `The 30-second residual heat wilt for dill is the technique that produces the correct dill contribution to canh cá rô đồng. Active cooking destroys dill's most volatile aroma compounds (particularly carvone and limonene) within 60 seconds of boiling. The residual heat at 80-90°C volatilises these compounds at a slower rate, allowing them to infuse the broth and the fish surface before they escape. The dill fragrance in a correctly finished bowl of canh cá rô đồng should be clearly present but not overpowering — a gentle anise-lemon note that lifts the tomato-fish combination without masking it.`,
        },
        {
            title: `Eat the northern farmhouse way`,
            description: `Place the fish in a communal bowl at the centre of the table, the broth in a separate serving bowl. Each person takes a fish section, places it in their individual rice bowl, and spoons broth over the rice. The broth-over-rice eating style is fundamental to northern Vietnamese family meals — the broth seasons the rice while the fish is eaten separately with chopsticks, the bones picked clean and discarded onto a small dish at the side. The mắm tôm-lime juice is dipped with the fish before each bite. In Thái Bình farming households, this soup appears on the table 4-5 days per week, made from whatever the morning's paddy field catch provided. Its frequency is not monotony — it is the security of a flavour that always tastes like home.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}