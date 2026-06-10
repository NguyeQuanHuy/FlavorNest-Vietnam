'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Charcoal Produces Different Results Than Gas or Electric',
        content: `The flavour difference between charcoal-grilled and gas-grilled Vietnamese food is not subtle. Charcoal produces a radiant heat that is fundamentally different from the convective heat of a gas flame: it is more intense at the surface of the food, produces the Maillard reaction more efficiently, and generates smoke from fat dripping onto the coals that coats the food with volatile aromatic compounds no gas grill can replicate. Suon nuong cooked over charcoal and suon nuong cooked over gas are recognisably different dishes — same marinade, same meat, different result.\n\nIn Vietnam, charcoal grilling is the default outdoor cooking method. The bep than — charcoal stove — is a cylindrical clay or metal vessel used for everything from boiling pho broth to grilling at the table. Street food vendors cook bo nuong la lot, oc nuong, and bap nuong entirely on charcoal because the flavour it produces is the flavour those dishes require.\n\nIn Germany and broader Europe, charcoal grilling is seasonal and regulated — many apartment buildings prohibit balcony charcoal grilling, and designated grill areas in parks have specific rules. Understanding these constraints is the first practical step. But for those with outdoor space, a simple charcoal setup produces Vietnamese grilled food that justifies the additional effort over gas by a significant margin.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Choosing the Right Charcoal for Vietnamese Grilling',
        content: `Not all charcoal performs equally for Vietnamese grilling, and the choice of fuel affects the flavour, heat intensity, and duration of the fire.\n\nBinchotan (white charcoal): the premium option used in Japanese yakitori and increasingly in Vietnamese restaurant grilling. Burns extremely hot (up to 800°C), produces very little smoke, almost no flame, and lasts 3–4 hours. The high heat and low smoke allow the marinade flavour and the Maillard reaction to dominate rather than woodsmoke — correct for Vietnamese food where the marinade is the primary flavour. Expensive but the best result. Available at Japanese grocery stores and specialist BBQ suppliers.\n\nCoconut shell charcoal: the traditional Vietnamese charcoal, widely used in Vietnam and available at Asian grocery stores in Europe. Burns hot and clean with a slightly sweet smoke from the coconut. Excellent heat retention. The most authentic choice for Vietnamese grilling and significantly less expensive than binchotan.\n\nRegular hardwood lump charcoal: the most widely available option in German supermarkets and garden centres. Burns at moderate temperatures with a woody smoke. Acceptable for Vietnamese grilling but produces more smoke than binchotan or coconut charcoal — adjust by using less charcoal than you think you need.\n\nBriquettes: avoid for Vietnamese grilling. Briquettes contain binders and additives that produce chemical compounds in the smoke. They also take 45 minutes to reach correct grilling temperature versus 15–20 minutes for lump charcoal, and the flavour they impart is not compatible with Vietnamese marinades.`,
        tip: 'Store charcoal in a sealed container or the original sealed bag in a dry location. Charcoal is hygroscopic — it absorbs moisture from the air, which makes it difficult to light and produces excessive smoke when it eventually catches. Damp charcoal is the most common cause of failed grill starts.',
    },
    {
        step: 3,
        title: 'The Grill Setup — Vessel, Grate, and Ventilation',
        content: `Vietnamese charcoal grilling does not require an expensive grill. The traditional bep than is a clay cylinder approximately 25cm in diameter and 30cm tall, with small holes around the base for air intake. Any vessel that holds charcoal, allows air to reach the coals from below, and positions the food 8–12cm above the heat source will work.\n\nFor home setup in Germany: a simple round charcoal grill (kettle grill) of 47cm diameter is the most practical choice — widely available, easy to control, and versatile enough for both direct and indirect grilling. A smaller disposable aluminium grill works for single-session use but provides less heat control.\n\nGrate height: the distance between the coals and the food determines the intensity of the sear. For Vietnamese grilling — suon nuong, ga nuong, ca nuong — position the grate 8–10cm above the coal bed. This gives enough heat for rapid caramelisation of the marinade without flaring and burning from fat drips.\n\nVentilation: charcoal grilling is entirely controlled by airflow. More air = more heat. Less air = less heat. The bottom vents control the oxygen supply to the coals; the top vents control the draw that pulls air through. For Vietnamese grilling, start with all vents fully open to establish the fire, then reduce the bottom vents to half-open once the coals are at temperature to maintain steady heat without flaring.\n\nWind: position the grill so the prevailing wind direction feeds air into the bottom vents rather than across them. Wind across the vents creates uneven heat distribution; wind into the vents provides consistent, controllable combustion.`,
        tip: 'Place a drip tray — a simple aluminium foil tray — under the grate on one side of the grill when grilling fatty items like pork belly and bone-in chicken. Fat dripping onto hot coals causes flare-ups that blacken the food with acrid smoke rather than the clean caramelised char of correctly managed heat. The drip tray catches the fat on one side while the other side remains available for direct grilling.',
    },
    {
        step: 4,
        title: 'Lighting the Charcoal — The Correct Method',
        content: `The chimney starter is the correct tool for lighting charcoal — not lighter fluid, not fire starters impregnated with chemical accelerants. Lighter fluid leaves a petroleum residue on the charcoal that transfers to the food as an off-flavour that no marinade covers. A chimney starter uses newspaper and convection to light charcoal cleanly in 15–20 minutes.\n\nChimney starter method: crumple 2–3 sheets of newspaper loosely and place in the bottom chamber of the chimney. Fill the top chamber with charcoal — for a standard Vietnamese grilling session (4–6 people, 30–40 minutes of grilling), fill the chimney two-thirds full. Place the loaded chimney on the bottom grate of the grill. Light the newspaper through the holes in the base. The burning newspaper heats the air inside the chimney, creating an updraft that draws oxygen through the coals from below.\n\nThe charcoal is ready when the top coals are covered in grey ash and glowing orange when blown on — typically 15–20 minutes after lighting. Do not rush this with additional newspaper or accelerants — partially lit coals with unburned centres produce excess smoke and uneven heat.\n\nPour the lit coals from the chimney onto the grill in a single confident pour. Arrange immediately — once poured, the coals begin cooling from the bottom. For direct grilling, spread coals in an even layer across the entire base. For two-zone grilling (direct heat one side, indirect the other), pile all coals on one side.\n\nWait 5 minutes after pouring before placing food on the grate. The initial pour produces a brief intense heat spike; waiting allows it to settle to the correct, stable grilling temperature.`,
        tip: 'If you do not have a chimney starter, make one from a large tin can (2-litre tomato can with both ends removed). Punch air holes around the base with a screwdriver. It functions identically to a commercial chimney starter and costs nothing.',
    },
    {
        step: 5,
        title: 'Managing Heat During Grilling',
        content: `Vietnamese grilling operates at high heat — 230–280°C at grate level — for short times. This is not low-and-slow barbecue. The goal is a caramelised, slightly charred exterior in 3–5 minutes per side while the interior reaches the correct temperature simultaneously. Managing this requires understanding the three heat zones a well-set-up charcoal grill always has.\n\nHot zone (directly over the coals): for searing and caramelising. Place meat here for the first 2–3 minutes to develop the crust. The marinade sugars will begin to darken rapidly — watch closely.\n\nMedium zone (edge of the coal bed): for finishing thicker cuts that need more time to cook through. Once the exterior is caramelised, move to this zone to complete cooking without further browning.\n\nCool zone (no coals beneath): for resting and holding finished pieces. Essential when cooking multiple batches — finished pieces can rest here while the next batch cooks without overcooking.\n\nManaging flare-ups: fat from marinated pork and chicken drips onto the coals and causes flare-ups — brief, intense flame that blackens food with acrid smoke. Move the piece to the cool zone immediately when a flare-up occurs. Do not use water to douse flare-ups — water cools the coals unevenly and creates steam that also affects the food. Starving the flare-up of oxygen by moving the food away is the correct response.\n\nReplenishing coals: for sessions longer than 45 minutes, add new coals around the edges of the existing fire rather than on top of it. New coals on top of existing ones cool the active cooking area. New coals on the edges gradually light from the existing fire and are ready to use in 10 minutes.`,
        tip: 'Keep a spray bottle of water nearby — not for dousing flare-ups but for controlling the temperature of the grate surface between batches. A quick mist of water on the grate hisses off residual fat from the previous batch and brings the grate temperature down slightly before the next batch goes on, preventing the first pieces of the new batch from burning on contact.',
    },
    {
        step: 6,
        title: 'After Grilling — Ash Disposal and Grill Care',
        content: `Never dispose of charcoal ash in a bin immediately after grilling. Charcoal retains heat for hours after the visible glow has faded — ash that appears cold can reignite if exposed to oxygen and has caused fires when placed in waste bins with other material. Allow the grill to cool completely with all vents closed for a minimum of 2 hours before handling the ash.\n\nAsh disposal in Germany: cooled charcoal ash goes in the Restmüll (general waste), not the compost. Ash from pure lump charcoal is technically compostable, but ash from briquettes or charcoal with additives is not, and mixing them is common — Restmüll is the safe default.\n\nCleaning the grate: while the grate is still warm — not hot, but warm — scrub with a stiff wire brush. The residual heat loosens carbonised marinade from the grate bars more easily than a cold grate, and warm steel is slightly softer than cold steel, making brushing more effective. Rinse under hot water. Dry immediately and completely — wet grate bars rust within hours.\n\nLong-term grate care: after drying, coat the grate bars lightly with a neutral oil applied with a cloth. The oil creates a thin barrier against rust and makes the next grill session easier — the seasoned surface releases food more readily than bare steel.\n\nStorage: store the grill covered and dry. In German winters, bring it inside or cover with a fitted waterproof cover — repeated wet-dry cycles from rain accelerate rust on the metal components. The grate and ash pan are the most vulnerable parts; inspect them at the start of each season and replace if corroded.`,
        tip: 'Save the cooled ash from pure lump charcoal grilling sessions in a sealed container. Mixed with water to a thick paste, it is an effective natural abrasive cleaner for the grate and the grill interior. It removes carbonised residue without scratching the metal and rinses away cleanly — a useful zero-waste application of grilling byproduct.',
    },
];

const RELATED = [
    { title: 'Spicy Grilled Chicken Feet (Chân Gà Nướng)', href: '/recipes/chan-ga-nuong-cay', time: '55 min' },
    { title: 'Tamarind Glazed Chicken Wings', href: '/recipes/canh-ga-rang-me', time: '40 min' },
    { title: 'How to Butterfly and Flatten Meat for Grilling', href: '/how-to/butterfly-flatten-meat', time: '10 min read' },
];

export default function CharcoalGrillGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Set Up a Vietnamese Charcoal Grill</span>
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
                    How to Set Up a Vietnamese Charcoal Grill
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Coconut charcoal, chimney starter, three heat zones — the setup and heat management that produces the caramelised, slightly smoky exterior that makes suon nuong and ga nuong taste the way they do in Vietnam.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Intermediate' },
                        { label: 'Setup Time', value: '20–25 minutes' },
                        { label: 'Best Charcoal', value: 'Coconut shell or binchotan' },
                        { label: 'Grill Temp', value: '230–280°C at grate' },
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
                        Recipes for the charcoal grill
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