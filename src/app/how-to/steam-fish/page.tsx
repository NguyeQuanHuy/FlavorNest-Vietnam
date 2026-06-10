'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Vietnamese Steamed Fish Is Different From Every Other Method',
        content: `Ca hap — Vietnamese steamed fish — is one of the cleanest, most precise cooking preparations in the cuisine. A whole fish, seasoned with ginger and spring onion, steamed over high heat for exactly the right number of minutes, then finished with a pour of smoking-hot oil and soy sauce that sizzles dramatically as it hits the garnish and cooks everything in the moment of contact. The technique takes 15 minutes. The result looks and tastes like a dish that required considerably more effort.\n\nThe Vietnamese approach to steaming fish differs from the Cantonese version it derives from in one key way: the aromatics and sauce are applied after steaming rather than during it. This distinction matters. Soy sauce and ginger steamed alongside the fish for 10 minutes produce a cooked, mellowed flavour. The same soy sauce and ginger applied via a hot oil pour after the fish is removed from the steamer produce a raw-fresh, aromatic, intensely flavoured result — the ginger still bright, the spring onion still green, the soy still sharp rather than cooked-through.\n\nThe technique is applicable to any whole fish, to fish fillets, and to seafood including whole prawns, clams, and scallops. The core principles are the same: freshness of the fish, correct timing, and the finishing hot oil pour that defines the dish.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Choosing the Fish',
        content: `The most important decision in Vietnamese steamed fish is the choice of fish, and the most important criterion is freshness. Steaming is the most honest cooking method — it adds almost nothing to the fish's own flavour and hides nothing. A fresh fish steamed correctly tastes of the sea, sweet and clean. An old fish steamed correctly still tastes old.\n\nFor Vietnamese steaming, the ideal fish has firm white flesh, a mild natural flavour that is not overwhelmed by the ginger and soy finishing sauce, and a whole-fish form that allows even cooking. In Vietnam, the most common choices are ca vược (sea bass), ca chép (carp), ca tráp (sea bream), and ca giò (barramundi). In Germany, the accessible equivalents are sea bass (Wolfsbarsch), sea bream (Dorade), and rainbow trout (Forelle).\n\nSize: a 400–600g whole fish serves two people generously and fits in a standard 28cm bamboo steamer or wok-steaming setup. Fish larger than 700g may not cook evenly without adjustment — the thickest part of a large fish takes significantly longer than the tail section.\n\nFreshness indicators: clear bright eyes, firm flesh that springs back when pressed, bright red gills, skin that is shiny rather than dull. The fish should smell of clean seawater — any fishiness, sourness, or ammonia indicates age. Ask the fishmonger to scale and gut the fish; request that the gills be removed — gills left in during steaming impart a bitter, metallic flavour to the finished fish.\n\nFor fillets: a skin-on fillet from sea bass or sea bream works well. The skin protects the flesh during steaming and crisps slightly from the hot oil pour. Cook skin-side up to present the better surface.`,
        tip: 'Buy the fish the day you plan to cook it. Unlike red meat, fish does not improve with resting — it deteriorates. A fish purchased at 8am and cooked at 7pm that evening is at the outer edge of acceptable freshness. A fish purchased and cooked within 2 hours is at its peak.',
    },
    {
        step: 3,
        title: 'Preparing the Fish — Scoring and Seasoning',
        content: `After cleaning and gutting (or having it done at the market), rinse the fish thoroughly under cold running water, paying attention to the cavity. Pat completely dry inside and out with paper towels — surface moisture creates steam inside the steamer before the fish even hits the heat, and it prevents the hot oil from sizzling properly at the finishing stage.\n\nScoring: using a sharp knife, make 3–4 diagonal cuts on each side of the fish, cutting down to the bone. These cuts serve two purposes: they allow the steam to penetrate to the thickest part of the flesh, ensuring even cooking; and they provide channels for the finishing sauce to enter the fish during serving. Make the cuts 2–3cm apart and angle them slightly toward the tail — this creates a slightly fanned appearance as the cuts open during cooking.\n\nSeasoning the fish: rub a light amount of salt over both surfaces and inside the cavity. Insert 3–4 slices of fresh ginger and 2–3 short sections of spring onion into the cavity — these aromatics scent the steam from the inside of the fish during cooking.\n\nPreparing the steaming platform: Vietnamese fish steaming uses a simple arrangement to prevent the fish from sitting in accumulated liquid. Place 3–4 wooden chopsticks or two short sections of spring onion stalk across the steaming plate — the fish rests on these, slightly elevated, so the juices run beneath rather than pooling around the fish and making the skin soggy.\n\nFor bamboo steamer: line with banana leaf or perforated parchment. Place the prepared fish on the chopstick platform on the lining.`,
        tip: 'Do not season the outside of the fish with soy sauce before steaming. Soy sauce applied before cooking draws moisture from the flesh surface through osmosis, making the exterior slightly tough and preventing the hot oil sizzle from working correctly at the finishing stage. Season only with salt before steaming; all soy sauce goes on after.',
    },
    {
        step: 4,
        title: 'Steaming — Timing Is Everything',
        content: `Bring the water in the wok or steamer pot to a full, rolling boil before placing the fish over it. Starting the fish in a cold or warming steamer produces uneven cooking — the outer layers begin to set before the steam is hot enough to penetrate to the centre.\n\nSteaming time: the standard Vietnamese rule is 7–8 minutes per 500g of whole fish over high heat. This rule assumes vigorous steam — if the heat drops at any point, add 1–2 minutes. The fish is ready when:\n\nA chopstick or skewer inserted at the thickest point — the area just behind the head — meets no resistance and comes out clean and hot. If it meets resistance, the flesh is still raw at the centre; steam for another 2 minutes and test again.\n\nThe flesh at the deepest cut site has turned from translucent to opaque white throughout — check by gently opening one of the score cuts with a spoon.\n\nThe dorsal fin pulls away cleanly with a gentle tug — this is the traditional Vietnamese test. A fin that requires force to remove means the fish needs more time.\n\nFor fish fillets: 4–5 minutes for a 2cm thick fillet over high heat. The flesh should be just opaque through and flake cleanly at the thickest point.\n\nDo not overcook. Overcooked steamed fish goes from moist and tender to dry and fibrous in 60–90 seconds past the correct point. The difference between perfectly steamed and overcooked fish is a matter of a minute — when the first doneness indicator is positive, remove the fish immediately.\n\nDo not lift the lid during the first two-thirds of the cooking time. Each lid lift drops the temperature inside the steamer significantly and extends cooking time unpredictably.`,
        tip: 'Steam the fish on a serving plate rather than directly on the steamer rack. The juices that collect on the plate during steaming — fragrant with ginger and spring onion — are the base of the natural sauce that the finishing oil will combine with. Steaming directly on the rack wastes these juices.',
    },
    {
        step: 5,
        title: 'The Hot Oil Pour — The Finishing Technique',
        content: `The hot oil pour is the defining moment of Vietnamese steamed fish and the step that transforms a steamed dish into something dramatically aromatic and visually alive. It must be done immediately after the fish is removed from the steamer — the finishing only works on a hot fish.\n\nPrepare the garnish while the fish steams: finely julienne a 4cm piece of fresh ginger into matchsticks. Slice 3–4 spring onion stalks (green parts only) into 4cm lengths, then julienne into fine shreds. Finely slice 1–2 fresh red chillies into rounds. Arrange these over the fish the moment it comes out of the steamer.\n\nPrepare the sauce: combine 3 tbsp light soy sauce, 1 tsp sesame oil, and 0.5 tsp sugar in a small bowl. Pour this over the garnished fish.\n\nHeat 3–4 tbsp of neutral oil in a small saucepan over high heat until it just begins to smoke — approximately 200°C. The oil must be genuinely hot, not simply warm. A smoking oil produces the dramatic sizzle that wilts the ginger and spring onion, releases their aromatic compounds, and partially cooks the soy sauce into a fragrant glaze. Oil that is not hot enough simply pools around the garnish without the transformative sizzle.\n\nPour the smoking oil immediately and confidently over the garnish — a slow, cautious pour produces an uneven result where some garnish is sizzled and some is not. A single, fast pour from low height distributes the heat evenly.\n\nThe sizzle should be immediate and dramatic, lasting 3–4 seconds. The ginger and spring onion will turn slightly translucent and release a burst of aromatic steam. The entire dish is now ready — serve within 2 minutes.`,
        tip: 'Pour the hot oil over the ginger and spring onion garnish directly, not over the fish flesh. The oil on the garnish then runs down onto the fish and combines with the soy sauce below, basting the fish as it flows. Oil poured directly onto the fish flesh cooks the surface unevenly and the dramatic aromatic sizzle is lost.',
    },
    {
        step: 6,
        title: 'Variations and What to Serve With Steamed Fish',
        content: `The core technique — steam, garnish, hot oil pour — is consistent, but Vietnamese steamed fish varies by region and by occasion.\n\nNorthern style (ca hap Bac): simpler seasoning — ginger, spring onion, light soy sauce. The emphasis is on the clean, natural flavour of the fish. Less garnish, less sauce, more restraint.\n\nSouthern style (ca hap Nam): more aromatics — lemongrass, galangal, and kaffir lime leaf added to the cavity and sometimes the steaming liquid. More sauce, often including a small amount of fish sauce alongside the soy. The result is more fragrant and layered.\n\nSteamed fish with black bean sauce: a Vietnamese-Chinese influence — black bean paste (tuong den) diluted with a small amount of soy sauce and sugar, spread over the fish before steaming rather than applied after. Produces a richer, more deeply savoury result.\n\nSteamed whole prawns (tom hap): place cleaned whole prawns on the steaming plate with sliced lemongrass. Steam 3–4 minutes for medium prawns. Serve with muoi ot chanh — the acidity and salt of the dipping sauce contrasts the sweet prawn flesh.\n\nServing: steamed fish is always served with plain steamed white rice, which absorbs the soy-oil-ginger sauce pooling on the serving plate. Add a simple clear broth (canh) and one stir-fried vegetable to complete the meal — the lightness of steamed fish is best complemented by equally restrained accompaniments rather than competing with other strongly flavoured dishes.`,
        tip: 'Save the steaming juices that accumulate in the plate after serving — the liquid from the fish combined with the soy sauce and hot oil is intensely flavoured. Add it to a small bowl of plain rice or use it as the base for a quick clear soup with a handful of spring onion and a few drops of sesame oil.',
    },
];

const RELATED = [
    { title: 'How to Select and Prepare Fresh Seafood', href: '/how-to/select-fresh-seafood', time: '11 min read' },
    { title: 'How to Properly Debone a Whole Fish', href: '/how-to/debone-whole-fish', time: '11 min read' },
    { title: 'How to Make Dipping Salt (Muối Ớt Chanh)', href: '/how-to/muoi-ot-chanh', time: '7 min read' },
];

export default function SteamFishGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Steam Fish the Vietnamese Way</span>
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
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 10 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Steam Fish the Vietnamese Way
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Score, steam, garnish, smoking oil pour — the 15-minute technique that produces ca hap: clean, fragrant, and defined by the dramatic sizzle that finishes the dish.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Intermediate' },
                        { label: 'Total Time', value: '15–20 minutes' },
                        { label: 'Key Technique', value: 'Hot oil pour' },
                        { label: 'Best Fish', value: 'Sea bass, sea bream, trout' },
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
                        Related guides
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