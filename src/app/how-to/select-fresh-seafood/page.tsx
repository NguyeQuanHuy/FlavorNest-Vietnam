'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Seafood Quality Determines the Dish Before Cooking Starts',
        content: `Vietnamese coastal cooking is built on fresh seafood. The broths, salads, grilled dishes, and stir-fries that define the cuisine from Da Nang to Phu Quoc all share one assumption: the seafood is genuinely fresh, bought the same day it is cooked, and treated with the minimum intervention needed to express its natural flavour.\n\nThis assumption is not incidental. Overworked seasoning, long marinades, and heavy sauces in Vietnamese seafood cooking are almost always compensating for seafood that was not fresh enough when it arrived in the pan. A truly fresh prawn needs nothing beyond salt, heat, and a dipping sauce. A prawn that is one day past its best needs fish sauce, lime, sugar, garlic, chilli, and twenty minutes of marinating just to be presentable.\n\nLearning to select fresh seafood is therefore the most leveraged skill in Vietnamese coastal cooking. It determines the ceiling of what is possible before a single ingredient is measured or a flame is lit.`,
        tip: null,
    },
    {
        step: 2,
        title: 'How to Select Fresh Fish',
        content: `Eyes: clear, bright, and slightly protruding. Cloudy, sunken, or grey eyes indicate the fish has been dead for more than 24 hours. This is the single most reliable freshness indicator and can be assessed from a distance without touching.\n\nGills: lift the gill cover and examine the colour. Bright red or deep pink gills indicate freshness. Brown, grey, or pale pink gills indicate age. The gills should smell of clean ocean — not ammonia, not sour, not fishy in the stale sense.\n\nFlesh: press the flesh firmly with one finger. On a fresh fish, the indentation springs back immediately. On an older fish, it holds the impression for several seconds. The flesh should feel firm and dense, not soft or mushy.\n\nSkin: should be shiny, moist, and tightly adhered to the flesh. Skin that is dull, dry, or pulling away from the flesh at the edges indicates age. The scales should be firmly attached — loose scales that come off with light handling suggest the fish has been handled repeatedly over days.\n\nSmell: the most subjective but most immediately informative test. Fresh fish smells of seawater and nothing else. Any smell that registers as fishy, sour, ammonia-like, or simply wrong means the fish is past its best. Trust this instinct — it is accurate.\n\nFor whole fish: all the above apply. For fillets: focus on colour (bright, translucent, no browning at the edges), texture (firm, not wet or slippery), and smell.`,
        tip: 'At a Vietnamese or Asian fish market, the fish is typically displayed on ice without packaging. This allows direct assessment of all freshness indicators. At a supermarket where fish is pre-packaged, check the use-by date and look through the packaging for eye clarity and flesh colour. If in doubt, ask the fishmonger when the fish arrived.',
    },
    {
        step: 3,
        title: 'How to Select Fresh Prawns and Shrimp',
        content: `Fresh whole prawns: the shell should be firm and tightly fitted to the body — not loose or separating at the joints. The colour should be translucent grey-green or pale pink depending on the variety, never black at the head or dark grey at the tail, which indicates oxidation.\n\nThe head is the freshest part and the first to deteriorate. Black discolouration around the head indicates the prawn has been dead for more than 12 hours. Slight head discolouration is acceptable for cooking dishes where the head is removed; for dishes where the head is eaten — tom nuong, tom hap — only prawns with fully intact, unblackened heads are acceptable.\n\nSmell: raw fresh prawns smell clean and slightly sweet. Any ammonia smell means they are past their best. A strong, distinctly fishy smell means they should not be used.\n\nFresh prawn texture: the flesh should be firm and snap back when bent. Soft, limp prawns that do not hold their shape have begun to break down.\n\nFor pre-peeled, deveined prawns sold in packaging: the flesh should be white to pale pink, not grey or translucent-yellow. The surface should be moist but not sitting in liquid — pooled liquid in the packaging indicates the prawns have been thawed and refrozen.\n\nFrozen prawns: properly frozen and thawed prawns are acceptable for most Vietnamese dishes and often more consistent than fresh prawns at non-coastal markets in Europe. Thaw overnight in the refrigerator, never at room temperature or under hot water.`,
        tip: 'Buy prawns with the head on wherever possible — the head contains fat and flavour compounds that improve any dish they are cooked in. Peel at home immediately before cooking rather than buying pre-peeled, which loses both flavour and texture.',
    },
    {
        step: 4,
        title: 'How to Select Fresh Squid, Octopus, and Crab',
        content: `Fresh squid: the skin should be intact, shiny, and a pale pinkish-grey with iridescent patches. The flesh should be firm and white, not yellowing. The eyes should be clear and bright. Fresh squid smells of clean seawater. Any pink or red discolouration of the flesh — not the skin — or any softness of the tube indicates age. The ink sac, if visible, should be full and intact.\n\nFresh octopus: the skin should be intact with clear suckers. The colour should be a consistent brown-grey, not patchy or faded. Fresh octopus is firm throughout. The eyes should be bright. As with squid, a clean ocean smell is the baseline — any ammonia or sour smell indicates deterioration.\n\nLive crab: always preferred for Vietnamese cooking. A live crab will move its legs and claws when touched. A crab that is completely still may be dying or dead — avoid it. The shell should feel heavy for its size — a light crab has used its energy reserves and will have minimal meat. The joints should be firm, not loose.\n\nFresh (non-live) crab: the shell should smell clean. The gills, visible when the shell is lifted, should be grey-white and intact, not black or deteriorating. The flesh should be dense and white, not watery.`,
        tip: null,
    },
    {
        step: 5,
        title: 'Cleaning and Preparing Fish at Home',
        content: `Scaling: hold the fish by the tail over a sink or large bowl. Scrape from tail to head against the direction of the scales using the back of a knife or a dedicated fish scaler. Work in short, firm strokes. Rinse under cold water. Check behind the pectoral fins and around the head where scales are easy to miss.\n\nGutting: insert the tip of a sharp knife into the vent at the base of the belly and cut toward the head, keeping the blade shallow to avoid puncturing the intestines. Open the cavity and remove the organs with your fingers — the entire organ mass should come out in one piece. Rinse the cavity thoroughly under cold running water until no blood remains.\n\nRemoving the gills: grip the gill structure with your fingers and pull firmly — it should come away cleanly. Alternatively, cut it out with kitchen scissors. Gills left in the fish during cooking impart a bitter flavour to the broth or sauce.\n\nRemoving the fishy smell: rub the entire fish inside and out with coarse salt and white vinegar. Leave for 2 minutes, then rinse thoroughly. This removes surface slime and significantly reduces any remaining odour. For fish used in broths and soups, this step is essential.`,
        tip: 'Ask the fishmonger to scale and gut the fish at the market. Most will do this without charge and it saves significant cleanup at home. Request that the gills be removed as well — this is sometimes overlooked even when scaling and gutting are done.',
    },
    {
        step: 6,
        title: 'Cleaning Prawns, Squid, and Shellfish',
        content: `Deveining prawns: the dark vein running along the back of a prawn is the digestive tract. It is not harmful but carries a slightly bitter, gritty flavour that affects the final dish. Remove by making a shallow cut along the back of the prawn with a small sharp knife and lifting the vein out with the tip of the knife or a toothpick. Rinse under cold water. For dishes where the prawn is eaten whole — tom nuong — deveining is essential. For dishes where the prawn is cut into pieces — stir-fries — it is less critical but still recommended.\n\nCleaning squid: pull the tentacles from the tube — the head and innards will follow. Cut just below the eyes to free the tentacles; discard the head. Remove the transparent quill from inside the tube by reaching in and pulling it out. Peel off the purple outer membrane if desired — it is edible but the texture of the tube is cleaner without it. Rinse thoroughly inside and out. Clean under cold running water until no traces of ink remain.\n\nPreparing live clams and mussels: scrub the shells under cold running water with a stiff brush. Remove the beard from mussels by pulling firmly toward the hinge end. Discard any shells that are cracked or that do not close when tapped firmly — open shells that do not respond to tapping indicate a dead mollusc and should not be eaten.\n\nSoaking shellfish: place cleaned clams or mussels in a large bowl of cold salted water — 1 tbsp salt per litre — for 30 minutes. They will purge any sand or grit from inside the shells. Lift them out rather than pouring — the grit settles to the bottom and pouring sends it back over the shellfish.`,
        tip: 'Cook all seafood on the same day it is purchased wherever possible. If storing overnight, place on a plate covered loosely with a damp cloth in the coldest part of the refrigerator — never in an airtight container, which accelerates deterioration. Shellfish should be stored alive until cooking — keep in a bowl covered with a damp cloth, never submerged in water.',
    },
];

const RELATED = [
    { title: 'Cheesy Babylon Whelks', href: '/recipes/oc-huong-sot-pho-mai', time: '40 min' },
    { title: 'Crispy Breaded Squid', href: '/recipes/muc-chien-xu', time: '30 min' },
    { title: 'Green Mango & Octopus Tentacle Salad', href: '/recipes/goi-xoai-rau-bach-tuoc', time: '35 min' },
];

export default function SelectSeafoodGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Select & Prepare Fresh Seafood</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#0284C7', background: '#0284C715',
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
                    How to Select and Prepare Fresh Seafood
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Eyes, gills, smell, texture — the exact indicators for fish, prawns, squid, crab, and shellfish, and how to clean each one correctly before it reaches the pan.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Essential' },
                        { label: 'Time to Learn', value: '1 market visit' },
                        { label: 'Applies To', value: 'All seafood' },
                        { label: 'Used In', value: 'Every Vietnamese seafood dish' },
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
                                background: '#0284C7', color: '#fff',
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
                        Seafood recipes to try
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
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#0284C7'; }}
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