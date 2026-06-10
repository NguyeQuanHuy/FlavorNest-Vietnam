'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'Why Clay Pot Rice Tastes Different From Every Other Method',
        content: `Com nieu — clay pot rice — is not simply rice cooked in a clay vessel instead of a metal one. The pot changes the rice fundamentally: the porous clay absorbs and redistributes moisture during cooking, producing grains that are individually distinct, slightly chewy at the centre, and fragrant in a way that rice cooked in aluminium or stainless steel never achieves. The clay also allows a thin crust to form on the bottom — com chay, the scorched rice layer — which is not a mistake but the defining feature of the dish and the part most Vietnamese diners consider the best bite of the meal.\n\nThe technique is not complicated but it requires attention and some familiarity with how a specific pot behaves. Clay pots vary significantly in thickness, porosity, and heat retention, and the same timing that produces perfect rice in one pot may undercook or burn in another. The first few attempts establish the calibration for a particular pot; after that, the method becomes reliable and fast.\n\nCom nieu is associated specifically with Ninh Binh province, where restaurants serve it broken ceremonially at the table — the server cracks the sealed lid with a mallet, sending steam rising dramatically. But clay pot rice is made throughout Vietnam as an everyday cooking method, and the principles are the same whether the goal is a theatrical restaurant presentation or a simple weeknight bowl.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Choosing and Seasoning the Clay Pot',
        content: `Vietnamese clay pots for rice — noi dat — are small, round, unglazed or partially glazed earthenware pots with a tight-fitting lid. They range from single-serving size (diameter 12cm) to family size (diameter 24cm). The smaller pots are better for learning the technique — they heat more quickly and the margin for error is smaller, which means mistakes are more immediately detectable.\n\nFor a new clay pot, seasoning is required before first use. Fill the pot with water and bring slowly to a boil over low heat. Discard the water and repeat once more. This process removes any raw clay taste that would transfer to the rice and hardens the surface slightly, reducing the risk of cracking from thermal shock.\n\nInspect the pot for hairline cracks before each use — a cracked pot will leak and may break during cooking. Never place a cold clay pot on a hot burner; always start on the lowest heat and increase gradually. Never place a hot clay pot on a cold or wet surface — the thermal shock will crack it.\n\nFor cooking on an induction or electric stovetop: standard unglazed clay pots are not compatible with induction. Use a heat diffuser on electric coil burners to distribute heat evenly and prevent hot spots that crack the clay. Gas flame is the most compatible heat source for clay pot cooking.`,
        tip: 'If cooking on gas, use a wire trivet or heat diffuser under the clay pot during the initial heating phase. Direct contact between the clay base and the gas flame creates very hot spots that scorch the rice unevenly. The diffuser distributes the heat and produces a more even crust.',
    },
    {
        step: 3,
        title: 'The Rice — Variety, Washing, and Soaking',
        content: `Use Vietnamese jasmine rice — gao tam thom or gao nang — for com nieu. The long, slightly translucent grains cook to a distinct, separate texture that short-grain rice does not. Short-grain or glutinous rice is too starchy for this method and produces a sticky, clumped result rather than the individual grains that define com nieu.\n\nWash the rice until the water runs clear — typically 3 to 4 rinses. The first rinse will be milky-white from surface starch; subsequent rinses become progressively clearer. This step removes excess starch that would make the cooked rice gummy and prevents the grains from clumping.\n\nSoak the washed rice in cold water for 20–30 minutes before cooking. Soaking hydrates the outer layer of the grain, which reduces the cooking time needed and produces more even cooking — the exterior and interior of each grain reach the correct texture simultaneously rather than the exterior becoming soft before the interior is done. Drain completely before adding to the pot.\n\nWater ratio for clay pot rice: 1:1.2 (rice to water) — slightly less water than the 1:1.5 ratio used in rice cookers, because the clay pot retains more moisture and less evaporates during cooking. Start with this ratio and adjust based on your specific pot — if the rice is consistently underdone, add 2 tbsp more water; if it is consistently soggy, reduce by 2 tbsp.`,
        tip: 'Measure both rice and water by volume, not weight, for this technique. The ratio is a volume ratio — 1 cup of rice to 1.2 cups of water — regardless of the size of the batch. Weighing introduces variables that the volume ratio handles naturally.',
    },
    {
        step: 4,
        title: 'The Cooking Process — Four Stages',
        content: `Stage one — bring to a boil: place the drained rice and measured water in the clay pot. Add 0.5 tsp salt and 0.5 tsp neutral oil — the oil prevents the rice from sticking to the pot walls and contributes to the crust formation at the base. Place over medium-low heat, uncovered, and bring slowly to a boil. This takes 8–12 minutes depending on the pot size and heat source. Do not rush this stage with high heat — the slow heating allows the water to penetrate the grains evenly before the surface starch sets.\n\nStage two — steam with lid: when the water surface shows active bubbling and has reduced to just above the rice level, place the lid on the pot and reduce heat to the lowest possible setting. Cook for 12 minutes without lifting the lid. The steam trapped inside finishes cooking the rice through. Lifting the lid releases the steam and undercooks the rice — resist the urge to check.\n\nStage three — form the crust: after 12 minutes, increase heat to medium for exactly 3 minutes. This drives off the remaining surface moisture and caramelises the bottom layer of rice against the hot clay, forming the com chay crust. The kitchen will smell of toasted rice — this is correct. A faint crackling sound from the bottom of the pot is the crust forming.\n\nStage four — rest: remove from heat and leave the pot, still covered, for 5 minutes. The residual heat finishes the top layer of rice while the crust cools slightly and firms up. Do not skip this rest — rice lifted immediately from the heat is slightly sticky and under-steamed at the top.`,
        tip: 'The 3-minute crust stage is where the most variation occurs between pots and heat sources. In your first several attempts, check the crust at 2 minutes by carefully tilting the pot — if it moves slightly as a mass, the crust has not formed yet. If it stays fixed, the crust is set. Adjust the timing based on your observation.',
    },
    {
        step: 5,
        title: 'The Com Chay Crust — How to Get It Right',
        content: `Com chay — the scorched rice crust at the bottom of the pot — is the most prized element of com nieu. Done correctly, it is golden-brown, slightly crisp, and fragrant with a toasted, nutty flavour that contrasts beautifully with the soft rice above it. Done incorrectly, it is black, bitter, and ruins the entire pot.\n\nThe correct crust is achieved through the combination of oil, the right heat level, and exact timing. Too little oil and the rice sticks without browning. Too much heat and the crust carbonises before the top rice is cooked. Too little time and there is no crust at all.\n\nTo remove the crust cleanly: after resting, run a thin spatula around the inside edge of the pot to loosen any rice stuck to the sides. Invert the pot onto a plate with a single confident motion — the rice and crust should come out as a compact cylinder, crust side up. If it does not release, return to low heat for 1 minute to loosen the base, then invert again.\n\nAt Ninh Binh restaurants, the com nieu is served still in the pot, then broken open at the table. For home cooking, inverting onto a plate presents the golden crust dramatically and allows everyone to see and access it.\n\nFor a thicker, more dramatic crust: increase the crust stage to 4–5 minutes and accept that the crust will be darker and more intensely flavoured. This style is common in restaurants where the theatrical crack is part of the presentation.\n\nFor a thinner, gentler crust suitable for daily cooking: reduce the crust stage to 2 minutes and accept that it will be pale gold rather than deep amber.`,
        tip: null,
    },
    {
        step: 6,
        title: 'Variations and What to Serve With Com Nieu',
        content: `Plain com nieu with fish sauce and a fried egg is the most common everyday presentation — the clay pot rice needs nothing elaborate alongside it because the texture and fragrance of the rice itself is the point.\n\nCom nieu with scallion oil: immediately after inverting the rice, pour 2 tbsp hot scallion oil (dau hanh) over the top. The oil seeps between the grains and adds a sweet, caramelised onion fragrance that is characteristic of com tam and bun thit nuong. This is the simplest and most effective flavour addition.\n\nCom nieu with clay pot fish (ca kho to): cook the rice and ca kho simultaneously — the fish in a separate clay pot — and serve together. The concentrated, sweet-salty fish sauce glaze from the ca kho is the ideal companion to the plain, fragrant clay pot rice.\n\nCom nieu with braised pork (thit kho tau): the rich coconut-caramel braise sauce over the plain rice is the definitive Southern Vietnamese weeknight meal. The rice absorbs the sauce at the table, each bite combining the toasty crust, the steamed grain, and the sweet-savoury pork liquid.\n\nThe com chay crust eaten separately: at Vietnamese tables, the crust pieces are often eaten as a snack alongside the meal — dipped in nuoc cham, eaten with thin slices of cha lua, or simply on their own. Some diners consider the crust the best part of the pot and position themselves closest to it strategically.`,
        tip: 'Make com nieu in individual small clay pots (12cm diameter) for a dinner party — each guest gets their own pot with their own crust. The individual pots take the same time to cook as one large pot and the presentation, with each person cracking their own lid or inverting their own pot, creates a memorable table experience.',
    },
];

const RELATED = [
    { title: 'Ca Kho To (Clay Pot Caramelised Fish)', href: '/recipes/ca-kho-to', time: '45 min' },
    { title: 'Thit Kho Tau (Caramelised Pork Belly)', href: '/recipes/thit-kho-tau', time: '1 hr 30 min' },
    { title: 'How to Cook Perfect Vietnamese Jasmine Rice', href: '/recipes/com-tam', time: '25 min' },
];

export default function ComNieuGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>Cook Rice in a Clay Pot</span>
                </div>
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                        color: '#0369A1', background: '#0369A115',
                        padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase',
                    }}>Rice & Noodles</span>
                    <span style={{ fontSize: 12, color: 'rgba(75,46,26,0.4)' }}>⏱ 10 min read</span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800, color: '#2D1A0E',
                    lineHeight: 1.15, marginBottom: 16,
                }}>
                    How to Cook Rice in a Clay Pot (Cơm Niêu)
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Four stages, one clay pot, and the golden scorched crust at the bottom — the technique behind cơm niêu and why it produces rice that a rice cooker never can.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Intermediate' },
                        { label: 'Active Time', value: '30 minutes' },
                        { label: 'Key Tool', value: 'Clay pot (nồi đất)' },
                        { label: 'Signature', value: 'Cơm cháy crust' },
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
                                background: '#0369A1', color: '#fff',
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
                        Best dishes to serve with cơm niêu
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
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#0369A1'; }}
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