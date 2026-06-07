'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Rendered Pork Fat Is and Why Vietnamese Cooking Uses It',
        content: `Rendered pork fat — mo heo — is one of the oldest and most useful things in a Vietnamese kitchen. It is made by slowly cooking pork fat over low heat until the solid fat tissue melts into a clear, golden liquid and the remaining solid pieces — top mo, or crackling — turn golden, crisp, and deeply savoury.

The rendered liquid fat is used as a cooking medium in place of neutral oil for dishes that benefit from pork flavour — com tam, bun thit nuong, xoi man. It is spooned over plain rice as a condiment. It is used to fry aromatics for braises and stir-fries where depth matters more than neutrality. In older Vietnamese home cooking, before vegetable oil became cheap and universal, rendered pork fat was the default cooking fat for everything.

The crispy solid pieces — top mo — are the secondary product and in many households the more valued one. Scattered over rice, stirred into banh tam bi, used as a garnish on com tam — they carry concentrated pork flavour and a texture that no other ingredient replicates.

Both products come from the same process, require the same thirty minutes of patient low heat, and keep refrigerated for weeks. Learning to render pork fat is learning to have two highly useful Vietnamese kitchen ingredients ready at all times from a single inexpensive piece of pork.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Choosing the Right Fat',
        content: `Not all pork fat renders the same way or produces the same result.

Back fat (mo lung) is the ideal choice — pure white fat with minimal meat content, it renders cleanly into a large volume of clear liquid fat with crispy, uniform top mo. It is the most efficient fat for pure rendering.

Leaf fat (mo la) from around the kidneys is the most prized for flavour — slightly softer in texture, it renders into an exceptionally smooth, white fat that is almost odourless when cold. It is harder to find at regular supermarkets but available at Vietnamese or Chinese butchers.

Belly fat (mo ba chi) has layers of meat running through it, which produces top mo with more flavour complexity but also more variation in texture — some pieces will be crispy, others slightly chewy. It is the most commonly available option and produces excellent results.

Avoid pre-packaged suet or lard from supermarkets labelled simply as cooking lard — these are often partially hydrogenated and will not produce the clean, fresh flavour of home-rendered fat.

Ask the butcher to cut the fat into 1–2cm cubes. If buying a large piece, cut it yourself with a sharp knife — smaller pieces have more surface area and render faster and more completely.`,
        tip: 'The colder the fat when you start, the better. Cold fat from the refrigerator renders more evenly than fat at room temperature — the exterior does not overcook before the interior has melted.',
    },
    {
        step: 3,
        title: 'The Rendering Process — Low Heat, No Rushing',
        content: `Place the cubed fat in a heavy-bottomed pan or wok over the lowest heat available. Add 2 tablespoons of water — this prevents the bottom layer from scorching before the fat begins to melt and release its own liquid.

Do not add oil. Do not raise the heat. The entire process happens at low temperature, and the temptation to increase heat to speed it up is the most common mistake in rendering. High heat produces dark, bitter fat and tough, acrid crackling instead of golden, clean-tasting top mo.

The fat will appear to do nothing for the first 5 minutes. Then the water will begin to evaporate and the fat pieces will start to shrink as they release liquid fat into the pan. Stir every 3–4 minutes to ensure even cooking and prevent any pieces from sticking to the bottom.

After 20–25 minutes, the pieces will be noticeably smaller, pale golden, and floating in a clear liquid. Continue over low heat, stirring more frequently now, until the pieces turn deep golden and the bubbling in the pan reduces significantly — this indicates most of the water content has been driven off.

Total time: 30–40 minutes depending on the size of the pieces and the heat level. The finished top mo should be an even deep gold — not pale (underrendered, still fatty inside) and not dark brown (overcooked, bitter).`,
        tip: 'The bubbling in the pan is water evaporating from the fat tissue — vigorous bubbling is correct and expected. When the bubbling slows dramatically and the pieces turn golden, the rendering is nearly complete. This change happens over about 2 minutes and is the signal to watch closely.',
    },
    {
        step: 4,
        title: 'Finishing the Tóp Mỡ (Crispy Crackling)',
        content: `When the pieces reach deep golden, remove them immediately with a slotted spoon and transfer to a plate lined with paper towels. They will crisp further as they cool — do not judge the final texture while they are still hot and soft from the pan.

Season immediately while hot with a pinch of salt and, if desired, a pinch of sugar. The seasoning adheres to the surface while it is still slightly tacky from the rendered fat. Once cooled, the seasoning no longer sticks.

For extra crunch, some Vietnamese cooks increase the heat to medium for the final 2 minutes, stirring constantly, to drive off the last of the surface moisture. This works well but requires attention — the pieces go from perfect to burnt in under a minute at higher heat.

Top mo keeps in an airtight container at room temperature for 2 days or refrigerated for 1 week. Reheat briefly in a dry pan or oven at 180°C for 3 minutes to restore crunch before serving.`,
        tip: 'Do not crowd the top mo on the paper towel — pieces touching each other trap steam between them and go soft. Spread in a single layer with space between each piece.',
    },
    {
        step: 5,
        title: 'Straining and Storing the Rendered Fat',
        content: `Remove the pan from heat once the top mo has been removed. Allow the liquid fat to cool for 5 minutes — hot fat poured directly into a glass jar creates thermal shock that can crack the glass.

Strain the fat through a fine mesh sieve lined with a single layer of muslin cloth or a clean paper towel into a clean, dry glass jar. The cloth catches any small solid particles that would otherwise cause the fat to turn rancid faster. The finished fat should be clear golden-yellow while warm and turn creamy white when refrigerated.

Label the jar with the date. Rendered pork fat keeps refrigerated for up to 1 month and frozen for up to 6 months. It does not need to be thawed before use — scoop out what you need with a spoon directly from the cold jar.

Never store rendered fat in a container that has any moisture in it — water causes the fat to turn rancid within days. Make sure both the strainer cloth and the storage jar are completely dry before use.`,
        tip: 'Store a small jar of rendered fat near the stove rather than only in the refrigerator — having it at room temperature means it is always soft enough to scoop immediately and ready to use without heating.',
    },
    {
        step: 6,
        title: 'How to Use Both Products in Vietnamese Cooking',
        content: `Rendered fat — liquid mỡ heo — has several specific uses that neutral oil cannot replicate.

For com tam and com suon: spoon 1 teaspoon of warm rendered fat over the rice just before serving. It melts into the grains and adds a depth of flavour that is immediately recognisable as Saigon street food.

For frying aromatics — garlic, shallots, lemongrass — before a braise or stir-fry: use rendered fat in place of oil. The fat carries its own pork flavour into the aromatics as they cook, building a more complex base.

For banh tam bi and mi quang: a small amount of rendered fat stirred through the noodles before the toppings go on is traditional and adds the characteristic richness of the street-stall version.

Top mo — crispy crackling — is used as a textural garnish and flavour accent. Scattered over com tam, it adds crunch and savouriness that fried shallots alone cannot provide. Stirred into banh tam bi with coconut cream and shredded pork skin, it is one of the defining textures of Southern Vietnamese noodle dishes.

Both products are also simply eaten with plain steamed rice — mo heo spooned over the rice, top mo scattered on top, with fish sauce and sliced chilli alongside. This is one of the oldest and most honest meals in the Vietnamese kitchen.`,
        tip: null,
    },
];

const RELATED = [
    { title: 'Com Tam Saigon', href: '/recipes/com-tam', time: '45 min' },
    { title: 'Thit Kho Tau (Caramelised Pork Belly)', href: '/recipes/thit-kho-tau', time: '1 hr 30 min' },
    { title: 'How to Make Vietnamese Caramel (Nuoc Mau)', href: '/how-to/nuoc-mau', time: '8 min read' },
];

export default function RenderPorkFatGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Render Pork Fat & Tóp Mỡ</span>
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
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 9 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Render Pork Fat & Make Tóp Mỡ
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    One piece of pork fat, thirty minutes of low heat, two essential Vietnamese kitchen ingredients — liquid mỡ heo for cooking and crispy tóp mỡ for garnishing. The technique that makes com tam taste like Saigon.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Essential' },
                        { label: 'Active Time', value: '30–40 minutes' },
                        { label: 'Key Tools', value: 'Heavy pan, glass jar' },
                        { label: 'Used In', value: 'Com Tam, Banh Tam Bi, Mi Quang' },
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

                {/* Related */}
                <div style={{
                    background: '#fff', border: '1px solid rgba(75,46,26,0.08)',
                    borderRadius: 20, padding: '28px', marginTop: 16,
                }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#2D1A0E', marginBottom: 16 }}>
                        Recipes that use this technique
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