'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Deboning Matters in Vietnamese Fish Cooking',
        content: `Vietnamese fish dishes present a particular challenge that most other cuisines sidestep: the fish is often cooked and served whole — braised in a clay pot, steamed with ginger and scallion, fried and dressed with sauce — and the person eating it is expected to navigate bones at the table. This is culturally normal and the technique of eating around bones is second nature to anyone raised on Vietnamese food.\n\nBut for home cooks preparing dishes like cha ca La Vong, banh cuon ca, or any recipe where boneless fish flesh is required as an ingredient rather than a centerpiece, knowing how to fillet and debone a whole fish cleanly is a foundational skill. It is also the skill that separates buying a whole fish — fresher, cheaper, better flavour — from buying pre-cut fillets that have been sitting in packaging for an unknown amount of time.\n\nThe technique covered in this guide is applicable to the whole fish most commonly used in Vietnamese cooking: ca chep (carp), ca loc (snakehead), ca thu (mackerel), ca vược (sea bass), ca tram (grass carp), and similar round-bodied fish. Flat fish like flounder require a different approach and are not covered here.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Equipment — The Right Knife Makes Everything Easier',
        content: `A sharp knife is not optional for deboning fish. A dull knife tears flesh rather than cutting it, produces ragged fillets that fall apart during cooking, and makes pin bone removal significantly harder. If your knife does not shave arm hair cleanly, sharpen it before attempting to fillet a fish.\n\nThe ideal knife for filleting Vietnamese fish is a flexible boning knife with a blade 15–20cm long. The flexibility allows the blade to follow the contour of the spine and ribs without leaving meat behind. A stiff chef's knife works but requires more care around the rib cage.\n\nA Chinese cleaver is the traditional tool in Vietnamese kitchens and works well for the initial cuts — splitting the head, removing the tail, cutting through the backbone — but is too heavy and inflexible for the detailed rib-cage work. Many Vietnamese home cooks use a cleaver for the rough work and switch to a smaller knife for the filleting.\n\nAdditional tools: a pair of fish tweezers or needle-nose pliers for pin bone removal. These small bones run along the centre of the fillet and cannot be removed with a knife. A cutting board large enough to lay the fish flat — fish that hang off the edge of the board cannot be filleted with control. A bowl of cold water nearby for rinsing the fillets.`,
        tip: 'Chill the fish in the refrigerator for 30 minutes before filleting. Cold fish flesh is firmer and holds together better during the filleting process. Warm or room-temperature fish flesh tears more easily, particularly near the belly where the flesh is thinnest.',
    },
    {
        step: 3,
        title: 'Preparing the Fish — Scaling, Gutting, Rinsing',
        content: `If the fish has not been scaled and gutted by the fishmonger, do this before filleting.\n\nScaling: hold the fish firmly by the tail. Using the back of a knife or a fish scaler, scrape from tail to head against the direction of the scales in short, firm strokes. Work over a sink or inside a large plastic bag to contain the scales. Pay attention behind the pectoral fins and around the head — scales in these areas are easy to miss and will appear in the finished fillets.\n\nGutting: insert the tip of a knife into the vent at the base of the belly and cut toward the head, keeping the blade shallow. Open the cavity and remove the organs in one mass. Rinse the cavity thoroughly under cold running water until no blood or dark matter remains. The kidney — a dark red strip running along the spine inside the cavity — must be scraped out with a spoon or your thumbnail. Leaving it produces a bitter flavour in the finished fish.\n\nRinsing: rinse the entire fish under cold running water after gutting. Pat dry with paper towels. A dry surface is easier to grip and produces cleaner cuts than a wet, slippery fish.\n\nIf making stock from the bones after filleting: reserve the head (gills removed), spine, and tail. Rinse thoroughly and refrigerate until needed. Fish stock made from fresh bones and head produces the base for bun ca, canh ca, and numerous Vietnamese fish soups.`,
        tip: null,
    },
    {
        step: 4,
        title: 'The Filleting Cut — Following the Spine',
        content: `Place the fish on the cutting board with the backbone facing away from you and the head to your left (reverse if left-handed). The fish should lie flat with no rocking — if it rocks, make a small stabilising cut on the belly side.\n\nStep one — the initial cut: make a diagonal cut just behind the pectoral fin, angling toward the head, cutting down until you feel the spine. Do not cut through the spine. This cut creates the entry point for the filleting stroke.\n\nStep two — the backbone cut: starting from the initial cut, lay the knife flat and almost parallel to the cutting board. Insert the blade until it contacts the spine. Using long, smooth strokes — not sawing — draw the knife from head to tail along the top of the spine, feeling the blade ride over the vertebrae. Keep the blade as close to the spine as possible. Each stroke should lift a thin layer of flesh cleanly from the bone. This takes 4–6 strokes for a medium fish.\n\nStep three — the rib cage: when the blade reaches the rib cage, angle it slightly downward to follow the curve of the ribs. Use short, careful strokes to cut the flesh away from the ribs rather than through them. This is the most difficult part — go slowly and feel the resistance of each rib before cutting past it.\n\nStep four — the belly: continue the cut through the belly flap until the fillet is fully detached. The fillet should come away in one clean piece. Turn the fish over and repeat on the second side.`,
        tip: 'The most common mistake in filleting is lifting the knife away from the spine. Every millimetre the blade rises above the spine leaves that much meat behind on the bone. Keep the blade in constant contact with the spine throughout the entire stroke — you should feel a faint vibration as the blade passes over each vertebra.',
    },
    {
        step: 5,
        title: 'Removing Pin Bones and Trimming',
        content: `Pin bones are the small intramuscular bones that run in a line along the centre of the fillet, roughly from the thickest point toward the tail. They are not attached to the spine — they float in the flesh — and cannot be removed during filleting. They must be pulled out individually after the fillet is separated.\n\nTo locate pin bones: run your fingertip along the centre of the fillet from head end to tail end, pressing lightly. The pin bones will register as small, hard points under your fingertip. In a medium fish, there are typically 15–25 pin bones in this line.\n\nTo remove: grip each pin bone firmly with fish tweezers or needle-nose pliers. Pull at the angle the bone is pointing — usually slightly toward the head — with a smooth, firm motion. Do not yank straight up, which tears the flesh. Pull at the correct angle and the bone slides out cleanly.\n\nWork methodically from head end to tail end, feeling ahead of your current position to locate the next bone before removing the current one. Check your work by running your fingertip along the centre line again after removing all the bones you found — it is easy to miss one or two.\n\nTrimming: use kitchen scissors or a knife to remove the thin belly flap if it is very thin and ragged — it will overcook before the rest of the fillet in most preparations. Remove any remaining scales by scraping with the back of the knife. Trim away any dark or damaged flesh at the edges.`,
        tip: 'If the pin bones are proving difficult to grip — they break rather than pull out cleanly — the fish is very fresh and the bones are firmly anchored. This is a quality problem rather than a technique problem. Refrigerate the fillets for 1–2 hours; the pin bones loosen slightly as the flesh relaxes after rigor mortis passes.',
    },
    {
        step: 6,
        title: 'Skinning, Storing, and Using the Fillets',
        content: `Skinning (optional): many Vietnamese fish dishes use skin-on fillets — the skin crisps during frying and adds flavour and texture. For dishes where skinless flesh is required — cha ca, fish paste, filling for banh cuon — remove the skin as follows: place the fillet skin-side down on the board. Hold the tail end of the skin firmly with one hand. Insert the knife between the skin and the flesh at the tail end, angling the blade almost flat. Using a gentle sawing motion while pulling the skin taut with the other hand, work the blade from tail to head. The skin should peel away cleanly, leaving the flesh intact.\n\nFor Vietnamese fish where the skin is particularly thin and fragile — ca loc, ca loc bong — the skin often tears during this process. If the skin is not needed for the dish, this is not a problem. If it is needed (for ca loc kho), leave it on and handle carefully.\n\nStorage: use the fillets immediately or store on a plate covered with cling film in the coldest part of the refrigerator for up to 24 hours. Do not freeze fillets from a fish that was not previously frozen — the texture of previously fresh fish degrades significantly upon freezing and thawing.\n\nUsing the bones: the spine, head (gills removed), and ribs make an excellent stock base. Rinse, place in a pot with cold water, bring to a gentle simmer — not a boil — with ginger, lemongrass, and salt. Simmer 20 minutes, strain. This stock is the base for bun ca, canh ca chua, and banh canh ca.`,
        tip: 'Practice on inexpensive fish before attempting to fillet a premium whole fish. Ca chep (carp) and ca tram (grass carp) are large, inexpensive, and forgiving — their size means there is more margin for error on each cut. Two or three practice sessions on carp will produce the muscle memory needed to fillet any round-bodied fish cleanly.',
    },
];

const RELATED = [
    { title: 'Ca Kho To (Clay Pot Caramelised Fish)', href: '/recipes/ca-kho-to', time: '45 min' },
    { title: 'Canh Chua (Vietnamese Sour Soup)', href: '/recipes/canh-chua', time: '40 min' },
    { title: 'How to Select and Prepare Fresh Seafood', href: '/how-to/select-fresh-seafood', time: '11 min read' },
];

export default function DeboneWholeFishGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Debone a Whole Fish</span>
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
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 11 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Properly Debone a Whole Fish
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    The spine cut, the rib cage, the pin bones — a complete guide to filleting Vietnamese whole fish cleanly, from the first cut behind the pectoral fin to pulling the last pin bone with tweezers.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Intermediate' },
                        { label: 'Time to Learn', value: '2–3 practice sessions' },
                        { label: 'Key Tools', value: 'Boning knife, fish tweezers' },
                        { label: 'Applies To', value: 'All round-bodied fish' },
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