'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function VietnameseFamilyMealThenNowPage() {
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
                    backgroundImage: 'url(/images/recipes/nau-com.jpg)',
                    backgroundSize: 'cover', backgroundPosition: 'center', scale: heroScale
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,26,14,0.5) 0%, rgba(45,26,14,0.3) 35%, rgba(45,26,14,0.95) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 24px 80px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                                <span style={{ color: '#D97706', fontSize: '12px', letterSpacing: '2px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>
                                    BỮA CƠM GIA ĐÌNH · VIETNAMESE FAMILY MEAL · THEN & NOW
                                </span>
                            </div>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#FFF', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px', maxWidth: '900px' }}>
                                The Vietnamese Family Dinner Table: What Changed, What Was Lost, and What Quietly Survived
                            </h1>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '720px', lineHeight: 1.5, marginBottom: '32px' }}>
                                The round wooden tray on the floor. The grandmother who cooked since 4pm. The rule that you eat together or you do not eat. These things are still happening — just in fewer households than before.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                                <span>By Quan Huy Nguyen</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>May 26, 2026</span>
                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                                <span>8 min read</span>
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
                    My grandmother started cooking at 4pm every day for a dinner that was on the table at 6. She never used a recipe. She tasted everything at least three times. The rice cooker was the only appliance she trusted. When I ask my cousins in Ho Chi Minh City how they eat now, they say: "GrabFood, mostly." The distance between these two sentences is a generation.
                </motion.p>

                <Section>
                    <DropCap>T</DropCap>he traditional Vietnamese family meal — bữa cơm gia đình — is one of the most deeply codified social rituals in Vietnamese culture. It has a structure, a hierarchy, a set of unspoken rules that every Vietnamese person absorbs before they are old enough to understand them. The eldest person at the table is served first. You do not begin eating before the oldest person begins. You offer food to others before helping yourself. You never point chopsticks upward in a bowl of rice — it looks like incense at a funeral. You wait to be invited to eat before you start. These are not rules anyone writes down. They are simply known.
                </Section>

                <Section>
                    The meal itself has a structure too: a pot of steamed rice at the center, shared by everyone; one or two protein dishes (thịt kho, cá kho, gà kho gừng); one vegetable dish (rau muống xào tỏi, canh bầu); one soup (canh rau ngót, canh chua). Each person has their own bowl of rice but takes from the shared dishes. This communal eating style — everything in the middle, everyone reaching — is the opposite of the Western individual plate. It assumes that the family eats together, from the same food, at the same time. That assumption is under pressure in ways it has never been before.
                </Section>

                <PullQuote>
                    "The shared tray was not just a way of serving food. It was a statement about who you were to each other."
                </PullQuote>

                <SectionDivider />
                <SectionHeader>The Traditional Table: How It Was</SectionHeader>

                <Section>
                    In a traditional Vietnamese household — the kind that was common across the country until the 1990s and still exists in rural areas and some urban families — the dinner table was the fixed point around which the family organized its day. The mother or grandmother began cooking in the mid-afternoon. The ingredients were bought fresh that morning from the wet market. Nothing was frozen. The rice was washed and soaked. The fish was cleaned and marinated. By 5pm the house smelled of fish sauce and garlic, and every family member knew that dinner was approaching.
                </Section>

                <Section>
                    The meal was eaten on a mâm — a low round tray, usually wooden or lacquered, placed on the floor or on a low table. Three generations might eat together: grandparents, parents, children. The grandfather might be served first, a small gesture of respect that required no explanation. The children ate quickly because they had been waiting since they smelled the food cooking. The adults talked. Problems were solved, or at least aired. Information about the family passed from the grandparents downward. Recipes were not written down — they were demonstrated, observed, absorbed.
                </Section>

                <ThenNowCard
                    aspect="The Setting"
                    then="A round wooden mâm on the floor or low table. Three generations seated together, cross-legged, close enough to reach all the shared dishes. No chairs required."
                    now="A dining table with chairs in urban apartments, or increasingly, the coffee table in the living room, where the television is. Rural families still often use the traditional mâm. Urban families have mostly moved to chairs."
                    whatsLeft="The communal serving style — shared dishes in the center, everyone's rice bowl personal — persists across both settings. The structure of the meal survives the change in furniture."
                />

                <ThenNowCard
                    aspect="Who Cooks"
                    then="The mother or grandmother, beginning in the mid-afternoon. Cooking was expected, daily, non-negotiable. A woman who did not cook for her family carried social weight she did not want."
                    now="More evenly distributed in young urban families, though the shift is slower than in Western countries. Delivery apps (GrabFood, ShopeeFood) have replaced cooking entirely in some households. Market research in 2025 found that urban Vietnamese families order delivery an average of 3-4 times per week."
                    whatsLeft="The expectation that someone cooks from scratch for important family occasions — Tết, anniversaries, family reunions — remains strong. The daily cooking has become more negotiable; the ceremonial cooking has not."
                />

                <ThenNowCard
                    aspect="The Dishes"
                    then="Four to five dishes for a family of four: rice, one protein (braised, grilled, or fried), one vegetable, one soup. All made from scratch. Seasonal and local by necessity — the wet market sold what was available that day."
                    now="The same structure survives in traditional households. In modern urban households, one or two dishes may be home-cooked and others ordered. Imported and out-of-season ingredients are available year-round. Processed and pre-prepared ingredients are used more freely."
                    whatsLeft="The four-dish structure — rice, protein, vegetable, soup — persists as the default mental template for a proper Vietnamese meal, even when some components are ordered rather than cooked. Ask any Vietnamese person what a proper home meal looks like and they will describe this structure."
                />

                <ThenNowCard
                    aspect="Eating Together"
                    then="Everyone ate together, at the same time, or the meal was held until they did. A family member who was late for dinner without good reason created mild social tension. The table was not set without everyone present."
                    now="Urban schedules — late work hours, children's extracurricular activities, different shift times — have made simultaneous eating genuinely difficult for many families. A 2024 survey found that fewer than 40% of urban Vietnamese families eat dinner together every day, down from an estimated 80% in the 1990s."
                    whatsLeft="Weekend meals, particularly Sunday lunch, remain a strong gathering point. The daily family dinner is under pressure; the weekly family meal holds."
                />

                <SectionDivider />
                <SectionHeader>What Changed, and Why</SectionHeader>

                <Section>
                    The forces that changed the Vietnamese family table are the same forces that changed family tables in every rapidly urbanizing society: longer working hours, longer commutes, smaller living spaces, the arrival of food delivery, and the loosening of the social structures that made shared mealtimes non-negotiable. In Vietnam, these forces arrived faster than in most countries. The country's GDP grew at an average of 6-7% annually for thirty years. Ho Chi Minh City grew from a city of three million to a megacity of thirteen million. Hanoi doubled in size. Millions of people left rural family households for urban apartments where the kitchen is smaller, the schedule is less predictable, and the grandparents are several provinces away.
                </Section>

                <Section>
                    Food delivery has been particularly transformative. GrabFood launched in Vietnam in 2018 and within five years had become a daily habit for urban Vietnamese families. The ease of ordering — a few taps, food at the door in thirty minutes — removed the practical necessity of daily home cooking in a way that no previous convenience had managed. The microwave did not do this. The supermarket did not do this. The smartphone did.
                </Section>

                <Section>
                    The dishes themselves have also changed, in ways that reflect broader cultural shifts. The traditional Vietnamese dinner table was almost entirely Vietnamese food — regional dishes, family recipes, seasonal produce. The modern urban table includes Korean BBQ, Japanese sushi, pizza, and bubble tea alongside phở and cơm tấm. Vietnamese children who grew up in cities in the 2010s have as strong a relationship with Korean fried chicken as with bún chả. This is not a lament — it is a description of what happens when a food culture opens to the world. Something is gained. Something changes.
                </Section>

                <PullQuote>
                    "The smartphone did what the microwave and the supermarket could not: it made daily home cooking genuinely optional."
                </PullQuote>

                <SectionDivider />
                <SectionHeader>What Survived</SectionHeader>

                <Section>
                    The most striking thing about the Vietnamese family meal, in the face of all this pressure, is how much has survived. The four-dish structure persists. The communal serving style persists. The expectation that important occasions are marked by home-cooked food persists — weddings, Tết, death anniversaries, the first meal after a long journey, the meal that marks a reunion. These occasions still require the real thing: someone spending the afternoon in the kitchen, the smell of fish sauce and garlic reaching every room of the house, the table loaded with more food than the family can reasonably eat.
                </Section>

                <Section>
                    The dishes that carry the most emotional weight have proven most resistant to change. Thịt kho hột vịt — the caramelized pork and egg stew that is the centerpiece of the Southern Tết table — is still made from scratch, still takes two hours, still tastes wrong if the coconut water is substituted with tap water. Bánh chưng is still wrapped in leaves and boiled overnight. Canh chua cá lóc is still made with the specific sour notes that require tamarind and fresh pineapple, not a pre-made sauce. These dishes are not made every week. They are made for the moments that matter most. Their survival is the family meal's survival, in concentrated form.
                </Section>

                <Section>
                    The conversations at the table have also survived, even when the table has shrunk. Vietnamese family meals were never primarily about the food — they were about the talking. The information passed from the grandparents down. The problems aired and sometimes solved. The slow negotiation of family relationships that can only happen when people are sitting still in the same room with food in front of them. These conversations happen less frequently than they once did, but when they happen, they still happen around food.
                </Section>

                <SectionDivider />
                <SectionHeader>The Dishes That Define Then and Now</SectionHeader>

                <Section>
                    There are dishes that represent the traditional Vietnamese family table with particular clarity — meals that, when Vietnamese people abroad think about home cooking, come to mind first. And there are dishes that represent the way the table has changed: quicker, more adapted to modern schedules, no less Vietnamese in spirit.
                </Section>

                {[
                    {
                        category: 'The Traditional Table — Sunday Cooking',
                        color: '#2D1A0E',
                        dishes: [
                            { name: 'Thịt Kho Hột Vịt', note: 'Two hours minimum. Cannot be rushed.', slug: 'thit-kho-hot-vit' },
                            { name: 'Canh Rau Ngót Thịt Băm', note: 'The weeknight soup every Northern household knows.', slug: 'canh-rau-ngot-thit-bam' },
                            { name: 'Rau Muống Xào Tỏi', note: 'Ten minutes. Three ingredients. Non-negotiable.', slug: 'rau-muong-xao-toi' },
                            { name: 'Cá Kho Tộ', note: 'The clay pot fish that smells like every grandmother\'s kitchen.', slug: 'ca-kho-to' },
                        ]
                    },
                    {
                        category: 'The Modern Table — Quick & Still Authentic',
                        color: '#D97706',
                        dishes: [
                            { name: 'Gà Kho Gừng', note: 'Forty minutes, one pan, weeknight-friendly.', slug: 'ga-kho-gung' },
                            { name: 'Đậu Hũ Sốt Cà', note: 'Vegan, twenty minutes, three generations of approval.', slug: 'dau-hu-sot-ca' },
                            { name: 'Trứng Chiên Thịt', note: 'The dish every Vietnamese student learns to make alone.', slug: 'trung-chien-thit' },
                            { name: 'Canh Trứng Cà Chua', note: 'Ten minutes. The simplest bowl that tastes most like home.', slug: 'canh-trung-ca-chua' },
                        ]
                    }
                ].map((table) => (
                    <motion.div key={table.category} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
                        style={{ margin: '24px 0', background: '#fff', border: `2px solid ${table.color}`, borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ background: table.color, padding: '12px 20px' }}>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', color: '#fff', textTransform: 'uppercase' }}>{table.category}</span>
                        </div>
                        <div style={{ padding: '8px 0' }}>
                            {table.dishes.map((dish) => (
                                <Link key={dish.slug} href={`/recipes/${dish.slug}`}
                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '12px 20px', borderBottom: '1px solid rgba(75,46,26,0.06)', textDecoration: 'none', gap: '16px' }}>
                                    <div>
                                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', fontWeight: 600, color: '#2D1A0E' }}>{dish.name}</div>
                                        <div style={{ fontFamily: 'Georgia, serif', fontSize: '12px', color: '#8B6F5A', fontStyle: 'italic', marginTop: '2px' }}>{dish.note}</div>
                                    </div>
                                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: table.color, fontWeight: 600, flexShrink: 0 }}>Recipe →</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                ))}

                <SectionDivider />

                <Section>
                    My grandmother's kitchen has not changed. The same clay pot she used for cá kho tộ twenty years ago still sits on the same gas ring. The wooden mâm is still in the same cabinet. When the family gathers — for Tết, for her birthday, for the death anniversary of my grandfather — she starts cooking at 4pm and the house fills with the smell that I associate, more than any other sensory memory, with the idea of home.
                </Section>

                <Section>
                    In Ho Chi Minh City and Hanoi, in the apartments where my cousins live with their children and their smartphones, the table is different. The mâm has become a dining table. The grandmother is not there. The food sometimes arrives in a cardboard box. But on Sunday afternoons, when the schedule permits, someone cooks. The rice pot goes on. The fish sauce comes out. The children sit close enough to reach the shared dishes. The conversation starts.
                </Section>

                <Section>
                    The Vietnamese family meal has changed in form. In substance — the sharing, the talking, the food that carries memory — it is more resilient than the statistics suggest. It does not need to happen every evening to matter. It needs to happen often enough that the children remember what it felt like. That, apparently, is happening. The question is whether it will keep happening for another generation, in apartments that are smaller and schedules that are busier, in a country that is moving faster than it has ever moved before.
                </Section>

                <PullQuote>
                    "The meal does not need to happen every evening to matter. It needs to happen often enough that the children remember."
                </PullQuote>

                <SectionDivider />

                {/* Related */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ margin: '48px 0', padding: '28px', background: '#FEF3E2', borderLeft: '4px solid #D97706', borderRadius: '0 8px 8px 0' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#D97706', textTransform: 'uppercase', marginBottom: '8px' }}>ALSO READ</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {[
                            { title: 'What Vietnamese Families Eat at Tết', slug: '/stories/tet-food-traditions' },
                            { title: 'The Foods That Follow You: Vietnamese Diaspora', slug: '/stories/vietnamese-diaspora-food' },
                            { title: 'Vietnamese Food Culture for Beginners', slug: '/stories/vietnamese-food-culture-guide' },
                        ].map((item) => (
                            <Link key={item.slug} href={item.slug}
                                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(75,46,26,0.08)', textDecoration: 'none' }}>
                                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', color: '#2D1A0E', fontWeight: 600 }}>{item.title}</span>
                                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#D97706', fontWeight: 600, flexShrink: 0, marginLeft: '12px' }}>Read →</span>
                            </Link>
                        ))}
                    </div>
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

function ThenNowCard({ aspect, then, now, whatsLeft }: {
    aspect: string; then: string; now: string; whatsLeft: string;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55 }}
            style={{ margin: '28px 0', background: '#fff', border: '1px solid rgba(75,46,26,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ padding: '12px 20px', background: '#FDFAF7', borderBottom: '1px solid rgba(75,46,26,0.07)' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#2D1A0E', margin: 0 }}>{aspect}</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                <div style={{ padding: '16px 20px', borderRight: '1px solid rgba(75,46,26,0.07)' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#2D1A0E', marginBottom: '8px', textTransform: 'uppercase' }}>THEN</p>
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', lineHeight: 1.7, color: '#4B2E1A', margin: 0 }}>{then}</p>
                </div>
                <div style={{ padding: '16px 20px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#D97706', marginBottom: '8px', textTransform: 'uppercase' }}>NOW</p>
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '13px', lineHeight: 1.7, color: '#4B2E1A', margin: 0 }}>{now}</p>
                </div>
            </div>
            <div style={{ padding: '12px 20px', background: '#FFFBF0', borderTop: '1px solid rgba(75,46,26,0.07)' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#D97706', letterSpacing: '1px' }}>WHAT SURVIVED: </span>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '12.5px', color: '#6B5544', fontStyle: 'italic' }}>{whatsLeft}</span>
            </div>
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
