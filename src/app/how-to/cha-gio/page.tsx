'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Chả Giò Is and Why the Technique Matters',
        content: `Cha gio — Vietnamese fried spring rolls — is one of the most technically demanding of the Vietnamese fried preparations, and one of the most rewarding when done correctly. The correct result is a roll that shatters audibly when bitten, revealing a filling of seasoned pork, shrimp, glass noodles, wood ear mushroom, and vegetables that is moist and cohesive without being wet. The skin is uniformly golden, blister-free, and so crisp that it stays shatteringly crunchy for ten minutes after frying — not the soft, greasy rolls that most people have encountered at unremarkable restaurants.\n\nTwo technical details produce the difference between good and great cha gio: the wrapper choice and the rolling technique. Rice paper wrappers produce the most authentic, crispiest result but require more handling skill — they must be briefly moistened before rolling, sealed precisely, and fried at exactly the correct temperature or they blister rather than crisp. Wheat-based spring roll wrappers are more forgiving, easier to seal, and produce a good result, but the texture is different — more chewy at the edges, less dramatically crisp throughout.\n\nThis guide covers both wrapper types with the specific technique each requires, the filling that works with both, and the frying method that produces maximum crunch with minimum oil absorption.`,
        tip: null,
    },
    {
        step: 2,
        title: 'The Filling — Ingredients, Texture, and Seasoning',
        content: `The filling is the foundation and it must be prepared and seasoned before rolling begins. A wet, under-seasoned, or improperly textured filling produces rolls that steam from the inside during frying, softening the wrapper before it can fully crisp.\n\nFor 20–24 rolls (serves 4–6):\n\n300g ground pork (20% fat — lean pork produces a dry filling)\n150g raw shrimp, peeled and roughly chopped (not minced — the texture of small shrimp pieces improves the final roll)\n30g glass noodles (bún tàu / miến), soaked in cold water 15 minutes, drained, cut into 2–3cm lengths\n20g dried wood ear mushroom (nấm mèo), soaked 20 minutes, drained, finely sliced\n1 medium carrot, finely julienned\n2 shallots, minced\n2 garlic cloves, minced\n1 tsp fish sauce\n0.5 tsp sugar\n0.5 tsp white pepper\n1 egg yolk (binds the filling)\n\nCombine all filling ingredients and mix thoroughly with clean hands for 2 minutes until cohesive. The filling should hold its shape when pressed into a ball but not be sticky or wet. If it seems wet, add 1 tsp of tapioca starch and mix again.\n\nThe most important preparation step: squeeze any excess moisture from the soaked noodles and mushrooms before adding to the filling. Wet filling is the primary cause of oil-absorbing, soft-skinned cha gio. Press the soaked ingredients firmly in a clean cloth to remove as much liquid as possible.`,
        tip: 'Season the filling slightly more aggressively than seems correct before rolling. The wrapper absorbs some of the seasoning during frying and the finished roll always tastes less seasoned than the raw filling. A filling that tastes perfectly balanced raw will taste slightly flat in the finished roll.',
    },
    {
        step: 3,
        title: 'Rice Paper Wrappers — Preparation and Handling',
        content: `Vietnamese rice paper (bánh tráng) produces the most authentic cha gio texture — shatteringly crisp, uniformly golden, with a slightly bubbled surface that is the visual signature of the dish. It requires more handling care than wheat wrappers but produces a superior result.\n\nChoosing rice paper: use 22cm diameter round rice paper specifically labelled for spring rolls. Thinner papers (used for goi cuon) are too delicate and tear during frying. Thicker papers produce a tougher wrapper. The spring roll weight is typically labelled on the packet.\n\nMoisteningmethod: do not submerge the rice paper in water. Fill a large plate or shallow bowl with cold water. Dip the rice paper for 2–3 seconds only — just enough to begin softening it. Remove and place on a clean, slightly damp tea towel. The paper will continue to soften from residual moisture over the next 30–60 seconds. It should be pliable enough to roll without cracking but not fully softened and sticky.\n\nThe most common mistake with rice paper: over-softening. A rice paper that is too wet stretches and tears during rolling and produces a thick, doughy wrapper edge at the seal that fries unevenly. The paper should still have slight resistance when you fold it — it finishes softening during rolling.\n\nIn cold kitchens (below 18°C): rice paper softens more slowly. Increase the dip time to 4–5 seconds.\n\nIn warm kitchens (above 24°C): rice paper softens faster and becomes sticky. Work quickly and keep the remaining papers covered with a damp cloth to prevent them from drying out while you roll.`,
        tip: 'Work with one rice paper at a time. Many instructions say to soak several in advance — this leads to papers that are over-softened by the time you reach them. Soak, lay flat, fill, and roll each paper before beginning the next. The extra 20 seconds per roll is worth the consistency.',
    },
    {
        step: 4,
        title: 'Rolling Technique — The Tight, Sealed Roll',
        content: `A cha gio that unrolls in the oil is an irretrievable disaster. The rolling technique must produce a roll that is sealed securely enough to survive 5 minutes in 180°C oil without opening.\n\nFor rice paper wrappers:\n\nPlace the softened rice paper on the damp tea towel. Add 2 tbsp of filling in a compact log shape, positioned in the lower third of the paper. Leave 3cm clear at the left and right sides and 4cm clear at the bottom edge.\n\nFold the bottom edge up over the filling firmly — the first fold should be tight, covering the filling completely. Press down gently to compact the filling inside.\n\nFold the left side in, then the right side in, creating an envelope shape. The side folds should overlap the ends of the filling log by at least 1cm on each side — insufficient side folds allow the filling to escape during frying.\n\nRoll forward tightly and continuously, applying even pressure across the length of the roll with each rotation. Do not stop mid-roll — pausing creates air pockets. The completed roll should be firm to the touch, with no soft spots or air pockets, and the final edge of the rice paper should be sealed against the roll body.\n\nFor wheat spring roll wrappers: the technique is the same but the wrapper is slightly more forgiving. Brush the final edge with a small amount of beaten egg or water before sealing — this creates an adhesive that holds the wrapper more securely than rice paper's natural stickiness.\n\nAfter rolling, place seam-side down on a lightly oiled tray. Do not stack the uncooked rolls — they will stick together. Cover with a damp cloth if not frying immediately.`,
        tip: 'Roll the cha gio as tightly as possible without tearing the wrapper. A loose roll contains air pockets that expand during frying, causing the wrapper to bubble and separate from the filling. Tight rolls produce the uniformly crisp, blister-free surface that defines authentic cha gio.',
    },
    {
        step: 5,
        title: 'Frying — Temperature, Batches, and the Double-Fry Option',
        content: `Oil temperature is the single most important variable in frying cha gio. Too hot and the wrapper browns before the filling is cooked through and the oil absorption is higher. Too cool and the wrapper is pale and oil-saturated before it can crisp.\n\nCorrect temperature: 170–175°C for rice paper wrappers, 180°C for wheat wrappers. Rice paper requires slightly lower temperature than wheat because it crisps faster — at 180°C rice paper rolls brown in 3 minutes but may not be cooked through to the centre.\n\nBatch size: fry 5–6 rolls at a time in a wok with 500ml of oil. Crowding drops the oil temperature and produces uneven results — the rolls that go in first overcook while the later-added rolls are still pale. Allow the oil to return to temperature between batches.\n\nFrying time: 5–6 minutes for rice paper rolls, 4–5 minutes for wheat rolls, turning every 90 seconds for even browning. The roll is ready when it is uniformly deep golden — not pale gold, not brown, but a consistent deep amber that is the same colour on all surfaces.\n\nDouble-fry method (for maximum crunch that holds longer): fry at 160°C for 4 minutes until cooked through but only lightly golden. Remove and drain. Allow to rest for at least 10 minutes. Return to oil at 190°C for 90 seconds until deep golden and fully crisped. This method produces rolls that stay crisp for 15–20 minutes after frying rather than the 5–10 minutes of a single fry — essential when serving to multiple people and the timing of individual servings is unpredictable.\n\nDrain on a wire rack, not paper towels. The wire rack allows air circulation under the roll and prevents the bottom surface from softening from steam.`,
        tip: 'Never cover cha gio after frying. Covering traps steam that immediately softens the wrapper. Serve uncovered on the wire rack or on a plate with space between rolls. If reheating, use an oven at 180°C for 5 minutes — it restores most of the crunch without re-frying.',
    },
    {
        step: 6,
        title: 'Serving, Dipping Sauce, and Make-Ahead Options',
        content: `Cha gio is served wrapped in lettuce leaves with fresh herbs — rau song (herb plate) including mint, Vietnamese coriander (rau ram), and perilla (tia to) — with nuoc cham alongside. The diner wraps a piece of roll in a lettuce leaf with herbs, dips in the sauce, and eats in one or two bites.\n\nNuoc cham for cha gio: the standard ratio — 3 tbsp fish sauce, 3 tbsp lime juice, 2 tbsp sugar, 4 tbsp water, 2 garlic cloves (minced), 1 chilli (sliced). Adjust lime and fish sauce balance to taste. The dipping sauce should be assertively sour-salty with clear sweetness and enough heat to build slightly after the bite.\n\nAlternative serving — broken over rice: cha gio broken into thirds and served over com tam broken rice with scallion oil and cucumber is a classic Saigon street food presentation. The roll pieces absorb some of the scallion oil and fish sauce dressing, softening slightly but retaining enough crunch for textural contrast.\n\nMake-ahead options:\n\nUncooked rolls freeze well. Roll as directed, place on a lined tray without touching, freeze until solid (1–2 hours), then transfer to a sealed bag. Fry directly from frozen at 160°C — add 2 minutes to the frying time. Frozen rolls keep for 1 month.\n\nPartially fried rolls (first fry only) can be refrigerated for up to 24 hours and finished with the second fry just before serving. This is the most practical method for dinner parties — do the first fry in the afternoon, second fry takes 90 seconds per batch when guests arrive.`,
        tip: 'Freeze a portion of every batch you make. The effort of making cha gio is mostly in the rolling — the frying is fast. A bag of frozen uncooked rolls means restaurant-quality cha gio is 8 minutes away from a cold start at any time. This single habit makes Vietnamese home cooking significantly more practical on weeknights.',
    },
];

const RELATED = [
    { title: 'Fresh Spring Rolls (Gỏi Cuốn)', href: '/recipes/fresh-spring-rolls', time: '30 min' },
    { title: 'How to Deep Fry Without a Thermometer', href: '/how-to/deep-fry-no-thermometer', time: '10 min read' },
    { title: 'How to Balance Nuoc Cham', href: '/how-to/nuoc-cham-guide', time: '5 min' },
];

export default function ChaGioGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Make Vietnamese Egg Rolls (Chả Giò)</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#DC2626', background: '#DC262615',
                        padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase',
                    }}>Essential Techniques</span>
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 11 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Make Vietnamese Egg Rolls (Chả Giò)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Dry filling, tight roll, correct oil temperature — the three variables that produce the shatteringly crisp wrapper and moist interior that most restaurant cha gio never achieves.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Intermediate' },
                        { label: 'Makes', value: '20–24 rolls' },
                        { label: 'Fry Temp', value: '170–175°C (rice paper)' },
                        { label: 'Freezes', value: 'Yes — up to 1 month' },
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
                        Related guides and recipes
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
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#DC2626'; }}
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