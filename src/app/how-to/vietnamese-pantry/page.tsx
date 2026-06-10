'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'The Philosophy of the Vietnamese Pantry',
        content: `The Vietnamese pantry is not large. It is precise. A well-stocked Vietnamese kitchen requires perhaps 25–30 core ingredients — far fewer than the 50+ that a well-stocked French or Indian kitchen demands — but those ingredients must be the right ones, and several of them must be of sufficient quality that substitution is not possible without meaningfully changing the character of the dish.\n\nThe key distinction in Vietnamese cooking is between shelf-stable pantry items and fresh ingredients. The pantry handles the flavour architecture of a dish — the fish sauce, the nuoc mau, the dried spices, the fermented pastes. Fresh ingredients — herbs, vegetables, citrus, live seafood — handle the texture and brightness. Vietnamese cooking is structured so that the pantry components can be maintained indefinitely while the fresh components are bought the day they are needed.\n\nThis guide builds the Vietnamese pantry in three tiers. The first tier is non-negotiable — without these items, Vietnamese cooking is not possible. The second tier covers 80% of the remaining recipes in the cuisine. The third tier handles speciality dishes and regional cooking. Build the pantry in this order, over time, rather than buying everything at once and having items expire before they are used.\n\nAll items in this guide are available in Germany — primarily at Vietnamese and Asian grocery stores, which are present in every major German city. Online sources (Amazon, Asian food delivery services) cover any items not locally available.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Tier One — The Non-Negotiable Core (11 Items)',
        content: `These eleven items appear in the majority of Vietnamese recipes. Without them, the cuisine cannot be cooked authentically. Buy these first.\n\nFish sauce (nước mắm): the single most important ingredient in the Vietnamese pantry. Buy Phu Quoc 40N or Chin-su brand — the quality difference between premium fish sauce and cheap fish sauce is immediately detectable. A 500ml bottle lasts 2–3 months with regular cooking. Never substitute soy sauce; the flavour profile is entirely different.\n\nOyster sauce (dầu hào): used in stir-fries and marinades. Lee Kum Kee Premium is the reliable benchmark. Refrigerate after opening.\n\nLight soy sauce (xì dầu): for vegetarian dishes and marinades where fish sauce would be inappropriate. Pearl River Bridge is widely available in German supermarkets.\n\nRice vinegar (giấm gạo): for pickles, dipping sauces, and salad dressings. Milder than white vinegar — do not substitute.\n\nSugar (đường): plain white sugar for cooking. Palm sugar (đường thốt nốt) for kho dishes if available — richer, more complex sweetness.\n\nNeutral oil (dầu ăn): refined vegetable, sunflower, or rice bran oil. High smoke point essential.\n\nDried rice noodles (bún khô, phở khô): stock multiple widths — thin vermicelli (bún) for bun bowls, medium flat (bánh phở) for pho, wide flat for stir-frying.\n\nJasmine rice (gạo thơm): 5kg bag. Thai jasmine or Vietnamese gao nang.\n\nGarlic (tỏi): buy in bulk. Vietnamese cooking uses large quantities.\n\nShallots (hành tím): the small Asian variety, not European shallots. Essential for fried shallots, marinades, and braises.\n\nWhite pepper (tiêu trắng): Vietnamese cooking uses white pepper almost exclusively over black. Kampot white pepper if available.`,
        tip: 'Buy fish sauce at an Asian grocery store, not a supermarket. Supermarket fish sauce is typically diluted, low-grade product sold at premium prices. The same Chin-su or Phu Quoc bottle costs 30–40% less at an Asian grocery store and is the authentic product.',
    },
    {
        step: 3,
        title: 'Tier One Continued — Aromatics and Dry Spices',
        content: `These fresh and dry aromatics are used constantly and should always be on hand.\n\nLemongrass (sả): fresh preferred, frozen acceptable. Used in nearly every grilled dish, many soups, and most marinades. Buy 3–4 stalks at a time and freeze what you cannot use within 5 days — frozen lemongrass performs nearly as well as fresh in cooked applications.\n\nFresh ginger (gừng): buy a large piece and store in the freezer. Grate directly from frozen — no need to peel, and frozen ginger grates finer than fresh.\n\nStar anise (hoa hồi): whole pods. For pho, bun bo hue, thit kho. Buy a small bag — a little goes a long way.\n\nCinnamon stick (quế): Vietnamese cassia cinnamon is stronger than Ceylon. One or two sticks per batch of pho.\n\nBlack cardamom (thảo quả): the large, smoky pod essential for Northern pho. Not interchangeable with green cardamom. Available at Vietnamese grocery stores.\n\nDried chilli flakes (ớt khô): for heat in braises, stir-fries, and condiments.\n\nCoriander seed (hạt ngò): for the pho spice blend. Toast whole before use.\n\nTurmeric powder (bột nghệ): for banh xeo batter, ga nuong marinade, and lươn xào lăn. Fresh turmeric if available.\n\nSesame oil (dầu mè): use sparingly as a finishing oil. A small bottle lasts months. Do not use for frying — the smoke point is too low.\n\nDried shrimp (tôm khô): for canh chua, fried rice, and some salads. Buy a small bag and refrigerate after opening.`,
        tip: null,
    },
    {
        step: 4,
        title: 'Tier Two — The 80% Pantry (Pastes, Sauces, Noodles)',
        content: `With the tier one items in place, add these tier two items to cover the vast majority of Vietnamese recipes.\n\nShrimp paste (mắm ruốc / mắm tôm): fermented shrimp paste essential for bun bo hue, lươn xào lăn, and bun mam. Mắm tôm is the Northern variety (darker, more pungent); mắm ruốc is the Central/Southern variety (lighter, more delicate). Both are available at Vietnamese grocery stores. Refrigerate after opening — the smell is extremely strong.\n\nHoisin sauce (tương hoisin): for dipping with goi cuon, marinating ga nuong. Lee Kum Kee or Kikkoman.\n\nChilli sauce (tương ớt): Cholimex or Chin-su brand for the authentic Vietnamese chilli sauce flavour. Different from Thai Sriracha — sweeter and less vinegary.\n\nCoconut milk (nước cốt dừa): full-fat, canned. Aroy-D or Chaokoh brands. For banh xeo batter, che, and some curries.\n\nCoconut water (nước dừa): canned, for kho dishes. Not the same as coconut milk.\n\nTapioca starch (bột năng): for thickening sauces, making banh da lon, and adding bounce to cha lua. Not interchangeable with cornstarch in all applications.\n\nRice flour (bột gạo): plain white rice flour for banh xeo batter, banh cuon, and coating for frying. Not glutinous rice flour.\n\nGlutinous rice flour (bột nếp): for banh troi, banh ít, and che. The high starch content creates the sticky, chewy texture that distinguishes these desserts.\n\nDried wood ear mushrooms (nấm mèo): for cha gio filling, banh cuon filling, and some soups. Rehydrate in warm water before use.\n\nDried shiitake mushrooms (nấm hương khô): for vegetarian broths and stuffings. The soaking water is an excellent vegetarian stock base.`,
        tip: 'Decant shrimp paste into a small glass jar with a tight lid and keep a second jar as backup stock in a cool, dark cupboard. The original packaging is often not adequately sealed and the smell permeates the refrigerator. A jar with a sealed lid solves this immediately.',
    },
    {
        step: 5,
        title: 'Tier Two Continued — Fermented and Preserved Items',
        content: `Fermented and preserved ingredients give Vietnamese cooking its depth and complexity. These are the items that distinguish a Vietnamese dish from a generic Asian stir-fry using similar fresh ingredients.\n\nAnchovy fish sauce (nước mắm cá cơm): if you can find Tiparos or Megachef brands alongside the standard Vietnamese fish sauce, keep both — different fish sauces suit different applications. The lighter, more delicate anchovy-based sauces suit fresh preparations; the stronger, deeper Vietnamese sauce suits kho and bold marinades.\n\nVietnamese fermented shrimp paste (mắm nêm): a chunky, coarsely ground fermented shrimp condiment served with bun bo Hue and used in some Central Vietnamese dipping sauces. Extremely pungent raw; mellows significantly when cooked briefly. Available at Vietnamese grocery stores; substitute with diluted mắm tôm if unavailable.\n\nPickled mustard greens (dưa cải): commercially prepared, in jars. Useful when home-fermented is not available. Check ingredient list — the best commercial versions contain only mustard greens, salt, and water.\n\nVietnamese dark soy sauce (xì dầu đen): thicker, sweeter, and darker than light soy sauce. Used for colouring and flavouring kho dishes and some stir-fries in the Southern style.\n\nSesame paste (mè xay): ground sesame seeds, used in some dipping sauces and marinades. Tahini is an acceptable substitute — thinner and less sweet, but compatible.\n\nPeanuts (đậu phộng): raw unsalted peanuts for home roasting. Buy raw and roast yourself — pre-roasted peanuts are usually salted and the salt level is uncontrollable in recipes. Roast in a dry pan over medium heat for 8–10 minutes until golden and fragrant.`,
        tip: 'Group fermented and pungent items together in one section of the refrigerator, ideally in a dedicated sealed container or shelf. Fish sauce, shrimp paste, fermented shrimp sauce, and pickled vegetables all have strong smells that transfer to other refrigerator contents without physical separation.',
    },
    {
        step: 6,
        title: 'Tier Three — Regional and Speciality Items',
        content: `These items are not needed for everyday Vietnamese cooking but are essential for specific regional dishes or speciality preparations. Add them as needed rather than all at once.\n\nAnnatto seeds (hạt điều màu): for making annatto oil (dầu điều) — the orange-red colouring oil used in bun bo hue, mi quang, and some grilled dishes. Buy a small bag; they keep indefinitely.\n\nDried tangerine peel (vỏ quýt khô): an optional addition to the pho spice blend, used in some Northern recipes for a faint citrus depth.\n\nLotus seeds (hạt sen): for che hạt sen and some sweet soups. Available dried or vacuum-packed fresh at Vietnamese grocery stores.\n\nMung beans (đậu xanh): dried, whole and split. For che, xoi nhan, and banh ít filling. The split variety cooks faster.\n\nBlack glutinous rice (gạo nếp than): for xoi nếp than (black sticky rice) and some che. Distinctly different flavour and colour from white glutinous rice.\n\nTamarind block (me): for canh chua and some Central Vietnamese sauces. The block form is more versatile than tamarind concentrate — it dissolves in water to the concentration you need rather than being fixed.\n\nLemongrass powder (bột sả): for dry rubs and applications where fresh lemongrass would char before the food is cooked. Not a substitute for fresh in wet applications.\n\nKaffir lime leaves (lá chanh): dried or fresh. For goi ga, some soups, and Central Vietnamese preparations. Fresh leaves freeze well for 3 months.\n\nPandan extract or powder: covered separately in the pandan extract guide. Essential for Vietnamese desserts.\n\nRice paper (bánh tráng): multiple sizes — 22cm for goi cuon, 16cm for cha gio. Buy several packets; they keep indefinitely sealed.`,
        tip: 'Do a pantry audit every 3 months. Check expiry dates, discard any items that have been open for longer than recommended, and note what has been used up. A well-maintained pantry with 25 quality items in good condition is more useful than a pantry of 50 items where half are stale or expired.',
    },
];

const RELATED = [
    { title: 'How to Make Vietnamese Caramel (Nước Màu)', href: '/how-to/nuoc-mau', time: '9 min read' },
    { title: 'How to Toast & Grind Vietnamese Spices', href: '/how-to/toast-grind-vietnamese-spices', time: '10 min read' },
    { title: 'How to Make Crispy Fried Shallots', href: '/how-to/crispy-fried-shallots', time: '8 min read' },
];

export default function VietnamesePantryGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Build a Vietnamese Pantry</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#4B2E1A', background: '#4B2E1A15',
                        padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase',
                    }}>Kitchen & Equipment</span>
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 12 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Build a Vietnamese Pantry from Scratch
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Three tiers, 30 core ingredients, all available in Germany — the precise, well-organised pantry that makes authentic Vietnamese cooking possible any night of the week.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Tier 1', value: '11 non-negotiable items' },
                        { label: 'Tier 2', value: '16 core items' },
                        { label: 'Tier 3', value: 'Regional specialities' },
                        { label: 'Where to Buy', value: 'Asian grocery stores, Germany' },
                    ].map(item => (
                        <div key={item.label}>
                            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(75,46,26,0.4)', textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
                            <div style={{ fontSize: 14, fontWeight: 600, color: '#2D1A0E' }}>{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px 80px' }}>
                {SECTIONS.map((section, i) => (
                    <motion.div
                        key={section.step}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        style={{ marginBottom: 48 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                            <div style={{
                                width: 36, height: 36, borderRadius: '50%',
                                background: '#4B2E1A', color: '#fff',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 13, fontWeight: 700, flexShrink: 0, marginTop: 2,
                            }}>
                                {section.step}
                            </div>
                            <h2 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 20, fontWeight: 700,
                                color: '#2D1A0E', margin: 0, lineHeight: 1.3,
                            }}>
                                {section.title}
                            </h2>
                        </div>

                        <div style={{ paddingLeft: 52 }}>
                            {section.content.split('\n\n').map((para, j) => (
                                <p key={j} style={{
                                    fontSize: 15, color: 'rgba(75,46,26,0.75)',
                                    lineHeight: 1.8, marginBottom: 14,
                                }}>
                                    {para}
                                </p>
                            ))}

                            {section.tip && (
                                <div style={{
                                    background: '#FEF3C7',
                                    border: '1px solid #D97706',
                                    borderLeft: '4px solid #D97706',
                                    borderRadius: 10,
                                    padding: '14px 18px',
                                    marginTop: 16,
                                }}>
                                    <div style={{ fontSize: 11, fontWeight: 700, color: '#D97706', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                                        Pro Tip
                                    </div>
                                    <p style={{ fontSize: 13, color: '#92400E', lineHeight: 1.65, margin: 0 }}>
                                        {section.tip}
                                    </p>
                                </div>
                            )}
                        </div>

                        {i < SECTIONS.length - 1 && (
                            <div style={{ height: 1, background: 'rgba(75,46,26,0.06)', marginTop: 48 }} />
                        )}
                    </motion.div>
                ))}

                {/* Related */}
                <div style={{
                    background: '#fff', border: '1px solid rgba(75,46,26,0.08)',
                    borderRadius: 20, padding: '28px', marginTop: 16,
                }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#2D1A0E', marginBottom: 16 }}>
                        Guides for using your pantry
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {RELATED.map(r => (
                            <Link key={r.href} href={r.href} style={{ textDecoration: 'none' }}>
                                <div
                                    style={{
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                        padding: '12px 16px', borderRadius: 12,
                                        background: '#FAFAF7', border: '1px solid rgba(75,46,26,0.06)',
                                        transition: 'all 0.18s',
                                    }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#4B2E1A'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(75,46,26,0.06)'; }}
                                >
                                    <span style={{ fontSize: 14, fontWeight: 600, color: '#2D1A0E' }}>{r.title}</span>
                                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ {r.time}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: 40, textAlign: 'center' }}>
                    <Link href="/how-to" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontSize: 13, fontWeight: 600, color: '#D97706',
                        textDecoration: 'none',
                    }}>
                        ← Back to all guides
                    </Link>
                </div>
            </div>
        </div>
    );
}