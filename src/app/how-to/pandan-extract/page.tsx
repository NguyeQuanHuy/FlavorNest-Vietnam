'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Pandan Is and Why Vietnamese Baking Uses It',
        content: `Pandan — la dua, literally "pandanus leaf" — is the vanilla of Southeast Asian cooking. It appears in Vietnamese desserts, sweet soups, sticky rice, cakes, and drinks as the defining aromatic: a fragrance that is simultaneously grassy, floral, sweet, and faintly nutty, impossible to describe accurately but immediately recognisable to anyone who grew up eating Vietnamese food.\n\nFresh pandan leaves are long, flat, and intensely green — the colour is as important as the fragrance. When blended with water and strained, they produce a vivid emerald liquid — nuoc la dua, pandan extract — that colours and flavours whatever it is added to with a green that no food dye can replicate exactly. The colour is alive in a way that artificial green is not: slightly variable, warm-toned, fading toward yellow-green at the edges of a baked item.\n\nPandan extract is used throughout Vietnamese dessert cooking. It colours the layers of banh da lon (steamed layered cake), flavours che troi nuoc (glutinous rice balls in ginger syrup), perfumes xoi la dua (pandan sticky rice), and appears in banh cuon filling, pandan chiffon cake, and countless che (sweet soups). In every application, the function is the same: to add the fragrance that identifies a dish as distinctly Southeast Asian rather than simply sweet.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Fresh vs Frozen vs Bottled — What to Use',
        content: `Fresh pandan leaves are the correct choice whenever available. The fragrance of fresh leaves is significantly more complex and intense than any preserved form — multiple volatile compounds contribute to the aroma, and they begin to degrade immediately after the leaf is cut. Fresh leaves used the same day they are purchased produce the most vivid, most fragrant extract.\n\nFresh pandan leaves are available at Vietnamese and Southeast Asian grocery stores, typically sold in bundles of 10–15 leaves. They keep refrigerated, loosely wrapped in a damp cloth, for 3–4 days before the fragrance begins to fade.\n\nFrozen pandan leaves: a reliable substitute when fresh is unavailable. The freezing process partially breaks down the cell walls, making the leaves easier to extract and producing a slightly deeper green. Thaw completely before use and pat dry — frozen leaves hold more moisture than fresh, which dilutes the extract if not accounted for by reducing the amount of added water.\n\nBottled pandan extract (pandan essence): a concentrated, artificial substitute that provides colour and a synthetic version of the fragrance. It works for applications where pandan is a minor flavour note but is detectable as artificial in dishes where pandan is the primary flavour. Use sparingly — 3–5 drops per batch — and never as a direct substitute for fresh extract volume-for-volume. Avoid brands that list only "artificial flavour" without pandan in the ingredients.\n\nPandan powder: freeze-dried and ground pandan, more reliable than bottled essence and closer to fresh in flavour. Dissolve in warm water before use. Substitute 1 tsp powder dissolved in 3 tbsp water for every 100ml of fresh extract.`,
        tip: 'Buy pandan leaves in larger quantities when you find them fresh and freeze the surplus. Wash, dry thoroughly, and freeze in zip-lock bags. Frozen pandan lasts 3 months with minimal flavour loss and is far superior to bottled extract for all applications.',
    },
    {
        step: 3,
        title: 'Making the Extract — Blender Method',
        content: `The blender method produces the most extract from the fewest leaves and is the correct approach for cooking applications where volume matters.\n\nFor approximately 150ml of extract:\n\n10–12 fresh pandan leaves (or 8 thawed frozen leaves)\n120ml cold water\n\nWash the leaves thoroughly under cold running water. Remove any yellow or brown tips — these contribute a bitter, off note to the extract. Shake dry and tear each leaf into 3–4 pieces to help the blender grip them.\n\nPlace the torn leaves and cold water in a blender. Blend on high speed for 2 full minutes — not 30 seconds, not 1 minute. The full 2 minutes is necessary to rupture enough cell walls to release the maximum amount of aromatic compounds and chlorophyll. The mixture will be a deep, slightly foamy green.\n\nStrain through a fine mesh sieve lined with muslin cloth or a clean thin tea towel. Press firmly to extract every drop of liquid. Then gather the cloth, twist, and wring hard — the final squeeze extracts an additional 20–30% of the available liquid that simply pressing does not release.\n\nDiscard the spent leaf pulp. The finished extract should be a vivid, slightly translucent deep green — not pale lime green (underextracted) and not murky grey-green (overworked or old leaves).`,
        tip: 'Use ice-cold water rather than room temperature water in the blender. Cold water slows the oxidation of the chlorophyll during blending, preserving the vivid green colour. Extract made with warm water turns dull and olive-toned faster.',
    },
    {
        step: 4,
        title: 'Making the Extract — Mortar and Pestle Method',
        content: `The mortar and pestle method produces a more concentrated extract with a slightly more complex fragrance than the blender method, because the slower crushing action releases aromatic compounds differently than high-speed blending. It is the traditional Vietnamese method and is preferred for applications where pandan fragrance is the primary quality being extracted rather than colour or volume.\n\nFor approximately 80ml of concentrate:\n\n8–10 fresh pandan leaves\n60ml cold water\n\nWash and dry the leaves. Stack them and fold lengthwise into a tight bundle. Working in 3–4 small batches, place each batch in the mortar and pound firmly — not lightly bruising, but genuinely crushing — for 2 minutes per batch until the fibres are fully broken down and the paste is deep green and wet.\n\nTransfer the crushed paste to a bowl. Add the cold water and work the paste with your hands, squeezing the water through the fibres repeatedly for 1–2 minutes. Strain through muslin cloth and wring firmly as in the blender method.\n\nThis method yields less extract but more intensely flavoured — use 60ml of mortar extract where 100ml of blender extract would be called for. The fragrance is noticeably more floral and complex, making it the preferred method for che, banh, and any dessert where pandan is the star rather than a supporting flavour.\n\nThe mortar method is impractical for large volumes — use the blender for anything requiring more than 100ml.`,
        tip: null,
    },
    {
        step: 5,
        title: 'Colour, Concentration, and Adjusting for Recipes',
        content: `The colour of fresh pandan extract fades rapidly — within 4–6 hours at room temperature, the vivid emerald green turns progressively more olive and then brownish-green as the chlorophyll oxidises. This is normal and does not affect the flavour, but it does affect the appearance of the finished dish.\n\nFor applications where colour is critical — banh da lon layered cake, pandan chiffon, xoi la dua — use the extract within 2 hours of making and keep refrigerated until the moment it is added to the batter or dough.\n\nFor applications where flavour is the primary concern — che, drinks, fillings — the extract can be used up to 24 hours after making. The fragrance fades more slowly than the colour; a 1-day-old extract will be visually duller but aromatically close to fresh.\n\nConcentrating the extract: simmer gently in a small saucepan over low heat, uncovered, until reduced by one-third. The colour deepens and the fragrance concentrates. Use concentrated extract when a recipe calls for a strong pandan flavour in a small liquid volume — pandan syrup for drinks, pandan glaze for pastries.\n\nAdjusting extract strength in recipes: Vietnamese recipes using fresh extract are calibrated for a standard blender extract (10–12 leaves per 120ml water). If your leaves are older or your extract seems pale and faintly fragrant, increase the leaf quantity by 30% in the next batch or reduce the water to 80ml. If the extract is very intense and deeply coloured from very fresh young leaves, reduce by 20%.`,
        tip: 'Add a pinch of salt to pandan extract used in sweet applications. Salt enhances the perception of sweetness and amplifies the floral notes of the pandan fragrance — the same principle that makes salted caramel taste more complex than plain caramel.',
    },
    {
        step: 6,
        title: 'Storage and Key Pandan Applications',
        content: `Fresh pandan extract keeps refrigerated in an airtight glass jar for 2–3 days. The colour will fade progressively — this is unavoidable. The fragrance remains useful for 3 days; beyond this the volatile aromatic compounds have largely dissipated and the extract tastes flat.\n\nFor longer storage, freeze the extract in ice cube trays. Each cube is approximately 2 tbsp — a useful portion for single recipes. Frozen pandan extract keeps for 2 months. Thaw in the refrigerator the night before use; do not microwave, which degrades the fragrance.\n\nKey applications and quantities:\n\nXôi lá dứa (pandan sticky rice): replace the soaking water with pandan extract — soak 300g glutinous rice in 250ml extract overnight. The rice absorbs both the colour and the fragrance during soaking, producing grains that are uniformly green throughout rather than just surface-coated.\n\nBánh da lợn (steamed layered cake): alternate layers of plain and pandan-coloured batter. Use 80ml extract per layer of pandan batter in a standard recipe. The contrast between white coconut and vivid green pandan layers is the visual signature of the dish.\n\nChe troi nuoc (glutinous rice balls): add 3 tbsp extract to the dough for 200g glutinous rice flour. The extract colours the dough pale green and adds a faint pandan fragrance to each bite of the rice ball.\n\nPandan drinks: combine 2 tbsp concentrated pandan extract with coconut milk, sugar syrup, and ice for es pandan — the Southeast Asian iced drink that is one of the most refreshing things that can be made from three ingredients.`,
        tip: 'The spent pandan pulp left after straining is not waste. Add it to the water when cooking plain rice — the rice will absorb a faint pandan fragrance during cooking without turning green. This is how many Vietnamese home cooks make everyday rice more interesting without any additional effort.',
    },
];

const RELATED = [
    { title: 'Xôi Lá Dứa (Pandan Sticky Rice)', href: '/recipes/xoi-la-dua', time: '1 hr' },
    { title: 'Bánh Da Lợn (Steamed Layered Cake)', href: '/recipes/banh-da-lon', time: '1 hr 30 min' },
    { title: 'How to Cook Perfect Sticky Rice (Xôi)', href: '/how-to/sticky-rice', time: '10 min read' },
];

export default function PandanExtractGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Pandan Extract (Nước Lá Dứa)</span>
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
                    How to Make Pandan Extract (Nước Lá Dứa)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Blend, strain, wring — how to extract the vivid emerald liquid that colours and perfumes Vietnamese desserts, sticky rice, and sweet soups with Southeast Asia's most distinctive fragrance.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Easy' },
                        { label: 'Active Time', value: '10 minutes' },
                        { label: 'Keeps For', value: '2–3 days refrigerated' },
                        { label: 'Used In', value: 'Bánh, Xôi, Chè, Drinks' },
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
                        Recipes that use pandan extract
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