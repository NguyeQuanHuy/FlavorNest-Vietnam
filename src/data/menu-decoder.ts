// ─────────────────────────────────────────────────────────────────────────────
//  src/data/menu-decoder.ts
//  Data for /menu-decoder — the 30 dishes most often seen on Vietnamese
//  restaurant menus abroad (esp. Germany) + a word-by-word menu dictionary.
//  `recipes`: candidate recipe slugs — the page links the first one that exists.
// ─────────────────────────────────────────────────────────────────────────────

export type Section = 'Noodle soups' | 'Noodle bowls & stir-fries' | 'Rice plates' | 'Starters & rolls' | 'Bánh mì & buns' | 'Drinks & desserts'
export type Protein = 'beef' | 'chicken' | 'pork' | 'duck' | 'seafood' | 'egg' | 'tofu'
export type Allergen = 'gluten' | 'crustaceans' | 'eggs' | 'fish' | 'peanuts' | 'soy' | 'milk' | 'sesame' | 'molluscs'

export interface Dish {
    id: string
    vi: string
    pron: string          // approximate English pronunciation
    en: string
    de: string            // how German menus usually call it
    section: Section
    emoji: string
    what: string
    taste: string
    spice: 0 | 1 | 2 | 3
    eat: string[]
    like: string          // "If you like … "
    protein: Protein[]
    veggie: boolean       // a vegetarian (chay) version is commonly offered
    allergens: Allergen[] // typical — varies by restaurant
    order: { vi: string; en: string }
    core: string[]        // match rules: every entry must appear in the query; "a|b" = either
    kw: string[]          // extra words that make this dish a better match
    aliases: string[]     // English / German names
    recipes: string[]
}

export const SECTIONS: { name: Section; emoji: string }[] = [
    { name: 'Noodle soups', emoji: '🍜' },
    { name: 'Noodle bowls & stir-fries', emoji: '🥢' },
    { name: 'Rice plates', emoji: '🍚' },
    { name: 'Starters & rolls', emoji: '🥟' },
    { name: 'Bánh mì & buns', emoji: '🥖' },
    { name: 'Drinks & desserts', emoji: '☕' },
]

export const ALLERGEN_INFO: Record<Allergen, { label: string; de: string; emoji: string }> = {
    gluten: { label: 'Gluten (wheat)', de: 'Gluten', emoji: '🌾' },
    crustaceans: { label: 'Shrimp / crab', de: 'Krebstiere', emoji: '🦐' },
    eggs: { label: 'Egg', de: 'Eier', emoji: '🥚' },
    fish: { label: 'Fish (fish sauce)', de: 'Fisch', emoji: '🐟' },
    peanuts: { label: 'Peanuts', de: 'Erdnüsse', emoji: '🥜' },
    soy: { label: 'Soy', de: 'Soja', emoji: '🫘' },
    milk: { label: 'Milk', de: 'Milch', emoji: '🥛' },
    sesame: { label: 'Sesame', de: 'Sesam', emoji: '⚪' },
    molluscs: { label: 'Squid / oyster sauce', de: 'Weichtiere', emoji: '🦑' },
}

export const DISHES: Dish[] = [
    // ── Noodle soups ──────────────────────────────────────────────────────────
    {
        id: 'pho-bo', vi: 'Phở bò', pron: 'fuh baw', en: 'Beef pho', de: 'Reisbandnudelsuppe mit Rindfleisch',
        section: 'Noodle soups', emoji: '🍜',
        what: 'Flat rice noodles in a clear beef broth simmered for hours with star anise, cinnamon, charred onion and ginger, topped with sliced beef.',
        taste: 'Deep, clean and gently spiced — savoury, not heavy. You season it yourself.',
        spice: 0,
        eat: ['Taste the broth first.', 'Add bean sprouts, Thai basil and a squeeze of lime.', 'Chilli slices or sriracha to taste; hoisin is best as a dip on the side, not in the broth.', 'Chopsticks in one hand, spoon in the other — slurping is fine.'],
        like: 'ramen or a rich beef consommé',
        protein: ['beef'], veggie: true, allergens: ['fish'],
        order: { vi: 'Cho tôi một tô phở bò tái.', en: 'One beef pho with rare beef, please.' },
        core: ['pho'], kw: ['bo', 'tai', 'nam', 'gau', 'chin', 'gan', 'sach', 'bo vien', 'dac biet', 'beef', 'rind'],
        aliases: ['beef pho', 'pho bo', 'pho mit rind', 'rindfleisch nudelsuppe'],
        recipes: ['hanoi-beef-pho', 'pho-bo-ha-noi', 'pho-bo'],
    },
    {
        id: 'pho-ga', vi: 'Phở gà', pron: 'fuh gah', en: 'Chicken pho', de: 'Reisbandnudelsuppe mit Hähnchen',
        section: 'Noodle soups', emoji: '🍜',
        what: 'The lighter sister of beef pho: flat rice noodles in a golden chicken broth with poached chicken, spring onion and herbs.',
        taste: 'Light, comforting and ginger-fresh.',
        spice: 0,
        eat: ['Add lime and herbs; in Hanoi it is often eaten with a little chilli vinegar.', 'Great choice if you want something gentle.'],
        like: 'chicken noodle soup — but more fragrant',
        protein: ['chicken'], veggie: true, allergens: ['fish'],
        order: { vi: 'Cho tôi một tô phở gà.', en: 'One chicken pho, please.' },
        core: ['pho'], kw: ['ga', 'chicken', 'hahnchen', 'huhn'],
        aliases: ['chicken pho', 'pho mit hahnchen', 'pho mit huhn'],
        recipes: ['vietnamese-chicken-pho', 'pho-ga'],
    },
    {
        id: 'bun-bo-hue', vi: 'Bún bò Huế', pron: 'boon baw hway', en: 'Spicy Huế beef noodle soup', de: 'Scharfe Rindfleisch-Nudelsuppe nach Huế-Art',
        section: 'Noodle soups', emoji: '🌶️',
        what: 'Round, thick rice noodles in a lemongrass-and-chilli beef broth from the old imperial city of Huế, with beef shank and often pork hock.',
        taste: 'Bold, spicy, lemongrass-forward with a funky depth from fermented shrimp paste.',
        spice: 2,
        eat: ['Add shredded banana blossom, herbs and lime.', 'It already has heat — taste before adding chilli.'],
        like: 'spicy Thai tom yum mixed with a beef stew',
        protein: ['beef', 'pork'], veggie: false, allergens: ['fish', 'crustaceans'],
        order: { vi: 'Cho tôi một tô bún bò Huế, ít cay.', en: 'One bún bò Huế, not too spicy, please.' },
        core: ['bun', 'hue'], kw: ['bo', 'gio heo', 'cha cua', 'huyet', 'scharf'],
        aliases: ['spicy beef noodle soup', 'hue beef noodle soup'],
        recipes: ['bun-bo-hue'],
    },
    {
        id: 'bun-rieu', vi: 'Bún riêu cua', pron: 'boon ree-oo koo-ah', en: 'Crab & tomato noodle soup', de: 'Krabben-Tomaten-Nudelsuppe',
        section: 'Noodle soups', emoji: '🦀',
        what: 'Thin rice noodles in a tangy tomato broth with fluffy crab "clouds" made from pounded freshwater crab, often with fried tofu.',
        taste: 'Sour-sweet, fresh and a little sea-like.',
        spice: 0,
        eat: ['Add herbs and lime; locals stir in a little fermented shrimp paste (mắm tôm) — ask for it if you are adventurous.'],
        like: 'a light tomato seafood soup',
        protein: ['seafood', 'tofu'], veggie: false, allergens: ['crustaceans', 'fish', 'soy', 'eggs'],
        order: { vi: 'Cho tôi một tô bún riêu cua.', en: 'One crab noodle soup, please.' },
        core: ['bun', 'rieu'], kw: ['cua', 'oc', 'dau hu', 'crab', 'krabbe', 'tomate'],
        aliases: ['crab noodle soup', 'crab tomato soup'],
        recipes: ['bun-rieu-cua', 'bun-rieu'],
    },
    {
        id: 'hu-tieu', vi: 'Hủ tiếu Nam Vang', pron: 'hoo tee-oo nahm vahng', en: 'Phnom Penh-style pork & shrimp noodle soup', de: 'Klare Nudelsuppe mit Schwein & Garnelen',
        section: 'Noodle soups', emoji: '🍤',
        what: 'A Saigon favourite with Cambodian roots: chewy clear noodles in a sweet pork-bone broth with minced pork, shrimp, liver and quail eggs. Order it "khô" (dry) to get the broth on the side.',
        taste: 'Light, slightly sweet and very savoury.',
        spice: 0,
        eat: ['Add garlic chives, lettuce, lime and pickled garlic.', 'The dry version comes with a soy-based sauce — toss well.'],
        like: 'wonton noodle soup',
        protein: ['pork', 'seafood', 'egg'], veggie: false, allergens: ['crustaceans', 'fish', 'eggs', 'soy'],
        order: { vi: 'Cho tôi một tô hủ tiếu Nam Vang.', en: 'One hủ tiếu Nam Vang, please.' },
        core: ['hu tieu|hu tiu'], kw: ['nam vang', 'tom', 'muc', 'kho', 'thap cam'],
        aliases: ['phnom penh noodle soup'],
        recipes: ['hu-tieu-nam-vang', 'hu-tieu'],
    },
    {
        id: 'canh-chua', vi: 'Canh chua cá', pron: 'kahn choo-ah kah', en: 'Sweet & sour tamarind fish soup', de: 'Saure Tamarindensuppe mit Fisch',
        section: 'Noodle soups', emoji: '🐟',
        what: 'A Mekong Delta family soup: fish (often catfish) with pineapple, tomato, okra and bean sprouts in a tamarind broth. Usually shared and eaten with rice, not noodles.',
        taste: 'Sour, sweet and herby — very refreshing.',
        spice: 1,
        eat: ['Spoon it over a bowl of rice.', 'Share it with the table, Vietnamese-style.'],
        like: 'Thai tom yum, but sweeter and less spicy',
        protein: ['seafood'], veggie: true, allergens: ['fish'],
        order: { vi: 'Cho tôi một tô canh chua cá.', en: 'One sour fish soup, please.' },
        core: ['canh chua'], kw: ['ca', 'tom', 'me', 'fisch', 'fish'],
        aliases: ['sour soup', 'tamarind soup', 'sauer suppe', 'saure suppe'],
        recipes: ['canh-chua-ca', 'canh-chua-ca-basa-mien-nam'],
    },

    // ── Noodle bowls & stir-fries ─────────────────────────────────────────────
    {
        id: 'bun-bo-nam-bo', vi: 'Bún bò Nam Bộ', pron: 'boon baw nahm boh', en: 'Rice noodle salad with stir-fried beef', de: 'Reisnudeln mit gebratenem Rindfleisch, Salat & Erdnüssen',
        section: 'Noodle bowls & stir-fries', emoji: '🥗',
        what: 'A no-soup bowl: cool rice noodles, lettuce and herbs topped with warm beef stir-fried with lemongrass, crispy shallots and roasted peanuts. A bestseller in Germany.',
        taste: 'Sweet-savoury, fresh and crunchy — hot and cold in one bowl.',
        spice: 0,
        eat: ['Pour the sauce (nước chấm) from the bottom over everything.', 'Mix thoroughly before eating.'],
        like: 'a warm beef salad with noodles',
        protein: ['beef'], veggie: true, allergens: ['fish', 'peanuts'],
        order: { vi: 'Cho tôi một tô bún bò Nam Bộ.', en: 'One bún bò Nam Bộ, please.' },
        core: ['bun', 'bo'], kw: ['nam bo', 'xao', 'erdnuss', 'rind', 'salat'],
        aliases: ['bo bun', 'bobun', 'beef noodle salad', 'reisnudeln mit rindfleisch'],
        recipes: ['bun-bo-xao', 'bun-bo-nam-bo'],
    },
    {
        id: 'bun-cha', vi: 'Bún chả Hà Nội', pron: 'boon chah hah noy', en: 'Hanoi grilled pork with noodles', de: 'Reisnudeln mit gegrilltem Schweinefleisch nach Hanoi-Art',
        section: 'Noodle bowls & stir-fries', emoji: '🔥',
        what: 'Charcoal-grilled pork patties and pork belly served in a bowl of warm, sweet-sour dipping sauce, with cold rice noodles and herbs on the side.',
        taste: 'Smoky, sweet, tangy — very moreish.',
        spice: 0,
        eat: ['Dip a bite of noodles and herbs into the pork-and-sauce bowl.', 'Add garlic and chilli to the sauce to taste.'],
        like: 'Korean BBQ with noodles',
        protein: ['pork'], veggie: false, allergens: ['fish'],
        order: { vi: 'Cho tôi một suất bún chả.', en: 'One portion of bún chả, please.' },
        core: ['bun cha'], kw: ['ha noi', 'hanoi', 'nem'],
        aliases: ['hanoi grilled pork'],
        recipes: ['bun-cha-hanoi', 'bun-cha-ha-noi'],
    },
    {
        id: 'bun-thit-nuong', vi: 'Bún thịt nướng', pron: 'boon tit noo-uhng', en: 'Noodle bowl with grilled lemongrass pork', de: 'Reisnudeln mit gegrilltem Schweinefleisch',
        section: 'Noodle bowls & stir-fries', emoji: '🥢',
        what: 'The southern cousin of bún chả: grilled lemongrass pork on rice noodles with lettuce, herbs, pickled carrot and peanuts — often with a fried spring roll (chả giò).',
        taste: 'Sweet, smoky and fresh.',
        spice: 0,
        eat: ['Pour over the fish-sauce dressing and mix well.'],
        like: 'a BBQ pork salad bowl',
        protein: ['pork'], veggie: false, allergens: ['fish', 'peanuts'],
        order: { vi: 'Cho tôi một tô bún thịt nướng chả giò.', en: 'Grilled pork noodles with a spring roll, please.' },
        core: ['bun', 'nuong'], kw: ['thit', 'cha gio', 'nem', 'heo', 'schwein'],
        aliases: ['grilled pork noodles', 'bun thit nuong'],
        recipes: ['bun-thit-nuong', 'bun-cha-gio'],
    },
    {
        id: 'mi-xao', vi: 'Mì xào', pron: 'mee sow', en: 'Stir-fried egg noodles', de: 'Gebratene Nudeln',
        section: 'Noodle bowls & stir-fries', emoji: '🍝',
        what: 'Egg noodles wok-fried with vegetables and your choice of beef, chicken, seafood or tofu. "Mì xào giòn" means the noodles are fried crispy and topped with a glossy sauce.',
        taste: 'Savoury and smoky from the wok.',
        spice: 0,
        eat: ['Add a dash of soy sauce or chilli at the table.'],
        like: 'chow mein',
        protein: ['beef', 'chicken', 'seafood', 'tofu'], veggie: true, allergens: ['gluten', 'eggs', 'soy', 'molluscs'],
        order: { vi: 'Cho tôi một đĩa mì xào bò.', en: 'Stir-fried noodles with beef, please.' },
        core: ['mi xao'], kw: ['gion', 'bo', 'ga', 'hai san', 'rau', 'tom'],
        aliases: ['fried noodles', 'gebratene nudeln', 'chow mein'],
        recipes: [],
    },
    {
        id: 'mien-xao', vi: 'Miến xào', pron: 'mee-en sow', en: 'Stir-fried glass noodles', de: 'Gebratene Glasnudeln',
        section: 'Noodle bowls & stir-fries', emoji: '🥢',
        what: 'Springy glass noodles (made from mung-bean or canna starch) stir-fried with vegetables, mushrooms and meat or crab.',
        taste: 'Light, garlicky, slippery-chewy texture.',
        spice: 0,
        eat: ['Naturally gluten-free noodles — but check the sauce.'],
        like: 'Korean japchae',
        protein: ['chicken', 'seafood', 'tofu'], veggie: true, allergens: ['fish', 'soy'],
        order: { vi: 'Cho tôi một đĩa miến xào.', en: 'Stir-fried glass noodles, please.' },
        core: ['mien'], kw: ['xao', 'cua', 'ga', 'glasnudel'],
        aliases: ['glass noodles', 'glasnudeln', 'gebratene glasnudeln'],
        recipes: ['mien-xao-cua'],
    },
    {
        id: 'mi-quang', vi: 'Mì Quảng', pron: 'mee kwahng', en: 'Turmeric noodles from Quảng Nam', de: 'Breite Reisnudeln mit wenig Brühe',
        section: 'Noodle bowls & stir-fries', emoji: '🍜',
        what: 'Wide yellow rice noodles with just a little rich turmeric broth, topped with pork, shrimp, quail egg, peanuts and a crunchy sesame rice cracker.',
        taste: 'Rich and nutty, between a soup and a salad.',
        spice: 1,
        eat: ['Crumble the rice cracker on top.', 'Add herbs, lime and chilli, then mix.'],
        like: 'a dressed noodle bowl with a splash of curry-like broth',
        protein: ['pork', 'seafood', 'egg'], veggie: false, allergens: ['fish', 'peanuts', 'sesame', 'crustaceans', 'eggs'],
        order: { vi: 'Cho tôi một tô mì Quảng.', en: 'One mì Quảng, please.' },
        core: ['mi quang'], kw: ['ga', 'tom', 'thit', 'ech'],
        aliases: ['quang noodles'],
        recipes: ['mi-quang', 'mi-quang-da-nang'],
    },

    // ── Rice plates ───────────────────────────────────────────────────────────
    {
        id: 'com-tam', vi: 'Cơm tấm sườn bì chả', pron: 'kuhm tum suhn bee chah', en: 'Broken rice with grilled pork chop', de: 'Bruchreis mit gegrilltem Schweinekotelett',
        section: 'Rice plates', emoji: '🍚',
        what: 'Saigon\'s everyday plate: fragrant broken rice with a lemongrass pork chop (sườn), shredded pork skin (bì), steamed egg-pork meatloaf (chả), a fried egg and pickles.',
        taste: 'Smoky, sweet-savoury and satisfying.',
        spice: 0,
        eat: ['Spoon the sweet fish sauce over the rice.', 'Add a bit of everything to each bite.'],
        like: 'a BBQ pork chop plate',
        protein: ['pork', 'egg'], veggie: false, allergens: ['fish', 'eggs'],
        order: { vi: 'Cho tôi một dĩa cơm tấm sườn bì chả.', en: 'Broken rice with pork chop, skin and meatloaf, please.' },
        core: ['com tam'], kw: ['suon', 'bi', 'cha', 'op la', 'trung'],
        aliases: ['broken rice', 'bruchreis'],
        recipes: ['com-tam-suon-bi-cha', 'com-tam', 'com-tam-saigon'],
    },
    {
        id: 'com-chien', vi: 'Cơm chiên', pron: 'kuhm chee-en', en: 'Fried rice', de: 'Gebratener Reis',
        section: 'Rice plates', emoji: '🍳',
        what: 'Wok-fried rice with egg and vegetables. "Dương Châu" (Yangzhou) style adds Chinese sausage, shrimp and peas; "hải sản" means seafood.',
        taste: 'Savoury and comforting.',
        spice: 0,
        eat: ['Add soy sauce or chilli at the table.'],
        like: 'Chinese fried rice',
        protein: ['egg', 'chicken', 'seafood', 'beef'], veggie: true, allergens: ['eggs', 'soy', 'fish'],
        order: { vi: 'Cho tôi một dĩa cơm chiên Dương Châu.', en: 'Yangzhou fried rice, please.' },
        core: ['com chien|com rang'], kw: ['duong chau', 'hai san', 'ga', 'bo', 'trung'],
        aliases: ['fried rice', 'gebratener reis'],
        recipes: ['com-chien-duong-chau', 'com-chien-hai-san'],
    },
    {
        id: 'ca-ri-ga', vi: 'Cà ri gà', pron: 'kah ree gah', en: 'Vietnamese chicken curry', de: 'Hähnchen-Curry mit Kokosmilch',
        section: 'Rice plates', emoji: '🍛',
        what: 'A mild, fragrant chicken and sweet-potato curry with lemongrass and coconut milk — eaten with rice, rice noodles or a baguette for dipping.',
        taste: 'Creamy, gently spiced, more aromatic than hot.',
        spice: 1,
        eat: ['Dip crusty bánh mì bread in it — the southern way.'],
        like: 'a mild yellow Thai curry',
        protein: ['chicken'], veggie: true, allergens: ['fish'],
        order: { vi: 'Cho tôi một phần cà ri gà với bánh mì.', en: 'Chicken curry with bread, please.' },
        core: ['ca ri|cari|curry'], kw: ['ga', 'com', 'bun', 'banh mi', 'hahnchen'],
        aliases: ['chicken curry', 'hahnchen curry', 'curry'],
        recipes: ['ca-ri-ga', 'com-ni-ca-ri'],
    },
    {
        id: 'bo-luc-lac', vi: 'Bò lúc lắc', pron: 'baw look lahk', en: 'Shaking beef', de: 'Gebratene Rindfleischwürfel ("Shaking Beef")',
        section: 'Rice plates', emoji: '🥩',
        what: 'Cubes of tender beef seared in a very hot wok (the pan is "shaken" — that\'s the name) with garlic, onions and peppers, served with salad and rice or fries.',
        taste: 'Garlicky, buttery, peppery.',
        spice: 0,
        eat: ['Dip each piece in the lime-salt-pepper dip (muối tiêu chanh).'],
        like: 'pepper steak bites',
        protein: ['beef'], veggie: false, allergens: ['soy', 'molluscs', 'milk'],
        order: { vi: 'Cho tôi một dĩa bò lúc lắc với cơm.', en: 'Shaking beef with rice, please.' },
        core: ['luc lac'], kw: ['bo', 'com', 'khoai'],
        aliases: ['shaking beef', 'rindfleischwurfel'],
        recipes: ['bo-luc-lac'],
    },
    {
        id: 'ga-xao-sa-ot', vi: 'Gà xào sả ớt', pron: 'gah sow sah uht', en: 'Lemongrass chilli chicken', de: 'Hähnchen mit Zitronengras & Chili',
        section: 'Rice plates', emoji: '🐔',
        what: 'Chicken stir-fried with lots of minced lemongrass, chilli and a touch of caramel and fish sauce. Also common with tofu (đậu hũ) or beef.',
        taste: 'Fragrant, sweet-salty with a chilli kick.',
        spice: 2,
        eat: ['Best with plain jasmine rice.'],
        like: 'kung pao chicken, but citrusy',
        protein: ['chicken', 'tofu'], veggie: true, allergens: ['fish'],
        order: { vi: 'Cho tôi một dĩa gà xào sả ớt.', en: 'Lemongrass chilli chicken, please.' },
        core: ['sa ot|xa ot'], kw: ['ga', 'xao', 'zitronengras', 'lemongrass'],
        aliases: ['lemongrass chicken', 'zitronengras', 'lemongrass chili'],
        recipes: ['ga-xao-sa-ot'],
    },
    {
        id: 'ca-kho-to', vi: 'Cá kho tộ', pron: 'kah kaw toh', en: 'Caramelised fish in a clay pot', de: 'Karamellisierter Fisch im Tontopf',
        section: 'Rice plates', emoji: '🍯',
        what: 'Catfish braised slowly in a clay pot with caramel, fish sauce and black pepper until sticky. Pure home cooking.',
        taste: 'Very savoury, sweet and peppery — made for rice.',
        spice: 1,
        eat: ['A little fish, lots of rice; pair it with a light soup.'],
        like: 'teriyaki, but deeper and peppery',
        protein: ['seafood'], veggie: false, allergens: ['fish'],
        order: { vi: 'Cho tôi một phần cá kho tộ.', en: 'Clay-pot fish, please.' },
        core: ['ca kho'], kw: ['to', 'tontopf', 'clay'],
        aliases: ['clay pot fish', 'caramel fish', 'tontopf'],
        recipes: ['ca-kho-to'],
    },
    {
        id: 'thit-kho', vi: 'Thịt kho trứng', pron: 'tit kaw chuhng', en: 'Braised pork belly with eggs', de: 'Geschmorter Schweinebauch mit Ei',
        section: 'Rice plates', emoji: '🥚',
        what: 'Pork belly and boiled eggs braised in coconut water and caramel until meltingly soft. A Tết (New Year) classic.',
        taste: 'Rich, sweet-savoury, melt-in-the-mouth.',
        spice: 0,
        eat: ['Eat with rice and pickled vegetables to cut the richness.'],
        like: 'Chinese red-braised pork',
        protein: ['pork', 'egg'], veggie: false, allergens: ['fish', 'eggs'],
        order: { vi: 'Cho tôi một phần thịt kho trứng.', en: 'Braised pork with eggs, please.' },
        core: ['thit kho'], kw: ['trung', 'tau', 'nuoc dua'],
        aliases: ['braised pork', 'schweinebauch'],
        recipes: ['thit-kho-tau', 'thit-kho-hot-vit'],
    },
    {
        id: 'vit', vi: 'Vịt chiên giòn', pron: 'vit chee-en yawn', en: 'Crispy duck', de: 'Knusprige Ente',
        section: 'Rice plates', emoji: '🦆',
        what: 'Duck roasted or fried until the skin crackles, served with rice and a sauce — a staple of Vietnamese restaurants in Germany. At home in Vietnam, roast duck is "vịt quay".',
        taste: 'Crispy, rich, often with a sweet-sour or hoisin-style sauce.',
        spice: 0,
        eat: ['Pour the sauce over just before eating to keep the skin crisp.'],
        like: 'Peking duck',
        protein: ['duck'], veggie: false, allergens: ['soy', 'gluten'],
        order: { vi: 'Cho tôi một dĩa vịt chiên giòn.', en: 'Crispy duck, please.' },
        core: ['vit|ente|duck'], kw: ['chien', 'gion', 'quay', 'knusprig', 'crispy'],
        aliases: ['crispy duck', 'knusprige ente', 'ente'],
        recipes: ['vit-quay'],
    },
    {
        id: 'bo-kho', vi: 'Bò kho', pron: 'baw kaw', en: 'Vietnamese beef stew', de: 'Vietnamesischer Rindfleischeintopf',
        section: 'Rice plates', emoji: '🥕',
        what: 'Chunks of beef and carrot slow-braised with lemongrass, star anise and tomato into a rich red stew. Eaten with a baguette for dipping, or with rice noodles (hủ tiếu bò kho).',
        taste: 'Warming, aromatic and slightly sweet — like a spiced pot roast.',
        spice: 1,
        eat: ['Tear the bread and dunk it in the sauce.', 'Squeeze in lime and add Thai basil.'],
        like: 'beef bourguignon with Asian spices',
        protein: ['beef'], veggie: false, allergens: ['fish', 'gluten'],
        order: { vi: 'Cho tôi một phần bò kho bánh mì.', en: 'Beef stew with bread, please.' },
        core: ['bo kho'], kw: ['banh mi', 'hu tieu', 'eintopf', 'stew'],
        aliases: ['beef stew', 'rindfleischeintopf', 'eintopf'],
        recipes: ['bo-kho'],
    },
    {
        id: 'dau-hu-ca-chua', vi: 'Đậu hũ sốt cà chua', pron: 'dow hoo soht kah choo-ah', en: 'Fried tofu in tomato sauce', de: 'Gebratener Tofu in Tomatensauce',
        section: 'Rice plates', emoji: '🍅',
        what: 'Golden fried tofu simmered in a light tomato and spring-onion sauce. Simple, homey — and the easiest truly vegetarian order (ask for no fish sauce).',
        taste: 'Mild, tangy and comforting.',
        spice: 0,
        eat: ['Spoon over rice.'],
        like: 'tofu in a light marinara',
        protein: ['tofu'], veggie: true, allergens: ['soy', 'fish'],
        order: { vi: 'Cho tôi một dĩa đậu hũ sốt cà chua, không nước mắm.', en: 'Tofu in tomato sauce, without fish sauce, please.' },
        core: ['dau hu|dau phu|tofu'], kw: ['sot', 'ca chua', 'chien', 'tomate'],
        aliases: ['tofu', 'tofu tomato'],
        recipes: ['dau-hu-sot-ca-chua', 'dau-phu-sot-ca-chua'],
    },

    // ── Starters & rolls ──────────────────────────────────────────────────────
    {
        id: 'goi-cuon', vi: 'Gỏi cuốn', pron: 'goy koo-un', en: 'Fresh summer rolls', de: 'Sommerrollen',
        section: 'Starters & rolls', emoji: '🌯',
        what: 'Soft, translucent rice paper rolled around shrimp, pork, rice noodles, lettuce and herbs. Not fried — served cold.',
        taste: 'Fresh, light and herbal; the dip does the talking.',
        spice: 0,
        eat: ['Dip into the peanut-hoisin sauce or fish-sauce dip.', 'Eat with your hands.'],
        like: 'a fresh, healthy wrap',
        protein: ['seafood', 'pork'], veggie: true, allergens: ['crustaceans', 'peanuts', 'soy', 'gluten'],
        order: { vi: 'Cho tôi một phần gỏi cuốn.', en: 'One portion of summer rolls, please.' },
        core: ['goi cuon|cuon|sommerrolle|summer roll'], kw: ['tom', 'thit', 'chay'],
        aliases: ['summer rolls', 'sommerrollen', 'fresh spring rolls', 'fresh rolls'],
        recipes: ['fresh-spring-rolls', 'goi-cuon'],
    },
    {
        id: 'cha-gio', vi: 'Chả giò / Nem rán', pron: 'chah yaw / nem zahn', en: 'Fried spring rolls', de: 'Frühlingsrollen',
        section: 'Starters & rolls', emoji: '🥢',
        what: 'Crispy fried rolls filled with pork, glass noodles, wood-ear mushroom and carrot. Called chả giò in the south and nem (rán) in the north.',
        taste: 'Crunchy, savoury and juicy.',
        spice: 0,
        eat: ['Wrap a piece in lettuce with herbs, then dip in nước chấm.'],
        like: 'Chinese spring rolls — but crispier and meatier',
        protein: ['pork', 'seafood'], veggie: true, allergens: ['fish', 'eggs', 'crustaceans'],
        order: { vi: 'Cho tôi một phần chả giò.', en: 'One portion of fried spring rolls, please.' },
        core: ['cha gio|nem ran|nem|fruhlingsrolle|spring roll|egg roll'], kw: ['chay', 'tom', 'thit'],
        aliases: ['spring rolls', 'fruhlingsrollen', 'egg rolls', 'imperial rolls'],
        recipes: ['cha-gio', 'nem-ran', 'cha-gio-sai-gon', 'nem-ran-ha-noi'],
    },
    {
        id: 'banh-xeo', vi: 'Bánh xèo', pron: 'bahn say-oh', en: 'Crispy turmeric pancake', de: 'Knuspriger vietnamesischer Pfannkuchen',
        section: 'Starters & rolls', emoji: '🥞',
        what: 'A thin, crackly rice-flour and turmeric crêpe filled with pork, shrimp and bean sprouts. The name is the sizzling sound it makes in the pan.',
        taste: 'Crispy, rich and coconutty.',
        spice: 0,
        eat: ['Break off a piece, wrap it in lettuce or mustard leaf with herbs, dip in nước chấm.'],
        like: 'a crispy French crêpe meets a taco',
        protein: ['pork', 'seafood'], veggie: true, allergens: ['crustaceans', 'fish'],
        order: { vi: 'Cho tôi một cái bánh xèo.', en: 'One bánh xèo, please.' },
        core: ['banh xeo'], kw: ['tom', 'thit', 'pfannkuchen'],
        aliases: ['vietnamese pancake', 'vietnamese crepe', 'pfannkuchen'],
        recipes: ['banh-xeo'],
    },
    {
        id: 'goi-du-du', vi: 'Gỏi đu đủ', pron: 'goy doo doo', en: 'Green papaya salad', de: 'Papayasalat',
        section: 'Starters & rolls', emoji: '🥗',
        what: 'Shredded green papaya and carrot tossed with herbs, a sweet-sour fish-sauce dressing and peanuts, topped with shrimp, beef jerky or chicken. "Gỏi ngó sen" uses lotus stems instead.',
        taste: 'Crunchy, tangy, sweet and fresh.',
        spice: 1,
        eat: ['Toss again before eating; scoop it onto a prawn cracker if served.'],
        like: 'Thai som tam, but milder and sweeter',
        protein: ['seafood', 'beef', 'chicken'], veggie: true, allergens: ['fish', 'peanuts', 'crustaceans'],
        order: { vi: 'Cho tôi một dĩa gỏi đu đủ.', en: 'Papaya salad, please.' },
        core: ['goi|nom|papaya'], kw: ['du du', 'ngo sen', 'bo kho', 'tom', 'ga', 'salat'],
        aliases: ['papaya salad', 'papayasalat', 'lotus salad'],
        recipes: ['goi-du-du', 'goi-ngo-sen-tom-thit'],
    },

    // ── Bánh mì & buns ────────────────────────────────────────────────────────
    {
        id: 'banh-mi', vi: 'Bánh mì', pron: 'bahn mee', en: 'Vietnamese baguette sandwich', de: 'Vietnamesisches Baguette',
        section: 'Bánh mì & buns', emoji: '🥖',
        what: 'An airy, crackly baguette filled with pâté, mayo, cold cuts or grilled meat, pickled carrot and daikon, cucumber, coriander and chilli. "Bánh mì" alone just means bread.',
        taste: 'Crunchy, rich, tangy and fresh at the same time.',
        spice: 1,
        eat: ['Say "không cay" for no chilli, "không ngò" for no coriander.'],
        like: 'a French sandwich with an Asian twist',
        protein: ['pork', 'chicken', 'egg', 'tofu'], veggie: true, allergens: ['gluten', 'eggs', 'soy', 'fish'],
        order: { vi: 'Cho tôi một ổ bánh mì thịt.', en: 'One pork bánh mì, please.' },
        core: ['banh mi|baguette'], kw: ['thit', 'pate', 'ga', 'cha', 'op la', 'xiu mai', 'nuong'],
        aliases: ['vietnamese sandwich', 'baguette', 'banh mi'],
        recipes: ['banh-mi', 'banh-mi-sai-gon'],
    },
    {
        id: 'banh-bao', vi: 'Bánh bao', pron: 'bahn bow', en: 'Steamed bun', de: 'Gedämpfte Teigtasche',
        section: 'Bánh mì & buns', emoji: '🥟',
        what: 'A soft, fluffy steamed bun filled with pork, Chinese sausage and a piece of boiled quail or chicken egg.',
        taste: 'Soft, slightly sweet dough with a savoury centre.',
        spice: 0,
        eat: ['Peel off the paper at the bottom; eat it warm, by hand.'],
        like: 'Chinese bao / char siu bao',
        protein: ['pork', 'egg'], veggie: true, allergens: ['gluten', 'eggs', 'soy', 'milk'],
        order: { vi: 'Cho tôi một cái bánh bao.', en: 'One steamed bun, please.' },
        core: ['banh bao|bao'], kw: ['thit', 'trung', 'chay'],
        aliases: ['steamed bun', 'bao bun'],
        recipes: ['banh-bao-hap-sai-gon', 'banh-bao-banh-vac'],
    },

    // ── Drinks & desserts ─────────────────────────────────────────────────────
    {
        id: 'ca-phe-sua-da', vi: 'Cà phê sữa đá', pron: 'kah feh suh-ah dah', en: 'Iced coffee with condensed milk', de: 'Vietnamesischer Eiskaffee',
        section: 'Drinks & desserts', emoji: '☕',
        what: 'Strong dark-roast coffee slow-dripped through a phin filter onto sweetened condensed milk, then poured over ice. "Cà phê đen" = black, "nóng" = hot.',
        taste: 'Bold, chocolatey and very sweet. Strong!',
        spice: 0,
        eat: ['Stir well to mix the condensed milk from the bottom.', 'Sip slowly — it is stronger than espresso drinks.'],
        like: 'an iced latte with dessert-level sweetness',
        protein: [], veggie: true, allergens: ['milk'],
        order: { vi: 'Cho tôi một ly cà phê sữa đá.', en: 'One iced milk coffee, please.' },
        core: ['ca phe|cafe|coffee|kaffee'], kw: ['sua', 'da', 'den', 'nong', 'eis'],
        aliases: ['vietnamese coffee', 'iced coffee', 'eiskaffee'],
        recipes: ['ca-phe-sua-da'],
    },
    {
        id: 'che-ba-mau', vi: 'Chè ba màu', pron: 'cheh bah mow', en: 'Three-colour dessert', de: 'Drei-Farben-Dessert',
        section: 'Drinks & desserts', emoji: '🍧',
        what: 'A layered sweet "soup" in a glass: red beans, yellow mung-bean paste and green pandan jelly, topped with coconut milk and crushed ice. "Chè" covers a whole family of sweet soups and puddings.',
        taste: 'Sweet, creamy, chewy and icy.',
        spice: 0,
        eat: ['Stir all the layers together with the long spoon.'],
        like: 'a bean-based sundae',
        protein: [], veggie: true, allergens: [],
        order: { vi: 'Cho tôi một ly chè ba màu.', en: 'One three-colour dessert, please.' },
        core: ['che'], kw: ['ba mau', 'thap cam', 'dau', 'troi nuoc', 'dessert'],
        aliases: ['three color dessert', 'vietnamese dessert'],
        recipes: ['che-ba-mau', 'che-thap-cam'],
    },
]

// ─── Menu dictionary: word → meaning ────────────────────────────────────────
export type WordGroup = 'Noodles, rice & dishes' | 'Meat & cuts' | 'Seafood & veg' | 'How it\'s cooked' | 'Flavours & extras' | 'Ordering words'

export interface MenuWord { vi: string; en: string; group: WordGroup; alt?: string[] }

export const MENU_WORDS: MenuWord[] = [
    // Noodles, rice & dishes
    { vi: 'phở', en: 'flat rice noodles (usually in soup)', group: 'Noodles, rice & dishes' },
    { vi: 'bún', en: 'round rice vermicelli', group: 'Noodles, rice & dishes' },
    { vi: 'miến', en: 'glass noodles', group: 'Noodles, rice & dishes' },
    { vi: 'mì', en: 'wheat / egg noodles', group: 'Noodles, rice & dishes' },
    { vi: 'hủ tiếu', en: 'clear, chewy rice noodles (southern)', group: 'Noodles, rice & dishes', alt: ['hủ tíu'] },
    { vi: 'bánh canh', en: 'thick, udon-like tapioca noodles', group: 'Noodles, rice & dishes' },
    { vi: 'cơm', en: 'rice / a rice meal', group: 'Noodles, rice & dishes' },
    { vi: 'cơm tấm', en: 'broken rice', group: 'Noodles, rice & dishes' },
    { vi: 'xôi', en: 'sticky rice', group: 'Noodles, rice & dishes' },
    { vi: 'cháo', en: 'rice porridge / congee', group: 'Noodles, rice & dishes' },
    { vi: 'bánh mì', en: 'baguette / bread', group: 'Noodles, rice & dishes' },
    { vi: 'bánh', en: 'cake, bun, pancake — anything made from dough or batter', group: 'Noodles, rice & dishes' },
    { vi: 'gỏi', en: 'salad (south)', group: 'Noodles, rice & dishes', alt: ['nộm'] },
    { vi: 'cuốn', en: 'rolled / a roll', group: 'Noodles, rice & dishes' },
    { vi: 'canh', en: 'light soup eaten with rice', group: 'Noodles, rice & dishes' },
    { vi: 'lẩu', en: 'hot pot', group: 'Noodles, rice & dishes' },
    { vi: 'chè', en: 'sweet dessert soup / pudding', group: 'Noodles, rice & dishes' },
    { vi: 'cà ri', en: 'curry', group: 'Noodles, rice & dishes' },

    // Meat & cuts
    { vi: 'bò', en: 'beef', group: 'Meat & cuts' },
    { vi: 'gà', en: 'chicken', group: 'Meat & cuts' },
    { vi: 'heo', en: 'pork', group: 'Meat & cuts', alt: ['lợn'] },
    { vi: 'vịt', en: 'duck', group: 'Meat & cuts' },
    { vi: 'thịt', en: 'meat (usually pork)', group: 'Meat & cuts' },
    { vi: 'tái', en: 'rare beef — thin raw slices that cook in the hot broth', group: 'Meat & cuts' },
    { vi: 'chín', en: 'well-done beef (boiled brisket)', group: 'Meat & cuts' },
    { vi: 'nạm', en: 'beef flank', group: 'Meat & cuts' },
    { vi: 'gầu', en: 'fatty brisket', group: 'Meat & cuts' },
    { vi: 'gân', en: 'beef tendon (soft and gelatinous)', group: 'Meat & cuts' },
    { vi: 'sách', en: 'tripe', group: 'Meat & cuts' },
    { vi: 'bò viên', en: 'beef meatballs', group: 'Meat & cuts' },
    { vi: 'sườn', en: 'pork chop / spare ribs', group: 'Meat & cuts' },
    { vi: 'bì', en: 'shredded pork skin (chewy)', group: 'Meat & cuts' },
    { vi: 'chả', en: 'pork patty or meatloaf', group: 'Meat & cuts' },
    { vi: 'chả giò', en: 'fried spring roll', group: 'Meat & cuts' },
    { vi: 'nem', en: 'spring roll (north) or cured pork', group: 'Meat & cuts' },
    { vi: 'giò heo', en: 'pork hock / trotter', group: 'Meat & cuts' },
    { vi: 'lòng', en: 'offal', group: 'Meat & cuts' },
    { vi: 'huyết', en: 'congealed blood cubes', group: 'Meat & cuts' },
    { vi: 'pate', en: 'liver pâté', group: 'Meat & cuts', alt: ['pa tê'] },
    { vi: 'trứng', en: 'egg', group: 'Meat & cuts' },
    { vi: 'ốp la', en: 'fried egg, sunny side up', group: 'Meat & cuts' },

    // Seafood & veg
    { vi: 'hải sản', en: 'seafood', group: 'Seafood & veg' },
    { vi: 'tôm', en: 'shrimp / prawn', group: 'Seafood & veg' },
    { vi: 'mực', en: 'squid', group: 'Seafood & veg' },
    { vi: 'cá', en: 'fish', group: 'Seafood & veg' },
    { vi: 'cua', en: 'crab', group: 'Seafood & veg' },
    { vi: 'nghêu', en: 'clams', group: 'Seafood & veg' },
    { vi: 'chay', en: 'vegetarian', group: 'Seafood & veg' },
    { vi: 'đậu hũ', en: 'tofu', group: 'Seafood & veg', alt: ['đậu phụ'] },
    { vi: 'nấm', en: 'mushrooms', group: 'Seafood & veg' },
    { vi: 'rau', en: 'vegetables / herbs', group: 'Seafood & veg' },
    { vi: 'rau muống', en: 'water spinach (morning glory)', group: 'Seafood & veg' },
    { vi: 'giá', en: 'bean sprouts', group: 'Seafood & veg' },
    { vi: 'đu đủ', en: 'papaya', group: 'Seafood & veg' },
    { vi: 'cà chua', en: 'tomato', group: 'Seafood & veg' },
    { vi: 'khoai', en: 'potato / fries', group: 'Seafood & veg' },

    // How it's cooked
    { vi: 'nướng', en: 'grilled', group: 'How it\'s cooked' },
    { vi: 'chiên', en: 'fried', group: 'How it\'s cooked', alt: ['rán'] },
    { vi: 'xào', en: 'stir-fried', group: 'How it\'s cooked' },
    { vi: 'hấp', en: 'steamed', group: 'How it\'s cooked' },
    { vi: 'kho', en: 'braised in caramel & fish sauce', group: 'How it\'s cooked' },
    { vi: 'luộc', en: 'boiled', group: 'How it\'s cooked' },
    { vi: 'quay', en: 'roasted', group: 'How it\'s cooked' },
    { vi: 'giòn', en: 'crispy', group: 'How it\'s cooked' },
    { vi: 'sốt', en: 'in sauce', group: 'How it\'s cooked' },
    { vi: 'trộn', en: 'tossed / mixed (like a salad)', group: 'How it\'s cooked' },
    { vi: 'khô', en: 'dry — noodles with broth on the side', group: 'How it\'s cooked' },
    { vi: 'tộ', en: 'clay pot', group: 'How it\'s cooked' },

    // Flavours & extras
    { vi: 'sả', en: 'lemongrass', group: 'Flavours & extras' },
    { vi: 'ớt', en: 'chilli', group: 'Flavours & extras' },
    { vi: 'sả ớt', en: 'lemongrass & chilli', group: 'Flavours & extras' },
    { vi: 'tỏi', en: 'garlic', group: 'Flavours & extras' },
    { vi: 'gừng', en: 'ginger', group: 'Flavours & extras' },
    { vi: 'me', en: 'tamarind (sour)', group: 'Flavours & extras' },
    { vi: 'chua', en: 'sour', group: 'Flavours & extras' },
    { vi: 'chua ngọt', en: 'sweet & sour', group: 'Flavours & extras' },
    { vi: 'cay', en: 'spicy', group: 'Flavours & extras' },
    { vi: 'nước mắm', en: 'fish sauce', group: 'Flavours & extras' },
    { vi: 'nước chấm', en: 'dipping sauce (sweet-sour fish sauce)', group: 'Flavours & extras' },
    { vi: 'mắm tôm', en: 'fermented shrimp paste — very pungent', group: 'Flavours & extras' },
    { vi: 'đậu phộng', en: 'peanuts', group: 'Flavours & extras', alt: ['lạc'] },
    { vi: 'nước dừa', en: 'coconut water', group: 'Flavours & extras' },
    { vi: 'cà phê', en: 'coffee', group: 'Flavours & extras', alt: ['cafe', 'cafê'] },
    { vi: 'sữa', en: 'milk (in coffee: condensed milk)', group: 'Flavours & extras' },
    { vi: 'đá', en: 'ice / iced', group: 'Flavours & extras' },
    { vi: 'trà', en: 'tea', group: 'Flavours & extras' },

    // Ordering words
    { vi: 'đặc biệt', en: 'special — the house version with everything', group: 'Ordering words' },
    { vi: 'thập cẩm', en: 'mixed — a bit of everything', group: 'Ordering words' },
    { vi: 'ba màu', en: 'three-colour', group: 'Ordering words' },
    { vi: 'nóng', en: 'hot (temperature)', group: 'Ordering words' },
    { vi: 'lớn', en: 'large', group: 'Ordering words' },
    { vi: 'nhỏ', en: 'small', group: 'Ordering words' },
    { vi: 'không', en: 'no / without (e.g. "không cay" = not spicy)', group: 'Ordering words' },
    { vi: 'thêm', en: 'extra / more', group: 'Ordering words' },
    { vi: 'với', en: 'with', group: 'Ordering words' },
    { vi: 'Nam Bộ', en: 'southern style', group: 'Ordering words' },
    { vi: 'Hà Nội', en: 'Hanoi style (north)', group: 'Ordering words' },
    { vi: 'Huế', en: 'Huế style (central, usually spicy)', group: 'Ordering words' },
]

export const WORD_GROUPS: WordGroup[] = ['Noodles, rice & dishes', 'Meat & cuts', 'Seafood & veg', 'How it\'s cooked', 'Flavours & extras', 'Ordering words']

// ─── Matching helpers (shared by page + client) ──────────────────────────────
export const norm = (s: string) =>
    s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/ß/g, 'ss')
        .replace(/[^a-z0-9]+/g, ' ').trim()

const has = (q: string, phrase: string) => ` ${q} `.includes(` ${phrase} `) || (phrase.length > 4 && q.includes(phrase))

/** Score how well a menu line matches a dish (0 = no match). */
export function scoreDish(d: Dish, query: string): number {
    const q = norm(query)
    if (!q) return 0
    let score = 0
    for (const a of d.aliases) if (has(q, norm(a))) score = Math.max(score, 10 + norm(a).split(' ').length)
    let coreOk = true, coreLen = 0
    for (const rule of d.core) {
        const hit = rule.split('|').map(norm).filter(p => has(q, p)).sort((a, b) => b.length - a.length)[0]
        if (!hit) { coreOk = false; break }
        coreLen += hit.split(' ').length
    }
    if (coreOk) score = Math.max(score, coreLen * 3)
    if (score === 0) return 0
    for (const k of d.kw) if (has(q, norm(k))) score += 1
    if (has(q, norm(d.vi))) score += 4
    return score
}

/** Break a menu line into known words, longest match first. */
export function decodeWords(query: string): { text: string; word: MenuWord | null }[] {
    const raw = query.toLowerCase().replace(/[0-9.,:;()\/€$+*-]+/g, ' ').split(/\s+/).filter(Boolean)
    const out: { text: string; word: MenuWord | null }[] = []
    const lookup = (parts: string[]): MenuWord | null => {
        const exact = parts.join(' ')
        const n = norm(exact)
        const forms = (w: MenuWord) => [w.vi, ...(w.alt ?? [])]
        return MENU_WORDS.find(w => forms(w).some(f => f.toLowerCase() === exact))
            ?? MENU_WORDS.find(w => forms(w).some(f => norm(f) === n))
            ?? null
    }
    for (let i = 0; i < raw.length;) {
        let matched = false
        for (let len = Math.min(3, raw.length - i); len >= 1; len--) {
            const w = lookup(raw.slice(i, i + len))
            if (w) { out.push({ text: raw.slice(i, i + len).join(' '), word: w }); i += len; matched = true; break }
        }
        if (!matched) { out.push({ text: raw[i], word: null }); i++ }
    }
    return out
}
