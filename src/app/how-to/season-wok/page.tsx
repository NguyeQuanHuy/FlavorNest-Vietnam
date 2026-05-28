'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function HowToSeasonWokPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const { scrollYProgress } = useScroll({
        target: mounted ? scrollRef : undefined,
        offset: ['start start', 'end end'],
    });
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    return (
        <article ref={scrollRef} style={{ backgroundColor: '#FAFAF7' }}>

            {/* Hero */}
            <motion.section style={{ position: 'relative', height: '80vh', minHeight: '480px', overflow: 'hidden', opacity: heroOpacity }}>
                <motion.div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/recipes/nau-com.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.5) 0%, rgba(45,26,14,0.3) 40%, rgba(45,26,14,0.94) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 72px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    HOW TO · KITCHEN EQUIPMENT · WOK CARE
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2rem, 5.5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px', maxWidth: '860px' }}>
                                How to Season a Carbon Steel Wok — And Keep It Perfect for Decades
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', maxWidth: '640px', lineHeight: 1.5, marginBottom: '28px' }}>
                                A new carbon steel wok is grey and sticky. After seasoning, it is black, naturally non-stick, and better than any non-stick pan you have ever used. Here is exactly how to get there.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 29, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>7 min read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Body */}
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '72px 24px 40px', fontFamily: 'Georgia, "Iowan Old Style", serif', color: '#2D1A0E' }}>

                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.35rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    The Vietnamese grandmother's wok is black as coal, smooth as glass, and cooks food that sticks to nothing. Yours arrived from the store grey and industrial-looking, and everything stuck to it the first time you used it. The difference is seasoning — a layer of polymerized oil that builds up over dozens of uses and creates the most effective non-stick surface in any kitchen. Here is how to build it.
                </motion.p>

                <Section>
                    <DropCap>C</DropCap>arbon steel is the traditional wok material across all of East and Southeast Asia, including Vietnam. It heats faster than any other material, responds immediately to flame changes, develops a natural non-stick patina through use, and lasts indefinitely with basic care. The seasoning — the black coating that develops over time — is simply polymerized oil: a thin layer of oil that has been heated past its smoke point and bonded to the metal surface. It is not toxic, not a chemical coating, and not removable by normal washing. Every time you cook with fat in a seasoned wok, you add another microscopic layer.
                </Section>

                <SectionDivider />
                <SectionHeader>Before You Start: Remove the Factory Coating</SectionHeader>

                <Section>
                    New carbon steel woks come coated in a factory oil or lacquer that prevents rust during shipping and storage. This coating must be completely removed before seasoning — if you season over it, the seasoning will be uneven and will peel. This step takes 10 minutes and is not skippable.
                </Section>

                <StepCard
                    number="00"
                    title="Strip the factory coating"
                    color="#DC2626"
                    steps={[
                        'Fill the wok with water and bring to a boil.',
                        'Pour out the water. While the wok is hot and wet, scrub vigorously with steel wool or a stiff brush and dish soap.',
                        'Rinse thoroughly. The wok should look uniformly grey-blue, not shiny.',
                        'Dry immediately over medium heat on the stove until all water evaporates — about 2 minutes.',
                    ]}
                    tip="You will use dish soap here and only here. After seasoning, soap is not necessary and should be avoided. This is the one exception."
                />

                <SectionDivider />
                <SectionHeader>The Seasoning Process: Step by Step</SectionHeader>

                <Section>
                    There are two methods: stovetop (faster, requires high heat) and oven (slower, more even). For a Vietnamese kitchen with a gas stove, stovetop is correct. For an induction or electric stove, the oven method produces better results.
                </Section>

                <StepCard
                    number="01"
                    title="Heat the wok until it smokes"
                    color="#D97706"
                    steps={[
                        'Place the clean, dry wok on your largest burner over maximum heat.',
                        'Heat for 3-5 minutes until the metal begins to change color — it will shift from grey to blue to yellow-brown in patches. This is the metal oxidizing.',
                        'Keep heating until the entire surface has changed color and you see the first wisps of smoke.',
                        'The wok is now hot enough to polymerize oil.',
                    ]}
                    tip="The color change is not damage — it is the metal reaching seasoning temperature. A wok that has not changed color is not hot enough."
                />

                <StepCard
                    number="02"
                    title="Apply the thinnest possible layer of oil"
                    color="#D97706"
                    steps={[
                        'Using a folded paper towel held with tongs (the wok is extremely hot), apply a very small amount of high-smoke-point oil to the entire interior surface.',
                        'The amount should be far less than you think — about half a teaspoon for a 36cm wok.',
                        'Wipe it on, then wipe most of it off. The surface should look almost dry, with just a faint sheen.',
                        'Apply to the exterior sides as well if possible.',
                    ]}
                    tip="This is the most common mistake: too much oil. Thick oil layers polymerize unevenly and produce a sticky, patchy seasoning that flakes off. Thin layers bond permanently."
                />

                <StepCard
                    number="03"
                    title="Heat until the oil smokes and stops smoking"
                    color="#D97706"
                    steps={[
                        'Return the wok to maximum heat.',
                        'The oil will begin smoking immediately. This is the polymerization process — the oil molecules are cross-linking and bonding to the metal.',
                        'Continue heating until the smoking stops completely. This takes 2-3 minutes.',
                        'When the smoking stops, the oil has fully polymerized. One seasoning layer is complete.',
                    ]}
                    tip="Do not walk away during this step. The oil can combust if overheated without attention. Keep the extractor fan on and a lid nearby."
                />

                <StepCard
                    number="04"
                    title="Repeat 3-4 times"
                    color="#D97706"
                    steps={[
                        'Let the wok cool for 2 minutes between layers.',
                        'Repeat steps 02 and 03 three more times.',
                        'After 4 layers, the wok interior should be noticeably darker — brown-black rather than grey.',
                        'The wok is now ready for its first cook.',
                    ]}
                    tip="One seasoning session is not enough for a fully non-stick surface. 4 layers gives a functional base. The wok will continue improving with every use over the next 20-30 cooks."
                />

                <SectionDivider />

                {/* Best oils */}
                <SectionHeader>Which Oil to Use for Seasoning</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 20px', background: '#2D1A0E' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>SEASONING OIL COMPARISON</span>
                    </div>
                    {[
                        { oil: 'Flaxseed Oil', verdict: '⭐ Best', color: '#166534', note: 'Highest polymerization rate. Produces the hardest, most durable seasoning. Expensive but you use tiny amounts.' },
                        { oil: 'Grapeseed Oil', verdict: '⭐ Excellent', color: '#166534', note: 'High smoke point, polymerizes well, inexpensive. The best practical choice for most home cooks.' },
                        { oil: 'Rice Bran Oil', verdict: '✓ Good', color: '#D97706', note: 'High smoke point, neutral flavor. Widely available in Asian grocery stores. Excellent value.' },
                        { oil: 'Vegetable / Canola Oil', verdict: '✓ Acceptable', color: '#D97706', note: 'Works fine for initial seasoning. Lower polymerization rate than the above. Readily available.' },
                        { oil: 'Coconut Oil', verdict: '✗ Avoid', color: '#DC2626', note: 'Low smoke point, becomes rancid, produces sticky rather than hard seasoning.' },
                        { oil: 'Olive Oil', verdict: '✗ Avoid', color: '#DC2626', note: 'Low smoke point, strong flavor, does not polymerize well. Produces a soft, gummy coating.' },
                        { oil: 'Butter / Lard', verdict: '✗ Not for seasoning', color: '#DC2626', note: 'Excellent for cooking in a seasoned wok, not for building the initial seasoning layer.' },
                    ].map((row, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 120px 1fr', borderBottom: i < 6 ? '1px solid rgba(75,46,26,0.06)' : 'none' }}>
                            <div style={{ padding: '12px 16px', background: i % 2 === 0 ? '#FDFAF7' : '#fff', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '13px', fontWeight: 700, color: '#2D1A0E' }}>{row.oil}</span>
                            </div>
                            <div style={{ padding: '12px 16px', background: i % 2 === 0 ? '#FDFAF7' : '#fff', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: row.color }}>{row.verdict}</span>
                            </div>
                            <div style={{ padding: '12px 16px', background: i % 2 === 0 ? '#FDFAF7' : '#fff', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544' }}>{row.note}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>Daily Care: The 60-Second Routine</SectionHeader>

                <Section>
                    A seasoned carbon steel wok requires almost no maintenance — less than a non-stick pan. The entire cleaning routine, done correctly, takes 60 seconds and preserves the seasoning indefinitely.
                </Section>

                {[
                    { step: '1', action: 'Clean while still warm.', detail: 'While the wok is still warm (not screaming hot), rinse under hot running water. Use a bamboo brush or soft brush — no steel wool, no abrasive sponge.' },
                    { step: '2', action: 'No soap required.', detail: 'A well-seasoned wok does not need soap. The polymerized oil layer is not removed by hot water alone. If there is stuck food, add water and bring to a brief boil to loosen it.' },
                    { step: '3', action: 'Dry immediately.', detail: 'Place the wok on the stove over medium heat for 1-2 minutes until all water has evaporated. Carbon steel rusts rapidly if left wet — even briefly.' },
                    { step: '4', action: 'Wipe with a drop of oil.', detail: 'While still warm, use a paper towel to wipe a tiny amount of oil over the interior. This maintains the seasoning and prevents any surface rust.' },
                    { step: '5', action: 'Store dry.', detail: 'Store in a dry place. Never store with a lid tightly sealed — trapped moisture causes rust. A paper towel inside the wok while stored absorbs any residual moisture.' },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                        style={{ display: 'flex', gap: '16px', padding: '14px 0', borderBottom: i < 4 ? '1px solid rgba(75,46,26,0.07)' : 'none' }}>
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: '#D97706', flexShrink: 0, lineHeight: 1.2, minWidth: '24px' }}>{item.step}</span>
                        <div>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#2D1A0E' }}>{item.action} </span>
                            <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', lineHeight: 1.65 }}>{item.detail}</span>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>Troubleshooting: Common Problems and How to Fix Them</SectionHeader>

                {[
                    {
                        problem: 'Seasoning is sticky and gummy',
                        cause: 'Too much oil was applied per layer',
                        fix: 'Heat the wok to maximum on the stove until the sticky layer burns off (it will smoke heavily — this is normal). Apply next seasoning layer with much less oil.',
                        icon: '🤚',
                    },
                    {
                        problem: 'Seasoning is patchy and uneven',
                        cause: 'Oil was applied before the wok was hot enough, or heat was uneven',
                        fix: 'Continue cooking with the wok — uneven seasoning evens out over 10-20 uses. Cook fatty foods (stir-fried pork belly, fried rice) to accelerate the process.',
                        icon: '🔶',
                    },
                    {
                        problem: 'Orange rust spots appeared',
                        cause: 'Wok was left wet or stored in a damp environment',
                        fix: 'Scrub the rust spots with steel wool and a little dish soap until they disappear. Rinse, dry immediately over heat, and re-season those areas with 2-3 oil layers.',
                        icon: '🟠',
                    },
                    {
                        problem: 'Food is sticking',
                        cause: 'Seasoning is new (under 20-30 cooks) or wok was not preheated enough',
                        fix: 'Preheat the wok longer before adding oil — a properly preheated carbon steel wok is non-stick. The wok should be hot enough that a drop of water vaporizes instantly on contact.',
                        icon: '🍳',
                    },
                    {
                        problem: 'Seasoning came off in patches after washing',
                        cause: 'Soap was used on a young seasoning, or abrasive scrubber was used',
                        fix: 'Re-season the affected areas. Avoid soap until the seasoning is established (20+ cooks). Use only hot water and a soft brush for routine cleaning.',
                        icon: '⚠️',
                    },
                    {
                        problem: 'Wok smells rancid',
                        cause: 'Wok was stored with oil on it in a warm environment',
                        fix: 'Scrub thoroughly with soap and steel wool to remove the rancid oil layer. Re-season from scratch. Store without oil coating if the kitchen is warm.',
                        icon: '👃',
                    },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.4 }}
                        style={{ margin: '16px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', padding: '16px 20px' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</span>
                            <div>
                                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#DC2626', marginBottom: '4px' }}>{item.problem}</p>
                                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#8B6F5A', marginBottom: '8px' }}>Cause: {item.cause}</p>
                                <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A', lineHeight: 1.65, margin: 0 }}><strong>Fix:</strong> {item.fix}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />

                <Section>
                    The carbon steel wok in my current kitchen is five years old. The interior is completely black — a deep, even black that took about six months of regular cooking to develop. Food slides off it. It requires thirty seconds of maintenance after each use. I have never used dish soap on it since the initial stripping. It is, without question, the best piece of cookware I own. The initial seasoning took forty minutes. The payoff has been five years and counting.
                </Section>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '8px' }}>NOW COOK SOMETHING</p>
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', fontStyle: 'italic', marginBottom: '16px', lineHeight: 1.6 }}>
                        The best first dish for a newly seasoned wok: rau muống xào tỏi. High heat, garlic, oil — exactly what the wok needs to build its seasoning further.
                    </p>
                    {[
                        { title: 'Rau Muống Xào Tỏi — Perfect First Wok Recipe', slug: '/recipes/rau-muong-xao-toi' },
                        { title: 'Cơm Chiên Dương Châu — Fried Rice', slug: '/recipes/com-chien-duong-chau' },
                        { title: 'How to Set Up a Vietnamese Kitchen', slug: '/how-to/vietnamese-kitchen-setup' },
                    ].map((r) => (
                        <Link key={r.slug} href={r.slug}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.1)', textDecoration: 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2D1A0E', fontWeight: 600 }}>{r.title}</span>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600, flexShrink: 0, marginLeft: '12px' }}>Go →</span>
                        </Link>
                    ))}
                </motion.div>

                <div style={{ marginTop: '48px', textAlign: 'center' }}>
                    <Link href="/how-to" style={{ color: '#D97706', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
                        ← Back to How To guides
                    </Link>
                </div>
            </div>
        </article>
    );
}

// ── Sub-components ──────────────────────────────────────────────────────────

function StepCard({ number, title, color, steps, tip }: {
    number: string; title: string; color: string; steps: string[]; tip: string;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5 }}
            style={{ margin: '24px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden', borderLeft: `4px solid ${color}` }}>
            <div style={{ padding: '14px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: color }}>{number}</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{title}</h3>
            </div>
            <div style={{ padding: '16px 20px' }}>
                <ol style={{ margin: '0 0 14px', paddingLeft: '20px' }}>
                    {steps.map((step, i) => (
                        <li key={i} style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', lineHeight: 1.7, color: '#4B2E1A', marginBottom: '8px' }}>{step}</li>
                    ))}
                </ol>
                <div style={{ padding: '10px 14px', background: '#FFFBF0', borderRadius: '4px', borderLeft: `3px solid ${color}` }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: color, letterSpacing: '1px' }}>KEY: </span>
                    <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', fontStyle: 'italic' }}>{tip}</span>
                </div>
            </div>
        </motion.div>
    );
}

function Section({ children }: { children: React.ReactNode }) {
    return (
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }}
            style={{ fontSize: '1.15rem', lineHeight: 1.85, marginBottom: '28px', color: '#2D1A0E' }}>
            {children}
        </motion.p>
    );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '48px 0 24px' }}>
            <div style={{ width: '28px', height: '2px', background: '#D97706', flexShrink: 0 }} />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{children}</h2>
        </motion.div>
    );
}

function DropCap({ children }: { children: React.ReactNode }) {
    return (
        <span style={{ float: 'left', fontFamily: 'Playfair Display, serif', fontSize: '5rem', fontWeight: 700, lineHeight: 0.85, color: '#D97706', paddingRight: '12px', paddingTop: '6px' }}>
            {children}
        </span>
    );
}

function SectionDivider() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '48px 0', gap: '12px' }}>
            {[0, 1, 2].map(i => <span key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#D97706', opacity: 0.6 }} />)}
        </div>
    );
}