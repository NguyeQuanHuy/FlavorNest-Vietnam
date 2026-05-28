'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function HowToBalanceFlavorsPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const { scrollYProgress } = useScroll({ target: mounted ? scrollRef : undefined, offset: ['start start', 'end end'] });
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    return (
        <article ref={scrollRef} style={{ backgroundColor: '#FAFAF7' }}>
            <motion.section style={{ position: 'relative', height: '80vh', minHeight: '480px', overflow: 'hidden', opacity: heroOpacity }}>
                <motion.div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/recipes/nuoc-cham.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.4) 0%, rgba(45,26,14,0.2) 40%, rgba(45,26,14,0.94) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 72px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>HOW TO · FLAVOR BALANCE · VIETNAMESE TECHNIQUE</span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2rem, 5.5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, marginBottom: '20px', maxWidth: '860px' }}>
                                How to Balance Vietnamese Flavors: Sweet, Sour, Salty, and When to Add Each
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', maxWidth: '640px', lineHeight: 1.5, marginBottom: '28px' }}>
                                Vietnamese cooks do not follow recipes when they taste and adjust. They follow a framework — a mental model of how the five flavors interact — that tells them exactly what is missing and how to fix it. This is that framework.
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

            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '72px 24px 40px', fontFamily: 'Georgia, serif', color: '#2D1A0E' }}>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.35rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    A Vietnamese cook who says a dish "needs something" is usually right and usually knows what it needs within two tastes. This skill is not intuition — it is a trained pattern recognition built on understanding how the five flavors interact. You can learn the same pattern in one sitting.
                </motion.p>

                <P>Vietnamese culinary philosophy is rooted in the principle of âm dương (yin and yang) and ngũ hành (five elements), which map onto five tastes: mặn (salty), chua (sour), ngọt (sweet), đắng (bitter), and cay (spicy/pungent). A balanced Vietnamese dish does not necessarily contain all five — it contains the right ones in the right relationship for that specific dish. The cook's job is to taste and adjust until the balance is right.</P>

                <SectionDivider />
                <SectionHeader>The 5 Vietnamese Flavors and Their Roles</SectionHeader>

                {[
                    { flavor: 'Mặn (Salty)', icon: '🧂', color: '#0369A1', source: 'Fish sauce, soy sauce, salt, shrimp paste', role: 'The foundation flavor. Everything else balances against it. Vietnamese cooking uses fish sauce as its primary salt — it adds not just salinity but umami depth that salt alone cannot provide.', tooMuch: 'The dish tastes harsh, one-dimensional, and overpowering. Fix: add sugar (rounds the salt), acid (cuts through it), or more liquid.', tooLittle: 'The dish tastes flat and watery, even if the other flavors are correct. Fix: add fish sauce in small increments, taste between each addition.' },
                    { flavor: 'Chua (Sour)', icon: '🍋', color: '#D97706', source: 'Lime juice, rice vinegar, tamarind, fermented ingredients', role: 'Brightness and freshness. Acid lifts the other flavors and prevents the dish from tasting heavy. It also balances sweetness — a dish that tastes too sweet usually needs acid, not less sugar.', tooMuch: 'The dish is sharp and lip-puckering. Fix: add sugar (neutralizes acid directly), or fat (rounds acidity).', tooLittle: 'The dish tastes flat and heavy, even with correct salt and sugar. Acid is often the missing element that makes everything else pop.' },
                    { flavor: 'Ngọt (Sweet)', icon: '🍯', color: '#D97706', source: 'Sugar, rock sugar, palm sugar, coconut water, caramelized onion', role: 'Rounds and balances. Sugar counteracts harshness from salt and acid, adds body to sauces, and produces caramelization during cooking. It is not about making food sweet — it is about preventing food from tasting harsh.', tooMuch: 'The dish tastes cloying and flat. Fix: add fish sauce (salt cuts sweetness), add lime juice (acid cuts sweetness).', tooLittle: 'The dish tastes sharp and one-dimensional. A small pinch of sugar in almost any savory Vietnamese dish improves it.' },
                    { flavor: 'Đắng (Bitter)', icon: '🌿', color: '#166534', source: 'Fresh herbs (rau răm, perilla), bitter melon, coffee', role: 'Complexity and contrast. Vietnamese cooking uses bitterness subtly — in herbs, in some vegetables, in coffee. It prevents sweetness from becoming cloying and adds interest to otherwise one-dimensional dishes.', tooMuch: 'The dish is unpleasant. Rarely a cooking problem — usually from burnt aromatics or overcooked bitter vegetables.', tooLittle: 'Usually not a problem. The fresh herbs on the table provide this element at the diner\'s discretion.' },
                    { flavor: 'Cay (Spicy/Pungent)', icon: '🌶️', color: '#DC2626', source: 'Bird\'s eye chili, white pepper, ginger, lemongrass', role: 'Aroma and warmth. Vietnamese cooking uses pungent heat differently from Thai or Sichuan — it is aromatics and mild heat, not blasting spiciness. Chili provides aroma as much as heat. Ginger and lemongrass provide pungency without heat.', tooMuch: 'The heat overwhelms the other flavors. Fix: add fat (carries capsaicin away from taste receptors), add acid, add more liquid.', tooLittle: 'The dish lacks vibrancy. Even people who do not eat spicy food notice when chili is absent — the aroma is part of the dish.' },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.45 }}
                        style={{ margin: '20px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden', borderLeft: `4px solid ${item.color}` }}>
                        <div style={{ padding: '12px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                            <div>
                                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#2D1A0E', margin: '0 0 2px' }}>{item.flavor}</h3>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: item.color }}>Source: {item.source}</span>
                            </div>
                        </div>
                        <div style={{ padding: '14px 20px' }}>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', lineHeight: 1.7, color: '#4B2E1A', marginBottom: '12px' }}>{item.role}</p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                <div style={{ background: '#FFF5F5', padding: '10px', borderRadius: '4px', borderLeft: '3px solid #DC2626' }}>
                                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#DC2626', letterSpacing: '1px', marginBottom: '5px' }}>TOO MUCH</div>
                                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', margin: 0, lineHeight: 1.5 }}>{item.tooMuch}</p>
                                </div>
                                <div style={{ background: '#F0F7FF', padding: '10px', borderRadius: '4px', borderLeft: '3px solid #0369A1' }}>
                                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 700, color: '#0369A1', letterSpacing: '1px', marginBottom: '5px' }}>TOO LITTLE</div>
                                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544', margin: 0, lineHeight: 1.5 }}>{item.tooLittle}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>The Tasting Framework: How to Fix Any Dish</SectionHeader>

                <P>When a dish tastes wrong, the fix is almost always one of four adjustments. The sequence matters — taste in this order and make one adjustment at a time.</P>

                {[
                    { step: '01', question: '"Is it bland?"', answer: 'Add salt (fish sauce). A flat, watery flavor is almost always under-salted. Add fish sauce in ½ teaspoon increments, tasting between each. When you notice the other flavors suddenly "pop," you have found the correct salt level.' },
                    { step: '02', question: '"Is it harsh or one-dimensional?"', answer: 'Add sugar. A sharp, harsh, or overly salty taste is balanced by sugar. Add sugar in ¼ teaspoon increments. The sugar should not make the dish sweet — it should make the harshness disappear.' },
                    { step: '03', question: '"Is it heavy or flat despite correct salt and sweet?"', answer: 'Add acid (lime juice or vinegar). Acid lifts and brightens everything. A few drops of fresh lime can transform a dish that seemed complete. Add carefully — acid is easier to add than to remove.' },
                    { step: '04', question: '"Is it still missing something?"', answer: 'Add umami depth: a small amount of fish sauce (if not already present), a pinch of MSG, or a splash of the dish\'s characteristic liquid (coconut milk, broth). This is the "rounding" step — it fills in the gaps between the main flavors.' },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                        style={{ display: 'flex', gap: '16px', padding: '16px 0', borderBottom: i < 3 ? '1px solid rgba(75,46,26,0.07)' : 'none' }}>
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: '#D97706', flexShrink: 0, lineHeight: 1.2, minWidth: '32px' }}>{item.step}</span>
                        <div>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#2D1A0E', marginBottom: '6px' }}>{item.question}</p>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', lineHeight: 1.65, margin: 0 }}>{item.answer}</p>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>The Nước Chấm Test — Practice Flavor Balancing in 5 Minutes</SectionHeader>

                <P>The fastest way to develop flavor balance instinct is to make nước chấm (Vietnamese dipping sauce) without a recipe and adjust it until it is right. The sauce contains all five flavors in a simple, testable format. Here is the exercise:</P>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', padding: '24px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>THE 5-MINUTE EXERCISE</p>
                    {[
                        'Mix: 3 tbsp warm water, 2 tbsp fish sauce, 1.5 tbsp sugar. Stir until sugar dissolves.',
                        'Taste. It will be overly sweet and flat. This is intentional — this is "unbalanced."',
                        'Add ½ tbsp lime juice. Taste again. Notice how the acid makes everything pop.',
                        'Add more lime if it still needs brightness. Add a pinch of sugar if it is too sharp.',
                        'Add minced garlic and chili. Taste again. Notice how the aromatics add a new dimension.',
                        'Adjust fish sauce if it needs more savory depth. The correct balance: no single flavor dominates.',
                        'Write down the final ratios. This is YOUR baseline nước chấm. Every subsequent batch starts here.',
                    ].map((step, i) => (
                        <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#D97706', flexShrink: 0 }}>{i + 1}.</span>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A', margin: 0, lineHeight: 1.6 }}>{step}</p>
                        </div>
                    ))}
                </motion.div>

                <P>After making nước chấm ten times, you will know by taste alone when it is right. That same instinct — recognizing balance by taste, not by measuring — transfers to every other Vietnamese dish. The sauce is a training tool as much as a recipe.</P>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '20px 24px', background: '#2D1A0E', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#F5EDE3', fontWeight: 600 }}>The complete nước chấm guide</span>
                    <Link href="/stories/nuoc-cham-guide" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#D97706', textDecoration: 'none' }}>Read story →</Link>
                </motion.div>

                <div style={{ textAlign: 'center' }}>
                    <Link href="/how-to" style={{ color: '#D97706', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>← Back to How To</Link>
                </div>
            </div>
        </article>
    );
}

function P({ children }: { children: React.ReactNode }) {
    return <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }} style={{ fontSize: '1.15rem', lineHeight: 1.85, marginBottom: '28px', color: '#2D1A0E' }}>{children}</motion.p>;
}
function SectionHeader({ children }: { children: React.ReactNode }) {
    return <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '48px 0 24px' }}><div style={{ width: '28px', height: '2px', background: '#D97706', flexShrink: 0 }} /><h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{children}</h2></motion.div>;
}
function SectionDivider() {
    return <div style={{ display: 'flex', justifyContent: 'center', margin: '48px 0', gap: '12px' }}>{[0, 1, 2].map(i => <span key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#D97706', opacity: 0.6 }} />)}</div>;
}