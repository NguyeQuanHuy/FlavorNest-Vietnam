'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Muối Ớt Chanh Is and Why It Matters',
        content: `Muoi ot chanh — salt, chilli, lime — is the simplest condiment in Vietnamese cooking and one of the most important. Three ingredients, mixed in seconds, producing a dipping medium that elevates grilled meat, fried seafood, fresh fruit, boiled offal, and steamed vegetables with equal effectiveness. It appears at every Vietnamese table where something is being dipped, dunked, or dragged through it before eating.\n\nThe condiment exists in two forms. The wet form — nuoc muoi ot chanh — is lime juice squeezed directly over salt and chilli in a small dish, producing a sharp, intensely savoury liquid dip. The dry form — muoi ot — is salt mixed with chilli powder and sometimes sugar, served alongside a wedge of lime that the diner squeezes themselves at the moment of eating. Both are correct; the choice depends on the dish.\n\nWhat makes muoi ot chanh distinct from a simple seasoning is the sequence of flavour it delivers. The salt hits first — immediate, sharp, savoury. The lime follows — bright, citric, cutting through fat. The chilli arrives last — a slow build of heat that lingers after the bite. This sequence is not accidental. It is the reason the condiment works with anything: the salt seasons, the lime refreshes, the chilli warms. In that order, every time.`,
        tip: null,
    },
    {
        step: 2,
        title: 'The Ingredients — What Each One Does',
        content: `Salt: use fine sea salt or flaky salt, never iodised table salt. Iodised salt has a metallic aftertaste that becomes pronounced when mixed with citrus. Fine sea salt dissolves immediately in lime juice, producing a smooth liquid rather than gritty crystals. Flaky salt — Maldon or similar — is better for the dry version where texture is part of the experience.\n\nFor the premium version used at upscale Vietnamese restaurants: ca cuong salt — a blend of fine salt with a tiny amount of essence from the giant water bug (ca cuong), producing a unique floral, slightly funky depth. Genuine ca cuong essence is nearly impossible to find outside Vietnam; the standard sea salt version is what almost everyone uses and is entirely correct.\n\nLime: fresh calamansi (tac) is the traditional Vietnamese citrus for this condiment. Smaller and more aromatic than regular lime, with a faint orange note in the rind. In Germany and most of Europe, regular lime is the correct substitute. Lemon is too sweet and too mild. Bottled lime juice is not acceptable — the preserved, cooked flavour is immediately detectable.\n\nChilli: fresh bird's eye chilli (ot chim) is the standard. Sliced thin into rings, it delivers direct heat and a faint fresh-chilli flavour alongside it. Dried chilli flakes or chilli powder can be used in the dry version — they provide heat without the fresh flavour note, which is appropriate for some applications.`,
        tip: 'Always use lime at room temperature, not straight from the refrigerator. Cold limes produce significantly less juice — a cold lime yields roughly half the juice of a room-temperature one of the same size.',
    },
    {
        step: 3,
        title: 'The Wet Version — Nuoc Muối Ớt Chanh',
        content: `The wet version is made directly in the dipping dish at the moment of serving — it is not prepared in advance.\n\nFor one small dipping dish (serves 2):\n\n0.5 tsp fine sea salt\n1 tbsp fresh lime juice (about half a small lime)\n1–2 bird's eye chillies, sliced into thin rings\nOptional: 0.25 tsp sugar\n\nPlace the salt in the dish. Squeeze the lime juice directly over the salt — the salt will partially dissolve immediately. Add the chilli slices. If using sugar, add and stir once. The mixture should be slightly cloudy from the dissolving salt, with chilli rings floating in it.\n\nDo not over-stir. The goal is a liquid that is salty and tart in roughly equal measure, with chilli heat building as you eat. The correct ratio produces a liquid that tastes aggressive on its own but balanced when applied to the food being dipped.\n\nAdjust immediately after making: if it tastes predominantly salty, add a few more drops of lime. If it tastes predominantly sour, add a pinch more salt. The balance point is when neither salt nor lime is identifiable as dominant — they merge into a single sharp, savoury note.\n\nMake this fresh for each meal. Leftover wet muoi ot chanh from a previous meal tastes flat and metallic — the lime oxidises quickly once squeezed and the fresh character disappears within 2 hours.`,
        tip: 'Make the dipping dish last, after all the food is already on the table. The condiment is at its best in the first 20 minutes after mixing. After that the lime loses brightness and the chilli begins to infuse the liquid with a different, more cooked-chilli flavour.',
    },
    {
        step: 4,
        title: 'The Dry Version — Muối Ớt',
        content: `The dry version — salt mixed with chilli and sometimes sugar — is served alongside a fresh lime wedge that the diner squeezes themselves. It is the version used for fresh fruit (xoai xanh, oi, thanh long), grilled seafood at outdoor stalls, and any situation where a wet dipping dish would be impractical.\n\nFor a small serving bowl:\n\n1 tsp fine sea salt or flaky salt\n0.5 tsp dried chilli flakes or chilli powder\n0.25 tsp sugar — optional but standard for the fruit version\nFresh lime wedges alongside\n\nMix the dry ingredients together. The mixture should be visibly flecked with red chilli against white salt. Taste — it should be intensely salty with a clear chilli heat and, if sugar is included, a background sweetness that rounds the edges.\n\nFor the fruit version — the most common application of dry muoi ot — the sugar is essential. The combination of salt, sugar, chilli, and fresh lime juice squeezed at the table produces the classic Vietnamese green mango eating experience: simultaneously sour, sweet, salty, and hot, all building together.\n\nFor the seafood version — grilled prawns, squid, snails — omit the sugar. The dish already has natural sweetness from the protein; adding sugar to the salt pushes the condiment into dessert territory.\n\nThe dry version keeps in an airtight jar at room temperature for up to 2 weeks without losing its character, unlike the wet version which must be made fresh.`,
        tip: null,
    },
    {
        step: 5,
        title: 'Regional Variations — How Muối Ớt Chanh Changes Across Vietnam',
        content: `The basic formula — salt, chilli, lime — is consistent across Vietnam, but each region modifies it in characteristic ways that reflect local ingredients and food culture.\n\nNorthern variation: lighter on chilli, heavier on lime. Northern Vietnamese food is generally less spicy than Central and Southern, and the dipping salt reflects this — the lime is dominant and the chilli is present as a background accent rather than a primary flavour. Often made without sugar.\n\nCentral variation: the most intense version. Central Vietnamese cooking is the spiciest in the country and the dipping salt matches — more chilli, often fresh and dried combined, with a higher salt concentration. Used alongside the region's powerful braised and grilled dishes where a milder condiment would be overwhelmed.\n\nSouthern variation: sweeter than the North and Centre. Sugar is almost always included, even for savoury applications. The Mekong Delta influence brings a preference for sweet-salty combinations that the dry muoi ot exemplifies — it is here that the condiment with fresh fruit is most deeply embedded in food culture.\n\nMekong Delta specialty — muoi tieu chanh: black pepper replaces or is added alongside chilli, producing a condiment with a more complex heat — the immediate bite of black pepper followed by the slower build of chilli. Used specifically with freshwater seafood from the delta rivers, where the black pepper amplifies the natural flavour of the fish and shellfish.`,
        tip: 'When eating grilled seafood Vietnamese-style, make a slightly larger portion of muoi ot chanh than you think you need. Running out mid-meal means eating the last pieces of grilled squid or prawns without their essential accompaniment, which is a diminished experience.',
    },
    {
        step: 6,
        title: 'What to Pair With and How to Apply It',
        content: `Muoi ot chanh is not a sauce — it is a dipping medium applied in small amounts to individual bites, not poured over food. The correct application is to take a piece of food, dip one end briefly, and eat immediately. The condiment should season and accent, not dominate.\n\nFor grilled meats — suon nuong, ga nuong, thit heo nuong: the wet version. Dip the cut surface of the meat briefly — 1 second — then eat. The salt amplifies the Maillard flavour of the char; the lime cuts the fat.\n\nFor grilled and fried seafood — tom nuong, muc chien, oc: the wet version with extra lime. Seafood has a natural sweetness that benefits from the sharp acid contrast of fresh lime more than most proteins.\n\nFor fresh and green fruit — xoai xanh, oi, thanh long, dua hau: the dry version with sugar, lime squeezed at the table. Drag each slice through the dry mixture and eat immediately — the combination of tart fruit, salty-sweet-spicy condiment, and fresh lime is the definitive Vietnamese afternoon snack.\n\nFor boiled offal and organ meats — long, da day, tim, gan: the wet version, heavy on lime. The acid is essential for cutting through the richness of organ meat and providing contrast to the often neutral flavour of boiled preparations.\n\nFor steamed vegetables and plain boiled eggs: the wet version, lighter on chilli. The condiment here acts as a simple seasoning rather than a flavour contrast — just enough to make the unseasoned vegetable worth eating.`,
        tip: 'Never pour muoi ot chanh over food. The condiment is designed for dipping — pouring it distributes the flavour unevenly and makes the food too salty in some areas and undressed in others. Each bite should be individually dipped.',
    },
];

const RELATED = [
    { title: 'Spicy Grilled Chicken Feet', href: '/recipes/chan-ga-nuong-cay', time: '55 min' },
    { title: 'Crispy Breaded Squid', href: '/recipes/muc-chien-xu', time: '30 min' },
    { title: 'Green Mango Salad with Dried Fish', href: '/recipes/xoai-tron-ca-kho', time: '20 min' },
];

export default function MuoiOtChanhGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Dipping Salt (Muối Ớt Chanh)</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#059669', background: '#05996915',
                        padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase',
                    }}>Sauces & Condiments</span>
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 7 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Make Dipping Salt (Muối Ớt Chanh)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Salt, chilli, lime — three ingredients, two versions, one condiment that works with grilled meat, fried seafood, fresh fruit, and everything in between.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Easy' },
                        { label: 'Prep Time', value: '2 minutes' },
                        { label: 'Key Ingredients', value: 'Salt, lime, chilli' },
                        { label: 'Used With', value: 'Grilled meat, seafood, fruit' },
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
                                background: '#059669', color: '#fff',
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
                        Recipes that use muối ớt chanh
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
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#059669'; }}
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