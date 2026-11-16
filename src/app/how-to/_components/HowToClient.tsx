'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Search, X } from 'lucide-react';

const GUIDES = [
    {
        category: 'Broths & Soups',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 48 Q36 58 54 48"/><line x1="18" y1="48" x2="20" y2="36"/><line x1="54" y1="48" x2="52" y2="36"/><path d="M20 36 Q36 32 52 36"/><path d="M28 34 Q26 28 28 22 Q30 16 28 10"/><path d="M36 33 Q34 27 36 21 Q38 15 36 9"/><path d="M44 34 Q42 28 44 22 Q46 16 44 10"/></svg>',
        color: '#D97706',
        bg: '#FEF3C7',
        items: [
            { title: 'How to Make a Crystal-Clear Pho Broth', slug: 'pho-bo-ha-noi', desc: 'Blanching bones, charring aromatics, the correct simmer. Everything that separates great pho from average.', time: '8 hrs', level: 'Advanced' },
            { title: 'How to Make a Crystal-Clear Vietnamese Broth', slug: 'vietnamese-broth', desc: 'Blanch, skim, never boil — the rules behind every clear Vietnamese broth, from phở to hủ tiếu, and how to fix a cloudy pot.', time: '7 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Build Bun Bo Hue Broth', slug: 'hue-spicy-beef-noodle-soup', desc: 'Lemongrass oil, annatto color, mam ruoc — the three elements that make this broth unmistakable.', time: '3 hrs', level: 'Intermediate' },
            { title: 'How to Make Canh Chua (Vietnamese Sour Soup)', slug: 'canh-chua-ca', desc: 'Tamarind souring, pineapple sweetness, fresh herbs. The soup of the Mekong Delta.', time: '40 min', level: 'Easy' },
        ],
    },
    {
        category: 'Rolling & Wrapping',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="36" cy="36" rx="20" ry="10"/><line x1="16" y1="36" x2="56" y2="36"/><path d="M20 30 Q36 24 52 30"/><path d="M20 42 Q36 48 52 42"/></svg>',
        color: '#059669',
        bg: '#D1FAE5',
        items: [
            { title: 'How to Roll Perfect Goi Cuon (Fresh Spring Rolls)', slug: 'fresh-spring-rolls', desc: 'Wet the rice paper correctly, layer the filling strategically, roll tight. The technique takes 3 tries to master.', time: '30 min', level: 'Easy' },
            { title: 'How to Make Vietnamese Rice Paper (Bánh Tráng) from Scratch', slug: 'rice-paper', desc: 'Rice batter, a cloth over steam, a bamboo rack — how the thin sheets for gỏi cuốn and chả giò are made by hand.', time: '8 min read', level: 'Intermediate', isHowTo: true },
            { title: 'How to Wrap Banh Cuon (Steamed Rice Rolls)', slug: 'banh-uot-dau-he', desc: 'Spreading the batter thin, peeling the sheet without tearing, rolling with filling inside.', time: '45 min', level: 'Intermediate' },
            { title: 'How to Make Banh Mi at Home', slug: 'banh-mi', desc: 'The bread, the pate, the pickles — assembled in the right order. Why each layer matters.', time: '30 min', level: 'Easy' },
        ],
    },
    {
        category: 'Sauces & Condiments',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M24 20 L22 52 Q22 58 36 58 Q50 58 50 52 L48 20 Z"/><rect x="26" y="14" width="20" height="8" rx="3"/><path d="M24 38 Q36 42 48 38" strokeDasharray="3 2"/></svg>',
        color: '#7C3AED',
        bg: '#EDE9FE',
        items: [
            { title: 'How to Make Annatto Oil (Dầu Điều)', slug: 'annatto-oil', desc: 'Gentle heat, the right seeds, watching the colour — the ten-minute colouring oil that gives bún bò Huế its red-orange broth and mì Quảng its golden hue, without artificial dyes.', time: '8 min read', level: 'Easy', isHowTo: true },
            { title: 'How to Make Pandan Extract (Nước Lá Dứa)', slug: 'pandan-extract', desc: 'Blend, strain, wring — how to extract the vivid emerald liquid that colours and perfumes Vietnamese desserts, sticky rice, and sweet soups.', time: '9 min read', level: 'Easy', isHowTo: true },
            { title: 'How to Make Scallion Oil (Mỡ Hành)', slug: 'mo-hanh', desc: 'Hot oil poured over sliced scallion until it sizzles — the four-minute condiment that finishes com tam, banh cuon, and makes every Vietnamese rice dish taste complete.', time: '8 min read', level: 'Easy', isHowTo: true },
            { title: 'How to Make Dipping Salt (Muối Ớt Chanh)', slug: 'muoi-ot-chanh', desc: 'Salt, chilli, lime — the wet and dry versions of Vietnam\'s most versatile condiment, and exactly what to pair each one with.', time: '7 min read', level: 'Easy', isHowTo: true },
        ],
    },
    {
        category: 'Coffee',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 52 Q22 60 36 60 Q50 60 50 52 L46 38 L26 38 Z"/><rect x="24" y="28" width="24" height="12" rx="2"/><rect x="26" y="22" width="20" height="6" rx="2"/><line x1="33" y1="38" x2="33" y2="44"/><line x1="36" y1="38" x2="36" y2="46"/><line x1="39" y1="38" x2="39" y2="44"/><path d="M50 44 Q56 44 56 50 Q56 56 50 56"/></svg>',
        color: '#92400E',
        bg: '#FEF3C7',
        items: [
            { title: 'How to Make Ca Phe Trung (Egg Coffee)', slug: 'ca-phe-trung', desc: 'Whipping the egg yolk to ribbon stage, spooning it over hot coffee, eating the foam with a spoon first.', time: '10 min', level: 'Easy' },
            { title: 'How to Make Ca Phe Muoi (Salt Coffee)', slug: 'ca-phe-muoi', desc: 'Salted cream over dark coffee. Why the layers must stay separate. The Hue technique.', time: '8 min', level: 'Easy' },
            { title: 'How to Use a Vietnamese Phin Filter', slug: 'phin-filter', desc: 'Water temperature, bloom time, one drop per second — the phin is designed to make patience mandatory, and the thick, syrupy concentrate it produces justifies every minute.', time: '9 min read', level: 'Easy', isHowTo: true },
        ],
    },
    {
        category: 'Rice & Noodles',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="26" y1="10" x2="32" y2="62"/><line x1="46" y1="10" x2="40" y2="62"/><path d="M30 40 Q36 34 42 40 Q36 46 30 40"/><path d="M31 48 Q36 43 41 48"/></svg>',
        color: '#0369A1',
        bg: '#DBEAFE',
        items: [
            { title: 'How to Cook Perfect Vietnamese Jasmine Rice', slug: 'com-tam', desc: 'The wash, the ratio, the rest. Why rice cooker results differ from stovetop.', time: '25 min', level: 'Easy' },
            { title: 'How to Cook Pho Noodles (Banh Pho)', slug: 'pho-bo-ha-noi', desc: 'Fresh vs dried, correct blanching time, why you never cook them in the broth.', time: '5 min', level: 'Easy' },
            { title: 'How to Make Mi Quang at Home', slug: 'mi-quang', desc: 'Annatto oil, the concentrated broth, the sesame cracker. Why this dish is not a soup.', time: '75 min', level: 'Intermediate' },
            { title: 'How to Make Pho Noodles from Scratch (Bánh Phở Tươi)', slug: 'pho-noodles-scratch', desc: 'Rice flour, tapioca starch, non-stick pan and a lid — the batter ratio and swirl technique for silky fresh pho noodles that dried noodles cannot replicate.', time: '11 min read', level: 'Intermediate', isHowTo: true },
            { title: 'How to Cook Rice in a Clay Pot (Cơm Niêu)', slug: 'com-nieu', desc: 'Four stages, one clay pot, and the golden scorched crust — the technique that produces fragrant rice a rice cooker never can.', time: '10 min read', level: 'Intermediate', isHowTo: true },
        ],
    },
    {
        category: 'Essential Techniques',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 54 Q36 64 54 54"/><line x1="18" y1="54" x2="22" y2="46"/><line x1="54" y1="54" x2="50" y2="46"/><path d="M22 46 Q36 42 50 46"/><path d="M30 42 Q28 34 32 28 Q34 24 36 28 Q36 20 40 16 Q42 24 40 28 Q44 24 46 28 Q44 36 42 42"/></svg>',
        color: '#DC2626',
        bg: '#FEE2E2',
        items: [
            { title: 'How to Char Vietnamese Aromatics', slug: 'pho-bo-ha-noi', desc: 'Direct flame or broiler, the correct level of blackening, why char adds sweetness not bitterness.', time: '10 min', level: 'Easy' },
            { title: 'How to Balance Vietnamese Flavors', slug: 'balance-flavors', desc: 'Sweet, sour, salty, bitter, spicy — the 5-element framework. How to fix any dish that tastes wrong.', time: '7 min read', level: 'Essential', isHowTo: true },
            { title: 'Nem Nem: How to Season Vietnamese Food', slug: 'season-vietnamese-food', desc: 'Fish sauce, sugar, lime, MSG — what each one does and when to add it. The 4-stage tasting sequence.', time: '8 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Julienne Vietnamese Vegetables', slug: 'julienne-vietnamese-vegetables', desc: 'Daikon, carrot, green mango — the correct knife angle, strip thickness, and why a mandoline is not always better.', time: '8 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Properly Wash & Store Fresh Herbs', slug: 'wash-store-fresh-herbs', desc: 'Rau răm, húng quế, ngò gai — how to clean without bruising, dry without wilting, and keep herbs fresh for a week.', time: '6 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Toast & Grind Vietnamese Spices', slug: 'toast-grind-vietnamese-spices', desc: 'Star anise, cinnamon, cardamom, clove — dry-toasting to wake the oils, grinding to the right coarseness for pho, bun bo, and five-spice.', time: '10 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Render Pork Fat & Make Tóp Mỡ', slug: 'render-pork-fat', desc: 'One piece of fat, thirty minutes of low heat — liquid mo heo for cooking and crispy top mo for garnishing. The technique behind com tam.', time: '9 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Make Crispy Fried Shallots (Hành Phi)', slug: 'crispy-fried-shallots', desc: 'Cold oil, low heat, pulled one shade too early — the counterintuitive cold-start technique that produces perfect hanh phi every time.', time: '8 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Velvet Meat for Vietnamese Stir-Fries', slug: 'velvet-meat', desc: 'Egg white, cornstarch, or baking soda — two velveting methods that keep beef, chicken, and pork silky and tender in a hot wok instead of dry and tough.', time: '10 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Marinate Meat Vietnamese Style', slug: 'marinate-meat', desc: 'Fish sauce, sugar, aromatics, fat — the four-element formula behind grilled pork, lemongrass chicken and every Vietnamese marinade.', time: '6 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Properly Debone a Whole Fish', slug: 'debone-whole-fish', desc: 'The spine cut, the rib cage, the pin bones — a complete guide to filleting Vietnamese whole fish cleanly from first cut to last pin bone.', time: '11 min read', level: 'Intermediate', isHowTo: true },
            { title: 'How to Make Vietnamese Coconut Caramel Braise Base', slug: 'coconut-caramel-braise', desc: 'Coconut water, nuoc mau, fish sauce — the ratio and two-phase technique behind thit kho tau, ca kho to, and every great Vietnamese braised dish.', time: '10 min read', level: 'Intermediate', isHowTo: true },
            { title: 'How to Char Aromatics Without a Gas Flame', slug: 'char-aromatics', desc: 'Broiler, cast iron, induction — three methods for charring ginger and onion to the deep caramelised blackness that makes pho broth taste like pho broth.', time: '9 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Select and Prepare Fresh Seafood', slug: 'select-fresh-seafood', desc: 'Eyes, gills, smell, texture — the exact freshness indicators for fish, prawns, squid, crab, and shellfish, and how to clean each correctly.', time: '11 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Choose Meat and Fish for Vietnamese Cooking', slug: 'choose-meat-fish', desc: 'What Vietnamese home cooks look for at the market — colour, smell, texture — and the cuts that work best for each dish.', time: '8 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Make Banh Xeo Batter', slug: 'banh-xeo-batter', desc: 'Rice flour, coconut milk, turmeric — the exact ratio and pan technique that produces the shatteringly crisp Southern Vietnamese sizzling crepe.', time: '10 min read', level: 'Intermediate', isHowTo: true },
            { title: 'How to Make Vietnamese Pickled Mustard Greens (Dưa Cải)', slug: 'dua-cai', desc: 'Sun-wilt, salt, ferment — the three-day lacto-fermentation that produces the sour, crunchy dua cai found in every Southern Vietnamese kitchen.', time: '9 min read', level: 'Intermediate', isHowTo: true },
            { title: 'How to Deep Fry at Home Without a Thermometer', slug: 'deep-fry-no-thermometer', desc: 'The chopstick test, the bread cube, the shimmer — five ways to read oil temperature by sight and sound for perfect Vietnamese fried food every time.', time: '10 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Make Vietnamese Caramel (Nước Màu)', slug: 'nuoc-mau', desc: 'Sugar and water cooked past sweet into bittersweet mahogany — the dark savoury colouring behind thit kho tau, ca kho to, and every proper Vietnamese braise.', time: '9 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Make Vietnamese Pickled Daikon & Carrot (Đồ Chua)', slug: 'do-chua', desc: 'Salt, squeeze, sweet-sour brine — the quick pickle that gives bánh mì its crunch, balances com tam and noodle bowls, and stays crisp for two weeks.', time: '8 min read', level: 'Easy', isHowTo: true },
            { title: 'How to Make Vietnamese Egg Rolls (Chả Giò)', slug: 'cha-gio', desc: 'Dry filling, tight roll, correct oil temperature — the three variables that produce the shatteringly crisp wrapper and moist interior that most restaurant cha gio never achieves.', time: '11 min read', level: 'Intermediate', isHowTo: true },
            { title: 'How to Steam Fish the Vietnamese Way', slug: 'steam-fish', desc: 'Score, steam, garnish, smoking oil pour — the 15-minute technique that produces ca hap: clean, fragrant, defined by the dramatic sizzle that finishes the dish.', time: '10 min read', level: 'Intermediate', isHowTo: true },
            { title: 'How to Steam Food Vietnamese Style (Hấp)', slug: 'steam-food', desc: 'Pot, rack, bamboo or cloth — the complete guide to hấp: timing, water level and why steamed dishes taste so clean.', time: '7 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Butterfly and Flatten Meat for Grilling', slug: 'butterfly-flatten-meat', desc: 'The prep behind suon nuong and ga nuong — how to open thick cuts to an even thickness so they cook fast over high heat without burning at the edges.', time: '10 min read', level: 'Intermediate', isHowTo: true },
            { title: 'How to Braise Vietnamese-Style (Kho)', slug: 'kho-braise', desc: 'Coconut water, fish sauce, dark caramel — the four components, five-step sequence, and heat management behind every mahogany-glazed Vietnamese kho dish.', time: '11 min read', level: 'Intermediate', isHowTo: true },
            { title: 'How to Prepare Banana Blossom (Hoa Chuối)', slug: 'hoa-chuoi', desc: 'Acidulated water, gloves, and the right shredding technique — how to prep the crunchy blossom used in gỏi hoa chuối and bún bò Huế without it turning brown.', time: '9 min read', level: 'Easy', isHowTo: true },
            { title: 'How to Make Vietnamese Pork Paste (Chả Lụa)', slug: 'cha-lua', desc: 'Cold meat, cold bowl, long processing — the emulsion technique behind the smooth, bouncy pork paste in banh mi, com tam, and every Vietnamese celebration table.', time: '11 min read', level: 'Advanced', isHowTo: true },
        ],
    },
    {
        category: 'Eating & Culture',
        icon: '',
        color: '#BE185D',
        bg: '#FCE7F3',
        items: [
            { title: 'How to Navigate a Vietnamese Market (Chợ)', slug: 'vietnamese-market', desc: 'How the wet market is organised, choosing vendors, how bargaining actually works, and selecting the freshest produce, meat, and seafood — in Vietnam and at Berlin\'s Dong Xuan Center.', time: '12 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Host a Vietnamese Home Meal', slug: 'host-vietnamese-meal', desc: 'Rice, savoury, soup, vegetable — the four-part structure, how to balance the menu, set the table, time the dishes, and host with authentic Vietnamese etiquette and generosity.', time: '12 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Order Vietnamese Food Like a Local', slug: 'order-vietnamese-food', desc: 'Beef cuts, customisation vocabulary, off-menu dishes, and the phrases that unlock a better experience at any Vietnamese restaurant anywhere in the world.', time: '11 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Eat Vietnamese Food in Foreign Countries', slug: 'eat-vietnamese-abroad', desc: 'How to identify a good restaurant, what to order first, how to eat each dish correctly, and where to find authentic Vietnamese food in Germany.', time: '11 min read', level: 'Essential', isHowTo: true },
        ],
    },
    {
        category: 'Kitchen & Equipment',
        icon: '<svg viewBox="0 0 72 72" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M24 18 L50 44 Q52 48 48 50 L22 24 Z"/><line x1="16" y1="58" x2="56" y2="58"/></svg>',
        color: '#4B2E1A',
        bg: '#F5EDE3',
        items: [
            { title: 'How to Set Up a Vietnamese Kitchen', slug: 'vietnamese-kitchen-setup', desc: 'Carbon steel wok vs non-stick, what you actually need vs what you dont.', time: '8 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Season and Care for a Carbon Steel Wok', slug: 'season-wok', desc: 'Strip the factory coating, build seasoning in 4 layers, daily 60-second care routine.', time: '7 min read', level: 'Essential', isHowTo: true },
            { title: 'Vietnamese Knife Skills', slug: 'knife-skills', desc: 'How to bruise lemongrass, slice paper-thin beef for pho, julienne daikon for do chua.', time: '8 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Choose and Use a Mandoline Safely', slug: 'mandoline', desc: 'The right blade, the hand guard you actually use, and five non-negotiable safety rules — for do chua, goi, and xoai tron at the correct Vietnamese thickness.', time: '10 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Choose a Vietnamese Mortar and Pestle', slug: 'mortar-pestle', desc: 'Granite, clay, or wood — which type to buy, what size, how to season it, and the grinding technique that produces lemongrass paste a food processor cannot replicate.', time: '10 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Build a Vietnamese Pantry from Scratch', slug: 'vietnamese-pantry', desc: 'Three tiers, 30 core ingredients, all available in Germany — the precise pantry that makes authentic Vietnamese cooking possible any night of the week.', time: '12 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Set Up a Vietnamese Charcoal Grill', slug: 'charcoal-grill', desc: 'Coconut charcoal, chimney starter, three heat zones — the setup that produces the caramelised smoky exterior making suon nuong and ga nuong taste the way they do in Vietnam.', time: '10 min read', level: 'Essential', isHowTo: true },
            { title: 'How to Care for a Bamboo Steamer', slug: 'bamboo-steamer', desc: 'Season before first use, rinse while warm, dry completely — the routine that prevents mould and keeps bamboo producing better results than metal for years.', time: '9 min read', level: 'Essential', isHowTo: true },
        ],
    },
];

// ── Design tokens (monochrome + one accent) ─────────────────────────────────
const INK = '#2D1A0E';
const MUTED = 'rgba(45,26,14,0.56)';
const FAINT = 'rgba(45,26,14,0.38)';
const RULE = 'rgba(45,26,14,0.10)';
const ACCENT = '#B45309';
const PAPER = '#FAF7F2';
const SERIF = "'Playfair Display', serif";
const EASE = [0.22, 1, 0.36, 1] as const;

const LEVEL_DOT: Record<string, string> = {
    Essential: '#B45309',
    Easy: '#6B8E4E',
    Intermediate: '#A16207',
    Advanced: '#9F1239',
};

const ALL = 'All';
const PREVIEW = 6;
const START_HERE = ['vietnamese-broth', 'balance-flavors', 'season-vietnamese-food'];

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/gi, 'd').toLowerCase();
const href = (item: { slug: string; isHowTo?: boolean }) => (item.isHowTo ? `/how-to/${item.slug}` : `/recipes/${item.slug}`);
const pad = (n: number) => String(n).padStart(2, '0');

type Item = (typeof GUIDES)[number]['items'][number] & { isHowTo?: boolean };

function Meta({ item }: { item: Item }) {
    return (
        <span className="flex items-center gap-3 whitespace-nowrap text-[12px] tracking-wide" style={{ color: FAINT }}>
            <span className="flex items-center gap-1.5">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: LEVEL_DOT[item.level] ?? ACCENT }} />
                <span style={{ color: MUTED }}>{item.level}</span>
            </span>
            <span aria-hidden>·</span>
            <span>{item.time}</span>
            {!item.isHowTo && (
                <>
                    <span aria-hidden>·</span>
                    <span className="uppercase tracking-[0.12em] text-[10.5px]">Recipe</span>
                </>
            )}
        </span>
    );
}

export default function HowToClient() {
    const [active, setActive] = useState(ALL);
    const [query, setQuery] = useState('');

    // Read ?c= on load, write it back when the tab changes (shareable links)
    useEffect(() => {
        const c = new URLSearchParams(window.location.search).get('c');
        if (c && GUIDES.some(g => g.category === c)) setActive(c);
    }, []);
    useEffect(() => {
        const url = new URL(window.location.href);
        if (active === ALL) url.searchParams.delete('c');
        else url.searchParams.set('c', active);
        window.history.replaceState(null, '', url.toString());
    }, [active]);

    const total = useMemo(() => GUIDES.reduce((n, g) => n + g.items.length, 0), []);
    const q = norm(query.trim());

    const groups = useMemo(() => {
        const base = active === ALL || q ? GUIDES : GUIDES.filter(g => g.category === active);
        if (!q) return base;
        return base
            .map(g => ({ ...g, items: g.items.filter(it => norm(`${it.title} ${it.desc}`).includes(q)) }))
            .filter(g => g.items.length > 0);
    }, [active, q]);

    const found = groups.reduce((n, g) => n + g.items.length, 0);
    const chapterNo = (cat: string) => GUIDES.findIndex(g => g.category === cat) + 1;

    const startHere = useMemo(
        () => START_HERE.map(slug => GUIDES.flatMap(g => g.items as Item[]).find(it => it.slug === slug && it.isHowTo)).filter(Boolean) as Item[],
        [],
    );
    const showStart = active === ALL && !q && startHere.length > 0;

    const openChapter = (cat: string) => {
        setActive(cat);
        setQuery('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div style={{ minHeight: '100vh', background: PAPER, paddingTop: 88, fontFamily: "'DM Sans', sans-serif", color: INK }}>

            {/* ═══ HERO ═══ */}
            <header className="mx-auto max-w-[960px] px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20">
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ color: ACCENT }}>
                        The Technique Library
                    </p>
                    <h1
                        className="mt-5 max-w-[14ch] font-semibold leading-[1.02] tracking-[-0.02em]"
                        style={{ fontFamily: SERIF, fontSize: 'clamp(2.5rem, 6.4vw, 4.6rem)' }}
                    >
                        Master the method, <em className="font-normal" style={{ color: ACCENT }}>cook anything.</em>
                    </h1>
                    <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.7]" style={{ color: MUTED }}>
                        Concise, tested guides to the foundations of Vietnamese cooking — broths, sauces, knife work and the quiet
                        details that make a dish taste like home.
                    </p>

                    {/* Stats */}
                    <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t pt-6" style={{ borderColor: RULE }}>
                        {[
                            [String(total), 'Guides'],
                            [String(GUIDES.length), 'Chapters'],
                            ['5–12', 'Minute reads'],
                        ].map(([v, l]) => (
                            <div key={l} className="flex items-baseline gap-2">
                                <dt className="sr-only">{l}</dt>
                                <dd className="text-[26px] font-semibold tabular-nums" style={{ fontFamily: SERIF }}>{v}</dd>
                                <span className="text-[12px] uppercase tracking-[0.16em]" style={{ color: FAINT }}>{l}</span>
                            </div>
                        ))}
                    </dl>

                    {/* Search — underline style */}
                    <div className="group relative mt-10 max-w-[560px]">
                        <Search size={18} className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-[#B45309]" style={{ color: FAINT }} aria-hidden />
                        <label htmlFor="howto-search" className="sr-only">Search guides</label>
                        <input
                            id="howto-search"
                            type="search"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Search a technique — broth, rice paper, wok…"
                            className="w-full border-0 border-b bg-transparent py-4 pl-8 pr-10 text-[17px] outline-none transition-colors placeholder:text-[rgba(45,26,14,0.35)] focus:border-[#B45309] [&::-webkit-search-cancel-button]:hidden"
                            style={{ borderColor: 'rgba(45,26,14,0.22)', color: INK }}
                        />
                        {query && (
                            <button
                                type="button"
                                onClick={() => setQuery('')}
                                aria-label="Clear search"
                                className="absolute right-0 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:bg-[rgba(45,26,14,0.06)]"
                                style={{ color: MUTED }}
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                </motion.div>
            </header>

            {/* ═══ CHAPTER TABS (sticky, underline) ═══ */}
            <nav
                aria-label="Guide chapters"
                className="sticky top-[61px] z-30 border-b backdrop-blur-xl min-[641px]:top-[85px]"
                style={{ background: 'rgba(250,247,242,0.9)', borderColor: RULE }}
            >
                <div className="mx-auto max-w-[960px] overflow-x-auto px-5 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden">
                    <div className="flex w-max gap-7">
                        {[ALL, ...GUIDES.map(g => g.category)].map(cat => {
                            const isActive = active === cat && !q;
                            const count = cat === ALL ? total : GUIDES.find(g => g.category === cat)!.items.length;
                            return (
                                <button
                                    key={cat}
                                    aria-pressed={isActive}
                                    onClick={e => {
                                        setActive(cat);
                                        setQuery('');
                                        e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                                    }}
                                    className="relative whitespace-nowrap py-4 text-[13.5px] outline-none transition-colors focus-visible:text-[#B45309]"
                                    style={{ color: isActive ? INK : MUTED, fontWeight: isActive ? 600 : 500 }}
                                >
                                    {cat}
                                    <sup className="ml-1 text-[10px] tabular-nums" style={{ color: FAINT }}>{count}</sup>
                                    {isActive && (
                                        <motion.span
                                            layoutId="howto-tab"
                                            transition={{ type: 'spring', stiffness: 420, damping: 38 }}
                                            className="absolute inset-x-0 -bottom-px h-[2px]"
                                            style={{ background: INK }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

            <main className="mx-auto max-w-[960px] px-5 pb-24 pt-14 sm:px-8">

                {/* ═══ START HERE ═══ */}
                {showStart && (
                    <section aria-labelledby="start-here" className="mb-20">
                        <div className="mb-6 flex items-baseline justify-between">
                            <h2 id="start-here" className="text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ color: ACCENT }}>Start here</h2>
                            <span className="hidden text-[12px] sm:inline" style={{ color: FAINT }}>Three guides every cook should read first</span>
                        </div>
                        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border sm:grid-cols-3" style={{ borderColor: RULE, background: RULE }}>
                            {startHere.map((item, i) => (
                                <Link
                                    key={item.slug}
                                    href={href(item)}
                                    className="group flex flex-col p-7 outline-none transition-colors hover:bg-white focus-visible:bg-white"
                                    style={{ background: PAPER, textDecoration: 'none', color: INK }}
                                >
                                    <span className="text-[40px] italic leading-none" style={{ fontFamily: SERIF, color: 'rgba(180,83,9,0.35)' }}>{pad(i + 1)}</span>
                                    <h3 className="mt-6 text-[19px] font-semibold leading-snug" style={{ fontFamily: SERIF }}>{item.title}</h3>
                                    <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
                                    <span className="mt-auto flex items-center gap-1.5 pt-6 text-[13px] font-semibold" style={{ color: INK }}>
                                        Read <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: ACCENT }} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {q && (
                    <p className="mb-10 text-[14px]" style={{ color: MUTED }} aria-live="polite">
                        {found} {found === 1 ? 'guide' : 'guides'} for “<span style={{ color: INK, fontWeight: 600 }}>{query.trim()}</span>”
                    </p>
                )}

                {/* ═══ CHAPTERS ═══ */}
                <AnimatePresence mode="wait">
                    <motion.div key={`${active}|${q}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                        {groups.map(group => {
                            const collapsed = active === ALL && !q && group.items.length > PREVIEW;
                            const items = (collapsed ? group.items.slice(0, PREVIEW) : group.items) as Item[];
                            return (
                                <section key={group.category} className="mb-20 last:mb-0" aria-labelledby={`cat-${group.category}`}>
                                    {/* Chapter header */}
                                    <div className="mb-2 flex items-end justify-between gap-4 border-b pb-5" style={{ borderColor: INK }}>
                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: FAINT }}>
                                                Chapter {pad(chapterNo(group.category))}
                                            </p>
                                            <h2 id={`cat-${group.category}`} className="mt-2 text-[28px] font-semibold leading-tight tracking-[-0.01em] sm:text-[32px]" style={{ fontFamily: SERIF }}>
                                                {group.category}
                                            </h2>
                                        </div>
                                        <div className="flex items-center gap-5 pb-1">
                                            <span className="text-[12px] tabular-nums" style={{ color: FAINT }}>
                                                {group.items.length} {group.items.length === 1 ? 'guide' : 'guides'}
                                            </span>
                                            {collapsed && (
                                                <button
                                                    onClick={() => openChapter(group.category)}
                                                    className="group hidden items-center gap-1 text-[13px] font-semibold transition-colors hover:text-[#B45309] sm:flex"
                                                    style={{ color: INK }}
                                                >
                                                    View all <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Index rows */}
                                    <ul>
                                        {items.map((item, i) => (
                                            <motion.li
                                                key={`${item.slug}-${i}`}
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: Math.min(i, 8) * 0.03, duration: 0.3 }}
                                                className="border-b last:border-b-0"
                                                style={{ borderColor: RULE }}
                                            >
                                                <Link
                                                    href={href(item)}
                                                    className="group grid grid-cols-[36px_1fr_20px] items-start gap-x-4 py-6 outline-none sm:grid-cols-[48px_1fr_auto_24px] sm:items-center sm:gap-x-6"
                                                    style={{ textDecoration: 'none', color: INK }}
                                                >
                                                    <span className="pt-1 text-[13px] tabular-nums sm:pt-0" style={{ color: FAINT, fontFamily: SERIF, fontStyle: 'italic' }}>
                                                        {pad(i + 1)}
                                                    </span>
                                                    <span className="min-w-0">
                                                        <span className="block text-[18px] font-semibold leading-snug transition-colors duration-300 group-hover:text-[#B45309] group-focus-visible:text-[#B45309] sm:text-[19px]" style={{ fontFamily: SERIF }}>
                                                            {item.title}
                                                        </span>
                                                        <span className="mt-1.5 block line-clamp-2 text-[14px] leading-relaxed sm:line-clamp-1" style={{ color: MUTED }}>
                                                            {item.desc}
                                                        </span>
                                                        <span className="mt-3 block sm:hidden"><Meta item={item} /></span>
                                                    </span>
                                                    <span className="hidden sm:block"><Meta item={item} /></span>
                                                    <ArrowUpRight
                                                        size={18}
                                                        aria-hidden
                                                        className="mt-1 opacity-30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-[#B45309] sm:mt-0"
                                                    />
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {collapsed && (
                                        <button
                                            onClick={() => openChapter(group.category)}
                                            className="mt-2 flex w-full items-center justify-center gap-1.5 border-t py-4 text-[13.5px] font-semibold transition-colors hover:text-[#B45309]"
                                            style={{ color: INK, borderColor: RULE }}
                                        >
                                            View all {group.items.length} in {group.category} <ArrowRight size={14} />
                                        </button>
                                    )}
                                </section>
                            );
                        })}

                        {groups.length === 0 && (
                            <div className="py-24 text-center">
                                <p className="text-[26px] font-semibold" style={{ fontFamily: SERIF }}>Nothing found</p>
                                <p className="mt-2 text-[15px]" style={{ color: MUTED }}>Try another word — “broth”, “rice” or “grill”.</p>
                                <button
                                    onClick={() => setQuery('')}
                                    className="mt-8 border-b pb-1 text-[14px] font-semibold transition-colors hover:text-[#B45309]"
                                    style={{ color: INK, borderColor: INK }}
                                >
                                    Clear search
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* ═══ CTA ═══ */}
            <section className="mx-auto max-w-[960px] px-5 pb-24 sm:px-8">
                <div className="flex flex-col items-start gap-8 border-t pt-14 sm:flex-row sm:items-end sm:justify-between" style={{ borderColor: INK }}>
                    <h2 className="max-w-[18ch] text-[30px] font-semibold leading-[1.15] tracking-[-0.01em] sm:text-[38px]" style={{ fontFamily: SERIF }}>
                        Ready to put it <em className="font-normal" style={{ color: ACCENT }}>into practice?</em>
                    </h2>
                    <Link
                        href="/recipes"
                        className="group flex flex-shrink-0 items-center gap-2 rounded-full border px-7 py-3.5 text-[14px] font-semibold transition-colors hover:bg-[#2D1A0E] hover:text-white"
                        style={{ borderColor: INK, color: INK, textDecoration: 'none' }}
                    >
                        Browse recipes <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
