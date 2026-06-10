'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Make Pho Noodles from Scratch',
        content: `Dried pho noodles are widely available, reasonably good, and the practical choice for everyday cooking. Fresh pho noodles — banh pho tuoi — are something else entirely: silky, slightly translucent, with a tender bite and a clean rice flavour that dried noodles, which have been dehydrated and then rehydrated, cannot replicate. The difference is most apparent in a well-made pho bo, where the clean neutrality of a fresh noodle allows the broth's complexity to come through without the slight gumminess that even well-cooked dried noodles can carry.\n\nFresh pho noodles are also the starting point for banh cuon — steamed rice rolls — and for a number of Central Vietnamese noodle preparations where the texture of fresh-made rice sheets is the defining quality. The technique for making fresh pho noodles is the same as making banh cuon sheets; the difference is only in the thickness and whether the sheet is cut or rolled.\n\nThe process requires only rice flour, tapioca starch, water, and salt — and a non-stick pan, a flat surface, and patience. The technique is genuinely simple once the batter consistency and cooking technique are understood. The first batch is always a learning experience; by the third batch the process is reliable and fast.`,
        tip: null,
    },
    {
        step: 2,
        title: 'The Batter — Ratio, Flour Types, and Resting',
        content: `The batter for fresh pho noodles uses two flours: rice flour (bột gạo) for the body and texture of the noodle, and tapioca starch (bột năng) for elasticity and the slight translucency that characterises fresh pho noodles. Using only rice flour produces a noodle that tears easily and is too opaque. Using too much tapioca starch produces a noodle that is chewy and rubbery rather than tender.\n\nThe standard ratio for fresh pho noodles:\n\n200g rice flour (plain white rice flour, not glutinous)\n40g tapioca starch\n500ml cold water\n0.5 tsp salt\n1 tbsp neutral oil\n\nThis produces approximately 600g of finished noodles — enough for 4 generous servings.\n\nMixing: combine the flours and salt in a bowl. Add the cold water gradually, whisking constantly to prevent lumps. Add the oil last and whisk until completely smooth. The batter should have the consistency of thin cream — it should flow freely from a ladle and coat the back of a spoon very lightly. If it is thicker than this, add water 1 tbsp at a time. If it is thinner than cream, add rice flour 1 tsp at a time.\n\nResting: cover the batter and leave at room temperature for 30 minutes minimum, or refrigerate for up to 4 hours. Resting allows the starch granules to fully hydrate and produces a more cohesive, less fragile sheet. Batter cooked immediately after mixing tears more easily and has a slightly grainy texture. Stir the batter again immediately before each ladle — the rice flour settles continuously.`,
        tip: 'Use cold water, not warm or room temperature, when mixing the batter. Cold water slows starch hydration during mixing, preventing lumps from forming before the batter is smooth. Warm water causes the starch to begin gelatinising immediately on contact, producing lumps that are difficult to remove even with vigorous whisking.',
    },
    {
        step: 3,
        title: 'Equipment — Pan, Steamer, or Both',
        content: `Fresh pho noodles can be made using two different methods, each producing a slightly different result.\n\nNon-stick pan method (most accessible): a well-seasoned non-stick pan or a lightly oiled flat pan produces thin sheets by pouring and spreading the batter on a hot surface — similar to making a very thin crepe. The pan method produces sheets with a slightly more irregular texture and is easier to control for thickness.\n\nSteamer method (more traditional): pour the batter onto a stretched cloth over a steamer of boiling water, cover, and steam for 2–3 minutes per sheet. The steamer method produces a more uniform sheet with a slightly silkier texture, and it is the method used for banh cuon. It requires a dedicated cloth-stretched steamer setup that takes more time to prepare.\n\nFor pho noodles specifically, the pan method is more practical and produces excellent results. For banh cuon specifically, the steamer method is necessary for the correct texture.\n\nPan requirements for the pan method: a 26–28cm non-stick or well-seasoned carbon steel pan with a lid. The lid is essential — it traps steam during cooking, which finishes the top surface of the sheet while the bottom cooks on the pan surface. Without a lid, the top surface dries unevenly.\n\nLubricating the pan: brush the pan lightly with neutral oil before the first sheet. After the first sheet, the residual oil from the batter is usually sufficient — add a very small additional brush of oil only if the sheet sticks.`,
        tip: null,
    },
    {
        step: 4,
        title: 'Cooking the Sheets — Pan Method',
        content: `Heat the pan over medium heat for 2 minutes until the surface is evenly hot. Test by dropping a small amount of batter into the pan — it should sizzle gently and begin to set immediately. If it sizzles violently and browns, the pan is too hot. If it spreads without sizzling, the pan is not hot enough.\n\nStir the batter. Pour approximately 80–100ml (about 5–6 tbsp) into the centre of the pan. Immediately tilt and swirl the pan in a circular motion to spread the batter into a thin, even round sheet covering the full pan surface. Work quickly — the batter begins to set within 5 seconds of contact with the pan, and unswirled batter produces a thick centre and thin edges rather than an even sheet.\n\nPlace the lid on the pan immediately after spreading. Cook for 90 seconds to 2 minutes. The sheet is ready when:\n\nThe entire surface has turned from white and opaque to slightly translucent with no remaining wet patches.\nThe edges of the sheet have begun to curl slightly away from the pan surface.\nThe sheet can be slid sideways with a spatula without tearing.\n\nSlide the sheet onto a lightly oiled flat surface — a large chopping board, a marble surface, or a lightly oiled tray. Work gently — a freshly cooked sheet is fragile. As the sheets cool, they become more handleable.\n\nRepeat until all the batter is used, stirring before each pour. Stack the finished sheets with a light brush of oil between each layer to prevent sticking.`,
        tip: 'The first sheet from every batch is always imperfect — it tests the pan temperature and the batter consistency simultaneously. Do not judge the method by the first sheet. Adjust the heat and batter consistency based on what you observe, then proceed. By the third sheet, the process has found its rhythm.',
    },
    {
        step: 5,
        title: 'Cutting the Noodles',
        content: `Allow the cooked sheets to cool for 5 minutes before cutting — a warm sheet tears more easily than a cooled one. Stack 3–4 sheets with light oiling between each layer.\n\nFor pho noodles (banh pho tuoi): cut across the stacked sheets into strips 4–5mm wide for standard pho width, or 8–10mm wide for wide-noodle pho. Use a sharp knife with a single clean downward stroke — sawing tears the sheets. The strips should be flat, uniform, and slightly translucent.\n\nFor banh cuon (steamed rice rolls): do not cut. Roll each warm sheet around the filling immediately after it comes off the pan, before it cools. The warmth makes the sheet pliable enough to roll without tearing.\n\nFor wider rice noodles used in stir-fries: cut into strips 1.5–2cm wide. These are the noodles used in pho xao (stir-fried pho noodles) and hu tieu xao.\n\nSeparating cut noodles: immediately after cutting, toss the noodle strips with a small amount of neutral oil to prevent clumping. Fresh rice noodles stick together rapidly as the starch on the cut surfaces contacts other cut surfaces. The oil creates a barrier between them.\n\nFor immediate use: blanch the cut noodles in boiling water for 10–15 seconds, drain, and add to the bowl before pouring the broth over. Do not blanch longer — fresh noodles cook far faster than dried and become soft and mushy within 30 seconds of full boiling.\n\nFor storage: fresh cut noodles keep refrigerated for up to 2 days. Toss with additional oil before refrigerating and bring to room temperature before blanching — cold noodles take longer to separate and warm through in the broth.`,
        tip: 'Cut the noodle strips to length as well as width — 15–20cm is the ideal pho noodle length. Strips that are the full width of the sheet (30cm+) are unwieldy in a bowl and difficult to eat with chopsticks. Cut each stack of strips in half crosswise after cutting to width.',
    },
    {
        step: 6,
        title: 'Troubleshooting and Variations',
        content: `Sheet tears during spreading: the pan was too hot when the batter was poured, causing the bottom to set before the top could be spread. Reduce the heat slightly or pour the batter more quickly before swirling.\n\nSheet is too thick and doughy: too much batter per sheet, or the batter is too thick. Use less batter per pour and thin the batter with 1–2 tbsp additional water.\n\nSheet sticks to the pan: the pan was insufficiently oiled, or the heat was too low and the starch bonded to the pan surface before the top could set. Add a small additional brush of oil and increase the heat slightly.\n\nSheet is opaque and dull rather than slightly translucent: the ratio of tapioca starch to rice flour is too low, or the sheets were not cooked long enough. Add 10g more tapioca starch to the remaining batter and ensure the cooking time reaches the full translucency indicator before removing the lid.\n\nNoodles clump immediately after cutting: insufficient oil coating after cutting, or the sheets were cut while still too warm. Allow sheets to cool fully before cutting and toss with oil immediately after.\n\nVariation — pandan pho noodles: replace 100ml of the water in the batter with pandan extract. The noodles turn pale green and carry a faint pandan fragrance. Used in some Vietnamese dessert preparations rather than savoury pho.\n\nVariation — turmeric noodles: add 0.5 tsp turmeric powder to the batter. The yellow noodles are characteristic of some Central Vietnamese preparations and add a very faint earthiness alongside the colour.\n\nThicker sheets for banh uot: increase the batter pour to 120–130ml per sheet and reduce swirling — allow the batter to spread by gravity into a thicker sheet. Cook for 2.5 minutes instead of 90 seconds. These thicker sheets are used for banh uot (wet rice sheets eaten with scallion oil and fried shallots) rather than as noodles.`,
        tip: 'Make a large batch of batter on the weekend and store it refrigerated for up to 3 days. Cook fresh sheets as needed — the 2-minute cooking time per sheet means fresh noodles for a weeknight pho are achievable in 10 minutes from a pre-made batter. The batter actually improves slightly after 24 hours of refrigeration as the starch fully hydrates.',
    },
];

const RELATED = [
    { title: 'Crystal-Clear Pho Broth', href: '/recipes/pho-bo-ha-noi', time: '8 hrs' },
    { title: 'How to Toast & Grind Vietnamese Spices', href: '/how-to/toast-grind-vietnamese-spices', time: '10 min read' },
    { title: 'How to Make Pandan Extract (Nước Lá Dứa)', href: '/how-to/pandan-extract', time: '9 min read' },
];

export default function PhoNoodlesGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Make Pho Noodles from Scratch</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#0369A1', background: '#0369A115',
                        padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase',
                    }}>Rice & Noodles</span>
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 11 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Make Pho Noodles from Scratch (Bánh Phở Tươi)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Rice flour, tapioca starch, a non-stick pan and a lid — the batter ratio, swirl technique, and cutting method for fresh pho noodles that dried noodles cannot replicate.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Intermediate' },
                        { label: 'Batter Rest', value: '30 minutes' },
                        { label: 'Per Sheet', value: '90 seconds' },
                        { label: 'Makes', value: '4 generous servings' },
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
                                background: '#0369A1', color: '#fff',
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
                        Recipes that use fresh pho noodles
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
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#0369A1'; }}
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