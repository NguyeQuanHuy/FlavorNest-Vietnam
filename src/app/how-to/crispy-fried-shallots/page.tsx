'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Fried Shallots Appear in Almost Every Vietnamese Dish',
        content: `Hanh phi — crispy fried shallots — is the finishing touch that appears on pho, bun bo hue, com tam, banh mi, goi cuon, and dozens of other Vietnamese dishes. It is not decoration. It is a flavour and texture component that the dish is incomplete without: a concentrated hit of sweet, savoury, slightly caramelised onion in a form that stays crisp for minutes after plating and adds a crunch that nothing else in the dish provides.\n\nThe technique is simple but counterintuitive. Shallots go into cold oil, not hot. The temperature rises slowly with the shallots in the pan, which allows the moisture to evaporate gradually and the sugars to caramelise evenly before the exterior crisps. Shallots added to hot oil seize on the outside immediately, trapping moisture inside, and produce a result that is simultaneously burnt on the surface and soft in the centre.\n\nA batch of properly made hanh phi keeps in an airtight jar at room temperature for up to two weeks. Having it ready means every bowl of noodles, every plate of rice, every salad is one spoonful away from tasting finished.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Choosing and Slicing the Shallots',
        content: `Asian shallots — the small, elongated, purple-skinned variety sold at Vietnamese and Chinese grocery stores — produce the best hanh phi. They have a lower water content than European shallots, which means they fry faster, shrink less dramatically, and produce a crispier result. European shallots work but require slightly longer frying time and produce a slightly softer result.\n\nDo not substitute onion. Onion has a higher water content and a different sugar profile — it produces a result that is softer, less sweet, and burns faster than shallots.\n\nSlice the shallots into rings 2–3mm thick using a sharp knife or mandoline. Consistency of thickness is more important than the exact measurement — uneven slices mean thinner pieces burn before thicker pieces are done. A mandoline set to 2mm produces perfect results in a fraction of the time.\n\nAfter slicing, spread the rings on a clean towel and press another towel on top. Leave for 5 minutes. This draws out surface moisture and accelerates the frying process. Dry shallots fry faster and more evenly than wet ones.`,
        tip: 'Peel and slice more shallots than you think you need — they shrink to roughly one-third of their raw volume during frying. A large handful of raw shallots produces a modest jar of finished hanh phi.',
    },
    {
        step: 3,
        title: 'The Cold-Start Method — The Only Correct Technique',
        content: `Place the dried shallot rings in a cold pan. Pour enough neutral oil over them to submerge completely — for 200g of sliced shallots, approximately 300–400ml of oil. The shallots should float freely without touching the bottom.\n\nPlace the pan over medium-low heat. Do not touch it for the first 5 minutes. The oil will warm slowly and the shallots will begin to bubble gently as their moisture evaporates. This slow start is the foundation of the technique — rushing it by starting with hot oil or turning up the heat collapses the process.\n\nAfter 8–10 minutes, the shallots will have softened and turned pale gold. At this point begin stirring every 60–90 seconds. The colour will deepen gradually — pale gold to medium gold to the target: a deep amber-gold that looks one shade lighter than you want the finished product to be.\n\nPull the shallots when they are pale amber, not when they look done. They continue cooking from residual heat after removal and will reach the correct deep amber as they drain and cool. Shallots that look perfectly golden in the pan will be dark brown and slightly bitter by the time they cool. This is the single most important timing judgement in the entire process.\n\nTotal frying time from cold start: 18–25 minutes depending on the thickness of the slices and the heat level.`,
        tip: 'Keep a plate lined with paper towels next to the stove before you start frying. The window between correct colour and overcooked is approximately 30 seconds — you need to be able to move immediately when the shallots are ready.',
    },
    {
        step: 4,
        title: 'Draining, Seasoning, and Cooling',
        content: `When the shallots reach pale amber, remove immediately with a slotted spoon or spider strainer and transfer to the paper-towel-lined plate in a single loose layer. Do not pile them — stacking traps steam between layers and the bottom shallots go soft.\n\nSeason immediately with a small pinch of salt while still hot. The salt enhances the caramelised flavour and helps draw out any remaining surface moisture. Some Vietnamese cooks add a pinch of sugar at this stage as well — it deepens the caramel note slightly.\n\nLeave undisturbed for 3–4 minutes. As they cool, the shallots will visibly crisp and the colour will deepen from pale amber to the correct deep golden brown. Do not taste them while hot — the texture and flavour both change significantly as they cool. A hot shallot that seems soft will often be perfectly crisp once cooled.\n\nThe frying oil left in the pan is now shallot-infused and deeply aromatic — do not discard it. Strained and stored in a jar, it keeps for 2 weeks refrigerated and is one of the most useful flavour oils in Vietnamese cooking, used to dress rice, stir-fry aromatics, and finish noodle dishes.`,
        tip: 'If the shallots cool and are still soft rather than crisp, they were either sliced too thick, not dried sufficiently before frying, or pulled from the oil too early. Spread them on a baking sheet and place in an oven at 150°C for 5 minutes — this drives off residual moisture and rescues most soft batches.',
    },
    {
        step: 5,
        title: 'Storage — Keeping Hanh Phi Crispy for Two Weeks',
        content: `The enemy of crispy fried shallots in storage is moisture. A jar that is not completely airtight, a kitchen that is humid, or shallots that were not fully cooled before jarring will all produce soft, stale hanh phi within 24 hours.\n\nAllow the shallots to cool completely on the paper towels — at least 15 minutes, longer in humid conditions. They must be at full room temperature and fully crisp before going into the storage jar.\n\nUse a glass jar with a rubber-sealed lid — the airtight seal is critical. Metal tins work well. Avoid plastic containers with loose-fitting lids. Add a small food-safe silica gel packet to the jar if available — this absorbs any residual moisture and extends crispness significantly.\n\nStore at room temperature away from the stove and any source of heat or steam. Refrigeration is not recommended — the temperature fluctuation as the jar moves in and out of the cold introduces condensation that softens the shallots.\n\nProperly stored hanh phi keeps for up to 2 weeks at full crispness. After this, the texture gradually softens but the flavour remains good for another week. Refresh in a dry pan over low heat for 2 minutes to restore some crunch.`,
        tip: null,
    },
    {
        step: 6,
        title: 'How to Use Hanh Phi Across Vietnamese Cooking',
        content: `Hanh phi is used in three distinct ways across Vietnamese cooking, and understanding the distinction improves how you apply it.\n\nAs a finishing garnish — added in the last 5 seconds before serving: pho, bun bo hue, hu tieu, banh canh. The shallots sit on the surface of the broth, stay crisp for a minute or two, and add a caramelised sweetness that contrasts with the savoury broth. Add just before the bowl reaches the table, never during cooking.\n\nAs a textural component mixed into the dish: com tam, banh tam bi, goi cuon filling, bun thit nuong. Here the shallots are stirred in or layered between components and their crispness is part of the eating experience rather than a surface contrast. Add at the moment of assembly.\n\nAs an aromatic base — briefly refried in oil at the start of cooking: used in some braised dishes and stuffed preparations where the flavour of fried shallot is needed in the sauce rather than as a garnish. In this application, crispness is not the goal — flavour extraction is. Use older, slightly softened hanh phi for this rather than freshly made.\n\nThe shallot oil recovered from the frying process has its own applications: drizzled over plain rice it adds immediate depth; used to fry garlic before a stir-fry it builds a more complex aromatic base than plain oil; tossed through cooked noodles before toppings are added it prevents clumping and adds flavour simultaneously.`,
        tip: 'Make a double batch whenever you make hanh phi — the process takes the same amount of attention regardless of quantity, and a full jar in the cupboard is one of the most useful things a Vietnamese kitchen can have ready.',
    },
];

const RELATED = [
    { title: 'Pho Bo Ha Noi', href: '/recipes/pho-bo-ha-noi', time: '8 hrs' },
    { title: 'Com Tam Saigon', href: '/recipes/com-tam', time: '45 min' },
    { title: 'Goi Ga Hanh Tay', href: '/recipes/goi-ga-hanh-tay', time: '35 min' },
];

export default function CrispyFriedShallotsGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Crispy Fried Shallots</span>
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
                    How to Make Crispy Fried Shallots (Hành Phi)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Cold oil, low heat, pulled one shade too early — the counterintuitive technique that produces the crispy, caramelised hanh phi that finishes every great Vietnamese bowl.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Essential' },
                        { label: 'Active Time', value: '25–30 minutes' },
                        { label: 'Key Tools', value: 'Heavy pan, slotted spoon' },
                        { label: 'Used In', value: 'Pho, Com Tam, Bun Bo Hue' },
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
                        Recipes that use hanh phi
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