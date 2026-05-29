'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function ObamaBourdainBunChaPage() {
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
            <motion.section style={{ position: 'relative', height: '100vh', minHeight: '600px', overflow: 'hidden', opacity: heroOpacity }}>
                <motion.div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(/images/recipes/bun-cha-ha-noi.jpg)',
                    backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.5) 0%, rgba(45,26,14,0.3) 35%, rgba(45,26,14,0.95) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    BÚN CHẢ HƯƠNG LIÊN · HANOI · MAY 23, 2016
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px', maxWidth: '900px' }}>
                                The $6 Dinner That Put Vietnamese Food on the World Stage
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '720px', lineHeight: 1.5, marginBottom: '32px' }}>
                                On May 23, 2016, Barack Obama — the sitting President of the United States — sat down on a blue plastic stool in a narrow Hanoi restaurant and ate bún chả with Anthony Bourdain. The bill was six dollars. Bourdain paid.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 29, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>9 min read</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ delay: 1.5, duration: 2.5, repeat: Infinity }}
                    style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '2px', fontFamily: 'DM Sans, sans-serif', textAlign: 'center' }}>
                    SCROLL TO READ ↓
                </motion.div>
            </motion.section>

            {/* Body */}
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px 40px', fontFamily: 'Georgia, "Iowan Old Style", "Palatino Linotype", serif', color: '#2D1A0E' }}>

                {/* Lead */}
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.45rem', lineHeight: 1.65, fontStyle: 'italic', color: '#4B2E1A', marginBottom: '48px', paddingLeft: '24px', borderLeft: '3px solid #D97706' }}>
                    No presidential dinner has ever looked like this. No head of state had ever been photographed on a plastic stool, chopsticks in hand, drinking Hà Nội beer from the bottle in a fluorescent-lit noodle shop. The photograph that appeared online the next morning made people laugh, made people emotional, made people immediately want to book a flight to Vietnam and find a bowl of bún chả.
                </motion.p>

                <Section>
                    <DropCap>T</DropCap>he plan was classified. Anthony Bourdain later described it as "super classified" — his camera crew did not know until two days before filming. The television network did not know. The State Department may not have known. The arrangement had been brokered a year earlier: Bourdain and Obama's team had been in contact about a potential appearance on Parts Unknown, the CNN travel-food series that Bourdain had been making since 2013. When Obama's May 2016 state visit to Vietnam was confirmed, the dinner was set.
                </Section>

                <Section>
                    On the day itself — May 23, 2016 — Obama had spent a full Monday doing what presidents do on state visits: meetings with Vietnamese leadership, signing agreements, making statements about diplomacy and military cooperation. It was formal, structured, consequential work. Then, in the early evening, he got into a vehicle with a small detail and went to a noodle shop on Lê Văn Hưu street in the Hai Bà Trưng district of Hanoi.
                </Section>

                <PullQuote>
                    "Low plastic stool, cheap but delicious noodles, cold Hanoi beer." — Anthony Bourdain, Twitter, May 23, 2016
                </PullQuote>

                <SectionDivider />
                <SectionHeader>The Restaurant: Bún Chả Hương Liên</SectionHeader>

                <Section>
                    Bún Chả Hương Liên is not a famous restaurant. It is not in the tourist areas of Hanoi's Old Quarter. It is on a narrow street in a residential neighborhood, family-run, several decades old, and serving essentially one dish: bún chả. Grilled pork patties and sliced pork belly in a warm sweet-savory dipping broth, with rice vermicelli, fresh herbs, and fried spring rolls on the side. The kind of place that has no sign worth mentioning and no English menu, because for most of its existence its customers were the people who lived nearby and knew exactly what it served.
                </Section>

                <Section>
                    Bourdain described arriving through bustling Hanoi traffic, the narrow tiled dining room packed with locals, the never-ending procession of trays from the kitchen, the savory smell of grilling pork. He and Obama went upstairs to one of the overflow rooms. They ordered bún chả. They drank Hà Nội beer from the bottle, cold, the way it is drunk there. The other diners, Bourdain noted afterward, seemed almost entirely uninterested in the President of the United States sitting among them. They were there for the bún chả.
                </Section>

                {/* Timeline */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '40px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '12px 20px', background: '#2D1A0E' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase' }}>MAY 23, 2016 — TIMELINE</span>
                    </div>
                    {[
                        { time: 'Morning', event: 'Obama meets with Vietnamese leadership in Hanoi. Formal state business — military agreements, diplomatic statements.' },
                        { time: 'Afternoon', event: 'Obama lifts the US arms embargo on Vietnam — the first time since the end of the war. A significant diplomatic moment.' },
                        { time: 'Early evening', event: 'Obama\'s motorcade arrives at Bún Chả Hương Liên on Lê Văn Hưu street. Small security detail. No fanfare.' },
                        { time: 'Dinner', event: 'Obama and Bourdain eat bún chả, drink Hà Nội beer, talk for approximately 30 minutes. Bourdain\'s CNN crew films. Total bill: $6. Bourdain pays.' },
                        { time: 'That night', event: 'Bourdain tweets a photograph taken by White House photographer Pete Souza: Obama on a blue plastic stool, beer in hand. The internet loses its mind.' },
                        { time: 'Following days', event: 'The photo circulates globally. Bún Chả Hương Liên is inundated with tourists. The restaurant becomes permanently famous.' },
                    ].map((row, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', borderBottom: i < 5 ? '1px solid rgba(75,46,26,0.06)' : 'none' }}>
                            <div style={{ padding: '12px 16px', background: i % 2 === 0 ? '#FDFAF7' : '#fff', borderRight: '1px solid rgba(75,46,26,0.06)', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#D97706' }}>{row.time}</span>
                            </div>
                            <div style={{ padding: '12px 16px', background: i % 2 === 0 ? '#FDFAF7' : '#fff', display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', color: '#4B2E1A', lineHeight: 1.5 }}>{row.event}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>The Conversation</SectionHeader>

                <Section>
                    The Parts Unknown episode that aired from this dinner — the Season 8 premiere — showed two men talking with unusual candor about diplomacy, foreign policy, and the specific pleasure of drinking beer in an old man bar. Bourdain asked Obama if he ever missed being able to simply go out in the afternoon and sit somewhere anonymous, put a sad song on the jukebox. Obama looked up, smiled, and said: "In about six months."
                </Section>

                <Section>
                    They talked about Vietnam — the country's relationship with the United States, the weight of that history, the fact that they were sitting in a city that had been bombed by American aircraft within living memory and were eating noodles and drinking local beer while Vietnamese diners around them went about their evening. They talked about the value of eating with people as a form of diplomacy that no summit can replicate. Bourdain, who had been making this argument implicitly through his entire television career, was sitting across from the leader of the free world having it confirmed.
                </Section>

                <Section>
                    Bourdain wrote about Obama afterward: "What can I tell you about what it's like to sit across from the President of the United States and drink beer from the bottle? I can tell you that Barack Obama was, in spite of having had a high-ranking leader of the Taliban whacked in Pakistan a few days previous, very relaxed and at ease. He seemed to enjoy himself sitting on a low plastic stool eating noodles and pork bits with chopsticks."
                </Section>

                <PullQuote>
                    "He seemed to enjoy himself sitting on a low plastic stool eating noodles and pork bits with chopsticks." — Anthony Bourdain
                </PullQuote>

                <SectionDivider />
                <SectionHeader>The Impact: What One Dinner Did</SectionHeader>

                <Section>
                    The immediate effect was simple and enormous: the photograph went viral and Bún Chả Hương Liên was overwhelmed. Within hours of the tweet appearing, tourists began arriving. By the next day, the restaurant was serving hundreds of bowls an hour. The owner could not keep up with demand. The floor was covered in napkins and discarded herbs. The place that had been a quiet neighborhood spot for decades became, overnight, one of the most photographed restaurants in Asia.
                </Section>

                <Section>
                    The longer-term effect was more significant. The dinner functioned as a kind of cultural endorsement at the highest possible level — not of a specific dish, but of a way of eating. The President of the United States, by choosing a plastic-stool noodle shop over a state dinner or a hotel restaurant, sent a message that the way Vietnamese people eat every day — cheap, abundant, sidewalk-level, unselfconscious — was not a curiosity or a poverty experience but one of the great food cultures in the world. This was not a new argument. Bourdain had been making it for years. But having it illustrated by a sitting president was something else entirely.
                </Section>

                <Section>
                    The dinner arrived at a specific historical moment in Vietnam-US relations. Obama was the third US president to visit Vietnam since the normalization of diplomatic relations in 1995, but his visit carried particular weight: he announced the lifting of the US arms embargo that had been in place since the end of the Vietnam War. The bún chả dinner — informal, equal, two men eating the same food from the same bowls — became visually inseparable from that diplomatic moment. The image of Obama on the plastic stool was seen in Vietnam as something more than a food story. It was read as a gesture of genuine respect.
                </Section>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '40px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                    {[
                        { num: '$6', label: 'Total bill for the dinner', sub: 'Bourdain paid' },
                        { num: '30 min', label: 'Duration of the meal', sub: 'Filmed for CNN Parts Unknown' },
                        { num: '105,000₫', label: '"Combo Obama" on the menu today', sub: 'Bún chả + spring roll + beer' },
                    ].map((stat) => (
                        <div key={stat.label} style={{ background: '#FEF3E2', padding: '20px', borderTop: '3px solid #D97706', textAlign: 'center' }}>
                            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#D97706', lineHeight: 1 }}>{stat.num}</div>
                            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#4B2E1A', marginTop: '8px', lineHeight: 1.4, fontWeight: 600 }}>{stat.label}</div>
                            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#8B6F5A', marginTop: '4px' }}>{stat.sub}</div>
                        </div>
                    ))}
                </motion.div>

                <SectionDivider />
                <SectionHeader>The Restaurant Now: What Became of Hương Liên</SectionHeader>

                <Section>
                    The table where Obama and Bourdain sat is no longer available for customers. The restaurant's owners eventually enclosed the entire setup — table, two blue plastic stools, the dishes, the chopsticks, the beer bottles — in a glass case on the second floor. It sits there now, preserved as if waiting for the return of its most famous diners, the metal-topped table still set for a meal, the stools tucked underneath. Bourdain, when he saw photographs of the glass case, posted: "Not sure how I feel about this."
                </Section>

                <Section>
                    The restaurant renamed itself, informally, "Bún Chả Obama." The menu now includes the "Combo Obama": bún chả, a seafood spring roll, and a bottle of Hà Nội beer, for approximately 105,000 VND — about four euros at current exchange rates. Tourists come from across the world to eat it. The place that had served the same dish to the same neighborhood for decades now receives visitors who have flown fourteen hours to sit where a president once sat.
                </Section>

                <Section>
                    The bún chả itself has not changed. It is still made the same way: the charcoal grill, the pork patties, the warm broth with fish sauce and sugar and vinegar, the rice vermicelli, the herbs. The food that had been feeding Hanoians for generations was the same food on May 23, 2016, and it is the same food today. What changed was the world's understanding of what it was eating.
                </Section>

                <SectionDivider />
                <SectionHeader>Why Bún Chả, Specifically</SectionHeader>

                <Section>
                    The choice of bún chả was not accidental. Of all the great dishes in Hanoi's extraordinary food culture, bún chả has a specific set of qualities that made it the right dish for this particular dinner. It is eaten communally — everything in the center of the table, dipped from shared bowls, assembled by the diner. It cannot be eaten alone or in silence. The ritual of wrapping noodles in lettuce, dipping them in the broth, eating them in company, is inherently conversational. It is food that requires you to be present and participating.
                </Section>

                <Section>
                    It is also entirely Hanoian — not a dish that exists anywhere else in quite the same form, not adapted for Western palates, not presented apologetically. Bourdain's consistent argument across his entire career was that the most important meals are the ones eaten in the places and in the manner that the local people eat them, without modification or intermediary. Bringing the President of the United States to a plastic-stool noodle shop on a residential street was not a stunt. It was the argument made concrete.
                </Section>

                <PullQuote>
                    "The food that had been feeding Hanoians for generations was the same food on May 23, 2016. What changed was the world's understanding of what it was eating."
                </PullQuote>

                <SectionDivider />

                <Section>
                    Bourdain died in June 2018, two years after the dinner. He was found in his hotel room in Strasbourg, France, while filming another episode of Parts Unknown. The Hanoi episode — the one that opened with Obama on the blue stool — remains one of the most-watched episodes of the series. In Vietnam, Bourdain is remembered with particular affection: a man who came to the country, ate at the plastic-stool level, and told the world what he found there.
                </Section>

                <Section>
                    The dinner at Bún Chả Hương Liên is remembered in Vietnam not primarily as a political event or a celebrity encounter. It is remembered as a moment when the country's food — the food that Vietnamese people eat every day, that costs next to nothing, that is made from ingredients found at any wet market — was recognized, on the largest possible stage, as one of the great things humans have figured out how to eat.
                </Section>

                <Section>
                    The bill was six dollars. Bourdain paid.
                </Section>

                <SectionDivider />

                {/* Recipe link */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#2D1A0E', borderRadius: '4px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '8px' }}>MAKE THE DISH</p>
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '14px', color: 'rgba(245,237,227,0.7)', fontStyle: 'italic', marginBottom: '20px', lineHeight: 1.6 }}>
                        The same dish Obama ate. Charcoal-grilled pork, warm dipping broth, rice vermicelli, fresh herbs. The recipe that made a president sit on a plastic stool and forget, for thirty minutes, that he was president.
                    </p>
                    <Link href="/recipes/bun-cha-hanoi"
                        style={{ display: 'inline-block', background: '#D97706', color: 'white', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '13px', letterSpacing: '0.05em', padding: '12px 28px', textDecoration: 'none', borderRadius: '4px' }}>
                        Bún Chả Hà Nội — Full Recipe →
                    </Link>
                </motion.div>

                {/* Related */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '32px 0', padding: '24px', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '16px' }}>ALSO READ</p>
                    {[
                        { title: 'The Honest Hanoi Street Food Guide', slug: '/stories/hanoi-street-food-guide' },
                        { title: 'Vietnamese Food Culture: The Unwritten Rules', slug: '/stories/vietnamese-food-culture-guide' },
                        { title: 'Why Vietnamese Food Conquered the World', slug: '/stories/why-vietnamese-food-is-famous' },
                    ].map((item) => (
                        <Link key={item.slug} href={item.slug}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(75,46,26,0.07)', textDecoration: 'none' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2D1A0E', fontWeight: 600 }}>{item.title}</span>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600, flexShrink: 0, marginLeft: '12px' }}>Read →</span>
                        </Link>
                    ))}
                </motion.div>

                <div style={{ marginTop: '48px', textAlign: 'center' }}>
                    <Link href="/stories" style={{ color: '#D97706', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>
                        ← Back to all stories
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
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>
                {children}
            </h2>
        </motion.div>
    );
}

function PullQuote({ children }: { children: React.ReactNode }) {
    return (
        <motion.blockquote initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ margin: '48px 0', padding: '24px 0', borderTop: '2px solid #D97706', borderBottom: '2px solid #D97706', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', lineHeight: 1.4, color: '#4B2E1A', textAlign: 'center', fontWeight: 400 }}>
            {children}
        </motion.blockquote>
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