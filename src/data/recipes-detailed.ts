// ─────────────────────────────────────────────────────────────
//  data/recipes-detailed.ts
//  FlavorNest Vietnam — Detailed recipe data with full schema
//
//  Used for:
//    - Recipe detail pages (/recipes/[slug])
//    - Schema.org Recipe Rich Results (Google)
//    - SEO metadata (title, description, keywords)
//
//  Each recipe has: ingredients, step-by-step instructions,
//  nutrition facts, tips, and SEO keywords.
// ─────────────────────────────────────────────────────────────

import type { RecipeDetailed } from "./types";

// ─────────────────────────────────────────────────────────────
//  RECIPE 1 — Bánh Canh Hẹ Phú Yên
//  Author's hometown dish. Personal story from Huy's mother.
// ─────────────────────────────────────────────────────────────
const banhCanhHe: RecipeDetailed = {
    slug: "phu-yen-chives-noodle-soup",
    title: "Phu Yen Chives Noodle Soup",
    subtitle: "Bánh Canh Hẹ Phú Yên",

    shortDescription:
        "A humble coastal soup from central Vietnam — thick chewy rice noodles in a clear pork and dried anchovy broth, finished with a generous handful of fresh garlic chives.",

    description:
        "Bánh canh hẹ is the breakfast of Phú Yên, a fishing province on Vietnam's south-central coast. Unlike the more famous bánh canh cua of Saigon or bánh canh Trảng Bàng of Tây Ninh, the Phú Yên version is defined by two humble ingredients: dried anchovies (cá cơm khô) that lend the broth a whisper of the sea, and Vietnamese garlic chives (hẹ) sliced raw on top for a bright, pungent finish.\n\nThe noodles are thick and slippery — chewier than udon, softer than mì quảng — made from a mix of rice flour and tapioca starch. Every bowl tells the same story: a pot of broth simmered since dawn, a handful of fresh chives from the garden, and whoever walks through the door gets the next bowl.\n\nThis recipe serves four and comes together in about 90 minutes. Most of that is passive simmering — hands-on time is under 30 minutes.",

    storySnippet:
        "Every Sunday morning in Phú Yên, my mother would start the broth before sunrise — pork bones, a handful of dried anchovies, and patience. By the time my siblings and I woke up, the kitchen smelled of the sea. She always said: 'The chives go in last. Never cook them. They should still be alive when you taste them.' I've tried bánh canh in Saigon, in Hanoi, in Germany — none of them taste like hers.",

    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Bowl of Phu Yen bánh canh hẹ topped with fresh green garlic chives and crispy shallots",

    prepTime: "30 min",
    cookTime: "1 hr",
    totalTime: "1 hr 30 min",
    servings: 4,
    yield: "4 bowls",
    difficulty: "Medium",
    category: "Soup",
    cuisine: "Vietnamese",

    rating: 4.9,
    ratingCount: 87,
    tags: ["Phu Yen Specialty", "Coastal Vietnamese", "Comfort Food"],
    isFeatured: true,
    isNew: true,

    ingredients: [
        {
            section: "For the broth",
            items: [
                { name: "Pork neck bones", nameVi: "Xương cổ heo", amount: "500 g (1.1 lb)", note: "ask butcher for split bones to release marrow" },
                { name: "Dried anchovies", nameVi: "Cá cơm khô", amount: "30 g (1 oz)", note: "small ones, heads and guts removed" },
                { name: "Yellow onion", amount: "1 large, halved" },
                { name: "Ginger", amount: "1 thumb-sized piece, halved lengthwise" },
                { name: "Rock sugar", nameVi: "Đường phèn", amount: "1 tbsp" },
                { name: "Fish sauce", nameVi: "Nước mắm", amount: "2 tbsp", note: "Phu Quoc brand preferred" },
                { name: "Salt", amount: "1 tsp, to taste" },
                { name: "Water", amount: "2.5 L (10 cups)" },
            ],
        },
        {
            section: "For the noodles",
            items: [
                { name: "Fresh bánh canh noodles", amount: "400 g (14 oz)", note: "Asian grocery, refrigerated section. Substitute: udon noodles" },
            ],
        },
        {
            section: "For toppings",
            items: [
                { name: "Fish cake", nameVi: "Chả cá", amount: "200 g (7 oz), sliced 5 mm thick" },
                { name: "Dried shrimp", nameVi: "Tôm khô", amount: "2 tbsp, rinsed" },
                { name: "Quail eggs", amount: "8, hard-boiled and peeled", note: "optional but traditional" },
            ],
        },
        {
            section: "For garnish (essential)",
            items: [
                { name: "Garlic chives", nameVi: "Hẹ", amount: "1 large bunch (80 g / 3 oz)", note: "the star of this dish — do not substitute with regular chives" },
                { name: "Crispy fried shallots", nameVi: "Hành phi", amount: "3 tbsp" },
                { name: "Black pepper", amount: "freshly ground, to taste" },
                { name: "Lime wedges", amount: "2 limes, cut into wedges" },
                { name: "Bird's eye chili", nameVi: "Ớt hiểm", amount: "2-3, sliced", note: "optional, for heat" },
            ],
        },
    ],

    instructions: [
        {
            step: 1,
            title: "Blanch the bones",
            description:
                "Bring a medium pot of water to a rolling boil. Add the pork neck bones and boil for 3 minutes — you'll see grey foam rise to the surface. Drain the bones and rinse them under cold running water, scrubbing off any dark residue. This step gives you a clean, clear broth — don't skip it.",
            duration: "5 min",
        },
        {
            step: 2,
            title: "Toast the anchovies and aromatics",
            description:
                "While the bones drain, heat a dry skillet over medium heat. Toast the dried anchovies for 2 minutes until fragrant. In the same skillet, char the halved onion and ginger cut-side down for 3-4 minutes until blackened in spots. This deepens the broth's flavor — you want them slightly burnt, not raw.",
            duration: "6 min",
            tip: "The smell when you toast anchovies tells you the broth will be good. If you don't smell the sea, toast a minute longer.",
        },
        {
            step: 3,
            title: "Build the broth",
            description:
                "Transfer the cleaned bones, toasted anchovies, charred onion, and ginger into a large stockpot. Add 2.5 liters of water. Bring to a boil over high heat, then immediately reduce to a gentle simmer. Skim any foam that rises for the first 10 minutes. Simmer uncovered for 45 minutes.",
            duration: "50 min",
        },
        {
            step: 4,
            title: "Prepare the garnish",
            description:
                "While the broth simmers, wash the garlic chives thoroughly and pat dry. Slice them into 3 cm (1 inch) lengths and set aside in a bowl — they will be added raw at the end. Slice the fish cake, hard-boil the quail eggs if using, and arrange all toppings on a plate ready to assemble.",
            duration: "10 min",
        },
        {
            step: 5,
            title: "Season the broth",
            description:
                "After 45 minutes, strain the broth through a fine-mesh sieve into a clean pot. Discard the solids (the bones have given everything they have). Add rock sugar, fish sauce, and salt. Taste and adjust — the broth should taste balanced, slightly sweet from the sugar and deeply savory from the anchovies. Return to a gentle simmer.",
            duration: "5 min",
            tip: "Don't over-salt. The fish cake and dried shrimp will add more saltiness when you assemble.",
        },
        {
            step: 6,
            title: "Cook the noodles",
            description:
                "Bring a separate pot of water to a boil. Add the fresh bánh canh noodles and cook for 2-3 minutes until they float and turn translucent. Drain and divide among 4 warmed bowls.",
            duration: "3 min",
        },
        {
            step: 7,
            title: "Assemble and serve",
            description:
                "To each bowl of noodles, add 4-5 slices of fish cake, 2 quail eggs, and a sprinkle of dried shrimp. Ladle hot broth over the top to warm everything. Finish with a generous handful of raw garlic chives, a pinch of crispy shallots, and a grind of black pepper. Serve immediately with lime wedges and sliced chili on the side.",
            duration: "3 min",
            tip: "Never cook the chives. They should still be bright green and pungent when they hit the hot broth — that's the whole point of this dish.",
        },
    ],

    tips: [
        "The broth tastes better the next day — make it ahead if you can, then cool and refrigerate overnight. Reheat gently when ready to serve.",
        "If you can't find fresh bánh canh noodles, thick udon is the best substitute. Avoid rice vermicelli — it's too thin.",
        "For a richer version, add a splash of rendered pork fat (mỡ heo) to each bowl just before serving — this is how older generations in Phú Yên serve it.",
        "Vegetarian adaptation: replace pork bones with daikon and dried shiitake, skip anchovies, use vegetarian fish sauce (from seaweed).",
    ],

    variations: [
        "Saigon version (Bánh Canh Cua): replace anchovies with crab, add tomato paste for color and richness.",
        "Tây Ninh version (Bánh Canh Trảng Bàng): thinner broth, topped with pork knuckle and banana blossom.",
        "Quy Nhơn version: similar to Phú Yên but uses fresh fish instead of fish cake.",
    ],

    nutrition: {
        calories: 385,
        protein: "22 g",
        fat: "11 g",
        carbs: "52 g",
        sodium: "1,240 mg",
        fiber: "2 g",
    },

    keywords: [
        "banh canh he recipe",
        "phu yen noodle soup",
        "vietnamese garlic chives soup",
        "vietnamese pork broth noodles",
        "central vietnam cuisine",
        "authentic banh canh",
        "tapioca noodles soup",
        "vietnamese breakfast recipe",
    ],

    datePublished: "2026-04-19",
    author: "FlavorNest Vietnam",
};

// ─────────────────────────────────────────────────────────────
//  RECIPE 2 — Bún Bò Huế
//  "The greatest soup in the world" — Anthony Bourdain
//  Imperial-style beef and pork noodle soup from central Vietnam
// ─────────────────────────────────────────────────────────────
const bunBoHue: RecipeDetailed = {
    slug: "hue-spicy-beef-noodle-soup",
    title: "Hue Spicy Beef Noodle Soup",
    subtitle: "Bún Bò Huế",

    shortDescription:
        "The fiery, lemongrass-scented noodle soup from the imperial city of Huế — with tender beef shank, pork knuckle, and a broth stained red from annatto and shrimp paste.",

    description:
        "If phở is the quiet poetry of Hanoi, bún bò Huế is the defiant opera of central Vietnam. Born in the imperial city that once served the Nguyễn dynasty, this soup refuses to be polite. The broth is deep red-orange from annatto oil, perfumed with lemongrass, and funked with mắm ruốc — a fermented shrimp paste that divides first-time tasters and converts them for life.\n\nAnthony Bourdain called it 'the greatest soup in the world.' He wasn't wrong. Unlike phở, which relies on subtlety, bún bò Huế wants to be tasted — bold, spicy, aromatic, complex. The noodles are round and thick (bún bò — nothing like the flat phở noodles). The toppings are generous: slices of beef shank cooked until spoon-tender, chunks of pork knuckle that fall apart at the touch, silky cubes of pig blood, and Huế-style pork sausage wrapped in banana leaves.\n\nThis recipe takes about 3 hours — most of it passive simmering. The result serves six and tastes better on day two. Spice level is adjustable; I've written it at 'medium Huế', which is still spicier than most American 'spicy' dishes.",

    image: "https://images.unsplash.com/photo-1583224944844-5b268c057b72?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Bowl of Bún Bò Huế with red-orange broth, thick round noodles, beef shank, and fresh herbs",

    prepTime: "30 min",
    cookTime: "2 hrs 30 min",
    totalTime: "3 hrs",
    servings: 6,
    yield: "6 bowls",
    difficulty: "Hard",
    category: "Soup",
    cuisine: "Vietnamese",

    rating: 4.9,
    ratingCount: 412,
    tags: ["Hue Imperial", "Spicy", "Lemongrass", "Signature Dish"],
    isFeatured: true,

    ingredients: [
        {
            section: "For the broth",
            items: [
                { name: "Beef shank", nameVi: "Bắp bò", amount: "1 kg (2.2 lb)", note: "whole piece, string-tied for easy removal" },
                { name: "Pork knuckle", nameVi: "Giò heo", amount: "800 g (1.75 lb)", note: "ask butcher to cut into 4 cm thick rounds" },
                { name: "Beef bones", nameVi: "Xương bò", amount: "500 g (1.1 lb)", note: "marrow or knuckle bones" },
                { name: "Lemongrass", nameVi: "Sả", amount: "6 stalks", note: "trimmed, smashed with back of knife, tied in a bundle" },
                { name: "Yellow onion", amount: "1 large, halved and charred" },
                { name: "Ginger", amount: "1 thumb, halved and charred" },
                { name: "Rock sugar", nameVi: "Đường phèn", amount: "2 tbsp" },
                { name: "Salt", amount: "2 tsp" },
                { name: "Water", amount: "4 L (17 cups)" },
            ],
        },
        {
            section: "For the signature red oil",
            items: [
                { name: "Annatto seeds", nameVi: "Hạt điều màu", amount: "2 tbsp", note: "gives the broth its red-orange color" },
                { name: "Neutral oil", amount: "4 tbsp" },
                { name: "Garlic", amount: "5 cloves, minced" },
                { name: "Shallots", nameVi: "Hành tím", amount: "3, minced" },
                { name: "Lemongrass", amount: "2 stalks, finely chopped" },
                { name: "Chili flakes", amount: "2 tbsp (adjust to taste)" },
            ],
        },
        {
            section: "For seasoning",
            items: [
                { name: "Fermented shrimp paste", nameVi: "Mắm ruốc Huế", amount: "3 tbsp", note: "non-negotiable — this is what makes it bún bò Huế" },
                { name: "Fish sauce", nameVi: "Nước mắm", amount: "3 tbsp" },
                { name: "Sa tế sauce", amount: "2 tbsp", note: "Vietnamese chili lemongrass paste — add more for spicier" },
            ],
        },
        {
            section: "For serving",
            items: [
                { name: "Thick round rice noodles (bún bò)", amount: "600 g (1.3 lb) dried or 1.2 kg (2.6 lb) fresh" },
                { name: "Huế pork sausage (chả Huế)", amount: "200 g (7 oz), sliced", note: "optional but traditional" },
                { name: "Cooked pig blood (huyết heo)", amount: "200 g (7 oz), cubed", note: "optional — skip if unavailable" },
            ],
        },
        {
            section: "For the herb plate (mandatory)",
            items: [
                { name: "Bean sprouts", nameVi: "Giá", amount: "200 g (7 oz)" },
                { name: "Thinly shredded banana blossom", nameVi: "Bắp chuối bào", amount: "1 cup", note: "or substitute shredded cabbage" },
                { name: "Thai basil", nameVi: "Húng quế", amount: "1 bunch" },
                { name: "Rice paddy herb", nameVi: "Ngò ôm", amount: "1/2 bunch" },
                { name: "Lime wedges", amount: "2 limes" },
                { name: "Bird's eye chili", amount: "4-6, sliced" },
            ],
        },
    ],

    instructions: [
        {
            step: 1,
            title: "Blanch the meats",
            description:
                "In a large pot, bring water to a rolling boil. Add beef shank, pork knuckle, and beef bones. Boil for 5 minutes — scum will rise. Drain everything, then rinse each piece under cold water, scrubbing off residue. Return the cleaned meats to a clean stockpot.",
            duration: "10 min",
            tip: "This step is non-negotiable for a clear broth. Rushing here means murky soup later.",
        },
        {
            step: 2,
            title: "Char the aromatics",
            description:
                "Over an open flame or on a dry skillet, char the halved onion and ginger cut-side down until blackened in spots — about 4 minutes per side. The char adds smoky depth to the broth.",
            duration: "8 min",
        },
        {
            step: 3,
            title: "Start the broth",
            description:
                "Add 4 liters of water to the pot with the meats. Add the lemongrass bundle, charred onion, charred ginger, rock sugar, and salt. Bring to a boil, then immediately reduce to a gentle simmer. Skim foam for the first 15 minutes.",
            duration: "20 min",
        },
        {
            step: 4,
            title: "Simmer and remove meats in stages",
            description:
                "Simmer the broth at a gentle bubble for 2 hours total. After 1 hour, the beef shank should be tender — pierce with a chopstick; if it goes through easily, remove and set aside to cool. After 1 hour 30 minutes, check the pork knuckle; when tender, remove and set aside. Continue simmering the bones for another 30 minutes to extract maximum flavor.",
            duration: "2 hrs",
            tip: "Over-cooking the beef shank makes it stringy. Take it out as soon as it's fork-tender.",
        },
        {
            step: 5,
            title: "Make the signature red oil",
            description:
                "While the broth simmers, heat 4 tbsp neutral oil in a small saucepan over medium heat. Add annatto seeds and warm for 2 minutes — the oil will turn bright orange-red. Strain out the seeds (they're bitter, don't eat them). In the same oil, sauté minced garlic, shallots, and chopped lemongrass until fragrant, about 3 minutes. Add chili flakes and cook 30 seconds more. Set aside.",
            duration: "8 min",
        },
        {
            step: 6,
            title: "Finish the broth",
            description:
                "Strain the simmered broth through a fine-mesh sieve into a clean pot. Discard the solids. Dissolve the fermented shrimp paste in a cup of the hot broth, then pour through a fine sieve back into the broth (this removes any sand). Add fish sauce and sa tế. Stir in half of the red oil. Taste and adjust — it should be deeply savory, slightly sweet, pleasantly spicy, and unmistakably funky from the shrimp paste.",
            duration: "10 min",
        },
        {
            step: 7,
            title: "Slice the meats",
            description:
                "Slice the cooled beef shank against the grain into 3 mm (⅛ inch) thick slices. Cut the pork knuckle into smaller serving pieces. Slice the chả Huế if using.",
            duration: "5 min",
        },
        {
            step: 8,
            title: "Cook the noodles and assemble",
            description:
                "Bring a separate pot of water to a boil. Cook the bún bò noodles according to package instructions (usually 5-7 minutes for dried, 2 minutes for fresh). Drain and divide among 6 large bowls. Top each bowl with slices of beef shank, a piece of pork knuckle, chả Huế, and pig blood if using. Ladle the hot broth over everything, then drizzle an extra spoonful of red oil on top for color.",
            duration: "10 min",
        },
        {
            step: 9,
            title: "Serve with the herb plate",
            description:
                "Serve immediately with a large plate of bean sprouts, shredded banana blossom, Thai basil, rice paddy herb, lime wedges, and sliced chilies on the side. Each person adds herbs and squeezes lime to their own bowl. Eat it hot — this soup is meant to make you sweat.",
            tip: "First-time eaters: start with a small spoonful to adjust to the shrimp paste. By bowl end, you'll be a convert.",
        },
    ],

    tips: [
        "Mắm ruốc Huế (Huế-style fermented shrimp paste) is essential — regular Thai shrimp paste has a different flavor profile. Look for Vietnamese brands at Asian grocers.",
        "Make the broth a day ahead. It develops deeper flavor overnight and removes surface fat easily after chilling.",
        "For spicier Huế-authentic level: triple the chili flakes in the red oil and add 1 tbsp of sa tế directly to the broth.",
        "Leftover broth freezes beautifully for up to 3 months. Portion into 2-cup containers for quick weeknight bowls.",
    ],

    variations: [
        "Saigon-style bún bò: milder, sweeter broth, less mắm ruốc, more lemongrass forward.",
        "Vegetarian bún bò: use shiitake mushroom and daikon for broth base, omit pig products, use mushroom-based shrimp paste substitute.",
        "Quick version: use store-bought bún bò broth packet as a base, but boost with real charred aromatics and fresh red oil.",
    ],

    nutrition: {
        calories: 620,
        protein: "42 g",
        fat: "24 g",
        carbs: "58 g",
        sodium: "1,850 mg",
        fiber: "4 g",
    },

    keywords: [
        "bun bo hue recipe",
        "vietnamese spicy beef noodle soup",
        "hue beef soup",
        "authentic bun bo hue",
        "vietnamese lemongrass soup",
        "imperial hue cuisine",
        "spicy vietnamese soup",
        "bun bo hue at home",
    ],

    datePublished: "2026-04-19",
    author: "FlavorNest Vietnam",
};

// ─────────────────────────────────────────────────────────────
//  RECIPE 3 — Bánh Bao Nhân Thịt Trứng Cút
//  Vietnamese steamed buns with pork and quail egg.
//  Breakfast favorite — photogenic and beginner-friendly.
// ─────────────────────────────────────────────────────────────
const banhBao: RecipeDetailed = {
    slug: "steamed-pork-quail-egg-buns",
    title: "Vietnamese Steamed Pork and Quail Egg Buns",
    subtitle: "Bánh Bao Nhân Thịt Trứng Cút",

    shortDescription:
        "Pillowy-soft milk-dough buns filled with seasoned pork, wood ear mushrooms, glass noodles, and a whole quail egg — the Vietnamese breakfast standard, reimagined at home.",

    description:
        "Bánh bao is Vietnam's answer to the Chinese baozi, softened and sweetened to match the Vietnamese palate. The dough is enriched with milk and a touch of sugar, yielding an impossibly soft, white, slightly sweet wrapper that almost melts on the tongue. Inside: a savory pork mixture studded with glass noodles and wood ear mushrooms, hiding a perfectly soft-cooked quail egg at the center — a surprise with every bite.\n\nYou'll find bánh bao at every Vietnamese bus station, school gate, and morning market, steamed in tall bamboo towers and wrapped in square parchment. Each region has its preference: Hanoi versions are meatier, Saigon versions sweeter, and homemade versions are always better than either.\n\nThis recipe makes 12 buns and takes about 2.5 hours, most of which is passive proofing time. The actual hands-on work is under 45 minutes. Once you learn the fold, you'll be making bánh bao for breakfast every weekend.",

    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Vietnamese steamed pork buns (bánh bao) split open to show pork filling and quail egg center",

    prepTime: "1 hr",
    cookTime: "30 min",
    totalTime: "2 hrs 30 min",
    servings: 6,
    yield: "12 buns",
    difficulty: "Medium",
    category: "Street Food",
    cuisine: "Vietnamese",

    rating: 4.8,
    ratingCount: 196,
    tags: ["Breakfast", "Street Food", "Make-Ahead", "Freezer-Friendly"],
    isFeatured: true,
    isNew: true,

    ingredients: [
        {
            section: "For the dough",
            items: [
                { name: "All-purpose flour", amount: "500 g (4 cups)", note: "bánh bao flour from Asian grocer is best if available" },
                { name: "Instant yeast", amount: "7 g (2 tsp)" },
                { name: "Sugar", amount: "60 g (¼ cup + 1 tbsp)" },
                { name: "Whole milk", amount: "250 ml (1 cup)", note: "warm, not hot — 40°C / 104°F" },
                { name: "Neutral oil", amount: "30 ml (2 tbsp)" },
                { name: "Baking powder", amount: "1 tsp", note: "for extra fluffiness" },
                { name: "Salt", amount: "1/2 tsp" },
                { name: "White vinegar", amount: "1 tsp", note: "keeps the dough snow-white" },
            ],
        },
        {
            section: "For the filling",
            items: [
                { name: "Ground pork", nameVi: "Thịt heo xay", amount: "400 g (14 oz)", note: "80% lean / 20% fat for juiciness" },
                { name: "Dried wood ear mushrooms", nameVi: "Mộc nhĩ", amount: "15 g (½ oz) dried", note: "soaked in warm water 20 min, then minced" },
                { name: "Dried glass noodles", nameVi: "Miến", amount: "30 g (1 oz) dried", note: "soaked in warm water 10 min, cut into 2 cm pieces" },
                { name: "Yellow onion", amount: "½ medium, finely diced" },
                { name: "Shallots", amount: "2, minced" },
                { name: "Garlic", amount: "3 cloves, minced" },
                { name: "Fish sauce", amount: "1½ tbsp" },
                { name: "Oyster sauce", amount: "1 tbsp" },
                { name: "Sugar", amount: "1 tsp" },
                { name: "White pepper", amount: "½ tsp" },
                { name: "Sesame oil", amount: "1 tsp" },
            ],
        },
        {
            section: "For the centerpieces",
            items: [
                { name: "Quail eggs", amount: "12, hard-boiled and peeled", note: "boil 4 minutes, then ice bath" },
                { name: "Chinese sausage (lạp xưởng)", amount: "2 links, diced small", note: "optional — adds a salty-sweet note" },
            ],
        },
        {
            section: "For steaming",
            items: [
                { name: "Parchment paper squares", amount: "12 squares, 8 x 8 cm (3 x 3 in)" },
            ],
        },
    ],

    instructions: [
        {
            step: 1,
            title: "Activate the yeast",
            description:
                "Warm the milk to body temperature — about 40°C (104°F). It should feel like warm bath water, never hot. Stir in the sugar and instant yeast. Let it sit for 10 minutes until foamy on top. If nothing happens after 10 minutes, your yeast is dead — start over with fresh yeast.",
            duration: "10 min",
            tip: "Milk too hot kills yeast. Too cold won't activate it. If you don't have a thermometer, dip a clean finger in — it should feel barely warm.",
        },
        {
            step: 2,
            title: "Make the dough",
            description:
                "In a large bowl, whisk together flour, baking powder, and salt. Pour in the yeast mixture, oil, and vinegar. Stir with chopsticks or a spatula until a shaggy dough forms. Turn out onto a clean surface and knead for 10-12 minutes until smooth, elastic, and no longer sticky. The dough should spring back when poked.",
            duration: "15 min",
        },
        {
            step: 3,
            title: "First proof",
            description:
                "Place the dough in a lightly oiled bowl, cover with a damp cloth or plastic wrap. Let it rise in a warm spot until doubled in size — about 1 hour. To test: poke the dough with a floured finger. If the indent springs back slowly, it's ready. If it springs back fast, give it more time.",
            duration: "1 hr",
        },
        {
            step: 4,
            title: "Make the filling",
            description:
                "While the dough proofs, prepare the filling. In a large bowl, combine ground pork with all seasoning (fish sauce, oyster sauce, sugar, white pepper, sesame oil). Mix well with chopsticks in one direction only until the mixture becomes sticky — about 2 minutes. This technique (called 'đánh thịt') binds the filling so it stays juicy when steamed. Fold in the minced wood ear mushrooms, glass noodles, onion, shallots, garlic, and Chinese sausage if using. Mix until evenly distributed.",
            duration: "10 min",
            tip: "Always mix ground meat in one direction only. Circular mixing tenderizes the texture and makes the filling cohesive.",
        },
        {
            step: 5,
            title: "Shape the buns",
            description:
                "Punch down the risen dough and turn onto a lightly floured surface. Divide into 12 equal pieces (about 65 g / 2.3 oz each). Roll each piece into a ball, then flatten with a rolling pin into a circle about 12 cm (5 inches) in diameter — thicker in the center, thinner at the edges. Place 2 tablespoons of filling in the center, top with a hard-boiled quail egg. Gather the edges up around the filling, pleating as you go, and pinch to seal at the top. Place each sealed bun on a parchment square, pinched side up.",
            duration: "20 min",
            tip: "If the dough tears, your filling is too wet or you're using too much. Use slightly less filling while learning.",
        },
        {
            step: 6,
            title: "Second proof",
            description:
                "Arrange the shaped buns on a tray, cover loosely with a damp cloth, and let them rest for 20 minutes. They should look slightly puffy but not doubled — this is the final rise before steaming.",
            duration: "20 min",
        },
        {
            step: 7,
            title: "Steam the buns",
            description:
                "Fill a steamer pot with water and bring to a rolling boil. Reduce heat to medium — you want steady steam, not violent bubbling. Arrange the buns in the steamer with at least 3 cm (1 inch) of space between them (they will expand). Cover with a lid wrapped in a clean kitchen towel (to catch condensation drops that would mark the buns). Steam for exactly 15 minutes. Do not lift the lid during steaming — the temperature drop collapses the dough.",
            duration: "15 min",
            tip: "The towel trick is critical. Drops of condensation leave yellow spots on the snow-white buns.",
        },
        {
            step: 8,
            title: "Rest and serve",
            description:
                "After 15 minutes, turn off the heat and let the buns rest in the covered steamer for 3 more minutes. This prevents them from collapsing when they hit cool air. Lift the lid slowly. Serve warm, with soy sauce and sliced chili on the side for dipping.",
            duration: "5 min",
        },
    ],

    tips: [
        "For whiter, fluffier buns, sift the flour twice before use — it incorporates more air.",
        "Freeze uncooked buns after shaping (before the second proof) on a parchment-lined tray. Once frozen solid, transfer to a bag. When ready to eat, steam directly from frozen — just add 5 extra minutes to the steaming time.",
        "Vegetarian filling: replace pork with crumbled firm tofu and an extra tablespoon of wood ear mushrooms. Add 1 tbsp of nutritional yeast for umami depth.",
        "If your buns come out yellowish or dense, the most common causes are: water too hot when activating yeast, over-proofed dough, or lifting the lid during steaming.",
    ],

    variations: [
        "Hanoi-style (Bánh Bao Hà Nội): skip the quail egg, add half a Chinese sausage and a piece of marinated pork belly instead.",
        "Saigon-style (Bánh Bao Sài Gòn): sweeter dough, add a slice of char siu (xá xíu) along with the pork mixture.",
        "Mini bánh bao: divide dough into 20 smaller portions, use a single quail egg per bun — perfect for parties.",
    ],

    nutrition: {
        calories: 285,
        protein: "14 g",
        fat: "9 g",
        carbs: "38 g",
        sodium: "520 mg",
        fiber: "1 g",
    },

    keywords: [
        "banh bao recipe",
        "vietnamese steamed buns",
        "vietnamese pork buns",
        "steamed bao recipe",
        "quail egg buns",
        "vietnamese breakfast",
        "bao dough recipe",
        "fluffy steamed buns",
    ],

    datePublished: "2026-04-19",
    author: "FlavorNest Vietnam",
};

// ─────────────────────────────────────────────────────────────
//  RECIPE 4 — Bún Chả Hà Nội
//  Hanoi's most famous lunch — made famous worldwide by Anthony
//  Bourdain & President Obama at Bún Chả Hương Liên (2016).
// ─────────────────────────────────────────────────────────────
const bunChaHaNoi: RecipeDetailed = {
    slug: "bun-cha-ha-noi",
    title: "Hanoi Grilled Pork Vermicelli",
    subtitle: "Bún Chả Hà Nội",
 
    shortDescription:
        "Smoky chargrilled pork patties and belly slices in a tangy warm dipping broth, served with cool rice vermicelli, fresh herbs, and pickled vegetables — Hanoi's defining lunch.",
 
    description:
        "Bún chả is the soul of Hanoi at noon. Walk down any narrow alley in the Old Quarter between 11am and 2pm and you'll smell it before you see it — pork fat dripping onto charcoal, smoke curling up through bamboo screens, the unmistakable aroma of caramelizing fish sauce and garlic.\n\nUnlike most Vietnamese soups where everything arrives in one bowl, bún chả is deconstructed: a small bowl of warm, golden dipping broth (nước chấm) with grilled pork patties and slices of pork belly bobbing in it, alongside a separate platter of cold rice vermicelli, a heaped basket of herbs and lettuce, and pickled green papaya for crunch. You assemble each bite yourself.\n\nThe dish became internationally famous in May 2016 when Anthony Bourdain brought President Barack Obama to a humble bún chả shop on Lê Văn Hưu street. The plastic stools, the cold Hanoi beer, the hands-on eating — it was Vietnam at its most honest. This recipe takes about 90 minutes total, with most of that being marination time.",
 
    storySnippet:
        "In Hanoi, bún chả is strictly a lunch dish. Locals will look at you sideways if you order it for dinner. The reason is purely practical: the charcoal grills are fired up at dawn, the patties are made by hand throughout the morning, and by 2pm the shops simply close. To eat bún chả properly, you have to be there when the smoke is rising.",
 
    image: "/images/recipes/bunchahanoi.jpg",
    imageAlt: "Hanoi-style grilled pork bún chả with vermicelli noodles, fresh herbs, and warm dipping broth",
 
    prepTime: "30 min",
    cookTime: "25 min",
    totalTime: "55 min",
 
    servings: 4,
    yield: "4 generous portions",
    difficulty: "Medium",
    category: "Grilled",
    cuisine: "Vietnamese",
 
    rating: 4.9,
    ratingCount: 156,
    tags: ["Hanoi Heritage", "Bourdain Approved", "Lunch Classic"],
    isFeatured: true,
    isNew: true,
 
    ingredients: [
        {
            section: "For the pork patties (chả viên)",
            items: [
                { name: "Ground pork (20% fat)", nameVi: "Thịt heo xay", amount: "400 g (14 oz)", note: "shoulder is ideal" },
                { name: "Shallots, finely minced", nameVi: "Hành tím", amount: "3 medium" },
                { name: "Garlic, finely minced", nameVi: "Tỏi", amount: "4 cloves" },
                { name: "Fish sauce", nameVi: "Nước mắm", amount: "2 tbsp", note: "Phú Quốc 40°N preferred" },
                { name: "Oyster sauce", nameVi: "Dầu hào", amount: "1 tbsp" },
                { name: "Brown sugar", nameVi: "Đường nâu", amount: "1 tbsp" },
                { name: "Honey", nameVi: "Mật ong", amount: "1 tbsp", note: "for caramelization" },
                { name: "Black pepper, freshly ground", nameVi: "Tiêu đen", amount: "1 tsp" },
                { name: "Vegetable oil", nameVi: "Dầu ăn", amount: "1 tbsp" },
            ],
        },
        {
            section: "For the pork belly slices (chả miếng)",
            items: [
                { name: "Pork belly, skin removed", nameVi: "Ba chỉ heo", amount: "300 g (10 oz)", note: "sliced 4mm thick" },
                { name: "Fish sauce", nameVi: "Nước mắm", amount: "1.5 tbsp" },
                { name: "Brown sugar", nameVi: "Đường nâu", amount: "1 tbsp" },
                { name: "Garlic, minced", nameVi: "Tỏi", amount: "3 cloves" },
                { name: "Black pepper", nameVi: "Tiêu", amount: "0.5 tsp" },
            ],
        },
        {
            section: "For the dipping broth (nước chấm)",
            items: [
                { name: "Warm water", nameVi: "Nước ấm", amount: "300 ml (1.25 cups)" },
                { name: "Fish sauce", nameVi: "Nước mắm", amount: "4 tbsp" },
                { name: "Sugar", nameVi: "Đường", amount: "3 tbsp" },
                { name: "Rice vinegar", nameVi: "Giấm gạo", amount: "2 tbsp" },
                { name: "Lime juice", nameVi: "Nước cốt chanh", amount: "1 tbsp" },
                { name: "Garlic, finely minced", nameVi: "Tỏi", amount: "2 cloves" },
                { name: "Bird's eye chili, sliced", nameVi: "Ớt hiểm", amount: "1-2", note: "to taste" },
            ],
        },
        {
            section: "For the pickled vegetables (đồ chua)",
            items: [
                { name: "Green papaya, julienned", nameVi: "Đu đủ xanh", amount: "150 g", note: "or daikon if unavailable" },
                { name: "Carrot, julienned", nameVi: "Cà rốt", amount: "1 medium" },
                { name: "Salt", nameVi: "Muối", amount: "1 tsp" },
                { name: "Sugar", nameVi: "Đường", amount: "2 tbsp" },
                { name: "Rice vinegar", nameVi: "Giấm gạo", amount: "3 tbsp" },
            ],
        },
        {
            section: "To serve",
            items: [
                { name: "Fresh rice vermicelli (bún)", nameVi: "Bún tươi", amount: "500 g (1.1 lb)", note: "or 250g dried" },
                { name: "Lettuce leaves", nameVi: "Xà lách", amount: "1 head" },
                { name: "Fresh perilla leaves (tía tô)", nameVi: "Lá tía tô", amount: "1 small bunch" },
                { name: "Fresh mint leaves", nameVi: "Húng lủi", amount: "1 small bunch" },
                { name: "Fresh Vietnamese coriander (rau răm)", nameVi: "Rau răm", amount: "1 small bunch" },
                { name: "Bean sprouts", nameVi: "Giá đỗ", amount: "100 g", note: "optional" },
            ],
        },
    ],
 
    instructions: [
        {
            step: 1,
            title: "Marinate the pork (1 hour minimum)",
            description:
                "In one bowl, combine ground pork with shallots, garlic, fish sauce, oyster sauce, brown sugar, honey, black pepper, and vegetable oil. Mix in one direction with your hand for 2-3 minutes until the meat becomes sticky and tacky — this is what makes the patties hold together on the grill. In a second bowl, marinate the pork belly slices with fish sauce, brown sugar, garlic, and pepper. Cover both and refrigerate for at least 1 hour, ideally 3 hours.",
            duration: "1 hr",
            tip: "Mixing in ONE direction is a Vietnamese chef's secret. It aligns the proteins and creates the bouncy texture authentic chả viên needs.",
        },
        {
            step: 2,
            title: "Make the pickled vegetables",
            description:
                "Toss julienned green papaya and carrot with salt and let sit 10 minutes — this draws out water and keeps the pickle crunchy. Squeeze gently and rinse. Mix with sugar and rice vinegar, then refrigerate. They need at least 30 minutes to develop flavor but can be made a day ahead.",
            duration: "15 min",
            tip: "Green papaya is traditional but if you can't find it, daikon radish works beautifully. Don't use ripe papaya — it's too sweet and soft.",
        },
        {
            step: 3,
            title: "Prepare the dipping broth",
            description:
                "In a small saucepan, dissolve sugar in warm water. Remove from heat. Add fish sauce, rice vinegar, and lime juice. Taste — it should be balanced: salty from fish sauce, sweet, slightly tart, with a clean finish. Adjust as needed. Set aside; you'll add fresh garlic and chili at serving time.",
            duration: "5 min",
            tip: "The Hanoi version is mild and slightly sweet. The Saigon version is darker and more intense. Adjust to your taste.",
        },
        {
            step: 4,
            title: "Form the patties",
            description:
                "Lightly oil your hands. Take about 35g of marinated ground pork and shape into flat patties about 6cm wide and 1cm thick. You should get 12-16 patties. Place on a parchment-lined tray. The thinner the patty, the more caramelized edges you'll get on the grill.",
            duration: "10 min",
        },
        {
            step: 5,
            title: "Grill the meat (the soul of the dish)",
            description:
                "Heat charcoal grill to medium-high, or preheat oven broiler to 240°C (465°F) with rack 15cm from element. Grill patties first for 3-4 minutes per side until deeply caramelized — you want char marks. Grill pork belly for 4-5 minutes per side until edges are crispy and lacquered. Both should be slightly charred but juicy inside.",
            duration: "12 min",
            tip: "Charcoal is non-negotiable for authentic flavor. If using broiler, brush with reserved marinade halfway through for that lacquered look.",
        },
        {
            step: 6,
            title: "Cook the noodles",
            description:
                "If using fresh bún, simply blanch in boiling water for 30 seconds, drain, and rinse with cold water. If dried, follow package directions (usually 4-5 min in boiling water), then rinse cold to stop cooking. Drain WELL — wet noodles dilute the dipping broth.",
            duration: "5 min",
        },
        {
            step: 7,
            title: "Assemble and serve",
            description:
                "Warm the dipping broth gently (do not boil). Add fresh minced garlic and sliced chili. Divide grilled patties and pork belly between 4 small bowls and ladle warm broth over them — the meat should bob in the broth. Add a generous spoonful of pickled vegetables to each bowl. Serve alongside vermicelli, lettuce, and the herb platter. To eat: tear lettuce, top with vermicelli and herbs, dip into the broth bowl, take a bite of meat with each mouthful.",
            duration: "5 min",
            tip: "The dipping broth should be WARM, not hot — too much heat kills the herbs and makes the dish heavy.",
        },
    ],
 
    tips: [
        "Mix ground pork in ONE direction only — this aligns proteins and gives the patties their authentic bouncy texture.",
        "Use a charcoal grill if possible. The smoke flavor is what separates real bún chả from imitations.",
        "Marinate at least 1 hour, ideally 3. Overnight is too long — fish sauce will start curing the meat.",
        "Don't over-thicken the dipping broth — it should be light and drinkable, not syrupy.",
        "Eat it for LUNCH like the Hanoians do. The flavors and digestion both work better in daylight hours.",
    ],
 
    variations: [
        "Bún chả Saigon: darker broth with more sugar and caramel, often served with peanuts on top.",
        "Bún chả cá: substitute mackerel patties for pork — popular in coastal Hải Phòng.",
        "Vegetarian (chay): use lemongrass tofu and seitan patties, replace fish sauce with light soy + nutritional yeast.",
    ],
 
    nutrition: {
        calories: 580,
        protein: "38 g",
        fat: "26 g",
        carbs: "48 g",
        sodium: "1850 mg",
        fiber: "3 g",
    },
 
    keywords: [
        "bun cha recipe",
        "bun cha ha noi",
        "hanoi grilled pork vermicelli",
        "vietnamese grilled pork bowl",
        "anthony bourdain obama bun cha",
        "vietnamese pork patties",
        "authentic bun cha recipe",
        "hanoi street food recipe",
    ],
 
    datePublished: "2026-04-27",
    author: "FlavorNest Vietnam",
};

// ─────────────────────────────────────────────────────────────
//  Export all detailed recipes
// ─────────────────────────────────────────────────────────────
export const RECIPES_DETAILED: RecipeDetailed[] = [
    banhCanhHe,
    bunBoHue,
    banhBao,
    bunChaHaNoi,
    {
        slug: "pho-bo-ha-noi",
        title: "Hanoi Beef Pho",
        subtitle: "Phở Bò Hà Nội",
        shortDescription: "Experience the soul of Vietnamese cuisine. Authentic Hanoi-style Pho features a crystal-clear, savory broth, tender beef slices, and delicate rice noodles without the southern sweetness.",
        description: "Born in Northern Vietnam in the early 1900s, Phở began as a humble street food carried on shoulder poles (phở gánh). Unlike its Southern cousin, Hanoi Pho focuses on the purity of the broth—subtle, fragrant, and clear as amber.\n\nThe secret lies in an 8-hour simmer of marrow bones, charred ginger, and toasted spices. Every bowl is a balance of textures: the silky 'bánh phở', the crunch of fresh scallions, and the tender richness of beef shank and rare flank.\n\nPreparing an authentic bowl at home is a labor of love. While it takes nearly 5 hours, most of that time is passive simmering, allowing the aromas to fill your kitchen with the scent of old Hanoi.",
        storySnippet: "I still remember the chilly Hanoi mornings, sitting on a tiny plastic stool, watching the steam rise from a giant cauldron. That first sip of clear, scalding broth is a memory I try to recreate in every bowl.",
        image: "/images/recipes/phohanoi.jpg",
        imageAlt: "Steaming bowl of Hanoi beef pho with thinly sliced beef, herbs and lime wedges",
        prepTime: "30 min",
        cookTime: "4 hr 30 min",
        totalTime: "5 hr",
        servings: 4,
        yield: "4 bowls",
        difficulty: "Hard",
        category: "Soup",
        cuisine: "Vietnamese",
        rating: 4.9,
        ratingCount: 248,
        tags: ["Hanoi", "Soup", "Classic"],
        ingredients: [
            {
                section: "For the broth",
                items: [
                    { amount: "2 kg (4.4 lb)", name: "Beef bones", nameVi: "Xương bò", note: "marrow + knuckle mix" },
                    { amount: "500 g (1.1 lb)", name: "Beef shank", nameVi: "Bắp bò", note: "whole piece" },
                    { amount: "2 large", name: "Yellow onion", nameVi: "Hành tây", note: "halved, unpeeled" },
                    { amount: "1 large piece", name: "Ginger", nameVi: "Gừng", note: "halved lengthwise" },
                    { amount: "6 pods", name: "Star anise", nameVi: "Hoa hồi" },
                    { amount: "2 sticks", name: "Cinnamon", nameVi: "Quế", note: "Vietnamese cassia" },
                    { amount: "4", name: "Cloves", nameVi: "Đinh hương" },
                    { amount: "1 tbsp", name: "Coriander seeds", nameVi: "Hạt ngò rí" },
                    { amount: "3", name: "Cardamom pods", nameVi: "Thảo quả", note: "black preferred" },
                    { amount: "3 L (12 cups)", name: "Water", nameVi: "Nước" },
                    { amount: "3 tbsp", name: "Fish sauce", nameVi: "Nước mắm", note: "Phú Quốc" },
                    { amount: "2 tbsp", name: "Rock sugar", nameVi: "Đường phèn" },
                    { amount: "1 tbsp", name: "Salt", nameVi: "Muối", note: "to taste" }
                ]
            },
            {
                section: "For serving",
                items: [
                    { amount: "300 g (10 oz)", name: "Beef eye round", nameVi: "Thịt thăn bò", note: "sliced paper-thin for tái" },
                    { amount: "500 g (1.1 lb)", name: "Fresh pho noodles", nameVi: "Bánh phở tươi", note: "flat rice noodles" },
                    { amount: "3 stalks", name: "Scallion", nameVi: "Hành lá", note: "white + green, thin sliced" },
                    { amount: "1 bunch", name: "Cilantro", nameVi: "Ngò rí", note: "chopped" }
                ]
            },
            {
                section: "Herb plate & garnish",
                items: [
                    { amount: "1", name: "Lime", nameVi: "Chanh", note: "cut into wedges" },
                    { amount: "2", name: "Bird's eye chilies", nameVi: "Ớt hiểm", note: "sliced" },
                    { amount: "1", name: "Yellow onion", nameVi: "Hành tây", note: "very thin slices, soaked" },
                    { amount: "to taste", name: "Culantro", nameVi: "Ngò gai", note: "optional" }
                ]
            }
        ],
        instructions: [
            {
                step: 1,
                title: "Parboil the bones",
                description: "Boil bones in water for 10 minutes until grey foam rises. Drain and scrub bones clean under cold water. This is non-negotiable for a clear broth.",
                duration: "10 min",
                tip: "Hanoi pho broth MUST be clear — this step determines it."
            },
            {
                step: 2,
                title: "Char the aromatics",
                description: "Char onion and ginger directly over a gas flame or under a broiler until the skins are blackened and fragrant, about 10 minutes. Rinse off excess char lightly.",
                duration: "10 min",
                tip: "Smoky char flavor defines pho — don't skip."
            },
            {
                step: 3,
                title: "Toast the spices",
                description: "Dry-toast star anise, cinnamon, cloves, coriander seeds, and cardamom in a pan for 3-5 minutes until highly fragrant. Tie them in a cheesecloth bag.",
                duration: "5 min"
            },
            {
                step: 4,
                title: "Deep simmer",
                description: "Add cleaned bones, shank, charred aromatics, and the spice bag to a pot with 3L water. Bring to a boil, then immediately reduce to a gentle simmer. Skim foam constantly for the first 15 mins. Simmer for 4 hours total.",
                duration: "4 hr",
                tip: "Never boil — only gentle simmer. Rolling boil = cloudy broth."
            },
            {
                step: 5,
                title: "Season and Assemble",
                description: "Strain the broth. Season with fish sauce, rock sugar, and salt. Blanch fresh noodles for 30 seconds. Top with sliced shank and raw beef, then pour the BOILING broth over to cook the meat instantly.",
                duration: "10 min",
                tip: "The broth must be boiling when poured to cook the raw beef slices safely."
            }
        ],
        tips: [
            "8+ hour broth = deeper flavor. Overnight simmer on lowest heat works too.",
            "Slice beef paper-thin — freeze for 30 min first for easier cutting.",
            "Bánh phở tươi (fresh) beats dried 10:1. Find them at Asian markets."
        ],
        nutrition: {
            calories: 480,
            protein: "34 g",
            fat: "14 g",
            carbs: "52 g"
        },
        keywords: ["pho recipe", "hanoi pho", "authentic vietnamese soup", "beef noodle soup"],
        datePublished: "2026-04-20",
        author: "FlavorNest Vietnam"
    },
    
];

// ─────────────────────────────────────────────────────────────
//  Helper — get recipe by slug
// ─────────────────────────────────────────────────────────────
export function getRecipeDetailed(slug: string): RecipeDetailed | undefined {
    return RECIPES_DETAILED.find((recipe) => recipe.slug === slug);
}

// ─────────────────────────────────────────────────────────────
//  Helper — get all detailed recipe slugs (for sitemap/routing)
// ─────────────────────────────────────────────────────────────
export function getAllDetailedSlugs(): string[] {
    return RECIPES_DETAILED.map((recipe) => recipe.slug);
}

// ─────────────────────────────────────────────────────────────
//  Compatibility adapter — convert RecipeDetailed to basic Recipe
//  Used so detailed recipes show up in /recipes grid + homepage
//  alongside legacy RECIPES from src/data/recipes.ts
// ─────────────────────────────────────────────────────────────
import type { Recipe } from "./recipes";

export function toLegacyRecipe(detailed: RecipeDetailed): Recipe {
    return {
        slug: detailed.slug,
        title: detailed.title,
        subtitle: detailed.subtitle,
        shortDescription: detailed.shortDescription,
        image: detailed.image,
        imageAlt: detailed.imageAlt,
        prepTime: detailed.prepTime,
        cookTime: detailed.cookTime,
        totalTime: detailed.totalTime,
        servings: detailed.servings,
        difficulty: detailed.difficulty,
        category: detailed.category,
        rating: detailed.rating,
        ratingCount: detailed.ratingCount,
        tags: detailed.tags,
        isFeatured: detailed.isFeatured,
        isNew: detailed.isNew,
        calories: detailed.nutrition?.calories,
    };
}

// ─────────────────────────────────────────────────────────────
//  Get all detailed recipes as basic Recipe[] format
//  Ready to merge with RECIPES from recipes.ts
// ─────────────────────────────────────────────────────────────
export function getDetailedAsLegacy(): Recipe[] {
    return RECIPES_DETAILED.map(toLegacyRecipe);
}
