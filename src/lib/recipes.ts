// ─────────────────────────────────────────────────────────────────────────────
//  lib/recipeContent.ts
//  FlavorNest Vietnam — Full recipe content for 8 signature dishes
//
//  EASY TO SCALE: add new recipes by appending to RECIPE_CONTENT array.
//  Each object maps to a slug used in app/recipes/[slug]/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

export interface IngredientGroup {
    group: string
    items: string[]
}

export interface Step {
    title: string
    text: string
    tip?: string   // inline tip shown below step
}

export interface NutritionFact {
    label: string
    value: string
    icon: string
}

export interface RecipeContent {
    slug: string
    title: string
    subtitle: string        // Vietnamese name
    tagline: string        // one-line hook
    category: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    prepTime: string
    cookTime: string
    totalTime: string
    servings: number
    rating: string
    image: string
    imageAlt: string

    storyTitle: string
    story: string[]      // paragraphs

    ingredients: IngredientGroup[]
    steps: Step[]
    nutrition: NutritionFact[]
    tips: string[]      // Pro Tips from the Nest
    variations?: string[]
    related: string[]      // slugs
}

// ─────────────────────────────────────────────────────────────────────────────
export const RECIPE_CONTENT: RecipeContent[] = [

    // ══════════════════════════════════════════════════════════════════════════
    //  1. HANOI BEEF PHO
    // ══════════════════════════════════════════════════════════════════════════
    {
        slug: 'hanoi-beef-pho',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        tagline: 'The soul of Vietnam in a bowl — a broth so clear it feels like liquid amber.',
        category: 'Soup',
        difficulty: 'Medium',
        prepTime: '20 min',
        cookTime: '3 hrs',
        totalTime: '3 hrs 20 min',
        servings: 4,
        rating: '4.9',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Steaming bowl of Hanoi beef pho with herbs and lime',

        storyTitle: 'Born at Dawn, Perfected Over Centuries',
        story: [
            `There is a particular kind of silence in Hanoi at five in the morning. The Old Quarter hasn't woken yet, the motorbikes haven't started, and the only sound drifting through the alleyways is the low, steady bubble of a pho pot that has been simmering since midnight. This is where phở begins — not with the recipe, but with the ritual.`,
            `Historians trace the origins of phở to the early 1900s in Nam Định province, where the tastes of French colonial cuisine — specifically the long-simmered pot-au-feu — collided with Vietnam's deeply rooted noodle culture. What emerged was something entirely new and entirely Vietnamese. By the 1920s, phở had walked north to Hanoi, where it was refined, stripped of excess, and elevated into the dish the world now loves.`,
            `The Hanoian school of phở believes that greatness lives in restraint. The broth must be crystal-clear, gently sweet, and deeply aromatic — never cloudy, never harsh. The secret is patience: hours of slow simmering, constant skimming, and two techniques you must never skip: blanching the bones first to remove impurities, and charring the onion and ginger until they are genuinely blackened. These are not shortcuts you can take back.`,
        ],

        ingredients: [
            {
                group: 'The Broth',
                items: [
                    '2 lbs (900g) beef marrow bones',
                    '1 lb (450g) beef knuckle bones',
                    '1 large yellow onion, halved',
                    '3-inch (7cm) fresh ginger, halved lengthwise',
                    '3 whole star anise',
                    '1 cinnamon stick',
                    '3 whole cloves',
                    '1 tsp coriander seeds, toasted',
                    '1 tsp fennel seeds, toasted',
                    '¼ cup (60ml) fish sauce',
                    '1 tbsp rock sugar (or palm sugar)',
                    'Salt to taste',
                    '4 litres cold water',
                ],
            },
            {
                group: 'Bowl Build',
                items: [
                    '14 oz (400g) dried flat rice noodles (bánh phở)',
                    '½ lb (225g) beef eye round, paper-thin sliced',
                    '¼ lb (115g) cooked beef brisket, sliced',
                    '3 spring onions, thinly sliced',
                    'Large handful fresh cilantro',
                ],
            },
            {
                group: 'Herb Plate',
                items: [
                    'Bean sprouts',
                    'Thai basil sprigs',
                    '2 limes, cut into wedges',
                    'Fresh jalapeño or bird\'s eye chilli, sliced',
                    'Hoisin sauce and sriracha on the side',
                ],
            },
        ],

        steps: [
            {
                title: 'Blanch the bones',
                text: 'Place all bones in a large stockpot and cover with cold water. Bring to a rolling boil over high heat and cook hard for 10 minutes — you\'ll see a lot of grey foam rise to the surface. Drain completely, then rinse each bone under cold running water, scrubbing off any residue. This single step is the most important secret to a crystal-clear, clean-tasting broth.',
                tip: 'Never skip this step. The foam is blood and impurities — if left in, your broth will turn cloudy and taste muddy.',
            },
            {
                title: 'Char the aromatics',
                text: 'Hold the onion halves and ginger directly over a gas flame with tongs, turning occasionally, until genuinely charred on all sides — about 5 minutes total. Alternatively, broil them cut-side up under maximum heat for 8–10 minutes. You want real char, not just golden colouring.',
                tip: 'Truly charred is correct. This caramelisation adds smokiness, sweetness, and the characteristic deep amber colour that defines Hanoi pho.',
            },
            {
                title: 'Toast the spices',
                text: 'Place star anise, cinnamon, cloves, coriander and fennel seeds in a dry pan over medium heat. Shake constantly for 2 minutes until fragrant and slightly darkened. Transfer immediately to a bowl — they will keep cooking from residual heat if left in the pan.',
            },
            {
                title: 'Build and simmer the broth',
                text: 'Return the blanched bones to a clean pot. Add the charred aromatics, toasted spices, and 4 litres of cold water. Bring to the most gentle simmer possible over medium heat — small, lazy bubbles only. Never a rolling boil. Skim all foam from the surface during the first 30 minutes.',
                tip: 'A hard boil permanently emulsifies fat into the broth, making it cloudy. Once the damage is done, it cannot be reversed.',
            },
            {
                title: 'Season and continue',
                text: 'After 1 hour, add fish sauce, rock sugar, and 1 tsp salt. Continue simmering uncovered for another 1.5–2 hours, skimming every 30 minutes. The broth is ready when it is deeply golden, aromatic, and assertively savoury with a gentle background sweetness.',
            },
            {
                title: 'Strain and keep hot',
                text: 'Strain the broth through a fine-mesh sieve lined with cheesecloth. Discard all solids. Return the clear broth to a clean pot and keep at a very gentle simmer. Do a final taste and seasoning — it should taste slightly over-seasoned, as it will dilute when ladled over noodles.',
            },
            {
                title: 'Cook the noodles',
                text: 'Soak dried rice noodles in cold water for 30 minutes. Bring a separate pot of unsalted water to a full boil. Cook the noodles for just 30–60 seconds — they are very fast. Drain immediately and divide into 4 deep serving bowls.',
            },
            {
                title: 'Assemble and serve',
                text: 'Arrange cooked brisket slices and raw beef eye round over the noodles. Scatter spring onion and cilantro on top. Ladle the near-boiling broth directly over the raw beef — the heat of the broth gently cooks the thin slices to silky perfection. Serve immediately with the full herb plate alongside.',
                tip: 'The broth must be close to boiling when it hits the bowl. Lukewarm broth will not cook the raw beef, and the entire bowl will suffer.',
            },
        ],

        nutrition: [
            { label: 'Calories', value: '420 kcal', icon: '🔥' },
            { label: 'Protein', value: '38 g', icon: '💪' },
            { label: 'Carbs', value: '42 g', icon: '🌾' },
            { label: 'Fat', value: '8 g', icon: '🫒' },
            { label: 'Fibre', value: '2 g', icon: '🌿' },
            { label: 'Sodium', value: '1,240 mg', icon: '🧂' },
        ],

        tips: [
            '**Bone mix matters:** Use both marrow and knuckle bones. Marrow adds richness and body; knuckle adds silky gelatin that gives the broth its characteristic weight.',
            '**Freeze leftover broth** in 2-cup portions — it keeps for 3 months and is the single best weeknight shortcut you can keep on hand.',
            '**Slow cooker version:** Blanch bones as instructed, then cook on LOW for 10–12 hours. The result is excellent and hands-free.',
            '**Raw beef thickness:** Ask your butcher to slice it on a meat slicer, or freeze the beef for 30 minutes before slicing at home for cleaner, thinner cuts.',
        ],
        variations: [
            '**Phở Gà (Chicken Pho):** Replace beef bones with one whole chicken and reduce simmer time to 1.5 hours. Add a small piece of dried tangerine peel to the spice blend for brightness.',
            '**Vegan Phở:** Build the broth using mushroom and kombu dashi. Add 2 tbsp white miso, dried shiitake mushrooms, and a pinch of smoked salt for depth.',
        ],
        related: ['vietnamese-chicken-pho', 'bun-rieu', 'bun-cha-hanoi'],
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  2. BUN CHA HANOI
    // ══════════════════════════════════════════════════════════════════════════
    {
        slug: 'bun-cha-hanoi',
        title: 'Hanoi Grilled Pork Vermicelli',
        subtitle: 'Bún Chả Hà Nội',
        tagline: 'Smoke, caramel and tangy broth — the lunch that stopped a president.',
        category: 'Noodles',
        difficulty: 'Easy',
        prepTime: '20 min',
        cookTime: '25 min',
        totalTime: '45 min',
        servings: 4,
        rating: '4.8',
        image: 'https://images.unsplash.com/photo-1623682785702-f0c9fcfe2fc0?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Bun Cha Hanoi grilled pork patties in warm dipping broth',

        storyTitle: 'The Dish That Stopped a President',
        story: [
            `In May 2016, a black SUV pulled up to a modest plastic-stool eatery on Lê Văn Hưu street in Hanoi. Out stepped President Barack Obama and Anthony Bourdain. They sat down, ordered two Hà Nội Beers, and ate bún chả. The photograph went viral within hours. The restaurant, Bún Chả Hương Liên, has barely had an empty seat since.`,
            `But for Hanoians, bún chả had been their quiet lunchtime secret long before any president discovered it. This quintessentially northern dish — unknown in its proper form anywhere else in Vietnam — is built on charcoal smoke. The pork patties, made from coarsely ground belly and shaped by hand, must hit a scorching-hot grate until they develop the sticky, caramelised crust that no gas flame can replicate. The smoke is not a side effect. The smoke is the point.`,
            `What makes bún chả different from every other Vietnamese noodle dish is the warm dipping broth — light, tangy, gently sweet — into which you submerge cold noodles and grilled pork together. It is an act of assembly and trust, and the result is one of the most perfectly balanced meals in the Vietnamese canon.`,
        ],

        ingredients: [
            {
                group: 'Pork Patties',
                items: [
                    '1 lb (450g) ground pork, 70/30 lean to fat ratio',
                    '3 tbsp fish sauce',
                    '2 tbsp granulated sugar',
                    '4 cloves garlic, very finely minced',
                    '2 shallots, very finely minced',
                    '1 tbsp lemongrass, white part only, minced',
                    '½ tsp freshly ground black pepper',
                    '1 tsp sesame oil',
                ],
            },
            {
                group: 'Grilled Pork Belly',
                items: [
                    '½ lb (225g) pork belly, skin-on, sliced ½-inch thick',
                    '2 tbsp fish sauce',
                    '1 tbsp granulated sugar',
                    '2 cloves garlic, minced',
                    '1 tsp sesame oil',
                ],
            },
            {
                group: 'Warm Dipping Broth (Nước Chấm)',
                items: [
                    '¼ cup (60ml) fish sauce',
                    '¼ cup (60ml) granulated sugar',
                    '½ cup (120ml) warm water',
                    '3 tbsp rice vinegar',
                    '2 cloves garlic, thinly sliced',
                    '1 bird\'s eye chilli, sliced',
                    'Juice of half a lime',
                ],
            },
            {
                group: 'Serve With',
                items: [
                    '12 oz (340g) dried rice vermicelli, cooked and cooled',
                    'Perilla (tía tô) leaves',
                    'Fresh mint',
                    'Butter lettuce leaves',
                    'Bean sprouts',
                ],
            },
        ],

        steps: [
            {
                title: 'Marinate both pork preparations',
                text: 'For the patties: combine ground pork with its marinade ingredients and mix firmly with your hands for a full 2 minutes. This develops the proteins and gives the patties a bouncy texture that holds together on the grill. Shape into flat oval patties about ¾-inch thick. For the belly: coat the sliced pork belly in its marinade separately. Refrigerate both for at least 30 minutes — overnight delivers significantly better caramelisation.',
                tip: 'The 30% fat content in the ground pork is not negotiable. Lean pork will give you dry, crumbly, flavourless patties.',
            },
            {
                title: 'Make the warm dipping broth',
                text: 'Dissolve the sugar in warm water, stirring until clear. Add fish sauce, rice vinegar, garlic, and chilli. Taste — it should be perfectly balanced between sweet, sour, and salty. Add lime juice just before serving to preserve its brightness. Transfer to a small saucepan and keep warm over very low heat. This broth is always served warm, never cold.',
                tip: 'Trust your palate over the measurements. Different brands of fish sauce have different salt levels. Taste and adjust.',
            },
            {
                title: 'Grill the pork',
                text: 'For charcoal: get the coals to a hot, grey-ash stage. For cast-iron: heat on the highest flame until it is just beginning to smoke. Grill patties 3–4 minutes per side until dark char marks appear and the surface is sticky and caramelised. Grill belly slices 2–3 minutes per side. Do not move them too early — let the crust form fully before flipping.',
                tip: 'The char is not optional. Pale, underseared bún chả is missing its entire identity. Embrace the dark edges.',
            },
            {
                title: 'Serve authentically',
                text: 'Ladle the warm dipping broth into deep individual bowls. Place the grilled pork — both patties and belly — directly into the broth. It will continue to flavour the liquid as you eat. Serve cold noodle bundles and the full herb plate alongside. To eat: dip a loose bundle of noodles into the broth alongside the pork, wrap in lettuce and perilla, and eat in one constructed bite.',
            },
        ],

        nutrition: [
            { label: 'Calories', value: '510 kcal', icon: '🔥' },
            { label: 'Protein', value: '32 g', icon: '💪' },
            { label: 'Carbs', value: '55 g', icon: '🌾' },
            { label: 'Fat', value: '16 g', icon: '🫒' },
            { label: 'Fibre', value: '3 g', icon: '🌿' },
            { label: 'Sodium', value: '1,080 mg', icon: '🧂' },
        ],

        tips: [
            '**Charcoal is not just aesthetics:** It genuinely changes the dish. The smoke transforms the caramelisation into something a gas flame simply cannot produce. If you have a small charcoal grill or tabletop unit, use it.',
            '**A pinch of MSG** added to the warm broth is what makes restaurant bún chả taste different from home versions. Hanoian cooks have been doing this for decades.',
            '**Making ahead:** The dipping broth keeps refrigerated for 5 days and only improves. Marinate the pork overnight for the best caramelisation.',
        ],
        variations: [
            '**Vegetarian Bún Chả:** Replace both pork preparations with firm tofu marinated in the same seasonings, grilled until deeply golden and crispy on all sides.',
        ],
        related: ['hanoi-beef-pho', 'com-tam', 'banh-mi'],
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  3. VIETNAMESE BANH MI
    // ══════════════════════════════════════════════════════════════════════════
    {
        slug: 'banh-mi',
        title: 'Vietnamese Bánh Mì',
        subtitle: 'Bánh Mì Thịt Nướng',
        tagline: 'The baguette that became something France never imagined.',
        category: 'Sandwich',
        difficulty: 'Easy',
        prepTime: '25 min',
        cookTime: '15 min',
        totalTime: '40 min',
        servings: 4,
        rating: '4.9',
        image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Vietnamese banh mi sandwich with lemongrass pork, herbs and pickled vegetables',

        storyTitle: 'The Baguette That Became Vietnamese',
        story: [
            `It began as an imposition. French colonial rule brought wheat flour, ovens, and the baguette to a rice culture that had never needed them. For decades, the bread remained French — eaten by the colonisers and eventually by the Vietnamese elite who mimicked their tastes. Then, somewhere between the wars and the street stalls of Saigon, something extraordinary happened.`,
            `Vietnamese hands transformed the baguette completely. They made it lighter, crispier, and more fragile than its French ancestor — a shell of shattering crust over a barely-there crumb, designed not for butter and jam but for a violent riot of flavours: rich pâté, grilled lemongrass pork, silky mayo, crunchy pickled daikon and carrot, fresh jalapeño, and a fistful of cilantro. The result is a sandwich that contains an entire philosophy of contrast: hot and cold, soft and crunchy, rich and acid.`,
            `Today, bánh mì is arguably the most influential street food Vietnam has exported to the world. Its genius lies in that philosophy — and in the Maggi seasoning sauce stirred into the mayo, a detail that separates a transcendent bánh mì from a merely good one.`,
        ],

        ingredients: [
            {
                group: 'Lemongrass Grilled Pork',
                items: [
                    '1 lb (450g) pork shoulder, thinly sliced',
                    '3 stalks lemongrass, white part only, finely minced',
                    '3 cloves garlic, minced',
                    '2 tbsp fish sauce',
                    '1 tbsp oyster sauce',
                    '1 tbsp granulated sugar',
                    '1 tsp turmeric powder',
                    '1 tsp sesame oil',
                ],
            },
            {
                group: 'Quick-Pickled Vegetables',
                items: [
                    '1 cup (120g) daikon radish, julienned',
                    '1 cup (120g) carrot, julienned',
                    '½ cup (120ml) rice vinegar',
                    '¼ cup (50g) granulated sugar',
                    '1 tsp salt',
                ],
            },
            {
                group: 'Sandwich Build',
                items: [
                    '4 Vietnamese baguettes (or small French demi-baguettes)',
                    '4 tbsp chicken liver pâté',
                    '4 tbsp mayonnaise',
                    '1 tsp Maggi seasoning sauce (or light soy sauce)',
                    '1 jalapeño, thinly sliced',
                    '½ English cucumber, cut into thin batons',
                    'Large handful fresh cilantro',
                ],
            },
        ],

        steps: [
            {
                title: 'Make the quick pickles',
                text: 'Stir rice vinegar, sugar, and salt together until dissolved. Add the julienned daikon and carrot and toss well to coat. Set aside at room temperature for at least 20 minutes — the vegetables will soften slightly and turn gently tangy. These can be made 2 days ahead; the flavour only improves.',
            },
            {
                title: 'Marinate the pork',
                text: 'Combine all marinade ingredients with the sliced pork. Massage the marinade in thoroughly with your hands. Rest for at least 15 minutes at room temperature, or overnight in the fridge. The lemongrass and turmeric will perfume the meat with a fragrance that is distinctly and unmistakably Vietnamese.',
            },
            {
                title: 'Grill the pork',
                text: 'Heat a grill pan or heavy skillet over high heat until it is just beginning to smoke. Add the pork in a single layer — no crowding, or the pork will steam instead of sear. Cook 2–3 minutes per side until deeply caramelised and cooked through. Work in batches.',
                tip: 'The sugar in the marinade will caramelise quickly. Watch carefully and move the pork if it\'s darkening too fast — you want colour, not char.',
            },
            {
                title: 'Make Maggi mayo',
                text: 'Stir the Maggi seasoning sauce into the mayonnaise. This small addition creates a savoury, umami-rich spread that is one of the defining secret flavours of a truly great bánh mì. Do not skip it.',
            },
            {
                title: 'Build the sandwich',
                text: 'Warm the baguette in a 400°F / 200°C oven for 5 minutes to restore the crust to shattering crispness. Split lengthwise without cutting all the way through. Spread pâté generously on one inner face and Maggi mayo on the other. Layer in cucumber strips, grilled pork, well-drained pickled vegetables, jalapeño, and a thick handful of fresh cilantro. Press lightly and eat immediately.',
                tip: 'A warm, crispy baguette is non-negotiable. The crunch is half the experience.',
            },
        ],

        nutrition: [
            { label: 'Calories', value: '580 kcal', icon: '🔥' },
            { label: 'Protein', value: '28 g', icon: '💪' },
            { label: 'Carbs', value: '62 g', icon: '🌾' },
            { label: 'Fat', value: '22 g', icon: '🫒' },
            { label: 'Fibre', value: '4 g', icon: '🌿' },
            { label: 'Sodium', value: '980 mg', icon: '🧂' },
        ],

        tips: [
            '**The baguette matters enormously.** Vietnamese baguettes are lighter and more fragile than French ones. Look for them at Asian bakeries — they make a real difference.',
            '**Pickled veg can be made 3 days ahead.** They only get better as they sit. Keep a jar in the fridge and use them on everything.',
            '**Lemongrass tofu** makes an excellent vegetarian swap — marinate and grill exactly the same way.',
        ],
        variations: [
            '**Bánh Mì Gà:** Swap pork for chicken thighs marinated identically. Grill until the skin is golden and slightly charred.',
            '**Bánh Mì Chả Cá:** Replace the grilled pork with lemongrass fish cakes (available in Asian supermarkets) for a lighter, coastal Vietnamese flavour.',
        ],
        related: ['bun-cha-hanoi', 'fresh-spring-rolls', 'com-tam'],
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  4. FRESH SPRING ROLLS
    // ══════════════════════════════════════════════════════════════════════════
    {
        slug: 'fresh-spring-rolls',
        title: 'Fresh Spring Rolls with Shrimp & Pork',
        subtitle: 'Gỏi Cuốn Tôm Thịt',
        tagline: 'Vietnam\'s most elegant finger food — cool, fresh, and impossibly beautiful.',
        category: 'Rolls',
        difficulty: 'Easy',
        prepTime: '30 min',
        cookTime: '15 min',
        totalTime: '45 min',
        servings: 4,
        rating: '4.7',
        image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Translucent Vietnamese fresh spring rolls with shrimp and herbs',

        storyTitle: 'The Most Beautiful Food Vietnam Makes',
        story: [
            `There is a particular pleasure in a perfectly made gỏi cuốn that has nothing to do with flavour, and everything to do with sight. When the rice paper is rolled correctly, you can see straight through it: the pink curve of a shrimp pressed against the translucent skin, the green of a mint leaf, the soft coil of vermicelli. It is the only Vietnamese dish that reveals itself entirely before you eat it.`,
            `Gỏi cuốn — literally "salad roll" — is Vietnamese cuisine at its most self-assured. It needs no fire, no wok, no long-simmered broth. It asks for nothing but freshness: the best shrimp you can find, pork belly poached gently in ginger water, crisp lettuce, tender vermicelli, and herbs so fragrant they perfume your hands before you've even eaten. The peanut-hoisin dipping sauce is its one indulgence — rich and nutty, a perfect counterpoint to all that cool freshness.`,
            `The technique, once learned, is meditative. You dip the rice paper for exactly eight seconds. No more. You lay it flat. You place each element with intention. You roll, tight but not tense. And then you make the next one, and the next, and by the end you understand why so many Vietnamese grandmothers say that making gỏi cuốn is the best way to slow down.`,
        ],

        ingredients: [
            {
                group: 'Filling',
                items: [
                    '12 large shrimp, peeled and deveined',
                    '½ lb (225g) pork belly',
                    '3–4 slices fresh ginger (for poaching)',
                    '4 oz (115g) dried rice vermicelli',
                    '8 sheets rice paper (22cm / 8.5-inch)',
                    'Butter or green leaf lettuce leaves',
                    'Fresh mint leaves',
                    'Fresh Thai basil leaves',
                    'Bean sprouts (optional)',
                    '½ English cucumber, cut into thin batons',
                ],
            },
            {
                group: 'Peanut Dipping Sauce',
                items: [
                    '3 tbsp hoisin sauce',
                    '2 tbsp creamy peanut butter',
                    '2–3 tbsp warm water (to thin)',
                    '1 tbsp fresh lime juice',
                    '1 tsp chilli garlic sauce',
                    '2 tbsp crushed roasted peanuts, to garnish',
                ],
            },
        ],

        steps: [
            {
                title: 'Poach the pork',
                text: 'Place pork belly in a small pot with cold water, ginger slices, and a pinch of salt. Bring to a simmer and cook for 20 minutes until cooked through. Remove, allow to cool completely, then slice into thin strips. Reserve the poaching water.',
            },
            {
                title: 'Poach the shrimp',
                text: 'Bring the reserved pork water back to a simmer. Add the shrimp and poach for 2–3 minutes until just pink and curled. Remove immediately and cool. Once cool, slice each shrimp in half lengthwise — this creates the beautiful pink-on-white presentation visible through the rice paper. This detail is not optional.',
                tip: 'Sliced shrimp laid pink-side-down against the rice paper is the signature look of great gỏi cuốn. It\'s the first thing people see.',
            },
            {
                title: 'Prepare vermicelli and set up your station',
                text: 'Soak vermicelli in cold water for 10 minutes, then blanch in boiling water for 30 seconds. Drain and rinse cold. Drizzle with a little sesame oil to prevent sticking. Arrange all your fillings in separate bowls on the table — this is your rolling station. Have a wide, shallow bowl of warm water ready.',
            },
            {
                title: 'Make the peanut sauce',
                text: 'Whisk hoisin, peanut butter, warm water, and lime juice together until completely smooth. Adjust water for a pourable, dipping consistency. Stir in chilli garlic sauce. Transfer to a small bowl and top with crushed peanuts.',
            },
            {
                title: 'Roll the spring rolls',
                text: 'Dip one sheet of rice paper in the warm water for exactly 8–10 seconds — it will finish softening as you work. Lay flat on a clean, slightly damp surface. Place 3 shrimp halves pink-side-down in the centre-lower third, then lettuce, a small bundle of vermicelli, pork strips, cucumber, mint, and basil. Fold the bottom up and over the filling, fold in the sides, then roll forward firmly.',
                tip: '8–10 seconds only. The rice paper continues to soften for 30 seconds after removal from water. Over-soaking makes it impossible to roll.',
            },
            {
                title: 'Serve',
                text: 'Serve immediately — the rolls are at their absolute best within 30 minutes. If making ahead, place on a lightly oiled plate, cover with a damp cloth (not plastic wrap), and keep at room temperature for up to 1 hour.',
            },
        ],

        nutrition: [
            { label: 'Calories', value: '290 kcal', icon: '🔥' },
            { label: 'Protein', value: '22 g', icon: '💪' },
            { label: 'Carbs', value: '38 g', icon: '🌾' },
            { label: 'Fat', value: '5 g', icon: '🫒' },
            { label: 'Fibre', value: '3 g', icon: '🌿' },
            { label: 'Sodium', value: '620 mg', icon: '🧂' },
        ],

        tips: [
            '**Keep a damp cloth under your rolling surface** to prevent the rice paper from sticking to the table.',
            '**Do not refrigerate assembled rolls** — the rice paper hardens and turns brittle in the cold. Always roll to order or keep at room temperature.',
            '**Add ripe avocado strips** for a creamy, modern variation that works beautifully.',
        ],
        variations: [
            '**Vegetarian Gỏi Cuốn:** Replace shrimp and pork with pan-fried tofu and ripe mango strips. The peanut sauce is already vegetarian.',
        ],
        related: ['banh-mi', 'banh-xeo', 'bun-cha-hanoi'],
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  5. BANH XEO
    // ══════════════════════════════════════════════════════════════════════════
    {
        slug: 'banh-xeo',
        title: 'Crispy Vietnamese Sizzling Pancake',
        subtitle: 'Bánh Xèo',
        tagline: 'If the pan doesn\'t roar, it isn\'t hot enough.',
        category: 'Street Food',
        difficulty: 'Easy',
        prepTime: '20 min',
        cookTime: '20 min',
        totalTime: '40 min',
        servings: 4,
        rating: '4.8',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Crispy golden Vietnamese banh xeo sizzling pancake being folded',

        storyTitle: 'The Sizzle That Gives It Its Name',
        story: [
            `The name is the recipe. "Bánh" means cake or bread in Vietnamese. "Xèo" is pure onomatopoeia — it is the violent, joyful, unmistakable sound of rice batter hitting a white-hot pan. That detonation of steam and oil, somewhere between a hiss and a roar, is the dish announcing itself. If you pour batter and hear a polite bubble, the pan is too cold. You are making something sad. You want a declaration.`,
            `Bánh xèo is a Central and Southern Vietnamese dish, and its spiritual homeland is in Đà Nẵng and Hội An, where the restaurants are smoke-filled and the herb plates are enormous and the eating is loud and communal. The batter itself is simple — rice flour, coconut milk, turmeric — but that golden turmeric colour and the faint coconut sweetness are fundamental. The filling is shrimp and pork and bean sprouts, but what it becomes, wrapped in a lettuce leaf with perilla and mint and plunged into nước chấm, is something that transcends its parts entirely.`,
            `The technique requires confidence and speed. You cannot hesitate when you pour the batter. You cannot be timid when you fold. Bánh xèo rewards the cook who commits fully — and the result is a pancake of extraordinary crispiness, the kind that makes a sound when you break it.`,
        ],

        ingredients: [
            {
                group: 'Batter',
                items: [
                    '1 cup (130g) rice flour',
                    '2 tbsp cornstarch',
                    '½ cup (120ml) full-fat coconut milk',
                    '¾ cup (180ml) cold sparkling water',
                    '1 tsp turmeric powder',
                    '½ tsp salt',
                    '2 spring onions, thinly sliced',
                    '1 tbsp vegetable oil',
                ],
            },
            {
                group: 'Filling',
                items: [
                    '½ lb (225g) medium shrimp, peeled and halved lengthwise',
                    '½ lb (225g) pork belly, thinly sliced',
                    '1 medium onion, thinly sliced',
                    '2 cups (200g) bean sprouts',
                    '4 tsp vegetable oil (divided, for frying)',
                ],
            },
            {
                group: 'Nước Chấm Dipping Sauce',
                items: [
                    '¼ cup (60ml) fish sauce',
                    '¼ cup (60ml) fresh lime juice',
                    '3 tbsp granulated sugar',
                    '3 tbsp warm water',
                    '2 cloves garlic, finely minced',
                    '1 bird\'s eye chilli, sliced',
                ],
            },
            {
                group: 'Herb & Lettuce Plate',
                items: [
                    'Butter or green leaf lettuce (large leaves)',
                    'Fresh perilla (tía tô)',
                    'Fresh mint',
                    'Cucumber, cut into thin batons',
                ],
            },
        ],

        steps: [
            {
                title: 'Make the batter and rest it',
                text: 'Whisk rice flour, cornstarch, turmeric, and salt in a bowl. Mix coconut milk with cold sparkling water, then pour into the dry ingredients, whisking constantly until completely smooth. Stir in the oil and sliced spring onions. The batter should be very thin — thinner than crêpe batter. Rest for 15 minutes at room temperature.',
                tip: 'Sparkling water creates CO₂ bubbles that make the final pancake dramatically lighter and crispier. Do not substitute with still water.',
            },
            {
                title: 'Make nước chấm',
                text: 'Dissolve sugar in warm water, add fish sauce, lime juice, garlic, and chilli. Taste for balance — it should be simultaneously sweet, sour, salty, and aromatic. Set aside. This sauce improves as the garlic mellows; make it at least 10 minutes ahead.',
            },
            {
                title: 'Cook the filling',
                text: 'Heat 1 tsp oil in a 10–12 inch pan over very high heat until it just begins to smoke. Add ¼ of the sliced onion and cook 30 seconds. Add ¼ of the pork belly slices and cook 1 minute, turning once. Add ¼ of the shrimp and cook 1 minute until just pink. This is your filling for one pancake.',
                tip: 'Have every component measured and within arm\'s reach before you start. Bánh xèo moves quickly and needs both hands.',
            },
            {
                title: 'Pour and sizzle',
                text: 'While the filling is still in the pan at maximum heat, give the batter a quick stir and pour in approximately ⅓ cup in one swift motion. Immediately tilt and swirl the pan to coat the entire base in a thin, even layer. You should hear the "xèo!" — a violent, crackling sizzle. Scatter a handful of bean sprouts over one half of the pancake only. Reduce to medium heat.',
                tip: 'No loud sizzle = wrong temperature = sad, soft pancake. If the batter hisses gently instead of roaring, remove from heat, let the pan reheat fully, and try again.',
            },
            {
                title: 'Crisp, fold, and serve',
                text: 'Cover the pan and cook 2 minutes. Remove the lid and cook another 2–3 minutes uncovered until the edges are deeply golden and audibly crispy when you tap them. Drizzle a little extra oil around the edges. Fold the empty half over the bean sprout half and slide onto a plate.',
                tip: 'Serve immediately — do not wait until all four are made. Bánh xèo loses its crispness within 5 minutes. Restaurants cook them one at a time, straight to the table.',
            },
        ],

        nutrition: [
            { label: 'Calories', value: '390 kcal', icon: '🔥' },
            { label: 'Protein', value: '24 g', icon: '💪' },
            { label: 'Carbs', value: '44 g', icon: '🌾' },
            { label: 'Fat', value: '13 g', icon: '🫒' },
            { label: 'Fibre', value: '4 g', icon: '🌿' },
            { label: 'Sodium', value: '890 mg', icon: '🧂' },
        ],

        tips: [
            '**Full-fat coconut milk only.** Light coconut milk does not deliver the same flavour or crispiness. Do not substitute.',
            '**Carbon-steel pan** gives the best results. Non-stick works but produces a slightly less crispy edge.',
            '**Do not overfill:** Use just enough filling to cover one half of the pancake thinly. An overstuffed bánh xèo won\'t close properly.',
        ],
        variations: [
            '**Vegetarian Bánh Xèo:** Replace shrimp and pork with pressed firm tofu, sliced shiitake mushrooms, and extra bean sprouts.',
            '**Central Vietnamese style:** Add a pinch of dried chilli powder to the batter for a spicier, more intense version.',
        ],
        related: ['fresh-spring-rolls', 'bun-cha-hanoi', 'com-tam'],
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  6. VIETNAMESE CHICKEN PHO
    // ══════════════════════════════════════════════════════════════════════════
    {
        slug: 'vietnamese-chicken-pho',
        title: 'Vietnamese Chicken Pho',
        subtitle: 'Phở Gà',
        tagline: 'Everything phở bò promises — lighter, faster, equally soul-warming.',
        category: 'Soup',
        difficulty: 'Easy',
        prepTime: '15 min',
        cookTime: '2 hrs',
        totalTime: '2 hrs 15 min',
        servings: 4,
        rating: '4.9',
        image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Bowl of golden Vietnamese chicken pho with shredded chicken and herbs',

        storyTitle: 'The Gentler Soul',
        story: [
            `If phở bò is the dramatic elder sibling — complex, demanding, requiring hours of bone-simmering patience — then phở gà is the one who sits quietly beside it and, when you finally taste it, surprises you completely. Chicken pho is lighter. Its broth is golden rather than amber, and its spice profile is softer. But it is no less extraordinary.`,
            `Phở gà became widely popular in Hanoi during the periods of meat scarcity in the twentieth century, when beef was expensive and chicken was what the home cook had. What began as a pragmatic substitution became, over generations, a dish beloved entirely on its own terms. Many Vietnamese cooks who grew up with phở gà will tell you, without apology, that they prefer it to the beef version.`,
            `The secret of a great phở gà lies in a single rule: do not overcook the chicken, and do not over-simmer the broth. Chicken stock turns cloudy and slightly bitter if pushed too hard. The goal is a broth that is clean, golden, and gently perfumed with ginger and star anise — a warmth that spreads through you slowly, the way late-afternoon sunlight moves across a kitchen floor.`,
        ],

        ingredients: [
            {
                group: 'Broth',
                items: [
                    '1 whole chicken (3½ lbs / 1.6kg)',
                    '1 large onion, halved and charred',
                    '3-inch fresh ginger, halved and charred',
                    '3 star anise',
                    '1 cinnamon stick',
                    '3 whole cloves',
                    '1 tsp coriander seeds, toasted',
                    '¼ cup (60ml) fish sauce',
                    '1 tbsp rock sugar',
                    'Salt to taste',
                    '3 litres cold water',
                ],
            },
            {
                group: 'Bowl Build',
                items: [
                    '14 oz (400g) dried flat rice noodles (bánh phở)',
                    'Shredded chicken (from the broth)',
                    '3 spring onions, thinly sliced',
                    'Large handful fresh cilantro',
                ],
            },
            {
                group: 'Herb Plate',
                items: [
                    'Bean sprouts',
                    'Fresh Thai basil',
                    '2 limes, cut into wedges',
                    'Sliced fresh chilli',
                ],
            },
        ],

        steps: [
            {
                title: 'Char the aromatics',
                text: 'Hold the onion and ginger halves over a gas flame or broil cut-side up until genuinely charred on all sides — about 5–8 minutes. This step is essential for colour and depth and should not be skipped even for chicken pho.',
            },
            {
                title: 'Poach the chicken',
                text: 'Place the whole chicken in a large pot with the charred aromatics, toasted spices, and 3 litres of cold water. Bring to a very gentle simmer over medium heat. Skim all foam carefully during the first 20 minutes. Poach for 45–55 minutes until the thickest part of the thigh registers 165°F / 74°C.',
                tip: 'A gentle simmer keeps the broth crystal-clear. A rolling boil will make it permanently cloudy.',
            },
            {
                title: 'Rest and shred the chicken',
                text: 'Carefully remove the chicken and let it rest for 15 minutes. Once cool enough to handle, pull all the meat from the carcass and shred into generous pieces. Discard skin and bones (or return bones to the broth for more depth).',
            },
            {
                title: 'Finish and season the broth',
                text: 'Strain the broth through a fine-mesh sieve. Return to the pot and season with fish sauce, rock sugar, and salt. Taste carefully — the broth should be clean, gently savoury, and delicately aromatic. Keep at a very gentle simmer.',
                tip: 'Add a few dried jujube dates to the broth in the last 20 minutes of simmering for a traditional sweetness.',
            },
            {
                title: 'Cook noodles and assemble',
                text: 'Soak noodles in cold water for 30 minutes, then cook in boiling unsalted water for 30–60 seconds. Divide into bowls. Top with generous shredded chicken and spring onion. Ladle the hot broth over everything and garnish with cilantro. Serve immediately with the full herb plate.',
            },
        ],

        nutrition: [
            { label: 'Calories', value: '380 kcal', icon: '🔥' },
            { label: 'Protein', value: '36 g', icon: '💪' },
            { label: 'Carbs', value: '40 g', icon: '🌾' },
            { label: 'Fat', value: '6 g', icon: '🫒' },
            { label: 'Fibre', value: '2 g', icon: '🌿' },
            { label: 'Sodium', value: '1,160 mg', icon: '🧂' },
        ],

        tips: [
            '**Chicken pho is gentler than beef — do not push it.** Simmering longer than 2 hours turns the broth slightly bitter.',
            '**Add 3–4 dried shiitake mushrooms** to the broth for extra depth without overwhelming the delicate chicken flavour.',
            '**The poached chicken** is also extraordinary cold, served over rice with ginger-scallion sauce.',
        ],
        variations: [
            '**Phở Gà Vịt:** Replace the chicken with a whole duck. Increase simmer time to 1.5 hours and expect a richer, more gamey broth.',
        ],
        related: ['hanoi-beef-pho', 'bun-rieu', 'fresh-spring-rolls'],
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  7. BUN RIEU
    // ══════════════════════════════════════════════════════════════════════════
    {
        slug: 'bun-rieu',
        title: 'Crab & Tomato Vermicelli Soup',
        subtitle: 'Bún Riêu Cua',
        tagline: 'Vietnam\'s most vibrant soup — tangy tomatoes, fluffy crab cakes, and a mountain of herbs.',
        category: 'Soup',
        difficulty: 'Medium',
        prepTime: '30 min',
        cookTime: '50 min',
        totalTime: '1 hr 20 min',
        servings: 4,
        rating: '4.8',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Bun Rieu Cua crab tomato vermicelli soup with floating crab cakes',

        storyTitle: 'The Soup That Knows How to Celebrate',
        story: [
            `If phở is the meditative monk of Vietnamese soups — patient, restrained, demanding quiet respect — then bún riêu cua is its loud, joyful, market-day cousin. Where phở is pale and clear, bún riêu is vivid scarlet from fresh tomatoes and annatto oil. Where phở is subtle, bún riêu announces itself from the next table. And where phở asks you to be still, bún riêu asks you to pile on more herbs, more lime, more of everything.`,
            `The heart of bún riêu is the crab — specifically, the freshwater paddy crabs of the Vietnamese countryside, small and intensely flavoured. In the traditional village preparation, the whole crabs are pounded with salt in a stone mortar until they become a thick, rust-coloured paste that, when dropped into simmering broth, blooms into soft, fluffy dumplings. It is one of the most ingenious techniques in Vietnamese cooking.`,
            `The tomatoes are not an afterthought — they are structural. Fried in shallots and annatto-coloured oil until they collapse into a sweet, slightly sour base, they give bún riêu its characteristic brightness and its beautiful colour. This is a soup that celebrates everything abundant: crab, tomatoes, tofu, pork ribs, and the wildly generous herb plate that arrives beside every bowl.`,
        ],

        ingredients: [
            {
                group: 'Broth Base',
                items: [
                    '1.5 lbs (680g) pork ribs or pork neck bones',
                    '4 ripe medium tomatoes, quartered',
                    '2 tbsp vegetable oil',
                    '3 shallots, thinly sliced',
                    '2 tbsp tomato paste',
                    '1 tbsp annatto seeds (or substitute ½ tsp smoked paprika)',
                    '3 tbsp fish sauce',
                    '1 tbsp granulated sugar',
                    'Salt to taste',
                ],
            },
            {
                group: 'Crab Cakes (Riêu)',
                items: [
                    '1 can (6 oz / 170g) crab meat, drained',
                    '4 oz (115g) ground pork',
                    '2 eggs',
                    '1 tbsp fish sauce',
                    '½ tsp granulated sugar',
                    '2 spring onions, minced',
                    '½ tsp black pepper',
                ],
            },
            {
                group: 'Toppings & Noodles',
                items: [
                    '14 oz (400g) thin rice vermicelli (bún), cooked and cooled',
                    '6 oz (170g) firm tofu, cubed and fried golden',
                    'Shrimp paste (mắm tôm) — served on the side',
                    'Bean sprouts',
                    'Perilla leaves',
                    'Banana blossom (shredded), if available',
                    'Lime wedges',
                    'Vietnamese chilli',
                ],
            },
        ],

        steps: [
            {
                title: 'Build the pork broth',
                text: 'Blanch the pork ribs in boiling water for 5 minutes, drain, and rinse. Return to a clean pot with 3 litres of fresh water. Bring to a gentle simmer and cook for 40 minutes, skimming regularly, to build a clean, savoury base.',
            },
            {
                title: 'Fry the tomatoes — the soul of the dish',
                text: 'Heat the oil in a wok or large pan over medium-high heat. Add annatto seeds and stir for 1 minute until the oil turns a deep orange-red. Remove and discard the seeds. Add shallots to the coloured oil and fry until golden and fragrant — about 3 minutes. Add tomato paste and stir for 1 minute. Add the quartered fresh tomatoes and cook, stirring, until they collapse and the oil turns a vivid scarlet, about 8 minutes.',
                tip: 'This step is the defining flavour of bún riêu. Do not rush the tomatoes — let them fully collapse into the oil.',
            },
            {
                title: 'Combine and season the broth',
                text: 'Add the fried tomato mixture to the pork broth. Season with fish sauce, sugar, and salt. Taste — the broth should be tangy, savoury, and slightly sweet. Simmer together for 10 minutes to meld the flavours.',
            },
            {
                title: 'Make the crab cakes',
                text: 'Combine all crab cake ingredients in a bowl and mix well until the mixture holds together. Taste and adjust seasoning.',
            },
            {
                title: 'Cook the crab cakes in the broth',
                text: 'Bring the broth to a gentle simmer. Using a spoon or small ice cream scoop, gently drop spoonfuls of the crab mixture directly into the simmering broth. Cook undisturbed for 3–4 minutes until the cakes float to the surface and are set through.',
                tip: 'Do not stir the broth vigorously after adding the crab cakes — they are delicate and will break apart.',
            },
            {
                title: 'Assemble the bowls',
                text: 'Place cooked noodles in deep bowls. Add a few pieces of fried tofu. Ladle hot broth and crab cakes generously over the noodles. Serve with the full herb plate, shrimp paste on the side (this is traditional and essential), lime wedges, and fresh chilli.',
            },
        ],

        nutrition: [
            { label: 'Calories', value: '450 kcal', icon: '🔥' },
            { label: 'Protein', value: '34 g', icon: '💪' },
            { label: 'Carbs', value: '48 g', icon: '🌾' },
            { label: 'Fat', value: '12 g', icon: '🫒' },
            { label: 'Fibre', value: '5 g', icon: '🌿' },
            { label: 'Sodium', value: '1,320 mg', icon: '🧂' },
        ],

        tips: [
            '**Mắm tôm (fermented shrimp paste)** is the authentic condiment served alongside bún riêu. It is pungent and essential. Find it at any Asian supermarket.',
            '**Fry the tofu until deeply golden** — it will soak up the broth beautifully and add a wonderful textural contrast.',
            '**Banana blossom** — thinly shredded — is the traditional vegetable for the herb plate and adds both crunch and a slightly astringent flavour that balances the rich broth.',
        ],
        variations: [
            '**Bún Riêu Chay (Vegan):** Skip the pork bones (use mushroom and kombu broth), replace crab cakes with mushroom-and-tofu dumplings, and omit shrimp paste.',
        ],
        related: ['hanoi-beef-pho', 'vietnamese-chicken-pho', 'bun-cha-hanoi'],
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  8. COM TAM
    // ══════════════════════════════════════════════════════════════════════════
    {
        slug: 'com-tam',
        title: 'Saigon Broken Rice Plate',
        subtitle: 'Cơm Tấm Sài Gòn',
        tagline: 'Saigon\'s defining one-plate meal — built on rice that was once too broken to sell.',
        category: 'Rice',
        difficulty: 'Easy',
        prepTime: '15 min',
        cookTime: '20 min',
        totalTime: '35 min (+ overnight marinade)',
        servings: 4,
        rating: '4.9',
        image: 'https://images.unsplash.com/photo-1558030137-a56c1b004fa3?auto=format&fit=crop&w=1200&q=85',
        imageAlt: 'Saigon broken rice plate with grilled pork chops, fried egg and pickled vegetables',

        storyTitle: 'The Plate Built on What Was Left Behind',
        story: [
            `Broken rice — the fractured, short-grained fragments left after milling — was for a long time the rice that nobody wanted. Too irregular to sell as whole grain, it was cheap, plentiful, and eaten mostly by those who couldn't afford better. In early twentieth-century Saigon, it became the food of labourers, of street vendors, of the city's working poor.`,
            `Then, as so often happens in Vietnamese food history, economy became gastronomy. Cooks discovered that broken rice, when steamed correctly, had a texture unlike any other: slightly stickier than whole jasmine rice, more absorbent, with a particular way of holding onto sauce that made every bite more flavourful than the last. The fragments that mattered least became the foundation of Saigon's defining meal.`,
            `Today, cơm tấm is one of the most beloved dishes in all of Vietnamese cuisine, eaten from 6am to midnight on the streets of Ho Chi Minh City. The essential accompaniments — a grilled pork chop caramelised to lacquered perfection, a fried egg whose yolk runs into the rice, slivers of steamed egg cake, crunchy pickled vegetables, and the ever-present nước chấm — are non-negotiable. This is Saigon on a plate.`,
        ],

        ingredients: [
            {
                group: 'Grilled Pork Chops (Sườn Nướng)',
                items: [
                    '4 bone-in pork chops or thin-cut pork steaks',
                    '3 stalks lemongrass, white part finely minced',
                    '4 cloves garlic, minced',
                    '2 shallots, minced',
                    '3 tbsp fish sauce',
                    '2 tbsp granulated sugar',
                    '1 tbsp oyster sauce',
                    '1 tsp dark soy sauce',
                    '1 tsp sesame oil',
                    '½ tsp five-spice powder',
                    'Freshly ground black pepper',
                ],
            },
            {
                group: 'Broken Rice (Cơm Tấm)',
                items: [
                    '2 cups broken jasmine rice (cơm tấm, available at Asian grocery stores)',
                    '2¼ cups water',
                    '¼ tsp salt',
                ],
            },
            {
                group: 'Accompaniments',
                items: [
                    '4 eggs, fried sunny-side up',
                    'Pickled daikon and carrot (from Bánh Mì recipe)',
                    'Thinly sliced cucumber',
                    '2 spring onions, sliced, fried in 1 tbsp oil until fragrant',
                ],
            },
            {
                group: 'Nước Chấm',
                items: [
                    '¼ cup fish sauce',
                    '¼ cup lime juice',
                    '3 tbsp sugar',
                    '¼ cup warm water',
                    '2 cloves garlic, minced',
                    '1 chilli, sliced',
                ],
            },
        ],

        steps: [
            {
                title: 'Marinate the pork — overnight is mandatory',
                text: 'Combine all marinade ingredients and coat the pork chops thoroughly. Massage the marinade deep into the meat, particularly around the bone. Cover and refrigerate for at least 4 hours — overnight is strongly preferred and produces a dramatically more caramelised, flavourful result. This overnight rest is not optional for restaurant-quality cơm tấm.',
                tip: 'Score the fat cap of each chop with 3–4 shallow cuts before marinating — this prevents curling on the grill and allows the marinade to penetrate deeper.',
            },
            {
                title: 'Cook the broken rice',
                text: 'Rinse broken rice gently 2–3 times until water runs clear. Add to a rice cooker or pot with water and salt. If using a pot: bring to a boil, cover tightly, reduce to the lowest heat, and cook for 18 minutes. Remove from heat and rest, covered, for 10 minutes before serving.',
                tip: 'Broken rice has slightly different absorption than whole jasmine rice — use a little less water than usual.',
            },
            {
                title: 'Make nước chấm',
                text: 'Dissolve sugar in warm water. Add fish sauce, lime juice, garlic, and chilli. Stir and taste for balance. The sauce should be sweet, sour, salty, and fragrant in equal measure.',
            },
            {
                title: 'Grill the pork chops',
                text: 'Bring the pork to room temperature 20 minutes before grilling. Heat a grill pan, cast-iron skillet, or outdoor grill to maximum heat. Grill chops 4–5 minutes per side until deeply caramelised, charred at the edges, and cooked through. Rest 3 minutes before serving.',
                tip: 'The high sugar content in the marinade means the chops will char quickly. Watch carefully and manage the heat — you want deep caramelisation, not burning.',
            },
            {
                title: 'Fry the eggs and assemble',
                text: 'Fry the eggs in a little oil, sunny-side up, until the whites are set but the yolk is still perfectly runny. Mound the broken rice onto each plate. Place a grilled pork chop alongside. Add the fried egg. Arrange pickled vegetables and cucumber slices. Scatter fried spring onion over the rice. Serve with a generous bowl of nước chấm on the side.',
                tip: 'The runny egg yolk breaking over the hot rice is one of the great pleasures of cơm tấm. Do not overcook the eggs.',
            },
        ],

        nutrition: [
            { label: 'Calories', value: '620 kcal', icon: '🔥' },
            { label: 'Protein', value: '42 g', icon: '💪' },
            { label: 'Carbs', value: '58 g', icon: '🌾' },
            { label: 'Fat', value: '22 g', icon: '🫒' },
            { label: 'Fibre', value: '3 g', icon: '🌿' },
            { label: 'Sodium', value: '1,180 mg', icon: '🧂' },
        ],

        tips: [
            '**Overnight marination is the single most important variable** in this dish. Cooks who skip it produce a meal; cooks who respect it produce an experience.',
            '**Regular jasmine rice works** if you cannot find broken rice. Rinse thoroughly and cook with slightly less water for a stickier, more absorbent result.',
            '**The fried spring onion oil (mỡ hành)** drizzled over the rice is a defining element of cơm tấm. Don\'t skip it — it takes 2 minutes and adds enormous flavour.',
            '**Chả trứng (steamed egg cake)** — a savoury Vietnamese egg loaf made with egg, glass noodles, and wood ear mushrooms — is the traditional accompaniment alongside the pork chop. Worth making when you have time.',
        ],
        variations: [
            '**Cơm Tấm Bì:** Add bì — shredded, roasted pork skin mixed with ground roasted rice — alongside the pork chop for the full classic Saigon plate.',
            '**Cơm Tấm Gà Nướng:** Replace pork chops with chicken thighs using the same marinade, grilled until the skin is shatteringly crispy.',
        ],
        related: ['bun-cha-hanoi', 'banh-mi', 'banh-xeo'],
    },
]

// ── Helper: get single recipe by slug ─────────────────────────────────────
export function getRecipeBySlug(slug: string): RecipeContent | undefined {
    return RECIPE_CONTENT.find(r => r.slug === slug)
}

// ── Helper: get related recipes ────────────────────────────────────────────
export function getRelatedRecipes(slugs: string[]): RecipeContent[] {
    return slugs
        .map(s => getRecipeBySlug(s))
        .filter((r): r is RecipeContent => r !== undefined)
}