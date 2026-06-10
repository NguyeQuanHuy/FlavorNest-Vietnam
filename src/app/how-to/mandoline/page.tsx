'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Vietnamese Cooking Benefits from a Mandoline',
        content: `Vietnamese cooking demands a level of uniformity in vegetable and fruit preparation that is difficult to achieve consistently with a knife alone. The paper-thin slices of cucumber in goi cuon, the 2mm julienne of daikon and carrot in do chua, the translucent rounds of green mango in goi — these dimensions are not arbitrary. They determine texture, they determine how quickly the vegetable absorbs dressing or brine, and they determine whether the finished dish has the visual refinement that distinguishes a well-made Vietnamese preparation from a roughly assembled one.\n\nA mandoline makes this precision achievable at speed. The same daikon julienne that takes 8 minutes of careful knife work takes 90 seconds on a mandoline set to 2mm. More importantly, the mandoline produces perfectly consistent thickness across every piece — something that even a skilled cook cannot fully replicate by hand over a large volume of vegetable.\n\nThe trade-off is danger. A mandoline blade is sharper than most kitchen knives, always exposed, and designed to be used with fast, repetitive motions that create ideal conditions for a moment of inattention to result in a serious cut. The mandoline injury is one of the most common serious kitchen injuries among home cooks who have it — not professional cooks who use it daily with trained respect, but home cooks who bring it out occasionally without the muscle memory that makes the tool safe.\n\nThis guide covers both sides: how to choose the right mandoline for Vietnamese cooking and how to use it in a way that eliminates the risk of injury entirely.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Choosing the Right Mandoline — Types and Features',
        content: `Mandolines range from simple plastic frame slicers costing €8 to professional stainless steel models costing €150. For Vietnamese home cooking, the correct choice is somewhere in the middle — a model with enough blade quality to maintain sharpness through regular use and enough stability to remain safe, without the excessive cost of professional equipment.\n\nFlat frame mandoline (most common): the standard type — a flat slicing surface with a blade set at one end, adjustable for thickness. Simple, effective, and the correct choice for most Vietnamese applications. The flat surface allows the vegetable to travel smoothly without wobbling, which is essential for producing even slices. Look for: a sturdy frame that does not flex under pressure, a blade that is visibly sharp and smoothly finished (not serrated), and a thickness adjustment that clicks into defined positions rather than sliding freely.\n\nBox mandoline: a rectangular box with multiple blade positions on different sides. More stable than flat frame models because it sits on four feet. Includes multiple blade configurations — julienne attachments, waffle cuts. Good for households that use a mandoline frequently for diverse preparations. Slightly harder to clean due to the enclosed design.\n\nJapanese benriner: a compact, lightweight plastic frame mandoline that is particularly popular in Asian cooking. Very sharp blade, simple design, and affordable (€15–25). The standard choice at Vietnamese home kitchens and small restaurants. The narrow width (14cm) limits it to smaller vegetables — adequate for daikon, carrot, cucumber, and mango, which covers the primary Vietnamese applications.\n\nDo not buy: mandolines with plastic blades (they cannot maintain adequate sharpness), mandolines with no thickness adjustment (single-thickness tools are not versatile enough for Vietnamese cooking), or mandolines without a hand guard included.`,
        tip: 'Buy the hand guard at the same time as the mandoline, not as an afterthought. Many mandolines are sold with inadequate guards that do not grip the vegetable securely — if the included guard is poor, purchase a separate cut-resistant glove (Schnittschutzhandschuh) at the same time. This is not optional equipment.',
    },
    {
        step: 3,
        title: 'Blade Types and Settings for Vietnamese Applications',
        content: `Vietnamese cooking requires two primary mandoline functions: straight slicing and julienne cutting. Understanding which blade setting produces the correct result for each dish prevents the common errors of wrong thickness or wrong cut type.\n\nStraight slicing — thickness settings by dish:\n\n1–1.5mm: paper-thin cucumber rounds for goi cuon garnish and cold noodle bowls. At this thickness, cucumber is translucent and rolls without breaking.\n\n2mm: the standard Vietnamese pickle thickness for do chua (pickled daikon and carrot). Thin enough to pickle quickly and eat comfortably, thick enough to retain crunch.\n\n3mm: green mango slices for goi and xoai tron. Slightly thicker for structural integrity in salads where the mango is tossed with dressing.\n\n4–5mm: onion rings for soaking, fennel for salads, firm vegetable slices for stir-fry preparation.\n\nJulienne cutting:\n\n2mm julienne: the correct size for do chua daikon and carrot — the Vietnamese standard for pickled vegetables. Also correct for green mango in xoai tron.\n\n3mm julienne: for salad applications where slightly more texture is desired — goi ga, green papaya salad.\n\nNote on julienne attachments: the julienne blade on most mandolines requires a two-step process — first slice the vegetable into planks at the desired thickness, then pass through the julienne blade. Some mandolines have an integrated julienne function that does both steps simultaneously; these are more convenient but produce slightly less uniform results than the two-step method.`,
        tip: null,
    },
    {
        step: 4,
        title: 'The Non-Negotiable Safety Rules',
        content: `Mandoline injuries are serious — they are not small cuts but deep lacerations that often require medical attention. Every experienced cook who has been using a mandoline for years has a story about the moment inattention caused an injury. The rules below are not precautions for beginners. They apply every time, to every user, at every skill level.\n\nRule one — always use the hand guard or cut-resistant glove. No exceptions. The hand guard exists because the most common injury happens in the final 3–4cm of a vegetable, when the piece is too small to hold safely without the guard. Many experienced cooks skip the guard for the first three-quarters of the vegetable and use it only for the last piece — this is how injuries happen. Use it from the first slice.\n\nRule two — slow, deliberate strokes. The mandoline does not require force or speed. A slow, even stroke produces better slices and gives you time to feel if the guard slips before a blade makes contact with your hand. The speed a mandoline enables is the speed of volume — making many slices quickly — not the speed of individual strokes.\n\nRule three — never look away from the blade. Conversation, looking at a recipe, checking a phone — all of these have preceded mandoline injuries. The blade must have full visual attention throughout every stroke.\n\nRule four — always cut away from your body. Position the mandoline on a stable surface with the blade pointing away from your torso. A stroke that overshoots should send the vegetable forward, not toward you.\n\nRule five — stop before the vegetable becomes too small. When the piece is small enough that the hand guard cannot grip it securely — typically when it is smaller than 4cm in any dimension — stop and finish with a knife. The last small piece of daikon is not worth a trip to the emergency room.`,
        tip: 'Keep a cut-resistant glove (Schnittschutzhandschuh) hanging next to the mandoline, not stored in a drawer. The extra step of finding and putting on a glove is precisely the moment at which most people decide to use the mandoline without protection "just this once." Visible, immediately accessible safety equipment gets used.',
    },
    {
        step: 5,
        title: 'Technique for Vietnamese Applications',
        content: `Do chua (pickled daikon and carrot):\n\nSet the mandoline to 2mm straight slice. Peel the daikon and carrot. Cut each into 6–7cm sections. Slice each section into 2mm planks. Stack 3–4 planks and use a knife to cut into 2mm julienne strips — or use the julienne attachment if the mandoline has one. Transfer immediately to salted water to prevent the daikon from drying out between slicing and salting.\n\nGreen mango (xoai xanh) for goi and xoai tron:\n\nPeel the mango. Slice each cheek away from the stone at 3mm on the straight slicing setting. Then julienne each cheek at 2–3mm. Work quickly — mango oxidises and browns within minutes of slicing. Have a bowl of lime juice water ready and add the sliced mango immediately.\n\nCucumber for goi cuon and cold dishes:\n\nDo not peel. Set to 1.5mm. Slice the entire cucumber into rounds. Alternatively, cut the cucumber in half lengthwise, remove the seeds with a spoon (they add water to the dish), and slice the halves at 1.5mm into half-moons.\n\nOnion for soaking (goi ga, banh mi topping):\n\nSet to 2mm. Halve the onion through the root. Place cut side down and slice from the non-root end toward the root, stopping just before the root — the root holds the layers together during slicing and prevents onion rings from separating and flying off the mandoline.\n\nFor all applications: work in one continuous session rather than stopping and starting. A warmed-up rhythm is safer than repeated cold starts, and the vegetable quality is more uniform when processed continuously.`,
        tip: 'Chill firm vegetables — daikon, carrot, green mango — in the refrigerator for 30 minutes before slicing on the mandoline. Cold vegetables are firmer and travel across the blade more smoothly than room-temperature ones. They also hold their shape better in the finished preparation rather than softening slightly from the heat of handling.',
    },
    {
        step: 6,
        title: 'Cleaning, Blade Care, and Storage',
        content: `Clean the mandoline immediately after use — never leave it with food residue on the blade. Food acids (from citrus, vinegar, mango) etch the blade surface over time if left in contact, degrading sharpness faster than use does.\n\nCleaning: rinse under running water while the food residue is still moist. Use a stiff brush to clean the blade — never a cloth or sponge, which will be cut by the blade even when cleaning slowly. A dedicated vegetable brush or an old toothbrush is the correct tool. Clean along the blade, not across it.\n\nNever put a mandoline in the dishwasher. The high heat and aggressive detergent of a dishwasher damages the blade edge and, on models with plastic components, warps the frame over time. Hand washing is the only correct cleaning method.\n\nDrying: dry the blade surface with a cloth held by the non-blade end — wipe along the blade direction, away from the edge. Store in the original box or in a blade guard if the mandoline came with one. Do not store loose in a drawer — the blade will cut anything else stored nearby and the blade edge will be damaged by contact with other metal objects.\n\nBlade sharpening: most home mandoline blades cannot be sharpened at home — the blade geometry requires professional sharpening equipment. A mandoline blade that no longer slices cleanly (dragging through vegetables rather than cutting) should be replaced rather than sharpened. For a benriner or mid-range flat mandoline, the blade is typically a replaceable component available from the manufacturer.\n\nInspection before each use: before using, run your fingernail lightly across (not along) the blade edge. A sharp blade will catch the fingernail immediately. A dull blade will let the fingernail slide. Inspect also for any chips or notches in the blade edge — these produce irregular cuts and should be replaced before use.`,
        tip: 'Store the mandoline vertically in a knife block slot or mounted on a magnetic knife strip if the frame is metal — this keeps the blade away from accidental contact and makes the mandoline visible and accessible rather than buried in a cabinet. Accessibility increases use; use builds the habit and muscle memory that makes the tool safe.',
    },
];

const RELATED = [
    { title: 'How to Julienne Vietnamese Vegetables', href: '/how-to/julienne-vietnamese-vegetables', time: '8 min read' },
    { title: 'How to Make Vietnamese Pickled Mustard Greens (Dưa Cải)', href: '/how-to/dua-cai', time: '9 min read' },
    { title: 'Green Mango Salad with Dried Fish', href: '/recipes/xoai-tron-ca-kho', time: '20 min' },
];

export default function MandolineGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Choose & Use a Mandoline Safely</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#4B2E1A', background: '#4B2E1A15',
                        padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase',
                    }}>Kitchen & Equipment</span>
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 10 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Choose and Use a Mandoline Safely
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    The right blade, the hand guard you actually use, and the five non-negotiable safety rules — everything needed to make do chua, goi, and xoài trộn at the correct Vietnamese thickness without injury.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Best First Buy', value: 'Japanese benriner' },
                        { label: 'Key Safety Tool', value: 'Cut-resistant glove' },
                        { label: 'Do Chua Setting', value: '2mm julienne' },
                        { label: 'Never Do', value: 'Skip the hand guard' },
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
                                background: '#4B2E1A', color: '#fff',
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
                        Guides and recipes that use the mandoline
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
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#4B2E1A'; }}
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