'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Charring Aromatics Is Non-Negotiable for Vietnamese Broths',
        content: `The defining characteristic of a great pho bo broth — beyond the spices, beyond the simmering time — is a deep, sweet, smoky complexity that cannot be achieved by simply boiling ginger and onion in water. That complexity comes from charring: exposing the cut surfaces of ginger and onion to direct, intense heat until they blacken on the outside while their interior sugars caramelise and their volatile aromatic compounds transform.\n\nCharring does three things simultaneously. It caramelises the natural sugars in the onion and ginger, adding sweetness and depth to the broth. It creates Maillard reaction compounds — the same browning chemistry that makes roasted meat taste better than boiled meat — that contribute a roasted, savoury note. And it drives off the sharp, pungent raw compounds in ginger and onion, replacing them with something rounded and mellow that integrates into the broth rather than sitting on top of it.\n\nThe result is immediately detectable. A pho broth made with uncharred aromatics tastes clean but flat. A broth made with properly charred aromatics tastes like something that has been cooking for hours even in the first thirty minutes. The char is not a step that can be skipped or substituted.`,
        tip: null,
    },
    {
        step: 2,
        title: 'What to Char and How Much',
        content: `The two primary aromatics charred for Vietnamese broths are ginger and onion. For pho bo, both are used in significant quantities — for a 4-litre broth, typically one large onion (halved) and a 10cm piece of ginger (halved lengthwise). For bun bo hue, ginger and lemongrass are charred. For some canh (clear soups), only ginger is charred.\n\nOnion: use a large yellow or brown onion, halved through the root. The flat cut surface is placed directly onto the heat source. The root end is left intact — it holds the layers together during charring and makes the piece easier to handle.\n\nGinger: use a large, fresh piece of ginger with smooth, taut skin. Cut in half lengthwise to expose a flat surface. Old, wrinkled ginger has dried out and will char unevenly. The skin is left on during charring — it protects the flesh from burning while the surface caramelises.\n\nThe correct level of char is significant blackening of the cut surface — not a light browning, and not complete carbonisation. Approximately 60–70% of the cut surface should be blackened, with visible browning extending into the flesh beneath. The outer layers of the onion will be dark and papery; the inner layers should be golden and beginning to soften.`,
        tip: 'Char more aromatics than the recipe requires. Charred ginger and onion keep refrigerated for 3 days and can be added to any broth, stir-fry, or marinade during that time. The extra 2 minutes of charring time pays dividends across multiple dishes.',
    },
    {
        step: 3,
        title: 'Method 1 — Broiler (Most Reliable for European Kitchens)',
        content: `The broiler (grill function) in a standard oven is the most reliable method for charring aromatics without a gas flame. It produces even, controllable heat from above and requires no special equipment.\n\nPreheat the broiler to its highest setting for 10 minutes. Line a baking tray with foil. Place the onion halves cut-side up and the ginger halves cut-side up on the tray. Position the tray on the highest rack — as close to the broiler element as possible without touching it. Distance from the element determines charring speed; too far and the aromatics dry out rather than char.\n\nBroil for 10–15 minutes until the cut surfaces are significantly blackened — patches of deep black across 60–70% of the surface, with the edges of the onion charring fastest. Check at 8 minutes and rotate the tray if the charring is uneven.\n\nThe onion is done when the cut surface is mostly black and the flesh beneath is golden and fragrant. The ginger is done when the cut surface has deep black patches and the flesh is slightly softened. Both should smell strongly of sweet, smoky caramel — not of burning plastic or acrid smoke, which indicates the broiler is too close or too hot.\n\nAllow to cool for 5 minutes before handling. The charred surfaces can be brushed lightly with a dry brush to remove any loose carbon that might make the broth bitter, but some black going into the pot is correct and expected.`,
        tip: 'The broiler method produces the most consistent results across different kitchens because the heat is adjustable and the distance is controllable. If the broiler in your oven runs hot, use the second-highest rack rather than the highest to give slightly more distance.',
    },
    {
        step: 4,
        title: 'Method 2 — Cast Iron Pan or Wok (Fastest)',
        content: `A cast iron pan or a carbon steel wok heated to its maximum temperature over a gas or electric burner produces a char that is comparable to direct flame in both speed and intensity.\n\nHeat the pan or wok over the highest heat available for 3–4 minutes until the surface begins to smoke lightly. Add no oil. Place the onion halves cut-side down and the ginger halves cut-side down directly onto the dry, smoking surface.\n\nDo not move them. The char forms through sustained contact between the flat cut surface and the extremely hot pan. Moving the aromatics interrupts contact and produces an uneven, pale result instead of deep, even blackening.\n\nPress down firmly with a spatula or the palm of your hand (protected by a cloth) for the first 30 seconds to ensure full contact. Leave undisturbed for 4–6 minutes until the cut surfaces are deeply blackened and the edges of the onion have turned dark and papery. The kitchen will fill with sweet, slightly smoky aromatic smoke — this is correct. Open a window.\n\nTurn the aromatics and char the skin side briefly — 1–2 minutes — until lightly browned. This step is optional but adds another layer of caramelised flavour.\n\nThis method is faster than the broiler but requires more attention and produces more smoke. It is the method used in Vietnamese home kitchens with gas stoves.`,
        tip: null,
    },
    {
        step: 5,
        title: 'Method 3 — Electric Stovetop (Works With Technique)',
        content: `Charring on an electric or induction stovetop requires a heavy pan and patience — the lower radiant heat compared to gas means the process is slower but the result is equivalent if done correctly.\n\nUse the heaviest pan available — cast iron is ideal. Heat over the highest setting for 5 minutes before adding the aromatics. Electric and induction elements take longer to reach maximum temperature than gas, and adding cold aromatics to an insufficiently hot pan produces steaming rather than charring.\n\nPlace the aromatics cut-side down with no oil. The contact time needed on electric heat is longer than on gas — allow 7–10 minutes for the onion and 6–8 minutes for the ginger. The charring will be slightly less dramatic in appearance than the gas method but the flavour transformation is equivalent.\n\nFor induction specifically: use a cast iron pan that makes full contact with the induction surface. Carbon steel woks with a rounded base do not make full contact on induction and heat unevenly. A flat-bottomed carbon steel pan or a cast iron skillet works correctly.\n\nCheck the colour at 6 minutes by carefully lifting one edge with a spatula. The surface should be dark brown to black. If it is still pale gold, the pan was not hot enough at the start — continue for another 3–4 minutes and allow more preheat time in future batches.`,
        tip: 'On electric or induction stovetops, finish the charring under the broiler if the stovetop method is not producing sufficient colour. Start on the stovetop for 5 minutes to begin the caramelisation, then transfer to the broiler for 5–8 minutes to complete the char. The two-method approach works well in kitchens without gas.',
    },
    {
        step: 6,
        title: 'Using Charred Aromatics in the Broth and Beyond',
        content: `For pho and bun bo hue: add the charred aromatics directly to the pot with the blanched bones at the start of the long simmer. They will continue releasing their caramelised sugars and smoky compounds into the broth throughout the cooking time. Remove before serving — the aromatics will have given everything they have by the end of the simmer and the pieces themselves are not eaten.\n\nFor shorter broths — canh (Vietnamese clear soups) cooked in 30–40 minutes: add the charred ginger at the beginning and remove after 20 minutes. The shorter cooking time means less extraction, so the aromatics are added earlier and in higher concentration than for long-simmered broths.\n\nBeyond broths: charred ginger has applications beyond broth-making. Sliced thin after charring and added to a marinade for grilled pork or chicken, it contributes the same sweet, smoky depth. Added to a pickling liquid for do chua, it adds complexity. The char is transferable wherever ginger would normally be used but a deeper, rounder flavour is wanted.\n\nCharred onion can be used in the same way — added to braising liquids for thit kho or suon kho in place of or alongside raw onion, it produces a darker, more complex sauce base.\n\nStorage: charred aromatics can be cooled and refrigerated in a sealed container for up to 3 days. They can also be frozen and added directly to a broth from frozen — the freezing does not affect their flavour contribution.`,
        tip: 'Make a habit of charring aromatics whenever the broiler or a heavy pan is already hot for another purpose. The 10 minutes of charring time produces an ingredient that improves every broth made in the following three days — the time cost per dish is negligible.',
    },
];

const RELATED = [
    { title: 'Crystal-Clear Pho Broth', href: '/recipes/pho-bo-ha-noi', time: '8 hrs' },
    { title: 'Bun Bo Hue Broth', href: '/recipes/hue-spicy-beef-noodle-soup', time: '3 hrs' },
    { title: 'How to Toast & Grind Vietnamese Spices', href: '/how-to/toast-grind-vietnamese-spices', time: '10 min read' },
];

export default function CharAromaticsGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Char Aromatics Without a Gas Flame</span>
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
                    How to Char Aromatics Without a Gas Flame
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Broiler, cast iron pan, induction — three reliable methods for charring ginger and onion to the deep, caramelised blackness that makes Vietnamese pho broth taste like pho broth.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Essential' },
                        { label: 'Active Time', value: '10–15 minutes' },
                        { label: 'Key Tools', value: 'Broiler or cast iron pan' },
                        { label: 'Used In', value: 'Pho, Bun Bo Hue, Canh' },
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
                        Recipes that use charred aromatics
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