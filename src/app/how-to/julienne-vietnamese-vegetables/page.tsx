'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Julienne Matters in Vietnamese Cooking',
        content: `Julienne is not decorative in Vietnamese cooking — it is functional. Thin, uniform strips of daikon, carrot, green mango, or cucumber behave differently from chunks or slices: they absorb pickling liquid faster, they release moisture more evenly when salted, they tangle with herbs and noodles rather than sitting separate, and they cook through in seconds in a hot wok without losing their snap.

The standard Vietnamese julienne is 4–5cm long and 2–3mm thick — thinner than a French julienne, more consistent than a rough shred. Once you can produce this cut reliably by hand, every Vietnamese salad, pickle, and stir-fry improves immediately.`,
        tip: null,
    },
    {
        step: 2,
        title: 'The Right Vegetables & Their Differences',
        content: `Each vegetable has different density and moisture content that affects how you hold and cut it.

Daikon (củ cải trắng) is the most forgiving — firm, dry, and predictable. It holds its shape through the entire cut and is the best vegetable to practise on.

Carrot (cà rốt) is slightly harder and more cylindrical. Trim the tapered ends first to create a flat working surface before slicing.

Green mango (xoài xanh) is fibrous and slightly slippery from natural juices. Peel completely, then work quickly before the surface oxidises.

Cucumber (dưa leo) has a soft, seedy core that turns watery if cut into it. Slice around the outside only, stopping before the seeds — discard the core or use it in stock.

Cabbage (bắp cải) requires a different approach entirely — it is shredded rather than julienned, with the head quartered and sliced cross-grain at 1–2mm.`,
        tip: 'Always peel daikon and carrot fully before cutting. The outer layer is tougher and more bitter than the interior and will make the finished dish uneven.',
    },
    {
        step: 3,
        title: 'Knife Setup & Board Position',
        content: `Use a chef's knife or a Chinese cleaver — both work well. The knife must be sharp: a dull blade crushes the cell walls instead of cutting cleanly, releasing excess moisture and producing strips that go limp faster.

Place a damp cloth under the cutting board to prevent slipping. Vietnamese julienne involves fast, rhythmic cuts and a sliding board is a safety hazard and a precision problem.

Your guide hand forms a claw — fingertips curled under, knuckles forward as a fence for the blade. The knife should never lift higher than your knuckles. This is not a speed technique; it is a control technique that produces consistent thickness.`,
        tip: null,
    },
    {
        step: 4,
        title: 'The Three-Stage Cut',
        content: `Stage one — create flat surfaces. Round vegetables roll. Before any julienne cut, slice a thin plank off one side of the vegetable to create a flat base. Place the flat side down. Now it cannot move.

Stage two — slice into planks. Cut the vegetable lengthwise into planks 2–3mm thick, keeping each slice parallel. Stack the planks no more than 3–4 high — stacking more causes the stack to slide.

Stage three — cut the planks into strips. Align the planks and cut lengthwise again at 2–3mm intervals, maintaining the same thickness as the planks. The result is uniform strips 4–5cm long and 2–3mm square in cross-section.

For longer vegetables like daikon, cut a 5cm section first, then work through the stages on each section before moving to the next.`,
        tip: 'The most common mistake is making the planks too thick. If your final strips look more like batons than matchsticks, your plank stage is where thickness was added. Aim to see light through each plank when held up.',
    },
    {
        step: 5,
        title: 'Mandoline vs Knife — When to Use Which',
        content: `A mandoline produces faster, more consistent planks than a knife at the slicing stage, which is genuinely useful when cutting large volumes — a full daikon for do chua, for instance. However, the julienne attachment on most mandolines produces strips that are either too thin (they go limp in pickling liquid) or too thick (they do not absorb seasoning evenly).

The recommended approach: use the mandoline for the plank stage, then finish with a knife for the julienne cuts. You get the speed and consistency of the mandoline with the thickness control of handwork.

Always use the hand guard. Vietnamese home cooks who have used mandolines for years still cut themselves on them. The guard is not optional.`,
        tip: null,
    },
    {
        step: 6,
        title: 'After Cutting — Salt, Rinse, or Use Directly',
        content: `What you do immediately after julienning depends on the dish.

For pickles (do chua, dưa cải): toss with salt at 1% of the vegetable weight, leave 10 minutes to draw out moisture, squeeze firmly, then proceed to the pickling liquid. Skipping this step produces watery pickles that dilute the brine.

For salads (gỏi gà, xoài trộn): salt briefly, squeeze, then rinse under cold water before dressing. This removes excess moisture without over-softening the strips.

For stir-fries: use directly from the knife. The wok's heat will handle the moisture. Adding pre-salted strips to a hot wok makes them release water immediately and drop the temperature — the vegetables steam instead of fry.

For raw garnish or fresh rolls: use immediately. Cut just before assembly — julienned vegetables begin to dry and curl within 20 minutes at room temperature.`,
        tip: 'Store cut julienned vegetables submerged in cold water in the refrigerator if not using immediately. They stay crisp for up to 4 hours. Drain and pat dry before use.',
    },
];

const RELATED = [
    { title: 'Pickled Daikon & Carrot (Đồ Chua)', href: '/recipes/banh-mi', time: '40 min' },
    { title: 'Green Mango Salad with Dried Fish', href: '/recipes/xoai-tron-ca-kho', time: '20 min' },
    { title: 'Gỏi Gà Hành Tây', href: '/recipes/goi-ga-hanh-tay', time: '35 min' },
];

export default function JulienneGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Julienne Vietnamese Vegetables</span>
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
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 8 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Julienne Vietnamese Vegetables
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Daikon, carrot, green mango — the correct knife angle, strip thickness, and when a mandoline helps and when it does not. Master this one cut and every Vietnamese salad, pickle, and stir-fry improves immediately.
                </p>

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                {/* Quick info row */}
                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Essential' },
                        { label: 'Time to Learn', value: '1–2 sessions' },
                        { label: 'Key Tools', value: 'Chef\'s knife or cleaver' },
                        { label: 'Used In', value: 'Salads, pickles, stir-fries' },
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
                        {/* Step header */}
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

                        {/* Content */}
                        <div style={{ paddingLeft: 52 }}>
                            {section.content.split('\n\n').map((para, j) => (
                                <p key={j} style={{
                                    fontSize: 15, color: 'rgba(75,46,26,0.75)',
                                    lineHeight: 1.8, marginBottom: 14,
                                }}>
                                    {para}
                                </p>
                            ))}

                            {/* Tip box */}
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

                        {/* Divider */}
                        {i < SECTIONS.length - 1 && (
                            <div style={{ height: 1, background: 'rgba(75,46,26,0.06)', marginTop: 48 }} />
                        )}
                    </motion.div>
                ))}

                {/* Related recipes */}
                <div style={{
                    background: '#fff', border: '1px solid rgba(75,46,26,0.08)',
                    borderRadius: 20, padding: '28px 28px',
                    marginTop: 16,
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

                {/* Back link */}
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