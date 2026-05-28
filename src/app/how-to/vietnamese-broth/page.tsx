'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function HowToBrothPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const { scrollYProgress } = useScroll({ target: mounted ? scrollRef : undefined, offset: ['start start', 'end end'] });
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    return (
        <article ref={scrollRef} style={{ backgroundColor: '#FAFAF7' }}>
            <motion.section style={{ position: 'relative', height: '80vh', minHeight: '480px', overflow: 'hidden', opacity: heroOpacity }}>
                <motion.div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/recipes/pho-bo-ha-noi.webp)', backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.4) 0%, rgba(45,26,14,0.2) 40%, rgba(45,26,14,0.94) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 72px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>HOW TO · BROTH & STOCK · VIETNAMESE TECHNIQUE</span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2rem, 5.5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, marginBottom: '20px', maxWidth: '860px' }}>
                                How to Make a Crystal-Clear Vietnamese Broth: The Rules That Actually Matter
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', maxWidth: '640px', lineHeight: 1.5, marginBottom: '28px' }}>
                                The difference between a great Vietnamese broth and a mediocre one is almost entirely technique — not time, not special ingredients, not expensive equipment. Just three rules done correctly.
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
                    Vietnamese broth clarity is not cosmetic. A properly made phở broth — clear enough to see the bottom of the bowl — indicates that the right techniques were used, and those same techniques are what produce the clean, pure flavor. Cloudy broth and muddy flavor come from the same mistakes.
                </motion.p>

                <P>The three rules of Vietnamese broth clarity are: blanch the bones before building the broth, never let the broth boil during the long simmer, and strain properly. These are not suggestions — they are the entire technique. Everything else (the aromatics, the spices, the seasoning) is secondary. A broth made incorrectly with excellent ingredients will be cloudy and muddy-tasting. A broth made correctly with ordinary ingredients will be clear and clean.</P>

                <SectionDivider />
                <SectionHeader>Rule 1: Blanch the Bones (Non-Negotiable)</SectionHeader>

                <P>Raw bones contain blood, proteins, and impurities that, if released into the broth during the main simmer, will turn it grey and cloudy no matter how carefully you skim. The solution is to blanch them first: cover with cold water, bring to a hard boil for 10 minutes, drain completely, rinse every bone under cold running water, and wash the pot. You will see the blanching water turn grey-brown with foam — this is exactly what you want out of your broth.</P>

                {[
                    { rule: 'Start with cold water', detail: 'Hot water seals the surface of bones before impurities can escape. Cold water draws them out gradually into the blanching liquid where they can be discarded.' },
                    { rule: 'Hard boil for 10 full minutes', detail: 'A gentle simmer does not produce enough agitation to fully draw out the blood and proteins. A full boil for 10 minutes clears the bones properly.' },
                    { rule: 'Rinse every bone individually', detail: 'Drain the blanching water and rinse each bone under cold running water, rubbing off any grey residue. Skip this step and some of the impurities return to the broth.' },
                    { rule: 'Wash the pot', detail: 'The pot itself has a layer of coagulated protein on the inside. Rinse it out completely before building the broth. Starting with a dirty pot partially undoes the blanching.' },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                        style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: i < 3 ? '1px solid rgba(75,46,26,0.07)' : 'none' }}>
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', fontWeight: 700, color: '#D97706', flexShrink: 0, lineHeight: 1.2 }}>{i + 1}</span>
                        <div>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#2D1A0E', marginBottom: '4px' }}>{item.rule}</p>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', lineHeight: 1.65, margin: 0 }}>{item.detail}</p>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <SectionHeader>Rule 2: Never Boil During the Long Simmer</SectionHeader>

                <P>This is the rule most often broken, and it is the most important one. Once the broth is built and the long simmer begins, the heat must stay low enough that the surface barely moves — a few gentle bubbles every few seconds, not a rolling boil. A hard boil emulsifies the fat and bone marrow into the broth, turning it permanently white and greasy. This cannot be fixed by skimming. Once emulsified, the broth is cloudy forever.</P>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {[
                        { label: 'CORRECT: Lazy simmer', color: '#166534', bg: '#F0FFF4', desc: '2-3 bubbles breaking the surface every few seconds. The broth looks almost still. Fat floats in separate droplets on the surface. Skim the foam that rises in the first 20 minutes, then leave it.' },
                        { label: 'INCORRECT: Hard boil', color: '#DC2626', bg: '#FFF5F5', desc: 'Vigorous bubbling that keeps the surface constantly agitated. The broth turns white as fat emulsifies into it. This cannot be reversed. Lower the heat immediately if this happens, but the damage is already done.' },
                    ].map((item) => (
                        <div key={item.label} style={{ background: item.bg, padding: '16px', borderRadius: '4px', borderLeft: `3px solid ${item.color}` }}>
                            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: item.color, letterSpacing: '1px', marginBottom: '8px' }}>{item.label}</div>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '12.5px', color: '#4B2E1A', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>Rule 3: Strain Through a Fine Mesh</SectionHeader>

                <P>After the long simmer, strain the broth through the finest strainer you have. A fine-mesh sieve removes the small floating particles that the simmer loosened from the bones. For restaurant-level clarity, strain through a muslin cloth or cheesecloth — this removes even the finest particles and produces a broth that is genuinely transparent.</P>

                <P>After straining: cool the broth quickly (an ice bath or cold water sink), then refrigerate overnight. The fat will solidify on the surface and can be lifted off in one sheet. The resulting broth is as clear as amber glass. This is the version you pour boiling over raw beef slices in the bowl. It needs to be boiling — not simmering, boiling — when it leaves the pot.</P>

                <SectionDivider />
                <SectionHeader>The 4 Vietnamese Broths and Their Specific Techniques</SectionHeader>

                {[
                    { name: 'Phở Bò (Beef)', key: 'Blanch beef knuckle and marrow bones. Char onion and ginger directly over flame. Toast spice bundle (star anise, cinnamon, black cardamom, coriander, cloves, fennel). Lazy simmer 4-6 hours. Season with fish sauce, rock sugar, salt.', time: '4-6 hours', clarity: 'Crystal clear amber', recipeSlug: 'pho-bo-ha-noi' },
                    { name: 'Bún Bò Huế (Spicy Beef)', key: 'Blanch pork and beef bones. Char aromatics. Add lemongrass and annatto oil for color. Dissolve mắm ruốc (fermented shrimp paste) in hot water, strain, add to broth. Bold red-orange color with funky depth.', time: '2-3 hours', clarity: 'Deep red-orange, not transparent', recipeSlug: 'hue-spicy-beef-noodle-soup' },
                    { name: 'Hủ Tiếu (Pork + Dried Squid)', key: 'Blanch pork bones. Add dried squid (cleaned, lightly toasted) for the characteristic sweet-clean flavor. Daikon adds sweetness. Lighter simmer than phở — 1.5-2 hours is enough. Season gently.', time: '1.5-2 hours', clarity: 'Pale gold, very clear', recipeSlug: 'hu-tieu' },
                    { name: 'Canh (Simple Home Broth)', key: 'No blanching needed for quick canh — these are thin vegetable and pork soups cooked in 20-30 minutes. Pork ribs or ground pork, water, fish sauce. The simplicity is the point.', time: '20-30 min', clarity: 'Clear but light-bodied', recipeSlug: 'com-tam' },
                ].map((broth, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.45 }}
                        style={{ margin: '16px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', padding: '16px 20px', borderLeft: '4px solid #D97706' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{broth.name}</h3>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: '#D97706', background: 'rgba(217,119,6,0.1)', padding: '3px 8px', borderRadius: '100px' }}>⏱ {broth.time}</span>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: '#166534', background: 'rgba(22,101,52,0.08)', padding: '3px 8px', borderRadius: '100px' }}>{broth.clarity}</span>
                            </div>
                        </div>
                        <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', lineHeight: 1.65, margin: '0 0 10px' }}>{broth.key}</p>
                        <Link href={`/recipes/${broth.recipeSlug}`} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600, textDecoration: 'none' }}>Full recipe →</Link>
                    </motion.div>
                ))}

                <SectionDivider />

                <P>A properly made Vietnamese broth requires patience more than skill. The skill is knowing which three rules to follow and why. The patience is sitting next to a pot at the lowest heat setting for four hours, checking occasionally that it is not boiling. Most people who have made mediocre phở broth have done it at too high a heat. Lower the heat, blanch the bones, strain well. The clarity follows.</P>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '20px 24px', background: '#2D1A0E', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#F5EDE3', fontWeight: 600 }}>Ready to apply these techniques?</span>
                    <Link href="/recipes/pho-bo-ha-noi" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#D97706', textDecoration: 'none' }}>Make authentic phở →</Link>
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