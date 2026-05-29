'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function HowToFriedShallotPage() {
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
            <motion.section style={{ position: 'relative', height: '75vh', minHeight: '440px', overflow: 'hidden', opacity: heroOpacity }}>
                <motion.div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(/images/recipes/hanh-phi.jpg)',
                    backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.35) 0%, rgba(45,26,14,0.15) 40%, rgba(45,26,14,0.94) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 72px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    HOW TO · HÀNH PHI · VIETNAMESE TECHNIQUE
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2rem, 5.5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px', maxWidth: '860px' }}>
                                How to Make Crispy Fried Shallots (Hành Phi) — The Most Useful Technique in Vietnamese Cooking
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', maxWidth: '640px', lineHeight: 1.5, marginBottom: '28px' }}>
                                Crispy, golden, sweet-savory fried shallots appear on top of phở, cơm tấm, bún bò Huế, bánh cuốn, and dozens of other dishes. They take 15 minutes to make and last two weeks. Once you know how, you will never stop making them.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 30, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>5 min read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Body */}
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '72px 24px 40px', fontFamily: 'Georgia, "Iowan Old Style", serif', color: '#2D1A0E' }}>

                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.35rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    Hành phi — crispy fried shallots — are the finishing touch that separates a home-cooked Vietnamese dish from one that tastes like a restaurant. They add crunch, sweetness, and a caramelized depth that no other garnish replicates. The technique is simple. The margin for error is small. This guide removes the guesswork.
                </motion.p>

                <Section>
                    <DropCap>H</DropCap>ành phi appear as a topping across the entire breadth of Vietnamese cooking — scattered over phở, piled onto cơm tấm, spooned over bánh cuốn, stirred into dipping sauces. They are used at the table like salt: automatically, generously, without thinking. A Vietnamese kitchen without a jar of fried shallots on the counter is missing a fundamental ingredient. The problem is that most people only make them on the day they need them, and most of those attempts produce either burnt or soggy shallots rather than the light, sweet, fully crisp result that makes the technique worth mastering.
                </Section>

                <SectionDivider />
                <SectionHeader>What You Need</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 20px', background: '#2D1A0E' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>INGREDIENTS & EQUIPMENT</span>
                    </div>
                    {[
                        { item: 'Shallots', amount: '200g (about 8-10 medium)', note: 'Asian shallots preferred — smaller and more pungent than Western ones. Uniformly sized shallots fry more evenly.' },
                        { item: 'Neutral oil', amount: 'Enough to submerge the shallots (about 300ml)', note: 'Rice bran, vegetable, or sunflower. Never olive oil — too low a smoke point and the flavor is wrong.' },
                        { item: 'Small saucepan or wok', amount: '—', note: 'Deep enough to fully submerge the shallots in oil. A small pan uses less oil than a large one.' },
                        { item: 'Fine-mesh strainer or spider', amount: '—', note: 'For lifting the shallots out quickly when they reach the right color.' },
                        { item: 'Paper towels', amount: '—', note: 'Laid out ready before you start frying — you need to drain immediately.' },
                        { item: 'Airtight jar', amount: '—', note: 'For storing. Fried shallots stay crispy for 2 weeks at room temperature in an airtight container.' },
                    ].map((row, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 160px 1fr', borderBottom: i < 5 ? '1px solid rgba(75,46,26,0.06)' : 'none', background: i % 2 === 0 ? '#FDFAF7' : '#fff' }}>
                            <div style={{ padding: '12px 16px', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '13px', fontWeight: 700, color: '#2D1A0E' }}>{row.item}</span>
                            </div>
                            <div style={{ padding: '12px 16px', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#D97706' }}>{row.amount}</span>
                            </div>
                            <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', lineHeight: 1.5 }}>{row.note}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>The Method: Step by Step</SectionHeader>

                {[
                    {
                        number: '01',
                        title: 'Slice the shallots uniformly',
                        color: '#D97706',
                        detail: 'Peel the shallots and slice into rings 2-3mm thick. Uniformity is the single most important prep step — thicker rings take longer to cook than thin ones, and in a mixed batch some will burn before others are done. Use a mandoline if you have one; if not, take your time with the knife and aim for consistent thickness throughout.',
                        tip: 'If some rings are much thicker than others, separate them and add the thicker ones to the oil first, then the thinner ones 2-3 minutes later.',
                        warning: null,
                    },
                    {
                        number: '02',
                        title: 'Start in cold oil — not hot',
                        color: '#D97706',
                        detail: 'Place the sliced shallots into the oil while the oil is still cold. Then put the pan on medium heat. This is the most counterintuitive step and the most important one. Starting in cold oil allows the shallots to dry out gradually as the oil heats — this is what produces crispiness. Starting in hot oil seals the outside before the moisture can escape, producing a golden exterior over a soggy interior.',
                        tip: 'The shallots should be completely submerged in oil. If they are not, add more oil.',
                        warning: 'This cold-start method is the difference between crispy and soggy. Do not skip it.',
                    },
                    {
                        number: '03',
                        title: 'Heat to medium and stir occasionally',
                        color: '#B45309',
                        detail: 'Turn heat to medium. The oil will come to temperature gradually with the shallots already in it. Stir every 2-3 minutes to ensure even cooking. At first nothing seems to be happening — the shallots are just sitting in warm oil. After 5-6 minutes, they will begin to turn pale gold at the edges. This is when you need to watch carefully.',
                        tip: 'Do not rush with high heat. High heat produces fast browning on the outside and raw, moist inside. Medium heat all the way through is correct.',
                        warning: null,
                    },
                    {
                        number: '04',
                        title: 'Pull them when they look too light — not too golden',
                        color: '#DC2626',
                        detail: 'This is the step everyone gets wrong the first time. Remove the shallots from the oil when they are pale golden — lighter than you think is done. They will continue cooking from residual heat for 30-60 seconds after removal, and will darken by another shade. If you wait until they look golden-brown in the oil, they will be burnt on the paper towel. The color on removal should be: pale gold, slightly transparent, not yet deeply colored.',
                        tip: 'When in doubt, pull early. You can always briefly return under-fried shallots to the oil. You cannot un-burn them.',
                        warning: 'The most common mistake: waiting too long. Shallots go from pale gold to burnt in under 60 seconds at the end of frying.',
                    },
                    {
                        number: '05',
                        title: 'Drain immediately and spread out',
                        color: '#166534',
                        detail: 'Lift the shallots out with a strainer or spider and immediately transfer to paper towels laid out in a single layer. Spread them apart so they are not touching. If they are piled on top of each other, steam builds up between them and makes them soggy. A single layer on paper towels allows moisture to escape from all sides. They will crisp further as they cool — give them 5 minutes before tasting.',
                        tip: 'The shallot-infused oil left in the pan is extremely valuable — use it for stir-fries, dipping sauces, or scallion oil. Never discard it.',
                        warning: null,
                    },
                    {
                        number: '06',
                        title: 'Store correctly — or they lose their crunch',
                        color: '#0369A1',
                        detail: 'Wait until the shallots are completely cool — at least 15 minutes — before storing. Putting warm shallots into a jar traps steam and makes them soggy. Once fully cool and completely crisp, transfer to an airtight glass jar. They will stay crispy at room temperature for up to 2 weeks. Do not refrigerate — the moisture in the refrigerator destroys the crunch within hours.',
                        tip: 'A small silica gel packet placed in the jar (food-safe type) extends crispness to 3-4 weeks. Available at hardware stores and pharmacies.',
                        warning: null,
                    },
                ].map((step, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5 }}
                        style={{ margin: '20px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden', borderLeft: `4px solid ${step.color}` }}>
                        <div style={{ padding: '12px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)', display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: step.color, flexShrink: 0 }}>{step.number}</span>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{step.title}</h3>
                        </div>
                        <div style={{ padding: '16px 20px' }}>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', lineHeight: 1.7, color: '#4B2E1A', marginBottom: '12px' }}>{step.detail}</p>
                            <div style={{ display: 'grid', gridTemplateColumns: step.warning ? '1fr 1fr' : '1fr', gap: '10px' }}>
                                <div style={{ background: '#FFFBF0', padding: '10px 14px', borderRadius: '4px', borderLeft: `3px solid ${step.color}` }}>
                                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: step.color, letterSpacing: '1px' }}>TIP: </span>
                                    <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', fontStyle: 'italic' }}>{step.tip}</span>
                                </div>
                                {step.warning && (
                                    <div style={{ background: '#FFF5F5', padding: '10px 14px', borderRadius: '4px', borderLeft: '3px solid #DC2626' }}>
                                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#DC2626', letterSpacing: '1px' }}>CRITICAL: </span>
                                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', fontStyle: 'italic' }}>{step.warning}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>Visual Color Guide: When to Pull</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 20px', background: '#2D1A0E' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>COLOR STAGES — IN THE OIL</span>
                    </div>
                    {[
                        { stage: 'White / translucent', time: '0-5 min', action: 'Keep going', color: '#F5EDE3', textColor: '#4B2E1A', verdict: 'Not ready', verdictColor: '#8B6F5A' },
                        { stage: 'Very pale gold', time: '6-8 min', action: 'Watch closely', color: '#FEF3C7', textColor: '#4B2E1A', verdict: 'Almost', verdictColor: '#D97706' },
                        { stage: 'Pale gold ← PULL HERE', time: '9-11 min', action: 'Remove immediately', color: '#FDE68A', textColor: '#2D1A0E', verdict: '✓ CORRECT', verdictColor: '#166534' },
                        { stage: 'Golden brown', time: '12+ min', action: 'Too late — already overdone', color: '#D97706', textColor: '#fff', verdict: '✗ Overdone', verdictColor: '#DC2626' },
                        { stage: 'Dark brown', time: '13+ min', action: 'Burnt — discard', color: '#92400E', textColor: '#fff', verdict: '✗ Burnt', verdictColor: '#DC2626' },
                    ].map((row, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 80px 100px 80px', borderBottom: i < 4 ? '1px solid rgba(75,46,26,0.08)' : 'none' }}>
                            <div style={{ background: row.color, minHeight: '48px' }} />
                            <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', borderRight: '1px solid rgba(75,46,26,0.06)' }}>
                                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '13px', fontWeight: 700, color: '#2D1A0E' }}>{row.stage}</span>
                            </div>
                            <div style={{ padding: '12px 10px', display: 'flex', alignItems: 'center', borderRight: '1px solid rgba(75,46,26,0.06)' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#8B6F5A' }}>{row.time}</span>
                            </div>
                            <div style={{ padding: '12px 10px', display: 'flex', alignItems: 'center', borderRight: '1px solid rgba(75,46,26,0.06)' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#4B2E1A', lineHeight: 1.4 }}>{row.action}</span>
                            </div>
                            <div style={{ padding: '12px 10px', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: row.verdictColor }}>{row.verdict}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>Troubleshooting</SectionHeader>

                {[
                    { problem: 'Shallots are soggy, not crispy', cause: 'Started in hot oil OR slices too thick', fix: 'Always cold-start. Slice to 2-3mm maximum. Spread on paper towels immediately and do not pile them.' },
                    { problem: 'Shallots burnt on the outside, raw inside', cause: 'Heat too high', fix: 'Medium heat throughout. Never rush with high heat — the cold-start low-medium method is non-negotiable.' },
                    { problem: 'Uneven color — some burnt, some pale', cause: 'Inconsistent slice thickness', fix: 'Use a mandoline for uniform thickness, or separate thick and thin slices and fry in two batches.' },
                    { problem: 'Shallots soft after storing', cause: 'Stored while still warm, or container not airtight', fix: 'Cool completely (15+ min) before storing. Use an airtight glass jar. Never refrigerate.' },
                    { problem: 'Bitter or acrid taste', cause: 'Slightly burnt — went past pale gold', fix: 'Pull earlier next time. If already bitter, discard — bitter fried shallots ruin every dish they touch.' },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                        style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: i < 4 ? '1px solid rgba(75,46,26,0.07)' : 'none' }}>
                        <span style={{ fontSize: '1.2rem', flexShrink: 0, lineHeight: 1.3 }}>⚠️</span>
                        <div>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#DC2626', marginBottom: '4px' }}>{item.problem}</p>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#8B6F5A', marginBottom: '5px' }}>Cause: {item.cause}</p>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A', lineHeight: 1.65, margin: 0 }}><strong style={{ fontFamily: 'DM Sans, sans-serif', color: '#166534', fontSize: '10px', fontWeight: 700 }}>FIX: </strong>{item.fix}</p>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>Where to Use Fried Shallots</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0 40px', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>USE THEM ON EVERYTHING</span>
                    </div>
                    <div style={{ padding: '16px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        {[
                            'Phở bò — scattered generously on top',
                            'Cơm tấm — piled onto the broken rice',
                            'Bánh cuốn — essential finishing touch',
                            'Bún bò Huế — stirred into the bowl',
                            'Hủ tiếu — added with spring onion',
                            'Cháo (congee) — the main topping',
                            'Dipping sauces — stirred in for depth',
                            'Scallion oil — mixed in for extra flavor',
                            'Fried rice — mixed through before serving',
                            'Any soup or noodle dish — always',
                        ].map((use, i) => (
                            <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                                <span style={{ color: '#D97706', flexShrink: 0, fontSize: '12px', marginTop: '2px' }}>·</span>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A', lineHeight: 1.5 }}>{use}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <Section>
                    The shallot-infused oil left after frying is worth as much as the shallots themselves. It carries the sweet, caramelized flavor of dozens of shallots into every drop. Use it for stir-frying vegetables, making scallion oil, drizzling over noodles, or as the base oil for dipping sauces. Vietnamese cooks never discard it. You should not either.
                </Section>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>USE YOUR FRIED SHALLOTS IN THESE RECIPES</p>
                    {[
                        { title: 'Phở Bò Hà Nội', slug: '/recipes/pho-bo-ha-noi' },
                        { title: 'Bánh Ướt Dầu Hẹ', slug: '/recipes/banh-uot-dau-he' },
                        { title: 'Cơm Tấm Sườn Nướng', slug: '/recipes/com-tam' },
                        { title: 'Bún Bò Huế', slug: '/recipes/hue-spicy-beef-noodle-soup' },
                    ].map((r) => (
                        <Link key={r.slug} href={r.slug}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.1)', textDecoration: 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2D1A0E', fontWeight: 600 }}>{r.title}</span>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600, flexShrink: 0, marginLeft: '12px' }}>Recipe →</span>
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