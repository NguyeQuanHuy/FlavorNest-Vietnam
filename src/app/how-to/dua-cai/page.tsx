'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Dua Cai Is and Why It Matters',
        content: `Dua cai — Vietnamese pickled mustard greens — is one of the oldest preserved foods in Vietnamese cooking. It appears on the table as a condiment alongside braised pork, as an ingredient in canh chua, as a filling component in banh mi, and as a standalone side dish eaten with plain rice and fish sauce. In Southern Vietnamese households, a jar of dua cai is a permanent fixture in the refrigerator, replenished as it is used.\n\nThe pickling process is lacto-fermentation — the same biological mechanism behind kimchi, sauerkraut, and yoghurt. Salt draws moisture from the vegetable, creating a brine in which naturally occurring lactobacillus bacteria multiply and produce lactic acid. The lactic acid lowers the pH of the brine, preserving the vegetable and producing the characteristic sour, funky, complex flavour that makes dua cai irreplaceable.\n\nThis is not a quick pickle. The correct dua cai requires 2–3 days at room temperature for the fermentation to develop properly. The result — sour, slightly funky, crunchy, deeply savoury — cannot be replicated by soaking vegetables in vinegar, which produces a sharp, one-dimensional acidity without the depth of fermentation.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Choosing the Right Mustard Greens',
        content: `The correct vegetable is cai be xanh — Chinese mustard greens, also called gai choy or leaf mustard. It is available at Vietnamese and Chinese grocery stores year-round. The leaves are large, thick-stemmed, and slightly waxy, with a mild bitterness that transforms into complex sourness during fermentation.\n\nChoose bunches with firm, unblemished stems and leaves that are deep green without yellowing. Avoid bunches with soft spots, browning edges, or slimy patches — these indicate the vegetable is already beginning to break down and will not ferment cleanly.\n\nIn Germany and other European countries where fresh cai be xanh may be difficult to find, substitute with regular mustard greens or Chinese cabbage (napa cabbage). Napa cabbage produces a milder, less pungent result but ferments reliably. Regular mustard greens produce a result closer to the original. Do not use European cabbage or kale — the texture and flavour profiles are too different.\n\nQuantity: 1kg of fresh mustard greens produces approximately 600–700g of finished dua cai after wilting and fermentation. A standard batch uses 1–1.5kg.`,
        tip: 'Buy mustard greens the day you plan to make dua cai — fresh vegetables with the highest natural lactobacillus population on the surface produce a more reliable fermentation than older vegetables. The bacteria on the leaf surface are what drive the fermentation.',
    },
    {
        step: 3,
        title: 'Sun-Wilting — The Step Most Recipes Skip',
        content: `Authentic dua cai begins with sun-wilting: spreading the whole mustard green leaves in direct sunlight for 4–6 hours until they are noticeably limp and reduced in volume by about one-third. This step removes a significant proportion of the vegetable's surface moisture before salting begins, which concentrates the flavour and produces a firmer, crunchier final texture.\n\nIn Vietnam, vegetables are spread on bamboo mats or hung over fences in the morning sun. In a European climate, spread the leaves on a clean surface near a sunny window, or outdoors on a dry day. Turn once at the halfway point.\n\nIf sun-wilting is not possible — overcast weather, no outdoor space — use the oven method: spread the leaves on wire racks and place in the oven at the lowest possible setting (50–60°C) with the door slightly ajar for 2–3 hours. The goal is gentle drying, not cooking.\n\nAfter wilting, the leaves should feel soft and pliable rather than crisp, and the stems should bend without snapping. The surface should look slightly dull rather than shiny. Do not wilt to the point of browning or wilting completely flat — some structure must remain.`,
        tip: null,
    },
    {
        step: 4,
        title: 'Salting and the Brine',
        content: `Cut the wilted mustard greens into pieces 5–7cm long. If the stems are very thick — more than 1.5cm — split them lengthwise so the salt penetrates evenly.\n\nThe correct salt ratio for dua cai is 2–2.5% of the vegetable weight. For 1kg of wilted greens, use 20–25g of salt. This ratio is lower than many pickle recipes — enough to inhibit harmful bacteria while allowing the beneficial lactobacillus to thrive. Too much salt prevents fermentation entirely; too little allows the wrong bacteria to dominate and produces off-flavours.\n\nUse non-iodised salt — sea salt or kosher salt. Iodised table salt inhibits lactobacillus activity and produces unreliable fermentation results.\n\nCombine the cut greens and salt in a large bowl. Massage firmly with clean hands for 3–4 minutes until the salt is evenly distributed and the vegetables begin to release liquid. The brine will be minimal at this stage — it increases significantly over the first 12 hours.\n\nOptional additions at this stage: 2 tsp sugar (accelerates fermentation slightly and adds a faint sweetness), 3 sliced garlic cloves (adds aromatics), 2 sliced chillies (adds heat that mellows during fermentation).`,
        tip: 'Taste the salted greens before packing — they should taste pleasantly salty, not aggressively so. If they taste very salty, rinse briefly and reduce the salt in future batches. If they taste barely salty, add a pinch more. The salt level at this stage determines the salt level of the finished pickle.',
    },
    {
        step: 5,
        title: 'Packing, Weighing Down, and Fermentation',
        content: `Pack the salted greens tightly into a clean glass jar or ceramic crock. Press down firmly after each layer to eliminate air pockets — oxygen inhibits lactobacillus and promotes mould. The vegetables should be packed so tightly that brine rises to cover them completely. If the brine does not cover after packing, make additional brine with 2% salt solution (20g salt per litre of water) and add enough to submerge.\n\nWeight the vegetables down so they stay submerged. A zip-lock bag filled with brine (not plain water — if the bag leaks, plain water dilutes the fermentation) placed on top of the greens works well. A smaller jar filled with water placed inside the larger jar also works. The vegetables must remain below the brine surface throughout fermentation — any exposed vegetable will develop mould.\n\nCover the jar loosely — not airtight. The fermentation produces CO2 gas that needs to escape. A cloth secured with a rubber band, or a jar lid placed on top without sealing, works correctly.\n\nLeave at room temperature — ideally 20–25°C — for 2–3 days. In summer or a warm kitchen, fermentation moves faster: check at 36 hours. In a cool kitchen below 18°C, fermentation is slower: allow up to 4 days. The dua cai is ready when it smells pleasantly sour and tangy — not rotten or unpleasant — and the brine has turned slightly cloudy from bacterial activity.`,
        tip: 'Check the jar once daily during fermentation and press the vegetables back below the brine if any have floated above the surface. A thin white film on the brine surface is kahm yeast — harmless, skim it off. Green or black mould on the vegetables means something went wrong — discard the batch and start again with cleaner equipment.',
    },
    {
        step: 6,
        title: 'Finishing, Storage, and How to Use Dua Cai',
        content: `When the dua cai has reached the desired sourness — taste daily from day 2 — seal the jar and transfer to the refrigerator. Cold temperature slows the fermentation dramatically and the pickle will continue to sour very slowly in the refrigerator over the following weeks. Most people prefer dua cai at 2–3 days of fermentation: sour but still with some fresh flavour. At 5–7 days it is significantly more sour and funky — the flavour preferred for cooking into dishes rather than eating fresh.\n\nRefrigerated dua cai keeps for 2–3 weeks at peak quality. Beyond this it becomes increasingly sour and soft but remains safe to eat and is still useful for cooking.\n\nHow to use in Vietnamese cooking: eaten fresh as a side dish with com tam, thit kho tau, or plain rice — rinse briefly under cold water if very sour, then squeeze dry. Used as an ingredient in canh chua chay (vegetarian sour soup) in place of fresh vegetables. Chopped and used as a filling layer in banh mi alongside pate and cold cuts. Stir-fried briefly with garlic and chilli as a standalone vegetable dish — xao dua cai — which is one of the fastest, most satisfying vegetable sides in Vietnamese cooking.\n\nThe brine left after the vegetables are eaten is not waste. It contains active lactobacillus cultures and can be used as a starter for the next batch — add 2–3 tablespoons to the new batch of salted greens to accelerate fermentation.`,
        tip: 'Make a new batch before the current jar is finished. The starter brine from the current batch ensures the new batch ferments reliably and quickly, and having continuous dua cai available is one of the simplest ways to keep a Vietnamese kitchen ready to produce a complete meal at short notice.',
    },
];

const RELATED = [
    { title: 'Thit Kho Tau (Caramelised Pork Belly)', href: '/recipes/thit-kho-tau', time: '1 hr 30 min' },
    { title: 'Canh Chua (Vietnamese Sour Soup)', href: '/recipes/canh-chua', time: '40 min' },
    { title: 'Banh Mi', href: '/recipes/banh-mi', time: '30 min' },
];

export default function DuaCaiGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Pickled Mustard Greens (Dưa Cải)</span>
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
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 9 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Make Vietnamese Pickled Mustard Greens (Dưa Cải)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Sun-wilt, salt, ferment — the three-day lacto-fermentation process that produces the sour, crunchy, deeply flavoured dua cai found in every Southern Vietnamese kitchen.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Easy' },
                        { label: 'Active Time', value: '30 minutes' },
                        { label: 'Total Time', value: '2–3 days' },
                        { label: 'Used In', value: 'Banh Mi, Canh Chua, Com Tam' },
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
                        Recipes that use dua cai
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