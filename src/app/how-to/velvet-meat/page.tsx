'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SECTIONS = [
    {
        step: 1,
        title: 'What Velveting Is and Why Vietnamese Cooking Uses It',
        content: `Velveting is a pre-treatment technique applied to meat before stir-frying or quick-cooking — a brief marinade of starch, egg white or baking soda, and sometimes oil that coats the protein fibres and protects them from the aggressive heat of a wok. The result is meat that stays tender, silky, and moist even after 3 minutes in a screaming-hot pan rather than turning tough, dry, and stringy as it would without treatment.\n\nThe technique originated in Chinese cooking — the Cantonese word for it roughly translates to "passing through oil" — and was adopted into Vietnamese cooking through the long culinary exchange between the two cultures. It is used wherever thin slices of beef, pork, or chicken need to be stir-fried quickly at high heat: bo luc lac, thit bo xao, ga xao sa ot, and dozens of everyday wok dishes.\n\nThe science is simple: starch forms a protective layer around each piece of meat that insulates the protein from direct contact with the hot pan surface. This slows the protein denaturation that causes toughness, keeping the interior soft while the exterior browns. Egg white or baking soda raises the pH of the meat surface slightly, which further inhibits toughening by interfering with cross-linking of the protein molecules during cooking.\n\nThe practical result is restaurant-quality tender meat from a home kitchen — achievable in 20 minutes of preparation with ingredients already in the pantry.`,
        tip: null,
    },
    {
        step: 2,
        title: 'Which Meats Benefit and Which Do Not',
        content: `Velveting produces the most dramatic improvement on lean, fast-cooking cuts that would otherwise toughen quickly in a hot wok.\n\nBeef: the primary candidate. Thin slices of topside, silverside, flank, or any lean cut benefit enormously from velveting. The tough connective tissue in these cuts has no time to break down during a 3-minute stir-fry — velveting compensates by protecting the muscle fibres instead. Ribeye and tenderloin are naturally tender enough that velveting is optional, but it still improves the texture.\n\nChicken breast: the second most common candidate. Breast meat dries out faster than any other protein in a hot wok. Velveting keeps it moist and prevents the chalky, dry texture that makes stir-fried chicken breast unpleasant. Thigh meat is more forgiving but also benefits.\n\nPork loin and tenderloin: lean cuts that toughen quickly at high heat. Belly and shoulder have enough fat to self-baste and generally do not require velveting.\n\nDo not velvet: fatty cuts like pork belly, meat that will be braised or slow-cooked (the long cooking time achieves its own tenderising), whole pieces that will be roasted or grilled, or any cut that will cook for more than 5 minutes — the starch coating breaks down over longer cooking times and the benefit is lost.`,
        tip: 'Slice the meat against the grain before velveting — this shortens the muscle fibres and produces a more tender result regardless of the velveting treatment. Grain-aligned slices remain chewy even when correctly velveted.',
    },
    {
        step: 3,
        title: 'The Two Methods — Egg White and Baking Soda',
        content: `There are two distinct velveting methods, each producing a slightly different result. Understanding the difference allows you to choose the correct method for each dish.\n\nMethod one — egg white and starch: the classic technique. Mix thin-sliced meat with egg white, cornstarch, a small amount of oil, and light seasoning. Leave for 15–20 minutes. The egg white adds a silky coating and a very faint richness. The starch forms the protective layer. The oil prevents the pieces from sticking together during cooking. This method produces meat with a smooth, slightly glossy surface — the texture associated with restaurant-style Vietnamese and Chinese stir-fries.\n\nMethod two — baking soda: the faster, more aggressive technique. Toss the meat with a small amount of baking soda — 0.25 tsp per 500g of meat — and leave for 15–20 minutes, then rinse thoroughly before cooking. The alkaline environment breaks down the protein structure on the surface, producing meat that is noticeably more tender — some would say slightly too tender, almost bouncy — compared to the egg white method. This is the technique used in many restaurant kitchens for volume production.\n\nFor Vietnamese home cooking, the egg white method is more appropriate for most dishes — it produces a natural texture rather than the slightly artificial tenderness of the baking soda method. The baking soda method is useful for very tough, inexpensive cuts where maximum tenderising is the priority over texture refinement.`,
        tip: 'Never use more than 0.25 tsp baking soda per 500g of meat. More produces meat with a distinctly soapy, metallic aftertaste that cannot be corrected by rinsing. The correct amount is barely detectable — present only as improved tenderness.',
    },
    {
        step: 4,
        title: 'The Egg White Method — Step by Step',
        content: `Slice the meat as thin as possible against the grain — 3–4mm is ideal for beef and pork, 5–6mm for chicken. Thicker slices do not velvet as effectively because the coating cannot protect the centre of the piece.\n\nFor 500g of sliced meat, combine: 1 egg white, 1.5 tbsp cornstarch, 1 tbsp neutral oil, 1 tsp light soy sauce or fish sauce, 0.5 tsp white pepper, 0.5 tsp sugar.\n\nAdd the meat to the marinade and mix thoroughly with clean hands — not a spoon, which does not coat evenly. Work the marinade into the meat for 1–2 minutes until every piece is evenly coated and the mixture feels slightly sticky and cohesive rather than loose and wet.\n\nLeave at room temperature for 15 minutes, or refrigerate for up to 2 hours. Room temperature velveting is faster because the starch hydrates more quickly at warmer temperatures. Refrigerator velveting produces a slightly more even result and is convenient for meal prep.\n\nBefore cooking, check the consistency: the meat should feel slippery and coated, not dry or sticky in clumps. If the coating feels too thick and starchy, add 1 tsp of water and mix again. If it feels too loose and wet, add 0.5 tsp cornstarch.\n\nDo not add salt to the velvet marinade beyond the soy sauce or fish sauce. Salt draws moisture out of the meat through osmosis during resting, which counteracts the moisture-retaining purpose of the velveting.`,
        tip: 'If you do not have egg white, substitute with 1 tbsp of plain water. The result is slightly less silky but still effective. The cornstarch is the non-negotiable component — the egg white is the refinement.',
    },
    {
        step: 5,
        title: 'The Baking Soda Method — Step by Step',
        content: `For 500g of sliced meat, use exactly 0.25 tsp baking soda — measure precisely. Combine with 1 tbsp water to dissolve, then toss with the meat until evenly coated. Leave for 15–20 minutes at room temperature. Do not leave longer — the alkaline environment continues to break down protein beyond 20 minutes and the texture becomes unpleasantly mushy.\n\nAfter 15–20 minutes, rinse the meat thoroughly under cold running water. This step is not optional — residual baking soda on the surface will create a soapy taste in the finished dish. Rinse until the water runs clear and the meat no longer feels slippery from the baking soda.\n\nPat the rinsed meat dry with paper towels. At this point, season the meat with fish sauce, white pepper, and a pinch of sugar as a brief secondary marinade — 5 minutes — before cooking. The primary marinade was the baking soda treatment; this secondary seasoning adds flavour that the rinse removed.\n\nThe baking soda method works particularly well for bo luc lac where maximum tenderness of inexpensive beef cuts is the goal, and for beef pho where thinly sliced raw beef is added to hot broth — the treatment ensures the beef stays silky even when cooked by residual heat rather than direct wok contact.`,
        tip: null,
    },
    {
        step: 6,
        title: 'Cooking Velveted Meat — What Changes in the Wok',
        content: `Velveted meat behaves differently in the wok than untreated meat, and understanding these differences prevents overcooking.\n\nVelveted meat browns more slowly than untreated meat. The starch coating insulates the surface from direct pan contact, so the Maillard browning reaction is slower. Do not mistake a paler surface for undercooked meat — velveted beef that looks pale is often correctly cooked. Judge doneness by time and texture, not by the level of browning.\n\nVelveted meat releases less moisture into the wok. Untreated meat releases significant steam as its moisture evaporates under high heat — this steam drops the wok temperature and causes the meat to stew rather than fry. Velveted meat retains its moisture, keeping the wok hotter and producing a better sear.\n\nDo not overcrowd velveted meat in the wok. The starch coating means the pieces will stick together more readily than untreated meat if they are touching. Cook in a single layer with space between pieces, in batches if necessary.\n\nFor bo luc lac and beef stir-fries: cook in a very hot wok with oil for 60–90 seconds per side — no more. The meat is done when it changes colour throughout. Rest for 1 minute off the heat before serving.\n\nFor chicken breast stir-fries: cook for 2–3 minutes total, stirring frequently. The egg white coating will turn opaque white when the chicken is cooked through.\n\nRemove the meat from the wok before building the sauce. Return to the wok only for the final 30 seconds of tossing in the sauce — this prevents overcooking during the sauce-building stage.`,
        tip: 'The oil in the velvet marinade prevents the pieces from sticking together in the wok. If you skipped the oil in the marinade, add an extra half tablespoon of oil to the wok before adding the meat to compensate.',
    },
];

const RELATED = [
    { title: 'Bo Luc Lac (Shaking Beef)', href: '/recipes/bo-luc-lac', time: '25 min' },
    { title: 'Thit Bo Xao (Vietnamese Beef Stir-Fry)', href: '/recipes/thit-bo-xao', time: '20 min' },
    { title: 'How to Deep Fry Without a Thermometer', href: '/how-to/deep-fry-no-thermometer', time: '10 min read' },
];

export default function VelvetMeatGuide() {
    return (
        <div style={{ minHeight: '100vh', background: '#FAFAF7', paddingTop: 88, fontFamily: "'DM Sans', sans-serif" }}>

            {/* Breadcrumb */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(75,46,26,0.45)' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span>/</span>
                    <Link href="/how-to" style={{ color: 'inherit', textDecoration: 'none' }}>How To</Link>
                    <span>/</span>
                    <span style={{ color: '#D97706' }}>How to Velvet Meat</span>
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
                    How to Velvet Meat for Vietnamese Stir-Fries
                </h1>

                <p style={{ fontSize: 17, color: 'rgba(75,46,26,0.6)', lineHeight: 1.75, marginBottom: 0 }}>
                    Egg white, cornstarch, or baking soda — the two velveting methods that keep beef, chicken, and pork silky and tender in a screaming-hot wok instead of dry and tough.
                </p>

                <div style={{ height: 1, background: 'rgba(75,46,26,0.08)', margin: '32px 0' }} />

                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Skill Level', value: 'Essential' },
                        { label: 'Prep Time', value: '15–20 minutes' },
                        { label: 'Key Ingredients', value: 'Egg white, cornstarch' },
                        { label: 'Used In', value: 'Bo Luc Lac, Beef Stir-Fries, Ga Xao' },
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