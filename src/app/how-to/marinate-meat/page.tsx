'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function HowToMarinatePage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const { scrollYProgress } = useScroll({ target: mounted ? scrollRef : undefined, offset: ['start start', 'end end'] });
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    return (
        <article ref={scrollRef} style={{ backgroundColor: '#FAFAF7' }}>
            <motion.section style={{ position: 'relative', height: '80vh', minHeight: '480px', overflow: 'hidden', opacity: heroOpacity }}>
                <motion.div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/recipes/suon-nuong.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.4) 0%, rgba(45,26,14,0.2) 40%, rgba(45,26,14,0.94) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 72px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>HOW TO · MARINADES · VIETNAMESE TECHNIQUE</span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2rem, 5.5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, marginBottom: '20px', maxWidth: '860px' }}>
                                How to Marinate Meat Vietnamese Style: The 4-Element Formula
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', maxWidth: '640px', lineHeight: 1.5, marginBottom: '28px' }}>
                                Vietnamese marinades are not about tenderizing — they are about flavor penetration and caramelization. Fish sauce, sugar, lemongrass, and garlic in the right ratios produce the char and depth that makes Vietnamese grilled meat taste unmistakably Vietnamese.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 29, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>6 min read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '72px 24px 40px', fontFamily: 'Georgia, serif', color: '#2D1A0E' }}>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.35rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    The grilled pork at a Vietnamese bún chả stall has a specific smell — lemongrass, caramelized fish sauce, slightly charred sugar — that is recognizable from twenty meters away and produces a Pavlovian response in anyone who has eaten it before. That smell comes entirely from the marinade and the heat. Here is exactly how it works.
                </motion.p>

                <P>Vietnamese marinades follow a four-element structure that appears, in varying proportions, across almost every grilled, fried, and roasted dish in the cuisine. Once you understand the structure, you can build any Vietnamese marinade from first principles without a recipe.</P>

                <SectionDivider />
                <SectionHeader>The 4-Element Formula</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 20px', background: '#2D1A0E' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>THE FORMULA — EVERY ELEMENT HAS A ROLE</span>
                    </div>
                    {[
                        { element: '1. Salt (fish sauce or soy sauce)', role: 'Penetration and umami', color: '#D97706', detail: 'Fish sauce is the primary salt in Vietnamese marinades. It penetrates the meat during resting, seasoning from the inside out. It also provides umami that plain salt cannot. Typical ratio: 1-2 tablespoons per 400g of protein. Use less for delicate proteins (chicken breast), more for robust ones (pork belly).' },
                        { element: '2. Sugar (granulated, palm, or caramel)', role: 'Color and caramelization', color: '#DC2626', detail: 'Sugar in a marinade caramelizes on contact with high heat, producing the char, color, and Maillard flavor that defines Vietnamese grilled meat. Without sugar, the meat is pale and flat-tasting. With sugar, it chars beautifully. Typical ratio: 1-1.5 tablespoons per 400g. More for dishes expected to have heavy char (bún chả patties).' },
                        { element: '3. Aromatics (lemongrass, garlic, shallots)', role: 'Fragrance and flavor identity', color: '#166534', detail: 'Minced finely — not roughly chopped. Fine mince maximizes surface area for flavor release and prevents large pieces from burning before the meat cooks. Lemongrass adds the citrus-floral note that screams "Vietnamese." Garlic adds depth. Shallots add sweetness. Most Vietnamese marinades use at least two of the three.' },
                        { element: '4. Fat (neutral oil or lard)', role: 'Carrier and moisture', color: '#7C3AED', detail: 'Fat carries the fat-soluble aromatic compounds from lemongrass and garlic into the meat surface. It also prevents sticking during cooking and helps distribute the marinade evenly. 1-2 tablespoons per marinade batch is standard. Without fat, the aromatics sit on the surface and burn before the meat cooks through.' },
                    ].map((item, i) => (
                        <div key={i} style={{ padding: '16px 20px', borderBottom: i < 3 ? '1px solid rgba(75,46,26,0.07)' : 'none', borderLeft: `4px solid ${item.color}` }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
                                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{item.element}</h3>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: item.color, background: `${item.color}12`, padding: '2px 8px', borderRadius: '100px' }}>{item.role}</span>
                            </div>
                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#6B5544', lineHeight: 1.65, margin: 0 }}>{item.detail}</p>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>How Long to Marinate — By Protein</SectionHeader>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '24px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    {[
                        { protein: 'Shrimp', time: '15 minutes max', reason: 'Fish sauce starts "cooking" shrimp through acid. Over-marinating makes the texture mushy.' },
                        { protein: 'Fish (whole or fillet)', time: '20-30 minutes', reason: 'Same reason as shrimp — the salt breaks down delicate fish proteins quickly.' },
                        { protein: 'Chicken (thin slices)', time: '30 minutes – 1 hour', reason: 'Thin cuts absorb flavor quickly. Over-marinating makes chicken stringy.' },
                        { protein: 'Chicken (bone-in)', time: '2-4 hours', reason: 'Thicker cuts need more time for flavor to penetrate to the bone.' },
                        { protein: 'Pork (thin slices)', time: '30 minutes – 2 hours', reason: 'Bún chả pork belly: 1-2 hours is ideal. Longer produces deeper flavor but risks over-salting.' },
                        { protein: 'Pork (thick cuts)', time: '4-8 hours or overnight', reason: 'Cơm tấm sườn: overnight in the refrigerator produces the deepest, most fully developed flavor.' },
                        { protein: 'Beef (thin strips)', time: '30 minutes – 1 hour', reason: 'Bò lúc lắc beef: short marinate preserves tenderness. Fish sauce toughens over-marinated beef.' },
                    ].map((row, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '130px 160px 1fr', borderBottom: i < 6 ? '1px solid rgba(75,46,26,0.06)' : 'none', background: i % 2 === 0 ? '#FDFAF7' : '#fff' }}>
                            <div style={{ padding: '12px 16px', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '13px', fontWeight: 700, color: '#2D1A0E' }}>{row.protein}</span>
                            </div>
                            <div style={{ padding: '12px 16px', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#D97706' }}>{row.time}</span>
                            </div>
                            <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#6B5544' }}>{row.reason}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>3 Classic Vietnamese Marinades</SectionHeader>

                {[
                    {
                        name: 'Lemongrass Pork (Bún Chả / Cơm Tấm)',
                        color: '#D97706',
                        ingredients: ['2 tbsp fish sauce', '1.5 tbsp sugar', '2 stalks lemongrass (inner stalk, very finely minced)', '3 garlic cloves, minced', '2 shallots, minced', '1 tbsp neutral oil', '½ tsp black pepper'],
                        technique: 'Combine all. Marinate pork belly or shoulder 1-2 hours at room temperature, or overnight in the refrigerator. Grill over high heat or charcoal until the sugar caramelizes and the edges char. The lemongrass will burn slightly — this is correct and desirable.',
                        usedFor: 'Bún chả, cơm tấm sườn, grilled pork skewers',
                    },
                    {
                        name: 'Vietnamese Chicken (Gà Nướng)',
                        color: '#166534',
                        ingredients: ['2 tbsp fish sauce', '1 tbsp sugar', '1 tbsp honey (for extra caramelization)', '3 garlic cloves, minced', '1 tsp turmeric', '1 tbsp neutral oil', '½ tsp five-spice powder (optional)'],
                        technique: 'Combine all. Score chicken pieces 3-4 times to allow marinade to penetrate to the bone. Marinate 2-4 hours minimum. Grill over medium-high heat, turning frequently — the honey causes rapid caramelization and burns easily on very high heat.',
                        usedFor: 'Grilled chicken, chicken rice, bánh mì filling',
                    },
                    {
                        name: 'Caramel Braising Marinade (Kho)',
                        color: '#7C3AED',
                        ingredients: ['3 tbsp fish sauce', '1.5 tbsp sugar', '1 tbsp caramel sauce (nước màu)', '2 shallots, minced', '2 garlic cloves, minced', '½ tsp black pepper'],
                        technique: 'This marinade is for braised dishes (thịt kho, cá kho). Apply to the protein, then sear briefly in a hot pan to caramelize the surface before adding liquid and braising. The pre-sear lock seals the marinade flavors into the protein before the long braise.',
                        usedFor: 'Thịt kho hột vịt, cá kho tộ, gà kho gừng',
                    },
                ].map((marinade, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5 }}
                        style={{ margin: '20px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden', borderLeft: `4px solid ${marinade.color}` }}>
                        <div style={{ padding: '12px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)' }}>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#2D1A0E', margin: '0 0 4px' }}>{marinade.name}</h3>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: marinade.color }}>Used for: {marinade.usedFor}</span>
                        </div>
                        <div style={{ padding: '16px 20px', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '16px' }}>
                            <div>
                                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: marinade.color, letterSpacing: '1px', marginBottom: '8px' }}>INGREDIENTS</div>
                                {marinade.ingredients.map((ing, j) => (
                                    <div key={j} style={{ display: 'flex', gap: '6px', marginBottom: '5px' }}>
                                        <span style={{ color: marinade.color, flexShrink: 0 }}>·</span>
                                        <span style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#4B2E1A', lineHeight: 1.4 }}>{ing}</span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: marinade.color, letterSpacing: '1px', marginBottom: '8px' }}>TECHNIQUE</div>
                                <p style={{ fontFamily: 'Georgia, serif', fontSize: '12.5px', color: '#4B2E1A', lineHeight: 1.65, margin: 0 }}>{marinade.technique}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />
                <P>The most common marinating mistake is using too much fish sauce and not enough sugar. The fish sauce handles the seasoning and umami; the sugar handles the caramelization and color. A marinade with correct fish sauce but insufficient sugar produces well-seasoned but pale, flat-looking grilled meat. Add the sugar back and the char returns.</P>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '20px 24px', background: '#2D1A0E', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#F5EDE3', fontWeight: 600 }}>Practice the lemongrass marinade</span>
                    <Link href="/recipes/bun-cha-hanoi" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#D97706', textDecoration: 'none' }}>Bún Chả recipe →</Link>
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