'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Vietnamese Cooking Toasts Its Own Spices',
        content: `The spice blend for pho bo is one of the most recognisable aromas in the world — star anise, cinnamon, clove, cardamom, coriander seed, and fennel, toasted whole and added to a broth that simmers for hours. The same logic applies to bun bo hue, mi quang, and thit kho: the depth of the dish begins not at the pot but at the dry pan, ten minutes before anything else happens.

Pre-ground spices are already partially oxidised before they reach your kitchen. The volatile aromatic compounds — the oils that carry flavour and fragrance — begin breaking down the moment the cell walls are ruptured by grinding. A jar of pre-ground star anise that has been sitting on a shelf for three months smells faintly of the original spice. A whole star anise toasted in a dry pan and ground fresh smells like the actual thing — deep, sweet, slightly medicinal, genuinely powerful.

Toasting serves a second function beyond flavour: it drives off residual moisture inside the spice, which would otherwise cause it to clump rather than grind cleanly and to turn musty in storage. A properly toasted spice grinds to a fine, even powder in seconds. An untoasted spice resists the grinder and produces uneven results.`,
        tip: null,
    },
    {
        step: 2,
        title: 'The Core Vietnamese Spices & What Each One Does',
        content: `Star anise (hoa hồi) is the dominant note in pho — sweet, anise-forward, slightly medicinal. It is the most recognisable single element of the broth aroma and the one that goes wrong fastest if overtoasted. The tips of the petals go nearly black at the correct endpoint; the body should remain deep brown.

Cinnamon stick (quế) adds warmth and a faint sweetness that rounds the sharp edges of clove and star anise. Vietnamese cinnamon — cassia — is stronger and spicier than Ceylon cinnamon. Use less if substituting.

Black cardamom (thảo quả) is the smoky, camphor-scented pod that gives Northern pho its depth. It is not interchangeable with green cardamom. Split the pod before toasting to expose the seeds inside to heat.

Clove (đinh hương) is the most aggressive spice in the blend — even one extra clove tips the balance toward medicinal. Use sparingly: two to three cloves per 2 litres of broth.

Coriander seed (hạt ngò) adds a citrusy, floral background note that is subtle but noticeable in its absence. Toast until they begin to jump in the pan.

Fennel seed (hạt thì là) is optional but common in Southern pho — slightly sweeter and lighter than coriander seed, it softens the overall blend.`,
        tip: 'Black cardamom pods should be lightly crushed or split before toasting — the outer shell is thick and without opening it, the heat cannot reach the aromatic seeds inside effectively.',
    },
    {
        step: 3,
        title: 'Equipment — Pan, Grinder, Storage',
        content: `Pan: use a dry, heavy-bottomed pan or wok with no oil. Cast iron or carbon steel retains heat evenly and gives better control than thin stainless steel. The pan must be completely dry — any surface moisture causes the spices to steam rather than toast.

Grinder: a dedicated spice grinder is the correct tool. A blade grinder produces uneven results but is acceptable for home use. A mortar and pestle works well for small quantities and gives precise control over final texture — coarse for braises, fine powder for dry rubs. Do not use a blender; the jar is too large and spices simply bounce rather than grinding.

If using a coffee grinder, clean it between uses — coffee oils contaminate spice flavour and vice versa. The fastest cleaning method: grind a small piece of dry bread in the grinder after each use to absorb residual oils, then discard.

Storage: store toasted whole spices in an airtight glass jar away from light and heat for up to 3 months. Ground spices should be used within 2 weeks — after this, the volatile oils dissipate and the powder becomes flavourless. Always label jars with the date toasted. Toast small quantities — enough for 2 to 3 uses — rather than large batches.`,
        tip: null,
    },
    {
        step: 4,
        title: 'The Toasting Process — Heat, Order, Timing',
        content: `Heat the dry pan over medium-low heat for 90 seconds before adding anything. A cold pan produces uneven results as the base spices begin toasting before the pan reaches temperature.

Add spices in order of density — not all at once. Whole cinnamon sticks and split black cardamom pods go in first; they are dense and need the most time. Star anise goes in after 30 seconds. Cloves and coriander seed follow after another 30 seconds. Fennel seed goes in last — it is small and toasts in under a minute.

Move the spices continuously with a wooden spoon or by swirling the pan. Even heat exposure on all surfaces is the goal. A spice sitting still on a hot pan scorches on one side while remaining raw on the other.

The correct endpoint has three signals. Colour: the spices deepen by one shade — cinnamon goes from pale tan to medium brown; the tips of star anise petals go near-black while the body stays deep brown. Aroma: the kitchen fills immediately with a rounded, deep, sweet fragrance — the flat smell of raw spice is replaced by something fully alive. Sound: a faint crackling as moisture escapes, particularly from cardamom and clove.

Total toasting time: 3–5 minutes over medium-low heat. The last 30 seconds before the correct endpoint and the 30 seconds past it — burnt — are very close together. When the aroma peaks, remove the pan from heat immediately and transfer to a cold plate. Never leave toasted spices in the hot pan — residual heat continues cooking them.`,
        tip: 'If you are unsure whether the spices are done, pull one star anise and break off a petal. The inside should smell intensely of anise — much stronger than the untoasted version. If it still smells raw and faint, return to heat for another 30 seconds.',
    },
    {
        step: 5,
        title: 'Grinding — Whole vs Coarse vs Fine',
        content: `For pho and most Vietnamese broths: do not grind. Add the toasted whole spices directly to the broth in a muslin bag or loose — whole spices release flavour slowly and evenly over a long simmer, and can be removed cleanly at the end. Ground spices in a broth produce a murky, cloudy liquid and an uneven flavour that intensifies unpredictably.

For dry spice rubs on grilled meats — suon nuong, ga nuong: grind to a medium-coarse texture. Some texture remaining in the rub helps it adhere to the meat surface.

For five-spice powder (ngu vi huong) used in marinades and braised dishes: grind to a fine, even powder. The blend is star anise, cinnamon, clove, fennel seed, and Sichuan pepper in roughly equal parts — though Vietnamese versions often reduce the Sichuan pepper and increase the cinnamon.

Allow toasted spices to cool completely before grinding — warm spices release steam inside the grinder which causes the powder to clump against the walls rather than falling free. Two minutes of cooling is enough.`,
        tip: 'Grind in short pulses of 3–4 seconds rather than one continuous run. Between pulses, tap the grinder on the counter to knock powder off the walls and back onto the blades. This produces a more even grind in less total time.',
    },
    {
        step: 6,
        title: 'Knowing When Something Has Gone Wrong',
        content: `Burnt spices cannot be rescued. The bitterness of a scorched clove or star anise will persist through hours of broth simmering and no amount of additional seasoning corrects it. If spices smoke heavily, smell acrid, or show deep black char rather than dark brown toasting — discard them and start again. The cost is two minutes and a small amount of spice. The cost of continuing with burnt spices is an entire pot of broth.

Undertoasted spices are a smaller problem but still worth correcting. If the aroma after toasting still smells flat and raw rather than deep and rounded, return to medium-low heat for another 60–90 seconds. Undertoasted spices produce a pale, thin broth flavour that no amount of simmering time fully compensates for.

Stale spices — correctly toasted but old — smell faintly correct rather than intensely correct. If a freshly toasted star anise does not fill the immediate area with fragrance, the spice itself is past its useful life. Buy fresh stock. Whole spices stored correctly last 12–18 months from purchase; beyond that the aromatic oils have largely evaporated regardless of how they are stored.`,
        tip: 'Buy whole spices from Asian grocery stores rather than supermarkets — the turnover is higher, the stock is fresher, and the price is a fraction of what supermarket spice jars cost for the same quantity.',
    },
];

const RELATED = [
    { title: 'Crystal-Clear Pho Broth', href: '/recipes/pho-bo-ha-noi', time: '8 hrs' },
    { title: 'Bun Bo Hue Broth', href: '/recipes/hue-spicy-beef-noodle-soup', time: '3 hrs' },
    { title: 'How to Char Vietnamese Aromatics', href: '/recipes/pho-bo-ha-noi', time: '10 min' },
];

export default function ToastGrindSpicesGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Toast & Grind Vietnamese Spices</span>
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
                    How to Toast & Grind Vietnamese Spices
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Star anise, cinnamon, cardamom, clove — the correct heat, the correct order, and why pre-ground spices from a jar cannot replicate what a dry pan does in five minutes.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Essential' },
                        { label: 'Active Time', value: '5–8 minutes' },
                        { label: 'Key Tools', value: 'Dry pan, spice grinder' },
                        { label: 'Used In', value: 'Pho, Bun Bo Hue, Thit Kho' },
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