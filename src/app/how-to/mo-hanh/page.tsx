'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Scallion Oil Is and Why It Appears on Everything',
        content: `Mo hanh — scallion oil, also called dau hanh — is the finishing condiment that appears on com tam, bun thit nuong, banh cuon, banh uot, and dozens of other Vietnamese dishes. It is made by pouring hot oil over sliced green scallions, producing an immediate sizzle that wilts the scallion just enough to release its aromatic compounds into the oil while keeping the colour vivid green and the texture slightly tender rather than fully cooked.\n\nThe result is a green, fragrant oil carrying the sweet, grassy onion flavour of scallion — not the sharp raw bite of uncooked spring onion, and not the mellow sweetness of fully cooked onion, but something precisely between the two that exists only at this specific moment of contact between hot oil and fresh scallion.\n\nIn Vietnamese cooking, mo hanh functions as a bridge between components of a dish. Spooned over the broken rice of com tam, it ties together the grilled pork, fried egg, and steamed pork cake that share the plate. Drizzled over the rice noodles of banh uot, it adds the fat and fragrance that the plain steamed sheet cannot provide alone. Poured over boiled chicken, it transforms a neutral protein into something aromatic and complete.\n\nIt takes four minutes to make and keeps for three days. Having it ready in the refrigerator is one of the most practical things a Vietnamese kitchen can maintain.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Ingredients — Scallion, Oil, and the Optional Additions',
        content: `Scallion (hanh la): use the green parts only — the white and light green sections near the root are too pungent and will produce a sharp, onion-heavy oil rather than the sweet, grassy result the dish requires. Slice the green parts into thin rings, 2–3mm wide. For 100ml of oil, use 3–4 large stalks of scallion, green parts only — approximately 40–50g sliced.\n\nOil: neutral oil with a high smoke point — refined vegetable oil, sunflower oil, or rice bran oil. The oil must be genuinely hot when it hits the scallion — if it is not hot enough, the scallion steams rather than sizzles and the result is soft, dull-coloured, and lacking the aromatic intensity of properly made mo hanh. Peanut oil adds a faint nutty flavour that complements the scallion well; this is the traditional oil in many Vietnamese kitchens.\n\nOptional additions:\n\nFried shallots (hanh phi): stirred into the finished mo hanh, they add crunch and a caramelised sweetness that deepens the flavour. Standard addition for com tam applications.\n\nSalt: a small pinch added to the sliced scallion before pouring the oil, drawing out a small amount of moisture and concentrating the flavour slightly.\n\nSesame oil: a few drops added after the hot oil, not before — sesame oil burns and turns bitter if heated. A small amount adds a toasty, nutty background note appropriate for noodle dishes.\n\nWhite pepper: a pinch stirred in after the oil pour, adding a faint warmth that suits meat-based applications.`,
        tip: 'The scallion must be completely dry before the oil is poured. Any surface moisture causes the hot oil to spatter violently — a serious burn risk and a mess. Pat the sliced scallion dry with paper towels after slicing, or spread on a clean towel for 5 minutes before use.',
    },
    {
        step: 3,
        title: 'The Hot Oil Pour — Technique and Temperature',
        content: `Place the sliced, dry scallion in a heatproof bowl — not a plastic bowl, not a shallow dish that would allow the oil to splash out. A ceramic or stainless steel bowl works correctly.\n\nHeat the oil in a small saucepan over medium-high heat. The correct temperature is 180–200°C — hot enough to sizzle instantly on contact with the scallion, but not so hot that it begins to smoke heavily. Test the temperature by dropping a single scallion ring into the oil: it should sizzle immediately and vigorously. If it sizzles gently, the oil needs more heat. If it spits and smokes, the oil is slightly too hot — remove from heat for 30 seconds before pouring.\n\nPour the hot oil over the scallion in a single, confident stream from a low height to minimise splashing. The scallion will sizzle loudly and dramatically — this sound is the indication the technique is correct. Stir immediately with a spoon or chopstick to ensure all the scallion makes contact with the hot oil.\n\nWithin 10 seconds the sizzling will subside. The scallion will have turned from bright raw green to a vivid, slightly darker green — wilted but not brown, soft but not collapsed. This is the correct result. Brown scallion means the oil was too hot or was poured too slowly. Pale, unchanged scallion means the oil was not hot enough.\n\nTotal active time: 4 minutes including slicing, heating, and pouring.`,
        tip: 'Pour the oil from a height of no more than 10cm above the bowl. Pouring from higher increases the splash radius and the risk of hot oil landing on skin. A short, direct pour is both safer and produces the same result.',
    },
    {
        step: 4,
        title: 'Variations — Ginger Oil, Shallot Oil, and Lemongrass Oil',
        content: `The hot oil pour technique is the foundation for several related Vietnamese condiments that follow identical logic but use different aromatics.\n\nGinger scallion oil (mo hanh gung): add 1 tbsp of very finely minced fresh ginger to the scallion before pouring the hot oil. The ginger wilts alongside the scallion and releases its sharp, warming compounds into the oil. This version is specifically used for boiled chicken (ga luoc) and plain congee (chao), where the ginger adds warmth and cuts the neutral flavour of the protein.\n\nShallot oil (mo hanh kho / dau hanh kho): slice shallots paper-thin instead of scallion, or combine both. Shallots need slightly more heat and a longer initial contact time — pour the oil and leave undisturbed for 30 seconds before stirring, allowing the shallot to soften through to the centre. The result is sweeter and more caramelised than pure scallion oil.\n\nLemongrass oil (mo sa): substitute finely minced lemongrass (white part only) for half the scallion. Requires the same technique but produces a fragrant, citrusy oil appropriate for seafood dishes, particularly steamed fish and grilled prawns. The lemongrass does not wilt visibly — it simply infuses the oil with its aromatic compounds.\n\nAll variations keep for 3 days refrigerated. The lemongrass version develops more flavour over 24 hours as the aromatics continue to infuse the oil — make it the day before for best results.`,
        tip: null,
    },
    {
        step: 5,
        title: 'How to Use Mo Hanh Across Vietnamese Cooking',
        content: `Com tam (broken rice): spoon 1–1.5 tbsp of mo hanh over the rice immediately before serving. The oil seeps between the grains and the scallion sits on the surface, adding fragrance and colour to what is otherwise a plain white base. This application is non-negotiable in authentic com tam — the dish is incomplete without it.\n\nBanh cuon and banh uot (steamed rice rolls): drizzle 1 tbsp over the folded rice sheets just before serving. The oil prevents the sheets from sticking together and adds the sweet scallion fragrance that is characteristic of these dishes. Fried shallots are added at the same time.\n\nBoiled chicken (ga luoc): pour the ginger-scallion version generously over carved chicken pieces, ensuring the oil coats every surface. The hot oil applied to hot chicken continues the brief wilting process and the result — vivid green scallion on pale poached chicken, glistening with fragrant oil — is one of the most visually and aromatically satisfying presentations in Vietnamese cooking.\n\nBun noodle bowls: drizzle 1 tbsp over the noodles before adding the toppings and broth. The oil coats the noodles, prevents clumping, and adds a base layer of fragrance that infuses upward through the entire bowl.\n\nCongee (chao): stirred in at serving rather than poured — 1 tsp per bowl, swirled into the surface of the thick rice porridge. The scallion stays on the surface as a bright green garnish while the oil sinks into the congee and adds richness to a dish that is otherwise deliberately plain.`,
        tip: 'Make mo hanh in slightly larger batches than needed for a single meal. Stored in an airtight jar in the refrigerator, it keeps for 3 days and is ready to use cold — the oil liquefies again within 30 seconds at room temperature. Having it ready means com tam, banh uot, and boiled chicken are all fully finished in the time it takes to plate them.',
    },
    {
        step: 6,
        title: 'Storage and Troubleshooting',
        content: `Mo hanh keeps in an airtight glass jar in the refrigerator for 3 days. The oil will solidify when cold — this is normal. Remove from the refrigerator 5 minutes before use and it will return to a pourable consistency. Do not microwave to liquefy — the scallion will continue cooking and turn brown.\n\nThe scallion oil left over after the green pieces have been used is itself a useful ingredient — drizzle it over noodles, use it to fry aromatics at the start of a stir-fry, or brush it over grilled bread. Do not discard it.\n\nTroubleshooting:\n\nScallion turned brown immediately on contact: the oil was too hot — above 220°C. Remove from heat, allow to cool for 1 minute, and test with a single piece of scallion before using the rest.\n\nScallion barely changed colour or texture: the oil was not hot enough. Return the oil to the heat, wait until a test piece sizzles properly, then pour over fresh scallion. The batch with insufficiently heated oil can be reused — place it in the saucepan, bring back to temperature, and pour over new scallion.\n\nOil is bitter: the scallion included too much of the white or light green section. Use only the dark green parts in future batches.\n\nOil is too sharp and pungent: again, white sections were included, or the scallion was very young with an undeveloped sweet flavour. Mature scallion with fully developed dark green tops produces the sweetest, most balanced oil.`,
        tip: 'The leftover scallion oil — the plain flavoured oil that accumulates at the bottom of the jar after the scallion pieces have been used — is excellent for frying garlic and shallots at the start of any Vietnamese stir-fry or braise. It adds a background scallion note that builds complexity into the aromatics base without adding a detectable scallion flavour to the finished dish.',
    },
];

const RELATED = [
    { title: 'Com Tam Saigon', href: '/recipes/com-tam', time: '45 min' },
    { title: 'Banh Uot Dau He', href: '/recipes/banh-uot-dau-he', time: '40 min' },
    { title: 'How to Make Crispy Fried Shallots', href: '/how-to/crispy-fried-shallots', time: '8 min read' },
];

export default function MoHanhGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Scallion Oil (Mỡ Hành)</span>
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
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 8 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Make Scallion Oil (Mỡ Hành)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Hot oil poured over sliced scallion until it sizzles — the four-minute condiment that finishes com tam, banh cuon, boiled chicken, and makes every Vietnamese rice dish taste complete.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Easy' },
                        { label: 'Active Time', value: '4 minutes' },
                        { label: 'Keeps For', value: '3 days refrigerated' },
                        { label: 'Used In', value: 'Com Tam, Banh Cuon, Ga Luoc' },
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
                        Recipes that use mỡ hành
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