'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Vietnamese Herbs Bruise Faster Than Others',
        content: `Vietnamese cooking uses a wider variety of fresh herbs than almost any other cuisine — rau răm, húng quế, ngò gai, tía tô, lá lốt, kinh giới, rau mùi, húng lủi. Each one is eaten raw, in quantity, and placed on the table as a living component of the dish rather than a finishing garnish. This means their condition at the moment of eating is everything.

The problem is that most of these herbs are significantly more fragile than the parsley or basil a Western kitchen might handle. Their leaves are thinner, their cell walls bruise under pressure, and many — particularly rau răm and tía tô — begin to oxidise and darken within minutes of being damaged. A bunch of rau răm handled roughly at the market, shoved into a bag, and rinsed carelessly at home will be limp, spotted, and half-flavourless by the time it reaches the table.

The solution is not complicated. It requires understanding that herbs are alive, that cold water and cold air extend their life, and that the only damage that matters is damage you cause yourself.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Sorting — Before Water Touches Anything',
        content: `Always sort before washing. Wet damaged leaves are harder to remove and contaminate the water, accelerating the deterioration of the healthy leaves around them.

Lay the bunch flat on a dry surface. Remove any yellowed, spotted, or slimy leaves immediately — they produce ethylene gas that accelerates ageing in the healthy leaves stored nearby. Remove thick, woody stems from herbs like húng quế and rau mùi — these draw moisture away from the leaves during storage.

For ngò gai (sawtooth coriander), check the base of each leaf where it meets the stem — this is where rot starts first and is easy to miss.

For lá lốt and tía tô, check the underside of each leaf. These herbs collect grit on their textured undersides that washing alone will not remove without deliberate attention.`,
        tip: 'Sort every bunch the moment you get home from the market — not when you are about to cook. Damaged leaves left in contact with healthy ones for hours cause exponential deterioration.',
    },
    {
        step: 3,
        title: 'Washing — Cold Water, No Pressure',
        content: `Fill a large bowl with cold water. Submerge the sorted herbs completely and swirl gently with your hand — do not scrub, press, or agitate forcefully. The water loosens and carries away dirt, grit, and small insects without bruising the leaves. Let the herbs sit submerged for 60 seconds, then lift them out with your hands rather than pouring — pouring sends the sediment that has sunk to the bottom back over the leaves.

Repeat with fresh cold water once or twice until the water runs completely clear. For herbs that will be eaten raw and whole — húng quế, rau răm — a third rinse is worth the extra minute.

For ngò gai, hold each leaf individually under a slow stream of cold water and run your thumb along both sides. The serrated edges trap grit that bowl-washing misses.

Never use warm or hot water. Heat immediately wilts the leaves and begins breaking down the volatile aromatic compounds that give each herb its character.`,
        tip: 'Add 1 tsp of white vinegar or a pinch of salt to the first wash water. Both are mild antibacterials that reduce surface bacteria without affecting flavour — particularly useful for herbs bought at outdoor markets.',
    },
    {
        step: 4,
        title: 'Drying — The Step Most People Rush',
        content: `Surface moisture is the primary cause of herb deterioration in storage. Wet herbs stored in any container — bag, box, or wrapped in cloth — create a humid microclimate where bacteria multiply rapidly and leaves begin to rot within 24 hours.

The correct drying method: after washing, shake the herbs firmly three or four times to remove the majority of the water. Then spread them in a single loose layer on a clean dry kitchen towel or several layers of paper towel. Roll the towel loosely around the herbs and press gently — do not wring or squeeze. Leave for 5 minutes. The towel absorbs the remaining surface moisture without bruising.

For delicate herbs like húng quế and kinh giới, skip the rolling and instead lay them flat on the towel and press another towel lightly on top. These herbs bruise from their own weight when compressed while wet.

A salad spinner works well for robust herbs like ngò gai and rau mùi but is too aggressive for thin-leaved herbs — the centrifugal force tears the leaves against the basket.`,
        tip: null,
    },
    {
        step: 5,
        title: 'Storage by Herb Type',
        content: `Not all Vietnamese herbs store the same way. Treating them identically produces uneven results.

Rau răm, húng quế, tía tô — these are the most fragile. Wrap loosely in a dry paper towel, place in an open zip-lock bag, and store in the warmest part of the refrigerator — the door shelf or the top shelf. Cold temperatures below 8°C cause these herbs to blacken rapidly. Check daily and replace the paper towel if it becomes damp.

Ngò gai, rau mùi (coriander), húng lủi — these are more cold-tolerant. Trim the stem ends, stand them upright in a jar with 2–3cm of cold water like flowers, cover loosely with a bag, and refrigerate. Change the water every two days. This method keeps ngò gai fresh for up to 8 days.

Lá lốt — store unwashed, loosely wrapped in newspaper or paper towel in the vegetable drawer. Wash only immediately before use. Lá lốt deteriorates faster once wet.

Kinh giới — extremely fragile; best used within 2 days of purchase. Store wrapped in dry paper towel at the warmest part of the refrigerator. Do not freeze.`,
        tip: 'Store herbs away from fruits — particularly apples, bananas, and tomatoes, which emit high levels of ethylene gas. Even in a closed refrigerator, proximity to ethylene-producing produce shortens herb life by 30–50%.',
    },
    {
        step: 6,
        title: 'At the Table — Preparing Herbs for Serving',
        content: `Vietnamese herbs served at the table are presented as a plate of whole sprigs and leaves, not pre-torn or pre-chopped. Tearing or cutting herbs before plating releases their aromatic oils and they begin to oxidise immediately — within 10 minutes, torn basil turns black at the edges and loses its perfume.

Prepare the herb plate no more than 15 minutes before the meal. Remove the leaves from woody stems if needed but leave them whole. Arrange loosely — a crowded, compressed herb plate causes the bottom layers to bruise under the weight of the top.

For dishes where herbs are incorporated into the dish rather than served alongside — bun bo hue, banh canh — add them at the very last moment, after the heat source has been removed. Wilted herbs lose their volatile aromatics the moment they hit sustained heat.

The correct serving temperature for fresh herbs is cool room temperature. Taking herbs straight from the refrigerator and plating immediately produces cold, stiff leaves that release their fragrance poorly. Remove from the refrigerator 10 minutes before serving.`,
        tip: 'If herbs have wilted slightly before serving, submerge them in ice water for 3–4 minutes. The cold water causes the cells to rehydrate and the leaves will crisp back to near-fresh condition. Dry thoroughly before plating.',
    },
];

const RELATED = [
    { title: 'Gỏi Gà Hành Tây', href: '/recipes/goi-ga-hanh-tay', time: '35 min' },
    { title: 'Green Mango Salad with Dried Fish', href: '/recipes/xoai-tron-ca-kho', time: '20 min' },
    { title: 'Fresh Spring Rolls (Gỏi Cuốn)', href: '/recipes/fresh-spring-rolls', time: '30 min' },
];

export default function WashStoreHerbsGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Wash & Store Fresh Herbs</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#DC2626', background: '#DC262615',
                        padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase',
                    }}>Essential</span>
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 6 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Properly Wash & Store Fresh Herbs
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Rau răm, húng quế, ngò gai — how to clean without bruising, dry without wilting, and keep Vietnamese herbs fresh and fragrant for up to a week.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Essential' },
                        { label: 'Time to Learn', value: '1 session' },
                        { label: 'Key Tools', value: 'Large bowl, clean towels' },
                        { label: 'Used In', value: 'Every Vietnamese dish' },
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
                                background: '#DC2626', color: '#fff',
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

                {/* Related recipes */}
                <div style={{
                    background: '#fff', border: '1px solid rgba(75,46,26,0.08)',
                    borderRadius: 20, padding: '28px',
                    marginTop: 16,
                }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#2D1A0E', marginBottom: 16 }}>
                        Recipes that use fresh herbs
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {RELATED.map(r => (
                            <Link key={r.href} href={r.href} style={{ textDecoration: 'none' }}>
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    padding: '12px 16px', borderRadius: 12,
                                    background: '#FAFAF7', border: '1px solid rgba(75,46,26,0.06)',
                                    transition: 'all 0.18s',
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#D97706'; }}
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