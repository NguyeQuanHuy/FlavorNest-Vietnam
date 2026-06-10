'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why the Mortar and Pestle Still Matters in a Food Processor Age',
        content: `The mortar and pestle is the oldest food processing tool in the Vietnamese kitchen and, for several specific tasks, still the best one. This is not nostalgia. It is physics.\n\nA food processor cuts and chops using blade rotation — it applies shear force to ingredients, producing a finely cut mixture where the cell walls have been sliced cleanly. A mortar and pestle crushes and grinds using compressive and shear force simultaneously — it ruptures cell walls and releases aromatic oils in a way that cutting cannot replicate. The difference is detectable in the finished dish: a lemongrass paste made in a mortar has a more complex, rounded fragrance than the same paste made in a food processor, because the crushing action extracts volatile compounds that are released by pressure but not by cutting.\n\nThe tasks where this difference is most significant in Vietnamese cooking: crushing lemongrass for marinades and pastes, making fresh chilli paste, preparing spice blends for pho and bun bo hue, extracting pandan, grinding sesame seeds, crushing roasted peanuts for goi and bun. In every one of these applications, the mortar produces a qualitatively better result — more aromatic, more textured, more alive — than an electric appliance.\n\nFor tasks where volume and speed matter more than aromatic complexity — grinding large quantities of meat, blending soups, chopping vegetables — the food processor or blender is the correct tool. The mortar and pestle is not a substitute for modern equipment. It is the correct tool for specific jobs.`,
        tip: null,
    },
    {
        step: 2,
        title: 'The Three Types of Mortar Used in Vietnamese Cooking',
        content: `Vietnamese cooking uses three distinct mortar types, each appropriate for different tasks. Understanding which type to buy depends on what you will primarily use it for.\n\nGranite mortar (cối đá): the most versatile and recommended for a first Vietnamese mortar. Heavy, dense, and slightly rough inside — the texture provides grip that helps grind fibrous ingredients like lemongrass and galangal that would slide in a smooth mortar. A good granite mortar weighs 3–5kg and does not move during use. It handles everything from spice grinding to wet paste making to crushing nuts. Available in 15cm, 18cm, and 22cm diameters — 18cm is the most practical size for home cooking.\n\nClay mortar (cối đất): the traditional Vietnamese mortar, still common in home kitchens and essential for making mam tom (fermented shrimp sauce) preparations and some Central Vietnamese dishes. Lighter than granite, slightly porous, and produces a slightly different texture from granite grinding. The porosity means clay mortars absorb flavours from previous grinding sessions — some cooks maintain separate clay mortars for savoury and sweet preparations. More fragile than granite; requires careful handling.\n\nWood mortar (cối gỗ): used specifically for pounding dried spices and for the Northern Vietnamese technique of pounding nem (fresh spring roll filling) to achieve the sticky, cohesive texture that chopping cannot produce. Also used for making bun bo Hue paste. Wood is too soft and too absorbent for wet paste work — it stains permanently and the wood fibres contaminate the paste. Use only for dry work.\n\nFor a single purchase: buy the 18cm granite mortar. It handles 90% of Vietnamese mortar tasks correctly and lasts indefinitely.`,
        tip: 'Test a granite mortar before buying by rubbing a damp finger on the interior surface. It should feel slightly rough — like fine sandpaper — not polished smooth. A polished interior looks attractive but provides no grip for grinding fibrous ingredients.',
    },
    {
        step: 3,
        title: 'Size, Weight, and What to Look For',
        content: `Size: the internal diameter of the mortar bowl determines what you can work with. For Vietnamese cooking, the most practical sizes are:\n\n15cm (small): suitable for spice grinding, small quantities of chilli paste, crushing garlic. Not adequate for lemongrass paste or larger preparations where the ingredients tend to fly out of a small bowl during pounding.\n\n18cm (medium): the correct size for most Vietnamese home cooking. Fits enough lemongrass for a full batch of bun bo hue paste, handles spice grinding, produces enough pesto-style paste for 4–6 servings.\n\n22cm (large): for making large batches of curry paste, grill marinades for multiple people, or any preparation where volume matters. Heavier to store and clean but more versatile for cooking large quantities.\n\nWeight: a mortar must be heavy enough to stay stable during use. The rhythmic pounding required for lemongrass and fibrous ingredients creates significant lateral force — a light mortar will move across the work surface, requiring constant repositioning and reducing effectiveness. As a rule: if you can lift a granite mortar with two fingers, it is too light. It should require both hands and a firm grip.\n\nPestle shape: the pestle should have a rounded, bulbous base rather than a flat one. The rounded base contacts the mortar interior at a curve, producing both crushing force (downward) and grinding force (rolling) simultaneously. A flat-ended pestle delivers only crushing force and is less effective for paste work.\n\nRim height: the mortar walls should be at least 6cm high to contain ingredients during pounding. A shallow mortar causes ingredients to spray out.`,
        tip: 'Place a damp cloth or rubber mat under the mortar during use. This prevents sliding, absorbs vibration, and protects the work surface. A sliding mortar is the primary safety and effectiveness problem with under-weight mortars — the mat solves it partially, but a correctly weighted mortar is the real solution.',
    },
    {
        step: 4,
        title: 'Seasoning a New Mortar',
        content: `A new granite mortar contains fine stone dust from the manufacturing process that will contaminate the first several preparations if not removed. Seasoning is a simple process that takes 15 minutes and must be done before first use.\n\nStep one — rinse and dry: rinse the mortar and pestle thoroughly under cold running water. Scrub with a stiff brush. Allow to air dry completely — at least 1 hour. A wet mortar produces a watery, diluted paste rather than a concentrated one, and the moisture prevents proper grinding.\n\nStep two — grind dry white rice: add 4–5 tablespoons of dry white rice to the mortar. Grind in circular motions and with pounding strokes for 3–4 minutes until the rice has become a grey-white powder. The powder will contain stone dust from the surface — discard and rinse.\n\nStep three — repeat: add another 4–5 tablespoons of dry rice and grind again for 3–4 minutes. Repeat until the ground rice powder comes out pure white rather than grey-tinged — typically 2–3 rounds.\n\nStep four — garlic and salt grind: grind 4 garlic cloves with 1 tsp of coarse salt in the seasoned mortar. This removes any remaining mineral taste and begins to season the interior surface with food compounds. Discard, rinse, and dry.\n\nThe mortar is now ready for use. The seasoning process does not need to be repeated after first use — normal cooking gradually builds a seasoned surface.`,
        tip: 'Save the seasoning rice powder from the second and third rounds — it is pure fine rice flour. Discard only the first round which contains stone dust. The subsequent rounds produce clean rice flour that can be used in any recipe calling for rice flour.',
    },
    {
        step: 5,
        title: 'Grinding Technique for Vietnamese Pastes',
        content: `The most common Vietnamese mortar task is making a wet paste from fibrous aromatics — lemongrass, galangal, ginger, garlic, chilli — for marinades, curry bases, and braising liquids. The technique has a specific sequence that produces a smooth, fully integrated paste rather than a chunky, uneven one.\n\nWork in order of hardness: start with the hardest, most fibrous ingredients and work toward the softer ones. Add garlic last — it crushes in seconds and would be over-processed and bitter if added at the beginning.\n\nFor a standard lemongrass marinade paste: slice lemongrass thin first to give the mortar a head start. Pound the lemongrass pieces to a rough fibrous mass — this takes 3–4 minutes of consistent pounding. Add galangal or ginger (if using) and continue pounding until incorporated. Add dried chilli or chilli flakes. Then add shallots and garlic — these soften quickly. Season with a pinch of salt — the salt acts as an abrasive that accelerates grinding and draws out moisture from the aromatics, helping the paste form.\n\nMovement: alternate between pounding (straight down, extracting juice and breaking fibres) and grinding (circular motion, breaking down texture and integrating ingredients). Pounding alone produces a broken fibrous mass; grinding alone on hard fibres produces almost no result. The combination produces a smooth paste.\n\nPatience: a proper lemongrass paste takes 8–10 minutes of hand work. This is not fast. It is, however, significantly better than the 2-minute food processor result — the extended manual processing extracts more aromatic compounds and produces a paste with a rounded, complex flavour that the food processor version cannot match.`,
        tip: 'Add a small amount of the oil from the recipe directly into the mortar during the final grinding stage. The oil lubricates the paste, helps the final integration of ingredients, and produces a smoother, more cohesive result. For lemongrass marinade paste, 1 tbsp of neutral oil added in the last 2 minutes of grinding makes a noticeable difference.',
    },
    {
        step: 6,
        title: 'Cleaning, Storage, and Maintenance',
        content: `Never use soap or detergent on a mortar and pestle. The porous stone absorbs soap compounds that release slowly into subsequent preparations, producing an off-flavour that is difficult to identify but unmistakably wrong. Water alone is correct and sufficient.\n\nCleaning after use: rinse under warm running water and scrub with a stiff brush to remove all paste residue from the textured interior. For sticky residue, add a small amount of coarse salt and scrub with the pestle — the salt abrasively removes stuck material without chemical intervention. Rinse thoroughly.\n\nDrying: dry with a cloth and then leave the mortar upside down on a drying rack for at least 30 minutes. Do not store right-side up while still damp — moisture sits in the bowl and promotes mineral buildup and, in some stone types, mould in the pores.\n\nRemoving persistent odours: after grinding very pungent ingredients — shrimp paste, fermented fish — the mortar may retain a strong smell. Grind a handful of dry rice with the juice of half a lime for 2 minutes. The rice absorbs residual oils and the lime acid neutralises the alkaline compounds responsible for strong odours. Rinse thoroughly afterward.\n\nStorage: store the mortar in the open, not in a closed cabinet, when possible. Air circulation prevents moisture buildup in the pores. The pestle can be stored inside the mortar.\n\nLong-term maintenance: once a month, rub the interior of a granite mortar with a cut lemon half, leave for 5 minutes, then rinse. The citric acid removes mineral deposits from hard water and keeps the surface clean without damaging the stone.`,
        tip: 'A mortar and pestle that is used regularly develops a seasoned surface that actually improves grinding performance over time — the microscopic pores fill with food compounds and oil, creating a slightly smoother but more adherent interior. A mortar used weekly for a year grinds better than a mortar used monthly. Use it.',
    },
];

const RELATED = [
    { title: 'How to Toast & Grind Vietnamese Spices', href: '/how-to/toast-grind-vietnamese-spices', time: '10 min read' },
    { title: 'How to Make Pandan Extract (Nước Lá Dứa)', href: '/how-to/pandan-extract', time: '9 min read' },
    { title: 'How to Season and Care for a Carbon Steel Wok', href: '/how-to/season-wok', time: '7 min read' },
];

export default function MortarPestleGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Choose a Vietnamese Mortar & Pestle</span>
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
                    How to Choose a Vietnamese Mortar and Pestle
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Granite, clay, or wood — which type to buy, what size, how to season it, and the grinding technique that produces lemongrass paste a food processor cannot replicate.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Best First Buy', value: '18cm granite mortar' },
                        { label: 'Weight', value: '3–5kg minimum' },
                        { label: 'Seasoning Time', value: '15 minutes' },
                        { label: 'Lifespan', value: 'Indefinite' },
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
                        Guides that use the mortar and pestle
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