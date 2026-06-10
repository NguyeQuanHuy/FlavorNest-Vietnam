'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Bamboo Steamers Produce Better Results Than Metal',
        content: `The bamboo steamer — xung hap, used across Vietnamese, Chinese, and broader Southeast Asian cooking — is one of the oldest and most effective cooking vessels in the Asian kitchen. It is not simply a cheaper or more traditional alternative to a metal steamer. It produces genuinely different results, and understanding why explains why restaurants and home cooks who have tried both continue to use bamboo.\n\nThe key difference is moisture management. Metal steamers are sealed, reflective, and non-absorbent. The steam that rises from the water below hits the metal lid, condenses into water droplets, and falls back onto the food — producing wet, waterlogged surfaces on banh cuon, dim sum, and steamed fish. Bamboo is porous. It absorbs excess moisture from the steam, regulates the humidity inside the steamer, and releases it slowly — producing a humid but not dripping environment where food steams evenly without being soaked by condensation.\n\nFor Vietnamese cooking specifically, this matters most in banh cuon (steamed rice rolls), banh bao (steamed buns), and whole fish steaming. Each of these requires a moist heat environment that does not wet the surface of the food — bamboo provides exactly this, while a metal lid requires a cloth wrapped around it to prevent dripping, which is a workaround for a problem bamboo does not have.\n\nThe second advantage is stackability. Multiple bamboo tiers stack directly over a single wok of simmering water, cooking different components simultaneously at graduated heat levels — the bottom tier runs hotter, the top tier cooler. This is essential for multi-component Vietnamese meals where timing across different dishes must be coordinated.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Choosing the Right Bamboo Steamer',
        content: `Bamboo steamers are available in diameters from 10cm (single serving, dim sum use) to 40cm (restaurant size for whole fish and large batches). For Vietnamese home cooking, two sizes are most useful.\n\n26–28cm: the most versatile size. Fits over a standard wok or a wide saucepan, accommodates a whole medium fish (400–600g), a full batch of banh bao, or a large serving of banh cuon. Two or three tiers of this size cover most Vietnamese steaming needs.\n\n20–22cm: useful for smaller preparations — a single fish fillet, a portion of sticky rice, steamed eggs. More manageable to store and clean than the larger size.\n\nWhat to look for when buying: the bamboo slats on the base should be tightly woven with no gaps larger than 2mm — gaps allow food to fall through and uneven weaving produces hot spots. The rim should be thick and even, without splits or cracks that would widen with repeated steam exposure. The lid should sit flush — a lid that rocks or gaps will leak steam unevenly and extend cooking times.\n\nAvoid steamers with very thin bamboo slats — they warp quickly. Avoid steamers with any visible mould spots on the bamboo before purchase. Avoid steamers where the bamboo has been lacquered or varnished — these coatings release chemical compounds under heat and should not be used for food.\n\nPrice is a reasonable quality indicator: a well-made bamboo steamer costs €8–15 for a 26cm tier. Steamers priced below this range are typically made from younger, thinner bamboo that splits and warps within a few months of regular use.`,
        tip: 'Buy an extra tier of the same diameter as your primary steamer when you purchase it. Tiers from different brands are often not compatible — the diameters vary slightly and they do not stack flush. Having a spare tier from the same set ensures you can stack multiple layers throughout the life of the steamer.',
    },
    {
        step: 3,
        title: 'First Use — Seasoning a New Bamboo Steamer',
        content: `A new bamboo steamer has a raw, slightly green bamboo smell that will transfer to food if not addressed before first use. It may also have residual dust and manufacturing debris in the weave.\n\nFirst use preparation: submerge the entire steamer — base tiers and lid — in cold water for 30 minutes. This hydrates the bamboo, making it more pliable and less likely to crack from thermal shock during the first steam session. After soaking, drain and shake out the excess water.\n\nSeason with steam: place the soaked steamer over a wok of simmering water and steam empty for 20 minutes. The steam drives out the raw bamboo smell, opens the pores of the bamboo, and heat-treats the weave to reduce the chance of cracking during subsequent use. Repeat this once more — a second 20-minute empty steam session — before the first cooking use.\n\nAfter the empty steam sessions, the steamer smells clean and neutral rather than green and raw. The bamboo may darken slightly in colour — this is normal and indicates the heat treatment has worked correctly.\n\nThis initial seasoning is specific to new steamers. Do not confuse it with the ongoing care routine described in subsequent steps — those are the maintenance practices that extend the life of the steamer over years of use.`,
        tip: 'Place a slice of ginger and a few spring onion stalks inside the steamer during the second seasoning steam session. The aromatics will neutralise any remaining raw bamboo smell and leave the steamer with a faint clean fragrance that complements Vietnamese food.',
    },
    {
        step: 4,
        title: 'Using the Bamboo Steamer — The Correct Setup',
        content: `Water level: the water in the wok or pot should be at least 4cm deep but must not touch the bottom of the steamer. Contact between the steamer base and the boiling water will waterlog the bamboo and eventually rot the base. A 1–2cm gap between the water surface and the steamer bottom is correct. Check the water level every 15 minutes for long steaming sessions and top up with boiling water — never cold water, which drops the temperature and interrupts the steam cycle.\n\nLining the steamer: for foods that stick — sticky rice, banh bao dough, fish with skin — line the base of the steamer with banana leaf, perforated parchment paper, or rehydrated lotus leaf before placing the food. Do not use unperforated parchment — it blocks the steam circulation that differentiates bamboo steaming from simply placing food in a humid sealed container. The lining should have visible holes or gaps for steam to pass through.\n\nSpacing: food should not touch the sides of the steamer — leave a 1cm gap around the perimeter for steam circulation. Pieces should not touch each other — crowded steamers produce unevenly cooked food as the steam cannot circulate between pieces.\n\nMultiple tiers: when stacking multiple tiers, rotate them halfway through cooking — the bottom tier runs 10–15% hotter than the top tier. Rotating ensures even cooking across all tiers for foods requiring the same internal temperature.\n\nLid placement: place the lid immediately after loading the food and do not lift it during the first two-thirds of the cooking time. Each lid lift releases accumulated steam and extends the cooking time by 2–3 minutes.`,
        tip: 'Bring the water to a full rolling boil before placing the loaded steamer over it. Starting the steam with the food already in place and the water not yet boiling produces a slow, gradual heating that steams the food less effectively than the immediate burst of vigorous steam from already-boiling water.',
    },
    {
        step: 5,
        title: 'Cleaning After Each Use',
        content: `Bamboo steamers must be cleaned immediately after use — not after they have cooled completely, but while still warm. Warm bamboo is pliable and releases food residue easily; cold bamboo contracts slightly and food debris becomes harder to remove.\n\nRinse under warm running water: hold each tier and the lid under warm — not hot — running water and rinse away food particles immediately. Use a soft brush or clean cloth to dislodge any stuck residue. Never use soap, detergent, or any cleaning product on bamboo — these compounds absorb into the porous bamboo and release during subsequent steaming, tainting the food. Water alone is sufficient and correct.\n\nFor stubborn residue: make a paste of baking soda and water (1:3 ratio), apply to the affected area, leave 5 minutes, then rinse thoroughly with warm water. Baking soda is alkaline enough to break down food residue without leaving a chemical flavour behind.\n\nAfter rinsing: shake off excess water and stand the tiers and lid upright or on their sides — not stacked flat, which traps moisture between surfaces. Allow to air dry completely in a well-ventilated area before storing. This step is the most important in the entire care routine: a steamer stored while still damp will develop mould within 24–48 hours, particularly in humid European summer conditions.\n\nDrying time: at room temperature with good air circulation, 2–4 hours. In humid weather, 6–8 hours or overnight. To accelerate drying, place near (not directly over) a heat source or in direct sunlight for 30 minutes.`,
        tip: 'After rinsing, wipe the inside surface of each tier with a clean cloth dampened with white vinegar. The mild acidity of the vinegar inhibits mould growth on the bamboo surface without affecting food flavour. This takes 30 seconds and significantly extends the period between deep cleans.',
    },
    {
        step: 6,
        title: 'Long-Term Care, Mould Prevention, and Storage',
        content: `Mould is the primary enemy of bamboo steamers in humid kitchens and is the most common reason for premature replacement. It appears as grey-green or black spots on the interior bamboo surface and, once established, is difficult to fully remove. Prevention is significantly easier than treatment.\n\nPrevention: always dry completely before storage. Never store in a closed cabinet immediately after washing. In humid weather, place the dried steamer in a low oven (60°C) for 10 minutes before storing — the gentle heat drives off any residual moisture that air drying missed.\n\nTreatment of early mould: if pale grey spots appear, scrub with a brush soaked in undiluted white vinegar. Rinse with warm water. Place in direct sunlight for 2 hours — UV light inhibits mould growth. Repeat once a week until the spots do not return.\n\nTreatment of established black mould: mix 1 tbsp bleach in 500ml water. Brush onto the affected surfaces, leave 10 minutes, then rinse very thoroughly with warm water — at least 5 rinses. Air dry completely. This treatment is a last resort; a steamer that has been bleach-treated should be used 3–4 times with only water before food is placed in it again, to ensure all bleach residue has been driven out.\n\nLong-term storage: store uncovered or very loosely covered in a cool, dry location. A shelf or hook in a kitchen with good ventilation is ideal. A closed drawer or tight cabinet is not. In European winters where kitchens are heated, store away from radiators — the repeated cycle of heat and cooling dries the bamboo excessively and causes splitting.\n\nLifespan: a well-maintained bamboo steamer should last 5–8 years with regular use. Signs it needs replacement: persistent mould that returns after treatment, visible splitting of the bamboo base slats, a rim that has warped enough to prevent the lid from sitting flat.`,
        tip: 'Once a month, lightly coat the rim and outer surface of the steamer with a few drops of food-grade mineral oil or coconut oil applied with a cloth. The oil conditions the bamboo, preventing it from drying out and cracking, and creates a slightly hydrophobic surface that resists mould. Wipe off any excess — the surface should feel smooth, not oily.',
    },
];

const RELATED = [
    { title: 'Banh Cuon (Steamed Rice Rolls)', href: '/recipes/banh-cuon', time: '45 min' },
    { title: 'How to Steam Fish the Vietnamese Way', href: '/how-to/steam-fish', time: '8 min read' },
    { title: 'How to Set Up a Vietnamese Kitchen', href: '/how-to/vietnamese-kitchen-setup', time: '8 min read' },
];

export default function BambooSteamerGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Care for a Bamboo Steamer</span>
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
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 9 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Care for a Bamboo Steamer
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Season before first use, rinse while warm, dry completely before storing — the maintenance routine that prevents mould, stops splitting, and keeps a bamboo steamer producing better results than metal for years.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Difficulty', value: 'Easy' },
                        { label: 'First Use Prep', value: '40 minutes' },
                        { label: 'After Each Use', value: '5 minutes' },
                        { label: 'Lifespan', value: '5–8 years maintained' },
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
                        Recipes and guides that use a bamboo steamer
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