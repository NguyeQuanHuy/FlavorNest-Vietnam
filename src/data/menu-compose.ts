// ─────────────────────────────────────────────────────────────────────────────
//  src/data/menu-compose.ts
//  Explains dishes that are NOT in the 30-dish list by composing them from the
//  words on the menu (Vietnamese, German or English):
//    "Mì xào hải sản sả ớt" → stir-fried egg noodles with seafood, lemongrass &
//    chilli · gluten, egg, shellfish, squid, fish sauce · spicy.
//  Rule-based and on-device — results are an educated guess, labelled as such.
// ─────────────────────────────────────────────────────────────────────────────

import { DISHES, scoreDish, norm, type Allergen, type Dish } from './menu-decoder'

type Role = 'base' | 'protein' | 'veg' | 'method' | 'flavor' | 'style'
type Kind = 'savory' | 'sweet' | 'drink'

interface Concept {
    role: Role
    en: string
    forms: string[]          // Vietnamese (with diacritics) + German / English / no-accent spellings
    allergens?: Allergen[]
    spice?: 0 | 1 | 2 | 3
    kind?: Kind              // only for bases (default savory)
    desc?: string            // bases: how it is usually made / served
    similar?: string         // a dish id from menu-decoder.ts to illustrate it
    carb?: boolean           // bases: rice / noodles ("stir-fried" describes the base itself)
    emoji?: string
    meat?: boolean           // proteins: false for tofu / egg / vegetarian
}

const C: Concept[] = [
    // ── Bases: what kind of dish ───────────────────────────────────────────────
    { role: 'base', carb: true, en: 'fried rice', forms: ['cơm chiên', 'cơm rang', 'gebratener reis', 'fried rice'], allergens: ['eggs', 'soy'], emoji: '🍳', similar: 'com-chien', desc: 'Rice wok-fried with egg, vegetables and the main ingredient.' },
    { role: 'base', carb: true, en: 'broken rice plate', forms: ['cơm tấm', 'bruchreis', 'broken rice'], emoji: '🍚', similar: 'com-tam', desc: 'Fragrant broken rice served with grilled meat, pickles and sweet fish sauce.' },
    { role: 'base', carb: true, en: 'rice plate', forms: ['cơm', 'reis', 'rice'], emoji: '🍚', similar: 'com-tam', desc: 'A plate of steamed jasmine rice with the main dish on top or beside it.' },
    { role: 'base', carb: true, en: 'sticky rice', forms: ['xôi', 'klebreis', 'sticky rice'], emoji: '🍙', desc: 'Steamed glutinous rice — chewy, often with savoury toppings or sweet beans.' },
    { role: 'base', en: 'rice porridge', forms: ['cháo', 'reisbrei', 'congee', 'porridge'], emoji: '🥣', desc: 'Silky rice porridge (congee), gently seasoned — comfort food.' },
    { role: 'base', en: 'pho (flat rice noodle soup)', forms: ['phở', 'pho'], emoji: '🍜', similar: 'pho-bo', desc: 'Flat rice noodles in a clear, spiced broth with herbs, lime and bean sprouts on the side.' },
    { role: 'base', carb: true, en: 'clear rice noodles', forms: ['hủ tiếu', 'hủ tíu', 'hu tieu', 'hu tiu'], emoji: '🍜', similar: 'hu-tieu', desc: 'Chewy clear rice noodles, in a sweet pork broth or "khô" (dry) with the broth on the side.' },
    { role: 'base', en: 'steamed rice rolls', forms: ['bánh cuốn', 'banh cuon'], emoji: '🥟', desc: 'Silky, paper-thin steamed rice sheets rolled around minced pork and wood-ear mushroom, with fried shallots and fish-sauce dip.' },
    { role: 'base', en: 'mini rice cakes', forms: ['bánh bèo', 'bánh khọt', 'bánh bột lọc', 'bánh ít'], allergens: ['crustaceans'], emoji: '🥟', desc: 'Small steamed or pan-fried rice / tapioca cakes topped with shrimp and crispy shallots — eaten with fish-sauce dip.' },
    { role: 'base', en: 'fermented fish noodle soup', forms: ['bún mắm'], allergens: ['fish', 'crustaceans', 'molluscs'], emoji: '🍜', desc: 'A pungent, deeply savoury Mekong noodle soup made with fermented fish, seafood and pork. For the adventurous.' },
    { role: 'base', en: 'thick noodle soup', forms: ['bánh canh'], emoji: '🍜', desc: 'Thick, udon-like tapioca/rice noodles in a rich, slightly thick broth.' },
    { role: 'base', carb: true, en: 'glass noodles', forms: ['miến', 'glasnudeln', 'glasnudel', 'glass noodles', 'glass noodle'], emoji: '🥢', similar: 'mien-xao', desc: 'Springy, see-through noodles made from mung-bean or canna starch — naturally gluten-free.' },
    { role: 'base', carb: true, en: 'rice vermicelli', forms: ['bún', 'reisnudeln', 'reisnudel', 'vermicelli', 'rice noodles'], emoji: '🥢', similar: 'bun-bo-nam-bo', desc: 'Soft, thin round rice noodles — in a soup, or as a cool noodle bowl with herbs and fish-sauce dressing.' },
    { role: 'base', carb: true, en: 'egg noodles', forms: ['mì', 'mỳ', 'nudeln', 'noodles', 'eiernudeln', 'egg noodles'], allergens: ['gluten', 'eggs'], emoji: '🍝', similar: 'mi-xao', desc: 'Wheat-and-egg noodles — usually wok-fried, or crispy-fried with a glossy sauce on top.' },
    { role: 'base', en: 'baguette sandwich', forms: ['bánh mì', 'banh mi', 'baguette'], allergens: ['gluten', 'eggs', 'soy'], emoji: '🥖', similar: 'banh-mi', desc: 'Crusty Vietnamese baguette with pâté, mayo, pickles, cucumber, coriander and chilli.' },
    { role: 'base', en: 'steamed bun', forms: ['bánh bao', 'dampfnudel', 'bao'], allergens: ['gluten', 'milk'], emoji: '🥟', desc: 'Fluffy steamed bun with a savoury filling.' },
    { role: 'base', en: 'crispy pancake', forms: ['bánh xèo', 'pfannkuchen', 'pancake', 'crepe'], allergens: ['crustaceans'], emoji: '🥞', similar: 'banh-xeo', desc: 'Thin, crackly rice-flour & turmeric crêpe — wrap pieces in lettuce and herbs, dip in fish sauce.' },
    { role: 'base', en: 'fresh summer rolls', forms: ['gỏi cuốn', 'cuốn', 'sommerrollen', 'sommerrolle', 'summer rolls', 'summer roll'], allergens: ['peanuts', 'soy'], emoji: '🌯', similar: 'goi-cuon', desc: 'Soft rice paper rolled around noodles, herbs and filling — served cold with a dip.' },
    { role: 'base', en: 'fried spring rolls', forms: ['chả giò', 'nem rán', 'nem', 'frühlingsrollen', 'frühlingsrolle', 'spring rolls', 'spring roll', 'glücksrollen'], allergens: ['eggs'], emoji: '🥢', similar: 'cha-gio', desc: 'Crispy fried rolls, usually with pork, glass noodles and mushroom — wrap in lettuce and dip.' },
    { role: 'base', en: 'salad', forms: ['gỏi', 'nộm', 'salat', 'salad'], allergens: ['peanuts'], emoji: '🥗', similar: 'goi-du-du', desc: 'A crunchy, tangy salad dressed with lime, sugar and fish sauce, topped with herbs and peanuts.' },
    { role: 'base', en: 'hot pot', forms: ['lẩu', 'feuertopf', 'hot pot', 'hotpot'], emoji: '🍲', desc: 'A simmering pot of broth at the table — you cook meat, seafood, vegetables and noodles in it. Made for sharing.' },
    { role: 'base', en: 'curry', forms: ['cà ri', 'cari', 'curry'], spice: 1, emoji: '🍛', similar: 'ca-ri-ga', desc: 'A mild, fragrant Vietnamese curry with lemongrass and coconut milk — with rice, noodles or bread.' },
    { role: 'base', en: 'stew', forms: ['bò kho', 'eintopf', 'stew'], emoji: '🍲', similar: 'bo-kho', desc: 'Slow-braised in a spiced, aromatic sauce — eaten with bread, rice or noodles.' },
    { role: 'base', en: 'soup', forms: ['canh', 'súp', 'suppe', 'soup'], emoji: '🥣', similar: 'canh-chua', desc: 'A light soup — in Vietnam it is shared at the table and spooned over rice.' },
    { role: 'base', en: 'sweet dessert soup', forms: ['chè', 'dessert', 'nachtisch'], kind: 'sweet', emoji: '🍧', desc: 'A sweet "soup" or pudding of beans, jellies, fruit and coconut milk, often over ice.' },
    { role: 'base', en: 'smoothie', forms: ['sinh tố', 'smoothie'], kind: 'drink', allergens: ['milk'], emoji: '🥤', desc: 'Fresh fruit blended with ice and a little condensed milk.' },
    { role: 'base', en: 'coffee', forms: ['cà phê', 'cafe', 'kaffee', 'coffee'], kind: 'drink', emoji: '☕', similar: 'ca-phe-sua-da', desc: 'Strong, dark Vietnamese coffee, dripped through a phin filter.' },
    { role: 'base', en: 'tea', forms: ['trà', 'tee', 'tea'], kind: 'drink', emoji: '🍵', desc: 'Tea — often jasmine or green tea, or iced lemon tea (trà chanh).' },
    { role: 'base', en: 'juice', forms: ['nước ép', 'saft', 'juice'], kind: 'drink', emoji: '🧃', desc: 'Freshly pressed juice.' },

    // ── Proteins ──────────────────────────────────────────────────────────────
    { role: 'protein', en: 'seafood', forms: ['hải sản', 'meeresfrüchte', 'seafood'], allergens: ['crustaceans', 'molluscs', 'fish'], meat: true },
    { role: 'protein', en: 'beef balls', forms: ['bò viên', 'rindfleischbällchen', 'beef balls'], meat: true },
    { role: 'protein', en: 'beef', forms: ['bò', 'rind', 'rindfleisch', 'beef'], meat: true },
    { role: 'protein', en: 'chicken', forms: ['gà', 'hähnchen', 'hühnchen', 'huhn', 'hähnchenfleisch', 'chicken'], meat: true },
    { role: 'protein', en: 'pork ribs / chop', forms: ['sườn', 'rippchen', 'spareribs', 'kotelett', 'ribs', 'pork chop'], meat: true },
    { role: 'protein', en: 'grilled pork', forms: ['thịt nướng'], meat: true },
    { role: 'protein', en: 'char siu (red roast pork)', forms: ['xá xíu', 'xa xiu', 'char siu'], allergens: ['soy', 'gluten'], meat: true },
    { role: 'protein', en: 'Chinese sausage', forms: ['lạp xưởng', 'lap xuong'], allergens: ['soy'], meat: true },
    { role: 'protein', en: 'Vietnamese pork ham', forms: ['chả lụa', 'giò lụa'], meat: true },
    { role: 'protein', en: 'pork patty / meatloaf', forms: ['chả'], allergens: ['eggs'], meat: true },
    { role: 'protein', en: 'pork', forms: ['heo', 'lợn', 'thịt', 'schwein', 'schweinefleisch', 'pork'], meat: true },
    { role: 'protein', en: 'duck', forms: ['vịt', 'ente', 'duck'], meat: true },
    { role: 'protein', en: 'shrimp', forms: ['tôm', 'garnelen', 'garnele', 'shrimp', 'shrimps', 'prawns', 'prawn', 'scampi'], allergens: ['crustaceans'], meat: true },
    { role: 'protein', en: 'crab', forms: ['cua', 'ghẹ', 'krabbe', 'krabben', 'crab'], allergens: ['crustaceans'], meat: true },
    { role: 'protein', en: 'squid', forms: ['mực', 'tintenfisch', 'calamari', 'squid'], allergens: ['molluscs'], meat: true },
    { role: 'protein', en: 'clams / mussels', forms: ['nghêu', 'sò', 'hến', 'muscheln', 'clams', 'mussels'], allergens: ['molluscs'], meat: true },
    { role: 'protein', en: 'snails', forms: ['ốc', 'schnecken', 'snails'], allergens: ['molluscs'], meat: true },
    { role: 'protein', en: 'fish', forms: ['cá', 'fisch', 'fish', 'lachs', 'salmon'], allergens: ['fish'], meat: true },
    { role: 'protein', en: 'frog legs', forms: ['ếch', 'froschschenkel', 'frog'], meat: true },
    { role: 'protein', en: 'tofu', forms: ['đậu hũ', 'đậu phụ', 'tàu hũ', 'dau hu', 'dau phu', 'tofu'], allergens: ['soy'], meat: false },
    { role: 'protein', en: 'egg', forms: ['trứng', 'ốp la', 'ei', 'eier', 'spiegelei', 'egg', 'eggs'], allergens: ['eggs'], meat: false },

    // ── Vegetables & extras ───────────────────────────────────────────────────
    { role: 'veg', en: 'mushrooms', forms: ['nấm', 'pilze', 'champignons', 'mushrooms', 'mushroom'] },
    { role: 'veg', en: 'morning glory (water spinach)', forms: ['rau muống', 'wasserspinat', 'water spinach', 'morning glory'] },
    { role: 'veg', en: 'mixed vegetables', forms: ['rau củ', 'rau', 'gemüse', 'vegetables', 'veggies'] },
    { role: 'veg', en: 'bean sprouts', forms: ['giá', 'sojasprossen', 'bean sprouts'] },
    { role: 'veg', en: 'green papaya', forms: ['đu đủ', 'papaya'] },
    { role: 'veg', en: 'lotus stems', forms: ['ngó sen', 'lotus'] },
    { role: 'veg', en: 'tomato', forms: ['cà chua', 'tomate', 'tomaten', 'tomato'] },
    { role: 'veg', en: 'pineapple', forms: ['thơm', 'dứa', 'ananas', 'pineapple'] },
    { role: 'veg', en: 'aubergine', forms: ['cà tím', 'aubergine', 'eggplant'] },
    { role: 'veg', en: 'bitter melon', forms: ['khổ qua', 'mướp đắng', 'bittermelone', 'bitter melon'] },

    { role: 'veg', en: 'avocado', forms: ['bơ', 'avocado'] },
    { role: 'veg', en: 'banana', forms: ['chuối', 'banane', 'banana'] },
    { role: 'veg', en: 'mango', forms: ['xoài', 'mango'] },
    { role: 'veg', en: 'coconut', forms: ['dừa', 'kokosnuss'] },
    { role: 'veg', en: 'jackfruit', forms: ['mít', 'jackfrucht', 'jackfruit'] },
    { role: 'veg', en: 'durian', forms: ['sầu riêng', 'durian'] },
    { role: 'veg', en: 'passion fruit', forms: ['chanh dây', 'maracuja', 'passion fruit'] },
    { role: 'veg', en: 'strawberry', forms: ['dâu', 'erdbeere', 'strawberry'] },
    { role: 'veg', en: 'mung beans', forms: ['đậu xanh', 'mungbohnen', 'mung beans'] },
    { role: 'veg', en: 'red beans', forms: ['đậu đỏ', 'rote bohnen', 'red beans'] },
    { role: 'veg', en: 'jelly', forms: ['thạch', 'gelee', 'jelly'] },
    { role: 'veg', en: 'sugarcane', forms: ['mía', 'zuckerrohr', 'sugarcane'] },

    // ── How it is cooked ──────────────────────────────────────────────────────
    { role: 'method', en: 'stir-fried', forms: ['xào', 'gebraten', 'gebratene', 'gebratener', 'gebratenes', 'stir-fried', 'stir fried', 'wok'] },
    { role: 'method', en: 'deep-fried', forms: ['chiên', 'rán', 'frittiert', 'frittierte', 'fried', 'deep-fried'] },
    { role: 'method', en: 'crispy-fried', forms: ['xối mỡ'] },
    { role: 'method', en: 'crispy', forms: ['giòn', 'knusprig', 'knusprige', 'knuspriger', 'crispy'] },
    { role: 'method', en: 'grilled', forms: ['nướng', 'gegrillt', 'gegrillte', 'gegrilltes', 'grilled', 'bbq'] },
    { role: 'method', en: 'steamed', forms: ['hấp', 'gedämpft', 'gedämpfte', 'steamed'] },
    { role: 'method', en: 'caramel-braised', forms: ['kho', 'kho tộ', 'geschmort', 'geschmorte', 'braised'] },
    { role: 'method', en: 'roasted', forms: ['quay', 'geröstet', 'roasted', 'roast'] },
    { role: 'method', en: 'boiled / poached', forms: ['luộc', 'gekocht', 'boiled', 'poached'] },
    { role: 'method', en: 'tossed', forms: ['trộn', 'gemischt', 'tossed', 'mixed'] },
    { role: 'method', en: 'in sauce', forms: ['sốt', 'soße', 'sauce'] },
    { role: 'method', en: 'dry (broth on the side)', forms: ['khô'] },

    // ── Flavour, heat & allergen hints ───────────────────────────────────────
    { role: 'flavor', en: 'lemongrass & chilli', forms: ['sả ớt', 'sa ot', 'zitronengras chili'], spice: 2 },
    { role: 'flavor', en: 'satay', forms: ['sa tế', 'sate', 'saté', 'satay', 'erdnusssoße', 'erdnusssauce', 'peanut sauce'], spice: 1, allergens: ['peanuts'] },
    { role: 'flavor', en: 'chilli', forms: ['ớt', 'chili', 'chilli', 'chile'], spice: 2 },
    { role: 'flavor', en: 'spicy', forms: ['cay', 'scharf', 'scharfe', 'scharfer', 'spicy', 'hot'], spice: 2 },
    { role: 'flavor', en: 'extra spicy', forms: ['rất cay', 'sehr scharf', 'extra scharf', 'very spicy', 'extra hot'], spice: 3 },
    { role: 'flavor', en: 'lemongrass', forms: ['sả', 'zitronengras', 'lemongrass'] },
    { role: 'flavor', en: 'garlic', forms: ['tỏi', 'knoblauch', 'garlic'] },
    { role: 'flavor', en: 'ginger', forms: ['gừng', 'ingwer', 'ginger'] },
    { role: 'flavor', en: 'black pepper', forms: ['tiêu', 'pfeffer', 'pepper'], spice: 1 },
    { role: 'flavor', en: 'sweet & sour', forms: ['chua ngọt', 'süß-sauer', 'süßsauer', 'süß sauer', 'sweet and sour', 'sweet & sour'] },
    { role: 'flavor', en: 'tamarind', forms: ['me', 'tamarinde', 'tamarind'] },
    { role: 'flavor', en: 'coconut milk', forms: ['nước cốt dừa', 'cốt dừa', 'kokosmilch', 'kokos', 'coconut milk', 'coconut'] },
    { role: 'flavor', en: 'honey', forms: ['mật ong', 'honig', 'honey'] },
    { role: 'flavor', en: 'five-spice', forms: ['ngũ vị', 'fünf gewürze', 'five spice'] },
    { role: 'flavor', en: 'peanuts', forms: ['đậu phộng', 'lạc', 'erdnüsse', 'erdnuss', 'erdnüssen', 'peanuts', 'peanut'], allergens: ['peanuts'] },
    { role: 'flavor', en: 'cashews', forms: ['hạt điều', 'cashew', 'cashews', 'cashewnüsse', 'cashewkerne'] },
    { role: 'flavor', en: 'sesame', forms: ['mè', 'vừng', 'sesam', 'sesame'], allergens: ['sesame'] },
    { role: 'flavor', en: 'oyster sauce', forms: ['dầu hào', 'austernsoße', 'austernsauce', 'oyster sauce'], allergens: ['molluscs'] },
    { role: 'flavor', en: 'soy sauce', forms: ['xì dầu', 'nước tương', 'sojasoße', 'sojasauce', 'soy sauce'], allergens: ['soy', 'gluten'] },
    { role: 'flavor', en: 'fermented shrimp paste', forms: ['mắm tôm', 'mắm ruốc'], allergens: ['crustaceans'] },
    { role: 'flavor', en: 'fish sauce', forms: ['nước mắm', 'fischsoße', 'fischsauce', 'fish sauce'], allergens: ['fish'] },
    { role: 'flavor', en: 'condensed milk', forms: ['sữa đặc', 'sữa', 'milch', 'kondensmilch', 'milk'], allergens: ['milk'] },
    { role: 'flavor', en: 'lime', forms: ['chanh', 'limette', 'zitrone', 'lime', 'lemon'] },

    // ── Style / ordering words ───────────────────────────────────────────────
    { role: 'style', en: 'vegetarian', forms: ['chay', 'vegetarisch', 'vegan', 'vegetarian'] },
    { role: 'style', en: 'house special (everything)', forms: ['đặc biệt', 'thập cẩm', 'spezial', 'special', 'house special'] },
    { role: 'style', en: 'Huế style', forms: ['huế', 'hue'], spice: 1 },
    { role: 'style', en: 'Thai-style spicy & sour', forms: ['thái', 'thai'], spice: 2 },
    { role: 'style', en: 'Yangzhou style — with Chinese sausage & shrimp', forms: ['dương châu', 'duong chau', 'yangzhou'], allergens: ['crustaceans'] },
    { role: 'style', en: 'Hanoi style', forms: ['hà nội', 'hanoi'] },
    { role: 'style', en: 'Saigon style', forms: ['sài gòn', 'saigon'] },
    { role: 'style', en: 'Phnom Penh style', forms: ['nam vang'] },
    { role: 'style', en: 'southern style', forms: ['nam bộ'] },
]

// ── matching helpers ────────────────────────────────────────────────────────
const strip = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/ß/g, 'ss')
const exactIndex = new Map<string, Concept>()
const looseIndex = new Map<string, Concept>()
for (const c of C) for (const f of c.forms) {
    const k = f.toLowerCase()
    if (!exactIndex.has(k)) exactIndex.set(k, c)
    const n = strip(f)
    if (!looseIndex.has(n)) looseIndex.set(n, c) // first entry wins (cá before cà, mì before …)
}
const MAX_WORDS = 3
const SHORT_OK = new Set(['bo', 'ga', 'mi', 'oc', 'ei'])
const STOP = new Set(['mit', 'und', 'oder', 'in', 'im', 'auf', 'nach', 'art', 'vom', 'von', 'dazu', 'with', 'and', 'or', 'the', 'of', 'a', 'an', 'served', 'à', 'la', 'le', 'de', 'với', 'và'])

export interface ComposedDish {
    line: string
    note?: string                 // the menu's own description line (e.g. the German translation)
    title: string                 // "Stir-fried egg noodles with seafood, lemongrass & chilli"
    emoji: string
    desc: string | null           // how this kind of dish is made / served
    madeWith: string[]            // the recognised parts, in English
    words: { text: string; en: string }[]
    unknown: string[]
    allergens: Allergen[]         // from the words on the menu
    fishSauceLikely: boolean      // savoury Vietnamese dishes almost always use it
    spice: 0 | 1 | 2 | 3
    vegetarian: boolean
    kind: Kind
    similar: string | null        // dish id for an illustration
}

const list = (xs: string[]) => (xs.length <= 1 ? xs.join('') : `${xs.slice(0, -1).join(', ')} & ${xs[xs.length - 1]}`)
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

/** Compose an explanation from a menu line. Returns null when the line holds no dish words. */
export function composeDish(line: string): ComposedDish | null {
    const tokens = line.toLowerCase()
        .replace(/[0-9]+[.,]?[0-9]*\s*(€|eur|euro)?/g, ' ')
        .replace(/[()[\]{}"“”'’:;!?/\\|+*•·–—,.-]+/g, ' ')
        .split(/\s+/).filter(Boolean)
    const found: { text: string; c: Concept }[] = []
    const unknown: string[] = []
    for (let i = 0; i < tokens.length;) {
        let hit = false
        for (let len = Math.min(MAX_WORDS, tokens.length - i); len >= 1; len--) {
            const phrase = tokens.slice(i, i + len).join(' ')
            // very short words without accents ("ca", "so", "me") are too ambiguous — except the classics
            const loose = strip(phrase)
            if (len === 1 && STOP.has(phrase)) continue // "mit", "und", "with"… (but "mít" with accent still matches)
            const looseOk = loose.length > 2 || phrase !== loose || SHORT_OK.has(loose)
            const c = exactIndex.get(phrase) ?? (looseOk ? looseIndex.get(loose) : undefined)
                // German adjective endings: gegrilltem → gegrillt, knusprigen → knusprig
                ?? (len === 1 && loose.length > 5 ? looseIndex.get(loose.replace(/(em|en|er|es|e)$/, '')) : undefined)
            if (c) { found.push({ text: phrase, c }); i += len; hit = true; break }
        }
        if (!hit) {
            const t = tokens[i]
            if (/\p{L}{2,}/u.test(t) && !STOP.has(t)) unknown.push(t)
            i++
        }
    }
    const of = (r: Role) => found.filter(f => f.c.role === r).map(f => f.c)
    const bases = of('base'), proteins = of('protein'), methods = of('method'), flavors = of('flavor'), vegs = of('veg'), styles = of('style')
    // need something that says "this is a dish"
    if (!bases.length && !proteins.length) return null
    if (!bases.length && found.length < 2) return null

    const base = bases[0]
    const kind: Kind = base?.kind ?? 'savory'
    const uniq = <T,>(xs: T[]) => [...new Set(xs)]
    const vegetarian = styles.some(s => s.en === 'vegetarian') || (!proteins.some(p => p.meat) && kind === 'savory' && (vegs.length > 0 || proteins.length > 0))

    const allergens = uniq(found.flatMap(f => f.c.allergens ?? []))
    const spice = Math.min(3, Math.max(0, ...found.map(f => f.c.spice ?? 0))) as 0 | 1 | 2 | 3

    // "Stir-fried egg noodles with grilled beef & mushrooms, lemongrass & chilli"
    const BASE_METHODS = ['stir-fried', 'deep-fried', 'tossed']
    const ms = uniq(methods.filter(m => !m.en.startsWith('dry')).map(m => m.en))
    const baseMs = base?.carb ? ms.filter(m => BASE_METHODS.includes(m)) : []
    const protMs = ms.filter(m => !baseMs.includes(m))
    const prots = uniq(proteins.map(p => p.en))
    let title: string
    if (base) {
        title = [baseMs.join(' '), base.en].filter(Boolean).join(' ')
        const withParts = [...prots, ...uniq(vegs.map(v => v.en))]
        if (withParts.length) {
            if (protMs.length && prots.length) withParts[0] = `${protMs.join(' ')} ${withParts[0]}`
            title += ` with ${list(withParts)}`
        } else if (protMs.length) title = `${protMs.join(' ')} ${title}`
    } else {
        const [main, ...rest] = prots
        title = [ms.join(' '), main].filter(Boolean).join(' ')
        const withParts = [...rest, ...uniq(vegs.map(v => v.en))]
        if (withParts.length) title += ` with ${list(withParts)}`
    }
    const flav = uniq(flavors.filter(f => !['fish sauce', 'soy sauce', 'oyster sauce', 'spicy', 'extra spicy'].includes(f.en)).map(f => f.en))
    if (flav.length) title += `, ${list(flav)}`
    const st = styles.filter(s => s.en !== 'vegetarian').map(s => s.en)
    if (st.length) title += ` (${list(st)})`
    if (vegetarian) title += ' — vegetarian'

    return {
        line,
        title: cap(title.trim()),
        emoji: base?.emoji ?? '🍽️',
        desc: base?.desc ?? null,
        madeWith: uniq(found.filter(f => f.c.role !== 'style' && f.c.role !== 'method' && !['spicy', 'extra spicy'].includes(f.c.en)).map(f => f.c.en)),
        words: found.map(f => ({ text: f.text, en: f.c.en })),
        unknown,
        allergens,
        fishSauceLikely: kind === 'savory' && !vegetarian && !allergens.includes('fish'),
        spice,
        vegetarian,
        kind,
        similar: base?.similar ?? null,
    }
}

// ── Choosing between "a dish from our guide" and "explained from its words" ──
// Generic single words ("tofu", "curry", "lemongrass") must not pull a specific
// guide dish — "Đậu hũ chiên sả" is not "Đậu hũ sốt cà chua".
const GENERIC_ALIAS = new Set(['zitronengras', 'lemongrass', 'lemongrass chili', 'pfannkuchen'])
// multi-word core names that are ingredients rather than dishes
const GENERIC_CORE = new Set(['dau hu', 'dau phu', 'sa ot', 'xa ot', 'ca ri', 'banh mi'])

/** Where in the line the dish is named (-1 = not named specifically). */
function namedAt(d: Dish, line: string): number {
    const q = ` ${norm(line)} `
    const hits: string[] = []
    for (const v of d.vi.split(' / ')) hits.push(norm(v).split(' ').slice(0, 3).join(' '))
    hits.push(norm(d.de))
    for (const rule of d.core) for (const alt of rule.split('|')) {
        const n = norm(alt)
        if (n.includes(' ') && !GENERIC_CORE.has(n)) hits.push(n)
    }
    for (const a of d.aliases) {
        const n = norm(a)
        if (!GENERIC_ALIAS.has(n) && (n.includes(' ') || n.length >= 9)) hits.push(n)
    }
    // "Bánh mì" itself is a dish only when the line starts with it
    if (d.id === 'banh-mi' && q.startsWith(' banh mi ')) hits.push('banh mi')
    const idx = hits.map(h => q.indexOf(` ${h} `)).filter(i => i >= 0)
    return idx.length ? Math.min(...idx) : -1
}

/** Best explanation for a menu line: a guide dish when the name really matches, otherwise a composed one. */
export function explainLine(line: string): { dish?: Dish; composed?: ComposedDish } {
    const ranked = DISHES.map(d => ({ d, s: scoreDish(d, line) })).filter(x => x.s > 0).sort((a, b) => b.s - a.s)
    // among dishes really named in the line, the one named first wins ("Bò kho bánh mì" → bò kho)
    const named = ranked.map(r => ({ ...r, at: namedAt(r.d, line) })).filter(r => r.at >= 0).sort((a, b) => a.at - b.at || b.s - a.s)[0]
    if (named) return { dish: named.d }
    const composed = composeDish(line)
    if (composed) return { composed }
    return ranked[0] ? { dish: ranked[0].d } : {}
}
