'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What the Coconut Caramel Braise Base Is and Why It Works',
        content: `The Vietnamese coconut caramel braise base — nuoc dua + nuoc mau + nuoc mam — is the foundation of the kho family of dishes: thit kho tau, ca kho to, suon kho gung, trung kho. It is not a recipe in itself but a technique: a specific combination of coconut water, caramel, and fish sauce that produces a braising liquid with a flavour profile unlike anything in Western cooking.\n\nCoconut water contributes natural sugars and a faint tropical sweetness that is distinct from cane sugar sweetness — lighter, more aromatic, less cloying. It also contains enzymes that tenderise protein during long braising. A braise made with plain water and sugar tastes flat compared to one made with coconut water.\n\nNuoc mau — the Vietnamese dark caramel — contributes colour and a bittersweet depth that prevents the braise from tasting simply sweet. Without it, a coconut water braise is pale and one-dimensional. With it, the sauce is mahogany-dark, complex, and visually dramatic.\n\nFish sauce is the salt and the umami. It seasons the liquid and interacts with the proteins during braising to produce the glutamate-rich, deeply savoury quality that makes kho dishes so compulsively edible.\n\nThese three elements together create a braising environment that is simultaneously sweet, salty, bitter, and savoury — the Vietnamese concept of balanced flavour applied to a liquid that will penetrate a protein over one to two hours of slow heat.`,
        tip: null,
    },
    {
        step: 2,
        title: 'The Ingredients — What to Use and Why',
        content: `Coconut water: use fresh young coconut water if available — the flavour is cleaner and more aromatic than canned. Canned coconut water (not coconut milk) is a reliable substitute and what most home cooks outside Vietnam use. Do not use coconut milk — the fat content is too high and produces a heavy, oily braise rather than a clear, glossy sauce.\n\nFor dishes with a larger liquid requirement — thit kho tau uses 500ml or more — canned coconut water is practical and consistent. For smaller dishes like ca kho to, fresh coconut water makes a noticeable difference.\n\nNuoc mau: made from white sugar caramelised past the sweet stage to near-black bittersweet. This guide assumes nuoc mau is already prepared — see the How to Make Vietnamese Caramel (Nuoc Mau) guide for the full technique. Use 1.5–2 tbsp per 500ml of braising liquid as a starting point, adjusting to the depth of colour desired.\n\nFish sauce: use a good-quality Vietnamese fish sauce — Phu Quoc 40 degrees, Chin-su, or Three Crabs. The fish sauce is the primary seasoning in the base and its quality determines the quality of the finished braise. Start with 3 tbsp per 500ml of liquid and adjust.\n\nSugar: a small additional amount of sugar — 1–2 tsp — is often added to the base alongside the nuoc mau, particularly for thit kho tau. This balances the bitterness of the caramel and adds a clean sweetness that coconut water alone does not provide at the correct intensity.\n\nWater: some dishes dilute the coconut water with plain water to reduce sweetness or extend the volume of the braising liquid. The ratio varies by dish and by the sweetness of the coconut water being used.`,
        tip: 'Taste the coconut water before using it. Fresh coconut water ranges from quite sweet to almost neutral depending on the age of the coconut and the variety. Adjust the amount of added sugar in the base accordingly — a very sweet coconut water needs less additional sugar than a neutral one.',
    },
    {
        step: 3,
        title: 'The Base Ratio — A Starting Point for Every Kho Dish',
        content: `The following ratio produces a balanced coconut caramel braise base for 500–600g of protein (pork belly, pork ribs, fish, eggs, or tofu):\n\n300ml coconut water (canned or fresh)\n2 tbsp nuoc mau (Vietnamese dark caramel)\n3 tbsp fish sauce\n1 tsp sugar\n2 tbsp neutral oil (for frying aromatics)\n3 cloves garlic, minced\n2 shallots, sliced\n\nThis ratio produces a sauce that is dark amber to mahogany in colour, balanced between sweet and savoury, with a slight bitterness from the nuoc mau that rounds out as the braise reduces.\n\nFor a lighter, less sweet result: reduce coconut water to 200ml and add 100ml plain water.\nFor a darker, more intense result: increase nuoc mau to 3 tbsp.\nFor a saltier, more savoury result: increase fish sauce to 4 tbsp and reduce sugar to 0.5 tsp.\n\nThese adjustments are not arbitrary — they correspond to regional variations within Vietnamese cooking. Southern kho dishes tend toward sweeter, darker sauces. Central and Northern versions are saltier and less sweet. The base ratio above is a Southern style starting point.`,
        tip: null,
    },
    {
        step: 4,
        title: 'Building the Base — The Correct Order',
        content: `The order in which the components are added to the pot determines the texture and depth of the finished sauce. The following sequence applies to all kho dishes using this base.\n\nStep one — fry the aromatics: heat oil in a heavy pot or clay pot over medium heat. Add shallots and fry until golden and fragrant, 2–3 minutes. Add garlic and stir for 1 minute. The aromatic base built here carries through the entire braise.\n\nStep two — add the protein and sear: add the protein (pork, fish, eggs) and turn in the aromatics for 2–3 minutes until the surfaces are lightly coloured. This searing step is often skipped in quick versions but it builds flavour compounds on the protein surface that improve the final dish.\n\nStep three — add nuoc mau: pour the nuoc mau over the protein and stir to coat. The caramel will seize slightly and coat the surfaces of the protein pieces — this is correct. Cook for 1 minute, turning the protein to coat evenly.\n\nStep four — add fish sauce and sugar: add fish sauce and sugar, stir to combine with the caramel.\n\nStep five — add coconut water: pour in the coconut water. The liquid will immediately deglaze the pot, lifting any caramelised bits from the bottom. Bring to a boil, then reduce to the lowest possible simmer.\n\nThis sequence — aromatics, protein, caramel, seasoning, liquid — builds flavour at each stage rather than simply simmering everything together from the start.`,
        tip: 'Add the coconut water warm rather than cold if possible. Cold liquid hitting a hot, caramel-coated pot can cause the caramel to seize into hard lumps that take several minutes to dissolve. Warm coconut water integrates immediately.',
    },
    {
        step: 5,
        title: 'Braising — Heat, Time, and Reduction',
        content: `The braise happens in two phases.\n\nPhase one — covered simmer: after the coconut water is added and the liquid comes to a boil, reduce to the lowest possible simmer, cover, and cook for the time specified by the dish. For pork belly (thit kho tau): 45–60 minutes. For pork ribs (suon kho): 40–50 minutes. For fish (ca kho to): 25–35 minutes. For eggs (trung kho): added after the pork has cooked and simmered for a further 20 minutes. The covered phase allows the protein to cook through gently and absorb the flavour of the braising liquid.\n\nPhase two — uncovered reduction: remove the lid for the final 15–20 minutes. The braising liquid will reduce and thicken into a glaze that coats the protein. This is the most important phase for the visual and textural quality of the finished dish. The sauce should reduce to roughly one-third of its original volume and coat the back of a spoon thickly.\n\nDo not stir during the uncovered reduction — turn the protein pieces gently every 5 minutes instead. Stirring breaks the protein apart, particularly for fish and pork belly that have become tender after long braising.\n\nThe finished sauce should be mahogany-dark, slightly syrupy, and clinging to the protein. If it is still watery after 20 minutes of uncovered reduction, increase the heat slightly to medium-low and continue reducing, watching carefully to prevent burning.`,
        tip: 'The sauce will look too dark and too intense in the pot. This is correct — it will taste balanced once spooned over plain white rice, which dilutes the intensity and provides the neutral base the sauce is designed to be eaten with. Taste the sauce with a piece of plain rice before adjusting seasoning, not on its own.',
    },
    {
        step: 6,
        title: 'Adjusting and Troubleshooting the Finished Braise',
        content: `Too sweet: add 0.5 tbsp fish sauce and a squeeze of lime. The additional salt and acid balance the sweetness without changing the colour or consistency of the sauce.\n\nToo salty: add 50ml additional coconut water and simmer uncovered for 5 minutes to reduce back to the correct consistency. Do not add plain water — it dilutes the flavour.\n\nToo pale: the nuoc mau was insufficient or the reduction was not long enough. Add 1 tsp nuoc mau, stir to incorporate, and continue reducing.\n\nToo bitter: the nuoc mau was cooked past the correct point. Add 1 tsp sugar and 50ml coconut water, simmer for 5 minutes. In future batches, pull the caramel slightly earlier.\n\nSauce too thin after full reduction time: the coconut water had too high a water content, or the simmer was too gentle to reduce effectively. Increase heat to medium, watch carefully, and reduce until the sauce coats a spoon.\n\nProtein too tough: the braise temperature was too high — a rolling simmer rather than the gentlest possible simmer. For the next batch, reduce heat further and extend the covered braising time by 15 minutes.\n\nProtein falling apart: slightly overcooked for the size of the pieces. Reduce covered braising time by 10 minutes in the next batch. For this batch, handle gently and serve directly from the pot rather than transferring to a serving dish.`,
        tip: 'Make a larger batch than needed and refrigerate the excess. The flavour of kho dishes improves significantly on the second and third day as the protein continues to absorb the sauce and the flavours meld. Reheat gently over low heat with a splash of coconut water to loosen the sauce, which will have thickened considerably when cold.',
    },
];

const RELATED = [
    { title: 'Thit Kho Tau (Caramelised Pork Belly)', href: '/recipes/thit-kho-tau', time: '1 hr 30 min' },
    { title: 'Ca Kho To (Clay Pot Caramelised Fish)', href: '/recipes/ca-kho-to', time: '45 min' },
    { title: 'How to Make Vietnamese Caramel (Nuoc Mau)', href: '/how-to/nuoc-mau', time: '9 min read' },
];

export default function CoconutCaramelBraiseGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Coconut Caramel Braise Base</span>
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
                    How to Make Vietnamese Coconut Caramel Braise Base
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Coconut water, nuoc mau, fish sauce — the ratio, the order, and the two-phase technique behind thit kho tau, ca kho to, and every great Vietnamese braised dish.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Intermediate' },
                        { label: 'Active Time', value: '15 minutes' },
                        { label: 'Braise Time', value: '45 min – 1.5 hrs' },
                        { label: 'Used In', value: 'Thit Kho, Ca Kho To, Suon Kho' },
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