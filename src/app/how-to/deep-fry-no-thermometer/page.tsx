'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Temperature Control Is the Whole Game in Deep Frying',
        content: `Deep frying is not complicated but it is precise. The difference between oil at 160°C and oil at 190°C is the difference between pale, greasy food and golden, crisp food. Too cold and the food absorbs oil before the surface sets — the result is heavy, sodden, and soft. Too hot and the exterior burns before the interior cooks through. The correct temperature window for most Vietnamese fried dishes is narrow: 170–190°C, depending on what is being fried.\n\nA kitchen thermometer removes the guesswork entirely and is worth buying if you fry regularly. But Vietnamese home cooks have been producing perfect fried food without thermometers for generations, using visual and tactile cues that are reliable once you understand what you are looking for.\n\nThe goal of this guide is to teach those cues — how to read the oil by sight, sound, and behaviour rather than by number. Once internalised, these techniques work across every frying task: spring rolls, fried tofu, chicken, squid, pork skin, banana fritters.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Choosing the Right Oil and Pan',
        content: `Oil choice affects frying temperature stability and flavour. Use a neutral oil with a high smoke point — refined vegetable oil, sunflower oil, rice bran oil, or refined peanut oil. These oils can reach 190°C without breaking down. Avoid extra virgin olive oil, unrefined coconut oil, or sesame oil — their smoke points are too low for deep frying and their flavours are too assertive.\n\nFor Vietnamese cooking specifically, refined peanut oil is the traditional choice and produces a clean, slightly nutty result that suits the cuisine. It is widely available at Asian grocery stores and handles high heat well.\n\nPan choice matters as much as oil choice. Use a wok, a deep saucepan, or a Dutch oven — something with high sides that contains the oil safely when it bubbles up around food. Never fill the pan more than one-third full of oil — when food is added, the oil level rises and hot oil splashing over the sides of the pan is a serious hazard.\n\nA wok is the Vietnamese home cook's standard frying vessel. Its curved shape means a smaller volume of oil covers a larger surface area than in a straight-sided pot, which is economical and produces good results.`,
        tip: 'Use enough oil to submerge the food completely or at least halfway. Shallow frying in too little oil means one side fries while the other steams — the result is uneven and the surface that was touching the pan is always darker than the surface that was facing up.',
    },
    {
        step: 3,
        title: 'The Five Tests for Oil Temperature Without a Thermometer',
        content: `Test 1 — The wooden chopstick test (most reliable): Insert a dry wooden chopstick or the handle of a wooden spoon vertically into the oil until it touches the bottom. If small bubbles form steadily around the wood, the oil is at approximately 160–170°C — correct for a first fry or for delicate items. If the bubbles are vigorous and continuous, the oil is at 180–190°C — correct for a second fry or for items that need a fast, crisp surface. If there are no bubbles, the oil is not ready. If the wood immediately smokes or darkens, the oil is too hot.\n\nTest 2 — The bread cube test: Drop a 1cm cube of white bread into the oil. At 160°C it will take about 60 seconds to turn golden. At 170°C, about 40 seconds. At 180°C, about 20 seconds. At 190°C, about 10 seconds. This test is useful for calibrating your sense of timing before the first batch.\n\nTest 3 — The flour test: Pinch a small amount of flour and drop it into the oil. At the correct temperature it should sizzle and float immediately. If it sinks and sits on the bottom, the oil is too cold. If it burns immediately on contact, the oil is too hot.\n\nTest 4 — The visual shimmer test: When oil reaches approximately 160°C, it begins to shimmer visibly — small waves of heat distortion move across the surface. This is the minimum indicator that the oil is approaching frying temperature. It is not sufficient on its own but confirms the oil is heating correctly.\n\nTest 5 — The smoke test: A thin wisp of smoke rising from the surface indicates the oil is approaching or at its smoke point — for most neutral oils, this is 210–230°C, which is too hot for most frying. If you see smoke, reduce the heat immediately and allow the oil to cool for 2 minutes before testing again.`,
        tip: 'The wooden chopstick test is the most practical for Vietnamese home cooking because chopsticks are always on hand. Keep a dedicated wooden chopstick next to the stove when frying — it is faster and more informative than any other no-thermometer test.',
    },
    {
        step: 4,
        title: 'Temperature by Dish — What Each Vietnamese Fried Food Needs',
        content: `Different dishes require different oil temperatures, and understanding these distinctions prevents the most common frying mistakes.\n\n160–170°C — first fry, large items, items with raw interiors: use this lower temperature for the first fry of pork skin (bi heo), chicken pieces, and spring rolls that need to cook through before crisping. At this temperature the surface sets slowly and the interior has time to cook. The chopstick test at this temperature produces steady, moderate bubbling.\n\n180–185°C — most standard frying: fried tofu (dau phu chien), squid rings (muc chien xu), banana fritters (chuoi chien), shrimp crackers. The food cooks through and the surface crisps in the same time window. The chopstick test produces vigorous, continuous bubbling.\n\n185–190°C — second fry, items that need maximum crunch: pork skin double-fry, twice-fried spring rolls, any item that was first-fried and cooled. This high temperature drives off surface moisture rapidly and produces the shatteringly crisp result that a single fry cannot achieve. The chopstick test at this temperature produces aggressive, fast bubbling within 2 seconds of insertion.\n\nNever fry at temperatures above 190°C for Vietnamese dishes — the oil is approaching its smoke point and the food surface will overcook before the interior is done.`,
        tip: null,
    },
    {
        step: 5,
        title: 'Managing Temperature During Frying',
        content: `Oil temperature drops the moment food enters it. Cold or room-temperature food absorbs heat from the oil faster than the burner can replace it, causing a temperature drop of 10–20°C depending on the quantity of food added. This temperature drop is the reason food fried in crowded batches is pale and greasy — the oil never recovers to frying temperature before the food is done.\n\nThe solution is to fry in small batches with time between each. For a wok with 400ml of oil, fry no more than 4–6 pieces of medium-sized food at once. After removing a batch, allow the oil 60–90 seconds to recover temperature before the next batch goes in. Test with the chopstick before each batch — do not rely on the oil looking hot.\n\nFood that comes directly from the refrigerator causes a larger temperature drop than food at room temperature. Wherever possible, allow food to sit at room temperature for 15–20 minutes before frying. This is particularly important for marinated meats and coated items where a sudden temperature drop causes the coating to absorb oil before it sets.\n\nIf the oil starts smoking during frying, remove the food immediately, turn off the heat, and allow the oil to cool. Smoking oil is breaking down and will impart a bitter, acrid flavour to everything cooked in it.`,
        tip: 'If you are frying multiple batches of the same item, the later batches will cook faster than the first — the oil has been at temperature longer and is hotter. Reduce the heat slightly after the second batch to maintain consistency across all batches.',
    },
    {
        step: 6,
        title: 'After Frying — Draining, Resting, and Oil Reuse',
        content: `Drain fried food on a wire rack, not paper towels. Wire racks allow air to circulate under the food, preventing the bottom surface from steaming and going soft. Paper towels trap steam against the food and the bottom always loses its crunch within 2 minutes. For dishes where crunch is the primary virtue — muc chien xu, bi heo chien, dau phu chien — the wire rack is not optional.\n\nRest fried food for 2–3 minutes before serving. The interior continues cooking from residual heat during this time and the surface completes its crisping as moisture evaporates. Food served directly from the oil is often correctly done on the outside but slightly underdone in the centre.\n\nOil reuse: frying oil can be reused 2–3 times if it has not been overheated or used to fry strongly flavoured items like fish. After frying, allow the oil to cool completely, then strain through a fine mesh sieve lined with a paper towel to remove food particles. Store in a sealed glass jar at room temperature for up to 1 week or refrigerated for 1 month. Discard oil that has darkened significantly, smells rancid, or foams excessively when heated — these are signs the oil has broken down and will produce poor results and potentially harmful compounds when reheated.\n\nNever pour used frying oil down the drain. It solidifies in pipes and causes blockages. Collect in a sealed container and dispose of with general waste, or check if your local recycling centre accepts cooking oil.`,
        tip: 'Add a small piece of ginger or a spring onion to the oil while it heats — both absorb off-flavours from previous frying sessions and leave the oil cleaner-tasting for the current batch. Remove before frying the actual food.',
    },
];

const RELATED = [
    { title: 'Crispy Tofu with Garlic Fish Sauce', href: '/recipes/dau-phu-chien-mam-toi', time: '25 min' },
    { title: 'Crispy Breaded Squid', href: '/recipes/muc-chien-xu', time: '30 min' },
    { title: 'Crispy Pork Skin with Garlic Fish Sauce', href: '/recipes/bi-heo-chien-mam-toi', time: '50 min' },
];

export default function DeepFryGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Deep Fry Without a Thermometer</span>
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
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 10 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Deep Fry at Home Without a Thermometer
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    The chopstick test, the bread cube, the shimmer — five reliable ways to read oil temperature by sight and sound, and the temperature each Vietnamese fried dish actually needs.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Essential' },
                        { label: 'Time to Learn', value: '1–2 sessions' },
                        { label: 'Key Tools', value: 'Wok, wooden chopstick' },
                        { label: 'Used In', value: 'All Vietnamese fried dishes' },
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
                        Recipes to practise with
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